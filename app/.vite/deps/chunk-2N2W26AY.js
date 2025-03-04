// node_modules/@arcgis/core/core/has.js
var e;
function has(a3) {
  return "function" == typeof e[a3] ? e[a3] = e[a3](globalThis) : e[a3];
}
var _a, _b, _c, _d;
e = ((_a = globalThis.dojoConfig) == null ? void 0 : _a.has) || ((_b = globalThis.esriConfig) == null ? void 0 : _b.has) ? { ...(_c = globalThis.dojoConfig) == null ? void 0 : _c.has, ...(_d = globalThis.esriConfig) == null ? void 0 : _d.has } : {}, has.add = (a3, d2, i2, s3) => {
  (s3 || void 0 === e[a3]) && (e[a3] = d2), i2 && has(a3);
}, has.cache = e, has.add("big-integer-warning-enabled", true), has.add("esri-deprecation-warnings", true), has.add("esri-tests-disable-screenshots", false), has.add("esri-tests-use-full-window", false), has.add("esri-tests-post-to-influx", true), has.add("esri-cim-animations-enable-status", "enabled"), has.add("esri-cim-animations-spotlight", false), has.add("esri-cim-animations-freeze-time", false), has.add("enable-feature:multiple-highlights", true), (() => {
  var _a2;
  has.add("host-webworker", void 0 !== globalThis.WorkerGlobalScope && self instanceof globalThis.WorkerGlobalScope);
  const e4 = "undefined" != typeof window && "undefined" != typeof location && "undefined" != typeof document && window.location === location && window.document === document;
  if (has.add("host-browser", e4), has.add("host-node", "object" == typeof globalThis.process && ((_a2 = globalThis.process.versions) == null ? void 0 : _a2.node) && globalThis.process.versions.v8), has.add("dom", e4), has("host-browser")) {
    const e5 = navigator, a3 = e5.userAgent, d2 = e5.appVersion, i2 = parseFloat(d2);
    if (has.add("wp", parseFloat(a3.split("Windows Phone")[1]) || void 0), has.add("msapp", parseFloat(a3.split("MSAppHost/")[1]) || void 0), has.add("khtml", d2.includes("Konqueror") ? i2 : void 0), has.add("edge", parseFloat(a3.split("Edge/")[1]) || void 0), has.add("opr", parseFloat(a3.split("OPR/")[1]) || void 0), has.add("webkit", !has("wp") && !has("edge") && parseFloat(a3.split("WebKit/")[1]) || void 0), has.add("chrome", !has("edge") && !has("opr") && parseFloat(a3.split("Chrome/")[1]) || void 0), has.add("android", !has("wp") && parseFloat(a3.split("Android ")[1]) || void 0), has.add("safari", !d2.includes("Safari") || has("wp") || has("chrome") || has("android") || has("edge") || has("opr") ? void 0 : parseFloat(d2.split("Version/")[1])), has.add("mac", d2.includes("Macintosh")), !has("wp") && /(iPhone|iPod|iPad)/.test(a3)) {
      const e6 = RegExp.$1.replace(/P/, "p"), d3 = /OS ([\d_]+)/.test(a3) ? RegExp.$1 : "1", i3 = parseFloat(d3.replace(/_/, ".").replaceAll("_", ""));
      has.add(e6, i3), has.add("ios", i3);
    }
    has("webkit") || (!a3.includes("Gecko") || has("wp") || has("khtml") || has("edge") || has.add("mozilla", i2), has("mozilla") && has.add("ff", parseFloat(a3.split("Firefox/")[1] || a3.split("Minefield/")[1]) || void 0));
  }
})(), (() => {
  if (globalThis.navigator) {
    const e4 = navigator.userAgent, a3 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini|IEMobile/i.test(e4), d2 = /iPhone/i.test(e4);
    a3 && has.add("esri-mobile", a3), d2 && has.add("esri-iPhone", d2), has.add("esri-geolocation", !!navigator.geolocation);
  }
  has.add("esri-wasm", "WebAssembly" in globalThis), has.add("esri-performance-mode-frames-between-render", 20), has.add("esri-force-performance-mode", false), has.add("esri-shared-array-buffer", () => {
    const e4 = "SharedArrayBuffer" in globalThis, a3 = false === globalThis.crossOriginIsolated;
    return e4 && !a3;
  }), has.add("wasm-simd", () => {
    const e4 = [0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 0, 253, 15, 253, 98, 11];
    return WebAssembly.validate(new Uint8Array(e4));
  }), has.add("esri-atomics", "Atomics" in globalThis), has.add("esri-workers", "Worker" in globalThis), has.add("web-feat:cache", "caches" in globalThis), has.add("esri-workers-arraybuffer-transfer", !has("safari") || Number(has("safari")) >= 12), has.add("workers-pool-size", 8), has.add("featurelayer-simplify-thresholds", [0.5, 0.5, 0.5, 0.5]), has.add("featurelayer-simplify-payload-size-factors", [1, 1, 4]), has.add("featurelayer-fast-triangulation-enabled", true), has.add("featurelayer-animation-enabled", true), has.add("featurelayer-snapshot-enabled", true), has.add("featurelayer-snapshot-point-min-threshold", 8e4), has.add("featurelayer-snapshot-point-max-threshold", 4e5), has.add("featurelayer-snapshot-point-coverage", 0.1), has.add("featurelayer-query-max-depth", 4), has.add("featurelayer-query-pausing-enabled", false), has.add("featurelayer-advanced-symbols", false), has.add("featurelayer-pbf", true), has.add("featurelayer-pbf-statistics", false), has.add("feature-layers-workers", true), has.add("feature-polyline-generalization-factor", 1), has.add("mapview-transitions-duration", 200), has.add("mapview-essential-goto-duration", 200), has.add("mapview-srswitch-adjust-rotation-scale-threshold", 24e6), has.add("mapserver-pbf-version-support", 10.81), has.add("mapservice-popup-identify-max-tolerance", 20), has.add("request-queue-concurrency-hosted", 16), has.add("request-queue-concurrency-non-hosted", 4), has.add("curve-densification-coarse-segments", 128), has.add("curve-densification-max-segments", 2e3), has.add("curve-densification-min-segments", 3), has.add("curve-densification-pixels-per-segment", 16), has.add("view-readyState-waiting-delay", 1e3), has.add("gradient-depth-bias", 0.01), has.add("gradient-depth-epsilon", 1e-8), has("host-webworker") || has("host-browser") && (has.add("esri-csp-restrictions", () => {
    try {
      new Function();
    } catch {
      return true;
    }
    return false;
  }), has.add("esri-image-decode", () => {
    if ("decode" in new Image()) {
      const e4 = new Image();
      return e4.src = 'data:image/svg+xml;charset=UTF-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg"></svg>', void e4.decode().then(() => {
        has.add("esri-image-decode", true, true, true);
      }).catch(() => {
        has.add("esri-image-decode", false, true, true);
      });
    }
    return false;
  }), has.add("esri-url-encodes-apostrophe", () => {
    const e4 = window.document.createElement("a");
    return e4.href = "?'", e4.href.includes("?%27");
  }));
})();

// node_modules/@arcgis/core/core/compilerUtils.js
function n(n3) {
}
function o(n3) {
  return () => n3;
}
function r(n3) {
  return n3;
}

// node_modules/@arcgis/core/core/RandomLCG.js
var t = class _t {
  constructor(t3 = 1) {
    this._seed = t3;
  }
  set seed(e4) {
    this._seed = e4 ?? Math.random() * _t._m;
  }
  getInt() {
    return this._seed = (_t._a * this._seed + _t._c) % _t._m, this._seed;
  }
  getFloat() {
    return this.getInt() / (_t._m - 1);
  }
  getIntRange(t3, e4) {
    return Math.round(this.getFloatRange(t3, e4));
  }
  getFloatRange(e4, s3) {
    const n3 = s3 - e4;
    return e4 + this.getInt() / _t._m * n3;
  }
};
t._m = 2147483647, t._a = 48271, t._c = 0;

// node_modules/@arcgis/core/core/arrayUtils.js
var e2 = 1.5;
var r2 = 1 / e2;
var l = 0.5;
function c(n3, t3) {
  return t3 ? n3.filter((n4, e4, r4) => r4.findIndex(t3.bind(null, n4)) === e4) : Array.from(new Set(n3));
}
function s(n3, t3, e4) {
  if (null == n3 && null == t3) return true;
  if (null == n3 || null == t3 || n3.length !== t3.length) return false;
  if (e4) {
    for (let r4 = 0; r4 < n3.length; r4++) if (!e4(n3[r4], t3[r4])) return false;
  } else for (let r4 = 0; r4 < n3.length; r4++) if (n3[r4] !== t3[r4]) return false;
  return true;
}
function a(n3, t3, e4) {
  let r4, l2;
  return e4 ? (r4 = t3.filter((t4) => !n3.some((n4) => e4(n4, t4))), l2 = n3.filter((n4) => !t3.some((t4) => e4(t4, n4)))) : (r4 = t3.filter((t4) => !n3.includes(t4)), l2 = n3.filter((n4) => !t3.includes(n4))), { added: r4, removed: l2 };
}
function d(n3) {
  return n3 && "number" == typeof n3.length;
}
var w = class {
  constructor() {
    this.last = 0;
  }
};
var x = new w();
function b(n3, t3, e4, r4) {
  r4 = r4 || x;
  const l2 = Math.max(0, r4.last - 10);
  for (let u2 = l2; u2 < e4; ++u2) if (n3[u2] === t3) return r4.last = u2, u2;
  const o3 = Math.min(l2, e4);
  for (let u2 = 0; u2 < o3; ++u2) if (n3[u2] === t3) return r4.last = u2, u2;
  return -1;
}
function y(t3, e4, r4, l2) {
  const o3 = r4 ?? t3.length, u2 = b(t3, r(e4), o3, l2);
  if (-1 !== u2) return t3[u2] = t3[o3 - 1], null == r4 && t3.pop(), e4;
}
var S = /* @__PURE__ */ new Set();
function j(n3, t3, e4 = n3.length, r4 = t3.length, l2, o3) {
  if (0 === r4 || 0 === e4) return e4;
  S.clear();
  for (let f2 = 0; f2 < r4; ++f2) S.add(t3[f2]);
  l2 = l2 || x;
  const u2 = Math.max(0, l2.last - 10);
  for (let f2 = u2; f2 < e4; ++f2) if (S.has(n3[f2]) && (o3 == null ? void 0 : o3.push(n3[f2]), S.delete(n3[f2]), n3[f2] = n3[e4 - 1], --e4, --f2, 0 === S.size || 0 === e4)) return S.clear(), e4;
  for (let f2 = 0; f2 < u2; ++f2) if (S.has(n3[f2]) && (o3 == null ? void 0 : o3.push(n3[f2]), S.delete(n3[f2]), n3[f2] = n3[e4 - 1], --e4, --f2, 0 === S.size || 0 === e4)) return S.clear(), e4;
  return S.clear(), e4;
}
function z(n3, t3, e4) {
  const r4 = n3.length;
  if (t3 >= r4) return n3.slice();
  const l2 = A(e4), o3 = /* @__PURE__ */ new Set(), u2 = [];
  for (; u2.length < t3; ) {
    const t4 = Math.floor(l2() * r4);
    o3.has(t4) || (o3.add(t4), u2.push(n3[t4]));
  }
  return u2;
}
function A(n3) {
  return n3 ? (I.seed = n3, () => I.getFloat()) : Math.random;
}
var I = new t();
function C(n3, t3) {
  const e4 = A(t3);
  for (let r4 = n3.length - 1; r4 > 0; r4--) {
    const t4 = Math.floor(e4() * (r4 + 1)), l2 = n3[r4];
    n3[r4] = n3[t4], n3[t4] = l2;
  }
  return n3;
}
function F(n3, t3) {
  const e4 = n3.indexOf(t3);
  return -1 !== e4 ? (n3.splice(e4, 1), t3) : null;
}
function G(n3, t3) {
  return null != n3;
}
var N = [];

// node_modules/@arcgis/core/core/typedArrayUtil.js
function n2(n3) {
  return n3 instanceof ArrayBuffer;
}
function r3(n3) {
  var _a2;
  return "Int8Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function t2(n3) {
  var _a2;
  return "Uint8Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function u(n3) {
  var _a2;
  return "Uint8ClampedArray" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function o2(n3) {
  var _a2;
  return "Int16Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function c2(n3) {
  var _a2;
  return "Uint16Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function e3(n3) {
  var _a2;
  return "Int32Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function a2(n3) {
  var _a2;
  return "Uint32Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function i(n3) {
  var _a2;
  return "Float32Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function f(n3) {
  var _a2;
  return "Float64Array" === ((_a2 = n3 == null ? void 0 : n3.constructor) == null ? void 0 : _a2.name);
}
function s2(n3) {
  return "buffer" in n3;
}
var m = 1024;
function y2(n3) {
  return f(n3) || i(n3) || e3(n3) || o2(n3) || r3(n3);
}
function A2(n3) {
  return f(n3) || i(n3);
}
function U(n3) {
  return f(n3) ? 179769e303 : i(n3) ? 3402823e32 : a2(n3) ? 4294967295 : c2(n3) ? 65535 : t2(n3) || u(n3) ? 255 : e3(n3) ? 2147483647 : o2(n3) ? 32767 : r3(n3) ? 127 : 256;
}

export {
  has,
  n,
  o,
  r,
  t,
  e2 as e,
  r2,
  l,
  c,
  s,
  a,
  d,
  w,
  b,
  y,
  j,
  z,
  A,
  C,
  F,
  G,
  N,
  n2,
  r3,
  t2,
  u,
  o2,
  c2,
  e3 as e2,
  a2,
  i,
  f,
  s2,
  m,
  y2,
  A2,
  U
};
//# sourceMappingURL=chunk-2N2W26AY.js.map
