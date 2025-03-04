import {
  c as c2,
  e,
  n,
  o
} from "./chunk-I2VOGHVX.js";
import {
  c,
  f,
  p as p2
} from "./chunk-GGM626BI.js";
import "./chunk-PFSBVUGK.js";
import "./chunk-PN2MZSRB.js";
import "./chunk-HJSS624W.js";
import "./chunk-G5WEOI5O.js";
import "./chunk-WWKEPYTK.js";
import {
  ot
} from "./chunk-RB3I4NA3.js";
import "./chunk-75ZAPGBC.js";
import "./chunk-LIL4TPKU.js";
import "./chunk-TWQBATEK.js";
import "./chunk-MF3N5VFJ.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  s as s2
} from "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
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
import "./chunk-RQCMOTBU.js";
import {
  bt,
  et,
  ut
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-sort-handle/customElement.js
var m2 = {
  handle: "handle",
  dropdown: "dropdown"
};
var u = {
  drag: "drag",
  blank: "blank"
};
var c3 = {
  label: "{label}",
  position: "{position}",
  total: "{total}"
};
var f2 = ["top", "up", "down", "bottom"];
var H = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}.dropdown{block-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}:host([hidden]){display:none}[hidden]{display:none}`;
var _B = class _B extends LitElement {
  constructor() {
    super(...arguments), this.disabled = false, this.messages = s({ blocking: true }), this.moveToItems = [], this.open = false, this.overlayPositioning = "absolute", this.placement = ot, this.scale = "m", this.calciteSortHandleBeforeClose = createEvent({ cancelable: false }), this.calciteSortHandleBeforeOpen = createEvent({ cancelable: false }), this.calciteSortHandleClose = createEvent({ cancelable: false }), this.calciteSortHandleMove = createEvent({ cancelable: false }), this.calciteSortHandleOpen = createEvent({ cancelable: false }), this.calciteSortHandleReorder = createEvent({ cancelable: false });
  }
  // #endregion
  // #region State Properties
  get hasSetInfo() {
    return typeof this.setPosition == "number" && typeof this.setSize == "number";
  }
  get isSetDisabled() {
    const { setPosition: e2, setSize: t, moveToItems: o2 } = this;
    return this.hasSetInfo ? e2 < 1 || t < 1 || t < 2 && o2.length < 1 : false;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    await r(this), (_a = this.dropdownEl) == null ? void 0 : _a.setFocus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
  }
  willUpdate(e2) {
    e2.has("open") && (this.hasUpdated || this.open !== false) && this.openHandler();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  openHandler() {
    if (this.disabled) {
      this.open = false;
      return;
    }
    this.dropdownEl && (this.dropdownEl.open = this.open);
  }
  setDropdownEl(e2) {
    e2 && (this.dropdownEl = e2, this.openHandler());
  }
  getLabel() {
    const { label: e2, messages: t, setPosition: o2, setSize: s3 } = this;
    if (!this.hasSetInfo)
      return e2 ?? "";
    let n2 = e2 ? t.repositionLabel.replace(c3.label, e2) : t.reposition;
    return n2 = n2.replace(c3.position, o2 ? o2.toString() : ""), n2.replace(c3.total, s3 ? s3.toString() : "");
  }
  handleBeforeOpen(e2) {
    e2.stopPropagation(), this.calciteSortHandleBeforeOpen.emit();
  }
  handleOpen(e2) {
    e2.stopPropagation(), this.calciteSortHandleOpen.emit(), this.open = true;
  }
  handleBeforeClose(e2) {
    e2.stopPropagation(), this.calciteSortHandleBeforeClose.emit();
  }
  handleClose(e2) {
    e2.stopPropagation(), this.calciteSortHandleClose.emit(), this.open = false;
  }
  handleReorder(e2) {
    this.calciteSortHandleReorder.emit({
      reorder: e2.target.dataset.value
    });
  }
  handleMoveTo(e2) {
    const t = e2.target.dataset.id, o2 = this.moveToItems.find((s3) => s3.id === t);
    this.calciteSortHandleMove.emit({ moveTo: o2 });
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: e2, flipPlacements: t, open: o2, overlayPositioning: s3, placement: n2, scale: p3, widthScale: b } = this, r2 = this.getLabel(), g = e2 || this.isSetDisabled;
    return p({ disabled: e2, children: html`<calcite-dropdown class=${safeClassMap(m2.dropdown)} .disabled=${g} .flipPlacements=${t} @calciteDropdownBeforeClose=${this.handleBeforeClose} @calciteDropdownBeforeOpen=${this.handleBeforeOpen} @calciteDropdownClose=${this.handleClose} @calciteDropdownOpen=${this.handleOpen} .overlayPositioning=${s3} .placement=${n2} .scale=${p3} .widthScale=${b} ${ref(this.setDropdownEl)}><calcite-action .active=${o2} appearance=transparent class=${safeClassMap(m2.handle)} .dragHandle=${true} .icon=${e2 ? u.blank : u.drag} .label=${r2} .scale=${p3} slot=trigger .text=${r2} title=${r2 ?? nothing}></calcite-action>${this.renderGroup()}${this.renderMoveToGroup()}</calcite-dropdown>` });
  }
  renderMoveToItem(e2) {
    return keyed(e2.id, html`<calcite-dropdown-item data-id=${e2.id ?? nothing} .label=${e2.label} @calciteDropdownItemSelect=${this.handleMoveTo}>${e2.label}</calcite-dropdown-item>`);
  }
  renderGroup() {
    return this.hasSetInfo ? keyed("reorder", html`<calcite-dropdown-group .groupTitle=${this.messages.reorder} .scale=${this.scale} selection-mode=none>${this.renderTop()}${this.renderUp()}${this.renderDown()}${this.renderBottom()}</calcite-dropdown-group>`) : null;
  }
  renderMoveToGroup() {
    const { messages: e2, moveToItems: t, scale: o2 } = this;
    return t.length ? keyed("move-to-items", html`<calcite-dropdown-group .groupTitle=${e2.moveTo} .scale=${o2} selection-mode=none>${t.map((s3) => this.renderMoveToItem(s3))}</calcite-dropdown-group>`) : null;
  }
  renderDropdownItem(e2, t) {
    return keyed(f2[e2], html`<calcite-dropdown-item data-value=${f2[e2] ?? nothing} .label=${t} @calciteDropdownItemSelect=${this.handleReorder}>${t}</calcite-dropdown-item>`);
  }
  renderTop() {
    const { setPosition: e2 } = this;
    return e2 !== 1 && e2 !== 2 ? this.renderDropdownItem(0, this.messages.moveToTop) : null;
  }
  renderUp() {
    return this.setPosition !== 1 ? this.renderDropdownItem(1, this.messages.moveUp) : null;
  }
  renderDown() {
    return this.setPosition !== this.setSize ? this.renderDropdownItem(2, this.messages.moveDown) : null;
  }
  renderBottom() {
    const { setPosition: e2, setSize: t } = this;
    return e2 !== t && e2 !== t - 1 ? this.renderDropdownItem(3, this.messages.moveToBottom) : null;
  }
};
_B.properties = { hasSetInfo: 16, isSetDisabled: 16, disabled: 7, flipPlacements: 0, label: 1, messageOverrides: 0, messages: 0, moveToItems: 0, open: 7, overlayPositioning: 3, placement: 3, scale: 3, setPosition: 9, setSize: 9, widthScale: 3 };
_B.styles = H;
var B = _B;
S("calcite-sort-handle", B);

// node_modules/@esri/calcite-components/dist/components/calcite-list-item/customElement.js
var q = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}:host([filter-hidden]),:host([closed]){display:none}.wrapper--bordered{border-block-end:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{box-sizing:border-box;display:flex;flex:1 1 0%;overflow:hidden;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.container *{box-sizing:border-box}.container--hover:hover{cursor:pointer;background-color:var(--calcite-list-background-color-hover, var(--calcite-color-foreground-2))}.container:active{background-color:var(--calcite-list-background-color-press, var(--calcite-color-foreground-1))}.container--border{position:relative}.container--border:before{position:absolute;inline-size:var(--calcite-border-width-lg);inset-block:0;inset-inline-start:0;background-color:transparent;content:""}.container--border-selected:before{background-color:var(--calcite-list-selection-border-color, var(--calcite-color-brand))}.container:hover.container--border-unselected:before{background-color:var(--calcite-list-selection-border-color, var(--calcite-color-border-1))}.nested-container{display:none;flex-direction:column;border-width:0px;border-style:solid;border-color:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3));margin-inline-start:var(--calcite-list-spacing-indent, 1.5rem)}.nested-container--open{display:flex}.selection-container{display:flex;padding-block:0px;color:var(--calcite-list-icon-color, var(--calcite-color-border-input))}:host(:not([disabled]):not([selected])) .container:hover .selection-container--single{color:var(--calcite-list-icon-color, var(--calcite-color-border-input))}:host([selected]:hover) .selection-container,:host([selected]:hover) .selection-container--single,:host([selected]) .selection-container{color:var(--calcite-list-icon-color, var(--calcite-color-brand))}.content-container-wrapper{display:flex;flex:1 1 auto}.content-container-wrapper--bordered{border-block-end:1px solid var(--calcite-list-border-color, var(--calcite-color-border-3))}.content-container{display:flex;flex:1 1 auto;-webkit-user-select:none;user-select:none;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-list-content-text-color, var(--calcite-color-text-2))}.content-container--unavailable{opacity:var(--calcite-opacity-disabled)}.row,.grid-cell{outline-color:transparent}.row{position:relative}.row:focus,.grid-cell:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.content,.custom-content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;line-height:var(--calcite-font-line-height-relative-snug)}.label{color:var(--calcite-list-label-text-color, var(--calcite-color-text-1))}.description{color:var(--calcite-list-description-text-color, var(--calcite-color-text-3))}.icon{align-self:center;color:var(--calcite-list-icon-color, var(--calcite-color-text-3))}:host([display-mode=flat][drag-handle]:is([selection-mode=none],[selection-appearance=border])) .drag-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s]) .actions-start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .content-container{gap:var(--calcite-spacing-sm);min-block-size:32px;padding-block:var(--calcite-spacing-xxs);padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s]) .content,:host([scale=s]) .custom-content,:host([scale=s]) .label{font-size:var(--calcite-font-size--2)}:host([scale=s]) .description{font-size:var(--calcite-font-size--3)}:host([scale=s][display-mode=flat]:not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=s][display-mode=flat]:not([drag-handle])) .selection-container{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=s][display-mode=flat][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs) var(--calcite-spacing-sm)}:host([scale=s][display-mode=nested]) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-sm)}:host([scale=s][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=s][display-mode=nested][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs)}:host([scale=m]) .actions-start{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m]) .content-container{gap:var(--calcite-spacing-sm);min-block-size:40px;padding-block:var(--calcite-spacing-sm);padding-inline-end:var(--calcite-spacing-md)}:host([scale=m]) .content,:host([scale=m]) .custom-content{font-size:var(--calcite-font-size--2)}:host([scale=m]) .label{font-size:var(--calcite-font-size--1)}:host([scale=m]) .description{font-size:var(--calcite-font-size--2)}:host([scale=m][display-mode=flat]) .container{padding-inline-start:var(--calcite-spacing-md)}:host([scale=m][display-mode=flat]) .selection-container{padding-inline-end:var(--calcite-spacing-sm)}:host([scale=m][display-mode=flat][drag-handle]) .container{padding-inline-start:0}:host([scale=m][display-mode=flat][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs) var(--calcite-spacing-sm)}:host([scale=m][display-mode=nested]) .container{padding-inline-start:var(--calcite-spacing-xxs)}:host([scale=m][display-mode=nested]) .selection-container{padding-inline-end:var(--calcite-spacing-xxs)}:host([scale=m][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-md)}:host([scale=m][display-mode=nested][drag-handle]) .container{padding-inline-start:0}:host([scale=m][display-mode=nested][drag-handle]) .selection-container{padding-inline:var(--calcite-spacing-xxs)}:host([scale=l]) .actions-start{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l]) .content-container{gap:var(--calcite-spacing-md);min-block-size:56px;padding-block:.625rem;padding-inline-end:var(--calcite-spacing-lg)}:host([scale=l]) .content,:host([scale=l]) .custom-content,:host([scale=l]) .label{font-size:var(--calcite-font-size-0)}:host([scale=l]) .description{font-size:var(--calcite-font-size--1)}:host([scale=l]) .nested-container{margin-inline-start:1.75rem}:host([scale=l][display-mode=flat]) .container{padding-inline-start:var(--calcite-spacing-lg)}:host([scale=l][display-mode=flat]) .selection-container{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][display-mode=flat][drag-handle]) .container{padding-inline-start:0}:host([scale=l][display-mode=flat][drag-handle]) .selection-container{padding-inline-end:var(--calcite-spacing-md)}:host([scale=l][display-mode=nested]) .container{padding-inline-start:var(--calcite-spacing-xxs)}:host([scale=l][display-mode=nested][drag-handle]) .container{padding-inline-start:0}:host([scale=l][display-mode=nested][selection-appearance=icon]:not([selection-mode=none]):not([drag-handle])) .container{padding-inline-start:var(--calcite-spacing-lg)}.label,.description,.content-bottom{font-family:var(--calcite-font-family);font-weight:var(--calcite-font-weight-normal);word-wrap:break-word;word-break:break-word}:host([selected]) .label{font-weight:var(--calcite-font-weight-medium)}:host([selected]) .icon{color:var(--calcite-list-icon-color, var(--calcite-color-text-1))}:host([selected]) .description{color:var(--calcite-list-description-text-color, var(--calcite-color-text-2))}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:1 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){align-self:center}.content-bottom{display:flex;flex-direction:column}.content-container--has-center-content .content-start,.content-container--has-center-content .content-end{flex:0 1 auto}.open-container{color:var(--calcite-list-icon-color, var(--calcite-color-text-3));padding-inline:var(--calcite-spacing-xxs)}:host(:not([disabled])) .container:hover .open-container{color:var(--calcite-list-icon-color, var(--calcite-color-text-1))}.actions-start,.actions-end,.content-start,.content-end,.selection-container,.drag-container,.open-container{display:flex;align-items:center}.actions-start calcite-action,.actions-start calcite-sort-handle,.actions-end calcite-action,.actions-end calcite-sort-handle,.content-start calcite-action,.content-start calcite-sort-handle,.content-end calcite-action,.content-end calcite-sort-handle,.selection-container calcite-action,.selection-container calcite-sort-handle,.drag-container calcite-action,.drag-container calcite-sort-handle,.open-container calcite-action,.open-container calcite-sort-handle{align-self:stretch}.open-container,.selection-container{cursor:pointer}.actions-start,.actions-end{position:relative;padding:0}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-sort-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-sort-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}.row:focus .actions-start,.row:focus .actions-end{inset-block:.125rem}.row:focus .actions-start .close,.row:focus .actions-start ::slotted(calcite-action),.row:focus .actions-start ::slotted(calcite-action-menu),.row:focus .actions-start ::slotted(calcite-sort-handle),.row:focus .actions-start ::slotted(calcite-dropdown),.row:focus .actions-end .close,.row:focus .actions-end ::slotted(calcite-action),.row:focus .actions-end ::slotted(calcite-action-menu),.row:focus .actions-end ::slotted(calcite-sort-handle),.row:focus .actions-end ::slotted(calcite-dropdown){block-size:calc(100% - .25rem)}.row:focus:after,.row:focus:before{position:absolute;content:"";inline-size:.125rem;z-index:var(--calcite-z-index-header);background-color:var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));inset-block:0}.row:focus:before{inset-inline-start:0}.row:focus:after{inset-inline-end:0}.container--border:focus:before{display:none}::slotted(calcite-list:empty){border-block-start-width:0px}:host([hidden]){display:none}[hidden]{display:none}`;
var I = /* @__PURE__ */ new Map();
var _J = class _J extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.actionsEndEl = createRef(), this.actionsStartEl = createRef(), this.containerEl = createRef(), this.contentEl = createRef(), this.defaultSlotEl = createRef(), this.handleGridEl = createRef(), this.hasActionsEnd = false, this.hasActionsStart = false, this.hasContentBottom = false, this.hasContentEnd = false, this.hasContentStart = false, this.hasCustomContent = false, this.level = null, this.openable = false, this.active = false, this.bordered = false, this.closable = false, this.closed = false, this.disabled = false, this.dragDisabled = false, this.dragHandle = false, this.filterHidden = false, this.interactionMode = null, this.messages = s(), this.displayMode = "flat", this.moveToItems = [], this.open = false, this.scale = "m", this.selected = false, this.selectionAppearance = null, this.selectionMode = null, this.setPosition = null, this.setSize = null, this.sortHandleOpen = false, this.unavailable = false, this.calciteInternalFocusPreviousItem = createEvent({ cancelable: false }), this.calciteInternalListItemActive = createEvent({ cancelable: false }), this.calciteInternalListItemChange = createEvent({ cancelable: false }), this.calciteInternalListItemSelect = createEvent({ cancelable: false }), this.calciteInternalListItemSelectMultiple = createEvent({ cancelable: false }), this.calciteInternalListItemToggle = createEvent({ cancelable: false }), this.calciteListItemClose = createEvent({ cancelable: false }), this.calciteListItemSelect = createEvent({ cancelable: false }), this.calciteListItemSortHandleBeforeClose = createEvent({ cancelable: false }), this.calciteListItemSortHandleBeforeOpen = createEvent({ cancelable: false }), this.calciteListItemSortHandleClose = createEvent({ cancelable: false }), this.calciteListItemSortHandleOpen = createEvent({ cancelable: false }), this.calciteListItemToggle = createEvent({ cancelable: false }), this.listen("calciteInternalListItemGroupDefaultSlotChange", this.handleCalciteInternalListDefaultSlotChanges), this.listen("calciteInternalListDefaultSlotChange", this.handleCalciteInternalListDefaultSlotChanges);
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await r(this);
    const { containerEl: { value: e2 }, parentListEl: t } = this, n2 = I.get(t);
    if (typeof n2 == "number") {
      const l = this.getGridCells();
      l[n2] ? this.focusCell(l[n2]) : e2 == null ? void 0 : e2.focus();
      return;
    }
    e2 == null ? void 0 : e2.focus();
  }
  connectedCallback() {
    super.connectedCallback();
    const { el: e2 } = this;
    this.parentListEl = e2.closest(c), this.level = p2(e2) + 1, this.setSelectionDefaults();
  }
  async load() {
  }
  /**
   * TODO: [MIGRATION] Consider inlining some of the watch functions called inside of this method to reduce boilerplate code
   *
   * @param changes
   */
  willUpdate(e2) {
    e2.has("active") && (this.hasUpdated || this.active !== false) && this.activeHandler(this.active), e2.has("closed") && (this.hasUpdated || this.closed !== false) && this.handleClosedChange(), e2.has("disabled") && (this.hasUpdated || this.disabled !== false) && this.handleDisabledChange(), e2.has("open") && (this.hasUpdated || this.open !== false) && this.handleOpenChange(), e2.has("selected") && (this.hasUpdated || this.selected !== false) && this.handleSelectedChange(), e2.has("sortHandleOpen") && (this.hasUpdated || this.sortHandleOpen !== false) && this.sortHandleOpenHandler(), e2.has("displayMode") && this.hasUpdated && this.handleOpenableChange(this.defaultSlotEl.value);
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Private Methods
  activeHandler(e2) {
    e2 || this.focusCell(null, false);
  }
  handleClosedChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleDisabledChange() {
    this.emitCalciteInternalListItemChange();
  }
  handleOpenChange() {
    this.emitCalciteInternalListItemToggle();
  }
  handleSelectedChange() {
    this.calciteInternalListItemSelect.emit();
  }
  sortHandleOpenHandler() {
    this.sortHandleEl && (this.sortHandleEl.open = this.sortHandleOpen);
  }
  handleCalciteInternalListDefaultSlotChanges(e2) {
    e2.stopPropagation(), this.handleOpenableChange(this.defaultSlotEl.value);
  }
  setSortHandleEl(e2) {
    this.sortHandleEl = e2, this.sortHandleOpenHandler();
  }
  handleSortHandleBeforeOpen(e2) {
    e2.stopPropagation(), this.calciteListItemSortHandleBeforeOpen.emit();
  }
  handleSortHandleBeforeClose(e2) {
    e2.stopPropagation(), this.calciteListItemSortHandleBeforeClose.emit();
  }
  handleSortHandleClose(e2) {
    e2.stopPropagation(), this.sortHandleOpen = false, this.calciteListItemSortHandleClose.emit();
  }
  handleSortHandleOpen(e2) {
    e2.stopPropagation(), this.sortHandleOpen = true, this.calciteListItemSortHandleOpen.emit();
  }
  emitInternalListItemActive() {
    this.calciteInternalListItemActive.emit();
  }
  emitCalciteInternalListItemToggle() {
    this.calciteInternalListItemToggle.emit();
  }
  emitCalciteInternalListItemChange() {
    this.calciteInternalListItemChange.emit();
  }
  handleCloseClick() {
    this.closed = true, this.calciteListItemClose.emit();
  }
  handleContentSlotChange(e2) {
    this.hasCustomContent = ut(e2);
  }
  handleActionsStartSlotChange(e2) {
    this.hasActionsStart = ut(e2);
  }
  handleActionsEndSlotChange(e2) {
    this.hasActionsEnd = ut(e2);
  }
  handleContentStartSlotChange(e2) {
    this.hasContentStart = ut(e2);
  }
  handleContentEndSlotChange(e2) {
    this.hasContentEnd = ut(e2);
  }
  handleContentBottomSlotChange(e2) {
    this.hasContentBottom = ut(e2);
  }
  setSelectionDefaults() {
    const { parentListEl: e2, selectionMode: t, selectionAppearance: n2 } = this;
    e2 && (t || (this.selectionMode = e2.selectionMode), n2 || (this.selectionAppearance = e2.selectionAppearance));
  }
  handleOpenableChange(e2) {
    if (!e2)
      return;
    const t = f(e2);
    t.lists.forEach((n2) => {
      n2.displayMode = this.displayMode;
    }), this.openable = this.displayMode === "nested" && (t.lists.length > 0 || t.items.length > 0);
  }
  handleDefaultSlotChange(e2) {
    this.handleOpenableChange(e2.target);
  }
  handleToggleClick() {
    this.toggle();
  }
  toggle(e2 = !this.open) {
    this.open = e2, this.calciteListItemToggle.emit();
  }
  handleItemClick(e2) {
    e2.defaultPrevented || this.toggleSelected(e2.shiftKey);
  }
  async toggleSelected(e2) {
    const { selectionMode: t, selected: n2 } = this;
    this.disabled || (t === "multiple" || t === "single" ? this.selected = !n2 : t === "single-persist" && (this.selected = true), this.calciteInternalListItemSelectMultiple.emit({
      selectMultiple: e2 && t === "multiple"
    }), await this.updateComplete, this.calciteListItemSelect.emit());
  }
  getGridCells() {
    return [
      this.handleGridEl.value,
      this.actionsStartEl.value,
      this.contentEl.value,
      this.actionsEndEl.value
    ].filter((e2) => e2 && !e2.hidden);
  }
  handleItemKeyDown(e2) {
    if (e2.defaultPrevented)
      return;
    const { key: t } = e2, n2 = e2.composedPath(), { containerEl: { value: l }, actionsStartEl: { value: h }, actionsEndEl: { value: s3 }, open: g, openable: m3 } = this, c4 = this.getGridCells(), p3 = c4.findIndex((f3) => n2.includes(f3));
    if (t === "Enter" && !n2.includes(h) && !n2.includes(s3))
      e2.preventDefault(), this.toggleSelected(e2.shiftKey);
    else if (t === "ArrowRight") {
      e2.preventDefault();
      const f3 = p3 + 1;
      p3 === -1 ? !g && m3 ? (this.toggle(true), this.focusCell(null)) : c4[0] && this.focusCell(c4[0]) : c4[p3] && c4[f3] && this.focusCell(c4[f3]);
    } else if (t === "ArrowLeft") {
      e2.preventDefault();
      const f3 = p3 - 1;
      p3 === -1 ? (this.focusCell(null), g && m3 ? this.toggle(false) : this.calciteInternalFocusPreviousItem.emit()) : p3 === 0 ? (this.focusCell(null), l.focus()) : c4[p3] && c4[f3] && this.focusCell(c4[f3]);
    }
  }
  focusCellNull() {
    this.focusCell(null);
  }
  setFocusCell(e2, t, n2) {
    const { parentListEl: l } = this;
    n2 && I.set(l, null);
    const h = this.getGridCells();
    h.forEach((s3) => {
      s3.removeAttribute("tabindex"), s3.removeAttribute(c2);
    }), e2 && (e2 === t ? e2.tabIndex = 0 : e2.removeAttribute("tabindex"), e2.setAttribute(c2, ""), n2 && I.set(l, h.indexOf(e2)));
  }
  focusCell(e2, t = true) {
    const n2 = et(e2);
    this.setFocusCell(e2, n2, t), n2 == null ? void 0 : n2.focus();
  }
  // #endregion
  // #region Rendering
  renderSelected() {
    const { selected: e2, selectionMode: t, selectionAppearance: n2 } = this;
    return t === "none" || n2 === "border" ? null : keyed("selection-container", html`<div class=${safeClassMap({
      [n.selectionContainer]: true,
      [n.selectionContainerSingle]: t === "single" || t === "single-persist"
    })} @click=${this.handleItemClick}><calcite-icon .icon=${e2 ? t === "multiple" ? o.selectedMultiple : o.selectedSingle : t === "multiple" ? o.unselectedMultiple : o.unselectedSingle} .scale=${s2(this.scale)}></calcite-icon></div>`);
  }
  renderDragHandle() {
    const { label: e2, dragHandle: t, dragDisabled: n2, setPosition: l, setSize: h, moveToItems: s3 } = this;
    return t ? keyed("drag-handle-container", html`<div .ariaLabel=${e2} class=${safeClassMap({ [n.dragContainer]: true, [n.gridCell]: true })} role=gridcell ${ref(this.handleGridEl)}><calcite-sort-handle .disabled=${n2} .label=${e2} .moveToItems=${s3} @calciteSortHandleBeforeClose=${this.handleSortHandleBeforeClose} @calciteSortHandleBeforeOpen=${this.handleSortHandleBeforeOpen} @calciteSortHandleClose=${this.handleSortHandleClose} @calciteSortHandleOpen=${this.handleSortHandleOpen} overlay-positioning=fixed .scale=${this.scale} .setPosition=${l} .setSize=${h} ${ref(this.setSortHandleEl)}></calcite-sort-handle></div>`) : null;
  }
  renderOpen() {
    const { el: e2, open: t, openable: n2, messages: l, displayMode: h, scale: s3 } = this;
    if (h !== "nested")
      return null;
    const g = bt(e2), m3 = n2 ? t ? o.open : g === "rtl" ? o.closedRTL : o.closedLTR : o.blank, c4 = s2(s3), p3 = n2 ? t ? l.collapse : l.expand : void 0, f3 = n2 ? this.handleToggleClick : void 0;
    return keyed("open-container", html`<div class=${safeClassMap(n.openContainer)} @click=${f3} title=${p3 ?? nothing}>${keyed(m3, html`<calcite-icon .icon=${m3} .scale=${c4}></calcite-icon>`)}</div>`);
  }
  renderActionsStart() {
    const { label: e2, hasActionsStart: t } = this;
    return keyed("actions-start-container", html`<div .ariaLabel=${e2} class=${safeClassMap({ [n.actionsStart]: true, [n.gridCell]: true })} .hidden=${!t} role=gridcell ${ref(this.actionsStartEl)}><slot name=${e.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`);
  }
  renderActionsEnd() {
    const { label: e2, hasActionsEnd: t, closable: n2, messages: l } = this;
    return keyed("actions-end-container", html`<div .ariaLabel=${e2} class=${safeClassMap({ [n.actionsEnd]: true, [n.gridCell]: true })} .hidden=${!(t || n2)} role=gridcell ${ref(this.actionsEndEl)}><slot name=${e.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot>${n2 ? keyed("close-action", html`<calcite-action appearance=transparent class=${safeClassMap(n.close)} .icon=${o.close} .label=${l.close} @click=${this.handleCloseClick} .scale=${this.scale} .text=${l.close}></calcite-action>`) : null}</div>`);
  }
  renderContentStart() {
    const { hasContentStart: e2 } = this;
    return html`<div class=${safeClassMap(n.contentStart)} .hidden=${!e2}><slot name=${e.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`;
  }
  renderCustomContent() {
    const { hasCustomContent: e2 } = this;
    return html`<div class=${safeClassMap(n.customContent)} .hidden=${!e2}><slot name=${e.content} @slotchange=${this.handleContentSlotChange}></slot></div>`;
  }
  renderIconStart() {
    const { iconStart: e2, iconFlipRtl: t, scale: n2 } = this;
    return e2 ? keyed("icon-start", html`<calcite-icon class=${safeClassMap(n.icon)} .flipRtl=${t === "both" || t === "start"} .icon=${e2} .scale=${s2(n2)}></calcite-icon>`) : null;
  }
  renderIconEnd() {
    const { iconEnd: e2, iconFlipRtl: t, scale: n2 } = this;
    return e2 ? keyed("icon-end", html`<calcite-icon class=${safeClassMap(n.icon)} .flipRtl=${t === "both" || t === "end"} .icon=${e2} .scale=${s2(n2)}></calcite-icon>`) : null;
  }
  renderContentEnd() {
    const { hasContentEnd: e2 } = this;
    return html`<div class=${safeClassMap(n.contentEnd)} .hidden=${!e2}><slot name=${e.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`;
  }
  renderContentBottom() {
    const { hasContentBottom: e2 } = this;
    return html`<div class=${safeClassMap(n.contentBottom)} .hidden=${!e2}><slot name=${e.contentBottom} @slotchange=${this.handleContentBottomSlotChange}></slot></div>`;
  }
  renderDefaultContainer() {
    return html`<div class=${safeClassMap({
      [n.nestedContainer]: true,
      [n.nestedContainerOpen]: this.openable && this.open
    })}><slot @slotchange=${this.handleDefaultSlotChange} ${ref(this.defaultSlotEl)}></slot></div>`;
  }
  renderContentProperties() {
    const { label: e2, description: t, hasCustomContent: n2 } = this;
    return !n2 && (e2 || t) ? keyed("content", html`<div class=${safeClassMap(n.content)}>${e2 ? keyed("label", html`<div class=${safeClassMap(n.label)}>${e2}</div>`) : null}${t ? keyed("description", html`<div class=${safeClassMap(n.description)}>${t}</div>`) : null}</div>`) : null;
  }
  renderContentContainer() {
    const { description: e2, label: t, selectionMode: n2, hasCustomContent: l, unavailable: h } = this, s3 = l || !!t || !!e2, g = [
      this.renderContentStart(),
      this.renderCustomContent(),
      this.renderIconStart(),
      this.renderContentProperties(),
      this.renderIconEnd(),
      this.renderContentEnd()
    ];
    return keyed("content-container", html`<div .ariaLabel=${t} class=${safeClassMap({
      [n.gridCell]: true,
      [n.contentContainer]: true,
      [n.contentContainerUnavailable]: h,
      [n.contentContainerSelectable]: n2 !== "none",
      [n.contentContainerHasCenterContent]: s3
    })} @click=${this.handleItemClick} role=gridcell ${ref(this.contentEl)}>${g}</div>`);
  }
  render() {
    const { openable: e2, open: t, level: n2, active: l, label: h, selected: s3, selectionAppearance: g, selectionMode: m3, interactionMode: c4, closed: p3, filterHidden: f3, bordered: y, disabled: L, hasContentBottom: E } = this, H2 = y && E, k = y && !E, x = m3 !== "none" && g === "border", A = x && s3, O = x && !s3, B2 = c4 === "interactive" || c4 === "static" && m3 !== "none" && g === "border";
    return p({ disabled: L, children: html`<div class=${safeClassMap({ [n.wrapper]: true, [n.wrapperBordered]: H2 })}><div .ariaExpanded=${e2 ? t : null} .ariaLabel=${h} .ariaLevel=${n2} .ariaSelected=${s3} class=${safeClassMap({
      [n.row]: true,
      [n.container]: true,
      [n.containerHover]: B2,
      [n.containerBorder]: x,
      [n.containerBorderSelected]: A,
      [n.containerBorderUnselected]: O
    })} .hidden=${p3 || f3} @focus=${this.focusCellNull} @focusin=${this.emitInternalListItemActive} @keydown=${this.handleItemKeyDown} role=row .tabIndex=${l ? 0 : -1} ${ref(this.containerEl)}>${this.renderDragHandle()}${this.renderSelected()}${this.renderOpen()}<div class=${safeClassMap({
      [n.contentContainerWrapper]: true,
      [n.contentContainerWrapperBordered]: k
    })}>${this.renderActionsStart()}${this.renderContentContainer()}${this.renderActionsEnd()}</div></div>${this.renderContentBottom()}</div>${this.renderDefaultContainer()}` });
  }
};
_J.properties = { hasActionsEnd: 16, hasActionsStart: 16, hasContentBottom: 16, hasContentEnd: 16, hasContentStart: 16, hasCustomContent: 16, level: 16, openable: 16, parentListEl: 16, active: 5, bordered: 5, closable: 7, closed: 7, description: 1, disabled: 7, dragDisabled: 7, dragHandle: 7, filterHidden: 7, interactionMode: 1, label: 1, messageOverrides: 0, metadata: 0, displayMode: 3, moveToItems: 0, open: 7, scale: 3, selected: 7, selectionAppearance: 3, selectionMode: 3, setPosition: 9, setSize: 9, sortHandleOpen: 7, unavailable: 7, value: 1, iconStart: 3, iconEnd: 3, iconFlipRtl: 3 };
_J.styles = q;
var J = _J;
S("calcite-list-item", J);
export {
  J as ListItem
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-sort-handle/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-list-item/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-list-item-I75MSBTM.js.map
