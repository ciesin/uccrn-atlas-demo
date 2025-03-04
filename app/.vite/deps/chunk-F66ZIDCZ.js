import {
  v
} from "./chunk-775V3L2A.js";
import {
  d2 as d
} from "./chunk-UFBX3XSC.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/heightModelInfoUtils.js
function a(n, i, a2) {
  const s3 = l(n), h2 = i, u2 = r(s3, h2, a2);
  if (s3) {
    const i2 = v.deriveUnitFromSR(s3, n.spatialReference).heightUnit;
    if (!a2 && i2 !== s3.heightUnit) {
      const t = new s("layerview:unmatched-height-unit", `The vertical units of the layer must match the horizontal units (${i2})`, { horizontalUnit: i2 });
      return new s("layerview:unsupported-height-model-info", "The vertical coordinate system of the layer is not supported", { heightModelInfo: s3, error: t });
    }
  }
  if (!c(n) || u2 === o.Unsupported) return new s("layerview:unsupported-height-model-info", "The vertical coordinate system of the layer is not supported", { heightModelInfo: s3 });
  switch (u2) {
    case o.Units: {
      const t = (s3 == null ? void 0 : s3.heightUnit) || "unknown", n2 = (h2 == null ? void 0 : h2.heightUnit) || "unknown", i2 = new s("layerview:incompatible-height-unit", `The vertical units of the layer (${t}) must match the vertical units of the scene (${n2})`, { layerUnit: t, sceneUnit: n2 });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", { layerHeightModelInfo: s3, sceneHeightModelInfo: h2, error: i2 });
    }
    case o.HeightModel: {
      const t = (s3 == null ? void 0 : s3.heightModel) || "unknown", n2 = (h2 == null ? void 0 : h2.heightModel) || "unknown", i2 = new s("layerview:incompatible-height-model", `The height model of the layer (${t}) must match the height model of the scene (${n2})`, { layerHeightModel: t, sceneHeightModel: n2 });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", { layerHeightModelInfo: s3, sceneHeightModelInfo: h2, error: i2 });
    }
    case o.CRS: {
      const t = (s3 == null ? void 0 : s3.vertCRS) || "unknown", n2 = (h2 == null ? void 0 : h2.vertCRS) || "unknown", i2 = new s("layerview:incompatible-vertical-datum", `The vertical datum of the layer (${t}) must match the vertical datum of the scene (${n2})`, { layerDatum: t, sceneDatum: n2 });
      return new s("layerview:incompatible-height-model-info", "The vertical coordinate system of the layer is incompatible with the scene", { layerHeightModelInfo: s3, sceneHeightModelInfo: h2, error: i2 });
    }
  }
  return null;
}
function r(e, t, n) {
  if (!s2(e) || !s2(t)) return o.Unsupported;
  if (null == e || null == t) return o.Ok;
  if (!n && e.heightUnit !== t.heightUnit) return o.Units;
  if (e.heightModel !== t.heightModel) return o.HeightModel;
  switch (e.heightModel) {
    case "gravity-related-height":
      return o.Ok;
    case "ellipsoidal":
      return e.vertCRS === t.vertCRS ? o.Ok : o.CRS;
    default:
      return o.Unsupported;
  }
}
var o;
function s2(e) {
  return null == e || null != e.heightModel && null != e.heightUnit;
}
function c(e) {
  return "heightModelInfo" in e && null != e.heightModelInfo || null != e.spatialReference || !d2(e);
}
function l(e) {
  var _a;
  if ("integrated-mesh-3dtiles" === e.type) return null;
  const i = e.url ? d(e.url) : void 0, a2 = (_a = e.spatialReference) == null ? void 0 : _a.vcsWkid;
  return !(null == a2 && null != i && "ImageServer" === i.serverType) && h(e) && e.heightModelInfo ? e.heightModelInfo : d2(e) ? v.deriveUnitFromSR(p, e.spatialReference) : null;
}
function h(e) {
  return "heightModelInfo" in e;
}
function u(e) {
  if ("unknown" === e.type || !("capabilities" in e)) return false;
  switch (e.type) {
    case "catalog":
    case "catalog-footprint":
    case "csv":
    case "feature":
    case "geojson":
    case "subtype-group":
    case "ogc-feature":
    case "oriented-imagery":
    case "wfs":
    case "knowledge-graph-sublayer":
      return true;
    default:
      return false;
  }
}
function d2(e) {
  return u(e) ? !!(e.capabilities && e.capabilities.data && e.capabilities.data.supportsZ) : f(e);
}
function g(e) {
  return null != e.layers || f(e) || u(e) || h(e);
}
function f(e) {
  switch (e.type) {
    case "building-scene":
    case "elevation":
    case "integrated-mesh":
    case "integrated-mesh-3dtiles":
    case "point-cloud":
    case "scene":
    case "voxel":
      return true;
    case "base-dynamic":
    case "base-elevation":
    case "base-tile":
    case "bing-maps":
    case "catalog":
    case "catalog-footprint":
    case "catalog-dynamic-group":
    case "csv":
    case "dimension":
    case "geojson":
    case "feature":
    case "subtype-group":
    case "geo-rss":
    case "graphics":
    case "group":
    case "imagery":
    case "imagery-tile":
    case "kml":
    case "knowledge-graph":
    case "link-chart":
    case "knowledge-graph-sublayer":
    case "line-of-sight":
    case "map-image":
    case "map-notes":
    case "media":
    case "ogc-feature":
    case "open-street-map":
    case "oriented-imagery":
    case "parquet":
    case "route":
    case "stream":
    case "tile":
    case "unknown":
    case "unsupported":
    case "vector-tile":
    case "video":
    case "viewshed":
    case "wcs":
    case "web-tile":
    case "wfs":
    case "wms":
    case "wmts":
    case null:
      return false;
  }
  return false;
}
!function(e) {
  e[e.Ok = 0] = "Ok", e[e.Units = 1] = "Units", e[e.HeightModel = 2] = "HeightModel", e[e.CRS = 3] = "CRS", e[e.Unsupported = 4] = "Unsupported";
}(o || (o = {}));
var p = new v({ heightModel: "gravity-related-height" });

export {
  a,
  l,
  g
};
//# sourceMappingURL=chunk-F66ZIDCZ.js.map
