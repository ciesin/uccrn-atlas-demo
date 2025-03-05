import React, { useRef, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Map from "@arcgis/core/Map";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from "@arcgis/core/widgets/Legend";
import Expand from "@arcgis/core/widgets/Expand";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import esriConfig from "@arcgis/core/config";
import { HomePanel } from "./components";
import { createLayers } from "./components/Layers";
import Search from "@arcgis/core/widgets/Search";

import "./App.css";

// Set API key
esriConfig.apiKey = import.meta.env.ESRI_API_KEY;

function App() {
  const mapDiv = useRef(null);
  const appConfig = useRef({
    mapView: null,
    sceneView: null,
    activeView: null,
    container: null,
    basemapGallery: null,
    layerList: null,
    legend: null,
    timeSlider: null,
    search: null, // Add this line for the search widget
    basemapGalleryExpand: null,
    layerListExpand: null,
    legendExpand: null,
    addLayerExpand: null,
    searchExpand: null // Add this line for the search expand widget
  });
  
  const [viewMode, setViewMode] = useState("3D");
  const [homePanelOpen, setHomePanelOpen] = useState(false);

  // Initialize map and views
  useEffect(() => {
    if (mapDiv.current) {
      // Save reference to the container
      appConfig.current.container = mapDiv.current;

      // Create a map with dark gray basemap
      const map = new Map({
        basemap: "dark-gray",
        // Add attribution
        portalItem: {
          attribution: "CIESIN, Columbia University"
        },
        // Configure default popup template
        defaultPopupTemplateEnabled: true
      });

      // Initial view parameters
      const initialViewParams = {
        container: mapDiv.current,
        map: map,
        zoom: 2,
        center: [0, 0],
        constraints: {
          minZoom: 2,
          maxZoom: 22,
          rotationEnabled: true,
          snapToZoom: false
        },
        ui: {
          components: ["zoom", "compass", "navigation-toggle"]
        }
      };

      // Create 2D view and set as active
      appConfig.current.mapView = createView(initialViewParams, "2d");
      appConfig.current.activeView = appConfig.current.mapView;

      // Create 3D view (won't initialize until container is set)
      initialViewParams.container = null;
      appConfig.current.sceneView = createView(initialViewParams, "3d");

      // Initialize widgets and load layers when the view is ready
      appConfig.current.mapView.when(async () => {
        setupWidgets();
        setupTimeSlider(map);
        setupLayerWatchers(map);
        setupHomePanelToggle();

        // Create loading indicator
        const loadingDiv = document.createElement("div");
        loadingDiv.className = "service-loading-indicator";
        loadingDiv.innerHTML = "Loading climate layers...";
        appConfig.current.activeView.ui.add(loadingDiv, "bottom-left");

        try {
          // Load all layers
          const layers = await createLayers();
          map.addMany(layers);

          // Update loading indicator
          loadingDiv.innerHTML = "Climate layers loaded successfully";
          loadingDiv.className = "service-loading-indicator success";
        } catch (error) {
          console.error("Error loading layers:", error);
          loadingDiv.innerHTML = "Error loading climate layers";
          loadingDiv.className = "service-loading-indicator error";
        }

        // Remove the loading indicator after a few seconds
        setTimeout(() => {
          appConfig.current.activeView.ui.remove(loadingDiv);
        }, 3000);
      });

      // Cleanup
      return () => {
        if (appConfig.current.mapView) {
          appConfig.current.mapView.destroy();
        }
        if (appConfig.current.sceneView) {
          appConfig.current.sceneView.destroy();
        }
      };
    }
  }, []);

  // Handle UI repositioning when the panel opens/closes
  useEffect(() => {
    // Function to adjust UI elements when panel opens/closes
    const adjustUI = () => {
      const topRightUI = document.querySelector('.esri-ui-top-right');
      const bottomRightUI = document.querySelector('.esri-ui-bottom-right');
      
      if (topRightUI) {
        if (homePanelOpen) {
          topRightUI.classList.add('shifted-for-panel');
        } else {
          topRightUI.classList.remove('shifted-for-panel');
        }
      }
      
      if (bottomRightUI) {
        if (homePanelOpen) {
          bottomRightUI.classList.add('shifted-for-panel');
        } else {
          bottomRightUI.classList.remove('shifted-for-panel');
        }
      }
    };
    
    // Call the function whenever the panel state changes
    adjustUI();
    
    // Small timeout to ensure UI is updated after DOM changes
    const timeoutId = setTimeout(adjustUI, 50);
    return () => clearTimeout(timeoutId);
  }, [homePanelOpen]);

  // Create a MapView or SceneView
  function createView(params, type) {
    let view;
    
    // Set transparent highlight options
    const transparentHighlightOptions = {
      color: [0, 0, 0, 0],
      haloOpacity: 0,
      fillOpacity: 0
    };
    
    // Configure popup for docking
    const popupOptions = {
      dockEnabled: true,
      dockOptions: {
        // Dock to bottom-left
        position: "bottom-left",
        // Keep it docked - don't allow undocking
        buttonEnabled: false,
        // Set the size of the docked popup
        breakpoint: false
      }
    };
    
    // Add popup configuration to params
    params.popup = popupOptions;
    
    if (type === "2d") {
      // Add highlightOptions to params
      params.highlightOptions = transparentHighlightOptions;
      view = new MapView(params);
      view.constraints.rotationEnabled = false;
    } 
    else if (type === "3d") {
      // Add highlightOptions to params
      params.highlightOptions = transparentHighlightOptions;
      view = new SceneView(params);
    }
    
    return view;
  }

  // Switch between 2D and 3D views
  function switchView() {
    const is3D = appConfig.current.activeView.type === "3d";
    const activeViewpoint = appConfig.current.activeView.viewpoint.clone();
    const panelWasOpen = homePanelOpen;

    // Compute scale conversion factor
    const latitude = appConfig.current.activeView.center.latitude;
    const scaleConversionFactor = Math.cos((latitude * Math.PI) / 180.0);

    // Clear existing TimeSlider before changing views
    if (appConfig.current.timeSlider) {
      try {
        appConfig.current.activeView.ui.remove(appConfig.current.timeSlider);
      } catch (e) {
        console.log("Error removing time slider during view switch", e);
      }
    }

    // Remove the reference to the container for the previous view
    appConfig.current.activeView.container = null;

    // Switch views
    if (is3D) {
      // 3D to 2D
      activeViewpoint.scale /= scaleConversionFactor;
      appConfig.current.mapView.viewpoint = activeViewpoint;
      appConfig.current.mapView.container = appConfig.current.container;
      appConfig.current.activeView = appConfig.current.mapView;
      setViewMode("3D"); // Button shows what you'll switch TO
    } else {
      // 2D to 3D
      activeViewpoint.scale *= scaleConversionFactor;
      appConfig.current.sceneView.viewpoint = activeViewpoint;
      appConfig.current.sceneView.container = appConfig.current.container;
      appConfig.current.activeView = appConfig.current.sceneView;
      setViewMode("2D"); // Button shows what you'll switch TO
    }

    // Setup widgets for the new active view
    appConfig.current.activeView.when(() => {
      setupWidgets();
      setupTimeSlider(); // This will create a new time slider for the current view
      setupLayerWatchers(appConfig.current.activeView.map);
      setupHomePanelToggle();
      
      // Restore panel state if it was open
      if (panelWasOpen) {
        setTimeout(() => setHomePanelOpen(true), 100);
      }
    });
  }

  // Setup widgets for the active view
  function setupWidgets() {
    // Create basemap gallery widget if it doesn't exist
    if (!appConfig.current.basemapGallery) {
      appConfig.current.basemapGallery = new BasemapGallery({
        view: appConfig.current.activeView
      });
    } else {
      appConfig.current.basemapGallery.view = appConfig.current.activeView;
    }

    // Create layer list widget if it doesn't exist
    if (!appConfig.current.layerList) {
      appConfig.current.layerList = new LayerList({
        view: appConfig.current.activeView,
        // Enable drag to reorder layers
        dragEnabled: true, 
        listItemCreatedFunction: (event) => {
          const item = event.item;
          item.actionsSections = [
            [{
              title: "Zoom to layer",
              className: "esri-icon-zoom-in-magnifying-glass",
              id: "zoom-to"
            }]
          ];
        }
      });

      // Add click event handler for layer list actions
      appConfig.current.layerList.on("trigger-action", (event) => {
        if (event.action.id === "zoom-to") {
          const layer = event.item.layer;
          if (layer.fullExtent) {
            appConfig.current.activeView.goTo(layer.fullExtent);
          }
        }
      });
    } else {
      appConfig.current.layerList.view = appConfig.current.activeView;
    }
    
    // Create legend widget if it doesn't exist
    if (!appConfig.current.legend) {
      appConfig.current.legend = new Legend({
        view: appConfig.current.activeView
      });
    } else {
      appConfig.current.legend.view = appConfig.current.activeView;
    }

    // Create or update basemap gallery expand widget
    if (!appConfig.current.basemapGalleryExpand) {
      appConfig.current.basemapGalleryExpand = new Expand({
        view: appConfig.current.activeView,
        content: appConfig.current.basemapGallery,
        expandIconClass: "esri-icon-basemap",
        expandTooltip: "Change Basemap",
        collapseTooltip: "Close Basemap Gallery",
        expanded: false
      });
    } else {
      appConfig.current.basemapGalleryExpand.view = appConfig.current.activeView;
      appConfig.current.basemapGalleryExpand.content = appConfig.current.basemapGallery;
    }

    // Create or update layer list expand widget
    if (!appConfig.current.layerListExpand) {
      appConfig.current.layerListExpand = new Expand({
        view: appConfig.current.activeView,
        content: appConfig.current.layerList,
        expandIconClass: "esri-icon-layer-list",
        expandTooltip: "Show Layers",
        collapseTooltip: "Hide Layers",
        expanded: false
      });
    } else {
      appConfig.current.layerListExpand.view = appConfig.current.activeView;
      appConfig.current.layerListExpand.content = appConfig.current.layerList;
    }
    
    // Create or update legend expand widget
    if (!appConfig.current.legendExpand) {
      appConfig.current.legendExpand = new Expand({
        view: appConfig.current.activeView,
        content: appConfig.current.legend,
        expandIconClass: "esri-icon-legend",
        expandTooltip: "Show Legend",
        collapseTooltip: "Hide Legend",
        expanded: false
      });
    } else {
      appConfig.current.legendExpand.view = appConfig.current.activeView;
      appConfig.current.legendExpand.content = appConfig.current.legend;
    }

    // Clear UI first to prevent duplicate widgets
    appConfig.current.activeView.ui.empty("top-right");
    appConfig.current.activeView.ui.empty("bottom-right");

    // Add the expand widgets to the top-right corner of the active view
    appConfig.current.activeView.ui.add(appConfig.current.basemapGalleryExpand, "top-right");
    appConfig.current.activeView.ui.add(appConfig.current.layerListExpand, "top-right");
    
    // Add legend to bottom-right
    appConfig.current.activeView.ui.add(appConfig.current.legendExpand, "bottom-right");

    // Re-add the Add Layer widget if it exists
    if (appConfig.current.addLayerExpand) {
      appConfig.current.addLayerExpand.view = appConfig.current.activeView;
      appConfig.current.activeView.ui.add(appConfig.current.addLayerExpand, "top-left");
    }

    // Setup search widget
    setupSearch();

    console.log("Widgets setup complete for", appConfig.current.activeView.type, "view");
  }

  // Setup search widget
  function setupSearch() {
    // Clear existing search widget if it exists
    if (appConfig.current.search) {
      try {
        appConfig.current.search.destroy();
      } catch (e) {
        console.log("Error destroying search widget", e);
      }
      appConfig.current.search = null;
    }
    
    // Clear existing search expand widget if it exists
    if (appConfig.current.searchExpand) {
      try {
        appConfig.current.activeView.ui.remove(appConfig.current.searchExpand);
      } catch (e) {
        console.log("Error removing search expand widget", e);
      }
      appConfig.current.searchExpand = null;
    }

    // Find the UCCRN Case Studies layer
    const uccrnLayer = appConfig.current.activeView.map.allLayers.find(
      layer => layer.title === "Case Studies"
    );
    
    console.log("Case Studies layer found:", uccrnLayer ? "yes" : "no");

    // Create base search sources
    const sources = [
      {
        name: "ArcGIS World Geocoding",
        placeholder: "Find location...",
        apiKey: esriConfig.apiKey,
        singleLineFieldName: "SingleLine",
        url: "https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer",
        locationType: "street-address",
        outFields: ["Addr_type", "Match_addr", "StAddr", "City"],
        maxResults: 3,
        exactMatch: false
      }
    ];

    // Add Case Studies layer as a search source if found
    if (uccrnLayer) {
      // Force outFields to include all fields for searching
      if (uccrnLayer.outFields) {
        if (!uccrnLayer.outFields.includes("*")) {
          uccrnLayer.outFields = ["*"];
        }
      } else {
        uccrnLayer.outFields = ["*"];
      }
      
      sources.push({
        name: "UCCRN Case Studies",
        placeholder: "Search case studies...",
        layer: uccrnLayer,
        searchFields: ["Name", "City", "Country"], // Add the field names you want to search
        displayField: "Name", // Field to display in results
        exactMatch: false,
        outFields: ["*"],
        maxResults: 6,
        maxSuggestions: 6,
        suggestionsEnabled: true,
        minSuggestCharacters: 2,
        popupEnabled: true,
        resultGraphicEnabled: true,
        // Custom result template function to format search results
        resultTemplate: {
          title: "{Name}",
          content: "{City}, {Country}"
        }
      });
      
      console.log("Added Case Studies layer as search source");
    } else {
      console.log("Case Studies layer not found for search source");
    }
    
    // Add coordinates search capability
    sources.push({
      name: "Coordinates",
      placeholder: "Enter coordinates (lat, lon)",
      getResults: (params) => {
        // Parse coordinates from string like "40.7128, -74.0060"
        const input = params.suggestTerm;
        const match = input.match(/^\s*(-?\d+(\.\d+)?)\s*[,\s]\s*(-?\d+(\.\d+)?)\s*$/);
        
        if (match) {
          const latitude = parseFloat(match[1]);
          const longitude = parseFloat(match[3]);
          
          // Check if the coordinates are valid
          if (!isNaN(latitude) && !isNaN(longitude) && 
              latitude >= -90 && latitude <= 90 && 
              longitude >= -180 && longitude <= 180) {
            
            // Return a search result
            return {
              results: [{
                feature: {
                  geometry: {
                    type: "point",
                    x: longitude,
                    y: latitude,
                    spatialReference: {
                      wkid: 4326
                    }
                  },
                  attributes: {
                    ObjectID: 1,
                    Name: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
                    Type: "Coordinates"
                  }
                },
                name: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`,
                extent: {
                  xmin: longitude - 0.05,
                  ymin: latitude - 0.05,
                  xmax: longitude + 0.05,
                  ymax: latitude + 0.05,
                  spatialReference: {
                    wkid: 4326
                  }
                }
              }],
              suggestResults: []
            };
          }
        }
        
        return { results: [], suggestResults: [] };
      }
    });

    // Create a new search widget with the sources
    appConfig.current.search = new Search({
      view: appConfig.current.activeView,
      locationEnabled: true,
      searchAllEnabled: true,
      includeDefaultSources: false,
      sources: sources,
      popupEnabled: true,
      popupOpenOnSelect: true,
      resultGraphicEnabled: true,
      // Configure to use the view's popup configuration
      popupTemplate: {
        // Title and content will be overridden by results
        overwriteActions: true,
        // Use docking configuration from view
        dockEnabled: true,
        dockOptions: {
          position: "bottom-left",
          buttonEnabled: false
        }
      },
      goToOverride: (view, options) => {
        // Adjust scale based on source type
        if (options.source && options.source.name === "UCCRN Case Studies") {
          options.target.scale = 50000; // Closer zoom for case studies
        } else {
          options.target.scale = 100000; // Default zoom level
        }
        
        return view.goTo(options.target).then(() => {
          // Force popup to be docked after navigation
          if (view.popup && view.popup.visible) {
            view.popup.dockEnabled = true;
            view.popup.dock({
              position: "bottom-left"
            });
          }
        });
      }
    });

    // Create an expand widget for the search
    appConfig.current.searchExpand = new Expand({
      view: appConfig.current.activeView,
      content: appConfig.current.search,
      expandIconClass: "esri-icon-search",
      expandTooltip: "Search locations and case studies",
      collapseTooltip: "Close search",
      group: "top-right"
    });

    // Add it to the top-right UI
    appConfig.current.activeView.ui.add(appConfig.current.searchExpand, {
      position: "top-right",
      index: 0 // Add at the beginning so it appears first
    });
    
    console.log("Search widget setup complete");
  }

  // Setup time slider widget that appears only for time-enabled layers
  function setupTimeSlider() {
    // First, remove any existing time sliders from the view
    const timeSliderNodes = document.querySelectorAll('.esri-time-slider');
    timeSliderNodes.forEach(node => {
      // If the node is in the UI, try to find its UI position and remove it
      const parent = node.parentElement;
      if (parent && parent.classList.contains('esri-ui-bottom-left')) {
        try {
          appConfig.current.activeView.ui.remove(parent);
        } catch (e) {
          // In case there's an error removing from UI
          console.log("Error removing time slider from UI", e);
        }
      }
    });
    
    // Clear the existing time slider reference if it exists
    if (appConfig.current.timeSlider) {
      try {
        appConfig.current.timeSlider.destroy();
      } catch (e) {
        // In case the destroy fails
        console.log("Error destroying time slider", e);
      }
      appConfig.current.timeSlider = null;
    }

    // Create a new TimeSlider
    const timeSlider = new TimeSlider({
      view: appConfig.current.activeView,
      mode: "instant",
      layout: "compact",
      visible: false
    });

    // Add it to the UI
    appConfig.current.activeView.ui.add(timeSlider, "bottom-left");
    appConfig.current.timeSlider = timeSlider;
    
    console.log("Time slider setup complete");
  }

  // Set up watchers to monitor for time-enabled layers
  function setupLayerWatchers(map) {
    // Watch for changes to map.layers collection
    map.layers.on("after-changes", () => updateTimeSlider(map));
    
    // Watch for visibility changes on all current and future layers
    map.layers.forEach(layer => {
      watchLayerVisibility(layer, map);
    });
    
    // Watch for new layers being added
    map.layers.on("after-add", event => {
      watchLayerVisibility(event.item, map);
    });
    
    // Initial check for time-enabled layers
    updateTimeSlider(map);
  }

  // Set up visibility watcher for a single layer
  function watchLayerVisibility(layer, map) {
    layer.watch("visible", () => {
      updateTimeSlider(map);
    });
  }

  // Update the time slider based on time-enabled layers
  function updateTimeSlider(map) {
    if (!appConfig.current.timeSlider) return;
    
    // Get all visible time-enabled layers
    const timeEnabledLayers = map.layers.filter(layer => {
      // ImageryLayer with useViewTime or layers with timeInfo
      return layer.visible && (
        (layer.type === "imagery" && layer.useViewTime) ||
        (layer.timeInfo && layer.timeInfo.fullTimeExtent)
      );
    });
    
    console.log(`Found ${timeEnabledLayers.length} visible time-enabled layers`);
    
    if (timeEnabledLayers.length > 0) {
      // Show the time slider
      appConfig.current.timeSlider.visible = true;
      
      // Get the full time extent from all time-enabled layers
      let fullTimeExtent = null;
      
      timeEnabledLayers.forEach(layer => {
        if (layer.timeInfo && layer.timeInfo.fullTimeExtent) {
          if (!fullTimeExtent) {
            fullTimeExtent = layer.timeInfo.fullTimeExtent.clone();
          } else {
            // Expand the existing time extent to include this layer's time extent
            if (layer.timeInfo.fullTimeExtent.start < fullTimeExtent.start) {
              fullTimeExtent.start = layer.timeInfo.fullTimeExtent.start;
            }
            if (layer.timeInfo.fullTimeExtent.end > fullTimeExtent.end) {
              fullTimeExtent.end = layer.timeInfo.fullTimeExtent.end;
            }
          }
        }
      });
      
      if (fullTimeExtent) {
        appConfig.current.timeSlider.fullTimeExtent = fullTimeExtent;
        appConfig.current.timeSlider.stops = {
          interval: {
            value: 1,
            unit: "months"
          }
        };
        
        // Set to most recent date
        appConfig.current.timeSlider.values = [fullTimeExtent.end];
      }
    } else {
      // Hide the time slider if no visible time-enabled layers
      appConfig.current.timeSlider.visible = false;
    }
  }

  // Add a function to toggle the home panel
  function toggleHomePanel() {
    setHomePanelOpen(!homePanelOpen);
  }

  // Update the setupHomePanelToggle function
  function setupHomePanelToggle() {
    // Remove any existing home panel buttons first to avoid duplicates
    const existingButtons = document.querySelectorAll('[data-button-id="home-panel-toggle"]');
    existingButtons.forEach(button => button.remove());
    
    // Create the button element
    const button = document.createElement("button");
    button.className = "esri-component esri-widget--button esri-widget esri-interactive";
    button.title = "Home Panel";
    button.setAttribute("aria-label", "Toggle Home Panel");
    button.setAttribute("data-button-id", "home-panel-toggle");
    
    // Explicitly set inline styles to avoid box-shadow
    button.style.boxShadow = 'none';
    button.style.webkitBoxShadow = 'none';
    button.style.mozBoxShadow = 'none';
    button.style.transform = 'none';
    button.style.border = 'none';
    
    // Create calcite icon
    const iconElement = document.createElement("calcite-icon");
    iconElement.setAttribute("icon", "home");
    iconElement.setAttribute("scale", "s");
    
    // Add the icon to the button
    button.appendChild(iconElement);
    
    // Add click event listener
    button.addEventListener("click", toggleHomePanel);
    
    // Add the button to the view
    appConfig.current.activeView.ui.add(button, "top-right");
  }

  // Make sure we initialize the Calcite components
  useEffect(() => {
    // Import Calcite Components
    import("@esri/calcite-components/dist/calcite/calcite.css");
    import("@esri/calcite-components/dist/components/calcite-icon").then(() => {
      import("@esri/calcite-components/dist/loader").then(module => {
        const { defineCustomElements } = module;
        defineCustomElements(window);
      });
    });
  }, []);

  return (
    <>
      <div className="mapDiv" ref={mapDiv}></div>
      
      {/* Add HomePanel component */}
      <HomePanel 
        isOpen={homePanelOpen} 
        onClose={() => setHomePanelOpen(false)} 
      />
      
      {/* Logo with Beta Badge */}
      <div className={`logo-container ${homePanelOpen ? 'shifted-for-panel' : ''}`}>
        <div className="logo">UCCRN Atlas</div>
        <div className="beta-badge">Beta</div>
      </div>
      
      {/* View mode toggle button */}
      <div className={`infoDiv ${homePanelOpen ? 'shifted-for-panel' : ''}`}>
        <button 
          className="esri-component esri-widget--button esri-widget esri-interactive"
          onClick={switchView}
        >
          {viewMode}
        </button>
      </div>
    </>
  );
}

export default App;