import {
  S as S2
} from "./chunk-WXTMYNFS.js";
import {
  s as s4
} from "./chunk-IR5AHWR5.js";
import {
  c as c4,
  p,
  r as r6
} from "./chunk-TKKZ7DIH.js";
import {
  e as e5,
  r as r5
} from "./chunk-XJ5CGMWY.js";
import {
  o as o4
} from "./chunk-C5H3KDE3.js";
import {
  I as I3,
  L
} from "./chunk-LAXBDZHV.js";
import {
  H as H2
} from "./chunk-BSNHCIEC.js";
import {
  E as E2,
  U
} from "./chunk-WAKNRSGF.js";
import {
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  s as s3,
  t as t3
} from "./chunk-YVJ7MJNT.js";
import {
  o as o3,
  t as t2
} from "./chunk-5LZH2YNQ.js";
import {
  c as c3,
  i,
  q as q2,
  u as u3,
  x,
  y as y2
} from "./chunk-WXGA2B5U.js";
import {
  e as e2,
  o as o2,
  r as r4
} from "./chunk-X5RZJMNW.js";
import {
  e as e3
} from "./chunk-K24WU5UX.js";
import {
  l
} from "./chunk-U7ERRXB6.js";
import {
  I as I2,
  O,
  R as R2,
  X
} from "./chunk-CRKFUUKK.js";
import {
  y
} from "./chunk-LH36NQSN.js";
import {
  A,
  E,
  I,
  R,
  W,
  _,
  g,
  o,
  q,
  r as r3,
  s as s2,
  u as u2,
  v
} from "./chunk-UMYFDXOJ.js";
import {
  S,
  Z,
  u
} from "./chunk-XEBZUAYT.js";
import {
  G,
  H,
  c as c2,
  h,
  n as n2,
  s
} from "./chunk-53ZTROGC.js";
import {
  n,
  r as r2,
  t
} from "./chunk-JLFSX3JT.js";
import {
  e3 as e
} from "./chunk-RYSF6YCR.js";
import {
  r
} from "./chunk-7QTMSBS3.js";
import {
  c2 as c,
  m
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/AttributeArray.js
function a(a6) {
  if (a6.length < m) return Array.from(a6);
  if (Array.isArray(a6)) return Float64Array.from(a6);
  if (!("BYTES_PER_ELEMENT" in a6)) return Array.from(a6);
  switch (a6.BYTES_PER_ELEMENT) {
    case 1:
      return Uint8Array.from(a6);
    case 2:
      return c(a6) ? Uint16Array.from(a6) : Int16Array.from(a6);
    case 4:
      return Float32Array.from(a6);
    default:
      return Float64Array.from(a6);
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/BoundingInfo.js
var o5 = class _o {
  constructor(i5, e8, o7) {
    this.primitiveIndices = i5, this._numIndexPerPrimitive = e8, this.position = o7, this._children = void 0, s4(i5.length >= 1), s4(3 === o7.size || 4 === o7.size);
    const { data: c7, size: l5, indices: m5 } = o7;
    s4(m5.length % this._numIndexPerPrimitive == 0), s4(m5.length >= i5.length * this._numIndexPerPrimitive);
    const d4 = i5.length;
    let u6 = l5 * m5[this._numIndexPerPrimitive * i5[0]];
    a2.clear(), a2.push(u6);
    const f6 = r2(c7[u6], c7[u6 + 1], c7[u6 + 2]), x4 = t(f6);
    for (let t4 = 0; t4 < d4; ++t4) {
      const e9 = this._numIndexPerPrimitive * i5[t4];
      for (let i6 = 0; i6 < this._numIndexPerPrimitive; ++i6) {
        u6 = l5 * m5[e9 + i6], a2.push(u6);
        let t5 = c7[u6];
        f6[0] = Math.min(t5, f6[0]), x4[0] = Math.max(t5, x4[0]), t5 = c7[u6 + 1], f6[1] = Math.min(t5, f6[1]), x4[1] = Math.max(t5, x4[1]), t5 = c7[u6 + 2], f6[2] = Math.min(t5, f6[2]), x4[2] = Math.max(t5, x4[2]);
      }
    }
    this.bbMin = f6, this.bbMax = x4;
    const P3 = I(n(), this.bbMin, this.bbMax, 0.5);
    this.radius = 0.5 * Math.max(Math.max(x4[0] - f6[0], x4[1] - f6[1]), x4[2] - f6[2]);
    let v4 = this.radius * this.radius;
    for (let t4 = 0; t4 < a2.length; ++t4) {
      u6 = a2.at(t4);
      const i6 = c7[u6] - P3[0], e9 = c7[u6 + 1] - P3[1], s6 = c7[u6 + 2] - P3[2], r8 = i6 * i6 + e9 * e9 + s6 * s6;
      if (r8 <= v4) continue;
      const n4 = Math.sqrt(r8), h4 = 0.5 * (n4 - this.radius);
      this.radius = this.radius + h4, v4 = this.radius * this.radius;
      const o8 = h4 / n4;
      P3[0] += i6 * o8, P3[1] += e9 * o8, P3[2] += s6 * o8;
    }
    this.center = P3, a2.clear();
  }
  getChildren() {
    if (this._children || v(this.bbMin, this.bbMax) <= 1) return this._children;
    const i5 = I(n(), this.bbMin, this.bbMax, 0.5), s6 = this.primitiveIndices.length, r8 = new Uint8Array(s6), h4 = new Array(8);
    for (let t4 = 0; t4 < 8; ++t4) h4[t4] = 0;
    const { data: a6, size: c7, indices: l5 } = this.position;
    for (let t4 = 0; t4 < s6; ++t4) {
      let e8 = 0;
      const s7 = this._numIndexPerPrimitive * this.primitiveIndices[t4];
      let n4 = c7 * l5[s7], o7 = a6[n4], m6 = a6[n4 + 1], d5 = a6[n4 + 2];
      for (let i6 = 1; i6 < this._numIndexPerPrimitive; ++i6) {
        n4 = c7 * l5[s7 + i6];
        const t5 = a6[n4], e9 = a6[n4 + 1], r9 = a6[n4 + 2];
        t5 < o7 && (o7 = t5), e9 < m6 && (m6 = e9), r9 < d5 && (d5 = r9);
      }
      o7 < i5[0] && (e8 |= 1), m6 < i5[1] && (e8 |= 2), d5 < i5[2] && (e8 |= 4), r8[t4] = e8, ++h4[e8];
    }
    let m5 = 0;
    for (let t4 = 0; t4 < 8; ++t4) h4[t4] > 0 && ++m5;
    if (m5 < 2) return;
    const d4 = new Array(8);
    for (let t4 = 0; t4 < 8; ++t4) d4[t4] = h4[t4] > 0 ? new Uint32Array(h4[t4]) : void 0;
    for (let t4 = 0; t4 < 8; ++t4) h4[t4] = 0;
    for (let t4 = 0; t4 < s6; ++t4) {
      const i6 = r8[t4];
      d4[i6][h4[i6]++] = this.primitiveIndices[t4];
    }
    this._children = new Array();
    for (let t4 = 0; t4 < 8; ++t4) void 0 !== d4[t4] && this._children.push(new _o(d4[t4], this._numIndexPerPrimitive, this.position));
    return this._children;
  }
  static prune() {
    a2.prune();
  }
};
var a2 = new r({ deallocator: null });

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/geometryDataUtils.js
function i2(r8, o7) {
  if (!r8) return false;
  const { size: i5, data: c7, indices: f6 } = r8;
  o(o7, 0, 0, 0), o(m2, 0, 0, 0);
  let g2 = 0, d4 = 0;
  for (let p5 = 0; p5 < f6.length - 2; p5 += 3) {
    const r9 = f6[p5] * i5, h4 = f6[p5 + 1] * i5, j3 = f6[p5 + 2] * i5;
    o(a3, c7[r9], c7[r9 + 1], c7[r9 + 2]), o(l2, c7[h4], c7[h4 + 1], c7[h4 + 2]), o(u4, c7[j3], c7[j3 + 1], c7[j3 + 2]);
    const z3 = S2(a3, l2, u4);
    z3 ? (u2(a3, a3, l2), u2(a3, a3, u4), g(a3, a3, 1 / 3 * z3), u2(o7, o7, a3), g2 += z3) : (u2(m2, m2, a3), u2(m2, m2, l2), u2(m2, m2, u4), d4 += 3);
  }
  return (0 !== d4 || 0 !== g2) && (0 !== g2 ? (g(o7, o7, 1 / g2), true) : 0 !== d4 && (g(o7, m2, 1 / d4), true));
}
function c5(e8, r8) {
  if (!e8) return false;
  const { size: o7, data: s6, indices: i5 } = e8;
  o(r8, 0, 0, 0);
  let c7 = -1, f6 = 0;
  for (let t4 = 0; t4 < i5.length; t4++) {
    const e9 = i5[t4] * o7;
    c7 !== e9 && (r8[0] += s6[e9], r8[1] += s6[e9 + 1], r8[2] += s6[e9 + 2], f6++), c7 = e9;
  }
  return f6 > 1 && g(r8, r8, 1 / f6), f6 > 0;
}
function f(o7, s6, i5) {
  if (!o7) return false;
  o(i5, 0, 0, 0), o(m2, 0, 0, 0);
  let c7 = 0, f6 = 0;
  const { size: u6, data: g2, indices: d4 } = o7, p5 = d4.length - 1, h4 = p5 + (s6 ? 2 : 0);
  for (let t4 = 0; t4 < h4; t4 += 2) {
    const o8 = t4 < p5 ? t4 + 1 : 0, s7 = d4[t4 < p5 ? t4 : p5] * u6, h5 = d4[o8] * u6;
    a3[0] = g2[s7], a3[1] = g2[s7 + 1], a3[2] = g2[s7 + 2], l2[0] = g2[h5], l2[1] = g2[h5 + 1], l2[2] = g2[h5 + 2], g(a3, u2(a3, a3, l2), 0.5);
    const j3 = W(a3, l2);
    j3 > 0 ? (u2(i5, i5, g(a3, a3, j3)), c7 += j3) : 0 === c7 && (u2(m2, m2, a3), f6++);
  }
  return 0 !== c7 ? (g(i5, i5, 1 / c7), true) : 0 !== f6 && (g(i5, m2, 1 / f6), true);
}
var a3 = n();
var l2 = n();
var u4 = n();
var m2 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3DStateID.js
var c6 = class {
  constructor() {
    this.uid = e();
  }
};
var e6 = class extends c6 {
  constructor(s6) {
    super(), this.highlightName = s6, this.channel = t3.Highlight;
  }
};
var r7 = class extends c6 {
  constructor() {
    super(...arguments), this.channel = t3.MaskOccludee;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Geometry.js
var f2 = class _f extends r5 {
  constructor(t4, i5, e8 = null, n4 = e5.Mesh, h4 = null, o7 = -1) {
    super(), this.material = t4, this.mapPositions = e8, this.type = n4, this.objectAndLayerIdColor = h4, this.edgeIndicesLength = o7, this.highlights = /* @__PURE__ */ new Set(), this._highlightOptionsCounts = /* @__PURE__ */ new Map(), this.visible = true, this._attributes = /* @__PURE__ */ new Map(), this._boundingInfo = null;
    for (const [r8, g2] of i5) this._attributes.set(r8, { ...g2, indices: t2(g2.indices) }), r8 === e4.POSITION && (this.edgeIndicesLength = this.edgeIndicesLength < 0 ? this._attributes.get(r8).indices.length : this.edgeIndicesLength);
  }
  instantiate(t4 = {}) {
    const i5 = new _f(t4.material || this.material, [], this.mapPositions, this.type, this.objectAndLayerIdColor, this.edgeIndicesLength);
    return this._attributes.forEach((t5, e8) => {
      t5.exclusive = false, i5._attributes.set(e8, t5);
    }), i5._boundingInfo = this._boundingInfo, i5.transformation = t4.transformation || this.transformation, i5;
  }
  get attributes() {
    return this._attributes;
  }
  getMutableAttribute(t4) {
    let i5 = this._attributes.get(t4);
    return i5 && !i5.exclusive && (i5 = { ...i5, exclusive: true, data: a(i5.data) }, this._attributes.set(t4, i5)), i5;
  }
  setAttributeData(t4, i5) {
    const e8 = this._attributes.get(t4);
    e8 && this._attributes.set(t4, { ...e8, exclusive: true, data: i5 });
  }
  get indexCount() {
    var _a;
    const t4 = (_a = this._attributes.values().next().value) == null ? void 0 : _a.indices;
    return (t4 == null ? void 0 : t4.length) ?? 0;
  }
  get faceCount() {
    return this.indexCount / 3;
  }
  get boundingInfo() {
    return null == this._boundingInfo && (this._boundingInfo = this._calculateBoundingInfo()), this._boundingInfo;
  }
  computeAttachmentOrigin(t4) {
    return !!(this.type === e5.Mesh ? this._computeAttachmentOriginTriangles(t4) : this.type === e5.Line ? this._computeAttachmentOriginLines(t4) : this._computeAttachmentOriginPoints(t4)) && (null != this._transformation && E(t4, t4, this._transformation), true);
  }
  _computeAttachmentOriginTriangles(t4) {
    const i5 = this.attributes.get(e4.POSITION);
    return i2(i5, t4);
  }
  _computeAttachmentOriginLines(t4) {
    const i5 = this.attributes.get(e4.POSITION);
    return f(i5, p2(this.material.parameters, i5), t4);
  }
  _computeAttachmentOriginPoints(t4) {
    const i5 = this.attributes.get(e4.POSITION);
    return c5(i5, t4);
  }
  invalidateBoundingInfo() {
    this._boundingInfo = null;
  }
  _calculateBoundingInfo() {
    const t4 = this.attributes.get(e4.POSITION);
    if (!t4 || 0 === t4.indices.length) return null;
    const i5 = this.type === e5.Mesh ? 3 : 1;
    s4(t4.indices.length % i5 == 0, "Indexing error: " + t4.indices.length + " not divisible by " + i5);
    const e8 = o3(t4.indices.length / i5);
    return new o5(e8, i5, t4);
  }
  get transformation() {
    return this._transformation ?? o2;
  }
  set transformation(e8) {
    this._transformation = e8 && e8 !== o2 ? r4(e8) : null;
  }
  get highlightNames() {
    return this._highlightOptionsCounts;
  }
  get hasHighlights() {
    return this._highlightOptionsCounts.size > 0;
  }
  foreachHighlightOptions(t4) {
    this._highlightOptionsCounts.forEach((i5, e8) => t4(e8));
  }
  allocateIdAndHighlight(t4) {
    const i5 = new e6(t4);
    return this.addHighlight(i5);
  }
  addHighlight(t4) {
    this.highlights.add(t4);
    const { highlightName: i5 } = t4, e8 = (this._highlightOptionsCounts.get(i5) ?? 0) + 1;
    return this._highlightOptionsCounts.set(i5, e8), t4;
  }
  removeHighlight(t4) {
    if (this.highlights.delete(t4)) {
      const { highlightName: i5 } = t4, e8 = this._highlightOptionsCounts.get(i5) ?? 0;
      e8 <= 1 ? this._highlightOptionsCounts.delete(i5) : this._highlightOptionsCounts.set(i5, e8 - 1);
    }
  }
};
function p2(t4, i5) {
  return !(!("isClosed" in t4) || !t4.isClosed) && i5.indices.length > 2;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/OrderIndependentTransparency.js
var O2 = r6(R2.ONE, R2.ZERO, R2.ONE, R2.ONE_MINUS_SRC_ALPHA);
function T(r8) {
  return r8 === o4.FrontFace ? null : O2;
}
function a4(r8) {
  switch (r8) {
    case o4.NONE:
      return c4;
    case o4.ColorAlpha:
      return O2;
    case o4.FrontFace:
    case o4.COUNT:
      return null;
  }
}
function l3(r8) {
  if (r8.draped) return null;
  switch (r8.oitPass) {
    case o4.NONE:
    case o4.FrontFace:
      return r8.writeDepth ? p : null;
    case o4.ColorAlpha:
    case o4.COUNT:
      return null;
  }
}
var A2 = 5e5;
var C = { factor: -1, units: -2 };
function N(r8) {
  return r8 ? C : null;
}
function f3(r8, n4 = O.LESS) {
  return r8 === o4.NONE || r8 === o4.FrontFace ? n4 : O.LEQUAL;
}
function i3(n4, t4) {
  const u6 = H2(t4);
  return n4 === o4.ColorAlpha ? u6 ? { buffers: [X.COLOR_ATTACHMENT0, X.COLOR_ATTACHMENT1, X.COLOR_ATTACHMENT2] } : { buffers: [X.COLOR_ATTACHMENT0, X.COLOR_ATTACHMENT1] } : u6 ? { buffers: [X.COLOR_ATTACHMENT0, X.COLOR_ATTACHMENT1] } : null;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/RayIntersections.js
var h2 = class {
  constructor(n4 = false, t4 = true) {
    this.isVerticalRay = n4, this.normalRequired = t4;
  }
};
var m3 = u();
function p3(t4, o7, i5, e8, c7, s6) {
  if (!t4.visible) return;
  const r8 = R(U2, e8, i5), f6 = (n4, t5, o8) => {
    s6(n4, o8, t5, false);
  }, m5 = new h2(false, o7.options.normalRequired);
  if (t4.boundingInfo) {
    s4(t4.type === e5.Mesh);
    const n4 = o7.tolerance;
    b(t4.boundingInfo, i5, r8, n4, c7, m5, f6);
  } else {
    const n4 = t4.attributes.get(e4.POSITION), o8 = n4.indices;
    j(i5, r8, 0, o8.length / 3, o8, n4.data, n4.stride, c7, m5, f6);
  }
}
var M = n();
function b(n4, t4, o7, i5, e8, c7, s6) {
  if (null == n4) return;
  const u6 = k(o7, M);
  if (S(m3, n4.bbMin), Z(m3, n4.bbMax), null != e8 && e8.applyToAabb(m3), w(m3, t4, u6, i5)) {
    const { primitiveIndices: r8, position: f6 } = n4, u7 = r8 ? r8.length : f6.indices.length / 3;
    if (u7 > P) {
      const r9 = n4.getChildren();
      if (void 0 !== r9) {
        for (const n5 of r9) b(n5, t4, o7, i5, e8, c7, s6);
        return;
      }
    }
    V(t4, o7, 0, u7, f6.indices, f6.data, f6.stride, r8, e8, c7, s6);
  }
}
var d = n();
function x2(t4, o7, i5, e8, c7, s6, r8, f6, u6) {
  const { data: a6, stride: l5 } = s6;
  j(t4, R(U2, o7, t4), i5, e8, c7, a6, l5, r8, f6, u6);
}
function y3(n4, t4, o7, i5, e8, c7, s6, r8) {
  const f6 = n4[0], u6 = n4[1], a6 = n4[2], l5 = t4[0], h4 = t4[1], m5 = t4[2];
  for (let p5 = o7; p5 < i5; ++p5) {
    const n5 = 3 * p5, t5 = n5 + 1, o8 = n5 + 2, i6 = c7 * n5, M2 = e8[i6], b4 = e8[i6 + 1], x4 = e8[i6 + 2], g2 = c7 * t5, y5 = c7 * o8, T3 = e8[g2] - M2, V3 = e8[g2 + 1] - b4, j3 = e8[g2 + 2] - x4, q5 = e8[y5] - M2, v4 = e8[y5 + 1] - b4, I5 = e8[y5 + 2] - x4, O6 = h4 * I5 - v4 * m5, A6 = m5 * q5 - I5 * l5, B4 = l5 * v4 - q5 * h4, C2 = T3 * O6 + V3 * A6 + j3 * B4;
    if (Math.abs(C2) <= S3) continue;
    const k2 = f6 - M2, w2 = u6 - b4, N4 = a6 - x4, P3 = k2 * O6 + w2 * A6 + N4 * B4;
    if (C2 > 0) {
      if (P3 < 0 || P3 > C2) continue;
    } else if (P3 > 0 || P3 < C2) continue;
    const U3 = w2 * j3 - V3 * N4, z3 = N4 * T3 - j3 * k2, D = k2 * V3 - T3 * w2, E4 = l5 * U3 + h4 * z3 + m5 * D;
    if (C2 > 0) {
      if (E4 < 0 || P3 + E4 > C2) continue;
    } else if (E4 > 0 || P3 + E4 < C2) continue;
    const F2 = (q5 * U3 + v4 * z3 + I5 * D) / C2;
    if (F2 >= 0) {
      r8(F2, p5, s6 ? R3(T3, V3, j3, q5, v4, I5, d) : null);
    }
  }
}
function V(n4, t4, o7, i5, e8, c7, s6, r8, f6, u6, a6) {
  const l5 = n4[0], h4 = n4[1], m5 = n4[2], p5 = t4[0], M2 = t4[1], b4 = t4[2], { normalRequired: x4 } = u6;
  for (let g2 = o7; g2 < i5; ++g2) {
    const n5 = r8[g2], t5 = 3 * n5, o8 = s6 * e8[t5];
    let i6 = c7[o8], u7 = c7[o8 + 1], y5 = c7[o8 + 2];
    const T3 = s6 * e8[t5 + 1];
    let V3 = c7[T3], j3 = c7[T3 + 1], q5 = c7[T3 + 2];
    const v4 = s6 * e8[t5 + 2];
    let I5 = c7[v4], O6 = c7[v4 + 1], A6 = c7[v4 + 2];
    null != f6 && ([i6, u7, y5] = f6.applyToVertex(i6, u7, y5, g2), [V3, j3, q5] = f6.applyToVertex(V3, j3, q5, g2), [I5, O6, A6] = f6.applyToVertex(I5, O6, A6, g2));
    const B4 = V3 - i6, C2 = j3 - u7, k2 = q5 - y5, w2 = I5 - i6, N4 = O6 - u7, P3 = A6 - y5, U3 = M2 * P3 - N4 * b4, z3 = b4 * w2 - P3 * p5, D = p5 * N4 - w2 * M2, E4 = B4 * U3 + C2 * z3 + k2 * D;
    if (Math.abs(E4) <= S3) continue;
    const F2 = l5 - i6, G2 = h4 - u7, H3 = m5 - y5, J = F2 * U3 + G2 * z3 + H3 * D;
    if (E4 > 0) {
      if (J < 0 || J > E4) continue;
    } else if (J > 0 || J < E4) continue;
    const K = G2 * k2 - C2 * H3, L2 = H3 * B4 - k2 * F2, Q = F2 * C2 - B4 * G2, W2 = p5 * K + M2 * L2 + b4 * Q;
    if (E4 > 0) {
      if (W2 < 0 || J + W2 > E4) continue;
    } else if (W2 > 0 || J + W2 < E4) continue;
    const X2 = (w2 * K + N4 * L2 + P3 * Q) / E4;
    if (X2 >= 0) {
      a6(X2, n5, x4 ? R3(B4, C2, k2, w2, N4, P3, d) : null);
    }
  }
}
function j(i5, e8, c7, s6, r8, f6, u6, a6, l5, h4) {
  const m5 = e8, p5 = z, M2 = Math.abs(m5[0]), b4 = Math.abs(m5[1]), d4 = Math.abs(m5[2]), x4 = M2 >= b4 ? M2 >= d4 ? 0 : 2 : b4 >= d4 ? 1 : 2, g2 = x4, y5 = m5[g2] < 0 ? 2 : 1, T3 = (x4 + y5) % 3, V3 = (x4 + (3 - y5)) % 3, j3 = m5[T3] / m5[g2], R6 = m5[V3] / m5[g2], A6 = 1 / m5[g2], B4 = q3, C2 = v2, k2 = I4, { normalRequired: w2 } = l5;
  for (let q5 = c7; q5 < s6; ++q5) {
    const e9 = 3 * q5, c8 = u6 * r8[e9];
    o(p5[0], f6[c8 + 0], f6[c8 + 1], f6[c8 + 2]);
    const s7 = u6 * r8[e9 + 1];
    o(p5[1], f6[s7 + 0], f6[s7 + 1], f6[s7 + 2]);
    const l6 = u6 * r8[e9 + 2];
    o(p5[2], f6[l6 + 0], f6[l6 + 1], f6[l6 + 2]), a6 && (s2(p5[0], a6.applyToVertex(p5[0][0], p5[0][1], p5[0][2], q5)), s2(p5[1], a6.applyToVertex(p5[1][0], p5[1][1], p5[1][2], q5)), s2(p5[2], a6.applyToVertex(p5[2][0], p5[2][1], p5[2][2], q5))), R(B4, p5[0], i5), R(C2, p5[1], i5), R(k2, p5[2], i5);
    const m6 = B4[T3] - j3 * B4[g2], M3 = B4[V3] - R6 * B4[g2], b5 = C2[T3] - j3 * C2[g2], d5 = C2[V3] - R6 * C2[g2], x5 = k2[T3] - j3 * k2[g2], y6 = k2[V3] - R6 * k2[g2], v4 = x5 * d5 - y6 * b5, I5 = m6 * y6 - M3 * x5, N4 = b5 * M3 - d5 * m6;
    if ((v4 < 0 || I5 < 0 || N4 < 0) && (v4 > 0 || I5 > 0 || N4 > 0)) continue;
    const P3 = v4 + I5 + N4;
    if (0 === P3) continue;
    const S5 = v4 * (A6 * B4[g2]) + I5 * (A6 * C2[g2]) + N4 * (A6 * k2[g2]);
    if (S5 * Math.sign(P3) < 0) continue;
    const U3 = S5 / P3;
    if (U3 >= 0) {
      h4(U3, q5, w2 ? O3(p5) : null);
    }
  }
}
var q3 = n();
var v2 = n();
var I4 = n();
function R3(n4, o7, c7, s6, r8, f6, u6) {
  return o(A3, n4, o7, c7), o(B, s6, r8, f6), _(u6, A3, B), A(u6, u6), u6;
}
function O3(t4) {
  return R(A3, t4[1], t4[0]), R(B, t4[2], t4[0]), _(d, A3, B), A(d, d), d;
}
var A3 = n();
var B = n();
function k(n4, o7) {
  return o(o7, 1 / n4[0], 1 / n4[1], 1 / n4[2]);
}
function w(n4, t4, o7, i5) {
  return N2(n4, t4, o7, i5, 1 / 0);
}
function N2(n4, t4, o7, i5, e8) {
  const c7 = (n4[0] - i5 - t4[0]) * o7[0], s6 = (n4[3] + i5 - t4[0]) * o7[0];
  let r8 = Math.min(c7, s6), f6 = Math.max(c7, s6);
  const u6 = (n4[1] - i5 - t4[1]) * o7[1], a6 = (n4[4] + i5 - t4[1]) * o7[1];
  if (f6 = Math.min(f6, Math.max(u6, a6)), f6 < 0) return false;
  if (r8 = Math.max(r8, Math.min(u6, a6)), r8 > f6) return false;
  const l5 = (n4[2] - i5 - t4[2]) * o7[2], h4 = (n4[5] + i5 - t4[2]) * o7[2];
  return f6 = Math.min(f6, Math.max(l5, h4)), !(f6 < 0) && (r8 = Math.max(r8, Math.min(l5, h4)), !(r8 > f6) && r8 < e8);
}
var P = 1e3;
var S3 = 1e-7;
var U2 = n();
var z = [n(), n(), n()];

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/RenderSlot.js
var A4;
!function(A6) {
  A6[A6.INTEGRATED_MESH = 0] = "INTEGRATED_MESH", A6[A6.OPAQUE_TERRAIN = 1] = "OPAQUE_TERRAIN", A6[A6.OPAQUE_MATERIAL = 2] = "OPAQUE_MATERIAL", A6[A6.OPAQUE_MATERIAL_WITHOUT_NORMALS = 3] = "OPAQUE_MATERIAL_WITHOUT_NORMALS", A6[A6.TRANSPARENT_MATERIAL = 4] = "TRANSPARENT_MATERIAL", A6[A6.TRANSPARENT_MATERIAL_WITHOUT_NORMALS = 5] = "TRANSPARENT_MATERIAL_WITHOUT_NORMALS", A6[A6.TRANSPARENT_TERRAIN = 6] = "TRANSPARENT_TERRAIN", A6[A6.TRANSPARENT_MATERIAL_WITHOUT_DEPTH = 7] = "TRANSPARENT_MATERIAL_WITHOUT_DEPTH", A6[A6.OCCLUDED_TERRAIN = 8] = "OCCLUDED_TERRAIN", A6[A6.OCCLUDER_MATERIAL = 9] = "OCCLUDER_MATERIAL", A6[A6.TRANSPARENT_OCCLUDER_MATERIAL = 10] = "TRANSPARENT_OCCLUDER_MATERIAL", A6[A6.OCCLUSION_PIXELS = 11] = "OCCLUSION_PIXELS", A6[A6.HUD_MATERIAL = 12] = "HUD_MATERIAL", A6[A6.LABEL_MATERIAL = 13] = "LABEL_MATERIAL", A6[A6.LINE_CALLOUTS = 14] = "LINE_CALLOUTS", A6[A6.LINE_CALLOUTS_HUD_DEPTH = 15] = "LINE_CALLOUTS_HUD_DEPTH", A6[A6.OVERLAY = 16] = "OVERLAY", A6[A6.DRAPED_MATERIAL = 17] = "DRAPED_MATERIAL", A6[A6.DRAPED_WATER = 18] = "DRAPED_WATER", A6[A6.VOXEL = 19] = "VOXEL", A6[A6.MAX_SLOTS = 20] = "MAX_SLOTS";
}(A4 || (A4 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/verticalOffsetUtils.js
var b2 = class {
  constructor() {
    this._transform = e2(), this._transformInverse = new v3({ value: this._transform }, h, e2), this._transformInverseTranspose = new v3(this._transformInverse, s, e2), this._transformTranspose = new v3({ value: this._transform }, s, e2), this._transformInverseRotation = new v3({ value: this._transform }, y, e3);
  }
  _invalidateLazyTransforms() {
    this._transformInverse.invalidate(), this._transformInverseTranspose.invalidate(), this._transformTranspose.invalidate(), this._transformInverseRotation.invalidate();
  }
  get transform() {
    return this._transform;
  }
  get inverse() {
    return this._transformInverse.value;
  }
  get inverseTranspose() {
    return this._transformInverseTranspose.value;
  }
  get inverseRotation() {
    return this._transformInverseRotation.value;
  }
  get transpose() {
    return this._transformTranspose.value;
  }
  setTransformMatrix(t4) {
    n2(this._transform, t4);
  }
  multiplyTransform(t4) {
    c2(this._transform, this._transform, t4);
  }
  set(t4) {
    n2(this._transform, t4), this._invalidateLazyTransforms();
  }
  setAndInvalidateLazyTransforms(t4, s6) {
    this.setTransformMatrix(t4), this.multiplyTransform(s6), this._invalidateLazyTransforms();
  }
};
var v3 = class {
  constructor(t4, s6, r8) {
    this._original = t4, this._update = s6, this._dirty = true, this._transform = r8();
  }
  invalidate() {
    this._dirty = true;
  }
  get value() {
    return this._dirty && (this._update(this._transform, this._original.value), this._dirty = false), this._transform;
  }
};
var T2 = class {
  constructor(t4 = 0) {
    this.offset = t4, this.tmpVertex = n();
  }
  applyToVertex(t4, s6, r8) {
    const e8 = o(q4, t4, s6, r8), i5 = u2(z2, e8, this.localOrigin), o7 = this.offset / r3(i5);
    return q(this.tmpVertex, e8, i5, o7), this.tmpVertex;
  }
  applyToAabb(t4) {
    const s6 = A5, r8 = R4, e8 = B2;
    for (let n4 = 0; n4 < 3; ++n4) s6[n4] = t4[0 + n4] + this.localOrigin[n4], r8[n4] = t4[3 + n4] + this.localOrigin[n4], e8[n4] = s6[n4];
    const i5 = this.applyToVertex(s6[0], s6[1], s6[2]);
    for (let n4 = 0; n4 < 3; ++n4) t4[n4] = i5[n4], t4[n4 + 3] = i5[n4];
    const o7 = (s7) => {
      const r9 = this.applyToVertex(s7[0], s7[1], s7[2]);
      for (let e9 = 0; e9 < 3; ++e9) t4[e9] = Math.min(t4[e9], r9[e9]), t4[e9 + 3] = Math.max(t4[e9 + 3], r9[e9]);
    };
    for (let n4 = 1; n4 < 8; ++n4) {
      for (let t5 = 0; t5 < 3; ++t5) e8[t5] = n4 & 1 << t5 ? r8[t5] : s6[t5];
      o7(e8);
    }
    let a6 = 0;
    for (let n4 = 0; n4 < 3; ++n4) {
      s6[n4] * r8[n4] < 0 && (a6 |= 1 << n4);
    }
    if (0 !== a6 && 7 !== a6) {
      for (let n4 = 0; n4 < 8; ++n4) if (!(a6 & n4)) {
        for (let t5 = 0; t5 < 3; ++t5) e8[t5] = a6 & 1 << t5 ? 0 : n4 & 1 << t5 ? s6[t5] : r8[t5];
        o7(e8);
      }
    }
    for (let n4 = 0; n4 < 3; ++n4) t4[n4] -= this.localOrigin[n4], t4[n4 + 3] -= this.localOrigin[n4];
    return t4;
  }
};
var x3 = class {
  constructor(t4 = 0) {
    this.componentLocalOriginLength = 0, this._totalOffset = 0, this._offset = 0, this._tmpVertex = n(), this._tmpMbs = E2(), this._tmpObb = new I3(), this._resetOffset(t4);
  }
  _resetOffset(t4) {
    this._offset = t4, this._totalOffset = t4;
  }
  set offset(t4) {
    this._resetOffset(t4);
  }
  get offset() {
    return this._offset;
  }
  set componentOffset(t4) {
    this._totalOffset = this._offset + t4;
  }
  set localOrigin(t4) {
    this.componentLocalOriginLength = r3(t4);
  }
  applyToVertex(t4, s6, r8) {
    const e8 = o(q4, t4, s6, r8), i5 = o(z2, t4, s6, r8 + this.componentLocalOriginLength), o7 = this._totalOffset / r3(i5);
    return q(this._tmpVertex, e8, i5, o7), this._tmpVertex;
  }
  applyToAabb(t4) {
    const s6 = this.componentLocalOriginLength, r8 = t4[0], e8 = t4[1], i5 = t4[2] + s6, o7 = t4[3], a6 = t4[4], n4 = t4[5] + s6, h4 = Math.abs(r8), f6 = Math.abs(e8), l5 = Math.abs(i5), m5 = Math.abs(o7), p5 = Math.abs(a6), c7 = Math.abs(n4), _2 = 0.5 * (1 + Math.sign(r8 * o7)) * Math.min(h4, m5), u6 = 0.5 * (1 + Math.sign(e8 * a6)) * Math.min(f6, p5), g2 = 0.5 * (1 + Math.sign(i5 * n4)) * Math.min(l5, c7), M2 = Math.max(h4, m5), b4 = Math.max(f6, p5), v4 = Math.max(l5, c7), T3 = Math.sqrt(_2 * _2 + u6 * u6 + g2 * g2), x4 = Math.sign(h4 + r8), O6 = Math.sign(f6 + e8), y5 = Math.sign(l5 + i5), d4 = Math.sign(m5 + o7), V3 = Math.sign(p5 + a6), L2 = Math.sign(c7 + n4), j3 = this._totalOffset;
    if (T3 < j3) return t4[0] -= (1 - x4) * j3, t4[1] -= (1 - O6) * j3, t4[2] -= (1 - y5) * j3, t4[3] += d4 * j3, t4[4] += V3 * j3, t4[5] += L2 * j3, t4;
    const I5 = j3 / Math.sqrt(M2 * M2 + b4 * b4 + v4 * v4), w2 = j3 / T3, q5 = w2 - I5, z3 = -q5;
    return t4[0] += r8 * (x4 * z3 + w2), t4[1] += e8 * (O6 * z3 + w2), t4[2] += i5 * (y5 * z3 + w2), t4[3] += o7 * (d4 * q5 + I5), t4[4] += a6 * (V3 * q5 + I5), t4[5] += n4 * (L2 * q5 + I5), t4;
  }
  applyToMbs(t4) {
    const s6 = r3(U(t4)), r8 = this._totalOffset / s6;
    return q(U(this._tmpMbs), U(t4), U(t4), r8), this._tmpMbs[3] = t4[3] + t4[3] * this._totalOffset / s6, this._tmpMbs;
  }
  applyToObb(t4) {
    return L(t4, this._totalOffset, this._totalOffset, l.Global, this._tmpObb), this._tmpObb;
  }
};
var O4 = class {
  constructor(t4 = 0) {
    this.offset = t4, this.sphere = E2(), this.tmpVertex = n();
  }
  applyToVertex(t4, s6, r8) {
    const e8 = this.objectTransform.transform, i5 = o(q4, t4, s6, r8), o7 = E(i5, i5, e8), a6 = this.offset / r3(o7);
    q(o7, o7, o7, a6);
    const h4 = this.objectTransform.inverse;
    return E(this.tmpVertex, o7, h4), this.tmpVertex;
  }
  applyToMinMax(t4, s6) {
    const r8 = this.offset / r3(t4);
    q(t4, t4, t4, r8);
    const e8 = this.offset / r3(s6);
    q(s6, s6, s6, e8);
  }
  applyToAabb(t4) {
    const s6 = this.offset / Math.sqrt(t4[0] * t4[0] + t4[1] * t4[1] + t4[2] * t4[2]);
    t4[0] += t4[0] * s6, t4[1] += t4[1] * s6, t4[2] += t4[2] * s6;
    const r8 = this.offset / Math.sqrt(t4[3] * t4[3] + t4[4] * t4[4] + t4[5] * t4[5]);
    return t4[3] += t4[3] * r8, t4[4] += t4[4] * r8, t4[5] += t4[5] * r8, t4;
  }
  applyToBoundingSphere(t4) {
    const s6 = r3(U(t4)), r8 = this.offset / s6;
    return q(U(this.sphere), U(t4), U(t4), r8), this.sphere[3] = t4[3] + t4[3] * this.offset / s6, this.sphere;
  }
};
var y4 = new O4();
function d2(t4) {
  return null != t4 ? (y4.offset = t4, y4) : null;
}
var V2 = new x3();
var j2 = new T2();
var q4 = n();
var z2 = n();
var A5 = n();
var R4 = n();
var B2 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/bufferWriterUtils.js
function d3(e8, t4, f6, o7 = 1) {
  const { data: r8, indices: i5 } = e8, s6 = t4.typedBuffer, n4 = t4.typedBufferStride, c7 = i5.length;
  if (f6 *= n4, 1 === o7) for (let l5 = 0; l5 < c7; ++l5) s6[f6] = r8[i5[l5]], f6 += n4;
  else for (let l5 = 0; l5 < c7; ++l5) {
    const e9 = r8[i5[l5]];
    for (let t5 = 0; t5 < o7; t5++) s6[f6] = e9, f6 += n4;
  }
}
function u5(e8, t4, f6) {
  const { data: o7, indices: r8 } = e8, i5 = t4.typedBuffer, s6 = t4.typedBufferStride, n4 = r8.length;
  f6 *= s6;
  for (let c7 = 0; c7 < n4; ++c7) {
    const e9 = 2 * r8[c7];
    i5[f6] = o7[e9], i5[f6 + 1] = o7[e9 + 1], f6 += s6;
  }
}
function a5(e8, t4, f6, o7) {
  const { data: r8, indices: i5 } = e8, s6 = t4.typedBuffer, n4 = t4.typedBufferStride, c7 = i5.length;
  if (f6 *= n4, null == o7 || 1 === o7) for (let l5 = 0; l5 < c7; ++l5) {
    const e9 = 3 * i5[l5];
    s6[f6] = r8[e9], s6[f6 + 1] = r8[e9 + 1], s6[f6 + 2] = r8[e9 + 2], f6 += n4;
  }
  else for (let l5 = 0; l5 < c7; ++l5) {
    const e9 = 3 * i5[l5];
    for (let t5 = 0; t5 < o7; ++t5) s6[f6] = r8[e9], s6[f6 + 1] = r8[e9 + 1], s6[f6 + 2] = r8[e9 + 2], f6 += n4;
  }
}
function p4(e8, t4, f6, o7 = 1) {
  const { data: r8, indices: i5 } = e8, s6 = t4.typedBuffer, n4 = t4.typedBufferStride, c7 = i5.length;
  if (f6 *= n4, 1 === o7) for (let l5 = 0; l5 < c7; ++l5) {
    const e9 = 4 * i5[l5];
    s6[f6] = r8[e9], s6[f6 + 1] = r8[e9 + 1], s6[f6 + 2] = r8[e9 + 2], s6[f6 + 3] = r8[e9 + 3], f6 += n4;
  }
  else for (let l5 = 0; l5 < c7; ++l5) {
    const e9 = 4 * i5[l5];
    for (let t5 = 0; t5 < o7; ++t5) s6[f6] = r8[e9], s6[f6 + 1] = r8[e9 + 1], s6[f6 + 2] = r8[e9 + 2], s6[f6 + 3] = r8[e9 + 3], f6 += n4;
  }
}
function B3(e8, t4, f6) {
  const o7 = e8.typedBuffer, r8 = e8.typedBufferStride;
  t4 *= r8;
  for (let i5 = 0; i5 < f6; ++i5) o7[t4] = 0, o7[t4 + 1] = 0, o7[t4 + 2] = 0, o7[t4 + 3] = 0, t4 += r8;
}
function b3(t4, f6, o7, r8, i5 = 1) {
  if (!f6) return void a5(t4, o7, r8, i5);
  const { data: s6, indices: n4 } = t4, c7 = o7.typedBuffer, l5 = o7.typedBufferStride, d4 = n4.length, u6 = f6[0], p5 = f6[1], B4 = f6[2], y5 = f6[4], g2 = f6[5], b4 = f6[6], O6 = f6[8], h4 = f6[9], S5 = f6[10], N4 = f6[12], R6 = f6[13], E4 = f6[14];
  r8 *= l5;
  let F2 = 0, z3 = 0, A6 = 0;
  const L2 = H(f6) ? (e8) => {
    F2 = s6[e8] + N4, z3 = s6[e8 + 1] + R6, A6 = s6[e8 + 2] + E4;
  } : (e8) => {
    const t5 = s6[e8], f7 = s6[e8 + 1], o8 = s6[e8 + 2];
    F2 = u6 * t5 + y5 * f7 + O6 * o8 + N4, z3 = p5 * t5 + g2 * f7 + h4 * o8 + R6, A6 = B4 * t5 + b4 * f7 + S5 * o8 + E4;
  };
  if (1 === i5) for (let e8 = 0; e8 < d4; ++e8) L2(3 * n4[e8]), c7[r8] = F2, c7[r8 + 1] = z3, c7[r8 + 2] = A6, r8 += l5;
  else for (let e8 = 0; e8 < d4; ++e8) {
    L2(3 * n4[e8]);
    for (let e9 = 0; e9 < i5; ++e9) c7[r8] = F2, c7[r8 + 1] = z3, c7[r8 + 2] = A6, r8 += l5;
  }
}
function O5(f6, o7, r8, i5, s6 = 1) {
  if (!o7) return void a5(f6, r8, i5, s6);
  const { data: n4, indices: c7 } = f6, l5 = o7, d4 = r8.typedBuffer, u6 = r8.typedBufferStride, p5 = c7.length, B4 = l5[0], y5 = l5[1], g2 = l5[2], b4 = l5[4], O6 = l5[5], h4 = l5[6], S5 = l5[8], N4 = l5[9], R6 = l5[10], E4 = !G(l5), F2 = 1e-6, z3 = 1 - F2;
  i5 *= u6;
  let A6 = 0, L2 = 0, m5 = 0;
  const T3 = H(l5) ? (e8) => {
    A6 = n4[e8], L2 = n4[e8 + 1], m5 = n4[e8 + 2];
  } : (e8) => {
    const t4 = n4[e8], f7 = n4[e8 + 1], o8 = n4[e8 + 2];
    A6 = B4 * t4 + b4 * f7 + S5 * o8, L2 = y5 * t4 + O6 * f7 + N4 * o8, m5 = g2 * t4 + h4 * f7 + R6 * o8;
  };
  if (1 === s6) if (E4) for (let e8 = 0; e8 < p5; ++e8) {
    T3(3 * c7[e8]);
    const t4 = A6 * A6 + L2 * L2 + m5 * m5;
    if (t4 < z3 && t4 > F2) {
      const e9 = 1 / Math.sqrt(t4);
      d4[i5] = A6 * e9, d4[i5 + 1] = L2 * e9, d4[i5 + 2] = m5 * e9;
    } else d4[i5] = A6, d4[i5 + 1] = L2, d4[i5 + 2] = m5;
    i5 += u6;
  }
  else for (let e8 = 0; e8 < p5; ++e8) T3(3 * c7[e8]), d4[i5] = A6, d4[i5 + 1] = L2, d4[i5 + 2] = m5, i5 += u6;
  else for (let e8 = 0; e8 < p5; ++e8) {
    if (T3(3 * c7[e8]), E4) {
      const e9 = A6 * A6 + L2 * L2 + m5 * m5;
      if (e9 < z3 && e9 > F2) {
        const t4 = 1 / Math.sqrt(e9);
        A6 *= t4, L2 *= t4, m5 *= t4;
      }
    }
    for (let e9 = 0; e9 < s6; ++e9) d4[i5] = A6, d4[i5 + 1] = L2, d4[i5 + 2] = m5, i5 += u6;
  }
}
function h3(e8, f6, o7, r8, i5 = 1) {
  if (!f6) return void p4(e8, o7, r8, i5);
  const { data: s6, indices: n4 } = e8, c7 = f6, l5 = o7.typedBuffer, d4 = o7.typedBufferStride, u6 = n4.length, a6 = c7[0], B4 = c7[1], y5 = c7[2], g2 = c7[4], b4 = c7[5], O6 = c7[6], h4 = c7[8], S5 = c7[9], N4 = c7[10], R6 = !G(c7), E4 = 1e-6, F2 = 1 - E4;
  if (r8 *= d4, 1 === i5) for (let t4 = 0; t4 < u6; ++t4) {
    const e9 = 4 * n4[t4], f7 = s6[e9], o8 = s6[e9 + 1], i6 = s6[e9 + 2], c8 = s6[e9 + 3];
    let u7 = a6 * f7 + g2 * o8 + h4 * i6, p5 = B4 * f7 + b4 * o8 + S5 * i6, z3 = y5 * f7 + O6 * o8 + N4 * i6;
    if (R6) {
      const e10 = u7 * u7 + p5 * p5 + z3 * z3;
      if (e10 < F2 && e10 > E4) {
        const t5 = 1 / Math.sqrt(e10);
        u7 *= t5, p5 *= t5, z3 *= t5;
      }
    }
    l5[r8] = u7, l5[r8 + 1] = p5, l5[r8 + 2] = z3, l5[r8 + 3] = c8, r8 += d4;
  }
  else for (let t4 = 0; t4 < u6; ++t4) {
    const e9 = 4 * n4[t4], f7 = s6[e9], o8 = s6[e9 + 1], c8 = s6[e9 + 2], u7 = s6[e9 + 3];
    let p5 = a6 * f7 + g2 * o8 + h4 * c8, z3 = B4 * f7 + b4 * o8 + S5 * c8, A6 = y5 * f7 + O6 * o8 + N4 * c8;
    if (R6) {
      const e10 = p5 * p5 + z3 * z3 + A6 * A6;
      if (e10 < F2 && e10 > E4) {
        const t5 = 1 / Math.sqrt(e10);
        p5 *= t5, z3 *= t5, A6 *= t5;
      }
    }
    for (let t5 = 0; t5 < i5; ++t5) l5[r8] = p5, l5[r8 + 1] = z3, l5[r8 + 2] = A6, l5[r8 + 3] = u7, r8 += d4;
  }
}
function S4(e8, t4, f6, o7, r8 = 1) {
  const { data: i5, indices: s6 } = e8, n4 = f6.typedBuffer, c7 = f6.typedBufferStride, l5 = s6.length;
  if (o7 *= c7, t4 !== i5.length || 4 !== t4) if (1 !== r8) if (4 !== t4) for (let d4 = 0; d4 < l5; ++d4) {
    const e9 = 3 * s6[d4];
    for (let t5 = 0; t5 < r8; ++t5) n4[o7] = i5[e9], n4[o7 + 1] = i5[e9 + 1], n4[o7 + 2] = i5[e9 + 2], n4[o7 + 3] = 255, o7 += c7;
  }
  else for (let d4 = 0; d4 < l5; ++d4) {
    const e9 = 4 * s6[d4];
    for (let t5 = 0; t5 < r8; ++t5) n4[o7] = i5[e9], n4[o7 + 1] = i5[e9 + 1], n4[o7 + 2] = i5[e9 + 2], n4[o7 + 3] = i5[e9 + 3], o7 += c7;
  }
  else {
    if (4 === t4) {
      for (let e9 = 0; e9 < l5; ++e9) {
        const t5 = 4 * s6[e9];
        n4[o7] = i5[t5], n4[o7 + 1] = i5[t5 + 1], n4[o7 + 2] = i5[t5 + 2], n4[o7 + 3] = i5[t5 + 3], o7 += c7;
      }
      return;
    }
    for (let e9 = 0; e9 < l5; ++e9) {
      const t5 = 3 * s6[e9];
      n4[o7] = i5[t5], n4[o7 + 1] = i5[t5 + 1], n4[o7 + 2] = i5[t5 + 2], n4[o7 + 3] = 255, o7 += c7;
    }
  }
  else {
    n4[o7] = i5[0], n4[o7 + 1] = i5[1], n4[o7 + 2] = i5[2], n4[o7 + 3] = i5[3];
    const e9 = new Uint32Array(f6.typedBuffer.buffer, f6.start), t5 = c7 / 4, s7 = e9[o7 /= 4];
    o7 += t5;
    const d4 = l5 * r8;
    for (let f7 = 1; f7 < d4; ++f7) e9[o7] = s7, o7 += t5;
  }
}
function N3(e8, t4, f6) {
  const { data: o7, indices: r8 } = e8, i5 = t4.typedBuffer, s6 = t4.typedBufferStride, n4 = r8.length, c7 = o7[0];
  f6 *= s6;
  for (let l5 = 0; l5 < n4; ++l5) i5[f6] = c7, f6 += s6;
}
function R5(e8, t4, f6, o7, r8 = 1) {
  const i5 = t4.typedBuffer, s6 = t4.typedBufferStride;
  if (o7 *= s6, 1 === r8) for (let n4 = 0; n4 < f6; ++n4) i5[o7] = e8[0], i5[o7 + 1] = e8[1], i5[o7 + 2] = e8[2], i5[o7 + 3] = e8[3], o7 += s6;
  else for (let n4 = 0; n4 < f6; ++n4) for (let t5 = 0; t5 < r8; ++t5) i5[o7] = e8[0], i5[o7 + 1] = e8[1], i5[o7 + 2] = e8[2], i5[o7 + 3] = e8[3], o7 += s6;
}
function E3(e8, t4, o7, r8, i5, s6, n4) {
  var _a;
  for (const c7 of o7.fields.keys()) {
    const o8 = e8.get(c7), d4 = o8 == null ? void 0 : o8.indices;
    if (o8 && d4) F(c7, o8, r8, i5, s6, n4);
    else if (c7 === e4.OBJECTANDLAYERIDCOLOR && null != t4) {
      const o9 = (_a = e8.get(e4.POSITION)) == null ? void 0 : _a.indices;
      if (o9) {
        const e9 = o9.length;
        R5(t4, s6.getField(c7, x), e9, n4);
      }
    }
  }
}
function F(e8, t4, d4, a6, B4, y5) {
  switch (e8) {
    case e4.POSITION: {
      s4(3 === t4.size);
      const f6 = B4.getField(e8, i);
      s4(!!f6, `No buffer view for ${e8}`), f6 && b3(t4, d4, f6, y5);
      break;
    }
    case e4.NORMAL: {
      s4(3 === t4.size);
      const f6 = B4.getField(e8, i);
      s4(!!f6, `No buffer view for ${e8}`), f6 && O5(t4, a6, f6, y5);
      break;
    }
    case e4.NORMALCOMPRESSED: {
      s4(2 === t4.size);
      const f6 = B4.getField(e8, q2);
      s4(!!f6, `No buffer view for ${e8}`), f6 && u5(t4, f6, y5);
      break;
    }
    case e4.UV0: {
      s4(2 === t4.size);
      const f6 = B4.getField(e8, u3);
      s4(!!f6, `No buffer view for ${e8}`), f6 && u5(t4, f6, y5);
      break;
    }
    case e4.COLOR:
    case e4.SYMBOLCOLOR: {
      const o7 = B4.getField(e8, x);
      s4(!!o7, `No buffer view for ${e8}`), s4(3 === t4.size || 4 === t4.size), !o7 || 3 !== t4.size && 4 !== t4.size || S4(t4, t4.size, o7, y5);
      break;
    }
    case e4.COLORFEATUREATTRIBUTE: {
      const f6 = B4.getField(e8, y2);
      s4(!!f6, `No buffer view for ${e8}`), s4(1 === t4.size), f6 && 1 === t4.size && N3(t4, f6, y5);
      break;
    }
    case e4.TANGENT: {
      s4(4 === t4.size);
      const f6 = B4.getField(e8, c3);
      s4(!!f6, `No buffer view for ${e8}`), f6 && h3(t4, d4, f6, y5);
      break;
    }
    case e4.PROFILERIGHT:
    case e4.PROFILEUP:
    case e4.PROFILEVERTEXANDNORMAL:
    case e4.FEATUREVALUE: {
      s4(4 === t4.size);
      const f6 = B4.getField(e8, c3);
      s4(!!f6, `No buffer view for ${e8}`), f6 && p4(t4, f6, y5);
    }
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultBufferWriter.js
var f4 = class {
  constructor(e8) {
    this.vertexBufferLayout = e8;
  }
  elementCount(e8) {
    return e8.get(e4.POSITION).indices.length;
  }
  write(e8, t4, r8, o7, i5, f6) {
    E3(r8, o7, this.vertexBufferLayout, e8, t4, i5, f6);
  }
  intersect(t4, s6, f6, u6, m5) {
    const c7 = this.vertexBufferLayout.createView(t4).getField(e4.POSITION, i);
    if (null == c7) return;
    const l5 = R(n3, u6, f6), a6 = 0, p5 = c7.elementCount / 3, y5 = s6.options.normalRequired, b4 = (e8, t5, r8) => {
      m5(e8, r8, t5, false);
    };
    y3(f6, l5, a6, p5, c7.typedBuffer, c7.typedBufferStride, y5, b4);
  }
};
var n3 = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/StencilUtils.js
var i4 = { func: O.LESS };
var s5 = { func: O.ALWAYS };
var e7 = { mask: 255 };
var l4 = { mask: 0 };
var f5 = { function: { func: O.ALWAYS, ref: s3.OutlineVisualElementMask, mask: s3.OutlineVisualElementMask }, operation: { fail: I2.KEEP, zFail: I2.KEEP, zPass: I2.ZERO } };
var o6 = { function: { func: O.ALWAYS, ref: s3.OutlineVisualElementMask, mask: s3.OutlineVisualElementMask }, operation: { fail: I2.KEEP, zFail: I2.KEEP, zPass: I2.REPLACE } };
var P2 = { function: { func: O.EQUAL, ref: s3.OutlineVisualElementMask, mask: s3.OutlineVisualElementMask }, operation: { fail: I2.KEEP, zFail: I2.KEEP, zPass: I2.KEEP } };
var m4 = { function: { func: O.NOTEQUAL, ref: s3.OutlineVisualElementMask, mask: s3.OutlineVisualElementMask }, operation: { fail: I2.KEEP, zFail: I2.KEEP, zPass: I2.KEEP } };

export {
  a,
  o5 as o,
  e6 as e,
  r7 as r,
  f2 as f,
  T,
  a4 as a2,
  l3 as l,
  A2 as A,
  C,
  N,
  f3 as f2,
  i3 as i,
  h2 as h,
  p3 as p,
  x2 as x,
  w,
  A4 as A2,
  b2 as b,
  d2 as d,
  d3 as d2,
  p4 as p2,
  B3 as B,
  b3 as b2,
  O5 as O,
  S4 as S,
  R5 as R,
  E3 as E,
  F,
  f4 as f3,
  i4 as i2,
  s5 as s,
  e7 as e2,
  l4 as l2,
  f5 as f4,
  o6 as o2,
  P2 as P,
  m4 as m
};
//# sourceMappingURL=chunk-EMVGISAT.js.map
