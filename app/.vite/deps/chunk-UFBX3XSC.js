import {
  $t,
  A,
  At,
  C,
  D,
  Et,
  F,
  G,
  H,
  Ht,
  I,
  K,
  M,
  Pt,
  S,
  V,
  X,
  Y,
  Z,
  _,
  a as a2,
  bt,
  kt,
  r as r2,
  tt,
  v,
  x,
  z
} from "./chunk-F7TCEOHX.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import {
  b,
  c2 as c,
  m,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  s,
  s2
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/support/revision.js
var d = "20250304";
var e = "5d59aa97bb505769e37d8f5d20fd9a2336eb1e84";

// node_modules/@arcgis/core/kernel.js
Symbol.dispose ?? (Symbol.dispose = Symbol("Symbol.dispose")), Symbol.asyncDispose ?? (Symbol.asyncDispose = Symbol("Symbol.asyncDispose"));
var e2 = "4.32";
var s3;
var r3 = e2;
r3 = "4.32.5";
function i(o2) {
  s3 = o2;
}
function t(e3) {
  const r4 = s3 == null ? void 0 : s3.findCredential(e3);
  return (r4 == null ? void 0 : r4.token) ? kt(e3, "token", r4.token) : e3;
}
has("host-webworker") || globalThis.$arcgis || Object.defineProperty(globalThis, "$arcgis", { configurable: false, enumerable: true, writable: false, value: {} }), has("host-webworker");

// node_modules/@arcgis/core/chunks/persistableUrlUtils.js
function p(e3, s5) {
  var _a;
  const o2 = (_a = s5 == null ? void 0 : s5.url) == null ? void 0 : _a.path;
  if (e3 && o2 && (e3 = _(e3, o2, { preserveProtocolRelative: true }), s5.portalItem && s5.readResourcePaths)) {
    const t2 = G(e3, s5.portalItem.itemUrl);
    null != t2 && v2.test(t2) && s5.readResourcePaths.push(s5.portalItem.resourceFromPath(t2).path);
  }
  return (e3 = I2(e3, s5 == null ? void 0 : s5.portal)) && d2.test(e3) ? R(e3) : e3;
}
function m2(e3, l2, a5 = y.YES) {
  var _a, _b;
  if (null == (e3 = e3 && d2.test(e3) ? w(e3) : e3)) return e3;
  !Y(e3) && (l2 == null ? void 0 : l2.blockedRelativeUrls) && l2.blockedRelativeUrls.push(e3);
  let c4 = _(e3);
  if (l2) {
    const t2 = ((_a = l2.verifyItemRelativeUrls) == null ? void 0 : _a.rootPath) || ((_b = l2.url) == null ? void 0 : _b.path);
    if (t2) {
      const s5 = I2(t2, l2.portal), o2 = I2(c4, l2.portal);
      c4 = G(o2, s5, s5);
      null != c4 && c4 !== o2 && c4 !== e3 && l2.verifyItemRelativeUrls && l2.verifyItemRelativeUrls.writtenUrls.push(c4);
    }
  }
  return c4 = x2(c4, l2 == null ? void 0 : l2.portal), Y(c4) && (c4 = K(c4)), (l2 == null ? void 0 : l2.resources) && (l2 == null ? void 0 : l2.portalItem) && !Y(c4) && !tt(c4) && a5 === y.YES && l2.resources.toKeep.push({ resource: l2.portalItem.resourceFromPath(c4), compress: false }), c4;
}
function f(e3, t2, r4) {
  return p(e3, r4);
}
function h(e3, t2, r4, s5) {
  const o2 = m2(e3, s5);
  void 0 !== o2 && (t2[r4] = o2);
}
var d2 = /\/items\/([^/]+)\/resources\/(.*)/;
var v2 = /^\.\/resources\//;
function U(e3) {
  const t2 = (e3 == null ? void 0 : e3.match(d2)) ?? null;
  return (t2 == null ? void 0 : t2[1]) ?? null;
}
function g(e3) {
  const t2 = (e3 == null ? void 0 : e3.match(d2)) ?? null;
  if (null == t2) return null;
  const r4 = t2[2], s5 = r4.lastIndexOf("/");
  if (-1 === s5) {
    const { path: e4, extension: t3 } = Ht(r4);
    return { prefix: null, filename: e4, extension: t3 };
  }
  const { path: o2, extension: n2 } = Ht(r4.slice(s5 + 1));
  return { prefix: r4.slice(0, s5), filename: o2, extension: n2 };
}
function x2(e3, t2) {
  return t2 && !t2.isPortal && t2.urlKey && t2.customBaseUrl ? At(e3, `${t2.urlKey}.${t2.customBaseUrl}`, t2.portalHostname) : e3;
}
function I2(e3, t2) {
  if (!t2 || t2.isPortal || !t2.urlKey || !t2.customBaseUrl) return e3;
  const r4 = `${t2.urlKey}.${t2.customBaseUrl}`, s5 = C();
  return F(s5, `${s5.scheme}://${r4}`) ? At(e3, t2.portalHostname, r4) : At(e3, r4, t2.portalHostname);
}
function R(t2) {
  if (!t2) return t2 || null;
  let r4 = t2;
  return r4 && s3 && !s3.findCredential(r4) && (r4 = r2(r4), r4 = r4.replace(/^https?:\/\/www\.arcgis\.com/, "https://cdn.arcgis.com"), r4 = r4.replace(/^https?:\/\/devext\.arcgis\.com/, "https://cdndev.arcgis.com"), r4 = r4.replace(/^https?:\/\/qaext\.arcgis\.com/, "https://cdnqa.arcgis.com")), r4;
}
function w(t2) {
  if (!t2) return t2 || null;
  let r4 = t2;
  return r4 = r4.replace(/^https?:\/\/cdn\.arcgis\.com/, "https://www.arcgis.com"), r4 = r4.replace(/^https?:\/\/cdndev\.arcgis\.com/, "https://devext.arcgis.com"), r4 = r4.replace(/^https?:\/\/cdnqa\.arcgis\.com/, "https://qaext.arcgis.com"), r4 && s3 && !s3.findCredential(r4) && (r4 = r2(r4)), r4;
}
var y;
!function(e3) {
  e3[e3.YES = 0] = "YES", e3[e3.NO = 1] = "NO";
}(y || (y = {}));
var P = Object.freeze(Object.defineProperty({ __proto__: null, get MarkKeep() {
  return y;
}, ensureMainOnlineDomain: x2, fromCDNUrl: w, fromJSON: p, itemIdFromResourceUrl: U, prefixAndFilenameFromResourceUrl: g, read: f, toCDNUrl: R, toJSON: m2, write: h }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/layers/support/arcgisLayerUrl.js
var o = { mapserver: "MapServer", imageserver: "ImageServer", featureserver: "FeatureServer", knowledgegraphserver: "KnowledgeGraphServer", sceneserver: "SceneServer", streamserver: "StreamServer", vectortileserver: "VectorTileServer", "3dtilesserver": "3DTilesServer", videoserver: "VideoServer" };
var a3 = Object.values(o);
var c2 = new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a3.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`, "i");
var v3 = new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^/\\n]+)\\/(${a3.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`, "i");
var f2 = /(.*?)\/(?:layers\/)?(\d+)\/?$/i;
function p2(e3) {
  return c2.test(e3);
}
function d3(r4) {
  if (null == r4) return null;
  const t2 = I(r4), s5 = (t2 == null ? void 0 : t2.path.match(c2)) || (t2 == null ? void 0 : t2.path.match(v3));
  if (!s5) return null;
  const [, n2, l2, i4, u3] = s5, a5 = l2.indexOf("/");
  return { title: m3(-1 !== a5 ? l2.slice(a5 + 1) : l2), serverType: o[i4.toLowerCase()], sublayer: null != u3 && "" !== u3 ? parseInt(u3, 10) : null, url: { path: n2 } };
}
function h2(r4) {
  const t2 = I(r4).path.match(f2);
  return t2 ? { serviceUrl: t2[1], sublayerId: Number(t2[2]) } : null;
}
function m3(e3) {
  return (e3 = e3.replaceAll(/\s*[/_]+\s*/g, " "))[0].toUpperCase() + e3.slice(1);
}
function w2(e3, r4) {
  const t2 = [];
  if (e3) {
    const r5 = d3(e3);
    null != r5 && r5.title && t2.push(r5.title);
  }
  if (r4) {
    const e4 = m3(r4);
    t2.push(e4);
  }
  if (2 === t2.length) {
    if (t2[0].toLowerCase().includes(t2[1].toLowerCase())) return t2[0];
    if (t2[1].toLowerCase().includes(t2[0].toLowerCase())) return t2[1];
  }
  return t2.join(" - ");
}
function g2(e3) {
  let t2 = X(e3, true);
  return !!t2 && (t2 = t2.toLowerCase(), t2.endsWith(".arcgis.com") && (t2.startsWith("services") || t2.startsWith("tiles") || t2.startsWith("features")));
}
function y2(e3, r4) {
  return e3 ? bt(Pt(e3, r4)) : e3;
}
function S2(r4) {
  let { url: n2 } = r4;
  if (!n2) return { url: n2 };
  n2 = Pt(n2, r4.logger);
  const l2 = I(n2), i4 = d3(l2.path);
  let u3;
  if (null != i4) null != i4.sublayer && null == r4.layer.layerId && (u3 = i4.sublayer), n2 = i4.url.path;
  else if (r4.nonStandardUrlAllowed) {
    const e3 = h2(l2.path);
    null != e3 && (n2 = e3.serviceUrl, u3 = e3.sublayerId);
  }
  return { url: bt(n2), layerId: u3 };
}
function C2(e3, r4, t2, s5, l2) {
  h(r4, s5, "url", l2), s5.url && null != e3.layerId && (s5.url = V(s5.url, t2, e3.layerId.toString()));
}
function b2(e3) {
  if (!e3) return false;
  const r4 = e3.toLowerCase(), t2 = r4.includes("/services/"), s5 = r4.includes("/mapserver/wmsserver"), n2 = r4.includes("/imageserver/wmsserver"), l2 = r4.includes("/wmsserver");
  return t2 && (s5 || n2 || l2);
}
function I3(e3) {
  var _a;
  if (!e3) return false;
  const r4 = new x(_(e3)), t2 = (_a = r4.authority) == null ? void 0 : _a.toLowerCase();
  return "server.arcgisonline.com" === t2 || "services.arcgisonline.com" === t2;
}

// node_modules/@arcgis/core/support/apiKeyUtils.js
var s4 = /* @__PURE__ */ new Set(["elevation3d.arcgis.com", "js.arcgis.com", "jsdev.arcgis.com", "jsqa.arcgis.com", "static.arcgis.com"]);
function i2(t2) {
  const c4 = X(t2, true);
  return !!c4 && (c4.endsWith(".arcgis.com") && !s4.has(c4) && !t2.endsWith("/sharing/rest/generateToken"));
}
function n(r4, s5) {
  return !(!s5 && !s.apiKey || !i2(r4));
}

// node_modules/@arcgis/core/support/requestUtils.js
function i3(e3, o2, t2 = false, n2) {
  return new Promise((s5, i4) => {
    if (c(n2)) return void i4(c3());
    let a5 = () => {
      l2(), i4(new Error(`Unable to load ${o2}`));
    }, u3 = () => {
      const r4 = e3;
      l2(), s5(r4);
    }, m5 = () => {
      if (!e3) return;
      const r4 = e3;
      l2(), r4.src = "", i4(c3());
    };
    const l2 = () => {
      has("esri-image-decode") || (e3.removeEventListener("error", a5), e3.removeEventListener("load", u3)), a5 = null, u3 = null, e3 = null, null != n2 && n2.removeEventListener("abort", m5), m5 = null, t2 && URL.revokeObjectURL(o2);
    };
    null != n2 && n2.addEventListener("abort", m5), has("esri-image-decode") ? e3.decode().then(u3, a5) : (e3.addEventListener("error", a5), e3.addEventListener("load", u3));
  });
}
function c3() {
  try {
    return new DOMException("Aborted", "AbortError");
  } catch {
    const e3 = new Error();
    return e3.name = "AbortError", e3;
  }
}
var a4 = "Timeout exceeded";
function u2() {
  return new Error(a4);
}
function m4(e3) {
  return "object" == typeof e3 && !!e3 && "message" in e3 && e3.message === a4;
}
function l(r4) {
  s.request.crossOriginNoCorsDomains || (s.request.crossOriginNoCorsDomains = {});
  const t2 = s.request.crossOriginNoCorsDomains;
  for (let e3 of r4) e3 = e3.toLowerCase(), /^https?:\/\//.test(e3) ? t2[X(e3) ?? ""] = 0 : (t2[X("http://" + e3) ?? ""] = 0, t2[X("https://" + e3) ?? ""] = 0);
}
function d4(r4) {
  const s5 = s.request.crossOriginNoCorsDomains;
  if (s5) {
    let e3 = X(r4);
    if (e3) return e3 = e3.toLowerCase(), !F(e3, C()) && s5[e3] < Date.now() - 36e5;
  }
  return false;
}
async function f3(r4) {
  var _a;
  const t2 = I(r4);
  r4 = t2.path, "json" === ((_a = t2.query) == null ? void 0 : _a.f) && (r4 += "?f=json");
  try {
    await fetch(r4, { mode: "no-cors", credentials: "include" });
  } catch {
  }
  const n2 = s.request.crossOriginNoCorsDomains, i4 = X(r4);
  n2 && i4 && (n2[i4.toLowerCase()] = Date.now());
}

// node_modules/@arcgis/core/request.js
async function P2(e3, r4) {
  var _a;
  e3 instanceof URL && (e3 = e3.toString()), (r4 == null ? void 0 : r4.query) instanceof URLSearchParams && (r4.query = A(r4.query.toString().replaceAll("+", " ")));
  const t2 = tt(e3), s5 = Z(e3);
  s5 || t2 || (e3 = K(e3));
  const o2 = { url: e3, requestOptions: { ...r4 } }, a5 = (e4) => ({ data: e4, getAllHeaders: I4, getHeader: I4, httpStatus: 200, requestOptions: o2.requestOptions, url: o2.url }), i4 = D(e3, H2.internalInterceptors);
  if (i4) {
    const e4 = await K2(i4, o2);
    if (null != e4) return a5(e4);
  }
  let l2 = D(e3);
  if (l2) {
    const e4 = await K2(l2, o2);
    if (null != e4) return a5(e4);
    l2.after || l2.error || (l2 = null);
  }
  if (e3 = o2.url, "image" === (r4 = o2.requestOptions).responseType && (has("host-webworker") || has("host-node"))) throw $("request:invalid-parameters", new Error("responseType 'image' is not supported in Web Workers or Node environment"), o2);
  if ("head" === r4.method) {
    if (r4.body) throw $("request:invalid-parameters", new Error("body parameter cannot be set when method is 'head'"), o2);
    if (t2 || s5) throw $("request:invalid-parameters", new Error("data and blob URLs are not supported for method 'head'"), o2);
  }
  if (await z2(), A2) return A2.execute(e3, r4);
  const h3 = new AbortController(), f4 = m(r4, () => h3.abort()), y3 = { controller: h3, credential: void 0, credentialToken: void 0, fetchOptions: void 0, hasToken: false, interceptor: l2, params: o2, redoRequest: false, useIdentity: H2.useIdentity, useProxy: false, useSSL: false, withCredentials: false }, w3 = r4.useRequestQueue ? Z2(y3) : ee(y3), g3 = await w3.finally(() => f4 == null ? void 0 : f4.remove());
  return (_a = l2 == null ? void 0 : l2.after) == null ? void 0 : _a.call(l2, g3), g3;
}
var A2;
var H2 = s.request;
var R2 = "FormData" in globalThis;
var _2 = /* @__PURE__ */ new Set([499, 498, 403, 401]);
var D2 = /* @__PURE__ */ new Set(["COM_0056", "COM_0057", "SB_0008"]);
var F2 = [/\/arcgis\/tokens/i, /\/sharing(\/rest)?\/generatetoken/i, /\/rest\/info/i];
var I4 = () => null;
var M2 = Symbol();
function N(e3) {
  const r4 = X(e3);
  r4 && !P2._corsServers.includes(r4) && P2._corsServers.push(r4);
}
function B(e3) {
  const r4 = X(e3);
  return !r4 || r4.endsWith(".arcgis.com") || P2._corsServers.includes(r4) || M(r4);
}
function $(e3, r4, o2, n2) {
  let l2 = "Error";
  const u3 = { url: o2.url, requestOptions: o2.requestOptions, getAllHeaders: I4, getHeader: I4, ssl: false };
  if (r4 instanceof s2) return r4.details ? (r4.details = a(r4.details), r4.details.url = o2.url, r4.details.requestOptions = o2.requestOptions) : r4.details = u3, r4;
  if (r4) {
    const e4 = n2 && (() => Array.from(n2.headers)), t2 = n2 && ((e5) => n2.headers.get(e5)), s5 = n2 == null ? void 0 : n2.status, o3 = r4.message;
    o3 && (l2 = o3), e4 && t2 && (u3.getAllHeaders = e4, u3.getHeader = t2), u3.httpStatus = (null != r4.httpCode ? r4.httpCode : r4.code) || s5 || 0, u3.subCode = r4.subcode, u3.messageCode = r4.messageCode, "string" == typeof r4.details ? u3.messages = [r4.details] : u3.messages = r4.details, u3.raw = M2 in r4 ? r4[M2] : r4;
  }
  return b(r4) ? u() : new s2(e3, l2, u3);
}
async function z2() {
  has("host-webworker") && !A2 && (A2 = await import("./request-UMH6HNYG.js"));
}
async function Q() {
  s3 || await import("./IdentityManager-W2YIIM3L.js");
}
async function W(t2) {
  var _a;
  const s5 = t2.params.url, o2 = t2.params.requestOptions, n2 = t2.controller.signal, a5 = o2.body;
  let i4 = null, u3 = null;
  if (R2 && "HTMLFormElement" in globalThis && (a5 instanceof FormData ? i4 = a5 : a5 instanceof HTMLFormElement && (i4 = new FormData(a5))), "string" == typeof a5 && (u3 = a5), t2.fetchOptions = { cache: o2.cacheBust ? "no-cache" : "default", credentials: "same-origin", headers: o2.headers || {}, method: "head" === o2.method ? "HEAD" : "GET", mode: "cors", priority: H2.priority, redirect: "follow", signal: n2 }, (i4 || u3) && (t2.fetchOptions.body = i4 || u3), "anonymous" === o2.authMode && (t2.useIdentity = false), t2.hasToken = !!(/token=/i.test(s5) || ((_a = o2.query) == null ? void 0 : _a.token) || (i4 == null ? void 0 : i4.get("token"))), !t2.hasToken && n(s5) && (o2.query || (o2.query = {}), o2.query.token = s.apiKey, t2.hasToken = true), t2.useIdentity && !t2.hasToken && !t2.credentialToken && !G2(s5) && !c(n2)) {
    let e3;
    "immediate" === o2.authMode ? (await Q(), e3 = await s3.getCredential(s5, { signal: n2 }), t2.credential = e3) : "no-prompt" === o2.authMode ? (await Q(), e3 = await s3.getCredential(s5, { prompt: false, signal: n2 }).catch(() => {
    }), t2.credential = e3) : s3 && (e3 = s3.findCredential(s5)), e3 && (t2.credentialToken = e3.token, t2.useSSL = !!e3.ssl);
  }
}
function G2(e3) {
  return F2.some((r4) => r4.test(e3));
}
async function J(e3) {
  let t2 = e3.params.url;
  const s5 = e3.params.requestOptions, o2 = e3.fetchOptions ?? {}, n2 = Z(t2) || tt(t2), a5 = s5.responseType || "json", l2 = n2 ? 0 : null != s5.timeout ? s5.timeout : H2.timeout;
  let u3 = false;
  if (!n2) {
    e3.useSSL && (t2 = $t(t2));
    let n3 = { ...s5.query };
    e3.credentialToken && (n3.token = e3.credentialToken);
    let a6 = v(n3);
    has("esri-url-encodes-apostrophe") && (a6 = a6.replaceAll("'", "%27"));
    const i4 = t2.length + 1 + a6.length;
    let l3;
    u3 = "delete" === s5.method || "post" === s5.method || "put" === s5.method || !!s5.body || i4 > H2.maxUrlLength;
    const c4 = s5.useProxy || !!H(t2);
    if (c4) {
      const e4 = S(t2);
      l3 = e4.path, !u3 && l3.length + 1 + i4 > H2.maxUrlLength && (u3 = true), e4.query && (n3 = { ...e4.query, ...n3 });
    }
    if ("HEAD" === o2.method && (u3 || c4)) {
      if (u3) {
        if (i4 > H2.maxUrlLength) throw $("request:invalid-parameters", new Error("URL exceeds maximum length"), e3.params);
        throw $("request:invalid-parameters", new Error("cannot use POST request when method is 'head'"), e3.params);
      }
      if (c4) throw $("request:invalid-parameters", new Error("cannot use proxy when method is 'head'"), e3.params);
    }
    if (u3 ? (o2.method = "delete" === s5.method ? "DELETE" : "put" === s5.method ? "PUT" : "POST", s5.body ? t2 = Et(t2, n3) : (o2.body = v(n3), o2.headers || (o2.headers = {}), o2.headers["Content-Type"] = "application/x-www-form-urlencoded")) : t2 = Et(t2, n3), c4 && (e3.useProxy = true, t2 = `${l3}?${t2}`), n3.token && R2 && o2.body instanceof FormData && !a2(t2) && o2.body.set("token", n3.token), s5.hasOwnProperty("withCredentials")) e3.withCredentials = s5.withCredentials;
    else if (!F(t2, C())) {
      if (M(t2)) e3.withCredentials = true;
      else if (s3) {
        const s6 = s3.findServerInfo(t2);
        (s6 == null ? void 0 : s6.webTierAuth) && (e3.withCredentials = true);
      }
    }
    e3.withCredentials && (o2.credentials = "include", d4(t2) && await f3(u3 ? Et(t2, n3) : t2));
  }
  let p3, m5, O = 0, C3 = false;
  l2 > 0 && (O = setTimeout(() => {
    C3 = true, e3.controller.abort();
  }, l2));
  try {
    if ("native-request-init" === s5.responseType) m5 = o2, m5.url = t2, s5.signal ? m5.signal = s5.signal : delete m5.signal;
    else if ("image" !== s5.responseType || "default" !== o2.cache || "GET" !== o2.method || u3 || X2(s5.headers) || !n2 && !e3.useProxy && H2.proxyUrl && !B(t2)) {
      if (P2._beforeFetch && await P2._beforeFetch(t2, o2), p3 = await fetch(t2, o2), P2._afterFetch && await P2._afterFetch(p3), e3.useProxy || N(t2), "native" === s5.responseType) m5 = p3;
      else if ("HEAD" !== o2.method) if (p3.ok) {
        switch (a5) {
          case "array-buffer":
            m5 = await p3.arrayBuffer();
            break;
          case "blob":
          case "image":
            m5 = await p3.blob();
            break;
          default:
            m5 = await p3.text();
        }
        if (O && (clearTimeout(O), O = 0), "json" === a5 || "xml" === a5 || "document" === a5) if (m5) switch (a5) {
          case "json":
            m5 = JSON.parse(m5);
            break;
          case "xml":
            m5 = V2(m5, "application/xml");
            break;
          case "document":
            m5 = V2(m5, "text/html");
        }
        else m5 = null;
        if (m5) {
          if ("array-buffer" === a5 || "blob" === a5) {
            const e4 = p3.headers.get("Content-Type");
            if (e4 && /application\/json|text\/plain/i.test(e4) && m5["blob" === a5 ? "size" : "byteLength"] <= 750) try {
              const e5 = await new Response(m5).json();
              e5.error && (m5 = e5);
            } catch {
            }
          }
          "image" === a5 && m5 instanceof Blob && (m5 = await te(URL.createObjectURL(m5), e3, true));
        }
      } else {
        m5 = await p3.text();
        try {
          m5 = JSON.parse(m5);
        } catch {
        }
      }
    } else m5 = await te(t2, e3);
  } catch (x3) {
    if ("AbortError" === x3.name) {
      if (C3) throw u2();
      throw u("Request canceled");
    }
    if (!(!p3 && x3 instanceof TypeError && H2.proxyUrl) || s5.body || "delete" === s5.method || "head" === s5.method || "post" === s5.method || "put" === s5.method || e3.useProxy || B(t2)) throw x3;
    e3.redoRequest = true, z({ proxyUrl: H2.proxyUrl, urlPrefix: X(t2) ?? "" });
  } finally {
    O && clearTimeout(O);
  }
  return [p3, m5];
}
async function K2(e3, r4) {
  if (null != e3.responseData) return e3.responseData;
  if (e3.headers && (r4.requestOptions.headers = { ...r4.requestOptions.headers, ...e3.headers }), e3.query && (r4.requestOptions.query = { ...r4.requestOptions.query, ...e3.query }), e3.before) {
    let o2, n2;
    try {
      n2 = await e3.before(r4);
    } catch (s5) {
      o2 = $("request:interceptor", s5, r4);
    }
    if ((n2 instanceof Error || n2 instanceof s2) && (o2 = $("request:interceptor", n2, r4)), o2) throw e3.error && e3.error(o2), o2;
    return n2;
  }
}
function X2(e3) {
  if (e3) {
    for (const r4 of Object.getOwnPropertyNames(e3)) if (e3[r4]) return true;
  }
  return false;
}
function V2(e3, r4) {
  let t2;
  try {
    t2 = new DOMParser().parseFromString(e3, r4);
  } catch {
  }
  if (!t2 || t2.getElementsByTagName("parsererror").length) throw new SyntaxError("XML Parse error");
  return t2;
}
P2._corsServers = ["https://server.arcgisonline.com", "https://services.arcgisonline.com"], P2._beforeFetch = void 0, P2._afterFetch = void 0;
var Y2 = /* @__PURE__ */ new Map();
async function Z2(e3) {
  const r4 = se(e3.params.url);
  if (!r4) return ee(e3);
  const { QueueProcessor: t2 } = await import("./QueueProcessor-YRRQQTK4.js"), s5 = r(Y2, r4.origin, () => {
    const e4 = r4.isHosted ? has("request-queue-concurrency-hosted") : has("request-queue-concurrency-non-hosted");
    return new t2({ concurrency: e4, process: (e5) => {
      if (c(e5.params.requestOptions)) throw $("", u("Request canceled"), e5.params);
      return ee(e5);
    } });
  });
  return s5.push(e3);
}
async function ee(e3) {
  var _a, _b;
  let t2, s5;
  await W(e3);
  try {
    do {
      [t2, s5] = await J(e3);
    } while (!await re(e3, t2, s5));
  } catch (a5) {
    const r4 = $("request:server", a5, e3.params, t2);
    throw r4.details.ssl = e3.useSSL, ((_a = e3.interceptor) == null ? void 0 : _a.error) && e3.interceptor.error(r4), r4;
  }
  const o2 = e3.params.url;
  if (s5 && /\/sharing\/rest\/(accounts|portals)\/self/i.test(o2)) {
    if (!e3.hasToken && !e3.credentialToken && ((_b = s5.user) == null ? void 0 : _b.username) && !M(o2)) {
      const e4 = X(o2, true);
      e4 && H2.trustedServers.push(e4);
    }
    Array.isArray(s5.authorizedCrossOriginNoCorsDomains) && l(s5.authorizedCrossOriginNoCorsDomains);
  }
  const n2 = e3.credential;
  if (n2 && s3) {
    const e4 = s3.findServerInfo(n2.server);
    let t3 = e4 == null ? void 0 : e4.owningSystemUrl;
    if (t3) {
      t3 = t3.replace(/\/?$/, "/sharing");
      const e5 = s3.findCredential(t3, n2.userId);
      e5 && -1 === s3._getIdenticalSvcIdx(t3, e5) && e5.resources.unshift(t3);
    }
  }
  return { data: s5, getAllHeaders: t2 ? () => Array.from(t2.headers) : I4, getHeader: t2 ? (e4) => t2.headers.get(e4) : I4, httpStatus: (t2 == null ? void 0 : t2.status) ?? 200, requestOptions: e3.params.requestOptions, ssl: e3.useSSL, url: e3.params.url };
}
async function re(e3, t2, s5) {
  var _a;
  if (e3.redoRequest) return e3.redoRequest = false, false;
  const o2 = e3.params.requestOptions;
  if (!t2 || "native" === o2.responseType || "native-request-init" === o2.responseType) return true;
  let n2, a5;
  if (s5 && (s5.error && "object" == typeof s5.error ? n2 = s5.error : "error" === s5.status && Array.isArray(s5.messages) && (n2 = { ...s5 }, n2[M2] = s5, n2.details = s5.messages)), !n2 && !t2.ok) throw n2 = new Error(`Unable to load ${t2.url} status: ${t2.status}`), n2[M2] = s5, n2;
  let i4, l2 = null;
  n2 && (a5 = Number(n2.code), l2 = n2.hasOwnProperty("subcode") ? Number(n2.subcode) : null, i4 = n2.messageCode, i4 = i4 == null ? void 0 : i4.toUpperCase());
  const u3 = o2.authMode;
  if (403 === a5 && (4 === l2 || ((_a = n2.message) == null ? void 0 : _a.toLowerCase().includes("ssl")) && !n2.message.toLowerCase().includes("permission"))) {
    if (!e3.useSSL) return e3.useSSL = true, false;
  } else if (!e3.hasToken && e3.useIdentity && ("no-prompt" !== u3 || 498 === a5) && void 0 !== a5 && _2.has(a5) && !G2(e3.params.url) && (403 !== a5 || (!i4 || !D2.has(i4)) && (null == l2 || 2 === l2 && e3.credentialToken))) {
    await Q();
    try {
      const t3 = await s3.getCredential(e3.params.url, { error: $("request:server", n2, e3.params), prompt: "no-prompt" !== u3, signal: e3.controller.signal, token: e3.credentialToken });
      return e3.credential = t3, e3.credentialToken = t3.token, e3.useSSL = e3.useSSL || t3.ssl, false;
    } catch (c4) {
      if ("no-prompt" === u3) return e3.credential = void 0, e3.credentialToken = void 0, false;
      n2 = c4;
    }
  }
  if (n2) throw n2;
  return true;
}
function te(e3, r4, t2 = false) {
  const s5 = r4.controller.signal, o2 = new Image();
  return r4.withCredentials ? o2.crossOrigin = "use-credentials" : o2.crossOrigin = "anonymous", o2.alt = "", o2.fetchPriority = H2.priority, o2.src = e3, i3(o2, e3, t2, s5);
}
function se(e3) {
  let r4, t2;
  return "string" == typeof e3 ? (r4 = X(e3, true), t2 = g2(e3)) : (r4 = e3.origin, t2 = g2(e3.toString())), null == r4 ? null : { origin: r4, isHosted: t2 };
}

export {
  d,
  e,
  e2,
  s3 as s,
  r3 as r,
  i,
  t,
  p,
  m2 as m,
  f,
  h,
  U,
  g,
  x2 as x,
  R,
  y,
  P,
  p2,
  d3 as d2,
  h2,
  m3 as m2,
  w2 as w,
  g2,
  y2,
  S2 as S,
  C2 as C,
  b2 as b,
  I3 as I,
  n,
  i3 as i2,
  m4 as m3,
  P2
};
//# sourceMappingURL=chunk-UFBX3XSC.js.map
