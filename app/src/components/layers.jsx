import ImageryLayer from "@arcgis/core/layers/ImageryLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Layer from "@arcgis/core/layers/Layer";
import { uhiRenderer, leczRenderer } from "./Renderers";

// Multidimensional configuration for time-enabled layers
const multidimensionalSubset = {
  variables: ["UHIInitial", "UHI"],
  dimensions: [{
    name: "StdTime",
    values: [0],
  }]
};

export const createLayers = async () => {
  const layers = [];
  
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
      returnPixelValues: false,
      overwriteActions: true,
      actions: []
    },
    // Disable highlighting
    highlightOptions: false,
    visible: false
  });
  layers.push(yceouhi_v4);

  const lecz_v3 = new ImageryLayer({
    url: "https://gis.earthdata.nasa.gov/image/rest/services/lecz/lecz_urban_rural_population_land_area_estimates_v3/ImageServer",
    renderer: leczRenderer,
    opacity: 0.5,
    title: "Low Elevation Coastal Zone (LECZ) Urban-Rural Population and Land Area Estimates, Version 3",
    useViewTime: false,
    popupEnabled: true,
    popupTemplate: {
      title: "LECZ Values",
      content: "{Raster.ServicePixelValue}m",
      returnPixelValues: true,
      overwriteActions: true,
      actions: []
    },
    // Disable highlighting
    highlightOptions: null,
    visible: false
  });
  layers.push(lecz_v3);
  
  // Add Köppen climate classification layer from portal
  try {
    const koppenLayer = await Layer.fromPortalItem({
      portalItem: {
        id: "20da8d9af73043bd88a3566d5602b86e" 
      }
    });
    
    koppenLayer.title = "Global climate (Köppen–Geiger-climate-classification)";
    koppenLayer.visible = false;
    layers.push(koppenLayer);
  } catch (error) {
    console.error("Error loading Köppen climate classification layer:", error);
  }

  // Add Land Cover layer from portal
    try {
        const landCoverLayer = await Layer.fromPortalItem({
        portalItem: {
            id: "eb4f0fd5274242a18bde901f78f7584d"
        }
        });
    
        landCoverLayer.title = "Global Land Cover";
        landCoverLayer.visible = false;
        layers.push(landCoverLayer);
    } catch (error) {
        console.error("Error loading Land Cover layer:", error);
    }

  // Add GHSL Pop Layer from portal
    try {
        const ghslPopLayer = await Layer.fromPortalItem({
        portalItem: {
            id: "9778e7bddfdc4b7889fd2f385e8346f0"
        }
        });
    
        ghslPopLayer.title = "Global Human Settlement Layer Population";
        ghslPopLayer.visible = true;
        layers.push(ghslPopLayer);
    } catch (error) {
        console.error("Error loading GHSL Population layer:", error);
    }

    // Add UCCRN Base Layer
    try {
        const uccrnBaseLayer = await Layer.fromPortalItem({
        portalItem: {
            id: "9b96670f10bb4f2085cf7cf70ad96b3d"
        }
        });

        // Set outfields
        uccrnBaseLayer.outFields = ["*"];
        uccrnBaseLayer.popupEnabled = true;
    
        uccrnBaseLayer.title = "Case Studies";
        uccrnBaseLayer.visible = true;
        layers.push(uccrnBaseLayer);
    } catch (error) {
        console.error("Error loading UCCRN Base Layer:", error);
    }
  
  return layers;
};