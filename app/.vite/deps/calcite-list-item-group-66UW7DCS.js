import {
  t
} from "./chunk-I2VOGHVX.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-list-item-group/customElement.js
var t2 = {
  container: "container",
  heading: "heading"
};
var g = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0;display:flex;flex:1 1 0%;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1));color:var(--calcite-list-color, var(--calcite-color-text-2))}.heading{font-weight:var(--calcite-font-weight-medium)}:host([scale=s]) .container{padding-inline:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size-sm);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-sm) var(--calcite-spacing-xxs)}:host([scale=s]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-inline:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-lg) var(--calcite-spacing-sm)}:host([scale=m]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-md);line-height:var(--calcite-font-line-height-fixed-lg);padding-block:var(--calcite-spacing-xl) var(--calcite-spacing-sm-plus, .625rem)}:host([scale=l]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md-plus, .875rem)}.heading{padding:0}:host([hidden]){display:none}[hidden]{display:none}`;
var _p = class _p extends LitElement {
  constructor() {
    super(...arguments), this.disabled = false, this.filterHidden = false, this.scale = "m", this.calciteInternalListItemGroupDefaultSlotChange = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Lifecycle
  updated() {
    m(this);
  }
  // #endregion
  // #region Private Methods
  handleDefaultSlotChange() {
    this.calciteInternalListItemGroupDefaultSlotChange.emit();
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: i, heading: a } = this;
    return p({ disabled: i, children: html`<div class=${safeClassMap(t2.container)} role=row><div .ariaColSpan=${t} class=${safeClassMap(t2.heading)} role=cell>${a}</div></div><slot @slotchange=${this.handleDefaultSlotChange}></slot>` });
  }
};
_p.properties = { disabled: 7, filterHidden: 7, heading: 3, scale: 3 };
_p.styles = g;
var p2 = _p;
S("calcite-list-item-group", p2);
export {
  p2 as ListItemGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-list-item-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-list-item-group-66UW7DCS.js.map
