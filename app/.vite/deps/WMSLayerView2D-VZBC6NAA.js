import {
  _
} from "./chunk-EJAT5LLO.js";
import {
  r as r2
} from "./chunk-WVSPAK5P.js";
import "./chunk-JS6F4JFY.js";
import {
  i as i2
} from "./chunk-YX6MRK66.js";
import {
  i
} from "./chunk-MV5XTDTW.js";
import "./chunk-ZPDSNSZE.js";
import "./chunk-3SEDCXI3.js";
import {
  S
} from "./chunk-ITFP5AXT.js";
import {
  y
} from "./chunk-KMKEKOKG.js";
import "./chunk-4ATVMSVD.js";
import "./chunk-XXK557ZF.js";
import "./chunk-UPNK3SFT.js";
import "./chunk-Z7G6RNT2.js";
import "./chunk-HABQD3Y4.js";
import "./chunk-CVEV6FRQ.js";
import "./chunk-PMUCRJCT.js";
import "./chunk-DYXUUD4L.js";
import "./chunk-QHF36O7C.js";
import "./chunk-5ZG44LB7.js";
import "./chunk-3VWS6Q3L.js";
import {
  a as a2
} from "./chunk-SZVRUNBU.js";
import "./chunk-36LA23CO.js";
import "./chunk-F4RJF7LN.js";
import "./chunk-NWA7NYLF.js";
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-ZZ4UNY3F.js";
import "./chunk-EYAQDXHE.js";
import "./chunk-G3KHB63E.js";
import "./chunk-2DHEJENI.js";
import "./chunk-RD3QRDRK.js";
import "./chunk-EWSNAOW6.js";
import "./chunk-C2Y5RHRE.js";
import "./chunk-AI444EOP.js";
import "./chunk-CTBXY22F.js";
import "./chunk-PV4EUSKO.js";
import "./chunk-ZRT3UCXK.js";
import "./chunk-ANT4QPJQ.js";
import "./chunk-HYJ4YR5G.js";
import "./chunk-5AJMZDUM.js";
import "./chunk-2MCNW6KC.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-SUSOH323.js";
import "./chunk-AZYU3Z5M.js";
import "./chunk-UQ4WWETM.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-ZH6PYRVF.js";
import "./chunk-VTPZW6H5.js";
import "./chunk-D3HK4ZSW.js";
import "./chunk-WF2ACUGU.js";
import "./chunk-XEBZUAYT.js";
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
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
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
import {
  b,
  s as s2,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/layers/WMSLayerView.js
var m2 = (m3) => {
  let n2 = class extends m3 {
    initialize() {
      this.exportImageParameters = new a2({ layer: this.layer });
    }
    destroy() {
      this.exportImageParameters = u(this.exportImageParameters);
    }
    get exportImageVersion() {
      var _a;
      return (_a = this.exportImageParameters) == null ? void 0 : _a.commitProperty("version"), this.commitProperty("timeExtent"), (this._get("exportImageVersion") || 0) + 1;
    }
    get timeExtent() {
      var _a;
      return i2(this.layer, (_a = this.view) == null ? void 0 : _a.timeExtent, this._get("timeExtent"));
    }
    async fetchPopupFeaturesAtLocation(e, r3) {
      const { layer: s3 } = this;
      if (!e) throw new s("wmslayerview:fetchPopupFeatures", "Nothing to fetch without area", { layer: s3 });
      const { popupEnabled: a3 } = s3;
      if (!a3) throw new s("wmslayerview:fetchPopupFeatures", "popupEnabled should be true", { popupEnabled: a3 });
      const p = this.createFetchPopupFeaturesQuery(e);
      if (!p) return [];
      const { extent: i3, width: m4, height: n3, x: c, y: u2 } = p;
      if (!(i3 && m4 && n3)) throw new s("wmslayerview:fetchPopupFeatures", "WMSLayer does not support fetching features.", { extent: i3, width: m4, height: n3 });
      const h = await s3.fetchFeatureInfo(i3, m4, n3, c, u2);
      return s2(r3), h;
    }
  };
  return r([m()], n2.prototype, "exportImageParameters", void 0), r([m({ readOnly: true })], n2.prototype, "exportImageVersion", null), r([m()], n2.prototype, "layer", void 0), r([m({ readOnly: true })], n2.prototype, "timeExtent", null), n2 = r([a("esri.views.layers.WMSLayerView")], n2), n2;
};

// node_modules/@arcgis/core/views/2d/layers/WMSLayerView2D.js
var g = class extends m2(i(S(y))) {
  constructor() {
    super(...arguments), this.bitmapContainer = new r2();
  }
  supportsSpatialReference(e) {
    return this.layer.serviceSupportsSpatialReference(e);
  }
  update(e) {
    this.strategy.update(e).catch((e2) => {
      b(e2) || n.getLogger(this).error(e2);
    });
  }
  attach() {
    const { layer: e } = this, { imageMaxHeight: t, imageMaxWidth: r3 } = e;
    this.bitmapContainer = new r2(), this.container.addChild(this.bitmapContainer), this.strategy = new _({ container: this.bitmapContainer, fetchSource: this.fetchImage.bind(this), requestUpdate: this.requestUpdate.bind(this), imageMaxHeight: t, imageMaxWidth: r3, imageRotationSupported: false, imageNormalizationSupported: false, hidpi: false }), this.addAttachHandles(d(() => this.exportImageVersion, () => this.requestUpdate()));
  }
  detach() {
    this.strategy = u(this.strategy), this.container.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  createFetchPopupFeaturesQuery(e) {
    const { view: t, bitmapContainer: r3 } = this, { x: i3, y: s3 } = e, { spatialReference: a3 } = t;
    let o, p = 0, m3 = 0;
    if (r3.children.some((e2) => {
      const { width: t2, height: r4, resolution: h2, x: c2, y: d3 } = e2, u2 = c2 + h2 * t2, g2 = d3 - h2 * r4;
      return i3 >= c2 && i3 <= u2 && s3 <= d3 && s3 >= g2 && (o = new w({ xmin: c2, ymin: g2, xmax: u2, ymax: d3, spatialReference: a3 }), p = t2, m3 = r4, true);
    }), !o) return null;
    const h = o.width / p, c = Math.round((i3 - o.xmin) / h), d2 = Math.round((o.ymax - s3) / h);
    return { extent: o, width: p, height: m3, x: c, y: d2 };
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this.strategy.updating || this.updateRequested;
  }
  fetchImage(e, t, r3, i3) {
    return this.layer.fetchImageBitmap(e, t, r3, { timeExtent: this.timeExtent, ...i3 });
  }
};
r([m()], g.prototype, "strategy", void 0), r([m()], g.prototype, "updating", void 0), g = r([a("esri.views.2d.layers.WMSLayerView2D")], g);
var y2 = g;
export {
  y2 as default
};
//# sourceMappingURL=WMSLayerView2D-VZBC6NAA.js.map
