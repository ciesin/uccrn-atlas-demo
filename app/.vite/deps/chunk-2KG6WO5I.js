import {
  m
} from "./chunk-6P7HXSJ6.js";
import {
  Q,
  l
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/geometry/support/scaleUtils.js
var e = 96;
function i(n, i2) {
  const u2 = i2 || n.extent, o = n.width, c = Q(u2 == null ? void 0 : u2.spatialReference);
  return u2 && o ? u2.width / o * c * l * e : 0;
}
function u(n, i2) {
  return n / (Q(i2) * l * e);
}
function d(n, t, r) {
  return I(n, t) && a(n, r);
}
function I(t, r) {
  return 0 === r || m(t, r) || t < r;
}
function a(t, r) {
  return 0 === r || m(t, r) || t > r;
}
function p(t, r) {
  if (m(t, r)) return 0;
  return (t || Number.POSITIVE_INFINITY) > (r || Number.POSITIVE_INFINITY) ? 1 : -1;
}

export {
  i,
  u,
  d,
  p
};
//# sourceMappingURL=chunk-2KG6WO5I.js.map
