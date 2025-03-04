import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  bt,
  wt
} from "./chunk-QD55HJQW.js";
import {
  E,
  LitElement,
  S,
  T,
  css,
  html,
  m,
  nothing,
  safeClassMap,
  svg
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/logger.js
var s = /* @__PURE__ */ new Set();
var d = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 4,
  error: 8,
  off: 10
};
function p(e) {
  return d[e] >= d[E];
}
function r(e, ...n) {
  if (!p(e))
    return;
  console[e].call(this, "%ccalcite", "background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;", ...n);
}
var a;
var m2 = {
  debug: (e) => r("debug", e),
  info: (e) => r("info", e),
  warn: (e) => r("warn", e),
  error: (e) => r("error", e),
  trace: (e) => r("trace", e),
  deprecated: $
};
function $(e, { component: n, name: t, suggested: o, removalVersion: i }) {
  const l = `${e}:${e === "component" ? "" : n}${t}`;
  if (s.has(l))
    return;
  s.add(l);
  const c = Array.isArray(o);
  c && !a && (a = new Intl.ListFormat("en", { style: "long", type: "disjunction" }));
  const f = `[${t}] ${e} is deprecated and will be removed in ${i === "future" ? "a future version" : `v${i}`}.${o ? ` Use ${c ? a.format(o.map((u2) => `"${u2}"`)) : `"${o}"`} instead.` : ""}`;
  r("warn", f);
}

// node_modules/@esri/calcite-components/dist/components/calcite-icon/customElement.js
var P = {
  flipRtl: "flip-rtl"
};
var u = {};
var d2 = {};
var m3 = {
  s: 16,
  m: 24,
  l: 32
};
function b2({ icon: e, scale: t }) {
  const s2 = m3[t], i = L(e), n = i.charAt(i.length - 1) === "F";
  return `${n ? i.substring(0, i.length - 1) : i}${s2}${n ? "F" : ""}`;
}
async function O(e) {
  const t = b2(e), s2 = g(t);
  if (s2)
    return s2;
  d2[t] || (d2[t] = fetch(T(`./assets/icon/${t}.json`)).then((n) => n.json()).catch(() => (m2.error(`${e.icon} (${e.scale}) icon failed to load`), "")));
  const i = await d2[t];
  return u[t] = i, i;
}
function U(e) {
  return g(b2(e));
}
function g(e) {
  return u[e];
}
function L(e) {
  const t = !isNaN(Number(e.charAt(0))), s2 = e.split("-");
  if (s2.length > 0) {
    const n = /[a-z]/i;
    e = s2.map((o, r2) => o.replace(n, function(a2, h) {
      return r2 === 0 && h === 0 ? a2 : a2.toUpperCase();
    })).join("");
  }
  return t ? `i${e}` : e;
}
var R = css`:host{display:inline-flex;color:var(--calcite-icon-color, var(--calcite-ui-icon-color, currentColor))}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}`;
var _A = class _A extends LitElement {
  constructor() {
    super(...arguments), this.visible = false, this.flipRtl = false, this.icon = null, this.preload = false, this.scale = "m";
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    if (super.connectedCallback(), this.preload) {
      this.visible = true, this.loadIconPathData();
      return;
    }
    this.visible || this.waitUntilVisible(() => {
      this.visible = true, this.loadIconPathData();
    });
  }
  willUpdate(t) {
    (t.has("icon") && (this.hasUpdated || this.icon !== null) || t.has("scale") && (this.hasUpdated || this.scale !== "m")) && this.loadIconPathData();
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.intersectionObserver) == null ? void 0 : _a.disconnect(), this.intersectionObserver = null;
  }
  // #endregion
  // #region Private Methods
  async loadIconPathData() {
    const { icon: t, scale: s2, visible: i } = this;
    if (!m() || !t || !i)
      return;
    const n = { icon: t, scale: s2 }, o = U(n) || await O(n);
    t === this.icon && (this.pathData = o);
  }
  waitUntilVisible(t) {
    if (this.intersectionObserver = b("intersection", (s2) => {
      s2.forEach((i) => {
        i.isIntersecting && (this.intersectionObserver.disconnect(), this.intersectionObserver = null, t());
      });
    }, { rootMargin: "50px" }), !this.intersectionObserver) {
      t();
      return;
    }
    this.intersectionObserver.observe(this.el);
  }
  // #endregion
  // #region Rendering
  render() {
    const { el: t, flipRtl: s2, pathData: i, scale: n, textLabel: o } = this, r2 = bt(t), l = m3[n], a2 = !!o, h = [].concat(i || "");
    return this.el.ariaHidden = wt(!a2), this.el.ariaLabel = a2 ? o : null, this.el.role = a2 ? "img" : null, html`<svg aria-hidden=true class=${safeClassMap({
      [P.flipRtl]: r2 === "rtl" && s2,
      svg: true
    })} fill=currentColor height=100% viewBox=${`0 0 ${l} ${l}`} width=100% xmlns=http://www.w3.org/2000/svg>${h.map((c) => typeof c == "string" ? svg`<path d=${c ?? nothing} />` : svg`<path d=${c.d ?? nothing} opacity=${("opacity" in c ? c.opacity : 1) ?? nothing} />`)}</svg>`;
  }
};
_A.properties = { pathData: 16, visible: 16, flipRtl: 7, icon: 3, preload: 7, scale: 3, textLabel: 1 };
_A.styles = R;
var A = _A;
S("calcite-icon", A);

export {
  A
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/logger.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-icon/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-DXGBUQNN.js.map
