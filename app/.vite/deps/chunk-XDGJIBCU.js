import {
  Tt
} from "./chunk-QD55HJQW.js";
import {
  LitElement,
  S,
  css,
  html,
  setAttribute,
  stringOrBoolean
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-input-message/customElement.js
var s = {
  valid: "check-circle",
  invalid: "exclamation-mark-triangle",
  idle: "information"
};
var r = css`:host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;--calcite-input-message-spacing-value: .25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;margin-inline-end:.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
var _d = class _d extends LitElement {
  constructor() {
    super(...arguments), this.iconFlipRtl = false, this.scale = "m", this.status = "idle";
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.requestedIcon = Tt(s, this.icon, this.status);
  }
  willUpdate(t) {
    (t.has("status") && (this.hasUpdated || this.status !== "idle") || t.has("icon")) && (this.requestedIcon = Tt(s, this.icon, this.status));
  }
  // #endregion
  // #region Private Methods
  // #endregion
  // #region Rendering
  render() {
    const t = this.el.hidden;
    return setAttribute(this.el, "calcite-hydrated-hidden", t), html`${this.renderIcon(this.requestedIcon)}<slot></slot>`;
  }
  renderIcon(t) {
    if (t)
      return html`<calcite-icon class="calcite-input-message-icon" .flipRtl=${this.iconFlipRtl} .icon=${t} scale=s></calcite-icon>`;
  }
};
_d.properties = { icon: [3, { converter: stringOrBoolean }], iconFlipRtl: 7, scale: 3, status: 3 };
_d.styles = r;
var d = _d;
S("calcite-input-message", d);

export {
  d
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-input-message/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-XDGJIBCU.js.map
