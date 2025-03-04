import {
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  Ct
} from "./chunk-QD55HJQW.js";
import {
  LitElement,
  S,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-scrim/customElement.js
var n = {
  scrim: "scrim",
  content: "content"
};
var a = {
  s: 72,
  // Less than 72px.
  // medium is assumed default.
  l: 480
  // Greater than or equal to 480px.
};
var p = css`:host{position:absolute;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity: 0 }to{--tw-text-opacity: 1 }}.scrim{position:absolute;inset:0;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
var _u = class _u extends LitElement {
  constructor() {
    super(...arguments), this.resizeObserver = b("resize", () => this.handleResize()), this.hasContent = false, this.loading = false, this.messages = s();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.resizeObserver) == null ? void 0 : _a.observe(this.el);
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
  }
  // #endregion
  // #region Private Methods
  handleDefaultSlotChange(e) {
    this.hasContent = Ct(e);
  }
  storeLoaderEl(e) {
    this.loaderEl = e, this.handleResize();
  }
  getScale(e) {
    return e < a.s ? "s" : e >= a.l ? "l" : "m";
  }
  handleResize() {
    const { loaderEl: e, el: t } = this;
    e && (this.loaderScale = this.getScale(Math.min(t.clientHeight, t.clientWidth) ?? 0));
  }
  // #endregion
  // #region Rendering
  render() {
    const { hasContent: e, loading: t, messages: l } = this;
    return html`<div class=${safeClassMap(n.scrim)}>${t ? html`<calcite-loader .label=${l.loading} .scale=${this.loaderScale} ${ref(this.storeLoaderEl)}></calcite-loader>` : null}<div class=${safeClassMap(n.content)} .hidden=${!e}><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>`;
  }
};
_u.properties = { hasContent: 16, loaderScale: 16, loading: 7, messageOverrides: 0 };
_u.styles = p;
var u = _u;
S("calcite-scrim", u);

export {
  u
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-scrim/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-7YNOTTY2.js.map
