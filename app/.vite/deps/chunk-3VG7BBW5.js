import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/mixins/APIKeyMixin.js
function s(e) {
  return "portalItem" in e;
}
var i = (i2) => {
  let o = class extends i2 {
    get apiKey() {
      var _a;
      return this._isOverridden("apiKey") ? this._get("apiKey") : s(this) ? (_a = this.portalItem) == null ? void 0 : _a.apiKey : null;
    }
    set apiKey(e) {
      null != e ? this._override("apiKey", e) : (this._clearOverride("apiKey"), this.clear("apiKey", "user"));
    }
  };
  return r([m({ type: String })], o.prototype, "apiKey", null), o = r([a("esri.layers.mixins.APIKeyMixin")], o), o;
};

export {
  i
};
//# sourceMappingURL=chunk-3VG7BBW5.js.map
