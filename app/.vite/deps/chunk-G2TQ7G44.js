import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
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

// node_modules/@arcgis/core/AttributeBinsGraphic.js
var i;
var a4 = i = class extends a3.ClonableMixin(b) {
  constructor(t) {
    super(t), this.stackedAttributes = null;
  }
  cloneShallow() {
    return new i({ ...super.cloneShallow(), stackedAttributes: this.stackedAttributes });
  }
  toJSON() {
    return { ...super.toJSON(), stackedAttributes: a(this.stackedAttributes) };
  }
};
r([m()], a4.prototype, "stackedAttributes", void 0), a4 = i = r([a2("esri.AttributeBinsGraphic")], a4);
var p = a4;

// node_modules/@arcgis/core/rest/support/AttributeBinsFeatureSet.js
var i2 = class extends a3.ClonableMixin(d) {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(r2, t) {
    return this.readFeaturesWithClass(r2, t, p);
  }
};
r([m({ type: [p], json: { write: true } })], i2.prototype, "features", void 0), r([o("features")], i2.prototype, "readFeatures", null), i2 = r([a2("esri.rest.support.AttributeBinsFeatureSet")], i2);
var c = i2;

export {
  c
};
//# sourceMappingURL=chunk-G2TQ7G44.js.map
