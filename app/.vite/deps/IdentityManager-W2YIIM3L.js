import {
  c as c3
} from "./chunk-5XMOCUPU.js";
import {
  O,
  c as c2,
  e
} from "./chunk-4O2ECRMV.js";
import {
  n
} from "./chunk-7EIXRVA4.js";
import {
  T
} from "./chunk-BSRIVWBN.js";
import "./chunk-RVUV2HD7.js";
import "./chunk-5EWD56QJ.js";
import {
  s as s3
} from "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import {
  i as i2
} from "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  i,
  s as s4
} from "./chunk-UFBX3XSC.js";
import {
  A,
  Et,
  F,
  H,
  I,
  K,
  _,
  a as a2,
  et,
  r as r2,
  v,
  x
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  L,
  c2 as c,
  m as m2,
  o4 as o
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  l,
  s,
  s2,
  t
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/identity/IdentityModal.js
var p = "esri-identity-modal";
var u = { base: p, info: `${p}__info`, notice: `${p}__notice` };
var d = "ArcGIS Online";
var m3 = class extends O {
  constructor(t3, e3) {
    super(t3, e3), this.container = document.createElement("div"), this.error = null, this.oAuthPrompt = false, this.open = false, this.signingIn = false, this.server = null, this.resource = null, this._usernameInputNode = null, this._passwordInputNode = null, document.body.appendChild(this.container);
  }
  loadDependencies() {
    return c2({ button: () => import("./calcite-button-JBDKJEJZ.js"), dialog: () => import("./calcite-dialog-666O63O4.js"), input: () => import("./calcite-input-LDDQP5AR.js"), label: () => import("./calcite-label-R6HZITBG.js"), notice: () => import("./calcite-notice-MPUJ2BZX.js") });
  }
  get title() {
    var _a;
    return (_a = this.commonMessages) == null ? void 0 : _a.auth.signIn;
  }
  render() {
    var _a;
    const { open: t3, title: e3, messages: o2, signingIn: s8, oAuthPrompt: i5, server: n2, resource: r4, error: p3 } = this, { info: m4, oAuthInfo: h2, lblItem: g, invalidUser: b2, noAuthService: f, lblUser: v2, lblPwd: _2, lblCancel: y, lblSigning: I2, lblOk: w } = o2;
    return n("div", { class: this.classes(u.base, c3()) }, n("form", { bind: this, onsubmit: this._submit }, n("calcite-dialog", { bind: this, heading: e3, modal: true, open: t3, outsideCloseDisabled: true, scale: "s", widthScale: "s", onCalciteDialogClose: this._cancel, onCalciteDialogOpen: this._focusUsernameInput }, n("div", { class: u.info }, s3(i5 ? h2 : m4, { server: n2 && /\.arcgis\.com/i.test(n2) ? d : n2, resource: `(${r4 || g})` })), p3 ? n("calcite-notice", { class: u.notice, icon: "exclamation-mark-triangle", kind: "danger", open: true }, n("div", { slot: "message" }, ((_a = p3.details) == null ? void 0 : _a.httpStatus) ? b2 : f)) : null, i5 ? null : [n("calcite-label", null, v2, n("calcite-input", { afterCreate: (t4) => this._usernameInputNode = t4, autocomplete: "off", bind: this, name: "username", required: true, spellcheck: false, type: "text", value: "" })), n("calcite-label", null, _2, n("calcite-input", { afterCreate: (t4) => this._passwordInputNode = t4, bind: this, name: "password", required: true, type: "password", value: "" }))], n("calcite-button", { appearance: "outline", bind: this, onclick: this._cancel, slot: "footer-end", type: "button" }, y), n("calcite-button", { loading: !!s8, slot: "footer-end", type: "submit" }, s8 ? I2 : w))));
  }
  _focusUsernameInput() {
    return T(() => this._usernameInputNode);
  }
  _cancel() {
    this._set("signingIn", false), this.open = false, this._usernameInputNode && (this._usernameInputNode.value = ""), this._passwordInputNode && (this._passwordInputNode.value = ""), this.emit("cancel");
  }
  _submit(t3) {
    var _a, _b;
    t3.preventDefault(), this._set("signingIn", true);
    const e3 = this.oAuthPrompt ? {} : { username: (_a = this._usernameInputNode) == null ? void 0 : _a.value, password: (_b = this._passwordInputNode) == null ? void 0 : _b.value };
    this.emit("submit", e3);
  }
};
r([m({ readOnly: true })], m3.prototype, "container", void 0), r([m(), e("esri/t9n/common")], m3.prototype, "commonMessages", void 0), r([m()], m3.prototype, "error", void 0), r([m(), e("esri/identity/t9n/identity")], m3.prototype, "messages", void 0), r([m()], m3.prototype, "oAuthPrompt", void 0), r([m()], m3.prototype, "open", void 0), r([m()], m3.prototype, "signingIn", void 0), r([m()], m3.prototype, "server", void 0), r([m({ readOnly: true })], m3.prototype, "title", null), r([m()], m3.prototype, "resource", void 0), m3 = r([a("esri.identity.IdentityModal")], m3);
var h = m3;

// node_modules/@arcgis/core/identity/OAuthCredential.js
var t2 = "esriJSAPIOAuth";
var e2 = class {
  constructor(t3, e3) {
    this.oAuthInfo = null, this.storage = null, this.appId = null, this.codeVerifier = null, this.expires = null, this.refreshToken = null, this.ssl = null, this.stateUID = null, this.token = null, this.userId = null, this.oAuthInfo = t3, this.storage = e3, this._init();
  }
  isValid() {
    let t3 = false;
    if (this.oAuthInfo && this.userId && (this.refreshToken || this.token)) {
      if (null == this.expires && this.refreshToken) t3 = true;
      else if (this.expires) {
        const e3 = Date.now();
        if (this.expires > e3) {
          (this.expires - e3) / 1e3 > 60 * this.oAuthInfo.minTimeUntilExpiration && (t3 = true);
        }
      }
    }
    return t3;
  }
  save() {
    if (!this.storage) return false;
    const e3 = this._load(), s8 = this.oAuthInfo;
    if ((s8 == null ? void 0 : s8.authNamespace) && s8.portalUrl) {
      let r4 = e3[s8.authNamespace];
      r4 || (r4 = e3[s8.authNamespace] = {}), this.appId || (this.appId = s8.appId), r4[s8.portalUrl] = { appId: this.appId, codeVerifier: this.codeVerifier, expires: this.expires, refreshToken: this.refreshToken, ssl: this.ssl, stateUID: this.stateUID, token: this.token, userId: this.userId };
      try {
        this.storage.setItem(t2, JSON.stringify(e3));
      } catch (i5) {
        return console.warn(i5), false;
      }
      return true;
    }
    return false;
  }
  destroy() {
    const e3 = this._load(), s8 = this.oAuthInfo;
    if ((s8 == null ? void 0 : s8.appId) && (s8 == null ? void 0 : s8.portalUrl) && (null == this.expires || this.expires > Date.now()) && (this.refreshToken || this.token)) {
      const t3 = s8.portalUrl.replace(/^http:/i, "https:") + "/sharing/rest/oauth2/revokeToken", e4 = new FormData();
      if (e4.append("f", "json"), e4.append("auth_token", this.refreshToken || this.token), e4.append("client_id", s8.appId), e4.append("token_type_hint", this.refreshToken ? "refresh_token" : "access_token"), "function" == typeof navigator.sendBeacon) navigator.sendBeacon(t3, e4);
      else {
        const s9 = new XMLHttpRequest();
        s9.open("POST", t3), s9.send(e4);
      }
    }
    if ((s8 == null ? void 0 : s8.authNamespace) && s8.portalUrl && this.storage) {
      const r4 = e3[s8.authNamespace];
      if (r4) {
        delete r4[s8.portalUrl];
        try {
          this.storage.setItem(t2, JSON.stringify(e3));
        } catch (i5) {
          console.log(i5);
        }
      }
    }
    s8 && (s8._oAuthCred = null, this.oAuthInfo = null);
  }
  _init() {
    const t3 = this._load(), e3 = this.oAuthInfo;
    if ((e3 == null ? void 0 : e3.authNamespace) && e3.portalUrl) {
      let s8 = t3[e3.authNamespace];
      s8 && (s8 = s8[e3.portalUrl], s8 && (this.appId = s8.appId, this.codeVerifier = s8.codeVerifier, this.expires = s8.expires, this.refreshToken = s8.refreshToken, this.ssl = s8.ssl, this.stateUID = s8.stateUID, this.token = s8.token, this.userId = s8.userId));
    }
  }
  _load() {
    let e3 = {};
    if (this.storage) {
      const i5 = this.storage.getItem(t2);
      if (i5) try {
        e3 = JSON.parse(i5);
      } catch (s8) {
        console.warn(s8);
      }
    }
    return e3;
  }
};
e2.prototype.declaredClass = "esri.identity.OAuthCredential";

// node_modules/@arcgis/core/identity/OAuthInfo.js
var p2;
var s5 = p2 = class extends S {
  constructor(o2) {
    super(o2), this._oAuthCred = null, this.appId = null, this.authNamespace = "/", this.expiration = 20160, this.flowType = "auto", this.forceLogin = false, this.forceUserId = false, this.locale = null, this.minTimeUntilExpiration = 30, this.popup = false, this.popupCallbackUrl = "oauth-callback.html", this.popupWindowFeatures = "height=490,width=800,resizable,scrollbars,status", this.portalUrl = "https://www.arcgis.com", this.preserveUrlHash = false, this.userId = null;
  }
  clone() {
    return p2.fromJSON(this.toJSON());
  }
};
r([m({ json: { write: true } })], s5.prototype, "appId", void 0), r([m({ json: { write: true } })], s5.prototype, "authNamespace", void 0), r([m({ json: { write: true } })], s5.prototype, "expiration", void 0), r([m({ json: { write: true } })], s5.prototype, "flowType", void 0), r([m({ json: { write: true } })], s5.prototype, "forceLogin", void 0), r([m({ json: { write: true } })], s5.prototype, "forceUserId", void 0), r([m({ json: { write: true } })], s5.prototype, "locale", void 0), r([m({ json: { write: true } })], s5.prototype, "minTimeUntilExpiration", void 0), r([m({ json: { write: true } })], s5.prototype, "popup", void 0), r([m({ json: { write: true } })], s5.prototype, "popupCallbackUrl", void 0), r([m({ json: { write: true } })], s5.prototype, "popupWindowFeatures", void 0), r([m({ json: { write: true } })], s5.prototype, "portalUrl", void 0), r([m({ json: { write: true } })], s5.prototype, "preserveUrlHash", void 0), r([m({ json: { write: true } })], s5.prototype, "userId", void 0), s5 = p2 = r([a("esri.identity.OAuthInfo")], s5);
var i3 = s5;

// node_modules/@arcgis/core/identity/ServerInfo.js
var i4 = class extends S {
  constructor(o2) {
    super(o2), this.adminTokenServiceUrl = null, this.currentVersion = null, this.hasPortal = null, this.hasServer = null, this.owningSystemUrl = null, this.owningTenant = null, this.server = null, this.shortLivedTokenValidity = null, this.tokenServiceUrl = null, this.webTierAuth = null;
  }
};
r([m({ json: { write: true } })], i4.prototype, "adminTokenServiceUrl", void 0), r([m({ json: { write: true } })], i4.prototype, "currentVersion", void 0), r([m({ json: { write: true } })], i4.prototype, "hasPortal", void 0), r([m({ json: { write: true } })], i4.prototype, "hasServer", void 0), r([m({ json: { write: true } })], i4.prototype, "owningSystemUrl", void 0), r([m({ json: { write: true } })], i4.prototype, "owningTenant", void 0), r([m({ json: { write: true } })], i4.prototype, "server", void 0), r([m({ json: { write: true } })], i4.prototype, "shortLivedTokenValidity", void 0), r([m({ json: { write: true } })], i4.prototype, "tokenServiceUrl", void 0), r([m({ json: { write: true } })], i4.prototype, "webTierAuth", void 0), i4 = r([a("esri.identity.ServerInfo")], i4);
var s6 = i4;

// node_modules/@arcgis/core/identity/IdentityManagerBase.js
var R = {};
var C = (e3) => {
  const t3 = new x(e3.owningSystemUrl).host, r4 = new x(e3.server).host, s8 = /.+\.arcgis\.com$/i;
  return s8.test(t3) && s8.test(r4);
};
var D = (e3, t3) => !!(C(e3) && t3 && t3.some((t4) => t4.test(e3.server)));
var b = null;
var q = null;
try {
  b = window.localStorage, q = window.sessionStorage;
} catch {
}
var j = class extends i2 {
  constructor() {
    super(), this._portalConfig = globalThis.esriGeowConfig, this.serverInfos = [], this.oAuthInfos = [], this.credentials = [], this._soReqs = [], this._xoReqs = [], this._portals = [], this._defaultOAuthInfo = null, this._defaultTokenValidity = 60, this.dialog = null, this.tokenValidity = null, this.normalizeWebTierAuth = false, this._appOrigin = "null" !== window.origin ? window.origin : window.location.origin, this._appUrlObj = I(window.location.href), this._busy = null, this._rejectOnPersistedPageShow = false, this._oAuthLocationParams = null, this._gwTokenUrl = "/sharing/rest/generateToken", this._agsRest = "/rest/services", this._agsPortal = /\/sharing(\/|$)/i, this._agsAdmin = /(https?:\/\/[^/]+\/[^/]+)\/admin\/?(\/.*)?$/i, this._adminSvcs = /\/rest\/admin\/services(\/|$)/i, this._gwDomains = [{ regex: /^https?:\/\/www\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i, customBaseUrl: "mapsdev.arcgis.com", tokenServiceUrl: "https://dev.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i, customBaseUrl: "mapsdevext.arcgis.com", tokenServiceUrl: "https://devext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i, customBaseUrl: "mapsqa.arcgis.com", tokenServiceUrl: "https://qaext.arcgis.com/sharing/rest/generateToken" }, { regex: /^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i, customBaseUrl: "maps.arcgis.com", tokenServiceUrl: "https://www.arcgis.com/sharing/rest/generateToken" }], this._legacyFed = [], this._regexSDirUrl = /http.+\/rest\/services\/?/gi, this._regexServerType = /(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|KnowledgeGraphServer|MapServer|MissionServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer|VideoServer)).*/gi, this._gwUser = /http.+\/users\/([^/]+).*/i, this._gwItem = /http.+\/items\/([^/]+).*/i, this._gwGroup = /http.+\/groups\/([^/]+).*/i, this._rePortalTokenSvc = /\/sharing(\/rest)?\/generatetoken/i, this._createDefaultOAuthInfo = true, this._hasTestedIfAppIsOnPortal = false, this._getPlatformSelfError = null, this._getOAuthLocationParams(), window.addEventListener("pageshow", (e3) => {
      this._pageShowHandler(e3);
    });
  }
  registerServers(e3) {
    const t3 = this.serverInfos;
    t3 ? (e3 = e3.filter((e4) => !this.findServerInfo(e4.server)), this.serverInfos = t3.concat(e3)) : this.serverInfos = e3, e3.forEach((e4) => {
      e4.owningSystemUrl && this._portals.push(e4.owningSystemUrl), e4.hasPortal && this._portals.push(e4.server);
    });
  }
  registerOAuthInfos(e3) {
    const t3 = this.oAuthInfos;
    if (t3) {
      for (const r4 of e3) {
        const e4 = this.findOAuthInfo(r4.portalUrl);
        e4 && t3.splice(t3.indexOf(e4), 1);
      }
      this.oAuthInfos = t3.concat(e3);
    } else this.oAuthInfos = e3;
  }
  registerToken(e3) {
    e3 = { ...e3 };
    const t3 = this._sanitizeUrl(e3.server), r4 = this._isServerRsrc(t3);
    let s8, i5 = this.findServerInfo(t3), o2 = true;
    i5 || (i5 = new s6(), i5.server = this._getServerInstanceRoot(t3), r4 ? i5.hasServer = true : (i5.tokenServiceUrl = this._getTokenSvcUrl(t3), i5.hasPortal = true), this.registerServers([i5])), s8 = this._findCredential(t3), s8 ? (delete e3.server, Object.assign(s8, e3), o2 = false) : (s8 = new E({ userId: e3.userId, server: i5.server ?? void 0, token: e3.token, expires: e3.expires, ssl: e3.ssl, scope: r4 ? "server" : "portal" }), s8.resources = [t3], this.credentials.push(s8)), s8.emitTokenChange(false), o2 || s8.refreshServerTokens();
  }
  toJSON() {
    return l({ serverInfos: this.serverInfos.map((e3) => e3.toJSON()), oAuthInfos: this.oAuthInfos.map((e3) => e3.toJSON()), credentials: this.credentials.map((e3) => e3.toJSON()) });
  }
  initialize(e3) {
    if (!e3) return;
    "string" == typeof e3 && (e3 = JSON.parse(e3));
    const t3 = e3.serverInfos, r4 = e3.oAuthInfos, s8 = e3.credentials;
    if (t3) {
      const e4 = [];
      t3.forEach((t4) => {
        t4.server && t4.tokenServiceUrl && e4.push(t4.declaredClass ? t4 : new s6(t4));
      }), e4.length && this.registerServers(e4);
    }
    if (r4) {
      const e4 = [];
      r4.forEach((t4) => {
        t4.appId && e4.push(t4.declaredClass ? t4 : new i3(t4));
      }), e4.length && this.registerOAuthInfos(e4);
    }
    s8 && s8.forEach((e4) => {
      e4.server && e4.token && e4.expires && e4.expires > Date.now() && ((e4 = e4.declaredClass ? e4 : new E(e4)).emitTokenChange(), this.credentials.push(e4));
    });
  }
  findServerInfo(e3) {
    let t3;
    e3 = this._sanitizeUrl(e3);
    for (const r4 of this.serverInfos) if (this._hasSameServerInstance(r4.server, e3)) {
      t3 = r4;
      break;
    }
    return t3;
  }
  findOAuthInfo(e3) {
    let t3;
    e3 = this._sanitizeUrl(e3);
    for (const r4 of this.oAuthInfos) if (this._hasSameServerInstance(r4.portalUrl, e3)) {
      t3 = r4;
      break;
    }
    return t3;
  }
  findCredential(e3, t3) {
    if (!e3) return;
    let r4;
    e3 = this._sanitizeUrl(e3);
    const s8 = this._isServerRsrc(e3) ? "server" : "portal";
    if (t3) {
      for (const i5 of this.credentials) if (this._hasSameServerInstance(i5.server, e3) && t3 === i5.userId && i5.scope === s8) {
        r4 = i5;
        break;
      }
    } else for (const i5 of this.credentials) if (this._hasSameServerInstance(i5.server, e3) && -1 !== this._getIdenticalSvcIdx(e3, i5) && i5.scope === s8) {
      r4 = i5;
      break;
    }
    return r4;
  }
  getCredential(e3, t3) {
    let r4, s8, o2 = true;
    t3 && (r4 = !!t3.token, s8 = t3.error, o2 = false !== t3.prompt), t3 = { ...t3 }, e3 = this._sanitizeUrl(e3);
    const n2 = new AbortController(), a3 = L();
    if (t3.signal && m2(t3.signal, () => {
      n2.abort();
    }), m2(n2, () => {
      a3.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    }), c(n2)) return a3.promise;
    t3.signal = n2.signal;
    const h2 = this._isAdminResource(e3), u2 = r4 ? this.findCredential(e3) : null;
    let _2;
    if (u2 && s8 && s8.details && 498 === s8.details.httpStatus) u2.destroy();
    else if (u2) return _2 = new s2("identity-manager:not-authorized", "You are currently signed in as: '" + u2.userId + "'. You do not have access to this resource: " + e3, { error: s8 }), a3.reject(_2), a3.promise;
    const f = this._findCredential(e3, t3);
    if (f) return a3.resolve(f), a3.promise;
    let g = this.findServerInfo(e3);
    if (g) !g.hasPortal && g.server && g.owningSystemUrl && this._hasSameServerInstance(g.server, g.owningSystemUrl) && (g.hasPortal = true), !g.hasServer && this._isServerRsrc(e3) && (g._restInfoPms = this._getTokenSvcUrl(e3), g.hasServer = true);
    else {
      const t4 = this._getTokenSvcUrl(e3);
      if (!t4) return _2 = new s2("identity-manager:unknown-resource", "Unknown resource - could not find token service endpoint."), a3.reject(_2), a3.promise;
      g = new s6(), g.server = this._getServerInstanceRoot(e3), "string" == typeof t4 ? (g.tokenServiceUrl = t4, g.hasPortal = true) : (g._restInfoPms = t4, g.hasServer = true), this.registerServers([g]);
    }
    return g.hasPortal && void 0 === g._selfReq && (o2 || F(g.tokenServiceUrl, this._appOrigin) || this._gwDomains.some((e4) => e4.tokenServiceUrl === g.tokenServiceUrl)) && (g._selfReq = { owningTenant: t3 == null ? void 0 : t3.owningTenant, selfDfd: this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc, "/sharing/rest/portals/self"), e3) }), this._enqueue(e3, g, t3, a3, h2);
  }
  getResourceName(e3) {
    return this._isRESTService(e3) ? e3.replace(this._regexSDirUrl, "").replace(this._regexServerType, "") || "" : this._gwUser.test(e3) && e3.replace(this._gwUser, "$1") || this._gwItem.test(e3) && e3.replace(this._gwItem, "$1") || this._gwGroup.test(e3) && e3.replace(this._gwGroup, "$1") || "";
  }
  generateToken(e3, t3, r4) {
    const o2 = this._rePortalTokenSvc.test(e3.tokenServiceUrl), n2 = new x(this._appOrigin), a3 = e3.shortLivedTokenValidity;
    let h2, l2, c4, d2, u2, f, g, m4;
    t3 && (m4 = this.tokenValidity || a3 || this._defaultTokenValidity, m4 > a3 && a3 > 0 && (m4 = a3)), r4 && (h2 = r4.isAdmin, l2 = r4.serverUrl, c4 = r4.token, f = r4.signal, g = r4.ssl, e3.customParameters = r4.customParameters), h2 ? d2 = e3.adminTokenServiceUrl : (d2 = e3.tokenServiceUrl, u2 = new x(d2.toLowerCase()), e3.webTierAuth && (r4 == null ? void 0 : r4.serverUrl) && !g && "http" === n2.scheme && (F(n2.uri, d2, true) || "https" === u2.scheme && n2.host === u2.host && "7080" === n2.port && "7443" === u2.port) && (d2 = d2.replace(/^https:/i, "http:").replace(/:7443/i, ":7080")));
    const v2 = { query: { request: "getToken", username: t3 == null ? void 0 : t3.username, password: t3 == null ? void 0 : t3.password, serverUrl: l2, token: c4, expiration: m4, referer: h2 || o2 ? this._appOrigin : null, client: h2 ? "referer" : null, f: "json", ...e3.customParameters }, method: "post", authMode: "anonymous", useProxy: this._useProxy(e3, r4), signal: f, ...r4 == null ? void 0 : r4.ioArgs };
    o2 || (v2.withCredentials = false);
    return P(d2, v2).then((r5) => {
      const s8 = r5.data;
      if (!(s8 == null ? void 0 : s8.token)) return new s2("identity-manager:authentication-failed", "Unable to generate token");
      const o3 = e3.server;
      return R[o3] || (R[o3] = {}), t3 && (R[o3][t3.username] = t3.password), s8.validity = m4, s8;
    });
  }
  isBusy() {
    return !!this._busy;
  }
  async checkSignInStatus(e3) {
    return (await this.checkAppAccess(e3, "")).credential;
  }
  checkAppAccess(e3, t3, r4) {
    let o2 = false;
    return this.getCredential(e3, { prompt: false }).then((n2) => {
      let a3;
      const h2 = { f: "json" };
      if ("portal" === n2.scope) if (t3 && (this._doPortalSignIn(e3) || (r4 == null ? void 0 : r4.force))) a3 = n2.server + "/sharing/rest/oauth2/validateAppAccess", h2.client_id = t3;
      else {
        if (!n2.token) return { credential: n2 };
        a3 = n2.server + "/sharing/rest";
      }
      else {
        if (!n2.token) return { credential: n2 };
        a3 = n2.server + "/rest/services";
      }
      return n2.token && (h2.token = n2.token), P(a3, { query: h2, authMode: "anonymous" }).then((e4) => {
        if (false === e4.data.valid) throw new s2("identity-manager:not-authorized", `You are currently signed in as: '${n2.userId}'.`, e4.data);
        return o2 = !!e4.data.viewOnlyUserTypeApp, { credential: n2 };
      }).catch((e4) => {
        var _a;
        if ("identity-manager:not-authorized" === e4.name) throw e4;
        const t4 = (_a = e4.details) == null ? void 0 : _a.httpStatus;
        if (498 === t4) throw n2.destroy(), new s2("identity-manager:not-authenticated", "User is not signed in.");
        if (400 === t4) throw new s2("identity-manager:invalid-request");
        return { credential: n2 };
      });
    }).then((e4) => ({ credential: e4.credential, viewOnly: o2 }));
  }
  setOAuthResponseHash(e3) {
    e3 && ("#" === e3.charAt(0) && (e3 = e3.slice(1)), this._processOAuthPopupParams(A(e3)));
  }
  setOAuthRedirectionHandler(e3) {
    this._oAuthRedirectFunc = e3;
  }
  setProtocolErrorHandler(e3) {
    this._protocolFunc = e3;
  }
  signIn(e3, t3, r4 = {}) {
    const s8 = L(), o2 = () => {
      var _a;
      h2 == null ? void 0 : h2.remove(), d2 == null ? void 0 : d2.remove(), (_a = this.dialog) == null ? void 0 : _a.destroy(), this.dialog = h2 = d2 = null;
    }, n2 = () => {
      o2(), this._oAuthDfd = null, s8.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    };
    r4.signal && m2(r4.signal, () => {
      n2();
    });
    const a3 = new h({ open: true, resource: this.getResourceName(e3), server: t3.server });
    this.dialog = a3, this.emit("dialog-create");
    let h2 = a3.on("cancel", n2), d2 = a3.on("submit", (e4) => {
      this.generateToken(t3, e4, { isAdmin: r4.isAdmin, signal: r4.signal }).then((i5) => {
        o2();
        const n3 = new E({ userId: e4.username, server: t3.server ?? void 0, token: i5.token, expires: null != i5.expires ? Number(i5.expires) : null, ssl: !!i5.ssl, isAdmin: r4.isAdmin, validity: i5.validity });
        s8.resolve(n3);
      }).catch((e5) => {
        a3.error = e5, a3.signingIn = false;
      });
    });
    return s8.promise;
  }
  oAuthSignIn(e3, t3, r4, s8) {
    this._oAuthDfd = L();
    const o2 = this._oAuthDfd;
    let n2;
    (s8 == null ? void 0 : s8.signal) && m2(s8.signal, () => {
      const e4 = this._oAuthDfd && this._oAuthDfd.oAuthWin_;
      e4 && !e4.closed ? e4.close() : this.dialog && u2();
    }), o2.resUrl_ = e3, o2.sinfo_ = t3, o2.oinfo_ = r4;
    const a3 = r4._oAuthCred;
    if (a3.storage && ("authorization-code" === r4.flowType || "auto" === r4.flowType && t3.currentVersion >= 8.4)) {
      let e4 = crypto.getRandomValues(new Uint8Array(32));
      n2 = et(e4), a3.codeVerifier = n2, e4 = crypto.getRandomValues(new Uint8Array(32)), a3.stateUID = et(e4), a3.save() || (a3.codeVerifier = n2 = null);
    } else a3.codeVerifier = null;
    let h2, d2;
    this._getCodeChallenge(n2).then((i5) => {
      const o3 = !s8 || false !== s8.oAuthPopupConfirmation;
      if (!r4.popup || !o3) return void this._doOAuthSignIn(e3, t3, r4, i5);
      const n3 = new h({ oAuthPrompt: true, server: t3.server, open: true });
      this.dialog = n3, this.emit("dialog-create"), h2 = n3.on("cancel", u2), d2 = n3.on("submit", () => {
        p3(), this._doOAuthSignIn(e3, t3, r4, i5);
      });
    });
    const u2 = () => {
      p3(), this._oAuthDfd = null, o2.reject(new s2("identity-manager:user-aborted", "ABORTED"));
    }, p3 = () => {
      var _a;
      h2 == null ? void 0 : h2.remove(), d2 == null ? void 0 : d2.remove(), (_a = this.dialog) == null ? void 0 : _a.destroy(), this.dialog = null;
    };
    return o2.promise;
  }
  destroyCredentials() {
    if (this.credentials) {
      this.credentials.slice().forEach((e3) => {
        e3.destroy();
      });
    }
    this.emit("credentials-destroy");
  }
  enablePostMessageAuth(e3 = "https://www.arcgis.com/sharing/rest") {
    this._postMessageAuthHandle && this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = o(window, "message", (t3) => {
      var _a;
      if ((t3.origin === this._appOrigin || t3.origin.endsWith(".arcgis.com")) && "arcgis:auth:requestCredential" === ((_a = t3.data) == null ? void 0 : _a.type)) {
        const r4 = t3.source;
        this.getCredential(e3).then((e4) => {
          r4.postMessage({ type: "arcgis:auth:credential", credential: { expires: e4.expires, server: e4.server, ssl: e4.ssl, token: e4.token, userId: e4.userId } }, t3.origin);
        }).catch((e4) => {
          r4.postMessage({ type: "arcgis:auth:error", error: { name: e4.name, message: e4.message } }, t3.origin);
        });
      }
    });
  }
  disablePostMessageAuth() {
    this._postMessageAuthHandle && (this._postMessageAuthHandle.remove(), this._postMessageAuthHandle = null);
  }
  _getOAuthLocationParams() {
    var _a, _b;
    let e3 = window.location.hash;
    if (e3) {
      "#" === e3.charAt(0) && (e3 = e3.slice(1));
      const t4 = A(e3);
      let r4 = false;
      if (t4.access_token && t4.expires_in && t4.state && t4.hasOwnProperty("username")) try {
        t4.state = JSON.parse(t4.state), t4.state.portalUrl && (this._oAuthLocationParams = t4, r4 = true);
      } catch {
      }
      else if (t4.error && t4.error_description && (console.log("IdentityManager OAuth Error: ", t4.error, " - ", t4.error_description), "access_denied" === t4.error && (r4 = true, t4.state))) try {
        t4.state = JSON.parse(t4.state);
      } catch {
      }
      r4 && (window.location.hash = ((_a = t4.state) == null ? void 0 : _a.hash) || "");
    }
    let t3 = window.location.search;
    if (t3) {
      "?" === t3.charAt(0) && (t3 = t3.slice(1));
      const e4 = A(t3);
      let r4 = false;
      if (e4.code && e4.state) try {
        e4.state = JSON.parse(e4.state), e4.state.portalUrl && e4.state.uid && (this._oAuthLocationParams = e4, r4 = true);
      } catch {
      }
      else if (e4.error && e4.error_description && (console.log("IdentityManager OAuth Error: ", e4.error, " - ", e4.error_description), "access_denied" === e4.error && (r4 = true, e4.state))) try {
        e4.state = JSON.parse(e4.state);
      } catch {
      }
      if (r4) {
        const t4 = { ...e4 };
        ["code", "error", "error_description", "message_code", "persist", "state"].forEach((e5) => {
          delete t4[e5];
        });
        const r5 = v(t4), s8 = window.location.pathname + (r5 ? `?${r5}` : "") + (((_b = e4.state) == null ? void 0 : _b.hash) || "");
        window.history.replaceState(window.history.state, "", s8);
      }
    }
  }
  _getOAuthToken(e3, t3, r4, i5, o2) {
    return e3 = e3.replace(/^http:/i, "https:"), P(`${e3}/sharing/rest/oauth2/token`, { authMode: "anonymous", method: "post", query: i5 && o2 ? { grant_type: "authorization_code", code: t3, redirect_uri: i5, client_id: r4, code_verifier: o2 } : { grant_type: "refresh_token", refresh_token: t3, client_id: r4 } }).then((e4) => e4.data);
  }
  async _getCodeChallenge(e3) {
    if (e3 && globalThis.isSecureContext) {
      const t3 = new TextEncoder().encode(e3), r4 = await crypto.subtle.digest("SHA-256", t3);
      return et(new Uint8Array(r4));
    }
    return null;
  }
  _pageShowHandler(e3) {
    if (e3.persisted && this.isBusy() && this._rejectOnPersistedPageShow) {
      const e4 = new s2("identity-manager:user-aborted", "ABORTED");
      this._errbackFunc(e4);
    }
  }
  _findCredential(e3, t3) {
    let r4, s8, i5, o2, n2 = -1;
    const a3 = t3 == null ? void 0 : t3.token, h2 = t3 == null ? void 0 : t3.resource, l2 = this._isServerRsrc(e3) ? "server" : "portal", c4 = this.credentials.filter((t4) => this._hasSameServerInstance(t4.server, e3) && t4.scope === l2);
    if (e3 = h2 || e3, c4.length) if (1 === c4.length) {
      if (r4 = c4[0], i5 = this.findServerInfo(r4.server), s8 = i5 == null ? void 0 : i5.owningSystemUrl, o2 = s8 ? this.findCredential(s8, r4.userId) : void 0, n2 = this._getIdenticalSvcIdx(e3, r4), !a3) return -1 === n2 && r4.resources.push(e3), this._addResource(e3, o2), r4;
      -1 !== n2 && (r4.resources.splice(n2, 1), this._removeResource(e3, o2));
    } else {
      let t4, r5;
      if (c4.some((a4) => (r5 = this._getIdenticalSvcIdx(e3, a4), -1 !== r5 && (t4 = a4, i5 = this.findServerInfo(t4.server), s8 = i5 == null ? void 0 : i5.owningSystemUrl, o2 = s8 ? this.findCredential(s8, t4.userId) : void 0, n2 = r5, true))), a3) t4 && (t4.resources.splice(n2, 1), this._removeResource(e3, o2));
      else if (t4) return this._addResource(e3, o2), t4;
    }
  }
  _findOAuthInfo(e3) {
    let t3 = this.findOAuthInfo(e3);
    if (!t3) {
      for (const r4 of this.oAuthInfos) if (this._isIdProvider(r4.portalUrl, e3)) {
        t3 = r4;
        break;
      }
    }
    return t3;
  }
  _addResource(e3, t3) {
    t3 && -1 === this._getIdenticalSvcIdx(e3, t3) && t3.resources.push(e3);
  }
  _removeResource(e3, t3) {
    let r4 = -1;
    t3 && (r4 = this._getIdenticalSvcIdx(e3, t3), r4 > -1 && t3.resources.splice(r4, 1));
  }
  _useProxy(e3, t3) {
    return (t3 == null ? void 0 : t3.isAdmin) && !F(e3.adminTokenServiceUrl, this._appOrigin) || !this._isPortalDomain(e3.tokenServiceUrl) && "10.1" === String(e3.currentVersion) && !F(e3.tokenServiceUrl, this._appOrigin);
  }
  _getOrigin(e3) {
    const t3 = new x(e3);
    return t3.scheme + "://" + t3.host + (null != t3.port ? ":" + t3.port : "");
  }
  _getServerInstanceRoot(e3) {
    const t3 = e3.toLowerCase();
    let r4 = t3.indexOf(this._agsRest);
    return -1 === r4 && this._isAdminResource(e3) && (r4 = this._agsAdmin.test(e3) ? e3.replace(this._agsAdmin, "$1").length : e3.search(this._adminSvcs)), -1 !== r4 || a2(t3) || (r4 = t3.indexOf("/sharing")), -1 === r4 && t3.endsWith("/") && (r4 = t3.length - 1), r4 > -1 ? e3.slice(0, r4) : e3;
  }
  _hasSameServerInstance(e3, t3) {
    return e3.endsWith("/") && (e3 = e3.slice(0, -1)), e3 = e3.toLowerCase(), t3 = this._getServerInstanceRoot(t3).toLowerCase(), e3 = r2(e3), t3 = r2(t3), (e3 = e3.slice(Math.max(0, e3.indexOf(":")))) === (t3 = t3.slice(Math.max(0, t3.indexOf(":"))));
  }
  _sanitizeUrl(e3) {
    const r4 = (s.request.proxyUrl || "").toLowerCase(), s8 = r4 ? e3.toLowerCase().indexOf(r4 + "?") : -1;
    return -1 !== s8 && (e3 = e3.slice(s8 + r4.length + 1)), e3 = K(e3), I(e3).path;
  }
  _isRESTService(e3) {
    return e3.includes(this._agsRest);
  }
  _isAdminResource(e3) {
    return this._agsAdmin.test(e3) || this._adminSvcs.test(e3);
  }
  _isServerRsrc(e3) {
    return this._isRESTService(e3) || this._isAdminResource(e3);
  }
  _isIdenticalService(e3, t3) {
    let r4 = false;
    if (this._isRESTService(e3) && this._isRESTService(t3)) {
      const s8 = this._getSuffix(e3).toLowerCase(), i5 = this._getSuffix(t3).toLowerCase();
      if (r4 = s8 === i5, !r4) {
        const e4 = /(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;
        r4 = s8.replaceAll(e4, "$1") === i5.replaceAll(e4, "$1");
      }
    } else this._isAdminResource(e3) && this._isAdminResource(t3) ? r4 = true : this._isServerRsrc(e3) || this._isServerRsrc(t3) || !this._isPortalDomain(e3) || (r4 = true);
    return r4;
  }
  _isPortalDomain(e3) {
    const r4 = new x(e3.toLowerCase()), s8 = this._portalConfig;
    let i5 = this._gwDomains.some((e4) => e4.regex.test(r4.uri));
    return !i5 && s8 && (i5 = this._hasSameServerInstance(this._getServerInstanceRoot(s8.restBaseUrl), r4.uri)), i5 || s.portalUrl && (i5 = F(r4, s.portalUrl, true)), i5 || (i5 = this._portals.some((e4) => this._hasSameServerInstance(e4, r4.uri))), i5 = i5 || this._agsPortal.test(r4.path), i5;
  }
  _isIdProvider(e3, t3) {
    let r4 = -1, s8 = -1;
    this._gwDomains.forEach((i6, o2) => {
      -1 === r4 && i6.regex.test(e3) && (r4 = o2), -1 === s8 && i6.regex.test(t3) && (s8 = o2);
    });
    let i5 = false;
    if (r4 > -1 && s8 > -1 && (0 === r4 || 4 === r4 ? 0 !== s8 && 4 !== s8 || (i5 = true) : 1 === r4 ? 1 !== s8 && 2 !== s8 || (i5 = true) : 2 === r4 ? 2 === s8 && (i5 = true) : 3 === r4 && 3 === s8 && (i5 = true)), !i5) {
      const r5 = this.findServerInfo(t3), s9 = r5 == null ? void 0 : r5.owningSystemUrl;
      s9 && C(r5) && this._isPortalDomain(s9) && this._isIdProvider(e3, s9) && (i5 = true);
    }
    return i5;
  }
  _getIdenticalSvcIdx(e3, t3) {
    let r4 = -1;
    for (let s8 = 0; s8 < t3.resources.length; s8++) {
      const i5 = t3.resources[s8];
      if (this._isIdenticalService(e3, i5)) {
        r4 = s8;
        break;
      }
    }
    return r4;
  }
  _getSuffix(e3) {
    return e3.replace(this._regexSDirUrl, "").replace(this._regexServerType, "$1");
  }
  _getTokenSvcUrl(e3) {
    let t3, r4, i5;
    if (this._isRESTService(e3) || this._isAdminResource(e3)) {
      const i6 = this._getServerInstanceRoot(e3);
      return t3 = i6 + "/admin/generateToken", r4 = P(e3 = i6 + "/rest/info", { query: { f: "json" } }).then((e4) => e4.data), { adminUrl: t3, promise: r4 };
    }
    if (this._isPortalDomain(e3)) {
      let t4 = "";
      if (this._gwDomains.some((r5) => (r5.regex.test(e3) && (t4 = r5.tokenServiceUrl), !!t4)), t4 || this._portals.some((r5) => (this._hasSameServerInstance(r5, e3) && (t4 = r5 + this._gwTokenUrl), !!t4)), t4 || (i5 = e3.toLowerCase().indexOf("/sharing"), -1 !== i5 && (t4 = e3.slice(0, i5) + this._gwTokenUrl)), t4 || (t4 = this._getOrigin(e3) + this._gwTokenUrl), t4) {
        const r5 = new x(e3).port;
        /^http:\/\//i.test(e3) && "7080" === r5 && (t4 = t4.replace(/:7080/i, ":7443")), t4 = t4.replace(/http:/i, "https:");
      }
      return t4;
    }
  }
  _processOAuthResponseParams(e3, t3, r4) {
    const s8 = t3._oAuthCred;
    if (e3.code) {
      const i6 = s8.codeVerifier;
      return s8.codeVerifier = null, s8.stateUID = null, s8.save(), this._getOAuthToken(r4.server, e3.code, t3.appId, this._getRedirectURI(t3, true), i6).then((i7) => {
        const o2 = new E({ userId: i7.username, server: r4.server ?? void 0, token: i7.access_token, expires: Date.now() + 1e3 * i7.expires_in, ssl: i7.ssl, oAuthState: e3.state, _oAuthCred: s8 });
        return t3.userId = o2.userId, s8.storage = i7.persist ? b : q, s8.refreshToken = i7.refresh_token, s8.token = null, s8.expires = i7.refresh_token_expires_in ? Date.now() + 1e3 * i7.refresh_token_expires_in : null, s8.userId = o2.userId, s8.ssl = o2.ssl, s8.save(), o2;
      });
    }
    const i5 = new E({ userId: e3.username, server: r4.server ?? void 0, token: e3.access_token, expires: Date.now() + 1e3 * Number(e3.expires_in), ssl: "true" === e3.ssl, oAuthState: e3.state, _oAuthCred: s8 });
    return t3.userId = i5.userId, s8.storage = e3.persist ? b : q, s8.refreshToken = null, s8.token = i5.token, s8.expires = i5.expires, s8.userId = i5.userId, s8.ssl = i5.ssl, s8.save(), Promise.resolve(i5);
  }
  _processOAuthPopupParams(e3) {
    var _a;
    const t3 = this._oAuthDfd;
    if (this._oAuthDfd = null, t3) if (clearInterval(this._oAuthIntervalId), (_a = this._oAuthOnPopupHandle) == null ? void 0 : _a.remove(), e3.error) {
      const r4 = "access_denied" === e3.error, s8 = new s2(r4 ? "identity-manager:user-aborted" : "identity-manager:authentication-failed", r4 ? "ABORTED" : "OAuth: " + e3.error + " - " + e3.error_description);
      t3.reject(s8);
    } else this._processOAuthResponseParams(e3, t3.oinfo_, t3.sinfo_).then((e4) => {
      t3.resolve(e4);
    }).catch((e4) => {
      t3.reject(e4);
    });
  }
  _setOAuthResponseQueryString(e3) {
    e3 && ("?" === e3.charAt(0) && (e3 = e3.slice(1)), this._processOAuthPopupParams(A(e3)));
  }
  async _exchangeToken(e3, t3, r4) {
    return (await P(`${e3}/sharing/rest/oauth2/exchangeToken`, { authMode: "anonymous", method: "post", query: { f: "json", client_id: t3, token: r4 } })).data.token;
  }
  async _getPlatformSelf(e3, t3) {
    var _a;
    if (this._getPlatformSelfError && Date.now() - this._getPlatformSelfError[1] < 1e3) throw this._getPlatformSelfError[0];
    e3 = e3.replace(/^http:/i, "https:");
    try {
      const r4 = await P(`${e3}/sharing/rest/oauth2/platformSelf`, { authMode: "anonymous", headers: { "X-Esri-Auth-Client-Id": t3, "X-Esri-Auth-Redirect-Uri": window.location.href.replace(/#.*$/, "") }, method: "post", query: { f: "json", expiration: 30 }, withCredentials: true });
      return this._getPlatformSelfError = null, r4.data;
    } catch (r4) {
      throw "OAUTH_0066" === ((_a = r4.details) == null ? void 0 : _a.messageCode) && (this._getPlatformSelfError = [r4, Date.now()]), r4;
    }
  }
  _getPortalSelf(e3, t3) {
    let r4;
    if (this._gwDomains.some((t4) => (t4.regex.test(e3) && (r4 = t4.customBaseUrl), !!r4)), r4) return Promise.resolve({ allSSL: true, currentVersion: "8.4", customBaseUrl: r4, portalMode: "multitenant", supportsOAuth: true });
    this._appOrigin.startsWith("https:") ? e3 = e3.replace(/^http:/i, "https:").replace(/:7080/i, ":7443") : /^http:/i.test(t3) && (e3 = e3.replace(/^https:/i, "http:").replace(/:7443/i, ":7080"));
    return P(e3, { query: { f: "json" }, authMode: "anonymous", withCredentials: true }).then((e4) => e4.data);
  }
  _doPortalSignIn(e3) {
    const t3 = this._portalConfig, r4 = window.location.href, s8 = this.findServerInfo(e3);
    return !(!t3 && !this._isPortalDomain(r4) || !(s8 ? s8.hasPortal || s8.owningSystemUrl && this._isPortalDomain(s8.owningSystemUrl) : this._isPortalDomain(e3)) || !(this._isIdProvider(r4, e3) || t3 && (this._hasSameServerInstance(this._getServerInstanceRoot(t3.restBaseUrl), e3) || this._isIdProvider(t3.restBaseUrl, e3)) || F(r4, e3, true)));
  }
  _checkProtocol(e3, t3, r4, s8) {
    let o2 = true;
    const n2 = s8 ? t3.adminTokenServiceUrl : t3.tokenServiceUrl;
    if (n2.trim().toLowerCase().startsWith("https:") && !this._appOrigin.startsWith("https:") && H(n2) && (o2 = !!this._protocolFunc && !!this._protocolFunc({ resourceUrl: e3, serverInfo: t3 }), !o2)) {
      r4(new s2("identity-manager:aborted", "Aborted the Sign-In process to avoid sending password over insecure connection."));
    }
    return o2;
  }
  _enqueue(e3, t3, r4, s8, i5, o2) {
    return s8 || (s8 = L()), s8.resUrl_ = e3, s8.sinfo_ = t3, s8.options_ = r4, s8.admin_ = i5, s8.refresh_ = o2, this._busy ? this._hasSameServerInstance(this._getServerInstanceRoot(e3), this._busy.resUrl_) ? (this._oAuthDfd && this._oAuthDfd.oAuthWin_ && this._oAuthDfd.oAuthWin_.focus(), this._soReqs.push(s8)) : this._xoReqs.push(s8) : this._doSignIn(s8), s8.promise;
  }
  _doSignIn(e3) {
    this._busy = e3, this._rejectOnPersistedPageShow = false;
    const t3 = (t4) => {
      var _a;
      const r5 = (_a = e3.options_) == null ? void 0 : _a.resource, s9 = e3.resUrl_, i5 = e3.refresh_;
      let o3 = false;
      this.credentials.includes(t4) || (i5 && this.credentials.includes(i5) ? (i5.userId = t4.userId, i5.token = t4.token, i5.expires = t4.expires, i5.validity = t4.validity, i5.ssl = t4.ssl, i5.creationTime = t4.creationTime, o3 = true, t4 = i5) : this.credentials.push(t4)), t4.resources || (t4.resources = []), t4.resources.includes(r5 || s9) || t4.resources.push(r5 || s9), t4.scope = this._isServerRsrc(s9) ? "server" : "portal", t4.emitTokenChange();
      const n2 = this._soReqs, a4 = {};
      this._soReqs = [], n2.forEach((e4) => {
        if (!this._isIdenticalService(s9, e4.resUrl_)) {
          const r6 = this._getSuffix(e4.resUrl_);
          a4[r6] || (a4[r6] = true, t4.resources.push(e4.resUrl_));
        }
      }), e3.resolve(t4), n2.forEach((e4) => {
        this._hasSameServerInstance(this._getServerInstanceRoot(s9), e4.resUrl_) ? e4.resolve(t4) : this._soReqs.push(e4);
      }), this._busy = e3.resUrl_ = e3.sinfo_ = e3.refresh_ = null, o3 || this.emit("credential-create", { credential: t4 }), this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, r4 = (t4) => {
      e3.reject(t4), this._busy = e3.resUrl_ = e3.sinfo_ = e3.refresh_ = null, this._soReqs.length ? this._doSignIn(this._soReqs.shift()) : this._xoReqs.length && this._doSignIn(this._xoReqs.shift());
    }, s8 = (o3, a4, h2, l3) => {
      var _a, _b, _c;
      const d3 = e3.sinfo_, u2 = !e3.options_ || false !== e3.options_.prompt, _2 = d3.hasPortal && this._findOAuthInfo(e3.resUrl_);
      let f, g;
      if (o3) t3(new E({ userId: o3, server: d3.server ?? void 0, token: h2 ?? void 0, expires: null != l3 ? Number(l3) : null, ssl: !!a4 }));
      else if (window !== window.parent && ((_a = this._appUrlObj.query) == null ? void 0 : _a["arcgis-auth-origin"]) && ((_b = this._appUrlObj.query) == null ? void 0 : _b["arcgis-auth-portal"]) && this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]), e3.resUrl_)) {
        window.parent.postMessage({ type: "arcgis:auth:requestCredential" }, this._appUrlObj.query["arcgis-auth-origin"]);
        const s9 = o(window, "message", (e4) => {
          e4.source === window.parent && e4.data && ("arcgis:auth:credential" === e4.data.type ? (s9.remove(), e4.data.credential.expires < Date.now() ? r4(new s2("identity-manager:credential-request-failed", "Parent application's token has expired.")) : t3(new E(e4.data.credential))) : "arcgis:auth:error" === e4.data.type && (s9.remove(), "tokenExpiredError" === e4.data.error.name ? r4(new s2("identity-manager:credential-request-failed", "Parent application's token has expired.")) : r4(s2.fromJSON(e4.data.error))));
        });
        m2((_c = e3.options_) == null ? void 0 : _c.signal, () => {
          s9.remove();
        });
      } else if (_2) {
        let o4 = _2._oAuthCred;
        if (!o4) {
          const e4 = new e2(_2, b), t4 = new e2(_2, q);
          e4.isValid() && t4.isValid() ? e4.expires > t4.expires ? (o4 = e4, t4.destroy()) : (o4 = t4, e4.destroy()) : o4 = e4.isValid() ? e4 : t4, _2._oAuthCred = o4;
        }
        if (o4.isValid()) {
          f = new E({ userId: o4.userId ?? void 0, server: d3.server ?? void 0, token: o4.token ?? void 0, expires: o4.expires, ssl: o4.ssl ?? void 0, _oAuthCred: o4 });
          const i5 = _2.appId !== o4.appId && this._doPortalSignIn(e3.resUrl_);
          i5 || o4.refreshToken ? (e3._pendingDfd = o4.refreshToken ? this._getOAuthToken(d3.server, o4.refreshToken, o4.appId).then((e4) => (f.expires = Date.now() + 1e3 * e4.expires_in, f.token = e4.access_token, f)) : Promise.resolve(f), e3._pendingDfd.then((e4) => i5 ? this._exchangeToken(e4.server, _2.appId, e4.token).then((t4) => (e4.token = t4, e4)).catch(() => e4) : e4).then((e4) => {
            t3(e4);
          }).catch((e4) => {
            var _a2;
            const t4 = (_a2 = e4.details) == null ? void 0 : _a2.httpStatus;
            t4 > 0 && 404 !== t4 ? (o4.destroy(), s8()) : r4(e4);
          })) : t3(f);
        } else if (this._oAuthLocationParams && this._hasSameServerInstance(_2.portalUrl, this._oAuthLocationParams.state.portalUrl) && (this._oAuthLocationParams.access_token || this._oAuthLocationParams.code && this._oAuthLocationParams.state.uid === o4.stateUID && o4.codeVerifier)) {
          const s9 = this._oAuthLocationParams;
          this._oAuthLocationParams = null, e3._pendingDfd = this._processOAuthResponseParams(s9, _2, d3).then((e4) => {
            t3(e4);
          }).catch(r4);
        } else {
          const s9 = () => {
            u2 ? e3._pendingDfd = this.oAuthSignIn(e3.resUrl_, d3, _2, e3.options_).then(t3, r4) : (g = new s2("identity-manager:not-authenticated", "User is not signed in."), r4(g));
          };
          this._doPortalSignIn(e3.resUrl_) ? e3._pendingDfd = this._getPlatformSelf(d3.server, _2.appId).then((e4) => {
            F(e4.portalUrl, this._appOrigin, true) ? (f = new E({ userId: e4.username, server: d3.server ?? void 0, expires: Date.now() + 1e3 * e4.expires_in, token: e4.token }), t3(f)) : s9();
          }).catch(s9) : s9();
        }
      } else if (u2) {
        if (this._checkProtocol(e3.resUrl_, d3, r4, e3.admin_)) {
          let s9 = e3.options_;
          e3.admin_ && (s9 = s9 || {}, s9.isAdmin = true), e3._pendingDfd = this.signIn(e3.resUrl_, d3, s9).then(t3, r4);
        }
      } else g = new s2("identity-manager:not-authenticated", "User is not signed in."), r4(g);
    }, o2 = () => {
      const s9 = e3.sinfo_, i5 = s9.owningSystemUrl, o3 = e3.options_;
      let n2, a4, h2, l3;
      if (o3 && (n2 = o3.token, a4 = o3.error, h2 = o3.prompt), l3 = this._findCredential(i5, { token: n2, resource: e3.resUrl_ }), !l3) {
        for (const e4 of this.credentials) if (this._isIdProvider(i5, e4.server)) {
          l3 = e4;
          break;
        }
      }
      if (l3) {
        const i6 = this.findCredential(e3.resUrl_, l3.userId);
        if (i6) t3(i6);
        else if (D(s9, this._legacyFed)) {
          const e4 = l3.toJSON();
          e4.server = s9.server, e4.resources = null, t3(new E(e4));
        } else {
          (e3._pendingDfd = this.generateToken(this.findServerInfo(l3.server), null, { serverUrl: e3.resUrl_, token: l3.token, signal: e3.options_.signal, ssl: l3.ssl })).then((r5) => {
            t3(new E({ userId: l3 == null ? void 0 : l3.userId, server: s9.server ?? void 0, token: r5.token, expires: null != r5.expires ? Number(r5.expires) : null, ssl: !!r5.ssl, isAdmin: e3.admin_, validity: r5.validity }));
          }, r4);
        }
      } else {
        this._busy = null, n2 && (e3.options_.token = null);
        (e3._pendingDfd = this.getCredential(i5.replace(/\/?$/, "/sharing"), { resource: e3.resUrl_, owningTenant: s9.owningTenant, signal: e3.options_.signal, token: n2, error: a4, prompt: h2 })).then(() => {
          this._enqueue(e3.resUrl_, e3.sinfo_, e3.options_, e3, e3.admin_);
        }, (t4) => {
          e3.resUrl_ = e3.sinfo_ = e3.refresh_ = null, e3.reject(t4);
        });
      }
    };
    this._errbackFunc = r4;
    const a3 = e3.sinfo_.owningSystemUrl, l2 = this._isServerRsrc(e3.resUrl_), d2 = e3.sinfo_._restInfoPms;
    d2 ? d2.promise.then((t4) => {
      const r5 = e3.sinfo_;
      if (r5._restInfoPms) {
        r5.adminTokenServiceUrl = r5._restInfoPms.adminUrl, r5._restInfoPms = null, r5.tokenServiceUrl = (t("authInfo.tokenServicesUrl", t4) || t("authInfo.tokenServiceUrl", t4) || t("tokenServiceUrl", t4)) ?? null, r5.shortLivedTokenValidity = t("authInfo.shortLivedTokenValidity", t4) ?? null, r5.currentVersion = t4.currentVersion, r5.owningTenant = t4.owningTenant;
        const e4 = r5.owningSystemUrl = t4.owningSystemUrl;
        e4 && this._portals.push(e4);
      }
      l2 && r5.owningSystemUrl ? o2() : s8();
    }, () => {
      e3.sinfo_._restInfoPms = null;
      const t4 = new s2("identity-manager:server-identification-failed", "Unknown resource - could not find token service endpoint.");
      r4(t4);
    }) : l2 && a3 ? o2() : e3.sinfo_._selfReq ? e3.sinfo_._selfReq.selfDfd.then((t4) => {
      var _a;
      const r5 = {};
      let s9, i5, o3, n2;
      return t4 && (s9 = (_a = t4.user) == null ? void 0 : _a.username, r5.username = s9, r5.allSSL = t4.allSSL, i5 = t4.supportsOAuth, n2 = parseFloat(t4.currentVersion), "multitenant" === t4.portalMode && (o3 = t4.customBaseUrl), e3.sinfo_.currentVersion = n2), e3.sinfo_.webTierAuth = !!s9, s9 && this.normalizeWebTierAuth ? this.generateToken(e3.sinfo_, null, { ssl: r5.allSSL }).catch(() => null).then((e4) => (r5.portalToken = e4 == null ? void 0 : e4.token, r5.tokenExpiration = e4 == null ? void 0 : e4.expires, r5)) : !s9 && i5 && n2 >= 4.4 && !this._findOAuthInfo(e3.resUrl_) ? this._generateOAuthInfo({ portalUrl: e3.sinfo_.server, customBaseUrl: o3, owningTenant: e3.sinfo_._selfReq.owningTenant }).catch(() => null).then(() => r5) : r5;
    }).catch(() => null).then((t4) => {
      e3.sinfo_._selfReq = null, t4 ? s8(t4.username, t4.allSSL, t4.portalToken, t4.tokenExpiration) : s8();
    }) : s8();
  }
  _generateOAuthInfo(e3) {
    let t3, r4 = null, i5 = e3.portalUrl;
    const o2 = e3.customBaseUrl, n2 = e3.owningTenant, a3 = !this._defaultOAuthInfo && this._createDefaultOAuthInfo && !this._hasTestedIfAppIsOnPortal;
    if (a3) {
      r4 = window.location.href;
      let e4 = r4.indexOf("?");
      e4 > -1 && (r4 = r4.slice(0, e4)), e4 = r4.search(/\/(apps|home)\//), r4 = e4 > -1 ? r4.slice(0, e4) : null;
    }
    return a3 && r4 ? (this._hasTestedIfAppIsOnPortal = true, t3 = P(r4 + "/sharing/rest", { query: { f: "json" } }).then(() => {
      this._defaultOAuthInfo = new i3({ appId: "arcgisonline", popupCallbackUrl: r4 + "/home/oauth-callback.html" });
    })) : t3 = Promise.resolve(), t3.then(() => {
      if (this._defaultOAuthInfo) return i5 = i5.replace(/^http:/i, "https:"), P(i5 + "/sharing/rest/oauth2/validateRedirectUri", { query: { accountId: n2, client_id: this._defaultOAuthInfo.appId, redirect_uri: _(this._defaultOAuthInfo.popupCallbackUrl), f: "json" } }).then((e4) => {
        if (e4.data.valid) {
          const t4 = this._defaultOAuthInfo.clone();
          e4.data.urlKey && o2 ? t4.portalUrl = "https://" + e4.data.urlKey.toLowerCase() + "." + o2 : t4.portalUrl = i5, t4.popup = window !== window.top || !(F(i5, this._appOrigin) || this._gwDomains.some((e5) => e5.regex.test(i5) && e5.regex.test(this._appOrigin))), this.oAuthInfos.push(t4);
        }
      });
    });
  }
  _doOAuthSignIn(e3, t3, r4, s8) {
    const o2 = r4._oAuthCred, a3 = { portalUrl: r4.portalUrl };
    !r4.popup && r4.preserveUrlHash && window.location.hash && (a3.hash = window.location.hash), o2.stateUID && (a3.uid = o2.stateUID);
    const h2 = { client_id: r4.appId, response_type: o2.codeVerifier ? "code" : "token", state: JSON.stringify(a3), expiration: r4.expiration, locale: r4.locale, redirect_uri: this._getRedirectURI(r4, !!o2.codeVerifier) };
    r4.forceLogin && (h2.force_login = true), r4.forceUserId && r4.userId && (h2.prepopulatedusername = r4.userId), !r4.popup && this._doPortalSignIn(e3) && (h2.redirectToUserOrgUrl = true), o2.codeVerifier && (h2.code_challenge = s8 || o2.codeVerifier, h2.code_challenge_method = s8 ? "S256" : "plain");
    const l2 = r4.portalUrl.replace(/^http:/i, "https:") + "/sharing/oauth2/authorize", c4 = l2 + "?" + v(h2);
    if (r4.popup) {
      const e4 = window.open(c4, "esriJSAPIOAuth", r4.popupWindowFeatures);
      if (e4) e4.focus(), this._oAuthDfd.oAuthWin_ = e4, this._oAuthIntervalId = setInterval(() => {
        if (e4.closed) {
          clearInterval(this._oAuthIntervalId), this._oAuthOnPopupHandle.remove();
          const e5 = this._oAuthDfd;
          if (e5) {
            const t4 = new s2("identity-manager:user-aborted", "ABORTED");
            e5.reject(t4);
          }
        }
      }, 500), this._oAuthOnPopupHandle = o(window, ["arcgis:auth:hash", "arcgis:auth:location:search"], (e5) => {
        "arcgis:auth:hash" === e5.type ? this.setOAuthResponseHash(e5.detail) : this._setOAuthResponseQueryString(e5.detail);
      });
      else {
        const e5 = new s2("identity-manager:popup-blocked", "ABORTED");
        this._oAuthDfd.reject(e5);
      }
    } else this._rejectOnPersistedPageShow = true, this._oAuthRedirectFunc ? this._oAuthRedirectFunc({ authorizeParams: h2, authorizeUrl: l2, resourceUrl: e3, serverInfo: t3, oAuthInfo: r4 }) : window.location.href = c4;
  }
  _getRedirectURI(e3, t3) {
    const r4 = window.location.href.replace(/#.*$/, "");
    if (e3.popup) return _(e3.popupCallbackUrl);
    if (t3) {
      const e4 = I(r4);
      return e4.query && ["code", "error", "error_description", "message_code", "persist", "state"].forEach((t4) => {
        delete e4.query[t4];
      }), Et(e4.path, e4.query);
    }
    return r4;
  }
};
j.prototype.declaredClass = "esri.identity.IdentityManagerBase";
var E = class extends i2.EventedAccessor {
  constructor(e3) {
    super(e3), this._oAuthCred = null, this.tokenRefreshBuffer = 2, (e3 == null ? void 0 : e3._oAuthCred) && (this._oAuthCred = e3._oAuthCred);
  }
  initialize() {
    this.resources = this.resources || [], null == this.creationTime && (this.creationTime = Date.now());
  }
  refreshToken() {
    const e3 = s4, t3 = e3.findServerInfo(this.server), s8 = t3 == null ? void 0 : t3.owningSystemUrl, i5 = !!s8 && "server" === this.scope, o2 = i5 && D(t3, e3._legacyFed), n2 = t3.webTierAuth, a3 = n2 && e3.normalizeWebTierAuth, h2 = R[this.server], l2 = h2 == null ? void 0 : h2[this.userId];
    let c4, d2 = this.resources && this.resources[0], u2 = i5 ? e3.findServerInfo(s8) : null, p3 = { username: this.userId, password: l2 };
    if (n2 && !a3) return;
    i5 && !u2 && e3.serverInfos.some((t4) => (e3._isIdProvider(s8, t4.server) && (u2 = t4), !!u2));
    const _2 = u2 ? e3.findCredential(u2.server, this.userId) : null;
    if (!i5 || _2) {
      if (!o2) {
        if (i5) c4 = { serverUrl: d2, token: _2 == null ? void 0 : _2.token, ssl: _2 == null ? void 0 : _2.ssl };
        else if (a3) p3 = null, c4 = { ssl: this.ssl };
        else {
          if (!l2) {
            let r4;
            return d2 && (d2 = e3._sanitizeUrl(d2), this._enqueued = 1, r4 = e3._enqueue(d2, t3, null, null, this.isAdmin, this), r4.then(() => {
              this._enqueued = 0, this.refreshServerTokens();
            }).catch(() => {
              this._enqueued = 0;
            })), r4;
          }
          this.isAdmin && (c4 = { isAdmin: true });
        }
        return e3.generateToken(i5 ? u2 : t3, i5 ? null : p3, c4).then((e4) => {
          this.token = e4.token, this.expires = null != e4.expires ? Number(e4.expires) : null, this.creationTime = Date.now(), this.validity = e4.validity, this.emitTokenChange(), this.refreshServerTokens();
        }).catch(() => {
        });
      }
      _2 == null ? void 0 : _2.refreshToken();
    }
  }
  refreshServerTokens() {
    if ("portal" === this.scope) {
      const e3 = s4;
      e3.credentials.forEach((t3) => {
        const r4 = e3.findServerInfo(t3.server), s8 = r4 == null ? void 0 : r4.owningSystemUrl;
        t3 !== this && t3.userId === this.userId && s8 && "server" === t3.scope && (e3._hasSameServerInstance(this.server, s8) || e3._isIdProvider(s8, this.server)) && (D(r4, e3._legacyFed) ? (t3.token = this.token, t3.expires = this.expires, t3.creationTime = this.creationTime, t3.validity = this.validity, t3.emitTokenChange()) : t3.refreshToken());
      });
    }
  }
  emitTokenChange(e3) {
    clearTimeout(this._refreshTimer);
    const t3 = s4, s8 = this.server ? t3.findServerInfo(this.server) : null, i5 = s8 == null ? void 0 : s8.owningSystemUrl, o2 = i5 ? t3.findServerInfo(i5) : null;
    false === e3 || i5 && "portal" !== this.scope && (!(o2 == null ? void 0 : o2.webTierAuth) || t3.normalizeWebTierAuth) || null == this.expires && null == this.validity || this._startRefreshTimer(), this.emit("token-change");
  }
  destroy() {
    this.userId = this.server = this.token = this.expires = this.validity = this.resources = this.creationTime = null, this._oAuthCred && (this._oAuthCred.destroy(), this._oAuthCred = null);
    const e3 = s4, t3 = e3.credentials.indexOf(this);
    t3 > -1 && e3.credentials.splice(t3, 1), this.emitTokenChange(), this.emit("destroy");
  }
  toJSON() {
    const e3 = l({ userId: this.userId, server: this.server, token: this.token, expires: this.expires, validity: this.validity, ssl: this.ssl, isAdmin: this.isAdmin, creationTime: this.creationTime, scope: this.scope }), t3 = this.resources;
    return t3 && t3.length > 0 && (e3.resources = t3.slice()), e3;
  }
  _startRefreshTimer() {
    clearTimeout(this._refreshTimer);
    const e3 = 6e4 * this.tokenRefreshBuffer, t3 = 2 ** 31 - 1;
    let r4 = (this.validity ? this.creationTime + 6e4 * this.validity : this.expires) - Date.now();
    r4 < 0 ? r4 = 0 : r4 > t3 && (r4 = t3), this._refreshTimer = setTimeout(this.refreshToken.bind(this), r4 > e3 ? r4 - e3 : r4);
  }
};
r([m()], E.prototype, "creationTime", void 0), r([m()], E.prototype, "expires", void 0), r([m()], E.prototype, "isAdmin", void 0), r([m()], E.prototype, "oAuthState", void 0), r([m()], E.prototype, "resources", void 0), r([m()], E.prototype, "scope", void 0), r([m()], E.prototype, "server", void 0), r([m()], E.prototype, "ssl", void 0), r([m()], E.prototype, "token", void 0), r([m()], E.prototype, "tokenRefreshBuffer", void 0), r([m()], E.prototype, "userId", void 0), r([m()], E.prototype, "validity", void 0), E = r([a("esri.identity.Credential")], E);

// node_modules/@arcgis/core/identity/IdentityManager.js
var r3 = class extends j {
};
r3.prototype.declaredClass = "esri.identity.IdentityManager";
var s7 = new r3();
i(s7);
export {
  s7 as default
};
//# sourceMappingURL=IdentityManager-W2YIIM3L.js.map
