import {
  i
} from "./chunk-IR5AHWR5.js";
import {
  E,
  H,
  N,
  U,
  b,
  k,
  v as v2,
  w2 as w
} from "./chunk-WAKNRSGF.js";
import {
  s as s2
} from "./chunk-NATJDMSF.js";
import {
  G,
  M,
  f2 as f,
  h as h2,
  p,
  r as r4
} from "./chunk-NVEHOQKI.js";
import {
  I,
  g,
  o,
  s,
  u,
  v
} from "./chunk-UMYFDXOJ.js";
import {
  r as r3
} from "./chunk-MHM4GDCM.js";
import {
  z
} from "./chunk-363AT5UF.js";
import {
  c,
  h
} from "./chunk-53ZTROGC.js";
import {
  n,
  r as r2
} from "./chunk-JLFSX3JT.js";
import {
  e2 as e
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-7QTMSBS3.js";

// node_modules/@arcgis/core/geometry/support/clipRay.js
function a(r6) {
  return r6 ? { ray: b(r6.ray), c0: r6.c0, c1: r6.c1 } : { ray: b(), c0: 0, c1: Number.MAX_VALUE };
}
function y(r6, c2 = a()) {
  return v2(r6, c2.ray), c2.c0 = 0, c2.c1 = Number.MAX_VALUE, c2;
}
function p2(r6, c2) {
  return j(r6, r6.c0, c2);
}
function g2(r6, c2) {
  return j(r6, r6.c1, c2);
}
function j(r6, c2, o2) {
  return u(o2, r6.ray.origin, g(o2, r6.ray.direction, c2));
}
var A = new s2(() => a());

// node_modules/@arcgis/core/geometry/support/frustum.js
function H2(T2) {
  return T2 ? [M(T2[0]), M(T2[1]), M(T2[2]), M(T2[3]), M(T2[4]), M(T2[5])] : [M(), M(), M(), M(), M(), M()];
}
function I2() {
  return [n(), n(), n(), n(), n(), n(), n(), n()];
}
function N2(T2, _) {
  for (let O2 = 0; O2 < b2; O2++) h2(T2[O2], _[O2]);
  return T2;
}
function L(T2, t, A3, E3 = y2) {
  const F2 = c(f.get(), t, T2);
  h(F2, F2);
  for (let _ = 0; _ < h3; ++_) {
    const T3 = z(r4.get(), k2[_], F2);
    o(E3[_], T3[0] / T3[3], T3[1] / T3[3], T3[2] / T3[3]);
  }
  P(A3, E3);
}
function P(T2, _) {
  p(_[g3.FAR_BOTTOM_LEFT], _[g3.NEAR_BOTTOM_LEFT], _[g3.NEAR_TOP_LEFT], T2[j2.LEFT]), p(_[g3.NEAR_BOTTOM_RIGHT], _[g3.FAR_BOTTOM_RIGHT], _[g3.FAR_TOP_RIGHT], T2[j2.RIGHT]), p(_[g3.FAR_BOTTOM_LEFT], _[g3.FAR_BOTTOM_RIGHT], _[g3.NEAR_BOTTOM_RIGHT], T2[j2.BOTTOM]), p(_[g3.NEAR_TOP_LEFT], _[g3.NEAR_TOP_RIGHT], _[g3.FAR_TOP_RIGHT], T2[j2.TOP]), p(_[g3.NEAR_BOTTOM_LEFT], _[g3.NEAR_BOTTOM_RIGHT], _[g3.NEAR_TOP_RIGHT], T2[j2.NEAR]), p(_[g3.FAR_BOTTOM_RIGHT], _[g3.FAR_BOTTOM_LEFT], _[g3.FAR_TOP_LEFT], T2[j2.FAR]);
}
function s3(T2, _) {
  for (let O2 = 0; O2 < b2; O2++) {
    const R2 = T2[O2];
    if (R2[0] * _[0] + R2[1] * _[1] + R2[2] * _[2] + R2[3] >= _[3]) return false;
  }
  return true;
}
function m2(T2, _) {
  for (let O2 = 0; O2 < b2; O2++) {
    const R2 = T2[O2];
    if (!G(R2, _)) return false;
  }
  return true;
}
var j2;
var g3;
!function(T2) {
  T2[T2.LEFT = 0] = "LEFT", T2[T2.RIGHT = 1] = "RIGHT", T2[T2.BOTTOM = 2] = "BOTTOM", T2[T2.TOP = 3] = "TOP", T2[T2.NEAR = 4] = "NEAR", T2[T2.FAR = 5] = "FAR";
}(j2 || (j2 = {})), function(T2) {
  T2[T2.NEAR_BOTTOM_LEFT = 0] = "NEAR_BOTTOM_LEFT", T2[T2.NEAR_BOTTOM_RIGHT = 1] = "NEAR_BOTTOM_RIGHT", T2[T2.NEAR_TOP_RIGHT = 2] = "NEAR_TOP_RIGHT", T2[T2.NEAR_TOP_LEFT = 3] = "NEAR_TOP_LEFT", T2[T2.FAR_BOTTOM_LEFT = 4] = "FAR_BOTTOM_LEFT", T2[T2.FAR_BOTTOM_RIGHT = 5] = "FAR_BOTTOM_RIGHT", T2[T2.FAR_TOP_RIGHT = 6] = "FAR_TOP_RIGHT", T2[T2.FAR_TOP_LEFT = 7] = "FAR_TOP_LEFT";
}(g3 || (g3 = {}));
var v3 = { bottom: [g3.FAR_BOTTOM_RIGHT, g3.NEAR_BOTTOM_RIGHT, g3.NEAR_BOTTOM_LEFT, g3.FAR_BOTTOM_LEFT], near: [g3.NEAR_BOTTOM_LEFT, g3.NEAR_BOTTOM_RIGHT, g3.NEAR_TOP_RIGHT, g3.NEAR_TOP_LEFT], far: [g3.FAR_BOTTOM_RIGHT, g3.FAR_BOTTOM_LEFT, g3.FAR_TOP_LEFT, g3.FAR_TOP_RIGHT], right: [g3.NEAR_BOTTOM_RIGHT, g3.FAR_BOTTOM_RIGHT, g3.FAR_TOP_RIGHT, g3.NEAR_TOP_RIGHT], left: [g3.FAR_BOTTOM_LEFT, g3.NEAR_BOTTOM_LEFT, g3.NEAR_TOP_LEFT, g3.FAR_TOP_LEFT], top: [g3.FAR_TOP_LEFT, g3.NEAR_TOP_LEFT, g3.NEAR_TOP_RIGHT, g3.FAR_TOP_RIGHT] };
var b2 = 6;
var h3 = 8;
var k2 = [r3(-1, -1, -1, 1), r3(1, -1, -1, 1), r3(1, 1, -1, 1), r3(-1, 1, -1, 1), r3(-1, -1, 1, 1), r3(1, -1, 1, 1), r3(1, 1, 1, 1), r3(-1, 1, 1, 1)];
var x = new s2(a);
var y2 = I2();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Octree.js
var b3 = class _b {
  get bounds() {
    return this._root.bounds;
  }
  get halfSize() {
    return this._root.halfSize;
  }
  get root() {
    return this._root.node;
  }
  get maximumObjectsPerNode() {
    return this._maximumObjectsPerNode;
  }
  get maximumDepth() {
    return this._maximumDepth;
  }
  get objectCount() {
    return this._objectCount;
  }
  constructor(t, e2) {
    this.objectToBoundingSphere = t, this._maximumObjectsPerNode = 10, this._maximumDepth = 20, this._degenerateObjects = /* @__PURE__ */ new Set(), this._root = new g4(), this._objectCount = 0, e2 && (void 0 !== e2.maximumObjectsPerNode && (this._maximumObjectsPerNode = e2.maximumObjectsPerNode), void 0 !== e2.maximumDepth && (this._maximumDepth = e2.maximumDepth));
  }
  destroy() {
    this._degenerateObjects.clear(), g4.clearPool(), q2[0] = null, K.prune(), Q.prune();
  }
  add(t, e2 = t.length) {
    this._objectCount += e2, this._grow(t, e2);
    const n2 = g4.acquire();
    for (let o2 = 0; o2 < e2; o2++) {
      const e3 = t[o2];
      this._isDegenerate(e3) ? this._degenerateObjects.add(e3) : (n2.init(this._root), this._add(e3, n2));
    }
    g4.release(n2);
  }
  remove(t, e2 = null) {
    this._objectCount -= t.length;
    const n2 = g4.acquire();
    for (const o2 of t) {
      const t2 = e2 ?? w(this.objectToBoundingSphere(o2), J);
      C(t2[3]) ? (n2.init(this._root), O(o2, t2, n2)) : this._degenerateObjects.delete(o2);
    }
    g4.release(n2), this._shrink();
  }
  update(t, e2) {
    if (!C(e2[3]) && this._isDegenerate(t)) return;
    const n2 = y3(t);
    this.remove(n2, e2), this.add(n2);
  }
  forEachAlongRay(t, e2, n2) {
    const o2 = k(t, e2);
    S(this._root, (t2) => {
      if (!T(o2, t2)) return false;
      const e3 = t2.node;
      return e3.terminals.forAll((t3) => {
        this._intersectsObject(o2, t3) && n2(t3);
      }), null !== e3.residents && e3.residents.forAll((t3) => {
        this._intersectsObject(o2, t3) && n2(t3);
      }), true;
    });
  }
  forEachAlongRayWithVerticalOffset(t, e2, n2, o2) {
    const i2 = k(t, e2);
    S(this._root, (t2) => {
      if (!z2(i2, t2, o2)) return false;
      const e3 = t2.node;
      return e3.terminals.forAll((t3) => {
        this._intersectsObjectWithOffset(i2, t3, o2) && n2(t3);
      }), null !== e3.residents && e3.residents.forAll((t3) => {
        this._intersectsObjectWithOffset(i2, t3, o2) && n2(t3);
      }), true;
    });
  }
  forEach(t) {
    S(this._root, (e2) => {
      const n2 = e2.node;
      return n2.terminals.forAll(t), null !== n2.residents && n2.residents.forAll(t), true;
    }), this._degenerateObjects.forEach(t);
  }
  forEachDegenerateObject(t) {
    this._degenerateObjects.forEach(t);
  }
  findClosest(t, e2, n2, o2 = () => true, s4 = 1 / 0) {
    let h4 = 1 / 0, a2 = 1 / 0, d = null;
    const u2 = F(t, e2), c2 = (i2) => {
      if (--s4, !o2(i2)) return;
      const r6 = this.objectToBoundingSphere(i2);
      if (!s3(n2, r6)) return;
      const u3 = v4(t, e2, U(r6)), c3 = u3 - r6[3], f2 = u3 + r6[3];
      c3 < h4 && (h4 = c3, a2 = f2, d = i2);
    };
    return j3(this._root, (o3) => {
      if (s4 <= 0 || !s3(n2, o3.bounds)) return false;
      g(I3, u2, o3.halfSize), u(I3, I3, U(o3.bounds));
      if (v4(t, e2, I3) > a2) return false;
      const h5 = o3.node;
      return h5.terminals.forAll((t2) => c2(t2)), null !== h5.residents && h5.residents.forAll((t2) => c2(t2)), true;
    }, t, e2), d;
  }
  forEachInDepthRange(t, e2, n2, o2, s4, h4, a2) {
    let d = -1 / 0, u2 = 1 / 0;
    const c2 = { setRange: (t2) => {
      n2 === _b.DepthOrder.FRONT_TO_BACK ? (d = Math.max(d, t2.near), u2 = Math.min(u2, t2.far)) : (d = Math.max(d, -t2.far), u2 = Math.min(u2, -t2.near));
    } };
    c2.setRange(o2);
    const f2 = v4(e2, n2, t), _ = F(e2, n2), p3 = F(e2, -n2), g5 = (t2) => {
      if (!a2(t2)) return;
      const o3 = this.objectToBoundingSphere(t2), i2 = U(o3), r6 = v4(e2, n2, i2) - f2, _2 = r6 - o3[3], p4 = r6 + o3[3];
      _2 > u2 || p4 < d || !s3(h4, o3) || s4(t2, c2);
    };
    j3(this._root, (t2) => {
      if (!s3(h4, t2.bounds)) return false;
      g(I3, _, t2.halfSize), u(I3, I3, U(t2.bounds));
      if (v4(e2, n2, I3) - f2 > u2) return false;
      g(I3, p3, t2.halfSize), u(I3, I3, U(t2.bounds));
      if (v4(e2, n2, I3) - f2 < d) return false;
      const o3 = t2.node;
      return o3.terminals.forAll((t3) => g5(t3)), null !== o3.residents && o3.residents.forAll((t3) => g5(t3)), true;
    }, e2, n2);
  }
  forEachNode(t) {
    S(this._root, (e2) => t(e2.node, e2.bounds, e2.halfSize, e2.depth));
  }
  forEachNeighbor(t, e2) {
    const n2 = N(e2), o2 = U(e2), i2 = (e3) => {
      const i3 = this.objectToBoundingSphere(e3), r7 = N(i3), h5 = n2 + r7;
      return !(v(U(i3), o2) - h5 * h5 <= 0) || t(e3);
    };
    let r6 = true;
    const h4 = (t2) => {
      r6 && (r6 = i2(t2));
    };
    S(this._root, (t2) => {
      const e3 = N(t2.bounds), i3 = n2 + e3;
      if (v(U(t2.bounds), o2) - i3 * i3 > 0) return false;
      const a2 = t2.node;
      return a2.terminals.forAll(h4), r6 && null !== a2.residents && a2.residents.forAll(h4), r6;
    }), r6 && this.forEachDegenerateObject(h4);
  }
  _intersectsObject(t, e2) {
    const n2 = this.objectToBoundingSphere(e2);
    return !(n2[3] > 0) || H(n2, t);
  }
  _intersectsObjectWithOffset(t, e2, n2) {
    const o2 = this.objectToBoundingSphere(e2);
    return !(o2[3] > 0) || H(n2.applyToBoundingSphere(o2), t);
  }
  _add(t, e2) {
    e2.advanceTo(this.objectToBoundingSphere(t)) ? e2.node.terminals.push(t) : (e2.node.residents.push(t), e2.node.residents.length > this._maximumObjectsPerNode && e2.depth < this._maximumDepth && this._split(e2));
  }
  _split(t) {
    const e2 = t.node.residents;
    t.node.residents = null;
    for (let n2 = 0; n2 < e2.length; n2++) {
      const o2 = g4.acquire().init(t);
      this._add(e2.at(n2), o2), g4.release(o2);
    }
  }
  _grow(t, e2) {
    if (0 !== e2 && (D(t, e2, (t2) => this.objectToBoundingSphere(t2), W), C(W[3]) && !this._fitsInsideTree(W))) if (N3(this._root.node)) w(W, this._root.bounds), this._root.halfSize = 1.25 * this._root.bounds[3], this._root.updateBoundsRadiusFromHalfSize();
    else {
      const t2 = this._rootBoundsForRootAsSubNode(W);
      this._placingRootViolatesMaxDepth(t2) ? this._rebuildTree(W, t2) : this._growRootAsSubNode(t2), g4.release(t2);
    }
  }
  _rebuildTree(t, e2) {
    s(U(V2), U(e2.bounds)), V2[3] = e2.halfSize, D([t, V2], 2, (t2) => t2, G2);
    const o2 = g4.acquire().init(this._root);
    this._root.initFrom(null, G2, G2[3]), this._root.increaseHalfSize(1.25), S(o2, (t2) => (this.add(t2.node.terminals.data, t2.node.terminals.length), null !== t2.node.residents && this.add(t2.node.residents.data, t2.node.residents.length), true)), g4.release(o2);
  }
  _placingRootViolatesMaxDepth(t) {
    const e2 = Math.log(t.halfSize / this._root.halfSize) * Math.LOG2E;
    let n2 = 0;
    return S(this._root, (t2) => (n2 = Math.max(n2, t2.depth), n2 + e2 <= this._maximumDepth)), n2 + e2 > this._maximumDepth;
  }
  _rootBoundsForRootAsSubNode(t) {
    const e2 = t[3], n2 = t;
    let o2 = -1 / 0;
    const i2 = this._root.bounds, r6 = this._root.halfSize;
    for (let h4 = 0; h4 < 3; h4++) {
      const t2 = i2[h4] - r6 - (n2[h4] - e2), s5 = n2[h4] + e2 - (i2[h4] + r6), a2 = Math.max(0, Math.ceil(t2 / (2 * r6))), l = Math.max(0, Math.ceil(s5 / (2 * r6))) + 1, d = 2 ** Math.ceil(Math.log(a2 + l) * Math.LOG2E);
      o2 = Math.max(o2, d), U2[h4].min = a2, U2[h4].max = l;
    }
    for (let h4 = 0; h4 < 3; h4++) {
      let t2 = U2[h4].min, e3 = U2[h4].max;
      const n3 = (o2 - (t2 + e3)) / 2;
      t2 += Math.ceil(n3), e3 += Math.floor(n3);
      const s5 = i2[h4] - r6 - t2 * r6 * 2;
      k3[h4] = s5 + (e3 + t2) * r6;
    }
    const s4 = o2 * r6;
    return k3[3] = s4 * w2, g4.acquire().initFrom(null, k3, s4, 0);
  }
  _growRootAsSubNode(t) {
    const e2 = this._root.node;
    s(U(W), U(this._root.bounds)), W[3] = this._root.halfSize, this._root.init(t), t.advanceTo(W, null, true), t.node.children = e2.children, t.node.residents = e2.residents, t.node.terminals = e2.terminals;
  }
  _shrink() {
    for (; ; ) {
      const t = this._findShrinkIndex();
      if (-1 === t) break;
      this._root.advance(t), this._root.depth = 0;
    }
  }
  _findShrinkIndex() {
    if (0 !== this._root.node.terminals.length || this._root.isLeaf()) return -1;
    let t = null;
    const e2 = this._root.node.children;
    let n2 = 0, o2 = 0;
    for (; o2 < e2.length && null == t; ) n2 = o2++, t = e2[n2];
    for (; o2 < e2.length; ) if (e2[o2++]) return -1;
    return n2;
  }
  _isDegenerate(t) {
    return !C(this.objectToBoundingSphere(t)[3]);
  }
  _fitsInsideTree(t) {
    const e2 = this._root.bounds, n2 = this._root.halfSize;
    return t[3] <= n2 && t[0] >= e2[0] - n2 && t[0] <= e2[0] + n2 && t[1] >= e2[1] - n2 && t[1] <= e2[1] + n2 && t[2] >= e2[2] - n2 && t[2] <= e2[2] + n2;
  }
  toJSON() {
    const { maximumDepth: t, maximumObjectsPerNode: e2, _objectCount: n2 } = this, o2 = this._nodeToJSON(this._root.node);
    return { maximumDepth: t, maximumObjectsPerNode: e2, objectCount: n2, root: { bounds: this._root.bounds, halfSize: this._root.halfSize, depth: this._root.depth, node: o2 } };
  }
  _nodeToJSON(t) {
    var _a, _b2;
    const e2 = t.children.map((t2) => t2 ? this._nodeToJSON(t2) : null), n2 = (_a = t.residents) == null ? void 0 : _a.map((t2) => this.objectToBoundingSphere(t2)), o2 = (_b2 = t.terminals) == null ? void 0 : _b2.map((t2) => this.objectToBoundingSphere(t2));
    return { children: e2, residents: n2, terminals: o2 };
  }
  static fromJSON(t) {
    const e2 = new _b((t2) => t2, { maximumDepth: t.maximumDepth, maximumObjectsPerNode: t.maximumObjectsPerNode });
    return e2._objectCount = t.objectCount, e2._root.initFrom(t.root.node, t.root.bounds, t.root.halfSize, t.root.depth), e2;
  }
};
var g4 = class _g {
  constructor() {
    this.bounds = E(), this.halfSize = 0, this.initFrom(null, null, 0, 0);
  }
  init(t) {
    return this.initFrom(t.node, t.bounds, t.halfSize, t.depth);
  }
  initFrom(t, e2, n2, o2 = this.depth) {
    return this.node = null != t ? t : _g.createEmptyNode(), e2 && w(e2, this.bounds), this.halfSize = n2, this.depth = o2, this;
  }
  increaseHalfSize(t) {
    this.halfSize *= t, this.updateBoundsRadiusFromHalfSize();
  }
  updateBoundsRadiusFromHalfSize() {
    this.bounds[3] = this.halfSize * w2;
  }
  advance(t) {
    let e2 = this.node.children[t];
    e2 || (e2 = _g.createEmptyNode(), this.node.children[t] = e2), this.node = e2, this.halfSize /= 2, this.depth++;
    const n2 = E2[t];
    return this.bounds[0] += n2[0] * this.halfSize, this.bounds[1] += n2[1] * this.halfSize, this.bounds[2] += n2[2] * this.halfSize, this.updateBoundsRadiusFromHalfSize(), this;
  }
  advanceTo(t, e2, n2 = false) {
    for (; ; ) {
      if (this.isTerminalFor(t)) return e2 && e2(this, -1), true;
      if (this.isLeaf()) {
        if (!n2) return e2 && e2(this, -1), false;
        this.node.residents = null;
      }
      const o2 = this._childIndex(t);
      e2 && e2(this, o2), this.advance(o2);
    }
  }
  isLeaf() {
    return null != this.node.residents;
  }
  isTerminalFor(t) {
    return t[3] > this.halfSize / 2;
  }
  _childIndex(t) {
    const e2 = this.bounds;
    return (e2[0] < t[0] ? 1 : 0) + (e2[1] < t[1] ? 2 : 0) + (e2[2] < t[2] ? 4 : 0);
  }
  static createEmptyNode() {
    return { children: [null, null, null, null, null, null, null, null], terminals: new r({ shrink: true }), residents: new r({ shrink: true }) };
  }
  static acquire() {
    return _g._pool.acquire();
  }
  static release(t) {
    _g._pool.release(t);
  }
  static clearPool() {
    _g._pool.prune();
  }
};
function S(t, e2) {
  let n2 = g4.acquire().init(t);
  const o2 = [n2];
  for (; 0 !== o2.length; ) {
    if (n2 = o2.pop(), e2(n2) && !n2.isLeaf()) for (let t2 = 0; t2 < n2.node.children.length; t2++) {
      n2.node.children[t2] && o2.push(g4.acquire().init(n2).advance(t2));
    }
    g4.release(n2);
  }
}
function j3(t, e2, n2, o2 = b3.DepthOrder.FRONT_TO_BACK) {
  let i2 = g4.acquire().init(t);
  const r6 = [i2];
  for (R(n2, o2, X); 0 !== r6.length; ) {
    if (i2 = r6.pop(), e2(i2) && !i2.isLeaf()) for (let t2 = 7; t2 >= 0; --t2) {
      const e3 = X[t2];
      i2.node.children[e3] && r6.push(g4.acquire().init(i2).advance(e3));
    }
    g4.release(i2);
  }
}
function O(t, e2, n2) {
  K.clear();
  const o2 = n2.advanceTo(e2, (t2, e3) => {
    K.push(t2.node), K.push(e3);
  }) ? n2.node.terminals : n2.node.residents;
  if (o2.removeUnordered(t), 0 === o2.length) for (let i2 = K.length - 2; i2 >= 0; i2 -= 2) {
    if (!x2(K.data[i2], K.data[i2 + 1])) break;
  }
}
function x2(t, n2) {
  return n2 >= 0 && (t.children[n2] = null), !!N3(t) && (null === t.residents && (t.residents = new r({ shrink: true })), true);
}
function T(t, e2) {
  return B2(U(e2.bounds), 2 * -e2.halfSize, L2), B2(U(e2.bounds), 2 * e2.halfSize, H3), i(t.origin, t.direction, L2, H3);
}
function z2(t, e2, n2) {
  return B2(U(e2.bounds), 2 * -e2.halfSize, L2), B2(U(e2.bounds), 2 * e2.halfSize, H3), n2.applyToMinMax(L2, H3), i(t.origin, t.direction, L2, H3);
}
function N3(t) {
  if (0 !== t.terminals.length) return false;
  if (null !== t.residents) return 0 === t.residents.length;
  for (let e2 = 0; e2 < t.children.length; e2++) if (t.children[e2]) return false;
  return true;
}
function M2(t, e2) {
  t[0] = Math.min(t[0], e2[0] - e2[3]), t[1] = Math.min(t[1], e2[1] - e2[3]), t[2] = Math.min(t[2], e2[2] - e2[3]);
}
function A2(t, e2) {
  t[0] = Math.max(t[0], e2[0] + e2[3]), t[1] = Math.max(t[1], e2[1] + e2[3]), t[2] = Math.max(t[2], e2[2] + e2[3]);
}
function B2(t, e2, n2) {
  n2[0] = t[0] + e2, n2[1] = t[1] + e2, n2[2] = t[2] + e2;
}
function D(t, e2, n2, i2) {
  if (1 === e2) {
    const e3 = n2(t[0]);
    w(e3, i2);
  } else {
    L2[0] = 1 / 0, L2[1] = 1 / 0, L2[2] = 1 / 0, H3[0] = -1 / 0, H3[1] = -1 / 0, H3[2] = -1 / 0;
    for (let o2 = 0; o2 < e2; o2++) {
      const e3 = n2(t[o2]);
      C(e3[3]) && (M2(L2, e3), A2(H3, e3));
    }
    I(U(i2), L2, H3, 0.5), i2[3] = Math.max(H3[0] - L2[0], H3[1] - L2[1], H3[2] - L2[2]) / 2;
  }
}
function R(t, e2, n2) {
  if (!Q.length) for (let o2 = 0; o2 < 8; ++o2) Q.push({ index: 0, distance: 0 });
  for (let o2 = 0; o2 < 8; ++o2) {
    const n3 = E2[o2];
    Q.data[o2].index = o2, Q.data[o2].distance = v4(t, e2, n3);
  }
  Q.sort((t2, e3) => t2.distance - e3.distance);
  for (let o2 = 0; o2 < 8; ++o2) n2[o2] = Q.data[o2].index;
}
function F(t, e2) {
  let n2, o2 = 1 / 0;
  for (let i2 = 0; i2 < 8; ++i2) {
    const r6 = v4(t, e2, P2[i2]);
    r6 < o2 && (o2 = r6, n2 = P2[i2]);
  }
  return n2;
}
function v4(t, e2, n2) {
  return e2 * (t[0] * n2[0] + t[1] * n2[1] + t[2] * n2[2]);
}
function C(t) {
  return !isNaN(t) && t !== -1 / 0 && t !== 1 / 0 && t > 0;
}
g4._pool = new e(g4), function(t) {
  var e2;
  (e2 = t.DepthOrder || (t.DepthOrder = {}))[e2.FRONT_TO_BACK = 1] = "FRONT_TO_BACK", e2[e2.BACK_TO_FRONT = -1] = "BACK_TO_FRONT";
}(b3);
var E2 = [r2(-1, -1, -1), r2(1, -1, -1), r2(-1, 1, -1), r2(1, 1, -1), r2(-1, -1, 1), r2(1, -1, 1), r2(-1, 1, 1), r2(1, 1, 1)];
var P2 = [r2(-1, -1, -1), r2(-1, -1, 1), r2(-1, 1, -1), r2(-1, 1, 1), r2(1, -1, -1), r2(1, -1, 1), r2(1, 1, -1), r2(1, 1, 1)];
var w2 = Math.sqrt(3);
var q2 = [null];
function y3(t) {
  return q2[0] = t, q2;
}
var k3 = E();
var I3 = n();
var L2 = n();
var H3 = n();
var K = new r();
var J = E();
var W = E();
var V2 = E();
var G2 = E();
var U2 = [{ min: 0, max: 0 }, { min: 0, max: 0 }, { min: 0, max: 0 }];
var Q = new r();
var X = [0, 0, 0, 0, 0, 0, 0, 0];

export {
  a,
  y,
  p2 as p,
  g2 as g,
  H2 as H,
  N2 as N,
  L,
  m2 as m,
  j2 as j,
  b3 as b
};
//# sourceMappingURL=chunk-ET4BF57A.js.map
