import { esriConfig } from "./config.js";
import { map } from "./map.js";
import { activeView } from "./view.js";
import { widgets } from "./widgets.js";
import { nycLayer, laLayer, copLayer, mexLayer } from "./layers.js";
import { updatePdfIframe, handleLayerViewClick } from "./utils.js";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "./style.css";

// Function to transfer UI components
function transferUIComponents() {
  activeView.ui.add(logoDiv, "top-left");
  activeView.ui.add(bgExpand, "top-right");
  activeView.ui.add(searchExpand, "top-right");
  activeView.ui.add(selectorExpand, "top-left");
  activeView.ui.add(legendExpand, "bottom-right");
  activeView.ui.add(layerListExpand, "top-left");
  activeView.ui.add(timeSliderExpand, "bottom-left");
  activeView.ui.move("zoom", "top-right");
}

// Create layer list widget
const layerListExpand = widgets.createLayerList(activeView);

// Create time slider widget
const timeSliderExpand = widgets.createTimeSlider(activeView);

// Create feature widget and expand widget
const { featureExpand, pdfIframe } = widgets.createFeatureWidget(activeView, map);

// Add expand widget to the view
activeView.ui.add(featureExpand, "top-right");

// Create widgets
const zoom = widgets.createZoom(activeView);

// Create basemap gallery widget
const bgExpand = widgets.createBasemapGallery(activeView);

// Create legend widget
const legendExpand = widgets.createLegend(activeView);

// Initialize time slider when view and layer are ready
activeView.when(() => {
  // Initialize time slider
  yceouhi_v4.when(() => {
    timeSlider.fullTimeExtent = yceouhi_v4.timeInfo.fullTimeExtent;
    timeSlider.stops = {
      interval: yceouhi_v4.timeInfo.interval
    };
  });
});

// Update time slider configuration
timeSlider.when(() => {
  timeSlider.watch("timeExtent", (timeExtent) => {
    multidimensionalSubset.subsetDefinitions[0].values = [
      timeExtent.start.getTime(),
      timeExtent.end.getTime()
    ];
    yceouhi_v4.refresh();
  });
});

// Create logo container
const logoDiv = document.createElement("div");
logoDiv.className = "logo-container";
logoDiv.textContent = "UCCRN Atlas Demo";

// Create intro modal
const modal = document.createElement('div');
modal.innerHTML = `
  <div class="modal">
    <div class="modal-content">
      <h2>Welcome to UCCRN Atlas Demo</h2>
      <button id="closeModal">Get Started</button>
    </div>
  </div>
`;

document.body.appendChild(modal);

document.getElementById('closeModal').onclick = () => {
  modal.style.display = 'none';
};

// Add the widgets to the view
activeView.ui.add(logoDiv, "top-left");
activeView.ui.move("zoom", "top-right");  // Move zoom widget
activeView.ui.add(bgExpand, "top-right"); // Add basemap gallery
activeView.ui.add(layerListExpand, "top-left"); // Move layer list below logo
activeView.ui.add(timeSliderExpand, "bottom-left"); // Time slider stays in bottom-left
activeView.ui.add(legendExpand, "bottom-right"); // Add legend widget

function updateTimeSliderVisibility() {
  const hasVisibleTimeLayer = activeView.map.layers.some(layer => 
    layer.visible && layer.timeInfo
  );
  timeSliderExpand.visible = hasVisibleTimeLayer;
  timeSliderExpand.container.classList.toggle('time-slider-hidden', !hasVisibleTimeLayer);
}

activeView.map.layers.forEach(layer => {
  layer.watch("visible", updateTimeSliderVisibility);
});

// Track the currently open widget
let currentOpenWidget = null;

// Function to close the currently open widget
function closeCurrentWidget() {
  if (currentOpenWidget) {
    currentOpenWidget.expanded = false;
    currentOpenWidget = null;
  }
}

// Add click event listeners for both layers
activeView.whenLayerView(nycLayer).then((layerView) => {
  activeView.on("click", (event) => handleLayerViewClick(event, nycLayer, "New York City"));
});

activeView.whenLayerView(laLayer).then((layerView) => {
  activeView.on("click", (event) => handleLayerViewClick(event, laLayer, "Los Angeles City"));
});

activeView.whenLayerView(copLayer).then((layerView) => {
  activeView.on("click", (event) => handleLayerViewClick(event, copLayer, "Copenhagen"));
});

activeView.whenLayerView(mexLayer).then((layerView) => {
  activeView.on("click", (event) => handleLayerViewClick(event, mexLayer, "Mexico City"));
});

// Add click handler to close feature widget when clicking outside
activeView.on("click", (event) => {
  activeView.hitTest(event).then((response) => {
    if (response.results.length === 0 && featureExpand.expanded) {
      featureExpand.expanded = false;
      currentOpenWidget = null;
    }
  });
});

// Create variable selector container
const rendererDiv = document.createElement("div");
rendererDiv.id = "rendererDiv";
rendererDiv.className = "esri-widget renderer-container";

// Add heading
const heading = document.createElement("h3");
heading.className = "esri-widget__heading renderer-heading";
heading.textContent = "Multidimensional Filter";
rendererDiv.appendChild(heading);

// Add description text
const description = document.createElement("p");
description.className = "esri-widget__paragraph renderer-description";
description.textContent = "Filter UHI data by variables and time.";
rendererDiv.appendChild(description);

// Add select label
const selectLabel = document.createElement("label");
selectLabel.className = "esri-feature-form__label renderer-label";
selectLabel.textContent = "Select a variable:";
rendererDiv.appendChild(selectLabel);

// Create expand widget
const selectorExpand = new Expand({
  view: activeView,
  content: rendererDiv,
  expanded: false,
  expandIcon: "filter"
});

// Add to view UI
activeView.ui.add(selectorExpand, "top-left");

// Get multidimensional variables when layer loads
yceouhi_v4.when(() => {
  const variables = yceouhi_v4.rasterInfo.multidimensionalInfo.variables;
  
  // Create select element with variables
  const variableSelect = document.createElement("select");
  variableSelect.id = "variableName";
  variableSelect.className = "esri-input esri-select renderer-select";

  // Add options from layer variables
  variables.forEach(variable => {
    const option = document.createElement("option");
    option.value = variable.name;
    option.textContent = variable.description || variable.name;
    variableSelect.appendChild(option);
  });

  // Handle variable changes
  variableSelect.addEventListener("change", () => {
    const selectedVar = variableSelect.value;
    const timeValues = variableDefinitions.find(v => v.name === selectedVar)?.values || [];
    
    // Update multidimensional definition to include both time and Z dimension
    const newDefinitions = [
      {
        variableName: selectedVar,
        dimensionName: "StdTime",
        values: timeValues,
        isSlice: false
      },
      {
        variableName: selectedVar,
        dimensionName: "StdZ",
        values: [0, 2],
        isSlice: false
      }
    ];
    
    yceouhi_v4.multidimensionalDefinition = newDefinitions;
    yceouhi_v4.refresh();
  });

  // Add to renderer div
  rendererDiv.appendChild(variableSelect);
});

// Create search widget with GeoJSON sources
const searchExpand = widgets.createSearchWidget(activeView, [nycLayer, laLayer, copLayer, mexLayer]);

// Add to view UI
activeView.ui.add(searchExpand, "top-right");

// Add function to check multidimensional layer visibility
function updateMultidimensionalFilterVisibility() {
  const hasVisibleMultidimensionalLayer = activeView.map.layers.some(layer => 
    layer.visible && layer === yceouhi_v4
  );
  
  // Toggle expand widget visibility
  selectorExpand.visible = hasVisibleMultidimensionalLayer;
  selectorExpand.container.classList.toggle('filter-hidden', !hasVisibleMultidimensionalLayer);
}

// Watch for layer visibility changes
activeView.map.layers.forEach(layer => {  layer.watch("visible", updateMultidimensionalFilterVisibility);
});

// Initial visibility check
updateMultidimensionalFilterVisibility();

// Add popup content function
function getPopupContent(feature) {
  const values = feature.attributes?.pixels?.[0] || [];
  const pixelValue = feature.attributes?.PixelValue || 'No data';
  const date = feature.attributes?.StdTime ? new Date(feature.attributes.StdTime) : 'N/A';
  
  return `
    <div class="popup-content">
      <p><strong>UHI Value:</strong> ${pixelValue}</p>
      <p><strong>Raw Values:</strong> ${values.join(', ')}</p>
      <p><strong>Date:</strong> ${date instanceof Date ? date.toLocaleDateString() : date}</p>
    </div>
  `;
}

// Update click handler for pixel identification
activeView.on("click", (event) => {
  const point = activeView.toMap(event);
  if (!point) return;

  // Use identify with specific options
  const identifyParams = {
    geometry: point,
    returnPixelValues: true,
    returnCatalogItems: false
  };

  yceouhi_v4.identify(identifyParams).then((response) => {
    if (response && response.catalogItems && response.catalogItems.length > 0) {
      const pixelInfo = response.catalogItems[0];
      const values = response.pixels?.[0] || [];
      
      activeView.popup.open({
        location: point,
        title: "UHI Values",
        content: `
          <div class="popup-content">
            <p><strong>Pixel Value:</strong> ${values[0] || 'No data'}</p>
            <p><strong>All Values:</strong> ${values.join(', ')}</p>
          </div>
        `
      });
    }
  }).catch((error) => {
    console.error("Error identifying pixel value:", error);
  });
});
