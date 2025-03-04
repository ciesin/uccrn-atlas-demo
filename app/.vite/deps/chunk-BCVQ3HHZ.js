import {
  a
} from "./chunk-OBOMTFRH.js";
import {
  i
} from "./chunk-NQBVVSVQ.js";
import {
  d,
  d2
} from "./chunk-M5YS3OM7.js";
import {
  l
} from "./chunk-TD7VJ4Z2.js";
import {
  s
} from "./chunk-XJ5CGMWY.js";
import {
  w
} from "./chunk-TWZMNVWK.js";
import {
  e as e3
} from "./chunk-IG22ED74.js";
import {
  s as s2
} from "./chunk-EDOH6SI4.js";
import {
  e as e2
} from "./chunk-D7JG6K4Y.js";
import {
  n
} from "./chunk-OULJFYM2.js";
import {
  e
} from "./chunk-ZAYRG6WM.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/LineMarkerTechniqueConfiguration.js
var s3;
var p;
!function(t) {
  t[t.Draped = 0] = "Draped", t[t.Screen = 1] = "Screen", t[t.World = 2] = "World", t[t.COUNT = 3] = "COUNT";
}(s3 || (s3 = {})), function(t) {
  t[t.Center = 0] = "Center", t[t.Tip = 1] = "Tip", t[t.COUNT = 2] = "COUNT";
}(p || (p = {}));
var a2 = class extends a {
  constructor() {
    super(...arguments), this.space = s3.Screen, this.anchor = p.Center, this.occluder = false, this.writeDepth = false, this.hideOnShortSegments = false, this.hasCap = false, this.hasTip = false, this.vvSize = false, this.vvColor = false, this.vvOpacity = false, this.hasOccludees = false, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.textureCoordinateType = d.None, this.emissionSource = d2.None, this.discardInvisibleFragments = true, this.occlusionPass = false, this.hasVvInstancing = true, this.hasSliceTranslatedView = true, this.objectAndLayerIdColorInstanced = false;
  }
  get draped() {
    return this.space === s3.Draped;
  }
};
r([i({ count: s3.COUNT })], a2.prototype, "space", void 0), r([i({ count: p.COUNT })], a2.prototype, "anchor", void 0), r([i()], a2.prototype, "occluder", void 0), r([i()], a2.prototype, "writeDepth", void 0), r([i()], a2.prototype, "hideOnShortSegments", void 0), r([i()], a2.prototype, "hasCap", void 0), r([i()], a2.prototype, "hasTip", void 0), r([i()], a2.prototype, "vvSize", void 0), r([i()], a2.prototype, "vvColor", void 0), r([i()], a2.prototype, "vvOpacity", void 0), r([i()], a2.prototype, "hasOccludees", void 0), r([i()], a2.prototype, "terrainDepthTest", void 0), r([i()], a2.prototype, "cullAboveTerrain", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/attributes/RibbonVertexPosition.glsl.js
var o = 8;
function c(c2, s5) {
  const l2 = c2.vertex;
  l2.uniforms.add(new s2("intrinsicWidth", (t) => t.width)), s5.vvSize ? (c2.attributes.add(e.SIZEFEATUREATTRIBUTE, "float"), l2.uniforms.add(new e2("vvSizeMinSize", (t) => t.vvSize.minSize), new e2("vvSizeMaxSize", (t) => t.vvSize.maxSize), new e2("vvSizeOffset", (t) => t.vvSize.offset), new e2("vvSizeFactor", (t) => t.vvSize.factor)), l2.code.add(n`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)) : (c2.attributes.add(e.SIZE, "float"), l2.code.add(n`float getSize(){
return intrinsicWidth * size;
}`)), s5.vvOpacity ? (c2.attributes.add(e.OPACITYFEATUREATTRIBUTE, "float"), l2.constants.add("vvOpacityNumber", "int", 8), l2.uniforms.add(new s("vvOpacityValues", (t) => t.vvOpacity.values, o), new s("vvOpacityOpacities", (t) => t.vvOpacity.opacityValues, o)), l2.code.add(n`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)) : l2.code.add(n`vec4 applyOpacity( vec4 color ){
return color;
}`), s5.vvColor ? (c2.include(l, s5), c2.attributes.add(e.COLORFEATUREATTRIBUTE, "float"), l2.code.add(n`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)) : (c2.attributes.add(e.COLOR, "vec4"), l2.code.add(n`vec4 getColor(){
return applyOpacity(color);
}`));
}

// node_modules/@arcgis/core/views/3d/support/engineContent/marker.js
var m = 64;
var s4 = m / 2;
var n2 = s4 / 5;
var p3 = m / n2;
var w3 = 0.25;

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderLibrary/shading/MarkerSizing.glsl.js
function n3(n4, i3) {
  const d3 = n4.vertex;
  w(d3), null == d3.uniforms.get("markerScale") && d3.constants.add("markerScale", "float", 1), d3.constants.add("markerSizePerLineWidth", "float", p3).code.add(n`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`), i3.space === s3.World && (d3.constants.add("maxSegmentLengthFraction", "float", 0.45), d3.uniforms.add(new e3("perRenderPixelRatio", (e4) => e4.camera.perRenderPixelRatio)), d3.code.add(n`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`));
}

export {
  s3 as s,
  p,
  a2 as a,
  c,
  m,
  s4 as s2,
  w3 as w,
  n3 as n
};
//# sourceMappingURL=chunk-BCVQ3HHZ.js.map
