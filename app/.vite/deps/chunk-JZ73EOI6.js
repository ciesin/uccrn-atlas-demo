import {
  P as P2
} from "./chunk-I7YJKQIK.js";
import {
  i
} from "./chunk-MMRIUVCH.js";
import {
  Fa,
  Na,
  Tm,
  Vt,
  Ym,
  ah,
  bm,
  bt,
  ee,
  eh,
  fh,
  n as n3,
  nl,
  re,
  rh,
  su,
  th,
  wt
} from "./chunk-NEFPLHSJ.js";
import {
  s as s2,
  t
} from "./chunk-VUD5O2WG.js";
import {
  $,
  E,
  Lt,
  P,
  Rt,
  a,
  b,
  d,
  ei,
  f,
  g,
  j,
  l,
  ls,
  n as n2,
  p,
  x3 as x,
  z,
  zt
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/chunks/Bufferer-B-V7yYm-.js
var L = class {
  getOperatorType() {
    return 10104;
  }
  accelerateGeometry(e, t2, s3) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  supportsCurves() {
    return true;
  }
  isSimple(e, t2, s3, i2, n4) {
    return 5 === th(e, t2, s3, i2, n4);
  }
  executeMany(e, t2, s3, i2) {
    return new N(e, t2, s3, i2);
  }
  execute(e, t2, i2, n4) {
    const r = new s2([e]), m2 = this.executeMany(r, t2, i2, n4).next();
    return m2 || b("null output"), m2;
  }
};
var N = class extends t {
  constructor(e, t2, s3, n4) {
    super(), e || P(""), this.m_progressTracker = n4, this.m_bForceSimplify = s3, this.m_index = -1, this.m_inputGeometryCursor = e, this.m_spatialReference = t2;
  }
  next() {
    const e = this.m_inputGeometryCursor.next();
    return e ? (j(e), this.m_index = this.m_inputGeometryCursor.getGeometryID(), this.simplify(e)) : null;
  }
  getGeometryID() {
    return this.m_index;
  }
  tock() {
    return false;
  }
  getRank() {
    return 1;
  }
  simplify(e) {
    e || P("");
    return rh(e, this.m_spatialReference, this.m_bForceSimplify, this.m_progressTracker);
  }
};
var O;
function J(e, t2, s3, i2, n4, r) {
  return { m_from: e.clone(), m_to: t2.clone(), m_center: s3.clone(), m_next: n4, m_type: i2 };
}
function U(e, t2, s3, i2, n4) {
  return { m_from: e.clone(), m_to: t2.clone(), m_next: s3, m_type: 4, m_center: new ei() };
}
!function(e) {
  e[e.enumDummy = 256] = "enumDummy", e[e.enumLine = 1] = "enumLine", e[e.enumArc = 2] = "enumArc", e[e.enumMiter = 8] = "enumMiter", e[e.enumBevel = 16] = "enumBevel", e[e.enumJoinMask = 26] = "enumJoinMask", e[e.enumConnectionMask = 27] = "enumConnectionMask";
}(O || (O = {}));
var Q = class extends t {
  constructor(e, t2, s3, i2, n4, r, m2, o, a3, h) {
    super(), this.m_index = 0, this.m_bufferedPolygon = null, this.m_x = 0, this.m_y = 0, this.m_progressTracker = h, this.m_parent = e, this.m_mp = t2, this.m_distance = s3, this.m_spatialReference = i2, this.m_densifyDist = o, this.m_maxVertexInCompleteCircle = a3, this.m_joins = n4, this.m_caps = r, this.m_miterLimit = m2;
  }
  next() {
    const e = new ee();
    for (; ; ) {
      if (this.m_index === this.m_mp.getPointCount()) return null;
      if (1 === this.m_caps) return this.m_index = this.m_mp.getPointCount(), new eh({ vd: this.m_mp.getDescription() });
      if (this.m_mp.getPointByVal(this.m_index, e), this.m_index++, !e.isEmpty()) break;
    }
    let t2, s3 = false;
    if (null === this.m_bufferedPolygon && (this.m_x = e.getX(), this.m_y = e.getY(), this.m_bufferedPolygon = this.m_parent.buffer(e, this.m_distance, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_densifyDist, this.m_maxVertexInCompleteCircle), s3 = true), t2 = this.m_index < this.m_mp.getPointCount() ? this.m_bufferedPolygon.clone() : this.m_bufferedPolygon, !s3) {
      const s4 = new x(), i2 = e.getX() - this.m_x, n4 = e.getY() - this.m_y;
      s4.setShiftCoords(i2, n4), t2.applyTransformation(s4);
    }
    return Vt(t2, 0), t2;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var H = class extends t {
  constructor(e) {
    super(), this.m_currentPathIndex = 0, this.m_polyline = e;
  }
  next() {
    if (!this.m_polyline) return null;
    const e = this.m_polyline.getImpl(), t2 = e.getPathCount();
    if (this.m_currentPathIndex < t2) {
      const t3 = this.m_currentPathIndex;
      if (this.m_currentPathIndex++, !e.isClosedPathInXYPlane(t3)) {
        let s4 = e.getXY(e.getPathEnd(t3) - 1);
        for (; this.m_currentPathIndex < e.getPathCount(); ) {
          const t4 = e.getXY(e.getPathStart(this.m_currentPathIndex));
          if (e.isClosedPathInXYPlane(this.m_currentPathIndex)) break;
          if (!t4.equals(s4)) break;
          s4 = e.getXY(e.getPathEnd(this.m_currentPathIndex) - 1), this.m_currentPathIndex++;
        }
      }
      if (0 === t3 && this.m_currentPathIndex === this.m_polyline.getPathCount()) {
        const e2 = this.m_polyline;
        return this.m_polyline = null, e2;
      }
      const s3 = new Na({ vd: this.m_polyline.getDescription() });
      s3.addPath(this.m_polyline, t3, true);
      for (let i2 = t3 + 1; i2 < this.m_currentPathIndex; i2++) s3.addSegmentsFromPath(this.m_polyline, i2, 0, e.getSegmentCountPath(i2), false);
      return this.m_currentPathIndex === this.m_polyline.getPathCount() && (this.m_polyline = null), s3;
    }
    return null;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var K = class extends t {
  constructor(e, t2, s3) {
    super(), this.m_geometry = null, this.m_index = 0, this.m_bufferer = e, this.m_geoms = t2, this.m_index = 0, this.m_bFilter = s3;
  }
  next() {
    if (null === this.m_geometry && (this.m_index = 0, this.m_geometry = this.m_geoms.next(), !this.m_geometry)) return null;
    const e = this.m_geometry.getImpl();
    if (this.m_index < e.getPathCount()) {
      const e2 = this.m_index;
      this.m_index++;
      return this.m_bufferer.bufferPolylinePath(this.m_geometry, e2, this.m_bFilter);
    }
    return this.m_geometry = null, this.next();
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var W = class extends t {
  constructor(e) {
    super(), this.m_index = 0, this.m_bufferer = e;
  }
  next() {
    const e = this.m_bufferer.m_geometry;
    if (this.m_index < e.getPathCount()) {
      const t2 = this.m_index, s3 = e.calculateRingArea2D(this.m_index);
      for (n2(s3 > 0), this.m_index++; this.m_index < e.getPathCount(); ) {
        if (e.calculateRingArea2D(this.m_index) > 0) break;
        this.m_index++;
      }
      let i2;
      return i2 = 0 === t2 && this.m_index === e.getPathCount() ? this.m_bufferer.bufferPolygonImpl(e, 0, e.getPathCount()) : this.m_bufferer.bufferPolygonImpl(e, t2, this.m_index), i2;
    }
    return null;
  }
  getGeometryID() {
    return 0;
  }
  getRank() {
    return 1;
  }
  tock() {
    return true;
  }
};
var Z = class {
  constructor(e) {
    this.m_geometry = null, this.m_bufferCommands = [], this.m_originalGeomType = a.enumUnknown, this.m_maxVertexInCompleteCircle = -1, this.m_circleTemplateSize = -1, this.m_oldCircleTemplateSize = 0, this.m_spatialReference = null, this.m_tolerance = new bt(0, 0), this.m_smallTolerance = new bt(0, 0), this.m_filterTolerance = 0, this.m_densifyDist = -1, this.m_distance = Number.NaN, this.m_absDistance = 0, this.m_absDistanceReversed = 0, this.m_dA = -1, this.m_miterLimit = 4, this.m_joins = 0, this.m_caps = 0, this.m_bRoundBuffer = true, this.m_bOutputLoops = true, this.m_bFilter = true, this.m_circleTemplate = [], this.m_leftStack = [], this.m_middleStack = [], this.m_helperLine1 = new su(), this.m_helperLine2 = new su(), this.m_helperArray = [], this.m_progressCounter = 0, this.m_densificator = ah.constructDefault(e), this.m_progressTracker = e;
  }
  buffer(e, t2, s3, n4, r, u, f3, _) {
    if (e || P("Geometry.Bufferer.Impl.Buffer"), f3 < 0 && P("Geometry.Bufferer.Impl.Buffer"), g(e.getGeometryType()) && z("Unsupported geometry type."), e.isEmpty()) return new eh({ vd: e.getDescription() });
    if (this.m_joins = n4, this.m_caps = r, this.m_bRoundBuffer = false, this.m_miterLimit = u, this.m_originalGeomType = e.getGeometryType(), d(this.m_originalGeomType) ? this.m_bRoundBuffer = 0 === this.m_joins : l(this.m_originalGeomType) ? this.m_bRoundBuffer = 0 === this.m_caps : p(this.m_originalGeomType) && (this.m_bRoundBuffer = 0 === this.m_joins && 0 === this.m_caps), this.m_bFilter = this.m_bRoundBuffer, this.m_geometry = i(e), this.m_geometry.isEmpty()) return new eh({ vd: e.getDescription() });
    const g2 = new n3();
    this.m_geometry.queryLooseEnvelope(g2), t2 > 0 && g2.inflateCoords(t2, t2), this.m_tolerance = wt(s3, g2, true), this.m_smallTolerance = wt(null, g2, true), _ <= 0 && (_ = 96), this.m_spatialReference = s3, this.m_distance = t2, this.m_absDistance = Math.abs(this.m_distance), this.m_absDistanceReversed = 0 !== this.m_absDistance ? 1 / this.m_absDistance : 0, Number.isNaN(f3) || 0 === f3 ? f3 = 1e-5 * this.m_absDistance : f3 > 0.5 * this.m_absDistance && (f3 = 0.5 * this.m_absDistance), _ < 12 && (_ = 12);
    const d2 = Math.abs(t2) * (1 - Math.cos(Math.PI / _));
    if (d2 > f3) f3 = d2;
    else if (0 !== t2) {
      const e2 = Math.PI / Math.acos(1 - f3 / Math.abs(t2));
      e2 < _ - 1 && (_ = Math.trunc(e2)) < 12 && (_ = 12, f3 = Math.abs(t2) * (1 - Math.cos(Math.PI / _)));
    }
    this.m_densifyDist = f3, this.m_maxVertexInCompleteCircle = _, this.m_filterTolerance = this.m_bRoundBuffer ? Math.min(this.m_smallTolerance.total(), 0.25 * this.m_densifyDist) : 0, this.m_circleTemplateSize = this.calcN(), this.m_circleTemplateSize !== this.m_oldCircleTemplateSize && (this.m_circleTemplate.length = 0, this.m_oldCircleTemplateSize = this.m_circleTemplateSize), this.m_densifyDist > 0 && E(this.m_geometry) && (this.m_geometry = this.m_densificator.densifyEx(this.m_geometry, 0, this.m_densifyDist, 0, 0 !== this.m_joins, ls()));
    const y = this.bufferImpl();
    return this.m_geometry = null, y;
  }
  generateCircleTemplate() {
    if (this.m_circleTemplate.length) return;
    const e = this.m_circleTemplateSize, t2 = Math.trunc((e + 3) / 4), s3 = 0.5 * Math.PI / t2;
    this.m_dA = s3, this.m_circleTemplate = Rt(ei, 4 * t2);
    const i2 = Math.cos(s3), n4 = Math.sin(s3), r = ei.construct(0, 1);
    for (let m2 = 0; m2 < t2; m2++) this.m_circleTemplate[m2 + 0 * t2].setCoords(r.y, -r.x), this.m_circleTemplate[m2 + 1 * t2].setCoords(-r.x, -r.y), this.m_circleTemplate[m2 + 2 * t2].setCoords(-r.y, r.x), this.m_circleTemplate[m2 + 3 * t2].setCoords(r.x, r.y), r.rotateReverse(i2, n4);
  }
  bufferImpl() {
    const e = this.m_geometry.getGeometryType();
    if (f(e)) {
      const e2 = new Na({ vd: this.m_geometry.getDescription() });
      return e2.addSegment(this.m_geometry, true), this.m_geometry = e2, this.bufferImpl();
    }
    if (this.m_distance <= this.m_tolerance.total()) {
      if (!d(e)) return new eh({ vd: this.m_geometry.getDescription() });
      if (this.m_distance < 0) {
        const e2 = new n3();
        if (this.m_geometry.queryEnvelope(e2), e2.width() <= 2 * this.m_absDistance || e2.height() <= 2 * this.m_absDistance) return new eh({ vd: this.m_geometry.getDescription() });
      }
    }
    switch (this.m_geometry.getGeometryType()) {
      case a.enumPoint:
        return this.bufferPoint();
      case a.enumMultiPoint:
        return this.bufferMultiPoint();
      case a.enumPolyline:
        return this.bufferPolyline();
      case a.enumPolygon:
        return this.bufferPolygon();
      case a.enumEnvelope:
        return this.bufferEnvelope();
      default:
        b("");
    }
  }
  bufferPolyline() {
    if (this.isDegenerateGeometry(this.m_geometry)) {
      const e2 = new ee();
      this.m_geometry.getPointByVal(0, e2);
      const t3 = new n3();
      return this.m_geometry.queryEnvelope(t3), e2.setXY(t3.getCenter()), this.bufferDegeneratePath(e2, true);
    }
    const e = this.m_geometry, t2 = this.m_geometry.getDescription();
    this.m_geometry = null;
    const s3 = new H(e);
    let i2, n4;
    i2 = 0 === this.m_joins ? new P2().executeMany(s3, 0.25 * this.m_densifyDist, false, this.m_progressTracker) : s3, n4 = this.m_bRoundBuffer ? new L().executeMany(i2, null, true, this.m_progressTracker) : i2;
    const r = new K(this, n4, this.m_bFilter), m2 = new nl().executeMany(r, this.m_spatialReference, this.m_progressTracker, 2), o = new fh().executeMany(m2, this.m_spatialReference, false, this.m_progressTracker).next();
    return null !== o ? o : new eh({ vd: t2 });
  }
  bufferPolygon() {
    if (0 === this.m_distance) return this.m_geometry;
    this.generateCircleTemplate();
    const e = new fh().execute(this.m_geometry, null, false, this.m_progressTracker);
    if (this.m_distance < 0) {
      if (this.m_geometry = e, this.m_geometry.isEmpty()) return this.m_geometry;
      const t2 = this.m_geometry, s3 = this.bufferPolygonImpl(t2, 0, t2.getPathCount());
      return new fh().execute(s3, this.m_spatialReference, false, this.m_progressTracker);
    }
    {
      if (this.m_geometry = e, this.isDegenerateGeometry(this.m_geometry)) {
        const e2 = new ee();
        this.m_geometry.getPointByVal(0, e2);
        const t3 = new n3();
        return this.m_geometry.queryEnvelope(t3), e2.setXY(t3.getCenter()), this.bufferDegeneratePath(e2, true);
      }
      const t2 = new W(this), s3 = new nl().executeMany(t2, this.m_spatialReference, this.m_progressTracker, 2), i2 = new fh().executeMany(s3, this.m_spatialReference, false, this.m_progressTracker).next();
      return null !== i2 ? i2 : new eh({ vd: this.m_geometry.getDescription() });
    }
  }
  bufferPolygonImpl(e, t2, s3) {
    const i2 = e, n4 = i2.getImpl();
    let r = new eh({ vd: e.getDescription() });
    for (let m2 = t2; m2 < s3; m2++) {
      if (n4.getPathSize(m2) < 1) continue;
      const t3 = n4.calculateRingArea2D(m2), s4 = new n3();
      if (n4.queryPathEnvelope(m2, s4), this.m_distance > 0) if (t3 > 0) if (this.isDegeneratePath(n4, m2)) {
        const e2 = new ee();
        n4.getPointByVal(n4.getPathStart(m2), e2), e2.setXY(s4.getCenter()), r.add(this.bufferDegeneratePath(e2, true), false);
      } else {
        const t4 = new Na({ vd: e.getDescription() }), s5 = t4.getImpl();
        if (Ym(this.m_geometry, m2)) {
          const e2 = this.bufferConvexPath(i2, m2);
          r.add(e2, false);
        } else {
          this.bufferClosedPath(this.m_geometry, m2, s5, this.m_bRoundBuffer, 1);
          const e2 = this.bufferCleanup(t4);
          r.add(e2, false);
        }
      }
      else {
        if (s4.width() + this.m_tolerance.total() <= 2 * this.m_absDistance || s4.height() + this.m_tolerance.total() <= 2 * this.m_absDistance) continue;
        const t4 = new Na({ vd: e.getDescription() }), i3 = t4.getImpl();
        if (this.bufferClosedPath(this.m_geometry, m2, i3, this.m_bRoundBuffer, 1), !t4.isEmpty()) {
          const e2 = s4, n5 = Math.max(1, this.m_absDistance), m3 = e2.clone();
          m3.inflateCoords(n5, n5), i3.addEnvelope(m3, false);
          const o = this.bufferCleanup(t4);
          r.reserve(r.getPointCount() + o.getPointCount() - 4), re2(o, r, m3, true);
        }
      }
      else if (t3 > 0) {
        if (s4.width() + this.m_tolerance.total() <= 2 * this.m_absDistance || s4.height() + this.m_tolerance.total() <= 2 * this.m_absDistance) continue;
        const t4 = new Na({ vd: e.getDescription() }), i3 = t4.getImpl();
        if (this.bufferClosedPath(this.m_geometry, m2, i3, this.m_bRoundBuffer, -1), !t4.isEmpty()) {
          const e2 = new n3();
          i3.queryLooseEnvelope(e2);
          const s5 = Math.max(1, this.m_absDistance), n5 = e2.clone();
          n5.inflateCoords(s5, s5), i3.addEnvelope(n5, false);
          re2(this.bufferCleanup(t4), r, n5, true);
        }
      } else {
        const t4 = new Na({ vd: e.getDescription() }), s5 = t4.getImpl();
        this.bufferClosedPath(this.m_geometry, m2, s5, this.m_bRoundBuffer, -1);
        const i3 = this.bufferCleanup(t4);
        for (let e2 = 0, n5 = i3.getPathCount(); e2 < n5; e2++) r.addPath(i3, e2, true);
      }
    }
    if (this.m_distance > 0) {
      if (r.getPathCount() > 1) {
        return this.bufferCleanup(r);
      }
      return $2(r);
    }
    {
      const e2 = new n3();
      if (r.queryLooseEnvelope(e2), r.isEmpty()) return $2(r);
      {
        const t3 = Math.max(1, this.m_absDistance), s4 = e2.clone();
        s4.inflateCoords(t3, t3), r.addEnvelope(s4, false);
        const i3 = this.bufferCleanup(r);
        r = new eh();
        const n5 = new eh({ vd: i3.getDescription() });
        return re2(i3, n5, s4, false), $2(n5);
      }
    }
  }
  bufferPoint() {
    return this.bufferPointImpl(this.m_geometry);
  }
  bufferPointImpl(e) {
    const t2 = new eh({ vd: e.getDescription() });
    return 0 === this.m_caps ? (this.addCircle(t2.getImpl(), e), this.setStrongSimple(t2)) : 2 === this.m_caps ? (this.addSquare(t2.getImpl(), e), this.setStrongSimple(t2)) : t2;
  }
  bufferDegeneratePath(e, t2) {
    const s3 = new eh({ vd: e.getDescription() });
    return t2 && 0 === this.m_joins || !t2 && 0 === this.m_caps ? (this.addCircle(s3.getImpl(), e), this.setStrongSimple(s3)) : t2 || 2 !== this.m_caps ? s3 : (this.addSquare(s3.getImpl(), e), this.setStrongSimple(s3));
  }
  bufferMultiPoint() {
    const e = new Q(this, this.m_geometry, this.m_distance, this.m_spatialReference, this.m_joins, this.m_caps, this.m_miterLimit, this.m_densifyDist, this.m_maxVertexInCompleteCircle, this.m_progressTracker);
    return new nl().executeMany(e, this.m_spatialReference, this.m_progressTracker, 2).next();
  }
  bufferEnvelope() {
    let e = new eh({ vd: this.m_geometry.getDescription() });
    if (this.m_distance <= 0) {
      if (0 === this.m_distance) e.addEnvelope(this.m_geometry, false), ee2(this.m_geometry, this.m_tolerance.total()) && (e = this.setStrongSimple(e));
      else {
        const t3 = new re();
        this.m_geometry.queryEnvelope(t3), t3.inflateCoords(this.m_distance, this.m_distance), e.addEnvelope(t3, false), ee2(t3, this.m_tolerance.total()) && (e = this.setStrongSimple(e));
      }
      return e;
    }
    if (1 === this.m_joins) {
      const t3 = new re({ copy: this.m_geometry });
      return t3.inflateCoords(this.m_absDistance, this.m_absDistance), e.addEnvelope(t3, false), e;
    }
    const t2 = this.m_geometry.clone();
    if (0 === t2.width() || 0 === t2.height()) {
      if (0 === t2.width() && 0 === t2.height()) {
        const e3 = new ee({ vd: this.m_geometry.getDescription() });
        return t2.queryCornerByVal(0, e3), this.m_geometry = e3, this.bufferImpl();
      }
      const e2 = new Na({ vd: this.m_geometry.getDescription() }), s3 = new ee();
      return t2.queryCornerByVal(0, s3), e2.startPathPoint(s3), t2.queryCornerByVal(2, s3), e2.lineToPoint(s3), this.m_geometry = e2, this.bufferImpl();
    }
    return e.addEnvelope(this.m_geometry, false), this.m_geometry = e, this.bufferConvexPath(e, 0);
  }
  bufferConvexPath(e, t2) {
    this.generateCircleTemplate();
    const i2 = e.hasAttribute(10), n4 = new eh({ vd: e.getDescription() }), r = n4.getImpl();
    n4.reserve((this.m_circleTemplate.length / 10 + 4) * e.getPathSize(t2));
    const m2 = new ei(), o = new ei(), a3 = new ei(), h = new ei(0, 0), l3 = new ei(), c2 = new ei(), u = e.getImpl(), f3 = e.getPathSize(t2), _ = e.getPathStart(t2);
    for (let g2 = 0, d2 = e.getPathSize(t2); g2 < d2; g2++) {
      const e2 = u.getXY(_ + g2), t3 = u.getXY(_ + (g2 + 1) % f3), n5 = u.getXY(_ + (g2 + 2) % f3);
      l3.setSub(t3, e2), 0 === l3.length() && b("");
      const d3 = i2 && !!(1 & u.getAttributeAsInt(10, (g2 + 1) % f3, 0));
      l3.normalize();
      const p2 = l3.clone();
      l3.leftPerpendicularThis(), l3.scale(this.m_absDistance), m2.setAdd(l3, e2), o.setAdd(l3, t3), 0 === g2 ? r.startPath(m2) : r.lineTo(m2), r.lineTo(o), c2.setSub(n5, t3), 0 === c2.length() && b(""), c2.normalize();
      const y = c2.clone();
      c2.leftPerpendicularThis(), c2.scale(this.m_absDistance), a3.setAdd(c2, t3);
      let b2 = O.enumArc;
      const P3 = d3 ? 0 : this.m_joins;
      if (2 === P3) b2 = O.enumBevel;
      else if (1 === P3) {
        const e3 = -p2.crossProduct(y);
        h.setSub(p2, y), h.scale(this.m_absDistance / e3), h.length() < this.m_miterLimit * this.m_absDistance ? (h.addThis(t3), b2 = O.enumMiter) : b2 = O.enumBevel;
      } else h.assign(t3);
      this.addJoin(b2, r, h, o, a3, false, false);
    }
    return $2(n4);
  }
  bufferPolylinePath(e, t2, s3) {
    this.generateCircleTemplate();
    const i2 = e, n4 = i2.getImpl();
    if (n4.getPathSize(t2) < 1) return null;
    let r;
    if (r = this.m_bRoundBuffer ? n4.isClosedPathInXYPlane(t2) : n4.isClosedPath(t2), this.isDegeneratePath(n4, t2) && this.m_distance > 0) {
      const e2 = new ee();
      n4.getPointByVal(n4.getPathStart(t2), e2);
      const s4 = new n3();
      return n4.queryPathEnvelope(t2, s4), e2.setXY(s4.getCenter()), this.bufferDegeneratePath(e2, r);
    }
    const m2 = new Na({ vd: e.getDescription() });
    m2.reserve((Math.trunc(this.m_circleTemplate.length / 10) + 4) * n4.getPathSize(t2));
    const o = m2.getImpl();
    return r ? 2 !== this.bufferClosedPath(i2, t2, o, s3, 1) && this.bufferClosedPath(i2, t2, o, s3, -1) : this.bufferOpenPath(i2, t2, o, s3), this.bufferCleanup(m2);
  }
  progress_() {
  }
  bufferCleanup(e, t2 = false) {
    const s3 = t2 ? this.m_tolerance : this.m_smallTolerance;
    return Fa(e, s3, true, !t2, -1, this.m_progressTracker, 0, false);
  }
  calcN() {
    const e = 4;
    if (0 === this.m_densifyDist) return this.m_maxVertexInCompleteCircle;
    const t2 = 1 - this.m_densifyDist * Math.abs(this.m_absDistanceReversed);
    let s3 = e;
    return s3 = t2 < -1 ? e : 2 * Math.PI / Math.acos(t2) + 0.5, s3 < e ? s3 = e : s3 > this.m_maxVertexInCompleteCircle && (s3 = this.m_maxVertexInCompleteCircle), Math.trunc(s3);
  }
  addJoin(e, t2, s3, i2, n4, r, m2) {
    if (this.generateCircleTemplate(), r && (t2.startPath(i2), r = false), e === O.enumBevel) return void (m2 && t2.lineTo(n4));
    if (e === O.enumMiter) {
      const e2 = s3.clone();
      return t2.lineTo(e2), void (m2 && t2.lineTo(n4));
    }
    const o = new ei();
    o.setSub(i2, s3), o.scale(this.m_absDistanceReversed);
    const a3 = new ei();
    a3.setSub(n4, s3), a3.scale(this.m_absDistanceReversed);
    let h = Math.atan2(o.y, o.x) / this.m_dA;
    h < 0 && (h = this.m_circleTemplate.length + h), h = this.m_circleTemplate.length - h;
    let l3 = Math.atan2(a3.y, a3.x) / this.m_dA;
    l3 < 0 && (l3 = this.m_circleTemplate.length + l3), l3 = this.m_circleTemplate.length - l3, l3 < h && (l3 += this.m_circleTemplate.length);
    let c2 = Math.trunc(l3), u = Math.ceil(h), f3 = this.m_circleTemplate[u % this.m_circleTemplate.length].clone();
    f3.scaleAddThis(this.m_absDistance, s3);
    const _ = 10 * this.m_tolerance.total();
    f3.sub(i2).length() < _ && (u += 1), f3 = this.m_circleTemplate[c2 % this.m_circleTemplate.length].clone(), f3.scaleAddThis(this.m_absDistance, s3), f3.sub(n4).length() < _ && (c2 -= 1);
    let g2 = c2 - u;
    g2++;
    for (let d2 = 0, p2 = u % this.m_circleTemplate.length; d2 < g2; d2++, p2 = (p2 + 1) % this.m_circleTemplate.length) f3 = this.m_circleTemplate[p2].clone(), f3.scaleAddThis(this.m_absDistance, s3), t2.lineTo(f3), this.progress_();
    m2 && t2.lineTo(n4);
  }
  bufferClosedPath(e, t2, s3, i2, n4) {
    const r = new Tm(), m2 = r.addPathFromMultiPath(e, t2, true);
    return this.bufferClosedPathImpl(r, m2, s3, i2, n4);
  }
  bufferClosedPathImpl(e, t2, s3, i2, n4) {
    const r = e.getFirstVertex(e.getFirstPath(t2)), m2 = new ee();
    e.queryPoint(r, m2), e.filterClosePoints(this.m_filterTolerance, false, false, false, -1);
    if (e.getPointCount(t2) < 2) return n4 < 0 ? 0 : (this.m_bRoundBuffer && this.addCircle(s3, m2), 2);
    n2(e.getFirstPath(t2) !== bm), n2(e.getFirstVertex(e.getFirstPath(t2)) !== bm);
    const o = e.getXY(e.getFirstVertex(e.getFirstPath(t2))), a3 = new x();
    if (a3.setShift(o.negate()), e.applyTransformation(a3), i2) {
      const i3 = ne(e, t2, n4, true, this.m_absDistance, this.m_filterTolerance, this.m_densifyDist);
      if (n2(1 === i3), e.getPointCount(t2) < 2) return n4 < 0 ? 0 : (this.addCircle(s3, m2), 2);
    }
    const h = 0 !== this.m_joins && e.getVertexDescription().hasAttribute(10);
    this.m_bufferCommands.length = 0;
    const l3 = e.getFirstPath(t2);
    let c2 = e.getFirstVertex(l3), u = 1 === n4 ? e.getPrevVertex(c2) : e.getNextVertex(c2), _ = 1 === n4 ? e.getNextVertex(c2) : e.getPrevVertex(c2), g2 = true;
    const d2 = new ei(), p2 = new ei(), b2 = new ei(), P3 = new ei(), x3 = new ei(), C = new ei(), w = new ei(), T = new ei(), v = this.m_absDistance, S = e.getPathSize(l3), I = new ei(0, 0);
    for (let f3 = 0; f3 < S; f3++) {
      p2.assign(e.getXY(_)), g2 && (d2.assign(e.getXY(c2)), b2.assign(e.getXY(u)), C.setSub(d2, b2), C.normalize(), T.leftPerpendicularOther(C), T.scale(v), P3.setAdd(T, d2));
      const t3 = h && !!(1 & e.getAttributeAsDbl(10, c2, 0));
      x3.setSub(p2, d2), x3.normalize(), w.leftPerpendicularOther(x3), w.scale(v);
      const s4 = new ei();
      s4.setAdd(d2, w);
      const i3 = C.crossProduct(x3), r2 = C.dotProduct(x3);
      if (i3 < 0 || r2 < 0 && i3 < Math.abs(r2) * Number.EPSILON * 8) {
        let e2 = false;
        const n5 = t3 ? 0 : this.m_joins;
        if (1 === n5) {
          const t4 = -i3;
          I.setSub(C, x3), I.scale(this.m_absDistance / t4), I.length() < this.m_miterLimit * this.m_absDistance && (I.addThis(d2), e2 = true), this.m_bufferCommands.push(J(P3, s4, I, e2 ? O.enumMiter : O.enumBevel, this.m_bufferCommands.length + 1));
        } else this.m_bufferCommands.push(J(P3, s4, d2, 0 === n5 ? O.enumArc : O.enumBevel, this.m_bufferCommands.length + 1));
      } else P3.equals(s4) || (this.m_bufferCommands.push(U(P3, d2, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(U(d2, s4, this.m_bufferCommands.length + 1)));
      const m3 = new ei();
      m3.setAdd(p2, w), this.m_bufferCommands.push(J(s4, m3, d2, O.enumLine, this.m_bufferCommands.length + 1)), P3.setCoordsPoint2D(m3), T.setCoordsPoint2D(w), b2.setCoordsPoint2D(d2), d2.setCoordsPoint2D(p2), C.setCoordsPoint2D(x3), u = c2, c2 = _, g2 = false, _ = 1 === n4 ? e.getNextVertex(c2) : e.getPrevVertex(c2);
    }
    return this.m_bufferCommands.at(-1).m_next = 0, this.processBufferCommands(s3), a3.setShift(o), s3.applyTransformationToPath(a3, s3.getPathCount() - 1), 1;
  }
  bufferOpenPath(e, t2, s3, i2) {
    if (this.m_bRoundBuffer) {
      const n5 = new Na({ vd: e.getDescription() });
      return n5.addPath(e, t2, false), n5.addSegmentsFromPath(e, t2, 0, e.getSegmentCountPath(t2), false), this.bufferClosedPath(n5, 0, s3, i2, 1);
    }
    let n4 = 0;
    const r = new Na({ vd: e.getDescription() }), m2 = new ei(0, 0);
    {
      const i3 = new Tm(), o2 = i3.addPathFromMultiPath(e, t2, false), a4 = i3.getFirstVertex(i3.getFirstPath(o2)), h2 = new ee();
      i3.queryPoint(a4, h2), m2.assign(h2.getXY()), i3.filterClosePoints(0, false, false, false, -1);
      if (i3.getPointCount(o2) < 2) return this.m_bRoundBuffer && this.addCircle(s3, h2), 2;
      const l4 = i3.getGeometry(i3.getFirstGeometry());
      r.addPath(l4, 0, false), n4 = r.getPointCount() - 1, r.addSegmentsFromPath(l4, 0, 0, l4.getSegmentCountPath(0) - 1, false);
    }
    const o = new Tm(), a3 = o.addPathFromMultiPath(r, 0, true);
    n2(o.getFirstPath(a3) !== bm), n2(o.getFirstVertex(o.getFirstPath(a3)) !== bm);
    const h = new x();
    h.setShift(m2.negate()), o.applyTransformation(h), this.m_bufferCommands.length = 0;
    const l3 = o.getFirstPath(a3), c2 = 0 !== this.m_joins && o.getVertexDescription().hasAttribute(10);
    let u = o.getFirstVertex(l3), _ = o.getPrevVertex(u), g2 = o.getNextVertex(u), d2 = true;
    const p2 = new ei(), b2 = new ei(), P3 = new ei(), x3 = new ei(), C = new ei(), w = new ei(), T = new ei(), v = new ei(), S = this.m_absDistance, I = o.getPathSize(l3), M = new ei(0, 0);
    for (let f3 = 0; f3 < I; f3++) {
      let e2 = false;
      0 !== f3 && f3 !== n4 || (e2 = true), b2.assign(o.getXY(g2)), d2 && (p2.assign(o.getXY(u)), P3.assign(o.getXY(_)), w.setSub(p2, P3), w.normalize(), v.leftPerpendicularOther(w), v.scale(S), x3.setAdd(v, p2));
      const t3 = c2 && !!(1 & o.getAttributeAsDbl(10, u, 0));
      C.setSub(b2, p2), C.normalize(), T.leftPerpendicularOther(C), T.scale(S);
      const s4 = new ei();
      s4.setAdd(p2, T);
      const i3 = w.crossProduct(C), r2 = w.dotProduct(C);
      if (i3 < 0 || r2 < 0 && i3 < Math.abs(r2) * Number.EPSILON * 8) if (e2) if (0 === this.m_caps) this.m_bufferCommands.push(J(x3, s4, p2, O.enumArc, this.m_bufferCommands.length + 1));
      else if (1 === this.m_caps) this.m_bufferCommands.push(J(x3, s4, p2, O.enumLine, this.m_bufferCommands.length + 1));
      else {
        const e3 = C.mul(this.m_absDistance).negate(), t4 = e3.clone();
        e3.addThis(x3), t4.addThis(s4), this.m_bufferCommands.push(J(x3, e3, p2, O.enumLine, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(J(e3, t4, p2, O.enumLine, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(J(t4, s4, p2, O.enumLine, this.m_bufferCommands.length + 1));
      }
      else {
        let e3 = false;
        const n5 = t3 ? 0 : this.m_joins;
        if (1 === n5) {
          const t4 = -i3;
          M.setSub(w, C), M.scale(this.m_absDistance / t4), M.length() < this.m_miterLimit * this.m_absDistance && (M.addThis(p2), e3 = true), this.m_bufferCommands.push(J(x3, s4, M, e3 ? O.enumMiter : O.enumBevel, this.m_bufferCommands.length + 1));
        } else this.m_bufferCommands.push(J(x3, s4, p2, 0 === n5 ? O.enumArc : O.enumBevel, this.m_bufferCommands.length + 1));
      }
      else x3.equals(s4) || (this.m_bufferCommands.push(U(x3, p2, this.m_bufferCommands.length + 1)), this.m_bufferCommands.push(U(p2, s4, this.m_bufferCommands.length + 1)));
      const m3 = new ei();
      m3.setAdd(b2, T), this.m_bufferCommands.push(J(s4, m3, p2, O.enumLine, this.m_bufferCommands.length + 1)), x3.setCoordsPoint2D(m3), v.setCoordsPoint2D(T), P3.setCoordsPoint2D(p2), p2.setCoordsPoint2D(b2), w.setCoordsPoint2D(C), _ = u, u = g2, d2 = false, g2 = o.getNextVertex(u);
    }
    return this.m_bufferCommands.at(-1).m_next = 0, this.processBufferCommands(s3), h.setShift(m2), s3.applyTransformationToPath(h, s3.getPathCount() - 1), 1;
  }
  processBufferCommands(e) {
    const t2 = this.cleanupBufferCommands();
    let s3 = true, i2 = t2 + 1;
    for (let n4 = t2; i2 !== t2; n4 = i2) {
      const t3 = this.m_bufferCommands[n4];
      i2 = -1 !== t3.m_next ? t3.m_next : (n4 + 1) % this.m_bufferCommands.length, t3.m_type && (s3 && (e.startPath(t3.m_from), s3 = false), t3.m_type & O.enumJoinMask ? this.addJoin(t3.m_type, e, t3.m_center, t3.m_from, t3.m_to, false, true) : e.lineTo(t3.m_to));
    }
  }
  cleanupBufferCommands() {
    this.m_helperArray = Rt(ei, 9);
    let e = 0;
    for (let s3 = 0, i2 = this.m_bufferCommands.length; s3 < i2; ) {
      const t3 = this.m_bufferCommands[s3];
      if (t3.m_type & O.enumConnectionMask) {
        e = s3;
        break;
      }
      s3 = t3.m_next;
    }
    let t2 = e + 1;
    for (let s3 = e; t2 !== e; s3 = t2) {
      const e2 = this.m_bufferCommands[s3];
      t2 = e2.m_next;
      let i2 = 1, n4 = null;
      for (; t2 !== s3 && (n4 = this.m_bufferCommands[t2], !(n4.m_type & O.enumConnectionMask)); ) t2 = n4.m_next, i2++;
      if (1 !== i2 && (e2.m_type & n4.m_type) === O.enumLine) {
        this.m_helperLine1.setStartXY(e2.m_from), this.m_helperLine1.setEndXY(e2.m_to), this.m_helperLine2.setStartXY(n4.m_from), this.m_helperLine2.setEndXY(n4.m_to);
        1 === this.m_helperLine1.intersect(this.m_helperLine2, this.m_helperArray, null, null, this.m_smallTolerance.total()) && (e2.m_to.assign(this.m_helperArray[0]), n4.m_from.assign(this.m_helperArray[0]), e2.m_next = t2);
      }
    }
    return e;
  }
  isDegeneratePath(e, t2) {
    if (1 === e.getPathSize(t2)) return true;
    if (0 === this.m_joins && 0 === this.m_caps) {
      const s3 = new n3();
      if (e.queryPathEnvelope(t2, s3), Math.max(s3.width(), s3.height()) < 0.5 * this.m_densifyDist) return true;
    }
    return false;
  }
  isDegenerateGeometry(e) {
    if (0 === this.m_joins && 0 === this.m_caps) {
      const t2 = new n3();
      if (e.queryEnvelope(t2), Math.max(t2.width(), t2.height()) < 0.5 * this.m_densifyDist) return true;
    }
    return false;
  }
  addCircle(e, t2) {
    const s3 = t2.getXY();
    if (0 !== this.m_circleTemplate.length) {
      let t3 = this.m_circleTemplate[0].clone();
      t3.scaleAddThis(this.m_absDistance, s3), e.startPath(t3);
      for (let i3 = 1, n5 = this.m_circleTemplate.length; i3 < n5; i3++) t3 = this.m_circleTemplate[i3].clone(), t3.scaleAddThis(this.m_absDistance, s3), e.lineTo(t3);
      return;
    }
    const i2 = this.m_circleTemplateSize, n4 = Math.trunc((i2 + 3) / 4), r = 0.5 * Math.PI / n4;
    e.reserve(4 * n4);
    const m2 = Math.cos(r), o = Math.sin(r);
    for (let a3 = 3; a3 >= 0; a3--) {
      const t3 = ei.construct(0, this.m_absDistance);
      switch (a3) {
        case 0:
          for (let i3 = 0; i3 < n4; i3++) e.lineToCoords(t3.x + s3.x, t3.y + s3.y), t3.rotateReverse(m2, o);
          break;
        case 1:
          for (let i3 = 0; i3 < n4; i3++) e.lineToCoords(-t3.y + s3.x, t3.x + s3.y), t3.rotateReverse(m2, o);
          break;
        case 2:
          for (let i3 = 0; i3 < n4; i3++) e.lineToCoords(-t3.x + s3.x, -t3.y + s3.y), t3.rotateReverse(m2, o);
          break;
        default:
          e.startPathCoords(t3.y + s3.x, -t3.x + s3.y);
          for (let i3 = 1; i3 < n4; i3++) t3.rotateReverse(m2, o), e.lineToCoords(t3.y + s3.x, -t3.x + s3.y);
      }
      this.progress_();
    }
  }
  addSquare(e, t2) {
    const s3 = new re({ vd: t2.getDescription() });
    s3.setCoords(t2.getX(), t2.getY(), t2.getX(), t2.getY()), s3.inflateCoords(this.m_absDistance, this.m_absDistance), e.addEnvelope(s3, false);
  }
  setStrongSimple(e) {
    return e.getImpl().setIsSimple(4, this.m_tolerance.total()), e.getImpl().updateOGCFlagsProtected(), e;
  }
};
function $2(e) {
  return Vt(e, 0), e;
}
function ee2(e, t2) {
  return !!e.isEmpty() || Math.min(e.width(), e.height()) > t2;
}
function te(e, t2, s3, i2, n4, r, m2, o) {
  const a3 = e.getXY(s3), h = e.getXY(i2);
  if (a3.equals(h)) return -1;
  const l3 = 0.25 * m2, c2 = 0.25 * m2, u = new ei();
  u.setSub(h, a3);
  const _ = u.length(), g2 = _ * _ * 0.25, d2 = r * r - g2;
  if (d2 <= g2) return -1;
  const p2 = Math.sqrt(d2);
  u.normalize();
  const y = u.clone();
  y.rightPerpendicularThis();
  const b2 = g2 / p2, P3 = b2 <= c2, x3 = ei.lerp(h, a3, 0.5), C = y.clone(), w = b2 - l3;
  C.scaleAddThis(Math.max(0, w), x3);
  y.negate().scaleAddThis(p2, x3);
  const S = 3.61 * $(r - c2), I = C.sub(a3), M = C.sub(h);
  let E2 = false, V = 0;
  const k = Lt(64, 0);
  n2(o === k.length);
  {
    for (let o2 = e.getPrevVertexEx(i2, n4); o2 !== s3; ) {
      if (1 === e.getUserIndex(o2, t2)) return -1;
      if (!e.getXY(o2).equals(h)) break;
      {
        const t3 = e.getPrevVertexEx(o2, n4);
        e.removeVertex(o2, false), o2 = t3;
      }
    }
    const r2 = new ei(), m3 = a3.clone();
    k[V++] = 1;
    for (let o2 = e.getNextVertexEx(s3, n4); o2 !== i2; ) {
      if (1 === e.getUserIndex(o2, t2)) return -1;
      const s4 = e.getXY(o2);
      if (s4.equals(m3)) {
        const t3 = e.getNextVertexEx(o2, n4);
        e.removeVertex(o2, false), o2 = t3;
        continue;
      }
      k[V++] = 0;
      const i3 = new ei();
      if (i3.setSub(s4, a3), i3.dotProduct(y) < 0) return 0;
      (ei.sqrDistance(s4, a3) > S || ei.sqrDistance(s4, h) > S) && (E2 = true);
      let l4 = 0;
      s4.sub(a3).crossProduct(I) >= 0 && (l4 = 1);
      if (s4.sub(h).crossProduct(M) <= 0 && (l4 |= 2), 0 === l4) return 0;
      k[V - 1] = l4, r2.assign(m3), m3.assign(s4), o2 = e.getNextVertexEx(o2, n4);
    }
    if (1 === V) return 0;
    n2(V < k.length), k[V++] = 2;
  }
  let R = true;
  for (let f3 = 1, D = 0; f3 < V; f3++) if (k[f3] !== k[f3 - 1] && (D++, R = D < 3 && (1 === D && 3 === k[f3] || 2 === D && 2 === k[f3]), !R)) return 0;
  if (V > 2 && R && (3 === V || !E2)) {
    let t3 = 0, r2 = e.getNextVertexEx(s3, n4);
    for (P3 || (e.setXY(r2, C), r2 = e.getNextVertexEx(r2, n4)); r2 !== i2; ) {
      const s4 = e.getNextVertexEx(r2, n4);
      e.removeVertex(r2, false), r2 = s4, ++t3;
    }
    return t3;
  }
  if (n2(3 !== V), E2 && V > 3) return 0;
  const B = a3.clone();
  let A = s3;
  const X = a3.clone();
  let Y = 1, F = -1, G = A, j2 = 0;
  for (V = 1; G !== i2; ) {
    G = e.getNextVertexEx(G, n4);
    const t3 = k[V++];
    if (0 === t3) {
      if (G === i2) break;
      continue;
    }
    const s4 = e.getXY(G);
    if (-1 !== F) {
      if (3 & (F & Y & t3)) {
        e.removeVertex(A, true), j2++, A = G, X.setCoordsPoint2D(s4), Y = t3;
        continue;
      }
      if (3 === Y && 0 !== F && 0 !== t3) {
        if (X.setCoordsPoint2D(C), P3 || X.equals(B)) {
          e.removeVertex(A, true), j2++, A = G, X.setCoordsPoint2D(s4), Y = t3;
          continue;
        }
        e.setXY(A, X);
      }
    }
    F = Y, B.setCoordsPoint2D(X), A = G, Y = t3, X.setCoordsPoint2D(s4);
  }
  return j2;
}
function se(e, t2, s3, i2) {
  let n4 = -1;
  const r = new ei(), m2 = new ei(), o = new ei();
  for (let a3 = 0, h = e.getPathSize(i2), l3 = e.getFirstVertex(i2); a3 < h; ++a3) {
    -1 === n4 && (e.queryXY(l3, m2), n4 = e.getPrevVertex(l3), -1 !== n4 && (e.queryXY(n4, r), o.setSub(m2, r), o.normalize()));
    const s4 = e.getNextVertex(l3);
    if (-1 === s4) break;
    const i3 = e.getXY(s4), a4 = i3.sub(m2);
    if (a4.normalize(), -1 !== n4) {
      a4.dotProduct(o) < -0.99 && Math.abs(a4.crossProduct(o)) < 1e-7 && e.setUserIndex(l3, t2, 1);
    }
    n4 = l3, l3 = s4, r.assign(m2), m2.assign(i3), o.assign(a4);
  }
}
function ie(s3, i2, n4, r, m2, o, a3) {
  const h = { stack: [], error: void 0, hasError: false };
  try {
    const t2 = s3.getFirstPath(i2), r2 = s3.createUserIndex();
    n(h, zt(() => {
      s3.removeUserIndex(r2);
    }, false), false), se(s3, r2, i2, t2);
    for (let e = 0; e < 100; ++e) {
      if (0 === s3.getPathSize(t2)) return 1;
      let e2 = s3.getFirstVertex(t2), i3 = s3.getPathSize(t2);
      if (i3 < 3) return 1;
      s3.isClosedPath(t2) || (i3 -= 1);
      const o2 = 64;
      let h2 = 0, l3 = false;
      for (let t3 = 0; t3 < i3 && e2 !== bm; t3++) {
        let c2 = 0, u = e2;
        for (let h3 = 1, l4 = Math.min(o2, i3 - t3); h3 < l4; h3++) if (u = s3.getNextVertexEx(u, n4), h3 > 1) {
          const t4 = te(s3, r2, e2, u, n4, m2, a3, o2);
          if (-1 === t4) break;
          c2 += t4, i3 -= t4;
        }
        if (h2 += c2, l3 = c2 > 0, l3) {
          const t4 = s3.getPrevVertexEx(e2, n4);
          if (-1 !== t4) {
            e2 = t4, i3++;
            continue;
          }
        }
        e2 = s3.getNextVertexEx(e2, n4);
      }
      if (0 === h2) break;
    }
    return s3.filterClosePoints(o, false, false, false, -1), 1;
  } catch (l3) {
    h.error = l3, h.hasError = true;
  } finally {
    s(h);
  }
}
function ne(e, t2, s3, i2, n4, r, m2) {
  return ie(e, t2, s3, i2, n4, r, m2);
}
function re2(e, t2, s3, i2) {
  for (let n4 = 0, r = e.getPathCount(); n4 < r; n4++) {
    const r2 = e.getXY(e.getPathStart(n4));
    r2.x !== s3.xmin && r2.x !== s3.xmax && t2.addPath(e, n4, i2);
  }
}

// node_modules/@arcgis/core/geometry/operators/gx/operatorBuffer.js
var m = class {
  getOperatorType() {
    return 10004;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t2, r) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  executeMany(e, t2, r, n4, s3) {
    return this.executeManyEx(e, t2, r, Number.NaN, 96, n4, s3);
  }
  execute(t2, s3, i2, u) {
    Number.isFinite(i2) || P("Invalid distance for buffer operation");
    const o = new s2([t2]), m2 = [i2], c2 = this.executeMany(o, s3, m2, false, u).next();
    return c2 || b("null buffer output"), c2;
  }
  executeManyEx(e, t2, n4, s3, u, o, m2) {
    if (void 0 !== n4.find((e2) => !Number.isFinite(e2)) && P("Invalid distance for buffer operation"), o) {
      const r = new c(e, t2, n4, s3, u, false, m2);
      return new nl().executeMany(r, t2, m2, 2);
    }
    return new c(e, t2, n4, s3, u, false, m2);
  }
};
var c = class extends t {
  constructor(e, t2, r, n4, s3, i2, m2) {
    super(), this.m_currentUnionEnvelope2D = new n3(), this.m_index = -1, this.m_dindex = -1, this.m_progressTracker = m2, this.m_bufferer = new Z(m2), this.m_inputGeoms = e, this.m_spatialReference = t2, this.m_distances = r, this.m_maxDeviation = n4, this.m_maxVerticesInFullCircle = s3;
  }
  tock() {
    return true;
  }
  getRank() {
    return 1;
  }
  next() {
    {
      let e;
      for (; e = this.m_inputGeoms.next(); ) return j(e), this.m_index = this.m_inputGeoms.getGeometryID(), this.m_dindex + 1 < this.m_distances.length && this.m_dindex++, this.buffer(e, this.m_distances[this.m_dindex]);
      return null;
    }
  }
  getGeometryID() {
    return this.m_index;
  }
  buffer(e, t2) {
    return this.m_bufferer.buffer(e, t2, this.m_spatialReference, 0, 0, 4, this.m_maxDeviation, this.m_maxVerticesInFullCircle);
  }
};
var a2 = new m();
function f2(e, t2, r) {
  return a2.execute(e, t2, r, null);
}
function l2(t2, r, n4, s3, i2, u) {
  const o = a2.executeManyEx(new s2(t2), r, n4, s3, i2, u, null);
  return Array.from(o);
}
function x2() {
  return a2.supportsCurves();
}

export {
  f2 as f,
  l2 as l,
  x2 as x
};
//# sourceMappingURL=chunk-JZ73EOI6.js.map
