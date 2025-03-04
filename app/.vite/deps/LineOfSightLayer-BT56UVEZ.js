import {
  b as b2,
  c as c3
} from "./chunk-JUU24EKT.js";
import "./chunk-YOEVVGAF.js";
import "./chunk-KGW5IGJ4.js";
import {
  v
} from "./chunk-FSXB4GOR.js";
import "./chunk-IN4KKF4A.js";
import "./chunk-QUTHUJLU.js";
import "./chunk-L3N7SR24.js";
import {
  i
} from "./chunk-PFFYYIYN.js";
import "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import {
  c as c2
} from "./chunk-7O4DW2GX.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-JOUVYFAY.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import {
  h
} from "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import {
  a2 as a3,
  c,
  l
} from "./chunk-XEBZUAYT.js";
import {
  X
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import {
  n,
  t
} from "./chunk-MLOZK7WX.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  A,
  d
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
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
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  o2 as o
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisObserver.js
var f2 = class extends S.JSONSupportMixin(a2.ClonableMixin(g)) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c3(this.feature, o2.feature);
  }
};
r([m({ type: j, json: { write: { isRequired: true } } })], f2.prototype, "position", void 0), r([m({ type: h }), v()], f2.prototype, "elevationInfo", void 0), r([m(b2)], f2.prototype, "feature", void 0), f2 = r([a("esri.analysis.LineOfSightAnalysisObserver")], f2);
var u = f2;

// node_modules/@arcgis/core/analysis/LineOfSightAnalysisTarget.js
var l2 = class extends S.JSONSupportMixin(a2) {
  constructor(o2) {
    super(o2), this.position = null, this.elevationInfo = null, this.feature = null;
  }
  equals(o2) {
    return o(this.position, o2.position) && o(this.elevationInfo, o2.elevationInfo) && c3(this.feature, o2.feature);
  }
};
r([m({ type: j, json: { write: true, origins: { "web-scene": { write: { isRequired: true } } } } }), v()], l2.prototype, "position", void 0), r([m({ type: h }), v()], l2.prototype, "elevationInfo", void 0), r([m(b2)], l2.prototype, "feature", void 0), l2 = r([a("esri.analysis.LineOfSightAnalysisTarget")], l2);
var f3 = l2;

// node_modules/@arcgis/core/analysis/LineOfSightAnalysis.js
var y = V.ofType(f3);
var d2 = class extends c2 {
  constructor(t2) {
    super(t2), this.type = "line-of-sight", this.observer = null, this.extent = null;
  }
  initialize() {
    this.addHandles(d(() => this._computeExtent(), (t2) => {
      null == (t2 == null ? void 0 : t2.pending) && this._set("extent", null != t2 ? t2.extent : null);
    }, A));
  }
  get targets() {
    return this._get("targets") || new y();
  }
  set targets(t2) {
    this._set("targets", n(t2, this.targets, y));
  }
  get spatialReference() {
    var _a;
    return null != ((_a = this.observer) == null ? void 0 : _a.position) ? this.observer.position.spatialReference : null;
  }
  get requiredPropertiesForEditing() {
    var _a;
    return [(_a = this.observer) == null ? void 0 : _a.position];
  }
  async waitComputeExtent() {
    const t2 = this._computeExtent();
    return null != t2 ? t2.pending : Promise.resolve();
  }
  _computeExtent() {
    var _a;
    const t2 = this.spatialReference;
    if (null == ((_a = this.observer) == null ? void 0 : _a.position) || null == t2) return null;
    const e = (t3) => "absolute-height" === i(t3.position, t3.elevationInfo), o2 = this.observer.position, r2 = a3(o2.x, o2.y, o2.z, o2.x, o2.y, o2.z);
    for (const i2 of this.targets) if (null != i2.position) {
      const e2 = X(i2.position, t2);
      if (null != e2.pending) return { pending: e2.pending, extent: null };
      if (null != e2.geometry) {
        const { x: t3, y: o3, z: s2 } = e2.geometry;
        l(r2, [t3, o3, s2]);
      }
    }
    const s = c(r2, t2);
    return e(this.observer) && this.targets.every(e) || (s.zmin = void 0, s.zmax = void 0), { pending: null, extent: s };
  }
  clear() {
    this.observer = null, this.targets.removeAll();
  }
};
r([m({ type: ["line-of-sight"] })], d2.prototype, "type", void 0), r([m({ type: u, json: { read: true, write: true } })], d2.prototype, "observer", void 0), r([m({ cast: t, type: y, nonNullable: true, json: { read: true, write: true } })], d2.prototype, "targets", null), r([m({ value: null, readOnly: true })], d2.prototype, "extent", void 0), r([m({ readOnly: true })], d2.prototype, "spatialReference", null), r([m({ readOnly: true })], d2.prototype, "requiredPropertiesForEditing", null), d2 = r([a("esri.analysis.LineOfSightAnalysis")], d2);
var v2 = d2;

// node_modules/@arcgis/core/layers/LineOfSightLayer.js
var u2 = V.ofType(f3);
var d3 = class extends b(S2(f)) {
  constructor(e) {
    super(e), this.type = "line-of-sight", this.operationalLayerType = "LineOfSightLayer", this.analysis = new v2(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d(() => this.analysis, (e, t2) => {
      null != t2 && t2.parent === this && (t2.parent = null), null != e && (e.parent = this);
    }, A));
  }
  async load() {
    return null != this.analysis && this.addResolvingPromise(this.analysis.waitComputeExtent()), this;
  }
  get observer() {
    var _a;
    return (_a = this.analysis) == null ? void 0 : _a.observer;
  }
  set observer(e) {
    const { analysis: t2 } = this;
    t2 && (t2.observer = e);
  }
  get targets() {
    return null != this.analysis ? this.analysis.targets : new V();
  }
  set targets(e) {
    var _a;
    n(e, (_a = this.analysis) == null ? void 0 : _a.targets);
  }
  get fullExtent() {
    return null != this.analysis ? this.analysis.extent : null;
  }
  get spatialReference() {
    return null != this.analysis ? this.analysis.spatialReference : null;
  }
  releaseAnalysis(e) {
    this.analysis === e && (this.analysis = new v2());
  }
};
r([m({ json: { read: false }, readOnly: true })], d3.prototype, "type", void 0), r([m({ type: ["LineOfSightLayer"] })], d3.prototype, "operationalLayerType", void 0), r([m({ type: u, json: { read: true, write: { isRequired: true, ignoreOrigin: true } } })], d3.prototype, "observer", null), r([m({ type: u2, json: { read: true, write: { ignoreOrigin: true, isRequired: true } } })], d3.prototype, "targets", null), r([m({ type: v2, nonNullable: true, json: { read: false, write: false } })], d3.prototype, "analysis", void 0), r([m({ readOnly: true })], d3.prototype, "fullExtent", null), r([m({ readOnly: true })], d3.prototype, "spatialReference", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], d3.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], d3.prototype, "listMode", void 0), d3 = r([a("esri.layers.LineOfSightLayer")], d3);
var m2 = d3;
export {
  m2 as default
};
//# sourceMappingURL=LineOfSightLayer-BT56UVEZ.js.map
