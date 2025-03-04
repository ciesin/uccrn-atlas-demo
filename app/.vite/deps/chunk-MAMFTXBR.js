import {
  r,
  u as u2
} from "./chunk-MHM4GDCM.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  u
} from "./chunk-JLFV7EBO.js";

// node_modules/@arcgis/core/views/3d/layers/support/layerUtils.js
function t(t7) {
  return "fill" === t7.type;
}
function e(t7) {
  return "extrude" === t7.type;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/interfaces.js
var A;
!function(A2) {
  A2[A2.TRANSPARENT = 0] = "TRANSPARENT", A2[A2.OPAQUE = 1] = "OPAQUE";
}(A || (A = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/collections/Component/Material/shader/ComponentData.glsl.js
var C;
!function(o6) {
  o6[o6.Uniform = 0] = "Uniform", o6[o6.Varying = 1] = "Varying", o6[o6.COUNT = 2] = "COUNT";
}(C || (C = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/sources/edgeRenderer/EdgeUtil.glsl.js
var u3;
var x;
!function(o6) {
  o6[o6.Solid = 0] = "Solid", o6[o6.Sketch = 1] = "Sketch", o6[o6.Mixed = 2] = "Mixed", o6[o6.COUNT = 3] = "COUNT";
}(u3 || (u3 = {})), function(o6) {
  o6[o6.REGULAR = 0] = "REGULAR", o6[o6.SILHOUETTE = 1] = "SILHOUETTE";
}(x || (x = {}));

// node_modules/@arcgis/core/views/3d/layers/support/edgeUtils.js
function c2(e6) {
  return e6 && e6.enabled && (e(e6) || t(e6)) && null != e6.edges;
}
function u4(e6) {
  return e6 && e6.enabled && e6.edges || null;
}
function a3(e6, n4) {
  return f(u4(e6), n4);
}
function f(o6, i2) {
  if (null == o6) return null;
  const s = null != o6.color ? u2(h.toUnitRGBA(o6.color)) : r(0, 0, 0, 0), l = u(o6.size), c3 = u(o6.extensionLength);
  switch (o6.type) {
    case "solid":
      return g({ color: s, size: l, extensionLength: c3, ...i2 });
    case "sketch":
      return p({ color: s, size: l, extensionLength: c3, ...i2 });
    default:
      return;
  }
}
function g(e6) {
  return { ...m2, ...e6, type: u3.Solid };
}
function p(e6) {
  return { ...d, ...e6, type: u3.Sketch };
}
var m2 = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false };
var d = { color: r(0, 0, 0, 0.2), size: 1, extensionLength: 0, opacity: 1, objectTransparency: A.OPAQUE, hasSlicePlane: false };

export {
  A,
  c2 as c,
  a3 as a,
  g
};
//# sourceMappingURL=chunk-MAMFTXBR.js.map
