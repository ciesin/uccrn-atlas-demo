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
  s
} from "./chunk-KYXTLOLK.js";
import {
  bt
} from "./chunk-QD55HJQW.js";
import {
  D,
  LitElement,
  S,
  css,
  html,
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-table-cell/customElement.js
var e = {
  contentCell: "content-cell",
  numberCell: "number-cell",
  footerCell: "footer-cell",
  selectionCell: "selection-cell",
  selectedCell: "selected-cell",
  assistiveText: "assistive-text",
  lastCell: "last-cell",
  staticCell: "static-cell"
};
var g = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-cell-background: var(--calcite-table-cell-background, transparent);display:contents}:host([alignment=center]) td:not(.selection-cell):not(.number-cell){text-align:center}:host([alignment=end]) td:not(.selection-cell):not(.number-cell){text-align:end}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}td{white-space:normal;text-align:start;vertical-align:middle;color:var(--calcite-color-text-1);background:var(--calcite-internal-table-cell-background);font-size:var(--calcite-internal-table-cell-font-size);border-inline-end:1px solid var(--calcite-color-border-3);padding:var(--calcite-internal-table-cell-padding)}td:not(.static-cell){outline-color:transparent}td:not(.static-cell):focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}td.start.content-cell{vertical-align:top}td.end.content-cell{vertical-align:bottom}td.last-cell{border-inline-end:0}.number-cell{background-color:var(--calcite-color-foreground-2)}.footer-cell{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);border-block-start:1px solid var(--calcite-color-border-3)}.number-cell,.selection-cell{text-align:center;border-inline-end:1px solid var(--calcite-color-border-3);inline-size:2rem;min-inline-size:2rem}.selection-cell{color:var(--calcite-color-text-3);inset-inline-start:2rem}.selection-cell:not(.footer-cell){cursor:pointer}.selected-cell:not(.number-cell):not(.footer-cell){--calcite-internal-table-cell-background: var(--calcite-color-foreground-current)}.selection-cell.selected-cell{box-shadow:inset .25rem 0 0 0 var(--calcite-color-brand);color:var(--calcite-color-brand)}.selection-cell.selected-cell calcite-icon{color:var(--calcite-color-brand)}.calcite--rtl.selection-cell.selected-cell{box-shadow:inset -.25rem 0 0 0 var(--calcite-color-brand)}.selection-cell{vertical-align:middle}.selection-cell ::slotted(calcite-icon){pointer-events:none;margin-block-start:.25rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`;
var _C = class _C extends LitElement {
  constructor() {
    super(...arguments), this.containerEl = createRef(), this.contentsText = "", this.focused = false, this.selectionText = "", this.alignment = "start", this.interactionMode = "interactive", this.messages = s(), this.parentRowAlignment = "start", this.scale = "m";
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await r(this), this.containerEl.value.focus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
    this.updateScreenReaderContentsText(), this.updateScreenReaderSelectionText();
  }
  willUpdate(t) {
    t.has("parentRowIsSelected") && this.updateScreenReaderSelectionText();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  updateScreenReaderSelectionText() {
    var _a, _b, _c, _d, _e, _f;
    const t = `${(_a = this.messages) == null ? void 0 : _a.row} ${this.parentRowPositionLocalized} ${(_b = this.messages) == null ? void 0 : _b.selected} ${(_c = this.messages) == null ? void 0 : _c.keyboardDeselect}`, l = `${(_d = this.messages) == null ? void 0 : _d.row} ${this.parentRowPositionLocalized} ${(_e = this.messages) == null ? void 0 : _e.unselected} ${(_f = this.messages) == null ? void 0 : _f.keyboardSelect}`;
    this.selectionText = this.parentRowIsSelected ? t : l;
  }
  updateScreenReaderContentsText() {
    this.contentsText = this.el.textContent;
  }
  onContainerBlur() {
    this.focused = false;
  }
  onContainerFocus() {
    this.focused = true;
  }
  // #endregion
  // #region Rendering
  render() {
    const t = bt(this.el), l = this.disabled || this.interactionMode === "static" && (!this.selectionCell || this.selectionCell && this.parentRowType === "foot");
    return p({ disabled: this.disabled, children: html`<td class=${safeClassMap({
      [e.footerCell]: this.parentRowType === "foot",
      [e.contentCell]: !this.numberCell && !this.selectionCell,
      [e.numberCell]: this.numberCell,
      [e.selectionCell]: this.selectionCell,
      [e.selectedCell]: this.parentRowIsSelected,
      [e.lastCell]: this.lastCell && (!this.rowSpan || this.colSpan && !!this.rowSpan),
      [D.rtl]: t === "rtl",
      [e.staticCell]: l,
      [this.parentRowAlignment]: this.parentRowAlignment === "start" || this.parentRowAlignment === "end"
    })} colSpan=${this.colSpan ?? nothing} @blur=${this.onContainerBlur} @focus=${this.onContainerFocus} .role=${this.interactionMode === "interactive" ? "gridcell" : "cell"} rowSpan=${this.rowSpan ?? nothing} .tabIndex=${l ? -1 : 0} ${ref(this.containerEl)}>${(this.selectionCell || this.readCellContentsToAT) && html`<span .ariaLive=${this.focused ? "polite" : "off"} class=${safeClassMap(e.assistiveText)}>${this.selectionCell && this.selectionText || ""}${this.readCellContentsToAT && !this.selectionCell && this.contentsText || ""}</span>` || ""}<slot @slotchange=${this.updateScreenReaderContentsText}></slot></td>` });
  }
};
_C.properties = { contentsText: 16, focused: 16, selectionText: 16, alignment: 3, colSpan: 11, disabled: 5, interactionMode: 1, lastCell: 5, messageOverrides: 0, numberCell: 5, parentRowAlignment: 1, parentRowIsSelected: 5, parentRowPositionLocalized: 1, parentRowType: 1, positionInRow: 9, readCellContentsToAT: 5, rowSpan: 11, scale: 1, selectionCell: 5 };
_C.styles = g;
var C = _C;
S("calcite-table-cell", C);

export {
  C
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-table-cell/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-25IFAXOG.js.map
