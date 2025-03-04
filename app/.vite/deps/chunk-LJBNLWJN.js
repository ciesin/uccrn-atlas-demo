import {
  d2 as d,
  y2 as y
} from "./chunk-UFBX3XSC.js";
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

// node_modules/@arcgis/core/layers/mixins/ArcGISService.js
var l = (l2) => {
  let p = class extends l2 {
    get title() {
      if (this._get("title") && "defaults" !== this.originOf("title")) return this._get("title");
      if (this.url) {
        const t = d(this.url);
        if (t == null ? void 0 : t.title) return t.title;
      }
      return this._get("title") || "";
    }
    set title(t) {
      this._set("title", t);
    }
    set url(t) {
      this._set("url", y(t, n.getLogger(this)));
    }
  };
  return r([m()], p.prototype, "title", null), r([m({ type: String })], p.prototype, "url", null), p = r([a("esri.layers.mixins.ArcGISService")], p), p;
};

export {
  l
};
//# sourceMappingURL=chunk-LJBNLWJN.js.map
