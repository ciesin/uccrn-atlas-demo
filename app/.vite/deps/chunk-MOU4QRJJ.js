import {
  p
} from "./chunk-CXW7QK2T.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/rest/networks/support/AggregatedGeometry.js
var n = class extends S {
  constructor(o) {
    super(o), this.line = null, this.multipoint = null, this.polygon = null;
  }
};
r([m({ type: P, json: { write: true }, readOnly: true })], n.prototype, "line", void 0), r([m({ type: u, json: { read: { source: "point" }, write: { target: "point" } }, readOnly: true })], n.prototype, "multipoint", void 0), r([m({ type: j, json: { write: true }, readOnly: true })], n.prototype, "polygon", void 0), n = r([a("esri.rest.networks.support.AggregatedGeometry")], n);
var l = n;

// node_modules/@arcgis/core/rest/networks/support/FunctionResult.js
var s = class extends S {
  constructor(t) {
    super(t), this.functionType = null, this.networkAttributeName = null, this.result = null;
  }
};
r([m({ type: ["add", "subtract", "average", "count", "min", "max"], json: { write: true }, readOnly: true })], s.prototype, "functionType", void 0), r([m({ type: String, json: { write: true }, readOnly: true })], s.prototype, "networkAttributeName", void 0), r([m({ type: Number, json: { write: true }, readOnly: true })], s.prototype, "result", void 0), s = r([a("esri.rest.networks.support.FunctionResult")], s);
var p2 = s;

// node_modules/@arcgis/core/rest/networks/support/TraceResult.js
var p3 = class extends S {
  constructor(o) {
    super(o), this.aggregatedGeometry = null, this.elements = null, this.globalFunctionResults = null, this.kFeaturesForKNNFound = false, this.startingPointsIgnored = false, this.warnings = null;
  }
};
r([m({ type: l, json: { write: true }, readOnly: true })], p3.prototype, "aggregatedGeometry", void 0), r([m({ type: [p], json: { write: true }, readOnly: true })], p3.prototype, "elements", void 0), r([m({ type: [p2], json: { write: true }, readOnly: true })], p3.prototype, "globalFunctionResults", void 0), r([m({ type: Boolean, json: { write: true }, readOnly: true })], p3.prototype, "kFeaturesForKNNFound", void 0), r([m({ type: Boolean, json: { write: true }, readOnly: true })], p3.prototype, "startingPointsIgnored", void 0), r([m({ type: [String], json: { write: true }, readOnly: true })], p3.prototype, "warnings", void 0), p3 = r([a("esri.rest.networks.support.TraceResult")], p3);
var a2 = p3;

export {
  a2 as a
};
//# sourceMappingURL=chunk-MOU4QRJJ.js.map
