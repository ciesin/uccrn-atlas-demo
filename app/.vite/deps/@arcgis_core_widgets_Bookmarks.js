import {
  e as e4
} from "./chunk-C45C33O7.js";
import {
  e as e5
} from "./chunk-B65KDWUG.js";
import {
  t
} from "./chunk-PKD626MC.js";
import {
  e as e3
} from "./chunk-3Y7KHPDW.js";
import {
  O,
  c,
  e as e2
} from "./chunk-4O2ECRMV.js";
import {
  n as n2
} from "./chunk-7EIXRVA4.js";
import {
  T
} from "./chunk-BSRIVWBN.js";
import "./chunk-RVUV2HD7.js";
import {
  u,
  y
} from "./chunk-AQ2I4LPZ.js";
import {
  m as m2
} from "./chunk-WR4Z7HZ2.js";
import "./chunk-3ATECVKT.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import {
  n
} from "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-H7PA52WJ.js";
import "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import {
  E,
  j
} from "./chunk-REAPFM7O.js";
import {
  e
} from "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import {
  s as s2
} from "./chunk-BDBI2KVA.js";
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
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/widgets/Bookmarks/BookmarksUserState.js
var s3 = class extends g {
  constructor(t4) {
    super(t4);
  }
  get editedBookmark() {
    const { bookmark: t4 } = this;
    return t4 ? this._get("editedBookmark") || t4.clone() : null;
  }
  get customUrl() {
    var _a, _b;
    return ((_b = (_a = this.editedBookmark) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.isSecureUrl) ? this.editedBookmark.thumbnail.url : null;
  }
  set customUrl(t4) {
    this._override("customUrl", t4);
  }
  get screenshotUrl() {
    var _a, _b;
    return ((_b = (_a = this.editedBookmark) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.isDataURI) ? this.editedBookmark.thumbnail.url : null;
  }
  set screenshotUrl(t4) {
    this._override("screenshotUrl", t4);
  }
  get state() {
    return this._get("state");
  }
  set state(t4) {
    this.validationState = void 0, this.loading = void 0, this._set("state", t4);
  }
  get thumbnailState() {
    var _a, _b, _c, _d;
    return ((_b = (_a = this.editedBookmark) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.url) ? ((_d = (_c = this.editedBookmark) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.isSecureUrl) ? "url" : "screenshot" : "none";
  }
  set thumbnailState(t4) {
    this._overrideIfSome("thumbnailState", t4);
  }
};
r([m()], s3.prototype, "bookmark", void 0), r([m({ readOnly: true })], s3.prototype, "editedBookmark", null), r([m()], s3.prototype, "customUrl", null), r([m()], s3.prototype, "screenshotUrl", null), r([m()], s3.prototype, "state", null), r([m()], s3.prototype, "thumbnailState", null), r([m()], s3.prototype, "validationState", void 0), r([m()], s3.prototype, "loading", void 0), s3 = r([a("esri.widgets.Bookmarks.BookmarksUserState")], s3);
var i2 = s3;

// node_modules/@arcgis/core/widgets/Bookmarks/BookmarksViewModel.js
var m3 = V.ofType(y);
var u2 = { width: 128, height: 128, format: "png" };
var k = { takeScreenshot: true, captureViewpoint: true, captureRotation: true, captureScale: true, captureTimeExtent: true };
var w = { time: true };
var d = class extends t(i.EventedAccessor) {
  constructor(t4) {
    super(t4), this.capabilities = { ...w }, this.activeBookmark = null, this.view = null;
  }
  destroy() {
    this.view = null, this._set("activeBookmark", null);
  }
  castCapabilities(t4) {
    return { ...w, ...t4 };
  }
  get bookmarks() {
    var _a, _b;
    return ((_b = (_a = this.view) == null ? void 0 : _a.map) == null ? void 0 : _b.bookmarks) ?? new m3();
  }
  set bookmarks(t4) {
    this._overrideIfSome("bookmarks", t4);
  }
  set defaultCreateOptions(t4) {
    this._set("defaultCreateOptions", { ...k, ...t4 });
  }
  get defaultCreateOptions() {
    return k;
  }
  set defaultEditOptions(t4) {
    this._set("defaultEditOptions", { ...k, ...t4 });
  }
  get defaultEditOptions() {
    return k;
  }
  get state() {
    const { view: t4 } = this;
    return t4 && !t4.ready ? "loading" : "ready";
  }
  async createBookmark(t4) {
    const { view: e6, defaultCreateOptions: o2, capabilities: a3 } = this;
    if (!e6) throw new s("create-bookmark:invalid-view", "Cannot create a bookmark without a view.");
    const { takeScreenshot: r3, screenshotSettings: n4, captureViewpoint: s5, captureRotation: c2, captureScale: l, captureTimeExtent: m4 } = { ...o2, ...t4 }, u3 = r3 ? await this._createThumbnail(n4) : void 0, k2 = a3.time && m4 && null != e6.timeExtent ? e6.timeExtent.clone() : void 0;
    return new y({ ...u3 && { thumbnail: u3 }, ...m4 && { timeExtent: k2 }, ...s5 && { viewpoint: this._createViewpoint({ view: e6, captureScale: l, captureRotation: c2 }) } });
  }
  async editBookmark(t4, e6) {
    if (!t4) return t4;
    const { view: o2, defaultEditOptions: a3 } = this;
    if (!o2) throw new s("edit-bookmark:invalid-view", "Cannot edit a bookmark without a view.");
    const { takeScreenshot: r3, screenshotSettings: n4, captureViewpoint: s5, captureRotation: c2, captureScale: p, captureTimeExtent: l } = { ...a3, ...e6 }, m4 = r3 ? await this._createThumbnail(n4) : void 0;
    return m4 && (t4.thumbnail = m4), s5 && (t4.viewpoint = this._createViewpoint({ view: o2, captureScale: p, captureRotation: c2 })), l && null != o2.timeExtent && (t4.timeExtent = o2.timeExtent.clone()), this.emit("bookmark-edit", { bookmark: t4 }), t4;
  }
  goTo(t4) {
    const { capabilities: e6, view: o2 } = this;
    if (!o2) throw new s("go-to:invalid-view", "Cannot go to a bookmark without a view");
    const a3 = t4 == null ? void 0 : t4.viewpoint;
    if (!a3) throw new s("go-to:invalid-bookmark", "Cannot go to a bookmark that does not contain a 'viewpoint'.", { bookmark: t4 });
    this._set("activeBookmark", t4);
    const r3 = this.callGoTo({ target: a3 }), n4 = t4 == null ? void 0 : t4.timeExtent;
    return e6.time && n4 && (o2.timeExtent = n4), this.emit("bookmark-select", { bookmark: t4 }), r3.catch(() => {
    }).then(() => this._set("activeBookmark", null)), r3;
  }
  async _createThumbnail(t4) {
    const { view: e6 } = this;
    if (!e6) throw new s("bookmark:invalid-view", "Cannot create slide thumbnail without a view");
    const o2 = await e6.takeScreenshot({ ...u2, ...t4 });
    return new u({ url: o2.dataUrl });
  }
  _createViewpoint({ view: t4, captureRotation: o2, captureScale: i3 }) {
    var _a, _b;
    const a3 = (_a = t4.viewpoint) == null ? void 0 : _a.clone();
    return new m2({ targetGeometry: (_b = t4.extent) == null ? void 0 : _b.clone(), rotation: (o2 ? a3 == null ? void 0 : a3.rotation : null) ?? 0, scale: (i3 ? a3 == null ? void 0 : a3.scale : null) ?? 0 });
  }
};
r([m()], d.prototype, "capabilities", void 0), r([s2("capabilities")], d.prototype, "castCapabilities", null), r([m({ readOnly: true })], d.prototype, "activeBookmark", void 0), r([m({ type: m3 })], d.prototype, "bookmarks", null), r([m()], d.prototype, "defaultCreateOptions", null), r([m()], d.prototype, "defaultEditOptions", null), r([m({ readOnly: true })], d.prototype, "state", null), r([m()], d.prototype, "view", void 0), d = r([a("esri.widgets.Bookmarks.BookmarksViewModel")], d);
var h = d;

// node_modules/@arcgis/core/widgets/Bookmarks/BookmarksVisibleElements.js
var r2 = class extends g {
  constructor() {
    super(...arguments), this.addBookmarkButton = false, this.closeButton = false, this.collapseButton = false, this.editBookmarkButton = false, this.filter = false, this.flow = true, this.heading = false, this.thumbnail = true, this.time = true;
  }
};
r([m({ type: Boolean, nonNullable: true })], r2.prototype, "addBookmarkButton", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "closeButton", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "collapseButton", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "editBookmarkButton", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "filter", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "flow", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "heading", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "thumbnail", void 0), r([m({ type: Boolean, nonNullable: true })], r2.prototype, "time", void 0), r2 = r([a("esri.widgets.Bookmarks.BookmarksVisibleElements")], r2);
var s4 = r2;

// node_modules/@arcgis/core/widgets/Bookmarks/css.js
var o = "esri-bookmarks";
var a2 = `${o}__authoring`;
var n3 = `${o}__bookmark`;
var t2 = { base: o, noBookmarksHeader: `${o}__no-bookmarks-heading`, noBookmarksDescription: `${o}__no-bookmarks-description`, form: `${o}__form`, list: `${o}__list`, loader: `${o}__loader`, filterNoResults: `${o}__filter-no-results`, formContent: `${o}__form-content`, addBookmarkButton: `${o}__add-bookmark-button`, editBookmarkInput: `${o}__edit-bookmark-input`, addBookmarkInput: `${o}__add-bookmark-input`, dragEnabled: `${o}--drag-enabled`, bookmarkImage: `${o}__image`, bookmarkImageContainer: `${n3}-image-container`, bookmarkContent: `${n3}-content`, bookmarkContentLabel: `${n3}-content-label`, authoring: a2, authoringImageContainer: `${a2}-image-container`, authoringRefreshThumbnailButton: `${a2}-refresh-thumbnail-button` };

// node_modules/@arcgis/core/widgets/support/listUtils.js
var t3 = ["label", "description", "metadata"];

// node_modules/@arcgis/core/widgets/Bookmarks.js
var w2 = class extends n.IdentifiableMixin(O) {
  constructor(e6, t4) {
    super(e6, t4), this._addInputNode = null, this._editInputNode = null, this._urlEditInputNode = null, this._lastDragDetail = null, this._selectedDragBookmarkUid = null, this._editIncludeTimeExtent = void 0, this._userState = null, this._focusRootFlowItem = false, this._focusAddFlowItem = false, this._focusEditFlowItem = false, this.disabled = false, this.dragEnabled = false, this.filterPlaceholder = "", this.filterText = "", this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.viewModel = new h(), this.visibleElements = new s4(), this._onCalciteListOrderChange = (e7) => {
      const { _lastDragDetail: t5, bookmarks: o2 } = this, { toEl: i3, fromEl: r3, dragEl: a3, newIndex: s5 } = e7;
      if (!o2.length) return;
      if (!r3 || !i3 || (t5 == null ? void 0 : t5.newIndex) === s5 && (t5 == null ? void 0 : t5.dragEl) === a3 && (t5 == null ? void 0 : t5.toEl) === i3 && (t5 == null ? void 0 : t5.fromEl) === r3) return;
      this._lastDragDetail = e7;
      const n4 = Array.from(r3.children).filter((e8) => e8 == null ? void 0 : e8.matches("calcite-list-item")).map((e8) => e8.value);
      o2.sort((e8, t6) => {
        const o3 = n4.indexOf(e8.uid), i4 = n4.indexOf(t6.uid);
        return o3 > i4 ? 1 : o3 < i4 ? -1 : 0;
      }), this._selectedDragBookmarkUid = a3.value;
    };
  }
  loadDependencies() {
    return c({ action: () => import("./calcite-action-QKCY7YP2.js"), button: () => import("./calcite-button-JBDKJEJZ.js"), "chip-group": () => import("./calcite-chip-group-UIF4X7JA.js"), chip: () => import("./calcite-chip-MZIE7UWE.js"), fab: () => import("./calcite-fab-F763GSQ5.js"), flow: () => import("./calcite-flow-5YGDSUYX.js"), "flow-item": () => import("./calcite-flow-item-57QIZJUT.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), input: () => import("./calcite-input-LDDQP5AR.js"), "input-message": () => import("./calcite-input-message-D3TAS3FI.js"), label: () => import("./calcite-label-R6HZITBG.js"), list: () => import("./calcite-list-EYDTM3R4.js"), "list-item": () => import("./calcite-list-item-I75MSBTM.js"), loader: () => import("./calcite-loader-QX4G267A.js"), notice: () => import("./calcite-notice-MPUJ2BZX.js"), scrim: () => import("./calcite-scrim-CCHXR7JM.js"), switch: () => import("./calcite-switch-VC2RNOQV.js"), table: () => import("./calcite-table-PIP37O5H.js"), "table-cell": () => import("./calcite-table-cell-ZHL7JQ5A.js"), "table-header": () => import("./calcite-table-header-KKZ2RI32.js"), "table-row": () => import("./calcite-table-row-R2DZXETL.js") });
  }
  get defaultCreateOptions() {
    return this.viewModel.defaultCreateOptions;
  }
  set defaultCreateOptions(e6) {
    this.viewModel.defaultCreateOptions = e6;
  }
  get defaultEditOptions() {
    return this.viewModel.defaultEditOptions;
  }
  set defaultEditOptions(e6) {
    this.viewModel.defaultEditOptions = e6;
  }
  get bookmarks() {
    return this.viewModel.bookmarks;
  }
  set bookmarks(e6) {
    this.viewModel.bookmarks = e6;
  }
  get goToOverride() {
    return this.viewModel.goToOverride;
  }
  set goToOverride(e6) {
    this.viewModel.goToOverride = e6;
  }
  get icon() {
    return "bookmark";
  }
  set icon(e6) {
    this._overrideIfSome("icon", e6);
  }
  get label() {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e6) {
    this._overrideIfSome("label", e6);
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e6) {
    this.viewModel.view = e6;
  }
  endAddBookmark() {
    this._userState = null;
  }
  goTo(e6) {
    return this.viewModel.goTo(e6);
  }
  render() {
    return n2("div", { class: this.classes(t2.base, e3.widget, e3.panel) }, this._renderBookmarksContainer());
  }
  startAddBookmark() {
    this._userState = new i2({ state: "add" }), this._focusAddFlowItem = true;
  }
  _renderNoBookmarksContainer(e6) {
    const { messages: t4, viewModel: { state: o2 } } = this;
    return e6.length || "loading" === o2 ? null : n2("div", { class: e3.empty, key: "no-bookmarks" }, n2("calcite-icon", { icon: "bookmark", scale: "l" }), n2(e4, { class: this.classes(e3.heading, t2.noBookmarksHeader), level: this.headingLevel }, t4 == null ? void 0 : t4.noBookmarksHeading), n2("p", { class: t2.noBookmarksDescription }, t4.noBookmarksDescription));
  }
  _renderEditBookmarkFlowItems() {
    const { _userState: e6 } = this, t4 = e6 == null ? void 0 : e6.editedBookmark;
    return t4 && "edit" === (e6 == null ? void 0 : e6.state) ? this._renderEditingBookmark(t4) : [];
  }
  _renderBookmarkItems(e6) {
    return e6 ? e6.toArray().map((e7) => this._renderBookmark(e7)) : [];
  }
  _handleCalciteListDragEnd(e6) {
    const { fromEl: t4, dragEl: o2, oldIndex: i3 } = e6;
    t4.insertBefore(o2, t4.children[i3]);
  }
  _renderBookmarksContainer() {
    var _a;
    const { viewModel: { state: e6, bookmarks: o2 }, dragEnabled: i3, messages: r3, disabled: a3, filterPlaceholder: s5, filterText: n4, visible: l, headingLevel: d2, visibleElements: { closeButton: m4, collapseButton: c2, filter: u3, heading: h2, flow: p }, uid: b } = this, g2 = o2.filter(G), f = g2.length ? n2("calcite-list", { class: t2.list, displayMode: "flat", dragEnabled: i3, filterEnabled: u3, filterPlaceholder: s5, filterProps: t3, filterText: n4, group: `bookmarks-${b}`, key: "bookmark-list", label: r3.widgetLabel, selectionAppearance: "border", selectionMode: "none", onCalciteListDragEnd: (e7) => this._handleCalciteListDragEnd(e7.detail), onCalciteListFilter: (e7) => {
      var _a2;
      return this.filterText = ((_a2 = e7.currentTarget) == null ? void 0 : _a2.filterText) ?? "";
    }, onCalciteListOrderChange: (e7) => this._onCalciteListOrderChange(e7.detail) }, this._renderBookmarkItems(g2), u3 ? n2("div", { class: t2.filterNoResults, slot: "filter-no-results" }, n2("calcite-notice", { kind: "info", open: true, width: "full" }, n2("div", { slot: "message" }, r3.noBookmarksHeading), ";")) : null) : null, v = [n2("calcite-flow-item", { afterCreate: this._focusRootFlowItemNode, afterUpdate: this._focusRootFlowItemNode, bind: this, closable: m4, closed: !l, collapsible: c2, disabled: a3, heading: h2 ? r3.widgetLabel : void 0, headingLevel: d2, loading: "loading" === e6, selected: !((_a = this._userState) == null ? void 0 : _a.state), onCalciteFlowItemClose: () => this.visible = false }, this._renderNoBookmarksContainer(g2), f, this._renderAddBookmarkButton()), this._renderAddingBookmark(), this._renderEditBookmarkFlowItems()];
    return l ? p ? n2("calcite-flow", { key: "root-flow" }, v) : v : null;
  }
  _renderAddBookmarkButton() {
    const { messages: e6, _userState: t4, disabled: o2, viewModel: { view: i3, state: r3 }, visibleElements: { addBookmarkButton: a3 } } = this, s5 = (t4 == null ? void 0 : t4.loading) ?? false;
    return i3 && "loading" !== r3 && a3 ? n2("calcite-fab", { appearance: "outline-fill", bind: this, class: t2.addBookmarkButton, disabled: o2 || s5, icon: "plus", key: "add-bookmark-item", kind: "neutral", loading: s5, onclick: this.startAddBookmark, slot: "fab", text: e6.addBookmark, textEnabled: true, title: e6.addBookmark, type: "button" }) : null;
  }
  _renderEditContainer(e6) {
    const { messagesCommon: t4, visibleElements: { editBookmarkButton: o2 } } = this, i3 = `${t4.edit} ${this._getBookmarkTitle(e6)}`;
    return o2 ? n2("calcite-action", { appearance: "transparent", icon: "pencil", key: "edit-action", onclick: () => this._showEditBookmarkForm(e6), slot: "actions-end", text: i3, title: i3 }) : null;
  }
  _renderBookmarkImage(e6, t4) {
    var _a;
    return t4 ? n2("img", { alt: "", class: t2.bookmarkImage, key: "bookmark-image", src: (_a = e6.thumbnail) == null ? void 0 : _a.url }) : null;
  }
  _renderBookmarkTimeSwitch(e6) {
    const { messages: t4, viewModel: { view: o2 } } = this, { timeExtent: i3 } = e6;
    return (o2 == null ? void 0 : o2.timeExtent) ?? i3 ? n2("calcite-label", { layout: "inline-space-between" }, t4.includeTimeExtent, n2("calcite-switch", { checked: !!i3, onCalciteSwitchChange: (e7) => {
      this._editIncludeTimeExtent = !!e7.currentTarget.checked;
    } })) : null;
  }
  _renderEditBookmarkTimeExtent(e6) {
    return this._editIncludeTimeExtent ? this._renderBookmarkTimeExtent(e6) : null;
  }
  _getTimeExtentStrings(e6) {
    const { visibleElements: t4 } = this, { timeExtent: o2 } = e6;
    if (!o2) return {};
    const { start: i3, end: r3 } = o2, a3 = null != r3 && (null == i3 || i3.getTime() !== r3.getTime()), s5 = i3 ? this._formatDate(i3) : "", n4 = i3 && t4.time ? this._formatTime(i3) : "";
    if (!a3) return { startDate: s5, startTime: n4 };
    return { startDate: s5, startTime: n4, endDate: this._formatDate(r3), endTime: t4.time ? this._formatTime(r3) : "" };
  }
  _renderTimeExtentDescription(e6) {
    const { startDate: t4, startTime: o2, endDate: i3, endTime: r3 } = this._getTimeExtentStrings(e6);
    if (!t4) return "";
    const a3 = `${t4} ${o2}`;
    return i3 ? `${a3} - ${`${i3} ${r3}`}` : a3;
  }
  _renderBookmarkTimeExtent(e6, t4 = false) {
    const { messages: o2 } = this, { startDate: i3, startTime: r3, endDate: a3, endTime: s5 } = this._getTimeExtentStrings(e6), n4 = t4 ? null : n2("calcite-table-row", { slot: "table-header" }, n2("calcite-table-header", { heading: o2.startDate }), a3 ? n2("calcite-table-header", { heading: o2.endDate }) : null);
    return i3 ? n2("calcite-table", { caption: o2.timeExtent, scale: "s" }, n4, n2("calcite-table-row", null, n2("calcite-table-cell", null, i3, " ", r3 ? [n2("br", null), r3] : null), a3 ? n2("calcite-table-cell", null, a3, s5 ? [n2("br", null), s5] : null) : null)) : null;
  }
  _renderBookmarkActiveScrim(e6, t4) {
    return this.viewModel.activeBookmark === e6 && t4 ? n2("calcite-scrim", { key: "bookmark-active-scrim", loading: true }) : null;
  }
  _renderBookmarkActiveLoader(e6, t4) {
    return this.viewModel.activeBookmark !== e6 || t4 ? null : n2("calcite-loader", { class: t2.loader, inline: true, key: "bookmark-active-loader", label: this.messagesCommon.loading });
  }
  _renderBookmarkImageIcon(e6, t4) {
    return this.viewModel.activeBookmark === e6 || t4 ? null : n2("calcite-icon", { icon: "bookmark", key: "bookmark-icon", scale: "s" });
  }
  _renderBookmarkThumbnail(e6) {
    var _a;
    const t4 = this.visibleElements.thumbnail && !!((_a = e6.thumbnail) == null ? void 0 : _a.url);
    return n2("div", { class: t2.bookmarkImageContainer, slot: "content-start" }, this._renderBookmarkActiveScrim(e6, t4), this._renderBookmarkImage(e6, t4), this._renderBookmarkActiveLoader(e6, t4), this._renderBookmarkImageIcon(e6, t4));
  }
  _focusSelectedDragEl(e6, t4) {
    this._selectedDragBookmarkUid === t4.uid && (T(e6), this._selectedDragBookmarkUid = null);
  }
  _renderBookmark(e6) {
    return n2("calcite-list-item", { afterCreate: (t4) => this._focusSelectedDragEl(t4, e6), afterUpdate: (t4) => this._focusSelectedDragEl(t4, e6), class: this.classes({ [t2.dragEnabled]: this.dragEnabled }), description: this._renderTimeExtentDescription(e6), key: e6.uid, label: this._getBookmarkTitle(e6), value: e6.uid, onCalciteListItemSelect: () => this._goToBookmark(e6) }, this._renderBookmarkThumbnail(e6), this._renderBookmarkContent(e6), this._renderEditContainer(e6));
  }
  _renderBookmarkContent(e6) {
    return n2("div", { class: t2.bookmarkContent, slot: "content" }, n2("span", { class: t2.bookmarkContentLabel }, this._getBookmarkTitle(e6)), this._renderBookmarkTimeExtent(e6, true));
  }
  _renderEditingBookmarkName(e6) {
    const { messages: t4, _userState: o2 } = this, i3 = "name-required" === (o2 == null ? void 0 : o2.validationState);
    return n2("calcite-label", null, t4.title, n2("calcite-input", { afterCreate: this._storeEditInput, bind: this, class: t2.editBookmarkInput, name: "bookmark-name", placeholder: t4.titlePlaceholder, required: true, type: "text", value: e6.name }), i3 ? n2("calcite-input-message", { icon: "exclamation-mark-triangle", status: "invalid" }, t4.invalidTitle) : null);
  }
  _renderEditingBookmarkActions() {
    const { messagesCommon: e6, _userState: t4 } = this, o2 = t4 == null ? void 0 : t4.bookmark;
    return [n2("calcite-button", { appearance: "transparent", kind: "danger", onclick: () => this._deleteBookmark(o2), slot: "footer", type: "button", width: "full" }, e6.delete), n2("calcite-button", { appearance: "outline", bind: this, onclick: this._closeEditBookmarkForm, slot: "footer", type: "button", width: "full" }, e6.cancel), n2("calcite-button", { slot: "footer", type: "submit", width: "full" }, e6.save)];
  }
  _handleUrlEditInputChange() {
    var _a, _b;
    const { _userState: e6, _urlEditInputNode: t4 } = this, o2 = t4 == null ? void 0 : t4.value;
    if (!(e6 == null ? void 0 : e6.editedBookmark) || !o2) return;
    e6.validationState = void 0, ((_a = e6.editedBookmark.thumbnail) == null ? void 0 : _a.isDataURI) && (e6.screenshotUrl = (_b = e6.editedBookmark.thumbnail) == null ? void 0 : _b.url);
    const i3 = new u({ url: o2 });
    i3.isSecureUrl && (e6.customUrl = o2, e6.editedBookmark.thumbnail = i3);
  }
  _renderEditingTimeExtent(e6) {
    const { capabilities: t4, view: o2 } = this.viewModel, { timeExtent: i3 } = e6;
    return t4.time && ((o2 == null ? void 0 : o2.timeExtent) ?? i3) ? n2("div", { key: "edit-bookmark-time-container" }, this._renderBookmarkTimeSwitch(e6), this._renderEditBookmarkTimeExtent(e6)) : null;
  }
  _renderEditingBookmarkImage(e6) {
    var _a, _b;
    const { _userState: t4 } = this, o2 = t4 == null ? void 0 : t4.thumbnailState, i3 = ((_a = e6.thumbnail) == null ? void 0 : _a.isSecureUrl) ? "url" === o2 : ((_b = e6.thumbnail) == null ? void 0 : _b.isDataURI) ? "screenshot" === o2 : null;
    if (i3) return this._renderBookmarkImage(e6, i3);
  }
  _renderEditingThumbnail(e6) {
    const { _userState: t4, visibleElements: o2 } = this, i3 = t4 == null ? void 0 : t4.thumbnailState;
    return o2.thumbnail && "none" !== i3 ? n2("div", { class: t2.authoringImageContainer }, this._renderEditingBookmarkImage(e6)) : null;
  }
  _renderUpdateThumbnailButton() {
    const { visibleElements: e6, messages: t4, _userState: o2 } = this, i3 = o2 == null ? void 0 : o2.thumbnailState;
    return e6.thumbnail && "screenshot" === i3 ? n2("calcite-button", { appearance: "outline", class: t2.authoringRefreshThumbnailButton, iconStart: "refresh", key: "update-thumbnail", kind: "neutral", onclick: () => {
      this._updateThumbnail();
    }, width: "full" }, t4.updateThumbnail) : null;
  }
  _renderEditingBookmarkUrlInput(e6) {
    var _a, _b;
    const { messages: t4, _userState: o2 } = this, i3 = (_a = e6.thumbnail) == null ? void 0 : _a.url, r3 = ((_b = e6.thumbnail) == null ? void 0 : _b.isSecureUrl) ? i3 : void 0, a3 = i3 && "absolute-url-required" === (o2 == null ? void 0 : o2.validationState), s5 = o2 == null ? void 0 : o2.thumbnailState;
    return "url" === s5 ? n2("calcite-label", { key: "thumbnail-url-input" }, n2("calcite-input", { afterCreate: this._storeUrlEditInput, bind: this, name: "bookmark-thumbnail-url", pattern: "https://.*", placeholder: t4 ? `https://<${t4.imageUrlPlaceholder}>` : void 0, required: true, title: t4.imageUrlTooltip, type: "text", value: r3, onCalciteInputChange: this._handleUrlEditInputChange, onCalciteInputInput: this._handleUrlEditInputChange }), a3 ? n2("calcite-input-message", { icon: "exclamation-mark-triangle", status: "invalid" }, t4.invalidImageUrl) : null) : null;
  }
  _renderThumbnailSelector() {
    const { visibleElements: e6, messages: t4, _userState: o2 } = this, i3 = o2 == null ? void 0 : o2.thumbnailState;
    return e6.thumbnail ? n2("calcite-label", { key: "thumbnail-chip-group" }, t4.thumbnail, n2("calcite-chip-group", { label: t4.thumbnail, selectionMode: "single-persist", onCalciteChipGroupSelect: (e7) => this._handleThumbnailTypeSelect(e7.currentTarget.selectedItems[0].value) }, n2("calcite-chip", { label: t4.screenshot, selected: "screenshot" === i3, value: "screenshot" }, t4.screenshot), n2("calcite-chip", { label: t4.url, selected: "url" === i3, value: "url" }, t4.url), n2("calcite-chip", { label: t4.none, selected: "none" === i3, value: "none" }, t4.none))) : null;
  }
  _renderEditingBookmark(e6) {
    var _a;
    const { disabled: t4, messagesCommon: o2, headingLevel: i3 } = this;
    return e6 ? n2("form", { bind: this, class: t2.form, disabled: this.disabled, onsubmit: this._editBookmarkSubmit }, n2("calcite-flow-item", { afterCreate: this._focusEditFlowItemNode, afterUpdate: this._focusEditFlowItemNode, bind: this, disabled: t4, heading: o2.edit, headingLevel: i3, key: "edit-bookmark-form", selected: "edit" === ((_a = this._userState) == null ? void 0 : _a.state), onCalciteFlowItemBack: (e7) => {
      e7.preventDefault(), this._closeEditBookmarkForm();
    } }, n2("div", { class: t2.formContent }, n2("div", { class: t2.authoring }, this._renderEditingBookmarkName(e6), this._renderThumbnailSelector(), this._renderEditingThumbnail(e6), this._renderEditingBookmarkUrlInput(e6), this._renderUpdateThumbnailButton(), this._renderEditingTimeExtent(e6))), this._renderEditingBookmarkActions())) : null;
  }
  _renderAddingBookmarkName() {
    const { _userState: e6, messages: t4 } = this, o2 = "name-required" === (e6 == null ? void 0 : e6.validationState);
    return n2("calcite-label", null, t4.title, n2("calcite-input", { afterCreate: this._storeAddInput, bind: this, class: t2.addBookmarkInput, name: "bookmark-name", placeholder: t4.titlePlaceholder, required: true, type: "text", value: "" }), o2 ? n2("calcite-input-message", { icon: "exclamation-mark-triangle", status: "invalid" }, t4.invalidTitle) : null);
  }
  _renderAddingBookmarkActions() {
    const { messagesCommon: e6 } = this;
    return [n2("calcite-button", { appearance: "outline", bind: this, onclick: this._endAddBookmark, slot: "footer", type: "button", width: "full" }, e6.cancel), n2("calcite-button", { slot: "footer", type: "submit", width: "full" }, e6.add)];
  }
  _renderAddingBookmark() {
    var _a;
    const { disabled: e6, messages: t4, headingLevel: o2, _userState: i3 } = this;
    return "add" === (i3 == null ? void 0 : i3.state) ? n2("form", { bind: this, class: t2.form, disabled: e6, onsubmit: this._addBookmarkSubmitClick }, n2("calcite-flow-item", { afterCreate: this._focusAddFlowItemNode, afterUpdate: this._focusAddFlowItemNode, bind: this, disabled: e6, heading: t4.addBookmark, headingLevel: o2, key: "add-bookmark-form", selected: "add" === ((_a = this._userState) == null ? void 0 : _a.state), onCalciteFlowItemBack: (e7) => {
      e7.preventDefault(), this._endAddBookmark();
    } }, n2("div", { class: t2.formContent }, this._renderAddingBookmarkName()), this._renderAddingBookmarkActions())) : null;
  }
  _getBookmarkTitle(e6) {
    return (e6 == null ? void 0 : e6.name) || this.messagesCommon.untitled;
  }
  _formatDate(e6) {
    var _a;
    return e6 ? E(e6, { ...j("short-date"), timeZone: ((_a = this.viewModel.view) == null ? void 0 : _a.timeZone) ?? e }) : "";
  }
  _formatTime(e6) {
    var _a;
    return e6 ? E(e6, { ...j("long-time"), timeZone: ((_a = this.viewModel.view) == null ? void 0 : _a.timeZone) ?? e }) : "";
  }
  _endAddBookmark() {
    this.endAddBookmark(), this._focusRootFlowItem = true;
  }
  _showEditBookmarkForm(e6) {
    e6 && (this._editIncludeTimeExtent = !!e6.timeExtent, this._userState = new i2({ bookmark: e6, state: "edit" }), this._focusEditFlowItem = true, this.viewModel.goTo(e6));
  }
  async _createNewScreenshotUrl() {
    var _a;
    const e6 = await this.viewModel.createBookmark();
    return ((_a = e6.thumbnail) == null ? void 0 : _a.url) ?? null;
  }
  _storeCurrentUrl() {
    var _a, _b, _c, _d, _e, _f;
    const { _userState: e6 } = this, t4 = (_b = (_a = e6 == null ? void 0 : e6.editedBookmark) == null ? void 0 : _a.thumbnail) == null ? void 0 : _b.url;
    t4 && (((_d = (_c = e6 == null ? void 0 : e6.editedBookmark) == null ? void 0 : _c.thumbnail) == null ? void 0 : _d.isSecureUrl) ? e6.customUrl = t4 : ((_f = (_e = e6 == null ? void 0 : e6.editedBookmark) == null ? void 0 : _e.thumbnail) == null ? void 0 : _f.isDataURI) && (e6.screenshotUrl = t4));
  }
  async _handleThumbnailTypeSelect(e6) {
    const { _userState: t4 } = this;
    if (!t4) return;
    const { screenshotUrl: o2, customUrl: i3, editedBookmark: r3 } = t4, a3 = "screenshot" === e6 ? o2 ?? await this._createNewScreenshotUrl() : "url" === e6 && i3 ? i3 : null;
    this._storeCurrentUrl(), r3 && a3 && (r3.thumbnail = new u({ url: a3 })), t4.validationState = void 0, t4.thumbnailState = e6;
  }
  _closeEditBookmarkForm() {
    this._userState = null, this._focusRootFlowItem = true;
  }
  _addBookmarkSubmitClick(e6) {
    e6.preventDefault(), this._addBookmarkSubmit();
  }
  async _addBookmarkSubmit() {
    const { _addInputNode: e6, _userState: t4, viewModel: o2, viewModel: { bookmarks: i3 } } = this;
    if (!t4) return;
    const r3 = e6 ? e6.value.trim() : null;
    if (!r3) return void (t4.validationState = "name-required");
    t4.loading = true;
    const a3 = await o2.createBookmark();
    a3.name = r3, i3.add(a3), this._endAddBookmark();
  }
  async _editBookmarkAndClose(e6, t4) {
    const { viewModel: o2, viewModel: { defaultEditOptions: i3 } } = this;
    await o2.editBookmark(e6, { ...i3, ...t4 }), this._closeEditBookmarkForm();
  }
  _editBookmarkSubmit(e6) {
    e6.preventDefault();
    const { _editInputNode: t4, _userState: o2, _editIncludeTimeExtent: i3, _urlEditInputNode: r3 } = this;
    if (!(o2 == null ? void 0 : o2.bookmark) || !o2.editedBookmark) return;
    o2.validationState = void 0, o2.customUrl = void 0, o2.screenshotUrl = void 0;
    const a3 = t4 == null ? void 0 : t4.value.trim();
    if (!a3) return void (o2.validationState = "name-required");
    o2.bookmark.name = a3, o2.bookmark.thumbnail = o2.editedBookmark.thumbnail, i3 || (o2.bookmark.timeExtent = null);
    const s5 = o2.thumbnailState;
    if ("url" === s5 && r3) {
      const e7 = r3.value, t5 = new u({ url: e7 });
      if (!t5.isSecureUrl) return void (o2.validationState = "absolute-url-required");
      o2.bookmark.thumbnail = t5;
    } else "none" === s5 && (o2.bookmark.thumbnail = null);
    this._editBookmarkAndClose(o2.bookmark, { takeScreenshot: false, captureTimeExtent: i3 });
  }
  _storeEditInput(e6) {
    this._editInputNode = e6;
  }
  _storeAddInput(e6) {
    this._addInputNode = e6;
  }
  _storeUrlEditInput(e6) {
    this._urlEditInputNode = e6;
  }
  _deleteBookmark(e6) {
    this._closeEditBookmarkForm(), e6 && (this.viewModel.bookmarks.remove(e6), e6.destroy());
  }
  _goToBookmark(e6) {
    this.endAddBookmark(), this.viewModel.goTo(e6);
  }
  async _updateThumbnail() {
    const { _userState: e6, viewModel: t4 } = this;
    e6 && (e6.validationState = void 0, await t4.editBookmark(e6.editedBookmark, { takeScreenshot: true, captureViewpoint: false, captureRotation: false, captureScale: false, captureTimeExtent: false }));
  }
  _focusRootFlowItemNode(e6) {
    this._focusRootFlowItem && (this._focusRootFlowItem = false, T(e6));
  }
  _focusEditFlowItemNode(e6) {
    this._focusEditFlowItem && (this._focusEditFlowItem = false, T(e6));
  }
  _focusAddFlowItemNode(e6) {
    this._focusAddFlowItem && (this._focusAddFlowItem = false, T(e6));
  }
};
r([m()], w2.prototype, "_editIncludeTimeExtent", void 0), r([m({ type: i2 })], w2.prototype, "_userState", void 0), r([m()], w2.prototype, "_focusRootFlowItem", void 0), r([m()], w2.prototype, "_focusAddFlowItem", void 0), r([m()], w2.prototype, "_focusEditFlowItem", void 0), r([m()], w2.prototype, "defaultCreateOptions", null), r([m()], w2.prototype, "defaultEditOptions", null), r([m()], w2.prototype, "bookmarks", null), r([m()], w2.prototype, "disabled", void 0), r([m()], w2.prototype, "dragEnabled", void 0), r([m()], w2.prototype, "filterPlaceholder", void 0), r([m()], w2.prototype, "filterText", void 0), r([m()], w2.prototype, "headingLevel", void 0), r([m()], w2.prototype, "goToOverride", null), r([m()], w2.prototype, "icon", null), r([m()], w2.prototype, "label", null), r([m(), e2("esri/widgets/Bookmarks/t9n/Bookmarks")], w2.prototype, "messages", void 0), r([m(), e2("esri/t9n/common")], w2.prototype, "messagesCommon", void 0), r([m()], w2.prototype, "uiStrings", void 0), r([m()], w2.prototype, "view", null), r([m({ type: h }), e5(["select-bookmark", "bookmark-edit", "bookmark-select"])], w2.prototype, "viewModel", void 0), r([m({ type: s4, nonNullable: true })], w2.prototype, "visibleElements", void 0), r([m()], w2.prototype, "endAddBookmark", null), r([m()], w2.prototype, "startAddBookmark", null), w2 = r([a("esri.widgets.Bookmarks")], w2);
var E2 = w2;
export {
  E2 as default
};
//# sourceMappingURL=@arcgis_core_widgets_Bookmarks.js.map
