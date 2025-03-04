import {
  m,
  n
} from "./chunk-H3KNPVGL.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  s,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/portal/support/geometryServiceUtils.js
async function n2(o = null, i) {
  var _a, _b;
  if (s.geometryServiceUrl) return s.geometryServiceUrl;
  if (!o) throw new s2("internal:geometry-service-url-not-configured");
  let n3;
  n3 = "portal" in o ? o.portal || C.getDefault() : o, await n3.load({ signal: i });
  const a2 = (_b = (_a = n3.helperServices) == null ? void 0 : _a.geometry) == null ? void 0 : _b.url;
  if (!a2) throw new s2("internal:geometry-service-url-not-configured");
  return a2;
}
async function a(r, t, a2 = null, l) {
  const c = await n2(a2, l), s3 = new m({ geometries: [r], outSpatialReference: t }), m2 = await n(c, s3, { signal: l });
  if (m2 && Array.isArray(m2) && 1 === m2.length) return m2[0];
  throw new s2("internal:geometry-service-projection-failed");
}

export {
  n2 as n,
  a
};
//# sourceMappingURL=chunk-36DO6Z4S.js.map
