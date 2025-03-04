import {
  n
} from "./chunk-G5WEOI5O.js";
import {
  s
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
  wt
} from "./chunk-QD55HJQW.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  nothing2 as nothing,
  safeClassMap,
  setAttribute
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-dropdown-item/customElement.js
var q = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;display:flex;flex-grow:1;align-items:center;outline-color:transparent}.container{position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none;text-align:start;outline-color:transparent}.container a{outline:none;position:relative;display:flex;flex-grow:1;cursor:pointer;align-items:center;color:var(--calcite-color-text-3);text-decoration-line:none}.dropdown-item-content{flex:1 1 auto;padding-block:.125rem}.dropdown-item-icon{position:relative;opacity:0;transition-duration:.15s;transition-timing-function:cubic-bezier(.4,0,.2,1);transform:scale(.9)}:host([scale=s]) .container{padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-item-icon,:host([scale=s]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-item-icon,:host([scale=m]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-block:.625rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-item-icon,:host([scale=l]) .dropdown-item-icon--start{padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .dropdown-item-icon--end{padding-inline-start:var(--calcite-spacing-lg)}:host(:focus) .container{color:var(--calcite-color-text-1);text-decoration-line:none;outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host(:hover:not([disabled])) .container,:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1);text-decoration-line:none}:host(:hover:not([disabled])) .dropdown-link,:host(:active:not([disabled])) .dropdown-link{color:var(--calcite-color-text-1)}:host(:active:not([disabled])) .container{background-color:var(--calcite-color-foreground-3)}:host([selected]) .container:not(.container--none-selection),:host([selected]) .dropdown-link{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}:host([selected]) .container:not(.container--none-selection) calcite-icon,:host([selected]) .dropdown-link calcite-icon{color:var(--calcite-color-brand)}:host(:hover:not([disabled])) .dropdown-item-icon{color:var(--calcite-color-border-1);opacity:1}:host([selected]) .dropdown-item-icon{color:var(--calcite-color-brand);opacity:1}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
var _S = class _S extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.childLink = createRef(), this.disabled = false, this.scale = "m", this.selected = false, this.selectionMode = "single", this.calciteDropdownItemSelect = createEvent({ cancelable: false }), this.calciteInternalDropdownCloseRequest = createEvent({ cancelable: false }), this.calciteInternalDropdownItemKeyEvent = createEvent({ cancelable: false }), this.calciteInternalDropdownItemSelect = createEvent({ cancelable: false }), this.listen("click", this.onClick), this.listen("keydown", this.keyDownHandler), this.listenOn(document.body, "calciteInternalDropdownItemChange", this.updateActiveItemOnChange);
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await r(this), (_a = this.el) == null ? void 0 : _a.focus();
  }
  connectedCallback() {
    super.connectedCallback(), this.initialize();
  }
  load() {
    this.initialize();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(e) {
    switch (e.key) {
      case " ":
      case "Enter":
        this.emitRequestedItem(), this.href && this.childLink.value.click(), e.preventDefault();
        break;
      case "Escape":
        this.calciteInternalDropdownCloseRequest.emit(), e.preventDefault();
        break;
      case "Tab":
        this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        e.preventDefault(), this.calciteInternalDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
    }
  }
  updateActiveItemOnChange(e) {
    e.composedPath().includes(this.parentDropdownGroupEl) && (this.requestedDropdownGroup = e.detail.requestedDropdownGroup, this.requestedDropdownItem = e.detail.requestedDropdownItem, this.determineActiveItem()), e.stopPropagation();
  }
  initialize() {
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group"), this.selectionMode === "none" && (this.selected = false);
  }
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multiple":
        this.el === this.requestedDropdownItem && (this.selected = !this.selected);
        break;
      case "single":
        this.el === this.requestedDropdownItem ? this.selected = true : this.requestedDropdownGroup === this.parentDropdownGroupEl && (this.selected = false);
        break;
      case "none":
        this.selected = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit(), this.calciteInternalDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  // #endregion
  // #region Rendering
  render() {
    const { href: e, selectionMode: t, label: d, iconFlipRtl: c } = this, h = html`<calcite-icon class=${safeClassMap(n.iconStart)} .flipRtl=${c === "start" || c === "both"} .icon=${this.iconStart} .scale=${s(this.scale)}></calcite-icon>`, a = html`<span class=${safeClassMap(n.itemContent)}><slot></slot></span>`, p2 = html`<calcite-icon class=${safeClassMap(n.iconEnd)} .flipRtl=${c === "end" || c === "both"} .icon=${this.iconEnd} .scale=${s(this.scale)}></calcite-icon>`, m2 = this.iconStart && this.iconEnd ? [h, a, p2] : this.iconStart ? [h, a] : this.iconEnd ? [a, p2] : a, f = e ? html`<a .ariaLabel=${d} class=${safeClassMap(n.link)} href=${e ?? nothing} rel=${this.rel ?? nothing} tabindex=-1 target=${this.target ?? nothing} ${ref(this.childLink)}>${m2}</a>` : m2, b = e ? null : t === "single" ? "menuitemradio" : t === "multiple" ? "menuitemcheckbox" : "menuitem", w = t !== "none" ? wt(this.selected) : null, { disabled: u } = this;
    return this.el.ariaChecked = w, this.el.ariaLabel = e ? "" : d, this.el.role = b, setAttribute(this.el, "tabIndex", u ? -1 : 0), p({ disabled: u, children: html`<div class=${safeClassMap({
      [n.container]: true,
      [n.containerNone]: t === "none"
    })}>${t !== "none" ? html`<calcite-icon class=${safeClassMap(n.icon)} .icon=${t === "multiple" ? "check" : "bullet-point"} .scale=${s(this.scale)}></calcite-icon>` : null}${f}</div>` });
  }
};
_S.properties = { disabled: 7, href: 3, iconEnd: 3, iconFlipRtl: 3, iconStart: 3, label: 1, rel: 3, scale: 3, selected: 7, selectionMode: 1, target: 3 };
_S.styles = q;
var S2 = _S;
S("calcite-dropdown-item", S2);

export {
  S2 as S
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-dropdown-item/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-PN2MZSRB.js.map
