import {
  _,
  x
} from "./chunk-F7TCEOHX.js";

// node_modules/@arcgis/core/support/basemapUtils.js
function c(e, r2) {
  var _a, _b, _c, _d;
  return !(!((_b = (_a = e.basemap) == null ? void 0 : _a.referenceLayers) == null ? void 0 : _b.some((e2) => e2.uid === r2)) && !((_d = (_c = e.basemap) == null ? void 0 : _c.baseLayers) == null ? void 0 : _d.some((e2) => e2.uid === r2)));
}
function m(e) {
  return !!(e == null ? void 0 : e.baseLayers.concat(e.referenceLayers).some(b));
}
function b(e) {
  if (S(e.url)) return true;
  if ("vector-tile" === e.type) for (const r2 in e.sourceNameToSource) {
    const t = e.sourceNameToSource[r2];
    if (S(t == null ? void 0 : t.sourceUrl)) return true;
  }
  return false;
}
function d(e, r2) {
  var _a;
  if (null == r2 || null == e) return { spatialReference: null, updating: false };
  if ("not-loaded" === r2.loadStatus) return r2.load(), { spatialReference: null, updating: true };
  if (r2.spatialReference) return { spatialReference: r2.spatialReference, updating: false };
  if (0 === r2.baseLayers.length) return { spatialReference: null, updating: false };
  const t = r2.baseLayers.at(0);
  switch (t.loadStatus) {
    case "not-loaded":
      t.load();
    case "loading":
      return { spatialReference: null, updating: true };
    case "failed":
      return { spatialReference: null, updating: false };
  }
  const a2 = (("supportedSpatialReferences" in t ? t.supportedSpatialReferences : null) || ["tileInfo" in t ? (_a = t.tileInfo) == null ? void 0 : _a.spatialReference : t.spatialReference]).filter(Boolean), n = e.spatialReference;
  return n ? { spatialReference: a2.find((e2) => n.equals(e2)) ?? a2[0] ?? null, updating: false } : { spatialReference: a2[0], updating: false };
}
var L = /^(basemaps|ibasemaps).*-api\.arcgis\.com$/i;
function S(e) {
  if (!e) return false;
  const r2 = new x(_(e));
  return !!r2.authority && L.test(r2.authority);
}

export {
  c,
  m,
  b,
  d
};
//# sourceMappingURL=chunk-AZ33ECVF.js.map
