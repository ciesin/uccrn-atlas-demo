import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  h
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/support/DeleteForwardEditsParameters.js
var p;
var i = p = class extends S {
  static from(r2) {
    return h(p, r2);
  }
  constructor(r2) {
    super(r2), this.sessionId = void 0, this.moment = null;
  }
};
r([m({ type: String, json: { write: true } })], i.prototype, "sessionId", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (r2, o) => {
  o.moment = r2 ? r2.getTime() : null;
} } } })], i.prototype, "moment", void 0), i = p = r([a("esri.rest.versionManagement.gdbVersion.support.DeleteForwardEditsParameters")], i);
var m2 = i;
export {
  m2 as default
};
//# sourceMappingURL=DeleteForwardEditsParameters-M7YBPYEI.js.map
