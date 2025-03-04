import {
  c as c2
} from "./chunk-G2TQ7G44.js";
import {
  T
} from "./chunk-RBVKDFFD.js";
import "./chunk-GNFRPKN6.js";
import "./chunk-6X7CIA5N.js";
import {
  t
} from "./chunk-TSDCR4OY.js";
import "./chunk-GTAKWPJC.js";
import {
  R
} from "./chunk-67XXGAOA.js";
import "./chunk-4TZUFQZG.js";
import "./chunk-YLPB3XO6.js";
import "./chunk-ONZPKEDE.js";
import "./chunk-ANGUSND2.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-JJAT7JGD.js";
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
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-6REABBOQ.js";
import "./chunk-STBNLAGT.js";
import "./chunk-HSI6V34N.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-XCRRZPKE.js";
import {
  v
} from "./chunk-WZBMMIVS.js";
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
import "./chunk-SQ6MYL73.js";
import "./chunk-HP7OWCUK.js";
import "./chunk-SWBNCJYN.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import {
  c,
  s2 as s
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
import {
  I,
  V
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
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/query/operations/queryAttributeBins.js
function l(t2) {
  const e = t2.geometry, i2 = t2.toJSON(), r = i2;
  let u, l2, a2;
  if (null != e && (l2 = e.spatialReference, a2 = c(l2), r.geometryType = v(e), r.geometry = JSON.stringify(e), r.inSR = a2), i2.outSR ? (r.outSR = c(i2.outSR), u = t2.outSpatialReference) : e && (r.outSR = r.inSR, u = l2), r.bin && (r.bin = JSON.stringify(r.bin)), r.quantizationParameters && (r.quantizationParameters = JSON.stringify(r.quantizationParameters)), r.outStatistics && (r.outStatistics = JSON.stringify(r.outStatistics)), r.outTimeReference && (r.outTimeReference = JSON.stringify(r.outTimeReference)), i2.timeExtent) {
    const t3 = i2.timeExtent, { start: e2, end: n } = t3;
    null == e2 && null == n || (r.time = e2 === n ? e2 : `${e2 ?? "null"},${n ?? "null"}`), delete i2.timeExtent;
  }
  return t2.defaultSpatialReference && s(l2, u) && (r.defaultSR = r.inSR, delete r.inSR, delete r.outSR), r;
}
async function a(t2, e, i2) {
  return null != e.timeExtent && e.timeExtent.isEmpty ? { data: { features: [] } } : await m(t2, e, i2);
}
async function m(n, o, s2 = {}) {
  const a2 = "string" == typeof n ? I(n) : n, m2 = o.geometry ? [o.geometry] : [], f2 = await R(m2, null, { signal: s2.signal }), y = f2 == null ? void 0 : f2[0];
  null != y && ((o = o.clone()).geometry = y);
  const p = t({ ...a2.query, f: "json", ...l(o) });
  return P(V(a2.path, "queryBins"), { ...s2, query: { ...p, ...s2.query } });
}

// node_modules/@arcgis/core/rest/query/executeAttributeBinsQuery.js
async function i(i2, s2, u) {
  const { data: m2 } = await a(f(i2), T.from(s2), u);
  return c2.fromJSON(m2);
}
export {
  i as executeAttributeBinsQuery
};
//# sourceMappingURL=executeAttributeBinsQuery-KX2AIMB4.js.map
