import {
  h
} from "./chunk-3UHB6K6P.js";
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
  a3 as a,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/renderers/visualVariables/support/ColorStop.js
var i;
var c = i = class extends S {
  constructor(r3) {
    super(r3), this.color = null, this.label = null, this.value = null;
  }
  writeValue(r3, o, e) {
    o[e] = r3 ?? 0;
  }
  clone() {
    return new i({ color: this.color && this.color.clone(), label: this.label, value: this.value });
  }
};
r([m({ type: h, json: { type: [x], write: { isRequired: true } } })], c.prototype, "color", void 0), r([m({ type: String, json: { write: true } })], c.prototype, "label", void 0), r([m({ type: Number, json: { write: { writerEnsuresNonNull: true } } })], c.prototype, "value", void 0), r([r2("value")], c.prototype, "writeValue", null), c = i = r([a("esri.renderers.visualVariables.support.ColorStop")], c);
var a2 = c;

export {
  a2 as a
};
//# sourceMappingURL=chunk-4KREATVZ.js.map
