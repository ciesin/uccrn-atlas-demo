import {
  T
} from "./chunk-SA7DV5I6.js";
import {
  _,
  i as i4
} from "./chunk-ZNVYE3UB.js";
import {
  r as r5
} from "./chunk-Y27EMLXK.js";
import {
  x
} from "./chunk-SCYMP6Y5.js";
import {
  h as h2
} from "./chunk-M6YQSYSW.js";
import {
  s as s5
} from "./chunk-3B5XHATW.js";
import {
  a as a3
} from "./chunk-TECUWEJV.js";
import {
  C,
  D,
  E,
  J,
  K,
  L,
  M,
  O as O2,
  Q,
  R,
  Te,
  ae,
  de,
  ee,
  fe,
  he,
  ie,
  le,
  oe,
  pe,
  q,
  re,
  se,
  we,
  x as x2
} from "./chunk-LPOMYX2A.js";
import {
  e as e5
} from "./chunk-C45C33O7.js";
import {
  e as e6,
  t
} from "./chunk-CL3SKD6S.js";
import {
  o
} from "./chunk-G4RTXQCG.js";
import {
  r as r4
} from "./chunk-5XMOCUPU.js";
import {
  e as e4
} from "./chunk-3Y7KHPDW.js";
import {
  O,
  c as c3,
  e as e3
} from "./chunk-4O2ECRMV.js";
import {
  n as n4
} from "./chunk-7EIXRVA4.js";
import {
  g as g2,
  w as w2,
  y as y2
} from "./chunk-BSRIVWBN.js";
import {
  Ye
} from "./chunk-JT5MNXX3.js";
import {
  l as l2
} from "./chunk-J6MQFQDT.js";
import {
  c as c6
} from "./chunk-TNYXYQXK.js";
import {
  c as c5
} from "./chunk-3GIIPEHS.js";
import {
  d as d5
} from "./chunk-5GAOP2C3.js";
import {
  b as b3
} from "./chunk-AI2O2GKK.js";
import {
  m as m2
} from "./chunk-ANGUSND2.js";
import {
  b as b2
} from "./chunk-5X74MKXM.js";
import {
  I,
  c as c4,
  d as d4,
  i as i2,
  i3,
  n as n5,
  n3 as n6,
  p as p2
} from "./chunk-LCBD3JEK.js";
import {
  ge
} from "./chunk-6REABBOQ.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  n as n2
} from "./chunk-SWBNCJYN.js";
import {
  j2
} from "./chunk-YUVX6H42.js";
import {
  g as g3
} from "./chunk-RDUV6YP6.js";
import {
  s as s3
} from "./chunk-H7PA52WJ.js";
import {
  l
} from "./chunk-PODRVOXS.js";
import {
  j
} from "./chunk-REAPFM7O.js";
import {
  e
} from "./chunk-UNGOQUF2.js";
import {
  P,
  d as d3,
  p,
  v,
  w
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  d as d2
} from "./chunk-ACGZOBZ6.js";
import {
  s as s4
} from "./chunk-BDBI2KVA.js";
import {
  n as n3
} from "./chunk-7AOPU62X.js";
import {
  P2
} from "./chunk-UFBX3XSC.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a,
  r2 as r3
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  A,
  b,
  d,
  e2,
  h,
  k,
  s as s2,
  u2 as u,
  y
} from "./chunk-M6FNW7GP.js";
import {
  c as c2,
  i2 as i,
  n2 as n,
  r as r2,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  G,
  c
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/widgets/Attachments/AttachmentsViewModel.js
var u2 = { editing: false, operations: { add: true, update: true, delete: true } };
var f = V.ofType(a3);
var y3 = class extends g {
  constructor(t3) {
    super(t3), this._getAttachmentsPromise = null, this._attachmentLayer = null, this.capabilities = { ...u2 }, this.activeAttachmentInfo = null, this.activeFileInfo = null, this.attachmentInfos = new f(), this.fileInfos = new V(), this.graphic = null, this.mode = "view", this.orderByFields = null, this.filesEnabled = false, this.addHandles(d3(() => this.graphic, () => this._graphicChanged(), P));
  }
  destroy() {
    this._attachmentLayer = null, this.graphic = null;
  }
  castCapabilities(t3) {
    return { ...u2, ...t3 };
  }
  get state() {
    return this._getAttachmentsPromise ? "loading" : this.graphic ? "ready" : "disabled";
  }
  get supportsResizeAttachments() {
    const { graphic: t3 } = this;
    if (!t3) return false;
    const e13 = t3.layer || t3.sourceLayer;
    return (e13 == null ? void 0 : e13.loaded) && "capabilities" in e13 && e13.capabilities && "attachment" in e13.capabilities && e13.capabilities.attachment && "supportsResize" in e13.capabilities.attachment && e13.capabilities.attachment.supportsResize || false;
  }
  async getAttachments() {
    const { _attachmentLayer: t3, attachmentInfos: e13, orderByFields: i8 } = this;
    if (!t3 || "function" != typeof t3.queryAttachments) throw new s("invalid-layer", "getAttachments(): A valid layer is required.");
    const a7 = this._getObjectId();
    if ("number" != typeof a7) throw new s("invalid-object-id", "getAttachments(): Numeric object id is required");
    const r10 = i8 == null ? void 0 : i8.map((t4) => `${t4.field} ${"descending" === t4.order ? "DESC" : "ASC"}`), s10 = new c5({ objectIds: [a7], returnMetadata: true, orderByFields: r10 }), o3 = [], c16 = t3.queryAttachments(s10).then((t4) => t4[a7] || o3).catch(() => o3);
    this._getAttachmentsPromise = c16, this.notifyChange("state");
    const h9 = await c16;
    return e13.destroyAll(), h9.length && e13.addMany(h9), this._getAttachmentsPromise = null, this.notifyChange("state"), h9;
  }
  async addAttachment(t3, e13 = this.graphic) {
    var _a;
    const { _attachmentLayer: i8, attachmentInfos: a7, capabilities: r10 } = this;
    if (!e13) throw new s("invalid-graphic", "addAttachment(): A valid graphic is required.", { graphic: e13 });
    if (!t3) throw new s("invalid-attachment", "addAttachment(): An attachment is required.", { attachment: t3 });
    if (!((_a = r10.operations) == null ? void 0 : _a.add)) throw new s("invalid-capabilities", "addAttachment(): add capabilities are required.");
    if (!i8 || "function" != typeof i8.addAttachment) throw new s("invalid-layer", "addAttachment(): A valid layer is required.");
    const s10 = i8.addAttachment(e13, t3).then((t4) => this._queryAttachment(t4.objectId, e13)), o3 = await s10;
    return a7.add(o3), o3;
  }
  async deleteAttachment(t3) {
    var _a;
    const { _attachmentLayer: e13, attachmentInfos: i8, graphic: a7, capabilities: r10 } = this;
    if (!t3) throw new s("invalid-attachment-info", "deleteAttachment(): An attachmentInfo is required.", { attachmentInfo: t3 });
    if (!((_a = r10.operations) == null ? void 0 : _a.delete)) throw new s("invalid-capabilities", "deleteAttachment(): delete capabilities are required.");
    if (!e13 || "function" != typeof e13.deleteAttachments) throw new s("invalid-layer", "deleteAttachment(): A valid layer is required.");
    if (!a7) throw new s("invalid-graphic", "deleteAttachment(): A graphic is required.");
    const s10 = e13.deleteAttachments(a7, [t3.id]).then(() => t3), o3 = await s10;
    return i8.remove(o3), o3.destroy(), o3;
  }
  async updateAttachment(t3, e13 = this.activeAttachmentInfo) {
    var _a;
    const { _attachmentLayer: i8, attachmentInfos: a7, graphic: r10, capabilities: s10 } = this;
    if (!t3) throw new s("invalid-attachment", "updateAttachment(): An attachment is required.", { attachment: t3 });
    if (!e13) throw new s("invalid-attachment-info", "updateAttachment(): An attachmentInfo is required.", { attachmentInfo: e13 });
    if (!((_a = s10.operations) == null ? void 0 : _a.update)) throw new s("invalid-capabilities", "updateAttachment(): Update capabilities are required.");
    const o3 = a7.indexOf(e13);
    if (!i8 || "function" != typeof i8.updateAttachment) throw new s("invalid-layer", "updateAttachment(): A valid layer is required.");
    if (!r10) throw new s("invalid-graphic", "updateAttachment(): A graphic is required.");
    const c16 = i8.updateAttachment(r10, e13.id, t3).then((t4) => this._queryAttachment(t4.objectId)), h9 = await c16;
    return a7.splice(o3, 1, h9), h9;
  }
  async commitFiles() {
    return await Promise.all(this.fileInfos.items.map((t3) => this.addAttachment(t3.form))), this.fileInfos.removeAll(), this.getAttachments();
  }
  addFile(t3, e13) {
    if (!t3 || !e13) return null;
    const i8 = { file: t3, form: e13 };
    return this.fileInfos.add(i8), i8;
  }
  updateFile(t3, e13, i8 = this.activeFileInfo) {
    if (!t3 || !e13 || !i8) return null;
    const a7 = this.fileInfos.indexOf(i8);
    return a7 > -1 && this.fileInfos.splice(a7, 1, { file: t3, form: e13 }), this.fileInfos.items[a7];
  }
  deleteFile(t3) {
    const e13 = this.fileInfos.find((e14) => e14.file === t3);
    return e13 ? (this.fileInfos.remove(e13), e13) : null;
  }
  async _queryAttachment(t3, e13) {
    const { _attachmentLayer: i8 } = this;
    if (!t3 || !(i8 == null ? void 0 : i8.queryAttachments)) throw new s("invalid-attachment-id", "Could not query attachment.");
    const a7 = this._getObjectId(e13);
    if ("number" != typeof a7) throw new s("invalid-object-id", "getAttachments(): Numeric object id is required");
    const r10 = new c5({ objectIds: [a7], attachmentsWhere: `AttachmentId=${t3}`, returnMetadata: true });
    return i8.queryAttachments(r10).then((t4) => t4[a7][0]);
  }
  _getObjectId(t3 = this.graphic) {
    return (t3 == null ? void 0 : t3.getObjectId()) ?? null;
  }
  _graphicChanged() {
    this.graphic && (this._setAttachmentLayer(), this.getAttachments().catch(() => this.attachmentInfos.destroyAll()));
  }
  _setAttachmentLayer() {
    const { graphic: t3 } = this, e13 = L(t3);
    this._attachmentLayer = e13 ? "scene" === e13.type && null != e13.associatedLayer ? e13.associatedLayer : e13 : null;
  }
};
r([m()], y3.prototype, "capabilities", void 0), r([s4("capabilities")], y3.prototype, "castCapabilities", null), r([m()], y3.prototype, "activeAttachmentInfo", void 0), r([m()], y3.prototype, "activeFileInfo", void 0), r([m({ readOnly: true, type: f })], y3.prototype, "attachmentInfos", void 0), r([m()], y3.prototype, "fileInfos", void 0), r([m({ type: b2 })], y3.prototype, "graphic", void 0), r([m()], y3.prototype, "mode", void 0), r([m({ type: [n5] })], y3.prototype, "orderByFields", void 0), r([m({ readOnly: true })], y3.prototype, "state", null), r([m()], y3.prototype, "filesEnabled", void 0), r([m({ readOnly: true })], y3.prototype, "supportsResizeAttachments", null), y3 = r([a("esri.widgets.Attachments.AttachmentsViewModel")], y3);
var A2 = y3;

// node_modules/@arcgis/core/widgets/Attachments/support/attachmentUtils.js
function e7(i8) {
  const e13 = i8.toLowerCase();
  return "image/bmp" === e13 || "image/emf" === e13 || "image/exif" === e13 || "image/gif" === e13 || "image/x-icon" === e13 || "image/jpeg" === e13 || "image/png" === e13 || "image/tiff" === e13 || "image/x-wmf" === e13;
}
function p3(e13) {
  const p9 = n3("esri/themes/base/images/files/");
  return e13 ? "text/plain" === e13 ? `${p9}text-32.svg` : "application/pdf" === e13 ? `${p9}pdf-32.svg` : "text/csv" === e13 ? `${p9}csv-32.svg` : "application/gpx+xml" === e13 ? `${p9}gpx-32.svg` : "application/x-dwf" === e13 ? `${p9}cad-32.svg` : "application/postscript" === e13 || "application/json" === e13 || "text/xml" === e13 || "model/vrml" === e13 ? `${p9}code-32.svg` : "application/x-zip-compressed" === e13 || "application/x-7z-compressed" === e13 || "application/x-gzip" === e13 || "application/x-tar" === e13 || "application/x-gtar" === e13 || "application/x-bzip2" === e13 || "application/gzip" === e13 || "application/x-compress" === e13 || "application/x-apple-diskimage" === e13 || "application/x-rar-compressed" === e13 || "application/zip" === e13 ? `${p9}zip-32.svg` : e13.includes("image/") ? `${p9}image-32.svg` : e13.includes("audio/") ? `${p9}sound-32.svg` : e13.includes("video/") ? `${p9}video-32.svg` : e13.includes("msexcel") || e13.includes("ms-excel") || e13.includes("spreadsheetml") ? `${p9}excel-32.svg` : e13.includes("msword") || e13.includes("ms-word") || e13.includes("wordprocessingml") ? `${p9}word-32.svg` : e13.includes("powerpoint") || e13.includes("presentationml") ? `${p9}report-32.svg` : `${p9}generic-32.svg` : `${p9}generic-32.svg`;
}

// node_modules/@arcgis/core/widgets/support/legacyIcon.js
var i5 = { close: "esri-icon-close", collapse: "esri-icon-collapse", down: "esri-icon-down", downArrow: "esri-icon-down-arrow", dragHorizontal: "esri-icon-drag-horizontal", dragVertical: "esri-icon-drag-vertical", duplicate: "esri-icon-duplicate", expand: "esri-icon-expand", fontFallbackText: "esri-icon-font-fallback-text", forward: "esri-icon-forward", handleVertical: "esri-icon-handle-vertical", icon: "esri-icon", left: "esri-icon-left", locateCircled: "esri-icon-locate-circled", noticeTriangle: "esri-icon-notice-triangle", pause: "esri-icon-pause", play: "esri-icon-play", plus: "esri-icon-plus", radioChecked: "esri-icon-radio-checked", radioUnchecked: "esri-icon-radio-unchecked", refresh: "esri-icon-refresh", reverse: "esri-icon-reverse", right: "esri-icon-right", search: "esri-icon-search", swap: "esri-icon-swap", table: "esri-icon-table", trash: "esri-icon-trash", up: "esri-icon-up", upArrow: "esri-icon-up-arrow", upDownArrows: "esri-icon-up-down-arrows", urbanModel: "esri-icon-urban-model", zoomInMagnifyingGlass: "esri-icon-zoom-in-magnifying-glass", zoomToObject: "esri-icon-zoom-to-object" };

// node_modules/@arcgis/core/widgets/Attachments.js
var A3 = { addButton: true, addSubmitButton: true, cancelAddButton: true, cancelUpdateButton: true, deleteButton: true, errorMessage: true, progressBar: true, updateButton: true };
var w3 = "esri-attachments";
var F = { base: w3, loaderContainer: `${w3}__loader-container`, loader: `${w3}__loader`, fadeIn: `${w3}--fade-in`, container: `${w3}__container`, containerList: `${w3}__container--list`, containerPreview: `${w3}__container--preview`, actions: `${w3}__actions`, deleteButton: `${w3}__delete-button`, addAttachmentButton: `${w3}__add-attachment-button`, errorMessage: `${w3}__error-message`, items: `${w3}__items`, item: `${w3}__item`, itemButton: `${w3}__item-button`, itemMask: `${w3}__item-mask`, itemMaskIcon: `${w3}__item-mask--icon`, itemImage: `${w3}__image`, itemImageResizable: `${w3}__image--resizable`, itemLabel: `${w3}__label`, itemFilename: `${w3}__filename`, itemChevronIcon: `${w3}__item-chevron-icon`, itemLink: `${w3}__item-link`, itemLinkOverlay: `${w3}__item-link-overlay`, itemLinkOverlayIcon: `${w3}__item-link-overlay-icon`, itemEditIcon: `${w3}__item-edit-icon`, itemAddIcon: `${w3}__item-add-icon`, itemAddButton: `${w3}__item-add-button`, formNode: `${w3}__form-node`, fileFieldset: `${w3}__file-fieldset`, fileLabel: `${w3}__file-label`, fileName: `${w3}__file-name`, fileInput: `${w3}__file-input`, metadata: `${w3}__metadata`, metadataFieldset: `${w3}__metadata-fieldset`, progressBar: `${w3}__progress-bar` };
var k2 = window.CSS;
var M2 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this.displayType = "auto", this.messages = null, this.messagesUnits = null, this.selectedFile = null, this.submitting = false, this.viewModel = null, this.visibleElements = { ...A3 }, this._supportsImageOrientation = k2 && k2.supports && k2.supports("image-orientation", "from-image"), this._addAttachmentForm = null, this._updateAttachmentForm = null;
  }
  normalizeCtorArgs(e13) {
    return (e13 == null ? void 0 : e13.viewModel) || (e13 = { viewModel: new A2(), ...e13 }), e13;
  }
  initialize() {
    this.addHandles([v(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.attachmentInfos;
    }, "change", () => this.scheduleRender()), v(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.fileInfos;
    }, "change", () => this.scheduleRender()), d3(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.mode;
    }, () => this._modeChanged(), P)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-6QWLC3AJ.js") });
  }
  get capabilities() {
    return this.viewModel.capabilities;
  }
  set capabilities(e13) {
    this.viewModel.capabilities = e13;
  }
  get effectiveDisplayType() {
    const { displayType: e13 } = this;
    return e13 && "auto" !== e13 ? e13 : this.viewModel.supportsResizeAttachments ? "preview" : "list";
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e13) {
    this.viewModel.graphic = e13;
  }
  get icon() {
    return "attachment";
  }
  set icon(e13) {
    this._overrideIfSome("icon", e13);
  }
  get label() {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e13) {
    this._overrideIfSome("label", e13);
  }
  castVisibleElements(e13) {
    return { ...A3, ...e13 };
  }
  addAttachment() {
    const { _addAttachmentForm: e13, viewModel: s10 } = this;
    return this._set("submitting", true), this._set("error", null), s10.addAttachment(e13).then((e14) => (this._set("submitting", false), this._set("error", null), s10.mode = "view", e14)).catch((e14) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:add-attachment", this.messages.addErrorMessage, e14)), e14;
    });
  }
  deleteAttachment(e13) {
    const { viewModel: s10 } = this;
    return this._set("submitting", true), this._set("error", null), s10.deleteAttachment(e13).then((e14) => (this._set("submitting", false), this._set("error", null), s10.mode = "view", e14)).catch((e14) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:delete-attachment", this.messages.deleteErrorMessage, e14)), e14;
    });
  }
  updateAttachment() {
    const { viewModel: e13 } = this, { _updateAttachmentForm: s10 } = this;
    return this._set("submitting", true), this._set("error", null), e13.updateAttachment(s10).then((t3) => (this._set("submitting", false), this._set("error", null), e13.mode = "view", t3)).catch((e14) => {
      throw this._set("submitting", false), this._set("error", new s("attachments:update-attachment", this.messages.updateErrorMessage, e14)), e14;
    });
  }
  addFile() {
    const e13 = this.viewModel.addFile(this.selectedFile, this._addAttachmentForm);
    return this.viewModel.mode = "view", e13;
  }
  updateFile() {
    const { viewModel: e13 } = this, t3 = e13.updateFile(this.selectedFile, this._updateAttachmentForm, e13.activeFileInfo);
    return e13.mode = "view", t3;
  }
  deleteFile(e13) {
    var _a;
    const t3 = this.viewModel.deleteFile(e13 || ((_a = this.viewModel.activeFileInfo) == null ? void 0 : _a.file));
    return this.viewModel.mode = "view", t3;
  }
  render() {
    const { submitting: e13, viewModel: t3 } = this, { state: s10 } = t3;
    return n4("div", { class: this.classes(F.base, e4.widget) }, e13 ? this._renderProgressBar() : null, "loading" === s10 ? this._renderLoading() : this._renderAttachments(), this._renderErrorMessage());
  }
  _renderErrorMessage() {
    const { error: e13, visibleElements: t3 } = this;
    return e13 && t3.errorMessage ? n4("div", { class: F.errorMessage, key: "error-message" }, e13.message) : null;
  }
  _renderAttachments() {
    const { activeFileInfo: e13, mode: t3, activeAttachmentInfo: s10 } = this.viewModel;
    return "add" === t3 ? this._renderAddForm() : "edit" === t3 ? this._renderDetailsForm(s10 || e13) : this._renderAttachmentContainer();
  }
  _renderLoading() {
    return n4("div", { class: F.loaderContainer, key: "loader" }, n4("div", { class: F.loader }));
  }
  _renderProgressBar() {
    return this.visibleElements.progressBar ? n4("div", { class: F.progressBar, key: "progress-bar" }) : null;
  }
  _renderAddForm() {
    const { submitting: e13, selectedFile: t3 } = this, s10 = e13 || !t3, i8 = this.visibleElements.cancelAddButton ? n4("button", { bind: this, class: this.classes(e4.button, e4.buttonTertiary, e4.buttonSmall, e4.buttonHalf, e13 && e4.buttonDisabled), disabled: e13, onclick: this._cancelForm, type: "button" }, this.messages.cancel) : null, a7 = this.visibleElements.addSubmitButton ? n4("button", { class: this.classes(e4.button, e4.buttonSecondary, e4.buttonSmall, e4.buttonHalf, { [e4.buttonDisabled]: s10 }), disabled: s10, type: "submit" }, this.messages.add) : null, n14 = t3 ? n4("span", { class: F.fileName, key: "file-name" }, t3.name) : null, l9 = n4("form", { afterCreate: y2, afterRemoved: w2, bind: this, "data-node-ref": "_addAttachmentForm", onsubmit: this._submitAddAttachment }, n4("fieldset", { class: F.fileFieldset }, n14, n4("label", { class: this.classes(F.fileLabel, e4.button, e4.buttonSecondary) }, t3 ? this.messages.changeFile : this.messages.selectFile, n4("input", { bind: this, class: F.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))), a7, i8);
    return n4("div", { class: F.formNode, key: "add-form-container" }, l9);
  }
  _renderDetailsForm(e13) {
    var _a, _b, _c;
    const { visibleElements: t3, viewModel: s10, selectedFile: i8, submitting: a7 } = this, { capabilities: l9 } = s10, r10 = a7 || !i8;
    let o3, d10, c16, m7;
    i8 ? (o3 = i8.type, d10 = i8.name, c16 = i8.size) : e13 && "file" in e13 ? (o3 = e13.file.type, d10 = e13.file.name, c16 = e13.file.size) : e13 && "contentType" in e13 && (o3 = e13.contentType, d10 = e13.name, c16 = e13.size, m7 = e13.url);
    const h9 = l9.editing && ((_a = l9.operations) == null ? void 0 : _a.delete) && t3.deleteButton ? n4("button", { bind: this, class: this.classes(e4.button, e4.buttonSmall, e4.buttonTertiary, F.deleteButton, { [e4.buttonDisabled]: a7 }), disabled: a7, key: "delete-button", onclick: (t4) => this._submitDeleteAttachment(t4, e13), type: "button" }, this.messages.delete) : void 0, u9 = l9.editing && ((_b = l9.operations) == null ? void 0 : _b.update) && t3.updateButton ? n4("button", { class: this.classes(e4.button, e4.buttonSmall, e4.buttonThird, { [e4.buttonDisabled]: r10 }), disabled: r10, key: "update-button", type: "submit" }, this.messages.update) : void 0, b9 = this.visibleElements.cancelUpdateButton ? n4("button", { bind: this, class: this.classes(e4.button, e4.buttonSmall, e4.buttonTertiary, e4.buttonThird, { [e4.buttonDisabled]: a7 }), disabled: a7, key: "cancel-button", onclick: this._cancelForm, type: "button" }, this.messages.cancel) : void 0, f6 = l9.editing && ((_c = l9.operations) == null ? void 0 : _c.update) ? n4("fieldset", { class: F.fileFieldset, key: "file" }, n4("span", { class: F.fileName, key: "file-name" }, d10), n4("label", { class: this.classes(F.fileLabel, e4.button, e4.buttonSecondary) }, this.messages.changeFile, n4("input", { bind: this, class: F.fileInput, name: "attachment", onchange: this._handleFileInputChange, type: "file" }))) : void 0, v8 = n4("fieldset", { class: F.metadataFieldset, key: "size" }, n4("label", null, T(this.messagesUnits, c16 ?? 0))), A5 = n4("fieldset", { class: F.metadataFieldset, key: "content-type" }, n4("label", null, o3)), w9 = null != m7 ? n4("a", { class: F.itemLink, href: m7, rel: "noreferrer", target: "_blank" }, this._renderImageMask(e13, 400), n4("div", { class: F.itemLinkOverlay }, n4("span", { class: F.itemLinkOverlayIcon }, n4("calcite-icon", { icon: "launch" })))) : this._renderImageMask(e13, 400), k5 = n4("form", { afterCreate: y2, afterRemoved: w2, bind: this, "data-node-ref": "_updateAttachmentForm", onsubmit: (t4) => this._submitUpdateAttachment(t4, e13) }, n4("div", { class: F.metadata }, v8, A5), f6, n4("div", { class: F.actions }, h9, b9, u9));
    return n4("div", { class: F.formNode, key: "edit-form-container" }, w9, k5);
  }
  _renderImageMask(e13, t3) {
    return e13 ? "file" in e13 ? this._renderGenericImageMask(e13.file.name, e13.file.type) : this._renderImageMaskForAttachment(e13, t3) : null;
  }
  _renderGenericImageMask(e13, t3) {
    const { supportsResizeAttachments: s10 } = this.viewModel, i8 = p3(t3), a7 = { [F.itemImageResizable]: s10 };
    return n4("div", { class: this.classes(F.itemMaskIcon, F.itemMask), key: i8 }, n4("img", { alt: e13, class: this.classes(a7, F.itemImage), src: i8, title: e13 }));
  }
  _renderImageMaskForAttachment(e13, t3) {
    const { supportsResizeAttachments: s10 } = this.viewModel;
    if (!e13) return null;
    const { contentType: i8, name: a7, url: n14 } = e13;
    if (!s10 || !e7(i8)) return this._renderGenericImageMask(a7, i8);
    const l9 = this._getCSSTransform(e13), r10 = l9 ? { transform: l9, "image-orientation": "none" } : {}, o3 = `${n14}${(n14 == null ? void 0 : n14.includes("?")) ? "&" : "?"}w=${t3}`, d10 = { [F.itemImageResizable]: s10 };
    return n4("div", { class: this.classes(F.itemMask), key: o3 }, n4("img", { alt: a7, class: this.classes(d10, F.itemImage), src: o3, styles: r10, title: a7 }));
  }
  _renderFile(e13) {
    const { file: t3 } = e13;
    return n4("li", { class: F.item, key: t3 }, n4("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F.itemButton, key: "details-button", onclick: () => this._startEditFile(e13), title: this.messages.attachmentDetails, type: "button" }, this._renderImageMask(e13), n4("label", { class: F.itemLabel }, n4("span", { class: F.itemFilename }, t3.name || this.messages.noTitle), n4("span", { "aria-hidden": "true", class: this.classes(F.itemChevronIcon, g2(this.container) ? i5.left : i5.right) }))));
  }
  _renderAttachmentInfo({ attachmentInfo: e13, displayType: t3 }) {
    const { viewModel: s10, effectiveDisplayType: i8 } = this, { capabilities: a7, supportsResizeAttachments: n14 } = s10, { contentType: l9, name: r10, url: o3 } = e13, d10 = this._renderImageMask(e13, "list" === t3 ? 48 : 400), c16 = a7.editing ? n4("span", { "aria-hidden": "true", class: this.classes(F.itemChevronIcon, g2(this.container) ? i5.left : i5.right) }) : null, m7 = [d10, "preview" === i8 && n14 && e7(l9) ? null : n4("label", { class: F.itemLabel }, n4("span", { class: F.itemFilename }, r10 || this.messages.noTitle), c16)], u9 = a7.editing ? n4("button", { "aria-label": this.messages.attachmentDetails, bind: this, class: F.itemButton, "data-attachment-info-id": e13.id, key: "details-button", onclick: () => this._startEditAttachment(e13), title: this.messages.attachmentDetails, type: "button" }, m7) : n4("a", { class: F.itemButton, href: o3 ?? void 0, key: "details-link", rel: "noreferrer", target: "_blank" }, m7);
    return n4("li", { class: F.item, key: e13 }, u9);
  }
  _renderAttachmentContainer() {
    var _a;
    const { effectiveDisplayType: e13, viewModel: t3, visibleElements: s10 } = this, { attachmentInfos: i8, capabilities: a7, fileInfos: n14 } = t3, l9 = !!(i8 == null ? void 0 : i8.length), r10 = !!(n14 == null ? void 0 : n14.length), o3 = { [F.containerList]: "preview" !== e13, [F.containerPreview]: "preview" === e13 }, d10 = a7.editing && ((_a = a7.operations) == null ? void 0 : _a.add) && s10.addButton ? n4("button", { bind: this, class: this.classes(e4.button, e4.buttonTertiary, F.addAttachmentButton), onclick: () => this._startAddAttachment(), type: "button" }, n4("span", { "aria-hidden": "true", class: this.classes(F.itemAddIcon, i5.plus) }), this.messages.add) : void 0, c16 = l9 ? n4("ul", { class: F.items, key: "attachments-list" }, i8.toArray().map((t4) => this._renderAttachmentInfo({ attachmentInfo: t4, displayType: e13 }))) : void 0, m7 = r10 ? n4("ul", { class: F.items, key: "file-list" }, n14.toArray().map((e14) => this._renderFile(e14))) : void 0, h9 = r10 || l9 ? void 0 : n4("div", { class: e4.empty }, this.messages.noAttachments);
    return n4("div", { class: this.classes(F.container, o3), key: "attachments-container" }, c16, m7, h9, d10);
  }
  _modeChanged() {
    this._set("error", null), this._set("selectedFile", null);
  }
  _handleFileInputChange(e13) {
    var _a;
    const t3 = e13.target, s10 = (_a = t3.files) == null ? void 0 : _a.item(0);
    this._set("selectedFile", s10);
  }
  _submitDeleteAttachment(e13, t3) {
    e13.preventDefault(), t3 && ("file" in t3 ? this.deleteFile(t3.file) : t3 && this.deleteAttachment(t3));
  }
  _submitAddAttachment(e13) {
    e13.preventDefault(), this.viewModel.filesEnabled ? this.addFile() : this.addAttachment();
  }
  _submitUpdateAttachment(e13, t3) {
    e13.preventDefault(), t3 && "file" in t3 ? this.updateFile() : this.updateAttachment();
  }
  _startEditAttachment(e13) {
    const { viewModel: t3 } = this;
    t3.activeFileInfo = null, t3.activeAttachmentInfo = e13, t3.mode = "edit";
  }
  _startEditFile(e13) {
    const { viewModel: t3 } = this;
    t3.activeAttachmentInfo = null, t3.activeFileInfo = e13, t3.mode = "edit";
  }
  _startAddAttachment() {
    this.viewModel.mode = "add";
  }
  _cancelForm(e13) {
    e13.preventDefault(), this.viewModel.mode = "view";
  }
  _getCSSTransform(e13) {
    const { orientationInfo: t3 } = e13;
    return !this._supportsImageOrientation && t3 ? [t3.rotation ? `rotate(${t3.rotation}deg)` : "", t3.mirrored ? "scaleX(-1)" : ""].join(" ") : "";
  }
};
r([m()], M2.prototype, "capabilities", null), r([m()], M2.prototype, "displayType", void 0), r([m({ readOnly: true })], M2.prototype, "effectiveDisplayType", null), r([m()], M2.prototype, "graphic", null), r([m()], M2.prototype, "icon", null), r([m()], M2.prototype, "label", null), r([m(), e3("esri/widgets/Attachments/t9n/Attachments")], M2.prototype, "messages", void 0), r([m(), e3("esri/core/t9n/Units")], M2.prototype, "messagesUnits", void 0), r([m({ readOnly: true })], M2.prototype, "selectedFile", void 0), r([m({ readOnly: true })], M2.prototype, "submitting", void 0), r([m({ readOnly: true })], M2.prototype, "error", void 0), r([m({ type: A2 })], M2.prototype, "viewModel", void 0), r([m()], M2.prototype, "visibleElements", void 0), r([s4("visibleElements")], M2.prototype, "castVisibleElements", null), M2 = r([a("esri.widgets.Attachments")], M2);
var I2 = M2;

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments/FeatureAttachmentsViewModel.js
var s6 = class extends A2 {
  constructor(t3) {
    super(t3), this.description = null, this.title = null;
  }
};
r([m()], s6.prototype, "description", void 0), r([m()], s6.prototype, "title", void 0), s6 = r([a("esri.widgets.Feature.FeatureAttachments.FeatureAttachmentsViewModel")], s6);
var c7 = s6;

// node_modules/@arcgis/core/widgets/Feature/support/FeatureElementInfo.js
var n7 = "esri-feature-element-info";
var p4 = { base: n7, title: `${n7}__title`, description: `${n7}__description` };
var c8 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this.description = null, this.headingLevel = 2, this.title = null;
  }
  render() {
    return n4("div", { class: p4.base }, this._renderTitle(), this._renderDescription());
  }
  _renderTitle() {
    const { title: e13 } = this;
    return e13 ? n4(e5, { class: p4.title, innerHTML: e13, level: this.headingLevel }) : null;
  }
  _renderDescription() {
    const { description: e13 } = this;
    return e13 ? n4("div", { class: p4.description, innerHTML: e13, key: "description" }) : null;
  }
};
r([m()], c8.prototype, "description", void 0), r([m()], c8.prototype, "headingLevel", void 0), r([m()], c8.prototype, "title", void 0), c8 = r([a("esri.widgets.Feature.support.FeatureElementInfo")], c8);
var l3 = c8;

// node_modules/@arcgis/core/widgets/Feature/FeatureAttachments.js
var d6 = { base: "esri-feature-attachments" };
var h3 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._featureElementInfo = null, this.attachmentsWidget = new I2(), this.headingLevel = 2, this.viewModel = new c7();
  }
  initialize() {
    this._featureElementInfo = new l3(), this.addHandles([d3(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title, this.headingLevel];
    }, () => this._setupFeatureElementInfo(), P), d3(() => this.viewModel, (e13) => this.attachmentsWidget.viewModel = e13, P)]);
  }
  destroy() {
    var _a;
    this.attachmentsWidget.viewModel = null, this.attachmentsWidget.destroy(), (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e13) {
    this.viewModel.description = e13;
  }
  get displayType() {
    return this.attachmentsWidget.displayType;
  }
  set displayType(e13) {
    this.attachmentsWidget.displayType = e13;
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e13) {
    this.viewModel.graphic = e13;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e13) {
    this.viewModel.title = e13;
  }
  render() {
    var _a;
    const { attachmentsWidget: e13 } = this;
    return n4("div", { class: d6.base }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), e13 == null ? void 0 : e13.render());
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: e13, title: t3, headingLevel: i8 } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: e13, title: t3, headingLevel: i8 });
  }
};
r([m({ readOnly: true })], h3.prototype, "attachmentsWidget", void 0), r([m()], h3.prototype, "description", null), r([m()], h3.prototype, "displayType", null), r([m()], h3.prototype, "graphic", null), r([m()], h3.prototype, "headingLevel", void 0), r([m()], h3.prototype, "title", null), r([m({ type: c7 })], h3.prototype, "viewModel", void 0), h3 = r([a("esri.widgets.Feature.FeatureAttachments")], h3);
var c9 = h3;

// node_modules/@arcgis/core/widgets/Feature/FeatureContent/FeatureContentViewModel.js
var c10 = class extends g {
  constructor(t3) {
    super(t3), this._loadingPromise = null, this.created = null, this.creator = null, this.destroyer = null, this.graphic = null, this.addHandles(d3(() => this.creator, (t4) => {
      this._destroyContent(), this._createContent(t4);
    }, P));
  }
  destroy() {
    this._destroyContent();
  }
  get state() {
    return this._loadingPromise ? "loading" : "ready";
  }
  _destroyContent() {
    const { created: t3, graphic: e13, destroyer: r10 } = this;
    t3 && e13 && (q({ type: "content", value: r10, event: { graphic: e13 } }), this._set("created", null));
  }
  async _createContent(t3) {
    const e13 = this.graphic;
    if (!e13 || !t3) return;
    const r10 = q({ type: "content", value: t3, event: { graphic: e13 } });
    this._loadingPromise = r10, this.notifyChange("state");
    const o3 = await r10;
    r10 === this._loadingPromise && (this._loadingPromise = null, this.notifyChange("state"), this._set("created", o3));
  }
};
r([m({ readOnly: true })], c10.prototype, "created", void 0), r([m()], c10.prototype, "creator", void 0), r([m()], c10.prototype, "destroyer", void 0), r([m({ type: b2 })], c10.prototype, "graphic", void 0), r([m({ readOnly: true })], c10.prototype, "state", null), c10 = r([a("esri.widgets.Feature.FeatureContent.FeatureContentViewModel")], c10);
var p5 = c10;

// node_modules/@arcgis/core/widgets/Feature/FeatureContent.js
var n8 = "esri-feature-content";
var c11 = { base: n8, loaderContainer: `${n8}__loader-container`, loader: `${n8}__loader` };
var l4 = class extends O {
  constructor(e13, r10) {
    super(e13, r10), this.viewModel = null, this._addTargetToAnchors = (e14) => {
      Array.from(e14.querySelectorAll("a")).forEach((e15) => {
        x2(e15.href) && !e15.hasAttribute("target") && e15.setAttribute("target", "_blank");
      });
    };
  }
  get creator() {
    var _a;
    return (_a = this.viewModel) == null ? void 0 : _a.creator;
  }
  set creator(e13) {
    this.viewModel && (this.viewModel.creator = e13);
  }
  get graphic() {
    var _a;
    return (_a = this.viewModel) == null ? void 0 : _a.graphic;
  }
  set graphic(e13) {
    this.viewModel && (this.viewModel.graphic = e13);
  }
  render() {
    var _a;
    const e13 = (_a = this.viewModel) == null ? void 0 : _a.state;
    return n4("div", { class: c11.base }, "loading" === e13 ? this._renderLoading() : this._renderCreated());
  }
  _renderLoading() {
    return n4("div", { class: c11.loaderContainer, key: "loader" }, n4("div", { class: c11.loader }));
  }
  _renderCreated() {
    var _a;
    const e13 = (_a = this.viewModel) == null ? void 0 : _a.created;
    return e13 ? e13 instanceof HTMLElement ? n4("div", { afterCreate: this._attachToNode, bind: e13, key: e13 }) : e6(e13) ? n4("div", { key: e13 }, !e13.destroyed && e13.render()) : n4("div", { afterCreate: this._addTargetToAnchors, innerHTML: e13, key: e13 }) : null;
  }
  _attachToNode(e13) {
    const r10 = this;
    e13.appendChild(r10);
  }
};
r([m()], l4.prototype, "creator", null), r([m()], l4.prototype, "graphic", null), r([m({ type: p5 })], l4.prototype, "viewModel", void 0), l4 = r([a("esri.widgets.Feature.FeatureContent")], l4);
var p6 = l4;

// node_modules/@arcgis/core/widgets/Feature/FeatureFields/FeatureFieldsViewModel.js
var l5 = class extends g {
  constructor(o3) {
    super(o3), this.attributes = null, this.expressionInfos = null, this.description = null, this.fieldInfos = null, this.title = null;
  }
  get formattedFieldInfos() {
    const { expressionInfos: o3, fieldInfos: e13 } = this, t3 = [];
    return e13 == null ? void 0 : e13.forEach((e14) => {
      if (!(!e14.hasOwnProperty("visible") || e14.visible)) return;
      const s10 = e14.clone();
      s10.label = C(s10, o3), t3.push(s10);
    }), t3;
  }
};
r([m()], l5.prototype, "attributes", void 0), r([m({ type: [i3] })], l5.prototype, "expressionInfos", void 0), r([m()], l5.prototype, "description", void 0), r([m({ type: [n6] })], l5.prototype, "fieldInfos", void 0), r([m({ readOnly: true })], l5.prototype, "formattedFieldInfos", null), r([m()], l5.prototype, "title", void 0), l5 = r([a("esri.widgets.Feature.FeatureFields.FeatureFieldsViewModel")], l5);
var n9 = l5;

// node_modules/@arcgis/core/widgets/support/uriUtils.js
var s7 = [{ pattern: /^\s*(https?:\/\/([^\s]+))\s*$/i, target: "_blank", label: "{messages.view}" }, { pattern: /^\s*(tel:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(mailto:([^\s]+))\s*$/i, label: "{hierPart}" }, { pattern: /^\s*(arcgis-appstudio-player:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "App Studio Player" }, { pattern: /^\s*(arcgis-collector:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Collector" }, { pattern: /^\s*(arcgis-explorer:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Explorer" }, { pattern: /^\s*(arcgis-navigator:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Navigator" }, { pattern: /^\s*(arcgis-survey123:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Survey123" }, { pattern: /^\s*(arcgis-trek2there:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Trek2There" }, { pattern: /^\s*(arcgis-workforce:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Workforce" }, { pattern: /^\s*(iform:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "iForm" }, { pattern: /^\s*(flow:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "FlowFinity" }, { pattern: /^\s*(lfmobile:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Laserfische" }, { pattern: /^\s*(mspbi:\/\/([^\s]+))\s*$/i, label: "{messages.openInApp}", appName: "Microsoft Power Bi" }];
function a4(a7, p9) {
  if ("string" != typeof p9 || !p9) return p9;
  const r10 = s7.find((e13) => e13.pattern.test(p9));
  if (!r10) return p9;
  const t3 = p9.match(r10.pattern), n14 = t3 == null ? void 0 : t3[2], l9 = r2(r2(r10.label, { messages: a7, hierPart: n14 }), { appName: r10.appName }), i8 = r10.target ? ` target="${r10.target}"` : "", o3 = "_blank" === r10.target ? ' rel="noreferrer"' : "";
  return p9.replace(r10.pattern, `<a${i8} href="$1"${o3}>${l9}</a>`);
}

// node_modules/@arcgis/core/widgets/Feature/FeatureFields.js
var u3 = "esri-feature-fields";
var m3 = { base: u3, fieldHeader: `${u3}__field-header`, fieldData: `${u3}__field-data`, fieldDataDate: `${u3}__field-data--date` };
var c12 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._featureElementInfo = null, this.viewModel = new n9(), this.messages = null, this.messagesURIUtils = null;
  }
  initialize() {
    this._featureElementInfo = new l3(), this.addHandles(d3(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title];
    }, () => this._setupFeatureElementInfo(), P));
  }
  destroy() {
    var _a;
    (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e13) {
    this.viewModel.attributes = e13;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e13) {
    this.viewModel.description = e13;
  }
  get expressionInfos() {
    return this.viewModel.expressionInfos;
  }
  set expressionInfos(e13) {
    this.viewModel.expressionInfos = e13;
  }
  get fieldInfos() {
    return this.viewModel.fieldInfos;
  }
  set fieldInfos(e13) {
    this.viewModel.fieldInfos = e13;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e13) {
    this.viewModel.title = e13;
  }
  render() {
    var _a;
    return n4("div", { class: m3.base }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), this._renderFields());
  }
  _renderFieldInfo(e13, t3) {
    var _a;
    const { attributes: s10 } = this.viewModel, i8 = e13.fieldName || "", r10 = e13.label || i8, o3 = s10 ? null == s10[i8] ? "" : s10[i8] : "", l9 = !!((_a = e13.format) == null ? void 0 : _a.dateFormat), n14 = "number" == typeof o3 && !l9 ? this._forceLTR(o3) : a4(this.messagesURIUtils, o3), d10 = { [m3.fieldDataDate]: l9 };
    return n4("tr", { key: `fields-element-info-row-${i8}-${t3}` }, n4("th", { class: m3.fieldHeader, innerHTML: r10, key: `fields-element-info-row-header-${i8}-${t3}` }), n4("td", { class: this.classes(m3.fieldData, d10), innerHTML: n14, key: `fields-element-info-row-data-${i8}-${t3}` }));
  }
  _renderFields() {
    const { formattedFieldInfos: e13 } = this.viewModel;
    return (e13 == null ? void 0 : e13.length) ? n4("table", { class: e4.table, summary: this.messages.fieldsSummary }, n4("tbody", null, e13.map((e14, t3) => this._renderFieldInfo(e14, t3)))) : null;
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: e13, title: t3 } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: e13, title: t3 });
  }
  _forceLTR(e13) {
    return `&lrm;${e13}`;
  }
};
r([m()], c12.prototype, "attributes", null), r([m()], c12.prototype, "description", null), r([m()], c12.prototype, "expressionInfos", null), r([m()], c12.prototype, "fieldInfos", null), r([m()], c12.prototype, "title", null), r([m({ type: n9, nonNullable: true })], c12.prototype, "viewModel", void 0), r([m(), e3("esri/widgets/Feature/t9n/Feature")], c12.prototype, "messages", void 0), r([m(), e3("esri/widgets/support/t9n/uriUtils")], c12.prototype, "messagesURIUtils", void 0), c12 = r([a("esri.widgets.Feature.FeatureFields")], c12);
var h4 = c12;

// node_modules/@arcgis/core/widgets/Legend/support/heatmapRampUtils.js
function r6(r10) {
  if (!r10.colorStops) return [];
  const e13 = [...r10.colorStops].filter((o3) => {
    var _a;
    return ((_a = o3.color) == null ? void 0 : _a.a) > 0;
  });
  let t3 = e13.length - 1;
  if (e13[0]) {
    const r11 = e13[t3];
    r11 && 1 !== r11.ratio && (e13.push(new l2({ ratio: 1, color: r11.color })), t3++);
  }
  return e13.map((o3, e14) => {
    var _a, _b;
    let l9 = "";
    return 0 === e14 ? l9 = ((_a = r10.legendOptions) == null ? void 0 : _a.minLabel) || "low" : e14 === t3 && (l9 = ((_b = r10.legendOptions) == null ? void 0 : _b.maxLabel) || "high"), { color: o3.color, label: l9, ratio: o3.ratio };
  }).reverse();
}

// node_modules/@arcgis/core/renderers/support/utils.js
var v2 = j("short-date");
async function w4(e13, l9, t3) {
  r3(e13, l9, () => []).push(...t3);
}
async function x3(l9) {
  var _a, _b;
  const t3 = /* @__PURE__ */ new Map();
  if (!l9) return t3;
  if ("visualVariables" in l9 && l9.visualVariables) {
    for (const e13 of l9.visualVariables) if (D2(e13)) {
      const l10 = (await r5(e13) ?? []).map((e14) => e14.color);
      await w4(t3, e13.field || e13.valueExpression, l10);
    }
  }
  if ("heatmap" === l9.type) {
    const e13 = r6(l9).map((e14) => e14.color);
    await w4(t3, l9.field || l9.valueExpression, e13);
  } else if ("pie-chart" === l9.type) {
    for (const e13 of l9.attributes) await w4(t3, e13.field || e13.valueExpression, [e13.color]);
    await w4(t3, "default", [(_a = l9 == null ? void 0 : l9.othersCategory) == null ? void 0 : _a.color, h2(l9.backgroundFillSymbol, null)]);
  } else if ("dot-density" === l9.type) {
    for (const e13 of l9.attributes) await w4(t3, e13.field || e13.valueExpression, [e13.color]);
    await w4(t3, "default", [l9.backgroundColor]);
  } else if ("unique-value" === l9.type) if ("predominance" === ((_b = l9.authoringInfo) == null ? void 0 : _b.type)) for (const e13 of l9.uniqueValueInfos ?? []) await w4(t3, e13.value.toString(), [h2(e13.symbol, null)]);
  else {
    const e13 = (l9.uniqueValueInfos ?? []).map((e14) => h2(e14.symbol, null)), { field: i8, field2: o3, field3: a7, valueExpression: n14 } = l9;
    (i8 || n14) && await w4(t3, i8 || n14, e13), o3 && await w4(t3, o3, e13), a7 && await w4(t3, a7, e13);
  }
  else if ("class-breaks" === l9.type) {
    const e13 = l9.classBreakInfos.map((e14) => h2(e14.symbol, null)), { field: i8, valueExpression: o3 } = l9;
    await w4(t3, i8 ?? o3, e13);
  } else "simple" === l9.type && await w4(t3, "default", [h2(l9.symbol, null)]);
  return "defaultSymbol" in l9 && l9.defaultSymbol && await w4(t3, "default", [h2(l9.defaultSymbol, null)]), t3.forEach((l10, i8) => {
    const o3 = c(l10.filter(Boolean), (e13, l11) => JSON.stringify(e13) === JSON.stringify(l11));
    t3.set(i8, o3);
  }), t3;
}
function D2(e13) {
  return "color" === e13.type;
}

// node_modules/@arcgis/core/widgets/Feature/support/relatedFeatureUtils.js
var d7 = "esri.widgets.Feature.support.relatedFeatureUtils";
var p7 = () => n.getLogger(d7);
var m4 = /* @__PURE__ */ new Map();
function h5(e13) {
  if (!pe(e13)) return null;
  const [t3, r10] = e13.split("/").slice(1);
  return { layerId: t3, fieldName: r10 };
}
function y4(e13, t3) {
  if (!t3.relationships) return null;
  let r10 = null;
  const { relationships: i8 } = t3;
  return i8.some((t4) => t4.id === parseInt(e13, 10) && (r10 = t4, true)), r10;
}
function I3({ originRelationship: e13, relationships: t3, layerId: r10 }) {
  return t3.find(({ relatedTableId: t4, id: i8 }) => `${t4}` === r10 && i8 === (e13 == null ? void 0 : e13.id)) ?? null;
}
function F2(e13, t3) {
  const r10 = t3.toLowerCase();
  for (const i8 in e13) if (i8.toLowerCase() === r10) return e13[i8];
  return null;
}
function g4(e13, t3) {
  const r10 = y4(e13, t3);
  if (!r10) return;
  return { url: `${t3.url}/${r10.relatedTableId}`, sourceSpatialReference: t3.spatialReference, relation: r10, relatedFields: [], outStatistics: [] };
}
function S(e13, t3) {
  if (!t3) return;
  if (!e13) return;
  const { features: r10, statsFeatures: i8 } = e13, o3 = r10 == null ? void 0 : r10.value;
  t3.relatedFeatures = o3 ? o3.features : [];
  const s10 = i8 == null ? void 0 : i8.value;
  t3.relatedStatsFeatures = s10 ? s10.features : [];
}
function b4(e13, t3, r10, i8) {
  var _a;
  const o3 = new d5();
  return o3.outFields = ["*"], o3.relationshipId = "number" == typeof t3.id ? t3.id : parseInt(t3.id, 10), o3.objectIds = [e13.attributes[r10.objectIdField]], o3.gdbVersion = r10.gdbVersion ?? null, o3.historicMoment = r10.historicMoment ?? null, ((_a = r10.queryRelatedFeatures) == null ? void 0 : _a.call(r10, o3, i8)) ?? Promise.resolve({});
}
function w5(e13, t3, r10) {
  let i8 = 0;
  const o3 = [];
  for (; i8 < t3.length; ) o3.push(`${e13} IN (${t3.slice(i8, r10 + i8)})`), i8 += r10;
  return o3.join(" OR ");
}
function j3(e13) {
  return e13 ? c(e13) : void 0;
}
function R2(e13) {
  return e13 ? c(e13, (e14, t3) => JSON.stringify(e14.toJSON()) === JSON.stringify(t3.toJSON())) : void 0;
}
async function $2(e13, t3, r10, i8) {
  const o3 = r10.layerId.toString(), { layerInfo: u9, relation: c16, relatedFields: f6, outStatistics: d10, url: p9, sourceSpatialReference: m7 } = t3, h9 = j3(f6), y10 = R2(d10);
  if (!u9 || !c16) return null;
  const g11 = I3({ originRelationship: c16, relationships: u9.relationships, layerId: o3 });
  if ((g11 == null ? void 0 : g11.relationshipTableId) && g11.keyFieldInRelationshipTable) {
    const t4 = (await b4(e13, g11, r10, i8))[e13.attributes[r10.objectIdField]];
    if (!t4) return null;
    const o4 = t4.features.map((e14) => e14.attributes[u9.objectIdField]);
    if ((y10 == null ? void 0 : y10.length) && u9.supportsStatistics) {
      const e14 = new b3();
      e14.where = w5(u9.objectIdField, o4, 1e3), e14.outFields = h9, e14.outStatistics = y10, e14.sourceSpatialReference = m7;
      const r11 = { features: Promise.resolve(t4), statsFeatures: s5(p9, e14) };
      return y(r11);
    }
  }
  const S2 = g11 == null ? void 0 : g11.keyField;
  if (S2) {
    const t4 = ge(L2(u9.fields, S2)), o4 = F2(e13.attributes, c16.keyField), f7 = t4 ? `${S2}=${o4}` : `${S2}='${o4}'`, d11 = r10.historicMoment, I8 = r10.gdbVersion, g12 = s5(p9, new b3({ where: f7, outFields: h9, sourceSpatialReference: m7, historicMoment: d11, gdbVersion: I8 }), i8), b9 = !!(y10 == null ? void 0 : y10.length) && u9.supportsStatistics ? s5(p9, new b3({ where: f7, outFields: h9, outStatistics: y10, sourceSpatialReference: m7 }), i8) : null, w9 = { features: g12 };
    return b9 && (w9.statsFeatures = b9), y(w9);
  }
  return null;
}
function N2(t3, r10) {
  return P2(t3, { query: { f: "json" }, signal: r10 == null ? void 0 : r10.signal });
}
function v3({ relatedInfos: e13, layer: t3 }, i8) {
  const n14 = {};
  return e13.forEach((e14, i9) => {
    const { relation: o3 } = e14;
    if (!o3) {
      const e15 = new s("relation-required", "A relation is required on a layer to retrieve related records.");
      throw p7().error(e15), e15;
    }
    const { relatedTableId: s10 } = o3;
    if ("number" != typeof s10) {
      const e15 = new s("A related table ID is required on a layer to retrieve related records.");
      throw p7().error(e15), e15;
    }
    const l9 = `${t3.url}/${s10}`, a7 = m4.get(l9), u9 = a7 ?? N2(l9);
    a7 || m4.set(l9, u9), n14[i9] = u9;
  }), h(y(n14), i8);
}
function T2({ graphic: e13, relatedInfos: t3, layer: r10 }, i8) {
  const o3 = {};
  return t3.forEach((t4, s10) => {
    t4.layerInfo && (o3[s10] = $2(e13, t4, r10, i8));
  }), y(o3);
}
function q2({ relatedInfo: e13, fieldName: t3, fieldInfo: r10 }) {
  var _a, _b;
  if ((_a = e13.relatedFields) == null ? void 0 : _a.push(t3), r10.statisticType) {
    const i8 = new m2({ statisticType: r10.statisticType, onStatisticField: t3, outStatisticFieldName: t3 });
    (_b = e13.outStatistics) == null ? void 0 : _b.push(i8);
  }
}
function L2(e13, t3) {
  if (null != e13) {
    t3 = t3.toLowerCase();
    for (const r10 of e13) if (r10 && r10.name.toLowerCase() === t3) return r10;
  }
  return null;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia/FeatureMediaViewModel.js
var I4 = { chartAnimation: true };
var v4 = class extends g {
  constructor(t3) {
    super(t3), this.abilities = { ...I4 }, this.activeMediaInfoIndex = 0, this.attributes = null, this.description = null, this.fieldInfoMap = null, this.formattedAttributes = null, this.expressionAttributes = null, this.isAggregate = false, this.layer = null, this.mediaInfos = null, this.popupTemplate = null, this.relatedInfos = null, this.title = null;
  }
  castAbilities(t3) {
    return { ...I4, ...t3 };
  }
  get activeMediaInfo() {
    return this.formattedMediaInfos[this.activeMediaInfoIndex] || null;
  }
  get formattedMediaInfos() {
    return this._formatMediaInfos() || [];
  }
  get formattedMediaInfoCount() {
    return this.formattedMediaInfos.length;
  }
  setActiveMedia(t3) {
    this._setContentElementMedia(t3);
  }
  next() {
    this._pageContentElementMedia(1);
  }
  previous() {
    this._pageContentElementMedia(-1);
  }
  _setContentElementMedia(t3) {
    const { formattedMediaInfoCount: e13 } = this, i8 = (t3 + e13) % e13;
    this.activeMediaInfoIndex = i8;
  }
  _pageContentElementMedia(t3) {
    const { activeMediaInfoIndex: e13 } = this, i8 = e13 + t3;
    this._setContentElementMedia(i8);
  }
  _formatMediaInfos() {
    const { mediaInfos: t3, layer: e13 } = this, o3 = this.attributes ?? {}, r10 = this.formattedAttributes ?? {}, a7 = this.expressionAttributes ?? {}, s10 = this.fieldInfoMap ?? /* @__PURE__ */ new Map();
    return (t3 == null ? void 0 : t3.map((t4) => {
      const i8 = t4 == null ? void 0 : t4.clone();
      if (!i8) return null;
      if (i8.title = D({ attributes: o3, fieldInfoMap: s10, globalAttributes: r10, expressionAttributes: a7, layer: e13, text: i8.title }), i8.caption = D({ attributes: o3, fieldInfoMap: s10, globalAttributes: r10, expressionAttributes: a7, layer: e13, text: i8.caption }), i8.altText = D({ attributes: o3, fieldInfoMap: s10, globalAttributes: r10, expressionAttributes: a7, layer: e13, text: i8.altText }), "image" === i8.type) {
        if (!i8.value) return;
        return this._setImageValue({ value: i8.value, formattedAttributes: r10, layer: e13 }), i8.value.sourceURL ? i8 : void 0;
      }
      if ("pie-chart" === i8.type || "line-chart" === i8.type || "column-chart" === i8.type || "bar-chart" === i8.type) {
        if (!i8.value) return;
        return this._setChartValue({ value: i8.value, chartType: i8.type, attributes: o3, formattedAttributes: r10, layer: e13, expressionAttributes: a7 }), i8;
      }
      return null;
    }).filter(G)) ?? [];
  }
  _setImageValue(t3) {
    const e13 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { value: i8, formattedAttributes: o3, layer: r10 } = t3, { linkURL: a7, sourceURL: s10 } = i8;
    if (s10) {
      const t4 = Q(s10, r10);
      i8.sourceURL = O2({ formattedAttributes: o3, template: t4, fieldInfoMap: e13 });
    }
    if (a7) {
      const t4 = Q(a7, r10);
      i8.linkURL = O2({ formattedAttributes: o3, template: t4, fieldInfoMap: e13 });
    }
  }
  _setChartValue(t3) {
    const { value: e13, attributes: i8, formattedAttributes: o3, chartType: r10, layer: a7, expressionAttributes: s10 } = t3, { popupTemplate: l9, relatedInfos: n14 } = this, { fields: p9, normalizeField: d10 } = e13, m7 = a7;
    e13.fields = R(p9, m7), d10 && (e13.normalizeField = M(d10, m7));
    if (!p9.some((t4) => !!(null != o3[t4] || pe(t4) && (n14 == null ? void 0 : n14.size)))) return;
    const h9 = (l9 == null ? void 0 : l9.fieldInfos) ?? [];
    p9.forEach((t4, a8) => {
      var _a;
      const l10 = (_a = e13.colors) == null ? void 0 : _a[a8];
      if (pe(t4)) return void (e13.series = [...e13.series, ...this._getRelatedChartInfos({ fieldInfos: h9, fieldName: t4, formattedAttributes: o3, chartType: r10, value: e13, color: l10 })]);
      const n15 = this._getChartOption({ value: e13, attributes: i8, chartType: r10, formattedAttributes: o3, expressionAttributes: s10, fieldName: t4, fieldInfos: h9, color: l10 });
      e13.series.push(n15);
    });
  }
  _getRelatedChartInfos(t3) {
    var _a;
    const { fieldInfos: e13, fieldName: i8, formattedAttributes: o3, chartType: r10, value: a7, color: s10 } = t3, l9 = [], n14 = h5(i8), p9 = n14 && ((_a = this.relatedInfos) == null ? void 0 : _a.get(n14.layerId.toString()));
    if (!p9) return l9;
    const { relatedFeatures: d10, relation: u9 } = p9;
    if (!u9 || !d10) return l9;
    const { cardinality: f6 } = u9;
    d10.forEach((t4) => {
      const { attributes: p10 } = t4;
      p10 && Object.keys(p10).forEach((t5) => {
        t5 === n14.fieldName && l9.push(this._getChartOption({ value: a7, attributes: p10, formattedAttributes: o3, fieldName: i8, chartType: r10, relatedFieldName: t5, hasMultipleRelatedFeatures: (d10 == null ? void 0 : d10.length) > 1, fieldInfos: e13, color: s10 }));
      });
    });
    return "one-to-many" === f6 || "many-to-many" === f6 ? l9 : [l9[0]];
  }
  _getTooltip({ label: t3, value: e13, chartType: i8 }) {
    return "pie-chart" === i8 ? `${t3}` : `${t3}: ${e13}`;
  }
  _getChartOption(t3) {
    var _a;
    const { value: e13, attributes: i8, formattedAttributes: o3, expressionAttributes: r10, fieldName: a7, relatedFieldName: n14, fieldInfos: p9, chartType: d10, hasMultipleRelatedFeatures: u9, color: I8 } = t3, v8 = this.layer, M6 = this.fieldInfoMap ?? /* @__PURE__ */ new Map(), { normalizeField: A5, tooltipField: g11 } = e13, x7 = A5 ? pe(A5) ? i8[h5(A5).fieldName] : i8[A5] : null, _3 = E(a7) && r10 && void 0 !== r10[a7] ? r10[a7] : n14 && void 0 !== i8[n14] ? i8[n14] : void 0 !== i8[a7] ? i8[a7] : o3[a7], C4 = new p2({ fieldName: a7, color: I8, value: void 0 === _3 ? null : _3 && x7 ? _3 / x7 : _3 });
    if (pe(a7)) {
      const t4 = M6.get(a7.toLowerCase()), e14 = g11 && M6.get(g11.toLowerCase()), r11 = (t4 == null ? void 0 : t4.fieldName) ?? a7, s10 = u9 && g11 ? h5(g11).fieldName : (e14 == null ? void 0 : e14.fieldName) ?? g11, l9 = u9 && s10 ? i8[s10] : o3[s10] ?? (t4 == null ? void 0 : t4.label) ?? (t4 == null ? void 0 : t4.fieldName) ?? n14, p10 = u9 && n14 ? i8[n14] : o3[r11];
      return C4.tooltip = this._getTooltip({ label: l9, value: p10, chartType: d10 }), C4;
    }
    const T6 = ee(p9, a7), N3 = M(a7, v8), F7 = g11 && void 0 !== o3[g11] ? o3[g11] : C(T6 || new n6({ fieldName: N3 }), (_a = this.popupTemplate) == null ? void 0 : _a.expressionInfos), j5 = o3[N3];
    return C4.tooltip = this._getTooltip({ label: F7, value: j5, chartType: d10 }), C4;
  }
};
r([m()], v4.prototype, "abilities", void 0), r([s4("abilities")], v4.prototype, "castAbilities", null), r([m()], v4.prototype, "activeMediaInfoIndex", void 0), r([m({ readOnly: true })], v4.prototype, "activeMediaInfo", null), r([m()], v4.prototype, "attributes", void 0), r([m()], v4.prototype, "description", void 0), r([m()], v4.prototype, "fieldInfoMap", void 0), r([m()], v4.prototype, "formattedAttributes", void 0), r([m()], v4.prototype, "expressionAttributes", void 0), r([m({ readOnly: true })], v4.prototype, "formattedMediaInfos", null), r([m()], v4.prototype, "isAggregate", void 0), r([m()], v4.prototype, "layer", void 0), r([m({ readOnly: true })], v4.prototype, "formattedMediaInfoCount", null), r([m()], v4.prototype, "mediaInfos", void 0), r([m()], v4.prototype, "popupTemplate", void 0), r([m()], v4.prototype, "relatedInfos", void 0), r([m()], v4.prototype, "title", void 0), v4 = r([a("esri.widgets.Feature.FeatureMedia.FeatureMediaViewModel")], v4);
var M3 = v4;

// node_modules/@arcgis/core/widgets/Feature/FeatureMedia.js
var g5 = "esri-feature-media";
var v5 = { base: g5, mediaContainer: `${g5}__container`, mediaItemContainer: `${g5}__item-container`, mediaItem: `${g5}__item`, mediaItemText: `${g5}__item-text`, mediaItemTitle: `${g5}__item-title`, mediaItemCaption: `${g5}__item-caption`, mediaNavigation: `${g5}__item-navigation`, mediaPagination: `${g5}__pagination`, mediaPaginationText: `${g5}__pagination-text`, mediaPrevious: `${g5}__previous`, mediaPreviousIconLTR: `${g5}__previous-icon`, mediaPreviousIconRTL: `${g5}__previous-icon--rtl`, mediaNext: `${g5}__next`, mediaNextIconLTR: `${g5}__next-icon`, mediaNextIconRTL: `${g5}__next-icon--rtl`, mediaChart: `${g5}__chart`, mediaPaginationButton: `${g5}__pagination-button`, mediaPaginationIcon: `${g5}__pagination-icon`, mediaChartRendered: `${g5}__chart--rendered` };
var M4 = 15;
var w6 = "category";
var A4 = "value";
var I5 = "rgba(50, 50, 50, 1)";
var C2 = 250;
var y5 = 500;
var x4 = 200;
var T3 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._refreshTimer = null, this._refreshIntervalInfo = null, this._featureElementInfo = null, this._chartRootMap = /* @__PURE__ */ new WeakMap(), this.viewModel = new M3(), this.messages = null, this._disposeChart = (e14) => {
      var _a;
      (_a = this._chartRootMap.get(e14)) == null ? void 0 : _a.dispose(), this._chartRootMap.delete(e14);
    }, this._createChart = async (e14) => {
      const { destroyed: t4, viewModel: i8 } = this;
      if (t4 || !i8 || !e14) return;
      const { createRoot: r10 } = await import("./chartUtilsAm5-UI4SI44P.js"), a7 = await r10(e14);
      this._chartRootMap.set(e14, a7), this._renderChart({ mediaInfo: i8.activeMediaInfo, root: a7 });
    };
  }
  initialize() {
    this._featureElementInfo = new l3(), this.addHandles([d3(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.activeMediaInfo, (_b = this.viewModel) == null ? void 0 : _b.activeMediaInfoIndex];
    }, () => this._setupMediaRefreshTimer(), P), d3(() => {
      var _a, _b;
      return [(_a = this.viewModel) == null ? void 0 : _a.description, (_b = this.viewModel) == null ? void 0 : _b.title];
    }, () => this._setupFeatureElementInfo(), P)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-6QWLC3AJ.js") });
  }
  destroy() {
    var _a;
    this._clearMediaRefreshTimer(), (_a = this._featureElementInfo) == null ? void 0 : _a.destroy();
  }
  get attributes() {
    return this.viewModel.attributes;
  }
  set attributes(e13) {
    this.viewModel.attributes = e13;
  }
  get activeMediaInfoIndex() {
    return this.viewModel.activeMediaInfoIndex;
  }
  set activeMediaInfoIndex(e13) {
    this.viewModel.activeMediaInfoIndex = e13;
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e13) {
    this.viewModel.description = e13;
  }
  get fieldInfoMap() {
    return this.viewModel.fieldInfoMap;
  }
  set fieldInfoMap(e13) {
    this.viewModel.fieldInfoMap = e13;
  }
  get layer() {
    return this.viewModel.layer;
  }
  set layer(e13) {
    this.viewModel.layer = e13;
  }
  get mediaInfos() {
    return this.viewModel.mediaInfos;
  }
  set mediaInfos(e13) {
    this.viewModel.mediaInfos = e13;
  }
  get popupTemplate() {
    return this.viewModel.popupTemplate;
  }
  set popupTemplate(e13) {
    this.viewModel.popupTemplate = e13;
  }
  get relatedInfos() {
    return this.viewModel.relatedInfos;
  }
  set relatedInfos(e13) {
    this.viewModel.relatedInfos = e13;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e13) {
    this.viewModel.title = e13;
  }
  render() {
    var _a;
    return n4("div", { bind: this, class: v5.base, onkeyup: this._handleMediaKeyup }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), this._renderMedia());
  }
  _renderMedia() {
    const { formattedMediaInfoCount: e13, activeMediaInfoIndex: t3 } = this.viewModel, i8 = this._renderMediaText();
    return e13 ? n4("div", { class: v5.mediaContainer, key: "media-element-container" }, this._renderMediaInfo(), n4("div", { class: v5.mediaNavigation }, i8, e13 > 1 ? n4("div", { class: v5.mediaPagination }, this._renderMediaPageButton("previous"), n4("span", { class: v5.mediaPaginationText }, s3(this.messages.pageText, { index: t3 + 1, total: e13 })), this._renderMediaPageButton("next")) : null)) : null;
  }
  _renderMediaText() {
    const { activeMediaInfo: e13 } = this.viewModel;
    if (!e13) return null;
    const t3 = e13 && e13.title ? n4("div", { class: v5.mediaItemTitle, innerHTML: e13.title, key: "media-title" }) : null, i8 = e13 && e13.caption ? n4("div", { class: v5.mediaItemCaption, innerHTML: e13.caption, key: "media-caption" }) : null;
    return t3 || i8 ? n4("div", { class: v5.mediaItemText, key: "media-text" }, t3, i8) : null;
  }
  _renderImageMediaInfo(e13) {
    if (!e13.value) return null;
    const { _refreshIntervalInfo: t3 } = this, { activeMediaInfoIndex: i8, formattedMediaInfoCount: r10 } = this.viewModel, { value: a7, refreshInterval: o3, altText: s10, title: n14, type: l9 } = e13, { sourceURL: d10, linkURL: c16 } = a7, p9 = x2(c16 ?? void 0) ? "_blank" : "_self", h9 = "_blank" === p9 ? "noreferrer" : "", f6 = o3 ? t3 : null, _3 = f6 ? f6.timestamp : 0, g11 = f6 ? f6.sourceURL : d10, v8 = n4("img", { alt: s10 || n14, key: `media-${l9}-${i8}-${r10}-${_3}`, src: g11 ?? void 0 });
    return (c16 ? n4("a", { href: c16, rel: h9, target: p9, title: n14 }, v8) : null) ?? v8;
  }
  _renderChartMediaInfo(e13) {
    const { activeMediaInfoIndex: t3, formattedMediaInfoCount: i8 } = this.viewModel;
    return n4("div", { afterCreate: this._createChart, afterRemoved: this._disposeChart, bind: this, class: v5.mediaChart, key: `media-${e13.type}-${t3}-${i8}` });
  }
  _renderMediaInfoType() {
    const { activeMediaInfo: e13 } = this.viewModel;
    return e13 ? "image" === e13.type ? this._renderImageMediaInfo(e13) : e13.type.includes("chart") ? this._renderChartMediaInfo(e13) : null : null;
  }
  _renderMediaInfo() {
    const { activeMediaInfo: e13 } = this.viewModel;
    return e13 ? n4("div", { class: v5.mediaItemContainer, key: "media-container" }, n4("div", { class: v5.mediaItem, key: "media-item-container" }, this._renderMediaInfoType())) : null;
  }
  _renderMediaPageButton(e13) {
    if (this.viewModel.formattedMediaInfoCount < 2) return null;
    const t3 = "previous" === e13, i8 = t3 ? this.messages.previous : this.messages.next, r10 = t3 ? "chevron-left" : "chevron-right", a7 = t3 ? "media-previous" : "media-next", o3 = t3 ? this._previous : this._next;
    return n4("button", { "aria-label": i8, bind: this, class: v5.mediaPaginationButton, key: a7, onclick: o3, tabIndex: 0, title: i8, type: "button" }, n4("calcite-icon", { class: v5.mediaPaginationIcon, icon: r10, scale: "s" }));
  }
  _setupFeatureElementInfo() {
    var _a;
    const { description: e13, title: t3 } = this;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: e13, title: t3 });
  }
  _next() {
    this.viewModel.next();
  }
  _previous() {
    this.viewModel.previous();
  }
  _getRenderer() {
    if (!this.viewModel) return;
    const { isAggregate: e13, layer: t3 } = this.viewModel;
    return e13 && (t3 == null ? void 0 : t3.featureReduction) && "renderer" in t3.featureReduction ? t3.featureReduction.renderer : t3 == null ? void 0 : t3.renderer;
  }
  async _getSeriesColors(e13) {
    const { colorAm5: t3 } = await import("./chartCommon-KSM4GYWB.js"), i8 = /* @__PURE__ */ new Map();
    return e13.forEach((e14) => {
      e14.color && i8.set(e14, t3(e14.color.toCss(true)));
    }), i8;
  }
  async _getRendererColors() {
    const { colorAm5: e13 } = await import("./chartCommon-KSM4GYWB.js"), t3 = /* @__PURE__ */ new Map(), i8 = this._getRenderer(), r10 = "default";
    if (!i8) return t3;
    const a7 = await x3(i8);
    a7.delete(r10);
    return Array.from(a7.values()).every((e14) => 1 === (e14 == null ? void 0 : e14.length)) ? (Array.from(a7.keys()).forEach((i9) => {
      var _a, _b;
      const r11 = (_b = (_a = a7.get(i9)) == null ? void 0 : _a[0]) == null ? void 0 : _b.toCss(true);
      r11 && t3.set(i9, e13(r11));
    }), t3) : t3;
  }
  _handleMediaKeyup(e13) {
    const { key: t3 } = e13;
    "ArrowLeft" === t3 && (e13.stopPropagation(), this.viewModel.previous()), "ArrowRight" === t3 && (e13.stopPropagation(), this.viewModel.next());
  }
  _canAnimateChart() {
    return !!this.viewModel && (!!this.viewModel.abilities.chartAnimation && !o());
  }
  _getChartAnimationMS() {
    return this._canAnimateChart() ? C2 : 0;
  }
  _getChartSeriesAnimationMS() {
    return this._canAnimateChart() ? y5 : 0;
  }
  async _renderChart(e13) {
    const { root: t3, mediaInfo: i8 } = e13, { value: r10, type: a7 } = i8, { ResponsiveThemeAm5: o3, DarkThemeAm5: s10, AnimatedThemeAm5: n14, ColorSetAm5: l9, ThemeAm5: d10, esriChartColorSet: m7 } = await import("./chartCommon-KSM4GYWB.js"), c16 = d10.new(t3);
    c16.rule("ColorSet").set("colors", m7), c16.rule("ColorSet").set("reuse", true);
    const p9 = [o3.new(t3), c16];
    r4() && p9.push(s10.new(t3)), this._canAnimateChart() && p9.push(n14.new(t3)), t3.setThemes(p9);
    const h9 = await this._getRendererColors(), u9 = await this._getSeriesColors(r10.series), _3 = l9.new(t3, {}), g11 = u9.get(r10.series[0]), v8 = g11 ? { lineSettings: { stroke: g11 } } : void 0, M6 = r10.series.map((e14, t4) => {
      const i9 = u9.get(e14) || h9.get(e14.fieldName) || _3.getIndex(t4);
      return { [w6]: e14.tooltip, [A4]: e14.value, columnSettings: { fill: i9, stroke: i9 }, ...v8 };
    }).filter((e14) => "pie-chart" !== a7 || null != e14.value && e14.value > 0);
    "pie-chart" === a7 ? this._createPieChart(e13, M6) : this._createXYChart(e13, M6);
  }
  _getDirection() {
    return g2(this.container) ? "rtl" : "ltr";
  }
  async _customizeChartTooltip(e13, t3 = "horizontal") {
    var _a;
    const { colorAm5: i8 } = await import("./chartCommon-KSM4GYWB.js");
    e13.setAll({ pointerOrientation: t3 }), (_a = e13.get("background")) == null ? void 0 : _a.setAll({ stroke: i8(I5) }), e13.label.setAll({ direction: this._getDirection(), oversizedBehavior: "wrap", maxWidth: x4 });
  }
  async _createPieChart(e13, t3) {
    const { TooltipAm5: i8 } = await import("./chartCommon-KSM4GYWB.js"), { PieChartAm5: r10, PieSeriesAm5: a7 } = await import("./pieChart-5Q2SDUKN.js"), { mediaInfo: o3, root: s10 } = e13, { title: n14 } = o3, l9 = 5, d10 = (o3 == null ? void 0 : o3.altText) || (o3 == null ? void 0 : o3.title) || "", m7 = s10.container.children.push(r10.new(s10, { ariaLabel: d10, focusable: true, paddingBottom: l9, paddingTop: l9, paddingLeft: l9, paddingRight: l9 })), c16 = "{category}: {valuePercentTotal.formatNumber('0.00')}%\n ({value})", p9 = i8.new(s10, { labelText: c16 }), h9 = m7.series.push(a7.new(s10, { name: n14, valueField: A4, categoryField: w6, tooltip: p9 }));
    h9.ticks.template.set("forceHidden", true), h9.labels.template.set("forceHidden", true), h9.slices.template.states.create("active", { shiftRadius: l9 }), this._customizeChartTooltip(p9), h9.slices.template.setAll({ ariaLabel: c16, focusable: true, templateField: "columnSettings" }), h9.data.setAll(t3), h9.appear(this._getChartSeriesAnimationMS()), m7.appear(this._getChartAnimationMS()), m7.root.dom.classList.toggle(v5.mediaChartRendered, true);
  }
  _getMinSeriesValue(e13) {
    let t3 = 0;
    return e13.forEach((e14) => t3 = Math.min(e14.value, t3)), t3;
  }
  async _createColumnChart(e13, t3, i8) {
    const { TooltipAm5: r10, ScrollbarAm5: a7 } = await import("./chartCommon-KSM4GYWB.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s10, ValueAxisAm5: n14, AxisRendererYAm5: l9, ColumnSeriesAm5: d10 } = await import("./xyChart-PFVJUR4K.js"), { mediaInfo: m7, root: c16 } = t3, { value: h9, title: u9 } = m7;
    e13.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const f6 = e13.xAxes.push(o3.new(c16, { renderer: s10.new(c16, { inversed: g2(this.container) }), categoryField: w6 }));
    f6.get("renderer").labels.template.setAll({ forceHidden: true });
    const _3 = e13.yAxes.push(n14.new(c16, { renderer: l9.new(c16, { inside: false }), min: this._getMinSeriesValue(h9.series) }));
    _3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const g11 = "{categoryX}", v8 = r10.new(c16, { labelText: g11 }), I8 = e13.series.push(d10.new(c16, { name: u9, xAxis: f6, yAxis: _3, valueYField: A4, categoryXField: w6, tooltip: v8 }));
    this._customizeChartTooltip(v8), I8.columns.template.setAll({ ariaLabel: g11, focusable: true, templateField: "columnSettings" }), h9.series.length > M4 && e13.set("scrollbarX", a7.new(c16, { orientation: "horizontal" })), f6.data.setAll(i8), I8.data.setAll(i8), I8.appear(this._getChartSeriesAnimationMS()), e13.appear(this._getChartAnimationMS());
  }
  async _createBarChart(e13, t3, i8) {
    const { TooltipAm5: r10, ScrollbarAm5: a7 } = await import("./chartCommon-KSM4GYWB.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s10, ValueAxisAm5: n14, AxisRendererYAm5: l9, ColumnSeriesAm5: d10 } = await import("./xyChart-PFVJUR4K.js"), { mediaInfo: m7, root: c16 } = t3, { value: h9, title: u9 } = m7;
    e13.setAll({ wheelX: "panY", wheelY: "zoomY" });
    const f6 = e13.yAxes.push(o3.new(c16, { renderer: l9.new(c16, { inversed: true }), categoryField: w6 }));
    f6.get("renderer").labels.template.setAll({ forceHidden: true });
    const _3 = e13.xAxes.push(n14.new(c16, { renderer: s10.new(c16, { inside: false, inversed: g2(this.container) }), min: this._getMinSeriesValue(h9.series) }));
    _3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const g11 = "{categoryY}", v8 = r10.new(c16, { labelText: g11 }), I8 = e13.series.push(d10.new(c16, { name: u9, xAxis: _3, yAxis: f6, valueXField: A4, categoryYField: w6, tooltip: v8 }));
    this._customizeChartTooltip(v8, "vertical"), I8.columns.template.setAll({ ariaLabel: g11, focusable: true, templateField: "columnSettings" }), h9.series.length > M4 && e13.set("scrollbarY", a7.new(c16, { orientation: "vertical" })), f6.data.setAll(i8), I8.data.setAll(i8), I8.appear(this._getChartSeriesAnimationMS()), e13.appear(this._getChartAnimationMS());
  }
  async _createLineChart(e13, t3, i8) {
    var _a, _b, _c;
    const { TooltipAm5: r10, ScrollbarAm5: a7 } = await import("./chartCommon-KSM4GYWB.js"), { CategoryAxisAm5: o3, AxisRendererXAm5: s10, ValueAxisAm5: n14, AxisRendererYAm5: l9, LineSeriesAm5: d10 } = await import("./xyChart-PFVJUR4K.js"), { root: m7, mediaInfo: c16 } = t3, { value: h9, title: u9 } = c16;
    e13.setAll({ wheelX: "panX", wheelY: "zoomX" });
    const f6 = e13.xAxes.push(o3.new(m7, { renderer: s10.new(m7, { inversed: g2(this.container) }), categoryField: w6 }));
    f6.get("renderer").labels.template.setAll({ forceHidden: true });
    const _3 = e13.yAxes.push(n14.new(m7, { renderer: l9.new(m7, { inside: false }), min: this._getMinSeriesValue(h9.series) }));
    _3.get("renderer").labels.template.setAll({ direction: this._getDirection() });
    const g11 = "{categoryX}", v8 = (_b = (_a = i8[0]) == null ? void 0 : _a.lineSettings) == null ? void 0 : _b.stroke, I8 = r10.new(m7, { getFillFromSprite: !v8, labelText: g11 });
    v8 && ((_c = I8.get("background")) == null ? void 0 : _c.setAll({ fill: v8 }));
    const C4 = e13.series.push(d10.new(m7, { name: u9, xAxis: f6, yAxis: _3, valueYField: A4, categoryXField: w6, tooltip: I8 }));
    C4.strokes.template.setAll({ templateField: "lineSettings" }), this._customizeChartTooltip(I8, "vertical"), h9.series.length > M4 && e13.set("scrollbarX", a7.new(m7, { orientation: "horizontal" })), f6.data.setAll(i8), C4.data.setAll(i8), C4.appear(this._getChartSeriesAnimationMS()), e13.appear(this._getChartAnimationMS());
  }
  async _createXYChart(e13, t3) {
    const { XYChartAm5: i8, XYCursorAm5: r10 } = await import("./xyChart-PFVJUR4K.js"), { root: a7, mediaInfo: o3 } = e13, { type: s10 } = o3, n14 = (o3 == null ? void 0 : o3.altText) || (o3 == null ? void 0 : o3.title) || "", l9 = a7.container.children.push(i8.new(a7, { ariaLabel: n14, focusable: true, panX: true, panY: true }));
    l9.set("cursor", r10.new(a7, {})), "column-chart" === s10 && await this._createColumnChart(l9, e13, t3), "bar-chart" === s10 && await this._createBarChart(l9, e13, t3), "line-chart" === s10 && await this._createLineChart(l9, e13, t3), l9.root.dom.classList.toggle(v5.mediaChartRendered, true);
  }
  _clearMediaRefreshTimer() {
    const { _refreshTimer: e13 } = this;
    e13 && (clearTimeout(e13), this._refreshTimer = null);
  }
  _updateMediaInfoTimestamp(e13) {
    const t3 = Date.now();
    this._refreshIntervalInfo = { timestamp: t3, sourceURL: e13 && this._getImageSource(e13, t3) };
  }
  _setupMediaRefreshTimer() {
    this._clearMediaRefreshTimer();
    const { activeMediaInfo: e13 } = this.viewModel;
    "image" === (e13 == null ? void 0 : e13.type) && (e13 == null ? void 0 : e13.refreshInterval) > 0 && this._setRefreshTimeout(e13);
  }
  _setRefreshTimeout(e13) {
    const { refreshInterval: t3, value: i8 } = e13, r10 = 6e4 * t3;
    this._updateMediaInfoTimestamp(i8.sourceURL);
    const a7 = setInterval(() => {
      this._updateMediaInfoTimestamp(i8.sourceURL);
    }, r10);
    this._refreshTimer = a7;
  }
  _getImageSource(e13, t3) {
    const i8 = e13.includes("?") ? "&" : "?", [r10, a7 = ""] = e13.split("#");
    return `${r10}${i8}timestamp=${t3}${a7 ? "#" : ""}${a7}`;
  }
};
r([m()], T3.prototype, "_refreshIntervalInfo", void 0), r([m()], T3.prototype, "attributes", null), r([m()], T3.prototype, "activeMediaInfoIndex", null), r([m()], T3.prototype, "description", null), r([m()], T3.prototype, "fieldInfoMap", null), r([m()], T3.prototype, "layer", null), r([m()], T3.prototype, "mediaInfos", null), r([m()], T3.prototype, "popupTemplate", null), r([m()], T3.prototype, "relatedInfos", null), r([m()], T3.prototype, "title", null), r([m({ type: M3 })], T3.prototype, "viewModel", void 0), r([m(), e3("esri/widgets/Feature/t9n/Feature")], T3.prototype, "messages", void 0), T3 = r([a("esri.widgets.Feature.FeatureMedia")], T3);
var b5 = T3;

// node_modules/@arcgis/core/core/throttle.js
function e8(e13, t3, l9, n14) {
  let o3 = null, p9 = 1e3;
  "number" == typeof t3 ? (p9 = t3, n14 = l9) : (o3 = t3 ?? null, p9 = l9);
  let r10, u9 = 0;
  const a7 = () => {
    u9 = 0, e13.apply(n14, r10);
  }, c16 = (...e14) => {
    o3 && o3.apply(n14, e14), r10 = e14, p9 ? u9 || (u9 = setTimeout(a7, p9)) : a7();
  };
  return c16.remove = () => {
    u9 && (clearTimeout(u9), u9 = 0);
  }, c16.forceUpdate = () => {
    u9 && (clearTimeout(u9), a7());
  }, c16.hasPendingUpdates = () => !!u9, c16;
}

// node_modules/@arcgis/core/widgets/Feature/support/arcadeFeatureUtils.js
var o2 = "esri.widgets.Feature.support.arcadeFeatureUtils";
var i6 = () => n.getLogger(o2);
function c14(e13) {
  return "string" == typeof e13 ? le(ae(e13)) : Array.isArray(e13) ? p8(e13) : "esri.arcade.Dictionary" === (e13 == null ? void 0 : e13.declaredClass) ? u5(e13) : e13;
}
function p8(e13) {
  return `<ul class="esri-widget__list">${e13.map((e14) => `<li>${"string" == typeof e14 ? le(ae(e14)) : e14}</li>`).join("")}</ul>`;
}
function u5(e13) {
  const r10 = e13.keys().map((r11) => {
    const t3 = e13.field(r11);
    return `<tr><th>${r11}</th><td>${"string" == typeof t3 ? le(ae(t3)) : t3}</td></tr>`;
  }).join("");
  return `<table class="${e4.table}">${r10}</table>`;
}
async function l6() {
  const [e13, r10] = await Promise.all([import("./arcade-BYOWNL3N.js"), import("./arcade-DCQ6M6QC.js")]);
  return { executor: e13, syntaxUtils: r10 };
}
function d8(e13) {
  return "createQuery" in e13 && "queryFeatures" in e13;
}
async function y6({ graphic: e13, view: r10, options: t3 }) {
  const { isAggregate: a7, layer: n14 } = e13;
  if (!a7 || !n14 || "2d" !== (r10 == null ? void 0 : r10.type)) return [];
  const s10 = await r10.whenLayerView(n14);
  if (!d8(s10)) return [];
  const o3 = s10.createQuery(), i8 = e13.getObjectId();
  o3.aggregateIds = null != i8 ? [i8] : [];
  const { features: c16 } = await s10.queryFeatures(o3, t3);
  return c16;
}
function f2({ layer: e13, aggregatedFeatures: r10, interceptor: a7 }) {
  const { fields: n14, objectIdField: s10, geometryType: o3, spatialReference: i8, displayField: c16 } = e13;
  return new Ye({ fields: n14, objectIdField: s10, geometryType: o3, spatialReference: i8, displayField: c16, interceptor: a7, ..."feature" === e13.type ? { templates: e13.templates, typeIdField: e13.typeIdField, types: e13.types } : null, source: r10 });
}
function g6(e13) {
  const r10 = "esri.views.3d.layers.VoxelGraphic" === e13.declaredClass;
  return e13.isAggregate ? "popup-feature-reduction" : r10 ? "popup-voxel" : "popup";
}
function w7(e13) {
  var _a, _b;
  return { scale: e13 == null ? void 0 : e13.scale, timeProperties: { currentStart: (_a = e13 == null ? void 0 : e13.timeExtent) == null ? void 0 : _a.start, currentEnd: (_b = e13 == null ? void 0 : e13.timeExtent) == null ? void 0 : _b.end, startIncluded: true, endIncluded: true } };
}
function m5(e13) {
  return { $voxel: e13 };
}
async function x5(e13, r10, t3, a7, n14) {
  let s10 = null;
  if (n14.has("$aggregatedfeatures")) {
    const n15 = await y6({ graphic: e13, view: r10, options: t3 }), o3 = e13.sourceLayer || e13.layer;
    s10 = f2({ layer: o3, aggregatedFeatures: n15, interceptor: a7 });
  }
  return { vars: { $feature: e13, $aggregatedFeatures: s10, $view: w7(r10) }, [Symbol.dispose]: () => s10 == null ? void 0 : s10[Symbol.dispose]() };
}
function v6(r10, t3, a7, n14) {
  var _a;
  const s10 = (r10.sourceLayer || r10.layer) ?? void 0;
  return { $feature: r10, $layer: null != s10 && x(s10) ? s10 : "scene" === (s10 == null ? void 0 : s10.type) && null != s10.associatedLayer ? s10.associatedLayer : void 0, $map: t3, $datastore: s10 == null ? void 0 : s10.url, $userInput: a7, $graph: "knowledge-graph-sublayer" === (s10 == null ? void 0 : s10.type) ? (_a = s10 == null ? void 0 : s10.parentCompositeLayer) == null ? void 0 : _a.knowledgeGraph : void 0, $view: w7(n14) };
}
async function h6(e13, { graphic: r10, map: t3, location: a7, view: n14, options: s10, interceptor: o3, arcadeExecutor: i8 }) {
  switch (e13) {
    case "popup":
      return { vars: v6(r10, t3, a7, n14), [Symbol.dispose]() {
      } };
    case "popup-feature-reduction": {
      const e14 = new Set(i8.variablesUsed);
      return await x5(r10, n14, s10, o3, e14);
    }
    case "popup-voxel":
      return { vars: m5(r10), [Symbol.dispose]() {
      } };
    default:
      throw new Error(`Unexpected profile name ${e13}`);
  }
}
async function $3({ expressionInfo: e13, arcade: { executor: r10, syntaxUtils: t3 }, graphic: a7 }) {
  const n14 = e13 == null ? void 0 : e13.expression;
  if (!n14) return null;
  const s10 = g6(a7), o3 = r10.createArcadeProfile(s10);
  let c16;
  try {
    c16 = await r10.createArcadeExecutor(n14, o3);
  } catch (u9) {
    return i6().error("arcade-executor-error", { error: u9, expressionInfo: e13 }), null;
  }
  const p9 = /* @__PURE__ */ new Set();
  return c16.variablesUsed.includes("$view") && (t3.scriptUsesViewProperties(c16.syntaxTree, ["scale"]) && p9.add("view-scale"), t3.scriptUsesViewProperties(c16.syntaxTree, ["timeProperties"]) && p9.add("view-time-extent")), { dependencies: p9, async evaluate({ graphic: r11, interceptor: t4, location: a8, map: n15, options: o4, spatialReference: p10, view: l9 }) {
    const d10 = await h6(s10, { graphic: r11, map: n15, location: a8, view: l9, options: o4, interceptor: t4, arcadeExecutor: c16 }), y10 = { abortSignal: (o4 == null ? void 0 : o4.signal) ?? void 0, interceptor: t4 ?? void 0, rawOutput: true, spatialReference: p10 ?? void 0, timeZone: l9 == null ? void 0 : l9.timeZone, console(...e14) {
      i6().info(...e14);
    } };
    try {
      return await c16.executeAsync(d10.vars, y10);
    } catch (u9) {
      return void i6().error("arcade-execution-error", { error: u9, graphic: r11, expressionInfo: e13 });
    } finally {
      d10[Symbol.dispose]();
    }
  } };
}
async function b6(e13, r10) {
  if (!(e13 == null ? void 0 : e13.length)) return { dependencies: /* @__PURE__ */ new Set(), expressions: /* @__PURE__ */ new Map() };
  const t3 = await l6(), a7 = /* @__PURE__ */ new Set(), n14 = /* @__PURE__ */ new Map();
  for (const s10 of e13) {
    const e14 = await $3({ expressionInfo: s10, arcade: t3, graphic: r10 });
    n14.set(`expression/${s10.name}`, e14), e14 == null ? void 0 : e14.dependencies.forEach((e15) => a7.add(e15));
  }
  return { dependencies: a7, expressions: n14 };
}

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression/FeatureExpressionViewModel.js
var k3 = 1;
var g7 = class extends g {
  constructor(t3) {
    super(t3), this._compileTask = null, this._evaluateTask = null, this.expressionInfo = null, this.graphic = null, this.contentElementViewModel = null, this.interceptor = null, this.location = null, this.view = null, this._createVM = () => {
      var _a, _b;
      const t4 = (_a = this.contentElement) == null ? void 0 : _a.type;
      (_b = this.contentElementViewModel) == null ? void 0 : _b.destroy();
      const e13 = "fields" === t4 ? new n9() : "media" === t4 ? new M3() : "text" === t4 ? new p5() : null;
      this._set("contentElementViewModel", e13);
    }, this._compileThrottled = e8(this._startCompile, () => this.notifyChange("state"), k3, this), this._evaluateThrottled = e8(this._startEvaluate, () => this.notifyChange("state"), k3, this), this.addHandles([d3(() => [this.expressionInfo, this.graphic], () => this._compileThrottled(), P), d3(() => [this.contentElement], () => this._createVM(), P), p(() => {
      var _a, _b, _c, _d, _e2, _f;
      if (!((_a = this._compileTask) == null ? void 0 : _a.finished)) return null;
      const t4 = this._compileTask.value, e13 = t4 == null ? void 0 : t4.dependencies;
      return [t4, this.spatialReference, this.map, this.view, (e13 == null ? void 0 : e13.has("view-scale")) ? (_b = this.view) == null ? void 0 : _b.scale : null, (e13 == null ? void 0 : e13.has("view-time-extent")) ? (_d = (_c = this.view) == null ? void 0 : _c.timeExtent) == null ? void 0 : _d.start : null, (e13 == null ? void 0 : e13.has("view-time-extent")) ? (_f = (_e2 = this.view) == null ? void 0 : _e2.timeExtent) == null ? void 0 : _f.end : null];
    }, ([t4]) => this._evaluateThrottled(t4))]);
  }
  initialize() {
    this.addHandles([this._compileThrottled, this._evaluateThrottled]);
  }
  destroy() {
    var _a;
    this._compileTask = e2(this._compileTask), this._evaluateTask = e2(this._evaluateTask), (_a = this.contentElementViewModel) == null ? void 0 : _a.destroy(), this._set("contentElementViewModel", null);
  }
  get contentElement() {
    var _a;
    return (_a = this._evaluateTask) == null ? void 0 : _a.value;
  }
  get spatialReference() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.spatialReference) ?? null;
  }
  set spatialReference(t3) {
    this._override("spatialReference", t3);
  }
  get state() {
    var _a, _b;
    const { contentElement: t3, contentElementViewModel: e13 } = this;
    return this._compileThrottled.hasPendingUpdates() || this._evaluateThrottled.hasPendingUpdates() || !((_a = this._compileTask) == null ? void 0 : _a.finished) || !((_b = this._evaluateTask) == null ? void 0 : _b.finished) ? "loading" : t3 || e13 ? "ready" : "disabled";
  }
  get map() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.map) ?? null;
  }
  set map(t3) {
    this._override("map", t3);
  }
  _startCompile() {
    this._evaluateTask = e2(this._evaluateTask), this._compileTask = e2(this._compileTask), this._compileTask = d2(async (t3) => {
      const { expressionInfo: e13, graphic: o3 } = this;
      if (!e13 || !o3) return null;
      const s10 = await l6();
      s2(t3);
      const i8 = await $3({ expressionInfo: e13, arcade: s10, graphic: o3 });
      return s2(t3), i8;
    });
  }
  _startEvaluate(t3) {
    this._evaluateTask = e2(this._evaluateTask), this._evaluateTask = d2(async (e13) => {
      const { graphic: o3 } = this;
      if (!t3 || !o3) return null;
      const { interceptor: s10, spatialReference: i8, map: r10, location: a7, view: l9 } = this, p9 = await t3.evaluate({ graphic: o3, interceptor: s10, location: a7, map: r10, options: { signal: e13 }, spatialReference: i8, view: l9 });
      s2(e13);
      const c16 = p9;
      if (!c16 || "esri.arcade.Dictionary" !== c16.declaredClass) return null;
      const m7 = await c16.castAsJsonAsync(e13);
      s2(e13);
      const h9 = m7 == null ? void 0 : m7.type, v8 = "media" === h9 ? I.fromJSON(m7) : "text" === h9 ? c4.fromJSON(m7) : "fields" === h9 ? d4.fromJSON(m7) : null;
      return "media" === v8.type && !v8.mediaInfos || "fields" === v8.type && !v8.fieldInfos || "text" === v8.type && !v8.text ? null : v8;
    });
  }
};
r([m()], g7.prototype, "_compileTask", void 0), r([m()], g7.prototype, "_evaluateTask", void 0), r([m({ type: i2 })], g7.prototype, "expressionInfo", void 0), r([m({ type: b2 })], g7.prototype, "graphic", void 0), r([m({ readOnly: true })], g7.prototype, "contentElement", null), r([m({ readOnly: true })], g7.prototype, "contentElementViewModel", void 0), r([m()], g7.prototype, "interceptor", void 0), r([m({ type: j2 })], g7.prototype, "location", void 0), r([m()], g7.prototype, "spatialReference", null), r([m({ readOnly: true })], g7.prototype, "state", null), r([m()], g7.prototype, "map", null), r([m()], g7.prototype, "view", void 0), g7 = r([a("esri.widgets.Feature.FeatureExpression.FeatureExpressionViewModel")], g7);
var E3 = g7;

// node_modules/@arcgis/core/widgets/Feature/FeatureExpression.js
var m6 = "esri-feature";
var u6 = { base: `${m6}-expression`, loadingSpinnerContainer: `${m6}__loading-container` };
var g8 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._contentWidget = null, this.viewModel = new E3();
  }
  initialize() {
    this.addHandles(d3(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.contentElementViewModel;
    }, () => this._setupExpressionWidget(), P));
  }
  loadDependencies() {
    return c3({ loader: () => import("./calcite-loader-QX4G267A.js") });
  }
  destroy() {
    this._destroyContentWidget();
  }
  render() {
    var _a;
    const { state: e13 } = this.viewModel;
    return n4("div", { class: u6.base }, "loading" === e13 ? this._renderLoading() : "disabled" === e13 ? null : (_a = this._contentWidget) == null ? void 0 : _a.render());
  }
  _renderLoading() {
    return n4("div", { class: u6.loadingSpinnerContainer, key: "loading-container" }, n4("calcite-loader", { inline: true, label: "" }));
  }
  _destroyContentWidget() {
    const { _contentWidget: e13 } = this;
    e13 && (e13.viewModel = null, e13.destroy()), this._contentWidget = null;
  }
  _setupExpressionWidget() {
    const { contentElementViewModel: e13, contentElement: t3 } = this.viewModel, o3 = t3 == null ? void 0 : t3.type;
    this._destroyContentWidget();
    const s10 = e13 ? "fields" === o3 ? new h4({ viewModel: e13 }) : "media" === o3 ? new b5({ viewModel: e13 }) : "text" === o3 ? new p6({ viewModel: e13 }) : null : null;
    this._contentWidget = s10, this.scheduleRender();
  }
};
r([m({ type: E3 })], g8.prototype, "viewModel", void 0), g8 = r([a("esri.widgets.Feature.FeatureExpression")], g8);
var h7 = g8;

// node_modules/@arcgis/core/widgets/support/forms/formUtils.js
var i7;
var u8;
!function(t3) {
  t3.Text = "text", t3.Number = "number", t3.Date = "date", t3.Unsupported = "unsupported";
}(i7 || (i7 = {})), function(t3) {
  t3.CANNOT_BE_EMPTY = "input-validation-error::cannot-be-empty", t3.TOO_SHORT = "length-validation-error::too-short", t3.TOO_LONG = "length-validation-error::too-long";
}(u8 || (u8 = {}));

// node_modules/@arcgis/core/widgets/FeatureForm/featureFormUtils.js
var K2 = (e13) => {
  var _a;
  const t3 = [];
  if (e13.formTemplate) {
    const { description: r10, title: n14 } = e13.formTemplate;
    (_a = e13.fields) == null ? void 0 : _a.forEach((e14) => {
      const i8 = n14 && i(n14, e14.name), s10 = r10 && i(r10, e14.name);
      (i8 || s10) && t3.push(e14.name);
    });
  }
  return t3;
};

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship/FeatureRelationshipViewModel.js
var F4 = 100;
var _2 = class extends a2.ClonableMixin(n2.IdentifiableMixin(g)) {
  constructor(e13) {
    super(e13), this._loaded = false, this._queryAbortController = null, this._queryPageAbortController = null, this._queryFeatureCountAbortController = null, this.featuresPerPage = 10, this.activeCategory = null, this.categories = null, this.description = null, this.graphic = null, this.layer = null, this.map = null, this.orderByFields = null, this.featureCount = 0, this.relationshipId = null, this.showAllEnabled = false, this.title = null, this._cancelQuery = () => {
      const { _queryAbortController: e14 } = this;
      e14 && e14.abort(), this._queryAbortController = null;
    }, this._cancelQueryFeatureCount = () => {
      const { _queryFeatureCountAbortController: e14 } = this;
      e14 && e14.abort(), this._queryFeatureCountAbortController = null;
    }, this._cancelQueryPage = () => {
      const { _queryPageAbortController: e14 } = this;
      e14 && e14.abort(), this._queryPageAbortController = null;
    }, this._queryController = async () => {
      this._cancelQuery();
      const e14 = new AbortController();
      this._queryAbortController = e14, await d(this._query()), this._queryAbortController === e14 && (this._queryAbortController = null);
    }, this._queryFeatureCountController = async () => {
      this._loaded = false, this._cancelQueryFeatureCount();
      const e14 = new AbortController();
      this._queryFeatureCountAbortController = e14, await d(this._queryFeatureCount()), this._queryFeatureCountAbortController === e14 && (this._queryFeatureCountAbortController = null), this._loaded = true;
    }, this._queryPageController = async () => {
      const e14 = new AbortController();
      this._queryPageAbortController = e14, await d(this._queryPage()), this._queryPageAbortController === e14 && (this._queryPageAbortController = null);
    }, this._queryDebounced = k(this._queryController, F4), this._queryFeatureCountDebounced = k(this._queryFeatureCountController, F4), this._queryPageDebounced = k(this._queryPageController, F4), this._query = async () => {
      var _a;
      const { _queryAbortController: e14, relatedFeatures: t3 } = this;
      this.featureCount && ("subtype-group" !== ((_a = this.relatedLayer) == null ? void 0 : _a.type) || this.activeCategory) && (this._destroyRelatedFeatureViewModels(), this.featurePage = 1, t3.destroyAll(), this.destroyed || t3.addMany(this._sliceFeatures(await this._queryRelatedFeatures({ signal: e14 == null ? void 0 : e14.signal }))));
    }, this.addHandles([d3(() => {
      var _a;
      return [this.displayCount, this.graphic, this.layer, (_a = this.layer) == null ? void 0 : _a.loaded, this.map, this.orderByFields, this.relationshipId, this.featuresPerPage, this.showAllEnabled, this.canQuery, this.featureCount, this.activeCategory];
    }, () => this._queryDebounced(), P), d3(() => [this.featurePage, this.showAllEnabled], () => this._queryPageDebounced()), d3(() => [this.layer, this.relationshipId, this.objectId, this.canQuery, this.activeCategory], () => this._queryFeatureCountDebounced())]);
  }
  destroy() {
    this._destroyRelatedFeatureViewModels(), this.relatedFeatures.destroyAll(), this._cancelQuery(), this._cancelQueryFeatureCount(), this._cancelQueryPage();
  }
  set featurePage(e13) {
    const { featuresPerPage: t3, featureCount: r10 } = this, o3 = 1, l9 = Math.ceil(r10 / t3) || 1;
    this._set("featurePage", Math.min(Math.max(e13, o3), l9));
  }
  get featurePage() {
    return this._get("featurePage");
  }
  get orderByFieldsFixedCasing() {
    const { orderByFields: e13, relatedLayer: t3 } = this;
    return e13 && (t3 == null ? void 0 : t3.loaded) ? e13.map((e14) => {
      const r10 = e14.clone();
      return r10.field = M(e14.field, t3), r10;
    }) : e13 ?? [];
  }
  get supportsCacheHint() {
    var _a, _b, _c;
    return !!((_c = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.queryRelated) == null ? void 0 : _c.supportsCacheHint);
  }
  get canLoad() {
    return !!this.map && null != this.relationshipId && "number" == typeof this.objectId;
  }
  get canQuery() {
    var _a, _b;
    const e13 = (_b = (_a = this.layer) == null ? void 0 : _a.capabilities) == null ? void 0 : _b.queryRelated;
    return !!(this.relatedLayer && this.relationship && null != this.relationshipId && null != this.objectId && (e13 == null ? void 0 : e13.supportsCount) && (e13 == null ? void 0 : e13.supportsPagination));
  }
  set displayCount(e13) {
    const t3 = 0, r10 = 10, o3 = 3;
    this._set("displayCount", Math.min(Math.max(e13 ?? o3, t3), r10));
  }
  get displayCount() {
    return this._get("displayCount");
  }
  get itemDescriptionFieldName() {
    var _a;
    return ((_a = this.orderByFieldsFixedCasing[0]) == null ? void 0 : _a.field) || null;
  }
  get objectId() {
    var _a, _b;
    return (this.objectIdField && ((_b = (_a = this.graphic) == null ? void 0 : _a.attributes) == null ? void 0 : _b[this.objectIdField])) ?? null;
  }
  get objectIdField() {
    var _a;
    return ((_a = this.layer) == null ? void 0 : _a.objectIdField) || null;
  }
  get relatedFeatures() {
    return this._get("relatedFeatures") || new V();
  }
  get relatedLayer() {
    const { layer: e13, map: t3, relationship: r10 } = this;
    if (!(e13 == null ? void 0 : e13.loaded) || !t3 || !r10) return null;
    const o3 = "subtype-sublayer" === e13.type && e13.parent && J(e13.parent) ? e13.parent : e13;
    return Te(t3, o3, r10) ?? null;
  }
  get relatedLayerKeyField() {
    var _a, _b;
    const { relatedLayer: e13, relationshipId: t3 } = this;
    return (e13 == null ? void 0 : e13.loaded) && null != t3 ? (_b = (_a = e13.relationships) == null ? void 0 : _a.find((e14) => e14.id === t3)) == null ? void 0 : _b.keyField : null;
  }
  get relatedLayerKeyFields() {
    var _a;
    const { relatedLayer: e13 } = this;
    return (e13 == null ? void 0 : e13.loaded) ? ((_a = e13.relationships) == null ? void 0 : _a.map((e14) => e14.keyField).filter(G)) ?? [] : [];
  }
  get relationship() {
    var _a;
    const { relationshipId: e13, layer: t3 } = this;
    return null != e13 && (t3 == null ? void 0 : t3.loaded) ? ((_a = t3.relationships) == null ? void 0 : _a.find(({ id: t4 }) => t4 === e13)) ?? null : null;
  }
  get relationshipKey() {
    var _a, _b;
    const { relationshipKeyField: e13 } = this;
    return (e13 && ((_b = (_a = this.graphic) == null ? void 0 : _a.attributes) == null ? void 0 : _b[e13])) ?? null;
  }
  get relationshipKeyField() {
    var _a;
    return ((_a = this.relationship) == null ? void 0 : _a.keyField) || null;
  }
  get relatedFeatureViewModels() {
    return this._get("relatedFeatureViewModels") || new V();
  }
  get state() {
    const { _queryAbortController: e13, _queryFeatureCountAbortController: t3, _queryPageAbortController: r10, canQuery: o3, _loaded: l9, canLoad: i8 } = this;
    return t3 || i8 && !l9 ? "loading" : e13 || r10 ? "querying" : o3 ? "ready" : "disabled";
  }
  getRelatedFeatureByObjectId(e13) {
    return this.relatedFeatures.find((t3) => t3.getObjectId() === e13);
  }
  refresh() {
    this._queryFeatureCountDebounced();
  }
  _destroyRelatedFeatureViewModels() {
    var _a;
    (_a = this.relatedFeatureViewModels) == null ? void 0 : _a.destroyAll();
  }
  async _queryFeatureCount() {
    const { layer: e13, relatedLayer: t3 } = this;
    await (e13 == null ? void 0 : e13.load()), await (t3 == null ? void 0 : t3.load());
    const { _queryFeatureCountAbortController: r10, activeCategory: l9, canQuery: i8, displayCount: a7, objectId: s10, relatedLayerKeyField: n14, relationshipId: u9, relationshipKey: d10, showAllEnabled: y10, supportsCacheHint: h9 } = this;
    if (!i8 || !e13 || !t3 || null == s10) return this._set("featureCount", 0), void this._set("categories", null);
    if ("subtype-group" === (t3 == null ? void 0 : t3.type) && !l9) {
      if (this._set("featureCount", 0), this._destroyRelatedFeatureViewModels(), this.featurePage = 1, this.relatedFeatures.destroyAll(), n14 && null != d10) {
        const { default: e14 } = await import("./uniqueValues-G6E2MQXC.js"), { uniqueValueInfos: l10 } = await e14({ layer: t3, sqlWhere: `${n14} = '${d10}'`, field: t3.subtypeField, signal: r10 == null ? void 0 : r10.signal }), i9 = l10.map(({ count: e15, value: r11 }) => {
          var _a, _b;
          const o3 = (_b = (_a = t3.subtypes) == null ? void 0 : _a.find((e16) => e16.code === r11)) == null ? void 0 : _b.name;
          return null != r11 && o3 ? { count: e15, value: r11, name: o3 } : void 0;
        }).filter(G);
        this._set("categories", y10 ? i9 : i9.slice(0, a7));
      }
      return;
    }
    const { historicMoment: c16, gdbVersion: g11 } = e13, C4 = new d5({ cacheHint: h9, gdbVersion: g11, historicMoment: c16, relationshipId: u9, returnGeometry: false, objectIds: [s10], where: this._getRelationshipWhereClause(t3) }), b9 = await e13.queryRelatedFeaturesCount(C4, { signal: r10 == null ? void 0 : r10.signal });
    this._set("categories", null), this._set("featureCount", b9[s10] || 0);
  }
  _getRelationshipWhereClause(e13) {
    const { activeCategory: t3 } = this, r10 = e13.createQuery(), o3 = "subtypeField" in e13 ? e13.subtypeField : void 0, l9 = t3 && o3 ? `${o3} = ${t3.value}` : void 0, i8 = r10.where;
    return i8 && l9 ? `(${i8}) AND (${l9})` : i8 ?? l9;
  }
  _sliceFeatures(e13) {
    const { showAllEnabled: t3, displayCount: r10 } = this;
    return t3 ? e13 : r10 ? e13.slice(0, r10) : [];
  }
  async _queryPage() {
    var _a;
    const { relatedFeatures: e13, featurePage: t3, showAllEnabled: r10, _queryPageAbortController: o3, featureCount: l9 } = this;
    !r10 || t3 < 2 || !l9 || "subtype-group" === ((_a = this.relatedLayer) == null ? void 0 : _a.type) && !this.activeCategory || e13.addMany(await this._queryRelatedFeatures({ signal: o3 == null ? void 0 : o3.signal }));
  }
  async _queryRelatedFeatures(e13) {
    var _a;
    const { displayCount: t3, featureCount: r10, featurePage: l9, featuresPerPage: i8, layer: a7, orderByFieldsFixedCasing: s10, relatedLayer: n14, relatedLayerKeyFields: u9, relationshipId: d10, showAllEnabled: y10, supportsCacheHint: h9 } = this, { canQuery: c16, objectId: g11 } = this;
    if (!c16 || !a7 || !n14 || null == g11) return [];
    const C4 = y10 ? ((l9 - 1) * i8 + r10) % r10 : 0, F7 = y10 ? i8 : t3, _3 = n14.objectIdField, f6 = "subtypeField" in n14 ? n14.subtypeField : void 0, m7 = [...s10.map((e14) => e14.field), ...K2(n14), ...u9, _3, f6].filter(G), q3 = s10.map((e14) => `${e14.field} ${e14.order}`), { historicMoment: A5, gdbVersion: w9 } = a7, P4 = new d5({ orderByFields: q3, start: C4, num: F7, outFields: m7, cacheHint: h9, historicMoment: A5, gdbVersion: w9, relationshipId: d10, returnGeometry: false, objectIds: [g11], where: this._getRelationshipWhereClause(n14) }), v8 = await a7.queryRelatedFeatures(P4, { signal: e13 == null ? void 0 : e13.signal }), j5 = ((_a = v8[g11]) == null ? void 0 : _a.features) || [];
    return "subtype-group" === n14.type && f6 ? j5.forEach((e14) => {
      var _a2;
      const t4 = e14.attributes[f6], r11 = (_a2 = n14.findSublayerForSubtypeCode) == null ? void 0 : _a2.call(n14, t4);
      e14.sourceLayer = r11, e14.layer = r11;
    }) : j5.forEach((e14) => {
      e14.sourceLayer = n14, e14.layer = n14;
    }), j5;
  }
};
r([m()], _2.prototype, "_loaded", void 0), r([m()], _2.prototype, "_queryAbortController", void 0), r([m()], _2.prototype, "_queryPageAbortController", void 0), r([m()], _2.prototype, "_queryFeatureCountAbortController", void 0), r([m({ value: 1 })], _2.prototype, "featurePage", null), r([m()], _2.prototype, "featuresPerPage", void 0), r([m({ readOnly: true })], _2.prototype, "orderByFieldsFixedCasing", null), r([m({ readOnly: true })], _2.prototype, "supportsCacheHint", null), r([m({ readOnly: true })], _2.prototype, "canLoad", null), r([m({ readOnly: true })], _2.prototype, "canQuery", null), r([m()], _2.prototype, "activeCategory", void 0), r([m({ readOnly: true })], _2.prototype, "categories", void 0), r([m()], _2.prototype, "description", void 0), r([m({ value: 3 })], _2.prototype, "displayCount", null), r([m({ type: b2 })], _2.prototype, "graphic", void 0), r([m({ readOnly: true })], _2.prototype, "itemDescriptionFieldName", null), r([m()], _2.prototype, "layer", void 0), r([m()], _2.prototype, "map", void 0), r([m({ readOnly: true })], _2.prototype, "objectId", null), r([m({ readOnly: true })], _2.prototype, "objectIdField", null), r([m()], _2.prototype, "orderByFields", void 0), r([m({ readOnly: true })], _2.prototype, "relatedFeatures", null), r([m({ readOnly: true })], _2.prototype, "relatedLayer", null), r([m({ readOnly: true })], _2.prototype, "relatedLayerKeyField", null), r([m({ readOnly: true })], _2.prototype, "relatedLayerKeyFields", null), r([m({ readOnly: true })], _2.prototype, "relationship", null), r([m({ readOnly: true })], _2.prototype, "relationshipKey", null), r([m({ readOnly: true })], _2.prototype, "relationshipKeyField", null), r([m({ readOnly: true })], _2.prototype, "featureCount", void 0), r([m({ readOnly: true })], _2.prototype, "relatedFeatureViewModels", null), r([m()], _2.prototype, "relationshipId", void 0), r([m()], _2.prototype, "showAllEnabled", void 0), r([m()], _2.prototype, "state", null), r([m()], _2.prototype, "title", void 0), _2 = r([a("esri.widgets.Feature.FeatureRelationship.FeatureRelationshipViewModel")], _2);
var f4 = _2;

// node_modules/@arcgis/core/widgets/Feature/FeatureRelationship.js
var b7;
var y8 = "esri-feature";
var I7 = `${y8}-relationship`;
var F5 = { base: I7, listContainer: `${I7}__list`, listItem: `${I7}__list-item`, listItemHidden: `${I7}__list-item--hidden`, listContainerQuerying: `${I7}__list--querying`, featureObserver: `${y8}__feature-observer`, stickySpinnerContainer: `${y8}__sticky-loading-container`, loadingSpinnerContainer: `${y8}__loading-container` };
var M5 = { title: true, description: true };
var C3 = b7 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._featureElementInfo = null, this._relatedFeatureIntersectionObserverNode = null, this._relatedFeatureIntersectionObserver = new IntersectionObserver(([e14]) => {
      (e14 == null ? void 0 : e14.isIntersecting) && this._increaseFeaturePage();
    }, { root: window.document }), this.flowItems = null, this.flowType = "feature-relationship", this.headingLevel = 2, this.viewModel = new f4(), this.messages = null, this.messagesCommon = null, this.visibleElements = { ...M5 }, this._increaseFeaturePage = () => {
      const { state: e14, showAllEnabled: t4, relatedFeatures: s10, featuresPerPage: i8, featurePage: r10 } = this.viewModel;
      "ready" === e14 && t4 && s10.length >= i8 * r10 && this.viewModel.featurePage++;
    };
  }
  initialize() {
    this._featureElementInfo = new l3(), this.addHandles([d3(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), P), d3(() => [this.viewModel.state, this.viewModel.showAllEnabled, this._relatedFeatureIntersectionObserverNode], () => this._handleRelatedFeatureObserverChange()), v(() => this.viewModel.relatedFeatureViewModels, "change", () => this._setupRelatedFeatureViewModels())]);
  }
  loadDependencies() {
    return c3({ chip: () => import("./calcite-chip-MZIE7UWE.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), list: () => import("./calcite-list-EYDTM3R4.js"), "list-item": () => import("./calcite-list-item-I75MSBTM.js"), loader: () => import("./calcite-loader-QX4G267A.js"), notice: () => import("./calcite-notice-MPUJ2BZX.js") });
  }
  destroy() {
    this._unobserveRelatedFeatureObserver(), this._featureElementInfo = u(this._featureElementInfo);
  }
  get displayShowAllButton() {
    const { showAllEnabled: e13, featureCount: t3, displayCount: s10, state: i8, categories: r10 } = this.viewModel;
    return !e13 && "ready" === i8 && (((r10 == null ? void 0 : r10.length) ?? 0) > s10 || 0 === s10 || !!t3 && (t3 > s10 || 0 === s10));
  }
  get displayListItems() {
    const { relatedFeatureViewModels: e13, categories: t3 } = this.viewModel;
    return this.displayShowAllButton || !!e13.length || !!(t3 == null ? void 0 : t3.length);
  }
  get allItemsDescription() {
    const { messages: e13 } = this, { featureCount: t3, categories: s10 } = this.viewModel;
    return s3(e13 == null ? void 0 : e13.numberRecords, { number: l((s10 == null ? void 0 : s10.length) ?? t3) });
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e13) {
    this.viewModel.description = e13;
  }
  get title() {
    const { activeCategory: e13, title: t3 } = this.viewModel;
    return (e13 == null ? void 0 : e13.name) ?? t3;
  }
  set title(e13) {
    this.viewModel.title = e13;
  }
  castVisibleElements(e13) {
    return { ...M5, ...e13 };
  }
  render() {
    var _a;
    const { state: e13 } = this.viewModel;
    return n4("div", { class: this.classes(F5.base, e4.widget) }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), "loading" === e13 ? this._renderLoading() : "disabled" === e13 ? this._renderRelationshipNotFound() : this._renderRelatedFeatures());
  }
  async _selectCategory(e13) {
    const { flowItems: t3, featureVisibleElements: s10, viewModel: i8 } = this;
    t3 && (i8.activeCategory = e13, i8.showAllEnabled = true, t3.push(new b7({ flowItems: t3, featureVisibleElements: s10, visibleElements: { title: false, description: false }, viewModel: i8 })));
  }
  async _selectRecord(e13) {
    const { flowItems: t3, featureVisibleElements: s10 } = this;
    if (!t3) return;
    e13.abilities = { relationshipContent: true };
    const { default: i8 } = await import("./Feature-OBRHUUJC.js");
    t3.push(new i8({ flowItems: t3, flowType: this.flowType, viewModel: e13, visibleElements: s10 }));
  }
  _showAllRecords() {
    const { flowItems: e13 } = this;
    if (!e13) return;
    const { viewModel: t3, featureVisibleElements: s10 } = this;
    t3.showAllEnabled = true;
    const i8 = new b7({ flowItems: e13, featureVisibleElements: s10, visibleElements: { title: false, description: false }, viewModel: t3 });
    e13.push(i8);
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n4("div", { class: F5.stickySpinnerContainer, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n4("calcite-loader", { inline: true, label: "" });
  }
  _renderLoading() {
    return n4("div", { class: F5.loadingSpinnerContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderShowAllIconNode() {
    return n4("calcite-icon", { icon: "list", scale: "s", slot: "content-end" });
  }
  _renderChevronIconNode() {
    const e13 = g2(this.container) ? "chevron-left" : "chevron-right";
    return n4("calcite-icon", { icon: e13, scale: "s", slot: "content-end" });
  }
  _renderCategory(e13) {
    const { count: t3, name: s10, value: i8 } = e13, r10 = l(t3);
    return n4("calcite-list-item", { class: F5.listItem, disabled: !t3, key: i8, label: s10, onCalciteListItemSelect: () => this._selectCategory(e13) }, n4("calcite-chip", { label: r10, scale: "s", slot: "content-end" }, r10), this._renderChevronIconNode());
  }
  _renderRelatedFeature(e13) {
    var _a;
    const { itemDescriptionFieldName: t3 } = this.viewModel, s10 = e13.title;
    e13.description = t3 && ((_a = e13.formattedAttributes) == null ? void 0 : _a.global[t3]);
    const i8 = "loading" === e13.state;
    return n4("calcite-list-item", { class: this.classes(F5.listItem, { [F5.listItemHidden]: i8 }), description: c2(e13.description ?? ""), key: e13.uid, label: c2(s10), onCalciteListItemSelect: () => this._selectRecord(e13) }, this._renderChevronIconNode());
  }
  _renderShowAllListItem() {
    var _a;
    return this.displayShowAllButton ? n4("calcite-list-item", { description: this.allItemsDescription, key: "show-all-item", label: (_a = this.messages) == null ? void 0 : _a.showAll, onCalciteListItemSelect: () => this._showAllRecords() }, this._renderShowAllIconNode()) : null;
  }
  _renderNoRelatedFeaturesMessage() {
    var _a;
    return n4("calcite-notice", { icon: "information", key: "no-related-features-message", kind: "brand", open: true, scale: "s", width: "full" }, n4("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.noRelatedFeatures));
  }
  _renderFeatureObserver() {
    return n4("div", { afterCreate: this._relatedFeatureIntersectionObserverCreated, bind: this, class: F5.featureObserver, key: "feature-observer" });
  }
  _renderList() {
    var _a;
    const { relatedFeatureViewModels: e13, categories: t3 } = this.viewModel;
    return n4("calcite-list", { displayMode: "flat", label: (_a = this.messages) == null ? void 0 : _a.relatedFeaturesList }, (t3 == null ? void 0 : t3.map((e14) => this._renderCategory(e14))) ?? e13.toArray().map((e14) => this._renderRelatedFeature(e14)), this._renderShowAllListItem());
  }
  _renderRelatedFeatures() {
    const { displayListItems: e13 } = this, { state: t3 } = this.viewModel;
    return n4("div", { class: this.classes(F5.listContainer, { [F5.listContainerQuerying]: "querying" === t3 }), key: "list-container" }, e13 ? this._renderList() : "ready" === t3 ? this._renderNoRelatedFeaturesMessage() : null, this._renderStickyLoading(), this._renderFeatureObserver());
  }
  _renderRelationshipNotFound() {
    var _a;
    return n4("calcite-notice", { icon: "exclamation-mark-triangle", key: "relationship-not-found", kind: "danger", open: true, scale: "s", width: "full" }, n4("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.relationshipNotFound));
  }
  _setupRelatedFeatureViewModels() {
    const { relatedFeatureViewModels: e13 } = this.viewModel, t3 = "related-feature-viewmodels";
    this.removeHandles(t3), e13 == null ? void 0 : e13.forEach((e14) => {
      this.addHandles(d3(() => [e14.title, e14.state], () => this.scheduleRender(), P), t3);
    }), this.scheduleRender();
  }
  _setupFeatureElementInfo() {
    var _a;
    const { headingLevel: e13, visibleElements: t3 } = this, s10 = t3.description && this.description, i8 = t3.title && this.title;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: s10, title: i8, headingLevel: e13 });
  }
  async _handleRelatedFeatureObserverChange() {
    this._unobserveRelatedFeatureObserver();
    const { state: e13, showAllEnabled: t3 } = this.viewModel;
    await A(0), this._relatedFeatureIntersectionObserverNode && "ready" === e13 && t3 && this._relatedFeatureIntersectionObserver.observe(this._relatedFeatureIntersectionObserverNode);
  }
  _relatedFeatureIntersectionObserverCreated(e13) {
    this._relatedFeatureIntersectionObserverNode = e13;
  }
  _unobserveRelatedFeatureObserver() {
    this._relatedFeatureIntersectionObserverNode && this._relatedFeatureIntersectionObserver.unobserve(this._relatedFeatureIntersectionObserverNode);
  }
};
r([m()], C3.prototype, "_relatedFeatureIntersectionObserverNode", void 0), r([m({ readOnly: true })], C3.prototype, "displayShowAllButton", null), r([m({ readOnly: true })], C3.prototype, "displayListItems", null), r([m({ readOnly: true })], C3.prototype, "allItemsDescription", null), r([m()], C3.prototype, "description", null), r([m()], C3.prototype, "featureVisibleElements", void 0), r([m()], C3.prototype, "flowItems", void 0), r([m()], C3.prototype, "flowType", void 0), r([m()], C3.prototype, "headingLevel", void 0), r([m()], C3.prototype, "title", null), r([m({ type: f4 })], C3.prototype, "viewModel", void 0), r([m(), e3("esri/widgets/Feature/t9n/Feature")], C3.prototype, "messages", void 0), r([m(), e3("esri/t9n/common")], C3.prototype, "messagesCommon", void 0), r([m()], C3.prototype, "visibleElements", void 0), r([s4("visibleElements")], C3.prototype, "castVisibleElements", null), C3 = b7 = r([a("esri.widgets.Feature.FeatureRelationship")], C3);
var E4 = C3;

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociations.js
var y9 = "esri-feature-utility-network-associations";
var g10 = `${y9}__loading-container`;
var v7 = { base: y9, listContainer: `${y9}__list`, loadingContainer: g10, loadingContainerSticky: `${g10}--sticky` };
var f5 = class extends O {
  constructor(e13, t3) {
    super(e13, t3), this._featureElementInfo = null, this.onSelectAssociationType = () => {
    }, this.flowType = "feature-utility-network-associations", this.flowItems = null, this.parentFeatureViewModel = null, this.headingLevel = 5, this.viewModel = new _(), this.messages = null, this.messagesCommon = null, this.visibleElements = new i4();
  }
  initialize() {
    this._featureElementInfo = new l3(), this.addHandles([d3(() => [this.viewModel.description, this.viewModel.title, this.headingLevel], () => this._setupFeatureElementInfo(), P)]);
  }
  loadDependencies() {
    return c3({ icon: () => import("./calcite-icon-6QWLC3AJ.js"), list: () => import("./calcite-list-EYDTM3R4.js"), "list-item": () => import("./calcite-list-item-I75MSBTM.js"), loader: () => import("./calcite-loader-QX4G267A.js"), notice: () => import("./calcite-notice-MPUJ2BZX.js") });
  }
  destroy() {
    this._featureElementInfo = u(this._featureElementInfo);
  }
  get description() {
    return this.viewModel.description;
  }
  set description(e13) {
    this.viewModel.description = e13;
  }
  get title() {
    return this.viewModel.title;
  }
  set title(e13) {
    this.viewModel.title = e13;
  }
  render() {
    var _a;
    const { state: e13 } = this.viewModel;
    return n4("div", { class: this.classes(v7.base, e4.widget) }, (_a = this._featureElementInfo) == null ? void 0 : _a.render(), "loading" === e13 ? this._renderLoading() : "disabled" === e13 ? this._renderAssociationNotFound() : this._renderContent());
  }
  _renderStickyLoading() {
    return "querying" === this.viewModel.state ? n4("div", { class: v7.loadingContainerSticky, key: "sticky-loader" }, this._renderLoadingIcon()) : null;
  }
  _renderLoadingIcon() {
    return n4("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  _renderLoading() {
    return n4("div", { class: v7.loadingContainer, key: "loading-container" }, this._renderLoadingIcon());
  }
  _renderAssociationNotFound() {
    var _a;
    return n4("calcite-notice", { icon: "exclamation-mark-triangle", key: "association-not-found", kind: "danger", open: true, scale: "s", width: "full" }, n4("div", { slot: "message" }, (_a = this.messages) == null ? void 0 : _a.noAssociations));
  }
  _renderAssociationType(e13) {
    const { viewModel: t3 } = this, i8 = this._getAssociationTypeTitle(e13);
    return n4("calcite-list-item", { description: c2(e13.description), key: `association-type-${e13.type}`, label: c2(i8), value: e13.type, onCalciteListItemSelect: () => this.onSelectAssociationType({ viewModel: t3, listType: e13, title: i8 }) }, n4("calcite-icon", { flipRtl: true, icon: "chevron-right", scale: "s", slot: "content-end" }));
  }
  _renderAssociations(e13) {
    const { viewModel: t3 } = this;
    return "featureForm" === t3.source || t3.getFeatureCountForAssociationType(e13.type) > 0 ? this._renderAssociationType(e13) : void 0;
  }
  _renderContent() {
    const { messages: e13, viewModel: t3 } = this, { state: i8, associationTypes: o3 } = t3;
    return n4("div", { class: v7.listContainer, key: "list-container" }, "ready" === i8 ? n4("div", null, n4("calcite-list", { displayMode: "flat", label: e13 == null ? void 0 : e13.associationsList }, o3.map((e14) => this._renderAssociations(e14)))) : null, this._renderStickyLoading());
  }
  _getAssociationTypeTitle(e13) {
    const { messages: t3 } = this;
    if (e13.title) return e13.title;
    switch (e13.type) {
      case "attachment":
        return t3.associationsAttachments;
      case "connectivity":
        return t3.associationsConnectivity;
      case "structure":
        return t3.associationsStructure;
      case "content":
        return t3.associationsContents;
      case "container":
        return t3.associationsContainer;
    }
  }
  _setupFeatureElementInfo() {
    var _a;
    const { headingLevel: e13, visibleElements: t3 } = this, i8 = t3.description && this.description, o3 = t3.title && this.title;
    (_a = this._featureElementInfo) == null ? void 0 : _a.set({ description: i8, title: o3, headingLevel: e13 });
  }
};
r([m({ constructOnly: true })], f5.prototype, "onSelectAssociationType", void 0), r([m()], f5.prototype, "flowType", void 0), r([m()], f5.prototype, "flowItems", void 0), r([m()], f5.prototype, "parentFeatureViewModel", void 0), r([m()], f5.prototype, "featureVisibleElements", void 0), r([m()], f5.prototype, "description", null), r([m()], f5.prototype, "headingLevel", void 0), r([m()], f5.prototype, "title", null), r([m({ type: _ })], f5.prototype, "viewModel", void 0), r([m(), e3("esri/widgets/Feature/t9n/Feature")], f5.prototype, "messages", void 0), r([m(), e3("esri/t9n/common")], f5.prototype, "messagesCommon", void 0), r([m({ type: i4, nonNullable: true })], f5.prototype, "visibleElements", void 0), f5 = r([a("esri.widgets.Feature.FeatureUtilityNetworkAssociations")], f5);
var w8 = f5;

// node_modules/@arcgis/core/arcade/featureset/support/FeatureSetQueryInterceptor.js
var e11 = class {
  constructor(e13, a7) {
    this.preLayerQueryCallback = e13, this.preRequestCallback = a7, this.preLayerQueryCallback || (this.preLayerQueryCallback = (e14) => {
    }), this.preRequestCallback || (this.preLayerQueryCallback = (e14) => {
    });
  }
};

// node_modules/@arcgis/core/widgets/Feature/FeatureViewModel.js
var se2;
var oe2 = 1;
var re2 = "content-view-models";
var ae2 = "relationship-view-models";
var ne = "association-view-models";
var le2 = { attachmentsContent: true, chartAnimation: true, customContent: true, expressionContent: true, fieldsContent: true, mediaContent: true, textContent: true, relationshipContent: true, utilityNetworkAssociationsContent: true };
var pe2 = se2 = class extends n2.IdentifiableMixin(g) {
  constructor(e13) {
    super(e13), this._error = null, this._graphicChangedTask = null, this._evaluateExpressionAttributesTask = null, this._associationVMAbortController = null, this._expressionAttributes = null, this._graphicExpressionAttributes = null, this.abilities = { ...le2 }, this.content = null, this.contentViewModels = [], this.description = null, this.defaultPopupTemplateEnabled = false, this.formattedAttributes = null, this.lastEditInfo = null, this.location = null, this.relatedInfos = /* @__PURE__ */ new Map(), this.title = "", this.view = null, this._graphicChangedThrottled = e8(this._graphicChanged, () => this.notifyChange("waitingForContent"), oe2, this), this._isAllowedContentType = (e14) => {
      const { abilities: t3 } = this;
      return "attachments" === e14.type && !!t3.attachmentsContent || "custom" === e14.type && !!t3.customContent || "fields" === e14.type && !!t3.fieldsContent || "media" === e14.type && !!t3.mediaContent || "text" === e14.type && !!t3.textContent || "expression" === e14.type && !!t3.expressionContent || "relationship" === e14.type && !!t3.relationshipContent || "utility-network-associations" === e14.type && !!t3.utilityNetworkAssociationsContent;
    }, this._evaluateExpressionAttributesThrottled = e8(this._evaluateExpressionAttributes, () => this.notifyChange("waitingForContent"), oe2, this), this.addHandles([d3(() => [this.graphic, this._effectivePopupTemplate, this.abilities, this.timeZone], () => this._graphicChangedThrottled(), P), p(() => {
      var _a, _b, _c, _d, _e2, _f, _g;
      if (!((_a = this._graphicChangedTask) == null ? void 0 : _a.finished) || null == this._graphicChangedTask.value) return null;
      const e14 = this._graphicChangedTask.value, t3 = (_b = e14 == null ? void 0 : e14.expressionInfos) == null ? void 0 : _b.dependencies;
      return [e14, (t3 == null ? void 0 : t3.has("view-scale")) ? (_c = this.view) == null ? void 0 : _c.scale : null, (t3 == null ? void 0 : t3.has("view-time-extent")) ? (_e2 = (_d = this.view) == null ? void 0 : _d.timeExtent) == null ? void 0 : _e2.start : null, (t3 == null ? void 0 : t3.has("view-time-extent")) ? (_g = (_f = this.view) == null ? void 0 : _f.timeExtent) == null ? void 0 : _g.end : null];
    }, ([e14]) => this._evaluateExpressionAttributesThrottled(e14))]);
  }
  initialize() {
    this.addHandles([this._graphicChangedThrottled, this._evaluateExpressionAttributesThrottled]);
  }
  destroy() {
    this._clear(), this._graphicChangedTask = e2(this._graphicChangedTask), this._evaluateExpressionAttributesTask = e2(this._evaluateExpressionAttributesTask), this._error = null, this.graphic = null, this._destroyContentViewModels(), this.relatedInfos.clear();
  }
  get _effectivePopupTemplate() {
    return null != this.graphic ? this.graphic.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled) : null;
  }
  get _fieldInfoMap() {
    return ie(oe(this._effectivePopupTemplate), this._sourceLayer);
  }
  get _sourceLayer() {
    return L(this.graphic);
  }
  castAbilities(e13) {
    return { ...le2, ...e13 };
  }
  get isTable() {
    var _a;
    return ((_a = this._sourceLayer) == null ? void 0 : _a.isTable) || false;
  }
  get state() {
    return this.graphic ? this._error ? "error" : this.waitingForContent ? "loading" : "ready" : "disabled";
  }
  set graphic(e13) {
    this._set("graphic", (e13 == null ? void 0 : e13.clone()) ?? null);
  }
  get spatialReference() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.spatialReference) ?? null;
  }
  set spatialReference(e13) {
    this._override("spatialReference", e13);
  }
  get timeZone() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.timeZone) ?? e;
  }
  set timeZone(e13) {
    this._overrideIfSome("timeZone", e13);
  }
  get map() {
    var _a;
    return ((_a = this.view) == null ? void 0 : _a.map) || null;
  }
  set map(e13) {
    this._override("map", e13);
  }
  get waitingForContent() {
    const { _graphicChangedThrottled: e13, _evaluateExpressionAttributesThrottled: t3, _graphicChangedTask: i8, _evaluateExpressionAttributesTask: s10, _associationVMAbortController: o3 } = this;
    return e13.hasPendingUpdates() || t3.hasPendingUpdates() || null != i8 && !i8.finished || null != s10 && !s10.finished || !!o3;
  }
  setActiveMedia(e13, t3) {
    const i8 = this.contentViewModels[e13];
    i8 instanceof M3 && i8.setActiveMedia(t3);
  }
  nextMedia(e13) {
    const t3 = this.contentViewModels[e13];
    t3 instanceof M3 && t3.next();
  }
  previousMedia(e13) {
    const t3 = this.contentViewModels[e13];
    t3 instanceof M3 && t3.previous();
  }
  async updateGeometry() {
    var _a;
    const { graphic: e13, spatialReference: t3, _sourceLayer: i8 } = this;
    await (i8 == null ? void 0 : i8.load());
    const s10 = i8 == null ? void 0 : i8.objectIdField;
    if (!s10 || !e13 || !i8) return;
    const o3 = (_a = e13 == null ? void 0 : e13.attributes) == null ? void 0 : _a[s10];
    if (null == o3) return;
    const r10 = [o3];
    if (!e13.geometry) {
      const s11 = await fe({ layer: i8, graphic: e13, outFields: [], objectIds: r10, returnGeometry: true, spatialReference: t3 }), o4 = s11 == null ? void 0 : s11.geometry;
      o4 && (e13.geometry = o4);
    }
  }
  _clear() {
    this._set("title", ""), this._set("content", null), this._set("formattedAttributes", null);
  }
  _graphicChanged() {
    this._evaluateExpressionAttributesTask = e2(this._evaluateExpressionAttributesTask), this._graphicChangedTask = e2(this._graphicChangedTask), this._graphicChangedTask = d2(async (e13) => {
      this._error = null, this._clear();
      const { graphic: t3 } = this;
      try {
        if (!t3) return null;
        const { _sourceLayer: i8, _effectivePopupTemplate: s10 } = this, o3 = this.spatialReference;
        await de({ graphic: t3, popupTemplate: s10, layer: i8, spatialReference: o3 }, { signal: e13 });
        const [{ value: r10 }, { value: a7 }] = await y([this._getContent(), this._getTitle()]), [, { value: n14 }] = await y([this._checkForRelatedFeatures({ signal: e13 }), b6(s10 == null ? void 0 : s10.expressionInfos, t3)]);
        return { expressionInfos: n14, content: r10, title: a7 };
      } catch (i8) {
        throw b(i8) || (this._error = i8, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: i8, graphic: t3, popupTemplate: this._effectivePopupTemplate })), i8;
      }
    });
  }
  _compileContentElement(e13, t3) {
    return "attachments" === e13.type ? this._compileAttachments(e13, t3) : "custom" === e13.type ? this._compileCustom(e13, t3) : "fields" === e13.type ? this._compileFields(e13, t3) : "media" === e13.type ? this._compileMedia(e13, t3) : "text" === e13.type ? this._compileText(e13, t3) : "expression" === e13.type ? this._compileExpression(e13, t3) : "relationship" === e13.type ? this._compileRelationship(e13, t3) : "utility-network-associations" === e13.type ? this._compileUtilityNetworkAssociation(e13, t3) : void 0;
  }
  _compileContent(e13) {
    if (this._destroyContentViewModels(), this.graphic) return Array.isArray(e13) ? e13.filter(this._isAllowedContentType).map((e14, t3) => this._compileContentElement(e14, t3)).filter(G) : "string" == typeof e13 ? this._compileText(new c4({ text: e13 }), 0).text : e13;
  }
  _destroyContentViewModels() {
    this.removeHandles(ae2), this.removeHandles(re2), this.contentViewModels.forEach((e13) => e13 && !e13.destroyed && e13.destroy()), this._set("contentViewModels", []);
  }
  _matchesFeature(e13, t3) {
    var _a;
    const i8 = (_a = e13 == null ? void 0 : e13.graphic) == null ? void 0 : _a.getObjectId(), s10 = t3 == null ? void 0 : t3.getObjectId();
    return null != i8 && null != s10 && i8 === s10;
  }
  _setRelatedFeaturesViewModels({ relatedFeatureViewModels: e13, relatedFeatures: t3, map: i8 }) {
    const { view: s10, spatialReference: o3, timeZone: r10 } = this;
    t3 == null ? void 0 : t3.filter(Boolean).forEach((t4) => {
      e13.some((e14) => this._matchesFeature(e14, t4)) || e13.add(new se2({ abilities: { relationshipContent: false }, map: i8, view: s10, spatialReference: o3, timeZone: r10, graphic: t4 }));
    }), e13.forEach((i9) => {
      const s11 = t3 == null ? void 0 : t3.find((e14) => this._matchesFeature(i9, e14));
      s11 || e13.remove(i9);
    });
  }
  _setExpressionContentVM(e13, t3) {
    const i8 = this.formattedAttributes, { contentElement: s10, contentElementViewModel: o3 } = e13, r10 = s10 == null ? void 0 : s10.type;
    o3 && r10 && ("fields" === r10 && (this._createFieldsFormattedAttributes({ contentElement: s10, contentElementIndex: t3, formattedAttributes: i8 }), o3.set(this._createFieldsVMParams(s10, t3))), "media" === r10 && (this._createMediaFormattedAttributes({ contentElement: s10, contentElementIndex: t3, formattedAttributes: i8 }), o3.set(this._createMediaVMParams(s10, t3))), "text" === r10 && o3.set(this._createTextVMParams(s10)));
  }
  _compileRelationship(e13, t3) {
    const { displayCount: i8, orderByFields: s10, relationshipId: o3, title: r10, description: a7 } = e13, { _sourceLayer: n14, graphic: l9, map: p9 } = this;
    if (!J(n14)) return;
    const c16 = new f4({ displayCount: i8, graphic: l9, orderByFields: s10, relationshipId: o3, layer: n14, map: p9, ...this._compileTitleAndDesc({ title: r10, description: a7 }) });
    return this.contentViewModels[t3] = c16, this.addHandles(v(() => c16.relatedFeatures, "change", () => this._setRelatedFeaturesViewModels(c16)), ae2), e13;
  }
  _matchesGlobalFeature(e13, t3) {
    const i8 = e13 == null ? void 0 : e13.association.globalId, s10 = t3 == null ? void 0 : t3.association.globalId;
    return null != i8 && null != s10 && i8 === s10;
  }
  async _setUpUtilityNetworkAssociationsViewModels(e13, t3, i8) {
    const { view: s10, spatialReference: o3, timeZone: r10 } = this;
    e13.forEach((i9, s11) => {
      const o4 = t3.get(s11);
      o4 ? i9.forEach((t4) => {
        o4.find((e14) => this._matchesGlobalFeature(t4, e14)) || (i9.remove(t4), 0 === i9.length && e13.delete(s11));
      }) : (i9.removeAll(), e13.delete(s11));
    }), t3.forEach((t4, n15) => {
      const l9 = e13.get(n15) || new V();
      t4 == null ? void 0 : t4.filter(Boolean).forEach((e14) => {
        l9.some((t5) => this._matchesGlobalFeature(t5, e14)) || l9.add({ association: e14.association, featureViewModel: new se2({ abilities: { utilityNetworkAssociationsContent: false }, map: i8, view: s10, spatialReference: o3, timeZone: r10, graphic: e14.feature }), terminalName: e14.terminalName });
      }), e13.set(n15, l9);
    });
    const n14 = new AbortController();
    this._associationVMAbortController = n14, await this._sortListObjectsByTitle(e13, { signal: n14.signal }), this._associationVMAbortController === n14 && (this._associationVMAbortController = null);
  }
  async _sortListObjectsByTitle(e13, t3) {
    for (const i8 of e13.values()) {
      const e14 = i8.map((e15) => w(() => "ready" === e15.featureViewModel.state, t3 == null ? void 0 : t3.signal));
      await Promise.all(e14), i8.sort(this._compareByFeatureTitle);
    }
  }
  _compareByFeatureTitle(e13, t3) {
    const i8 = c6(e13.featureViewModel), s10 = c6(t3.featureViewModel);
    return i8.localeCompare(s10, void 0, { numeric: true });
  }
  _compileUtilityNetworkAssociation(e13, t3) {
    const { displayCount: i8, title: s10, description: o3, associationTypes: r10 } = e13, { _sourceLayer: a7, graphic: n14, map: l9 } = this;
    if (!K(a7)) return;
    const p9 = new _({ graphic: n14, displayCount: i8, associationTypes: r10, layer: a7, map: l9, ...this._compileTitleAndDesc({ title: s10, description: o3 }) });
    return this.contentViewModels[t3] = p9, this.addHandles([d3(() => p9.associationFeatures.values(), () => this._setUpUtilityNetworkAssociationsViewModels(p9.associationViewModels, p9.associationFeatures, p9.map))], ne), e13;
  }
  _compileExpression(e13, t3) {
    const { expressionInfo: i8 } = e13, { graphic: s10, map: o3, spatialReference: r10, view: a7, location: n14 } = this, l9 = new E3({ expressionInfo: i8, graphic: s10, interceptor: se2.interceptor, map: o3, spatialReference: r10, view: a7, location: n14 });
    return this.contentViewModels[t3] = l9, this.addHandles(d3(() => l9.contentElementViewModel, () => this._setExpressionContentVM(l9, t3), P), re2), e13;
  }
  _compileAttachments(e13, t3) {
    const { graphic: i8 } = this, { description: s10, title: o3, orderByFields: r10 } = e13;
    return this.contentViewModels[t3] = new c7({ graphic: i8, orderByFields: r10, ...this._compileTitleAndDesc({ title: o3, description: s10 }) }), e13;
  }
  _compileCustom(e13, t3) {
    const { graphic: i8 } = this, { creator: s10, destroyer: o3 } = e13;
    return this.contentViewModels[t3] = new p5({ graphic: i8, creator: s10, destroyer: o3 }), e13;
  }
  _compileTitleAndDesc({ title: e13, description: t3 }) {
    const { _fieldInfoMap: i8, _sourceLayer: s10, graphic: o3, formattedAttributes: r10 } = this, a7 = o3 == null ? void 0 : o3.attributes, n14 = this._expressionAttributes, l9 = r10.global;
    return { title: D({ attributes: a7, fieldInfoMap: i8, globalAttributes: l9, expressionAttributes: n14, layer: s10, text: e13 }), description: D({ attributes: a7, fieldInfoMap: i8, globalAttributes: l9, expressionAttributes: n14, layer: s10, text: t3 }) };
  }
  _createFieldsVMParams(e13, t3) {
    const i8 = this._effectivePopupTemplate, s10 = this.formattedAttributes, o3 = { ...s10 == null ? void 0 : s10.global, ...s10 == null ? void 0 : s10.content[t3] }, r10 = (e13 == null ? void 0 : e13.fieldInfos) || (i8 == null ? void 0 : i8.fieldInfos), a7 = r10 == null ? void 0 : r10.filter(({ fieldName: e14 }) => !!e14 && (E(e14) || pe(e14) || o3.hasOwnProperty(e14))), n14 = i8 == null ? void 0 : i8.expressionInfos, { description: l9, title: p9 } = e13;
    return { attributes: o3, expressionInfos: n14, fieldInfos: a7, ...this._compileTitleAndDesc({ title: p9, description: l9 }) };
  }
  _compileFields(e13, t3) {
    const i8 = e13.clone(), s10 = new n9(this._createFieldsVMParams(e13, t3));
    return this.contentViewModels[t3] = s10, i8.fieldInfos = s10.formattedFieldInfos.slice(), i8;
  }
  _createMediaVMParams(e13, t3) {
    const { abilities: i8, graphic: s10, _fieldInfoMap: o3, _effectivePopupTemplate: r10, relatedInfos: a7, _sourceLayer: n14, _expressionAttributes: l9 } = this, p9 = this.formattedAttributes, c16 = (s10 == null ? void 0 : s10.attributes) ?? {}, { description: d10, mediaInfos: h9, title: u9 } = e13;
    return { abilities: { chartAnimation: i8.chartAnimation }, activeMediaInfoIndex: e13.activeMediaInfoIndex || 0, attributes: c16, isAggregate: s10 == null ? void 0 : s10.isAggregate, layer: n14, fieldInfoMap: o3, formattedAttributes: { ...p9 == null ? void 0 : p9.global, ...p9 == null ? void 0 : p9.content[t3] }, expressionAttributes: l9, mediaInfos: h9, popupTemplate: r10, relatedInfos: a7, ...this._compileTitleAndDesc({ title: u9, description: d10 }) };
  }
  _compileMedia(e13, t3) {
    const i8 = e13.clone(), s10 = new M3(this._createMediaVMParams(e13, t3));
    return i8.mediaInfos = s10.formattedMediaInfos.slice(), this.contentViewModels[t3] = s10, i8;
  }
  _createTextVMParams(e13) {
    var _a;
    const { graphic: t3, _fieldInfoMap: i8, _sourceLayer: s10, _expressionAttributes: o3 } = this;
    if (e13 && e13.text) {
      const r10 = (t3 == null ? void 0 : t3.attributes) ?? {}, a7 = ((_a = this.formattedAttributes) == null ? void 0 : _a.global) ?? {};
      e13.text = D({ attributes: r10, fieldInfoMap: i8, globalAttributes: a7, expressionAttributes: o3, layer: s10, text: e13.text });
    }
    return { graphic: t3, creator: e13.text };
  }
  _compileText(e13, t3) {
    const i8 = e13.clone();
    return this.contentViewModels[t3] = new p5(this._createTextVMParams(i8)), i8;
  }
  _compileLastEditInfo() {
    const { _effectivePopupTemplate: e13, _sourceLayer: t3, graphic: i8, timeZone: s10 } = this;
    if (!e13) return;
    const { lastEditInfoEnabled: o3 } = e13, r10 = t3 == null ? void 0 : t3.editFieldsInfo;
    return o3 && r10 ? re(r10, i8 == null ? void 0 : i8.attributes, s10, t3) : void 0;
  }
  _compileTitle(e13) {
    var _a;
    const { _fieldInfoMap: t3, _sourceLayer: i8, graphic: s10, _expressionAttributes: o3 } = this, r10 = (s10 == null ? void 0 : s10.attributes) ?? {}, a7 = ((_a = this.formattedAttributes) == null ? void 0 : _a.global) ?? {};
    return D({ attributes: r10, fieldInfoMap: t3, globalAttributes: a7, expressionAttributes: o3, layer: i8, text: e13 });
  }
  async _getTitle() {
    const { _effectivePopupTemplate: e13, graphic: t3 } = this;
    return t3 ? q({ type: "title", value: e13 == null ? void 0 : e13.title, event: { graphic: t3 } }) : null;
  }
  async _getContent() {
    const { _effectivePopupTemplate: e13, graphic: t3 } = this;
    return t3 ? q({ type: "content", value: e13 == null ? void 0 : e13.content, event: { graphic: t3 } }) : null;
  }
  _evaluateExpressionAttributes({ title: e13, content: t3, expressionInfos: i8 }) {
    this._evaluateExpressionAttributesTask = e2(this._evaluateExpressionAttributesTask), this._evaluateExpressionAttributesTask = d2(async (s10) => {
      const { graphic: o3, map: r10, view: a7, spatialReference: n14, location: p9 } = this;
      try {
        if (!o3) return;
        let l9;
        if (null != i8) {
          const e14 = [];
          for (const [t4, l10] of i8.expressions.entries()) null != l10 ? e14.push(l10.evaluate({ graphic: o3, interceptor: se2.interceptor, location: p9, map: r10, options: { signal: s10 }, spatialReference: n14, view: a7 }).then((e15) => [t4, c14(e15)]).catch(() => [t4, void 0])) : e14.push(Promise.resolve([t4, void 0]));
          l9 = Object.fromEntries(await Promise.all(e14)), s2(s10);
        }
        this._expressionAttributes = l9, this._graphicExpressionAttributes = { ...o3.attributes, ...l9 }, this._set("formattedAttributes", this._createFormattedAttributes(t3)), this._set("title", this._compileTitle(e13)), this._set("lastEditInfo", this._compileLastEditInfo() || null), this._set("content", this._compileContent(t3) || null);
      } catch (c16) {
        b(c16) || (this._error = c16, n.getLogger(this).error("error", "The popupTemplate could not be displayed for this feature.", { error: c16, graphic: o3, popupTemplate: this._effectivePopupTemplate }));
      }
    });
  }
  _createMediaFormattedAttributes({ contentElement: e13, contentElementIndex: t3, formattedAttributes: i8 }) {
    const { _effectivePopupTemplate: s10, graphic: o3, relatedInfos: r10, _sourceLayer: a7, _fieldInfoMap: n14, _graphicExpressionAttributes: l9, timeZone: p9 } = this;
    i8.content[t3] = se({ fieldInfos: s10 == null ? void 0 : s10.fieldInfos, graphic: o3, attributes: { ...l9, ...e13.attributes }, layer: a7, fieldInfoMap: n14, relatedInfos: r10, timeZone: p9 });
  }
  _createFieldsFormattedAttributes({ contentElement: e13, contentElementIndex: t3, formattedAttributes: i8 }) {
    if (e13.fieldInfos) {
      const { graphic: s10, relatedInfos: o3, _sourceLayer: r10, _fieldInfoMap: a7, _graphicExpressionAttributes: n14, timeZone: l9 } = this;
      i8.content[t3] = se({ fieldInfos: e13.fieldInfos, graphic: s10, attributes: { ...n14, ...e13.attributes }, layer: r10, fieldInfoMap: a7, relatedInfos: o3, timeZone: l9 });
    }
  }
  _createFormattedAttributes(e13) {
    const { _effectivePopupTemplate: t3, graphic: i8, relatedInfos: s10, _sourceLayer: o3, _fieldInfoMap: r10, _graphicExpressionAttributes: a7, timeZone: n14 } = this, l9 = t3 == null ? void 0 : t3.fieldInfos, p9 = { global: se({ fieldInfos: l9, graphic: i8, attributes: a7, layer: o3, fieldInfoMap: r10, relatedInfos: s10, timeZone: n14 }), content: [] };
    return Array.isArray(e13) && e13.forEach((e14, t4) => {
      "fields" === e14.type && this._createFieldsFormattedAttributes({ contentElement: e14, contentElementIndex: t4, formattedAttributes: p9 }), "media" === e14.type && this._createMediaFormattedAttributes({ contentElement: e14, contentElementIndex: t4, formattedAttributes: p9 });
    }), p9;
  }
  _checkForRelatedFeatures(e13) {
    const { graphic: t3, _effectivePopupTemplate: i8 } = this;
    return this._queryRelatedInfos(t3, oe(i8), e13);
  }
  async _queryRelatedInfos(e13, t3, i8) {
    const { relatedInfos: s10, _sourceLayer: o3 } = this;
    s10.clear();
    const r10 = null != (o3 == null ? void 0 : o3.associatedLayer) ? await (o3 == null ? void 0 : o3.associatedLayer.load(i8)) : o3;
    if (!r10 || !e13) return;
    const a7 = t3.filter((e14) => !!e14.fieldName && pe(e14.fieldName));
    if (!(a7 == null ? void 0 : a7.length)) return;
    t3.forEach((e14) => this._configureRelatedInfo(e14, r10));
    const n14 = await v3({ relatedInfos: s10, layer: r10 }, i8);
    Object.keys(n14).forEach((e14) => {
      var _a;
      const t4 = s10.get(e14.toString()), i9 = (_a = n14[e14]) == null ? void 0 : _a.value;
      t4 && i9 && (t4.layerInfo = i9.data);
    });
    const l9 = await T2({ graphic: e13, relatedInfos: s10, layer: r10 }, i8);
    Object.keys(l9).forEach((e14) => {
      var _a;
      S((_a = l9[e14]) == null ? void 0 : _a.value, s10.get(e14.toString()));
    });
  }
  _configureRelatedInfo(e13, t3) {
    const { relatedInfos: i8 } = this, s10 = h5(e13.fieldName || "");
    if (!s10) return;
    const { layerId: o3, fieldName: r10 } = s10;
    if (!o3) return;
    const a7 = i8.get(o3.toString()) || g4(o3, t3);
    a7 && (q2({ relatedInfo: a7, fieldName: r10, fieldInfo: e13 }), this.relatedInfos.set(o3, a7));
  }
};
pe2.interceptor = new e11(he, we), r([m()], pe2.prototype, "_error", void 0), r([m()], pe2.prototype, "_graphicChangedTask", void 0), r([m()], pe2.prototype, "_evaluateExpressionAttributesTask", void 0), r([m()], pe2.prototype, "_associationVMAbortController", void 0), r([m({ readOnly: true })], pe2.prototype, "_effectivePopupTemplate", null), r([m({ readOnly: true })], pe2.prototype, "_fieldInfoMap", null), r([m({ readOnly: true })], pe2.prototype, "_sourceLayer", null), r([m()], pe2.prototype, "abilities", void 0), r([s4("abilities")], pe2.prototype, "castAbilities", null), r([m({ readOnly: true })], pe2.prototype, "content", void 0), r([m({ readOnly: true })], pe2.prototype, "contentViewModels", void 0), r([m()], pe2.prototype, "description", void 0), r([m({ type: Boolean })], pe2.prototype, "defaultPopupTemplateEnabled", void 0), r([m({ readOnly: true })], pe2.prototype, "isTable", null), r([m({ readOnly: true })], pe2.prototype, "state", null), r([m({ readOnly: true })], pe2.prototype, "formattedAttributes", void 0), r([m({ type: b2, value: null })], pe2.prototype, "graphic", null), r([m({ readOnly: true })], pe2.prototype, "lastEditInfo", void 0), r([m({ type: j2 })], pe2.prototype, "location", void 0), r([m({ readOnly: true })], pe2.prototype, "relatedInfos", void 0), r([m({ type: g3 })], pe2.prototype, "spatialReference", null), r([m()], pe2.prototype, "timeZone", null), r([m({ readOnly: true })], pe2.prototype, "title", void 0), r([m()], pe2.prototype, "map", null), r([m({ readOnly: true })], pe2.prototype, "waitingForContent", null), r([m()], pe2.prototype, "view", void 0), pe2 = se2 = r([a("esri.widgets.Feature.FeatureViewModel")], pe2);
var ce = pe2;

// node_modules/@arcgis/core/widgets/Feature/resources.js
var e12 = "esri-feature";
var t2 = { base: e12, container: `${e12}__size-container`, title: `${e12}__title`, main: `${e12}__main-container`, btn: `${e12}__button`, icon: `${e12}__icon`, content: `${e12}__content`, contentNode: `${e12}__content-node`, contentNodeText: `${e12}__content-node--text`, contentElement: `${e12}__content-element`, text: `${e12}__text`, lastEditedInfo: `${e12}__last-edited-info`, fields: `${e12}__fields`, fieldHeader: `${e12}__field-header`, fieldData: `${e12}__field-data`, fieldDataDate: `${e12}__field-data--date`, loadingSpinnerContainer: `${e12}__loading-container` };

// node_modules/@arcgis/core/widgets/Feature/support/FeatureContentMixin.js
var n13 = (n14) => {
  let i8 = class extends n14 {
    constructor() {
      super(...arguments), this.renderNodeContent = (e13) => e6(e13) && !e13.destroyed ? n4("div", { class: t2.contentNode, key: e13 }, e13.render()) : e13 instanceof HTMLElement ? n4("div", { afterCreate: this._attachToNode, bind: e13, class: t2.contentNode, key: e13 }) : t(e13) ? n4("div", { afterCreate: this._attachToNode, bind: e13.domNode, class: t2.contentNode, key: e13 }) : null;
    }
    _attachToNode(e13) {
      const o3 = this;
      e13.appendChild(o3);
    }
  };
  return i8 = r([a("esri.widgets.Feature.support.FeatureContentMixin")], i8), i8;
};

// node_modules/@arcgis/core/widgets/Feature.js
var b8 = { title: true, content: true, lastEditedInfo: true };
var F6 = class extends n13(O) {
  constructor(e13, t3) {
    super(e13, t3), this._contentWidgets = [], this.flowType = "feature", this.flowItems = null, this.headingLevel = 2, this.messages = null, this.messagesCommon = null, this.visibleElements = { ...b8 }, this.viewModel = new ce();
  }
  initialize() {
    this.addHandles(d3(() => {
      var _a;
      return (_a = this.viewModel) == null ? void 0 : _a.contentViewModels;
    }, () => this._setupContentWidgets(), P));
  }
  loadDependencies() {
    return c3({ notice: () => import("./calcite-notice-MPUJ2BZX.js"), loader: () => import("./calcite-loader-QX4G267A.js") });
  }
  destroy() {
    this._destroyContentWidgets();
  }
  get graphic() {
    return this.viewModel.graphic;
  }
  set graphic(e13) {
    this.viewModel.graphic = e13;
  }
  get defaultPopupTemplateEnabled() {
    return this.viewModel.defaultPopupTemplateEnabled;
  }
  set defaultPopupTemplateEnabled(e13) {
    this.viewModel.defaultPopupTemplateEnabled = e13;
  }
  get isTable() {
    return this.viewModel.isTable;
  }
  get icon() {
    return "polygon";
  }
  set icon(e13) {
    this._overrideIfSome("icon", e13);
  }
  get label() {
    var _a;
    return ((_a = this.messages) == null ? void 0 : _a.widgetLabel) ?? "";
  }
  set label(e13) {
    this._overrideIfSome("label", e13);
  }
  get location() {
    return this.viewModel.location;
  }
  set location(e13) {
    this.viewModel.location = e13;
  }
  get spatialReference() {
    return this.viewModel.spatialReference;
  }
  set spatialReference(e13) {
    this.viewModel.spatialReference = e13;
  }
  get timeZone() {
    return this.viewModel.timeZone;
  }
  set timeZone(e13) {
    this.viewModel.timeZone = e13;
  }
  get title() {
    return this.viewModel.title;
  }
  castVisibleElements(e13) {
    return { ...b8, ...e13 };
  }
  get map() {
    return this.viewModel.map;
  }
  set map(e13) {
    this.viewModel.map = e13;
  }
  get view() {
    return this.viewModel.view;
  }
  set view(e13) {
    this.viewModel.view = e13;
  }
  setActiveMedia(e13, t3) {
    return this.viewModel.setActiveMedia(e13, t3);
  }
  nextMedia(e13) {
    return this.viewModel.nextMedia(e13);
  }
  previousMedia(e13) {
    return this.viewModel.previousMedia(e13);
  }
  render() {
    const { state: e13 } = this.viewModel, t3 = n4("div", { class: t2.container, key: "container" }, this._renderTitle(), "error" === e13 ? this._renderError() : "loading" === e13 ? this._renderLoading() : this._renderContentContainer());
    return n4("div", { class: this.classes(t2.base, e4.widget) }, t3);
  }
  _renderError() {
    const { messagesCommon: e13, messages: t3, visibleElements: s10 } = this;
    return n4("calcite-notice", { icon: "exclamation-mark-circle", kind: "danger", open: true, scale: "s" }, s10.title ? n4("div", { key: "error-title", slot: "title" }, e13.errorMessage) : null, n4("div", { key: "error-message", slot: "message" }, t3.loadingError));
  }
  _renderLoading() {
    return n4("div", { class: t2.loadingSpinnerContainer, key: "loading-container" }, n4("calcite-loader", { inline: true, label: "" }));
  }
  _renderContentContainer() {
    const { visibleElements: e13 } = this;
    return e13.content ? n4("div", { class: t2.main }, [this._renderContent(), this._renderLastEditInfo()]) : null;
  }
  _renderTitle() {
    const { visibleElements: e13, title: t3 } = this;
    return e13.title ? n4(e5, { class: t2.title, innerHTML: t3, level: this.headingLevel }) : null;
  }
  _renderContent() {
    const e13 = this.viewModel.content, t3 = "content";
    if (!e13) return null;
    if (Array.isArray(e13)) return e13.length ? n4("div", { class: t2.contentNode, key: `${t3}-content-elements` }, e13.map(this._renderContentElement, this)) : null;
    if ("string" == typeof e13) {
      const e14 = this._contentWidgets[0];
      return !e14 || e14.destroyed ? null : n4("div", { class: this.classes(t2.contentNode, t2.contentNodeText), key: `${t3}-content` }, e14.render());
    }
    return this.renderNodeContent(e13);
  }
  _renderContentElement(e13, t3) {
    var _a;
    const { visibleElements: s10 } = this;
    if ("boolean" != typeof s10.content && !((_a = s10.content) == null ? void 0 : _a[e13.type])) return null;
    switch (e13.type) {
      case "attachments":
        return this._renderAttachments(t3);
      case "custom":
        return this._renderCustom(e13, t3);
      case "fields":
        return this._renderFields(t3);
      case "media":
        return this._renderMedia(t3);
      case "text":
        return this._renderText(e13, t3);
      case "expression":
        return this._renderExpression(t3);
      case "relationship":
        return this._renderRelationship(t3);
      case "utility-network-associations":
        return this._renderAssociation(t3);
      default:
        return null;
    }
  }
  _renderAttachments(e13) {
    const t3 = this._contentWidgets[e13];
    if (!t3 || t3.destroyed) return null;
    const { state: s10, attachmentInfos: i8 } = t3.viewModel;
    return "loading" === s10 || i8.length > 0 ? n4("div", { class: this.classes(t2.contentElement), key: this._buildKey("attachments-element", e13) }, t3.render()) : null;
  }
  _renderRelationship(e13) {
    const t3 = this._contentWidgets[e13];
    return t3 && !t3.destroyed && this.flowItems ? n4("div", { class: t2.contentElement, key: this._buildKey("relationship-element", e13) }, t3.render()) : null;
  }
  _renderAssociation(e13) {
    const t3 = this._contentWidgets[e13];
    return t3 && !t3.destroyed && this.flowItems ? n4("div", { class: t2.contentElement, key: this._buildKey("utility-network-association-element", e13) }, t3.render()) : null;
  }
  _renderExpression(e13) {
    const t3 = this._contentWidgets[e13];
    return t3 && !t3.destroyed && t3.viewModel.contentElement ? n4("div", { class: t2.contentElement, key: this._buildKey("expression-element", e13) }, t3.render()) : null;
  }
  _renderCustom(e13, t3) {
    const { creator: s10 } = e13, i8 = this._contentWidgets[t3];
    return !i8 || i8.destroyed ? null : s10 ? n4("div", { class: t2.contentElement, key: this._buildKey("custom-element", t3) }, i8.render()) : null;
  }
  _renderFields(e13) {
    const t3 = this._contentWidgets[e13];
    return !t3 || t3.destroyed ? null : n4("div", { class: t2.contentElement, key: this._buildKey("fields-element", e13) }, t3.render());
  }
  _renderMedia(e13) {
    const t3 = this._contentWidgets[e13];
    return !t3 || t3.destroyed ? null : n4("div", { class: t2.contentElement, key: this._buildKey("media-element", e13) }, t3.render());
  }
  _renderLastEditInfo() {
    const { visibleElements: e13, messages: t3 } = this, { lastEditInfo: s10 } = this.viewModel;
    if (!s10 || !e13.lastEditedInfo) return null;
    const { date: i8, user: n14 } = s10, o3 = "edit" === s10.type ? n14 ? t3.lastEditedByUser : t3.lastEdited : n14 ? t3.lastCreatedByUser : t3.lastCreated, r10 = s3(o3, { date: i8, user: n14 });
    return n4("div", { class: this.classes(t2.lastEditedInfo, t2.contentElement), key: "edit-info-element" }, r10);
  }
  _renderText(e13, t3) {
    const s10 = e13.text, i8 = this._contentWidgets[t3];
    return !i8 || i8.destroyed ? null : s10 ? n4("div", { class: this.classes(t2.contentElement, t2.text), key: this._buildKey("text-element", t3) }, i8.render()) : null;
  }
  _buildKey(e13, ...t3) {
    var _a, _b;
    return `${e13}__${((_b = (_a = this.viewModel) == null ? void 0 : _a.graphic) == null ? void 0 : _b.uid) || "0"}-${t3.join("-")}`;
  }
  _destroyContentWidget(e13) {
    e13 && (e13.viewModel = null, !e13.destroyed && e13.destroy());
  }
  _destroyContentWidgets() {
    this._contentWidgets.forEach((e13) => this._destroyContentWidget(e13)), this._contentWidgets = [];
  }
  _setupContentWidgets() {
    this._destroyContentWidgets();
    const { headingLevel: e13, visibleElements: t3, flowItems: s10, viewModel: i8 } = this, n14 = i8 == null ? void 0 : i8.content, { contentViewModels: o3 } = i8;
    if (Array.isArray(n14)) n14.forEach((n15, r10) => {
      if ("attachments" === n15.type && (this._contentWidgets[r10] = new c9({ displayType: n15.displayType, headingLevel: t3.title && e13 < 6 ? e13 + 1 : e13, viewModel: o3[r10] })), "fields" === n15.type && (this._contentWidgets[r10] = new h4({ viewModel: o3[r10] })), "media" === n15.type && (this._contentWidgets[r10] = new b5({ viewModel: o3[r10] })), "text" === n15.type && (this._contentWidgets[r10] = new p6({ viewModel: o3[r10] })), "custom" === n15.type && (this._contentWidgets[r10] = new p6({ viewModel: o3[r10] })), "expression" === n15.type && (this._contentWidgets[r10] = new h7({ viewModel: o3[r10] })), "relationship" === n15.type) {
        const e14 = new E4({ flowItems: s10, featureVisibleElements: t3, viewModel: o3[r10] });
        this._contentWidgets[r10] = e14;
      }
      if ("utility-network-associations" === n15.type) {
        const e14 = async (e15) => {
          const { viewModel: n17, listType: o4, title: r11 } = e15;
          if (!s10) return;
          n17.activeAssociationType = o4;
          const { default: l9 } = await import("./FeatureUtilityNetworkAssociationList-Q43GF4BM.js"), d10 = new l9({ viewModel: n17, parentFeatureViewModel: i8, listType: o4, title: r11, featureVisibleElements: t3, description: i8.title, flowItems: s10 });
          s10.push(d10);
        }, n16 = new w8({ flowItems: s10, onSelectAssociationType: e14, parentFeatureViewModel: i8, featureVisibleElements: t3, viewModel: o3[r10] });
        this._contentWidgets[r10] = n16;
      }
    }, this);
    else {
      const e14 = o3[0];
      e14 && !e14.destroyed && (this._contentWidgets[0] = new p6({ viewModel: e14 }));
    }
    this.scheduleRender();
  }
};
r([m()], F6.prototype, "flowType", void 0), r([m()], F6.prototype, "graphic", null), r([m()], F6.prototype, "defaultPopupTemplateEnabled", null), r([m()], F6.prototype, "flowItems", void 0), r([m()], F6.prototype, "headingLevel", void 0), r([m({ readOnly: true })], F6.prototype, "isTable", null), r([m()], F6.prototype, "icon", null), r([m()], F6.prototype, "label", null), r([m()], F6.prototype, "location", null), r([m(), e3("esri/widgets/Feature/t9n/Feature")], F6.prototype, "messages", void 0), r([m(), e3("esri/t9n/common")], F6.prototype, "messagesCommon", void 0), r([m()], F6.prototype, "spatialReference", null), r([m()], F6.prototype, "timeZone", null), r([m({ readOnly: true })], F6.prototype, "title", null), r([m()], F6.prototype, "visibleElements", void 0), r([s4("visibleElements")], F6.prototype, "castVisibleElements", null), r([m()], F6.prototype, "map", null), r([m()], F6.prototype, "view", null), r([m({ type: ce })], F6.prototype, "viewModel", void 0), F6 = r([a("esri.widgets.Feature")], F6);
var j4 = F6;

export {
  e8 as e,
  i5 as i,
  ce,
  t2 as t,
  n13 as n,
  j4 as j
};
//# sourceMappingURL=chunk-WCU7DDWC.js.map
