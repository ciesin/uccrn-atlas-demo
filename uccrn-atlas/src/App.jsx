import { useRef, useEffect, useState, useCallback } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

import 'mapbox-gl/dist/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'

import './App.css'

function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [showModal, setShowModal] = useState(true);
  const [isRotating, setIsRotating] = useState(false);
  const [isGlobeProjection, setIsGlobeProjection] = useState(true);
  const [isLayerListOpen, setIsLayerListOpen] = useState(false);
  const [activeLayers, setActiveLayers] = useState({
    clusters: true,
    points: true
  });
  const [filters, setFilters] = useState({
    city: '',
    population: 'all',
    climateIntervention: 'all',
    climateZone: 'all',
    keyword: ''
  });
  const [availableValues, setAvailableValues] = useState({
    climateInterventions: [],
    climateZones: [],
    keywords: []
  });
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const mapRef = useRef();
  const mapContainerRef = useRef();
  const userInteractingRef = useRef(false);

  const toggleLayer = useCallback((layerId) => {
    const visibility = !activeLayers[layerId];
    
    if (mapRef.current) {
      mapRef.current.setLayoutProperty(
        layerId === 'points' ? 'unclustered-point' : layerId,
        'visibility',
        visibility ? 'visible' : 'none'
      );
      
      if (layerId === 'clusters') {
        // Also toggle the cluster-count layer
        mapRef.current.setLayoutProperty(
          'cluster-count',
          'visibility',
          visibility ? 'visible' : 'none'
        );
      }
      
      setActiveLayers(prev => ({
        ...prev,
        [layerId]: visibility
      }));
    }
  }, [activeLayers]);

  // Add this function to properly position the layer list
  const positionLayerList = useCallback(() => {
    setTimeout(() => {
      const layerList = document.querySelector('.layer-list');
      const navControls = document.querySelector('.mapboxgl-ctrl-top-right');
      const geocoder = document.querySelector('.mapboxgl-ctrl-geocoder');
      
      if (layerList && navControls) {
        // Get the bottom position of the controls
        const controlsRect = navControls.getBoundingClientRect();
        const controlsBottom = controlsRect.bottom;
        
        // Add some padding (20px)
        const topPosition = controlsBottom + 20;
        
        // Set the top position of the layer list
        layerList.style.top = `${topPosition}px`;
        
        // Set width based on the geocoder if present, otherwise use default
        if (geocoder) {
          const geocoderWidth = geocoder.offsetWidth;
          layerList.style.width = `${Math.max(180, geocoderWidth)}px`;
        }
      }
    }, 100); // Small delay to ensure DOM is updated
  }, []);

  const updateFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const applyFilters = useCallback(() => {
    if (!mapRef.current) return;

    // Create a filter expression for Mapbox GL JS
    let filterExpression = ['all'];

    // Add city filter if specified
    if (filters.city) {
      filterExpression.push([
        'any',
        ['to-string', ['get', 'city_name']].includes(filters.city.toLowerCase()),
        ['to-string', ['get', 'City']].includes(filters.city.toLowerCase())
      ]);
    }

    // Add population filter if specified
    if (filters.population !== 'all') {
      const [min, max] = filters.population.split('-').map(Number);
      if (!isNaN(max)) {
        filterExpression.push(['<=', ['to-number', ['get', 'Metropolitan_Population']], max]);
      }
      if (!isNaN(min)) {
        filterExpression.push(['>=', ['to-number', ['get', 'Metropolitan_Population']], min]);
      }
    }

    // Add climate intervention filter if specified
    if (filters.climateIntervention !== 'all') {
      filterExpression.push([
        'any',
        ['==', ['to-string', ['get', 'Climate_Intervention']], filters.climateIntervention]
      ]);
    }

    // Add climate zone filter if specified
    if (filters.climateZone !== 'all') {
      filterExpression.push([
        '==',
        ['to-string', ['get', 'Climate_Zone']],
        filters.climateZone
      ]);
    }

    // Add keyword filter if specified
    if (filters.keyword) {
      filterExpression.push([
        'any',
        ['to-string', ['get', 'Keywords']].includes(filters.keyword.toLowerCase()),
        ['to-string', ['get', 'Solutions']].includes(filters.keyword.toLowerCase()),
        ['to-string', ['get', 'Title']].includes(filters.keyword.toLowerCase())
      ]);
    }

    // Apply the filter to the unclustered points layer
    mapRef.current.setFilter('unclustered-point', filterExpression);

    // We need special handling for clusters since they need to be filtered differently
    // This is more complex and requires filtering the source data
    // We'll use a custom property to track which points should be included in clusters
    const sourceData = mapRef.current.getSource('uccrn-cities')._data;
    
    if (sourceData && sourceData.features) {
      // Apply filters to each feature
      sourceData.features.forEach(feature => {
        let matches = true;
        
        if (filters.city) {
          const cityName = (feature.properties.city_name || feature.properties.City || '').toLowerCase();
          matches = matches && cityName.includes(filters.city.toLowerCase());
        }
        
        if (filters.climateIntervention !== 'all') {
          matches = matches && feature.properties.Climate_Intervention === filters.climateIntervention;
        }
        
        if (filters.climateZone !== 'all') {
          matches = matches && feature.properties.Climate_Zone === filters.climateZone;
        }
        
        if (filters.keyword) {
          const keywords = (feature.properties.Keywords || '').toLowerCase();
          const solutions = (feature.properties.Solutions || '').toLowerCase();
          const title = (feature.properties.Title || '').toLowerCase();
          matches = matches && (
            keywords.includes(filters.keyword.toLowerCase()) || 
            solutions.includes(filters.keyword.toLowerCase()) || 
            title.includes(filters.keyword.toLowerCase())
          );
        }
        
        if (filters.population !== 'all') {
          const population = parseInt(feature.properties.Metropolitan_Population || '0', 10);
          const [min, max] = filters.population.split('-').map(Number);
          if (!isNaN(max)) {
            matches = matches && population <= max;
          }
          if (!isNaN(min)) {
            matches = matches && population >= min;
          }
        }
        
        // Store the filter result on the feature
        feature.properties.filter_match = matches;
      });
      
      // Update the source data with our filtered features
      mapRef.current.getSource('uccrn-cities').setData(sourceData);
      
      // Update the cluster filter to only include points that match our filter
      mapRef.current.setFilter('clusters', [
        'all',
        ['has', 'point_count'],
        ['==', ['get', 'filter_match'], true]
      ]);
      
      // Update cluster count filter as well
      mapRef.current.setFilter('cluster-count', [
        'all',
        ['has', 'point_count'],
        ['==', ['get', 'filter_match'], true]
      ]);
    }

  }, [filters]);

  useEffect(() => {
    // Use the environment variable instead of hardcoded API key
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_API_KEY;
    
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      zoom: 2,
      attributionControl: false,
      logoPosition: 'top-left',
      style: 'mapbox://styles/mapbox/streets-v12', 
      projection: 'globe' // Default to globe projection
    });

    mapRef.current.on('style.load', () => {
      mapRef.current.setFog({
      color: 'rgb(186, 210, 235)', // Lower atmosphere
      'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
      'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': 'rgb(11, 11, 25)', // Background color
      'star-intensity': 0.6 // Background star brightness (default 0.35 at low zooms)
      });
    });
    // Add attribution control with compact setting and CIESIN attribution
    mapRef.current.addControl(new mapboxgl.AttributionControl({
      compact: true,
      customAttribution: '<a href="https://ciesin.columbia.edu" target="_blank">CIESIN</a>'
    }));

    // Create a geocoder control for searching
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: {
        color: '#1a73e8'
      },
      placeholder: 'Search for cities',
      zoom: 10,
      countries: '',
      types: 'place,locality,district,neighborhood',
      flyTo: {
        speed: 0.9,
        curve: 1.2,
        padding: 50
      }
    });

    // Add search control to the top-right
    mapRef.current.addControl(geocoder, 'top-right');

    // Add navigation controls (zoom buttons and rotation) to the top-right side
    mapRef.current.addControl(
      new mapboxgl.NavigationControl({ 
        showCompass: true,
        showZoom: true,
        visualizePitch: true
      }), 
      'top-right'
    );

    // Get the navigation control container - use a single approach to add the layers button
    setTimeout(() => {
      // First check if button already exists to avoid duplicates
      const existingLayersButton = document.querySelector('.layers-control-button');
      if (existingLayersButton) {
        // Remove existing button to prevent duplicates
        existingLayersButton.remove();
      }

      const navContainer = document.querySelector('.mapboxgl-ctrl-top-right .mapboxgl-ctrl-group');
      
      if (navContainer) {
        // Create a layers button that will toggle the layer list
        const layersButton = document.createElement('button');
        layersButton.className = 'mapboxgl-ctrl-icon layers-control-button';
        layersButton.type = 'button';
        layersButton.setAttribute('aria-label', 'Toggle layers');
        layersButton.setAttribute('title', 'Toggle layers');
        layersButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
          </svg>
        `;
        
        // Add the layers button to the navigation container
        navContainer.appendChild(layersButton);
        
        // Toggle the layer list visibility when clicking the layers button
        layersButton.addEventListener('click', () => {
          toggleLayerList();
        });
      }
    }, 200); // Short delay to ensure the nav control is fully rendered

    // Pause spinning on interaction
    mapRef.current.on('mousedown', () => {
      userInteractingRef.current = true;
    });

    mapRef.current.on('dragstart', () => {
      userInteractingRef.current = true;
    });

    // When interaction ends, set a timeout before allowing rotation again
    mapRef.current.on('mouseup', () => {
      setTimeout(() => {
        userInteractingRef.current = false;
      }, 1000);
    });

    mapRef.current.on('dragend', () => {
      setTimeout(() => {
        userInteractingRef.current = false;
      }, 1000);
    });

    // When animation is complete, start spinning if enabled and no ongoing interaction
    mapRef.current.on('moveend', () => {
      if (isRotating) {
        spinGlobe();
      }
    });

    // Wait for the map to load before adding sources and layers
    mapRef.current.on('load', () => {
      // Add UCCRN CSA Feature Service as a source
      mapRef.current.addSource('uccrn-cities', {
        type: 'geojson',
        // Using the UCCRN CSA Feature Service with GeoJSON output format
        data: 'https://services2.arcgis.com/IsDCghZ73NgoYoz5/arcgis/rest/services/uccrn_csa/FeatureServer/0/query?where=1=1&outFields=*&f=geojson',
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50
      });

      // Add a circle layer for clustered points
      mapRef.current.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'uccrn-cities',
        filter: ['has', 'point_count'],
        layout: {
          visibility: 'visible' // Set initial visibility to match state
        },
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#51bbd6', // Light blue for small clusters
            5,         // Number of points threshold
            '#f1f075', // Yellow for medium clusters
            10,        // Number of points threshold
            '#f28cb1'  // Pink for large clusters
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,        // 20px radius for small clusters
            5,         // Number of points threshold
            25,        // 25px radius for medium clusters
            10,        // Number of points threshold
            30         // 30px radius for large clusters
          ]
        }
      });

      // Add a symbol layer for cluster counts
      mapRef.current.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'uccrn-cities',
        filter: ['has', 'point_count'],
        layout: {
          visibility: 'visible', // Set initial visibility to match state
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12
        }
      });

      // Add a layer for individual points
      mapRef.current.addLayer({
        id: 'unclustered-point',
        type: 'circle',
        source: 'uccrn-cities',
        filter: ['!', ['has', 'point_count']],
        layout: {
          visibility: 'visible' // Set initial visibility to match state
        },
        paint: {
          'circle-color': '#1a73e8',
          'circle-radius': 8,
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff'
        }
      });

      // Add click event for clusters
      mapRef.current.on('click', 'clusters', (e) => {
        const features = mapRef.current.queryRenderedFeatures(e.point, {
          layers: ['clusters']
        });
        const clusterId = features[0].properties.cluster_id;
        
        mapRef.current.getSource('uccrn-cities').getClusterExpansionZoom(
          clusterId,
          (err, zoom) => {
            if (err) return;
            
            mapRef.current.easeTo({
              center: features[0].geometry.coordinates,
              zoom: zoom
            });
          }
        );
      });

      // Add click event for individual points with updated property fields
      mapRef.current.on('click', 'unclustered-point', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;
        
        // Create popup content with the new fields
        const popupContent = `
          <div class="popup-content">
            <h3>${properties.city_name || properties.City || 'Unknown City'}</h3>
            <p><strong>Country:</strong> ${properties.Country || 'Not specified'}</p>
            <p><strong>Region:</strong> ${properties.Region || 'Not specified'}</p>
            <p><strong>Climate Zone:</strong> ${properties.Climate_Zone || 'Not specified'}</p>
            ${properties.Title ? `<p><strong>Study:</strong> ${properties.Title}</p>` : ''}
            ${properties.Solutions ? `<p><strong>Solutions:</strong> ${properties.Solutions}</p>` : ''}
            ${properties.Climate_Intervention ? `<p><strong>Interventions:</strong> ${properties.Climate_Intervention}</p>` : ''}
            ${properties.Abstract ? 
              `<div class="abstract-section">
                <h4>Abstract</h4>
                <p>${properties.Abstract.length > 200 ? properties.Abstract.substring(0, 200) + '...' : properties.Abstract}</p>
               </div>` 
            : ''}
            ${properties.DOI ? `<p><a href="https://doi.org/${properties.DOI}" target="_blank">View Publication</a></p>` : ''}
          </div>
        `;
        
        // Create and add popup
        new mapboxgl.Popup({
          maxWidth: '300px',
          closeButton: true,
          closeOnClick: true,
          className: 'uccrn-popup'
        })
          .setLngLat(coordinates)
          .setHTML(popupContent)
          .addTo(mapRef.current);
      });

      // Change cursor on hover
      mapRef.current.on('mouseenter', 'clusters', () => {
        mapRef.current.getCanvas().style.cursor = 'pointer';
      });
      
      mapRef.current.on('mouseleave', 'clusters', () => {
        mapRef.current.getCanvas().style.cursor = '';
      });

      mapRef.current.on('mouseenter', 'unclustered-point', () => {
        mapRef.current.getCanvas().style.cursor = 'pointer';
      });
      
      mapRef.current.on('mouseleave', 'unclustered-point', () => {
        mapRef.current.getCanvas().style.cursor = '';
      });

      // Make sure to position when navigation controls get added
      setTimeout(positionLayerList, 300);
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Add effect to position the layer list when it opens
  useEffect(() => {
    if (isLayerListOpen) {
      positionLayerList();
      
      // Also reposition on window resize while open
      window.addEventListener('resize', positionLayerList);
      
      return () => {
        window.removeEventListener('resize', positionLayerList);
      };
    }
  }, [isLayerListOpen, positionLayerList]);

  // Add a function to toggle between globe and Mercator projections
  const toggleProjection = () => {
    if (!mapRef.current) return;
    
    // Get current center and zoom before changing projection
    const center = mapRef.current.getCenter();
    const zoom = mapRef.current.getZoom();
    
    // Toggle projection type
    const newProjection = isGlobeProjection ? 'mercator' : 'globe';
    mapRef.current.setProjection(newProjection);
    
    // Update state
    setIsGlobeProjection(!isGlobeProjection);
    
    // If switching to flat map, stop any rotation
    if (isGlobeProjection && isRotating) {
      setIsRotating(false);
    }
    
    // Re-center and zoom to maintain view
    mapRef.current.jumpTo({ center, zoom });
    
    // If switching to globe, update fog setting
    if (!isGlobeProjection) {
      mapRef.current.once('style.load', () => {
        mapRef.current.setFog({
          color: 'rgb(186, 210, 235)', // Lower atmosphere
          'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
          'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
          'space-color': 'rgb(11, 11, 25)', // Background color
          'star-intensity': 0.6 // Background star brightness (default 0.35 at low zooms)
        });
      });
    }
  };

  // Update effect for rotation state changes
  useEffect(() => {
    if (isRotating) {
      spinGlobe();
    }
  }, [isRotating]);

  // The spinning function needs to be fixed to maintain animation
  const spinGlobe = () => {
    if (!mapRef.current) return;
  
    // The following values control rotation speed:
    // At low zooms, complete a revolution every four minutes (240 seconds)
    const secondsPerRevolution = 240;
    // Above zoom level 5, do not rotate.
    const maxSpinZoom = 5;
    // Rotate at intermediate speeds between zoom levels 3 and 5.
    const slowSpinZoom = 3;
  
    const zoom = mapRef.current.getZoom();
    if (isRotating && !userInteractingRef.current && zoom < maxSpinZoom) {
      let distancePerSecond = 360 / secondsPerRevolution;
      if (zoom > slowSpinZoom) {
        // Slow spinning at higher zooms
        const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
        distancePerSecond *= zoomDif;
      }
      const center = mapRef.current.getCenter();
      center.lng -= distancePerSecond;
      
      // Smoothly animate the map over one second.
      // When this animation is complete, it calls a 'moveend' event.
      mapRef.current.easeTo({ 
        center, 
        duration: 1000, 
        easing: (n) => n 
      });
    }
  };

  // Update the moveend event handler to ensure continuous rotation
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.on('moveend', () => {
        if (isRotating && !userInteractingRef.current) {
          spinGlobe();
        }
      });
    }
    
    return () => {
      if (mapRef.current) {
        // Clean up event listener on unmount
        mapRef.current.off('moveend');
      }
    };
  }, [isRotating]); // Re-attach when isRotating changes

  // Toggle rotation function
  const toggleRotation = () => {
    if (!isRotating) {
      // Start rotation
      setIsRotating(true);
      // Start spinning immediately without waiting for moveend
      setTimeout(() => {
        if (mapRef.current) {
          spinGlobe();
        }
      }, 10);
    } else {
      // Stop rotation
      setIsRotating(false);
    }
  };

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Also add this to your existing layer button click handler
  const toggleLayerList = () => {
    setIsLayerListOpen(prev => {
      const newState = !prev;
      if (newState) {
        // Position the list when opening
        setTimeout(positionLayerList, 10);
      }
      return newState;
    });
  };

  useEffect(() => {
    const extractFilterValues = () => {
      if (!mapRef.current) return;
      
      const sourceData = mapRef.current.getSource('uccrn-cities')?._data;
      if (!sourceData || !sourceData.features) return;
      
      // Extract unique values for dropdown filters
      const interventions = new Set();
      const zones = new Set();
      const keywordSet = new Set();
      
      sourceData.features.forEach(feature => {
        if (feature.properties.Climate_Intervention) {
          interventions.add(feature.properties.Climate_Intervention);
        }
        
        if (feature.properties.Climate_Zone) {
          zones.add(feature.properties.Climate_Zone);
        }
        
        if (feature.properties.Keywords) {
          feature.properties.Keywords.split(',').forEach(keyword => {
            keywordSet.add(keyword.trim());
          });
        }
      });
      
      setAvailableValues({
        climateInterventions: Array.from(interventions).sort(),
        climateZones: Array.from(zones).sort(),
        keywords: Array.from(keywordSet).sort()
      });
    };

    // Try to extract values once the map is loaded
    if (mapRef.current) {
      mapRef.current.once('sourcedata', (e) => {
        if (e.sourceId === 'uccrn-cities' && mapRef.current.isSourceLoaded('uccrn-cities')) {
          extractFilterValues();
        }
      });
    }
  }, []);

  useEffect(() => {
    if (mapRef.current && mapRef.current.isStyleLoaded()) {
      applyFilters();
    }
  }, [filters, applyFilters]);

  return (
    <>
      <div className="app-header">
        <div className="logo-container">
          <div className="beta-badge">Beta</div>
          <h1 className="logo-text">UCCRN Atlas</h1>
        </div>
      </div>
      
      <div className={`side-panel ${isPanelOpen ? 'open' : 'closed'}`}>
        <button 
          className="panel-toggle" 
          onClick={togglePanel}
          aria-label={isPanelOpen ? 'Close panel' : 'Open panel'}
        >
          {isPanelOpen ? '→' : '←'}
        </button>
        <div className="panel-content">
            <h2>City Solutions Case Studies</h2>
            <p>The map displays major cities from around the world.</p>
            <p>Click on clusters to zoom in, or on individual cities to see more information.</p>
            <div className="filters-section">
              <h3 className="filter-header">Filter Case Studies</h3>
              
              <div className="filter-controls">
                {/* Population filter */}
                <div className="filter-group">
                  <label htmlFor="population-filter">City Population</label>
                  <select 
                    id="population-filter"
                    value={filters.population}
                    onChange={(e) => updateFilter('population', e.target.value)}
                  >
                    <option value="all">All Populations</option>
                    <option value="0-100000">Under 100,000</option>
                    <option value="100000-1000000">100,000 - 1 million</option>
                    <option value="1000000-5000000">1 - 5 million</option>
                    <option value="5000000-10000000">5 - 10 million</option>
                    <option value="10000000-100000000">Over 10 million</option>
                  </select>
                </div>
                
                {/* Climate Zone filter */}
                <div className="filter-group">
                  <label htmlFor="climate-zone-filter">Climate Zone</label>
                  <select 
                    id="climate-zone-filter"
                    value={filters.climateZone}
                    onChange={(e) => updateFilter('climateZone', e.target.value)}
                  >
                    <option value="all">All Climate Zones</option>
                    {availableValues.climateZones.map(zone => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                </div>
                
                {/* Climate Intervention filter */}
                <div className="filter-group">
                  <label htmlFor="intervention-filter">Climate Intervention</label>
                  <select 
                    id="intervention-filter"
                    value={filters.climateIntervention}
                    onChange={(e) => updateFilter('climateIntervention', e.target.value)}
                  >
                    <option value="all">All Interventions</option>
                    {availableValues.climateInterventions.map(intervention => (
                      <option key={intervention} value={intervention}>{intervention}</option>
                    ))}
                  </select>
                </div>
                
                {/* Reset button */}
                <button 
                  className="filter-reset-button"
                  onClick={() => setFilters({
                    city: '',
                    population: 'all',
                    climateIntervention: 'all',
                    climateZone: 'all',
                    keyword: ''
                  })}
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>
      </div>
      
      <div className="map-controls-bottom-left">
        {/* Rotation button */}
        <button 
          className="rotation-button"
          onClick={toggleRotation}
          aria-label={isRotating ? 'Pause rotation' : 'Start rotation'}
          disabled={!isGlobeProjection}
          title={isGlobeProjection ? (isRotating ? 'Pause rotation' : 'Start rotation') : 'Rotation only available in globe view'}
        >
          {isRotating ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M525-200h60v-560h-60v560Zm-150 0h60v-560h-60v560Z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M320-203v-560l440 280-440 280Z"/>
            </svg>
          )}
        </button>
        
        {/* Projection toggle button */}
        <button 
          className="projection-button"
          onClick={toggleProjection}
          aria-label={isGlobeProjection ? 'Switch to flat map' : 'Switch to globe view'}
          title={isGlobeProjection ? 'Switch to flat map' : 'Switch to globe view'}
        >
          {isGlobeProjection ? (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-82v-78q-33 0-56.5-23.5T360-320v-40L168-552q-3 18-5.5 36t-2.5 36q0 121 79.5 212T440-162Zm276-102q50-39 82-96.5t38-119.5H720v-80h-80v-80h-80v-80h-80v80h-80v80h-80v118l236 236q25-13 47-31.5t43-46.5Z"/>
            </svg>
          )}
        </button>
      </div>
      
      {showModal && (
        <div className="modal-overlay">
          <div className="welcome-modal">
            <div className="modal-content">
              <h2>Welcome to the UCCRN Climate Atlas</h2>
              <p>
                This interactive tool allows you to explore climate data and projections for cities around the world. 
                The Atlas integrates case studies, climate scenarios, and adaptation strategies to support urban climate 
                change resilience planning.
              </p>
              <p>
                Navigate the map to discover city-specific information and use the side panel to access 
                detailed case studies and climate solutions.
              </p>
            </div>
            <div className="modal-footer">
              <button onClick={closeModal} className="get-started-btn">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className={`layer-list ${isLayerListOpen ? 'open' : 'closed'}`}>
        <button 
          className="layer-list-close"
          onClick={() => setIsLayerListOpen(false)}
          aria-label="Close layer list"
        />
        <h3>Map Layers</h3>
        <div className="layer-item">
          <label>
            <input
              type="checkbox"
              checked={activeLayers.clusters}
              onChange={() => toggleLayer('clusters')}
            />
            City Clusters
          </label>
        </div>
        <div className="layer-item">
          <label>
            <input
              type="checkbox"
              checked={activeLayers.points}
              onChange={() => toggleLayer('points')}
            />
            Individual Cities
          </label>
        </div>
      </div>
      
      <div id='map-container' ref={mapContainerRef}/>
    </>
  )
}

export default App