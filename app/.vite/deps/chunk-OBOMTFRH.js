import {
  a as a2,
  i as i3
} from "./chunk-NQBVVSVQ.js";
import {
  t as t2
} from "./chunk-2LDU5WRH.js";
import {
  _
} from "./chunk-AI77OWDT.js";
import {
  s as s3
} from "./chunk-IR5AHWR5.js";
import {
  e,
  r as r3
} from "./chunk-XJ5CGMWY.js";
import {
  o
} from "./chunk-C5H3KDE3.js";
import {
  n as n4
} from "./chunk-BSNHCIEC.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  u as u2
} from "./chunk-YVJ7MJNT.js";
import {
  p,
  u2 as u3,
  w
} from "./chunk-5AJMZDUM.js";
import {
  D,
  G,
  L,
  c
} from "./chunk-CRKFUUKK.js";
import {
  i as i2
} from "./chunk-I4HN3ELT.js";
import {
  n as n3
} from "./chunk-7AOPU62X.js";
import {
  i2 as i
} from "./chunk-UFBX3XSC.js";
import {
  Z,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  l2 as l,
  m,
  r2,
  s as s2,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2,
  s2 as s
} from "./chunk-CWMZW2S5.js";
import {
  n2 as n,
  t2 as t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/libs/basisu/BasisUTranscoder.js
function i4() {
  return t3 ?? (t3 = (async () => {
    const i8 = await import("./basis_transcoder-ORJUPUQE.js"), t4 = await i8.default({ locateFile: (i9) => n3(`esri/libs/basisu/${i9}`) });
    return t4.initializeBasis(), t4;
  })()), t3;
}
var t3;

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/BasisUtil.js
var l2 = null;
var o2 = null;
async function g() {
  return null == o2 && (o2 = i4(), l2 = await o2), o2;
}
function u4(e3, t4) {
  if (null == l2) return e3.byteLength;
  const n6 = new l2.BasisFile(new Uint8Array(e3)), s5 = T(n6) ? m2(n6.getNumLevels(0), n6.getHasAlpha(), n6.getImageWidth(0, 0), n6.getImageHeight(0, 0), t4) : 0;
  return n6.close(), n6.delete(), s5;
}
function c2(e3, t4) {
  if (null == l2) return e3.byteLength;
  const n6 = new l2.KTX2File(new Uint8Array(e3)), s5 = E(n6) ? m2(n6.getLevels(), n6.getHasAlpha(), n6.getWidth(), n6.getHeight(), t4) : 0;
  return n6.close(), n6.delete(), s5;
}
function m2(e3, t4, s5, r5, i8) {
  const l4 = u3(t4 ? c.COMPRESSED_RGBA8_ETC2_EAC : c.COMPRESSED_RGB8_ETC2), o5 = i8 && e3 > 1 ? (4 ** e3 - 1) / (3 * 4 ** (e3 - 1)) : 1;
  return Math.ceil(s5 * r5 * l4 * o5);
}
function T(e3) {
  return e3.getNumImages() >= 1 && !e3.isUASTC();
}
function E(e3) {
  return e3.getFaces() >= 1 && e3.isETC1S();
}
async function h(e3, t4, n6) {
  null == l2 && (l2 = await g());
  const s5 = new l2.BasisFile(new Uint8Array(n6));
  if (!T(s5)) return null;
  s5.startTranscoding();
  const r5 = p2(e3, t4, s5.getNumLevels(0), s5.getHasAlpha(), s5.getImageWidth(0, 0), s5.getImageHeight(0, 0), (e4, t5) => s5.getImageTranscodedSizeInBytes(0, e4, t5), (e4, t5, n7) => s5.transcodeImage(n7, 0, e4, t5, 0, 0));
  return s5.close(), s5.delete(), r5;
}
async function _2(e3, t4, n6) {
  null == l2 && (l2 = await g());
  const s5 = new l2.KTX2File(new Uint8Array(n6));
  if (!E(s5)) return null;
  s5.startTranscoding();
  const r5 = p2(e3, t4, s5.getLevels(), s5.getHasAlpha(), s5.getWidth(), s5.getHeight(), (e4, t5) => s5.getImageTranscodedSizeInBytes(e4, 0, 0, t5), (e4, t5, n7) => s5.transcodeImage(n7, e4, 0, 0, t5, 0, -1, -1));
  return s5.close(), s5.delete(), r5;
}
function p2(e3, a6, l4, o5, g3, u6, c4, m4) {
  const { compressedTextureETC: T3, compressedTextureS3TC: E3 } = e3.capabilities, [h4, _4] = T3 ? o5 ? [_.ETC2_RGBA, c.COMPRESSED_RGBA8_ETC2_EAC] : [_.ETC1_RGB, c.COMPRESSED_RGB8_ETC2] : E3 ? o5 ? [_.BC3_RGBA, c.COMPRESSED_RGBA_S3TC_DXT5_EXT] : [_.BC1_RGB, c.COMPRESSED_RGB_S3TC_DXT1_EXT] : [_.RGBA32, G.RGBA], p4 = a6.hasMipmap ? l4 : Math.min(1, l4), A = [];
  for (let t4 = 0; t4 < p4; t4++) A.push(new Uint8Array(c4(t4, h4))), m4(t4, h4, A[t4]);
  return a6.internalFormat = _4, a6.hasMipmap = A.length > 1, a6.samplingMode = a6.hasMipmap ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, a6.width = g3, a6.height = u6, new w(e3, a6, { type: "compressed", levels: A });
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DDSUtil.js
var o3 = () => n2.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil");
var a3 = 542327876;
var i5 = 131072;
var s4 = 4;
function l3(e3) {
  return e3.charCodeAt(0) + (e3.charCodeAt(1) << 8) + (e3.charCodeAt(2) << 16) + (e3.charCodeAt(3) << 24);
}
function u5(e3) {
  return String.fromCharCode(255 & e3, e3 >> 8 & 255, e3 >> 16 & 255, e3 >> 24 & 255);
}
var c3 = l3("DXT1");
var h2 = l3("DXT3");
var m3 = l3("DXT5");
var f = 31;
var d = 0;
var p3 = 1;
var g2 = 2;
var D2 = 3;
var C = 4;
var w2 = 7;
var T2 = 20;
var _3 = 21;
function E2(e3, r5, o5) {
  const a6 = S(o5, r5.hasMipmap ?? false);
  if (null == a6) throw new Error("DDS texture data is null");
  const { textureData: i8, internalFormat: s5, width: l4, height: u6 } = a6;
  return r5.samplingMode = i8.levels.length > 1 ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, r5.hasMipmap = i8.levels.length > 1, r5.internalFormat = s5, r5.width = l4, r5.height = u6, new w(e3, r5, i8);
}
function S(e3, t4) {
  const n6 = new Int32Array(e3.buffer, e3.byteOffset, f);
  if (n6[d] !== a3) return o3().error("Invalid magic number in DDS header"), null;
  if (!(n6[T2] & s4)) return o3().error("Unsupported format, must contain a FourCC code"), null;
  const l4 = n6[_3];
  let E3, S2;
  switch (l4) {
    case c3:
      E3 = 8, S2 = c.COMPRESSED_RGB_S3TC_DXT1_EXT;
      break;
    case h2:
      E3 = 16, S2 = c.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      break;
    case m3:
      E3 = 16, S2 = c.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      break;
    default:
      return o3().error("Unsupported FourCC code:", u5(l4)), null;
  }
  let b = 1, A = n6[C], M2 = n6[D2];
  (3 & A || 3 & M2) && (o3().warn("Rounding up compressed texture size to nearest multiple of 4."), A = A + 3 & -4, M2 = M2 + 3 & -4);
  const x = A, R2 = M2;
  let X, I;
  n6[g2] & i5 && false !== t4 && (b = Math.max(1, n6[w2]));
  let v = e3.byteOffset + n6[p3] + 4;
  const y = [];
  for (let r5 = 0; r5 < b; ++r5) I = (A + 3 >> 2) * (M2 + 3 >> 2) * E3, X = new Uint8Array(e3.buffer, v, I), y.push(X), v += I, A = Math.max(1, A >> 1), M2 = Math.max(1, M2 >> 1);
  return { textureData: { type: "compressed", levels: y }, internalFormat: S2, width: x, height: R2 };
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/textureUtils.js
var e2 = 16;
function n5(t4) {
  return Math.ceil(t4 / e2) * e2;
}
function i6(t4) {
  return Math.floor(t4 / e2) * e2;
}
function r4(t4, e3) {
  const n6 = 1048576, i8 = 4096, r5 = 2;
  let h4 = t4.width * t4.height;
  if (h4 < i8) return t4 instanceof ImageData ? a4(t4) : t4;
  let c4 = t4.width, u6 = t4.height;
  do {
    c4 = Math.ceil(c4 / r5), u6 = Math.ceil(u6 / r5), h4 = c4 * u6;
  } while (h4 > n6 || null != e3 && (c4 > e3 || u6 > e3));
  return o4(t4, c4, u6);
}
function h3(t4, e3) {
  const n6 = Math.max(t4.width, t4.height);
  if (n6 <= e3) return t4;
  const i8 = e3 / n6;
  return o4(t4, Math.round(t4.width * i8), Math.round(t4.height * i8));
}
function o4(t4, e3, n6) {
  if (t4 instanceof ImageData) return o4(a4(t4), e3, n6);
  const i8 = document.createElement("canvas");
  i8.width = e3, i8.height = n6;
  return i8.getContext("2d").drawImage(t4, 0, 0, i8.width, i8.height), i8;
}
function a4(e3) {
  const n6 = document.createElement("canvas");
  n6.width = e3.width, n6.height = e3.height;
  const i8 = n6.getContext("2d");
  if (null == i8) throw new s("Failed to create 2d context from HTMLCanvasElement");
  return i8.putImageData(e3, 0, 0), n6;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Texture.js
var N = class extends r3 {
  constructor(e3, r5) {
    super(), this._data = e3, this.type = e.Texture, this.events = new i2(), this._glTexture = null, this._loadingPromise = null, this._loadingController = null, this._parameters = { ...M, ...r5 }, this._startPreload(e3);
  }
  dispose() {
    this.unload(), this._data = this.frameUpdate = void 0;
  }
  _startPreload(e3) {
    null != e3 && (e3 instanceof HTMLVideoElement ? (this.frameUpdate = (t4) => this._frameUpdate(e3, t4), this._startPreloadVideoElement(e3)) : e3 instanceof HTMLImageElement && this._startPreloadImageElement(e3));
  }
  _startPreloadVideoElement(e3) {
    if (!(Z(e3.src) || "auto" === e3.preload && e3.crossOrigin)) {
      e3.preload = "auto", e3.crossOrigin = "anonymous";
      const t4 = !e3.paused;
      if (e3.src = e3.src, t4 && e3.autoplay) {
        const t5 = () => {
          e3.removeEventListener("canplay", t5), e3.play();
        };
        e3.addEventListener("canplay", t5);
      }
    }
  }
  _startPreloadImageElement(e3) {
    tt(e3.src) || Z(e3.src) || e3.crossOrigin || (e3.crossOrigin = "anonymous", e3.src = e3.src);
  }
  _createDescriptor(e3) {
    const t4 = new p();
    return t4.wrapMode = this._parameters.wrap ?? D.REPEAT, t4.flipped = !this._parameters.noUnpackFlip, t4.samplingMode = this._parameters.mipmap ? L.LINEAR_MIPMAP_LINEAR : L.LINEAR, t4.hasMipmap = !!this._parameters.mipmap, t4.preMultiplyAlpha = !!this._parameters.preMultiplyAlpha, t4.maxAnisotropy = this._parameters.maxAnisotropy ?? (this._parameters.mipmap ? e3.parameters.maxMaxAnisotropy : 1), t4;
  }
  get glTexture() {
    return this._glTexture;
  }
  get memoryEstimate() {
    var _a;
    return ((_a = this._glTexture) == null ? void 0 : _a.usedMemory) || H(this._data, this._parameters);
  }
  load(e3) {
    if (this._glTexture) return this._glTexture;
    if (this._loadingPromise) return this._loadingPromise;
    const t4 = this._data;
    return null == t4 ? (this._glTexture = new w(e3, this._createDescriptor(e3), null), this._glTexture) : (this._parameters.reloadable || (this._data = void 0), "string" == typeof t4 ? this._loadFromURL(e3, t4) : t4 instanceof Image ? this._loadFromImageElement(e3, t4) : t4 instanceof HTMLVideoElement ? this._loadFromVideoElement(e3, t4) : t4 instanceof ImageData || t4 instanceof HTMLCanvasElement ? this._loadFromImage(e3, t4) : t(t4) && this._parameters.encoding === u2.DDS_ENCODING ? this._loadFromDDSData(e3, t4) : n(t4) && this._parameters.encoding === u2.DDS_ENCODING ? this._loadFromDDSData(e3, new Uint8Array(t4)) : (n(t4) || t(t4)) && this._parameters.encoding === u2.KTX2_ENCODING ? this._loadFromKTX2(e3, t4) : (n(t4) || t(t4)) && this._parameters.encoding === u2.BASIS_ENCODING ? this._loadFromBasis(e3, t4) : t(t4) ? this._loadFromPixelData(e3, t4) : n(t4) ? this._loadFromPixelData(e3, new Uint8Array(t4)) : null);
  }
  _frameUpdate(e3, t4) {
    return null == this._glTexture || e3.readyState < V.HAVE_CURRENT_DATA || t4 === e3.currentTime ? t4 : (this._glTexture.setData(e3), this._glTexture.descriptor.hasMipmap && this._glTexture.generateMipmap(), this._parameters.updateCallback && this._parameters.updateCallback(), e3.currentTime);
  }
  _loadFromDDSData(e3, t4) {
    return this._glTexture = E2(e3, this._createDescriptor(e3), t4), this._glTexture;
  }
  _loadFromKTX2(e3, t4) {
    return this._loadAsync(() => _2(e3, this._createDescriptor(e3), t4).then((e4) => (this._glTexture = e4, e4)));
  }
  _loadFromBasis(e3, t4) {
    return this._loadAsync(() => h(e3, this._createDescriptor(e3), t4).then((e4) => (this._glTexture = e4, e4)));
  }
  _loadFromPixelData(e3, t4) {
    s3(this._parameters.width > 0 && this._parameters.height > 0);
    const r5 = this._createDescriptor(e3);
    return r5.pixelFormat = 1 === this._parameters.components ? G.LUMINANCE : 3 === this._parameters.components ? G.RGB : G.RGBA, r5.width = this._parameters.width ?? 0, r5.height = this._parameters.height ?? 0, this._glTexture = new w(e3, r5, t4), this._glTexture;
  }
  _loadFromURL(e3, t4) {
    return this._loadAsync(async (r5) => {
      const s5 = await t2(t4, { signal: r5 });
      return s2(r5), this._loadFromImage(e3, s5);
    });
  }
  _loadFromImageElement(e3, t4) {
    return t4.complete ? this._loadFromImage(e3, t4) : this._loadAsync(async (r5) => {
      const s5 = await i(t4, t4.src, false, r5);
      return s2(r5), this._loadFromImage(e3, s5);
    });
  }
  _loadFromVideoElement(e3, t4) {
    return t4.readyState >= V.HAVE_CURRENT_DATA ? this._loadFromImage(e3, t4) : this._loadFromVideoElementAsync(e3, t4);
  }
  _loadFromVideoElementAsync(t4, r5) {
    return this._loadAsync((a6) => new Promise((n6, l4) => {
      const m4 = () => {
        r5.removeEventListener("loadeddata", h4), r5.removeEventListener("error", _4), l(p4);
      }, h4 = () => {
        r5.readyState >= V.HAVE_CURRENT_DATA && (m4(), n6(this._loadFromImage(t4, r5)));
      }, _4 = (t5) => {
        m4(), l4(t5 || new s("Failed to load video"));
      };
      r5.addEventListener("loadeddata", h4), r5.addEventListener("error", _4);
      const p4 = m(a6, () => _4(u()));
    }));
  }
  _loadFromImage(e3, t4) {
    let r5 = t4;
    if (!(r5 instanceof HTMLVideoElement)) {
      const { maxTextureSize: t5 } = e3.parameters;
      r5 = this._parameters.downsampleUncompressed ? r4(r5, t5) : h3(r5, t5);
    }
    const s5 = R(r5);
    this._parameters.width = s5.width, this._parameters.height = s5.height;
    const a6 = this._createDescriptor(e3);
    return a6.pixelFormat = 3 === this._parameters.components ? G.RGB : G.RGBA, a6.width = s5.width, a6.height = s5.height, a6.shouldCompress = this._parameters.shouldCompress, this._glTexture = new w(e3, a6, r5), this._glTexture;
  }
  _loadAsync(e3) {
    const t4 = new AbortController();
    this._loadingController = t4;
    const r5 = e3(t4.signal);
    this._loadingPromise = r5;
    const s5 = () => {
      this._loadingController === t4 && (this._loadingController = null), this._loadingPromise === r5 && (this._loadingPromise = null);
    };
    return r5.then(s5, s5), r5;
  }
  unload() {
    if (this._glTexture = r2(this._glTexture), null != this._loadingController) {
      const e3 = this._loadingController;
      this._loadingController = null, this._loadingPromise = null, e3.abort();
    }
    this.events.emit("unloaded");
  }
  get parameters() {
    return this._parameters;
  }
};
function H(e3, t4) {
  if (null == e3) return 0;
  if (n(e3) || t(e3)) return t4.encoding === u2.KTX2_ENCODING ? c2(e3, !!t4.mipmap) : t4.encoding === u2.BASIS_ENCODING ? u4(e3, !!t4.mipmap) : e3.byteLength;
  const { width: r5, height: s5 } = e3 instanceof Image || e3 instanceof ImageData || e3 instanceof HTMLCanvasElement || e3 instanceof HTMLVideoElement ? R(e3) : t4;
  return (t4.mipmap ? 4 / 3 : 1) * r5 * s5 * (t4.components || 4) || 0;
}
function R(e3) {
  return e3 instanceof HTMLVideoElement ? { width: e3.videoWidth, height: e3.videoHeight } : e3;
}
var V;
!function(e3) {
  e3[e3.HAVE_NOTHING = 0] = "HAVE_NOTHING", e3[e3.HAVE_METADATA = 1] = "HAVE_METADATA", e3[e3.HAVE_CURRENT_DATA = 2] = "HAVE_CURRENT_DATA", e3[e3.HAVE_FUTURE_DATA = 3] = "HAVE_FUTURE_DATA", e3[e3.HAVE_ENOUGH_DATA = 4] = "HAVE_ENOUGH_DATA";
}(V || (V = {}));
var M = { wrap: { s: D.REPEAT, t: D.REPEAT }, mipmap: true, noUnpackFlip: false, preMultiplyAlpha: false, downsampleUncompressed: false, shouldCompress: false };

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoubleConfiguration.js
var i7 = class extends a2 {
  constructor() {
    super(...arguments), this.instancedDoublePrecision = false, this.hasModelTransformation = false;
  }
};
r([i3()], i7.prototype, "instancedDoublePrecision", void 0), r([i3()], i7.prototype, "hasModelTransformation", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultTechniqueConfiguration.js
var a5 = class extends i7 {
  constructor() {
    super(...arguments), this.output = n4.Color, this.oitPass = o.NONE, this.hasSlicePlane = false, this.bindType = a.Pass, this.writeDepth = true;
  }
};
r([i3({ count: n4.COUNT })], a5.prototype, "output", void 0), r([i3({ count: o.COUNT })], a5.prototype, "oitPass", void 0), r([i3()], a5.prototype, "hasSlicePlane", void 0);

export {
  n5 as n,
  i6 as i,
  N,
  a5 as a
};
//# sourceMappingURL=chunk-OBOMTFRH.js.map
