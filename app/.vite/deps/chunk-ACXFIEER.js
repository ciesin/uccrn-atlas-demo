import {
  o
} from "./chunk-JLFV7EBO.js";
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

// node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var i;
var l = i = class extends S {
  constructor(e) {
    super(e), this.label = null, this.size = null, this.value = null, this.useMinValue = null, this.useMaxValue = null;
  }
  clone() {
    return new i({ label: this.label, size: this.size, value: this.value, useMaxValue: this.useMaxValue, useMinValue: this.useMinValue });
  }
};
r([m({ type: String, json: { write: true } })], l.prototype, "label", void 0), r([m({ type: Number, cast: o, json: { write: { isRequired: true } } })], l.prototype, "size", void 0), r([m({ type: Number, json: { write: { isRequired: true } } })], l.prototype, "value", void 0), r([m({ type: Boolean, json: { write: false } })], l.prototype, "useMinValue", void 0), r([m({ type: Boolean, json: { write: false } })], l.prototype, "useMaxValue", void 0), l = i = r([a("esri.renderers.visualVariables.support.SizeStop")], l);
var u = l;

export {
  u
};
//# sourceMappingURL=chunk-ACXFIEER.js.map
