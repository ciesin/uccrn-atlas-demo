import {
  w
} from "./chunk-KS56T55N.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/FeatureEffectLayer.js
var s = { write: { allowNull: true } };
var p = { type: w, json: { origins: { "web-map": s, "portal-item": s } } };
var c = (t) => {
  let s2 = class extends t {
    constructor() {
      super(...arguments), this.featureEffect = null;
    }
  };
  return r([m(p)], s2.prototype, "featureEffect", void 0), s2 = r([a("esri.layers.mixins.FeatureEffectLayer")], s2), s2;
};

export {
  p,
  c
};
//# sourceMappingURL=chunk-ZWAL4BY6.js.map
