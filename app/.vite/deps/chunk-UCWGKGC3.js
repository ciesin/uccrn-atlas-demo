import {
  R,
  b,
  q,
  y
} from "./chunk-NJTJZUTI.js";
import {
  a
} from "./chunk-DMO5AKFB.js";
import {
  P
} from "./chunk-S4ARCHTK.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  O2 as O,
  s2 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/views/support/geodesicMeasurementUtils.js
function e(e2) {
  return y(e2) || O(e2);
}
function r(e2, r2, p2, ...i) {
  return y(e2) ? r2.apply(void 0, i) : O(e2) ? p2.apply(void 0, i) : null;
}

// node_modules/@arcgis/core/views/support/geodesicLengthMeasurementUtils.js
function m(e2) {
  const { spatialReference: t } = e2;
  return r(t, l, g, e2);
}
function f(e2, t) {
  if (!s(e2.spatialReference, t.spatialReference)) return null;
  const { spatialReference: r2 } = e2;
  return R2[0] = e2.x, R2[1] = e2.y, R2[2] = e2.hasZ ? e2.z : 0, d[0] = t.x, d[1] = t.y, d[2] = t.hasZ ? t.z : 0, u(R2, d, r2);
}
function u(e2, t, r2) {
  return r(r2, a2, p, e2, t, r2);
}
function a2(t, r2, s2) {
  return a(q(j, t, r2, s2).distance, "meters");
}
function p(t, n2, s2) {
  return a(P(y2(t, n2, s2), "meters"), "meters");
}
function l(t) {
  return a(R([t], "meters")[0], "meters");
}
function g(t) {
  return a(P(t, "meters"), "meters");
}
function y2(e2, t, r2) {
  return { type: "polyline", spatialReference: r2, paths: [[[...e2], [...t]]] };
}
var j = new b();
var R2 = n();
var d = n();

export {
  e,
  r,
  m,
  f,
  u
};
//# sourceMappingURL=chunk-UCWGKGC3.js.map
