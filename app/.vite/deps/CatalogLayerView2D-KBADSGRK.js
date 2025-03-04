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
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/layers/CatalogLayerView.js
var i = (i2) => {
  let s = class extends i2 {
    constructor(...r2) {
      super(...r2), this.layerViews = new V();
    }
    get dynamicGroupLayerView() {
      return this.layerViews.find((r2) => {
        var _a;
        return r2.layer === ((_a = this.layer) == null ? void 0 : _a.dynamicGroupLayer);
      });
    }
    get footprintLayerView() {
      return this.layerViews.find((r2) => {
        var _a;
        return r2.layer === ((_a = this.layer) == null ? void 0 : _a.footprintLayer);
      });
    }
    isUpdating() {
      return !this.dynamicGroupLayerView || !this.footprintLayerView || this.dynamicGroupLayerView.updating || this.footprintLayerView.updating;
    }
  };
  return r([m()], s.prototype, "layer", void 0), r([m()], s.prototype, "layerViews", void 0), r([m({ readOnly: true })], s.prototype, "dynamicGroupLayerView", null), r([m({ readOnly: true })], s.prototype, "footprintLayerView", null), s = r([a("esri.views.layers.CatalogLayerView")], s), s;
};

// node_modules/@arcgis/core/views/2d/layers/CatalogLayerView2D.js
var l = class extends i(S(y)) {
  constructor() {
    super(...arguments), this.layerViews = new V();
  }
  update(e) {
  }
  viewChange() {
  }
  moveEnd() {
  }
  attach() {
    this.addAttachHandles([this._updatingHandles.addOnCollectionChange(() => this.layerViews, () => this._updateStageChildren(), { initial: true })]);
  }
  detach() {
    this.container.removeAllChildren();
  }
  _updateStageChildren() {
    this.container.removeAllChildren(), this.layerViews.forEach((e, r2) => this.container.addChildAt(e.container, r2));
  }
};
r([m()], l.prototype, "layerViews", void 0), l = r([a("esri.views.2d.layers.CatalogLayerView2D")], l);
var c = l;
export {
  c as default
};
//# sourceMappingURL=CatalogLayerView2D-KBADSGRK.js.map
