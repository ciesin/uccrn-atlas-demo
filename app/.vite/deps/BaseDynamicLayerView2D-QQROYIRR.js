import {
  _
} from "./chunk-EJAT5LLO.js";
import {
  r as r2
} from "./chunk-WVSPAK5P.js";
import "./chunk-JS6F4JFY.js";
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
import "./chunk-36LA23CO.js";
import "./chunk-F4RJF7LN.js";
import "./chunk-NWA7NYLF.js";
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-ZZ4UNY3F.js";
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
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
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
  b
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/2d/layers/BaseDynamicLayerView2D.js
var m2 = class extends i(S(y)) {
  update(t) {
    this._strategy.update(t).catch((t2) => {
      b(t2) || n.getLogger(this).error(t2);
    }), this.notifyChange("updating");
  }
  attach() {
    this._bitmapContainer = new r2(), this.container.addChild(this._bitmapContainer), this._strategy = new _({ container: this._bitmapContainer, fetchSource: this.fetchBitmapData.bind(this), requestUpdate: this.requestUpdate.bind(this) });
  }
  detach() {
    this._strategy.destroy(), this._strategy = null, this.container.removeChild(this._bitmapContainer), this._bitmapContainer.removeAllChildren();
  }
  viewChange() {
  }
  moveEnd() {
    this.requestUpdate();
  }
  fetchBitmapData(t, e, r3) {
    return this.layer.fetchImageBitmap(t, e, r3);
  }
  async doRefresh() {
    this.requestUpdate();
  }
  isUpdating() {
    return this._strategy.updating || this.updateRequested;
  }
};
r([m()], m2.prototype, "_strategy", void 0), r([m()], m2.prototype, "updating", void 0), m2 = r([a("esri.views.2d.layers.BaseDynamicLayerView2D")], m2);
var d = m2;
export {
  d as default
};
//# sourceMappingURL=BaseDynamicLayerView2D-QQROYIRR.js.map
