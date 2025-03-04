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

// node_modules/@arcgis/core/layers/support/FeatureReduction.js
var t = class extends S {
  constructor() {
    super(...arguments), this.type = null;
  }
};
r([m({ type: ["selection", "cluster", "binning"], readOnly: true, json: { read: false, write: true } })], t.prototype, "type", void 0), t = r([a("esri.layers.support.FeatureReduction")], t);

// node_modules/@arcgis/core/layers/support/FeatureReductionSelection.js
var s;
var c = s = class extends t {
  constructor(o) {
    super(o), this.type = "selection";
  }
  clone() {
    return new s();
  }
};
r([m({ type: ["selection"] })], c.prototype, "type", void 0), c = s = r([a("esri.layers.support.FeatureReductionSelection")], c);
var p = c;

export {
  t,
  p
};
//# sourceMappingURL=chunk-HWGSEVKH.js.map
