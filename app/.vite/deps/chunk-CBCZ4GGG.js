import {
  o2 as o
} from "./chunk-TP7H7H6D.js";
import {
  p as p2
} from "./chunk-M5YS3OM7.js";
import {
  e as e2
} from "./chunk-HJA3Q6AG.js";
import {
  d,
  e as e3
} from "./chunk-C5H3KDE3.js";
import {
  p
} from "./chunk-LZBWOTLM.js";
import {
  f
} from "./chunk-TWZMNVWK.js";
import {
  c
} from "./chunk-P3ZDIFZS.js";
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
  n as n2
} from "./chunk-BSNHCIEC.js";
import {
  n,
  t
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/chunks/ImageMaterial.glsl.js
var u = class extends c {
};
function w(c2) {
  const u2 = new i(), { vertex: w2, fragment: b2 } = u2, { output: f2, perspectiveInterpolation: h } = c2;
  return f(w2, c2), u2.include(o, c2), u2.include(d, c2), u2.fragment.include(p, c2), u2.include(e2, c2), u2.include(p2, c2), u2.attributes.add(e.POSITION, "vec3"), u2.attributes.add(e.UV0, "vec2"), h && u2.attributes.add(e.PERSPECTIVEDIVIDE, "float"), w2.main.add(n`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(h, "gl_Position *= perspectiveDivide;")}`), u2.varyings.add("vpos", "vec3"), u2.varyings.add("vTexCoord", "vec2"), b2.include(e3), b2.uniforms.add(new s2("opacity", (e4) => e4.opacity), new s("tex", (e4) => e4.texture)).main.add(n`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${t(f2 === n2.ObjectAndLayerIdColor, "fragColor = vec4(0, 0, 0, 1); return;")}
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    outputColorHighlightOID(finalColor, vpos);`), u2;
}
var b = Object.freeze(Object.defineProperty({ __proto__: null, ImageMaterialPassParameters: u, build: w }, Symbol.toStringTag, { value: "Module" }));

export {
  u,
  w,
  b
};
//# sourceMappingURL=chunk-CBCZ4GGG.js.map
