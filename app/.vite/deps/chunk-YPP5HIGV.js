import {
  A as A3,
  B,
  C as C2,
  H as H2,
  J as J3,
  K as K2,
  U as U2,
  l as l4,
  w2
} from "./chunk-X6OZYL6W.js";
import {
  r as r6
} from "./chunk-U4J3KS6Z.js";
import {
  e as e4,
  r as r7
} from "./chunk-UCWGKGC3.js";
import {
  A as A2,
  j as j7,
  w
} from "./chunk-JUMO2VIG.js";
import {
  s as s5
} from "./chunk-NWL5O6MC.js";
import {
  o as o4
} from "./chunk-HMX7SZAM.js";
import {
  n as n8
} from "./chunk-4BTKBTXL.js";
import {
  b,
  j as j6,
  n as n7
} from "./chunk-6MN3R543.js";
import {
  v as v3
} from "./chunk-NJTJZUTI.js";
import {
  U,
  a as a4,
  d as d2,
  h as h2,
  i as i3,
  l as l3,
  o as o3,
  s as s4
} from "./chunk-DMO5AKFB.js";
import {
  v as v2
} from "./chunk-WXTMYNFS.js";
import {
  C
} from "./chunk-S4ARCHTK.js";
import {
  n as n6
} from "./chunk-GTKHPYCP.js";
import {
  e as e2
} from "./chunk-ZZ4UNY3F.js";
import {
  D,
  H,
  J as J2,
  M,
  O,
  V,
  a as a3,
  f,
  h,
  k,
  l,
  p as p2,
  z
} from "./chunk-NVEHOQKI.js";
import {
  l as l2
} from "./chunk-U7ERRXB6.js";
import {
  n as n5,
  o as o2,
  t as t3
} from "./chunk-O2L6JAHP.js";
import {
  I as I2,
  T,
  _ as _3,
  e as e3,
  j as j5,
  k as k2,
  m as m2,
  r as r5,
  v
} from "./chunk-K35H6D4D.js";
import {
  A,
  I,
  J,
  K,
  P as P2,
  _ as _2,
  g as g2,
  j as j4,
  o,
  p,
  q,
  s as s3,
  u as u3,
  y
} from "./chunk-UMYFDXOJ.js";
import {
  n as n4,
  r as r4,
  u as u2
} from "./chunk-MHM4GDCM.js";
import {
  L,
  _,
  a as a2
} from "./chunk-363AT5UF.js";
import {
  j as j3
} from "./chunk-T7KGE6VP.js";
import {
  j as j2
} from "./chunk-T57WVICI.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  n as n2
} from "./chunk-5EWD56QJ.js";
import {
  n as n3,
  r as r3,
  t as t2,
  u
} from "./chunk-JLFSX3JT.js";
import {
  i as i2,
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  r as r2,
  s as s2
} from "./chunk-6P7HXSJ6.js";
import {
  d,
  te
} from "./chunk-LTDNORB5.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
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
import {
  e,
  t
} from "./chunk-M6FNW7GP.js";
import {
  F,
  n,
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/interactive/coordinateHelper.js
var x;
!function(e9) {
  e9[e9.Z = 0] = "Z", e9[e9.M = 1] = "M";
}(x || (x = {}));
var R = class {
  constructor(e9) {
    this.spatialReference = e9;
  }
  createVector() {
    return this._tag(n5());
  }
  pointToVector(e9) {
    return this._tag(t3(e9.x, e9.y));
  }
  arrayToVector(e9) {
    return this._tag(t3(e9[0], e9[1]));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1]];
  }
  pointToArray(e9) {
    return [e9.x, e9.y];
  }
  vectorToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = void 0, r10.m = void 0, r10.spatialReference = this.spatialReference, r10;
  }
  arrayToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = void 0, r10.m = void 0, r10.spatialReference = this.spatialReference, r10;
  }
  vectorToDehydratedPoint(e9, r10) {
    if (e9) return r10 ?? (r10 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }), r10.x = e9[0], r10.y = e9[1], r10.z = void 0, r10.m = void 0, r10.hasZ = false, r10.hasM = false, r10.spatialReference = this.spatialReference, r10;
  }
  lerp(r10, t10, a8, i8) {
    return _3(i8, r10, t10, a8);
  }
  addDelta(e9, r10, t10) {
    e9[0] += r10, e9[1] += t10;
  }
  distance(e9, t10) {
    return m2(e9, t10);
  }
  getZ(e9, r10 = void 0) {
    return r10;
  }
  hasZ() {
    return false;
  }
  getM(e9, r10 = void 0) {
    return r10;
  }
  hasM() {
    return false;
  }
  clone(e9) {
    return this._tag(o2(e9));
  }
  copy(e9, r10) {
    return r5(r10, e9);
  }
  fromXYZ(e9) {
    return this._tag(t3(e9[0], e9[1]));
  }
  toXYZ(e9, r10 = n3()) {
    return o(r10, e9[0], e9[1], 0);
  }
  pointToXYZ(e9, r10 = n3()) {
    return o(r10, e9.x, e9.y, 0);
  }
  equals(e9, r10) {
    return T(e9, r10);
  }
  _tag(e9) {
    return e9;
  }
};
var M2 = class {
  constructor(e9, r10) {
    this._valueType = e9, this.spatialReference = r10;
  }
  createVector() {
    return this._tag(n3());
  }
  pointToVector(e9) {
    return this._tag(r3(e9.x, e9.y, this._valueType === x.Z ? e9.z : e9.m));
  }
  arrayToVector(e9) {
    return this._tag(r3(e9[0], e9[1], e9[2] || 0));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1], e9[2]];
  }
  pointToArray(e9) {
    return this._valueType === x.Z ? [e9.x, e9.y, e9.z] : [e9.x, e9.y, e9.m];
  }
  vectorToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = this._valueType === x.Z ? e9[2] : void 0, r10.m = this._valueType === x.M ? e9[2] : void 0, r10.spatialReference = this.spatialReference, r10;
  }
  arrayToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = this._valueType === x.Z ? e9[2] : void 0, r10.m = this._valueType === x.M ? e9[2] : void 0, r10.spatialReference = this.spatialReference, r10;
  }
  vectorToDehydratedPoint(e9, r10) {
    if (!e9) return;
    r10 ?? (r10 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" });
    const t10 = this._valueType === x.Z, a8 = this._valueType === x.M;
    return r10.x = e9[0], r10.y = e9[1], r10.z = t10 ? e9[2] : void 0, r10.m = a8 ? e9[2] : void 0, r10.hasZ = t10, r10.hasM = a8, r10.spatialReference = this.spatialReference, r10;
  }
  lerp(e9, r10, t10, a8) {
    return I(a8, e9, r10, t10);
  }
  addDelta(e9, r10, t10, a8) {
    e9[0] += r10, e9[1] += t10, this._valueType === x.Z && (e9[2] += a8);
  }
  distance(e9, t10) {
    return this._valueType === x.Z ? p(e9, t10) : m2(w3(e9), w3(t10));
  }
  getZ(e9, r10 = void 0) {
    return this._valueType === x.Z ? e9[2] : r10;
  }
  hasZ() {
    return this._valueType === x.Z;
  }
  getM(e9, r10 = void 0) {
    return this._valueType === x.M ? e9[2] : r10;
  }
  hasM() {
    return this._valueType === x.M;
  }
  clone(e9) {
    return this._tag(u(e9));
  }
  copy(e9, r10) {
    return s3(r10, e9);
  }
  fromXYZ(e9, r10 = 0, t10 = 0) {
    return this._tag(r3(e9[0], e9[1], this._valueType === x.Z ? e9.length > 2 ? e9[2] : r10 : t10));
  }
  toXYZ(e9, r10 = n3()) {
    return o(r10, e9[0], e9[1], this._valueType === x.Z ? e9[2] : 0);
  }
  pointToXYZ(e9, r10 = n3()) {
    return o(r10, e9.x, e9.y, this._valueType === x.Z ? e9.z ?? 0 : 0);
  }
  equals(e9, r10) {
    return J(e9, r10);
  }
  _tag(e9) {
    return e9;
  }
};
var z2 = class {
  constructor(e9) {
    this.spatialReference = e9;
  }
  createVector() {
    return this._tag(n4());
  }
  pointToVector(e9) {
    return this._tag(r4(e9.x, e9.y, e9.z, e9.m));
  }
  arrayToVector(e9) {
    return this._tag(r4(e9[0], e9[1], e9[2] || 0, e9[3] || 0));
  }
  vectorToArray(e9) {
    return [e9[0], e9[1], e9[2], e9[3]];
  }
  pointToArray(e9) {
    return [e9.x, e9.y, e9.z, e9.m];
  }
  vectorToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = e9[2], r10.m = e9[3], r10.spatialReference = this.spatialReference, r10;
  }
  arrayToPoint(e9, r10 = new j()) {
    return r10.x = e9[0], r10.y = e9[1], r10.z = e9[2], r10.m = e9[3], r10.spatialReference = this.spatialReference, r10;
  }
  vectorToDehydratedPoint(e9, r10) {
    if (e9) return r10 ?? (r10 = { x: void 0, y: void 0, z: void 0, m: void 0, hasZ: void 0, hasM: void 0, spatialReference: void 0, type: "point" }), r10.x = e9[0], r10.y = e9[1], r10.z = e9[2], r10.m = e9[3], r10.hasZ = true, r10.hasM = true, r10.spatialReference = this.spatialReference, r10;
  }
  lerp(e9, r10, t10, a8) {
    return _(a8, e9, r10, t10);
  }
  addDelta(e9, r10, t10, a8) {
    e9[0] += r10, e9[1] += t10, e9[2] += a8;
  }
  distance(e9, r10) {
    return p(V2(e9), V2(r10));
  }
  getZ(e9) {
    return e9[2];
  }
  hasZ() {
    return true;
  }
  getM(e9) {
    return e9[3];
  }
  hasM() {
    return true;
  }
  clone(e9) {
    return this._tag(u2(e9));
  }
  copy(e9, r10) {
    return a2(r10, e9);
  }
  fromXYZ(e9, r10 = 0, t10 = 0) {
    return this._tag(r4(e9[0], e9[1], e9.length > 2 ? e9[2] : r10, t10));
  }
  toXYZ(e9, r10 = n3()) {
    return o(r10, e9[0], e9[1], e9[2]);
  }
  pointToXYZ(e9, r10 = n3()) {
    return o(r10, e9.x, e9.y, e9.z ?? 0);
  }
  equals(e9, r10) {
    return L(e9, r10);
  }
  _tag(e9) {
    return e9;
  }
};
function V2(e9) {
  return e9;
}
function w3(e9) {
  return e9;
}
function P3(e9, r10, t10) {
  return e9 && r10 ? new z2(t10) : r10 ? new M2(x.M, t10) : e9 ? new M2(x.Z, t10) : new R(t10);
}

// node_modules/@arcgis/core/views/interactive/editGeometry/unnormalizationHelper.js
function e5(o8, r10) {
  if (!r10.supported) return;
  let e9 = 1 / 0, p5 = -1 / 0;
  const n11 = r10.upperBoundX - r10.lowerBoundX;
  o8.forEach((o9) => {
    let u7 = o9.pos[0];
    for (; u7 < r10.lowerBoundX; ) u7 += n11;
    for (; u7 > r10.upperBoundX; ) u7 -= n11;
    e9 = Math.min(e9, u7), p5 = Math.max(p5, u7), o9.pos[0] = u7;
  });
  const u6 = p5 - e9;
  n11 - u6 < u6 && o8.forEach((o9) => {
    o9.pos[0] < 0 && (o9.pos[0] += n11);
  });
}
function p3(e9, p5) {
  const n11 = d(e9);
  return p5 === l2.Global && n11 ? { supported: true, lowerBoundX: n11.valid[0], upperBoundX: n11.valid[1] } : { supported: false, lowerBoundX: null, upperBoundX: null };
}

// node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometry.js
var h3 = class {
  constructor(e9) {
    this.component = e9, this.leftEdge = null, this.rightEdge = null, this.type = "vertex", this.index = null;
  }
  get pos() {
    return this._pos;
  }
  set pos(e9) {
    this._pos = e9, this.component.unnormalizeVertexPositions();
  }
};
var l5 = class {
  constructor(e9, t10, s8) {
    this.component = e9, this.leftVertex = t10, this.rightVertex = s8, this.type = "edge", t10.rightEdge = this, s8.leftEdge = this;
  }
};
var a5 = class {
  constructor(e9, t10) {
    this._spatialReference = e9, this._viewingMode = t10, this.vertices = [], this.edges = [], this.index = null;
  }
  unnormalizeVertexPositions() {
    this.vertices.length <= 1 || e5(this.vertices, p3(this._spatialReference, this._viewingMode));
  }
  updateVertexIndex(e9, t10) {
    if (0 === this.vertices.length) return;
    const s8 = this.vertices[0];
    let i8 = null, r10 = e9, o8 = t10;
    do {
      i8 = r10, i8.index = o8++, r10 = i8.rightEdge ? i8.rightEdge.rightVertex : null;
    } while (null != r10 && r10 !== s8);
    i8.leftEdge && i8 !== this.vertices[this.vertices.length - 1] && this.swapVertices(this.vertices.indexOf(i8), this.vertices.length - 1);
  }
  getFirstVertex() {
    return this.vertices.at(0);
  }
  getLastVertex() {
    return this.vertices.at(-1);
  }
  isClosed() {
    return this.vertices.length > 2 && null !== this.vertices[0].leftEdge;
  }
  swapVertices(e9, t10) {
    const s8 = this.vertices[e9];
    this.vertices[e9] = this.vertices[t10], this.vertices[t10] = s8;
  }
  iterateVertices(e9) {
    if (0 === this.vertices.length) return;
    const t10 = this.vertices[0];
    let s8 = t10;
    do {
      e9(s8, s8.index), s8 = null != s8.rightEdge ? s8.rightEdge.rightVertex : null;
    } while (s8 !== t10 && null != s8);
  }
};
var p4 = class _p extends i {
  constructor(e9, t10) {
    super(), this.type = e9, this.coordinateHelper = t10, this._geometry = null, this._dirty = true, this.components = [];
  }
  get geometry() {
    if (this._dirty) {
      switch (this.type) {
        case "point":
          this._geometry = this._toPoint();
          break;
        case "polyline":
          this._geometry = this._toPolyline();
          break;
        case "polygon":
          this._geometry = this._toPolygon();
          break;
        case "mesh":
          break;
        default:
          n(this.type);
      }
      this._dirty = false;
    }
    return this._geometry;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
  get allVertices() {
    return Array.from(this.iterateVertices());
  }
  *iterateVertices() {
    for (const e9 of this.components) for (const t10 of e9.vertices) yield t10;
  }
  notifyChanges(e9) {
    this._dirty = true, this.emit("change", e9);
  }
  _toPoint() {
    return 0 === this.components.length || 0 === this.components[0].vertices.length ? null : this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos);
  }
  _toPolyline() {
    const e9 = [], t10 = this.coordinateHelper.vectorToArray;
    for (const s8 of this.components) {
      if (s8.vertices.length < 1) continue;
      const i8 = [];
      let r10 = s8.vertices.find((e10) => null == e10.leftEdge);
      const o8 = r10;
      do {
        i8.push(t10(r10.pos)), r10 = r10.rightEdge ? r10.rightEdge.rightVertex : null;
      } while (r10 && r10 !== o8);
      e9.push(i8);
    }
    return new P({ paths: e9, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  _toPolygon() {
    const e9 = [], t10 = this.coordinateHelper.vectorToArray;
    for (const s8 of this.components) {
      if (s8.vertices.length < 1) continue;
      const i8 = [], r10 = s8.vertices[0];
      let o8 = r10;
      const n11 = o8;
      do {
        i8.push(t10(o8.pos)), o8 = null != o8.rightEdge ? o8.rightEdge.rightVertex : null;
      } while (o8 && o8 !== n11);
      s8.isClosed() && i8.push(t10(r10.pos)), e9.push(i8);
    }
    return new j3({ rings: e9, spatialReference: this.spatialReference, hasZ: this.coordinateHelper.hasZ(), hasM: this.coordinateHelper.hasM() });
  }
  static fromGeometry(e9, t10) {
    const s8 = e9.spatialReference, i8 = P3(e9.hasZ, e9.hasM, s8), r10 = new _p(e9.type, i8);
    switch (e9.type) {
      case "polygon":
        g3(r10, e9, t10);
        break;
      case "polyline":
        d3(r10, e9, t10);
        break;
      case "point":
        u4(r10, e9, t10);
        break;
      case "mesh":
        u4(r10, e9.origin, t10), r10._geometry = e9, r10._dirty = false;
    }
    return r10;
  }
};
function g3(t10, s8, i8) {
  const r10 = s8.spatialReference, o8 = t10.coordinateHelper, n11 = s8.rings;
  for (let c4 = 0; c4 < n11.length; ++c4) {
    const s9 = n11[c4], p5 = new a5(r10, i8);
    p5.index = c4;
    const g6 = s9.length > 2 && s(s9[0], s9[s9.length - 1]), d5 = g6 ? s9.length - 1 : s9.length;
    for (let e9 = 0; e9 < d5; ++e9) {
      const t11 = o8.arrayToVector(s9[e9]), i9 = new h3(p5);
      p5.vertices.push(i9), i9.pos = t11, i9.index = e9;
    }
    const u6 = p5.vertices.length - 1;
    for (let e9 = 0; e9 < u6; ++e9) {
      const t11 = p5.vertices[e9], s10 = p5.vertices[e9 + 1], i9 = new l5(p5, t11, s10);
      p5.edges.push(i9);
    }
    if (g6) {
      const e9 = new l5(p5, p5.vertices[p5.vertices.length - 1], p5.vertices[0]);
      p5.edges.push(e9);
    }
    t10.components.push(p5);
  }
}
function d3(e9, t10, s8) {
  const i8 = t10.spatialReference, r10 = e9.coordinateHelper, o8 = t10.paths;
  for (let n11 = 0; n11 < o8.length; ++n11) {
    const t11 = o8[n11], c4 = new a5(i8, s8);
    c4.index = n11;
    const p5 = t11.length;
    for (let e10 = 0; e10 < p5; ++e10) {
      const s9 = r10.arrayToVector(t11[e10]), i9 = new h3(c4);
      c4.vertices.push(i9), i9.pos = s9, i9.index = e10;
    }
    const g6 = c4.vertices.length - 1;
    for (let e10 = 0; e10 < g6; ++e10) {
      const t12 = c4.vertices[e10], s9 = c4.vertices[e10 + 1], i9 = new l5(c4, t12, s9);
      c4.edges.push(i9);
    }
    e9.components.push(c4);
  }
}
function u4(e9, t10, s8) {
  const i8 = t10.spatialReference, r10 = e9.coordinateHelper, o8 = new a5(i8, s8);
  o8.index = 0;
  const n11 = new h3(o8);
  n11.index = 0, n11.pos = r10.pointToVector(t10), o8.vertices.push(n11), e9.components.push(o8);
}
function f2(e9) {
  return "mesh" === e9.type;
}

// node_modules/@arcgis/core/views/interactive/editGeometry/interfaces.js
var E;
!function(E3) {
  E3[E3.NEW_STEP = 0] = "NEW_STEP", E3[E3.ACCUMULATE_STEPS = 1] = "ACCUMULATE_STEPS";
}(E || (E = {}));

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/AppendVertex.js
var i4 = class {
  constructor(e9, t10, i8) {
    this._editGeometry = e9, this._component = t10, this._pos = i8, this._addedVertex = null, this._originalEdge = null, this._left = null, this._right = null;
  }
  apply() {
    let i8 = "redo";
    null == this._addedVertex && (i8 = "apply", this._addedVertex = new h3(this._component));
    const s8 = this._component.getLastVertex();
    if (null == s8) this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, this._addedVertex.index = 0;
    else {
      let e9 = null;
      s8.rightEdge && (this._originalEdge = s8.rightEdge, e9 = this._originalEdge.rightVertex, this._component.edges.splice(this._component.edges.indexOf(this._originalEdge), 1)), this._component.vertices.push(this._addedVertex), this._addedVertex.pos = this._pos, null == this._left && (this._left = new l5(this._component, s8, this._addedVertex)), this._component.edges.push(this._left), s8.rightEdge = this._left, null != this._originalEdge && null != e9 && (null == this._right && (this._right = new l5(this._component, this._addedVertex, e9)), this._component.edges.push(this._right), e9.leftEdge = this._right), this._component.updateVertexIndex(this._addedVertex, s8.index + 1);
    }
    this._editGeometry.notifyChanges({ operation: i8, addedVertices: [this._addedVertex] });
  }
  undo() {
    null != this._addedVertex && (this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex), 1), null != this._left && (this._component.edges.splice(this._component.edges.indexOf(this._left), 1), this._left.leftVertex.rightEdge = null), null != this._right && (this._component.edges.splice(this._component.edges.indexOf(this._right), 1), this._right.rightVertex.leftEdge = null), null != this._originalEdge && (this._component.edges.push(this._originalEdge), this._originalEdge.leftVertex.rightEdge = this._originalEdge, this._originalEdge.rightVertex.leftEdge = this._originalEdge), null != this._left ? this._component.updateVertexIndex(this._left.leftVertex, this._left.leftVertex.index) : this._component.updateVertexIndex(this._addedVertex, 0), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this._addedVertex] }));
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/UpdateVertices.js
var t4 = class _t {
  constructor(t10, e9, i8) {
    this._editGeometry = t10, this._vertices = e9, this.operation = i8, this._undone = false;
  }
  _notifyChanges(t10) {
    this._editGeometry.components.forEach((t11) => t11.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: t10, updatedVertices: this._vertices });
  }
  apply() {
    this._vertices.forEach((t10) => this.operation.apply(t10)), this._notifyChanges(this._undone ? "redo" : "apply");
  }
  undo() {
    this._vertices.forEach((t10) => this.operation.undo(t10)), this._undone = true, this._notifyChanges("undo");
  }
  canAccumulate(t10) {
    if (this._undone || t10._vertices.length !== this._vertices.length) return false;
    for (let e9 = 0; e9 < t10._vertices.length; ++e9) if (t10._vertices[e9] !== this._vertices[e9]) return false;
    return this.operation.canAccumulate(t10.operation);
  }
  accumulate(e9) {
    return !!(e9 instanceof _t && this.canAccumulate(e9)) && (this._vertices.forEach((t10) => this.operation.accumulate(t10, e9.operation)), this.operation.accumulateParams(e9.operation), this._notifyChanges("apply"), true);
  }
};
var e6;
!function(t10) {
  t10[t10.CUMULATIVE = 0] = "CUMULATIVE", t10[t10.REPLACE = 1] = "REPLACE";
}(e6 || (e6 = {}));

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/RemoveVertices.js
var t5 = class {
  constructor(e9, t10, r10 = 0) {
    this._editGeometry = e9, this._vertices = t10, this._minNumberOfVertices = r10, this.removedVertices = null;
  }
  apply() {
    let e9 = "redo";
    if (null == this.removedVertices) {
      const t10 = this.removedVertices = [];
      this._vertices.forEach((e10) => {
        const r10 = this._removeVertex(e10);
        null != r10 && t10.push(r10);
      }), e9 = "apply";
    } else this.removedVertices.forEach((e10) => {
      this._removeVertex(e10.removedVertex);
    });
    this._editGeometry.notifyChanges({ operation: e9, removedVertices: this._vertices });
  }
  undo() {
    var _a;
    (_a = this.removedVertices) == null ? void 0 : _a.forEach((e9) => {
      this._undoRemoveVertex(e9);
    }), this._editGeometry.notifyChanges({ operation: "undo", addedVertices: this._vertices });
  }
  accumulate() {
    return false;
  }
  _removeVertex(t10) {
    const r10 = t10.component;
    if (r10.vertices.length <= this._minNumberOfVertices) return null;
    const i8 = { removedVertex: t10, createdEdge: null }, s8 = t10.leftEdge, d5 = t10.rightEdge;
    return r10.vertices.splice(r10.vertices.indexOf(t10), 1), s8 && (r10.edges.splice(r10.edges.indexOf(s8), 1), s8.leftVertex.rightEdge = null), d5 && (r10.edges.splice(r10.edges.indexOf(d5), 1), d5.rightVertex.leftEdge = null), 0 === t10.index && d5 && this._vertices.length > 0 && r10.swapVertices(r10.vertices.indexOf(d5.rightVertex), 0), s8 && d5 && (i8.createdEdge = new l5(r10, s8.leftVertex, d5.rightVertex), r10.edges.push(i8.createdEdge)), d5 && r10.updateVertexIndex(d5.rightVertex, d5.rightVertex.index - 1), i8;
  }
  _undoRemoveVertex(e9) {
    const t10 = e9.removedVertex, r10 = e9.removedVertex.component, i8 = t10.leftEdge, s8 = t10.rightEdge;
    e9.createdEdge && r10.edges.splice(r10.edges.indexOf(e9.createdEdge), 1), r10.vertices.push(t10), i8 && (r10.edges.push(i8), i8.leftVertex.rightEdge = i8), s8 && (r10.edges.push(s8), s8.rightVertex.leftEdge = s8), r10.updateVertexIndex(t10, t10.index);
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SplitEdge.js
var i5 = class {
  constructor(e9, t10, i8) {
    this._editGeometry = e9, this._edge = t10, this._t = i8, this.createdVertex = null, this._left = null, this._right = null;
  }
  apply() {
    let i8 = "redo";
    const r10 = this._edge, s8 = r10.component, d5 = r10.leftVertex, h6 = r10.rightVertex;
    s8.edges.splice(s8.edges.indexOf(r10), 1), null == this.createdVertex && (i8 = "apply", this.createdVertex = new h3(r10.component)), s8.vertices.push(this.createdVertex), this.createdVertex.pos = this._editGeometry.coordinateHelper.lerp(r10.leftVertex.pos, r10.rightVertex.pos, this._t, this._editGeometry.coordinateHelper.createVector()), null == this._left && (this._left = new l5(s8, d5, this.createdVertex)), this._left.leftVertex.leftEdge ? s8.edges.push(this._left) : s8.edges.unshift(this._left), d5.rightEdge = this._left, null == this._right && (this._right = new l5(s8, this.createdVertex, h6)), s8.edges.push(this._right), h6.leftEdge = this._right, s8.updateVertexIndex(this.createdVertex, d5.index + 1), this._editGeometry.notifyChanges({ operation: i8, addedVertices: [this.createdVertex] });
  }
  undo() {
    if (null == this.createdVertex || null == this._left || null == this._right) return null;
    const e9 = this._edge, t10 = e9.component, i8 = this.createdVertex.leftEdge, r10 = this.createdVertex.rightEdge, s8 = i8 == null ? void 0 : i8.leftVertex, d5 = r10 == null ? void 0 : r10.rightVertex;
    t10.vertices.splice(t10.vertices.indexOf(this.createdVertex), 1), t10.edges.splice(t10.edges.indexOf(this._left), 1), t10.edges.splice(t10.edges.indexOf(this._right), 1), this._edge.leftVertex.leftEdge ? t10.edges.push(this._edge) : t10.edges.unshift(this._edge), s8 && (s8.rightEdge = e9), d5 && (d5.leftEdge = e9), s8 && t10.updateVertexIndex(s8, s8.index), this._editGeometry.notifyChanges({ operation: "undo", removedVertices: [this.createdVertex] });
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetVertexPosition.js
var t6 = class _t {
  constructor(t10, e9, i8) {
    this._editGeometry = t10, this._vertex = e9, this._pos = i8;
  }
  apply() {
    const t10 = null == this._originalPosition;
    t10 && (this._originalPosition = this._vertex.pos), this._apply(t10 ? "apply" : "redo");
  }
  undo() {
    this._vertex.pos = this._originalPosition, this._editGeometry.notifyChanges({ operation: "undo", updatedVertices: [this._vertex] });
  }
  accumulate(e9) {
    return e9 instanceof _t && e9._vertex === this._vertex && (this._pos = e9._pos, this._apply("apply"), true);
  }
  _apply(t10) {
    this._vertex.pos = this._pos, this._editGeometry.components.forEach((t11) => t11.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: t10, updatedVertices: [this._vertex] });
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/CloseComponent.js
var r8 = class {
  constructor(e9, t10) {
    this._editGeometry = e9, this._component = t10, this._createdEdge = null;
  }
  apply() {
    let e9 = "redo";
    if (null == this._createdEdge) {
      e9 = "apply";
      const r10 = this._component.getFirstVertex(), i8 = this._component.getLastVertex();
      if (this._component.isClosed() || this._component.vertices.length < 3 || null == r10 || null == i8) return;
      this._createdEdge = new l5(this._component, i8, r10);
    }
    this._createdEdge.leftVertex.rightEdge = this._createdEdge, this._createdEdge.rightVertex.leftEdge = this._createdEdge, this._component.edges.push(this._createdEdge), this._editGeometry.notifyChanges({ operation: e9 });
  }
  undo() {
    null != this._createdEdge && (F(this._component.edges, this._createdEdge), this._createdEdge.leftVertex.rightEdge = null, this._createdEdge.rightVertex.leftEdge = null, this._editGeometry.notifyChanges({ operation: "undo" }));
  }
  accumulate() {
    return false;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveMesh.js
var t7 = class _t {
  constructor(t10, e9, i8, s8) {
    this._editGeometry = t10, this.dx = e9, this.dy = i8, this.dz = s8, this._firstTime = true;
  }
  apply() {
    const t10 = this._firstTime ? "apply" : "redo";
    this._firstTime = false, this._apply(t10, this.dx, this.dy, this.dz);
  }
  undo() {
    this._apply("undo", -this.dx, -this.dy, -this.dz);
  }
  accumulate(e9) {
    const i8 = this._editGeometry.geometry;
    return e9 instanceof _t && e9._editGeometry.geometry === i8 && (this._apply("apply", e9.dx, e9.dy, e9.dz), this.dx += e9.dx, this.dy += e9.dy, this.dz += e9.dz, true);
  }
  _apply(t10, e9, i8, s8) {
    const o8 = this._editGeometry.geometry;
    o8.offset(e9, i8, s8);
    const d5 = this._editGeometry.components[0].getFirstVertex();
    if (!d5) return;
    const r10 = this._editGeometry.coordinateHelper;
    d5.pos = r10.pointToVector(o8.origin), this._editGeometry.notifyChanges({ operation: t10, updatedVertices: [d5] });
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/MoveVertex.js
var t8 = class _t {
  constructor(t10, s8, d5, h6) {
    this._helper = t10, this.dx = s8, this.dy = d5, this.dz = h6;
  }
  _move(t10, s8, d5, h6) {
    this._helper.addDelta(t10.pos, s8, d5, h6);
  }
  apply(t10) {
    this._move(t10, this.dx, this.dy, this.dz);
  }
  undo(t10) {
    this._move(t10, -this.dx, -this.dy, -this.dz);
  }
  canAccumulate(s8) {
    return s8 instanceof _t;
  }
  accumulate(t10, s8) {
    this._move(t10, s8.dx, s8.dy, s8.dz);
  }
  accumulateParams(t10) {
    this.dx += t10.dx, this.dy += t10.dy, this.dz += t10.dz;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/OffsetEdgeVertex.js
var P4 = class _P {
  get plane() {
    return this._plane;
  }
  get requiresSplitEdgeLeft() {
    return !this._left.isOriginalDirection;
  }
  get requiresSplitEdgeRight() {
    return !this._right.isOriginalDirection;
  }
  get edgeDirection() {
    return this._edgeDirection;
  }
  constructor(t10, i8, e9, s8 = 0, n11 = j8.IMMEDIATE) {
    this._helper = t10, this._planeType = i8, this._edge = e9, this.distance = s8, this._plane = M(), this._offsetPlane = M(), this._minDistance = -1 / 0, this._maxDistance = 1 / 0, this._selectedArrow = 1, n11 === j8.IMMEDIATE && this._initialize();
  }
  _initialize() {
    this._initializeNeighbors(), this._initializePlane(), this._initializeDistanceConstraints();
  }
  _initializeNeighbors() {
    var _a, _b, _c, _d;
    const t10 = this._toXYZ(this._edge.leftVertex.pos), i8 = this._toXYZ((_b = (_a = this._edge.leftVertex.leftEdge) == null ? void 0 : _a.leftVertex) == null ? void 0 : _b.pos), e9 = this._toXYZ(this._edge.rightVertex.pos), s8 = this._toXYZ((_d = (_c = this._edge.rightVertex.rightEdge) == null ? void 0 : _c.rightVertex) == null ? void 0 : _d.pos);
    this._edgeDirection = K(n3(), t10, e9), i8 ? (this._left = this._computeNeighbor(t10, i8, this._edgeDirection), this._right = this._computeNeighbor(e9, s8, this._edgeDirection, this._left)) : (this._right = this._computeNeighbor(e9, s8, this._edgeDirection), this._left = this._computeNeighbor(t10, i8, this._edgeDirection, this._right));
  }
  _toXYZ(t10) {
    return null != t10 ? this._helper.toXYZ(t10) : null;
  }
  _pointToXYZ(t10) {
    return this._toXYZ(this._helper.pointToVector(t10));
  }
  _computeNeighbor(t10, i8, e9, s8) {
    const n11 = n3();
    if (i8) {
      K(n11, t10, i8);
      const s9 = !this._passesBisectingAngleThreshold(n11, e9);
      return { start: t10, end: i8, direction: s9 ? this._bisectVectorsPerpendicular(e9, n11) : n11, isOriginalDirection: !s9 };
    }
    return this._helper.hasZ() ? s8 && (_2(n11, e9, s8.direction), _2(n11, n11, e9), A(n11, n11), Math.sign(n11[1]) !== Math.sign(e9[0]) && g2(n11, n11, -1)) : o(n11, -e9[1], e9[0], 0), { start: t10, end: i8, direction: n11, isOriginalDirection: true };
  }
  _passesBisectingAngleThreshold(t10, i8) {
    const e9 = Math.abs(a3(i8, t10));
    return e9 >= y2 && e9 <= Math.PI - y2;
  }
  _bisectVectorsPerpendicular(t10, i8) {
    const e9 = P2(t10, i8) < 0 ? t10 : y(n3(), t10), s8 = Math.abs(P2(e9, i8));
    if (!(s8 < A4 || s8 > 1 - A4)) return this._bisectDirection(e9, i8);
    const n11 = _2(n3(), e9, [0, 0, 1]);
    return A(n11, n11);
  }
  _bisectDirection(t10, i8) {
    const e9 = u3(n3(), t10, i8);
    return A(e9, e9);
  }
  _initializePlane() {
    const t10 = this._computeNormalDirection(this._left), i8 = this._computeNormalDirection(this._right);
    P2(t10, i8) < 0 && y(i8, i8), l(this._left.start, this._bisectDirection(t10, i8), this._plane);
  }
  _computeNormalDirection(t10) {
    const i8 = _2(n3(), t10.direction, this._edgeDirection);
    A(i8, i8);
    const e9 = _2(n3(), this._edgeDirection, i8);
    return this._planeType === z3.XY && (e9[2] = 0), A(e9, e9);
  }
  _initializeDistanceConstraints() {
    null == this._left.end || this.requiresSplitEdgeLeft || this._updateDistanceConstraint(V(this._plane, this._left.end)), null == this._right.end || this.requiresSplitEdgeRight || this._updateDistanceConstraint(V(this._plane, this._right.end)), this._updateIntersectDistanceConstraint(this._plane);
  }
  _updateDistanceConstraint(t10) {
    t10 <= 0 && (this._minDistance = Math.max(this._minDistance, t10)), t10 >= 0 && (this._maxDistance = Math.min(this._maxDistance, t10));
  }
  _updateIntersectDistanceConstraint(t10) {
    const i8 = O(t10), h6 = this._edgeDirection, o8 = u3(n3(), this._left.start, this._left.direction), a8 = u3(n3(), this._right.start, this._right.direction), _4 = this._pointInBasis2D(n5(), i8, h6, this._left.start), l6 = this._pointInBasis2D(n5(), i8, h6, o8), p5 = this._pointInBasis2D(n5(), i8, h6, this._right.start), d5 = this._pointInBasis2D(n5(), i8, h6, a8), [u6] = b({ start: l6, end: _4, type: j6.LINE }, { start: d5, end: p5, type: j6.LINE });
    if (!u6) return;
    const m3 = e3(n5(), _4, l6);
    v(m3, m3);
    const D3 = e3(n5(), u6, l6), x3 = j5(m3, D3), b3 = u3(n3(), o8, g2(n3(), this._left.direction, -x3)), I3 = V(t10, b3);
    this._updateDistanceConstraint(I3);
  }
  _pointInBasis2D(t10, i8, e9, s8) {
    return t10[0] = f(i8, s8), t10[1] = f(e9, s8), t10;
  }
  _offset(t10, i8) {
    Number.isFinite(this._minDistance) && (i8 = Math.max(this._minDistance, i8)), Number.isFinite(this._maxDistance) && (i8 = Math.min(this._maxDistance, i8)), h(this._offsetPlane, this._plane), this._offsetPlane[3] -= i8;
    const e9 = (t11, i9, e10) => null != i9 && k(this._offsetPlane, t11, u3(n3(), t11, i9), e10), s8 = n3();
    (t10 === this._edge.leftVertex ? e9(this._left.start, this._left.direction, s8) : e9(this._right.start, this._right.direction, s8)) && this._helper.copy(this._helper.fromXYZ(s8, void 0, this._helper.getM(t10.pos)), t10.pos);
  }
  selectArrowFromStartPoint(t10) {
    this._selectedArrow = z(this.plane, this._pointToXYZ(t10)) ? 1 : -1;
  }
  get selectedArrow() {
    return this._selectedArrow;
  }
  signedDistanceToPoint(t10) {
    return V(this.plane, this._pointToXYZ(t10));
  }
  clampedStartAndEnd(i8) {
    const e9 = this._helper.toXYZ(this._helper.pointToVector(i8)), s8 = H(this._plane, e9, n3()), n11 = V(this._plane, e9), r10 = r2(n11, this._minDistance, this._maxDistance);
    return I(e9, s8, e9, r10 / n11), { start: s8, end: e9 };
  }
  apply(t10) {
    this._offset(t10, this.distance);
  }
  undo(t10) {
    this._offset(t10, 0);
  }
  canAccumulate(t10) {
    return t10 instanceof _P && this._edge.leftVertex.index === t10._edge.leftVertex.index && this._edge.rightVertex.index === t10._edge.rightVertex.index && this._edge.component === t10._edge.component && this._maybeEqualsVec3(this._left.direction, t10._left.direction) && this._maybeEqualsVec3(this._right.direction, t10._right.direction) && J(O(this._plane), O(t10._plane));
  }
  accumulate(t10, i8) {
    const e9 = this._plane[3] - i8._plane[3] + i8.distance;
    this._offset(t10, e9);
  }
  accumulateParams(t10) {
    const i8 = t10.distance - t10._plane[3];
    this.distance = i8 + this._plane[3];
  }
  clone() {
    const t10 = new _P(this._helper, this._planeType, this._edge, this.distance, j8.DEFERRED);
    return h(t10._plane, this._plane), h(t10._offsetPlane, this._offsetPlane), t10._maxDistance = this._maxDistance, t10._minDistance = this._minDistance, t10._left = this._cloneNeighbor(this._left), t10._right = this._cloneNeighbor(this._right), t10._edgeDirection = s3(n3(), this._edgeDirection), t10;
  }
  _maybeEqualsVec3(t10, i8) {
    return null == t10 && null == i8 || null != t10 && null != i8 && J(t10, i8);
  }
  _cloneNeighbor({ start: t10, end: i8, direction: e9, isOriginalDirection: s8 }) {
    return { start: s3(n3(), t10), end: null != i8 ? s3(n3(), i8) : null, direction: s3(n3(), e9), isOriginalDirection: s8 };
  }
};
var y2 = s2(15);
var A4 = 1e-3;
var z3;
var j8;
!function(t10) {
  t10[t10.XYZ = 0] = "XYZ", t10[t10.XY = 1] = "XY";
}(z3 || (z3 = {})), function(t10) {
  t10[t10.IMMEDIATE = 0] = "IMMEDIATE", t10[t10.DEFERRED = 1] = "DEFERRED";
}(j8 || (j8 = {}));

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/RotateVertex.js
var e7 = class _e {
  constructor(t10, a8, e9 = e6.CUMULATIVE) {
    this.origin = t10, this.angle = a8, this._accumulationType = e9;
  }
  _rotate(t10, i8) {
    I2(t10.pos, t10.pos, this.origin, i8);
  }
  apply(t10) {
    this._rotate(t10, this.angle);
  }
  undo(t10) {
    this._rotate(t10, -this.angle);
  }
  canAccumulate(a8) {
    return a8 instanceof _e && s(this.origin, a8.origin);
  }
  accumulate(t10, a8) {
    const e9 = a8._accumulationType === e6.REPLACE;
    this._rotate(t10, e9 ? a8.angle - this.angle : a8.angle);
  }
  accumulateParams(t10) {
    const a8 = t10._accumulationType === e6.REPLACE;
    this.angle = a8 ? t10.angle : this.angle + t10.angle;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/ScaleVertex.js
var c = class _c {
  constructor(t10, s8, c4, o8, r10 = e6.CUMULATIVE) {
    this.origin = t10, this.axis1 = s8, this.factor1 = c4, this.factor2 = o8, this._accumulationType = r10, this.axis2 = t3(s8[1], -s8[0]);
  }
  _scale(t10, i8, a8) {
    k2(t10.pos, t10.pos, this.origin, this.axis1, i8), k2(t10.pos, t10.pos, this.origin, this.axis2, a8);
  }
  apply(t10) {
    this._scale(t10, this.factor1, this.factor2);
  }
  undo(t10) {
    this._scale(t10, 1 / this.factor1, 1 / this.factor2);
  }
  canAccumulate(i8) {
    return i8 instanceof _c && s(this.origin, i8.origin) && s(this.axis1, i8.axis1);
  }
  accumulate(t10, i8) {
    i8._accumulationType === e6.REPLACE ? this._scale(t10, i8.factor1 / this.factor1, i8.factor2 / this.factor2) : this._scale(t10, i8.factor1, i8.factor2);
  }
  accumulateParams(t10) {
    const i8 = t10._accumulationType === e6.REPLACE;
    this.factor1 = i8 ? t10.factor1 : this.factor1 * t10.factor1, this.factor2 = i8 ? t10.factor2 : this.factor2 * t10.factor2;
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/SetAllVertexPositions.js
var i6 = class _i {
  constructor(i8, t10) {
    this._editGeometry = i8, this._newPositions = t10;
  }
  apply() {
    const i8 = null == this._originalPositions ? "apply" : "redo";
    if (!this._originalPositions) {
      const i9 = this._editGeometry.coordinateHelper;
      this._originalPositions = this._editGeometry.allVertices.map((t10) => i9.clone(t10.pos));
    }
    this._apply(i8, this._newPositions);
  }
  undo() {
    this._originalPositions && this._apply("undo", this._originalPositions);
  }
  accumulate(t10) {
    return t10 instanceof _i && (this._newPositions = t10._newPositions, this._apply("apply", this._newPositions), true);
  }
  _apply(i8, t10) {
    const o8 = this._editGeometry.coordinateHelper, s8 = this._editGeometry.allVertices;
    for (let e9 = 0; e9 < s8.length; e9++) o8.copy(t10[e9], s8[e9].pos);
    this._editGeometry.components.forEach((i9) => i9.unnormalizeVertexPositions()), this._editGeometry.notifyChanges({ operation: i8, updatedVertices: s8 });
  }
};

// node_modules/@arcgis/core/views/interactive/editGeometry/operations/UndoGroup.js
var t9;
var o5 = Symbol();
var s6 = class {
  constructor(o8) {
    this._operations = [], this._closed = false, this[t9] = true, o8 && (this._operations = o8, this._closed = true);
  }
  close() {
    this._closed = true;
  }
  apply() {
    for (const t10 of this._operations) t10.apply();
  }
  undo() {
    for (let t10 = this._operations.length - 1; t10 >= 0; t10--) this._operations[t10].undo();
  }
  accumulate(t10) {
    if (this._closed) return false;
    const o8 = this._operations.length ? this._operations[this._operations.length - 1] : null;
    return o8 && o8.accumulate(t10) || (this._operations.push(t10), t10.apply()), true;
  }
};
t9 = o5;

// node_modules/@arcgis/core/views/interactive/editGeometry/EditGeometryOperations.js
var E2 = class _E extends i {
  constructor(t10, e9) {
    super(), this.data = t10, this.viewingMode = e9, this._undoStack = [], this._redoStack = [], this._listener = this.data.on("change", (t11) => {
      t11.addedVertices && this.emit("vertex-add", { type: "vertex-add", vertices: t11.addedVertices, operation: t11.operation }), t11.removedVertices && this.emit("vertex-remove", { type: "vertex-remove", vertices: t11.removedVertices, operation: t11.operation }), t11.updatedVertices && this.emit("vertex-update", { type: "vertex-update", vertices: t11.updatedVertices, operation: t11.operation });
    });
  }
  destroy() {
    this._listener.remove();
  }
  splitEdge(t10, e9) {
    return this._apply(new i5(this.data, t10, e9));
  }
  updateVertices(t10, e9, r10 = E.ACCUMULATE_STEPS) {
    return this._apply(new t4(this.data, t10, e9), r10);
  }
  move(t10, e9, r10, s8 = E.ACCUMULATE_STEPS) {
    return f2(this.data) ? this._apply(new t7(this.data, t10, e9, r10), s8) : this.moveVertices(this.data.allVertices, t10, e9, r10, s8);
  }
  moveVertices(t10, e9, r10, s8, o8 = E.ACCUMULATE_STEPS) {
    return f2(this.data) ? this._apply(new t7(this.data, e9, r10, s8), o8) : this.updateVertices(t10, new t8(this.data.coordinateHelper, e9, r10, s8), o8);
  }
  scale(t10, e9, r10, s8, i8 = E.ACCUMULATE_STEPS, o8 = e6.CUMULATIVE) {
    return this.scaleVertices(this.data.allVertices, t10, e9, r10, s8, i8, o8);
  }
  scaleVertices(t10, e9, r10, s8, i8, o8 = E.ACCUMULATE_STEPS, n11 = e6.CUMULATIVE) {
    return this.updateVertices(t10, new c(e9, r10, s8, i8, n11), o8);
  }
  rotate(t10, e9, r10 = E.ACCUMULATE_STEPS, s8 = e6.CUMULATIVE) {
    return this.rotateVertices(this.data.allVertices, t10, e9, r10, s8);
  }
  rotateVertices(t10, e9, r10, s8 = E.ACCUMULATE_STEPS, i8 = e6.CUMULATIVE) {
    return this.updateVertices(t10, new e7(e9, r10, i8), s8);
  }
  removeVertices(t10) {
    return this._apply(new t5(this.data, t10, this._minNumVerticesPerType));
  }
  appendVertex(t10) {
    return 0 === this.data.components.length ? null : this._apply(new i4(this.data, this.data.components[0], t10));
  }
  setVertexPosition(t10, e9) {
    return this._apply(new t6(this.data, t10, e9));
  }
  offsetEdge(t10, e9, r10, s8 = E.ACCUMULATE_STEPS) {
    return this.updateVertices([e9.leftVertex, e9.rightVertex], new P4(this.data.coordinateHelper, t10, e9, r10), s8);
  }
  trySetGeometry(t10, e9 = E.ACCUMULATE_STEPS) {
    const { data: r10 } = this, { coordinateHelper: n11 } = r10;
    if (r10.type !== t10.type || !r10.spatialReference.equals(t10.spatialReference) || n11.hasZ() !== t10.hasZ || n11.hasM() !== t10.hasM || !j2(r10.geometry, t10) || f2(r10)) return;
    const p5 = Array.from(p4.fromGeometry(t10, this.viewingMode).iterateVertices(), (t11) => t11.pos);
    return this.setVertexPositions(p5, e9);
  }
  setVertexPositions(t10, e9 = E.ACCUMULATE_STEPS) {
    return this._apply(new i6(this.data, t10), e9);
  }
  createResetState() {
    if (f2(this.data)) return this._createResetStateMesh();
    const t10 = this.data.geometry.clone();
    return e(() => this.trySetGeometry(t10));
  }
  closeComponent(t10) {
    return this.data.components.includes(t10) ? this._apply(new r8(this.data, t10)) : null;
  }
  canRemoveVertex(t10) {
    return t10.vertices.length > this._minNumVerticesPerType;
  }
  createUndoGroup() {
    const t10 = new s6();
    return this._apply(t10), e(() => t10.close());
  }
  undo() {
    if (this._undoStack.length > 0) {
      const t10 = this._undoStack.pop();
      return t10.undo(), this._redoStack.push(t10), t10;
    }
    return null;
  }
  redo() {
    if (this._redoStack.length > 0) {
      const t10 = this._redoStack.pop();
      return t10.apply(), this._undoStack.push(t10), t10;
    }
    return null;
  }
  get canUndo() {
    return this._undoStack.length > 0;
  }
  get canRedo() {
    return this._redoStack.length > 0;
  }
  get lastOperation() {
    return this._undoStack.length > 0 ? this._undoStack[this._undoStack.length - 1] : null;
  }
  get _minNumVerticesPerType() {
    switch (this.data.type) {
      case "point":
        return 1;
      case "polyline":
        return 2;
      case "polygon":
        return 3;
      default:
        return 0;
    }
  }
  _apply(t10, e9 = E.ACCUMULATE_STEPS) {
    return e9 !== E.NEW_STEP && null != this.lastOperation && this.lastOperation.accumulate(t10) || (t10.apply(), this._undoStack.push(t10), this._redoStack = []), t10;
  }
  _createResetStateMesh() {
    if (!f2(this.data)) return e();
    const t10 = this.data.geometry, { vertexSpace: s8 } = t10;
    if (s8.origin) {
      const i8 = t2(s8.origin);
      return e(() => {
        t10.vertexSpace.origin = i8;
      });
    }
    const o8 = t10.vertexAttributes.clonePositional();
    return e(() => {
      t10.vertexAttributes = o8, t10.vertexAttributesChanged();
    });
  }
  static fromGeometry(t10, e9) {
    return new _E(p4.fromGeometry(t10, e9), e9);
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/SnappingContext.js
var e8 = class {
  constructor(e9) {
    this.vertexHandle = null, this.excludeFeature = null, this.visualizer = null, this.selfSnappingZ = null, this.drawConstraints = null, this.editGeometryOperations = e9.editGeometryOperations, this.elevationInfo = e9.elevationInfo, this.pointer = e9.pointer, this.vertexHandle = e9.vertexHandle, this.excludeFeature = e9.excludeFeature, this.feature = e9.feature, this.visualizer = e9.visualizer, this.selfSnappingZ = e9.selfSnappingZ, this.drawConstraints = e9.drawConstraints;
  }
  get coordinateHelper() {
    return this.editGeometryOperations.data.coordinateHelper;
  }
  get spatialReference() {
    return this.coordinateHelper.spatialReference;
  }
};

// node_modules/@arcgis/core/views/interactive/snapping/SnappingVisualizer.js
var r9 = class {
  draw(r10, p5) {
    const h6 = a6(r10), f3 = this.sortUniqueHints(h6), u6 = [];
    for (const i8 of f3) i8 instanceof o4 && u6.push(this.visualizeIntersectionPoint(i8, p5)), i8 instanceof n7 && u6.push(this.visualizeLine(i8, p5)), i8 instanceof r6 && u6.push(this.visualizeParallelSign(i8, p5)), i8 instanceof s5 && u6.push(this.visualizeRightAngleQuad(i8, p5)), i8 instanceof n8 && u6.push(this.visualizePoint(i8, p5));
    return t(u6);
  }
  sortUniqueHints(i8) {
    return i8;
  }
};
function a6(i8) {
  const n11 = [];
  for (const t10 of i8) {
    let i9 = true;
    for (const s8 of n11) if (t10.equals(s8)) {
      i9 = false;
      break;
    }
    i9 && n11.push(t10);
  }
  return n11;
}

// node_modules/@arcgis/core/views/support/euclideanAreaMeasurementUtils.js
function g4(t10, o8 = k3()) {
  return h4(t10, o8);
}
function j9(t10, o8 = k3()) {
  return h4(t10, o8, false);
}
function h4(r10, g6, j11 = r10.hasZ) {
  const h6 = l4(r10.spatialReference), k5 = te(h6);
  if (null == k5) return null;
  const b3 = (t10, o8) => !(o8.length < 2) && (o(t10, o8[0], o8[1], j11 && o8[2] || 0), true);
  let v4 = 0;
  for (const t10 of r10.rings) {
    const o8 = t10.length;
    if (o8 < 3) continue;
    const { positionsWorldCoords: a8 } = g6;
    for (; a8.length < o8; ) a8.push(n3());
    const j12 = y3, k6 = o(d4, 0, 0, 0), x3 = 1 / o8;
    for (let n11 = 0; n11 < o8; n11++) {
      if (!b3(j12, t10[n11])) return null;
      if (!n6(j12, r10.spatialReference, a8[n11], h6)) return null;
      q(k6, k6, a8[n11], x3);
    }
    const C3 = p2(a8[0], a8[1], k6, D());
    if (0 === j4(O(C3))) continue;
    for (let t11 = 0; t11 < o8; t11++) J2(C3, k6, a8[t11], a8[t11]);
    const R3 = U3(a8);
    for (let t11 = 0; t11 < R3.length; t11 += 3) v4 += v2(a8[R3[t11]], a8[R3[t11 + 1]], a8[R3[t11 + 2]]);
  }
  return l3(v4, k5);
}
var y3 = n3();
var d4 = n3();
function k3() {
  return { positionsWorldCoords: [] };
}
function U3(t10) {
  return e2(b2(t10), [], 2);
}
function b2(t10) {
  const o8 = new Float64Array(2 * t10.length);
  for (let r10 = 0; r10 < t10.length; ++r10) {
    const n11 = t10[r10], e9 = 2 * r10;
    o8[e9] = n11[0], o8[e9 + 1] = n11[1];
  }
  return o8;
}

// node_modules/@arcgis/core/views/support/geodesicAreaMeasurementUtils.js
function o6(e9) {
  const { spatialReference: r10 } = e9;
  return r7(r10, n9, i7, e9);
}
function n9(r10) {
  return l3(Math.abs(v3([r10], "square-meters")[0]), "square-meters");
}
function i7(t10) {
  try {
    return l3(Math.abs(C(t10, "square-meters")), "square-meters");
  } catch (s8) {
    return null;
  }
}

// node_modules/@arcgis/core/views/support/automaticAreaMeasurementUtils.js
function o7(o8, u6, i8 = k3()) {
  if ("on-the-ground" === u6) {
    const r10 = o6(o8);
    return null != r10 ? r10 : j9(o8, i8);
  }
  return g4(o8, i8);
}
function u5(e9, r10 = k3()) {
  return o7(e9, "on-the-ground", r10);
}

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipField.js
var s7 = class extends g {
  constructor(t10) {
    super(t10), this.actual = null, this.lockable = true, this.id = n2(), this.inputValue = null, this.readOnly = false, this.suffix = null, this.visible = true, this.invalid = false, this.unlockOnVertexPlacement = true;
  }
  get committed() {
    return this.lockable ? this._get("committed") : null;
  }
  set committed(t10) {
    this.lockable && this._set("committed", t10);
  }
  get dirty() {
    return null != this.inputValue;
  }
  get locked() {
    return this.lockable && null != this.committed;
  }
  onInput(t10) {
    this.inputValue = t10, this.invalid = false;
  }
  onCommit(t10, o8, i8) {
    this.lockable ? this._onCommitLockable(t10, i8) : this._onCommitNonLockable(i8), this.invalid && "commit-and-exit" === t10 || i8.onCommit(o8, t10);
  }
  _onCommitLockable(t10, o8) {
    const { inputValue: i8, locked: l6 } = this;
    l6 && n10(i8) ? this.unlock() : ("commit-and-exit" === t10 && !l6 || null != i8) && this._parseInputAndLock(o8);
  }
  _onCommitNonLockable(t10) {
    const { inputValue: o8 } = this;
    n10(o8) ? this.lockable ? this.setActual(null) : this.clearInputValue() : null != o8 && this._parseInputAndSetActual(t10);
  }
  applyValue(t10) {
    this.lockable ? this.lock(t10) : this.setActual(t10);
  }
  clearInputValue() {
    this.inputValue = null, this.invalid = false;
  }
  setActual(t10) {
    this.actual = t10, this.clearInputValue();
  }
  lock(t10) {
    this.lockable && (this.committed = t10 ?? this.actual, this.clearInputValue());
  }
  unlock() {
    this.lockable && (this.committed = null, this.clearInputValue());
  }
  toggleLock(t10) {
    this.lockable && (this.locked ? this.unlock() : this._parseInputAndLock(t10));
  }
  getSuffix(t10) {
    const { suffix: o8 } = this;
    return "function" == typeof o8 ? o8(t10) : o8;
  }
  getFormattedValue(t10) {
    const { actual: o8, committed: i8, format: l6 } = this;
    return null != i8 ? l6(i8, t10) : null != o8 ? l6(o8, t10) : null;
  }
  getRawDisplayValue(t10) {
    const { actual: o8, committed: i8, inputValue: l6 } = this;
    return null != l6 ? l6 : this.lockable && null != i8 ? this.formatForInputMode(i8, t10) : null != o8 ? this.formatForInputMode(o8, t10) : null;
  }
  _parseInputAndSetActual(t10) {
    const { inputValue: o8 } = this;
    if (null == o8 || n10(o8)) return this.setActual(null);
    const i8 = this.parse(o8, t10);
    null != i8 ? this.setActual(i8) : this.invalid = true;
  }
  _parseInputAndLock(t10) {
    const { inputValue: o8, actual: i8 } = this;
    if (n10(o8)) return this.unlock();
    if (null == o8) return this.lock(i8);
    const l6 = this.parse(o8, t10);
    null != l6 ? this.lock(l6) : this.invalid = true;
  }
};
function n10(t10) {
  return null != t10 && "" === t10.trim();
}
r([m()], s7.prototype, "actual", void 0), r([m()], s7.prototype, "committed", null), r([m()], s7.prototype, "dirty", null), r([m()], s7.prototype, "format", void 0), r([m()], s7.prototype, "formatForInputMode", void 0), r([m()], s7.prototype, "lockable", void 0), r([m()], s7.prototype, "locked", null), r([m()], s7.prototype, "id", void 0), r([m()], s7.prototype, "inputValue", void 0), r([m()], s7.prototype, "name", void 0), r([m()], s7.prototype, "parse", void 0), r([m()], s7.prototype, "readOnly", void 0), r([m()], s7.prototype, "suffix", void 0), r([m()], s7.prototype, "title", void 0), r([m()], s7.prototype, "visible", void 0), r([m()], s7.prototype, "invalid", void 0), r([m()], s7.prototype, "unlockOnVertexPlacement", void 0), s7 = r([a("esri.views.interactive.tooltip.fields.TooltipField")], s7);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldElevation.js
var c2 = class extends s7 {
  constructor(t10) {
    super(t10), this.showAsZ = false;
  }
  normalizeCtorArgs(t10) {
    const s8 = (t11) => t11.inputUnitInfos.verticalLength.unit;
    return { name: "elevation", actual: h2, parse: B({ createQuantity: (t11, o8) => a4(t11, s8(o8)) }), format: (t11, o8) => o8.formatters.verticalLength(t11), formatForInputMode: (t11, o8) => o8.formatters.scalar(s4(t11, s8(o8))), suffix: (t11) => t11.inputUnitInfos.verticalLength.abbreviation, title: (t11) => t11.messages.sketch[this.showAsZ ? "z" : "elevation"], unlockOnVertexPlacement: false, ...t10 };
  }
};
r([m()], c2.prototype, "showAsZ", void 0), c2 = r([a("esri.views.interactive.tooltip.fields.TooltipFieldElevation")], c2);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldOrientation.js
var c3 = class extends s7 {
  constructor(t10) {
    super(t10), this.precision = 1;
  }
  normalizeCtorArgs(t10) {
    const i8 = (t11) => t11.inputUnitInfos.angle.unit;
    return { name: "orientation", actual: null, parse: B({ createQuantity: (t11, r10) => o3(t11, i8(r10), "geographic"), sanitize: C2 }), format: (t11) => {
      const o8 = A2(t11);
      return U2(o8, "geographic", this.precision);
    }, formatForInputMode: (t11, r10) => {
      const o8 = A2(t11);
      return r10.formatters.scalar(o8);
    }, suffix: (t11) => t11.inputUnitInfos.angle.abbreviation, title: (t11) => t11.messages.sketch.orientation, ...t10 };
  }
};
r([m()], c3.prototype, "precision", void 0), c3 = r([a("esri.views.interactive.tooltip.fields.TooltipFieldOrientation")], c3);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/TooltipFieldSize.js
var a7 = class extends s7 {
  constructor(t10) {
    super(t10), this.precision = null;
  }
  normalizeCtorArgs(t10) {
    const s8 = (t11) => t11.inputUnitInfos.length.unit;
    return { name: "size", actual: null, parse: B({ createQuantity: (t11, r10) => a4(t11, s8(r10)) }), format: (t11, o8) => o8.formatters.length(t11), formatForInputMode: (t11, o8) => o8.formatters.scalar(s4(t11, s8(o8))), suffix: (t11) => t11.inputUnitInfos.length.abbreviation, title: (t11) => t11.messages.sketch.size, ...t10 };
  }
};
r([m()], a7.prototype, "precision", void 0), a7 = r([a("esri.views.interactive.tooltip.fields.TooltipFieldSize")], a7);

// node_modules/@arcgis/core/views/interactive/tooltip/fields/fields.js
function y4(n11) {
  const r10 = (t10) => t10.inputUnitInfos.angle.unit, i8 = (t10) => t10.sketchOptions.values.effectiveDirectionMode;
  return new s7({ name: "direction", actual: U, parse: B({ createQuantity: (t10, a8) => o3(t10, r10(a8), "geographic"), sanitize: C2 }), format: (t10, e9) => {
    const a8 = i8(e9), n12 = w(t10, a8);
    switch (a8) {
      case j7.Absolute:
        return e9.formatters.direction(n12);
      case j7.Relative:
        return e9.formatters.directionRelative(n12);
      case j7.RelativeBilateral:
        return e9.formatters.directionRelativeBilateral(n12);
    }
  }, formatForInputMode: (t10, e9) => {
    const n12 = w(t10, i8(e9));
    return e9.formatters.scalar(s4(n12, r10(e9)));
  }, suffix: (t10) => t10.inputUnitInfos.angle.abbreviation, title: (t10) => {
    const e9 = i8(t10), { absolute: a8, relative: n12 } = t10.messages.sketch.direction;
    switch (e9) {
      case j7.Absolute:
        return a8;
      case j7.Relative:
      case j7.RelativeBilateral:
        return n12;
    }
  }, ...n11 });
}
function U4(t10) {
  const e9 = (t11) => t11.inputUnitInfos.length.unit;
  return new s7({ name: "distance", actual: h2, parse: B({ createQuantity: (t11, a8) => a4(Math.max(t11, 0), e9(a8)) }), format: (t11, e10) => e10.formatters.length(t11), formatForInputMode: (t11, n11) => n11.formatters.scalar(s4(t11, e9(n11))), suffix: (t11) => t11.inputUnitInfos.length.abbreviation, title: (t11) => t11.messages.sketch.distance, ...t10 });
}
function w4(t10) {
  return U4({ format: (t11, e9) => e9.formatters.totalLength(t11), title: (t11) => t11.messages.sketch.totalLength, readOnly: true, ...t10 });
}
function F2(t10) {
  return U4({ ...t10 });
}
function x2(t10) {
  const e9 = (t11) => t11.inputUnitInfos.length.unit;
  return U4({ ...t10, parse: B({ createQuantity: (t11, a8) => a4(t11, e9(a8)) }), format: (t11, e10) => e10.formatters.lengthRelative(t11) });
}
function M3(t10) {
  return new c2(t10);
}
function k4(t10) {
  return new c3(t10);
}
function j10(t10) {
  return new a7(t10);
}
function R2(t10) {
  return B2("scale", { name: "scale", actual: null, parse: B({ createQuantity: (t11) => i3(Math.abs(t11)) }), ...t10 });
}
function Q(t10) {
  const e9 = (t11) => t11.inputUnitInfos.area.unit;
  return new s7({ name: "area", actual: d2, parse: B({ createQuantity: (t11, a8) => l3(t11, e9(a8)) }), format: (t11, e10) => e10.formatters.area(t11), formatForInputMode: (t11, n11) => n11.formatters.scalar(s4(t11, e9(n11))), suffix: (t11) => t11.inputUnitInfos.area.abbreviation, title: (t11) => t11.messages.sketch.area, readOnly: true, ...t10 });
}
function D2(e9) {
  return new s7({ name: "x", actual: U, parse: H2, format: (t10, e10) => e10.formatters.longitudeDecimalDegrees(t10), formatForInputMode: (t10) => w2(t10), suffix: (t10) => t10.inputUnitInfos.angle.abbreviation, title: (t10) => t10.messages.sketch.longitude, ...e9 });
}
function O2(e9) {
  return new s7({ name: "y", actual: U, parse: J3, format: (t10, e10) => e10.formatters.latitudeDecimalDegrees(t10), formatForInputMode: (t10) => A3(t10), suffix: (t10) => t10.inputUnitInfos.angle.abbreviation, title: (t10) => t10.messages.sketch.latitude, ...e9 });
}
function T2(t10) {
  return B2("x", { name: "x", ...t10 });
}
function A5(t10) {
  return B2("y", { name: "y", ...t10 });
}
function B2(t10, e9) {
  return new s7({ actual: i3(0), parse: B({ createQuantity: (t11) => i3(t11) }), format: (t11, e10) => e10.formatters.scalar(t11), formatForInputMode: (t11, e10) => e10.formatters.scalar(t11), title: (e10) => e10.messages.sketch[t10], ...e9 });
}

// node_modules/@arcgis/core/views/interactive/tooltip/infos/TooltipInfoWithCoordinates.js
var h5 = (h6) => {
  let f3 = class extends h6 {
    constructor() {
      super(...arguments), this.longitude = D2(), this.latitude = O2(), this.x = T2(), this.y = A5(), this.elevation = M3(), this.geographic = false;
    }
    get effectiveX() {
      return this.geographic ? this.longitude : this.x;
    }
    get effectiveY() {
      return this.geographic ? this.latitude : this.y;
    }
    get key() {
      return { longitude: this.longitude.actual, latitude: this.latitude.actual, x: this.x.actual, y: this.y.actual, elevation: this.elevation.actual, geographic: this.geographic };
    }
    setLocationFromPoint(t10, i8 = t10 == null ? void 0 : t10.spatialReference) {
      if (this.geographic = !!i8 && e4(i8), null == t10) return this._setActualLonLat(null, null), void this._setActualXY(null, null);
      if (this.geographic) {
        const e9 = i2(t10, g5);
        this._setActualLonLat(K2(e9 == null ? void 0 : e9[0]), K2(e9 == null ? void 0 : e9[1]));
      } else this._setActualXY(i3(t10.x), i3(t10.y));
    }
    _setActualLonLat(t10, e9) {
      this.longitude.actual = t10, this.latitude.actual = e9;
    }
    _setActualXY(t10, e9) {
      this.x.actual = t10, this.y.actual = e9;
    }
  };
  return r([m()], f3.prototype, "geographic", void 0), r([m()], f3.prototype, "effectiveX", null), r([m()], f3.prototype, "effectiveY", null), r([m()], f3.prototype, "key", null), f3 = r([a("esri.views.interactive.tooltip.infos.TooltipInfoWithCoordinates")], f3), f3;
};
var g5 = [0, 0];

export {
  r9 as r,
  y4 as y,
  w4 as w,
  F2 as F,
  x2 as x,
  k4 as k,
  j10 as j,
  R2 as R,
  Q,
  h5 as h,
  u5 as u,
  P3 as P,
  a5 as a,
  p4 as p,
  E,
  t4 as t,
  e6 as e,
  t8 as t2,
  P4 as P2,
  z3 as z,
  e7 as e2,
  c,
  E2,
  e8 as e3
};
//# sourceMappingURL=chunk-YPP5HIGV.js.map
