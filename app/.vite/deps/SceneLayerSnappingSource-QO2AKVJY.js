import {
  r as r3
} from "./chunk-DVLQPRGL.js";
import {
  r as r2
} from "./chunk-647JB2RE.js";
import "./chunk-4BTKBTXL.js";
import "./chunk-ABH42FPX.js";
import "./chunk-FAAI5VMG.js";
import {
  a as a3,
  p
} from "./chunk-6MN3R543.js";
import "./chunk-TY5FDDRF.js";
import "./chunk-NJTJZUTI.js";
import {
  t
} from "./chunk-52SUPZC5.js";
import {
  f
} from "./chunk-6S3LK2RR.js";
import "./chunk-3Y5232PZ.js";
import "./chunk-RDFKHZPN.js";
import "./chunk-3VWS6Q3L.js";
import "./chunk-FWGIWKNF.js";
import "./chunk-IR5AHWR5.js";
import "./chunk-NQPBPVRE.js";
import "./chunk-PFFYYIYN.js";
import {
  V
} from "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import "./chunk-ZAYRG6WM.js";
import {
  h
} from "./chunk-PM2PTAZQ.js";
import "./chunk-JQSC2CLC.js";
import "./chunk-J3KMTGEW.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-5LZH2YNQ.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-3WMBBCKF.js";
import "./chunk-5DJJ57UM.js";
import {
  h as h2
} from "./chunk-PV4EUSKO.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-KWOLBNIK.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-D3HK4ZSW.js";
import "./chunk-QM4DRRZI.js";
import "./chunk-LPMFP5XM.js";
import "./chunk-AI2O2GKK.js";
import "./chunk-ANGUSND2.js";
import "./chunk-WF2ACUGU.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-STBNLAGT.js";
import "./chunk-WJGG35K6.js";
import "./chunk-SUVHJC6Z.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
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
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  c2 as c,
  e2 as e,
  i,
  l2 as l,
  s as s2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import {
  G,
  a2 as a,
  s2 as s
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/EdgeWorkerHandle.js
var a4 = class extends h {
  constructor(e2) {
    super("EdgeProcessingWorker", "extract", { extract: (e3) => [e3.dataBuffer], extractComponentsEdgeLocations: (e3) => [e3.dataBuffer], extractEdgeLocations: (e3) => [e3.dataBuffer] }, e2);
  }
  async process(e2, t2, r4) {
    if (r4) return f(e2);
    return i2(await this.invoke(new o(e2), t2));
  }
  async extractEdgeLocations(e2, t2) {
    const r4 = await this.invokeMethod("extractEdgeLocations", new o(e2), t2);
    return t(r4);
  }
  async extractComponentsEdgeLocations(e2, t2) {
    const r4 = await this.invokeMethod("extractComponentsEdgeLocations", new o(e2), t2);
    return t(r4);
  }
};
function i2(e2) {
  return { regular: { instancesData: t(e2.regular.instancesData), lodInfo: { lengths: new Float32Array(e2.regular.lodInfo.lengths) } }, silhouette: { instancesData: t(e2.silhouette.instancesData), lodInfo: { lengths: new Float32Array(e2.silhouette.lodInfo.lengths) } }, averageEdgeLength: e2.averageEdgeLength };
}
var o = class {
  constructor(r4) {
    this.dataBuffer = r4.data.buffer, this.writerSettings = r4.writerSettings, this.skipDeduplicate = r4.skipDeduplicate, this.indices = s(r4.indices) ? r4.indices.buffer : r4.indices, this.indicesType = s(r4.indices) ? a(r4.indices) ? "Uint32Array" : "Uint16Array" : "Array", this.indicesLength = r4.indicesLength;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorkerHandle.js
var l2 = class extends g {
  constructor(e2) {
    super(e2), this.availability = 0, this._ids = /* @__PURE__ */ new Set();
  }
  destroy() {
    this._workerHandle.destroy(), this._workerHandle = null;
  }
  initialize() {
    this._workerHandle = new h3(this.schedule, { fetchAllEdgeLocations: (e2, t2) => this._fetchAllEdgeLocations(e2, t2) });
  }
  async fetchCandidates(e2, t2) {
    const r4 = e2.coordinateHelper, { point: o2 } = e2, s3 = u;
    this.renderCoordsHelper.toRenderCoords(o2, r4.spatialReference, s3);
    const n2 = e2.distance, a5 = "number" == typeof n2 ? n2 : n2.distance, d = await this._workerHandle.invoke({ bounds: V(s3[0], s3[1], s3[2], a5), returnEdge: e2.returnEdge, returnVertex: "none" !== e2.vertexMode }, t2);
    return d.candidates.sort((e3, t3) => e3.distance - t3.distance), d.candidates.map((e3) => this._convertCandidate(r4, e3));
  }
  async add(e2, t2) {
    this._ids.add(e2.id), await this._workerHandle.invokeMethod("add", e2, t2);
  }
  async remove(e2, t2) {
    this._ids.delete(e2.id), await this._workerHandle.invokeMethod("remove", e2, t2);
  }
  _convertCandidate(e2, t2) {
    switch (t2.type) {
      case "edge":
        return new r2({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), edgeStart: this._convertRenderCoordinate(e2, t2.start), edgeEnd: this._convertRenderCoordinate(e2, t2.end), isDraped: false });
      case "vertex":
        return new r3({ objectId: t2.objectId, targetPoint: p(this._convertRenderCoordinate(e2, t2.target)), isDraped: false });
    }
  }
  _convertRenderCoordinate({ spatialReference: e2 }, t2) {
    const r4 = n();
    return this.renderCoordsHelper.fromRenderCoords(t2, r4, e2), a3(r4);
  }
  async _fetchAllEdgeLocations(e2, t2) {
    const r4 = [], o2 = [];
    for (const { id: s3, uid: n2 } of e2.components) this._ids.has(s3) && r4.push((async () => {
      const e3 = await this.fetchEdgeLocations(s3, t2.signal), r5 = e3.locations.buffer;
      return o2.push(r5), { id: s3, uid: n2, objectIds: e3.objectIds, locations: r5, origin: e3.origin, type: e3.type };
    })());
    return { result: { components: (await Promise.all(r4)).filter(({ id: e3 }) => this._ids.has(e3)) }, transferList: o2 };
  }
};
r([m({ constructOnly: true })], l2.prototype, "renderCoordsHelper", void 0), r([m({ constructOnly: true })], l2.prototype, "fetchEdgeLocations", void 0), r([m({ constructOnly: true })], l2.prototype, "schedule", void 0), r([m({ readOnly: true })], l2.prototype, "availability", void 0), l2 = r([a2("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorkerHandle")], l2);
var h3 = class extends h {
  constructor(e2, t2) {
    super("SceneLayerSnappingSourceWorker", "fetchCandidates", {}, e2, { strategy: "dedicated", client: t2 });
  }
};
var u = n();

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/I3SSnappingSource.js
var p2 = class extends g {
  get updating() {
    return this._updatingHandles.updating;
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._updatingHandles = new h2(), this._abortController = new AbortController();
  }
  destroy() {
    this._tracker = l(this._tracker), this._abortController = e(this._abortController), this._updatingHandles.destroy();
  }
  initialize() {
    const { view: e2 } = this, r4 = e2.resourceController;
    this._edgeWorker = new a4(h4(r4)), this._workerHandle = new l2({ renderCoordsHelper: this.view.renderCoordsHelper, schedule: h4(r4), fetchEdgeLocations: async (e3, r5) => {
      if (null == this._tracker) throw new Error("tracker-not-initialized");
      return this._tracker.fetchEdgeLocations(e3, this._edgeWorker, r5);
    } }), this._updatingHandles.addPromise(this._setupLayerView()), this.addHandles([i(this._workerHandle), i(this._edgeWorker)]);
  }
  async fetchCandidates(e2, r4) {
    return this._workerHandle.fetchCandidates(e2, r4);
  }
  refresh() {
  }
  async _setupLayerView() {
    var _a;
    if (this.destroyed) return;
    const e2 = (_a = this._abortController) == null ? void 0 : _a.signal, r4 = await this.getLayerView();
    null == r4 || c(e2) || (this._tracker = r4.trackSnappingSources({ add: (r5, t2) => {
      this._updatingHandles.addPromise(this._workerHandle.add({ id: r5, bounds: t2 }, e2));
    }, remove: (r5) => {
      this._updatingHandles.addPromise(this._workerHandle.remove({ id: r5 }, e2));
    } }));
  }
};
function h4(e2) {
  return (r4) => e2.immediate.schedule(r4);
}
r([m({ constructOnly: true })], p2.prototype, "getLayerView", void 0), r([m({ constructOnly: true })], p2.prototype, "view", void 0), r([m({ readOnly: true })], p2.prototype, "updating", null), r([m({ readOnly: true })], p2.prototype, "availability", void 0), p2 = r([a2("esri.views.interactive.snapping.featureSources.I3SSnappingSource")], p2);

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/SceneLayerSnappingSource.js
var c2 = class extends g {
  get updating() {
    return this._i3sSources.some((e2) => e2.updating);
  }
  constructor(e2) {
    super(e2), this.availability = 1, this._i3sSources = [];
  }
  destroy() {
    this._i3sSources.forEach((e2) => e2.destroy()), this._i3sSources.length = 0;
  }
  initialize() {
    const { view: e2 } = this, r4 = this.layerSource.layer;
    this._i3sSources = "building-scene" === r4.type ? this._getBuildingSceneI3SSources(e2, r4) : [this._getSceneLayerI3SSource(e2, r4)];
  }
  async fetchCandidates(e2, r4) {
    const t2 = await Promise.all(this._i3sSources.map((t3) => t3.fetchCandidates(e2, r4)));
    return s2(r4), t2.flat();
  }
  refresh() {
    this._i3sSources.forEach((e2) => e2.refresh());
  }
  _getBuildingSceneI3SSources(e2, r4) {
    return r4.allSublayers.toArray().map((t2) => "building-component" === t2.type ? new p2({ getLayerView: async () => (await e2.whenLayerView(r4)).whenSublayerView(t2), view: e2 }) : null).filter(G);
  }
  _getSceneLayerI3SSource(e2, r4) {
    return new p2({ getLayerView: async () => {
      const t2 = await e2.whenLayerView(r4);
      return "scene-layer-graphics-3d" === t2.type ? void 0 : t2;
    }, view: e2 });
  }
};
r([m({ constructOnly: true })], c2.prototype, "layerSource", void 0), r([m({ constructOnly: true })], c2.prototype, "view", void 0), r([m({ readOnly: true })], c2.prototype, "updating", null), r([m({ readOnly: true })], c2.prototype, "availability", void 0), c2 = r([a2("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")], c2);
export {
  c2 as SceneLayerSnappingSource
};
//# sourceMappingURL=SceneLayerSnappingSource-QO2AKVJY.js.map
