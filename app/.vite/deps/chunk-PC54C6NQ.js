import {
  i
} from "./chunk-6MP23PR5.js";
import {
  p
} from "./chunk-CXW7QK2T.js";
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

// node_modules/@arcgis/core/rest/networks/support/QueryAssociationsParameters.js
var m2;
var n = m2 = class extends S {
  static from(e) {
    return h(m2, e);
  }
  constructor(e) {
    super(e), this.returnDeletes = false, this.elements = [], this.types = [], this.gdbVersion = null, this.moment = null;
  }
};
r([m({ type: Boolean, json: { write: true } })], n.prototype, "returnDeletes", void 0), r([m({ type: [p], json: { write: true } })], n.prototype, "elements", void 0), r([m({ type: [i.apiValues], json: { type: i.jsonValues, read: i.read, write: i.write } })], n.prototype, "types", void 0), r([m({ type: String, json: { write: true } })], n.prototype, "gdbVersion", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (e, t) => {
  t.moment = e == null ? void 0 : e.getTime();
} } } })], n.prototype, "moment", void 0), n = m2 = r([a("esri.rest.networks.support.QueryAssociationsParameters")], n);
var a2 = n;

export {
  a2 as a
};
//# sourceMappingURL=chunk-PC54C6NQ.js.map
