import {
  v
} from "./chunk-YSPSOPLL.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/layers/RefreshableLayerView.js
var i = (i2) => {
  let a2 = class extends i2 {
    initialize() {
      this.addHandles(v(() => this.layer, "refresh", (r2) => {
        this.doRefresh(r2.dataChanged).catch((r3) => {
          b(r3) || n.getLogger(this).error(r3);
        });
      }), "RefreshableLayerView");
    }
  };
  return a2 = r([a("esri.views.layers.RefreshableLayerView")], a2), a2;
};

export {
  i
};
//# sourceMappingURL=chunk-MV5XTDTW.js.map
