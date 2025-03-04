import {
  S
} from "./chunk-ITFP5AXT.js";
import {
  y
} from "./chunk-KMKEKOKG.js";
import "./chunk-4ATVMSVD.js";
import "./chunk-F4RJF7LN.js";
import "./chunk-2DHEJENI.js";
import "./chunk-RD3QRDRK.js";
import "./chunk-EWSNAOW6.js";
import "./chunk-PV4EUSKO.js";
import "./chunk-ANT4QPJQ.js";
import "./chunk-5AJMZDUM.js";
import "./chunk-2MCNW6KC.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-UQ4WWETM.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-VTPZW6H5.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import {
  n,
  t
} from "./chunk-MLOZK7WX.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import {
  C,
  d
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
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
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/layers/GroupLayerView.js
var h = class extends y {
  constructor(i) {
    super(i), this.type = "group", this.layerViews = new V();
  }
  destroy() {
    this.layerViews.length = 0;
  }
  _allLayerViewVisibility(i) {
    this.layerViews.forEach((e) => {
      e.visible = i;
    });
  }
  initialize() {
    this.addHandles([this.layerViews.on("change", (i) => this._layerViewsChangeHandler(i)), d(() => {
      var _a;
      return (_a = this.layer) == null ? void 0 : _a.visibilityMode;
    }, () => {
      this.layer && this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility(null));
    }, C), d(() => this.visible, (i) => {
      this._applyVisibility(() => this._allLayerViewVisibility(i), () => {
      });
    }, C)], "grouplayerview"), this._layerViewsChangeHandler({ target: null, added: this.layerViews.toArray(), removed: [], moved: [] });
  }
  get creatingLayerViews() {
    var _a, _b;
    return ((_b = (_a = this.view) == null ? void 0 : _a.layerViewManager) == null ? void 0 : _b.isCreatingLayerViewsForLayer(this.layer)) ?? false;
  }
  set layerViews(i) {
    this._set("layerViews", n(i, this._get("layerViews")));
  }
  get updatingProgress() {
    return 0 === this.layerViews.length ? 1 : this.layerViews.reduce((i, e) => i + e.updatingProgress, 0) / this.layerViews.length;
  }
  isUpdating() {
    return this.creatingLayerViews || this.layerViews.some((i) => i.updating);
  }
  _hasLayerViewVisibleOverrides() {
    return this.layerViews.some((i) => i._isOverridden("visible"));
  }
  _findLayerViewForLayer(i) {
    return i && this.layerViews.find((e) => e.layer === i);
  }
  _firstVisibleOnLayerOrder() {
    const i = this.layer.layers.find((i2) => {
      const e = this._findLayerViewForLayer(i2);
      return !!(e == null ? void 0 : e.visible);
    });
    return i && this._findLayerViewForLayer(i);
  }
  _applyExclusiveVisibility(i) {
    null == i && null == (i = this._firstVisibleOnLayerOrder()) && this.layerViews.length > 0 && (i = this._findLayerViewForLayer(this.layer.layers.at(0))), this.layerViews.forEach((e) => {
      e.visible = e === i;
    });
  }
  _layerViewsChangeHandler(i) {
    this.removeHandles("grouplayerview:visible"), this.addHandles(this.layerViews.map((i2) => d(() => i2.visible, (e2) => this._applyVisibility(() => {
      e2 !== this.visible && (i2.visible = this.visible);
    }, () => this._applyExclusiveVisibility(e2 ? i2 : null)), C)).toArray(), "grouplayerview:visible");
    const e = i.added[i.added.length - 1];
    this._applyVisibility(() => this._allLayerViewVisibility(this.visible), () => this._applyExclusiveVisibility((e == null ? void 0 : e.visible) ? e : null));
  }
  _applyVisibility(i, e) {
    var _a, _b;
    this._hasLayerViewVisibleOverrides() && ("inherited" === ((_a = this.layer) == null ? void 0 : _a.visibilityMode) ? i() : "exclusive" === ((_b = this.layer) == null ? void 0 : _b.visibilityMode) && e());
  }
};
r([m({ readOnly: true })], h.prototype, "creatingLayerViews", null), r([m({ cast: t })], h.prototype, "layerViews", null), r([m({ readOnly: true })], h.prototype, "updatingProgress", null), r([m()], h.prototype, "view", void 0), h = r([a("esri.views.layers.GroupLayerView")], h);
var n2 = h;

// node_modules/@arcgis/core/views/2d/layers/GroupLayerView2D.js
var a2 = class extends S(n2) {
  attach() {
    this._updateStageChildren(), this.addAttachHandles(this.layerViews.on("after-changes", () => this._updateStageChildren()));
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, r2) => this.container.addChildAt(e.container, r2));
  }
};
a2 = r([a("esri.views.2d.layers.GroupLayerView2D")], a2);
var o = a2;
export {
  o as default
};
//# sourceMappingURL=GroupLayerView2D-ISJC4R4A.js.map
