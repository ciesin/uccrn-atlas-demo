import {
  a as a4,
  d as d2,
  d2 as d3,
  d3 as d4
} from "./chunk-PTXLIK52.js";
import {
  R,
  V as V2
} from "./chunk-ITIVGI42.js";
import {
  $,
  Z,
  w
} from "./chunk-PFFYYIYN.js";
import "./chunk-VLPXOXHN.js";
import "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-QCTBKAKN.js";
import "./chunk-ZJ7EGTR4.js";
import {
  i as i2
} from "./chunk-3VG7BBW5.js";
import {
  s as s2
} from "./chunk-27HW4PAJ.js";
import "./chunk-FFVHLGAP.js";
import {
  p
} from "./chunk-TNYXYQXK.js";
import {
  e as e2
} from "./chunk-2O2K2GAF.js";
import {
  l as l2
} from "./chunk-LJBNLWJN.js";
import "./chunk-4A3WH4AR.js";
import "./chunk-4KREATVZ.js";
import "./chunk-ACFHOOS7.js";
import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  c,
  d,
  l
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-775V3L2A.js";
import {
  y
} from "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  i3 as i,
  q
} from "./chunk-LCBD3JEK.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-3UHB6K6P.js";
import {
  r as r3
} from "./chunk-ZYOZHQFS.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-K2PILHWE.js";
import "./chunk-BV7O6P7Z.js";
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
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
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
  V
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  x
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
  a as a3
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  a,
  e,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudFilter.js
var t2 = class extends S {
  constructor(o2) {
    super(o2), this.field = null, this.type = null;
  }
  clone() {
    return console.warn(".clone() is not implemented for " + this.declaredClass), null;
  }
};
r([m({ type: String, json: { write: { enabled: true, isRequired: true } } })], t2.prototype, "field", void 0), r([m({ readOnly: true, nonNullable: true, json: { read: false, write: { isRequired: true } } })], t2.prototype, "type", void 0), t2 = r([a2("esri.layers.pointCloudFilters.PointCloudFilter")], t2);
var i3 = t2;

// node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudBitfieldFilter.js
var d5;
var p2 = d5 = class extends i3 {
  constructor(e4) {
    super(e4), this.requiredClearBits = null, this.requiredSetBits = null, this.type = "bitfield";
  }
  clone() {
    return new d5({ field: this.field, requiredClearBits: a(this.requiredClearBits), requiredSetBits: a(this.requiredSetBits) });
  }
};
r([m({ type: [x], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredSetBits };
} } } })], p2.prototype, "requiredClearBits", void 0), r([m({ type: [x], json: { write: { enabled: true, overridePolicy() {
  return { enabled: true, isRequired: !this.requiredClearBits };
} } } })], p2.prototype, "requiredSetBits", void 0), r([r3({ pointCloudBitfieldFilter: "bitfield" })], p2.prototype, "type", void 0), p2 = d5 = r([a2("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")], p2);
var u = p2;

// node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudReturnFilter.js
var n2;
var p3 = n2 = class extends i3 {
  constructor(r4) {
    super(r4), this.includedReturns = [], this.type = "return";
  }
  clone() {
    return new n2({ field: this.field, includedReturns: a(this.includedReturns) });
  }
};
r([m({ type: [["firstOfMany", "last", "lastOfMany", "single"]], json: { write: { enabled: true, isRequired: true } } })], p3.prototype, "includedReturns", void 0), r([r3({ pointCloudReturnFilter: "return" })], p3.prototype, "type", void 0), p3 = n2 = r([a2("esri.layers.pointCloudFilters.PointCloudReturnFilter")], p3);
var u2 = p3;

// node_modules/@arcgis/core/layers/pointCloudFilters/PointCloudValueFilter.js
var l3;
var p4 = l3 = class extends i3 {
  constructor(e4) {
    super(e4), this.mode = "exclude", this.type = "value", this.values = [];
  }
  clone() {
    return new l3({ field: this.field, mode: this.mode, values: a(this.values) });
  }
};
r([m({ type: ["exclude", "include"], json: { write: { enabled: true, isRequired: true } } })], p4.prototype, "mode", void 0), r([r3({ pointCloudValueFilter: "value" })], p4.prototype, "type", void 0), r([m({ type: [Number], json: { write: { enabled: true, isRequired: true } } })], p4.prototype, "values", void 0), p4 = l3 = r([a2("esri.layers.pointCloudFilters.PointCloudValueFilter")], p4);
var u3 = p4;

// node_modules/@arcgis/core/layers/pointCloudFilters/typeUtils.js
var e3 = { key: "type", base: i3, typeMap: { value: u3, bitfield: u, return: u2 } };

// node_modules/@arcgis/core/renderers/PointCloudRGBRenderer.js
var p5;
var c2 = p5 = class extends d2 {
  constructor(r4) {
    super(r4), this.type = "point-cloud-rgb", this.field = null;
  }
  clone() {
    return new p5({ ...this.cloneProperties(), field: a(this.field) });
  }
};
r([r3({ pointCloudRGBRenderer: "point-cloud-rgb" })], c2.prototype, "type", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], c2.prototype, "field", void 0), c2 = p5 = r([a2("esri.renderers.PointCloudRGBRenderer")], c2);
var n3 = c2;

// node_modules/@arcgis/core/renderers/support/pointCloud/typeUtils.js
var i4 = { key: "type", base: d2, typeMap: { "point-cloud-class-breaks": d3, "point-cloud-rgb": n3, "point-cloud-stretch": a4, "point-cloud-unique-value": d4 }, errorContext: "renderer" };

// node_modules/@arcgis/core/layers/PointCloudLayer.js
var O = s2();
var V3 = class extends R(l2(b(j(t(S2(e2(i2(f)))))))) {
  constructor(...e4) {
    super(...e4), this.operationalLayerType = "PointCloudLayer", this.popupEnabled = true, this.popupTemplate = null, this.opacity = 1, this.filters = [], this.fields = null, this.fieldsIndex = null, this.outFields = null, this.path = null, this.legendEnabled = true, this.renderer = null, this.type = "point-cloud";
  }
  normalizeCtorArgs(e4, r4) {
    return "string" == typeof e4 ? { url: e4, ...r4 } : e4;
  }
  get defaultPopupTemplate() {
    return this.attributeStorageInfo ? this.createPopupTemplate() : null;
  }
  getFieldDomain(e4) {
    const r4 = this.fieldsIndex.get(e4);
    return (r4 == null ? void 0 : r4.domain) ? r4.domain : null;
  }
  readServiceFields(e4, r4, t3) {
    return Array.isArray(e4) ? e4.map((e5) => {
      const r5 = new y();
      return "FieldTypeInteger" === e5.type && ((e5 = a(e5)).type = "esriFieldTypeInteger"), r5.read(e5, t3), r5;
    }) : Array.isArray(r4.attributeStorageInfo) ? r4.attributeStorageInfo.map((e5) => new y({ name: e5.name, type: "ELEVATION" === e5.name ? "double" : "integer" })) : null;
  }
  set elevationInfo(e4) {
    null != e4 && "absolute-height" !== e4.mode || this._set("elevationInfo", e4), this._validateElevationInfo(e4);
  }
  writeRenderer(e4, r4, t3, o2) {
    e("layerDefinition.drawingInfo.renderer", e4.write({}, o2), r4);
  }
  load(e4) {
    const r4 = null != e4 ? e4.signal : null, t3 = this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e4).catch(a3).then(() => this._fetchService(r4));
    return this.addResolvingPromise(t3), Promise.resolve(this);
  }
  createPopupTemplate(e4) {
    const r4 = p(this, e4);
    return r4 && (this._formatPopupTemplateReturnsField(r4), this._formatPopupTemplateRGBField(r4)), r4;
  }
  _formatPopupTemplateReturnsField(e4) {
    var _a;
    const r4 = this.fieldsIndex.get("RETURNS");
    if (!r4) return;
    const t3 = (_a = e4.fieldInfos) == null ? void 0 : _a.find((e5) => e5.fieldName === r4.name);
    if (!t3) return;
    const o2 = new i({ name: "pcl-returns-decoded", title: r4.alias || r4.name, expression: `
        var returnValue = $feature.${r4.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      ` });
    e4.expressionInfos = [...e4.expressionInfos || [], o2], t3.fieldName = "expression/pcl-returns-decoded";
  }
  _formatPopupTemplateRGBField(e4) {
    var _a;
    const r4 = this.fieldsIndex.get("RGB");
    if (!r4) return;
    const t3 = (_a = e4.fieldInfos) == null ? void 0 : _a.find((e5) => e5.fieldName === r4.name);
    if (!t3) return;
    const o2 = new i({ name: "pcl-rgb-decoded", title: r4.alias || r4.name, expression: `
        var rgb = $feature.${r4.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      ` });
    e4.expressionInfos = [...e4.expressionInfos || [], o2], t3.fieldName = "expression/pcl-rgb-decoded";
  }
  async queryCachedStatistics(e4, r4) {
    var _a;
    if (await this.load(r4), !this.attributeStorageInfo) throw new s("scenelayer:no-cached-statistics", "Cached statistics are not available for this layer");
    const i5 = this.fieldsIndex.get(e4);
    if (!i5) throw new s("pointcloudlayer:field-unexisting", `Field '${e4}' does not exist on the layer`);
    for (const o2 of this.attributeStorageInfo) if (o2.name === i5.name) {
      const e5 = V(((_a = this.parsedUrl) == null ? void 0 : _a.path) ?? "", `./statistics/${o2.key}`);
      return P(e5, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: r4 ? r4.signal : null }).then((e6) => e6.data);
    }
    throw new s("pointcloudlayer:no-cached-statistics", "Cached statistics for this attribute are not available");
  }
  async saveAs(e4, r4) {
    return this._debouncedSaveOperations(V2.SAVE_AS, { ...r4, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" }, e4);
  }
  async save() {
    const e4 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "point-cloud" };
    return this._debouncedSaveOperations(V2.SAVE, e4);
  }
  validateLayer(e4) {
    if (e4.layerType && "PointCloud" !== e4.layerType) throw new s("pointcloudlayer:layer-type-not-supported", "PointCloudLayer does not support this layer type", { layerType: e4.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
    if (this.version.major > 2) throw new s("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x-2.x" });
  }
  hasCachedStatistics(e4) {
    return null != this.attributeStorageInfo && this.attributeStorageInfo.some((r4) => r4.name === e4);
  }
  _getTypeKeywords() {
    return ["PointCloud"];
  }
  _validateElevationInfo(e4) {
    $(n.getLogger(this), Z("Point cloud layers", "absolute-height", e4)), $(n.getLogger(this), w("Point cloud layers", e4));
  }
};
r([m({ type: ["PointCloudLayer"] })], V3.prototype, "operationalLayerType", void 0), r([m(l)], V3.prototype, "popupEnabled", void 0), r([m({ type: q, json: { name: "popupInfo", write: true } })], V3.prototype, "popupTemplate", void 0), r([m({ readOnly: true, json: { read: false } })], V3.prototype, "defaultPopupTemplate", null), r([m({ readOnly: true, json: { write: false, read: false, origins: { "web-document": { write: false, read: false } } } })], V3.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], V3.prototype, "listMode", void 0), r([m({ types: [e3], json: { origins: { service: { read: { source: "filters" } } }, name: "layerDefinition.filters", write: true } })], V3.prototype, "filters", void 0), r([m({ type: [y] })], V3.prototype, "fields", void 0), r([m(O.fieldsIndex)], V3.prototype, "fieldsIndex", void 0), r([o("service", "fields", ["fields", "attributeStorageInfo"])], V3.prototype, "readServiceFields", null), r([m(O.outFields)], V3.prototype, "outFields", void 0), r([m({ readOnly: true })], V3.prototype, "attributeStorageInfo", void 0), r([m(c)], V3.prototype, "elevationInfo", null), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], V3.prototype, "path", void 0), r([m(d)], V3.prototype, "legendEnabled", void 0), r([m({ types: i4, json: { origins: { service: { read: { source: "drawingInfo.renderer" } } }, name: "layerDefinition.drawingInfo.renderer", write: { target: { "layerDefinition.drawingInfo.renderer": { types: i4 }, "layerDefinition.drawingInfo.transparency": { type: Number } } } } })], V3.prototype, "renderer", void 0), r([r2("renderer")], V3.prototype, "writeRenderer", null), r([m({ json: { read: false }, readOnly: true })], V3.prototype, "type", void 0), V3 = r([a2("esri.layers.PointCloudLayer")], V3);
var U = V3;
export {
  U as default
};
//# sourceMappingURL=PointCloudLayer-XKWQYQB2.js.map
