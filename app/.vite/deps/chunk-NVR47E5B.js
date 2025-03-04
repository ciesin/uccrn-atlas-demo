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

// node_modules/@arcgis/core/rest/networks/support/ValidateNetworkTopologyResult.js
var s = class extends S {
  constructor(e) {
    super(e), this.moment = null, this.fullUpdate = false, this.validateErrorsCreated = false, this.exceededTransferLimit = null, this.serviceEdits = null, this.discoveredSubnetworks = null;
  }
};
r([m({ type: Date, json: { type: Number, write: { writer: (e, o) => {
  o.moment = e ? e.getTime() : null;
} } } })], s.prototype, "moment", void 0), r([m({ type: Boolean, json: { write: true } })], s.prototype, "fullUpdate", void 0), r([m({ type: Boolean, json: { write: true } })], s.prototype, "validateErrorsCreated", void 0), r([m({ type: Boolean, json: { write: true } })], s.prototype, "exceededTransferLimit", void 0), r([m({ type: [Object], json: { write: true } })], s.prototype, "serviceEdits", void 0), r([m({ type: [Object], json: { write: true } })], s.prototype, "discoveredSubnetworks", void 0), s = r([a("esri.rest.networks.support.ValidateNetworkTopologyResult")], s);
var i = s;

export {
  i
};
//# sourceMappingURL=chunk-NVR47E5B.js.map
