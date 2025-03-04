import {
  b as b2,
  c as c2
} from "./chunk-JUU24EKT.js";
import "./chunk-YOEVVGAF.js";
import "./chunk-KGW5IGJ4.js";
import "./chunk-QUTHUJLU.js";
import "./chunk-L3N7SR24.js";
import "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import {
  c
} from "./chunk-7O4DW2GX.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-XEBZUAYT.js";
import {
  Y
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
  a as a4
} from "./chunk-3ATECVKT.js";
import {
  a as a3
} from "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
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
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  r as r2,
  s as s2
} from "./chunk-6P7HXSJ6.js";
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
import {
  s
} from "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a,
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
  o2 as o
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/analysis/Viewshed.js
var u = class extends S.JSONSupportMixin(a3) {
  constructor(e) {
    super(e), this.observer = null, this.farDistance = 1e3, this.heading = 0, this.tilt = 90, this.horizontalFieldOfView = 45, this.verticalFieldOfView = 45, this.feature = null;
  }
  isValid() {
    return null != this.observer && this.farDistance > 0;
  }
  equals(e) {
    return o(this.observer, e.observer) && this.farDistance === e.farDistance && this.heading === e.heading && this.tilt === e.tilt && this.horizontalFieldOfView === e.horizontalFieldOfView && this.verticalFieldOfView === e.verticalFieldOfView && c2(this.feature, e.feature);
  }
};
r([m({ type: j, json: { write: { isRequired: true } } })], u.prototype, "observer", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0 }, json: { write: { isRequired: true } } })], u.prototype, "farDistance", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((e) => a4.normalize(a(e), void 0, true))], u.prototype, "heading", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "tilt", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 360 }, json: { write: { isRequired: true } } })], u.prototype, "horizontalFieldOfView", void 0), r([m({ type: Number, nonNullable: true, range: { min: 0, max: 180 }, json: { write: { isRequired: true } } })], u.prototype, "verticalFieldOfView", void 0), r([m(b2)], u.prototype, "feature", void 0), r([m({ json: { read: false } })], u.prototype, "isValid", null), u = r([a2("esri.analysis.Viewshed")], u);
var d2 = u;

// node_modules/@arcgis/core/analysis/ViewshedAnalysis.js
var f2 = V.ofType(d2);
var x = class extends c {
  constructor(e) {
    super(e), this.type = "viewshed", this._extent = null;
  }
  initialize() {
    this.addHandles(d(() => this._computeExtent(), (e) => {
      null == e.pending && (this._extent = e.extent);
    }, A));
  }
  get viewsheds() {
    return this._get("viewsheds") || new f2();
  }
  set viewsheds(e) {
    this._set("viewsheds", n(e, this.viewsheds, f2));
  }
  get spatialReference() {
    for (const e of this.viewsheds) if (null != e.observer) return e.observer.spatialReference;
    return null;
  }
  get extent() {
    return this._extent;
  }
  get requiredPropertiesForEditing() {
    return this.viewsheds.items.map(({ observer: e }) => e);
  }
  async waitComputeExtent() {
    const e = this._computeExtent();
    null != e.pending && await e.pending;
  }
  _computeExtent() {
    const { spatialReference: e } = this;
    if (null == e) return { pending: null, extent: null };
    const t2 = this.viewsheds.filter((e2) => null != e2.observer), r4 = t2.map((e2) => e2.observer).toArray(), n2 = Y(r4, e);
    if (null != n2.pending) return { pending: n2.pending, extent: null };
    return { pending: null, extent: n2.geometries.map((e2, r5) => {
      const n3 = t2.at(r5);
      return null != e2 && null != n3 ? this._computeViewshedExtent(this.viewsheds.at(r5), e2) : null;
    }).filter((e2) => null != e2).reduce((e2, t3) => y(e2, t3), null) };
  }
  _computeViewshedExtent(e, t2) {
    const { farDistance: r4, heading: n2, tilt: s3, horizontalFieldOfView: i, verticalFieldOfView: p } = e, { spatialReference: c3 } = t2, u3 = i / 2, m2 = p / 2, h = r4 / c3.metersPerUnit, f3 = [a4.normalize(n2 - u3), n2, a4.normalize(n2 + u3)], x2 = w.fromPoint(t2), y3 = (e2) => {
      const t3 = f3.map((t4) => a4.normalize(t4 - e2));
      if (t3[0] > t3[2] || 360 === i) return h;
      const r5 = t3.map((e3) => Math.abs(e3 > 180 ? 360 - e3 : e3)).reduce((e3, t4) => e3 > t4 ? t4 : e3);
      return r5 > 90 ? 0 : h * Math.cos(s2(r5));
    };
    x2.xmax += y3(90), x2.xmin -= y3(-90), x2.ymax += y3(0), x2.ymin -= y3(180);
    const w3 = t2.z;
    if (null != w3) {
      let e2 = w3, t3 = w3;
      const n3 = s3 - 90, i2 = r2(n3 + m2, -90, 90), o2 = r2(n3 - m2, -90, 90), l = (c3 == null ? void 0 : c3.isGeographic) ? r4 : h;
      e2 += l * g(i2), t3 += l * g(o2);
      const p2 = v(m2) * l, d3 = g(n3) * p2 * (1 - v(u3));
      s3 < 90 && (e2 -= d3), s3 > 90 && (t3 -= d3), x2.zmax = Math.max(e2, w3), x2.zmin = Math.min(t3, w3);
    }
    return x2;
  }
  clear() {
    this.viewsheds.removeAll();
  }
};
function y(e, t2) {
  return null == e ? t2 : null == t2 ? e : e.union(t2);
}
function v(e) {
  return Math.cos(s2(e));
}
function g(e) {
  return Math.sin(s2(e));
}
r([m({ type: ["viewshed"] })], x.prototype, "type", void 0), r([m({ cast: t, type: f2, nonNullable: true })], x.prototype, "viewsheds", null), r([m({ readOnly: true })], x.prototype, "spatialReference", null), r([m()], x.prototype, "_extent", void 0), r([m({ readOnly: true })], x.prototype, "extent", null), r([m({ readOnly: true })], x.prototype, "requiredPropertiesForEditing", null), x = r([a2("esri.analysis.ViewshedAnalysis")], x);
var w2 = x;

// node_modules/@arcgis/core/layers/ViewshedLayer.js
var y2 = class extends b(S2(f)) {
  constructor(e) {
    super(e), this.type = "viewshed", this.operationalLayerType = "ViewshedLayer", this.source = new w2(), this.opacity = 1;
  }
  initialize() {
    this.addHandles(d(() => this.source, (e, r4) => {
      null != r4 && r4.parent === this && (r4.parent = null), null != e && (e.parent = this);
    }, A));
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e) {
    this.source === e && (this.source = new w2());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e) {
    this.source = e;
  }
  get viewsheds() {
    return this.source.viewsheds;
  }
  set viewsheds(e) {
    this.source.viewsheds = e;
  }
  writeViewsheds(e, r4, s3, t2) {
    r4.viewsheds = e.filter((e2) => e2.isValid()).map((e2) => e2.toJSON(t2)).toJSON();
  }
};
r([m({ json: { read: false }, readOnly: true })], y2.prototype, "type", void 0), r([m({ type: ["ViewshedLayer"] })], y2.prototype, "operationalLayerType", void 0), r([m({ type: w2, nonNullable: true })], y2.prototype, "source", void 0), r([m({ readOnly: true })], y2.prototype, "spatialReference", null), r([m({ readOnly: true })], y2.prototype, "fullExtent", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], y2.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], y2.prototype, "listMode", void 0), r([m({ type: V.ofType(d2), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], y2.prototype, "viewsheds", null), r([r3("web-scene", "viewsheds")], y2.prototype, "writeViewsheds", null), y2 = r([a2("esri.layers.ViewshedLayer")], y2);
var u2 = y2;
export {
  u2 as default
};
//# sourceMappingURL=ViewshedLayer-X7AOT4ZO.js.map
