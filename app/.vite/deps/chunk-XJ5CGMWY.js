import {
  c as c2
} from "./chunk-P3ZDIFZS.js";
import {
  E
} from "./chunk-WAKNRSGF.js";
import {
  i as i2
} from "./chunk-4T44Z66D.js";
import {
  a as a2
} from "./chunk-NWA7NYLF.js";
import {
  e as e5
} from "./chunk-ZAYRG6WM.js";
import {
  e as e3
} from "./chunk-X5RZJMNW.js";
import {
  e as e4
} from "./chunk-K24WU5UX.js";
import {
  n as n4
} from "./chunk-LH36NQSN.js";
import {
  o as o3
} from "./chunk-UMYFDXOJ.js";
import {
  m as m3
} from "./chunk-TGMFGDP6.js";
import {
  e as e2,
  n,
  u
} from "./chunk-ZDVQNOKR.js";
import {
  c,
  f,
  i,
  l,
  m as m2,
  n as n3,
  o as o2,
  r as r4,
  x
} from "./chunk-53ZTROGC.js";
import {
  n as n2,
  r as r3
} from "./chunk-JLFSX3JT.js";
import {
  o,
  r as r2,
  s as s2
} from "./chunk-6P7HXSJ6.js";
import {
  e3 as e,
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  s
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObject.js
var r5 = class {
  constructor() {
    this.id = e();
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/ContentObjectType.js
var e6;
!function(e9) {
  e9[e9.Layer = 0] = "Layer", e9[e9.Object = 1] = "Object", e9[e9.Mesh = 2] = "Mesh", e9[e9.Line = 3] = "Line", e9[e9.Point = 4] = "Point", e9[e9.Material = 5] = "Material", e9[e9.Texture = 6] = "Texture", e9[e9.COUNT = 7] = "COUNT";
}(e6 || (e6 = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/screenSizePerspectiveUtils.js
function u2(e9) {
  return Math.abs(e9 * e9 * e9);
}
function f2(e9, t3, a3) {
  const r6 = a3.parameters;
  return C.scale = Math.min(r6.divisor / (t3 - r6.offset), 1), C.factor = u2(e9), C;
}
function m4(t3, a3) {
  return o(t3 * Math.max(a3.scale, a3.minScaleFactor), t3, a3.factor);
}
function h(e9, t3, a3) {
  const r6 = f2(e9, t3, a3);
  return r6.minScaleFactor = 0, m4(1, r6);
}
function d(e9, t3, a3, r6) {
  r6.scale = h(e9, t3, a3), r6.factor = 0, r6.minScaleFactor = a3.minScaleFactor;
}
function p(e9, t3, a3 = [0, 0]) {
  const r6 = Math.min(Math.max(t3.scale, t3.minScaleFactor), 1);
  return a3[0] = e9[0] * r6, a3[1] = e9[1] * r6, a3;
}
function v(e9, t3, a3, r6) {
  return m4(e9, f2(t3, a3, r6));
}
var g2 = { curvatureDependent: { min: { curvature: s2(10), tiltAngle: s2(12), scaleFallOffFactor: 0.5 }, max: { curvature: s2(70), tiltAngle: s2(40), scaleFallOffFactor: 0.8 } }, scaleStart: 0.3, scaleFallOffRange: 0.65, minPixelSize: 0 };
var C = { scale: 0, factor: 0, minScaleFactor: 0 };
var D = E();

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/internal/MaterialUtil.js
function i3(r6, i4, n7, o6, l3) {
  let s4 = (n7.screenLength || 0) * r6.pixelRatio;
  null != l3 && (s4 = v(s4, o6, i4, l3));
  const a3 = s4 * Math.tan(0.5 * r6.fovY) / (0.5 * r6.fullHeight);
  return r2(a3 * i4, n7.minWorldLength || 0, null != n7.maxWorldLength ? n7.maxWorldLength : 1 / 0);
}
function n5(t3, e9) {
  let i4 = false;
  for (const n7 in e9) {
    const o6 = e9[n7];
    void 0 !== o6 && (Array.isArray(o6) ? Array.isArray(t3[n7]) && s(o6, t3[n7]) || (t3[n7] = o6.slice(), i4 = true) : t3[n7] !== o6 && (i4 = true, t3[n7] = o6));
  }
  return i4;
}
var o4 = { multiply: 1, ignore: 2, replace: 3, tint: 4 };

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/DefaultVertexAttributeLocations.js
var O = /* @__PURE__ */ new Map([[e5.POSITION, 0], [e5.NORMAL, 1], [e5.NORMALCOMPRESSED, 1], [e5.UV0, 2], [e5.COLOR, 3], [e5.COLORFEATUREATTRIBUTE, 3], [e5.SIZE, 4], [e5.TANGENT, 4], [e5.CENTEROFFSETANDDISTANCE, 5], [e5.SYMBOLCOLOR, 5], [e5.FEATUREATTRIBUTE, 6], [e5.INSTANCEFEATUREATTRIBUTE, 6], [e5.INSTANCECOLOR, 7], [e5.OBJECTANDLAYERIDCOLOR, 7], [e5.INSTANCEOBJECTANDLAYERIDCOLOR, 7], [e5.ROTATION, 8], [e5.INSTANCEMODEL, 8], [e5.INSTANCEMODELNORMAL, 12], [e5.INSTANCEMODELORIGINHI, 11], [e5.INSTANCEMODELORIGINLO, 15]]);

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/Material.js
var n6 = class extends r5 {
  constructor(r6, a3) {
    super(), this.type = e6.Material, this.supportsEdges = false, this._renderPriority = 0, this.vertexAttributeLocations = O, this._pp0 = r3(0, 0, 1), this._pp1 = r3(0, 0, 0), this._parameters = new a3(), n5(this._parameters, r6), this.validateParameters(this._parameters);
  }
  get parameters() {
    return this._parameters;
  }
  update(e9) {
    return false;
  }
  setParameters(e9, r6 = true) {
    n5(this._parameters, e9) && (this.validateParameters(this._parameters), r6 && this._parametersChanged());
  }
  validateParameters(e9) {
  }
  shouldRender(e9) {
    return this.visible && this.isVisibleForOutput(e9.output) && (!this.parameters.isDecoration || e9.bind.decorations) && !!(this.parameters.renderOccluded & e9.renderOccludedMask);
  }
  isVisibleForOutput(e9) {
    return true;
  }
  get renderPriority() {
    return this._renderPriority;
  }
  set renderPriority(e9) {
    e9 !== this._renderPriority && (this._renderPriority = e9, this._parametersChanged());
  }
  _parametersChanged() {
    var _a;
    (_a = this.repository) == null ? void 0 : _a.materialChanged(this);
  }
  queryRenderOccludedState(e9) {
    return this.visible && this.parameters.renderOccluded === e9;
  }
  get hasEmissions() {
    return false;
  }
  intersectDraped(e9, r6, t3, s4, i4, a3) {
    return this._pp0[0] = this._pp1[0] = s4[0], this._pp0[1] = this._pp1[1] = s4[1], this.intersect(e9, r6, t3, this._pp0, this._pp1, i4);
  }
};
var p2;
!function(e9) {
  e9[e9.None = 0] = "None", e9[e9.Occlude = 1] = "Occlude", e9[e9.Transparent = 2] = "Transparent", e9[e9.OccludeAndTransparent = 4] = "OccludeAndTransparent", e9[e9.OccludeAndTransparentStencil = 8] = "OccludeAndTransparentStencil", e9[e9.Opaque = 16] = "Opaque";
}(p2 || (p2 = {}));
var o5 = class extends c2 {
  constructor() {
    super(...arguments), this.renderOccluded = p2.Occlude, this.isDecoration = false;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/Float4sPassUniform.js
var e7 = class extends i2 {
  constructor(s4, e9, o6) {
    super(s4, "vec4", a2.Pass, (r6, o7, t3) => r6.setUniform4fv(s4, e9(o7, t3)), o6);
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/core/shaderModules/FloatsPassUniform.js
var s3 = class extends i2 {
  constructor(r6, s4, e9) {
    super(r6, "float", a2.Pass, (o6, e10, t3) => o6.setUniform1fv(r6, s4(e10, t3)), e9);
  }
};

// node_modules/@arcgis/core/views/3d/support/debugFlags.js
var T = class extends g {
  constructor() {
    super(...arguments), this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR = false, this.DECONFLICTOR_SHOW_VISIBLE = false, this.DECONFLICTOR_SHOW_INVISIBLE = false, this.DECONFLICTOR_SHOW_GRID = false, this.LABELS_SHOW_BORDER = false, this.TEXT_SHOW_BASELINE = false, this.TEXT_SHOW_BORDER = false, this.OVERLAY_DRAW_DEBUG_TEXTURE = false, this.OVERLAY_SHOW_CENTER = false, this.SHOW_POI = false, this.TESTS_DISABLE_OPTIMIZATIONS = false, this.TESTS_DISABLE_FAST_UPDATES = false, this.DRAW_MESH_GEOMETRY_NORMALS = false, this.FEATURE_TILE_FETCH_SHOW_TILES = false, this.FEATURE_TILE_TREE_SHOW_TILES = false, this.TERRAIN_TILE_TREE_SHOW_TILES = false, this.I3S_TREE_SHOW_TILES = false, this.I3S_SHOW_MODIFICATIONS = false, this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES = false, this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL = false, this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES = false, this.LINE_WIREFRAMES = false;
  }
};
r([m()], T.prototype, "SCENEVIEW_HITTEST_RETURN_INTERSECTOR", void 0), r([m()], T.prototype, "DECONFLICTOR_SHOW_VISIBLE", void 0), r([m()], T.prototype, "DECONFLICTOR_SHOW_INVISIBLE", void 0), r([m()], T.prototype, "DECONFLICTOR_SHOW_GRID", void 0), r([m()], T.prototype, "LABELS_SHOW_BORDER", void 0), r([m()], T.prototype, "TEXT_SHOW_BASELINE", void 0), r([m()], T.prototype, "TEXT_SHOW_BORDER", void 0), r([m()], T.prototype, "OVERLAY_DRAW_DEBUG_TEXTURE", void 0), r([m()], T.prototype, "OVERLAY_SHOW_CENTER", void 0), r([m()], T.prototype, "SHOW_POI", void 0), r([m()], T.prototype, "TESTS_DISABLE_OPTIMIZATIONS", void 0), r([m()], T.prototype, "TESTS_DISABLE_FAST_UPDATES", void 0), r([m()], T.prototype, "DRAW_MESH_GEOMETRY_NORMALS", void 0), r([m()], T.prototype, "FEATURE_TILE_FETCH_SHOW_TILES", void 0), r([m()], T.prototype, "FEATURE_TILE_TREE_SHOW_TILES", void 0), r([m()], T.prototype, "TERRAIN_TILE_TREE_SHOW_TILES", void 0), r([m()], T.prototype, "I3S_TREE_SHOW_TILES", void 0), r([m()], T.prototype, "I3S_SHOW_MODIFICATIONS", void 0), r([m()], T.prototype, "LOD_INSTANCE_RENDERER_DISABLE_UPDATES", void 0), r([m()], T.prototype, "LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL", void 0), r([m()], T.prototype, "EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES", void 0), r([m()], T.prototype, "LINE_WIREFRAMES", void 0), T = r([a("esri.views.3d.support.debugFlags")], T);
var t = new T();

// node_modules/@arcgis/core/views/3d/layers/support/FastSymbolUpdates.js
var g3;
var b;
!function(e9) {
  e9[e9.Undefined = 0] = "Undefined", e9[e9.DefinedSize = 1] = "DefinedSize", e9[e9.DefinedScale = 2] = "DefinedScale";
}(g3 || (g3 = {})), function(e9) {
  e9[e9.Undefined = 0] = "Undefined", e9[e9.DefinedAngle = 1] = "DefinedAngle";
}(b || (b = {}));
var C2 = class {
  constructor(e9) {
    this.field = e9;
  }
};
var D2 = class extends C2 {
  constructor(e9) {
    super(e9), this.minSize = [0, 0, 0], this.maxSize = [0, 0, 0], this.offset = [0, 0, 0], this.factor = [0, 0, 0], this.type = [g3.Undefined, g3.Undefined, g3.Undefined];
  }
};
var U = class extends C2 {
  constructor(e9) {
    super(e9), this.colors = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.values = [0, 0, 0, 0, 0, 0, 0, 0];
  }
};
var w = class extends C2 {
  constructor(e9) {
    super(e9), this.values = [0, 0, 0, 0, 0, 0, 0, 0], this.opacityValues = [0, 0, 0, 0, 0, 0, 0, 0];
  }
};
var j = class {
};
function M(e9) {
  return null != e9;
}
function A(e9, t3) {
  e9 && e9.push(t3);
}
function I(e9, t3, o6, i4 = e3()) {
  const n7 = e9 || 0, s4 = t3 || 0, r6 = o6 || 0;
  return 0 !== n7 && x(i4, i4, -n7 / 180 * Math.PI), 0 !== s4 && l(i4, i4, s4 / 180 * Math.PI), 0 !== r6 && m2(i4, i4, r6 / 180 * Math.PI), i4;
}
function P(e9, t3, o6, i4, n7) {
  var _a;
  const s4 = e9.minSize, r6 = e9.maxSize;
  if (e9.useSymbolValue) {
    const e10 = i4.symbolSize[o6];
    return t3.minSize[o6] = e10, t3.maxSize[o6] = e10, t3.offset[o6] = t3.minSize[o6], t3.factor[o6] = 0, t3.type[o6] = g3.DefinedSize, true;
  }
  if (M(e9.field)) return M(e9.stops) ? 2 === e9.stops.length && n(e9.stops[0].size) && n(e9.stops[1].size) ? (T2(e9.stops[0].size, e9.stops[1].size, e9.stops[0].value, e9.stops[1].value, t3, o6), t3.type[o6] = g3.DefinedSize, true) : (A(n7, "Could not convert size info: stops only supported with 2 elements"), false) : n(s4) && n(r6) && M(e9.minDataValue) && M(e9.maxDataValue) ? (T2(s4, r6, e9.minDataValue, e9.maxDataValue, t3, o6), t3.type[o6] = g3.DefinedSize, true) : "unknown" === e9.valueUnit ? (A(n7, "Could not convert size info: proportional size not supported"), false) : null != m3[e9.valueUnit] ? (t3.minSize[o6] = -1 / 0, t3.maxSize[o6] = 1 / 0, t3.offset[o6] = 0, t3.factor[o6] = 1 / m3[e9.valueUnit], t3.type[o6] = g3.DefinedSize, true) : (A(n7, "Could not convert size info: scale-dependent size not supported"), false);
  if (!M(e9.field)) {
    if (((_a = e9.stops) == null ? void 0 : _a[0]) && n(e9.stops[0].size)) return t3.minSize[o6] = e9.stops[0].size, t3.maxSize[o6] = e9.stops[0].size, t3.offset[o6] = t3.minSize[o6], t3.factor[o6] = 0, t3.type[o6] = g3.DefinedSize, true;
    if (n(s4)) return t3.minSize[o6] = s4, t3.maxSize[o6] = s4, t3.offset[o6] = s4, t3.factor[o6] = 0, t3.type[o6] = g3.DefinedSize, true;
  }
  return A(n7, "Could not convert size info: unsupported variant of sizeInfo"), false;
}
function T2(e9, t3, o6, i4, n7, s4) {
  const r6 = Math.abs(i4 - o6) > 0 ? (t3 - e9) / (i4 - o6) : 0;
  n7.minSize[s4] = r6 > 0 ? e9 : t3, n7.maxSize[s4] = r6 > 0 ? t3 : e9, n7.offset[s4] = e9 - o6 * r6, n7.factor[s4] = r6;
}
function F(e9, t3, o6, i4) {
  if (e9.normalizationField || e9.valueRepresentation) return A(i4, "Could not convert size info: unsupported property"), null;
  if (!u(e9.field)) return A(i4, "Could not convert size info: field is not a string"), null;
  if (t3.size) {
    if (e9.field) if (t3.size.field) {
      if (e9.field !== t3.size.field) return A(i4, "Could not convert size info: multiple fields in use"), null;
    } else t3.size.field = e9.field;
  } else t3.size = new D2(e9.field);
  let n7;
  switch (e9.axis) {
    case "width":
      return n7 = P(e9, t3.size, 0, o6, i4), n7 ? t3 : null;
    case "height":
      return n7 = P(e9, t3.size, 2, o6, i4), n7 ? t3 : null;
    case "depth":
      return n7 = P(e9, t3.size, 1, o6, i4), n7 ? t3 : null;
    case "width-and-depth":
      return n7 = P(e9, t3.size, 0, o6, i4), n7 && P(e9, t3.size, 1, o6, i4), n7 ? t3 : null;
    case null:
    case void 0:
    case "all":
      return n7 = P(e9, t3.size, 0, o6, i4), n7 = n7 && P(e9, t3.size, 1, o6, i4), n7 = n7 && P(e9, t3.size, 2, o6, i4), n7 ? t3 : null;
    default:
      return A(i4, `Could not convert size info: unknown axis "${e9.axis}""`), null;
  }
}
function R(e9, t3, o6) {
  for (let n7 = 0; n7 < 3; ++n7) {
    let o7 = t3.unitInMeters;
    e9.type[n7] === g3.DefinedSize && (o7 *= t3.modelSize[n7], e9.type[n7] = g3.DefinedScale), e9.minSize[n7] = e9.minSize[n7] / o7, e9.maxSize[n7] = e9.maxSize[n7] / o7, e9.offset[n7] = e9.offset[n7] / o7, e9.factor[n7] = e9.factor[n7] / o7;
  }
  let i4;
  if (e9.type[0] !== g3.Undefined) i4 = 0;
  else if (e9.type[1] !== g3.Undefined) i4 = 1;
  else {
    if (e9.type[2] === g3.Undefined) return A(o6, "No size axis contains a valid size or scale"), false;
    i4 = 2;
  }
  for (let n7 = 0; n7 < 3; ++n7) e9.type[n7] === g3.Undefined && (e9.minSize[n7] = e9.minSize[i4], e9.maxSize[n7] = e9.maxSize[i4], e9.offset[n7] = e9.offset[i4], e9.factor[n7] = e9.factor[i4], e9.type[n7] = e9.type[i4]);
  return true;
}
function k(e9, t3, o6) {
  e9[4 * t3] = o6.r / 255, e9[4 * t3 + 1] = o6.g / 255, e9[4 * t3 + 2] = o6.b / 255, e9[4 * t3 + 3] = o6.a;
}
function E2(e9, t3, o6) {
  if (e9.normalizationField) return A(o6, "Could not convert color info: unsupported property"), null;
  if (e2(e9.field)) {
    if (!e9.stops) return A(o6, "Could not convert color info: missing stops or colors"), null;
    {
      if (e9.stops.length > 8) return A(o6, "Could not convert color info: too many color stops"), null;
      t3.color = new U(e9.field);
      const i4 = e9.stops;
      for (let e10 = 0; e10 < 8; ++e10) {
        const o7 = i4[Math.min(e10, i4.length - 1)];
        t3.color.values[e10] = o7.value, k(t3.color.colors, e10, o7.color);
      }
    }
  } else {
    if (!(e9.stops && e9.stops.length >= 0)) return A(o6, "Could not convert color info: no field and no colors/stops"), null;
    {
      const o7 = e9.stops && e9.stops.length >= 0 && e9.stops[0].color;
      t3.color = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], colors: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
      for (let e10 = 0; e10 < 8; e10++) t3.color.values[e10] = 1 / 0, k(t3.color.colors, e10, o7);
    }
  }
  return t3;
}
function _(e9, t3, o6) {
  if (e9.normalizationField) return A(o6, "Could not convert opacity info: unsupported property"), null;
  if (e2(e9.field)) {
    if (!e9.stops) return A(o6, "Could not convert opacity info: missing stops or opacities"), null;
    {
      if (e9.stops.length > 8) return A(o6, "Could not convert opacity info: too many opacity stops"), null;
      t3.opacity = new w(e9.field);
      const i4 = e9.stops;
      for (let e10 = 0; e10 < 8; ++e10) {
        const o7 = i4[Math.min(e10, i4.length - 1)];
        t3.opacity.values[e10] = o7.value, t3.opacity.opacityValues[e10] = o7.opacity;
      }
    }
  } else {
    if (!(e9.stops && e9.stops.length >= 0)) return A(o6, "Could not convert opacity info: no field and no opacities/stops"), null;
    {
      const o7 = e9.stops && e9.stops.length >= 0 ? e9.stops[0].opacity : 0;
      t3.opacity = { field: null, values: [0, 0, 0, 0, 0, 0, 0, 0], opacityValues: [0, 0, 0, 0, 0, 0, 0, 0] };
      for (let e10 = 0; e10 < 8; e10++) t3.opacity.values[e10] = 1 / 0, t3.opacity.opacityValues[e10] = o7;
    }
  }
  return t3;
}
function q(e9, t3, o6) {
  const i4 = 2 === o6 && "arithmetic" === e9.rotationType;
  t3.offset[o6] = i4 ? 90 : 0, t3.factor[o6] = i4 ? -1 : 1, t3.type[o6] = 1;
}
function N(e9, t3, o6) {
  if (!e2(e9.field)) return A(o6, "Could not convert rotation info: field is not a string"), null;
  if (t3.rotation) {
    if (e9.field) if (t3.rotation.field) {
      if (e9.field !== t3.rotation.field) return A(o6, "Could not convert rotation info: multiple fields in use"), null;
    } else t3.rotation.field = e9.field;
  } else t3.rotation = { field: e9.field, offset: [0, 0, 0], factor: [1, 1, 1], type: [0, 0, 0] };
  switch (e9.axis) {
    case "tilt":
      return q(e9, t3.rotation, 0), t3;
    case "roll":
      return q(e9, t3.rotation, 1), t3;
    case null:
    case void 0:
    case "heading":
      return q(e9, t3.rotation, 2), t3;
    default:
      return A(o6, `Could not convert rotation info: unknown axis "${e9.axis}""`), null;
  }
}
var $ = class {
  constructor(e9, t3 = [1, 1, 1], o6 = [1, 1, 1], i4 = 1, n7 = [0, 0, 0], s4 = [1, 1, 1], r6 = [0, 0, 0]) {
    this.supports = e9, this.modelSize = t3, this.symbolSize = o6, this.unitInMeters = i4, this.anchor = n7, this.scale = s4, this.rotation = r6;
  }
};
function B(e9, t3, o6) {
  if (!e9) return null;
  const i4 = e9.reduce((e10, i5) => {
    if (!e10) return e10;
    if (i5.valueExpression) return A(o6, "Could not convert visual variables: arcade expressions not supported"), null;
    switch (i5.type) {
      case "size":
        return t3.supports.size ? F(i5, e10, t3, o6) : e10;
      case "color":
        return t3.supports.color ? E2(i5, e10, o6) : e10;
      case "opacity":
        return t3.supports.opacity ? _(i5, e10, o6) : null;
      case "rotation":
        return t3.supports.rotation ? N(i5, e10, o6) : e10;
      default:
        return null;
    }
  }, new j());
  return !(e9.length > 0 && i4) || i4.size || i4.color || i4.opacity || i4.rotation ? (i4 == null ? void 0 : i4.size) && !R(i4.size, t3, o6) ? null : i4 : null;
}
var L2 = class {
  constructor(e9, t3, o6) {
    this.visualVariables = e9, this.materialParameters = t3, this.requiresShaderTransformation = o6;
  }
};
function O2(e9, t3) {
  if (!e9) return null;
  if (t.TESTS_DISABLE_FAST_UPDATES) return null;
  const o6 = B(e9.visualVariables, t3);
  return o6 ? new L2(o6, K(o6, t3), !!o6.size) : null;
}
function G(e9, t3, o6) {
  if (!t3 || !e9) return false;
  const i4 = e9.visualVariables, n7 = B(t3.visualVariables, o6);
  return !!n7 && (!!(H(i4.size, n7.size, "size") && H(i4.color, n7.color, "color") && H(i4.rotation, n7.rotation, "rotation") && H(i4.opacity, n7.opacity, "opacity")) && (e9.visualVariables = n7, e9.materialParameters = K(n7, o6), e9.requiresShaderTransformation = !!n7.size, true));
}
function H(e9, t3, o6) {
  if (!!e9 != !!t3) return false;
  if (e9 && e9.field !== (t3 == null ? void 0 : t3.field)) return false;
  if (e9 && "rotation" === o6) {
    const o7 = e9, i4 = t3;
    for (let e10 = 0; e10 < 3; e10++) if (o7.type[e10] !== i4.type[e10] || o7.offset[e10] !== i4.offset[e10] || o7.factor[e10] !== i4.factor[e10]) return false;
  }
  return true;
}
var J = class extends c2 {
  constructor(e9) {
    super(), this.vvSize = (e9 == null ? void 0 : e9.size) ?? null, this.vvColor = (e9 == null ? void 0 : e9.color) ?? null, this.vvOpacity = (e9 == null ? void 0 : e9.opacity) ?? null;
  }
};
function K(e9, n7) {
  const s4 = new J(e9);
  return s4.vvSize && (s4.vvSymbolAnchor = n7.anchor, o2(ee), I(n7.rotation[2], n7.rotation[0], n7.rotation[1], ee), s4.vvSymbolRotationMatrix = s4.vvSymbolRotationMatrix || e4(), n4(s4.vvSymbolRotationMatrix, ee)), s4;
}
function Q2(t3, o6, i4) {
  if (!t3.vvSize) return i4;
  n3(Y, i4);
  const f3 = t3.vvSymbolRotationMatrix;
  r4(ee, f3[0], f3[1], f3[2], 0, f3[3], f3[4], f3[5], 0, f3[6], f3[7], f3[8], 0, 0, 0, 0, 1), c(Y, Y, ee);
  for (let n7 = 0; n7 < 3; ++n7) {
    const i5 = t3.vvSize.offset[n7] + o6[0] * t3.vvSize.factor[n7];
    Z[n7] = r2(i5, t3.vvSize.minSize[n7], t3.vvSize.maxSize[n7]);
  }
  return f(Y, Y, Z), i(Y, Y, t3.vvSymbolAnchor), Y;
}
function W(t3, o6, i4) {
  if (!o6.vvSize) return o3(t3, 1, 1, 1), t3;
  for (let n7 = 0; n7 < 3; ++n7) {
    const s4 = o6.vvSize.offset[n7] + i4[0] * o6.vvSize.factor[n7];
    t3[n7] = r2(s4, o6.vvSize.minSize[n7], o6.vvSize.maxSize[n7]);
  }
  return t3;
}
function X(e9, t3) {
  const o6 = null == e9 ? 0 : t3.attributes[e9];
  return "number" == typeof o6 && isFinite(o6) ? o6 : 0;
}
var Y = e3();
var Z = n2();
var ee = e3();

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/VisualVariablePassParameters.js
var t2 = class extends J {
  constructor() {
    super(...arguments), this.renderOccluded = p2.Occlude, this.isDecoration = false;
  }
};
var e8 = 8;

export {
  r5 as r,
  e6 as e,
  O,
  m4 as m,
  d,
  p,
  i3 as i,
  n5 as n,
  o4 as o,
  n6 as n2,
  p2,
  o5 as o2,
  e7 as e2,
  s3 as s,
  t,
  $,
  O2,
  G,
  Q2 as Q,
  W,
  X,
  t2,
  e8 as e3
};
//# sourceMappingURL=chunk-XJ5CGMWY.js.map
