import {
  A as A2,
  A2 as A3,
  N as N2,
  a2,
  d as d3,
  e2 as e5,
  f2 as f3,
  f3 as f4,
  f4 as f6,
  i as i4,
  l as l2,
  o2 as o4,
  p as p2
} from "./chunk-EMVGISAT.js";
import {
  a as a3
} from "./chunk-OBOMTFRH.js";
import {
  i as i5
} from "./chunk-NQBVVSVQ.js";
import {
  H as H2
} from "./chunk-FWGIWKNF.js";
import {
  K
} from "./chunk-ZOSKUOYO.js";
import {
  i as i2
} from "./chunk-ARZQ2ENM.js";
import {
  z
} from "./chunk-YALJLMHU.js";
import {
  f as f5,
  n as n6
} from "./chunk-KG25RUMS.js";
import {
  l as l3,
  t as t3
} from "./chunk-WP2IQPQN.js";
import {
  n2 as n4,
  t as t2
} from "./chunk-AY7NUQ6K.js";
import {
  d,
  d2,
  r as r6
} from "./chunk-M5YS3OM7.js";
import {
  B,
  f as f2,
  g as g2
} from "./chunk-TKKZ7DIH.js";
import {
  i as i3,
  n2 as n5,
  p2 as p
} from "./chunk-XJ5CGMWY.js";
import {
  o as o3
} from "./chunk-C5H3KDE3.js";
import {
  o as o5
} from "./chunk-YIMQSH52.js";
import {
  e as e4
} from "./chunk-HV35YTAC.js";
import {
  a2 as a
} from "./chunk-KJG6NJ7J.js";
import {
  n as n3,
  o as o2,
  r as r5,
  t,
  u
} from "./chunk-BSNHCIEC.js";
import {
  e as e3
} from "./chunk-ZAYRG6WM.js";
import {
  e as e2,
  i,
  n as n2
} from "./chunk-YVJ7MJNT.js";
import {
  l
} from "./chunk-U7ERRXB6.js";
import {
  O,
  f
} from "./chunk-CRKFUUKK.js";
import {
  A,
  H,
  N,
  P,
  c,
  g,
  o,
  r as r4,
  s
} from "./chunk-UMYFDXOJ.js";
import {
  r as r3
} from "./chunk-MHM4GDCM.js";
import {
  _,
  e,
  n,
  r as r2
} from "./chunk-JLFSX3JT.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechnique.js
var F = class extends f5 {
  constructor() {
    super(...arguments), this.isSchematic = false, this.usePBR = false, this.mrrFactors = t2, this.hasVertexColors = false, this.hasSymbolColors = false, this.doubleSided = false, this.doubleSidedType = "normal", this.cullFace = e2.Back, this.isInstanced = false, this.hasInstancedColor = false, this.emissiveFactor = _, this.instancedDoublePrecision = false, this.normalType = a.Attribute, this.receiveShadows = true, this.receiveAmbientOcclusion = true, this.castShadows = true, this.ambient = e(0.2, 0.2, 0.2), this.diffuse = e(0.8, 0.8, 0.8), this.externalColor = r3(1, 1, 1, 1), this.colorMixMode = "multiply", this.opacity = 1, this.layerOpacity = 1, this.origin = n(), this.hasSlicePlane = false, this.offsetTransparentBackfaces = false, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.modelTransformation = null, this.transparent = false, this.writeDepth = true, this.customDepthTest = n2.Less, this.textureAlphaMode = i.Blend, this.textureAlphaCutoff = o5, this.textureAlphaPremultiplied = false, this.renderOccluded = p.Occlude, this.isDecoration = false;
  }
};
var N3 = class extends n6 {
  constructor() {
    super(...arguments), this.origin = n(), this.slicePlaneLocalOrigin = this.origin;
  }
};
var k = class extends l3 {
  constructor(e6, t4, i7 = new t3(K, () => import("./DefaultMaterial.glsl-LBK5U6J4.js"))) {
    super(e6, t4, i7), this.type = "DefaultMaterialTechnique";
  }
  _makePipeline(e6, t4) {
    const { oitPass: i7, output: s2, transparent: o6, cullFace: a4, customDepthTest: n7, hasOccludees: c2, enableOffset: h } = e6, u3 = i7 === o3.NONE, p3 = i7 === o3.FrontFace;
    return B({ blending: u(s2) && o6 ? a2(i7) : null, culling: B2(e6) ? f2(a4) : null, depthTest: { func: f3(i7, q(n7)) }, depthWrite: l2(e6), drawBuffers: s2 === n3.Depth ? { buffers: [f.NONE] } : i4(i7, s2), colorWrite: g2, stencilWrite: c2 ? e5 : null, stencilTest: c2 ? t4 ? o4 : f6 : null, polygonOffset: u3 || p3 ? null : N2(h) });
  }
  initializePipeline(e6) {
    return this._occludeePipelineState = this._makePipeline(e6, true), this._makePipeline(e6, false);
  }
  getPipeline(e6) {
    return e6 ? this._occludeePipelineState : super.getPipeline();
  }
};
function q(e6) {
  return e6 === n2.Lequal ? O.LEQUAL : O.LESS;
}
function B2(e6) {
  return e6.cullFace !== e2.None || !e6.hasSlicePlane && (!e6.transparent && !e6.doubleSidedMode);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/DefaultMaterialTechniqueConfiguration.js
var u2 = class extends a3 {
  constructor(e6, o6) {
    super(), this.spherical = e6, this.doublePrecisionRequiresObfuscation = o6, this.alphaDiscardMode = i.Opaque, this.doubleSidedMode = i2.None, this.pbrMode = n4.Disabled, this.cullFace = e2.None, this.normalType = a.Attribute, this.customDepthTest = n2.Less, this.emissionSource = d2.None, this.hasVertexColors = false, this.hasSymbolColors = false, this.hasVerticalOffset = false, this.hasColorTexture = false, this.hasMetallicRoughnessTexture = false, this.hasOcclusionTexture = false, this.hasNormalTexture = false, this.hasScreenSizePerspective = false, this.hasVertexTangents = false, this.hasOccludees = false, this.hasModelTransformation = false, this.offsetBackfaces = false, this.vvSize = false, this.vvColor = false, this.receiveShadows = false, this.receiveAmbientOcclusion = false, this.textureAlphaPremultiplied = false, this.instanced = false, this.instancedColor = false, this.writeDepth = true, this.transparent = false, this.enableOffset = true, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.snowCover = false, this.hasColorTextureTransform = false, this.hasEmissionTextureTransform = false, this.hasNormalTextureTransform = false, this.hasOcclusionTextureTransform = false, this.hasMetallicRoughnessTextureTransform = false, this.occlusionPass = false, this.hasVvInstancing = true, this.useCustomDTRExponentForWater = false, this.useFillLights = true;
  }
  get textureCoordinateType() {
    return this.hasColorTexture || this.hasMetallicRoughnessTexture || this.emissionSource === d2.Texture || this.hasOcclusionTexture || this.hasNormalTexture ? d.Default : d.None;
  }
  get objectAndLayerIdColorInstanced() {
    return this.instanced;
  }
  get discardInvisibleFragments() {
    return this.transparent;
  }
};
r([i5({ count: i.COUNT })], u2.prototype, "alphaDiscardMode", void 0), r([i5({ count: i2.COUNT })], u2.prototype, "doubleSidedMode", void 0), r([i5({ count: n4.COUNT })], u2.prototype, "pbrMode", void 0), r([i5({ count: e2.COUNT })], u2.prototype, "cullFace", void 0), r([i5({ count: a.COUNT })], u2.prototype, "normalType", void 0), r([i5({ count: n2.COUNT })], u2.prototype, "customDepthTest", void 0), r([i5({ count: d2.COUNT })], u2.prototype, "emissionSource", void 0), r([i5()], u2.prototype, "hasVertexColors", void 0), r([i5()], u2.prototype, "hasSymbolColors", void 0), r([i5()], u2.prototype, "hasVerticalOffset", void 0), r([i5()], u2.prototype, "hasColorTexture", void 0), r([i5()], u2.prototype, "hasMetallicRoughnessTexture", void 0), r([i5()], u2.prototype, "hasOcclusionTexture", void 0), r([i5()], u2.prototype, "hasNormalTexture", void 0), r([i5()], u2.prototype, "hasScreenSizePerspective", void 0), r([i5()], u2.prototype, "hasVertexTangents", void 0), r([i5()], u2.prototype, "hasOccludees", void 0), r([i5()], u2.prototype, "hasModelTransformation", void 0), r([i5()], u2.prototype, "offsetBackfaces", void 0), r([i5()], u2.prototype, "vvSize", void 0), r([i5()], u2.prototype, "vvColor", void 0), r([i5()], u2.prototype, "receiveShadows", void 0), r([i5()], u2.prototype, "receiveAmbientOcclusion", void 0), r([i5()], u2.prototype, "textureAlphaPremultiplied", void 0), r([i5()], u2.prototype, "instanced", void 0), r([i5()], u2.prototype, "instancedColor", void 0), r([i5()], u2.prototype, "writeDepth", void 0), r([i5()], u2.prototype, "transparent", void 0), r([i5()], u2.prototype, "enableOffset", void 0), r([i5()], u2.prototype, "terrainDepthTest", void 0), r([i5()], u2.prototype, "cullAboveTerrain", void 0), r([i5()], u2.prototype, "snowCover", void 0), r([i5()], u2.prototype, "hasColorTextureTransform", void 0), r([i5()], u2.prototype, "hasEmissionTextureTransform", void 0), r([i5()], u2.prototype, "hasNormalTextureTransform", void 0), r([i5()], u2.prototype, "hasOcclusionTextureTransform", void 0), r([i5()], u2.prototype, "hasMetallicRoughnessTextureTransform", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RealisticTreeTechnique.js
var i6 = class extends k {
  constructor(r7, i7) {
    super(r7, i7, new t3(z, () => import("./RealisticTree.glsl-34DZQ7QX.js"))), this.type = "RealisticTreeTechnique";
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/DefaultMaterial.js
var z2 = class extends n5 {
  constructor(e6, r7) {
    super(e6, U), this.materialType = "default", this.supportsEdges = true, this.produces = /* @__PURE__ */ new Map([[A3.OPAQUE_MATERIAL, (e7) => (t(e7) || o2(e7)) && !this.parameters.transparent], [A3.TRANSPARENT_MATERIAL, (e7) => (t(e7) || o2(e7)) && this.parameters.transparent && this.parameters.writeDepth], [A3.TRANSPARENT_MATERIAL_WITHOUT_DEPTH, (e7) => (r5(e7) || o2(e7)) && this.parameters.transparent && !this.parameters.writeDepth]]), this._vertexBufferLayout = k2(this.parameters), this._configuration = new u2(r7.spherical, r7.doublePrecisionRequiresObfuscation);
  }
  isVisibleForOutput(e6) {
    return e6 !== n3.Shadow && e6 !== n3.ShadowExcludeHighlight && e6 !== n3.ShadowHighlight || this.parameters.castShadows;
  }
  get visible() {
    const e6 = this.parameters;
    if (e6.layerOpacity < o5) return false;
    const { hasInstancedColor: r7, hasVertexColors: t4, hasSymbolColors: i7, vvColor: s2 } = e6, o6 = r7 || s2 || i7, a4 = "replace" === e6.colorMixMode, n7 = e6.opacity >= o5;
    if (t4 && o6) return a4 || n7;
    const c2 = e6.externalColor && e6.externalColor[3] >= o5;
    return t4 ? a4 ? c2 : n7 : o6 ? a4 || n7 : a4 ? c2 : n7;
  }
  get hasEmissions() {
    return !!this.parameters.emissiveTextureId || !H(this.parameters.emissiveFactor, _);
  }
  getConfiguration(e6, r7) {
    const t4 = this.parameters, { treeRendering: i7, doubleSided: s2, doubleSidedType: o6 } = t4;
    return this._configuration.output = e6, this._configuration.hasNormalTexture = !i7 && !!t4.normalTextureId, this._configuration.hasColorTexture = !!t4.textureId, this._configuration.hasVertexTangents = !i7 && t4.hasVertexTangents, this._configuration.instanced = t4.isInstanced, this._configuration.instancedDoublePrecision = t4.instancedDoublePrecision, this._configuration.vvSize = !!t4.vvSize, this._configuration.hasVerticalOffset = null != t4.verticalOffset, this._configuration.hasScreenSizePerspective = null != t4.screenSizePerspective, this._configuration.hasSlicePlane = t4.hasSlicePlane, this._configuration.alphaDiscardMode = t4.textureAlphaMode, this._configuration.normalType = i7 ? a.Attribute : t4.normalType, this._configuration.transparent = t4.transparent, this._configuration.writeDepth = t4.writeDepth, null != t4.customDepthTest && (this._configuration.customDepthTest = t4.customDepthTest), this._configuration.hasOccludees = r7.hasOccludees, this._configuration.cullFace = t4.hasSlicePlane ? e2.None : t4.cullFace, this._configuration.cullAboveTerrain = r7.cullAboveTerrain, this._configuration.hasModelTransformation = !i7 && null != t4.modelTransformation, this._configuration.hasVertexColors = t4.hasVertexColors, this._configuration.hasSymbolColors = t4.hasSymbolColors, this._configuration.doubleSidedMode = i7 ? i2.WindingOrder : s2 && "normal" === o6 ? i2.View : s2 && "winding-order" === o6 ? i2.WindingOrder : i2.None, this._configuration.instancedColor = t4.hasInstancedColor, u(e6) ? (this._configuration.terrainDepthTest = r7.terrainDepthTest, this._configuration.receiveShadows = t4.receiveShadows, this._configuration.receiveAmbientOcclusion = t4.receiveAmbientOcclusion && null != r7.ssao) : (this._configuration.terrainDepthTest = false, this._configuration.receiveShadows = this._configuration.receiveAmbientOcclusion = false), this._configuration.vvColor = !!t4.vvColor, this._configuration.textureAlphaPremultiplied = !!t4.textureAlphaPremultiplied, this._configuration.pbrMode = t4.usePBR ? t4.isSchematic ? n4.Schematic : n4.Normal : n4.Disabled, this._configuration.hasMetallicRoughnessTexture = !i7 && !!t4.metallicRoughnessTextureId, this._configuration.emissionSource = i7 ? d2.None : null != t4.emissiveTextureId ? d2.Texture : t4.usePBR ? d2.Value : d2.None, this._configuration.hasOcclusionTexture = !i7 && !!t4.occlusionTextureId, this._configuration.offsetBackfaces = !(!t4.transparent || !t4.offsetTransparentBackfaces), this._configuration.oitPass = r7.oitPass, this._configuration.enableOffset = r7.camera.relativeElevation < A2, this._configuration.snowCover = W(r7), this._configuration.hasColorTextureTransform = !!t4.colorTextureTransformMatrix, this._configuration.hasNormalTextureTransform = !!t4.normalTextureTransformMatrix, this._configuration.hasEmissionTextureTransform = !!t4.emissiveTextureTransformMatrix, this._configuration.hasOcclusionTextureTransform = !!t4.occlusionTextureTransformMatrix, this._configuration.hasMetallicRoughnessTextureTransform = !!t4.metallicRoughnessTextureTransformMatrix, this._configuration;
  }
  intersect(e6, l4, u3, h, m, p3) {
    if (null != this.parameters.verticalOffset) {
      const e7 = u3.camera;
      o(Q, l4[12], l4[13], l4[14]);
      let p4 = null;
      switch (u3.viewingMode) {
        case l.Global:
          p4 = A(Y, Q);
          break;
        case l.Local:
          p4 = s(Y, H3);
      }
      let d4 = 0;
      const g3 = c(K2, Q, e7.eye), T = r4(g3), x = g(g3, g3, 1 / T);
      let _2 = null;
      this.parameters.screenSizePerspective && (_2 = P(p4, x)), d4 += i3(e7, T, this.parameters.verticalOffset, _2 ?? 0, this.parameters.screenSizePerspective), g(p4, p4, d4), N(J, p4, u3.transform.inverseRotation), h = c(F2, h, J), m = c(G, m, J);
    }
    p2(e6, u3, h, m, d3(u3.verticalOffset), p3);
  }
  createGLMaterial(e6) {
    return new q2(e6);
  }
  createBufferWriter() {
    return new f4(this._vertexBufferLayout);
  }
};
var q2 = class extends r6 {
  constructor(e6) {
    super({ ...e6, ...e6.material.parameters });
  }
  beginSlot(e6) {
    this._material.setParameters({ receiveShadows: e6.shadowMap.enabled });
    const t4 = this._material.parameters;
    this.updateTexture(t4.textureId);
    const i7 = e6.camera.viewInverseTransposeMatrix;
    return o(t4.origin, i7[3], i7[7], i7[11]), this._material.setParameters(this.textureBindParameters), this.getTechnique(t4.treeRendering ? i6 : k, e6);
  }
};
var U = class extends F {
  constructor() {
    super(...arguments), this.treeRendering = false, this.hasVertexTangents = false;
  }
};
function W(e6) {
  return null != e6.weather && e6.weatherVisible && "snowy" === e6.weather.type && "enabled" === e6.weather.snowCover;
}
function k2(e6) {
  const r7 = H2().vec3f(e3.POSITION);
  e6.normalType === a.Compressed ? r7.vec2i16(e3.NORMALCOMPRESSED, { glNormalized: true }) : r7.vec3f(e3.NORMAL), e6.hasVertexTangents && r7.vec4f(e3.TANGENT);
  return (e6.textureId || e6.normalTextureId || e6.metallicRoughnessTextureId || e6.emissiveTextureId || e6.occlusionTextureId) && r7.vec2f(e3.UV0), e6.hasVertexColors && r7.vec4u8(e3.COLOR), e6.hasSymbolColors && r7.vec4u8(e3.SYMBOLCOLOR), e4() && r7.vec4u8(e3.OBJECTANDLAYERIDCOLOR), r7;
}
var F2 = n();
var G = n();
var H3 = r2(0, 0, 1);
var Y = n();
var J = n();
var Q = n();
var K2 = n();

export {
  N3 as N,
  z2 as z
};
//# sourceMappingURL=chunk-NTBYJDIM.js.map
