import {
  c
} from "./chunk-7O4DW2GX.js";
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
  h
} from "./chunk-3UHB6K6P.js";
import {
  n,
  t
} from "./chunk-MLOZK7WX.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-K2PILHWE.js";
import {
  e,
  o
} from "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
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
  r as r2
} from "./chunk-RDUV6YP6.js";
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
  a3 as a2,
  x
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
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/analysis/DimensionSimpleStyle.js
var c2 = class extends S.JSONSupportMixin(a3) {
  constructor(o2) {
    super(o2), this.type = "simple", this.color = new h("black"), this.lineSize = 2, this.fontSize = 10, this.textColor = new h("black"), this.textBackgroundColor = new h([255, 255, 255, 0.6]);
  }
};
r([m({ type: ["simple"], readOnly: true, json: { write: { isRequired: true } } })], c2.prototype, "type", void 0), r([m({ type: h, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], c2.prototype, "color", void 0), r([m({ type: Number, cast: o, nonNullable: true, range: { min: e(1) }, json: { write: { isRequired: true } } })], c2.prototype, "lineSize", void 0), r([m({ type: Number, cast: o, nonNullable: true, json: { write: { isRequired: true } } })], c2.prototype, "fontSize", void 0), r([m({ type: h, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], c2.prototype, "textColor", void 0), r([m({ type: h, nonNullable: true, json: { type: [x], write: { isRequired: true } } })], c2.prototype, "textBackgroundColor", void 0), c2 = r([a2("esri.analysis.DimensionSimpleStyle")], c2);
var a5 = c2;

// node_modules/@arcgis/core/analysis/dimensionUtils.js
var t2;
!function(t3) {
  t3.Horizontal = "horizontal", t3.Vertical = "vertical", t3.Direct = "direct";
}(t2 || (t2 = {}));
var r3 = [t2.Horizontal, t2.Vertical, t2.Direct];

// node_modules/@arcgis/core/analysis/LengthDimension.js
var l = class extends S.JSONSupportMixin(a3) {
  constructor(o2) {
    super(o2), this.type = "length", this.startPoint = null, this.endPoint = null, this.measureType = t2.Direct, this.offset = 0, this.orientation = 0;
  }
};
r([m({ type: ["length"], json: { write: { isRequired: true } } })], l.prototype, "type", void 0), r([m({ type: j, json: { write: { isRequired: true } } })], l.prototype, "startPoint", void 0), r([m({ type: j, json: { write: { isRequired: true } } })], l.prototype, "endPoint", void 0), r([m({ type: r3, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "measureType", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } })], l.prototype, "offset", void 0), r([m({ type: Number, nonNullable: true, json: { write: { isRequired: true } } }), s((o2) => a4.normalize(a(o2), 0, true))], l.prototype, "orientation", void 0), l = r([a2("esri.analysis.LengthDimension")], l);
var u = l;

// node_modules/@arcgis/core/analysis/DimensionAnalysis.js
var d2 = V.ofType(u);
var f2 = class extends c {
  constructor(e2) {
    super(e2), this.type = "dimension", this.style = new a5(), this.extent = null;
  }
  initialize() {
    this.addHandles(d(() => this._computeExtent(), (e2) => {
      null == (e2 == null ? void 0 : e2.pending) && this._set("extent", null != e2 ? e2.extent : null);
    }, A));
  }
  get dimensions() {
    return this._get("dimensions") || new d2();
  }
  set dimensions(e2) {
    this._set("dimensions", n(e2, this.dimensions, d2));
  }
  get spatialReference() {
    for (const e2 of this.dimensions) {
      if (null != e2.startPoint) return e2.startPoint.spatialReference;
      if (null != e2.endPoint) return e2.endPoint.spatialReference;
    }
    return null;
  }
  get requiredPropertiesForEditing() {
    return this.dimensions.reduce((e2, t3) => (e2.push(t3.startPoint, t3.endPoint), e2), []);
  }
  async waitComputeExtent() {
    const e2 = this._computeExtent();
    return null != e2 ? e2.pending : Promise.resolve();
  }
  _computeExtent() {
    const e2 = this.spatialReference;
    if (null == e2) return { pending: null, extent: null };
    const t3 = [];
    for (const s2 of this.dimensions) null != s2.startPoint && t3.push(s2.startPoint), null != s2.endPoint && t3.push(s2.endPoint);
    const n2 = Y(t3, e2);
    if (null != n2.pending) return { pending: n2.pending, extent: null };
    let o2 = null;
    return null != n2.geometries && (o2 = n2.geometries.reduce((e3, t4) => null == e3 ? null != t4 ? w.fromPoint(t4) : null : null != t4 ? e3.union(w.fromPoint(t4)) : e3, null)), { pending: null, extent: o2 };
  }
  clear() {
    this.dimensions.removeAll();
  }
};
r([m({ type: ["dimension"] })], f2.prototype, "type", void 0), r([m({ cast: t, type: d2, nonNullable: true })], f2.prototype, "dimensions", null), r([m({ readOnly: true })], f2.prototype, "spatialReference", null), r([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, nonNullable: true })], f2.prototype, "style", void 0), r([m({ value: null, readOnly: true })], f2.prototype, "extent", void 0), r([m({ readOnly: true })], f2.prototype, "requiredPropertiesForEditing", null), f2 = r([a2("esri.analysis.DimensionAnalysis")], f2);
var y = f2;

// node_modules/@arcgis/core/layers/DimensionLayer.js
var u2 = class extends b(S2(f)) {
  constructor(e2) {
    if (super(e2), this.type = "dimension", this.operationalLayerType = "ArcGISDimensionLayer", this.source = new y(), this.opacity = 1, e2) {
      const { source: s2, style: t3 } = e2;
      s2 && t3 && (s2.style = t3);
    }
  }
  initialize() {
    this.addHandles([d(() => this.source, (e2, s2) => {
      null != s2 && s2.parent === this && (s2.parent = null), null != e2 && (e2.parent = this);
    }, A)]);
  }
  async load() {
    return this.addResolvingPromise(this.source.waitComputeExtent()), this;
  }
  get spatialReference() {
    return this.source.spatialReference;
  }
  get style() {
    return this.source.style;
  }
  set style(e2) {
    this.source.style = e2;
  }
  get fullExtent() {
    return this.source.extent;
  }
  releaseAnalysis(e2) {
    this.source === e2 && (this.source = new y());
  }
  get analysis() {
    return this.source;
  }
  set analysis(e2) {
    this.source = e2;
  }
  get dimensions() {
    return this.source.dimensions;
  }
  set dimensions(e2) {
    this.source.dimensions = e2;
  }
  writeDimensions(e2, s2, t3, r4) {
    s2.dimensions = e2.filter(({ startPoint: e3, endPoint: s3 }) => null != e3 && null != s3).map((e3) => e3.toJSON(r4)).toJSON();
  }
};
r([m({ json: { read: false }, readOnly: true })], u2.prototype, "type", void 0), r([m({ type: ["ArcGISDimensionLayer"] })], u2.prototype, "operationalLayerType", void 0), r([m({ nonNullable: true })], u2.prototype, "source", void 0), r([m({ readOnly: true })], u2.prototype, "spatialReference", null), r([m({ types: { key: "type", base: null, typeMap: { simple: a5 } }, json: { write: { ignoreOrigin: true } } })], u2.prototype, "style", null), r([m({ readOnly: true })], u2.prototype, "fullExtent", null), r([m({ readOnly: true, json: { read: false, write: false, origins: { service: { read: false, write: false }, "portal-item": { read: false, write: false }, "web-document": { read: false, write: false } } } })], u2.prototype, "opacity", void 0), r([m({ type: ["show", "hide"] })], u2.prototype, "listMode", void 0), r([m({ type: V.ofType(u), json: { write: { ignoreOrigin: true }, origins: { "web-scene": { write: { ignoreOrigin: true } } } } })], u2.prototype, "dimensions", null), r([r2("web-scene", "dimensions")], u2.prototype, "writeDimensions", null), u2 = r([a2("esri.layers.DimensionLayer")], u2);
var d3 = u2;
export {
  d3 as default
};
//# sourceMappingURL=DimensionLayer-EZPXOMIY.js.map
