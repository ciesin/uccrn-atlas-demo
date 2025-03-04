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
import {
  r as r2
} from "./chunk-STBNLAGT.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-MLOZK7WX.js";
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
import "./chunk-YSPSOPLL.js";
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
import {
  d,
  e,
  k,
  t
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/layers/CatalogDynamicGroupLayerView.js
var l = Symbol();
var u = (u2) => {
  let y2 = class extends u2 {
    constructor() {
      super(...arguments), this.layerViews = new V(), this._debouncedUpdate = k(async () => {
        const { layer: e2, parent: r3 } = this, t2 = r3 == null ? void 0 : r3.footprintLayerView;
        let s = [];
        const i2 = this._createQuery();
        if (i2 && t2) {
          const { features: r4 } = await t2.queryFeatures(i2);
          this.suspended || (s = r4.map((r5) => e2.acquireLayer(r5)));
        }
        this.removeHandles(l), this.addHandles(s, l);
      });
    }
    get creatingLayerViews() {
      var _a;
      return ((_a = this.view) == null ? void 0 : _a.layerViewManager.isCreatingLayerViewsForLayer(this.layer)) ?? false;
    }
    isUpdating() {
      return this.creatingLayerViews || this.layer.updating || this.layerViews.some((e2) => e2.updating);
    }
    enableLayerUpdates() {
      return t([this._updatingHandles.addWhen(() => {
        var _a, _b;
        return false === ((_b = (_a = this.parent) == null ? void 0 : _a.footprintLayerView) == null ? void 0 : _b.dataUpdating);
      }, () => this.updateLayers()), this._updatingHandles.add(() => {
        var _a, _b, _c, _d, _e;
        return [this.layer.maximumVisibleSublayers, (_a = this.layer.parent) == null ? void 0 : _a.orderBy, (_c = (_b = this.parent) == null ? void 0 : _b.footprintLayerView) == null ? void 0 : _c.filter, (_e = (_d = this.parent) == null ? void 0 : _d.footprintLayerView) == null ? void 0 : _e.timeExtent, this.suspended];
      }, () => this.updateLayers()), e(() => this.removeHandles(l))]);
    }
    updateLayers() {
      this.suspended ? this.removeHandles(l) : this._updatingHandles.addPromise(d(this._debouncedUpdate()).catch((e2) => {
        n.getLogger(this).error(e2);
      }));
    }
    _createQuery() {
      var _a, _b;
      const e2 = (_a = this.parent) == null ? void 0 : _a.footprintLayerView, r3 = (_b = this.layer) == null ? void 0 : _b.parent;
      if (!e2 || !r3 || r3.destroyed) return null;
      const { layer: { maximumVisibleSublayers: t2 }, view: { scale: s } } = this;
      if (!t2) return null;
      const { itemTypeField: i2, itemSourceField: a2, itemNameField: o, minScaleField: d2, maxScaleField: p, objectIdField: l2, orderBy: u3 } = r3, y3 = r2(`${d2} IS NULL OR ${s} <= ${d2} OR ${d2} = 0`, `${p} IS NULL OR ${s} >= ${p}`), c2 = u3 == null ? void 0 : u3.find((e3) => e3.field && !e3.valueExpression), m2 = e2.createQuery();
      if (m2.returnGeometry = false, m2.num = t2, m2.outFields = [l2, a2, o], m2.where = r2(m2.where, y3), null != this.unsupportedItemTypes) {
        const e3 = `${i2} NOT IN (${this.unsupportedItemTypes.map((e4) => `'${e4}'`)})`;
        m2.where = r2(m2.where, e3);
      }
      return (c2 == null ? void 0 : c2.field) && (m2.orderByFields = [`${c2.field} ${"descending" === c2.order ? "DESC" : "ASC"}`], m2.outFields.push(c2.field)), m2;
    }
  };
  return r([m({ readOnly: true })], y2.prototype, "creatingLayerViews", null), r([m()], y2.prototype, "layer", void 0), r([m()], y2.prototype, "layerViews", void 0), r([m({ readOnly: true })], y2.prototype, "unsupportedItemTypes", void 0), r([m()], y2.prototype, "parent", void 0), r([m({ readOnly: true })], y2.prototype, "isUpdating", null), y2 = r([a("esri.views.layers.CatalogDynamicGroupLayerView")], y2), y2;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogDynamicGroupLayerView2D.js
var i = class extends u(S(y)) {
  constructor() {
    super(...arguments), this.unsupportedItemTypes = ["Scene Service"], this.layerViews = new V();
  }
  attach() {
    this.addAttachHandles([this.layerViews.on("after-changes", () => this._updateStageChildren()), this.enableLayerUpdates()]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  update(e2) {
    this.updateLayers();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e2, r3) => this.container.addChildAt(e2.container, r3));
  }
};
i = r([a("esri.views.2d.layers.CatalogDynamicGroupLayerView2D")], i);
var c = i;
export {
  c as default
};
//# sourceMappingURL=CatalogDynamicGroupLayerView2D-HFBQEHKB.js.map
