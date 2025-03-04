import {
  s
} from "./chunk-VUD5O2WG.js";
import {
  G,
  _,
  r
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodeticDensify.js
var o;
function s2() {
  return !!o && r();
}
async function i() {
  if (!s2()) {
    const [n, r2] = await Promise.all([import("./OperatorGeodeticDensifyByLength-OMQ3M7C7.js"), import("./ProjectionTransformation-R2EJJYVI.js").then((n2) => n2.aG).then(({ injectPe: n2 }) => n2), _()]);
    o = new n.OperatorGeodeticDensifyByLength(), r2(G);
  }
}
function u(n, e, t, r2) {
  return o.execute(n, e, t, r2, null);
}
function c(e, t, r2, s3) {
  const i2 = o.executeMany(new s(e), t, r2, s3, null);
  return Array.from(i2);
}
function a() {
  return o.supportsCurves();
}

export {
  s2 as s,
  i,
  u,
  c,
  a
};
//# sourceMappingURL=chunk-RI5DYBGC.js.map
