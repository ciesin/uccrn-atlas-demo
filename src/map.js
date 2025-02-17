import Basemap from "@arcgis/core/Basemap";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";
import { uhiRenderer } from '../renderers/uhiRenderer.js';
import { leczRenderer } from '../renderers/leczRenderer.js';
import MultidimensionalSubset from "@arcgis/core/layers/support/MultidimensionalSubset";

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
    content: "{Raster.ServicePixelValue} Celcius", // Simple display of pixel value
    returnPixelValues: true  // Important: This ensures pixel values are returned
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
})

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

// Create map with basemap and layers
const map = new Map({
  basemap: basemap,
  layers: [yceouhi_v4, lecz_v3, ssp245, nycLayer, laLayer, copLayer, mexLayer]
});

export { map };
