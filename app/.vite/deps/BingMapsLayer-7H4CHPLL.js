import {
  o as o2
} from "./chunk-A4ZIOFBT.js";
import {
  p as p2,
  z
} from "./chunk-SUSOH323.js";
import {
  t as t2
} from "./chunk-AZYU3Z5M.js";
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
import "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import {
  u
} from "./chunk-G34KEQQG.js";
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
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
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
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
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
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/BaseTileLayer.js
var u2;
var h = new t2("0/0/0", 0, 0, 0, void 0);
var g2 = u2 = class extends p(t(f2(f))) {
  constructor() {
    super(...arguments), this.tileInfo = z.create({ spatialReference: g.WebMercator, size: 256 }), this.type = "base-tile", this.fullExtent = new w(-20037508342787e-6, -2003750834278e-5, 2003750834278e-5, 20037508342787e-6, g.WebMercator), this.spatialReference = g.WebMercator;
  }
  addResolvingPromise(e) {
    super.addResolvingPromise(e);
  }
  getTileBounds(e, t3, r2, o3) {
    const s2 = o3 || u();
    return h.level = e, h.row = t3, h.col = r2, h.extent = s2, this.tileInfo.updateTileInfo(h), h.extent = void 0, s2;
  }
  fetchTile(e, r2, o3, s2 = {}) {
    const { signal: i } = s2, a2 = this.getTileUrl(e, r2, o3), p3 = { responseType: "image", signal: i, query: { ...this.refreshParameters } };
    return P(a2 ?? "", p3).then((e2) => e2.data);
  }
  async fetchImageBitmapTile(e, r2, o3, s2 = {}) {
    const { signal: i } = s2;
    if (this.fetchTile !== u2.prototype.fetchTile) {
      const t3 = await this.fetchTile(e, r2, o3, s2);
      return o2(t3, e, r2, o3, i);
    }
    const a2 = this.getTileUrl(e, r2, o3) ?? "", p3 = { responseType: "blob", signal: i, query: { ...this.refreshParameters } }, { data: l } = await P(a2, p3);
    return o2(l, e, r2, o3, i);
  }
  getTileUrl() {
    throw new s("basetilelayer:gettileurl-not-implemented", "getTileUrl() is not implemented");
  }
};
r([m({ type: z })], g2.prototype, "tileInfo", void 0), r([m({ type: ["show", "hide"] })], g2.prototype, "listMode", void 0), r([m({ readOnly: true, value: "base-tile" })], g2.prototype, "type", void 0), r([m({ nonNullable: true })], g2.prototype, "fullExtent", void 0), r([m()], g2.prototype, "spatialReference", void 0), g2 = u2 = r([a("esri.layers.BaseTileLayer")], g2);
var j2 = g2;

// node_modules/@arcgis/core/layers/BingMapsLayer.js
var c = new o({ BingMapsAerial: "aerial", BingMapsRoad: "road", BingMapsHybrid: "hybrid" });
var m2 = "https://dev.virtualearth.net";
var h2 = class extends p(b(S(j2))) {
  constructor(e) {
    super(e), this.type = "bing-maps", this.tileInfo = new z({ size: [256, 256], dpi: 96, origin: new j({ x: -20037508342787e-6, y: 20037508342787e-6, spatialReference: g.WebMercator }), spatialReference: g.WebMercator, lods: [new p2({ level: 1, resolution: 78271.5169639999, scale: 295828763795777e-6 }), new p2({ level: 2, resolution: 39135.7584820001, scale: 147914381897889e-6 }), new p2({ level: 3, resolution: 19567.8792409999, scale: 73957190948944e-6 }), new p2({ level: 4, resolution: 9783.93962049996, scale: 36978595474472e-6 }), new p2({ level: 5, resolution: 4891.96981024998, scale: 18489297737236e-6 }), new p2({ level: 6, resolution: 2445.98490512499, scale: 9244648868618e-6 }), new p2({ level: 7, resolution: 1222.99245256249, scale: 4622324434309e-6 }), new p2({ level: 8, resolution: 611.49622628138, scale: 2311162217155e-6 }), new p2({ level: 9, resolution: 305.748113140558, scale: 1155581108577e-6 }), new p2({ level: 10, resolution: 152.874056570411, scale: 577790.554289 }), new p2({ level: 11, resolution: 76.4370282850732, scale: 288895.277144 }), new p2({ level: 12, resolution: 38.2185141425366, scale: 144447.638572 }), new p2({ level: 13, resolution: 19.1092570712683, scale: 72223.819286 }), new p2({ level: 14, resolution: 9.55462853563415, scale: 36111.909643 }), new p2({ level: 15, resolution: 4.77731426794937, scale: 18055.954822 }), new p2({ level: 16, resolution: 2.38865713397468, scale: 9027.977411 }), new p2({ level: 17, resolution: 1.19432856685505, scale: 4513.988705 }), new p2({ level: 18, resolution: 0.597164283559817, scale: 2256.994353 }), new p2({ level: 19, resolution: 0.298582141647617, scale: 1128.497176 }), new p2({ level: 20, resolution: 0.1492910708238085, scale: 564.248588 })] }), this.key = null, this.style = "road", this.culture = "en-US", this.region = null, this.portalUrl = null, this.hasAttributionData = true;
  }
  get bingMetadata() {
    return this._get("bingMetadata");
  }
  set bingMetadata(e) {
    this._set("bingMetadata", e);
  }
  get copyright() {
    return null != this.bingMetadata ? this.bingMetadata.copyright : null;
  }
  get operationalLayerType() {
    return c.toJSON(this.style);
  }
  get bingLogo() {
    return null != this.bingMetadata ? this.bingMetadata.brandLogoUri : null;
  }
  load(e) {
    return this.key ? this.addResolvingPromise(this._getMetadata()) : this.portalUrl ? this.addResolvingPromise(this._getPortalBingKey().then(() => this._getMetadata())) : this.addResolvingPromise(Promise.reject(new s("bingmapslayer:load", "Bing layer must have bing key."))), Promise.resolve(this);
  }
  getTileUrl(e, t3, r2) {
    if (!this.loaded || null == this.bingMetadata) return null;
    const o3 = this.bingMetadata.resourceSets[0].resources[0], a2 = o3.imageUrlSubdomains[t3 % o3.imageUrlSubdomains.length], s2 = this._getQuadKey(e, t3, r2);
    return o3.imageUrl.replace("{subdomain}", a2).replace("{quadkey}", s2);
  }
  async fetchAttributionData() {
    return this.load().then(() => {
      if (null == this.bingMetadata) return null;
      return { contributors: this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((e) => ({ attribution: e.attribution, coverageAreas: e.coverageAreas.map((e2) => ({ zoomMin: e2.zoomMin, zoomMax: e2.zoomMax, score: 1, bbox: [e2.bbox[0], e2.bbox[1], e2.bbox[2], e2.bbox[3]] })) })) };
    });
  }
  _getMetadata() {
    const e = { road: "roadOnDemand", aerial: "aerial", hybrid: "aerialWithLabelsOnDemand" }[this.style];
    return P(`${m2}/REST/v1/Imagery/Metadata/${e}`, { responseType: "json", query: { include: "ImageryProviders", uriScheme: "https", key: this.key, suppressStatus: true, output: "json", culture: this.culture, userRegion: this.region } }).then((e2) => {
      const t3 = e2.data;
      if (200 !== t3.statusCode) throw new s("bingmapslayer:getmetadata", t3.statusDescription);
      if (this.bingMetadata = t3, 0 === this.bingMetadata.resourceSets.length) throw new s("bingmapslayer:getmetadata", "no bing resourcesets");
      if (0 === this.bingMetadata.resourceSets[0].resources.length) throw new s("bingmapslayer:getmetadata", "no bing resources");
    }).catch((e2) => {
      throw new s("bingmapslayer:getmetadata", e2.message);
    });
  }
  _getPortalBingKey() {
    return P(this.portalUrl ?? "", { responseType: "json", authMode: "no-prompt", query: { f: "json" } }).then((e) => {
      if (!e.data.bingKey) throw new s("bingmapslayer:getportalbingkey", "The referenced Portal does not contain a valid bing key");
      this.key = e.data.bingKey;
    }).catch((e) => {
      throw new s("bingmapslayer:getportalbingkey", e.message);
    });
  }
  _getQuadKey(e, t3, r2) {
    let o3 = "";
    for (let a2 = e; a2 > 0; a2--) {
      let e2 = 0;
      const s2 = 1 << a2 - 1;
      r2 & s2 && (e2 += 1), t3 & s2 && (e2 += 2), o3 += e2.toString();
    }
    return o3;
  }
};
r([m({ json: { read: false, write: false }, value: null })], h2.prototype, "bingMetadata", null), r([m({ json: { read: false, write: false }, value: "bing-maps", readOnly: true })], h2.prototype, "type", void 0), r([m({ type: z })], h2.prototype, "tileInfo", void 0), r([m({ type: String, readOnly: true, json: { read: false, write: false } })], h2.prototype, "copyright", null), r([m({ type: String, json: { write: false, read: false } })], h2.prototype, "key", void 0), r([m({ type: c.apiValues, nonNullable: true, json: { read: { source: "layerType", reader: c.read } } })], h2.prototype, "style", void 0), r([m({ type: ["BingMapsAerial", "BingMapsHybrid", "BingMapsRoad"] })], h2.prototype, "operationalLayerType", null), r([m({ type: String, json: { write: false, read: false } })], h2.prototype, "culture", void 0), r([m({ type: String, json: { write: false, read: false } })], h2.prototype, "region", void 0), r([m({ type: String, json: { write: true, read: true } })], h2.prototype, "portalUrl", void 0), r([m({ type: Boolean, json: { write: false, read: false } })], h2.prototype, "hasAttributionData", void 0), r([m({ type: String, readOnly: true })], h2.prototype, "bingLogo", null), h2 = r([a("esri.layers.BingMapsLayer")], h2);
var b2 = h2;
export {
  b2 as default
};
//# sourceMappingURL=BingMapsLayer-7H4CHPLL.js.map
