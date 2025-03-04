import {
  u as u4
} from "./chunk-PEVRDPML.js";
import {
  e as e3
} from "./chunk-4KVDFBS3.js";
import {
  d as d4
} from "./chunk-7FHK22OY.js";
import {
  o as o2
} from "./chunk-4LAB32KQ.js";
import {
  R as R3,
  V as V3
} from "./chunk-44OKV7LZ.js";
import {
  c as c2
} from "./chunk-6WVUJOLD.js";
import {
  c as c3
} from "./chunk-G7HNCC5G.js";
import {
  t as t4
} from "./chunk-QLSJI3DL.js";
import {
  i as i2
} from "./chunk-3VG7BBW5.js";
import {
  c
} from "./chunk-ZWAL4BY6.js";
import {
  a as a6
} from "./chunk-TGJTL3DX.js";
import {
  s as s4
} from "./chunk-27HW4PAJ.js";
import {
  n as n5
} from "./chunk-VL6ABOSV.js";
import {
  p as p4
} from "./chunk-D4RMC5GM.js";
import {
  C as C2,
  n as n6
} from "./chunk-F23MXZYK.js";
import {
  m as m5,
  u as u3
} from "./chunk-J6MQFQDT.js";
import {
  l as l3
} from "./chunk-GCLTWKVB.js";
import {
  d as d5
} from "./chunk-LVOCICBG.js";
import {
  p as p5
} from "./chunk-TNYXYQXK.js";
import {
  e as e2
} from "./chunk-2O2K2GAF.js";
import {
  l as l2
} from "./chunk-LJBNLWJN.js";
import {
  i
} from "./chunk-RKXU25GZ.js";
import {
  A as A2,
  B,
  C,
  D,
  E,
  F as F2,
  H,
  L,
  M,
  N,
  O,
  P as P2,
  R as R2,
  S as S2,
  T as T2,
  Y,
  ae,
  j as j3,
  k as k2,
  oe,
  q as q2,
  te,
  v
} from "./chunk-3GIIPEHS.js";
import {
  t as t3
} from "./chunk-DMXES2BK.js";
import {
  d as d3
} from "./chunk-ONZPKEDE.js";
import {
  F
} from "./chunk-6WASKRTP.js";
import {
  A
} from "./chunk-3S47CK7X.js";
import {
  j as j2
} from "./chunk-7FOAM45I.js";
import {
  t
} from "./chunk-EMADK6RJ.js";
import {
  f as f2
} from "./chunk-FBQYHS7L.js";
import {
  p as p2
} from "./chunk-LGG5FPVD.js";
import {
  t as t2
} from "./chunk-DWXK7D3B.js";
import {
  b as b2
} from "./chunk-EW3YCVZI.js";
import {
  I as I2,
  T,
  b,
  d as d2,
  l,
  p as p3,
  s as s3,
  u as u2
} from "./chunk-WZ7EFR6C.js";
import {
  a as a5
} from "./chunk-CVABZLLM.js";
import {
  S
} from "./chunk-JLW377TH.js";
import {
  p as p6
} from "./chunk-QM4DRRZI.js";
import {
  b as b4
} from "./chunk-AI2O2GKK.js";
import {
  R
} from "./chunk-4NGIUHKX.js";
import {
  b as b3
} from "./chunk-5X74MKXM.js";
import {
  q
} from "./chunk-LCBD3JEK.js";
import {
  x
} from "./chunk-IPFYNOOY.js";
import {
  I as I3,
  g as g3
} from "./chunk-6REABBOQ.js";
import {
  r as r3
} from "./chunk-STBNLAGT.js";
import {
  n as n3
} from "./chunk-ZDVQNOKR.js";
import {
  a as a4
} from "./chunk-WJNMFEXQ.js";
import {
  m as m3
} from "./chunk-XCRRZPKE.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import {
  n as n4
} from "./chunk-K2PILHWE.js";
import {
  m as m4
} from "./chunk-CHL75CEP.js";
import {
  w as w3
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g as g2,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  V as V2,
  n as n2
} from "./chunk-AJSC5XSW.js";
import {
  p
} from "./chunk-7LY6RE4Z.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
import {
  P2 as P,
  d2 as d,
  m2,
  w as w2
} from "./chunk-UFBX3XSC.js";
import {
  I,
  V
} from "./chunk-F7TCEOHX.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a as a3,
  h,
  k,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  e,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/sources/MemorySource.js
var _ = 0;
var T3 = class extends m4.LoadableMixin(p.EsriPromiseMixin(V2)) {
  constructor(e5) {
    super(e5), this._idToClientGraphic = null, this.type = "memory";
  }
  load(e5) {
    const t5 = null != e5 ? e5.signal : null;
    return this.addResolvingPromise(this._startWorker(t5)), Promise.resolve(this);
  }
  destroy() {
    var _a;
    (_a = this._connection) == null ? void 0 : _a.close(), this._connection = null;
  }
  get _workerGeometryType() {
    var _a;
    const e5 = (_a = this.layer) == null ? void 0 : _a.geometryType;
    return e5 ? this._geometryTypeRequiresClientGraphicMapping(e5) ? "polygon" : e5 : null;
  }
  applyEdits(e5) {
    return this.load().then(() => this._applyEdits(e5));
  }
  openPorts() {
    return this.load().then(() => this._connection.openPorts());
  }
  async queryFeatures(e5, t5 = {}) {
    await this.load(t5);
    const r4 = await this._connection.invoke("queryFeatures", e5 ? e5.toJSON() : null, t5);
    t3(e5, this.layer.spatialReference, r4);
    const i3 = d3.fromJSON(r4);
    if (!this._requiresClientGraphicMapping()) return i3;
    const s5 = this.layer.objectIdField;
    for (const o4 of i3.features) {
      const e6 = o4.attributes[s5], t6 = this._idToClientGraphic.get(e6);
      t6 && (o4.geometry = t6.geometry);
    }
    return i3.geometryType = this.layer.geometryType, i3;
  }
  async queryFeaturesJSON(e5, t5 = {}) {
    if (this._requiresClientGraphicMapping()) throw new s("query-features-json:unsupported", "Cannot query in JSON format for client only geometry types (mesh and extent)");
    await this.load(t5);
    const r4 = await this._connection.invoke("queryFeatures", e5 ? e5.toJSON() : null, t5);
    return t3(e5, this.layer.spatialReference, r4), r4;
  }
  queryFeatureCount(e5, t5 = {}) {
    return this.load(t5).then(() => this._connection.invoke("queryFeatureCount", e5 ? e5.toJSON() : null, t5));
  }
  queryObjectIds(e5, t5 = {}) {
    return this.load(t5).then(() => this._connection.invoke("queryObjectIds", e5 ? e5.toJSON() : null, t5));
  }
  queryExtent(e5, t5 = {}) {
    return this.load(t5).then(() => this._connection.invoke("queryExtent", e5 ? e5.toJSON() : null, t5)).then((e6) => ({ count: e6.count, extent: w3.fromJSON(e6.extent) }));
  }
  querySnapping(e5, t5 = {}) {
    return this.load(t5).then(() => this._connection.invoke("querySnapping", e5, t5));
  }
  async queryAttributeBins(e5, t5 = {}) {
    return await this.load(), this._connection.invoke("queryAttributeBins", e5 == null ? void 0 : e5.toJSON(), t5);
  }
  async _applyEdits(e5) {
    if (!this._connection) throw new s("feature-layer-source:edit-failure", "Memory source not loaded");
    const t5 = this.layer.objectIdField;
    let r4 = null;
    const s5 = [], o4 = [];
    await Promise.all([this._prepareClientMapping(e5.addFeatures, null), this._prepareClientMapping(e5.updateFeatures, null)]);
    const n8 = (e6) => "objectId" in e6 && null != e6.objectId ? e6.objectId : "attributes" in e6 && null != e6.attributes[t5] ? e6.attributes[t5] : null;
    if (e5.addFeatures && (r4 = this._prepareAddFeatures(e5.addFeatures)), e5.deleteFeatures) for (const i3 of e5.deleteFeatures) {
      const e6 = n8(i3);
      null != e6 && s5.push(e6);
    }
    const a7 = e5.updateFeatures && this._idToClientGraphic ? /* @__PURE__ */ new Map() : null;
    if (e5.updateFeatures) {
      for (const i3 of e5.updateFeatures) if (o4.push(this._serializeFeature(i3)), a7) {
        const e6 = n8(i3);
        null != e6 && a7.set(e6, i3);
      }
    }
    i(r4 ? r4.features : null, o4, this.layer.spatialReference);
    const { fullExtent: l4, featureEditResults: u5 } = await this._connection.invoke("applyEdits", { adds: r4 ? r4.features : [], updates: o4, deletes: s5 });
    return this.fullExtent = l4, r4 && r4.finish(u5.uidToObjectId), this._updateClientGraphicIds(a7, u5), this._createEditsResult(u5);
  }
  async _prepareClientMapping(e5, t5) {
    if ("mesh" !== this._layerOrSourceGeometryType || null == e5) return;
    const r4 = [];
    for (const { geometry: i3 } of e5) null == i3 || "mesh" !== i3.type || i3.hasExtent || i3.loaded || r4.push(i3.load({ signal: t5 }));
    r4.length && await Promise.all(r4);
  }
  _updateClientGraphicIds(e5, t5) {
    if (this._idToClientGraphic) {
      if (e5) for (const r4 of t5.updateResults) {
        if (!r4.success) continue;
        const t6 = e5.get(r4.objectId);
        null != t6 && this._addIdToClientGraphic(t6);
      }
      for (const e6 of t5.deleteResults) e6.success && this._idToClientGraphic.delete(e6.objectId);
    }
  }
  _createEditsResult(e5) {
    return { addFeatureResults: e5.addResults ? e5.addResults.map(this._createFeatureEditResult, this) : [], updateFeatureResults: e5.updateResults ? e5.updateResults.map(this._createFeatureEditResult, this) : [], deleteFeatureResults: e5.deleteResults ? e5.deleteResults.map(this._createFeatureEditResult, this) : [], addAttachmentResults: [], updateAttachmentResults: [], deleteAttachmentResults: [] };
  }
  _createFeatureEditResult(e5) {
    const t5 = true === e5.success ? null : e5.error || { code: void 0, description: void 0 };
    return { objectId: e5.objectId, globalId: e5.globalId, error: t5 ? new s("feature-layer-source:edit-failure", t5.description, { code: t5.code }) : null };
  }
  _prepareAddFeatures(e5) {
    const t5 = /* @__PURE__ */ new Map(), r4 = new Array(e5.length);
    let i3 = null;
    for (let o4 = 0; o4 < e5.length; o4++) {
      const s6 = e5[o4], n8 = this._serializeFeature(s6);
      i3 || null == s6.geometry || (i3 = s6.geometry.type), r4[o4] = n8, t5.set(`${n8.uid}`, s6);
    }
    const s5 = this;
    return { features: r4, inferredGeometryType: i3, finish(e6) {
      const r5 = s5.sourceJSON.objectIdField;
      for (const i4 in e6) {
        const o4 = e6[i4], n8 = t5.get(i4);
        n8 && (n8.attributes || (n8.attributes = {}), -1 === o4 ? delete n8.attributes[r5] : n8.attributes[r5] = o4, s5._addIdToClientGraphic(n8));
      }
    } };
  }
  _addIdToClientGraphic(e5) {
    var _a;
    if (!this._idToClientGraphic) return;
    const t5 = this.sourceJSON.objectIdField, r4 = (_a = e5.attributes) == null ? void 0 : _a[t5];
    null != r4 && this._idToClientGraphic.set(r4, e5);
  }
  get _layerOrSourceGeometryType() {
    var _a, _b;
    return ((_a = this.layer) == null ? void 0 : _a.geometryType) ?? ((_b = this.sourceJSON) == null ? void 0 : _b.geometryType);
  }
  _requiresClientGraphicMapping() {
    return this._geometryTypeRequiresClientGraphicMapping(this._layerOrSourceGeometryType);
  }
  _geometryRequiresClientGraphicMapping(e5) {
    return this._geometryTypeRequiresClientGraphicMapping(e5.type);
  }
  _geometryTypeRequiresClientGraphicMapping(e5) {
    return "mesh" === e5 || "multipatch" === e5 || "extent" === e5;
  }
  _serializeFeature(e5) {
    const { attributes: t5 } = e5, r4 = this._geometryForSerialization(e5), i3 = (_++).toString();
    return r4 ? { uid: i3, geometry: r4.toJSON(), attributes: t5 } : { uid: i3, attributes: t5 };
  }
  _geometryForSerialization(e5) {
    const { geometry: t5 } = e5;
    if (null == t5) return null;
    if (this._geometryRequiresClientGraphicMapping(t5)) {
      return t5.extent ? j.fromExtent(t5.extent) : null;
    }
    return t5;
  }
  async _startWorker(e5) {
    this._connection = await p6("MemorySourceWorker", { strategy: has("feature-layers-workers") ? "dedicated" : "local", signal: e5, registryTarget: this });
    const { fields: t5, spatialReference: r4, objectIdField: i3, hasM: s5, hasZ: n8, timeInfo: l4, dateFieldsTimeZone: u5 } = this.layer, p8 = "defaults" === this.layer.originOf("spatialReference");
    await this._prepareClientMapping(this.items, e5);
    const c4 = this._prepareAddFeatures(this.items);
    this.addHandles(this.on("before-changes", (e6) => {
      n.getLogger(this).error("Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead"), e6.preventDefault();
    }));
    const d6 = { features: c4.features, fields: t5 == null ? void 0 : t5.map((e6) => e6.toJSON()), geometryType: m3.toJSON(this._workerGeometryType), hasM: "mesh" !== this._layerOrSourceGeometryType && s5, hasZ: "mesh" === this._layerOrSourceGeometryType || n8, objectIdField: i3, spatialReference: p8 ? null : r4 && r4.toJSON(), timeInfo: (l4 == null ? void 0 : l4.toJSON()) ?? null, dateFieldsTimeZone: u5 }, h2 = await this._connection.invoke("load", d6, { signal: e5 });
    for (const a7 of h2.warnings) n.getLogger(this.layer).warn("#load()", `${a7.message} (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { warning: a7 });
    h2.featureErrors.length && n.getLogger(this.layer).warn("#load()", `Encountered ${h2.featureErrors.length} validation errors while loading features. (title: '${this.layer.title || "no title"}', id: '${this.layer.id ?? "no id"}')`, { errors: h2.featureErrors });
    const m6 = h2.layerDefinition;
    this._geometryTypeRequiresClientGraphicMapping(c4.inferredGeometryType) && (m6.geometryType = m3.toJSON(c4.inferredGeometryType)), this.sourceJSON = m6, this._requiresClientGraphicMapping() && (this._idToClientGraphic = /* @__PURE__ */ new Map()), c4.finish(h2.assignedObjectIds);
  }
};
r([n2({ Type: b3, ensureType: w(b3) })], T3.prototype, "itemType", void 0), r([m()], T3.prototype, "type", void 0), r([m({ constructOnly: true })], T3.prototype, "layer", void 0), r([m({ readOnly: true })], T3.prototype, "_workerGeometryType", null), r([m()], T3.prototype, "sourceJSON", void 0), T3 = r([a2("esri.layers.graphics.sources.MemorySource")], T3);

// node_modules/@arcgis/core/layers/support/PublishingInfo.js
var e4 = class extends g {
  constructor() {
    super(...arguments), this.updating = false, this.status = "unknown";
  }
};
r([m()], e4.prototype, "updating", void 0), r([m()], e4.prototype, "status", void 0), e4 = r([a2("esri.layers.support.PublishingInfo")], e4);
var p7 = e4;

// node_modules/@arcgis/core/layers/mixins/PublishableLayer.js
var o3 = Symbol();
var n7 = (i3) => {
  var n8;
  let u5 = class extends i3 {
    constructor() {
      super(...arguments), this[n8] = true;
    }
    get publishingInfo() {
      if (this.destroyed) return null;
      const t5 = this._get("publishingInfo");
      if (t5) return t5;
      const s5 = new p7();
      return this._checkPublishingStatus(s5), s5;
    }
    _checkPublishingStatus(t5) {
      const s5 = 250, e5 = 125;
      let r4 = 0;
      const o4 = async (s6) => {
        let n9;
        t5.updating = true;
        try {
          n9 = await this.fetchPublishingStatus();
        } catch (u6) {
          n9 = "unavailable";
        }
        "published" !== n9 && "unavailable" !== n9 || ("publishing" === t5.status && this.refresh(), i4.remove()), t5.status = n9, t5.updating = false, i4.removed || (r4 = setTimeout(o4, s6, s6 + e5));
      }, i4 = { removed: false, remove() {
        this.removed = true, clearTimeout(r4);
      } };
      this.when().catch(() => i4.remove()), o4(s5), this.addHandles(i4);
    }
  };
  return n8 = o3, r([m({ readOnly: true, clonable: false })], u5.prototype, "publishingInfo", null), u5 = r([a2("esri.layers.mixins.PublishableLayer")], u5), u5;
};

// node_modules/@arcgis/core/layers/FeatureLayer.js
var Ze = "FeatureLayer";
function ke(e5, t5) {
  return new s("layer:unsupported", `Layer (${e5.title}, ${e5.id}) of type '${e5.declaredClass}' ${t5}`, { layer: e5 });
}
function ze(e5) {
  return e5 && e5 instanceof V2;
}
var He = s4();
function Ke(e5, t5, r4) {
  const i3 = !!(r4 == null ? void 0 : r4.writeLayerSchema);
  return { enabled: i3, ignoreOrigin: i3 };
}
var Xe = class extends R3(d4(c(n7(F(a6(p2(p4(l3(e3(t2(f2(l2(b2(j2(S(e2(i2(a4.ClonableMixin(f))))))))))))))))))) {
  constructor(...e5) {
    super(...e5), this.attributeTableTemplate = null, this.charts = null, this.copyright = null, this.displayField = null, this.dynamicDataSource = null, this.fields = null, this.fieldsIndex = null, this.formTemplate = null, this.fullExtent = null, this.geometryType = null, this.hasM = void 0, this.hasZ = void 0, this.infoFor3D = null, this.isTable = false, this.labelsVisible = true, this.labelingInfo = null, this.legendEnabled = true, this.objectIdField = null, this.operationalLayerType = "ArcGISFeatureLayer", this.outFields = null, this.path = null, this.popupEnabled = true, this.popupTemplate = null, this.resourceInfo = null, this.screenSizePerspectiveEnabled = true, this.spatialReference = g2.WGS84, this.subtypeCode = null, this.supportedSourceTypes = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), this.templates = null, this.timeInfo = null, this.title = null, this.sublayerTitleMode = "item-title", this.type = "feature", this.typeIdField = null, this.types = null, this.visible = true, this._debouncedSaveOperations = k(async (e6, t5, r4) => {
      const { save: i3, saveAs: o4 } = await import("./featureLayerUtils-TGTOJA3L.js");
      switch (e6) {
        case A.SAVE:
          return i3(this, t5);
        case A.SAVE_AS:
          return o4(this, r4, t5);
      }
    });
  }
  destroy() {
    var _a;
    (_a = this.source) == null ? void 0 : _a.destroy();
  }
  normalizeCtorArgs(e5, t5) {
    return "string" == typeof e5 ? { url: e5, ...t5 } : e5;
  }
  load(e5) {
    var _a;
    const t5 = null != e5 ? e5.signal : null;
    if (((_a = this.portalItem) == null ? void 0 : _a.loaded) && this.source) return this.addResolvingPromise(this.createGraphicsSource(t5).then((e6) => this.initLayerProperties(e6))), Promise.resolve(this);
    const r4 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Scene Service"] }, e5).catch(a3).then(async () => {
      if (this.url && null == this.layerId && /FeatureServer|MapServer\/*$/i.test(this.url)) {
        const e6 = await this._fetchFirstValidLayerId(t5);
        null != e6 && (this.layerId = e6);
      }
      if (!this.url && !this._hasMemorySource()) throw new s("feature-layer:missing-url-or-source", "Feature layer must be created with either a url or a source");
      return this.initLayerProperties(await this.createGraphicsSource(t5));
    }).then(() => H(this, "load", e5));
    return this.addResolvingPromise(r4), Promise.resolve(this);
  }
  get _titleCreator() {
    const e5 = this._get("_titleCreator");
    return u(e5), new u4({ fieldsIndex: this.fieldsIndex, objectIdField: this.objectIdField, fields: this.fields, displayField: this.displayField, effectivePopupTemplate: this.popupTemplate ?? this.defaultPopupTemplate });
  }
  readCapabilities(e5, t5) {
    return t5 = t5.layerDefinition || t5, c2(t5, this.url);
  }
  get createQueryVersion() {
    return this.commitProperty("definitionExpression"), this.commitProperty("dynamicDataSource"), this.commitProperty("timeExtent"), this.commitProperty("timeOffset"), this.commitProperty("geometryType"), this.commitProperty("gdbVersion"), this.commitProperty("historicMoment"), this.commitProperty("returnZ"), this.commitProperty("capabilities"), this.commitProperty("returnM"), (this._get("createQueryVersion") ?? 0) + 1;
  }
  get editingEnabled() {
    var _a;
    return !(this.loaded && !((_a = this.capabilities) == null ? void 0 : _a.operations.supportsEditing)) && (this._isOverridden("editingEnabled") ? this._get("editingEnabled") : this._hasMemorySource() || this.userHasEditingPrivileges);
  }
  set editingEnabled(e5) {
    this._overrideIfSome("editingEnabled", e5);
  }
  readEditingEnabled(e5, t5) {
    return this._readEditingEnabled(t5, false);
  }
  readEditingEnabledFromWebMap(e5, t5, r4) {
    return this._readEditingEnabled(t5, true, r4);
  }
  writeEditingEnabled(e5, t5) {
    this._writeEditingEnabled(e5, t5, false);
  }
  writeEditingEnabledToWebMap(e5, t5, r4, i3) {
    this._writeEditingEnabled(e5, t5, true, i3);
  }
  get effectiveEditingEnabled() {
    return Y(this);
  }
  get featureTitleFields() {
    return [...this._titleCreator.requiredFields];
  }
  readIsTable(e5, t5) {
    return "Table" === (t5 = (t5 == null ? void 0 : t5.layerDefinition) ?? t5).type || !t5.geometryType;
  }
  writeIsTable(e5, t5, r4, i3) {
    (i3 == null ? void 0 : i3.writeLayerSchema) && e(r4, e5 ? "Table" : "Feature Layer", t5);
  }
  readGlobalIdField(e5, t5) {
    return M(t5.layerDefinition || t5);
  }
  readObjectIdField(e5, t5) {
    return k2(t5.layerDefinition || t5);
  }
  get parsedUrl() {
    const e5 = I(this.url);
    return null != e5 && (null != this.dynamicDataSource ? e5.path = V(e5.path, "dynamicLayer") : null != this.layerId && (e5.path = V(e5.path, this.layerId.toString()))), e5;
  }
  get defaultPopupTemplate() {
    return this.createPopupTemplate();
  }
  set renderer(e5) {
    g3(e5, this.fieldsIndex), this._set("renderer", e5);
  }
  readRenderer(e5, t5, r4) {
    var _a;
    t5 = t5.layerDefinition || t5;
    const i3 = (_a = t5.drawingInfo) == null ? void 0 : _a.renderer;
    if (i3) {
      const e6 = o2(i3, t5, r4) ?? void 0;
      return e6 || n.getLogger(this).error("Failed to create renderer", { rendererDefinition: t5.drawingInfo.renderer, layer: this, context: r4 }), e6;
    }
    return te(t5, r4);
  }
  set source(e5) {
    const t5 = this._get("source");
    t5 !== e5 && (ze(t5) && this._resetMemorySource(t5), ze(e5) && this._initMemorySource(e5), this._set("source", e5));
  }
  castSource(e5) {
    return e5 ? Array.isArray(e5) || e5 instanceof V2 ? new T3({ layer: this, items: e5 }) : e5 : null;
  }
  readSource(e5, t5) {
    const r4 = d3.fromJSON(t5.featureSet);
    return new T3({ layer: this, items: (r4 == null ? void 0 : r4.features) ?? [] });
  }
  readTemplates(e5, t5) {
    const r4 = t5.editFieldsInfo, i3 = r4 == null ? void 0 : r4.creatorField, o4 = r4 == null ? void 0 : r4.editorField;
    return e5 = e5 == null ? void 0 : e5.map((e6) => n5.fromJSON(e6)), this._fixTemplates(e5, i3), this._fixTemplates(e5, o4), e5;
  }
  readTitle(e5, t5) {
    var _a, _b, _c;
    const r4 = ((_a = t5.layerDefinition) == null ? void 0 : _a.name) ?? t5.name, i3 = t5.title || ((_b = t5.layerDefinition) == null ? void 0 : _b.title);
    if (r4) {
      const e6 = (_c = this.portalItem) == null ? void 0 : _c.title;
      if ("item-title" === this.sublayerTitleMode) return this.url ? w2(this.url, r4) : r4;
      let t6 = r4;
      if (!t6 && this.url) {
        const e7 = d(this.url);
        null != e7 && (t6 = e7.title);
      }
      if (!t6) return;
      return "item-title-and-service-name" === this.sublayerTitleMode && e6 && e6 !== t6 && (t6 = e6 + " - " + t6), m2(t6);
    }
    if ("item-title" === this.sublayerTitleMode && i3) return i3;
  }
  readTitleFromWebMap(e5, t5) {
    var _a;
    return t5.title || ((_a = t5.layerDefinition) == null ? void 0 : _a.name);
  }
  readTypeIdField(e5, t5) {
    let r4 = (t5 = t5.layerDefinition || t5).typeIdField;
    if (r4 && t5.fields) {
      r4 = r4.toLowerCase();
      const e6 = t5.fields.find((e7) => e7.name.toLowerCase() === r4);
      e6 && (r4 = e6.name);
    }
    return r4;
  }
  readTypes(e5, t5) {
    e5 = (t5 = t5.layerDefinition || t5).types;
    const r4 = t5.editFieldsInfo, i3 = r4 == null ? void 0 : r4.creatorField, o4 = r4 == null ? void 0 : r4.editorField;
    return e5 == null ? void 0 : e5.map((e6) => (e6 = c3.fromJSON(e6), this._fixTemplates(e6.templates, i3), this._fixTemplates(e6.templates, o4), e6));
  }
  readVisible(e5, t5) {
    var _a;
    return null != ((_a = t5.layerDefinition) == null ? void 0 : _a.defaultVisibility) ? !!t5.layerDefinition.defaultVisibility : null != t5.visibility ? !!t5.visibility : void 0;
  }
  async addAttachment(e5, t5) {
    const r4 = await F2(this, e5, t5, Ze);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), r4;
  }
  async updateAttachment(e5, t5, r4) {
    const i3 = await P2(this, e5, t5, r4, Ze);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), i3;
  }
  async applyEdits(e5, t5) {
    return q2(this, e5, t5);
  }
  async uploadAssets(e5, t5) {
    return S2(this, e5, t5);
  }
  on(e5, t5) {
    return super.on(e5, t5);
  }
  createPopupTemplate(e5) {
    return p5(this, e5);
  }
  async createGraphicsSource(e5) {
    if (this._hasMemorySource() && this.source) return this.source.load({ signal: e5 });
    const { default: t5 } = await h(import("./FeatureLayerSource-I5OX2WL2.js"), e5);
    return new t5({ layer: this, supportedSourceTypes: this.supportedSourceTypes }).load({ signal: e5 });
  }
  createQuery() {
    const e5 = R2(this);
    e5.dynamicDataSource = this.dynamicDataSource;
    const t5 = null != this.subtypeCode ? `${this.subtypeField} = ${this.subtypeCode}` : null, r4 = r3(this.definitionExpression, t5);
    return e5.where = r4 || "1=1", e5;
  }
  async deleteAttachments(e5, t5) {
    const r4 = await v(this, e5, t5, Ze);
    return this.lastEditsEventDate = /* @__PURE__ */ new Date(), r4;
  }
  async fetchRecomputedExtents(e5) {
    return O(this, e5, Ze);
  }
  getFeatureTitle(e5, t5 = { timeZone: "system", fetchMissingFields: false }) {
    return this._titleCreator.getTitle(this, e5, t5);
  }
  getFeatureType(e5) {
    return oe(this.types, this.typeIdField, e5);
  }
  getFieldDomain(e5, t5) {
    var _a;
    return N(this, e5, t5, ((_a = this.getField(e5)) == null ? void 0 : _a.domain) ?? null);
  }
  async queryAttachments(e5, t5) {
    return A2(this, e5, t5, Ze);
  }
  async queryFeatures(e5, t5) {
    const r4 = await this.load(), i3 = await r4.source.queryFeatures(b4.from(e5) ?? r4.createQuery(), t5);
    if (i3 == null ? void 0 : i3.features) for (const o4 of i3.features) o4.layer = o4.sourceLayer = r4;
    return i3;
  }
  async queryObjectIds(e5, t5) {
    return (await L(this, e5, t5, Ze)).filter(n3);
  }
  async queryFeatureCount(e5, t5) {
    return E(this, e5, t5, Ze);
  }
  async queryExtent(e5, t5) {
    return D(this, e5, t5, Ze);
  }
  async queryRelatedFeatures(e5, t5) {
    return T2(this, e5, t5, Ze);
  }
  async queryRelatedFeaturesCount(e5, t5) {
    return C(this, e5, t5, Ze);
  }
  async queryTopFeatures(e5, t5) {
    var _a;
    const { source: r4, capabilities: i3 } = await this.load();
    if (!r4.queryTopFeatures || !((_a = i3 == null ? void 0 : i3.query) == null ? void 0 : _a.supportsTopFeaturesQuery)) throw new s(Ze, "Layer source does not support queryTopFeatures capability");
    const o4 = await import("./TopFeaturesQuery-RI4DQ2RB.js"), a7 = await r4.queryTopFeatures(o4.default.from(e5), t5);
    if (a7 == null ? void 0 : a7.features) for (const s5 of a7.features) s5.layer = s5.sourceLayer = this;
    return a7;
  }
  async queryAttributeBins(e5, t5) {
    var _a;
    const { source: r4, capabilities: i3 } = await this.load();
    if (!r4.queryAttributeBins || !((_a = i3 == null ? void 0 : i3.operations) == null ? void 0 : _a.supportsQueryBins)) throw new s(Ze, "Layer source does not support queryAttributeBins capability");
    ae(e5, i3, Ze);
    const o4 = await import("./AttributeBinsQuery-4MS472KK.js"), a7 = await r4.queryAttributeBins(o4.default.from(e5), t5);
    if (a7.features) for (const s5 of a7.features) s5.layer = s5.sourceLayer = this;
    return a7;
  }
  async queryTopObjectIds(e5, t5) {
    const { source: r4, capabilities: i3 } = await this.load();
    if (!r4.queryTopObjectIds || !(i3 == null ? void 0 : i3.query.supportsTopFeaturesQuery)) throw new s(Ze, "Layer source does not support queryTopObjectIds capability");
    const o4 = await import("./TopFeaturesQuery-RI4DQ2RB.js");
    return (await r4.queryTopObjectIds(o4.default.from(e5), t5)).filter(n3);
  }
  async queryTopFeaturesExtent(e5, t5) {
    var _a;
    const { source: r4, capabilities: i3 } = await this.load();
    if (!r4.queryTopExtents || !((_a = i3 == null ? void 0 : i3.query) == null ? void 0 : _a.supportsTopFeaturesQuery)) throw new s(Ze, "Layer source does not support queryTopExtents capability");
    const o4 = await import("./TopFeaturesQuery-RI4DQ2RB.js");
    return r4.queryTopExtents(o4.default.from(e5), t5);
  }
  async queryTopFeatureCount(e5, t5) {
    var _a;
    const { source: r4, capabilities: i3 } = await this.load();
    if (!r4.queryTopCount || !((_a = i3 == null ? void 0 : i3.query) == null ? void 0 : _a.supportsTopFeaturesQuery)) throw new s(Ze, "Layer source does not support queryFeatureCount capability");
    const o4 = await import("./TopFeaturesQuery-RI4DQ2RB.js");
    return r4.queryTopCount(o4.default.from(e5), t5);
  }
  read(e5, t5) {
    const r4 = e5.featureCollection;
    if ((r4 || "Feature Collection" === e5.type) && (this.resourceInfo = e5), r4) {
      const e6 = r4.layers;
      e6 && 1 === e6.length && (super.read(e6[0], t5), null != r4.showLegend && super.read({ showLegend: r4.showLegend }, t5));
    }
    super.read(e5, t5), t5 && "service" === t5.origin && (this.revert(["objectIdField", "fields", "timeInfo", "dateFieldsTimeZone"], "service"), this.spatialReference || this.revert(["spatialReference"], "service"));
  }
  write(e5, t5) {
    t5 = { ...t5, origin: (t5 == null ? void 0 : t5.origin) ?? void 0, writeLayerSchema: (t5 == null ? void 0 : t5.writeLayerSchema) ?? this._hasMemorySource() };
    const { origin: r4, layerContainerType: i3, messages: o4 } = t5;
    if (this.dynamicDataSource) return o4 == null ? void 0 : o4.push(ke(this, "using a dynamic data source cannot be written to web scenes, web maps and feature service items")), null;
    if (this.isTable) {
      if (("web-map" === r4 || "web-scene" === r4) && "tables" !== i3) return o4 == null ? void 0 : o4.push(ke(this, `a table source can only be written to tables, not ${i3}`)), null;
      if (this._hasMemorySource()) return o4 == null ? void 0 : o4.push(ke(this, "using an in-memory table source cannot be written to web scenes and web maps")), null;
    } else if (this.loaded && ("web-map" === r4 || "web-scene" === r4) && "tables" === i3) return o4 == null ? void 0 : o4.push(ke(this, "using a non-table source cannot be written to tables in web maps or web scenes")), null;
    return super.write(e5, t5);
  }
  clone() {
    if (this._hasMemorySource()) throw new s(Ze, `FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`);
    return super.clone();
  }
  serviceSupportsSpatialReference(e5) {
    var _a;
    return !!this.loaded && ("memory" === ((_a = this.source) == null ? void 0 : _a.type) || t4(this, e5));
  }
  async save(e5) {
    return this._debouncedSaveOperations(A.SAVE, e5);
  }
  async saveAs(e5, t5) {
    return this._debouncedSaveOperations(A.SAVE_AS, t5, e5);
  }
  _readEditingEnabled(e5, t5, r4) {
    var _a;
    let i3 = (_a = e5.layerDefinition) == null ? void 0 : _a.capabilities;
    return i3 ? this._hasEditingCapability(i3) : (i3 = e5.capabilities, t5 && "web-map" === (r4 == null ? void 0 : r4.origin) && !this._hasMemorySource() && i3 ? this._hasEditingCapability(i3) : void 0);
  }
  _hasEditingCapability(e5) {
    return e5.toLowerCase().split(",").map((e6) => e6.trim()).includes("editing");
  }
  _writeEditingEnabled(e5, t5, r4, i3) {
    var _a, _b;
    if (!e5) {
      const e6 = ((_b = (_a = this.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsSync) ? "Query,Sync" : "Query";
      e("layerDefinition.capabilities", e6, t5), r4 && !(i3 == null ? void 0 : i3.writeLayerSchema) && (t5.capabilities = e6);
    }
  }
  _fetchFirstValidLayerId(e5) {
    return P(this.url ?? "", { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: e5 }).then((e6) => {
      const t5 = e6.data;
      if (t5) return this.findFirstValidLayerId(t5);
    });
  }
  async initLayerProperties(e5) {
    var _a;
    return this._set("source", e5), e5.sourceJSON && (this.sourceJSON = e5.sourceJSON, this.read(e5.sourceJSON, { origin: "service", portalItem: this.portalItem, portal: (_a = this.portalItem) == null ? void 0 : _a.portal, url: this.parsedUrl })), this._verifySource(), this._verifyFields(), g3(this.renderer, this.fieldsIndex), I3(this.timeInfo, this.fieldsIndex), this._hasMemorySource() && "mesh" === this.geometryType && (this.capabilities.query.supportsReturnMesh = true), t(this, { origin: "service" });
  }
  async hasDataChanged() {
    return B(this);
  }
  async fetchPublishingStatus() {
    const e5 = this.source;
    return (e5 == null ? void 0 : e5.fetchPublishingStatus) ? e5.fetchPublishingStatus() : "unavailable";
  }
  _verifyFields() {
    var _a, _b;
    const e5 = ((_a = this.parsedUrl) == null ? void 0 : _a.path) ?? "undefined";
    this.objectIdField || console.log("FeatureLayer: 'objectIdField' property is not defined (url: " + e5 + ")"), this.isTable || this._hasMemorySource() || -1 !== e5.search(/\/FeatureServer\//i) || ((_b = this.fields) == null ? void 0 : _b.some((e6) => "geometry" === e6.type)) || console.log("FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " + e5 + ")");
  }
  _fixTemplates(e5, t5) {
    e5 && e5.forEach((e6) => {
      var _a;
      const r4 = (_a = e6.prototype) == null ? void 0 : _a.attributes;
      r4 && t5 && delete r4[t5];
    });
  }
  _verifySource() {
    if (this._hasMemorySource()) {
      if (this.url) throw new s("feature-layer:mixed-source-and-url", "FeatureLayer cannot be created with both an in-memory source and a url");
    } else if (!this.url) throw new s("feature-layer:source-or-url-required", "FeatureLayer requires either a url, a valid portal item or a source");
  }
  _initMemorySource(e5) {
    e5.forEach((e6) => {
      e6.layer = this, e6.sourceLayer = this;
    }), this.addHandles([e5.on("after-add", (e6) => {
      e6.item.layer = this, e6.item.sourceLayer = this;
    }), e5.on("after-remove", (e6) => {
      e6.item.layer = null, e6.item.sourceLayer = null;
    })], "fl-source");
  }
  _resetMemorySource(e5) {
    e5.forEach((e6) => {
      e6.layer = null, e6.sourceLayer = null;
    }), this.removeHandles("fl-source");
  }
  _hasMemorySource() {
    return !(this.url || !this.source);
  }
  findFirstValidLayerId(e5) {
    return Array.isArray(e5.layers) && e5.layers.length > 0 ? e5.layers[0].id : Array.isArray(e5.tables) && e5.tables.length > 0 ? e5.tables[0].id : void 0;
  }
};
r([m({ clonable: false, readOnly: true })], Xe.prototype, "_titleCreator", null), r([m(I2)], Xe.prototype, "attributeTableTemplate", void 0), r([o("service", "capabilities")], Xe.prototype, "readCapabilities", null), r([m({ json: { origins: { "web-scene": { write: false } }, write: true } })], Xe.prototype, "charts", void 0), r([m({ readOnly: true })], Xe.prototype, "createQueryVersion", null), r([m({ json: { read: { source: "layerDefinition.copyrightText" } } })], Xe.prototype, "copyright", void 0), r([m({ json: { read: { source: "layerDefinition.displayField" } } })], Xe.prototype, "displayField", void 0), r([m({ types: x, readOnly: true })], Xe.prototype, "defaultSymbol", void 0), r([m({ type: R })], Xe.prototype, "dynamicDataSource", void 0), r([m({ type: Boolean })], Xe.prototype, "editingEnabled", null), r([o(["portal-item", "web-scene"], "editingEnabled", ["layerDefinition.capabilities"])], Xe.prototype, "readEditingEnabled", null), r([o("web-map", "editingEnabled", ["capabilities", "layerDefinition.capabilities"])], Xe.prototype, "readEditingEnabledFromWebMap", null), r([r2(["portal-item", "web-scene"], "editingEnabled", { "layerDefinition.capabilities": { type: String } })], Xe.prototype, "writeEditingEnabled", null), r([r2("web-map", "editingEnabled", { capabilities: { type: String }, "layerDefinition.capabilities": { type: String } })], Xe.prototype, "writeEditingEnabledToWebMap", null), r([m({ readOnly: true })], Xe.prototype, "effectiveEditingEnabled", null), r([m({ clonable: false, readOnly: true })], Xe.prototype, "featureTitleFields", null), r([m({ ...He.fields, json: { read: { source: "layerDefinition.fields" }, origins: { service: { name: "fields" }, "web-map": { write: { target: "layerDefinition.fields", overridePolicy: Ke } } } } })], Xe.prototype, "fields", void 0), r([m(He.fieldsIndex)], Xe.prototype, "fieldsIndex", void 0), r([m({ type: V3, json: { name: "formInfo", write: true, origins: { "web-scene": { read: false, write: false } } } })], Xe.prototype, "formTemplate", void 0), r([m({ json: { read: { source: "layerDefinition.extent" } } })], Xe.prototype, "fullExtent", void 0), r([m({ json: { origins: { "web-map": { write: { target: "layerDefinition.geometryType", overridePolicy: Ke, writer(e5, t5, r4) {
  const i3 = e5 ? j3.toJSON(e5) : null;
  i3 && e(r4, i3, t5);
} } } }, read: { source: "layerDefinition.geometryType", reader: j3.read } } })], Xe.prototype, "geometryType", void 0), r([m({ json: { read: { source: "layerDefinition.hasM" } } })], Xe.prototype, "hasM", void 0), r([m({ json: { read: { source: "layerDefinition.hasZ" } } })], Xe.prototype, "hasZ", void 0), r([m(u2)], Xe.prototype, "id", void 0), r([m({ readOnly: true, json: { origins: { service: { read: true } }, read: false } })], Xe.prototype, "infoFor3D", void 0), r([m({ json: { origins: { "web-map": { write: { target: "layerDefinition.type" } } } } })], Xe.prototype, "isTable", void 0), r([o("service", "isTable", ["type", "geometryType"]), o("isTable", ["layerDefinition.type", "layerDefinition.geometryType"])], Xe.prototype, "readIsTable", null), r([r2("web-map", "isTable")], Xe.prototype, "writeIsTable", null), r([m(p3)], Xe.prototype, "labelsVisible", void 0), r([m({ type: [C2], json: { origins: { service: { name: "drawingInfo.labelingInfo", read: n6, write: false }, "web-scene": { name: "layerDefinition.drawingInfo.labelingInfo", read: n6, write: { enabled: true, layerContainerTypes: a5 } } }, name: "layerDefinition.drawingInfo.labelingInfo", read: n6, write: true } })], Xe.prototype, "labelingInfo", void 0), r([m((() => {
  const e5 = a(b);
  return e5.json.origins["portal-item"] = { write: { target: "layerDefinition.drawingInfo.transparency", writer(e6, t5, r4) {
    e(r4, n4(e6), t5);
  } } }, e5;
})())], Xe.prototype, "opacity", void 0), r([m(d2)], Xe.prototype, "legendEnabled", void 0), r([m({ type: ["show", "hide"], json: (() => {
  const e5 = a(T.json);
  return e5.origins["portal-item"] = { read: false, write: false }, e5;
})() })], Xe.prototype, "listMode", void 0), r([o("globalIdField", ["layerDefinition.globalIdField", "layerDefinition.fields"])], Xe.prototype, "readGlobalIdField", null), r([m({ json: { origins: { "web-map": { write: { target: "layerDefinition.objectIdField", overridePolicy: Ke } } } } })], Xe.prototype, "objectIdField", void 0), r([o("objectIdField", ["layerDefinition.objectIdField", "layerDefinition.fields"])], Xe.prototype, "readObjectIdField", null), r([m({ type: ["ArcGISFeatureLayer"], json: { write: { target: "layerType", ignoreOrigin: true, layerContainerTypes: a5 } } })], Xe.prototype, "operationalLayerType", void 0), r([m(He.outFields)], Xe.prototype, "outFields", void 0), r([m({ readOnly: true })], Xe.prototype, "parsedUrl", null), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true } }, read: false } })], Xe.prototype, "path", void 0), r([m(l)], Xe.prototype, "popupEnabled", void 0), r([m({ type: q, json: { name: "popupInfo", write: true } })], Xe.prototype, "popupTemplate", void 0), r([m({ readOnly: true })], Xe.prototype, "defaultPopupTemplate", null), r([m({ types: m5, json: { origins: { service: { write: { target: "drawingInfo.renderer", enabled: false } }, "web-scene": { types: u3, name: "layerDefinition.drawingInfo.renderer", write: { layerContainerTypes: a5, overridePolicy: (e5, t5, r4) => ({ ignoreOrigin: r4 == null ? void 0 : r4.writeLayerSchema }) } } }, write: { target: "layerDefinition.drawingInfo.renderer", overridePolicy: (e5, t5, r4) => ({ ignoreOrigin: r4 == null ? void 0 : r4.writeLayerSchema }) } } })], Xe.prototype, "renderer", null), r([o("service", "renderer", ["drawingInfo.renderer", "defaultSymbol"]), o("renderer", ["layerDefinition.drawingInfo.renderer", "layerDefinition.defaultSymbol"])], Xe.prototype, "readRenderer", null), r([m()], Xe.prototype, "resourceInfo", void 0), r([m((() => {
  const e5 = a(s3);
  return e5.json.origins["portal-item"] = { read: false, write: false }, e5;
})())], Xe.prototype, "screenSizePerspectiveEnabled", void 0), r([m({ clonable: false })], Xe.prototype, "source", null), r([s2("source")], Xe.prototype, "castSource", null), r([o("portal-item", "source", ["featureSet"]), o("web-map", "source", ["featureSet"])], Xe.prototype, "readSource", null), r([m({ json: { read: { source: "layerDefinition.extent.spatialReference" } } })], Xe.prototype, "spatialReference", void 0), r([m({ type: Number })], Xe.prototype, "subtypeCode", void 0), r([m({ type: [n5] })], Xe.prototype, "templates", void 0), r([o("templates", ["editFieldsInfo", "creatorField", "editorField", "templates"])], Xe.prototype, "readTemplates", null), r([m({ type: d5 })], Xe.prototype, "timeInfo", void 0), r([m()], Xe.prototype, "title", void 0), r([o("service", "title", ["name"]), o("portal-item", "title", ["layerDefinition.title", "layerDefinition.name", "title"])], Xe.prototype, "readTitle", null), r([o("web-map", "title", ["layerDefinition.name", "title"])], Xe.prototype, "readTitleFromWebMap", null), r([m({ type: String })], Xe.prototype, "sublayerTitleMode", void 0), r([m({ json: { read: false } })], Xe.prototype, "type", void 0), r([m({ type: String })], Xe.prototype, "typeIdField", void 0), r([o("service", "typeIdField"), o("typeIdField", ["layerDefinition.typeIdField"])], Xe.prototype, "readTypeIdField", null), r([m({ type: [c3] })], Xe.prototype, "types", void 0), r([o("service", "types", ["types"]), o("types", ["layerDefinition.types"])], Xe.prototype, "readTypes", null), r([m({ type: Boolean, json: { origins: { "portal-item": { write: { target: "layerDefinition.defaultVisibility" } } } } })], Xe.prototype, "visible", void 0), r([o("portal-item", "visible", ["visibility", "layerDefinition.defaultVisibility"])], Xe.prototype, "readVisible", null), Xe = r([a2("esri.layers.FeatureLayer")], Xe);
var Ye = Xe;

export {
  Ye
};
//# sourceMappingURL=chunk-JT5MNXX3.js.map
