import "./chunk-25IFAXOG.js";
import "./chunk-54THXRRT.js";
import {
  t
} from "./chunk-LIL4TPKU.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  s
} from "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import "./chunk-KYXTLOLK.js";
import "./chunk-RQCMOTBU.js";
import {
  xt
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  render,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-table-row/customElement.js
var $ = {
  lastVisibleRow: "last-visible-row"
};
var S2 = css`@charset "UTF-8";:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background: var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color: var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}@-moz-document url-prefix(){tr{box-shadow:inset 0 -1px 0 0 var(--calcite-internal-table-row-border-color)}tr.last-visible-row{box-shadow:inset 0 -1px 0 0 transparent}}:host([item-hidden]){display:none}`;
var _A = class _A extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.rowCells = [], this.tableRowSlotEl = createRef(), this.itemHidden = false, this.disabled = false, this.interactionMode = "interactive", this.numbered = false, this.selected = false, this.selectionMode = "none", this.calciteInternalTableRowFocusRequest = createEvent({ cancelable: false }), this.calciteInternalTableRowSelect = createEvent({ cancelable: false }), this.calciteTableRowSelect = createEvent({ cancelable: false }), this.handleSelectionOfRow = () => {
      (this.rowType === "body" || this.rowType === "head" && this.selectionMode === "multiple") && this.calciteTableRowSelect.emit();
    }, this.handleKeyboardSelection = (e) => {
      t(e.key) && (e.key === " " && e.preventDefault(), this.handleSelectionOfRow());
    }, this.listenOn(document, "calciteInternalTableRowFocusChange", this.calciteInternalTableRowFocusChangeHandler);
  }
  load() {
    this.listenOn(this.el.shadowRoot, "slotchange", this.handleSlotChange);
  }
  willUpdate(e) {
    (e.has("bodyRowCount") || e.has("scale") || e.has("selected") && (this.hasUpdated || this.selected !== false) || e.has("selectedRowCount") || e.has("interactionMode") && (this.hasUpdated || this.interactionMode !== "interactive")) && this.handleCellChanges(), (e.has("numbered") && (this.hasUpdated || this.numbered !== false) || e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none")) && this.handleDelayedCellChanges(), e.has("selected") && this.calciteInternalTableRowSelect.emit();
  }
  updated() {
    m(this);
  }
  loaded() {
    this.tableRowEl && this.rowCells.length > 0 && this.updateCells();
  }
  // #endregion
  // #region Private Methods
  handleSlotChange() {
    this.updateCells();
  }
  handleCellChanges() {
    this.tableRowEl && this.rowCells.length > 0 && this.updateCells();
  }
  handleDelayedCellChanges() {
    this.tableRowEl && this.rowCells.length > 0 && requestAnimationFrame(() => this.updateCells());
  }
  calciteInternalTableRowFocusChangeHandler(e) {
    var _a;
    if (e.target.contains(this.el)) {
      const l = e.detail.cellPosition, s2 = e.detail.rowPosition, i = e.detail.destination, t2 = e.detail.lastCell;
      if (s2 === this.positionAll) {
        if (this.disabled) {
          const d = i === "last" ? "previous" : i === "first" ? "next" : i;
          this.emitTableRowFocusRequest(l, this.positionAll, d);
          return;
        }
        const n = t2 ? this.rowCells[this.rowCells.length - 1] : (_a = this.rowCells) == null ? void 0 : _a.find((d, b) => b + 1 === l);
        n && n.setFocus();
      }
    }
  }
  keyDownHandler(e) {
    var _a;
    if (this.interactionMode !== "interactive")
      return;
    const l = e.target, s2 = e.key, i = e.ctrlKey, t2 = this.rowCells;
    if (l.matches("calcite-table-cell") || l.matches("calcite-table-header"))
      switch (s2) {
        case "ArrowUp":
          this.emitTableRowFocusRequest(l.positionInRow, this.positionAll, "previous"), e.preventDefault();
          break;
        case "ArrowDown":
          this.emitTableRowFocusRequest(l.positionInRow, this.positionAll, "next"), e.preventDefault();
          break;
        case "PageUp":
          this.emitTableRowFocusRequest(l.positionInRow, this.positionAll, "first"), e.preventDefault();
          break;
        case "PageDown":
          this.emitTableRowFocusRequest(l.positionInRow, this.positionAll, "last"), e.preventDefault();
          break;
        case "ArrowLeft":
          xt(t2, l, "previous", false), e.preventDefault();
          break;
        case "ArrowRight":
          xt(t2, l, "next", false), e.preventDefault();
          break;
        case "Home":
          i ? (this.emitTableRowFocusRequest(1, this.positionAll, "first"), e.preventDefault()) : (xt(t2, l, "first", false), e.preventDefault());
          break;
        case "End":
          i ? (this.emitTableRowFocusRequest((_a = this.rowCells) == null ? void 0 : _a.length, this.positionAll, "last", true), e.preventDefault()) : (xt(t2, l, "last", false), e.preventDefault());
          break;
      }
  }
  emitTableRowFocusRequest(e, l, s2, i) {
    this.calciteInternalTableRowFocusRequest.emit({
      cellPosition: e,
      rowPosition: l,
      destination: s2,
      lastCell: i
    });
  }
  updateCells() {
    var _a, _b, _c, _d;
    const e = this.alignment ? this.alignment : this.rowType !== "head" ? "center" : "start", l = (_b = (_a = this.tableRowSlotEl.value) == null ? void 0 : _a.assignedElements({ flatten: true })) == null ? void 0 : _b.filter((t2) => t2.matches("calcite-table-cell") || t2.matches("calcite-table-header")), s2 = (_d = Array.from((_c = this.tableRowEl) == null ? void 0 : _c.querySelectorAll("calcite-table-header, calcite-table-cell"))) == null ? void 0 : _d.filter((t2) => t2.numberCell || t2.selectionCell), i = s2 ? s2.concat(l) : l;
    i.length > 0 && (i == null ? void 0 : i.forEach((t2, n) => {
      t2.interactionMode = this.interactionMode, t2.lastCell = n === i.length - 1, t2.parentRowAlignment = e, t2.parentRowIsSelected = this.selected, t2.parentRowType = this.rowType, t2.positionInRow = n + 1, t2.scale = this.scale, t2.nodeName === "CALCITE-TABLE-CELL" && (t2.readCellContentsToAT = this.readCellContentsToAT, t2.disabled = this.disabled);
    })), this.rowCells = i || [], this.cellCount = i == null ? void 0 : i.length;
  }
  // #endregion
  // #region Rendering
  renderSelectionIcon() {
    const e = this.selectionMode === "multiple" && this.selected ? "check-square-f" : this.selectionMode === "multiple" ? "square" : this.selected ? "circle-f" : "circle";
    return html`<calcite-icon .icon=${e} .scale=${s(this.scale)}></calcite-icon>`;
  }
  renderSelectableCell() {
    return this.rowType === "head" ? keyed("selection-head", html`<calcite-table-header alignment=center .bodyRowCount=${this.bodyRowCount} @click=${this.handleSelectionOfRow} @keydown=${this.handleKeyboardSelection} .parentRowAlignment=${this.alignment} .selectedRowCount=${this.selectedRowCount} .selectedRowCountLocalized=${this.selectedRowCountLocalized} .selectionCell=${true} .selectionMode=${this.selectionMode}></calcite-table-header>`) : this.rowType === "body" ? keyed("selection-body", html`<calcite-table-cell alignment=center @click=${this.handleSelectionOfRow} @keydown=${this.handleKeyboardSelection} .parentRowAlignment=${this.alignment} .parentRowIsSelected=${this.selected} .parentRowPositionLocalized=${this.positionSectionLocalized} .selectionCell=${true}>${this.renderSelectionIcon()}</calcite-table-cell>`) : keyed("selection-foot", html`<calcite-table-cell alignment=center .parentRowAlignment=${this.alignment} .selectionCell=${true}></calcite-table-cell>`);
  }
  renderNumberedCell() {
    return this.rowType === "head" ? keyed("numbered-head", html`<calcite-table-header alignment=center .numberCell=${true} .parentRowAlignment=${this.alignment}></calcite-table-header>`) : this.rowType === "body" ? keyed("numbered-body", html`<calcite-table-cell alignment=center .numberCell=${true} .parentRowAlignment=${this.alignment}>${this.positionSectionLocalized}</calcite-table-cell>`) : keyed("numbered-foot", html`<calcite-table-cell alignment=center .numberCell=${true} .parentRowAlignment=${this.alignment}></calcite-table-cell>`);
  }
  render() {
    return p({ disabled: this.disabled, children: html`<tr .ariaRowIndex=${this.positionAll + 1} .ariaSelected=${this.selected} class=${safeClassMap({ [$.lastVisibleRow]: this.lastVisibleRow })} @keydown=${this.keyDownHandler} ${ref((e) => {
      e && (this.tableRowEl = e, render(html`${this.numbered && this.renderNumberedCell() || ""}${this.selectionMode !== "none" && this.renderSelectableCell() || ""}<slot ${ref(this.tableRowSlotEl)}></slot>`, e));
    })}></tr>` });
  }
};
_A.properties = { alignment: 3, itemHidden: 7, bodyRowCount: 9, cellCount: 9, disabled: 7, interactionMode: 1, lastVisibleRow: 5, numbered: 5, positionAll: 9, positionSection: 9, positionSectionLocalized: 1, readCellContentsToAT: 5, rowType: 1, scale: 1, selected: 7, selectedRowCount: 9, selectedRowCountLocalized: 1, selectionMode: 1 };
_A.styles = S2;
var A = _A;
S("calcite-table-row", A);
export {
  A as TableRow
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-table-row/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-table-row-R2DZXETL.js.map
