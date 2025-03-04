import {
  n as n5
} from "./chunk-XNEUYQNE.js";
import {
  u as u2
} from "./chunk-WD2I76P3.js";
import {
  c
} from "./chunk-JMVIOIWP.js";
import {
  e as e2,
  n as n4
} from "./chunk-FXK4JVMZ.js";
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
import "./chunk-F7TFMQ3A.js";
import "./chunk-YRSM2W7P.js";
import {
  s as s3
} from "./chunk-EM6PL3GZ.js";
import {
  e
} from "./chunk-J7454WTE.js";
import {
  a,
  u
} from "./chunk-PMRN4OAI.js";
import "./chunk-FKPHHMJX.js";
import "./chunk-U6JFTJMZ.js";
import "./chunk-GNFRPKN6.js";
import {
  x
} from "./chunk-6X7CIA5N.js";
import "./chunk-U4VVTGEX.js";
import {
  t
} from "./chunk-GTAKWPJC.js";
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
import "./chunk-ZCYDEY6S.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-JJAT7JGD.js";
import "./chunk-D4CSBMND.js";
import "./chunk-XEBZUAYT.js";
import {
  V
} from "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import {
  ee,
  ne,
  p
} from "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import {
  n as n3
} from "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WJNMFEXQ.js";
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
import {
  d as d2
} from "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  O2 as O,
  U,
  s2
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
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I,
  qt
} from "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
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
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/graphics/sources/csv/csv.js
var o = /^\s*"([\S\s]*)"\s*$/;
var l = /""/g;
var s4 = "\n";
var u3 = [",", " ", ";", "|", "	"];
function* c2(e3, t2, n6) {
  let r = 0;
  for (; r <= e3.length; ) {
    const i = e3.indexOf(t2, r), o2 = e3.slice(r, i > -1 ? i : void 0);
    r += o2.length + t2.length, n6 && !o2.trim() || (yield o2);
  }
}
function f2(e3) {
  const t2 = e3.includes("\r\n") ? "\r\n" : s4;
  return c2(e3, t2, true);
}
function a2(e3, t2) {
  return c2(e3, t2, false);
}
function d3(e3, t2, n6) {
  e3 = e3.trim(), t2 = t2 == null ? void 0 : t2.trim();
  const r = [], o2 = Array.from(/* @__PURE__ */ new Set([n6 == null ? void 0 : n6.delimiter, ...u3])).filter((e4) => null != e4);
  for (const i of o2) {
    const n7 = g2(e3, i).length, o3 = g2(t2, i).length ?? n7;
    n7 > 1 && r.push({ weight: Math.min(n7, o3), delimiter: i });
  }
  const l2 = r.sort(({ weight: e4 }, { weight: t3 }) => t3 - e4).map(({ delimiter: e4 }) => e4);
  for (const s5 of l2) {
    const t3 = m(e3, s5).names, r2 = n5(t3, n6 == null ? void 0 : n6.longitudeField, n6 == null ? void 0 : n6.latitudeField);
    if (r2.longitudeFieldName && r2.latitudeFieldName) return { delimiter: s5, locationInfo: r2 };
  }
  return { delimiter: l2[0], locationInfo: null };
}
function* p2(e3, t2, n6, r = () => /* @__PURE__ */ Object.create(null)) {
  const i = f2(e3);
  i.next();
  let u4 = "", c3 = "", d4 = 0, p3 = r(), m2 = 0;
  e: for (const f3 of i) {
    const e4 = a2(f3, n6);
    for (const i2 of e4) if (u4 += c3 + i2, c3 = "", d4 += h(i2), d4 % 2 == 0) {
      if (d4 > 0) {
        const e5 = o.exec(u4);
        if (!e5) {
          p3 = r(), m2 = 0, u4 = "", d4 = 0;
          continue e;
        }
        p3[t2[m2]] = e5[1].replaceAll(l, '"'), m2++;
      } else p3[t2[m2]] = u4, m2++;
      u4 = "", d4 = 0;
    } else c3 = n6;
    0 === d4 ? (yield p3, p3 = r(), m2 = 0) : c3 = s4;
  }
}
function m(e3, t2) {
  const r = g2(e3, t2).filter((e4) => null != e4), i = r.map((e4) => p(e4));
  for (let n6 = i.length - 1; n6 >= 0; n6--) i[n6] || (i.splice(n6, 1), r.splice(n6, 1));
  return { names: i, aliases: r };
}
function g2(e3, t2) {
  if (!(e3 == null ? void 0 : e3.length)) return [];
  const n6 = [];
  let r = "", i = "", s5 = 0;
  const u4 = a2(e3, t2);
  for (const c3 of u4) if (r += i + c3, i = "", s5 += h(c3), s5 % 2 == 0) {
    if (s5 > 0) {
      const e4 = o.exec(r);
      e4 && n6.push(e4[1].replaceAll(l, '"'));
    } else n6.push(r);
    r = "", s5 = 0;
  } else i = t2;
  return n6;
}
function h(e3) {
  let t2 = 0, n6 = 0;
  for (n6 = e3.indexOf('"', n6); n6 >= 0; ) t2++, n6 = e3.indexOf('"', n6 + 1);
  return t2;
}
function N(e3, t2, n6, i, o2) {
  const l2 = [], s5 = p2(e3, n6, t2), u4 = [];
  for (const r of s5) {
    if (10 === u4.length) break;
    u4.push(r);
  }
  for (let c3 = 0; c3 < n6.length; c3++) {
    const e4 = n6[c3], t3 = i[c3];
    if (e4 === o2.longitudeFieldName || e4 === o2.latitudeFieldName) l2.push({ name: e4, type: "esriFieldTypeDouble", alias: t3 });
    else {
      let n7;
      switch (b2(u4.map((t4) => t4[e4]))) {
        case "integer":
          n7 = "esriFieldTypeInteger";
          break;
        case "double":
          n7 = "esriFieldTypeDouble";
          break;
        case "date":
          n7 = "esriFieldTypeDate";
          break;
        default:
          n7 = "esriFieldTypeString";
      }
      l2.push({ name: e4, type: n7, alias: t3, length: ne(n7) });
    }
  }
  return l2;
}
function b2(t2) {
  if (!t2.length) return "string";
  const n6 = /[^+\-.,0-9]/;
  return t2.map((t3) => {
    if ("" !== t3) {
      if (!n6.test(t3)) {
        let e3 = x2(t3);
        if (!isNaN(e3)) return /[.,]/.test(t3) || !Number.isInteger(e3) || e3 > 214783647 || e3 < -214783648 ? "double" : "integer";
        if (t3.includes("E")) {
          if (e3 = Number(t3), !Number.isNaN(e3)) return "double";
          if (t3.includes(",") && (t3 = t3.replace(",", "."), e3 = Number(t3), !Number.isNaN(e3))) return "double";
        }
      }
      return e2(t3) ? "date" : "string";
    }
  }).reduce((e3, t3) => void 0 === e3 ? t3 : void 0 === t3 ? e3 : e3 === t3 ? t3 : "string" === e3 || "string" === t3 ? "string" : "double" === e3 || "double" === t3 ? "double" : void 0);
}
var x2 = function() {
  const e3 = c(), n6 = new RegExp("^" + e3.regexp + "$"), r = new RegExp("[" + e3.group + "\\s\\xa0]", "g"), i = e3.factor;
  return (t2) => {
    const o2 = n6.exec(t2);
    if (e3.factor = i, !o2) return NaN;
    let l2 = o2[1];
    if (!o2[1]) {
      if (!o2[2]) return NaN;
      l2 = o2[2], e3.factor *= -1;
    }
    return l2 = l2.replace(r, "").replace(e3.decimal, "."), +l2 * e3.factor;
  };
}();
function y(e3) {
  return JSON.parse(JSON.stringify(e3));
}

// node_modules/@arcgis/core/layers/graphics/sources/support/CSVSourceWorker.js
var k = u("esriGeometryPoint");
var P2 = ["csv"];
var R = [0, 0];
var V2 = class {
  constructor(e3, t2) {
    this.x = e3, this.y = t2;
  }
};
var A = class {
  constructor() {
    this._queryEngine = null, this._snapshotFeatures = async (e3) => {
      const t2 = await this._fetch(e3);
      return this._createFeatures(t2);
    };
  }
  destroy() {
    var _a;
    (_a = this._queryEngine) == null ? void 0 : _a.destroy(), this._queryEngine = null;
  }
  async load(e3, t2 = {}) {
    var _a;
    this._loadOptions = e3;
    const [i] = await Promise.all([this._fetch(t2.signal), this._checkProjection((_a = e3 == null ? void 0 : e3.parsingOptions) == null ? void 0 : _a.spatialReference)]), n6 = G(i, e3);
    this._locationInfo = n6.locationInfo, this._delimiter = n6.delimiter, this._queryEngine = this._createQueryEngine(n6);
    const r = await this._createFeatures(i);
    this._queryEngine.featureStore.addMany(r);
    const { fullExtent: s5, timeExtent: o2 } = await this._queryEngine.fetchRecomputedExtents();
    if (n6.layerDefinition.extent = s5, o2) {
      const { start: e4, end: t3 } = o2;
      n6.layerDefinition.timeInfo.timeExtent = [e4, t3];
    }
    return n6;
  }
  async applyEdits() {
    throw new s("csv-layer:editing-not-supported", "applyEdits() is not supported on CSVLayer");
  }
  async queryFeatures(e3 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQuery(e3, t2.signal);
  }
  async queryFeatureCount(e3 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForCount(e3, t2.signal);
  }
  async queryObjectIds(e3 = {}, t2 = {}) {
    await this._waitSnapshotComplete();
    return (await this._queryEngine.executeQueryForIds(e3, t2.signal)).filter(n3);
  }
  async queryExtent(e3 = {}, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeQueryForExtent(e3, t2.signal);
  }
  async querySnapping(e3, t2 = {}) {
    return await this._waitSnapshotComplete(), u2(this._queryEngine, e3, t2.signal);
  }
  async queryAttributeBins(e3, t2 = {}) {
    return await this._waitSnapshotComplete(), this._queryEngine.executeAttributeBinsQuery(e3, t2.signal);
  }
  async refresh(e3) {
    var _a;
    this._loadOptions.customParameters = e3, (_a = this._snapshotTask) == null ? void 0 : _a.abort(), this._snapshotTask = d(this._snapshotFeatures), this._snapshotTask.promise.then((e4) => {
      this._queryEngine.featureStore.clear(), e4 && this._queryEngine.featureStore.addMany(e4);
    }, (e4) => {
      this._queryEngine.featureStore.clear(), b(e4) || n.getLogger("esri.layers.CSVLayer").error(new s("csv-layer:refresh", "An error occurred during refresh", { error: e4 }));
    }), await this._waitSnapshotComplete();
    const { fullExtent: i, timeExtent: o2 } = await this._queryEngine.fetchRecomputedExtents();
    return { extent: i, timeExtent: o2 };
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
  async _fetch(t2) {
    const { url: i, customParameters: r } = this._loadOptions;
    if (!i) throw new s("csv-layer:invalid-source", "url not defined");
    const s5 = I(i);
    return (await P(s5.path, { query: { ...s5.query, ...r }, responseType: "text", signal: t2 })).data;
  }
  _createQueryEngine(e3) {
    const { objectIdField: t2, fields: i, extent: n6, timeInfo: r } = e3.layerDefinition, s5 = new f({ geometryType: "esriGeometryPoint", hasM: false, hasZ: false });
    return new L({ fieldsIndex: Z.fromLayerJSON({ fields: i, dateFieldsTimeReference: { timeZoneIANA: n2 } }), geometryType: "esriGeometryPoint", hasM: false, hasZ: false, timeInfo: r, objectIdField: t2, spatialReference: n6.spatialReference || { wkid: 4326 }, featureStore: s5 });
  }
  async _createFeatures(e3) {
    const { latitudeFieldName: t2, longitudeFieldName: n6 } = this._locationInfo, { objectIdField: r, fieldsIndex: s5, spatialReference: o2 } = this._queryEngine;
    let a3 = [];
    const p3 = [], g3 = s5.fields.filter((e4) => e4.name !== r).map((e4) => e4.name);
    let _ = 0;
    const I2 = {};
    for (const i of s5.fields) if ("esriFieldTypeOID" !== i.type && "esriFieldTypeGlobalID" !== i.type) {
      const e4 = ee(i);
      void 0 !== e4 && (I2[i.name] = e4);
    }
    const F = p2(e3, g3, this._delimiter, a(I2, r));
    for (const l2 of F) {
      const e4 = this._parseCoordinateValue(l2[t2]), o3 = this._parseCoordinateValue(l2[n6]);
      if (null != o3 && null != e4 && !isNaN(e4) && !isNaN(o3)) {
        l2[t2] = e4, l2[n6] = o3;
        for (const e5 in l2) if (e5 !== t2 && e5 !== n6) if (s5.isDateField(e5)) l2[e5] = n4(l2[e5]);
        else if (s5.isNumericField(e5)) {
          const t3 = x2(l2[e5]);
          isNaN(t3) ? l2[e5] = null : l2[e5] = t3;
        } else null != l2[e5] && (l2[e5] = y(l2[e5]));
        l2[r] = _, _++, a3.push(new V2(o3, e4)), p3.push(l2);
      }
    }
    if (!s2({ wkid: 4326 }, o2)) if (O(o2)) for (const i of a3) [i.x, i.y] = d2(i.x, i.y, R);
    else a3 = V(t, a3, g.WGS84, o2, null, null);
    const T = [];
    for (let i = 0; i < a3.length; i++) {
      const { x: e4, y: t3 } = a3[i], n7 = p3[i];
      n7[r] = i + 1, T.push(new s3(new e([], [e4, t3]), n7, null, n7[r]));
    }
    return T;
  }
  _parseCoordinateValue(e3) {
    if (null == e3 || "" === e3) return null;
    let t2 = x2(e3);
    return (isNaN(t2) || Math.abs(t2) > 181) && (t2 = parseFloat(e3)), t2;
  }
  async _checkProjection(e3) {
    try {
      await x(U, e3);
    } catch {
      throw new s("csv-layer:projection-not-supported", "Projection not supported");
    }
  }
};
function G(e3, t2) {
  var _a, _b, _c;
  const i = t2.parsingOptions || {}, r = { delimiter: i.delimiter, layerDefinition: null, locationInfo: { latitudeFieldName: i.latitudeField, longitudeFieldName: i.longitudeField } }, s5 = r.layerDefinition = { name: qt(t2.url, P2) || "csv", dateFieldsTimeReference: { timeZoneIANA: n2 }, drawingInfo: k, geometryType: "esriGeometryPoint", objectIdField: null, fields: [], timeInfo: i.timeInfo, extent: { xmin: Number.POSITIVE_INFINITY, ymin: Number.POSITIVE_INFINITY, xmax: Number.NEGATIVE_INFINITY, ymax: Number.NEGATIVE_INFINITY, spatialReference: i.spatialReference || { wkid: 4326 } } }, o2 = f2(e3), l2 = (_a = o2.next().value) == null ? void 0 : _a.trim(), m2 = (_b = o2.next().value) == null ? void 0 : _b.trim();
  if (!l2) throw new s("csv-layer:empty-csv", "CSV is empty", { csv: e3 });
  const { delimiter: c3, locationInfo: d4 } = d3(l2, m2, i);
  if (!c3) throw new s("csv-layer:invalid-delimiter", "Unable to detect the delimiter from CSV", { firstLine: l2, secondLine: m2, parsingOptions: i });
  if (!d4) throw new s("csv-layer:location-fields-not-found", "Unable to identify latitude and longitude fields from the CSV file", { firstLine: l2, secondLine: m2, parsingOptions: i });
  r.locationInfo = d4, r.delimiter = c3;
  const { names: u4, aliases: p3 } = m(l2, c3), f3 = N(e3, r.delimiter, u4, p3, r.locationInfo);
  if ((_c = i.fields) == null ? void 0 : _c.length) {
    const e4 = new Z(i.fields);
    for (const t3 of f3) {
      const i2 = e4.get(t3.name);
      i2 && Object.assign(t3, i2);
    }
  }
  if (!f3.some((e4) => "esriFieldTypeOID" === e4.type && (s5.objectIdField = e4.name, true))) {
    const e4 = { name: "__OBJECTID", alias: "__OBJECTID", type: "esriFieldTypeOID", editable: false, nullable: false };
    s5.objectIdField = e4.name, f3.unshift(e4);
  }
  s5.fields = f3;
  const y2 = new Z(s5.fields);
  if (r.locationInfo && (r.locationInfo.latitudeFieldName = y2.get(r.locationInfo.latitudeFieldName).name, r.locationInfo.longitudeFieldName = y2.get(r.locationInfo.longitudeFieldName).name), s5.timeInfo) {
    const e4 = s5.timeInfo;
    if (e4.startTimeField) {
      const t3 = y2.get(e4.startTimeField);
      t3 ? (e4.startTimeField = t3.name, t3.type = "esriFieldTypeDate") : e4.startTimeField = null;
    }
    if (e4.endTimeField) {
      const t3 = y2.get(e4.endTimeField);
      t3 ? (e4.endTimeField = t3.name, t3.type = "esriFieldTypeDate") : e4.endTimeField = null;
    }
    if (e4.trackIdField) {
      const t3 = y2.get(e4.trackIdField);
      e4.trackIdField = t3 ? t3.name : null;
    }
    e4.startTimeField || e4.endTimeField || (s5.timeInfo = null);
  }
  return r;
}
export {
  A as default
};
//# sourceMappingURL=CSVSourceWorker-XDU55XVL.js.map
