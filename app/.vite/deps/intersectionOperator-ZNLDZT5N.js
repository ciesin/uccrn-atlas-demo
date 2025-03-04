import {
  o,
  u
} from "./chunk-KOUTR62H.js";
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
import {
  G
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/operators/json/intersectionOperator.js
function c(e, t) {
  const a = Pe(e), c2 = a.getSpatialReference();
  return Me(o(a.getGeometry(), Ve(t), c2), c2);
}
function i(r, o2) {
  const [c2, i2] = Be(r);
  return u(c2, Ve(o2), i2, 7).map((e) => Me(e, i2)).filter(G);
}
export {
  c as execute,
  i as executeMany
};
//# sourceMappingURL=intersectionOperator-ZNLDZT5N.js.map
