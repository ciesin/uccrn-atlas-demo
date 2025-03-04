import {
  P2 as P,
  s
} from "./chunk-UFBX3XSC.js";

// node_modules/@arcgis/core/layers/support/layerUtils.js
function r(e) {
  return null != e && "object" == typeof e && "type" in e && "feature" === e.type;
}
function c(e) {
  return null != e && "object" == typeof e && "type" in e && "subtype-group" === e.type && "sublayers" in e;
}
function l(e) {
  return "subtype-sublayer" === (e == null ? void 0 : e.type);
}
var g = { Point: "SceneLayer", "3DObject": "SceneLayer", IntegratedMesh: "IntegratedMeshLayer", PointCloud: "PointCloudLayer", Building: "BuildingSceneLayer" };
function b(e) {
  const t = e == null ? void 0 : e.type;
  return "building-scene" === t || "integrated-mesh" === t || "point-cloud" === t || "scene" === t;
}
function m(e) {
  return "integrated-mesh" === e || "integrated-mesh-3dtiles" === e;
}
function w(e) {
  var _a;
  return "feature" === (e == null ? void 0 : e.type) && !e.url && "memory" === ((_a = e.source) == null ? void 0 : _a.type);
}
function L(e) {
  var _a;
  const t = e == null ? void 0 : e.type;
  return ("feature" === t || "subtype-group" === t || "oriented-imagery" === t) && "feature-layer" === ((_a = e == null ? void 0 : e.source) == null ? void 0 : _a.type);
}
async function x(n, r2) {
  var _a;
  const i = (_a = s) == null ? void 0 : _a.findServerInfo(n);
  if (null != (i == null ? void 0 : i.currentVersion)) return i.owningSystemUrl || null;
  const u = n.toLowerCase().indexOf("/rest/services");
  if (-1 === u) return null;
  const s2 = `${n.slice(0, u)}/rest/info`, a = null != r2 ? r2.signal : null, { data: o } = await P(s2, { query: { f: "json" }, responseType: "json", signal: a });
  return (o == null ? void 0 : o.owningSystemUrl) || null;
}
function I(e) {
  if (!("capabilities" in e)) return false;
  switch (e.type) {
    case "catalog":
    case "catalog-footprint":
    case "csv":
    case "feature":
    case "geojson":
    case "imagery":
    case "knowledge-graph-sublayer":
    case "ogc-feature":
    case "oriented-imagery":
    case "scene":
    case "sublayer":
    case "subtype-group":
    case "subtype-sublayer":
    case "wfs":
      return true;
    default:
      return false;
  }
}
function O(e) {
  return I(e) ? "effectiveCapabilities" in e ? e.effectiveCapabilities : e.capabilities : null;
}
function T(e) {
  if (!("editingEnabled" in e)) return false;
  switch (e.type) {
    case "csv":
    case "feature":
    case "geojson":
    case "oriented-imagery":
    case "scene":
    case "subtype-group":
    case "subtype-sublayer":
      return true;
    default:
      return false;
  }
}
function B(e) {
  return !!T(e) && ("effectiveEditingEnabled" in e ? e.effectiveEditingEnabled : e.editingEnabled);
}

export {
  r,
  c,
  l,
  g,
  b,
  m,
  w,
  L,
  x,
  I,
  O,
  B
};
//# sourceMappingURL=chunk-XWXWIBVO.js.map
