import {
  M,
  _,
  v
} from "./chunk-MTALVDVJ.js";
import {
  Be,
  Me,
  Pe,
  Ve
} from "./chunk-5GRVYYCJ.js";
import "./chunk-NEFPLHSJ.js";
import "./chunk-VUD5O2WG.js";
import "./chunk-67PUVBHA.js";
import "./chunk-LTDNORB5.js";
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
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/operators/json/convexHullOperator.js
function a(t) {
  const r = Pe(t);
  return Me(M(r.getGeometry()), r.getSpatialReference());
}
function c(e, r = {}) {
  const { merge: o = false } = r, [u, a2] = Be(e);
  return v(u, o).map((e2) => Me(e2, a2));
}
function p(e) {
  return _(Ve(e));
}
export {
  a as execute,
  c as executeMany,
  p as isConvex
};
//# sourceMappingURL=convexHullOperator-XCOCC6IA.js.map
