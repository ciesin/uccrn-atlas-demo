import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
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
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/FeatureFilter.js
var p2;
var c = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });
var u = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var m2 = p2 = class extends S {
  constructor(e) {
    super(e), this.where = null, this.geometry = null, this.spatialRelationship = "intersects", this.distance = void 0, this.objectIds = null, this.units = null, this.timeExtent = null;
  }
  createQuery(e = {}) {
    const { where: t, geometry: i, spatialRelationship: s, timeExtent: o2, objectIds: n, units: a3, distance: p3 } = this;
    return new b({ geometry: a(i), objectIds: a(n), spatialRelationship: s, timeExtent: a(o2), where: t, units: a3, distance: p3, ...e });
  }
  clone() {
    const { where: e, geometry: t, spatialRelationship: i, timeExtent: s, objectIds: o2, units: n, distance: l2 } = this;
    return new p2({ geometry: a(t), objectIds: a(o2), spatialRelationship: i, timeExtent: a(s), where: e, units: n, distance: l2 });
  }
};
r([m({ type: String, json: { write: true } })], m2.prototype, "where", void 0), r([m({ types: l, json: { write: true } })], m2.prototype, "geometry", void 0), r([m({ type: c.apiValues, json: { name: "spatialRel", read: { reader: c.read }, write: { allowNull: false, writer: c.write, overridePolicy() {
  return { enabled: null != this.geometry };
} } } })], m2.prototype, "spatialRelationship", void 0), r([m({ type: Number, json: { write: { overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "distance", void 0), r([m({ type: [Number], json: { write: true } })], m2.prototype, "objectIds", void 0), r([m({ type: u.apiValues, json: { read: u.read, write: { writer: u.write, overridePolicy(e) {
  return { enabled: null != e && null != this.geometry };
} } } })], m2.prototype, "units", void 0), r([m({ type: p, json: { write: true } })], m2.prototype, "timeExtent", void 0), m2 = p2 = r([a2("esri.layers.support.FeatureFilter")], m2);
var d = m2;

export {
  d
};
//# sourceMappingURL=chunk-FK3WBTHH.js.map
