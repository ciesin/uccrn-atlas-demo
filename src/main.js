import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView"; // Add this line
import WebMap from "@arcgis/core/WebMap";
import Legend from "@arcgis/core/widgets/Legend";
import Search from "@arcgis/core/widgets/Search";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import LayerList from "@arcgis/core/widgets/LayerList";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Basemap from "@arcgis/core/Basemap";
import colorMapIcon from './assets/color-map.png';

import { getAllLayers } from "./utils/layers.js";
import { plausible } from "./utils/analytics.js";

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

// Define popup configuration before creating views
const popupConfig = {
  dockEnabled: true,
  dockOptions: {
    buttonEnabled: false,
    breakpoint: false,
    position: "bottom-left"
  }
};

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

// Create a set of fields to exclude
const excludedFields = new Set([
  'OBJECTID',
  'unique_identifier',
  'ObjectId', 
  'FID', 
  'GlobalID', 
  'Shape', 
  'Shape_Length', 
  'Shape_Area'
]);

// Update the popup template
const popupTemplate = {
  title: "{Title}",
  outFields: ["*"],
  content: async (feature) => {
    const div = document.createElement("div");
    div.className = "custom-popup";
    
    // Create main content table
    const table = document.createElement("table");
    table.className = "popup-table";
    
    // Get layer and field configurations
    const layer = feature.graphic.layer;
    const fields = layer.fields || [];
    const fieldMap = new Map(fields.map(f => [f.name, f.alias || f.name]));
    
    // Add attribute rows, excluding system fields
    Object.entries(feature.graphic.attributes).forEach(([field, value]) => {
      if (value && !excludedFields.has(field)) {
        const row = table.insertRow();
        const fieldCell = row.insertCell();
        const valueCell = row.insertCell();
        
        fieldCell.className = "field-name";
        // Use field alias if available, otherwise format the field name
        fieldCell.textContent = fieldMap.get(field) || 
                               field.replace(/([A-Z])/g, ' $1')
                                   .replace(/_/g, ' ')
                                   .trim();
        
        valueCell.className = "field-value";
        valueCell.textContent = value;
      }
    });
    
    div.appendChild(table);

    // Handle attachments
    try {
      const objectId = feature.graphic.attributes.OBJECTID;
      const serviceUrl = "https://services2.arcgis.com/IsDCghZ73NgoYoz5/arcgis/rest/services/uccrn_base_layer/FeatureServer/0";
      
      // Construct attachment URL
      const attachmentUrl = `${serviceUrl}/${objectId}/attachments/${objectId}`;
      
      // Log the constructed URL
      console.log('Attachment URL:', attachmentUrl);
      
      // Create document viewer section
      const viewerSection = document.createElement("div");
      viewerSection.className = "document-viewer-section";
      
      const heading = document.createElement("h3");
      heading.className = "viewer-heading";
      heading.textContent = "Related Document";
      
      const iframe = document.createElement("iframe");
      iframe.src = attachmentUrl;
      iframe.className = "document-frame";
      
      // Log iframe creation
      console.log('Creating iframe with URL:', iframe.src);
      
      viewerSection.appendChild(heading);
      viewerSection.appendChild(iframe);
      div.appendChild(viewerSection);
    } catch (error) {
      console.error("Error handling attachments:", error);
    }
    
    return div;
  }
};

// Configure popup settings
view.popup.dockEnabled = true;
view.popup.dockOptions = {
  buttonEnabled: false,
  breakpoint: false,
  position: "bottom-left"
};

// Apply popup template to case_locations layer only
view.when(() => {
  webmap.loadAll().then(() => {
    // Find the UCCRN Atlas group layer
    const uccrnGroup = webmap.layers.find(layer => 
      layer.title?.toLowerCase().includes("uccrn atlas")
    );
    
    if (uccrnGroup?.layers) {
      // Find and apply popup template only to case_locations layer
      const caseLayer = uccrnGroup.layers.find(layer => 
        layer.title?.toLowerCase().includes("case locations")
      );
      
      if (caseLayer) {
        caseLayer.popupTemplate = popupTemplate;
      }
    }
  });
});

// Sheet handling
const optionsSheet = document.getElementById("optionsSheet");
const optionsPanel = document.getElementById("optionsPanel");

// Handle panel close
optionsPanel?.addEventListener("calcitePanelClose", () => {
  optionsSheet.open = false;
  document.body.classList.remove('panel-open');
});

// Handle chip selections
document.querySelector("calcite-chip-group")?.addEventListener("calciteChipGroupSelect", (event) => {
  const selectedChip = event.target.selectedItems[0];
  
  switch(selectedChip?.value) {
    case "base":
      bgExpand.expand();
      break;
    case "legend":
      legendExpand.expand();
      break;
    case "layers":
      llExpand.expand();
      break;
  }
});

// Handle opacity changes
document.querySelector("calcite-slider")?.addEventListener("calciteSliderChange", (event) => {
  const opacity = event.target.value;
  webmap.layers.forEach(layer => {
    layer.opacity = opacity;
  });
});

// Handle display mode changes
document.querySelector("calcite-segmented-control")?.addEventListener("calciteSegmentedControlSelect", (event) => {
  const mode = event.detail;
  webmap.layers.forEach(layer => {
    layer.visible = mode === "visible" || mode === "highlight";
  });
});

document.querySelector('calcite-button[slot="footer"]')
        .addEventListener('click', handleApplyChanges);

// Add the handleApplyChanges function
function handleApplyChanges() {
  // Get current settings from UI components
  const opacity = document.querySelector("calcite-slider")?.value;
  const displayMode = document.querySelector("calcite-segmented-control")?.value;

  // Apply settings
  if (opacity !== undefined) {
    webmap.layers.forEach(layer => {
      layer.opacity = opacity;
    });
  }

  if (displayMode) {
    webmap.layers.forEach(layer => {
      layer.visible = displayMode === "visible" || displayMode === "highlight";
    });
  }

  // Close the options panel
  optionsSheet.open = false;
  optionsPanel.closed = true;
  document.body.classList.remove('panel-open');
}

// Add this after your other event listeners:
document.querySelector("calcite-chip-group")?.addEventListener("calciteChipGroupSelect", (event) => {
  const selectedSolutions = event.target.selectedItems;
  
  // Find the case_locations layer in the UCCRN Atlas group
  const uccrnGroup = webmap.layers.find(layer => 
    layer.title?.toLowerCase().includes("uccrn atlas")
  );
  
  const caseLayer = uccrnGroup?.layers.find(layer => 
    layer.title?.toLowerCase().includes("case_locations")
  );
  
  if (caseLayer) {
    if (selectedSolutions.length === 0) {
      // Show all features if no solutions are selected
      caseLayer.definitionExpression = "";
    } else {
      // Create definition expression for selected solutions
      const solutionQueries = selectedSolutions.map(chip => {
        // Handle combined terms in the Solutions field
        let solutionValue = chip.textContent.trim();
        if (solutionValue === "Urban Planning" || 
            solutionValue === "Design" || 
            solutionValue === "Architecture") {
          return `Solutions LIKE '%${solutionValue}%'`;
        }
        return `Solutions LIKE '%${solutionValue}%'`;
      });
      
      caseLayer.definitionExpression = solutionQueries.join(" OR ");
    }
  }
});

// Add this with your other event listeners
document.querySelector("calcite-combobox")?.addEventListener("calciteComboboxChange", (event) => {
  const selectedValue = event.target.selectedItems[0]?.value;
  
  // Find the case_locations layer
  const uccrnGroup = webmap.layers.find(layer => 
    layer.title?.toLowerCase().includes("uccrn atlas")
  );
  
  const caseLayer = uccrnGroup?.layers.find(layer => 
    layer.title?.toLowerCase().includes("case_locations")
  );
  
  if (caseLayer) {
    if (selectedValue === "all") {
      // Clear the provenance filter
      if (caseLayer.definitionExpression) {
        // Keep any existing solutions filters
        caseLayer.definitionExpression = caseLayer.definitionExpression
          .split(' AND ')
          .filter(expr => !expr.includes('Provenance'))
          .join(' AND ');
      }
    } else {
      const provenanceFilter = `Provenance LIKE '%${selectedValue === 'city-network' ? 'City Network' : 'Knowledge Network'}%'`;
      
      if (caseLayer.definitionExpression) {
        // Combine with existing solutions filters
        const existingFilters = caseLayer.definitionExpression
          .split(' AND ')
          .filter(expr => !expr.includes('Provenance'));
        caseLayer.definitionExpression = [...existingFilters, provenanceFilter].join(' AND ');
      } else {
        caseLayer.definitionExpression = provenanceFilter;
      }
    }
  }
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