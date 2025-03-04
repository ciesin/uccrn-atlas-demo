import {
  R
} from "./chunk-4NGIUHKX.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
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

// node_modules/@arcgis/core/rest/support/RelationshipQuery.js
var u;
var c = u = class extends S {
  constructor(t) {
    super(t), this.cacheHint = void 0, this.dynamicDataSource = void 0, this.gdbVersion = null, this.geometryPrecision = void 0, this.historicMoment = null, this.maxAllowableOffset = void 0, this.objectIds = null, this.orderByFields = null, this.outFields = null, this.outSpatialReference = null, this.relationshipId = void 0, this.start = void 0, this.num = void 0, this.returnGeometry = false, this.returnM = void 0, this.returnZ = void 0, this.where = null;
  }
  _writeHistoricMoment(t, e) {
    e.historicMoment = t && t.getTime();
  }
  writeStart(t, e) {
    e.resultOffset = this.start, e.resultRecordCount = this.num || 10, this.start > 0 && null == this.where && (e.definitionExpression = "1=1");
  }
  clone() {
    return new u(a({ cacheHint: this.cacheHint, dynamicDataSource: this.dynamicDataSource, gdbVersion: this.gdbVersion, geometryPrecision: this.geometryPrecision, historicMoment: this.historicMoment && new Date(this.historicMoment.getTime()), maxAllowableOffset: this.maxAllowableOffset, objectIds: this.objectIds, orderByFields: this.orderByFields, outFields: this.outFields, outSpatialReference: this.outSpatialReference, relationshipId: this.relationshipId, start: this.start, num: this.num, returnGeometry: this.returnGeometry, where: this.where, returnZ: this.returnZ, returnM: this.returnM }));
  }
};
r([m({ type: Boolean, json: { write: true } })], c.prototype, "cacheHint", void 0), r([m({ type: R, json: { write: true } })], c.prototype, "dynamicDataSource", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "gdbVersion", void 0), r([m({ type: Number, json: { write: true } })], c.prototype, "geometryPrecision", void 0), r([m({ type: Date })], c.prototype, "historicMoment", void 0), r([r2("historicMoment")], c.prototype, "_writeHistoricMoment", null), r([m({ type: Number, json: { write: true } })], c.prototype, "maxAllowableOffset", void 0), r([m({ json: { write: true } })], c.prototype, "objectIds", void 0), r([m({ type: [String], json: { write: true } })], c.prototype, "orderByFields", void 0), r([m({ type: [String], json: { write: true } })], c.prototype, "outFields", void 0), r([m({ type: g, json: { read: { source: "outSR" }, write: { target: "outSR" } } })], c.prototype, "outSpatialReference", void 0), r([m({ json: { write: true } })], c.prototype, "relationshipId", void 0), r([m({ type: Number, json: { read: { source: "resultOffset" } } })], c.prototype, "start", void 0), r([r2("start"), r2("num")], c.prototype, "writeStart", null), r([m({ type: Number, json: { read: { source: "resultRecordCount" } } })], c.prototype, "num", void 0), r([m({ json: { write: true } })], c.prototype, "returnGeometry", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], c.prototype, "returnM", void 0), r([m({ type: Boolean, json: { write: { overridePolicy: (t) => ({ enabled: t }) } } })], c.prototype, "returnZ", void 0), r([m({ type: String, json: { read: { source: "definitionExpression" }, write: { target: "definitionExpression" } } })], c.prototype, "where", void 0), c = u = r([a2("esri.rest.support.RelationshipQuery")], c), c.from = w(c);
var d = c;

export {
  d
};
//# sourceMappingURL=chunk-5GAOP2C3.js.map
