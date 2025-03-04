import {
  _
} from "./chunk-AI77OWDT.js";
import {
  c
} from "./chunk-CRKFUUKK.js";
import {
  n
} from "./chunk-7AOPU62X.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
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

// node_modules/@arcgis/core/libs/basisu/BasisUEncoder.js
function i() {
  return t ?? (t = (async () => {
    const i3 = await import("./basis_encoder-YBSGPFNT.js"), t2 = await i3.default({ locateFile: (i4) => n(`esri/libs/basisu/${i4}`) });
    return t2.initializeBasis(), t2;
  })()), t;
}
var t;

// node_modules/@arcgis/core/libs/dxtEncoder/DXTEncoder.js
function e() {
  return r ?? (r = (async () => {
    const e2 = await import("./dxt_encoder-GHMEOND3.js");
    return await e2.default({ locateFile: (e3) => n(`esri/libs/dxtEncoder/${e3}`) });
  })()), r;
}
var r;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/TextureCompressionWorker.js
var s;
var a;
var l = null;
var i2 = null;
var o = class {
  constructor(e2, t2) {
    this.internalFormat = e2, this.compressedTexture = t2;
  }
};
async function c2(e2) {
  var _a;
  const t2 = m(e2.data, e2.flipped);
  if (e2.hasS3TC) {
    i2 || await f();
    const n2 = new Uint8Array(t2.length);
    i2 == null ? void 0 : i2.encode(new Uint8Array(t2), e2.width, e2.height, n2);
    const r2 = R(n2, true), s2 = [n2.buffer];
    return { result: new o((r2 == null ? void 0 : r2.internalFormat) ?? null, (r2 == null ? void 0 : r2.textureData) ?? null), transferList: s2 };
  }
  if (e2.hasETC) {
    l || await u();
    const n2 = await h(t2, e2.width, e2.height, e2.hasMipmap), r2 = n2 ? await d(n2) : null, s2 = ((_a = r2 == null ? void 0 : r2.compressedTexture) == null ? void 0 : _a.levels.map((e3) => e3.buffer)) || [];
    return { result: new o((r2 == null ? void 0 : r2.internalFormat) ?? null, (r2 == null ? void 0 : r2.compressedTexture) ?? null), transferList: s2 };
  }
  return { result: new o(null, null) };
}
async function u() {
  l || (l = await (s ?? (s = i())));
}
async function f() {
  i2 || (i2 = await (a ?? (a = e())));
}
async function h(e2, t2, n2, r2, s2 = 255, a2 = 0, i3 = false, o2 = false) {
  if (!l) return null;
  const c3 = new l.BasisEncoder();
  c3.setPerceptual(!o2), c3.setCheckForAlpha(true), c3.setForceAlpha(false), c3.setRenormalize(o2), c3.setMipGen(r2), c3.setMipSRGB(!o2), c3.setCreateKTX2File(true), c3.setKTX2SRGBTransferFunc(!o2), c3.setQualityLevel(s2), c3.setCompressionLevel(a2);
  const u2 = new Uint8Array(e2.byteLength);
  c3.setSliceSourceImage(0, new Uint8Array(e2), t2, n2, i3);
  const f2 = c3.encode(u2), h2 = new Uint8Array(u2.buffer, 0, f2), d2 = new l.KTX2File(new Uint8Array(h2));
  return d2.isValid() ? (c3.delete(), h2) : (d2.close(), d2.delete(), c3.delete(), null);
}
async function d(e2) {
  if (!l) return new o(null, null);
  const n2 = new l.KTX2File(new Uint8Array(e2));
  n2.startTranscoding();
  const [s2, a2] = n2.getHasAlpha() ? [_.ETC2_RGBA, c.COMPRESSED_RGBA8_ETC2_EAC] : [_.ETC1_RGB, c.COMPRESSED_RGB8_ETC2], i3 = n2.getLevels(), c3 = [];
  for (let t2 = 0; t2 < i3; t2++) c3.push(new Uint8Array(n2.getImageTranscodedSizeInBytes(t2, 0, 0, s2))), n2.transcodeImage(c3[t2], t2, 0, 0, s2, 0, -1, -1);
  return n2.close(), n2.delete(), { internalFormat: a2, compressedTexture: { type: "compressed", levels: c3 } };
}
function m(e2, t2 = false) {
  const n2 = new OffscreenCanvas(e2.width, e2.height), r2 = n2.getContext("2d");
  t2 && r2.scale(1, -1), r2.drawImage(e2, 0, t2 ? -e2.height : 0);
  return r2.getImageData(0, 0, n2.width, n2.height).data;
}
var w = 31;
var T = 1;
var p = 2;
var C = 3;
var E = 4;
var y = 7;
var A = 21;
var g = 131072;
function S(e2) {
  return e2.charCodeAt(0) + (e2.charCodeAt(1) << 8) + (e2.charCodeAt(2) << 16) + (e2.charCodeAt(3) << 24);
}
var _2 = S("DXT1");
var b = S("DXT3");
var D = S("DXT5");
function R(e2, t2) {
  const n2 = new Int32Array(e2.buffer, e2.byteOffset, w);
  let s2, a2;
  switch (n2[A]) {
    case _2:
      s2 = 8, a2 = c.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case b:
      s2 = 16, a2 = c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case D:
      s2 = 16, a2 = c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return null;
  }
  let l2 = 1, i3 = n2[E], o2 = n2[C];
  (3 & i3 || 3 & o2) && (i3 = i3 + 3 & -4, o2 = o2 + 3 & -4);
  const c3 = i3, u2 = o2;
  let f2, h2;
  n2[p] & g && false !== t2 && (l2 = Math.max(1, n2[y]));
  let d2 = e2.byteOffset + n2[T] + 4;
  const m2 = [];
  for (let r2 = 0; r2 < l2; ++r2) h2 = (i3 + 3 >> 2) * (o2 + 3 >> 2) * s2, f2 = new Uint8Array(e2.buffer, d2, h2), m2.push(f2), d2 += h2, i3 = Math.max(1, i3 >> 1), o2 = Math.max(1, o2 >> 1);
  return { textureData: { type: "compressed", levels: m2 }, internalFormat: a2, width: c3, height: u2 };
}
export {
  o as TextureCompressionWorkerOutput,
  c2 as compress,
  h as compressRGBADataToKTX2,
  d as createTextureDataKTX2,
  u as initializeBasisEncoder,
  f as initializeDXTEncoder
};
//# sourceMappingURL=TextureCompressionWorker-V55PYR7G.js.map
