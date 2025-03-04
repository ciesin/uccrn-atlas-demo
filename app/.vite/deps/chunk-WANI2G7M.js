import {
  m as m2,
  n as n2,
  p,
  v,
  y
} from "./chunk-MG7UOFLP.js";
import {
  u as u2
} from "./chunk-4A3WH4AR.js";
import {
  z2 as z
} from "./chunk-IPFYNOOY.js";
import {
  T,
  _
} from "./chunk-6REABBOQ.js";
import {
  o as o3
} from "./chunk-HSI6V34N.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  u,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/renderers/support/ClassBreakInfo.js
var i;
var l = i = class extends S {
  constructor(e) {
    super(e), this.description = null, this.label = null, this.minValue = null, this.maxValue = 0, this.symbol = null;
  }
  clone() {
    var _a;
    return new i({ description: this.description, label: this.label, minValue: this.minValue, maxValue: this.maxValue, symbol: ((_a = this.symbol) == null ? void 0 : _a.clone()) ?? null });
  }
  getMeshHash() {
    const e = JSON.stringify(this.symbol);
    return `${this.minValue}.${this.maxValue}.${e}`;
  }
};
r([m({ type: String, json: { write: true } })], l.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], l.prototype, "label", void 0), r([m({ type: Number, json: { read: { source: "classMinValue" }, write: { target: "classMinValue" } } })], l.prototype, "minValue", void 0), r([m({ type: Number, json: { read: { source: "classMaxValue" }, write: { target: "classMaxValue" } } })], l.prototype, "maxValue", void 0), r([m(m2)], l.prototype, "symbol", void 0), l = i = r([a2("esri.renderers.support.ClassBreakInfo")], l);
var a3 = l;

// node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var v2;
var B = "log";
var F = "percent-of-total";
var V = "field";
var S2 = new o({ esriNormalizeByLog: B, esriNormalizeByPercentOfTotal: F, esriNormalizeByField: V });
var E = w(a3);
var j = v2 = class extends v(p) {
  constructor(e) {
    super(e), this._compiledValueExpression = { valueExpression: null, compiledFunction: null }, this.backgroundFillSymbol = null, this.classBreakInfos = null, this.defaultLabel = null, this.defaultSymbol = null, this.field = null, this.isMaxInclusive = true, this.legendOptions = null, this.normalizationField = null, this.normalizationTotal = null, this.type = "class-breaks", this.valueExpression = null, this.valueExpressionTitle = null, this._set("classBreakInfos", []);
  }
  readClassBreakInfos(e, s2, t) {
    if (!Array.isArray(e)) return;
    let o4 = s2.minValue;
    return e.map((e2) => {
      const s3 = new a3();
      return s3.read(e2, t), null == s3.minValue && (s3.minValue = o4), null == s3.maxValue && (s3.maxValue = s3.minValue), o4 = s3.maxValue, s3;
    });
  }
  writeClassBreakInfos(e, s2, t, o4) {
    const i2 = e.map((e2) => e2.write({}, o4));
    this._areClassBreaksConsecutive() && i2.forEach((e2) => delete e2.classMinValue), s2[t] = i2;
  }
  castField(e) {
    return null == e ? e : "function" == typeof e ? (n.getLogger(this).error(".field: field must be a string value"), null) : u(e);
  }
  get minValue() {
    return this.classBreakInfos && this.classBreakInfos[0] && this.classBreakInfos[0].minValue || 0;
  }
  get normalizationType() {
    let e = this._get("normalizationType");
    const s2 = !!this.normalizationField, t = null != this.normalizationTotal;
    return s2 || t ? (e = s2 && V || t && F || null, s2 && t && n.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")) : e !== V && e !== F || (e = null), e;
  }
  set normalizationType(e) {
    this._set("normalizationType", e);
  }
  addClassBreakInfo(e, s2, o4) {
    let i2 = null;
    i2 = "number" == typeof e ? new a3({ minValue: e, maxValue: s2, symbol: z(o4) }) : E(a(e)), this.classBreakInfos.push(i2), 1 === this.classBreakInfos.length && this.notifyChange("minValue");
  }
  removeClassBreakInfo(e, s2) {
    const t = this.classBreakInfos.length;
    for (let o4 = 0; o4 < t; o4++) {
      const t2 = [this.classBreakInfos[o4].minValue, this.classBreakInfos[o4].maxValue];
      if (t2[0] === e && t2[1] === s2) {
        this.classBreakInfos.splice(o4, 1);
        break;
      }
    }
  }
  getBreakIndex(e, s2) {
    return this.valueExpression && null == (s2 == null ? void 0 : s2.arcade) && n.getLogger(this).warn(""), this.valueExpression ? this._getBreakIndexForExpression(e, s2) : this._getBreakIndexForField(e);
  }
  async getClassBreakInfo(e, s2) {
    let t = s2;
    this.valueExpression && null == (s2 == null ? void 0 : s2.arcade) && (t = { ...t, arcade: await o3() });
    const o4 = this.getBreakIndex(e, t);
    return -1 !== o4 ? this.classBreakInfos[o4] : null;
  }
  getSymbol(e, s2) {
    if (this.valueExpression && null == (s2 == null ? void 0 : s2.arcade)) return void n.getLogger(this).error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const t = this.getBreakIndex(e, s2);
    return t > -1 ? this.classBreakInfos[t].symbol : this.defaultSymbol;
  }
  async getSymbolAsync(e, s2) {
    let t = s2;
    if (this.valueExpression && null == (s2 == null ? void 0 : s2.arcade)) {
      const e2 = await o3(), { arcadeUtils: s3 } = e2;
      s3.hasGeometryOperations(this.valueExpression) && await s3.enableGeometryOperations(), t = { ...t, arcade: e2 };
    }
    const o4 = this.getBreakIndex(e, t);
    return o4 > -1 ? this.classBreakInfos[o4].symbol : this.defaultSymbol;
  }
  get symbols() {
    const e = [];
    return this.classBreakInfos.forEach((s2) => {
      s2.symbol && e.push(s2.symbol);
    }), this.defaultSymbol && e.push(this.defaultSymbol), e;
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.visualVariables) == null ? void 0 : _a.reduce((e, s2) => e + s2.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    const e = JSON.stringify(this.backgroundFillSymbol), s2 = JSON.stringify(this.defaultSymbol), t = `${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`;
    return `${e}.${s2}.${this.classBreakInfos.reduce((e2, s3) => e2 + s3.getMeshHash(), "")}.${t}.${this.field}.${this.valueExpression}`;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  clone() {
    var _a, _b;
    return new v2({ field: this.field, backgroundFillSymbol: (_a = this.backgroundFillSymbol) == null ? void 0 : _a.clone(), defaultLabel: this.defaultLabel, defaultSymbol: (_b = this.defaultSymbol) == null ? void 0 : _b.clone(), valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, classBreakInfos: a(this.classBreakInfos), isMaxInclusive: this.isMaxInclusive, normalizationField: this.normalizationField, normalizationTotal: this.normalizationTotal, normalizationType: this.normalizationType, visualVariables: a(this.visualVariables), legendOptions: a(this.legendOptions), authoringInfo: a(this.authoringInfo) });
  }
  async collectRequiredFields(e, s2) {
    const t = [this.collectVVRequiredFields(e, s2), this.collectSymbolFields(e, s2)];
    await Promise.all(t);
  }
  async collectSymbolFields(e, s2) {
    const t = [...this.symbols.map((t2) => t2.collectRequiredFields(e, s2)), _(e, s2, this.valueExpression)];
    T(e, s2, this.field), T(e, s2, this.normalizationField), await Promise.all(t);
  }
  _getBreakIndexForExpression(e, s2) {
    const { viewingMode: t, scale: o4, spatialReference: i2, arcade: r4, timeZone: a4 } = s2 ?? {}, { valueExpression: l2 } = this;
    let n3 = this._compiledValueExpression.valueExpression === l2 ? this._compiledValueExpression.compiledFunction : null;
    const u3 = r4.arcadeUtils;
    if (!n3) {
      const e2 = u3.createSyntaxTree(l2);
      n3 = u3.createFunction(e2), this._compiledValueExpression.compiledFunction = n3;
    }
    this._compiledValueExpression.valueExpression = l2;
    const p2 = u3.executeFunction(n3, u3.createExecContext(e, u3.getViewInfo({ viewingMode: t, scale: o4, spatialReference: i2 }), a4));
    return this._getBreakIndexfromInfos(p2);
  }
  _getBreakIndexForField(e) {
    const s2 = this.field, t = e.attributes, o4 = this.normalizationType;
    let i2 = parseFloat(t[s2]);
    if (o4) {
      const e2 = this.normalizationTotal, s3 = parseFloat(this.normalizationField ? t[this.normalizationField] : void 0);
      if (o4 === B) i2 = Math.log(i2) * Math.LOG10E;
      else if (o4 !== F || null == e2 || isNaN(e2)) {
        if (o4 === V && !isNaN(s3)) {
          if (isNaN(i2) || isNaN(s3)) return -1;
          i2 /= s3;
        }
      } else i2 = i2 / e2 * 100;
    }
    return this._getBreakIndexfromInfos(i2);
  }
  _getBreakIndexfromInfos(e) {
    const s2 = this.isMaxInclusive;
    if (null != e && "number" == typeof e && !isNaN(e)) for (let t = 0; t < this.classBreakInfos.length; t++) {
      const o4 = [this.classBreakInfos[t].minValue, this.classBreakInfos[t].maxValue];
      if (o4[0] <= e && (s2 ? e <= o4[1] : e < o4[1])) return t;
    }
    return -1;
  }
  _areClassBreaksConsecutive() {
    const e = this.classBreakInfos, s2 = e.length;
    for (let t = 1; t < s2; t++) if (e[t - 1].maxValue !== e[t].minValue) return false;
    return true;
  }
};
r([m(n2)], j.prototype, "backgroundFillSymbol", void 0), r([m({ type: [a3], json: { write: { isRequired: true } } })], j.prototype, "classBreakInfos", void 0), r([o2("classBreakInfos")], j.prototype, "readClassBreakInfos", null), r([r2("classBreakInfos")], j.prototype, "writeClassBreakInfos", null), r([m({ type: String, json: { write: true } })], j.prototype, "defaultLabel", void 0), r([m(y)], j.prototype, "defaultSymbol", void 0), r([m({ type: String, json: { write: true } })], j.prototype, "field", void 0), r([s("field")], j.prototype, "castField", null), r([m({ type: Boolean })], j.prototype, "isMaxInclusive", void 0), r([m({ type: u2, json: { write: true } })], j.prototype, "legendOptions", void 0), r([m({ type: Number, readOnly: true, value: null, json: { read: false, write: { overridePolicy() {
  return 0 !== this.classBreakInfos.length && this._areClassBreaksConsecutive() ? { enabled: true } : { enabled: false };
} } } })], j.prototype, "minValue", null), r([m({ type: String, json: { write: true } })], j.prototype, "normalizationField", void 0), r([m({ type: Number, json: { write: true } })], j.prototype, "normalizationTotal", void 0), r([m({ type: S2.apiValues, value: null, json: { type: S2.jsonValues, read: S2.read, write: S2.write } })], j.prototype, "normalizationType", null), r([r3({ classBreaks: "class-breaks" })], j.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], j.prototype, "valueExpression", void 0), r([m({ type: String, json: { write: true } })], j.prototype, "valueExpressionTitle", void 0), j = v2 = r([a2("esri.renderers.ClassBreaksRenderer")], j);
var w2 = j;

export {
  a3 as a,
  w2 as w
};
//# sourceMappingURL=chunk-WANI2G7M.js.map
