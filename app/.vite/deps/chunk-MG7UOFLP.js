import {
  u as u3
} from "./chunk-ACXFIEER.js";
import {
  m as m2,
  p
} from "./chunk-5LA23O74.js";
import {
  a as a4
} from "./chunk-4KREATVZ.js";
import {
  r as r4
} from "./chunk-XUYUNZTH.js";
import {
  a as a5,
  e as e2,
  i,
  t,
  v
} from "./chunk-POMCHIIZ.js";
import {
  D,
  F,
  h3 as h,
  x as x2
} from "./chunk-IPFYNOOY.js";
import {
  n as n4
} from "./chunk-2Y4TRKRB.js";
import {
  T,
  _,
  e
} from "./chunk-6REABBOQ.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  n as n3,
  r as r3
} from "./chunk-K2PILHWE.js";
import {
  o as o3
} from "./chunk-JLFV7EBO.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s as s3
} from "./chunk-BDBI2KVA.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  s2 as s,
  u,
  u2,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n,
  n2,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/renderers/support/AuthoringInfoClassBreakInfo.js
var t2;
var p2 = t2 = class extends S {
  constructor(r5) {
    super(r5), this.minValue = 0, this.maxValue = 0;
  }
  clone() {
    return new t2({ minValue: this.minValue, maxValue: this.maxValue });
  }
};
r([m({ type: Number, json: { write: true } })], p2.prototype, "minValue", void 0), r([m({ type: Number, json: { write: true } })], p2.prototype, "maxValue", void 0), p2 = t2 = r([a2("esri.renderers.support.AuthoringInfoClassBreakInfo")], p2);

// node_modules/@arcgis/core/renderers/support/AuthoringInfoFieldInfo.js
var n5;
var a6 = n5 = class extends S {
  constructor(o4) {
    super(o4), this.field = "", this.normalizationField = "", this.label = "", this.classBreakInfos = new Array();
  }
  clone() {
    return new n5({ field: this.field, normalizationField: this.normalizationField, label: this.label, classBreakInfos: a(this.classBreakInfos) });
  }
};
r([m({ type: String, json: { write: true } })], a6.prototype, "field", void 0), r([m({ type: String, json: { write: true } })], a6.prototype, "normalizationField", void 0), r([m({ type: String, json: { write: true } })], a6.prototype, "label", void 0), r([m({ type: [p2], json: { write: true } })], a6.prototype, "classBreakInfos", void 0), a6 = n5 = r([a2("esri.renderers.support.AuthoringInfoFieldInfo")], a6);

// node_modules/@arcgis/core/renderers/support/AuthoringInfoSizeStop.js
var t3;
var p3 = t3 = class extends S {
  constructor(r5) {
    super(r5), this.label = null, this.size = null, this.value = null;
  }
  clone() {
    return new t3({ label: this.label, value: this.value, size: this.size });
  }
};
r([m({ type: String, json: { write: true } })], p3.prototype, "label", void 0), r([m({ type: Number, json: { write: true } })], p3.prototype, "size", void 0), r([m({ type: Number, json: { write: true } })], p3.prototype, "value", void 0), p3 = t3 = r([a2("esri.renderers.support.AuthoringInfoSizeStop")], p3);
var i2 = p3;

// node_modules/@arcgis/core/renderers/support/AuthoringInfoVisualVariable.js
var a7;
var p4 = new o({ percentTotal: "percent-of-total", ratio: "ratio", percent: "percent" });
var u4 = new o({ sizeInfo: "size", colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation" });
var m3 = { key: (e4) => "number" == typeof e4 ? "number" : "string", typeMap: { number: Number, string: String }, base: null };
var c = ["high-to-low", "above-and-below", "centered-on", "extremes"];
var y = [.../* @__PURE__ */ new Set([...["high-to-low", "above-and-below", "centered-on", "extremes", "above", "below"], ...["high-to-low", "above-and-below", "above", "below", "reference-size"]])];
var h2 = ["seconds", "minutes", "hours", "days", "months", "years"];
var S2 = ["circle", "diamond", "hexagon-flat", "hexagon-pointy", "square"];
var d = a7 = class extends S {
  constructor(e4) {
    super(e4), this.endTime = null, this.field = null, this.maxSliderValue = null, this.minSliderValue = null, this.startTime = null, this.type = null, this.units = null;
  }
  castEndTime(e4) {
    return "string" == typeof e4 || "number" == typeof e4 ? e4 : null;
  }
  get normalizationField() {
    return "reference-size" === this.theme ? this._get("normalizationField") : null;
  }
  set normalizationField(e4) {
    this._set("normalizationField", e4);
  }
  get referenceSizeScale() {
    return "reference-size" === this.theme ? this._get("referenceSizeScale") : null;
  }
  set referenceSizeScale(e4) {
    this._set("referenceSizeScale", e4);
  }
  get referenceSizeSymbolStyle() {
    return "reference-size" === this.theme ? this._get("referenceSizeSymbolStyle") : null;
  }
  set referenceSizeSymbolStyle(e4) {
    this._set("referenceSizeSymbolStyle", e4);
  }
  castStartTime(e4) {
    return "string" == typeof e4 || "number" == typeof e4 ? e4 : null;
  }
  get sizeStops() {
    return "reference-size" === this.theme ? this._get("sizeStops") : null;
  }
  set sizeStops(e4) {
    this._set("sizeStops", e4);
  }
  get style() {
    return "color" === this.type ? this._get("style") : null;
  }
  set style(e4) {
    this._set("style", e4);
  }
  get theme() {
    return "color" === this.type || "size" === this.type ? this._get("theme") || "high-to-low" : null;
  }
  set theme(e4) {
    this._set("theme", e4);
  }
  clone() {
    return new a7({ endTime: this.endTime, field: this.field, maxSliderValue: this.maxSliderValue, minSliderValue: this.minSliderValue, normalizationField: this.normalizationField, referenceSizeScale: this.referenceSizeScale, referenceSizeSymbolStyle: this.referenceSizeSymbolStyle, sizeStops: a(this.sizeStops), startTime: this.startTime, style: this.style, theme: this.theme, type: this.type, units: this.units });
  }
};
r([m({ types: m3, json: { write: true } })], d.prototype, "endTime", void 0), r([s3("endTime")], d.prototype, "castEndTime", null), r([m({ type: String, json: { write: true } })], d.prototype, "field", void 0), r([m({ type: Number, json: { write: true } })], d.prototype, "maxSliderValue", void 0), r([m({ type: Number, json: { write: true } })], d.prototype, "minSliderValue", void 0), r([m({ type: String, json: { origins: { "web-scene": { write: false } }, write: true } })], d.prototype, "normalizationField", null), r([m({ type: Number, value: null, json: { origins: { "web-scene": { write: false } }, write: true } })], d.prototype, "referenceSizeScale", null), r([m({ type: S2, value: null, json: { origins: { "web-scene": { write: false } }, write: true } })], d.prototype, "referenceSizeSymbolStyle", null), r([m({ types: m3, json: { write: true } })], d.prototype, "startTime", void 0), r([s3("startTime")], d.prototype, "castStartTime", null), r([m({ type: [i2], json: { origins: { "web-scene": { write: false } }, write: true } })], d.prototype, "sizeStops", null), r([m({ type: p4.apiValues, value: null, json: { type: p4.jsonValues, read: p4.read, write: p4.write } })], d.prototype, "style", null), r([m({ type: y, value: null, json: { type: y, origins: { "web-scene": { type: c, write: { writer: (e4, t5) => {
  c.includes(e4) && (t5.theme = e4);
} } } }, write: true } })], d.prototype, "theme", null), r([m({ type: u4.apiValues, json: { type: u4.jsonValues, read: u4.read, write: u4.write } })], d.prototype, "type", void 0), r([m({ type: h2, json: { type: h2, write: true } })], d.prototype, "units", void 0), d = a7 = r([a2("esri.renderers.support.AuthoringInfoVisualVariable")], d);
var f = d;

// node_modules/@arcgis/core/renderers/support/AuthoringInfo.js
var c2;
var h3 = new o({ esriClassifyDefinedInterval: "defined-interval", esriClassifyEqualInterval: "equal-interval", esriClassifyManual: "manual", esriClassifyNaturalBreaks: "natural-breaks", esriClassifyQuantile: "quantile", esriClassifyStandardDeviation: "standard-deviation" });
var y2 = new o({ classedSize: "class-breaks-size", classedColor: "class-breaks-color", univariateColorSize: "univariate-color-size", relationship: "relationship", predominance: "predominance", dotDensity: "dot-density", flow: "flow" });
var m4 = new o({ classedSize: "class-breaks-size", classedColor: "class-breaks-color", univariateColorSize: "univariate-color-size", relationship: "relationship", predominance: "predominance", dotDensity: "dot-density" });
var f2 = ["inches", "feet", "yards", "miles", "nautical-miles", "millimeters", "centimeters", "decimeters", "meters", "kilometers"];
var v2 = ["high-to-low", "above-and-below", "above", "below"];
var w = ["flow-line", "wave-front"];
var b = ["caret", "circle-caret", "arrow", "circle-arrow", "plus-minus", "circle-plus-minus", "square", "circle", "triangle", "happy-sad", "thumb", "custom"];
var g2 = c2 = class extends S {
  constructor(e4) {
    super(e4), this.colorRamp = null, this.fadeRatio = null, this.isAutoGenerated = false, this.lengthUnit = null, this.maxSliderValue = null, this.minSliderValue = null, this.visualVariables = null;
  }
  get classificationMethod() {
    const e4 = this._get("classificationMethod"), t5 = this.type;
    return t5 && "relationship" !== t5 ? "class-breaks-size" === t5 || "class-breaks-color" === t5 ? e4 || "manual" : null : e4;
  }
  set classificationMethod(e4) {
    this._set("classificationMethod", e4);
  }
  readColorRamp(e4) {
    return e4 ? p(e4) : void 0;
  }
  get fields() {
    return this.type && "predominance" !== this.type ? null : this._get("fields");
  }
  set fields(e4) {
    this._set("fields", e4);
  }
  get field1() {
    return this.type && "relationship" !== this.type ? null : this._get("field1");
  }
  set field1(e4) {
    this._set("field1", e4);
  }
  get field2() {
    return this.type && "relationship" !== this.type ? null : this._get("field2");
  }
  set field2(e4) {
    this._set("field2", e4);
  }
  get flowTheme() {
    return "flow" === this.type ? this._get("flowTheme") : null;
  }
  set flowTheme(e4) {
    this._set("flowTheme", e4);
  }
  get focus() {
    return this.type && "relationship" !== this.type ? null : this._get("focus");
  }
  set focus(e4) {
    this._set("focus", e4);
  }
  get numClasses() {
    return this.type && "relationship" !== this.type ? null : this._get("numClasses");
  }
  set numClasses(e4) {
    this._set("numClasses", e4);
  }
  get statistics() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("statistics") : null;
  }
  set statistics(e4) {
    this._set("statistics", e4);
  }
  get standardDeviationInterval() {
    const e4 = this.type;
    return e4 && "relationship" !== e4 && "class-breaks-size" !== e4 && "class-breaks-color" !== e4 || this.classificationMethod && "standard-deviation" !== this.classificationMethod ? null : this._get("standardDeviationInterval");
  }
  set standardDeviationInterval(e4) {
    this._set("standardDeviationInterval", e4);
  }
  get type() {
    return this._get("type");
  }
  set type(e4) {
    let t5 = e4;
    "classed-size" === e4 ? t5 = "class-breaks-size" : "classed-color" === e4 && (t5 = "class-breaks-color"), this._set("type", t5);
  }
  get univariateSymbolStyle() {
    return "univariate-color-size" === this.type && "above-and-below" === this.univariateTheme ? this._get("univariateSymbolStyle") : null;
  }
  set univariateSymbolStyle(e4) {
    this._set("univariateSymbolStyle", e4);
  }
  get univariateTheme() {
    return "univariate-color-size" === this.type ? this._get("univariateTheme") : null;
  }
  set univariateTheme(e4) {
    this._set("univariateTheme", e4);
  }
  clone() {
    var _a;
    return new c2({ classificationMethod: this.classificationMethod, colorRamp: a(this.colorRamp), fadeRatio: a(this.fadeRatio), fields: (_a = this.fields) == null ? void 0 : _a.slice(), field1: a(this.field1), field2: a(this.field2), isAutoGenerated: this.isAutoGenerated, focus: this.focus, numClasses: this.numClasses, maxSliderValue: this.maxSliderValue, minSliderValue: this.minSliderValue, lengthUnit: this.lengthUnit, statistics: this.statistics, standardDeviationInterval: this.standardDeviationInterval, type: this.type, visualVariables: this.visualVariables && this.visualVariables.map((e4) => e4.clone()), univariateSymbolStyle: this.univariateSymbolStyle, univariateTheme: this.univariateTheme, flowTheme: this.flowTheme });
  }
};
r([m({ type: h3.apiValues, value: null, json: { type: h3.jsonValues, read: h3.read, write: h3.write, origins: { "web-document": { default: "manual", type: h3.jsonValues, read: h3.read, write: h3.write } } } })], g2.prototype, "classificationMethod", null), r([m({ types: m2, json: { write: true } })], g2.prototype, "colorRamp", void 0), r([o2("colorRamp")], g2.prototype, "readColorRamp", null), r([m({ json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], g2.prototype, "fadeRatio", void 0), r([m({ type: [String], value: null, json: { write: true } })], g2.prototype, "fields", null), r([m({ type: a6, value: null, json: { write: true } })], g2.prototype, "field1", null), r([m({ type: a6, value: null, json: { write: true } })], g2.prototype, "field2", null), r([m({ type: w, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], g2.prototype, "flowTheme", null), r([m({ type: ["HH", "HL", "LH", "LL"], value: null, json: { write: true } })], g2.prototype, "focus", null), r([m({ type: Boolean, json: { write: true, default: false, origins: { "web-scene": { write: false } } } })], g2.prototype, "isAutoGenerated", void 0), r([m({ type: Number, value: null, json: { type: x, write: true } })], g2.prototype, "numClasses", null), r([m({ type: f2, json: { type: f2, read: false, write: false, origins: { "web-scene": { read: true, write: true } } } })], g2.prototype, "lengthUnit", void 0), r([m({ type: Number, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], g2.prototype, "maxSliderValue", void 0), r([m({ type: Number, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], g2.prototype, "minSliderValue", void 0), r([m({ type: Object, value: null, json: { write: true, origins: { "web-scene": { write: false, read: false } } } })], g2.prototype, "statistics", null), r([m({ type: [0.25, 0.33, 0.5, 1], value: null, json: { type: [0.25, 0.33, 0.5, 1], write: true } })], g2.prototype, "standardDeviationInterval", null), r([m({ type: y2.apiValues, value: null, json: { type: y2.jsonValues, read: y2.read, write: y2.write, origins: { "web-scene": { type: m4.jsonValues, write: { writer: m4.write, overridePolicy: (e4) => ({ enabled: "flow" !== e4 }) } } } } })], g2.prototype, "type", null), r([m({ type: [f], json: { write: true } })], g2.prototype, "visualVariables", void 0), r([m({ type: b, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], g2.prototype, "univariateSymbolStyle", null), r([m({ type: v2, value: null, json: { write: true, origins: { "web-scene": { write: false } } } })], g2.prototype, "univariateTheme", null), g2 = c2 = r([a2("esri.renderers.support.AuthoringInfo")], g2);
var j = g2;

// node_modules/@arcgis/core/renderers/Renderer.js
var n6 = new o({ simple: "simple", uniqueValue: "unique-value", classBreaks: "class-breaks", heatmap: "heatmap", dotDensity: "dot-density", dictionary: "dictionary", pieChart: "pie-chart" }, { ignoreUnknown: true });
var a8 = class extends S {
  constructor(e4) {
    super(e4), this.authoringInfo = null, this.type = null;
  }
  async getRequiredFields(e4) {
    if (!this.collectRequiredFields) return [];
    const r5 = /* @__PURE__ */ new Set();
    return await this.collectRequiredFields(r5, e4), Array.from(r5).sort();
  }
  getSymbol(e4, r5) {
  }
  async getSymbolAsync(e4, r5) {
  }
  get symbols() {
    return [];
  }
  get arcadeRequired() {
    return false;
  }
  getAttributeHash() {
    return JSON.stringify(this);
  }
  getMeshHash() {
    return JSON.stringify(this);
  }
};
r([m({ type: j, json: { write: true } })], a8.prototype, "authoringInfo", void 0), r([m({ type: n6.apiValues, readOnly: true, json: { type: n6.jsonValues, read: false, write: { writer: n6.write, ignoreOrigin: true, isRequired: true } } })], a8.prototype, "type", void 0), a8 = r([a2("esri.renderers.Renderer")], a8);
var p5 = a8;

// node_modules/@arcgis/core/renderers/visualVariables/support/VisualVariableLegendOptions.js
var p6 = class extends a3.ClonableMixin(S) {
  constructor() {
    super(...arguments), this.showLegend = null, this.title = null;
  }
};
r([m({ type: Boolean, json: { write: true } })], p6.prototype, "showLegend", void 0), r([m({ type: String, json: { write: true } })], p6.prototype, "title", void 0), p6 = r([a2("esri.renderers.visualVariables.support.VisualVariableLegendOptions")], p6);
var i3 = p6;

// node_modules/@arcgis/core/renderers/visualVariables/VisualVariable.js
var a9 = new o({ colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation", sizeInfo: "size" });
var u5 = class extends S {
  constructor(e4) {
    super(e4), this.index = null, this.type = null, this.field = null, this.valueExpression = null, this.valueExpressionTitle = null, this.legendOptions = null;
  }
  castField(e4) {
    return null == e4 ? e4 : "function" == typeof e4 ? (n2.getLogger(this).error(".field: field must be a string value"), null) : u(e4);
  }
  get arcadeRequired() {
    return !!this.valueExpression;
  }
  clone() {
  }
  getAttributeHash() {
    return `${this.type}-${this.field}-${this.valueExpression}`;
  }
};
r([m()], u5.prototype, "index", void 0), r([m({ type: a9.apiValues, readOnly: true, json: { read: a9.read, write: { writer: a9.write, isRequired: true } } })], u5.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], u5.prototype, "field", void 0), r([s3("field")], u5.prototype, "castField", null), r([m({ type: String, json: { write: true } })], u5.prototype, "valueExpression", void 0), r([m({ type: String, json: { write: true } })], u5.prototype, "valueExpressionTitle", void 0), r([m({ readOnly: true })], u5.prototype, "arcadeRequired", null), r([m({ type: i3, json: { write: true } })], u5.prototype, "legendOptions", void 0), u5 = r([a2("esri.renderers.visualVariables.VisualVariable")], u5);
var c3 = u5;

// node_modules/@arcgis/core/renderers/visualVariables/support/castSizeVariable.js
function e3(e4) {
  return o3(e4);
}

// node_modules/@arcgis/core/renderers/visualVariables/support/SizeVariableLegendOptions.js
var t4 = class extends i3 {
  constructor() {
    super(...arguments), this.customValues = null;
  }
};
r([m({ type: [Number], json: { write: true } })], t4.prototype, "customValues", void 0), t4 = r([a2("esri.renderers.visualVariables.support.SizeVariableLegendOptions")], t4);
var p7 = t4;

// node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js
var z;
var v3 = new o({ width: "width", depth: "depth", height: "height", widthAndDepth: "width-and-depth", all: "all" });
var w2 = new o({ unknown: "unknown", inch: "inches", foot: "feet", yard: "yards", mile: "miles", "nautical-mile": "nautical-miles", millimeter: "millimeters", centimeter: "centimeters", decimeter: "decimeters", meter: "meters", kilometer: "kilometers" });
function g3(e4) {
  if (null != e4) return "string" == typeof e4 || "number" == typeof e4 ? e3(e4) : "size" === e4.type ? e2(e4) ? e4 : (delete (e4 = { ...e4 }).type, new f3(e4)) : void 0;
}
function V(e4, t5, i7) {
  if ("object" != typeof e4) return e4;
  const s5 = new f3();
  return s5.read(e4, i7), s5;
}
var f3 = z = class extends c3 {
  constructor(e4) {
    super(e4), this.axis = null, this.legendOptions = null, this.normalizationField = null, this.scaleBy = null, this.target = null, this.type = "size", this.useSymbolValue = null, this.valueExpression = null, this.valueRepresentation = null, this.valueUnit = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null, isScaleDriven: null != this.valueExpression && v.test(this.valueExpression) };
  }
  set index(e4) {
    e2(this.maxSize) && (this.maxSize.index = `visualVariables[${e4}].maxSize`), e2(this.minSize) && (this.minSize.index = `visualVariables[${e4}].minSize`), this._set("index", e4);
  }
  get inputValueType() {
    return t(this);
  }
  set maxDataValue(e4) {
    e4 && this.stops && (n2.getLogger(this).warn("cannot set maxDataValue when stops is not null."), e4 = null), this._set("maxDataValue", e4);
  }
  set maxSize(e4) {
    e4 && this.stops && (n2.getLogger(this).warn("cannot set maxSize when stops is not null."), e4 = null), this._set("maxSize", e4);
  }
  castMaxSize(e4) {
    return g3(e4);
  }
  readMaxSize(e4, t5, i7) {
    return V(e4, t5, i7);
  }
  set minDataValue(e4) {
    e4 && this.stops && (n2.getLogger(this).warn("cannot set minDataValue when stops is not null."), e4 = null), this._set("minDataValue", e4);
  }
  set minSize(e4) {
    e4 && this.stops && (n2.getLogger(this).warn("cannot set minSize when stops is not null."), e4 = null), this._set("minSize", e4);
  }
  castMinSize(e4) {
    return g3(e4);
  }
  readMinSize(e4, t5, i7) {
    return V(e4, t5, i7);
  }
  get arcadeRequired() {
    return !!this.valueExpression || (null != this.minSize && "object" == typeof this.minSize && this.minSize.arcadeRequired || null != this.maxSize && "object" == typeof this.maxSize && this.maxSize.arcadeRequired);
  }
  set stops(e4) {
    null == this.minDataValue && null == this.maxDataValue && null == this.minSize && null == this.maxSize ? e4 && Array.isArray(e4) && (e4 = e4.filter((e5) => !!e5)).sort((e5, t5) => e5.value - t5.value) : e4 && (n2.getLogger(this).warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."), e4 = null), this._set("stops", e4);
  }
  get transformationType() {
    return a5(this, this.inputValueType);
  }
  readValueExpression(e4, t5) {
    return e4 || t5.expression && "$view.scale";
  }
  writeValueExpressionWebScene(e4, i7, s5, r5) {
    if ("$view.scale" === e4) {
      if (r5 == null ? void 0 : r5.messages) {
        const e5 = this.index, i8 = "string" == typeof e5 ? e5 : `visualVariables[${e5}]`;
        r5.messages.push(new s2("property:unsupported", this.type + "VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.", { instance: this, propertyName: i8 + ".valueExpression", context: r5 }));
      }
    } else i7[s5] = e4;
  }
  readValueUnit(e4) {
    return e4 ? w2.read(e4) : null;
  }
  clone() {
    var _a, _b;
    return new z({ axis: this.axis, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, maxDataValue: this.maxDataValue, maxSize: e2(this.maxSize) ? this.maxSize.clone() : this.maxSize, minDataValue: this.minDataValue, minSize: e2(this.minSize) ? this.minSize.clone() : this.minSize, normalizationField: this.normalizationField, stops: (_a = this.stops) == null ? void 0 : _a.map((e4) => e4.clone()), target: this.target, useSymbolValue: this.useSymbolValue, valueRepresentation: this.valueRepresentation, valueUnit: this.valueUnit, legendOptions: (_b = this.legendOptions) == null ? void 0 : _b.clone() });
  }
  flipSizes() {
    if (this.transformationType === i.ClampedLinear) {
      const { minSize: e4, maxSize: t5 } = this;
      return this.minSize = t5, this.maxSize = e4, this;
    }
    if (this.transformationType === i.Stops) {
      const e4 = this.stops;
      if (!e4) return this;
      const t5 = e4.map((e5) => e5.size).reverse(), i7 = e4.length;
      for (let s5 = 0; s5 < i7; s5++) e4[s5].size = t5[s5];
      return this;
    }
    return this;
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.target}-${this.normalizationField}`;
  }
  _interpolateData() {
    var _a;
    return (_a = this.stops) == null ? void 0 : _a.map((e4) => e4.value || 0);
  }
};
r([m({ readOnly: true })], f3.prototype, "cache", null), r([m({ type: v3.apiValues, json: { type: v3.jsonValues, origins: { "web-map": { read: false } }, read: v3.read, write: v3.write } })], f3.prototype, "axis", void 0), r([m()], f3.prototype, "index", null), r([m({ type: String, readOnly: true })], f3.prototype, "inputValueType", null), r([m({ type: p7, json: { write: true } })], f3.prototype, "legendOptions", void 0), r([m({ type: Number, value: null, json: { write: true } })], f3.prototype, "maxDataValue", null), r([m({ type: Number, value: null, json: { write: true } })], f3.prototype, "maxSize", null), r([s3("maxSize")], f3.prototype, "castMaxSize", null), r([o2("maxSize")], f3.prototype, "readMaxSize", null), r([m({ type: Number, value: null, json: { write: true } })], f3.prototype, "minDataValue", null), r([m({ type: Number, value: null, json: { write: true } })], f3.prototype, "minSize", null), r([s3("minSize")], f3.prototype, "castMinSize", null), r([o2("minSize")], f3.prototype, "readMinSize", null), r([m({ type: String, json: { write: true } })], f3.prototype, "normalizationField", void 0), r([m({ readOnly: true })], f3.prototype, "arcadeRequired", null), r([m({ type: String })], f3.prototype, "scaleBy", void 0), r([m({ type: [u3], value: null, json: { write: true } })], f3.prototype, "stops", null), r([m({ type: ["outline"], json: { write: true } })], f3.prototype, "target", void 0), r([m({ type: String, readOnly: true })], f3.prototype, "transformationType", null), r([m({ type: ["size"], json: { type: ["sizeInfo"] } })], f3.prototype, "type", void 0), r([m({ type: Boolean, json: { write: true, origins: { "web-map": { read: false } } } })], f3.prototype, "useSymbolValue", void 0), r([m({ type: String, json: { write: true } })], f3.prototype, "valueExpression", void 0), r([o2("valueExpression", ["valueExpression", "expression"])], f3.prototype, "readValueExpression", null), r([r2("web-scene", "valueExpression")], f3.prototype, "writeValueExpressionWebScene", null), r([m({ type: ["radius", "diameter", "area", "width", "distance"], json: { write: true } })], f3.prototype, "valueRepresentation", void 0), r([m({ type: w2.apiValues, json: { write: w2.write, origins: { "web-map": { read: false }, "web-scene": { write: true }, "portal-item": { write: true } } } })], f3.prototype, "valueUnit", void 0), r([o2("valueUnit")], f3.prototype, "readValueUnit", null), f3 = z = r([a2("esri.renderers.visualVariables.SizeVariable")], f3);
var b2 = f3;

// node_modules/@arcgis/core/renderers/visualVariables/ColorVariable.js
var i4;
var a10 = i4 = class extends c3 {
  constructor(t5) {
    super(t5), this.type = "color", this.normalizationField = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  set stops(t5) {
    t5 && Array.isArray(t5) && (t5 = t5.filter((t6) => !!t6)).sort((t6, o4) => t6.value - o4.value), this._set("stops", t5);
  }
  clone() {
    var _a;
    return new i4({ field: this.field, normalizationField: this.normalizationField, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, stops: this.stops && this.stops.map((t5) => t5.clone()), legendOptions: (_a = this.legendOptions) == null ? void 0 : _a.clone() });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t5) => t5.value || 0);
  }
};
r([m({ readOnly: true })], a10.prototype, "cache", null), r([m({ type: ["color"], json: { type: ["colorInfo"] } })], a10.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], a10.prototype, "normalizationField", void 0), r([m({ type: [a4], json: { write: true } })], a10.prototype, "stops", null), a10 = i4 = r([a2("esri.renderers.visualVariables.ColorVariable")], a10);
var p8 = a10;

// node_modules/@arcgis/core/renderers/visualVariables/support/OpacityStop.js
var l;
var u6 = l = class extends S {
  constructor(r5) {
    super(r5), this.label = null, this.opacity = null, this.value = null;
  }
  readOpacity(r5, o4) {
    return r3(o4.transparency);
  }
  writeOpacity(r5, o4, t5) {
    o4[t5] = n3(r5);
  }
  clone() {
    return new l({ label: this.label, opacity: this.opacity, value: this.value });
  }
};
r([m({ type: String, json: { write: true } })], u6.prototype, "label", void 0), r([m({ type: Number, json: { type: x, write: { target: "transparency", isRequired: true } } })], u6.prototype, "opacity", void 0), r([o2("opacity", ["transparency"])], u6.prototype, "readOpacity", null), r([r2("opacity")], u6.prototype, "writeOpacity", null), r([m({ type: Number, json: { write: { isRequired: true } } })], u6.prototype, "value", void 0), u6 = l = r([a2("esri.renderers.visualVariables.support.OpacityStop")], u6);
var n7 = u6;

// node_modules/@arcgis/core/renderers/visualVariables/OpacityVariable.js
var i5;
var a11 = i5 = class extends c3 {
  constructor(t5) {
    super(t5), this.type = "opacity", this.normalizationField = null;
  }
  get cache() {
    return { ipData: this._interpolateData(), hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  set stops(t5) {
    t5 && Array.isArray(t5) && (t5 = t5.filter((t6) => !!t6)).sort((t6, s5) => t6.value - s5.value), this._set("stops", t5);
  }
  clone() {
    var _a;
    return new i5({ field: this.field, normalizationField: this.normalizationField, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, stops: this.stops && this.stops.map((t5) => t5.clone()), legendOptions: (_a = this.legendOptions) == null ? void 0 : _a.clone() });
  }
  getAttributeHash() {
    return `${super.getAttributeHash()}-${this.normalizationField}`;
  }
  _interpolateData() {
    return this.stops && this.stops.map((t5) => t5.value || 0);
  }
};
r([m({ readOnly: true })], a11.prototype, "cache", null), r([m({ type: ["opacity"], json: { type: ["transparencyInfo"] } })], a11.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], a11.prototype, "normalizationField", void 0), r([m({ type: [n7], json: { write: true } })], a11.prototype, "stops", null), a11 = i5 = r([a2("esri.renderers.visualVariables.OpacityVariable")], a11);
var p9 = a11;

// node_modules/@arcgis/core/renderers/visualVariables/RotationVariable.js
var s4;
var i6 = s4 = class extends c3 {
  constructor(e4) {
    super(e4), this.axis = null, this.type = "rotation", this.rotationType = "geographic";
  }
  get cache() {
    return { hasExpression: !!this.valueExpression, compiledFunc: null };
  }
  clone() {
    var _a;
    return new s4({ axis: this.axis, rotationType: this.rotationType, field: this.field, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, legendOptions: (_a = this.legendOptions) == null ? void 0 : _a.clone() });
  }
};
r([m({ readOnly: true })], i6.prototype, "cache", null), r([m({ type: ["heading", "tilt", "roll"], json: { origins: { "web-scene": { default: "heading", write: true } } } })], i6.prototype, "axis", void 0), r([m({ type: ["rotation"], json: { type: ["rotationInfo"] } })], i6.prototype, "type", void 0), r([m({ type: ["geographic", "arithmetic"], json: { write: true, origins: { "web-document": { write: true, default: "geographic" } } } })], i6.prototype, "rotationType", void 0), i6 = s4 = r([a2("esri.renderers.visualVariables.RotationVariable")], i6);
var a12 = i6;

// node_modules/@arcgis/core/renderers/visualVariables/VisualVariableFactory.js
var b3 = { color: p8, size: b2, opacity: p9, rotation: a12 };
var u7 = new o({ colorInfo: "color", transparencyInfo: "opacity", rotationInfo: "rotation", sizeInfo: "size" });
var h4 = /^\[([^\]]+)\]$/i;
var m5 = class extends g {
  constructor() {
    super(...arguments), this.colorVariables = null, this.opacityVariables = null, this.rotationVariables = null, this.sizeVariables = null;
  }
  set visualVariables(r5) {
    if (this._resetVariables(), r5 = r5 == null ? void 0 : r5.filter((r6) => !!r6), r5 == null ? void 0 : r5.length) {
      for (const s5 of r5) switch (s5.type) {
        case "color":
          this.colorVariables.push(s5);
          break;
        case "opacity":
          this.opacityVariables.push(s5);
          break;
        case "rotation":
          this.rotationVariables.push(s5);
          break;
        case "size":
          this.sizeVariables.push(s5);
      }
      if (this.sizeVariables.length) {
        this.sizeVariables.some((r6) => !!r6.target) && r5.sort((r6, s5) => {
          let o4 = null;
          return o4 = r6.target === s5.target ? 0 : r6.target ? 1 : -1, o4;
        });
      }
      for (let s5 = 0; s5 < r5.length; s5++) {
        r5[s5].index = s5;
      }
      this._set("visualVariables", r5);
    } else this._set("visualVariables", r5);
  }
  readVariables(r5, s5, o4) {
    const { rotationExpression: a14, rotationType: i7 } = s5, l2 = a14 == null ? void 0 : a14.match(h4), n9 = l2 == null ? void 0 : l2[1];
    if (n9 && (r5 || (r5 = []), r5.push({ type: "rotationInfo", rotationType: i7, field: n9 })), r5) return r5.map((r6) => {
      const s6 = u7.read(r6.type), a15 = b3[s6];
      a15 || (n2.getLogger(this).warn(`Unknown variable type: ${s6}`), (o4 == null ? void 0 : o4.messages) && o4.messages.push(new s("visual-variable:unsupported", `visualVariable of type '${s6}' is not supported`, { definition: r6, context: o4 })));
      const i8 = new a15();
      return i8.read(r6, o4), i8;
    });
  }
  writeVariables(r5, s5) {
    const o4 = [];
    for (const e4 of r5) {
      const r6 = e4.toJSON(s5);
      r6 && o4.push(r6);
    }
    return o4;
  }
  _resetVariables() {
    this.colorVariables = [], this.opacityVariables = [], this.rotationVariables = [], this.sizeVariables = [];
  }
};
r([m()], m5.prototype, "visualVariables", null), m5 = r([a2("esri.renderers.visualVariables.VisualVariableFactory")], m5);
var V2 = m5;

// node_modules/@arcgis/core/renderers/mixins/VisualVariablesMixin.js
var m6 = { base: c3, key: "type", typeMap: { opacity: p9, color: p8, rotation: a12, size: b2 } };
var v4 = (l2) => {
  let u8 = class extends l2 {
    constructor() {
      super(...arguments), this._vvFactory = new V2();
    }
    set visualVariables(r5) {
      this._vvFactory.visualVariables = r5, this._set("visualVariables", this._vvFactory.visualVariables);
    }
    readVisualVariables(r5, a14, s5) {
      return this._vvFactory.readVariables(r5, a14, s5);
    }
    writeVisualVariables(r5, a14, s5, i7) {
      a14[s5] = this._vvFactory.writeVariables(r5, i7);
    }
    get arcadeRequiredForVisualVariables() {
      var _a;
      return ((_a = this.visualVariables) == null ? void 0 : _a.some(({ arcadeRequired: r5 }) => r5)) ?? false;
    }
    hasVisualVariables(r5, a14) {
      return r5 ? this.getVisualVariablesForType(r5, a14).length > 0 : this.getVisualVariablesForType("size", a14).length > 0 || this.getVisualVariablesForType("color", a14).length > 0 || this.getVisualVariablesForType("opacity", a14).length > 0 || this.getVisualVariablesForType("rotation", a14).length > 0;
    }
    getVisualVariablesForType(r5, a14) {
      var _a;
      return ((_a = this.visualVariables) == null ? void 0 : _a.filter((s5) => s5.type === r5 && ("string" == typeof a14 ? s5.target === a14 : false !== a14 || !s5.target))) ?? [];
    }
    async collectVVRequiredFields(r5, a14) {
      let s5 = [];
      this.visualVariables && (s5 = s5.concat(this.visualVariables));
      for (const i7 of s5) i7 && (i7.field && T(r5, a14, i7.field), i7.normalizationField && T(r5, a14, i7.normalizationField), i7.valueExpression && (y3(i7.valueExpression, r5, a14) || await _(r5, a14, i7.valueExpression)));
    }
  };
  return r([m({ types: [m6], value: null, json: { write: true } })], u8.prototype, "visualVariables", null), r([o2("visualVariables", ["visualVariables", "rotationType", "rotationExpression"])], u8.prototype, "readVisualVariables", null), r([r2("visualVariables")], u8.prototype, "writeVisualVariables", null), u8 = r([a2("esri.renderers.mixins.VisualVariablesMixin")], u8), u8;
};
function y3(r5, a14, s5) {
  const i7 = e(r5);
  return null != i7 && (T(a14, s5, i7), true);
}

// node_modules/@arcgis/core/renderers/support/commonProperties.js
var y4 = { types: D, json: { write: { writer: r4 }, origins: { "web-scene": { types: F, write: { writer: r4 }, read: { reader: u2({ types: F }) } } } } };
var m7 = n({ json: { origins: { "web-scene": { write: { isRequired: true } } } } }, y4);
var n8 = { types: { base: n4, key: "type", typeMap: { "simple-fill": x2.typeMap["simple-fill"], "picture-fill": x2.typeMap["picture-fill"], "polygon-3d": x2.typeMap["polygon-3d"], cim: x2.typeMap.cim } }, json: { write: { writer: r4 }, origins: { "web-scene": { type: h, write: { writer: r4 } } } } };
var a13 = { cast: (e4) => null == e4 || "string" == typeof e4 || "number" == typeof e4 ? e4 : `${e4}`, json: { type: String, write: { writer: (e4, r5) => {
  r5.value = e4 == null ? void 0 : e4.toString();
} } } };

export {
  j,
  p5 as p,
  c3 as c,
  p9 as p2,
  a12 as a,
  b2 as b,
  v4 as v,
  y4 as y,
  m7 as m,
  n8 as n,
  a13 as a2
};
//# sourceMappingURL=chunk-MG7UOFLP.js.map
