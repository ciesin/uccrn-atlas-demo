import {
  fh
} from "./chunk-NEFPLHSJ.js";
import {
  s
} from "./chunk-VUD5O2WG.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorSimplify.js
var e = new fh();
function t(r, n, t2) {
  return e.execute(r, n, t2, null);
}
function o(n, t2, o2) {
  const u2 = e.executeMany(new s(n), t2, o2, null);
  return Array.from(u2);
}
function u(r, n, t2) {
  return e.isSimpleAsFeature(r, n, t2, null, null);
}
function s2() {
  return e.supportsCurves();
}

export {
  t,
  o,
  u,
  s2 as s
};
//# sourceMappingURL=chunk-LVFK4OUO.js.map
