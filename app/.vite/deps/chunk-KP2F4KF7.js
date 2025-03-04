import {
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e2
} from "./chunk-QXP5ULTQ.js";
import {
  s
} from "./chunk-EDOH6SI4.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/SlicePlaneMaterial.glsl.js
function g(g2) {
  const l2 = new i(), { vertex: t, fragment: s2, attributes: n2, varyings: c } = l2;
  return f(t, g2), n2.add(e.POSITION, "vec3"), n2.add(e.UV0, "vec2"), c.add("vUV", "vec2"), t.main.add(n`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`), s2.uniforms.add(new e2("backgroundColor", (e3) => e3.backgroundColor), new e2("gridColor", (e3) => e3.gridColor), new s("gridWidth", (e3) => e3.gridWidth)).main.add(n`const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;`), l2;
}
var l = Object.freeze(Object.defineProperty({ __proto__: null, build: g }, Symbol.toStringTag, { value: "Module" }));

export {
  g
};
//# sourceMappingURL=chunk-KP2F4KF7.js.map
