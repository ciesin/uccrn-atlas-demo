import {
  e as e3,
  t
} from "./chunk-CL3SKD6S.js";
import "./chunk-B65KDWUG.js";
import "./chunk-4QQ7KHFL.js";
import "./chunk-5XMOCUPU.js";
import {
  e as e2
} from "./chunk-3Y7KHPDW.js";
import {
  O,
  c,
  e
} from "./chunk-4O2ECRMV.js";
import {
  n
} from "./chunk-7EIXRVA4.js";
import "./chunk-BSRIVWBN.js";
import "./chunk-RVUV2HD7.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  P,
  U,
  d,
  p,
  v
} from "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/widgets/Expand/ExpandViewModel.js
var p2 = class extends g {
  constructor(e4) {
    super(e4), this._viewpointHandle = null, this.group = null;
  }
  initialize() {
    this.addHandles(v(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.ui;
    }, "expand", (e4) => {
      const { target: t2 } = e4;
      t2 && t2 !== this && t2.expanded && t2.group && t2.group === this.group && this._collapse();
    }));
  }
  destroy() {
    this._viewpointHandle = null, this.view = null;
  }
  set autoCollapse(e4) {
    this._set("autoCollapse", e4), this._watchViewpoint();
  }
  set expanded(e4) {
    var _a;
    const t2 = !!e4;
    this._set("expanded", t2);
    const i = (_a = this.view) == null ? void 0 : _a.ui;
    i && i.emit("expand", { target: this }), this._viewpointHandleChange(t2);
  }
  get state() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.ready) ? "ready" : "disabled";
  }
  set view(e4) {
    this._get("view") !== e4 && (this._set("view", e4), e4 && p(() => e4.ready, () => {
      this.view === e4 && this._watchViewpoint();
    }, { once: true, initial: true }));
  }
  _viewpointHandleChange(e4) {
    this._viewpointHandle && (e4 ? p(() => {
      var _a;
      return (_a = this.view) == null ? void 0 : _a.stationary;
    }, () => {
      var _a;
      return (_a = this._viewpointHandle) == null ? void 0 : _a.resume();
    }, { once: true, initial: true }) : this._viewpointHandle.pause());
  }
  _watchViewpoint() {
    const e4 = "viewpoint";
    this.removeHandles(e4), this._viewpointHandle = null;
    const { autoCollapse: t2, view: i } = this;
    if (!i || !t2) return;
    const s = U(() => "3d" === i.type ? i.camera : i.viewpoint, () => this._collapse());
    this.addHandles(s, e4), this._viewpointHandle = s;
  }
  _collapse() {
    this.expanded = false;
  }
};
r([m({ value: false })], p2.prototype, "autoCollapse", null), r([m({ value: false })], p2.prototype, "expanded", null), r([m()], p2.prototype, "group", void 0), r([m({ readOnly: true })], p2.prototype, "state", null), r([m({ value: null })], p2.prototype, "view", null), p2 = r([a("esri.widgets.Expand.ExpandViewModel")], p2);
var r2 = p2;

// node_modules/@arcgis/core/widgets/Expand.js
var u = "esri-expand";
var m2 = { base: u, toggle: `${u}__toggle`, popoverContent: `${u}__popover-content`, panel: `${u}__panel`, panelContent: `${u}__panel-content`, sheet: `${u}__sheet`, panelIconNumber: `${u}__panel-icon-number`, contentContainer: `${u}__content-container`, icon: "esri-collapse__icon", iconFlip: "esri-collapse__icon-flip", iconExpanded: `${u}__icon--expanded`, iconNumber: `${u}__icon-number`, content: `${u}__content`, contentExpanded: `${u}__content--expanded` };
var _ = "chevrons-left";
var g2 = "chevrons-right";
var v2 = class extends O {
  constructor(e4, t2) {
    super(e4, t2), this.closeOnEsc = true, this.collapseTooltip = "", this.content = "", this.expandTooltip = "", this.focusTrapDisabled = false, this.iconNumber = 0, this.messages = null, this.messagesCommon = null, this.mode = "auto", this.placement = null, this.viewModel = new r2(), this.toggle = () => {
      this.viewModel.expanded = !this.viewModel.expanded;
    }, this._handlePopoverClose = (e5) => {
      e5.target === this._popoverEl && (this.viewModel.expanded = e5.currentTarget.open);
    }, this._handleSheetClose = (e5) => {
      this.viewModel.expanded = e5.currentTarget.open;
    }, this._handlePanelClose = (e5) => {
      this.viewModel.expanded = !e5.currentTarget.closed;
    }, this._handleKeyDown = (e5) => {
      this.viewModel.expanded && "Escape" === e5.key && !this._willCloseOnEsc(e5) && e5.preventDefault();
    }, this._storeToggleActionEl = (e5) => {
      this._toggleActionEl = e5;
    }, this._storePopoverEl = (e5) => {
      this._popoverEl = e5;
    };
  }
  initialize() {
    this.addHandles(d(() => {
      var _a, _b;
      return (_b = (_a = this.viewModel) == null ? void 0 : _a.view) == null ? void 0 : _b.size;
    }, () => {
      var _a;
      return (_a = this._popoverEl) == null ? void 0 : _a.reposition();
    }, P));
  }
  loadDependencies() {
    return c({ action: () => import("./calcite-action-QKCY7YP2.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), panel: () => import("./calcite-panel-MMFYVYAV.js"), popover: () => import("./calcite-popover-UYGCEPYX.js"), sheet: () => import("./calcite-sheet-AT5VVMS6.js") });
  }
  get expandTitle() {
    const { expanded: e4, messagesCommon: t2, collapseTooltip: o, expandTooltip: n2 } = this;
    return (e4 ? o || (t2 == null ? void 0 : t2.collapse) : n2 || (t2 == null ? void 0 : t2.expand)) ?? "";
  }
  get _displaySheet() {
    var _a;
    switch (this.mode) {
      case "drawer":
        return true;
      case "auto":
        return "xsmall" === ((_a = this.viewModel.view) == null ? void 0 : _a.widthBreakpoint);
      default:
        return false;
    }
  }
  get autoCollapse() {
    return this.viewModel.autoCollapse;
  }
  set autoCollapse(e4) {
    this.viewModel.autoCollapse = e4;
  }
  get collapseIcon() {
    return g2;
  }
  set collapseIcon(e4) {
    this._overrideIfSome("collapseIcon", e4);
  }
  get expanded() {
    return this.viewModel.expanded;
  }
  set expanded(e4) {
    this.viewModel.expanded = e4;
  }
  get expandIcon() {
    return e3(this.content) ? this.content.icon : _;
  }
  set expandIcon(e4) {
    this._overrideIfSome("expandIcon", e4);
  }
  get group() {
    return this.viewModel.group;
  }
  set group(e4) {
    this.viewModel.group = e4;
  }
  get icon() {
    return null;
  }
  get label() {
    var _a;
    return (e3(this.content) ? this.content.label : null) ?? ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e4) {
    this._overrideIfSome("label", e4);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e4) {
    this.viewModel.view = e4;
  }
  expand() {
    this.viewModel.expanded = true;
  }
  collapse() {
    this.viewModel.expanded = false;
  }
  render() {
    const { _displaySheet: e4, _toggleActionEl: t2, viewModel: { expanded: o }, label: n2, placement: s } = this;
    return n("div", { class: this.classes(m2.base, e2.widget) }, this._renderToggle(), e4 ? n("calcite-sheet", { class: m2.sheet, heightScale: "l", label: n2, onkeydown: this._handleKeyDown, open: o, position: "block-end", onCalciteSheetClose: this._handleSheetClose }, n("calcite-panel", { class: m2.panel, closable: true, closed: !o, heading: n2, onkeydown: this._handleKeyDown, onCalcitePanelClose: this._handlePanelClose }, n("div", { class: m2.panelContent }, this._renderContent()))) : t2 ? n("calcite-popover", { afterCreate: this._storePopoverEl, afterUpdate: this._storePopoverEl, focusTrapDisabled: this.focusTrapDisabled, label: n2, onkeydown: this._handleKeyDown, open: o, overlayPositioning: "fixed", placement: s ?? this._getPlacement(), referenceElement: t2, onCalcitePopoverClose: this._handlePopoverClose }, n("div", { class: m2.popoverContent }, this._renderContent())) : null);
  }
  _getPlacement() {
    const { container: e4, view: t2 } = this, o = e4 && t2 ? t2.ui.getPosition(e4) : null;
    if (!o || "manual" === o) return "auto";
    const [n2, s] = o.split("-");
    return `${"right" === s ? "left" : "right"}-${"bottom" === n2 ? "end" : "start"}`;
  }
  _willCloseOnEsc(e4) {
    const { closeOnEsc: t2 } = this;
    return "function" == typeof t2 ? t2(e4) : t2;
  }
  _renderBadgeNumber() {
    const { expanded: e4, iconNumber: t2 } = this;
    return t2 && !e4 ? n("span", { class: m2.iconNumber, key: "expand__icon-number" }, t2) : null;
  }
  _renderToggleButton() {
    const { expanded: e4, expandTitle: t2, expandIcon: o, collapseIcon: n2 } = this, s = e4 ? n2 : o, i = s === _ || s === g2;
    return n("calcite-action", { afterCreate: this._storeToggleActionEl, afterUpdate: this._storeToggleActionEl, class: e2.widgetButton, onclick: this.toggle, scale: "s", text: t2, title: t2 }, s ? n("calcite-icon", { class: this.classes(m2.icon, i && m2.iconFlip), icon: s, scale: "s" }) : null);
  }
  _renderToggle() {
    return n("div", { class: m2.toggle }, this._renderToggleButton(), this._renderBadgeNumber());
  }
  _renderContent() {
    const { content: e4 } = this;
    return "string" == typeof e4 ? n("div", { class: m2.contentContainer, innerHTML: e4, key: "content__string" }) : e3(e4) ? n("div", { class: m2.contentContainer, key: "content__widget" }, e4.render()) : e4 instanceof HTMLElement ? n("div", { afterCreate: this._attachToNode, bind: e4, class: m2.contentContainer, key: "content__html-element" }) : t(e4) ? n("div", { afterCreate: this._attachToNode, bind: e4.domNode, class: m2.contentContainer, key: "content__node" }) : null;
  }
  _attachToNode(e4) {
    const t2 = this;
    e4.appendChild(t2);
  }
};
r([m({ readOnly: true })], v2.prototype, "expandTitle", null), r([m()], v2.prototype, "_toggleActionEl", void 0), r([m()], v2.prototype, "_displaySheet", null), r([m()], v2.prototype, "autoCollapse", null), r([m()], v2.prototype, "closeOnEsc", void 0), r([m()], v2.prototype, "collapseIcon", null), r([m()], v2.prototype, "collapseTooltip", void 0), r([m()], v2.prototype, "content", void 0), r([m()], v2.prototype, "expanded", null), r([m()], v2.prototype, "expandIcon", null), r([m()], v2.prototype, "expandTooltip", void 0), r([m()], v2.prototype, "focusTrapDisabled", void 0), r([m()], v2.prototype, "group", null), r([m()], v2.prototype, "icon", null), r([m()], v2.prototype, "iconNumber", void 0), r([m()], v2.prototype, "label", null), r([m(), e("esri/widgets/Expand/t9n/Expand")], v2.prototype, "messages", void 0), r([m(), e("esri/t9n/common")], v2.prototype, "messagesCommon", void 0), r([m()], v2.prototype, "mode", void 0), r([m()], v2.prototype, "placement", void 0), r([m()], v2.prototype, "view", null), r([m({ type: r2 })], v2.prototype, "viewModel", void 0), v2 = r([a("esri.widgets.Expand")], v2);
var w = v2;
export {
  w as default
};
//# sourceMappingURL=@arcgis_core_widgets_Expand.js.map
