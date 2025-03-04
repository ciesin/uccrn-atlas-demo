import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  S
} from "./chunk-JLW377TH.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
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
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
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
import {
  A
} from "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/UnsupportedLayer.js
var a2 = class extends j(S(f)) {
  constructor(e) {
    super(e), this.resourceInfo = null, this.persistenceEnabled = true, this.type = "unsupported";
  }
  initialize() {
    this.addResolvingPromise(new Promise((e, o) => {
      A(() => {
        const e2 = this.resourceInfo && (this.resourceInfo.layerType || this.resourceInfo.type);
        let s2 = "Unsupported layer type";
        e2 && (s2 += " " + e2), o(new s("layer:unsupported-layer-type", s2, { layerType: e2 }));
      });
    }));
  }
  read(e, r2) {
    const o = { resourceInfo: e };
    null != e.id && (o.id = e.id), null != e.title && (o.title = e.title), super.read(o, r2);
  }
  write(e, r2) {
    return Object.assign(e || {}, this.resourceInfo, { id: this.id });
  }
};
r([m({ readOnly: true })], a2.prototype, "resourceInfo", void 0), r([m({ type: ["show", "hide"] })], a2.prototype, "listMode", void 0), r([m({ type: Boolean, readOnly: false })], a2.prototype, "persistenceEnabled", void 0), r([m({ json: { read: false }, readOnly: true, value: "unsupported" })], a2.prototype, "type", void 0), a2 = r([a("esri.layers.UnsupportedLayer")], a2);
var l = a2;
export {
  l as default
};
//# sourceMappingURL=UnsupportedLayer-WYAWIQ2V.js.map
