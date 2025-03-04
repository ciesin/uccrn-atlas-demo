import {
  t as t4
} from "./chunk-DSDGAHN5.js";
import {
  z
} from "./chunk-NTBYJDIM.js";
import {
  f as f2
} from "./chunk-EMVGISAT.js";
import {
  N
} from "./chunk-OBOMTFRH.js";
import {
  t as t5
} from "./chunk-2LDU5WRH.js";
import {
  n as n9
} from "./chunk-FWGIWKNF.js";
import {
  n as n10,
  o as o4,
  s as s3,
  t as t6
} from "./chunk-AY7NUQ6K.js";
import {
  t as t3
} from "./chunk-LAXBDZHV.js";
import {
  a2 as a3
} from "./chunk-KJG6NJ7J.js";
import {
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  u
} from "./chunk-U6JFTJMZ.js";
import {
  n as n5,
  n2 as n6,
  o2 as o3
} from "./chunk-DPIMWYG5.js";
import {
  n as n8
} from "./chunk-TGRCAT2Q.js";
import {
  e as e3,
  i as i4,
  n as n7
} from "./chunk-YVJ7MJNT.js";
import {
  o
} from "./chunk-5LZH2YNQ.js";
import {
  d as d2,
  o as o2
} from "./chunk-D5KT2NSO.js";
import {
  d,
  l as l2,
  n as n4,
  r as r3
} from "./chunk-U2TKRMQE.js";
import {
  E as E2,
  L,
  O,
  c as c2,
  i as i3,
  x
} from "./chunk-WXGA2B5U.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  e as e2,
  t as t2
} from "./chunk-K24WU5UX.js";
import {
  a as a2
} from "./chunk-ESCAO5DD.js";
import {
  f,
  i as i5
} from "./chunk-HYJ4YR5G.js";
import {
  D
} from "./chunk-CRKFUUKK.js";
import {
  s as s2
} from "./chunk-O2L6JAHP.js";
import {
  i as i2,
  j,
  n as n3
} from "./chunk-LH36NQSN.js";
import {
  A,
  E,
  I,
  c,
  i,
  r as r2
} from "./chunk-UMYFDXOJ.js";
import {
  r
} from "./chunk-WF2ACUGU.js";
import {
  l,
  q
} from "./chunk-XEBZUAYT.js";
import {
  h
} from "./chunk-53ZTROGC.js";
import {
  t
} from "./chunk-BV7O6P7Z.js";
import {
  n as n2,
  u as u2
} from "./chunk-JLFSX3JT.js";
import {
  T
} from "./chunk-6P7HXSJ6.js";
import {
  _
} from "./chunk-ACGZOBZ6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  a
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/3d/glTF/internal/TextureTransformUtils.js
function s4(s6) {
  if (null == s6) return null;
  const a4 = null != s6.offset ? s6.offset : i5, n11 = null != s6.rotation ? s6.rotation : 0, e5 = null != s6.scale ? s6.scale : f, f3 = t2(1, 0, 0, 0, 1, 0, a4[0], a4[1], 1), c3 = t2(Math.cos(n11), -Math.sin(n11), 0, Math.sin(n11), Math.cos(n11), 0, 0, 0, 1), m = t2(e5[0], 0, 0, 0, e5[1], 0, 0, 0, 1), u3 = e2();
  return i2(u3, c3, m), i2(u3, f3, u3), u3;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/ProcessedObjectResource.js
var s5 = class {
  constructor() {
    this.geometries = new Array(), this.materials = new Array(), this.textures = new Array();
  }
};
var t7 = class {
  constructor(t8, e5, r4) {
    this.name = t8, this.lodThreshold = e5, this.pivotOffset = r4, this.stageResources = new s5(), this.numberOfVertices = 0;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/wosrLoader.js
var v = () => n.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");
var A2 = class {
  constructor(e5, t8, r4) {
    this.resource = e5, this.textures = t8, this.cachedMemory = r4;
  }
};
async function j2(e5, t8) {
  const r4 = await I2(e5, t8), n11 = await T2(r4.textureDefinitions ?? {}, t8);
  let o5 = 0;
  for (const s6 in n11) if (n11.hasOwnProperty(s6)) {
    const e6 = n11[s6];
    o5 += (e6 == null ? void 0 : e6.image) ? e6.image.width * e6.image.height * 4 : 0;
  }
  return new A2(r4, n11, o5 + u(r4));
}
async function I2(r4, n11) {
  const s6 = n11 == null ? void 0 : n11.streamDataRequester;
  if (s6) return P2(r4, s6, n11);
  const o5 = await _(P(r4, n11));
  if (true === o5.ok) return o5.value.data;
  a(o5.error), M(o5.error);
}
async function P2(e5, r4, n11) {
  const s6 = await _(r4.request(e5, "json", n11));
  if (true === s6.ok) return s6.value;
  a(s6.error), M(s6.error.details.url);
}
function M(e5) {
  throw new s("", `Request for object resource failed: ${e5}`);
}
function U(e5) {
  const t8 = e5.params, r4 = t8.topology;
  let n11 = true;
  switch (t8.vertexAttributes || (v().warn("Geometry must specify vertex attributes"), n11 = false), t8.topology) {
    case "PerAttributeArray":
      break;
    case "Indexed":
    case null:
    case void 0: {
      const e6 = t8.faces;
      if (e6) {
        if (t8.vertexAttributes) for (const r5 in t8.vertexAttributes) {
          const t9 = e6[r5];
          (t9 == null ? void 0 : t9.values) ? (null != t9.valueType && "UInt32" !== t9.valueType && (v().warn(`Unsupported indexed geometry indices type '${t9.valueType}', only UInt32 is currently supported`), n11 = false), null != t9.valuesPerElement && 1 !== t9.valuesPerElement && (v().warn(`Unsupported indexed geometry values per element '${t9.valuesPerElement}', only 1 is currently supported`), n11 = false)) : (v().warn(`Indexed geometry does not specify face indices for '${r5}' attribute`), n11 = false);
        }
      } else v().warn("Indexed geometries must specify faces"), n11 = false;
      break;
    }
    default:
      v().warn(`Unsupported topology '${r4}'`), n11 = false;
  }
  e5.params.material || (v().warn("Geometry requires material"), n11 = false);
  const s6 = e5.params.vertexAttributes;
  for (const o5 in s6) {
    s6[o5].values || (v().warn("Geometries with externally defined attributes are not yet supported"), n11 = false);
  }
  return n11;
}
function E3(e5, t8) {
  var _a, _b;
  const r4 = new Array(), n11 = new Array(), s6 = new Array(), a4 = new t4(), u3 = e5.resource, c3 = r.parse(u3.version || "1.0", "wosr");
  R.validate(c3);
  const p = u3.model.name, g = u3.model.geometries, x2 = u3.materialDefinitions ?? {}, v2 = e5.textures;
  let A3 = 0;
  const j3 = /* @__PURE__ */ new Map();
  for (let o5 = 0; o5 < g.length; o5++) {
    const e6 = g[o5];
    if (!U(e6)) continue;
    const i6 = q2(e6), u4 = e6.params.vertexAttributes, c4 = [], p2 = (t9) => {
      if ("PerAttributeArray" === e6.params.topology) return null;
      const r5 = e6.params.faces;
      for (const e7 in r5) if (e7 === t9) return r5[e7].values;
      return null;
    }, I3 = u4[e4.POSITION], P3 = I3.values.length / I3.valuesPerElement;
    for (const t9 in u4) {
      const e7 = u4[t9], r5 = e7.values, n12 = p2(t9) ?? o(P3);
      c4.push([t9, new t3(r5, n12, e7.valuesPerElement, true)]);
    }
    const M2 = i6.texture, E4 = v2 && v2[M2];
    if (E4 && !j3.has(M2)) {
      const { image: e7, parameters: t9 } = E4, r5 = new N(e7, t9);
      n11.push(r5), j3.set(M2, r5);
    }
    const O3 = j3.get(M2), T3 = O3 ? O3.id : void 0, R2 = i6.material;
    let B = a4.get(R2, M2);
    if (null == B) {
      const e7 = x2[R2.slice(R2.lastIndexOf("/") + 1)].params;
      1 === e7.transparency && (e7.transparency = 0);
      const r5 = E4 && E4.alphaChannelUsage, n12 = e7.transparency > 0 || "transparency" === r5 || "maskAndTransparency" === r5, s7 = E4 ? k(E4.alphaChannelUsage) : void 0, o6 = { ambient: u2(e7.diffuse), diffuse: u2(e7.diffuse), opacity: 1 - (e7.transparency || 0), transparent: n12, textureAlphaMode: s7, textureAlphaCutoff: 0.33, textureId: T3, doubleSided: true, cullFace: e3.None, colorMixMode: e7.externalColorMixMode || "tint", textureAlphaPremultiplied: (E4 == null ? void 0 : E4.parameters.preMultiplyAlpha) ?? false };
      (t8 == null ? void 0 : t8.materialParameters) && Object.assign(o6, t8.materialParameters), B = new z(o6, t8), a4.set(R2, M2, B);
    }
    s6.push(B);
    const C = new f2(B, c4);
    A3 += ((_b = (_a = c4.find((e7) => e7[0] === e4.POSITION)) == null ? void 0 : _a[1]) == null ? void 0 : _b.indices.length) ?? 0, r4.push(C);
  }
  return { engineResources: [{ name: p, stageResources: { textures: n11, materials: s6, geometries: r4 }, pivotOffset: u3.model.pivotOffset, numberOfVertices: A3, lodThreshold: null }], referenceBoundingBox: O2(r4) };
}
function O2(e5) {
  const t8 = q();
  return e5.forEach((e6) => {
    const r4 = e6.boundingInfo;
    null != r4 && (l(t8, r4.bbMin), l(t8, r4.bbMax));
  }), t8;
}
async function T2(e5, t8) {
  const r4 = new Array();
  for (const o5 in e5) {
    const n12 = e5[o5], s7 = n12.images[0].data;
    if (!s7) {
      v().warn("Externally referenced texture data is not yet supported");
      continue;
    }
    const a4 = n12.encoding + ";base64," + s7, i6 = "/textureDefinitions/" + o5, l3 = "rgba" === n12.channels ? n12.alphaChannelUsage || "transparency" : "none", u3 = { noUnpackFlip: true, wrap: { s: D.REPEAT, t: D.REPEAT }, preMultiplyAlpha: k(l3) !== i4.Opaque }, c3 = (t8 == null ? void 0 : t8.disableTextures) ? Promise.resolve(null) : t5(a4, t8);
    r4.push(c3.then((e6) => ({ refId: i6, image: e6, parameters: u3, alphaChannelUsage: l3 })));
  }
  const n11 = await Promise.all(r4), s6 = {};
  for (const o5 of n11) s6[o5.refId] = o5;
  return s6;
}
function k(e5) {
  switch (e5) {
    case "mask":
      return i4.Mask;
    case "maskAndTransparency":
      return i4.MaskBlend;
    case "none":
      return i4.Opaque;
    default:
      return i4.Blend;
  }
}
function q2(e5) {
  const t8 = e5.params;
  return { id: 1, material: t8.material, texture: t8.texture, region: t8.texture };
}
var R = new r(1, 2, "wosr");

// node_modules/@arcgis/core/views/3d/layers/graphics/objectResourceUtils.js
async function Y(e5, t8) {
  var _a;
  const o5 = Z(a2(e5));
  if ("wosr" === o5.fileType) {
    const e6 = await (t8.cache ? t8.cache.loadWOSR(o5.url, t8) : j2(o5.url, t8)), { engineResources: r4, referenceBoundingBox: s7 } = E3(e6, t8);
    return { lods: r4, referenceBoundingBox: s7, isEsriSymbolResource: false, isWosr: true };
  }
  let s6;
  if (t8.cache) s6 = await t8.cache.loadGLTF(o5.url, t8, !!t8.usePBR);
  else {
    const { loadGLTF: e6 } = await import("./loader-2V5DGZB2.js");
    s6 = await e6(new n6(t8.streamDataRequester), o5.url, t8, t8.usePBR);
  }
  const i6 = (_a = s6.model.meta) == null ? void 0 : _a.ESRI_proxyEllipsoid, n11 = s6.meta.isEsriSymbolResource && null != i6 && "EsriRealisticTreesStyle" === s6.meta.ESRI_webstyle;
  n11 && !s6.customMeta.esriTreeRendering && (s6.customMeta.esriTreeRendering = true, ie(s6, i6));
  const l3 = !!t8.usePBR, a4 = s6.meta.isEsriSymbolResource ? { usePBR: l3, isSchematic: false, treeRendering: n11, mrrFactors: s3 } : { usePBR: l3, isSchematic: false, treeRendering: false, mrrFactors: t6 }, u3 = { ...t8.materialParameters, treeRendering: n11 }, { engineResources: c3, referenceBoundingBox: m } = ee(s6, a4, u3, t8, o5.specifiedLodIndex);
  return { lods: c3, referenceBoundingBox: m, isEsriSymbolResource: s6.meta.isEsriSymbolResource, isWosr: false };
}
function Z(e5) {
  const r4 = e5.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
  if (r4) return { fileType: "gltf", url: r4[1], specifiedLodIndex: null != r4[4] ? Number(r4[4]) : null };
  return e5.match(/(.*\.(json|json\.gz))$/) ? { fileType: "wosr", url: e5, specifiedLodIndex: null } : { fileType: "unknown", url: e5, specifiedLodIndex: null };
}
function ee(e5, r4, t8, o5, s6) {
  const i6 = e5.model, n11 = new Array(), l3 = /* @__PURE__ */ new Map(), a4 = /* @__PURE__ */ new Map(), u3 = i6.lods.length, c3 = q();
  return i6.lods.forEach((e6, m) => {
    const f3 = true === o5.skipHighLods && (u3 > 1 && 0 === m || u3 > 3 && 1 === m) || false === o5.skipHighLods && null != s6 && m !== s6;
    if (f3 && 0 !== m) return;
    const d3 = new t7(e6.name, e6.lodThreshold, [0, 0, 0]);
    e6.parts.forEach((e7) => {
      const s7 = f3 ? new z({}, o5) : re(i6, e7, d3, r4, t8, l3, a4, o5), { geometry: n12, vertexCount: u4 } = te(e7, s7 ?? new z({}, o5)), p = n12.boundingInfo;
      null != p && 0 === m && (l(c3, p.bbMin), l(c3, p.bbMax)), null != s7 && (d3.stageResources.geometries.push(n12), d3.numberOfVertices += u4);
    }), f3 || n11.push(d3);
  }), { engineResources: n11, referenceBoundingBox: c3 };
}
function re(r4, t8, o5, s6, i6, n11, l3, u3) {
  var _a, _b;
  const c3 = r4.materials.get(t8.material);
  if (null == c3) return null;
  const { normal: m, color: f3, texCoord0: d3, tangent: p } = t8.attributes, g = t8.material + (m ? "_normal" : "") + (f3 ? "_color" : "") + (d3 ? "_texCoord0" : "") + (p ? "_tangent" : ""), x2 = null != t8.attributes.texCoord0, T3 = null != t8.attributes.normal, b = se(c3.alphaMode);
  if (!n11.has(g)) {
    if (x2) {
      const e5 = (e6, t9 = false) => {
        if (null != e6 && !l3.has(e6)) {
          const o7 = r4.textures.get(e6);
          if (o7) {
            const r5 = o7.data;
            l3.set(e6, new N(n8(r5) ? r5.data : r5, { ...o7.parameters, preMultiplyAlpha: !n8(r5) && t9, encoding: n8(r5) ? r5.encoding : void 0 }));
          }
        }
      };
      e5(c3.colorTexture, b !== i4.Opaque), e5(c3.normalTexture), e5(c3.occlusionTexture), e5(c3.emissiveTexture), e5(c3.metallicRoughnessTexture);
    }
    const o6 = 1 / t, m2 = c3.color[0] ** o6, f4 = c3.color[1] ** o6, d4 = c3.color[2] ** o6, p2 = c3.emissiveFactor[0] ** o6, h3 = c3.emissiveFactor[1] ** o6, y = c3.emissiveFactor[2] ** o6, w = null != c3.colorTexture && x2 ? l3.get(c3.colorTexture) : null, R2 = n10(c3), v2 = null != ((_a = c3.normalTextureTransform) == null ? void 0 : _a.scale) ? (_b = c3.normalTextureTransform) == null ? void 0 : _b.scale : s2;
    n11.set(g, new z({ ...s6, transparent: b === i4.Blend, customDepthTest: n7.Lequal, textureAlphaMode: b, textureAlphaCutoff: c3.alphaCutoff, diffuse: [m2, f4, d4], ambient: [m2, f4, d4], opacity: c3.opacity, doubleSided: c3.doubleSided, doubleSidedType: "winding-order", cullFace: c3.doubleSided ? e3.None : e3.Back, hasVertexColors: !!t8.attributes.color, hasVertexTangents: !!t8.attributes.tangent, normalType: T3 ? a3.Attribute : a3.ScreenDerivative, castShadows: true, receiveShadows: c3.receiveShadows, receiveAmbientOcclusion: c3.receiveAmbientOcclustion, textureId: null != w ? w.id : void 0, colorMixMode: c3.colorMixMode, normalTextureId: null != c3.normalTexture && x2 ? l3.get(c3.normalTexture).id : void 0, textureAlphaPremultiplied: null != w && !!w.parameters.preMultiplyAlpha, occlusionTextureId: null != c3.occlusionTexture && x2 ? l3.get(c3.occlusionTexture).id : void 0, emissiveTextureId: null != c3.emissiveTexture && x2 ? l3.get(c3.emissiveTexture).id : void 0, metallicRoughnessTextureId: null != c3.metallicRoughnessTexture && x2 ? l3.get(c3.metallicRoughnessTexture).id : void 0, emissiveFactor: [p2, h3, y], mrrFactors: R2 ? o4 : [c3.metallicFactor, c3.roughnessFactor, s6.mrrFactors[2]], isSchematic: R2, colorTextureTransformMatrix: s4(c3.colorTextureTransform), normalTextureTransformMatrix: s4(c3.normalTextureTransform), scale: [v2[0], v2[1]], occlusionTextureTransformMatrix: s4(c3.occlusionTextureTransform), emissiveTextureTransformMatrix: s4(c3.emissiveTextureTransform), metallicRoughnessTextureTransformMatrix: s4(c3.metallicRoughnessTextureTransform), ...i6 }, u3));
  }
  const h2 = n11.get(g);
  if (o5.stageResources.materials.push(h2), x2) {
    const e5 = (e6) => {
      null != e6 && o5.stageResources.textures.push(l3.get(e6));
    };
    e5(c3.colorTexture), e5(c3.normalTexture), e5(c3.occlusionTexture), e5(c3.emissiveTexture), e5(c3.metallicRoughnessTexture);
  }
  return h2;
}
function te(e5, r4) {
  const i6 = e5.attributes.position.count, n11 = o3(e5.indices || i6, e5.primitiveType), l3 = n9(3 * i6), { typedBuffer: a4, typedBufferStride: u3 } = e5.attributes.position;
  r3(l3, a4, e5.transform, 3, u3);
  const c3 = [[e4.POSITION, new t3(l3, n11, 3, true)]];
  if (null != e5.attributes.normal) {
    const r5 = n9(3 * i6), { typedBuffer: s6, typedBufferStride: l4 } = e5.attributes.normal;
    j(oe, e5.transform), n4(r5, s6, oe, 3, l4), T(oe) && d(r5, r5), c3.push([e4.NORMAL, new t3(r5, n11, 3, true)]);
  }
  if (null != e5.attributes.tangent) {
    const r5 = n9(4 * i6), { typedBuffer: o5, typedBufferStride: l4 } = e5.attributes.tangent;
    n3(oe, e5.transform), o2(r5, o5, oe, 4, l4), T(oe) && d(r5, r5, 4), c3.push([e4.TANGENT, new t3(r5, n11, 4, true)]);
  }
  if (null != e5.attributes.texCoord0) {
    const r5 = n9(2 * i6), { typedBuffer: t8, typedBufferStride: o5 } = e5.attributes.texCoord0;
    n5(r5, t8, 2, o5), c3.push([e4.UV0, new t3(r5, n11, 2, true)]);
  }
  const m = e5.attributes.color;
  if (null != m) {
    const r5 = new Uint8Array(4 * i6);
    4 === m.elementCount ? m instanceof c2 ? d2(r5, m, 1, 255) : (m instanceof x || m instanceof L) && d2(r5, m, 1 / 255, 255) : (r5.fill(255), m instanceof i3 ? l2(r5, m.typedBuffer, 1, 255, 4, m.typedBufferStride) : (e5.attributes.color instanceof O || e5.attributes.color instanceof E2) && l2(r5, m.typedBuffer, 1 / 255, 255, 4, e5.attributes.color.typedBufferStride)), c3.push([e4.COLOR, new t3(r5, n11, 4, true)]);
  }
  return { geometry: new f2(r4, c3), vertexCount: i6 };
}
var oe = e2();
function se(e5) {
  switch (e5) {
    case "BLEND":
      return i4.Blend;
    case "MASK":
      return i4.Mask;
    case "OPAQUE":
    case null:
    case void 0:
      return i4.Opaque;
  }
}
function ie(r4, t8) {
  for (let o5 = 0; o5 < r4.model.lods.length; ++o5) {
    const s6 = r4.model.lods[o5];
    for (const i6 of s6.parts) {
      const s7 = i6.attributes.normal;
      if (null == s7) return;
      const a4 = i6.attributes.position, x2 = a4.count, T3 = n2(), b = n2(), y = n2(), w = new Float32Array(4 * x2), v2 = new Float32Array(3 * x2), j3 = h(e(), i6.transform);
      let B = 0, S = 0;
      for (let n11 = 0; n11 < x2; n11++) {
        a4.getVec(n11, b), s7.getVec(n11, T3), E(b, b, i6.transform), c(y, b, t8.center), i(y, y, t8.radius);
        const l3 = y[2], g = r2(y), x3 = Math.min(0.45 + 0.55 * g * g, 1) ** t;
        i(y, y, t8.radius), null !== j3 && E(y, y, j3), A(y, y), o5 + 1 !== r4.model.lods.length && r4.model.lods.length > 1 && I(y, y, T3, l3 > -1 ? 0.2 : Math.min(-4 * l3 - 3.8, 1)), v2[B] = y[0], v2[B + 1] = y[1], v2[B + 2] = y[2], B += 3, w[S] = x3, w[S + 1] = x3, w[S + 2] = x3, w[S + 3] = 1, S += 4;
      }
      i6.attributes.normal = new i3(v2), i6.attributes.color = new c2(w);
    }
  }
}

export {
  s4 as s,
  Y,
  Z
};
//# sourceMappingURL=chunk-D6ALOTPT.js.map
