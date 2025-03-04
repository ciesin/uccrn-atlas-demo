import {
  o as o2
} from "./chunk-YFLBSX2D.js";
import {
  G as G2,
  o
} from "./chunk-QTWG47SG.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  w as w2
} from "./chunk-NENDDUWH.js";
import {
  e,
  j2 as j,
  r as r2
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  A2 as A,
  C,
  G,
  N,
  O2 as O,
  O3 as O2,
  _,
  r,
  s2 as s4,
  w
} from "./chunk-LTDNORB5.js";
import {
  s as s3
} from "./chunk-L7T5Z7MG.js";
import {
  a
} from "./chunk-STW6HRXO.js";
import {
  D,
  s as s2
} from "./chunk-M6FNW7GP.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/projection/projectXYZToVector.js
function t(r3, t3, f, c, i, m) {
  return e2[0] = r3, e2[1] = t3, e2[2] = f, o(e2, c, 0, i, m, 0);
}
var e2 = n();

// node_modules/@arcgis/core/geometry/support/GeographicTransformationStep.js
var s5 = 0;
var t2 = class _t {
  static fromGE(s7) {
    const i = new _t();
    return i._wkt = s7.wkt, i._wkid = s7.wkid, i._isInverse = s7.isInverse, i;
  }
  constructor(t3) {
    this.uid = s5++, t3 ? (this._wkt = null != t3.wkt ? t3.wkt : null, this._wkid = null != t3.wkid ? t3.wkid : -1, this._isInverse = null != t3.isInverse && true === t3.isInverse) : (this._wkt = null, this._wkid = -1, this._isInverse = false);
  }
  get wkt() {
    return this._wkt;
  }
  set wkt(t3) {
    this._wkt = t3, this.uid = s5++;
  }
  get wkid() {
    return this._wkid;
  }
  set wkid(t3) {
    this._wkid = t3, this.uid = s5++;
  }
  get isInverse() {
    return this._isInverse;
  }
  set isInverse(t3) {
    this._isInverse = t3, this.uid = s5++;
  }
  getInverse() {
    const s7 = new _t();
    return s7._wkt = this.wkt, s7._wkid = this._wkid, s7._isInverse = !this.isInverse, s7;
  }
};

// node_modules/@arcgis/core/geometry/support/GeographicTransformation.js
var s6 = class _s {
  static cacheKey(t3, s7) {
    var _a, _b, _c, _d, _e, _f;
    return [((_a = t3.wkid) == null ? void 0 : _a.toString()) ?? "-1", ((_b = t3.wkt) == null ? void 0 : _b.toString()) ?? "", ((_c = t3.wkt2) == null ? void 0 : _c.toString()) ?? "", ((_d = s7.wkid) == null ? void 0 : _d.toString()) ?? "-1", ((_e = s7.wkt) == null ? void 0 : _e.toString()) ?? "", ((_f = s7.wkt2) == null ? void 0 : _f.toString()) ?? ""].join();
  }
  static fromGE(e3) {
    const i = new _s();
    let n2 = "";
    for (const s7 of e3.steps) {
      const e4 = t2.fromGE(s7);
      i.steps.push(e4), n2 += e4.uid.toString() + ",";
    }
    return i._cachedProjection = {}, i._gtlistentry = null, i._chain = n2, i;
  }
  constructor(s7) {
    if (this.steps = [], this._cachedProjection = {}, this._chain = "", this._gtlistentry = null, s7 == null ? void 0 : s7.steps) for (const e3 of s7.steps) e3 instanceof t2 ? this.steps.push(e3) : this.steps.push(new t2({ wkid: e3.wkid, wkt: e3.wkt, isInverse: e3.isInverse }));
  }
  getInverse() {
    const t3 = new _s();
    t3.steps = [];
    for (let s7 = this.steps.length - 1; s7 >= 0; s7--) {
      const e3 = this.steps[s7];
      t3.steps.push(e3.getInverse());
    }
    return t3;
  }
  getGTListEntry() {
    let t3 = "";
    for (const s7 of this.steps) t3 += s7.uid.toString() + ",";
    return t3 !== this._chain && (this._gtlistentry = null, this._cachedProjection = {}, this._chain = t3), this._gtlistentry;
  }
  assignCachedGe(t3, e3, i) {
    this._cachedProjection[_s.cacheKey(t3, e3)] = i;
  }
  getCachedGeTransformation(t3, e3) {
    let i = "";
    for (const s7 of this.steps) i += s7.uid.toString() + ",";
    i !== this._chain && (this._gtlistentry = null, this._cachedProjection = {}, this._chain = i);
    const n2 = this._cachedProjection[_s.cacheKey(t3, e3)];
    return void 0 === n2 ? null : n2;
  }
};

// node_modules/@arcgis/core/geometry/projection.js
var P2 = null;
var b = null;
var E = null;
var T = {};
var _2 = new s3();
function k() {
  return !!P2 && r();
}
function B() {
  return !!k() || (a(_2), K(), false);
}
function U(n2, e3) {
  return !n2 || !e3 || (L(n2, e3) || B());
}
function W(n2, e3) {
  return !L(n2, e3) && !k();
}
function K(n2) {
  return null == E && (E = Promise.all([_(), import("./geometryEngineBase-C7RID75W.js").then((n3) => n3.g), import("./hydrated-VJV5PZKK.js")])), E.then(([, r3, { hydratedAdapter: t3 }]) => {
    s2(n2), b = t3, P2 = r3.default, P2._enableProjection(G), _2.notify();
  });
}
function O3(n2, e3, r3 = null, t3 = null) {
  return Array.isArray(n2) ? 0 === n2.length ? [] : (r2(n2), V(b, n2, n2[0].spatialReference, e3, r3, t3)) : (e(n2), V(b, [n2], n2.spatialReference, e3, r3, t3)[0]);
}
function V(n2, e3, r3, t3, l = null, o3 = null) {
  if (null == r3 || null == t3) return e3;
  if (L(r3, t3, l)) return e3.map((n3) => $(n3, r3, t3));
  if (null == l && A(r3)) {
    return e3.map((n3) => $(n3, r3, g.WGS84)).map((n3) => I(n3, t3));
  }
  if (null == l && A(t3)) {
    return e3.map((n3) => I(n3, g.WGS84)).map((n3) => $(n3, g.WGS84, t3));
  }
  if (null == l) {
    const n3 = s6.cacheKey(r3, t3);
    void 0 !== T[n3] ? l = T[n3] : (null == (l = q(r3, t3, void 0)) && (l = new s6()), T[n3] = l);
  }
  if (null == P2 || null == n2) throw new D2();
  return null != o3 ? P2._project(n2, e3, r3, t3, l, o3) : P2._project(n2, e3, r3, t3, l);
}
function X(n2, e3) {
  const r3 = Y([n2], e3);
  return null != r3.pending ? { pending: r3.pending, geometry: null } : null != r3.geometries ? { pending: null, geometry: r3.geometries[0] } : { pending: null, geometry: null };
}
function Y(n2, e3) {
  if (!k()) {
    for (const r3 of n2) if (null != r3 && !s4(r3.spatialReference, e3) && N(r3.spatialReference) && N(e3) && !L(r3.spatialReference, e3)) return a(_2), { pending: K(), geometries: null };
  }
  return { pending: null, geometries: n2.map((n3) => null == n3 ? null : s4(n3.spatialReference, e3) ? n3 : N(n3.spatialReference) && N(e3) ? I(n3, e3) : null) };
}
function q(n2, e3, r3 = null) {
  if (null == n2 || null == e3) return null;
  if (null == P2 || null == b) throw new D2();
  const t3 = P2._getTransformation(b, n2, e3, r3, r3 == null ? void 0 : r3.spatialReference);
  return null !== t3 ? s6.fromGE(t3) : null;
}
function C2(n2, e3, r3 = null) {
  if (null == P2 || null == b) throw new D2();
  const t3 = P2._getTransformationBySuitability(b, n2, e3, r3, r3 == null ? void 0 : r3.spatialReference);
  if (null !== t3) {
    const n3 = [];
    for (const e4 of t3) n3.push(s6.fromGE(e4));
    return n3;
  }
  return [];
}
var D2 = class extends s {
  constructor() {
    super("projection:not-loaded", "projection engine not fully loaded yet, please call load()");
  }
};
function F() {
  P2 = null, b = null, E = null, T = {};
}
var H = { get loadPromise() {
  return E;
} };
function I(n2, e3) {
  try {
    const r3 = O3(n2, e3);
    if (null == r3) return null;
    "xmin" in n2 && "xmin" in r3 && (r3.zmin = n2.zmin, r3.zmax = n2.zmax);
    const t3 = o2(r3.type, n2.spatialReference, e3);
    return null != t3 && t3(r3), r3;
  } catch (r3) {
    if (!(r3 instanceof D2)) throw r3;
    return null;
  }
}
async function J(n2, e3, r3) {
  const t3 = n2.spatialReference;
  return null != t3 && null != e3 && await Q(t3, e3, null, r3), I(n2, e3);
}
function L(n2, e3, r3) {
  return !r3 && (!!s4(n2, e3) || N(n2) && N(e3) && !!G2(n2, e3));
}
function N2(n2, e3) {
  if (s4(n2, e3)) return true;
  if (!N(n2) || !N(e3)) return false;
  const r3 = C(n2) || O(n2) || w(n2), t3 = C(e3) || O(e3) || w(e3);
  return r3 && t3;
}
async function Q(n2, e3, t3, l) {
  if (k()) return D(l);
  if (Array.isArray(n2)) {
    for (const { source: r3, dest: o3, geographicTransformation: i } of n2) if (r3 && o3 && !L(r3, o3, i)) return K(l);
  } else if (n2 && e3 && !L(n2, e3, t3)) return K(l);
  return D(l);
}
function $(n2, e3, r3) {
  return n2 ? "x" in n2 ? en(n2, e3, new j(), r3, 0) : "xmin" in n2 ? cn(n2, e3, new w2(), r3, 0) : "rings" in n2 ? un(n2, e3, new j2(), r3, 0) : "paths" in n2 ? on(n2, e3, new P(), r3, 0) : "points" in n2 ? tn(n2, e3, new u(), r3, 0) : null : null;
}
function nn(n2, e3, r3 = e3.spatialReference, t3 = 0) {
  return null != r3 && null != n2.spatialReference && null != en(n2, n2.spatialReference, e3, r3, t3);
}
function en(n2, e3, r3, t3, l) {
  pn[0] = n2.x, pn[1] = n2.y;
  const o3 = n2.z;
  return pn[2] = void 0 !== o3 ? o3 : l, o(pn, e3, 0, pn, t3, 0) ? (r3.x = pn[0], r3.y = pn[1], r3.spatialReference = t3, void 0 !== o3 || O2(t3) ? (r3.z = pn[2], r3.hasZ = true) : (r3.z = void 0, r3.hasZ = false), void 0 === n2.m ? (r3.m = void 0, r3.hasM = false) : (r3.m = n2.m, r3.hasM = true), r3) : null;
}
function rn(n2, e3, r3 = e3.spatialReference, t3 = 0) {
  return null != n2.spatialReference && null != r3 && null != tn(n2, n2.spatialReference, e3, r3, t3);
}
function tn(n2, e3, r3, t3, l) {
  const { points: o3, hasZ: i, hasM: s7 } = n2, u2 = [], c = o3.length, f = [];
  for (const a2 of o3) f.push(a2[0], a2[1], i ? a2[2] : l);
  if (!o(f, e3, 0, f, t3, 0, c)) return null;
  const p = i || O2(t3);
  for (let a2 = 0; a2 < c; ++a2) {
    const n3 = 3 * a2, e4 = f[n3], r4 = f[n3 + 1];
    p && s7 ? u2.push([e4, r4, f[n3 + 2], o3[a2][3]]) : p ? u2.push([e4, r4, f[n3 + 2]]) : s7 ? u2.push([e4, r4, o3[a2][2]]) : u2.push([e4, r4]);
  }
  return r3.points = u2, r3.spatialReference = t3, r3.hasZ = i, r3.hasM = s7, r3;
}
function ln(n2, e3, r3 = e3.spatialReference, t3 = 0) {
  return null != n2.spatialReference && null != r3 && null != on(n2, n2.spatialReference, e3, r3, t3);
}
function on(n2, e3, r3, t3, l) {
  const { paths: o3, hasZ: i, hasM: s7 } = n2, u2 = [];
  if (!fn(o3, i ?? false, s7 ?? false, e3, u2, t3, l)) return null;
  const c = i || O2(t3);
  return r3.paths = u2, r3.spatialReference = t3, r3.hasZ = c, r3.hasM = s7, r3;
}
function sn(n2, e3, r3 = e3.spatialReference, t3 = 0) {
  return null != n2.spatialReference && null != r3 && null != un(n2, n2.spatialReference, e3, r3, t3);
}
function un(n2, e3, r3, t3, l) {
  const { rings: o3, hasZ: i, hasM: s7 } = n2, u2 = [];
  if (!fn(o3, i ?? false, s7 ?? false, e3, u2, t3, l)) return null;
  const c = i || O2(t3);
  return r3.rings = u2, r3.spatialReference = t3, r3.hasZ = c, r3.hasM = s7, r3;
}
function an(n2, e3, r3 = e3.spatialReference, t3 = 0) {
  return null != n2.spatialReference && null != r3 && null != cn(n2, n2.spatialReference, e3, r3, t3);
}
function cn(n2, e3, r3, t3, l) {
  const { xmin: o3, ymin: i, xmax: s7, ymax: u2, hasZ: c, hasM: f } = n2, p = c ? n2.zmin : l;
  if (!t(o3, i, p, e3, pn, t3)) return null;
  const m = c || O2(t3);
  r3.xmin = pn[0], r3.ymin = pn[1], m && (r3.zmin = pn[2]);
  const h = c ? n2.zmax : l;
  return t(s7, u2, h, e3, pn, t3) ? (r3.xmax = pn[0], r3.ymax = pn[1], m && (r3.zmax = pn[2]), f && (r3.mmin = n2.mmin, r3.mmax = n2.mmax), r3.spatialReference = t3, r3) : null;
}
function fn(n2, e3, r3, t3, l, o3, i = 0) {
  const s7 = new Array();
  for (const a2 of n2) for (const n3 of a2) s7.push(n3[0], n3[1], e3 ? n3[2] : i);
  if (!o(s7, t3, 0, s7, o3, 0)) return false;
  let u2 = 0;
  l.length = 0;
  const c = e3 || O2(o3);
  for (const a2 of n2) {
    const n3 = new Array();
    for (const e4 of a2) c && r3 ? n3.push([s7[u2++], s7[u2++], s7[u2++], e4[3]]) : c ? n3.push([s7[u2++], s7[u2++], s7[u2++]]) : r3 ? (n3.push([s7[u2++], s7[u2++], e4[2]]), u2++) : (n3.push([s7[u2++], s7[u2++]]), u2++);
    l.push(n3);
  }
  return true;
}
var pn = n();

export {
  t,
  s6 as s,
  k,
  B,
  U,
  W,
  K,
  O3 as O,
  V,
  X,
  Y,
  q,
  C2 as C,
  F,
  H,
  I,
  J,
  L,
  N2 as N,
  Q,
  $,
  nn,
  rn,
  ln,
  sn,
  an
};
//# sourceMappingURL=chunk-4WERUJEK.js.map
