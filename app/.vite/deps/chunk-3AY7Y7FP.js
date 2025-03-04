import {
  i
} from "./chunk-4T44Z66D.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  a
} from "./chunk-NWA7NYLF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/util/DoublePrecision.glsl.js
function c({ code: c2 }, i2) {
  i2.doublePrecisionRequiresObfuscation ? c2.add(n`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`) : c2.add(n`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js
var t = class extends i {
  constructor(o, t2) {
    super(o, "mat3", a.Draw, (r, e, s) => r.setUniformMatrix3fv(o, t2(e, s)));
  }
};

export {
  c,
  t
};
//# sourceMappingURL=chunk-3AY7Y7FP.js.map
