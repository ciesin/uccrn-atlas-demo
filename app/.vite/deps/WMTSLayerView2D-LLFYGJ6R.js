import {
  n as n2,
  r as r3
} from "./chunk-A4V4BDUI.js";
import "./chunk-JS6F4JFY.js";
import {
  i
} from "./chunk-MV5XTDTW.js";
import "./chunk-RYF2HIUG.js";
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
import {
  p,
  r as r2
} from "./chunk-SRWZJODN.js";
import {
  h
} from "./chunk-C2Y5RHRE.js";
import "./chunk-AI444EOP.js";
import "./chunk-CTBXY22F.js";
import "./chunk-PV4EUSKO.js";
import {
  e
} from "./chunk-ZRT3UCXK.js";
import "./chunk-ANT4QPJQ.js";
import {
  g
} from "./chunk-DH57DJ4C.js";
import "./chunk-C4KYMV6K.js";
import "./chunk-HYJ4YR5G.js";
import "./chunk-5AJMZDUM.js";
import "./chunk-2MCNW6KC.js";
import "./chunk-CRKFUUKK.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-UQ4WWETM.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-ZH6PYRVF.js";
import "./chunk-VTPZW6H5.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-SUVHJC6Z.js";
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
import {
  s2 as s
} from "./chunk-LTDNORB5.js";
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

// node_modules/@arcgis/core/views/2d/layers/WMTSLayerView2D.js
var y2 = [0, 0];
var _ = class extends i(r3(S(y))) {
  constructor() {
    super(...arguments), this._tileStrategy = null, this._fetchQueue = null, this.layer = null;
  }
  get tileMatrixSet() {
    var _a;
    const { activeLayer: e2 } = this.layer, { tileMatrixSet: t } = e2;
    if (t && s((_a = t.tileInfo) == null ? void 0 : _a.spatialReference, this.view.spatialReference)) return t;
    const i2 = this._getTileMatrixSetBySpatialReference(e2);
    return i2 && i2.id !== e2.tileMatrixSetId ? (e2.tileMatrixSetId = i2.id, i2) : null;
  }
  update(e2) {
    this._fetchQueue.pause(), this._fetchQueue.state = e2.state, this._tileStrategy.update(e2), this._fetchQueue.resume();
  }
  attach() {
    var _a;
    const e2 = (_a = this.tileMatrixSet) == null ? void 0 : _a.tileInfo;
    e2 && (this._tileInfoView = new h(e2), this._fetchQueue = new p({ tileInfoView: this._tileInfoView, concurrency: 16, process: (e3, t) => this.fetchTile(e3, t), scheduler: this.scheduler, priority: g.MAPVIEW_FETCH_QUEUE }), this._tileStrategy = new r2({ cachePolicy: "keep", resampling: true, acquireTile: (e3) => this.acquireTile(e3), releaseTile: (e3) => this.releaseTile(e3), tileInfoView: this._tileInfoView }), this.addAttachHandles(this._updatingHandles.add(() => {
      var _a2, _b;
      return [(_b = (_a2 = this.layer) == null ? void 0 : _a2.activeLayer) == null ? void 0 : _b.styleId, this.tileMatrixSet];
    }, () => this.doRefresh())), super.attach());
  }
  detach() {
    var _a, _b;
    super.detach(), (_a = this._tileStrategy) == null ? void 0 : _a.destroy(), (_b = this._fetchQueue) == null ? void 0 : _b.destroy(), this._fetchQueue = this._tileStrategy = this._tileInfoView = null;
  }
  viewChange() {
    this.requestUpdate();
  }
  moveEnd() {
    this.requestUpdate();
  }
  supportsSpatialReference(e2) {
    var _a;
    return ((_a = this.layer.activeLayer.tileMatrixSets) == null ? void 0 : _a.some((t) => {
      var _a2;
      return s((_a2 = t.tileInfo) == null ? void 0 : _a2.spatialReference, e2);
    })) ?? false;
  }
  async doRefresh() {
    if (this.attached) {
      if (this.suspended) return this._tileStrategy.clear(), void this.requestUpdate();
      this._fetchQueue.reset(), this._tileStrategy.refresh((e2) => this._updatingHandles.addPromise(this._enqueueTileFetch(e2)));
    }
  }
  acquireTile(e2) {
    const t = this._bitmapView.createTile(e2), i2 = t.bitmap;
    return [i2.x, i2.y] = this._tileInfoView.getTileCoords(y2, t.key), i2.resolution = this._tileInfoView.getTileResolution(t.key), [i2.width, i2.height] = this._tileInfoView.tileInfo.size, this._updatingHandles.addPromise(this._enqueueTileFetch(t)), this._bitmapView.addChild(t), this.requestUpdate(), t;
  }
  releaseTile(e2) {
    this._fetchQueue.abort(e2.key.id), this._bitmapView.removeChild(e2), e2.once("detach", () => e2.destroy()), this.requestUpdate();
  }
  async fetchTile(e2, t = {}) {
    const s2 = "tilemapCache" in this.layer ? this.layer.tilemapCache : null, { signal: r4, resamplingLevel: a2 = 0 } = t;
    if (!s2) return this._fetchImage(e2, r4);
    const l = new e(0, 0, 0, 0);
    let o;
    try {
      await s2.fetchAvailabilityUpsample(e2.level, e2.row, e2.col, l, { signal: r4 }), o = await this._fetchImage(l, r4);
    } catch (n3) {
      if (b(n3)) throw n3;
      if (a2 < 3) {
        const i2 = this._tileInfoView.getTileParentId(e2.id);
        if (i2) {
          const s3 = new e(i2), r5 = await this.fetchTile(s3, { ...t, resamplingLevel: a2 + 1 });
          return n2(this._tileInfoView, r5, s3, e2);
        }
      }
      throw n3;
    }
    return n2(this._tileInfoView, o, l, e2);
  }
  canResume() {
    const e2 = super.canResume();
    return e2 ? null !== this.tileMatrixSet : e2;
  }
  async _enqueueTileFetch(e2) {
    if (!this._fetchQueue.has(e2.key.id)) {
      try {
        const t = await this._fetchQueue.push(e2.key);
        e2.bitmap.source = t, e2.bitmap.width = this._tileInfoView.tileInfo.size[0], e2.bitmap.height = this._tileInfoView.tileInfo.size[1], e2.once("attach", () => this.requestUpdate());
      } catch (s2) {
        b(s2) || n.getLogger(this).error(s2);
      }
      this.requestUpdate();
    }
  }
  async _fetchImage(e2, t) {
    return this.layer.fetchImageBitmapTile(e2.level, e2.row, e2.col, { signal: t });
  }
  _getTileMatrixSetBySpatialReference(e2) {
    var _a;
    return (_a = e2.tileMatrixSets) == null ? void 0 : _a.find((e3) => {
      var _a2;
      return s((_a2 = e3.tileInfo) == null ? void 0 : _a2.spatialReference, this.view.spatialReference);
    });
  }
};
r([m({ readOnly: true })], _.prototype, "tileMatrixSet", null), _ = r([a("esri.views.2d.layers.WMTSLayerView2D")], _);
var w = _;
export {
  w as default
};
//# sourceMappingURL=WMTSLayerView2D-LLFYGJ6R.js.map
