import {
  o
} from "./chunk-JZNIMAZ2.js";
import {
  e
} from "./chunk-UYIIVYVP.js";
import {
  l
} from "./chunk-PE5GW7C3.js";
import {
  n as n2
} from "./chunk-BSNHCIEC.js";
import {
  i
} from "./chunk-4T44Z66D.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Integer2BindUniform.js
var o2 = class extends i {
  constructor(e2, o4) {
    super(e2, "ivec2", a.Bind, (r, i2) => r.setUniform2iv(e2, o4(i2)));
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js
function d(d2, u) {
  const { fragment: o4 } = d2;
  u.output === n2.Highlight ? (o4.uniforms.add(new o("depthTexture", (i2) => i2.mainDepth), new o("highlightTexture", (i2) => i2.highlightMixTexture), new e("highlightLevel", (i2) => i2.highlightLevel ?? 0), new o2("highlightMixOrigin", (i2) => i2.highlightMixOrigin)), d2.outputs.add("fragHighlight", "vec2", 0), d2.include(l), o4.code.add(n`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`), u.canHaveOverlay && o4.code.add(n`void calculateOcclusionAndOutputHighlightOverlay(vec2 highlightToAdd) {
uint levelBits = readLevelBits(highlightToAdd, highlightLevel);
if ((levelBits & 1u) == 0u) { discard; }
outputHighlight(isHighlightOccluded());
}`)) : o4.code.add(n`void calculateOcclusionAndOutputHighlight() {}`);
}

// node_modules/@arcgis/core/webscene/support/AlphaCutoff.js
var o3 = 1 / 255.5;

export {
  d,
  o3 as o
};
//# sourceMappingURL=chunk-YIMQSH52.js.map
