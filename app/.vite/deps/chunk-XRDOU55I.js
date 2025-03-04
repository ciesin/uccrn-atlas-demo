import {
  e
} from "./chunk-565WHU6G.js";
import {
  G,
  _,
  r,
  x
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticLength.js
var r2;
function o() {
  return !!r2 && r();
}
async function i() {
  if (!o()) {
    const [e2, o2] = await Promise.all([import("./OperatorGeodeticLength-JY2SEOH4.js"), import("./ProjectionTransformation-R2EJJYVI.js").then((t) => t.aG).then(({ injectPe: t }) => t), _()]);
    r2 = new e2.OperatorGeodeticLength(), o2(G);
  }
}
function s(t, n2, e2) {
  return r2.execute(t, n2, e2, null);
}
function c() {
  return r2.supportsCurves();
}

// node_modules/@arcgis/core/chunks/geodeticLengthOperator.js
var i2;
var p;
var n;
var u;
function c2() {
  return !!i2 && o();
}
async function m() {
  if (!c2()) {
    const [e2] = await Promise.all([import("./apiConverter-FWDHR6ZO.js"), i()]);
    i2 = e2.fromGeometry, p = e2.fromSpatialReference, n = e2.getSpatialReference, u = c();
  }
}
function l(t, o2 = {}) {
  const { curveType: s2 = "geodesic", unit: u2 } = o2, c3 = n(t);
  let m2 = s(i2(t), p(c3), e[s2]);
  return m2 && u2 && (m2 = x(m2, "meters", u2)), m2;
}
var f = Object.freeze(Object.defineProperty({ __proto__: null, execute: l, isLoaded: c2, load: m, get supportsCurves() {
  return u;
} }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  c2 as c,
  m,
  l,
  f
};
//# sourceMappingURL=chunk-XRDOU55I.js.map
