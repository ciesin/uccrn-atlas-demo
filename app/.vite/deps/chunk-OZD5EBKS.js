import {
  F,
  j as j2,
  p as p5,
  s as s5
} from "./chunk-YC4GT4R7.js";
import {
  p as p4
} from "./chunk-BCVQ3HHZ.js";
import {
  n as n7,
  r as r10,
  t as t5
} from "./chunk-IHQU26IU.js";
import {
  u as u4
} from "./chunk-SOIGHC7A.js";
import {
  b as b2,
  j
} from "./chunk-ET4BF57A.js";
import {
  A2 as A,
  C as C2,
  P as P2,
  a2 as a,
  e as e8,
  e2 as e10,
  f as f2,
  f2 as f3,
  f4,
  i as i3,
  i2 as i4,
  l,
  l2 as l3,
  m as m4,
  o2 as o5,
  r as r9,
  s as s4
} from "./chunk-EMVGISAT.js";
import {
  H as H3
} from "./chunk-FWGIWKNF.js";
import {
  m as m3,
  s as s3
} from "./chunk-IR5AHWR5.js";
import {
  l as l2,
  t as t3
} from "./chunk-WP2IQPQN.js";
import {
  e as e9
} from "./chunk-M5YS3OM7.js";
import {
  B as B2,
  c as c3,
  g as g2
} from "./chunk-TKKZ7DIH.js";
import {
  e as e7,
  n2 as n6,
  p2 as p3,
  r as r8,
  t2 as t4
} from "./chunk-XJ5CGMWY.js";
import {
  o as o4
} from "./chunk-C5H3KDE3.js";
import {
  o as o6
} from "./chunk-YIMQSH52.js";
import {
  B,
  M as M2,
  b,
  v
} from "./chunk-L3N7SR24.js";
import {
  e as e6
} from "./chunk-HV35YTAC.js";
import {
  t as t2
} from "./chunk-LAXBDZHV.js";
import {
  C,
  S,
  e as e5,
  i as i2,
  n as n5,
  u as u3
} from "./chunk-BSNHCIEC.js";
import {
  E as E3,
  U
} from "./chunk-WAKNRSGF.js";
import {
  E as E4,
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  t
} from "./chunk-YVJ7MJNT.js";
import {
  M,
  O,
  V,
  m,
  p as p2
} from "./chunk-NVEHOQKI.js";
import {
  m as m2
} from "./chunk-ZKPJPNLW.js";
import {
  e as e3,
  o as o3
} from "./chunk-X5RZJMNW.js";
import {
  E as E2,
  f
} from "./chunk-CRKFUUKK.js";
import {
  r as r7
} from "./chunk-K35H6D4D.js";
import {
  E,
  H as H2,
  I,
  P,
  c as c2,
  g,
  o as o2,
  p,
  r as r6,
  s as s2,
  u as u2
} from "./chunk-UMYFDXOJ.js";
import {
  N,
  r as r5
} from "./chunk-MHM4GDCM.js";
import {
  e as e2,
  n as n4
} from "./chunk-KWOLBNIK.js";
import {
  o as o7
} from "./chunk-HSI6V34N.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  H,
  c,
  n as n3
} from "./chunk-53ZTROGC.js";
import {
  y
} from "./chunk-JLFV7EBO.js";
import {
  n as n2,
  r as r4
} from "./chunk-JLFSX3JT.js";
import {
  r as r3
} from "./chunk-6P7HXSJ6.js";
import {
  i
} from "./chunk-I4HN3ELT.js";
import {
  e3 as e,
  r
} from "./chunk-RYSF6YCR.js";
import {
  r as r2
} from "./chunk-7QTMSBS3.js";
import {
  s,
  u2 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/UpdatePolicy.js
var C3;
!function(C6) {
  C6[C6.ASYNC = 0] = "ASYNC", C6[C6.SYNC = 1] = "SYNC";
}(C3 || (C3 = {}));

// node_modules/@arcgis/core/views/3d/layers/interfaces.js
var e11;
var a2;
var t6;
!function(e14) {
  e14[e14.RasterImage = 0] = "RasterImage", e14[e14.Features = 1] = "Features";
}(e11 || (e11 = {})), function(e14) {
  e14[e14.MapLayer = 0] = "MapLayer", e14[e14.ViewLayer = 1] = "ViewLayer", e14[e14.Outline = 2] = "Outline", e14[e14.SnappingHint = 3] = "SnappingHint";
}(a2 || (a2 = {})), function(e14) {
  e14[e14.WithRasterImage = 0] = "WithRasterImage", e14[e14.WithoutRasterImage = 1] = "WithoutRasterImage";
}(t6 || (t6 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Object3D.js
var A2 = class extends r8 {
  get geometries() {
    return this._geometries;
  }
  get transformation() {
    return this._transformation ?? o3;
  }
  set transformation(e14) {
    this._transformation = n3(this._transformation ?? e3(), e14), this._invalidateBoundingVolume(), this._emit("transformationChanged", this);
  }
  get shaderTransformation() {
    return this._shaderTransformation;
  }
  set shaderTransformation(e14) {
    this._shaderTransformation = e14 ? n3(this._shaderTransformation ?? e3(), e14) : null, this._invalidateBoundingVolume(), this._emit("shaderTransformationChanged", this);
  }
  get effectiveTransformation() {
    return this.shaderTransformation ?? this.transformation;
  }
  constructor(t9 = {}) {
    super(), this.type = e7.Object, this._shaderTransformation = null, this._parentLayer = null, this._visible = true, this.castShadow = t9.castShadow ?? true, this.usesVerticalDistanceToGround = t9.usesVerticalDistanceToGround ?? false, this.graphicUid = t9.graphicUid, this.layerUid = t9.layerUid, t9.isElevationSource && (this.lastValidElevationBB = new L()), this._geometries = t9.geometries ? Array.from(t9.geometries) : new Array();
  }
  dispose() {
    this._geometries.length = 0;
  }
  get parentLayer() {
    return this._parentLayer;
  }
  set parentLayer(t9) {
    s3(null == this._parentLayer || null == t9, "Object3D can only be added to a single Layer"), this._parentLayer = t9;
  }
  addGeometry(t9) {
    t9.visible = this._visible, this._geometries.push(t9), this._emit("geometryAdded", { object: this, geometry: t9 }), this._invalidateBoundingVolume();
  }
  removeGeometry(t9) {
    const e14 = this._geometries.splice(t9, 1)[0];
    e14 && (this._emit("geometryRemoved", { object: this, geometry: e14 }), this._invalidateBoundingVolume());
  }
  removeAllGeometries() {
    for (; this._geometries.length > 0; ) this.removeGeometry(0);
  }
  geometryVertexAttributeUpdated(t9, e14, i6 = false) {
    this._emit("attributesChanged", { object: this, geometry: t9, attribute: e14, sync: i6 }), E4(e14) && this._invalidateBoundingVolume();
  }
  get visible() {
    return this._visible;
  }
  set visible(t9) {
    if (this._visible !== t9) {
      this._visible = t9;
      for (const t10 of this._geometries) t10.visible = this._visible;
      this._emit("visibilityChanged", this);
    }
  }
  maskOccludee() {
    const t9 = new r9();
    for (const e14 of this._geometries) e14.occludees = n7(e14.occludees, t9);
    return this._emit("occlusionChanged", this), t9;
  }
  removeOcclude(t9) {
    for (const e14 of this._geometries) e14.occludees = r10(e14.occludees, t9);
    this._emit("occlusionChanged", this);
  }
  highlight(t9) {
    const e14 = new e8(t9);
    for (const i6 of this._geometries) i6.addHighlight(e14);
    return this._emit("highlightChanged", this), e14;
  }
  removeHighlight(t9) {
    for (const e14 of this._geometries) e14.removeHighlight(t9);
    this._emit("highlightChanged", this);
  }
  removeStateID(t9) {
    t9.channel === t.Highlight ? this.removeHighlight(t9) : this.removeOcclude(t9);
  }
  getCombinedStaticTransformation(t9, i6) {
    return c(i6, this.transformation, t9.transformation);
  }
  getCombinedShaderTransformation(t9, i6 = e3()) {
    return c(i6, this.effectiveTransformation, t9.transformation);
  }
  get boundingVolumeWorldSpace() {
    return this._bvWorldSpace || (this._bvWorldSpace = this._bvWorldSpace || new M3(), this._validateBoundingVolume(this._bvWorldSpace, E5.WorldSpace)), this._bvWorldSpace;
  }
  get boundingVolumeObjectSpace() {
    return this._bvObjectSpace || (this._bvObjectSpace = this._bvObjectSpace || new M3(), this._validateBoundingVolume(this._bvObjectSpace, E5.ObjectSpace)), this._bvObjectSpace;
  }
  _validateBoundingVolume(t9, e14) {
    const i6 = e14 === E5.ObjectSpace;
    for (const s8 of this._geometries) {
      const e15 = s8.boundingInfo;
      e15 && T(e15, t9, i6 ? s8.transformation : this.getCombinedShaderTransformation(s8));
    }
    I(U(t9.bounds), t9.min, t9.max, 0.5);
    for (const s8 of this._geometries) {
      const e15 = s8.boundingInfo;
      if (null == e15) continue;
      const r12 = i6 ? s8.transformation : this.getCombinedShaderTransformation(s8), o10 = m(r12);
      E(W, e15.center, r12);
      const m7 = p(W, U(t9.bounds)), h2 = e15.radius * o10;
      t9.bounds[3] = Math.max(t9.bounds[3], m7 + h2);
    }
  }
  _invalidateBoundingVolume() {
    var _a;
    const t9 = (_a = this._bvWorldSpace) == null ? void 0 : _a.bounds;
    this._bvObjectSpace = this._bvWorldSpace = void 0, this._parentLayer && t9 && this._parentLayer.notifyObjectBBChanged(this, t9);
  }
  _emit(t9, e14) {
    this._parentLayer && this._parentLayer.events.emit(t9, e14);
  }
  get test() {
  }
};
var L = class {
  constructor() {
    this.min = r4(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE), this.max = r4(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
  }
  isEmpty() {
    return this.max[0] < this.min[0] && this.max[1] < this.min[1] && this.max[2] < this.min[2];
  }
};
var M3 = class extends L {
  constructor() {
    super(...arguments), this.bounds = E3();
  }
};
function T(t9, e14, s8) {
  const r12 = t9.bbMin, o10 = t9.bbMax;
  if (H(s8)) {
    const t10 = o2(C4, s8[12], s8[13], s8[14]);
    u2(B3, r12, t10), u2(U2, o10, t10);
    for (let i6 = 0; i6 < 3; ++i6) e14.min[i6] = Math.min(e14.min[i6], B3[i6]), e14.max[i6] = Math.max(e14.max[i6], U2[i6]);
  } else if (E(B3, r12, s8), H2(r12, o10)) for (let i6 = 0; i6 < 3; ++i6) e14.min[i6] = Math.min(e14.min[i6], B3[i6]), e14.max[i6] = Math.max(e14.max[i6], B3[i6]);
  else {
    E(U2, o10, s8);
    for (let t10 = 0; t10 < 3; ++t10) e14.min[t10] = Math.min(e14.min[t10], B3[t10], U2[t10]), e14.max[t10] = Math.max(e14.max[t10], B3[t10], U2[t10]);
    for (let t10 = 0; t10 < 3; ++t10) {
      s2(B3, r12), s2(U2, o10), B3[t10] = o10[t10], U2[t10] = r12[t10], E(B3, B3, s8), E(U2, U2, s8);
      for (let t11 = 0; t11 < 3; ++t11) e14.min[t11] = Math.min(e14.min[t11], B3[t11], U2[t11]), e14.max[t11] = Math.max(e14.max[t11], B3[t11], U2[t11]);
    }
  }
}
var C4 = n2();
var B3 = n2();
var U2 = n2();
var W = n2();
var E5;
!function(t9) {
  t9[t9.WorldSpace = 0] = "WorldSpace", t9[t9.ObjectSpace = 1] = "ObjectSpace";
}(E5 || (E5 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/RibbonLineTechnique.js
var A3 = class extends l2 {
  constructor(e14, t9) {
    super(e14, t9, new t3(F, () => import("./RibbonLine.glsl-KNU2VI33.js")), W2), this.primitiveType = t9.wireframe ? E2.LINES : E2.TRIANGLE_STRIP;
  }
  _makePipelineState(i6, r12) {
    const { oitPass: c6, output: T3, hasOccludees: h2, hasPolygonOffset: O3 } = i6, m7 = c6 === o4.NONE, E7 = c6 === o4.FrontFace;
    return B2({ blending: u3(T3) ? a(c6) : null, depthTest: { func: f3(c6) }, depthWrite: l(i6), drawBuffers: T3 === n5.Depth ? { buffers: [f.NONE] } : i3(c6, T3), colorWrite: g2, stencilWrite: h2 ? e10 : null, stencilTest: h2 ? r12 ? o5 : f4 : null, polygonOffset: m7 || E7 ? O3 ? _ : null : C2 });
  }
  initializePipeline(e14) {
    if (e14.occluder) {
      const i6 = e14.hasPolygonOffset ? _ : null;
      this._occluderPipelineTransparent = B2({ blending: c3, polygonOffset: i6, depthTest: s4, depthWrite: null, colorWrite: g2, stencilWrite: null, stencilTest: m4, drawBuffers: e14.output === n5.Depth ? { buffers: [f.NONE] } : null }), this._occluderPipelineOpaque = B2({ blending: c3, polygonOffset: i6, depthTest: s4, depthWrite: null, colorWrite: g2, stencilWrite: l3, stencilTest: P2, drawBuffers: e14.output === n5.Depth ? { buffers: [f.NONE] } : null }), this._occluderPipelineMaskWrite = B2({ blending: null, polygonOffset: i6, depthTest: i4, depthWrite: null, colorWrite: null, stencilWrite: e10, stencilTest: o5, drawBuffers: e14.output === n5.Depth ? { buffers: [f.NONE] } : null });
    }
    return this._occludeePipeline = this._makePipelineState(e14, true), this._makePipelineState(e14, false);
  }
  getPipeline(e14, t9) {
    if (e14) return this._occludeePipeline;
    switch (t9) {
      case A.TRANSPARENT_OCCLUDER_MATERIAL:
        return this._occluderPipelineTransparent ?? super.getPipeline();
      case A.OCCLUDER_MATERIAL:
        return this._occluderPipelineOpaque ?? super.getPipeline();
      default:
        return this._occluderPipelineMaskWrite ?? super.getPipeline();
    }
  }
};
var _ = { factor: 0, units: -4 };
var W2 = /* @__PURE__ */ new Map([[e4.POSITION, 0], [e4.PREVPOSITION, 1], [e4.NEXTPOSITION, 2], [e4.SUBDIVISIONFACTOR, 3], [e4.UV0, 4], [e4.COLOR, 5], [e4.COLORFEATUREATTRIBUTE, 5], [e4.SIZE, 6], [e4.SIZEFEATUREATTRIBUTE, 6], [e4.OPACITYFEATUREATTRIBUTE, 7], [e4.OBJECTANDLAYERIDCOLOR, 8]]);

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/RibbonLineMaterial.js
var Z;
!function(e14) {
  e14[e14.LEFT_JOIN_START = -2] = "LEFT_JOIN_START", e14[e14.LEFT_JOIN_END = -1] = "LEFT_JOIN_END", e14[e14.LEFT_CAP_START = -4] = "LEFT_CAP_START", e14[e14.LEFT_CAP_END = -5] = "LEFT_CAP_END", e14[e14.RIGHT_JOIN_START = 2] = "RIGHT_JOIN_START", e14[e14.RIGHT_JOIN_END = 1] = "RIGHT_JOIN_END", e14[e14.RIGHT_CAP_START = 4] = "RIGHT_CAP_START", e14[e14.RIGHT_CAP_END = 5] = "RIGHT_CAP_END";
}(Z || (Z = {}));
var W3 = class extends n6 {
  constructor(e14) {
    super(e14, q), this._configuration = new p5(), this.vertexAttributeLocations = W2, this.produces = /* @__PURE__ */ new Map([[A.OPAQUE_MATERIAL, (e15) => i2(e15) || u3(e15) && this.parameters.renderOccluded === p3.OccludeAndTransparentStencil], [A.OPAQUE_MATERIAL_WITHOUT_NORMALS, (e15) => S(e15)], [A.OCCLUDER_MATERIAL, (e15) => C(e15) && this.parameters.renderOccluded === p3.OccludeAndTransparentStencil], [A.TRANSPARENT_OCCLUDER_MATERIAL, (e15) => C(e15) && this.parameters.renderOccluded === p3.OccludeAndTransparentStencil], [A.TRANSPARENT_MATERIAL, (e15) => u3(e15) && this.parameters.writeDepth && this.parameters.renderOccluded !== p3.OccludeAndTransparentStencil], [A.TRANSPARENT_MATERIAL_WITHOUT_DEPTH, (e15) => u3(e15) && !this.parameters.writeDepth && this.parameters.renderOccluded !== p3.OccludeAndTransparentStencil], [A.DRAPED_MATERIAL, (e15) => e5(e15)]]);
  }
  getConfiguration(e14, t9) {
    this._configuration.output = e14, this._configuration.oitPass = t9.oitPass, this._configuration.draped = t9.slot === A.DRAPED_MATERIAL;
    const r12 = null != this.parameters.stipplePattern && e14 !== n5.Highlight;
    return this._configuration.stippleEnabled = r12, this._configuration.stippleOffColorEnabled = r12 && null != this.parameters.stippleOffColor, this._configuration.stipplePreferContinuous = r12 && this.parameters.stipplePreferContinuous, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.roundJoins = "round" === this.parameters.join, this._configuration.capType = this.parameters.cap, this._configuration.applyMarkerOffset = null != this.parameters.markerParameters && $(this.parameters.markerParameters), this._configuration.hasPolygonOffset = this.parameters.hasPolygonOffset, this._configuration.writeDepth = this.parameters.writeDepth, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.vvOpacity = !!this.parameters.vvOpacity, this._configuration.innerColorEnabled = this.parameters.innerWidth > 0 && null != this.parameters.innerColor, this._configuration.falloffEnabled = this.parameters.falloff > 0, this._configuration.hasOccludees = t9.hasOccludees, this._configuration.occluder = this.parameters.renderOccluded === p3.OccludeAndTransparentStencil, this._configuration.terrainDepthTest = t9.terrainDepthTest && u3(e14), this._configuration.cullAboveTerrain = t9.cullAboveTerrain, this._configuration.wireframe = this.parameters.wireframe, this._configuration;
  }
  get visible() {
    var _a;
    return this.parameters.color[3] >= o6 || null != this.parameters.stipplePattern && (((_a = this.parameters.stippleOffColor) == null ? void 0 : _a[3]) ?? 0) > o6;
  }
  intersectDraped({ attributes: e14, screenToWorldRatio: r12 }, i6, s8, a6, n9, o10) {
    if (!s8.options.selectionMode) return;
    const l6 = e14.get(e4.SIZE);
    let c6 = this.parameters.width;
    if (this.parameters.vvSize) {
      const r13 = e14.get(e4.SIZEFEATUREATTRIBUTE).data[0];
      c6 *= r3(this.parameters.vvSize.offset[0] + r13 * this.parameters.vvSize.factor[0], this.parameters.vvSize.minSize[0], this.parameters.vvSize.maxSize[0]);
    } else l6 && (c6 *= l6.data[0]);
    const p8 = a6[0], h2 = a6[1], f7 = (c6 / 2 + 4) * r12;
    let m7 = Number.MAX_VALUE, u6 = 0;
    const T3 = e14.get(e4.POSITION).data, d3 = K(this.parameters, e14) ? T3.length - 2 : T3.length - 5;
    for (let _3 = 0; _3 < d3; _3 += 3) {
      const e15 = T3[_3], r13 = T3[_3 + 1], i7 = (_3 + 3) % T3.length, s9 = p8 - e15, a7 = h2 - r13, n10 = T3[i7] - e15, o11 = T3[i7 + 1] - r13, l7 = r3((n10 * s9 + o11 * a7) / (n10 * n10 + o11 * o11), 0, 1), c7 = n10 * l7 - s9, f8 = o11 * l7 - a7, d4 = c7 * c7 + f8 * f8;
      d4 < m7 && (m7 = d4, u6 = _3 / 3);
    }
    m7 < f7 * f7 && n9(o10.dist, o10.normal, u6, false);
  }
  intersect(r12, f7, m7, u6, d3, R2) {
    if (!m7.options.selectionMode || !r12.visible) return;
    if (!m3(f7)) return void n.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");
    const S2 = r12.attributes, v3 = S2.get(e4.POSITION).data;
    let P3 = this.parameters.width;
    if (this.parameters.vvSize) {
      const e14 = S2.get(e4.SIZEFEATUREATTRIBUTE).data[0];
      P3 *= r3(this.parameters.vvSize.offset[0] + e14 * this.parameters.vvSize.factor[0], this.parameters.vvSize.minSize[0], this.parameters.vvSize.maxSize[0]);
    } else S2.has(e4.SIZE) && (P3 *= S2.get(e4.SIZE).data[0]);
    const N2 = m7.camera, L2 = se;
    r7(L2, m7.point);
    const b4 = P3 * N2.pixelRatio / 2 + 4 * N2.pixelRatio;
    o2(ue[0], L2[0] - b4, L2[1] + b4, 0), o2(ue[1], L2[0] + b4, L2[1] + b4, 0), o2(ue[2], L2[0] + b4, L2[1] - b4, 0), o2(ue[3], L2[0] - b4, L2[1] - b4, 0);
    for (let e14 = 0; e14 < 4; e14++) if (!N2.unprojectFromRenderScreen(ue[e14], Te[e14])) return;
    p2(N2.eye, Te[0], Te[1], de), p2(N2.eye, Te[1], Te[2], _e), p2(N2.eye, Te[2], Te[3], Ee), p2(N2.eye, Te[3], Te[0], Ae);
    let C6 = Number.MAX_VALUE, U3 = 0;
    const y3 = K(this.parameters, S2) ? v3.length - 2 : v3.length - 5;
    for (let e14 = 0; e14 < y3; e14 += 3) {
      ee[0] = v3[e14] + f7[12], ee[1] = v3[e14 + 1] + f7[13], ee[2] = v3[e14 + 2] + f7[14];
      const t9 = (e14 + 3) % v3.length;
      if (te[0] = v3[t9] + f7[12], te[1] = v3[t9 + 1] + f7[13], te[2] = v3[t9 + 2] + f7[14], V(de, ee) < 0 && V(de, te) < 0 || V(_e, ee) < 0 && V(_e, te) < 0 || V(Ee, ee) < 0 && V(Ee, te) < 0 || V(Ae, ee) < 0 && V(Ae, te) < 0) continue;
      if (N2.projectToRenderScreen(ee, ae), N2.projectToRenderScreen(te, ne), ae[2] < 0 && ne[2] > 0) {
        c2(re, ee, te);
        const e15 = N2.frustum, t10 = -V(e15[j.NEAR], ee) / P(re, O(e15[j.NEAR]));
        g(re, re, t10), u2(ee, ee, re), N2.projectToRenderScreen(ee, ae);
      } else if (ae[2] > 0 && ne[2] < 0) {
        c2(re, te, ee);
        const e15 = N2.frustum, t10 = -V(e15[j.NEAR], te) / P(re, O(e15[j.NEAR]));
        g(re, re, t10), u2(te, te, re), N2.projectToRenderScreen(te, ne);
      } else if (ae[2] < 0 && ne[2] < 0) continue;
      ae[2] = 0, ne[2] = 0;
      const r13 = M2(b(ae, ne, ce), L2);
      r13 < C6 && (C6 = r13, s2(oe, ee), s2(le, te), U3 = e14 / 3);
    }
    const D2 = m7.rayBegin, j3 = m7.rayEnd;
    if (C6 < b4 * b4) {
      let e14 = Number.MAX_VALUE;
      if (B(b(oe, le, ce), b(D2, j3, pe), ie)) {
        c2(ie, ie, D2);
        const t9 = r6(ie);
        g(ie, ie, 1 / t9), e14 = t9 / p(D2, j3);
      }
      R2(e14, ie, U3, false);
    }
  }
  get _layout() {
    const e14 = H3().vec3f(e4.POSITION).vec3f(e4.PREVPOSITION).vec3f(e4.NEXTPOSITION).f32(e4.SUBDIVISIONFACTOR).vec2f(e4.UV0);
    return this.parameters.vvSize ? e14.f32(e4.SIZEFEATUREATTRIBUTE) : e14.f32(e4.SIZE), this.parameters.vvColor ? e14.f32(e4.COLORFEATUREATTRIBUTE) : e14.vec4f(e4.COLOR), this.parameters.vvOpacity && e14.f32(e4.OPACITYFEATUREATTRIBUTE), e6() && e14.vec4u8(e4.OBJECTANDLAYERIDCOLOR), e14;
  }
  createBufferWriter() {
    return new X(this._layout, this.parameters);
  }
  createGLMaterial(e14) {
    return new Y(e14);
  }
  validateParameters(e14) {
    "miter" !== e14.join && (e14.miterLimit = 0), null != e14.markerParameters && (e14.markerScale = e14.markerParameters.width / e14.width);
  }
};
var Y = class extends e9 {
  constructor() {
    super(...arguments), this._stipplePattern = null;
  }
  dispose() {
    super.dispose(), this._stippleTextures.release(this._stipplePattern), this._stipplePattern = null;
  }
  beginSlot(e14) {
    const t9 = this._material.parameters.stipplePattern;
    return this._stipplePattern !== t9 && (this._material.setParameters({ stippleTexture: this._stippleTextures.swap(t9, this._stipplePattern) }), this._stipplePattern = t9), this.getTechnique(A3, e14);
  }
};
var q = class extends t4 {
  constructor() {
    super(...arguments), this.width = 0, this.color = N, this.join = "miter", this.cap = s5.BUTT, this.miterLimit = 5, this.writeDepth = true, this.hasPolygonOffset = false, this.stippleTexture = null, this.stipplePreferContinuous = true, this.markerParameters = null, this.markerScale = 1, this.hasSlicePlane = false, this.vvFastUpdate = false, this.isClosed = false, this.falloff = 0, this.innerWidth = 0, this.wireframe = false;
  }
  get transparent() {
    var _a;
    return this.color[3] < 1 || null != this.stipplePattern && (((_a = this.stippleOffColor) == null ? void 0 : _a[3]) ?? 0) < 1;
  }
};
var X = class {
  constructor(e14, t9) {
    this.vertexBufferLayout = e14, this._parameters = t9, this.numJoinSubdivisions = 0;
    const r12 = t9.stipplePattern ? 1 : 0;
    switch (this._parameters.join) {
      case "miter":
      case "bevel":
        this.numJoinSubdivisions = r12;
        break;
      case "round":
        this.numJoinSubdivisions = j2 + r12;
    }
  }
  _isClosed(e14) {
    return K(this._parameters, e14);
  }
  allocate(e14) {
    return this.vertexBufferLayout.createBuffer(e14);
  }
  elementCount(e14) {
    const t9 = 2, r12 = e14.get(e4.POSITION).indices.length / 2 + 1, i6 = this._isClosed(e14);
    let s8 = i6 ? 2 : 2 * t9;
    return s8 += ((i6 ? r12 : r12 - 1) - (i6 ? 0 : 1)) * (2 * this.numJoinSubdivisions + 4), s8 += 2, this._parameters.wireframe && (s8 = 2 + 4 * (s8 - 2)), s8;
  }
  write(e14, t9, r12, i6, a6, n9) {
    var _a, _b, _c;
    const o10 = he, l6 = fe, p8 = me, m7 = r12.get(e4.POSITION), u6 = m7.indices, T3 = m7.data.length / 3, d3 = (_a = r12.get(e4.DISTANCETOSTART)) == null ? void 0 : _a.data;
    u6 && u6.length !== 2 * (T3 - 1) && console.warn("RibbonLineMaterial does not support indices");
    const _3 = ((_b = r12.get(e4.SIZEFEATUREATTRIBUTE)) == null ? void 0 : _b.data[0]) ?? ((_c = r12.get(e4.SIZE)) == null ? void 0 : _c.data[0]) ?? 1;
    let E7 = [1, 1, 1, 1], A5 = 0;
    const R2 = this.vertexBufferLayout.fields.has(e4.COLORFEATUREATTRIBUTE);
    R2 ? A5 = r12.get(e4.COLORFEATUREATTRIBUTE).data[0] : r12.has(e4.COLOR) && (E7 = r12.get(e4.COLOR).data);
    const O3 = this.vertexBufferLayout.fields.has(e4.OPACITYFEATUREATTRIBUTE), g4 = O3 ? r12.get(e4.OPACITYFEATUREATTRIBUTE).data[0] : 0, I2 = new Float32Array(a6.buffer), S2 = e6() ? new Uint8Array(a6.buffer) : null, v3 = this.vertexBufferLayout.stride / 4;
    let P3 = n9 * v3;
    const N2 = P3;
    let L2 = 0;
    const b4 = d3 ? (e15, t10, r13) => L2 = d3[r13] : (e15, t10, r13) => L2 += p(e15, t10), C6 = (e15, t10, r13, s8, a7, n10, o11) => {
      if (I2[P3++] = t10[0], I2[P3++] = t10[1], I2[P3++] = t10[2], I2[P3++] = e15[0], I2[P3++] = e15[1], I2[P3++] = e15[2], I2[P3++] = r13[0], I2[P3++] = r13[1], I2[P3++] = r13[2], I2[P3++] = s8, I2[P3++] = o11, I2[P3++] = a7, I2[P3++] = _3, R2) I2[P3++] = A5;
      else {
        const e16 = Math.min(4 * n10, E7.length - 4);
        I2[P3++] = E7[e16], I2[P3++] = E7[e16 + 1], I2[P3++] = E7[e16 + 2], I2[P3++] = E7[e16 + 3];
      }
      O3 && (I2[P3++] = g4), e6() && (i6 && (S2[4 * P3] = i6[0], S2[4 * P3 + 1] = i6[1], S2[4 * P3 + 2] = i6[2], S2[4 * P3 + 3] = i6[3]), P3++);
    };
    P3 += v3, o2(l6, m7.data[0], m7.data[1], m7.data[2]), e14 && E(l6, l6, e14);
    const y3 = this._isClosed(r12);
    if (y3) {
      const t10 = m7.data.length - 3;
      o2(o10, m7.data[t10], m7.data[t10 + 1], m7.data[t10 + 2]), e14 && E(o10, o10, e14);
    } else o2(p8, m7.data[3], m7.data[4], m7.data[5]), e14 && E(p8, p8, e14), C6(l6, l6, p8, 1, Z.LEFT_CAP_START, 0, 0), C6(l6, l6, p8, 1, Z.RIGHT_CAP_START, 0, 0), s2(o10, l6), s2(l6, p8);
    const D2 = y3 ? 0 : 1, j3 = y3 ? T3 : T3 - 1;
    for (let h2 = D2; h2 < j3; h2++) {
      const t10 = (h2 + 1) % T3 * 3;
      o2(p8, m7.data[t10], m7.data[t10 + 1], m7.data[t10 + 2]), e14 && E(p8, p8, e14), b4(o10, l6, h2), C6(o10, l6, p8, 0, Z.LEFT_JOIN_END, h2, L2), C6(o10, l6, p8, 0, Z.RIGHT_JOIN_END, h2, L2);
      const r13 = this.numJoinSubdivisions;
      for (let e15 = 0; e15 < r13; ++e15) {
        const t11 = (e15 + 1) / (r13 + 1);
        C6(o10, l6, p8, t11, Z.LEFT_JOIN_END, h2, L2), C6(o10, l6, p8, t11, Z.RIGHT_JOIN_END, h2, L2);
      }
      C6(o10, l6, p8, 1, Z.LEFT_JOIN_START, h2, L2), C6(o10, l6, p8, 1, Z.RIGHT_JOIN_START, h2, L2), s2(o10, l6), s2(l6, p8);
    }
    y3 ? (o2(p8, m7.data[3], m7.data[4], m7.data[5]), e14 && E(p8, p8, e14), L2 = b4(o10, l6, j3), C6(o10, l6, p8, 0, Z.LEFT_JOIN_END, D2, L2), C6(o10, l6, p8, 0, Z.RIGHT_JOIN_END, D2, L2)) : (L2 = b4(o10, l6, j3), C6(o10, l6, l6, 0, Z.LEFT_CAP_END, j3, L2), C6(o10, l6, l6, 0, Z.RIGHT_CAP_END, j3, L2)), Q(I2, N2 + v3, I2, N2, v3);
    P3 = Q(I2, P3 - v3, I2, P3, v3), this._parameters.wireframe && this._addWireframeVertices(a6, N2, P3, v3);
  }
  _addWireframeVertices(e14, t9, r12, i6) {
    const s8 = new Float32Array(e14.buffer, r12 * Float32Array.BYTES_PER_ELEMENT), a6 = new Float32Array(e14.buffer, t9 * Float32Array.BYTES_PER_ELEMENT, r12 - t9);
    let n9 = 0;
    const o10 = (e15) => n9 = Q(a6, e15, s8, n9, i6);
    for (let l6 = 0; l6 < a6.length - 1; l6 += 2 * i6) o10(l6), o10(l6 + 2 * i6), o10(l6 + 1 * i6), o10(l6 + 2 * i6), o10(l6 + 1 * i6), o10(l6 + 3 * i6);
  }
};
function Q(e14, t9, r12, i6, s8) {
  for (let a6 = 0; a6 < s8; a6++) r12[i6++] = e14[t9++];
  return i6;
}
function K(e14, t9) {
  if (!e14.isClosed) return false;
  return t9.get(e4.POSITION).indices.length > 2;
}
function $(e14) {
  return e14.anchor === p4.Tip && e14.hideOnShortSegments && "begin-end" === e14.placement && e14.worldSpace;
}
var ee = n2();
var te = n2();
var re = n2();
var ie = n2();
var se = n2();
var ae = y();
var ne = y();
var oe = n2();
var le = n2();
var ce = v();
var pe = v();
var he = n2();
var fe = n2();
var me = n2();
var ue = [y(), y(), y(), y()];
var Te = [n2(), n2(), n2(), n2()];
var de = M();
var _e = M();
var Ee = M();
var Ae = M();

// node_modules/@arcgis/core/views/3d/support/ElevationProvider.js
var r11 = class {
  constructor(e14, r12 = null, t9 = 0) {
    this.array = e14, this.spatialReference = r12, this.offset = t9;
  }
};
function t7(e14) {
  return "array" in e14;
}
function a3(r12, a6, n9 = "ground") {
  if (t5(a6)) return r12.getElevation(a6.x, a6.y, a6.z || 0, a6.spatialReference, n9);
  if (t7(a6)) {
    let e14 = a6.offset;
    return r12.getElevation(a6.array[e14++], a6.array[e14++], a6.array[e14] || 0, a6.spatialReference ?? r12.spatialReference, n9);
  }
  return r12.getElevation(a6[0], a6[1], a6[2] || 0, r12.spatialReference, n9);
}

// node_modules/@arcgis/core/views/3d/layers/graphics/elevationAlignmentUtils.js
function u5(e14, t9, n9, o10, i6, a6, s8, l6, u6, c6, f7) {
  const m7 = x[f7.mode];
  let d3, g4, p8 = 0;
  if (o(e14, t9, n9, o10, u6.spatialReference, i6, l6)) return (m7 == null ? void 0 : m7.requiresAlignment(f7)) ? (p8 = m7.applyElevationAlignmentBuffer(o10, i6, a6, s8, l6, u6, c6, f7), d3 = a6, g4 = s8) : (d3 = o10, g4 = i6), o(d3, u6.spatialReference, g4, a6, c6.spatialReference, s8, l6) ? p8 : void 0;
}
function c4(e14, t9, n9, o10, r12) {
  const l6 = (t5(e14) ? e14.z : t7(e14) ? e14.array[e14.offset + 2] : e14[2]) || 0;
  switch (n9.mode) {
    case "on-the-ground": {
      const n10 = a3(t9, e14, "ground") ?? 0;
      return r12.verticalDistanceToGround = 0, r12.sampledElevation = n10, void (r12.z = n10);
    }
    case "relative-to-ground": {
      const i6 = a3(t9, e14, "ground") ?? 0, a6 = n9.geometryZWithOffset(l6, o10);
      return r12.verticalDistanceToGround = a6, r12.sampledElevation = i6, void (r12.z = a6 + i6);
    }
    case "relative-to-scene": {
      const i6 = a3(t9, e14, "scene") ?? 0, a6 = n9.geometryZWithOffset(l6, o10);
      return r12.verticalDistanceToGround = a6, r12.sampledElevation = i6, void (r12.z = a6 + i6);
    }
    case "absolute-height": {
      const i6 = n9.geometryZWithOffset(l6, o10), a6 = a3(t9, e14, "ground") ?? 0;
      return r12.verticalDistanceToGround = i6 - a6, r12.sampledElevation = a6, void (r12.z = i6);
    }
    default:
      return void (r12.z = 0);
  }
}
function f5(e14, t9, n9, o10) {
  return c4(e14, t9, n9, o10, D), D.z;
}
function m5(e14, t9, n9) {
  return "on-the-ground" === t9 && "on-the-ground" === n9 ? e14.staysOnTheGround : t9 === n9 || "on-the-ground" !== t9 && "on-the-ground" !== n9 ? null == t9 || null == n9 ? e14.definedChanged : b3.UPDATE : e14.onTheGroundChanged;
}
function d(e14) {
  return "relative-to-ground" === e14 || "relative-to-scene" === e14;
}
function g3(e14) {
  return "absolute-height" !== e14;
}
function p6(t9, n9, r12, i6, a6) {
  c4(n9, r12, a6, i6, D), E6(t9, D.verticalDistanceToGround);
  const s8 = D.sampledElevation, l6 = n3(C5, t9.transformation);
  O2[0] = n9.x, O2[1] = n9.y, O2[2] = D.z;
  return m2(n9.spatialReference, O2, l6, i6.spatialReference) ? t9.transformation = l6 : console.warn("Could not locate symbol object properly, it might be misplaced"), s8;
}
function E6(e14, t9) {
  for (let n9 = 0; n9 < e14.geometries.length; ++n9) {
    const o10 = e14.geometries[n9].getMutableAttribute(e4.CENTEROFFSETANDDISTANCE);
    o10 && o10.data[3] !== t9 && (o10.data[3] = t9, e14.geometryVertexAttributeUpdated(e14.geometries[n9], e4.CENTEROFFSETANDDISTANCE));
  }
}
function v2(e14, t9, n9, o10, r12, i6) {
  let a6 = 0;
  const s8 = i6.spatialReference;
  t9 *= 3, o10 *= 3;
  for (let l6 = 0; l6 < r12; ++l6) {
    const r13 = e14[t9], l7 = e14[t9 + 1], u6 = e14[t9 + 2], c6 = i6.getElevation(r13, l7, u6, s8, "ground") ?? 0;
    a6 += c6, n9[o10] = r13, n9[o10 + 1] = l7, n9[o10 + 2] = c6, t9 += 3, o10 += 3;
  }
  return a6 / r12;
}
function h(e14, t9, n9, o10, r12, i6, a6, s8) {
  let l6 = 0;
  const u6 = s8.calculateOffsetRenderUnits(a6), c6 = s8.featureExpressionInfoContext, f7 = i6.spatialReference;
  t9 *= 3, o10 *= 3;
  for (let m7 = 0; m7 < r12; ++m7) {
    const r13 = e14[t9], a7 = e14[t9 + 1], s9 = e14[t9 + 2], m8 = i6.getElevation(r13, a7, s9, f7, "ground") ?? 0;
    l6 += m8, n9[o10] = r13, n9[o10 + 1] = a7, n9[o10 + 2] = null == c6 ? s9 + m8 + u6 : m8 + u6, t9 += 3, o10 += 3;
  }
  return l6 / r12;
}
function A4(e14, t9, n9, o10, r12, i6, a6, s8) {
  let l6 = 0;
  const u6 = s8.calculateOffsetRenderUnits(a6), c6 = s8.featureExpressionInfoContext, f7 = i6.spatialReference;
  t9 *= 3, o10 *= 3;
  for (let m7 = 0; m7 < r12; ++m7) {
    const r13 = e14[t9], a7 = e14[t9 + 1], s9 = e14[t9 + 2], m8 = i6.getElevation(r13, a7, s9, f7, "scene") ?? 0;
    l6 += m8, n9[o10] = r13, n9[o10 + 1] = a7, n9[o10 + 2] = null == c6 ? s9 + m8 + u6 : m8 + u6, t9 += 3, o10 += 3;
  }
  return l6 / r12;
}
function T2(e14) {
  const t9 = e14.meterUnitOffset, n9 = e14.featureExpressionInfoContext;
  return 0 !== t9 || null != n9;
}
function y2(e14, t9, n9, o10, r12, i6, a6, s8) {
  const l6 = s8.calculateOffsetRenderUnits(a6), u6 = s8.featureExpressionInfoContext;
  t9 *= 3, o10 *= 3;
  for (let c6 = 0; c6 < r12; ++c6) {
    const r13 = e14[t9], i7 = e14[t9 + 1], a7 = e14[t9 + 2];
    n9[o10] = r13, n9[o10 + 1] = i7, n9[o10 + 2] = null == u6 ? a7 + l6 : l6, t9 += 3, o10 += 3;
  }
  return 0;
}
var R = class {
  constructor() {
    this.verticalDistanceToGround = 0, this.sampledElevation = 0, this.z = 0;
  }
};
var b3;
!function(e14) {
  e14[e14.NONE = 0] = "NONE", e14[e14.UPDATE = 1] = "UPDATE", e14[e14.RECREATE = 2] = "RECREATE";
}(b3 || (b3 = {}));
var x = { "absolute-height": { applyElevationAlignmentBuffer: y2, requiresAlignment: T2 }, "on-the-ground": { applyElevationAlignmentBuffer: v2, requiresAlignment: () => true }, "relative-to-ground": { applyElevationAlignmentBuffer: h, requiresAlignment: () => true }, "relative-to-scene": { applyElevationAlignmentBuffer: A4, requiresAlignment: () => true } };
var C5 = e3();
var D = new R();
var O2 = n2();

// node_modules/@arcgis/core/views/3d/layers/graphics/featureExpressionInfoUtils.js
var c5 = () => n.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");
function o8(e14) {
  return { cachedResult: e14.cachedResult, arcade: e14.arcade ? { func: e14.arcade.func, context: e14.arcade.modules.arcadeUtils.createExecContext(null, { sr: e14.arcade.context.spatialReference }), modules: e14.arcade.modules } : null };
}
async function a4(e14, r12, c6, o10) {
  const u6 = e14 == null ? void 0 : e14.expression;
  if ("string" != typeof u6) return null;
  const a6 = m6(u6);
  if (null != a6) return { cachedResult: a6 };
  const s8 = await o7();
  s(c6);
  const l6 = s8.arcadeUtils, i6 = l6.createSyntaxTree(u6);
  return l6.dependsOnView(i6) ? (null != o10 && o10.error("Expressions containing '$view' are not supported on ElevationInfo"), { cachedResult: 0 }) : { arcade: { func: l6.createFunction(i6), context: l6.createExecContext(null, { sr: r12 }), modules: s8 } };
}
function s6(e14, t9, r12) {
  return e14.arcadeUtils.createFeature(t9.attributes, t9.geometry, r12);
}
function l4(e14, t9) {
  if (null != e14 && !p7(e14)) {
    if (!t9 || !e14.arcade) return void c5().errorOncePerTick("Arcade support required but not provided");
    const n9 = t9;
    n9._geometry && (n9._geometry = u4(n9._geometry)), e14.arcade.modules.arcadeUtils.updateExecContext(e14.arcade.context, t9);
  }
}
function i5(e14) {
  if (null != e14) {
    if (p7(e14)) return e14.cachedResult;
    const t9 = e14.arcade;
    let r12 = t9 == null ? void 0 : t9.modules.arcadeUtils.executeFunction(t9.func, t9.context);
    return "number" != typeof r12 && (e14.cachedResult = 0, r12 = 0), r12;
  }
  return 0;
}
function d2(e14, t9 = false) {
  let r12 = e14 == null ? void 0 : e14.featureExpressionInfo;
  const n9 = r12 == null ? void 0 : r12.expression;
  return t9 || "0" === n9 || (r12 = null), r12 ?? null;
}
var f6 = { cachedResult: 0 };
function p7(e14) {
  return null != e14.cachedResult;
}
function m6(e14) {
  return "0" === e14 ? 0 : null;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/ElevationContext.js
var o9 = class _o {
  constructor() {
    this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._unit = "meters", this._metersPerElevationInfoUnit = 1, this._featureExpressionInfoContext = null, this.centerPointInElevationSR = null, this.mode = null;
  }
  get featureExpressionInfoContext() {
    return this._featureExpressionInfoContext;
  }
  get meterUnitOffset() {
    return this._meterUnitOffset;
  }
  get unit() {
    return this._unit;
  }
  set unit(e14) {
    this._unit = e14, this._metersPerElevationInfoUnit = n4(e14);
  }
  get requiresSampledElevationInfo() {
    return "absolute-height" !== this.mode;
  }
  reset() {
    this.mode = null, this._meterUnitOffset = 0, this._renderUnitOffset = 0, this._featureExpressionInfoContext = null, this.unit = "meters";
  }
  set offsetMeters(t9) {
    this._meterUnitOffset = t9, this._renderUnitOffset = 0;
  }
  set offsetElevationInfoUnits(t9) {
    this._meterUnitOffset = t9 * this._metersPerElevationInfoUnit, this._renderUnitOffset = 0;
  }
  addOffsetRenderUnits(t9) {
    this._renderUnitOffset += t9;
  }
  geometryZWithOffset(t9, e14) {
    const n9 = this.calculateOffsetRenderUnits(e14);
    return null != this.featureExpressionInfoContext ? n9 : t9 + n9;
  }
  calculateOffsetRenderUnits(t9) {
    let e14 = this._meterUnitOffset;
    const s8 = this.featureExpressionInfoContext;
    return null != s8 && (e14 += i5(s8) * this._metersPerElevationInfoUnit), e14 / t9.unitInMeters + this._renderUnitOffset;
  }
  setFromElevationInfo(t9) {
    this.mode = t9.mode, this.unit = e2(t9.unit) ? t9.unit : "meters", this.offsetElevationInfoUnits = t9.offset ?? 0;
  }
  updateFeatureExpressionInfoContext(t9, e14, n9) {
    if (null == t9) return void (this._featureExpressionInfoContext = null);
    const o10 = t9 == null ? void 0 : t9.arcade;
    o10 && null != e14 && null != n9 ? (this._featureExpressionInfoContext = o8(t9), l4(this._featureExpressionInfoContext, s6(o10.modules, e14, n9))) : this._featureExpressionInfoContext = t9;
  }
  static fromElevationInfo(t9) {
    const e14 = new _o();
    return null != t9 && e14.setFromElevationInfo(t9), e14;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DirtyEvents.js
var e12 = ["layerObjectAdded", "layerObjectRemoved", "layerObjectsAdded", "layerObjectsRemoved", "transformationChanged", "shaderTransformationChanged", "visibilityChanged", "occlusionChanged", "highlightChanged", "geometryAdded", "geometryRemoved", "attributesChanged"];

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/WebGLLayer.js
var a5 = class extends r8 {
  constructor(s8, r12, d3 = "") {
    super(), this.stage = s8, this.apiLayerUid = d3, this.type = e7.Layer, this.events = new i(), this.visible = true, this.sliceable = false, this._objectsAdded = new r2(), this._handles = new r(), this._objects = new r2(), this._pickable = true, this.visible = (r12 == null ? void 0 : r12.visible) ?? true, this._pickable = (r12 == null ? void 0 : r12.pickable) ?? true, this.updatePolicy = (r12 == null ? void 0 : r12.updatePolicy) ?? C3.ASYNC, this._disableOctree = (r12 == null ? void 0 : r12.disableOctree) ?? false, s8.add(this);
    for (const e14 of e12) this._handles.add(this.events.on(e14, (t9) => s8.handleEvent(e14, t9)));
  }
  destroy() {
    this._handles.size && (this._handles.destroy(), this.stage.remove(this), this.invalidateSpatialQueryAccelerator());
  }
  get objects() {
    return this._objects;
  }
  set pickable(e14) {
    this._pickable = e14;
  }
  get pickable() {
    return this._pickable && this.visible;
  }
  add(e14) {
    this._objects.push(e14), e14.parentLayer = this, this.events.emit("layerObjectAdded", { layer: this, object: e14 }), null != this._octree && this._objectsAdded.push(e14);
  }
  remove(e14) {
    this._objects.removeUnordered(e14) && (e14.parentLayer = null, this.events.emit("layerObjectRemoved", { layer: this, object: e14 }), null != this._octree && (this._objectsAdded.removeUnordered(e14) || this._octree.remove([e14])));
  }
  addMany(e14) {
    this._objects.pushArray(e14);
    for (const t9 of e14) t9.parentLayer = this;
    this.events.emit("layerObjectsAdded", { layer: this, objects: e14 }), null != this._octree && this._objectsAdded.pushArray(e14);
  }
  removeMany(e14) {
    const t9 = new Array();
    if (this._objects.removeUnorderedMany(e14, e14.length, t9), 0 !== t9.length) {
      for (const e15 of t9) e15.parentLayer = null;
      if (this.events.emit("layerObjectsRemoved", { layer: this, objects: t9 }), null != this._octree) {
        for (let e15 = 0; e15 < t9.length; ) this._objectsAdded.removeUnordered(t9[e15]) ? (t9[e15] = t9[t9.length - 1], t9.length -= 1) : ++e15;
        this._octree.remove(t9);
      }
    }
  }
  sync() {
    this.updatePolicy !== C3.SYNC && this.stage.syncLayer(this.id);
  }
  notifyObjectBBChanged(e14, t9) {
    null == this._octree || this._objectsAdded.includes(e14) || this._octree.update(e14, t9);
  }
  getSpatialQueryAccelerator() {
    return null == this._octree && this._objects.length > 50 && !this._disableOctree ? (this._octree = new b2((e14) => e14.boundingVolumeWorldSpace.bounds), this._octree.add(this._objects.data, this._objects.length)) : null != this._octree && this._objectsAdded.length > 0 && (this._octree.add(this._objectsAdded.data, this._objectsAdded.length), this._objectsAdded.clear()), this._octree;
  }
  invalidateSpatialQueryAccelerator() {
    this._octree = u(this._octree), this._objectsAdded.clear();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/LocalOriginFactory.js
var s7 = class {
  constructor(r12, s8) {
    this.vec3 = r12, this.id = s8;
  }
};
function t8(t9, o10, c6, e14) {
  return new s7(r4(t9, o10, c6), e14);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/testUtils.js
var n8 = { stableRendering: false };
var e13 = { rootOrigin: null };

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GridLocalOriginFactory.js
var _2 = class {
  constructor(i6) {
    this._originSR = i6, this._rootOriginId = "root/" + e(), this._origins = /* @__PURE__ */ new Map(), this._objects = /* @__PURE__ */ new Map(), this._gridSize = 5e5;
  }
  getOrigin(t9) {
    const r12 = this._origins.get(this._rootOriginId);
    if (null == r12) {
      const i6 = e13.rootOrigin;
      if (null != i6) return this._origins.set(this._rootOriginId, t8(i6[0], i6[1], i6[2], this._rootOriginId)), this.getOrigin(t9);
      const r13 = t8(t9[0] + Math.random() - 0.5, t9[1] + Math.random() - 0.5, t9[2] + Math.random() - 0.5, this._rootOriginId);
      return this._origins.set(this._rootOriginId, r13), r13;
    }
    const o10 = this._gridSize, s8 = Math.round(t9[0] / o10), e14 = Math.round(t9[1] / o10), n9 = Math.round(t9[2] / o10), a6 = `${s8}/${e14}/${n9}`;
    let m7 = this._origins.get(a6);
    const g4 = 0.5 * o10;
    if (c2(l5, t9, r12.vec3), l5[0] = Math.abs(l5[0]), l5[1] = Math.abs(l5[1]), l5[2] = Math.abs(l5[2]), l5[0] < g4 && l5[1] < g4 && l5[2] < g4) {
      if (m7) {
        const r13 = Math.max(...l5);
        c2(l5, t9, m7.vec3), l5[0] = Math.abs(l5[0]), l5[1] = Math.abs(l5[1]), l5[2] = Math.abs(l5[2]);
        if (Math.max(...l5) < r13) return m7;
      }
      return r12;
    }
    return m7 || (m7 = t8(s8 * o10, e14 * o10, n9 * o10, a6), this._origins.set(a6, m7)), m7;
  }
  _drawOriginBox(t9, i6 = r5(1, 1, 0, 1)) {
    const r12 = window.view, h2 = r12._stage, c6 = i6.toString();
    if (!this._objects.has(c6)) {
      this._material = new W3({ width: 2, color: i6 }), h2.add(this._material);
      const t10 = new a5(h2, { pickable: false }), r13 = new A2({ castShadow: false });
      h2.add(r13), t10.add(r13), this._objects.set(c6, r13);
    }
    const _3 = this._objects.get(c6), l6 = [0, 1, 5, 4, 0, 2, 1, 7, 6, 2, 0, 1, 3, 7, 5, 4, 6, 2, 0], p8 = l6.length, j3 = new Array(3 * p8), b4 = new Array(), u6 = 0.5 * this._gridSize;
    for (let o10 = 0; o10 < p8; o10++) j3[3 * o10] = t9[0] + (1 & l6[o10] ? u6 : -u6), j3[3 * o10 + 1] = t9[1] + (2 & l6[o10] ? u6 : -u6), j3[3 * o10 + 2] = t9[2] + (4 & l6[o10] ? u6 : -u6), o10 > 0 && b4.push(o10 - 1, o10);
    o(j3, this._originSR, 0, j3, r12.renderSpatialReference, 0, p8);
    const M4 = new f2(this._material, [[e4.POSITION, new t2(j3, b4, 3, true)]], null, e7.Line);
    h2.add(M4), _3.addGeometry(M4);
  }
  get test() {
  }
};
var l5 = n2();

export {
  e11 as e,
  a2 as a,
  t6 as t,
  C3 as C,
  A2 as A,
  a5 as a2,
  t8 as t2,
  n8 as n,
  W3 as W,
  _2 as _,
  r11 as r,
  a3,
  u5 as u,
  c4 as c,
  f5 as f,
  m5 as m,
  d,
  g3 as g,
  p6 as p,
  E6 as E,
  R,
  b3 as b,
  a4,
  s6 as s,
  l4 as l,
  d2,
  f6 as f2,
  o9 as o
};
//# sourceMappingURL=chunk-OZD5EBKS.js.map
