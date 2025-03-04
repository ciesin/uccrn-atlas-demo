import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl.js
function e2(e3, o = true) {
  e3.attributes.add(e.POSITION, "vec2"), o && e3.varyings.add("uv", "vec2"), e3.vertex.main.add(n`
      gl_Position = vec4(position, 0.0, 1.0);
      ${o ? n`uv = position * 0.5 + vec2(0.5);` : ""}
  `);
}

export {
  e2 as e
};
//# sourceMappingURL=chunk-LN4OREZH.js.map
