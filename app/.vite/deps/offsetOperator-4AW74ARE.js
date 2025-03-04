import {
  j,
  w
} from "./chunk-XRSAD6QO.js";
import {
  Be,
  Ie,
  Me,
  Pe
} from "./chunk-5GRVYYCJ.js";
import "./chunk-NEFPLHSJ.js";
import "./chunk-VUD5O2WG.js";
import "./chunk-67PUVBHA.js";
import {
  I2 as I
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

// node_modules/@arcgis/core/geometry/operators/json/offsetOperator.js
var u = { round: 0, bevel: 1, miter: 2, square: 3 };
function a(t, o, m = {}) {
  const { miterLimit: a2 = 10, flattenError: c2 = 0, joins: f = "round", unit: p } = m, j2 = Ie(t);
  p && j2 && (o = I(o, p, j2));
  const l = Pe(t), x = l.getSpatialReference();
  return Me(w(l.getGeometry(), x, o, u[f], a2, c2), x);
}
function c(e, i, a2 = {}) {
  const { miterLimit: c2 = 10, flattenError: f = 0, joins: p = "round", unit: j2 } = a2, l = Ie(e);
  j2 && l && (i = I(i, j2, l));
  const [x, d] = Be(e);
  return j(x, d, i, u[p], c2, f).map((t) => Me(t, d)).filter(G);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=offsetOperator-4AW74ARE.js.map
