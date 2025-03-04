import {
  v
} from "./chunk-L3N7SR24.js";
import {
  s
} from "./chunk-NATJDMSF.js";
import {
  _,
  c,
  r
} from "./chunk-UMYFDXOJ.js";
import {
  n,
  t
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/geometry/support/triangle.js
function j(t2) {
  return t2 ? { p0: t(t2.p0), p1: t(t2.p1), p2: t(t2.p2) } : { p0: n(), p1: n(), p2: n() };
}
function v2(t2, e, n2) {
  const r2 = e[0] - t2[0], o = e[1] - t2[1], c3 = n2[0] - t2[0], s3 = n2[1] - t2[1];
  return 0.5 * Math.abs(r2 * s3 - o * c3);
}
function S(t2, e, o) {
  return c(M2, e, t2), c(O, o, t2), 0.5 * r(_(M2, M2, O));
}
var w = new s(v);
var x = new s(() => j());
var M2 = n();
var O = n();

export {
  v2 as v,
  S
};
//# sourceMappingURL=chunk-WXTMYNFS.js.map
