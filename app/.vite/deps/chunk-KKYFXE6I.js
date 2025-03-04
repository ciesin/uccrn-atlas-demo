import {
  a as a2
} from "./chunk-MOU4QRJJ.js";
import {
  d as d2
} from "./chunk-B344ZGRN.js";
import {
  i as i3
} from "./chunk-NVR47E5B.js";
import {
  e as e2
} from "./chunk-YIZAIKLK.js";
import {
  e,
  t as t2
} from "./chunk-6MP23PR5.js";
import {
  Ye
} from "./chunk-JT5MNXX3.js";
import {
  r as r4
} from "./chunk-3GIIPEHS.js";
import {
  c,
  c2,
  g as g3,
  h,
  i as i2,
  l as l2,
  t
} from "./chunk-6WASKRTP.js";
import {
  S as S3
} from "./chunk-JLW377TH.js";
import {
  b as b3
} from "./chunk-AI2O2GKK.js";
import {
  b as b2
} from "./chunk-5X74MKXM.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  r as r2
} from "./chunk-ZYOZHQFS.js";
import {
  l,
  r as r3
} from "./chunk-XWXWIBVO.js";
import {
  S as S2
} from "./chunk-IP4HFFRO.js";
import {
  m as m2
} from "./chunk-CHL75CEP.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  d2 as d
} from "./chunk-UFBX3XSC.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  b,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/networks/support/TopologyValidationJobInfo.js
var n2 = i()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var l3 = class extends i3 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t3) {
    const s3 = { ...t3, query: { f: "json" } }, { data: r5 } = await P(this.statusUrl, s3);
    return this.read(r5), this.editsResolver && this.editsResolver.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], exceededTransferLimit: true, historicMoment: null }), this;
  }
  async waitForJobCompletion(t3 = {}) {
    const { interval: e3 = 1e3, statusCallback: s3 } = t3;
    return new Promise((t4, o2) => {
      this._clearTimer();
      const i6 = setInterval(() => {
        this._timer || o2(u()), this.checkJobStatus().then((e4) => {
          const { status: r5 } = e4;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t4(this);
              break;
            case "job-waiting":
            case "job-executing":
              s3 && s3(this);
          }
        }, (t5) => {
          this._clearTimer(), o2(t5);
        });
      }, e3);
      this._timer = i6;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
r([m()], l3.prototype, "editsResolver", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "statusUrl", void 0), r([r2(n2)], l3.prototype, "status", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t3, e3) => {
  e3.submissionTime = t3 ? t3.getTime() : null;
} } } })], l3.prototype, "submissionTime", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t3, e3) => {
  e3.lastUpdatedTime = t3 ? t3.getTime() : null;
} } } })], l3.prototype, "lastUpdatedTime", void 0), l3 = r([a("esri.networks.support.TopologyValidationJobInfo")], l3);
var m3 = l3;

// node_modules/@arcgis/core/networks/support/utils.js
async function l4(e3, t3) {
  if ("Utility Network Layer" === e3) {
    const { default: e4 } = await import("./UtilityNetwork-DDOQMHIA.js");
    return new e4({ layerUrl: t3 });
  }
  return null;
}
async function i4(r5) {
  var _a;
  let o2 = "portalItem" in r5 ? r5 : { portalItem: r5 };
  !o2.portalItem || o2.portalItem instanceof S2 || (o2 = { ...o2, portalItem: new S2(o2.portalItem) });
  const n5 = o2.portalItem;
  if (await n5.load(), "Feature Service" !== n5.type) throw new s("portal:unknown-item-type", "Unknown item type '${type}'", { type: n5.type });
  const i6 = n5.url, s3 = await P(i6, { responseType: "json", query: { f: "json" } }), p4 = "Network Layer";
  if ((_a = s3.data.type) == null ? void 0 : _a.includes(p4)) return l4(s3.data.type, i6);
  if (s3.data.layers) {
    const e3 = s3.data.layers.find((e4) => e4.type.includes(p4));
    if (e3) {
      const t3 = `${i6}/${e3.id}`;
      return l4(e3.type, t3);
    }
  }
  return null;
}

// node_modules/@arcgis/core/networks/Network.js
var U = class extends S3(m2) {
  static fromPortalItem(e3) {
    return i4(e3);
  }
  constructor(e3) {
    super(e3), this.id = null, this.title = null, this.layerUrl = null, this.dataElement = null, this.fullExtent = null, this.spatialReference = null, this.type = null, this.sourceJSON = null, this.gdbVersion = null, this.historicMoment = null, this._sourceIdByLayerId = /* @__PURE__ */ new Map(), this._layerIdBySourceId = /* @__PURE__ */ new Map(), this._applyEditsHandler = (e4) => {
      const { serviceUrl: t3, gdbVersion: r5, result: o2 } = e4, s3 = t3 === this.featureServiceUrl, i6 = g3(t3, r5, this.gdbVersion);
      s3 && i6 && o2.then((e5) => {
        c(t3, r5) && (this.historicMoment = e5.historicMoment);
      });
    }, this._updateMomentHandler = (e4) => {
      const { serviceUrl: t3, gdbVersion: r5, moment: o2 } = e4, s3 = t3 === this.featureServiceUrl, i6 = g3(t3, r5, this.gdbVersion);
      s3 && i6 && (this.historicMoment = o2);
    }, this.when().then(() => {
      this.addHandles([l2(this._applyEditsHandler), h(this._updateMomentHandler)]);
    }, () => {
    });
  }
  initialize() {
    this.when().catch((e3) => {
      b(e3) || n.getLogger(this).error("#load()", `Failed to load layer (title: '${this.title ?? "no title"}', id: '${this.id ?? "no id"}')`, { error: e3 });
    });
  }
  get datasetName() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.name) ?? null;
  }
  get owner() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.userIdentity) ?? null;
  }
  get schemaGeneration() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.schemaGeneration) ?? null;
  }
  get parsedUrl() {
    return I(this.layerUrl);
  }
  get featureServiceUrl() {
    return d(this.parsedUrl.path).url.path;
  }
  get networkServiceUrl() {
    return this.featureServiceUrl.replace(/\/FeatureServer/i, "/UtilityNetworkServer");
  }
  get layerId() {
    return d(this.parsedUrl.path).sublayer;
  }
  get networkSystemLayers() {
    return null;
  }
  async load(e3) {
    return this.addResolvingPromise(this._fetchDataElement(this.featureServiceUrl, this.layerId.toString(), e3)), this.addResolvingPromise(this._fetchLayerMetaData(this.layerUrl, e3)), this;
  }
  getLayerIdBySourceId(e3) {
    if (!this.dataElement) return null;
    const t3 = this._layerIdBySourceId.get(e3);
    if (null != t3) return t3;
    const r5 = this.dataElement.domainNetworks, o2 = this._traverseNetworkSources(r5, this._layerIdBySourceId, "sourceId", "layerId", e3);
    return o2 >= 0 ? o2 : null;
  }
  getSourceIdByLayerId(e3) {
    if (!this.dataElement) return null;
    const t3 = this._sourceIdByLayerId.get(e3);
    if (null != t3) return t3;
    const r5 = this.dataElement.domainNetworks, o2 = this._traverseNetworkSources(r5, this._sourceIdByLayerId, "layerId", "sourceId", e3);
    return o2 >= 0 ? o2 : null;
  }
  getObjectIdsFromElements(e3) {
    const t3 = [], r5 = /* @__PURE__ */ new Map();
    for (const s3 of e3) {
      const e4 = this.getLayerIdBySourceId(s3.networkSourceId);
      if (null == e4) continue;
      let t4 = r5.get(e4);
      void 0 === t4 && (t4 = []), t4.push(s3.objectId), r5.set(e4, t4);
    }
    const o2 = this.featureServiceUrl;
    return r5.forEach((e4, r6) => t3.push({ layerUrl: `${o2}/${r6}`, objectIds: e4 })), t3;
  }
  async queryNamedTraceConfigurations(e3, t3) {
    var _a;
    const [{ queryNamedTraceConfigurations: r5 }, { default: o2 }] = await Promise.all([import("./queryNamedTraceConfigurations-CEGJXCR7.js"), import("./QueryNamedTraceConfigurationsParameters-5DMSNUGF.js")]), s3 = this.networkServiceUrl, i6 = o2.from(e3);
    return (_a = await r5(s3, i6, { ...t3 })) == null ? void 0 : _a.namedTraceConfigurations;
  }
  async validateTopology(e3, t3) {
    var _a, _b, _c;
    if (!e3.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    const [{ validateNetworkTopology: r5 }, { default: s3 }] = await Promise.all([import("./validateNetworkTopology-K4IZ3Z5O.js"), import("./ValidateNetworkTopologyParameters-T3WPX2JP.js")]), i6 = s3.from(e3);
    c(this.featureServiceUrl, this.gdbVersion || null) ? (i6.sessionID = t, await i2(this.featureServiceUrl, this.gdbVersion, true)) : i6.sessionID = null, i6.gdbVersion = this.gdbVersion;
    const a4 = this.networkServiceUrl, n5 = this.featureServiceUrl, l6 = c2(n5, null, this.gdbVersion, true), d5 = await r5(a4, i6, { ...t3 });
    if (d5 == null ? void 0 : d5.serviceEdits) {
      const e4 = [];
      for (const t4 of d5.serviceEdits) {
        const { editedFeatures: r6 } = t4, o2 = (r6 == null ? void 0 : r6.spatialReference) ? new g2(r6.spatialReference) : null;
        e4.push({ layerId: t4.layerId, editedFeatures: { adds: ((_a = r6 == null ? void 0 : r6.adds) == null ? void 0 : _a.map((e5) => k(e5, o2))) || [], updates: ((_b = r6 == null ? void 0 : r6.updates) == null ? void 0 : _b.map((e5) => ({ original: k(e5[0], o2), current: k(e5[1], o2) }))) || [], deletes: ((_c = r6 == null ? void 0 : r6.deletes) == null ? void 0 : _c.map((e5) => k(e5, o2))) || [], spatialReference: o2 } });
      }
      l6.resolve({ edits: null, addedFeatures: [], updatedFeatures: [], deletedFeatures: [], addedAttachments: [], updatedAttachments: [], deletedAttachments: [], editedFeatures: e4, exceededTransferLimit: false, historicMoment: d5.moment });
    }
    return d5;
  }
  async submitTopologyValidationJob(e3, t3) {
    let s3 = null;
    if (!e3.validateArea) throw new s("network:undefined-validateArea", "the network must have validateArea defined in the validate network topology parameters.");
    if (!this.gdbVersion) {
      const e4 = this.layerUrl.replace(/\/FeatureServer/i, "/VersionManagementServer").replace(/\/\d*$/, "");
      s3 = (await P(e4, { responseType: "json", query: { f: "json" } })).data.defaultVersionName;
    }
    const [{ submitValidateNetworkTopologyJob: i6 }, { default: a4 }] = await Promise.all([import("./validateNetworkTopology-K4IZ3Z5O.js"), import("./ValidateNetworkTopologyParameters-T3WPX2JP.js")]), n5 = a4.from(e3);
    c(this.featureServiceUrl, this.gdbVersion || null) ? (n5.sessionID = t, await i2(this.featureServiceUrl, this.gdbVersion, true)) : n5.sessionID = null, n5.gdbVersion = this.gdbVersion || s3;
    const l6 = this.networkServiceUrl, d5 = this.featureServiceUrl ? c2(this.featureServiceUrl, null, this.gdbVersion, true) : void 0, u2 = await i6(l6, n5, { ...t3 });
    return new m3({ statusUrl: u2, editsResolver: d5 });
  }
  getSourceTypeById(e3) {
    if (!this.dataElement) return null;
    for (const t3 of this.dataElement.domainNetworks) for (const r5 of [t3.edgeSources ?? [], t3.junctionSources ?? []]) for (const o2 of r5) if (o2.sourceId === e3) return r5 === t3.edgeSources ? "edge" : "junction";
    return null;
  }
  _traverseNetworkSources(e3, t3, r5, o2, s3) {
    for (const i6 of e3) for (const e4 of [i6.edgeSources ?? [], i6.junctionSources ?? []]) for (const i7 of e4) if (i7[r5] === s3) return t3.set(s3, i7[o2]), i7[o2];
    return -1;
  }
  async _fetchLayerMetaData(e3, t3) {
    const o2 = await P(e3, { responseType: "json", query: { f: "json" }, ...t3 });
    this.sourceJSON = o2.data, this.read(o2.data, { origin: "service" });
  }
  async _fetchDataElement(e3, t3, o2) {
    if (this.dataElement) return;
    const s3 = await P(`${e3}/queryDataElements`, { responseType: "json", query: { layers: JSON.stringify([t3]), f: "json" }, ...o2 }).then((e4) => {
      var _a;
      return (_a = e4.data.layerDataElements) == null ? void 0 : _a[0];
    });
    s3 && this.read(s3, { origin: "service" });
  }
};
function k(e3, r5) {
  return new b2({ attributes: e3.attributes, geometry: f({ ...e3.geometry, spatialReference: r5 }) });
}
r([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } }, service: { read: true } }, read: false } })], U.prototype, "id", void 0), r([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: true, write: { isRequired: true } }, service: { read: { source: "name" } } }, read: false } })], U.prototype, "title", void 0), r([m({ type: String, nonNullable: true, json: { origins: { "web-map": { read: { source: "url" }, write: { target: "url", isRequired: true } } }, read: false } })], U.prototype, "layerUrl", void 0), r([m({ type: Object, json: { origins: { service: { read: true } }, read: false } })], U.prototype, "dataElement", void 0), r([m({ type: w, json: { origins: { service: { read: { source: "extent" } } }, read: false } })], U.prototype, "fullExtent", void 0), r([m({ type: g2, json: { origins: { service: { read: { source: "extent.spatialReference" } } }, read: false } })], U.prototype, "spatialReference", void 0), r([m({ type: ["utility", "trace"], readOnly: true, json: { read: false, write: false } })], U.prototype, "type", void 0), r([m({ readOnly: true })], U.prototype, "datasetName", null), r([m({ readOnly: true })], U.prototype, "owner", null), r([m({ readOnly: true })], U.prototype, "schemaGeneration", null), r([m({ readOnly: true })], U.prototype, "parsedUrl", null), r([m({ readOnly: true })], U.prototype, "featureServiceUrl", null), r([m({ readOnly: true })], U.prototype, "networkServiceUrl", null), r([m({ readOnly: true })], U.prototype, "layerId", null), r([m()], U.prototype, "sourceJSON", void 0), r([m({ readOnly: true })], U.prototype, "networkSystemLayers", null), r([m()], U.prototype, "gdbVersion", void 0), r([m({ type: Date })], U.prototype, "historicMoment", void 0), U = r([a("esri.networks.Network")], U);
var N = U;

// node_modules/@arcgis/core/networks/RulesTable.js
var d4 = class extends S.JSONSupportMixin(m2) {
  constructor(e3) {
    super(e3), this.rulesCategorized = { attachment: [], containment: [], connectivity: [] }, this.request = P;
  }
  initialize() {
  }
  async load(e3) {
    const r5 = this.rulesLayer.load(e3).then(() => this._initializeRulesTable());
    return this.addResolvingPromise(r5), this;
  }
  getFeaturesCanAssociateWithClause(e3, r5, t3) {
    return this._getWhereClauseForCompatibleFeatures(e3, r5, t3);
  }
  getFeaturesCanAssociateWith(e3, r5, t3) {
    return null == this._getFeatureSourceLayerId(e3) ? [] : r5.filter((r6) => this.canAssociateFeatures(e3, r6, t3));
  }
  canAssociateFeatures(e3, r5, t3) {
    const [o2, s3] = this._getFeatureAssetCodes(e3), u2 = this._getFeatureSourceLayerId(e3), [a4, n5] = this._getFeatureAssetCodes(r5), i6 = this._getFeatureSourceLayerId(r5);
    return null != u2 && null != i6 && t3.some((e4) => {
      const { type: r6, direction: t4 } = e4;
      return this._getRulesForAssociationType(r6).some((e5) => {
        const d5 = this._getRuleFieldValuesForAssociation(e5, r6, t4);
        return d5 == null ? void 0 : d5.some((e6) => u2 === (e6 == null ? void 0 : e6.ruleLayerIdForSource) && o2 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForSource) && s3 === (e6 == null ? void 0 : e6.ruleAssetTypeCodeForSource) && i6 === (e6 == null ? void 0 : e6.ruleLayerIdForTarget) && a4 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForTarget) && n5 === (e6 == null ? void 0 : e6.ruleAssetTypeCodeForTarget));
      });
    });
  }
  getLayersCanAssociateWith(e3, r5, t3) {
    return null == this._getFeatureSourceLayerId(e3) ? [] : r5.filter((r6) => this.canAssociateFeatureToLayer(e3, r6, t3));
  }
  canAssociateFeatureToLayer(e3, r5, t3) {
    const o2 = l(r5) ? r5.parent : r5;
    if (!o2) return false;
    const s3 = o2.layerId, u2 = l(r5) ? r5.subtypeCode : null, [n5, i6] = this._getFeatureAssetCodes(e3), d5 = this._getFeatureSourceLayerId(e3);
    return null != d5 && t3.some((e4) => {
      const { type: r6, direction: t4 } = e4;
      return this._getRulesForAssociationType(r6).some((e5) => {
        const o3 = this._getRuleFieldValuesForAssociation(e5, r6, t4);
        return o3 == null ? void 0 : o3.some((e6) => d5 === (e6 == null ? void 0 : e6.ruleLayerIdForSource) && n5 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForSource) && i6 === (e6 == null ? void 0 : e6.ruleAssetTypeCodeForSource) && s3 === (e6 == null ? void 0 : e6.ruleLayerIdForTarget) && (null == u2 || u2 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForTarget)));
      });
    });
  }
  getFeatureSQL(e3, r5) {
    var _a, _b;
    const t3 = e3.layerId.toString(), o2 = (_a = e3.fieldsIndex) == null ? void 0 : _a.normalizeFieldName("assetGroup"), s3 = (_b = e3.fieldsIndex) == null ? void 0 : _b.normalizeFieldName("assetType"), u2 = o2 ? r5.attributes[o2] : null, a4 = s3 ? r5.attributes[s3] : null, n5 = this.rulesHash[t3];
    if (n5) {
      const e4 = n5.assetGroupHash[u2];
      if (e4) {
        return e4.assetTypeHash[a4] || null;
      }
    }
    return null;
  }
  async _initializeRulesTable() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
    const e3 = {};
    let r5;
    !function(e4) {
      e4[e4.from = 0] = "from", e4[e4.to = 1] = "to", e4[e4.via = 2] = "via";
    }(r5 || (r5 = {}));
    const t3 = [{ networkSourceId: "fromNetworkSource", assetGroupId: "fromAssetGroup", assetTypeId: "fromAssetType" }, { networkSourceId: "toNetworkSource", assetGroupId: "toAssetGroup", assetTypeId: "toAssetType" }, { networkSourceId: "viaNetworkSource", assetGroupId: "viaAssetGroup", assetTypeId: "viaAssetType" }];
    this.rulesCategorized = { attachment: [], containment: [], connectivity: [] };
    for (const o2 of this.rules) {
      if (o2.ruleType === t2.RTAttachment) {
        this.rulesCategorized.attachment.push(o2);
        continue;
      }
      if (o2.ruleType === t2.RTContainment) {
        this.rulesCategorized.containment.push(o2);
        continue;
      }
      if (o2.ruleType === t2.RTJunctionJunctionConnectivity) {
        this.rulesCategorized.connectivity.push(o2);
        continue;
      }
      this.rulesCategorized.connectivity.push(o2);
      let s3 = [[r5.from, r5.to], [r5.to, r5.from]];
      o2.ruleType === t2.RTEdgeJunctionEdgeConnectivity && (s3 = [[r5.from, r5.via], [r5.via, r5.from], [r5.to, r5.via], [r5.via, r5.to]]);
      for (const u2 of s3) {
        const s4 = u2.shift(), a4 = u2.shift();
        let n5 = false;
        switch (o2.ruleType) {
          case t2.RTEdgeJunctionEdgeConnectivity:
            n5 = s4 === r5.from || s4 === r5.to;
            break;
          case t2.RTJunctionEdgeConnectivity:
            n5 = s4 === r5.to;
        }
        const d5 = t3[s4], c4 = ((_a = o2[d5.networkSourceId]) == null ? void 0 : _a.layerId.toString()) ?? "", l6 = (_c = (_b = o2[d5.assetGroupId]) == null ? void 0 : _b.assetGroupCode) == null ? void 0 : _c.toString(), p4 = o2[d5.assetTypeId], y = (_d = p4 == null ? void 0 : p4.assetTypeCode) == null ? void 0 : _d.toString(), T2 = t3[a4], C = ((_e = o2[T2.networkSourceId]) == null ? void 0 : _e.layerId.toString()) ?? "", A = (_g = (_f = o2[T2.assetGroupId]) == null ? void 0 : _f.assetGroupCode) == null ? void 0 : _g.toString(), F = o2[T2.assetTypeId], g4 = (_h = F == null ? void 0 : F.assetTypeCode) == null ? void 0 : _h.toString(), m5 = e3[c4] ?? { assetGroupHash: {} };
        if (!(l6 && y && A && g4)) continue;
        const S4 = m5.assetGroupHash[l6] ?? { assetTypeHash: {} }, f2 = S4.assetTypeHash[y] ?? {};
        if (f2[C] = f2[C] ?? {}, n5) {
          f2[c4] = f2[c4] ?? {};
          const e4 = `(assetgroup = ${l6} AND assettype = ${y})`;
          "esriNECPEndVertex" === (F == null ? void 0 : F.connectivityPolicy) ? f2[c4].endVertex = ((_i = f2[c4]) == null ? void 0 : _i.endVertex) ? `${f2[c4].endVertex}` : `${e4}` : f2[c4].anyVertex = f2[c4].anyVertex ? `${f2[c4].anyVertex}` : `${e4}`;
        }
        const G = `(assetgroup = ${A} AND assettype = ${g4})`;
        "esriNECPEndVertex" === (F == null ? void 0 : F.connectivityPolicy) ? f2[C].endVertex = ((_j = f2[C]) == null ? void 0 : _j.endVertex) ? `${f2[C].endVertex} OR ${G}` : `${G}` : f2[C].anyVertex = ((_k = f2[C]) == null ? void 0 : _k.anyVertex) ? `${f2[C].anyVertex} OR ${G}` : `${G}`, S4.assetTypeHash[y] = f2, m5.assetGroupHash[l6] = S4, e3[c4] = m5;
      }
    }
    this._set("rulesHash", e3);
  }
  _getRuleFieldValuesForAssociation(e3, r5, t3 = "from") {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __, _$, _aa, _ba, _ca, _da, _ea, _fa;
    switch (r5) {
      case "attachment":
      case "containment":
        return "from" === t3 ? [{ ruleLayerIdForSource: (_a = e3.fromNetworkSource) == null ? void 0 : _a.layerId, ruleAssetGroupCodeForSource: (_b = e3.fromAssetGroup) == null ? void 0 : _b.assetGroupCode, ruleAssetTypeCodeForSource: (_c = e3.fromAssetType) == null ? void 0 : _c.assetTypeCode, ruleLayerIdForTarget: (_d = e3.toNetworkSource) == null ? void 0 : _d.layerId, ruleAssetGroupCodeForTarget: (_e = e3.toAssetGroup) == null ? void 0 : _e.assetGroupCode, ruleAssetTypeCodeForTarget: (_f = e3.toAssetType) == null ? void 0 : _f.assetTypeCode }] : [{ ruleLayerIdForSource: (_g = e3.toNetworkSource) == null ? void 0 : _g.layerId, ruleAssetGroupCodeForSource: (_h = e3.toAssetGroup) == null ? void 0 : _h.assetGroupCode, ruleAssetTypeCodeForSource: (_i = e3.toAssetType) == null ? void 0 : _i.assetTypeCode, ruleLayerIdForTarget: (_j = e3.fromNetworkSource) == null ? void 0 : _j.layerId, ruleAssetGroupCodeForTarget: (_k = e3.fromAssetGroup) == null ? void 0 : _k.assetGroupCode, ruleAssetTypeCodeForTarget: (_l = e3.fromAssetType) == null ? void 0 : _l.assetTypeCode }];
      case "connectivity":
      case "junction-junction-connectivity":
        return [{ ruleLayerIdForSource: (_m = e3.fromNetworkSource) == null ? void 0 : _m.layerId, ruleAssetGroupCodeForSource: (_n = e3.fromAssetGroup) == null ? void 0 : _n.assetGroupCode, ruleAssetTypeCodeForSource: (_o = e3.fromAssetType) == null ? void 0 : _o.assetTypeCode, ruleLayerIdForTarget: (_p = e3.toNetworkSource) == null ? void 0 : _p.layerId, ruleAssetGroupCodeForTarget: (_q = e3.toAssetGroup) == null ? void 0 : _q.assetGroupCode, ruleAssetTypeCodeForTarget: (_r = e3.toAssetType) == null ? void 0 : _r.assetTypeCode }, { ruleLayerIdForSource: (_s = e3.toNetworkSource) == null ? void 0 : _s.layerId, ruleAssetGroupCodeForSource: (_t = e3.toAssetGroup) == null ? void 0 : _t.assetGroupCode, ruleAssetTypeCodeForSource: (_u = e3.toAssetType) == null ? void 0 : _u.assetTypeCode, ruleLayerIdForTarget: (_v = e3.fromNetworkSource) == null ? void 0 : _v.layerId, ruleAssetGroupCodeForTarget: (_w = e3.fromAssetGroup) == null ? void 0 : _w.assetGroupCode, ruleAssetTypeCodeForTarget: (_x = e3.fromAssetType) == null ? void 0 : _x.assetTypeCode }];
      case "junction-edge-from-connectivity":
      case "junction-edge-midspan-connectivity":
      case "junction-edge-to-connectivity":
        return e3.ruleType === t2.RTEdgeJunctionEdgeConnectivity ? [{ ruleLayerIdForSource: (_y = e3.fromNetworkSource) == null ? void 0 : _y.layerId, ruleAssetGroupCodeForSource: (_z = e3.fromAssetGroup) == null ? void 0 : _z.assetGroupCode, ruleAssetTypeCodeForSource: (_A = e3.fromAssetType) == null ? void 0 : _A.assetTypeCode, ruleLayerIdForTarget: (_B = e3.viaNetworkSource) == null ? void 0 : _B.layerId, ruleAssetGroupCodeForTarget: (_C = e3.viaAssetGroup) == null ? void 0 : _C.assetGroupCode, ruleAssetTypeCodeForTarget: (_D = e3.viaAssetType) == null ? void 0 : _D.assetTypeCode }, { ruleLayerIdForSource: (_E = e3.viaNetworkSource) == null ? void 0 : _E.layerId, ruleAssetGroupCodeForSource: (_F = e3.viaAssetGroup) == null ? void 0 : _F.assetGroupCode, ruleAssetTypeCodeForSource: (_G = e3.viaAssetType) == null ? void 0 : _G.assetTypeCode, ruleLayerIdForTarget: (_H = e3.fromNetworkSource) == null ? void 0 : _H.layerId, ruleAssetGroupCodeForTarget: (_I = e3.fromAssetGroup) == null ? void 0 : _I.assetGroupCode, ruleAssetTypeCodeForTarget: (_J = e3.fromAssetType) == null ? void 0 : _J.assetTypeCode }, { ruleLayerIdForSource: (_K = e3.toNetworkSource) == null ? void 0 : _K.layerId, ruleAssetGroupCodeForSource: (_L = e3.toAssetGroup) == null ? void 0 : _L.assetGroupCode, ruleAssetTypeCodeForSource: (_M = e3.toAssetType) == null ? void 0 : _M.assetTypeCode, ruleLayerIdForTarget: (_N = e3.viaNetworkSource) == null ? void 0 : _N.layerId, ruleAssetGroupCodeForTarget: (_O = e3.viaAssetGroup) == null ? void 0 : _O.assetGroupCode, ruleAssetTypeCodeForTarget: (_P = e3.viaAssetType) == null ? void 0 : _P.assetTypeCode }, { ruleLayerIdForSource: (_Q = e3.viaNetworkSource) == null ? void 0 : _Q.layerId, ruleAssetGroupCodeForSource: (_R = e3.viaAssetGroup) == null ? void 0 : _R.assetGroupCode, ruleAssetTypeCodeForSource: (_S = e3.viaAssetType) == null ? void 0 : _S.assetTypeCode, ruleLayerIdForTarget: (_T = e3.toNetworkSource) == null ? void 0 : _T.layerId, ruleAssetGroupCodeForTarget: (_U = e3.toAssetGroup) == null ? void 0 : _U.assetGroupCode, ruleAssetTypeCodeForTarget: (_V = e3.toAssetType) == null ? void 0 : _V.assetTypeCode }] : [{ ruleLayerIdForSource: (_W = e3.fromNetworkSource) == null ? void 0 : _W.layerId, ruleAssetGroupCodeForSource: (_X = e3.fromAssetGroup) == null ? void 0 : _X.assetGroupCode, ruleAssetTypeCodeForSource: (_Y = e3.fromAssetType) == null ? void 0 : _Y.assetTypeCode, ruleLayerIdForTarget: (_Z = e3.toNetworkSource) == null ? void 0 : _Z.layerId, ruleAssetGroupCodeForTarget: (__ = e3.toAssetGroup) == null ? void 0 : __.assetGroupCode, ruleAssetTypeCodeForTarget: (_$ = e3.toAssetType) == null ? void 0 : _$.assetTypeCode }, { ruleLayerIdForSource: (_aa = e3.toNetworkSource) == null ? void 0 : _aa.layerId, ruleAssetGroupCodeForSource: (_ba = e3.toAssetGroup) == null ? void 0 : _ba.assetGroupCode, ruleAssetTypeCodeForSource: (_ca = e3.toAssetType) == null ? void 0 : _ca.assetTypeCode, ruleLayerIdForTarget: (_da = e3.fromNetworkSource) == null ? void 0 : _da.layerId, ruleAssetGroupCodeForTarget: (_ea = e3.fromAssetGroup) == null ? void 0 : _ea.assetGroupCode, ruleAssetTypeCodeForTarget: (_fa = e3.fromAssetType) == null ? void 0 : _fa.assetTypeCode }];
      default:
        return [];
    }
  }
  _getWhereClauseForCompatibleFeatures(e3, r5, t3) {
    const o2 = /* @__PURE__ */ new Map(), [s3, u2] = this._getAssetFieldNames(e3.sourceLayer), [n5, i6] = this._getFeatureAssetCodes(e3), d5 = this._getFeatureSourceLayerId(e3), c4 = l(r5) ? r5.parent : r5, l6 = l(r5) ? r5.subtypeCode : null;
    t3.forEach((e4) => {
      const { type: r6, direction: t4 } = e4;
      this._getRulesForAssociationType(r6).forEach((e5) => {
        this._getRuleFieldValuesForAssociation(e5, r6, t4).forEach((e6) => {
          if (null != e6.ruleAssetGroupCodeForTarget && null != e6.ruleAssetTypeCodeForTarget && d5 === (e6 == null ? void 0 : e6.ruleLayerIdForSource) && n5 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForSource) && i6 === (e6 == null ? void 0 : e6.ruleAssetTypeCodeForSource) && c4.layerId === (e6 == null ? void 0 : e6.ruleLayerIdForTarget) && (null == l6 || l6 === (e6 == null ? void 0 : e6.ruleAssetGroupCodeForTarget))) {
            const r7 = o2.get(e6.ruleAssetGroupCodeForTarget) ?? /* @__PURE__ */ new Set();
            r7.add(e6.ruleAssetTypeCodeForTarget), o2.set(e6.ruleAssetGroupCodeForTarget, r7);
          }
        });
      });
    });
    let p4 = [];
    return this._mergeAssetCodes(o2).forEach((e4, r6) => p4.push(`${s3} IN (${r6}) AND ${u2} IN (${Array.from(e4).sort().join(", ")})`)), p4.length > 1 && (p4 = p4.map((e4) => `(${e4})`)), p4.join(" OR ");
  }
  _getRulesForAssociationType(e3) {
    const { rulesCategorized: r5 } = this;
    switch (e3) {
      case "attachment":
        return r5.attachment;
      case "containment":
        return r5.containment;
      case "connectivity":
      case "junction-junction-connectivity":
        return r5.connectivity.filter((e4) => e4.ruleType === t2.RTJunctionJunctionConnectivity);
      case "junction-edge-from-connectivity":
      case "junction-edge-midspan-connectivity":
      case "junction-edge-to-connectivity":
        return r5.connectivity.filter((e4) => e4.ruleType === t2.RTJunctionEdgeConnectivity || e4.ruleType === t2.RTEdgeJunctionEdgeConnectivity);
      default:
        return [];
    }
  }
  _getFeatureSourceLayerId(e3) {
    var _a;
    const { sourceLayer: r5 } = e3;
    let t3;
    return r3(r5) ? t3 = r5.layerId : l(r5) && (t3 = (_a = r5.parent) == null ? void 0 : _a.layerId), t3 ?? null;
  }
  _getAssetFieldNames(e3) {
    if (!e3 || !("fieldsIndex" in e3)) return [null, null];
    return [e3.fieldsIndex.normalizeFieldName("assetGroup") ?? null, e3.fieldsIndex.normalizeFieldName("assetType") ?? null];
  }
  _getFeatureAssetCodes(e3) {
    const [r5, t3] = this._getAssetFieldNames(e3.sourceLayer);
    return [r5 ? e3.attributes[r5] : null, t3 ? e3.attributes[t3] : null];
  }
  _areSetsEqual(e3, r5) {
    if (e3.size !== r5.size) return false;
    for (const t3 of e3) if (!r5.has(t3)) return false;
    return true;
  }
  _mergeAssetCodes(e3) {
    const r5 = /* @__PURE__ */ new Map(), t3 = /* @__PURE__ */ new Set();
    for (const [o2, s3] of e3) {
      const u2 = /* @__PURE__ */ new Set([o2]);
      for (const [r6, n5] of e3) o2 !== r6 && !t3.has(r6) && this._areSetsEqual(s3, n5) && (u2.add(r6), t3.add(r6));
      const a4 = Array.from(u2).sort().join(", ");
      r5.set(a4, s3);
    }
    return r5;
  }
};
r([m({ constructOnly: true })], d4.prototype, "rulesLayer", void 0), r([m({ constructOnly: true })], d4.prototype, "rules", void 0), r([m({ readOnly: true })], d4.prototype, "rulesHash", void 0), r([m()], d4.prototype, "rulesCategorized", void 0), r([m({ constructOnly: true })], d4.prototype, "request", void 0), d4 = r([a("esri.networks.RulesTable")], d4);
var c3 = d4;

// node_modules/@arcgis/core/networks/support/NetworkSystemLayers.js
var i5 = class extends g {
  constructor(s3) {
    super(s3), this.rulesTableId = null, this.rulesTableUrl = null, this.subnetworksTableId = null, this.subnetworksTableUrl = null, this.dirtyAreasLayerId = null, this.dirtyAreasLayerUrl = null, this.associationsTable = null, this.associationsTableId = null, this.associationsTableUrl = null;
  }
  destroy() {
    var _a;
    (_a = this.associationsTable) == null ? void 0 : _a.destroy();
  }
  async loadAssociationsTable() {
    if (!this.associationsTable) {
      const { associationsTableUrl: s3 } = this;
      if (!s3) throw new s("utility-network-system-layers:missing-associations-table-url", "Unable to load the associations table, as the `associationsTableUrl` is not set.");
      this.associationsTable = new Ye({ url: s3 });
    }
    return await this.associationsTable.load(), this.associationsTable;
  }
};
r([m({ constructOnly: true })], i5.prototype, "rulesTableId", void 0), r([m({ constructOnly: true })], i5.prototype, "rulesTableUrl", void 0), r([m({ constructOnly: true })], i5.prototype, "subnetworksTableId", void 0), r([m({ constructOnly: true })], i5.prototype, "subnetworksTableUrl", void 0), r([m({ constructOnly: true })], i5.prototype, "dirtyAreasLayerId", void 0), r([m({ constructOnly: true })], i5.prototype, "dirtyAreasLayerUrl", void 0), r([m()], i5.prototype, "associationsTable", void 0), r([m({ constructOnly: true })], i5.prototype, "associationsTableId", void 0), r([m({ constructOnly: true })], i5.prototype, "associationsTableUrl", void 0), i5 = r([a("esri.networks.support.NetworkSystemLayers")], i5);
var l5 = i5;

// node_modules/@arcgis/core/networks/support/Terminal.js
var s2 = class extends S {
  constructor(r5) {
    super(r5), this.id = null, this.name = null;
  }
};
r([m({ type: Number, json: { read: { source: "terminalId" }, write: { target: "terminalId" } } })], s2.prototype, "id", void 0), r([m({ type: String, json: { read: { source: "terminalName" }, write: { target: "terminalName" } } })], s2.prototype, "name", void 0), r([m({ type: Boolean, json: { write: true } })], s2.prototype, "isUpstreamTerminal", void 0), s2 = r([a("esri.networks.support.Terminal")], s2);
var p = s2;

// node_modules/@arcgis/core/networks/support/TerminalConfiguration.js
var a3 = new o({ esriUNTMBidirectional: "bidirectional", esriUNTMDirectional: "directional" });
var n3 = class extends S {
  constructor(r5) {
    super(r5), this.defaultConfiguration = null, this.id = null, this.name = null, this.terminals = [], this.traversabilityModel = null;
  }
};
r([m({ type: String, json: { write: true } })], n3.prototype, "defaultConfiguration", void 0), r([m({ type: Number, json: { read: { source: "terminalConfigurationId" }, write: { target: "terminalConfigurationId" } } })], n3.prototype, "id", void 0), r([m({ type: String, json: { read: { source: "terminalConfigurationName" }, write: { target: "terminalConfigurationName" } } })], n3.prototype, "name", void 0), r([m({ type: [p], json: { write: true } })], n3.prototype, "terminals", void 0), r([m({ type: a3.apiValues, json: { type: a3.jsonValues, read: a3.read, write: a3.write } })], n3.prototype, "traversabilityModel", void 0), n3 = r([a("esri.networks.support.TerminalConfiguration")], n3);
var p2 = n3;

// node_modules/@arcgis/core/networks/support/TraceJobInfo.js
var m4 = i()({ Pending: "job-waiting", InProgress: "job-executing", Completed: "job-succeeded" });
var n4 = class extends a2 {
  constructor(t3) {
    super(t3), this.statusUrl = null, this.status = null, this.submissionTime = null, this.lastUpdatedTime = null, this._timer = void 0;
  }
  destroy() {
    clearInterval(this._timer);
  }
  async checkJobStatus(t3) {
    const e3 = { ...t3, query: { f: "json" } }, { data: r5 } = await P(this.statusUrl, e3), o2 = r5.traceResults ? { ...r5.traceResults, ...r5 } : r5;
    return this.read(o2), this;
  }
  async waitForJobCompletion(t3 = {}) {
    const { interval: s3 = 1e3, statusCallback: e3 } = t3;
    return new Promise((t4, o2) => {
      this._clearTimer();
      const i6 = setInterval(() => {
        this._timer || o2(u()), this.checkJobStatus().then((s4) => {
          const { status: r5 } = s4;
          switch (this.status = r5, r5) {
            case "job-succeeded":
              this._clearTimer(), t4(this);
              break;
            case "job-waiting":
            case "job-executing":
              e3 && e3(this);
          }
        }, (t5) => {
          this._clearTimer(), o2(t5);
        });
      }, s3);
      this._timer = i6;
    });
  }
  _clearTimer() {
    clearInterval(this._timer), this._timer = void 0;
  }
};
r([m({ type: String, json: { write: true } })], n4.prototype, "statusUrl", void 0), r([r2(m4)], n4.prototype, "status", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t3, s3) => {
  s3.submissionTime = t3 ? t3.getTime() : null;
} } } })], n4.prototype, "submissionTime", void 0), r([m({ type: Date, json: { type: Number, write: { writer: (t3, s3) => {
  s3.lastUpdatedTime = t3 ? t3.getTime() : null;
} } } })], n4.prototype, "lastUpdatedTime", void 0), n4 = r([a("esri.networks.support.TraceJobInfo")], n4);
var p3 = n4;

// node_modules/@arcgis/core/networks/UtilityNetwork.js
var I2 = class extends N {
  constructor(e3) {
    super(e3), this.sharedNamedTraceConfigurations = [], this.type = "utility", this._terminalById = /* @__PURE__ */ new Map();
  }
  get serviceTerritoryFeatureLayerId() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.serviceTerritoryFeatureLayerId) ?? null;
  }
  get networkSystemLayers() {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return new l5({ rulesTableId: (_a = this.sourceJSON) == null ? void 0 : _a.systemLayers.rulesTableId, rulesTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_b = this.sourceJSON) == null ? void 0 : _b.systemLayers.rulesTableId}` : null, subnetworksTableId: (_c = this.sourceJSON) == null ? void 0 : _c.systemLayers.subnetworksTableId, subnetworksTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_d = this.sourceJSON) == null ? void 0 : _d.systemLayers.subnetworksTableId}` : null, dirtyAreasLayerId: (_e = this.sourceJSON) == null ? void 0 : _e.systemLayers.dirtyAreasLayerId, dirtyAreasLayerUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_f = this.sourceJSON) == null ? void 0 : _f.systemLayers.dirtyAreasLayerId}` : null, associationsTableId: (_g = this.sourceJSON) == null ? void 0 : _g.systemLayers.associationsTableId, associationsTableUrl: this.sourceJSON ? `${this.featureServiceUrl}/${(_h = this.sourceJSON) == null ? void 0 : _h.systemLayers.associationsTableId}` : null });
  }
  get terminalConfigurations() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.terminalConfigurations.map((e3) => p2.fromJSON(e3))) || [];
  }
  get domainNetworkNames() {
    var _a;
    return ((_a = this.dataElement) == null ? void 0 : _a.domainNetworks.map((e3) => e3.domainNetworkName)) || [];
  }
  get _utilityLayerList() {
    var _a, _b;
    const e3 = /* @__PURE__ */ new Set();
    return (_b = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks) == null ? void 0 : _b.map((t3) => {
      var _a2, _b2;
      (_a2 = t3 == null ? void 0 : t3.edgeSources) == null ? void 0 : _a2.map(({ layerId: t4, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t4), this._sourceIdByLayerId.set(t4, r5), e3.add(t4);
      }), (_b2 = t3 == null ? void 0 : t3.junctionSources) == null ? void 0 : _b2.map(({ layerId: t4, sourceId: r5 }) => {
        this._layerIdBySourceId.set(r5, t4), this._sourceIdByLayerId.set(t4, r5), e3.add(t4);
      });
    }), e3;
  }
  async load(e3) {
    return this.addResolvingPromise(super.load(e3)), this.addResolvingPromise(this._loadNamedTraceConfigurationsFromNetwork(e3)), this;
  }
  getTerminalConfiguration(e3) {
    var _a, _b, _c, _d;
    let t3 = null, r5 = null;
    const s3 = e3.layer;
    let o2 = null;
    if ("feature" === (s3 == null ? void 0 : s3.type)) {
      if (o2 = s3.layerId, null === o2) return null;
    } else {
      if ("subtype-sublayer" !== (s3 == null ? void 0 : s3.type)) return null;
      if (o2 = ((_a = s3 == null ? void 0 : s3.parent) == null ? void 0 : _a.layerId) ?? null, null === o2) return null;
    }
    const a4 = e3.attributes;
    if (null == a4) return null;
    for (const l6 of Object.keys(a4)) "ASSETGROUP" === l6.toUpperCase() && (t3 = e3.getAttribute(l6)), "ASSETTYPE" === l6.toUpperCase() && (r5 = e3.getAttribute(l6));
    if (!this.dataElement) return null;
    let i6 = null;
    const n5 = this.dataElement.domainNetworks;
    for (const l6 of n5) {
      const e4 = (_b = l6.junctionSources) == null ? void 0 : _b.find((e5) => e5.layerId === o2);
      if (e4) {
        const s4 = (_c = e4.assetGroups) == null ? void 0 : _c.find((e5) => e5.assetGroupCode === t3);
        if (s4) {
          const e5 = (_d = s4.assetTypes) == null ? void 0 : _d.find((e6) => e6.assetTypeCode === r5);
          if (e5 == null ? void 0 : e5.isTerminalConfigurationSupported) {
            i6 = e5.terminalConfigurationId;
            break;
          }
        }
      }
    }
    if (null != i6) {
      const e4 = this.dataElement.terminalConfigurations, t4 = e4 == null ? void 0 : e4.find((e5) => e5.terminalConfigurationId === i6);
      return t4 ? p2.fromJSON(t4) : null;
    }
    return null;
  }
  getTierNames(e3) {
    var _a;
    const t3 = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks.find((t4) => t4.domainNetworkName === e3);
    return (t3 == null ? void 0 : t3.tiers.map((e4) => e4.name)) || [];
  }
  async getRulesTable() {
    return this._sharedRulesTable || (this._sharedRulesTable = this._createRulesTable()), await this._sharedRulesTable;
  }
  getTerminalById(e3) {
    if (!this.dataElement || null == e3) return null;
    const t3 = this._terminalById.get(e3);
    return null != t3 ? t3 : (this.terminalConfigurations.forEach((e4) => {
      e4.terminals.forEach((e5) => {
        this._terminalById.set(e5.id, e5);
      });
    }), this._terminalById.get(e3));
  }
  isUtilityLayer(e3) {
    var _a, _b;
    return "layerId" in e3 ? this._utilityLayerList.has(e3 == null ? void 0 : e3.layerId) && (((_a = e3.url) == null ? void 0 : _a.startsWith(this.featureServiceUrl)) ?? false) : !("subtype-sublayer" !== e3.type || !e3.parent) && (this._utilityLayerList.has(e3.parent.layerId) && (((_b = e3.parent.url) == null ? void 0 : _b.startsWith(this.featureServiceUrl)) ?? false));
  }
  async queryAssociations(e3, t3) {
    const [{ queryAssociations: r5 }, { default: s3 }] = await Promise.all([import("./queryAssociations-EEDU2ZK7.js"), import("./QueryAssociationsParameters-UIK2BRIH.js")]), o2 = s3.from(e3);
    o2.gdbVersion = this.gdbVersion, o2.moment = this.historicMoment;
    return (await r5(this.networkServiceUrl, o2, t3)).associations;
  }
  async synthesizeAssociationGeometries(e3) {
    const [{ synthesizeAssociationGeometries: t3 }, { default: r5 }] = await Promise.all([import("./synthesizeAssociationGeometries-3B2R5S3I.js"), import("./SynthesizeAssociationGeometriesParameters-6GYZT5LX.js")]), s3 = r5.from(e3);
    return s3.gdbVersion = this.gdbVersion, s3.moment = this.historicMoment, t3(this.networkServiceUrl, s3);
  }
  async trace(e3) {
    const [{ trace: t3 }, { default: r5 }] = await Promise.all([import("./trace-K3EHUUXE.js"), import("./TraceParameters-X653GOQB.js")]), s3 = r5.from(e3);
    return s3.gdbVersion = this.gdbVersion, s3.moment = this.historicMoment, t3(this.networkServiceUrl, s3);
  }
  async submitTraceJob(e3) {
    const [{ submitTraceJob: t3 }, { default: r5 }] = await Promise.all([import("./trace-K3EHUUXE.js"), import("./TraceParameters-X653GOQB.js")]), s3 = r5.from(e3);
    s3.gdbVersion = this.gdbVersion, s3.moment = this.historicMoment;
    const o2 = await t3(this.networkServiceUrl, s3);
    return new p3({ statusUrl: o2 });
  }
  async canAddAssociation(e3) {
    const t3 = await this.getRulesTable();
    if (!t3) return false;
    await t3.load();
    const r5 = (e4, t4) => e4 ? 1 === e4.terminalId ? !(t4 == null ? void 0 : t4.terminalId) || (t4 == null ? void 0 : t4.terminalId) === e4.terminalId : e4.terminalId === (t4 == null ? void 0 : t4.terminalId) : !(t4 == null ? void 0 : t4.terminalId), s3 = (e4) => ({ fromRuleElement: { networkSource: e4.fromNetworkSource, assetGroup: e4.fromAssetGroup, assetType: e4.fromAssetType, terminal: e4.fromTerminal }, viaRuleElement: e4.viaNetworkSource ? { networkSource: e4.viaNetworkSource, assetGroup: e4.viaAssetGroup, assetType: e4.viaAssetType, terminal: e4.viaTerminal } : void 0, toRuleElement: { networkSource: e4.toNetworkSource, assetGroup: e4.toAssetGroup, assetType: e4.toAssetType, terminal: e4.toTerminal } }), o2 = (e4, t4, s4 = true) => {
      var _a, _b, _c;
      return ((_a = e4.networkSource) == null ? void 0 : _a.sourceId) === t4.networkSourceId && ((_b = e4.assetGroup) == null ? void 0 : _b.assetGroupCode) === t4.assetGroupCode && ((_c = e4.assetType) == null ? void 0 : _c.assetTypeCode) === t4.assetTypeCode && (!s4 || r5(e4.terminal, t4));
    }, a4 = (e4, t4) => {
      const { fromRuleElement: r6, toRuleElement: a5 } = s3(e4);
      return o2(r6, t4.fromNetworkElement, false) && o2(a5, t4.toNetworkElement, false);
    }, i6 = (e4, t4) => {
      const { fromRuleElement: r6, toRuleElement: a5 } = s3(e4);
      return o2(r6, t4.fromNetworkElement) && o2(a5, t4.toNetworkElement) || o2(r6, t4.toNetworkElement) && o2(a5, t4.fromNetworkElement);
    }, n5 = (e4, t4) => {
      const { fromRuleElement: r6, toRuleElement: a5, viaRuleElement: i7 } = s3(e4);
      return o2(r6, t4.fromNetworkElement) && o2(i7, t4.toNetworkElement) || o2(r6, t4.toNetworkElement) && o2(i7, t4.fromNetworkElement) || o2(i7, t4.fromNetworkElement) && o2(a5, t4.toNetworkElement) || o2(i7, t4.toNetworkElement) && o2(a5, t4.fromNetworkElement);
    };
    if ("containment" === e3.associationType) {
      return t3.rulesCategorized.containment.some((t4) => a4(t4, e3));
    }
    if ("attachment" === e3.associationType) {
      return t3.rulesCategorized.attachment.some((t4) => a4(t4, e3));
    }
    return t3.rulesCategorized.connectivity.some((t4) => t4.ruleType === t2.RTEdgeJunctionEdgeConnectivity ? n5(t4, e3) : i6(t4, e3));
  }
  generateAddAssociations(e3) {
    const { associationsTable: r5 } = this.networkSystemLayers, { fromNetworkSourceId: s3, fromGlobalId: o2, fromTerminalId: a4, toNetworkSourceId: i6, toGlobalId: n5, toTerminalId: l6, associationType: m5, isContentVisible: d5, percentAlong: c4, globalId: y } = e2(r5);
    return { addFeatures: e3.map((e4) => {
      var _a, _b, _c, _d, _e, _f;
      return new b2({ attributes: { [s3]: (_a = e4.fromNetworkElement) == null ? void 0 : _a.networkSourceId, [o2]: (_b = e4.fromNetworkElement) == null ? void 0 : _b.globalId, [a4]: (_c = e4.fromNetworkElement) == null ? void 0 : _c.terminalId, [i6]: (_d = e4.toNetworkElement) == null ? void 0 : _d.networkSourceId, [n5]: (_e = e4.toNetworkElement) == null ? void 0 : _e.globalId, [l6]: (_f = e4.toNetworkElement) == null ? void 0 : _f.terminalId, [m5]: e[e4.associationType], [d5]: null == e4.isContentVisible ? void 0 : e4.isContentVisible ? 1 : 0, [c4]: e4.percentAlong, [y]: e4.globalId } });
    }), id: this.networkSystemLayers.associationsTableId, identifierFields: { globalIdField: (r5 == null ? void 0 : r5.globalIdField) ?? "globalid", objectIdField: (r5 == null ? void 0 : r5.objectIdField) ?? "objectid" } };
  }
  generateDeleteAssociations(e3) {
    const { associationsTable: t3, associationsTableId: r5 } = this.networkSystemLayers;
    return { deleteFeatures: e3.map((e4) => ({ globalId: e4.globalId })), id: r5, identifierFields: { globalIdField: (t3 == null ? void 0 : t3.globalIdField) ?? "globalid", objectIdField: (t3 == null ? void 0 : t3.objectIdField) ?? "objectid" } };
  }
  async loadAssociationsTable() {
    return this.networkSystemLayers.loadAssociationsTable();
  }
  async _loadNamedTraceConfigurationsFromNetwork(e3) {
    var _a;
    if (0 === ((_a = this.sharedNamedTraceConfigurations) == null ? void 0 : _a.length)) return;
    const t3 = this.sharedNamedTraceConfigurations.map((e4) => e4.globalId), r5 = await this.queryNamedTraceConfigurations({ globalIds: t3 }, e3);
    for (const s3 of this.sharedNamedTraceConfigurations) {
      const e4 = r5 == null ? void 0 : r5.find((e5) => e5.globalId === s3.globalId);
      if (e4) {
        const t4 = e4.write({}, { origin: "service" });
        s3.read(t4, { origin: "service" });
      }
    }
  }
  async _createRulesTable() {
    var _a;
    const e3 = this.networkSystemLayers.rulesTableUrl, t3 = new Ye({ url: e3 });
    await t3.load();
    const r5 = (_a = this.dataElement) == null ? void 0 : _a.domainNetworks;
    if (!r5) return null;
    const s3 = r5.flatMap((e4) => [...e4.edgeSources || [], ...e4.junctionSources || []]), a4 = (await T(t3)).map((e4) => this._hydrateRuleInfo(t3, s3, e4));
    return new c3({ rulesLayer: t3, rules: a4 });
  }
  _hydrateRuleInfo(e3, t3, r5) {
    const s3 = e3.fieldsIndex, o2 = s3.get("RULETYPE"), a4 = s3.get("CREATIONDATE"), i6 = s3.get("FROMNETWORKSOURCEID"), n5 = s3.get("FROMASSETGROUP"), l6 = s3.get("FROMASSETTYPE"), u2 = s3.get("FROMTERMINALID"), m5 = s3.get("TONETWORKSOURCEID"), d5 = s3.get("TOASSETGROUP"), c4 = s3.get("TOASSETTYPE"), p4 = s3.get("TOTERMINALID"), f2 = s3.get("VIANETWORKSOURCEID"), I3 = s3.get("VIAASSETGROUP"), T2 = s3.get("VIAASSETTYPE"), h3 = s3.get("VIATERMINALID"), w2 = r5.attributes[o2.name], b4 = new Date(r5.attributes[a4.name]), g4 = [{ networkSourceId: r5.attributes[i6.name], assetGroupId: r5.attributes[n5.name], assetTypeId: r5.attributes[l6.name], terminalId: r5.attributes[u2.name] }, { networkSourceId: r5.attributes[m5.name], assetGroupId: r5.attributes[d5.name], assetTypeId: r5.attributes[c4.name], terminalId: r5.attributes[p4.name] }, { networkSourceId: r5.attributes[f2.name], assetGroupId: r5.attributes[I3.name], assetTypeId: r5.attributes[T2.name], terminalId: r5.attributes[h3.name] }];
    let k2;
    !function(e4) {
      e4[e4.from = 0] = "from", e4[e4.to = 1] = "to", e4[e4.via = 2] = "via";
    }(k2 || (k2 = {}));
    const S4 = { ruleType: w2, creationDate: b4 };
    for (const N2 of [k2.from, k2.to, k2.via]) {
      if (w2 !== t2.RTEdgeJunctionEdgeConnectivity && N2 === k2.via) continue;
      const e4 = g4[N2], r6 = t3.find((t4) => t4.sourceId === e4.networkSourceId), s4 = r6 == null ? void 0 : r6.assetGroups.find((t4) => t4.assetGroupCode === e4.assetGroupId), o3 = s4 == null ? void 0 : s4.assetTypes.find((t4) => t4.assetTypeCode === e4.assetTypeId), a5 = this._getTerminal(o3, e4);
      let i7 = "";
      switch (N2) {
        case k2.from:
          i7 = "from";
          break;
        case k2.to:
          i7 = "to";
          break;
        case k2.via:
          i7 = "via";
      }
      S4[`${i7}NetworkSource`] = r6, S4[`${i7}AssetGroup`] = s4, S4[`${i7}AssetType`] = o3, S4[`${i7}Terminal`] = a5 == null ? void 0 : a5.toJSON();
    }
    return S4;
  }
  _getTerminal(e3, t3) {
    var _a, _b;
    const r5 = e3 == null ? void 0 : e3.terminalConfigurationId, s3 = (_a = this.terminalConfigurations) == null ? void 0 : _a.find((e4) => e4.id === r5);
    return ((_b = s3 == null ? void 0 : s3.terminals) == null ? void 0 : _b.find((e4) => e4.id === t3.terminalId)) ?? null;
  }
};
async function T(e3) {
  const t3 = new b3({ where: "1=1", outFields: ["*"] });
  return (await r4(e3, t3)).features;
}
r([m({ type: [d2], json: { origins: { "web-map": { read: { source: "traceConfigurations" }, write: { target: "traceConfigurations" } }, service: { read: { source: "traceConfigurations" } } }, read: false } })], I2.prototype, "sharedNamedTraceConfigurations", void 0), r([m({ type: ["utility"], readOnly: true, json: { read: false, write: false } })], I2.prototype, "type", void 0), r([m({ readOnly: true })], I2.prototype, "serviceTerritoryFeatureLayerId", null), r([m({ readOnly: true })], I2.prototype, "networkSystemLayers", null), r([m({ readOnly: true })], I2.prototype, "terminalConfigurations", null), r([m({ readOnly: true })], I2.prototype, "domainNetworkNames", null), I2 = r([a("esri.networks.UtilityNetwork")], I2);
var h2 = I2;

export {
  h2 as h
};
//# sourceMappingURL=chunk-KKYFXE6I.js.map
