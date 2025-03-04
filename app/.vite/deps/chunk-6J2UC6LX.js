import {
  a,
  c,
  i,
  s,
  u
} from "./chunk-RI5DYBGC.js";
import {
  e
} from "./chunk-565WHU6G.js";
import {
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/chunks/geodeticDensifyOperator.js
var i2;
var p;
var u2;
var c2;
var m;
function f() {
  return !!i2 && s();
}
async function l() {
  if (!f()) {
    const [e2] = await Promise.all([import("./apiConverter-FWDHR6ZO.js"), i()]);
    i2 = e2.fromGeometry, p = e2.fromSpatialReference, u2 = e2.getSpatialReference, c2 = e2.toGeometry, m = a();
  }
}
function y(t, o, s2 = {}) {
  const { curveType: a2 = "geodesic", unit: m2 } = s2;
  m2 && (o = x(o, m2, "meters"));
  const f2 = u2(t);
  return c2(u(i2(t), o, p(f2), e[a2]), f2);
}
function d(t, o, r = {}) {
  const { curveType: a2 = "geodesic", unit: m2 } = r;
  m2 && (o = x(o, m2, "meters"));
  const f2 = t.map(i2), l2 = u2(t);
  return c(f2, o, p(l2), e[a2]).map((e2) => c2(e2, l2));
}
var g = Object.freeze(Object.defineProperty({ __proto__: null, execute: y, executeMany: d, isLoaded: f, load: l, get supportsCurves() {
  return m;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  f,
  l,
  y,
  d,
  g
};
//# sourceMappingURL=chunk-6J2UC6LX.js.map
