import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import WebMap from "@arcgis/core/WebMap";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LayerList from "@arcgis/core/widgets/LayerList";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Basemap from "@arcgis/core/Basemap";
import FeatureFilter from "@arcgis/core/layers/support/FeatureFilter";
import colorMapIcon from './assets/color-map.png';

import { plausible } from "./utils/analytics.js";
import { getAllLayers } from "./utils/layers.js";
import { popupConfig, initializePopup } from './utils/popup.js';
import { 
  initializeSolutionFilters, 
  initializeProvenanceFilter,
  initializeClimateInterventionFilter,
  initializePopulationFilter 
} from './utils/filters.js';

import "@esri/calcite-components";
import "./style.css";

// Set favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/png';
favicon.href = colorMapIcon;
document.head.appendChild(favicon);

const webmap = new WebMap({
  portalItem: {
    id: "a3108e4f40434380b21fcd0fc80c01fc",
  },
  layers: getAllLayers()
});

// Create MapView with popup config
const view = new MapView({
  container: "viewDiv",
  map: webmap,
  center: [0, 0],
  zoom: 2,
  ui: {
    components: ["zoom", "attribution"] // Only keep zoom controls, removes attribution
  },
  popup: popupConfig
});

// Initialize popup
initializePopup(view);

// Add this after the view declaration but before other widget setup
let activeView = view;

// Create container for views
const container = document.getElementById("viewDiv");

// Create SceneView with popup config
const sceneView = new SceneView({
  container: null,
  map: webmap,
  center: [0, 0],
  zoom: 2,
  ui: {
    components: ["zoom", "attribution"]
  },
  popup: popupConfig
});

// Replace the button creation code with this
const switchButton = document.getElementById("viewSwitchBtn");

// Function to switch views
const switchView = () => {
  const is3D = activeView === view;
  
  // Store references to all UI widgets with their positions
  const widgetPositions = [
    { component: searchWidget, position: "top-right", index: 0 },
    { component: llExpand, position: "top-right", index: 1 },
    { component: legendExpand, position: "top-right", index: 2 },
    { component: bgExpand, position: "top-right", index: 3 },
    { component: timeSliderExpand, position: "top-right", index: 4 },
    { component: document.querySelector('.logo-container'), position: "top-left", index: 0 },
    { component: homeBtn, position: "top-right", index: 6 },
    { component: switchButton, position: "top-right", index: 5 }
  ];

  // Safely close popup if it exists
  if (activeView.popup?.visible) {
    activeView.popup.visible = false;
  }

  // Remove widgets from current view
  activeView.ui.empty();
  
  // Switch container and view
  activeView.container = null;
  
  if (is3D) {
    activeView = sceneView;
    switchButton.label = "2D";
    switchButton.iconStart = "map";
  } else {
    activeView = view;
    switchButton.label = "3D";
    switchButton.iconStart = "globe";
  }
  
  // Set the new container
  activeView.container = container;

  // Update widget view references
  [searchWidget, basemapGallery, legend, layerList, timeSlider].forEach(widget => {
    if (widget) {
      widget.view = activeView;
    }
  });

  // Re-add widgets to new view
  widgetPositions.forEach(widget => {
    if (widget.component) {
      activeView.ui.add({
        component: widget.component,
        position: widget.position,
        index: widget.index
      });
    }
  });

  // Set zoom controls
  activeView.ui.components = ["zoom", "attribution"];

  // Ensure popup configuration is set
  if (activeView.popup) {
    activeView.popup.set(popupConfig);
  }
};

// Add click event listener
switchButton.addEventListener("click", switchView);

// Add the switch button to the initial view
view.ui.add(switchButton, "top-right");

// Add logo container to the view
view.ui.add({
  component: document.querySelector('.logo-container'),
  position: "top-left",
  index: 0
});

const searchWidget = new Search({
  view: view,
  expanded: false
});

const basemapGallery = new BasemapGallery({
  view: view,
  source: [
    Basemap.fromId("osm"),  // osm no labels
    Basemap.fromId("satellite"),  // satellite no labels
  ]
});

const legend = new Legend({
  view: view,
});

const legendExpand = new Expand({
  view: view,
  content: legend,
  expanded: false,
});

const layerList = new LayerList({
  view: view,
  dragEnabled: true,
});

const llExpand = new Expand({
  view: view,
  content: layerList,
  expanded: false,
});

const bgExpand = new Expand({
  view: view,
  content: basemapGallery,
  expanded: false,
});

const timeSlider = new TimeSlider({
  view: view,
  mode: "instant",
  expanded: false,
  container: document.createElement("div")
});

const timeSliderExpand = new Expand({
  view: view,
  content: timeSlider,
  expanded: false,
  expandIconClass: "esri-icon-time-clock",
  group: "bottom-right"
});

view.ui.add(timeSliderExpand, {
  position: "bottom-right"
});

const homeBtn = document.getElementById("homeBtn");

homeBtn?.addEventListener("click", () => {
  optionsSheet.open = !optionsSheet.open;
  optionsPanel.closed = false;
  document.body.classList.toggle('panel-open', optionsSheet.open);
});

view.ui.add({
  component: homeBtn,
  position: "top-right",
  index: 4
});

// Sheet handling
const optionsSheet = document.getElementById("optionsSheet");
const optionsPanel = document.getElementById("optionsPanel");

// Handle panel close
optionsPanel?.addEventListener("calcitePanelClose", () => {
  optionsSheet.open = false;
  document.body.classList.remove('panel-open');
});

// Keep the view.when() callback as is
view.when(() => {
  // Set initial panel state
  optionsSheet.open = true;
  optionsPanel.closed = false;
  document.body.classList.add('panel-open');
  
  view.ui.add([
    {
      component: searchWidget,
      position: "top-right",
      index: 0
    },
    {
      component: llExpand,
      position: "top-right",
      index: 1
    },
    {
      component: legendExpand,
      position: "top-right",
      index: 2
    },
    {
      component: bgExpand,
      position: "top-right",
      index: 3
    },
    {
      component: timeSliderExpand,
      position: "top-right",
      index: 4
    }
  ]);
});

// Find and initialize the case study layer
view.when(() => {
  webmap.loadAll().then(() => {
    const uccrnGroup = webmap.layers.find(layer => 
      layer.title?.toLowerCase().includes("uccrn atlas")
    );
    
    if (uccrnGroup?.layers) {
      const caseLayer = uccrnGroup.layers.find(layer => 
        layer.title?.toLowerCase().includes("case locations")
      );
      
      if (caseLayer) {
        // Wait for the layer view to be ready
        view.whenLayerView(caseLayer).then(layerView => {
          // Initialize all filters with the layerView
          initializeSolutionFilters(caseLayer, view, layerView);
          initializeProvenanceFilter(caseLayer, view, layerView);
          initializeClimateInterventionFilter(caseLayer, view, layerView);
          initializePopulationFilter(caseLayer, view, layerView);
        }).catch(error => {
          console.error("Error getting layer view:", error);
        });
      }
    }
  }).catch(error => {
    console.error("Error loading web map:", error);
  });
});

// Add similar initialization for sceneView if needed
sceneView.when(() => {
  const uccrnGroup = webmap.layers.find(layer => 
    layer.title?.toLowerCase().includes("uccrn atlas")
  );
  
  if (uccrnGroup?.layers) {
    const caseLayer = uccrnGroup.layers.find(layer => 
      layer.title?.toLowerCase().includes("case locations")
    );
    
    if (caseLayer) {
      sceneView.whenLayerView(caseLayer).then(layerView => {
        initializeSolutionFilters(caseLayer, sceneView, layerView);
        initializeProvenanceFilter(caseLayer, sceneView, layerView);
        initializeClimateInterventionFilter(caseLayer, sceneView, layerView);
        initializePopulationFilter(caseLayer, sceneView, layerView);
      }).catch(error => {
        console.error("Error getting 3D layer view:", error);
      });
    }
  }
});