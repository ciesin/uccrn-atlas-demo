import {
  $,
  Z,
  w as w2
} from "./chunk-PFFYYIYN.js";
import {
  E,
  R,
  c as c2,
  d,
  l as l2,
  s as s2,
  u as u2
} from "./chunk-UMYFDXOJ.js";
import {
  i
} from "./chunk-3VG7BBW5.js";
import {
  e
} from "./chunk-2O2K2GAF.js";
import {
  l
} from "./chunk-LJBNLWJN.js";
import {
  j
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  c,
  y
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
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
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import {
  n as n2,
  r as r2
} from "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  M
} from "./chunk-6P7HXSJ6.js";
import {
  u
} from "./chunk-LTDNORB5.js";
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
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
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
  a as a2
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/IntegratedMesh3DTilesLayer.js
var N = class extends l(b(j(t(S(e(i(f))))))) {
  constructor(e2) {
    super(e2), this.operationalLayerType = "IntegratedMesh3DTilesLayer", this.spatialReference = new g({ wkid: 4326, vcsWkid: 115700 }), this.fullExtent = new w(-180, -90, 180, 90, this.spatialReference), this.url = null, this.type = "integrated-mesh-3dtiles", this.path = null, this.minScale = 0, this.maxScale = 0;
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  _verifyArray(e2, t2) {
    if (!Array.isArray(e2) || e2.length < t2) return false;
    for (const r3 of e2) if ("number" != typeof r3) return false;
    return true;
  }
  _initFullExtent(e2) {
    var _a, _b;
    const t2 = (_a = e2.root) == null ? void 0 : _a.boundingVolume;
    if (!t2) return;
    if (t2.box) {
      const e3 = t2 == null ? void 0 : t2.box;
      if (e3[3] > 7972671 && e3[7] > 7972671 && e3[11] > 7945940) return;
    }
    const r3 = (_b = e2.root) == null ? void 0 : _b.transform, i2 = n2();
    if (t2.region && this._verifyArray(t2.region, 6)) {
      const e3 = t2.region, r4 = M(e3[0]), i3 = M(e3[1]), s3 = e3[4], a3 = M(e3[2]), n3 = M(e3[3]), m2 = e3[5];
      this.fullExtent = new w({ xmin: r4, ymin: i3, zmin: s3, xmax: a3, ymax: n3, zmax: m2, spatialReference: this.spatialReference });
    } else if (t2.sphere && this._verifyArray(t2.sphere, 4)) {
      const e3 = t2.sphere, o2 = r2(e3[0], e3[1], e3[2]), s3 = e3[3] / Math.sqrt(3), a3 = n2();
      c2(a3, o2, r2(s3, s3, s3));
      const n3 = n2();
      if (u2(n3, o2, r2(s3, s3, s3)), r3 && this._verifyArray(r3, 16)) {
        const e4 = r3;
        E(i2, a3, e4), s2(a3, i2), E(i2, n3, e4), s2(n3, i2);
      }
      o(a3, u, 0, a3, g.WGS84, 0), o(n3, u, 0, n3, g.WGS84, 0);
      const m2 = n2(), u3 = n2();
      l2(m2, a3, n3), d(u3, a3, n3), this.fullExtent = new w({ xmin: m2[0], ymin: m2[1], zmin: m2[2], xmax: u3[0], ymax: u3[1], zmax: u3[2], spatialReference: this.spatialReference });
    } else if (t2.box && this._verifyArray(t2.box, 12)) {
      const e3 = t2.box, i3 = r2(e3[0], e3[1], e3[2]), o2 = r2(e3[3], e3[4], e3[5]), s3 = r2(e3[6], e3[7], e3[8]), a3 = r2(e3[9], e3[10], e3[11]), n3 = [];
      for (let t3 = 0; t3 < 8; ++t3) n3.push(n2());
      if (u2(n3[0], i3, o2), u2(n3[0], n3[0], s3), u2(n3[0], n3[0], a3), R(n3[1], i3, o2), u2(n3[1], n3[1], s3), u2(n3[1], n3[1], a3), u2(n3[2], i3, o2), R(n3[2], n3[2], s3), u2(n3[2], n3[2], a3), R(n3[3], i3, o2), R(n3[3], n3[3], s3), u2(n3[3], n3[3], a3), u2(n3[4], i3, o2), u2(n3[4], n3[4], s3), R(n3[4], n3[4], a3), R(n3[5], i3, o2), u2(n3[5], n3[5], s3), R(n3[5], n3[5], a3), u2(n3[6], i3, o2), R(n3[6], n3[6], s3), R(n3[6], n3[6], a3), R(n3[7], i3, o2), R(n3[7], n3[7], s3), R(n3[7], n3[7], a3), r3 && this._verifyArray(r3, 16)) {
        const e4 = r3;
        for (let t3 = 0; t3 < 8; ++t3) E(n3[t3], n3[t3], e4);
      }
      const m2 = r2(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE), p = r2(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      for (let t3 = 0; t3 < 8; ++t3) o(n3[t3], u, 0, n3[t3], g.WGS84, 0), l2(p, p, n3[t3]), d(m2, m2, n3[t3]);
      this.fullExtent = new w({ xmin: p[0], ymin: p[1], zmin: p[2], xmax: m2[0], ymax: m2[1], zmax: m2[2], spatialReference: this.spatialReference });
    }
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const i2 = null != e2 ? e2.signal : null;
    try {
      await this.loadFromPortal({ supportedTypes: ["3DTiles Service"], validateItem: (e3) => {
        var _a;
        if ((_a = e3.typeKeywords) == null ? void 0 : _a.includes("IntegratedMesh")) return true;
        throw new s("portal:invalid-layer-item-type", "Invalid layer item, expected '${expectedType}' ", { expectedType: "3DTiles Service containing IntegratedMesh" });
      } }, e2);
    } catch (o2) {
      a2(o2);
    }
    if (this.url) {
      const e3 = P(this.url, { query: { f: "json", ...this.customParameters, token: this.apiKey }, responseType: "json", signal: i2 }).then((e4) => {
        this._initFullExtent(e4.data);
      }, (e4) => {
        a2(e4);
      });
      await e3;
    }
  }
  async fetchAttributionData() {
    return this.load().then(() => ({}));
  }
  _validateElevationInfo(e2) {
    const t2 = "Integrated mesh 3d tiles layers";
    $(n.getLogger(this), Z(t2, "absolute-height", e2)), $(n.getLogger(this), w2(t2, e2));
  }
};
r([m({ type: ["IntegratedMesh3DTilesLayer"] })], N.prototype, "operationalLayerType", void 0), r([m({ type: g })], N.prototype, "spatialReference", void 0), r([m({ type: w })], N.prototype, "fullExtent", void 0), r([m(c)], N.prototype, "elevationInfo", null), r([m({ type: ["show", "hide"] })], N.prototype, "listMode", void 0), r([m(y)], N.prototype, "url", void 0), r([m({ readOnly: true })], N.prototype, "type", void 0), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], N.prototype, "path", void 0), r([m({ type: Number, json: { name: "layerDefinition.minScale", write: true, origins: { service: { read: false, write: false } } } })], N.prototype, "minScale", void 0), r([m({ type: Number, json: { name: "layerDefinition.maxScale", write: true, origins: { service: { read: false, write: false } } } })], N.prototype, "maxScale", void 0), N = r([a("esri.layers.IntegratedMesh3DTilesLayer")], N);
var P2 = N;
export {
  P2 as default
};
//# sourceMappingURL=IntegratedMesh3DTilesLayer-4X7VT46R.js.map
