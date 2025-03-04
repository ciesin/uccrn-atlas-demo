import {
  v as v2
} from "./chunk-FSXB4GOR.js";
import "./chunk-IN4KKF4A.js";
import {
  a as a4,
  m as m2,
  p as p2,
  y
} from "./chunk-MIBVU3UX.js";
import {
  R,
  V as V2
} from "./chunk-ITIVGI42.js";
import {
  $,
  Z,
  w
} from "./chunk-PFFYYIYN.js";
import "./chunk-VLPXOXHN.js";
import "./chunk-ELTPMWLT.js";
import "./chunk-PZ5WNCF2.js";
import "./chunk-QCTBKAKN.js";
import "./chunk-ZJ7EGTR4.js";
import "./chunk-JOUVYFAY.js";
import {
  i
} from "./chunk-3VG7BBW5.js";
import {
  e
} from "./chunk-2O2K2GAF.js";
import {
  l
} from "./chunk-LJBNLWJN.js";
import "./chunk-ACFHOOS7.js";
import {
  j as j2
} from "./chunk-7FOAM45I.js";
import "./chunk-VY225BNN.js";
import {
  t
} from "./chunk-DWXK7D3B.js";
import {
  b
} from "./chunk-EW3YCVZI.js";
import {
  c
} from "./chunk-WZ7EFR6C.js";
import "./chunk-CVABZLLM.js";
import "./chunk-DDEXP7LW.js";
import "./chunk-KWOLBNIK.js";
import {
  S as S2
} from "./chunk-JLW377TH.js";
import "./chunk-TGMFGDP6.js";
import "./chunk-775V3L2A.js";
import {
  L,
  sn
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WLGGSXQY.js";
import {
  j
} from "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-5EWD56QJ.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-XWXWIBVO.js";
import {
  f
} from "./chunk-NTUX5M6N.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-IP4HFFRO.js";
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
  C,
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-7LY6RE4Z.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  p
} from "./chunk-UFBX3XSC.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2,
  s2 as s
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
  a as a3
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  a,
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/support/SceneModification.js
var m3;
var f2 = m3 = class extends S {
  constructor(e2) {
    super(e2), this.geometry = null, this.type = "clip";
  }
  writeGeometry(e2, r3, o2, s3) {
    var _a;
    if (((_a = s3.layer) == null ? void 0 : _a.spatialReference) && !s3.layer.spatialReference.equals(this.geometry.spatialReference)) {
      if (!L(e2.spatialReference, s3.layer.spatialReference)) return void ((s3 == null ? void 0 : s3.messages) && s3.messages.push(new s("scenemodification:unsupported", "Scene modifications with incompatible spatial references are not supported", { modification: this, spatialReference: s3.layer.spatialReference, context: s3 })));
      const p3 = new j();
      sn(e2, p3, s3.layer.spatialReference), r3[o2] = p3.toJSON(s3);
    } else r3[o2] = e2.toJSON(s3);
    delete r3[o2].spatialReference;
  }
  clone() {
    return new m3({ geometry: a(this.geometry), type: this.type });
  }
};
r([m({ type: j }), v2()], f2.prototype, "geometry", void 0), r([r2(["web-scene", "portal-item"], "geometry")], f2.prototype, "writeGeometry", null), r([m({ type: ["clip", "mask", "replace"], nonNullable: true }), v2()], f2.prototype, "type", void 0), f2 = m3 = r([a2("esri.layers.support.SceneModification")], f2);
var y2 = f2;

// node_modules/@arcgis/core/layers/support/SceneModifications.js
var n2;
var m4 = n2 = class extends S.JSONSupportMixin(V.ofType(y2)) {
  constructor(r3) {
    super(r3), this.url = null;
  }
  clone() {
    return new n2({ url: this.url, items: this.items.map((r3) => r3.clone()) });
  }
  toJSON(r3) {
    return this.toArray().map((o2) => o2.toJSON(r3)).filter((r4) => !!r4.geometry);
  }
  static fromJSON(r3, o2) {
    const t2 = new n2();
    for (const e2 of r3) t2.add(y2.fromJSON(e2, o2));
    return t2;
  }
  static async fromUrl(r3, t2, e2) {
    const i2 = { url: I(r3), origin: "service" }, c2 = await P(r3, { responseType: "json", signal: e2 == null ? void 0 : e2.signal }), m5 = t2.toJSON(), a6 = [];
    for (const o2 of c2.data) a6.push(y2.fromJSON({ ...o2, geometry: { ...o2.geometry, spatialReference: m5 } }, i2));
    return new n2({ url: r3, items: a6 });
  }
};
r([m({ type: String })], m4.prototype, "url", void 0), m4 = n2 = r([a2("esri.layers.support.SceneModifications")], m4);
var a5 = m4;

// node_modules/@arcgis/core/layers/IntegratedMeshLayer.js
var A = class extends R(l(b(j2(t(S2(e(i(f)))))))) {
  constructor(...e2) {
    super(...e2), this.geometryType = "mesh", this.operationalLayerType = "IntegratedMeshLayer", this.type = "integrated-mesh", this.nodePages = null, this.materialDefinitions = null, this.textureSetDefinitions = null, this.geometryDefinitions = null, this.serviceUpdateTimeStamp = null, this.profile = "mesh-pyramids", this.modifications = null, this._modificationsSource = null, this.path = null, this.definitionExpression = null;
  }
  initialize() {
    this.addHandles(v(() => this.modifications, "after-changes", () => this.modifications = this.modifications, C));
  }
  normalizeCtorArgs(e2, t2) {
    return "string" == typeof e2 ? { url: e2, ...t2 } : e2;
  }
  readModifications(e2, t2, o2) {
    this._modificationsSource = { url: p(e2, o2), context: o2 };
  }
  set elevationInfo(e2) {
    null != e2 && "absolute-height" !== e2.mode || this._set("elevationInfo", e2), this._validateElevationInfo(e2);
  }
  async load(e2) {
    return this.addResolvingPromise(this._doLoad(e2)), this;
  }
  async _doLoad(e2) {
    const t2 = e2 == null ? void 0 : e2.signal;
    try {
      await this.loadFromPortal({ supportedTypes: ["Scene Service"] }, e2);
    } catch (o2) {
      a3(o2);
    }
    if (await this._fetchService(t2), null != this._modificationsSource) {
      const t3 = await a5.fromUrl(this._modificationsSource.url, this.spatialReference, e2);
      this.setAtOrigin("modifications", t3, this._modificationsSource.context.origin), this._modificationsSource = null;
    }
    await this._fetchIndexAndUpdateExtent(this.nodePages, t2);
  }
  beforeSave() {
    if (null != this._modificationsSource) return this.load().then(() => {
    }, () => {
    });
  }
  async saveAs(e2, t2) {
    return this._debouncedSaveOperations(V2.SAVE_AS, { ...t2, getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" }, e2);
  }
  async save() {
    const e2 = { getTypeKeywords: () => this._getTypeKeywords(), portalItemLayerType: "integrated-mesh" };
    return this._debouncedSaveOperations(V2.SAVE, e2);
  }
  validateLayer(e2) {
    if (e2.layerType && "IntegratedMesh" !== e2.layerType) throw new s2("integrated-mesh-layer:layer-type-not-supported", "IntegratedMeshLayer does not support this layer type", { layerType: e2.layerType });
    if (isNaN(this.version.major) || isNaN(this.version.minor)) throw new s2("layer:service-version-not-supported", "Service version is not supported.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
    if (this.version.major > 1) throw new s2("layer:service-version-too-new", "Service version is too new.", { serviceVersion: this.version.versionString, supportedVersions: "1.x" });
  }
  _getTypeKeywords() {
    return ["IntegratedMeshLayer"];
  }
  _validateElevationInfo(e2) {
    const t2 = "Integrated mesh layers";
    $(n.getLogger(this), Z(t2, "absolute-height", e2)), $(n.getLogger(this), w(t2, e2));
  }
};
r([m({ type: String, readOnly: true })], A.prototype, "geometryType", void 0), r([m({ type: ["show", "hide"] })], A.prototype, "listMode", void 0), r([m({ type: ["IntegratedMeshLayer"] })], A.prototype, "operationalLayerType", void 0), r([m({ json: { read: false }, readOnly: true })], A.prototype, "type", void 0), r([m({ type: p2, readOnly: true })], A.prototype, "nodePages", void 0), r([m({ type: [a4], readOnly: true })], A.prototype, "materialDefinitions", void 0), r([m({ type: [y], readOnly: true })], A.prototype, "textureSetDefinitions", void 0), r([m({ type: [m2], readOnly: true })], A.prototype, "geometryDefinitions", void 0), r([m({ readOnly: true })], A.prototype, "serviceUpdateTimeStamp", void 0), r([m({ type: a5 }), v2({ origins: ["web-scene", "portal-item"], type: "resource", prefix: "modifications" })], A.prototype, "modifications", void 0), r([o(["web-scene", "portal-item"], "modifications")], A.prototype, "readModifications", null), r([m(c)], A.prototype, "elevationInfo", null), r([m({ type: String, json: { origins: { "web-scene": { read: true, write: true }, "portal-item": { read: true, write: true } }, read: false } })], A.prototype, "path", void 0), A = r([a2("esri.layers.IntegratedMeshLayer")], A);
var P2 = A;
export {
  P2 as default
};
//# sourceMappingURL=IntegratedMeshLayer-4TAB4TPT.js.map
