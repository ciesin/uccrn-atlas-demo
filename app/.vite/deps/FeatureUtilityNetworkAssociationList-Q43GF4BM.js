import {
  _,
  i as i2
} from "./chunk-ZNVYE3UB.js";
import "./chunk-LPOMYX2A.js";
import "./chunk-U4VVTGEX.js";
import {
  s as s2
} from "./chunk-UQ4WWETM.js";
import {
  e as e2
} from "./chunk-3Y7KHPDW.js";
import {
  O,
  c as c2,
  e
} from "./chunk-4O2ECRMV.js";
import {
  i,
  n
} from "./chunk-7EIXRVA4.js";
import "./chunk-BSRIVWBN.js";
import "./chunk-RVUV2HD7.js";
import "./chunk-CXW7QK2T.js";
import {
  c as c3
} from "./chunk-TNYXYQXK.js";
import "./chunk-AI2O2GKK.js";
import "./chunk-ANGUSND2.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-5X74MKXM.js";
import "./chunk-LCBD3JEK.js";
import "./chunk-IPFYNOOY.js";
import "./chunk-PUC7IJYJ.js";
import "./chunk-ESU5C3MV.js";
import "./chunk-TYJOGWKZ.js";
import "./chunk-4WO6KUCB.js";
import "./chunk-2Y4TRKRB.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
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
import "./chunk-AZ33ECVF.js";
import "./chunk-FENCNBXD.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-MLOZK7WX.js";
import "./chunk-XWXWIBVO.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import {
  s
} from "./chunk-H7PA52WJ.js";
import {
  l
} from "./chunk-PODRVOXS.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  d
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
  c
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/UtilityNetworkAssociationList.js
var d2 = "esri-utility-network-association-list";
var p = { featureObserver: `${d2}__feature-observer`, filterContainer: `${d2}__filter-container`, limitNoticeContainer: `${d2}__limit-notice-container`, loadingContainer: `${d2}__loading-container` };
var m2 = class extends O {
  constructor(e3, o) {
    super(e3, o), this._isFeatureCountNoticeOpen = true, this._observer = new IntersectionObserver(([e4]) => {
      (e4 == null ? void 0 : e4.isIntersecting) && this._increaseFeaturePage();
    }, { root: window.document }), this._observerNode = null, this.featuresPerPage = 50, this.filterText = "", this.headingLevel = 5, this.maxFeatureCount = 1e3, this.messagesFeature = null, this.messagesCommon = null, this.selectedLayer = null, this.tooltipReferenceMap = new s2(), this.viewModel = new _();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ icon: () => import("./calcite-icon-6QWLC3AJ.js"), input: () => import("./calcite-input-LDDQP5AR.js"), loader: () => import("./calcite-loader-QX4G267A.js"), notice: () => import("./calcite-notice-MPUJ2BZX.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  get associatedFeatureCount() {
    const e3 = this.viewModel.associationViewModels, t = this.selectedLayer ? e3.get(this.selectedLayer) : null;
    return t ? t.length : 0;
  }
  set currentFeaturePage(e3) {
    const { featuresPerPage: t, associatedFeatureCount: o } = this, i3 = Math.ceil(o / t) || 1, r2 = Math.max(Math.min(e3, i3), 1);
    this._set("currentFeaturePage", r2);
  }
  get currentFeaturePage() {
    return this._get("currentFeaturePage") ?? 1;
  }
  get endIndex() {
    const { currentFeaturePage: e3, featuresPerPage: t, maxFeatureCount: o } = this;
    return Math.min(e3 * t, o);
  }
  renderConnectivityIcon(e3, t) {
    const { tooltipReferenceMap: o } = this;
    let i3;
    switch (e3) {
      case "junction-edge-from-connectivity":
        i3 = "connection-end-left";
        break;
      case "junction-edge-to-connectivity":
        i3 = "connection-end-right";
        break;
      case "junction-edge-midspan-connectivity":
        i3 = "connection-middle";
        break;
      default:
        i3 = "connection-to-connection";
    }
    return n("calcite-icon", { afterCreate: (e4) => o.set(t, e4), afterRemoved: () => o.delete(t), icon: i3, scale: "s", slot: "content-start" });
  }
  renderFeatureCountWarning() {
    const { associatedFeatureCount: e3, maxFeatureCount: t, messagesFeature: o } = this;
    return e3 > t ? n("calcite-notice", { class: this._isFeatureCountNoticeOpen ? p.limitNoticeContainer : void 0, closable: true, icon: "information", kind: "info", open: true, scale: "s", width: "full", onCalciteNoticeBeforeOpen: () => this._isFeatureCountNoticeOpen = true, onCalciteNoticeClose: () => this._isFeatureCountNoticeOpen = false }, n("div", { slot: "title" }, o.associationsLimitNoticeTitle), n("div", { slot: "message" }, s(o.associationsLimitNoticeMessage, { number: t }))) : null;
  }
  renderFeatureObserver() {
    return n("div", { afterCreate: this._onObserverCreate, bind: this, class: p.featureObserver, key: "feature-observer" });
  }
  renderFilter() {
    return n("div", { class: p.filterContainer, key: "filter" }, n("calcite-input", { icon: "search", placeholder: this.messagesFeature.associationFilterPlaceholder, type: "search", onCalciteInputInput: (e3) => {
      this.filterText = e3.currentTarget.value.trim().toLowerCase(), this.currentFeaturePage = 1;
    } }));
  }
  renderLoading() {
    return n("div", { class: p.loadingContainer, key: "loading-container" }, this.renderLoadingIcon());
  }
  renderLoadingIcon() {
    return n("calcite-loader", { inline: true, label: this.messagesCommon.loading });
  }
  getConnectivityTooltip(e3) {
    const { messagesFeature: t } = this;
    switch (e3) {
      case "connectivity":
      case "junction-junction-connectivity":
        return t.associationsJunctionJunction;
      case "junction-edge-from-connectivity":
        return t.associationsJunctionEdgeFrom;
      case "junction-edge-midspan-connectivity":
        return t.associationsJunctionEdgeMidspan;
      case "junction-edge-to-connectivity":
        return t.associationsJunctionEdgeTo;
      default:
        return "";
    }
  }
  setUpObserver() {
    this.addHandles(d(() => this._observerNode, () => this._onObserverChange()));
  }
  _increaseFeaturePage() {
    this.currentFeaturePage++;
  }
  async _onObserverChange() {
    this._observerNode && this._observer.unobserve(this._observerNode);
    const { state: e3, showAllEnabled: t } = this.viewModel;
    this._observerNode && "ready" === e3 && t && this._observer.observe(this._observerNode);
  }
  _onObserverCreate(e3) {
    this._observerNode = e3;
  }
};
r([m()], m2.prototype, "_observer", void 0), r([m()], m2.prototype, "_observerNode", void 0), r([m()], m2.prototype, "associatedFeatureCount", null), r([m()], m2.prototype, "currentFeaturePage", null), r([m()], m2.prototype, "endIndex", null), r([m()], m2.prototype, "featuresPerPage", void 0), r([m()], m2.prototype, "filterText", void 0), r([m()], m2.prototype, "headingLevel", void 0), r([m()], m2.prototype, "maxFeatureCount", void 0), r([m(), e("esri/widgets/Feature/t9n/Feature")], m2.prototype, "messagesFeature", void 0), r([m(), e("esri/t9n/common")], m2.prototype, "messagesCommon", void 0), r([m()], m2.prototype, "selectedLayer", void 0), r([m()], m2.prototype, "tooltipReferenceMap", void 0), r([m({ type: _ })], m2.prototype, "viewModel", void 0), m2 = r([a("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")], m2);
var h = m2;

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/formatPercentAlong.js
function n2(n5) {
  const { percentAlong: r2 } = n5;
  return null == r2 ? "" : l(r2, { style: "percent", maximumFractionDigits: 2 });
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivity.js
function n3(n5) {
  const { associationType: t } = n5;
  return "connectivity" === t || "junction-junction-connectivity" === t || "junction-edge-from-connectivity" === t || "junction-edge-midspan-connectivity" === t || "junction-edge-to-connectivity" === t;
}

// node_modules/@arcgis/core/widgets/support/UtilityNetworkAssociations/utils/isConnectivityMidspan.js
function n4(n5) {
  return "junction-edge-midspan-connectivity" === n5.associationType;
}

// node_modules/@arcgis/core/widgets/Feature/FeatureUtilityNetworkAssociationList.js
var f;
var y = "esri-feature-utility-network-associations";
var b = { base: y, listItemHidden: `${y}__list-item--hidden` };
var v = "nested";
var g = f = class extends h {
  constructor(e3, t) {
    super(e3, t), this.description = null, this.flowItems = null, this.flowType = "feature-utility-network-association-type", this.listType = null, this.parentFeatureViewModel = null, this.title = null, this.viewModel = new _(), this.visibleElements = new i2();
  }
  initialize() {
    this.setUpObserver();
  }
  loadDependencies() {
    return c2({ chip: () => import("./calcite-chip-MZIE7UWE.js"), icon: () => import("./calcite-icon-6QWLC3AJ.js"), list: () => import("./calcite-list-EYDTM3R4.js"), "list-item": () => import("./calcite-list-item-I75MSBTM.js"), tooltip: () => import("./calcite-tooltip-LBT62WB7.js") });
  }
  destroy() {
    this.tooltipReferenceMap.clear();
  }
  render() {
    var _a;
    const e3 = this.viewModel.associationViewModels, { state: t, showAllEnabled: i3 } = this.viewModel, { state: s3 } = this.parentFeatureViewModel ?? {};
    return n("div", { class: this.classes(b.base, e2.widget) }, "loading" === t || "querying" === t || "loading" === s3 ? this.renderLoading() : n("calcite-list", { displayMode: v, label: ((_a = this.selectedLayer) == null ? void 0 : _a.title) ?? this.messagesCommon.untitled }, i3 && this.selectedLayer ? n(i, null, this.renderFilter(), this.renderFeatureCountWarning(), this._renderAssociatedFeatureListPage(), this.renderFeatureObserver()) : Array.from(e3.keys(), (t2) => this._renderTypeList(t2, e3.get(t2)))));
  }
  _showAllAssociations(e3) {
    const { flowItems: t, viewModel: i3, description: s3 } = this;
    if (!t || !e3) return;
    i3.showAllEnabled = true;
    const o = new f({ selectedLayer: e3, title: e3 == null ? void 0 : e3.title, flowItems: t, parentFeatureViewModel: this.parentFeatureViewModel, featureVisibleElements: this.featureVisibleElements, description: s3, visibleElements: new i2({ title: false, description: false }), viewModel: i3 });
    t.push(o);
  }
  _renderAssociatedFeatureListPage() {
    const e3 = this.viewModel.associationViewModels.get(this.selectedLayer).filter((e4) => c3(e4.featureViewModel).toLowerCase().includes(this.filterText)).slice(0, this.endIndex);
    return [...this._renderTooltips(e3), ...this._renderAssociatedFeatureList(e3)];
  }
  _renderItemTooltip(e3) {
    const { tooltipReferenceMap: t } = this;
    return n3(e3.association) ? n("calcite-tooltip", { key: `tooltip-${e3.featureViewModel.uid}`, overlayPositioning: "fixed", referenceElement: t.get(e3.featureViewModel.uid) }, this.getConnectivityTooltip(e3.association.associationType)) : null;
  }
  _renderAssociatedFeature(e3) {
    const { featureViewModel: i3 } = e3, s3 = c3(i3), l2 = "loading" === i3.state, r2 = this._findFlowItem(i3), n5 = r2 < 0 && this._isParentFeature(i3), c4 = n5 || r2 >= 0;
    return n("calcite-list-item", { class: l2 ? b.listItemHidden : void 0, description: c(e3.terminalName ?? ""), key: `associated-feature-type-${i3.uid}`, label: c(s3), onCalciteListItemSelect: () => this._handleFeatureClick(n5, r2, i3) }, n3(e3.association) ? this.renderConnectivityIcon(e3.association.associationType, e3.featureViewModel.uid) : null, n4(e3.association) ? n("calcite-chip", { label: n2(e3.association), scale: "s", slot: "content-end" }, n2(e3.association)) : null, this._renderChevronIconNode(c4));
  }
  async _selectAssociation(e3) {
    const { flowItems: t, featureVisibleElements: i3 } = this;
    if (!t) return;
    e3.abilities = { utilityNetworkAssociationsContent: true };
    const { default: s3 } = await import("./Feature-OBRHUUJC.js");
    t.push(new s3({ flowItems: t, flowType: "feature-association", viewModel: e3, visibleElements: i3 }));
  }
  _handleFeatureClick(e3, t, i3) {
    if (e3) this.flowItems.drain((e4) => {
      "showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy();
    });
    else if (t < 0 || !this.flowItems) this._selectAssociation(i3);
    else for (; this.flowItems.length > t + 1; ) {
      const e4 = this.flowItems.pop();
      e4 && ("showAllEnabled" in e4.viewModel && (e4.viewModel.showAllEnabled = false), e4.viewModel = null, e4.destroy());
    }
  }
  _featureViewModelMatch(e3, t) {
    const i3 = e3.graphic, s3 = i3 == null ? void 0 : i3.layer;
    let o = null;
    "subtype-sublayer" === (s3 == null ? void 0 : s3.type) && s3.parent ? o = s3.parent.globalIdField ?? null : s3 && "globalIdField" in s3 && (o = s3.globalIdField);
    const l2 = o ? i3 == null ? void 0 : i3.attributes[o] : null, r2 = t.graphic, n5 = r2 == null ? void 0 : r2.layer;
    let a2 = null;
    "subtype-sublayer" === (n5 == null ? void 0 : n5.type) && n5.parent ? a2 = n5.parent.globalIdField ?? null : n5 && "globalIdField" in n5 && (a2 = n5.globalIdField);
    const c4 = a2 ? r2 == null ? void 0 : r2.attributes[a2] : null;
    return l2 && c4 && l2 === c4;
  }
  _isParentFeature(e3) {
    var _a;
    const t = (_a = this.flowItems) == null ? void 0 : _a.getItemAt(0);
    if (!t) return false;
    const i3 = t.parentFeatureViewModel;
    return this._featureViewModelMatch(i3, e3);
  }
  _findFlowItem(e3) {
    var _a;
    return ((_a = this.flowItems) == null ? void 0 : _a.findIndex((t) => {
      if ("feature-association" !== t.flowType) return false;
      const i3 = t.viewModel;
      return this._featureViewModelMatch(i3, e3);
    })) ?? -1;
  }
  _renderTooltips(e3) {
    return e3.toArray().map((e4) => this._renderItemTooltip(e4));
  }
  _renderAssociatedFeatureList(e3) {
    return e3.toArray().map((e4) => this._renderAssociatedFeature(e4));
  }
  _renderChevronIconNode(e3) {
    return n("calcite-icon", { flipRtl: true, icon: e3 ? "move-up" : "chevron-right", scale: "s", slot: "content-end" });
  }
  _renderTypeList(e3, t) {
    const { messagesFeature: i3 } = this, { displayCount: s3 } = this.viewModel, o = t.slice(0, s3), l2 = o.length < t.length;
    return n("calcite-list-item", { key: "show-all", label: e3.title, open: true, value: e3.id }, n("calcite-chip", { label: String(t.length), scale: "s", slot: "content-end" }, t.length), n("calcite-list", { group: e3.id, label: e3.title ?? "" }, [this._renderTooltips(o), this._renderAssociatedFeatureList(o)], l2 ? n("calcite-list-item", { description: s(i3 == null ? void 0 : i3.numberRecords, { number: t.length.toString() }), key: "show-all-item", label: i3.showAll, onCalciteListItemSelect: () => this._showAllAssociations(e3) }, n("calcite-icon", { icon: "list", scale: "s", slot: "content-end" })) : null));
  }
};
r([m()], g.prototype, "description", void 0), r([m()], g.prototype, "featureVisibleElements", void 0), r([m()], g.prototype, "flowItems", void 0), r([m()], g.prototype, "flowType", void 0), r([m()], g.prototype, "listType", void 0), r([m()], g.prototype, "parentFeatureViewModel", void 0), r([m()], g.prototype, "title", void 0), r([m({ type: _ })], g.prototype, "viewModel", void 0), r([m({ type: i2, nonNullable: true })], g.prototype, "visibleElements", void 0), g = f = r([a("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")], g);
var M = g;
export {
  M as default
};
//# sourceMappingURL=FeatureUtilityNetworkAssociationList-Q43GF4BM.js.map
