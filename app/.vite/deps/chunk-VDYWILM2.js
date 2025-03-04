import {
  F
} from "./chunk-QVL6U5IE.js";
import {
  p as p2
} from "./chunk-R5QEGUQL.js";
import {
  c as c3
} from "./chunk-6WVUJOLD.js";
import {
  p
} from "./chunk-YQHLNRT3.js";
import {
  c as c4
} from "./chunk-G7HNCC5G.js";
import {
  i
} from "./chunk-D4RMC5GM.js";
import {
  a as a3
} from "./chunk-BWQFRI3E.js";
import {
  C,
  a2 as a4
} from "./chunk-F23MXZYK.js";
import {
  m as m3,
  u
} from "./chunk-J6MQFQDT.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import {
  p as p3
} from "./chunk-TNYXYQXK.js";
import {
  c as c2,
  oe
} from "./chunk-3GIIPEHS.js";
import {
  S
} from "./chunk-JLW377TH.js";
import {
  b
} from "./chunk-AI2O2GKK.js";
import {
  R,
  c
} from "./chunk-4NGIUHKX.js";
import {
  y as y2
} from "./chunk-FF44HCOD.js";
import {
  f
} from "./chunk-D4CSBMND.js";
import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  S as S2
} from "./chunk-IPFYNOOY.js";
import {
  g as g2
} from "./chunk-6REABBOQ.js";
import {
  r as r3
} from "./chunk-STBNLAGT.js";
import {
  y
} from "./chunk-XCRRZPKE.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  w as w2
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s as s3
} from "./chunk-BDBI2KVA.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  v
} from "./chunk-F7TCEOHX.js";
import {
  e,
  m,
  n2 as n3
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  h,
  s,
  w,
  x
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  t
} from "./chunk-STW6HRXO.js";
import {
  a,
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/support/Sublayer.js
var H;
function W(e3) {
  return "esriSMS" === (e3 == null ? void 0 : e3.type);
}
function X(e3, r4, t2) {
  var _a;
  const i3 = this.originIdOf(r4) >= n3(t2.origin);
  return { ignoreOrigin: true, allowNull: i3, enabled: !!t2 && ("map-image" === ((_a = t2.layer) == null ? void 0 : _a.type) && (t2.writeSublayerStructure || i3)) };
}
function Y(e3, r4, t2) {
  var _a;
  return { enabled: !!t2 && ("tile" === ((_a = t2.layer) == null ? void 0 : _a.type) && (t2.origin && this.originIdOf(r4) >= n3(t2.origin) || this._isOverridden(r4))) };
}
function Z2(e3, r4, t2) {
  return { ignoreOrigin: true, enabled: t2 && t2.writeSublayerStructure || false };
}
function ee(e3, r4, t2) {
  return { ignoreOrigin: true, enabled: !!(t2 == null ? void 0 : t2.writeSublayerStructure) && this.originIdOf(r4) > e.SERVICE };
}
function re(e3, r4, t2) {
  return { ignoreOrigin: true, enabled: !!t2 && (t2.writeSublayerStructure || this.originIdOf(r4) >= n3(t2.origin)) };
}
var te = 0;
var ie = /* @__PURE__ */ new Set(["layer", "parent", "loaded", "loadStatus", "loadError", "loadWarnings"]);
var oe2 = H = class extends S(n2.IdentifiableMixin(m2)) {
  constructor(e3) {
    super(e3), this.capabilities = void 0, this.maxScaleRange = { minScale: 0, maxScale: 0 }, this.fields = null, this.fullExtent = null, this.geometryType = null, this.globalIdField = null, this.isTable = false, this.legendEnabled = true, this.objectIdField = null, this.parent = null, this.popupEnabled = true, this.popupTemplate = null, this.relationships = null, this.sourceJSON = null, this.spatialReference = null, this.title = null, this.typeIdField = null, this.type = "sublayer", this.types = null, this._lastParsedUrl = null;
  }
  async load(e3) {
    return this.addResolvingPromise((async () => {
      const { layer: r4, url: i3 } = this;
      if (!r4 && !i3) throw new s2("sublayer:missing-layer", "Sublayer can't be loaded without being part of a layer", { sublayer: this });
      const s4 = r4 ? await r4.fetchSublayerInfo(this, e3) : (await P(i3, { responseType: "json", query: { f: "json" }, ...e3 })).data;
      s4 && (this.sourceJSON = s4, this.read({ layerDefinition: s4 }, { origin: "service", layer: r4, url: f(i3) }));
    })()), this;
  }
  readCapabilities(e3, r4) {
    r4 = r4.layerDefinition || r4;
    const { attachment: t2, operations: { supportsQuery: i3, supportsQueryAttachments: o3 }, query: { supportsFormatPBF: s4, supportsOrderBy: a5, supportsPagination: l }, data: { supportsAttachment: n5 }, queryRelated: p4 } = c3(r4, this.url);
    return { attachment: { supportsOrderByFields: (t2 == null ? void 0 : t2.supportsOrderByFields) ?? false, supportsResize: (t2 == null ? void 0 : t2.supportsResize) ?? false }, exportMap: { supportsModification: !!r4.canModifyLayer }, operations: { supportsQuery: i3, supportsQueryAttachments: o3 }, data: { supportsAttachment: n5 }, query: { supportsFormatPBF: s4, supportsOrderBy: a5, supportsPagination: l }, queryRelated: p4 };
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set definitionExpression(e3) {
    this._setAndNotifyLayer("definitionExpression", e3);
  }
  get effectiveScaleRange() {
    const { minScale: e3, maxScale: r4 } = this;
    return { minScale: e3, maxScale: r4 };
  }
  readMaxScaleRange(e3, r4) {
    return { minScale: (r4 = r4.layerDefinition || r4).minScale ?? 0, maxScale: r4.maxScale ?? 0 };
  }
  get fieldsIndex() {
    return new Z(this.fields || []);
  }
  set floorInfo(e3) {
    this._setAndNotifyLayer("floorInfo", e3);
  }
  readGlobalIdFieldFromService(e3, r4) {
    if ((r4 = r4.layerDefinition || r4).globalIdField) return r4.globalIdField;
    if (r4.fields) {
      for (const t2 of r4.fields) if ("esriFieldTypeGlobalID" === t2.type) return t2.name;
    }
  }
  get id() {
    const e3 = this._get("id");
    return e3 ?? te++;
  }
  set id(e3) {
    var _a, _b, _c;
    this._get("id") !== e3 && (false !== ((_c = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.exportMap) == null ? void 0 : _c.supportsDynamicLayers) ? this._set("id", e3) : this._logLockedError("id", "capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"));
  }
  readIsTable(e3, r4) {
    return "Table" === r4.type;
  }
  set labelingInfo(e3) {
    this._setAndNotifyLayer("labelingInfo", e3);
  }
  writeLabelingInfo(e3, r4, t2, i3) {
    e3 && e3.length && (r4.layerDefinition = { drawingInfo: { labelingInfo: e3.map((e4) => e4.write({}, i3)) } });
  }
  set labelsVisible(e3) {
    this._setAndNotifyLayer("labelsVisible", e3);
  }
  set layer(e3) {
    var _a;
    this._set("layer", e3), (_a = this.sublayers) == null ? void 0 : _a.forEach((r4) => r4.layer = e3);
  }
  set listMode(e3) {
    this._set("listMode", e3);
  }
  set minScale(e3) {
    this._setAndNotifyLayer("minScale", e3);
  }
  readMinScale(e3, r4) {
    var _a;
    return r4.minScale || ((_a = r4.layerDefinition) == null ? void 0 : _a.minScale) || 0;
  }
  set maxScale(e3) {
    this._setAndNotifyLayer("maxScale", e3);
  }
  readMaxScale(e3, r4) {
    var _a;
    return r4.maxScale || ((_a = r4.layerDefinition) == null ? void 0 : _a.maxScale) || 0;
  }
  readObjectIdFieldFromService(e3, r4) {
    var _a;
    if ((r4 = r4.layerDefinition || r4).objectIdField) return r4.objectIdField;
    const t2 = (_a = r4.fields) == null ? void 0 : _a.find((e4) => "esriFieldTypeOID" === e4.type);
    return t2 == null ? void 0 : t2.name;
  }
  set opacity(e3) {
    this._setAndNotifyLayer("opacity", e3);
  }
  readOpacity(e3, r4) {
    var _a;
    const { layerDefinition: t2 } = r4;
    return 1 - 0.01 * ((t2 == null ? void 0 : t2.transparency) ?? ((_a = t2 == null ? void 0 : t2.drawingInfo) == null ? void 0 : _a.transparency) ?? 0);
  }
  writeOpacity(e3, r4, t2, i3) {
    r4.layerDefinition = { drawingInfo: { transparency: 100 - 100 * e3 } };
  }
  set orderBy(e3) {
    this._setAndNotifyLayer("orderBy", e3);
  }
  writeParent(e3, r4) {
    this.parent && this.parent !== this.layer ? r4.parentLayerId = s(this.parent.id) : r4.parentLayerId = -1;
  }
  get queryTask() {
    var _a;
    if (!this.layer) return null;
    const { capabilities: e3, fieldsIndex: r4, layer: t2, url: i3 } = this, { spatialReference: o3 } = t2, s4 = "gdbVersion" in t2 ? t2.gdbVersion : void 0, a5 = has("featurelayer-pbf") && (e3 == null ? void 0 : e3.query.supportsFormatPBF);
    return new F({ fieldsIndex: r4, gdbVersion: s4, pbfSupported: a5, queryAttachmentsSupported: ((_a = e3 == null ? void 0 : e3.operations) == null ? void 0 : _a.supportsQueryAttachments) ?? false, sourceSpatialReference: o3, url: i3 });
  }
  set renderer(e3) {
    if (g2(e3, this.fieldsIndex), e3) {
      for (const r4 of e3.symbols) if (S2(r4)) {
        n.getLogger(this).warn("Sublayer renderer should use 2D symbols");
        break;
      }
    }
    this._setAndNotifyLayer("renderer", e3);
  }
  get source() {
    return this._get("source") || new c({ mapLayerId: this.id });
  }
  set source(e3) {
    this._setAndNotifyLayer("source", e3);
  }
  set sublayers(e3) {
    this._handleSublayersChange(e3, this._get("sublayers")), this._set("sublayers", e3);
  }
  castSublayers(e3) {
    return w(V.ofType(H), e3);
  }
  writeSublayers(e3, r4, t2) {
    var _a;
    ((_a = this.sublayers) == null ? void 0 : _a.length) && (r4[t2] = this.sublayers.map((e4) => e4.id).toArray().reverse());
  }
  readTitle(e3, r4) {
    var _a;
    return ((_a = r4.layerDefinition) == null ? void 0 : _a.name) ?? r4.name;
  }
  readTypeIdField(e3, r4) {
    let t2 = (r4 = r4.layerDefinition || r4).typeIdField;
    if (t2 && r4.fields) {
      t2 = t2.toLowerCase();
      const e4 = r4.fields.find((e5) => e5.name.toLowerCase() === t2);
      e4 && (t2 = e4.name);
    }
    return t2;
  }
  get url() {
    var _a;
    const e3 = ((_a = this.layer) == null ? void 0 : _a.parsedUrl) ?? this._lastParsedUrl, r4 = this.source;
    if (!e3) return null;
    if (this._lastParsedUrl = e3, "map-layer" === (r4 == null ? void 0 : r4.type)) return `${e3.path}/${r4.mapLayerId}`;
    const t2 = { layer: JSON.stringify({ source: this.source }) };
    return `${e3.path}/dynamicLayer?${v(t2)}`;
  }
  set url(e3) {
    this._overrideIfSome("url", e3);
  }
  set visible(e3) {
    this._setAndNotifyLayer("visible", e3);
  }
  writeVisible(e3, r4, t2, i3) {
    r4[t2] = this.getAtOrigin("defaultVisibility", "service") || e3;
  }
  clone() {
    const { store: e3 } = t(this), r4 = new H();
    return t(r4).store = e3.clone(ie), this.commitProperty("url"), r4._lastParsedUrl = this._lastParsedUrl, r4;
  }
  createPopupTemplate(e3) {
    return p3(this, e3);
  }
  createQuery() {
    return new b({ returnGeometry: true, where: this.definitionExpression || "1=1" });
  }
  async createFeatureLayer() {
    var _a;
    if (this.hasOwnProperty("sublayers")) return null;
    const e3 = (await import("./FeatureLayer-JWLNPFWJ.js")).default, { layer: r4, url: t2 } = this;
    let i3;
    if (t2 && this.originIdOf("url") > e.SERVICE) i3 = new e3({ url: t2 });
    else {
      if (!(r4 == null ? void 0 : r4.parsedUrl)) throw new s2("createFeatureLayer:missing-information", "Cannot create a FeatureLayer without a url or a parent layer");
      {
        const t3 = r4.parsedUrl;
        i3 = new e3({ url: t3.path }), t3 && this.source && ("map-layer" === this.source.type ? i3.layerId = this.source.mapLayerId : i3.dynamicDataSource = this.source);
      }
    }
    return null != (r4 == null ? void 0 : r4.refreshInterval) && (i3.refreshInterval = r4.refreshInterval), this.definitionExpression && (i3.definitionExpression = this.definitionExpression), this.floorInfo && (i3.floorInfo = a(this.floorInfo)), this.originIdOf("labelingInfo") > e.SERVICE && (i3.labelingInfo = a(this.labelingInfo)), this.originIdOf("labelsVisible") > e.DEFAULTS && (i3.labelsVisible = this.labelsVisible), this.originIdOf("legendEnabled") > e.DEFAULTS && (i3.legendEnabled = this.legendEnabled), this.originIdOf("visible") > e.DEFAULTS && (i3.visible = this.visible), this.originIdOf("minScale") > e.DEFAULTS && (i3.minScale = this.minScale), this.originIdOf("maxScale") > e.DEFAULTS && (i3.maxScale = this.maxScale), this.originIdOf("opacity") > e.DEFAULTS && (i3.opacity = this.opacity), this.originIdOf("popupTemplate") > e.DEFAULTS && (i3.popupTemplate = a(this.popupTemplate)), this.originIdOf("renderer") > e.SERVICE && (i3.renderer = a(this.renderer)), "data-layer" === ((_a = this.source) == null ? void 0 : _a.type) && (i3.dynamicDataSource = this.source.clone()), this.originIdOf("title") > e.DEFAULTS && (i3.title = this.title), "map-image" === (r4 == null ? void 0 : r4.type) && r4.originIdOf("customParameters") > e.DEFAULTS && (i3.customParameters = r4.customParameters), "tile" === (r4 == null ? void 0 : r4.type) && r4.originIdOf("customParameters") > e.DEFAULTS && (i3.customParameters = r4.customParameters), i3;
  }
  getField(e3) {
    return this.fieldsIndex.get(e3);
  }
  getFeatureType(e3) {
    return oe(this.types, this.typeIdField, e3);
  }
  getFieldDomain(e3, r4) {
    const t2 = r4 == null ? void 0 : r4.feature, i3 = this.getFeatureType(t2);
    if (i3) {
      const r5 = i3.domains && i3.domains[e3];
      if (r5 && "inherited" !== r5.type) return r5;
    }
    return this._getLayerDomain(e3);
  }
  async queryAttachments(e3, r4) {
    var _a, _b, _c, _d;
    await this.load(), e3 = c2.from(e3);
    const t2 = this.capabilities;
    if (!((_a = t2 == null ? void 0 : t2.data) == null ? void 0 : _a.supportsAttachment)) throw new s2("queryAttachments:not-supported", "this layer doesn't support attachments");
    const { attachmentTypes: i3, objectIds: s4, globalIds: a5, num: l, size: n5, start: p4, where: u2 } = e3;
    if (!((_b = t2 == null ? void 0 : t2.operations) == null ? void 0 : _b.supportsQueryAttachments)) {
      if ((i3 == null ? void 0 : i3.length) > 0 || (a5 == null ? void 0 : a5.length) > 0 || (n5 == null ? void 0 : n5.length) > 0 || l || p4 || u2) throw new s2("queryAttachments:option-not-supported", "when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported", e3);
    }
    if (!((s4 == null ? void 0 : s4.length) || (a5 == null ? void 0 : a5.length) || u2)) throw new s2("queryAttachments:invalid-query", "'objectIds', 'globalIds', or 'where' are required to perform attachment query", e3);
    return !((_c = t2 == null ? void 0 : t2.attachment) == null ? void 0 : _c.supportsOrderByFields) && ((_d = e3.orderByFields) == null ? void 0 : _d.length) && ((e3 = e3.clone()).orderByFields = null), this.queryTask.executeAttachmentQuery(e3, r4);
  }
  async queryFeatureCount(e3 = this.createQuery(), r4) {
    var _a, _b;
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new s2("queryFeatureCount:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new s2("queryFeatureCount:not-supported", "this layer has no url.");
    const t2 = (_a = this.layer) == null ? void 0 : _a.apiKey;
    return await this.queryTask.executeForCount(e3, { ...r4, query: { ...(_b = this.layer) == null ? void 0 : _b.customParameters, token: t2 } });
  }
  async queryFeatures(e3 = this.createQuery(), r4) {
    var _a, _b;
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new s2("queryFeatures:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new s2("queryFeatures:not-supported", "this layer has no url.");
    const t2 = await this.queryTask.execute(e3, { ...r4, query: { ...(_a = this.layer) == null ? void 0 : _a.customParameters, token: (_b = this.layer) == null ? void 0 : _b.apiKey } });
    if (t2 == null ? void 0 : t2.features) for (const i3 of t2.features) i3.sourceLayer = this;
    return t2;
  }
  async queryObjectIds(e3 = this.createQuery(), r4) {
    var _a, _b;
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new s2("queryObjectIds:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new s2("queryObjectIds:not-supported", "this layer has no url.");
    const t2 = (_a = this.layer) == null ? void 0 : _a.apiKey;
    return await this.queryTask.executeForIds(e3, { ...r4, query: { ...(_b = this.layer) == null ? void 0 : _b.customParameters, token: t2 } });
  }
  async queryRelatedFeatures(e3, r4) {
    var _a, _b;
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new s2("queryRelatedFeatures:not-supported", "this layer doesn't support queries.");
    if (!this.url) throw new s2("queryRelatedFeatures:not-supported", "this layer has no url.");
    const t2 = (_a = this.layer) == null ? void 0 : _a.apiKey;
    return await this.queryTask.executeRelationshipQuery(e3, { ...r4, query: { ...(_b = this.layer) == null ? void 0 : _b.customParameters, token: t2 } });
  }
  async queryRelatedFeaturesCount(e3, r4) {
    var _a, _b;
    if (await this.load(), !this.capabilities.operations.supportsQuery) throw new s2("queryRelatedFeaturesCount:not-supported", "this layer doesn't support queries.");
    if (!this.capabilities.queryRelated.supportsCount) throw new s2("queryRelatedFeaturesCount:not-supported", "this layer doesn't support query related counts.");
    if (!this.url) throw new s2("queryRelatedFeaturesCount:not-supported", "this layer has no url.");
    const t2 = (_a = this.layer) == null ? void 0 : _a.apiKey;
    return await this.queryTask.executeRelationshipQueryForCount(e3, { ...r4, query: { ...(_b = this.layer) == null ? void 0 : _b.customParameters, token: t2 } });
  }
  toExportImageJSON(e3) {
    var _a, _b, _c, _d, _e, _f;
    const r4 = { id: this.id, source: ((_a = this.source) == null ? void 0 : _a.toJSON()) || { mapLayerId: this.id, type: "mapLayer" } }, t2 = r3(e3, this.definitionExpression);
    null != t2 && (r4.definitionExpression = t2);
    const i3 = ["renderer", "labelingInfo", "opacity", "labelsVisible"].reduce((e4, r5) => (e4[r5] = this.originIdOf(r5), e4), {}), o3 = Object.keys(i3).some((e4) => i3[e4] > e.SERVICE);
    if (o3) {
      const e4 = r4.drawingInfo = {};
      if (i3.renderer > e.SERVICE && (e4.renderer = this.renderer ? this.renderer.toJSON() : null), i3.labelsVisible > e.SERVICE && (e4.showLabels = this.labelsVisible), this.labelsVisible && i3.labelingInfo > e.SERVICE) if (this.labelingInfo) {
        !this.loaded && ((_b = this.labelingInfo) == null ? void 0 : _b.some((e5) => !e5.labelPlacement)) && n.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`, { sublayer: this });
        let r5 = this.labelingInfo;
        null != this.geometryType && (r5 = a4(this.labelingInfo, y.toJSON(this.geometryType))), e4.showLabels = true, e4.labelingInfo = r5.filter((e5) => e5.labelPlacement).map((e5) => e5.toJSON({ origin: "service", layer: this.layer }));
      } else e4.showLabels = false;
      i3.opacity > e.SERVICE && (e4.transparency = 100 - 100 * this.opacity), this._assignDefaultSymbolColors(e4.renderer);
    }
    return (((_e = (_d = (_c = this.layer) == null ? void 0 : _c.capabilities) == null ? void 0 : _d.exportMap) == null ? void 0 : _e.supportsSublayerOrderBy) ?? false) && this.originIdOf("orderBy") > e.SERVICE && (r4.orderBy = ((_f = this.orderBy) == null ? void 0 : _f.map((e4) => e4.toJSON())) ?? null), r4;
  }
  _assignDefaultSymbolColors(e3) {
    this._forEachSimpleMarkerSymbols(e3, (e4) => {
      var _a;
      e4.color || "esriSMSX" !== e4.style && "esriSMSCross" !== e4.style || (((_a = e4.outline) == null ? void 0 : _a.color) ? e4.color = e4.outline.color : e4.color = [0, 0, 0, 0]);
    });
  }
  _forEachSimpleMarkerSymbols(e3, r4) {
    if (e3) {
      const t2 = ("uniqueValueInfos" in e3 ? e3.uniqueValueInfos : "classBreakInfos" in e3 ? e3.classBreakInfos : null) ?? [];
      for (const e4 of t2) W(e4.symbol) && r4(e4.symbol);
      "symbol" in e3 && W(e3.symbol) && r4(e3.symbol), "defaultSymbol" in e3 && W(e3.defaultSymbol) && r4(e3.defaultSymbol);
    }
  }
  _setAndNotifyLayer(e3, r4) {
    var _a, _b, _c, _d;
    const t2 = this.layer, i3 = this._get(e3);
    let o3, s4;
    switch (e3) {
      case "definitionExpression":
      case "floorInfo":
        o3 = "supportsSublayerDefinitionExpression";
        break;
      case "minScale":
      case "maxScale":
      case "visible":
        o3 = "supportsSublayerVisibility";
        break;
      case "labelingInfo":
      case "labelsVisible":
      case "opacity":
      case "renderer":
      case "source":
        o3 = "supportsDynamicLayers", s4 = "supportsModification";
        break;
      case "orderBy":
        o3 = "supportsSublayerOrderBy", s4 = "supportsModification";
    }
    const a5 = t(this).getDefaultOrigin();
    if ("service" !== a5) {
      if (o3 && false === ((_c = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.exportMap) == null ? void 0 : _c[o3])) return void this._logLockedError(e3, `capability not available 'layer.capabilities.exportMap.${o3}'`);
      if (s4 && false === ((_d = this.capabilities) == null ? void 0 : _d.exportMap[s4])) return void this._logLockedError(e3, `capability not available 'capabilities.exportMap.${s4}'`);
    }
    "source" !== e3 || "not-loaded" === this.loadStatus ? (this._set(e3, r4), "service" !== a5 && i3 !== r4 && t2 && t2.emit && t2.emit("sublayer-update", { propertyName: e3, target: this })) : this._logLockedError(e3, "'source' can't be changed after calling sublayer.load()");
  }
  _handleSublayersChange(e3, r4) {
    r4 && (r4.forEach((e4) => {
      e4.parent = null, e4.layer = null;
    }), this.removeAllHandles()), e3 && (e3.forEach((e4) => {
      e4.parent = this, e4.layer = this.layer;
    }), this.addHandles([e3.on("after-add", ({ item: e4 }) => {
      e4.parent = this, e4.layer = this.layer;
    }), e3.on("after-remove", ({ item: e4 }) => {
      e4.parent = null, e4.layer = null;
    }), e3.on("before-changes", (e4) => {
      var _a, _b, _c;
      (((_c = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.exportMap) == null ? void 0 : _c.supportsSublayersChanges) ?? 1) || (n.getLogger(this).error(new s2("sublayer:sublayers-non-modifiable", "Sublayer can't be added, moved, or removed from the layer's sublayers", { sublayer: this, layer: this.layer })), e4.preventDefault());
    })]));
  }
  _logLockedError(e3, r4) {
    const { layer: t2, declaredClass: i3 } = this;
    n.getLogger(i3).error(new s2("sublayer:locked", `Property '${String(e3)}' can't be changed on Sublayer from the layer '${t2 == null ? void 0 : t2.id}'`, { reason: r4, sublayer: this, layer: t2 }));
  }
  _getLayerDomain(e3) {
    var _a;
    return ((_a = this.fieldsIndex.get(e3)) == null ? void 0 : _a.domain) ?? null;
  }
};
oe2.test = { isMapImageLayerOverridePolicy: (e3) => e3 === ee || e3 === Z2 || e3 === X, isTileImageLayerOverridePolicy: (e3) => e3 === Y }, r([m({ readOnly: true })], oe2.prototype, "capabilities", void 0), r([o("service", "capabilities", ["layerDefinition.canModifyLayer", "layerDefinition.capabilities"])], oe2.prototype, "readCapabilities", null), r([m()], oe2.prototype, "defaultPopupTemplate", null), r([m({ type: String, value: null, json: { name: "layerDefinition.definitionExpression", write: { allowNull: true, overridePolicy: X } } })], oe2.prototype, "definitionExpression", null), r([m({ readOnly: true })], oe2.prototype, "effectiveScaleRange", null), r([o("service", "maxScaleRange", ["minScale", "maxScale"])], oe2.prototype, "readMaxScaleRange", null), r([m({ type: [y2], json: { origins: { service: { read: { source: "layerDefinition.fields" } } } } })], oe2.prototype, "fields", void 0), r([m({ readOnly: true })], oe2.prototype, "fieldsIndex", null), r([m({ type: p, value: null, json: { name: "layerDefinition.floorInfo", read: { source: "layerDefinition.floorInfo" }, write: { target: "layerDefinition.floorInfo", overridePolicy: X }, origins: { "web-scene": { read: false, write: false } } } })], oe2.prototype, "floorInfo", null), r([m({ type: w2, json: { read: { source: "layerDefinition.extent" } } })], oe2.prototype, "fullExtent", void 0), r([m({ type: y.apiValues, json: { origins: { service: { name: "layerDefinition.geometryType", read: { reader: y.read } } } } })], oe2.prototype, "geometryType", void 0), r([m({ type: String })], oe2.prototype, "globalIdField", void 0), r([o("service", "globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], oe2.prototype, "readGlobalIdFieldFromService", null), r([m({ type: x, json: { write: { ignoreOrigin: true } } })], oe2.prototype, "id", null), r([m({ readOnly: true })], oe2.prototype, "isTable", void 0), r([o("service", "isTable", ["type"])], oe2.prototype, "readIsTable", null), r([m({ value: null, type: [C], json: { read: { source: "layerDefinition.drawingInfo.labelingInfo" }, write: { target: "layerDefinition.drawingInfo.labelingInfo", overridePolicy: ee } } })], oe2.prototype, "labelingInfo", null), r([r2("labelingInfo")], oe2.prototype, "writeLabelingInfo", null), r([m({ type: Boolean, value: true, json: { read: { source: "layerDefinition.drawingInfo.showLabels" }, write: { target: "layerDefinition.drawingInfo.showLabels", overridePolicy: Z2 } } })], oe2.prototype, "labelsVisible", null), r([m({ value: null })], oe2.prototype, "layer", null), r([m({ type: String, json: { write: { overridePolicy: Y } } })], oe2.prototype, "layerItemId", void 0), r([m({ type: Boolean, value: true, json: { origins: { service: { read: { enabled: false } } }, read: { source: "showLegend" }, write: { target: "showLegend", overridePolicy: re } } })], oe2.prototype, "legendEnabled", void 0), r([m({ type: ["show", "hide", "hide-children"], value: "show", json: { read: false, write: false, origins: { "web-scene": { read: true, write: true } } } })], oe2.prototype, "listMode", null), r([m({ type: Number, value: 0, json: { write: { overridePolicy: Z2 } } })], oe2.prototype, "minScale", null), r([o("minScale", ["minScale", "layerDefinition.minScale"])], oe2.prototype, "readMinScale", null), r([m({ type: Number, value: 0, json: { write: { overridePolicy: Z2 } } })], oe2.prototype, "maxScale", null), r([o("maxScale", ["maxScale", "layerDefinition.maxScale"])], oe2.prototype, "readMaxScale", null), r([m()], oe2.prototype, "objectIdField", void 0), r([o("service", "objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], oe2.prototype, "readObjectIdFieldFromService", null), r([m({ type: Number, value: 1, json: { write: { target: "layerDefinition.drawingInfo.transparency", overridePolicy: Z2 } } })], oe2.prototype, "opacity", null), r([o("opacity", ["layerDefinition.drawingInfo.transparency", "layerDefinition.transparency"])], oe2.prototype, "readOpacity", null), r([r2("opacity")], oe2.prototype, "writeOpacity", null), r([m({ value: null, type: [a3], json: { name: "layerDefinition.orderBy", read: { reader: i } } })], oe2.prototype, "orderBy", null), r([m({ json: { type: x, write: { target: "parentLayerId", writerEnsuresNonNull: true, overridePolicy: Z2 } } })], oe2.prototype, "parent", void 0), r([r2("parent")], oe2.prototype, "writeParent", null), r([m({ type: Boolean, value: true, json: { read: { source: "disablePopup", reader: (e3, r4) => !r4.disablePopup }, write: { target: "disablePopup", overridePolicy: re, writer(e3, r4, t2) {
  r4[t2] = !e3;
} } } })], oe2.prototype, "popupEnabled", void 0), r([m({ type: q, json: { read: { source: "popupInfo" }, write: { target: "popupInfo", overridePolicy: re } } })], oe2.prototype, "popupTemplate", void 0), r([m({ readOnly: true })], oe2.prototype, "queryTask", null), r([m({ type: [p2], readOnly: true, json: { origins: { service: { read: { source: "layerDefinition.relationships" } } } } })], oe2.prototype, "relationships", void 0), r([m({ types: m3, value: null, json: { name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: ee }, origins: { "web-scene": { types: u, name: "layerDefinition.drawingInfo.renderer", write: { overridePolicy: ee } } } } })], oe2.prototype, "renderer", null), r([m({ types: { key: "type", base: null, typeMap: { "data-layer": R, "map-layer": c } }, cast(e3) {
  if (e3) {
    if ("mapLayerId" in e3) return h(c, e3);
    if ("dataSource" in e3) return h(R, e3);
  }
  return e3;
}, json: { name: "layerDefinition.source", write: { overridePolicy: Z2 } } })], oe2.prototype, "source", null), r([m()], oe2.prototype, "sourceJSON", void 0), r([m({ type: g, json: { origins: { service: { read: { source: "layerDefinition.extent.spatialReference" } } } } })], oe2.prototype, "spatialReference", void 0), r([m({ value: null, json: { type: [x], write: { target: "subLayerIds", allowNull: true, overridePolicy: Z2 } } })], oe2.prototype, "sublayers", null), r([s3("sublayers")], oe2.prototype, "castSublayers", null), r([r2("sublayers")], oe2.prototype, "writeSublayers", null), r([m({ type: String, json: { name: "name", write: { overridePolicy: re } } })], oe2.prototype, "title", void 0), r([o("service", "title", ["name", "layerDefinition.name"])], oe2.prototype, "readTitle", null), r([m({ type: String })], oe2.prototype, "typeIdField", void 0), r([m({ json: { read: false }, readOnly: true, value: "sublayer" })], oe2.prototype, "type", void 0), r([o("typeIdField", ["layerDefinition.typeIdField"])], oe2.prototype, "readTypeIdField", null), r([m({ type: [c4], json: { origins: { service: { read: { source: "layerDefinition.types" } } } } })], oe2.prototype, "types", void 0), r([m({ type: String, json: { name: "layerUrl", write: { overridePolicy: Y } } })], oe2.prototype, "url", null), r([m({ type: Boolean, value: true, json: { read: { source: "defaultVisibility" }, write: { target: "defaultVisibility", overridePolicy: Z2 } } })], oe2.prototype, "visible", null), r([r2("visible")], oe2.prototype, "writeVisible", null), oe2 = H = r([a2("esri.layers.support.Sublayer")], oe2);
var se = oe2;

// node_modules/@arcgis/core/layers/support/sublayerUtils.js
function e2(r4, e3, i3) {
  const o3 = e3.flatten(({ sublayers: r5 }) => r5).length;
  if (o3 !== r4.length) return true;
  return !!r4.some((r5) => r5.originIdOf("minScale") > i3 || r5.originIdOf("maxScale") > i3 || r5.originIdOf("renderer") > i3 || r5.originIdOf("labelingInfo") > i3 || r5.originIdOf("opacity") > i3 || r5.originIdOf("labelsVisible") > i3 || r5.originIdOf("source") > i3) || !n4(r4, e3);
}
function i2(e3, i3, o3) {
  return !!e3.some((e4) => {
    var _a, _b, _c;
    const i4 = e4.source, n5 = !i4 || "map-layer" === i4.type && i4.mapLayerId === e4.id && (null == i4.gdbVersion || i4.gdbVersion === o3);
    e4.commitProperty("renderer"), e4.commitProperty("labelingInfo"), e4.commitProperty("opacity"), e4.commitProperty("labelsVisible"), e4.commitProperty("orderBy");
    const t2 = ((_c = (_b = (_a = e4.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.exportMap) == null ? void 0 : _c.supportsSublayerOrderBy) ?? false;
    return !n5 || e4.originIdOf("renderer") > e.SERVICE || e4.originIdOf("labelingInfo") > e.SERVICE || e4.originIdOf("opacity") > e.SERVICE || e4.originIdOf("labelsVisible") > e.SERVICE || t2 && e4.originIdOf("orderBy") > e.SERVICE;
  }) || !n4(e3, i3);
}
function n4(r4, e3) {
  if (!(r4 == null ? void 0 : r4.length) || null == e3) return true;
  const i3 = e3.slice().reverse().flatten(({ sublayers: r5 }) => r5 && r5.toArray().reverse()).map((r5) => r5.id).toArray();
  if (r4.length > i3.length) return false;
  let n5 = 0;
  const o3 = i3.length;
  for (const { id: t2 } of r4) {
    for (; n5 < o3 && i3[n5] !== t2; ) n5++;
    if (n5 >= o3) return false;
  }
  return true;
}
function o2(r4) {
  return !!r4 && r4.some((r5) => {
    var _a;
    return null != r5.minScale || null != ((_a = r5.layerDefinition) == null ? void 0 : _a.minScale);
  });
}

export {
  se,
  e2 as e,
  i2 as i,
  o2 as o
};
//# sourceMappingURL=chunk-VDYWILM2.js.map
