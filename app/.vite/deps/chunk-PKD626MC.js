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
  n
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/widgets/support/GoTo.js
var t = (t2) => {
  let i = class extends t2 {
    constructor(...o) {
      super(...o), this.goToOverride = null, this.view = null;
    }
    callGoTo(o) {
      const { view: e } = this;
      return n(e), this.goToOverride ? this.goToOverride(e, o) : e.goTo(o.target, o.options);
    }
  };
  return r([m()], i.prototype, "goToOverride", void 0), r([m()], i.prototype, "view", void 0), i = r([a("esri.widgets.support.GoTo")], i), i;
};

export {
  t
};
//# sourceMappingURL=chunk-PKD626MC.js.map
