import {
  r as r2
} from "./chunk-B7PLK5RV.js";
import "./chunk-HMX7SZAM.js";
import {
  r as r3
} from "./chunk-XTKG5RRJ.js";
import "./chunk-ABH42FPX.js";
import {
  d
} from "./chunk-FAAI5VMG.js";
import {
  c,
  f
} from "./chunk-6MN3R543.js";
import "./chunk-TY5FDDRF.js";
import {
  l,
  t,
  u as u2
} from "./chunk-7RY52YGU.js";
import "./chunk-NJTJZUTI.js";
import "./chunk-NQPBPVRE.js";
import "./chunk-PFFYYIYN.js";
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
import {
  w
} from "./chunk-UMYFDXOJ.js";
import {
  P
} from "./chunk-67XXGAOA.js";
import "./chunk-4TZUFQZG.js";
import "./chunk-HLOKDQU3.js";
import {
  u
} from "./chunk-2KG6WO5I.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-KWOLBNIK.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-D3HK4ZSW.js";
import "./chunk-AI2O2GKK.js";
import "./chunk-ANGUSND2.js";
import "./chunk-WF2ACUGU.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-JJAT7JGD.js";
import "./chunk-D4CSBMND.js";
import {
  O,
  U
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-STBNLAGT.js";
import "./chunk-QTWG47SG.js";
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
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  x
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
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
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/interactive/snapping/GridSnappingEngine.js
var w2 = class extends g {
  constructor(e) {
    super(e), this.options = null;
  }
  destroy() {
    this._set("options", null);
  }
  get grid() {
    return this.view.grid;
  }
  get effectiveViewRotation() {
    var _a;
    return ((_a = this.grid) == null ? void 0 : _a.rotateWithMap) ? 0 : s(this.view.rotation ?? 0);
  }
  get gridRotation() {
    var _a;
    return s(((_a = this.grid) == null ? void 0 : _a.rotation) ?? 0);
  }
  get gridCenter() {
    var _a;
    const { spatialReference: e, grid: t2 } = this;
    if (!t2 || !e || !U(t2.center.spatialReference, e)) return null;
    try {
      const r4 = O(t2.center, e), i = e.isWrappable && null != ((_a = this.view) == null ? void 0 : _a.center) ? P(r4.x, this.view.center.x, e) : r4.x;
      return f(i, r4.y, r4.z);
    } catch (i) {
      return n.getLogger(this).errorOnce("Grid Snapping - Failed to project grid center.", i), null;
    }
  }
  get offsetScaleFactor() {
    const { pixelsPerStride: e, grid: t2 } = this;
    if (!t2 || !e) return 1;
    const { majorLineInterval: r4, dynamicScaling: i } = t2;
    return r4 < 1 ? null : l(r4, e, i);
  }
  get spatialReference() {
    return this.view.spatialReference;
  }
  get gridMetersPerStride() {
    const { grid: e } = this;
    return e ? x(e.spacing, e.units, "meters") : null;
  }
  get viewMetersPerPixel() {
    const { viewMetersPerSRUnit: e } = this;
    return null == e ? null : e * u(this.view.scale, this.view.spatialReference);
  }
  get viewMetersPerSRUnit() {
    const { spatialReference: e } = this.view;
    return this.gridCenter ? u2(this.gridCenter[0], this.gridCenter[1], e) : null;
  }
  get pixelsPerStride() {
    const { gridMetersPerStride: e, viewMetersPerPixel: t2 } = this;
    return t2 && e ? e / t2 : null;
  }
  get updating() {
    return null != this.grid && null != this.spatialReference && null == this.viewMetersPerSRUnit;
  }
  async fetchCandidates(e, t2, r4) {
    var _a;
    const { options: i, view: n2 } = this;
    if (!(i == null ? void 0 : i.effectiveGridEnabled) || !n2.grid || ((_a = r4.feature) == null ? void 0 : _a.attributes) && d in r4.feature.attributes) return [];
    const o = r4.coordinateHelper.arrayToPoint(e), s2 = i.distance * ("touch" === r4.pointer ? i.touchSensitivityMultiplier : 1);
    return this.fetchCandidatesSync(o, s2);
  }
  fetchCandidatesSync(e, t2) {
    const r4 = [], { grid: i, effectiveViewRotation: n2, gridRotation: o, gridCenter: s2, viewMetersPerPixel: a2, viewMetersPerSRUnit: c2, offsetScaleFactor: u3, spatialReference: g2, gridMetersPerStride: f2, pixelsPerStride: m2 } = this;
    if (!(i && a2 && c2 && s2 && g2 && u3 && f2 && m2)) return r4;
    if (!i.dynamicScaling && m2 < t) return r4;
    if (!U(e.spatialReference, g2)) return r4;
    const S = O(e, g2), w3 = f(S.x, S.y, S.z), x2 = P2(w3, -o, s2, -n2), C = f2 / c2 * u3, U2 = j(x2, C, s2), { shouldSnapX: b, shouldSnapY: L } = R(U2, x2, t2, a2, c2);
    if (!b && !L) return [];
    const z = f((b ? U2 : x2)[0], (L ? U2 : x2)[1]), E = P2(z, o, s2, n2), F = P2(U2, o, s2, n2);
    if (L) {
      const e2 = M(U2, x2, C, "y"), t3 = P2(e2, o, s2, n2);
      r4.push(new r3({ lineStart: F, lineEnd: t3, targetPoint: E, isDraped: false }));
    }
    if (b) {
      const e2 = M(U2, x2, C, "x"), t3 = P2(e2, o, s2, n2);
      r4.push(new r3({ lineStart: F, lineEnd: t3, targetPoint: E, isDraped: false }));
    }
    return b && L && r4.push(new r2(E, r4[0], r4[1], false)), r4;
  }
};
r([m({ constructOnly: true })], w2.prototype, "view", void 0), r([m()], w2.prototype, "options", void 0), r([m()], w2.prototype, "grid", null), r([m()], w2.prototype, "effectiveViewRotation", null), r([m()], w2.prototype, "gridRotation", null), r([m()], w2.prototype, "gridCenter", null), r([m()], w2.prototype, "offsetScaleFactor", null), r([m()], w2.prototype, "spatialReference", null), r([m()], w2.prototype, "gridMetersPerStride", null), r([m()], w2.prototype, "viewMetersPerPixel", null), r([m()], w2.prototype, "viewMetersPerSRUnit", null), r([m()], w2.prototype, "pixelsPerStride", null), r([m()], w2.prototype, "updating", null), w2 = r([a("esri.views.interactive.snapping.GridSnappingEngine")], w2);
var P2 = (e, t2, r4, i) => {
  const n2 = c(e[0], e[1], e[2]);
  return w(n2, w(n2, n2, r4, t2), r4, i);
};
var j = (e, t2, r4) => {
  const i = (e[0] - r4[0]) / t2, n2 = (e[1] - r4[1]) / t2, o = Math.trunc(i), s2 = Math.trunc(n2), a2 = Math.round(i % 1), p = Math.round(n2 % 1), l2 = r4[0] + (o + a2) * t2, c2 = r4[1] + (s2 + p) * t2;
  return f(l2, c2);
};
var R = (e, t2, r4, i, n2) => {
  if (i <= 0) return { shouldSnapX: false, shouldSnapY: false };
  const o = (e[0] - t2[0]) / i, s2 = (e[1] - t2[1]) / i;
  return { shouldSnapX: Math.abs(o * n2) < r4, shouldSnapY: Math.abs(s2 * n2) < r4 };
};
var M = (e, t2, r4, i) => {
  if ("y" === i) {
    const i2 = t2[0] > e[0] ? 1 : -1;
    return f(e[0] + r4 * i2, e[1]);
  }
  const n2 = t2[1] > e[1] ? 1 : -1;
  return f(e[0], e[1] + r4 * n2);
};
export {
  w2 as GridSnappingEngine
};
//# sourceMappingURL=GridSnappingEngine-Z3W4K6A5.js.map
