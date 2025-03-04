import {
  S as S2,
  c as c2,
  u
} from "./chunk-HCXUWF52.js";
import {
  e as e2,
  i as i2
} from "./chunk-ZCYDEY6S.js";
import {
  S as S3,
  b as b2,
  b2 as b3,
  c2 as c,
  h as h2,
  h2 as h3,
  h3 as h4,
  i,
  u as u2,
  w,
  w2
} from "./chunk-IPFYNOOY.js";
import {
  m3 as m
} from "./chunk-PUC7IJYJ.js";
import {
  n
} from "./chunk-TYJOGWKZ.js";
import {
  S,
  y
} from "./chunk-4WO6KUCB.js";
import {
  d
} from "./chunk-2Y4TRKRB.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  b
} from "./chunk-XWXWIBVO.js";
import {
  e
} from "./chunk-JLFV7EBO.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/support/defaults3D.js
var w3 = w.fromSimpleMarkerSymbol(S2);
var S4 = b3.fromSimpleLineSymbol(u);
var j = h4.fromSimpleFillSymbol(c2);
var b4 = new c({ symbolLayers: new V([new h2({ material: { color: e2 }, edges: new i({ size: e(1), color: new h(i2) }) })]) });
var L = new b3({ symbolLayers: new V([new h3({ material: { color: new h([0, 0, 0]) }, size: e(1) })]) });
var D = new h4({ symbolLayers: new V([new h2({ outline: { color: new h([0, 0, 0]), size: e(1) } })]) });
function d2(o) {
  if (null == o) return null;
  switch (o.type) {
    case "mesh":
      return b4;
    case "point":
    case "multipoint":
      return w3;
    case "polyline":
      return S4;
    case "polygon":
    case "extent":
      return j;
  }
  return null;
}

// node_modules/@arcgis/core/symbols/support/symbolConversion.js
var S5 = "#useCIMFallbackSymbology()";
var g = { retainId: false, ignoreDrivers: false, hasLabelingContext: true };
function u3(u4, d3 = g) {
  var _a, _b, _c, _d;
  if (!u4) return { symbol: null };
  const { retainId: D2 = g.retainId, ignoreDrivers: M = g.ignoreDrivers, hasLabelingContext: j2 = g.hasLabelingContext, retainCIM: C = g.retainCIM, cimFallbackEnabled: I = g.cimFallbackEnabled } = d3;
  let k = null;
  if (S3(u4) || u4 instanceof u2) k = u4.clone();
  else if ("cim" === u4.type) {
    const e3 = (_b = (_a = u4.data) == null ? void 0 : _a.symbol) == null ? void 0 : _b.type;
    switch (e3) {
      case "CIMPointSymbol":
        k = C ? u4.clone() : w.fromCIMSymbol(u4);
        break;
      case "CIMLineSymbol":
        I && (k = L.clone(), (_c = d3 == null ? void 0 : d3.logWarning) == null ? void 0 : _c.call(d3, S5, "Unsupported CIM line symbology converted to fallback 3D line symbology"));
        break;
      case "CIMPolygonSymbol":
        I && (k = D.clone(), (_d = d3 == null ? void 0 : d3.logWarning) == null ? void 0 : _d.call(d3, S5, "Unsupported CIM polygon symbology converted to fallback 3D polygon symbology"));
    }
    if (!k) return { error: new s("symbol-conversion:unsupported-cim-symbol", `CIM symbol of type '${e3 || "unknown"}' is unsupported in 3D`, { symbol: u4 }) };
  } else if (u4 instanceof d) k = b3.fromSimpleLineSymbol(u4);
  else if (u4 instanceof y) k = w.fromSimpleMarkerSymbol(u4);
  else if (u4 instanceof n) k = w.fromPictureMarkerSymbol(u4);
  else if (u4 instanceof S) k = d3.geometryType && "mesh" === d3.geometryType ? c.fromSimpleFillSymbol(u4) : h4.fromSimpleFillSymbol(u4);
  else {
    if (!(u4 instanceof m)) return { error: new s("symbol-conversion:unsupported-2d-symbol", `2D symbol of type '${u4.type || u4.declaredClass}' is unsupported in 3D`, { symbol: u4 }) };
    k = j2 ? b2.fromTextSymbol(u4) : w.fromTextSymbol(u4);
  }
  return D2 && k && "cim" !== k.type && (k.id = u4.id), !M || "cim" === k.type || k instanceof u2 || k.symbolLayers.forEach((o) => o.ignoreDrivers = true), { symbol: k };
}

// node_modules/@arcgis/core/symbols/support/jsonUtils.js
function r(e3, o, n2, t) {
  const s2 = a(e3, {}, { context: t, isLabelSymbol: false });
  null != s2 && (o[n2] = s2);
}
function i3(e3, o, n2, t) {
  const s2 = a(e3, {}, { context: t, isLabelSymbol: true });
  null != s2 && (o[n2] = s2);
}
function p(e3) {
  return S3(e3) || e3 instanceof u2;
}
function y2(e3) {
  return "polygon-3d" === (e3 == null ? void 0 : e3.type) || "line-3d" === (e3 == null ? void 0 : e3.type);
}
function a(n2, s2, l) {
  var _a;
  if (null == n2) return null;
  const { context: r2, isLabelSymbol: i4 } = l, a2 = r2 == null ? void 0 : r2.origin, m3 = r2 == null ? void 0 : r2.messages;
  if ("web-scene" === a2 && !p(n2)) {
    const o = u3(n2, { retainCIM: true, hasLabelingContext: i4 });
    return null != o.symbol ? o.symbol.write(s2, r2) : (m3 == null ? void 0 : m3.push(new s("symbol:unsupported", `Symbols of type '${n2.declaredClass}' are not supported in scenes. Use 3D symbology instead when working with WebScene and SceneView`, { symbol: n2, context: r2, error: o.error })), null);
  }
  return b(r2 == null ? void 0 : r2.layer) && y2(n2) ? (m3 == null ? void 0 : m3.push(new s("symbol:unsupported", `Symbols of type '${n2.declaredClass}' are not supported on layers of type '${(_a = r2 == null ? void 0 : r2.layer) == null ? void 0 : _a.declaredClass}'.`, { symbol: n2, context: r2 })), null) : ("web-map" === a2 || "portal-item" === a2 && !b(r2 == null ? void 0 : r2.layer)) && p(n2) ? (m3 == null ? void 0 : m3.push(new s("symbol:unsupported", `Symbols of type '${n2.declaredClass}' are not supported in web maps and portal items. Use 2D symbology and CIMSymbol instead when working with MapView`, { symbol: n2, context: r2 })), null) : n2.write(s2, r2);
}
function m2(e3, o) {
  return w2(e3, null, o);
}

export {
  d2 as d,
  g,
  u3 as u,
  r,
  i3 as i,
  m2 as m
};
//# sourceMappingURL=chunk-XUYUNZTH.js.map
