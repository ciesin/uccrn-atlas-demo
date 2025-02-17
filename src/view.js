import MapView from "@arcgis/core/views/MapView";
import { map } from "./map.js";

// Create view
const activeView = new MapView({
  zoom: 9,
  center: [-74.006, 40.7128], // NYC coordinates
  container: "viewDiv",
  map: map,
  popupEnabled: true, // Enable popups
  highlightOptions: {
    color: [0, 0, 0, 0],
    haloOpacity: 0,
    fillOpacity: 0
  }
});

export { activeView };
