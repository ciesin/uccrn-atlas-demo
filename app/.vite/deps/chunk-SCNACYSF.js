import {
  m as m2,
  p,
  v
} from "./chunk-MG7UOFLP.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/renderers/SimpleRenderer.js
var c;
var m3 = c = class extends v(p) {
  constructor(e) {
    super(e), this.description = null, this.label = null, this.symbol = null, this.type = "simple";
  }
  async collectRequiredFields(e, s) {
    await Promise.all([this.collectSymbolFields(e, s), this.collectVVRequiredFields(e, s)]);
  }
  async collectSymbolFields(e, s) {
    await Promise.all(this.symbols.map((r3) => r3.collectRequiredFields(e, s)));
  }
  getSymbol(e, s) {
    return this.symbol;
  }
  async getSymbolAsync(e, s) {
    return this.symbol;
  }
  get symbols() {
    return this.symbol ? [this.symbol] : [];
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.visualVariables) == null ? void 0 : _a.reduce((e, s) => e + s.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    return this.symbols.reduce((e, s) => e + JSON.stringify(s), "");
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables;
  }
  clone() {
    return new c({ description: this.description, label: this.label, symbol: a(this.symbol), visualVariables: a(this.visualVariables), authoringInfo: a(this.authoringInfo) });
  }
};
r([m({ type: String, json: { write: true } })], m3.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], m3.prototype, "label", void 0), r([m(m2)], m3.prototype, "symbol", void 0), r([r2({ simple: "simple" })], m3.prototype, "type", void 0), m3 = c = r([a2("esri.renderers.SimpleRenderer")], m3);
var p2 = m3;

export {
  p2 as p
};
//# sourceMappingURL=chunk-SCNACYSF.js.map
