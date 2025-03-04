import {
  h
} from "./chunk-PM2PTAZQ.js";
import {
  p
} from "./chunk-SYLT4S4B.js";
import "./chunk-UAMCCNF6.js";
import "./chunk-4PSNRXYY.js";
import "./chunk-5LWWFSEW.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-SUSOH323.js";
import "./chunk-AZYU3Z5M.js";
import {
  l
} from "./chunk-LJBNLWJN.js";
import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  y
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import {
  v as v2
} from "./chunk-775V3L2A.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
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
  v
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
  a as a2,
  s as s2,
  t2 as t
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/support/ElevationTileData.js
var a3 = class {
  constructor(a4, t3, s4, e) {
    this._hasNoDataValues = null, this._minValue = null, this._maxValue = null, "pixelData" in a4 ? (this.values = a4.pixelData, this.width = a4.width, this.height = a4.height, this.noDataValue = a4.noDataValue) : (this.values = a4, this.width = t3, this.height = s4, this.noDataValue = e);
  }
  get hasNoDataValues() {
    if (null == this._hasNoDataValues) {
      const a4 = this.noDataValue;
      this._hasNoDataValues = this.values.includes(a4);
    }
    return this._hasNoDataValues;
  }
  get minValue() {
    return this._ensureBounds(), this._minValue;
  }
  get maxValue() {
    return this._ensureBounds(), this._maxValue;
  }
  get cachedMemory() {
    return this.values.byteLength + 256;
  }
  _ensureBounds() {
    if (null != this._minValue) return;
    const { noDataValue: a4, values: t3 } = this;
    let s4 = 1 / 0, e = -1 / 0, i = true;
    for (const h2 of t3) h2 === a4 ? this._hasNoDataValues = true : (s4 = h2 < s4 ? h2 : s4, e = h2 > e ? h2 : e, i = false);
    i ? (this._minValue = 0, this._maxValue = 0) : (this._minValue = s4, this._maxValue = e > -3e38 ? e : 0);
  }
};

// node_modules/@arcgis/core/layers/support/LercDecoder.js
var r2 = class extends h {
  constructor(e = null) {
    super("LercWorker", "_decode", { _decode: (e2) => [e2.buffer] }, e, { strategy: "dedicated" }), this.schedule = e, this.ref = 0;
  }
  decode(e, r3, t3) {
    return e && 0 !== e.byteLength ? this.invoke({ buffer: e, options: r3 }, t3) : Promise.resolve(null);
  }
  release() {
    --this.ref <= 0 && (t2.forEach((e, r3) => {
      e === this && t2.delete(r3);
    }), this.destroy());
  }
};
var t2 = /* @__PURE__ */ new Map();
function s3(e = null) {
  let s4 = t2.get(e);
  return s4 || (null != e ? (s4 = new r2((r3) => e.immediate.schedule(r3)), t2.set(e, s4)) : (s4 = new r2(), t2.set(null, s4))), ++s4.ref, s4;
}

// node_modules/@arcgis/core/layers/ElevationLayer.js
var S2 = class extends p(l(b(j(S(f))))) {
  constructor(...e) {
    super(...e), this.capabilities = { operations: { supportsTileMap: false } }, this.copyright = null, this.heightModelInfo = null, this.path = null, this.minScale = void 0, this.maxScale = void 0, this.opacity = 1, this.operationalLayerType = "ArcGISTiledElevationServiceLayer", this.sourceJSON = null, this.type = "elevation", this.url = null, this.version = null, this._lercDecoder = s3();
  }
  normalizeCtorArgs(e, r3) {
    return "string" == typeof e ? { url: e, ...r3 } : e;
  }
  destroy() {
    this._lercDecoder = t(this._lercDecoder);
  }
  readCapabilities(e, r3) {
    const t3 = r3.capabilities && r3.capabilities.split(",").map((e2) => e2.toLowerCase().trim());
    if (!t3) return { operations: { supportsTileMap: false } };
    return { operations: { supportsTileMap: t3.includes("tilemap") } };
  }
  readVersion(e, r3) {
    let t3 = r3.currentVersion;
    return t3 || (t3 = 9.3), t3;
  }
  load(e) {
    const r3 = null != e ? e.signal : null;
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Image Service"], supportsData: false, validateItem: (e2) => {
      if (e2.typeKeywords) {
        for (let r4 = 0; r4 < e2.typeKeywords.length; r4++) if ("elevation 3d layer" === e2.typeKeywords[r4].toLowerCase()) return true;
      }
      throw new s("portal:invalid-layer-item-type", "Invalid layer item type '${type}', expected '${expectedType}' ", { type: "Image Service", expectedType: "Image Service Elevation 3D Layer" });
    } }, e).catch(a2).then(() => this._fetchImageService(r3))), Promise.resolve(this);
  }
  fetchTile(e, t3, i, o2) {
    const s4 = o2 == null ? void 0 : o2.signal, a4 = { responseType: "array-buffer", signal: s4 }, p2 = { noDataValue: o2 == null ? void 0 : o2.noDataValue, returnFileInfo: true };
    return this.load().then(() => this._fetchTileAvailability(e, t3, i, o2)).then(() => P(this.getTileUrl(e, t3, i), a4)).then((e2) => this._lercDecoder.decode(e2.data, p2, s4)).then((e2) => new a3(e2));
  }
  getTileUrl(e, r3, t3) {
    const i = !this.capabilities.operations.supportsTileMap && this.supportsBlankTile, o2 = v({ ...this.parsedUrl.query, blankTile: !i && null });
    return `${this.parsedUrl.path}/tile/${e}/${r3}/${t3}${o2 ? "?" + o2 : ""}`;
  }
  async queryElevation(e, r3) {
    const { ElevationQuery: t3 } = await import("./ElevationQuery-X3NQOIHP.js");
    s2(r3);
    return new t3().query(this, e, r3);
  }
  async createElevationSampler(e, r3) {
    const { ElevationQuery: t3 } = await import("./ElevationQuery-X3NQOIHP.js");
    s2(r3);
    return new t3().createSampler(this, e, r3);
  }
  _fetchTileAvailability(e, r3, t3, i) {
    return this.tilemapCache ? this.tilemapCache.fetchAvailability(e, r3, t3, i) : Promise.resolve("unknown");
  }
  async _fetchImageService(e) {
    var _a;
    if (this.sourceJSON) return this.sourceJSON;
    const t3 = { query: { f: "json", ...this.parsedUrl.query }, responseType: "json", signal: e }, i = await P(this.parsedUrl.path, t3);
    i.ssl && (this.url = (_a = this.url) == null ? void 0 : _a.replace(/^http:/i, "https:")), this.sourceJSON = i.data, this.read(i.data, { origin: "service", url: this.parsedUrl });
  }
  get hasOverriddenFetchTile() {
    return !this.fetchTile[w];
  }
};
r([m({ readOnly: true })], S2.prototype, "capabilities", void 0), r([o("service", "capabilities", ["capabilities"])], S2.prototype, "readCapabilities", null), r([m({ json: { read: { source: "copyrightText" } } })], S2.prototype, "copyright", void 0), r([m({ readOnly: true, type: v2 })], S2.prototype, "heightModelInfo", void 0), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], S2.prototype, "path", void 0), r([m({ type: ["show", "hide"] })], S2.prototype, "listMode", void 0), r([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S2.prototype, "minScale", void 0), r([m({ json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } }, readOnly: true })], S2.prototype, "maxScale", void 0), r([m({ json: { read: false, write: false, origins: { "web-document": { read: false, write: false } } } })], S2.prototype, "opacity", void 0), r([m({ type: ["ArcGISTiledElevationServiceLayer"] })], S2.prototype, "operationalLayerType", void 0), r([m()], S2.prototype, "sourceJSON", void 0), r([m({ json: { read: false }, value: "elevation", readOnly: true })], S2.prototype, "type", void 0), r([m(y)], S2.prototype, "url", void 0), r([m()], S2.prototype, "version", void 0), r([o("version", ["currentVersion"])], S2.prototype, "readVersion", null), S2 = r([a("esri.layers.ElevationLayer")], S2);
var w = Symbol("default-fetch-tile");
S2.prototype.fetchTile[w] = true;
var T = S2;
export {
  T as default
};
//# sourceMappingURL=ElevationLayer-Y3ZRTM4O.js.map
