import {
  w
} from "./chunk-RT3KF3HK.js";
import "./chunk-DUTUUNDM.js";
import "./chunk-VAZIPZJU.js";
import {
  Cc,
  Ec,
  Gu,
  I,
  Ll,
  Ln,
  Pc,
  Qu,
  Rl,
  Uu,
  Vl,
  Vs,
  X,
  eh,
  fh,
  fs,
  ig,
  kh,
  ls,
  n as n4,
  o,
  qg,
  su,
  us,
  vc,
  wt,
  yc
} from "./chunk-NEFPLHSJ.js";
import "./chunk-VUD5O2WG.js";
import {
  $,
  B2 as B,
  C2 as C,
  Lt,
  Mt,
  P,
  Qt,
  Yt,
  a,
  b,
  ei,
  j,
  j2,
  kt,
  n as n2,
  n2 as n3,
  x2 as x,
  x3 as x2,
  z2 as z
} from "./chunk-67PUVBHA.js";
import {
  n,
  s
} from "./chunk-PPIAYGRE.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/GeodeticDistanceCalculator-D4iQ-_NX.js
var Q = class {
  constructor(t, e, i, s3, n5 = 0, o3 = 4) {
    this.m_ptDistFrom = new ei(), this.m_segStartPt = new ei(), this.m_segEndPt = new ei(), this.m_geodeticLength = new yc(), this.m_az12 = new yc(), this.m_minGeodeticDist = new yc(), this.m_segStartPt3d = new X(), this.m_segEndPt3d = new X(), this.m_sr = s3, this.m_distCurveType = n5, this.m_segCurveType = o3, this.m_inputGCS = this.m_sr.getGCS(), this.m_rpu = this.m_inputGCS.getUnit().getUnitToBaseFactor(), this.m_bIsPannablePcs = 2 === this.m_sr.getCoordinateSystemType() && this.m_sr.isPannable();
    const a3 = Gu();
    this.m_inputGCS.querySpheroidData(a3), this.m_a = a3.majorSemiAxis, this.m_eSquared = a3.e2, this.setPointDistFrom(t), this.setSegmentEndPoints(e, i);
  }
  setSegmentEndPoints(t, e) {
    this.m_segStartPt.assign(t), this.m_segEndPt.assign(e), this.m_bIsPannablePcs || (this.m_segStartPt.mulThis(this.m_rpu), this.m_segEndPt.mulThis(this.m_rpu)), 2 === this.m_segCurveType && (this.m_segStartPt3d.assign(us(this.m_a, this.m_eSquared, this.m_segStartPt)), this.m_segEndPt3d.assign(us(this.m_a, this.m_eSquared, this.m_segEndPt))), this.calculateAndUpdateSegmentLength();
  }
  setPointDistFrom(t) {
    this.m_ptDistFrom.assign(t), this.m_ptDistFrom.scale(this.m_rpu);
  }
  setSegmentCurveType(t) {
    this.m_segCurveType = t;
  }
  setDistanceCurveType(t) {
    this.m_distCurveType = t;
  }
  makeFunctor() {
    return (i) => {
      let s3;
      switch (this.m_segCurveType) {
        case 0:
        case 1:
        case 3: {
          const o3 = { stack: [], error: void 0, hasError: false };
          try {
            const e = n(o3, new yc(), false), n5 = n(o3, new yc(), false);
            vc.geodeticCoordinate(this.m_a, this.m_eSquared, this.m_segStartPt.x, this.m_segStartPt.y, this.m_geodeticLength.val * i, this.m_az12.val, e, n5, this.m_segCurveType), s3 = new ei(e.val, n5.val);
            break;
          } catch (n5) {
            o3.error = n5, o3.hasError = true;
          } finally {
            s(o3);
          }
        }
        case 2: {
          const t = X.lerp(this.m_segStartPt3d, this.m_segEndPt3d, i);
          s3 = fs(this.m_a, this.m_eSquared, t);
          break;
        }
        case 4:
          s3 = ei.lerp(this.m_segStartPt, this.m_segEndPt, i), this.m_bIsPannablePcs && (ig(this.m_sr, 0, [s3], 1), s3.mulThis(this.m_rpu));
          break;
        default:
          b("Invalid curve type");
      }
      return vc.geodeticDistance(this.m_a, this.m_eSquared, this.m_ptDistFrom.x, this.m_ptDistFrom.y, s3.x, s3.y, this.m_minGeodeticDist, null, null, this.m_distCurveType), this.m_minGeodeticDist.val;
    };
  }
  calculateAndUpdateSegmentLength() {
    switch (this.m_segCurveType) {
      case 0:
      case 2:
      case 1:
      case 3:
        vc.geodeticDistance(this.m_a, this.m_eSquared, this.m_segStartPt.x, this.m_segStartPt.y, this.m_segEndPt.x, this.m_segEndPt.y, this.m_geodeticLength, this.m_az12, null, this.m_segCurveType);
        break;
      case 4:
        this.m_geodeticLength.val = ei.distance(this.m_segStartPt, this.m_segEndPt);
        break;
      default:
        b("Invalid curve type");
    }
  }
  [Symbol.dispose]() {
    this.m_geodeticLength[Symbol.dispose](), this.m_az12[Symbol.dispose](), this.m_minGeodeticDist[Symbol.dispose]();
  }
};

// node_modules/@arcgis/core/chunks/OperatorGeodeticArea.js
var Q2 = class {
  constructor(e, t, i, s3, n5 = 100) {
    this.m_startPt = e.clone(), this.m_endPt = t.clone(), this.m_cE2 = s3, this.m_cE = Math.sqrt(this.m_cE2), this.m_c1By2e = 1 / (2 * this.m_cE), this.m_cRpu = i.getGCS().getUnit().getUnitToBaseFactor(), this.isPcs = 2 === i.getCoordinateSystemType(), this.PEProjcs = i.getPECoordSys(), this.m_points = Lt(2 * n5, Number.NaN);
  }
  setSegmentEndPoints(e, t) {
    this.m_startPt.assign(e), this.m_endPt.assign(t);
  }
  makeFunctor() {
    return (e) => {
      const t = [0, 0];
      t[0] = this.m_startPt.x * (1 - e) + this.m_endPt.x * e, t[1] = this.m_startPt.y * (1 - e) + this.m_endPt.y * e, this.isPcs && Cc.projToGeogCenter(this.PEProjcs, 1, t, 0);
      const i = Math.sin(t[1] * this.m_cRpu);
      if (0 === this.m_cE2) return i;
      return -Math.log((1 - this.m_cE * i) / (1 + this.m_cE * i)) * this.m_c1By2e + i / (1 - this.m_cE2 * i * i);
    };
  }
};
function V(e, t, i) {
  const s3 = new n4();
  e.queryEnvelope(s3);
  const n5 = wt(t, s3, true).total(), a3 = t.getPannableExtent();
  a3.xmin = s3.xmin - 10 * n5, a3.xmax = s3.xmax + 10 * n5;
  const r = new I().execute(e, a3, t, i).getImpl().querySegmentIterator();
  r.stripAttributes();
  const h2 = Gu();
  t.querySpheroidData(h2);
  const o3 = h2.e2, m = 0 === o3 ? 2 : 1, l = new ei(0, 0), p = new ei(0, 0), u = new n3(0), c = new Q2(l, p, t, o3, 100);
  for (; r.nextPath(); ) for (; r.hasNextSegment(); ) {
    const e2 = r.nextSegment();
    l.assign(e2.getStartXY()), p.assign(e2.getEndXY()), c.setSegmentEndPoints(l, p);
    const t2 = Ln(6, 0, 1, 1e-12, 1e-15, c.makeFunctor());
    u.pe((p.x - l.x) * t2);
  }
  const g = h2.majorSemiAxis;
  return m * g * g * (1 - o3) * Math.PI * u.getResult() / t.getPannableExtent().width();
}
function Z(e, t, i, s3, n5) {
  const a3 = se(e, t, n5);
  let _ = W(e, a3.first, i, s3, n5), r = 1, h2 = 0, o3 = 0;
  do {
    if (r++, a3.first *= 0.5, a3.first < 50 * t.getTolerance(0)) return _;
    a3.second *= 2, o3 = W(e, a3.first, i, s3, n5), h2 = Math.abs(o3 - _), _ = o3;
  } while (Math.abs(_) > 1 && h2 > 1e-8 * Math.abs(_) && (a3.second < 65e3 && r < 8 || r < 4));
  return o3;
}
function W(e, t, i, s3, n5) {
  const a3 = new o().execute(e, t, 0, 0, n5);
  let _;
  _ = s3 ? new kh().execute(a3, s3, n5) : a3;
  const r = 1 === i.getUnit().getUnitToBaseFactor() ? Math.PI / 180 : 1, o3 = new n4();
  _.queryEnvelope(o3);
  const m = new n4(), p = new n4(), u = new n4();
  m.setCoords({ xmin: o3.xmin, ymin: 75 * r, xmax: o3.xmax, ymax: 90 * r }), p.setCoords({ xmin: o3.xmin, ymin: -60 * r, xmax: o3.xmax, ymax: 75 * r }), u.setCoords({ xmin: o3.xmin, ymin: -90 * r, xmax: o3.xmax, ymax: -60 * r }), m.inflateCoords(0.01 * m.width(), 0), p.inflateCoords(0.01 * p.width(), 0), u.inflateCoords(0.01 * u.width(), 0);
  let c = 0;
  return c += K(_, m, i, n5), c += K(_, p, i, n5), c += K(_, u, i, n5), c;
}
function K(e, t, i, s3) {
  const n5 = new I().execute(e, t, i, s3);
  if (null !== n5 && !n5.isEmpty()) {
    const e2 = new n4();
    n5.queryEnvelope(e2);
    const { first: t2, second: a3 } = ie(i, e2, false), _ = qg(i, t2, null), r = new kh().execute(n5, _, s3).calculateArea2D();
    return a3 && t2.destroy(), r;
  }
  return 0;
}
var ee = [null, null, null, null, null, null, null];
function te(e, t, i) {
  const a3 = e.getUnit().getUnitToBaseFactor(), _ = t.getCenter();
  _.scale(180 * a3 / Math.PI);
  const r = new ei();
  r.x = 0, r.y = 0;
  let h2 = 0;
  if (0 === h2) {
    _.y > 45 ? (r.y = Yt, h2 = 0) : _.y < -45 ? (r.y = -Yt, h2 = 1) : _.x >= 45 && _.x < 135 ? (r.x = Yt, h2 = 2) : _.x >= 135 || _.x < -135 ? (r.x = Yt, h2 = 3) : _.x < -45 && _.x >= -135 ? (r.x = -Yt, h2 = 4) : (r.x = 0, h2 = 5);
    const e2 = a3 * Math.sqrt($(t.xmin - t.xmax) + $(t.ymin - t.ymax)), i2 = r.clone(), s3 = t.getCenter();
    s3.scale(a3), h2 < 2 && (i2.x = s3.x);
    if (ei.distance(i2, s3) + 0.5 * e2 > Yt) return null;
  }
  const o3 = ee[h2];
  if (null !== o3 && o3.getGCS().equalHorizontal(e)) return o3;
  const m = e.getText(), l = r.x, g = r.y, d = 0, E = 0;
  let f = 0, P2 = -1;
  6 !== h2 ? P2 = Ec.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA : (n2(i), f = 0, P2 = Ec.PE_PRJ_CYLINDRICAL_EQAREA);
  const S = Qu("EqualAreaPCS");
  let A;
  P2 === Ec.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA ? A = `PROJCS["${S}",${m},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${d}],PARAMETER["False_Northing",${E}],PARAMETER["Central_Meridian",${l}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]` : P2 === Ec.PE_PRJ_CYLINDRICAL_EQAREA ? A = `PROJCS["${S}",${m},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${d}],PARAMETER["False_Northing",${E}],PARAMETER["Central_Meridian",${l}],PARAMETER["Standard_Parallel_1",${f}],PARAMETER["Latitude_of_Origin",${g}],UNIT["Meter",1.0]]` : b("getEqualAreaPcsFixed");
  const x3 = Uu(A);
  return ee[h2] && ee[h2].destroy(), ee[h2] = x3, x3;
}
function ie(e, t, i) {
  const n5 = te(e, t, i);
  if (null !== n5) return Qt(n5, false);
  const a3 = e.getText(), _ = e.getUnit().getUnitToBaseFactor(), r = (t.xmin + t.width() / 2) * _, h2 = (t.ymin + t.height() / 2) * _, o3 = 0, m = 0;
  let l = 0, g = 0, d = -1;
  t.ymin * _ >= 75 * Math.PI / 180 || t.ymax * _ <= -60 * Math.PI / 180 ? d = Ec.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA : t.ymin > 0 || t.ymax < 0 ? (l = (t.ymin + 1 / 3 * t.height()) * _, g = (t.ymin + 2 / 3 * t.height()) * _, d = Ec.PE_PRJ_ALBERS) : (l = (t.ymin + 2 / 3 * t.height()) * _, d = Ec.PE_PRJ_CYLINDRICAL_EQAREA);
  const E = Qu("EqualAreaPCS");
  let f;
  return d === Ec.PE_PRJ_LAMBERT_AZIMUTHAL_EQAREA ? f = `PROJCS["${E}",${a3},PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${o3}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Latitude_of_Origin",${h2}],UNIT["Meter",1.0]]` : d === Ec.PE_PRJ_ALBERS ? f = `PROJCS["${E}",${a3},PROJECTION["Albers"],PARAMETER["False_Easting",${o3}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Standard_Parallel_2",${g}],PARAMETER["Latitude_of_Origin",${h2}],UNIT["Meter",1.0]]` : d === Ec.PE_PRJ_CYLINDRICAL_EQAREA ? f = `PROJCS["${E}",${a3},PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting",${o3}],PARAMETER["False_Northing",${m}],PARAMETER["Central_Meridian",${r}],PARAMETER["Standard_Parallel_1",${l}],PARAMETER["Latitude_of_Origin",${h2}],UNIT["Meter",1.0]]` : b("getEqualAreaPCSInstance"), Qt(Uu(f), true);
}
function se(e, t, i) {
  const s3 = e.calculateLength2D(), n5 = new w().execute(e, t, i) / 25e3, a3 = s3 / e.getSegmentCount() * 2;
  let _ = Math.min(a3, s3 / n5);
  0 === _ && (_ = 1);
  return Qt(_, s3 / _);
}
var ne = class {
  getOperatorType() {
    return 10314;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, i) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(s3, n5, _) {
    if (0 === n5.getCoordinateSystemType() && P(""), s3.isEmpty() || s3.getDimension() < 2) return 0;
    if (j(s3), s3.getGeometryType() === a.enumEnvelope) {
      const e = new eh();
      return e.addEnvelope(s3, false), this.execute(e, n5, _);
    }
    let r = s3;
    s3.getDescription().getAttributeCount() > 1 && (r = s3.clone(), r.dropAllAttributes());
    const l = new o().execute(r, 0, n5.getTolerance(0), 0, _);
    let p = null;
    const u = n5.getGCS();
    u !== n5 && (p = qg(n5, u));
    let c = new fh().execute(l, n5, false, _);
    return c.isEmpty() ? 0 : (c === s3 && (c = s3.clone()), n5.isPannable() ? V(c, n5, _) : Z(c, n5, u, p, _));
  }
};
function ae() {
  return { m_p_PCS: new ei(), m_factor: Number.NaN, setValues: _e, assign: re };
}
function _e(e, t) {
  this.m_factor = e, this.m_p_PCS.assign(t);
}
function re(e) {
  this.m_factor = e.m_factor, this.m_p_PCS.assign(e.m_p_PCS);
}
var he = class {
  constructor(e, t, i, s3) {
    this.m_ptStart = new X(), this.m_ptEnd = new X(), this.m_ptStart.assign(t), this.m_ptEnd.assign(i), this.m_deltaX = this.m_ptEnd.x - this.m_ptStart.x, this.m_deltaY = this.m_ptEnd.y - this.m_ptStart.y, this.m_e = Math.sqrt(e), this.m_e2 = e, this.m_c1MinusE2 = 1 - e;
    const n5 = Math.sin(s3);
    let a3;
    a3 = 0 === this.m_e2 ? 2 * n5 : n5 * (z(this.m_e * n5) + 1 / (1 - this.m_e2 * n5 * n5)), this.m_baseA = a3;
  }
  setSegmentEndPoints(e, t) {
    this.m_ptStart.assign(e), this.m_ptEnd.assign(t), this.m_deltaX = this.m_ptEnd.x - this.m_ptStart.x, this.m_deltaY = this.m_ptEnd.y - this.m_ptStart.y;
  }
  makeFunctor() {
    return (e) => {
      const t = 1 - e, i = t * this.m_ptStart.x + e * this.m_ptEnd.x, s3 = t * this.m_ptStart.y + e * this.m_ptEnd.y, n5 = t * this.m_ptStart.z + e * this.m_ptEnd.z, a3 = i * i + s3 * s3, _ = n5 / Math.sqrt(n5 * n5 + this.m_c1MinusE2 * this.m_c1MinusE2 * a3);
      let r;
      if (0 === this.m_e2) r = 2 * _;
      else {
        r = _ * (z(this.m_e * _) + 1 / (1 - this.m_e2 * _ * _));
      }
      return (this.m_deltaY * i - this.m_deltaX * s3) / a3 * (r - this.m_baseA);
    };
  }
};
function oe() {
  return { e: Number.NaN, one_p_e: Number.NaN, one_m_e: Number.NaN, one_m_e_2: Number.NaN, atanh_e_over_e: Number.NaN, half_qp: Number.NaN, f: Number.NaN, z: Number.NaN };
}
function me() {
  return { sin_phi: Number.NaN, one_p_sin_phi: Number.NaN, one_m_sin_phi: Number.NaN, one_m_e_2_sin_2_phi: Number.NaN, sin_half_phi_pf: Number.NaN, sin_half_phi_pz: Number.NaN, sin_half_asin_e_sin_phi_pf: Number.NaN, sin_half_asin_e_sin_phi_pz: Number.NaN, atanh_sin_phi: Number.NaN, atanh_esin_phi: Number.NaN, make_negative: false, initialize: le, changeSign: pe, assign: ue, clone: ce };
}
function le(e, t, i, s3) {
  const n5 = 0.5 * e;
  this.sin_phi = Math.sin(e);
  const a3 = t * this.sin_phi, _ = 0.5 * Math.asin(a3);
  this.one_p_sin_phi = 1 + this.sin_phi, this.one_m_sin_phi = 1 - this.sin_phi, this.one_m_e_2_sin_2_phi = (1 + a3) * (1 - a3), this.sin_half_phi_pf = Math.sin(n5 + i), this.sin_half_phi_pz = Math.sin(n5 + s3), this.sin_half_asin_e_sin_phi_pf = Math.sin(_ + i), this.sin_half_asin_e_sin_phi_pz = Math.sin(_ + s3), this.atanh_sin_phi = Math.log(this.sin_half_phi_pf / this.sin_half_phi_pz), this.atanh_esin_phi = Math.log(this.sin_half_asin_e_sin_phi_pf / this.sin_half_asin_e_sin_phi_pz);
}
function pe() {
  this.sin_phi = -this.sin_phi;
  let e = this.one_p_sin_phi;
  this.one_p_sin_phi = this.one_m_sin_phi, this.one_m_sin_phi = e, e = this.sin_half_phi_pf, this.sin_half_phi_pf = this.sin_half_phi_pz, this.sin_half_phi_pz = e, e = this.sin_half_asin_e_sin_phi_pf, this.sin_half_asin_e_sin_phi_pf = this.sin_half_asin_e_sin_phi_pz, this.sin_half_asin_e_sin_phi_pz = e, this.atanh_sin_phi = -this.atanh_sin_phi, this.atanh_esin_phi = -this.atanh_esin_phi;
}
function ue(e) {
  this.sin_phi = e.sin_phi, this.one_p_sin_phi = e.one_p_sin_phi, this.one_m_sin_phi = e.one_m_sin_phi, this.one_m_e_2_sin_2_phi = e.one_m_e_2_sin_2_phi, this.sin_half_phi_pf = e.sin_half_phi_pf, this.sin_half_phi_pz = e.sin_half_phi_pz, this.sin_half_asin_e_sin_phi_pf = e.sin_half_asin_e_sin_phi_pf, this.sin_half_asin_e_sin_phi_pz = e.sin_half_asin_e_sin_phi_pz, this.atanh_sin_phi = e.atanh_sin_phi, this.atanh_esin_phi = e.atanh_esin_phi, this.make_negative = e.make_negative;
}
function ce() {
  return { ...this };
}
var ge = class {
  constructor(t, i, s3) {
    this.m_transformPCS2GCS = null, this.m_scaleToRadians = new x2(), this.m_scaleToDegrees = new x2(), this.m_progressTracker = s3, n2(4 !== i), this.m_curveType = i, this.m_inputSR = t, t && 0 !== t.getCoordinateSystemType() || P(""), this.m_inputGCS = t.getGCS(), this.m_a = 0, this.m_eSquared = 0, this.m_b = 0, this.m_rpu = 0;
  }
  executePolygonGeodeticArea(e) {
    let t, i = e.clone();
    if (i.dropAllAttributes(), e.hasNonLinearSegments()) {
      i = new o().execute(i, 0, this.m_inputSR.getTolerance(0), 0, this.m_progressTracker);
    }
    if (this.m_inputSR.isPannable()) {
      const e2 = new n4();
      i.queryEnvelope(e2);
      const t2 = this.m_inputSR.getPannableExtent();
      if (!t2.containsEnvelope(e2)) {
        const s4 = t2.getCenterX() - e2.getCenterX(), n6 = new x2();
        n6.setShiftCoords(s4, 0), i.applyTransformation(n6), e2.move(s4, 0);
        const a3 = new x();
        t2.queryIntervalX(a3);
        const _ = new x();
        e2.queryIntervalX(_), i = a3.contains(_) ? Vl(i, this.m_inputSR) : new kh().foldInto360RangeGeodetic(i, this.m_inputSR, this.m_curveType);
      }
    }
    if (this.m_transformPCS2GCS ? (i = new fh().execute(i, this.m_inputSR, false, this.m_progressTracker), t = i.createInstance(), Ll(this.m_transformPCS2GCS, i, t, this.m_progressTracker) || (t = new kh().execute(i, this.m_transformPCS2GCS, this.m_progressTracker))) : t = new fh().execute(i, this.m_inputGCS, false, this.m_progressTracker), t.isEmpty()) return 0;
    if (1 === this.m_curveType) {
      const e2 = Gu();
      return this.m_inputGCS.querySpheroidData(e2), this.m_a = e2.majorSemiAxis, this.m_eSquared = e2.e2, this.loxodromeArea(t);
    }
    const s3 = t.getImpl();
    this.m_rpu = this.m_inputGCS.getUnit().getUnitToBaseFactor(), this.m_scaleToRadians.setScale(this.m_rpu), s3.applyTransformation(this.m_scaleToRadians), this.m_scaleToDegrees = this.m_scaleToRadians, this.m_scaleToDegrees.invertThis();
    const n5 = Gu();
    if (this.m_inputGCS.querySpheroidData(n5), this.m_a = n5.majorSemiAxis, this.m_b = n5.minorSemiAxis, this.m_eSquared = n5.e2, 2 === this.m_curveType) return this.executeClippedPolygonGreatEllipticArea(t);
    {
      const e2 = { stack: [], error: void 0, hasError: false };
      try {
        const i2 = Pc.unit(9101), s4 = this.m_inputGCS.getPECoordSys(), n6 = n(e2, s4.cloneAlterUnits(i2), false);
        let a3, _, r = this.executeClippedPolygonGeodeticArea(t, n6, 0), h2 = 0;
        do {
          h2++, a3 = this.executeClippedPolygonGeodeticArea(t, n6, h2), _ = Math.abs(a3 - r), r = a3;
        } while (Math.abs(a3) > 1 && _ > 1e-8 * Math.abs(a3) && h2 < 7);
        return a3;
      } catch (a3) {
        e2.error = a3, e2.hasError = true;
      } finally {
        s(e2);
      }
    }
  }
  executeClippedPolygonGeodeticArea(e, t, i) {
    const s3 = { stack: [], error: void 0, hasError: false };
    try {
      const n5 = new n4();
      e.queryEnvelope(n5);
      const a3 = n(s3, this.getEqualAreaPCSInstance(t, n5), false), _ = e.clone();
      Rl(a3, _);
      const r = 50, h2 = _.getImpl().getAttributeStreamRef(0), o3 = e.getImpl().getAttributeStreamRef(0), m = n(s3, new yc(), false), l = n(s3, new yc(), false), p = 40, u = [0, 0], c = kt(ae, p), d = Lt(p, -1), E = ae(), f = ae();
      let P2, y;
      const R = a3;
      let M2 = _.calculateArea2D();
      const C2 = new n3(0), T = 0.5 * Math.PI, b2 = 1e-10 * Math.abs(M2) + 1e-6, I2 = e.getPathCount();
      let v2, D, G, O;
      const L = new ei(), F = new ei(), J = new ei(), Y = new ei(), U = new ei(), j3 = new ei();
      let B2, H;
      for (D = e.getPathStart(0), v2 = 0; v2 < I2; v2++, D = G) for (G = e.getPathEnd(v2), h2.queryPoint2D(G - 1 << 1, J), o3.queryPoint2D(G - 1 << 1, L), Math.abs(L.y) > T && (L.y = B(T, L.y)), O = D; O < G; O++, J.assign(Y), L.assign(F)) {
        if (h2.queryPoint2D(O << 1, Y), o3.queryPoint2D(O << 1, F), Math.abs(F.y) > T && (F.y = B(T, F.y)), B2 = ei.distance(J, Y), B2 < r || 0 === L.y && 0 === F.y) continue;
        vc.geodeticDistance(this.m_a, this.m_eSquared, L.x, L.y, F.x, F.y, m, l, null, this.m_curveType);
        const e2 = m.val, t2 = l.val;
        for (E.setValues(0, J), f.setValues(1, Y), y = i, c[0].assign(f), d[0] = i, P2 = 0; P2 >= 0; ) {
          H = 0.5 * (E.m_factor + f.m_factor), vc.geodeticCoordinate(this.m_a, this.m_eSquared, L.x, L.y, e2 * H, t2, m, l, this.m_curveType), U.x = m.val, U.y = l.val, u[0] = U.x, u[1] = U.y, Cc.geogToProj(R, 1, u), j3.x = u[0], j3.y = u[1];
          const i2 = -j3.offset(E.m_p_PCS, f.m_p_PCS), s4 = 0.5 * i2 * ei.distance(E.m_p_PCS, f.m_p_PCS);
          if (C2.pe(s4), Math.abs(s4) > b2 || Math.abs(s4) > 0 && y > 0) f.setValues(H, j3), P2++, c[P2].assign(f), Math.abs(s4) <= b2 ? (y--, d[P2 - 1] = y, d[P2] = y) : (y = d[P2 - 1], d[P2] = y);
          else {
            if (P2 <= 0) break;
            E.assign(f), P2--, f.assign(c[P2]), y = d[P2];
          }
        }
      }
      return M2 += C2.getResult(), Math.abs(M2);
    } catch (n5) {
      s3.error = n5, s3.hasError = true;
    } finally {
      s(s3);
    }
  }
  executeClippedPolygonGreatEllipticArea(e) {
    const t = [], i = [], s3 = new ei(), n5 = new ei(), a3 = us(1, this.m_eSquared, new ei(0, 0.5 * Math.PI)), _ = new n3(0), r = new n3(0), h2 = new n3(0), o3 = new X(), m = new X(), l = new n4();
    e.queryLooseEnvelope(l);
    let p = 0;
    l.containsCoords(l.xmin, 0) || (p = Math.abs(l.ymin) < Math.abs(l.ymax) ? l.ymin : l.ymax);
    const u = new he(this.m_eSquared, o3, m, p), c = this.m_a * this.m_a, g = e.getImpl().querySegmentIterator();
    for (g.stripAttributes(); g.nextPath(); ) for (; g.hasNextSegment(); ) {
      const e2 = g.nextSegment();
      s3.assign(e2.getStartXY()), n5.assign(e2.getEndXY()), n5.x - s3.x > Math.PI ? s3.x += 2 * Math.PI : n5.x - s3.x < -Math.PI && (n5.x += 2 * Math.PI), this.splitSegmentCrossingItegralThreshold(e2, t, i);
      for (let i2 of t) o3.assign(us(this.m_a, this.m_eSquared, i2.getStartXY())), m.assign(us(this.m_a, this.m_eSquared, i2.getEndXY())), u.setSegmentEndPoints(o3, m), this.adaptiveIntegrationWithRomberg(u, _);
      for (let t2 of i) {
        let e3 = t2.getStartXY(), i2 = t2.getEndXY(), s4 = p;
        e3.y < 0 && (i2 = Mt(e3, e3 = i2), e3.y = -e3.y, i2.y = -i2.y, s4 = -s4);
        const n6 = us(1, this.m_eSquared, e3), _2 = us(1, this.m_eSquared, i2), o4 = Math.min(e3.y, i2.y), m2 = Vs(this.m_eSquared, e3.x, i2.x, s4, o4);
        r.pe(m2);
        const l2 = Math.abs(Vs(this.m_eSquared, e3.x, i2.x, o4, Yt)), u2 = new X();
        u2.setSub(n6, a3);
        const g2 = new X();
        g2.setSub(_2, a3);
        const d = new X();
        d.setCrossProductVector(u2, g2);
        let E = c * (l2 - 0.5 * d.length());
        E = B(E, i2.x - e3.x), h2.pe(E);
      }
      t.length = 0, i.length = 0;
    }
    return h2.getResult() + c * (0.5 * (1 - this.m_eSquared) * _.getResult() + r.getResult());
  }
  getEqualAreaPCSInstance(e, t) {
    const i = t.getCenterX(), s3 = 0, n5 = 0;
    let a3, _;
    const r = t.height();
    let h2, o3;
    (h2 = t.ymin > 45 * Math.PI / 180 || t.ymax < 45 * -Math.PI / 180) ? a3 = B(0.5 * Math.PI, t.getCenterY()) : (a3 = t.getCenterY(), _ = t.ymin + r * (2 / 3));
    const m = Qu("EqualAreaPCS"), l = e.toString();
    return o3 = h2 ? Pc.fromString(Ec.PE_TYPE_PROJCS, `PROJCS["${m}", ${l}, PROJECTION["Lambert_Azimuthal_Equal_Area"],PARAMETER["False_Easting",${s3}],PARAMETER["False_Northing", ${n5}],PARAMETER["Central_Meridian", ${i}], PARAMETER["Latitude_of_Origin", ${a3}], UNIT["Meter",1.0]]`) : Pc.fromString(Ec.PE_TYPE_PROJCS, `PROJCS["${m}", ${l}, PROJECTION["Cylindrical_Equal_Area"],PARAMETER["False_Easting", ${s3}],PARAMETER["False_Northing", ${n5}],PARAMETER["Central_Meridian", ${i}],PARAMETER["Standard_Parallel_1", ${_}],PARAMETER["Latitude_of_Origin", ${a3}],UNIT["Meter",1.0]]`), o3;
  }
  splitSegmentCrossingItegralThreshold(e, t, i) {
    const s3 = 100, n5 = 20, a3 = n5 * n5, _ = us(this.m_a, this.m_eSquared, new ei(0, Yt)), h2 = us(this.m_a, this.m_eSquared, new ei(0, -Yt)), o3 = this.splitSegmentPassingThroughPole(e);
    for (let m of o3) {
      const e2 = m.getStartXY(), o4 = m.getEndXY(), l = us(this.m_a, this.m_eSquared, e2), p = us(this.m_a, this.m_eSquared, o4), u = new ei(), c = new X();
      let g = X.sqrDistance(_, l), d = X.sqrDistance(l, p);
      if (g <= s3) {
        if (!(d > a3)) {
          i.push(new su({ start: e2, end: o4 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(l.add(c.mul(n5))), u.assign(fs(this.m_a, this.m_eSquared, c)), i.push(new su({ start: e2, end: u })), e2.assign(u);
      }
      if (l.assign(us(this.m_a, this.m_eSquared, e2)), g = X.sqrDistance(_, p), d = X.sqrDistance(l, p), g <= s3) {
        if (!(d > a3)) {
          i.push(new su({ start: e2, end: o4 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(p.sub(c.mul(n5))), u.assign(fs(this.m_a, this.m_eSquared, c)), i.push(new su({ start: u, end: o4 })), o4.assign(u);
      }
      if (l.assign(us(this.m_a, this.m_eSquared, e2)), p.assign(us(this.m_a, this.m_eSquared, o4)), g = X.sqrDistance(h2, l), d = X.sqrDistance(l, p), g <= s3) {
        if (!(d > a3)) {
          i.push(new su({ start: e2, end: o4 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(l.add(c.mul(n5))), u.assign(fs(this.m_a, this.m_eSquared, c)), i.push(new su({ start: e2, end: u })), e2.assign(u);
      }
      if (l.assign(us(this.m_a, this.m_eSquared, e2)), p.assign(us(this.m_a, this.m_eSquared, o4)), g = X.sqrDistance(h2, p), d = X.sqrDistance(l, p), g <= s3) {
        if (!(d > a3)) {
          i.push(new su({ start: e2, end: o4 }));
          continue;
        }
        c.assign(p.sub(l)), c.normalizeThis(), c.assign(p.sub(c.mul(n5))), u.assign(fs(this.m_a, this.m_eSquared, c)), i.push(new su({ start: u, end: o4 })), o4.assign(u);
      }
      t.push(new su({ start: e2, end: o4 }));
    }
  }
  splitSegmentPassingThroughPole(e) {
    const t = { stack: [], error: void 0, hasError: false };
    try {
      const i = [], s3 = new X(), n5 = new X(), a3 = new X(), _ = new ei(), h2 = 20, o3 = 3.124139361, m = 10, l = e.getStartXY(), p = e.getEndXY(), u = n(t, new yc(), false);
      if (vc.geodeticDistance(this.m_a, this.m_eSquared, l.x, l.y, p.x, p.y, u, null, null, 2), Math.abs(p.x - l.x) > o3 && u.val > h2) {
        const e2 = new Q(new ei(0, 90), l.divide(this.m_rpu), p.divide(this.m_rpu), this.m_inputGCS, 2, 2);
        let t2 = ls(e2.makeFunctor(), 0, 1, 1e-10);
        if (t2.second <= m && t2.first > 0 && t2.first < 1) return s3.assign(us(this.m_a, this.m_eSquared, l)), n5.assign(us(this.m_a, this.m_eSquared, p)), j2(s3, n5, t2.first, a3), _.assign(fs(this.m_a, this.m_eSquared, a3)), i.push(new su({ start: l, end: _ })), i.push(new su({ start: _, end: p })), i;
        if (e2.setPointDistFrom(new ei(0, -90)), t2 = ls(e2.makeFunctor(), 0, 1, 1e-10), t2.second <= m && t2.first > 0 && t2.first < 1) return s3.assign(us(this.m_a, this.m_eSquared, l)), n5.assign(us(this.m_a, this.m_eSquared, p)), j2(s3, n5, t2.first, a3), _.assign(fs(this.m_a, this.m_eSquared, a3)), i.push(new su({ start: l, end: _ })), i.push(new su({ start: _, end: p })), i;
      }
      return i.push(new su({ start: l, end: p })), i;
    } catch (i) {
      t.error = i, t.hasError = true;
    } finally {
      s(t);
    }
  }
  adaptiveIntegrationWithRomberg(e, t) {
    const i = e.makeFunctor();
    let s3 = 0, n5 = 1, a3 = i(s3), r = i(n5);
    const h2 = 1e-17, o3 = 1e-14;
    let m = (s3 + n5) / 2, l = i(m), p = Math.abs(l - a3), u = Math.abs(r - l), c = 0;
    for (; c++ < 32 && (p / u < 0.1 || u / p < 0.1); ) p < u ? (t.pe(Ln(5, s3, m, o3, h2, i)), s3 = m, a3 = l) : (t.pe(Ln(5, m, n5, o3, h2, i)), n5 = m, r = l), m = (s3 + n5) / 2, l = Math.abs(i(m)), p = Math.abs(l - a3), u = Math.abs(r - l);
    t.pe(Ln(5, s3, n5, o3, h2, i));
  }
  loxodromeAreaHemi(e, t, i, s3, n5) {
    const a3 = i.clone(), _ = n5.clone();
    let r, h2, o3, m, l, p, u, c, g, d, E, f, P2, S, A, x3;
    return a3.make_negative && a3.changeSign(), _.make_negative && _.changeSign(), E = s3 - t, 1 === Math.abs(a3.sin_phi) || 1 === Math.abs(_.sin_phi) ? e.half_qp * E : a3.sin_phi === _.sin_phi ? (d = 0.5 * e.one_m_e_2 * a3.sin_phi * (1 / a3.one_m_e_2_sin_2_phi + z(e.e * a3.sin_phi)) * E, d) : (A = Math.log(_.sin_half_phi_pf * a3.sin_half_phi_pz / (_.sin_half_phi_pz * a3.sin_half_phi_pf)), x3 = Math.log(_.sin_half_asin_e_sin_phi_pf * a3.sin_half_asin_e_sin_phi_pz / (_.sin_half_asin_e_sin_phi_pz * a3.sin_half_asin_e_sin_phi_pf)), 1 === this.m_eSquared ? (l = 0, r = 0.5 * (A + _.sin_phi / _.one_m_e_2_sin_2_phi - a3.sin_phi / a3.one_m_e_2_sin_2_phi), h2 = 0) : (l = -2 * e.atanh_e_over_e * (Math.log(_.one_p_sin_phi / a3.one_p_sin_phi) - e.e * x3), r = (A - e.e * x3) / e.one_m_e_2, h2 = (Math.log(_.one_m_e_2_sin_2_phi / a3.one_m_e_2_sin_2_phi) + l / e.atanh_e_over_e) / e.one_m_e_2), o3 = -x3 * (a3.atanh_esin_phi + _.atanh_esin_phi), m = 1 / a3.one_m_e_2_sin_2_phi - 1 / _.one_m_e_2_sin_2_phi, p = C(_.one_m_sin_phi / e.one_p_e, e.e) - C(a3.one_m_sin_phi / e.one_p_e, e.e), u = C(_.one_p_sin_phi / e.one_p_e, e.e) - C(a3.one_p_sin_phi / e.one_p_e, e.e), c = C(a3.one_m_sin_phi / -e.one_m_e, e.e) - C(_.one_m_sin_phi / -e.one_m_e, e.e), g = C(a3.one_p_sin_phi / -e.one_m_e, e.e) - C(_.one_p_sin_phi / -e.one_m_e, e.e), d = 0.25 / r * (h2 + o3 + m + l + 0.5 * (p + u + c + g)), d += e.half_qp, f = 0.5 * e.one_m_e_2 * a3.sin_phi * (1 / a3.one_m_e_2_sin_2_phi + z(e.e * a3.sin_phi)), P2 = 0.5 * e.one_m_e_2 * _.sin_phi * (1 / _.one_m_e_2_sin_2_phi + z(e.e * _.sin_phi)), P2 < f && (S = f, f = P2, P2 = S), d < f && (d = f), d > P2 && (d = P2), d *= E, d);
  }
  loxodromeArea(e) {
    const t = Math.PI / 180;
    let i = 0;
    const s3 = oe(), n5 = me(), a3 = me();
    s3.e = Math.sqrt(this.m_eSquared), s3.one_p_e = 1 + s3.e, s3.one_m_e = 1 - s3.e, s3.one_m_e_2 = 1 - this.m_eSquared, s3.atanh_e_over_e = z(s3.e), this.m_eSquared >= 1 ? s3.half_qp = 1 : s3.half_qp = 0.5 * (1 + s3.atanh_e_over_e * s3.one_m_e_2), s3.f = 0.25 * Math.PI, s3.z = 0.75 * Math.PI, a3.initialize(0, s3.e, s3.f, s3.z);
    const _ = e.getPathCount(), r = new ei(), h2 = new ei(), o3 = e.getImpl().getAttributeStreamRef(0);
    for (let m = 0; m < _; m++) {
      const _2 = e.getPathStart(m), l = e.getPathEnd(m);
      if (!(l - _2 <= 1)) {
        o3.queryPoint2D(2 * (l - 1), r);
        for (let e2 = _2; e2 < l; e2++) {
          o3.queryPoint2D(2 * e2, h2);
          const m2 = r.y * t, l2 = h2.y * t;
          if (e2 === _2 ? (n5.initialize(m2, s3.e, s3.f, s3.z), n5.make_negative = false) : n5.assign(a3), a3.initialize(l2, s3.e, s3.f, s3.z), a3.make_negative = false, r.y * h2.y < 0) {
            if (r.y >= 90 && h2.y <= -90 || h2.y >= 90 && r.y <= -90) return Number.NaN;
            const e3 = me();
            e3.initialize(0, s3.e, s3.f, s3.z), e3.make_negative = false;
            const _3 = n5.atanh_sin_phi - s3.e * n5.atanh_esin_phi, o4 = a3.atanh_sin_phi - s3.e * a3.atanh_esin_phi, l3 = (o4 * r.x - _3 * h2.x) / (o4 - _3);
            m2 < 0 ? (n5.make_negative = true, i -= this.loxodromeAreaHemi(s3, r.x * t, n5, l3 * t, e3), n5.make_negative = false, i += this.loxodromeAreaHemi(s3, l3 * t, e3, h2.x * t, a3)) : (i += this.loxodromeAreaHemi(s3, r.x * t, n5, l3 * t, e3), a3.make_negative = true, i -= this.loxodromeAreaHemi(s3, l3 * t, e3, h2.x * t, a3), a3.make_negative = false);
          } else r.y >= 0 ? i += this.loxodromeAreaHemi(s3, r.x * t, n5, h2.x * t, a3) : (n5.make_negative = true, a3.make_negative = true, i -= this.loxodromeAreaHemi(s3, r.x * t, n5, h2.x * t, a3), n5.make_negative = false, a3.make_negative = false);
          r.assign(h2);
        }
      }
    }
    return this.m_a * i * this.m_a;
  }
  calculate(e) {
    if (e.isEmpty() || e.getDimension() < 2) return 0;
    if (e.getGeometryType() === a.enumEnvelope) {
      const t = new eh();
      return t.addEnvelope(e, false), this.calculate(t);
    }
    return this.m_inputSR !== this.m_inputGCS && null === this.m_transformPCS2GCS && (this.m_transformPCS2GCS = qg(this.m_inputSR, this.m_inputGCS, null)), this.executePolygonGeodeticArea(e);
  }
};
var de = class {
  getOperatorType() {
    return 10311;
  }
  supportsCurves() {
    return true;
  }
  accelerateGeometry(e, t, i) {
    return false;
  }
  canAccelerateGeometry(e) {
    return false;
  }
  execute(e, i, s3, n5) {
    if (j(e), 4 === s3) return new ne().execute(e, i, n5);
    return new ge(i, s3, n5).calculate(e);
  }
};
export {
  de as OperatorGeodeticArea
};
//# sourceMappingURL=OperatorGeodeticArea-63RGNI2J.js.map
