import {
  i
} from "./chunk-6MP23PR5.js";
import {
  p
} from "./chunk-CXW7QK2T.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
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

// node_modules/@arcgis/core/rest/networks/support/Association.js
var p2 = class extends S {
  constructor(o2) {
    super(o2), this.globalId = null, this.associationType = null, this.fromNetworkElement = null, this.toNetworkElement = null, this.geometry = null, this.errorMessage = null, this.percentAlong = null, this.errorCode = null, this.isContentVisible = null, this.status = null;
  }
  readFromNetworkElement(o2, e) {
    return new p({ globalId: e.fromGlobalId, networkSourceId: e.fromNetworkSourceId, terminalId: e.fromTerminalId });
  }
  writeFromNetworkElement(o2, e) {
    o2 && (e.fromGlobalId = o2.globalId, e.fromNetworkSourceId = o2.networkSourceId, e.fromTerminalId = o2.terminalId);
  }
  readToNetworkElement(o2, e) {
    return new p({ globalId: e.toGlobalId, networkSourceId: e.toNetworkSourceId, terminalId: e.toTerminalId });
  }
  writeToNetworkElement(o2, e) {
    o2 && (e.toGlobalId = o2.globalId, e.toNetworkSourceId = o2.networkSourceId, e.toTerminalId = o2.terminalId);
  }
};
r([m({ type: String, json: { write: true } })], p2.prototype, "globalId", void 0), r([m({ type: i.apiValues, json: { type: i.jsonValues, read: i.read, write: i.write } })], p2.prototype, "associationType", void 0), r([m({ type: p, json: { write: { target: { fromGlobalId: { type: String }, fromNetworkSourceId: { type: Number }, fromTerminalId: { type: Number } } }, read: { source: ["fromGlobalId", "fromNetworkSourceId", "fromTerminalId"] } } })], p2.prototype, "fromNetworkElement", void 0), r([o("fromNetworkElement")], p2.prototype, "readFromNetworkElement", null), r([r2("fromNetworkElement")], p2.prototype, "writeFromNetworkElement", null), r([m({ type: p, json: { write: { target: { toGlobalId: { type: String }, toNetworkSourceId: { type: Number }, toTerminalId: { type: Number } } }, read: { source: ["toGlobalId", "toNetworkSourceId", "toTerminalId"] } } })], p2.prototype, "toNetworkElement", void 0), r([o("toNetworkElement")], p2.prototype, "readToNetworkElement", null), r([r2("toNetworkElement")], p2.prototype, "writeToNetworkElement", null), r([m({ type: P, json: { write: true } })], p2.prototype, "geometry", void 0), r([m({ type: String, json: { write: true } })], p2.prototype, "errorMessage", void 0), r([m({ type: Number, json: { write: true } })], p2.prototype, "percentAlong", void 0), r([m({ type: Number, json: { write: true } })], p2.prototype, "errorCode", void 0), r([m({ type: Boolean, json: { write: true } })], p2.prototype, "isContentVisible", void 0), r([m({ type: Number, json: { write: true } })], p2.prototype, "status", void 0), p2 = r([a("esri.rest.networks.support.Association")], p2);
var d = p2;

export {
  d
};
//# sourceMappingURL=chunk-QWAJYOS6.js.map
