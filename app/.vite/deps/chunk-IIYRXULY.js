import {
  s
} from "./chunk-WFTPV3ZD.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  o as o2
} from "./chunk-5LR3WNQX.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  o
} from "./chunk-EJHUCCX3.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  n
} from "./chunk-O2L6JAHP.js";

// node_modules/@arcgis/core/chunks/SingleHighlightBlur.glsl.js
var n3 = class extends c {
  constructor() {
    super(...arguments), this.blurSize = n();
  }
};
function o3() {
  const e = new i();
  return e.include(s), e.outputs.add("fragSingleHighlight", "vec2", 0), e.fragment.uniforms.add(new o2("blurSize", (e2) => e2.blurSize), new o("blurInput", (e2) => e2.blurInput)).main.add(n2`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`), e;
}
var g = Object.freeze(Object.defineProperty({ __proto__: null, SingleHighlightBlurDrawParameters: n3, build: o3 }, Symbol.toStringTag, { value: "Module" }));

export {
  n3 as n,
  o3 as o,
  g
};
//# sourceMappingURL=chunk-IIYRXULY.js.map
