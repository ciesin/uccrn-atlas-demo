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
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/rest/support/GPMessage.js
var p = new o({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
var i = class extends S {
  constructor(e) {
    super(e), this.description = null, this.type = null;
  }
};
r([m({ type: String, json: { write: true } })], i.prototype, "description", void 0), r([m({ type: String, json: { read: p.read, write: p.write } })], i.prototype, "type", void 0), i = r([a("esri.rest.support.GPMessage")], i);
var a2 = i;

export {
  a2 as a
};
//# sourceMappingURL=chunk-M36OMIGP.js.map
