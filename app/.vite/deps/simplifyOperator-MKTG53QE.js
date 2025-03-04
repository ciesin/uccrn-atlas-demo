import {
  o,
  t,
  u
} from "./chunk-LVFK4OUO.js";
import {
  Be,
  Me,
  Pe
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

// node_modules/@arcgis/core/geometry/operators/json/simplifyOperator.js
function p(t2) {
  const r = Pe(t2), c = r.getSpatialReference();
  return Me(t(r.getGeometry(), c, false), c);
}
function a(e) {
  const [r, o2] = Be(e);
  return o(r, o2, false).map((e2) => Me(e2, o2));
}
function i(e) {
  const t2 = Pe(e);
  return u(t2.getGeometry(), t2.getSpatialReference(), false);
}
export {
  p as execute,
  a as executeMany,
  i as isSimple
};
//# sourceMappingURL=simplifyOperator-MKTG53QE.js.map
