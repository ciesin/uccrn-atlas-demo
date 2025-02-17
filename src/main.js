import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import Basemap from "@arcgis/core/Basemap";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Zoom from "@arcgis/core/widgets/Zoom";
import esriConfig from "@arcgis/core/config";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Legend from "@arcgis/core/widgets/Legend";
import { uhiRenderer } from '../renderers/uhiRenderer.js';
import { leczRenderer } from '../renderers/leczRenderer.js';
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import Feature from "@arcgis/core/widgets/Feature";
import MultidimensionalSubset from "@arcgis/core/layers/support/MultidimensionalSubset";
import Search from "@arcgis/core/widgets/Search";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";
import Layer from "@arcgis/core/layers/Layer";
import Portal from "@arcgis/core/portal/Portal";
import PortalGroup from "@arcgis/core/portal/PortalGroup";

import "@esri/calcite-components/dist/calcite/calcite.css";
import "./style.css";

// Set the API key
esriConfig.apiKey = "AAPTxy8BH1VEsoebNVZXo8HurIWA0Kb8hy8QYktHa6tfxwpxL5sq5rL-OKSuRlzZC9F2Vx9RXZcShiMwuHMhLzuysGK9DOZXmlj8YtO2q-kOSOKJDJvfGUXZvDIQFnEYAcX1-GyD7A6h2ctULOaxG58EdiJ2r7EN13WWi2UbSYOGXS-ZOcb_XWNfetLgtAVFJc5JdCw2uxz1O3cMlKRkpu9oae3RWwAU6gtPusEZVd6hbjY.AT1_ZoJgL2zc";

// Create grey canvas basemap
const basemap = Basemap.fromId("dark-gray-vector");

// Create variable definitions with multiple variables and dimensions
const variableDefinitions = [
  {
    name: "temperature",
    label: "Surface Temperature",
    dimensionName: "StdTime",
    values: [
      new Date(2003, 0, 1).getTime(),
      new Date(2018, 11, 31).getTime()
    ]
  },
  {
    name: "uhi",
    label: "Urban Heat Island",
    dimensionName: "StdTime",
    values: [
      new Date(2003, 0, 1).getTime(),
      new Date(2018, 11, 31).getTime()
    ]
  }
];

// Create enhanced multidimensional subset
const multidimensionalSubset = new MultidimensionalSubset({
  subsetDefinitions: [
    {
      variableName: "temperature",
      dimensionName: "StdTime",
      values: variableDefinitions[0].values,
      isSlice: false
    },
    {
      variableName: "uhi",
      dimensionName: "StdTime",
      values: variableDefinitions[1].values,
      isSlice: false
    },
  ]
});

// Create imagery layers
const yceouhi_v4 = new ImageryLayer({
  url: "https://gis.earthdata.nasa.gov/image/rest/services/sdei/ciesin_sedac_sdei_yceouhi_v4/ImageServer",
  renderer: uhiRenderer,
  opacity: 0.7,
  title: "Yale Center for Earth Observation (YCEO) Surface Urban Heat Islands, Version 4, 2003-2018",
  multidimensionalSubset: multidimensionalSubset,
  useViewTime: true,
  popupEnabled: true,
  popupTemplate: {
    title: "UHI Values",
    content: "{Raster.ServicePixelValue} Celcius",
    returnPixelValues: false
  },
});

const lecz_v3 = new ImageryLayer({
  url: "https://gis.earthdata.nasa.gov/image/rest/services/lecz/lecz_urban_rural_population_land_area_estimates_v3/ImageServer",
  renderer: leczRenderer,
  opacity: 0.5,
  title: "Low Elevation Coastal Zone (LECZ) Urban-Rural Population and Land Area Estimates, Version 3",
  useViewTime: true,
  popupEnabled: true,
  popupTemplate: {
    title: "LECZ Values",
    content: "{Raster.ServicePixelValue}m",
    returnPixelValues: true
  },
  visible: false
});

const ssp245 = new ImageryTileLayer({
  url: "https://tiledimageservices2.arcgis.com/IsDCghZ73NgoYoz5/arcgis/rest/services/changeintemp_10pct_2050s_ssp245_2050s_ssp245_subset_test2/ImageServer",
  opacity:0.5,
  title: "changeintemp_10pct_2050s_ssp245-2050s-ssp245_subset",
  useViewTime: false,
  popupEnabled: true,
  popupTemplate: {
    title: "ssp245",
    content: "{Raster.ServicePixelValue}",
    returnPixelValues: true
  },
  visible: false
});

// Create GeoJSON layers with correct relative paths
const layerOptions = {
  selectionEnabled: false,
  defaultPopupTemplateEnabled: false,
  renderer: {
    type: "simple",
    symbol: {
      type: "simple-fill",
      color: [0, 0, 0, 0],
      outline: {
        color: [0, 255, 0, 1],
        width: 1
      }
    }
  }
};

const nycLayer = new GeoJSONLayer({
  url: new URL("../cities/new-york-city.geojson", import.meta.url).href,
  title: "New York City",
  ...layerOptions
});

const laLayer = new GeoJSONLayer({
  url: new URL("../cities/los-angeles.geojson", import.meta.url).href,
  title: "Los Angeles City",
  ...layerOptions
});

const copLayer = new GeoJSONLayer({
  url: new URL("../cities/copenhagen.geojson", import.meta.url).href,
  title: "Copenhagen",
  ...layerOptions
});

const mexLayer = new GeoJSONLayer({
  url: new URL("../cities/mexico-city.geojson", import.meta.url).href,
  title: "Mexico City",
  ...layerOptions
});

const saLayer = new GeoJSONLayer({
  url: new URL("../cities/singapore.geojson", import.meta.url).href,
  title: "Singapore",
  ...layerOptions
});

// Create map with basemap and layers
const map = new Map({
  basemap: basemap,
  layers: [yceouhi_v4, lecz_v3, ssp245, nycLayer, laLayer, copLayer, mexLayer, saLayer],
  // Add attribution
  portalItem: {
    attribution: "CIESIN, Columbia University"
  }
});

// Add portal layer
Layer.fromPortalItem({
  portalItem: {
    id: "20da8d9af73043bd88a3566d5602b86e"
  }
}).then((layer) => {
  layer.visible = true; // Start with layer hidden
  map.add(layer);

  // Add layer to layer list
  layerList.operationalItems.add({
    layer: layer,
    title: "Global climate (Köppen–Geiger-climate-classification)"
  });
});

// Setup portal and group query
const portal = new Portal();
portal.load().then(() => {
  const portalGroup = new PortalGroup({
    id: "96adc565a1054c1cb405efc9b89edb9b",
    portal: portal
  });

  portalGroup.load().then(() => {
    const queryParams = {
      query: "type: Feature Layer",
      sortField: "title",
      sortOrder: "asc",
      num: 100
    };

    const queryOptions = {
      reference: {
        portal: portal
      }
    };

    portalGroup.queryItems(queryParams, queryOptions).then((results) => {
      results.results.forEach(item => {
        Layer.fromPortalItem({
          portalItem: item
        }).then(layer => {
          layer.visible = false;
          map.add(layer);
          
          layerList.operationalItems.add({
            layer: layer,
            title: item.title
          });
        }).catch(error => {
          console.error("Error loading layer:", error);
        });
      });
    });
  });
});

// Create view
const activeView = new MapView({
  zoom: 2,
  center: [-74.006, 40.7128], // NYC coordinates
  container: "viewDiv",
  map: map,
  popupEnabled: true,
  highlightOptions: {
    color: [0, 0, 0, 0],
    haloOpacity: 0,
    fillOpacity: 0
  }
});

// Create layer list widget with reordering enabled
const layerList = new LayerList({
  view: activeView,
  dragEnabled: true, // Enable drag and drop
  listItemCreatedFunction: (event) => {
    const item = event.item;
  }
});

// Handle layer reordering actions
layerList.on("trigger-action", (event) => {
  const layer = event.item.layer;
  const index = map.layers.indexOf(layer);

  if (event.action.id === "move-up" && index > 0) {
    map.reorder(layer, index - 1);
  } else if (event.action.id === "move-down" && index < map.layers.length - 1) {
    map.reorder(layer, index + 1);
  }
});

// Create expand widget for layer list
const layerListExpand = new Expand({
  view: activeView,
  content: layerList,
  expanded: false
});

// Create time slider widget
const timeSlider = new TimeSlider({
  view: activeView,
  container: document.createElement("div")
});

// Create expand widget for time slider
const timeSliderExpand = new Expand({
  view: activeView,
  content: timeSlider,
  expanded: false
});

// Create feature widget and expand widget
const featureWidgetContainer = document.createElement("div");
featureWidgetContainer.style.width = "100%";
featureWidgetContainer.style.height = "100%";

const featureWidget = new Feature({
  container: featureWidgetContainer,
  map: map,
  spatialReference: activeView.spatialReference
});

// Create iframe for PDF
const pdfIframe = document.createElement("iframe");
pdfIframe.style.width = "100%";
pdfIframe.style.height = "calc(100vh - 100px)";
pdfIframe.style.border = "none";
pdfIframe.style.display = "block";

// Add iframe to feature widget container
featureWidgetContainer.appendChild(pdfIframe);

const featureExpand = new Expand({
  view: activeView,
  content: featureWidgetContainer,
  expanded: false,
  expandIconClass: "esri-icon-layer-list",
  expandTooltip: "Feature Details"
});

// Add expand widget to the view
activeView.ui.add(featureExpand, "top-right");

// Create widgets
const zoom = new Zoom({
  view: activeView
});

// Create basemap gallery widget
const basemapGallery = new BasemapGallery({
  view: activeView
});

// Create expand widget for basemap gallery
const bgExpand = new Expand({
  view: activeView,
  content: basemapGallery,
  expanded: false
});

// Create legend widget
const legend = new Legend({
  view: activeView
});

// Create expand widget for legend (used only on mobile)
const legendExpand = new Expand({
  view: activeView,
  content: legend,
  expanded: false,
  expandIconClass: "esri-icon-legend"
});

// Initialize time slider when view and layer are ready
activeView.when(() => {
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

// Add settings icon to the top right side
const settingsButton = document.createElement("div");
settingsButton.className = "esri-widget esri-widget--button esri-icon esri-icon-settings";
settingsButton.icon = "gear";
settingsButton.addEventListener("click", () => {
  dialog.open = true;
});

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

// Function to update the PDF iframe source based on the city
function updatePdfIframe(city) {
  const pdfBasePath = "./pdfs/";
  let pdfPath;
  
  try {
    if (city === "New York City") {
      pdfPath = `${pdfBasePath}nyc-test.pdf#zoom=35`;
    } else if (city === "Los Angeles City") {
      pdfPath = `${pdfBasePath}la-test.pdf#zoom=35`;
    } else if (city === "Copenhagen") {
      pdfPath = `${pdfBasePath}cop-test.pdf#zoom=35`;
    } else if (city === "Mexico City") {
      pdfPath = `${pdfBasePath}mex-test.pdf#zoom=35`;
    }
    
    if (pdfPath) {
      pdfIframe.src = pdfPath;
      pdfIframe.onerror = () => {
        console.error(`Failed to load PDF for ${city}`);
      };
    }
  } catch (error) {
    console.error(`Error loading PDF for ${city}:`, error);
  }
}

// Function to handle layer view click events
function handleLayerViewClick(event, layer, city) {
  activeView.hitTest(event).then((response) => {
    const results = response.results;
    
    if (results.length > 0 && results[0].graphic.layer === layer) {
      const graphic = results[0].graphic;
      
      featureWidget.graphic = graphic;
      updatePdfIframe(city);
      closeCurrentWidget();
      featureExpand.expanded = true;
      currentOpenWidget = featureExpand;
    }
  });
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

// Get multidimensional variables when layer loads
yceouhi_v4.when(() => {
  const variables = yceouhi_v4.rasterInfo.multidimensionalInfo.variables;
  
  const variableSelect = document.createElement("select");
  variableSelect.id = "variableName";
  variableSelect.className = "esri-input esri-select renderer-select";

  variables.forEach(variable => {
    const option = document.createElement("option");
    option.value = variable.name;
    option.textContent = variable.description || variable.name;
    variableSelect.appendChild(option);
  });

  variableSelect.addEventListener("change", () => {
    const selectedVar = variableSelect.value;
    const timeValues = variableDefinitions.find(v => v.name === selectedVar)?.values || [];
    
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

  rendererDiv.appendChild(variableSelect);
});

// Create search widget with GeoJSON sources
const searchWidget = new Search({
  view: activeView,
  includeDefaultSources: false,
  sources: [
    {
      layer: nycLayer,
      searchFields: ["name", "uccrn"],
      displayField: "name",
      exactMatch: false,
      outFields: ["*"],
      name: "New York City",
      placeholder: "Search NYC"
    },
    {
      layer: laLayer,
      searchFields: ["name", "uccrn"],
      displayField: "name",
      exactMatch: false,
      outFields: ["*"],
      name: "Los Angeles",
      placeholder: "Search LA"
    },
    {
      layer: copLayer,
      searchFields: ["name", "uccrn"],
      displayField: "name",
      exactMatch: false,
      outFields: ["*"],
      name: "Copenhagen",
      placeholder: "Search Copenhagen"
    },
    {
      layer: mexLayer,
      searchFields: ["name", "uccrn"],
      displayField: "name",
      exactMatch: false,
      outFields: ["*"],
      name: "Mexico City",
      placeholder: "Search Mexico City"
    },
    {
      layer: saLayer,
      searchFields: ["name", "uccrn"],
      displayField: "name",
      exactMatch: false,
      outFields: ["*"],
      name: "Singapore",
      placeholder: "Search Singapore"
    }
  ],
  popupEnabled: false,
  popupTemplate: {
    title: "{name}"
  }
});

// Create expand widget for search
const searchExpand = new Expand({
  view: activeView,
  content: searchWidget,
  expanded: false,
  expandIconClass: "esri-icon-search"
});

// Create expand widget
const selectorExpand = new Expand({
  view: activeView,
  content: rendererDiv,
  expanded: false,
  expandIcon: "filter"
});

// Add to view UI
activeView.ui.add(searchExpand, "top-right");
// Add the widgets to the view
activeView.ui.add(logoDiv, "top-left");
activeView.ui.add(featureExpand, "top-right");
activeView.ui.move("zoom", "top-right");
activeView.ui.add(bgExpand, "top-right");
activeView.ui.add(layerListExpand, "top-left");
activeView.ui.add(timeSliderExpand, "bottom-left");
activeView.ui.add(legendExpand, "bottom-right");
activeView.ui.add(settingsButton, "top-right");

// Add to view UI
activeView.ui.add(selectorExpand, "top-left");

// Add function to check multidimensional layer visibility
function updateMultidimensionalFilterVisibility() {
  const hasVisibleMultidimensionalLayer = activeView.map.layers.some(layer => 
    layer.visible && layer === yceouhi_v4
  );
  
  selectorExpand.visible = hasVisibleMultidimensionalLayer;
  selectorExpand.container.classList.toggle('filter-hidden', !hasVisibleMultidimensionalLayer);
}

activeView.map.layers.forEach(layer => {
  layer.watch("visible", updateMultidimensionalFilterVisibility);
});

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