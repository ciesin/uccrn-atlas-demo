import {
  S as S2
} from "./chunk-FXH7S4UL.js";
import {
  F
} from "./chunk-ZP5MYPNA.js";
import {
  X,
  Y,
  ct,
  ft,
  lt,
  st,
  ut
} from "./chunk-RB3I4NA3.js";
import {
  t
} from "./chunk-LIL4TPKU.js";
import {
  s as s3
} from "./chunk-TWQBATEK.js";
import {
  html as html2,
  literal,
  unsafeStatic
} from "./chunk-O5FA53B6.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  s as s2
} from "./chunk-KES7E466.js";
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
  At,
  Q,
  mt,
  wt
} from "./chunk-QD55HJQW.js";
import {
  i
} from "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap,
  setAttribute
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/Heading.js
var h = ({ children: e, ...a }) => {
  const t2 = a.level ? unsafeStatic(`h${a.level}`) : literal`div`;
  return keyed(a.key, html2`<${t2} class=${safeClassMap(a.class)}>${e}</${t2}>`);
};

// node_modules/@esri/calcite-components/dist/components/calcite-popover/customElement.js
var X2 = class {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new Map(), this.registeredElementCount = 0, this.queryPopover = (e) => {
      const { registeredElements: t2 } = this, i2 = e.find((r2) => t2.has(r2));
      return t2.get(i2);
    }, this.togglePopovers = (e) => {
      const t2 = e.composedPath(), i2 = this.queryPopover(t2);
      i2 && !i2.triggerDisabled && (i2.open = !i2.open), Array.from(this.registeredElements.values()).filter(
        (r2) => r2 !== i2 && r2.autoClose && r2.open && !t2.includes(r2)
      ).forEach((r2) => r2.open = false);
    }, this.keyDownHandler = (e) => {
      e.defaultPrevented || (e.key === "Escape" ? this.closeAllPopovers() : t(e.key) && this.togglePopovers(e));
    }, this.clickHandler = (e) => {
      At(e) || e.defaultPrevented || this.togglePopovers(e);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, t2) {
    this.registeredElementCount++, this.registeredElements.set(e, t2), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  closeAllPopovers() {
    Array.from(this.registeredElements.values()).forEach((e) => e.open = false);
  }
  addListeners() {
    window.addEventListener("click", this.clickHandler), window.addEventListener("keydown", this.keyDownHandler);
  }
  removeListeners() {
    window.removeEventListener("click", this.clickHandler), window.removeEventListener("keydown", this.keyDownHandler);
  }
};
var o = {
  positionContainer: "position-container",
  container: "container",
  closeButtonContainer: "close-button-container",
  closeButton: "close-button",
  content: "content",
  hasHeader: "has-header",
  header: "header",
  headerContainer: "headerContainer",
  heading: "heading"
};
var v = "auto";
var b2 = "aria-controls";
var E = "aria-expanded";
var G = css`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-popover-z-index, var(--calcite-z-index-popup))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}:host([scale=s]) .heading{padding:.5rem .75rem;font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .heading{padding:.75rem 1rem;font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .heading{padding:1rem 1.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-popover-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-popover-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-popover-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.header{display:flex;flex:1 1 auto;align-items:stretch;justify-content:flex-start;border-width:0px;border-bottom-width:1px;border-style:solid;border-block-end-color:var(--calcite-popover-border-color, var(--calcite-color-border-3))}.heading{margin:0;display:block;flex:1 1 auto;align-self:center;white-space:normal;font-weight:var(--calcite-font-weight-medium);word-wrap:break-word;word-break:break-word;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer{position:relative;display:flex;height:100%;flex-direction:row;flex-wrap:nowrap;border-radius:.25rem;color:var(--calcite-popover-text-color, var(--calcite-color-text-1))}.headerContainer.has-header{flex-direction:column}.content{display:flex;height:100%;width:100%;flex-direction:column;flex-wrap:nowrap;align-self:center;word-wrap:break-word;word-break:break-word}.close-button-container{display:flex;overflow:hidden;flex:0 0 auto;border-start-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));border-end-end-radius:var(--calcite-popover-corner-radius, var(--calcite-corner-radius-round));--calcite-action-corner-radius-start-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp));--calcite-action-corner-radius-end-end: var(--calcite-popover-corner-radius, var(--calcite-corner-radius-sharp))}::slotted(calcite-panel),::slotted(calcite-flow){height:100%}:host([hidden]){display:none}[hidden]{display:none}`;
var w = new X2();
var _J = class _J extends LitElement {
  constructor() {
    super(...arguments), this.closeButtonEl = createRef(), this.focusTrap = F({
      triggerProp: "open",
      focusTrapOptions: {
        allowOutsideClick: true,
        escapeDeactivates: (e) => (e.defaultPrevented || (this.open = false, e.preventDefault()), false)
      }
    })(this), this.guid = `calcite-popover-${i()}`, this.hasLoaded = false, this.mutationObserver = b("mutation", () => this.focusTrap.updateContainerElements()), this.transitionProp = "opacity", this.floatingLayout = "vertical", this.autoClose = false, this.closable = false, this.flipDisabled = false, this.focusTrapDisabled = false, this.messages = s(), this.offsetDistance = ut, this.offsetSkidding = 0, this.open = false, this.overlayPositioning = "absolute", this.placement = v, this.pointerDisabled = false, this.scale = "m", this.triggerDisabled = false, this.calcitePopoverBeforeClose = createEvent({ cancelable: false }), this.calcitePopoverBeforeOpen = createEvent({ cancelable: false }), this.calcitePopoverClose = createEvent({ cancelable: false }), this.calcitePopoverOpen = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = false) {
    const { referenceEl: t2, placement: i2, overlayPositioning: r2, flipDisabled: l, filteredFlipPlacements: c, offsetDistance: a, offsetSkidding: d, arrowEl: p, floatingEl: P } = this;
    return ft(this, {
      floatingEl: P,
      referenceEl: t2,
      overlayPositioning: r2,
      placement: i2,
      flipDisabled: l,
      flipPlacements: c,
      offsetDistance: a,
      offsetSkidding: d,
      arrowEl: p,
      type: "popover"
    }, e);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), this.requestUpdate(), mt(this.el);
  }
  /** Updates the element(s) that are used within the focus-trap of the component. */
  async updateFocusTrapElements() {
    this.focusTrap.updateContainerElements();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true }), this.setFilteredPlacements(), requestAnimationFrame(() => this.setUpReferenceElement(this.hasLoaded));
  }
  async load() {
  }
  willUpdate(e) {
    e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("open") && (this.hasUpdated || this.open !== false) && this.openHandler(), (e.has("offsetDistance") && (this.hasUpdated || this.offsetDistance !== ut) || e.has("offsetSkidding") && (this.hasUpdated || this.offsetSkidding !== 0) || e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || e.has("placement") && (this.hasUpdated || this.placement !== v)) && this.reposition(true), e.has("referenceElement") && this.referenceElementHandler();
  }
  loaded() {
    this.referenceElement && !this.referenceEl && this.setUpReferenceElement(), this.hasLoaded = true;
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect(), this.removeReferences(), Y(this);
  }
  // #endregion
  // #region Private Methods
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(true);
  }
  openHandler() {
    s3(this), this.reposition(true), this.setExpandedAttr();
  }
  referenceElementHandler() {
    this.setUpReferenceElement(), this.reposition(true);
  }
  setFloatingEl(e) {
    this.floatingEl = e, e && requestAnimationFrame(() => this.setUpReferenceElement());
  }
  setTransitionEl(e) {
    this.transitionEl = e;
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t2 } = this;
    this.filteredFlipPlacements = t2 ? lt(t2, e) : null;
  }
  setUpReferenceElement(e = true) {
    this.removeReferences(), this.referenceEl = this.getReferenceElement(), ct(this);
    const { el: t2, referenceElement: i2, referenceEl: r2 } = this;
    e && i2 && !r2 && console.warn(`${t2.tagName}: reference-element id "${i2}" was not found.`, {
      el: t2
    }), this.addReferences();
  }
  getId() {
    return this.el.id || this.guid;
  }
  setExpandedAttr() {
    const { referenceEl: e, open: t2 } = this;
    e && "setAttribute" in e && e.setAttribute(E, wt(t2));
  }
  addReferences() {
    const { referenceEl: e } = this;
    if (!e)
      return;
    const t2 = this.getId();
    "setAttribute" in e && e.setAttribute(b2, t2), w.registerElement(e, this.el), this.setExpandedAttr();
  }
  removeReferences() {
    const { referenceEl: e } = this;
    e && ("removeAttribute" in e && (e.removeAttribute(b2), e.removeAttribute(E)), w.unregisterElement(e));
  }
  getReferenceElement() {
    const { referenceElement: e, el: t2 } = this;
    return (typeof e == "string" ? Q(t2, { id: e }) : e) || null;
  }
  hide() {
    this.open = false;
  }
  onBeforeOpen() {
    this.calcitePopoverBeforeOpen.emit();
  }
  onOpen() {
    this.calcitePopoverOpen.emit(), this.focusTrap.activate();
  }
  onBeforeClose() {
    this.calcitePopoverBeforeClose.emit();
  }
  onClose() {
    this.calcitePopoverClose.emit(), X(this), this.focusTrap.deactivate();
  }
  storeArrowEl(e) {
    this.arrowEl = e, this.reposition(true);
  }
  // #endregion
  // #region Rendering
  renderCloseButton() {
    const { messages: e, closable: t2 } = this;
    return t2 ? keyed(o.closeButtonContainer, html`<div class=${safeClassMap(o.closeButtonContainer)}><calcite-action appearance=transparent class=${safeClassMap(o.closeButton)} @click=${this.hide} .scale=${this.scale} .text=${e.close} ${ref(this.closeButtonEl)}><calcite-icon icon=x .scale=${s2(this.scale)}></calcite-icon></calcite-action></div>`) : null;
  }
  renderHeader() {
    const { heading: e, headingLevel: t2 } = this, i2 = e ? h({ class: o.heading, level: t2, children: e }) : null;
    return i2 ? keyed(o.header, html`<div class=${safeClassMap(o.header)}>${i2}${this.renderCloseButton()}</div>`) : null;
  }
  render() {
    const { referenceEl: e, heading: t2, label: i2, open: r2, pointerDisabled: l, floatingLayout: c } = this, a = e && r2, d = !a, p = l ? null : keyed("floating-arrow", S2({ floatingLayout: c, ref: this.storeArrowEl }));
    return this.el.inert = d, this.el.ariaLabel = i2, this.el.ariaLive = "polite", setAttribute(this.el, "id", this.getId()), this.el.role = "dialog", html`<div class=${safeClassMap(o.positionContainer)} ${ref(this.setFloatingEl)}><div class=${safeClassMap({
      [o.container]: true,
      [st.animation]: true,
      [st.animationActive]: a
    })} ${ref(this.setTransitionEl)}>${p}<div class=${safeClassMap({
      [o.hasHeader]: !!t2,
      [o.headerContainer]: true
    })}>${this.renderHeader()}<div class=${safeClassMap(o.content)}><slot></slot></div>${t2 ? null : this.renderCloseButton()}</div></div></div>`;
  }
};
_J.properties = { floatingLayout: 16, referenceEl: 16, autoClose: 7, closable: 7, flipDisabled: 7, flipPlacements: 0, focusTrapDisabled: 7, focusTrapOptions: 0, heading: 1, headingLevel: 11, label: 1, messageOverrides: 0, offsetDistance: 11, offsetSkidding: 11, open: 7, overlayPositioning: 3, placement: 3, pointerDisabled: 7, referenceElement: 1, scale: 3, triggerDisabled: 7 };
_J.styles = G;
var J = _J;
S("calcite-popover", J);

export {
  h,
  J
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/Heading.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-popover/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-QSGR2P6B.js.map
