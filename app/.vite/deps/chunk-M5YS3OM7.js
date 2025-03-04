import {
  e as e3,
  o as o3
} from "./chunk-C5H3KDE3.js";
import {
  d,
  o as o4
} from "./chunk-YIMQSH52.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  H,
  n as n3,
  u
} from "./chunk-BSNHCIEC.js";
import {
  o as o2
} from "./chunk-U5M766SV.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  o
} from "./chunk-EJHUCCX3.js";
import {
  n as n2,
  t as t2
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  O
} from "./chunk-YVJ7MJNT.js";
import {
  S,
  t2 as t
} from "./chunk-M6FNW7GP.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js
var d2;
function o5(o6, v) {
  switch (v.textureCoordinateType) {
    case d2.Default:
      return o6.attributes.add(e.UV0, "vec2"), o6.varyings.add("vuv0", "vec2"), void o6.vertex.code.add(n2`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);
    case d2.Compressed:
      return o6.attributes.add(e.UV0, "vec2"), o6.varyings.add("vuv0", "vec2"), void o6.vertex.code.add(n2`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);
    case d2.Atlas:
      return o6.attributes.add(e.UV0, "vec2"), o6.varyings.add("vuv0", "vec2"), o6.attributes.add(e.UVREGION, "vec4"), o6.varyings.add("vuvRegion", "vec4"), void o6.vertex.code.add(n2`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);
    default:
      n(v.textureCoordinateType);
    case d2.None:
      return void o6.vertex.code.add(n2`void forwardTextureCoordinates() {}`);
    case d2.COUNT:
      return;
  }
}
!function(e6) {
  e6[e6.None = 0] = "None", e6[e6.Default = 1] = "Default", e6[e6.Atlas = 2] = "Atlas", e6[e6.Compressed = 3] = "Compressed", e6[e6.COUNT = 4] = "COUNT";
}(d2 || (d2 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/TextureAtlasLookup.glsl.js
function e4(e6) {
  e6.fragment.code.add(n2`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexTextureCoordinates.glsl.js
function u2(u3, l3) {
  const { textureCoordinateType: s2 } = l3;
  if (s2 === d2.None || s2 === d2.COUNT) return;
  u3.include(o5, l3);
  const n5 = s2 === d2.Atlas;
  n5 && u3.include(e4), u3.fragment.code.add(n2`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${n5 ? "textureAtlasLookup(tex, uv, vuvRegion)" : "texture(tex, uv)"};
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLMaterial.js
var e5 = class {
  constructor(t3) {
    this._material = t3.material, this._techniques = t3.techniques, this._output = t3.output;
  }
  dispose() {
  }
  get _stippleTextures() {
    return this._techniques.context.stippleTextures;
  }
  get _markerTextures() {
    return this._techniques.context.markerTextures;
  }
  getTechnique(t3, e6) {
    return this._techniques.get(t3, this._material.getConfiguration(this._output, e6));
  }
  ensureResources(e6) {
    return O.LOADED;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GLTextureMaterial.js
var r = class extends e5 {
  constructor(t3) {
    super(t3), this._numLoading = 0, this._disposed = false, this._textures = t3.textures, this.updateTexture(t3.textureId), this._acquire(t3.normalTextureId, (t4) => this._textureNormal = t4), this._acquire(t3.emissiveTextureId, (t4) => this._textureEmissive = t4), this._acquire(t3.occlusionTextureId, (t4) => this._textureOcclusion = t4), this._acquire(t3.metallicRoughnessTextureId, (t4) => this._textureMetallicRoughness = t4);
  }
  dispose() {
    super.dispose(), this._texture = t(this._texture), this._textureNormal = t(this._textureNormal), this._textureEmissive = t(this._textureEmissive), this._textureOcclusion = t(this._textureOcclusion), this._textureMetallicRoughness = t(this._textureMetallicRoughness), this._disposed = true;
  }
  ensureResources(t3) {
    return 0 === this._numLoading ? O.LOADED : O.LOADING;
  }
  get textureBindParameters() {
    return new n4(null != this._texture ? this._texture.glTexture : null, null != this._textureNormal ? this._textureNormal.glTexture : null, null != this._textureEmissive ? this._textureEmissive.glTexture : null, null != this._textureOcclusion ? this._textureOcclusion.glTexture : null, null != this._textureMetallicRoughness ? this._textureMetallicRoughness.glTexture : null);
  }
  updateTexture(e6) {
    null != this._texture && e6 === this._texture.id || (this._texture = t(this._texture), this._textureId = e6, this._acquire(this._textureId, (t3) => this._texture = t3));
  }
  _acquire(s2, i) {
    if (null == s2) return void i(null);
    const u3 = this._textures.acquire(s2);
    if (S(u3)) return ++this._numLoading, void u3.then((e6) => {
      if (this._disposed) return t(e6), void i(null);
      i(e6);
    }).finally(() => --this._numLoading);
    i(u3);
  }
};
var l = class extends c {
  constructor(t3 = null) {
    super(), this.textureEmissive = t3;
  }
};
var n4 = class extends l {
  constructor(t3 = null, e6 = null, s2 = null, i = null, u3 = null, r2, l3) {
    super(s2), this.texture = t3, this.textureNormal = e6, this.textureOcclusion = i, this.textureMetallicRoughness = u3, this.scale = r2, this.normalTextureTransformMatrix = l3;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/Emissions.glsl.js
var d3;
!function(e6) {
  e6[e6.None = 0] = "None", e6[e6.Value = 1] = "Value", e6[e6.Texture = 2] = "Texture", e6[e6.COUNT = 3] = "COUNT";
}(d3 || (d3 = {}));
function l2(a2, f) {
  if (!u(f.output)) return;
  const { emissionSource: l3, hasEmissiveTextureTransform: c2, bindType: x } = f, p2 = l3 === d3.Texture;
  p2 && (a2.include(u2, f), a2.fragment.uniforms.add(x === a.Pass ? new s("texEmission", (e6) => e6.textureEmissive) : new o("texEmission", (e6) => e6.textureEmissive)));
  const v = l3 === d3.Value || p2;
  v && a2.fragment.uniforms.add(x === a.Pass ? new e2("emissionFactor", (e6) => e6.emissiveFactor) : new o2("emissionFactor", (e6) => e6.emissiveFactor)), a2.fragment.code.add(n2`
    vec4 getEmissions() {
      vec4 emissions = ${v ? "vec4(emissionFactor, 1.0)" : "vec4(0.0)"};
      ${t2(p2, `emissions *= textureLookup(texEmission, ${c2 ? "emissiveUV" : "vuv0"});
         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      return emissions;
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/OutputColorHighlightOID.glsl.js
function p(p2, d4) {
  p2.include(d, d4), p2.include(l2, d4), p2.fragment.include(e3);
  const f = d4.output === n3.ObjectAndLayerIdColor, c2 = H(d4.output), m = u(d4.output) && d4.oitPass === o3.ColorAlpha, g = u(d4.output) && d4.oitPass !== o3.ColorAlpha, C = d4.discardInvisibleFragments;
  let h = 0;
  (g || c2 || m) && p2.outputs.add("fragColor", "vec4", h++), c2 && p2.outputs.add("fragEmission", "vec4", h++), m && p2.outputs.add("fragAlpha", "float", h++), p2.fragment.code.add(n2`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${t2(f, "finalColor.a = 1.0;")}

      ${t2(C, `if (finalColor.a < ${n2.float(o4)}) { discard; }`)}

      finalColor = applySlice(finalColor, vWorldPosition);
      ${t2(m, n2`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${t2(g, "fragColor = finalColor;")}
      ${t2(c2, "fragEmission = finalColor.a * getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${t2(f, "outputObjectAndLayerIdColor();")}
    }
  `);
}

export {
  d2 as d,
  o5 as o,
  u2 as u,
  e5 as e,
  r,
  n4 as n,
  d3 as d2,
  p
};
//# sourceMappingURL=chunk-M5YS3OM7.js.map
