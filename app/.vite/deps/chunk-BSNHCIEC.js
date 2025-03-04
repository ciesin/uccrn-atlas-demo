import {
  i
} from "./chunk-4T44Z66D.js";
import {
  a
} from "./chunk-NWA7NYLF.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/ShaderOutput.js
var n;
function o(o3) {
  return o3 === n.Shadow || o3 === n.ShadowHighlight || o3 === n.ShadowExcludeHighlight || o3 === n.ViewshedShadow;
}
function r(o3) {
  return w(o3) || o3 === n.Normal;
}
function t(o3) {
  return C(o3) || o3 === n.Normal;
}
function i2(o3) {
  return o3 === n.Highlight || o3 === n.ObjectAndLayerIdColor;
}
function e(n2) {
  return h(n2) || i2(n2);
}
function h(o3) {
  return o3 === n.Color;
}
function u(n2) {
  return h(n2) || H(n2);
}
function d(o3) {
  return h(o3) || o3 === n.ObjectAndLayerIdColor;
}
function l(o3) {
  return u(o3) || o3 === n.ObjectAndLayerIdColor;
}
function c(o3) {
  return h(o3) || o3 === n.Highlight;
}
function a2(n2) {
  return c(n2) || S(n2);
}
function g(n2) {
  return h(n2) || i2(n2);
}
function f(n2) {
  return u(n2) || i2(n2);
}
function w(n2) {
  return g(n2) || S(n2);
}
function C(n2) {
  return f(n2) || S(n2);
}
function S(o3) {
  return o3 === n.Depth;
}
function H(o3) {
  return o3 === n.ColorEmission;
}
!function(n2) {
  n2[n2.Color = 0] = "Color", n2[n2.ColorEmission = 1] = "ColorEmission", n2[n2.Depth = 2] = "Depth", n2[n2.Normal = 3] = "Normal", n2[n2.Shadow = 4] = "Shadow", n2[n2.ShadowHighlight = 5] = "ShadowHighlight", n2[n2.ShadowExcludeHighlight = 6] = "ShadowExcludeHighlight", n2[n2.ViewshedShadow = 7] = "ViewshedShadow", n2[n2.Highlight = 8] = "Highlight", n2[n2.ObjectAndLayerIdColor = 9] = "ObjectAndLayerIdColor", n2[n2.COUNT = 10] = "COUNT";
}(n || (n = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Matrix3PassUniform.js
var o2 = class extends i {
  constructor(s, o3) {
    super(s, "mat3", a.Pass, (r2, t2, e2) => r2.setUniformMatrix3fv(s, o3(t2, e2)));
  }
};

export {
  n,
  o,
  r,
  t,
  i2 as i,
  e,
  h,
  u,
  d,
  l,
  a2 as a,
  g,
  f,
  C,
  S,
  H,
  o2
};
//# sourceMappingURL=chunk-BSNHCIEC.js.map
