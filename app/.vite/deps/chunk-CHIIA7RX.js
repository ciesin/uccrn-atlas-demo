import {
  l
} from "./chunk-XCRRZPKE.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
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
  a3 as a2,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/TopFilter.js
var e;
var p2 = e = class extends S {
  constructor(o2) {
    super(o2), this.groupByFields = void 0, this.topCount = void 0, this.orderByFields = void 0;
  }
  clone() {
    return new e({ groupByFields: this.groupByFields, topCount: this.topCount, orderByFields: this.orderByFields });
  }
};
r([m({ type: [String], json: { write: true } })], p2.prototype, "groupByFields", void 0), r([m({ type: Number, json: { write: true } })], p2.prototype, "topCount", void 0), r([m({ type: [String], json: { write: true } })], p2.prototype, "orderByFields", void 0), p2 = e = r([a2("esri.rest.support.TopFilter")], p2);
var i = p2;

// node_modules/@arcgis/core/rest/support/TopFeaturesQuery.js
var y;
var m2 = new o({ esriSpatialRelIntersects: "intersects", esriSpatialRelContains: "contains", esriSpatialRelCrosses: "crosses", esriSpatialRelDisjoint: "disjoint", esriSpatialRelEnvelopeIntersects: "envelope-intersects", esriSpatialRelIndexIntersects: "index-intersects", esriSpatialRelOverlaps: "overlaps", esriSpatialRelTouches: "touches", esriSpatialRelWithin: "within", esriSpatialRelRelation: "relation" });
var h = new o({ esriSRUnit_Meter: "meters", esriSRUnit_Kilometer: "kilometers", esriSRUnit_Foot: "feet", esriSRUnit_StatuteMile: "miles", esriSRUnit_NauticalMile: "nautical-miles", esriSRUnit_USNauticalMile: "us-nautical-miles" });
var j = y = class extends S {
  constructor(e2) {
    super(e2), this.cacheHint = void 0, this.distance = void 0, this.geometry = null, this.geometryPrecision = void 0, this.maxAllowableOffset = void 0, this.num = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.resultType = null, this.returnGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.start = void 0, this.spatialRelationship = "intersects", this.timeExtent = null, this.topFilter = void 0, this.units = null, this.where = "1=1";
  }
  writeStart(e2, t) {
    t.resultOffset = this.start, t.resultRecordCount = this.num || 10;
  }
  clone() {
    return new y(a({ cacheHint: this.cacheHint, distance: this.distance, geometry: this.geometry, geometryPrecision: this.geometryPrecision, maxAllowableOffset: this.maxAllowableOffset, num: this.num, objectIds: this.objectIds, orderByFields: this.orderByFields, outFields: this.outFields, outSpatialReference: this.outSpatialReference, resultType: this.resultType, returnGeometry: this.returnGeometry, returnZ: this.returnZ, returnM: this.returnM, start: this.start, spatialRelationship: this.spatialRelationship, timeExtent: this.timeExtent, topFilter: this.topFilter, units: this.units, where: this.where }));
  }
};
r([m({ type: Boolean, json: { write: true } })], j.prototype, "cacheHint", void 0), r([m({ type: Number, json: { write: { overridePolicy: (e2) => ({ enabled: e2 > 0 }) } } })], j.prototype, "distance", void 0), r([m({ types: l, json: { read: f, write: true } })], j.prototype, "geometry", void 0), r([m({ type: Number, json: { write: true } })], j.prototype, "geometryPrecision", void 0), r([m({ type: Number, json: { write: true } })], j.prototype, "maxAllowableOffset", void 0), r([m({ type: Number, json: { read: { source: "resultRecordCount" } } })], j.prototype, "num", void 0), r([m({ json: { write: true } })], j.prototype, "objectIds", void 0), r([m({ type: [String], json: { write: true } })], j.prototype, "orderByFields", void 0), r([m({ type: [String], json: { write: true } })], j.prototype, "outFields", void 0), r([m({ type: g, json: { read: { source: "outSR" }, write: { target: "outSR" } } })], j.prototype, "outSpatialReference", void 0), r([m({ type: String, json: { write: true } })], j.prototype, "resultType", void 0), r([m({ json: { write: true } })], j.prototype, "returnGeometry", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (e2) => ({ enabled: e2 }) } } })], j.prototype, "returnM", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (e2) => ({ enabled: e2 }) } } })], j.prototype, "returnZ", void 0), r([m({ type: Number, json: { read: { source: "resultOffset" } } })], j.prototype, "start", void 0), r([r2("start"), r2("num")], j.prototype, "writeStart", null), r([m({ type: String, json: { read: { source: "spatialRel", reader: m2.read }, write: { target: "spatialRel", writer: m2.write } } })], j.prototype, "spatialRelationship", void 0), r([m({ type: p, json: { write: true } })], j.prototype, "timeExtent", void 0), r([m({ type: i, json: { write: true } })], j.prototype, "topFilter", void 0), r([m({ type: String, json: { read: h.read, write: { writer: h.write, overridePolicy(e2) {
  return { enabled: null != e2 && null != this.distance };
} } } })], j.prototype, "units", void 0), r([m({ type: String, json: { write: true } })], j.prototype, "where", void 0), j = y = r([a2("esri.rest.support.TopFeaturesQuery")], j), j.from = w(j);
var S2 = j;

export {
  S2 as S
};
//# sourceMappingURL=chunk-CHIIA7RX.js.map
