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
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer";
import Portal from "@arcgis/core/portal/Portal";
import PortalItem from "@arcgis/core/portal/PortalItem";
import { HomePanel } from "./components";

import "./App.css";

// Set API key
esriConfig.apiKey = import.meta.env.VITE_ESRI_API_KEY || "";

function App() {
  const mapDiv = useRef(null);
  const appConfig = useRef({
    mapView: null,
    sceneView: null,
    activeView: null,
    container: null,
    basemapGalleryExpand: null,
    layerListExpand: null,
    legendExpand: null,
    timeSlider: null,
    basemapGallery: null,
    layerList: null,
    legend: null,
    addLayerExpand: null
  });
  const [viewMode, setViewMode] = useState("3D");
  const [homePanelOpen, setHomePanelOpen] = useState(false);

  useEffect(() => {
    if (mapDiv.current) {
      // Save reference to the container
      appConfig.current.container = mapDiv.current;

      // Create map with dark gray basemap
      const map = new Map({
        basemap: "dark-gray"
      });

      // Initial view parameters with panning enabled
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

      // Initialize widgets when the view is ready
      appConfig.current.mapView.when(() => {
        setupWidgets();
        setupTimeSlider(map);
        setupLayerWatchers(map);
        setupAddLayerWidget();
        setupHomePanelToggle();
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

  // Add this useEffect to handle UI repositioning when the panel opens/closes
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

  // Setup the "Add Layer" widget
  function setupAddLayerWidget() {
    // Create the Add Layer widget content
    const addLayerDiv = document.createElement("div");
    addLayerDiv.className = "esri-widget add-layer-widget";
    addLayerDiv.innerHTML = `
      <h3>Add Layer</h3>
      <div class="input-group">
        <label for="layer-type">Layer Type:</label>
        <select id="layer-type" class="esri-input">
          <option value="featureLayer">Feature Layer</option>
          <option value="mapImageLayer">Map Image Layer</option>
          <option value="tileLayer">Tiled Layer</option>
          <option value="imageryLayer">Imagery Layer</option>
          <option value="vectorTileLayer">Vector Tile Layer</option>
          <option value="wmsLayer">WMS Layer</option>
          <option value="wmtsLayer">WMTS Layer</option>
          <option value="portalItem">Portal Item</option>
        </select>
      </div>
      <div class="input-group">
        <label for="layer-url">URL or Item ID:</label>
        <input type="text" id="layer-url" class="esri-input" placeholder="Enter URL or Item ID">
      </div>
      <div class="button-group">
        <button id="add-layer-button" class="esri-button">
          Add Layer
        </button>
      </div>
      <div id="layer-add-message" class="message-area"></div>
    `;

    // Rest of the function remains unchanged
    const addLayerExpand = new Expand({
      view: appConfig.current.activeView,
      content: addLayerDiv,
      expandIconClass: "esri-icon-add-layer",
      expandTooltip: "Add Layer",
      collapseTooltip: "Close Add Layer",
      expanded: false,
      group: "top-left"
    });

    // Add the widget to the view
    appConfig.current.activeView.ui.add(addLayerExpand, "top-left");
    appConfig.current.addLayerExpand = addLayerExpand;

    // Rest of the function remains unchanged
    setTimeout(() => {
      const layerTypeSelect = document.getElementById("layer-type");
      const layerUrlInput = document.getElementById("layer-url");
      const addLayerButton = document.getElementById("add-layer-button");
      const messageArea = document.getElementById("layer-add-message");

      if (layerTypeSelect && layerUrlInput && addLayerButton) {
        layerTypeSelect.addEventListener("change", (e) => {
          const type = e.target.value;
          if (type === "portalItem") {
            layerUrlInput.placeholder = "Enter Item ID";
          } else {
            layerUrlInput.placeholder = "Enter URL";
          }
        });

        addLayerButton.addEventListener("click", () => {
          const type = layerTypeSelect.value;
          const url = layerUrlInput.value.trim();
          
          if (!url) {
            messageArea.textContent = "Please enter a valid URL or Item ID";
            messageArea.className = "message-area error";
            return;
          }

          messageArea.textContent = "Adding layer...";
          messageArea.className = "message-area info";
          
          addLayerToMap(type, url)
            .then(() => {
              messageArea.textContent = "Layer added successfully!";
              messageArea.className = "message-area success";
              layerUrlInput.value = "";
            })
            .catch((error) => {
              console.error("Error adding layer:", error);
              messageArea.textContent = `Error: ${error.message || "Failed to add layer"}`;
              messageArea.className = "message-area error";
            });
        });
      }
    }, 100);
  }

  // Add a layer to the map based on type and URL
  async function addLayerToMap(layerType, url) {
    let layer;
    
    try {
      switch (layerType) {
        case "featureLayer":
          layer = new FeatureLayer({
            url: url,
            outFields: ["*"]
          });
          break;
          
        case "mapImageLayer":
          layer = new MapImageLayer({
            url: url
          });
          break;
          
        case "tileLayer":
          layer = new TileLayer({
            url: url
          });
          break;
          
        case "imageryLayer":
          layer = new ImageryLayer({
            url: url
          });
          break;
          
        case "vectorTileLayer":
          layer = new VectorTileLayer({
            url: url
          });
          break;
          
        case "wmsLayer":
          layer = new WMSLayer({
            url: url,
            sublayers: [
              {
                name: "all", // Will attempt to load all available layers
                visible: true
              }
            ]
          });
          break;
          
        case "wmtsLayer":
          layer = new WMTSLayer({
            url: url
          });
          break;
          
        case "portalItem":
          {
            const portalItem = new PortalItem({
              id: url
            });
            
            // Wait for the portal item to load
            await portalItem.load();
            
            // Create the appropriate layer type based on the portal item
            switch (portalItem.type) {
              case "Feature Service":
                layer = new FeatureLayer({
                  portalItem: portalItem
                });
                break;
              case "Map Service":
                layer = new MapImageLayer({
                  portalItem: portalItem
                });
                break;
              case "Image Service":
                layer = new ImageryLayer({
                  portalItem: portalItem
                });
                break;
              case "Tile Layer":
              case "Tile Service":
                layer = new TileLayer({
                  portalItem: portalItem
                });
                break;
              case "Vector Tile Service":
                layer = new VectorTileLayer({
                  portalItem: portalItem
                });
                break;
              case "WMS":
                layer = new WMSLayer({
                  portalItem: portalItem
                });
                break;
              case "WMTS":
                layer = new WMTSLayer({
                  portalItem: portalItem
                });
                break;
              default:
                throw new Error(`Unsupported portal item type: ${portalItem.type}`);
            }
          }
          break;
          
        default:
          throw new Error(`Unsupported layer type: ${layerType}`);
      }
      
      // Wait for the layer to load
      await layer.load();
      
      // Add the layer to the map
      appConfig.current.activeView.map.add(layer);
      
      // Zoom to the layer extent if available
      if (layer.fullExtent) {
        appConfig.current.activeView.goTo(layer.fullExtent);
      }
      
      return layer;
    } catch (error) {
      console.error("Error adding layer:", error);
      throw error;
    }
  }

  // Setup time slider widget that appears only for time-enabled layers
  function setupTimeSlider() {
    // Create the TimeSlider widget
    const timeSlider = new TimeSlider({
      view: appConfig.current.activeView,
      mode: "instant", 
      layout: "compact",
      visible: false 
    });

    // Add the TimeSlider widget to the bottom left of the view
    appConfig.current.activeView.ui.add(timeSlider, "bottom-left");
    appConfig.current.timeSlider = timeSlider;
  }

  // Set up watchers to monitor for time-enabled layers
  function setupLayerWatchers(map) {
    // Watch for changes to map.layers collection
    map.layers.on("after-changes", updateTimeSlider);

    // Initial check for time-enabled layers
    updateTimeSlider();
  }

  // Update the time slider based on time-enabled layers
  function updateTimeSlider() {
    // Get the time extent from all time-enabled layers
    const timeEnabledLayers = appConfig.current.activeView.map.layers.filter(layer => {
      return layer.timeInfo && layer.visible;
    });

    if (timeEnabledLayers.length > 0) {
      // Show the time slider
      if (appConfig.current.timeSlider) {
        appConfig.current.timeSlider.visible = true;

        // Get the full time extent from all time-enabled layers
        let fullTimeExtent = null;
        timeEnabledLayers.forEach(layer => {
          if (layer.timeInfo && layer.timeInfo.fullTimeExtent) {
            if (!fullTimeExtent) {
              fullTimeExtent = layer.timeInfo.fullTimeExtent.clone();
            } else {
              fullTimeExtent.expand(layer.timeInfo.fullTimeExtent);
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
        }
      }
    } else {
      // Hide the time slider if no time-enabled layers
      if (appConfig.current.timeSlider) {
        appConfig.current.timeSlider.visible = false;
      }
    }
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

    console.log("Widgets setup complete for", appConfig.current.activeView.type, "view");
  }

  // Helper function to create either a 2D or 3D view
  function createView(params, type) {
    if (type === "2d") {
      return new MapView(params);
    } else {
      return new SceneView(params);
    }
  }

  // Switch the view between 2D and 3D
  function switchView() {
    const is3D = appConfig.current.activeView.type === "3d";
    const activeViewpoint = appConfig.current.activeView.viewpoint.clone();
    const panelWasOpen = homePanelOpen; // Store current panel state

    // Compute scale conversion factor
    const latitude = appConfig.current.activeView.center.latitude;
    const scaleConversionFactor = Math.cos((latitude * Math.PI) / 180.0);

    // Remove the reference to the container for the previous view
    appConfig.current.activeView.container = null;

    if (is3D) {
      // Switch to 2D
      activeViewpoint.scale /= scaleConversionFactor;
      appConfig.current.mapView.viewpoint = activeViewpoint;
      appConfig.current.mapView.container = appConfig.current.container;
      appConfig.current.activeView = appConfig.current.mapView;
      setViewMode("3D"); // Button shows what you'll switch TO
    } else {
      // Switch to 3D
      activeViewpoint.scale *= scaleConversionFactor;
      appConfig.current.sceneView.viewpoint = activeViewpoint;
      appConfig.current.sceneView.container = appConfig.current.container;
      appConfig.current.activeView = appConfig.current.sceneView;
      setViewMode("2D"); // Button shows what you'll switch TO
    }

    // Setup widgets for the new active view
    appConfig.current.activeView.when(() => {
      setupWidgets();
      setupTimeSlider(appConfig.current.activeView.map);
      setupLayerWatchers(appConfig.current.activeView.map);
      setupAddLayerWidget();
      setupHomePanelToggle();
      
      // Restore panel state if it was open
      if (panelWasOpen) {
        setTimeout(() => setHomePanelOpen(true), 100);
      }
    });
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