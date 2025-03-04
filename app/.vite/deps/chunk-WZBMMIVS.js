import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/geometry/support/jsonUtils.js
function m(o) {
  return void 0 !== o.xmin && void 0 !== o.ymin && void 0 !== o.xmax && void 0 !== o.ymax;
}
function u2(o) {
  return void 0 !== o.points;
}
function l(o) {
  return void 0 !== o.x && void 0 !== o.y;
}
function s(o) {
  return void 0 !== o.paths || void 0 !== o.curvePaths;
}
function y(o) {
  return void 0 !== o.rings || void 0 !== o.curveRings;
}
function f(f2) {
  return null == f2 ? null : f2 instanceof n ? f2 : l(f2) ? j.fromJSON(f2) : s(f2) ? P.fromJSON(f2) : y(f2) ? j2.fromJSON(f2) : u2(f2) ? u.fromJSON(f2) : m(f2) ? w.fromJSON(f2) : null;
}
function v(o) {
  return o ? l(o) ? "esriGeometryPoint" : s(o) ? "esriGeometryPolyline" : y(o) ? "esriGeometryPolygon" : m(o) ? "esriGeometryEnvelope" : u2(o) ? "esriGeometryMultipoint" : null : null;
}
var p = { esriGeometryPoint: j, esriGeometryPolyline: P, esriGeometryPolygon: j2, esriGeometryEnvelope: w, esriGeometryMultipoint: u, esriGeometryMultiPatch: j2 };
function c(o) {
  return o && p[o] || null;
}

export {
  m,
  u2 as u,
  l,
  s,
  y,
  f,
  v,
  c
};
//# sourceMappingURL=chunk-WZBMMIVS.js.map
