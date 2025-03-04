import {
  a2 as a4,
  m as m3,
  n as n3,
  p as p2,
  v,
  y
} from "./chunk-MG7UOFLP.js";
import {
  y as y2
} from "./chunk-PXJIE4N5.js";
import {
  u as u3
} from "./chunk-4A3WH4AR.js";
import {
  i
} from "./chunk-CQ2PC3VP.js";
import {
  u as u2,
  z2 as z
} from "./chunk-IPFYNOOY.js";
import {
  T,
  _
} from "./chunk-6REABBOQ.js";
import {
  o as o2
} from "./chunk-HSI6V34N.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  m as m2,
  p
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
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n,
  n2,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/renderers/support/UniqueValue.js
var l = class extends a3.ClonableMixin(S) {
  constructor(o3) {
    super(o3), this.value = null, this.value2 = null, this.value3 = null;
  }
};
r([m(a4)], l.prototype, "value", void 0), r([m(a4)], l.prototype, "value2", void 0), r([m(a4)], l.prototype, "value3", void 0), l = r([a2("esri.renderers.support.UniqueValue")], l);
var i2 = l;

// node_modules/@arcgis/core/renderers/support/UniqueValueClass.js
var n4 = class extends a3.ClonableMixin(S) {
  constructor(r4) {
    super(r4), this.description = null, this.label = null, this.symbol = null, this.values = null;
  }
  castValues(r4) {
    if (null == r4) return null;
    const o3 = typeof (r4 = Array.isArray(r4) ? r4 : [r4])[0];
    return "string" === o3 || "number" === o3 ? r4.map((r5) => new i2({ value: r5 })) : "object" === o3 ? r4[0] instanceof i2 ? r4 : r4.map((r5) => new i2(r5)) : null;
  }
};
r([m({ type: String, json: { write: true } })], n4.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], n4.prototype, "label", void 0), r([m(y)], n4.prototype, "symbol", void 0), r([m({ type: [i2], json: { type: [[String]], read: { reader: (r4) => r4 ? r4.map((r5) => new i2({ value: r5[0], value2: r5[1], value3: r5[2] })) : null }, write: { writer: (r4, e) => {
  const t = [];
  for (const s3 of r4) {
    const r5 = [s3.value, s3.value2, s3.value3].filter(G).map((r6) => r6.toString());
    t.push(r5);
  }
  e.values = t;
} } } })], n4.prototype, "values", void 0), r([s2("values")], n4.prototype, "castValues", null), n4 = r([a2("esri.renderers.support.UniqueValueClass")], n4);
var u4 = n4;

// node_modules/@arcgis/core/renderers/support/UniqueValueGroup.js
var i3 = class extends a3.ClonableMixin(S) {
  constructor(o3) {
    super(o3), this.heading = null, this.classes = null;
  }
};
r([m({ type: String, json: { write: true } })], i3.prototype, "heading", void 0), r([m({ type: [u4], json: { write: { isRequired: true } } })], i3.prototype, "classes", void 0), i3 = r([a2("esri.renderers.support.UniqueValueGroup")], i3);
var c = i3;

// node_modules/@arcgis/core/renderers/support/UniqueValueInfo.js
var l2;
var p3 = l2 = class extends S {
  constructor(o3) {
    super(o3), this.description = null, this.label = null, this.symbol = null, this.value = null;
  }
  clone() {
    return new l2({ value: this.value, description: this.description, label: this.label, symbol: this.symbol ? this.symbol.clone() : null });
  }
  getMeshHash() {
    var _a;
    const o3 = JSON.stringify((_a = this.symbol) == null ? void 0 : _a.toJSON());
    return `${this.value}.${o3}`;
  }
};
r([m({ type: String, json: { write: true } })], p3.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], p3.prototype, "label", void 0), r([m(m3)], p3.prototype, "symbol", void 0), r([m(a4)], p3.prototype, "value", void 0), p3 = l2 = r([a2("esri.renderers.support.UniqueValueInfo")], p3);
var n5 = p3;

// node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var E;
var M = "esri.renderers.UniqueValueRenderer";
var R = () => n2.getLogger(M);
var N = "uvInfos-watcher";
var P = "uvGroups-watcher";
var C2 = ",";
var $ = w(n5);
function z2(e) {
  const { field1: t, field2: s3, field3: i4, fieldDelimiter: o3, uniqueValueInfos: l3, valueExpression: r4 } = e, u5 = !(!t || !s3);
  return [{ classes: (l3 ?? []).map((e2) => {
    var _a;
    const { symbol: l4, label: n6, value: a5, description: p4 } = e2, [f, d2, c2] = u5 ? ((_a = a5 == null ? void 0 : a5.toString()) == null ? void 0 : _a.split(o3 || "")) || [] : [a5], h = [];
    return (t || r4) && h.push(f), s3 && h.push(d2), i4 && h.push(c2), { symbol: l4, label: n6, values: [h], description: p4 };
  }) }];
}
function L(e) {
  return null != e && "" !== e && ("string" != typeof e || "" !== e.trim() && "<null>" !== e.toLowerCase()) || (e = null), e + "";
}
var k = E = class extends v(p2) {
  constructor(e) {
    super(e), this._valueInfoMap = {}, this._isDefaultSymbolDerived = false, this._isInfosSource = null, this.type = "unique-value", this.backgroundFillSymbol = null, this.orderByClassesEnabled = false, this.valueExpressionTitle = null, this.legendOptions = null, this.defaultLabel = null, this.portal = null, this.styleOrigin = null, this.diff = { uniqueValueInfos(e2, t) {
      if (!e2 && !t) return;
      if (!e2 || !t) return { type: "complete", oldValue: e2, newValue: t };
      let s3 = false;
      const i4 = { type: "collection", added: [], removed: [], changed: [], unchanged: [] };
      for (let o3 = 0; o3 < t.length; o3++) {
        const l3 = e2.find((e3) => e3.value === t[o3].value);
        l3 ? y2(l3, t[o3]) ? (i4.changed.push({ type: "complete", oldValue: l3, newValue: t[o3] }), s3 = true) : i4.unchanged.push({ oldValue: l3, newValue: t[o3] }) : (i4.added.push(t[o3]), s3 = true);
      }
      for (let o3 = 0; o3 < e2.length; o3++) {
        t.find((t2) => t2.value === e2[o3].value) || (i4.removed.push(e2[o3]), s3 = true);
      }
      return s3 ? i4 : void 0;
    } }, this._set("uniqueValueInfos", []), this._set("uniqueValueGroups", []);
  }
  get _cache() {
    return { compiledFunc: null };
  }
  set field(e) {
    this._set("field", e), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  castField(e) {
    return null == e || "function" == typeof e ? e : u(e);
  }
  writeField(e, s3, i4, o3) {
    "string" == typeof e ? s3[i4] = e : (o3 == null ? void 0 : o3.messages) ? o3.messages.push(new s("property:unsupported", "UniqueValueRenderer.field set to a function cannot be written to JSON")) : R().error(".field: cannot write field to JSON since it's not a string value");
  }
  set field2(e) {
    this._set("field2", e), this._updateFieldDelimiter(), this._updateUniqueValues();
  }
  set field3(e) {
    this._set("field3", e), this._updateUniqueValues();
  }
  set valueExpression(e) {
    this._set("valueExpression", e), this._updateUniqueValues();
  }
  set defaultSymbol(e) {
    this._isDefaultSymbolDerived = false, this._set("defaultSymbol", e);
  }
  set fieldDelimiter(e) {
    this._set("fieldDelimiter", e), this._updateUniqueValues();
  }
  readPortal(e, t, s3) {
    return s3.portal || C.getDefault();
  }
  readStyleOrigin(e, t, s3) {
    if (t.styleName) return Object.freeze({ styleName: t.styleName });
    if (t.styleUrl) {
      const e2 = p(t.styleUrl, s3);
      return Object.freeze({ styleUrl: e2 });
    }
  }
  writeStyleOrigin(e, t, s3, i4) {
    e.styleName ? t.styleName = e.styleName : e.styleUrl && (t.styleUrl = m2(e.styleUrl, i4));
  }
  set uniqueValueGroups(e) {
    this.styleOrigin ? R().error("#uniqueValueGroups=", "Cannot modify unique value groups of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueGroups", e), this._updateInfosFromGroups(), this._isInfosSource = false, this._watchUniqueValueGroups());
  }
  set uniqueValueInfos(e) {
    this.styleOrigin ? R().error("#uniqueValueInfos=", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style") : (this._set("uniqueValueInfos", e), this._updateValueInfoMap(), this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos());
  }
  addUniqueValueInfo(e, t) {
    var _a;
    if (this.styleOrigin) return void R().error("#addUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    let s3;
    s3 = "object" == typeof e ? $(e) : new n5({ value: e, symbol: z(t) }), (_a = this.uniqueValueInfos) == null ? void 0 : _a.push(s3), this._valueInfoMap[L(s3.value)] = s3, this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  removeUniqueValueInfo(e) {
    if (this.styleOrigin) return void R().error("#removeUniqueValueInfo()", "Cannot modify unique value infos of a UniqueValueRenderer created from a web style");
    const t = this.uniqueValueInfos;
    if (t) for (let s3 = 0; s3 < t.length; s3++) {
      const i4 = t[s3];
      if (String(i4.value) === String(e)) {
        delete this._valueInfoMap[L(e)], t.splice(s3, 1);
        break;
      }
    }
    this._updateGroupsFromInfos(), this._isInfosSource = true, this._watchUniqueValueInfos();
  }
  async getUniqueValueInfo(e, t) {
    let s3 = t;
    return this.valueExpression && null == (t == null ? void 0 : t.arcade) && (s3 = { ...s3, arcade: await o2() }), this._getUniqueValueInfo(e, s3);
  }
  getSymbol(e, t) {
    if (this.valueExpression && null == (t == null ? void 0 : t.arcade)) return void R().error("#getSymbol()", "Please use getSymbolAsync if valueExpression is used");
    const s3 = this._getUniqueValueInfo(e, t);
    return (s3 == null ? void 0 : s3.symbol) || this.defaultSymbol;
  }
  async getSymbolAsync(e, t) {
    let s3 = t;
    if (this.valueExpression && null == (s3 == null ? void 0 : s3.arcade)) {
      const e2 = await o2(), { arcadeUtils: t2 } = e2;
      t2.hasGeometryOperations(this.valueExpression) && await t2.enableGeometryOperations(), s3 = { ...s3, arcade: e2 };
    }
    const i4 = this._getUniqueValueInfo(e, s3);
    return (i4 == null ? void 0 : i4.symbol) || this.defaultSymbol;
  }
  get symbols() {
    const e = [];
    for (const t of this.uniqueValueInfos ?? []) t.symbol && e.push(t.symbol);
    return this.defaultSymbol && e.push(this.defaultSymbol), e;
  }
  getAttributeHash() {
    var _a;
    return ((_a = this.visualVariables) == null ? void 0 : _a.reduce((e, t) => e + t.getAttributeHash(), "")) ?? "";
  }
  getMeshHash() {
    var _a;
    const e = JSON.stringify(this.backgroundFillSymbol), t = JSON.stringify(this.defaultSymbol), s3 = (_a = this.uniqueValueInfos) == null ? void 0 : _a.reduce((e2, t2) => e2 + t2.getMeshHash(), "");
    return `${e}.${t}.${s3}.${`${this.field}.${this.field2}.${this.field3}.${this.fieldDelimiter}`}.${this.valueExpression}`;
  }
  clone() {
    const e = new E({ field: this.field, field2: this.field2, field3: this.field3, defaultLabel: this.defaultLabel, defaultSymbol: a(this.defaultSymbol), orderByClassesEnabled: this.orderByClassesEnabled, valueExpression: this.valueExpression, valueExpressionTitle: this.valueExpressionTitle, fieldDelimiter: this.fieldDelimiter, visualVariables: a(this.visualVariables), legendOptions: a(this.legendOptions), authoringInfo: a(this.authoringInfo), backgroundFillSymbol: a(this.backgroundFillSymbol) });
    this._isDefaultSymbolDerived && (e._isDefaultSymbolDerived = true), e._set("portal", this.portal);
    const t = a(this.uniqueValueInfos), i4 = a(this.uniqueValueGroups);
    return this.styleOrigin && (e._set("styleOrigin", Object.freeze(a(this.styleOrigin))), Object.freeze(t), Object.freeze(i4)), e._set("uniqueValueInfos", t), e._updateValueInfoMap(), e._set("uniqueValueGroups", i4), e._isInfosSource = this._isInfosSource, e._watchUniqueValueInfosAndGroups(), e;
  }
  get arcadeRequired() {
    return this.arcadeRequiredForVisualVariables || !!this.valueExpression;
  }
  async collectRequiredFields(e, t) {
    const s3 = [this.collectVVRequiredFields(e, t), this.collectSymbolFields(e, t)];
    await Promise.all(s3);
  }
  async collectSymbolFields(e, t) {
    const s3 = [...this.symbols.map((s4) => s4.collectRequiredFields(e, t)), _(e, t, this.valueExpression)];
    T(e, t, this.field), T(e, t, this.field2), T(e, t, this.field3), await Promise.all(s3);
  }
  populateFromStyle() {
    return i(this.styleOrigin, { portal: this.portal }).then((e) => {
      var _a;
      const t = [];
      return this._valueInfoMap = {}, (e == null ? void 0 : e.data) && Array.isArray(e.data.items) && e.data.items.forEach((s3) => {
        const i4 = new u2({ styleUrl: e.styleUrl, styleName: e.styleName, portal: this.portal, name: s3.name });
        this.defaultSymbol || s3.name !== e.data.defaultItem || (this.defaultSymbol = i4, this._isDefaultSymbolDerived = true);
        const o3 = new n5({ value: s3.name, symbol: i4 });
        t.push(o3), this._valueInfoMap[L(s3.name)] = o3;
      }), this._set("uniqueValueInfos", Object.freeze(t)), this._updateGroupsFromInfos(true), this._isInfosSource = null, this._watchUniqueValueInfos(), !this.defaultSymbol && ((_a = this.uniqueValueInfos) == null ? void 0 : _a.length) && (this.defaultSymbol = this.uniqueValueInfos[0].symbol, this._isDefaultSymbolDerived = true), this;
    });
  }
  _updateFieldDelimiter() {
    this.field && this.field2 && !this.fieldDelimiter && this._set("fieldDelimiter", C2);
  }
  _updateUniqueValues() {
    null != this._isInfosSource && (this._isInfosSource ? this._updateGroupsFromInfos() : this._updateInfosFromGroups());
  }
  _updateValueInfoMap() {
    this._valueInfoMap = {};
    const { uniqueValueInfos: e } = this;
    if (e) for (const t of e) this._valueInfoMap[L(t.value)] = t;
  }
  _watchUniqueValueInfosAndGroups() {
    this._watchUniqueValueInfos(), this._watchUniqueValueGroups();
  }
  _watchUniqueValueInfos() {
    this.removeHandles(N);
    const { uniqueValueInfos: e } = this;
    if (e) {
      const t = [];
      for (const s3 of e) t.push(d(() => ({ symbol: s3.symbol, value: s3.value, label: s3.label, description: s3.description }), (e2, t2) => {
        e2 !== t2 && (this._updateGroupsFromInfos(), this._isInfosSource = true);
      }, { sync: true }));
      this.addHandles(t, N);
    }
  }
  _watchUniqueValueGroups() {
    this.removeHandles(P);
    const { uniqueValueGroups: e } = this;
    if (e) {
      const t = [];
      for (const s3 of e) {
        t.push(d(() => ({ classes: s3.classes }), (e2, t2) => {
          e2 !== t2 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, { sync: true }));
        for (const e2 of s3.classes ?? []) t.push(d(() => ({ symbol: e2.symbol, values: e2.values, label: e2.label, description: e2.description }), (e3, t2) => {
          e3 !== t2 && (this._updateInfosFromGroups(), this._isInfosSource = false);
        }, { sync: true }));
      }
      this.addHandles(t, P);
    }
  }
  _updateInfosFromGroups() {
    if (!this.uniqueValueGroups) return this._set("uniqueValueInfos", null), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const e = [], { field: t, field2: s3, field3: i4, fieldDelimiter: o3, uniqueValueGroups: l3, valueExpression: r4 } = this;
    if (!t && !r4) return this._set("uniqueValueInfos", e), this._updateValueInfoMap(), void this._watchUniqueValueInfos();
    const u5 = !(!t || !s3);
    for (const n6 of l3) for (const t2 of n6.classes ?? []) {
      const { symbol: l4, label: r5, values: n7, description: a5 } = t2;
      for (const t3 of n7 ?? []) {
        const { value: n8, value2: p4, value3: f } = t3, d2 = [n8];
        s3 && d2.push(p4), i4 && d2.push(f);
        const c2 = u5 ? d2.join(o3 || "") : d2[0] ?? void 0;
        e.push(new n5({ symbol: l4, label: r5, value: c2, description: a5 }));
      }
    }
    this._set("uniqueValueInfos", e), this._updateValueInfoMap(), this._watchUniqueValueInfos();
  }
  _updateGroupsFromInfos(e = false) {
    if (!this.uniqueValueInfos) return this._set("uniqueValueGroups", null), void this._watchUniqueValueGroups();
    const { field: t, field2: s3, valueExpression: i4, fieldDelimiter: o3, uniqueValueInfos: l3 } = this;
    if (!t && !i4 || !l3.length) return this._set("uniqueValueGroups", []), void this._watchUniqueValueGroups();
    const r4 = !(!t || !s3), u5 = l3.map((e2) => {
      var _a;
      const { symbol: t2, label: s4, value: i5, description: l4 } = e2, [u6, n7, a5] = r4 ? ((_a = i5 == null ? void 0 : i5.toString()) == null ? void 0 : _a.split(o3 || "")) || [] : [i5];
      return new u4({ symbol: t2, label: s4, description: l4, values: [new i2({ value: u6, value2: n7, value3: a5 })] });
    }), n6 = [new c({ classes: u5 })];
    e && Object.freeze(n6), this._set("uniqueValueGroups", n6), this._watchUniqueValueGroups();
  }
  _getUniqueValueInfo(e, t) {
    return this.valueExpression ? this._getUnqiueValueInfoForExpression(e, t) : this._getUnqiueValueInfoForFields(e);
  }
  _getUnqiueValueInfoForExpression(e, t) {
    const { viewingMode: s3, scale: i4, spatialReference: o3, arcade: l3, timeZone: r4 } = t ?? {};
    let u5 = this._cache.compiledFunc;
    const n6 = l3.arcadeUtils;
    if (!u5) {
      const e2 = n6.createSyntaxTree(this.valueExpression);
      u5 = n6.createFunction(e2), this._cache.compiledFunc = u5;
    }
    const a5 = n6.executeFunction(u5, n6.createExecContext(e, n6.getViewInfo({ viewingMode: s3, scale: i4, spatialReference: o3 }), r4));
    return this._valueInfoMap[L(a5)];
  }
  _getUnqiueValueInfoForFields(e) {
    const t = this.field, s3 = e.attributes;
    let i4;
    if (this.field2) {
      const e2 = this.field2, o3 = this.field3, l3 = [];
      t && l3.push(s3[t]), e2 && l3.push(s3[e2]), o3 && l3.push(s3[o3]), i4 = l3.join(this.fieldDelimiter || "");
    } else t && (i4 = s3[t]);
    return this._valueInfoMap[L(i4)];
  }
  static fromPortalStyle(e, t) {
    const s3 = new E(t == null ? void 0 : t.properties);
    s3._set("styleOrigin", Object.freeze({ styleName: e })), s3._set("portal", (t == null ? void 0 : t.portal) || C.getDefault());
    const i4 = s3.populateFromStyle();
    return i4.catch((t2) => {
      R().error(`#fromPortalStyle('${e}'[, ...])`, "Failed to create unique value renderer from style name", t2);
    }), i4;
  }
  static fromStyleUrl(e, t) {
    const s3 = new E(t == null ? void 0 : t.properties);
    s3._set("styleOrigin", Object.freeze({ styleUrl: e }));
    const i4 = s3.populateFromStyle();
    return i4.catch((t2) => {
      R().error(`#fromStyleUrl('${e}'[, ...])`, "Failed to create unique value renderer from style URL", t2);
    }), i4;
  }
};
r([m({ readOnly: true })], k.prototype, "_cache", null), r([r3({ uniqueValue: "unique-value" })], k.prototype, "type", void 0), r([m(n3)], k.prototype, "backgroundFillSymbol", void 0), r([m({ value: null, json: { type: String, read: { source: "field1" }, write: { target: "field1" } } })], k.prototype, "field", null), r([s2("field")], k.prototype, "castField", null), r([r2("field")], k.prototype, "writeField", null), r([m({ type: String, value: null, json: { write: true } })], k.prototype, "field2", null), r([m({ type: String, value: null, json: { write: true } })], k.prototype, "field3", null), r([m({ type: Boolean, json: { name: "drawInClassOrder", default: false, write: true, origins: { "web-scene": { write: false } } } })], k.prototype, "orderByClassesEnabled", void 0), r([m({ type: String, value: null, json: { write: true } })], k.prototype, "valueExpression", null), r([m({ type: String, json: { write: true } })], k.prototype, "valueExpressionTitle", void 0), r([m({ type: u3, json: { write: true } })], k.prototype, "legendOptions", void 0), r([m({ type: String, json: { write: true } })], k.prototype, "defaultLabel", void 0), r([m(n({ ...y }, { json: { write: { overridePolicy() {
  return { enabled: !this._isDefaultSymbolDerived };
} }, origins: { "web-scene": { write: { overridePolicy() {
  return { enabled: !this._isDefaultSymbolDerived };
} } } } } }))], k.prototype, "defaultSymbol", null), r([m({ type: String, value: null, json: { write: true } })], k.prototype, "fieldDelimiter", null), r([m({ type: C, readOnly: true })], k.prototype, "portal", void 0), r([o("portal", ["styleName"])], k.prototype, "readPortal", null), r([m({ readOnly: true, json: { write: { enabled: false, overridePolicy: () => ({ enabled: true }) } } })], k.prototype, "styleOrigin", void 0), r([o("styleOrigin", ["styleName", "styleUrl"])], k.prototype, "readStyleOrigin", null), r([r2("styleOrigin", { styleName: { type: String }, styleUrl: { type: String } })], k.prototype, "writeStyleOrigin", null), r([m({ type: [c], json: { read: { source: ["uniqueValueGroups", "uniqueValueInfos"], reader: (e, t, s3) => (t.uniqueValueGroups || z2(t)).map((e2) => c.fromJSON(e2, s3)) }, write: { overridePolicy() {
  return this.styleOrigin ? { enabled: false } : { enabled: true };
} } } })], k.prototype, "uniqueValueGroups", null), r([m({ type: [n5], json: { read: false, write: { isRequired: true, overridePolicy() {
  return this.styleOrigin ? { enabled: false } : { enabled: true, isRequired: true };
} } } })], k.prototype, "uniqueValueInfos", null), k = E = r([a2(M)], k);
var A = k;

export {
  n5 as n,
  A
};
//# sourceMappingURL=chunk-Q7YUVHCX.js.map
