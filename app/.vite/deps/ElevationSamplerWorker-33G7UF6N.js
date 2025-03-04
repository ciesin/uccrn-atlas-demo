import {
  s
} from "./chunk-2N6IIYX4.js";
import {
  B
} from "./chunk-RJYMNNKW.js";
import "./chunk-D5KT2NSO.js";
import "./chunk-U2TKRMQE.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import "./chunk-YINRFSE5.js";
import {
  n
} from "./chunk-A6DPK5GC.js";
import "./chunk-WXGA2B5U.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-5BWPRODD.js";
import "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-363AT5UF.js";
import "./chunk-4WERUJEK.js";
import "./chunk-YFLBSX2D.js";
import "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
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
import {
  has
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/geometry/support/meshUtils/ElevationSamplerWorker.js
var n2 = class {
  async createIndex(t, r) {
    var _a;
    const n3 = new Array();
    if (!((_a = t.vertexAttributes) == null ? void 0 : _a.position)) return new s();
    const o2 = a(t), s3 = null != r ? await r.invoke("createIndexThread", o2, { transferList: n3 }) : this.createIndexThread(o2).result;
    return i().fromJSON(s3);
  }
  createIndexThread(e) {
    const t = i();
    if (!e) return { result: t.toJSON() };
    const r = new Float64Array(e.position);
    return e.components ? s2(t, r, e.components.map((e2) => new Uint32Array(e2))) : o(t, r);
  }
};
function o(e, t) {
  const r = new Array(t.length / 9);
  let n3 = 0;
  for (let o2 = 0; o2 < t.length; o2 += 9) r[n3++] = c(t, o2, o2 + 3, o2 + 6);
  return e.load(r), { result: e.toJSON() };
}
function s2(e, t, r) {
  let n3 = 0;
  for (const a2 of r) n3 += a2.length / 3;
  const o2 = new Array(n3);
  let s3 = 0;
  for (const a2 of r) for (let e2 = 0; e2 < a2.length; e2 += 3) o2[s3++] = c(t, 3 * a2[e2], 3 * a2[e2 + 1], 3 * a2[e2 + 2]);
  return e.load(o2), { result: e.toJSON() };
}
function a(e) {
  var _a;
  const { vertexAttributes: { position: n3 }, vertexSpace: o2, spatialReference: s3, transform: a2 } = e, i2 = (_a = B({ vertexAttributes: { position: n3 }, vertexSpace: o2, spatialReference: s3, transform: a2 }, n.absolute, { allowBufferReuse: true })) == null ? void 0 : _a.position;
  return i2 ? !e.components || e.components.some((e2) => !e2.faces) ? { position: i2.buffer } : { position: i2.buffer, components: e.components.map((e2) => e2.faces) } : null;
}
function i() {
  return new s(9, has("esri-csp-restrictions") ? (e) => e : [".minX", ".minY", ".maxX", ".maxY"]);
}
function c(e, t, r, n3) {
  return { minX: Math.min(e[t], e[r], e[n3]), maxX: Math.max(e[t], e[r], e[n3]), minY: Math.min(e[t + 1], e[r + 1], e[n3 + 1]), maxY: Math.max(e[t + 1], e[r + 1], e[n3 + 1]), p0: [e[t], e[t + 1], e[t + 2]], p1: [e[r], e[r + 1], e[r + 2]], p2: [e[n3], e[n3 + 1], e[n3 + 2]] };
}
export {
  n2 as default
};
//# sourceMappingURL=ElevationSamplerWorker-33G7UF6N.js.map
