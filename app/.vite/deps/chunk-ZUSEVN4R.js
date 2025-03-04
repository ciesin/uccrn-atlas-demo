import {
  s as s3
} from "./chunk-WFTPV3ZD.js";
import {
  a,
  n as n2
} from "./chunk-EJARBANV.js";
import {
  o
} from "./chunk-MDKBTLVE.js";
import {
  l
} from "./chunk-PE5GW7C3.js";
import {
  o as o2
} from "./chunk-5LR3WNQX.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/chunks/SingleHighlightApply.glsl.js
function s4() {
  const s5 = new i();
  s5.include(s3);
  const { fragment: c2 } = s5;
  return c2.uniforms.add(new s("blurInput", (e) => e.singleHighlightBlurTexture), new o2("blurSize", (e) => e.blurSize), new s("highlightTexture", (e) => e.highlightTexture), new s("highlightOptionsTexture", (e) => e.highlightOptionsTexture), new o("highlightLevel", (e) => e.highlightLevel), new s2("occludedIntensityFactor", (e) => e.occludedFactor)), c2.constants.add("inner", "float", 1 - (n2 - a) / n2), s5.include(l), c2.main.add(n`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`), s5;
}
var c = Object.freeze(Object.defineProperty({ __proto__: null, build: s4 }, Symbol.toStringTag, { value: "Module" }));

export {
  s4 as s,
  c
};
//# sourceMappingURL=chunk-ZUSEVN4R.js.map
