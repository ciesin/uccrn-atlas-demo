import {
  i as i2,
  o
} from "./chunk-LHGTWVNO.js";
import "./chunk-DVLQPRGL.js";
import "./chunk-QGVT5UOI.js";
import "./chunk-647JB2RE.js";
import {
  t
} from "./chunk-2UBP7L6V.js";
import "./chunk-4BTKBTXL.js";
import "./chunk-ABH42FPX.js";
import {
  y as y2
} from "./chunk-FAAI5VMG.js";
import "./chunk-6MN3R543.js";
import "./chunk-TY5FDDRF.js";
import "./chunk-NJTJZUTI.js";
import {
  i,
  n,
  r as r3
} from "./chunk-B77SQDEC.js";
import "./chunk-NQPBPVRE.js";
import {
  y
} from "./chunk-PFFYYIYN.js";
import "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-3WMBBCKF.js";
import "./chunk-5DJJ57UM.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-KWOLBNIK.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import "./chunk-D3HK4ZSW.js";
import "./chunk-AI2O2GKK.js";
import "./chunk-ANGUSND2.js";
import "./chunk-WF2ACUGU.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  r as r2
} from "./chunk-STBNLAGT.js";
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
import "./chunk-JLFSX3JT.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  P,
  d,
  v
} from "./chunk-YSPSOPLL.js";
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
  h,
  s
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/interactive/snapping/featureSources/FeatureCollectionSnappingSource.js
var f = class extends g {
  get availability() {
    return 1;
  }
  get _snappingElevationAligner() {
    const { view: e } = this, { layer: t2 } = this.layerSource, i3 = null != e && "3d" === e.type;
    if (!i3 || "subtype-group" === t2.type) return i();
    const r4 = async (i4, r5) => (await h(e.whenLayerView(t2), r5)).elevationAlignPointsInFeatures(i4, r5);
    return i(i3, { elevationInfo: t2.elevationInfo, alignPointsInFeatures: r4 });
  }
  get _snappingElevationFilter() {
    const { view: e } = this, t2 = null != e && "3d" === e.type && "subtype-group" !== this.layerSource.layer.type;
    return r3(t2);
  }
  get _symbologySnappingFetcher() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    return null != e && "3d" === e.type && "subtype-group" !== t2.type ? n(this._symbologySnappingSupported, async (i3, n2) => {
      const o2 = await e.whenLayerView(t2);
      return s(n2), o2.queryForSymbologySnapping({ candidates: i3, spatialReference: e.spatialReference }, n2);
    }) : n();
  }
  get _layerView() {
    const { view: e } = this;
    if (null == e) return null;
    const { layer: t2 } = this.layerSource;
    return e.allLayerViews.find((e2) => e2.layer === t2);
  }
  get _layerView3D() {
    const { view: e } = this;
    return null == e || "2d" === e.type ? null : this._layerView;
  }
  get _symbologySnappingSupported() {
    return null != this._layerView3D && this._layerView3D.symbologySnappingSupported;
  }
  initialize() {
    const { view: e } = this, { layer: t2 } = this.layerSource;
    null != e && "3d" === e.type && "subtype-group" !== t2.type && this.addHandles([e.elevationProvider.on("elevation-change", ({ context: e2 }) => {
      const { elevationInfo: i3 } = t2;
      y(e2, i3) && this._snappingElevationAligner.notifyElevationSourceChange();
    }), d(() => t2.elevationInfo, () => this._snappingElevationAligner.notifyElevationSourceChange(), P), d(() => {
      var _a;
      return null != this._layerView3D ? (_a = this._layerView3D.layer) == null ? void 0 : _a.renderer : null;
    }, () => this._symbologySnappingFetcher.notifySymbologyChange(), P), v(() => {
      var _a;
      return (_a = this._layerView3D) == null ? void 0 : _a.layer;
    }, ["edits", "apply-edits", "graphic-update"], () => this._symbologySnappingFetcher.notifySymbologyChange())]);
  }
  constructor(e) {
    super(e), this.view = null, this.updating = false, this._memoizedMakeGetGroundElevation = t(i2);
  }
  refresh() {
  }
  async fetchCandidates(e, t2) {
    var _a, _b;
    const { layer: i3 } = this.layerSource, n2 = i3.source;
    if (!(n2 == null ? void 0 : n2.querySnapping)) return [];
    const o2 = i3.createQuery();
    this._layerView && "effectiveDisplayFilter" in this._layerView && (o2.where = r2(o2.where, (_a = this._layerView.effectiveDisplayFilter) == null ? void 0 : _a.where));
    const a2 = y2(e, ((_b = this.view) == null ? void 0 : _b.type) ?? "2d", o2), s2 = await n2.querySnapping(a2, { signal: t2 });
    s(t2);
    const p = e.coordinateHelper.spatialReference, y3 = await this._snappingElevationAligner.alignCandidates(s2.candidates, p, t2);
    s(t2);
    const c = await this._symbologySnappingFetcher.fetch(y3, t2);
    s(t2);
    const h2 = 0 === c.length ? y3 : [...y3, ...c], m2 = this._snappingElevationFilter.filter(a2, h2), d2 = this._memoizedMakeGetGroundElevation(this.view, p);
    return m2.map((e2) => o(e2, d2));
  }
};
r([m({ constructOnly: true })], f.prototype, "layerSource", void 0), r([m({ constructOnly: true })], f.prototype, "view", void 0), r([m()], f.prototype, "_snappingElevationAligner", null), r([m()], f.prototype, "_snappingElevationFilter", null), r([m()], f.prototype, "_symbologySnappingFetcher", null), r([m()], f.prototype, "_layerView", null), r([m()], f.prototype, "_layerView3D", null), r([m()], f.prototype, "_symbologySnappingSupported", null), f = r([a("esri.views.interactive.snapping.featureSources.FeatureCollectionSnappingSource")], f);
export {
  f as FeatureCollectionSnappingSource
};
//# sourceMappingURL=FeatureCollectionSnappingSource-RBZTVUE2.js.map
