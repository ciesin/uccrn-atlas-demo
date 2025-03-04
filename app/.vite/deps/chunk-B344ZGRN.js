import {
  s,
  s2
} from "./chunk-56B7NEQF.js";
import {
  o as o2
} from "./chunk-6MP23PR5.js";
import {
  m as m2
} from "./chunk-JLW377TH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/networks/support/NamedTraceConfiguration.js
var p = class extends m2 {
  constructor(r2) {
    super(r2), this.globalId = null, this.title = null, this.traceConfiguration = null, this.creationDate = null, this.creator = null, this.description = null, this.minStartingPoints = null, this.resultTypes = [], this.tags = [], this.traceType = null;
  }
  readTraceConfiguration(r2, e) {
    return void 0 !== r2.tierName ? s2.fromJSON(r2) : s.fromJSON(r2);
  }
};
r([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "id" }, write: { target: "id", isRequired: true } }, service: { read: { source: "globalId" }, write: { target: "globalId", isRequired: true } } }, read: false } })], p.prototype, "globalId", void 0), r([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "title" }, write: { target: "title", isRequired: true } }, service: { read: { source: "name" }, write: { target: "name", isRequired: true } } }, read: false } })], p.prototype, "title", void 0), r([m({ type: s, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "traceConfiguration", void 0), r([o("service", "traceConfiguration")], p.prototype, "readTraceConfiguration", null), r([m({ type: Date, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "creationDate", void 0), r([m({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "creator", void 0), r([m({ type: String, json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "description", void 0), r([m({ type: ["none", "one", "many"], json: { origins: { service: { read: { source: "minNumStartingPoints" }, write: { target: "minNumStartingPoints" } } }, read: false } })], p.prototype, "minStartingPoints", void 0), r([m({ json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "resultTypes", void 0), r([m({ type: [String], json: { origins: { service: { read: true, write: true } }, read: false } })], p.prototype, "tags", void 0), r([m({ type: o2.apiValues, json: { type: o2.jsonValues, origins: { service: { read: o2.read, write: o2.write } }, read: false } })], p.prototype, "traceType", void 0), p = r([a("esri.networks.support.NamedTraceConfiguration")], p);
var d = p;

export {
  d
};
//# sourceMappingURL=chunk-B344ZGRN.js.map
