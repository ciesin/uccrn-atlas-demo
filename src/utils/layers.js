import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import MapImageLayer from "@arcgis/core/layers/MapImageLayer";
import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer";
import ImageryTileLayer from "@arcgis/core/layers/ImageryTileLayer.js";
import TileLayer from "@arcgis/core/layers/TileLayer.js";
import VectorTileLayer from "@arcgis/core/layers/VectorTileLayer.js";
import WebTileLayer from "@arcgis/core/layers/WebTileLayer.js";
import WMSLayer from "@arcgis/core/layers/WMSLayer.js";
import WMTSLayer from "@arcgis/core/layers/WMTSLayer.js";
import { uhi } from "../renders/uhi.js";
import { lecz } from "../renders/lecz.js";

// Define operational layers
const yceouhi_v4 = new ImageryLayer({
    url: "https://gis.earthdata.nasa.gov/image/rest/services/sdei/ciesin_sedac_sdei_yceouhi_v4/ImageServer",
    renderer: uhi,
    opacity: 0.7,
    title: "Yale Center for Earth Observation (YCEO) Surface Urban Heat Islands, Version 4, 2003-2018",
    useViewTime: true,
    popupEnabled: true,
    popupTemplate: {
      title: "UHI Values",
      content: "{Raster.ServicePixelValue} Celcius",
      returnPixelValues: false
    },
    visible: false
});

const lecz_v3 = new ImageryLayer({
    url: "https://gis.earthdata.nasa.gov/image/rest/services/lecz/lecz_urban_rural_population_land_area_estimates_v3/ImageServer",
    renderer: lecz,
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

// Add portal layers to the getAllLayers function
export function getAllLayers() {
    return [
        yceouhi_v4,
        lecz_v3
    ];
}
