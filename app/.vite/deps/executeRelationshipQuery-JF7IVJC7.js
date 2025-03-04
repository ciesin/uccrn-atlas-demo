import {
  t
} from "./chunk-TSDCR4OY.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import {
  d as d2
} from "./chunk-5GAOP2C3.js";
import "./chunk-4NGIUHKX.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  f
} from "./chunk-D4CSBMND.js";
import "./chunk-5X74MKXM.js";
import "./chunk-LCBD3JEK.js";
import "./chunk-IPFYNOOY.js";
import "./chunk-PUC7IJYJ.js";
import "./chunk-ESU5C3MV.js";
import "./chunk-TYJOGWKZ.js";
import "./chunk-4WO6KUCB.js";
import "./chunk-2Y4TRKRB.js";
import "./chunk-XEBZUAYT.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-ZDVQNOKR.js";
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
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-MLOZK7WX.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  c
} from "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-REAPFM7O.js";
import "./chunk-UNGOQUF2.js";
import "./chunk-YSPSOPLL.js";
import "./chunk-AJSC5XSW.js";
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
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryRelatedRecords.js
function r(e, o) {
  const r2 = e.toJSON();
  return r2.objectIds && (r2.objectIds = r2.objectIds.join(",")), r2.orderByFields && (r2.orderByFields = r2.orderByFields.join(",")), r2.outFields && !(o == null ? void 0 : o.returnCountOnly) ? r2.outFields.includes("*") ? r2.outFields = "*" : r2.outFields = r2.outFields.join(",") : delete r2.outFields, r2.outSR && (r2.outSR = c(r2.outSR)), r2.dynamicDataSource && (r2.layer = JSON.stringify({ source: r2.dynamicDataSource }), delete r2.dynamicDataSource), r2;
}
async function s(e, t2, o) {
  const r2 = await a(e, t2, o), s2 = r2.data, n3 = s2.geometryType, d3 = s2.spatialReference, c2 = {};
  for (const a2 of s2.relatedRecordGroups) {
    const e2 = { fields: void 0, objectIdFieldName: void 0, geometryType: n3, spatialReference: d3, hasZ: !!s2.hasZ, hasM: !!s2.hasM, features: a2.relatedRecords };
    if (null != a2.objectId) c2[a2.objectId] = e2;
    else for (const t3 of Object.keys(a2)) "relatedRecords" !== t3 && (c2[a2[t3]] = e2);
  }
  return { ...r2, data: c2 };
}
async function n(e, t2, o) {
  const r2 = await a(e, t2, o, { returnCountOnly: true }), s2 = r2.data, n3 = {};
  for (const a2 of s2.relatedRecordGroups) null != a2.objectId && (n3[a2.objectId] = a2.count);
  return { ...r2, data: n3 };
}
async function a(t2, s2, n3 = {}, a2) {
  const d3 = t({ ...t2.query, f: "json", ...a2, ...r(s2, a2) });
  return P(t2.path + "/queryRelatedRecords", { ...n3, query: { ...n3.query, ...d3 } });
}

// node_modules/@arcgis/core/rest/query/executeRelationshipQuery.js
async function n2(e, n3, u2) {
  n3 = d2.from(n3);
  const a2 = f(e);
  return s(a2, n3, u2).then((t2) => {
    const r2 = t2.data, e2 = {};
    return Object.keys(r2).forEach((t3) => e2[t3] = d.fromJSON(r2[t3])), e2;
  });
}
async function u(r2, o, n3) {
  o = d2.from(o);
  const u2 = f(r2);
  return n(u2, o, { ...n3 }).then((t2) => t2.data);
}
export {
  n2 as executeRelationshipQuery,
  u as executeRelationshipQueryForCount
};
//# sourceMappingURL=executeRelationshipQuery-JF7IVJC7.js.map
