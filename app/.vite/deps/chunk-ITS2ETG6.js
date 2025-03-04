import {
  F as F2
} from "./chunk-QVL6U5IE.js";
import {
  s as s4
} from "./chunk-3B5XHATW.js";
import {
  u
} from "./chunk-PMRN4OAI.js";
import {
  A as A3
} from "./chunk-QNB4N7PF.js";
import {
  N as N2
} from "./chunk-WHV4I2Y7.js";
import {
  t as t2
} from "./chunk-YINRFSE5.js";
import {
  n as n2
} from "./chunk-A6DPK5GC.js";
import {
  A as A2,
  I
} from "./chunk-5TRYQTEN.js";
import {
  i
} from "./chunk-RKXU25GZ.js";
import {
  H
} from "./chunk-3GIIPEHS.js";
import {
  c,
  i as i2,
  o as o2,
  t
} from "./chunk-6WASKRTP.js";
import {
  h
} from "./chunk-37HZDVD7.js";
import {
  b as b2
} from "./chunk-AI2O2GKK.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  $,
  L,
  N
} from "./chunk-4WERUJEK.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  r as r2
} from "./chunk-5EWD56QJ.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  p
} from "./chunk-SQ6MYL73.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  X,
  s2 as s3
} from "./chunk-LTDNORB5.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  g2 as g
} from "./chunk-UFBX3XSC.js";
import {
  Tt,
  V
} from "./chunk-F7TCEOHX.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  A,
  a as a2,
  k
} from "./chunk-M6FNW7GP.js";
import {
  e,
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  F,
  G,
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/graphics/applyEditsUtils.js
async function m3(t3, e2, r3) {
  const { geometry: o3 } = e2, i3 = { ...e2.attributes };
  if (null != r3 && "mesh" === (o3 == null ? void 0 : o3.type)) {
    const { transformFieldRoles: e3 } = r3, { origin: c2, spatialReference: p2, vertexSpace: m4 } = o3, f3 = o3.transform ?? new N2(), g4 = "local" === m4.type, b4 = t3.spatialReference, y2 = b4.isGeographic, R2 = s3(b4, p2), h3 = N(p2, b4) && L(p2, b4);
    if (!(g4 && y2 && h3 || !g4 && !y2 && R2)) return null;
    const I3 = $(c2, p2, b4);
    if (null == I3) return null;
    if (i3[e3.originX] = I3.x, i3[e3.originY] = I3.y, i3[e3.originZ] = I3.z ?? 0, null != f3) {
      const { translation: t4, scale: r4, rotation: o4 } = f3, s5 = g4 ? 1 : X(p2) / X(b4);
      i3[e3.translationX] = t4[0] * s5, i3[e3.translationY] = t4[2] * s5, i3[e3.translationZ] = -t4[1] * s5, i3[e3.scaleX] = r4[0], i3[e3.scaleY] = r4[2], i3[e3.scaleZ] = r4[1], i3[e3.rotationX] = o4[0], i3[e3.rotationY] = o4[2], i3[e3.rotationZ] = -o4[1], i3[e3.rotationDeg] = o4[3];
    }
    return { attributes: i3 };
  }
  return null == o3 ? { attributes: i3 } : "mesh" === o3.type || "extent" === o3.type ? null : { geometry: o3.toJSON(), attributes: i3 };
}
async function f2(t3, e2) {
  const r3 = await Promise.all((e2.addAttachments ?? []).map((e3) => g3(t3, e3))), a3 = await Promise.all((e2.updateAttachments ?? []).map((e3) => g3(t3, e3))), o3 = e2.deleteAttachments ?? [];
  return r3.length || a3.length || o3.length ? { adds: r3, updates: a3, deletes: [...o3] } : null;
}
async function g3(t3, e2) {
  var _a;
  const { feature: r3, attachment: a3 } = e2, { globalId: s5, name: n3, contentType: l, data: i3, uploadId: u2 } = a3, d2 = { globalId: s5 };
  if (r3 && ("attributes" in r3 ? d2.parentGlobalId = (_a = r3.attributes) == null ? void 0 : _a[t3.globalIdField] : r3.globalId && (d2.parentGlobalId = r3.globalId)), u2) d2.uploadId = u2;
  else if (i3) {
    const t4 = await Tt(i3);
    t4 && (d2.contentType = t4.mediaType, d2.data = t4.data), i3 instanceof File && (d2.name = i3.name);
  }
  return n3 && (d2.name = n3), l && (d2.contentType = l), d2;
}
function b3(t3, e2, r3) {
  if (!e2 || 0 === e2.length) return [];
  if (r3 && I(e2)) return e2.map((t4) => t4.globalId);
  if (A2(e2)) return e2.map((t4) => t4.objectId);
  const a3 = r3 ? t3.globalIdField : t3.objectIdField;
  return a3 ? e2.map((t4) => t4.getAttribute(a3)) : [];
}
function y(t3) {
  var _a, _b, _c;
  const e2 = t3 == null ? void 0 : t3.assetMaps;
  if (e2) {
    for (const t4 of e2.addResults) t4.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t4.globalId}.`);
    for (const t4 of e2.updateResults) t4.success || n.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t4.globalId}.`);
  }
  const a3 = t3 == null ? void 0 : t3.attachments, o3 = { addFeatureResults: ((_a = t3 == null ? void 0 : t3.addResults) == null ? void 0 : _a.map(R)) ?? [], updateFeatureResults: ((_b = t3 == null ? void 0 : t3.updateResults) == null ? void 0 : _b.map(R)) ?? [], deleteFeatureResults: ((_c = t3 == null ? void 0 : t3.deleteResults) == null ? void 0 : _c.map(R)) ?? [], addAttachmentResults: (a3 == null ? void 0 : a3.addResults) ? a3.addResults.map(R) : [], updateAttachmentResults: (a3 == null ? void 0 : a3.updateResults) ? a3.updateResults.map(R) : [], deleteAttachmentResults: (a3 == null ? void 0 : a3.deleteResults) ? a3.deleteResults.map(R) : [] };
  return (t3 == null ? void 0 : t3.editMoment) && (o3.editMoment = t3.editMoment), o3;
}
function R(t3) {
  const r3 = true === t3.success ? null : t3.error || { code: void 0, description: void 0 };
  return { objectId: t3.objectId, globalId: t3.globalId, error: r3 ? new s2("feature-layer-source:edit-failure", r3.description, { code: r3.code }) : null };
}
function h2(e2, r3) {
  return new b({ attributes: e2.attributes, geometry: f({ ...e2.geometry, spatialReference: r3 }) });
}
function I2(t3, e2) {
  var _a, _b, _c;
  return { adds: ((_a = t3 == null ? void 0 : t3.adds) == null ? void 0 : _a.map((t4) => h2(t4, e2))) || [], updates: ((_b = t3 == null ? void 0 : t3.updates) == null ? void 0 : _b.map((t4) => ({ original: h2(t4[0], e2), current: h2(t4[1], e2) }))) || [], deletes: ((_c = t3 == null ? void 0 : t3.deletes) == null ? void 0 : _c.map((t4) => h2(t4, e2))) || [], spatialReference: e2 };
}
function j(t3) {
  const e2 = t3.details.raw, r3 = +e2.code, a3 = +e2.extendedCode;
  return 500 === r3 && (-2147217144 === a3 || -2147467261 === a3);
}

// node_modules/@arcgis/core/layers/graphics/sources/FeatureLayerSource.js
var V2 = new o({ originalAndCurrentFeatures: "original-and-current-features", none: "none" });
var $2 = new o({ Started: "published", Publishing: "publishing", Stopped: "unavailable" });
var G2 = class extends m2 {
  constructor(e2) {
    super(e2), this.type = "feature-layer", this.supportedSourceTypes = /* @__PURE__ */ new Set(["Feature Layer", "Oriented Imagery Layer", "Table", "Catalog Layer"]), this.refresh = k(async () => {
      var _a, _b;
      await this.load();
      const e3 = (_a = this.sourceJSON.editingInfo) == null ? void 0 : _a.lastEditDate;
      if (null == e3) return { dataChanged: true, updates: {} };
      try {
        await this._fetchService(null);
      } catch {
        return { dataChanged: true, updates: {} };
      }
      const t3 = e3 !== ((_b = this.sourceJSON.editingInfo) == null ? void 0 : _b.lastEditDate);
      return { dataChanged: t3, updates: t3 ? { editingInfo: this.sourceJSON.editingInfo, extent: this.sourceJSON.extent } : null };
    }), this._ongoingAssetUploads = /* @__PURE__ */ new Map();
  }
  load(e2) {
    const t3 = this.layer.sourceJSON, r3 = this._fetchService(t3, { ...e2 }).then(() => this.layer.setUserPrivileges(this.sourceJSON.serviceItemId, e2)).then(() => this._ensureLatestMetadata(e2));
    return this.addResolvingPromise(r3), Promise.resolve(this);
  }
  initialize() {
    this.addHandles([d(() => {
      const e2 = this.layer;
      return e2 && "lastEditsEventDate" in e2 ? e2.lastEditsEventDate : null;
    }, (e2) => this._handleLastEditsEventChange(e2))]);
  }
  destroy() {
    this._removeEditInterceptor();
  }
  get queryTask() {
    var _a;
    const { capabilities: e2, parsedUrl: t3, gdbVersion: r3, spatialReference: s5, fieldsIndex: a3 } = this.layer, i3 = "infoFor3D" in this.layer ? this.layer.infoFor3D : null, n3 = "dynamicDataSource" in this.layer ? this.layer.dynamicDataSource : null, o3 = has("featurelayer-pbf") && (e2 == null ? void 0 : e2.query.supportsFormatPBF) && null == i3, u2 = ((_a = e2 == null ? void 0 : e2.operations) == null ? void 0 : _a.supportsQueryAttachments) ?? false;
    return new F2({ url: t3.path, pbfSupported: o3, fieldsIndex: a3, infoFor3D: i3, dynamicDataSource: n3, gdbVersion: r3, sourceSpatialReference: s5, queryAttachmentsSupported: u2 });
  }
  async addAttachment(e2, t3) {
    await this.load();
    const { layer: s5 } = this;
    await H(s5, "editing");
    const a3 = e2.attributes[s5.objectIdField], i3 = s5.parsedUrl.path + "/" + a3 + "/addAttachment", n3 = this._getLayerRequestOptions(), o3 = this._getFormDataForAttachment(t3, n3.query);
    try {
      const e3 = await P(i3, { body: o3 });
      return R(e3.data.addAttachmentResult);
    } catch (u2) {
      throw this._createAttachmentErrorResult(a3, u2);
    }
  }
  async updateAttachment(e2, t3, s5) {
    await this.load();
    const { layer: a3 } = this;
    await H(a3, "editing");
    const i3 = e2.attributes[a3.objectIdField], n3 = a3.parsedUrl.path + "/" + i3 + "/updateAttachment", o3 = this._getLayerRequestOptions({ query: { attachmentId: t3 } }), u2 = this._getFormDataForAttachment(s5, o3.query);
    try {
      const e3 = await P(n3, { body: u2 });
      return R(e3.data.updateAttachmentResult);
    } catch (l) {
      throw this._createAttachmentErrorResult(i3, l);
    }
  }
  async applyEdits(e2, t3) {
    var _a, _b;
    await this.load();
    const { layer: a3 } = this;
    await H(a3, "editing");
    const n3 = "infoFor3D" in a3 ? a3.infoFor3D : null, o3 = null != n3, u2 = o3 || ((t3 == null ? void 0 : t3.globalIdUsed) ?? false), l = o3 ? await this._uploadMeshesAndGetAssetMapEditsJSON(e2) : null, c2 = ((_a = e2.addFeatures) == null ? void 0 : _a.map((e3) => m3(this.layer, e3, n3))) ?? [], d2 = (await Promise.all(c2)).filter(G), p2 = ((_b = e2.updateFeatures) == null ? void 0 : _b.map((e3) => m3(this.layer, e3, n3))) ?? [], y2 = (await Promise.all(p2)).filter(G), h3 = b3(this.layer, e2.deleteFeatures, u2);
    i(d2, y2, a3.spatialReference);
    const m4 = await f2(this.layer, e2), f3 = a3.capabilities.editing.supportsAsyncApplyEdits && o3, g4 = (t3 == null ? void 0 : t3.gdbVersion) || a3.gdbVersion, w2 = { gdbVersion: g4, rollbackOnFailure: t3 == null ? void 0 : t3.rollbackOnFailureEnabled, useGlobalIds: u2, returnEditMoment: t3 == null ? void 0 : t3.returnEditMoment, usePreviousEditMoment: t3 == null ? void 0 : t3.usePreviousEditMoment, async: f3 };
    await i2(this.layer.url, g4, true);
    const q = c(this.layer.url, g4 || null);
    if (await o2(a3.url, g4, a3.historicMoment)) throw new s2("feature-layer-source:historic-version", "Editing a historic version is not allowed");
    (t3 == null ? void 0 : t3.returnServiceEditsOption) ? (w2.edits = JSON.stringify([{ id: a3.layerId, adds: d2.length ? d2 : null, updates: y2.length ? y2 : null, deletes: h3.length ? h3 : null, attachments: m4, assetMaps: l }]), w2.returnServiceEditsOption = V2.toJSON(t3 == null ? void 0 : t3.returnServiceEditsOption), w2.returnServiceEditsInSourceSR = t3 == null ? void 0 : t3.returnServiceEditsInSourceSR) : (w2.adds = d2.length ? JSON.stringify(d2) : null, w2.updates = y2.length ? JSON.stringify(y2) : null, w2.deletes = h3.length ? u2 ? JSON.stringify(h3) : h3.join(",") : null, w2.attachments = m4 && JSON.stringify(m4), w2.assetMaps = null != l ? JSON.stringify(l) : void 0);
    const S = this._getLayerRequestOptions({ method: "post", query: w2 });
    q && (S.authMode = "immediate", S.query.returnEditMoment = true, S.query.sessionId = t);
    const E = (t3 == null ? void 0 : t3.returnServiceEditsOption) ? a3.url : a3.parsedUrl.path;
    let O;
    try {
      O = f3 ? await this._asyncApplyEdits(E + "/applyEdits", S) : await P(E + "/applyEdits", S);
    } catch (_) {
      if (!j(_)) throw _;
      S.authMode = "immediate", O = f3 ? await this._asyncApplyEdits(E + "/applyEdits", S) : await P(E + "/applyEdits", S);
    }
    return this._createEditsResult(O);
  }
  async deleteAttachments(e2, t3) {
    await this.load();
    const { layer: s5 } = this;
    await H(s5, "editing");
    const a3 = e2.attributes[s5.objectIdField], i3 = s5.parsedUrl.path + "/" + a3 + "/deleteAttachments";
    try {
      return (await P(i3, this._getLayerRequestOptions({ query: { attachmentIds: t3.join(",") }, method: "post" }))).data.deleteAttachmentResults.map(R);
    } catch (n3) {
      throw this._createAttachmentErrorResult(a3, n3);
    }
  }
  fetchRecomputedExtents(e2 = {}) {
    const t3 = e2.signal;
    return this.load({ signal: t3 }).then(async () => {
      const t4 = this._getLayerRequestOptions({ ...e2, query: { returnUpdates: true } }), { layerId: s5, url: a3 } = this.layer, { data: i3 } = await P(`${a3}/${s5}`, t4), { id: n3, extent: o3, fullExtent: u2, timeExtent: l } = i3, c2 = o3 || u2;
      return { id: n3, fullExtent: c2 && w.fromJSON(c2), timeExtent: l && p.fromJSON({ start: l[0], end: l[1] }) };
    });
  }
  async queryAttachments(e2, t3 = {}) {
    await this.load();
    const r3 = this._getLayerRequestOptions(t3);
    return this.queryTask.executeAttachmentQuery(e2, r3);
  }
  async queryFeatures(e2, t3) {
    var _a;
    await this.load();
    const r3 = await this.queryTask.execute(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
    if (((_a = e2.outStatistics) == null ? void 0 : _a.length) && r3.features.length) {
      const t4 = /* @__PURE__ */ new Map();
      if (r3.features.forEach((r4) => {
        var _a2;
        const s5 = r4.attributes;
        (_a2 = e2.outStatistics) == null ? void 0 : _a2.forEach(({ outStatisticFieldName: e3 }) => {
          if (e3) {
            const r5 = e3.toLowerCase();
            r5 && r5 in s5 && e3 !== r5 && (s5[e3] = s5[r5], delete s5[r5], t4.set(r5, e3));
          }
        });
      }), null != r3.fields) for (const e3 of r3.fields) {
        const r4 = t4.get(e3.name.toLowerCase());
        null != r4 && (e3.name = r4);
      }
    }
    return r3;
  }
  async queryFeaturesJSON(e2, t3) {
    return await this.load(), this.queryTask.executeJSON(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryObjectIds(e2, t3) {
    return await this.load(), this.queryTask.executeForIds(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryFeatureCount(e2, t3) {
    return await this.load(), this.queryTask.executeForCount(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryExtent(e2, t3) {
    return await this.load(), this.queryTask.executeForExtent(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryRelatedFeatures(e2, t3) {
    return await this.load(), this.queryTask.executeRelationshipQuery(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryRelatedFeaturesCount(e2, t3) {
    return await this.load(), this.queryTask.executeRelationshipQueryForCount(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryTopFeatures(e2, t3) {
    return await this.load(), this.queryTask.executeTopFeaturesQuery(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryAttributeBins(e2, t3) {
    return await this.load(), this.queryTask.executeAttributeBinsQuery(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryTopObjectIds(e2, t3) {
    return await this.load(), this.queryTask.executeForTopIds(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryTopExtents(e2, t3) {
    return await this.load(), this.queryTask.executeForTopExtents(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async queryTopCount(e2, t3) {
    return await this.load(), this.queryTask.executeForTopCount(e2, { ...t3, query: this._createRequestQueryOptions(t3) });
  }
  async fetchPublishingStatus() {
    if (!g(this.layer.url)) return "unavailable";
    const e2 = V(this.layer.url, "status"), t3 = await P(e2, { query: { f: "json" } });
    return $2.fromJSON(t3.data.status);
  }
  async uploadAssets(e2, t3) {
    const { uploadAssets: r3 } = await import("./uploadAssets-CR5MLJ3J.js");
    return r3(e2, { layer: this.layer, ongoingUploads: this._ongoingAssetUploads }, t3);
  }
  _handleLastEditsEventChange(e2) {
    var _a, _b, _c, _d;
    const t3 = this.layer;
    if (null == e2 || !("capabilities" in t3) || !("effectiveCapabilities" in t3)) return;
    if (!(!((_b = (_a = t3.capabilities) == null ? void 0 : _a.operations) == null ? void 0 : _b.supportsEditing) && ((_d = (_c = t3.effectiveCapabilities) == null ? void 0 : _c.operations) == null ? void 0 : _d.supportsEditing))) return;
    const r3 = t3.url;
    if (null == r3) return;
    "layerId" in t3 && V(r3, t3.layerId.toString());
    this._getOrCreateEditInterceptor(r3).before = (t4) => {
      const r4 = t4.requestOptions.method ?? "auto";
      if ("auto" === r4 || "head" === r4) {
        const r5 = t4.requestOptions.query ?? {};
        r5._ts = e2.getTime(), t4.requestOptions.query = r5;
      }
    };
  }
  _getOrCreateEditInterceptor(e2) {
    return null == this._editInterceptor && (this._editInterceptor = { urls: e2 }, s.request.internalInterceptors.push(this._editInterceptor)), this._editInterceptor;
  }
  _removeEditInterceptor() {
    null != this._editInterceptor && (F(s.request.internalInterceptors, this._editInterceptor), this._editInterceptor = null);
  }
  async _asyncApplyEdits(e2, t3) {
    const s5 = (await P(e2, t3)).data.statusUrl;
    for (; ; ) {
      const e3 = (await P(s5, { query: { f: "json" }, responseType: "json" })).data;
      switch (e3.status) {
        case "Completed":
          return P(e3.resultUrl, { query: { f: "json" }, responseType: "json" });
        case "CompletedWithErrors":
          throw new s2("async-applyEdits-failed", "asynchronous applyEdits call failed.");
        case "Failed ImportChanges":
        case "InProgress":
        case "Pending":
        case "ExportAttachments":
        case "ExportChanges":
        case "ExportingData":
        case "ExportingSnapshot":
        case "ImportAttachments":
        case "ProvisioningReplica":
        case "UnRegisteringReplica":
          break;
        default:
          throw new s2("async-applyEdits-failed", "asynchronous applyEdits call failed (undefined response status)");
      }
      await A(H2);
    }
  }
  _createRequestQueryOptions(e2) {
    const t3 = { ...this.layer.customParameters, token: this.layer.apiKey, ...e2 == null ? void 0 : e2.query };
    return this.layer.datesInUnknownTimezone && (t3.timeReferenceUnknownClient = true), t3;
  }
  async _fetchService(e2, t3) {
    if (!e2) {
      const s6 = {};
      has("featurelayer-advanced-symbols") && (s6.returnAdvancedSymbols = true), (t3 == null ? void 0 : t3.cacheBust) && (s6._ts = Date.now());
      const { data: a3 } = await P(this.layer.parsedUrl.path, this._getLayerRequestOptions({ query: s6, signal: t3 == null ? void 0 : t3.signal }));
      e2 = a3;
    }
    this.sourceJSON = await this._patchServiceJSON(e2, t3 == null ? void 0 : t3.signal);
    const s5 = e2.type;
    if (!this.supportedSourceTypes.has(s5)) throw new s2("feature-layer-source:unsupported-type", `Source type "${s5}" is not supported`);
  }
  async _patchServiceJSON(e2, t3) {
    var _a;
    if ("Table" !== e2.type && e2.geometryType && !((_a = e2 == null ? void 0 : e2.drawingInfo) == null ? void 0 : _a.renderer) && !e2.defaultSymbol) {
      const t4 = u(e2.geometryType).renderer;
      e("drawingInfo.renderer", t4, e2);
    }
    if ("esriGeometryMultiPatch" === e2.geometryType && e2.infoFor3D && (e2.geometryType = "mesh"), null == e2.extent) try {
      const { data: s5 } = await P(this.layer.url, this._getLayerRequestOptions({ signal: t3 }));
      s5.spatialReference && (e2.extent = { xmin: 0, ymin: 0, xmax: 0, ymax: 0, spatialReference: s5.spatialReference });
    } catch (s5) {
      a2(s5);
    }
    return e2;
  }
  async _ensureLatestMetadata(e2) {
    if (this.layer.userHasUpdateItemPrivileges && this.sourceJSON.cacheMaxAge > 0) return this._fetchService(null, { ...e2, cacheBust: true });
  }
  async _uploadMeshesAndGetAssetMapEditsJSON(e2) {
    const { addAssetFeatures: t3 } = e2;
    if (!(t3 == null ? void 0 : t3.length)) return null;
    if (await this._areAllAssetsAlreadyMapped(t3)) return null;
    const r3 = e2.addFeatures.filter((e3) => e3.geometry);
    if (t3.length !== r3.length + e2.updateFeatures.length) throw new s2("feature-layer-source:unsupported-mesh-edits", "Mixing attribute only edits with mesh geometry edits is not currently supported");
    const s5 = new Array(), a3 = /* @__PURE__ */ new Map();
    for (const i3 of t3) {
      const { geometry: e3 } = i3, { vertexSpace: t4 } = e3;
      if (t2(t4)) s5.push(e3);
      else {
        const t5 = e3.origin, { convertMeshVertexSpace: r4 } = await import("./convertMeshVertexSpace-UYTX5SH4.js"), n3 = await r4(e3, new n2({ origin: [t5.x, t5.y, t5.z ?? 0] }));
        a3.set(n3, e3), i3.geometry = n3, s5.push(n3);
      }
    }
    await this.uploadAssets(s5);
    for (const [i3, n3] of a3) n3.addExternalSources(i3.metadata.externalSources.items);
    return { adds: this._getAssetMapEditsJSON(t3), updates: [], deletes: [] };
  }
  _getAssetMapEditsJSON(e2) {
    const t3 = new Array(), r3 = this.layer.globalIdField, s5 = this.layer.parsedUrl;
    for (const a3 of e2) {
      const e3 = a3.geometry, { metadata: i3 } = e3, n3 = i3.getExternalSourcesOnService(s5), o3 = a3.getAttribute(r3);
      if (0 === n3.length) {
        n.getLogger(this).error(`Skipping feature ${o3}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);
        continue;
      }
      const { source: l } = n3.find(A3) ?? n3[0];
      for (const r4 of l) 1 === r4.parts.length ? t3.push({ globalId: r2(), parentGlobalId: o3, assetName: r4.assetName, assetHash: r4.parts[0].partHash, flags: [] }) : n.getLogger(this).error(`Skipping asset ${r4.assetName}. It does not have exactly one part, so we cannot map it to a feature.`);
    }
    return t3;
  }
  _createEditsResult(e2) {
    const t3 = e2.data, { layerId: r3 } = this.layer, s5 = [];
    let a3 = null;
    if (Array.isArray(t3)) for (const n3 of t3) s5.push({ id: n3.id, editedFeatures: n3.editedFeatures }), n3.id === r3 && (a3 = { addResults: n3.addResults ?? [], updateResults: n3.updateResults ?? [], deleteResults: n3.deleteResults ?? [], attachments: n3.attachments, editMoment: n3.editMoment });
    else a3 = t3;
    const i3 = y(a3);
    if (s5.length > 0) {
      i3.editedFeatureResults = [];
      for (const e3 of s5) {
        const { editedFeatures: t4 } = e3, r4 = (t4 == null ? void 0 : t4.spatialReference) ? new g2(t4.spatialReference) : null;
        i3.editedFeatureResults.push({ layerId: e3.id, editedFeatures: I2(t4, r4) });
      }
    }
    return i3;
  }
  _createAttachmentErrorResult(e2, t3) {
    var _a;
    const r3 = ((_a = t3.details.messages) == null ? void 0 : _a[0]) || t3.message, s5 = t3.details.httpStatus || t3.details.messageCode;
    return { objectId: e2, globalId: null, error: new s2("feature-layer-source:attachment-failure", r3, { code: s5 }) };
  }
  _getFormDataForAttachment(e2, t3) {
    const r3 = e2 instanceof FormData ? e2 : e2 && e2.elements ? new FormData(e2) : null;
    if (r3) for (const s5 in t3) {
      const e3 = t3[s5];
      null != e3 && (r3.set ? r3.set(s5, e3) : r3.append(s5, e3));
    }
    return r3;
  }
  _getLayerRequestOptions(e2 = {}) {
    const { layer: t3, layer: { parsedUrl: r3, gdbVersion: s5 } } = this;
    return { ...e2, query: { gdbVersion: s5, layer: "dynamicDataSource" in t3 && t3.dynamicDataSource ? JSON.stringify({ source: t3.dynamicDataSource }) : void 0, ...r3.query, f: "json", ...this._createRequestQueryOptions(e2) }, responseType: "json" };
  }
  async _areAllAssetsAlreadyMapped(e2) {
    const { layer: t3 } = this, { globalIdField: r3, parsedUrl: a3 } = t3, i3 = "infoFor3D" in t3 ? t3.infoFor3D : null;
    if (null == i3 || null == r3) return false;
    const n3 = h(i3);
    if (null == n3) return false;
    const o3 = V(a3.path, `../${n3.id}`), u2 = new Array();
    for (const s5 of e2) {
      if (!(s5.geometry.metadata.getExternalSourcesOnService(a3).length > 0)) return false;
      u2.push(s5);
    }
    const l = u2.map((e3) => e3.getAttribute(r3)).filter(G);
    if (0 === l.length) return false;
    const { assetMapFieldRoles: { parentGlobalId: c2, assetHash: d2 } } = i3, p2 = new b2({ where: `${c2} IN (${l.map((e3) => `'${e3}'`)})`, outFields: [d2, c2], returnGeometry: false }), y2 = await s4(o3, p2), { features: m4 } = y2;
    return 0 !== m4.length && !u2.some((e3) => {
      const t4 = e3.getAttribute(r3);
      if (!t4) return true;
      const { metadata: s5 } = e3.geometry, i4 = m4.filter((e4) => e4.getAttribute(c2) === t4);
      if (0 === i4.length) return true;
      const n4 = i4.map((e4) => e4.getAttribute(d2));
      return s5.getExternalSourcesOnService(a3).flatMap(({ source: e4 }) => e4.flatMap((e5) => e5.parts.map((e6) => e6.partHash))).some((e4) => n4.every((t5) => e4 !== t5));
    });
  }
};
r([m()], G2.prototype, "type", void 0), r([m({ constructOnly: true })], G2.prototype, "layer", void 0), r([m({ constructOnly: true })], G2.prototype, "supportedSourceTypes", void 0), r([m({ readOnly: true })], G2.prototype, "queryTask", null), G2 = r([a("esri.layers.graphics.sources.FeatureLayerSource")], G2);
var H2 = 1e3;
var B = G2;

export {
  B
};
//# sourceMappingURL=chunk-ITS2ETG6.js.map
