import {
  e
} from "./chunk-OCK4DKGQ.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  mt,
  ut
} from "./chunk-QD55HJQW.js";
import {
  LitElement,
  S,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/resources7.js
var n = {
  menuActions: "menu-actions",
  menuTooltip: "menu-tooltip"
};
var o = {
  menu: "ellipsis"
};
var t = {
  container: "container"
};

// node_modules/@esri/calcite-components/dist/components/calcite-action-group/customElement.js
var O = css`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns: 1}:host([columns="2"]){--calcite-internal-action-group-columns: 2}:host([columns="3"]){--calcite-internal-action-group-columns: 3}:host([columns="4"]){--calcite-internal-action-group-columns: 4}:host([columns="5"]){--calcite-internal-action-group-columns: 5}:host([columns="6"]){--calcite-internal-action-group-columns: 6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)),auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([layout=horizontal]) ::slotted(calcite-action-group){border-inline-end:var(--calcite-size-px)}:host([hidden]){display:none}[hidden]{display:none}`;
var _M = class _M extends LitElement {
  constructor() {
    super(...arguments), this.hasMenuActions = false, this.expanded = false, this.layout = "vertical", this.menuOpen = false, this.messages = s(), this.overlayPositioning = "absolute", this.scale = "m";
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), mt(this.el);
  }
  // #endregion
  // #region Lifecycle
  async load() {
  }
  willUpdate(t2) {
    t2.has("expanded") && (this.hasUpdated || this.expanded !== false) && (this.menuOpen = false);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  setMenuOpen(t2) {
    this.menuOpen = !!t2.currentTarget.open;
  }
  handleMenuActionsSlotChange(t2) {
    this.hasMenuActions = ut(t2);
  }
  // #endregion
  // #region Rendering
  renderMenu() {
    const { expanded: t2, menuOpen: l, scale: o2, layout: e2, messages: n2, overlayPositioning: c, hasMenuActions: r2, menuFlipPlacements: u, menuPlacement: p } = this;
    return html`<calcite-action-menu .expanded=${t2} .flipPlacements=${u ?? (e2 === "horizontal" ? ["top", "bottom"] : ["left", "right"])} .hidden=${!r2} .label=${n2.more} @calciteActionMenuOpen=${this.setMenuOpen} .open=${l} .overlayPositioning=${c} .placement=${p ?? (e2 === "horizontal" ? "bottom-start" : "leading-start")} .scale=${o2}><calcite-action .icon=${o.menu} .scale=${o2} slot=${e.trigger} .text=${n2.more} .textEnabled=${t2}></calcite-action><slot name=${n.menuActions} @slotchange=${this.handleMenuActionsSlotChange}></slot><slot name=${n.menuTooltip} slot=${e.tooltip}></slot></calcite-action-menu>`;
  }
  render() {
    return html`<div .ariaLabel=${this.label} class=${safeClassMap(t.container)} role=group><slot></slot>${this.renderMenu()}</div>`;
  }
};
_M.properties = { hasMenuActions: 16, columns: 11, expanded: 7, label: 1, layout: 3, menuFlipPlacements: 0, menuOpen: 7, menuPlacement: 3, messageOverrides: 0, overlayPositioning: 3, scale: 3 };
_M.shadowRootOptions = { mode: "open", delegatesFocus: true };
_M.styles = O;
var M = _M;
S("calcite-action-group", M);

export {
  n,
  M
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/resources7.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-action-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-IECJITUT.js.map
