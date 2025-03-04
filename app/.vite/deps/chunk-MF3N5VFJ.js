import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  s as s2
} from "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  i
} from "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  css,
  html,
  nothing2 as nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-action/customElement.js
var i2 = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  indicatorText: "indicator-text",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible",
  indicatorWithIcon: "indicator-with-icon",
  indicatorWithoutIcon: "indicator-without-icon"
};
var O = {
  tooltip: "tooltip"
};
var R = css`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;cursor:pointer;background-color:transparent;--calcite-internal-action-text-color: var(--calcite-color-text-3)}:host([drag-handle]){cursor:move;--calcite-internal-action-text-color: var(--calcite-color-border-input);--calcite-internal-action-padding-inline: var(--calcite-spacing-xxs)}:host,.button{border-radius:var(--calcite-action-corner-radius, var(--calcite-action-corner-radius-start-start, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-start-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-end, var(--calcite-corner-radius)) var(--calcite-action-corner-radius-end-start, var(--calcite-corner-radius)))}.button{position:relative;margin:0;display:flex;inline-size:auto;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-internal-action-text-color));text-align:unset;flex:1 0 auto;cursor:inherit}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)))}.button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.button:active{background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}.icon-container{pointer-events:none;margin:0;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-press, var(--calcite-action-text-color-pressed, var(--calcite-color-text-1)));background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3)))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]):host([active]) .button{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .button{font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, .5rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xxs))}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:.5rem}:host([scale=m]) .button{font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-md))}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:.75rem}:host([scale=l]) .button{font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal);padding-inline:var(--calcite-internal-action-padding-inline, 1.25rem);padding-block:var(--calcite-internal-action-padding-block, var(--calcite-spacing-xl))}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:.25rem;inline-size:1rem;position:relative}.indicator-without-icon:after{content:"";position:absolute;block-size:.5rem;inline-size:.5rem;border-radius:9999px;inset-block-end:-.275rem;inset-inline-end:-.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color, var(--calcite-action-background-color, var(--calcite-color-foreground-1)))}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{opacity:var(--calcite-opacity-disabled);background-color:var(--calcite-action-background-color-press, var(--calcite-action-background-color-press, var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
var _j = class _j extends LitElement {
  constructor() {
    super(...arguments), this.guid = `calcite-action-${i()}`, this.buttonEl = createRef(), this.buttonId = `${this.guid}-button`, this.indicatorId = `${this.guid}-indicator`, this.mutationObserver = b("mutation", () => this.requestUpdate()), this.active = false, this.appearance = "solid", this.compact = false, this.disabled = false, this.dragHandle = false, this.iconFlipRtl = false, this.indicator = false, this.loading = false, this.messages = s({ blocking: true }), this.scale = "m", this.textEnabled = false;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await r(this), (_a = this.buttonEl.value) == null ? void 0 : _a.focus();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  async load() {
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  // #endregion
  // #region Private Methods
  handleTooltipSlotChange(t) {
    const o = t.target.assignedElements({
      flatten: true
    }).filter((r2) => r2 == null ? void 0 : r2.matches("calcite-tooltip"))[0];
    o && (o.referenceElement = this.buttonEl.value);
  }
  // #endregion
  // #region Rendering
  renderTextContainer() {
    const { text: t, textEnabled: a } = this, o = {
      [i2.textContainer]: true,
      [i2.textContainerVisible]: a
    };
    return t ? keyed("text-container", html`<div class=${safeClassMap(o)}>${t}</div>`) : null;
  }
  renderIndicatorText() {
    const { indicator: t, messages: a, indicatorId: o, buttonId: r2 } = this;
    return html`<div aria-labelledby=${r2 ?? nothing} aria-live=polite class=${safeClassMap(i2.indicatorText)} id=${o ?? nothing} role=region>${t ? a.indicator : null}</div>`;
  }
  renderIconContainer() {
    var _a;
    const { loading: t, icon: a, scale: o, el: r2, iconFlipRtl: d, indicator: b2 } = this, p2 = o === "l" ? "l" : "m", h = t ? html`<calcite-loader inline .label=${this.messages.loading} .scale=${p2}></calcite-loader>` : null, l = a ? html`<calcite-icon class=${safeClassMap({ [i2.indicatorWithIcon]: b2 })} .flipRtl=${d} .icon=${a} .scale=${s2(this.scale)}></calcite-icon>` : null, s3 = h || l, u = s3 || ((_a = r2.children) == null ? void 0 : _a.length), v = html`<div class=${safeClassMap({
      [i2.slotContainer]: true,
      [i2.slotContainerHidden]: t
    })}><slot></slot></div>`;
    return u ? keyed("icon-container", html`<div aria-hidden=true class=${safeClassMap(i2.iconContainer)}>${s3}${v}</div>`) : null;
  }
  renderButton() {
    const { active: t, compact: a, disabled: o, icon: r2, loading: d, textEnabled: b2, label: p2, text: h, indicator: l, indicatorId: s3, buttonId: u, messages: v } = this, m2 = p2 || h || "", f = l ? v.indicatorLabel.replace("{label}", m2) : m2, x = {
      [i2.button]: true,
      [i2.buttonTextVisible]: b2,
      [i2.buttonCompact]: a
    }, k = html`${this.renderIconContainer()}${this.renderTextContainer()}${!r2 && l && keyed("indicator-no-icon", html`<div class=${safeClassMap(i2.indicatorWithoutIcon)}></div>`) || ""}`;
    return this.dragHandle ? html`<span aria-controls=${(l ? s3 : null) ?? nothing} .ariaBusy=${d} .ariaDisabled=${this.disabled ? this.disabled : null} .ariaLabel=${f} .ariaPressed=${t} class=${safeClassMap(x)} id=${u ?? nothing} role=button tabindex=${(this.disabled ? null : 0) ?? nothing} ${ref(this.buttonEl)}>${k}</span>` : html`<button aria-controls=${(l ? s3 : null) ?? nothing} .ariaBusy=${d} .ariaLabel=${f} .ariaPressed=${t} class=${safeClassMap(x)} .disabled=${o} id=${u ?? nothing} tabindex=${(o ? null : 0) ?? nothing} ${ref(this.buttonEl)}>${k}</button>`;
  }
  render() {
    return p({ disabled: this.disabled, children: html`${this.renderButton()}<slot name=${O.tooltip} @slotchange=${this.handleTooltipSlotChange}></slot>${this.renderIndicatorText()}` });
  }
};
_j.properties = { active: 7, alignment: 3, appearance: 3, compact: 7, disabled: 7, dragHandle: 7, icon: 3, iconFlipRtl: 7, indicator: 7, label: 1, loading: 7, messageOverrides: 0, scale: 3, text: 1, textEnabled: 7 };
_j.styles = R;
var j = _j;
S("calcite-action", j);

export {
  j
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-action/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-MF3N5VFJ.js.map
