import {
  c,
  i,
  s,
  u
} from "./chunk-NV4SLGL4.js";
import {
  e
} from "./chunk-565WHU6G.js";
import "./chunk-VUD5O2WG.js";
import {
  x
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/operators/json/geodesicBufferOperator.js
var a;
var m;
var c2;
function u2() {
  return !!a && s();
}
async function p() {
  if (!u2()) {
    const [e2] = await Promise.all([import("./jsonConverter-YDNMYFIF.js"), u()]);
    a = e2.fromGeometries, m = e2.fromGeometry, c2 = e2.toGeometry;
  }
}
function f(e2, r, i2 = {}) {
  let { curveType: s2 = "geodesic", maxDeviation: a2 = NaN, unit: u3 } = i2;
  u3 && (r = x(r, u3, "meters"), a2 && (a2 = x(a2, u3, "meters")));
  const p2 = m(e2), f2 = p2.getSpatialReference();
  return c2(i(p2.getGeometry(), f2, e[s2], r, a2), f2);
}
function l(r, o, s2 = {}) {
  let { curveType: m2 = "geodesic", maxDeviation: u3 = NaN, union: p2 = false, unit: f2 } = s2;
  f2 && (o = o.map((e2) => x(e2, f2, "meters")), u3 && (u3 = x(u3, f2, "meters")));
  const [l2, y] = a(r);
  return c(l2, y, e[m2], o, u3, p2).map((e2) => c2(e2, y)).filter(G);
}
export {
  f as execute,
  l as executeMany,
  u2 as isLoaded,
  p as load
};
//# sourceMappingURL=geodesicBufferOperator-EW6HUHIS.js.map
