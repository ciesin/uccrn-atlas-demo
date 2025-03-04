import {
  o as o6,
  x as x3
} from "./chunk-SOIGHC7A.js";
import {
  n as n5,
  r as r4,
  t as t6
} from "./chunk-QHF36O7C.js";
import {
  e as e5,
  i,
  o2 as o5,
  r as r3,
  s as s5
} from "./chunk-KGW5IGJ4.js";
import {
  b as b2,
  d,
  f
} from "./chunk-EMVGISAT.js";
import {
  a,
  n as n4
} from "./chunk-FWGIWKNF.js";
import {
  s as s4
} from "./chunk-IR5AHWR5.js";
import {
  t as t5
} from "./chunk-4TJZAUWN.js";
import {
  e as e4
} from "./chunk-XJ5CGMWY.js";
import {
  e as e2
} from "./chunk-NQPBPVRE.js";
import {
  t as t4
} from "./chunk-LAXBDZHV.js";
import {
  S,
  b,
  k,
  v
} from "./chunk-WAKNRSGF.js";
import {
  e as e3
} from "./chunk-ZAYRG6WM.js";
import {
  M,
  l as l2,
  x as x2
} from "./chunk-NVEHOQKI.js";
import {
  o as o4,
  w
} from "./chunk-5LZH2YNQ.js";
import {
  u as u4
} from "./chunk-YINRFSE5.js";
import {
  e,
  o as o3
} from "./chunk-X5RZJMNW.js";
import {
  l as l3
} from "./chunk-U7ERRXB6.js";
import {
  A,
  E as E2,
  P,
  _,
  c,
  g as g2,
  o as o2,
  r as r2,
  s as s3,
  u as u3
} from "./chunk-UMYFDXOJ.js";
import {
  N as N2,
  n as n3,
  t as t3
} from "./chunk-MHM4GDCM.js";
import {
  s as s2,
  z
} from "./chunk-363AT5UF.js";
import {
  E,
  g,
  t,
  y
} from "./chunk-XEBZUAYT.js";
import {
  nn
} from "./chunk-4WERUJEK.js";
import {
  o
} from "./chunk-T7KGE6VP.js";
import {
  h,
  p
} from "./chunk-T57WVICI.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  l,
  m,
  n as n2,
  x
} from "./chunk-53ZTROGC.js";
import {
  N,
  n,
  r,
  s,
  t as t2,
  u as u2
} from "./chunk-JLFSX3JT.js";
import {
  Q
} from "./chunk-LTDNORB5.js";

// node_modules/@arcgis/core/views/3d/layers/graphics/graphicUtils.js
function b3(t8, e6) {
  if ("point" === t8.type) return P2(t8, e6, false);
  if (o6(t8)) switch (t8.type) {
    case "extent":
      return P2(t8.center, e6, false);
    case "polygon":
      return P2(t8.centroid, e6, false);
    case "polyline":
      return P2(w2(t8), e6, true);
    case "mesh":
      return P2(u4(t8.vertexSpace, t8.spatialReference) ?? t8.extent.center, e6, false);
    case "multipoint":
      return;
  }
  else switch (t8.type) {
    case "extent":
      return P2(M2(t8), e6, true);
    case "polygon":
      return P2(R(t8), e6, true);
    case "polyline":
      return P2(w2(t8), e6, true);
    case "multipoint":
      return;
  }
}
function w2(t8) {
  const e6 = t8.paths[0];
  if (!e6 || 0 === e6.length) return null;
  const r6 = p(e6, h(e6) / 2);
  return e2(r6[0], r6[1], r6[2], t8.spatialReference);
}
function M2(t8) {
  return e2(0.5 * (t8.xmax + t8.xmin), 0.5 * (t8.ymax + t8.ymin), null != t8.zmin && null != t8.zmax && isFinite(t8.zmin) && isFinite(t8.zmax) ? 0.5 * (t8.zmax + t8.zmin) : void 0, t8.spatialReference);
}
function R(t8) {
  const e6 = t8.rings[0];
  if (!e6 || 0 === e6.length) return null;
  const r6 = o(t8.rings, !!t8.hasZ);
  return e2(r6[0], r6[1], r6[2], t8.spatialReference);
}
function P2(t8, e6, r6) {
  const n8 = r6 ? t8 : x3(t8);
  return e6 && t8 ? nn(t8, n8, e6) ? n8 : null : n8;
}
function S2(t8, e6, r6, n8 = 0) {
  if (t8) {
    e6 || (e6 = u());
    const i2 = t8;
    let o8 = 0.5 * i2.width * (r6 - 1), s7 = 0.5 * i2.height * (r6 - 1);
    return i2.width < 1e-7 * i2.height ? o8 += s7 / 20 : i2.height < 1e-7 * i2.width && (s7 += o8 / 20), s2(e6, i2.xmin - o8 - n8, i2.ymin - s7 - n8, i2.xmax + o8 + n8, i2.ymax + s7 + n8), e6;
  }
  return null;
}
function A2(t8, e6, r6 = null) {
  const n8 = t3(N2);
  return null != t8 && (n8[0] = t8[0], n8[1] = t8[1], n8[2] = t8[2]), null != e6 ? n8[3] = e6 : null != t8 && t8.length > 3 && (n8[3] = t8[3]), r6 && (n8[0] *= r6, n8[1] *= r6, n8[2] *= r6, n8[3] *= r6), n8;
}
function D(t8 = s, e6, r6, n8 = 1) {
  const i2 = new Array(3);
  if (null == e6 || null == r6) i2[0] = 1, i2[1] = 1, i2[2] = 1;
  else {
    let n9, o8 = 0;
    for (let s7 = 2; s7 >= 0; s7--) {
      const l5 = t8[s7], u5 = null != l5, a2 = 0 === s7 && !n9 && !u5, c2 = r6[s7];
      let m2;
      "symbol-value" === l5 || a2 ? m2 = 0 !== c2 ? e6[s7] / c2 : 1 : u5 && "proportional" !== l5 && isFinite(l5) && (m2 = 0 !== c2 ? l5 / c2 : 1), null != m2 && (i2[s7] = m2, n9 = m2, o8 = Math.max(o8, Math.abs(m2)));
    }
    for (let t9 = 2; t9 >= 0; t9--) null == i2[t9] ? i2[t9] = n9 : 0 === i2[t9] && (i2[t9] = 1e-3 * o8);
  }
  for (let o8 = 2; o8 >= 0; o8--) i2[o8] /= n8;
  return u2(i2);
}
function I(t8) {
  return null != t8.isPrimitive;
}
function U(t8) {
  return Z(I(t8) ? [t8.width, t8.depth, t8.height] : t8) ? null : "Symbol sizes may not be negative values";
}
function Z(t8) {
  const e6 = (t9) => null == t9 || t9 >= 0;
  return Array.isArray(t8) ? t8.every(e6) : e6(t8);
}
function k2(t8, o8, s7, l5 = e()) {
  return t8 && x(l5, l5, -t8 / 180 * Math.PI), o8 && l(l5, l5, o8 / 180 * Math.PI), s7 && m(l5, l5, s7 / 180 * Math.PI), l5;
}
function E3(e6, r6, n8) {
  if (null != n8.minDemResolution) return n8.minDemResolution;
  const i2 = Q(r6), o8 = g(e6) * i2, s7 = y(e6) * i2, l5 = E(e6) * (r6.isGeographic ? 1 : i2);
  return 0 === o8 && 0 === s7 && 0 === l5 ? n8.minDemResolutionForPoints : 0.01 * Math.max(o8, s7, l5);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/BufferVectorMath.js
var n6;
!function(n8) {
  function t8(n9, t9) {
    const c3 = n9[t9], o9 = n9[t9 + 1], r7 = n9[t9 + 2];
    return Math.sqrt(c3 * c3 + o9 * o9 + r7 * r7);
  }
  function c2(n9, t9) {
    const c3 = n9[t9], o9 = n9[t9 + 1], r7 = n9[t9 + 2], u6 = 1 / Math.sqrt(c3 * c3 + o9 * o9 + r7 * r7);
    n9[t9] *= u6, n9[t9 + 1] *= u6, n9[t9 + 2] *= u6;
  }
  function o8(n9, t9, c3) {
    n9[t9] *= c3, n9[t9 + 1] *= c3, n9[t9 + 2] *= c3;
  }
  function r6(n9, t9, c3, o9, r7, u6 = t9) {
    (r7 = r7 || n9)[u6] = n9[t9] + c3[o9], r7[u6 + 1] = n9[t9 + 1] + c3[o9 + 1], r7[u6 + 2] = n9[t9 + 2] + c3[o9 + 2];
  }
  function u5(n9, t9, c3, o9, r7, u6 = t9) {
    (r7 = r7 || n9)[u6] = n9[t9] - c3[o9], r7[u6 + 1] = n9[t9 + 1] - c3[o9 + 1], r7[u6 + 2] = n9[t9 + 2] - c3[o9 + 2];
  }
  n8.length = t8, n8.normalize = c2, n8.scale = o8, n8.add = r6, n8.subtract = u5;
}(n6 || (n6 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryUtil.js
var j = n6;
var E4 = [[-0.5, -0.5, 0.5], [0.5, -0.5, 0.5], [0.5, 0.5, 0.5], [-0.5, 0.5, 0.5], [-0.5, -0.5, -0.5], [0.5, -0.5, -0.5], [0.5, 0.5, -0.5], [-0.5, 0.5, -0.5]];
var U2 = [0, 0, 1, -1, 0, 0, 1, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, -1];
var V = [0, 0, 1, 0, 1, 1, 0, 1];
var v2 = [0, 1, 2, 2, 3, 0, 4, 0, 3, 3, 7, 4, 1, 5, 6, 6, 2, 1, 1, 0, 4, 4, 5, 1, 3, 2, 6, 6, 7, 3, 5, 4, 7, 7, 6, 5];
var x4 = new Array(36);
for (let Nt = 0; Nt < 6; Nt++) for (let t8 = 0; t8 < 6; t8++) x4[6 * Nt + t8] = Nt;
var C = new Array(36);
for (let Nt = 0; Nt < 6; Nt++) C[6 * Nt] = 0, C[6 * Nt + 1] = 1, C[6 * Nt + 2] = 2, C[6 * Nt + 3] = 2, C[6 * Nt + 4] = 3, C[6 * Nt + 5] = 0;
function F(t8, n8) {
  Array.isArray(n8) || (n8 = [n8, n8, n8]);
  const e6 = new Array(24);
  for (let o8 = 0; o8 < 8; o8++) e6[3 * o8] = E4[o8][0] * n8[0], e6[3 * o8 + 1] = E4[o8][1] * n8[1], e6[3 * o8 + 2] = E4[o8][2] * n8[2];
  return new f(t8, [[e3.POSITION, new t4(e6, v2, 3, true)], [e3.NORMAL, new t4(U2, x4, 3)], [e3.UV0, new t4(V, C, 2)]]);
}
var G = [[-0.5, 0, -0.5], [0.5, 0, -0.5], [0.5, 0, 0.5], [-0.5, 0, 0.5], [0, -0.5, 0], [0, 0.5, 0]];
var D2 = [0, 1, -1, 1, 1, 0, 0, 1, 1, -1, 1, 0, 0, -1, -1, 1, -1, 0, 0, -1, 1, -1, -1, 0];
var q = [5, 1, 0, 5, 2, 1, 5, 3, 2, 5, 0, 3, 4, 0, 1, 4, 1, 2, 4, 2, 3, 4, 3, 0];
var z2 = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7];
function B(t8, n8) {
  Array.isArray(n8) || (n8 = [n8, n8, n8]);
  const e6 = new Array(18);
  for (let o8 = 0; o8 < 6; o8++) e6[3 * o8] = G[o8][0] * n8[0], e6[3 * o8 + 1] = G[o8][1] * n8[1], e6[3 * o8 + 2] = G[o8][2] * n8[2];
  return new f(t8, [[e3.POSITION, new t4(e6, q, 3, true)], [e3.NORMAL, new t4(D2, z2, 3)]]);
}
var k3 = r4(-0.5, 0, -0.5);
var Z2 = r4(0.5, 0, -0.5);
var H = r4(0, 0, 0.5);
var J = r4(0, 0.5, 0);
var K = n5();
var Q2 = n5();
var W = n5();
var X = n5();
var Y = n5();
c(K, k3, J), c(Q2, k3, Z2), _(W, K, Q2), A(W, W), c(K, Z2, J), c(Q2, Z2, H), _(X, K, Q2), A(X, X), c(K, H, J), c(Q2, H, k3), _(Y, K, Q2), A(Y, Y);
var $ = [k3, Z2, H, J];
var _2 = [0, -1, 0, W[0], W[1], W[2], X[0], X[1], X[2], Y[0], Y[1], Y[2]];
var tt = [0, 1, 2, 3, 1, 0, 3, 2, 1, 3, 0, 2];
var nt = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3];
function et(t8, n8) {
  Array.isArray(n8) || (n8 = [n8, n8, n8]);
  const e6 = new Array(12);
  for (let o8 = 0; o8 < 4; o8++) e6[3 * o8] = $[o8][0] * n8[0], e6[3 * o8 + 1] = $[o8][1] * n8[1], e6[3 * o8 + 2] = $[o8][2] * n8[2];
  return new f(t8, [[e3.POSITION, new t4(e6, tt, 3, true)], [e3.NORMAL, new t4(_2, nt, 3)]]);
}
function ot(t8, n8, e6, o8, s7 = { uv: true }) {
  const r6 = -Math.PI, l5 = 2 * Math.PI, h2 = -Math.PI / 2, u5 = Math.PI, c2 = Math.max(3, Math.floor(e6)), a2 = Math.max(2, Math.floor(o8)), f2 = (c2 + 1) * (a2 + 1), p2 = n4(3 * f2), i2 = n4(3 * f2), w3 = n4(2 * f2), g3 = [];
  let m2 = 0;
  for (let O = 0; O <= a2; O++) {
    const t9 = [], e7 = O / a2, o9 = h2 + e7 * u5, s8 = Math.cos(o9);
    for (let h3 = 0; h3 <= c2; h3++) {
      const u6 = h3 / c2, a3 = r6 + u6 * l5, f3 = Math.cos(a3) * s8, g4 = Math.sin(o9), O2 = -Math.sin(a3) * s8;
      p2[3 * m2] = f3 * n8, p2[3 * m2 + 1] = g4 * n8, p2[3 * m2 + 2] = O2 * n8, i2[3 * m2] = f3, i2[3 * m2 + 1] = g4, i2[3 * m2 + 2] = O2, w3[2 * m2] = u6, w3[2 * m2 + 1] = e7, t9.push(m2), ++m2;
    }
    g3.push(t9);
  }
  const M4 = new Array();
  for (let O = 0; O < a2; O++) for (let t9 = 0; t9 < c2; t9++) {
    const n9 = g3[O][t9], e7 = g3[O][t9 + 1], o9 = g3[O + 1][t9 + 1], s8 = g3[O + 1][t9];
    0 === O ? (M4.push(n9), M4.push(o9), M4.push(s8)) : O === a2 - 1 ? (M4.push(n9), M4.push(e7), M4.push(o9)) : (M4.push(n9), M4.push(e7), M4.push(o9), M4.push(o9), M4.push(s8), M4.push(n9));
  }
  const I3 = [[e3.POSITION, new t4(p2, M4, 3, true)], [e3.NORMAL, new t4(i2, M4, 3, true)]];
  return s7.uv && I3.push([e3.UV0, new t4(w3, M4, 2, true)]), s7.offset && (I3[0][0] = e3.OFFSET, I3.push([e3.POSITION, new t4(Float64Array.from(s7.offset), w(M4.length), 3, true)])), new f(t8, I3);
}
function st(t8, n8, e6, o8) {
  const s7 = rt(n8, e6, o8);
  return new f(t8, s7);
}
function rt(t8, n8, e6) {
  const o8 = t8;
  let s7, r6;
  if (e6) s7 = [0, -1, 0, 1, 0, 0, 0, 0, 1, -1, 0, 0, 0, 0, -1, 0, 1, 0], r6 = [0, 1, 2, 0, 2, 3, 0, 3, 4, 0, 4, 1, 1, 5, 2, 2, 5, 3, 3, 5, 4, 4, 5, 1];
  else {
    const t9 = o8 * (1 + Math.sqrt(5)) / 2;
    s7 = [-o8, t9, 0, o8, t9, 0, -o8, -t9, 0, o8, -t9, 0, 0, -o8, t9, 0, o8, t9, 0, -o8, -t9, 0, o8, -t9, t9, 0, -o8, t9, 0, o8, -t9, 0, -o8, -t9, 0, o8], r6 = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
  }
  for (let c2 = 0; c2 < s7.length; c2 += 3) j.scale(s7, c2, t8 / j.length(s7, c2));
  let l5 = {};
  function h2(n9, e7) {
    n9 > e7 && ([n9, e7] = [e7, n9]);
    const o9 = n9.toString() + "." + e7.toString();
    if (l5[o9]) return l5[o9];
    let r7 = s7.length;
    return s7.length += 3, j.add(s7, 3 * n9, s7, 3 * e7, s7, r7), j.scale(s7, r7, t8 / j.length(s7, r7)), r7 /= 3, l5[o9] = r7, r7;
  }
  for (let c2 = 0; c2 < n8; c2++) {
    const t9 = r6.length, n9 = new Array(4 * t9);
    for (let e7 = 0; e7 < t9; e7 += 3) {
      const t10 = r6[e7], o9 = r6[e7 + 1], s8 = r6[e7 + 2], l6 = h2(t10, o9), u6 = h2(o9, s8), c3 = h2(s8, t10), a2 = 4 * e7;
      n9[a2] = t10, n9[a2 + 1] = l6, n9[a2 + 2] = c3, n9[a2 + 3] = o9, n9[a2 + 4] = u6, n9[a2 + 5] = l6, n9[a2 + 6] = s8, n9[a2 + 7] = c3, n9[a2 + 8] = u6, n9[a2 + 9] = l6, n9[a2 + 10] = u6, n9[a2 + 11] = c3;
    }
    r6 = n9, l5 = {};
  }
  const u5 = a(s7);
  for (let c2 = 0; c2 < u5.length; c2 += 3) j.normalize(u5, c2);
  return [[e3.POSITION, new t4(a(s7), r6, 3, true)], [e3.NORMAL, new t4(u5, r6, 3, true)]];
}
function lt(t8, n8 = {}) {
  const { normal: e6, position: o8, color: s7, rotation: r6, size: l5, centerOffsetAndDistance: h2, uvs: u5, featureAttribute: c2, objectAndLayerIdColor: a2 = null } = n8, f2 = o8 ? t2(o8) : n(), g3 = e6 ? t2(e6) : r(0, 0, 1), O = s7 ? [255 * s7[0], 255 * s7[1], 255 * s7[2], s7.length > 3 ? 255 * s7[3] : 255] : [255, 255, 255, 255], m2 = null != l5 && 2 === l5.length ? l5 : [1, 1], M4 = null != r6 ? [r6] : [0], I3 = w(1), y2 = [[e3.POSITION, new t4(f2, I3, 3, true)], [e3.NORMAL, new t4(g3, I3, 3, true)], [e3.COLOR, new t4(O, I3, 4, true)], [e3.SIZE, new t4(m2, I3, 2)], [e3.ROTATION, new t4(M4, I3, 1, true)]];
  if (u5 && y2.push([e3.UV0, new t4(u5, I3, u5.length)]), null != h2) {
    const t9 = [h2[0], h2[1], h2[2], h2[3]];
    y2.push([e3.CENTEROFFSETANDDISTANCE, new t4(t9, I3, 4)]);
  }
  if (c2) {
    const t9 = [c2[0], c2[1], c2[2], c2[3]];
    y2.push([e3.FEATUREATTRIBUTE, new t4(t9, I3, 4)]);
  }
  return new f(t8, y2, null, e4.Point, a2);
}
function ct(t8, n8, e6, o8, s7 = true, r6 = true) {
  let l5 = 0;
  const h2 = n8, u5 = t8;
  let a2 = r4(0, l5, 0), f2 = r4(0, l5 + u5, 0), p2 = r4(0, -1, 0), i2 = r4(0, 1, 0);
  o8 && (l5 = u5, f2 = r4(0, 0, 0), a2 = r4(0, l5, 0), p2 = r4(0, 1, 0), i2 = r4(0, -1, 0));
  const w3 = [f2, a2], g3 = [p2, i2], m2 = e6 + 2, A4 = Math.sqrt(u5 * u5 + h2 * h2);
  if (o8) for (let O = e6 - 1; O >= 0; O--) {
    const t9 = O * (2 * Math.PI / e6), n9 = r4(Math.cos(t9) * h2, l5, Math.sin(t9) * h2);
    w3.push(n9);
    const o9 = r4(u5 * Math.cos(t9) / A4, -h2 / A4, u5 * Math.sin(t9) / A4);
    g3.push(o9);
  }
  else for (let O = 0; O < e6; O++) {
    const t9 = O * (2 * Math.PI / e6), n9 = r4(Math.cos(t9) * h2, l5, Math.sin(t9) * h2);
    w3.push(n9);
    const o9 = r4(u5 * Math.cos(t9) / A4, h2 / A4, u5 * Math.sin(t9) / A4);
    g3.push(o9);
  }
  const M4 = new Array(), I3 = new Array();
  if (s7) {
    for (let t9 = 3; t9 < w3.length; t9++) M4.push(1), M4.push(t9 - 1), M4.push(t9), I3.push(0), I3.push(0), I3.push(0);
    M4.push(w3.length - 1), M4.push(2), M4.push(1), I3.push(0), I3.push(0), I3.push(0);
  }
  if (r6) {
    for (let t9 = 3; t9 < w3.length; t9++) M4.push(t9), M4.push(t9 - 1), M4.push(0), I3.push(t9), I3.push(t9 - 1), I3.push(1);
    M4.push(0), M4.push(2), M4.push(w3.length - 1), I3.push(1), I3.push(2), I3.push(g3.length - 1);
  }
  const y2 = n4(3 * m2);
  for (let c2 = 0; c2 < m2; c2++) y2[3 * c2] = w3[c2][0], y2[3 * c2 + 1] = w3[c2][1], y2[3 * c2 + 2] = w3[c2][2];
  const N3 = n4(3 * m2);
  for (let c2 = 0; c2 < m2; c2++) N3[3 * c2] = g3[c2][0], N3[3 * c2 + 1] = g3[c2][1], N3[3 * c2 + 2] = g3[c2][2];
  return [[e3.POSITION, new t4(y2, M4, 3, true)], [e3.NORMAL, new t4(N3, I3, 3, true)]];
}
function at(t8, n8, e6, o8, s7, r6 = true, l5 = true) {
  return new f(t8, ct(n8, e6, o8, s7, r6, l5));
}
function ft(t8, h2, u5, p2, i2, w3, g3) {
  const m2 = i2 ? t6(i2) : r4(1, 0, 0), A4 = w3 ? t6(w3) : r4(0, 0, 0);
  g3 ?? (g3 = true);
  const M4 = n5();
  A(M4, m2);
  const I3 = n5();
  g2(I3, M4, Math.abs(h2));
  const y2 = n5();
  g2(y2, I3, -0.5), u3(y2, y2, A4);
  const N3 = r4(0, 1, 0);
  Math.abs(1 - P(M4, N3)) < 0.2 && o2(N3, 0, 0, 1);
  const P3 = n5();
  _(P3, M4, N3), A(P3, P3), _(N3, P3, M4);
  const S3 = 2 * p2 + (g3 ? 2 : 0), R3 = p2 + (g3 ? 2 : 0), L = n4(3 * S3), j2 = n4(3 * R3), E6 = n4(2 * S3), U3 = new Array(3 * p2 * (g3 ? 4 : 2)), V2 = new Array(3 * p2 * (g3 ? 4 : 2));
  g3 && (L[3 * (S3 - 2)] = y2[0], L[3 * (S3 - 2) + 1] = y2[1], L[3 * (S3 - 2) + 2] = y2[2], E6[2 * (S3 - 2)] = 0, E6[2 * (S3 - 2) + 1] = 0, L[3 * (S3 - 1)] = L[3 * (S3 - 2)] + I3[0], L[3 * (S3 - 1) + 1] = L[3 * (S3 - 2) + 1] + I3[1], L[3 * (S3 - 1) + 2] = L[3 * (S3 - 2) + 2] + I3[2], E6[2 * (S3 - 1)] = 1, E6[2 * (S3 - 1) + 1] = 1, j2[3 * (R3 - 2)] = -M4[0], j2[3 * (R3 - 2) + 1] = -M4[1], j2[3 * (R3 - 2) + 2] = -M4[2], j2[3 * (R3 - 1)] = M4[0], j2[3 * (R3 - 1) + 1] = M4[1], j2[3 * (R3 - 1) + 2] = M4[2]);
  const v3 = (t9, n8, e6) => {
    U3[t9] = n8, V2[t9] = e6;
  };
  let x6 = 0;
  const C2 = n5(), F2 = n5();
  for (let n8 = 0; n8 < p2; n8++) {
    const t9 = n8 * (2 * Math.PI / p2);
    g2(C2, N3, Math.sin(t9)), g2(F2, P3, Math.cos(t9)), u3(C2, C2, F2), j2[3 * n8] = C2[0], j2[3 * n8 + 1] = C2[1], j2[3 * n8 + 2] = C2[2], g2(C2, C2, u5), u3(C2, C2, y2), L[3 * n8] = C2[0], L[3 * n8 + 1] = C2[1], L[3 * n8 + 2] = C2[2], E6[2 * n8] = n8 / p2, E6[2 * n8 + 1] = 0, L[3 * (n8 + p2)] = L[3 * n8] + I3[0], L[3 * (n8 + p2) + 1] = L[3 * n8 + 1] + I3[1], L[3 * (n8 + p2) + 2] = L[3 * n8 + 2] + I3[2], E6[2 * (n8 + p2)] = n8 / p2, E6[2 * n8 + 1] = 1;
    const e6 = (n8 + 1) % p2;
    v3(x6++, n8, n8), v3(x6++, n8 + p2, n8), v3(x6++, e6, e6), v3(x6++, e6, e6), v3(x6++, n8 + p2, n8), v3(x6++, e6 + p2, e6);
  }
  if (g3) {
    for (let t9 = 0; t9 < p2; t9++) {
      const n8 = (t9 + 1) % p2;
      v3(x6++, S3 - 2, R3 - 2), v3(x6++, t9, R3 - 2), v3(x6++, n8, R3 - 2);
    }
    for (let t9 = 0; t9 < p2; t9++) {
      const n8 = (t9 + 1) % p2;
      v3(x6++, t9 + p2, R3 - 1), v3(x6++, S3 - 1, R3 - 1), v3(x6++, n8 + p2, R3 - 1);
    }
  }
  const G3 = [[e3.POSITION, new t4(L, U3, 3, true)], [e3.NORMAL, new t4(j2, V2, 3, true)], [e3.UV0, new t4(E6, U3, 2, true)]];
  return new f(t8, G3);
}
function pt(t8, n8, e6, o8, s7, r6) {
  o8 = o8 || 10, s7 = null == s7 || s7, s4(n8.length > 1);
  const l5 = [[0, 0, 0]], h2 = [], u5 = [];
  for (let c2 = 0; c2 < o8; c2++) {
    h2.push([0, -c2 - 1, -(c2 + 1) % o8 - 1]);
    const t9 = c2 / o8 * 2 * Math.PI;
    u5.push([Math.cos(t9) * e6, Math.sin(t9) * e6]);
  }
  return it(t8, u5, n8, l5, h2, s7, r6);
}
function it(r6, u5, a2, f2, p2, w3, g3 = r4(0, 0, 0)) {
  const m2 = u5.length, A4 = n4(a2.length * m2 * 3 + (6 * f2.length || 0)), M4 = n4(a2.length * m2 * 3 + (f2 ? 6 : 0)), S3 = new Array(), R3 = new Array();
  let L = 0, j2 = 0;
  const E6 = n(), U3 = n(), V2 = n(), v3 = n(), x6 = n(), C2 = n(), F2 = n(), G3 = n(), D3 = n(), q2 = n(), z3 = n(), B3 = n(), k4 = n(), Z3 = M();
  o2(D3, 0, 1, 0), c(U3, a2[1], a2[0]), A(U3, U3), w3 ? (u3(G3, a2[0], g3), A(V2, G3)) : o2(V2, 0, 0, 1), Mt(U3, V2, D3, D3, x6, V2, It), s3(v3, V2), s3(B3, x6);
  for (let t8 = 0; t8 < f2.length; t8++) g2(C2, x6, f2[t8][0]), g2(G3, V2, f2[t8][2]), u3(C2, C2, G3), u3(C2, C2, a2[0]), A4[L++] = C2[0], A4[L++] = C2[1], A4[L++] = C2[2];
  M4[j2++] = -U3[0], M4[j2++] = -U3[1], M4[j2++] = -U3[2];
  for (let t8 = 0; t8 < p2.length; t8++) S3.push(p2[t8][0] > 0 ? p2[t8][0] : -p2[t8][0] - 1 + f2.length), S3.push(p2[t8][1] > 0 ? p2[t8][1] : -p2[t8][1] - 1 + f2.length), S3.push(p2[t8][2] > 0 ? p2[t8][2] : -p2[t8][2] - 1 + f2.length), R3.push(0), R3.push(0), R3.push(0);
  let H2 = f2.length;
  const J2 = f2.length - 1;
  for (let l5 = 0; l5 < a2.length; l5++) {
    let r7 = false;
    if (l5 > 0) {
      s3(E6, U3), l5 < a2.length - 1 ? (c(U3, a2[l5 + 1], a2[l5]), A(U3, U3)) : r7 = true, u3(q2, E6, U3), A(q2, q2), u3(z3, a2[l5 - 1], v3), l2(a2[l5], q2, Z3);
      x2(Z3, k(z3, E6), G3) ? (c(G3, G3, a2[l5]), A(V2, G3), _(x6, q2, V2), A(x6, x6)) : Mt(q2, v3, B3, D3, x6, V2, It), s3(v3, V2), s3(B3, x6);
    }
    w3 && (u3(G3, a2[l5], g3), A(k4, G3));
    for (let t8 = 0; t8 < m2; t8++) if (g2(C2, x6, u5[t8][0]), g2(G3, V2, u5[t8][1]), u3(C2, C2, G3), A(F2, C2), M4[j2++] = F2[0], M4[j2++] = F2[1], M4[j2++] = F2[2], u3(C2, C2, a2[l5]), A4[L++] = C2[0], A4[L++] = C2[1], A4[L++] = C2[2], !r7) {
      const n8 = (t8 + 1) % m2;
      S3.push(H2 + t8), S3.push(H2 + m2 + t8), S3.push(H2 + n8), S3.push(H2 + n8), S3.push(H2 + m2 + t8), S3.push(H2 + m2 + n8);
      for (let t9 = 0; t9 < 6; t9++) {
        const n9 = S3.length - 6;
        R3.push(S3[n9 + t9] - J2);
      }
    }
    H2 += m2;
  }
  const K2 = a2[a2.length - 1];
  for (let t8 = 0; t8 < f2.length; t8++) g2(C2, x6, f2[t8][0]), g2(G3, V2, f2[t8][1]), u3(C2, C2, G3), u3(C2, C2, K2), A4[L++] = C2[0], A4[L++] = C2[1], A4[L++] = C2[2];
  const Q3 = j2 / 3;
  M4[j2++] = U3[0], M4[j2++] = U3[1], M4[j2++] = U3[2];
  const W2 = H2 - m2;
  for (let t8 = 0; t8 < p2.length; t8++) S3.push(p2[t8][0] >= 0 ? H2 + p2[t8][0] : -p2[t8][0] - 1 + W2), S3.push(p2[t8][2] >= 0 ? H2 + p2[t8][2] : -p2[t8][2] - 1 + W2), S3.push(p2[t8][1] >= 0 ? H2 + p2[t8][1] : -p2[t8][1] - 1 + W2), R3.push(Q3), R3.push(Q3), R3.push(Q3);
  const X2 = [[e3.POSITION, new t4(A4, S3, 3, true)], [e3.NORMAL, new t4(M4, R3, 3, true)]];
  return new f(r6, X2);
}
function wt(t8, n8, e6, o8) {
  s4(n8.length > 1, "createPolylineGeometry(): polyline needs at least 2 points"), s4(3 === n8[0].length, "createPolylineGeometry(): malformed vertex"), s4(null == e6 || e6.length === n8.length, "createPolylineGeometry: need same number of points and normals"), s4(null == e6 || 3 === e6[0].length, "createPolylineGeometry(): malformed normal");
  const s7 = t(3 * n8.length), r6 = new Array(2 * (n8.length - 1));
  let l5 = 0, h2 = 0;
  for (let c2 = 0; c2 < n8.length; c2++) {
    for (let t9 = 0; t9 < 3; t9++) s7[l5++] = n8[c2][t9];
    c2 > 0 && (r6[h2++] = c2 - 1, r6[h2++] = c2);
  }
  const u5 = [[e3.POSITION, new t4(s7, r6, 3, true)]];
  if (e6) {
    const t9 = n4(3 * e6.length);
    let o9 = 0;
    for (let s8 = 0; s8 < n8.length; s8++) for (let n9 = 0; n9 < 3; n9++) t9[o9++] = e6[s8][n9];
    u5.push([e3.NORMAL, new t4(t9, r6, 3, true)]);
  }
  return o8 && u5.push([e3.COLOR, new t4(o8, o4(o8.length / 4), 4)]), new f(t8, u5, null, e4.Line);
}
function gt(t8, n8, e6, o8, s7, r6 = 0) {
  const l5 = new Array(18), h2 = [[-e6, r6, s7 / 2], [o8, r6, s7 / 2], [0, n8 + r6, s7 / 2], [-e6, r6, -s7 / 2], [o8, r6, -s7 / 2], [0, n8 + r6, -s7 / 2]], u5 = [0, 1, 2, 3, 0, 2, 2, 5, 3, 1, 4, 5, 5, 2, 1, 1, 0, 3, 3, 4, 1, 4, 3, 5];
  for (let c2 = 0; c2 < 6; c2++) l5[3 * c2] = h2[c2][0], l5[3 * c2 + 1] = h2[c2][1], l5[3 * c2 + 2] = h2[c2][2];
  return new f(t8, [[e3.POSITION, new t4(l5, u5, 3, true)]]);
}
function Ot(t8, n8) {
  const e6 = t8.getMutableAttribute(e3.POSITION).data;
  for (let o8 = 0; o8 < e6.length; o8 += 3) {
    const t9 = e6[o8], s7 = e6[o8 + 1], r6 = e6[o8 + 2];
    o2(yt, t9, s7, r6), E2(yt, yt, n8), e6[o8] = yt[0], e6[o8 + 1] = yt[1], e6[o8 + 2] = yt[2];
  }
}
function mt(t8, n8 = t8) {
  const e6 = t8.attributes, o8 = e6.get(e3.POSITION).data, s7 = e6.get(e3.NORMAL).data;
  if (s7) {
    const t9 = n8.getMutableAttribute(e3.NORMAL).data;
    for (let n9 = 0; n9 < s7.length; n9 += 3) {
      const e7 = s7[n9 + 1];
      t9[n9 + 1] = -s7[n9 + 2], t9[n9 + 2] = e7;
    }
  }
  if (o8) {
    const t9 = n8.getMutableAttribute(e3.POSITION).data;
    for (let n9 = 0; n9 < o8.length; n9 += 3) {
      const e7 = o8[n9 + 1];
      t9[n9 + 1] = -o8[n9 + 2], t9[n9 + 2] = e7;
    }
  }
}
function At(t8, o8, s7, l5, h2) {
  return !(Math.abs(P(o8, t8)) > h2) && (_(s7, t8, o8), A(s7, s7), _(l5, s7, t8), A(l5, l5), true);
}
function Mt(t8, n8, e6, o8, s7, r6, l5) {
  return At(t8, n8, s7, r6, l5) || At(t8, e6, s7, r6, l5) || At(t8, o8, s7, r6, l5);
}
var It = 0.99619469809;
var yt = n();

// node_modules/@arcgis/core/layers/graphics/dehydratedFeatureUtils.js
function t7(t8) {
  return "point" === t8.type;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/renderers/utils.js
function n7(t8, e6) {
  return null == t8 && (t8 = []), t8.push(e6), t8;
}
function r5(t8, e6) {
  if (null == t8) return null;
  const n8 = t8.filter((t9) => t9 !== e6);
  return 0 === n8.length ? null : n8;
}
function l4(t8, n8, r6, l5, i2) {
  o7[0] = t8.get(n8, 0), o7[1] = t8.get(n8, 1), o7[2] = t8.get(n8, 2), t5(o7, s6, 3), r6.set(i2, 0, s6[0]), l5.set(i2, 0, s6[1]), r6.set(i2, 1, s6[2]), l5.set(i2, 1, s6[3]), r6.set(i2, 2, s6[4]), l5.set(i2, 2, s6[5]);
}
var o7 = n();
var s6 = new Float32Array(6);

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Intersector.js
var E5 = 1e-5;
var b4 = class {
  constructor(t8) {
    this.options = new s5(), this._results = new A3(), this.transform = new b2(), this.tolerance = E5, this.verticalOffset = null, this._ray = b(), this._rayEnd = n(), this._rayBeginTransformed = n(), this._rayEndTransformed = n(), this.viewingMode = t8 ?? l3.Global;
  }
  get results() {
    return this._results;
  }
  get ray() {
    return this._ray;
  }
  get rayBegin() {
    return this._ray.origin;
  }
  get rayEnd() {
    return this._rayEnd;
  }
  reset(t8, r6, i2) {
    this.resetWithRay(S(t8, r6, this._ray), i2);
  }
  resetWithRay(t8, r6) {
    this.camera = r6, t8 !== this._ray && v(t8, this._ray), 0 !== this.options.verticalOffset ? this.viewingMode === l3.Local ? this._ray.origin[2] -= this.options.verticalOffset : this.verticalOffset = this.options.verticalOffset : this.verticalOffset = null, u3(this._rayEnd, this._ray.origin, this._ray.direction), this._results.init(this._ray);
  }
  intersect(t8 = null, r6, i2, s7, e6) {
    var _a;
    this.point = r6, this.filterPredicate = s7, this.tolerance = i2 ?? E5;
    const a2 = d(this.verticalOffset);
    if (t8 && t8.length > 0) {
      const r7 = e6 ? (t9) => {
        e6(t9) && this.intersectObject(t9);
      } : (t9) => {
        this.intersectObject(t9);
      };
      for (const i3 of t8) {
        const t9 = (_a = i3.getSpatialQueryAccelerator) == null ? void 0 : _a.call(i3);
        null != t9 ? (null != a2 ? t9.forEachAlongRayWithVerticalOffset(this._ray.origin, this._ray.direction, r7, a2) : t9.forEachAlongRay(this._ray.origin, this._ray.direction, r7), this.options.selectionMode && this.options.hud && t9.forEachDegenerateObject(r7)) : i3.objects.forAll((t10) => r7(t10));
      }
    }
    this.sortResults();
  }
  intersectObject(t8) {
    const r6 = t8.geometries;
    if (!r6) return;
    const s7 = t8.effectiveTransformation, a2 = d(this.verticalOffset);
    for (const n8 of r6) {
      if (!n8.visible) continue;
      const { material: r7, id: o8 } = n8;
      if (!r7.visible) continue;
      this.transform.setAndInvalidateLazyTransforms(s7, n8.transformation), E2(this._rayBeginTransformed, this.rayBegin, this.transform.inverse), E2(this._rayEndTransformed, this.rayEnd, this.transform.inverse);
      const h2 = this.transform.transform;
      null != a2 && (a2.objectTransform = this.transform), r7.intersect(n8, this.transform.transform, this, this._rayBeginTransformed, this._rayEndTransformed, (r8, s8, e6, a3, n9, d2) => {
        if (r8 >= 0) {
          if (null != this.filterPredicate && !this.filterPredicate(this._ray.origin, this._rayEnd, r8)) return;
          const c2 = a3 ? this._results.hud : this._results, l5 = a3 ? (a4) => {
            const h3 = new r3(t8, o8, e6, d2);
            a4.set(i.HUD, h3, r8, s8, o3, n9);
          } : (i2) => i2.set(i.OBJECT, { object: t8, geometryId: o8, triangleNr: e6 }, r8, s8, h2, n9);
          if ((null == c2.min.drapedLayerOrder || n9 >= c2.min.drapedLayerOrder) && (null == c2.min.dist || r8 < c2.min.dist) && l5(c2.min), this.options.store !== e5.MIN && (null == c2.max.drapedLayerOrder || n9 < c2.max.drapedLayerOrder) && (null == c2.max.dist || r8 > c2.max.dist) && l5(c2.max), this.options.store === e5.ALL) if (a3) {
            const t9 = new B2(this._ray);
            l5(t9), this._results.hud.all.push(t9);
          } else {
            const t9 = new I2(this._ray);
            l5(t9), this._results.all.push(t9);
          }
        }
      });
    }
  }
  sortResults(t8 = this._results.all) {
    t8.sort((t9, r6) => t9.dist !== r6.dist ? (t9.dist ?? 0) - (r6.dist ?? 0) : t9.drapedLayerOrder !== r6.drapedLayerOrder ? x5(t9.drapedLayerOrder, r6.drapedLayerOrder) : x5(t9.drapedLayerGraphicOrder, r6.drapedLayerGraphicOrder));
  }
};
function x5(t8, r6) {
  return (r6 ?? -Number.MAX_VALUE) - (t8 ?? -Number.MAX_VALUE);
}
function T(t8) {
  return new b4(t8);
}
var A3 = class {
  constructor() {
    this.min = new I2(b()), this.max = new I2(b()), this.hud = { min: new B2(b()), max: new B2(b()), all: new Array() }, this.ground = new I2(b()), this.all = [];
  }
  init(t8) {
    this.min.init(t8), this.max.init(t8), this.ground.init(t8), this.all.length = 0, this.hud.min.init(t8), this.hud.max.init(t8), this.hud.all.length = 0;
  }
};
var I2 = class {
  get ray() {
    return this._ray;
  }
  get distanceInRenderSpace() {
    return null != this.dist ? (g2(G2, this.ray.direction, this.dist), r2(G2)) : null;
  }
  withinDistance(t8) {
    return !!o5(this) && this.distanceInRenderSpace <= t8;
  }
  getIntersectionPoint(t8) {
    return !!o5(this) && (g2(G2, this.ray.direction, this.dist), u3(t8, this.ray.origin, G2), true);
  }
  getTransformedNormal(t8) {
    return s3(M3, this.normal), M3[3] = 0, z(M3, M3, this.transformation), s3(t8, M3), A(t8, t8);
  }
  constructor(t8) {
    this.intersector = i.OBJECT, this.normal = n(), this.transformation = e(), this._ray = b(), this.init(t8);
  }
  init(t8) {
    this.dist = null, this.target = null, this.drapedLayerOrder = null, this.drapedLayerGraphicOrder = null, this.intersector = i.OBJECT, v(t8, this._ray);
  }
  set(r6, s7, e6, a2, n8, h2, d2) {
    this.intersector = r6, this.dist = e6, s3(this.normal, a2 ?? N), n2(this.transformation, n8 ?? o3), this.target = s7, this.drapedLayerOrder = h2, this.drapedLayerGraphicOrder = d2;
  }
  copy(r6) {
    v(r6.ray, this._ray), this.intersector = r6.intersector, this.dist = r6.dist, this.target = r6.target, this.drapedLayerOrder = r6.drapedLayerOrder, this.drapedLayerGraphicOrder = r6.drapedLayerGraphicOrder, s3(this.normal, r6.normal), n2(this.transformation, r6.transformation);
  }
};
var B2 = class extends I2 {
  constructor() {
    super(...arguments), this.intersector = i.HUD;
  }
};
function R2(t8) {
  return new I2(t8);
}
var G2 = n();
var M3 = n3();

export {
  n7 as n,
  r5 as r,
  l4 as l,
  T,
  R2 as R,
  b3 as b,
  S2 as S,
  A2 as A,
  D,
  U,
  Z,
  k2 as k,
  E3 as E,
  F,
  B,
  et,
  ot,
  st,
  lt,
  ct,
  at,
  ft,
  pt,
  it,
  wt,
  gt,
  Ot,
  mt,
  Mt,
  t7 as t
};
//# sourceMappingURL=chunk-IHQU26IU.js.map
