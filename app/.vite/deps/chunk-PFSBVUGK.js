import {
  r as r2
} from "./chunk-WWKEPYTK.js";
import {
  X,
  Y,
  ct,
  ft,
  lt,
  ot,
  st
} from "./chunk-RB3I4NA3.js";
import {
  t
} from "./chunk-LIL4TPKU.js";
import {
  s
} from "./chunk-TWQBATEK.js";
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
  b
} from "./chunk-RQCMOTBU.js";
import {
  mt,
  tt,
  xt
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
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-dropdown/customElement.js
var H = {
  dropdownTrigger: "trigger"
};
var m2 = {
  content: "calcite-dropdown-content",
  wrapper: "calcite-dropdown-wrapper"
};
var T = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-block}.calcite-dropdown-wrapper{--calcite-floating-ui-z-index: var(--calcite-z-index-dropdown);inline-size:max-content;display:none;inset-block-start:0;left:0;z-index:var(--calcite-floating-ui-z-index)}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:inset,left,opacity;opacity:0;box-shadow:0 0 16px #00000029;z-index:var(--calcite-z-index);border-radius:.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{inset-block-start:-5px}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{inset-block-start:5px}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{left:5px}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{left:-5px}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;inset-block-start:0;left:0}.calcite-dropdown-content{max-height:45vh;width:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-color-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;height:100%;flex:1 1 auto;word-wrap:break-word;word-break:break-word}.width-s{--calcite-dropdown-width: 12rem}.width-m{--calcite-dropdown-width: 14rem}.width-l{--calcite-dropdown-width: 16rem}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
var _z = class _z extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.focusLastDropdownItem = false, this.groups = [], this.guid = `calcite-dropdown-${i()}`, this.items = [], this.mutationObserver = b("mutation", () => this.updateItems()), this.onOpenEnd = () => {
      this.focusOnFirstActiveOrDefaultItem(), this.el.removeEventListener("calciteDropdownOpen", this.onOpenEnd);
    }, this.transitionProp = "opacity", this.resizeObserver = b("resize", (e) => this.resizeObserverCallback(e)), this.closeOnSelectDisabled = false, this.disabled = false, this.maxItems = 0, this.open = false, this.overlayPositioning = "absolute", this.placement = ot, this.scale = "m", this.selectedItems = [], this.type = "click", this.calciteDropdownBeforeClose = createEvent({ cancelable: false }), this.calciteDropdownBeforeOpen = createEvent({ cancelable: false }), this.calciteDropdownClose = createEvent({ cancelable: false }), this.calciteDropdownOpen = createEvent({ cancelable: false }), this.calciteDropdownSelect = createEvent({ cancelable: false }), this.listenOn(window, "click", this.closeCalciteDropdownOnClick), this.listen("calciteInternalDropdownCloseRequest", this.closeCalciteDropdownOnEvent), this.listenOn(window, "calciteDropdownOpen", this.closeCalciteDropdownOnOpenEvent), this.listen("pointerenter", this.pointerEnterHandler), this.listen("pointerleave", this.pointerLeaveHandler), this.listen("calciteInternalDropdownItemKeyEvent", this.calciteInternalDropdownItemKeyEvent), this.listen("calciteInternalDropdownItemSelect", this.handleItemSelect);
  }
  // #endregion
  // #region Public Methods
  /**
   * Updates the position of the component.
   *
   * @param delayed
   */
  async reposition(e = false) {
    const { floatingEl: t2, referenceEl: i2, placement: s2, overlayPositioning: u, filteredFlipPlacements: f } = this;
    return ft(this, {
      floatingEl: t2,
      referenceEl: i2,
      overlayPositioning: u,
      placement: s2,
      flipPlacements: f,
      type: "menu"
    }, e);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), mt(this.referenceEl);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true }), this.setFilteredPlacements(), this.updateItems(), ct(this);
  }
  load() {
  }
  willUpdate(e) {
    e.has("open") && (this.hasUpdated || this.open !== false) && this.openHandler(), e.has("disabled") && (this.hasUpdated || this.disabled !== false) && this.handleDisabledChange(this.disabled), e.has("flipPlacements") && this.flipPlacementsHandler(), e.has("maxItems") && this.hasUpdated && this.setMaxScrollerHeight(), (e.has("overlayPositioning") && (this.hasUpdated || this.overlayPositioning !== "absolute") || e.has("placement") && (this.hasUpdated || this.placement !== ot)) && this.reposition(true), e.has("scale") && (this.hasUpdated || this.scale !== "m") && this.handlePropsChange();
  }
  updated() {
    m(this);
  }
  loaded() {
    this.updateSelectedItems(), ct(this);
  }
  disconnectedCallback() {
    var _a, _b;
    super.disconnectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect(), (_b = this.resizeObserver) == null ? void 0 : _b.disconnect(), Y(this);
  }
  // #endregion
  // #region Private Methods
  openHandler() {
    s(this), !this.disabled && this.reposition(true);
  }
  handleDisabledChange(e) {
    e || (this.open = false);
  }
  flipPlacementsHandler() {
    this.setFilteredPlacements(), this.reposition(true);
  }
  handlePropsChange() {
    this.updateItems(), this.updateGroupScale();
  }
  closeCalciteDropdownOnClick(e) {
    this.disabled || !this.open || e.composedPath().includes(this.el) || this.closeCalciteDropdown(false);
  }
  closeCalciteDropdownOnEvent(e) {
    this.closeCalciteDropdown(), e.stopPropagation();
  }
  closeCalciteDropdownOnOpenEvent(e) {
    e.composedPath().includes(this.el) || (this.open = false);
  }
  pointerEnterHandler() {
    this.disabled || this.type !== "hover" || this.toggleDropdown();
  }
  pointerLeaveHandler() {
    this.disabled || this.type !== "hover" || this.closeCalciteDropdown();
  }
  getTraversableItems() {
    return this.items.filter((e) => !e.disabled && !e.hidden);
  }
  calciteInternalDropdownItemKeyEvent(e) {
    const { keyboardEvent: t2 } = e.detail, i2 = t2.target, s2 = this.getTraversableItems();
    switch (t2.key) {
      case "Tab":
        this.open = false, this.updateTabIndexOfItems(i2);
        break;
      case "ArrowDown":
        xt(s2, i2, "next");
        break;
      case "ArrowUp":
        xt(s2, i2, "previous");
        break;
      case "Home":
        xt(s2, i2, "first");
        break;
      case "End":
        xt(s2, i2, "last");
        break;
    }
    e.stopPropagation();
  }
  handleItemSelect(e) {
    this.updateSelectedItems(), e.stopPropagation(), this.calciteDropdownSelect.emit(), (!this.closeOnSelectDisabled || e.detail.requestedDropdownGroup.selectionMode === "none") && this.closeCalciteDropdown(), e.stopPropagation();
  }
  setFilteredPlacements() {
    const { el: e, flipPlacements: t2 } = this;
    this.filteredFlipPlacements = t2 ? lt(t2, e) : null;
  }
  updateTriggers(e) {
    this.triggers = e.target.assignedElements({
      flatten: true
    }), this.reposition(true);
  }
  updateItems() {
    this.items = this.groups.map((e) => Array.from(e == null ? void 0 : e.querySelectorAll("calcite-dropdown-item"))).reduce((e, t2) => [...e, ...t2], []), this.updateSelectedItems(), this.reposition(true), this.items.forEach((e) => e.scale = this.scale);
  }
  updateGroups(e) {
    const t2 = e.target.assignedElements({ flatten: true }).filter((i2) => i2 == null ? void 0 : i2.matches("calcite-dropdown-group"));
    this.groups = t2, this.updateItems(), this.updateGroupScale();
  }
  updateGroupScale() {
    var _a;
    (_a = this.groups) == null ? void 0 : _a.forEach((e) => e.scale = this.scale);
  }
  resizeObserverCallback(e) {
    e.forEach((t2) => {
      const { target: i2 } = t2;
      this.hasUpdated && (i2 === this.referenceEl ? this.setDropdownWidth() : i2 === this.scrollerEl && this.setMaxScrollerHeight());
    });
  }
  setDropdownWidth() {
    const { referenceEl: e, scrollerEl: t2 } = this, i2 = e == null ? void 0 : e.clientWidth;
    t2.style.minWidth = `${i2}px`;
  }
  setMaxScrollerHeight() {
    const e = this.getMaxScrollerHeight();
    this.scrollerEl.style.maxBlockSize = e > 0 ? `${e}px` : "", this.reposition(true);
  }
  setScrollerAndTransitionEl(e) {
    var _a;
    e && ((_a = this.resizeObserver) == null ? void 0 : _a.observe(e)), this.scrollerEl = e, this.transitionEl = e;
  }
  onBeforeOpen() {
    this.calciteDropdownBeforeOpen.emit();
  }
  onOpen() {
    this.calciteDropdownOpen.emit();
  }
  onBeforeClose() {
    this.calciteDropdownBeforeClose.emit();
  }
  onClose() {
    this.calciteDropdownClose.emit(), X(this);
  }
  setReferenceEl(e) {
    var _a;
    this.referenceEl = e, ct(this), e && ((_a = this.resizeObserver) == null ? void 0 : _a.observe(e));
  }
  setFloatingEl(e) {
    this.floatingEl = e, ct(this);
  }
  keyDownHandler(e) {
    if (!e.composedPath().includes(this.referenceEl))
      return;
    const { defaultPrevented: t2, key: i2 } = e;
    if (!t2) {
      if (i2 === "Escape") {
        this.closeCalciteDropdown(), e.preventDefault();
        return;
      }
      if (this.open && e.shiftKey && i2 === "Tab") {
        this.closeCalciteDropdown(), e.preventDefault();
        return;
      }
      t(i2) ? (this.toggleDropdown(), e.preventDefault()) : (i2 === "ArrowDown" || i2 === "ArrowUp") && (e.preventDefault(), this.focusLastDropdownItem = i2 === "ArrowUp", this.open = true, this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd));
    }
  }
  updateSelectedItems() {
    this.selectedItems = this.items.filter((e) => e.selected);
  }
  getMaxScrollerHeight() {
    const { maxItems: e, items: t2 } = this;
    return t2.length >= e && e > 0 ? this.getYDistance(this.scrollerEl, t2[e - 1]) : 0;
  }
  getYDistance(e, t2) {
    const i2 = e.getBoundingClientRect();
    return t2.getBoundingClientRect().bottom - i2.top;
  }
  closeCalciteDropdown(e = true) {
    this.open = false, e && tt(this.triggers[0]);
  }
  focusOnFirstActiveOrDefaultItem() {
    const t2 = this.getTraversableItems().find((i2) => i2.selected) || (this.focusLastDropdownItem ? this.items[this.items.length - 1] : this.items[0]);
    this.focusLastDropdownItem = false, t2 && tt(t2);
  }
  toggleDropdown() {
    this.open = !this.open, this.open && this.el.addEventListener("calciteDropdownOpen", this.onOpenEnd);
  }
  updateTabIndexOfItems(e) {
    this.items.forEach((t2) => {
      t2.tabIndex = e !== t2 ? -1 : 0;
    });
  }
  // #endregion
  // #region Rendering
  render() {
    const { open: e, guid: t2 } = this;
    return p({ disabled: this.disabled, children: html`<div class="calcite-trigger-container" .id=${`${t2}-menubutton`} @click=${this.toggleDropdown} @keydown=${this.keyDownHandler} ${ref(this.setReferenceEl)}><slot aria-controls=${`${t2}-menu`} .ariaExpanded=${e} aria-haspopup=menu name=${H.dropdownTrigger} @slotchange=${this.updateTriggers}></slot></div><div .ariaHidden=${!e} class=${safeClassMap({
      [m2.wrapper]: true,
      [r2("width", this.width, this.widthScale)]: !!(this.width || this.widthScale)
    })} ${ref(this.setFloatingEl)}><div aria-labelledby=${`${t2}-menubutton`} class=${safeClassMap({
      [m2.content]: true,
      [st.animation]: true,
      [st.animationActive]: e
    })} .id=${`${t2}-menu`} role=menu ${ref(this.setScrollerAndTransitionEl)}><slot @slotchange=${this.updateGroups}></slot></div></div>` });
  }
};
_z.properties = { closeOnSelectDisabled: 7, disabled: 7, flipPlacements: 0, maxItems: 11, open: 7, overlayPositioning: 3, placement: 3, scale: 3, selectedItems: 0, type: 3, widthScale: 3, width: 3 };
_z.shadowRootOptions = { mode: "open", delegatesFocus: true };
_z.styles = T;
var z = _z;
S("calcite-dropdown", z);

export {
  z
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-dropdown/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-PFSBVUGK.js.map
