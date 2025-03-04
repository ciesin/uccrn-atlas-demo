import {
  $,
  A,
  C,
  D,
  I,
  M,
  N,
  S,
  T,
  a3,
  c,
  e2 as e3,
  i as i2,
  k,
  o,
  o2,
  r,
  w
} from "./chunk-4LTV6KQ5.js";
import {
  A as A2
} from "./chunk-WCGYJMU3.js";
import {
  r as r2
} from "./chunk-577U4F6A.js";
import {
  a as a2,
  d,
  e as e2,
  f,
  i,
  p,
  s,
  s2,
  t,
  u2 as u,
  y
} from "./chunk-STW6HRXO.js";
import {
  e,
  u2
} from "./chunk-M6FNW7GP.js";
import {
  a,
  h,
  j,
  n2 as n,
  s2 as s3
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/accessorSupport/get.js
function e4(t10, e13) {
  const i8 = "?" === t10[t10.length - 1] ? t10.slice(0, -1) : t10;
  if (null != e13.getItemAt || Array.isArray(e13)) {
    const t11 = parseInt(i8, 10);
    if (!isNaN(t11)) return Array.isArray(e13) ? e13[t11] : e13.at(t11);
  }
  const u8 = t(e13);
  return e2(u8, i8) ? u8.get(i8) : e13[i8];
}
function i3(t10, n7, r9) {
  if (null == t10) return t10;
  const u8 = e4(n7[r9], t10);
  return !u8 && r9 < n7.length - 1 ? void 0 : r9 === n7.length - 1 ? u8 : i3(u8, n7, r9 + 1);
}
function u3(n7, r9, u8 = 0) {
  return "string" != typeof r9 || r9.includes(".") ? i3(n7, s(r9), u8) : e4(r9, n7);
}
function o3(t10, n7) {
  return u3(t10, n7);
}
function s4(t10, n7) {
  return void 0 !== u3(n7, t10);
}

// node_modules/@arcgis/core/core/accessorSupport/set.js
function t2(o10, e13, s10) {
  if (o10 && e13) if ("object" == typeof e13) for (const r9 of Object.getOwnPropertyNames(e13)) t2(o10, r9, e13[r9]);
  else {
    if (e13.includes(".")) {
      const n7 = e13.split("."), i9 = n7.splice(-1, 1)[0];
      return void t2(o3(o10, n7), i9, s10);
    }
    const i8 = o10.__accessor__;
    null != i8 && n2(e13, i8), o10[e13] = s10;
  }
}
function n2(r9, t10) {
  if (has("esri-unknown-property-errors") && !e5(r9, t10)) throw new s3("set:unknown-property", s5(r9, t10));
}
function e5(o10, r9) {
  return null != r9.metadata[o10];
}
function s5(o10, r9) {
  return "setting unknown property '" + o10 + "' on instance of " + r9.host.declaredClass;
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
function m(n7 = {}) {
  return (i8, s10) => {
    if (i8 === Function.prototype) throw new Error(`Inappropriate use of @property() on a static field: ${i8.name}.${s10}. Accessor does not support static properties.`);
    const a4 = Object.getOwnPropertyDescriptor(i8, s10), c5 = o2(i8, s10);
    a4 && (a4.get || a4.set ? (c5.get = a4.get || c5.get, c5.set = a4.set || c5.set) : "value" in a4 && ("value" in n7 && n.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${s10}" on "${i8.constructor.name}" already defined in the metadata`, n7), c5.value = n7.value = a4.value)), null != n7.readOnly && (c5.readOnly = n7.readOnly);
    const f5 = n7.aliasOf;
    if (f5) {
      const t10 = "string" == typeof f5 ? f5 : f5.source, r9 = "string" == typeof f5 ? null : true === f5.overridable;
      let e13;
      c5.dependsOn = [t10], c5.get = function() {
        let r10 = o3(this, t10);
        if ("function" == typeof r10) {
          e13 || (e13 = t10.split(".").slice(0, -1).join("."));
          const o10 = o3(this, e13);
          o10 && (r10 = r10.bind(o10));
        }
        return r10;
      }, c5.readOnly || (c5.set = r9 ? function(t11) {
        this._override(s10, t11);
      } : function(r10) {
        t2(this, t10, r10);
      });
    }
    const p4 = n7.type, u8 = n7.types;
    if (!c5.cast) {
      let t10;
      p4 ? t10 = v(p4) : u8 && (t10 = Array.isArray(u8) ? A(N(u8[0])) : N(u8)), n7.cast = h2(n7.cast, t10);
    }
    c(c5, n7), n7.range && (c5.cast = i2(c5.cast, n7.range));
  };
}
function j2(t10, r9, e13) {
  const o10 = o2(t10, e13);
  o10.json || (o10.json = {});
  let n7 = o10.json;
  return void 0 !== r9 && (n7.origins || (n7.origins = {}), n7.origins[r9] || (n7.origins[r9] = {}), n7 = n7.origins[r9]), n7;
}
function v(t10) {
  let r9 = 0, e13 = t10;
  if (C(t10)) return D(t10);
  for (; Array.isArray(e13) && 1 === e13.length && "string" != typeof e13[0] && "number" != typeof e13[0]; ) e13 = e13[0], r9++;
  const o10 = e13;
  if (S(o10)) return 0 === r9 ? T(o10) : M(T(o10), r9);
  if (1 === r9) return $(o10);
  if (r9 > 1) return k(o10, r9);
  const l2 = t10;
  return l2.from ? l2.from : w(l2);
}
function h2(t10, r9) {
  if (t10 || r9) return t10 ? r9 ? (e13, o10) => r9(t10(e13, o10), o10) : t10 : r9;
}

// node_modules/@arcgis/core/core/deprecate.js
var e6 = /* @__PURE__ */ new WeakMap();
function n3(n7, t10, r9 = false) {
  const o10 = `🛑 DEPRECATED - ${t10}`;
  if (!r9) return void n7.warn(o10);
  let i8 = e6.get(n7);
  i8 || (i8 = /* @__PURE__ */ new Set(), e6.set(n7, i8)), i8.has(t10) || (i8.add(t10), n7.warn(o10));
}
function i4(e13, n7, t10 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { moduleName: r9 } = t10;
    p2(e13, `Function: ${(r9 ? r9 + "::" : "") + n7 + "()"}`, t10);
  }
}
function s6(e13, n7, t10 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { moduleName: r9 } = t10;
    p2(e13, `Property: ${(r9 ? r9 + "::" : "") + n7}`, t10);
  }
}
function c2(e13, n7, t10 = {}) {
  has("esri-deprecation-warnings") && p2(e13, `Multiple argument constructor: ${n7}`, { warnOnce: true, replacement: `new ${n7}({ <your properties here> })`, ...t10 });
}
function p2(e13, t10, r9 = {}) {
  if (has("esri-deprecation-warnings")) {
    const { replacement: o10, version: i8, see: s10, warnOnce: a4 } = r9;
    let c5 = t10;
    if (o10 && (c5 += `
	🛠️ Replacement: ${o10}`), i8 && (c5 += `
	⚙️ Version: ${i8}`), s10) if (Array.isArray(s10)) {
      c5 += "\n	🔗 See for more details:";
      for (const e14 of s10) c5 += `
		${e14}`;
    } else c5 += `
	🔗 See ${s10} for more details.`;
    n3(e13, c5, a4);
  }
}

// node_modules/@arcgis/core/core/accessorSupport/PropertyOrigin.js
var e7;
!function(e13) {
  e13[e13.DEFAULTS = 0] = "DEFAULTS", e13[e13.COMPUTED = 1] = "COMPUTED", e13[e13.SERVICE = 2] = "SERVICE", e13[e13.PORTAL_ITEM = 3] = "PORTAL_ITEM", e13[e13.WEB_SCENE = 4] = "WEB_SCENE", e13[e13.WEB_MAP = 5] = "WEB_MAP", e13[e13.LINK_CHART = 6] = "LINK_CHART", e13[e13.USER = 7] = "USER";
}(e7 || (e7 = {}));
var r3 = e7.USER + 1;
function n4(r9) {
  switch (r9) {
    case "defaults":
      return e7.DEFAULTS;
    case "service":
      return e7.SERVICE;
    case "portal-item":
      return e7.PORTAL_ITEM;
    case "web-scene":
      return e7.WEB_SCENE;
    case "web-map":
      return e7.WEB_MAP;
    case "link-chart":
      return e7.LINK_CHART;
    case "user":
      return e7.USER;
    default:
      return null;
  }
}
function t3(r9) {
  switch (r9) {
    case e7.DEFAULTS:
      return "defaults";
    case e7.SERVICE:
      return "service";
    case e7.PORTAL_ITEM:
      return "portal-item";
    case e7.WEB_SCENE:
      return "web-scene";
    case e7.WEB_MAP:
      return "web-map";
    case e7.LINK_CHART:
      return "link-chart";
    case e7.USER:
      return "user";
  }
}
function u4(e13) {
  return t3(e13);
}

// node_modules/@arcgis/core/core/accessorSupport/tracking/SimpleTrackingTarget.js
var s7 = class extends s2 {
  constructor(t10) {
    super(new i5(t10)), this._observer && e8.register(this, new WeakRef(this._observer), this);
  }
  destroy() {
    var _a, _b;
    this._observer && e8.unregister(this._observer), (_a = this.accessed) == null ? void 0 : _a.clear(), this.clear(), (_b = this._observer) == null ? void 0 : _b.destroy();
  }
};
var i5 = class {
  constructor(t10) {
    this._notify = t10, this._invalidCount = 0, this.destroyed = false;
  }
  onInvalidated() {
    this._invalidCount++;
  }
  onCommitted() {
    if (this.destroyed) return;
    const t10 = this._invalidCount;
    if (1 === t10) return this._invalidCount = 0, void this._notify();
    this._invalidCount = t10 > 0 ? t10 - 1 : 0;
  }
  destroy() {
    this.destroyed = true, this._notify = r4;
  }
};
var e8 = new FinalizationRegistry((t10) => {
  var _a;
  (_a = t10.deref()) == null ? void 0 : _a.destroy();
});
function r4() {
}

// node_modules/@arcgis/core/core/ArrayPool.js
function r5(e13) {
  e13.length = 0;
}
var t4 = class {
  constructor(t10 = 50, o10 = 50) {
    this._pool = new e3(Array, void 0, r5, o10, t10);
  }
  acquire() {
    return this._pool.acquire();
  }
  release(e13) {
    this._pool.release(e13);
  }
  prune() {
    this._pool.prune(0);
  }
  static acquire() {
    return o4.acquire();
  }
  static release(e13) {
    return o4.release(e13);
  }
  static prune() {
    o4.prune();
  }
};
var o4 = new t4(100);

// node_modules/@arcgis/core/core/ReentrantObjectPool.js
var s8 = class extends e3 {
  constructor() {
    super(...arguments), this._set = /* @__PURE__ */ new Set();
  }
  destroy() {
    super.destroy(), this._set = null;
  }
  acquire(...e13) {
    const s10 = super.acquire(...e13);
    return this._set.delete(s10), s10;
  }
  release(e13) {
    e13 && !this._set.has(e13) && (super.release(e13), this._set.add(e13));
  }
  _dispose(e13) {
    this._set.delete(e13), super._dispose(e13);
  }
};

// node_modules/@arcgis/core/core/SetUtils.js
function n5(n7, r9) {
  for (const t10 of n7.values()) if (r9(t10)) return true;
  return false;
}
function r6(n7, r9) {
  if (!r9) return n7;
  for (const t10 of r9) null != t10 && n7.add(t10);
  return n7;
}
function t5(n7, r9) {
  return null != r9 && n7.add(r9), n7;
}
function u5(n7, t10) {
  const u8 = /* @__PURE__ */ new Set();
  return r6(u8, n7), r6(u8, t10), u8;
}
function o5(n7, r9) {
  const t10 = /* @__PURE__ */ new Set();
  for (const u8 of r9) n7.has(u8) && t10.add(u8);
  return t10;
}
function e9(n7, r9) {
  if (!n7 || !r9) return false;
  if (n7 === r9) return true;
  for (const t10 of n7) if (!r9.has(t10)) return false;
  return true;
}
function f2(n7, r9) {
  if (null == n7 && null == r9) return true;
  if (null == n7 || null == r9 || n7.size !== r9.size) return false;
  for (const t10 of n7) if (!r9.has(t10)) return false;
  return true;
}
function i6(n7, r9) {
  const t10 = new Set(n7);
  for (const u8 of r9) t10.delete(u8);
  return t10;
}
function c3(n7, r9) {
  return i6(u5(n7, r9), o5(n7, r9));
}

// node_modules/@arcgis/core/core/uid.js
var t6 = 0;
function e10() {
  return ++t6;
}

// node_modules/@arcgis/core/core/accessorSupport/trackingUtils.js
var u6 = false;
var l = [];
function o6(l2, o10) {
  let e13 = new s7(a4), i8 = null, s10 = false;
  function a4() {
    if (!e13 || s10) return;
    if (u6) return void c4(a4);
    const n7 = i8;
    e13.clear(), u6 = true, s10 = true, i8 = f(e13, l2), s10 = false, u6 = false, o10(i8, n7), f3();
  }
  function m5() {
    e13 && (e13.destroy(), e13 = null, i8 = null);
  }
  return s10 = true, i8 = f(e13, l2), s10 = false, e(m5);
}
function e11(u8, l2) {
  let o10 = new s7(i8), e13 = null;
  function i8() {
    l2(e13, f5);
  }
  function c5() {
    o10 && (o10.destroy(), o10 = null), e13 = null;
  }
  function f5() {
    return o10 ? (o10.clear(), e13 = f(o10, u8), e13) : null;
  }
  return f5(), e(c5);
}
function i7(l2, o10) {
  let e13 = false, i8 = false;
  const s10 = !!(o10 == null ? void 0 : o10.sync);
  let a4 = new s7(() => {
    e13 || i8 || (i8 = true, s10 ? m5() : queueMicrotask(m5));
  });
  function m5() {
    i8 = false, a4 && !e13 && (u6 ? c4(m5) : (a4.clear(), u6 = true, e13 = true, f(a4, l2), e13 = false, u6 = false, f3()));
  }
  function p4() {
    a4 && (a4.destroy(), a4 = null);
  }
  return e13 = true, f(a4, l2), e13 = false, e(p4);
}
function c4(n7) {
  l.includes(n7) || l.unshift(n7);
}
function f3() {
  for (; l.length; ) l.pop()();
}

// node_modules/@arcgis/core/core/accessorSupport/watch.js
var h3;
!function(e13) {
  e13[e13.Untracked = 0] = "Untracked", e13[e13.Tracked = 1] = "Tracked";
}(h3 || (h3 = {}));
var m2 = class {
  constructor() {
    this.uid = e10(), this.removed = false, this.type = null, this.oldValue = null, this.callback = null, this.getValue = null, this.target = null, this.path = null, this.equals = null;
  }
  static acquireUntracked(e13, t10, l2, o10, i8) {
    return this.pool.acquire(h3.Untracked, e13, t10, l2, o10, i8, j);
  }
  static acquireTracked(e13, t10, r9, l2) {
    return this.pool.acquire(h3.Tracked, e13, t10, r9, null, null, l2);
  }
  notify(e13, t10) {
    this.type === h3.Untracked ? this.callback.call(this.target, e13, t10, this.path, this.target) : this.callback.call(null, e13, t10, void 0, void 0);
  }
  acquire(e13, t10, r9, l2, o10, i8, n7) {
    this.uid = e10(), this.removed = false, this.type = e13, this.oldValue = t10, this.callback = r9, this.getValue = l2, this.target = o10, this.path = i8, this.equals = n7;
  }
  release() {
    this.target = this.path = this.oldValue = this.callback = this.getValue = null, this.uid = e10(), this.removed = true;
  }
};
m2.pool = new s8(m2);
var p3 = new t4();
var v2 = /* @__PURE__ */ new Set();
var k2;
function _(e13) {
  v2.delete(e13), v2.add(e13), k2 || (k2 = A2(q));
}
function g(e13) {
  if (e13.removed) return;
  const t10 = e13.oldValue, r9 = e13.getValue();
  e13.equals(t10, r9) || (e13.oldValue = r9, e13.notify(r9, t10));
}
function j3(e13) {
  for (const t10 of v2.values()) t10.target === e13 && (t10.removed = true);
}
function q() {
  let e13 = 10;
  for (; k2 && e13--; ) {
    k2 = null;
    const e14 = V(), t10 = p3.acquire();
    for (const r9 of e14) {
      const e15 = r9.uid;
      g(r9), e15 === r9.uid && r9.removed && t10.push(r9);
    }
    for (const r9 of v2) r9.removed && (t10.push(r9), v2.delete(r9));
    for (const r9 of t10) m2.pool.release(r9);
    p3.release(t10), p3.release(e14), y2.forEach((e15) => e15());
  }
}
function V() {
  const e13 = p3.acquire();
  e13.length = v2.size;
  let t10 = 0;
  for (const r9 of v2) e13[t10] = r9, ++t10;
  return v2.clear(), e13;
}
var y2 = /* @__PURE__ */ new Set();
function U(e13) {
  return y2.add(e13), e(() => y2.delete(e13));
}
function T2(e13, r9, l2) {
  let o10 = p(e13, r9, l2, (e14, r10, l3) => {
    let i8, n7, s10 = e11(() => u3(e14, r10), (t10, s11) => {
      var _a;
      ((_a = e14.__accessor__) == null ? void 0 : _a.lifecycle) === I.DESTROYED || i8 && i8.uid !== n7 ? o10.remove() : (i8 || (i8 = m2.acquireUntracked(t10, l3, s11, e14, r10), n7 = i8.uid), _(i8));
    });
    return e(() => {
      s10.remove(), i8 && (i8.uid !== n7 || i8.removed || (i8.removed = true, _(i8)), i8 = null), o10 = s10 = null;
    });
  });
  return o10;
}
function E(e13, t10, l2) {
  const o10 = p(e13, t10, l2, (e14, t11, l3) => {
    let i8 = false;
    return o6(() => u3(e14, t11), (n7, s10) => {
      e14.__accessor__.lifecycle !== I.DESTROYED ? i8 || (i8 = true, j(s10, n7) || l3.call(e14, n7, s10, t11, e14), i8 = false) : o10.remove();
    });
  });
  return o10;
}
function b(e13, r9, l2, o10 = false) {
  return e13.__accessor__ && e13.__accessor__.lifecycle !== I.DESTROYED ? o10 ? E(e13, r9, l2) : T2(e13, r9, l2) : e();
}
function D2(e13, r9, l2) {
  let o10, i8, n7 = e11(e13, (e14, t10) => {
    o10 && o10.uid !== i8 ? n7.remove() : (o10 || (o10 = m2.acquireTracked(e14, r9, t10, l2), i8 = o10.uid), _(o10));
  });
  return e(() => {
    n7.remove(), o10 && (o10.uid !== i8 || o10.removed || (o10.removed = true, _(o10)), o10 = null), n7 = null;
  });
}
function S2(e13, t10, r9) {
  let l2 = false;
  return o6(e13, (e14, o10) => {
    l2 || (l2 = true, r9(o10, e14) || t10(e14, o10), l2 = false);
  });
}
function w2(e13, t10, r9 = false, o10 = h) {
  return r9 ? S2(e13, t10, o10) : D2(e13, t10, o10);
}
function O(e13) {
  return n5(v2, (t10) => t10.oldValue === e13);
}

// node_modules/@arcgis/core/core/iteratorUtils.js
function n6(n7) {
  const o10 = [];
  return function* () {
    yield* o10;
    for (const t10 of n7) o10.push(t10), yield t10;
  };
}
function o7(n7, o10) {
  for (const t10 of n7) if (null != t10 && o10(t10)) return t10;
}
function t7(n7) {
  return null != n7 && "function" == typeof n7[Symbol.iterator];
}

// node_modules/@arcgis/core/core/Handles.js
var r7 = class {
  constructor() {
    this._groups = /* @__PURE__ */ new Map();
  }
  destroy() {
    this.removeAll();
  }
  get size() {
    let t10 = 0;
    return this._groups.forEach((r9) => {
      t10 += r9.length;
    }), t10;
  }
  add(r9, e13) {
    if (t7(r9)) {
      const t10 = this._getOrCreateGroup(e13);
      for (const e14 of r9) o8(e14) && t10.push(e14);
    } else if (o8(r9)) {
      this._getOrCreateGroup(e13).push(r9);
    }
    return this;
  }
  forEach(t10, r9) {
    if ("function" == typeof t10) this._groups.forEach((r10) => r10.forEach(t10));
    else {
      const e13 = this._getGroup(t10);
      e13 && r9 && e13.forEach(r9);
    }
  }
  has(t10) {
    return this._groups.has(e12(t10));
  }
  remove(r9) {
    if ("string" != typeof r9 && t7(r9)) {
      for (const t10 of r9) this.remove(t10);
      return this;
    }
    return this.has(r9) ? (s9(this._getGroup(r9)), this._groups.delete(e12(r9)), this) : this;
  }
  removeAll() {
    return this._groups.forEach(s9), this._groups.clear(), this;
  }
  removeReference(t10) {
    return this._groups.delete(t10), this;
  }
  _getOrCreateGroup(t10) {
    if (this.has(t10)) return this._getGroup(t10);
    const r9 = [];
    return this._groups.set(e12(t10), r9), r9;
  }
  _getGroup(t10) {
    return this._groups.get(e12(t10));
  }
};
function e12(t10) {
  return t10 || "_default_";
}
function s9(t10) {
  for (const e13 of t10) e13 instanceof r7 ? e13.removeAll() : e13.remove();
}
function o8(t10) {
  return null != t10 && (!!t10.remove || t10 instanceof r7);
}

// node_modules/@arcgis/core/core/accessorSupport/Property.js
var g2 = class extends r2 {
  constructor(t10, i8) {
    super(), this.propertyName = t10, this.metadata = i8, this.trackingTarget = new s2(this), this.flags = 0, this.flags = i.Dirty | (i8.nonNullable ? i.NonNullable : 0) | (i8.hasOwnProperty("value") ? i.HasDefaultValue : 0) | (void 0 === i8.get ? i.DepTrackingInitialized : 0) | (void 0 === i8.dependsOn ? i.AutoTracked : 0);
  }
  destroy() {
    this.flags & i.Dirty && this.onCommitted(), super.destroy(), this.trackingTarget.destroy();
  }
  getComputed(t10) {
    t10.mutable && a2(this);
    const n7 = t10.store, g5 = this.propertyName, h4 = this.flags, l2 = n7.get(g5);
    if (h4 & i.Computing) return l2;
    if (~h4 & i.Dirty && n7.has(g5)) return l2;
    this.flags |= i.Computing;
    const m5 = t10.host;
    let d3;
    h4 & i.AutoTracked ? d3 = f(this.trackingTarget, this.metadata.get, m5) : (y(m5, this), d3 = this.metadata.get.call(m5)), this.flags |= i.DepTrackingInitialized, n7.set(g5, d3, e7.COMPUTED);
    const c5 = n7.get(g5);
    return c5 === l2 ? this.flags &= ~i.Dirty : u(this.commit, this), this.flags &= ~i.Computing, c5;
  }
  notifyChange() {
    this.onInvalidated(), this.onCommitted();
  }
  invalidate() {
    this.onInvalidated();
  }
  commit() {
    this.flags &= ~i.Dirty, this.onCommitted();
  }
  onInvalidated() {
    ~this.flags & i.Overridden && (this.flags |= i.Dirty);
    const t10 = this._observers;
    if (t10 && t10.length > 0) for (const i8 of t10) i8.onInvalidated();
  }
  onCommitted() {
    const t10 = this._observers;
    if (t10 && t10.length > 0) {
      const i8 = t10.slice();
      for (const t11 of i8) t11.onCommitted();
    }
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Store.js
var t8 = class _t {
  constructor() {
    this._values = /* @__PURE__ */ new Map(), this.multipleOriginsSupported = false;
  }
  clone(s10) {
    const r9 = new _t();
    return this._values.forEach((t10, i8) => {
      s10 && s10.has(i8) || r9.set(i8, a(t10));
    }), r9;
  }
  get(e13) {
    return this._values.get(e13);
  }
  originOf() {
    return e7.USER;
  }
  keys() {
    return [...this._values.keys()];
  }
  set(e13, s10) {
    this._values.set(e13, s10);
  }
  delete(e13) {
    this._values.delete(e13);
  }
  has(e13) {
    return this._values.has(e13);
  }
  forEach(e13) {
    this._values.forEach(e13);
  }
};

// node_modules/@arcgis/core/core/accessorSupport/Properties.js
function g3(t10, e13, i8) {
  return void 0 !== t10;
}
function m3(t10, e13, s10, r9) {
  return void 0 !== t10 && (!(null == s10 && t10.flags & i.NonNullable) || (r9.lifecycle, I.INITIALIZING, false));
}
var u7 = class {
  constructor(t10) {
    this.host = t10, this.propertiesByName = /* @__PURE__ */ new Map(), this.ctorArgs = null, this.lifecycle = I.INITIALIZING, this.store = new t8(), this.mutable = true, this._origin = e7.USER;
    const e13 = this.host.constructor.__accessorMetadata__;
    for (const i8 in e13) {
      const t11 = new g2(i8, e13[i8]);
      this.propertiesByName.set(i8, t11);
    }
    this.metadata = e13;
  }
  initialize() {
    this.lifecycle = I.CONSTRUCTING;
  }
  constructed() {
    this.lifecycle = I.CONSTRUCTED;
  }
  destroy() {
    this.lifecycle = I.DESTROYED, this.propertiesByName.forEach((t10) => t10.destroy());
  }
  get initialized() {
    return this.lifecycle !== I.INITIALIZING;
  }
  get(t10) {
    const e13 = this.propertiesByName.get(t10);
    if (e13.metadata.get) return e13.getComputed(this);
    this.mutable && a2(e13);
    const i8 = this.store;
    return i8.has(t10) ? i8.get(t10) : e13.metadata.value;
  }
  originOf(t10) {
    const e13 = this.store.originOf(t10);
    if (void 0 === e13) {
      const e14 = this.propertiesByName.get(t10);
      if (void 0 !== e14 && e14.flags & i.HasDefaultValue) return "defaults";
    }
    return t3(e13);
  }
  has(t10) {
    return this.propertiesByName.has(t10) && this.store.has(t10);
  }
  keys() {
    return [...this.propertiesByName.keys()];
  }
  internalGet(t10) {
    const e13 = this.propertiesByName.get(t10);
    if (g3(e13)) return this.store.has(t10) ? this.store.get(t10) : e13.metadata.value;
  }
  internalSet(t10, e13) {
    const i8 = this.propertiesByName.get(t10);
    g3(i8) && this._internalSet(i8, e13);
  }
  getDependsInfo(t10, e13, i8) {
    const r9 = this.propertiesByName.get(e13);
    if (!g3(r9)) return "";
    const o10 = new s2(), a4 = f(o10, () => {
      var _a;
      return (_a = r9.metadata.get) == null ? void 0 : _a.call(t10);
    });
    let n7 = `${i8}${t10.declaredClass.split(".").pop()}.${e13}: ${a4}
`;
    const c5 = o10.accessed ?? /* @__PURE__ */ new Set();
    if (0 === c5.size) return n7;
    i8 += "  ";
    for (const l2 of c5) {
      if (!(l2 instanceof g2)) continue;
      n7 += `${i8}${l2.propertyName}: undefined
`;
    }
    return n7;
  }
  setAtOrigin(t10, e13, i8) {
    const s10 = this.propertiesByName.get(t10);
    if (g3(s10)) return this._setAtOrigin(s10, e13, i8);
  }
  isOverridden(t10) {
    const e13 = this.propertiesByName.get(t10);
    return void 0 !== e13 && !!(e13.flags & i.Overridden);
  }
  clearOverride(t10) {
    const e13 = this.propertiesByName.get(t10);
    e13 && e13.flags & i.Overridden && (e13.flags &= ~i.Overridden, e13.notifyChange());
  }
  override(t10, e13) {
    const i8 = this.propertiesByName.get(t10);
    if (!m3(i8, t10, e13, this)) return;
    const s10 = i8.metadata.cast;
    if (s10) {
      const t11 = this._cast(s10, e13), { valid: i9, value: r9 } = t11;
      if (y3.release(t11), !i9) return;
      e13 = r9;
    }
    i8.flags |= i.Overridden, this._internalSet(i8, e13);
  }
  set(t10, e13) {
    const i8 = this.propertiesByName.get(t10);
    if (!m3(i8, t10, e13, this)) return;
    const s10 = i8.metadata.cast;
    if (s10) {
      const t11 = this._cast(s10, e13), { valid: i9, value: r10 } = t11;
      if (y3.release(t11), !i9) return;
      e13 = r10;
    }
    const r9 = i8.metadata.set;
    r9 ? r9.call(this.host, e13) : this._internalSet(i8, e13);
  }
  setDefaultOrigin(t10) {
    this._origin = n4(t10);
  }
  getDefaultOrigin() {
    return t3(this._origin);
  }
  notifyChange(t10) {
    const e13 = this.propertiesByName.get(t10);
    void 0 !== e13 && e13.notifyChange();
  }
  invalidate(t10) {
    const e13 = this.propertiesByName.get(t10);
    void 0 !== e13 && e13.invalidate();
  }
  commit(t10) {
    const e13 = this.propertiesByName.get(t10);
    void 0 !== e13 && e13.commit();
  }
  _internalSet(t10, e13) {
    const s10 = this.lifecycle !== I.INITIALIZING ? this._origin : e7.DEFAULTS;
    this._setAtOrigin(t10, e13, s10);
  }
  _setAtOrigin(e13, i8, s10) {
    const r9 = this.store, o10 = e13.propertyName;
    r9.has(o10, s10) && j(i8, r9.get(o10)) && ~e13.flags & i.Overridden && s10 === r9.originOf(o10) || (e13.invalidate(), r9.set(o10, i8, s10), e13.commit(), d(this.host, e13));
  }
  _cast(t10, e13) {
    const i8 = y3.acquire();
    return i8.valid = true, i8.value = e13, t10 && (i8.value = t10.call(this.host, e13, i8)), i8;
  }
};
var d2 = class {
  constructor() {
    this.value = null, this.valid = true;
  }
  acquire() {
    this.valid = true;
  }
  release() {
    this.value = null;
  }
};
var y3 = new e3(d2);

// node_modules/@arcgis/core/core/accessorSupport/testSupport.js
var r8;
function o9() {
  return r8;
}
var t9;
!function(r9) {
  r9[r9.Ignore = 0] = "Ignore", r9[r9.Destroy = 1] = "Destroy", r9[r9.ThrowError = 2] = "ThrowError";
}(t9 || (t9 = {}));

// node_modules/@arcgis/core/core/Accessor.js
var f4;
var m4;
function y4(e13) {
  var _a;
  if (null == e13) return { value: e13 };
  if (Array.isArray(e13)) return { type: [e13[0]], value: null };
  switch (typeof e13) {
    case "object":
      return ((_a = e13.constructor) == null ? void 0 : _a.__accessorMetadata__) || e13 instanceof Date ? { type: e13.constructor, value: e13 } : e13;
    case "boolean":
      return { type: Boolean, value: e13 };
    case "string":
      return { type: String, value: e13 };
    case "number":
      return { type: Number, value: e13 };
    case "function":
      return { type: e13, value: null };
    default:
      return;
  }
}
var v3 = Symbol("Accessor-Handles");
var b2 = Symbol("Accessor-Initialized");
var g4 = class _g {
  static createSubclass(e13 = {}) {
    if (Array.isArray(e13)) throw new Error("Multi-inheritance unsupported since 4.16");
    const { properties: r9, declaredClass: t10, constructor: s10 } = e13;
    delete e13.declaredClass, delete e13.properties, delete e13.constructor;
    const o10 = this;
    class i8 extends o10 {
      constructor(...e14) {
        super(...e14), this.inherited = null, s10 && s10.apply(this, e14);
      }
    }
    r(i8.prototype);
    for (const c5 in e13) {
      const r10 = e13[c5];
      i8.prototype[c5] = "function" == typeof r10 ? function(...e14) {
        const t11 = this.inherited;
        let s11;
        this.inherited = function(...e15) {
          if (o10.prototype[c5]) return o10.prototype[c5].apply(this, e15);
        };
        try {
          s11 = r10.apply(this, e14);
        } catch (i9) {
          throw this.inherited = t11, i9;
        }
        return this.inherited = t11, s11;
      } : e13[c5];
    }
    for (const c5 in r9) {
      const e14 = y4(r9[c5]);
      m(e14)(i8.prototype, c5);
    }
    return a3(t10)(i8);
  }
  static freeze(e13) {
    return e13 instanceof _g ? e13.__accessor__.mutable = false : Object.freeze(e13), e13;
  }
  static isFrozen(e13) {
    return e13 instanceof _g ? !e13.__accessor__.mutable : Object.isFrozen(e13);
  }
  constructor(...e13) {
    var _a, _b;
    if (this[f4] = null, this[m4] = false, this.constructor === _g) throw new Error("[accessor] cannot instantiate Accessor. This can be fixed by creating a subclass of Accessor");
    const r9 = new u7(this);
    Object.defineProperty(this, "__accessor__", { enumerable: false, value: r9 }), e13.length > 0 && (r9.ctorArgs = ((_a = this.normalizeCtorArgs) == null ? void 0 : _a.apply(this, e13)) ?? e13[0]), (_b = o9()) == null ? void 0 : _b.onInstanceConstruct(this);
  }
  postscript() {
    const e13 = this.__accessor__, r9 = e13.ctorArgs;
    e13.initialize(), r9 && (this.set(r9), e13.ctorArgs = null), e13.constructed(), this.initialize(), this[b2] = true;
  }
  initialize() {
  }
  [o]() {
    this[v3] = u2(this[v3]);
  }
  destroy() {
    var _a;
    this.destroyed || (j3(this), this.__accessor__.destroy(), (_a = o9()) == null ? void 0 : _a.onInstanceDestroy(this));
  }
  [Symbol.dispose]() {
    this.destroy();
  }
  get constructed() {
    return this.__accessor__ && this.__accessor__.initialized || false;
  }
  get initialized() {
    return this[b2];
  }
  get destroyed() {
    var _a;
    return ((_a = this.__accessor__) == null ? void 0 : _a.lifecycle) === I.DESTROYED || false;
  }
  commitProperty(e13) {
    o3(this, e13);
  }
  hasOwnProperty(e13) {
    return this.__accessor__ ? this.__accessor__.has(e13) : Object.prototype.hasOwnProperty.call(this, e13);
  }
  keys() {
    return this.__accessor__ ? this.__accessor__.keys() : [];
  }
  set(e13, r9) {
    return t2(this, e13, r9), this;
  }
  watch(r9, s10, o10) {
    return i4(n.getLogger(this), "`watch` is deprecated in favor of reactiveUtils.watch", { replacement: "reactiveUtils.watch", version: "4.32", see: "https://developers.arcgis.com/javascript/latest/api-reference/esri-core-reactiveUtils.html#watch", warnOnce: true }), b(this, r9, s10, o10);
  }
  addHandles(e13, t10) {
    if (this.destroyed) {
      const r9 = Array.isArray(e13) ? e13 : [e13];
      for (const e14 of r9) e14.remove();
      return;
    }
    (this[v3] ?? (this[v3] = new r7())).add(e13, t10);
  }
  removeHandles(e13) {
    var _a;
    (_a = this[v3]) == null ? void 0 : _a.remove(e13);
  }
  removeAllHandles() {
    var _a;
    (_a = this[v3]) == null ? void 0 : _a.removeAll();
  }
  removeHandlesReference(e13) {
    var _a;
    (_a = this[v3]) == null ? void 0 : _a.removeReference(e13);
  }
  hasHandles(e13) {
    var _a;
    return true === ((_a = this[v3]) == null ? void 0 : _a.has(e13));
  }
  _override(e13, r9) {
    void 0 === r9 ? this.__accessor__.clearOverride(e13) : this.__accessor__.override(e13, r9);
  }
  _clearOverride(e13) {
    return this.__accessor__.clearOverride(e13);
  }
  _overrideIfSome(e13, r9) {
    null == r9 ? this.__accessor__.clearOverride(e13) : this.__accessor__.override(e13, r9);
  }
  _isOverridden(e13) {
    return this.__accessor__.isOverridden(e13);
  }
  notifyChange(e13) {
    this.__accessor__.notifyChange(e13);
  }
  _get(e13) {
    return this.__accessor__.internalGet(e13);
  }
  _set(e13, r9) {
    return this.__accessor__.internalSet(e13, r9), this;
  }
};
f4 = v3, m4 = b2;

export {
  u3 as u,
  o3 as o,
  s4 as s,
  m,
  j2 as j,
  s6 as s2,
  c2 as c,
  p2 as p,
  n6 as n,
  o7 as o2,
  t7 as t,
  r7 as r,
  e7 as e,
  r3 as r2,
  n4 as n2,
  t3 as t2,
  u4 as u2,
  t4 as t3,
  s8 as s3,
  n5 as n3,
  r6 as r3,
  t5 as t4,
  u5 as u3,
  o5 as o3,
  e9 as e2,
  f2 as f,
  i6 as i,
  c3 as c2,
  e10 as e3,
  s7 as s4,
  i7 as i2,
  U,
  w2 as w,
  O,
  g4 as g
};
//# sourceMappingURL=chunk-RYSF6YCR.js.map
