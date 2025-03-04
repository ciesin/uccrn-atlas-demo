import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  f as f2
} from "./chunk-FBQYHS7L.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  d,
  u,
  y
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import {
  n as n2
} from "./chunk-TYJOGWKZ.js";
import {
  S as S2,
  y as y2
} from "./chunk-4WO6KUCB.js";
import {
  d as d2,
  n
} from "./chunk-2Y4TRKRB.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  C
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  qt
} from "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  a as a2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/GeoRSSLayer.js
var G = ["atom", "xml"];
var P2 = { base: n, key: "type", typeMap: { "simple-line": d2 }, errorContext: "symbol" };
var R = { base: n, key: "type", typeMap: { "picture-marker": n2, "simple-marker": y2 }, errorContext: "symbol" };
var k = { base: n, key: "type", typeMap: { "simple-fill": S2 }, errorContext: "symbol" };
var _ = class extends p(f2(b(j(t(S(f)))))) {
  constructor(...e) {
    super(...e), this.description = null, this.fullExtent = null, this.legendEnabled = true, this.lineSymbol = null, this.pointSymbol = null, this.polygonSymbol = null, this.operationalLayerType = "GeoRSS", this.url = null, this.type = "geo-rss";
  }
  normalizeCtorArgs(e, o2) {
    return "string" == typeof e ? { url: e, ...o2 } : e;
  }
  readFeatureCollections(e, o2) {
    return o2.featureCollection.layers.forEach((e2) => {
      var _a;
      const o3 = e2.layerDefinition.drawingInfo.renderer.symbol;
      o3 && "esriSFS" === o3.type && ((_a = o3.outline) == null ? void 0 : _a.style.includes("esriSFS")) && (o3.outline.style = "esriSLSSolid");
    }), o2.featureCollection.layers;
  }
  get hasPoints() {
    return this._hasGeometry("esriGeometryPoint");
  }
  get hasPolylines() {
    return this._hasGeometry("esriGeometryPolyline");
  }
  get hasPolygons() {
    return this._hasGeometry("esriGeometryPolygon");
  }
  get title() {
    const e = this._get("title");
    return e && "defaults" !== this.originOf("title") ? e : this.url ? qt(this.url, G) || "GeoRSS" : e;
  }
  set title(e) {
    this._set("title", e);
  }
  load(e) {
    const o2 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Map Service", "Feature Service", "Feature Collection", "Scene Service"] }, e).catch(a2).then(() => this._fetchService(o2)).then((e2) => {
      this.read(e2, { origin: "service" });
    })), Promise.resolve(this);
  }
  async hasDataChanged() {
    const e = await this._fetchService();
    return this.read(e, { origin: "service", ignoreDefaults: true }), true;
  }
  async _fetchService(e) {
    const t2 = this.spatialReference, { data: s2 } = await P(s.geoRSSServiceUrl, { query: { url: this.url, refresh: !!this.loaded || void 0, outSR: C(t2) ? void 0 : t2.wkid ?? JSON.stringify(t2) }, signal: e });
    return s2;
  }
  _hasGeometry(e) {
    var _a;
    return ((_a = this.featureCollections) == null ? void 0 : _a.some((o2) => {
      var _a2, _b;
      return ((_a2 = o2.featureSet) == null ? void 0 : _a2.geometryType) === e && ((_b = o2.featureSet.features) == null ? void 0 : _b.length) > 0;
    })) ?? false;
  }
};
r([m()], _.prototype, "description", void 0), r([m()], _.prototype, "featureCollections", void 0), r([o("service", "featureCollections", ["featureCollection.layers"])], _.prototype, "readFeatureCollections", null), r([m({ type: w, json: { name: "lookAtExtent" } })], _.prototype, "fullExtent", void 0), r([m(u)], _.prototype, "id", void 0), r([m(d)], _.prototype, "legendEnabled", void 0), r([m({ types: P2, json: { write: true } })], _.prototype, "lineSymbol", void 0), r([m({ type: ["show", "hide"] })], _.prototype, "listMode", void 0), r([m({ types: R, json: { write: true } })], _.prototype, "pointSymbol", void 0), r([m({ types: k, json: { write: true } })], _.prototype, "polygonSymbol", void 0), r([m({ type: ["GeoRSS"] })], _.prototype, "operationalLayerType", void 0), r([m(y)], _.prototype, "url", void 0), r([m({ json: { origins: { service: { read: { source: "name", reader: (e) => e || void 0 } } } } })], _.prototype, "title", null), r([m({ readOnly: true, json: { read: false }, value: "geo-rss" })], _.prototype, "type", void 0), _ = r([a("esri.layers.GeoRSSLayer")], _);
var w2 = _;
export {
  w2 as default
};
//# sourceMappingURL=GeoRSSLayer-TAKKUQ52.js.map
