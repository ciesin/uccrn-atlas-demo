import {
  b as b2
} from "./chunk-ET4BF57A.js";
import {
  m
} from "./chunk-6S3LK2RR.js";
import "./chunk-3Y5232PZ.js";
import "./chunk-RDFKHZPN.js";
import "./chunk-3VWS6Q3L.js";
import "./chunk-FWGIWKNF.js";
import "./chunk-IR5AHWR5.js";
import {
  b,
  j,
  v
} from "./chunk-L3N7SR24.js";
import {
  E,
  U,
  it
} from "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import "./chunk-ZAYRG6WM.js";
import "./chunk-JQSC2CLC.js";
import "./chunk-J3KMTGEW.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-5LZH2YNQ.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import {
  p,
  q,
  u
} from "./chunk-UMYFDXOJ.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import {
  n,
  t
} from "./chunk-JLFSX3JT.js";
import "./chunk-6P7HXSJ6.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  s
} from "./chunk-M6FNW7GP.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/sceneLayerSnappingUtils.js
var t2 = 1e3;
function a2(t3, a3, e) {
  const m2 = E(), p2 = U(m2);
  return q(p2, p2, t3, 0.5), q(p2, p2, a3, 0.5), m2[3] = p(p2, t3), u(p2, p2, e), m2;
}

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/sceneLayerSource/SceneLayerSnappingSourceWorker.js
var f = class {
  constructor() {
    this._idToComponent = /* @__PURE__ */ new Map(), this._components = new b2((e) => e.bounds), this._edges = new b2((e) => e.bounds), this._tmpLineSegment = v(), this._tmpP1 = n(), this._tmpP2 = n(), this._tmpP3 = n(), this.remoteClient = null;
  }
  async fetchCandidates(e, o) {
    await Promise.resolve(), s(o), await this._ensureEdgeLocations(e, o);
    const s2 = [];
    return this._edges.forEachNeighbor((t3) => (this._addCandidates(e, t3, s2), s2.length < t2), e.bounds), { result: { candidates: s2 } };
  }
  async _ensureEdgeLocations(e, t3) {
    const o = [];
    if (this._components.forEachNeighbor((e2) => {
      if (null == e2.info) {
        const { id: t4, uid: s3 } = e2;
        o.push({ id: t4, uid: s3 });
      }
      return true;
    }, e.bounds), !o.length) return;
    const s2 = { components: o }, n2 = await this.remoteClient.invoke("fetchAllEdgeLocations", s2, t3 ?? {});
    for (const i of n2.components) this._setFetchEdgeLocations(i);
  }
  async add(e) {
    const t3 = new j2(e.id, e.bounds);
    return this._idToComponent.set(t3.id, t3), this._components.add([t3]), { result: {} };
  }
  async remove(e) {
    const t3 = this._idToComponent.get(e.id);
    if (t3) {
      const e2 = [];
      this._edges.forEachNeighbor((o) => (o.component === t3 && e2.push(o), true), t3.bounds), this._edges.remove(e2), this._components.remove([t3]), this._idToComponent.delete(t3.id);
    }
    return { result: {} };
  }
  _setFetchEdgeLocations(e) {
    const t3 = this._idToComponent.get(e.id);
    if (null == t3 || e.uid !== t3.uid) return;
    const o = m.createView(e.locations), s2 = new Array(o.count), n2 = n(), r2 = n();
    for (let i = 0; i < o.count; i++) {
      o.position0.getVec(i, n2), o.position1.getVec(i, r2);
      const c2 = a2(n2, r2, e.origin), d2 = new w(t3, i, c2);
      s2[i] = d2;
    }
    this._edges.add(s2);
    const { objectIds: c, origin: d } = e;
    t3.info = { locations: o, objectIds: c, origin: d };
  }
  _addCandidates(e, t3, o) {
    const { info: n2 } = t3.component, { origin: i, objectIds: r2 } = n2, c = n2.locations, d = c.position0.getVec(t3.index, this._tmpP1), a3 = c.position1.getVec(t3.index, this._tmpP2);
    u(d, d, i), u(a3, a3, i);
    const p2 = r2[c.componentIndex.get(t3.index)];
    this._addEdgeCandidate(e, p2, d, a3, o), b3(e, p2, d, o), b3(e, p2, a3, o);
  }
  _addEdgeCandidate(e, t3, o, s2, i) {
    if (!e.returnEdge) return;
    const c = U(e.bounds), u2 = b(o, s2, this._tmpLineSegment), h = j(u2, c, this._tmpP3);
    it(e.bounds, h) && i.push({ type: "edge", objectId: t3, target: t(h), distance: p(c, h), start: t(o), end: t(s2) });
  }
};
f = r([a("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")], f);
var _ = f;
function b3(e, t3, o, s2) {
  if (!e.returnVertex || !it(e.bounds, o)) return;
  const i = U(e.bounds);
  s2.push({ type: "vertex", objectId: t3, target: t(o), distance: p(i, o) });
}
var j2 = class _j {
  constructor(e, t3) {
    this.id = e, this.bounds = t3, this.info = null, this.uid = ++_j.uid;
  }
};
j2.uid = 0;
var w = class {
  constructor(e, t3, o) {
    this.component = e, this.index = t3, this.bounds = o;
  }
};
export {
  _ as default
};
//# sourceMappingURL=SceneLayerSnappingSourceWorker-Y3UQGFXC.js.map
