import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
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
  b
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/layers/support/fromPortalItem.js
async function o(o2) {
  var _a;
  const a2 = "portalItem" in o2 ? o2 : { portalItem: o2 }, { fromItem: e } = await import("./portalLayers-UUG4UKZG.js");
  try {
    return await e(a2);
  } catch (p2) {
    const o3 = a2 == null ? void 0 : a2.portalItem, e2 = (o3 == null ? void 0 : o3.id) || "unset", l = ((_a = o3 == null ? void 0 : o3.portal) == null ? void 0 : _a.url) || s.portalUrl;
    throw n.getLogger("esri.layers.support.fromPortalItem").error("#fromPortalItem()", "Failed to create layer from portal item (portal: '" + l + "', id: '" + e2 + "')", p2), p2;
  }
}

// node_modules/@arcgis/core/layers/Layer.js
var b2 = 0;
var h = class extends i.EventedMixin(n2.IdentifiableMixin(m2)) {
  constructor() {
    super(...arguments), this.attributionDataUrl = null, this.fullExtent = new w(-180, -90, 180, 90, g.WGS84), this.id = Date.now().toString(16) + "-layer-" + b2++, this.legendEnabled = true, this.listMode = "show", this.opacity = 1, this.parent = null, this.persistenceEnabled = false, this.popupEnabled = true, this.attributionVisible = true, this.spatialReference = g.WGS84, this.title = null, this.type = null, this.url = null, this.visibilityTimeExtent = null, this.visible = true;
  }
  static async fromArcGISServerUrl(e) {
    const t = "string" == typeof e ? { url: e } : e;
    return (await import("./arcgisLayers-6ENJ73GD.js")).fromUrl(t);
  }
  static fromPortalItem(e) {
    return o(e);
  }
  initialize() {
    this.when().catch((e) => {
      b(e) || n.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, { error: e });
    });
  }
  destroy() {
    const e = this.parent;
    if (e) {
      const t = this;
      "layers" in e && e.layers.includes(t) ? e.layers.remove(t) : "tables" in e && e.tables.includes(t) ? e.tables.remove(t) : "baseLayers" in e && e.baseLayers.includes(t) ? e.baseLayers.remove(t) : "referenceLayers" in e && e.referenceLayers.includes(t) && e.referenceLayers.remove(t), this._set("parent", null);
    }
  }
  get effectiveVisible() {
    let e = this.visible;
    const t = this.parent;
    return e && t && "effectiveVisible" in t && (e && (e = t.effectiveVisible)), e;
  }
  get hasAttributionData() {
    return null != this.attributionDataUrl;
  }
  get parsedUrl() {
    return I(this.url);
  }
  createLayerView(e, t) {
    return Promise.reject(new s2("layer:create-layer-view", "Layer does not support creating a layer view"));
  }
  async fetchAttributionData() {
    const e = this.attributionDataUrl;
    if (this.hasAttributionData && e) {
      return (await P(e, { query: { f: "json" }, responseType: "json" })).data;
    }
    throw new s2("layer:no-attribution-data", "Layer does not have attribution data");
  }
};
r([m({ type: String })], h.prototype, "attributionDataUrl", void 0), r([m({ readOnly: true })], h.prototype, "effectiveVisible", null), r([m({ type: w })], h.prototype, "fullExtent", void 0), r([m({ readOnly: true })], h.prototype, "hasAttributionData", null), r([m({ type: String, clonable: false })], h.prototype, "id", void 0), r([m({ type: Boolean, nonNullable: true })], h.prototype, "legendEnabled", void 0), r([m({ type: ["show", "hide", "hide-children"] })], h.prototype, "listMode", void 0), r([m({ type: Number, range: { min: 0, max: 1 }, nonNullable: true })], h.prototype, "opacity", void 0), r([m({ clonable: false })], h.prototype, "parent", void 0), r([m({ readOnly: true })], h.prototype, "parsedUrl", null), r([m({ type: Boolean, readOnly: true })], h.prototype, "persistenceEnabled", void 0), r([m({ type: Boolean })], h.prototype, "popupEnabled", void 0), r([m({ type: Boolean })], h.prototype, "attributionVisible", void 0), r([m({ type: g })], h.prototype, "spatialReference", void 0), r([m({ type: String })], h.prototype, "title", void 0), r([m({ readOnly: true, json: { read: false } })], h.prototype, "type", void 0), r([m()], h.prototype, "url", void 0), r([m({ type: p })], h.prototype, "visibilityTimeExtent", void 0), r([m({ type: Boolean, nonNullable: true })], h.prototype, "visible", void 0), h = r([a("esri.layers.Layer")], h);
var f = h;

export {
  f
};
//# sourceMappingURL=chunk-NTUX5M6N.js.map
