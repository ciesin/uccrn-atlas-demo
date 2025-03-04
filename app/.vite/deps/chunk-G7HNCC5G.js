import {
  n
} from "./chunk-VL6ABOSV.js";
import {
  i
} from "./chunk-FF44HCOD.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
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

// node_modules/@arcgis/core/layers/support/FeatureType.js
var n2 = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.id = null, this.name = null, this.domains = null, this.templates = null;
  }
  readDomains(o2) {
    const r3 = {};
    for (const t of Object.keys(o2)) r3[t] = i(o2[t]);
    return r3;
  }
  writeDomains(o2, r3) {
    var _a;
    const t = {};
    for (const s of Object.keys(o2)) o2[s] && (t[s] = (_a = o2[s]) == null ? void 0 : _a.toJSON());
    r3.domains = t;
  }
};
r([m({ json: { write: true } })], n2.prototype, "id", void 0), r([m({ json: { write: true } })], n2.prototype, "name", void 0), r([m({ json: { write: true } })], n2.prototype, "domains", void 0), r([o("domains")], n2.prototype, "readDomains", null), r([r2("domains")], n2.prototype, "writeDomains", null), r([m({ type: [n], json: { write: true } })], n2.prototype, "templates", void 0), n2 = r([a("esri.layers.support.FeatureType")], n2);
var c = n2;

export {
  c
};
//# sourceMappingURL=chunk-G7HNCC5G.js.map
