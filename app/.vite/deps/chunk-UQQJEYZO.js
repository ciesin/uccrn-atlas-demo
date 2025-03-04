import {
  p as p3
} from "./chunk-VCN3W5DR.js";
import {
  i as i4
} from "./chunk-DYXUUD4L.js";
import {
  t as t3
} from "./chunk-W5EXEGLR.js";
import {
  C as C2
} from "./chunk-ENBV6NNC.js";
import {
  t as t4
} from "./chunk-D2SOLIKV.js";
import {
  e as e4,
  i as i2,
  r
} from "./chunk-N7QOB7T5.js";
import {
  e as e3
} from "./chunk-J7454WTE.js";
import {
  a as a5,
  n as n5
} from "./chunk-AI444EOP.js";
import {
  M as M2,
  e as e5,
  i as i3,
  s as s5
} from "./chunk-CTBXY22F.js";
import {
  A as A2,
  Bi,
  Fi,
  G as G4,
  X,
  Y,
  zi
} from "./chunk-ANT4QPJQ.js";
import {
  n as n4
} from "./chunk-HYJ4YR5G.js";
import {
  S as S2,
  o as o2
} from "./chunk-K35H6D4D.js";
import {
  A,
  B as B2,
  C,
  F,
  G as G3,
  H as H2,
  L,
  N as N2,
  P as P2,
  Q as Q2,
  S,
  T as T2,
  g as g2,
  k,
  p as p2,
  w as w2,
  x
} from "./chunk-BTTTF5H4.js";
import {
  n as n3
} from "./chunk-MEC6IDRX.js";
import {
  B,
  E,
  G as G2,
  K,
  N,
  P,
  Q,
  R,
  T,
  V,
  Z,
  a as a4,
  b as b2,
  l as l3,
  le,
  m as m3,
  o,
  oe,
  te,
  u as u5,
  w,
  y as y2
} from "./chunk-ZH6PYRVF.js";
import {
  u as u4
} from "./chunk-HCXUWF52.js";
import {
  m2,
  s as s4
} from "./chunk-PUC7IJYJ.js";
import {
  l as l2,
  m,
  s as s3,
  u as u2,
  y
} from "./chunk-WZBMMIVS.js";
import {
  f as f2,
  i,
  j,
  l,
  n as n2,
  t as t2
} from "./chunk-T7KGE6VP.js";
import {
  f,
  h
} from "./chunk-T57WVICI.js";
import {
  a as a3,
  c,
  f as f4
} from "./chunk-W633AKTD.js";
import {
  H,
  M,
  a as a2,
  b,
  f as f3,
  p,
  s as s2,
  u
} from "./chunk-G34KEQQG.js";
import {
  e as e2,
  u as u3
} from "./chunk-JLFV7EBO.js";
import {
  G
} from "./chunk-NENDDUWH.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  s
} from "./chunk-6P7HXSJ6.js";
import {
  e2 as e
} from "./chunk-4LTV6KQ5.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  has,
  t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/symbols/cim/effects/EffectAddControlPoints.js
var e6 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e15, s14, n19, i16, o9) {
    return new t5(e15, s14, n19);
  }
};
e6.instance = null;
var t5 = class {
  constructor(e15, t16, s14) {
    this._inputGeometries = e15, this._angleTolerance = void 0 !== t16.angleTolerance ? t16.angleTolerance : 120, this._maxCosAngle = Math.cos((1 - Math.abs(this._angleTolerance) / 180) * Math.PI);
  }
  next() {
    let e15 = this._inputGeometries.next();
    for (; e15; ) {
      if ("esriGeometryPolygon" === e15.geometryType) this._isClosed = true;
      else if ("esriGeometryPolyline" === e15.geometryType) this._isClosed = false;
      else {
        if ("esriGeometryEnvelope" !== e15.geometryType) {
          e15 = this._inputGeometries.next();
          continue;
        }
        if (this._maxCosAngle) return e15;
        this._isClosed = true;
      }
      for (; e15.nextPath(); ) this._processPath(e15);
      return e15.reset(), e15;
    }
    return null;
  }
  _processPath(e15) {
    if (e15.nextPoint()) {
      const t16 = e15.x, s14 = e15.y;
      let n19 = t16, i16 = s14, o9 = e15.pathSize, l11 = 0, r17 = 0, a13 = 0, h8 = 0, c5 = 0, _6 = 0;
      this._isClosed && ++o9;
      for (let u12 = 1; e15.nextPoint() || u12 < o9; ++u12) {
        let x4, m9;
        this._isClosed && u12 === o9 - 1 ? (x4 = t16, m9 = s14) : (x4 = e15.x, m9 = e15.y);
        const y6 = x4 - n19, g4 = m9 - i16, C4 = Math.sqrt(y6 * y6 + g4 * g4);
        if (u12 > 1 && C4 > 0 && a13 > 0) {
          (l11 * y6 + r17 * g4) / C4 / a13 <= this._maxCosAngle && e15.setControlPointAt(u12 - 1);
        }
        1 === u12 && (h8 = y6, c5 = g4, _6 = C4), C4 > 0 && (n19 = x4, i16 = m9, l11 = y6, r17 = g4, a13 = C4);
      }
      if (this._isClosed && a13 > 0 && _6 > 0) {
        (l11 * h8 + r17 * c5) / _6 / a13 <= this._maxCosAngle && e15.setControlPointAt(0);
      }
    }
  }
};

// node_modules/@arcgis/core/geometry/GeometryCursor.js
var a6 = class {
  static fromOptimized(t16, e15, s14 = false, i16 = false, h8 = 1) {
    return new p4().initialize(t16, e15, s14, i16, h8);
  }
  static fromJSON(t16, e15 = false, s14 = false) {
    const [i16, h8] = u6(t16);
    return new c2().initialize(i16, h8, e15, s14, 1);
  }
  static fromOptimizedCIM(t16, e15, s14 = false, i16 = false, h8 = 1) {
    return new y3().initialize(t16, e15, s14, i16, h8);
  }
  static fromJSONCIM(t16, e15 = false, s14 = false, i16 = 1) {
    const [h8, r17] = u6(t16);
    return new m4().initialize(h8, r17, e15, s14, i16);
  }
  static fromFeatureSetReader(t16) {
    const e15 = t16.readGeometryForDisplay(), s14 = t16.geometryType;
    return e15 && s14 ? this.fromOptimized(e15, s14) : null;
  }
  static fromFeatureSetReaderCIM(t16) {
    const e15 = t16.readGeometryForDisplay(), s14 = t16.geometryType;
    return e15 && s14 ? this.fromOptimizedCIM(e15, s14) : null;
  }
  static createEmptyOptimized(t16, e15 = false, s14 = false, i16 = 1) {
    return new p4().initialize(new e3(), t16, e15, s14, i16);
  }
  static createEmptyJSON(t16, e15 = false, s14 = false) {
    return new c2().initialize([], t16, e15, s14, 1);
  }
  static createEmptyOptimizedCIM(t16, e15 = false, s14 = false, i16 = 1) {
    return new y3().initialize(new e3(), t16, e15, s14, i16);
  }
  static createEmptyJSONCIM(t16, e15 = false, s14 = false, i16 = 1) {
    return new m4().initialize([], t16, e15, s14, i16);
  }
  asJSON() {
    const t16 = t2(this);
    return "esriGeometryEnvelope" === this.geometryType ? { xmin: t16[0][0][0], ymin: t16[0][0][1], xmax: t16[0][2][0], ymax: t16[0][2][1] } : "esriGeometryMultipoint" === this.geometryType ? { points: t16.flat() } : "esriGeometryPoint" === this.geometryType ? { x: t16[0][0][0], y: t16[0][0][1] } : "esriGeometryPolygon" === this.geometryType ? { rings: t16 } : { paths: t16 };
  }
  getCurrentRingArea() {
    if (this.pathSize < 3) return 0;
    let t16, e15, s14 = 0;
    if (this.seekPathStart(), !this.nextPoint()) return 0;
    t16 = this.x, e15 = this.y;
    const i16 = t16, h8 = e15;
    for (; this.nextPoint(); ) s14 += (t16 - this.x) * (e15 + this.y), t16 = this.x, e15 = this.y;
    return s14 += (t16 - i16) * (e15 + h8), -0.5 * s14;
  }
  invertY() {
    this.yFactor *= -1;
  }
};
var p4 = class _p extends a6 {
  constructor() {
    super(...arguments), this._end = -1;
  }
  initialize(t16, e15, s14, i16, h8) {
    return this.hasZ = s14, this.hasM = i16, this.geometryType = e15, this._stride = 2 + Number(s14) + Number(i16), this._geometry = t16, this._pathIndex = -1, this._pathOffset = 0, this._pointOffset = -this._stride, this._end = -1, this.yFactor = h8, this;
  }
  reset() {
    this.initialize(this._geometry, this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  seekPath(t16) {
    if (t16 >= 0 && t16 < this.totalSize) {
      if (this._pathIndex < t16) for (; this._pathIndex < t16 && this.nextPath(); ) ;
      else if (this._pathIndex > t16) for (; this._pathIndex > t16 && this.prevPath(); ) ;
      return true;
    }
    return false;
  }
  seekPathStart() {
    this._pointOffset = this._pathOffset - this._stride;
  }
  seekPathEnd() {
    this._pointOffset = this._end;
  }
  seekInPath(t16) {
    const e15 = this._pathOffset + t16 * this._stride;
    return e15 >= 0 && e15 < this._end && (this._pointOffset = e15, true);
  }
  nextPoint() {
    return (this._pointOffset += this._stride) < this._end;
  }
  prevPoint() {
    return (this._pointOffset -= this._stride) >= this._pathOffset;
  }
  nextPath() {
    return !(this.pathIndex >= this.totalSize - 1) && (this._pathIndex >= 0 && (this._pathOffset += this._stride * this.pathSize), this._pathIndex++, this._pointOffset = this._pathOffset - this._stride, this._end = this._pointOffset + this._stride + this._stride * this.pathSize, true);
  }
  prevPath() {
    return !(this.pathIndex <= 0) && (this._pathIndex--, this._end = this._pathOffset, this._pathOffset -= this._stride * this.pathSize, this._pointOffset = this._pathOffset - this._stride, true);
  }
  getCurrentPath() {
    const t16 = this._end, e15 = this._geometry.coords, s14 = this._pathOffset;
    return new _p().initialize(new e3([this.pathSize], e15.slice(s14, t16)), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  pathLength() {
    const t16 = this._end, e15 = this._stride, s14 = this._geometry.coords;
    let i16 = 0;
    for (let h8 = this._pathOffset + e15; h8 < t16; h8 += e15) {
      const t17 = s14[h8 - e15], r17 = s14[h8 - e15 + 1], n19 = s14[h8] - t17, o9 = s14[h8 + 1] - r17;
      i16 += Math.sqrt(n19 * n19 + o9 * o9);
    }
    return i16;
  }
  startPath() {
    this._geometry.lengths.push(0);
  }
  pushPath(t16) {
    this.startPath(), this.pushPoints(t16);
  }
  pushPoint(t16) {
    for (let e15 = 0; e15 < this._stride; ++e15) this._geometry.coords.push(t16[e15]);
    this._geometry.lengths[this.totalSize - 1]++;
  }
  pushXY(t16, e15) {
    this._geometry.coords.push(t16, e15), this._geometry.lengths[this.totalSize - 1]++;
  }
  pushPoints(t16) {
    for (const e15 of t16) for (let t17 = 0; t17 < this._stride; ++t17) this._geometry.coords.push(e15[t17]);
    this._geometry.lengths[this.totalSize - 1] += t16.length;
  }
  pushCursor(t16) {
    const e15 = t16.asOptimized();
    this._geometry.coords.push(...e15.coords), this._geometry.lengths.push(...e15.lengths);
  }
  asOptimized() {
    const t16 = this._geometry.clone();
    if (1 !== this.yFactor) for (let e15 = 1; e15 < t16.coords.length; e15 += this._stride) t16.coords[e15] *= this.yFactor;
    return "esriGeometryPoint" === this.geometryType && (t16.lengths.length = 0), t16;
  }
  isClosed() {
    const t16 = this._geometry.coords, e15 = this._pathOffset, s14 = this._end - this._stride;
    for (let i16 = 0; i16 < this._stride; i16++) if (t16[e15 + i16] !== t16[s14 + i16]) return false;
    return true;
  }
  clone() {
    return new _p().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.reduce((t16, e15) => t16 + e15);
  }
  get pathSize() {
    const { lengths: t16 } = this._geometry;
    return this._geometry.isPoint ? 1 : this._pathIndex < 0 || this._pathIndex > t16.length - 1 ? 0 : t16[this._pathIndex];
  }
  get totalSize() {
    return this._geometry.isPoint ? 1 : this._geometry.lengths.length;
  }
  get x() {
    return this._geometry.coords[this._pointOffset];
  }
  set x(t16) {
    this._geometry.coords[this._pointOffset] = t16;
  }
  get y() {
    return this.yFactor * this._geometry.coords[this._pointOffset + 1];
  }
  set y(t16) {
    this._geometry.coords[this._pointOffset + 1] = this.yFactor * t16;
  }
  get z() {
    return this._geometry.coords[this._pointOffset + 2];
  }
  set z(t16) {
    this._geometry.coords[this._pointOffset + 2] = t16;
  }
  get m() {
    const t16 = this.hasZ ? 3 : 2;
    return this._geometry.coords[this._pointOffset + t16];
  }
  set m(t16) {
    this._geometry.coords[this._pointOffset + 3] = t16;
  }
  get pathIndex() {
    return this._pathIndex;
  }
  get _coordIndex() {
    return this._pointOffset / this._stride;
  }
};
function _(t16) {
  const e15 = [t16.x, t16.y];
  return t16.z && e15.push(t16.z), t16.m && e15.push(t16.m), e15;
}
function u6(t16) {
  return y(t16) ? [t16.rings, "esriGeometryPolygon"] : s3(t16) ? [t16.paths, "esriGeometryPolyline"] : u2(t16) ? [[t16.points], "esriGeometryMultipoint"] : m(t16) ? [[[[t16.xmin, t16.ymin], [t16.xmin, t16.ymax], [t16.xmax, t16.ymax], [t16.xmax, t16.ymin], [t16.xmin, t16.ymin]]], "esriGeometryEnvelope"] : l2(t16) ? [[[_(t16)]], "esriGeometryPoint"] : [[], "esriGeometryPolyline"];
}
var c2 = class _c extends a6 {
  initialize(t16, e15, s14, i16, h8) {
    return this._paths = t16, this.geometryType = e15, this.hasZ = s14, this.hasM = i16, this._pathIndex = this._pointIndex = -1, this.yFactor = h8, this._mIndex = this.hasZ ? 3 : 2, this;
  }
  reset() {
    this._pathIndex = this._pointIndex = -1;
  }
  seekPath(t16) {
    return this._pathIndex = t16, this._pointIndex = -1, t16 >= 0 && t16 < this.totalSize && (this._currentPath = this._paths[t16], true);
  }
  seekPathStart() {
    this._pointIndex = -1;
  }
  seekPathEnd() {
    this._pointIndex = this._currentPath.length;
  }
  seekInPath(t16) {
    return t16 >= 0 && t16 < this._currentPath.length && (this._pointIndex = t16, this._currentPoint = this._currentPath[this._pointIndex], true);
  }
  nextPoint() {
    return this._currentPoint = this._currentPath[++this._pointIndex], this._pointIndex < this._currentPath.length;
  }
  prevPoint() {
    return this._currentPoint = this._currentPath[--this._pointIndex], this._pointIndex >= 0;
  }
  nextPath() {
    return this._pointIndex = -1, this._currentPath = this._paths[++this._pathIndex], this._pathIndex < this.totalSize;
  }
  prevPath() {
    return this.pathIndex > 0 && (this._pointIndex = -1, this._pathIndex--, this._currentPath = this._paths[this._pathIndex], true);
  }
  pathLength() {
    const t16 = this._currentPath.length, e15 = this._currentPath;
    let s14 = 0;
    for (let i16 = 1; i16 < t16; i16++) {
      const t17 = e15[i16 - 1], h8 = e15[i16], r17 = t17[0], n19 = t17[1], o9 = h8[0] - r17, a13 = h8[1] - n19;
      s14 += Math.sqrt(o9 * o9 + a13 * a13);
    }
    return s14;
  }
  startPath() {
    this._paths.push([]);
  }
  getCurrentPath() {
    return new _c().initialize([this._currentPath], this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  pushPath(t16) {
    this._paths.push(t16);
  }
  pushPoint(t16) {
    this._paths[this.totalSize - 1].push(t16);
  }
  pushXY(t16, e15) {
    this._paths[this.totalSize - 1].push([t16, e15]);
  }
  pushPoints(t16) {
    this._paths[this.totalSize - 1].push(...t16);
  }
  pushCursor(t16) {
    const s14 = t2(t16);
    for (const e15 of s14) this.pushPath(e15);
  }
  asOptimized() {
    const t16 = new e3();
    if ("esriGeometryPoint" === this.geometryType) t16.coords.push(...this._paths[0][0]), t16.lengths.length = 0;
    else for (const e15 of this._paths) {
      for (const s14 of e15) t16.coords.push(s14[0]), t16.coords.push(s14[1] * this.yFactor), this.hasZ && t16.coords.push(s14[2]), this.hasM && t16.coords.push(s14[this._mIndex]);
      t16.lengths.push(e15.length);
    }
    return t16;
  }
  isClosed() {
    const t16 = this._currentPath[0], e15 = this._currentPath[this._currentPath.length - 1];
    for (let s14 = 0; s14 < t16.length; s14++) if (t16[s14] !== e15[s14]) return false;
    return true;
  }
  clone() {
    return new _c().initialize(a(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  get totalPoints() {
    return this._paths.map((t16) => t16.length).reduce((t16, e15) => t16 + e15);
  }
  get pathSize() {
    return this._pathIndex < 0 || this._pathIndex > this.totalSize - 1 ? -1 : this._paths[this._pathIndex].length;
  }
  get totalSize() {
    return this._paths.length;
  }
  get x() {
    return this._currentPoint[0];
  }
  set x(t16) {
    this._currentPoint[0] = t16;
  }
  get y() {
    return this.yFactor * this._currentPoint[1];
  }
  set y(t16) {
    this._currentPoint[1] = this.yFactor * t16;
  }
  get z() {
    return this._currentPoint[2];
  }
  set z(t16) {
    this._currentPoint[2] = t16;
  }
  get m() {
    return this._currentPoint[this._mIndex];
  }
  set m(t16) {
    this._currentPoint[this._mIndex] = t16;
  }
  get pathIndex() {
    return this._pathIndex;
  }
};
var d = 4;
var l4 = 1;
var y3 = class _y extends p4 {
  initialize(t16, e15, s14, i16, h8) {
    return super.initialize(t16, e15, s14, i16, h8), this._controlPoints || (this._controlPoints = this._controlPoints = new Array(this.totalSize).fill(void 0).map((t17) => /* @__PURE__ */ new Set())), this;
  }
  startPath() {
    super.startPath(), this._controlPoints.push(/* @__PURE__ */ new Set());
  }
  clone() {
    const t16 = new _y().initialize(this._geometry.clone(), this.geometryType, this.hasZ, this.hasM, this.yFactor);
    return t16._controlPoints = this._controlPoints, t16;
  }
  setControlPoint() {
    this._controlPoints[this.pathIndex].add(this._coordIndex);
  }
  getControlPoint() {
    return this._controlPoints[this.pathIndex].has(this._coordIndex);
  }
  setControlPointAt(t16) {
    this._controlPoints[this.pathIndex].add(t16);
  }
  getControlPointAt(t16) {
    return this._controlPoints[this.pathIndex].has(t16);
  }
};
var m4 = class _m extends c2 {
  initialize(t16, e15, s14, i16, h8) {
    return super.initialize(t16, e15, s14, i16, h8);
  }
  clone() {
    return new _m().initialize(a(this._paths), this.geometryType, this.hasZ, this.hasM, this.yFactor);
  }
  setControlPoint() {
    this._paths[this.pathIndex][this._pointIndex][d] = l4;
  }
  getControlPoint() {
    return this._paths[this.pathIndex][this._pointIndex][d] === l4;
  }
  setControlPointAt(t16) {
    this._paths[this.pathIndex][t16][d] = l4;
  }
  getControlPointAt(t16) {
    return this._paths[this.pathIndex][t16][d] === l4;
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMPlacements.js
var t6 = class {
  constructor() {
    this.setIdentity();
  }
  getAngle() {
    return (null == this.rz || 0 === this.rz && 1 !== this.rzCos && 0 !== this.rzSin) && (this.rz = Math.atan2(this.rzSin, this.rzCos)), this.rz;
  }
  setIdentity() {
    this.tx = 0, this.ty = 0, this.tz = 0, this.s = 1, this.rx = 0, this.ry = 0, this.rz = 0, this.rzCos = 1, this.rzSin = 0;
  }
  setTranslate(t16, s14) {
    this.tx = t16, this.ty = s14;
  }
  setTranslateZ(t16) {
    this.tz = t16;
  }
  setRotateCS(t16, s14) {
    this.rz = void 0, this.rzCos = t16, this.rzSin = s14;
  }
  setRotate(t16) {
    this.rz = t16, this.rzCos = void 0, this.rzSin = void 0;
  }
  setRotateY(t16) {
    this.ry = t16;
  }
  setScale(t16) {
    this.s = t16;
  }
  setMeasure(t16) {
    this.m = t16;
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMCursor.js
function e7(t16, e15) {
  t16[4] = e15;
}
var i5 = class {
  constructor(e15, i16 = true, r17 = true, s14 = 0) {
    this.isClosed = false, this.geometryCursor = null, this.geometryCursor = !i16 && "esriGeometryPolygon" === e15.geometryType || !r17 && "esriGeometryPolyline" === e15.geometryType ? null : e15, this.geomUnitsPerPoint = s14, this.iterateMultiPath = false, this.iteratePath = false, this.internalPlacement = new t6();
  }
  next() {
    if (!this.geometryCursor) return null;
    const t16 = this.processMultiPath(this.geometryCursor);
    return this.iterateMultiPath && t16 || (this.geometryCursor = null), t16;
  }
  processMultiPath(t16) {
    for (; this.iteratePath || t16.pathIndex < t16.totalSize - 1; ) {
      this.iteratePath || t16.nextPath(), this.iterateMultiPath = true;
      const e15 = this.processPath(t16);
      if (e15) return e15;
    }
    return this.iterateMultiPath = false, null;
  }
};
var r2 = class {
  constructor(t16, e15, i16, r17 = 0) {
    this.isClosed = false, this.inputGeometries = t16, this.acceptPolygon = e15, this.acceptPolyline = i16, this.geomUnitsPerPoint = r17, this.iteratePath = false, this.multiPathCursor = null;
  }
  next() {
    for (; ; ) {
      if (!this.multiPathCursor) {
        let t16 = this.inputGeometries.next();
        for (; t16 && (this.isClosed = this.acceptPolygon && "esriGeometryPolygon" === t16.geometryType || "esriGeometryEnvelope" === t16.geometryType, this.multiPathCursor = t16, !this.multiPathCursor); ) t16 = this.inputGeometries.next();
        if (!this.multiPathCursor) return null;
      }
      for (; this.iteratePath || this.multiPathCursor.nextPath(); ) {
        this.multiPathCursor.seekPathStart();
        const t16 = this.processPath(this.multiPathCursor);
        if (t16) return t16;
      }
      this.multiPathCursor = null;
    }
  }
};

// node_modules/@arcgis/core/symbols/cim/CurveHelper.js
var n6 = 0.03;
var s6 = class {
  constructor(t16 = 0, e15 = false) {
  }
  isEmpty(t16) {
    if (!t16.nextPoint()) return true;
    let e15, n19, s14, r17;
    for (e15 = t16.x, n19 = t16.y; t16.nextPoint(); e15 = n19, n19 = r17) if (s14 = t16.x, r17 = t16.y, s14 !== e15 || r17 !== n19) return t16.seekPathStart(), false;
    return t16.seekPathStart(), true;
  }
  normalize(t16) {
    const e15 = Math.sqrt(t16[0] * t16[0] + t16[1] * t16[1]);
    0 !== e15 && (t16[0] /= e15, t16[1] /= e15);
  }
  getLength(t16, e15, n19, s14) {
    const r17 = n19 - t16, o9 = s14 - e15;
    return Math.sqrt(r17 * r17 + o9 * o9);
  }
  getSegLength(t16) {
    const [[e15, n19], [s14, r17]] = t16;
    return this.getLength(e15, n19, s14, r17);
  }
  getCoord2D(t16, e15, n19, s14, r17) {
    return [t16 + (n19 - t16) * r17, e15 + (s14 - e15) * r17];
  }
  getSegCoord2D(t16, e15) {
    const [[n19, s14], [r17, o9]] = t16;
    return this.getCoord2D(n19, s14, r17, o9, e15);
  }
  getAngle(t16, e15, n19, s14, r17) {
    const o9 = n19 - t16, i16 = s14 - e15;
    return Math.atan2(i16, o9);
  }
  getAngleCS(t16, e15, n19, s14, r17) {
    const o9 = n19 - t16, i16 = s14 - e15, u12 = Math.sqrt(o9 * o9 + i16 * i16);
    return u12 > 0 ? [o9 / u12, i16 / u12] : [1, 0];
  }
  getSegAngleCS(t16, e15) {
    const [[n19, s14], [r17, o9]] = t16;
    return this.getAngleCS(n19, s14, r17, o9, e15);
  }
  cut(t16, e15, n19, s14, r17, o9) {
    return [r17 <= 0 ? [t16, e15] : this.getCoord2D(t16, e15, n19, s14, r17), o9 >= 1 ? [n19, s14] : this.getCoord2D(t16, e15, n19, s14, o9)];
  }
  getSubCurve(e15, n19, s14) {
    const r17 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    return this.appendSubCurve(r17, e15, n19, s14) ? r17 : null;
  }
  appendSubCurve(t16, e15, n19, s14) {
    t16.startPath(), e15.seekPathStart();
    let r17 = 0, o9 = true;
    if (!e15.nextPoint()) return false;
    let i16 = e15.x, u12 = e15.y;
    for (; e15.nextPoint(); ) {
      const h8 = this.getLength(i16, u12, e15.x, e15.y);
      if (0 !== h8) {
        if (o9) {
          if (r17 + h8 > n19) {
            const l11 = (n19 - r17) / h8;
            let a13 = 1, c5 = false;
            r17 + h8 >= s14 && (a13 = (s14 - r17) / h8, c5 = true);
            const f6 = this.cut(i16, u12, e15.x, e15.y, l11, a13);
            if (f6 && t16.pushPoints(f6), c5) break;
            o9 = false;
          }
        } else {
          if (r17 + h8 > s14) {
            const n20 = this.cut(i16, u12, e15.x, e15.y, 0, (s14 - r17) / h8);
            n20 && t16.pushPoint(n20[1]);
            break;
          }
          t16.pushXY(e15.x, e15.y);
        }
        r17 += h8, i16 = e15.x, u12 = e15.y;
      } else i16 = e15.x, u12 = e15.y;
    }
    return true;
  }
  getCIMPointAlong(t16, e15) {
    if (!t16.nextPoint()) return null;
    let n19, s14, r17, o9, i16 = 0;
    for (n19 = t16.x, s14 = t16.y; t16.nextPoint(); n19 = r17, s14 = o9) {
      r17 = t16.x, o9 = t16.y;
      const u12 = this.getLength(n19, s14, r17, o9);
      if (0 !== u12) {
        if (i16 + u12 > e15) {
          const t17 = (e15 - i16) / u12;
          return this.getCoord2D(n19, s14, r17, o9, t17);
        }
        i16 += u12;
      }
    }
    return null;
  }
  offset(t16, n19, s14, r17, o9) {
    if (!t16 || t16.length < 2) return null;
    let i16 = 0, u12 = t16[i16++], h8 = i16;
    for (; i16 < t16.length; ) {
      const e15 = t16[i16];
      e15[0] === u12[0] && e15[1] === u12[1] || (i16 !== h8 && (t16[h8] = t16[i16]), u12 = t16[h8++]), i16++;
    }
    const l11 = t16[0][0] === t16[h8 - 1][0] && t16[0][1] === t16[h8 - 1][1];
    if (l11 && --h8, h8 < (l11 ? 3 : 2)) return null;
    const a13 = [];
    u12 = l11 ? t16[h8 - 1] : null;
    let c5 = t16[0];
    for (let f6 = 0; f6 < h8; f6++) {
      const o10 = f6 === h8 - 1 ? l11 ? t16[0] : null : t16[f6 + 1];
      if (u12) if (o10) {
        const t17 = [o10[0] - c5[0], o10[1] - c5[1]];
        this.normalize(t17);
        const i17 = [c5[0] - u12[0], c5[1] - u12[1]];
        this.normalize(i17);
        const h9 = i17[0] * t17[1] - i17[1] * t17[0], l12 = i17[0] * t17[0] + i17[1] * t17[1];
        if (0 === h9 && 1 === l12) {
          c5 = o10;
          continue;
        }
        if (h9 >= 0 == n19 <= 0) {
          if (l12 < 1) {
            const e15 = [t17[0] - i17[0], t17[1] - i17[1]];
            this.normalize(e15);
            const s15 = Math.sqrt((1 + l12) / 2);
            if (s15 > 1 / r17) {
              const t18 = -Math.abs(n19) / s15;
              a13.push([c5[0] - e15[0] * t18, c5[1] - e15[1] * t18]);
            }
          }
        } else switch (s14) {
          case N.Mitered: {
            const e15 = Math.sqrt((1 + l12) / 2);
            if (e15 > 0 && 1 / e15 < r17) {
              const s15 = [t17[0] - i17[0], t17[1] - i17[1]];
              this.normalize(s15);
              const r18 = Math.abs(n19) / e15;
              a13.push([c5[0] - s15[0] * r18, c5[1] - s15[1] * r18]);
              break;
            }
          }
          case N.Bevelled:
            a13.push([c5[0] + i17[1] * n19, c5[1] - i17[0] * n19]), a13.push([c5[0] + t17[1] * n19, c5[1] - t17[0] * n19]);
            break;
          case N.Rounded:
            if (l12 < 1) {
              a13.push([c5[0] + i17[1] * n19, c5[1] - i17[0] * n19]);
              const e15 = Math.floor(2.5 * (1 - l12));
              if (e15 > 0) {
                const s15 = 1 / e15;
                let r18 = s15;
                for (let o11 = 1; o11 < e15; o11++, r18 += s15) {
                  const e16 = [i17[1] * (1 - r18) + t17[1] * r18, -i17[0] * (1 - r18) - t17[0] * r18];
                  this.normalize(e16), a13.push([c5[0] + e16[0] * n19, c5[1] + e16[1] * n19]);
                }
              }
              a13.push([c5[0] + t17[1] * n19, c5[1] - t17[0] * n19]);
            }
            break;
          case N.Square:
          default:
            if (h9 < 0) a13.push([c5[0] + (i17[1] + i17[0]) * n19, c5[1] + (i17[1] - i17[0]) * n19]), a13.push([c5[0] + (t17[1] - t17[0]) * n19, c5[1] - (t17[0] + t17[1]) * n19]);
            else {
              const e15 = Math.sqrt((1 + Math.abs(l12)) / 2), s15 = [t17[0] - i17[0], t17[1] - i17[1]];
              this.normalize(s15);
              const r18 = n19 / e15;
              a13.push([c5[0] - s15[0] * r18, c5[1] - s15[1] * r18]);
            }
        }
      } else {
        const t17 = [c5[0] - u12[0], c5[1] - u12[1]];
        this.normalize(t17), a13.push([c5[0] + t17[1] * n19, c5[1] - t17[0] * n19]);
      }
      else {
        const t17 = [o10[0] - c5[0], o10[1] - c5[1]];
        this.normalize(t17), a13.push([c5[0] + t17[1] * n19, c5[1] - t17[0] * n19]);
      }
      u12 = c5, c5 = o10;
    }
    return a13.length < (l11 ? 3 : 2) ? null : (l11 && a13.push([a13[0][0], a13[0][1]]), a13);
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectArrow.js
var c3 = 1.7320508075688772;
var u7 = 5;
var h2 = P.OpenEnded;
var p5 = class _p {
  static local() {
    return null === _p.instance && (_p.instance = new _p()), _p.instance;
  }
  execute(t16, e15, r17, n19, o9) {
    return new P3(t16, e15, r17);
  }
};
p5.instance = null;
var P3 = class extends r2 {
  constructor(t16, e15, r17) {
    super(t16, false, true), this._curveHelper = new s6(), this._width = (void 0 !== e15.width ? e15.width : u7) * r17, this._arrowType = void 0 !== e15.geometricEffectArrowType ? e15.geometricEffectArrowType : void 0 !== e15.arrowType ? e15.arrowType : h2, this._offsetFlattenError = n6 * r17;
  }
  processPath(e15) {
    const r17 = a6.createEmptyOptimizedCIM(e15.geometryType);
    switch (this._arrowType) {
      case P.OpenEnded:
      default:
        this._constructSimpleArrow(r17, e15, true);
        break;
      case P.Block:
        this._constructSimpleArrow(r17, e15, false);
        break;
      case P.Crossed:
        this._constructCrossedArrow(r17, e15);
    }
    return r17;
  }
  _constructSimpleArrow(t16, r17, n19) {
    const o9 = r17.pathLength();
    let s14 = this._width;
    o9 < 2 * s14 && (s14 = o9 / 2);
    const i16 = this._curveHelper.getSubCurve(r17, 0, o9 - s14);
    if (!i16 || !i16.nextPath()) return;
    i16.seekPathStart();
    const c5 = s14 / 2;
    if (this._curveHelper.isEmpty(i16)) return;
    const u12 = n2(i16), h8 = this._constructOffset(u12, -c5);
    if (!h8) return;
    const p8 = this._constructOffset(u12, c5);
    if (!p8) return;
    const P5 = this._constructArrowBasePoint(h8, -c5 / 2);
    if (!P5) return;
    const l11 = this._constructArrowBasePoint(p8, c5 / 2);
    if (!l11) return;
    r17.seekInPath(r17.pathSize - 1);
    const f6 = [r17.x, r17.y];
    t16.pushPath(p8), t16.nextPath(), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(l11), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(f6), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(P5), t16.nextPoint(), t16.setControlPoint(), t16.pushPoints(h8.reverse()), t16.setControlPoint(), n19 || (t16.setControlPointAt(0), t16.setControlPointAt(t16.pathSize - 1), t16.pushPoint(p8[0])), t16.reset();
  }
  _constructCrossedArrow(t16, r17) {
    const n19 = r17.pathLength();
    let o9 = this._width;
    n19 < o9 * (1 + c3 + 1) && (o9 = n19 / (1 + c3 + 1)), r17.seekPathStart();
    const s14 = this._curveHelper.getSubCurve(r17, 0, n19 - o9 * (1 + c3));
    if (!s14) return;
    s14.nextPath();
    const i16 = o9 / 2;
    if (this._curveHelper.isEmpty(s14)) return;
    const u12 = n2(s14), h8 = this._constructOffset(u12, i16);
    if (!h8) return;
    const p8 = this._constructOffset(u12, -i16);
    if (!p8) return;
    const P5 = this._curveHelper.getSubCurve(r17, 0, n19 - o9);
    if (!P5) return;
    if (P5.nextPath(), this._curveHelper.isEmpty(P5)) return;
    const l11 = n2(P5), f6 = this._constructOffset(l11, i16);
    if (!f6) return;
    const a13 = this._constructOffset(l11, -i16);
    if (!a13) return;
    const _6 = f6[f6.length - 1], m9 = this._constructArrowBasePoint(f6, i16 / 2);
    if (!m9) return;
    const C4 = a13[a13.length - 1], w5 = this._constructArrowBasePoint(a13, -i16 / 2);
    if (!w5) return;
    r17.seekInPath(r17.pathSize - 1);
    const x4 = [r17.x, r17.y];
    t16.pushPath(h8), t16.nextPath(), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(C4), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(w5), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(x4), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(m9), t16.nextPoint(), t16.setControlPoint(), t16.pushPoint(_6), t16.nextPoint(), t16.setControlPoint(), t16.pushPoints(p8.reverse()), t16.nextPoint(), t16.setControlPoint(), t16.reset();
  }
  _constructOffset(t16, e15) {
    return this._curveHelper.offset(t16, e15, N.Rounded, 4, this._offsetFlattenError);
  }
  _constructArrowBasePoint(t16, e15) {
    if (!t16 || t16.length < 2) return null;
    const r17 = t16[t16.length - 2], n19 = t16[t16.length - 1], o9 = [n19[0] - r17[0], n19[1] - r17[1]];
    return this._curveHelper.normalize(o9), [n19[0] + o9[1] * e15, n19[1] - o9[0] * e15];
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMEffects.js
var r3 = 512;
var n7;
var s7 = class {
  constructor(t16) {
    this._geometry = t16;
  }
  next() {
    const t16 = this._geometry;
    return this._geometry = null, t16;
  }
};
function i6(s14, i16) {
  n7 || (n7 = new e4(0, 0, 0, 1));
  const y6 = "esriGeometryPolygon" === s14.geometryType, m9 = y6 ? i2.Polygon : i2.LineString, l11 = y6 ? 3 : 2;
  let c5, p8;
  for (n7.reset(m9), n7.setPixelMargin(i16 + 1), n7.setExtent(r3); s14.nextPath(); ) if (!(s14.pathSize < l11)) {
    for (s14.nextPoint(), c5 = s14.x, p8 = -s14.y, n7.moveTo(c5, p8); s14.nextPoint(); ) c5 = s14.x, p8 = -s14.y, n7.lineTo(c5, p8);
    y6 && n7.close();
  }
  const f6 = n7.result(false);
  if (f6) {
    const e15 = a6.createEmptyOptimizedCIM(s14.geometryType);
    for (const t16 of f6) {
      e15.startPath();
      for (const o9 of t16) e15.pushXY(o9.x, -o9.y);
    }
    return e15.reset(), e15;
  }
  return null;
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectBuffer.js
var m5 = class _m {
  static local() {
    return null === _m.instance && (_m.instance = new _m()), _m.instance;
  }
  execute(e15, t16, i16, s14, r17, n19, o9) {
    return new l5(e15, t16, i16, s14, r17, n19, o9);
  }
};
m5.instance = null;
var l5 = class {
  constructor(e15, t16, i16, s14, o9, m9, l11) {
    this._preventClipping = l11, this._inputGeometries = e15, this._tileKey = s14, this._geometryEngine = o9, this._curveHelper = new s6(), this._size = (void 0 !== t16.size ? t16.size : 1) * i16, this._maxInflateSize = m9 * i16, this._offsetFlattenError = n6 * i16;
  }
  next() {
    let r17;
    for (; r17 = this._inputGeometries.next(); ) {
      if (0 === this._size) return r17;
      if ("esriGeometryEnvelope" === r17.geometryType) {
        if (this._size > 0) {
          const i16 = a6.createEmptyOptimizedCIM(r17.geometryType), s14 = t2(r17)[0], n20 = this._curveHelper.offset(s14, this._size, N.Rounded, 4, this._offsetFlattenError);
          if (n20) return i16.pushPath(n20), i16;
        } else if (this._size < 0) {
          const t16 = r17.asJSON();
          if (Math.min(t16.xmax - t16.xmin, t16.ymax - t16.ymin) + 2 * this._size > 0) return a6.fromJSONCIM({ xmin: t16.xmin - this._size, xmax: t16.xmax + this._size, ymin: t16.ymin - this._size, ymax: t16.ymax + this._size });
        }
      }
      const n19 = this._geometryEngine;
      if (null == n19) return null;
      const m9 = !this._preventClipping && this._tileKey ? i6(r17, this._maxInflateSize) : r17;
      if (!m9) continue;
      const l11 = n19.buffer(g.WebMercator, m9.asJSON(), this._size, 1);
      return l11 ? a6.fromJSONCIM(l11) : null;
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectControlMeasureLine.js
var r4 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(s14, t16, i16, h8, e15) {
    return new _2(s14, t16, i16);
  }
};
r4.instance = null;
var _2 = class {
  constructor(s14, t16, i16) {
    this._defaultPointSize = 20, this._inputGeometries = s14, this._geomUnitsPerPoint = i16, this._rule = t16.rule ?? R.FullGeometry, this._defaultSize = this._defaultPointSize * i16;
  }
  next() {
    let i16;
    for (; i16 = this._inputGeometries.next(); ) {
      const h8 = this._processGeom(t2(i16));
      if (h8 == null ? void 0 : h8.length) return a6.fromJSONCIM({ paths: h8 });
    }
    return null;
  }
  _clone(s14) {
    return [s14[0], s14[1]];
  }
  _mid(s14, t16) {
    return [(s14[0] + t16[0]) / 2, (s14[1] + t16[1]) / 2];
  }
  _mix(s14, t16, i16, h8) {
    return [s14[0] * t16 + i16[0] * h8, s14[1] * t16 + i16[1] * h8];
  }
  _add(s14, t16) {
    return [s14[0] + t16[0], s14[1] + t16[1]];
  }
  _add2(s14, t16, i16) {
    return [s14[0] + t16, s14[1] + i16];
  }
  _sub(s14, t16) {
    return [s14[0] - t16[0], s14[1] - t16[1]];
  }
  _dist(s14, t16) {
    return Math.sqrt((s14[0] - t16[0]) * (s14[0] - t16[0]) + (s14[1] - t16[1]) * (s14[1] - t16[1]));
  }
  _norm(s14) {
    return Math.sqrt(s14[0] * s14[0] + s14[1] * s14[1]);
  }
  _normalize(s14, t16 = 1) {
    const i16 = t16 / this._norm(s14);
    s14[0] *= i16, s14[1] *= i16;
  }
  _leftPerpendicular(s14) {
    const t16 = -s14[1], i16 = s14[0];
    s14[0] = t16, s14[1] = i16;
  }
  _leftPerp(s14) {
    return [-s14[1], s14[0]];
  }
  _rightPerpendicular(s14) {
    const t16 = s14[1], i16 = -s14[0];
    s14[0] = t16, s14[1] = i16;
  }
  _rightPerp(s14) {
    return [s14[1], -s14[0]];
  }
  _dotProduct(s14, t16) {
    return s14[0] * t16[0] + s14[1] * t16[1];
  }
  _crossProduct(s14, t16) {
    return s14[0] * t16[1] - s14[1] * t16[0];
  }
  _rotateDirect(s14, t16, i16) {
    const h8 = s14[0] * t16 - s14[1] * i16, e15 = s14[0] * i16 + s14[1] * t16;
    s14[0] = h8, s14[1] = e15;
  }
  _makeCtrlPt(s14) {
    const t16 = [s14[0], s14[1]];
    return e7(t16, 1), t16;
  }
  _addAngledTicks(s14, t16, i16, h8) {
    const e15 = this._sub(i16, t16);
    this._normalize(e15);
    const r17 = this._crossProduct(e15, this._sub(h8, t16));
    let _6;
    _6 = r17 > 0 ? this._rightPerp(e15) : this._leftPerp(e15);
    const c5 = Math.abs(r17) / 2, u12 = [];
    u12.push([t16[0] + (_6[0] - e15[0]) * c5, t16[1] + (_6[1] - e15[1]) * c5]), u12.push(t16), u12.push(i16), u12.push([i16[0] + (_6[0] + e15[0]) * c5, i16[1] + (_6[1] + e15[1]) * c5]), s14.push(u12);
  }
  _addBezier2(s14, t16, i16, h8, e15) {
    if (0 == e15--) return void s14.push(h8);
    const r17 = this._mid(t16, i16), _6 = this._mid(i16, h8), c5 = this._mid(r17, _6);
    this._addBezier2(s14, t16, r17, c5, e15), this._addBezier2(s14, c5, _6, h8, e15);
  }
  _addBezier3(s14, t16, i16, h8, e15, r17) {
    if (0 == r17--) return void s14.push(e15);
    const _6 = this._mid(t16, i16), c5 = this._mid(i16, h8), u12 = this._mid(h8, e15), o9 = this._mid(_6, c5), a13 = this._mid(c5, u12), n19 = this._mid(o9, a13);
    this._addBezier3(s14, t16, _6, o9, n19, r17), this._addBezier3(s14, n19, a13, u12, e15, r17);
  }
  _add90DegArc(s14, t16, i16, h8, e15) {
    const r17 = e15 ?? this._crossProduct(this._sub(i16, t16), this._sub(h8, t16)) > 0, _6 = this._mid(t16, i16), c5 = this._sub(_6, t16);
    r17 ? this._leftPerpendicular(c5) : this._rightPerpendicular(c5), _6[0] += c5[0], _6[1] += c5[1], this._addBezier3(s14, t16, this._mix(t16, 0.33333, _6, 0.66667), this._mix(i16, 0.33333, _6, 0.66667), i16, 4);
  }
  _addArrow(s14, t16, i16) {
    const h8 = t16[0], e15 = t16[1], r17 = t16[t16.length - 1], _6 = this._sub(h8, e15), c5 = this._norm(_6);
    this._normalize(_6);
    const u12 = Math.abs(this._crossProduct(_6, this._sub(r17, e15)));
    let o9 = this._dotProduct(_6, this._sub(r17, e15));
    o9 < 0.05 * c5 ? o9 = 0.05 * c5 : o9 > 0.95 * c5 && (o9 = 0.95 * c5);
    const a13 = 0.5 * u12, n19 = this._leftPerp(_6), p8 = [e15[0] + _6[0] * o9, e15[1] + _6[1] * o9], d3 = t16.length - 1, l11 = [];
    l11.push(i16 ? [-n19[0], -n19[1]] : n19);
    let b5 = [-_6[0], -_6[1]];
    for (let P5 = 1; P5 < d3 - 1; P5++) {
      const s15 = this._sub(t16[P5 + 1], t16[P5]);
      this._normalize(s15);
      const i17 = this._dotProduct(s15, b5), h9 = this._crossProduct(s15, b5), e16 = Math.sqrt((1 + i17) / 2), r18 = this._sub(s15, b5);
      this._normalize(r18), r18[0] /= e16, r18[1] /= e16, l11.push(h9 < 0 ? [-r18[0], -r18[1]] : r18), b5 = s15;
    }
    l11.push(this._rightPerp(b5));
    for (let P5 = l11.length - 1; P5 > 0; P5--) s14.push([t16[P5][0] + l11[P5][0] * a13, t16[P5][1] + l11[P5][1] * a13]);
    s14.push([p8[0] + l11[0][0] * a13, p8[1] + l11[0][1] * a13]), s14.push([p8[0] + l11[0][0] * u12, p8[1] + l11[0][1] * u12]), s14.push(h8), s14.push([p8[0] - l11[0][0] * u12, p8[1] - l11[0][1] * u12]), s14.push([p8[0] - l11[0][0] * a13, p8[1] - l11[0][1] * a13]);
    for (let P5 = 1; P5 < l11.length; P5++) s14.push([t16[P5][0] - l11[P5][0] * a13, t16[P5][1] - l11[P5][1] * a13]);
  }
  _addDash(s14, t16, i16) {
    const h8 = this._norm(i16) / 7;
    this._normalize(i16);
    let e15 = [];
    for (let r17 = 0; r17 <= 7; r17++) e15.push([t16[0] + i16[0] * r17 * h8, t16[1] + i16[1] * r17 * h8]), 1 & r17 && (s14.push(e15), e15 = []);
  }
  _cp2(s14, t16, i16) {
    return s14.length >= 2 ? s14[1] : this._add2(s14[0], t16 * this._defaultSize, i16 * this._defaultSize);
  }
  _cp3(s14, t16, i16, h8) {
    if (s14.length >= 3) return s14[2];
    const e15 = this._mix(s14[0], 1 - i16, t16, i16), r17 = this._sub(t16, s14[0]);
    return this._normalize(r17), this._rightPerpendicular(r17), [e15[0] + r17[0] * h8 * this._defaultSize, e15[1] + r17[1] * h8 * this._defaultSize];
  }
  _arrowPath(s14) {
    if (s14.length > 2) return s14;
    const t16 = s14[0], i16 = this._cp2(s14, -4, 0), h8 = this._sub(t16, i16);
    this._normalize(h8);
    const e15 = this._rightPerp(h8);
    return [t16, i16, [t16[0] + (e15[0] - h8[0]) * this._defaultSize, t16[1] + (e15[1] - h8[1]) * this._defaultSize]];
  }
  _arrowLastSeg(s14) {
    const t16 = s14[0], i16 = this._cp2(s14, -4, 0);
    let h8;
    if (s14.length >= 3) h8 = s14[s14.length - 1];
    else {
      const s15 = this._sub(t16, i16);
      this._normalize(s15);
      const e15 = this._rightPerp(s15);
      h8 = [t16[0] + (e15[0] - s15[0]) * this._defaultSize, t16[1] + (e15[1] - s15[1]) * this._defaultSize];
    }
    return [i16, h8];
  }
  _processGeom(s14) {
    if (!s14) return null;
    const t16 = [];
    for (const r17 of s14) {
      const s15 = r17.length > 1 && h(r17) < this._defaultSize;
      if (!r17 || 0 === r17.length || s15) continue;
      const _6 = r17.length;
      let c5 = r17[0];
      switch (this._rule) {
        case R.PerpendicularFromFirstSegment: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 4), h8 = [];
          h8.push(i16), h8.push(this._mid(c5, s16)), t16.push(h8);
          break;
        }
        case R.ReversedFirstSegment: {
          const s16 = this._cp2(r17, 0, -1);
          t16.push([s16, c5]);
          break;
        }
        case R.PerpendicularToSecondSegment: {
          if (r17.length < 3) return [];
          const s16 = this._cp2(r17, -4, 1), i16 = this._cp3(r17, s16, 0.882353, -1.94), h8 = [];
          h8.push(this._mid(s16, i16)), h8.push(c5), t16.push(h8);
          break;
        }
        case R.SecondSegmentWithTicks: {
          if (r17.length < 3) return [];
          const s16 = this._cp2(r17, -4, 1), i16 = this._cp3(r17, s16, 0.882353, -1.94), h8 = this._sub(i16, s16);
          let e15;
          e15 = this._crossProduct(h8, this._sub(c5, s16)) > 0 ? this._rightPerp(h8) : this._leftPerp(h8);
          const _7 = [];
          _7.push([s16[0] + (e15[0] - h8[0]) / 3, s16[1] + (e15[1] - h8[1]) / 3]), _7.push(s16), _7.push(i16), _7.push([i16[0] + (e15[0] + h8[0]) / 3, i16[1] + (e15[1] + h8[1]) / 3]), t16.push(_7);
          break;
        }
        case R.DoublePerpendicular: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 3), h8 = this._mid(c5, s16), e15 = this._sub(h8, i16);
          this._normalize(e15);
          const _7 = this._crossProduct(e15, this._sub(c5, i16));
          this._leftPerpendicular(e15);
          const u12 = [];
          u12.push(c5), u12.push([i16[0] + e15[0] * _7, i16[1] + e15[1] * _7]), t16.push(u12);
          const o9 = [];
          o9.push([i16[0] - e15[0] * _7, i16[1] - e15[1] * _7]), o9.push(s16), t16.push(o9);
          break;
        }
        case R.OppositeToFirstSegment: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 3), h8 = this._mid(c5, s16), e15 = this._sub(h8, i16);
          this._normalize(e15);
          const _7 = this._crossProduct(e15, this._sub(c5, i16));
          this._leftPerpendicular(e15);
          const u12 = [];
          u12.push([i16[0] + e15[0] * _7, i16[1] + e15[1] * _7]), u12.push([i16[0] - e15[0] * _7, i16[1] - e15[1] * _7]), t16.push(u12);
          break;
        }
        case R.TriplePerpendicular: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 4), h8 = this._mid(c5, s16), e15 = this._sub(h8, i16);
          this._normalize(e15);
          const _7 = this._crossProduct(e15, this._sub(c5, i16));
          this._leftPerpendicular(e15);
          const u12 = [];
          u12.push([i16[0] + e15[0] * _7 * 0.8, i16[1] + e15[1] * _7 * 0.8]), u12.push([h8[0] + 0.8 * (c5[0] - h8[0]), h8[1] + 0.8 * (c5[1] - h8[1])]), t16.push(u12), t16.push([i16, h8]);
          const o9 = [];
          o9.push([i16[0] - e15[0] * _7 * 0.8, i16[1] - e15[1] * _7 * 0.8]), o9.push([h8[0] + 0.8 * (s16[0] - h8[0]), h8[1] + 0.8 * (s16[1] - h8[1])]), t16.push(o9);
          break;
        }
        case R.HalfCircleFirstSegment: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 4), h8 = this._mid(c5, s16);
          let e15 = this._sub(s16, c5);
          const _7 = Math.cos(Math.PI / 18), u12 = Math.sin(Math.PI / 18), o9 = Math.sqrt((1 + _7) / 2), a13 = Math.sqrt((1 - _7) / 2), n19 = [];
          let p8;
          this._crossProduct(e15, this._sub(i16, c5)) > 0 ? (n19.push(c5), e15 = this._sub(c5, h8), p8 = s16) : (n19.push(s16), e15 = this._sub(s16, h8), p8 = c5), this._rotateDirect(e15, o9, a13), e15[0] /= o9, e15[1] /= o9;
          for (let t17 = 1; t17 <= 18; t17++) n19.push(this._add(h8, e15)), this._rotateDirect(e15, _7, u12);
          n19.push(p8), t16.push(n19);
          break;
        }
        case R.HalfCircleSecondSegment: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 1, -1);
          let h8 = this._sub(c5, s16);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, s16)) / 2;
          this._leftPerpendicular(h8);
          const _7 = [s16[0] + h8[0] * e15, s16[1] + h8[1] * e15];
          h8 = this._sub(s16, _7);
          const u12 = Math.cos(Math.PI / 18);
          let o9 = Math.sin(Math.PI / 18);
          e15 > 0 && (o9 = -o9);
          const a13 = [s16];
          for (let t17 = 1; t17 <= 18; t17++) this._rotateDirect(h8, u12, o9), a13.push(this._add(_7, h8));
          t16.push(a13);
          break;
        }
        case R.HalfCircleExtended: {
          const s16 = this._cp2(r17, 0, -2), i16 = this._cp3(r17, s16, 1, -1);
          let h8;
          if (_6 >= 4) h8 = r17[3];
          else {
            const t17 = this._sub(c5, s16);
            h8 = this._add(i16, t17);
          }
          const e15 = this._dist(s16, i16) / 2 / 0.75, u12 = this._sub(s16, c5);
          this._normalize(u12, e15);
          const o9 = this._sub(i16, h8);
          this._normalize(o9, e15);
          const a13 = [h8, i16];
          t16.push(a13);
          const n19 = [this._clone(i16)];
          this._addBezier3(n19, i16, this._add(i16, o9), this._add(s16, u12), s16, 4), n19.push(c5), t16.push(n19);
          break;
        }
        case R.OpenCircle: {
          const s16 = this._cp2(r17, -2, 0), i16 = this._sub(s16, c5), h8 = Math.cos(Math.PI / 18), e15 = -Math.sin(Math.PI / 18), _7 = [s16];
          for (let t17 = 1; t17 <= 33; t17++) this._rotateDirect(i16, h8, e15), _7.push(this._add(c5, i16));
          t16.push(_7);
          break;
        }
        case R.CoverageEdgesWithTicks: {
          const s16 = this._cp2(r17, 0, -1);
          let i16, h8;
          if (_6 >= 3) i16 = r17[2];
          else {
            const t17 = this._sub(s16, c5), h9 = this._leftPerp(t17);
            i16 = [c5[0] + h9[0] - 0.25 * t17[0], c5[1] + h9[1] - 0.25 * t17[1]];
          }
          if (_6 >= 4) h8 = r17[3];
          else {
            const t17 = this._mid(c5, s16), e16 = this._sub(c5, s16);
            this._normalize(e16), this._leftPerpendicular(e16);
            const r18 = this._crossProduct(e16, this._sub(i16, t17));
            this._rightPerpendicular(e16), h8 = [i16[0] + e16[0] * r18 * 2, i16[1] + e16[1] * r18 * 2];
          }
          const e15 = this._sub(s16, c5);
          let u12, o9;
          u12 = this._crossProduct(e15, this._sub(i16, c5)) > 0 ? this._rightPerp(e15) : this._leftPerp(e15), o9 = [], o9.push(i16), o9.push(c5), o9.push([c5[0] + (u12[0] - e15[0]) / 3, c5[1] + (u12[1] - e15[1]) / 3]), t16.push(o9), u12 = this._crossProduct(e15, this._sub(h8, s16)) > 0 ? this._rightPerp(e15) : this._leftPerp(e15), o9 = [], o9.push([s16[0] + (u12[0] + e15[0]) / 3, s16[1] + (u12[1] + e15[1]) / 3]), o9.push(s16), o9.push(h8), t16.push(o9);
          break;
        }
        case R.GapExtentWithDoubleTicks: {
          const s16 = this._cp2(r17, 0, 2), i16 = this._cp3(r17, s16, 0, 1);
          let h8;
          if (_6 >= 4) h8 = r17[3];
          else {
            const t17 = this._sub(s16, c5);
            h8 = this._add(i16, t17);
          }
          this._addAngledTicks(t16, c5, s16, this._mid(i16, h8)), this._addAngledTicks(t16, i16, h8, this._mid(c5, s16));
          break;
        }
        case R.GapExtentMidline: {
          const s16 = this._cp2(r17, 2, 0), i16 = this._cp3(r17, s16, 0, 1);
          let h8;
          if (_6 >= 4) h8 = r17[3];
          else {
            const t17 = this._sub(s16, c5);
            h8 = this._add(i16, t17);
          }
          const e15 = [];
          e15.push(this._mid(c5, i16)), e15.push(this._mid(s16, h8)), t16.push(e15);
          break;
        }
        case R.Chevron: {
          const s16 = this._cp2(r17, -1, -1);
          let i16;
          if (_6 >= 3) i16 = r17[2];
          else {
            const t17 = this._sub(s16, c5);
            this._leftPerpendicular(t17), i16 = this._add(c5, t17);
          }
          t16.push([s16, this._makeCtrlPt(c5), i16]);
          break;
        }
        case R.PerpendicularWithArc: {
          const s16 = this._cp2(r17, 0, -2), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(s16, c5), e15 = this._norm(h8);
          h8[0] /= e15, h8[1] /= e15;
          const u12 = this._crossProduct(h8, this._sub(i16, c5));
          let o9 = this._dotProduct(h8, this._sub(i16, c5));
          o9 < 0.05 * e15 ? o9 = 0.05 * e15 : o9 > 0.95 * e15 && (o9 = 0.95 * e15);
          const a13 = [c5[0] + h8[0] * o9, c5[1] + h8[1] * o9];
          let n19 = this._leftPerp(h8), p8 = [];
          if (p8.push([a13[0] - n19[0] * u12, a13[1] - n19[1] * u12]), p8.push([a13[0] + n19[0] * u12, a13[1] + n19[1] * u12]), t16.push(p8), _6 >= 4) {
            const s17 = r17[3];
            let i17 = this._dotProduct(h8, this._sub(s17, c5));
            i17 < 0.1 * e15 ? i17 = 0.1 * e15 : i17 > 0.9 * e15 && (i17 = 0.9 * e15);
            const _7 = [c5[0] + h8[0] * i17, c5[1] + h8[1] * i17], u13 = this._crossProduct(h8, this._sub(s17, c5)), o10 = [];
            o10.push([_7[0] - n19[0] * u13, _7[1] - n19[1] * u13]), o10.push([_7[0] + n19[0] * u13, _7[1] + n19[1] * u13]), t16.push(o10);
          }
          const d3 = [s16[0] + n19[0] * u12, s16[1] + n19[1] * u12];
          n19 = this._sub(s16, d3);
          const l11 = Math.cos(Math.PI / 18);
          let b5 = Math.sin(Math.PI / 18);
          u12 < 0 && (b5 = -b5), p8 = [c5, s16];
          for (let t17 = 1; t17 <= 9; t17++) this._rotateDirect(n19, l11, b5), p8.push(this._add(d3, n19));
          t16.push(p8);
          break;
        }
        case R.ClosedHalfCircle: {
          const s16 = this._cp2(r17, 2, 0), i16 = this._mid(c5, s16), h8 = this._sub(s16, i16), e15 = Math.cos(Math.PI / 18), _7 = Math.sin(Math.PI / 18), u12 = [c5, s16];
          for (let t17 = 1; t17 <= 18; t17++) this._rotateDirect(h8, e15, _7), u12.push(this._add(i16, h8));
          t16.push(u12);
          break;
        }
        case R.TripleParallelExtended: {
          const s16 = this._cp2(r17, 0, -2), i16 = this._cp3(r17, s16, 1, -2), e15 = this._mid(c5, s16), _7 = this._sub(i16, s16);
          this._normalize(_7);
          const u12 = Math.abs(this._crossProduct(_7, this._sub(e15, s16))) / 2, o9 = this._dist(s16, i16), a13 = [s16, c5];
          a13.push([c5[0] + _7[0] * o9 * 0.5, c5[1] + _7[1] * o9 * 0.5]), t16.push(a13);
          const n19 = [];
          n19.push([e15[0] - _7[0] * u12, e15[1] - _7[1] * u12]), n19.push([e15[0] + _7[0] * o9 * 0.375, e15[1] + _7[1] * o9 * 0.375]), e7(n19[n19.length - 1], 1), n19.push([e15[0] + _7[0] * o9 * 0.75, e15[1] + _7[1] * o9 * 0.75]), t16.push(n19);
          const p8 = [s16, i16];
          t16.push(p8);
          break;
        }
        case R.ParallelWithTicks: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(i16, s16);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, c5));
          this._leftPerpendicular(h8), this._addAngledTicks(t16, c5, s16, i16), this._addAngledTicks(t16, this._mix(c5, 1, h8, e15), this._mix(s16, 1, h8, e15), this._mid(c5, s16));
          break;
        }
        case R.Parallel: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(s16, c5);
          this._normalize(h8);
          const e15 = this._leftPerp(h8), _7 = this._crossProduct(h8, this._sub(i16, c5));
          let u12 = [c5, s16];
          t16.push(u12), u12 = [], u12.push([c5[0] + e15[0] * _7, c5[1] + e15[1] * _7]), u12.push([s16[0] + e15[0] * _7, s16[1] + e15[1] * _7]), t16.push(u12);
          break;
        }
        case R.PerpendicularToFirstSegment: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._mid(c5, s16), e15 = this._sub(s16, c5);
          this._normalize(e15);
          const _7 = this._crossProduct(e15, this._sub(i16, c5));
          this._leftPerpendicular(e15);
          const u12 = [];
          u12.push([h8[0] - e15[0] * _7 * 0.25, h8[1] - e15[1] * _7 * 0.25]), u12.push([h8[0] + e15[0] * _7 * 1.25, h8[1] + e15[1] * _7 * 1.25]), t16.push(u12);
          break;
        }
        case R.ParallelOffset: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(s16, c5);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, c5));
          this._leftPerpendicular(h8);
          const _7 = [];
          _7.push([c5[0] - h8[0] * e15, c5[1] - h8[1] * e15]), _7.push([s16[0] - h8[0] * e15, s16[1] - h8[1] * e15]), t16.push(_7);
          const u12 = [];
          u12.push([c5[0] + h8[0] * e15, c5[1] + h8[1] * e15]), u12.push([s16[0] + h8[0] * e15, s16[1] + h8[1] * e15]), t16.push(u12);
          break;
        }
        case R.OffsetOpposite: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(s16, c5);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, c5));
          this._leftPerpendicular(h8);
          const _7 = [];
          _7.push([c5[0] - h8[0] * e15, c5[1] - h8[1] * e15]), _7.push([s16[0] - h8[0] * e15, s16[1] - h8[1] * e15]), t16.push(_7);
          break;
        }
        case R.OffsetSame: {
          const s16 = this._cp2(r17, 3, 0), i16 = this._cp3(r17, s16, 0.5, -1), h8 = this._sub(s16, c5);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, c5));
          this._leftPerpendicular(h8);
          const _7 = [];
          _7.push([c5[0] + h8[0] * e15, c5[1] + h8[1] * e15]), _7.push([s16[0] + h8[0] * e15, s16[1] + h8[1] * e15]), t16.push(_7);
          break;
        }
        case R.CircleWithArc: {
          let s16 = this._cp2(r17, 3, 0);
          const i16 = this._cp3(r17, s16, 0.5, -1);
          let e15, u12;
          if (_6 >= 4) e15 = r17[3], u12 = this._crossProduct(this._sub(e15, s16), this._sub(i16, s16)) > 0;
          else {
            e15 = s16, u12 = this._crossProduct(this._sub(e15, c5), this._sub(i16, c5)) > 0;
            const t17 = 24 * this._geomUnitsPerPoint, h8 = this._sub(e15, c5);
            this._normalize(h8, t17);
            const r18 = Math.sqrt(2) / 2;
            this._rotateDirect(h8, r18, u12 ? r18 : -r18), s16 = this._add(c5, h8);
          }
          const o9 = this._sub(s16, c5), a13 = Math.cos(Math.PI / 18), n19 = Math.sin(Math.PI / 18), p8 = [s16];
          for (let t17 = 1; t17 <= 36; t17++) this._rotateDirect(o9, a13, n19), p8.push(this._add(c5, o9));
          this._add90DegArc(p8, s16, e15, i16, u12), e7(p8[p8.length - 8], 1), t16.push(p8);
          break;
        }
        case R.DoubleJog: {
          let s16, i16 = this._cp2(r17, -3, 1), h8 = this._cp3(r17, i16, -1, -0.5);
          if (_6 >= 4) s16 = r17[3];
          else {
            const t17 = c5;
            c5 = i16, s16 = h8;
            const e16 = this._dist(c5, t17), r18 = this._dist(s16, t17);
            let _7 = 30 * this._geomUnitsPerPoint;
            0.5 * e16 < _7 && (_7 = 0.5 * e16), 0.5 * r18 < _7 && (_7 = 0.5 * r18), i16 = this._mix(c5, _7 / e16, t17, (e16 - _7) / e16), h8 = this._mix(s16, _7 / r18, t17, (r18 - _7) / r18);
          }
          const e15 = this._mid(c5, i16), u12 = this._mid(s16, h8), o9 = this._dist(c5, i16), a13 = this._dist(h8, s16);
          let n19 = Math.min(o9, a13) / 8;
          n19 = Math.min(n19, 24 * this._geomUnitsPerPoint);
          const p8 = Math.cos(Math.PI / 4);
          let d3 = this._sub(c5, i16);
          this._normalize(d3, n19), this._crossProduct(d3, this._sub(s16, i16)) > 0 ? this._rotateDirect(d3, p8, -p8) : this._rotateDirect(d3, p8, p8);
          let l11 = [];
          l11.push(i16), l11.push(this._add(e15, d3)), l11.push(this._sub(e15, d3)), l11.push(c5), t16.push(l11), d3 = this._sub(s16, h8), this._normalize(d3, n19), this._crossProduct(d3, this._sub(c5, h8)) < 0 ? this._rotateDirect(d3, p8, p8) : this._rotateDirect(d3, p8, -p8), l11 = [], l11.push(h8), l11.push(this._add(u12, d3)), l11.push(this._sub(u12, d3)), l11.push(s16), t16.push(l11);
          break;
        }
        case R.PerpendicularOffset: {
          const s16 = this._cp2(r17, -4, 1), i16 = this._cp3(r17, s16, 0.882353, -1.94), h8 = this._sub(i16, s16);
          this._crossProduct(h8, this._sub(c5, s16)) > 0 ? this._rightPerpendicular(h8) : this._leftPerpendicular(h8);
          const e15 = [h8[0] / 8, h8[1] / 8], _7 = this._sub(this._mid(s16, i16), e15);
          t16.push([_7, c5]);
          break;
        }
        case R.LineExcludingLastSegment: {
          const s16 = this._arrowPath(r17), i16 = [];
          let h8 = s16.length - 2;
          for (; h8--; ) i16.push(s16[h8]);
          t16.push(i16);
          break;
        }
        case R.MultivertexArrow: {
          const s16 = this._arrowPath(r17), i16 = [];
          this._addArrow(i16, s16, false), t16.push(i16);
          break;
        }
        case R.CrossedArrow: {
          const s16 = this._arrowPath(r17), i16 = [];
          this._addArrow(i16, s16, true), t16.push(i16);
          break;
        }
        case R.ChevronArrow: {
          const [s16, i16] = this._arrowLastSeg(r17), h8 = 10 * this._geomUnitsPerPoint, e15 = this._sub(c5, s16), _7 = this._norm(e15);
          this._normalize(e15);
          const u12 = this._crossProduct(e15, this._sub(i16, s16));
          let o9 = this._dotProduct(e15, this._sub(i16, s16));
          o9 < 0.05 * _7 ? o9 = 0.05 * _7 : o9 > 0.95 * _7 - h8 && (o9 = 0.95 * _7 - h8);
          const a13 = [s16[0] + e15[0] * o9, s16[1] + e15[1] * o9], n19 = this._leftPerp(e15), p8 = [];
          p8.push([a13[0] + n19[0] * u12 + e15[0] * h8, a13[1] + n19[1] * u12 + e15[1] * h8]), p8.push(c5), p8.push([a13[0] - n19[0] * u12 + e15[0] * h8, a13[1] - n19[1] * u12 + e15[1] * h8]), t16.push(p8);
          break;
        }
        case R.ChevronArrowOffset: {
          const [s16, i16] = this._arrowLastSeg(r17), h8 = this._sub(c5, s16), e15 = this._norm(h8);
          this._normalize(h8);
          const _7 = this._crossProduct(h8, this._sub(i16, s16));
          let u12 = this._dotProduct(h8, this._sub(i16, s16));
          u12 < 0.05 * e15 ? u12 = 0.05 * e15 : u12 > 0.95 * e15 && (u12 = 0.95 * e15);
          const o9 = [s16[0] + h8[0] * u12, s16[1] + h8[1] * u12];
          this._leftPerpendicular(h8);
          const a13 = [];
          a13.push([o9[0] + h8[0] * _7 * 0.5, o9[1] + h8[1] * _7 * 0.5]), a13.push(this._mid(o9, c5)), a13.push([o9[0] - h8[0] * _7 * 0.5, o9[1] - h8[1] * _7 * 0.5]), t16.push(a13);
          break;
        }
        case R.PartialFirstSegment: {
          const [s16, i16] = this._arrowLastSeg(r17), h8 = this._sub(c5, s16), e15 = this._norm(h8);
          this._normalize(h8);
          let _7 = this._dotProduct(h8, this._sub(i16, s16));
          _7 < 0.05 * e15 ? _7 = 0.05 * e15 : _7 > 0.95 * e15 && (_7 = 0.95 * e15);
          const u12 = [s16[0] + h8[0] * _7, s16[1] + h8[1] * _7];
          t16.push([s16, u12]);
          break;
        }
        case R.Arch: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 1), h8 = this._sub(c5, s16), e15 = this._mix(i16, 1, h8, 0.55), _7 = this._mix(i16, 1, h8, -0.55), u12 = [c5];
          this._addBezier2(u12, c5, e15, i16, 4), this._addBezier2(u12, i16, _7, s16, 4), t16.push(u12);
          break;
        }
        case R.CurvedParallelTicks: {
          const s16 = this._cp2(r17, -4, 1), i16 = this._cp3(r17, s16, 0.882353, -1.94), h8 = this._sub(i16, s16);
          this._crossProduct(h8, this._sub(c5, s16)) > 0 ? this._rightPerpendicular(h8) : this._leftPerpendicular(h8);
          const e15 = [h8[0] / 8, h8[1] / 8], _7 = this._sub(this._mid(s16, i16), e15), u12 = this._sub(this._mix(s16, 0.75, i16, 0.25), e15), o9 = this._sub(this._mix(s16, 0.25, i16, 0.75), e15), a13 = [s16];
          this._addBezier2(a13, s16, u12, _7, 3), this._addBezier2(a13, _7, o9, i16, 3), t16.push(a13);
          for (let r18 = 0; r18 < 8; r18++) {
            const s17 = a13[2 * r18 + 1], i17 = [this._clone(s17)];
            i17.push(this._add(s17, [h8[0] / 4, h8[1] / 4])), t16.push(i17);
          }
          break;
        }
        case R.Arc90Degrees: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 1), h8 = [s16];
          this._add90DegArc(h8, s16, c5, i16), t16.push(h8);
          break;
        }
        case R.TipWithPerpendicularAndTicks: {
          const [s16, i16] = this._arrowLastSeg(r17), h8 = 10 * this._geomUnitsPerPoint, e15 = this._sub(c5, s16), _7 = this._norm(e15);
          this._normalize(e15);
          let u12 = this._crossProduct(e15, this._sub(i16, s16)), o9 = this._dotProduct(e15, this._sub(i16, s16));
          o9 < 0.05 * _7 ? o9 = 0.05 * _7 : o9 > 0.95 * _7 - h8 && (o9 = 0.95 * _7 - h8);
          const a13 = this._leftPerp(e15), n19 = [c5[0] - e15[0] * h8, c5[1] - e15[1] * h8], p8 = 0.5 * Math.max(_7 - o9 - h8, h8);
          u12 = Math.abs(u12);
          const d3 = [];
          d3.push([n19[0] + a13[0] * (u12 + p8) - e15[0] * p8, n19[1] + a13[1] * (u12 + p8) - e15[1] * p8]), d3.push([n19[0] + a13[0] * u12, n19[1] + a13[1] * u12]), d3.push([n19[0] - a13[0] * u12, n19[1] - a13[1] * u12]), d3.push([n19[0] - a13[0] * (u12 + p8) - e15[0] * p8, n19[1] - a13[1] * (u12 + p8) - e15[1] * p8]), t16.push(d3), t16.push([n19, c5]);
          break;
        }
        case R.ConcentricCircles: {
          const s16 = this._cp2(r17, 1, 0), i16 = this._cp3(r17, s16, 2, 0), e15 = Math.cos(Math.PI / 18), u12 = Math.sin(Math.PI / 18);
          let o9 = this._dist(s16, c5), a13 = [o9, 0], n19 = [];
          for (let t17 = 0; t17 <= 36; t17++) n19.push(this._add(c5, a13)), this._rotateDirect(a13, e15, u12);
          if (t16.push(n19), _6 >= 4) {
            n19 = [];
            const s17 = r17[3];
            o9 = this._dist(s17, c5), a13 = [o9, 0];
            for (let t17 = 0; t17 <= 36; t17++) n19.push(this._add(c5, a13)), 0 === t17 && (n19.push(this._add(c5, a13)), e7(n19[1], 1)), this._rotateDirect(a13, e15, u12);
            t16.push(n19);
          }
          n19 = [], o9 = this._dist(i16, c5), a13 = [o9, 0];
          for (let t17 = 0; t17 <= 36; t17++) n19.push(this._add(c5, a13)), this._rotateDirect(a13, e15, u12);
          t16.push(n19);
          break;
        }
        case R.DoubleJogArrow: {
          c5 = this._arrowPath(r17)[0];
          const [s16, i16] = this._arrowLastSeg(r17), h8 = this._sub(c5, s16), e15 = this._norm(h8);
          this._normalize(h8);
          const _7 = Math.abs(this._crossProduct(h8, this._sub(i16, c5)));
          let u12 = Math.abs(this._dotProduct(h8, this._sub(i16, c5)));
          u12 < 0.05 * e15 ? u12 = 0.05 * e15 : u12 > 0.95 * e15 && (u12 = 0.95 * e15);
          const o9 = Math.max(_7, u12), a13 = this._leftPerp(h8);
          let n19 = [];
          const p8 = [c5[0] - h8[0] * u12 * 0.5 + a13[0] * _7 * 0.5, c5[1] - h8[1] * u12 * 0.5 + a13[1] * _7 * 0.5];
          n19.push([p8[0], p8[1]]), p8[0] += h8[0] * o9 * 0.5 + a13[0] * o9 * 0.4, p8[1] += h8[1] * o9 * 0.5 + a13[1] * o9 * 0.4, n19.push([p8[0], p8[1]]), p8[0] -= a13[0] * o9 * 0.25, p8[1] -= a13[1] * o9 * 0.25, n19.push([p8[0], p8[1]]), p8[0] += h8[0] * o9 * 0.5 + a13[0] * o9 * 0.4, p8[1] += h8[1] * o9 * 0.5 + a13[1] * o9 * 0.4, n19.push([p8[0], p8[1]]), t16.push(n19), n19 = [], p8[0] = c5[0] - h8[0] * u12 * 0.5 - a13[0] * _7 * 0.5, p8[1] = c5[1] - h8[1] * u12 * 0.5 - a13[1] * _7 * 0.5, n19.push([p8[0], p8[1]]), p8[0] += h8[0] * o9 * 0.5 - a13[0] * o9 * 0.4, p8[1] += h8[1] * o9 * 0.5 - a13[1] * o9 * 0.4, n19.push([p8[0], p8[1]]), p8[0] += a13[0] * o9 * 0.25, p8[1] += a13[1] * o9 * 0.25, n19.push([p8[0], p8[1]]), p8[0] += h8[0] * o9 * 0.5 - a13[0] * o9 * 0.4, p8[1] += h8[1] * o9 * 0.5 - a13[1] * o9 * 0.4, n19.push([p8[0], p8[1]]), t16.push(n19);
          break;
        }
        case R.LinkedChevrons: {
          const s16 = this._cp2(r17, -5, 0), i16 = this._cp3(r17, s16, -0.2, 1), h8 = this._sub(c5, s16);
          this._normalize(h8);
          const e15 = this._leftPerp(h8), _7 = Math.abs(this._crossProduct(h8, this._sub(i16, s16)));
          t16.push([s16, c5]);
          const u12 = [];
          u12.push([c5[0] - h8[0] * _7 + e15[0] * _7, c5[1] - h8[1] * _7 + e15[1] * _7]), u12.push(c5), u12.push([c5[0] - h8[0] * _7 - e15[0] * _7, c5[1] - h8[1] * _7 - e15[1] * _7]), t16.push(u12), this._addDash(t16, s16, [-h8[0] * _7 + e15[0] * _7, -h8[1] * _7 + e15[1] * _7]), this._addDash(t16, s16, [-h8[0] * _7 - e15[0] * _7, -h8[1] * _7 - e15[1] * _7]);
          break;
        }
        case R.SegmentThenHalfCircle: {
          const s16 = this._cp2(r17, 2, 0), i16 = this._cp3(r17, s16, 1.5, 0);
          let h8;
          h8 = _6 >= 4 ? r17[3] : this._cp3(r17, s16, 1.25, -0.5);
          const e15 = this._sub(s16, c5);
          this._normalize(e15);
          const u12 = 0.5 * this._dist(s16, i16), o9 = this._crossProduct(e15, this._sub(h8, c5)) > 0, a13 = Math.cos(Math.PI / 18);
          let n19 = Math.sin(Math.PI / 18);
          o9 && (n19 = -n19);
          const p8 = [c5, s16];
          e15[0] *= u12, e15[1] *= u12;
          const d3 = this._add(s16, e15);
          e15[0] = -e15[0], e15[1] = -e15[1];
          for (let t17 = 1; t17 <= 18; t17++) this._rotateDirect(e15, a13, n19), p8.push(this._add(d3, e15));
          t16.push(p8);
          break;
        }
        case R.LineWithStraightTicks: {
          const s16 = this._cp2(r17, -2, 1), i16 = this._cp3(r17, s16, -1, -0.5), h8 = this._sub(i16, s16);
          this._normalize(h8);
          const e15 = this._dotProduct(h8, this._sub(s16, c5)), _7 = this._dotProduct(h8, this._sub(i16, c5));
          let u12 = [c5];
          u12.push([c5[0] + h8[0] * e15, c5[1] + h8[1] * e15]), u12.push(s16), t16.push(u12), u12 = [c5], u12.push([c5[0] + h8[0] * _7, c5[1] + h8[1] * _7]), u12.push(i16), t16.push(u12);
          break;
        }
        case R.DoubleCurve: {
          const s16 = this._cp2(r17, -5, -1), i16 = this._cp3(r17, s16, 2, 0), e15 = Math.atan2(1, 5), _7 = Math.cos(e15), u12 = Math.sin(e15), o9 = this._sub(s16, c5), a13 = this._dist(c5, s16);
          this._normalize(o9), this._rotateDirect(o9, _7, -u12);
          const n19 = [c5];
          n19.push([c5[0] + o9[0] * a13 * 0.5, c5[1] + o9[1] * a13 * 0.5]), e7(n19[1], 1), n19.push([c5[0] + o9[0] * a13 * 0.8, c5[1] + o9[1] * a13 * 0.8]), this._addBezier2(n19, n19[2], [c5[0] + o9[0] * a13, c5[1] + o9[1] * a13], s16, 3);
          const p8 = this._sub(i16, s16), d3 = this._dist(s16, i16);
          this._normalize(p8), this._rotateDirect(p8, _7, -u12), this._addBezier2(n19, s16, [i16[0] - p8[0] * d3, i16[1] - p8[1] * d3], [i16[0] - p8[0] * d3 * 0.8, i16[1] - p8[1] * d3 * 0.8], 3), n19.push(i16), t16.push(n19);
          break;
        }
        case R.ParallelWithTicksByWidth: {
          const s16 = this._cp2(r17, 0, -1), i16 = this._cp3(r17, s16, 0.5, 3), h8 = this._sub(s16, c5);
          this._normalize(h8);
          const e15 = this._crossProduct(h8, this._sub(i16, c5));
          this._leftPerpendicular(h8), e15 > 0 ? (this._addAngledTicks(t16, c5, [c5[0] + h8[0] * e15, c5[1] + h8[1] * e15], s16), this._addAngledTicks(t16, s16, [s16[0] + h8[0] * e15, s16[1] + h8[1] * e15], c5)) : (this._addAngledTicks(t16, [c5[0] + h8[0] * e15, c5[1] + h8[1] * e15], c5, s16), this._addAngledTicks(t16, [s16[0] + h8[0] * e15, s16[1] + h8[1] * e15], c5, s16));
          break;
        }
        case R.EnclosingRoundedRectangle: {
          const s16 = this._cp2(r17, 3, -2), t17 = [Math.min(c5[0], s16[0]), Math.max(c5[1], s16[1])], i16 = [Math.max(c5[0], s16[0]), Math.min(c5[1], s16[1])], h8 = i16[0] - t17[0], e15 = t17[1] - i16[1], _7 = Math.min(h8, e15) / 10, u12 = [];
          u12.push([t17[0] + _7 + 0.75 * (h8 - 2 * _7), t17[1]]), u12.push([i16[0] - _7, t17[1]]), this._add90DegArc(u12, [i16[0] - _7, t17[1]], [i16[0], t17[1] - _7], [i16[0], t17[1]]), u12.push([i16[0], i16[1] + _7]), this._add90DegArc(u12, [i16[0], i16[1] + _7], [i16[0] - _7, i16[1]], i16), u12.push([t17[0] + _7, i16[1]]), this._add90DegArc(u12, [t17[0] + _7, i16[1]], [t17[0], i16[1] + _7], [t17[0], i16[1]]), u12.push([t17[0], t17[1] - _7]), this._add90DegArc(u12, [t17[0], t17[1] - _7], [t17[0] + _7, t17[1]], t17), u12.push([t17[0] + _7 + 0.75 * (h8 - 2 * _7), t17[1]]);
          break;
        }
        case R.FullGeometry:
        default:
          t16.push(r17);
      }
    }
    return t16;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectCut.js
var r5 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(e15, t16, i16, r17, n19) {
    return new u8(e15, t16, i16);
  }
};
r5.instance = null;
var u8 = class extends r2 {
  constructor(e15, t16, r17) {
    super(e15, true, true), this._curveHelper = new s6(), this._beginCut = (void 0 !== t16.beginCut ? t16.beginCut : 1) * r17, this._endCut = (void 0 !== t16.endCut ? t16.endCut : 1) * r17, this._middleCut = (void 0 !== t16.middleCut ? t16.middleCut : 0) * r17, this._invert = void 0 !== t16.invert && t16.invert, this._beginCut < 0 && (this._beginCut = 0), this._endCut < 0 && (this._endCut = 0), this._middleCut < 0 && (this._middleCut = 0);
  }
  processPath(t16) {
    const { _beginCut: i16, _endCut: r17, _middleCut: u12 } = this, n19 = t16.pathLength(), s14 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._invert) {
      if (0 !== i16 || 0 !== r17 || 0 !== u12) if (i16 + r17 + u12 >= n19) for (s14.startPath(); t16.nextPoint(); ) s14.pushXY(t16.x, t16.y);
      else this._curveHelper.appendSubCurve(s14, t16, 0, i16), this._curveHelper.appendSubCurve(s14, t16, 0.5 * (n19 - u12), 0.5 * (n19 + u12)), this._curveHelper.appendSubCurve(s14, t16, n19 - r17, r17);
    } else if (0 === i16 && 0 === r17 && 0 === u12) for (s14.startPath(); t16.nextPoint(); ) s14.pushXY(t16.x, t16.y);
    else i16 + r17 + u12 < n19 && (0 === u12 ? this._curveHelper.appendSubCurve(s14, t16, i16, n19 - r17) : (this._curveHelper.appendSubCurve(s14, t16, i16, 0.5 * (n19 - u12)), this._curveHelper.appendSubCurve(s14, t16, 0.5 * (n19 + u12), n19 - r17)));
    return 0 === s14.totalSize ? null : s14;
  }
};

// node_modules/@arcgis/core/symbols/cim/GeometryWalker.js
var n8 = 1e-7;
var i7 = class {
  constructor() {
    this._values = [], this.extPtGap = 0, this.ctrlPtGap = 0, this._length = 0, this._currentValue = 0;
  }
  isEmpty() {
    return 0 === this._values.length;
  }
  size() {
    return this._values.length;
  }
  init(t16, e15, s14 = true) {
    if (this._setEmpty(), !t16 || 0 === t16.length) return false;
    for (let i16 = 0; i16 < t16.length; i16++) {
      let e16 = Math.abs(t16[i16]);
      s14 && e16 < n8 && (e16 = n8), this._values.push(e16), this._length += e16;
    }
    return e15 && 1 & t16.length && (this._length *= 2), 0 !== this._length && (this.ctrlPtGap = this.extPtGap = 0, this._currentValue = -1, true);
  }
  scale(t16) {
    const e15 = this._values ? this._values.length : 0;
    for (let s14 = 0; s14 < e15; ++s14) this._values[s14] *= t16;
    this._length *= t16, this.extPtGap *= t16, this.ctrlPtGap *= t16;
  }
  addValue(t16) {
    this._length += t16, this._values.push(t16);
  }
  firstValue() {
    return this._values[0];
  }
  lastValue() {
    return this._values[this._values.length - 1];
  }
  nextValue() {
    return this._currentValue++, this._currentValue === this._values.length && (this._currentValue = 0), this._values[this._currentValue];
  }
  reset() {
    this._currentValue = -1;
  }
  length() {
    return this._length;
  }
  _setEmpty() {
    this.extPtGap = this.ctrlPtGap = this._length = 0, this._currentValue = -1, this._values.length = 0;
  }
};
var h3 = class {
  constructor() {
    this.pt = null, this.ca = 0, this.sa = 0;
  }
};
var r6;
!function(t16) {
  t16[t16.FAIL = 0] = "FAIL", t16[t16.END = 1] = "END", t16[t16.CONTINUE = 2] = "CONTINUE";
}(r6 || (r6 = {}));
var a7 = class {
  constructor() {
    this.reset();
  }
  reset() {
    this.segment = null, this.segmentLength = 0, this.abscissa = 0, this.isPathEnd = false, this.isPartEnd = false;
  }
  isValid() {
    return null !== this.segment;
  }
  copyTo(t16) {
    t16.segment = this.segment, t16.segmentLength = this.segmentLength, t16.abscissa = this.abscissa, t16.isPathEnd = this.isPathEnd, t16.isPartEnd = this.isPartEnd;
  }
};
var o3 = class extends s6 {
  constructor(t16 = 0, e15 = false) {
    super(t16, e15), this._tolerance = n6, this._currentPosition = new a7();
  }
  updateTolerance(t16) {
    this._tolerance = n6 * t16;
  }
  init(t16, e15, s14 = true) {
    return s14 ? (this._patternLength = e15.length(), this._partExtPtGap = e15.extPtGap, this._partCtrlPtGap = e15.ctrlPtGap) : (this._patternLength = 0, this._partExtPtGap = 0, this._partCtrlPtGap = 0), this._currentPosition.reset(), this._partSegCount = 0, this._pathCursor = t16, this._seg = -1, this._setPosAtNextPart();
  }
  curPositionIsValid() {
    return this._currentPosition.isValid();
  }
  nextPosition(t16, e15 = r6.FAIL) {
    const s14 = new a7();
    return !!this._nextPosition(t16, s14, null, e15) && (s14.copyTo(this._currentPosition), true);
  }
  curPointAndAngle(t16) {
    t16.pt = this._getPoint(this._currentPosition);
    const [e15, s14] = this._getAngleCS(this._currentPosition);
    t16.ca = e15, t16.sa = s14;
  }
  nextPointAndAngle(t16, e15, s14 = r6.FAIL) {
    const n19 = new a7();
    if (!this._nextPosition(t16, n19, null, s14)) return false;
    n19.copyTo(this._currentPosition), e15.pt = this._getPoint(n19);
    const [i16, h8] = this._getAngleCS(n19);
    return e15.ca = i16, e15.sa = h8, true;
  }
  nextCurve(e15) {
    if (0 === e15) return null;
    const s14 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    s14.startPath(), s14.nextPath();
    const n19 = new a7();
    return this._nextPosition(e15, n19, s14, r6.END) ? (n19.copyTo(this._currentPosition), s14) : null;
  }
  isPathEnd() {
    return this._currentPosition.isPathEnd;
  }
  getPathEnd() {
    return this._currentPosition.segment[1];
  }
  getPt(t16) {
    return this._pathCursor.seekInPath(t16), [this._pathCursor.x, this._pathCursor.y];
  }
  getSeg(t16) {
    return [this.getPt(t16), this.getPt(t16 + 1)];
  }
  _nextPosition(t16, e15, s14, n19) {
    if (this._currentPosition.isPathEnd) return false;
    let i16 = this._currentPosition.abscissa;
    for (this._currentPosition.segmentLength > 0 && (i16 /= this._currentPosition.segmentLength), this._currentPosition.copyTo(e15); e15.abscissa + t16 * this._partLengthRatio > e15.segmentLength + this._tolerance; ) {
      if (s14) {
        if (0 === s14.pathSize) if (0 === i16) {
          const t18 = e15.segment[0];
          s14.pushXY(t18[0], t18[1]);
        } else s14.pushPoint(this.getSegCoord2D(e15.segment, i16));
        const t17 = e15.segment[1];
        s14.pushXY(t17[0], t17[1]);
      }
      if (i16 = 0, t16 -= (e15.segmentLength - e15.abscissa) / this._partLengthRatio, this._partSegCount) e15.segment = this._nextSegment(), e15.segmentLength = this.getSegLength(e15.segment), e15.abscissa = 0, this._partSegCount--;
      else {
        if (!this._setPosAtNextPart()) return n19 !== r6.FAIL && (e15.segmentLength = this.getSegLength(e15.segment), e15.isPartEnd = true, n19 === r6.END ? (e15.abscissa = e15.segmentLength, e15.isPathEnd = true) : e15.abscissa = e15.segmentLength + t16, true);
        this._currentPosition.copyTo(e15);
      }
    }
    if (e15.abscissa += t16 * this._partLengthRatio, s14) {
      0 === s14.pathSize && (0 === i16 ? s14.pushPoint(e15.segment[0]) : s14.pushPoint(this.getSegCoord2D(e15.segment, i16)));
      const t17 = e15.abscissa / e15.segmentLength;
      1 === t17 ? s14.pushPoint(e15.segment[1]) : s14.pushPoint(this.getSegCoord2D(e15.segment, t17));
    }
    return this._partSegCount || Math.abs(e15.abscissa - e15.segmentLength) < this._tolerance && (e15.isPathEnd = this._partIsLast, e15.isPartEnd = true), true;
  }
  _getPoint(t16) {
    const e15 = t16.segmentLength <= 0 ? 0 : t16.abscissa / t16.segmentLength;
    return this.getSegCoord2D(this._currentPosition.segment, e15);
  }
  _getAngleCS(t16) {
    const e15 = t16.segmentLength <= 0 ? 0 : t16.abscissa / t16.segmentLength;
    return this.getSegAngleCS(this._currentPosition.segment, e15);
  }
  _setPosAtNextPart() {
    for (; this._partSegCount; ) this._hasNextSegment() && this._nextSegment(), this._partSegCount--;
    if (!this._hasNextSegment()) return false;
    for (this._partLength = 0, this._partIsLast = true, this._partSegCount = 0; this._hasNextSegment(); ) if (this._partLength += this.getSegLength(this._nextSegment()), this._partSegCount++, this._pathCursor.getControlPointAt(this._getEndPointIndex())) {
      this._partIsLast = !this._hasNextSegment();
      break;
    }
    let t16 = this._partSegCount;
    for (; t16; ) this._previousSegment(), --t16;
    this._currentPosition.segment = this._nextSegment(), this._currentPosition.segmentLength = this.getSegLength(this._currentPosition.segment), this._currentPosition.abscissa = 0, this._currentPosition.isPathEnd = this._currentPosition.isPartEnd = false, --this._partSegCount;
    const e15 = this._getStartPointIndex();
    this._ctrlPtBegin = this._pathCursor.getControlPointAt(e15);
    let s14 = e15 + this._partSegCount + 1;
    if (s14 >= this._pathCursor.pathSize && (s14 = 0), this._ctrlPtEnd = this._pathCursor.getControlPointAt(s14), this._patternLength > 0) {
      const t17 = this._ctrlPtBegin ? this._partCtrlPtGap : this._partExtPtGap, e16 = this._ctrlPtEnd ? this._partCtrlPtGap : this._partExtPtGap;
      let s15 = Math.round((this._partLength - (t17 + e16)) / this._patternLength);
      s15 <= 0 && (s15 = t17 + e16 > 0 ? 0 : 1), this._partLengthRatio = this._partLength / (t17 + e16 + s15 * this._patternLength), this._partLengthRatio < 0.01 && (this._partLengthRatio = 1);
    } else this._partLengthRatio = 1;
    return true;
  }
  _hasNextSegment() {
    return this._seg < this._pathCursor.pathSize - 2;
  }
  _previousSegment() {
    return this.getSeg(--this._seg);
  }
  _nextSegment() {
    return this.getSeg(++this._seg);
  }
  _getStartPointIndex() {
    return this._seg;
  }
  _getEndPointIndex() {
    return this._seg + 1;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectDashes.js
var h4 = class _h {
  static local() {
    return null === _h.instance && (_h.instance = new _h()), _h.instance;
  }
  execute(t16, e15, s14, i16, r17) {
    return new l6(t16, e15, s14);
  }
};
h4.instance = null;
var l6 = class extends r2 {
  constructor(t16, e15, s14) {
    super(t16, true, true), this._firstCurve = null, this._walker = new o3(), this._walker.updateTolerance(s14), this._endings = e15.lineDashEnding, this._customDashPos = -(e15.offsetAlongLine ?? 0) * s14, this._offsetAtEnd = (e15.customEndingOffset ?? 0) * s14;
    let i16 = B2(e15).dashTemplate;
    null == i16 && (i16 = []), i16.length % 2 && (i16 = [...i16, ...i16]), this._pattern = new i7(), this._pattern.init(i16, true), this._pattern.scale(s14);
  }
  processPath(s14) {
    if (0 === this._pattern.length()) {
      this.iteratePath = false;
      const i16 = n2(s14);
      return a6.fromJSONCIM({ paths: [i16] });
    }
    if (!this.iteratePath) {
      let r18 = true;
      switch (this._endings) {
        case b2.HalfPattern:
        case b2.HalfGap:
        default:
          this._pattern.extPtGap = 0;
          break;
        case b2.FullPattern:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.firstValue());
          break;
        case b2.FullGap:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._pattern.lastValue());
          break;
        case b2.NoConstraint:
          this.isClosed || (r18 = false);
          break;
        case b2.Custom:
          this.isClosed || (this._pattern.extPtGap = 0.5 * this._offsetAtEnd);
      }
      const a14 = s14.pathLength();
      if (this._pattern.isEmpty() || a14 < 0.1 * this._pattern.length()) {
        const i16 = n2(s14);
        return a6.fromJSONCIM({ paths: [i16] });
      }
      if (!this._walker.init(s14, this._pattern, r18)) {
        const i16 = n2(s14);
        return a6.fromJSONCIM({ paths: [i16] });
      }
    }
    let r17;
    if (this.iteratePath) r17 = this._pattern.nextValue();
    else {
      let t16;
      switch (this._endings) {
        case b2.HalfPattern:
        default:
          t16 = 0.5 * this._pattern.firstValue();
          break;
        case b2.HalfGap:
          t16 = 0.5 * -this._pattern.lastValue();
          break;
        case b2.FullGap:
          t16 = -this._pattern.lastValue();
          break;
        case b2.FullPattern:
          t16 = 0;
          break;
        case b2.NoConstraint:
        case b2.Custom:
          t16 = -this._customDashPos;
      }
      let e15 = t16 / this._pattern.length();
      e15 -= Math.floor(e15), t16 = e15 * this._pattern.length(), this._pattern.reset(), r17 = this._pattern.nextValue();
      let s15 = false;
      for (; t16 >= r17; ) t16 -= r17, r17 = this._pattern.nextValue(), s15 = !s15;
      r17 -= t16, s15 ? (this._walker.nextPosition(r17), r17 = this._pattern.nextValue()) : this.isClosed && (this._firstCurve = this._walker.nextCurve(r17), r17 = this._pattern.nextValue(), this._walker.nextPosition(r17), r17 = this._pattern.nextValue());
    }
    let a13 = this._walker.nextCurve(r17);
    if (a13) if (this._walker.isPathEnd()) {
      if (this.iteratePath = false, this._firstCurve) {
        for (this._firstCurve.nextPath(); this._firstCurve.nextPoint(); ) a13.pushXY(this._firstCurve.x, this._firstCurve.y);
        this._firstCurve = null;
      }
    } else r17 = this._pattern.nextValue(), !this._walker.nextPosition(r17) || this._walker.isPathEnd() ? (this.iteratePath = false, this._firstCurve && (a13.pushCursor(this._firstCurve), this._firstCurve = null)) : this.iteratePath = true;
    else this.iteratePath = false, a13 = this._firstCurve, this._firstCurve = null;
    return a13 == null ? void 0 : a13.reset(), a13;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectDonut.js
var s8 = class _s {
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(t16, i16, e15, n19, s14, o9, h8) {
    return new r7(t16, i16, e15, n19, s14, o9, h8);
  }
};
s8.instance = null;
var r7 = class {
  constructor(t16, i16, e15, s14, r17, o9, h8) {
    switch (this._preventClipping = h8, this._inputGeometries = t16, this._tileKey = s14, this._geometryEngine = r17, this._maxInflateSize = o9 * e15, this._width = (void 0 !== i16.width ? i16.width : 2) * e15, i16.method) {
      case B.Mitered:
      case B.Bevelled:
      case B.Rounded:
      case B.TrueBuffer:
      case B.Square:
    }
    this._option = i16.option;
  }
  next() {
    let n19;
    for (; n19 = this._inputGeometries.next(); ) {
      if ("esriGeometryEnvelope" === n19.geometryType && this._width > 0) {
        const i16 = n19.asJSON();
        return Math.min(i16.xmax - i16.xmin, i16.ymax - i16.ymin) - 2 * this._width < 0 ? n19 : a6.fromJSONCIM({ paths: [[[i16.xmin + this._width, i16.ymin + this._width], [i16.xmax - this._width, i16.ymin + this._width], [i16.xmax - this._width, i16.ymax - this._width], [i16.xmin + this._width, i16.ymax - this._width], [i16.xmin + this._width, i16.ymin + this._width]], [[i16.xmin, i16.ymin], [i16.xmin, i16.ymax], [i16.xmax, i16.ymax], [i16.xmax, i16.ymin], [i16.xmin, i16.ymin]]] });
      }
      if ("esriGeometryPolygon" === n19.geometryType) {
        if (0 === this._width) return n19.clone();
        const t16 = this._geometryEngine;
        if (null == t16) return null;
        const s14 = !this._preventClipping && this._tileKey ? i6(n19, this._maxInflateSize) : n19.clone();
        if (!s14) continue;
        const r17 = t16.buffer(g.WebMercator, s14.asJSON(), -this._width, 1);
        if (r17) {
          for (const i16 of r17.rings) if (i16) {
            s14.startPath();
            for (const t17 of i16.reverse()) s14.pushXY(t17[0], s14.yFactor * t17[1]);
          }
        }
        return s14;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectJog.js
var e8 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t16, i16, s14, e15, o9) {
    return new n9(t16, i16, s14);
  }
};
e8.instance = null;
var n9 = class extends r2 {
  constructor(t16, i16, e15) {
    super(t16, false, true), this._curveHelper = new s6(), this._length = (void 0 !== i16.length ? i16.length : 20) * e15, this._angle = void 0 !== i16.angle ? i16.angle : 225, this._position = void 0 !== i16.position ? i16.position : 50, this._length < 0 && (this._length = -this._length), this._position < 20 && (this._position = 20), this._position > 80 && (this._position = 80), this._mirror = false;
  }
  processPath(i16) {
    const s14 = a6.createEmptyOptimizedCIM("esriGeometryPolyline");
    if (this._curveHelper.isEmpty(i16)) return null;
    i16.seekInPath(0);
    const e15 = i16.x, n19 = i16.y;
    i16.seekInPath(i16.pathSize - 1);
    const o9 = i16.x, r17 = i16.y, h8 = [o9 - e15, r17 - n19];
    this._curveHelper.normalize(h8);
    const l11 = e15 + (o9 - e15) * this._position / 100, _6 = n19 + (r17 - n19) * this._position / 100, a13 = Math.cos((90 - this._angle) / 180 * Math.PI);
    let p8 = Math.sin((90 - this._angle) / 180 * Math.PI);
    this._mirror && (p8 = -p8), this._mirror = !this._mirror;
    const c5 = [l11 - this._length / 2 * a13, _6 - this._length / 2 * p8], m9 = [l11 + this._length / 2 * a13, _6 + this._length / 2 * p8];
    return s14.pushPath([[e15, n19], c5, m9, [o9, r17]]), s14;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectMove.js
var t7 = class _t2 {
  static local() {
    return null === _t2.instance && (_t2.instance = new _t2()), _t2.instance;
  }
  execute(t16, s14, n19, o9, i16) {
    return new e9(t16, s14, n19);
  }
};
t7.instance = null;
var e9 = class {
  constructor(t16, e15, s14) {
    this._inputGeometries = t16, this._offsetX = void 0 !== e15.offsetX ? e15.offsetX * s14 : 0, this._offsetY = void 0 !== e15.offsetY ? e15.offsetY * s14 : 0;
  }
  next() {
    let t16 = this._inputGeometries.next();
    for (; t16; ) {
      if (t16.totalSize > 0) return this._move(t16.clone(), this._offsetX, this._offsetY);
      t16 = this._inputGeometries.next();
    }
    return null;
  }
  _move(t16, e15, s14) {
    for (; t16.nextPath(); ) for (; t16.nextPoint(); ) t16.x = t16.x + e15, t16.y = t16.y + s14;
    return t16.reset(), t16;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectOffset.js
var m6 = 10;
var h5 = class _h {
  static local() {
    return null === _h.instance && (_h.instance = new _h()), _h.instance;
  }
  execute(t16, e15, s14, o9, i16, r17, n19) {
    return new l7(t16, e15, s14, o9, i16, r17, n19);
  }
};
h5.instance = null;
var l7 = class {
  constructor(t16, e15, s14, o9, i16, f6, h8) {
    this._preventClipping = h8, this._inputGeometries = t16, this._tileKey = o9, this._geometryEngine = i16, this._curveHelper = new s6(), this._offset = (e15.offset ?? 1) * s14, this._method = e15.method, this._maxInflateSize = Math.max(Math.abs(f6 * s14), m6), this._option = e15.option, this._offsetFlattenError = n6 * s14;
  }
  next() {
    let r17;
    for (; r17 = this._inputGeometries.next(); ) {
      if (0 === this._offset) return r17.clone();
      if ("esriGeometryEnvelope" === r17.geometryType) {
        if (this._method === N.Rounded && this._offset > 0) {
          const s15 = n2(r17), o9 = this._curveHelper.offset(s15, -this._offset, this._method, 4, this._offsetFlattenError);
          if (o9) {
            const e15 = a6.createEmptyOptimizedCIM(r17.geometryType);
            return e15.pushPath(o9), e15;
          }
          return null;
        }
        const s14 = r17.asJSON();
        if (m(s14) && Math.min(s14.xmax - s14.xmin, s14.ymax - s14.ymin) + 2 * this._offset > 0) return a6.fromJSONCIM({ xmin: s14.xmin - this._offset, xmax: s14.xmax + this._offset, ymin: s14.ymin - this._offset, ymax: s14.ymax + this._offset });
      }
      const n19 = this._geometryEngine;
      if (null == n19) continue;
      const m9 = !this._preventClipping && this._tileKey ? i6(r17, this._maxInflateSize) : r17.clone();
      if (!m9) continue;
      const h8 = n19.offset(g.WebMercator, m9.asJSON(), -this._offset, 1, this._method, 4, this._offsetFlattenError);
      return h8 ? a6.fromJSONCIM(h8) : null;
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectReverse.js
var e10 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(e15, n19, r17, s14, i16) {
    return new t8(e15, n19, r17);
  }
};
e10.instance = null;
var t8 = class {
  constructor(e15, t16, n19) {
    this._inputGeometries = e15, this._reverse = void 0 === t16.reverse || t16.reverse;
  }
  next() {
    let e15 = this._inputGeometries.next();
    for (; e15; ) {
      if (!this._reverse) return e15;
      if ("esriGeometryPolyline" === e15.geometryType) return n10(e15.clone());
      e15 = this._inputGeometries.next();
    }
    return null;
  }
};
function n10(e15) {
  for (; e15.nextPath(); ) for (let t16 = 0; t16 < e15.pathSize / 2; t16++) {
    e15.seekInPath(t16);
    const n19 = e15.x, r17 = e15.y;
    e15.seekInPath(e15.pathSize - t16 - 1);
    const s14 = e15.x, i16 = e15.y;
    e15.x = n19, e15.y = r17, e15.seekInPath(t16), e15.x = s14, e15.y = i16;
  }
  return e15.reset(), e15;
}

// node_modules/@arcgis/core/symbols/cim/effects/EffectRotate.js
var e11 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t16, e15, r17, s14, o9) {
    return new n11(t16, e15, r17);
  }
};
e11.instance = null;
var n11 = class {
  constructor(t16, e15, n19) {
    this._inputGeometries = t16, this._rotateAngle = void 0 !== e15.angle ? e15.angle * Math.PI / 180 : 0;
  }
  next() {
    let e15 = this._inputGeometries.next();
    for (; e15; ) {
      if (0 === this._rotateAngle || "esriGeometryPoint" === e15.geometryType) return e15;
      if (e15.totalSize > 0) {
        const n19 = c(e15), r17 = (n19[2] + n19[0]) / 2, s14 = (n19[3] + n19[1]) / 2;
        return e15.reset(), this._rotate(e15.clone(), r17, s14);
      }
      e15 = this._inputGeometries.next();
    }
    return null;
  }
  _rotate(t16, e15, n19) {
    const r17 = Math.cos(this._rotateAngle), s14 = Math.sin(this._rotateAngle);
    for (; t16.nextPath(); ) for (; t16.nextPoint(); ) {
      const o9 = t16.x - e15, i16 = t16.y - n19;
      t16.x = e15 + o9 * r17 - i16 * s14, t16.y = n19 + o9 * s14 + i16 * r17;
    }
    return t16.reset(), t16;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectScale.js
var e12 = class _e {
  static local() {
    return null === _e.instance && (_e.instance = new _e()), _e.instance;
  }
  execute(t16, e15, o9, s14, n19) {
    return new r8(t16, e15, o9);
  }
};
e12.instance = null;
var r8 = class {
  constructor(t16, e15, r17) {
    this._inputGeometries = t16, this._xFactor = void 0 !== e15.xScaleFactor ? e15.xScaleFactor : 1.15, this._yFactor = void 0 !== e15.yScaleFactor ? e15.yScaleFactor : 1.15;
  }
  next() {
    const e15 = this._inputGeometries.next();
    if (e15) {
      if (1 === this._xFactor && 1 === this._yFactor) return e15;
      if ("esriGeometryPoint" === e15.geometryType) return e15;
      if (e15.totalSize > 0) {
        const r17 = c(e15), o9 = (r17[2] + r17[0]) / 2, s14 = (r17[3] + r17[1]) / 2;
        return e15.reset(), this._scaleCursor(e15.clone(), o9, s14);
      }
    }
    return null;
  }
  _scaleCursor(t16, e15, r17) {
    for (; t16.nextPath(); ) for (; t16.nextPoint(); ) t16.x = e15 + (t16.x - e15) * this._xFactor, t16.y = r17 + (t16.y - r17) * this._yFactor;
    return t16.reset(), t16;
  }
};

// node_modules/@arcgis/core/symbols/cim/effects/EffectWave.js
var n12 = class _n {
  static local() {
    return null === _n.instance && (_n.instance = new _n()), _n.instance;
  }
  execute(t16, e15, i16, s14, h8) {
    return new r9(t16, e15, i16);
  }
};
n12.instance = null;
var r9 = class {
  constructor(t16, e15, h8) {
    this._inputGeometries = t16, this._height = (void 0 !== e15.amplitude ? e15.amplitude : 2) * h8, this._period = (void 0 !== e15.period ? e15.period : 3) * h8, this._style = e15.waveform, this._height <= 0 && (this._height = Math.abs(this._height)), this._period <= 0 && (this._period = Math.abs(this._period)), this._pattern = new i7(), this._pattern.addValue(this._period), this._pattern.addValue(this._period), this._walker = new o3(), this._walker.updateTolerance(h8);
  }
  next() {
    let t16 = this._inputGeometries.next();
    for (; t16; ) {
      if (0 === this._height || 0 === this._period) return t16;
      const e15 = this._processGeom(t16);
      if (e15) return e15;
      t16 = this._inputGeometries.next();
    }
    return null;
  }
  _processGeom(i16) {
    const s14 = a6.createEmptyOptimizedCIM(i16.geometryType);
    for (; i16.nextPath(); ) {
      s14.startPath();
      const t16 = i16.pathLength();
      if (this._walker.init(i16, this._pattern)) switch (this._style) {
        case E.Sinus:
        default:
          this._constructCurve(s14, t16, false);
          break;
        case E.Square:
          this._constructSquare(s14, t16);
          break;
        case E.Triangle:
          this._constructTriangle(s14, t16);
          break;
        case E.Random:
          this._constructCurve(s14, t16, true);
      }
      else for (; i16.nextPoint(); ) s14.pushXY(i16.x, i16.y);
    }
    return s14;
  }
  _constructCurve(t16, e15, i16) {
    let s14 = Math.round(e15 / this._period);
    0 === s14 && (s14 = 1);
    const n19 = s14 * 16 + 1, r17 = e15 / s14, a13 = this._period / 16, o9 = 1 / n19, p8 = 2 * Math.PI * e15 / r17, _6 = 2 * Math.PI * Math.random(), u12 = 2 * Math.PI * Math.random(), l11 = 2 * Math.PI * Math.random(), c5 = 0.75 - Math.random() / 2, d3 = 0.75 - Math.random() / 2, g4 = new h3();
    this._walker.curPointAndAngle(g4), t16.pushPoint(g4.pt);
    let w5 = 0;
    for (; ; ) {
      if (!this._walker.nextPointAndAngle(a13, g4)) {
        t16.pushPoint(this._walker.getPathEnd());
        break;
      }
      {
        const e16 = w5;
        let s15;
        if (w5 += o9, i16) {
          const t17 = this._height / 2 * (1 + 0.3 * Math.sin(c5 * p8 * e16 + _6));
          s15 = t17 * Math.sin(p8 * e16 + u12), s15 += t17 * Math.sin(d3 * p8 * e16 + l11), s15 /= 2;
        } else s15 = 0.5 * this._height * Math.sin(0.5 * p8 * e16);
        t16.pushXY(g4.pt[0] - s15 * g4.sa, g4.pt[1] + s15 * g4.ca);
      }
    }
  }
  _constructSquare(t16, e15) {
    Math.round(e15 / this._period);
    let i16 = true;
    for (; ; ) {
      let e16 = false;
      if (this._walker.curPositionIsValid()) {
        const s14 = new h3();
        this._walker.curPointAndAngle(s14);
        const n19 = new h3();
        if (this._walker.nextPointAndAngle(this._period, n19)) {
          const r17 = new h3();
          this._walker.nextPointAndAngle(this._period, r17) && (i16 ? (t16.pushPoint(s14.pt), i16 = false) : t16.pushPoint(s14.pt), t16.pushXY(s14.pt[0] - this._height / 2 * s14.sa, s14.pt[1] + this._height / 2 * s14.ca), t16.pushXY(n19.pt[0] - this._height / 2 * n19.sa, n19.pt[1] + this._height / 2 * n19.ca), t16.pushXY(n19.pt[0] + this._height / 2 * n19.sa, n19.pt[1] - this._height / 2 * n19.ca), t16.pushXY(r17.pt[0] + this._height / 2 * r17.sa, r17.pt[1] - this._height / 2 * r17.ca), e16 = true);
        }
      }
      if (!e16) {
        t16.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
  _constructTriangle(t16, e15) {
    Math.round(e15 / this._period);
    let i16 = true;
    for (; ; ) {
      let e16 = false;
      if (this._walker.curPositionIsValid()) {
        const s14 = new h3();
        this._walker.curPointAndAngle(s14);
        const n19 = new h3();
        if (this._walker.nextPointAndAngle(this._period / 2, n19)) {
          const r17 = new h3();
          this._walker.nextPointAndAngle(this._period, r17) && (this._walker.nextPosition(this._period / 2) && (i16 ? (t16.pushPoint(s14.pt), i16 = false) : t16.pushPoint(s14.pt), t16.pushXY(n19.pt[0] - this._height / 2 * n19.sa, n19.pt[1] + this._height / 2 * n19.ca), t16.pushXY(r17.pt[0] + this._height / 2 * r17.sa, r17.pt[1] - this._height / 2 * r17.ca)), e16 = true);
        }
      }
      if (!e16) {
        t16.pushPoint(this._walker.getPathEnd());
        break;
      }
    }
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAlongLineSameSize.js
var a8 = class _a {
  static local() {
    return null === _a.instance && (_a.instance = new _a()), _a.instance;
  }
  execute(t16, e15, s14, i16, n19) {
    return new r10(t16, e15, s14);
  }
};
a8.instance = null;
var r10 = class extends i5 {
  constructor(t16, e15, n19) {
    super(t16), this._geometryWalker = new o3(), this._geometryWalker.updateTolerance(n19), this._angleToLine = e15.angleToLine ?? true, this._offset = (e15.offset ? e15.offset : 0) * n19, this._originalEndings = e15.endings, this._offsetAtEnd = (e15.customEndingOffset ? e15.customEndingOffset : 0) * n19, this._position = -(e15.offsetAlongLine ? e15.offsetAlongLine : 0) * n19, this._pattern = new i7(), this._pattern.init(e15.placementTemplate, false), this._pattern.scale(n19), this._endings = this._originalEndings;
  }
  processPath(t16) {
    if (this._pattern.isEmpty()) return null;
    let s14;
    if (this.iteratePath) s14 = this._pattern.nextValue();
    else {
      this._originalEndings === Z.WithFullGap && this.isClosed ? this._endings = Z.WithMarkers : this._endings = this._originalEndings, this._pattern.extPtGap = 0;
      let i17, n19 = true;
      switch (this._endings) {
        case Z.NoConstraint:
          i17 = -this._position, i17 = this._adjustPosition(i17), n19 = false;
          break;
        case Z.WithHalfGap:
        default:
          i17 = -this._pattern.lastValue() / 2;
          break;
        case Z.WithFullGap:
          i17 = -this._pattern.lastValue(), this._pattern.extPtGap = this._pattern.lastValue();
          break;
        case Z.WithMarkers:
          i17 = 0;
          break;
        case Z.Custom:
          i17 = -this._position, i17 = this._adjustPosition(i17), this._pattern.extPtGap = 0.5 * this._offsetAtEnd;
      }
      if (!this._geometryWalker.init(t16, this._pattern, n19)) return null;
      this._pattern.reset();
      let a13 = 0;
      for (; i17 > a13; ) i17 -= a13, a13 = this._pattern.nextValue();
      a13 -= i17, s14 = a13, this.iteratePath = true;
    }
    const i16 = new h3();
    return this._geometryWalker.nextPointAndAngle(s14, i16) ? this._endings === Z.WithFullGap && this._geometryWalker.isPathEnd() ? (this.iteratePath = false, null) : this._endings === Z.WithMarkers && this._geometryWalker.isPathEnd() && (this.iteratePath = false, this.isClosed) ? null : (this.internalPlacement.setTranslate(i16.pt[0] - this._offset * i16.sa, i16.pt[1] + this._offset * i16.ca), this._angleToLine && this.internalPlacement.setRotateCS(i16.ca, i16.sa), this.internalPlacement) : (this.iteratePath = false, null);
  }
  _adjustPosition(t16) {
    let e15 = t16 / this._pattern.length();
    return e15 -= Math.floor(e15), e15 * this._pattern.length();
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAtExtremities.js
var i8 = class _i {
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t16, e15, s14, i16, n19) {
    return new r11(t16, e15, s14);
  }
};
i8.instance = null;
var r11 = class extends i5 {
  constructor(t16, s14, i16) {
    super(t16, false, true), this._curveHelper = new s6(), this._placePerPart = s14.placePerPart ?? false, this._angleToLine = void 0 === s14.angleToLine || s14.angleToLine, this._offset = void 0 !== s14.offset ? s14.offset * i16 : 0, this._type = s14.extremityPlacement, this._position = void 0 !== s14.offsetAlongLine ? s14.offsetAlongLine * i16 : 0, this._beginProcessed = false;
  }
  processMultiPath(t16) {
    return this._placePerPart ? super.processMultiPath(t16) : this.processPath(t16);
  }
  processPath(t16) {
    let e15;
    switch (this._type) {
      case o.Both:
      default:
        this._beginProcessed ? (e15 = this._atExtremities(t16, this._position, false), this._beginProcessed = false, this.iterateMultiPath = false, this.iteratePath = false) : (e15 = this._atExtremities(t16, this._position, true), this._beginProcessed = true, this.iterateMultiPath = true, this.iteratePath = true);
        break;
      case o.JustBegin:
        e15 = this._atExtremities(t16, this._position, true);
        break;
      case o.JustEnd:
        e15 = this._atExtremities(t16, this._position, false);
      case o.None:
    }
    return e15;
  }
  _atExtremities(t16, e15, s14) {
    if (this._placePerPart || (s14 ? t16.seekPath(0) : t16.seekPath(t16.totalSize - 1)), s14 || t16.seekPathEnd(), s14 ? t16.nextPoint() : t16.prevPoint()) {
      let i16 = 0, [r17, n19] = [0, 0], [a13, o9] = [t16.x, t16.y];
      for (; s14 ? t16.nextPoint() : t16.prevPoint(); ) {
        r17 = a13, n19 = o9, a13 = t16.x, o9 = t16.y;
        const s15 = this._curveHelper.getLength(r17, n19, a13, o9);
        if (i16 + s15 > e15) {
          const t17 = (e15 - i16) / s15, [h8, l11] = this._curveHelper.getAngleCS(r17, n19, a13, o9, t17), c5 = this._curveHelper.getCoord2D(r17, n19, a13, o9, t17);
          return this.internalPlacement.setTranslate(c5[0] - this._offset * l11, c5[1] + this._offset * h8), this._angleToLine && this.internalPlacement.setRotateCS(-h8, -l11), this.internalPlacement;
        }
        i16 += s15;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementAtRatioPositions.js
var a9 = class _a {
  static local() {
    return null === _a.instance && (_a.instance = new _a()), _a.instance;
  }
  execute(t16, i16, s14, e15, n19) {
    return new r12(t16, i16, s14);
  }
};
a9.instance = null;
var r12 = class extends i5 {
  constructor(t16, e15, n19) {
    super(t16), this._walker = new o3(), this._walker.updateTolerance(n19), this._angleToLine = void 0 === e15.angleToLine || e15.angleToLine, this._offset = void 0 !== e15.offset ? e15.offset * n19 : 0, this._beginGap = void 0 !== e15.beginPosition ? e15.beginPosition * n19 : 0, this._endGap = void 0 !== e15.endPosition ? e15.endPosition * n19 : 0, this._flipFirst = void 0 === e15.flipFirst || e15.flipFirst, this._pattern = new i7(), this._pattern.init(e15.positionArray, false, false), this._subPathLen = 0, this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0;
  }
  processPath(t16) {
    if (this._pattern.isEmpty()) return null;
    let i16;
    if (this.iteratePath) {
      const t17 = this._pattern.nextValue() * this._subPathLen, s15 = this._beginGap + t17;
      i16 = s15 - this._prevPos, this._prevPos = s15;
    } else {
      if (this._posCount = this._pattern.size(), this._isFirst = true, this._prevPos = 0, this._subPathLen = t16.pathLength() - this._beginGap - this._endGap, this._subPathLen < 0) return this.iteratePath = false, null;
      if (!this._walker.init(t16, this._pattern, false)) return null;
      this._pattern.reset();
      const s15 = this._pattern.nextValue() * this._subPathLen, e15 = this._beginGap + s15;
      i16 = e15 - this._prevPos, this._prevPos = e15, this.iteratePath = true;
    }
    const s14 = new h3();
    if (!this._walker.nextPointAndAngle(i16, s14, r6.END)) return this.iteratePath = false, null;
    this.internalPlacement.setTranslate(s14.pt[0] - this._offset * s14.sa, s14.pt[1] + this._offset * s14.ca);
    const a13 = this._isFirst && this._flipFirst;
    let r17, h8;
    return this._angleToLine ? (r17 = s14.ca, h8 = s14.sa) : (r17 = 1, h8 = 0), a13 && (r17 = -r17, h8 = -h8), this.internalPlacement.setRotateCS(r17, h8), this._isFirst = false, this._posCount--, 0 === this._posCount && (this.iteratePath = false), this.internalPlacement;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementInsidePolygon.js
var e13 = 512;
var h6 = 10;
var n13 = 24;
var _3 = 1e-6;
var r13 = class _r {
  static local() {
    return null === _r.instance && (_r.instance = new _r()), _r.instance;
  }
  execute(t16, s14, i16, e15, h8) {
    return new a10(t16, s14, i16, e15, h8);
  }
};
r13.instance = null;
var a10 = class _a {
  constructor(h8, n19, _6, r17, a13) {
    if (this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, this._currentX = 0, this._currentY = 0, this._accelerationMap = null, this._testInsidePolygon = false, this._verticalSubdivision = true, this._stepX = Math.abs(n19.stepX ?? 16) * _6, this._stepY = Math.abs(n19.stepY ?? 16) * _6, this._stepX = Math.round(128 * this._stepX) / 128, this._stepY = Math.round(128 * this._stepY) / 128, 0 !== this._stepX && 0 !== this._stepY) {
      if (this._gridType = n19.gridType ?? K.Fixed, this._gridType === K.Random) {
        const s14 = n19.seed ?? 13, i16 = 1;
        this._randomLCG = new t(s14 * i16), this._randomness = (n19.randomness ?? 100) / 100, this._gridAngle = 0, this._shiftOddRows = false, this._cosAngle = 1, this._sinAngle = 0, this._offsetX = 0, this._offsetY = 0, this._buildRandomValues();
      } else {
        if (this._randomness = 0, this._gridAngle = n19.gridAngle ?? 0, this._shiftOddRows = n19.shiftOddRows ?? false, this._offsetX = (n19.offsetX ?? 0) * _6, this._offsetY = (n19.offsetY ?? 0) * _6, this._cosAngle = Math.cos(this._gridAngle / 180 * Math.PI), this._sinAngle = -Math.sin(this._gridAngle / 180 * Math.PI), this._stepX) if (this._offsetX < 0) for (; this._offsetX < -0.5 * this._stepX; ) this._offsetX += this._stepX;
        else for (; this._offsetX >= 0.5 * this._stepX; ) this._offsetX -= this._stepX;
        if (this._stepY) if (this._offsetY < 0) for (; this._offsetY < -0.5 * this._stepY; ) this._offsetY += this._stepY;
        else for (; this._offsetY >= 0.5 * this._stepY; ) this._offsetY -= this._stepY;
      }
      if (this._graphicOriginX = 0, this._graphicOriginY = 0, null != r17) {
        const [t16, s14, i16, h9] = r17.split("/"), n20 = parseFloat(t16), _7 = parseFloat(s14), a14 = parseFloat(i16), o9 = parseFloat(h9);
        this._graphicOriginX = -(o9 * 2 ** n20 + a14) * e13, this._graphicOriginY = _7 * e13, this._testInsidePolygon = true;
      }
      this._internalPlacement = new t6(), this._calculateMinMax(h8), this._geometryCursor = h8;
    }
  }
  next() {
    return this._geometryCursor ? this._nextInside() : null;
  }
  _buildRandomValues() {
    if (!_a._randValues) {
      _a._randValues = [];
      for (let t16 = 0; t16 < n13; t16++) for (let s14 = 0; s14 < n13; s14++) _a._randValues.push(this._randomLCG.getFloat()), _a._randValues.push(this._randomLCG.getFloat());
    }
  }
  _calculateMinMax(t16) {
    let s14, i16, h8, n19, _6, r17, a13, o9, l11, f6, c5, u12, p8, M5;
    this._xMin = 0, this._xMax = 0, this._yMin = 0, this._yMax = 0, a13 = o9 = p8 = c5 = Number.MAX_VALUE, l11 = f6 = M5 = u12 = -Number.MAX_VALUE;
    const g4 = 1 !== this._cosAngle;
    for (t16.reset(); t16.nextPath(); ) for (; t16.nextPoint(); ) r17 = t16.x, _6 = t16.y, s14 = r17 - this._graphicOriginX - this._offsetX, i16 = _6 - this._graphicOriginY - this._offsetY, g4 ? (h8 = this._cosAngle * s14 - this._sinAngle * i16, n19 = this._sinAngle * s14 + this._cosAngle * i16) : (h8 = s14, n19 = i16), a13 = Math.min(a13, h8), l11 = Math.max(l11, h8), o9 = Math.min(o9, n19), f6 = Math.max(f6, n19), c5 = Math.min(c5, _6), u12 = Math.max(u12, _6), p8 = Math.min(p8, r17), M5 = Math.max(M5, r17);
    c5 = c5 !== Number.MAX_VALUE ? c5 : -512 - this._stepY, u12 = u12 !== -Number.MAX_VALUE ? u12 : this._stepY, p8 = p8 !== Number.MAX_VALUE ? p8 : -this._stepX, M5 = M5 !== -Number.MAX_VALUE ? M5 : e13 + this._stepX;
    const d3 = u12 - c5, X2 = M5 - p8;
    if (this._verticalSubdivision = d3 >= X2, this._polygonMin = this._verticalSubdivision ? c5 : p8, this._testInsidePolygon) {
      let t17 = 0 - this._graphicOriginX - this._offsetX - this._stepX, s15 = e13 - this._graphicOriginX - this._offsetX + this._stepX, i17 = -512 - this._graphicOriginY - this._offsetY - this._stepY, h9 = 0 - this._graphicOriginY - this._offsetY + this._stepY;
      if (g4) {
        const e15 = [[t17, i17], [t17, h9], [s15, i17], [s15, h9]];
        t17 = i17 = Number.MAX_VALUE, s15 = h9 = -Number.MAX_VALUE;
        for (const n20 of e15) {
          const e16 = this._cosAngle * n20[0] - this._sinAngle * n20[1], _7 = this._sinAngle * n20[0] + this._cosAngle * n20[1];
          t17 = Math.min(t17, e16), s15 = Math.max(s15, e16), i17 = Math.min(i17, _7), h9 = Math.max(h9, _7);
        }
      }
      a13 = a13 !== Number.MAX_VALUE ? Math.max(a13, t17) : t17, o9 = o9 !== Number.MAX_VALUE ? Math.max(o9, i17) : i17, l11 = l11 !== -Number.MAX_VALUE ? Math.min(l11, s15) : s15, f6 = f6 !== -Number.MAX_VALUE ? Math.min(f6, h9) : h9;
    }
    this._xMin = Math.round(a13 / this._stepX), this._xMax = Math.round(l11 / this._stepX), this._yMin = Math.round(o9 / this._stepY), this._yMax = Math.round(f6 / this._stepY), this._currentX = this._xMax + 1, this._currentY = this._yMin - 1, this._buildAccelerationMap(t16, p8, M5, c5, u12);
  }
  _buildAccelerationMap(t16, s14, i16, n19, _6) {
    t16.reset();
    const r17 = /* @__PURE__ */ new Map(), a13 = this._verticalSubdivision, o9 = a13 ? _6 - n19 : i16 - s14;
    let f6 = Math.ceil(o9 / h6);
    if (f6 <= 1) return;
    const c5 = Math.floor(o9 / f6);
    let u12, p8, M5, g4, d3, X2, m9, x4, A5, Y3, y6;
    for (f6++, this._delta = c5, a13 ? (A5 = -512 - 2 * this._stepY, Y3 = 2 * this._stepY, y6 = n19) : (A5 = -2 * this._stepX, Y3 = e13 + 2 * this._stepX, y6 = s14); t16.nextPath(); ) if (!(t16.pathSize < 2) && t16.nextPoint()) for (u12 = t16.x, p8 = t16.y; t16.nextPoint(); u12 = M5, p8 = g4) {
      if (M5 = t16.x, g4 = t16.y, a13) {
        if (p8 === g4 || p8 < A5 && g4 < A5 || p8 > Y3 && g4 > Y3) continue;
        d3 = Math.min(p8, g4), X2 = Math.max(p8, g4);
      } else {
        if (u12 === M5 || u12 < A5 && M5 < A5 || u12 > Y3 && M5 > Y3) continue;
        d3 = Math.min(u12, M5), X2 = Math.max(u12, M5);
      }
      for (; d3 < X2; ) m9 = Math.floor((d3 - y6) / c5), l8(m9, u12, p8, M5, g4, r17), d3 += c5;
      x4 = Math.floor((X2 - y6) / c5), x4 > m9 && l8(x4, u12, p8, M5, g4, r17);
    }
    this._accelerationMap = r17;
  }
  _nextInside() {
    for (; ; ) {
      if (this._currentX > this._xMax) {
        if (this._currentY++, this._currentY > this._yMax) return null;
        this._currentX = this._xMin, this._shiftOddRows && this._currentY % 2 && this._currentX--;
      }
      let t16 = this._currentX * this._stepX + this._offsetX;
      this._shiftOddRows && this._currentY % 2 && (t16 += 0.5 * this._stepX);
      const s14 = this._currentY * this._stepY + this._offsetY;
      let e15, h8;
      if (this._currentX++, this._gridType === K.Random) {
        const i16 = (this._currentX % n13 + n13) % n13, _6 = (this._currentY % n13 + n13) % n13;
        e15 = this._graphicOriginX + t16 + this._stepX * this._randomness * (0.5 - _a._randValues[_6 * n13 + i16]) * 2 / 3, h8 = this._graphicOriginY + s14 + this._stepY * this._randomness * (0.5 - _a._randValues[_6 * n13 + i16 + 1]) * 2 / 3;
      } else e15 = this._graphicOriginX + this._cosAngle * t16 + this._sinAngle * s14, h8 = this._graphicOriginY - this._sinAngle * t16 + this._cosAngle * s14;
      if (!this._testInsidePolygon || this._isInsidePolygon(e15, h8, this._geometryCursor)) return this._internalPlacement.setTranslate(e15, h8), this._internalPlacement;
    }
  }
  _isInsidePolygon(t16, s14, i16) {
    if (null == this._accelerationMap) return o4(t16, s14, i16);
    t16 += _3, s14 += _3;
    const e15 = this._verticalSubdivision, h8 = e15 ? s14 : t16, n19 = Math.floor((h8 - this._polygonMin) / this._delta), r17 = this._accelerationMap.get(n19);
    if (!r17) return false;
    let a13, l11, f6, c5 = 0;
    for (const _6 of r17) {
      if (a13 = _6[0], l11 = _6[1], e15) {
        if (a13[1] > s14 == l11[1] > s14) continue;
        f6 = (l11[0] - a13[0]) * (s14 - a13[1]) - (l11[1] - a13[1]) * (t16 - a13[0]);
      } else {
        if (a13[0] > t16 == l11[0] > t16) continue;
        f6 = (l11[1] - a13[1]) * (t16 - a13[0]) - (l11[0] - a13[0]) * (s14 - a13[1]);
      }
      f6 > 0 ? c5++ : c5--;
    }
    return 0 !== c5;
  }
};
function o4(t16, s14, i16) {
  let e15, h8, n19, r17, a13 = 0;
  for (t16 += _3, s14 += _3, i16.reset(); i16.nextPath(); ) if (i16.nextPoint()) for (e15 = i16.x, h8 = i16.y; i16.nextPoint(); e15 = n19, h8 = r17) {
    if (n19 = i16.x, r17 = i16.y, h8 > s14 == r17 > s14) continue;
    (n19 - e15) * (s14 - h8) - (r17 - h8) * (t16 - e15) > 0 ? a13++ : a13--;
  }
  return 0 !== a13;
}
function l8(t16, s14, i16, e15, h8, n19) {
  let _6 = n19.get(t16);
  _6 || (_6 = [], n19.set(t16, _6)), _6.push([[s14, i16], [e15, h8]]);
}

// node_modules/@arcgis/core/symbols/cim/placements/PlacementOnLine.js
var i9 = 1e-3;
var s9 = class _s {
  static local() {
    return null === _s.instance && (_s.instance = new _s()), _s.instance;
  }
  execute(e15, t16, n19, i16, s14) {
    return new r14(e15, t16, n19);
  }
};
s9.instance = null;
var r14 = class extends i5 {
  constructor(e15, n19, s14) {
    super(e15), this._curveHelper = new s6(), this._angleToLine = void 0 === n19.angleToLine || n19.angleToLine, this._offset = void 0 !== n19.offset ? n19.offset * s14 : 0, this._relativeTo = n19.relativeTo, this._position = void 0 !== n19.startPointOffset ? n19.startPointOffset * s14 : 0, this._epsilon = i9 * s14;
  }
  processPath(e15) {
    const t16 = this._position;
    if (this._relativeTo === Q.SegmentMidpoint) {
      if (this.iteratePath || (this.iteratePath = true), e15.nextPoint()) {
        let [t17, n19] = [e15.x, e15.y], [i17, s14] = [0, 0];
        for (; e15.nextPoint(); ) {
          i17 = e15.x, s14 = e15.y;
          const r17 = this._curveHelper.getLength(t17, n19, i17, s14);
          if (r17 < this._epsilon) {
            t17 = i17, n19 = s14;
            continue;
          }
          const o9 = 0.5 + this._position / r17, [a13, l11] = this._curveHelper.getAngleCS(t17, n19, i17, s14, o9), h8 = this._curveHelper.getCoord2D(t17, n19, i17, s14, o9);
          return this.internalPlacement.setTranslate(h8[0] - this._offset * l11, h8[1] + this._offset * a13), this._angleToLine && this.internalPlacement.setRotateCS(a13, l11), this.internalPlacement;
        }
      }
      return this.iteratePath = false, null;
    }
    const i16 = this._relativeTo === Q.LineEnd;
    return this.onLine(e15, t16, i16);
  }
  onLine(e15, t16, i16) {
    let s14, r17 = false;
    switch (this._relativeTo) {
      case Q.LineMiddle:
      default:
        e15.seekPathStart(), s14 = e15.pathLength() / 2 + t16;
        break;
      case Q.LineBeginning:
        s14 = t16;
        break;
      case Q.LineEnd:
        s14 = t16, r17 = true;
    }
    i16 ? e15.seekPathEnd() : e15.seekPathStart();
    let o9 = 0;
    if (i16 ? e15.prevPoint() : e15.nextPoint()) {
      let [t17, n19] = [e15.x, e15.y], [a13, l11] = [0, 0];
      for (; i16 ? e15.prevPoint() : e15.nextPoint(); ) {
        a13 = e15.x, l11 = e15.y;
        const i17 = this._curveHelper.getLength(t17, n19, a13, l11);
        if (o9 + i17 > s14) {
          const e16 = (s14 - o9) / i17, [h8, c5] = this._curveHelper.getAngleCS(t17, n19, a13, l11, e16), f6 = this._curveHelper.getCoord2D(t17, n19, a13, l11, e16), u12 = r17 ? -this._offset : this._offset;
          return this.internalPlacement.setTranslate(f6[0] - u12 * c5, f6[1] + u12 * h8), this._angleToLine && (r17 ? this.internalPlacement.setRotateCS(-h8, -c5) : this.internalPlacement.setRotateCS(h8, c5)), this.internalPlacement;
        }
        t17 = a13, n19 = l11, o9 += i17;
      }
    }
    return null;
  }
};

// node_modules/@arcgis/core/symbols/cim/placements/PlacementOnVertices.js
var s10 = 1e-15;
var i10 = class _i {
  static local() {
    return null === _i.instance && (_i.instance = new _i()), _i.instance;
  }
  execute(t16, e15, s14, i16, o9) {
    return new n14(t16, e15, s14);
  }
};
i10.instance = null;
var n14 = class extends i5 {
  constructor(t16, s14, i16) {
    super(t16), this._curveHelper = new s6(), this._angleToLine = void 0 === s14.angleToLine || s14.angleToLine, this._offset = void 0 !== s14.offset ? s14.offset * i16 : 0, this._endPoints = void 0 === s14.placeOnEndPoints || s14.placeOnEndPoints, this._controlPoints = void 0 === s14.placeOnControlPoints || s14.placeOnControlPoints, this._regularVertices = void 0 === s14.placeOnRegularVertices || s14.placeOnRegularVertices, this._tags = [], this._tagIterator = 0;
  }
  processPath(t16) {
    if (this.iteratePath || (this._preparePath(t16), this.iteratePath = true), this._tagIterator >= this._tags.length) return this._tags.length = 0, this._tagIterator = 0, this.iteratePath = false, null;
    const e15 = this._tags[this._tagIterator];
    this._angleToLine && this.internalPlacement.setRotate(e15[2]);
    let s14 = e15[0], i16 = e15[1];
    if (0 !== this._offset) {
      const t17 = Math.cos(e15[2]), n19 = Math.sin(e15[2]);
      s14 -= this._offset * n19, i16 += this._offset * t17;
    }
    return this.internalPlacement.setTranslate(s14, i16), this._tagIterator++, this.internalPlacement;
  }
  _preparePath(t16) {
    this._tags.length = 0, this._tagIterator = 0, t16.seekPathStart();
    const e15 = t16.isClosed();
    let s14 = 0, i16 = false, n19 = 0, r17 = 0;
    if (t16.seekPathStart(), t16.nextPoint()) {
      let a13 = t16.x, h8 = t16.y, l11 = t16.getControlPoint(), _6 = true, c5 = t16.nextPoint();
      for (; c5; ) {
        const g4 = t16.x, P5 = t16.y, u12 = t16.getControlPoint();
        (this._angleToLine || 0 !== this._offset) && (n19 = this._curveHelper.getAngle(a13, h8, g4, P5, 0)), _6 ? (_6 = false, e15 ? (s14 = n19, i16 = l11) : (this._endPoints || this._controlPoints && l11) && this._tags.push([a13, h8, n19])) : l11 ? this._controlPoints && this._tags.push([a13, h8, o5(r17, n19)]) : this._regularVertices && this._tags.push([a13, h8, o5(r17, n19)]), (this._angleToLine || 0 !== this._offset) && (r17 = this._curveHelper.getAngle(a13, h8, g4, P5, 1)), c5 = t16.nextPoint(), c5 || (e15 ? u12 || i16 ? this._controlPoints && this._tags.push([g4, P5, o5(r17, s14)]) : this._regularVertices && this._tags.push([g4, P5, o5(r17, s14)]) : (this._endPoints || this._controlPoints && u12) && this._tags.push([g4, P5, r17])), a13 = g4, h8 = P5, l11 = u12;
      }
    }
    this._tagIterator = 0;
  }
};
function o5(t16, e15) {
  const i16 = Math.PI;
  for (; Math.abs(e15 - t16) > i16 + 2 * s10; ) e15 - t16 > i16 ? e15 -= 2 * i16 : e15 += 2 * i16;
  return (t16 + e15) / 2;
}

// node_modules/@arcgis/core/geometry/support/labelPoint.js
var N3 = 100 * 222045e-21;
function l9(t16) {
  if (0 === t16.totalSize) return null;
  const a13 = c(t16);
  if (!a13) return null;
  const o9 = 4 * (Math.abs(a13[0]) + Math.abs(a13[2]) + Math.abs(a13[1]) + Math.abs(a13[3]) + 1) * N3;
  let s14 = 0, c5 = 0;
  t16.reset();
  for (let e15 = 0; t16.nextPath(); e15++) {
    const n19 = t16.getCurrentRingArea();
    n19 > c5 && (c5 = n19, s14 = e15);
  }
  if (t16.seekPath(s14), 0 === t16.pathSize) return null;
  t16.seekPathStart();
  const l11 = f4(t16);
  if (Math.abs(c5) <= 2 * o9 * o9) return [(l11[0] + l11[2]) / 2, (l11[1] + l11[3]) / 2];
  t16.seekPathStart();
  const x4 = i(t16, u());
  if (null === x4) return null;
  if (t16.totalPoints < 4) return x4;
  const m9 = [[NaN, NaN], [NaN, NaN], [NaN, NaN], [NaN, NaN]], d3 = [NaN, NaN, NaN, NaN], P5 = [NaN, NaN, NaN, NaN];
  let y6 = false, M5 = f5(x4, t16, true);
  0 === M5.distance && (y6 = true, m9[0][0] = x4[0], m9[0][1] = x4[1], M5 = f5(x4, t16, false)), d3[0] = M5.distance, P5[0] = 0;
  const b5 = [NaN, NaN];
  let S3 = false, k2 = 0.25, z2 = -1, g4 = NaN;
  do {
    if (g4 = NaN, m9[1] = h7(t16, w3(l11[0], l11[2], k2), o9, a13), isNaN(m9[1][0]) || isNaN(m9[1][1]) || (M5 = f5(m9[1], t16, false), g4 = M5.distance), !isNaN(g4) && g4 > o9 && u10(m9[1], t16)) S3 = true, d3[1] = g4, P5[1] = p6(m9[1], x4);
    else if (!isNaN(g4) && g4 > z2 && (z2 = g4, b5[0] = m9[1][0], b5[1] = m9[1][1]), k2 -= 0.01, k2 < 0.1) {
      if (!(z2 >= 0)) break;
      S3 = true, d3[1] = z2, m9[1][0] = b5[0], m9[1][1] = b5[1], P5[1] = p6(m9[1], x4);
    }
  } while (!S3);
  S3 = false, k2 = 0.5, z2 = -1;
  let q2 = 0.01, j3 = 1;
  do {
    if (g4 = NaN, m9[2] = h7(t16, w3(l11[0], l11[2], k2), o9, a13), isNaN(m9[2][0]) || isNaN(m9[2][1]) || (M5 = f5(m9[2], t16, false), g4 = M5.distance), !isNaN(g4) && g4 > o9 && u10(m9[2], t16)) S3 = true, d3[2] = g4, P5[2] = p6(m9[2], x4);
    else if (!isNaN(g4) && g4 > z2) z2 = g4, b5[0] = m9[2][0], b5[1] = m9[2][1];
    else if (g4 > z2 && (z2 = g4, b5[0] = m9[2][0], b5[1] = m9[2][1]), k2 = 0.5 + q2 * j3, q2 += 0.01, j3 *= -1, k2 < 0.3 || k2 > 0.7) {
      if (!(z2 >= 0)) break;
      S3 = true, d3[2] = z2, m9[2][0] = b5[0], m9[2][1] = b5[1], P5[2] = p6(m9[2], x4);
    }
  } while (!S3);
  S3 = false, k2 = 0.75, z2 = -1;
  do {
    if (g4 = NaN, m9[3] = h7(t16, w3(l11[0], l11[2], k2), o9, a13), isNaN(m9[3][0]) || isNaN(m9[3][1]) || (M5 = f5(m9[3], t16, false), g4 = M5.distance), !isNaN(g4) && g4 > o9 && u10(m9[3], t16)) S3 = true, d3[3] = g4, P5[3] = p6(m9[3], x4);
    else if (g4 > z2 && (z2 = g4, b5[0] = m9[3][0], b5[1] = m9[3][1]), k2 += 0.01, k2 > 0.9) {
      if (!(z2 >= 0)) break;
      S3 = true, d3[3] = z2, m9[3][0] = b5[0], m9[3][1] = b5[1], P5[3] = p6(m9[3], x4);
    }
  } while (!S3);
  const T4 = [0, 1, 2, 3], D = y6 ? 0 : 1;
  let R3;
  for (let e15 = D; e15 < 4; e15++) for (let t17 = D; t17 < 3; t17++) {
    const e16 = P5[t17], n19 = P5[t17 + 1];
    C3(e16, n19) > 0 && (R3 = T4[t17], T4[t17] = T4[t17 + 1], T4[t17 + 1] = R3, P5[t17] = n19, P5[t17 + 1] = e16);
  }
  let B4 = D, Q4 = 0, U2 = 0;
  for (let e15 = D; e15 < 4; e15++) {
    switch (e15) {
      case 0:
        U2 = 2 * d3[T4[e15]];
        break;
      case 1:
        U2 = 1.66666666 * d3[T4[e15]];
        break;
      case 2:
        U2 = 1.33333333 * d3[T4[e15]];
        break;
      case 3:
        U2 = d3[T4[e15]];
    }
    U2 > Q4 && (Q4 = U2, B4 = T4[e15]);
  }
  return m9[B4];
}
function u10(t16, e15) {
  let n19, i16, r17, a13, o9 = 0;
  for (e15.reset(); e15.nextPath() && e15.nextPoint(); ) for (n19 = e15.x, i16 = e15.y; e15.nextPoint(); n19 = r17, i16 = a13) {
    if (r17 = e15.x, a13 = e15.y, i16 > t16[1] == a13 > t16[1]) continue;
    (r17 - n19) * (t16[1] - i16) - (a13 - i16) * (t16[0] - n19) > 0 ? o9++ : o9--;
  }
  return 0 !== o9;
}
function f5(t16, e15, n19) {
  if (n19 && u10(t16, e15)) return { coord: t16, distance: 0 };
  let i16 = 1 / 0, r17 = 0, a13 = 0, s14 = [0, 0], c5 = [0, 0];
  const N5 = [0, 0];
  for (e15.reset(); e15.nextPath() && e15.nextPoint(); ) if (!(e15.pathSize < 2)) for (s14[0] = e15.x, s14[1] = e15.y; e15.nextPoint(); s14 = c5) {
    c5 = [e15.x, e15.y], f(N5, t16, s14, c5);
    const n20 = p6(t16, N5);
    n20 < i16 && (i16 = n20, r17 = N5[0], a13 = N5[1]);
  }
  return { coord: [r17, a13], distance: Math.sqrt(i16) };
}
function h7(t16, n19, i16, r17) {
  const a13 = [n19, 0];
  let o9 = 1 / 0, s14 = 1 / 0, N5 = false, l11 = false;
  const u12 = [[n19, r17[1] - 1], [n19, r17[3] + 1]], f6 = [0, 0], h8 = [0, 0], m9 = [0, 0], d3 = [[0, 0], [0, 0]], P5 = u();
  for (t16.reset(); t16.nextPath() && t16.nextPoint(); ) if (!(t16.pathSize < 2)) for (d3[0][0] = t16.x, d3[0][1] = t16.y; t16.nextPoint(); d3[0][0] = d3[1][0], d3[0][1] = d3[1][1]) {
    if (d3[1][0] = t16.x, d3[1][1] = t16.y, null === x2(P5, d3)) continue;
    if (h8[0] = u12[0][0], h8[1] = u12[0][1], m9[0] = u12[1][0], m9[1] = u12[1][1], 0 === M3(P5, h8, m9)) continue;
    if (!G(u12[0], u12[1], d3[0], d3[1], f6)) continue;
    const e15 = f6[1];
    o9 > s14 ? e15 < o9 && (o9 = e15, N5 = true) : e15 < s14 && (s14 = e15, l11 = true);
  }
  return N5 && l11 ? a13[1] = (o9 + s14) / 2 : a13[0] = a13[1] = NaN, a13;
}
function x2(t16, n19) {
  if (n19.length < 2) return null;
  t16 || (t16 = u());
  const [i16, r17] = n19[0], [a13, o9] = n19[1];
  return t16[0] = Math.min(i16, a13), t16[1] = Math.min(r17, o9), t16[2] = Math.max(i16, a13), t16[3] = Math.max(r17, o9), t16;
}
var m7 = 1;
var d2 = 4;
var P4 = 3;
var y4 = 12;
function M3(t16, e15, n19) {
  let i16 = b3(e15, t16), r17 = b3(n19, t16);
  const a13 = t16[0], o9 = t16[1], s14 = t16[2], c5 = t16[3];
  if (i16 & r17) return 0;
  if (!(i16 | r17)) return 4;
  const N5 = (i16 ? 1 : 0) | (r17 ? 2 : 0);
  do {
    const N6 = n19[0] - e15[0], l11 = n19[1] - e15[1];
    if (N6 > l11) i16 & P4 ? (i16 & m7 ? (e15[1] += l11 * (a13 - e15[0]) / N6, e15[0] = a13) : (e15[1] += l11 * (s14 - e15[0]) / N6, e15[0] = s14), i16 = b3(e15, t16)) : r17 & P4 ? (r17 & m7 ? (n19[1] += l11 * (a13 - n19[0]) / N6, n19[0] = a13) : (n19[1] += l11 * (s14 - n19[0]) / N6, n19[0] = s14), r17 = b3(n19, t16)) : i16 ? (i16 & d2 ? (e15[0] += N6 * (o9 - e15[1]) / l11, e15[1] = o9) : (e15[0] += N6 * (c5 - e15[1]) / l11, e15[1] = c5), i16 = b3(e15, t16)) : (r17 & d2 ? (n19[0] += N6 * (o9 - n19[1]) / l11, n19[1] = o9) : (n19[0] += N6 * (c5 - n19[1]) / l11, n19[1] = c5), r17 = b3(n19, t16));
    else if (i16 & y4 ? (i16 & d2 ? (e15[0] += N6 * (o9 - e15[1]) / l11, e15[1] = o9) : (e15[0] += N6 * (c5 - e15[1]) / l11, e15[1] = c5), i16 = b3(e15, t16)) : r17 & y4 ? (r17 & d2 ? (n19[0] += N6 * (o9 - n19[1]) / l11, n19[1] = o9) : (n19[0] += N6 * (c5 - n19[1]) / l11, n19[1] = c5), r17 = b3(n19, t16)) : i16 ? (i16 & m7 ? (e15[1] += l11 * (a13 - e15[0]) / N6, e15[0] = a13) : (e15[1] += l11 * (s14 - e15[0]) / N6, e15[0] = s14), i16 = b3(e15, t16)) : (r17 & m7 ? (n19[1] += l11 * (a13 - n19[0]) / N6, n19[0] = a13) : (n19[1] += l11 * (s14 - n19[0]) / N6, n19[0] = s14), r17 = b3(n19, t16)), i16 & r17) return 0;
  } while (i16 | r17);
  return N5;
}
function b3(t16, e15) {
  return (t16[0] < e15[0] ? 1 : 0) | (t16[0] > e15[2] ? 1 : 0) << 1 | (t16[1] < e15[1] ? 1 : 0) << 2 | (t16[1] > e15[3] ? 1 : 0) << 3;
}
function w3(t16, e15, n19) {
  return t16 + (e15 - t16) * n19;
}
function p6(t16, e15) {
  return (t16[0] - e15[0]) * (t16[0] - e15[0]) + (t16[1] - e15[1]) * (t16[1] - e15[1]);
}
function C3(t16, e15) {
  if (t16 < e15) return -1;
  if (t16 > e15) return 1;
  if (t16 === e15) return 0;
  const n19 = isNaN(t16), i16 = isNaN(e15);
  return n19 < i16 ? -1 : n19 > i16 ? 1 : 0;
}

// node_modules/@arcgis/core/symbols/cim/placements/PlacementPolygonCenter.js
var o6 = class _o {
  static local() {
    return null === _o.instance && (_o.instance = new _o()), _o.instance;
  }
  execute(t16, e15, s14, n19, r17) {
    return new i11(t16, e15, s14);
  }
};
o6.instance = null;
var i11 = class {
  constructor(t16, e15, s14) {
    this._geometryCursor = t16, this._offsetX = void 0 !== e15.offsetX ? e15.offsetX * s14 : 0, this._offsetY = void 0 !== e15.offsetY ? e15.offsetY * s14 : 0, this._method = void 0 !== e15.method ? e15.method : V.OnPolygon, this._placementPerPart = void 0 !== e15.placePerPart && e15.placePerPart, this._internalPlacement = new t6();
  }
  next() {
    const t16 = this._geometryCursor;
    if (!t16) return null;
    if (!this._placementPerPart) return this._geometryCursor = null, this._polygonCenter(t16);
    for (; t16.nextPath(); ) if (!(t16.getCurrentRingArea() < 0)) return this._polygonCenter(t16.getCurrentPath());
    return this._geometryCursor = null, null;
  }
  _polygonCenter(n19) {
    let o9 = false;
    switch (this._method) {
      case V.CenterOfMass:
        {
          const t16 = f2(n19);
          t16 && (this._internalPlacement.setTranslate(t16[0] + this._offsetX, t16[1] + this._offsetY), o9 = true);
        }
        break;
      case V.BoundingBoxCenter:
        {
          const e15 = c(n19);
          e15 && (this._internalPlacement.setTranslate((e15[2] + e15[0]) / 2 + this._offsetX, (e15[3] + e15[1]) / 2 + this._offsetY), o9 = true);
        }
        break;
      case V.OnPolygon:
      default: {
        const t16 = l9(n19);
        null !== t16 && (this._internalPlacement.setTranslate(t16[0] + this._offsetX, t16[1] + this._offsetY), o9 = true);
      }
    }
    return o9 ? this._internalPlacement : null;
  }
};

// node_modules/@arcgis/core/views/2d/engine/webgl/alignmentUtils.js
var t10 = () => n.getLogger("esri.views.2d.engine.webgl.alignmentUtils");
var r15;
var n15;
function a11(e15) {
  if (!e15) return r15.Center;
  switch (e15) {
    case "Left":
    case "left":
      return r15.Left;
    case "Right":
    case "right":
      return r15.Right;
    case "Justify":
      return t10().warnOnce("Horizontal alignment 'justify' is not implemented. Falling back to 'center'."), r15.Center;
    case "Center":
    case "center":
      return r15.Center;
  }
}
function c4(e15) {
  if (!e15) return n15.Center;
  switch (e15) {
    case "Top":
    case "top":
      return n15.Top;
    case "Center":
    case "middle":
      return n15.Center;
    case "Baseline":
    case "baseline":
      return n15.Baseline;
    case "Bottom":
    case "bottom":
      return n15.Bottom;
  }
}
function o7(e15) {
  switch (e15) {
    case "above-left":
    case "esriServerPointLabelPlacementAboveLeft":
      return ["right", "bottom"];
    case "above-center":
    case "above-along":
    case "esriServerPointLabelPlacementAboveCenter":
    case "esriServerLinePlacementAboveAlong":
      return ["center", "bottom"];
    case "above-right":
    case "esriServerPointLabelPlacementAboveRight":
      return ["left", "bottom"];
    case "center-left":
    case "esriServerPointLabelPlacementCenterLeft":
      return ["right", "middle"];
    case "center-center":
    case "center-along":
    case "esriServerPointLabelPlacementCenterCenter":
    case "esriServerLinePlacementCenterAlong":
    case "always-horizontal":
    case "esriServerPolygonPlacementAlwaysHorizontal":
      return ["center", "middle"];
    case "center-right":
    case "esriServerPointLabelPlacementCenterRight":
      return ["left", "middle"];
    case "below-left":
    case "esriServerPointLabelPlacementBelowLeft":
      return ["right", "top"];
    case "below-center":
    case "below-along":
    case "esriServerPointLabelPlacementBelowCenter":
    case "esriServerLinePlacementBelowAlong":
      return ["center", "top"];
    case "below-right":
    case "esriServerPointLabelPlacementBelowRight":
      return ["left", "top"];
    default:
      return console.debug(`Found invalid placement type ${e15}`), ["center", "middle"];
  }
}
function i12(e15) {
  switch (e15) {
    case r15.Right:
    case "right":
      return -1;
    case r15.Center:
    case "center":
      return 0;
    case r15.Left:
    case "left":
      return 1;
    default:
      return console.debug(`Found invalid horizontal alignment ${e15}`), 0;
  }
}
function s11(e15) {
  switch (e15) {
    case n15.Top:
    case "top":
      return 1;
    case n15.Center:
    case "middle":
      return 0;
    case n15.Bottom:
    case n15.Baseline:
    case "baseline":
    case "bottom":
      return -1;
    default:
      return console.debug(`Found invalid vertical alignment ${e15}`), 0;
  }
}
!function(e15) {
  e15[e15.Left = -1] = "Left", e15[e15.Center = 0] = "Center", e15[e15.Right = 1] = "Right";
}(r15 || (r15 = {})), function(e15) {
  e15[e15.Top = 1] = "Top", e15[e15.Center = 0] = "Center", e15[e15.Bottom = -1] = "Bottom", e15[e15.Baseline = 2] = "Baseline";
}(n15 || (n15 = {}));

// node_modules/@arcgis/core/symbols/cim/CIMImageColorSubstitutionHelper.js
var t11 = class {
  applyColorSubstitution(t16, a13) {
    if (!a13) return t16;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e15, height: n19 } = t16, o9 = this._rasterizationCanvas, r17 = o9.getContext("2d", { willReadFrequently: true });
    t16 !== o9 && (o9.width = e15, o9.height = n19, r17.drawImage(t16, 0, 0, e15, n19));
    const i16 = r17.getImageData(0, 0, e15, n19).data;
    if (a13) {
      for (const l11 of a13) if (l11 && l11.oldColor && 4 === l11.oldColor.length && l11.newColor && 4 === l11.newColor.length) {
        const [t17, a14, e16, n20] = l11.oldColor, [o10, r18, s15, h8] = l11.newColor;
        if (t17 === o10 && a14 === r18 && e16 === s15 && n20 === h8) continue;
        for (let l12 = 0; l12 < i16.length; l12 += 4) t17 === i16[l12] && a14 === i16[l12 + 1] && e16 === i16[l12 + 2] && n20 === i16[l12 + 3] && (i16[l12] = o10, i16[l12 + 1] = r18, i16[l12 + 2] = s15, i16[l12 + 3] = h8);
      }
    }
    const s14 = new ImageData(i16, e15, n19);
    return r17.putImageData(s14, 0, 0), o9;
  }
  tintImageData(t16, a13) {
    if (!a13 || a13.length < 4) return t16;
    this._rasterizationCanvas || (this._rasterizationCanvas = document.createElement("canvas"));
    const { width: e15, height: n19 } = t16, o9 = this._rasterizationCanvas, r17 = o9.getContext("2d", { willReadFrequently: true });
    t16 !== o9 && (o9.width = e15, o9.height = n19, r17.drawImage(t16, 0, 0, e15, n19));
    const i16 = r17.getImageData(0, 0, e15, n19), s14 = new Uint8Array(i16.data), l11 = [a13[0] / 255, a13[1] / 255, a13[2] / 255, a13[3] / 255];
    for (let g4 = 0; g4 < s14.length; g4 += 4) s14[g4] *= l11[0], s14[g4 + 1] *= l11[1], s14[g4 + 2] *= l11[2], s14[g4 + 3] *= l11[3];
    const h8 = new ImageData(new Uint8ClampedArray(s14.buffer), e15, n19);
    return r17.putImageData(h8, 0, 0), o9;
  }
};

// node_modules/@arcgis/core/symbols/cim/CIMOperators.js
function A3(p8) {
  if (!p8) return null;
  switch (p8.type) {
    case "CIMGeometricEffectAddControlPoints":
      return e6.local();
    case "CIMGeometricEffectArrow":
      return p5.local();
    case "CIMGeometricEffectBuffer":
      return m5.local();
    case "CIMGeometricEffectControlMeasureLine":
      return r4.local();
    case "CIMGeometricEffectCut":
      return r5.local();
    case "CIMGeometricEffectDashes":
      return h4.local();
    case "CIMGeometricEffectDonut":
      return s8.local();
    case "CIMGeometricEffectJog":
      return e8.local();
    case "CIMGeometricEffectMove":
      return t7.local();
    case "CIMGeometricEffectOffset":
      return h5.local();
    case "CIMGeometricEffectReverse":
      return e10.local();
    case "CIMGeometricEffectRotate":
      return e11.local();
    case "CIMGeometricEffectScale":
      return e12.local();
    case "CIMGeometricEffectWave":
      return n12.local();
  }
  return null;
}
function g3(e15) {
  if (!e15) return null;
  switch (e15.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
      return a8.local();
    case "CIMMarkerPlacementAtExtremities":
      return i8.local();
    case "CIMMarkerPlacementAtRatioPositions":
      return a9.local();
    case "CIMMarkerPlacementInsidePolygon":
      return r13.local();
    case "CIMMarkerPlacementOnLine":
      return s9.local();
    case "CIMMarkerPlacementOnVertices":
      return i10.local();
    case "CIMMarkerPlacementPolygonCenter":
      return o6.local();
  }
  return null;
}

// node_modules/@arcgis/core/symbols/cim/imageUtils.js
function t12(t16) {
  const e15 = t16.getFrame(0);
  if (e15 instanceof HTMLImageElement || e15 instanceof HTMLCanvasElement) return e15;
  const n19 = document.createElement("canvas");
  n19.width = t16.width, n19.height = t16.height;
  const a13 = n19.getContext("2d");
  return e15 instanceof ImageData ? a13.putImageData(e15, 0, 0) : a13.drawImage(e15, 0, 0), n19;
}

// node_modules/@arcgis/core/symbols/cim/mathUtils.js
function t13(t16, n19 = 0) {
  if (0 === n19) return t16;
  const r17 = Math.cos(n19), o9 = Math.sin(n19), [c5, e15] = t16;
  return [c5 * r17 + e15 * -o9, c5 * o9 + e15 * r17];
}

// node_modules/@arcgis/core/symbols/cim/Rect.js
var t14 = class _t2 {
  constructor(t16 = 0, h8 = 0, i16 = 0, s14 = 0) {
    this.x = t16, this.y = h8, this.width = i16, this.height = s14;
  }
  static fromExtent(h8) {
    return new _t2(h8.xmin, -h8.ymax, h8.xmax - h8.xmin, h8.ymax - h8.ymin);
  }
  get isEmpty() {
    return this.width <= 0 || this.height <= 0;
  }
  union(t16) {
    this.x = Math.min(this.x, t16.x), this.y = Math.min(this.y, t16.y), this.width = Math.max(this.width, t16.width), this.height = Math.max(this.height, t16.height);
  }
};

// node_modules/@arcgis/core/symbols/cim/TextRasterizer.js
function i13(e15) {
  return `rgb(${e15.slice(0, 3).toString()})`;
}
function n16(e15) {
  return `rgba(${e15.slice(0, 3).toString()},${e15[3]})`;
}
var s12 = class {
  constructor(e15) {
    e15 && (this._textRasterizationCanvas = e15);
  }
  rasterizeText(e15, s14) {
    var _a, _b;
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const a13 = this._textRasterizationCanvas, h8 = a13.getContext("2d", { willReadFrequently: true });
    r16(h8, s14), this._parameters = s14, this._textLines = e15.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const { decoration: l11, weight: d3 } = s14.font;
    this._lineThroughWidthOffset = l11 && "line-through" === l11 ? 0.1 * this._lineHeight : 0;
    const c5 = null != s14.backgroundColor || null != s14.borderLine, _6 = c5 ? s4 : 0, u12 = this._computeTextWidth(h8, s14) + 2 * _6, g4 = this._lineHeight * this._textLines.length + 2 * _6;
    if (a13.width = u12 + 2 * this._lineThroughWidthOffset, a13.height = g4, 0 === a13.width || 0 === a13.height) return a13.width = a13.height = 1, { size: [0, 0], image: new Uint32Array(0), sdf: false, simplePattern: false, anchorX: 0, anchorY: 0, canvas: a13 };
    this._renderedLineHeight = Math.round(this._lineHeight), this._renderedOutlineSize = (s14.outline.size || 0) * s14.pixelRatio, this._renderedHaloSize = (s14.halo.size || 0) * s14.pixelRatio, this._renderedWidth = u12, this._renderedHeight = g4, this._lineThroughWidthOffset *= s14.pixelRatio;
    const f6 = (s14.outline && s14.outline.color) ?? [0, 0, 0, 0], m9 = s14.color ?? [0, 0, 0, 0], p8 = s14.halo && s14.halo.color ? s14.halo.color : [0, 0, 0, 0];
    this._fillStyle = n16(m9), this._outlineStyle = n16(f6), this._haloStyle = i13(p8);
    const x4 = this._renderedLineHeight, z2 = this._renderedOutlineSize, b5 = this._renderedHaloSize;
    h8.save(), h8.clearRect(0, 0, a13.width, a13.height), r16(h8, s14);
    const w5 = _6 * s14.pixelRatio, v2 = o8(h8.textAlign, this._renderedWidth - 2 * w5, this._renderedHaloSize + this._renderedOutlineSize) + w5, S3 = b5 + z2 + w5, y6 = b5 > 0;
    let R3 = this._lineThroughWidthOffset, C4 = 0;
    if (c5) {
      h8.save();
      const e16 = s14.backgroundColor ?? [0, 0, 0, 0], t16 = ((_a = s14.borderLine) == null ? void 0 : _a.color) ?? [0, 0, 0, 0], i16 = 2 * (((_b = s14.borderLine) == null ? void 0 : _b.size) ?? 0);
      h8.fillStyle = n16(e16), h8.strokeStyle = n16(t16), h8.lineWidth = i16, h8.fillRect(0, 0, a13.width, a13.height), h8.strokeRect(0, 0, a13.width, a13.height), h8.restore();
    }
    y6 && this._renderHalo(h8, v2, S3, R3, C4, s14), z2 > 0 && this._renderOutline(h8, v2, S3, R3, C4, s14), C4 += S3, R3 += v2;
    for (const t16 of this._textLines) y6 ? (h8.globalCompositeOperation = "destination-out", h8.fillStyle = "rgb(0, 0, 0)", h8.fillText(t16, R3, C4), h8.globalCompositeOperation = "source-over", h8.fillStyle = this._fillStyle, h8.fillText(t16, R3, C4)) : (h8.fillStyle = this._fillStyle, h8.fillText(t16, R3, C4)), l11 && "none" !== l11 && this._renderDecoration(h8, R3, C4, l11, d3), C4 += x4;
    h8.restore();
    const H4 = this._renderedWidth + 2 * this._lineThroughWidthOffset, W2 = this._renderedHeight, T4 = h8.getImageData(0, 0, H4, W2), k2 = new Uint8Array(T4.data);
    if (s14.premultiplyColors) {
      let e16;
      for (let t16 = 0; t16 < k2.length; t16 += 4) e16 = k2[t16 + 3] / 255, k2[t16] = k2[t16] * e16, k2[t16 + 1] = k2[t16 + 1] * e16, k2[t16 + 2] = k2[t16 + 2] * e16;
    }
    let L3, O3;
    switch (s14.horizontalAlignment) {
      case "left":
        L3 = -0.5;
        break;
      case "right":
        L3 = 0.5;
        break;
      default:
        L3 = 0;
    }
    switch (s14.verticalAlignment) {
      case "bottom":
        O3 = -0.5;
        break;
      case "top":
        O3 = 0.5;
        break;
      case "baseline":
        O3 = -1 / 6;
        break;
      default:
        O3 = 0;
    }
    return { size: [H4, W2], image: new Uint32Array(k2.buffer), sdf: false, simplePattern: false, anchorX: L3, anchorY: O3, canvas: a13 };
  }
  _renderHalo(e15, t16, i16, n19, s14, o9) {
    const a13 = this._renderedWidth, h8 = this._renderedHeight;
    this._outlineRasterizationCanvas || (this._outlineRasterizationCanvas = document.createElement("canvas")), this._outlineRasterizationCanvas.width = a13, this._outlineRasterizationCanvas.height = h8;
    const l11 = this._outlineRasterizationCanvas, d3 = l11.getContext("2d");
    d3.clearRect(0, 0, a13, h8), r16(d3, o9);
    const { decoration: c5, weight: _6 } = o9.font;
    d3.fillStyle = this._haloStyle, d3.strokeStyle = this._haloStyle, d3.lineJoin = "round", this._renderOutlineNative(d3, t16, i16, c5, _6, this._renderedHaloSize + this._renderedOutlineSize), e15.globalAlpha = this._parameters.halo.color[3], e15.drawImage(l11, 0, 0, a13, h8, n19, s14, a13, h8), e15.globalAlpha = 1;
  }
  _renderOutline(e15, t16, i16, n19, s14, o9) {
    const a13 = this._renderedWidth, h8 = this._renderedHeight;
    this._outlineRasterizationCanvas || (this._outlineRasterizationCanvas = document.createElement("canvas")), this._outlineRasterizationCanvas.width = a13, this._outlineRasterizationCanvas.height = h8;
    const l11 = this._outlineRasterizationCanvas, d3 = l11.getContext("2d");
    d3.clearRect(0, 0, a13, h8), r16(d3, o9);
    const { decoration: c5, weight: _6 } = o9.font;
    d3.fillStyle = this._outlineStyle, d3.strokeStyle = this._outlineStyle, d3.lineJoin = "round", this._renderOutlineNative(d3, t16, i16, c5, _6, this._renderedOutlineSize), e15.globalAlpha = this._parameters.outline.color[3], e15.drawImage(l11, 0, 0, a13, h8, n19, s14, a13, h8), e15.globalAlpha = 1;
  }
  _renderOutlineNative(e15, t16, i16, n19, s14, r17) {
    const o9 = this._renderedLineHeight;
    for (const a13 of this._textLines) {
      const h8 = 2 * r17, l11 = 5, d3 = 0.1;
      for (let r18 = 0; r18 < l11; r18++) {
        const o10 = (1 - (l11 - 1) * d3 + r18 * d3) * h8;
        e15.lineWidth = o10, e15.strokeText(a13, t16, i16), n19 && "none" !== n19 && this._renderDecoration(e15, t16, i16, n19, s14, o10);
      }
      i16 += o9;
    }
  }
  computeTextSize(e15, t16) {
    this._textRasterizationCanvas || (this._textRasterizationCanvas = document.createElement("canvas"));
    const i16 = this._textRasterizationCanvas, n19 = i16.getContext("2d");
    r16(n19, t16), this._parameters = t16, this._textLines = e15.split(/\r?\n/), this._lineHeight = this._computeLineHeight();
    const s14 = this._computeTextWidth(n19, t16), o9 = this._lineHeight * this._textLines.length;
    return i16.width = s14, i16.height = o9, [s14 * t16.pixelRatio, o9 * t16.pixelRatio];
  }
  _computeTextWidth(t16, i16) {
    let n19 = 0;
    for (const e15 of this._textLines) n19 = Math.max(n19, t16.measureText(e15).width);
    const s14 = i16.font;
    return ("italic" === s14.style || "oblique" === s14.style || "string" == typeof s14.weight && ("bold" === s14.weight || "bolder" === s14.weight) || "number" == typeof s14.weight && s14.weight > 600) && (n19 += 0.3 * t16.measureText("w").width), n19 += 2 * u3(this._parameters.halo.size), Math.round(n19);
  }
  _computeLineHeightBase() {
    return 1.275 * this._parameters.size;
  }
  _computeLineHeight() {
    let t16 = this._computeLineHeightBase();
    const i16 = this._parameters.font.decoration;
    return i16 && "underline" === i16 && (t16 *= 1.3), Math.round(t16 + 2 * u3(this._parameters.halo.size));
  }
  _renderDecoration(e15, t16, i16, n19, s14, r17) {
    let o9 = 0.9 * this._lineHeight;
    const a13 = "bold" === s14 ? 0.06 : "bolder" === s14 ? 0.09 : 0.04;
    switch (e15.textAlign) {
      case "center":
        t16 -= this._renderedWidth / 2;
        break;
      case "right":
        t16 -= this._renderedWidth;
    }
    const h8 = e15.textBaseline;
    if ("underline" === n19) switch (o9 = 0.9 * this._computeLineHeightBase(), h8) {
      case "top":
        i16 += o9;
        break;
      case "middle":
        i16 += o9 / 2;
    }
    else if ("line-through" === n19) switch (h8) {
      case "top":
        i16 += o9 / 1.5;
        break;
      case "middle":
        i16 += o9 / 3;
    }
    const l11 = r17 ? 1.5 * r17 : Math.ceil(o9 * a13);
    e15.save(), e15.beginPath(), e15.strokeStyle = e15.fillStyle, e15.lineWidth = l11, e15.moveTo(t16 - this._lineThroughWidthOffset, i16), e15.lineTo(t16 + this._renderedWidth + 2 * this._lineThroughWidthOffset, i16), e15.stroke(), e15.restore();
  }
};
function r16(t16, i16) {
  const n19 = Math.max(i16.size, 0.5), s14 = i16.font, r17 = `${s14.style} ${s14.weight} ${u3(n19).toFixed(1)}px ${s14.family}, sans-serif`;
  let o9;
  switch (t16.font = r17, t16.textBaseline = "top", i16.horizontalAlignment) {
    case "left":
    default:
      o9 = "left";
      break;
    case "right":
      o9 = "right";
      break;
    case "center":
      o9 = "center";
  }
  t16.textAlign = o9;
}
function o8(e15, t16, i16) {
  return "center" === e15 ? 0.5 * t16 : "right" === e15 ? t16 - i16 : i16;
}

// node_modules/@arcgis/core/views/2d/engine/svgUtils.js
function t15(t16) {
  return document.createElementNS("http://www.w3.org/2000/svg", t16);
}
function e14() {
  const e15 = t15("svg");
  return e15.setAttribute("style", "position: absolute;"), e15.setAttribute("width", "0"), e15.setAttribute("height", "0"), e15.setAttribute("aria-hidden", "true"), e15.setAttribute("role", "presentation"), document.body.appendChild(e15), e15;
}
function n17(t16) {
  return null != t16 && document.body.removeChild(t16), null;
}

// node_modules/@arcgis/core/views/2d/engine/webgl/mesh/templates/shapingUtils.js
var _4 = 22;
var l10 = 4;
var u11 = _4 + l10;
var x3 = _4 - 6;
var p7 = 3;
var b4 = Math.PI / 180;
var y5 = 8;
var w4 = 1.5;
var L2 = class {
  constructor(t16, s14, i16, e15) {
    this._rotationT = n5(), this._xBounds = 0, this._yBounds = 0, this.minZoom = 0, this.maxZoom = 255, this._bounds = null;
    const h8 = i16.rect, n19 = new Float32Array(8);
    t16 *= e15, s14 *= e15;
    const r17 = i16.code ? h8.width * e15 : i16.metrics.width, a13 = i16.code ? h8.height * e15 : i16.metrics.height;
    this.width = r17, this.height = a13, n19[0] = t16, n19[1] = s14, n19[2] = t16 + r17, n19[3] = s14, n19[4] = t16, n19[5] = s14 + a13, n19[6] = t16 + r17, n19[7] = s14 + a13, this._data = n19, this._setTextureCoords(h8), this._scale = e15, this._mosaic = i16, this.x = t16, this.y = s14, this.maxOffset = Math.max(t16 + r17, s14 + a13);
  }
  get mosaic() {
    return this._mosaic;
  }
  set angle(s14) {
    this._angle = s14, M2(this._rotationT, -s14), this._setOffsets();
  }
  get angle() {
    return this._angle;
  }
  get xTopLeft() {
    return this._data[0];
  }
  get yTopLeft() {
    return this._data[1];
  }
  get xBottomRight() {
    return this._data[6];
  }
  get yBottomRight() {
    return this._data[7];
  }
  get texcoords() {
    return this._texcoords;
  }
  get textureBinding() {
    return this._mosaic.textureBinding;
  }
  get offsets() {
    return this._offsets || this._setOffsets(), this._offsets;
  }
  get char() {
    return String.fromCharCode(this._mosaic.code);
  }
  get code() {
    return this._mosaic.code;
  }
  get bounds() {
    if (!this._bounds) {
      const { height: t16, width: i16 } = this._mosaic.metrics, e15 = i16 * this._scale, n19 = Math.abs(t16) * this._scale, r17 = new Float32Array(8);
      r17[0] = this.x, r17[1] = this.y, r17[2] = this.x + e15, r17[3] = this.y, r17[4] = this.x, r17[5] = this.y + n19, r17[6] = this.x + e15, r17[7] = this.y + n19;
      const a13 = e5(n5(), this._rotationT, this._transform);
      a5(r17, r17, a13);
      let f6 = 1 / 0, c5 = 1 / 0, d3 = -1 / 0, m9 = -1 / 0;
      for (let s14 = 0; s14 < 4; s14++) {
        const t17 = r17[2 * s14], i17 = r17[2 * s14 + 1];
        f6 = Math.min(f6, t17), c5 = Math.min(c5, i17), d3 = Math.max(d3, t17), m9 = Math.max(m9, i17);
      }
      const _6 = d3 - f6, l11 = m9 - c5, u12 = f6 + _6 / 2, x4 = c5 + l11 / 2;
      this._bounds = new i4(u12, x4, _6, l11);
    }
    return this._bounds;
  }
  setTransform(t16) {
    this._transform = t16, this._offsets = null;
  }
  _setOffsets() {
    this._offsets || (this._offsets = { topLeft: [0, 0], topRight: [0, 0], bottomLeft: [0, 0], bottomRight: [0, 0] });
    const t16 = e5(n5(), this._rotationT, this._transform);
    this._offsets.topLeft[0] = this._data[0], this._offsets.topLeft[1] = this._data[1], this._offsets.topRight[0] = this._data[2], this._offsets.topRight[1] = this._data[3], this._offsets.bottomLeft[0] = this._data[4], this._offsets.bottomLeft[1] = this._data[5], this._offsets.bottomRight[0] = this._data[6], this._offsets.bottomRight[1] = this._data[7], S2(this._offsets.topLeft, this._offsets.topLeft, t16), S2(this._offsets.topRight, this._offsets.topRight, t16), S2(this._offsets.bottomLeft, this._offsets.bottomLeft, t16), S2(this._offsets.bottomRight, this._offsets.bottomRight, t16);
  }
  _setTextureCoords({ x: t16, y: s14, width: i16, height: e15 }) {
    this._texcoords = { topLeft: [t16, s14], topRight: [t16 + i16, s14], bottomLeft: [t16, s14 + e15], bottomRight: [t16 + i16, s14 + e15] };
  }
};
var M4 = (t16, s14) => ({ code: 0, page: 0, sdf: true, rect: new t4(0, 0, 11, 8), textureBinding: s14, metrics: { advance: 0, height: 4, width: t16, left: 0, top: 0 } });
function R2(t16, s14) {
  return t16.forEach((t17) => S2(t17, t17, s14)), { topLeft: t16[0], topRight: t16[1], bottomLeft: t16[2], bottomRight: t16[3] };
}
var B3 = class {
  constructor(t16, s14, i16) {
    this._rotation = 0, this._decorate(t16, s14, i16), this.glyphs = t16, this.bounds = this._createBounds(t16), this.isMultiline = s14.length > 1, this._hasRotation = 0 !== i16.angle, this._transform = this._createGlyphTransform(this.bounds, i16), this._borderLineSizePx = i16.borderLineSizePx, (i16.borderLineSizePx || i16.hasBackground) && ([this.bounds, this.textBox] = this.shapeBackground(this._transform));
    for (const e15 of t16) e15.setTransform(this._transform);
  }
  setRotation(i16) {
    if (0 === i16 && 0 === this._rotation) return;
    this._rotation = i16;
    const e15 = this._transform, h8 = M2(n5(), i16);
    e5(e15, h8, e15);
    for (const t16 of this.glyphs) t16.setTransform(this._transform);
  }
  _decorate(t16, s14, i16) {
    if (!i16.decoration || "none" === i16.decoration || !t16.length) return;
    const e15 = i16.scale, o9 = "underline" === i16.decoration ? u11 : x3, h8 = t16[0].textureBinding;
    for (const n19 of s14) {
      const s15 = n19.startX * e15, i17 = n19.startY * e15, r17 = (n19.width + n19.glyphWidthEnd) * e15;
      t16.push(new L2(s15, i17 + o9 * e15, M4(r17, h8), 1));
    }
  }
  shapeBackground(t16) {
    const s14 = this._borderLineSizePx || 0, i16 = (w4 + s14) / 2, e15 = this._borderLineSizePx ? i16 : 0, { xmin: o9, ymin: h8, xmax: n19, ymax: r17, x: a13, y: f6, width: c5, height: d3 } = this.bounds, m9 = [o9 - y5, h8 - y5], _6 = [n19 + y5, h8 - y5], l11 = [o9 - y5, r17 + y5], u12 = [n19 + y5, r17 + y5], x4 = R2([[m9[0] - i16, m9[1] - i16], [_6[0] + i16, _6[1] - i16], [m9[0] + e15, m9[1] + e15], [_6[0] - e15, _6[1] + e15]], t16), p8 = R2([[l11[0] + e15, l11[1] - e15], [u12[0] - e15, u12[1] - e15], [l11[0] - i16, l11[1] + i16], [u12[0] + i16, u12[1] + i16]], t16), b5 = R2([[m9[0] - i16, m9[1] - i16], [m9[0] + e15, m9[1] + e15], [l11[0] - i16, l11[1] + i16], [l11[0] + e15, l11[1] - e15]], t16), L3 = R2([[_6[0] - e15, _6[1] + e15], [_6[0] + i16, _6[1] - i16], [u12[0] - e15, u12[1] - e15], [u12[0] + i16, u12[1] + i16]], t16), M5 = { main: R2([m9, _6, l11, u12], t16), top: x4, bot: p8, left: b5, right: L3 };
    return [new i4(a13, f6, c5 + 2 * i16, d3 + 2 * i16), M5];
  }
  get boundsT() {
    const t16 = this.bounds, s14 = o2(n4(), t16.x, t16.y);
    if (S2(s14, s14, this._transform), this._hasRotation) {
      const i16 = Math.max(t16.width, t16.height);
      return new i4(s14[0], s14[1], i16, i16);
    }
    return new i4(s14[0], s14[1], t16.width, t16.height);
  }
  _createBounds(t16) {
    let s14 = 1 / 0, i16 = 1 / 0, e15 = 0, o9 = 0;
    for (const r17 of t16) s14 = Math.min(s14, r17.xTopLeft), i16 = Math.min(i16, r17.yTopLeft), e15 = Math.max(e15, r17.xBottomRight), o9 = Math.max(o9, r17.yBottomRight);
    const h8 = e15 - s14, n19 = o9 - i16;
    return new i4(s14 + h8 / 2, i16 + n19 / 2, h8, n19);
  }
  _createGlyphTransform(t16, s14) {
    const h8 = b4 * s14.angle, n19 = n5(), f6 = n4();
    return i3(n19, n19, o2(f6, s14.xOffset, -s14.yOffset)), s14.useCIMAngleBehavior ? s5(n19, n19, h8) : (i3(n19, n19, o2(f6, t16.x, t16.y)), s5(n19, n19, h8), i3(n19, n19, o2(f6, -t16.x, -t16.y))), n19;
  }
};
var T3 = class {
  constructor(t16, s14, i16, e15, o9, h8) {
    this.glyphWidthEnd = 0, this.startX = 0, this.startY = 0, this.start = Math.max(0, Math.min(s14, i16)), this.end = Math.max(0, Math.max(s14, i16)), this.end < t16.length && (this.glyphWidthEnd = t16[this.end].metrics.width), this.width = e15, this.yMin = o9, this.yMax = h8;
  }
};
var v = (t16) => 10 === t16;
var j2 = (t16) => 32 === t16;
function A4(t16, s14, i16) {
  const e15 = new Array(), o9 = 1 / i16.scale, h8 = i16.maxLineWidth * o9, n19 = s14 ? t16.length - 1 : 0, r17 = s14 ? -1 : t16.length, a13 = s14 ? -1 : 1;
  let f6 = n19, c5 = 0, d3 = 0, m9 = f6, g4 = m9, _6 = 0, l11 = 1 / 0, u12 = 0;
  for (; f6 !== r17; ) {
    const { code: s15, metrics: i17 } = t16[f6], o10 = Math.abs(i17.top);
    if (v(s15) || j2(s15) || (l11 = Math.min(l11, o10), u12 = Math.max(u12, o10 + i17.height)), v(s15)) f6 !== n19 && (e15.push(new T3(t16, m9, f6 - a13, c5, l11 === 1 / 0 ? 0 : l11, u12)), l11 = 1 / 0, u12 = 0), c5 = 0, m9 = f6 + a13, g4 = f6 + a13, d3 = 0;
    else if (j2(s15)) g4 = f6 + a13, d3 = 0, _6 = i17.advance, c5 += i17.advance;
    else if (c5 > h8) {
      if (g4 !== m9) {
        const s16 = g4 - 2 * a13;
        c5 -= _6, e15.push(new T3(t16, m9, s16, c5 - d3, l11, u12)), l11 = 1 / 0, u12 = 0, m9 = g4, c5 = d3;
      } else e15.push(new T3(t16, m9, f6 - a13, c5, l11, u12)), l11 = 1 / 0, u12 = 0, m9 = f6, g4 = f6, c5 = 0;
      c5 += i17.advance, d3 += i17.advance;
    } else c5 += i17.advance, d3 += i17.advance;
    f6 += a13;
  }
  const x4 = new T3(t16, m9, f6 - a13, c5, l11, u12);
  return x4.start >= 0 && x4.end < t16.length && e15.push(x4), e15;
}
function z(t16, s14) {
  let i16 = 0;
  for (let h8 = 0; h8 < t16.length; h8++) {
    const { width: s15 } = t16[h8];
    i16 = Math.max(s15, i16);
  }
  const e15 = "underline" === s14.decoration ? l10 : 0, o9 = t16[0].yMin;
  return { x: 0, y: o9, height: t16[t16.length - 1].yMax + s14.lineHeight * (t16.length - 1) + e15 - o9, width: i16 };
}
function O(t16, s14) {
  const i16 = s14.scale, e15 = new Array(), { glyphs: o9, isRightToLeft: h8 } = t16, n19 = A4(o9, h8, s14), r17 = n19.length ? z(n19, s14) : { x: 0, y: 0, height: 0, width: 0 }, a13 = a11(s14.horizontalAlignment), m9 = c4(s14.verticalAlignment), g4 = m9 === n15.Baseline ? 1 : 0, _6 = g4 ? 0 : m9 - 1, l11 = (1 - g4) * -r17.y + _6 * (r17.height / 2) + -22 * (g4 ? 1 : 0);
  for (let f6 = 0; f6 < n19.length; f6++) {
    const { start: h9, end: r18, width: c5 } = n19[f6];
    let d3 = -1 * (a13 + 1) * (c5 / 2) - p7;
    const m10 = (t16.isRightToLeft ? n19.length - 1 - f6 : f6) * s14.lineHeight + l11 - p7;
    n19[f6].startX = d3, n19[f6].startY = m10;
    for (let t17 = h9; t17 <= r18; t17++) {
      const s15 = o9[t17];
      if (v(s15.code)) continue;
      const h10 = new L2(d3 + s15.metrics.left, m10 - s15.metrics.top, s15, i16);
      d3 += s15.metrics.advance, e15.push(h10);
    }
  }
  return new B3(e15, n19, s14);
}

// node_modules/@arcgis/core/views/2d/layers/graphics/graphicsUtils.js
var i14 = 50;
function m8(n19) {
  if (!n19) return null;
  const { xmin: e15, ymin: t16, xmax: o9, ymax: i16, spatialReference: m9 } = n19;
  return new j({ rings: [[[e15, t16], [e15, i16], [o9, i16], [o9, t16], [e15, t16]]], spatialReference: m9 });
}
function s13(r17) {
  return e2(Math.round(u3(r17)));
}
function a12(e15) {
  const r17 = e2(zi), i16 = e2(Bi);
  return Math.max(r17, Math.min(e15 || i16, i16));
}

// node_modules/@arcgis/core/symbols/cim/CIMSymbolDrawHelper.js
var nt = Math.PI / 180;
var at = 0.5;
var lt = () => n.getLogger("esri.symbols.cim.CIMSymbolDrawHelper");
var ht = class _ht {
  constructor(t16) {
    this._t = t16;
  }
  static createIdentity() {
    return new _ht([1, 0, 0, 0, 1, 0]);
  }
  clone() {
    const t16 = this._t;
    return new _ht(t16.slice());
  }
  transform(t16) {
    const e15 = this._t;
    return [e15[0] * t16[0] + e15[1] * t16[1] + e15[2], e15[3] * t16[0] + e15[4] * t16[1] + e15[5]];
  }
  static createScale(t16, e15) {
    return new _ht([t16, 0, 0, 0, e15, 0]);
  }
  scale(t16, e15) {
    const r17 = this._t;
    return r17[0] *= t16, r17[1] *= t16, r17[2] *= t16, r17[3] *= e15, r17[4] *= e15, r17[5] *= e15, this;
  }
  scaleRatio() {
    return Math.sqrt(this._t[0] * this._t[0] + this._t[1] * this._t[1]);
  }
  static createTranslate(t16, e15) {
    return new _ht([0, 0, t16, 0, 0, e15]);
  }
  translate(t16, e15) {
    const r17 = this._t;
    return r17[2] += t16, r17[5] += e15, this;
  }
  static createRotate(t16) {
    const e15 = Math.cos(t16), r17 = Math.sin(t16);
    return new _ht([e15, -r17, 0, r17, e15, 0]);
  }
  rotate(t16) {
    return _ht.multiply(this, _ht.createRotate(t16), this);
  }
  angle() {
    const t16 = this._t[0], e15 = this._t[3], r17 = Math.sqrt(t16 * t16 + e15 * e15);
    return [t16 / r17, e15 / r17];
  }
  static multiply(t16, e15, r17) {
    const i16 = t16._t, s14 = e15._t, o9 = i16[0] * s14[0] + i16[3] * s14[1], n19 = i16[1] * s14[0] + i16[4] * s14[1], a13 = i16[2] * s14[0] + i16[5] * s14[1] + s14[2], l11 = i16[0] * s14[3] + i16[3] * s14[4], h8 = i16[1] * s14[3] + i16[4] * s14[4], c5 = i16[2] * s14[3] + i16[5] * s14[4] + s14[5], m9 = r17._t;
    return m9[0] = o9, m9[1] = n19, m9[2] = a13, m9[3] = l11, m9[4] = h8, m9[5] = c5, r17;
  }
  invert() {
    const t16 = this._t;
    let e15 = t16[0] * t16[4] - t16[1] * t16[3];
    if (0 === e15) return new _ht([0, 0, 0, 0, 0, 0]);
    e15 = 1 / e15;
    const r17 = (t16[1] * t16[5] - t16[2] * t16[4]) * e15, i16 = (t16[2] * t16[3] - t16[0] * t16[5]) * e15, s14 = t16[4] * e15, o9 = -t16[1] * e15, n19 = -t16[3] * e15, a13 = t16[0] * e15;
    return new _ht([s14, o9, r17, n19, a13, i16]);
  }
};
var ct = class {
  constructor(t16, e15) {
    this._resourceManager = t16, this._transfos = [], this._sizeTransfos = [], this._geomUnitsPerPoint = 1, this._placementPool = new e(t6, void 0, void 0, 100), this._earlyReturn = false, this._mapRotation = 0, this._transfos.push(e15 || ht.createIdentity()), this._sizeTransfos.push(e15 ? e15.scaleRatio() : 1);
  }
  setTransform(t16, e15) {
    this._transfos = [t16 || ht.createIdentity()], this._sizeTransfos = [e15 || (t16 ? t16.scaleRatio() : 1)];
  }
  setGeomUnitsPerPoint(t16) {
    this._geomUnitsPerPoint = t16;
  }
  transformPt(t16) {
    return this._transfos[this._transfos.length - 1].transform(t16);
  }
  transformSize(t16) {
    return t16 * this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformPt(t16) {
    return this._transfos[this._transfos.length - 1].invert().transform(t16);
  }
  reverseTransformSize(t16) {
    return t16 / this._sizeTransfos[this._sizeTransfos.length - 1];
  }
  reverseTransformScalar(t16) {
    return t16 / this._transfos[this._transfos.length - 1].scaleRatio();
  }
  getTransformAngle() {
    return this._transfos[this._transfos.length - 1].angle();
  }
  geomUnitsPerPoint() {
    return this.isEmbedded() ? 1 : this._geomUnitsPerPoint;
  }
  prevGeomUnitsPerPoint() {
    return this._transfos.length > 2 ? 1 : this._geomUnitsPerPoint;
  }
  isEmbedded() {
    return this._transfos.length > 1;
  }
  back() {
    return this._transfos[this._transfos.length - 1];
  }
  push(t16, e15) {
    const r17 = e15 ? t16.scaleRatio() : 1;
    ht.multiply(t16, this.back(), t16), this._transfos.push(t16), this._sizeTransfos.push(this._sizeTransfos[this._sizeTransfos.length - 1] * r17);
  }
  pop() {
    this._transfos.splice(-1, 1), this._sizeTransfos.splice(-1, 1);
  }
  drawSymbol(t16, e15, r17) {
    if (t16) switch (t16.type) {
      case "CIMPointSymbol":
      case "CIMLineSymbol":
      case "CIMPolygonSymbol":
        this.drawMultiLayerSymbol(t16, e15);
        break;
      case "CIMTextSymbol":
        this.drawTextSymbol(t16, e15, r17);
    }
  }
  drawMultiLayerSymbol(t16, e15) {
    if (!t16 || !e15) return;
    const r17 = t16.symbolLayers;
    if (!r17) return;
    const i16 = t16.effects;
    if (i16 && i16.length > 0) {
      const t17 = this.executeEffects(i16, e15);
      if (t17) {
        let e16 = t17.next();
        for (; e16; ) this.drawSymbolLayers(r17, e16.asJSON()), e16 = t17.next();
      }
    } else this.drawSymbolLayers(r17, e15);
  }
  executeEffects(t16, e15) {
    const r17 = this._resourceManager.geometryEngine;
    let i16 = new s7(a6.fromJSONCIM(e15));
    for (const s14 of t16) {
      const t17 = A3(s14);
      t17 && (i16 = t17.execute(i16, s14, this.geomUnitsPerPoint(), null, r17));
    }
    return i16;
  }
  drawSymbolLayers(t16, e15) {
    let r17 = t16.length;
    for (; r17--; ) {
      const i16 = t16[r17];
      if (!i16 || false === i16.enable) continue;
      const s14 = i16.effects;
      if (s14 && s14.length > 0) {
        const t17 = this.executeEffects(s14, e15);
        if (t17) {
          let e16 = null;
          for (; (e16 = t17.next()) && (this.drawSymbolLayer(i16, e16.asJSON()), !this._earlyReturn); ) ;
        }
      } else this.drawSymbolLayer(i16, e15);
      if (this._earlyReturn) return;
    }
  }
  drawSymbolLayer(t16, e15) {
    switch (t16.type) {
      case "CIMSolidFill":
        this.drawSolidFill(e15, t16.color, t16.path);
        break;
      case "CIMHatchFill":
        this.drawHatchFill(e15, t16);
        break;
      case "CIMPictureFill":
        this.drawPictureFill(e15, t16);
        break;
      case "CIMGradientFill":
        this.drawGradientFill(e15, t16);
        break;
      case "CIMSolidStroke":
        this.drawSolidStroke(e15, t16.color, t16.width, t16.capStyle, t16.joinStyle, t16.miterLimit, t16.path);
        break;
      case "CIMPictureStroke":
        this.drawPictureStroke(e15, t16);
        break;
      case "CIMGradientStroke":
        this.drawGradientStroke(e15, t16);
        break;
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
      case "CIMVectorMarker":
        this.drawMarkerLayer(t16, e15);
    }
  }
  drawHatchFill(t16, e15) {
    const r17 = dt(e15, t16, this.geomUnitsPerPoint());
    r17 && (this.pushClipPath(t16), this.drawMultiLayerSymbol(e15.lineSymbol, r17), this.popClipPath());
  }
  drawPictureFill(t16, e15) {
  }
  drawGradientFill(t16, e15) {
  }
  drawPictureStroke(t16, e15) {
  }
  drawGradientStroke(t16, e15) {
  }
  drawMarkerLayer(t16, e15) {
    const r17 = t16.markerPlacement;
    if (r17) {
      const i16 = g3(r17);
      if (i16) {
        const s14 = "CIMMarkerPlacementInsidePolygon" === r17.type || "CIMMarkerPlacementPolygonCenter" === r17.type && r17.clipAtBoundary;
        s14 && this.pushClipPath(e15);
        const o9 = i16.execute(a6.fromJSONCIM(e15), r17, this.geomUnitsPerPoint(), null, this._resourceManager.geometryEngine);
        if (o9) {
          let e16 = null;
          for (; (e16 = o9.next()) && (this.drawMarker(t16, e16), !this._earlyReturn); ) ;
        }
        s14 && this.popClipPath();
      }
    } else {
      const r18 = this._placementPool.acquire();
      if (l2(e15)) r18.tx = e15.x, r18.ty = e15.y, this.drawMarker(t16, r18);
      else if (y(e15)) {
        const i16 = l(e15);
        i16 && ([r18.tx, r18.ty] = i16, this.drawMarker(t16, r18));
      } else if (s3(e15)) {
        for (const i16 of e15.paths) for (const e16 of i16) if (r18.tx = e16[0], r18.ty = e16[1], this.drawMarker(t16, r18), this._earlyReturn) break;
      } else for (const i16 of e15.points) if (r18.tx = i16[0], r18.ty = i16[1], this.drawMarker(t16, r18), this._earlyReturn) break;
      this._placementPool.release(r18);
    }
  }
  drawMarker(t16, e15) {
    switch (t16.type) {
      case "CIMCharacterMarker":
      case "CIMPictureMarker":
        this.drawPictureMarker(t16, e15);
        break;
      case "CIMVectorMarker":
        this.drawVectorMarker(t16, e15);
    }
  }
  drawPictureMarker(t16, e15) {
    if (!t16) return;
    const r17 = this._resourceManager.getResource(t16.url), i16 = p2(t16.size, n3.CIMPictureMarker.size);
    if (null == r17 || i16 <= 0) return;
    const s14 = r17.width, o9 = r17.height;
    if (!s14 || !o9) return;
    const n19 = s14 / o9, a13 = p2(t16.scaleX, 1), l11 = ht.createIdentity(), h8 = t16.anchorPoint;
    if (h8) {
      let e16 = h8.x, r18 = h8.y;
      "Absolute" !== t16.anchorPointUnits && (e16 *= i16 * n19 * a13, r18 *= i16), l11.translate(-e16, -r18);
    }
    let c5 = p2(t16.rotation);
    t16.rotateClockwise && (c5 = -c5), this._mapRotation && (c5 += this._mapRotation), c5 && l11.rotate(c5 * nt);
    let m9 = p2(t16.offsetX), f6 = p2(t16.offsetY);
    if (m9 || f6) {
      if (this._mapRotation) {
        const t17 = nt * this._mapRotation, e16 = Math.cos(t17), r18 = Math.sin(t17), i17 = m9 * r18 + f6 * e16;
        m9 = m9 * e16 - f6 * r18, f6 = i17;
      }
      l11.translate(m9, f6);
    }
    const u12 = this.geomUnitsPerPoint();
    1 !== u12 && l11.scale(u12, u12);
    const d3 = e15.getAngle();
    d3 && l11.rotate(d3), l11.translate(e15.tx, e15.ty), this.push(l11, false), this.drawImage(t16, i16), this.pop();
  }
  drawVectorMarker(t16, e15) {
    if (!t16) return;
    const r17 = t16.markerGraphics;
    if (!r17) return;
    const i16 = p2(t16.size, n3.CIMVectorMarker.size), s14 = t16.frame, o9 = s14 ? s14.ymax - s14.ymin : 0, n19 = i16 && o9 ? i16 / o9 : 1, a13 = ht.createIdentity();
    s14 && a13.translate(0.5 * -(s14.xmax + s14.xmin), 0.5 * -(s14.ymax + s14.ymin));
    const l11 = t16.anchorPoint;
    if (l11) {
      let e16 = l11.x, r18 = l11.y;
      "Absolute" !== t16.anchorPointUnits ? s14 && (e16 *= s14.xmax - s14.xmin, r18 *= s14.ymax - s14.ymin) : (e16 /= n19, r18 /= n19), a13.translate(-e16, -r18);
    }
    1 !== n19 && a13.scale(n19, n19);
    let h8 = p2(t16.rotation);
    t16.rotateClockwise && (h8 = -h8), this._mapRotation && (h8 += this._mapRotation), h8 && a13.rotate(h8 * nt);
    let c5 = p2(t16.offsetX), m9 = p2(t16.offsetY);
    if (c5 || m9) {
      if (this._mapRotation) {
        const t17 = nt * this._mapRotation, e16 = Math.cos(t17), r18 = Math.sin(t17), i17 = c5 * r18 + m9 * e16;
        c5 = c5 * e16 - m9 * r18, m9 = i17;
      }
      a13.translate(c5, m9);
    }
    const f6 = this.geomUnitsPerPoint();
    1 !== f6 && a13.scale(f6, f6);
    const u12 = e15.getAngle();
    u12 && a13.rotate(u12), a13.translate(e15.tx, e15.ty), this.push(a13, t16.scaleSymbolsProportionally);
    for (const d3 of r17) {
      (d3 == null ? void 0 : d3.symbol) && d3.geometry || lt().error("Invalid marker graphic", d3);
      let t17 = d3.textString;
      if ("number" == typeof t17 && (t17 = t17.toString()), this.drawSymbol(d3.symbol, d3.geometry, t17), this._earlyReturn) break;
    }
    this.pop();
  }
  drawTextSymbol(t16, e15, r17) {
    if (!t16) return;
    if (!l2(e15)) return;
    if (p2(t16.height, n3.CIMTextSymbol.height) <= 0) return;
    const i16 = ht.createIdentity();
    let s14 = p2(t16.angle);
    s14 = -s14, s14 && i16.rotate(s14 * nt);
    const o9 = p2(t16.offsetX), n19 = p2(t16.offsetY);
    (o9 || n19) && i16.translate(o9, n19);
    const a13 = this.geomUnitsPerPoint();
    1 !== a13 && i16.scale(a13, a13), i16.translate(e15.x, e15.y), this.push(i16, false), this.drawText(t16, r17), this.pop();
  }
};
var mt = class extends ct {
  constructor(t16, e15) {
    super(t16, e15), this.reset();
  }
  reset() {
    this._xmin = this._ymin = 1 / 0, this._xmax = this._ymax = -1 / 0, this._clipCount = 0;
  }
  envelope() {
    return new t14(this._xmin, this._ymin, this._xmax - this._xmin, this._ymax - this._ymin);
  }
  bounds() {
    return a2(this._xmin, this._ymin, this._xmax, this._ymax);
  }
  drawSolidFill(t16) {
    if (t16 && !(this._clipCount > 0)) if (y(t16)) this._processPath(t16.rings, 0);
    else if (s3(t16)) this._processPath(t16.paths, 0);
    else if (m(t16)) {
      const e15 = yt(t16);
      e15 && this._processPath(e15.rings, 0);
    } else console.error("drawSolidFill Unexpected geometry type!");
  }
  drawSolidStroke(t16, e15, r17) {
    if (!t16 || this._clipCount > 0 || null == r17 || r17 <= 0) return;
    const i16 = Math.max(0.5 * this.transformSize(p2(r17, n3.CIMSolidStroke.width)), 0.5 * at);
    if (y(t16)) this._processPath(t16.rings, i16);
    else if (s3(t16)) this._processPath(t16.paths, i16);
    else if (m(t16)) {
      const e16 = yt(t16);
      e16 && this._processPath(e16.rings, i16);
    } else console.error("drawSolidStroke unexpected geometry type!");
  }
  drawMarkerLayer(t16, e15) {
    y(e15) && t16.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t16.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t16.markerPlacement.type && t16.markerPlacement.clipAtBoundary) ? this._processPath(e15.rings, 0) : super.drawMarkerLayer(t16, e15);
  }
  drawHatchFill(t16, e15) {
    this.drawSolidFill(t16);
  }
  drawPictureFill(t16, e15) {
    this.drawSolidFill(t16);
  }
  drawGradientFill(t16, e15) {
    this.drawSolidFill(t16);
  }
  drawPictureStroke(t16, e15) {
    this.drawSolidStroke(t16, null, e15.width);
  }
  drawGradientStroke(t16, e15) {
    this.drawSolidStroke(t16, null, e15.width);
  }
  pushClipPath(t16) {
    this.drawSolidFill(t16), this._clipCount++;
  }
  popClipPath() {
    this._clipCount--;
  }
  drawImage(t16, e15) {
    const { url: r17 } = t16, i16 = p2(t16.scaleX, 1);
    let s14 = i16 * e15, o9 = e15;
    const n19 = this._resourceManager.getResource(r17);
    if (null != n19) {
      const t17 = n19.height / n19.width;
      s14 = i16 * (e15 ? t17 > 1 ? e15 : e15 / t17 : n19.width), o9 = e15 ? t17 > 1 ? e15 * t17 : e15 : n19.height;
    }
    this._merge(this.transformPt([-s14 / 2, -o9 / 2]), 0), this._merge(this.transformPt([-s14 / 2, o9 / 2]), 0), this._merge(this.transformPt([s14 / 2, -o9 / 2]), 0), this._merge(this.transformPt([s14 / 2, o9 / 2]), 0);
  }
  drawText(t16, e15) {
    if (!e15 || 0 === e15.length) return;
    this._textRasterizer || (this._textRasterizer = new s12());
    const r17 = St(t16);
    let [i16, s14] = this._textRasterizer.computeTextSize(e15, r17);
    i16 = e2(i16), s14 = e2(s14);
    const n19 = this.transformSize(1) * this.reverseTransformScalar(1);
    i16 *= n19, s14 *= n19;
    let a13 = 0;
    switch (t16.horizontalAlignment) {
      case "Left":
        a13 = i16 / 2;
        break;
      case "Right":
        a13 = -i16 / 2;
    }
    let l11 = 0;
    switch (t16.verticalAlignment) {
      case "Bottom":
        l11 = s14 / 2;
        break;
      case "Top":
        l11 = -s14 / 2;
        break;
      case "Baseline":
        l11 = s14 / 6;
    }
    this._merge(this.transformPt([-i16 / 2 + a13, -s14 / 2 + l11]), 0), this._merge(this.transformPt([-i16 / 2 + a13, s14 / 2 + l11]), 0), this._merge(this.transformPt([i16 / 2 + a13, -s14 / 2 + l11]), 0), this._merge(this.transformPt([i16 / 2 + a13, s14 / 2 + l11]), 0);
  }
  _processPath(t16, e15) {
    if (t16) for (const r17 of t16) {
      const t17 = r17 ? r17.length : 0;
      if (t17 > 1) {
        this._merge(this.transformPt(r17[0]), e15);
        for (let i16 = 1; i16 < t17; i16++) this._merge(this.transformPt(r17[i16]), e15);
      }
    }
  }
  _merge(t16, e15) {
    t16[0] - e15 < this._xmin && (this._xmin = t16[0] - e15), t16[0] + e15 > this._xmax && (this._xmax = t16[0] + e15), t16[1] - e15 < this._ymin && (this._ymin = t16[1] - e15), t16[1] + e15 > this._ymax && (this._ymax = t16[1] + e15);
  }
};
var ft = class extends ct {
  constructor() {
    super(...arguments), this._searchPoint = [0, 0], this._searchDistPoint = 0, this._textInfo = null, this._svg = null, this._path = null, this._canvas = null;
  }
  destroy() {
    this._svg = n17(this._svg), this._path = null, this._canvas = null;
  }
  hitTest(t16, e15, r17, i16, s14, a13) {
    var _a;
    const l11 = a13 * u3(1);
    this.setTransform(), this.setGeomUnitsPerPoint(l11), this._searchPoint = [(t16[0] + t16[2]) / 2, (t16[1] + t16[3]) / 2], this._searchDistPoint = (t16[2] - t16[0]) / 2 / l11, this._textInfo = i16;
    const h8 = e15 && ("CIMPointSymbol" === e15.type && "Map" !== e15.angleAlignment || "CIMTextSymbol" === e15.type);
    if (this._mapRotation = h8 ? s14 : 0, !has("esri-mobile")) {
      const t17 = e2(X * window.devicePixelRatio), r18 = e2(Y);
      !(("CIMLineSymbol" === (e15 == null ? void 0 : e15.type) || "CIMPolygonSymbol" === (e15 == null ? void 0 : e15.type)) && ((_a = e15.symbolLayers) == null ? void 0 : _a.some(C))) && "CIMMeshSymbol" !== (e15 == null ? void 0 : e15.type) && (H2(e15) ?? 0) < r18 && (this._searchDistPoint = t17);
    }
    return this._earlyReturn = false, this.drawSymbol(e15, r17), this._earlyReturn;
  }
  executeEffects(t16, e15) {
    var _a;
    return "CIMGeometricEffectDashes" === ((_a = t16.at(-1)) == null ? void 0 : _a.type) && (t16 = t16.slice(0, -1)), super.executeEffects(t16, e15);
  }
  drawSolidFill(t16, e15, r17) {
    null != r17 ? this._hittestSvgPath(t16, r17, true) : this._hitTestFill(t16);
  }
  drawHatchFill(t16, e15) {
    this._hitTestFill(t16);
  }
  drawPictureFill(t16, e15) {
    this._hitTestFill(t16);
  }
  drawGradientFill(t16, e15) {
    this._hitTestFill(t16);
  }
  drawSolidStroke(t16, e15, r17, i16, s14, o9, n19) {
    null != n19 ? this._hittestSvgPath(t16, n19, false, r17) : this._hitTestStroke(t16, r17);
  }
  drawPictureStroke(t16, e15) {
    this._hitTestStroke(t16, e15.width);
  }
  drawGradientStroke(t16, e15) {
    this._hitTestStroke(t16, e15.width);
  }
  drawMarkerLayer(t16, e15) {
    t16.markerPlacement && ("CIMMarkerPlacementInsidePolygon" === t16.markerPlacement.type || "CIMMarkerPlacementPolygonCenter" === t16.markerPlacement.type && t16.markerPlacement.clipAtBoundary) ? this._hitTestFill(e15) : super.drawMarkerLayer(t16, e15);
  }
  pushClipPath(t16) {
  }
  popClipPath() {
  }
  drawImage(t16, e15) {
    const { url: r17 } = t16, i16 = p2(t16.scaleX, 1), s14 = this._resourceManager.getResource(r17);
    if (null == s14 || 0 === s14.height || 0 === e15) return;
    const o9 = e15 * this.geomUnitsPerPoint(), n19 = o9 * i16 * (s14.width / s14.height), a13 = this.reverseTransformPt(this._searchPoint), l11 = this._searchDistPoint;
    Math.abs(a13[0]) < n19 / 2 + l11 && Math.abs(a13[1]) < o9 / 2 + l11 && (this._earlyReturn = true);
  }
  drawText(t16, e15) {
    var _a;
    const r17 = this._textInfo;
    if (!r17) return;
    const i16 = r17.get(t16);
    if (!i16) return;
    if (!i16.glyphMosaicItems.glyphs.length) return;
    const s14 = s13(p2(t16.height, n3.CIMTextSymbol.height)), { lineGapType: o9, lineGap: n19 } = t16, a13 = o9 ? Pt(o9, p2(n19), s14) : 0, l11 = "CIMBackgroundCallout" === ((_a = t16.callout) == null ? void 0 : _a.type), h8 = O(i16.glyphMosaicItems, { scale: s14 / A2, angle: 0, xOffset: 0, yOffset: 0, horizontalAlignment: t16.horizontalAlignment, verticalAlignment: t16.verticalAlignment, maxLineWidth: a12(t16.lineWidth), lineHeight: G4 * Math.max(0.25, Math.min(a13 || 1, 4)), decoration: t16.font.decoration || "none", useCIMAngleBehavior: true, hasBackground: l11 }), c5 = this.reverseTransformPt(this._searchPoint), m9 = c5[0], f6 = c5[1];
    for (const u12 of h8.glyphs) if (m9 > u12.xTopLeft && m9 < u12.xBottomRight && f6 > -u12.yBottomRight && f6 < -u12.yTopLeft) {
      this._earlyReturn = true;
      break;
    }
  }
  _hitTestFill(t16) {
    let e15 = null;
    if (m(t16)) {
      const r18 = t16;
      e15 = [[[r18.xmin, r18.ymin], [r18.xmin, r18.ymax], [r18.xmax, r18.ymax], [r18.xmax, r18.ymin], [r18.xmin, r18.ymin]]];
    } else if (y(t16)) e15 = t16.rings;
    else {
      if (!s3(t16)) return;
      e15 = t16.paths;
    }
    const r17 = this.reverseTransformPt(this._searchPoint);
    if (gt(r17, e15) && (this._earlyReturn = true), !this._earlyReturn) {
      pt(r17, e15, this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
    }
  }
  _getSvgPath() {
    return null != this._svg && null != this._path || (this._svg ?? (this._svg = e14()), this._path ?? (this._path = t15("path")), this._svg.appendChild(this._path)), this._path;
  }
  _getCanvasContext(t16, e15) {
    return this._canvas ?? (this._canvas = document.createElement("canvas")), this._canvas.width = t16, this._canvas.height = e15, this._canvas.getContext("2d", { willReadFrequently: true });
  }
  _hittestSvgPath(t16, e15, r17, i16 = 0) {
    const s14 = this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint(), o9 = this.reverseTransformPt(this._searchPoint), n19 = u();
    a3(n19, t16);
    const a13 = { x: n19[0], y: n19[1], width: n19[2] - n19[0], height: n19[3] - n19[1] }, l11 = this._getSvgPath();
    l11.setAttribute("d", e15);
    const c5 = l11.getBBox();
    let m9 = Math.max(c5.width / a13.width, c5.height / a13.height), f6 = 1;
    const u12 = 2 * s14 * m9;
    u12 < 1 && (f6 = 2 / u12, m9 *= f6, c5.x *= f6, c5.y *= f6, c5.width *= f6, c5.height *= f6);
    const d3 = 1 + i16 * m9 / 2, g4 = this._getCanvasContext(c5.width + 2 * d3, c5.height + 2 * d3);
    g4.setTransform(f6, 0, 0, f6, -c5.x + d3, -c5.y + d3);
    const _6 = new Path2D(e15);
    r17 ? g4.fill(_6) : (g4.lineWidth = i16 * (m9 / f6), g4.stroke(_6));
    const y6 = (a13.width * m9 - c5.width) / 2, P5 = (a13.height * m9 - c5.height) / 2, S3 = Math.floor((o9[0] - a13.x - s14) * m9 - y6 + d3), w5 = Math.floor((a13.height - (o9[1] - a13.y) - s14) * m9 + P5 + d3), x4 = Math.ceil(2 * s14 * m9), M5 = Math.ceil(2 * s14 * m9), b5 = g4.getImageData(S3, w5, x4, M5).data;
    for (let h8 = 3; h8 < b5.length; h8 += 4) if (b5[h8] > 127.5) return void (this._earlyReturn = true);
  }
  _hitTestStroke(t16, e15) {
    let r17 = null;
    if (m(t16)) {
      const e16 = t16;
      r17 = [[[e16.xmin, e16.ymin], [e16.xmin, e16.ymax], [e16.xmax, e16.ymax], [e16.xmax, e16.ymin], [e16.xmin, e16.ymin]]];
    } else if (y(t16)) r17 = t16.rings;
    else {
      if (!s3(t16)) return;
      r17 = t16.paths;
    }
    pt(this.reverseTransformPt(this._searchPoint), r17, p2(e15, n3.CIMSolidStroke.width) * this.geomUnitsPerPoint() / 2 + this.reverseTransformScalar(this._searchDistPoint) * this.prevGeomUnitsPerPoint()) && (this._earlyReturn = true);
  }
};
var ut = class extends ct {
  constructor(t16, e15, r17, i16) {
    super(e15, r17), this._applyAdditionalRenderProps = i16, this._colorSubstitutionHelper = new t11(), this._ctx = t16;
  }
  drawSolidFill(t16, e15) {
    if (!t16) return;
    if (y(t16)) this._buildPath(t16.rings, true);
    else if (s3(t16)) this._buildPath(t16.paths, true);
    else if (m(t16)) this._buildPath(yt(t16).rings, true);
    else {
      if (!u2(t16)) return;
      console.log("CanvasDrawHelper.drawSolidFill - No implementation!");
    }
    const r17 = this._ctx;
    r17.fillStyle = "string" == typeof e15 ? e15 : "rgba(" + Math.round(e15[0]) + "," + Math.round(e15[1]) + "," + Math.round(e15[2]) + "," + (e15[3] ?? 255) / 255 + ")", r17.fill("evenodd");
  }
  drawSolidStroke(t16, e15, r17, i16, s14, o9) {
    if (!t16 || !e15 || 0 === r17) return;
    if (y(t16)) this._buildPath(t16.rings, true);
    else if (s3(t16)) this._buildPath(t16.paths, false);
    else {
      if (!m(t16)) return void console.log("CanvasDrawHelper.drawSolidStroke isn't implemented!");
      this._buildPath(yt(t16).rings, true);
    }
    const n19 = this._ctx;
    n19.strokeStyle = "string" == typeof e15 ? e15 : "rgba(" + Math.round(e15[0]) + "," + Math.round(e15[1]) + "," + Math.round(e15[2]) + "," + (e15[3] ?? 255) / 255 + ")", n19.lineWidth = Math.max(this.transformSize(r17), at), this._setCapStyle(i16), this._setJoinStyle(s14), n19.miterLimit = o9, n19.stroke();
  }
  pushClipPath(t16) {
    if (this._ctx.save(), y(t16)) this._buildPath(t16.rings, true);
    else if (s3(t16)) this._buildPath(t16.paths, true);
    else {
      if (!m(t16)) return;
      this._buildPath(yt(t16).rings, true);
    }
    this._ctx.clip("evenodd");
  }
  popClipPath() {
    this._ctx.restore();
  }
  drawImage(t16, e15) {
    const { colorSubstitutions: r17, url: i16, tintColor: s14 } = t16, o9 = p2(t16.scaleX, 1), n19 = this._resourceManager.getResource(i16);
    if (null == n19) return;
    let a13 = e15 * (n19.width / n19.height), l11 = e15;
    e15 || (a13 = n19.width, l11 = n19.height);
    const h8 = G3(i16) || "src" in n19 && G3(n19.src);
    let c5 = "getFrame" in n19 ? t12(n19) : n19;
    r17 && (c5 = this._colorSubstitutionHelper.applyColorSubstitution(c5, r17)), this._applyAdditionalRenderProps && !h8 && s14 && (c5 = this._colorSubstitutionHelper.tintImageData(c5, s14));
    const m9 = this.transformPt([0, 0]), [f6, u12] = this.getTransformAngle(), d3 = this.transformSize(1), g4 = this._ctx;
    g4.save(), g4.setTransform({ m11: o9 * d3 * f6, m12: o9 * d3 * u12, m21: -d3 * u12, m22: d3 * f6, m41: m9[0], m42: m9[1] }), g4.drawImage(c5, -a13 / 2, -l11 / 2, a13, l11), g4.restore();
  }
  drawText(t16, e15) {
    if (!e15 || 0 === e15.length) return;
    this._textRasterizer || (this._textRasterizer = new s12());
    const r17 = St(t16, this.transformSize(e2(1))), i16 = this._textRasterizer.rasterizeText(e15, r17);
    if (!i16) return;
    const { size: s14, anchorX: n19, anchorY: a13, canvas: l11 } = i16, h8 = s14[0] * (n19 + 0.5), c5 = s14[1] * (a13 - 0.5), m9 = this._ctx, f6 = this.transformPt([0, 0]), [u12, d3] = this.getTransformAngle(), g4 = 1;
    m9.save(), m9.setTransform({ m11: g4 * u12, m12: g4 * d3, m21: -1 * d3, m22: g4 * u12, m41: f6[0] - g4 * h8, m42: f6[1] + g4 * c5 }), m9.drawImage(l11, 0, 0), m9.restore();
  }
  drawPictureFill(t16, e15) {
    if (!t16) return;
    let { colorSubstitutions: r17, height: i16, offsetX: s14, offsetY: o9, rotation: n19, scaleX: a13, tintColor: l11, url: h8 } = e15;
    const c5 = this._resourceManager.getResource(h8);
    if (null == c5) return;
    if (y(t16)) this._buildPath(t16.rings, true);
    else if (s3(t16)) this._buildPath(t16.paths, true);
    else if (m(t16)) this._buildPath(yt(t16).rings, true);
    else {
      if (!u2(t16)) return;
      console.log("CanvasDrawHelper.drawPictureFill - No implementation!");
    }
    const m9 = this._ctx, f6 = G3(h8) || "src" in c5 && G3(c5.src);
    let u12, d3 = "getFrame" in c5 ? t12(c5) : c5;
    if (r17 && (d3 = this._colorSubstitutionHelper.applyColorSubstitution(d3, r17)), this._applyAdditionalRenderProps) {
      f6 || l11 && (d3 = this._colorSubstitutionHelper.tintImageData(d3, l11)), u12 = m9.createPattern(d3, "repeat");
      const t17 = this.transformSize(1);
      n19 || (n19 = 0), s14 ? s14 *= t17 : s14 = 0, o9 ? o9 *= t17 : o9 = 0, i16 && (i16 *= t17);
      const e16 = i16 ? i16 / c5.height : 1, r18 = a13 && i16 ? a13 * i16 / c5.width : 1;
      if (0 !== n19 || 1 !== e16 || 1 !== r18 || 0 !== s14 || 0 !== o9) {
        const t18 = new DOMMatrix();
        t18.rotateSelf(0, 0, -n19).translateSelf(s14, o9).scaleSelf(r18, e16, 1), u12.setTransform(t18);
      }
    } else u12 = m9.createPattern(d3, "repeat");
    m9.save(), m9.fillStyle = u12, m9.fill("evenodd"), m9.restore();
  }
  drawPictureStroke(t16, r17) {
    if (!t16) return;
    let { colorSubstitutions: i16, capStyle: s14, joinStyle: o9, miterLimit: a13, tintColor: l11, url: h8, width: c5 } = r17;
    const m9 = this._resourceManager.getResource(h8);
    if (null == m9) return;
    let f6;
    if (y(t16)) f6 = t16.rings;
    else if (s3(t16)) f6 = t16.paths;
    else {
      if (!m(t16)) return u2(t16) ? void console.log("CanvasDrawHelper.drawPictureStroke - No implementation!") : void 0;
      f6 = yt(t16).rings;
    }
    c5 || (c5 = m9.width);
    const u12 = G3(h8) || "src" in m9 && G3(m9.src);
    let d3 = "getFrame" in m9 ? t12(m9) : m9;
    i16 && (d3 = this._colorSubstitutionHelper.applyColorSubstitution(d3, i16)), this._applyAdditionalRenderProps && (u12 || l11 && (d3 = this._colorSubstitutionHelper.tintImageData(d3, l11)));
    const g4 = Math.max(this.transformSize(u3(c5)), 0.5), p8 = g4 / d3.width, _6 = this._ctx, y6 = _6.createPattern(d3, "repeat-y");
    let M5, b5;
    _6.save(), this._setCapStyle(s14), this._setJoinStyle(o9), void 0 !== a13 && (_6.miterLimit = a13), _6.lineWidth = g4;
    for (let n19 of f6) if (n19 = a(n19), xt(n19), n19 && !(n19.length <= 1)) {
      M5 = this.transformPt(n19[0]);
      for (let t17 = 1; t17 < n19.length; t17++) {
        b5 = this.transformPt(n19[t17]);
        const e15 = _t(M5, b5), r18 = new DOMMatrix();
        r18.translateSelf(0, M5[1] - g4 / 2).scaleSelf(p8, p8, 1).rotateSelf(0, 0, 90 - e15), y6.setTransform(r18), _6.strokeStyle = y6, _6.beginPath(), _6.moveTo(M5[0], M5[1]), _6.lineTo(b5[0], b5[1]), _6.stroke(), M5 = b5;
      }
    }
    _6.restore();
  }
  drawGradientFill(t16, e15) {
    if (!t16) return;
    let r17;
    if (y(t16)) r17 = t16.rings;
    else if (s3(t16)) r17 = t16.paths;
    else {
      if (!m(t16)) return void lt().error("Unable to draw gradient fill");
      r17 = yt(t16).rings;
    }
    this._buildPath(r17, true);
    const { angle: s14, gradientMethod: o9, gradientSize: a13, gradientSizeUnits: l11 } = e15, h8 = n3.CIMGradientFill, p8 = e15.gradientType ?? h8.gradientType, _6 = -s(s14 ?? 0), y6 = H();
    for (const i16 of r17) {
      const t17 = i16 ? i16.length : 0;
      if (t17 > 1) for (let e16 = 0; e16 < t17; e16++) {
        let t18 = this.transformPt(i16[e16]);
        "Linear" !== o9 && "Rectangular" !== o9 || (t18 = t13(t18, -_6)), f3(y6, t18);
      }
    }
    const [x4, M5, b5, k2] = y6, C4 = this._ctx;
    switch (C4.save(), o9) {
      case "Buffered":
        lt().error(`Gradient method "${o9}" currently unsupported.`);
        break;
      case "Linear": {
        const t17 = (M5 + k2) / 2, r18 = "Absolute" === l11 ? this.transformSize(u3(a13)) : Q2(a13, h8.gradientSize) * (b5 - x4), [i16, s15] = "Discrete" === p8 ? [b5, b5 - r18] : [x4 + r18, x4], o10 = t13([i16, t17], _6), c5 = t13([s15, t17], _6), m9 = C4.createLinearGradient(o10[0], o10[1], c5[0], c5[1]);
        p3(m9, e15), C4.fillStyle = m9, C4.fill("evenodd");
        break;
      }
      case "Circular": {
        const t17 = p(y6), r18 = b(y6) / 2, i16 = "Absolute" === l11 ? this.transformSize(u3(a13)) : Q2(a13, h8.gradientSize) * r18, [s15, o10] = "Discrete" === p8 ? [r18, r18 - i16] : [i16, 0], c5 = C4.createRadialGradient(t17[0], t17[1], s15, t17[0], t17[1], o10);
        p3(c5, e15), C4.fillStyle = c5, C4.fill("evenodd");
        break;
      }
      case "Rectangular": {
        const r18 = p(y6), i16 = r18[0], s15 = r18[1], o10 = t13(r18, _6), c5 = (r19, i17, s16, n19, a14, l12, h9, c6) => {
          C4.save(), this.pushClipPath(t16);
          const m10 = t13([a14, l12], _6), f6 = t13([h9, c6], _6);
          C4.beginPath(), C4.moveTo(o10[0], o10[1]), C4.lineTo(m10[0], m10[1]), C4.lineTo(f6[0], f6[1]), C4.lineTo(o10[0], o10[1]), C4.clip();
          const u12 = t13([r19, i17], _6), d3 = t13([s16, n19], _6), g5 = C4.createLinearGradient(u12[0], u12[1], d3[0], d3[1]);
          p3(g5, e15), C4.fillStyle = g5, C4.fill("evenodd"), C4.restore();
        };
        let m9 = "Absolute" === l11 ? this.transformSize(u3(a13)) : Q2(a13, h8.gradientSize) * (M(y6) / 2), [g4, P5] = "Discrete" === p8 ? [b5, b5 - m9] : [i16 + m9, i16];
        c5(g4, s15, P5, s15, b5, M5, b5, k2), [g4, P5] = "Discrete" === p8 ? [x4, x4 + m9] : [i16 - m9, i16], c5(g4, s15, P5, s15, x4, k2, x4, M5), m9 = "Absolute" === l11 ? this.transformSize(u3(a13)) : Q2(a13, h8.gradientSize) * (s2(y6) / 2);
        let [S3, w5] = "Discrete" === p8 ? [k2, k2 - m9] : [s15 + m9, s15];
        c5(i16, S3, i16, w5, b5, k2, x4, k2), [S3, w5] = "Discrete" === p8 ? [M5, M5 + m9] : [s15 - m9, s15], c5(i16, S3, i16, w5, x4, M5, b5, M5);
        break;
      }
    }
    C4.restore();
  }
  drawGradientStroke(t16, r17) {
    const { capStyle: i16, gradientMethod: s14, gradientSize: o9, gradientSizeUnits: a13, joinStyle: l11, miterLimit: h8, width: c5 } = r17;
    if (!t16 || 0 === c5) return;
    let m9;
    if (y(t16)) m9 = t16.rings;
    else if (s3(t16)) m9 = t16.paths;
    else {
      if (!m(t16)) return void lt().error("Unable to draw gradient stroke");
      m9 = yt(t16).rings;
    }
    const f6 = r17.gradientType ?? n3.CIMGradientStroke.gradientType, u12 = Math.max(this.transformSize(u3(c5)), 0.5), d3 = this._ctx;
    let g4, p8;
    d3.save(), this._setCapStyle(i16), this._setJoinStyle(l11), void 0 !== h8 && (d3.miterLimit = h8), d3.lineWidth = u12;
    for (let _6 of m9) {
      if (_6 = a(_6), xt(_6), !_6 || _6.length <= 1) continue;
      let t17 = 0;
      g4 = this.transformPt(_6[0]);
      for (let e15 = 1; e15 < _6.length; e15++) {
        p8 = this.transformPt(_6[e15]);
        const r18 = p8[0] - g4[0], i18 = p8[1] - g4[1];
        t17 += Math.sqrt(r18 * r18 + i18 * i18), g4 = p8;
      }
      const i17 = "Absolute" === a13 ? this.transformSize(u3(o9)) : Q2(o9, n3.CIMGradientStroke.gradientSize) * ("AcrossLine" === s14 ? u12 : t17);
      let l12 = 0;
      g4 = this.transformPt(_6[0]);
      for (let e15 = 1; e15 < _6.length; e15++) {
        p8 = this.transformPt(_6[e15]);
        const o10 = p8[0] - g4[0], n19 = p8[1] - g4[1], a14 = Math.sqrt(o10 * o10 + n19 * n19);
        let h9, c6, m10, y6;
        switch (s14) {
          case "AcrossLine": {
            const [t18, e16] = t13([o10 / a14, n19 / a14], -Math.PI / 2), r18 = u12 / 2, s15 = "Discrete" === f6 ? r18 : i17 - r18;
            h9 = (g4[0] + p8[0]) / 2 + t18 * s15, c6 = (g4[1] + p8[1]) / 2 + e16 * s15, m10 = h9 - t18 * i17, y6 = c6 - e16 * i17;
            break;
          }
          case "AlongLine": {
            const e16 = o10 / a14, r18 = n19 / a14;
            "Discrete" === f6 ? (h9 = g4[0] - e16 * l12, c6 = g4[1] - r18 * l12, m10 = h9 + e16 * i17, y6 = c6 + r18 * i17) : (m10 = g4[0] + e16 * (t17 - l12), y6 = g4[1] + r18 * (t17 - l12), h9 = m10 - e16 * i17, c6 = y6 - r18 * i17);
            break;
          }
          default:
            return lt().error("Unrecognized gradient method:", s14), void d3.restore();
        }
        const P5 = d3.createLinearGradient(h9, c6, m10, y6);
        p3(P5, r17), d3.strokeStyle = P5, d3.beginPath(), d3.moveTo(g4[0], g4[1]), d3.lineTo(p8[0], p8[1]), d3.stroke(), l12 += a14, g4 = p8;
      }
    }
    d3.restore();
  }
  _buildPath(t16, e15) {
    const r17 = this._ctx;
    if (r17.beginPath(), t16) for (const i16 of t16) {
      const t17 = i16 ? i16.length : 0;
      if (t17 > 1) {
        let s14 = this.transformPt(i16[0]);
        r17.moveTo(s14[0], s14[1]);
        for (let e16 = 1; e16 < t17; e16++) s14 = this.transformPt(i16[e16]), r17.lineTo(s14[0], s14[1]);
        e15 && r17.closePath();
      }
    }
  }
  _setCapStyle(t16) {
    switch (t16) {
      case w.Butt:
        this._ctx.lineCap = "butt";
        break;
      case w.Round:
        this._ctx.lineCap = "round";
        break;
      case w.Square:
        this._ctx.lineCap = "square";
    }
  }
  _setJoinStyle(t16) {
    switch (t16) {
      case G2.Bevel:
        this._ctx.lineJoin = "bevel";
        break;
      case G2.Round:
        this._ctx.lineJoin = "round";
        break;
      case G2.Miter:
        this._ctx.lineJoin = "miter";
    }
  }
};
function dt(t16, e15, r17) {
  let i16 = p2(t16.separation, n3.CIMHatchFill.separation) * r17, s14 = p2(t16.rotation);
  if (0 === i16) return null;
  i16 < 0 && (i16 = -i16);
  let o9 = 0;
  const n19 = 0.5 * i16;
  for (; o9 > n19; ) o9 -= i16;
  for (; o9 < -n19; ) o9 += i16;
  const a13 = u();
  a3(a13, e15), a13[0] -= n19, a13[1] -= n19, a13[2] += n19, a13[3] += n19;
  const l11 = [[a13[0], a13[1]], [a13[0], a13[3]], [a13[2], a13[3]], [a13[2], a13[1]]];
  for (; s14 > 180; ) s14 -= 180;
  for (; s14 < 0; ) s14 += 180;
  const c5 = Math.cos(s14 * nt), m9 = Math.sin(s14 * nt), f6 = -i16 * m9, u12 = i16 * c5;
  let d3, g4, _6, y6;
  o9 = p2(t16.offsetX) * r17 * m9 - p2(t16.offsetY) * r17 * c5, d3 = _6 = Number.MAX_VALUE, g4 = y6 = -Number.MAX_VALUE;
  for (const h8 of l11) {
    const t17 = h8[0], e16 = h8[1], r18 = c5 * t17 + m9 * e16, i17 = -m9 * t17 + c5 * e16;
    d3 = Math.min(d3, r18), _6 = Math.min(_6, i17), g4 = Math.max(g4, r18), y6 = Math.max(y6, i17);
  }
  _6 = Math.floor(_6 / i16) * i16;
  let P5 = c5 * d3 - m9 * _6 - f6 * o9 / i16, S3 = m9 * d3 + c5 * _6 - u12 * o9 / i16, w5 = c5 * g4 - m9 * _6 - f6 * o9 / i16, x4 = m9 * g4 + c5 * _6 - u12 * o9 / i16;
  const M5 = 1 + Math.round((y6 - _6) / i16), b5 = [];
  for (let h8 = 0; h8 < M5; h8++) P5 += f6, S3 += u12, w5 += f6, x4 += u12, b5.push([[P5, S3], [w5, x4]]);
  return { paths: b5 };
}
function gt(t16, e15) {
  let r17 = 0;
  for (const i16 of e15) {
    const e16 = i16.length;
    for (let s14 = 1; s14 < e16; s14++) {
      const e17 = i16[s14 - 1], o9 = i16[s14];
      if (e17[1] > t16[1] == o9[1] > t16[1]) continue;
      (o9[0] - e17[0]) * (t16[1] - e17[1]) - (o9[1] - e17[1]) * (t16[0] - e17[0]) > 0 ? r17++ : r17--;
    }
  }
  return 0 !== r17;
}
function pt(t16, e15, r17) {
  for (const i16 of e15) {
    const e16 = i16.length;
    for (let s14 = 1; s14 < e16; s14++) {
      const e17 = i16[s14 - 1], o9 = i16[s14];
      let n19 = (o9[0] - e17[0]) * (o9[0] - e17[0]) + (o9[1] - e17[1]) * (o9[1] - e17[1]);
      if (0 === n19) continue;
      n19 = Math.sqrt(n19);
      const a13 = ((o9[0] - e17[0]) * (t16[1] - e17[1]) - (o9[1] - e17[1]) * (t16[0] - e17[0])) / n19;
      if (Math.abs(a13) < r17) {
        const i17 = ((o9[0] - e17[0]) * (t16[0] - e17[0]) + (o9[1] - e17[1]) * (t16[1] - e17[1])) / n19;
        if (i17 > -r17 && i17 < n19 + r17) return true;
      }
    }
  }
  return false;
}
function _t(t16, e15) {
  const r17 = e15[0] - t16[0], i16 = e15[1] - t16[1];
  return 180 / Math.PI * Math.atan2(i16, r17);
}
var yt = (t16) => t16 ? { spatialReference: t16.spatialReference, rings: [[[t16.xmin, t16.ymin], [t16.xmin, t16.ymax], [t16.xmax, t16.ymax], [t16.xmax, t16.ymin], [t16.xmin, t16.ymin]]] } : null;
var Pt = (t16, e15, r17) => {
  switch (t16) {
    case "ExtraLeading":
      return 1 + e15 / r17;
    case "Multiple":
      return e15;
    case "Exact":
      return e15 / r17;
  }
};
function St(e15, r17 = 1) {
  var _a;
  const i16 = L(e15), s14 = w2(e15.fontStyleName), o9 = e15.fontFamilyName ?? t3, { weight: n19, style: a13 } = s14, l11 = r17 * (e15.height || 5), h8 = N2(e15.horizontalAlignment), c5 = F(e15.verticalAlignment), m9 = T2(e15), f6 = T2(e15.haloSymbol), u12 = null != f6 ? r17 * (e15.haloSize ?? 0) : 0, d3 = A(e15.symbol), g4 = r17 * (x(e15.symbol) || 0), p8 = "CIMBackgroundCallout" === ((_a = e15.callout) == null ? void 0 : _a.type) ? e15.callout.backgroundSymbol : null, _6 = T2(p8), y6 = x(p8), P5 = A(p8);
  return { color: m9, size: l11, horizontalAlignment: h8, verticalAlignment: c5, font: { family: o9, style: g2(a13), weight: P2(n19), decoration: i16 }, outline: { size: g4 || 0, color: d3 }, halo: { size: u12 || 0, color: f6, style: a13 }, backgroundColor: _6, borderLine: null != y6 && null != P5 ? { size: y6, color: P5 } : null, pixelRatio: 1, premultiplyColors: true };
}
var wt = 1e-4;
function xt(t16) {
  let e15, r17, i16, s14, o9, n19 = t16[0], a13 = 1;
  for (; a13 < t16.length; ) e15 = t16[a13][0] - n19[0], r17 = t16[a13][1] - n19[1], s14 = 0 !== e15 ? r17 / e15 : Math.PI / 2, void 0 !== i16 && Math.abs(s14 - i16) <= wt ? (t16.splice(a13 - 1, 1), n19 = o9) : (o9 = n19, n19 = t16[a13], a13++), i16 = s14;
}

// node_modules/@arcgis/core/core/BidiText.js
var n18 = new C2();
function i15(r17) {
  if (null == r17) return ["", false];
  if (!n18.hasBidiChar(r17)) return [r17, false];
  let i16;
  return i16 = "rtl" === n18.checkContextual(r17) ? "IDNNN" : "ICNNN", [n18.bidiTransform(r17, i16, "VLYSN"), true];
}

// node_modules/@arcgis/core/symbols/cim/CIMSymbolHelper.js
var N4 = Math.PI;
var Y2 = N4 / 2;
var _5 = Math.PI / 180;
var U = 96 / 72;
var q = 1.4142135623730951;
var H3 = 2;
var O2 = 4;
var W = () => n.getLogger("esri.symbols.cim.CIMSymbolHelper");
function $(e15) {
  let t16;
  switch (e15.type) {
    case "cim":
      return e15.data;
    case "web-style":
      return e15;
    case "simple-marker": {
      const r17 = te2.fromSimpleMarker(e15);
      if (!r17) throw new Error("InternalError: Cannot convert symbol to CIM");
      t16 = r17;
      break;
    }
    case "picture-marker":
      t16 = te2.fromPictureMarker(e15);
      break;
    case "simple-line":
      t16 = te2.fromSimpleLineSymbol(e15);
      break;
    case "simple-fill":
      t16 = te2.fromSimpleFillSymbol(e15);
      break;
    case "picture-fill":
      t16 = te2.fromPictureFillSymbol(e15);
      break;
    case "text":
      t16 = te2.fromTextSymbol(e15);
  }
  return { type: "CIMSymbolReference", symbol: t16 };
}
function J(e15, t16, r17) {
  switch (t16.type) {
    case "CIMSymbolReference":
      return J(e15, t16.symbol, r17);
    case "CIMPointSymbol":
      null == r17 && (r17 = { x: 0, y: 0 }), e15.drawSymbol(t16, r17);
      break;
    case "CIMLineSymbol":
      null == r17 && (r17 = { paths: [[[0, 0], [10, 0]]] }), e15.drawSymbol(t16, r17);
      break;
    case "CIMPolygonSymbol":
      null == r17 && (r17 = { rings: [[[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]] }), e15.drawSymbol(t16, r17);
      break;
    case "CIMTextSymbol": {
      const r18 = { x: 0, y: 0 };
      e15.drawSymbol(t16, r18);
      break;
    }
    case "CIMVectorMarker": {
      const r18 = new t6();
      e15.drawMarker(t16, r18);
      break;
    }
  }
  return e15.envelope();
}
function K2(e15) {
  if (!e15) return 0;
  switch (e15.type) {
    case "CIMMarkerPlacementAlongLineSameSize":
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAtExtremities":
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementAtRatioPositions":
    case "CIMMarkerPlacementOnLine":
    case "CIMMarkerPlacementOnVertices":
      return Math.abs(e15.offset);
    default:
      return 0;
  }
}
function Q3(e15) {
  if (!e15) return 0;
  switch (e15.type) {
    case "CIMGeometricEffectArrow":
      return Math.abs(0.5 * e15.width);
    case "CIMGeometricEffectBuffer":
      return Math.abs(e15.size);
    case "CIMGeometricEffectControlMeasureLine":
      return 500;
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectRadial":
      return Math.abs(e15.length);
    case "CIMGeometricEffectJog":
      return Math.abs(0.5 * e15.length);
    case "CIMGeometricEffectMove":
      return Math.max(Math.abs(p2(e15.offsetX)), Math.abs(p2(e15.offsetY)));
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      return Math.abs(e15.offset);
    case "CIMGeometricEffectRegularPolygon":
      return Math.abs(e15.radius);
    case "CIMGeometricEffectRotate":
    case "CIMGeometricEffectScale":
    default:
      return 0;
    case "CIMGeometricEffectTaperedPolygon":
      return 0.5 * Math.max(Math.abs(e15.fromWidth), Math.abs(e15.toWidth));
    case "CIMGeometricEffectWave":
      return Math.abs(e15.amplitude);
    case "CIMGeometricEffectDonut":
      return Math.abs(e15.width);
  }
}
function Z2(e15) {
  if (!e15) return 0;
  let t16 = 0;
  for (const r17 of e15) t16 += Q3(r17);
  return t16;
}
var ee = class {
  static getSymbolInflateSize(e15, t16, r17, o9, a13) {
    return e15 || (e15 = [0, 0, 0, 0]), t16 ? this._getInflateSize(e15, t16, r17, o9, a13) : e15;
  }
  static safeSize(e15) {
    const t16 = Math.max(Math.abs(e15[0]), Math.abs(e15[2])), r17 = Math.max(Math.abs(e15[1]), Math.abs(e15[3]));
    return Math.sqrt(t16 * t16 + r17 * r17);
  }
  static _vectorMarkerBounds(e15, t16, r17, o9) {
    let a13 = true;
    const i16 = u();
    if (t16 == null ? void 0 : t16.markerGraphics) for (const s14 of t16.markerGraphics) {
      const t17 = [0, 0, 0, 0];
      s14.geometry && (a3(i16, s14.geometry), t17[0] = 0, t17[1] = 0, t17[2] = 0, t17[3] = 0, this.getSymbolInflateSize(t17, s14.symbol, r17, 0, o9), i16[0] += t17[0], i16[1] += t17[1], i16[2] += t17[2], i16[3] += t17[3], a13 ? (e15[0] = i16[0], e15[1] = i16[1], e15[2] = i16[2], e15[3] = i16[3], a13 = false) : (e15[0] = Math.min(e15[0], i16[0]), e15[1] = Math.min(e15[1], i16[1]), e15[2] = Math.max(e15[2], i16[2]), e15[3] = Math.max(e15[3], i16[3])));
    }
    return e15;
  }
  static _getInflateSize(e15, t16, r17, o9, a13) {
    if (ye(t16)) {
      const s14 = this._getLayersInflateSize(e15, t16.symbolLayers, r17, o9, a13), i16 = Z2(t16.effects);
      return i16 > 0 && (s14[0] -= i16, s14[1] -= i16, s14[2] += i16, s14[3] += i16), s14;
    }
    return this._getTextInflatedSize(e15, t16, a13);
  }
  static _getLayersInflateSize(e15, t16, r17, o9, a13) {
    let n19 = true;
    if (!t16) return e15;
    for (const l11 of t16) {
      if (!l11) continue;
      let t17 = [0, 0, 0, 0];
      switch (l11.type) {
        case "CIMSolidFill":
        case "CIMPictureFill":
        case "CIMHatchFill":
        case "CIMGradientFill":
          break;
        case "CIMSolidStroke":
        case "CIMPictureStroke":
        case "CIMGradientStroke": {
          const e16 = l11;
          let r18 = e16.width;
          null != r18 && (e16.capStyle === w.Square || e16.joinStyle === G2.Miter ? r18 /= q : r18 /= 2, t17[0] = -r18, t17[1] = -r18, t17[2] = r18, t17[3] = r18);
          break;
        }
        case "CIMCharacterMarker":
        case "CIMVectorMarker":
        case "CIMPictureMarker": {
          const e16 = l11;
          if ("CIMVectorMarker" === l11.type) {
            const e17 = l11;
            if (t17 = this._vectorMarkerBounds(t17, e17, r17, a13), e17.frame) {
              const r18 = (e17.frame.xmin + e17.frame.xmax) / 2, o10 = (e17.frame.ymin + e17.frame.ymax) / 2;
              if (t17[0] -= r18, t17[1] -= o10, t17[2] -= r18, t17[3] -= o10, null != e17.size) {
                const r19 = e17.size / (e17.frame.ymax - e17.frame.ymin);
                t17[0] *= r19, t17[1] *= r19, t17[2] *= r19, t17[3] *= r19;
              }
            }
          } else if ("CIMPictureMarker" === l11.type) {
            const o10 = l11, a14 = r17.getResource(o10.url);
            let s14 = 1;
            if (null != a14 && a14.height && (s14 = a14.width / a14.height), null != e16.size) {
              const r18 = e16.size / 2, a15 = e16.size * s14 * o10.scaleX / 2;
              t17 = [-a15, -r18, a15, r18];
            }
          } else if (null != e16.size) {
            const r18 = e16.size / 2;
            t17 = [-r18, -r18, r18, r18];
          }
          if (e16.anchorPoint) {
            let r18, o10;
            "Absolute" === e16.anchorPointUnits ? (r18 = e16.anchorPoint.x, o10 = e16.anchorPoint.y) : (r18 = e16.anchorPoint.x * (t17[2] - t17[0]), o10 = e16.anchorPoint.y * (t17[3] - t17[1]));
            const a14 = 1.25 * Math.sqrt(r18 * r18 + o10 * o10);
            t17[0] -= a14, t17[1] -= a14, t17[2] += a14, t17[3] += a14;
          }
          let n20 = p2(e16.rotation);
          if (e16.rotateClockwise && (n20 = -n20), o9 && (n20 -= o9), n20) {
            const e17 = _5 * n20, r18 = Math.cos(e17), o10 = Math.sin(e17), a14 = u([r, r, -r, -r]);
            f3(a14, [t17[0] * r18 - t17[1] * o10, t17[0] * o10 + t17[1] * r18]), f3(a14, [t17[0] * r18 - t17[3] * o10, t17[0] * o10 + t17[3] * r18]), f3(a14, [t17[2] * r18 - t17[1] * o10, t17[2] * o10 + t17[1] * r18]), f3(a14, [t17[2] * r18 - t17[3] * o10, t17[2] * o10 + t17[3] * r18]), t17 = a14;
          }
          let c6 = p2(e16.offsetX), m9 = p2(e16.offsetY);
          if (o9) {
            const e17 = _5 * o9, t18 = Math.cos(e17), r18 = Math.sin(e17), a14 = c6 * r18 + m9 * t18;
            c6 = c6 * t18 - m9 * r18, m9 = a14;
          }
          t17[0] += c6, t17[1] += m9, t17[2] += c6, t17[3] += m9;
          const f6 = K2(e16.markerPlacement);
          f6 > 0 && (t17[0] -= f6, t17[1] -= f6, t17[2] += f6, t17[3] += f6);
          break;
        }
      }
      const c5 = Z2(l11.effects);
      c5 > 0 && (t17[0] -= c5, t17[1] -= c5, t17[2] += c5, t17[3] += c5), n19 ? (e15[0] = t17[0], e15[1] = t17[1], e15[2] = t17[2], e15[3] = t17[3], n19 = false) : (e15[0] = Math.min(e15[0], t17[0]), e15[1] = Math.min(e15[1], t17[1]), e15[2] = Math.max(e15[2], t17[2]), e15[3] = Math.max(e15[3], t17[3]));
    }
    return e15;
  }
  static _getTextInflatedSize(e15, t16, r17) {
    var _a;
    const o9 = s13(t16.height ?? n3.CIMTextSymbol.height);
    if (e15[0] = -o9 / 2, e15[1] = -o9 / 2, e15[2] = o9 / 2, e15[3] = o9 / 2, !r17) return e15;
    const a13 = r17.get(t16);
    if (!a13) return e15;
    if (!a13.glyphMosaicItems.glyphs.length) return e15;
    const { lineGapType: s14, lineGap: i16 } = t16, n19 = s14 ? Pt(s14, i16 ?? 0, o9) : 0, l11 = "CIMBackgroundCallout" === ((_a = t16.callout) == null ? void 0 : _a.type), c5 = O(a13.glyphMosaicItems, { scale: o9 / A2, angle: p2(t16.angle), xOffset: p2(t16.offsetX), yOffset: p2(t16.offsetY), horizontalAlignment: t16.horizontalAlignment, verticalAlignment: t16.verticalAlignment, maxLineWidth: a12(t16.lineWidth), lineHeight: G4 * Math.max(0.25, Math.min(n19 || 1, 4)), decoration: t16.font.decoration || "none", useCIMAngleBehavior: true, hasBackground: l11 }).boundsT, m9 = Math.sqrt(c5.width * c5.width + c5.height * c5.height);
    return e15[0] -= c5.x + m9, e15[1] -= c5.y - m9, e15[2] += c5.x + m9, e15[3] += -c5.y + m9, e15;
  }
};
var te2 = class _te {
  static getEnvelope(e15, t16, r17) {
    if (!e15) return null;
    const o9 = new mt(r17);
    if (Array.isArray(e15)) {
      let r18;
      for (const a13 of e15) r18 ? r18.union(J(o9, a13, t16)) : r18 = J(o9, a13, t16);
      return r18;
    }
    return J(o9, e15, t16);
  }
  static getTextureInfo(e15, t16, r17, o9, a13) {
    const s14 = o9 ?? this.getEnvelope(e15, null, t16);
    if (!s14) return [0, 0, 0, 0, 1];
    const i16 = Math.max(s14.width, s14.height) * U;
    let n19 = null != a13 ? Math.max(a13 / i16, 1) : 1;
    n19 *= U, s14.x *= n19, s14.y *= n19, s14.width *= n19, s14.height *= n19, s14.width = Math.max(Math.ceil(s14.x + s14.width) - Math.floor(s14.x), 1) - 1, s14.height = Math.max(Math.ceil(s14.y + s14.height) - Math.floor(s14.y), 1) - 1;
    let l11 = s14.x + 0.5 * s14.width, c5 = s14.y + 0.5 * s14.height;
    return l11 += s14.x - Math.floor(s14.x), c5 += s14.y - Math.floor(s14.y), o9 || (s14.width += r17, s14.height += r17, l11 += r17 / 2, c5 += r17 / 2), [s14.width, s14.height, l11, c5, n19];
  }
  static getTextureAnchor(e15, t16, r17) {
    const [o9, a13, s14, i16, n19] = this.getTextureInfo(e15, t16, H3, null, r17);
    return [-s14 / o9, -i16 / a13, a13 / n19 * U];
  }
  static rasterize(e15, t16, r17, o9, a13 = true, s14) {
    const [i16, n19, l11, m9, h8] = this.getTextureInfo(t16, o9, H3, r17, s14);
    e15.width = i16, e15.height = n19;
    const u12 = e15.getContext("2d", { willReadFrequently: true }), M5 = ht.createScale(h8, -h8);
    M5.translate(0.5 * i16 - l11, 0.5 * n19 + m9);
    const p8 = new ut(u12, o9, M5);
    switch (t16.type) {
      case "CIMPointSymbol": {
        const e16 = { type: "point", x: 0, y: 0 };
        p8.drawSymbol(t16, e16);
        break;
      }
      case "CIMVectorMarker": {
        const e16 = new t6();
        p8.drawMarker(t16, e16);
        break;
      }
    }
    const S3 = u12.getImageData(0, 0, e15.width, e15.height), d3 = new Uint8Array(S3.data);
    if (a13) {
      let e16;
      for (let t17 = 0; t17 < d3.length; t17 += 4) e16 = d3[t17 + 3] / 255, d3[t17] = d3[t17] * e16, d3[t17 + 1] = d3[t17 + 1] * e16, d3[t17 + 2] = d3[t17 + 2] * e16;
    }
    return [d3, e15.width, e15.height, -l11 / i16, -m9 / n19];
  }
  static fromTextSymbol(e15) {
    const { text: t16 } = e15;
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPointUnits: "Relative", dominantSizeAxis3D: "Y", size: 10, billboardMode3D: "FaceNearPlane", frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { x: 0, y: 0 }, symbol: _te.createCIMTextSymbolfromTextSymbol(e15), textString: t16 }], scaleSymbolsProportionally: true, respectFrame: true }], scaleX: 1, angleAlignment: "Display" };
  }
  static fromPictureFillSymbol(e15) {
    const { height: t16, outline: r17, width: o9, xoffset: a13, xscale: s14, yoffset: i16, yscale: n19 } = e15, l11 = [], c5 = { type: "CIMPolygonSymbol", symbolLayers: l11 };
    if (r17) {
      const e16 = pe(r17);
      e16 && l11.push(e16);
    }
    let m9 = e15.url;
    "esriPFS" === e15.type && e15.imageData && (m9 = e15.imageData);
    const f6 = "angle" in e15 ? e15.angle ?? 0 : 0, y6 = (o9 ?? 0) * (s14 || 1), h8 = (t16 ?? 0) * (n19 || 1);
    return l11.push({ type: "CIMPictureFill", invertBackfaceTexture: false, scaleX: 1, textureFilter: oe.Picture, tintColor: null, url: m9, height: h8, width: y6, offsetX: p2(a13), offsetY: p2(i16), rotation: p2(-f6), colorSubstitutions: null }), c5;
  }
  static fromSimpleFillSymbol(e15) {
    const { color: r17, style: o9, outline: s14 } = e15, i16 = [], n19 = { type: "CIMPolygonSymbol", symbolLayers: i16 };
    if (s14) {
      const e16 = pe(s14);
      e16 && i16.push(e16);
    }
    if (o9 && "solid" !== o9 && "none" !== o9 && "esriSFSSolid" !== o9 && "esriSFSNull" !== o9) {
      const e16 = { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", color: ne(r17), capStyle: w.Butt, joinStyle: G2.Miter, width: 0.75 }] };
      let s15 = 0;
      const n20 = e2(ue(o9) ? 8 : 10);
      switch (o9) {
        case "vertical":
        case "esriSFSVertical":
          s15 = 90;
          break;
        case "forward-diagonal":
        case "esriSFSForwardDiagonal":
        case "diagonal-cross":
        case "esriSFSDiagonalCross":
          s15 = -45;
          break;
        case "backward-diagonal":
        case "esriSFSBackwardDiagonal":
          s15 = 45;
          break;
        case "cross":
        case "esriSFSCross":
          s15 = 0;
      }
      i16.push({ type: "CIMHatchFill", lineSymbol: e16, offsetX: 0, offsetY: 0, rotation: s15, separation: n20 }), "cross" === o9 || "esriSFSCross" === o9 ? i16.push({ type: "CIMHatchFill", lineSymbol: a(e16), offsetX: 0, offsetY: 0, rotation: 90, separation: n20 }) : "diagonal-cross" !== o9 && "esriSFSDiagonalCross" !== o9 || i16.push({ type: "CIMHatchFill", lineSymbol: a(e16), offsetX: 0, offsetY: 0, rotation: 45, separation: n20 });
    } else !o9 || "solid" !== o9 && "esriSFSSolid" !== o9 || i16.push({ type: "CIMSolidFill", enable: true, color: ne(r17) });
    return n19;
  }
  static fromSimpleLineSymbol(e15) {
    const { cap: t16, color: r17, join: o9, marker: a13, miterLimit: s14, style: i16, width: n19 } = e15;
    let l11 = null;
    "solid" !== i16 && "none" !== i16 && "esriSLSSolid" !== i16 && "esriSLSNull" !== i16 && (l11 = [{ type: "CIMGeometricEffectDashes", dashTemplate: fe(i16, t16), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]);
    const c5 = [];
    if (a13) {
      let e16;
      switch (a13.placement) {
        case "begin-end":
          e16 = o.Both;
          break;
        case "begin":
          e16 = o.JustBegin;
          break;
        case "end":
          e16 = o.JustEnd;
          break;
        default:
          e16 = o.None;
      }
      const t17 = _te.fromSimpleMarker(a13, n19, r17).symbolLayers[0];
      t17.markerPlacement = { type: "CIMMarkerPlacementAtExtremities", placePerPart: false, angleToLine: true, offset: 0, extremityPlacement: e16, offsetAlongLine: 0 }, c5.push(t17);
    }
    return c5.push({ type: "CIMSolidStroke", color: "none" !== i16 && "esriSLSNull" !== i16 ? ne(r17) : [0, 0, 0, 0], capStyle: oe2(t16), joinStyle: ae(o9), miterLimit: s14, width: n19, effects: l11 }), { type: "CIMLineSymbol", symbolLayers: c5 };
  }
  static fromPictureMarker(e15) {
    const { angle: t16, height: r17, width: o9, xoffset: a13, yoffset: s14 } = e15;
    let i16 = e15.url;
    return "esriPMS" === e15.type && e15.imageData && (i16 = e15.imageData), { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMPictureMarker", invertBackfaceTexture: false, scaleX: 1, textureFilter: oe.Picture, tintColor: null, url: i16, size: r17, width: o9, offsetX: p2(a13), offsetY: p2(s14), rotation: p2(-t16) }] };
  }
  static createCIMTextSymbolfromTextSymbol(t16) {
    const { angle: r17, color: o9, font: a13, haloColor: s14, haloSize: i16, horizontalAlignment: n19, kerning: l11, lineWidth: c5, text: m9, verticalAlignment: f6, xoffset: y6, yoffset: h8, backgroundColor: u12, borderLineColor: M5, borderLineSize: p8 } = t16;
    let S3, d3, L3, z2, D, E2;
    a13 && (S3 = a13.family, d3 = a13.style, L3 = a13.weight, z2 = a13.size, D = a13.decoration);
    let T4 = false;
    if (m9) {
      T4 = i15(m9)[1];
    }
    return (u12 || p8) && (E2 = { type: "CIMBackgroundCallout", margin: null, backgroundSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", color: ne(u12) }, { type: "CIMSolidStroke", color: ne(M5), width: p8 }] }, accentBarSymbol: null, gap: null, leaderLineSymbol: null, lineStyle: null }), { type: "CIMTextSymbol", angle: r17, blockProgression: T.BTT, depth3D: 1, extrapolateBaselines: true, fontEffects: l3.Normal, fontEncoding: a4.Unicode, fontFamilyName: S3 || "Arial", fontStyleName: le2(d3, L3), fontType: u5.Unspecified, haloSize: i16, height: z2, hinting: y2.Default, horizontalAlignment: se(n19 ?? "center"), kerning: l11, letterWidth: 100, ligatures: true, lineGapType: "Multiple", lineWidth: c5, offsetX: p2(y6), offsetY: p2(h8), strikethrough: "line-through" === D, underline: "underline" === D, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: ne(o9) }] }, haloSymbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: ne(s14) }] }, shadowColor: [0, 0, 0, 255], shadowOffsetX: 1, shadowOffsetY: 1, textCase: "Normal", textDirection: T4 ? te.RTL : te.LTR, verticalAlignment: ie(f6 ?? "baseline"), verticalGlyphOrientation: le.Right, wordSpacing: 100, billboardMode3D: m3.FaceNearPlane, callout: E2 };
  }
  static createPictureMarkerRasterizationParam(e15) {
    var _a, _b;
    const { angle: t16, height: r17, width: o9, xoffset: a13, yoffset: s14 } = e15, i16 = e15.url ?? ((_a = e15.source) == null ? void 0 : _a.url) ?? ((_b = e15.source) == null ? void 0 : _b.imageData);
    return i16 ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureMarker", invertBackfaceTexture: false, scaleX: 1, textureFilter: oe.Picture, tintColor: null, url: i16, size: r17, width: o9, offsetX: p2(a13), offsetY: p2(s14), rotation: p2(-t16) } } : null;
  }
  static createPictureFillRasterizationParam(e15) {
    const { width: t16, height: r17, xoffset: o9, yoffset: a13, url: s14 } = e15;
    return s14 ? { type: "sprite-rasterization-param", overrides: [], resource: { type: "CIMPictureFill", scaleX: 1, textureFilter: oe.Picture, tintColor: null, url: s14, width: t16, height: r17, offsetX: p2(o9), offsetY: p2(a13), rotation: 0 } } : null;
  }
  static fromSimpleMarker(e15, t16, r17) {
    const { style: o9 } = e15, a13 = e15.color ?? r17;
    if ("path" === o9 || "esriSMSPath" === o9) {
      const t17 = [];
      if ("outline" in e15 && e15.outline) {
        const r19 = e15.outline;
        t17.push({ type: "CIMSolidStroke", enable: true, width: r19.width, color: ne(r19.color), path: e15.path });
      }
      t17.push({ type: "CIMSolidFill", enable: true, color: ne(a13), path: e15.path });
      const [r18, o10] = he("square");
      return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: -p2(e15.angle), size: p2(e15.size || 6), offsetX: p2(e15.xoffset), offsetY: p2(e15.yoffset), scaleSymbolsProportionally: false, frame: r18, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: o10, symbol: { type: "CIMPolygonSymbol", symbolLayers: t17 } }] }] };
    }
    const s14 = [];
    let i16, n19, l11 = e15.size;
    if ("outline" in e15 && e15.outline && "none" !== e15.outline.style && "esriSLSNull" !== e15.outline.style) {
      const t17 = e15.outline, r18 = "solid" !== t17.style && "esriSLSSolid" !== t17.style;
      [i16, n19] = r18 ? he(o9, e15.size) : he(o9);
      const a14 = t17.width ?? u4.width;
      if (r18) {
        const t18 = a14 / e15.size, r19 = (i16.xmax - i16.xmin) * t18 / 2, o10 = (i16.ymax - i16.ymin) * t18 / 2;
        i16.xmin -= r19, i16.xmax += r19, i16.ymin -= o10, i16.ymax += o10, l11 && (l11 += a14);
      }
      const c6 = "cross" !== e15.style && "x" !== e15.style || "dot" === (e15 == null ? void 0 : e15.outline.style) || "short-dot" === (e15 == null ? void 0 : e15.outline.style) ? b2.HalfGap : b2.FullPattern, m9 = r18 ? [{ type: "CIMGeometricEffectAddControlPoints" }, { type: "CIMGeometricEffectDashes", dashTemplate: fe(t17.style, null).map((e16) => t17.width && t17.width > 0 ? e16 * t17.width : e16), lineDashEnding: c6, controlPointEnding: b2.FullPattern }] : void 0;
      s14.push({ type: "CIMSolidStroke", capStyle: r18 ? w.Round : w.Butt, enable: true, width: a14, color: ne(t17.color), effects: m9 });
    } else !t16 || "line-marker" !== e15.type || "cross" !== e15.style && "x" !== e15.style ? [i16, n19] = he(o9) : ([i16, n19] = he(o9), s14.push({ type: "CIMSolidStroke", enable: true, width: t16, color: ne(a13) }));
    s14.push({ type: "CIMSolidFill", enable: true, color: ne(a13) });
    const c5 = { type: "CIMPolygonSymbol", symbolLayers: s14 };
    return { type: "CIMPointSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, rotation: p2(-e15.angle), size: p2(l11 || 6 * t16), offsetX: p2(e15.xoffset), offsetY: p2(e15.yoffset), scaleSymbolsProportionally: false, frame: i16, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: n19, symbol: c5 }] }] };
  }
  static fromCIMHatchFill(e15, r17) {
    var _a;
    const o9 = r17 * (e15.separation ?? n3.CIMHatchFill.separation), a13 = o9 / 2, s14 = a(e15.lineSymbol);
    (_a = s14.symbolLayers) == null ? void 0 : _a.forEach((e16) => {
      var _a2;
      switch (e16.type) {
        case "CIMSolidStroke":
          null != e16.width && (e16.width *= r17), (_a2 = e16.effects) == null ? void 0 : _a2.forEach((e17) => {
            if ("CIMGeometricEffectDashes" === e17.type) {
              const t16 = e17.dashTemplate;
              e17.dashTemplate = t16 == null ? void 0 : t16.map((e18) => e18 * r17);
            }
          });
          break;
        case "CIMVectorMarker": {
          null != e16.size && (e16.size *= r17);
          const t16 = e16.markerPlacement;
          null != t16 && "placementTemplate" in t16 && (t16.placementTemplate = t16.placementTemplate.map((e17) => e17 * r17));
          break;
        }
      }
    });
    let i16 = this._getLineSymbolPeriod(s14) || O2;
    for (; i16 < O2; ) i16 *= 2;
    const n19 = i16 / 2;
    return { type: "CIMVectorMarker", frame: { xmin: -n19, xmax: n19, ymin: -a13, ymax: a13 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[-n19, 0], [n19, 0]]] }, symbol: s14 }], size: o9 };
  }
  static fetchResources(e15, t16, r17, o9 = null) {
    return e15 && t16 ? (re(e15, (e16) => {
      Me(e16, t16, r17), "url" in e16 && e16.url && r17.push(t16.fetchResource(e16.url, { signal: o9 }));
    }), r17) : r17;
  }
  static fetchFonts(e15, t16, r17) {
    if (e15 && t16) {
      if ("symbolLayers" in e15 && e15.symbolLayers) {
        for (const o9 of e15.symbolLayers) if ("CIMVectorMarker" === o9.type && o9.markerGraphics) for (const e16 of o9.markerGraphics) (e16 == null ? void 0 : e16.symbol) && _te.fetchFonts(e16.symbol, t16, r17);
      } else if ("CIMTextSymbol" === e15.type) {
        const { fontFamilyName: o9, fontStyleName: a13 } = e15;
        if (!o9 || "calcitewebcoreicons" === o9.toLowerCase()) return;
        const { style: s14, weight: i16 } = w2(a13), n19 = L(e15), c5 = new m2({ family: o9, style: s14, weight: i16, decoration: n19 });
        r17.push(t16.loadFont(c5).catch(() => {
          W().error(`Unsupported font ${o9} in CIM symbol`);
        }));
      }
    }
  }
  static _getLineSymbolPeriod(e15) {
    if (e15) {
      const t16 = this._getEffectsRepeat(e15.effects);
      if (t16) return t16;
      if (e15.symbolLayers) {
        for (const r17 of e15.symbolLayers) if (r17) {
          const e16 = this._getEffectsRepeat(r17.effects);
          if (e16) return e16;
          switch (r17.type) {
            case "CIMCharacterMarker":
            case "CIMPictureMarker":
            case "CIMVectorMarker":
            case "CIMObjectMarker3D":
            case "CIMglTFMarker3D": {
              const e17 = this._getPlacementRepeat(r17.markerPlacement);
              if (e17) return e17;
            }
          }
        }
      }
    }
    return 0;
  }
  static _getEffectsRepeat(e15) {
    if (e15) {
      for (const t16 of e15) if (t16) switch (t16.type) {
        case "CIMGeometricEffectDashes": {
          const e16 = t16.dashTemplate;
          if (e16 && e16.length) {
            let t17 = 0;
            for (const r17 of e16) t17 += r17;
            return 1 & e16.length && (t17 *= 2), t17;
          }
          break;
        }
        case "CIMGeometricEffectWave":
          return t16.period;
        default:
          W().error(`unsupported geometric effect type ${t16.type}`);
      }
    }
    return 0;
  }
  static _getPlacementRepeat(e15) {
    if (e15) switch (e15.type) {
      case "CIMMarkerPlacementAlongLineSameSize":
      case "CIMMarkerPlacementAlongLineRandomSize":
      case "CIMMarkerPlacementAlongLineVariableSize": {
        const t16 = e15.placementTemplate;
        if (t16 && t16.length) {
          let e16 = 0;
          for (const r17 of t16) e16 += +r17;
          return 1 & t16.length && (e16 *= 2), e16;
        }
        break;
      }
    }
    return 0;
  }
  static fromCIMInsidePolygon(e15) {
    const t16 = e15.markerPlacement, r17 = { ...e15 };
    r17.markerPlacement = null, r17.anchorPoint = null;
    const s14 = Math.abs(t16.stepX), i16 = Math.abs(t16.stepY), n19 = (t16.randomness ?? 100) / 100;
    let l11, c5, m9, f6;
    if ("Random" === t16.gridType) {
      const e16 = e2(Fi), r18 = Math.max(Math.floor(e16 / s14), 1), y6 = Math.max(Math.floor(e16 / i16), 1);
      l11 = r18 * s14 / 2, c5 = y6 * i16 / 2, m9 = 2 * c5;
      const h8 = new t(t16.seed), u12 = n19 * s14 / 1.5, M5 = n19 * i16 / 1.5;
      f6 = [];
      for (let t17 = 0; t17 < r18; t17++) for (let e17 = 0; e17 < y6; e17++) {
        const r19 = t17 * s14 - l11 + u12 * (0.5 - h8.getFloat()), o9 = e17 * i16 - c5 + M5 * (0.5 - h8.getFloat());
        f6.push({ x: r19, y: o9 }), 0 === t17 && f6.push({ x: r19 + 2 * l11, y: o9 }), 0 === e17 && f6.push({ x: r19, y: o9 + 2 * c5 });
      }
    } else true === t16.shiftOddRows ? (l11 = s14 / 2, c5 = i16, m9 = 2 * i16, f6 = [{ x: -l11, y: 0 }, { x: l11, y: 0 }, { x: 0, y: c5 }, { x: 0, y: -c5 }]) : (l11 = s14 / 2, c5 = i16 / 2, m9 = i16, f6 = [{ x: -s14, y: 0 }, { x: 0, y: -i16 }, { x: -s14, y: -i16 }, { x: 0, y: 0 }, { x: s14, y: 0 }, { x: 0, y: i16 }, { x: s14, y: i16 }, { x: -s14, y: i16 }, { x: s14, y: -i16 }]);
    return { type: "CIMVectorMarker", frame: { xmin: -l11, xmax: l11, ymin: -c5, ymax: c5 }, markerGraphics: f6.map((e16) => ({ type: "CIMMarkerGraphic", geometry: e16, symbol: { type: "CIMPointSymbol", symbolLayers: [r17] } })), size: m9 };
  }
};
function re(e15, t16) {
  if (e15) switch (e15.type) {
    case "CIMPointSymbol":
    case "CIMLineSymbol":
    case "CIMPolygonSymbol": {
      const r17 = e15.symbolLayers;
      if (!r17) return;
      for (const e16 of r17) if (t16(e16), "CIMVectorMarker" === e16.type) {
        const r18 = e16.markerGraphics;
        if (!r18) continue;
        for (const e17 of r18) if (e17) {
          const r19 = e17.symbol;
          r19 && re(r19, t16);
        }
      }
      break;
    }
  }
}
var oe2 = (e15) => {
  if (!e15) return w.Butt;
  switch (e15) {
    case "butt":
      return w.Butt;
    case "square":
      return w.Square;
    case "round":
      return w.Round;
  }
};
var ae = (e15) => {
  if (!e15) return G2.Miter;
  switch (e15) {
    case "miter":
      return G2.Miter;
    case "round":
      return G2.Round;
    case "bevel":
      return G2.Bevel;
  }
};
var se = (e15) => {
  if (null == e15) return "Center";
  switch (e15) {
    case "left":
      return "Left";
    case "right":
      return "Right";
    case "center":
      return "Center";
  }
};
var ie = (e15) => {
  if (null == e15) return "Center";
  switch (e15) {
    case "baseline":
      return "Baseline";
    case "top":
      return "Top";
    case "middle":
      return "Center";
    case "bottom":
      return "Bottom";
  }
};
var ne = (e15) => {
  if (!e15) return [0, 0, 0, 0];
  const { r: t16, g: r17, b: o9, a: a13 } = e15;
  return [t16, r17, o9, 255 * a13];
};
var le2 = (e15, t16) => {
  const r17 = ce(t16), o9 = me(e15);
  return r17 && o9 ? `${r17}-${o9}` : `${r17}${o9}`;
};
var ce = (e15) => {
  if (!e15) return "";
  switch (e15.toLowerCase()) {
    case "bold":
    case "bolder":
      return "bold";
  }
  return "";
};
var me = (e15) => {
  if (!e15) return "";
  switch (e15.toLowerCase()) {
    case "italic":
    case "oblique":
      return "italic";
  }
  return "";
};
var fe = (e15, t16) => {
  const r17 = has("safari") ? 1e-3 : 0, o9 = "butt" === t16;
  switch (e15) {
    case "dash":
    case "esriSLSDash":
      return o9 ? [4, 3] : [3, 4];
    case "dash-dot":
    case "esriSLSDashDot":
      return o9 ? [4, 3, 1, 3] : [3, 4, r17, 4];
    case "dot":
    case "esriSLSDot":
      return o9 ? [1, 3] : [r17, 4];
    case "long-dash":
    case "esriSLSLongDash":
      return o9 ? [8, 3] : [7, 4];
    case "long-dash-dot":
    case "esriSLSLongDashDot":
      return o9 ? [8, 3, 1, 3] : [7, 4, r17, 4];
    case "long-dash-dot-dot":
    case "esriSLSDashDotDot":
      return o9 ? [8, 3, 1, 3, 1, 3] : [7, 4, r17, 4, r17, 4];
    case "short-dash":
    case "esriSLSShortDash":
      return o9 ? [4, 1] : [3, 2];
    case "short-dash-dot":
    case "esriSLSShortDashDot":
      return o9 ? [4, 1, 1, 1] : [3, 2, r17, 2];
    case "short-dash-dot-dot":
    case "esriSLSShortDashDotDot":
      return o9 ? [4, 1, 1, 1, 1, 1] : [3, 2, r17, 2, r17, 2];
    case "short-dot":
    case "esriSLSShortDot":
      return o9 ? [1, 1] : [r17, 2];
    case "solid":
    case "esriSLSSolid":
    case "none":
      return W().error("Unexpected: style does not require rasterization"), [0, 0];
    default:
      return W().error(`Tried to rasterize SLS, but found an unexpected style: ${e15}!`), [0, 0];
  }
};
function ye(e15) {
  return void 0 !== e15.symbolLayers;
}
var he = (e15, t16 = 100) => {
  const r17 = t16 / 2;
  let o9, a13;
  const s14 = e15;
  if ("circle" === s14 || "esriSMSCircle" === s14) {
    const e16 = 0.25;
    let t17 = Math.acos(1 - e16 / r17), s15 = Math.ceil(N4 / t17 / 4);
    0 === s15 && (s15 = 1), t17 = Y2 / s15, s15 *= 4;
    const i16 = [];
    i16.push([r17, 0]);
    for (let o10 = 1; o10 < s15; o10++) i16.push([r17 * Math.cos(o10 * t17), -r17 * Math.sin(o10 * t17)]);
    i16.push([r17, 0]), o9 = { rings: [i16] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 };
  } else if ("cross" === s14 || "esriSMSCross" === s14) {
    const e16 = 0;
    o9 = { paths: [[[e16, r17], [e16, -r17]], [[r17, e16], [-r17, e16]]] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 };
  } else if ("diamond" === s14 || "esriSMSDiamond" === s14) o9 = { rings: [[[-r17, 0], [0, r17], [r17, 0], [0, -r17], [-r17, 0]]] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 };
  else if ("square" === s14 || "esriSMSSquare" === s14) o9 = { rings: [[[-r17, -r17], [-r17, r17], [r17, r17], [r17, -r17], [-r17, -r17]]] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 };
  else if ("x" === s14 || "esriSMSX" === s14) o9 = { paths: [[[r17, r17], [-r17, -r17]], [[r17, -r17], [-r17, r17]]] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 };
  else if ("triangle" === s14 || "esriSMSTriangle" === s14) {
    const e16 = t16 * 0.5773502691896257, r18 = -e16, s15 = 2 / 3 * t16, i16 = s15 - t16;
    o9 = { rings: [[[r18, i16], [0, s15], [e16, i16], [r18, i16]]] }, a13 = { xmin: r18, ymin: i16, xmax: e16, ymax: s15 };
  } else "arrow" === s14 && (o9 = { rings: [[[-50, 50], [50, 0], [-50, -50], [-33, -20], [-33, 20], [-50, 50]]] }, a13 = { xmin: -r17, ymin: -r17, xmax: r17, ymax: r17 });
  return [a13, o9];
};
var ue = (e15) => "vertical" === e15 || "horizontal" === e15 || "cross" === e15 || "esriSFSCross" === e15 || "esriSFSVertical" === e15 || "esriSFSHorizontal" === e15;
function Me(e15, t16, r17) {
  if (!e15.effects || null != t16.geometryEngine) return;
  if (t16.geometryEnginePromise) return void r17.push(t16.geometryEnginePromise);
  k(e15.effects) && (t16.geometryEnginePromise = S(), r17.push(t16.geometryEnginePromise), t16.geometryEnginePromise.then((e16) => t16.geometryEngine = e16));
}
function pe(e15) {
  if (!e15) return null;
  let t16 = null;
  const { cap: r17, color: o9, join: a13, miterLimit: s14, style: i16, width: n19 } = e15;
  return "solid" !== i16 && "none" !== i16 && "esriSLSSolid" !== i16 && "esriSLSNull" !== i16 && (t16 = [{ type: "CIMGeometricEffectDashes", dashTemplate: fe(i16, r17), lineDashEnding: "NoConstraint", scaleDash: true, offsetAlongLine: null }]), { type: "CIMSolidStroke", color: "esriSLSNull" !== i16 && "none" !== i16 ? ne(o9) : [0, 0, 0, 0], capStyle: oe2(r17), joinStyle: ae(a13), miterLimit: s14, width: n19, effects: t16 };
}

export {
  a6 as a,
  s7 as s,
  l9 as l,
  A3 as A,
  g3 as g,
  i15 as i,
  t14 as t,
  t15 as t2,
  e14 as e,
  n17 as n,
  a11 as a2,
  c4 as c,
  o7 as o,
  i12 as i2,
  s11 as s2,
  O,
  i14 as i3,
  m8 as m,
  ht,
  ft,
  ut,
  $,
  Z2 as Z,
  ee,
  te2 as te,
  fe
};
//# sourceMappingURL=chunk-UQQJEYZO.js.map
