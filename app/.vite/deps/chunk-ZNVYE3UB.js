import {
  Fe
} from "./chunk-LPOMYX2A.js";
import {
  s
} from "./chunk-UQ4WWETM.js";
import {
  p
} from "./chunk-CXW7QK2T.js";
import {
  b as b2
} from "./chunk-AI2O2GKK.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  l
} from "./chunk-XWXWIBVO.js";
import {
  n
} from "./chunk-SWBNCJYN.js";
import {
  P,
  d as d2
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
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
  d,
  k
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations/VisibleElements.js
var s2 = class extends g {
  constructor(o2) {
    super(o2), this.title = true, this.description = true;
  }
};
r([m({ type: Boolean, nonNullable: true })], s2.prototype, "title", void 0), r([m({ type: Boolean, nonNullable: true })], s2.prototype, "description", void 0), s2 = r([a("esri.widgets.Feature.FeatureUtilityNetworkAssociations.VisibleElements")], s2);
var i = s2;

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations/resources.js
var o = { fromGlobalId: "fromglobalid", fromNetworkSourceId: "fromnetworksourceid", fromTerminalId: "fromterminalid", toGlobalId: "toglobalid", toNetworkSourceId: "tonetworksourceid", toTerminalId: "toterminalid", associationType: "associationtype", globalId: "globalid", status: "status", isContentVisible: "iscontentvisible", percentAlong: "percentalong", assetGroup: "assetgroup", assetType: "assettype" };

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/FeatureUtilityNetworkAssociationsViewModel.js
var A = 100;
var b3 = class extends a2.ClonableMixin(n.IdentifiableMixin(g)) {
  constructor(t) {
    super(t), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.networkSourceIdsInUse = /* @__PURE__ */ new Set(), this.source = "popup", this.description = null, this.graphic = null, this.layer = null, this.map = null, this.featureCount = 0, this.associationTypes = null, this.showAllEnabled = false, this.title = null, this.attachmentsFeatureCount = 0, this.structureFeatureCount = 0, this.contentFeatureCount = 0, this.containerFeatureCount = 0, this.connectivityFeatureCount = 0, this._queryOpenAssociationType = async () => {
      this.activeAssociationType && await this._queryDebounced(this.activeAssociationType);
    }, this._cancelQuery = () => {
      const { _queryAbortController: t2 } = this;
      t2 && t2.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: t2 } = this;
      t2 && t2.abort(), this._queryFeatureCountAbortController = null;
    }, this._queryController = async (t2) => {
      this._cancelQuery();
      const e = new AbortController();
      this._queryAbortController = e, await d(this._query(t2)), this._queryAbortController === e && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const t2 = new AbortController();
      this._queryFeatureCountAbortController = t2, await d(this._queryFeatureCount()), this._queryFeatureCountAbortController === t2 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryDebounced = k(this._queryController, A), this._queryFeatureCountDebounced = k(this._queryFeatureCountController, A);
  }
  initialize() {
    this.addHandles([d2(() => [this.graphic, this.layer, this.map, this.associationTypes, this.objectId, this.globalId, this.canQuery], () => this.refresh(), P), d2(() => this.activeAssociationType, (t) => this._queryDebounced(t), P)]);
  }
  destroy() {
    this._cancelQuery(), this._cancelQueryFeatureCount(), this._destroyAssociatedFeatureViewModels();
  }
  get supportsCacheHint() {
    var _a, _b, _c;
    return !!((_c = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.query) == null ? void 0 : _c.supportsCacheHint);
  }
  get canLoad() {
    return !!this.map && !!this.associationTypes && "string" == typeof this.globalId;
  }
  get canQuery() {
    var _a, _b;
    const t = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.query;
    return !!this.associationTypes && "string" == typeof this.globalId && !!(t == null ? void 0 : t.supportsPagination);
  }
  set displayCount(t) {
    const e = 0, o2 = 3;
    this._set("displayCount", Math.max(t ?? o2, e));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get objectId() {
    var _a, _b;
    return (this.objectIdField && ((_b = (_a = this.graphic) == null ? void 0 : _a.attributes) == null ? void 0 : _b[this.objectIdField])) ?? null;
  }
  get objectIdField() {
    var _a;
    return ((_a = this.layer) == null ? void 0 : _a.objectIdField) || null;
  }
  get globalId() {
    var _a, _b;
    return (this.globalIdField && ((_b = (_a = this.graphic) == null ? void 0 : _a.attributes) == null ? void 0 : _b[this.globalIdField])) ?? null;
  }
  get globalIdField() {
    const { layer: t } = this;
    return t == null ? void 0 : t.globalIdField;
  }
  get activeAssociationType() {
    return this._get("activeAssociationType");
  }
  set activeAssociationType(t) {
    t && !this.associationTypes.includes(t) || this._set("activeAssociationType", t);
  }
  get state() {
    const { _queryAbortController: t, _queryFeatureCountAbortController: e, _queryPageAbortController: o2, canQuery: s3, _loaded: r2, canLoad: i2, source: a3 } = this;
    return e || i2 && !r2 ? "loading" : t || o2 ? "querying" : !s3 || "popup" === a3 && 0 === this.featureCount ? "disabled" : "ready";
  }
  get utilityNetwork() {
    const { layer: t, map: e } = this;
    if (!(t == null ? void 0 : t.loaded) || !e) return null;
    const o2 = l(t) ? t.parent : t;
    return Fe(e, o2);
  }
  get attachmentsAssociations() {
    return this._get("attachmentsAssociations") || new V();
  }
  get structureAssociations() {
    return this._get("structureAssociations") || new V();
  }
  get contentAssociations() {
    return this._get("contentAssociations") || new V();
  }
  get containerAssociations() {
    return this._get("containerAssociations") || new V();
  }
  get connectivityAssociations() {
    return this._get("connectivityAssociations") || new V();
  }
  get associationFeatures() {
    return this._get("associationFeatures") || new s();
  }
  get associationViewModels() {
    return this._get("associationViewModels") || /* @__PURE__ */ new Map();
  }
  async refresh() {
    await this._queryFeatureCountDebounced(), await this._queryOpenAssociationType();
  }
  getFeatureCountForAssociationType(t) {
    switch (t) {
      case "attachment":
        return this.attachmentsFeatureCount;
      case "structure":
        return this.structureFeatureCount;
      case "content":
        return this.contentFeatureCount;
      case "container":
        return this.containerFeatureCount;
      case "connectivity":
        return this.connectivityFeatureCount;
    }
  }
  _destroyAssociatedFeatureViewModels() {
    this.associationViewModels.forEach((t) => t.destroyAll());
  }
  async _loadUtiltyNetworks() {
    var _a;
    const t = this.map;
    if (!t) return;
    await Promise.allSettled(((_a = t.utilityNetworks) == null ? void 0 : _a.map(async (t2) => {
      await t2.load();
    })) ?? []);
    const e = this.utilityNetwork;
    if (e) {
      const o2 = (t2) => {
        if ("layerId" in t2 && e.isUtilityLayer(t2)) {
          const o3 = e.getSourceIdByLayerId(t2.layerId);
          null !== o3 && this.networkSourceIdsInUse.add(o3);
        }
      };
      this._set("networkSourceIdsInUse", /* @__PURE__ */ new Set()), t.allLayers.forEach(o2), t.allTables.forEach(o2);
    }
  }
  async _findLayersBySourceId(t) {
    const { utilityNetwork: e, map: o2 } = this, s3 = (t2) => {
      const o3 = t2;
      if (!t2.url) return false;
      if (o3.layerId === r2) {
        return t2.url.replace(/\/\d+$/, "") === (e == null ? void 0 : e.featureServiceUrl);
      }
      return false;
    };
    await (e == null ? void 0 : e.load());
    const r2 = e.getLayerIdBySourceId(t), i2 = o2.allLayers.filter(s3), a3 = o2.allTables.filter(s3), n2 = i2.concat(a3).toArray();
    return await Promise.allSettled(n2.map((t2) => t2.load())), n2;
  }
  _clearAssociations() {
    this.attachmentsAssociations.removeAll(), this.structureAssociations.removeAll(), this.contentAssociations.removeAll(), this.containerAssociations.removeAll(), this.connectivityAssociations.removeAll();
  }
  _clearFeatures() {
    this.associationFeatures.forEach((t) => t.removeAll()), this.associationFeatures.clear();
  }
  _getAssociationsByType(t) {
    switch (t) {
      case "attachment":
        return this.attachmentsAssociations;
      case "structure":
        return this.structureAssociations;
      case "connectivity":
        return this.connectivityAssociations;
      case "container":
        return this.containerAssociations;
      case "content":
        return this.contentAssociations;
    }
  }
  async _queryLayer(t, e, o2, s3, r2) {
    const i2 = t.fieldsIndex.get(o.assetGroup), a3 = t.fieldsIndex.get(o.assetType), n2 = null != o2, c = null != s3, l2 = "(" + e.map((t2) => `'${t2}'`).join(", ") + ")", u = n2 ? ` AND ${i2 == null ? void 0 : i2.name} = ${o2}` : "", d3 = n2 && c ? ` AND ${a3 == null ? void 0 : a3.name} = ${s3}` : "", y = `${t.globalIdField} IN ${l2}` + u + d3, h = new b2({ outFields: ["*"], cacheHint: this.supportsCacheHint, where: y });
    return await this._queryAll(h, t, { signal: r2 == null ? void 0 : r2.signal });
  }
  async _createAssociationFeatureObjects(t, e, o2, s3, r2, i2) {
    if (0 === t.length) return [];
    const a3 = /* @__PURE__ */ new Map();
    for (const [c, l2] of e) {
      const t2 = await this._findLayersBySourceId(c);
      for (const e2 of t2) {
        (await this._queryLayer(e2, l2, s3, r2, i2)).forEach((t3) => {
          if ("popup" === this.source ? t3.layer && t3.getEffectivePopupTemplate() : !!t3.layer) {
            const o3 = a3.get(t3.attributes[e2.globalIdField]) ?? [];
            o3.push(t3), a3.set(t3.attributes[e2.globalIdField], o3);
          }
        });
      }
    }
    const n2 = [];
    return await Promise.all(t.toArray().map(async (t2) => {
      const { fromNetworkElement: e2, toNetworkElement: s4 } = t2, r3 = e2.globalId === o2 ? s4 : e2, i3 = a3.get(r3.globalId) ?? [];
      await Promise.all(i3.map(async (e3) => {
        var _a, _b;
        const o3 = (_b = (_a = this.utilityNetwork) == null ? void 0 : _a.getTerminalById(r3 == null ? void 0 : r3.terminalId)) == null ? void 0 : _b.name;
        if (e3.layer && "getFeatureTitle" in e3.layer) {
          const s5 = await e3.layer.getFeatureTitle(e3);
          n2.push({ title: s5, association: t2, feature: e3, terminalName: o3 });
        } else n2.push({ association: t2, feature: e3, terminalName: o3 });
      }));
    })), n2;
  }
  _parseFeatureObjects(t, e) {
    t.forEach((t2) => {
      const o2 = t2 == null ? void 0 : t2.feature, s3 = o2.layer, i2 = e.get(s3) ?? new V();
      i2.add(t2), e.set(s3, i2);
    });
  }
  async _queryAll(t, e, o2) {
    var _a;
    const s3 = [];
    let r2 = 0, i2 = false;
    t.num = ((_a = e.sourceJSON) == null ? void 0 : _a.maxRecordCount) ?? 2e3;
    do {
      t.start = r2;
      const a3 = await e.queryFeatures(t, o2);
      s3.push(...a3.features), i2 = a3.exceededTransferLimit, i2 && (r2 += a3.features.length);
    } while (i2);
    return s3;
  }
  async _queryAssociations(t) {
    const { layer: e, globalId: o2, associationTypes: s3, utilityNetwork: r2, canQuery: i2 } = this;
    if (await Promise.allSettled([e == null ? void 0 : e.load(), r2 == null ? void 0 : r2.load()]), this._clearAssociations(), !(i2 && e && s3 && r2 && o2)) return;
    const a3 = l(e) ? e.parent : e, n2 = new p({ globalId: o2, networkSourceId: r2.getSourceIdByLayerId(a3.layerId) }), c = /* @__PURE__ */ new Set();
    s3.forEach((t2) => {
      switch (t2.type) {
        case "attachment":
        case "structure":
          c.add("attachment");
          break;
        case "container":
        case "content":
          c.add("containment");
          break;
        case "connectivity":
          c.add("connectivity"), c.add("junction-junction-connectivity"), c.add("junction-edge-from-connectivity"), c.add("junction-edge-midspan-connectivity"), c.add("junction-edge-to-connectivity");
      }
    });
    const l2 = await (r2 == null ? void 0 : r2.queryAssociations({ elements: [n2], types: Array.from(c) }, { signal: t == null ? void 0 : t.signal })), u = /* @__PURE__ */ new Map(), d3 = /* @__PURE__ */ new Map();
    s3.forEach((t2) => {
      d3.set(t2.type, t2), u.set(t2.type, []);
    }), l2.forEach((t2) => {
      var _a, _b, _c, _d, _e, _f;
      const { toNetworkElement: e2, fromNetworkElement: s4 } = t2;
      switch (t2.associationType) {
        case "connectivity":
        case "junction-junction-connectivity":
        case "junction-edge-from-connectivity":
        case "junction-edge-midspan-connectivity":
        case "junction-edge-to-connectivity":
          if ((s4 == null ? void 0 : s4.globalId) === o2) {
            if (this._shouldDiscardNetworkElement(e2, "connectivity", d3)) break;
            (_a = u.get("connectivity")) == null ? void 0 : _a.push(e2.globalId);
          } else {
            if (this._shouldDiscardNetworkElement(s4, "connectivity", d3)) break;
            (_b = u.get("connectivity")) == null ? void 0 : _b.push(s4.globalId);
          }
          this.connectivityAssociations.add(t2);
          break;
        case "containment":
          if ((s4 == null ? void 0 : s4.globalId) === o2) {
            if (this._shouldDiscardNetworkElement(e2, "content", d3)) break;
            (_c = u.get("content")) == null ? void 0 : _c.push(e2.globalId), this.contentAssociations.add(t2);
          } else {
            if (this._shouldDiscardNetworkElement(s4, "container", d3)) break;
            (_d = u.get("container")) == null ? void 0 : _d.push(s4.globalId), this.containerAssociations.add(t2);
          }
          break;
        case "attachment":
          if ((s4 == null ? void 0 : s4.globalId) === o2) {
            if (this._shouldDiscardNetworkElement(e2, "attachment", d3)) break;
            (_e = u.get("attachment")) == null ? void 0 : _e.push(e2.globalId), this.attachmentsAssociations.add(t2);
          } else {
            if (this._shouldDiscardNetworkElement(s4, "structure", d3)) break;
            (_f = u.get("structure")) == null ? void 0 : _f.push(s4.globalId), this.structureAssociations.add(t2);
          }
      }
    });
    const y = s3.map(async (e2) => {
      const { associatedNetworkSourceId: o3, associatedAssetGroup: s4, associatedAssetType: r3 } = e2, i3 = u.get(e2.type), a4 = null != s4 ? await this._countAssociatedFeatures(o3, i3, s4, r3, t) : i3.length;
      switch (e2.type) {
        case "attachment":
          this._set("attachmentsFeatureCount", a4);
          break;
        case "structure":
          this._set("structureFeatureCount", a4);
          break;
        case "content":
          this._set("contentFeatureCount", a4);
          break;
        case "container":
          this._set("containerFeatureCount", a4);
          break;
        case "connectivity":
          this._set("connectivityFeatureCount", a4);
      }
    });
    await Promise.allSettled(y);
  }
  async _countAssociatedFeatureCount(t, e, o2, s3, r2) {
    const i2 = t.fieldsIndex.get(o.assetGroup), a3 = t.fieldsIndex.get(o.assetType), n2 = null != s3, c = "(" + e.map((t2) => `'${t2}'`).join(", ") + ")", l2 = ` AND ${i2 == null ? void 0 : i2.name} = ${o2}`, u = n2 ? ` AND ${a3 == null ? void 0 : a3.name} = ${s3}` : "", d3 = `${t.globalIdField} IN ${c}` + l2 + u;
    return t.queryFeatureCount({ where: d3, outFields: ["*"], returnGeometry: false }, { signal: r2 == null ? void 0 : r2.signal });
  }
  async _countAssociatedFeatures(t, e, o2, s3, r2) {
    if (0 === e.length) return 0;
    const i2 = (await this._findLayersBySourceId(t)).map(async (t2) => this._countAssociatedFeatureCount(t2, e, o2, s3, r2));
    return (await Promise.all(i2)).reduce((t2, e2) => t2 + e2, 0);
  }
  async _queryAssociatedFeatures(t, e) {
    const { layer: o2, globalId: s3, associationTypes: r2, utilityNetwork: i2, canQuery: a3, associationFeatures: n2 } = this;
    if (await Promise.allSettled([o2 == null ? void 0 : o2.load(), i2 == null ? void 0 : i2.load()]), !(a3 && o2 && r2 && i2)) return;
    const c = this._getAssociationsByType(t.type), { associatedAssetGroup: l2, associatedAssetType: u } = t, d3 = /* @__PURE__ */ new Map();
    c.forEach((t2) => {
      const { fromNetworkElement: e2, toNetworkElement: o3 } = t2, { networkSourceId: r3, elementGlobalId: i3 } = e2.globalId === s3 ? { networkSourceId: o3.networkSourceId, elementGlobalId: o3.globalId } : { networkSourceId: e2.networkSourceId, elementGlobalId: e2.globalId }, a4 = d3.get(r3) || [];
      a4.push(i3), d3.set(r3, a4);
    });
    const y = await this._createAssociationFeatureObjects(c, d3, s3, l2, u, e);
    this._parseFeatureObjects(y, n2);
  }
  async _queryFeatureCount() {
    await this._loadUtiltyNetworks();
    const { _queryFeatureCountAbortController: t, canQuery: e } = this;
    e ? (await this._queryAssociations(t), this._set("featureCount", this.attachmentsFeatureCount + this.structureFeatureCount + this.contentFeatureCount + this.containerFeatureCount + this.connectivityFeatureCount)) : this._set("featureCount", 0);
  }
  async _query(t) {
    if (!t) return;
    await this._loadUtiltyNetworks();
    const { _queryAbortController: e } = this;
    this._destroyAssociatedFeatureViewModels(), this._clearFeatures(), 0 !== this.featureCount && (this.destroyed || await this._queryAssociatedFeatures(t, { signal: e == null ? void 0 : e.signal }));
  }
  _shouldDiscardNetworkElement(t, e, o2) {
    var _a;
    if (!t) return false;
    const { networkSourceIdsInUse: s3 } = this, { networkSourceId: r2 } = t, i2 = (_a = o2.get(e)) == null ? void 0 : _a.associatedNetworkSourceId, a3 = s3.has(r2);
    return null != i2 && i2 !== r2 || !a3;
  }
};
r([m()], b3.prototype, "_loaded", void 0), r([m()], b3.prototype, "_queryAbortController", void 0), r([m()], b3.prototype, "_queryPageAbortController", void 0), r([m()], b3.prototype, "_queryFeatureCountAbortController", void 0), r([m({ readOnly: true })], b3.prototype, "supportsCacheHint", null), r([m({ readOnly: true })], b3.prototype, "canLoad", null), r([m({ readOnly: true })], b3.prototype, "canQuery", null), r([m()], b3.prototype, "networkSourceIdsInUse", void 0), r([m({ constructOnly: true })], b3.prototype, "source", void 0), r([m()], b3.prototype, "description", void 0), r([m({ value: 3 })], b3.prototype, "displayCount", null), r([m({ type: b })], b3.prototype, "graphic", void 0), r([m()], b3.prototype, "layer", void 0), r([m()], b3.prototype, "map", void 0), r([m({ readOnly: true })], b3.prototype, "objectId", null), r([m({ readOnly: true })], b3.prototype, "objectIdField", null), r([m({ readOnly: true })], b3.prototype, "globalId", null), r([m({ readOnly: true })], b3.prototype, "globalIdField", null), r([m()], b3.prototype, "featureCount", void 0), r([m()], b3.prototype, "associationTypes", void 0), r([m()], b3.prototype, "activeAssociationType", null), r([m()], b3.prototype, "showAllEnabled", void 0), r([m()], b3.prototype, "state", null), r([m()], b3.prototype, "title", void 0), r([m({ readOnly: true })], b3.prototype, "utilityNetwork", null), r([m({ readOnly: true })], b3.prototype, "attachmentsFeatureCount", void 0), r([m({ readOnly: true })], b3.prototype, "structureFeatureCount", void 0), r([m({ readOnly: true })], b3.prototype, "attachmentsAssociations", null), r([m({ readOnly: true })], b3.prototype, "structureAssociations", null), r([m({ readOnly: true })], b3.prototype, "contentFeatureCount", void 0), r([m({ readOnly: true })], b3.prototype, "containerFeatureCount", void 0), r([m({ readOnly: true })], b3.prototype, "contentAssociations", null), r([m({ readOnly: true })], b3.prototype, "containerAssociations", null), r([m({ readOnly: true })], b3.prototype, "connectivityFeatureCount", void 0), r([m({ readOnly: true })], b3.prototype, "connectivityAssociations", null), r([m({ readOnly: true })], b3.prototype, "associationFeatures", null), r([m({ readOnly: true })], b3.prototype, "associationViewModels", null), b3 = r([a("esri.widgets.support.UtilityNetworkAssociations.FeatureUtilityNetworkAssociationsViewModel")], b3);
var _ = b3;

export {
  i,
  _
};
//# sourceMappingURL=chunk-ZNVYE3UB.js.map
