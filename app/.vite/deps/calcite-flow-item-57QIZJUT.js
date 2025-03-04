import {
  n
} from "./chunk-E5SL4O22.js";
import "./chunk-OCK4DKGQ.js";
import "./chunk-7YNOTTY2.js";
import "./chunk-QSGR2P6B.js";
import "./chunk-FXH7S4UL.js";
import "./chunk-ZP5MYPNA.js";
import "./chunk-RB3I4NA3.js";
import "./chunk-75ZAPGBC.js";
import "./chunk-LIL4TPKU.js";
import "./chunk-TWQBATEK.js";
import "./chunk-O5FA53B6.js";
import "./chunk-MF3N5VFJ.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  ref
} from "./chunk-6Q5AUVK4.js";
import "./chunk-H3ILWZIP.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import "./chunk-RQCMOTBU.js";
import {
  bt
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-flow-item/customElement.js
var T = {
  backButton: "back-button"
};
var f = {
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
var o = {
  actionBar: "action-bar",
  alerts: "alerts",
  contentTop: "content-top",
  contentBottom: "content-bottom",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions",
  footerEnd: "footer-end",
  footerStart: "footer-start"
};
var A = css`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:none;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([selected]){display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-flow-border-color, var(--calcite-color-border-3))}calcite-panel{--calcite-panel-background-color: var(--calcite-flow-background-color);--calcite-panel-border-color: var(--calcite-flow-border-color, var(--calcite-flow-item-header-border-block-end));--calcite-panel-corner-radius: var(--calcite-flow-corner-radius);--calcite-panel-description-text-color: var(--calcite-flow-description-text-color);--calcite-panel-footer-background-color: var(--calcite-flow-footer-background-color);--calcite-panel-footer-space: var(--calcite-flow-footer-space, var(--calcite-flow-item-footer-padding));--calcite-panel-header-action-background-color-hover: var(--calcite-flow-header-action-background-color-hover);--calcite-panel-header-action-background-color-press: var(--calcite-flow-header-action-background-color-press);--calcite-panel-header-action-background-color: var(--calcite-flow-header-action-background-color);--calcite-panel-header-action-indicator-color: var(--calcite-flow-header-action-indicator-color);--calcite-panel-header-action-text-color-press: var(--calcite-flow-header-action-text-color-press);--calcite-panel-header-action-text-color: var(--calcite-flow-header-action-text-color);--calcite-panel-header-background-color: var(--calcite-flow-header-background-color);--calcite-panel-header-content-space: var(--calcite-flow-header-content-space);--calcite-panel-heading-text-color: var(--calcite-flow-heading-text-color);--calcite-panel-space: var(--calcite-flow-space)}:host([hidden]){display:none}[hidden]{display:none}`;
var _L = class _L extends LitElement {
  constructor() {
    super(...arguments), this.closable = false, this.closed = false, this.collapseDirection = "down", this.collapsed = false, this.collapsible = false, this.disabled = false, this.loading = false, this.menuOpen = false, this.messages = s(), this.overlayPositioning = "absolute", this.scale = "m", this.selected = false, this.showBackButton = false, this.calciteFlowItemBack = createEvent(), this.calciteFlowItemClose = createEvent({ cancelable: false }), this.calciteFlowItemScroll = createEvent({ cancelable: false }), this.calciteFlowItemToggle = createEvent({ cancelable: false }), this.calciteInternalFlowItemChange = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Public Methods
  /**
   * Scrolls the component's content to a specified set of coordinates.
   *
   * @example
   * myCalciteFlowItem.scrollContentTo({
   *   left: 0, // Specifies the number of pixels along the X axis to scroll the window or element.
   *   top: 0, // Specifies the number of pixels along the Y axis to scroll the window or element
   *   behavior: "auto" // Specifies whether the scrolling should animate smoothly (smooth), or happen instantly in a single jump (auto, the default value).
   * });
   * @param options - allows specific coordinates to be defined.
   * @returns - promise that resolves once the content is scrolled to.
   */
  async scrollContentTo(e) {
    var _a;
    await ((_a = this.containerEl) == null ? void 0 : _a.scrollContentTo(e));
  }
  /**
   * Sets focus on the component.
   *
   * @returns promise.
   */
  async setFocus() {
    await r(this);
    const { backButtonEl: e, containerEl: a } = this;
    if (e)
      return e.setFocus();
    if (a)
      return a.setFocus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
  }
  willUpdate(e) {
    e.has("selected") && (this.hasUpdated || this.selected !== false) && this.calciteInternalFlowItemChange.emit();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  handleInternalPanelScroll(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.calciteFlowItemScroll.emit());
  }
  handleInternalPanelClose(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.closed = true, this.calciteFlowItemClose.emit());
  }
  handleInternalPanelToggle(e) {
    e.target === this.containerEl && (e.stopPropagation(), this.collapsed = e.target.collapsed, this.calciteFlowItemToggle.emit());
  }
  backButtonClick() {
    this.calciteFlowItemBack.emit();
  }
  setBackRef(e) {
    this.backButtonEl = e;
  }
  setContainerRef(e) {
    this.containerEl = e;
  }
  // #endregion
  // #region Rendering
  renderBackButton() {
    const { el: e } = this, a = bt(e) === "rtl", { showBackButton: n2, backButtonClick: i, messages: r2 } = this, l = r2.back, s2 = a ? f.backRight : f.backLeft;
    return n2 ? keyed("flow-back-button", html`<calcite-action .ariaLabel=${l} class=${safeClassMap(T.backButton)} .icon=${s2} @click=${i} scale=s slot=header-actions-start .text=${l} title=${l ?? nothing} ${ref(this.setBackRef)}></calcite-action>`) : null;
  }
  render() {
    const { collapsed: e, collapseDirection: a, collapsible: n2, closable: i, closed: r2, description: l, disabled: s2, heading: p2, headingLevel: b, loading: m2, menuOpen: u, messages: g, overlayPositioning: $, beforeClose: k } = this;
    return p({ disabled: s2, children: html`<calcite-panel .beforeClose=${k} .closable=${i} .closed=${r2} .collapseDirection=${a} .collapsed=${e} .collapsible=${n2} .description=${l} .disabled=${s2} .heading=${p2} .headingLevel=${b} .loading=${m2} .menuOpen=${u} .messageOverrides=${g} @calcitePanelClose=${this.handleInternalPanelClose} @calcitePanelScroll=${this.handleInternalPanelScroll} @calcitePanelToggle=${this.handleInternalPanelToggle} .overlayPositioning=${$} .scale=${this.scale} ${ref(this.setContainerRef)}>${this.renderBackButton()}<slot name=${o.actionBar} slot=${n.actionBar}></slot><slot name=${o.alerts} slot=${n.alerts}></slot><slot name=${o.headerActionsStart} slot=${n.headerActionsStart}></slot><slot name=${o.headerActionsEnd} slot=${n.headerActionsEnd}></slot><slot name=${o.headerContent} slot=${n.headerContent}></slot><slot name=${o.headerMenuActions} slot=${n.headerMenuActions}></slot><slot name=${o.fab} slot=${n.fab}></slot><slot name=${o.contentTop} slot=${n.contentTop}></slot><slot name=${o.contentBottom} slot=${n.contentBottom}></slot><slot name=${o.footerStart} slot=${n.footerStart}></slot><slot name=${o.footer} slot=${n.footer}></slot><slot name=${o.footerEnd} slot=${n.footerEnd}></slot><slot name=${o.footerActions} slot=${n.footerActions}></slot><slot></slot></calcite-panel>` });
  }
};
_L.properties = { beforeBack: 0, beforeClose: 0, closable: 7, closed: 7, collapseDirection: 1, collapsed: 7, collapsible: 7, description: 1, disabled: 7, heading: 1, headingLevel: 11, loading: 7, menuOpen: 7, messageOverrides: 0, overlayPositioning: 3, scale: 3, selected: 7, showBackButton: 5 };
_L.styles = A;
var L = _L;
S("calcite-flow-item", L);
export {
  L as FlowItem
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-flow-item/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-flow-item-57QIZJUT.js.map
