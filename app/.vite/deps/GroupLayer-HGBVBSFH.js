import {
  e as e2
} from "./chunk-EYAQDXHE.js";
import {
  v as v2
} from "./chunk-4PVY4P6G.js";
import "./chunk-67LQ5CPZ.js";
import "./chunk-YYNCM4H6.js";
import {
  r as r3
} from "./chunk-QCTBKAKN.js";
import {
  a as a3
} from "./chunk-HKHKDBUI.js";
import "./chunk-EWFN6VXR.js";
import "./chunk-F7A3OWWW.js";
import {
  A as A2
} from "./chunk-3S47CK7X.js";
import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-EMADK6RJ.js";
import "./chunk-VY225BNN.js";
import {
  p
} from "./chunk-LGG5FPVD.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import {
  t as t3
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import {
  l,
  l2,
  t as t4
} from "./chunk-WNY2UW4Q.js";
import {
  g
} from "./chunk-QFZTZSQW.js";
import {
  t as t2
} from "./chunk-3C7TTTUX.js";
import {
  n as n2
} from "./chunk-45XNKFWX.js";
import "./chunk-MLOZK7WX.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import {
  S
} from "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  r as r2
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import {
  A,
  C,
  d,
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
  e,
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
import {
  t
} from "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  a as a2,
  k
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/GroupLayer.js
var C2 = class extends p(t3(b(j(l2(l(S2(f))))))) {
  constructor(e3) {
    super(e3), this.allLayers = new n2({ getCollections: () => [this.layers], getChildrenFunction: (e4) => "layers" in e4 ? e4.layers : null }), this.allTables = t4(this), this.fullExtent = void 0, this.operationalLayerType = "GroupLayer", this.spatialReference = void 0, this.type = "group", this._debouncedSaveOperations = k(async (e4, r4, t5) => {
      const { save: i, saveAs: s } = await import("./groupLayerUtils-VDGRNWUR.js");
      switch (e4) {
        case A2.SAVE:
          return i(this, r4);
        case A2.SAVE_AS:
          return s(this, t5, r4);
      }
    });
  }
  initialize() {
    this._enforceVisibility(this.visibilityMode, this.visible), this.addHandles([d(() => {
      let e3 = this.parent;
      for (; e3 && "parent" in e3 && e3.parent; ) e3 = e3.parent;
      return e3 && e2 in e3;
    }, (e3) => {
      const r4 = "prevent-adding-tables";
      this.removeHandles(r4), e3 && (this.tables.removeAll(), this.addHandles(v(() => this.tables, "before-add", (e4) => {
        e4.preventDefault(), n.getLogger(this).errorOnce("tables", "tables in group layers in a webscene are not supported. Please move the tables from the group layer to the webscene if you want to persist them.");
      }), r4));
    }, A), d(() => this.visible, this._onVisibilityChange.bind(this), C)]);
  }
  destroy() {
    this.allLayers.destroy(), this.allTables.destroy();
  }
  get sourceIsPortalItem() {
    return this.portalItem && this.originIdOf("portalItem") === e.USER;
  }
  _writeLayers(e3, r4, t5, i) {
    const s = [];
    if (!e3) return s;
    e3.forEach((e4) => {
      const r5 = g(e4, i.webmap ? i.webmap.getLayerJSONFromResourceInfo(e4) : null, i);
      (r5 == null ? void 0 : r5.layerType) && s.push(r5);
    }), r4.layers = s;
  }
  set portalItem(e3) {
    this._set("portalItem", e3);
  }
  readPortalItem(e3, r4, t5) {
    const { itemId: i, layerType: s } = r4;
    if ("GroupLayer" === s && i) return new S({ id: i, portal: t5 == null ? void 0 : t5.portal });
  }
  writePortalItem(e3, r4) {
    (e3 == null ? void 0 : e3.id) && (r4.itemId = e3.id);
  }
  set visibilityMode(e3) {
    const r4 = this._get("visibilityMode") !== e3;
    this._set("visibilityMode", e3), r4 && this._enforceVisibility(e3, this.visible);
  }
  async beforeSave() {
    return r3(this);
  }
  load(e3) {
    const r4 = this.loadFromPortal({ supportedTypes: ["Feature Service", "Feature Collection", "Group Layer", "Scene Service"], layerModuleTypeMap: a3, populateGroupLayer: v2 }, e3).catch((e4) => {
      if (a2(e4), this.sourceIsPortalItem) throw e4;
    });
    return this.addResolvingPromise(r4), Promise.resolve(this);
  }
  async loadAll() {
    return t2(this, (e3) => {
      e3(this.layers, this.tables);
    });
  }
  async save(e3) {
    return this._debouncedSaveOperations(A2.SAVE, e3);
  }
  async saveAs(e3, r4) {
    return this._debouncedSaveOperations(A2.SAVE_AS, r4, e3);
  }
  layerAdded(e3) {
    e3.visible && "exclusive" === this.visibilityMode ? this._turnOffOtherLayers(e3) : "inherited" === this.visibilityMode && (e3.visible = this.visible), this.hasHandles(e3.uid) ? console.error(`Layer read to Grouplayer: uid=${e3.uid}`) : this.addHandles(d(() => e3.visible, (r4) => this._onChildVisibilityChange(e3, r4), C), e3.uid);
  }
  layerRemoved(e3) {
    this.removeHandles(e3.uid), this._enforceVisibility(this.visibilityMode, this.visible);
  }
  _turnOffOtherLayers(e3) {
    this.layers.forEach((r4) => {
      r4 !== e3 && (r4.visible = false);
    });
  }
  _enforceVisibility(e3, r4) {
    if (!t(this).initialized) return;
    const t5 = this.layers;
    let i = t5.find((e4) => e4.visible);
    switch (e3) {
      case "exclusive":
        t5.length && !i && (i = t5.at(0), i.visible = true), this._turnOffOtherLayers(i);
        break;
      case "inherited":
        t5.forEach((e4) => {
          e4.visible = r4;
        });
    }
  }
  _onVisibilityChange(e3) {
    "inherited" === this.visibilityMode && this.layers.forEach((r4) => {
      r4.visible = e3;
    });
  }
  _onChildVisibilityChange(e3, r4) {
    switch (this.visibilityMode) {
      case "exclusive":
        r4 ? this._turnOffOtherLayers(e3) : this._isAnyLayerVisible() || (e3.visible = true);
        break;
      case "inherited":
        e3.visible = this.visible;
    }
  }
  _isAnyLayerVisible() {
    return this.layers.some((e3) => e3.visible);
  }
};
r([m({ readOnly: true, dependsOn: [] })], C2.prototype, "allLayers", void 0), r([m({ readOnly: true })], C2.prototype, "allTables", void 0), r([m({ json: { read: true, write: true } })], C2.prototype, "blendMode", void 0), r([m()], C2.prototype, "fullExtent", void 0), r([m({ readOnly: true })], C2.prototype, "sourceIsPortalItem", null), r([m({ json: { read: false, write: { ignoreOrigin: true } } })], C2.prototype, "layers", void 0), r([r2("layers")], C2.prototype, "_writeLayers", null), r([m({ type: ["GroupLayer"] })], C2.prototype, "operationalLayerType", void 0), r([m({ json: { origins: { "web-map": { read: false, write: { overridePolicy(e3, r4, t5) {
  return { enabled: "Group Layer" === (e3 == null ? void 0 : e3.type) && (t5 == null ? void 0 : t5.initiator) !== this };
} } }, "web-scene": { read: false, write: false } } } })], C2.prototype, "portalItem", null), r([o("web-map", "portalItem", ["itemId"])], C2.prototype, "readPortalItem", null), r([r2("web-map", "portalItem", { itemId: { type: String } })], C2.prototype, "writePortalItem", null), r([m()], C2.prototype, "spatialReference", void 0), r([m({ json: { read: false }, readOnly: true, value: "group" })], C2.prototype, "type", void 0), r([m({ type: ["independent", "inherited", "exclusive"], value: "independent", json: { write: true, origins: { "web-map": { type: ["independent", "exclusive"], write: (e3, r4, t5) => {
  "inherited" !== e3 && (r4[t5] = e3);
} } } } })], C2.prototype, "visibilityMode", null), C2 = r([a("esri.layers.GroupLayer")], C2);
var E = C2;
export {
  E as default
};
//# sourceMappingURL=GroupLayer-HGBVBSFH.js.map
