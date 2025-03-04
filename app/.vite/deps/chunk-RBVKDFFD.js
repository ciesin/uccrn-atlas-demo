import {
  c,
  c2,
  m as m3,
  u,
  u2
} from "./chunk-GNFRPKN6.js";
import {
  g as g2
} from "./chunk-6X7CIA5N.js";
import {
  m as m2,
  s
} from "./chunk-ANGUSND2.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  p as p2
} from "./chunk-SQ6MYL73.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  p
} from "./chunk-UNGOQUF2.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/AttributeBinsQuery.js
var b = new o({ asc: "ascending", desc: "descending" });
var B = { base: u, key: "type", typeMap: { "auto-interval": c, date: u2, "fixed-boundaries": m3, "fixed-interval": c2 } };
var R = class extends a2.ClonableMixin(S) {
  constructor(e) {
    super(e), this.binParameters = null, this.binOrder = "ascending", this.cacheHint = void 0, this.datumTransformation = null, this.defaultSpatialReference = null, this.distance = void 0, this.geometry = null, this.lowerBoundaryAlias = null, this.outSpatialReference = null, this.outStatistics = null, this.returnDistinctValues = null, this.spatialRelationship = "intersects", this.timeExtent = null, this.upperBoundaryAlias = null, this.units = null, this.where = "1=1";
  }
  set outTimeZone(e) {
    this._set("outTimeZone", e), e && !p(e) && n.getLogger(this).warn("#outTimeZone", `the parsed value '${e}' may not be a valid IANA time zone`);
  }
};
r([m({ types: B, json: { name: "bin", write: true } })], R.prototype, "binParameters", void 0), r([r2(b)], R.prototype, "binOrder", void 0), r([m({ type: Boolean, json: { write: true } })], R.prototype, "cacheHint", void 0), r([m({ json: { write: true } })], R.prototype, "datumTransformation", void 0), r([m({ type: g, json: { name: "defaultSR", write: true } })], R.prototype, "defaultSpatialReference", void 0), r([m({ type: Number, json: { write: { overridePolicy: (e) => ({ enabled: e > 0 }) } } })], R.prototype, "distance", void 0), r([m({ types: l, json: { read: f, write: true } })], R.prototype, "geometry", void 0), r([m({ type: String, json: { write: true } })], R.prototype, "lowerBoundaryAlias", void 0), r([m({ type: g, json: { name: "outSR", write: true } })], R.prototype, "outSpatialReference", void 0), r([m({ type: [m2], json: { write: { enabled: true, overridePolicy() {
  return { enabled: null != this.outStatistics && this.outStatistics.length > 0 };
} } } })], R.prototype, "outStatistics", void 0), r([m({ value: null, json: { name: "outTimeReference", read: { reader: (e) => e.ianaTimeZone }, write: { writer: (e, t, o2) => {
  e && (t[o2] = { ianaTimeZone: e });
} } } })], R.prototype, "outTimeZone", null), r([m({ type: Boolean, json: { write: true } })], R.prototype, "returnDistinctValues", void 0), r([r2(s, { name: "spatialRel" })], R.prototype, "spatialRelationship", void 0), r([m({ type: p2, json: { write: true } })], R.prototype, "timeExtent", void 0), r([m({ type: String, json: { write: true } })], R.prototype, "upperBoundaryAlias", void 0), r([m({ type: String, json: { read: g2.read, write: { writer: g2.write, overridePolicy(e) {
  return { enabled: null != e && null != this.distance };
} } } })], R.prototype, "units", void 0), r([m({ type: String, json: { write: true } })], R.prototype, "where", void 0), R = r([a("esri.rest.support.AttributeBinsQuery")], R);
var T = R;
R.from = w(R);

export {
  T
};
//# sourceMappingURL=chunk-RBVKDFFD.js.map
