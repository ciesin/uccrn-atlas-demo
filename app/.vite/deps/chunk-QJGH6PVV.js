import {
  A as A3,
  E as E3,
  R as R3,
  b as b3,
  c as c3,
  f2,
  l as l2,
  o as o3,
  p as p3,
  r as r2
} from "./chunk-OZD5EBKS.js";
import {
  a,
  f,
  h as h3,
  l
} from "./chunk-PYT5YQEQ.js";
import {
  A as A2,
  B,
  E as E2,
  F,
  at,
  b as b2,
  et,
  ft,
  mt,
  st
} from "./chunk-IHQU26IU.js";
import {
  z
} from "./chunk-NTBYJDIM.js";
import {
  X,
  t as t2
} from "./chunk-XJ5CGMWY.js";
import {
  A,
  c as c2
} from "./chunk-MAMFTXBR.js";
import {
  e as e3
} from "./chunk-NQPBPVRE.js";
import {
  U
} from "./chunk-WAKNRSGF.js";
import {
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  t
} from "./chunk-YVJ7MJNT.js";
import {
  c
} from "./chunk-IWFYZGBP.js";
import {
  m
} from "./chunk-ZKPJPNLW.js";
import {
  e as e2
} from "./chunk-X5RZJMNW.js";
import {
  E,
  o as o2,
  s as s3,
  u as u2
} from "./chunk-UMYFDXOJ.js";
import {
  r,
  s as s2
} from "./chunk-MHM4GDCM.js";
import {
  R as R2
} from "./chunk-POMCHIIZ.js";
import {
  d2 as d
} from "./chunk-IPFYNOOY.js";
import {
  R,
  S,
  V,
  Z,
  p as p2,
  q,
  u,
  v
} from "./chunk-XEBZUAYT.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  g,
  h,
  p
} from "./chunk-T57WVICI.js";
import {
  h as h2
} from "./chunk-3UHB6K6P.js";
import {
  n as n4
} from "./chunk-53ZTROGC.js";
import {
  n as n3,
  s
} from "./chunk-JLFSX3JT.js";
import {
  b,
  e2 as e
} from "./chunk-M6FNW7GP.js";
import {
  n2
} from "./chunk-CWMZW2S5.js";
import {
  n
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/renderers/support/RenderingInfo.js
var r3 = class {
  constructor(r8, s6) {
    this.renderer = r8, this.symbol = s6;
  }
};

// node_modules/@arcgis/core/renderers/support/renderingInfoUtils.js
function i(e8, t7) {
  if (null != e8.symbol) return e8.symbol;
  const o5 = t7 == null ? void 0 : t7.renderer;
  return null != o5 && "dot-density" !== o5.type ? o5.getSymbol(e8, t7) : null;
}
function r4(e8, r8) {
  const n6 = i(e8, r8);
  if (null == n6) return null;
  const l6 = r8 == null ? void 0 : r8.renderer, a6 = new r3(l6, n6);
  if (null == l6 || !("visualVariables" in l6) || !l6.visualVariables) return a6;
  const s6 = R2(l6, e8, r8) ?? [], u5 = ["proportional", "proportional", "proportional"];
  for (const { variable: t7, value: o5 } of s6) switch (t7.type) {
    case "color":
      a6.color = o5.toRgba();
      break;
    case "size":
      if ("outline" === t7.target) a6.outlineSize = o5;
      else {
        const e9 = t7.axis, i2 = t7.useSymbolValue ? "symbol-value" : o5;
        switch (e9) {
          case "width":
            u5[0] = i2;
            break;
          case "depth":
            u5[1] = i2;
            break;
          case "height":
            u5[2] = i2;
            break;
          case "width-and-depth":
            u5[0] = u5[1] = i2;
            break;
          default:
            u5[0] = u5[1] = u5[2] = i2;
        }
      }
      break;
    case "opacity":
      a6.opacity = o5;
      break;
    case "rotation":
      switch (t7.axis) {
        case "tilt":
          a6.tilt = o5;
          break;
        case "roll":
          a6.roll = o5;
          break;
        default:
          a6.heading = o5;
      }
  }
  return "proportional" === u5[0] && "proportional" === u5[1] && "proportional" === u5[2] || (a6.size = u5), a6;
}
async function n5(e8, t7) {
  var _a;
  return null != e8.symbol ? e8.symbol : ((_a = t7 == null ? void 0 : t7.renderer) == null ? void 0 : _a.getSymbolAsync(e8, t7)) ?? null;
}
async function l3(i2, r8) {
  const l6 = await n5(i2, r8);
  if (!l6) return null;
  const a6 = r8 == null ? void 0 : r8.renderer, s6 = new r3(a6, l6);
  if (!a6 || !("visualVariables" in a6) || !a6.visualVariables) return s6;
  const u5 = R2(a6, i2, r8) ?? [], c5 = ["proportional", "proportional", "proportional"];
  for (const { variable: t7, value: o5 } of u5) if ("color" === t7.type) s6.color = h2.toUnitRGBA(o5);
  else if ("size" === t7.type) if ("outline" === t7.target) s6.outlineSize = o5;
  else {
    const e8 = t7.axis, i3 = t7.useSymbolValue ? "symbol-value" : o5;
    "width" === e8 ? c5[0] = i3 : "depth" === e8 ? c5[1] = i3 : "height" === e8 ? c5[2] = i3 : c5[0] = c5[1] = "width-and-depth" === e8 ? i3 : c5[2] = i3;
  }
  else "opacity" === t7.type ? s6.opacity = o5 : "rotation" === t7.type && "tilt" === t7.axis ? s6.tilt = o5 : "rotation" === t7.type && "roll" === t7.axis ? s6.roll = o5 : "rotation" === t7.type && (s6.heading = o5);
  return (isFinite(c5[0]) || isFinite(c5[1]) || isFinite(c5[2])) && (s6.size = c5), s6;
}
function a2(e8, t7 = 0) {
  const o5 = e8[t7];
  return "number" == typeof o5 && isFinite(o5) ? o5 : null;
}
function s4(e8) {
  for (let t7 = 0; t7 < 3; t7++) {
    const o5 = e8[t7];
    if ("number" == typeof o5) return isFinite(o5) ? o5 : 0;
  }
  return 0;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/constants.js
var r5 = 1.2;
var t3 = s2;

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DPathSymbolLayerConstants.js
var o4 = 3;
var t4 = 3;
var c4 = 10;

// node_modules/@arcgis/core/views/3d/layers/graphics/primitiveObjectSymbolUtils.js
function S2(e8) {
  switch (e8) {
    case "sphere":
    case "cube":
    case "diamond":
    case "cylinder":
    case "cone":
    case "inverted-cone":
    case "tetrahedron":
      return true;
  }
  return false;
}
function l4(S5, l6) {
  const p8 = (n6, s6, a6 = false) => new h3(n6.map((n7) => {
    const c5 = s6(n7.tesselation);
    return a6 && mt(c5), new f([new l(new a(c5))], n7.minScreenSpaceRadius);
  }));
  switch (S5) {
    case "sphere":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }, { tesselation: 1, minScreenSpaceRadius: 8 }, { tesselation: 2, minScreenSpaceRadius: 16 }, { tesselation: 3, minScreenSpaceRadius: 50 }, { tesselation: 4, minScreenSpaceRadius: 250 }], (e8) => st(l6, 0.5, e8, true));
    case "cube":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => F(l6, 1));
    case "cone":
      return p8(m2, (e8) => at(l6, 1, 0.5, e8, false), true);
    case "inverted-cone":
      return p8(m2, (e8) => at(l6, 1, 0.5, e8, true), true);
    case "cylinder":
      return p8(m2, (e8) => ft(l6, 1, 0.5, e8, [0, 0, 1], [0, 0, 0.5]));
    case "tetrahedron":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => et(l6, 1), true);
    case "diamond":
      return p8([{ tesselation: 0, minScreenSpaceRadius: 0 }], () => B(l6, 1), true);
    default:
      return;
  }
}
var m2 = [{ tesselation: 6, minScreenSpaceRadius: 0 }, { tesselation: 18, minScreenSpaceRadius: 7 }, { tesselation: 64, minScreenSpaceRadius: 65 }];

// node_modules/@arcgis/core/views/3d/layers/graphics/SymbolComplexity.js
var e5 = class {
  constructor(e8) {
    this.estimated = false, this.verticesPerFeature = e8.verticesPerFeature ?? 0, this.verticesPerCoordinate = e8.verticesPerCoordinate ?? 0, this.drawCallsPerFeature = e8.drawCallsPerFeature ?? 0, this.memory = e8.memory ?? new a3();
  }
};
var t5 = class extends e5 {
  constructor(e8) {
    super(e8), this.estimated = true;
  }
};
var s5 = class extends e5 {
  constructor(e8, t7) {
    super(t7), this.numComplexities = e8;
  }
};
var r6 = class extends t5 {
  constructor(e8, t7) {
    super(t7), this.numComplexities = e8;
  }
};
var a3 = class {
  constructor() {
    this.bytesPerFeature = 0, this.bytesPerFeatureLabel = 0, this.resourceBytes = 0, this.draped = { bytesPerFeature: 0, bytesPerFeatureLabel: 0 };
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/defaultSymbolComplexity.js
var P = new t5({});
function m3(e8) {
  if ("web-style" === e8.type) return P;
  return F2(e8.symbolLayers.toArray().map((r8) => L(e8, r8)));
}
function F2(e8) {
  let r8 = 0, t7 = 0, a6 = 0, s6 = false, u5 = 0;
  const o5 = new a3();
  for (const i2 of e8) null != i2 && (r8 += i2.verticesPerFeature, t7 += i2.verticesPerCoordinate, a6 += i2.drawCallsPerFeature, o5.bytesPerFeature += i2.memory.bytesPerFeature, o5.bytesPerFeatureLabel += i2.memory.bytesPerFeatureLabel, o5.resourceBytes += i2.memory.resourceBytes, o5.draped.bytesPerFeature += i2.memory.bytesPerFeature, o5.draped.bytesPerFeatureLabel += i2.memory.bytesPerFeatureLabel, s6 = s6 || i2.estimated, ++u5);
  return s6 ? new r6(u5, { verticesPerFeature: r8, verticesPerCoordinate: t7, drawCallsPerFeature: a6, memory: o5 }) : new s5(u5, { verticesPerFeature: r8, verticesPerCoordinate: t7, drawCallsPerFeature: a6, memory: o5 });
}
function d2(e8) {
  const r8 = F2(e8);
  return r8.numComplexities > 0 && (r8.verticesPerFeature /= r8.numComplexities, r8.verticesPerCoordinate /= r8.numComplexities, r8.drawCallsPerFeature /= r8.numComplexities, r8.memory.bytesPerFeature /= r8.numComplexities, r8.memory.bytesPerFeatureLabel /= r8.numComplexities, r8.memory.resourceBytes /= r8.numComplexities, r8.memory.draped.bytesPerFeature /= r8.numComplexities, r8.memory.draped.bytesPerFeatureLabel /= r8.numComplexities), r8;
}
var p4 = {};
function L(u5, i2) {
  var _a, _b;
  const b5 = C(u5, i2), c5 = c2(i2) ? 2 : 0;
  switch (i2.type) {
    case "extrude":
      return new e5({ verticesPerFeature: -12, verticesPerCoordinate: 12, drawCallsPerFeature: c5, memory: b5 });
    case "fill":
      if ("mesh-3d" === u5.type) return new e5({ drawCallsPerFeature: c5, memory: b5 });
      if (null != i2.outline && i2.outline.size > 0) return new e5({ verticesPerFeature: -12, verticesPerCoordinate: 9, memory: b5 });
    case "water":
      return new e5({ verticesPerFeature: -6, verticesPerCoordinate: 3, memory: b5 });
    case "line":
      return new e5({ verticesPerFeature: -6, verticesPerCoordinate: 6, memory: b5 });
    case "object":
      return ((_a = i2.resource) == null ? void 0 : _a.href) ? new t5({ verticesPerFeature: 100, memory: b5 }) : { ...f3(((_b = i2.resource) == null ? void 0 : _b.primitive) ?? d), memory: b5 };
    case "path": {
      let r8 = 0, u6 = 0;
      switch (i2.profile) {
        case "circle":
          r8 = c4;
          break;
        case "quad":
          r8 = 4;
          break;
        default:
          return void n(i2.profile);
      }
      switch (i2.join) {
        case "round":
          u6 = o4;
          break;
        case "miter":
        case "bevel":
          u6 = 1;
          break;
        default:
          return;
      }
      const o5 = 2 * r8, c6 = r8 * u6 * 2, n6 = c6 + o5;
      let l6 = -2 * c6 - o5;
      switch (i2.cap) {
        case "none":
          break;
        case "butt":
        case "square":
          l6 += 2 * (r8 - 1);
          break;
        case "round":
          l6 += 2 * (r8 * (t4 - 1) * 2 + r8);
          break;
        default:
          return;
      }
      return new e5({ verticesPerFeature: l6, verticesPerCoordinate: n6, memory: b5 });
    }
    case "text":
    case "icon":
      return new e5({ verticesPerFeature: 6, memory: b5 });
    default:
      return;
  }
}
function C(r8, t7) {
  const a6 = "point-3d" === r8.type;
  switch (t7.type) {
    case "extrude":
      return t7.edges && t7.edges.size > 0 ? E4.EXTRUDE_EDGES : E4.EXTRUDE;
    case "fill":
      return null != t7.outline && t7.outline.size > 0 ? E4.FILL_OUTLINE : E4.FILL;
    case "water":
      return E4.FILL;
    case "line":
      return "round" === t7.join ? E4.LINE_ROUND : E4.LINE_MITER;
    case "path":
      switch (t7.join) {
        case "round":
          switch (t7.profile) {
            case "circle":
              return E4.PATH_ROUND_CIRCLE;
            case "quad":
              return E4.PATH_ROUND_QUAD;
            default:
              return void n(t7.profile);
          }
        case "miter":
        case "bevel":
          switch (t7.profile) {
            case "circle":
              return E4.PATH_MITER_CIRCLE;
            case "quad":
              return E4.PATH_MITER_QUAD;
            default:
              return void n(t7.profile);
          }
        default:
          return;
      }
    case "object":
      return a6 ? E4.OBJECT_POINT : E4.OBJECT_POLYGON;
    case "icon":
    case "text":
      return a6 ? E4.ICON_POINT : E4.ICON_POLYGON;
    default:
      return;
  }
}
function f3(e8) {
  const r8 = p4[e8];
  if (r8) return r8;
  const t7 = w(l4(e8, new z({}, { spherical: true, doublePrecisionRequiresObfuscation: true })).levels);
  return p4[e8] = new e5({ verticesPerFeature: t7 }), p4[e8];
}
function w(e8) {
  return e8.reduce((e9, r8, t7) => e9 + r8.numVertices * (1 / 10 ** t7), 0) / e8.reduce((e9, r8, t7) => e9 + 1 / 10 ** t7, 0);
}
var E4 = { ICON_POINT: { bytesPerFeature: 2346.460896195398, bytesPerFeatureLabel: 3484.7516349999996, resourceBytes: 0, draped: { bytesPerFeature: 2007.3528529826217, bytesPerFeatureLabel: 3522.702025 } }, ICON_POLYGON: { bytesPerFeature: 3677.214053765355, bytesPerFeatureLabel: 3502.5355950000003, resourceBytes: 0, draped: { bytesPerFeature: 3030.3700096053935, bytesPerFeatureLabel: 3550.247175 } }, OBJECT_POINT: { bytesPerFeature: 569.2092700798497, bytesPerFeatureLabel: 3183.0256999999992, resourceBytes: 0, draped: { bytesPerFeature: 569.2092700798497, bytesPerFeatureLabel: 3183.0256999999992 } }, OBJECT_POLYGON: { bytesPerFeature: 1252.202280530861, bytesPerFeatureLabel: 3125.853350000001, resourceBytes: 0, draped: { bytesPerFeature: 1252.202280530861, bytesPerFeatureLabel: 3125.853350000001 } }, LINE_MITER: { bytesPerFeature: 3252.89170349711, bytesPerFeatureLabel: 3554.3931949999997, resourceBytes: 0, draped: { bytesPerFeature: 2843.5793737736867, bytesPerFeatureLabel: 3538.2547083333334 } }, LINE_ROUND: { bytesPerFeature: 3384.080501909172, bytesPerFeatureLabel: 3522.6055950000004, resourceBytes: 0, draped: { bytesPerFeature: 2833.1897218657587, bytesPerFeatureLabel: 3532.0680950000005 } }, PATH_MITER_CIRCLE: { bytesPerFeature: 38490.63544346431, bytesPerFeatureLabel: 3660.7835999999998, resourceBytes: 0, draped: { bytesPerFeature: 38490.63544346431, bytesPerFeatureLabel: 3660.7835999999998 } }, PATH_ROUND_CIRCLE: { bytesPerFeature: 42934.88589895749, bytesPerFeatureLabel: 3729.49955, resourceBytes: 0, draped: { bytesPerFeature: 42934.88589895749, bytesPerFeatureLabel: 3729.49955 } }, PATH_MITER_QUAD: { bytesPerFeature: 25392.923576583788, bytesPerFeatureLabel: 3647.05925, resourceBytes: 0, draped: { bytesPerFeature: 25392.923576583788, bytesPerFeatureLabel: 3647.05925 } }, PATH_ROUND_QUAD: { bytesPerFeature: 40448.297252606244, bytesPerFeatureLabel: 3646.8303499999997, resourceBytes: 0, draped: { bytesPerFeature: 40448.297252606244, bytesPerFeatureLabel: 3646.8303499999997 } }, FILL: { bytesPerFeature: 3419.9079008788176, bytesPerFeatureLabel: 3564.2132483333335, resourceBytes: 0, draped: { bytesPerFeature: 2910.096178654882, bytesPerFeatureLabel: 3554.8655816666665 } }, FILL_OUTLINE: { bytesPerFeature: 5018.088812445781, bytesPerFeatureLabel: 3524.8219616666665, resourceBytes: 0, draped: { bytesPerFeature: 4278.49006198517, bytesPerFeatureLabel: 3532.068368333334 } }, EXTRUDE: { bytesPerFeature: 7963.8889768932695, bytesPerFeatureLabel: 3628.5106350000005, resourceBytes: 0, draped: { bytesPerFeature: 7963.8889768932695, bytesPerFeatureLabel: 3628.5106350000005 } }, EXTRUDE_EDGES: { bytesPerFeature: 3111.7648563053044, bytesPerFeatureLabel: 2658.4350683333337, resourceBytes: 0, draped: { bytesPerFeature: 3111.7648563053044, bytesPerFeatureLabel: 2658.4350683333337 } } };

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/GeometryWithMapPositions.js
function e6(o5) {
  return null != o5.mapPositions;
}

// node_modules/@arcgis/core/views/3d/layers/graphics/ElevationAligners.js
function u3(t7, e8, o5, n6, r8) {
  const a6 = t7.stageObject, s6 = a6.geometries;
  let i2 = 0;
  for (const l6 of s6) {
    if (!e6(l6)) continue;
    const { update: t8, averageGeometrySampledElevation: s7 } = M(l6, e8, o5, n6, r8);
    i2 += s7, t8 && a6.geometryVertexAttributeUpdated(l6, e4.POSITION);
  }
  return i2 / s6.length;
}
function p5(e8, n6, a6, i2, m6, f8) {
  const c5 = e8.stageObject, u5 = n6.centerPointInElevationSR;
  let p8 = 0;
  if (c5.usesVerticalDistanceToGround) i2(u5, E5), E3(c5, E5.verticalDistanceToGround), p8 = E5.sampledElevation;
  else {
    i2(u5, E5);
    "absolute-height" !== n6.mode && (p8 = E5.sampledElevation);
  }
  const b5 = n4(g2, f8 ?? c5.transformation), I2 = o2(v2, b5[12], b5[13], b5[14]);
  t2.TESTS_DISABLE_OPTIMIZATIONS ? (T[0] = u5.x, T[1] = u5.y, T[2] = E5.z, m(u5.spatialReference, T, b5, m6.spatialReference) && (f8 ? n4(f8, b5) : c5.transformation = b5)) : m6.setAltitudeOfTransformation(E5.z, b5);
  const S5 = d3 / m6.unitInMeters;
  return (Math.abs(b5[12] - I2[0]) >= S5 || Math.abs(b5[13] - I2[1]) >= S5 || Math.abs(b5[14] - I2[2]) >= S5) && (f8 ? n4(f8, b5) : c5.transformation = b5), p8;
}
var g2 = e2();
function b4(t7, e8, n6, a6, s6) {
  const i2 = t7.graphics3DSymbolLayer.lodRenderer;
  if (null == i2) return 0;
  const m6 = e8.centerPointInElevationSR;
  a6(m6, E5);
  const f8 = "absolute-height" !== e8.mode ? E5.sampledElevation : 0, c5 = i2.instanceData, u5 = t7.instanceIndex, p8 = h4;
  c5.getGlobalTransform(u5, p8);
  const g5 = o2(v2, p8[12], p8[13], p8[14]);
  t2.TESTS_DISABLE_OPTIMIZATIONS ? (T[0] = m6.x, T[1] = m6.y, T[2] = E5.z, m(m6.spatialReference, T, p8, s6.spatialReference) && c5.setGlobalTransform(u5, p8)) : s6.setAltitudeOfTransformation(E5.z, p8);
  const b5 = d3 / s6.unitInMeters;
  return (t2.TESTS_DISABLE_OPTIMIZATIONS || Math.abs(p8[12] - g5[0]) >= b5 || Math.abs(p8[13] - g5[1]) >= b5 || Math.abs(p8[14] - g5[2]) >= b5) && c5.setGlobalTransform(u5, p8), f8;
}
function I(t7, e8, o5, n6, r8) {
  const a6 = t7.stageObject, s6 = a6.geometries;
  if (0 === s6.length) return 0;
  let i2 = 0, l6 = null, m6 = 0, u5 = false;
  for (const p8 of s6) {
    if (!e6(p8)) continue;
    const t8 = p8.attributes.get(e4.POSITION);
    if (t8 !== l6) {
      const { update: a7, averageGeometrySampledElevation: s7 } = M(p8, e8, o5, n6, r8);
      m6 = s7, l6 = t8, u5 = a7;
    }
    u5 && a6.geometryVertexAttributeUpdated(p8, e4.POSITION), i2 += m6;
  }
  return i2 / s6.length;
}
var d3 = 0.01;
var T = n3();
var S3 = n3();
var O = n3();
var h4 = e2();
var v2 = n3();
var E5 = new R3();
function M(t7, e8, o5, n6, r8) {
  let s6 = false;
  const i2 = t7.transformation, f8 = e8.requiresSampledElevationInfo;
  S3[0] = i2[12], S3[1] = i2[13], S3[2] = i2[14], t7.invalidateBoundingInfo();
  const u5 = t7.getMutableAttribute(e4.POSITION), p8 = u5.data, g5 = u5.size, b5 = p8.length / g5, I2 = new r2(t7.mapPositions, o5);
  let h6 = 0, v5 = 0;
  for (let m6 = 0; m6 < b5; m6++) {
    if (O[0] = p8[h6], O[1] = p8[h6 + 1], O[2] = p8[h6 + 2], n6(I2, E5), f8 && (v5 += E5.sampledElevation), t2.TESTS_DISABLE_OPTIMIZATIONS) p8[h6] = I2.array[I2.offset], p8[h6 + 1] = I2.array[I2.offset + 1], p8[h6 + 2] = E5.z, o(p8, o5, h6, p8, r8.spatialReference, h6, 1), p8[h6] -= S3[0], p8[h6 + 1] -= S3[1], p8[h6 + 2] -= S3[2], s6 = true;
    else {
      T[0] = p8[h6] + S3[0], T[1] = p8[h6 + 1] + S3[1], T[2] = p8[h6 + 2] + S3[2], r8.setAltitude(T, E5.z), p8[h6] = T[0] - S3[0], p8[h6 + 1] = T[1] - S3[1], p8[h6 + 2] = T[2] - S3[2];
      const t8 = d3 / r8.unitInMeters;
      (Math.abs(O[0] - p8[h6]) >= t8 || Math.abs(O[1] - p8[h6 + 1]) >= t8 || Math.abs(O[2] - p8[h6 + 2]) >= t8) && (s6 = true);
    }
    h6 += g5, I2.offset += 3;
  }
  return v5 /= b5, { update: s6, averageGeometrySampledElevation: v5 };
}

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObject3DGraphicLayer.js
var j = class {
  constructor(e8, t7, i2) {
    this.baseMaterial = e8, this.edgeMaterial = t7, this.hasSlicePlane = i2;
  }
};
var p6 = class {
  get isElevationSource() {
    return !!this.stageObject.lastValidElevationBB;
  }
  constructor(e8, t7, i2, s6, a6, n6, r8, o5 = null) {
    this.graphics3DSymbolLayer = e8, this.stageObject = t7, this._uniqueGeometries = i2, this._uniqueMaterials = s6, this._sharedResource = a6, this.elevationAligner = n6, this.elevationContext = r8, this._edgeState = o5, this.type = "object3d", this._stageLayer = null, this._visible = false, this._addedToStage = false, this.alignedSampledElevation = 0, this.needsElevationUpdates = false, this.useObjectOriginAsAttachmentOrigin = false;
  }
  initialize(e8) {
    this._stageLayer = e8;
    const t7 = e8.stage;
    t7.addMany(this._uniqueMaterials), t7.addMany(this._uniqueGeometries), t7.add(this.stageObject);
  }
  destroy() {
    var _a, _b;
    if (!this._stageLayer) return;
    const e8 = this._stageLayer.stage;
    e8.removeMany(this._uniqueMaterials), e8.removeMany(this._uniqueGeometries), e8.remove(this.stageObject), this._addedToStage && (this._stageLayer.remove(this.stageObject), this._addedToStage = false), (_a = e8.renderer.edgeView) == null ? void 0 : _a.removeObject(this.stageObject), this.stageObject.dispose(), (_b = this._sharedResource) == null ? void 0 : _b.release(), this._visible = false, this._stageLayer = null;
  }
  layerOpacityChanged(e8, t7) {
    const { stageObject: i2, _edgeState: s6, _stageLayer: a6 } = this;
    if (null == s6) return;
    const n6 = v3(s6.baseMaterial);
    s6.edgeMaterial.objectTransparency !== n6 && (s6.edgeMaterial.objectTransparency = n6, this.resetEdgeObject(t7)), a6.stage.renderer.withEdgeView((t8) => t8.updateAllComponentOpacities(i2, [e8]));
  }
  updateHighlights(e8) {
  }
  slicePlaneEnabledChanged(e8, t7) {
    const { stageObject: i2, _edgeState: s6, _stageLayer: a6 } = this;
    null != s6 && a6.stage.renderer.withEdgeView((a7) => {
      a7.updateAllComponentMaterials(i2, s6.edgeMaterial, e8, !t7), s6.hasSlicePlane = e8;
    });
  }
  setVisibility(e8) {
    const { _edgeState: t7, stageObject: i2, _stageLayer: s6 } = this;
    null != s6 && this.visible !== e8 && (this._visible = e8, i2.visible = e8, e8 && !this._addedToStage && (s6.add(i2), this._addedToStage = true), null != t7 && s6.stage.renderer.withEdgeView((s7) => {
      s7.hasObject(i2) ? s7.updateObjectVisibility(i2, e8) : e8 && this._addOrUpdateEdgeObject(t7, s7, false);
    }));
  }
  get visible() {
    return this._visible;
  }
  alignWithElevation(e8, t7, i2, s6) {
    if (null == this.elevationAligner) return;
    null != i2 && l2(this.elevationContext.featureExpressionInfoContext, i2);
    const a6 = (i3, s7) => c3(i3, e8, this.elevationContext, t7, s7);
    this.alignedSampledElevation = this.elevationAligner(this, this.elevationContext, e8.spatialReference, a6, t7), this.resetEdgeObject(s6);
  }
  alignWithAbsoluteElevation(e8, t7, i2) {
    const s6 = (t8, i3) => {
      i3.sampledElevation = e8, i3.verticalDistanceToGround = 0, i3.z = e8;
    };
    this.alignedSampledElevation = this.elevationAligner(this, this.elevationContext, null, s6, t7), this.resetEdgeObject(i2);
  }
  getCenterObjectSpace(t7 = n3()) {
    return s3(t7, U(this.stageObject.boundingVolumeObjectSpace.bounds));
  }
  getBoundingBoxObjectSpace(e8 = u()) {
    const t7 = this.stageObject.boundingVolumeObjectSpace;
    return S(e8, t7.min), Z(e8, t7.max), e8;
  }
  computeAttachmentOrigin(e8) {
    const s6 = this.stageObject.effectiveTransformation;
    if (this.useObjectOriginAsAttachmentOrigin) e8.render.origin[0] += s6[12], e8.render.origin[1] += s6[13], e8.render.origin[2] += s6[14], e8.render.num++;
    else for (const a6 of this.stageObject.geometries) a6.computeAttachmentOrigin(y) && (E(y, y, s6), u2(e8.render.origin, e8.render.origin, y), e8.render.num++);
  }
  async getProjectedBoundingBox(e8, i2, s6, a6, n6) {
    const r8 = this.getBoundingBoxObjectSpace(n6), h6 = S4, d5 = v(r8) ? 1 : h6.length;
    for (let o5 = 0; o5 < d5; o5++) {
      const e9 = h6[o5];
      f5[0] = r8[e9[0]], f5[1] = r8[e9[1]], f5[2] = r8[e9[2]], E(f5, f5, this.stageObject.transformation), _[3 * o5] = f5[0], _[3 * o5 + 1] = f5[1], _[3 * o5 + 2] = f5[2];
    }
    if (!e8(_, 0, d5)) return null;
    q(r8);
    let u5 = null;
    this.calculateRelativeScreenBounds && (u5 = this.calculateRelativeScreenBounds());
    for (let t7 = 0; t7 < 3 * d5; t7 += 3) {
      for (let e9 = 0; e9 < 3; e9++) r8[e9] = Math.min(r8[e9], _[t7 + e9]), r8[e9 + 3] = Math.max(r8[e9 + 3], _[t7 + e9]);
      u5 && s6.push({ location: _.slice(t7, t7 + 3), screenSpaceBoundingRect: u5 });
    }
    if ((i2 == null ? void 0 : i2.service) && "absolute-height" !== this.elevationContext.mode) {
      p2(r8, y);
      const e9 = "relative-to-scene" === this.elevationContext.mode ? "scene" : "ground";
      let t7 = 0;
      if (i2.useViewElevation) t7 = i2.service.getElevation(y[0], y[1], e9) ?? 0;
      else try {
        const s7 = E2(r8, i2.service.spatialReference, i2);
        t7 = await i2.service.queryElevation(y[0], y[1], a6, s7, e9) ?? 0;
      } catch (m6) {
      }
      R(r8, 0, 0, -this.alignedSampledElevation + t7);
    }
    return r8;
  }
  addObjectState(e8) {
    e8.stateType === t.Highlight && e8.addObject(this.stageObject, this.stageObject.highlight(e8.highlightName)), e8.stateType === t.MaskOccludee && e8.addObject(this.stageObject, this.stageObject.maskOccludee());
  }
  removeObjectState(e8) {
    e8.removeByObject(this.stageObject);
  }
  resetEdgeObject(e8) {
    const { _edgeState: t7, stageObject: i2, _stageLayer: s6, _visible: a6 } = this;
    null != t7 && s6.stage.renderer.withEdgeView((s7) => {
      a6 ? this._addOrUpdateEdgeObject(t7, s7, e8) : s7.removeObject(i2);
    });
  }
  _addOrUpdateEdgeObject(e8, t7, i2) {
    const s6 = v3(e8.baseMaterial);
    e8.edgeMaterial.objectTransparency = s6, t7.addOrUpdateObject3D(this.stageObject, e8.edgeMaterial, e8.hasSlicePlane, !i2).then(() => {
      var _a;
      return (_a = this._stageLayer) == null ? void 0 : _a.sync();
    });
  }
};
function v3(e8) {
  return e8.parameters.transparent ? A.TRANSPARENT : A.OPAQUE;
}
var _ = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var f5 = n3();
var y = n3();
var S4 = [[0, 1, 2], [3, 1, 2], [0, 4, 2], [3, 4, 2], [0, 1, 5], [3, 1, 5], [0, 4, 5], [3, 4, 5]];

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DObjectMetadata.js
var t6 = class {
  constructor(t7, e8 = null) {
    this.labelText = e8, this.elevationOffset = t7 ?? 0;
  }
};

// node_modules/@arcgis/core/views/3d/layers/graphics/interfaces.js
var e7;
var a4;
!function(e8) {
  e8[e8.RecreateSymbol = 0] = "RecreateSymbol", e8[e8.RecreateGraphics = 1] = "RecreateGraphics", e8[e8.FastUpdate = 2] = "FastUpdate";
}(e7 || (e7 = {})), function(e8) {
  e8[e8.Slow = 0] = "Slow", e8[e8.Fast = 1] = "Fast", e8[e8.Mixed = 2] = "Mixed", e8[e8.Loading = 3] = "Loading", e8[e8.Undefined = 4] = "Undefined";
}(a4 || (a4 = {}));

// node_modules/@arcgis/core/views/3d/layers/graphics/Loadable.js
var r7 = class {
  constructor(t7) {
    this.schedule = t7, this._abortController = null, this._loadStatus = l5.LOADING, this._loadError = null, this._loader = null, this.logger = null;
  }
  destroy() {
    this.abortLoad();
  }
  get loadStatus() {
    return this._loadStatus;
  }
  load(t7, r8) {
    return this._loadStatus === l5.LOADED ? (t7 && t7(), this._loader ?? Promise.resolve()) : this._loadStatus === l5.FAILED ? (r8 && r8(this._loadError), this._loader ?? Promise.resolve()) : (null == this._loader && (this._abortController = new AbortController(), this._loader = this.doLoad(this._abortController.signal).then(() => {
      this._abortController = null, this._loadStatus = l5.LOADED;
    }, (t8) => {
      throw this._loadError = t8, this._abortController = null, this._loadStatus = l5.FAILED, !b(t8) && this.logger && t8.message && this.logger.warn(t8.message), t8;
    })), this._loader.then(t7, r8).catch(() => {
    }), this._loader);
  }
  abortLoad() {
    null != this._abortController ? this._abortController = e(this._abortController) : this._loadStatus === l5.LOADING && (this._loadStatus = l5.FAILED), this._loader = null;
  }
};
var l5;
!function(t7) {
  t7[t7.LOADING = 0] = "LOADING", t7[t7.LOADED = 1] = "LOADED", t7[t7.FAILED = 2] = "FAILED";
}(l5 || (l5 = {}));

// node_modules/@arcgis/core/views/3d/layers/graphics/Graphics3DSymbolLayer.js
var h5 = () => n2.getLogger("esri.views.3d.layers.graphics.Graphics3DSymbolLayer");
var y2 = class extends r7 {
  constructor(e8, t7, r8, i2) {
    super(r8.schedule), this.symbol = e8, this.symbolLayer = t7, this._context = r8, this.ignoreDrivers = false, this._drivenProperties = { color: false, opacity: false, opacityAlwaysOpaque: true, size: false, rotation: false }, this._materials = [], this.logger = h5(), this._elevationOptions = { supportsOffsetAdjustment: false, supportsOnTheGround: true }, this.skipHighSymbolLodsChanged = true, this._renderPriority = i2.renderPriority, this._renderPriorityStep = i2.renderPriorityStep, this._elevationContext = new o3(), this.complexity = this.computeComplexity(), this.ignoreDrivers = i2.ignoreDrivers, this.ignoreDrivers || (this._drivenProperties = f6(this._context.renderer)), this._updateElevationContext();
  }
  getCachedSize() {
    return null;
  }
  get extentPadding() {
    return 0;
  }
  get materials() {
    return this._materials;
  }
  get usedMemory() {
    const e8 = this.complexity;
    if (null == e8) return 0;
    return (this.draped ? e8.memory.draped : e8.memory).bytesPerFeature;
  }
  _drivenPropertiesChanged(e8) {
    if (this.ignoreDrivers) return false;
    const t7 = this._drivenProperties, r8 = f6(e8);
    return r8.color !== t7.color || r8.opacity !== t7.opacity || r8.opacityAlwaysOpaque !== t7.opacityAlwaysOpaque || r8.size !== t7.size || r8.rotation !== t7.rotation;
  }
  get needsDrivenTransparentPass() {
    return this._drivenProperties.opacity && !this._drivenProperties.opacityAlwaysOpaque;
  }
  _logGeometryCreationWarnings(e8, t7, r8, i2) {
    const o5 = e8.projectionSuccess, n6 = "polygons" in e8 ? e8.polygons : null, s6 = `${i2} geometry failed to be created`;
    o5 ? !this._logGeometryValidationWarnings(t7, r8, i2) && n6 && 0 === n6.length && "rings" === r8 && t7.length > 0 && t7[0].length > 2 && h5().warnOncePerTick(`${s6} (filled rings should use clockwise winding - try reversing the order of vertices)`) : h5().warnOncePerTick(`${s6} (failed to project geometry to view spatial reference)`);
  }
  updateFocus(e8, t7) {
  }
  _logGeometryValidationWarnings(e8, t7, r8) {
    const i2 = `${r8} geometry failed to be created`;
    return !e8.length || 1 === e8.length && !e8[0].length ? (h5().warnOncePerTick(`${i2} (no ${t7} were defined)`), true) : (!Array.isArray(e8) || !Array.isArray(e8[0])) && (h5().warnOncePerTick(`${i2} (${t7} should be defined as a 2D array)`), true);
  }
  _validateGeometry(e8, t7 = null, r8 = null) {
    if (null != t7 && !t7.includes(e8.type)) return this.logger.warn("unsupported geometry type for " + r8 + ` symbol: ${e8.type}`), false;
    switch (e8.type) {
      case "point": {
        const t8 = e8;
        if (!isFinite(t8.x) || !isFinite(t8.y)) return h5().warn("point coordinate is not a valid number, graphic skipped"), false;
        break;
      }
      case "polygon":
        g(e8) && h5().warnOnce("Fixed a non-closed polygon ring.");
    }
    return true;
  }
  _defaultElevationInfoNoZ() {
    return g3;
  }
  _defaultElevationInfoZ() {
    return m4;
  }
  _updateElevationContext() {
    null != this._elevationInfoOverride ? (this._elevationContext.setFromElevationInfo(this._elevationInfoOverride), this._elevationContext.updateFeatureExpressionInfoContext(null)) : this._context.layer.elevationInfo ? (this._elevationContext.setFromElevationInfo(this._context.layer.elevationInfo), this._elevationContext.updateFeatureExpressionInfoContext(this._context.featureExpressionInfoContext)) : this._elevationContext.reset();
  }
  getDefaultElevationInfo(e8) {
    return e8.hasZ ? this._defaultElevationInfoZ() : this._defaultElevationInfoNoZ();
  }
  getGeometryElevationMode(e8, t7 = this.getDefaultElevationInfo(e8)) {
    return this._elevationContext.mode || t7.mode;
  }
  setElevationInfoOverride(e8) {
    this._elevationInfoOverride = e8, this._updateElevationContext();
  }
  setGraphicElevationContext(e8, t7 = new o3()) {
    const r8 = e8.geometry, i2 = this.getDefaultElevationInfo(r8);
    t7.unit = null != this._elevationContext.unit ? this._elevationContext.unit : i2.unit, t7.mode = this.getGeometryElevationMode(r8, i2), t7.offsetMeters = this._elevationContext.meterUnitOffset ?? i2.offset ?? 0;
    const o5 = !this._elevationOptions.supportsOnTheGround && "on-the-ground" === t7.mode;
    o5 && (t7.mode = "relative-to-ground", t7.offsetMeters = 0);
    const n6 = o5 ? f2 : this._elevationContext.featureExpressionInfoContext;
    return t7.updateFeatureExpressionInfoContext(n6, e8, this._context.layer), t7;
  }
  prepareSymbolLayerPatch(e8) {
  }
  updateGeometry(e8, t7) {
    return false;
  }
  updateTransform(e8, t7, r8, i2) {
    return false;
  }
  onRemoveGraphic(e8) {
  }
  _getLayerOpacity() {
    if (this._context.graphicsCoreOwner && "fullOpacity" in this._context.graphicsCoreOwner) return this._context.graphicsCoreOwner.fullOpacity ?? 0;
    const e8 = this._context.layer.opacity;
    return e8 ?? 1;
  }
  _getCombinedOpacity(e8, t7 = v4) {
    const r8 = this.draped ? 1 : this._getLayerOpacity();
    return this._drivenProperties.opacity ? r8 : e8 ? r8 * e8.a : t7.hasIntrinsicColor ? r8 : 0;
  }
  _getCombinedOpacityAndColor(t7, i2 = v4) {
    const o5 = this._getCombinedOpacity(t7, i2);
    if (this._drivenProperties.color) return A2(null, o5);
    const n6 = null != t7 ? h2.toUnitRGB(t7) : s;
    return A2(n6, o5);
  }
  _getVertexOpacityAndColor(e8, t7 = null) {
    const r8 = this._drivenProperties.color ? e8.color : null, i2 = this._drivenProperties.opacity ? e8.opacity : null, o5 = A2(r8, i2);
    return t7 && (o5[0] *= t7, o5[1] *= t7, o5[2] *= t7, o5[3] *= t7), o5;
  }
  isFastUpdatesEnabled() {
    return null != this._fastUpdates;
  }
  computeComplexity() {
    return L(this.symbol, this.symbolLayer);
  }
  globalPropertyChanged(e8, t7, r8) {
    switch (e8) {
      case "opacity":
        return this.layerOpacityChanged(t7, r8), true;
      case "elevationInfo": {
        const e9 = this._elevationContext.mode;
        this._updateElevationContext();
        return this.layerElevationInfoChanged(t7, r8, e9) !== b3.RECREATE;
      }
      case "slicePlaneEnabled":
        return this.slicePlaneEnabledChanged(t7, r8);
      case "physicalBasedRenderingEnabled":
        return this.physicalBasedRenderingChanged();
      case "pixelRatio":
        return this.pixelRatioChanged;
      case "skipHighSymbolLods":
        return this.skipHighSymbolLodsChanged;
      default:
        return false;
    }
  }
  get pixelRatioChanged() {
    return true;
  }
  updateGraphics3DGraphicElevationInfo(e8, t7, r8) {
    let i2 = b3.UPDATE;
    return e8.forEach((e9) => {
      const o5 = t7(e9);
      if (null != o5) {
        const t8 = e9.graphic;
        this.setGraphicElevationContext(t8, o5.elevationContext), o5.needsElevationUpdates = r8(o5.elevationContext.mode);
      } else i2 = b3.RECREATE;
    }), i2;
  }
  applyRendererDiff(e8, t7) {
    return e7.RecreateSymbol;
  }
  getFastUpdateAttrValues(e8) {
    if (!this._fastUpdates) return null;
    const t7 = this._fastUpdates.visualVariables, r8 = t7.size ? X(t7.size.field, e8) : 0, o5 = t7.color ? X(t7.color.field, e8) : 0, n6 = t7.opacity ? X(t7.opacity.field, e8) : 0;
    return r(r8, o5, n6, 0);
  }
  get draped() {
    return this._draped;
  }
  ensureDrapedStatus(e8) {
    return null == this._draped ? (this._draped = e8, true) : (e8 !== this.draped && h5().warnOnce("A symbol can only produce either draped or non-draped visualizations. Use two separate symbol instances for draped and non-draped graphics if necessary."), false);
  }
  test() {
    const e8 = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      return { size: ((_b = (_a = this._fastUpdates) == null ? void 0 : _a.visualVariables.size) == null ? void 0 : _b.field) ?? null, color: ((_d = (_c = this._fastUpdates) == null ? void 0 : _c.visualVariables.color) == null ? void 0 : _d.field) ?? null, opacity: ((_f = (_e = this._fastUpdates) == null ? void 0 : _e.visualVariables.opacity) == null ? void 0 : _f.field) ?? null, rotation: ((_h = (_g = this._fastUpdates) == null ? void 0 : _g.visualVariables.rotation) == null ? void 0 : _h.field) ?? null };
    };
    return { drivenProperties: this._drivenProperties, getVisVarFields: e8 };
  }
};
function f6(e8) {
  const t7 = { color: false, opacity: false, opacityAlwaysOpaque: true, size: false, rotation: false };
  return e8 && "visualVariables" in e8 && e8.visualVariables && e8.visualVariables.forEach((e9) => {
    switch (e9.type) {
      case "color":
        if (t7.color = true, e9.stops) for (let r8 = 0; r8 < e9.stops.length; r8++) {
          const i2 = e9.stops[r8].color;
          i2 && (t7.opacity = true, i2.a < 1 && (t7.opacityAlwaysOpaque = false));
        }
        break;
      case "opacity":
        t7.opacity = true, t7.opacityAlwaysOpaque = false;
        break;
      case "size":
        t7.size = true;
        break;
      case "rotation":
        t7.rotation = true;
    }
  }), t7;
}
var g3 = { mode: "on-the-ground", offset: 0, unit: "meters" };
var m4 = { mode: "absolute-height", offset: 0, unit: "meters" };
var v4 = { hasIntrinsicColor: false };

// node_modules/@arcgis/core/views/3d/layers/graphics/pointUtils.js
function a5(e8, r8, t7, n6, o5) {
  if (u4(e8, r8)) return null;
  t7.localOrigin = d4(e8, r8);
  const i2 = new A3({ geometries: [t7], castShadow: false, layerUid: e8.layer.uid, graphicUid: o5, usesVerticalDistanceToGround: true });
  return { object: i2, sampledElevation: p3(i2, r8, e8.elevationProvider, e8.renderCoordsHelper, n6) };
}
function p7(e8, r8, t7, n6) {
  if (u4(r8, t7)) return null;
  return p3(e8, t7, r8.elevationProvider, r8.renderCoordsHelper, n6);
}
function u4(e8, n6) {
  const o5 = e8.clippingExtent;
  return !!o5 && (c(n6, g4, e8.elevationProvider.spatialReference), !V(o5, g4));
}
function m5(e8, t7, n6) {
  const o5 = e8.elevationContext, l6 = n6.spatialReference;
  c(t7, g4, l6), o5.centerPointInElevationSR = e3(g4[0], g4[1], t7.hasZ ? g4[2] : 0, null != l6 ? l6 : null);
}
function f7(e8) {
  switch (e8.type) {
    case "point":
      return e8;
    case "polygon":
    case "extent":
      return b2(e8);
    case "polyline": {
      const r8 = e8.paths[0];
      if (!r8 || 0 === r8.length) return null;
      const t7 = p(r8, h(r8) / 2);
      return e3(t7[0], t7[1], t7[2], e8.spatialReference);
    }
    case "mesh":
      return e8.extent.center;
  }
  return null;
}
function d4(e8, t7) {
  return c(t7, g4, e8.renderCoordsHelper.spatialReference), e8.localOriginFactory.getOrigin(g4);
}
var g4 = n3();

export {
  r3 as r,
  r4 as r2,
  l3 as l,
  a2 as a,
  s4 as s,
  r5 as r3,
  t3 as t,
  o4 as o,
  t4 as t2,
  c4 as c,
  S2 as S,
  l4 as l2,
  e5 as e,
  P,
  m3 as m,
  F2 as F,
  d2 as d,
  C,
  w,
  e6 as e2,
  u3 as u,
  p5 as p,
  b4 as b,
  I,
  j,
  p6 as p2,
  t6 as t3,
  e7 as e3,
  a4 as a2,
  r7 as r4,
  l5 as l3,
  y2 as y,
  a5 as a3,
  p7 as p3,
  m5 as m2,
  f7 as f,
  d4 as d2
};
//# sourceMappingURL=chunk-QJGH6PVV.js.map
