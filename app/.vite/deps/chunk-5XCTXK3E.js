import {
  i as i8
} from "./chunk-YX6MRK66.js";
import {
  a as a5
} from "./chunk-GQZVNUA4.js";
import {
  i as i7
} from "./chunk-MV5XTDTW.js";
import {
  i as i6,
  n as n4,
  r as r4
} from "./chunk-D2KPWTH5.js";
import {
  a as a7,
  a2 as a8,
  c as c3,
  d as d6,
  h as h3,
  i as i5,
  j as j2,
  m as m4,
  o2 as o7,
  o3 as o8,
  t2 as t4,
  x as x2,
  z2 as z
} from "./chunk-VWA3EWRM.js";
import {
  b as b4
} from "./chunk-3SEDCXI3.js";
import {
  S as S2
} from "./chunk-ITFP5AXT.js";
import {
  y as y2
} from "./chunk-KMKEKOKG.js";
import {
  a as a6
} from "./chunk-4ATVMSVD.js";
import {
  t as t3
} from "./chunk-FSHULOB2.js";
import {
  e as e4
} from "./chunk-CVEV6FRQ.js";
import {
  fe,
  o as o6,
  te
} from "./chunk-UQQJEYZO.js";
import {
  E
} from "./chunk-WVAH34JS.js";
import {
  o as o4
} from "./chunk-H263NTAU.js";
import {
  n as n3,
  p
} from "./chunk-NMUUXFTE.js";
import {
  ot
} from "./chunk-F7TFMQ3A.js";
import {
  c
} from "./chunk-G2TQ7G44.js";
import {
  T
} from "./chunk-RBVKDFFD.js";
import {
  E as E3,
  N,
  R as R2,
  a as a9,
  g as g4
} from "./chunk-RD3QRDRK.js";
import {
  c as c2
} from "./chunk-EWSNAOW6.js";
import {
  h as h2
} from "./chunk-PV4EUSKO.js";
import {
  t as t2
} from "./chunk-JXV2GGQH.js";
import {
  e as e3
} from "./chunk-ZRT3UCXK.js";
import {
  s as s4
} from "./chunk-ANT4QPJQ.js";
import {
  s as s3
} from "./chunk-UQ4WWETM.js";
import {
  t as t5
} from "./chunk-YIZAIKLK.js";
import {
  w as w2
} from "./chunk-KS56T55N.js";
import {
  d as d5
} from "./chunk-FK3WBTHH.js";
import {
  u as u6
} from "./chunk-ZROOJR26.js";
import {
  a as a3
} from "./chunk-BWQFRI3E.js";
import {
  a2 as a4
} from "./chunk-F23MXZYK.js";
import {
  f as f2
} from "./chunk-RAXTPGM6.js";
import {
  J,
  W
} from "./chunk-3GIIPEHS.js";
import {
  d as d4
} from "./chunk-ONZPKEDE.js";
import {
  i as i4,
  o as o3
} from "./chunk-ZH6PYRVF.js";
import {
  i as i3
} from "./chunk-POMCHIIZ.js";
import {
  m as m3
} from "./chunk-TGMFGDP6.js";
import {
  p as p2
} from "./chunk-QM4DRRZI.js";
import {
  b as b3
} from "./chunk-AI2O2GKK.js";
import {
  b as b2
} from "./chunk-5X74MKXM.js";
import {
  S,
  y
} from "./chunk-4WO6KUCB.js";
import {
  d as d3
} from "./chunk-2Y4TRKRB.js";
import {
  D,
  E as E2,
  L as L2,
  M,
  P,
  Q,
  R,
  T as T2,
  h,
  j,
  ke,
  w as w3,
  x
} from "./chunk-6REABBOQ.js";
import {
  e as e2,
  l as l2,
  r as r3,
  u as u5
} from "./chunk-STBNLAGT.js";
import {
  o as o5
} from "./chunk-HSI6V34N.js";
import {
  u as u3
} from "./chunk-G34KEQQG.js";
import {
  O
} from "./chunk-XWXWIBVO.js";
import {
  u as u4
} from "./chunk-JLFV7EBO.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  g as g3
} from "./chunk-RDUV6YP6.js";
import {
  m as m2,
  r as r2
} from "./chunk-6P7HXSJ6.js";
import {
  A,
  d as d2,
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  i as i2
} from "./chunk-I4HN3ELT.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  g2
} from "./chunk-UFBX3XSC.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  L,
  b,
  d,
  e,
  f2 as f,
  s as s2,
  t,
  u2 as u,
  u3 as u2
} from "./chunk-M6FNW7GP.js";
import {
  a,
  i,
  l2 as l,
  n2,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G,
  has,
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/AggregateGraphic.js
var p3 = class extends b2 {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e8 = false) {
    var _a;
    if (this.popupTemplate) return this.popupTemplate;
    const t12 = (_a = this.sourceLayer) == null ? void 0 : _a.featureReduction;
    return t12 && "popupTemplate" in t12 && t12.popupEnabled ? t12.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
r([m({ type: Boolean })], p3.prototype, "isAggregate", void 0), p3 = r([a2("esri.AggregateGraphic")], p3);
var s5 = p3;

// node_modules/@arcgis/core/TrackGraphic.js
var s6 = class extends b2 {
  constructor() {
    super(...arguments), this.isAggregate = true;
  }
  getEffectivePopupTemplate(e8 = false) {
    var _a;
    if (this.popupTemplate) return this.popupTemplate;
    const r11 = (_a = this.sourceLayer) == null ? void 0 : _a.trackInfo;
    return (r11 == null ? void 0 : r11.enabled) && r11.popupEnabled ? r11.popupTemplate : null;
  }
  getObjectId() {
    return this.attributes.aggregateId;
  }
};
r([m({ type: Boolean })], s6.prototype, "isAggregate", void 0), s6 = r([a2("esri.TrackGraphic")], s6);
var p4 = s6;

// node_modules/@arcgis/core/layers/effects/FeatureEffectView.js
var c4 = class extends g {
  constructor(e8) {
    super(e8), this._filter = null, this.duration = has("mapview-transitions-duration"), this._excludedEffectView = new a6(e8), this._includedEffectView = new a6(e8);
  }
  get excludedEffects() {
    return this._excludedEffectView.effects;
  }
  set featureEffect(e8) {
    this._get("featureEffect") !== e8 && this._transitionTo(e8);
  }
  get filter() {
    var _a;
    return this._filter || ((_a = this.featureEffect) == null ? void 0 : _a.filter) || null;
  }
  get hasEffects() {
    return this._excludedEffectView.hasEffects || this._includedEffectView.hasEffects;
  }
  get includedEffects() {
    return this._includedEffectView.effects;
  }
  set scale(e8) {
    this._set("scale", e8), this._excludedEffectView.scale = e8, this._includedEffectView.scale = e8;
  }
  get transitioning() {
    return this._excludedEffectView.transitioning || this._includedEffectView.transitioning;
  }
  get transitioningToEmpty() {
    return !this._excludedEffectView.final && !this._includedEffectView.final;
  }
  transitionStep(e8, t12) {
    this._set("scale", t12), this.transitioning ? (this._includedEffectView.transitionStep(e8, t12), this._excludedEffectView.transitionStep(e8, t12), this.transitioning || (this._filter = null)) : (this._excludedEffectView.scale = t12, this._includedEffectView.scale = t12);
  }
  endTransition() {
    this._includedEffectView.endTransition(), this._excludedEffectView.endTransition(), this._filter = null;
  }
  _transitionTo(e8) {
    const t12 = this._get("featureEffect"), i12 = e8, s10 = i12 == null ? void 0 : i12.includedEffect, f5 = i12 == null ? void 0 : i12.excludedEffect, c13 = this._includedEffectView.canTransitionTo(s10) && this._excludedEffectView.canTransitionTo(f5);
    this._includedEffectView.effect = s10, this._excludedEffectView.effect = f5, this._set("featureEffect", i12), this._filter = (i12 == null ? void 0 : i12.filter) || (t12 == null ? void 0 : t12.filter) || null, c13 || this.endTransition();
  }
};
r([m()], c4.prototype, "_filter", void 0), r([m()], c4.prototype, "_excludedEffectView", void 0), r([m()], c4.prototype, "_includedEffectView", void 0), r([m()], c4.prototype, "duration", void 0), r([m()], c4.prototype, "excludedEffects", null), r([m()], c4.prototype, "featureEffect", null), r([m()], c4.prototype, "filter", null), r([m()], c4.prototype, "hasEffects", null), r([m()], c4.prototype, "includedEffects", null), r([m({ value: 0 })], c4.prototype, "scale", null), r([m()], c4.prototype, "transitioning", null), r([m()], c4.prototype, "transitioningToEmpty", null), c4 = r([a2("esri.layers.effects.FeatureEffectView")], c4);
var r5 = c4;

// node_modules/@arcgis/core/rest/support/AggregateFeatureSet.js
var c5 = class extends d4 {
  constructor() {
    super(...arguments), this.features = [];
  }
  readFeatures(e8, t12) {
    var _a;
    const o17 = g3.fromJSON(t12.spatialReference), s10 = [];
    for (let a13 = 0; a13 < e8.length; a13++) {
      const t13 = e8[a13], p10 = s5.fromJSON(t13), c13 = (_a = t13.geometry) == null ? void 0 : _a.spatialReference;
      null == p10.geometry || c13 || (p10.geometry.spatialReference = o17);
      const i12 = t13.aggregateGeometries, m10 = p10.aggregateGeometries;
      if (i12 && null != m10) for (const e9 in m10) {
        const r11 = m10[e9], t14 = i12[e9], s11 = t14 == null ? void 0 : t14.spatialReference;
        null == r11 || s11 || (r11.spatialReference = o17);
      }
      s10.push(p10);
    }
    return s10;
  }
};
r([m({ type: [s5], json: { write: true } })], c5.prototype, "features", void 0), r([o2("features")], c5.prototype, "readFeatures", null), c5 = r([a2("esri.rest.support.AggregateFeatureSet")], c5);
var i9 = c5;

// node_modules/@arcgis/core/views/2d/engine/webgl/shaderGraph/techniques/FeatureInstanceStore.js
var n5 = class {
  constructor() {
    this._instanceById = /* @__PURE__ */ new Map();
  }
  destroy() {
    this._instanceById.clear();
  }
  get size() {
    return this._instanceById.size;
  }
  entries() {
    return this._instanceById.entries();
  }
  updateStart() {
    this._instanceByIdNext = /* @__PURE__ */ new Map(), this._shaderCountByMesh = /* @__PURE__ */ new Map(), this._shaderIndices = /* @__PURE__ */ new Map();
  }
  updateEnd() {
    if (!this._instanceByIdNext) throw new Error("InternalError: Found updateEnd call without corresponding updateStart");
    for (const t12 of this._instanceById.keys()) this._instanceByIdNext.has(t12) || this._instanceById.delete(t12);
    for (const [t12, e8] of this._instanceByIdNext.entries()) {
      const s10 = this._instanceById.get(t12);
      s10 ? s10.setInput(e8.getInput()) : this._instanceById.set(t12, e8);
    }
    this._instanceByIdNext = null, this._shaderCountByMesh = null, this._shaderIndices = null;
  }
  values() {
    return this._instanceById.values();
  }
  ensureInstance(n15, i12) {
    let r11;
    if ("object" == typeof i12 && "optionalAttributes" in i12 && "uniforms" in i12) {
      const t12 = `${n15.type}.${JSON.stringify(i12.optionalAttributes)}`, e8 = t12 + `.${JSON.stringify(i12.uniforms)}`;
      let s10 = 0;
      null != this._instanceByIdNext && (this._shaderIndices.has(e8) ? s10 = this._shaderIndices.get(e8) : (s10 = this._shaderCountByMesh.get(t12) ?? 0, this._shaderCountByMesh.set(t12, s10 + 1), this._shaderIndices.set(e8, s10))), r11 = t12 + `.${s10}`;
    } else r11 = `${n15.type}.${JSON.stringify(i12)}`;
    const a13 = l(r11);
    if (this._instanceByIdNext) {
      const t12 = new i6(r4(a13), n15, i12);
      return this._instanceByIdNext.set(a13, t12), t12;
    }
    if (!this._instanceById.has(a13)) {
      const t12 = new i6(r4(a13), n15, i12);
      this._instanceById.set(a13, t12);
    }
    return this._instanceById.get(a13);
  }
  getInstance(t12) {
    const e8 = this._instanceById.get(t12);
    if (null == e8) throw new Error(`InternalError: Unable to get instance for ${t12}`);
    return e8;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/RenderState.js
var r6 = 1e3;
var d7 = class {
  constructor(t12, i12, s10, o17) {
    this.getStage = t12, this.getSubscriptionVersion = i12, this.version = s10, this._tileInfoView = o17, this._pendingUpdates = new t3(r6), this._locked = false, this._tiles = /* @__PURE__ */ new Map();
  }
  destroy() {
    for (const e8 of this.tiles()) e8.destroy();
    this._pendingUpdates.clear(), this._tiles.clear();
  }
  tiles() {
    return this._tiles.values();
  }
  size() {
    return this._tiles.size;
  }
  setTiles(e8) {
    this._tiles.clear();
    for (const t12 of e8) this._tiles.set(t12.key.id, t12);
  }
  lockUploads() {
    this._locked = true;
  }
  unlockUploads() {
    this._locked = false, this.flush();
  }
  enqueueUpdate(e8) {
    this._pendingUpdates.enqueue(e8);
  }
  update(e8) {
    if (!this._locked) for (; this._pendingUpdates.size; ) {
      const t12 = this._pendingUpdates.peek();
      if (null == t12 || t12.inner.attributeEpoch > e8) break;
      this._updateTile(t12), this._pendingUpdates.dequeue();
    }
  }
  removeTile(e8) {
    const t12 = this._tiles.get(e8);
    has("esri-2d-update-debug") && console.debug(`Tile[${e8}] RenderState.removeTile`), t12 == null ? void 0 : t12.destroy(), this._tiles.delete(e8);
  }
  isTileDone(e8) {
    const t12 = this._tiles.get(e8.id);
    return !!t12 && t12.isReady;
  }
  flush() {
    for (; this._pendingUpdates.size; ) {
      const e8 = this._pendingUpdates.dequeue();
      null != e8 && this._updateTile(e8);
    }
    for (const e8 of this._tiles.values()) e8.upload();
  }
  _updateTile(e8) {
    var _a;
    const { inner: t12, objectIdMap: i12 } = e8, s10 = this.getSubscriptionVersion(t12.id);
    if (s10 !== t12.subscriptionVesrion) {
      if (has("esri-2d-update-debug")) {
        const e9 = `${t12.subscriptionVesrion} != ${s10}`;
        console.debug(`Version[${e9}] Tile[${t12.id}] FeatureContainer - Dropping message, outdated version]`, t12);
      }
      return;
    }
    if (has("esri-2d-update-debug")) {
      const e9 = ((_a = t12.debugInfo) == null ? void 0 : _a.chunkId) ?? "<EnsureEnd>";
      console.debug(`Version[${t12.version}] Tile[${t12.id}] Chunk[${e9}] RenderState.updateTile [${t12.type}]`, t12);
    }
    const o17 = this._ensureTile(t12.id);
    if ("update" === t12.type) {
      const [e9, ...s11] = t12.modify;
      o17.onMessage({ type: "update", modify: e9, remove: t12.remove, end: t12.end, attributeEpoch: t12.attributeEpoch, objectIdMap: i12 });
      for (const o18 of s11) {
        const e10 = this._tiles.get(o18.tileId);
        e10 && e10.onMessage({ type: "update", modify: o18, remove: t12.remove, end: false, isPixelBuffer: true, attributeEpoch: null, objectIdMap: i12 });
      }
      return;
    }
    if (null == t12.append) return void o17.onMessage({ type: "append", clear: t12.clear, debugInfo: t12.debugInfo, end: t12.end, attributeEpoch: t12.attributeEpoch, objectIdMap: i12 });
    const [n15, ...r11] = t12.append;
    o17.onMessage({ type: "append", clear: t12.clear, append: n15, debugInfo: t12.debugInfo, end: t12.end, attributeEpoch: t12.attributeEpoch, objectIdMap: i12 });
    for (const d10 of r11) {
      const e9 = this._tiles.get(d10.tileId);
      e9 && e9.onMessage({ type: "update", modify: d10, remove: [], sort: false, end: false, isPixelBuffer: true, attributeEpoch: null, objectIdMap: i12 });
    }
  }
  _ensureTile(e8) {
    if (!this._tiles.has(e8)) {
      const t12 = this._createTile(e8);
      this._copyPixelBufferedEntitiesInto(t12), this._tiles.set(e8, t12);
    }
    return this._tiles.get(e8);
  }
  _createTile(e8) {
    has("esri-2d-update-debug") && console.debug(`Version[${this.version}] Tile[${e8}] RenderState.createTile`);
    const r11 = new e3(e8), d10 = this._tileInfoView.getTileBounds(u3(), r11), l9 = this._tileInfoView.getTileResolution(r11.level), a13 = new b4(r11, l9, d10[0], d10[3], true);
    if (a13.stage = this.getStage(), !a13.stage) {
      const e9 = new s("featurelayerview:webgl", "Cannot create tile with empty stage");
      n2.getLogger("esri.views.2d.layers.features.RenderState").error(e9);
    }
    return a13;
  }
  _copyPixelBufferedEntitiesInto(e8) {
    let t12 = 7;
    const i12 = this._tileInfoView.getLODInfoAt(e8.key);
    for (let s10 = -1; s10 <= 1; s10++) for (let o17 = -1; o17 <= 1; o17++) {
      if (0 === s10 && 0 === o17) continue;
      const n15 = e8.key.getNormalizedNeighbor(o17, s10, i12).id, r11 = this._tiles.get(n15);
      if (null != r11) {
        const i13 = 1 << t12;
        e8.copyPixelBufferedEntitesFrom(r11, i13, o17, s10);
      }
      t12--;
    }
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/FeatureContainer.js
var c6 = class {
  constructor(e8, s10) {
    this.id = e8, this.version = s10, this._resolver = L(), this._done = false;
  }
  get done() {
    return this._done;
  }
  get promise() {
    return this._resolver.promise;
  }
  end() {
    this._resolver.resolve(), this._done = true;
  }
  destroy() {
    this._resolver.reject();
  }
};
var _ = class extends n4 {
  constructor(e8) {
    super(e8.view.featuresTilingScheme), this.updatingHandles = new h2(), this._hitTestsRequests = [], this._store = new n5(), this._visibleTiles = /* @__PURE__ */ new Set(), this._subscriptions = /* @__PURE__ */ new Map(), this._updateStatisticsRequests = [], this._lockStatisticUpdates = false, this._shouldUnlockAttributeView = false, this._layerView = e8, this.addTransitionable(this._layerView.featureEffectView);
  }
  renderChildren(e8) {
    var _a, _b;
    if (this._updateAttributeView(), (_a = this._renderState) == null ? void 0 : _a.update(this.attributeView.currentEpoch), this._renderState) {
      const e9 = Array.from(this._renderState.tiles()).filter((e10) => e10.needsUpload);
      if (e9.length) {
        e9[Math.floor(Math.random() * e9.length)].upload(), e9.length >= 2 && this.requestRender();
      }
      for (const t12 of this._renderState.tiles()) t12.tryReady(this.attributeView.currentEpoch) && ((_b = this._subscriptions.get(t12.key.id)) == null ? void 0 : _b.end(), this._layerView.requestUpdate(), this.hasLabels && this._layerView.view.labelManager.requestUpdate(), this.requestRender());
    }
    for (const t12 of this.children) t12.setTransform(e8.state);
    switch (super.renderChildren(e8), e8.drawPhase) {
      case E3.MAP:
        return this._renderMapPhase(e8);
      case E3.HIGHLIGHT:
        return this._renderHighlightPhase(e8);
      case E3.LABEL:
        return this._renderLabelPhase(e8);
    }
  }
  subscriptions() {
    return this._subscriptions.values();
  }
  get _instanceStore() {
    return this._store;
  }
  get instanceStore() {
    return this._store;
  }
  get layerView() {
    return this._layerView;
  }
  get hasLabels() {
    return this._layerView.labelingCollisionInfos.length > 0;
  }
  get hasHighlight() {
    return this._layerView.hasHighlight;
  }
  get _layer() {
    return this._layerView.layer;
  }
  _getHeatmapInstance(e8) {
    if (null == this._instanceStore || !(e8.drawPhase & j2.heatmap.drawPhase)) return null;
    for (const t12 of this._instanceStore.values()) if (p5(t12)) return t12;
    return null;
  }
  get children() {
    return this._renderState ? Array.from(this._renderState.tiles()).filter((e8) => this._visibleTiles.has(e8.key.id)) : [];
  }
  updateAttributeView(e8) {
    this.requestRender(), this.attributeView.requestUpdate(e8), this.hasLabels && this._layerView.view.labelManager.requestUpdate();
  }
  updateSubscriptions(e8) {
    for (const { tileId: t12, version: s10 } of e8.subscribe) if (this._subscriptions.has(t12)) this._subscriptions.get(t12).version = s10;
    else {
      const e9 = new c6(t12, s10);
      this._subscriptions.set(t12, e9), this.updatingHandles.addPromise(e9.promise);
    }
    for (const t12 of e8.unsubscribe) {
      const e9 = this._subscriptions.get(t12);
      e9 == null ? void 0 : e9.destroy(), this._subscriptions.delete(t12), this.removeTile(t12);
    }
  }
  isDone(e8) {
    return !!this._renderState && this._renderState.isTileDone(e8);
  }
  async updateRenderState(e8) {
    has("esri-2d-update-debug") && console.debug(`Version[${e8}] FeatureContainer.updateRenderState`), this._renderStateNext = new d7(() => this._stage, (e9) => {
      var _a;
      return (_a = this._subscriptions.get(e9)) == null ? void 0 : _a.version;
    }, e8, this.tileInfoView);
  }
  getDisplayStatistics(e8, t12) {
    const s10 = this._statisticsByLevel.get(e8);
    return s10 ? s10.get(t12) : null;
  }
  updateStatistics(e8, t12) {
    if (this._lockStatisticUpdates) return void this._updateStatisticsRequests.push({ level: e8, statistics: t12 });
    let s10 = this._statisticsByLevel.get(e8);
    s10 || (s10 = /* @__PURE__ */ new Map(), this._statisticsByLevel.set(e8, s10));
    for (const r11 of t12) s10.set(r11.fieldName, { minValue: r11.minValue, maxValue: r11.maxValue });
  }
  lockForOverrides() {
    var _a;
    (_a = this._renderState) == null ? void 0 : _a.lockUploads(), this._lockStatisticUpdates = true, this.attributeView.locked || (this.attributeView.lockTextureUploads(), this._shouldUnlockAttributeView = true);
  }
  unlockForOverrides() {
    var _a, _b;
    (_a = this._renderState) == null ? void 0 : _a.unlockUploads(), this._shouldUnlockAttributeView && (this.attributeView.unlockTextureUploads(), this._shouldUnlockAttributeView = false), this._lockStatisticUpdates = false;
    for (const e8 of this._updateStatisticsRequests) this.updateStatistics(e8.level, e8.statistics);
    this._updateStatisticsRequests = [], (_b = this._renderState) == null ? void 0 : _b.flush(), this.requestRender();
  }
  trySwapRenderState() {
    var _a;
    this._renderStateNext && (has("esri-2d-update-debug") && console.debug(`Version[${this._renderStateNext.version}] FeatureContainer.update.swapRenderState`), (_a = this._renderState) == null ? void 0 : _a.destroy(), this._renderState = this._renderStateNext, this._renderState.flush(), this._renderStateNext = null), this.requestRender();
  }
  setVisibleTiles(e8) {
    this._visibleTiles = e8;
  }
  async onMessage(t12, s10) {
    s2(s10);
    const r11 = t12.inner;
    if (!this._subscriptions.has(r11.id)) return;
    const i12 = this._subscriptions.get(r11.id);
    if (i12.version !== r11.subscriptionVesrion) {
      if (has("esri-2d-update-debug")) {
        const e8 = `${r11.subscriptionVesrion} != ${i12.version}`;
        console.debug(`Version[${e8}] Tile[${r11.id}] FeatureContainer - Dropping message, outdated version]`, r11);
      }
      return;
    }
    const n15 = this._renderStateNext ?? this._renderState;
    if (!n15) throw new Error("InternalError: No renderState defined");
    n15.version !== r11.version && console.error(`InternalError: Version mismatch. [renderState: ${n15.version}, message: ${r11.version}]`), n15.enqueueUpdate(t12), this.requestRender(), this._layerView.view.labelManager.requestUpdate(), this._layerView.requestUpdate();
  }
  removeTile(e8) {
    (this._renderState || this._renderStateNext) && (this._renderState && this._renderState.removeTile(e8), this._renderStateNext && this._renderStateNext.removeTile(e8));
  }
  hitTest(e8) {
    let s10 = this._hitTestsRequests.find(({ x: t12, y: s11 }) => t12 === e8.x && s11 === e8.y);
    const r11 = L();
    return s10 ? s10.resolvers.push(r11) : (s10 = { x: e8.x, y: e8.y, resolvers: [r11] }, this._hitTestsRequests.push(s10)), this.requestRender(), r11.promise;
  }
  getSortKeys(e8) {
    const t12 = new Set(e8), s10 = /* @__PURE__ */ new Map();
    for (const r11 of this.children) if (r11.getSortKeys(t12).forEach((e9, t13) => s10.set(t13, e9)), s10.size === t12.size) break;
    return s10;
  }
  get hasAnimation() {
    return this.hasLabels;
  }
  doRender(e8) {
    const { minScale: t12, maxScale: s10 } = this._layer.effectiveScaleRange, r11 = e8.state.scale;
    r11 <= (t12 || 1 / 0) && r11 >= s10 && super.doRender(e8);
  }
  afterRender(e8) {
    super.afterRender(e8), this._hitTestsRequests.length && this.requestRender();
  }
  setStencilReference(e8) {
    if (null == this._getHeatmapInstance(e8)) super.setStencilReference(e8);
    else for (const t12 of this.children) t12.stencilRef = j2.heatmap.getStencilReference(t12);
  }
  _renderMapPhase(e8) {
    this._layerView.featureEffectView.hasEffects ? (this._renderOutsideEffect(e8), this._renderInsideEffect(e8)) : this._renderFeatures(e8, R2.All), this._hitTestsRequests.length > 0 && this._renderHittest(e8);
  }
  _renderHighlightPhase(e8) {
    this.hasHighlight && g4(e8, false, (e9) => {
      this._renderFeatures(e9, R2.Highlight);
    });
  }
  _renderLabelPhase(e8) {
    this._renderFeatures(e8, R2.All);
  }
  _renderInsideEffect(e8) {
    const t12 = e8.painter.effects.insideEffect;
    t12.bind(e8), this._renderFeatures(e8, R2.InsideEffect), t12.draw(e8, this._layerView.featureEffectView.includedEffects), t12.unbind();
  }
  _renderOutsideEffect(e8) {
    const t12 = e8.painter.effects.outsideEffect;
    t12.bind(e8), this._renderFeatures(e8, R2.OutsideEffect), t12.draw(e8, this._layerView.featureEffectView.excludedEffects), t12.unbind();
  }
  _renderHittest(e8) {
    const { context: t12 } = e8, s10 = e8.painter.effects.hittest, r11 = t12.getBoundFramebufferObject(), a13 = t12.getViewport(), o17 = e8.passOptions, h4 = e8.drawPhase;
    s10.bind(e8), e8.passOptions = s10.createOptions(e8, this._hitTestsRequests), e8.drawPhase = E3.HITTEST;
    const { distance: d10, smallSymbolDistance: l9 } = e8.passOptions, u14 = Math.max(d10, l9);
    for (const i12 of this.children) i12.visible && i12.containsScreenPoint(e8.state, e8.passOptions.position, 2 * u14) && this._renderTile(i12, e8, R2.All);
    s10.draw(e8), s10.unbind(), t12.bindFramebuffer(r11), t12.restoreViewport(a13), e8.passOptions = o17, e8.drawPhase = h4;
  }
  _renderFeatures(e8, t12) {
    const s10 = this._getHeatmapInstance(e8);
    null != s10 ? this._renderHeatmapFeatures(e8, t12, s10) : this._renderGeometryFeatures(e8, t12);
  }
  _renderGeometryFeatures(e8, t12) {
    for (const s10 of this.children) s10.visible && this._renderTile(s10, e8, t12);
  }
  _renderHeatmapFeatures(e8, t12, s10) {
    for (const r11 of this.children) r11.visible && this._renderTile(r11, e8, t12, e4.Heatmap);
    s10.techniqueRef.renderResolvePass(e8, s10);
  }
  _renderTile(e8, t12, s10, r11) {
    const i12 = has("featurelayer-strict-draw-order") ? N.STRICT_ORDER : has("featurelayer-force-marker-text-draw-order") ? N.STRICT_MARKERS_AND_TEXT : N.BATCHING, n15 = e8.getDisplayList(this._instanceStore, i12);
    t12.selection = s10, n15 == null ? void 0 : n15.render(t12, r11);
  }
};
function p5(e8) {
  return e8.techniqueRef.type === e4.Heatmap;
}

// node_modules/@arcgis/core/views/2d/layers/features/FeaturePipelineWorkerProxy.js
async function t6(t12) {
  const o17 = await p2("FeaturePipelineWorker", { client: t12, strategy: "dedicated" });
  return new n6(o17);
}
var n6 = class {
  constructor(e8) {
    this._connection = e8, this.pipeline = this._connection.createInvokeProxy(), this.features = this._connection.createInvokeProxy("features"), this.aggregates = this._connection.createInvokeProxy("aggregates"), this.streamMessenger = this._connection.createInvokeProxy("streamMessenger");
  }
  destroy() {
    this._connection.destroy();
  }
  get closed() {
    return this._connection.closed;
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/FeatureSourceEventLog.js
var n7 = 10;
var l3 = class extends g {
  constructor() {
    super(...arguments), this.events = new i2(), this._updatingStrategy = true, this._tileToEvent = new s3(), this._fetchStatus = { outstanding: 0, done: 0 };
  }
  get hasAllData() {
    return !this._updatingStrategy && this._hasAllTileData();
  }
  get willQueryAllFeatures() {
    var _a;
    return ((_a = this._strategyInfo) == null ? void 0 : _a.willQueryAllFeatures) ?? false;
  }
  get willQueryFullResolutionGeometry() {
    var _a;
    return ((_a = this._strategyInfo) == null ? void 0 : _a.willQueryAllFeatures) ?? false;
  }
  onEvent(t12) {
    switch (t12.type) {
      case "subscribe":
      case "unsubscribe":
      case "loaded":
      case "error":
        this._handleTileEvent(t12);
        break;
      case "updateStrategyStart":
        this._updatingStrategy = true, this._fetchStatus = { done: 0, outstanding: 0 }, this._strategyInfo = t12.about;
        break;
      case "updateStrategyEnd":
        this._updatingStrategy = false;
        break;
      case "updateFieldsStart":
        this._fetchStatus = { done: 0, outstanding: 0 };
        break;
      case "updateFieldsEnd":
        break;
      case "updateFieldsError":
        this.events.emit("error", t12);
        break;
      case "fetchStart":
        this._fetchStatus.outstanding += 1, this.events.emit("status", this._fetchStatus);
        break;
      case "fetchEnd":
        this._fetchStatus.done += 1, this.events.emit("status", this._fetchStatus), t12.done && (this._fetchStatus = { done: 0, outstanding: 0 });
    }
  }
  _hasAllTileData() {
    for (const t12 of this._tileToEvent.values()) {
      const e8 = t12.peekLast();
      if ("loaded" !== (e8 == null ? void 0 : e8.type)) return false;
    }
    return true;
  }
  _handleTileEvent(t12) {
    switch (t12.type) {
      case "subscribe": {
        const e8 = new t3(n7);
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8);
        break;
      }
      case "unsubscribe":
        this._tileToEvent.delete(t12.tile);
        break;
      case "loaded": {
        const e8 = this._tileToEvent.get(t12.tile);
        if (!e8) return;
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8);
        break;
      }
      case "error": {
        const e8 = this._tileToEvent.get(t12.tile);
        if (!e8) return;
        e8.enqueue(t12), this._tileToEvent.set(t12.tile, e8), this.events.emit("error", t12);
        break;
      }
    }
  }
};
r([m({ readOnly: true })], l3.prototype, "hasAllData", null), r([m()], l3.prototype, "willQueryAllFeatures", null), r([m()], l3.prototype, "willQueryFullResolutionGeometry", null), r([m()], l3.prototype, "_updatingStrategy", void 0), r([m()], l3.prototype, "_strategyInfo", void 0), r([m()], l3.prototype, "_tileToEvent", void 0), l3 = r([a2("esri.views.2d.layers.features.FeatureSourceEventLog")], l3);

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/geometryUtils.js
function e5(e8) {
  switch (e8.geometryType) {
    case "point":
      return "esriGeometryPoint";
    case "polyline":
      return "esriGeometryPolyline";
    case "mesh":
    case "polygon":
      return "esriGeometryPolygon";
    case "multipatch":
      return "esriGeometryMultiPatch";
    case "multipoint":
      return "esriGeometryMultipoint";
    default:
      return null;
  }
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/featureReductionUtils.js
function e6(e8, a13) {
  const c13 = e8.featureReduction;
  return c13 && "selection" !== c13.type && (!("maxScale" in c13) || !c13.maxScale || c13.maxScale < a13.scale) ? c13 : null;
}

// node_modules/@arcgis/core/views/2d/layers/support/visualVariableSimpleUtils.js
var r7 = Math.PI;
function i10(e8, t12) {
  switch (t12.transformationType) {
    case i3.Additive:
      return s7(e8, t12);
    case i3.Constant:
      return o9(t12, e8);
    case i3.ClampedLinear:
      return u7(e8, t12);
    case i3.Proportional:
      return l4(e8, t12);
    case i3.Stops:
      return c7(e8, t12);
    case i3.RealWorldSize:
      return m5(e8, t12);
    case i3.Identity:
      return e8;
    case i3.Unknown:
      return null;
  }
}
function a10(e8, t12) {
  return "number" == typeof e8 ? e8 : i10(t12, e8);
}
function s7(e8, t12) {
  return e8 + (a10(t12.minSize, e8) || t12.minDataValue);
}
function o9(e8, t12) {
  const n15 = e8.stops;
  let r11 = (n15 == null ? void 0 : n15.length) && n15[0].size;
  return null == r11 && (r11 = e8.minSize), a10(r11, t12);
}
function u7(e8, t12) {
  const n15 = t12.minDataValue, r11 = t12.maxDataValue, i12 = (e8 - n15) / (r11 - n15), s10 = a10(t12.minSize, e8), o17 = a10(t12.maxSize, e8);
  return e8 <= n15 ? s10 : e8 >= r11 ? o17 : s10 + i12 * (o17 - s10);
}
function l4(t12, n15) {
  const r11 = t12 / n15.minDataValue, i12 = a10(n15.minSize, t12), s10 = a10(n15.maxSize, t12);
  let o17 = null;
  return o17 = r11 * i12, r2(o17, i12, s10);
}
function c7(e8, t12) {
  const [n15, r11, i12] = p6(e8, t12.cache.ipData);
  if (n15 === r11) return a10(t12.stops[n15].size, e8);
  {
    const s10 = a10(t12.stops[n15].size, e8);
    return s10 + (a10(t12.stops[r11].size, e8) - s10) * i12;
  }
}
function m5(n15, i12) {
  const s10 = m3[i12.valueUnit], o17 = a10(i12.minSize, n15), u14 = a10(i12.maxSize, n15), { valueRepresentation: l9 } = i12;
  let c13 = null;
  return c13 = "area" === l9 ? 2 * Math.sqrt(n15 / r7) / s10 : "radius" === l9 || "distance" === l9 ? 2 * n15 / s10 : n15 / s10, r2(c13, o17, u14);
}
function p6(e8, t12) {
  if (!t12) return;
  let n15 = 0, r11 = t12.length - 1;
  return t12.some((t13, i12) => e8 < t13 ? (r11 = i12, true) : (n15 = i12, false)), [n15, r11, (e8 - t12[n15]) / (t12[r11] - t12[n15])];
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/labelingUtils.js
function l5(n15) {
  var _a;
  return (n15.labelsVisible && ((_a = n15.labelingInfo) == null ? void 0 : _a.every((n16) => "none" !== n16.deconflictionStrategy))) ?? false;
}
function r8(n15, i12) {
  var _a;
  const l9 = e6(n15, i12);
  if ((l9 == null ? void 0 : l9.labelsVisible) && ((_a = l9.labelingInfo) == null ? void 0 : _a.length)) return l9.labelingInfo.every((n16) => "none" !== n16.deconflictionStrategy);
}
function t7(e8) {
  return (l9) => u4(i10(l9, e8));
}
function o10(n15) {
  const e8 = null != n15 && "visualVariables" in n15 && n15.visualVariables;
  if (!e8) return null;
  for (const i12 of e8) if ("size" === i12.type) return t7(i12);
  return null;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/SourceSchema.js
function t8(t12, i12, s10, o17) {
  var _a, _b;
  const l9 = null != t12.subtypeCode ? `${t12.subtypeField} = ${t12.subtypeCode}` : null, n15 = r3(t12.definitionExpression, l9), r11 = t12.customParameters ?? {}, a13 = i12.displayFilterEnabled && t12.displayFilterInfo ? t12.displayFilterInfo.toJSON() : null;
  return o17 && (r11.token = o17), { type: "feature", mutable: { sourceRefreshVersion: s10, availableFields: i12.availableFields, displayFilterInfo: a13, dataFilter: { definitionExpression: n15, customParameters: r11, gdbVersion: t12.gdbVersion, historicMoment: (_a = t12.historicMoment) == null ? void 0 : _a.getTime(), queryScaleRanges: t12.queryScaleRanges ?? [], timeExtent: (_b = t12.timeExtent) == null ? void 0 : _b.toJSON() } } };
}

// node_modules/@arcgis/core/views/2d/engine/webgl/color.js
function u8(n15, r11, t12 = 0) {
  if (null == r11) return n15[t12] = 0, n15[t12 + 1] = 0, n15[t12 + 2] = 0, void (n15[t12 + 3] = 0);
  const { r: o17, g: u14, b: i12, a: c13 } = r11;
  n15[t12] = o17 * c13 / 255, n15[t12 + 1] = u14 * c13 / 255, n15[t12 + 2] = i12 * c13 / 255, n15[t12 + 3] = c13;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/symbols/SymbolSchema.js
async function g5(i12, a13) {
  if (!i12) return [];
  switch (i12.type) {
    case "simple-fill":
      return P2(i12, a13);
    case "picture-fill":
      return U(i12, a13);
    case "simple-marker":
      return w4(i12, a13);
    case "picture-marker":
      return O2(i12, a13);
    case "simple-line":
      return F(i12, a13, false);
    case "text":
      return L3(i12, a13);
    case "label":
      return R3(i12, a13);
    case "cim":
      return c3(i12.data, a13);
    case "web-style": {
      const e8 = await i12.fetchCIMSymbol();
      return c3(e8.data, a13);
    }
    case "line-3d":
      return n2.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i12.type}" unsupported in MapView. Defaulting to simple-line`), F(new d3(), a13, false);
    case "point-3d":
      return n2.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i12.type}" unsupported in MapView. Defaulting to simple-marker`), w4(new y(), a13);
    case "polygon-3d":
      return n2.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i12.type}" unsupported in MapView. Defaulting to simple-fill`), P2(new S(), a13);
    case "mesh-3d":
    case "label-3d":
      return n2.getLogger("esri.views.layers.FeatureLayerView").warn("unsupported-symbol", `Symbol of type "${i12.type}" unsupported in MapView. Ignoring`), [];
    case "CIMSymbolReference":
      throw new Error("InternalError: CIMSymbolReference should already be resolved");
  }
}
async function M2(e8, i12) {
  const { schemaOptions: a13 } = i12, { store: r11 } = a13, t12 = new Array(s4), o17 = new Array(s4 / 4);
  for (let l9 = 0; l9 < s4; l9++) {
    const i13 = l9 < e8.attributes.length ? e8.attributes[l9].color : null;
    t12[l9] = [0, 0, 0, 0], u8(t12[l9], i13);
  }
  for (let l9 = 0; l9 < s4 / 4; l9++) o17[l9] = [0, 0, 0, 0], o17[l9][0] = 4 * l9 < e8.attributes.length ? 1 : 0, o17[l9][1] = 4 * l9 + 1 < e8.attributes.length ? 1 : 0, o17[l9][2] = 4 * l9 + 2 < e8.attributes.length ? 1 : 0, o17[l9][3] = 4 * l9 + 3 < e8.attributes.length ? 1 : 0;
  const s10 = { uniforms: { isActive: o17, colors: t12, dotValue: e8.dotValue, dotScale: e8.referenceScale, blending: e8.dotBlendingEnabled, dotSize: e8.dotSize, seed: e8.seed }, optionalAttributes: {} }, n15 = r11.ensureInstance(j2.dotDensity, s10).createMeshInfo({ effects: null }), u14 = [], c13 = new S({ color: e8.backgroundColor ?? [0, 0, 0, 0], outline: null }), p10 = await g5(c13, i12);
  if (u14.push(...p10), u14.push(n15), e8.outline) {
    const a14 = F(e8.outline, i12, true);
    u14.push(...a14);
  }
  return u14;
}
async function x3(e8, l9) {
  const { store: r11 } = l9, { radius: t12, minDensity: o17, maxDensity: s10, referenceScale: n15, field: u14, valueExpression: c13, colorStops: p10 } = e8, f5 = f2(p10);
  return [r11.ensureInstance(j2.heatmap, { uniforms: { radius: u4(t12), minDensity: o17, maxDensity: s10, referenceScale: n15, isFieldActive: !(!u14 && !c13), gradient: f5, gradientHash: f5.join(",") }, optionalAttributes: {} }).createMeshInfo({ effects: null })];
}
async function C(e8, a13) {
  var _a, _b, _c, _d;
  const { store: l9 } = a13, r11 = ((_a = e8.outline) == null ? void 0 : _a.width) || 0, t12 = h3(e8), o17 = l9.ensureInstance(j2.pieChart, { uniforms: { shader: { outlineWidth: Math.round(u4(r11)), defaultColor: t4(e8.defaultColor), outlineColor: t4((_b = e8.outline) == null ? void 0 : _b.color), othersColor: t4((_c = e8.othersCategory) == null ? void 0 : _c.color), donutRatio: e8.holePercentage, sectorThreshold: ((_d = e8.othersCategory) == null ? void 0 : _d.threshold) || 0, colors: e8.attributes.map((e9) => t4(e9.color)), visualVariableOpacity: t12.visualVariableOpacity, visualVariableSizeMinMaxValue: t12.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: t12.visualVariableSizeScaleStops, visualVariableSizeStops: t12.visualVariableSizeStops, visualVariableSizeUnitValue: t12.visualVariableSizeUnitValue, hittestUniforms: null }, numberOfFields: e8.attributes.length }, optionalAttributes: {} }).createMeshInfo({ size: e8.size, outlineWidth: r11, effects: null, scaleInfo: null, minPixelBuffer: x2(t12) });
  return [...e8.backgroundFillSymbol ? await P2(e8.backgroundFillSymbol, { schemaOptions: a13, path: "", uniforms: z }) : [], o17];
}
function I(e8) {
  if ("path" === e8.style) {
    if (null == e8.path) throw new Error("Symbol with a style of type path must define a path");
    return { type: "sprite-rasterization-param", overrides: [], resource: { type: "path", path: e8.path, asFill: true } };
  }
  const i12 = te.fromSimpleMarker(e8);
  if ("outline" in e8 && e8.outline && "none" !== e8.outline.style) {
    if ("solid" !== e8.outline.style) {
      if (!i12 || !i12.symbolLayers) throw new Error("Error handling marker! ");
      return { type: "sprite-rasterization-param", resource: i12.symbolLayers[0], overrides: [] };
    }
  }
  return { type: "sprite-rasterization-param", resource: a5(i12), overrides: [] };
}
async function w4(e8, i12) {
  var _a, _b, _c, _d, _e;
  const { uniforms: a13, schemaOptions: l9 } = i12, { store: r11 } = l9;
  if ("path" === e8.style || e8.outline && "solid" !== e8.outline.style && "none" !== e8.outline.style) {
    const l10 = te.fromSimpleMarker(e8);
    if (!l10 || !l10.symbolLayers) throw new Error("Error handling marker! ");
    if (a13.visualVariableRotation && (l10.angleAlignment = "Map"), "path" !== e8.style) {
      const e9 = l10.symbolLayers[0];
      if (a7(i12.uniforms)) {
        const a14 = x2(i12.uniforms, 0, 1);
        if (a14 > e9.size) {
          const i13 = a14 / e9.size;
          e9.size = a14;
          const l11 = (_a = e9.markerGraphics) == null ? void 0 : _a[0].symbol;
          (l11.symbolLayers && l11.symbolLayers[0]).width *= i13;
        }
      }
    }
    return c3({ type: "CIMSymbolReference", symbol: l10 }, i12);
  }
  const t12 = r11.ensureInstance(j2.marker, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity, visualVariableSizeMinMaxValue: a13.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: a13.visualVariableSizeScaleStops, visualVariableSizeStops: a13.visualVariableSizeStops, visualVariableSizeUnitValue: a13.visualVariableSizeUnitValue, visualVariableRotation: a13.visualVariableRotation }, optionalAttributes: { zoomRange: false } }), s10 = I(e8);
  let u14 = ((_b = e8.color) == null ? void 0 : _b.toArray()) ?? [0, 0, 0, 0];
  "CIMVectorMarker" === s10.resource.type && (u14 = [255, 255, 255, 255]);
  const c13 = "triangle" === e8.style ? 124 / 116 : 1, p10 = e8.size, f5 = p10 * c13, b6 = null != a13.visualVariableColor && ("cross" === e8.style || "x" === e8.style);
  return [t12.createMeshInfo({ type: "simple", color: u14, height: p10, width: f5, offsetX: e8.xoffset, offsetY: e8.yoffset, angle: e8.angle, alignment: i5(a13) ? i4.MAP : i4.SCREEN, outlineColor: ((_d = (_c = e8.outline) == null ? void 0 : _c.color) == null ? void 0 : _d.toArray()) ?? [0, 0, 0, 0], outlineSize: ((_e = e8.outline) == null ? void 0 : _e.width) ?? 1, referenceSize: p10, sprite: s10, overrideOutlineColor: b6, hasSizeVV: a7(a13), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: x2(a13) })];
}
function O2(e8, i12) {
  const { uniforms: a13, schemaOptions: l9 } = i12, { store: r11 } = l9, t12 = r11.ensureInstance(j2.marker, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity, visualVariableSizeMinMaxValue: a13.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: a13.visualVariableSizeScaleStops, visualVariableSizeStops: a13.visualVariableSizeStops, visualVariableSizeUnitValue: a13.visualVariableSizeUnitValue, visualVariableRotation: a13.visualVariableRotation }, optionalAttributes: { zoomRange: false } }), s10 = te.createPictureMarkerRasterizationParam(e8);
  if (!s10) return [];
  return [t12.createMeshInfo({ type: "picture", color: [255, 255, 255, 255], height: e8.height, width: e8.width, offsetX: e8.xoffset, offsetY: e8.yoffset, angle: e8.angle, alignment: i5(a13) ? i4.MAP : i4.SCREEN, outlineColor: null, outlineSize: 0, referenceSize: e8.height, sprite: s10, overrideOutlineColor: false, hasSizeVV: a7(a13), placement: null, effects: null, transforms: null, scaleInfo: null, minPixelBuffer: x2(a13) })];
}
function A2(e8, i12, a13) {
  var _a, _b;
  const { uniforms: l9, schemaOptions: r11 } = a13, { store: t12 } = r11, o17 = t12.ensureInstance(j2.marker, { uniforms: { visualVariableColor: l9.visualVariableColor, visualVariableOpacity: l9.visualVariableOpacity, visualVariableSizeMinMaxValue: l9.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: l9.visualVariableSizeScaleStops, visualVariableSizeStops: l9.visualVariableSizeStops, visualVariableSizeUnitValue: l9.visualVariableSizeUnitValue, visualVariableRotation: l9.visualVariableRotation }, optionalAttributes: { zoomRange: false } }), s10 = I(e8), c13 = 6, p10 = c13 * i12.width, f5 = p10, b6 = ((_a = e8.color) == null ? void 0 : _a.toArray()) ?? ((_b = i12.color) == null ? void 0 : _b.toArray()) ?? [0, 0, 0, 0], S3 = "cross" === e8.style || "x" === e8.style;
  let V2;
  switch (e8.placement) {
    case "begin-end":
      V2 = o3.Both;
      break;
    case "begin":
      V2 = o3.JustBegin;
      break;
    case "end":
      V2 = o3.JustEnd;
      break;
    default:
      V2 = o3.None;
  }
  const v2 = { type: "cim-marker-placement-param", placement: { type: "CIMMarkerPlacementAtExtremities", angleToLine: true, offset: 0, extremityPlacement: V2, offsetAlongLine: 0 }, overrides: [] };
  return [o17.createMeshInfo({ type: "simple", color: b6, height: f5, width: p10, offsetX: 0, offsetY: 0, angle: 0, alignment: i5(l9) ? i4.MAP : i4.SCREEN, outlineColor: b6, outlineSize: S3 ? i12.width : 0, referenceSize: f5 / c13, sprite: s10, overrideOutlineColor: S3 && null != l9.visualVariableColor, hasSizeVV: a7(l9), placement: v2, transforms: null, effects: null, scaleInfo: null, minPixelBuffer: x2(l9) })];
}
function L3(e8, i12) {
  var _a, _b, _c, _d;
  const { uniforms: a13, schemaOptions: l9 } = i12, { store: r11 } = l9;
  return [r11.ensureInstance(j2.text, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity, visualVariableRotation: a13.visualVariableRotation, visualVariableSizeMinMaxValue: a13.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: a13.visualVariableSizeScaleStops, visualVariableSizeStops: a13.visualVariableSizeStops, visualVariableSizeUnitValue: a13.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: false, clipAngle: false, referenceSymbol: false } }).createMeshInfo({ boxBackgroundColor: (_a = e8.backgroundColor) == null ? void 0 : _a.toArray(), boxBorderLineColor: (_b = e8.borderLineColor) == null ? void 0 : _b.toArray(), boxBorderLineSize: e8.borderLineSize ?? 0, color: ((_c = e8.color) == null ? void 0 : _c.toArray()) ?? [0, 0, 0, 0], offsetX: e8.xoffset, offsetY: e8.yoffset, postAngle: e8.angle, fontSize: e8.font.size, decoration: e8.font.decoration, haloColor: ((_d = e8.haloColor) == null ? void 0 : _d.toArray()) ?? [0, 0, 0, 0], haloSize: e8.haloSize ?? 0, outlineColor: [0, 0, 0, 0], outlineSize: 0, lineWidth: e8.lineWidth, lineHeightRatio: e8.lineHeight, horizontalAlignment: e8.horizontalAlignment, verticalAlignment: e8.verticalAlignment, useCIMAngleBehavior: false, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: e8.font.toJSON(), textString: e8.text, symbol: te.createCIMTextSymbolfromTextSymbol(e8) }, overrides: [] }, referenceSize: null, effects: null, placement: null, scaleInfo: null, transforms: null, scaleFactor: 1, minPixelBuffer: x2(a13), repeatLabel: null, repeatLabelDistance: null, allowOverrun: null, labelPosition: null })];
}
function R3(e8, a13) {
  var _a, _b, _c, _d, _e, _f;
  const { schemaOptions: l9, uniforms: r11 } = a13, { store: t12 } = l9, s10 = e8.symbol, { allowOverrun: n15, repeatLabel: u14, repeatLabelDistance: c13 } = e8, f5 = { maxScale: e8.maxScale ?? 0, minScale: e8.minScale ?? 0 }, b6 = t12.ensureInstance(j2.label, { uniforms: { visualVariableColor: null, visualVariableOpacity: null, visualVariableRotation: r11.visualVariableRotation, visualVariableSizeMinMaxValue: r11.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: r11.visualVariableSizeScaleStops, visualVariableSizeStops: r11.visualVariableSizeStops, visualVariableSizeUnitValue: r11.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: true, clipAngle: true, referenceSymbol: true } }), S3 = e8.labelPlacement, [V2, v2] = o6(S3);
  return [b6.createMeshInfo({ boxBackgroundColor: (_a = s10.backgroundColor) == null ? void 0 : _a.toArray(), boxBorderLineColor: (_b = s10.borderLineColor) == null ? void 0 : _b.toArray(), boxBorderLineSize: s10.borderLineSize ?? 0, color: ((_c = s10.color) == null ? void 0 : _c.toArray()) ?? [0, 0, 0, 0], offsetX: s10.xoffset, offsetY: s10.yoffset, postAngle: s10.angle, fontSize: s10.font.size, decoration: s10.font.decoration, outlineColor: [0, 0, 0, 0], outlineSize: 0, haloColor: ((_d = s10.haloColor) == null ? void 0 : _d.toArray()) ?? [0, 0, 0, 0], haloSize: s10.haloSize ?? 0, lineWidth: s10.lineWidth, lineHeightRatio: s10.lineHeight, horizontalAlignment: V2, verticalAlignment: v2, repeatLabel: u14, repeatLabelDistance: u4(c13), allowOverrun: n15, labelPosition: e8.labelPosition, scaleInfo: f5, minPixelBuffer: x2(r11), useCIMAngleBehavior: false, glyphs: { type: "text-rasterization-param", resource: { type: "text", font: s10.font.toJSON(), textString: s10.text, symbol: te.createCIMTextSymbolfromTextSymbol(s10), primitiveName: "label-override" }, useLegacyLabelEvaluationRules: null == ((_e = e8.labelExpressionInfo) == null ? void 0 : _e.expression), overrides: [{ type: "CIMPrimitiveOverride", valueExpressionInfo: { type: "CIMExpressionInfo", expression: ((_f = e8.labelExpressionInfo) == null ? void 0 : _f.expression) ?? e8.labelExpression, returnType: "String" }, primitiveName: "label-override", propertyName: "textString", defaultValue: "" }] }, referenceSize: null, effects: null, placement: null, transforms: null, scaleFactor: 1 })];
}
function k(e8, i12) {
  var _a;
  const a13 = e8.width;
  return { outlineColor: ((_a = e8.color) == null ? void 0 : _a.toArray()) || [0, 0, 0, 1], width: a13, referenceWidth: a13, capType: e8.cap ?? "round", joinType: e8.join ?? "round", miterLimit: e8.miterLimit, hasSizeVV: i12 };
}
function E4(e8, i12) {
  var _a, _b, _c;
  const { uniforms: a13, schemaOptions: l9 } = i12, { store: r11 } = l9, t12 = ((_a = e8.color) == null ? void 0 : _a.toArray()) ?? [0, 0, 0, 0], o17 = { type: "sprite-rasterization-param", resource: { type: "fill-style", style: e8.style }, overrides: [] };
  if ("solid" === ((_b = e8.outline) == null ? void 0 : _b.style)) {
    return [r11.ensureInstance(j2.patternOutlineFill, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity, visualVariableSizeScaleStops: a13.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: false } }).createMeshInfo({ color: t12, ...k(e8.outline, !!a13.visualVariableSizeOutlineScaleStops), sprite: o17, scaleInfo: null, effects: null })];
  }
  const s10 = [], n15 = r11.ensureInstance(j2.patternFill, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity }, optionalAttributes: { zoomRange: false } }).createMeshInfo({ color: ((_c = e8.color) == null ? void 0 : _c.toArray()) ?? [0, 0, 0, 0], sprite: o17, scaleInfo: null, effects: null });
  return s10.push(n15), e8.outline && s10.push(...F(e8.outline, i12, true)), s10;
}
function j3(e8, i12) {
  var _a, _b;
  const { uniforms: a13, schemaOptions: l9 } = i12, { store: r11 } = l9, t12 = ((_a = e8.color) == null ? void 0 : _a.toArray()) ?? [0, 0, 0, 0];
  if ("none" !== e8.style && "solid" === ((_b = e8.outline) == null ? void 0 : _b.style)) {
    return [r11.ensureInstance(j2.outlineFill, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity, visualVariableSizeScaleStops: a13.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: false } }).createMeshInfo({ color: t12, ...k(e8.outline, !!a13.visualVariableSizeOutlineScaleStops), scaleInfo: null, effects: null })];
  }
  const o17 = [];
  if ("none" !== e8.style) {
    const e9 = r11.ensureInstance(j2.fill, { uniforms: { visualVariableColor: a13.visualVariableColor, visualVariableOpacity: a13.visualVariableOpacity }, optionalAttributes: { zoomRange: false } }).createMeshInfo({ color: t12, scaleInfo: null, effects: null });
    o17.push(e9);
  }
  return e8.outline && o17.push(...F(e8.outline, i12, true)), o17;
}
async function P2(e8, i12) {
  if ("cim" === e8.type) return c3(e8.data, i12);
  const { style: a13 } = e8;
  return a13 && "none" !== a13 && "solid" !== a13 ? E4(e8, i12) : j3(e8, i12);
}
function U(e8, i12) {
  const { outline: a13 } = e8, { uniforms: l9, schemaOptions: r11 } = i12, { store: t12 } = r11, s10 = [], n15 = te.createPictureFillRasterizationParam(e8);
  if (!n15) return [];
  const { width: u14, height: c13, xoffset: p10, yoffset: f5, xscale: b6, yscale: S3 } = e8, V2 = { color: [255, 255, 255, 255], sprite: n15, height: c13, aspectRatio: u14 / c13, offsetX: p10, offsetY: f5, scaleX: b6, scaleY: S3, angle: 0, applyRandomOffset: false, sampleAlphaOnly: false, scaleProportionally: false, effects: null, scaleInfo: null };
  if ("solid" === (a13 == null ? void 0 : a13.style)) {
    return [t12.ensureInstance(j2.complexOutlineFill, { uniforms: { visualVariableColor: l9.visualVariableColor, visualVariableOpacity: l9.visualVariableOpacity, visualVariableSizeScaleStops: l9.visualVariableSizeOutlineScaleStops, visualVariableSizeMinMaxValue: null, visualVariableSizeStops: null, visualVariableSizeUnitValue: null }, optionalAttributes: { zoomRange: false } }).createMeshInfo({ ...V2, ...k(a13, !!l9.visualVariableSizeOutlineScaleStops) })];
  }
  const y5 = t12.ensureInstance(j2.complexFill, { uniforms: { visualVariableColor: l9.visualVariableColor, visualVariableOpacity: l9.visualVariableOpacity }, optionalAttributes: { zoomRange: false } });
  return s10.push(y5.createMeshInfo(V2)), a13 && s10.push(...F(a13, i12, true)), s10;
}
function F(e8, i12, a13) {
  const { color: l9, style: r11, width: t12, cap: o17, join: n15 } = e8, { schemaOptions: u14 } = i12, { store: c13 } = u14, p10 = [], f5 = a13 ? { ...z, visualVariableSizeScaleStops: i12.uniforms.visualVariableSizeOutlineScaleStops } : i12.uniforms, b6 = { uniforms: { visualVariableColor: f5.visualVariableColor, visualVariableOpacity: f5.visualVariableOpacity, visualVariableSizeMinMaxValue: f5.visualVariableSizeMinMaxValue, visualVariableSizeScaleStops: f5.visualVariableSizeScaleStops, visualVariableSizeStops: f5.visualVariableSizeStops, visualVariableSizeUnitValue: f5.visualVariableSizeUnitValue }, optionalAttributes: { zoomRange: false } }, S3 = { color: (l9 == null ? void 0 : l9.toArray()) ?? [0, 0, 0, 0], width: t12, referenceWidth: t12, capType: o17, joinType: n15, miterLimit: e8.miterLimit, hasSizeVV: a7(f5), effects: null, scaleInfo: null };
  if (null == r11 || "solid" === r11) {
    const e9 = c13.ensureInstance(j2.line, b6).createMeshInfo(S3);
    p10.push(e9);
  } else if ("none" !== r11) {
    const e9 = c13.ensureInstance(j2.texturedLine, b6).createMeshInfo({ ...S3, offsetAlongLine: 0, shouldScaleDash: true, shouldSampleAlphaOnly: false, isSDF: true, sprite: { type: "sprite-rasterization-param", resource: { type: "dash", dashTemplate: fe(r11, o17) }, overrides: [] } });
    p10.push(e9);
  }
  return null != e8.marker && p10.push(...A2(e8.marker, e8, i12)), p10;
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/LabelMatcherSchema.js
async function l6(a13, l9, r11) {
  const n15 = l9.labelsVisible && l9.labelingInfo || [], i12 = e5(l9), m10 = a4(n15, i12);
  return { type: "label", classes: await Promise.all(m10.map((e8, s10) => o11(a13, e8, s10, r11))) };
}
async function o11(e8, s10, l9, o17) {
  var _a;
  const r11 = await g5(s10, { path: `${l9}`, schemaOptions: e8, uniforms: o17 });
  return { maxScale: s10.maxScale, minScale: s10.minScale, expression: ((_a = s10.labelExpressionInfo) == null ? void 0 : _a.expression) ?? s10.labelExpression, where: s10.where, meshes: r11 };
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/MatcherSchema.js
async function r9(e8, a13) {
  if (!a13) return { type: "simple", meshes: [] };
  switch (a13.type) {
    case "simple":
      return t9(e8, a13);
    case "dot-density":
      return o12(e8, a13);
    case "class-breaks":
      return u9(e8, a13);
    case "unique-value":
      return m7(e8, a13);
    case "dictionary":
      return c8(a13);
    case "heatmap":
      return p7(e8, a13);
    case "pie-chart":
      return f3(e8, a13);
  }
}
async function t9(a13, n15) {
  const s10 = n15.symbols, l9 = s10.length ? s10[0] : null, r11 = h3(n15), t12 = "renderer.symbol";
  return { type: "simple", meshes: await g5(l9, { schemaOptions: a13, uniforms: r11, path: t12 }) };
}
async function o12(a13, i12) {
  const s10 = h3(i12), l9 = "renderer.symbol";
  return { type: "dot-density", meshes: await M2(i12, { schemaOptions: a13, uniforms: s10, path: l9 }) };
}
async function u9(n15, s10) {
  const l9 = h3(s10), r11 = s10.backgroundFillSymbol, t12 = s10.normalizationType, o17 = "log" === t12 ? "esriNormalizeByLog" : "percent-of-total" === t12 ? "esriNormalizeByPercentOfTotal" : "field" === t12 ? "esriNormalizeByField" : null, u14 = s10.classBreakInfos.map(async (e8) => ({ meshes: await g5(e8.symbol, { path: `renderer-stop-${e8.minValue}-${e8.maxValue}`, schemaOptions: n15, uniforms: l9 }), min: e8.minValue, max: e8.maxValue })), m10 = (await Promise.all(u14)).sort((e8, a13) => e8.min - a13.min), c13 = await g5(r11, { schemaOptions: n15, path: "renderer.backgroundFill", uniforms: { ...z, visualVariableSizeOutlineScaleStops: l9.visualVariableSizeOutlineScaleStops } }), p10 = await g5(s10.defaultSymbol, { schemaOptions: n15, path: "renderer.defaultSymbol", uniforms: l9 });
  return { type: "interval", field: s10.field, expression: s10.valueExpression, backgroundFill: c13, defaultSymbol: p10, intervals: m10, normalizationField: s10.normalizationField, normalizationTotal: s10.normalizationTotal, normalizationType: o17, isMaxInclusive: s10.isMaxInclusive };
}
async function m7(n15, s10) {
  const l9 = [], r11 = h3(s10), t12 = await g5(s10.backgroundFillSymbol, { schemaOptions: n15, path: "renderer.backgroundFill", uniforms: { ...z, visualVariableSizeOutlineScaleStops: r11.visualVariableSizeOutlineScaleStops } }), o17 = await g5(s10.defaultSymbol, { schemaOptions: n15, path: "renderer.defaultSymbol", uniforms: r11 });
  for (const e8 of s10.uniqueValueInfos ?? []) {
    const a13 = await g5(e8.symbol, { path: `renderer-unique-value-${e8.value}`, schemaOptions: n15, uniforms: r11 });
    l9.push({ value: "" + e8.value, symbol: a13 });
  }
  return { type: "map", field: s10.field, expression: s10.valueExpression, field2: s10.field2, field3: s10.field3, fieldDelimiter: s10.fieldDelimiter, backgroundFill: t12, defaultSymbol: o17, map: l9 };
}
function c8(a13) {
  const i12 = h3(a13), n15 = a13.scaleExpression, s10 = null != n15 && "1" !== n15 ? { valueExpressionInfo: { type: "CIMExpressionInfo", expression: a13.scaleExpression, returnType: "Numeric" }, defaultValue: 1 } : void 0;
  return { type: "dictionary", fieldMap: a13.fieldMap, scaleExpression: s10, visualVariableUniforms: i12 };
}
async function p7(e8, a13) {
  return { type: "heatmap", meshes: await x3(a13, e8) };
}
async function f3(e8, a13) {
  return { type: "pie-chart", meshes: await C(a13, e8) };
}

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/SimpleProcessorSchema.js
async function l7(e8, r11) {
  const t12 = r11.renderer, n15 = h3(t12);
  return { symbology: await r9(e8, t12), labels: await l6(e8, r11, n15) };
}
async function u10(e8, r11, t12, s10) {
  var _a, _b;
  const i12 = t12.featureReduction;
  if (i12) switch (i12.type) {
    case "binning":
      return p8(i12, e8, r11, t12, s10);
    case "cluster":
      return y3(i12, e8, r11, t12, s10);
  }
  if ((_a = t12.trackInfo) == null ? void 0 : _a.enabled) return b5(t12.trackInfo, e8, r11, t12, s10);
  const a13 = m8(t12.orderBy, t12.renderer, t12.objectIdField), o17 = a8(t12.renderer, r11.filters), u14 = await l7(e8, t12), c13 = g6(u14.symbology);
  return { storage: o17, mesh: { properties: { sortKey: a13, timeZone: r11.timeZone, returnMeshObjectId: c13, displayRefreshVersion: s10, currentUser: r11.currentUser }, strategy: { type: "feature" }, factory: u14 }, expressionProperties: { timeExtent: (_b = r11.timeExtent) == null ? void 0 : _b.toJSON() } };
}
function c9(e8, r11) {
  return e8.fields.map((e9) => ({ ...e9.toJSON(), type: f4(e9, r11) }));
}
function f4(e8, r11) {
  const { onStatisticExpression: t12, onStatisticField: s10, statisticType: i12 } = e8;
  switch (i12) {
    case "min":
    case "max":
    case "avg":
    case "avg_angle":
    case "sum":
    case "count":
      return "esriFieldTypeDouble";
    case "mode": {
      if (t12) {
        const { returnType: e10 } = t12;
        return e10 ? "string" === e10 ? "esriFieldTypeString" : "esriFieldTypeDouble" : "esriFieldTypeString";
      }
      const e9 = r11.find((e10) => e10.name === s10);
      return e9 ? e9.type : "esriFieldTypeString";
    }
  }
}
async function p8(r11, t12, a13, l9, u14) {
  var _a;
  const f5 = c9(r11, l9.fields), p10 = r11.renderer, y5 = await r9(t12, p10), b6 = a8(p10, [null, null]), m10 = h3(p10), d10 = await l6(t12, { geometryType: "polygon", labelingInfo: r11.labelingInfo, labelsVisible: r11.labelsVisible }, m10), v2 = g6(y5), h4 = "geohash" === r11.binType ? { type: "geohash", fixBinLevel: r11.fixedBinLevel ?? 3 } : { type: "grid", size: u4(r11.size), fixedBinLevel: r11.fixedBinLevel };
  return { storage: b6, mesh: { properties: { sortKey: null, timeZone: a13.timeZone, returnMeshObjectId: v2, displayRefreshVersion: u14, currentUser: a13.currentUser }, strategy: { type: "binning", fields: f5, index: h4, featureFilter: a13.filters[0] }, factory: { labels: d10, symbology: y5 } }, expressionProperties: { timeExtent: (_a = a13.timeExtent) == null ? void 0 : _a.toJSON() } };
}
async function y3(r11, t12, a13, l9, u14) {
  var _a;
  const f5 = c9(r11, l9.fields), p10 = { type: "cluster", feature: await r9(t12, r11.effectiveFeatureRenderer), cluster: await r9(t12, r11.effectiveClusterRenderer) }, y5 = h3(r11.effectiveFeatureRenderer), b6 = { type: "cluster", feature: await l6(t12, l9, y5), cluster: await l6(t12, { geometryType: "point", labelingInfo: r11.labelingInfo, labelsVisible: r11.labelsVisible }, y5) }, m10 = a8(r11.effectiveFeatureRenderer, [null, null]), d10 = g6(p10);
  return { storage: m10, mesh: { properties: { sortKey: null, timeZone: a13.timeZone, displayRefreshVersion: u14, returnMeshObjectId: d10, currentUser: a13.currentUser }, strategy: { type: "cluster", fields: f5, featureFilter: a13.filters[0], clusterRadius: u4(r11.clusterRadius / 2) }, factory: { labels: b6, symbology: p10 } }, expressionProperties: { timeExtent: (_a = a13.timeExtent) == null ? void 0 : _a.toJSON() } };
}
async function b5(e8, r11, t12, n15, l9) {
  var _a, _b;
  const u14 = c9(e8, n15.fields), f5 = { type: "track", previousObservation: await r9(r11, e8.previousObservations.renderer), latestObservation: await r9(r11, e8.latestObservations.renderer), trackLine: await r9(r11, e8.trackLines.renderer) }, p10 = { type: "track", previousObservation: await l6(r11, { geometryType: n15.geometryType, labelingInfo: e8.previousObservations.labelingInfo, labelsVisible: e8.previousObservations.labelsVisible }, h3(e8.previousObservations.renderer)), latestObservation: await l6(r11, { geometryType: n15.geometryType, labelingInfo: e8.latestObservations.labelingInfo, labelsVisible: e8.latestObservations.labelsVisible }, h3(e8.latestObservations.renderer)), trackLine: await l6(r11, { geometryType: "polyline", labelingInfo: e8.trackLines.labelingInfo, labelsVisible: e8.trackLines.labelsVisible }, h3(e8.trackLines.renderer)) }, y5 = o7(e8, [null, null]), b6 = g6(f5);
  return { storage: y5, mesh: { properties: { sortKey: null, timeZone: t12.timeZone, returnMeshObjectId: b6, displayRefreshVersion: l9, currentUser: t12.currentUser }, strategy: { type: "track", featureFilter: t12.filters[0], fields: u14, maxDisplayDuration: ((_a = e8.maxDisplayDuration) == null ? void 0 : _a.toMilliseconds()) ?? 0, maxDisplayObservationsPerTrack: e8.maxDisplayObservationsPerTrack, showLatestObservation: e8.latestObservations.visible, showPreviousObservations: e8.previousObservations.visible, showTrackLine: e8.trackLines.visible, timeField: e8.timeField }, factory: { labels: p10, symbology: f5 } }, expressionProperties: { timeExtent: (_b = t12.timeExtent) == null ? void 0 : _b.toJSON() } };
}
function m8(e8, t12, s10) {
  const i12 = null != t12 && "unique-value" === t12.type && t12.orderByClassesEnabled;
  if ("default" !== e8 || i12 || (e8 = [new a3({ field: s10, order: "descending" })]), "default" !== e8 && (e8 == null ? void 0 : e8.length)) {
    e8.length;
    const r11 = e8[0], t13 = "ascending" === r11.order ? "asc" : "desc";
    return r11.field ? { field: r11.field, order: t13 } : r11.valueExpression ? { expression: r11.valueExpression, order: t13 } : null;
  }
  if (i12) {
    return { byRenderer: true, order: "asc" };
  }
  return null;
}
function d8(e8) {
  return e8.techniqueType === e4.AnimatedMarker;
}
function g6(e8) {
  if ("simple" === e8.type && e8.meshes.some(d8)) return true;
  if ("interval" === e8.type) {
    if (e8.intervals.some((e9) => e9.meshes.some(d8))) return true;
    if (e8.backgroundFill.some(d8)) return true;
  }
  if ("map" === e8.type) {
    if (e8.map.some((e9) => e9.symbol.some(d8))) return true;
    if (e8.backgroundFill.some(d8)) return true;
  }
  return false;
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/CatalogFootprintLayerAdapter.js
var n8 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r11 = l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: r11 }];
  }
  async createServiceOptions(o17) {
    var _a, _b;
    const s10 = this.layer, { capabilities: i12, editingInfo: a13, objectIdField: l9, globalIdField: n15, datesInUnknownTimezone: p10, dateFieldsTimeZone: c13, orderBy: d10, parsedUrl: u14 } = s10, m10 = s10.fieldsIndex.toJSON(), y5 = e5(s10), f5 = (_a = s10.timeInfo) == null ? void 0 : _a.toJSON(), h4 = s10.spatialReference.toJSON(), g7 = a(u14);
    let b6 = l9;
    if (d10 == null ? void 0 : d10.length) {
      const e8 = !d10[0].valueExpression && d10[0].field;
      e8 && (b6 = e8);
    }
    const F2 = g2(g7.path), I2 = o17.spatialReference.toJSON();
    return { type: "feature-service", source: g7, isSourceHosted: F2, orderByFields: b6, outSpatialReference: I2, metadata: { timeReferenceUnknownClient: p10, dateFieldsTimeZone: c13, globalIdField: n15, fieldsIndex: m10, geometryType: y5, objectIdField: l9, timeInfo: f5, spatialReference: h4, outSpatialReference: I2, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: i12.query.maxRecordCount, supportsCompactGeometry: i12.query.supportsCompactGeometry, supportsDefaultSpatialReference: i12.query.supportsDefaultSpatialReference, supportsFormatPBF: i12.query.supportsFormatPBF, supportsMaxRecordCountFactor: i12.query.supportsMaxRecordCountFactor, supportsQuantization: i12.query.supportsQuantization, lastEditDate: (_b = a13 == null ? void 0 : a13.lastEditDate) == null ? void 0 : _b.getTime(), snapshotInfo: null } };
  }
  createSourceSchema(e8, t12) {
    const { definitionExpression: r11, displayFilterInfo: o17, customParameters: s10, timeExtent: a13, apiKey: l9 } = this.layer;
    return t8({ definitionExpression: r11, displayFilterInfo: o17, customParameters: s10, timeExtent: a13 }, e8, t12, l9);
  }
  createProcessorSchema(e8, t12, r11) {
    const { fields: o17, geometryType: s10, orderBy: i12, objectIdField: l9, renderer: n15, labelingInfo: p10, labelsVisible: c13 } = this.layer, d10 = { featureReduction: null, fields: o17.map((e9) => e9.toJSON()), geometryType: s10, labelingInfo: p10, labelsVisible: c13, objectIdField: l9, orderBy: i12 ?? "default", renderer: n15 == null ? void 0 : n15.clone() };
    return u10(e8, t12, d10, r11);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.apiKey, () => this.layer.customParameters, () => this.layer.definitionExpression, () => this.layer.outFields, () => this.layer.renderer, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => this.layer.orderBy];
  }
  setGraphicOrigin(e8) {
    e8.origin = { type: "catalog", layer: this.layer };
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/featureServiceUtils.js
function t10(t12, e8) {
  const n15 = t12.extent, o17 = e8 == null ? void 0 : e8.clone().intersection(n15), i12 = null != o17 ? o17.width * o17.height : 0, r11 = e8 ? e8.width * e8.height : 0, h4 = 0 === r11 ? 0 : i12 / r11, s10 = has("featurelayer-snapshot-point-coverage");
  return !isNaN(h4) && h4 >= s10;
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/floorFilterUtils.js
function o13(e8, l9) {
  return null != e8.floorInfo && (e8.floorInfo.viewAllLevelIds.length > 0 || l9.floors.length > 0);
}
function r10(e8, o17, r11) {
  const t12 = n9(e8, o17 == null ? void 0 : o17.where, r11);
  return t12 ? (o17 ?? (o17 = new d5()), o17.where = t12, o17) : o17;
}
function n9(l9, o17, r11) {
  var _a;
  if (null == l9.floorInfo || !((_a = r11.floors) == null ? void 0 : _a.length)) return o17;
  let n15 = r11.floors;
  const { floorField: t12, viewAllLevelIds: f5 } = l9.floorInfo;
  f5.length && (n15 = f5);
  const s10 = n15.filter((e8) => "" !== e8).map((e8) => "'" + e8 + "'");
  if (s10.push("''"), o17 == null ? void 0 : o17.includes(t12)) {
    let e8 = new RegExp("AND \\(" + t12 + ".*NULL\\)", "g");
    o17 = o17.replace(e8, ""), e8 = new RegExp("\\(" + t12 + ".*NULL\\)", "g"), o17 = (o17 = o17.replace(e8, "")).replaceAll(/\s+/g, " ").trim();
  }
  let i12 = "(" + t12 + " IN ({ids}) OR " + t12 + " IS NULL)";
  return i12 = i12.replace("{ids}", s10.join(", ")), r3(o17, i12);
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/FeatureLayerAdapter.js
var c10 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r11 = r8(t12, e8) ?? l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: r11 }];
  }
  async createServiceOptions(r11) {
    var _a, _b, _c2, _d;
    const o17 = this.layer, { capabilities: i12, editingInfo: l9, objectIdField: n15, typeIdField: p10, globalIdField: d10, datesInUnknownTimezone: u14, dateFieldsTimeZone: y5, orderBy: c13, subtypeField: m10, refreshInterval: h4 } = o17, f5 = o17.fieldsIndex.toJSON(), b6 = e5(o17), g7 = (_a = o17.timeInfo) == null ? void 0 : _a.toJSON(), F2 = o17.spatialReference.toJSON(), S3 = (_b = o17.types) == null ? void 0 : _b.map((e8) => e8.toJSON()), I2 = a(this.layer.parsedUrl);
    this.layer.dynamicDataSource && (I2.query = { layer: JSON.stringify({ source: this.layer.dynamicDataSource }) });
    let x4 = this.layer.objectIdField;
    if (c13 == null ? void 0 : c13.length) {
      const e8 = !c13[0].valueExpression && c13[0].field;
      e8 && (x4 = e8);
    }
    const j4 = !(null != (l9 == null ? void 0 : l9.lastEditDate)) && h4 > 0, R4 = !!has("featurelayer-snapshot-enabled") && "point" === o17.geometryType && (i12 == null ? void 0 : i12.query.supportsPagination) && !(i12 == null ? void 0 : i12.operations.supportsEditing) && !j4, E5 = R4 && t10(r11, o17.fullExtent), C2 = g2(I2.path), T3 = r11.spatialReference.toJSON();
    return { type: "feature-service", source: I2, isSourceHosted: C2, orderByFields: x4, outSpatialReference: T3, metadata: { typeIdField: p10 ?? void 0, types: S3, timeReferenceUnknownClient: u14, dateFieldsTimeZone: y5, subtypeField: m10, globalIdField: d10, fieldsIndex: f5, geometryType: b6, objectIdField: n15, timeInfo: g7, spatialReference: F2, outSpatialReference: T3, subtypes: (_c2 = this.layer.subtypes) == null ? void 0 : _c2.map((e8) => e8.toJSON()) }, queryMetadata: { maxRecordCount: i12.query.maxRecordCount, supportsCompactGeometry: i12.query.supportsCompactGeometry, supportsDefaultSpatialReference: i12.query.supportsDefaultSpatialReference, supportsFormatPBF: i12.query.supportsFormatPBF, supportsMaxRecordCountFactor: i12.query.supportsMaxRecordCountFactor, supportsQuantization: i12.query.supportsQuantization, lastEditDate: (_d = l9 == null ? void 0 : l9.lastEditDate) == null ? void 0 : _d.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: R4, supportsSnapshotMaxThreshold: E5, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e8, t12) {
    const { apiKey: r11, definitionExpression: s10, displayFilterInfo: o17, customParameters: i12, gdbVersion: a13, historicMoment: l9, subtypeCode: n15, subtypeField: p10, timeExtent: u14 } = this.layer;
    return t8({ definitionExpression: s10, displayFilterInfo: o17, customParameters: i12, gdbVersion: a13, historicMoment: l9, subtypeCode: n15, subtypeField: p10, timeExtent: u14 }, e8, t12, r11);
  }
  createProcessorSchema(e8, t12, s10) {
    const { fields: o17, renderer: i12, geometryType: a13, labelingInfo: l9, labelsVisible: n15, orderBy: p10, objectIdField: d10, trackInfo: y5 } = this.layer, c13 = { fields: o17.map((e9) => e9.toJSON()), renderer: i12 == null ? void 0 : i12.clone(), featureReduction: e6(this.layer, t12), geometryType: a13, labelingInfo: l9, labelsVisible: n15, objectIdField: d10, orderBy: p10 ?? "default", trackInfo: y5 };
    return u10(e8, t12, c13, s10);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  addFilters(e8, t12) {
    return r10(this.layer, e8, t12);
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.apiKey, () => this.layer.customParameters, () => this.layer.definitionExpression, () => e6(this.layer, e8), () => o13(this.layer, e8) ? e8.floors : null, () => this.layer.gdbVersion, () => this.layer.historicMoment, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => this.layer.orderBy, () => this.layer.outFields, () => this.layer.renderer, () => this.layer.subtypeCode, () => this.layer.trackInfo];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/InMemoryLayerAdapter.js
function u11(t12) {
  if (!("openPorts" in t12)) throw new s("source-not-supported");
}
var p9 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r11 = r8(t12, e8) ?? l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: r11 }];
  }
  async createServiceOptions(e8) {
    var _a;
    const t12 = this.layer, { capabilities: o17, objectIdField: i12 } = t12, n15 = t12.fieldsIndex.toJSON(), s10 = e5(t12), l9 = (_a = t12.timeInfo) == null ? void 0 : _a.toJSON(), a13 = t12.spatialReference.toJSON();
    u11(t12.source);
    const p10 = await t12.source.openPorts(), c13 = i12, d10 = e8.spatialReference.toJSON();
    return { type: "memory", source: p10, orderByFields: c13, outSpatialReference: d10, metadata: { fieldsIndex: n15, geometryType: s10, objectIdField: i12, timeInfo: l9, spatialReference: a13, outSpatialReference: d10, subtypes: null, subtypeField: null, globalIdField: null, typeIdField: null, types: null, timeReferenceUnknownClient: "datesInUnknownTimezone" in t12 ? t12.datesInUnknownTimezone : null, dateFieldsTimeZone: "dateFieldsTimeZone" in t12 ? t12.dateFieldsTimeZone : null }, queryMetadata: { maxRecordCount: o17.query.maxRecordCount, supportsCompactGeometry: o17.query.supportsCompactGeometry, supportsDefaultSpatialReference: o17.query.supportsDefaultSpatialReference, supportsFormatPBF: o17.query.supportsFormatPBF, supportsMaxRecordCountFactor: o17.query.supportsMaxRecordCountFactor, supportsQuantization: o17.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e8, t12) {
    const { definitionExpression: r11, timeExtent: o17, displayFilterInfo: i12 } = this.layer;
    return t8({ customParameters: null, definitionExpression: r11, displayFilterInfo: i12, timeExtent: o17 }, e8, t12, null);
  }
  createProcessorSchema(e8, r11, o17) {
    const { fields: i12, renderer: n15, geometryType: s10, labelingInfo: a13, labelsVisible: u14, orderBy: p10, objectIdField: c13 } = this.layer, d10 = "trackInfo" in this.layer ? this.layer.trackInfo : null, y5 = { fields: i12.map((e9) => e9.toJSON()), renderer: n15 == null ? void 0 : n15.clone(), featureReduction: e6(this.layer, r11), geometryType: s10, labelingInfo: a13, labelsVisible: u14, objectIdField: c13, orderBy: p10 ?? "default", trackInfo: d10 };
    return u10(e8, r11, y5, o17);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.definitionExpression, () => this.layer.displayFilterInfo, () => this.layer.orderBy, () => "outFields" in this.layer ? this.layer.outFields : null, () => this.layer.renderer, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => e6(this.layer, e8), () => "trackInfo" in this.layer ? this.layer.trackInfo : null];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/KnowledgeGraphSublayerAdapter.js
var c11 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const r11 = this.layer, t12 = r8(r11, e8) ?? l5(r11);
    return [{ vvEvaluators: { 0: o10(r11.renderer) }, deconflictionEnabled: t12 }];
  }
  async createServiceOptions(e8) {
    var _a;
    const r11 = this.layer, { capabilities: t12, objectIdField: o17 } = r11, i12 = r11.fieldsIndex.toJSON(), a13 = e5(r11), l9 = r11.spatialReference.toJSON(), n15 = await r11.source.openPorts(), p10 = o17, u14 = e8.spatialReference.toJSON();
    return { type: "memory", source: n15, orderByFields: p10, outSpatialReference: u14, metadata: { fieldsIndex: i12, geometryType: a13, objectIdField: o17, spatialReference: l9, outSpatialReference: u14, globalIdField: null, subtypeField: null, subtypes: null, timeInfo: (_a = r11.timeInfo) == null ? void 0 : _a.toJSON(), timeReferenceUnknownClient: null, dateFieldsTimeZone: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: t12.query.maxRecordCount, supportsCompactGeometry: t12.query.supportsCompactGeometry, supportsDefaultSpatialReference: t12.query.supportsDefaultSpatialReference, supportsFormatPBF: t12.query.supportsFormatPBF, supportsMaxRecordCountFactor: t12.query.supportsMaxRecordCountFactor, supportsQuantization: t12.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e8, r11) {
    const { definitionExpression: t12, displayFilterInfo: o17 } = this.layer;
    return t8({ definitionExpression: t12, displayFilterInfo: o17, customParameters: null }, e8, r11, null);
  }
  createProcessorSchema(e8, r11, t12) {
    const { fields: s10, renderer: i12, geometryType: a13, labelingInfo: l9, labelsVisible: n15, objectIdField: u14 } = this.layer, c13 = { fields: s10.map((e9) => e9.toJSON()), renderer: i12 == null ? void 0 : i12.clone(), featureReduction: e6(this.layer, r11), geometryType: a13, labelingInfo: l9, labelsVisible: n15, objectIdField: u14, orderBy: "default" };
    return u10(e8, r11, c13, t12);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.definitionExpression, () => this.layer.renderer, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => e6(this.layer, e8), () => d9(this.layer)];
  }
  hasFilters(e8) {
    return d9(this.layer);
  }
  addFilters(o17, s10) {
    if (d9(this.layer)) {
      const s11 = r3(o17 == null ? void 0 : o17.where, `${E}=1`);
      if (!s11) return o17;
      o17 ?? (o17 = new d5()), o17.where = s11;
    }
    return o17;
  }
};
function d9(e8) {
  var _a, _b;
  return "link-chart" === e8.parentCompositeLayer.type && "hidden" === ((_b = (_a = e8.parentCompositeLayer.linkChart) == null ? void 0 : _a.linkChartProperties.nonspatialDataDisplay) == null ? void 0 : _b.mode);
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/OGCFeatureLayerAdapter.js
var u12 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r11 = r8(t12, e8) ?? l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: r11 }];
  }
  async createServiceOptions(t12) {
    var _a;
    const o17 = this.layer, { capabilities: s10, objectIdField: a13 } = o17, l9 = o17.fieldsIndex.toJSON(), i12 = e5(o17), n15 = (_a = o17.timeInfo) == null ? void 0 : _a.toJSON(), u14 = o17.spatialReference.toJSON(), c13 = o17.source.getSource(), p10 = this.layer.objectIdField, d10 = a(s10);
    d10.query.maxRecordCount = c13.maxRecordCount;
    const m10 = t12.spatialReference.toJSON();
    return { type: "ogc", source: c13, orderByFields: p10, outSpatialReference: m10, metadata: { fieldsIndex: l9, geometryType: i12, objectIdField: a13, timeInfo: n15, spatialReference: u14, outSpatialReference: m10, globalIdField: null, subtypeField: null, subtypes: null, timeReferenceUnknownClient: null, dateFieldsTimeZone: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: d10.query.maxRecordCount, supportsCompactGeometry: d10.query.supportsCompactGeometry, supportsDefaultSpatialReference: d10.query.supportsDefaultSpatialReference, supportsFormatPBF: d10.query.supportsFormatPBF, supportsMaxRecordCountFactor: d10.query.supportsMaxRecordCountFactor, supportsQuantization: d10.query.supportsQuantization, lastEditDate: null, snapshotInfo: null } };
  }
  createSourceSchema(e8, t12) {
    const { customParameters: r11, timeExtent: o17, apiKey: s10 } = this.layer;
    return t8({ customParameters: r11, timeExtent: o17 }, e8, t12, s10);
  }
  createProcessorSchema(e8, r11, o17) {
    const { fields: s10, renderer: a13, geometryType: l9, labelingInfo: n15, labelsVisible: u14, orderBy: c13, objectIdField: p10 } = this.layer, d10 = { fields: s10.map((e9) => e9.toJSON()), renderer: a13 == null ? void 0 : a13.clone(), featureReduction: e6(this.layer, r11), geometryType: l9, labelingInfo: n15, labelsVisible: u14, objectIdField: p10, orderBy: c13 ?? "default" };
    return u10(e8, r11, d10, o17);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.apiKey, () => this.layer.customParameters, () => e6(this.layer, e8), () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => this.layer.orderBy, () => this.layer.renderer];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/OrientedImageryLayerAdapter.js
var m9 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, r11 = r8(t12, e8) ?? l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: r11 }];
  }
  async createServiceOptions(r11) {
    var _a;
    const s10 = this.layer, { capabilities: i12, objectIdField: l9, globalIdField: n15, orderBy: p10, refreshInterval: u14 } = s10, d10 = s10.fieldsIndex.toJSON(), c13 = e5(s10), m10 = (_a = s10.timeInfo) == null ? void 0 : _a.toJSON(), y5 = s10.spatialReference.toJSON(), f5 = a(this.layer.parsedUrl);
    let h4 = this.layer.objectIdField;
    if (p10 == null ? void 0 : p10.length) {
      const e8 = !p10[0].valueExpression && p10[0].field;
      e8 && (h4 = e8);
    }
    const b6 = u14 > 0, F2 = !!has("featurelayer-snapshot-enabled") && "point" === s10.geometryType && (i12 == null ? void 0 : i12.query.supportsPagination) && !(i12 == null ? void 0 : i12.operations.supportsEditing) && !b6, S3 = F2 && t10(r11, s10.fullExtent), g7 = g2(f5.path), I2 = r11.spatialReference.toJSON();
    return { type: "feature-service", source: f5, isSourceHosted: g7, orderByFields: h4, outSpatialReference: I2, metadata: { globalIdField: n15, fieldsIndex: d10, geometryType: c13, objectIdField: l9, timeInfo: m10, spatialReference: y5, outSpatialReference: I2, timeReferenceUnknownClient: s10.datesInUnknownTimezone, dateFieldsTimeZone: s10.dateFieldsTimeZone, subtypeField: null, subtypes: null, typeIdField: null, types: null }, queryMetadata: { maxRecordCount: i12.query.maxRecordCount, supportsCompactGeometry: i12.query.supportsCompactGeometry, supportsDefaultSpatialReference: i12.query.supportsDefaultSpatialReference, supportsFormatPBF: i12.query.supportsFormatPBF, supportsMaxRecordCountFactor: i12.query.supportsMaxRecordCountFactor, supportsQuantization: i12.query.supportsQuantization, lastEditDate: null, snapshotInfo: { supportsSnapshotMinThreshold: F2, supportsSnapshotMaxThreshold: S3, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e8, t12) {
    const { definitionExpression: r11, displayFilterInfo: o17, customParameters: s10, timeExtent: i12 } = this.layer;
    return t8({ definitionExpression: r11, displayFilterInfo: o17, customParameters: s10, timeExtent: i12 }, e8, t12, null);
  }
  createProcessorSchema(e8, t12, o17) {
    const { fields: s10, renderer: i12, geometryType: a13, labelingInfo: l9, labelsVisible: n15, orderBy: p10, objectIdField: u14 } = this.layer, c13 = { fields: s10.map((e9) => e9.toJSON()), renderer: i12 == null ? void 0 : i12.clone(), featureReduction: e6(this.layer, t12), geometryType: a13, labelingInfo: l9, labelsVisible: n15, objectIdField: u14, orderBy: p10 ?? "default" };
    return u10(e8, t12, c13, o17);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  addFilters(e8, t12) {
    return r10(this.layer, e8, t12);
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.outFields, () => this.layer.orderBy, () => this.layer.definitionExpression, () => this.layer.renderer, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => e6(this.layer, e8), () => this.layer.customParameters, () => o13(this.layer, e8) ? e8.floors : null];
  }
};

// node_modules/@arcgis/core/layers/support/parquetLayerUtils.js
var n11 = new o({ esriGeometryPoint: "point", esriGeometryPolygon: "polygon", esriGeometryPolyline: "polyline", esriGeometryMultipoint: "multipoint" });
function l8(e8) {
  return n11.toJSON(e8);
}
function a11(e8) {
  return "location" === e8.type ? { type: "location", geometryType: "esriGeometryPoint", spatialReference: "toJSON" in e8.spatialReference ? e8.spatialReference.toJSON() : e8.spatialReference, latitudeFieldName: e8.latitudeFieldName, longitudeFieldName: e8.longitudeFieldName } : { type: "geometry", geometryType: l8(e8.geometryType), spatialReference: e8.spatialReference.toJSON(), format: e8.format, primaryFieldName: e8.primaryFieldName, multiscale: e8.multiscale ?? null };
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/ParquetLayerAdapter.js
var n12 = class {
  constructor(e8) {
    this.layer = e8;
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return null;
  }
  getLabelingDeconflictionInfo(e8) {
    const r11 = this.layer, t12 = r8(r11, e8) ?? l5(r11);
    return [{ vvEvaluators: { 0: o10(r11.renderer) }, deconflictionEnabled: t12 }];
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.outFields, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => e6(this.layer, e8), () => this.layer.customParameters, () => this.layer.orderBy, () => this.layer.renderer, () => this.layer.popupTemplate];
  }
  async createServiceOptions(r11) {
    const l9 = e5(this.layer), s10 = r11.spatialReference.toJSON();
    return { type: "parquet", source: { urls: this.layer.urls.items }, outSpatialReference: s10, geometryInfo: a11(this.layer.source.geometryInfo), metadata: { spatialReference: this.layer.spatialReference, outSpatialReference: s10, fieldsIndex: this.layer.fieldsIndex.toJSON(), objectIdField: this.layer.objectIdField, geometryType: l9, types: null, subtypes: null, timeInfo: null, typeIdField: null, subtypeField: null, globalIdField: null, timeReferenceUnknownClient: null, dateFieldsTimeZone: null } };
  }
  createSourceSchema(e8, r11) {
    return { type: "parquet", mutable: { sourceRefreshVersion: r11, availableFields: e8.availableFields.includes("*") ? this.layer.fields.map((e9) => e9.name) : e8.availableFields, dataFilter: { customParameters: this.layer.customParameters ?? null } } };
  }
  createProcessorSchema(e8, t12, l9) {
    var _a;
    const s10 = { fields: this.layer.fields.map((e9) => e9.toJSON()), renderer: (_a = this.layer.renderer) == null ? void 0 : _a.clone(), featureReduction: e6(this.layer, t12), geometryType: this.layer.geometryType, labelingInfo: this.layer.labelingInfo, labelsVisible: this.layer.labelsVisible, objectIdField: this.layer.objectIdField, orderBy: this.layer.orderBy };
    return u10(e8, t12, s10, l9);
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/StreamLayerAdapter.js
var o14 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    const t12 = this.layer, n15 = r8(t12, e8) ?? l5(t12);
    return [{ vvEvaluators: { 0: o10(t12.renderer) }, deconflictionEnabled: n15 }];
  }
  async createServiceOptions(e8) {
    var _a;
    const r11 = this.layer, { objectIdField: i12 } = r11, l9 = e5(r11), n15 = ((_a = r11.timeInfo) == null ? void 0 : _a.toJSON()) || null, s10 = r11.spatialReference ? r11.spatialReference.toJSON() : null, o17 = e8.spatialReference.toJSON();
    return { type: "stream", source: this.layer.parsedUrl, outSpatialReference: o17, metadata: { fieldsIndex: this.layer.fieldsIndex.toJSON(), geometryType: l9, objectIdField: i12, timeInfo: n15, timeReferenceUnknownClient: null, dateFieldsTimeZone: null, spatialReference: s10, outSpatialReference: o17, subtypeField: null, subtypes: null, globalIdField: null, typeIdField: null, types: null } };
  }
  createSourceSchema(e8, t12) {
    const { definitionExpression: r11, geometryDefinition: i12, customParameters: l9 } = this.layer;
    return { type: "stream", mutable: { sourceRefreshVersion: t12, availableFields: e8.availableFields, dataFilter: { geometryDefinition: i12 == null ? void 0 : i12.toJSON(), definitionExpression: r11, customParameters: l9 ?? null, maxReconnectionAttempts: this.layer.maxReconnectionAttempts, maxReconnectionInterval: this.layer.maxReconnectionInterval, purgeOptions: this.layer.purgeOptions.toJSON() } } };
  }
  createProcessorSchema(t12, r11, i12) {
    const { fields: l9, renderer: s10, geometryType: o17, labelingInfo: a13, labelsVisible: c13, objectIdField: d10, trackInfo: m10 } = this.layer, p10 = { fields: l9.map((e8) => e8.toJSON()), renderer: s10 == null ? void 0 : s10.clone(), featureReduction: e6(this.layer, r11), geometryType: o17, labelingInfo: a13, labelsVisible: c13, objectIdField: d10, orderBy: "default", trackInfo: m10 };
    return u10(t12, r11, p10, i12);
  }
  get hasRequiredSupport() {
    return m4(this.layer.renderer);
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(t12) {
    return [() => this.layer.definitionExpression, () => this.layer.renderer, () => this.layer.labelsVisible ? this.layer.labelingInfo : null, () => e6(this.layer, t12), () => this.layer.customParameters, () => this.layer.geometryDefinition, () => this.layer.definitionExpression, () => this.layer.trackInfo];
  }
};

// node_modules/@arcgis/core/views/2d/layers/features/schema/processor/SubtypeProcessorSchema.js
async function a12(e8, { subtypeField: t12, sublayers: s10 }) {
  const i12 = await Promise.all(s10.map(({ renderer: t13 }) => r9(e8, t13)));
  return { type: "subtype", subtypeField: t12, renderers: s10.reduce((e9, { subtypeCode: r11 }, t13) => ({ ...e9, [r11]: i12[t13] }), {}) };
}
function n13(e8, r11) {
  const s10 = t2();
  return { type: "multi", filters: e8.filters, capabilities: { maxTextureSize: s10.maxTextureSize }, keyField: r11.subtypeField, target: "feature", bindings: r11.sublayers.reduce((e9, { renderer: r12, subtypeCode: s11 }) => {
    const i12 = d6(r12);
    return { ...e9, [s11]: i12 };
  }, {}) };
}
async function o15(r11, { subtypeField: t12, sublayers: i12 }) {
  const a13 = await Promise.all(i12.map((t13) => {
    const i13 = h3(t13.renderer), a14 = { ...t13, geometryType: t13.geometryType ?? null };
    return l6(r11, a14, i13);
  }));
  return { type: "subtype", subtypeField: t12, renderers: i12.reduce((e8, { subtypeCode: r12 }, t13) => ({ ...e8, [r12]: a13[t13] }), {}) };
}
async function u13(e8, r11, t12, s10) {
  var _a;
  return { storage: n13(r11, t12), mesh: { properties: { timeZone: r11.timeZone, displayRefreshVersion: s10, returnMeshObjectId: false, sortKey: null, currentUser: r11.currentUser }, strategy: { type: "feature" }, factory: { symbology: await a12(e8, t12), labels: await o15(e8, t12) } }, expressionProperties: { timeExtent: (_a = r11.timeExtent) == null ? void 0 : _a.toJSON() } };
}

// node_modules/@arcgis/core/views/2d/layers/features/layerAdapters/SubtypeGroupLayerAdapter.js
var y4 = class {
  constructor(e8) {
    this.layer = e8;
  }
  getLabelingDeconflictionInfo(e8) {
    return [{ vvEvaluators: {}, deconflictionEnabled: this.layer.sublayers.some((e9) => l5(e9)) }];
  }
  async createServiceOptions(t12) {
    var _a, _b, _c;
    const r11 = this.layer, { capabilities: a13, datesInUnknownTimezone: o17, dateFieldsTimeZone: l9, editingInfo: p10, globalIdField: u14, objectIdField: m10, refreshInterval: y5, subtypeField: c13 } = r11, d10 = r11.fieldsIndex.toJSON(), h4 = e5(r11), f5 = (_a = r11.timeInfo) == null ? void 0 : _a.toJSON(), b6 = r11.spatialReference.toJSON(), S3 = a(this.layer.parsedUrl), g7 = m10, F2 = !(null != (p10 == null ? void 0 : p10.lastEditDate)) && y5 > 0, x4 = !!has("featurelayer-snapshot-enabled") && "point" === r11.geometryType && (a13 == null ? void 0 : a13.query.supportsPagination) && !(a13 == null ? void 0 : a13.operations.supportsEditing) && !F2, I2 = x4 && t10(t12, r11.fullExtent), j4 = g2(S3.path), R4 = t12.spatialReference.toJSON();
    return { type: "feature-service", source: S3, isSourceHosted: j4, orderByFields: g7, outSpatialReference: R4, metadata: { timeReferenceUnknownClient: o17, dateFieldsTimeZone: l9, subtypeField: c13, globalIdField: u14, fieldsIndex: d10, geometryType: h4, objectIdField: m10, timeInfo: f5, spatialReference: b6, outSpatialReference: R4, subtypes: (_b = this.layer.subtypes) == null ? void 0 : _b.map((e8) => e8.toJSON()), typeIdField: null, types: null }, queryMetadata: { maxRecordCount: a13.query.maxRecordCount, supportsCompactGeometry: a13.query.supportsCompactGeometry, supportsDefaultSpatialReference: a13.query.supportsDefaultSpatialReference, supportsFormatPBF: a13.query.supportsFormatPBF, supportsMaxRecordCountFactor: a13.query.supportsMaxRecordCountFactor, supportsQuantization: a13.query.supportsQuantization, lastEditDate: (_c = p10 == null ? void 0 : p10.lastEditDate) == null ? void 0 : _c.getTime(), snapshotInfo: { supportsSnapshotMinThreshold: x4, supportsSnapshotMaxThreshold: I2, snapshotCountThresholds: { min: has("featurelayer-snapshot-point-min-threshold"), max: has("featurelayer-snapshot-point-max-threshold") } } } };
  }
  createSourceSchema(e8, t12) {
    const { definitionExpression: r11, customParameters: s10, gdbVersion: a13, historicMoment: i12, subtypeField: o17, timeExtent: l9, apiKey: n15, displayFilterInfo: p10 } = this.layer, m10 = { queryScaleRanges: this.layer.sublayers.items.map((e9) => ({ subtypeCode: e9.subtypeCode, minScale: e9.minScale, maxScale: e9.maxScale })), definitionExpression: r11, displayFilterInfo: p10, customParameters: s10, gdbVersion: a13, historicMoment: i12, subtypeField: o17, timeExtent: l9 };
    return t8(m10, e8, t12, n15);
  }
  createProcessorSchema(e8, t12, r11) {
    const s10 = { subtypeField: this.layer.subtypeField, sublayers: Array.from(this.layer.sublayers, (e9) => ({ featureReduction: null, geometryType: this.layer.geometryType, labelingInfo: e9.labelingInfo, labelsVisible: e9.labelsVisible, renderer: e9.renderer, subtypeCode: e9.subtypeCode, orderBy: null })) };
    return u13(e8, t12, s10, r11);
  }
  addFilters(e8, t12) {
    e8 = r10(this.layer, e8, t12);
    const s10 = this.layer.sublayers.filter((e9) => !c12(e9, t12)).map((e9) => e9.subtypeCode);
    if (!s10.length) return e8;
    e8 ?? (e8 = new d5());
    const i12 = `NOT ${this.layer.subtypeField} IN (${s10.join(",")})`;
    return e8.where = r3(e8.where, i12), e8;
  }
  get hasRequiredSupport() {
    return true;
  }
  get timeOptions() {
    return this.layer;
  }
  getUpdateHashProperties(e8) {
    return [() => this.layer.apiKey, () => this.layer.customParameters, () => this.layer.definitionExpression, () => o13(this.layer, e8) ? e8.floors : null, () => this.layer.outFields, () => this.layer.gdbVersion, () => this.layer.historicMoment, () => this.layer.sublayers.map(({ renderer: e9, labelsVisible: t12, labelingInfo: r11, visible: s10, minScale: a13, maxScale: i12 }) => ({ renderer: e9, labelsVisible: t12, labelingInfo: r11, visible: s10, minScale: a13, maxScale: i12 }))];
  }
  setGraphicOrigin(e8) {
    const t12 = this.layer.fieldsIndex.get(this.layer.subtypeField), r11 = e8.attributes[t12.name], s10 = this.layer.sublayers.find((e9) => e9.subtypeCode === r11);
    e8.layer = e8.sourceLayer = s10;
  }
};
function c12(e8, r11) {
  return e8.visible && (0 === e8.minScale || m2(r11.scale, e8.minScale) || r11.scale < e8.minScale) && (0 === e8.maxScale || m2(r11.scale, e8.maxScale) || r11.scale > e8.maxScale);
}

// node_modules/@arcgis/core/views/2d/layers/support/DebouncedFeatureOverride.js
var e7 = class {
  constructor() {
    this._commands = /* @__PURE__ */ new Map(), this._historicMoment = null;
  }
  add(e8) {
    switch (e8.type) {
      case "override":
        return this._addOverride(e8);
      case "override-by-id":
        return this._addOverrideById(e8);
    }
  }
  toMessage() {
    const e8 = { historicMoment: this._historicMoment, commands: { updateByIdWeak: [], updateWeak: [], removeWeak: [], update: [], remove: [], release: [] } };
    for (const [s10, r11] of this._commands.entries()) switch (r11.type) {
      case "override-update-by-id":
        e8.commands.updateByIdWeak.push(s10);
        break;
      case "override-update":
        r11.isWeak ? e8.commands.updateWeak.push(r11.feature) : e8.commands.update.push(r11.feature);
        break;
      case "override-remove":
        r11.isWeak ? e8.commands.removeWeak.push(s10) : e8.commands.remove.push(s10);
        break;
      case "override-release":
        e8.commands.release.push(s10);
    }
    return e8;
  }
  _addOverrideById(e8) {
    this._historicMoment = e8.historicMoment;
    for (const s10 of e8.updates) this._commands.set(s10, { type: "override-update-by-id", isWeak: e8.isWeak });
    for (const s10 of e8.removed) this._commands.set(s10, { type: "override-remove", isWeak: e8.isWeak });
  }
  _addOverride(e8) {
    this._historicMoment = e8.historicMoment;
    for (const s10 of e8.updates) this._commands.set(s10.objectId, { type: "override-update", feature: s10, isWeak: e8.isWeak });
    for (const s10 of e8.removed) this._commands.set(s10, { type: "override-remove", isWeak: e8.isWeak });
    for (const s10 of e8.release) this._commands.set(s10, { type: "override-release" });
  }
};

// node_modules/@arcgis/core/views/2d/layers/support/handleNoEngineError.js
async function n14(n15, r11) {
  try {
    return await n15;
  } catch (t12) {
    if ("no-queryEngine" !== t12.name) throw t12;
    return r11;
  }
}

// node_modules/@arcgis/core/views/2d/tiling/FeatureTileSubscriptionManager.js
function s8(e8, s10) {
  const t12 = /* @__PURE__ */ new Set();
  for (const i12 of e8 instanceof Set ? e8.values() : e8.keys()) s10.has(i12) || t12.add(i12);
  return t12;
}
var t11 = class {
  constructor(e8, s10, t12) {
    const i12 = t12 ? e8.getTileCoverage(t12, 0, true, "closest") : null, o17 = e8.getTileCoverage(s10, 0, true, "closest");
    if (this._tileKeys = /* @__PURE__ */ new Map(), i12) for (const n15 of i12.keys()) this._tileKeys.set(n15.id, n15);
    if (o17) for (const n15 of o17.keys()) this._tileKeys.set(n15.id, n15);
  }
  get coverageSet() {
    return new Set(this._tileKeys.keys());
  }
  keys() {
    return this._tileKeys.values();
  }
};
var i11 = class {
  constructor(e8) {
    this.version = e8;
  }
};
var o16 = class {
  constructor(e8) {
    this._subscriptions = /* @__PURE__ */ new Map(), this._visible = /* @__PURE__ */ new Set(), this._paused = /* @__PURE__ */ new Set(), this._version = 0, this._config = e8;
  }
  destroy() {
  }
  get _coverageSet() {
    var _a;
    return ((_a = this._coverage) == null ? void 0 : _a.coverageSet) ?? /* @__PURE__ */ new Set();
  }
  suspend() {
    this._suspendedOverage = this._coverage, this._coverage = null, this._updateSubscriptions();
  }
  resume() {
    null == this._coverage && (this._coverage = this._suspendedOverage, this._suspendedOverage = null, this._updateSubscriptions());
  }
  update(e8, s10) {
    return this._version = (this._version + 1) % Number.MAX_SAFE_INTEGER, this._updateCoverage(e8, s10), this._updateSubscriptions(), new Set(this._visible);
  }
  _updateCoverage(e8, s10) {
    this._coverage = new t11(this._config.tileInfoView, e8, s10);
  }
  _updateSubscriptions() {
    const e8 = this._coverageSet, t12 = this._updateVisibility(), o17 = s8(t12, e8), n15 = s8(this._subscriptions, t12), r11 = s8(e8, this._subscriptions), a13 = s8(n15, e8), c13 = s8(o17, a13), u14 = s8(c13, this._paused);
    this._visible = t12;
    for (const s10 of r11.values()) this._subscriptions.set(s10, new i11(this._version));
    for (const s10 of u14.values()) this._paused.add(s10);
    for (const s10 of a13.values()) this._subscriptions.delete(s10), this._paused.delete(s10);
    (r11.size || a13.size || u14.size) && this._sendUpdateSubscriptions(r11, a13, u14);
  }
  _sendUpdateSubscriptions(e8, s10, t12) {
    const i12 = Array.from(e8.values()).map((e9) => ({ tileId: e9, version: this._subscriptions.get(e9).version }));
    this._config.updateSubscriptions({ subscribe: i12, unsubscribe: Array.from(s10.values()), pause: Array.from(t12.values()) });
  }
  _updateVisibility() {
    const s10 = /* @__PURE__ */ new Set(), t12 = /* @__PURE__ */ new Set();
    if (!this._coverage) return s10;
    for (const e8 of this._coverage.keys()) {
      if (this._config.isDone(e8)) {
        s10.add(e8.id);
        continue;
      }
      if (this._addVisibleParent(s10, t12, e8)) continue;
      this._addVisibleChildren(s10, e8) || s10.add(e8.id);
    }
    const i12 = new e3(0, 0, 0, 0), o17 = new e3(0, 0, 0, 0);
    for (const e8 of t12) {
      i12.id = e8;
      for (const e9 of s10) o17.id = e9, i12.containsChild(o17) && s10.delete(e9);
    }
    return s10;
  }
  _addVisibleParent(s10, t12, i12) {
    let o17 = false;
    for (const n15 of this._visible.values()) {
      new e3(n15).containsChild(i12) && (s10.add(n15), t12.add(n15), o17 = true);
    }
    return o17;
  }
  _addVisibleChildren(s10, t12) {
    let i12 = false;
    for (const o17 of this._visible.values()) {
      const n15 = new e3(o17);
      t12.containsChild(n15) && (s10.add(o17), i12 = true);
    }
    return i12;
  }
};

// node_modules/@arcgis/core/views/layers/support/WhereClauseVisitor.js
var s9 = class {
  constructor(i12) {
    this._fieldsIndex = i12, this._clauses = [];
  }
  async finish() {
    return { requiresCurrentUser: (await Promise.all(this._clauses)).some((i12) => i12.currentUserRequired) };
  }
  visitClientWhereClause(s10) {
    s10 && this._clauses.push(e2(s10, this._fieldsIndex));
  }
  visitFeatureReduction(i12) {
    if (i12) switch (i12.type) {
      case "binning":
      case "cluster":
        this.visitLabelingInfo(i12.labelsVisible, i12.labelingInfo);
    }
  }
  visitLabelingInfo(i12, s10) {
    if (i12 && null != s10) for (const e8 of s10) this.visitClientWhereClause(e8.where);
  }
  visitDisplayFilter(i12, s10) {
    if (i12) for (const e8 of (s10 == null ? void 0 : s10.filters) ?? []) this.visitClientWhereClause(e8.where);
  }
  visitFilter(i12) {
    this.visitClientWhereClause(i12 == null ? void 0 : i12.where);
  }
  visitTrackInfo(i12) {
    null != i12 && (this.visitLabelingInfo(i12 == null ? void 0 : i12.latestObservations.labelsVisible, i12 == null ? void 0 : i12.latestObservations.labelingInfo), this.visitLabelingInfo(i12 == null ? void 0 : i12.previousObservations.labelsVisible, i12 == null ? void 0 : i12.previousObservations.labelingInfo), this.visitLabelingInfo(i12 == null ? void 0 : i12.trackLines.labelsVisible, i12 == null ? void 0 : i12.trackLines.labelingInfo));
  }
};

// node_modules/@arcgis/core/views/layers/FeatureLayerView.js
var U2 = (U3) => {
  let L4 = class extends U3 {
    constructor(...e8) {
      super(...e8), this._updatingRequiredPromise = null, this.filter = null, this.layer = null, this.requiresCurrentUser = false, this.requiredFields = [], this.view = null;
    }
    initialize() {
      this.addHandles([d2(() => {
        var _a, _b, _c, _d, _e;
        const e8 = this.layer, t12 = this.view;
        return [e8 && "elevationInfo" in e8 ? (_a = e8.elevationInfo) == null ? void 0 : _a.featureExpressionInfo : null, e8 && "displayField" in e8 ? e8.displayField : null, e8 && "timeInfo" in e8 && e8.timeInfo, e8 && "renderer" in e8 && e8.renderer, e8 && "labelingInfo" in e8 && e8.labelingInfo, e8 && "floorInfo" in e8 && e8.floorInfo, ((_b = t12 == null ? void 0 : t12.requiredFieldsOptions) == null ? void 0 : _b.featureTitleFields) && e8 && "featureTitleFields" in e8 && e8.featureTitleFields, ((_c = t12 == null ? void 0 : t12.requiredFieldsOptions) == null ? void 0 : _c.utilityNetworkFields) && t5(t12, e8), e8.displayFilterInfo, this.displayFilterEnabled, this.filter, this.featureEffect, this.timeExtent, "knowledge-graph-sublayer" === (e8 == null ? void 0 : e8.type) && "link-chart" === e8.parentCompositeLayer.type && ((_e = (_d = e8.parentCompositeLayer.linkChart) == null ? void 0 : _d.linkChartProperties.nonspatialDataDisplay) == null ? void 0 : _e.mode), "parquet" === (e8 == null ? void 0 : e8.type) && e8.popupTemplate];
      }, () => this._handleChange(), A), v(() => {
        var _a;
        return (_a = this.view) == null ? void 0 : _a.floors;
      }, "change", () => this._handleChange()), v(() => {
        var _a;
        return (_a = this.layer.displayFilterInfo) == null ? void 0 : _a.filters;
      }, "change", () => this._handleChange()), v(() => this.layer && "sublayers" in this.layer ? this.layer.sublayers : null, "change", () => this._handleChange())]);
    }
    get availableFields() {
      if (!this.layer) return [];
      const { layer: e8, layer: { fieldsIndex: t12 }, requiredFields: r11 } = this;
      return "outFields" in e8 && e8.outFields ? w3(t12, [...h(t12, e8.outFields), ...r11]) : w3(t12, r11);
    }
    get displayFilterEnabled() {
      var _a, _b;
      return (((_a = this.view) == null ? void 0 : _a.displayFilterEnabled) ?? true) && (!("displayFilterEnabled" in this.layer) || (((_b = this.layer) == null ? void 0 : _b.displayFilterEnabled) ?? true));
    }
    get effectiveDisplayFilter() {
      const e8 = this.layer;
      return this.displayFilterEnabled && e8.displayFilterInfo ? u6(e8.displayFilterInfo, this.view) : null;
    }
    get featureEffect() {
      return this.layer && "featureEffect" in this.layer ? this.layer.featureEffect : null;
    }
    set featureEffect(e8) {
      this._override("featureEffect", e8);
    }
    get maximumNumberOfFeatures() {
      return 0;
    }
    set maximumNumberOfFeatures(e8) {
      n2.getLogger(this).error("#maximumNumberOfFeatures=", "Setting maximum number of features is not supported");
    }
    get maximumNumberOfFeaturesExceeded() {
      return false;
    }
    get signedInUser() {
      var _a;
      return ((_a = this.layer) == null ? void 0 : _a.url) ? J(this.layer.url) : Promise.resolve(null);
    }
    highlight(e8, t12) {
      throw new Error("missing implementation");
    }
    createQuery() {
      var _a;
      const e8 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference }, t12 = null != this.filter ? this.filter.createQuery(e8) : new b3(e8);
      return "floorInfo" in this.layer && this.layer.floorInfo && (t12.where = r3(t12.where, o4(this))), this.displayFilterEnabled && (t12.where = r3(t12.where, (_a = this.effectiveDisplayFilter) == null ? void 0 : _a.where)), null != this.timeExtent && (t12.timeExtent = null != t12.timeExtent ? t12.timeExtent.intersection(this.timeExtent) : this.timeExtent.clone()), t12;
    }
    createAggregateQuery() {
      const e8 = { outFields: ["*"], returnGeometry: true, outSpatialReference: this.view.spatialReference };
      return new b3(e8);
    }
    queryFeatures(e8, t12) {
      throw new Error("missing implementation");
    }
    queryObjectIds(e8, t12) {
      throw new Error("missing implementation");
    }
    queryFeatureCount(e8, t12) {
      throw new Error("missing implementation");
    }
    queryExtent(e8, t12) {
      throw new Error("missing implementation");
    }
    async fetchPopupFeaturesFromGraphics(e8, t12) {
      return this._validateFetchPopupFeatures(e8, t12), this._fetchPopupFeatures(e8, t12);
    }
    _loadArcadeModules(e8) {
      var _a;
      return ((_a = e8.expressionInfos) == null ? void 0 : _a.length) || Array.isArray(e8.content) && e8.content.some((e9) => "expression" === e9.type) ? o5() : Promise.resolve();
    }
    _handleChange() {
      const e8 = Promise.all([this._updateRequiredFields(), this._updateClientWhereClauseRequirements()]).then(() => {
      });
      return this._set("_updatingRequiredPromise", e8), e8.then(() => {
        this._updatingRequiredPromise === e8 && this._set("_updatingRequiredPromise", null);
      }), e8;
    }
    async _updateClientWhereClauseRequirements() {
      var _a;
      if (!this.layer || !this.view) return;
      const { layer: e8 } = this, t12 = new s9(e8.fieldsIndex);
      if (t12.visitFilter(this.filter), "featureReduction" in e8 && t12.visitFeatureReduction(e8.featureReduction), "labelingInfo" in e8 && t12.visitLabelingInfo(e8.labelsVisible, e8.labelingInfo), "trackInfo" in e8 && t12.visitTrackInfo(e8.trackInfo), "2d" === this.view.type && (t12.visitFilter((_a = this.featureEffect) == null ? void 0 : _a.filter), t12.visitDisplayFilter(this.displayFilterEnabled, e8.displayFilterInfo), "featureReduction" in e8 && t12.visitFeatureReduction(e8.featureReduction)), "subtype-group" === e8.type) for (const r11 of e8.sublayers) t12.visitLabelingInfo(r11.labelsVisible, r11.labelingInfo);
      try {
        const e9 = await t12.finish();
        this._set("requiresCurrentUser", e9.requiresCurrentUser);
      } catch (i12) {
        n2.getLogger(this).error(i12);
      }
    }
    async _updateRequiredFields() {
      var _a, _b, _c, _d;
      if (!this.layer || !this.view) return;
      const e8 = "3d" === this.view.type, { layer: t12, layer: { fieldsIndex: i12, objectIdField: l9 } } = this, s10 = "renderer" in t12 && t12.renderer, o17 = "orderBy" in t12 && t12.orderBy, n15 = "featureReduction" in t12 ? t12.featureReduction : null, a13 = /* @__PURE__ */ new Set(), u14 = [s10 ? s10.collectRequiredFields(a13, i12) : null, Q(a13, t12), e8 && "elevationInfo" in t12 ? L2(a13, t12) : null, null != this.filter ? R(a13, t12, this.filter) : null, e8 || null == this.featureEffect ? null : R(a13, t12, this.featureEffect.filter), !e8 && n15 ? D(a13, t12, n15) : null, !e8 && o17 ? j(a13, t12, o17) : null];
      if ("timeInfo" in t12 && t12.timeInfo && this.timeExtent && x(a13, t12.fieldsIndex, [t12.timeInfo.startField, t12.timeInfo.endField]), "timeInfo" in t12 && t12.timeInfo && "trackInfo" in t12 && t12.trackInfo) {
        const { trackInfo: e9 } = t12;
        x(a13, t12.fieldsIndex, [t12.timeInfo.trackIdField]), "feature" !== t12.type && "startTimeField" !== e9.timeField || x(a13, t12.fieldsIndex, [t12.timeInfo.startField]), "endTimeField" === e9.timeField && x(a13, t12.fieldsIndex, [t12.timeInfo.endField]), await M(a13, t12);
      }
      if ("floorInfo" in t12 && t12.floorInfo && x(a13, t12.fieldsIndex, [t12.floorInfo.floorField]), "featureTitleFields" in t12 && ((_b = (_a = this.view) == null ? void 0 : _a.requiredFieldsOptions) == null ? void 0 : _b.featureTitleFields) && t12.featureTitleFields && x(a13, t12.fieldsIndex, t12.featureTitleFields), "feature" === t12.type && t12.globalIdField && ((_d = (_c = this.view) == null ? void 0 : _c.requiredFieldsOptions) == null ? void 0 : _d.globalIdField) && x(a13, t12.fieldsIndex, [t12.globalIdField]), this.displayFilterEnabled && u14.push(P(a13, t12, t12.displayFilterInfo)), "feature" === t12.type && e8 && null != t12.infoFor3D && (null == t12.globalIdField && n2.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"), x(a13, t12.fieldsIndex, [t12.globalIdField])), "subtype-group" === t12.type) {
        T2(a13, i12, t12.subtypeField);
        const e9 = t12.sublayers.map((e10) => {
          var _a2;
          return Promise.all([(_a2 = e10.renderer) == null ? void 0 : _a2.collectRequiredFields(a13, i12), Q(a13, e10)]);
        });
        u14.push(Promise.all(e9));
      }
      if ("catalog-footprint" === t12.type && t12.parent) {
        const e9 = t12.parent;
        x(a13, i12, [e9.itemNameField, e9.itemSourceField, e9.itemTypeField, e9.maxScaleField, e9.minScaleField]);
      }
      "knowledge-graph-sublayer" === t12.type && "link-chart" === t12.parentCompositeLayer.type && T2(a13, i12, E), "parquet" === t12.type && u14.push(n3(t12, t12.popupTemplate).then((e9) => {
        for (const t13 of e9) a13.add(t13);
      }));
      const d10 = await Promise.allSettled(u14);
      T2(a13, i12, l9), e8 && "displayField" in t12 && t12.displayField && T2(a13, i12, t12.displayField);
      for (const p10 of d10) "rejected" === p10.status && n2.getLogger(this).error(p10.reason);
      const f5 = Array.from(a13).sort();
      this._set("requiredFields", f5);
    }
    _validateFetchPopupFeatures(e8, r11) {
      if (null != r11) for (const i12 of e8) {
        const e9 = i12.origin && "layer" in i12.origin ? i12.origin.layer : i12.layer;
        if ("popupEnabled" in e9 && !e9.popupEnabled) throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: e9 });
        if (i12.isAggregate) {
          const r12 = "featureReduction" in e9 ? e9.featureReduction : null, i13 = "trackInfo" in e9 ? e9.trackInfo : null;
          if (null == r12 && null == i13 || null != r12 && (!("popupTemplate" in r12) || !r12.popupEnabled || !r12.popupTemplate) || (i13 == null ? void 0 : i13.enabled) && (!("popupTemplate" in i13) || !i13.popupEnabled || !i13.popupTemplate)) throw new s("featurelayerview:fetchPopupFeatures", "Popups are disabled", { layer: e9 });
        } else if ("popupTemplate" in e9) {
          if (!p(e9, r11)) throw new s("featurelayerview:fetchPopupFeatures", "Layer does not define a popup template", { layer: e9 });
        }
      }
    }
    _popupFeatureHasRequiredFields(e8, t12) {
      return ke(t12, e8);
    }
    async _fetchPopupFeatures(e8, t12) {
      var _a;
      const r11 = new Array(e8.length), l9 = /* @__PURE__ */ new Map(), s10 = await this._createPopupQuery(e8.map((e9) => {
        var _a2;
        return ((_a2 = e9.origin) == null ? void 0 : _a2.layer) ?? e9.layer;
      }), t12);
      for (let o17 = 0; o17 < e8.length; o17++) {
        const n15 = e8[o17];
        if (n15.isAggregate) {
          r11[o17] = n15;
          continue;
        }
        const a13 = ((_a = n15.origin) == null ? void 0 : _a.layer) ?? n15.layer;
        if (!a13 || !("popupEnabled" in a13)) continue;
        const u14 = h(this.layer.fieldsIndex, s10.outFields), p10 = p(a13, t12);
        if (null == p10) continue;
        const d10 = await this._loadArcadeModules(p10);
        s2(t12);
        d10 && d10.arcadeUtils.hasGeometryOperations(p10) || !this._popupFeatureHasRequiredFields(n15, u14) ? l9.set(n15.getObjectId(), { graphic: n15, index: o17 }) : r11[o17] = n15;
      }
      if ("stream" === this.layer.type || "parquet" === this.layer.type || 0 === l9.size) return r11.filter(Boolean);
      s10.objectIds = Array.from(l9.keys());
      try {
        const e9 = await this.layer.queryFeatures(s10, t12);
        for (const t13 of e9.features) {
          const { graphic: { geometry: e10, origin: i12 }, index: s11 } = l9.get(t13.getObjectId());
          t13.geometry || (t13.geometry = e10), t13.origin = i12, r11[s11] = t13;
        }
      } catch {
      }
      return r11.filter(Boolean);
    }
    async _createPopupQuery(e8, t12) {
      const r11 = this.layer.createQuery(), l9 = /* @__PURE__ */ new Set();
      let s10 = false;
      const o17 = e8 ?? [this.layer];
      for (const n15 of o17) {
        if (!("popupEnabled" in n15)) continue;
        const e9 = p(n15, t12);
        if (null == e9) continue;
        const r12 = await this._loadArcadeModules(e9);
        s2(t12);
        const o18 = r12 && r12.arcadeUtils.hasGeometryOperations(e9);
        s10 = !("point" !== this.layer.geometryType && !o18);
        const a13 = await n3(this.layer, e9);
        s2(t12);
        for (const t13 of a13) l9.add(t13);
      }
      if (r11.returnGeometry = s10, r11.returnZ = s10, r11.returnM = s10, r11.outFields = Array.from(l9), r11.outSpatialReference = this.view.spatialReference, "floorInfo" in this.layer && this.layer.floorInfo) {
        const e9 = o4(this);
        null != e9 && (r11.where = r11.where ? `(${r11.where}) AND (${e9})` : e9);
      }
      return r11;
    }
    canResume() {
      return !!super.canResume() && (null == this.timeExtent || !this.timeExtent.isEmpty);
    }
    getTest() {
    }
    get test() {
    }
  };
  return r([m()], L4.prototype, "_updatingRequiredPromise", void 0), r([m({ readOnly: true })], L4.prototype, "availableFields", null), r([m({ readOnly: true })], L4.prototype, "displayFilterEnabled", null), r([m({ readOnly: true })], L4.prototype, "effectiveDisplayFilter", null), r([m({ type: w2 })], L4.prototype, "featureEffect", null), r([m({ type: d5 })], L4.prototype, "filter", void 0), r([m()], L4.prototype, "layer", void 0), r([m({ type: Number })], L4.prototype, "maximumNumberOfFeatures", null), r([m({ readOnly: true, type: Boolean })], L4.prototype, "maximumNumberOfFeaturesExceeded", null), r([m()], L4.prototype, "requiresCurrentUser", void 0), r([m({ readOnly: true })], L4.prototype, "requiredFields", void 0), r([m({ readOnly: true })], L4.prototype, "signedInUser", null), r([m()], L4.prototype, "suspended", void 0), r([m()], L4.prototype, "view", void 0), L4 = r([a2("esri.views.layers.FeatureLayerView")], L4), L4;
};

// node_modules/@arcgis/core/views/2d/layers/FeatureLayerView2D.js
function ne(e8, t12) {
  const r11 = /* @__PURE__ */ new Set();
  return e8 && e8.forEach((e9) => r11.add(e9)), t12 && t12.forEach((e9) => r11.add(e9)), r11.has("*") ? ["*"] : Array.from(r11);
}
var ue = 4294967294;
function le(e8, t12) {
  return t(e8.map((e9) => d2(() => {
    const t13 = e9();
    return t13 && "object" == typeof t13 ? "getTime" in t13 && "function" == typeof t13.getTime ? t13.getTime() : JSON.stringify(t13) : t13;
  }, t12)));
}
var he = class extends U2(i7(S2(y2))) {
  constructor() {
    super(...arguments), this._commandsQueue = new o8({ process: (e8) => {
      switch (e8.type) {
        case "override-batch":
          return this._doOverride(e8);
        case "update":
          return this._doUpdate();
        case "highlight":
          return this._updateHighlights();
      }
    } }), this._visibilityOverrides = /* @__PURE__ */ new Set(), this._lastAvailableFields = [], this._lastTargetState = null, this.eventLog = new l3(), this._sourceRefreshVersion = 1, this._displayRefreshVersion = 1, this._pipelineUpdating = false, this._editUpdatingHandles = new h2(), this._fields = null, this._sourceUpdating = false, this.featureEffectView = new r5();
  }
  destroy() {
    var _a;
    (_a = this._workerProxy) == null ? void 0 : _a.destroy(), this._workerAttached.reject(u2()), this._commandsQueue.destroy();
  }
  initialize() {
    this._workerAttached = L(), d(this._workerAttached.promise), this.addResolvingPromise(this._initProxy()), this.featureEffectView.featureEffect = this.featureEffect, this.featureEffectView.endTransition();
  }
  async _initProxy() {
    var _a;
    const e8 = this.layer;
    if ("isTable" in e8 && e8.isTable) throw new s("featurelayerview:table-not-supported", "table feature layer can't be displayed", { layer: e8 });
    if (("feature" === e8.type || "subtype-group" === e8.type) && false === ((_a = O(e8)) == null ? void 0 : _a.operations.supportsQuery)) throw new s("featurelayerview:query-not-supported", "layer view requires a layer with query capability", { layer: e8 });
    this._workerProxy && this._workerProxy.destroy();
    const t12 = this._createClientOptions();
    this._workerProxy = await t6(t12);
  }
  async _attachProxy() {
    var _a, _b, _c;
    const e8 = { service: await this.layerAdapter.createServiceOptions(this.view), tileInfoJSON: (_c = (_b = (_a = this.view) == null ? void 0 : _a.featuresTilingScheme) == null ? void 0 : _b.tileInfo) == null ? void 0 : _c.toJSON() };
    let t12 = [];
    Array.isArray(e8.service.source) && (t12 = e8.service.source);
    try {
      await this._workerProxy.pipeline.onAttach(e8, { transferList: t12 }), this._workerAttached.resolve();
    } catch (r11) {
      this._workerAttached.reject(u2()), f(r11);
    }
  }
  async _detachProxy() {
    return this._workerProxy.pipeline.onDetach();
  }
  async getWorker() {
    return await this._workerAttached.promise, this._workerProxy;
  }
  get dataUpdating() {
    return this._sourceUpdating || this._editUpdatingHandles.updating;
  }
  get effectiveDisplayFilterClause() {
    var _a;
    const e8 = ((_a = this.effectiveDisplayFilter) == null ? void 0 : _a.where) ?? null;
    return e8 && this.hasHighlight ? u5(e8, l2(this.layer.objectIdField, this.highlightIds)) : e8;
  }
  get hasAllFeatures() {
    return this.layer.visible && !this.suspended && this.eventLog.hasAllData && this.eventLog.willQueryAllFeatures;
  }
  get hasAllFeaturesInView() {
    var _a;
    const e8 = ((_a = this.effectiveDisplayFilter) == null ? void 0 : _a.where) || null, t12 = !this.eventLog.willQueryAllFeatures && null != e8 && "1=1" !== e8;
    return this.layer.visible && !this.suspended && this.eventLog.hasAllData && !t12;
  }
  get hasFullGeometries() {
    return this.layer.visible && !this.suspended && this.eventLog.hasAllData && this.eventLog.willQueryFullResolutionGeometry;
  }
  get labelingCollisionInfos() {
    const e8 = this.layerAdapter.getLabelingDeconflictionInfo(this.view), t12 = this.layer.geometryType, r11 = !this.suspended;
    return e8.map(({ vvEvaluators: e9, deconflictionEnabled: s10 }) => ({ container: this.featureContainer, vvEvaluators: e9, deconflictionEnabled: s10, geometryType: t12, visible: r11 }));
  }
  get layerAdapter() {
    switch (this.layer.type) {
      case "feature":
        return "memory" === this.layer.source.type ? new p9(this.layer) : new c10(this.layer);
      case "geojson":
      case "csv":
      case "wfs":
        return new p9(this.layer);
      case "parquet":
        return new n12(this.layer);
      case "subtype-group":
        return new y4(this.layer);
      case "ogc-feature":
        return new u12(this.layer);
      case "stream":
        return new o14(this.layer);
      case "oriented-imagery":
        return new m9(this.layer);
      case "knowledge-graph-sublayer":
        return new c11(this.layer);
      case "catalog-footprint":
        return new n8(this.layer);
      default:
        n(this.layer);
    }
    return null;
  }
  get timeExtent() {
    var _a;
    return i8(this.layerAdapter.timeOptions, (_a = this.view) == null ? void 0 : _a.timeExtent, this._get("timeExtent"));
  }
  getDisplayStatistics(e8, t12) {
    var _a;
    return (_a = this.featureContainer) == null ? void 0 : _a.getDisplayStatistics(e8, t12);
  }
  async queryHeatmapStatistics(e8) {
    return (await this.getWorker()).pipeline.queryHeatmapStatistics(e8);
  }
  highlight(e8, t12) {
    let s10;
    e8 instanceof b2 ? s10 = [e8.getObjectId()] : "number" == typeof e8 || "string" == typeof e8 ? s10 = [e8] : V.isCollection(e8) && e8.length > 0 ? s10 = e8.map((e9) => e9 == null ? void 0 : e9.getObjectId()).toArray() : Array.isArray(e8) && e8.length > 0 && (s10 = "number" == typeof e8[0] || "string" == typeof e8[0] ? e8 : e8.map((e9) => e9 == null ? void 0 : e9.getObjectId()));
    const o17 = s10 == null ? void 0 : s10.filter(G);
    if (!(o17 == null ? void 0 : o17.length)) return e();
    const n15 = (t12 == null ? void 0 : t12.name) ?? c2;
    return this._addHighlights(o17, n15), e(() => !this.destroyed && this._removeHighlights(o17, n15));
  }
  async hitTest(e8, i12) {
    const a13 = await this.featureContainer.hitTest(i12);
    if (0 === a13.length) return null;
    const o17 = await this.getWorker(), { features: n15, aggregates: u14, tracks: l9 } = await o17.pipeline.getDisplayFeatures(a13), h4 = this.featureContainer.getSortKeys(a13), c13 = ({ displayId: e9 }, { displayId: t12 }) => h4.has(e9) && h4.has(t12) ? h4.get(e9) - h4.get(t12) : e9 - t12;
    return n15.sort(c13).reverse(), u14.sort(c13).reverse(), [...u14.map((r11) => this._createGraphicHit(e8, s5.fromJSON(r11))), ...l9.map((t12) => this._createGraphicHit(e8, p4.fromJSON(t12))), ...n15.map((t12) => this._createGraphicHit(e8, b2.fromJSON(t12)))];
  }
  async queryStatistics() {
    const e8 = await this.getWorker();
    return n14(e8.pipeline.queryStatistics(), { featureCount: 0, ringCount: 0, vertexCount: 0 });
  }
  async querySummaryStatistics(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.features.executeQueryForSummaryStatistics(this._cleanUpQuery(e8), i12, r11);
    return n14(a13, {});
  }
  async queryAggregateSummaryStatistics(e8, t12, r11) {
    const s10 = { ...t12, scale: this.view.scale }, i12 = (await this.getWorker()).aggregates.executeQueryForSummaryStatistics(this._cleanUpAggregateQuery(e8), s10, r11);
    return n14(i12, {});
  }
  async queryUniqueValues(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.features.executeQueryForUniqueValues(this._cleanUpQuery(e8), i12, r11);
    return n14(a13, { uniqueValueInfos: [] });
  }
  async queryAggregateUniqueValues(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.aggregates.executeQueryForUniqueValues(this._cleanUpAggregateQuery(e8), i12, r11);
    return n14(a13, { uniqueValueInfos: [] });
  }
  async queryClassBreaks(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.features.executeQueryForClassBreaks(this._cleanUpQuery(e8), i12, r11);
    return n14(a13, { classBreakInfos: [] });
  }
  async queryAggregateClassBreaks(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.aggregates.executeQueryForClassBreaks(this._cleanUpAggregateQuery(e8), i12, r11);
    return n14(a13, { classBreakInfos: [] });
  }
  async queryHistogram(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.features.executeQueryForHistogram(this._cleanUpQuery(e8), i12, r11);
    return n14(a13, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  async queryAggregateHistogram(e8, t12, r11) {
    const s10 = await this.getWorker(), i12 = { ...t12, scale: this.view.scale }, a13 = s10.aggregates.executeQueryForHistogram(this._cleanUpAggregateQuery(e8), i12, r11);
    return n14(a13, { bins: [], maxValue: null, minValue: null, normalizationTotal: null });
  }
  queryFeatures(e8, t12) {
    return this.queryFeaturesJSON(e8, t12).then((e9) => {
      const t13 = d4.fromJSON(e9);
      return t13.features.forEach((e10) => this._setLayersForFeature(e10)), t13;
    });
  }
  async queryVisibleFeatures(e8, t12) {
    const r11 = (await this.getWorker()).pipeline.queryVisibleFeatures(this._cleanUpQuery(e8), t12), s10 = await n14(r11, { features: [] }), i12 = d4.fromJSON(s10);
    return i12.features.forEach((e9) => this._setLayersForFeature(e9)), i12;
  }
  async queryAggregates(e8, t12) {
    const r11 = (await this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(e8), t12), s10 = await n14(r11, { features: [] }), i12 = i9.fromJSON(s10);
    return i12.features.forEach((e9) => this._setLayersForFeature(e9)), i12;
  }
  async queryAggregateIds(e8, t12) {
    const r11 = (await this.getWorker()).aggregates.executeQueryForIds(this._cleanUpAggregateQuery(e8), t12);
    return n14(r11, []);
  }
  async queryAggregateCount(e8, t12) {
    const r11 = (await this.getWorker()).aggregates.executeQueryForCount(this._cleanUpAggregateQuery(e8), t12);
    return n14(r11, 0);
  }
  async queryAggregateJSON(e8, t12) {
    const r11 = (await this.getWorker()).aggregates.executeQuery(this._cleanUpAggregateQuery(e8), t12);
    return n14(r11, { features: [] });
  }
  async queryFeaturesJSON(e8, t12) {
    const r11 = (await this.getWorker()).features.executeQuery(this._cleanUpQuery(e8), t12);
    return n14(r11, { features: [] });
  }
  async queryObjectIds(e8, t12) {
    const r11 = (await this.getWorker()).features.executeQueryForIds(this._cleanUpQuery(e8), t12);
    return n14(r11, []);
  }
  async queryFeatureCount(e8, t12) {
    const r11 = (await this.getWorker()).features.executeQueryForCount(this._cleanUpQuery(e8), t12);
    return n14(r11, 0);
  }
  async queryExtent(e8, t12) {
    const r11 = (await this.getWorker()).features.executeQueryForExtent(this._cleanUpQuery(e8), t12), s10 = await n14(r11, { count: 0, extent: null });
    return { count: s10.count, extent: w.fromJSON(s10.extent) };
  }
  async queryAttributeBins(e8, t12) {
    const r11 = (await this.getWorker()).features.executeAttributeBinsQuery(this._cleanUpAttributeBinsQuery(e8), t12), s10 = await n14(r11, { features: [] });
    return c.fromJSON(s10);
  }
  async getSampleFeatures(e8) {
    return (await this.getWorker()).pipeline.getSampleFeatures(e8);
  }
  setVisibility(e8, t12) {
    t12 ? this._visibilityOverrides.delete(e8) : this._visibilityOverrides.add(e8), this._update();
  }
  update(e8) {
    if (!this._subscriptionManager) return;
    this.view.animation && !this._lastTargetState && (this._lastTargetState = e8.state.clone()), !this.view.animation && this._lastTargetState && (this._lastTargetState = null);
    const t12 = this._subscriptionManager.update(e8.targetState, this._lastTargetState);
    this.featureContainer.setVisibleTiles(t12);
  }
  attach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.attach"), d(this._updatingHandles.addPromise(this._workerAttached.promise)), d(this._attachProxy()), this.featureContainer = new _(this), this.container.addChild(this.featureContainer), this.view.timeline.record(`${this.layer.title} (FeatureLayer) Attach`), this._subscriptionManager = new o16({ tileInfoView: this.view.featuresTilingScheme, updateSubscriptions: (e8) => {
      this.featureContainer.updateSubscriptions(e8), d(this._updatingHandles.addPromise(this.getWorker().then((t12) => t12.pipeline.updateSubscriptions(e8))));
    }, isDone: (e8) => this.featureContainer.isDone(e8) }), this.requestUpdate(), this.addAttachHandles([le([() => this._displayRefreshVersion, () => this.layer.displayFilterInfo, () => this.timeExtent, () => this.clips, () => this.filter, () => this.effectiveDisplayFilterClause, () => this.featureEffect, () => this._sourceRefreshVersion, () => this.view.timeZone, () => this.view.timeExtent, ...this.layerAdapter.getUpdateHashProperties(this.view)], () => this._update()), d2(() => this.updateSuspended, (e8) => {
      e8 || (this._subscriptionManager.resume(), this.view.labelManager.requestUpdate());
    }), d2(() => this.visible, (e8) => {
      this.view.labelManager.requestUpdate();
    })]), this._update(), "stream" !== this.layer.type && "parquet" !== this.layer.type && "catalog-footprint" !== this.layer.type && this.addAttachHandles(this.layer.on("edits", (e8) => this._editUpdatingHandles.addPromise(this._edit(e8))));
  }
  detach() {
    has("esri-2d-update-debug") && console.debug("FeatureLayerView2D.detach"), this._detachProxy(), this._fields = null, this.featureContainer.destroy(), this.featureContainer = null, this._commandsQueue.clear(), this.container.removeAllChildren(), this._subscriptionManager = u(this._subscriptionManager), this._workerProxy.pipeline.onDetach(), this._workerAttached = L(), d(this._workerAttached.promise), this._lastAvailableFields = [], this._lastSchema = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  addOverrides(e8) {
    return this._commandsQueue.push({ type: "override", options: { ...e8, release: [] } });
  }
  removeOverrides(e8) {
    for (const r11 of e8) if (null == r11) throw new s("featurelayerview:bad-override", "Tried to remove an override for an invalid objectId", { objectId: r11 });
    const t12 = { added: [], updated: [], removed: [], release: e8, isWeak: false, historicMoment: null };
    return this._commandsQueue.push({ type: "override", options: t12 });
  }
  isUpdating() {
    const e8 = "renderer" in this.layer && null != this.layer.renderer, t12 = this._commandsQueue.updateTracking.updating, r11 = null != this._updatingRequiredPromise, s10 = this.featureContainer.updatingHandles.updating, i12 = this.updateRequested || e8 && (t12 || r11) || s10 || this._pipelineUpdating || this.dataUpdating;
    if (has("esri-2d-log-updating")) {
      console.log(`Updating FLV2D (${this.layer.id}): ${i12}
  -> updateRequested ${this.updateRequested}
  -> hasRenderer ${e8}
  -> updatingRequiredFields ${r11}
  -> hasPendingCommand ${t12}
  -> dataUpdating ${this.dataUpdating}
  -> processing ${this._pipelineUpdating}
  -> updatingContainer ${s10}
`);
      for (const e9 of this.featureContainer.subscriptions()) console.log(`    -> Tile[${e9.id}] Done: ${e9.done}`);
    }
    return i12;
  }
  _createClientOptions() {
    const e8 = this;
    return { get container() {
      return e8.featureContainer;
    }, setUpdating: (e9) => {
      this._set("_pipelineUpdating", e9.pipeline), this._set("_sourceUpdating", e9.source);
    }, emitEvent: (e9) => {
      this.emit(e9.name, e9.event);
    }, get eventLog() {
      return e8.eventLog;
    }, fetch: async (t12) => {
      if (has("esri-2d-stabilize-glyphs")) {
        const r11 = [];
        for (const s10 of t12) r11.push(await e8.view.stage.painter.textureManager.rasterizeItem(s10));
        return r11;
      }
      return Promise.all(t12.map((t13) => e8.view.stage.painter.textureManager.rasterizeItem(t13)));
    }, fetchDictionary: (e9) => Promise.all(e9.map((e10) => this._fetchDictionaryRequest(e10))) };
  }
  async _fetchDictionaryRequest(e8) {
    try {
      if ("subtype-group" === this.layer.type) throw new Error("InternalError: SubtypeGroupLayer does not support dictionary renderer");
      const t12 = this.layer.renderer;
      if (!t12 || "dictionary" !== t12.type) throw new Error("InternalError: Expected layer to have a DictionaryRenderer");
      const r11 = this._lastSchema.processor.mesh.factory.symbology;
      if ("dictionary" !== r11.type) throw new Error("InternalError: Expected schema to be of type 'dictionary'");
      const s10 = { cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, store: this.featureContainer.instanceStore, scaleExpression: r11.scaleExpression };
      this._fields || (this._fields = this.layer.fields.map((e9) => e9.toJSON()));
      const i12 = r11.visualVariableUniforms, a13 = await t12.getSymbolAsync(e8.feature, { fields: this._fields });
      if (!a13 || !a13.data) return { type: "dictionary-response", meshes: [] };
      return { type: "dictionary-response", meshes: await c3(a13.data, { uniforms: i12, path: "renderer", schemaOptions: s10 }) };
    } catch (t12) {
      return { type: "dictionary-response", meshes: [] };
    }
  }
  _cleanUpQuery(e8) {
    const t12 = b3.from(e8) || this.createQuery();
    return t12.outSpatialReference || (t12.outSpatialReference = this.view.spatialReference), t12.toJSON();
  }
  _cleanUpAttributeBinsQuery(e8) {
    const t12 = T.from(e8);
    return t12.outSpatialReference || (t12.outSpatialReference = this.view.spatialReference), t12.toJSON();
  }
  _cleanUpAggregateQuery(e8) {
    const t12 = b3.from(e8) || this.createAggregateQuery();
    t12.outSpatialReference || (t12.outSpatialReference = this.view.spatialReference);
    const r11 = t12.objectIds ?? [];
    for (const s10 of t12.aggregateIds ?? []) r11.push(s10);
    return t12.objectIds = r11, t12.aggregateIds = [], t12.toJSON();
  }
  async _update() {
    return this._commandsQueue.push({ type: "update" });
  }
  _edit(e8) {
    return this.updateSuspended ? (this._subscriptionManager.suspend(), Promise.resolve()) : this._commandsQueue.push({ type: "edit", event: e8 });
  }
  async doRefresh(e8) {
    this.attached && (this.updateSuspended && e8 || (e8 ? this.incrementSourceRefreshVersion() : this.incrementDisplayRefreshVersion()));
  }
  incrementSourceRefreshVersion() {
    this._sourceRefreshVersion = (this._sourceRefreshVersion + 1) % ue + 1;
  }
  incrementDisplayRefreshVersion() {
    this._displayRefreshVersion = (this._displayRefreshVersion + 1) % ue + 1;
  }
  async _resolveIdenifiers(e8) {
    const t12 = [], r11 = [];
    for (const a13 of e8) null == a13.objectId || -1 === a13.objectId ? null == a13.globalId ? n2.getLogger(this).warn("mapview-apply-edits", "A feature identifier must contain either a GlobalId or ObjectId. Ignoring", { identifier: a13 }) : r11.push(a13.globalId) : t12.push(a13.objectId);
    const s10 = "globalIdField" in this.layer && this.layer.globalIdField, i12 = s10 && this.availableFields.includes(s10);
    if (r11.length && !i12) return n2.getLogger(this).error(new s("mapview-apply-edits", `Editing the specified service requires the layer's globalIdField, ${s10} to be included the layer's outFields for updates to be reflected on the map`)), t12;
    if (r11.length) {
      const e9 = await this._workerProxy.pipeline.getObjectIdsFromGlobalIds(r11);
      for (const r12 of e9) t12.push(r12);
    }
    return t12;
  }
  _resolveOverrides(e8) {
    const t12 = false, r11 = false, s10 = a9(this.layer.geometryType), i12 = this.layer.objectIdField, a13 = [];
    for (const o17 of e8.added) {
      const e9 = ot(o17, s10, t12, r11, i12);
      if (null == e9.objectId) throw new s("featurelayerview:bad-override", "Feature does not have an objectId", { feature: o17 });
      a13.push(e9);
    }
    for (const o17 of e8.updated) {
      const e9 = ot(o17, s10, t12, r11, i12);
      if (null == e9.objectId) throw new s("featurelayerview:bad-override", "Feature does not have an objectId", { feature: o17 });
      a13.push(e9);
    }
    for (const o17 of e8.removed) if (null == o17) throw new s("featurelayerview:bad-override", "Tried to remove an invalid objectId", { objectId: o17 });
    return { type: "override", updates: a13, removed: e8.removed, release: e8.release, isWeak: e8.isWeak ?? false, historicMoment: e8.historicMoment ?? null };
  }
  async _resolveEdit(e8) {
    var _a, _b;
    const t12 = this.layer, r11 = ((_a = e8.historicMoment) == null ? void 0 : _a.getTime()) ?? null, s10 = "layerId" in t12 && ((_b = e8.editedFeatures) == null ? void 0 : _b.find((e9) => e9.layerId === t12.layerId));
    if (s10 && this._canEditByFeature(s10)) {
      const { adds: e9, deletes: t13, updates: i13 } = s10.editedFeatures, a14 = this.layer.objectIdField, o18 = i13.map((e10) => e10.current), n15 = t13.map((e10) => "attributes" in e10 ? { objectId: a14 ? e10.attributes[a14] : null } : e10), u14 = await this._resolveIdenifiers(n15);
      return this._resolveOverrides({ added: e9, updated: o18, removed: u14, historicMoment: r11, isWeak: true, release: [] });
    }
    const [i12, a13, o17] = await Promise.all([this._resolveIdenifiers(e8.addedFeatures), this._resolveIdenifiers(e8.updatedFeatures), this._resolveIdenifiers(e8.deletedFeatures)]);
    return { type: "override-by-id", updates: [...i12, ...a13], removed: o17, historicMoment: r11, isWeak: true };
  }
  _canEditByFeature(e8) {
    const { adds: t12, updates: r11 } = e8.editedFeatures;
    return t12.every((e9) => {
      var _a;
      return this.view.spatialReference.equals((_a = e9.geometry) == null ? void 0 : _a.spatialReference);
    }) && r11.every((e9) => {
      var _a;
      return this.view.spatialReference.equals((_a = e9.current.geometry) == null ? void 0 : _a.spatialReference);
    });
  }
  async _doUpdate() {
    var _a, _b, _c, _d;
    "featureReduction" in this.layer && this.layer.featureReduction && this.layer.featureReduction !== this._lastFeatureReduction && (this.layer.featureReduction = (_a = this.layer.featureReduction) == null ? void 0 : _a.clone(), this._lastFeatureReduction = this.layer.featureReduction);
    try {
      if (await Promise.allSettled([this._handleChange(), W(this.layer)]), this.destroyed || !((_b = this.layerAdapter) == null ? void 0 : _b.hasRequiredSupport) || !this._subscriptionManager) return;
      const e8 = this.featureContainer.instanceStore;
      this.featureContainer.attributeView.lockTextureUploads(), e8.updateStart();
      const t12 = this.featureEffect, r11 = { store: e8, cimAnalyzer: this.view.stage.cimAnalyzer, cimResourceManager: this.view.stage.painter.textureManager.resourceManager, scaleExpression: void 0 }, s10 = await this._createViewSchemaConfig(), i12 = { source: this.layerAdapter.createSourceSchema(s10, this._sourceRefreshVersion), processor: await this.layerAdapter.createProcessorSchema(r11, s10, this._displayRefreshVersion) }, a13 = i((_c = this._lastSchema) == null ? void 0 : _c.source.mutable, i12.source.mutable) || i((_d = this._lastSchema) == null ? void 0 : _d.processor, i12.processor);
      if (!a13) return this.featureContainer.requestRender(), this.featureContainer.attributeView.unlockTextureUploads(), e8.updateEnd(), void (this.featureEffectView.featureEffect = t12);
      this._lastSchema = i12, this._fields = null;
      const o17 = Math.round(performance.now());
      has("esri-2d-update-debug") && console.debug(`Id[${this.layer.uid}] Version[${o17}] FeatureLayerView2D._doUpdate`, { changes: a13 });
      const n15 = await this.getWorker();
      await n15.pipeline.updateSchema(i12, o17), e8.updateEnd(), this.featureEffectView.featureEffect = t12, this.featureEffectView.endTransition(), this.featureContainer.restartAllAnimations(), this.featureContainer.attributeView.unlockTextureUploads(), this.featureContainer.trySwapRenderState(), this.featureContainer.requestRender(), has("esri-2d-update-debug") && console.debug(`Version[${o17}] FeatureLayerView2D.updateEnd`), this.requestUpdate();
    } catch (e8) {
      has("esri-2d-update-debug") && console.error("Encountered an error during update", e8);
    }
  }
  async _doOverride(e8) {
    const t12 = await this.getWorker();
    try {
      for (const r11 of e8.messages) switch (r11.type) {
        case "edit": {
          const e9 = new e7();
          e9.add(await this._resolveEdit(r11.event)), await t12.pipeline.onOverride(e9.toMessage());
          break;
        }
        case "override": {
          const e9 = new e7();
          e9.add(this._resolveOverrides(r11.options)), await t12.pipeline.onOverride(e9.toMessage());
          break;
        }
      }
    } catch (r11) {
      b(r11), 0;
    }
  }
  _getEffectiveAvailableFields(e8) {
    const t12 = ne(this._lastAvailableFields, e8);
    return this._lastAvailableFields = t12, E2(this.layer.fieldsIndex, t12);
  }
  async _createViewSchemaConfig() {
    var _a, _b;
    const e8 = this.requiresCurrentUser ? await this.signedInUser : null, t12 = [ce(this.view, this.layerAdapter, this.timeExtent, this._visibilityOverrides, this.filter, this.effectiveDisplayFilterClause), ((_b = (_a = this.featureEffect) == null ? void 0 : _a.filter) == null ? void 0 : _b.toJSON()) ?? null];
    return { availableFields: this._getEffectiveAvailableFields(this.availableFields), displayFilterEnabled: this.displayFilterEnabled, filters: t12, scale: this.view.scale, timeZone: this.view.timeZone, timeExtent: this.view.timeExtent, currentUser: e8 };
  }
  _processHighlight() {
    this._commandsQueue.push({ type: "highlight" });
  }
  async _updateHighlights() {
    const e8 = this._getHighlights(), t12 = await this.getWorker();
    if (this.destroyed) return;
    const r11 = t12.pipeline.updateHighlight({ highlights: e8 }).catch((e9) => {
      b(e9) || n2.getLogger(this).error(e9);
    });
    this._updatingHandles.addPromise(r11);
  }
  _setLayersForFeature(e8) {
    e8.layer = e8.sourceLayer = this.layer, this.layerAdapter.setGraphicOrigin && this.layerAdapter.setGraphicOrigin(e8);
  }
  _createGraphicHit(e8, t12) {
    return this._setLayersForFeature(t12), null != t12.geometry && (t12.geometry.spatialReference = this.view.spatialReference), { type: "graphic", graphic: t12, layer: this.layer, mapPoint: e8 };
  }
};
function ce(e8, t12, r11, s10, i12, a13) {
  var _a;
  i12 && (i12 = i12.clone());
  const o17 = null != i12 ? i12.timeExtent : null, n15 = null != r11 && null != o17 ? r11.intersection(o17) : r11 || o17;
  n15 && (i12 ?? (i12 = new d5()), i12.timeExtent = n15), i12 = ((_a = t12.addFilters) == null ? void 0 : _a.call(t12, i12, e8)) ?? i12, a13 && (i12 ?? (i12 = new d5()), i12.where = r3(i12.where, a13));
  let u14 = (i12 == null ? void 0 : i12.toJSON()) ?? null;
  return s10.size && (u14 ?? (u14 = new d5().toJSON()), u14.hiddenIds = Array.from(s10)), u14;
}
r([m()], he.prototype, "_commandsQueue", void 0), r([m()], he.prototype, "_sourceRefreshVersion", void 0), r([m()], he.prototype, "_displayRefreshVersion", void 0), r([m({ readOnly: true })], he.prototype, "_pipelineUpdating", void 0), r([m()], he.prototype, "_sourceUpdating", void 0), r([m({ readOnly: true })], he.prototype, "dataUpdating", null), r([m({ readOnly: true })], he.prototype, "effectiveDisplayFilterClause", null), r([m({ readOnly: true })], he.prototype, "hasAllFeatures", null), r([m({ readOnly: true })], he.prototype, "hasAllFeaturesInView", null), r([m({ readOnly: true })], he.prototype, "hasFullGeometries", null), r([m()], he.prototype, "featureEffectView", void 0), r([m()], he.prototype, "labelingCollisionInfos", null), r([m()], he.prototype, "layerAdapter", null), r([m({ readOnly: true })], he.prototype, "timeExtent", null), r([m()], he.prototype, "updating", void 0), he = r([a2("esri.views.2d.layers.FeatureLayerView2D")], he);
var de = he;

export {
  n14 as n,
  de
};
//# sourceMappingURL=chunk-5XCTXK3E.js.map
