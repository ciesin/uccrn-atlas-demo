import {
  e as e2
} from "./chunk-6BJQY5YG.js";
import {
  o2 as o
} from "./chunk-TP7H7H6D.js";
import {
  p as p2
} from "./chunk-M5YS3OM7.js";
import {
  e as e4
} from "./chunk-HJA3Q6AG.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  d,
  e as e5
} from "./chunk-C5H3KDE3.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  f
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-QXP5ULTQ.js";
import {
  i
} from "./chunk-36LA23CO.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/ColorMaterial.glsl.js
function c(c2) {
  const m2 = new i(), { vertex: u, fragment: w, attributes: p3, varyings: f2 } = m2, { vvColor: h, hasVertexColors: C } = c2;
  return f(u, c2), m2.include(o, c2), m2.include(e2, c2), m2.include(l, c2), m2.include(e4, c2), w.include(p, c2), m2.include(p2, c2), m2.include(d, c2), p3.add(e.POSITION, "vec3"), h && p3.add(e.COLORFEATUREATTRIBUTE, "float"), C || f2.add("vColor", "vec4"), f2.add("vpos", "vec3"), u.uniforms.add(new e3("uColor", (e6) => e6.color)), u.main.add(n`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${C ? "vColor *= uColor;" : h ? "vColor = uColor * interpolateVVColor(colorFeatureAttribute);" : "vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`), w.include(e5), w.main.add(n`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos);`), m2;
}
var m = Object.freeze(Object.defineProperty({ __proto__: null, build: c }, Symbol.toStringTag, { value: "Module" }));

export {
  c,
  m
};
//# sourceMappingURL=chunk-OSUBKL4S.js.map
