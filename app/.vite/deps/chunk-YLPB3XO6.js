import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  i
} from "./chunk-WE4EKKVR.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/support/NormalizationBinParametersMixin.js
var n2 = i()({ naturalLog: "natural-log", squareRoot: "square-root", percentOfTotal: "percent-of-total", log: "log", field: "field" });
var l = "percent-of-total";
var s = "field";
var m2 = (t) => {
  let m3 = class extends t {
    constructor() {
      super(...arguments), this.normalizationField = null, this.normalizationMaxValue = null, this.normalizationMinValue = null, this.normalizationTotal = null;
    }
    get normalizationType() {
      let o = this._get("normalizationType");
      const t2 = !!this.normalizationField, a2 = null != this.normalizationTotal;
      return t2 || a2 ? (o = t2 && s || a2 && l || null, t2 && a2 && n.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")) : o !== s && o !== l || (o = null), o;
    }
    set normalizationType(o) {
      this._set("normalizationType", o);
    }
  };
  return r([m({ type: String, json: { name: "parameters.normalizationField", write: true } })], m3.prototype, "normalizationField", void 0), r([m({ type: Number, json: { name: "parameters.normalizationMaxValue", write: true } })], m3.prototype, "normalizationMaxValue", void 0), r([m({ type: Number, json: { name: "parameters.normalizationMinValue", write: true } })], m3.prototype, "normalizationMinValue", void 0), r([m({ type: Number, json: { name: "parameters.normalizationTotal", write: true } })], m3.prototype, "normalizationTotal", void 0), r([r2(n2, { name: "parameters.normalizationType" })], m3.prototype, "normalizationType", null), m3 = r([a("esri.rest.support.NormalizationBinParametersMixin")], m3), m3;
};

export {
  n2 as n,
  m2 as m
};
//# sourceMappingURL=chunk-YLPB3XO6.js.map
