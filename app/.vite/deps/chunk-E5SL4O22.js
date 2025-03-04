import {
  e
} from "./chunk-OCK4DKGQ.js";
import {
  h
} from "./chunk-QSGR2P6B.js";
import {
  rt
} from "./chunk-RB3I4NA3.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
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
  mt,
  st,
  ut
} from "./chunk-QD55HJQW.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/resources3.js
var e2 = {
  actionBarContainer: "action-bar-container",
  container: "container",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  headerContainer: "header-container",
  headerContainerBorderEnd: "header-container--border-end",
  heading: "heading",
  description: "description",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentWrapper: "content-wrapper",
  fabContainer: "fab-container",
  footer: "footer",
  footerContent: "footer-content",
  footerActions: "footer-actions",
  footerStart: "footer-start",
  footerEnd: "footer-end",
  headerSlottedContent: "header-slotted-content"
};
var t = {
  close: "close",
  collapse: "collapse"
};
var o = {
  close: "x",
  menu: "ellipsis",
  expand: "chevron-down",
  collapse: "chevron-up"
};
var n = {
  actionBar: "action-bar",
  alerts: "alerts",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerEnd: "footer-end",
  footerStart: "footer-start",
  footerActions: "footer-actions"
};

// node_modules/@esri/calcite-components/dist/components/calcite-panel/customElement.js
var j = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height: calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}:host([scale=s]){--calcite-internal-panel-default-space: var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-sm-plus)}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-space: var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-md-plus)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-space: var(--calcite-spacing-lg);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-xl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-internal-panel-default-space);border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));background-color:var(--calcite-panel-background-color, var(--calcite-color-foreground-1))}.container{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;overflow:hidden;background-color:var(--calcite-color-background);padding:0;color:var(--calcite-color-text-2);transition:max-block-size var(--calcite-animation-timing),inline-size var(--calcite-animation-timing);border-radius:var(--calcite-panel-corner-radius, var(--calcite-corner-radius-none));box-sizing:border-box;font-size:var(--calcite-font-size--1)}.container *{box-sizing:border-box}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;border-radius:var(--calcite-panel-corner-radius, var(--calcite-corner-radius-none)) var(--calcite-panel-corner-radius, var(--calcite-corner-radius-none)) 0 0;background-color:var(--calcite-panel-header-background-color, var(--calcite-color-foreground-1));border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-panel-header-border-block-end, var(--calcite-color-border-3)))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3))}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:.75rem;padding-block:.875rem;margin-inline-end:auto;justify-content:center}.header-content .header-actions{--calcite-action-background-color-hover: var(--calcite-panel-header-action-background-color-hover);--calcite-action-background-color-press: var(--calcite-panel-header-action-background-color-press);--calcite-action-background-color: var(--calcite-panel-header-action-background-color);--calcite-action-indicator-color: var(--calcite-panel-header-action-indicator-color);--calcite-action-text-color-press: var(--calcite-panel-header-action-text-color-press);--calcite-action-text-color: var(--calcite-panel-header-action-text-color)}.header-content .heading,.header-content .description{display:block;flex:none;overflow-wrap:break-word;padding:0;line-height:var(--calcite-font-line-height-relative-snug)}.header-content .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-panel-heading-text-color, var(--calcite-color-text-1))}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-panel-description-text-color, var(--calcite-color-text-2))}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-panel-border-color, var(--calcite-color-border-3))}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}#close:last-child,#collapse:last-child,calcite-action-menu:last-child{--calcite-action-corner-radius-start-end: var(--calcite-panel-corner-radius)}.back-button{--calcite-action-corner-radius-start-start: var(--calcite-panel-corner-radius)}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;color:var(--calcite-color-text-2);outline-color:transparent;padding:var(--calcite-panel-space, var(--calcite-panel-content-space, 0));background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.header-content{flex:1 1 auto;justify-content:center;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-space)}.header-content.header-slotted-content{padding:var(--calcite-panel-header-content-space, var(--calcite-internal-panel-header-vertical-padding) var(--calcite-internal-panel-default-space))}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));padding:var(--calcite-panel-footer-space, var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-space)));background-color:var(--calcite-panel-footer-background-color, var(--calcite-color-foreground-1));border-radius:0 0 var(--calcite-panel-corner-radius, var(--calcite-corner-radius-none)) var(--calcite-panel-corner-radius, var(--calcite-corner-radius-none))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-space)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-space)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-space)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:.5rem;inset-inline:0;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`;
var _D = class _D extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.resizeObserver = b("resize", () => this.resizeHandler()), this.hasActionBar = false, this.hasContentBottom = false, this.hasContentTop = false, this.hasEndActions = false, this.hasFab = false, this.hasFooterActions = false, this.hasFooterContent = false, this.hasFooterEndContent = false, this.hasFooterStartContent = false, this.hasHeaderContent = false, this.hasMenuItems = false, this.hasStartActions = false, this.isClosed = false, this.showHeaderContent = false, this.closable = false, this.closed = false, this.collapseDirection = "down", this.collapsed = false, this.collapsible = false, this.disabled = false, this.loading = false, this.menuOpen = false, this.menuPlacement = rt, this.messages = s(), this.overlayPositioning = "absolute", this.scale = "m", this.calcitePanelClose = createEvent({ cancelable: false }), this.calcitePanelScroll = createEvent({ cancelable: false }), this.calcitePanelToggle = createEvent({ cancelable: false }), this.listen("keydown", this.panelKeyDownHandler);
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
  async scrollContentTo(e3) {
    var _a;
    (_a = this.panelScrollEl) == null ? void 0 : _a.scrollTo(e3);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), mt(this.containerEl);
  }
  async load() {
    this.isClosed = this.closed;
  }
  willUpdate(e3) {
    e3.has("closed") && this.hasUpdated && (this.closed ? this.close() : this.open());
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
  }
  // #endregion
  // #region Private Methods
  resizeHandler() {
    const { panelScrollEl: e3 } = this;
    if (!e3 || typeof e3.scrollHeight != "number" || typeof e3.offsetHeight != "number")
      return;
    e3.scrollHeight > e3.offsetHeight ? e3.setAttribute("tabindex", "0") : e3.removeAttribute("tabindex");
  }
  setContainerRef(e3) {
    this.containerEl = e3;
  }
  panelKeyDownHandler(e3) {
    this.closable && e3.key === "Escape" && !e3.defaultPrevented && (this.handleUserClose(), e3.preventDefault());
  }
  handleUserClose() {
    this.closed = true, this.calcitePanelClose.emit();
  }
  open() {
    this.isClosed = false;
  }
  async close() {
    const e3 = this.beforeClose ?? (() => Promise.resolve());
    try {
      await e3();
    } catch {
      requestAnimationFrame(() => {
        this.closed = false;
      });
      return;
    }
    this.isClosed = true;
  }
  collapse() {
    this.collapsed = !this.collapsed, this.calcitePanelToggle.emit();
  }
  panelScrollHandler() {
    this.calcitePanelScroll.emit();
  }
  handleHeaderActionsStartSlotChange(e3) {
    this.hasStartActions = ut(e3);
  }
  handleHeaderActionsEndSlotChange(e3) {
    this.hasEndActions = ut(e3);
  }
  handleHeaderMenuActionsSlotChange(e3) {
    this.hasMenuItems = ut(e3);
  }
  handleActionBarSlotChange(e3) {
    const a = st(e3).filter((o2) => o2 == null ? void 0 : o2.matches("calcite-action-bar"));
    a.forEach((o2) => o2.layout = "horizontal"), this.hasActionBar = !!a.length;
  }
  handleHeaderContentSlotChange(e3) {
    this.hasHeaderContent = ut(e3);
  }
  handleFabSlotChange(e3) {
    this.hasFab = ut(e3);
  }
  handleFooterActionsSlotChange(e3) {
    this.hasFooterActions = ut(e3);
  }
  handleFooterEndSlotChange(e3) {
    this.hasFooterEndContent = ut(e3);
  }
  handleFooterStartSlotChange(e3) {
    this.hasFooterStartContent = ut(e3);
  }
  handleFooterSlotChange(e3) {
    this.hasFooterContent = ut(e3);
  }
  contentBottomSlotChangeHandler(e3) {
    this.hasContentBottom = ut(e3);
  }
  contentTopSlotChangeHandler(e3) {
    this.hasContentTop = ut(e3);
  }
  setPanelScrollEl(e3) {
    var _a, _b;
    this.panelScrollEl = e3, (_a = this.resizeObserver) == null ? void 0 : _a.disconnect(), e3 && ((_b = this.resizeObserver) == null ? void 0 : _b.observe(e3), this.resizeHandler());
  }
  handleAlertsSlotChange(e3) {
    var _a;
    (_a = st(e3)) == null ? void 0 : _a.map((a) => {
      a.nodeName === "CALCITE-ALERT" && (a.embedded = true);
    });
  }
  // #endregion
  // #region Rendering
  renderHeaderContent() {
    const { heading: e3, headingLevel: a, description: o2, hasHeaderContent: l } = this, c = e3 ? h({ class: e2.heading, level: a, children: e3 }) : null, h2 = o2 ? html`<span class=${safeClassMap(e2.description)}>${o2}</span>` : null;
    return !l && (c || h2) ? keyed("header-content", html`<div class=${safeClassMap(e2.headerContent)}>${c}${h2}</div>`) : null;
  }
  renderActionBar() {
    return html`<div class=${safeClassMap(e2.actionBarContainer)} .hidden=${!this.hasActionBar}><slot name=${n.actionBar} @slotchange=${this.handleActionBarSlotChange}></slot></div>`;
  }
  renderHeaderSlottedContent() {
    return keyed("slotted-header-content", html`<div class=${safeClassMap({ [e2.headerContent]: true, [e2.headerSlottedContent]: true })} .hidden=${!this.hasHeaderContent}><slot name=${n.headerContent} @slotchange=${this.handleHeaderContentSlotChange}></slot></div>`);
  }
  renderHeaderStartActions() {
    const { hasStartActions: e3 } = this;
    return keyed("header-actions-start", html`<div class=${safeClassMap({ [e2.headerActionsStart]: true, [e2.headerActions]: true })} .hidden=${!e3}><slot name=${n.headerActionsStart} @slotchange=${this.handleHeaderActionsStartSlotChange}></slot></div>`);
  }
  renderHeaderActionsEnd() {
    const { hasEndActions: e3, messages: a, closable: o2, collapsed: l, collapseDirection: c, collapsible: h2, hasMenuItems: g } = this, { collapse: p2, expand: f, close: m2 } = a, v = [o.expand, o.collapse];
    c === "up" && v.reverse();
    const $ = h2 ? html`<calcite-action .ariaExpanded=${!l} .ariaLabel=${p2} .icon=${l ? v[0] : v[1]} id=${t.collapse} @click=${this.collapse} .scale=${this.scale} .text=${p2} title=${(l ? f : p2) ?? nothing}></calcite-action>` : null, C = o2 ? html`<calcite-action .ariaLabel=${m2} .icon=${o.close} id=${t.close} @click=${this.handleUserClose} .scale=${this.scale} .text=${m2} title=${m2 ?? nothing}></calcite-action>` : null, H = html`<slot name=${n.headerActionsEnd} @slotchange=${this.handleHeaderActionsEndSlotChange}></slot>`, k = e3 || $ || C || g;
    return keyed("header-actions-end", html`<div class=${safeClassMap({ [e2.headerActionsEnd]: true, [e2.headerActions]: true })} .hidden=${!k}>${H}${this.renderMenu()}${$}${C}</div>`);
  }
  renderMenu() {
    const { hasMenuItems: e3, messages: a, menuOpen: o2, menuFlipPlacements: l, menuPlacement: c } = this;
    return keyed("menu", html`<calcite-action-menu .flipPlacements=${l ?? ["top", "bottom"]} .hidden=${!e3} .label=${a.options} .open=${o2} .overlayPositioning=${this.overlayPositioning} .placement=${c}><calcite-action .icon=${o.menu} .scale=${this.scale} slot=${e.trigger} .text=${a.options}></calcite-action><slot name=${n.headerMenuActions} @slotchange=${this.handleHeaderMenuActionsSlotChange}></slot></calcite-action-menu>`);
  }
  renderHeaderNode() {
    const { hasHeaderContent: e3, hasStartActions: a, hasEndActions: o2, closable: l, collapsible: c, hasMenuItems: h2, hasActionBar: g } = this, p2 = this.renderHeaderContent(), f = e3 || !!p2 || a || o2 || c || l || h2;
    return this.showHeaderContent = f, html`<header class=${safeClassMap(e2.header)} .hidden=${!(f || g)}><div class=${safeClassMap({ [e2.headerContainer]: true, [e2.headerContainerBorderEnd]: g })} .hidden=${!f}>${this.renderHeaderStartActions()}${this.renderHeaderSlottedContent()}${p2}${this.renderHeaderActionsEnd()}</div>${this.renderActionBar()}${this.renderContentTop()}</header>`;
  }
  renderFooterNode() {
    const { hasFooterEndContent: e3, hasFooterStartContent: a, hasFooterContent: o2, hasFooterActions: l } = this, c = a || e3 || o2 || l;
    return html`<footer class=${safeClassMap(e2.footer)} .hidden=${!c}><div class=${safeClassMap(e2.footerContent)} .hidden=${!o2}><slot name=${n.footer} @slotchange=${this.handleFooterSlotChange}></slot></div><div class=${safeClassMap(e2.footerStart)} .hidden=${o2 || !a}><slot name=${n.footerStart} @slotchange=${this.handleFooterStartSlotChange}></slot></div><div class=${safeClassMap(e2.footerEnd)} .hidden=${o2 || !e3}><slot name=${n.footerEnd} @slotchange=${this.handleFooterEndSlotChange}></slot></div><div class=${safeClassMap(e2.footerActions)} .hidden=${o2 || !l}>${keyed("footer-actions-slot", html`<slot name=${n.footerActions} @slotchange=${this.handleFooterActionsSlotChange}></slot>`)}</div></footer>`;
  }
  renderContent() {
    return html`<div class=${safeClassMap(e2.contentWrapper)} .hidden=${this.collapsible && this.collapsed} @scroll=${this.panelScrollHandler} ${ref(this.setPanelScrollEl)}><slot></slot>${this.renderFab()}</div>`;
  }
  renderContentBottom() {
    return html`<div class=${safeClassMap(e2.contentBottom)} .hidden=${!this.hasContentBottom}><slot name=${n.contentBottom} @slotchange=${this.contentBottomSlotChangeHandler}></slot></div>`;
  }
  renderContentTop() {
    return html`<div class=${safeClassMap(e2.contentTop)} .hidden=${!this.hasContentTop}><slot name=${n.contentTop} @slotchange=${this.contentTopSlotChangeHandler}></slot></div>`;
  }
  renderFab() {
    return html`<div class=${safeClassMap(e2.fabContainer)} .hidden=${!this.hasFab}><slot name=${n.fab} @slotchange=${this.handleFabSlotChange}></slot></div>`;
  }
  render() {
    const { disabled: e3, loading: a, isClosed: o2 } = this, l = html`<article .ariaBusy=${a} class=${safeClassMap(e2.container)} .hidden=${o2} ${ref(this.setContainerRef)}>${this.renderHeaderNode()}${this.renderContent()}${this.renderContentBottom()}${this.renderFooterNode()}${keyed("alerts", html`<slot name=${n.alerts} @slotchange=${this.handleAlertsSlotChange}></slot>`)}</article>`;
    return p({ disabled: e3, children: html`${a ? html`<calcite-scrim .loading=${a}></calcite-scrim>` : null}${l}` });
  }
};
_D.properties = { hasActionBar: 16, hasContentBottom: 16, hasContentTop: 16, hasEndActions: 16, hasFab: 16, hasFooterActions: 16, hasFooterContent: 16, hasFooterEndContent: 16, hasFooterStartContent: 16, hasHeaderContent: 16, hasMenuItems: 16, hasStartActions: 16, isClosed: 16, showHeaderContent: 16, beforeClose: 0, closable: 7, closed: 7, collapseDirection: 1, collapsed: 7, collapsible: 7, description: 1, disabled: 7, heading: 1, headingLevel: 11, loading: 7, menuFlipPlacements: 0, menuOpen: 7, menuPlacement: 3, messageOverrides: 0, overlayPositioning: 3, scale: 3 };
_D.styles = j;
var D = _D;
S("calcite-panel", D);

export {
  n,
  D
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/resources3.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-panel/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-E5SL4O22.js.map
