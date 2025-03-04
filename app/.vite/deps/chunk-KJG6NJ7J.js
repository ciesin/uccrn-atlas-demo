import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  r
} from "./chunk-6P7HXSJ6.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/NormalAttribute.glsl.js
function t(t2, i2) {
  switch (i2.normalType) {
    case a.Compressed:
      t2.attributes.add(e.NORMALCOMPRESSED, "vec2"), t2.vertex.code.add(n2`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);
      break;
    case a.Attribute:
      t2.attributes.add(e.NORMAL, "vec3"), t2.vertex.code.add(n2`vec3 normalModel() {
return normal;
}`);
      break;
    case a.ScreenDerivative:
      t2.fragment.code.add(n2`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);
      break;
    default:
      n(i2.normalType);
    case a.COUNT:
  }
}
var a;
!function(e3) {
  e3[e3.Attribute = 0] = "Attribute", e3[e3.Compressed = 1] = "Compressed", e3[e3.ScreenDerivative = 2] = "ScreenDerivative", e3[e3.COUNT = 3] = "COUNT";
}(a || (a = {}));

// node_modules/@arcgis/core/views/3d/layers/support/symbolColorUtils.js
var n3;
function e2(t2) {
  switch (t2) {
    case "multiply":
    default:
      return n3.Multiply;
    case "ignore":
      return n3.Ignore;
    case "replace":
      return n3.Replace;
    case "tint":
      return n3.Tint;
  }
}
function r2(e3, r3, a3) {
  if (null == e3 || r3 === n3.Ignore) return a3[0] = 255, a3[1] = 255, a3[2] = 255, void (a3[3] = 255);
  const c = r(Math.round(e3[3] * i), 0, i), p = 0 === c || r3 === n3.Tint ? 0 : r3 === n3.Replace ? u : l;
  a3[0] = r(Math.round(e3[0] * o), 0, o), a3[1] = r(Math.round(e3[1] * o), 0, o), a3[2] = r(Math.round(e3[2] * o), 0, o), a3[3] = c + p;
}
!function(t2) {
  t2[t2.Multiply = 1] = "Multiply", t2[t2.Ignore = 2] = "Ignore", t2[t2.Replace = 3] = "Replace", t2[t2.Tint = 4] = "Tint";
}(n3 || (n3 = {}));
var o = 255;
var i = 85;
var u = i;
var l = 2 * i;

// node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/DecodeSymbolColor.glsl.js
function a2(a3) {
  a3.vertex.code.add(n2`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n2.int(n3.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n2.int(n3.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n2.int(n3.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n2.int(n3.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
}

export {
  n3 as n,
  e2 as e,
  r2 as r,
  a2 as a,
  t,
  a as a2
};
//# sourceMappingURL=chunk-KJG6NJ7J.js.map
