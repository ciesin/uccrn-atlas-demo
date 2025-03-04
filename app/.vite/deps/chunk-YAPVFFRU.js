import {
  C,
  P,
  Z,
  j,
  x
} from "./chunk-FZLDYYQZ.js";
import {
  Ct,
  Na,
  Ta,
  Tm,
  bm,
  ca,
  eh,
  ga,
  la,
  ra,
  wt,
  za
} from "./chunk-NEFPLHSJ.js";
import {
  t
} from "./chunk-VUD5O2WG.js";
import {
  a,
  b,
  n
} from "./chunk-67PUVBHA.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/chunks/OperatorCut.js
var _ = ca;
function g(t3, e) {
  return { m_geometry: t3, m_side: e };
}
function f(t3, e, s, r, n3, o2) {
  if (e.isEmpty()) {
    const t4 = g(e, 0);
    return void n3.push(t4);
  }
  if (s.isEmpty()) {
    const t4 = g(e, 0);
    return void n3.push(t4);
  }
  const i2 = [], u = new Tm();
  {
    const m2 = u.createGeometryUserIndex(), c2 = u.addGeometry(e), p = u.addGeometry(s), f2 = new za(o2);
    let C3 = 0, E2 = null;
    if (u.hasCurves()) {
      E2 = new _();
      const t4 = u.getEnvelope2D(o2);
      C3 = ga(r.total());
      const e2 = la(r.total(), t4);
      ra(u, e2, r.total(), 12e3, E2, null, o2);
    }
    u.dbgVerifyCurves(), f2.setEditShapeCrackAndCluster(u, r), f2.cut(t3, m2, c2, p, i2);
    for (const t4 of i2) {
      null !== E2 && E2.stitchCurves(u, t4, C3, false);
      const e2 = g(u.getGeometry(t4), Ta(u.getGeometryUserIndex(t4, m2)));
      n3.push(e2);
    }
    null !== E2 && E2.clearStitcher(u);
  }
}
function C2(t3, e, s, r, n3, u) {
  if (e.isEmpty()) {
    const t4 = g(e, 0);
    return void n3.push(t4);
  }
  if (s.isEmpty()) {
    const t4 = g(e, 0);
    return void n3.push(t4);
  }
  const c2 = [], y = new Tm();
  {
    const t4 = y.createGeometryUserIndex(), p = y.addGeometry(e), f2 = y.addGeometry(s), C3 = new za(u);
    let E2 = 0, G3 = null;
    if (y.hasCurves()) {
      G3 = new _();
      const t5 = y.getEnvelope2D(u);
      E2 = ga(r.total());
      const e2 = la(r.total(), t5);
      ra(y, e2, r.total(), 12e3, G3, null, u);
    }
    y.dbgVerifyCurves(), C3.setEditShapeCrackAndCluster(y, r), C3.cut(false, t4, p, f2, c2), null !== G3 && G3.stitchCurves(y, bm, E2, true);
    let v = y.getGeometry(p);
    const w = new eh(), x2 = new eh(), k = [];
    for (let e2 = 0; e2 < c2.length; e2++) {
      let s2 = null;
      {
        const n4 = new Tm(), o2 = n4.addGeometry(v), a2 = n4.addGeometry(y.getGeometry(c2[e2]));
        if (n4.hasCurves()) {
          const t5 = n4.getEnvelope2D(u);
          E2 = ga(r.total());
          const e3 = la(r.total(), t5);
          ra(n4, e3, r.total(), 12e3, G3, null, u);
        }
        C3.setEditShapeCrackAndCluster(n4, r);
        const p2 = C3.intersection(o2, a2);
        if (null !== G3 && G3.stitchCurves(n4, bm, E2, true), s2 = n4.getGeometry(p2), s2.isEmpty()) continue;
        const _2 = y.getGeometryUserIndex(c2[e2], t4);
        2 === _2 ? w.add(s2, false) : 1 === _2 ? x2.add(s2, false) : k.push(s2);
      }
      {
        const t5 = new Tm(), s3 = t5.addGeometry(v), n4 = t5.addGeometry(y.getGeometry(c2[e2]));
        if (t5.hasCurves()) {
          const e3 = t5.getEnvelope2D(u);
          E2 = ga(r.total());
          const s4 = la(r.total(), e3);
          ra(t5, s4, r.total(), 12e3, G3, null, u);
        }
        C3.setEditShapeCrackAndCluster(t5, r);
        const o2 = C3.difference(s3, n4);
        null !== G3 && G3.stitchCurves(t5, bm, E2, true);
        v = t5.getGeometry(o2);
      }
    }
    if (!v.isEmpty() && c2.length > 0 && k.push(v), w.isEmpty() && x2.isEmpty()) return;
    if (!w.isEmpty()) {
      const t5 = g(w, 1);
      n3.push(t5);
    }
    if (!x2.isEmpty()) {
      const t5 = g(x2, 2);
      n3.push(t5);
    }
    for (let e2 = 0, s2 = k.length; e2 < s2; ++e2) {
      const t5 = g(k[e2], 3);
      n3.push(t5);
    }
  }
}
var E = class {
  getOperatorType() {
    return 10005;
  }
  accelerateGeometry(t3, e, s) {
    return false;
  }
  canAccelerateGeometry(t3) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  execute(t3, e, s, r, n3) {
    return new G2(t3, e, s, r, n3);
  }
};
var G2 = class extends t {
  constructor(t3, e, s, r, o2) {
    super(), this.m_cutIndex = -1, this.m_cuts = [], this.m_progressTracker = o2, this.m_cuttee = e.clone(), this.m_cutter = new Na({ copy: s }), this.m_bConsiderTouch = t3;
    const m2 = Ct(e, s);
    this.m_tolerance = wt(r, m2, true);
  }
  next() {
    return -1 === this.m_cutIndex && this.generateCuts(), ++this.m_cutIndex < this.m_cuts.length ? this.m_cuts[this.m_cutIndex] : null;
  }
  getGeometryID() {
    return this.m_cutIndex;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  generateCuts() {
    switch (this.m_cuttee.getGeometryType()) {
      case a.enumPolyline:
        this.generatePolylineCuts();
        break;
      case a.enumPolygon:
        this.generatePolygonCuts();
    }
  }
  generatePolylineCuts() {
    const t3 = new Na(), e = new Na(), r = new Na();
    this.m_cuts.length = 0, this.m_cuts.push(t3), this.m_cuts.push(e);
    const o2 = [];
    f(this.m_bConsiderTouch, this.m_cuttee, this.m_cutter, this.m_tolerance, o2, this.m_progressTracker);
    for (let n3 = 0; n3 < o2.length; n3++) {
      const m2 = o2[n3];
      1 === m2.m_side ? t3.add(m2.m_geometry, false) : 2 === m2.m_side || 4 === m2.m_side ? e.add(m2.m_geometry, false) : 3 === m2.m_side ? this.m_cuts.push(m2.m_geometry) : 0 === m2.m_side ? r.add(m2.m_geometry, false) : b("");
    }
    r.isEmpty() || t3.isEmpty() && e.isEmpty() && !(this.m_cuts.length >= 3) || this.m_cuts.push(r), t3.isEmpty() && e.isEmpty() && this.m_cuts.length < 3 && (this.m_cuts.length = 0);
  }
  generatePolygonCuts() {
    const t3 = new eh(), e = new eh(), n3 = new eh();
    this.m_cuts.length = 0, this.m_cuts.push(t3), this.m_cuts.push(e);
    const m2 = [];
    C2(this.m_bConsiderTouch, this.m_cuttee, this.m_cutter, this.m_tolerance, m2, this.m_progressTracker);
    for (let r = 0; r < m2.length; r++) {
      const o2 = m2[r];
      1 === o2.m_side ? t3.add(o2.m_geometry, false) : 2 === o2.m_side ? e.add(o2.m_geometry, false) : 3 === o2.m_side ? this.m_cuts.push(o2.m_geometry) : 0 === o2.m_side ? n3.add(o2.m_geometry, false) : b("");
    }
    n(n3.isEmpty() || 1 === m2.length), t3.isEmpty() && e.isEmpty() && this.m_cuts.length < 3 && (this.m_cuts.length = 0);
  }
};

// node_modules/@arcgis/core/geometry/operators/gx/operatorCut.js
var t2 = new E();
function n2(r, n3, o2) {
  const u = t2.execute(true, r, n3, o2, null);
  return Array.from(u);
}
function o() {
  return t2.supportsCurves();
}

// node_modules/@arcgis/core/chunks/cutOperator.js
function m(e, m2) {
  const c2 = C(e);
  return n2(x(e), P(m2), j(c2)).map((r) => Z(r, c2)).filter(G);
}
var c = o();
var i = Object.freeze(Object.defineProperty({ __proto__: null, execute: m, supportsCurves: c }, Symbol.toStringTag, { value: "Module" }));

export {
  m,
  c,
  i
};
//# sourceMappingURL=chunk-YAPVFFRU.js.map
