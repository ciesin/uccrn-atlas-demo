import {
  a2 as a,
  c2 as c,
  e2 as e,
  f,
  i,
  o2 as o,
  r3 as r,
  s,
  t2 as t,
  u
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/core/lang.js
function l(t3, n4) {
  let e5;
  if (n4) for (e5 in t3) t3.hasOwnProperty(e5) && (void 0 === t3[e5] ? delete t3[e5] : t3[e5] instanceof Object && l(t3[e5], true));
  else for (e5 in t3) t3.hasOwnProperty(e5) && void 0 === t3[e5] && delete t3[e5];
  return t3;
}
function a2(t3) {
  if (!t3 || "object" != typeof t3 || "function" == typeof t3) return t3;
  const n4 = O(t3);
  if (null != n4) return n4;
  if (y(t3)) return t3.clone();
  if (b(t3)) return t3.map(a2);
  if (m(t3)) throw new Error("Trying to clone an unclonable Accessor instance");
  const e5 = {};
  for (const r4 of Object.getOwnPropertyNames(t3)) e5[r4] = a2(t3[r4]);
  return e5;
}
function p(t3) {
  if (!t3 || "object" != typeof t3 || "function" == typeof t3 || "HTMLElement" in globalThis && t3 instanceof HTMLElement) return t3;
  const n4 = O(t3);
  if (null != n4) return n4;
  if (b(t3)) {
    let n5 = true;
    const e6 = t3.map((t4) => {
      const e7 = p(t4);
      return null != t4 && null == e7 && (n5 = false), e7;
    });
    return n5 ? e6 : null;
  }
  if (y(t3)) return t3.clone();
  if (t3 instanceof File || t3 instanceof Blob) return t3;
  if (m(t3)) return null;
  const e5 = new (0, Object.getPrototypeOf(t3).constructor)();
  for (const r4 of Object.getOwnPropertyNames(t3)) {
    const n5 = t3[r4], o4 = p(n5);
    if (null != n5 && null == o4) return null;
    e5[r4] = o4;
  }
  return e5;
}
function y(t3) {
  return "function" == typeof t3.clone;
}
function b(t3) {
  return "function" == typeof t3.map && "function" == typeof t3.forEach;
}
function m(t3) {
  return "function" == typeof t3.notifyChange && "function" == typeof t3.watch;
}
function g(t3) {
  if ("[object Object]" !== Object.prototype.toString.call(t3)) return false;
  const n4 = Object.getPrototypeOf(t3);
  return null === n4 || n4 === Object.prototype;
}
function O(t3) {
  if (r(t3) || t(t3) || u(t3) || o(t3) || c(t3) || e(t3) || a(t3) || i(t3) || f(t3)) return t3.slice();
  if (t3 instanceof Date) return new Date(t3.getTime());
  if (t3 instanceof ArrayBuffer) {
    return t3.slice(0, t3.byteLength);
  }
  if (t3 instanceof Map) {
    const n4 = /* @__PURE__ */ new Map();
    for (const [e5, r4] of t3) n4.set(e5, a2(r4));
    return n4;
  }
  if (t3 instanceof Set) {
    const n4 = /* @__PURE__ */ new Set();
    for (const e5 of t3) n4.add(a2(e5));
    return n4;
  }
  return null;
}
function j(t3, n4) {
  return t3 === n4 || "number" == typeof t3 && isNaN(t3) && "number" == typeof n4 && isNaN(n4) || "function" == typeof (t3 == null ? void 0 : t3.getTime) && "function" == typeof (n4 == null ? void 0 : n4.getTime) && t3.getTime() === n4.getTime() || false;
}
function h(n4, e5) {
  return n4 === e5 || (null == n4 || "string" == typeof n4 ? n4 === e5 : "number" == typeof n4 ? n4 === e5 || "number" == typeof e5 && isNaN(n4) && isNaN(e5) : n4 instanceof Date ? e5 instanceof Date && n4.getTime() === e5.getTime() : Array.isArray(n4) ? Array.isArray(e5) && s(n4, e5) : n4 instanceof Set ? e5 instanceof Set && T(n4, e5) : n4 instanceof Map ? e5 instanceof Map && N(n4, e5) : !!g(n4) && (g(e5) && w(n4, e5)));
}
function w(t3, n4) {
  if (null === t3 || null === n4) return false;
  const e5 = Object.keys(t3);
  if (null === n4 || Object.keys(n4).length !== e5.length) return false;
  for (const r4 of e5) if (t3[r4] !== n4[r4] || !Object.prototype.hasOwnProperty.call(n4, r4)) return false;
  return true;
}
function T(t3, n4) {
  if (t3.size !== n4.size) return false;
  for (const e5 of t3) if (!n4.has(e5)) return false;
  return true;
}
function N(t3, n4) {
  if (t3.size !== n4.size) return false;
  for (const [e5, r4] of t3) {
    const t4 = n4.get(e5);
    if (t4 !== r4 || void 0 === t4 && !n4.has(e5)) return false;
  }
  return true;
}

// node_modules/@arcgis/core/core/object.js
function n(r4, n4, t3 = false) {
  return f2(r4, n4, t3);
}
function t2(r4, n4) {
  if (null != n4) return n4[r4] || u2(r4.split("."), false, n4);
}
function e2(r4, n4, t3) {
  const e5 = r4.split("."), i5 = e5.pop(), f4 = u2(e5, true, t3);
  f4 && i5 && (f4[i5] = n4);
}
function i2(r4, n4) {
  if (null == r4 && null == n4) return false;
  if (null == r4) return true;
  if (null == n4) return true;
  if ("object" == typeof r4) {
    if (Array.isArray(r4)) {
      const t3 = n4;
      if (r4.length !== t3.length) return true;
      for (let n5 = 0; n5 < r4.length; n5++) if (i2(r4[n5], t3[n5])) return true;
      return false;
    }
    if (Object.keys(r4).length !== Object.keys(n4).length) return true;
    for (const t3 in r4) {
      if (i2(r4[t3], n4[t3])) return true;
    }
    return false;
  }
  return r4 !== n4;
}
function u2(r4, n4, t3) {
  let e5 = t3;
  for (const i5 of r4) {
    if (null == e5) return;
    if (!(i5 in e5)) {
      if (!n4) return;
      e5[i5] = {};
    }
    e5 = e5[i5];
  }
  return e5;
}
function f2(n4, t3, e5) {
  return t3 ? Object.keys(t3).reduce((n5, i5) => {
    let u4 = n5[i5], l3 = t3[i5];
    return u4 === l3 ? n5 : void 0 === u4 ? (n5[i5] = a2(l3), n5) : (Array.isArray(l3) || Array.isArray(n5) ? (u4 = u4 ? Array.isArray(u4) ? n5[i5] = u4.slice() : n5[i5] = [u4] : n5[i5] = [], l3 && (Array.isArray(l3) || (l3 = [l3]), e5 ? l3.forEach((r4) => {
      u4.includes(r4) || u4.push(r4);
    }) : n5[i5] = l3.slice())) : l3 && "object" == typeof l3 ? n5[i5] = f2(u4, l3, e5) : n5.hasOwnProperty(i5) && !t3.hasOwnProperty(i5) || (n5[i5] = l3), n5);
  }, n4 || {}) : n4;
}

// node_modules/@arcgis/core/config.js
var _a;
var s2 = { apiKey: void 0, applicationName: "", applicationUrl: (_a = globalThis.location) == null ? void 0 : _a.href, assetsPath: "", fontsUrl: "https://static.arcgis.com/fonts", geometryServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Geometry/GeometryServer", geoRSSServiceUrl: "https://utility.arcgis.com/sharing/rss", kmlServiceUrl: "https://utility.arcgis.com/sharing/kml", userPrivilegesApplied: true, portalUrl: "https://www.arcgis.com", respectPrefersReducedMotion: true, routeServiceUrl: "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World", workers: { loaderConfig: { has: {}, paths: {}, map: {}, packages: [] } }, request: { crossOriginNoCorsDomains: null, httpsDomains: ["arcgis.com", "arcgisonline.com", "esrikr.com", "premiumservices.blackbridge.com", "esripremium.accuweather.com", "gbm.digitalglobe.com", "firstlook.digitalglobe.com", "msi.digitalglobe.com"], interceptors: [], internalInterceptors: [], maxUrlLength: 2e3, priority: "high", proxyRules: [], proxyUrl: null, timeout: 62e3, trustedServers: [], useIdentity: true }, log: { interceptors: [], level: null } };
if (globalThis.esriConfig && (n(s2, globalThis.esriConfig, true), delete s2.has), !s2.assetsPath) {
  {
    const e5 = "4.32";
    s2.assetsPath = `https://js.arcgis.com/${e5}/@arcgis/core/assets`;
  }
  s2.defaultAssetsPath = s2.assetsPath;
}

// node_modules/@arcgis/core/core/string.js
var e3 = /\{([^}]+)\}/g;
function n2(t3) {
  return t3 ?? "";
}
function r2(r4, o4) {
  return o4 ? r4.replaceAll(e3, "object" == typeof o4 ? (e5, r5) => n2(t2(r5, o4)) : (t3, e5) => n2(o4(e5))) : r4;
}
function o2(t3, e5) {
  return t3.replaceAll(/([.$?*|{}()[\]\\/+\-^])/g, (t4) => (e5 == null ? void 0 : e5.includes(t4)) ? t4 : `\\${t4}`);
}
function l2(t3) {
  let e5 = 0;
  for (let n4 = 0; n4 < t3.length; n4++) e5 = (e5 << 5) - e5 + t3.charCodeAt(n4), e5 |= 0;
  return e5;
}
var u3;
function c2(t3) {
  u3 ?? (u3 = new DOMParser());
  return u3.parseFromString(t3 || "", "text/html").body.innerText || "";
}
function i3(t3, e5) {
  return new RegExp(`{${e5}}`, "ig").test(t3);
}
function f3(t3, ...e5) {
  let n4 = t3[0];
  for (let r4 = 0; r4 < e5.length; ++r4) n4 += e5[r4] + t3[r4 + 1];
  return n4;
}

// node_modules/@arcgis/core/core/Logger.js
var r3 = { info: 0, warn: 1, error: 2, none: 3 };
var n3 = class _n {
  constructor(e5) {
    this.level = null, this._module = "", this._parent = null, this.writer = null, this._loggedMessages = { error: /* @__PURE__ */ new Map(), warn: /* @__PURE__ */ new Map(), info: /* @__PURE__ */ new Map() }, null != e5.level && (this.level = e5.level), null != e5.writer && (this.writer = e5.writer), this._module = e5.module, _n._loggers.set(this.module, this);
    const t3 = this.module.lastIndexOf(".");
    -1 !== t3 && (this._parent = _n.getLogger(this.module.slice(0, t3)));
  }
  get module() {
    return this._module;
  }
  get parent() {
    return this._parent;
  }
  error(...e5) {
    this._log("error", "always", ...e5);
  }
  warn(...e5) {
    this._log("warn", "always", ...e5);
  }
  info(...e5) {
    this._log("info", "always", ...e5);
  }
  errorOnce(...e5) {
    this._log("error", "once", ...e5);
  }
  warnOnce(...e5) {
    this._log("warn", "once", ...e5);
  }
  infoOnce(...e5) {
    this._log("info", "once", ...e5);
  }
  errorOncePerTick(...e5) {
    this._log("error", "oncePerTick", ...e5);
  }
  warnOncePerTick(...e5) {
    this._log("warn", "oncePerTick", ...e5);
  }
  infoOncePerTick(...e5) {
    this._log("info", "oncePerTick", ...e5);
  }
  get test() {
  }
  static get test() {
  }
  static getLogger(e5) {
    return e5 = "string" != typeof e5 ? e5.declaredClass : e5, _n._loggers.get(e5) || new _n({ module: e5 });
  }
  _log(t3, r4, ...i5) {
    if (!this._matchLevel(t3)) return;
    if ("always" !== r4 && !_n._throttlingDisabled) {
      const e5 = o3(i5), s5 = this._loggedMessages[t3].get(e5);
      if ("once" === r4 && null != s5 || "oncePerTick" === r4 && s5 && s5 >= _n._tickCounter) return;
      this._loggedMessages[t3].set(e5, _n._tickCounter), _n._scheduleTickCounterIncrement();
    }
    for (const n4 of s2.log.interceptors) if (n4(t3, this.module, ...i5)) return;
    this._inheritedWriter()(t3, this.module, ...i5);
  }
  _parentWithMember(e5, t3) {
    let r4 = this;
    for (; null != r4; ) {
      const t4 = r4[e5];
      if (null != t4) return t4;
      r4 = r4.parent;
    }
    return t3;
  }
  _inheritedWriter() {
    return this._parentWithMember("writer", i4);
  }
  _matchLevel(t3) {
    const n4 = s2.log.level || "warn";
    return r3[this._parentWithMember("level", n4)] <= r3[t3];
  }
  static _scheduleTickCounterIncrement() {
    _n._tickCounterScheduled || (_n._tickCounterScheduled = true, Promise.resolve().then(() => {
      _n._tickCounter++, _n._tickCounterScheduled = false;
    }));
  }
};
function i4(e5, t3, ...r4) {
  console[e5](`[${t3}]`, ...r4);
}
function o3(...e5) {
  const r4 = (e6, t3) => "object" != typeof t3 || Array.isArray(t3) ? t3 : "[Object]";
  return l2(JSON.stringify(e5, r4));
}
n3._loggers = /* @__PURE__ */ new Map(), n3._tickCounter = 0, n3._tickCounterScheduled = false, n3._throttlingDisabled = false;

// node_modules/@arcgis/core/core/Message.js
function s3(s5, e5) {
  return s5.replaceAll(/\$\{([^\s:}]*)(?::([^\s:}]+))?\}/g, (s6, r4) => {
    if ("" === r4) return "$";
    const i5 = t2(r4, e5);
    return (i5 ?? "").toString();
  });
}
var e4 = class {
  constructor(t3, e5, r4 = void 0) {
    this.name = t3, this.details = r4, this.message = (e5 && s3(e5, r4)) ?? "";
  }
  toString() {
    return "[" + this.name + "]: " + this.message;
  }
};

// node_modules/@arcgis/core/core/Error.js
var s4 = class _s extends e4 {
  constructor(e5, t3, r4) {
    super(e5, t3, r4);
  }
  toJSON() {
    if (null != this.details) try {
      return { name: this.name, message: this.message, details: JSON.parse(JSON.stringify(this.details, (t3, r4) => {
        if (r4 && "object" == typeof r4 && "function" == typeof r4.toJSON) return r4;
        try {
          return a2(r4);
        } catch (s5) {
          return "[object]";
        }
      })) };
    } catch (r4) {
      throw n3.getLogger("esri.core.Error").error(r4), r4;
    }
    return { name: this.name, message: this.message, details: this.details };
  }
  static fromJSON(e5) {
    return new _s(e5.name, e5.message, e5.details);
  }
};
s4.prototype.type = "error";

export {
  l,
  a2 as a,
  p,
  y,
  j,
  h,
  n,
  t2 as t,
  e2 as e,
  i2 as i,
  s2 as s,
  r2 as r,
  o2 as o,
  l2,
  c2 as c,
  i3 as i2,
  f3 as f,
  n3 as n2,
  e4 as e2,
  s4 as s2
};
//# sourceMappingURL=chunk-CWMZW2S5.js.map
