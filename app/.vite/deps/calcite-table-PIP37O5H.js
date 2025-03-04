import "./chunk-UMLQIXSG.js";
import {
  q
} from "./chunk-3FH2VPTQ.js";
import "./chunk-G5SEJ77O.js";
import "./chunk-KMAZANGA.js";
import "./chunk-LYANRL5K.js";
import "./chunk-LIL4TPKU.js";
import "./chunk-O5FA53B6.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  g,
  s as s2
} from "./chunk-KES7E466.js";
import "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import "./chunk-H3ILWZIP.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  L,
  LitElement,
  S,
  createEvent,
  css,
  html,
  nothing,
  render,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/chunks/global.js
var c = { max: "320px" };
var a = { max: "476px" };
var i = { max: "768px" };
var t = { max: "1152px" };

// node_modules/@esri/calcite-components/dist/chunks/responsive.js
var c2 = {
  width: {
    medium: a2(t.max),
    small: a2(i.max),
    xsmall: a2(a.max),
    xxsmall: a2(c.max)
  }
};
function a2(i2) {
  return parseInt(i2);
}

// node_modules/@esri/calcite-components/dist/components/calcite-pagination/customElement.js
var s3 = {
  list: "list",
  listItem: "list-item",
  hiddenItem: "hidden-item",
  page: "page",
  selected: "selected",
  chevron: "chevron",
  disabled: "disabled",
  ellipsis: "ellipsis"
};
var b2 = {
  next: "chevron-right",
  previous: "chevron-left",
  first: "chevron-start",
  last: "chevron-end"
};
var F = css`:host{display:flex;writing-mode:horizontal-tb}.list{margin:0;display:flex;list-style-type:none;padding:0;column-gap:var(--calcite-spacing-base)}.list-item{margin:0;display:flex;padding:0}.hidden-item{display:none}:host([scale=s]) .chevron,:host([scale=s]) .page,:host([scale=s]) .ellipsis{block-size:1.5rem;padding-inline:.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;min-inline-size:1.5rem}:host([scale=m]) .chevron,:host([scale=m]) .page,:host([scale=m]) .ellipsis{block-size:2rem;padding-inline:.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;min-inline-size:2rem}:host([scale=l]) .chevron,:host([scale=l]) .page,:host([scale=l]) .ellipsis{block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-inline-size:2.75rem}:host([scale=l]) .chevron{padding-inline:.625rem}:host([scale=l]) .page,:host([scale=l]) .ellipsis{padding-inline:.75rem}:host button{outline-color:transparent}:host button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.chevron,.page,.ellipsis{margin:0;box-sizing:border-box;display:flex;align-items:center;justify-content:center;border-style:none;--tw-border-opacity: 0;background-color:transparent;padding:0;vertical-align:baseline;font-family:inherit;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-pagination-color, var(--calcite-color-text-3))}.chevron,.page{cursor:pointer;border-block:2px solid transparent}.chevron:hover,.page:hover{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-pagination-color-hover, var(--calcite-color-text-1))}.chevron:active,.page:active{color:var(--calcite-pagination-color-hover, var(--calcite-color-text-1))}.page:hover{border-block-end-color:var(--calcite-pagination-color-border-hover, var(--calcite-color-border-2))}.page:active{background-color:var(--calcite-pagination-background-color, var(--calcite-color-foreground-3))}.page.selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-pagination-color-hover, var(--calcite-color-text-1));border-block-end-color:var(--calcite-pagination-color-border-active, var(--calcite-color-brand))}.page.selected:focus{border-block-end-width:var(--calcite-spacing-xxs);padding-block-start:var(--calcite-spacing-base)}.chevron:hover{background-color:var(--calcite-pagination-icon-color-background-hover, var(--calcite-color-foreground-2))}.chevron:active{background-color:var(--calcite-pagination-background-color, var(--calcite-color-foreground-3))}.chevron.disabled{pointer-events:none;background-color:transparent}.chevron.disabled>calcite-icon{opacity:var(--calcite-opacity-disabled)}:host([hidden]){display:none}[hidden]{display:none}`;
var I = 2;
var $ = 2;
var h = {
  large: 11,
  medium: 9,
  small: 7,
  xsmall: 5,
  xxsmall: 1
};
var _O = class _O extends LitElement {
  constructor() {
    super(...arguments), this.resizeHandler = ({ contentRect: { width: t2 } }) => this.setMaxItemsToBreakpoint(t2), this.resizeObserver = b("resize", (t2) => t2.forEach(this.resizeHandler)), this.maxItems = h.xxsmall, this.groupSeparator = false, this.messages = s(), this.pageSize = 20, this.scale = "m", this.startItem = 1, this.totalItems = 0, this.calcitePaginationChange = createEvent({ cancelable: false });
  }
  // #endregion
  // #region Public Methods
  /**
   * Set a specified page as active.
   *
   * @param page
   */
  async goTo(t2) {
    switch (t2) {
      case "start":
        this.startItem = 1;
        break;
      case "end":
        this.startItem = this.lastStartItem;
        break;
      default:
        t2 >= Math.ceil(this.totalPages) ? this.startItem = this.lastStartItem : t2 <= 0 ? this.startItem = 1 : this.startItem = (t2 - 1) * this.pageSize + 1;
    }
  }
  /** Go to the next page of results. */
  async nextPage() {
    this.startItem = Math.min(this.lastStartItem, this.startItem + this.pageSize);
  }
  /** Go to the previous page of results. */
  async previousPage() {
    this.startItem = Math.max(1, this.startItem - this.pageSize);
  }
  /** Sets focus on the component's first focusable element. */
  async setFocus() {
    await r(this), this.el.focus();
  }
  // #endregion
  // #region Lifecycle
  connectedCallback() {
    var _a;
    super.connectedCallback(), (_a = this.resizeObserver) == null ? void 0 : _a.observe(this.el);
  }
  async load() {
    this.handleTotalPages(), this.handleLastStartItemChange(), this.handleIsXXSmall();
  }
  willUpdate(t2) {
    (t2.has("totalItems") && (this.hasUpdated || this.totalItems !== 0) || t2.has("pageSize") && (this.hasUpdated || this.pageSize !== 20)) && this.handleTotalPages(), (t2.has("totalItems") && (this.hasUpdated || this.totalItems !== 0) || t2.has("pageSize") && (this.hasUpdated || this.pageSize !== 20) || t2.has("totalPages")) && this.handleLastStartItemChange(), t2.has("maxItems") && (this.hasUpdated || this.maxItems !== h.xxsmall) && this.handleIsXXSmall(), t2.has("messages") && this.effectiveLocaleChange();
  }
  loaded() {
    this.setMaxItemsToBreakpoint(this.el.clientWidth);
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.resizeObserver) == null ? void 0 : _a.disconnect();
  }
  // #endregion
  // #region Private Methods
  handleTotalPages() {
    this.pageSize < 1 && (this.pageSize = 1), this.totalPages = this.totalItems / this.pageSize;
  }
  effectiveLocaleChange() {
    q.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
  }
  handleLastStartItemChange() {
    const { totalItems: t2, pageSize: e, totalPages: i2 } = this;
    this.lastStartItem = (t2 % e === 0 ? t2 - e : Math.floor(i2) * e) + 1;
  }
  handleIsXXSmall() {
    this.isXXSmall = this.maxItems === h.xxsmall;
  }
  setMaxItemsToBreakpoint(t2) {
    if (!(!c2 || !t2)) {
      if (t2 >= c2.width.medium) {
        this.maxItems = h.large;
        return;
      }
      if (t2 >= c2.width.small) {
        this.maxItems = h.medium;
        return;
      }
      if (t2 >= c2.width.xsmall) {
        this.maxItems = h.small;
        return;
      }
      if (t2 >= c2.width.xxsmall) {
        this.maxItems = h.xsmall;
        return;
      }
      this.maxItems = h.xxsmall;
    }
  }
  firstClicked() {
    this.startItem = 1, this.emitUpdate();
  }
  lastClicked() {
    this.startItem = this.lastStartItem, this.emitUpdate();
  }
  async previousClicked() {
    await this.previousPage(), this.emitUpdate();
  }
  async nextClicked() {
    await this.nextPage(), this.emitUpdate();
  }
  showStartEllipsis() {
    return this.totalPages > this.maxItems && Math.floor(this.startItem / this.pageSize) > this.maxItems - I - $;
  }
  showEndEllipsis() {
    return this.totalPages > this.maxItems && (this.totalItems - this.startItem) / this.pageSize > this.maxItems - I - ($ - 1);
  }
  emitUpdate() {
    this.calcitePaginationChange.emit();
  }
  handlePageClick(t2) {
    const e = t2.target;
    this.startItem = parseInt(e.value), this.emitUpdate();
  }
  // #endregion
  // #region Rendering
  renderEllipsis(t2) {
    return keyed(t2, html`<span class=${safeClassMap(s3.ellipsis)} data-test-ellipsis=${t2 ?? nothing}>&hellip;</span>`);
  }
  renderItems() {
    const { totalItems: t2, pageSize: e, startItem: i2, maxItems: a3, totalPages: l, lastStartItem: u, isXXSmall: C } = this, o = [];
    if (C)
      return o.push(this.renderPage(i2)), o;
    const y = t2 > e, x = this.showStartEllipsis(), S2 = this.showEndEllipsis();
    y && o.push(this.renderPage(1)), x && o.push(this.renderEllipsis("start"));
    const n2 = a3 - I - (S2 ? 1 : 0) - (x ? 1 : 0);
    let d, c3;
    l - 1 <= n2 ? (c3 = 1 + e, d = u - e) : i2 / e < n2 ? (c3 = 1 + e, d = 1 + n2 * e) : i2 + n2 * e >= t2 ? (c3 = u - n2 * e, d = u - e) : (c3 = i2 - e * ((n2 - 1) / 2), d = i2 + e * ((n2 - 1) / 2));
    for (let k = 0; k < n2 && c3 <= d; k++)
      o.push(this.renderPage(c3)), c3 = c3 + e;
    return S2 && o.push(this.renderEllipsis("end")), o.push(this.renderPage(u)), o;
  }
  renderPage(t2) {
    const { pageSize: e } = this, i2 = Math.floor(t2 / e) + (e === 1 ? 0 : 1);
    q.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const a3 = q.localize(i2.toString()), l = t2 === this.startItem;
    return html`<li class=${safeClassMap(s3.listItem)}><button .ariaCurrent=${l ? "page" : "false"} class=${safeClassMap({
      [s3.page]: true,
      [s3.selected]: l
    })} @click=${this.handlePageClick} value=${t2 ?? nothing}>${a3}</button></li>`;
  }
  renderPreviousChevron() {
    const { pageSize: t2, startItem: e, messages: i2 } = this, a3 = t2 === 1 ? e <= t2 : e < t2;
    return keyed("previous", html`<button .ariaLabel=${i2.previous} class=${safeClassMap({
      [s3.chevron]: true,
      [s3.disabled]: a3
    })} data-test-chevron=previous .disabled=${a3} @click=${this.previousClicked}><calcite-icon flip-rtl .icon=${b2.previous} .scale=${s2(this.scale)}></calcite-icon></button>`);
  }
  renderNextChevron() {
    const { totalItems: t2, pageSize: e, startItem: i2, messages: a3 } = this, l = i2 + e > t2;
    return keyed("next-button", html`<button .ariaLabel=${a3.next} class=${safeClassMap({
      [s3.chevron]: true,
      [s3.disabled]: l
    })} data-test-chevron=next .disabled=${l} @click=${this.nextClicked}><calcite-icon flip-rtl .icon=${b2.next} .scale=${s2(this.scale)}></calcite-icon></button>`);
  }
  renderFirstChevron() {
    const { messages: t2, startItem: e, isXXSmall: i2 } = this, a3 = e === 1;
    return i2 ? keyed("first-button", html`<button .ariaLabel=${t2.first} class=${safeClassMap({
      [s3.chevron]: true,
      [s3.disabled]: a3
    })} .disabled=${a3} @click=${this.firstClicked}><calcite-icon flip-rtl .icon=${b2.first} .scale=${s2(this.scale)}></calcite-icon></button>`) : null;
  }
  renderLastChevron() {
    const { messages: t2, startItem: e, isXXSmall: i2, lastStartItem: a3 } = this, l = e === a3;
    return i2 ? keyed("last-button", html`<button .ariaLabel=${t2.last} class=${safeClassMap({
      [s3.chevron]: true,
      [s3.disabled]: l
    })} .disabled=${l} @click=${this.lastClicked}><calcite-icon flip-rtl .icon=${b2.last} .scale=${s2(this.scale)}></calcite-icon></button>`) : null;
  }
  render() {
    const t2 = this.renderFirstChevron(), e = this.renderLastChevron();
    return html`<ul class=${safeClassMap(s3.list)}><li class=${safeClassMap({
      [s3.listItem]: true,
      [s3.hiddenItem]: !t2
    })}>${t2}</li><li class=${safeClassMap(s3.listItem)}>${this.renderPreviousChevron()}</li>${this.renderItems()}<li class=${safeClassMap(s3.listItem)}>${this.renderNextChevron()}</li><li class=${safeClassMap({
      [s3.listItem]: true,
      [s3.hiddenItem]: !e
    })}>${e}</li></ul>`;
  }
};
_O.properties = { isXXSmall: 16, lastStartItem: 16, maxItems: 16, totalPages: 16, groupSeparator: 7, messageOverrides: 0, numberingSystem: 1, pageSize: 11, scale: 3, startItem: 11, totalItems: 11 };
_O.shadowRootOptions = { mode: "open", delegatesFocus: true };
_O.styles = F;
var O = _O;
S("calcite-pagination", O);

// node_modules/@esri/calcite-components/dist/components/calcite-table/customElement.js
var n = {
  bordered: "bordered",
  striped: "striped",
  selectionArea: "selection-area",
  paginationArea: "pagination-area",
  container: "container",
  tableContainer: "table-container",
  tableFixed: "table--fixed",
  assistiveText: "assistive-text",
  selectionActions: "selection-actions"
};
var m = {
  selectionActions: "selection-actions",
  tableHeader: "table-header",
  tableFooter: "table-footer"
};
var H = css`@charset "UTF-8";:host([scale=s]){--calcite-internal-table-cell-padding: .25rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size--2);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--3)}:host([scale=m]){--calcite-internal-table-cell-padding: .5rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size--1);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--2)}:host([scale=l]){--calcite-internal-table-cell-padding: 1rem;--calcite-internal-table-cell-font-size: var(--calcite-font-size-0);--calcite-internal-table-cell-font-size-secondary: var(--calcite-font-size--1)}:host{display:flex}.container{display:flex;block-size:100%;inline-size:100%;flex-direction:column}.table-container{overflow:auto;white-space:nowrap;border:1px solid var(--calcite-color-border-3)}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}table{inline-size:100%;border-collapse:collapse;overflow-x:scroll}@-moz-document url-prefix(){table{border-collapse:separate;border-spacing:0}}.table--fixed{table-layout:fixed}.bordered ::slotted(calcite-table-row){--calcite-table-row-border-color: var(--calcite-color-border-3)}.striped ::slotted(calcite-table-row:nth-child(2n+1)){--calcite-table-row-background: var(--calcite-color-foreground-2)}.selection-actions{display:flex;flex-direction:row;margin-inline-start:auto}.selection-area{display:flex;flex-direction:row;align-items:center;padding-block:var(--calcite-internal-table-cell-padding)}.selection-area calcite-chip:last-of-type{margin-inline-end:.5rem}.selection-area calcite-chip:last-of-type:not(:first-of-type){margin-inline-start:.5rem}.selection-area calcite-button{margin-inline-end:1rem}.pagination-area{display:flex;inline-size:100%;flex-direction:row;justify-content:center;padding-block:var(--calcite-internal-table-cell-padding)}calcite-pagination{flex:1;justify-content:center}:host([hidden]){display:none}[hidden]{display:none}`;
var _L = class _L extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.paginationEl = createRef(), this.tableBodySlotEl = createRef(), this.tableFootSlotEl = createRef(), this.tableHeadSlotEl = createRef(), this.colCount = 0, this.pageStartRow = 1, this.selectedCount = 0, this.bordered = false, this.groupSeparator = false, this.interactionMode = "interactive", this.layout = "auto", this.messages = s({ blocking: true }), this.numbered = false, this.pageSize = 0, this.scale = "m", this._selectedItems = [], this.selectionDisplay = "top", this.selectionMode = "none", this.striped = false, this.calciteInternalTableRowFocusChange = createEvent({ cancelable: false }), this.calciteTablePageChange = createEvent({ cancelable: false }), this.calciteTableSelect = createEvent({ cancelable: false }), this.listen("calciteTableRowSelect", this.calciteTableRowSelectListener), this.listen("calciteInternalTableRowSelect", this.calciteInternalTableRowSelectListener), this.listen("calciteInternalTableRowFocusRequest", this.calciteInternalTableRowFocusEvent);
  }
  /**
   * Specifies the component's selected items.
   *
   * @readonly
   */
  get selectedItems() {
    return this._selectedItems;
  }
  async load() {
    this.readCellContentsToAT = /safari/i.test(L()), this.listenOn(this.el.shadowRoot, "slotchange", this.handleSlotChange);
  }
  willUpdate(e) {
    (e.has("groupSeparator") && (this.hasUpdated || this.groupSeparator !== false) || e.has("interactionMode") && (this.hasUpdated || this.interactionMode !== "interactive") || e.has("numbered") && (this.hasUpdated || this.numbered !== false) || e.has("numberingSystem") || e.has("pageSize") && (this.hasUpdated || this.pageSize !== 0) || e.has("scale") && (this.hasUpdated || this.scale !== "m") || e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none")) && this.updateRows();
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  handleSlotChange() {
    this.updateRows();
  }
  calciteTableRowSelectListener(e) {
    e.composedPath().includes(this.el) && this.setSelectedItems(e.target);
  }
  calciteInternalTableRowSelectListener(e) {
    e.composedPath().includes(this.el) && this.updateSelectedItems(false);
  }
  calciteInternalTableRowFocusEvent(e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    const i2 = e.detail.cellPosition, s4 = e.detail.rowPosition, l = e.detail.destination, c3 = e.detail.lastCell, t2 = (_a = this.bodyRows) == null ? void 0 : _a.filter((h2) => !g(h2)), o = (_b = this.allRows) == null ? void 0 : _b.filter((h2) => !g(h2)), f = (_c = this.headRows[this.headRows.length - 1]) == null ? void 0 : _c.positionAll, S2 = (_d = t2[0]) == null ? void 0 : _d.positionAll, w = (_e = t2[t2.length - 1]) == null ? void 0 : _e.positionAll, R = (_f = this.footRows[0]) == null ? void 0 : _f.positionAll, C = (_g = o[o.length - 1]) == null ? void 0 : _g.positionAll, v = l === "next" && s4 === f, z = l === "previous" && s4 === R, T = l === "previous" && s4 === S2, x = l === "next" && s4 === w;
    let r2;
    switch (l) {
      case "first":
        r2 = 0;
        break;
      case "last":
        r2 = C;
        break;
      case "next":
        r2 = v ? S2 : x ? R : s4 + 1;
        break;
      case "previous":
        r2 = z ? w : T ? f : s4 - 1;
        break;
    }
    const y = (_i = (_h = this.allRows) == null ? void 0 : _h.find((h2) => h2.positionAll === r2)) == null ? void 0 : _i.cellCount, A = i2 > y ? y : i2;
    r2 !== void 0 && this.calciteInternalTableRowFocusChange.emit({
      cellPosition: A,
      rowPosition: r2,
      destination: l,
      lastCell: c3
    });
  }
  getSlottedRows(e) {
    var _a;
    return (_a = e == null ? void 0 : e.assignedElements({ flatten: true })) == null ? void 0 : _a.filter((i2) => i2 == null ? void 0 : i2.matches("calcite-table-row"));
  }
  updateRows() {
    var _a, _b, _c;
    const e = this.getSlottedRows(this.tableHeadSlotEl.value) || [], i2 = this.getSlottedRows(this.tableBodySlotEl.value) || [], s4 = this.getSlottedRows(this.tableFootSlotEl.value) || [], l = [...e, ...i2, ...s4];
    e == null ? void 0 : e.forEach((t2) => {
      const o = e == null ? void 0 : e.indexOf(t2);
      t2.rowType = "head", t2.positionSection = o, t2.positionSectionLocalized = this.localizeNumber((o + 1).toString());
    }), i2 == null ? void 0 : i2.forEach((t2) => {
      const o = i2 == null ? void 0 : i2.indexOf(t2);
      t2.rowType = "body", t2.positionSection = o, t2.positionSectionLocalized = this.localizeNumber((o + 1).toString());
    }), s4 == null ? void 0 : s4.forEach((t2) => {
      const o = s4 == null ? void 0 : s4.indexOf(t2);
      t2.rowType = "foot", t2.positionSection = o, t2.positionSectionLocalized = this.localizeNumber((o + 1).toString());
    }), l == null ? void 0 : l.forEach((t2) => {
      t2.interactionMode = this.interactionMode, t2.selectionMode = this.selectionMode, t2.bodyRowCount = i2 == null ? void 0 : i2.length, t2.positionAll = l == null ? void 0 : l.indexOf(t2), t2.numbered = this.numbered, t2.scale = this.scale, t2.readCellContentsToAT = this.readCellContentsToAT, t2.lastVisibleRow = (l == null ? void 0 : l.indexOf(t2)) === l.length - 1;
    });
    const c3 = ((_a = e[0]) == null ? void 0 : _a.cellCount) || ((_c = (_b = e[0]) == null ? void 0 : _b.querySelectorAll("calcite-table-header")) == null ? void 0 : _c.length);
    this.colCount = c3, this.headRows = e, this.bodyRows = i2, this.footRows = s4, this.allRows = l, this.updateSelectedItems(), this.paginateRows();
  }
  handlePaginationChange() {
    var _a;
    const e = (_a = this.paginationEl.value) == null ? void 0 : _a.startItem;
    this.pageStartRow = e || 1, this.calciteTablePageChange.emit(), this.updateRows();
  }
  paginateRows() {
    var _a;
    (_a = this.bodyRows) == null ? void 0 : _a.forEach((e) => {
      const i2 = e.positionSection + 1, s4 = i2 >= this.pageStartRow && i2 < this.pageStartRow + this.pageSize;
      e.itemHidden = this.pageSize > 0 && !s4 && !this.footRows.includes(e), e.lastVisibleRow = i2 === this.pageStartRow + this.pageSize - 1 || i2 === this.bodyRows.length;
    });
  }
  updateSelectedItems(e) {
    var _a, _b;
    const i2 = (_a = this.bodyRows) == null ? void 0 : _a.filter((s4) => s4.selected);
    this._selectedItems = i2, this.selectedCount = i2 == null ? void 0 : i2.length, (_b = this.allRows) == null ? void 0 : _b.forEach((s4) => {
      s4.selectedRowCount = this.selectedCount, s4.selectedRowCountLocalized = this.localizeNumber(this.selectedCount);
    }), e && this.calciteTableSelect.emit();
  }
  handleDeselectAllRows() {
    var _a;
    (_a = this.bodyRows) == null ? void 0 : _a.forEach((e) => {
      e.selected = false;
    }), this.updateSelectedItems(true);
  }
  setSelectedItems(e) {
    var _a;
    (_a = this.bodyRows) == null ? void 0 : _a.forEach((i2) => {
      var _a2;
      (e == null ? void 0 : e.rowType) === "head" ? i2.selected = this.selectedCount !== ((_a2 = this.bodyRows) == null ? void 0 : _a2.length) : i2.selected = e === i2 ? !i2.selected : this.selectionMode === "multiple" ? i2.selected : false;
    }), this.updateSelectedItems(true);
  }
  localizeNumber(e) {
    return q.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    }, q.localize(e.toString());
  }
  // #endregion
  // #region Rendering
  renderSelectionArea() {
    var _a, _b, _c;
    const e = (_b = (_a = this._selectedItems) == null ? void 0 : _a.filter((t2) => g(t2))) == null ? void 0 : _b.length, i2 = this.localizeNumber(e == null ? void 0 : e.toString()), l = `${this.localizeNumber((_c = this.selectedCount) == null ? void 0 : _c.toString())} ${this.messages.selected}`, c3 = `${i2} ${this.messages.hiddenSelected}`;
    return html`<div class=${safeClassMap(n.selectionArea)}><calcite-chip .kind=${this.selectedCount > 0 ? "brand" : "neutral"} .label=${l} .scale=${this.scale} .value=${l}>${l}</calcite-chip>${e > 0 && html`<calcite-chip icon=hide-empty .label=${c3} .scale=${this.scale} title=${c3 ?? nothing} .value=${c3}>${i2}</calcite-chip>` || ""}${this.selectedCount > 0 && html`<calcite-button icon-start=x kind=neutral @click=${this.handleDeselectAllRows} round .scale=${this.scale} .title=${`${this.messages.clear} ${l} ${this.messages.row}`}>${this.messages.clear}</calcite-button>` || ""}<div class=${safeClassMap(n.selectionActions)}><slot name=${m.selectionActions}></slot></div></div>`;
  }
  renderPaginationArea() {
    var _a;
    return html`<div class=${safeClassMap(n.paginationArea)}><calcite-pagination .groupSeparator=${this.groupSeparator} .numberingSystem=${this.numberingSystem} @calcitePaginationChange=${this.handlePaginationChange} .pageSize=${this.pageSize} .scale=${this.scale} start-item=1 .totalItems=${(_a = this.bodyRows) == null ? void 0 : _a.length} ${ref(this.paginationEl)}></calcite-pagination></div>`;
  }
  renderTHead() {
    return html`<thead><slot name=${m.tableHeader} ${ref(this.tableHeadSlotEl)}></slot></thead>`;
  }
  renderTBody() {
    return html`<tbody><slot ${ref(this.tableBodySlotEl)}></slot></tbody>`;
  }
  renderTFoot() {
    return html`<tfoot><slot name=${m.tableFooter} ${ref(this.tableFootSlotEl)}></slot></tfoot>`;
  }
  render() {
    var _a;
    return html`<div class=${safeClassMap(n.container)}>${this.selectionMode !== "none" && this.selectionDisplay !== "none" && this.renderSelectionArea() || ""}<div class=${safeClassMap({
      [n.bordered]: this.bordered,
      [n.striped]: this.striped,
      [n.tableContainer]: true
    })}><table .ariaColCount=${this.colCount} .ariaMultiSelectable=${/* workaround to ensure the attr gets removed; we should be able to avoid the ternary when fixed */
    this.selectionMode === "multiple" ? "true" : null} .ariaRowCount=${(_a = this.allRows) == null ? void 0 : _a.length} class=${safeClassMap({ [n.tableFixed]: this.layout === "fixed" })} .role=${this.interactionMode === "interactive" ? "grid" : "table"} ${ref((e) => {
      e && render(html`<caption class=${safeClassMap(n.assistiveText)}>${this.caption}</caption>${this.renderTHead()}${this.renderTBody()}${this.renderTFoot()}`, e);
    })}></table></div>${this.pageSize > 0 && this.renderPaginationArea() || ""}</div>`;
  }
};
_L.properties = { colCount: 16, pageStartRow: 16, readCellContentsToAT: 16, selectedCount: 16, bordered: 7, caption: 1, groupSeparator: 7, interactionMode: 3, layout: 3, messageOverrides: 0, numbered: 7, numberingSystem: 3, pageSize: 11, scale: 3, selectedItems: 32, _selectedItems: 16, selectionDisplay: 3, selectionMode: 3, striped: 7 };
_L.styles = H;
var L2 = _L;
S("calcite-table", L2);
export {
  L2 as Table
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/global.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/responsive.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-pagination/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-table/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-table-PIP37O5H.js.map
