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
  st,
  xt
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-chip-group/customElement.js
var g = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.container{display:flex;inline-size:100%;flex-wrap:wrap;gap:.5rem}::slotted(calcite-chip){flex:none}:host([scale=s]) .container{gap:.25rem}:host([scale=l]) .container{gap:.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
var _I = class _I extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.items = [], this.slotRefEl = createRef(), this.disabled = false, this.scale = "m", this.selectedItems = [], this.selectionMode = "none", this.calciteChipGroupSelect = createEvent({ cancelable: false }), this.listen("calciteInternalChipKeyEvent", this.calciteInternalChipKeyEventListener), this.listen("calciteChipClose", this.calciteChipCloseListener), this.listen("calciteChipSelect", this.calciteChipSelectListener), this.listen("calciteInternalChipSelect", this.calciteInternalChipSelectListener), this.listen("calciteInternalSyncSelectedChips", this.calciteInternalSyncSelectedChips);
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    var _a;
    if (await r(this), !this.disabled)
      return (_a = this.selectedItems[0] || this.items[0]) == null ? void 0 : _a.setFocus();
  }
  load() {
  }
  willUpdate(e) {
    e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none") && this.updateItems();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  calciteInternalChipKeyEventListener(e) {
    var _a;
    if (e.composedPath().includes(this.el)) {
      const t = (_a = this.items) == null ? void 0 : _a.filter((s) => !s.disabled);
      switch (e.detail.key) {
        case "ArrowRight":
          xt(t, e.detail.target, "next");
          break;
        case "ArrowLeft":
          xt(t, e.detail.target, "previous");
          break;
        case "Home":
          xt(t, e.detail.target, "first");
          break;
        case "End":
          xt(t, e.detail.target, "last");
          break;
      }
    }
    e.stopPropagation();
  }
  calciteChipCloseListener(e) {
    var _a, _b, _c, _d;
    const t = e.target;
    ((_a = this.items) == null ? void 0 : _a.includes(t)) && (((_b = this.items) == null ? void 0 : _b.indexOf(t)) > 0 ? xt(this.items, t, "previous") : ((_c = this.items) == null ? void 0 : _c.indexOf(t)) === 0 ? xt(this.items, t, "next") : xt(this.items, t, "first")), this.items = (_d = this.items) == null ? void 0 : _d.filter((s) => s !== t), e.stopPropagation();
  }
  calciteChipSelectListener(e) {
    e.composedPath().includes(this.el) && this.setSelectedItems(true, e.target), e.stopPropagation();
  }
  calciteInternalChipSelectListener(e) {
    e.composedPath().includes(this.el) && this.setSelectedItems(false, e.target), e.stopPropagation();
  }
  calciteInternalSyncSelectedChips(e) {
    e.composedPath().includes(this.el) && (this.updateSelectedItems(), this.selectionMode === "single" && this.selectedItems.length > 1 && this.setSelectedItems(false, e.target)), e.stopPropagation();
  }
  updateItems(e) {
    var _a, _b, _c;
    const t = (_a = this.slotRefEl.value) == null ? void 0 : _a.assignedElements({ flatten: true }).filter((s) => s == null ? void 0 : s.matches("calcite-chip"));
    this.items = e ? st(e) : t, !(((_b = this.items) == null ? void 0 : _b.length) < 1) && ((_c = this.items) == null ? void 0 : _c.forEach((s) => {
      s.interactive = true, s.scale = this.scale, s.selectionMode = this.selectionMode, s.parentChipGroup = this.el;
    }), this.setSelectedItems(false));
  }
  updateSelectedItems() {
    var _a;
    this.selectedItems = (_a = this.items) == null ? void 0 : _a.filter((e) => e.selected);
  }
  setSelectedItems(e, t) {
    var _a;
    t && ((_a = this.items) == null ? void 0 : _a.forEach((s) => {
      const l = t === s;
      switch (this.selectionMode) {
        case "multiple":
          l && (s.selected = !s.selected);
          break;
        case "single":
          s.selected = l ? !s.selected : false;
          break;
        case "single-persist":
          s.selected = !!l;
          break;
      }
    })), this.updateSelectedItems(), e && this.calciteChipGroupSelect.emit();
  }
  // #endregion
  // #region Rendering
  render() {
    const e = this.selectionMode === "none" || this.selectionMode === "multiple" ? "group" : "radiogroup", { disabled: t } = this;
    return p({ disabled: t, children: html`<div .ariaLabel=${this.label} class="container" .role=${e}><slot @slotchange=${this.updateItems} ${ref(this.slotRefEl)}></slot></div>` });
  }
};
_I.properties = { disabled: 7, label: 1, scale: 3, selectedItems: 0, selectionMode: 3 };
_I.styles = g;
var I = _I;
S("calcite-chip-group", I);
export {
  I as ChipGroup
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-chip-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-chip-group-UIF4X7JA.js.map
