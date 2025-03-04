import {
  a as a4,
  c,
  d,
  l,
  n as n4,
  p,
  r as r4,
  t as t2,
  t2 as t3,
  u as u2
} from "./chunk-CYSYJJBR.js";
import {
  i as i2,
  n as n3
} from "./chunk-Q36PLQUO.js";
import {
  N,
  a as a3,
  b,
  i,
  m as m2
} from "./chunk-QNB4N7PF.js";
import "./chunk-WHV4I2Y7.js";
import "./chunk-QUEKTCSS.js";
import "./chunk-HONYA6AI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-UMYFDXOJ.js";
import "./chunk-363AT5UF.js";
import {
  F,
  a as a2,
  m,
  s as s2,
  u
} from "./chunk-37HZDVD7.js";
import {
  r as r3
} from "./chunk-5EWD56QJ.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-JLFSX3JT.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P,
  g2 as g
} from "./chunk-UFBX3XSC.js";
import {
  Tt,
  V
} from "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import {
  r2 as r
} from "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import {
  A,
  a,
  e,
  s
} from "./chunk-M6FNW7GP.js";
import {
  n as n2,
  r as r2,
  t
} from "./chunk-5HI5HAKB.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";
import {
  has
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/layers/graphics/sources/support/uploadProgressWeights.js
var e2 = { upload: { createFromFiles: 0.8, loadMesh: 0.2 }, uploadAssetBlobs: { prepareAssetItems: 0.9, uploadAssetItems: 0.1 }, uploadConvertibleSource: { uploadEditSource: 0.5, serviceAssetsToGlb: 0.5 }, uploadLocalMesh: { meshToAssetBlob: 0.5, uploadAssetBlobs: 0.5 } };

// node_modules/@arcgis/core/support/progressUtils.js
function i3(s3, t4 = (s4) => {
}, e3) {
  return new n5(s3, t4, e3);
}
var n5 = class {
  constructor(s3, t4 = (s4) => {
  }, e3) {
    if (this.onProgress = t4, this.taskName = e3, this._progressMap = /* @__PURE__ */ new Map(), this._startTime = void 0, this._timingsMap = /* @__PURE__ */ new Map(), "number" == typeof s3) {
      this._weights = {};
      for (let t5 = 0; t5 < s3; t5++) {
        const e4 = t5, r5 = 1 / s3;
        this._weights[e4] = r5, this._progressMap.set(e4, 0);
      }
    } else this._weights = s3;
    this.emitProgress();
  }
  emitProgress() {
    let s3 = 0;
    for (const [t4, e3] of this._progressMap.entries()) {
      s3 += e3 * this._weights[t4];
    }
    if (1 === s3 && has("enable-feature:esri-3dofl-upload-timings")) {
      const s4 = Math.round(performance.now() - (this._startTime ?? 0)) / 1e3;
      console.log(`${this.taskName} done in ${s4} sec`);
      for (const [t4, e3] of this._timingsMap) {
        const r5 = Math.round(e3.end - e3.start) / 1e3, o = Math.round(r5 / s4 * 100);
        console.log(this.taskName ?? "Task", { stepKey: t4, stepTime: r5, relativeTime: o });
      }
    }
    this.onProgress(s3);
  }
  setProgress(s3, e3) {
    if (this._progressMap.set(s3, e3), has("enable-feature:esri-3dofl-upload-timings")) {
      const r5 = performance.now();
      this._startTime ?? (this._startTime = r5);
      const o = r(this._timingsMap, s3, () => ({ start: r5, end: 0 }));
      1 === e3 && (o.end = r5);
    }
    this.emitProgress();
  }
  simulate(s3, t4) {
    return a5((t5) => this.setProgress(s3, t5), t4);
  }
  makeOnProgress(s3) {
    return (t4) => this.setProgress(s3, t4);
  }
};
function a5(t4 = (s3) => {
}, e3 = l2) {
  const r5 = performance.now();
  t4(0);
  const o = setInterval(() => {
    const s3 = performance.now() - r5, o2 = 1 - Math.exp(-s3 / e3);
    t4(o2);
  }, g3);
  return e(() => {
    clearInterval(o), t4(1);
  });
}
function h(s3, t4 = c2) {
  return r2(t(s3 * f / t4));
}
function m3(s3, t4 = p2) {
  return r2(t(s3 * f / t4));
}
var c2 = 10;
var p2 = 10;
var f = 8e-6;
var g3 = n2(50);
var l2 = n2(1e3);

// node_modules/@arcgis/core/layers/graphics/sources/support/uploads.js
var n6 = 1e6;
var i4 = 20 * n6;
var p3 = 2e9;
var l3 = 3;
async function m4({ data: m5, name: f2, description: d2 }, u3, h2) {
  let w = null;
  try {
    const y = V(u3, "uploads"), j = V(y, "info"), { data: g4 } = await P(j, { query: { f: "json" }, responseType: "json" });
    s(h2);
    const q2 = g(u3), z2 = g4.maxUploadFileSize * n6, T = q2 ? p3 : z2, U = q2 ? Math.min(i4, z2) : i4;
    if (m5.size > T) throw new Error("Data too large");
    const A2 = V(y, "register"), { data: E } = await P(A2, { query: { f: "json", itemName: c3(f2), description: d2 }, responseType: "json", method: "post" });
    if (s(h2), !E.success) throw new Error("Registration failed");
    const { itemID: P2 } = E.item;
    w = V(y, P2);
    const D = V(w, "uploadPart"), I = Math.ceil(m5.size / U), M2 = new Array();
    for (let e3 = 0; e3 < I; ++e3) M2.push(m5.slice(e3 * U, Math.min((e3 + 1) * U, m5.size)));
    const v = M2.slice().reverse(), x = new Array(), F2 = i3(I, h2 == null ? void 0 : h2.onProgress, "uploadItem"), _2 = async () => {
      for (; 0 !== v.length; ) {
        const t4 = M2.length - v.length, r5 = v.pop(), s3 = new FormData(), n7 = F2.simulate(t4, h(r5.size));
        try {
          s3.append("f", "json"), s3.append("file", r5), s3.append("partId", `${t4}`);
          const { data: a6 } = await P(D, { timeout: 0, body: s3, responseType: "json", method: "post" });
          if (s(h2), !a6.success) throw new Error("Part upload failed");
        } finally {
          n7.remove();
        }
      }
    };
    for (let e3 = 0; e3 < l3 && 0 !== v.length; ++e3) x.push(_2());
    await Promise.all(x);
    const b2 = V(w, "commit"), { data: C } = await P(b2, { query: { f: "json", parts: M2.map((e3, o) => o).join(",") }, responseType: "json", method: "post" });
    if (s(h2), !C.success) throw new Error("Commit failed");
    return C.item;
  } catch (y) {
    if (null != w) {
      const o = V(w, "delete");
      await P(o, { query: { f: "json" }, responseType: "json", method: "post" });
    }
    throw y;
  }
}
function c3(e3) {
  return e3.replaceAll("/", "_").replaceAll("\\", "_");
}

// node_modules/@arcgis/core/layers/graphics/sources/support/uploadAssets.js
async function B(e3, s3, t4) {
  var _a;
  const r5 = e3.length;
  if (!r5) return (_a = t4 == null ? void 0 : t4.onProgress) == null ? void 0 : _a.call(t4, 1), [];
  const o = i3(r5, t4 == null ? void 0 : t4.onProgress, "uploadAssets");
  return Promise.all(e3.map((e4, r6) => q(e4, s3, { ...t4, onProgress: o.makeOnProgress(r6) })));
}
async function q(e3, { layer: s3, ongoingUploads: t4 }, r5) {
  var _a;
  const o = t4.get(e3);
  if (o) return o;
  if (!ne(s3)) throw new r4();
  if (L(e3, s3)) return (_a = r5 == null ? void 0 : r5.onProgress) == null ? void 0 : _a.call(r5, 1), e3;
  const n7 = H(e3, s3, r5);
  t4.set(e3, n7);
  try {
    await n7;
  } finally {
    t4.delete(e3);
  }
  return e3;
}
function L(e3, s3) {
  const { parsedUrl: t4 } = s3;
  return null != t4 && e3.metadata.externalSources.some((e4) => m2(e4, t4));
}
async function H(e3, s3, r5) {
  const { metadata: o } = e3, { displaySource: n7 } = o, a6 = W(n7 == null ? void 0 : n7.source, s3, { checkForConversionRequired: has("enable-feature:georeferenced-uploads") }), i5 = null != a6 ? $(a6, s3, r5) : o.externalSources.length > 0 ? J(e3, s3, r5) : z(e3, s3, r5), c4 = await i5;
  return s(r5), e3.addExternalSources([c4]), e3;
}
async function $(e3, s3, t4) {
  return { source: await Q(e3, s3, t4), original: true, unitConversionDisabled: true };
}
async function J(e3, s3, t4) {
  const r5 = ae(s3), { externalSources: o } = e3.metadata, n7 = M(o, s3);
  if (!n7) throw new n4();
  const a6 = i3(e2.uploadConvertibleSource, t4 == null ? void 0 : t4.onProgress, "uploadConvertibleSource"), i5 = await Q(n7, s3, { onProgress: a6.makeOnProgress("uploadEditSource") });
  e3.addExternalSources([{ source: i5, original: true }]);
  const c4 = n7.reduce((e4, { asset: s4 }) => s4 instanceof File ? e4 + s4.size : e4, 0), u3 = a6.simulate("serviceAssetsToGlb", m3(c4));
  try {
    const { source: o2, transform: n8, origin: a7 } = await se(i5, s3, r5);
    return e3.transform = n8, a7 && (e3.metadata.georeferenced = true, (t4 == null ? void 0 : t4.useAssetOrigin) && (e3.vertexSpace.origin = [a7.x, a7.y, a7.z ?? 0], e3.spatialReference = a7.spatialReference)), { source: o2, unitConversionDisabled: true };
  } finally {
    u3.remove();
  }
}
async function z(e3, s3, t4) {
  const r5 = i3(e2.uploadLocalMesh, t4 == null ? void 0 : t4.onProgress, "uploadLocalMesh"), o = G(e3, s3, { ...t4, onProgress: r5.makeOnProgress("meshToAssetBlob") });
  return { source: await V2([o], s3, { ...t4, onProgress: r5.makeOnProgress("uploadAssetBlobs") }), extent: e3.extent.clone(), original: true };
}
async function G(e3, s3, r5) {
  const o = ae(s3), n7 = await e3.load(r5), a6 = await n7.toBinaryGLTF({ origin: n7.origin, signal: r5 == null ? void 0 : r5.signal, ignoreLocalTransform: true, unitConversionDisabled: true });
  return s(r5), { blob: new Blob([a6], { type: "model/gltf-binary" }), assetName: `${r3()}.glb`, assetType: o };
}
function M(e3, s3) {
  for (const t4 of e3) {
    const e4 = W(t4.source, s3);
    if (e4) return e4;
  }
  return null;
}
function W(e3, { infoFor3D: s3 }, t4 = {}) {
  if (!e3) return null;
  const { supportedFormats: r5, editFormats: o } = s3, n7 = N(e3), a6 = new Array(), i5 = F(s3), c4 = m(s3);
  let u3 = false;
  for (const l4 of n7) {
    const e4 = K(l4, r5);
    if (!e4) return null;
    const { assetType: s4 } = e4;
    if (t4.checkForConversionRequired && (s4 === i5 || s4 === c4)) return null;
    o.includes(s4) && (u3 = true), a6.push(e4);
  }
  return u3 ? a6 : null;
}
function K(e3, s3) {
  const t4 = b(e3, s3);
  return t4 ? { asset: e3, assetType: t4 } : null;
}
async function Q(e3, s3, t4) {
  return V2(e3.map((e4) => X(e4, t4)), s3, t4);
}
async function V2(e3, s3, r5) {
  const o = i3(e2.uploadAssetBlobs, r5 == null ? void 0 : r5.onProgress, "uploadAssetBlobs"), n7 = await Z(e3, s3, { ...r5, onProgress: o.makeOnProgress("prepareAssetItems") });
  s(r5);
  const a6 = n7.map(({ item: e4 }) => e4), { uploadResults: i5 } = await _(a6, s3, { ...r5, onProgress: o.makeOnProgress("uploadAssetItems") });
  return s(r5), e3.map((e4, t4) => ee(n7[t4], i5[t4], s3));
}
async function X(e3, s3) {
  const { asset: r5, assetType: o } = e3;
  if (r5 instanceof File) return { blob: r5, assetName: r5.name, assetType: o };
  const n7 = await r5.toBlob(s3);
  return s(s3), { blob: n7, assetName: r5.assetName, assetType: o };
}
async function Y(e3, s3, r5) {
  const { blob: n7, assetType: a6, assetName: c4 } = e3;
  let u3 = null;
  try {
    const e4 = await m4({ data: n7, name: c4 }, s3.url, r5);
    s(r5), u3 = { assetType: a6, assetUploadId: e4.itemID };
  } catch (l4) {
    a(l4), ie().warnOnce(`Service ${s3.url} does not support the REST Uploads API.`);
  }
  if (!u3) {
    const e4 = await Tt(n7);
    if (s(r5), !e4.isBase64) throw new u2();
    u3 = { assetType: a6, assetData: e4.data };
  }
  if (!u3) throw new p();
  return { item: u3, assetName: c4 };
}
function Z(e3, s3, r5) {
  const o = i3(e3.length, r5 == null ? void 0 : r5.onProgress, "prepareAssetItems");
  return Promise.all(e3.map(async (e4, n7) => {
    const a6 = Y(await e4, s3, { ...r5, onProgress: o.makeOnProgress(n7) });
    return s(r5), a6;
  }));
}
async function _(s3, r5, o) {
  const n7 = a5(o == null ? void 0 : o.onProgress);
  try {
    const n8 = await P(V(r5.parsedUrl.path, "uploadAssets"), { timeout: 0, query: { f: "json", assets: JSON.stringify(s3) }, method: "post", responseType: "json" });
    if (s(o), n8.data.uploadResults.length !== s3.length) throw new a4(s3.length, n8.data.uploadResults.length);
    return n8.data;
  } finally {
    n7.remove();
  }
}
function ee(e3, s3, t4) {
  const { success: r5 } = s3;
  if (!r5) {
    const { error: t5 } = s3;
    throw new d(e3.assetName, t5);
  }
  const { assetHash: o } = s3, { assetName: n7, item: { assetType: a6 } } = e3, { infoFor3D: { supportedFormats: i5 } } = t4, c4 = s2(a6, i5);
  if (!c4) throw new c(a6);
  return new a3(n7, c4, [new i(`${t4.parsedUrl.path}/assets/${o}`, o)]);
}
async function se(e3, s3, t4) {
  var _a;
  const r5 = e3.map(({ assetName: e4, parts: s4 }) => ({ assetName: e4, assetHash: s4[0].partHash }));
  let o;
  try {
    const e4 = V(s3.parsedUrl.path, "convert3D"), n7 = (_a = s3.capabilities) == null ? void 0 : _a.operations.supportsAsyncConvert3D;
    o = (await (n7 ? oe : re)(e4, { query: { f: "json", assets: JSON.stringify(r5), transportType: "esriTransportTypeUrl", targetFormat: t4, async: n7 }, responseType: "json", timeout: 0 })).data;
  } catch (n7) {
    throw new l();
  }
  return te(s3, o);
}
function te(e3, s3) {
  const t4 = { source: s3.assets.map((s4) => {
    const t5 = u(s4.contentType, e3.infoFor3D.supportedFormats);
    if (!t5) throw new c(t5);
    return new a3(s4.assetName, s4.contentType, [new i(s4.assetURL, s4.assetHash)]);
  }), origin: void 0, transform: void 0 };
  if (has("enable-feature:georeferenced-uploads") && s3.transform) {
    if (t4.transform = i2(s3.transform), s3.spatialReference) {
      const e4 = g2.fromJSON(s3.spatialReference);
      t4.origin = n3(s3.transform, e4);
    }
  } else t4.transform = t3(e3.spatialReference);
  return t4;
}
function re(s3, t4) {
  return P(s3, t4);
}
async function oe(s3, t4) {
  const o = (await P(s3, t4)).data.statusUrl;
  for (; ; ) {
    const s4 = (await P(o, { query: { f: "json" }, responseType: "json" })).data;
    switch (s4.status) {
      case "Completed":
        return P(s4.resultUrl, { query: { f: "json" }, responseType: "json" });
      case "CompletedWithErrors":
        throw new Error(s4.status);
      case "Failed ImportChanges":
      case "InProgress":
      case "Pending":
      case "ExportAttachments":
      case "ExportChanges":
      case "ExportingData":
      case "ExportingSnapshot":
      case "ImportAttachments":
      case "ProvisioningReplica":
      case "UnRegisteringReplica":
        break;
      default:
        throw new Error();
    }
    await A(ce);
  }
}
function ne(e3) {
  return !!e3.infoFor3D && !!e3.url;
}
function ae({ infoFor3D: e3 }) {
  const s3 = a2(e3);
  if (!s3) throw new t2();
  return s3;
}
function ie() {
  return n.getLogger("esri.layers.graphics.sources.support.uploadAssets");
}
var ce = n2(1e3);
export {
  B as uploadAssets
};
//# sourceMappingURL=uploadAssets-CR5MLJ3J.js.map
