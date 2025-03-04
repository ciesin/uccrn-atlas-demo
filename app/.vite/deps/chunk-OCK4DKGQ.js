import {
  t
} from "./chunk-LIL4TPKU.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import {
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  tt,
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
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/array.js
function o(e2, n) {
  return (e2 + n) % n;
}

// node_modules/@esri/calcite-components/dist/chunks/resources2.js
var t2 = {
  menu: "menu",
  defaultTrigger: "default-trigger"
};
var e = {
  tooltip: "tooltip",
  trigger: "trigger"
};
var a = {
  menu: "ellipsis"
};
var i2 = "data-active";

// node_modules/@esri/calcite-components/dist/components/calcite-action-menu/customElement.js
var C = css`:host{box-sizing:border-box;display:flex;flex-direction:column;font-size:var(--calcite-font-size-1)}::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}.default-trigger{position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}slot[name=trigger]::slotted(calcite-action),calcite-action::slotted([slot=trigger]){position:relative;block-size:100%;flex:0 1 auto;align-self:stretch}.menu{display:flex;max-block-size:45vh;flex-direction:column;flex-wrap:nowrap;overflow-y:auto;overflow-x:hidden;outline:2px solid transparent;outline-offset:2px;gap:var(--calcite-action-menu-items-space, 0)}:host([hidden]){display:none}[hidden]{display:none}`;
var y = ["ArrowUp", "ArrowDown", "End", "Home"];
var _P = class _P extends LitElement {
  constructor() {
    super(...arguments), this.guid = `calcite-action-menu-${i()}`, this.actionElements = [], this.menuButtonClick = () => {
      this.toggleOpen();
    }, this.menuButtonId = `${this.guid}-menu-button`, this.menuButtonKeyDown = (t3) => {
      const { key: e2 } = t3, { actionElements: n, activeMenuItemIndex: o2, open: i3 } = this;
      if (n.length) {
        if (t(e2)) {
          if (t3.preventDefault(), !i3) {
            this.toggleOpen();
            return;
          }
          const s = n[o2];
          s ? s.click() : this.toggleOpen(false);
        }
        if (e2 === "Tab") {
          this.open = false;
          return;
        }
        if (e2 === "Escape") {
          this.toggleOpen(false), t3.preventDefault();
          return;
        }
        this.handleActionNavigation(t3, e2, n);
      }
    }, this.menuId = `${this.guid}-menu`, this._open = false, this.updateAction = (t3, e2) => {
      const { guid: n, activeMenuItemIndex: o2 } = this, i3 = `${n}-action-${e2}`;
      t3.tabIndex = -1, t3.setAttribute("role", "menuitem"), t3.id || (t3.id = i3), t3.toggleAttribute(i2, e2 === o2);
    }, this.activeMenuItemIndex = -1, this.appearance = "solid", this.expanded = false, this.overlayPositioning = "absolute", this.placement = "auto", this.scale = "m", this.calciteActionMenuOpen = createEvent({ cancelable: false });
  }
  /** When `true`, the component is open. */
  get open() {
    return this._open;
  }
  set open(t3) {
    const e2 = this._open;
    t3 !== e2 && (this._open = t3, this.openHandler(t3));
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    return await r(this), tt(this.menuButtonEl);
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    super.connectedCallback(), this.connectMenuButtonEl();
  }
  load() {
  }
  willUpdate(t3) {
    t3.has("expanded") && (this.hasUpdated || this.expanded !== false) && this.expandedHandler(), t3.has("activeMenuItemIndex") && (this.hasUpdated || this.activeMenuItemIndex !== -1) && this.updateActions(this.actionElements);
  }
  loaded() {
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.disconnectMenuButtonEl();
  }
  // #endregion
  // #region Private Methods
  expandedHandler() {
    this.open = false, this.setTooltipReferenceElement();
  }
  openHandler(t3) {
    this.menuButtonEl && (this.menuButtonEl.active = t3), this.popoverEl && (this.popoverEl.open = t3), this.activeMenuItemIndex = this.open ? 0 : -1, this.calciteActionMenuOpen.emit(), this.setTooltipReferenceElement();
  }
  connectMenuButtonEl() {
    const { menuButtonId: t3, menuId: e2, open: n, label: o2 } = this, i3 = this.slottedMenuButtonEl || this.defaultMenuButtonEl;
    this.menuButtonEl !== i3 && (this.disconnectMenuButtonEl(), this.menuButtonEl = i3, this.setTooltipReferenceElement(), i3 && (i3.active = n, i3.setAttribute("aria-controls", e2), i3.setAttribute("aria-expanded", wt(n)), i3.setAttribute("aria-haspopup", "true"), i3.id || (i3.id = t3), i3.label || (i3.label = o2), i3.text || (i3.text = o2), i3.addEventListener("click", this.menuButtonClick), i3.addEventListener("keydown", this.menuButtonKeyDown)));
  }
  disconnectMenuButtonEl() {
    const { menuButtonEl: t3 } = this;
    t3 && (t3.removeEventListener("click", this.menuButtonClick), t3.removeEventListener("keydown", this.menuButtonKeyDown), this.menuButtonEl = null);
  }
  setMenuButtonEl(t3) {
    const e2 = t3.target.assignedElements({
      flatten: true
    }).filter((n) => n == null ? void 0 : n.matches("calcite-action"));
    this.slottedMenuButtonEl = e2[0], this.connectMenuButtonEl();
  }
  setDefaultMenuButtonEl(t3) {
    this.defaultMenuButtonEl = t3, t3 && this.connectMenuButtonEl();
  }
  setPopoverEl(t3) {
    t3 && (this.popoverEl = t3, t3.open = this.open);
  }
  handleCalciteActionClick() {
    this.open = false, this.setFocus();
  }
  updateTooltip(t3) {
    const e2 = t3.target.assignedElements({
      flatten: true
    }).filter((n) => n == null ? void 0 : n.matches("calcite-tooltip"));
    this.tooltipEl = e2[0], this.setTooltipReferenceElement();
  }
  setTooltipReferenceElement() {
    const { tooltipEl: t3, expanded: e2, menuButtonEl: n, open: o2 } = this;
    t3 && (t3.referenceElement = !e2 && !o2 ? n : null);
  }
  updateActions(t3) {
    t3 == null ? void 0 : t3.forEach(this.updateAction);
  }
  handleDefaultSlotChange(t3) {
    const e2 = t3.target.assignedElements({
      flatten: true
    }).reduce((n, o2) => (o2 == null ? void 0 : o2.matches("calcite-action")) ? (n.push(o2), n) : (o2 == null ? void 0 : o2.matches("calcite-action-group")) ? n.concat(Array.from(o2.querySelectorAll("calcite-action"))) : n, []);
    this.actionElements = e2.filter((n) => !n.disabled && !n.hidden);
  }
  isValidKey(t3, e2) {
    return !!e2.find((n) => n === t3);
  }
  handleActionNavigation(t3, e2, n) {
    if (!this.isValidKey(e2, y))
      return;
    if (t3.preventDefault(), !this.open) {
      this.toggleOpen(), (e2 === "Home" || e2 === "ArrowDown") && (this.activeMenuItemIndex = 0), (e2 === "End" || e2 === "ArrowUp") && (this.activeMenuItemIndex = n.length - 1);
      return;
    }
    e2 === "Home" && (this.activeMenuItemIndex = 0), e2 === "End" && (this.activeMenuItemIndex = n.length - 1);
    const o2 = this.activeMenuItemIndex;
    e2 === "ArrowUp" && (this.activeMenuItemIndex = o(Math.max(o2 - 1, -1), n.length)), e2 === "ArrowDown" && (this.activeMenuItemIndex = o(o2 + 1, n.length));
  }
  toggleOpen(t3 = !this.open) {
    this.open = t3;
  }
  handlePopoverOpen() {
    this.open = true, this.setFocus();
  }
  handlePopoverClose() {
    this.open = false;
  }
  // #endregion
  // #region Rendering
  renderMenuButton() {
    const { appearance: t3, label: e2, scale: n, expanded: o2 } = this;
    return html`<slot name=${e.trigger} @slotchange=${this.setMenuButtonEl}><calcite-action .appearance=${t3} class=${safeClassMap(t2.defaultTrigger)} .icon=${a.menu} .scale=${n} .text=${e2} .textEnabled=${o2} ${ref(this.setDefaultMenuButtonEl)}></calcite-action></slot>`;
  }
  renderMenuItems() {
    var _a;
    const { actionElements: t3, activeMenuItemIndex: e2, menuId: n, menuButtonEl: o2, label: i3, placement: s, overlayPositioning: p, flipPlacements: m } = this, f = ((_a = t3[e2]) == null ? void 0 : _a.id) || null;
    return html`<calcite-popover auto-close .flipPlacements=${m} focus-trap-disabled .label=${i3} offset-distance=0 @calcitePopoverClose=${this.handlePopoverClose} @calcitePopoverOpen=${this.handlePopoverOpen} .overlayPositioning=${p} .placement=${s} pointer-disabled .referenceElement=${o2} trigger-disabled ${ref(this.setPopoverEl)}><div aria-activedescendant=${f ?? nothing} aria-labelledby=${(o2 == null ? void 0 : o2.id) ?? nothing} class=${safeClassMap(t2.menu)} id=${n ?? nothing} @click=${this.handleCalciteActionClick} role=menu tabindex=-1><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></calcite-popover>`;
  }
  render() {
    return html`${this.renderMenuButton()}${this.renderMenuItems()}<slot name=${e.tooltip} @slotchange=${this.updateTooltip}></slot>`;
  }
};
_P.properties = { activeMenuItemIndex: 16, menuButtonEl: 16, appearance: 3, expanded: 7, flipPlacements: 0, label: 1, open: 7, overlayPositioning: 3, placement: 3, scale: 3 };
_P.styles = C;
var P = _P;
S("calcite-action-menu", P);

export {
  e
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/array.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/resources2.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-action-menu/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-OCK4DKGQ.js.map
