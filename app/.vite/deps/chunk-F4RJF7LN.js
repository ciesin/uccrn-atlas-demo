// node_modules/@arcgis/core/views/support/layerViewUtils.js
function n(e) {
  return e && "function" == typeof e.highlight;
}
function i(e, n2, t) {
  return null == e || e >= t && (0 === n2 || e <= n2);
}
function r(e, n2) {
  if (n2 && e) {
    const { minScale: t, maxScale: r2 } = e;
    if (c(t, r2)) return i(n2, t, r2);
  }
  return true;
}
function c(e, n2) {
  return null != e && e > 0 || null != n2 && n2 > 0;
}
function u(e) {
  return !(e == null ? void 0 : e.minScale) || !e.maxScale || e.minScale >= e.maxScale;
}

export {
  n,
  i,
  r,
  u
};
//# sourceMappingURL=chunk-F4RJF7LN.js.map
