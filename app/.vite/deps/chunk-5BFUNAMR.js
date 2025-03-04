import {
  m
} from "./chunk-6P7HXSJ6.js";
import {
  s2 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/layers/graphics/dehydratedFeatureComparison.js
function a(e, t) {
  return e === t || null != e && null != t && s(e.spatialReference, t.spatialReference) && e.x === t.x && e.y === t.y && e.z === t.z && e.m === t.m;
}
function i(t, r, a2) {
  return t === r || null != t && null != r && s(t.spatialReference, r.spatialReference) && m(t.x, r.x, a2) && m(t.y, r.y, a2) && m(t.z ?? 0, r.z ?? 0, a2) && m(t.m ?? 0, r.m ?? 0, a2);
}

export {
  a,
  i
};
//# sourceMappingURL=chunk-5BFUNAMR.js.map
