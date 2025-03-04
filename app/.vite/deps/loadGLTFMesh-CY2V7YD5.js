import {
  l as l2,
  n2 as n3,
  o,
  o2
} from "./chunk-DPIMWYG5.js";
import {
  e as e3
} from "./chunk-JQSC2CLC.js";
import {
  l as l3
} from "./chunk-HK3G3PI6.js";
import {
  n as n4
} from "./chunk-TGRCAT2Q.js";
import "./chunk-YVJ7MJNT.js";
import {
  f
} from "./chunk-OTJBTCJE.js";
import "./chunk-5LZH2YNQ.js";
import {
  p
} from "./chunk-SKW2R7G5.js";
import "./chunk-LMA7TSBN.js";
import {
  i,
  m,
  w
} from "./chunk-C4XH7UYG.js";
import {
  B
} from "./chunk-RJYMNNKW.js";
import {
  c as c2,
  n as n2,
  u as u3
} from "./chunk-D5KT2NSO.js";
import {
  e as e2,
  f as f2,
  s as s2,
  u as u2
} from "./chunk-U2TKRMQE.js";
import "./chunk-IWFYZGBP.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import {
  l
} from "./chunk-YINRFSE5.js";
import "./chunk-A6DPK5GC.js";
import {
  E,
  L,
  O,
  T as T2,
  c,
  i as i2,
  u,
  x
} from "./chunk-WXGA2B5U.js";
import "./chunk-HONYA6AI.js";
import "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import {
  e
} from "./chunk-K24WU5UX.js";
import {
  D
} from "./chunk-CRKFUUKK.js";
import "./chunk-XJOBEGIR.js";
import {
  j,
  n
} from "./chunk-LH36NQSN.js";
import "./chunk-K35H6D4D.js";
import "./chunk-UMYFDXOJ.js";
import {
  r as r3
} from "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import "./chunk-WF2ACUGU.js";
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
import {
  h
} from "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import {
  t
} from "./chunk-BV7O6P7Z.js";
import {
  r as r2
} from "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import {
  M,
  T
} from "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-ACGZOBZ6.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
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
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/chunks/mat3.js
function e4(e8, t7, o5) {
  const r5 = e8.typedBuffer, f5 = e8.typedBufferStride, d = t7.typedBuffer, n5 = t7.typedBufferStride, c3 = o5 ? o5.count : t7.count;
  let u5 = ((o5 == null ? void 0 : o5.dstIndex) ?? 0) * f5, l4 = ((o5 == null ? void 0 : o5.srcIndex) ?? 0) * n5;
  for (let p2 = 0; p2 < c3; ++p2) {
    for (let e9 = 0; e9 < 9; ++e9) r5[u5 + e9] = d[l4 + e9];
    u5 += f5, l4 += n5;
  }
}
var t2 = Object.freeze(Object.defineProperty({ __proto__: null, copy: e4 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/mat4.js
function e5(e8, t7, o5) {
  const r5 = e8.typedBuffer, f5 = e8.typedBufferStride, d = t7.typedBuffer, n5 = t7.typedBufferStride, c3 = o5 ? o5.count : t7.count;
  let u5 = ((o5 == null ? void 0 : o5.dstIndex) ?? 0) * f5, l4 = ((o5 == null ? void 0 : o5.srcIndex) ?? 0) * n5;
  for (let p2 = 0; p2 < c3; ++p2) {
    for (let e9 = 0; e9 < 16; ++e9) r5[u5 + e9] = d[l4 + e9];
    u5 += f5, l4 += n5;
  }
}
var t3 = Object.freeze(Object.defineProperty({ __proto__: null, copy: e5 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec33.js
function e6(e8, f5) {
  t4(e8.typedBuffer, f5.typedBuffer, e8.typedBufferStride, f5.typedBufferStride);
}
function t4(e8, t7, f5 = 3, o5 = f5) {
  const r5 = t7.length / o5;
  let n5 = 0, u5 = 0;
  for (let c3 = 0; c3 < r5; ++c3) e8[n5] = t7[u5], e8[n5 + 1] = t7[u5 + 1], e8[n5 + 2] = t7[u5 + 2], n5 += f5, u5 += o5;
}
function f3(e8, t7, f5, o5, r5) {
  const n5 = e8.typedBuffer, u5 = e8.typedBufferStride, c3 = (r5 == null ? void 0 : r5.count) ?? e8.count;
  let d = ((r5 == null ? void 0 : r5.dstIndex) ?? 0) * u5;
  for (let l4 = 0; l4 < c3; ++l4) n5[d] = t7, n5[d + 1] = f5, n5[d + 2] = o5, d += u5;
}
var o3 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t4, copyView: e6, fill: f3 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/chunks/vec43.js
function e7(e8, f5) {
  t5(e8.typedBuffer, f5, e8.typedBufferStride);
}
function t5(e8, t7, f5 = 4) {
  const o5 = t7.typedBuffer, r5 = t7.typedBufferStride, n5 = t7.count;
  let u5 = 0, c3 = 0;
  for (let d = 0; d < n5; ++d) e8[u5] = o5[c3], e8[u5 + 1] = o5[c3 + 1], e8[u5 + 2] = o5[c3 + 2], e8[u5 + 3] = o5[c3 + 3], u5 += f5, c3 += r5;
}
function f4(e8, t7, f5, o5, r5, n5) {
  const u5 = e8.typedBuffer, c3 = e8.typedBufferStride, d = (n5 == null ? void 0 : n5.count) ?? e8.count;
  let l4 = ((n5 == null ? void 0 : n5.dstIndex) ?? 0) * c3;
  for (let p2 = 0; p2 < d; ++p2) u5[l4] = t7, u5[l4 + 1] = f5, u5[l4 + 2] = o5, u5[l4 + 3] = r5, l4 += c3;
}
var o4 = Object.freeze(Object.defineProperty({ __proto__: null, copy: t5, copyView: e7, fill: f4 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/geometry/support/buffer/utils.js
function r4(s3, r5) {
  return new s3(new ArrayBuffer(r5 * s3.ElementCount * e3(s3.ElementType)));
}

// node_modules/@arcgis/core/geometry/support/meshUtils/loadGLTFMesh.js
async function G(e8, t7, r5) {
  const n5 = new n3(N(r5)), s3 = (await l3(n5, t7, r5, true)).model, i3 = s3.lods.shift(), a = /* @__PURE__ */ new Map(), l4 = /* @__PURE__ */ new Map();
  s3.textures.forEach((e9, t8) => a.set(t8, J(e9))), s3.materials.forEach((e9, t8) => l4.set(t8, W(e9, a)));
  const c3 = H(i3);
  for (const o5 of c3.parts) X(c3, o5, l4);
  const { position: u5, normal: f5, tangent: m2, color: p2, texCoord0: d } = c3.vertexAttributes, x2 = l(e8, r5), h2 = e8.spatialReference.isGeographic ? l(e8) : x2, v = B({ vertexAttributes: { position: u5.typedBuffer, normal: f5 == null ? void 0 : f5.typedBuffer, tangent: m2 == null ? void 0 : m2.typedBuffer }, vertexSpace: h2, spatialReference: e8.spatialReference }, x2, { allowBufferReuse: true, sourceUnit: (r5 == null ? void 0 : r5.unitConversionDisabled) ? void 0 : "meters" });
  if (!v) throw new s("load-gltf-mesh:vertex-space-projection", `Failed to load mesh from glTF because we could not convert the vertex space from ${h2.type} to ${x2.type}`);
  return { transform: null, vertexSpace: x2, components: c3.components, spatialReference: e8.spatialReference, vertexAttributes: new p({ ...v, color: p2 == null ? void 0 : p2.typedBuffer, uv: d == null ? void 0 : d.typedBuffer }) };
}
function N(e8) {
  const t7 = e8 == null ? void 0 : e8.resolveFile;
  return t7 ? { busy: false, request: async (e9, o5, n5) => {
    const s3 = (t7 == null ? void 0 : t7(e9)) ?? e9, i3 = "image" === o5 ? "image" : "binary" === o5 || "image+type" === o5 ? "array-buffer" : "json";
    return (await P(s3, { responseType: i3, signal: n5 == null ? void 0 : n5.signal, timeout: 0 })).data;
  } } : null;
}
function K(e8, t7) {
  if (null == e8) return "-";
  const r5 = e8.typedBuffer;
  return `${r(t7, r5.buffer, () => t7.size)}/${r5.byteOffset}/${r5.byteLength}`;
}
function Q(e8) {
  return null != e8 ? e8.toString() : "-";
}
function H(e8) {
  let t7 = 0;
  const has = { color: false, tangent: false, normal: false, texCoord0: false }, r5 = /* @__PURE__ */ new Map(), o5 = /* @__PURE__ */ new Map(), s3 = [];
  for (const i3 of e8.parts) {
    const { position: e9, normal: a, color: l4, tangent: c3, texCoord0: u5 } = i3.attributes, f5 = `
      ${K(e9, r5)}/
      ${K(a, r5)}/
      ${K(l4, r5)}/
      ${K(c3, r5)}/
      ${K(u5, r5)}/
      ${Q(i3.transform)}
    `;
    let m2 = false;
    const p2 = r(o5, f5, () => (m2 = true, { start: t7, length: e9.count }));
    m2 && (t7 += e9.count), a && (has.normal = true), l4 && (has.color = true), c3 && (has.tangent = true), u5 && (has.texCoord0 = true), s3.push({ gltf: i3, writeVertices: m2, region: p2 });
  }
  return { vertexAttributes: { position: r4(T2, t7), normal: has.normal ? r4(i2, t7) : null, tangent: has.tangent ? r4(c, t7) : null, color: has.color ? r4(x, t7) : null, texCoord0: has.texCoord0 ? r4(u, t7) : null }, parts: s3, components: [] };
}
function J(e8) {
  return new w({ data: (n4(e8.data), e8.data), wrap: ee(e8.parameters.wrap) });
}
function W(t7, r5) {
  const o5 = new h(oe(t7.color, t7.opacity)), n5 = t7.emissiveFactor ? new h(ne(t7.emissiveFactor)) : null, s3 = (e8) => e8 ? new i({ scale: e8.scale ? [e8.scale[0], e8.scale[1]] : [1, 1], rotation: M(e8.rotation ?? 0), offset: e8.offset ? [e8.offset[0], e8.offset[1]] : [0, 0] }) : null;
  return new m({ color: o5, colorTexture: r5.get(t7.colorTexture), normalTexture: r5.get(t7.normalTexture), emissiveColor: n5, emissiveTexture: r5.get(t7.emissiveTexture), occlusionTexture: r5.get(t7.occlusionTexture), alphaMode: Z(t7.alphaMode), alphaCutoff: t7.alphaCutoff, doubleSided: t7.doubleSided, metallic: t7.metallicFactor, roughness: t7.roughnessFactor, metallicRoughnessTexture: r5.get(t7.metallicRoughnessTexture), colorTextureTransform: s3(t7.colorTextureTransform), normalTextureTransform: s3(t7.normalTextureTransform), occlusionTextureTransform: s3(t7.occlusionTextureTransform), emissiveTextureTransform: s3(t7.emissiveTextureTransform), metallicRoughnessTextureTransform: s3(t7.metallicRoughnessTextureTransform) });
}
function X(e8, t7, r5) {
  t7.writeVertices && Y(e8, t7);
  const { indices: o5, attributes: n5, primitiveType: s3, material: i3 } = t7.gltf;
  let a = o2(o5 || n5.position.count, s3);
  const l4 = t7.region.start;
  if (l4) {
    const e9 = new Uint32Array(a);
    for (let t8 = 0; t8 < a.length; t8++) e9[t8] += l4;
    a = e9;
  }
  e8.components.push(new f({ name: t7.gltf.name, faces: a, material: r5.get(i3), shading: n5.normal ? "source" : "flat", trustSourceNormals: true }));
}
function Y(e8, t7) {
  const { position: r5, normal: o5, tangent: n5, color: i3, texCoord0: u5 } = e8.vertexAttributes, f5 = t7.region.start, { attributes: m2, transform: p2 } = t7.gltf, d = m2.position.count;
  if (e2(r5.slice(f5, d), m2.position, p2), null != m2.normal && null != o5) {
    const e9 = j(e(), p2), t8 = o5.slice(f5, d);
    f2(t8, m2.normal, e9), T(e9) && s2(t8, t8);
  } else null != o5 && f3(o5, 0, 0, 1, { dstIndex: f5, count: d });
  if (null != m2.tangent && null != n5) {
    const e9 = n(e(), p2), t8 = n5.slice(f5, d);
    n2(t8, m2.tangent, e9), T(e9) && u3(t8, t8);
  } else null != n5 && f4(n5, 0, 0, 1, 1, { dstIndex: f5, count: d });
  if (null != m2.texCoord0 && null != u5 ? o(u5.slice(f5, d), m2.texCoord0) : null != u5 && l2(u5, 0, 0, { dstIndex: f5, count: d }), null != m2.color && null != i3) {
    const e9 = m2.color, t8 = i3.slice(f5, d);
    if (4 === e9.elementCount) e9 instanceof c ? c2(t8, e9, 1, 255) : (e9 instanceof x || e9 instanceof L) && c2(t8, e9, 1 / 255, 255);
    else {
      f4(t8, 255, 255, 255, 255);
      const r6 = O.fromTypedArray(t8.typedBuffer, t8.typedBufferStride);
      e9 instanceof i2 ? u2(r6, e9, 1, 255) : (e9 instanceof O || e9 instanceof E) && u2(r6, e9, 1 / 255, 255);
    }
  } else null != i3 && f4(i3.slice(f5, d), 255, 255, 255, 255);
}
function Z(e8) {
  switch (e8) {
    case "OPAQUE":
      return "opaque";
    case "MASK":
      return "mask";
    case "BLEND":
      return "blend";
  }
}
function ee(e8) {
  return { horizontal: te(e8.s), vertical: te(e8.t) };
}
function te(e8) {
  switch (e8) {
    case D.CLAMP_TO_EDGE:
      return "clamp";
    case D.MIRRORED_REPEAT:
      return "mirror";
    case D.REPEAT:
      return "repeat";
  }
}
function re(e8) {
  return e8 ** (1 / t) * 255;
}
function oe(e8, t7) {
  return r3(re(e8[0]), re(e8[1]), re(e8[2]), t7);
}
function ne(e8) {
  return r2(re(e8[0]), re(e8[1]), re(e8[2]));
}
export {
  G as loadGLTFMesh
};
//# sourceMappingURL=loadGLTFMesh-CY2V7YD5.js.map
