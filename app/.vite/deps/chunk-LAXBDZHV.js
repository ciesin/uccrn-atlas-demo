import {
  O as O2,
  c,
  o as o3
} from "./chunk-NVEHOQKI.js";
import {
  a
} from "./chunk-H2PMLL3X.js";
import {
  m as m2
} from "./chunk-ZKPJPNLW.js";
import {
  O,
  X as X2,
  x
} from "./chunk-HONYA6AI.js";
import {
  e as e5,
  r as r3
} from "./chunk-NOMJWA3C.js";
import {
  e as e3
} from "./chunk-X5RZJMNW.js";
import {
  e as e4,
  t
} from "./chunk-K24WU5UX.js";
import {
  l as l2
} from "./chunk-U7ERRXB6.js";
import {
  n as n3
} from "./chunk-O2L6JAHP.js";
import {
  f as f3,
  p
} from "./chunk-LH36NQSN.js";
import {
  N as N2,
  Q,
  R,
  X,
  Z,
  d,
  e as e2,
  f as f2,
  g,
  l,
  m,
  o as o2,
  q,
  r as r2,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n as n2
} from "./chunk-MHM4GDCM.js";
import {
  z
} from "./chunk-363AT5UF.js";
import {
  G,
  o
} from "./chunk-QTWG47SG.js";
import {
  N,
  _,
  e,
  n,
  r
} from "./chunk-JLFSX3JT.js";
import {
  f2 as f,
  s3 as s
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Attribute.js
var s2 = class {
  constructor(s3, t3, i = t3) {
    this.data = s3, this.size = t3, this.stride = i;
  }
};
var t2 = class extends s2 {
  constructor(s3, t3, i, e6 = false, c2 = i) {
    super(s3, i, c2), this.indices = t3, this.exclusive = e6;
  }
};

// node_modules/@arcgis/core/views/3d/support/dito.js
var m3 = 1e-6;
var f4 = n();
var h = n();
function u2(t3, r4) {
  const { data: n4, size: i } = t3, o4 = n4.length / i;
  if (o4 <= 0) return;
  const s3 = new tt(t3);
  it(f4, s3.minProj, s3.maxProj), st(f4, f4, 0.5), ot(h, s3.maxProj, s3.minProj);
  const a2 = nt(h), m4 = new rt();
  m4.quality = a2, o4 < 14 && (t3 = new s2(new Float64Array(s3.buffer, 112, 42), 3));
  const u3 = n(), j2 = n(), P2 = n(), b2 = n(), x3 = n(), I3 = n(), N5 = n();
  switch (l3(s3, t3, N5, u3, j2, P2, b2, x3, I3, m4)) {
    case 1:
      return void O3(f4, h, r4);
    case 2:
      return void K(t3, b2, r4);
  }
  w(t3, N5, u3, j2, P2, b2, x3, I3, m4), L(t3, m4.b0, m4.b1, m4.b2, D, H);
  const V3 = n();
  ot(V3, H, D), m4.quality = nt(V3), m4.quality < a2 ? Z2(m4.b0, m4.b1, m4.b2, D, H, V3, r4) : O3(f4, h, r4);
}
function l3(t3, r4, n4, i, o4, s3, e6, a2, c2, f5) {
  if (A(t3, i, o4), ft(i, o4) < m3) return 1;
  ot(e6, i, o4), ct(e6, e6);
  return q2(r4, i, e6, s3) < m3 ? 2 : (ot(a2, o4, s3), ct(a2, a2), ot(c2, s3, i), ct(c2, c2), at(n4, a2, e6), ct(n4, n4), Y(r4, n4, e6, a2, c2, f5), 0);
}
var j = n();
var P = n();
var b = n();
var x2 = n();
var I = n();
var N3 = n();
var V = n();
var y = n();
function w(t3, r4, n4, i, o4, s3, e6, a2, c2) {
  M(t3, r4, n4, j, P), void 0 !== j[0] && (ot(b, j, n4), ct(b, b), ot(x2, j, i), ct(x2, x2), ot(I, j, o4), ct(I, I), at(N3, x2, s3), ct(N3, N3), at(V, I, e6), ct(V, V), at(y, b, a2), ct(y, y), Y(t3, N3, s3, x2, b, c2), Y(t3, V, e6, I, x2, c2), Y(t3, y, a2, b, I, c2)), void 0 !== P[0] && (ot(b, P, n4), ct(b, b), ot(x2, P, i), ct(x2, x2), ot(I, P, o4), ct(I, I), at(N3, x2, s3), ct(N3, N3), at(V, I, e6), ct(V, V), at(y, b, a2), ct(y, y), Y(t3, N3, s3, x2, b, c2), Y(t3, V, e6, I, x2, c2), Y(t3, y, a2, b, I, c2));
}
function A(t3, r4, n4) {
  let i = ft(t3.maxVert[0], t3.minVert[0]), o4 = 0;
  for (let s3 = 1; s3 < 7; ++s3) {
    const r5 = ft(t3.maxVert[s3], t3.minVert[s3]);
    r5 > i && (i = r5, o4 = s3);
  }
  et(r4, t3.minVert[o4]), et(n4, t3.maxVert[o4]);
}
var g2 = [0, 0, 0];
function q2(t3, r4, n4, i) {
  const { data: o4, size: s3 } = t3;
  let e6 = Number.NEGATIVE_INFINITY, a2 = 0;
  for (let c2 = 0; c2 < o4.length; c2 += s3) {
    g2[0] = o4[c2] - r4[0], g2[1] = o4[c2 + 1] - r4[1], g2[2] = o4[c2 + 2] - r4[2];
    const t4 = n4[0] * g2[0] + n4[1] * g2[1] + n4[2] * g2[2], i2 = n4[0] * n4[0] + n4[1] * n4[1] + n4[2] * n4[2], s4 = g2[0] * g2[0] + g2[1] * g2[1] + g2[2] * g2[2] - t4 * t4 / i2;
    s4 > e6 && (e6 = s4, a2 = c2);
  }
  return et(i, o4, a2), e6;
}
var d2 = n3();
function M(t3, r4, n4, i, o4) {
  G2(t3, r4, d2, o4, i);
  const s3 = ht(n4, r4);
  d2[1] - m3 <= s3 && (i[0] = void 0), d2[0] + m3 >= s3 && (o4[0] = void 0);
}
var F = n();
var T = n();
var v = n();
var E = n();
var p2 = n();
var z2 = n();
function Y(t3, r4, n4, i, o4, s3) {
  if (mt(r4) < m3) return;
  at(F, n4, r4), at(T, i, r4), at(v, o4, r4), S(t3, r4, d2), p2[1] = d2[0], E[1] = d2[1], z2[1] = E[1] - p2[1];
  const e6 = [n4, i, o4], a2 = [F, T, v];
  for (let c2 = 0; c2 < 3; ++c2) {
    S(t3, e6[c2], d2), p2[0] = d2[0], E[0] = d2[1], S(t3, a2[c2], d2), p2[2] = d2[0], E[2] = d2[1], z2[0] = E[0] - p2[0], z2[2] = E[2] - p2[2];
    const n5 = nt(z2);
    n5 < s3.quality && (et(s3.b0, e6[c2]), et(s3.b1, r4), et(s3.b2, a2[c2]), s3.quality = n5);
  }
}
var _2 = n();
function S(t3, r4, n4) {
  const { data: i, size: o4 } = t3;
  n4[0] = Number.POSITIVE_INFINITY, n4[1] = Number.NEGATIVE_INFINITY;
  for (let s3 = 0; s3 < i.length; s3 += o4) {
    const t4 = i[s3] * r4[0] + i[s3 + 1] * r4[1] + i[s3 + 2] * r4[2];
    n4[0] = Math.min(n4[0], t4), n4[1] = Math.max(n4[1], t4);
  }
}
function G2(t3, r4, n4, i, o4) {
  const { data: s3, size: e6 } = t3;
  et(i, s3), et(o4, i), n4[0] = ht(_2, r4), n4[1] = n4[0];
  for (let a2 = e6; a2 < s3.length; a2 += e6) {
    const t4 = s3[a2] * r4[0] + s3[a2 + 1] * r4[1] + s3[a2 + 2] * r4[2];
    t4 < n4[0] && (n4[0] = t4, et(i, s3, a2)), t4 > n4[1] && (n4[1] = t4, et(o4, s3, a2));
  }
}
function O3(t3, n4, i) {
  i.center = t3, i.halfSize = g(n4, n4, 0.5), i.quaternion = r3;
}
var k = n();
var B = n();
var C = n();
var D = n();
var H = n();
var J = n();
function K(t3, r4, n4) {
  et(k, r4), Math.abs(r4[0]) > Math.abs(r4[1]) && Math.abs(r4[0]) > Math.abs(r4[2]) ? k[0] = 0 : Math.abs(r4[1]) > Math.abs(r4[2]) ? k[1] = 0 : k[2] = 0, mt(k) < m3 && (k[0] = k[1] = k[2] = 1), at(B, r4, k), ct(B, B), at(C, r4, B), ct(C, C), L(t3, r4, B, C, D, H), ot(J, H, D), Z2(r4, B, C, D, H, J, n4);
}
function L(t3, r4, n4, i, o4, s3) {
  S(t3, r4, d2), o4[0] = d2[0], s3[0] = d2[1], S(t3, n4, d2), o4[1] = d2[0], s3[1] = d2[1], S(t3, i, d2), o4[2] = d2[0], s3[2] = d2[1];
}
var Q2 = n();
var R2 = n();
var U = n();
var W = t(1, 0, 0, 0, 1, 0, 0, 0, 1);
var X3 = e5();
function Z2(t3, r4, n4, i, e6, a2, c2) {
  W[0] = t3[0], W[1] = t3[1], W[2] = t3[2], W[3] = r4[0], W[4] = r4[1], W[5] = r4[2], W[6] = n4[0], W[7] = n4[1], W[8] = n4[2], c2.quaternion = ut(X3, W), it(Q2, i, e6), st(Q2, Q2, 0.5), st(R2, t3, Q2[0]), st(U, r4, Q2[1]), it(R2, R2, U), st(U, n4, Q2[2]), c2.center = u(R2, R2, U), c2.halfSize = g(Q2, a2, 0.5);
}
var $ = 7;
var tt = class {
  constructor(t3) {
    this.minVert = new Array($), this.maxVert = new Array($);
    const r4 = 64 * $;
    this.buffer = new ArrayBuffer(r4);
    let n4 = 0;
    this.minProj = new Float64Array(this.buffer, n4, $), n4 += 8 * $, this.maxProj = new Float64Array(this.buffer, n4, $), n4 += 8 * $;
    for (let a2 = 0; a2 < $; ++a2) this.minVert[a2] = new Float64Array(this.buffer, n4, 3), n4 += 24;
    for (let a2 = 0; a2 < $; ++a2) this.maxVert[a2] = new Float64Array(this.buffer, n4, 3), n4 += 24;
    for (let a2 = 0; a2 < $; ++a2) this.minProj[a2] = Number.POSITIVE_INFINITY, this.maxProj[a2] = Number.NEGATIVE_INFINITY;
    const i = new Array($), o4 = new Array($), { data: s3, size: e6 } = t3;
    for (let a2 = 0; a2 < s3.length; a2 += e6) {
      let t4 = s3[a2];
      t4 < this.minProj[0] && (this.minProj[0] = t4, i[0] = a2), t4 > this.maxProj[0] && (this.maxProj[0] = t4, o4[0] = a2), t4 = s3[a2 + 1], t4 < this.minProj[1] && (this.minProj[1] = t4, i[1] = a2), t4 > this.maxProj[1] && (this.maxProj[1] = t4, o4[1] = a2), t4 = s3[a2 + 2], t4 < this.minProj[2] && (this.minProj[2] = t4, i[2] = a2), t4 > this.maxProj[2] && (this.maxProj[2] = t4, o4[2] = a2), t4 = s3[a2] + s3[a2 + 1] + s3[a2 + 2], t4 < this.minProj[3] && (this.minProj[3] = t4, i[3] = a2), t4 > this.maxProj[3] && (this.maxProj[3] = t4, o4[3] = a2), t4 = s3[a2] + s3[a2 + 1] - s3[a2 + 2], t4 < this.minProj[4] && (this.minProj[4] = t4, i[4] = a2), t4 > this.maxProj[4] && (this.maxProj[4] = t4, o4[4] = a2), t4 = s3[a2] - s3[a2 + 1] + s3[a2 + 2], t4 < this.minProj[5] && (this.minProj[5] = t4, i[5] = a2), t4 > this.maxProj[5] && (this.maxProj[5] = t4, o4[5] = a2), t4 = s3[a2] - s3[a2 + 1] - s3[a2 + 2], t4 < this.minProj[6] && (this.minProj[6] = t4, i[6] = a2), t4 > this.maxProj[6] && (this.maxProj[6] = t4, o4[6] = a2);
    }
    for (let a2 = 0; a2 < $; ++a2) {
      let t4 = i[a2];
      et(this.minVert[a2], s3, t4), t4 = o4[a2], et(this.maxVert[a2], s3, t4);
    }
  }
};
var rt = class {
  constructor() {
    this.b0 = r(1, 0, 0), this.b1 = r(0, 1, 0), this.b2 = r(0, 0, 1), this.quality = 0;
  }
};
function nt(t3) {
  return t3[0] * t3[1] + t3[0] * t3[2] + t3[1] * t3[2];
}
function it(t3, r4, n4) {
  t3[0] = r4[0] + n4[0], t3[1] = r4[1] + n4[1], t3[2] = r4[2] + n4[2];
}
function ot(t3, r4, n4) {
  t3[0] = r4[0] - n4[0], t3[1] = r4[1] - n4[1], t3[2] = r4[2] - n4[2];
}
function st(t3, r4, n4) {
  t3[0] = r4[0] * n4, t3[1] = r4[1] * n4, t3[2] = r4[2] * n4;
}
function et(t3, r4, n4 = 0) {
  t3[0] = r4[n4], t3[1] = r4[n4 + 1], t3[2] = r4[n4 + 2];
}
function at(t3, r4, n4) {
  const i = r4[0], o4 = r4[1], s3 = r4[2], e6 = n4[0], a2 = n4[1], c2 = n4[2];
  t3[0] = o4 * c2 - s3 * a2, t3[1] = s3 * e6 - i * c2, t3[2] = i * a2 - o4 * e6;
}
function ct(t3, r4) {
  const n4 = r4[0] * r4[0] + r4[1] * r4[1] + r4[2] * r4[2];
  if (n4 > 0) {
    const i = 1 / Math.sqrt(n4);
    t3[0] = r4[0] * i, t3[1] = r4[1] * i, t3[2] = r4[2] * i;
  }
}
function mt(t3) {
  return t3[0] * t3[0] + t3[1] * t3[1] + t3[2] * t3[2];
}
function ft(t3, r4) {
  const n4 = r4[0] - t3[0], i = r4[1] - t3[1], o4 = r4[2] - t3[2];
  return n4 * n4 + i * i + o4 * o4;
}
function ht(t3, r4) {
  return t3[0] * r4[0] + t3[1] * r4[1] + t3[2] * r4[2];
}
function ut(t3, r4) {
  const n4 = r4[0] + r4[4] + r4[8];
  if (n4 > 0) {
    let i = Math.sqrt(n4 + 1);
    t3[3] = 0.5 * i, i = 0.5 / i, t3[0] = (r4[5] - r4[7]) * i, t3[1] = (r4[6] - r4[2]) * i, t3[2] = (r4[1] - r4[3]) * i;
  } else {
    let n5 = 0;
    r4[4] > r4[0] && (n5 = 1), r4[8] > r4[3 * n5 + n5] && (n5 = 2);
    const i = (n5 + 1) % 3, o4 = (n5 + 2) % 3;
    let s3 = Math.sqrt(r4[3 * n5 + n5] - r4[3 * i + i] - r4[3 * o4 + o4] + 1);
    t3[n5] = 0.5 * s3, s3 = 0.5 / s3, t3[3] = (r4[3 * i + o4] - r4[3 * o4 + i]) * s3, t3[i] = (r4[3 * i + n5] + r4[3 * n5 + i]) * s3, t3[o4] = (r4[3 * o4 + n5] + r4[3 * n5 + o4]) * s3;
  }
  return t3;
}

// node_modules/@arcgis/core/views/3d/support/orientedBoundingBox.js
var I2 = class _I {
  constructor(t3 = _, a2 = gt, e6 = r3) {
    this._data = [t3[0], t3[1], t3[2], a2[0], a2[1], a2[2], e6[0], e6[1], e6[2], e6[3]];
  }
  clone() {
    const t3 = new _I();
    return t3._data = this._data.slice(), t3;
  }
  invalidate() {
    this._data[3] = -1;
  }
  get isValid() {
    return this._data[3] >= 0;
  }
  static fromData(t3) {
    const a2 = new _I();
    return a2._data = t3.slice(), a2;
  }
  static fromJSON(t3) {
    return new _I(t3.center, t3.halfSize, t3.quaternion);
  }
  copy(t3) {
    this._data = t3.data.slice();
  }
  get center() {
    return o2(c.get(), this._data[0], this._data[1], this._data[2]);
  }
  get centerX() {
    return this._data[0];
  }
  get centerY() {
    return this._data[1];
  }
  get centerZ() {
    return this._data[2];
  }
  getCenter(t3) {
    return t3[0] = this._data[0], t3[1] = this._data[1], t3[2] = this._data[2], t3;
  }
  set center(t3) {
    this._data[0] = t3[0], this._data[1] = t3[1], this._data[2] = t3[2];
  }
  setCenter(t3, a2, e6) {
    this._data[0] = t3, this._data[1] = a2, this._data[2] = e6;
  }
  get halfSize() {
    return o2(c.get(), this._data[3], this._data[4], this._data[5]);
  }
  get halfSizeX() {
    return this._data[3];
  }
  get halfSizeY() {
    return this._data[4];
  }
  get halfSizeZ() {
    return this._data[5];
  }
  getHalfSize(t3) {
    return t3[0] = this._data[3], t3[1] = this._data[4], t3[2] = this._data[5], t3;
  }
  set halfSize(t3) {
    this._data[3] = t3[0], this._data[4] = t3[1], this._data[5] = t3[2];
  }
  get quaternion() {
    return X2(o3.get(), this._data[6], this._data[7], this._data[8], this._data[9]);
  }
  getQuaternion(t3) {
    return t3[0] = this._data[6], t3[1] = this._data[7], t3[2] = this._data[8], t3[3] = this._data[9], t3;
  }
  set quaternion(t3) {
    this._data[6] = t3[0], this._data[7] = t3[1], this._data[8] = t3[2], this._data[9] = t3[3];
  }
  get data() {
    return this._data;
  }
  getCorners(t3) {
    const a2 = O4, e6 = this._data;
    a2[0] = e6[6], a2[1] = e6[7], a2[2] = e6[8], a2[3] = e6[9];
    for (let s3 = 0; s3 < 8; ++s3) {
      const i = t3[s3];
      i[0] = (1 & s3 ? -1 : 1) * e6[3], i[1] = (2 & s3 ? -1 : 1) * e6[4], i[2] = (4 & s3 ? -1 : 1) * e6[5], Q(i, i, a2), i[0] += e6[0], i[1] += e6[1], i[2] += e6[2];
    }
  }
  doesIntersectFrustumConservativeApproximation(t3) {
    return this.intersectPlane(t3[0]) <= 0 && this.intersectPlane(t3[1]) <= 0 && this.intersectPlane(t3[2]) <= 0 && this.intersectPlane(t3[3]) <= 0 && this.intersectPlane(t3[4]) <= 0 && this.intersectPlane(t3[5]) <= 0;
  }
  get radius() {
    const t3 = this._data[3], a2 = this._data[4], e6 = this._data[5];
    return Math.sqrt(t3 * t3 + a2 * a2 + e6 * e6);
  }
  intersectSphere(t3) {
    X4[0] = this._data[0] - t3[0], X4[1] = this._data[1] - t3[1], X4[2] = this._data[2] - t3[2];
    const a2 = this.getQuaternion(T2);
    return O(O4, a2), Q(X4, X4, O4), f2(X4, X4), Y2[0] = Math.min(X4[0], this._data[3]), Y2[1] = Math.min(X4[1], this._data[4]), Y2[2] = Math.min(X4[2], this._data[5]), X(Y2, X4) < t3[3] * t3[3];
  }
  intersectSphereWithMBS(t3, a2 = this.radius) {
    const e6 = this._data;
    X4[0] = e6[0] - t3[0], X4[1] = e6[1] - t3[1], X4[2] = e6[2] - t3[2];
    const s3 = t3[3], i = s3 + a2;
    return !(Z(X4) > i * i) && (O4[0] = -e6[6], O4[1] = -e6[7], O4[2] = -e6[8], O4[3] = e6[9], Q(X4, X4, O4), f2(X4, X4), Y2[0] = Math.min(X4[0], e6[3]), Y2[1] = Math.min(X4[1], e6[4]), Y2[2] = Math.min(X4[2], e6[5]), X(Y2, X4) < s3 * s3);
  }
  intersectPlane(t3) {
    const a2 = t3[0] * this._data[0] + t3[1] * this._data[1] + t3[2] * this._data[2] + t3[3], e6 = this.projectedRadius(O2(t3));
    return a2 > e6 ? 1 : a2 < -e6 ? -1 : 0;
  }
  intersectRay(t3, a2, e6 = 0) {
    const s3 = this._data, i = O4;
    i[0] = -s3[6], i[1] = -s3[7], i[2] = -s3[8], i[3] = s3[9], X4[0] = t3[0] - s3[0], X4[1] = t3[1] - s3[1], X4[2] = t3[2] - s3[2];
    const r4 = Q(X4, X4, O4), n4 = Q(Y2, a2, O4);
    let o4 = -1 / 0, h2 = 1 / 0;
    const c2 = this.getHalfSize(ct2);
    for (let d3 = 0; d3 < 3; d3++) {
      const t4 = r4[d3], a3 = n4[d3], s4 = c2[d3] + e6;
      if (Math.abs(a3) > 1e-6) {
        const e7 = (s4 - t4) / a3, i2 = (-s4 - t4) / a3;
        o4 = Math.max(o4, Math.min(e7, i2)), h2 = Math.min(h2, Math.max(e7, i2));
      } else if (t4 > s4 || t4 < -s4) return false;
    }
    return o4 <= h2;
  }
  projectedArea(e6, s3, i, n4) {
    const o4 = this.getQuaternion(T2);
    O(O4, o4), X4[0] = e6[0] - this._data[0], X4[1] = e6[1] - this._data[1], X4[2] = e6[2] - this._data[2], Q(X4, X4, O4);
    const h2 = this.getHalfSize(ct2), _3 = X4[0] < -h2[0] ? -1 : X4[0] > h2[0] ? 1 : 0, l4 = X4[1] < -h2[1] ? -1 : X4[1] > h2[1] ? 1 : 0, m4 = X4[2] < -h2[2] ? -1 : X4[2] > h2[2] ? 1 : 0, g3 = Math.abs(_3) + Math.abs(l4) + Math.abs(m4);
    if (0 === g3) return 1 / 0;
    const p3 = 1 === g3 ? 4 : 6, M2 = 6 * (_3 + 3 * l4 + 9 * m4 + 13);
    p(dt, o4), f3(dt, dt, h2);
    const b2 = this.getCenter(ot2);
    for (let t3 = 0; t3 < p3; t3++) {
      const a2 = K2[M2 + t3];
      o2(X4, ((1 & a2) << 1) - 1, (2 & a2) - 1, ((4 & a2) >> 1) - 1), N2(X4, X4, dt), u(E2, b2, X4), E2[3] = 1, z(E2, E2, s3);
      const e7 = 1 / Math.max(1e-6, E2[3]);
      N4[2 * t3] = E2[0] * e7, N4[2 * t3 + 1] = E2[1] * e7;
    }
    const j2 = 2 * p3 - 2;
    let S2 = N4[0] * (N4[3] - N4[j2 + 1]) + N4[j2] * (N4[1] - N4[j2 - 1]);
    for (let t3 = 2; t3 < j2; t3 += 2) S2 += N4[t3] * (N4[t3 + 3] - N4[t3 - 1]);
    return Math.abs(S2) * i * n4 * 0.125;
  }
  projectedRadius(t3) {
    const a2 = this.getQuaternion(T2);
    return O(O4, a2), Q(X4, t3, O4), Math.abs(X4[0] * this._data[3]) + Math.abs(X4[1] * this._data[4]) + Math.abs(X4[2] * this._data[5]);
  }
  minimumDistancePlane(t3) {
    return t3[0] * this._data[0] + t3[1] * this._data[1] + t3[2] * this._data[2] + t3[3] - this.projectedRadius(O2(t3));
  }
  maximumDistancePlane(t3) {
    return t3[0] * this._data[0] + t3[1] * this._data[1] + t3[2] * this._data[2] + t3[3] + this.projectedRadius(O2(t3));
  }
  toAaBoundingBox(a2) {
    const e6 = this.getQuaternion(T2), s3 = p(dt, e6), i = this._data[3] * Math.abs(s3[0]) + this._data[4] * Math.abs(s3[3]) + this._data[5] * Math.abs(s3[6]), r4 = this._data[3] * Math.abs(s3[1]) + this._data[4] * Math.abs(s3[4]) + this._data[5] * Math.abs(s3[7]), n4 = this._data[3] * Math.abs(s3[2]) + this._data[4] * Math.abs(s3[5]) + this._data[5] * Math.abs(s3[8]);
    a2[0] = this._data[0] - i, a2[1] = this._data[1] - r4, a2[2] = this._data[2] - n4, a2[3] = this._data[0] + i, a2[4] = this._data[1] + r4, a2[5] = this._data[2] + n4;
  }
  transform(t3, a2, e6, s3 = 0, i = a(e6), r4 = a(a2), n4 = G(a2, r4)) {
    if (e6 === i) a2.isGeographic ? st2(this, t3, a2, s3, r4) : et2(this, t3, a2, s3, r4, n4);
    else if (a2.isWGS84 && (e6.isWebMercator || f(e6))) $2(a2, this, e6, t3, s3);
    else if (a2.isWebMercator && f(e6)) tt2(a2, this, e6, t3, s3);
    else {
      const i2 = this.getCenter(ot2);
      i2[2] += s3, o(i2, a2, 0, i2, e6, 0), t3.center = i2, this !== t3 && (t3.quaternion = this.getQuaternion(T2), t3.halfSize = this.getHalfSize(ct2));
    }
  }
};
var O4 = e5();
var T2 = e5();
var V2 = e5();
var X4 = n();
var Y2 = n();
var E2 = n2();
function J2(t3, a2 = new I2()) {
  return u2(t3, a2), a2;
}
var N4 = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1.1, 1.2];
var K2 = (() => {
  const t3 = new Int8Array(162);
  let a2 = 0;
  const e6 = (e7) => {
    for (let s3 = 0; s3 < e7.length; s3++) t3[a2 + s3] = e7[s3];
    a2 += 6;
  };
  return e6([6, 2, 3, 1, 5, 4]), e6([0, 2, 3, 1, 5, 4]), e6([0, 2, 3, 7, 5, 4]), e6([0, 1, 3, 2, 6, 4]), e6([0, 1, 3, 2, 0, 0]), e6([0, 1, 5, 7, 3, 2]), e6([0, 1, 3, 7, 6, 4]), e6([0, 1, 3, 7, 6, 2]), e6([0, 1, 5, 7, 6, 2]), e6([0, 1, 5, 4, 6, 2]), e6([0, 1, 5, 4, 0, 0]), e6([0, 1, 3, 7, 5, 4]), e6([0, 2, 6, 4, 0, 0]), e6([0, 0, 0, 0, 0, 0]), e6([1, 3, 7, 5, 0, 0]), e6([2, 3, 7, 6, 4, 0]), e6([2, 3, 7, 6, 0, 0]), e6([2, 3, 1, 5, 7, 6]), e6([0, 1, 5, 7, 6, 2]), e6([0, 1, 5, 7, 6, 4]), e6([0, 1, 3, 7, 6, 4]), e6([4, 5, 7, 6, 2, 0]), e6([4, 5, 7, 6, 0, 0]), e6([4, 5, 1, 3, 7, 6]), e6([0, 2, 3, 7, 5, 4]), e6([6, 2, 3, 7, 5, 4]), e6([6, 2, 3, 1, 5, 4]), t3;
})();
function L2(t3, a2, e6, s3, i) {
  const n4 = t3.getQuaternion(T2);
  i.quaternion = n4, O(O4, n4);
  const o4 = t3.getCenter(ot2), h2 = t3.getHalfSize(ct2);
  if (s3 === l2.Global) {
    Q(mt2, o4, O4), f2(ft2, mt2), l(ut2, ft2, h2), R(ut2, ft2, ut2);
    const s4 = r2(ut2);
    u(ut2, ft2, h2);
    const r4 = r2(ut2);
    if (s4 < e6) i.center = o4, o2(mt2, e6, e6, e6), i.halfSize = u(mt2, h2, mt2);
    else {
      const n5 = r4 > 0 ? 1 + a2 / r4 : 1, o5 = s4 > 0 ? 1 + e6 / s4 : 1, c2 = (o5 + n5) / 2, _3 = (o5 - n5) / 2;
      g(ut2, ft2, _3), i.halfSize = q(ut2, ut2, h2, c2), g(ut2, ft2, c2), q(ut2, ut2, h2, _3), m(mt2, mt2), e2(mt2, ut2, mt2);
      const l4 = t3.getQuaternion(V2);
      i.center = Q(mt2, mt2, l4);
    }
  } else {
    i.center = q(mt2, o4, N, (e6 + a2) / 2);
    const t4 = Q(mt2, N, O4);
    f2(t4, t4), i.halfSize = q(ft2, h2, t4, (e6 - a2) / 2);
  }
  return i;
}
function $2(t3, a2, e6, s3, i) {
  a2.getCenter(ot2), ot2[2] += i;
  const r4 = a(e6);
  o(ot2, t3, 0, ot2, r4, 0), at2(r4, a2, ot2, e6, s3);
}
function tt2(t3, a2, e6, s3, i) {
  a2.getCenter(ot2), ot2[2] += i, at2(t3, a2, ot2, e6, s3);
}
function at2(a2, e6, s3, i, r4) {
  const n4 = e6.getQuaternion(T2), o4 = p(dt, n4), h2 = e6.getHalfSize(ct2);
  for (let t3 = 0; t3 < 8; ++t3) {
    for (let a3 = 0; a3 < 3; ++a3) nt2[a3] = h2[a3] * (t3 & 1 << a3 ? -1 : 1);
    for (let a3 = 0; a3 < 3; ++a3) {
      let e7 = s3[a3];
      for (let t4 = 0; t4 < 3; ++t4) e7 += nt2[t4] * o4[3 * t4 + a3];
      it2[3 * t3 + a3] = e7;
    }
  }
  o(it2, a2, 0, it2, i, 0, 8), J2(rt2, r4);
}
function et2(t3, a2, e6, s3, i = a(e6), o4 = G(e6, i)) {
  t3.getCorners(lt), t3.getCenter(nt2), nt2[2] += s3, m2(e6, nt2, _t, i), a2.setCenter(_t[12], _t[13], _t[14]);
  const h2 = 2 * Math.sqrt(1 + _t[0] + _t[5] + _t[10]);
  O4[0] = (_t[6] - _t[9]) / h2, O4[1] = (_t[8] - _t[2]) / h2, O4[2] = (_t[1] - _t[4]) / h2, O4[3] = 0.25 * h2;
  const l4 = t3.getQuaternion(T2);
  a2.quaternion = x(O4, O4, l4), O(O4, O4), o2(ft2, 0, 0, 0);
  const m4 = a2.getCenter(ht2);
  for (const r4 of lt) r4[2] += s3, o4(r4, 0, r4, 0), R(mt2, r4, m4), Q(mt2, mt2, O4), f2(mt2, mt2), d(ft2, ft2, mt2);
  a2.halfSize = ft2;
}
function st2(t3, a2, e6, s3, i = a(e6)) {
  const n4 = s(e6), o4 = 1 + Math.max(0, s3) / (n4.radius + t3.centerZ);
  t3.getCenter(nt2), nt2[2] += s3, o(nt2, e6, 0, nt2, i, 0), a2.center = nt2;
  const h2 = t3.getQuaternion(T2);
  a2.quaternion = h2, O(O4, h2), o2(mt2, 0, 0, 1), Q(mt2, mt2, O4);
  const _3 = t3.getHalfSize(ct2);
  o2(mt2, _3[0] * Math.abs(mt2[0]), _3[1] * Math.abs(mt2[1]), _3[2] * Math.abs(mt2[2])), g(mt2, mt2, n4.inverseFlattening), u(mt2, _3, mt2), a2.halfSize = g(mt2, mt2, o4);
}
var it2 = new Array(24);
var rt2 = new s2(it2, 3);
var nt2 = n();
var ot2 = n();
var ht2 = n();
var ct2 = n();
var dt = e4();
var _t = e3();
var lt = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
var mt2 = n();
var ft2 = n();
var ut2 = n();
var gt = e(-1, -1, -1);

export {
  s2 as s,
  t2 as t,
  I2 as I,
  L2 as L
};
//# sourceMappingURL=chunk-LAXBDZHV.js.map
