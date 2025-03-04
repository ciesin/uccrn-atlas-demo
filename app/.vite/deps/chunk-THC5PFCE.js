import {
  o
} from "./chunk-MDKBTLVE.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
import {
  e
} from "./chunk-LN4OREZH.js";
import {
  s
} from "./chunk-XUP22FSP.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";

// node_modules/@arcgis/core/chunks/FocusAreaColor.glsl.js
var t = class extends c {
};
function c2() {
  const a = new i();
  return a.include(e), a.outputs.add("fragColor", "vec4", 0), a.fragment.uniforms.add(new s("colorTexture", (e2) => e2.color), new s("focusArea", (e2) => e2.focusArea), new o("focusAreaEffectMode", (e2) => e2.effect ?? 1)).main.add(n`float mask = texture( focusArea, uv, 0.0 ).r;
vec4 color = texture( colorTexture, uv, 0.0 );
vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
if (focusAreaEffectMode == 1) {
fragColor = mask > 0.0 ? color : 0.55 * colorDeSaturate + 0.45;
} else {
fragColor = mask > 0.0 ? color : 0.33 * mix(color, colorDeSaturate, 0.);
}`), a;
}
var u = Object.freeze(Object.defineProperty({ __proto__: null, FocusAreaColorPassParameters: t, build: c2 }, Symbol.toStringTag, { value: "Module" }));

export {
  t,
  c2 as c,
  u
};
//# sourceMappingURL=chunk-THC5PFCE.js.map
