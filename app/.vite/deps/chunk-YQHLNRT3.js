import {
  V
} from "./chunk-AJSC5XSW.js";
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

// node_modules/@arcgis/core/layers/support/LayerFloorInfo.js
var l;
var i = l = class extends S {
  constructor(o) {
    super(o), this.floorField = null, this.viewAllMode = false, this.viewAllLevelIds = new V();
  }
  clone() {
    return new l({ floorField: this.floorField, viewAllMode: this.viewAllMode, viewAllLevelIds: this.viewAllLevelIds });
  }
};
r([m({ type: String, json: { write: { isRequired: true } } })], i.prototype, "floorField", void 0), r([m({ json: { read: false, write: false } })], i.prototype, "viewAllMode", void 0), r([m({ json: { read: false, write: false } })], i.prototype, "viewAllLevelIds", void 0), i = l = r([a("esri.layers.support.LayerFloorInfo")], i);
var p = i;

export {
  p
};
//# sourceMappingURL=chunk-YQHLNRT3.js.map
