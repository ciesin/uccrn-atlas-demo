import {
  n
} from "./chunk-G5WEOI5O.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  LitElement,
  S,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-dropdown-group/customElement.js
var c = css`:host{display:block}.container{text-align:start}.dropdown-title{margin-block-end:-1px;display:block;cursor:default;overflow-wrap:break-word;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);font-weight:var(--calcite-font-weight-bold);color:var(--calcite-color-text-2)}.dropdown-separator{display:block;block-size:1px;background-color:var(--calcite-color-border-3)}:host([scale=s]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .dropdown-title{padding:.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .dropdown-title{padding:.75rem}:host([scale=l]){font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .dropdown-title{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;
var _p = class _p extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.mutationObserver = b("mutation", () => this.updateItems()), this.scale = "m", this.selectionMode = "single", this.calciteInternalDropdownItemChange = createEvent({ cancelable: false }), this.listen("calciteInternalDropdownItemSelect", this.updateActiveItemOnChange);
  }
  connectedCallback() {
    var _a;
    super.connectedCallback(), this.updateItems(), (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true });
  }
  load() {
    this.groupPosition = this.getGroupPosition();
  }
  willUpdate(e) {
    e.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "single") && this.updateItems();
  }
  disconnectedCallback() {
    var _a;
    super.disconnectedCallback(), (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  // #endregion
  // #region Private Methods
  updateActiveItemOnChange(e) {
    this.requestedDropdownGroup = e.detail.requestedDropdownGroup, this.requestedDropdownItem = e.detail.requestedDropdownItem, this.calciteInternalDropdownItemChange.emit({
      requestedDropdownGroup: this.requestedDropdownGroup,
      requestedDropdownItem: this.requestedDropdownItem
    });
  }
  updateItems() {
    Array.from(this.el.querySelectorAll("calcite-dropdown-item")).forEach((e) => e.selectionMode = this.selectionMode);
  }
  getGroupPosition() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-dropdown-group"), this.el);
  }
  // #endregion
  // #region Rendering
  render() {
    const e = this.groupTitle ? html`<span aria-hidden=true class="dropdown-title">${this.groupTitle}</span>` : null, o = this.groupPosition > 0 ? html`<div class="dropdown-separator" role=separator></div>` : null;
    return this.el.ariaLabel = this.groupTitle, this.el.role = "group", html`<div class=${safeClassMap({
      [n.container]: true
    })}>${o}${e}<slot></slot></div>`;
  }
};
_p.properties = { groupTitle: 3, scale: 3, selectionMode: 3 };
_p.shadowRootOptions = { mode: "open", delegatesFocus: true };
_p.styles = c;
var p = _p;
S("calcite-dropdown-group", p);

export {
  p
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-dropdown-group/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-HJSS624W.js.map
