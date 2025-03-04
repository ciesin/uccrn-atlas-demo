import {
  u
} from "./chunk-WD2I76P3.js";
import {
  K,
  ee,
  oe
} from "./chunk-WOOP6IGO.js";
import "./chunk-UPCUQD3Z.js";
import {
  g
} from "./chunk-YG5V2HGZ.js";
import {
  E,
  N
} from "./chunk-WPOAQZKK.js";
import "./chunk-FXK4JVMZ.js";
import {
  f
} from "./chunk-BFWSC7OC.js";
import "./chunk-OLVQKB2U.js";
import {
  L
} from "./chunk-MYUL4ERJ.js";
import "./chunk-CEFHUHE4.js";
import "./chunk-RDJPXK25.js";
import "./chunk-QPYSCM2R.js";
import "./chunk-4JTNLE52.js";
import "./chunk-2N6IIYX4.js";
import "./chunk-HY3PTUEL.js";
import "./chunk-5YAYVSAD.js";
import {
  st,
  ut
} from "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import "./chunk-EM6PL3GZ.js";
import "./chunk-J7454WTE.js";
import "./chunk-FKPHHMJX.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-GNFRPKN6.js";
import {
  j,
  x
} from "./chunk-6X7CIA5N.js";
import "./chunk-U4VVTGEX.js";
import "./chunk-GTAKWPJC.js";
import "./chunk-A4LAIXK6.js";
import "./chunk-FF7WZBMV.js";
import "./chunk-CBVVZO37.js";
import "./chunk-Z2A222O3.js";
import "./chunk-DH57DJ4C.js";
import "./chunk-C4KYMV6K.js";
import "./chunk-5BWPRODD.js";
import "./chunk-67XXGAOA.js";
import "./chunk-4TZUFQZG.js";
import "./chunk-HLOKDQU3.js";
import "./chunk-RAXTPGM6.js";
import {
  Z
} from "./chunk-FFVHLGAP.js";
import "./chunk-YLPB3XO6.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-JJAT7JGD.js";
import "./chunk-D4CSBMND.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import {
  n as n3
} from "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-AZ33ECVF.js";
import "./chunk-FENCNBXD.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  s2 as s4
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-NALU24NB.js";
import "./chunk-REAPFM7O.js";
import {
  n as n2
} from "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
import "./chunk-I4HN3ELT.js";
import {
  d
} from "./chunk-ACGZOBZ6.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import {
  s2 as s
} from "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  b,
  s as s3
} from "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n,
  s2
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/graphics/sources/WFSSourceWorker.js
var F = "esri.layers.WFSLayer";
var S = class {
  constructor() {
    this._customParameters = null, this._queryEngine = null, this._supportsPagination = true;
  }
  destroy() {
    var _a;
    (_a = this._queryEngine) == null ? void 0 : _a.destroy(), this._queryEngine = null;
  }
  async load(e, r = {}) {
    const { getFeatureUrl: s5, getFeatureOutputFormat: o, fields: n4, geometryType: i, featureType: u2, maxRecordCount: l, maxTotalRecordCount: m, maxPageCount: g2, objectIdField: d2, customParameters: f2 } = e, { spatialReference: _, getFeatureSpatialReference: x2 } = oe(s5, u2, e.spatialReference);
    try {
      await x(x2, _);
    } catch {
      throw new s2("unsupported-projection", "Projection not supported", { inSpatialReference: x2, outSpatialReference: _ });
    }
    s3(r), this._customParameters = f2, this._featureType = u2, this._fieldsIndex = Z.fromLayerJSON({ fields: n4, dateFieldsTimeReference: n4.some((e2) => "esriFieldTypeDate" === e2.type) ? { timeZoneIANA: n2 } : null }), this._geometryType = i, this._getFeatureUrl = s5, this._getFeatureOutputFormat = o, this._getFeatureSpatialReference = x2, this._maxRecordCount = l, this._maxTotalRecordCount = m, this._maxPageCount = g2, this._objectIdField = d2, this._spatialReference = _;
    let C = await this._snapshotFeatures(r);
    if (C.errors.length > 0 && (this._supportsPagination = false, C = await this._snapshotFeatures(r), C.errors.length > 0)) throw C.errors[0];
    return this._queryEngine = new L({ fieldsIndex: this._fieldsIndex, geometryType: i, hasM: false, hasZ: false, objectIdField: d2, spatialReference: _, timeInfo: null, featureStore: new f({ geometryType: i, hasM: false, hasZ: false }) }), this._queryEngine.featureStore.addMany(C.features), { warnings: E2(C), extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async applyEdits() {
    throw new s2("wfs-source:editing-not-supported", "applyEdits() is not supported on WFSLayer");
  }
  async queryFeatures(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e, t.signal);
  }
  async queryFeatureCount(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e, t.signal);
  }
  async queryObjectIds(e = {}, t = {}) {
    await this._waitSnapshotComplete();
    return (await this._queryEngine.executeQueryForIds(e, t.signal)).filter(n3);
  }
  async queryExtent(e = {}, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e, t.signal);
  }
  async querySnapping(e, t = {}) {
    return await this._waitSnapshotComplete(), u(this._queryEngine, e, t.signal);
  }
  async queryAttributeBins(e, t = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(e, t.signal);
  }
  async refresh(t) {
    var _a;
    return this._customParameters = t.customParameters, this._maxRecordCount = t.maxRecordCount, this._maxTotalRecordCount = t.maxTotalRecordCount, this._maxPageCount = t.maxPageCount, (_a = this._snapshotTask) == null ? void 0 : _a.abort(), this._snapshotTask = d((e) => this._snapshotFeatures({ signal: e })), this._snapshotTask.promise.then((e) => {
      var _a2;
      this._queryEngine.featureStore.clear(), this._queryEngine.featureStore.addMany(e.features);
      for (const t2 of E2(e)) n.getLogger(F).warn(new s("wfs-layer:refresh-warning", t2.message, t2.details));
      ((_a2 = e.errors) == null ? void 0 : _a2.length) && n.getLogger(F).warn(new s("wfs-layer:refresh-error", "Refresh completed with errors", { errors: e.errors }));
    }, () => {
      this._queryEngine.featureStore.clear();
    }), await this._waitSnapshotComplete(), { extent: (await this._queryEngine.fetchRecomputedExtents()).fullExtent };
  }
  async _waitSnapshotComplete() {
    if (this._snapshotTask && !this._snapshotTask.finished) {
      try {
        await this._snapshotTask.promise;
      } catch {
      }
      return this._waitSnapshotComplete();
    }
  }
  async _snapshotFeatures(e) {
    const t = e == null ? void 0 : e.signal, r = this._maxTotalRecordCount, o = this._maxPageCount, n4 = this._supportsPagination ? await ee(this._getFeatureUrl, this._featureType.typeName, { customParameters: this._customParameters, signal: t }) : void 0;
    let i = [];
    const u2 = [];
    if (null == n4) try {
      i = await this._singleQuery(t);
    } catch (l) {
      b(l) || u2.push(l);
    }
    else {
      const e2 = Math.min(n4, r), a = T(this, Math.max(1, Math.min(Math.ceil(e2 / this._maxRecordCount), o)), t);
      await Promise.allSettled(Array.from({ length: 10 }).map(() => j2(a, i, u2)));
    }
    return s3(t), { features: i, totalRecordCount: n4, maxTotalRecordCount: r, maxPageCount: o, errors: u2 };
  }
  async _singleQuery(e) {
    const t = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, signal: e });
    return this._processGeoJSON(t, { signal: e });
  }
  async _pageQuery(e, t) {
    const r = e * this._maxRecordCount, a = await K(this._getFeatureUrl, this._featureType.typeName, this._getFeatureSpatialReference, this._getFeatureOutputFormat, { customParameters: this._customParameters, startIndex: r, count: this._maxRecordCount, signal: t });
    return this._processGeoJSON(a, { startIndex: r, signal: t });
  }
  _processGeoJSON(e, t) {
    E(e, this._getFeatureSpatialReference.wkid);
    const { startIndex: r, signal: s5 } = t;
    s3(s5);
    const o = N(e, { geometryType: this._geometryType, hasZ: false, objectIdField: this._objectIdField });
    if (!s4(this._spatialReference, this._getFeatureSpatialReference)) for (const a of o) null != a.geometry && (a.geometry = st(j(ut(a.geometry, this._geometryType, false, false), this._getFeatureSpatialReference, this._spatialReference)));
    let l = r ?? 1;
    for (const a of o) {
      const e2 = {};
      g(this._fieldsIndex, e2, a.attributes, true), a.attributes = e2, null == e2[this._objectIdField] && (a.objectId = e2[this._objectIdField] = l++);
    }
    return o;
  }
};
function* T(e, t, r) {
  for (let a = 0; a < t; a++) yield e._pageQuery(a, r);
}
async function j2(e, t, r) {
  let a = e.next();
  for (; !a.done; ) {
    try {
      const e2 = await a.value;
      t.push(...e2);
    } catch (o) {
      b(o) || r.push(o);
    }
    a = e.next();
  }
}
function E2(e) {
  const t = [];
  return null != e.totalRecordCount && (e.features.length < e.totalRecordCount && t.push({ name: "wfs-layer:maxRecordCount-too-low", message: `Could only fetch ${e.features.length} of ${e.totalRecordCount} in ${e.maxPageCount} queries. Try increasing the value of WFSLayer.maxRecordCount.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount } }), e.totalRecordCount > e.maxTotalRecordCount && t.push({ name: "wfs-layer:large-dataset", message: `The number of ${e.totalRecordCount} features exceeds the maximum allowed of ${e.maxTotalRecordCount}.`, details: { recordCount: e.features.length, totalRecordCount: e.totalRecordCount, maxTotalRecordCount: e.maxTotalRecordCount } })), t;
}
export {
  S as default
};
//# sourceMappingURL=WFSSourceWorker-GRQPQKWD.js.map
