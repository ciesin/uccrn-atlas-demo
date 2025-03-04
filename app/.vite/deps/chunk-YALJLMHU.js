import {
  M,
  c2 as c,
  f2,
  h,
  i,
  i2 as i3
} from "./chunk-KG25RUMS.js";
import {
  p as p2,
  t as t3,
  u as u2,
  v
} from "./chunk-FBCKMXY6.js";
import {
  m2,
  x
} from "./chunk-2ICSBW5I.js";
import {
  m,
  n2,
  n3 as n4,
  o3 as o5,
  t2 as t4
} from "./chunk-AY7NUQ6K.js";
import {
  e as e3
} from "./chunk-6BJQY5YG.js";
import {
  n as n3,
  o as o2,
  o2 as o3
} from "./chunk-TP7H7H6D.js";
import {
  o,
  p as p3
} from "./chunk-M5YS3OM7.js";
import {
  s2
} from "./chunk-ZARQIHWV.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  d as d2
} from "./chunk-C5H3KDE3.js";
import {
  o as o4
} from "./chunk-YIMQSH52.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  d,
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e4
} from "./chunk-QXP5ULTQ.js";
import {
  s as s3
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i as i2
} from "./chunk-36LA23CO.js";
import {
  t as t2
} from "./chunk-KJG6NJ7J.js";
import {
  u
} from "./chunk-BSNHCIEC.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/RealisticTree.glsl.js
function _(_2) {
  const z2 = new i2(), { vertex: k, fragment: G, varyings: U } = z2, { output: W, offsetBackfaces: H, instancedColor: q, pbrMode: J, snowCover: K, spherical: Q } = _2, X = J === n2.Normal || J === n2.Schematic;
  if (f(k, _2), z2.include(o2), U.add("vpos", "vec3"), z2.include(l, _2), z2.include(M, _2), z2.include(s2, _2), z2.include(d2, _2), u(W) && (d(z2.vertex, _2), z2.include(t2, _2), z2.include(o3, _2), H && z2.include(c), q && z2.attributes.add(e.INSTANCECOLOR, "vec4"), U.add("vNormalWorld", "vec3"), U.add("localvpos", "vec3"), z2.include(o, _2), z2.include(n3, _2), z2.include(i, _2), z2.include(e3, _2), k.uniforms.add(new e4("externalColor", (e5) => e5.externalColor)), U.add("vcolorExt", "vec4"), k.main.add(n`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${t(q, "vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${n.float(o4)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${t(H, "offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);", "basePosition;")}
    `)), u(W)) {
    const { hasColorTexture: e5, hasColorTextureTransform: r, receiveShadows: o6 } = _2;
    z2.include(v, _2), z2.include(t3, _2), z2.include(f2, _2), z2.include(_2.instancedDoublePrecision ? m2 : x, _2), z2.fragment.include(p, _2), z2.include(p3, _2), d(z2.fragment, _2), t4(G), u2(G), p2(G), G.uniforms.add(k.uniforms.get("localOrigin"), k.uniforms.get("view"), new e2("ambient", (e6) => e6.ambient), new e2("diffuse", (e6) => e6.diffuse), new s3("opacity", (e6) => e6.opacity), new s3("layerOpacity", (e6) => e6.layerOpacity)), e5 && G.uniforms.add(new s("tex", (e6) => e6.texture)), z2.include(m, _2), z2.include(n4, _2), G.include(i3), o5(G), G.main.add(n`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${e5 ? `texture(tex, ${r ? "colorUV" : "vuv0"})` : " vec4(1.0)"};
      ${t(e5, `${t(_2.textureAlphaPremultiplied, "texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${o6 ? "max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))" : Q ? "lightingGlobalFactor * (1.0 - additionalAmbientScale)" : "0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${_2.hasVertexColors ? n`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));` : n`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${t(K, "albedo = mix(albedo, vec3(1), 0.9);")}
      ${n`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${t(X, `vec3 normalGround = ${Q ? "normalize(vpos + localOrigin)" : "vec3(0.0, 0.0, 1.0)"};`)}
      ${X ? n`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${t(K, n`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${K ? "vec4(0.0)" : "getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);` : n`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`);
  }
  return z2.include(h, _2), z2;
}
var z = Object.freeze(Object.defineProperty({ __proto__: null, build: _ }, Symbol.toStringTag, { value: "Module" }));

export {
  _,
  z
};
//# sourceMappingURL=chunk-YALJLMHU.js.map
