import {
  s
} from "./chunk-VUD5O2WG.js";
import {
  G,
  _,
  r
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/operators/gx/operatorGeodesicBuffer.js
var o;
function s2() {
  return !!o && r();
}
async function u() {
  if (!s2()) {
    const [e, t] = await Promise.all([import("./OperatorGeodesicBuffer-H6E2L6KO.js"), import("./ProjectionTransformation-R2EJJYVI.js").then((e2) => e2.aG).then(({ injectPe: e2 }) => e2), _()]);
    o = new e.OperatorGeodesicBuffer(), t(G);
  }
}
function i(e, r2, n, t, s3) {
  return o.execute(e, r2, n, t, s3, false, null);
}
function c(r2, n, t, s3, u2, i2) {
  const c2 = o.executeMany(new s(r2), n, t, s3, u2, false, i2, null);
  return Array.from(c2);
}
function a() {
  return o.supportsCurves();
}

export {
  s2 as s,
  u,
  i,
  c,
  a
};
//# sourceMappingURL=chunk-NV4SLGL4.js.map
