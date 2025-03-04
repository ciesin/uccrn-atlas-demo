import {
  e as e4
} from "./chunk-FBCKMXY6.js";
import {
  F,
  o2 as o7,
  t as t4,
  w
} from "./chunk-TP7H7H6D.js";
import {
  o as o4
} from "./chunk-M5YS3OM7.js";
import {
  o as o6
} from "./chunk-F6CYJMBV.js";
import {
  o as o10
} from "./chunk-MDKBTLVE.js";
import {
  o as o9,
  r
} from "./chunk-4TJZAUWN.js";
import {
  e as e3
} from "./chunk-HJA3Q6AG.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  o as o5
} from "./chunk-XJ5CGMWY.js";
import {
  e as e5
} from "./chunk-C5H3KDE3.js";
import {
  d,
  o as o11
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  f,
  p as p2
} from "./chunk-TWZMNVWK.js";
import {
  o as o8
} from "./chunk-B2Y4XQVD.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  a,
  a2,
  n as n4,
  t as t2
} from "./chunk-KJG6NJ7J.js";
import {
  c,
  t as t3
} from "./chunk-3AY7Y7FP.js";
import {
  n as n6,
  o2 as o3
} from "./chunk-BSNHCIEC.js";
import {
  n as n5,
  t
} from "./chunk-OULJFYM2.js";
import {
  e as e2
} from "./chunk-ZAYRG6WM.js";
import {
  i
} from "./chunk-YVJ7MJNT.js";
import {
  o as o2
} from "./chunk-X5RZJMNW.js";
import {
  e
} from "./chunk-K24WU5UX.js";
import {
  j
} from "./chunk-LH36NQSN.js";
import {
  o
} from "./chunk-UMYFDXOJ.js";
import {
  n as n3
} from "./chunk-MHM4GDCM.js";
import {
  n as n2
} from "./chunk-JLFSX3JT.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexNormal.glsl.js
function c2(o12, a4) {
  switch (a4.normalType) {
    case a2.Attribute:
    case a2.Compressed:
      o12.include(t2, a4), o12.varyings.add("vNormalWorld", "vec3"), o12.varyings.add("vNormalView", "vec3"), o12.vertex.uniforms.add(new t3("transformNormalGlobalFromModel", (r2) => r2.transformNormalGlobalFromModel), new o3("transformNormalViewFromGlobal", (r2) => r2.transformNormalViewFromGlobal)), o12.vertex.code.add(n5`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);
      break;
    case a2.ScreenDerivative:
      o12.vertex.code.add(n5`void forwardNormal() {}`);
      break;
    default:
      n(a4.normalType);
    case a2.COUNT:
  }
}
var f2 = class extends F {
  constructor() {
    super(...arguments), this.transformNormalViewFromGlobal = e();
  }
};
var n7 = class extends w {
  constructor() {
    super(...arguments), this.transformNormalGlobalFromModel = e(), this.toMapSpace = n3();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Offset.glsl.js
function c3(c5) {
  c5.vertex.code.add(n5`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/InstancedDoublePrecision.glsl.js
var f3 = e();
function M(r2, n8) {
  const p3 = n8.hasModelTransformation, x = n8.instancedDoublePrecision;
  p3 && (r2.vertex.uniforms.add(new o6("model", (e7) => e7.modelTransformation ?? o2)), r2.vertex.uniforms.add(new o3("normalLocalOriginFromModel", (r3) => (j(f3, r3.modelTransformation ?? o2), f3)))), n8.instanced && x && (r2.attributes.add(e2.INSTANCEMODELORIGINHI, "vec3"), r2.attributes.add(e2.INSTANCEMODELORIGINLO, "vec3"), r2.attributes.add(e2.INSTANCEMODEL, "mat3"), r2.attributes.add(e2.INSTANCEMODELNORMAL, "mat3"));
  const M2 = r2.vertex;
  x && (M2.include(c, n8), M2.uniforms.add(new o8("viewOriginHi", (e7) => o9(o(O, e7.camera.viewInverseTransposeMatrix[3], e7.camera.viewInverseTransposeMatrix[7], e7.camera.viewInverseTransposeMatrix[11]), O)), new o8("viewOriginLo", (e7) => r(o(O, e7.camera.viewInverseTransposeMatrix[3], e7.camera.viewInverseTransposeMatrix[7], e7.camera.viewInverseTransposeMatrix[11]), O)))), M2.code.add(n5`
    vec3 getVertexInLocalOriginSpace() {
      return ${p3 ? x ? "(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz" : "(model * localPosition()).xyz" : x ? "instanceModel * localPosition().xyz" : "localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${x ? n5`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;` : "return vpos;"}
    }
    `), M2.code.add(n5`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${p3 ? x ? "normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)" : "normalLocalOriginFromModel * _normal.xyz" : x ? "instanceModelNormal * _normal.xyz" : "_normal.xyz"});
    }
    `), n8.output === n6.Normal && (p2(M2), M2.code.add(n5`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${p3 ? x ? "vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)" : "vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)" : x ? "vec4(instanceModelNormal * _normal.xyz, 1.0)" : "_normal"}).xyz);
    }
    `)), n8.hasVertexTangents && M2.code.add(n5`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${p3 ? x ? "return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);" : "return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);" : x ? "return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);" : "return _tangent;"}
    }`);
}
var O = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/SymbolColor.glsl.js
function i2(i5, t5) {
  t5.hasSymbolColors ? (i5.include(a), i5.attributes.add(e2.SYMBOLCOLOR, "vec4"), i5.varyings.add("colorMixMode", "mediump float"), i5.vertex.code.add(n5`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)) : (i5.fragment.uniforms.add(new o10("colorMixMode", (o12) => o5[o12.colorMixMode])), i5.vertex.code.add(n5`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlpha.glsl.js
function f4(o12, t5) {
  u(o12, t5, new s2("textureAlphaCutoff", (o13) => o13.textureAlphaCutoff));
}
function u(o12, r2, f5) {
  const l2 = o12.fragment, u2 = r2.alphaDiscardMode, d2 = u2 === i.Blend;
  u2 !== i.Mask && u2 !== i.MaskBlend || l2.uniforms.add(f5), l2.code.add(n5`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${u2 === i.Opaque ? "color.a = 1.0;" : `if (color.a < ${d2 ? n5.float(o11) : "textureAlphaCutoff"}) {
              discard;
             } ${t(u2 === i.Mask, "else { color.a = 1.0; }")}`}
    }
  `);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/default/DefaultMaterialAuxiliaryPasses.glsl.js
function h(h2, O2) {
  const { vertex: j2, fragment: w2 } = h2, b = O2.hasColorTexture && O2.alphaDiscardMode !== i.Opaque, { output: C, normalType: V, hasColorTextureTransform: A } = O2;
  switch (C) {
    case n6.Depth:
      f(j2, O2), h2.include(o7, O2), h2.fragment.include(p, O2), h2.include(o4, O2), b && w2.uniforms.add(new s("tex", (e7) => e7.texture)), j2.main.add(n5`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`), h2.include(f4, O2), w2.main.add(n5`
        discardBySlice(vpos);
        ${t(b, n5`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);
      break;
    case n6.Shadow:
    case n6.ShadowHighlight:
    case n6.ShadowExcludeHighlight:
    case n6.ViewshedShadow:
    case n6.ObjectAndLayerIdColor:
      f(j2, O2), h2.include(o7, O2), h2.include(o4, O2), h2.include(l, O2), h2.include(e4, O2), h2.fragment.include(p, O2), h2.include(e3, O2), t4(h2), h2.varyings.add("depth", "float"), b && w2.uniforms.add(new s("tex", (e7) => e7.texture)), j2.main.add(n5`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`), h2.include(f4, O2), w2.main.add(n5`
        discardBySlice(vpos);
        ${t(b, n5`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${C === n6.ObjectAndLayerIdColor ? n5`outputObjectAndLayerIdColor();` : n5`outputDepth(depth);`}`);
      break;
    case n6.Normal: {
      f(j2, O2), h2.include(o7, O2), h2.include(t2, O2), h2.include(c2, O2), h2.include(o4, O2), h2.include(l, O2), b && w2.uniforms.add(new s("tex", (e8) => e8.texture)), V === a2.ScreenDerivative && h2.varyings.add("vPositionView", "vec3");
      const e7 = V === a2.Attribute || V === a2.Compressed;
      j2.main.add(n5`
        vpos = getVertexInLocalOriginSpace();
        ${e7 ? n5`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));` : n5`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`), h2.fragment.include(p, O2), h2.include(f4, O2), w2.main.add(n5`
        discardBySlice(vpos);
        ${t(b, n5`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${V === a2.ScreenDerivative ? n5`vec3 normal = screenDerivativeNormal(vPositionView);` : n5`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);
      break;
    }
    case n6.Highlight:
      f(j2, O2), h2.include(o7, O2), h2.include(o4, O2), h2.include(l, O2), b && w2.uniforms.add(new s("tex", (e7) => e7.texture)), j2.main.add(n5`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`), h2.fragment.include(p, O2), h2.include(f4, O2), h2.include(d, O2), w2.main.add(n5`
        discardBySlice(vpos);
        ${t(b, n5`vec4 texColor = texture(tex, ${A ? "colorUV" : "vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`);
  }
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/MixExternalColor.glsl.js
function i4(i5) {
  i5.include(e5), i5.code.add(n5`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n5.int(n4.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n5.int(n4.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n5.int(n4.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n5.int(n4.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n5.int(n4.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `);
}

export {
  c2 as c,
  f2 as f,
  n7 as n,
  c3 as c2,
  M,
  i2 as i,
  f4 as f2,
  h,
  i4 as i2
};
//# sourceMappingURL=chunk-KG25RUMS.js.map
