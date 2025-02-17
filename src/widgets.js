import Expand from '@arcgis/core/widgets/Expand';
import LayerList from "@arcgis/core/widgets/LayerList";
import TimeSlider from "@arcgis/core/widgets/TimeSlider";
import Zoom from "@arcgis/core/widgets/Zoom";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery";
import Legend from "@arcgis/core/widgets/Legend";
import Feature from "@arcgis/core/widgets/Feature";
import Search from "@arcgis/core/widgets/Search";

const widgets = {
  createLayerList: (view) => {
    const layerList = new LayerList({
      view: view
    });

    const layerListExpand = new Expand({
      view: view,
      content: layerList,
      expanded: false
    });

    return layerListExpand;
  },

  createTimeSlider: (view) => {
    const timeSlider = new TimeSlider({
      view: view,
      container: document.createElement("div")
    });

    const timeSliderExpand = new Expand({
      view: view,
      content: timeSlider,
      expanded: false
    });

    return timeSliderExpand;
  },

  createFeatureWidget: (view, map) => {
    const featureWidgetContainer = document.createElement("div");
    featureWidgetContainer.style.width = "100%";
    featureWidgetContainer.style.height = "100%";

    const featureWidget = new Feature({
      container: featureWidgetContainer,
      map: map,
      spatialReference: view.spatialReference
    });

    const pdfIframe = document.createElement("iframe");
    pdfIframe.style.width = "100%";
    pdfIframe.style.height = "calc(100vh - 100px)";
    pdfIframe.style.border = "none";
    pdfIframe.style.display = "block";

    featureWidgetContainer.appendChild(pdfIframe);

    const featureExpand = new Expand({
      view: view,
      content: featureWidgetContainer,
      expanded: false,
      expandIconClass: "esri-icon-layer-list",
      expandTooltip: "Feature Details"
    });

    return { featureExpand, pdfIframe };
  },

  createZoom: (view) => {
    const zoom = new Zoom({
      view: view
    });

    return zoom;
  },

  createBasemapGallery: (view) => {
    const basemapGallery = new BasemapGallery({
      view: view
    });

    const bgExpand = new Expand({
      view: view,
      content: basemapGallery,
      expanded: false
    });

    return bgExpand;
  },

  createLegend: (view) => {
    const legend = new Legend({
      view: view
    });

    const legendExpand = new Expand({
      view: view,
      content: legend,
      expanded: false,
      expandIconClass: "esri-icon-legend"
    });

    return legendExpand;
  },

  createSearchWidget: (view, layers) => {
    const searchWidget = new Search({
      view: view,
      includeDefaultSources: false,
      sources: layers.map(layer => ({
        layer: layer,
        searchFields: ["name", "uccrn"],
        displayField: "name",
        exactMatch: false,
        outFields: ["*"],
        name: layer.title,
        placeholder: `Search ${layer.title}`
      })),
      popupEnabled: false,
      popupTemplate: {
        title: "{name}"
      }
    });

    const searchExpand = new Expand({
      view: view,
      content: searchWidget,
      expanded: false,
      expandIconClass: "esri-icon-search",
      group: "top-right"
    });

    return searchExpand;
  }
};

export { widgets };
