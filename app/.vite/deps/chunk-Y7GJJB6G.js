import {
  s as s2
} from "./chunk-WFTPV3ZD.js";
import {
  o
} from "./chunk-MDKBTLVE.js";
import {
  l
} from "./chunk-PE5GW7C3.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/chunks/HighlightToSingle.glsl.js
function s3() {
  const s4 = new i();
  s4.include(s2), s4.include(l);
  const { fragment: h2 } = s4;
  return s4.outputs.add("fragSingleHighlight", "vec2", 0), h2.uniforms.add(new s("highlightTexture", (e) => e.highlightTexture), new o("highlightLevel", (e) => e.highlightLevel)), h2.main.add(n`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`), s4;
}
var h = Object.freeze(Object.defineProperty({ __proto__: null, build: s3 }, Symbol.toStringTag, { value: "Module" }));

export {
  s3 as s,
  h
};
//# sourceMappingURL=chunk-Y7GJJB6G.js.map
