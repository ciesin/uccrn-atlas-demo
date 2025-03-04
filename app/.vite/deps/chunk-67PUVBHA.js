// node_modules/@arcgis/core/chunks/Geometry.js
function e(e2) {
  switch (e2) {
    case 1:
      return "Unknown error";
    case 2:
      return "Corrupted geometry";
    case 3:
      return "Empty geometry";
    case 4:
      return "Math singularity";
    case 5:
      return "Buffer is too small";
    case 6:
      return "Invalid shape type";
    case 7:
      return "Projection out of supported range";
    case 8:
      return "Non simple geometry";
    case 9:
      return "Cannot calculate geodesic";
    case 10:
      return "Notation conversion";
    case 11:
      return "Missing grid file";
    case 12:
      return "Invalid call";
    case 13:
      return "Internal error";
    case 14:
      return "Not implemented";
    case 15:
      return "IO error";
    case 16:
      return "Invalid 3D";
    case 17:
      return "An ambiguous geography edge with antipodal points";
    case 18:
      return "Geocentric coordinates require ellipsoidal height";
    case 19:
      return "Geography cannot be projected into a gnomonic plane or a result of an operation cannot fit into a gnomonic plane";
    case 20:
      return "Geometry is too large to be exported in to a given format";
    case 22:
      return "Operation is canceled by the user";
    case 21:
      return "The operation, such as projection or geodetic computation, cannot be performed without pe-wasm loaded";
    default:
      return "unknown error";
  }
}
function n(e2, n4) {
  try {
    if (!e2) throw new Error(n4);
  } catch (t2) {
    throw t2;
  }
}
var t = class extends Error {
  constructor(e2, n4) {
    super(n4), this.m_AdditionalMessage = n4, this.m_ErrorType = e2, this.name = "GeometryError";
  }
  what() {
    return e(this.m_ErrorType);
  }
  additionalMessage() {
    return this.m_AdditionalMessage ? this.m_AdditionalMessage : "";
  }
  code() {
    return this.m_ErrorType;
  }
};
var r = class extends t {
  constructor(e2) {
    super(2, e2), this.name = "CorruptedGeometryError";
  }
};
var o = class extends t {
  constructor(e2) {
    super(3, e2), this.name = "EmptyGeometryError";
  }
};
var i = class extends t {
  constructor(e2) {
    super(4, e2), this.name = "MathSingularityError";
  }
};
var u = class extends t {
  constructor(e2) {
    super(21, e2), this.name = "ProjectionEngineNotLoadedError";
  }
};
var s = class extends t {
  constructor(e2) {
    super(8, e2), this.name = "NonSimpleGeometryError";
  }
};
var a;
!function(e2) {
  e2[e2.enumUnknown = 0] = "enumUnknown", e2[e2.enumPoint = 513] = "enumPoint", e2[e2.enumLine = 5122] = "enumLine", e2[e2.enumBezier = 5123] = "enumBezier", e2[e2.enumEllipticArc = 5124] = "enumEllipticArc", e2[e2.enumEnvelope = 3077] = "enumEnvelope", e2[e2.enumMultiPoint = 8710] = "enumMultiPoint", e2[e2.enumPolyline = 25607] = "enumPolyline", e2[e2.enumPolygon = 27656] = "enumPolygon", e2[e2.enumMultipatch = 40969] = "enumMultipatch", e2[e2.enumGeometryCollection = 3594] = "enumGeometryCollection", e2[e2.enumRationalBezier2 = 5134] = "enumRationalBezier2", e2[e2.enumBezier2 = 5135] = "enumBezier2", e2[e2.enumRationalBezier23d = 5392] = "enumRationalBezier23d", e2[e2.enumGreatArc3d = 5393] = "enumGreatArc3d";
}(a || (a = {}));
var c = [0, 0, 1, 1, 1, 2, 0, 1, 2, 3, -1, -1, -1, -1, 1, 1];
function m(e2) {
  return c[15 & e2];
}
function l(e2) {
  return !!(512 & e2);
}
function p(e2) {
  return !!(1024 & e2);
}
function d(e2) {
  return !!(2048 & e2);
}
function f(e2) {
  return !!(4096 & e2);
}
function y(e2) {
  return !!(8192 & e2);
}
function h(e2) {
  return !!(16384 & e2);
}
function g(e2) {
  return !!(32768 & e2);
}
function w(e2) {
  const n4 = e2.getGeometryType();
  return y(n4) ? e2.getPointCount() : e2.isEmpty() ? 0 : n4 === a.enumEnvelope ? 4 : n4 === a.enumPoint ? 1 : f(n4) ? 2 : void b("missing type");
}
function E(e2) {
  const n4 = e2.getGeometryType();
  if (h(n4)) return e2.hasNonLinearSegments();
  if (n4 === a.enumGeometryCollection) {
    const n5 = e2;
    for (let e3 = 0, t2 = n5.getGeometryCount(); e3 < t2; e3++) if (E(n5.getGeometry(e3))) return true;
    return false;
  }
  return !!f(n4) && n4 !== a.enumLine;
}
function G(e2) {
  throw new u(e2);
}
function v(e2) {
  throw new r(e2);
}
function P(e2) {
  throw new Error(e2);
}
function M(e2) {
  throw new i(e2);
}
function B() {
  P("Geometry type is not supported for 3D operations.");
}
function C(e2) {
  throw new t(12, e2);
}
function x(e2) {
  throw new o(e2);
}
function z(e2) {
  throw new t(14, e2);
}
function A(e2) {
  throw new Error(e2);
}
function b(e2) {
  throw new t(13, e2);
}
function T(e2) {
  throw new Error(e2);
}
function k(e2) {
  throw new s(e2);
}
function _() {
  z("Operation does not support curves.");
}
function N(e2) {
  e2 && E(e2) && _();
}
function j(e2) {
  e2 && g(e2.getGeometryType()) && z("Unsupported geometry type.");
}
function I(e2) {
  e2 === a.enumGeometryCollection && P("Geometry_collection instances are not supported in this operation");
}
function L(e2) {
  I(e2.getGeometryType());
}
function R(e2) {
  P(`bad wkid: ${e2}`);
}
function U(e2) {
  let n4 = "bad wkt: ";
  n4 += e2, n4 += "...", P(n4);
}
function D(e2, n4) {
  e2 || P(n4);
}

// node_modules/@arcgis/core/chunks/Point2D.js
var n2 = class _n {
  constructor(t2) {
    this.sum = t2, this.compensation = 0;
  }
  assign(t2) {
    return this.compensation = t2.compensation, this.sum = t2.sum, this;
  }
  reset() {
    this.sum = this.compensation = 0;
  }
  resetToStart(t2) {
    this.sum = t2, this.compensation = 0;
  }
  normalize() {
    const t2 = [Number.NaN];
    this.sum = lt(this.sum, this.compensation, t2), this.compensation = t2[0];
  }
  add(t2) {
    const s2 = this.sum + t2;
    let i2;
    if (Math.abs(this.sum) >= Math.abs(t2)) {
      const e2 = this.sum - s2 + t2;
      i2 = this.compensation + e2;
    } else {
      const e2 = t2 - s2 + this.sum;
      i2 = this.compensation + e2;
    }
    this.sum = s2, this.compensation = i2;
  }
  sub(t2) {
    this.add(-t2);
  }
  addProduct(t2, s2) {
    const i2 = [0], e2 = ut(t2, s2, i2);
    this.add(e2), this.add(i2[0]);
  }
  mul(t2) {
    const s2 = new _n(0);
    s2.addProduct(this.sum, t2), s2.addProduct(this.compensation, t2), this.assign(s2);
  }
  getResult() {
    return this.sum + this.compensation;
  }
  pe(t2) {
    return this.add(t2), this;
  }
  me(t2) {
    return this.add(-t2), this;
  }
};
var r2 = 0x00000000ffffffffn;
var u2 = 0x0000ffffn;
var h2 = 0x000000ffn;
var a2 = 0x0fn;
var o2 = 0xffff0000n;
var m2 = 0xff00n;
var l2 = 0xf0n;
var c2 = [5, 1, 2, 1, 3, 1, 2, 1, 4, 1, 2, 1, 3, 1, 2, 1];
var f2 = [-1, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];
function _2(t2) {
  let s2 = 0;
  return t2 & u2 || (s2 += 16, t2 >>= 16n), t2 & h2 || (s2 += 8, t2 >>= 8n), t2 & a2 || (s2 += 4, t2 >>= 4n), s2 + c2[Number(BigInt.asUintN(4, t2))];
}
function v2(t2) {
  let s2 = 0;
  return t2 & o2 && (s2 += 16, t2 >>= 16n), t2 & m2 && (s2 += 8, t2 >>= 8n), t2 & l2 && (s2 += 4, t2 >>= 4n), s2 + f2[Number(BigInt.asUintN(4, t2))] + 1;
}
function b2(t2) {
  let s2 = 0;
  return t2 & r2 || (s2 = 32, t2 >>= 32n), s2 + _2(BigInt.asUintN(32, t2));
}
function d2(t2) {
  let s2 = 0;
  return 0xffffffff00000000n & t2 && (s2 = 32, t2 >>= 32n), s2 + v2(t2);
}
var x2 = class _x {
  constructor(t2, s2) {
    if (this.m_EnvelopeType = 1, void 0 !== t2) {
      if (t2 instanceof _x) return this.vmin = t2.vmin, void (this.vmax = t2.vmax);
      this.vmin = t2, this.vmax = s2, this.normalize();
    } else this.setEmpty();
  }
  static construct(t2, s2) {
    return new _x(t2, s2);
  }
  static constructEmpty() {
    return new _x();
  }
  setCoords(t2, s2) {
    this.vmin = t2, this.vmax = s2, this.normalize();
  }
  setCoordsFromEnvelope(t2) {
    this.vmin = t2.vmin, this.vmax = t2.vmax;
  }
  setEmpty() {
    this.vmin = Number.NaN, this.vmax = Number.NaN;
  }
  getCenter() {
    return 0.5 * (this.vmin + this.vmax);
  }
  equalsRange(t2, s2) {
    return rs(this.vmin, t2) && rs(this.vmax, s2);
  }
  equals(t2, s2) {
    return !(!this.isEmpty() || !t2.isEmpty()) || (void 0 !== s2 ? Math.abs(this.vmin - t2.vmin) <= s2 && Math.abs(this.vmax - t2.vmax) <= s2 : this.vmin === t2.vmin && this.vmax === t2.vmax);
  }
  width() {
    return this.vmax - this.vmin;
  }
  isEmpty() {
    return Number.isNaN(this.vmin) || Number.isNaN(this.vmax);
  }
  isZero() {
    return this.vmin === this.vmax;
  }
  setInfinite() {
    this.vmin = Number.NEGATIVE_INFINITY, this.vmax = Number.POSITIVE_INFINITY;
  }
  move(t2) {
    this.isEmpty() || (this.vmin += t2, this.vmax += t2);
  }
  contains(t2) {
    return t2.vmin >= this.vmin && t2.vmax <= this.vmax;
  }
  containsCoordinate(t2) {
    return t2 >= this.vmin && t2 <= this.vmax;
  }
  containsRightExclusive(t2) {
    return t2 >= this.vmin && t2 < this.vmax;
  }
  containsExclusiveCoordinate(t2) {
    return t2 > this.vmin && t2 < this.vmax;
  }
  containsExclusive(t2) {
    return t2.vmin > this.vmin && t2.vmax < this.vmax;
  }
  isIntersecting(t2) {
    return this.vmin <= t2.vmin ? this.vmax >= t2.vmin : t2.vmax >= this.vmin;
  }
  mergeCoordinate(t2) {
    if (this.isEmpty()) return this.vmin = t2, void (this.vmax = t2);
    this.mergeNeCoordinate(t2);
  }
  merge(t2) {
    if (t2.isEmpty()) return;
    const s2 = t2.vmin, i2 = t2.vmax;
    this.mergeCoordinate(s2), this.mergeCoordinate(i2);
  }
  mergeNe(t2) {
    const s2 = t2.vmin, i2 = t2.vmax;
    this.mergeNeCoordinate(s2), this.mergeNeCoordinate(i2);
  }
  mergeNeCoordinate(t2) {
    t2 < this.vmin ? this.vmin = t2 : t2 > this.vmax && (this.vmax = t2);
  }
  intersect(t2) {
    this.isEmpty() || t2.isEmpty() ? this.setEmpty() : (this.vmin < t2.vmin && (this.vmin = t2.vmin), this.vmax > t2.vmax && (this.vmax = t2.vmax), this.vmin > this.vmax && this.setEmpty());
  }
  inflate(t2) {
    this.isEmpty() || (this.vmin -= t2, this.vmax += t2, this.vmax < this.vmin && this.setEmpty());
  }
  normalize() {
    this.vmin <= this.vmax || (this.vmin > this.vmax ? this.vmax = Mt(this.vmin, this.vmin = this.vmax) : this.setEmpty());
  }
  isValid() {
    return this.isEmpty() || this.vmin <= this.vmax;
  }
  snapClip(t2) {
    return ks(t2, this.vmin, this.vmax);
  }
  calculateToleranceFromEnvelope() {
    if (this.isEmpty()) return Cs();
    return (Math.abs(this.vmin) + Math.abs(this.vmax) + 1) * Cs();
  }
  static unit() {
    return N2;
  }
  normalizeNoNAN() {
    this.vmin > this.vmax && (this.vmax = Mt(this.vmin, this.vmin = this.vmax));
  }
  setCoordsNoNAN(t2, s2) {
    this.vmin = t2, this.vmax = s2, this.normalizeNoNAN();
  }
  clone() {
    return new _x(this.vmin, this.vmax);
  }
};
var N2 = new x2(0, 1);
var p2 = class _p {
  static getNAN() {
    return new _p(Number.NaN);
  }
  constructor(t2, s2) {
    this.m_value = t2 ?? 0, this.m_eps = s2 ?? 0;
  }
  [Symbol.toPrimitive](t2) {
    return this;
  }
  clone() {
    return new _p(this.m_value, this.m_eps);
  }
  assign(t2) {
    return this.m_value = t2.m_value, this.m_eps = t2.m_eps, this;
  }
  scaleError(t2) {
    this.m_eps *= t2;
  }
  setError(t2) {
    this.m_eps = t2;
  }
  set(t2, s2) {
    return this.m_value = t2, this.m_eps = s2 ?? 0, this;
  }
  setWithEps(t2, s2) {
    return void 0 === s2 && (s2 = 1), this.m_value = t2, this.m_eps = _p.ulp(t2) * s2, this;
  }
  setE(t2) {
    return this.m_value = t2.m_value, this.m_eps = t2.m_eps, this;
  }
  precise() {
    return new _p(this.m_value);
  }
  value() {
    return this.m_value;
  }
  toDouble() {
    return this.m_value;
  }
  eps() {
    return this.m_eps;
  }
  resetError() {
    return this.m_eps = 0, this;
  }
  absThis() {
    return this.m_value = Math.abs(this.m_value), this;
  }
  add(t2) {
    return this.clone().addThis(t2);
  }
  addE(t2) {
    return this.clone().addThisE(t2);
  }
  addThisE(t2) {
    const s2 = this.m_value + t2.m_value, i2 = this.m_eps + t2.m_eps + _p.ulp(s2);
    return this.m_value = s2, this.m_eps = i2, this;
  }
  addThis(t2) {
    const s2 = this.m_value + t2, i2 = this.m_eps + _p.ulp(s2);
    return this.m_value = s2, this.m_eps = i2, this;
  }
  subE(t2) {
    return this.clone().subThisE(t2);
  }
  sub(t2) {
    return this.clone().subThis(t2);
  }
  subThisE(t2) {
    const s2 = this.m_value - t2.m_value, i2 = this.m_eps + t2.m_eps + _p.ulp(s2);
    return this.m_value = s2, this.m_eps = i2, this;
  }
  subThis(t2) {
    const s2 = this.m_value - t2, i2 = this.m_eps + _p.ulp(s2);
    return this.m_value = s2, this.m_eps = i2, this;
  }
  setAddE(t2, s2) {
    return this.m_value = t2.m_value + s2.m_value, this.m_eps = t2.m_eps + s2.m_eps + _p.ulp(this.m_value), this;
  }
  setAdd(t2, s2) {
    return this.m_value = t2 + s2, this.m_eps = _p.ulp(this.m_value), this;
  }
  setAddEN(t2, s2) {
    return this.m_value = t2.m_value + s2, this.m_eps = t2.m_eps + _p.ulp(this.m_value), this;
  }
  setAddNE(t2, s2) {
    return this.m_value = t2 + s2.m_value, this.m_eps = s2.m_eps + _p.ulp(this.m_value), this;
  }
  setSubE(t2, s2) {
    return this.m_value = t2.m_value - s2.m_value, this.m_eps = t2.m_eps + s2.m_eps + _p.ulp(this.m_value), this;
  }
  setSub(t2, s2) {
    return this.m_value = t2 - s2, this.m_eps = _p.ulp(this.m_value), this;
  }
  setSubEN(t2, s2) {
    return this.m_value = t2.m_value - s2, this.m_eps = t2.m_eps + _p.ulp(this.m_value), this;
  }
  setSubNE(t2, s2) {
    return this.m_value = t2 - s2.m_value, this.m_eps = s2.m_eps + _p.ulp(this.m_value), this;
  }
  mulThisE(t2) {
    const s2 = this.m_value * t2.m_value;
    return this.m_eps = this.m_eps * Math.abs(t2.m_value) + t2.m_eps * Math.abs(this.m_value) + this.m_eps * t2.m_eps + _p.ulp(s2), this.m_value = s2, this;
  }
  mulThis(t2) {
    const s2 = this.m_value * t2;
    return this.m_eps = this.m_eps * Math.abs(t2) + _p.ulp(s2), this.m_value = s2, this;
  }
  mul(t2) {
    return this.clone().mulThis(t2);
  }
  mulE(t2) {
    return this.clone().mulThisE(t2);
  }
  setMulE(t2, s2) {
    const i2 = t2.m_value * s2.m_value;
    return this.m_eps = t2.m_eps * Math.abs(s2.m_value) + s2.m_eps * Math.abs(t2.m_value) + t2.m_eps * s2.m_eps + _p.ulp(i2), this.m_value = i2, this;
  }
  setMul(t2, s2) {
    return this.m_value = t2 * s2, this.m_eps = _p.ulp(this.m_value), this;
  }
  setMulEN(t2, s2) {
    return this.setE(t2), this.mulThis(s2);
  }
  setMulNE(t2, s2) {
    return this.setE(s2), this.mulThis(t2);
  }
  mulThisByPower2(t2) {
    return this.m_value *= t2, this.m_eps *= Math.abs(t2), this;
  }
  static st_mulByPower2(t2, s2) {
    return new _p(t2.m_value, t2.m_eps).mulThisByPower2(s2);
  }
  divE(t2) {
    return this.clone().divThisE(t2);
  }
  divThisE(t2) {
    const s2 = Math.abs(t2.m_value), i2 = this.m_value / t2.m_value;
    let e2 = (this.m_eps + Math.abs(i2) * t2.m_eps) / s2;
    if (t2.m_eps > 0.01 * s2) {
      const i3 = t2.m_eps / s2;
      e2 *= 1 + (1 + i3) * i3;
    }
    return this.m_value = i2, this.m_eps = e2 + _p.ulp(i2), this;
  }
  divThis(t2) {
    const s2 = Math.abs(t2);
    return this.m_value /= t2, this.m_eps = this.m_eps / s2 + _p.ulp(this.m_value), this;
  }
  setDivE(t2, s2) {
    return this.setE(t2), this.divThisE(s2);
  }
  setDiv(t2, s2) {
    return this.m_value = t2 / s2, this.m_eps = _p.ulp(this.m_value), this;
  }
  setDivEN(t2, s2) {
    return this.setE(t2), this.divThis(s2);
  }
  setDivNE(t2, s2) {
    return this.set(t2), this.divThisE(s2);
  }
  divThisByPower2(t2) {
    return this.m_value /= t2, this.m_eps /= Math.abs(t2), this;
  }
  invThis() {
    return this.setE(w2.clone().divThisE(this)), this;
  }
  sqrt() {
    return this.clone().sqrtThis();
  }
  sqrtThis() {
    let t2, s2;
    return this.m_value >= 0 ? (t2 = Math.sqrt(this.m_value), s2 = this.m_value > 10 * this.m_eps ? 0.5 * this.m_eps / t2 : this.m_value > this.m_eps ? t2 - Math.sqrt(this.m_value - this.m_eps) : Math.max(t2, Math.sqrt(this.m_value + this.m_eps) - t2), s2 += _p.ulp(t2)) : this.m_value < -this.m_eps ? (t2 = Number.NaN, s2 = Number.NaN) : (t2 = 0, s2 = Math.sqrt(this.m_eps)), this.m_value = t2, this.m_eps = s2, this;
  }
  sqr() {
    return this.clone().sqrThis();
  }
  sqrThis() {
    const t2 = this.m_value * this.m_value;
    return this.m_eps = 2 * this.m_eps * Math.abs(this.m_value) + this.m_eps * this.m_eps + _p.ulp(t2), this.m_value = t2, this;
  }
  setSin(t2) {
    const s2 = Math.sin(t2.m_value), i2 = Math.cos(t2.m_value);
    this.m_value = s2;
    const e2 = Math.abs(s2), n4 = Math.abs(t2.value());
    return this.m_eps = (Math.abs(i2) + 0.5 * e2 * t2.m_eps) * t2.m_eps + _p.ulp(e2 + n4), this;
  }
  static ulp(t2) {
    let s2 = ts(t2);
    const i2 = ((0x7ff0000000000000n & s2) >> 52n) - 1075n;
    return i2 > -1023n ? (s2 = i2 + 0x3ffn << 52n, ss(s2)) : 0 === t2 ? 0 : Number.MIN_VALUE;
  }
  setCos(t2) {
    const s2 = Math.sin(t2.m_value), i2 = Math.cos(t2.m_value);
    this.m_value = i2;
    const e2 = Math.abs(i2), n4 = Math.abs(t2.value());
    return this.m_eps = (Math.abs(s2) + 0.5 * e2 * t2.m_eps) * t2.m_eps + _p.ulp(e2 + n4), this;
  }
  static st_cosAndSin(t2, s2, i2) {
    const e2 = Math.sin(t2.m_value), n4 = Math.cos(t2.m_value);
    i2.m_value = e2, s2.m_value = n4;
    const r3 = Math.abs(e2), u4 = Math.abs(n4), h3 = Math.abs(t2.value());
    i2.m_eps = (Math.abs(n4) + 0.5 * r3 * t2.m_eps) * t2.m_eps + _p.ulp(r3 + h3), s2.m_eps = (Math.abs(e2) + 0.5 * u4 * t2.m_eps) * t2.m_eps + _p.ulp(u4 + h3);
  }
  negate() {
    return this.clone().negateThis();
  }
  negateThis() {
    return this.m_value = -this.m_value, this;
  }
  setAbs() {
    return this.m_value = Math.abs(this.m_value), this;
  }
  isInInterval(t2) {
    return x2.construct(this.m_value - this.m_eps, this.m_value + this.m_eps).isIntersecting(t2);
  }
  eq(t2) {
    return Math.abs(this.m_value - t2.m_value) <= this.m_eps + t2.m_eps;
  }
  ne(t2) {
    return !this.eq(t2);
  }
  gt(t2) {
    return this.m_value - t2.m_value > this.m_eps + t2.m_eps;
  }
  lt(t2) {
    return t2.m_value - this.m_value > this.m_eps + t2.m_eps;
  }
  ge(t2) {
    return !this.lt(t2);
  }
  le(t2) {
    return !this.gt(t2);
  }
  tolEQ(t2, s2) {
    return Math.abs(this.m_value - t2.m_value) <= s2 || this.eq(t2);
  }
  tolNE(t2, s2) {
    return !this.tolEQ(t2, s2);
  }
  tolGT(t2, s2) {
    return this.m_value - t2.m_value > s2 && this.gt(t2);
  }
  tolLT(t2, s2) {
    return t2.m_value - this.m_value > s2 && this.lt(t2);
  }
  tolGE(t2, s2) {
    return !this.tolLT(t2, s2);
  }
  tolLE(t2, s2) {
    return !this.tolGT(t2, s2);
  }
  isZero() {
    return Math.abs(this.m_value) <= this.m_eps;
  }
  isFuzzyZero() {
    return this.isZero() && 0 !== this.m_eps;
  }
  tolIsZero(t2) {
    return Math.abs(this.m_value) <= Math.max(this.m_eps, t2);
  }
  setPi() {
    this.setE(E2);
  }
  setEuler() {
    this.set(2.718281828459045, M2());
  }
  static size() {
    return 1;
  }
};
function y2(t2, s2) {
  const i2 = is(t2), e2 = is(s2), n4 = 53 - b2(i2), r3 = 53 - b2(e2);
  return (n4 >= 0 ? n4 : 0) + (r3 >= 0 ? r3 : 0) <= 52;
}
function T2(t2, s2) {
  const i2 = t2 + s2;
  return i2 - t2 === s2 && i2 - s2 === t2;
}
function g2(t2, s2) {
  const i2 = t2 - s2;
  return t2 - i2 === s2 && s2 + i2 === t2;
}
function M2() {
  return Ss();
}
p2.dimensions = 1;
var E2 = new p2(Math.PI, 0.5 * M2());
var I2 = new p2(0, 0);
var w2 = new p2(1, 0);
var D2 = new p2(4, 0);
function A2(t2, s2, i2) {
  return t2.addE(s2.subE(t2).mulE(i2));
}
function P2(t2, s2, i2) {
  return s2.subE(s2.subE(t2).mulE(w2.subE(i2)));
}
function q(t2) {
  return Math.atanh(t2);
}
function z2(t2) {
  let s2;
  if (0 === t2) s2 = 1;
  else if (Math.abs(t2) > 0.01) s2 = q(t2) / t2;
  else {
    let i2;
    const e2 = -36.841361487904734;
    s2 = 0;
    const n4 = t2 * t2;
    for (let t3 = 2 * Math.trunc(e2 / Math.log(n4) + 2.5) - 1; t3 > 1; t3 -= 2) i2 = 1 / t3, s2 = (s2 + i2) * n4;
    s2 += 1;
  }
  return s2;
}
function Z(t2) {
  const s2 = Math.PI * Math.PI / 6;
  let i2;
  if (1 === t2) i2 = s2;
  else if (t2 > 1) i2 = s2;
  else if (0 === t2) i2 = t2;
  else if (t2 < 0) {
    const s3 = 1 + (t2 = Math.abs(t2)), e2 = Math.log(s3);
    i2 = e2 * e2 / -2 - Z(t2 / s3);
  } else if (t2 > 0.5) {
    const e2 = 1 - t2, n4 = Math.log(t2) * Math.log(e2);
    i2 = s2 - Z(e2) - n4;
  } else {
    i2 = 0;
    const s3 = 1 + Math.trunc(-16 * Math.log(10) / Math.log(t2) + 1.5);
    let e2 = s3;
    for (let n4 = s3; n4 > 0; n4--, e2 -= 1) i2 *= t2, i2 += 1 / (e2 * e2);
    i2 *= t2;
  }
  return i2;
}
function C2(t2, s2) {
  const i2 = s2 * t2;
  if (Math.abs(s2) < 0.1) {
    let s3 = 0;
    for (let t3 = 60; t3 >= 1; t3--) s3 *= i2, s3 += 1 / t3 / t3;
    return s3 *= t2, s3;
  }
  return Z(i2) / s2;
}
function R2(t2, s2) {
  return t2 < s2 ? Qt(t2, s2) : Qt(s2, t2);
}
function B2(t2, s2) {
  const i2 = Math.abs(t2);
  return s2 >= 0 ? i2 : -i2;
}
function S(t2) {
  return Math.round(t2);
}
function F(t2, s2, i2, e2, n4) {
  n4[0] = s2[0] + (i2[0] - s2[0]) * e2, n4[1] = s2[1] + (i2[1] - s2[1]) * e2, 3 === t2 && (n4[2] = s2[2] + (i2[2] - s2[2]) * e2);
}
function k2(t2, s2, i2, e2, n4) {
  n4[0] = i2[0] - (i2[0] - s2[0]) * (1 - e2), n4[1] = i2[1] - (i2[1] - s2[1]) * (1 - e2), 3 === t2 && (n4[2] = i2[2] - (i2[2] - s2[2]) * (1 - e2));
}
function L2(t2, s2, i2, e2, n4) {
  e2 <= 0.5 ? F(t2, s2, i2, e2, n4) : k2(t2, s2, i2, e2, n4);
}
function O(t2, s2, i2, e2, n4) {
  n4[0] = s2[0].addE(i2[0].subE(s2[0]).mulE(e2)), n4[1] = s2[1].addE(i2[1].subE(s2[1]).mulE(e2));
}
function G2(t2, s2, i2, e2, n4) {
  n4[0] = i2[0].subE(i2[0].subE(s2[0]).mulE(w2.subE(e2))), n4[1] = i2[1].subE(i2[1].subE(s2[1]).mulE(w2.subE(e2)));
}
function Q(t2, s2, i2) {
  let e2;
  return e2 = i2 <= 0.5 ? t2 + (s2 - t2) * i2 : s2 - (s2 - t2) * (1 - i2), e2;
}
function V(t2, s2, i2) {
  return t2 + (s2 - t2) * i2;
}
function U2(t2, s2, i2) {
  return s2 - (s2 - t2) * (1 - i2);
}
function Y(t2, s2, i2, e2) {
  i2 <= 0.5 ? (e2.x = t2.x + (s2.x - t2.x) * i2, e2.y = t2.y + (s2.y - t2.y) * i2) : (e2.x = s2.x - (s2.x - t2.x) * (1 - i2), e2.y = s2.y - (s2.y - t2.y) * (1 - i2));
}
function j2(t2, s2, i2, e2) {
  i2 <= 0.5 ? (e2.x = t2.x + (s2.x - t2.x) * i2, e2.y = t2.y + (s2.y - t2.y) * i2, e2.z = t2.z + (s2.z - t2.z) * i2) : (e2.x = s2.x - (s2.x - t2.x) * (1 - i2), e2.y = s2.y - (s2.y - t2.y) * (1 - i2), e2.z = s2.z - (s2.z - t2.z) * (1 - i2));
}
function $(t2) {
  return t2 * t2;
}
function H(t2) {
  return t2 * t2 * t2;
}
function W(t2) {
  return 1 / Math.sqrt(t2);
}
function X(t2) {
  return t2 < 0 ? -1 : t2 > 0 ? 1 : 0;
}
function J(t2, s2, i2, e2) {
  const n4 = [0], r3 = [0], u4 = [0];
  return lt(ut(t2, i2, n4), ut(s2, e2, r3), u4) + (n4[0] + r3[0] + u4[0]);
}
var K = [0];
var tt = [0];
function st(t2, s2, i2) {
  return mt(ut(t2, s2, K), i2, K[0], tt);
}
var it = [0];
var et = [0];
var nt = [0];
var rt = [0];
function ut(t2, s2, i2) {
  const e2 = t2 * s2;
  return ht(t2, it, et), ht(s2, nt, rt), i2[0] = et[0] * rt[0] - (e2 - it[0] * nt[0] - et[0] * nt[0] - it[0] * rt[0]), e2;
}
function ht(t2, s2, i2) {
  const e2 = 134217729 * t2;
  s2[0] = e2 - (e2 - t2), i2[0] = t2 - s2[0];
}
var at = [0];
var ot = [0];
function mt(t2, s2, i2, e2) {
  const n4 = lt(t2, s2, at), r3 = lt(n4, i2, ot);
  return lt(r3, at[0] + ot[0], e2);
}
function lt(t2, s2, i2) {
  const e2 = t2 + s2;
  return Math.abs(t2) > Math.abs(s2) ? i2[0] = t2 - e2 + s2 : i2[0] = s2 - e2 + t2, e2;
}
function ct(t2, s2) {
  return t2 % s2;
}
function ft(t2) {
  const s2 = 1 - t2;
  if (0 === s2) return 1;
  let i2;
  if (s2 <= 0.01) {
    const t3 = s2, e2 = Math.log(t3);
    i2 = 1 + t3 * (0.4431471805599453 - 0.25 * e2 + t3 * (0.05680519270997949 - 0.09375 * e2 + t3 * (0.02183137044373718 - 0.05859375 * e2 + t3 * (0.011544521417308362 - 0.042724609375 * e2 + t3 * (0.00714200031339596 - 0.0336456298828125 * e2 + t3 * (0.004854743337164948 - 0.027757644653320312 * e2 + t3 * (0.003514687963781376 - 0.023627042770385742 * e2)))))));
  } else {
    if (t2 < 0.016) {
      const s3 = t2, i3 = 0.25, e2 = 0.046875, n4 = 0.01953125, r3 = 0.01068115234375, u4 = 0.0067291259765625, h3 = 0.004626274108886719, a3 = 0.0033752918243408203, o3 = 0.0025710230693221092;
      return Vs() * (1 - s3 * (i3 + s3 * (e2 + s3 * (n4 + s3 * (r3 + s3 * (u4 + s3 * (h3 + s3 * (a3 + s3 * o3))))))));
    }
    i2 = bt(0, s2, 1) - t2 * dt(0, s2, 1) / 3;
  }
  return ks(i2, 1, Vs());
}
function _t(t2, i2, e2 = Number.NaN) {
  if (n(i2 >= 0 && i2 <= 1), 0 === i2) return t2;
  let n4 = 1, r3 = t2;
  if (r3 < 0 && (r3 = -r3, n4 = -1), 1 === i2) {
    const t3 = Math.round(r3 / Gs()), s2 = r3 - t3 * Gs();
    return n4 * (2 * t3 + Math.sin(s2));
  }
  const u4 = Vs(), h3 = Math.floor(r3 / u4);
  1 & h3 ? r3 = (h3 + 1) * u4 - r3 : r3 -= h3 * u4;
  const a3 = Math.sin(r3), o3 = Number.isNaN(e2) ? ft(i2) : e2;
  let m3;
  if (1 === a3) m3 = o3 + Math.sqrt(1 - i2) * (r3 - u4);
  else {
    const t3 = r3 * r3;
    if (0.01424 * Math.pow(t3, 4) <= 2 * Ss()) {
      m3 = r3 * (1 + t3 * i2 * (-1 / 6 + t3 * ((4 - 3 * i2) / 120 - (16 + (45 * i2 - 60) * i2) / 5040 * t3)));
    } else if (i2 <= 0.01) {
      const t4 = Math.sin(2 * r3), s2 = Math.sin(4 * r3), e3 = Math.sin(6 * r3), n5 = Math.sin(8 * r3), u5 = Math.sin(10 * r3);
      m3 = r3 + i2 * ((2 * -r3 + t4) / 8 + i2 * ((-3 * r3 + 2 * t4 - 0.25 * s2) / 64 + i2 * ((-20 * r3 + 15 * t4 - 3 * s2 + e3 / 3) / 1024 + i2 * (5 * (-140 * r3 + 112 * t4 - 28 * s2 + 16 / 3 * e3 - 0.5 * n5) / 65536 + 7 * i2 * ((-63 * r3 + 52.5 * t4 - 15 * s2 + 3.75 * e3 - 0.625 * n5 + 0.05 * u5) / 65536 + i2 * (-693 * r3 + 594 * t4 - 185.625 * s2 + 1.375 * e3 - 12.375 * n5 + 1.8 * u5 - 0.125 * Math.sin(12 * r3)) / 1048576)))));
    } else {
      const t4 = a3 * a3, s2 = Math.cos(r3), e3 = s2 * s2, n5 = xt(a3, s2, i2);
      m3 = a3 * (bt(e3, n5, 1) - i2 * t4 * dt(e3, n5, 1) / 3);
    }
  }
  if (1 & h3) {
    m3 = o3 * (h3 + 1) - m3;
  } else m3 += o3 * h3;
  return n4 * m3;
}
function vt(t2, s2, i2 = Number.NaN) {
  if (0 === t2) return 0;
  let e2 = 1, n4 = t2;
  t2 < 0 && (n4 = -n4, e2 = -1);
  const r3 = Number.isNaN(i2) ? ft(s2) : i2, u4 = Math.floor(n4 / r3);
  1 & u4 ? n4 = (u4 + 1) * r3 - n4 : n4 -= u4 * r3;
  let h3 = n4 <= 0 ? 0 : n4 >= r3 ? Vs() : Nt(n4, s2, r3);
  return 1 & u4 ? h3 = Vs() * (u4 + 1) - h3 : h3 += Vs() * u4, e2 * h3;
}
function bt(t2, i2, e2) {
  n((0 !== t2 ? 1 : 0) + (0 !== i2 ? 1 : 0) + 1 > 1);
  let n4 = t2, r3 = i2, u4 = e2;
  for (; ; ) {
    const t3 = Math.sqrt(n4 * r3) + Math.sqrt(r3 * u4) + Math.sqrt(u4 * n4);
    n4 = 0.25 * (n4 + t3), r3 = 0.25 * (r3 + t3), u4 = 0.25 * (u4 + t3);
    const s2 = (n4 + r3 + u4) / 3, i3 = (s2 - n4) / s2, e3 = (s2 - r3) / s2, h3 = (s2 - u4) / s2;
    if (Math.abs(i3) <= 24e-4 && Math.abs(e3) <= 24e-4 && Math.abs(h3) <= 24e-4) {
      const t4 = i3 * e3 - h3 * h3, n5 = i3 * e3 * h3;
      return (1 + (1 / 24 * t4 - 0.1 - 3 / 44 * n5 - 5 * t4 * t4 / 208 + t4 * n5 / 16) * t4 + (1 / 14 + 3 * n5 / 104) * n5) / Math.sqrt(s2);
    }
  }
}
function dt(t2, i2, e2) {
  n(0 !== t2 || 0 !== i2);
  let r3 = t2, u4 = i2, h3 = e2;
  const a3 = new n2(0);
  let o3 = 1;
  for (; ; ) {
    const t3 = 0.2 * (r3 + u4 + 3 * h3), s2 = (t3 - r3) / t3, i3 = (t3 - u4) / t3, e3 = (t3 - h3) / t3;
    if (Math.abs(s2) <= 15e-4 && Math.abs(i3) <= 15e-4 && Math.abs(e3) <= 15e-4) {
      const n5 = s2 * i3, r4 = e3 * e3, u5 = n5 - r4, h4 = n5 - 6 * r4, m4 = h4 + u5 + u5, l4 = 3 / 26, c4 = h4 * (0.25 * (9 / 22) * h4 - 0.21428571428571427 - 1.5 * l4 * e3 * m4), f4 = e3 * (1 / 6 * m4 + e3 * (-0.4090909090909091 * u5 + e3 * l4 * n5));
      return 3 * a3.getResult() + o3 * (1 + c4 + f4) / (t3 * Math.sqrt(t3));
    }
    const n4 = Math.sqrt(r3), m3 = Math.sqrt(u4), l3 = Math.sqrt(h3), c3 = n4 * (m3 + l3) + m3 * l3;
    a3.add(o3 / (l3 * (h3 + c3))), o3 *= 0.25, r3 = 0.25 * (r3 + c3), u4 = 0.25 * (u4 + c3), h3 = 0.25 * (h3 + c3);
  }
}
function xt(t2, s2, i2) {
  return t2 < 0.999 ? 1 - i2 * $(t2) : 1 - i2 + i2 * $(s2);
}
function Nt(t2, s2, i2) {
  if (0 === s2) return t2;
  if (1 === s2) return Math.asin(t2);
  let e2 = 0, n4 = true;
  if (t2 < 0.2) {
    const i3 = t2 * t2, r4 = t2 * (1 + i3 * s2 * (1 / 6 + i3 * ((13 * s2 - 4) / 120 + (16 - 284 * s2 + 493 * s2 * s2) / 5040 * i3))), u4 = Math.abs(s2 * (4944 * s2 - 64 - 31224 * s2 * s2 + 37369 * s2 * s2 * s2) / 362880 * Math.pow(t2, 9));
    if (u4 < Math.abs(r4) * Ss()) return r4;
    e2 = r4, n4 = u4 > 0.1 * r4;
  }
  if (n4) {
    const n5 = 1 - s2, r4 = 1 - t2 / i2, u4 = Math.sqrt(r4 * r4 + n5 * n5), h3 = Math.atan2(n5, t2 + Ss());
    e2 = Vs() + Math.sqrt(u4) * (h3 - Vs());
  }
  let r3 = 0;
  for (let u4 = 0; u4 < 7; u4++) {
    r3 = _t(e2, s2, i2);
    const n5 = xt(Math.sin(e2), Math.cos(e2), s2);
    if (e2 -= (r3 - t2) / Math.sqrt(n5), u4 > 0 && Math.abs(r3 - t2) <= 4 * Ss() * t2) break;
  }
  return e2;
}
function pt(s2, i2, e2, n4, r3) {
  return 0 === s2 ? 0 === n4 ? i2 : 1 === n4 ? e2 : r3 : 1 === s2 ? 0 === n4 ? i2 : 1 === n4 ? e2 : Q(i2, e2, n4) : (2 === s2 && z("angular interpolation"), void z(""));
}
function yt(s2, i2, e2, n4, r3, u4, h3, a3) {
  if (0 === s2) for (let t2 = 0; t2 < u4; ++t2) n4[t2 + r3] = 0 === h3 ? i2[t2] : 1 === h3 ? e2[t2] : a3;
  else if (1 === s2) if (0 === h3) Tt(n4, i2, r3, 0, u4);
  else if (1 === h3) Tt(n4, e2, r3, 0, u4);
  else for (let t2 = 0; t2 < u4; ++t2) n4[t2 + r3] = Q(i2[t2], e2[t2], h3);
  else if (2 === s2) if (0 === h3) Tt(n4, i2, r3, 0, u4);
  else if (1 === h3) Tt(n4, e2, r3, 0, u4);
  else {
    let t2 = 0;
    for (let s3 = 0, a4 = r3; s3 < u4; ++s3, ++a4) n4[a4] = Q(i2[s3], e2[s3], h3), t2 += n4[a4] * n4[a4];
    if (t2 > 0) {
      t2 = Math.sqrt(t2);
      for (let s3 = r3; s3 < r3 + u4; ++s3) n4[s3] /= t2;
    } else {
      for (let t3 = r3; t3 < r3 + u4; ++t3) n4[t3] = 0;
      n4[r3] = 1;
    }
  }
  else z("");
}
function Tt(t2, s2, i2, e2, n4) {
  if (0 === n4) return;
  let r3 = 0, u4 = i2, h3 = e2;
  for (; r3++ < n4; ) t2[u4++] = s2[h3++];
}
function gt(t2, s2, i2) {
  let e2 = 0;
  for (let n4 = 0; !e2 && n4 < i2; ++n4) e2 = t2[n4] - s2[n4];
  return e2;
}
function Mt(t2, s2) {
  return t2;
}
function Et(t2) {
  t2.sort((t3, s2) => t3 < s2 ? -1 : t3 > s2 ? 1 : 0);
}
function It(t2, s2) {
  const i2 = t2.slice(0, s2);
  Et(i2), Tt(t2, i2, 0, 0, s2);
}
function wt(t2, s2, i2, e2) {
  const n4 = t2.slice(s2, s2 + i2);
  n4.sort(e2), Tt(t2, n4, s2, 0, i2);
}
function Dt(t2, s2) {
  return t2 < s2 ? -1 : t2 > s2 ? 1 : 0;
}
function At(t2, s2, i2, e2) {
  return t2 < i2 ? -1 : t2 > i2 ? 1 : s2 < e2 ? -1 : s2 > e2 ? 1 : 0;
}
function Pt(t2, s2) {
  if (t2.length < 2) return t2.length;
  let i2 = 0;
  for (let e2 = 1; e2 < t2.length; ++e2) s2(t2[e2], t2[i2]) || (i2++, t2[e2] = Mt(t2[i2], t2[i2] = t2[e2]));
  return 1 + i2;
}
function qt(t2, s2) {
  t2[s2] = t2.at(-1), t2.pop();
}
function zt(t2, s2 = false) {
  return { [Symbol.dispose]() {
    this.bForget || t2();
  }, bForget: s2 };
}
function Zt(t2, s2, i2) {
  t2.length = s2, t2.fill(i2);
}
function Ct(t2, s2, i2) {
  t2.length = i2;
  for (let e2 = 0; e2 < i2; ++e2) t2[e2] = new s2();
}
function Rt(t2, s2) {
  const i2 = new Array(s2);
  for (let e2 = 0; e2 < s2; ++e2) i2[e2] = new t2();
  return i2;
}
function Bt(t2, s2, i2) {
  for (let e2 = 0; e2 < i2; ++e2) t2[e2].assign(s2[e2]);
  return i2;
}
function St(t2, s2) {
  const i2 = t2.slice(0, s2);
  for (let e2 = 0; e2 < s2; ++e2) i2[e2] = i2[e2].clone();
  return i2;
}
function Ft(t2) {
  return Array.from({ length: t2 }, () => null);
}
function kt(t2, s2) {
  return Array.from({ length: s2 }, () => t2());
}
function Lt(t2, s2) {
  const i2 = new Array(t2);
  return i2.fill(s2), i2;
}
function Ot(t2, s2) {
  return s2 in t2 && 1 === Object.getOwnPropertyNames(t2).length;
}
var Gt = class {
  constructor(...t2) {
    this.m_elts = t2;
  }
  get length() {
    return this.m_elts.length;
  }
  at(t2) {
    return this.m_elts[t2];
  }
  [Symbol.dispose]() {
    for (const t2 of this.m_elts) t2[Symbol.dispose]();
  }
};
function Qt(t2, s2) {
  return { first: t2, second: s2 };
}
var Vt = Math.PI;
var Ut = 2 * Math.PI;
var Yt = 0.5 * Math.PI;
var jt = class {
  constructor(t2, s2) {
    this.m_cr = t2, this.m_cc = s2, this.m_v = Lt(t2 * s2, 0);
  }
  get(t2, s2) {
    return this.m_v[t2 * this.m_cc + s2];
  }
  set(t2, s2, i2) {
    this.m_v[t2 * this.m_cc + s2] = i2;
  }
  inc(t2, s2) {
    return ++this.m_v[t2 * this.m_cc + s2];
  }
};
var $t = new ArrayBuffer(8);
var Ht = new Float64Array($t);
var Wt = new BigUint64Array($t);
var Xt = 0x0fffffffffffffn;
var Jt = 0x7ff0000000000000n;
function Kt() {
  return Number.EPSILON * Zs;
}
function ts(t2) {
  return Ht[0] = t2, Wt[0];
}
function ss(t2) {
  return Wt[0] = t2, Ht[0];
}
function is(t2) {
  return ts(t2) & Xt;
}
function es(t2) {
  return Number((ts(t2) & Jt) >> 52n);
}
function ns(t2) {
  if (0n === t2) return -1n;
  if (1n === t2 || -1n === t2) return 0n;
  t2 < 0n && (t2 = -t2);
  let s2 = 0n, i2 = 512n, e2 = 1n << s2 + i2;
  for (; t2 >= e2; ) s2 += i2, i2 <<= 1n, e2 <<= i2;
  let n4 = s2;
  i2 >>= 1n;
  let r3 = n4 + i2;
  for (; i2 > 0n; ) t2 < 1n << r3 || (n4 = r3), i2 >>= 1n, r3 = n4 + i2;
  return n4;
}
function rs(t2, s2) {
  return t2 === s2 || Number.isNaN(t2) && Number.isNaN(s2);
}
function us(t2, s2, i2) {
  return t2 === s2 || Math.abs(t2 - s2) <= i2 || Number.isNaN(t2) && Number.isNaN(s2);
}
function hs(t2, s2) {
  return t2 < s2 ? -1 : t2 > s2 ? 1 : 0;
}
function as(t2, s2) {
  if (t2 < s2) return -1;
  if (t2 > s2) return 1;
  if (t2 === s2) return 0;
  {
    const i2 = Number.isNaN(t2), e2 = Number.isNaN(s2);
    return i2 < e2 ? -1 : i2 > e2 ? 1 : 0;
  }
}
function os() {
  return 2147483647;
}
function ms() {
  return 32767;
}
function ls() {
  return 2147483647;
}
function cs() {
  return -2147483648;
}
var fs = ls();
var _s = BigInt(fs);
var vs = 2166136261;
var bs = 16777619;
function ds(t2) {
  let s2 = vs, i2 = t2;
  return s2 = (s2 ^ 255 & i2) * bs, i2 >>= 8, s2 = (s2 ^ 255 & i2) * bs, i2 >>= 8, s2 = (s2 ^ 255 & i2) * bs, i2 >>= 8, s2 = (s2 ^ 255 & i2) * bs, s2 & fs;
}
var xs = 14695981039346656037n;
var Ns = 1099511628211n;
function ps(t2) {
  let s2 = xs, i2 = t2;
  return s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, i2 >>= 8n, s2 = (s2 ^ 0xffn & i2) * Ns, s2 & _s;
}
function ys(t2) {
  return 1103515245 * t2 + 12345 & 2147483647;
}
function Ts(t2) {
  let s2 = vs;
  for (let i2 = 0, e2 = t2.length; i2 < e2; ++i2) s2 = (s2 ^ t2.charCodeAt(i2)) * bs;
  return s2 & fs;
}
function gs(t2, s2) {
  return s2 + 2654435769 + (t2 << 6) + (t2 >> 2) & fs;
}
function Ms(t2, s2) {
  return gs(t2, Ds(s2));
}
function Es(t2) {
  return gs(3735928559, t2);
}
function Is(t2, s2) {
  return gs(t2, Es(s2));
}
function ws(t2) {
  return ds(t2);
}
function Ds(t2) {
  return Number(ps(t2));
}
function As(t2) {
  return js(t2);
}
function Ps(t2) {
  return Ds(ts(As(t2)));
}
function qs(t2) {
  return ys(t2);
}
var zs = 100;
var Zs = 100;
function Cs() {
  return Number.EPSILON * zs;
}
function Rs() {
  return 0.38196601125010515;
}
function Bs() {
  return 1.4142135623730951;
}
function Ss() {
  return Number.EPSILON;
}
function Fs(t2, s2, i2) {
  return t2 === s2 || t2 === i2;
}
function ks(t2, s2, i2) {
  return t2 >= s2 ? t2 <= i2 ? t2 : i2 : s2;
}
function Ls(t2, s2, i2) {
  const e2 = t2[0];
  if (e2 >= s2) {
    if (e2 <= i2) return false;
    t2[0] = i2;
  } else t2[0] = s2;
  return true;
}
function Os(t2, s2) {
  return t2 >= s2 ? s2 : t2 < -s2 ? -s2 : t2;
}
function Gs() {
  return Vt;
}
function Qs() {
  return Ut;
}
function Vs() {
  return Yt;
}
var Us = 3 * Vs();
function Ys() {
  return Us;
}
function js(t2) {
  return t2 + 0;
}
function $s(t2) {
  return { v: t2 };
}
var Hs = class _Hs {
  constructor() {
    this.m_rn = $s(0n), this.m_rd = $s(1n), this.m_bNaN = false, this.m_bNormalized = false, this.m_power = 0, this.m_sign = 0;
  }
  static constructAssign(t2, s2) {
    const i2 = t2.clone();
    return void 0 !== s2 && i2.limitPrecisionThis(s2), i2;
  }
  static constructDouble(t2) {
    return new _Hs().setDouble(t2);
  }
  static constructInt64(t2) {
    return new _Hs().setInt64(t2);
  }
  static constructRational(t2, s2) {
    return new _Hs().setRational(t2, s2);
  }
  static constructInt32(t2) {
    return this.constructInt64(BigInt(Math.trunc(t2)));
  }
  [Symbol.toPrimitive](t2) {
    return this;
  }
  compare(t2) {
    return this.lt(t2) ? -1 : this.gt(t2) ? 1 : 0;
  }
  assignCopy(t2) {
    return this.setThis(t2);
  }
  abs() {
    return this.clone().absThis();
  }
  absThis() {
    return this.isNAN() || (this.m_sign *= this.m_sign), this;
  }
  clone() {
    return new _Hs().setThis(this);
  }
  setThis(t2) {
    return this.m_bNaN = t2.m_bNaN, this.m_bNormalized = t2.m_bNormalized, this.m_rn.v = t2.m_rn.v, this.m_rd.v = t2.m_rd.v, this.m_power = t2.m_power, this.m_sign = t2.m_sign, this;
  }
  setZero() {
    return this.m_rn.v = 0n, this.m_rd.v = 1n, this.m_bNaN = false, this.m_power = 0, this.m_bNormalized = true, this.m_sign = 0, this;
  }
  setDouble(s2) {
    if (this.setZero(), 0 === s2) return this;
    if (Number.isInteger(s2) && Math.abs(s2) < ls()) return this.setInt32(s2);
    const i2 = ts(s2), e2 = (i2 & _Hs.s_em) >> 52n, n4 = !!(i2 & _Hs.s_sm), r3 = i2 & _Hs.s_fm;
    if (e2 === _Hs.s_emax) return r3 ? (this.m_rn.v = this.m_rd.v = 0n, this.m_bNaN = true, this) : (this.m_rn.v = n4 ? -1n : 1n, this.m_rd.v = 0n, this);
    0n === e2 && z("denormalized numbers not yet implemented");
    const u4 = e2 - 1023n, h3 = u4 >= 0n ? u4 : 0n, a3 = u4 < 0n ? -u4 : 0n;
    return this.m_rn.v = (1n << 52n | r3) << h3, this.m_rd.v = 1n << 52n + a3, this.m_sign = n4 ? -1 : 1, this.m_bNormalized = false, this.normalizeThis();
  }
  setInt64(t2) {
    return 0n === t2 ? this.setZero() : (this.m_bNaN = false, this.m_sign = t2 > 0n ? 1 : -1, this.m_rn.v = t2 > 0n ? t2 : -t2, this.m_rd.v = 1n, this.m_power = 0, this.m_bNormalized = false, this.normalizeThis());
  }
  setRational(t2, s2) {
    return 0n === t2 ? 0n === s2 ? this.setNAN() : this.setZero() : 0n === s2 ? t2 > 0n ? this.setPositiveInf() : this.setNegativeInf() : (this.m_sign = (t2 > 0n ? 1 : -1) * (s2 > 0n ? 1 : -1), this.m_rn.v = t2 > 0n ? t2 : -t2, this.m_rd.v = s2 > 0n ? s2 : -s2, this.m_power = 0, this.m_bNormalized = false, this.normalizeThis());
  }
  setInt32(t2) {
    return this.setInt64(BigInt(Math.trunc(t2)));
  }
  getDouble() {
    return this.convertToDouble();
  }
  toDouble() {
    return this.convertToDouble();
  }
  value() {
    return this.convertToDouble();
  }
  isNAN() {
    return this.m_bNaN;
  }
  isPositiveInf() {
    return !this.isNAN() && (0n === this.m_rd.v && 1 === this.m_sign);
  }
  isNegativeInf() {
    return !this.isNAN() && (0n === this.m_rd.v && -1 === this.m_sign);
  }
  isFinite() {
    return !this.isNAN() && 0n !== this.m_rd.v;
  }
  setNAN() {
    return this.m_bNaN = true, this.m_rn.v = 0n, this.m_rd.v = 0n, this.m_power = 0, this.m_bNormalized = true, this;
  }
  setPositiveInf() {
    return this.m_rn.v = 1n, this.m_rd.v = 0n, this.m_bNaN = false, this.m_bNormalized = true, this.m_sign = 1, this.m_power = 0, this;
  }
  setNegativeInf() {
    return this.m_rn.v = 1n, this.m_rd.v = 0n, this.m_bNaN = false, this.m_bNormalized = true, this.m_sign = -1, this.m_power = 0, this;
  }
  subThis(t2) {
    if (t2.isNAN() && this.setNAN(), this.isPositiveInf() && t2.isPositiveInf()) this.setNAN();
    else {
      if (this.isPositiveInf() && t2.isNegativeInf()) return this.setPositiveInf(), this;
      if (this.isNegativeInf() && t2.isNegativeInf()) this.setNAN();
      else if (this.isNegativeInf() && t2.isPositiveInf()) return this.setNegativeInf(), this;
    }
    return this.isNAN() ? this : this.opPlusMinus(t2, false);
  }
  thisSubAbs(t2) {
    return n(0), this;
  }
  mulThis(t2) {
    return t2.isNAN() && this.setNAN(), this.isNAN() ? this : (this.m_sign *= t2.m_sign, 0 === this.m_sign ? this.setZero() : (this.m_rn.v *= t2.m_rn.v, this.m_rd.v *= t2.m_rd.v, this.m_power += t2.m_power, this.m_bNormalized = false, this.normalizeThis(), this));
  }
  mulDoubleThis(t2) {
    return this.mulThis(_Hs.constructDouble(t2));
  }
  thisMulInt64(t2) {
    return n(0), this;
  }
  thisMulInt32(t2) {
    return n(0), this;
  }
  divThis(t2) {
    return this.mulThis(t2.clone().invertThis());
  }
  divDoubleThis(t2) {
    return this.divThis(_Hs.constructDouble(t2));
  }
  addDoubleThis(t2) {
    return this.addThis(_Hs.constructDouble(t2));
  }
  subDoubleThis(t2) {
    return this.subThis(_Hs.constructDouble(t2));
  }
  mul(t2) {
    return this.clone().mulThis(t2);
  }
  mulBigIntThis(t2) {
    return this.mulThis(_Hs.constructInt64(t2));
  }
  mulDouble(t2) {
    return this.clone().mulThis(_Hs.constructDouble(t2));
  }
  div(t2) {
    return this.clone().divThis(t2);
  }
  divDouble(t2) {
    return this.clone().divDoubleThis(t2);
  }
  add(t2) {
    return this.clone().addThis(t2);
  }
  fmSubThis(t2, s2) {
    return this.subThis(t2.clone().mulThis(s2));
  }
  fmAddThis(t2, s2) {
    return this.addThis(t2.clone().mulThis(s2));
  }
  addThis(t2) {
    if (t2.isNAN() && this.setNAN(), this.isPositiveInf() && t2.isPositiveInf()) return this.setPositiveInf(), this;
    if (this.isPositiveInf() && t2.isNegativeInf()) this.setNAN();
    else {
      if (this.isNegativeInf() && t2.isNegativeInf()) return this.setNegativeInf(), this;
      this.isNegativeInf() && t2.isPositiveInf() && this.setNAN();
    }
    return this.isNAN() ? this : this.opPlusMinus(t2, true);
  }
  addDouble(t2) {
    return this.clone().addThis(_Hs.constructDouble(t2));
  }
  sub(t2) {
    return this.clone().subThis(t2);
  }
  subDouble(t2) {
    return this.clone().subThis(_Hs.constructDouble(t2));
  }
  isZero() {
    return 0 === this.m_sign;
  }
  equals(t2) {
    return this.clone().subThis(t2).isZero();
  }
  lt(t2) {
    return !this.isNAN() && !t2.isNAN() && (!(this.isPositiveInf() && t2.isPositiveInf() || this.isNegativeInf() && t2.isNegativeInf()) && (!this.isPositiveInf() && (!!t2.isPositiveInf() || this.clone().sub(t2).LZ())));
  }
  absLessAbs(t2) {
    return this.abs().lt(t2.abs());
  }
  gt(t2) {
    return this.clone().sub(t2).GZ();
  }
  lte(t2) {
    return this.sub(t2).LEZ();
  }
  gte(t2) {
    return this.sub(t2).GEZ();
  }
  normalizeThis() {
    if (this.m_bNormalized) return this;
    if (0n === this.m_rn.v) return this.setZero();
    let t2 = 0, s2 = 0xffffffffn;
    for (; 0n === (this.m_rn.v & s2) && s2 <= this.m_rn.v; ) s2 <<= 32n, t2 += 32;
    s2 &= this.m_rn.v, s2 >>= BigInt(t2), t2 += _2(BigInt.asUintN(32, s2)) - 1;
    let i2 = 0;
    for (s2 = 0xffffffffn; 0n === (this.m_rd.v & s2) && s2 <= this.m_rd.v; ) s2 <<= 32n, i2 += 32;
    return s2 &= this.m_rd.v, s2 >>= BigInt(i2), i2 += _2(BigInt.asUintN(32, s2)) - 1, this.m_rn.v >>= BigInt(t2), this.m_rd.v >>= BigInt(i2), this.m_power += t2 - i2, this.m_rn.v > 1n && this.m_rd.v > 1n && (this.m_rn.v % this.m_rd.v === 0n ? (this.m_rn.v /= this.m_rd.v, this.m_rd.v = 1n) : this.m_rd.v % this.m_rn.v === 0n && (this.m_rd.v /= this.m_rn.v, this.m_rn.v = 1n)), this.m_bNormalized = true, this;
  }
  negateThis() {
    return this.isNAN() || (this.m_sign *= -1), this;
  }
  negate() {
    return this.clone().negateThis();
  }
  invertThis() {
    return this.isNAN() ? this : this.isPositiveInf() || this.isNegativeInf() ? (this.setZero(), this) : 0n === this.m_rn.v ? (this.setPositiveInf(), this) : (this.m_rd = Mt(this.m_rn, this.m_rn = this.m_rd), this.m_power = -this.m_power, this);
  }
  limitPrecisionThis(t2) {
    if (0 === t2) return this;
    if (this.isZero()) return this.setZero();
    if (!this.isFinite()) return this;
    this.normalizeThis();
    let s2 = Number(ns(this.m_rn.v));
    if (s2 > t2) {
      const i2 = s2 - t2;
      this.m_rn.v >>= BigInt(s2 - t2), this.m_power += i2;
    }
    if (s2 = Number(ns(this.m_rd.v)), s2 > t2) {
      const i2 = s2 - t2;
      this.m_rd.v >>= BigInt(s2 - t2), this.m_power -= i2;
    }
    return this;
  }
  hiBitIndex() {
    return Math.max(Number(ns(this.m_rn.v)), Number(ns(this.m_rd.v)));
  }
  ldexp(t2) {
    return this.clone().ldexpThis(t2);
  }
  ldexpThis(t2) {
    return t2 && (this.m_bNormalized = false, this.m_power += t2, this.normalizeThis()), this;
  }
  LZ() {
    return !this.isNAN() && -1 === this.m_sign;
  }
  GZ() {
    return !this.isNAN() && 1 === this.m_sign;
  }
  LEZ() {
    return !this.isNAN() && this.m_sign <= 0;
  }
  GEZ() {
    return !this.isNAN() && this.m_sign >= 0;
  }
  toString() {
    return this.toDouble().toString();
  }
  sqr() {
    return this.clone().sqrThis();
  }
  sqrThis() {
    return this.mulThis(this.clone());
  }
  static sqrt(t2, e2) {
    if (t2.m_sign < 0n && A("MP_value: sqrt(-1)"), t2.isZero()) return t2.clone();
    let n4 = 52, r3 = 2220446049250313e-31;
    for (; n4 < e2; ) 2 * n4 <= e2 ? (r3 *= r3, n4 *= 2) : (r3 *= 2220446049250313e-31, n4 += 52);
    n4 += 52;
    const u4 = ns(t2.m_rn.v), h3 = ns(t2.m_rd.v);
    let a3, o3 = t2.m_power + Number(u4 - h3);
    const m3 = new _Hs();
    Math.abs(o3) > 200 ? (1 & Math.abs(o3) && (o3 += 1), a3 = _Hs.constructAssign(t2, 53).ldexpThis(-o3).value(), m3.setThis(t2).ldexpThis(-o3), n(Number.isFinite(a3))) : (m3.setThis(t2), a3 = m3.value(), n(Number.isFinite(a3)), o3 = 0), a3 = Math.sqrt(a3);
    const l3 = _Hs.constructDouble(a3), c3 = _Hs.constructDouble(r3);
    c3.mulThis(l3).ldexpThis(1);
    const f4 = r3 * a3 * 2, _3 = l3.clone(), v3 = new _Hs();
    let b3;
    for (let s2 = 0; s2 < 10; ++s2) {
      _3.mulThis(l3), v3.setThis(m3).subThis(_3).absThis();
      let t3 = v3.value();
      if (b3 = 1, t3 < 0.9) for (; t3 > f4; ) t3 *= t3, ++b3;
      else b3 = 4;
      if (v3.lte(c3)) break;
      for (let s3 = 0; s3 < b3; s3++) _3.setThis(l3).divThis(m3).invertThis().addThis(l3).ldexpThis(-1).limitPrecisionThis(n4), l3.setThis(_3);
    }
    return l3.ldexpThis(o3 / 2);
  }
  static cubicRoot(t2, s2) {
    if (t2.isZero()) return t2.clone();
    let i2 = 52, e2 = 2220446049250313e-31;
    for (; i2 < s2; ) 2 * i2 <= s2 ? (e2 *= e2, i2 *= 2) : (e2 *= 2220446049250313e-31, i2 += 52);
    i2 += 52;
    const n4 = Math.pow(Math.abs(t2.value()), 1 / 3), r3 = _Hs.constructDouble(n4), u4 = r3.clone();
    u4.sqrThis().mulDoubleThis(3).mulDoubleThis(e2), u4.limitPrecisionThis(32), t2.LZ() && r3.negateThis();
    for (let h3 = 0; h3 < 10; ++h3) {
      const s3 = r3.clone();
      s3.sqrThis().mulThis(r3);
      const e3 = s3.clone();
      if (e3.subThis(t2), e3.absThis().limitPrecisionThis(32), e3.lte(u4)) break;
      e3.setThis(t2), e3.ldexpThis(1), e3.addThis(s3);
      const n5 = s3.clone();
      n5.ldexpThis(1), n5.addThis(t2), e3.divThis(n5), r3.mulThis(e3), r3.limitPrecisionThis(i2);
    }
    return r3;
  }
  isInTheRangeOfDouble() {
    return n(0), false;
  }
  sign() {
    return this.m_sign;
  }
  cosAndSin(t2, i2) {
    n(0);
  }
  static nan() {
    return n(0), new _Hs();
  }
  convertToDouble() {
    if (this.m_bNaN) return Number.NaN;
    if (this.isZero()) return 0;
    if (0n === this.m_rd.v) return 1 === this.m_sign ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
    const t2 = -1 === this.m_sign, s2 = this.m_rn.v << (this.m_power >= 0 ? BigInt(this.m_power) : 0n);
    let i2 = this.m_rd.v << (this.m_power < 0 ? BigInt(-this.m_power) : 0n);
    const e2 = s2 / i2;
    let n4 = Number(e2);
    if (BigInt(n4) !== e2) return t2 ? -n4 : n4;
    let r3 = s2 - e2 * i2;
    if (r3) {
      let t3 = ns(i2) - 1023n;
      t3 > 0n && (i2 >>= t3, r3 <<= 52n, r3 >>= t3);
      let s3 = Number(r3);
      Number.isFinite(s3) || (r3 >>= 52n, s3 = Number(r3), t3 = 0n), t3 > 0n && (s3 /= Math.pow(2, 52));
      n4 += s3 / Number(i2);
    }
    return t2 ? -n4 : n4;
  }
  signVal() {
    return 1 === this.m_sign ? 1n : -1 === this.m_sign ? -1n : 0n;
  }
  opPlusMinus(t2, s2) {
    const i2 = Math.min(this.m_power, t2.m_power);
    let e2, n4;
    this.m_power > i2 ? (e2 = BigInt(this.m_power - i2), n4 = 0n) : (e2 = 0n, n4 = BigInt(t2.m_power - i2));
    const r3 = this.signVal() * this.m_rn.v * t2.m_rd.v << e2, u4 = t2.signVal() * t2.m_rn.v * this.m_rd.v << n4;
    return this.m_rn.v = s2 ? r3 + u4 : r3 - u4, this.m_rd.v *= t2.m_rd.v, this.m_power = i2, this.m_sign = 1, this.m_rn.v < 0n && (this.m_sign = -1, this.m_rn.v = -this.m_rn.v), this.m_bNormalized = false, this.normalizeThis(), this;
  }
};
Hs.s_sm = 0x8000000000000000n, Hs.s_em = 0x7ff0000000000000n, Hs.s_fm = 0x000fffffffffffffn, Hs.s_emax = 0x7ffn;
var Ws = Hs.constructInt32(1);
var Xs = Hs.constructInt32(0);
function Js(t2, s2) {
  return d2(t2 ^ s2);
}
function Ks(t2, s2) {
  let i2 = es(t2);
  const e2 = es(s2);
  if (i2 === e2) {
    return i2 -= 53 - Js(is(t2), is(s2)), i2;
  }
  return i2 > e2 ? i2 : e2;
}
function ti(t2, s2) {
  for (let i2 = 0, e2 = 0, n4 = t2.length; i2 < n4; i2 += 2, e2++) s2[e2].x = t2[i2], s2[e2].y = t2[i2 + 1];
}
function si(t2) {
  const s2 = new Float64Array(2 * t2.length);
  for (let i2 = 0, e2 = t2.length; i2 < e2; ++i2) {
    const e3 = i2 << 1;
    s2[e3] = t2[i2].x, s2[e3 + 1] = t2[i2].y;
  }
  return s2;
}
function ii(t2) {
  const s2 = Rt(ei, t2.length);
  for (let i2 = 0, e2 = t2.length; i2 < e2; ++i2) s2[i2].setCoords(t2[i2][0], t2[i2][1]);
  return s2;
}
var ei = class _ei {
  static construct(t2, s2) {
    return new _ei(t2, s2);
  }
  constructor(t2, s2) {
    void 0 !== t2 ? (this.x = t2, this.y = s2) : this.x = this.y = Number.NaN;
  }
  clone() {
    return new _ei(this.x, this.y);
  }
  assign(t2) {
    this.setCoordsPoint2D(t2);
  }
  setCoords(t2, s2) {
    return this.x = t2, this.y = s2, this;
  }
  setCoordsPoint2D(t2) {
    this.x = t2.x, this.y = t2.y;
  }
  isEqualPoint2D(t2, s2) {
    return void 0 !== s2 ? Math.abs(this.x - t2.x) <= s2 && Math.abs(this.y - t2.y) <= s2 : this.x === t2.x && this.y === t2.y;
  }
  isEqual(t2, s2, i2) {
    return void 0 !== i2 ? Math.abs(this.x - t2) <= i2 && Math.abs(this.y - s2) <= i2 : this.x === t2 && this.y === s2;
  }
  equalsPoint2D(t2, s2) {
    return this.isEqualPoint2D(t2, s2);
  }
  setSub(t2, s2) {
    this.x = t2.x - s2.x, this.y = t2.y - s2.y;
  }
  addThis(t2) {
    return this.x += t2.x, this.y += t2.y, this;
  }
  setAdd(t2, s2) {
    return this.x = t2.x + s2.x, this.y = t2.y + s2.y, this;
  }
  absoluteOther(t2) {
  }
  absolute() {
    return n(0), this;
  }
  setNegate() {
    this.x = -this.x, this.y = -this.y;
  }
  setNegateOther(t2) {
    this.x = -t2.x, this.y = -t2.y;
  }
  interpolateThis(t2, s2) {
  }
  interpolate(t2, i2, e2) {
    n(0);
  }
  scaleAddThis(t2, s2) {
    this.x = this.x * t2 + s2.x, this.y = this.y * t2 + s2.y;
  }
  setScaleAdd(t2, s2, i2) {
    this.x = s2.x * t2 + i2.x, this.y = s2.y * t2 + i2.y;
  }
  scaleOther(t2, i2) {
    n(0);
  }
  scale(t2) {
    this.x *= t2, this.y *= t2;
  }
  compare(t2) {
    return this.y < t2.y ? -1 : this.y > t2.y ? 1 : this.x < t2.x ? -1 : this.x > t2.x ? 1 : 0;
  }
  compareX(t2) {
    return this.x < t2.x ? -1 : this.x > t2.x ? 1 : this.y < t2.y ? -1 : this.y > t2.y ? 1 : 0;
  }
  normalizeOther(t2) {
    n(0);
  }
  normalize() {
    const t2 = this.length();
    return t2 ? (this.x /= t2, this.y /= t2) : (this.x = 1, this.y = 0), this;
  }
  getUnitVector() {
    return this.clone().normalize();
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  sqrLength() {
    return this.x * this.x + this.y * this.y;
  }
  static averageFast(t2, i2) {
    return n(0), {};
  }
  static average(t2, s2) {
    const i2 = new _ei();
    if (0 === s2) return i2.setNAN(), i2;
    if (1 === s2) return i2.assign(t2[0]), i2;
    const e2 = new n2(t2[0].x), r3 = new n2(t2[0].y);
    for (let n4 = 1; n4 < s2; n4++) e2.add(t2[n4].x), r3.add(t2[n4].y), 255 & n4 || (e2.normalize(), r3.normalize());
    return i2.x = e2.getResult() / s2, i2.y = r3.getResult() / s2, i2;
  }
  offset(t2, s2) {
    const i2 = _ei.distance(t2, s2), e2 = _ei.construct(this.x, this.y);
    if (0 === i2) return _ei.distance(e2, t2);
    const n4 = s2.clone();
    n4.subThis(t2), e2.subThis(t2);
    return e2.crossProduct(n4) / i2;
  }
  side(t2, s2) {
    return t2.equals(s2) ? this.equals(t2) ? 0 : 1 : _ei.orientationRobust(s2, t2, this);
  }
  static sqrDistance(t2, s2) {
    const i2 = t2.x - s2.x, e2 = t2.y - s2.y;
    return i2 * i2 + e2 * e2;
  }
  static sqrDistanceCoords(t2, s2, i2, e2) {
    const n4 = i2 - t2, r3 = e2 - s2;
    return n4 * n4 + r3 * r3;
  }
  static distance(t2, s2) {
    return Math.sqrt(_ei.sqrDistance(t2, s2));
  }
  dotProduct(t2) {
    return this.x * t2.x + this.y * t2.y;
  }
  dotProductAbs(t2) {
    return Math.abs(this.x * t2.x) + Math.abs(this.y * t2.y);
  }
  crossProduct(t2) {
    return this.x * t2.y - this.y * t2.x;
  }
  crossProductAbs(t2) {
    return n(0), 0;
  }
  rotateDirect(t2, s2) {
    const i2 = this.x * t2 - this.y * s2, e2 = this.x * s2 + this.y * t2;
    this.x = i2, this.y = e2;
  }
  rotateReverse(t2, s2) {
    const i2 = this.x * t2 + this.y * s2, e2 = -this.x * s2 + this.y * t2;
    this.x = i2, this.y = e2;
  }
  leftPerpendicularThis() {
    const t2 = this.x;
    this.x = -this.y, this.y = t2;
  }
  leftPerpendicularOther(t2) {
    const s2 = t2.x;
    this.x = -t2.y, this.y = s2;
  }
  rightPerpendicularThis() {
    const t2 = this.x;
    this.x = this.y, this.y = -t2;
  }
  rightPerpendicularOther(t2) {
    const s2 = t2.x;
    this.x = t2.y, this.y = -s2;
  }
  equals(t2) {
    return this.x === t2.x && this.y === t2.y;
  }
  notequals(t2) {
    return this.x !== t2.x || this.y !== t2.y;
  }
  not() {
    return !this.x && !this.y;
  }
  gt(t2) {
    return this.y > t2.y || this.y === t2.y && this.x > t2.x;
  }
  gte(t2) {
    return !this.lt(t2);
  }
  lt(t2) {
    return this.y < t2.y || this.y === t2.y && this.x < t2.x;
  }
  lte(t2) {
    return !this.gt(t2);
  }
  subThis(t2) {
    return this.x -= t2.x, this.y -= t2.y, this;
  }
  divThis(t2) {
    return this.x /= t2, this.y /= t2, this;
  }
  add(t2) {
    return new _ei(this.x + t2.x, this.y + t2.y);
  }
  sub(t2) {
    return new _ei(this.x - t2.x, this.y - t2.y);
  }
  negateThis() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  negate() {
    return new _ei(-this.x, -this.y);
  }
  mul(t2) {
    return new _ei(this.x * t2, this.y * t2);
  }
  mulThis(t2) {
    return this.x *= t2, this.y *= t2, this;
  }
  divide(t2) {
    return new _ei(this.x / t2, this.y / t2);
  }
  setNAN() {
    this.x = this.y = Number.NaN;
  }
  isNAN() {
    return Number.isNaN(this.x) || Number.isNaN(this.y);
  }
  static getNAN() {
    return new _ei(Number.NaN, Number.NaN);
  }
  isFinite() {
    return Number.isFinite(this.x) && Number.isFinite(this.y);
  }
  isZero() {
    return 0 === this.x && 0 === this.y;
  }
  norm(t2) {
    switch (t2) {
      case 0: {
        const t3 = Math.abs(this.x), s2 = Math.abs(this.y), i2 = t3 - s2;
        return i2 >= 0 ? t3 : i2 <= 0 ? s2 : Number.NaN;
      }
      case 1:
        return Math.abs(this.x) + Math.abs(this.y);
      case 2:
        return Math.sqrt(this.x * this.x + this.y * this.y);
      default:
        P("norm");
    }
  }
  getQuarter() {
    return _ei.getQuarterCoords(this.x, this.y);
  }
  static getQuarterCoords(t2, s2) {
    return t2 > 0 ? s2 >= 0 ? 1 : 4 : s2 > 0 ? 2 : 0 === t2 ? 4 : 3;
  }
  static compareVectors(t2, s2) {
    const i2 = t2.getQuarter(), e2 = s2.getQuarter();
    return e2 === i2 ? _ei.orientationRobustImpl(_ei.construct(0, 0), s2, t2, true) : i2 < e2 ? -1 : 1;
  }
  static compareVectorsOrigin(t2, s2, i2) {
    const e2 = s2.sub(t2), n4 = i2.sub(t2), r3 = e2.getQuarter(), u4 = n4.getQuarter();
    return u4 === r3 ? _ei.orientationRobustImpl(t2, i2, s2, true) : r3 < u4 ? -1 : 1;
  }
  static orientationRobust(t2, s2, i2) {
    return _ei.orientationRobustImpl(t2, s2, i2, false);
  }
  static orientationRobustEx(t2, s2, i2, e2) {
    if (t2.equals(s2) || i2.equals(e2)) return 0;
    const n4 = s2.x - t2.x, r3 = s2.y - t2.y, u4 = e2.x - i2.x, h3 = e2.y - i2.y;
    {
      const t3 = _ei.getQuarterCoords(n4, r3) - 1, s3 = _ei.getQuarterCoords(u4, h3) - 1, i3 = _ei.d[t3][s3];
      if (0 !== i3) return i3;
    }
    const a3 = n4 * h3, o3 = r3 * u4, m3 = 4 * Ss() * (Math.abs(a3) + Math.abs(o3)), l3 = a3 - o3;
    if (Math.abs(l3) >= m3) {
      return l3 < 0 ? -1 : l3 > 0 ? 1 : 0;
    }
    return _ei.orientationRobustExMp(t2, s2, i2, e2);
  }
  static orientationRobustExMp(t2, s2, i2, e2) {
    const n4 = Hs.constructDouble(s2.x), r3 = Hs.constructDouble(e2.x);
    n4.subThis(Hs.constructDouble(t2.x)), r3.subThis(Hs.constructDouble(i2.x));
    const u4 = Hs.constructDouble(s2.y), h3 = Hs.constructDouble(e2.y);
    return u4.subThis(Hs.constructDouble(t2.y)), h3.subThis(Hs.constructDouble(i2.y)), n4.mulThis(h3), u4.mulThis(r3), n4.subThis(u4), n4.LZ() ? -1 : n4.GZ() ? 1 : 0;
  }
  static orientationNonRobust(t2, s2, i2) {
    const e2 = s2.sub(t2).crossProduct(i2.sub(t2));
    return e2 < 0 ? -1 : e2 > 0 ? 1 : 0;
  }
  static orientationRobustImpl(t2, s2, i2, e2) {
    if (s2.isEqualPoint2D(t2) || i2.isEqualPoint2D(t2) || s2.isEqualPoint2D(i2)) return 0;
    const n4 = s2.x - t2.x, r3 = s2.y - t2.y, u4 = i2.x - t2.x, h3 = i2.y - t2.y;
    if (!e2) {
      const t3 = _ei.getQuarterCoords(n4, r3) - 1, s3 = _ei.getQuarterCoords(u4, h3) - 1, i3 = _ei.d[t3][s3];
      if (0 !== i3) return i3;
    }
    const a3 = (Math.abs(n4) + Math.abs(r3) + Math.abs(u4) + Math.abs(h3)) * (Math.abs(s2.x) + Math.abs(s2.y) + Math.abs(i2.x) + Math.abs(i2.y)) * 8 * M2(), o3 = n4 * h3 - r3 * u4;
    if (Math.abs(o3) > a3) {
      return o3 < 0 ? -1 : 1;
    }
    if (g2(s2.x, t2.x) && g2(i2.y, t2.y) && g2(s2.y, t2.y) && g2(i2.x, t2.x) && y2(n4, h3) && y2(r3, u4)) {
      const t3 = n4 * h3, s3 = r3 * u4;
      if (g2(t3, s3)) {
        const i3 = t3 - s3;
        return i3 < 0 ? -1 : i3 > 0 ? 1 : 0;
      }
    }
    return _ei.orientationRobustMp(t2, s2, i2);
  }
  static orientationRobustMp(t2, s2, i2) {
    const e2 = Hs.constructDouble(s2.x), n4 = Hs.constructDouble(i2.x);
    {
      const s3 = Hs.constructDouble(t2.x);
      e2.subThis(s3), n4.subThis(s3);
    }
    const r3 = Hs.constructDouble(i2.y), u4 = Hs.constructDouble(s2.y);
    {
      const s3 = Hs.constructDouble(t2.y);
      r3.subThis(s3), u4.subThis(s3);
    }
    return e2.mulThis(r3), u4.mulThis(n4), e2.subThis(u4), e2.LZ() ? -1 : e2.GZ() ? 1 : 0;
  }
  static inCircleRobust(t2, s2, i2, e2) {
    const n4 = new p2(), r3 = new p2();
    n4.set(t2.x), n4.subThis(e2.x), r3.set(t2.y), r3.subThis(e2.y);
    const u4 = new p2(), h3 = new p2();
    u4.set(s2.x), u4.subThis(e2.x), h3.set(s2.y), h3.subThis(e2.y);
    const a3 = new p2(), o3 = new p2();
    a3.set(i2.x), a3.subThis(e2.x), o3.set(i2.y), o3.subThis(e2.y);
    const m3 = n4.mulE(h3).subE(r3.mulE(u4)), l3 = u4.mulE(o3).subE(h3.mulE(a3)), c3 = n4.mulE(o3).subE(r3.mulE(a3)), f4 = n4.mulE(n4).addE(r3.mulE(r3)), _3 = u4.mulE(u4).addE(h3.mulE(h3)), v3 = a3.mulE(a3).addE(o3.mulE(o3)), b3 = f4.mulE(l3).subE(_3.mulE(c3)).addE(v3.mulE(m3));
    if (!b3.isFuzzyZero()) {
      const t3 = b3.value();
      return t3 < 0 ? -1 : t3 > 0 ? 1 : 0;
    }
    return _ei.inCircleRobustMp(t2, s2, i2, e2);
  }
  static inCircleRobustMp(t2, s2, i2, e2) {
    do {
      if (!g2(t2.x, e2.x) || !g2(t2.y, e2.y)) break;
      if (!g2(s2.x, e2.x) || !g2(s2.y, e2.y)) break;
      if (!g2(i2.x, e2.x) || !g2(i2.y, e2.y)) break;
      const n5 = t2.x - e2.x, r4 = t2.y - e2.y, u5 = s2.x - e2.x, h4 = s2.y - e2.y, a4 = i2.x - e2.x, o4 = i2.y - e2.y;
      if (!y2(n5, h4) || !y2(r4, u5)) break;
      if (!y2(u5, o4) || !y2(h4, a4)) break;
      if (!y2(n5, o4) || !y2(r4, a4)) break;
      if (!y2(n5, n5) || !y2(r4, r4)) break;
      if (!y2(u5, u5) || !y2(h4, h4)) break;
      if (!y2(a4, a4) || !y2(o4, o4)) break;
      const m4 = n5 * h4, l4 = r4 * u5, c4 = u5 * o4, f5 = h4 * a4, _4 = n5 * o4, v4 = r4 * a4, b4 = n5 * n5, d4 = r4 * r4, x5 = u5 * u5, N3 = h4 * h4, p3 = a4 * a4, M3 = o4 * o4;
      if (!g2(m4, l4)) break;
      if (!g2(c4, f5)) break;
      if (!g2(_4, v4)) break;
      if (!T2(b4, d4)) break;
      if (!T2(x5, N3)) break;
      if (!T2(p3, M3)) break;
      const E3 = m4 - l4, I3 = c4 - f5, w4 = _4 - v4, D3 = b4 + d4, A3 = x5 + N3, P3 = p3 + M3;
      if (!y2(D3, I3)) break;
      if (!y2(A3, w4)) break;
      if (!y2(P3, E3)) break;
      const q2 = D3 * I3, z3 = A3 * w4, Z2 = P3 * E3;
      if (!g2(q2, z3)) break;
      const C4 = q2 - z3;
      if (!T2(C4, Z2)) break;
      const R3 = C4 + Z2;
      return R3 < 0 ? -1 : R3 > 0 ? 1 : 0;
    } while (0);
    const n4 = Hs.constructDouble(e2.x), r3 = Hs.constructDouble(e2.y), u4 = Hs.constructDouble(t2.x), h3 = Hs.constructDouble(t2.y);
    u4.subThis(n4), h3.subThis(r3);
    const a3 = Hs.constructDouble(s2.x), o3 = Hs.constructDouble(s2.y);
    a3.subThis(n4), o3.subThis(r3);
    const m3 = Hs.constructDouble(i2.x), l3 = Hs.constructDouble(i2.y);
    m3.subThis(n4), l3.subThis(r3);
    const c3 = u4.mul(o3).sub(h3.mul(a3)), f4 = a3.mul(l3).sub(o3.mul(m3)), _3 = u4.mul(l3).sub(h3.mul(m3)), v3 = u4.mul(u4).add(h3.mul(h3)), b3 = a3.mul(a3).add(o3.mul(o3)), d3 = m3.mul(m3).add(l3.mul(l3)), x4 = v3.mul(f4).sub(b3.mul(_3)).add(d3.mul(c3));
    return x4.LZ() ? -1 : x4.GZ() ? 1 : 0;
  }
  static inCircleRobustMp3Point(t2, s2, i2) {
    const e2 = Hs.constructDouble(t2.x), n4 = Hs.constructDouble(t2.y), r3 = Hs.constructDouble(s2.x), u4 = Hs.constructDouble(s2.y), h3 = Hs.constructDouble(i2.x), a3 = Hs.constructDouble(i2.y), o3 = h3.mul(h3).add(a3.mul(a3)).sub(h3.mul(e2).add(a3.mul(n4)).add(h3.mul(r3)).add(a3.mul(u4))).add(e2.mul(r3).add(n4.mul(u4)));
    return o3.LZ() ? -1 : o3.GZ() ? 1 : 0;
  }
  static inCircleRobust3Point(t2, s2, i2) {
    const e2 = new p2(t2.x), n4 = new p2(t2.y), r3 = new p2(s2.x), u4 = new p2(s2.y), h3 = new p2(i2.x), a3 = new p2(i2.y), o3 = h3.mulE(h3).addE(a3.mulE(a3)).subE(h3.mulE(e2).addE(a3.mulE(n4)).addE(h3.mulE(r3)).addE(a3.mulE(u4))).addE(e2.mulE(r3).addE(n4.mulE(u4)));
    if (!o3.isFuzzyZero()) {
      const t3 = o3.value();
      return t3 < 0 ? -1 : t3 > 0 ? 1 : 0;
    }
    return _ei.inCircleRobustMp3Point(t2, s2, i2);
  }
  static calculateCircleCenterFromThreePoints(t2, s2, i2) {
    if (t2.equals(i2) || t2.equals(s2) || i2.equals(s2)) return _ei.getNAN();
    const e2 = ni(t2, s2, i2);
    return e2.isNAN() ? ri(t2, s2, i2) : e2;
  }
  static calculateAngle(t2, s2) {
    return Math.atan2(t2.crossProduct(s2), t2.dotProduct(s2));
  }
  static isBisectorRobust(t2, i2, e2) {
    return n(0), false;
  }
  static size() {
    return 2;
  }
  get 0() {
    return this.x;
  }
  get 1() {
    return this.y;
  }
  set 0(t2) {
    this.x = t2;
  }
  set 1(t2) {
    this.y = t2;
  }
  static compareZorder(t2, s2) {
    const i2 = _ei.c_compare_zorder_xx[t2.x < 0 ? 1 : 0] | _ei.c_compare_zorder_yy[t2.y < 0 ? 1 : 0], e2 = _ei.c_compare_zorder_xx[s2.x < 0 ? 1 : 0] | _ei.c_compare_zorder_yy[s2.y < 0 ? 1 : 0];
    if (i2 === e2) {
      let i3 = 0, e3 = 0;
      for (let n4 = 0; n4 < 2; ++n4) {
        const r3 = Ks(t2[n4], s2[n4]);
        r3 > i3 && (i3 = r3, e3 = n4);
      }
      return t2[e3] < s2[e3];
    }
    return i2 < e2;
  }
  static lerp(t2, s2, i2) {
    const e2 = new _ei();
    return Y(t2, s2, i2, e2), e2;
  }
  static getClosestCoordinate(t2, s2, i2, e2 = false) {
    const n4 = _ei.getNAN();
    n4.setSub(s2, t2);
    const r3 = n4.sqrLength();
    if (0 === r3) return 0.5;
    if (s2.isEqualPoint2D(i2)) return 1;
    const u4 = _ei.getNAN();
    u4.setSub(i2, t2);
    let h3 = u4.dotProduct(n4) / r3;
    return e2 || (h3 < 0 ? h3 = 0 : h3 > 1 && (h3 = 1)), h3;
  }
  static intersectLinesAtOnePoint(t2, s2, i2, e2) {
    if (t2.equals(s2) || i2.equals(e2)) return _ei.getNAN();
    const n4 = s2.x - t2.x, r3 = i2.x - e2.x, u4 = s2.y - t2.y, h3 = i2.y - e2.y, a3 = n4 * h3 - r3 * u4;
    if (!a3) return _ei.getNAN();
    const o3 = a3;
    if (0 === o3) return _ei.getNAN();
    let m3 = (i2.x - t2.x) * h3 - (i2.y - t2.y) * r3;
    m3 /= o3;
    const l3 = new _ei();
    return Y(t2, s2, m3, l3), l3.isFinite() ? l3 : _ei.getNAN();
  }
  toString() {
    return `[${this.x},${this.y}]`;
  }
};
function ni(t2, s2, i2) {
  const e2 = new p2(s2.x);
  e2.subThis(t2.x);
  const n4 = new p2(s2.y);
  n4.subThis(t2.y);
  const r3 = new p2(i2.x);
  r3.subThis(t2.x);
  const u4 = new p2(i2.y);
  u4.subThis(t2.y);
  const h3 = e2.clone();
  h3.mulThisE(u4);
  let a3 = n4.clone();
  if (a3.mulThisE(r3), h3.subThisE(a3), 0 === h3.value()) return ei.getNAN();
  h3.mulThis(2);
  const o3 = e2.clone();
  o3.mulThisE(e2);
  const m3 = n4.clone();
  m3.mulThisE(n4);
  const l3 = o3.clone();
  l3.addThisE(m3);
  const c3 = r3.clone();
  c3.mulThisE(r3);
  const f4 = u4.clone();
  f4.mulThisE(u4);
  const _3 = c3.clone();
  _3.addThisE(f4);
  const v3 = n4.clone();
  v3.mulThisE(_3), a3 = u4.clone(), a3.mulThisE(l3), v3.subThisE(a3), v3.divThisE(h3);
  const b3 = e2.clone();
  b3.mulThisE(_3), a3 = r3.clone(), a3.mulThisE(l3), b3.subThisE(a3), b3.divThisE(h3);
  const d3 = ei.construct(t2.x - v3.value(), t2.y + b3.value()), x4 = t2.sub(d3).length(), N3 = s2.sub(d3).length(), y4 = i2.sub(d3).length(), T3 = 1e-15 * (x4 + Math.abs(t2.x) + Math.abs(s2.x) + Math.abs(i2.x) + Math.abs(t2.y) + Math.abs(s2.y) + Math.abs(i2.y));
  return Math.abs(x4 - N3) <= T3 && Math.abs(x4 - y4) <= T3 && v3.eps() < T3 && b3.eps() < T3 ? d3 : ei.getNAN();
}
function ri(t2, s2, i2) {
  const e2 = Hs.constructDouble(s2.x);
  e2.subDoubleThis(t2.x);
  const n4 = Hs.constructDouble(s2.y);
  n4.subDoubleThis(t2.y);
  const r3 = Hs.constructDouble(i2.x);
  r3.subDoubleThis(t2.x);
  const u4 = Hs.constructDouble(i2.y);
  u4.subDoubleThis(t2.y);
  const h3 = e2.clone();
  h3.mulThis(u4);
  let a3 = n4.clone();
  if (a3.mulThis(r3), h3.subThis(a3), h3.isZero()) return ei.getNAN();
  h3.mulDoubleThis(2);
  const o3 = e2.clone();
  o3.mulThis(e2);
  const m3 = n4.clone();
  m3.mulThis(n4);
  const l3 = o3.clone();
  l3.addThis(m3);
  const c3 = r3.clone();
  c3.mulThis(r3);
  const f4 = u4.clone();
  f4.mulThis(u4);
  const _3 = c3.clone();
  _3.addThis(f4);
  const v3 = n4.clone();
  v3.mulThis(_3), a3 = u4.clone(), a3.mulThis(l3), v3.subThis(a3), v3.divThis(h3);
  const b3 = e2.clone();
  b3.mulThis(_3), a3 = r3.clone(), a3.mulThis(l3), b3.subThis(a3), b3.divThis(h3);
  return ei.construct(t2.x - v3.value(), t2.y + b3.value());
}
ei.dimensions = 2, ei.d = [[0, 1, 0, -1], [-1, 0, 1, 0], [0, -1, 0, 1], [1, 0, -1, 0]], ei.c_compare_zorder_xx = [2, 0], ei.c_compare_zorder_yy = [1, 0];

// node_modules/@arcgis/core/chunks/Transformation2D.js
var y3 = class _y {
  constructor(t2, s2, o3) {
    if (t2 instanceof _y) return this.data = t2.data, this.N = t2.N, this.M = t2.M, t2.data = null, t2.N = 0, void (t2.M = 0);
    this.data = t2, this.N = s2, this.M = o3;
  }
  assignCopy(s2) {
    return this === s2 || (n(this.N * this.M == s2.N * s2.M), this.data.set(s2.data), this.N = s2.N, this.M = s2.M), this;
  }
  setZero() {
    var _a;
    return (_a = this.data) == null ? void 0 : _a.fill(0), this;
  }
  setIdentity() {
    const t2 = 0, s2 = 1;
    for (let o3 = 0; o3 < this.N; o3++) for (let i2 = 0; i2 < this.M; i2++) this.setRowCol(o3, i2, o3 === i2 ? s2 : t2);
    return this;
  }
  rows() {
    return this.N;
  }
  cols() {
    return this.M;
  }
  row(s2) {
    return n(0), {};
  }
  set(t2, s2) {
    return this.data[t2] = s2, this;
  }
  setRowCol(t2, s2, o3) {
    return this.data[t2 * this.M + s2] = o3, this;
  }
  at(t2) {
    return this.data[t2];
  }
  atRowCol(t2, s2) {
    return this.data[t2 * this.M + s2];
  }
  mulScalar(s2, o3) {
    n(0);
  }
  mul(s2, o3) {
    if (n(this.M === s2.rows()), n(this.N === o3.rows()), n(s2.cols() === o3.cols()), o3 === this) {
      const t2 = new Float64Array(this.N * this.M), i3 = new _y(t2, this.N, this.M);
      return this.mul(s2, i3), void o3.assignCopy(i3);
    }
    if (o3 === s2) {
      const t2 = new Float64Array(s2.N * s2.M), i3 = new _y(t2, s2.N, s2.M);
      return this.mul(s2, i3), void o3.assignCopy(i3);
    }
    const i2 = s2.cols();
    for (let t2 = 0; t2 < this.N; t2++) for (let e2 = 0; e2 < i2; e2++) {
      let i3 = 0;
      for (let o4 = 0; o4 < this.M; o4++) i3 += this.atRowCol(t2, o4) * s2.atRowCol(o4, e2);
      o3.setRowCol(t2, e2, i3);
    }
  }
  mulTranspose(s2, o3) {
    if (n(this.M === s2.cols()), n(this.N === o3.rows()), n(s2.rows() === o3.cols()), o3 === this) {
      const t2 = new Float64Array(this.N * this.M), i3 = new _y(t2, this.N, this.M);
      return this.mulTranspose(s2, i3), void o3.assignCopy(i3);
    }
    if (o3 === s2) {
      const t2 = new Float64Array(s2.N * s2.M), i3 = new _y(t2, s2.N, s2.M);
      return this.mulTranspose(s2, i3), void o3.assignCopy(i3);
    }
    const i2 = s2.rows();
    for (let t2 = 0; t2 < this.N; t2++) for (let e2 = 0; e2 < i2; e2++) {
      let i3 = 0;
      for (let o4 = 0; o4 < this.M; o4++) i3 += this.atRowCol(t2, o4) * s2.atRowCol(e2, o4);
      o3.setRowCol(t2, e2, i3);
    }
  }
  mulLeft(s2, o3) {
    n(0);
  }
  mulLeftTranspose(s2, o3) {
    n(0);
  }
  mulDiag(s2, o3) {
    if (n(this.M === s2.N * s2.M), n(this.N === o3.rows()), n(this.M === o3.cols()), o3 === this) {
      const t2 = new Float64Array(this.N * this.M), i3 = new _y(t2, this.N, this.M);
      return this.mulDiag(s2, i3), void o3.assignCopy(i3);
    }
    const i2 = this.M;
    for (let t2 = 0; t2 < this.N; t2++) for (let e2 = 0; e2 < i2; e2++) o3.setRowCol(t2, e2, this.atRowCol(t2, e2) * s2.at(e2));
  }
  transposeInPlace() {
    if (this.N === this.M) {
      for (let t3 = 0; t3 < this.N; t3++) for (let s3 = t3 + 1; s3 < this.M; s3++) {
        const o3 = this.atRowCol(t3, s3);
        this.setRowCol(t3, s3, this.atRowCol(s3, t3)), this.setRowCol(s3, t3, o3);
      }
      return this;
    }
    const t2 = new Float64Array(this.N * this.M), s2 = new _y(t2, this.N, this.M);
    return s2.assignCopy(this), this.M = Mt(this.N, this.N = this.M), s2.transpose(this), this;
  }
  transpose(t2) {
    if (this !== t2) {
      _y.checkDims(t2, this.M, this.N);
      for (let s2 = 0; s2 < this.N; s2++) for (let o3 = 0; o3 < this.M; o3++) t2.setRowCol(o3, s2, this.atRowCol(s2, o3));
    } else t2.transposeInPlace();
  }
  add(t2, s2) {
  }
  svd(s2, o3, i2, e2 = false) {
    if (_y.checkDims(s2, this.N, this.M), _y.checkDims(o3, this.M, 1), _y.checkDims(i2, this.M, this.M), e2) {
      if (n(this.N === this.M), !this.symmetricEigen(o3, i2)) return false;
      for (let t2 = 0; t2 < this.M; ++t2) o3.at(t2) < 0 && o3.set(t2, 0);
      return s2.assignCopy(i2), true;
    }
    let h3, r3, a3, l3, n4, x4, w4, u4 = 0, C4 = 0, f4 = 0, R3 = 0, d3 = 0;
    const c3 = this.M, M3 = this.N;
    s2.assignCopy(this);
    const m3 = new Float64Array(c3), N3 = new _y(m3, c3, 1), b3 = (t2, s3) => s3 >= 0 ? Math.abs(t2) : -Math.abs(t2), p3 = (t2, s3) => {
      if ((t2 = Math.abs(t2)) > (s3 = Math.abs(s3))) {
        const o4 = s3 / t2;
        return t2 * Math.sqrt(o4 * o4 + 1);
      }
      if (s3 > 0) {
        const o4 = t2 / s3;
        return s3 * Math.sqrt(o4 * o4 + 1);
      }
      return 0;
    };
    for (let t2 = 0; t2 < c3; t2++) {
      if (u4 = t2 + 1, N3.set(t2, R3 * f4), f4 = l3 = R3 = 0, t2 < M3) {
        for (let o4 = t2; o4 < M3; o4++) R3 += Math.abs(s2.atRowCol(o4, t2));
        if (R3) {
          for (let o4 = t2; o4 < M3; o4++) s2.setRowCol(o4, t2, s2.atRowCol(o4, t2) / R3), l3 += s2.atRowCol(o4, t2) * s2.atRowCol(o4, t2);
          r3 = s2.atRowCol(t2, t2), f4 = -b3(Math.sqrt(l3), r3), a3 = r3 * f4 - l3, s2.setRowCol(t2, t2, r3 - f4);
          for (let o4 = u4; o4 < c3; o4++) {
            l3 = 0;
            for (let i4 = t2; i4 < M3; i4++) l3 += s2.atRowCol(i4, t2) * s2.atRowCol(i4, o4);
            r3 = l3 / a3;
            for (let i4 = t2; i4 < M3; i4++) s2.setRowCol(i4, o4, s2.atRowCol(i4, o4) + r3 * s2.atRowCol(i4, t2));
          }
          for (let o4 = t2; o4 < M3; o4++) s2.setRowCol(o4, t2, s2.atRowCol(o4, t2) * R3);
        }
      }
      if (o3.set(t2, R3 * f4), f4 = l3 = R3 = 0, t2 < M3 && t2 !== c3 - 1) {
        for (let o4 = u4; o4 < c3; o4++) R3 += Math.abs(s2.atRowCol(t2, o4));
        if (R3) {
          for (let o4 = u4; o4 < c3; o4++) s2.setRowCol(t2, o4, s2.atRowCol(t2, o4) / R3), l3 += s2.atRowCol(t2, o4) * s2.atRowCol(t2, o4);
          r3 = s2.atRowCol(t2, u4), f4 = -b3(Math.sqrt(l3), r3), a3 = r3 * f4 - l3, s2.setRowCol(t2, u4, r3 - f4);
          for (let o4 = u4; o4 < c3; o4++) N3.set(o4, s2.atRowCol(t2, o4) / a3);
          for (let o4 = u4; o4 < M3; o4++) {
            l3 = 0;
            for (let i4 = u4; i4 < c3; i4++) l3 += s2.atRowCol(o4, i4) * s2.atRowCol(t2, i4);
            for (let t3 = u4; t3 < c3; t3++) s2.setRowCol(o4, t3, s2.atRowCol(o4, t3) + l3 * N3.at(t3));
          }
          for (let o4 = u4; o4 < c3; o4++) s2.setRowCol(t2, o4, s2.atRowCol(t2, o4) * R3);
        }
      }
      const i3 = Math.abs(o3.at(t2)) + Math.abs(N3.at(t2));
      d3 = i3 > d3 ? i3 : d3;
    }
    for (let t2 = c3 - 1; t2 >= 0; t2--) {
      if (t2 < c3 - 1) {
        if (f4) {
          for (let o4 = u4; o4 < c3; o4++) i2.setRowCol(o4, t2, s2.atRowCol(t2, o4) / s2.atRowCol(t2, u4) / f4);
          for (let o4 = u4; o4 < c3; o4++) {
            l3 = 0;
            for (let e3 = u4; e3 < c3; e3++) l3 += s2.atRowCol(t2, e3) * i2.atRowCol(e3, o4);
            for (let s3 = u4; s3 < c3; s3++) i2.setRowCol(s3, o4, i2.atRowCol(s3, o4) + l3 * i2.atRowCol(s3, t2));
          }
        }
        for (let s3 = u4; s3 < c3; s3++) i2.setRowCol(t2, s3, 0), i2.setRowCol(s3, t2, 0);
      }
      i2.setRowCol(t2, t2, 1), f4 = N3.at(t2), u4 = t2;
    }
    for (let t2 = (M3 < c3 ? M3 : c3) - 1; t2 >= 0; t2--) {
      u4 = t2 + 1, f4 = o3.at(t2);
      for (let o4 = u4; o4 < c3; o4++) s2.setRowCol(t2, o4, 0);
      if (f4) {
        f4 = 1 / f4;
        for (let o4 = u4; o4 < c3; o4++) {
          l3 = 0;
          for (let i3 = u4; i3 < M3; i3++) l3 += s2.atRowCol(i3, t2) * s2.atRowCol(i3, o4);
          r3 = l3 / s2.atRowCol(t2, t2) * f4;
          for (let i3 = t2; i3 < M3; i3++) s2.setRowCol(i3, o4, s2.atRowCol(i3, o4) + r3 * s2.atRowCol(i3, t2));
        }
        for (let o4 = t2; o4 < M3; o4++) s2.setRowCol(o4, t2, s2.atRowCol(o4, t2) * f4);
      } else for (let o4 = t2; o4 < M3; o4++) s2.setRowCol(o4, t2, 0);
      s2.setRowCol(t2, t2, s2.atRowCol(t2, t2) + 1);
    }
    for (let t2 = c3 - 1; t2 >= 0; t2--) for (let e3 = 1; ; e3++) {
      let y4 = 1;
      for (u4 = t2; u4 >= 0; u4--) {
        if (C4 = u4 - 1, Math.abs(N3.at(u4)) + d3 === d3) {
          y4 = 0;
          break;
        }
        if (Math.abs(o3.at(C4)) + d3 === d3) break;
      }
      if (y4) {
        h3 = 0, l3 = 1;
        for (let i3 = u4; i3 <= t2 && (r3 = l3 * N3.at(i3), N3.set(i3, N3.at(i3) * h3), Math.abs(r3) + d3 !== d3); i3++) {
          f4 = o3.at(i3), a3 = p3(r3, f4), o3.set(i3, a3), a3 = 1 / a3, h3 = f4 * a3, l3 = -r3 * a3;
          for (let t3 = 0; t3 < M3; t3++) x4 = s2.atRowCol(t3, C4), w4 = s2.atRowCol(t3, i3), s2.setRowCol(t3, C4, x4 * h3 + w4 * l3), s2.setRowCol(t3, i3, w4 * h3 - x4 * l3);
        }
      }
      if (w4 = o3.at(t2), u4 === t2) {
        if (w4 < 0) {
          o3.set(t2, -w4);
          for (let s3 = 0; s3 < c3; s3++) i2.setRowCol(s3, t2, -i2.atRowCol(s3, t2));
        }
        break;
      }
      if (100 === e3) return false;
      n4 = o3.at(u4), C4 = t2 - 1, x4 = o3.at(C4), f4 = N3.at(C4), a3 = N3.at(t2), r3 = ((x4 - w4) * (x4 + w4) + (f4 - a3) * (f4 + a3)) / (2 * a3 * x4), f4 = p3(r3, 1), r3 = ((n4 - w4) * (n4 + w4) + a3 * (x4 / (r3 + b3(f4, r3)) - a3)) / n4, h3 = l3 = 1;
      for (let t3 = u4; t3 <= C4; t3++) {
        const e4 = t3 + 1;
        f4 = N3.at(e4), x4 = o3.at(e4), a3 = l3 * f4, f4 *= h3, w4 = p3(r3, a3), N3.set(t3, w4), h3 = r3 / w4, l3 = a3 / w4, r3 = n4 * h3 + f4 * l3, f4 = f4 * h3 - n4 * l3, a3 = x4 * l3, x4 *= h3;
        for (let s3 = 0; s3 < c3; s3++) n4 = i2.atRowCol(s3, t3), w4 = i2.atRowCol(s3, e4), i2.setRowCol(s3, t3, n4 * h3 + w4 * l3), i2.setRowCol(s3, e4, w4 * h3 - n4 * l3);
        w4 = p3(r3, a3), o3.set(t3, w4), w4 && (w4 = 1 / w4, h3 = r3 * w4, l3 = a3 * w4), r3 = h3 * f4 + l3 * x4, n4 = h3 * x4 - l3 * f4;
        for (let o4 = 0; o4 < M3; o4++) x4 = s2.atRowCol(o4, t3), w4 = s2.atRowCol(o4, e4), s2.setRowCol(o4, t3, x4 * h3 + w4 * l3), s2.setRowCol(o4, e4, w4 * h3 - x4 * l3);
      }
      N3.set(u4, 0), N3.set(t2, r3), o3.set(t2, n4);
    }
    const g3 = new Float64Array(this.N), v3 = new Float64Array(this.M), T3 = new _y(g3, this.N, 1), I3 = new _y(v3, this.M, 1);
    let A3 = 1;
    do {
      A3 *= 3, A3++;
    } while (A3 <= this.M);
    do {
      A3 /= 3, A3 = Math.trunc(A3);
      for (let t2 = A3; t2 < this.M; t2++) {
        const e3 = o3.at(t2);
        for (let o4 = 0; o4 < this.N; o4++) T3.set(o4, s2.atRowCol(o4, t2));
        for (let s3 = 0; s3 < this.M; s3++) I3.set(s3, i2.atRowCol(s3, t2));
        let h4 = t2;
        for (; o3.at(h4 - A3) < e3; ) {
          o3.set(h4, o3.at(h4 - A3));
          for (let t3 = 0; t3 < this.N; t3++) s2.setRowCol(t3, h4, s2.atRowCol(t3, h4 - A3));
          for (let t3 = 0; t3 < this.M; t3++) i2.setRowCol(t3, h4, i2.atRowCol(t3, h4 - A3));
          if (h4 -= A3, h4 < A3) break;
        }
        o3.set(h4, e3);
        for (let t3 = 0; t3 < this.N; t3++) s2.setRowCol(t3, h4, T3.at(t3));
        for (let t3 = 0; t3 < this.M; t3++) i2.setRowCol(t3, h4, I3.at(t3));
      }
    } while (A3 > 1);
    for (let t2 = 0; t2 < this.M; t2++) {
      let o4 = 0;
      for (let i3 = 0; i3 < this.N; i3++) s2.atRowCol(i3, t2) < 0 && o4++;
      for (let s3 = 0; s3 < this.M; s3++) i2.atRowCol(s3, t2) < 0 && o4++;
      if (o4 > Math.trunc((this.N + this.M) / 2)) {
        for (let o5 = 0; o5 < this.N; o5++) s2.setRowCol(o5, t2, -s2.atRowCol(o5, t2));
        for (let s3 = 0; s3 < this.M; s3++) i2.setRowCol(s3, t2, -i2.atRowCol(s3, t2));
      }
    }
    return true;
  }
  isSymmetric() {
    if (this.N !== this.M) return false;
    for (let t2 = 0; t2 < this.N; t2++) for (let s2 = t2 + 1; s2 < this.M; s2++) if (this.atRowCol(t2, s2) !== this.atRowCol(s2, t2)) return false;
    return true;
  }
  isZero() {
    return n(0), false;
  }
  isIdentity() {
    return n(0), false;
  }
  equals(s2, o3) {
    if (void 0 !== o3 && n(0), this.N !== s2.N || this.M !== s2.M) return false;
    for (let t2 = 0; t2 < this.N * this.M; t2++) if (this.data[t2] !== s2.data[t2]) return false;
    return true;
  }
  maxElement() {
    return n(0), 0;
  }
  minElement() {
    return n(0), 0;
  }
  determinant() {
    if (n(this.N === this.M), 1 === this.N) return this.data[0];
    if (2 === this.N) return this.data[0] * this.data[3] - this.data[1] * this.data[2];
    if (3 === this.N) {
      const t2 = this;
      return t2.atRowCol(0, 0) * (t2.atRowCol(1, 1) * t2.atRowCol(2, 2) - t2.atRowCol(1, 2) * t2.atRowCol(2, 1)) - t2.atRowCol(0, 1) * (t2.atRowCol(1, 0) * t2.atRowCol(2, 2) - t2.atRowCol(2, 0) * t2.atRowCol(1, 2)) + t2.atRowCol(0, 2) * (t2.atRowCol(1, 0) * t2.atRowCol(2, 1) - t2.atRowCol(1, 1) * t2.atRowCol(2, 0));
    }
    const s2 = new Float64Array(this.N * this.N), o3 = new _y(s2, this.N, this.N), i2 = new Float64Array(this.N);
    if (!this.luDecomposition(o3, i2)) return 0;
    let e2 = 1;
    for (let t2 = 0; t2 < this.N; t2++) e2 *= o3.atRowCol(t2, t2), i2[t2] !== t2 && (e2 = -e2);
    return e2;
  }
  submatrix(s2, o3, i2) {
    n(0);
  }
  inverse(s2) {
    n(0);
  }
  pseudoInverse(t2, s2 = false, o3 = 2220446049250313e-31) {
    if (t2.setZero(), 1 === this.N && 1 === this.M) return 0 !== this.atRowCol(0, 0) ? t2.setRowCol(0, 0, 1 / this.atRowCol(0, 0)) : t2.setRowCol(0, 0, 0), true;
    if (2 === this.N && 2 === this.M) {
      const s3 = this.atRowCol(0, 0) * this.atRowCol(1, 1) - this.atRowCol(0, 1) * this.atRowCol(1, 0), o4 = 1e-5 * (Math.abs(this.atRowCol(0, 0) * this.atRowCol(1, 1)) + Math.abs(this.atRowCol(0, 1) * this.atRowCol(1, 0)));
      if (Math.abs(s3) > o4) return t2.setRowCol(0, 0, this.atRowCol(1, 1) / s3), t2.setRowCol(0, 1, -this.atRowCol(0, 1) / s3), t2.setRowCol(1, 0, -this.atRowCol(1, 0) / s3), t2.setRowCol(1, 1, this.atRowCol(0, 0) / s3), true;
    }
    const i2 = new Float64Array(this.N * this.M), e2 = new _y(i2, this.N, this.M), h3 = new Float64Array(this.M), r3 = new _y(h3, this.M, 1), a3 = new Float64Array(this.M * this.M), l3 = new _y(a3, this.M, this.M);
    if (!this.svd(e2, r3, l3, s2)) return false;
    const n4 = Math.max(this.N, this.M), x4 = o3 * Math.abs(r3.at(0)) * n4;
    for (let y4 = 0; y4 < this.M; y4++) r3.at(y4) > x4 ? r3.set(y4, 1 / r3.at(y4)) : r3.set(y4, 0);
    return l3.mulDiag(r3, t2), t2.mulTranspose(e2, t2), true;
  }
  luDecomposition(s2, o3) {
    return n(0), false;
  }
  symmetricEigen(s2, o3) {
    n(this.rows() === this.cols()), n(this.rows() === s2.rows()), n(o3.rows() === o3.cols() && o3.rows() === this.rows()), n(this.isSymmetric());
    const i2 = new Float64Array(this.N * this.M), e2 = new _y(i2, this.N, this.M);
    e2.assignCopy(this);
    const h3 = 100 / Number.EPSILON, r3 = this.rows(), a3 = new Float64Array(r3), l3 = new Float64Array(r3), n4 = new _y(a3, r3, 1), x4 = new _y(l3, r3, 1);
    for (let t2 = 0; t2 < r3; t2++) n4.set(t2, e2.atRowCol(t2, t2)), s2.set(t2, e2.atRowCol(t2, t2)), x4.set(t2, 0);
    o3.setIdentity();
    const w4 = () => {
      const t2 = n4;
      o3.transposeInPlace();
      let i3 = 1;
      do {
        i3 *= 3, i3++;
      } while (i3 <= r3);
      do {
        i3 /= 3, i3 = Math.trunc(i3);
        for (let e3 = i3; e3 < r3; e3++) {
          const h4 = s2.at(e3), r4 = Math.abs(h4);
          for (let s3 = 0; s3 < this.M; s3++) t2.set(s3, o3.atRowCol(s3, e3));
          let a4 = e3;
          for (; Math.abs(s2.at(a4 - i3)) < r4; ) {
            s2.set(a4, s2.at(a4 - i3));
            for (let t3 = 0; t3 < this.M; t3++) o3.setRowCol(t3, a4, o3.atRowCol(t3, a4 - i3));
            if (a4 -= i3, a4 < i3) break;
          }
          if (a4 !== e3) {
            s2.set(a4, h4);
            for (let s3 = 0; s3 < this.M; s3++) o3.setRowCol(s3, a4, t2.at(s3));
          }
        }
      } while (i3 > 1);
    };
    for (let t2 = 1; ; t2++) {
      let i3 = 0;
      for (let t3 = 1; t3 < r3; t3++) for (let s3 = 0; s3 < t3; s3++) i3 += Math.abs(e2.atRowCol(t3, s3));
      if (0 === i3) return w4(), true;
      const a4 = t2 < 4 ? 0.2 * i3 / (r3 * r3) : 0;
      for (let l4 = 0; l4 < r3; l4++) for (let i4 = l4 + 1; i4 < r3; i4++) {
        let y4 = h3 * Math.abs(e2.atRowCol(i4, l4));
        if (t2 > 4 && y4 <= Math.abs(s2.at(l4)) && y4 <= Math.abs(s2.at(i4))) e2.setRowCol(i4, l4, 0);
        else if (Math.abs(e2.atRowCol(i4, l4)) > a4) {
          let t3, h4 = s2.at(i4) - s2.at(l4);
          if (y4 < Math.abs(h4)) t3 = e2.atRowCol(i4, l4) / h4;
          else {
            const s3 = 0.5 * h4 / e2.atRowCol(i4, l4);
            t3 = 1 / (Math.abs(s3) + Math.sqrt(1 + s3 * s3)), s3 < 0 && (t3 = -t3);
          }
          const a5 = 1 / Math.sqrt(1 + t3 * t3), n5 = t3 * a5, w5 = n5 / (1 + a5);
          h4 = t3 * e2.atRowCol(i4, l4), x4.set(l4, x4.at(l4) - h4), x4.set(i4, x4.at(i4) + h4), s2.set(l4, s2.at(l4) - h4), s2.set(i4, s2.at(i4) + h4), e2.setRowCol(i4, l4, 0);
          let u4 = 0;
          for (; u4 < l4; u4++) y4 = e2.atRowCol(l4, u4), h4 = e2.atRowCol(i4, u4), e2.setRowCol(l4, u4, y4 - n5 * (h4 + y4 * w5)), e2.setRowCol(i4, u4, h4 + n5 * (y4 - h4 * w5));
          for (u4++; u4 < i4; u4++) y4 = e2.atRowCol(u4, l4), h4 = e2.atRowCol(i4, u4), e2.setRowCol(u4, l4, y4 - n5 * (h4 + y4 * w5)), e2.setRowCol(i4, u4, h4 + n5 * (y4 - h4 * w5));
          for (u4++; u4 < r3; u4++) y4 = e2.atRowCol(u4, l4), h4 = e2.atRowCol(u4, i4), e2.setRowCol(u4, l4, y4 - n5 * (h4 + y4 * w5)), e2.setRowCol(u4, i4, h4 + n5 * (y4 - h4 * w5));
          for (u4 = 0; u4 < r3; u4++) y4 = o3.atRowCol(l4, u4), h4 = o3.atRowCol(i4, u4), o3.setRowCol(l4, u4, y4 - n5 * (h4 + y4 * w5)), o3.setRowCol(i4, u4, h4 + n5 * (y4 - h4 * w5));
        }
      }
      for (let t3 = 0; t3 < r3; t3++) n4.set(t3, n4.at(t3) + x4.at(t3)), s2.set(t3, n4.at(t3)), x4.set(t3, 0);
    }
  }
  static checkDims(s2, o3, i2) {
    n(s2.rows() === o3 && s2.cols() === i2);
  }
};
var n3 = class extends y3 {
  constructor(t2) {
    if (t2.copy) {
      const s3 = new Float64Array(t2.copy.N * t2.copy.M);
      return super(s3, t2.copy.N, t2.copy.M), this.buffer = s3, void this.assignCopy(t2.copy);
    }
    const s2 = new Float64Array(t2.NN * t2.MM);
    super(s2, t2.NN, t2.MM), this.buffer = s2, t2.initializerList && Tt(this.buffer, t2.initializerList, 0, 0, t2.initializerList.length);
  }
  assignCopy(t2) {
    return this === t2 || super.assignCopy(t2), this;
  }
};
var x3 = class _x {
  constructor(t2) {
    this.m_TransformationType = 1, void 0 === t2 ? this.setIdentity() : t2 instanceof _x ? this.set(t2) : this.setScale(t2);
  }
  set(t2) {
    return this.xx = t2.xx, this.xy = t2.xy, this.xd = t2.xd, this.yx = t2.yx, this.yy = t2.yy, this.yd = t2.yd, this;
  }
  clone() {
    return new _x().set(this);
  }
  setZero() {
    this.xx = 0, this.yy = 0, this.xy = 0, this.yx = 0, this.xd = 0, this.yd = 0;
  }
  isEqual(t2) {
    return this === t2 || this.xx === t2.xx && this.xy === t2.xy && this.xd === t2.xd && this.yx === t2.yx && this.yy === t2.yy && this.yd === t2.yd;
  }
  transformInPlace(t2) {
    const s2 = this.xx * t2.x + this.xy * t2.y + this.xd, o3 = this.yx * t2.x + this.yy * t2.y + this.yd;
    t2.x = s2, t2.y = o3;
  }
  transform(t2) {
    const s2 = t2.clone();
    return this.transformInPlace(s2), s2;
  }
  queryTransform(t2, s2) {
    const o3 = this.xx * t2.x + this.xy * t2.y + this.xd, i2 = this.yx * t2.x + this.yy * t2.y + this.yd;
    s2.setCoords(o3, i2);
  }
  transformEnvInPlace(t2) {
    if (t2.isEmpty()) return;
    const s2 = Rt(ei, 4);
    t2.queryCorners(s2), this.transformPoints2D(s2, 4, s2), t2.setFromPoints(s2, 4);
  }
  queryTransformEnv(s2, o3) {
    n(0);
  }
  transformPoints2D(t2, s2, o3) {
    for (let i2 = 0; i2 < s2; ++i2) this.queryTransform(t2[i2], o3[i2]);
  }
  transformInterleavedPoints(t2, s2, o3) {
    s2 *= 2;
    const i2 = ei.getNAN();
    for (let e2 = 0; e2 < s2; e2 += 2) i2.x = t2[e2], i2.y = t2[e2 + 1], this.transformInPlace(i2), o3[e2] = i2.x, o3[e2 + 1] = i2.y;
  }
  multiply(t2) {
    return _x.st_multiply(this, t2, this), this;
  }
  mulLeft(s2) {
    return n(0), this;
  }
  static st_multiply(t2, s2, o3) {
    const i2 = t2.xx * s2.xx + t2.yx * s2.xy, e2 = t2.xy * s2.xx + t2.yy * s2.xy, h3 = t2.xd * s2.xx + t2.yd * s2.xy + s2.xd, r3 = t2.xx * s2.yx + t2.yx * s2.yy, a3 = t2.xy * s2.yx + t2.yy * s2.yy, l3 = t2.xd * s2.yx + t2.yd * s2.yy + s2.yd;
    o3.xx = i2, o3.xy = e2, o3.xd = h3, o3.yx = r3, o3.yy = a3, o3.yd = l3;
  }
  getCoefficients(s2) {
    n(s2.length >= 6), s2[0] = this.xx, s2[1] = this.xy, s2[2] = this.xd, s2[3] = this.yx, s2[4] = this.yy, s2[5] = this.yd;
  }
  setCoefficients(s2) {
    n(s2.length >= 6), this.xx = s2[0], this.xy = s2[1], this.xd = s2[2], this.yx = s2[3], this.yy = s2[4], this.yd = s2[5];
  }
  copyTo(s2) {
    n(0);
  }
  initializeFromRect(t2, s2) {
    t2.isEmpty() || s2.isEmpty() || !t2.width() || !t2.height() ? this.setZero() : (this.xy = this.yx = 0, this.xx = s2.width() / t2.width(), this.yy = s2.height() / t2.height(), this.xd = s2.xmin - t2.xmin * this.xx, this.yd = s2.ymin - t2.ymin * this.yy);
  }
  initializeFromRectIsotropic(t2, s2) {
    if (t2.isEmpty() || !t2.width() || !t2.height() || s2.isEmpty()) this.setZero();
    else {
      this.yx = 0, this.xy = 0, this.xx = s2.width() / t2.width(), this.yy = s2.height() / t2.height(), this.xx > this.yy ? this.xx = this.yy : this.yy = this.xx;
      const o3 = s2.getCenter(), i2 = t2.getCenter();
      this.xd = o3.x - i2.x * this.xx, this.yd = o3.y - i2.y * this.yy;
    }
  }
  initializeFromTwoPointsArray(t2, o3) {
    if (t2[0].equals(o3[0]) && t2[1].equals(o3[1])) return void this.setIdentity();
    if (t2[0].equals(t2[1])) {
      if (o3[0].equals(o3[1])) return void this.setShift(o3[0].sub(t2[0]));
      P("");
    }
    if (!t2[0].equals(t2[1]) && o3[0].equals(o3[1])) return this.setZero(), void this.shift(o3[0]);
    this.setShiftCoords(-t2[0].x, -t2[0].y);
    const i2 = ei.distance(t2[0], t2[1]), h3 = ei.distance(o3[0], o3[1]), r3 = h3 / i2;
    this.scale(r3, r3);
    const a3 = t2[1].sub(t2[0]);
    a3.divThis(i2);
    const l3 = o3[1].sub(o3[0]);
    l3.divThis(h3);
    const y4 = a3.crossProduct(l3), n4 = a3.dotProduct(l3);
    this.rotate(n4, y4), this.shiftCoords(o3[0].x, o3[0].y);
  }
  initializeFromTwoPoints(t2, s2, o3, i2) {
    const e2 = [t2, s2], h3 = [o3, i2];
    this.initializeFromTwoPointsArray(e2, h3);
  }
  transformSizeInPlace(s2) {
    n(0);
  }
  transformSize(s2, o3) {
    n(0);
  }
  transformTol(s2) {
    return n(0), 0;
  }
  transformWithoutTranslateArray(t2, s2, o3) {
    for (let i2 = 0; i2 < s2; ++i2) this.transformWithoutTranslate(t2[i2], o3[i2]);
  }
  transformWithoutTranslateInPlace(t2) {
    const s2 = this.xx * t2.x + this.xy * t2.y, o3 = this.yx * t2.x + this.yy * t2.y;
    t2.setCoords(s2, o3);
  }
  transformWithoutTranslate(t2, s2) {
    const o3 = this.xx * t2.x + this.xy * t2.y, i2 = this.yx * t2.x + this.yy * t2.y;
    s2.setCoords(o3, i2);
  }
  setIdentity() {
    this.xx = 1, this.xy = 0, this.xd = 0, this.yx = 0, this.yy = 1, this.yd = 0;
  }
  isIdentity() {
    return !(1 !== this.xx || 1 !== this.yy || this.xy || this.xd || this.yx || this.yd);
  }
  isIdentityTol(t2) {
    const s2 = t2 * t2;
    return !($(this.xd) + $(this.yd) > s2) && (!($(this.xy + this.xd) + $(this.yy + this.yd - 1) > s2) && !($(this.xx + this.xd - 1) + $(this.yx + this.yd) > s2));
  }
  isReflective() {
    return this.xx * this.yy - this.yx * this.xy < 0;
  }
  isUniform(t2) {
    const s2 = this.xx * this.xx + this.yx * this.yx, o3 = this.xy * this.xy + this.yy * this.yy, i2 = (s2 + o3) * t2;
    return Math.abs(s2 - o3) <= i2 && Math.abs(this.xx * this.xy + this.yx * this.yy) <= i2;
  }
  isUniformNoRotation() {
    return 0 !== this.xx && Math.abs(this.xx) === Math.abs(this.yy) && 0 === this.xy && 0 === this.yx;
  }
  isTranslate() {
    return 1 === this.xx && 1 === this.yy && !this.xy && !this.yx;
  }
  isTranslateTol(t2) {
    const s2 = new ei();
    return s2.setCoords(0, 1), this.transformWithoutTranslateInPlace(s2), s2.y -= 1, !(s2.sqrLength() > t2 * t2) && (s2.setCoords(1, 0), this.transformWithoutTranslateInPlace(s2), s2.x -= 1, s2.sqrLength() <= t2 * t2);
  }
  isOrthonormal(t2) {
    const s2 = new _x();
    return s2.xx = this.xx * this.xx + this.xy * this.xy, s2.xy = this.xx * this.yx + this.xy * this.yy, s2.yx = this.yx * this.xx + this.yy * this.xy, s2.yy = this.yx * this.yx + this.yy * this.yy, s2.xd = 0, s2.yd = 0, s2.isIdentityTol(t2);
  }
  isDegenerate(t2) {
    return Math.abs(this.xx * this.yy - this.yx * this.xy) <= 2 * t2 * (Math.abs(this.xx * this.yy) + Math.abs(this.yx * this.xy));
  }
  isZero() {
    return 0 === this.xx && 0 === this.yy && 0 === this.xy && 0 === this.yx && 0 === this.xd && 0 === this.yd;
  }
  isScaleAndTranslateTol(t2) {
    return this.xy * this.xy + this.yx * this.yx <= (this.xx * this.xx + this.yy * this.yy) * t2;
  }
  setTranslate(t2, s2) {
    return this.xx = 1, this.xy = 0, this.xd = t2, this.yx = 0, this.yy = 1, this.yd = s2, this;
  }
  setShiftCoords(t2, s2) {
    return this.xx = 1, this.xy = 0, this.xd = t2, this.yx = 0, this.yy = 1, this.yd = s2, this;
  }
  setShift(t2) {
    return this.xx = 1, this.xy = 0, this.xd = t2.x, this.yx = 0, this.yy = 1, this.yd = t2.y, this;
  }
  setScaleCoords(t2, s2) {
    return this.xx = t2, this.xy = 0, this.xd = 0, this.yx = 0, this.yy = s2, this.yd = 0, this;
  }
  setScale(t2) {
    return this.setScaleCoords(t2, t2), this;
  }
  setFlipX(t2, s2) {
    return this.xx = -1, this.xy = 0, this.xd = t2 + s2, this.yx = 0, this.yy = 1, this.yd = 0, this;
  }
  setFlipY(t2, s2) {
    return this.xx = 1, this.xy = 0, this.xd = 0, this.yx = 0, this.yy = -1, this.yd = t2 + s2, this;
  }
  setShear(t2, s2) {
    return this.xx = 1, this.xy = t2, this.xd = 0, this.yx = s2, this.yy = 1, this.yd = 0, this;
  }
  scale(t2, s2) {
    return this.xx *= t2, this.xy *= t2, this.xd *= t2, this.yx *= s2, this.yy *= s2, this.yd *= s2, this;
  }
  setRotateAngle(t2) {
    return this.setRotate(Math.cos(t2), Math.sin(t2));
  }
  setRotate(t2, s2) {
    return this.xx = t2, this.xy = -s2, this.xd = 0, this.yx = s2, this.yy = t2, this.yd = 0, this;
  }
  setRotateAngleAbout(t2, s2) {
    return this.setRotateAbout(Math.cos(t2), Math.sin(t2), s2);
  }
  setRotateAbout(t2, s2, o3) {
    return this.setTranslate(-o3.x, -o3.y), this.rotate(t2, s2), this.translate(o3.x, o3.y);
  }
  setSwapCoordinates() {
    return this.xx = 0, this.xy = 1, this.xd = 0, this.yx = 1, this.yy = 0, this.yd = 0, this;
  }
  setRotateCw90() {
    return this.xx = 0, this.xy = 1, this.xd = 0, this.yx = -1, this.yy = 0, this.yd = 0, this;
  }
  setRotateCcw90() {
    return this.xx = 0, this.xy = -1, this.xd = 0, this.yx = 1, this.yy = 0, this.yd = 0, this;
  }
  shiftCoords(t2, s2) {
    return this.xd += t2, this.yd += s2, this;
  }
  shift(t2) {
    return this.xd += t2.x, this.yd += t2.y, this;
  }
  translate(t2, s2) {
    return this.xd += t2, this.yd += s2, this;
  }
  flipX(t2, s2) {
    return this.xx = -this.xx, this.xy = -this.xy, this.xd = t2 + s2 - this.xd, this;
  }
  flipY(t2, s2) {
    return this.yx = -this.yx, this.yy = -this.yy, this.yd = t2 + s2 - this.yd, this;
  }
  shear(t2, s2) {
    const o3 = new _x();
    return o3.setShear(t2, s2), this.multiply(o3);
  }
  rotateAngle(t2) {
    const s2 = new _x();
    return s2.setRotateAngle(t2), this.multiply(s2);
  }
  rotate(t2, s2) {
    const o3 = new _x();
    return o3.setRotate(t2, s2), this.multiply(o3);
  }
  rotateAbout(t2, s2, o3) {
    return this.translate(-o3.x, -o3.y), this.rotate(t2, s2), this.translate(o3.x, o3.y);
  }
  rotateAngleAbout(t2, s2) {
    return this.rotateAbout(Math.cos(t2), Math.sin(t2), s2);
  }
  setInvert(t2) {
    return this.set(t2), this.invertThis();
  }
  invertThis() {
    let t2 = this.xx * this.yy - this.xy * this.yx;
    if (0 === t2) return this.setZero(), this;
    t2 = 1 / t2;
    const s2 = (this.xy * this.yd - this.xd * this.yy) * t2, o3 = (this.xd * this.yx - this.xx * this.yd) * t2, i2 = this.yy * t2, e2 = -this.xy * t2, h3 = -this.yx * t2, r3 = this.xx * t2;
    return this.xd = s2, this.yd = o3, this.xx = i2, this.yy = r3, this.xy = e2, this.yx = h3, this;
  }
  invertPrecise(t2) {
    return this.set(t2), this.invertPreciseThis();
  }
  invertPreciseThis() {
    const t2 = Hs.constructDouble(this.xy), s2 = Hs.constructDouble(this.xx), o3 = s2.mulDouble(this.yy).sub(t2.mulDouble(this.yx));
    if (o3.isZero()) return this.setZero(), this;
    const i2 = o3.clone();
    i2.invertThis();
    const e2 = Hs.constructDouble(this.xd), h3 = t2.mulDouble(this.yd).sub(e2.mulDouble(this.yy)).mul(i2).toDouble(), a3 = e2.mulDouble(this.yx).sub(s2.mulDouble(this.yd)).mul(i2).toDouble(), l3 = i2.mulDouble(this.yy).toDouble(), y4 = i2.mulDouble(-this.xy).toDouble(), n4 = i2.mulDouble(-this.yx).toDouble(), x4 = i2.mulDouble(this.xx).toDouble();
    return this.xd = h3, this.yd = a3, this.xx = l3, this.yy = x4, this.xy = y4, this.yx = n4, this;
  }
  extractScaleTransform(t2, s2) {
    const o3 = Math.sqrt(this.xx * this.xx + this.xy * this.xy), i2 = Math.sqrt(this.yx * this.yx + this.yy * this.yy);
    s2.setScaleCoords(1 / o3, 1 / i2), s2.multiply(this), t2.setScaleCoords(o3, i2);
  }
  setFromTwoTriangles(t2, s2) {
    let o3 = true;
    for (let e2 = 0; e2 < 3; ++e2) o3 = o3 && t2[e2].equals(s2[e2]);
    if (o3) return this.setIdentity(), true;
    const i2 = new ei();
    i2.setSub(t2[0], t2[1]);
    const h3 = new ei();
    h3.setSub(t2[0], t2[2]);
    const r3 = new ei();
    r3.setSub(s2[0], s2[1]);
    const a3 = new ei();
    a3.setSub(s2[0], s2[2]);
    const l3 = 4 * Number.EPSILON * (Math.abs(i2.x * h3.y) + Math.abs(h3.x * i2.y));
    let y4 = i2.x * h3.y - i2.y * h3.x;
    return Math.abs(y4) > l3 ? (y4 = 1 / y4, this.xx = (r3.x * h3.y - i2.y * a3.x) * y4, this.xy = (i2.x * a3.x - r3.x * h3.x) * y4, this.yx = (r3.y * h3.y - i2.y * a3.y) * y4, this.yy = (i2.x * a3.y - r3.y * h3.x) * y4, this.xd = s2[0].x - (this.xx * t2[0].x + this.xy * t2[0].y), this.yd = s2[0].y - (this.yx * t2[0].x + this.yy * t2[0].y), true) : (this.setZero(), false);
  }
  initializeFromControlPoints(t2, s2, o3, i2, e2 = null) {
    return 0 === s2 ? (this.setIdentity(), void (e2 && e2.setIdentity())) : 1 === s2 ? (this.setShift(i2[0].sub(o3[0])), void (e2 && e2.setShift(o3[0].sub(i2[0])))) : (s2 < 3 && (t2 = 1), void (4 === t2 && s2 > 2 ? C3(this, s2, o3, i2, e2) : f3(t2, this, s2, o3, i2, e2)));
  }
  calculateErrors(s2, o3, i2, h3) {
    n(s2 > 0 && null !== o3 && null !== i2);
    let r3 = 0;
    for (let t2 = 0; t2 < s2; ++t2) {
      const s3 = this.transform(o3[t2]), a3 = ei.sqrDistance(i2[t2], s3);
      r3 += a3, h3 && (h3[t2] = Math.sqrt(a3));
    }
    return Math.sqrt(r3 / s2);
  }
};
var w3 = [43, 11, 41, 9, 61];
function u3(s2, o3) {
  n(!(2 !== o3.rows() && 3 !== o3.rows() || 2 !== o3.cols() && 3 !== o3.rows())), s2.xx = o3.atRowCol(0, 0), s2.xy = o3.atRowCol(0, 1), s2.yx = o3.atRowCol(1, 0), s2.yy = o3.atRowCol(1, 1), 3 === o3.cols() ? (s2.xd = o3.atRowCol(0, 2), s2.yd = o3.atRowCol(1, 2)) : (s2.xd = 0, s2.yd = 0);
}
function C3(t2, s2, i2, h3, r3) {
  const a3 = ei.average(i2, s2), l3 = ei.average(h3, s2), y4 = new n3({ NN: 2, MM: 2 });
  y4.setZero();
  const x4 = new n3({ NN: 2, MM: 2 });
  x4.setZero();
  for (let o3 = 0; o3 < s2; ++o3) y4.setRowCol(0, 0, y4.atRowCol(0, 0) + (i2[o3].x - a3.x) * (i2[o3].x - a3.x)), y4.setRowCol(0, 1, y4.atRowCol(0, 1) + (i2[o3].x - a3.x) * (i2[o3].y - a3.y)), y4.setRowCol(1, 1, y4.atRowCol(1, 1) + (i2[o3].y - a3.y) * (i2[o3].y - a3.y)), x4.setRowCol(0, 0, x4.atRowCol(0, 0) + (h3[o3].x - l3.x) * (i2[o3].x - a3.x)), x4.setRowCol(0, 1, x4.atRowCol(0, 1) + (h3[o3].x - l3.x) * (i2[o3].y - a3.y)), x4.setRowCol(1, 0, x4.atRowCol(1, 0) + (h3[o3].y - l3.y) * (i2[o3].x - a3.x)), x4.setRowCol(1, 1, x4.atRowCol(1, 1) + (h3[o3].y - l3.y) * (i2[o3].y - a3.y));
  y4.setRowCol(1, 0, y4.atRowCol(0, 1));
  const w4 = new n3({ NN: 2, MM: 2 });
  y4.pseudoInverse(w4, true) || M("Failed to compute pseudo inverse"), x4.mul(w4, x4), u3(t2, x4);
  const C4 = a3.clone();
  t2.transformInPlace(C4), t2.xd = l3.x - C4.x, t2.yd = l3.y - C4.y, r3 && (x4.pseudoInverse(w4, false) || M("Failed to compute pseudo inverse"), u3(r3, w4), r3.transformInPlace(l3), r3.xd = a3.x - l3.x, r3.yd = a3.y - l3.y);
}
function f3(s2, i2, h3, r3, a3, l3) {
  n(1 === s2 || 0 === s2 || 2 === s2 || 3 === s2), i2.setIdentity();
  const y4 = ei.average(r3, h3), C4 = ei.average(a3, h3);
  if (n(s2 < w3.length && s2 > 0), 8 & w3[s2]) {
    const t2 = new n3({ NN: 2, MM: 2 });
    t2.setZero();
    for (let s3 = 0; s3 < h3; ++s3) t2.setRowCol(0, 0, t2.atRowCol(0, 0) + (a3[s3].x - C4.x) * (r3[s3].x - y4.x)), t2.setRowCol(1, 0, t2.atRowCol(1, 0) + (a3[s3].x - C4.x) * (r3[s3].y - y4.y)), t2.setRowCol(0, 1, t2.atRowCol(0, 1) + (a3[s3].y - C4.y) * (r3[s3].x - y4.x)), t2.setRowCol(1, 1, t2.atRowCol(1, 1) + (a3[s3].y - C4.y) * (r3[s3].y - y4.y));
    const e2 = new n3({ NN: 2, MM: 2 }), l4 = new n3({ NN: 2, MM: 1 }), f5 = new n3({ NN: 2, MM: 2 });
    t2.svd(e2, l4, f5) || M("Failed to compute svd");
    const R3 = new n3({ NN: 2, MM: 2 });
    e2.transpose(R3);
    const d3 = new n3({ NN: 2, MM: 2 });
    if (f5.mul(R3, d3), !(32 & w3[s2])) {
      d3.determinant() < 0 && (R3.setRowCol(1, 0, -R3.atRowCol(1, 0)), R3.setRowCol(1, 1, -R3.atRowCol(1, 1)), f5.mul(R3, d3));
    }
    const c3 = new x3();
    u3(c3, d3), i2.set(c3);
  }
  if (2 & w3[s2]) {
    let t2 = 0, s3 = 0;
    for (let o3 = 0; o3 < h3; ++o3) {
      const e2 = r3[o3].sub(y4);
      t2 += e2.sqrLength(), i2.transformInPlace(e2), s3 += e2.dotProduct(a3[o3].sub(C4));
    }
    if (0 === t2) 0 === s3 ? i2.setIdentity() : i2.setZero();
    else {
      const o3 = s3 / t2;
      i2.scale(o3, o3);
    }
  } else n(!(4 & w3[s2]));
  const f4 = y4.clone();
  i2.transformInPlace(f4), i2.xd = C4.x - f4.x, i2.yd = C4.y - f4.y, l3 && (l3.set(i2), l3.invertThis(), l3.isZero() && (l3.xd = y4.x, l3.yd = y4.y));
}

export {
  n,
  a,
  m,
  l,
  p,
  d,
  f,
  y,
  h,
  g,
  w,
  E,
  G,
  v,
  P,
  B,
  C,
  x,
  z,
  A,
  b,
  T,
  k,
  N,
  j,
  I,
  L,
  R,
  U,
  D,
  n2,
  x2,
  p2,
  I2,
  w2,
  D2,
  A2,
  P2,
  z2,
  C2,
  R2,
  B2,
  S,
  F,
  k2,
  L2,
  O,
  G2,
  Q,
  V,
  U2,
  Y,
  j2,
  $,
  H,
  W,
  X,
  J,
  st,
  ct,
  ft,
  _t,
  vt,
  pt,
  yt,
  Tt,
  gt,
  Mt,
  Et,
  It,
  wt,
  Dt,
  At,
  Pt,
  qt,
  zt,
  Zt,
  Ct,
  Rt,
  Bt,
  St,
  Ft,
  kt,
  Lt,
  Ot,
  Gt,
  Qt,
  Vt,
  Ut,
  Yt,
  jt,
  Kt,
  rs,
  us,
  hs,
  as,
  os,
  ms,
  ls,
  cs,
  Ts,
  gs,
  Ms,
  Es,
  Is,
  ws,
  Ps,
  qs,
  Cs,
  Rs,
  Bs,
  Ss,
  Fs,
  ks,
  Ls,
  Os,
  Gs,
  Qs,
  Vs,
  Ys,
  js,
  Hs,
  Ws,
  Xs,
  ti,
  si,
  ii,
  ei,
  x3
};
//# sourceMappingURL=chunk-67PUVBHA.js.map
