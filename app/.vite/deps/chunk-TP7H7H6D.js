import {
  o as o3
} from "./chunk-F6CYJMBV.js";
import {
  c as c2
} from "./chunk-P3ZDIFZS.js";
import {
  o as o4
} from "./chunk-F6RMQNRI.js";
import {
  c,
  t
} from "./chunk-3AY7Y7FP.js";
import {
  n as n3,
  o2
} from "./chunk-BSNHCIEC.js";
import {
  o
} from "./chunk-U5M766SV.js";
import {
  e as e4
} from "./chunk-D7JG6K4Y.js";
import {
  n as n2
} from "./chunk-OULJFYM2.js";
import {
  e as e3
} from "./chunk-ZAYRG6WM.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/PositionAttribute.glsl.js
function o5(o7) {
  o7.attributes.add(e3.POSITION, "vec3"), o7.vertex.code.add(n2`vec3 positionModel() { return position; }`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/VertexPosition.glsl.js
function v(r, o7) {
  r.include(o5);
  const e5 = r.vertex;
  e5.include(c, o7), r.varyings.add("vPositionWorldCameraRelative", "vec3"), r.varyings.add("vPosition_view", "vec3"), e5.uniforms.add(new e4("transformWorldFromViewTH", (r2) => r2.transformWorldFromViewTH), new e4("transformWorldFromViewTL", (r2) => r2.transformWorldFromViewTL), new o2("transformViewFromCameraRelativeRS", (r2) => r2.transformViewFromCameraRelativeRS), new o3("transformProjFromView", (r2) => r2.transformProjFromView), new t("transformWorldFromModelRS", (r2) => r2.transformWorldFromModelRS), new o("transformWorldFromModelTH", (r2) => r2.transformWorldFromModelTH), new o("transformWorldFromModelTL", (r2) => r2.transformWorldFromModelTL)), e5.code.add(n2`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`), e5.code.add(n2`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${o7.spherical ? n2`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)` : n2`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `), r.fragment.uniforms.add(new e4("transformWorldFromViewTL", (r2) => r2.transformWorldFromViewTL)), e5.code.add(n2`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`), r.fragment.code.add(n2`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
}
var F = class extends c2 {
  constructor() {
    super(...arguments), this.transformWorldFromViewTH = n(), this.transformWorldFromViewTL = n(), this.transformViewFromCameraRelativeRS = e2(), this.transformProjFromView = e();
  }
};
var w = class extends c2 {
  constructor() {
    super(...arguments), this.transformWorldFromModelRS = e2(), this.transformWorldFromModelTH = n(), this.transformWorldFromModelTL = n();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ForwardLinearDepth.glsl.js
function i(e5) {
  e5.varyings.add("linearDepth", "float");
}
function t2(e5) {
  e5.vertex.uniforms.add(new o4("nearFar", (e6) => e6.camera.nearFar));
}
function d(e5) {
  e5.vertex.code.add(n2`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`);
}
function n4(a, n5) {
  const { vertex: s } = a;
  switch (n5.output) {
    case n3.Color:
    case n3.ColorEmission:
      if (n5.receiveShadows) return i(a), void s.code.add(n2`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);
      break;
    case n3.Shadow:
    case n3.ShadowHighlight:
    case n3.ShadowExcludeHighlight:
    case n3.ViewshedShadow:
      return a.include(v, n5), i(a), t2(a), d(a), void s.code.add(n2`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`);
  }
  s.code.add(n2`void forwardLinearDepth() {}`);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/Transform.glsl.js
function o6(o7) {
  d(o7), o7.vertex.code.add(n2`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`), o7.vertex.code.add(n2`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
}

export {
  o5 as o,
  F,
  w,
  t2 as t,
  n4 as n,
  o6 as o2
};
//# sourceMappingURL=chunk-TP7H7H6D.js.map
