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

// node_modules/@arcgis/core/layers/support/OrderByInfo.js
var i;
var p = new o({ asc: "ascending", desc: "descending" });
var n = i = class extends S {
  constructor(r2) {
    super(r2), this.field = null, this.valueExpression = null, this.order = "ascending";
  }
  clone() {
    return new i({ field: this.field, valueExpression: this.valueExpression, order: this.order });
  }
};
r([m({ type: String, json: { write: true } })], n.prototype, "field", void 0), r([m({ type: String, json: { write: true, origins: { "web-scene": { read: false, write: false } } } })], n.prototype, "valueExpression", void 0), r([m({ type: p.apiValues, json: { type: p.jsonValues, read: p.read, write: p.write } })], n.prototype, "order", void 0), n = i = r([a("esri.layers.support.OrderByInfo")], n);
var a2 = n;

export {
  a2 as a
};
//# sourceMappingURL=chunk-BWQFRI3E.js.map
