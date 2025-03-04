import {
  d as d2,
  m as m2,
  n as n2,
  u
} from "./chunk-XEIAE5ZE.js";
import {
  R
} from "./chunk-PFFYYIYN.js";
import {
  h
} from "./chunk-PM2PTAZQ.js";
import "./chunk-KWOLBNIK.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  d
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
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
import "./chunk-L7T5Z7MG.js";
import {
  F
} from "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  b
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/Lyr3DWorkerHandle.js
var s = class extends h {
  constructor(r2) {
    super("Lyr3DWorker", "process", { process: (r3) => r3.inputs }, r2, { hasInitialize: true });
  }
  destroyWasm() {
    return this.broadcast({}, "destroyWasm");
  }
};

// node_modules/@arcgis/core/views/3d/layers/support/makeScheduleFunction.js
function e(e2) {
  return (r2) => {
    if (e2.immediate) return e2.immediate.schedule(r2);
    const o = "No immediate scheduler";
    throw console.error(o), new Error(o);
  };
}

// node_modules/@arcgis/core/layers/Lyr3DWasmPerSceneView.js
var c;
var b2;
!function(e2) {
  e2[e2.Lifetime = 0] = "Lifetime", e2[e2.Jobs = 1] = "Jobs", e2[e2.Renderables = 2] = "Renderables";
}(c || (c = {})), function(e2) {
  e2[e2.Critical = 0] = "Critical", e2[e2.Error = 1] = "Error", e2[e2.Warning = 2] = "Warning", e2[e2.Info = 3] = "Info";
}(b2 || (b2 = {}));
var f = class extends g {
  constructor(e2) {
    super(e2), this._lyr3DMainPromise = null, this._lyr3DMain = null, this._layers = /* @__PURE__ */ new Map(), this._debugFlags = /* @__PURE__ */ new Set(), this._debugLevel = b2.Critical, this._wasmNotLoaded = "method requiring WASM was called when WASM isn't loaded", this._pulseTaskHandle = null, this._session = null, this._debugFlags.add(c.Lifetime), this._debugFlags.add(c.Jobs), this._debugFlags.add(c.Renderables);
  }
  _debugLog(e2, t, i, s2 = true) {
    if (this._debugFlags.has(e2) && this._debugLevel >= t) {
      const e3 = s2 ? `[js] ${i}` : `${i}`;
      t === b2.Critical || t === b2.Error ? n.getLogger(this).error(e3) : t === b2.Warning && n.getLogger(this).warn(e3), n.getLogger(this).info(e3);
    }
  }
  initialize() {
    this._debugLevel > b2.Warning && (n.getLogger(this).level = "info"), this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.initialize()"), this.addHandles([d(() => {
      var _a;
      return (_a = this.view.state) == null ? void 0 : _a.contentCamera;
    }, () => this._updateWasmCamera())]), this._pulseTaskHandle = F({ preRender: () => this._pulseTask() });
  }
  destroy() {
    var _a;
    this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.destroy()"), this._lyr3DMain && (this._layers.forEach((e3) => {
      e3.abortController.abort();
    }), this._lyr3DMain.uninitialize_lyr3d_wasm(), this._lyr3DMain = null);
    const e2 = this._worker;
    e2 && e2.destroyWasm().then(() => {
      var _a2;
      (_a2 = this._worker) == null ? void 0 : _a2.destroy(), this._worker = null;
    }), (_a = this._pulseTaskHandle) == null ? void 0 : _a.remove(), this._pulseTaskHandle = null;
  }
  add3DTilesLayerView(e2) {
    return this._lyr3DMain ? this._add3DTilesLayerView(e2) : (this._debugLog(c.Lifetime, b2.Error, "Lyr3DWasmPerSceneView.add3DTilesLayerView() called when WASM wasn't initialized"), d2);
  }
  remove3DTilesLayerView(e2) {
    if (!this._lyr3DMain) return this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded), 0;
    this._doRemoveLayerView(e2);
    const t = this._layers.size;
    return 0 === t && (this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.remove3DTilesLayerView() no Lyr3D layers left after removing a layer, destroying"), this.destroy()), t;
  }
  setEnabled(e2, t) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    const i = this._layers.get(e2.wasmLayerId);
    i && (this._lyr3DMain.set_enabled(e2.wasmLayerId, t), i.needMemoryUsageUpdate = true, i.needFrame = true, i.layerView.updatingFlagChanged());
  }
  setLayerOffset(e2, t) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    this._layers.get(e2.wasmLayerId) && this._lyr3DMain.set_carto_offset_z(e2.wasmLayerId, t);
  }
  getAttributionText() {
    if (!this._lyr3DMain) return this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded), [];
    return this._lyr3DMain.get_current_attribution_text().split("|");
  }
  onRenderableEvicted(e2, t, i) {
    if (!this._lyr3DMain) return void this._debugLog(c.Lifetime, b2.Error, this._wasmNotLoaded);
    this._layers.get(e2.wasmLayerId) && this._lyr3DMain.on_renderable_evicted(e2.wasmLayerId, t, i);
  }
  isUpdating(e2) {
    if (!this._lyr3DMain && this._lyr3DMainPromise) return true;
    const t = this._layers.get(e2);
    return !!t && (t.outstandingJobCount > 0 || t.outstandingRenderableCount > 0 || t.needFrame);
  }
  initializeWasm(e2, t) {
    return this._lyr3DMain ? Promise.resolve() : (this._debugLog(c.Lifetime, b2.Info, "Lyr3DWasmPerSceneView.initializeWasm()"), this._lyr3DMainPromise || (this._lyr3DMainPromise = n2().then((i) => {
      var _a, _b, _c;
      this._lyr3DMain = i, this._lyr3DMainPromise = null;
      const r2 = this._lyr3DMain.addFunction(this._onNewJob.bind(this), "v"), s2 = this._lyr3DMain.addFunction(this._onNewRenderable.bind(this), "v"), n3 = this._lyr3DMain.addFunction(this._freeRenderables.bind(this), "viii"), a2 = this._lyr3DMain.addFunction(this._setRenderableVisibility.bind(this), "viiii"), o = this._lyr3DMain.addFunction(this._onWasmError.bind(this), "viiii"), l = "global" === this.view.viewingMode, d3 = ((_a = this.view.renderSpatialReference) == null ? void 0 : _a.isWebMercator) ? 3857 : ((_b = this.view.renderSpatialReference) == null ? void 0 : _b.wkid) ?? -1, h2 = (_c = this.view.heightModelInfo) == null ? void 0 : _c.heightModel, _ = !h2 || "gravity-related-height" === h2;
      return this._lyr3DMain.initialize_lyr3d_wasm(o, r2, s2, n3, a2, e2, t, l, _, d3, this._debugLevel) ? (this._worker = new s(e(this.view.resourceController)), this._worker.promise ? this._worker.promise : void 0) : (this._lyr3DMain = null, void this._debugLog(c.Lifetime, b2.Critical, "Lyr3d Main WASM failed to initialize", false));
    }).catch((e3) => {
      this._debugLog(c.Lifetime, b2.Critical, `Lyr3d WASM failed to download error = ${e3}`, false);
    })), this._lyr3DMainPromise);
  }
  _pulseTask() {
    if (this._lyr3DMain) {
      let e2 = 0, t = 0;
      this._layers.forEach((i2) => {
        e2 += i2.layerView.usedMemory, t += i2.layerView.cachedMemory;
      }), e2 /= 1048576, t /= 1048576;
      const i = this.view.resourceController.memoryController, r2 = i.usedMemory * i.maxMemory - e2;
      this._lyr3DMain.frame_pulse(i.memoryFactor, e2, t, r2, i.maxMemory), this._layers.forEach((e3) => {
        true === e3.needFrame && (e3.needFrame = false, e3.layerView.updatingFlagChanged());
      });
    }
  }
  _incrementJobCount(e2) {
    e2.outstandingJobCount += 1, 1 === e2.outstandingJobCount && e2.outstandingRenderableCount < 1 && e2.layerView.updatingFlagChanged();
  }
  _decrementJobCount(e2) {
    e2.outstandingJobCount -= 1, 0 === e2.outstandingJobCount && e2.outstandingRenderableCount < 1 && e2.layerView.updatingFlagChanged();
  }
  _incrementRenderableCount(e2) {
    e2.outstandingRenderableCount += 1, e2.outstandingJobCount < 1 && 1 === e2.outstandingRenderableCount && e2.layerView.updatingFlagChanged();
  }
  _decrementRenderableCount(e2) {
    e2.outstandingRenderableCount -= 1, e2.outstandingJobCount < 1 && 0 === e2.outstandingRenderableCount && e2.layerView.updatingFlagChanged();
  }
  _onJobFailed(e2, t, i) {
    t.error.length && this._debugLog(c.Jobs, b2.Error, t.error, false), this._lyr3DMain && this._lyr3DMain.on_job_failed(i.jobId, i.desc), this._decrementJobCount(e2);
  }
  _onJobSucceeded(e2, t, i) {
    if (this._lyr3DMain) {
      const e3 = t.data.byteLength, r2 = this._lyr3DMain._malloc(e3);
      new Uint8Array(this._lyr3DMain.HEAPU8.buffer, r2, e3).set(t.data), this._lyr3DMain.on_job_completed(i.jobId, t.jobDescJson, r2, e3), this._lyr3DMain._free(r2);
    }
    this._decrementJobCount(e2);
  }
  _getRequestPromises(e2, i, r2) {
    const s2 = [];
    for (const n3 of e2) {
      const e3 = new URL(n3), a2 = e3.searchParams.get("session");
      a2 ? this._session = a2 : !this._session || e3.origin === r2.origin && e3.pathname === r2.pathname || e3.searchParams.append("session", this._session), s2.push(P(e3.toString(), i).then((e4) => e4.data));
    }
    return s2;
  }
  _onNewJob() {
    const e2 = this._lyr3DMain.get_next_job(), t = this._layers.get(e2.layerId);
    if (!t) return;
    this._incrementJobCount(t);
    const i = t.abortController.signal, r2 = { responseType: "array-buffer", signal: i, query: { ...t.customParameters, token: t.apiKey } }, n3 = { inputs: [], jobDescJson: e2.desc, isMissingResourceCase: false }, a2 = new URL(t.layerView.layer.url), o = this._getRequestPromises(e2.urls, r2, a2);
    Promise.all(o).then((e3) => (n3.inputs = e3, this._worker.invoke(n3, i))).then((e3) => e3).catch((t2) => (b(t2) ? this._debugLog(c.Jobs, b2.Warning, `job ${e2.jobId} was cancelled.`) : this._debugLog(c.Jobs, b2.Error, `job ${e2.jobId} failed with error ${t2}.`), { status: u.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [], inputs: [] })).then((o2) => {
      if (o2.status === u.Failed) this._onJobFailed(t, o2, e2);
      else if (o2.status === u.Succeeded) this._onJobSucceeded(t, o2, e2);
      else if (o2.status === u.MissingInputs) {
        const l = this._getRequestPromises(o2.missingInputUrls, r2, a2);
        Promise.all(l).then((e3) => {
          n3.jobDescJson = o2.jobDescJson, o2.originalInputs ? n3.inputs = o2.originalInputs : n3.inputs = [], n3.isMissingResourceCase = true;
          for (const t2 of e3) n3.inputs.push(t2);
          return this._worker.invoke(n3, i);
        }).then((i2) => {
          i2.status === u.Failed ? this._onJobFailed(t, i2, e2) : i2.status === u.Succeeded && this._onJobSucceeded(t, i2, e2);
        }).catch((i2) => {
          this._decrementJobCount(t), b(i2) ? this._debugLog(c.Jobs, b2.Warning, `job ${e2.jobId} was cancelled.`) : this._debugLog(c.Jobs, b2.Error, `job ${e2.jobId} failed with error2 ${i2}.`), this._lyr3DMain && this._lyr3DMain.on_job_failed(e2.jobId, e2.desc);
        });
      }
    });
  }
  _onNewRenderable() {
    const e2 = this._lyr3DMain.get_next_renderable(), t = e2.meshData;
    if (t.data && t.data.byteLength > 0) {
      const e3 = t.data.slice();
      t.data = e3;
    }
    const i = this._layers.get(e2.layerId);
    i && (this._incrementRenderableCount(i), i.layerView.createRenderable(e2).then((t2) => {
      this._lyr3DMain && this._lyr3DMain.on_renderable_created(true, e2.layerId, e2.handle, t2.memUsageBytes), this._decrementRenderableCount(i);
    }).catch((t2) => {
      b(t2) || this._debugLog(c.Renderables, b2.Error, `createRenderable failed with error ${t2}.`), this._lyr3DMain && this._lyr3DMain.on_renderable_created(false, e2.layerId, e2.handle, 0), this._decrementRenderableCount(i);
    }));
  }
  _freeRenderables(e2, t, i) {
    if (i < 1) return;
    const r2 = this._layers.get(e2);
    if (!r2) return;
    const s2 = r2.layerView, n3 = [], a2 = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, i);
    for (let o = 0; o < i; ++o) n3.push(a2[o]);
    for (let o = 0; o < i; ++o) s2.freeRenderable(n3[o]);
  }
  _setRenderableVisibility(e2, t, i, r2) {
    if (r2 < 1) return;
    const s2 = this._layers.get(e2);
    if (!s2) return;
    const n3 = s2.layerView, a2 = [], o = [], l = new Uint32Array(this._lyr3DMain.HEAPU32.buffer, t, r2), d3 = new Uint8Array(this._lyr3DMain.HEAPU8.buffer, i, r2);
    for (let h2 = 0; h2 < r2; ++h2) a2.push(l[h2]), o.push(1 === d3[h2]);
    n3.setRenderableVisibility(a2, o, r2);
  }
  _onWasmError(e2, t, i, r2) {
    this._lyr3DMain && this._debugLog(i, r2, this._lyr3DMain.UTF8ToString(e2, t), false);
  }
  _doRemoveLayerView(e2) {
    const t = this._layers.get(e2.wasmLayerId);
    return !!t && (t.abortController.abort(), this._lyr3DMain.remove_layer(e2.wasmLayerId), this._layers.delete(e2.wasmLayerId), true);
  }
  _add3DTilesLayerView(e2) {
    const t = e2.layer;
    if (!t.url) return m2;
    const i = this._lyr3DMain.get_next_layer_id(), r2 = new AbortController();
    this._layers.set(i, { layerView: e2, abortController: r2, needMemoryUsageUpdate: false, outstandingJobCount: 0, outstandingRenderableCount: 0, customParameters: t.customParameters, apiKey: t.apiKey, needFrame: false });
    const s2 = R(t.elevationInfo);
    return this._lyr3DMain.add_layer(t.url, i, s2) ? (this._updateWasmCamera(), i) : (this._layers.delete(i), m2);
  }
  _updateWasmCamera() {
    var _a;
    const e2 = (_a = this.view.state) == null ? void 0 : _a.contentCamera;
    if (!e2 || !this._lyr3DMain) return;
    const { eye: t, center: i, up: r2, near: s2, far: n3, fovY: a2 } = e2, o = [e2.viewport[2], e2.viewport[3]], l = e2.width / e2.height;
    this._lyr3DMain.set_camera_parameters({ eye: t, center: i, up: r2, near: s2, far: n3, fov: a2, aspectRatio: l, viewport: o });
  }
};
r([m({ constructOnly: true })], f.prototype, "view", void 0), f = r([a("esri.layers.Lyr3DWasmPerSceneView")], f);
var w = f;
export {
  w as default
};
//# sourceMappingURL=Lyr3DWasmPerSceneView-6SBV7K2Y.js.map
