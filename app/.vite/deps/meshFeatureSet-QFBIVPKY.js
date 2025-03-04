import {
  i as i2,
  n as n2
} from "./chunk-Q36PLQUO.js";
import {
  Y
} from "./chunk-DC6JGQTT.js";
import "./chunk-ZBVCPQP5.js";
import "./chunk-ZZ4UNY3F.js";
import "./chunk-J3KMTGEW.js";
import "./chunk-NVEHOQKI.js";
import {
  a,
  i
} from "./chunk-QNB4N7PF.js";
import "./chunk-WHV4I2Y7.js";
import "./chunk-QUEKTCSS.js";
import "./chunk-OTJBTCJE.js";
import "./chunk-5LZH2YNQ.js";
import "./chunk-SKW2R7G5.js";
import "./chunk-LMA7TSBN.js";
import "./chunk-C4XH7UYG.js";
import "./chunk-RJYMNNKW.js";
import "./chunk-D5KT2NSO.js";
import "./chunk-U2TKRMQE.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import "./chunk-YINRFSE5.js";
import "./chunk-A6DPK5GC.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-HONYA6AI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-XJOBEGIR.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import {
  d
} from "./chunk-ONZPKEDE.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import {
  s
} from "./chunk-37HZDVD7.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  b
} from "./chunk-5X74MKXM.js";
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
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-SWBNCJYN.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
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
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-L7T5Z7MG.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/support/meshFeatureSet.js
var p = () => n.getLogger("esri.rest.support.meshFeatureSet");
function l(t, r2, s2) {
  const o = s2.features;
  s2.features = [], delete s2.geometryType;
  const a2 = d.fromJSON(s2);
  if (a2.geometryType = "mesh", !s2.assetMaps) return a2;
  const u = g2(r2, s2.assetMaps), i3 = t.sourceSpatialReference ?? g.WGS84, m = s2.globalIdFieldName, { outFields: c } = t, p2 = null != c && c.length > 0 ? y(c.includes("*") ? null : new Set(c)) : () => ({});
  for (const n3 of o) {
    const t2 = E(n3, m, i3, r2, u);
    a2.features.push(new b({ geometry: t2, attributes: p2(n3) }));
  }
  return a2;
}
function y(e) {
  return ({ attributes: t }) => {
    if (!t) return {};
    if (!e) return t;
    for (const r2 in t) e.has(r2) || delete t[r2];
    return t;
  };
}
function E(e, t, r2, n3, a2) {
  const u = e.attributes[t], i3 = a2.get(u);
  if (null == i3 || !e.geometry) return null;
  const f = n2(e.attributes, r2, n3.transformFieldRoles), p2 = w.fromJSON(e.geometry);
  p2.spatialReference = r2;
  const l2 = i2(e.attributes, n3.transformFieldRoles), y2 = r2.isGeographic ? "local" : "georeferenced", E2 = d2(i3);
  return E2 ? Y.createWithExternalSource(f, E2, { extent: p2, transform: l2, vertexSpace: y2, unitConversionDisabled: true }) : Y.createIncomplete(f, { extent: p2, transform: l2, vertexSpace: y2 });
}
var h;
function g2(e, t) {
  const s2 = /* @__PURE__ */ new Map();
  for (const o of t) {
    const t2 = o.parentGlobalId;
    if (null == t2) continue;
    const n3 = o.assetName, a2 = o.assetType, u = o.assetHash, f = o.assetURL, m = o.conversionStatus, c = o.seqNo, l2 = s(a2, e.supportedFormats);
    if (!l2) {
      p().error("mesh-feature-set:unknown-format", `Service returned an asset of type ${a2}, but it does not list it as a supported type`);
      continue;
    }
    const y2 = r(s2, t2, () => ({ files: /* @__PURE__ */ new Map() }));
    r(y2.files, n3, () => ({ name: n3, type: a2, mimeType: l2, status: S(m), parts: [] })).parts[c] = { hash: u, url: f };
  }
  return s2;
}
function d2(e) {
  const t = Array.from(e.files.values()), r2 = new Array();
  for (const s2 of t) {
    if (s2.status !== h.COMPLETED) return null;
    const e2 = new Array();
    for (const t2 of s2.parts) {
      if (!t2) return null;
      e2.push(new i(t2.url, t2.hash));
    }
    r2.push(new a(s2.name, s2.mimeType, e2));
  }
  return r2;
}
function S(e) {
  switch (e) {
    case "COMPLETED":
    case "SUBMITTED":
      return h.COMPLETED;
    case "INPROGRESS":
      return h.PENDING;
    default:
      return h.FAILED;
  }
}
!function(e) {
  e[e.FAILED = 0] = "FAILED", e[e.PENDING = 1] = "PENDING", e[e.COMPLETED = 2] = "COMPLETED";
}(h || (h = {}));
export {
  g2 as assetMapFromAssetMapsJSON,
  E as extractMesh,
  l as meshFeatureSetFromJSON
};
//# sourceMappingURL=meshFeatureSet-QFBIVPKY.js.map
