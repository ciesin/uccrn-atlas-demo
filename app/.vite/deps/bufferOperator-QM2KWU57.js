import {
  f,
  l
} from "./chunk-JZ73EOI6.js";
import "./chunk-I7YJKQIK.js";
import {
  Be,
  Ie,
  Me,
  Pe
} from "./chunk-5GRVYYCJ.js";
import "./chunk-MMRIUVCH.js";
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

// node_modules/@arcgis/core/geometry/operators/json/bufferOperator.js
function a(t, o, m = {}) {
  const { unit: a2 } = m, c2 = Ie(t);
  a2 && c2 && (o = I(o, a2, c2));
  const u = Pe(t), p = u.getSpatialReference();
  return Me(f(u.getGeometry(), p, o), p);
}
function c(e, i, a2 = {}) {
  let { maxDeviation: c2 = NaN, maxVerticesInFullCircle: u = 96, union: p = false, unit: f2 } = a2;
  const l2 = Ie(e);
  f2 && l2 && (i = i.map((t) => I(t, f2, l2)), c2 && (c2 = I(c2, f2, l2)));
  const [j, x] = Be(e);
  return l(j, x, i, c2, u, p).map((t) => Me(t, x)).filter(G);
}
export {
  a as execute,
  c as executeMany
};
//# sourceMappingURL=bufferOperator-QM2KWU57.js.map
