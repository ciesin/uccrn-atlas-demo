import {
  l
} from "./chunk-VRFYHG34.js";
import {
  t
} from "./chunk-EZQWXU2P.js";
import {
  l as l2
} from "./chunk-FHPLFQA4.js";
import "./chunk-V7B4KA6P.js";
import {
  te
} from "./chunk-UQQJEYZO.js";
import "./chunk-VCN3W5DR.js";
import "./chunk-DYXUUD4L.js";
import "./chunk-W5EXEGLR.js";
import "./chunk-ENBV6NNC.js";
import "./chunk-D2SOLIKV.js";
import "./chunk-N7QOB7T5.js";
import "./chunk-M6YQSYSW.js";
import "./chunk-4FQK362J.js";
import "./chunk-LZUCOHH2.js";
import "./chunk-J7454WTE.js";
import "./chunk-U6JFTJMZ.js";
import {
  y
} from "./chunk-N4Z2ZQI6.js";
import "./chunk-ZD4JXG4O.js";
import "./chunk-S75M4NUB.js";
import "./chunk-A4LAIXK6.js";
import "./chunk-AI444EOP.js";
import "./chunk-CTBXY22F.js";
import "./chunk-ANT4QPJQ.js";
import "./chunk-HYJ4YR5G.js";
import "./chunk-XJOBEGIR.js";
import "./chunk-K35H6D4D.js";
import "./chunk-7EIXRVA4.js";
import "./chunk-BSRIVWBN.js";
import {
  V
} from "./chunk-BTTTF5H4.js";
import "./chunk-MEC6IDRX.js";
import "./chunk-ZH6PYRVF.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-HCXUWF52.js";
import "./chunk-ZCYDEY6S.js";
import "./chunk-TOMXDOXB.js";
import "./chunk-VTPZW6H5.js";
import "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
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
import "./chunk-FIBMMWXR.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-K2PILHWE.js";
import {
  e,
  u
} from "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-PAGKMWJH.js";
import "./chunk-CHL75CEP.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
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

// node_modules/@arcgis/core/symbols/support/previewCIMSymbol.js
var s = new l2(null);
var m = e(t.size);
var h = e(t.maxSize);
var c = e(t.lineWidth);
var y2 = 1;
async function u2(e2, t2, i) {
  const l3 = t2 == null ? void 0 : t2.size;
  let r = null != l3 && "object" == typeof l3 && "width" in l3 ? l3.width : l3, o = null != l3 && "object" == typeof l3 && "height" in l3 ? l3.height : l3;
  if (null == r || null == o) if ("esriGeometryPolygon" === i) r = o = t2.maxSize ? Math.min(t2.maxSize, m) : m;
  else {
    const l4 = await f(e2, t2, i);
    l4 && (r = l4.width, o = l4.height), "esriGeometryPolyline" === i && (r = t2.maxSize ? Math.min(t2.maxSize, c) : c), r = null != r && isFinite(r) ? Math.min(r, h) : m, o = null != o && isFinite(o) ? Math.max(Math.min(o, h), y2) : m;
  }
  return "legend" === t2.style && "esriGeometryPolyline" === i && (r = c), { width: r, height: o };
}
async function f(e2, t2, l3) {
  const { feature: o, fieldMap: n, viewParams: a } = t2.cimOptions || t2, m2 = await y.resolveSymbolOverrides(e2.data, o, null, n, l3, null, a);
  if (!m2) return null;
  (e2 = e2.clone()).data = { type: "CIMSymbolReference", symbol: m2 }, e2.data.primitiveOverrides = void 0;
  const h2 = [];
  return te.fetchResources(m2, s.resourceManager, h2), te.fetchFonts(m2, s.resourceManager, h2), h2.length > 0 && await Promise.all(h2), te.getEnvelope(m2, null, s.resourceManager);
}
async function g(i, l3 = {}) {
  var _a, _b;
  const { node: r, opacity: n, symbolConfig: m2 } = l3, h2 = null != m2 && "object" == typeof m2 && "isSquareFill" in m2 && m2.isSquareFill, c2 = l3.cimOptions || l3, y3 = c2.geometryType || V((_a = i == null ? void 0 : i.data) == null ? void 0 : _a.symbol), f2 = await u2(i, l3, y3), { feature: g2, fieldMap: d } = c2, p = (l3 == null ? void 0 : l3.geometry) || h2 || "esriGeometryPolygon" !== y3 ? "preview" : "legend";
  let w = f2;
  const b = f2;
  if ((l3 == null ? void 0 : l3.geometry) && ("esriGeometryPolygon" === y3 || "esriGeometryPolyline" === y3)) {
    const i2 = 200;
    if (u(f2.width) < i2 || u(f2.height) < i2) {
      const t2 = f2.width > f2.height ? e(i2) * f2.height / f2.width : e(i2);
      w = { width: f2.width > f2.height ? e(i2) : e(i2) * f2.width / f2.height, height: t2 };
    }
  }
  const M = await s.rasterizeCIMSymbolAsync(i, g2, w, p, d, y3, null, c2.viewParams, c2.allowScalingUp, (_b = l3 == null ? void 0 : l3.geometry) == null ? void 0 : _b.toJSON());
  if (!M) return null;
  const { width: S, height: v } = M, j = document.createElement("canvas");
  j.width = S, j.height = v;
  j.getContext("2d").putImageData(M, 0, 0);
  const x = u(b.width), z = u(b.height), P = new Image(x, z);
  P.src = j.toDataURL(), P.ariaLabel = l3.ariaLabel ?? null, P.alt = l3.ariaLabel ?? "", null != n && (P.style.opacity = `${n}`);
  let C = P;
  if (null != l3.effectView) {
    const e2 = { shape: { type: "image", x: 0, y: 0, width: x, height: z, src: P.src }, fill: null, stroke: null, offset: [0, 0] };
    C = l([[e2]], [x, z], { effectView: l3.effectView, ariaLabel: l3.ariaLabel });
  }
  return r && C && r.appendChild(C), C;
}
export {
  g as previewCIMSymbol
};
//# sourceMappingURL=previewCIMSymbol-KLFW2OLV.js.map
