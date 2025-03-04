import {
  g as g2,
  g2 as g3
} from "./chunk-4N7Q3WXD.js";
import {
  n as n3,
  o as o3,
  p as p4,
  s as s3
} from "./chunk-2NDSQOEM.js";
import "./chunk-3YJXAYA4.js";
import {
  p as p3
} from "./chunk-U4J3KS6Z.js";
import {
  u
} from "./chunk-UCWGKGC3.js";
import {
  M,
  y
} from "./chunk-JUMO2VIG.js";
import "./chunk-NWL5O6MC.js";
import {
  r as r3
} from "./chunk-XTKG5RRJ.js";
import "./chunk-ABH42FPX.js";
import {
  E as E2,
  Et,
  J,
  j as j4,
  u as u2
} from "./chunk-FAAI5VMG.js";
import {
  E2 as E,
  I,
  N,
  N2,
  a as a2,
  d as d2,
  j as j3,
  p as p2,
  s as s2
} from "./chunk-6MN3R543.js";
import "./chunk-TY5FDDRF.js";
import "./chunk-NJTJZUTI.js";
import {
  f,
  o as o2
} from "./chunk-DMO5AKFB.js";
import "./chunk-S4ARCHTK.js";
import "./chunk-GTKHPYCP.js";
import "./chunk-NQPBPVRE.js";
import {
  j as j2
} from "./chunk-PFFYYIYN.js";
import "./chunk-WAKNRSGF.js";
import "./chunk-NATJDMSF.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-CVKVLVEF.js";
import "./chunk-B7NCVJDB.js";
import "./chunk-56GFF6UO.js";
import "./chunk-3WMBBCKF.js";
import "./chunk-5DJJ57UM.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import {
  _,
  b,
  d,
  e,
  j,
  m as m2,
  p
} from "./chunk-K35H6D4D.js";
import {
  c,
  o,
  q
} from "./chunk-UMYFDXOJ.js";
import "./chunk-HLOKDQU3.js";
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
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-STBNLAGT.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-SUVHJC6Z.js";
import {
  r as r2,
  s
} from "./chunk-3ATECVKT.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
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
import {
  Q
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
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
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/interactive/snapping/SnappingAlgorithm.js
var l = class {
  constructor(e2, t) {
    this.view = e2, this.options = t, this.squaredShortLineThreshold = p3.shortLineThreshold * p3.shortLineThreshold;
  }
  snap(e2, t) {
    return null != t.vertexHandle ? "vertex" !== t.vertexHandle.type ? [] : this.snapExistingVertex(e2, t) : this.snapNewVertex(e2, t);
  }
  edgeExceedsShortLineThreshold(e2, t) {
    return this.exceedsShortLineThreshold(N(e2.leftVertex.pos, this.view, t), N(e2.rightVertex.pos, this.view, t), t);
  }
  exceedsShortLineThreshold(e2, t, { spatialReference: s4 }) {
    return 0 === this.squaredShortLineThreshold || u2(s3(t, s4, j2, this.view), s3(e2, s4, j2, this.view)) > this.squaredShortLineThreshold;
  }
  isVertical(r4, s4, { spatialReference: h3 }) {
    const n4 = Q(h3);
    return m2(s2(r4), s2(s4)) * n4 < p3.verticalLineThresholdMeters;
  }
  squaredProximityThreshold(e2) {
    return "touch" === e2 ? this._squaredTouchProximityThreshold : this._squaredMouseProximityThreshold;
  }
  get _squaredMouseProximityThreshold() {
    return this.options.distance * this.options.distance;
  }
  get _squaredTouchProximityThreshold() {
    const { distance: e2, touchSensitivityMultiplier: t } = this.options, r4 = e2 * t;
    return r4 * r4;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/LineSnapper.js
var E3 = class extends l {
  snapNewVertex(e2, t) {
    const r4 = t.editGeometryOperations.data.components[0], s4 = r4.edges.length, o4 = [];
    if (s4 < 1) return o4;
    const { spatialReference: n4 } = t, a3 = s3(e2, n4, j2, this.view), { view: p5 } = this, d3 = r4.edges[s4 - 1];
    let h3 = d3;
    do {
      if (this.edgeExceedsShortLineThreshold(h3, t)) {
        const r5 = j4(h3, p5, t);
        this._processCandidateProposal(r5.left, r5.right, e2, a3, t, o4);
      }
      h3 = h3.leftVertex.leftEdge;
    } while (h3 && h3 !== d3);
    return o4;
  }
  snapExistingVertex(e2, t) {
    const r4 = [], s4 = t.vertexHandle, o4 = s4.component;
    if (o4.edges.length < 2) return r4;
    const { view: a3 } = this, { spatialReference: p5 } = t, d3 = s3(e2, p5, j2, a3), h3 = s4.leftEdge, c2 = s4.rightEdge;
    h3 && c2 && this.edgeExceedsShortLineThreshold(h3, t) && this.edgeExceedsShortLineThreshold(c2, t) && this._processCandidateProposal(N(h3.leftVertex.pos, a3, t), N(c2.rightVertex.pos, a3, t), e2, d3, t, r4);
    const g4 = o4.edges[0];
    let m4 = g4;
    do {
      if (m4 !== s4.leftEdge && m4 !== s4.rightEdge && this.edgeExceedsShortLineThreshold(m4, t)) {
        const s5 = j4(m4, a3, t);
        this._processCandidateProposal(s5.left, s5.right, e2, d3, t, r4);
      }
      m4 = m4.rightVertex.rightEdge;
    } while (m4 && m4 !== g4);
    return r4;
  }
  _processCandidateProposal(e2, t, r4, s4, n4, d3) {
    var _a;
    const { spatialReference: l2, pointer: g4 } = n4, m4 = n();
    v(m4, e2, t, r4, n4);
    const u4 = p2(a2(m4));
    u2(s4, s3(u4, l2, j2, this.view)) < this.squaredProximityThreshold(g4) && d3.push(new r3({ lineStart: e2, lineEnd: t, targetPoint: u4, isDraped: "on-the-ground" === ((_a = n4.elevationInfo) == null ? void 0 : _a.mode) }));
  }
};
function v(e2, t, r4, s4, o4) {
  w(e2, t, r4, s4, o4) || P(e2, s4, t, r4);
}
function w(o4, i, n4, a3, { spatialReference: p5 }) {
  const d3 = y(i, n4, p5, p5);
  if (null == d3) return false;
  const l2 = y(n4, a3, p5, p5);
  if (null == l2) return false;
  const h3 = u(n4, a3, p5);
  if (null == h3) return false;
  const c2 = Math.abs(s.shortestSignedDiff(d3, l2)) > Math.PI / 2 ? r2.normalize(d3 + Math.PI) : d3;
  return M(o4, n4, p5, f(h3, "meters"), o2(c2, "radians", "geographic"), "geodesic"), o4[2] = a3[2], true;
}
function P(e2, t, r4, s4) {
  J(t, { start: r4, end: s4, type: j3.LINE }, e2), e2[2] = t[2];
}

// node_modules/@arcgis/core/views/interactive/snapping/ParallelLineSnapper.js
var f2 = class extends l {
  snapNewVertex(e2, t) {
    const s4 = t.editGeometryOperations.data.components[0], o4 = s4.edges.length, n4 = s4.vertices.length, l2 = [];
    if (o4 < 2) return l2;
    const { view: a3 } = this, h3 = s3(e2, t.spatialReference, j2, a3), d3 = N(s4.vertices[n4 - 1].pos, a3, t), g4 = N(s4.vertices[0].pos, a3, t), f4 = s4.edges[o4 - 1];
    let m4 = f4;
    do {
      if (this.edgeExceedsShortLineThreshold(m4, t)) {
        const r4 = j4(m4, a3, t);
        this._checkEdgeForParallelLines(r4, d3, e2, h3, t, l2), this._checkEdgeForParallelLines(r4, g4, e2, h3, t, l2);
      }
      m4 = m4.leftVertex.leftEdge;
    } while (m4 && m4 !== f4);
    return l2;
  }
  snapExistingVertex(e2, t) {
    const s4 = [], o4 = t.vertexHandle, n4 = o4.component;
    if (n4.edges.length < 3) return s4;
    const { view: l2 } = this, a3 = s3(e2, t.spatialReference, j2, l2), h3 = o4.leftEdge, d3 = o4.rightEdge, g4 = n4.vertices[0], f4 = N(g4.pos, l2, t), m4 = n4.vertices.length, u4 = n4.vertices[m4 - 1], v2 = N(u4.pos, l2, t), x = n4.edges[0];
    let E4 = x;
    do {
      if (E4 !== h3 && E4 !== d3 && this.edgeExceedsShortLineThreshold(E4, t)) {
        const r4 = j4(E4, l2, t);
        h3 && this._checkEdgeForParallelLines(r4, N(h3.leftVertex.pos, l2, t), e2, a3, t, s4), d3 && this._checkEdgeForParallelLines(r4, N(d3.rightVertex.pos, l2, t), e2, a3, t, s4), o4 === g4 ? this._checkEdgeForParallelLines(r4, v2, e2, a3, t, s4) : o4 === u4 && this._checkEdgeForParallelLines(r4, f4, e2, a3, t, s4);
      }
      E4 = E4.rightVertex.rightEdge;
    } while (E4 && E4 !== x);
    return s4;
  }
  _checkEdgeForParallelLines(t, i, a3, c2, f4, v2) {
    var _a;
    const x = t.left, E4 = t.right;
    if (I(u3, s2(i), s2(x), s2(E4)), b(u3, s2(i)) < p3.parallelLineThreshold) return;
    I(u3, s2(a3), s2(x), s2(E4), s2(i));
    const { spatialReference: L, pointer: P3 } = f4, j5 = p2(d2(u3[0], u3[1], a3[2]));
    if (u2(c2, s3(j5, L, j2, this.view)) < this.squaredProximityThreshold(P3)) {
      if (this.isVertical(j5, i, f4) || this.isVertical(x, E4, f4)) return;
      if (m3(t, v2)) return;
      v2.push(new g2({ referenceLine: t, lineStart: i, targetPoint: j5, isDraped: "on-the-ground" === ((_a = f4.elevationInfo) == null ? void 0 : _a.mode) }));
    }
  }
};
function m3(t, r4) {
  const i = t.left, o4 = t.right;
  for (const n4 of r4) if (I(u3, s2(o4), s2(n4.constraint.start), s2(n4.constraint.end), s2(i)), b(u3, s2(o4)) < p3.parallelLineThreshold) return n4.addReferenceLine(t), true;
  return false;
}
var u3 = n2();

// node_modules/@arcgis/core/views/interactive/snapping/RightAngleSnapper.js
var R = class extends l {
  snapNewVertex(e2, t) {
    const r4 = t.editGeometryOperations.data.components[0], i = [];
    if (r4.vertices.length < 2) return i;
    const { view: n4 } = this, s4 = s3(e2, t.spatialReference, j2, n4), o4 = r4.vertices.at(-1);
    this._checkForSnappingCandidate(p4.LastVertex, i, o4.leftEdge, o4, o4.leftEdge.leftVertex, e2, s4, t);
    const a3 = r4.vertices[0];
    return this._checkForSnappingCandidate(p4.FirstVertex, i, a3.rightEdge, a3, a3.rightEdge.rightVertex, e2, s4, t), i;
  }
  snapExistingVertex(e2, t) {
    const r4 = [], i = t.vertexHandle;
    if (i.component.vertices.length < 3) return r4;
    const { view: n4 } = this, s4 = s3(e2, t.spatialReference, j2, n4), o4 = i.leftEdge, a3 = i.rightEdge;
    if (o4 == null ? void 0 : o4.leftVertex.leftEdge) {
      const i2 = o4.leftVertex.leftEdge;
      this._checkForSnappingCandidate(p4.ExistingEdge, r4, i2, i2.rightVertex, i2.leftVertex, e2, s4, t);
    }
    if (a3 == null ? void 0 : a3.rightVertex.rightEdge) {
      const i2 = a3.rightVertex.rightEdge;
      this._checkForSnappingCandidate(p4.ExistingEdge, r4, i2, i2.leftVertex, i2.rightVertex, e2, s4, t);
    }
    return r4;
  }
  _checkForSnappingCandidate(e2, t, r4, i, n4, s4, o4, a3) {
    if (!this.edgeExceedsShortLineThreshold(r4, a3)) return;
    const c2 = this.view, p5 = N(i.pos, c2, a3), g4 = N(n4.pos, c2, a3);
    _2(T, g4, p5, s4, a3), this._checkForSnappingCandidateAlongProjectedRay(e2, t, g4, p5, T, s4, o4, a3);
  }
  _checkForSnappingCandidateAlongProjectedRay(e2, t, r4, a3, p5, g4, f4, E4) {
    var _a;
    const { spatialReference: v2, pointer: w2 } = E4, y2 = e(M2, s2(g4), s2(a3)), F = j(p5, y2) / p(p5), R2 = d(M2, s2(a3), p5, F), _3 = p2(d2(R2[0], R2[1], g4[2]));
    if (u2(f4, s3(_3, v2, j2, this.view)) > this.squaredProximityThreshold(w2) || this.isVertical(_3, a3, E4) || this.isVertical(a3, r4, E4)) return;
    const P3 = q(n(), a3, p5, Math.sign(F));
    t.push(new n3({ targetPoint: _3, constraint: new Et(a3, a2(P3)), previousVertex: r4, otherVertex: a3, otherVertexType: o3.CENTER, selfSnappingType: e2, isDraped: "on-the-ground" === ((_a = E4.elevationInfo) == null ? void 0 : _a.mode) }));
  }
};
function _2(e2, t, r4, i, n4) {
  P2(e2, t, r4, i, n4) || U(e2, t, r4);
}
function P2(i, n4, s4, o4, { spatialReference: a3 }) {
  const c2 = y(n4, s4, a3, a3);
  if (null == c2) return false;
  const g4 = y(s4, o4, a3, a3);
  if (null == g4) return false;
  const l2 = Math.sign(r2.shortestSignedDiff(c2, g4)) * Math.PI * 0.5, d3 = o2(c2 + l2, "radians", "geographic"), f4 = n(), m4 = u(s4, o4, a3);
  return null != m4 && (M(f4, s4, a3, f(m4, "meters"), d3, "geodesic"), c(i, f4, s4), true);
}
function U(e2, t, r4) {
  const n4 = e(M2, s2(r4), s2(t));
  o(e2, n4[1], -n4[0], 0);
}
var M2 = n2();
var T = n();

// node_modules/@arcgis/core/views/interactive/snapping/RightAngleTriangleSnapper.js
var h = class extends l {
  snapNewVertex(e2, t) {
    const i = t.editGeometryOperations.data.components[0], r4 = [], s4 = i.vertices.length;
    if ("polygon" !== t.editGeometryOperations.data.type || s4 < 2) return r4;
    const { view: n4 } = this, p5 = i.vertices[0], a3 = i.vertices[s4 - 1], d3 = N(p5.pos, n4, t), l2 = N(a3.pos, n4, t);
    return this._processCandidateProposal(d3, l2, e2, t, r4), r4;
  }
  snapExistingVertex(e2, t) {
    const i = [], r4 = t.vertexHandle, s4 = r4.component;
    if (s4.edges.length < 2) return i;
    if ("polyline" === t.editGeometryOperations.data.type && (0 === r4.index || r4.index === s4.vertices.length - 1)) return i;
    const { view: n4 } = this, p5 = N(r4.leftEdge.leftVertex.pos, n4, t), a3 = N(r4.rightEdge.rightVertex.pos, n4, t);
    return this._processCandidateProposal(p5, a3, e2, t, i), i;
  }
  _processCandidateProposal(i, o4, a3, h3, g4) {
    var _a;
    if (!this.exceedsShortLineThreshold(i, o4, h3)) return;
    const v2 = _(f3, s2(i), s2(o4), 0.5), x = 0.5 * m2(s2(i), s2(o4)), u4 = N2(f3, s2(a3), v2, x), j5 = p2(d2(u4[0], u4[1], a3[2])), { spatialReference: y2, pointer: w2 } = h3, P3 = s3(a3, y2, j2, this.view);
    if (u2(P3, s3(j5, y2, j2, this.view)) < this.squaredProximityThreshold(w2)) {
      if (this.isVertical(i, j5, h3) || this.isVertical(j5, o4, h3)) return;
      g4.push(new g3({ targetPoint: j5, point1: i, point2: o4, isDraped: "on-the-ground" === ((_a = h3.elevationInfo) == null ? void 0 : _a.mode) }));
    }
  }
};
var f3 = n2();

// node_modules/@arcgis/core/views/interactive/snapping/SelfSnappingEngine.js
var h2 = class extends g {
  constructor(o4) {
    super(o4), this.updating = false, this._snappers = new V(), this._domain = E.SELF;
  }
  initialize() {
    this._snappers.push(new f2(this.view, this.options), new E3(this.view, this.options), new R(this.view, this.options), new h(this.view, this.options));
  }
  set options(o4) {
    this._set("options", o4);
    for (const s4 of this._snappers) s4.options = o4;
  }
  async fetchCandidates(o4, s4, t) {
    if (!(s4 & this._domain && this.options.effectiveSelfEnabled)) return [];
    const i = [];
    for (const r4 of this._snappers.items) for (const s5 of r4.snap(o4, t)) i.push(s5);
    return E2(o4, i), i;
  }
};
r([m({ readOnly: true })], h2.prototype, "updating", void 0), r([m({ constructOnly: true })], h2.prototype, "view", void 0), r([m()], h2.prototype, "options", null), h2 = r([a("esri.views.interactive.snapping.SelfSnappingEngine")], h2);
export {
  h2 as SelfSnappingEngine
};
//# sourceMappingURL=SelfSnappingEngine-YDPTLF5C.js.map
