import {
  a as a4,
  c as c2,
  e as e2
} from "./chunk-RAXTPGM6.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  w
} from "./chunk-WANI2G7M.js";
import {
  p as p3
} from "./chunk-SCNACYSF.js";
import {
  A
} from "./chunk-Q7YUVHCX.js";
import {
  b as b2,
  c,
  j,
  n as n2,
  p,
  p2,
  v
} from "./chunk-MG7UOFLP.js";
import {
  u as u2
} from "./chunk-4A3WH4AR.js";
import {
  J,
  R
} from "./chunk-BTTTF5H4.js";
import {
  e
} from "./chunk-JST5QDP2.js";
import {
  r as r4
} from "./chunk-WF2ACUGU.js";
import {
  d
} from "./chunk-IPFYNOOY.js";
import {
  S as S2,
  y as y2
} from "./chunk-4WO6KUCB.js";
import {
  d as d2
} from "./chunk-2Y4TRKRB.js";
import {
  T,
  _
} from "./chunk-6REABBOQ.js";
import {
  o as o2,
  u as u3
} from "./chunk-HSI6V34N.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  s as s3,
  y
} from "./chunk-WZBMMIVS.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  o
} from "./chunk-JLFV7EBO.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  u,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/renderers/support/DictionaryLoader.js
var d3 = "esri.renderers.support.DictionaryLoader";
var g = { type: "CIMSimpleLineCallout", lineSymbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", width: 0.5, color: [0, 0, 0, 255] }] } };
var _2 = class {
  constructor(e4, t, i4) {
    this.config = null, this.fieldMap = null, this.url = null, this._ongoingRequests = /* @__PURE__ */ new Map(), this._symbolCache = new e(100), this._dictionaryVersion = null, this._fieldIndex = null, this._dictionaryPromise = null, this.url = e4, this.config = t, this.fieldMap = i4;
  }
  getSymbolFields() {
    return this._symbolFields;
  }
  async getSymbolAsync(t, i4) {
    var _a;
    let s4;
    this._dictionaryPromise || (this._dictionaryPromise = this.fetchResources(i4));
    try {
      s4 = await this._dictionaryPromise;
    } catch (p7) {
      if (b(p7)) return this._dictionaryPromise = null, null;
    }
    const r5 = (_a = this._dictionaryVersion) == null ? void 0 : _a.greaterEqual(4, 0), o3 = {};
    if (this.fieldMap) for (const e4 of this._symbolFields) {
      const i5 = J(this.fieldMap[e4], this._fieldIndex);
      if (i5) {
        const s5 = t.attributes[i5];
        o3[e4] = r5 ? s5 : null != s5 ? "" + t.attributes[i5] : "";
      } else o3[e4] = "";
    }
    let l2 = null;
    try {
      l2 = s4 == null ? void 0 : s4(o3, i4);
    } catch (d5) {
      return null;
    }
    if (!l2 || "string" != typeof l2 || "invalid" === l2) return null;
    const f3 = l2.split(";"), m4 = [], u7 = [];
    for (let n4 = 0; n4 < f3.length; n4++) {
      const i5 = f3[n4];
      if (i5) {
        if (i5.includes("po:")) {
          const s5 = i5.slice(3).split("|");
          if (3 === s5.length) {
            const i6 = s5[0], r6 = s5[1];
            let o4 = s5[2];
            const n5 = "countrylabel";
            if (i6 === n5 && "TextString" === r6) {
              if (null != this.fieldMap) {
                let e4 = this.fieldMap[n5];
                null == e4 && (e4 = n5, this.fieldMap[e4] = e4), t.attributes[e4] = o4;
              }
              continue;
            }
            if ("DashTemplate" === r6) o4 = o4.split(" ").map((e4) => Number(e4));
            else if ("Color" === r6) {
              const t2 = new h(o4).toRgba();
              o4 = [t2[0], t2[1], t2[2], 255 * t2[3]];
            } else o4 = Number(o4);
            u7.push({ primitiveName: i6, propertyName: r6, value: o4, defaultValue: null });
          }
        } else if (i5.includes("|")) {
          for (const e4 of i5.split("|")) if (this._itemNames.has(e4)) {
            m4.push(e4);
            break;
          }
        } else if (this._itemNames.has(i5)) m4.push(i5);
        else if (0 === n4) {
          m4.length = 0;
          let e4 = "Invalid_P";
          null != t.geometry && (y(t.geometry) ? e4 = "Invalid_A" : s3(t.geometry) && (e4 = "Invalid_L")), m4.push(e4);
          break;
        }
      }
    }
    const h3 = null == t.geometry || !t.geometry.hasZ && "point" === t.geometry.type;
    return this._cimPartsToCIMSymbol(t, m4, u7, h3, i4);
  }
  async fetchResources(e4) {
    if (this._dictionaryPromise) return this._dictionaryPromise;
    if (!this.url) return void n.getLogger(d3).error("no valid URL!");
    const s4 = P(this.url + "/resources/styles/dictionary-info.json", { responseType: "json", query: { f: "json" }, signal: null != e4 ? e4.signal : null }), [{ data: o3 }] = await Promise.all([s4, o2()]);
    if (!o3) throw this._dictionaryPromise = null, new s("esri.renderers.DictionaryRenderer", "Bad dictionary data!");
    const { authoringInfo: n4, dictionary_version: a5, expression: c7, itemsNames: h3 } = o3, y5 = c7;
    let p7 = false;
    a5 && (this._dictionaryVersion = r4.parse(a5), p7 = this._dictionaryVersion.greaterEqual(4, 0)), this._refSymbolUrlTemplate = this.url + "/" + o3.cimRefTemplateUrl, this._itemNames = new Set(h3), this._symbolFields = n4.symbol;
    const g3 = {};
    if (this.config) {
      const e5 = this.config;
      for (const t in e5) g3[t] = e5[t];
    }
    if (n4.configuration) for (const t of n4.configuration) g3.hasOwnProperty(t.name) || (g3[t.name] = t.value);
    const _3 = [];
    if ((e4 == null ? void 0 : e4.fields) && this.fieldMap) for (const t in this.fieldMap) {
      const i4 = this.fieldMap[t], s5 = e4.fields.filter((e5) => e5.name.toLowerCase() === (i4 == null ? void 0 : i4.toLowerCase()));
      s5.length > 0 && _3.push({ ...s5[0], type: p7 ? s5[0].type : "esriFieldTypeString" });
    }
    _3.length > 0 && (this._fieldIndex = new Z(_3));
    const b5 = u3(y5, null != e4 ? e4.spatialReference : null, _3, g3).then((e5) => {
      const t = { scale: 0 };
      return (i4, s5) => {
        if (null == e5) return null;
        const r5 = e5.repurposeFeature({ geometry: null, attributes: i4 });
        return t.scale = null != s5 ? s5.scale ?? void 0 : void 0, e5.evaluate({ $feature: r5, $view: t }, e5.services);
      };
    }).catch((e5) => (n.getLogger(d3).error("Creating dictionary expression failed:", e5), null));
    return this._dictionaryPromise = b5, b5;
  }
  async _cimPartsToCIMSymbol(e4, t, i4, r5, o3) {
    const n4 = new Array(t.length);
    for (let s4 = 0; s4 < t.length; s4++) n4[s4] = this._getSymbolPart(t[s4], o3);
    let l2 = await Promise.all(n4);
    const a5 = this.fieldMap;
    if (a5 && l2.length > 0) {
      const { OverrideHelper: t2 } = await import("./OverrideHelper-S5L7TL2L.js");
      l2 = a(l2);
      for (const i5 of l2) t2.applyDictionaryTextOverrides(i5, e4, a5, this._fieldIndex, R(i5));
    }
    return new d({ data: b3(l2, i4, r5) });
  }
  async _getSymbolPart(e4, i4) {
    const s4 = this._symbolCache.get(e4);
    if (s4) return s4;
    if (this._ongoingRequests.has(e4)) return this._ongoingRequests.get(e4).then((e5) => e5.data);
    const r5 = this._refSymbolUrlTemplate.replaceAll(/\{itemName\}/gi, e4), o3 = P(r5, { responseType: "json", query: { f: "json" }, ...i4 });
    this._ongoingRequests.set(e4, o3), o3.finally(() => this._ongoingRequests.delete(e4));
    try {
      const t = await o3;
      return this._symbolCache.put(e4, t.data), t.data;
    } catch (n4) {
      throw n4;
    }
  }
};
function b3(e4, t, i4) {
  if (!e4 || 0 === e4.length) return null;
  const s4 = { ...e4[0] };
  if (e4.length > 1) {
    s4.effects = null, s4.symbolLayers = [];
    for (const t2 of e4) {
      const e5 = t2;
      if (null != e5.effects) for (const t3 of e5.symbolLayers) null == t3.effects ? t3.effects = e5.effects : t3.effects.unshift(...e5.effects);
      s4.symbolLayers.unshift(...e5.symbolLayers);
    }
  }
  return i4 && (s4.callout = g), { type: "CIMSymbolReference", symbol: s4, primitiveOverrides: t };
}

// node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var p4;
var c3 = p4 = class extends v(p) {
  constructor(e4) {
    super(e4), this.config = null, this.fieldMap = null, this.scaleExpression = null, this.scaleExpressionTitle = null, this.url = null, this.type = "dictionary";
  }
  get _loader() {
    return new _2(this.url, this.config, this.fieldMap);
  }
  writeData(e4, r5) {
    e4 && (r5.scalingExpressionInfo = { expression: e4, returnType: "number" });
  }
  writeVisualVariables(e4, r5, s4, i4) {
    (i4 == null ? void 0 : i4.origin) || super.writeVisualVariables(e4, r5, s4, i4);
  }
  clone() {
    return new p4({ config: a(this.config), scaleExpression: this.scaleExpression, scaleExpressionTitle: this.scaleExpressionTitle, fieldMap: a(this.fieldMap), url: a(this.url), visualVariables: a(this.visualVariables) });
  }
  async getSymbolAsync(e4, r5) {
    return this._loader.getSymbolAsync(e4, r5);
  }
  async collectRequiredFields(e4, r5) {
    await this.collectVVRequiredFields(e4, r5), this.scaleExpression && await _(e4, r5, this.scaleExpression);
    for (const s4 in this.fieldMap) {
      const i4 = this.fieldMap[s4];
      r5.has(i4) && e4.add(i4);
    }
  }
  get arcadeRequired() {
    return true;
  }
  getSymbol() {
    return null;
  }
  get symbols() {
    return [];
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.visualVariables) == null ? void 0 : _a.reduce((e4, r5) => e4 + r5.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    return `${this.url}-${JSON.stringify(this.fieldMap)}`;
  }
  getSymbolFields() {
    return this._loader.getSymbolFields();
  }
};
r([m({ type: _2 })], c3.prototype, "_loader", null), r([m({ type: Object, json: { read: { source: "configuration" }, write: { target: "configuration" } } })], c3.prototype, "config", void 0), r([m({ type: Object, json: { write: true } })], c3.prototype, "fieldMap", void 0), r([m({ type: String, json: { read: { source: "scalingExpressionInfo.expression" }, write: true } })], c3.prototype, "scaleExpression", void 0), r([r2("scaleExpression")], c3.prototype, "writeData", null), r([m({ type: String, json: { read: { source: "scalingExpressionInfo.title" }, write: { target: "scalingExpressionInfo.title", overridePolicy(e4) {
  return { enabled: !!e4 && !!this.scaleExpression };
} } } })], c3.prototype, "scaleExpressionTitle", void 0), r([m({ type: String, json: { write: true } })], c3.prototype, "url", void 0), r([r2("visualVariables")], c3.prototype, "writeVisualVariables", null), c3 = p4 = r([a2("esri.renderers.DictionaryRenderer")], c3);
var u4 = c3;

// node_modules/@arcgis/core/renderers/support/AttributeColorInfo.js
var n3;
var u5 = n3 = class extends S {
  constructor(e4) {
    super(e4), this.color = null, this.field = null, this.label = null, this.valueExpression = null, this.valueExpressionTitle = null;
  }
  castField(e4) {
    return null == e4 ? e4 : "function" == typeof e4 ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e4);
  }
  getAttributeHash() {
    return `${this.field}-${this.valueExpression}`;
  }
  clone() {
    var _a;
    return new n3({ color: (_a = this.color) == null ? void 0 : _a.clone(), field: this.field, label: this.label, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle });
  }
};
r([m({ type: h, json: { type: [Number], write: true } })], u5.prototype, "color", void 0), r([m({ type: String, json: { write: true } })], u5.prototype, "field", void 0), r([s2("field")], u5.prototype, "castField", null), r([m({ type: String, json: { write: true } })], u5.prototype, "label", void 0), r([m({ type: String, json: { write: true } })], u5.prototype, "valueExpression", void 0), r([m({ type: String, json: { write: true } })], u5.prototype, "valueExpressionTitle", void 0), u5 = n3 = r([a2("esri.renderers.support.AttributeColorInfo")], u5);
var c4 = u5;

// node_modules/@arcgis/core/renderers/support/DotDensityLegendOptions.js
var e3;
var p5 = e3 = class extends S {
  constructor() {
    super(...arguments), this.unit = null;
  }
  clone() {
    return new e3({ unit: this.unit });
  }
};
r([m({ type: String, json: { write: true } })], p5.prototype, "unit", void 0), p5 = e3 = r([a2("esri.renderers.support.DotDensityLegendOptions")], p5);
var i = p5;

// node_modules/@arcgis/core/renderers/DotDensityRenderer.js
var h2;
var m2 = h2 = class extends v(p) {
  constructor(t) {
    super(t), this.attributes = null, this.backgroundColor = new h([0, 0, 0, 0]), this.dotBlendingEnabled = true, this.dotShape = "square", this.dotSize = 1, this.legendOptions = null, this.outline = new d2(), this.dotValue = null, this.referenceScale = null, this.seed = 1, this.type = "dot-density";
  }
  calculateDotValue(t) {
    if (null == this.referenceScale) return this.dotValue;
    const e4 = t / this.referenceScale * this.dotValue;
    return e4 < 1 ? 1 : e4;
  }
  getSymbol() {
    return new S2({ outline: this.outline });
  }
  async getSymbolAsync() {
    return this.getSymbol();
  }
  get symbols() {
    return [this.getSymbol()];
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.attributes) == null ? void 0 : _a.reduce((t, e4) => t + e4.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    return JSON.stringify(this.outline);
  }
  clone() {
    return new h2({ attributes: a(this.attributes), backgroundColor: a(this.backgroundColor), dotBlendingEnabled: a(this.dotBlendingEnabled), dotShape: a(this.dotShape), dotSize: a(this.dotSize), dotValue: a(this.dotValue), legendOptions: a(this.legendOptions), outline: a(this.outline), referenceScale: a(this.referenceScale), seed: a(this.seed), visualVariables: a(this.visualVariables), authoringInfo: a(this.authoringInfo) });
  }
  getControllerHash() {
    var _a;
    const t = (_a = this.attributes) == null ? void 0 : _a.map((t2) => t2.field || t2.valueExpression || "");
    return `${t}-${this.outline && JSON.stringify(this.outline.toJSON()) || ""}`;
  }
  async collectRequiredFields(t, e4) {
    await this.collectVVRequiredFields(t, e4);
    for (const o3 of this.attributes ?? []) o3.valueExpression && await _(t, e4, o3.valueExpression), o3.field && t.add(o3.field);
  }
};
r([m({ type: [c4], json: { write: true } })], m2.prototype, "attributes", void 0), r([m({ type: h, json: { write: true } })], m2.prototype, "backgroundColor", void 0), r([m({ type: Boolean, json: { write: true } })], m2.prototype, "dotBlendingEnabled", void 0), r([m({ type: String, json: { write: false } })], m2.prototype, "dotShape", void 0), r([m({ type: Number, json: { write: true } })], m2.prototype, "dotSize", void 0), r([m({ type: i, json: { write: true } })], m2.prototype, "legendOptions", void 0), r([m({ type: d2, json: { default: null, write: true } })], m2.prototype, "outline", void 0), r([m({ type: Number, json: { write: true } })], m2.prototype, "dotValue", void 0), r([m({ type: Number, json: { write: true } })], m2.prototype, "referenceScale", void 0), r([m({ type: Number, json: { write: true } })], m2.prototype, "seed", void 0), r([r3({ dotDensity: "dot-density" })], m2.prototype, "type", void 0), m2 = h2 = r([a2("esri.renderers.DotDensityRenderer")], m2);
var y3 = m2;

// node_modules/@arcgis/core/renderers/support/HeatmapColorStop.js
var c5;
var i2 = c5 = class extends S {
  constructor(o3) {
    super(o3), this.color = null, this.ratio = null;
  }
  clone() {
    return new c5({ color: this.color && this.color.clone(), ratio: this.ratio });
  }
};
r([m({ type: h, json: { type: [x], default: null, write: { isRequired: true } } })], i2.prototype, "color", void 0), r([m({ type: Number, json: { write: { isRequired: true } } })], i2.prototype, "ratio", void 0), i2 = c5 = r([a2("esri.renderers.support.HeatmapColorStop")], i2);
var l = i2;

// node_modules/@arcgis/core/renderers/support/HeatmapLegendOptions.js
var p6 = class extends a3.ClonableMixin(S) {
  constructor() {
    super(...arguments), this.minLabel = null, this.maxLabel = null, this.title = null;
  }
};
r([m({ type: String, json: { write: true } })], p6.prototype, "minLabel", void 0), r([m({ type: String, json: { write: true } })], p6.prototype, "maxLabel", void 0), r([m({ type: String, json: { write: true } })], p6.prototype, "title", void 0), p6 = r([a2("esri.renderers.support.HeatmapLegendOptions")], p6);

// node_modules/@arcgis/core/renderers/HeatmapRenderer.js
var g2;
function f(t) {
  if (null != t) {
    const { maxDensity: e4, minDensity: i4, radius: s4 } = t;
    if (null != e4 || null != i4 || null != s4) {
      const { blurRadius: e5, maxPixelIntensity: i5, minPixelIntensity: s5, ...r5 } = t;
      return r5;
    }
  }
  return t;
}
var w2 = g2 = class extends p {
  constructor(t) {
    super(t), this.authoringInfo = null, this.colorStops = [new l({ ratio: 0, color: new h("rgba(255, 140, 0, 0)") }), new l({ ratio: 0.75, color: new h("rgba(255, 140, 0, 1)") }), new l({ ratio: 0.9, color: new h("rgba(255, 0,   0, 1)") })], this.field = null, this.legendOptions = null, this.maxDensity = 0.04, this.minDensity = 0, this.radius = 18, this.referenceScale = 0, this.type = "heatmap", this.valueExpression = null, this.valueExpressionTitle = null;
  }
  normalizeCtorArgs(t) {
    return f(t);
  }
  get blurRadius() {
    return a4(this.radius);
  }
  set blurRadius(t) {
    const e4 = this.maxPixelIntensity, i4 = this.minPixelIntensity;
    this._set("radius", e2(t)), this._set("maxDensity", e4 * this._pixelIntensityToDensity), this._set("minDensity", i4 * this._pixelIntensityToDensity);
  }
  get maxPixelIntensity() {
    return this.maxDensity / this._pixelIntensityToDensity;
  }
  set maxPixelIntensity(t) {
    this._set("maxDensity", t * this._pixelIntensityToDensity);
  }
  get minPixelIntensity() {
    return this.minDensity / this._pixelIntensityToDensity;
  }
  set minPixelIntensity(t) {
    this._set("minDensity", t * this._pixelIntensityToDensity);
  }
  get _pixelIntensityToDensity() {
    return 24 / (c2 ** 2 * this.blurRadius ** 4);
  }
  read(t, e4) {
    t = f(t), super.read(t, e4);
  }
  getSymbol() {
    return new y2();
  }
  async getSymbolAsync() {
    return this.getSymbol();
  }
  get symbols() {
    return [this.getSymbol()];
  }
  async collectRequiredFields(t, e4) {
    const i4 = this.field, s4 = this.valueExpression;
    i4 && "string" == typeof i4 && T(t, e4, i4), s4 && "string" == typeof s4 && await _(t, e4, s4);
  }
  getAttributeHash() {
    return "";
  }
  getMeshHash() {
    return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${this.field}`;
  }
  clone() {
    return new g2({ authoringInfo: this.authoringInfo && this.authoringInfo.clone(), colorStops: a(this.colorStops), field: this.field, legendOptions: a(this.legendOptions), maxDensity: this.maxDensity, minDensity: this.minDensity, radius: this.radius, referenceScale: this.referenceScale, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle });
  }
};
r([m({ type: j, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], w2.prototype, "authoringInfo", void 0), r([m({ type: Number, json: { origins: { "portal-item": { write: true }, "web-map": { write: true } } } })], w2.prototype, "blurRadius", null), r([m({ type: [l], json: { write: { isRequired: true } } })], w2.prototype, "colorStops", void 0), r([m({ type: String, json: { write: true } })], w2.prototype, "field", void 0), r([m({ type: p6, json: { write: true } })], w2.prototype, "legendOptions", void 0), r([m({ type: Number, json: { write: true } })], w2.prototype, "maxDensity", void 0), r([m({ type: Number, json: { origins: { "portal-item": { write: true }, "web-map": { write: true } } } })], w2.prototype, "maxPixelIntensity", null), r([m({ type: Number, json: { write: true } })], w2.prototype, "minDensity", void 0), r([m({ type: Number, json: { origins: { "portal-item": { write: true }, "web-map": { write: true } } } })], w2.prototype, "minPixelIntensity", null), r([m({ type: Number, cast: o, json: { write: true } })], w2.prototype, "radius", void 0), r([m({ type: Number, range: { min: 0 }, json: { default: 0, write: true } })], w2.prototype, "referenceScale", void 0), r([r3({ heatmap: "heatmap" })], w2.prototype, "type", void 0), r([m({ type: String, json: { write: true, origins: { "web-document": { write: false }, "portal-item": { write: false } } } })], w2.prototype, "valueExpression", void 0), r([m({ type: String })], w2.prototype, "valueExpressionTitle", void 0), r([m({ readOnly: true })], w2.prototype, "_pixelIntensityToDensity", null), w2 = g2 = r([a2("esri.renderers.HeatmapRenderer")], w2);
var b4 = w2;

// node_modules/@arcgis/core/renderers/support/OthersCategory.js
var i3 = class extends a3.ClonableMixin(S) {
  constructor() {
    super(...arguments), this.color = new h([0, 0, 0, 0]), this.label = null, this.threshold = 0;
  }
};
r([m({ type: h, json: { write: true } })], i3.prototype, "color", void 0), r([m({ type: String, json: { write: true } })], i3.prototype, "label", void 0), r([m({ type: Number, range: { min: 0, max: 1 }, json: { write: true } })], i3.prototype, "threshold", void 0), i3 = r([a2("esri.renderers.support.OthersCategory")], i3);

// node_modules/@arcgis/core/renderers/PieChartRenderer.js
var v2 = { base: c, key: "type", typeMap: { size: b2, opacity: p2 } };
var S3 = class extends v(a3.ClonableMixin(p)) {
  constructor(e4) {
    super(e4), this.attributes = null, this.backgroundFillSymbol = null, this.defaultColor = new h([0, 0, 0, 0]), this.defaultLabel = null, this.holePercentage = 0, this.othersCategory = new i3(), this.legendOptions = null, this.outline = null, this.size = 12, this.type = "pie-chart", this.visualVariables = null;
  }
  getSymbol() {
    var _a;
    return new y2({ size: this.size ? this.size / 2 + (((_a = this.outline) == null ? void 0 : _a.width) || 0) : 0 });
  }
  async getSymbolAsync() {
    return this.getSymbol();
  }
  get symbols() {
    return [this.getSymbol(), this.backgroundFillSymbol].filter(G);
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.visualVariables) == null ? void 0 : _a.reduce((e4, t) => e4 + t.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    return this.symbols.reduce((e4, t) => e4 + JSON.stringify(t), "");
  }
  async collectRequiredFields(e4, t) {
    await this.collectVVRequiredFields(e4, t);
    for (const r5 of this.attributes) r5.valueExpression && await _(e4, t, r5.valueExpression), r5.field && e4.add(r5.field);
  }
};
r([m({ type: [c4], json: { write: true } })], S3.prototype, "attributes", void 0), r([m(n2)], S3.prototype, "backgroundFillSymbol", void 0), r([m({ type: h, json: { write: true } })], S3.prototype, "defaultColor", void 0), r([m({ type: String, json: { write: true } })], S3.prototype, "defaultLabel", void 0), r([m({ type: Number, range: { min: 0, max: 1 }, json: { write: true } })], S3.prototype, "holePercentage", void 0), r([m({ type: i3, json: { write: true } })], S3.prototype, "othersCategory", void 0), r([m({ type: u2, json: { write: true } })], S3.prototype, "legendOptions", void 0), r([m({ type: d2, json: { default: null, write: true } })], S3.prototype, "outline", void 0), r([m({ type: Number, cast: o, json: { write: true } })], S3.prototype, "size", void 0), r([r3({ pieChart: "pie-chart" })], S3.prototype, "type", void 0), r([m({ types: [v2] })], S3.prototype, "visualVariables", void 0), S3 = r([a2("esri.renderers.PieChartRenderer")], S3);
var w3 = S3;

// node_modules/@arcgis/core/renderers/support/typeUtils.js
var m3 = { key: "type", base: p, typeMap: { heatmap: b4, simple: p3, "unique-value": A, "class-breaks": w, "dot-density": y3, dictionary: u4, "pie-chart": w3 }, errorContext: "renderer" };
var u6 = { key: "type", base: p, typeMap: { simple: p3, "unique-value": A, "class-breaks": w, heatmap: b4 }, errorContext: "renderer", validate: c6 };
function c6(e4) {
  switch (e4.type) {
    case "simple":
      return f2(e4);
    case "unique-value":
      return d4(e4);
    case "class-breaks":
      return y4(e4);
    case "heatmap":
      return e4;
  }
}
function f2(r5) {
  if (r5.symbol) return r5;
  n.getLogger("esri.renderers.support.types").error("Removed invalid 'simple' renderer without a symbol from web scene.");
}
function d4(r5) {
  const t = r5.uniqueValueInfos, s4 = t == null ? void 0 : t.filter(({ symbol: r6, label: t2 }, s5) => (r6 || n.getLogger("esri.renderers.support.types").error(`Removed invalid unique value info ([${s5}] ${t2}) without a symbol from web scene.`), !!r6));
  return (s4 == null ? void 0 : s4.length) !== (t == null ? void 0 : t.length) && (r5.uniqueValueInfos = s4), r5;
}
function y4(r5) {
  const t = r5.classBreakInfos, s4 = t == null ? void 0 : t.filter(({ symbol: r6, label: t2 }, s5) => (r6 || n.getLogger("esri.renderers.support.types").error(`Removed invalid class break info ([${s5}] ${t2}) without a symbol from web scene.`), !!r6));
  return (s4 == null ? void 0 : s4.length) !== (t == null ? void 0 : t.length) && (r5.classBreakInfos = s4), r5;
}

export {
  l,
  m3 as m,
  u6 as u
};
//# sourceMappingURL=chunk-J6MQFQDT.js.map
