import {
  a as a3,
  s as s2
} from "./chunk-FENCNBXD.js";
import {
  g as g3
} from "./chunk-QFZTZSQW.js";
import {
  t
} from "./chunk-3C7TTTUX.js";
import {
  n as n2
} from "./chunk-MLOZK7WX.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  g as g2,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  p
} from "./chunk-NALU24NB.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  r as r2
} from "./chunk-A42OBC4U.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I,
  pt
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  y
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/support/BasemapStyle.js
var l = class extends g {
  constructor(o) {
    super(o), this.apiKey = null, this.id = null, this.language = null, this.places = null, this.serviceUrl = "https://basemapstyles-api.arcgis.com/arcgis/rest/services/styles/v2", this.worldview = null;
  }
  get languageParameter() {
    const o = this.language;
    let s3 = "local" === o || "global" === o ? o : p(o ?? r2()) ?? "global";
    return s3 = "no" === s3 ? "nb" : s3, s3;
  }
};
r([m()], l.prototype, "apiKey", void 0), r([m()], l.prototype, "id", void 0), r([m()], l.prototype, "language", void 0), r([m()], l.prototype, "places", void 0), r([m()], l.prototype, "serviceUrl", void 0), r([m()], l.prototype, "worldview", void 0), l = r([a2("esri.support.BasemapStyle")], l);
var p2 = l;

// node_modules/@arcgis/core/Basemap.js
var v;
var _ = 0;
var U = v = class extends S.JSONSupportMixin(m2) {
  constructor(e) {
    super(e), this.id = null, this.portalItem = null, this.spatialReference = null, this.style = null, this.thumbnailUrl = null, this.title = "Basemap", this.id = Date.now().toString(16) + "-basemap-" + _++, this.baseLayers = new V(), this.referenceLayers = new V();
    const r4 = (e2) => {
      e2.parent && e2.parent !== this && "remove" in e2.parent && e2.parent.remove(e2), e2.parent = this, "elevation" === e2.type && n.getLogger(this).error(`Layer '${e2.title}, id:${e2.id}' of type '${e2.type}' is not supported as a basemap layer and will therefore be ignored.`);
    }, s3 = (e2) => {
      e2.parent = null;
    };
    this.addHandles([this.baseLayers.on("after-add", (e2) => r4(e2.item)), this.referenceLayers.on("after-add", (e2) => r4(e2.item)), this.baseLayers.on("after-remove", (e2) => s3(e2.item)), this.referenceLayers.on("after-remove", (e2) => s3(e2.item))]);
  }
  initialize() {
    this.when().catch((e) => {
      n.getLogger(this).error("#load()", `Failed to load basemap (title: '${this.title}', id: '${this.id}')`, e);
    }), this.resourceInfo && this.read(this.resourceInfo.data, this.resourceInfo.context);
  }
  destroy() {
    const e = this.baseLayers.toArray();
    for (const t2 of e) t2.destroy();
    const r4 = this.referenceLayers.toArray();
    for (const t2 of r4) t2.destroy();
    this.baseLayers.destroy(), this.referenceLayers.destroy(), this.portalItem = u(this.portalItem);
  }
  normalizeCtorArgs(e) {
    return e && "resourceInfo" in e && (this._set("resourceInfo", e.resourceInfo), delete (e = { ...e }).resourceInfo), e;
  }
  set baseLayers(e) {
    this._set("baseLayers", n2(e, this._get("baseLayers")));
  }
  _writeBaseLayers(e, r4, t2) {
    const s3 = [];
    e ? (t2 = { ...t2, layerContainerType: "basemap" }, this.baseLayers.forEach((e2) => {
      const r5 = g3(e2, t2.webmap ? t2.webmap.getLayerJSONFromResourceInfo(e2) : null, t2);
      null != r5 && s3.push(r5);
    }), this.referenceLayers.forEach((e2) => {
      const r5 = g3(e2, t2.webmap ? t2.webmap.getLayerJSONFromResourceInfo(e2) : null, t2);
      null != r5 && ("scene" !== e2.type && (r5.isReference = true), s3.push(r5));
    }), r4.baseMapLayers = s3) : r4.baseMapLayers = s3;
  }
  set referenceLayers(e) {
    this._set("referenceLayers", n2(e, this._get("referenceLayers")));
  }
  writeTitle(e, r4) {
    r4.title = e || "Basemap";
  }
  load(e) {
    return this.addResolvingPromise(this._loadFromSource(e)), Promise.resolve(this);
  }
  loadAll() {
    return t(this, (e) => {
      e(this.baseLayers, this.referenceLayers);
    });
  }
  clone() {
    const e = { id: this.id, title: this.title, portalItem: this.portalItem, baseLayers: this.baseLayers.map((e2) => y(e2) ? e2.clone() : e2), referenceLayers: this.referenceLayers.map((e2) => y(e2) ? e2.clone() : e2) };
    return this.loaded && (e.loadStatus = "loaded"), new v({ resourceInfo: this.resourceInfo }).set(e);
  }
  read(e, r4) {
    this.resourceInfo || this._set("resourceInfo", { data: e, context: r4 }), super.read(e, r4);
  }
  write(e, r4) {
    var _a;
    return e = e || {}, (r4 == null ? void 0 : r4.origin) || (r4 = { origin: "web-map", ...r4 }), super.write(e, r4), !this.loaded && ((_a = this.resourceInfo) == null ? void 0 : _a.data.baseMapLayers) && (e.baseMapLayers = this.resourceInfo.data.baseMapLayers.map((e2) => {
      const r5 = a(e2);
      return r5.url && pt(r5.url) && (r5.url = `https:${r5.url}`), r5.templateUrl && pt(r5.templateUrl) && (r5.templateUrl = `https:${r5.templateUrl}`), r5;
    })), e;
  }
  async _loadFromSource(e) {
    const { resourceInfo: r4, portalItem: t2, style: s3 } = this;
    s(e);
    const a4 = [];
    if (r4) {
      const t3 = r4.context ? r4.context.url : null;
      if (a4.push(this._loadLayersFromJSON(r4.data, t3, e)), r4.data.id && !r4.data.title) {
        const e2 = r4.data.id;
        a4.push(s2(e2).then((e3) => {
          e3 && this.read({ title: e3 }, r4.context);
        }));
      }
    } else t2 ? a4.push(this._loadFromItem(t2, e)) : s3 && a4.push(this._loadFromStylesService(s3, e));
    await Promise.all(a4);
  }
  async _loadLayersFromJSON(e, r4, t2) {
    var _a, _b;
    const s3 = (_a = this.resourceInfo) == null ? void 0 : _a.context, a4 = ((_b = this.portalItem) == null ? void 0 : _b.portal) || (s3 == null ? void 0 : s3.portal) || null, o = M[(s3 == null ? void 0 : s3.origin) || ""] ?? "web-map", { populateOperationalLayers: i } = await import("./layersCreator-AQJFBWC3.js"), n3 = [];
    if (s(t2), e.baseMapLayers && Array.isArray(e.baseMapLayers)) {
      const t3 = { context: { ...s3, origin: o, url: r4, portal: a4, layerContainerType: "basemap" }, defaultLayerType: "DefaultTileLayer" }, l2 = (e2) => "web-scene" === o && "ArcGISSceneServiceLayer" === e2.layerType || e2.isReference, p3 = i(this.baseLayers, e.baseMapLayers.filter((e2) => !l2(e2)), t3);
      n3.push(p3);
      const c = i(this.referenceLayers, e.baseMapLayers.filter(l2), t3);
      n3.push(c);
    }
    await Promise.allSettled(n3);
  }
  async _loadFromItem(e, r4) {
    const t2 = await e.load(r4), s3 = await t2.fetchData("json", r4), a4 = I(e.itemUrl ?? "");
    return this._set("resourceInfo", { data: s3.baseMap ?? {}, context: { origin: x[e.type || ""] ?? "web-map", portal: e.portal || C.getDefault(), url: a4 } }), this.read(this.resourceInfo.data, this.resourceInfo.context), this.read({ spatialReference: s3.spatialReference }, this.resourceInfo.context), this.read({ title: e.title, thumbnailUrl: e.thumbnailUrl }, { origin: "portal-item", portal: e.portal || C.getDefault(), url: a4 }), this._loadLayersFromJSON(this.resourceInfo.data, a4, r4);
  }
  async _loadFromStylesService(e, t2) {
    const s3 = e.serviceUrl.endsWith("/webmaps") ? e.serviceUrl.slice(0, -8) : e.serviceUrl, a4 = `${s3}/styles/${e.id}/self`, o = `${s3}/webmaps/${e.id}`, [i, n3] = await Promise.all([(await P(a4, { query: { token: e.apiKey }, signal: t2 == null ? void 0 : t2.signal })).data, (await P(o, { query: { language: e.languageParameter, places: e.places, worldview: e.worldview, token: e.apiKey }, signal: t2 == null ? void 0 : t2.signal })).data]);
    this.thumbnailUrl ?? (this.thumbnailUrl = i.thumbnailUrl);
    const l2 = I(o);
    if (this._set("resourceInfo", { data: n3.baseMap ?? {}, context: { origin: "web-map", url: l2 } }), this.read(this.resourceInfo.data, this.resourceInfo.context), this.read({ spatialReference: n3.spatialReference }, this.resourceInfo.context), await this._loadLayersFromJSON(this.resourceInfo.data, l2, t2), e.apiKey) for (const r4 of [...this.baseLayers, ...this.referenceLayers]) "apiKey" in r4 && (r4.apiKey = e.apiKey);
  }
  static fromId(e) {
    const r4 = a3[e];
    return r4 ? r4.itemId ? new v({ portalItem: { id: r4.itemId, portal: { url: "https://www.arcgis.com" } } }) : v.fromJSON(r4, { origin: r4.is3d ? "web-scene" : "web-map" }) : null;
  }
};
r([m({ json: { write: { ignoreOrigin: true, target: "baseMapLayers", writer(e, r4, t2, s3) {
  this._writeBaseLayers(e, r4, s3);
} }, origins: { "web-scene": { write: { ignoreOrigin: true, target: { baseMapLayers: { type: V } }, writer(e, r4, t2, s3) {
  this._writeBaseLayers(e, r4, s3);
} } } } } })], U.prototype, "baseLayers", null), r([m({ type: String, json: { origins: { "web-scene": { write: true } } } })], U.prototype, "id", void 0), r([m({ type: S2 })], U.prototype, "portalItem", void 0), r([m()], U.prototype, "referenceLayers", null), r([m({ readOnly: true })], U.prototype, "resourceInfo", void 0), r([m({ type: g2 })], U.prototype, "spatialReference", void 0), r([m({ type: p2 })], U.prototype, "style", void 0), r([m()], U.prototype, "thumbnailUrl", void 0), r([m({ type: String, json: { origins: { "web-scene": { write: { isRequired: true } } } } })], U.prototype, "title", void 0), r([r3("title")], U.prototype, "writeTitle", null), U = v = r([a2("esri.Basemap")], U);
var x = { "Web Scene": "web-scene", "Web Map": "web-map", "Link Chart": "link-chart" };
var M = { "web-scene": "web-scene", "web-map": "web-map", "link-chart": "link-chart" };
var F = U;

export {
  F
};
//# sourceMappingURL=chunk-QM5VEZEX.js.map
