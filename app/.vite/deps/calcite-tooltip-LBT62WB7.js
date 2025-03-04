import {
  S as S2
} from "./chunk-FXH7S4UL.js";
import {
  X,
  Y,
  ct,
  ft,
  st,
  ut
} from "./chunk-RB3I4NA3.js";
import "./chunk-75ZAPGBC.js";
import {
  s
} from "./chunk-TWQBATEK.js";
import "./chunk-RWVOOLIP.js";
import {
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  Q,
  yt
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
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-tooltip/customElement.js
var f = {
  positionContainer: "position-container",
  container: "container"
};
var P = 300;
var I = 500;
var u = "aria-describedby";
function v(n) {
  const { referenceElement: e } = n;
  return (typeof e == "string" ? Q(n, { id: e }) : e) || null;
}
var z = class {
  constructor() {
    this.registeredElements = /* @__PURE__ */ new WeakMap(), this.registeredShadowRootCounts = /* @__PURE__ */ new WeakMap(), this.hoverOpenTimeout = null, this.hoverCloseTimeout = null, this.activeTooltip = null, this.registeredElementCount = 0, this.clickedTooltip = null, this.queryTooltip = (e) => {
      const { registeredElements: t } = this, i2 = e.find((o) => t.has(o));
      return t.get(i2);
    }, this.keyDownHandler = (e) => {
      if (e.key === "Escape" && !e.defaultPrevented) {
        const { activeTooltip: t } = this;
        if (t == null ? void 0 : t.open) {
          this.clearHoverTimeout(), this.closeActiveTooltip();
          const i2 = v(t), o = e.composedPath();
          (i2 instanceof Element && o.includes(i2) || o.includes(t)) && e.preventDefault();
        }
      }
    }, this.pointerMoveHandler = (e) => {
      if (e.defaultPrevented) {
        this.closeHoveredTooltip();
        return;
      }
      const t = e.composedPath(), { activeTooltip: i2 } = this, o = this.queryTooltip(t);
      if (this.pathHasOpenTooltip(o, t)) {
        this.clearHoverTimeout();
        return;
      }
      o !== this.clickedTooltip && (o ? this.openHoveredTooltip(o) : (i2 == null ? void 0 : i2.open) && this.closeHoveredTooltip(), this.clickedTooltip = null);
    }, this.clickHandler = (e) => {
      if (e.defaultPrevented)
        return;
      this.clickedTooltip = null;
      const t = e.composedPath(), i2 = this.queryTooltip(t);
      if (this.pathHasOpenTooltip(i2, t)) {
        this.clearHoverTimeout();
        return;
      }
      if (this.closeActiveTooltip(), !!i2) {
        if (this.clearHoverTimeout(), i2.closeOnClick) {
          this.clickedTooltip = i2, this.toggleTooltip(i2, false);
          return;
        }
        this.toggleTooltip(i2, true);
      }
    }, this.blurHandler = () => {
      this.closeActiveTooltip();
    }, this.focusInHandler = (e) => {
      if (e.defaultPrevented)
        return;
      const t = e.composedPath(), i2 = this.queryTooltip(t);
      if (this.pathHasOpenTooltip(i2, t)) {
        this.clearHoverTimeout();
        return;
      }
      i2 !== this.clickedTooltip && (this.clickedTooltip = null, this.closeTooltipIfNotActive(i2), i2 && this.toggleFocusedTooltip(i2, true));
    }, this.openHoveredTooltip = (e) => {
      var _a;
      this.hoverOpenTimeout = window.setTimeout(
        () => {
          this.hoverOpenTimeout !== null && (this.clearHoverCloseTimeout(), this.closeTooltipIfNotActive(e), this.toggleTooltip(e, true));
        },
        ((_a = this.activeTooltip) == null ? void 0 : _a.open) ? 0 : P
      );
    }, this.closeHoveredTooltip = () => {
      this.hoverCloseTimeout = window.setTimeout(() => {
        this.hoverCloseTimeout !== null && this.closeActiveTooltip();
      }, I);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  registerElement(e, t) {
    this.registeredElementCount++, this.registeredElements.set(e, t);
    const i2 = this.getReferenceElShadowRootNode(e);
    i2 && this.registerShadowRoot(i2), this.registeredElementCount === 1 && this.addListeners();
  }
  unregisterElement(e) {
    const t = this.getReferenceElShadowRootNode(e);
    t && this.unregisterShadowRoot(t), this.registeredElements.delete(e) && this.registeredElementCount--, this.registeredElementCount === 0 && this.removeListeners();
  }
  pathHasOpenTooltip(e, t) {
    const { activeTooltip: i2 } = this;
    return (i2 == null ? void 0 : i2.open) && t.includes(i2) || (e == null ? void 0 : e.open) && t.includes(e);
  }
  addShadowListeners(e) {
    e.addEventListener("focusin", this.focusInHandler);
  }
  removeShadowListeners(e) {
    e.removeEventListener("focusin", this.focusInHandler);
  }
  addListeners() {
    window.addEventListener("keydown", this.keyDownHandler), window.addEventListener("pointermove", this.pointerMoveHandler), window.addEventListener("click", this.clickHandler), window.addEventListener("focusin", this.focusInHandler), window.addEventListener("blur", this.blurHandler);
  }
  removeListeners() {
    window.removeEventListener("keydown", this.keyDownHandler), window.removeEventListener("pointermove", this.pointerMoveHandler), window.removeEventListener("click", this.clickHandler), window.removeEventListener("focusin", this.focusInHandler), window.removeEventListener("blur", this.blurHandler);
  }
  clearHoverOpenTimeout() {
    window.clearTimeout(this.hoverOpenTimeout), this.hoverOpenTimeout = null;
  }
  clearHoverCloseTimeout() {
    window.clearTimeout(this.hoverCloseTimeout), this.hoverCloseTimeout = null;
  }
  clearHoverTimeout() {
    this.clearHoverOpenTimeout(), this.clearHoverCloseTimeout();
  }
  closeTooltipIfNotActive(e) {
    this.activeTooltip !== e && this.closeActiveTooltip();
  }
  closeActiveTooltip() {
    const { activeTooltip: e } = this;
    (e == null ? void 0 : e.open) && this.toggleTooltip(e, false);
  }
  toggleFocusedTooltip(e, t) {
    t && this.clearHoverTimeout(), this.toggleTooltip(e, t);
  }
  toggleTooltip(e, t) {
    e.open = t, this.activeTooltip = t ? e : null;
  }
  registerShadowRoot(e) {
    const { registeredShadowRootCounts: t } = this, i2 = t.get(e), o = Math.min((typeof i2 == "number" ? i2 : 0) + 1, 1);
    o === 1 && this.addShadowListeners(e), t.set(e, o);
  }
  unregisterShadowRoot(e) {
    const { registeredShadowRootCounts: t } = this, i2 = t.get(e), o = Math.max((typeof i2 == "number" ? i2 : 1) - 1, 0);
    o === 0 && this.removeShadowListeners(e), t.set(e, o);
  }
  getReferenceElShadowRootNode(e) {
    return e instanceof Element ? yt(e) : null;
  }
};
var D = css`:host{display:contents;--calcite-floating-ui-z-index: var(--calcite-tooltip-z-index, var(--calcite-z-index-tooltip))}.position-container{inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.position-container .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.position-container[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.position-container[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.position-container[data-placement^=left] .calcite-floating-ui-anim{left:5px}.position-container[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.position-container[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-z-index) * -1);fill:var(--calcite-color-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-color-border-3)}.container{position:relative;overflow:hidden;padding:.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round));color:var(--calcite-tooltip-text-color, var(--calcite-color-text-1));max-inline-size:20rem;max-block-size:20rem;text-align:start}.position-container .calcite-floating-ui-anim{border-width:1px;border-style:solid;background-color:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1));border-color:var(--calcite-tooltip-border-color, var(--calcite-color-border-3));border-radius:var(--calcite-tooltip-corner-radius, var(--calcite-corner-radius-round))}.calcite-floating-ui-arrow{fill:var(--calcite-tooltip-background-color, var(--calcite-color-foreground-1))}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-tooltip-border-color, var(--calcite-color-border-3))}:host([hidden]){display:none}[hidden]{display:none}`;
var m = new z();
var _U = class _U extends LitElement {
  constructor() {
    super(...arguments), this.guid = `calcite-tooltip-${i()}`, this.transitionProp = "opacity", this.floatingLayout = "vertical", this.closeOnClick = false, this.offsetDistance = ut, this.offsetSkidding = 0, this.open = false, this.overlayPositioning = "absolute", this.placement = "auto", this.calciteTooltipBeforeClose = createEvent({ cancelable: false }), this.calciteTooltipBeforeOpen = createEvent({ cancelable: false }), this.calciteTooltipClose = createEvent({ cancelable: false }), this.calciteTooltipOpen = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = false) {
    const { referenceEl: t, placement: i2, overlayPositioning: o, offsetDistance: s2, offsetSkidding: l, arrowEl: a, floatingEl: g } = this;
    return ft(this, {
      floatingEl: g,
      referenceEl: t,
      overlayPositioning: o,
      placement: i2,
      offsetDistance: s2,
      offsetSkidding: l,
      arrowEl: a,
      type: "tooltip"
    }, e);
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.setUpReferenceElement(true);
  }
  willUpdate(e) {
    (e.has("offsetDistance") && (this.hasUpdated || this.offsetDistance !== ut) || e.has("offsetSkidding") && (this.hasUpdated || this.offsetSkidding !== 0) || e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || e.has("placement") && (this.hasUpdated || this.placement !== "auto")) && this.reposition(true), e.has("open") && (this.hasUpdated || this.open !== false) && this.openHandler(), e.has("referenceElement") && this.setUpReferenceElement();
  }
  loaded() {
    this.referenceElement && !this.referenceEl && this.setUpReferenceElement();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.removeReferences(), Y(this);
  }
  // #endregion
  // #region Private Methods
  openHandler() {
    s(this), this.reposition(true);
  }
  onBeforeOpen() {
    this.calciteTooltipBeforeOpen.emit();
  }
  onOpen() {
    this.calciteTooltipOpen.emit();
  }
  onBeforeClose() {
    this.calciteTooltipBeforeClose.emit();
  }
  onClose() {
    this.calciteTooltipClose.emit(), X(this);
  }
  setFloatingEl(e) {
    this.floatingEl = e, e && requestAnimationFrame(() => this.setUpReferenceElement());
  }
  setTransitionEl(e) {
    this.transitionEl = e;
  }
  setUpReferenceElement(e = true) {
    this.removeReferences(), this.referenceEl = v(this.el), ct(this);
    const { el: t, referenceElement: i2, referenceEl: o } = this;
    e && i2 && !o && console.warn(`${t.tagName}: reference-element id "${i2}" was not found.`, {
      el: t
    }), this.addReferences();
  }
  getId() {
    return this.el.id || this.guid;
  }
  addReferences() {
    const { referenceEl: e } = this;
    if (!e)
      return;
    const t = this.getId();
    "setAttribute" in e && e.setAttribute(u, t), m.registerElement(e, this.el);
  }
  removeReferences() {
    const { referenceEl: e } = this;
    e && ("removeAttribute" in e && e.removeAttribute(u), m.unregisterElement(e));
  }
  // #endregion
  // #region Rendering
  render() {
    const { referenceEl: e, label: t, open: i2, floatingLayout: o } = this, s2 = e && i2, l = !s2;
    return this.el.inert = l, this.el.ariaLabel = t, this.el.ariaLive = "polite", setAttribute(this.el, "id", this.getId()), this.el.role = "tooltip", html`<div class=${safeClassMap(f.positionContainer)} ${ref(this.setFloatingEl)}><div class=${safeClassMap({
      [st.animation]: true,
      [st.animationActive]: s2
    })} ${ref(this.setTransitionEl)}>${S2({ floatingLayout: o, ref: (a) => this.arrowEl = a })}<div class=${safeClassMap(f.container)}><slot></slot></div></div></div>`;
  }
};
_U.properties = { floatingLayout: 16, referenceEl: 16, closeOnClick: 7, label: 1, offsetDistance: 11, offsetSkidding: 11, open: 7, overlayPositioning: 3, placement: 3, referenceElement: 1 };
_U.styles = D;
var U = _U;
S("calcite-tooltip", U);
export {
  U as Tooltip
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-tooltip/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-tooltip-LBT62WB7.js.map
