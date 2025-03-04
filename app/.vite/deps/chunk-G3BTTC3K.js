import {
  o as o7
} from "./chunk-HABQD3Y4.js";
import {
  U,
  V
} from "./chunk-Z3WUVJVY.js";
import {
  d as d5
} from "./chunk-4N6EURWG.js";
import {
  H as H3,
  L as L2,
  N as N2
} from "./chunk-ET4BF57A.js";
import {
  A2 as A3,
  B as B2,
  O as O2,
  R as R2,
  S,
  T,
  b2,
  d2 as d4,
  i as i2,
  p2 as p5
} from "./chunk-EMVGISAT.js";
import {
  a as a3
} from "./chunk-OBOMTFRH.js";
import {
  i as i3
} from "./chunk-NQBVVSVQ.js";
import {
  H as H2
} from "./chunk-FWGIWKNF.js";
import {
  s as s4
} from "./chunk-IR5AHWR5.js";
import {
  l as l2,
  t as t2
} from "./chunk-WP2IQPQN.js";
import {
  d,
  d2,
  n as n9,
  r as r7
} from "./chunk-M5YS3OM7.js";
import {
  B,
  g as g3,
  o as o5,
  p as p4
} from "./chunk-TKKZ7DIH.js";
import {
  W,
  d as d3,
  i,
  m as m3,
  n2 as n10,
  p as p2,
  p2 as p3,
  t as t3
} from "./chunk-XJ5CGMWY.js";
import {
  o as o4
} from "./chunk-C5H3KDE3.js";
import {
  o as o6
} from "./chunk-YIMQSH52.js";
import {
  n as n7
} from "./chunk-GTKHPYCP.js";
import {
  e as e5
} from "./chunk-HV35YTAC.js";
import {
  f as f3,
  n as n8,
  u as u4
} from "./chunk-BSNHCIEC.js";
import {
  b
} from "./chunk-WAKNRSGF.js";
import {
  e as e4
} from "./chunk-ZAYRG6WM.js";
import {
  f as f2
} from "./chunk-NVEHOQKI.js";
import {
  x as x2
} from "./chunk-WXGA2B5U.js";
import {
  e as e2
} from "./chunk-X5RZJMNW.js";
import {
  e as e3
} from "./chunk-K24WU5UX.js";
import {
  l
} from "./chunk-U7ERRXB6.js";
import {
  E as E4,
  O
} from "./chunk-CRKFUUKK.js";
import {
  n as n5,
  t
} from "./chunk-O2L6JAHP.js";
import {
  n as n6
} from "./chunk-LH36NQSN.js";
import {
  E as E3,
  I,
  o as o3,
  r as r6
} from "./chunk-K35H6D4D.js";
import {
  A as A2,
  E as E2,
  H,
  K,
  N,
  P,
  R,
  X as X2,
  Z,
  _,
  c as c2,
  g as g2,
  o as o2,
  p,
  r as r5,
  s as s3,
  u as u3
} from "./chunk-UMYFDXOJ.js";
import {
  e,
  n as n4,
  r as r4,
  u as u2
} from "./chunk-MHM4GDCM.js";
import {
  E,
  L,
  a as a2,
  m as m2,
  x,
  z
} from "./chunk-363AT5UF.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  A,
  C,
  X,
  c,
  h,
  n as n3,
  s as s2
} from "./chunk-53ZTROGC.js";
import {
  f,
  y
} from "./chunk-JLFV7EBO.js";
import {
  n as n2,
  r as r3
} from "./chunk-JLFSX3JT.js";
import {
  o,
  r as r2,
  s
} from "./chunk-6P7HXSJ6.js";
import {
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
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/libs/gl-matrix-2/types/mat4.js
function n11(n14) {
  return n14 instanceof Float32Array && n14.length >= 16;
}
function r8(n14) {
  return Array.isArray(n14) && n14.length >= 16;
}
function t4(t11) {
  return n11(t11) || r8(t11);
}

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/ScaleInfo.js
var t5 = class {
  constructor() {
    this.factor = new c3(), this.factorAlignment = new c3();
  }
};
var c3 = class {
  constructor() {
    this.scale = 0, this.factor = 0, this.minScaleFactor = 0;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechnique.js
var h2 = class extends l2 {
  constructor(e6, r14) {
    super(e6, r14, new t2(V, () => import("./HUDMaterial.glsl-YTVHT2IY.js"))), this.primitiveType = r14.occlusionPass ? E4.POINTS : E4.TRIANGLES;
  }
  initializePipeline(s6) {
    const { oitPass: o9, hasPolygonOffset: n14, draped: a5, output: h3, depthTestEnabled: T2, occlusionPass: g4 } = s6, j = o9 === o4.NONE, b3 = o9 === o4.ColorAlpha, O3 = h3 === n8.Highlight, P2 = T2 && !a5 && !b3 && !g4 && !O3;
    return B({ blending: u4(h3) ? j ? o5 : T(o9) : null, depthTest: T2 && !a5 ? { func: O.LEQUAL } : null, depthWrite: P2 ? p4 : null, drawBuffers: i2(o9, h3), colorWrite: g3, polygonOffset: n14 ? f4 : null });
  }
};
var f4 = { factor: 0, units: -4 };

// node_modules/@arcgis/core/views/3d/webgl-engine/shaders/HUDMaterialTechniqueConfiguration.js
var r9 = class extends a3 {
  constructor(e6) {
    super(), this.spherical = e6, this.screenCenterOffsetUnitsEnabled = false, this.occlusionTestEnabled = true, this.signedDistanceFieldEnabled = false, this.sampleSignedDistanceFieldTexelCenter = false, this.vvSize = false, this.vvColor = false, this.hasVerticalOffset = false, this.hasScreenSizePerspective = false, this.hasRotation = false, this.debugDrawLabelBorder = false, this.hasPolygonOffset = false, this.depthTestEnabled = true, this.pixelSnappingEnabled = true, this.draped = false, this.terrainDepthTest = false, this.cullAboveTerrain = false, this.occlusionPass = false, this.occludedFragmentFade = false, this.objectAndLayerIdColorInstanced = false, this.horizonCullingEnabled = true, this.isFocused = true, this.textureCoordinateType = d.None, this.emissionSource = d2.None, this.discardInvisibleFragments = true, this.hasVvInstancing = false;
  }
};
r([i3()], r9.prototype, "screenCenterOffsetUnitsEnabled", void 0), r([i3()], r9.prototype, "occlusionTestEnabled", void 0), r([i3()], r9.prototype, "signedDistanceFieldEnabled", void 0), r([i3()], r9.prototype, "sampleSignedDistanceFieldTexelCenter", void 0), r([i3()], r9.prototype, "vvSize", void 0), r([i3()], r9.prototype, "vvColor", void 0), r([i3()], r9.prototype, "hasVerticalOffset", void 0), r([i3()], r9.prototype, "hasScreenSizePerspective", void 0), r([i3()], r9.prototype, "hasRotation", void 0), r([i3()], r9.prototype, "debugDrawLabelBorder", void 0), r([i3()], r9.prototype, "hasPolygonOffset", void 0), r([i3()], r9.prototype, "depthTestEnabled", void 0), r([i3()], r9.prototype, "pixelSnappingEnabled", void 0), r([i3()], r9.prototype, "draped", void 0), r([i3()], r9.prototype, "terrainDepthTest", void 0), r([i3()], r9.prototype, "cullAboveTerrain", void 0), r([i3()], r9.prototype, "occlusionPass", void 0), r([i3()], r9.prototype, "occludedFragmentFade", void 0), r([i3()], r9.prototype, "objectAndLayerIdColorInstanced", void 0), r([i3()], r9.prototype, "horizonCullingEnabled", void 0), r([i3()], r9.prototype, "isFocused", void 0);

// node_modules/@arcgis/core/views/3d/webgl-engine/materials/HUDMaterial.js
var ae = class extends n10 {
  constructor(e6, t11) {
    super(e6, De), this.produces = /* @__PURE__ */ new Map([[A3.HUD_MATERIAL, (e7) => f3(e7) && !this.parameters.drawAsLabel], [A3.LABEL_MATERIAL, (e7) => f3(e7) && this.parameters.drawAsLabel], [A3.OCCLUSION_PIXELS, () => this.parameters.occlusionTest], [A3.DRAPED_MATERIAL, (e7) => this.parameters.draped && f3(e7)]]), this._visible = true, this._configuration = new r9(t11);
  }
  getConfiguration(e6, t11) {
    return this._configuration.output = e6, this._configuration.hasSlicePlane = this.parameters.hasSlicePlane, this._configuration.hasVerticalOffset = !!this.parameters.verticalOffset, this._configuration.hasScreenSizePerspective = !!this.parameters.screenSizePerspective, this._configuration.screenCenterOffsetUnitsEnabled = "screen" === this.parameters.centerOffsetUnits, this._configuration.hasPolygonOffset = this.parameters.polygonOffset, this._configuration.draped = this.parameters.draped, this._configuration.occlusionTestEnabled = this.parameters.occlusionTest, this._configuration.pixelSnappingEnabled = this.parameters.pixelSnappingEnabled, this._configuration.signedDistanceFieldEnabled = this.parameters.textureIsSignedDistanceField, this._configuration.sampleSignedDistanceFieldTexelCenter = this.parameters.sampleSignedDistanceFieldTexelCenter, this._configuration.hasRotation = this.parameters.hasRotation, this._configuration.vvSize = !!this.parameters.vvSize, this._configuration.vvColor = !!this.parameters.vvColor, this._configuration.occlusionPass = t11.slot === A3.OCCLUSION_PIXELS, this._configuration.occludedFragmentFade = this.parameters.occludedFragmentFade, this._configuration.horizonCullingEnabled = this.parameters.horizonCullingEnabled, this._configuration.isFocused = this.parameters.isFocused, this._configuration.depthTestEnabled = this.parameters.depthEnabled || t11.slot === A3.OCCLUSION_PIXELS, u4(e6) && (this._configuration.debugDrawLabelBorder = !!t3.LABELS_SHOW_BORDER), this._configuration.oitPass = t11.oitPass, this._configuration.terrainDepthTest = t11.terrainDepthTest, this._configuration.cullAboveTerrain = t11.cullAboveTerrain, this._configuration;
  }
  intersect(e6, t11, i5, a5, o9, n14) {
    const { options: { selectionMode: c4, hud: l3, excludeLabels: S2 }, point: T2, camera: b3 } = i5, { parameters: A4 } = this;
    if (!c4 || !l3 || S2 && A4.isLabel || !e6.visible || !T2) return;
    const { scaleX: E5, scaleY: _2 } = this._getScreenScale(e6, b3.pixelRatio);
    n6(Te, t11), e6.attributes.has(e4.FEATUREATTRIBUTE) && le(Te);
    const I2 = e6.attributes.get(e4.POSITION), R3 = e6.attributes.get(e4.SIZE), x3 = e6.attributes.get(e4.NORMAL), C2 = e6.attributes.get(e4.ROTATION), P2 = e6.attributes.get(e4.CENTEROFFSETANDDISTANCE);
    s4(I2.size >= 3);
    const D = U(A4), y2 = "screen" === this.parameters.centerOffsetUnits;
    for (let s6 = 0; s6 < I2.data.length / I2.size; s6++) {
      const e7 = s6 * I2.size;
      o2(pe, I2.data[e7], I2.data[e7 + 1], I2.data[e7 + 2]), E2(pe, pe, t11), E2(pe, pe, b3.viewMatrix);
      const a6 = s6 * P2.size;
      if (o2(Ae, P2.data[a6], P2.data[a6 + 1], P2.data[a6 + 2]), !y2 && (pe[0] += Ae[0], pe[1] += Ae[1], 0 !== Ae[2])) {
        const e8 = Ae[2];
        A2(Ae, pe), c2(pe, pe, g2(Ae, Ae, e8));
      }
      const o10 = s6 * x3.size;
      if (o2(ue, x3.data[o10], x3.data[o10 + 1], x3.data[o10 + 2]), ce(ue, Te, b3, Ie), this._applyVerticalOffsetTransformationView(pe, Ie, b3, he), b3.applyProjection(pe, me), me[0] > -1) {
        y2 && (Ae[0] || Ae[1]) && (me[0] += Ae[0] * b3.pixelRatio, 0 !== Ae[1] && (me[1] += m3(Ae[1], he.factorAlignment) * b3.pixelRatio), b3.unapplyProjection(me, pe)), me[0] += this.parameters.screenOffset[0] * b3.pixelRatio, me[1] += this.parameters.screenOffset[1] * b3.pixelRatio, me[0] = Math.floor(me[0]), me[1] = Math.floor(me[1]);
        const e8 = s6 * R3.size;
        Ce[0] = R3.data[e8], Ce[1] = R3.data[e8 + 1], p2(Ce, he.factor, Ce);
        const t12 = Re * b3.pixelRatio;
        let a7 = 0;
        if (A4.textureIsSignedDistanceField) {
          a7 = Math.min(A4.outlineSize, 0.5 * Ce[0]) * b3.pixelRatio / 2;
        }
        Ce[0] *= E5, Ce[1] *= _2;
        const o11 = s6 * C2.size, c5 = A4.rotation + C2.data[o11];
        if (fe(T2, me[0], me[1], Ce, t12, a7, c5, A4, D)) {
          const e9 = i5.ray;
          if (E2(ge, pe, h(ve, b3.viewMatrix)), me[0] = T2[0], me[1] = T2[1], b3.unprojectFromRenderScreen(me, pe)) {
            const t13 = n2();
            s3(t13, e9.direction);
            const s7 = 1 / r5(t13);
            g2(t13, t13, s7);
            n14(p(e9.origin, pe) * s7, t13, -1, true, 1, ge);
          }
        }
      }
    }
  }
  intersectDraped(e6, t11, s6, i5, r14, a5) {
    const o9 = e6.attributes.get(e4.POSITION), n14 = e6.attributes.get(e4.SIZE), c4 = e6.attributes.get(e4.ROTATION), l3 = this.parameters, f5 = U(l3), { scaleX: h3, scaleY: p6 } = this._getScreenScale(e6, e6.screenToWorldRatio), u6 = xe * e6.screenToWorldRatio;
    for (let m4 = 0; m4 < o9.data.length / o9.size; m4++) {
      const t12 = m4 * o9.size, s7 = o9.data[t12], d6 = o9.data[t12 + 1], g4 = m4 * n14.size;
      Ce[0] = n14.data[g4], Ce[1] = n14.data[g4 + 1];
      let O3 = 0;
      if (l3.textureIsSignedDistanceField) {
        O3 = Math.min(l3.outlineSize, 0.5 * Ce[0]) * e6.screenToWorldRatio / 2;
      }
      Ce[0] *= h3, Ce[1] *= p6;
      const S2 = m4 * c4.size, T2 = l3.rotation + c4.data[S2];
      fe(i5, s7, d6, Ce, u6, O3, T2, l3, f5) && r14(a5.dist, a5.normal, -1, false);
    }
  }
  createBufferWriter() {
    return new je();
  }
  _updateScaleInfo(e6, t11, s6) {
    const i5 = this.parameters;
    null != i5.screenSizePerspective ? d3(s6, t11, i5.screenSizePerspective, e6.factor) : (e6.factor.scale = 1, e6.factor.factor = 0, e6.factor.minScaleFactor = 0), null != i5.screenSizePerspectiveAlignment ? d3(s6, t11, i5.screenSizePerspectiveAlignment, e6.factorAlignment) : (e6.factorAlignment.factor = e6.factor.factor, e6.factorAlignment.scale = e6.factor.scale, e6.factorAlignment.minScaleFactor = e6.factor.minScaleFactor);
  }
  applyShaderOffsetsView(e6, t11, s6, i5, r14, a5, o9) {
    const n14 = ce(t11, s6, r14, Ie);
    return this._applyVerticalGroundOffsetView(e6, n14, r14, o9), this._applyVerticalOffsetTransformationView(o9, n14, r14, a5), this._applyPolygonOffsetView(o9, n14, i5[3], r14, o9), this._applyCenterOffsetView(o9, i5, o9), o9;
  }
  applyShaderOffsetsNDC(e6, t11, s6, i5, r14) {
    return this._applyCenterOffsetNDC(e6, t11, s6, i5), null != r14 && s3(r14, i5), this._applyPolygonOffsetNDC(i5, t11, s6, i5), i5;
  }
  _applyPolygonOffsetView(t11, s6, i5, r14, a5) {
    const o9 = r14.aboveGround ? 1 : -1;
    let n14 = Math.sign(i5);
    0 === n14 && (n14 = o9);
    const c4 = o9 * n14;
    if (this.parameters.shaderPolygonOffset <= 0) return s3(a5, t11);
    const l3 = r2(Math.abs(s6.cosAngle), 0.01, 1), f5 = 1 - Math.sqrt(1 - l3 * l3) / l3 / r14.viewport[2];
    return g2(a5, t11, c4 > 0 ? f5 : 1 / f5), a5;
  }
  _applyVerticalGroundOffsetView(e6, t11, s6, i5) {
    const r14 = r5(e6), a5 = s6.aboveGround ? 1 : -1, o9 = s6.computeRenderPixelSizeAtDist(r14) * d5, n14 = g2(pe, t11.normal, a5 * o9);
    return u3(i5, e6, n14), i5;
  }
  _applyVerticalOffsetTransformationView(e6, t11, s6, i5) {
    var _a;
    const r14 = this.parameters;
    if (!((_a = r14.verticalOffset) == null ? void 0 : _a.screenLength)) {
      if (r14.screenSizePerspective || r14.screenSizePerspectiveAlignment) {
        const s7 = r5(e6);
        this._updateScaleInfo(i5, s7, t11.cosAngle);
      } else i5.factor.scale = 1, i5.factorAlignment.scale = 1;
      return e6;
    }
    const a5 = r5(e6), o9 = r14.screenSizePerspectiveAlignment ?? r14.screenSizePerspective, n14 = i(s6, a5, r14.verticalOffset, t11.cosAngle, o9);
    return this._updateScaleInfo(i5, a5, t11.cosAngle), g2(t11.normal, t11.normal, n14), u3(e6, e6, t11.normal);
  }
  _applyCenterOffsetView(e6, t11, s6) {
    const i5 = "screen" !== this.parameters.centerOffsetUnits;
    return s6 !== e6 && s3(s6, e6), i5 && (s6[0] += t11[0], s6[1] += t11[1], t11[2] && (A2(ue, s6), u3(s6, s6, g2(ue, ue, t11[2])))), s6;
  }
  _applyCenterOffsetNDC(e6, t11, s6, i5) {
    const r14 = "screen" !== this.parameters.centerOffsetUnits;
    return i5 !== e6 && s3(i5, e6), r14 || (i5[0] += t11[0] / s6.fullWidth * 2, i5[1] += t11[1] / s6.fullHeight * 2), i5;
  }
  _applyPolygonOffsetNDC(e6, t11, s6, i5) {
    const r14 = this.parameters.shaderPolygonOffset;
    if (e6 !== i5 && s3(i5, e6), r14) {
      const e7 = s6.aboveGround ? 1 : -1, a5 = e7 * Math.sign(t11[3]);
      i5[2] -= (a5 || e7) * r14;
    }
    return i5;
  }
  set visible(e6) {
    this._visible = e6;
  }
  get visible() {
    const { color: e6, outlineSize: t11, outlineColor: s6 } = this.parameters, i5 = e6[3] >= o6 || t11 >= o6 && s6[3] >= o6;
    return this._visible && i5;
  }
  createGLMaterial(e6) {
    return new oe(e6);
  }
  calculateRelativeScreenBounds(e6, t11, s6 = u()) {
    return ne(this.parameters, e6, t11, s6), s6[2] = s6[0] + e6[0], s6[3] = s6[1] + e6[1], s6;
  }
  _getScreenScale(e6, t11) {
    const s6 = e6.attributes.get(e4.FEATUREATTRIBUTE);
    if (null == s6) return { scaleX: t11, scaleY: t11 };
    const i5 = u2(s6.data, _e);
    return W(Ee, this.parameters, i5), { scaleX: Ee[0] * t11, scaleY: Ee[1] * t11 };
  }
};
var oe = class extends r7 {
  constructor(e6) {
    super({ ...e6, ...e6.material.parameters });
  }
  beginSlot(e6) {
    return this.updateTexture(this._material.parameters.textureId), this._material.setParameters(this.textureBindParameters), this.getTechnique(h2, e6);
  }
};
function ne(e6, t11, s6, i5) {
  i5[0] = e6.anchorPosition[0] * -t11[0] + e6.screenOffset[0] * s6, i5[1] = e6.anchorPosition[1] * -t11[1] + e6.screenOffset[1] * s6;
}
function ce(e6, t11, i5, r14) {
  return t4(t11) && (t11 = n6(be, t11)), N(r14.normal, e6, t11), E2(r14.normal, r14.normal, i5.viewInverseTransposeMatrix), r14.cosAngle = P(de, Pe), r14;
}
function le(e6) {
  const t11 = e6[0], s6 = e6[1], i5 = e6[2], r14 = e6[3], a5 = e6[4], o9 = e6[5], n14 = e6[6], c4 = e6[7], l3 = e6[8], f5 = 1 / Math.sqrt(t11 * t11 + s6 * s6 + i5 * i5), h3 = 1 / Math.sqrt(r14 * r14 + a5 * a5 + o9 * o9), p6 = 1 / Math.sqrt(n14 * n14 + c4 * c4 + l3 * l3);
  return e6[0] = t11 * f5, e6[1] = s6 * f5, e6[2] = i5 * f5, e6[3] = r14 * h3, e6[4] = a5 * h3, e6[5] = o9 * h3, e6[6] = n14 * p6, e6[7] = c4 * p6, e6[8] = l3 * p6, e6;
}
function fe(e6, s6, i5, r14, a5, c4, l3, f5, h3) {
  let p6 = s6 - a5 - r14[0] * h3[0], u6 = p6 + r14[0] + 2 * a5, m4 = i5 - a5 - r14[1] * h3[1], d6 = m4 + r14[1] + 2 * a5;
  const g4 = f5.distanceFieldBoundingBox;
  return f5.textureIsSignedDistanceField && null != g4 && (p6 += r14[0] * g4[0], m4 += r14[1] * g4[1], u6 -= r14[0] * (1 - g4[2]), d6 -= r14[1] * (1 - g4[3]), p6 -= c4, u6 += c4, m4 -= c4, d6 += c4), o3(Se, s6, i5), I(Oe, e6, Se, s(l3)), Oe[0] > p6 && Oe[0] < u6 && Oe[1] > m4 && Oe[1] < d6;
}
var he = new t5();
var pe = n2();
var ue = n2();
var me = n4();
var de = n2();
var ge = n2();
var Oe = n5();
var Se = n5();
var Te = e3();
var be = e3();
var ve = e2();
var Ae = n2();
var Ee = n2();
var _e = n4();
var Ie = { normal: de, cosAngle: 0 };
var Re = 1;
var xe = 2;
var Ce = [0, 0];
var Pe = r3(0, 0, 1);
var De = class extends n9 {
  constructor() {
    super(...arguments), this.renderOccluded = p3.Occlude, this.isDecoration = false, this.color = e(1, 1, 1, 1), this.polygonOffset = false, this.anchorPosition = t(0.5, 0.5), this.screenOffset = [0, 0], this.shaderPolygonOffset = 1e-5, this.textureIsSignedDistanceField = false, this.sampleSignedDistanceFieldTexelCenter = false, this.outlineColor = e(1, 1, 1, 1), this.outlineSize = 0, this.distanceFieldBoundingBox = n4(), this.rotation = 0, this.hasRotation = false, this.vvSizeEnabled = false, this.vvSize = null, this.vvColor = null, this.vvOpacity = null, this.vvSymbolAnchor = null, this.vvSymbolRotationMatrix = null, this.hasSlicePlane = false, this.pixelSnappingEnabled = true, this.occlusionTest = true, this.occludedFragmentFade = false, this.horizonCullingEnabled = false, this.centerOffsetUnits = "world", this.drawAsLabel = false, this.depthEnabled = true, this.isFocused = true, this.focusEffect = "none", this.draped = false, this.isLabel = false;
  }
};
var ye = H2().vec3f(e4.POSITION).vec3f(e4.NORMAL).vec2f(e4.UV0).vec4u8(e4.COLOR).vec2f(e4.SIZE).f32(e4.ROTATION).vec4f(e4.CENTEROFFSETANDDISTANCE).vec4f(e4.FEATUREATTRIBUTE);
var Fe = ye.clone().vec4u8(e4.OBJECTANDLAYERIDCOLOR);
var je = class {
  constructor() {
    this.vertexBufferLayout = e5() ? Fe : ye;
  }
  elementCount(e6) {
    return 6 * e6.get(e4.POSITION).indices.length;
  }
  write(e6, t11, s6, i5, r14, a5) {
    var _a, _b;
    b2(s6.get(e4.POSITION), e6, r14.position, a5, 6), O2(s6.get(e4.NORMAL), t11, r14.normal, a5, 6);
    const o9 = (_a = s6.get(e4.UV0)) == null ? void 0 : _a.data;
    let n14 = 0, c4 = 0, l3 = 1, f5 = 1;
    o9 && o9.length >= 4 && (n14 = o9[0], c4 = o9[1], l3 = o9[2], f5 = o9[3]), l3 = Math.min(1.99999, l3 + 1), f5 = Math.min(1.99999, f5 + 1);
    let h3 = s6.get(e4.POSITION).indices.length, p6 = a5;
    const u6 = r14.uv0;
    for (let O3 = 0; O3 < h3; ++O3) u6.set(p6, 0, n14), u6.set(p6, 1, c4), p6++, u6.set(p6, 0, l3), u6.set(p6, 1, c4), p6++, u6.set(p6, 0, l3), u6.set(p6, 1, f5), p6++, u6.set(p6, 0, l3), u6.set(p6, 1, f5), p6++, u6.set(p6, 0, n14), u6.set(p6, 1, f5), p6++, u6.set(p6, 0, n14), u6.set(p6, 1, c4), p6++;
    S(s6.get(e4.COLOR), 4, r14.color, a5, 6);
    const { data: m4, indices: d6 } = s6.get(e4.SIZE);
    h3 = d6.length;
    const g4 = r14.size;
    p6 = a5;
    for (let O3 = 0; O3 < h3; ++O3) {
      const e7 = m4[2 * d6[O3]], t12 = m4[2 * d6[O3] + 1];
      for (let s7 = 0; s7 < 6; ++s7) g4.set(p6, 0, e7), g4.set(p6, 1, t12), p6++;
    }
    if (d4(s6.get(e4.ROTATION), r14.rotation, a5, 6), s6.get(e4.CENTEROFFSETANDDISTANCE) ? p5(s6.get(e4.CENTEROFFSETANDDISTANCE), r14.centerOffsetAndDistance, a5, 6) : B2(r14.centerOffsetAndDistance, a5, 6 * h3), s6.get(e4.FEATUREATTRIBUTE) ? p5(s6.get(e4.FEATUREATTRIBUTE), r14.featureAttribute, a5, 6) : B2(r14.featureAttribute, a5, 6 * h3), null != i5) {
      const e7 = (_b = s6.get(e4.POSITION)) == null ? void 0 : _b.indices;
      if (e7) {
        const t12 = e7.length, s7 = r14.getField(e4.OBJECTANDLAYERIDCOLOR, x2);
        R2(i5, s7, t12, a5, 6);
      }
    }
  }
};

// node_modules/@arcgis/core/geometry/projection/projectVectorToPoint.js
function t6(r14, e6, t11) {
  return !!n7(r14, e6, i4, t11.spatialReference) && (t11.x = i4[0], t11.y = i4[1], t11.z = i4[2], true);
}
var i4 = n2();

// node_modules/@arcgis/core/views/3d/webgl-engine/effects/RenderPlugin.js
var t7 = { required: [] };
var s5 = { required: [n8.Depth] };
var n12 = class extends g {
  precompile(e6) {
    return !!this.acquireTechniques(e6);
  }
  consumes() {
    return t7;
  }
  get usedMemory() {
    return 0;
  }
  get isDecoration() {
    return false;
  }
  get running() {
    return false;
  }
  modify(e6) {
  }
  get numGeometries() {
    return 0;
  }
  get hasOccludees() {
    return false;
  }
  get hasEmissions() {
    return false;
  }
  forEachGeometry(e6) {
  }
  queryRenderOccludedState(e6) {
    return false;
  }
};
var u5 = class extends n12 {
};
var o8 = class extends n12 {
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/fov.js
function t8(t11, a5, n14) {
  return 2 * Math.atan(Math.sqrt(a5 * a5 + n14 * n14) * Math.tan(0.5 * t11) / a5);
}
function a4(t11, a5, n14) {
  return 2 * Math.atan(Math.sqrt(a5 * a5 + n14 * n14) * Math.tan(0.5 * t11) / n14);
}
function n13(t11, a5, n14) {
  return 2 * Math.atan(a5 * Math.tan(0.5 * t11) / Math.sqrt(a5 * a5 + n14 * n14));
}
function r10(t11, a5, n14) {
  return 2 * Math.atan(n14 * Math.tan(0.5 * t11) / Math.sqrt(a5 * a5 + n14 * n14));
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/rendererUtils.js
var r12;
var t10;
!function(e6) {
  e6[e6.Default = 0] = "Default", e6[e6.Screenshot = 1] = "Screenshot", e6[e6.ObjectAndLayerID = 2] = "ObjectAndLayerID";
}(r12 || (r12 = {})), function(e6) {
  e6[e6.TOP = 0] = "TOP", e6[e6.RIGHT = 1] = "RIGHT", e6[e6.BOTTOM = 2] = "BOTTOM", e6[e6.LEFT = 3] = "LEFT";
}(t10 || (t10 = {}));

// node_modules/@arcgis/core/views/3d/webgl/RenderCamera.js
var $;
var tt = $ = class extends g {
  constructor(t11) {
    super(t11), this._ray = b(), this._viewport = r4(0, 0, 1, 1), this._padding = r4(0, 0, 0, 0), this._fov = 55 / 180 * Math.PI, this._nearFar = t(1, 1e3), this._viewDirty = true, this._viewMatrix = e2(), this._viewProjectionDirty = true, this._viewProjectionMatrix = e2(), this._viewInverseTransposeMatrixDirty = true, this._viewInverseTransposeMatrix = e2(), this._frustumDirty = true, this._frustum = H3(), this._fullViewport = n4(), this._pixelRatio = 1, this.row = 0, this.column = 0, this._rows = 1, this._columns = 1, this._center = n2(), this._up = n2(), this.relativeElevation = 0;
  }
  get pixelRatio() {
    return this._pixelRatio;
  }
  set pixelRatio(t11) {
    this._pixelRatio = t11 > 0 ? t11 : 1;
  }
  get rows() {
    return this._rows;
  }
  set rows(t11) {
    this._rows = Math.max(1, t11);
  }
  get columns() {
    return this._columns;
  }
  set columns(t11) {
    this._columns = Math.max(1, t11);
  }
  get eye() {
    return this._ray.origin;
  }
  set eye(t11) {
    this._compareAndSetView(t11, this._ray.origin);
  }
  get center() {
    return this._center;
  }
  set center(t11) {
    this._compareAndSetView(t11, this._center, "_center");
  }
  get ray() {
    return c2(this._ray.direction, this.center, this.eye), this._ray;
  }
  get up() {
    return this._up;
  }
  set up(t11) {
    this._compareAndSetView(t11, this._up, "_up");
  }
  get viewMatrix() {
    return this._ensureViewClean(), this._viewMatrix;
  }
  set viewMatrix(t11) {
    n3(this._viewMatrix, t11), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get viewForward() {
    return this._ensureViewClean(), o2(n2(), -this._viewMatrix[2], -this._viewMatrix[6], -this._viewMatrix[10]);
  }
  get viewUp() {
    return this._ensureViewClean(), o2(n2(), this._viewMatrix[1], this._viewMatrix[5], this._viewMatrix[9]);
  }
  get viewRight() {
    return this._ensureViewClean(), o2(n2(), this._viewMatrix[0], this._viewMatrix[4], this._viewMatrix[8]);
  }
  get nearFar() {
    return this._nearFar;
  }
  get near() {
    return this._nearFar[0];
  }
  set near(t11) {
    this._nearFar[0] !== t11 && (this._nearFar[0] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get far() {
    return this._nearFar[1];
  }
  set far(t11) {
    this._nearFar[1] !== t11 && (this._nearFar[1] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_nearFar"));
  }
  get viewport() {
    return this._viewport;
  }
  set viewport(t11) {
    this.x = t11[0], this.y = t11[1], this.width = t11[2], this.height = t11[3];
  }
  get screenViewport() {
    if (1 === this.pixelRatio) return this._viewport;
    const t11 = m2(n4(), this._viewport, 1 / this.pixelRatio), i5 = this._get("screenViewport");
    return i5 && L(t11, i5) ? i5 : t11;
  }
  get screenPadding() {
    if (1 === this.pixelRatio) return this._padding;
    const t11 = m2(n4(), this._padding, 1 / this.pixelRatio), i5 = this._get("screenPadding");
    return i5 && L(t11, i5) ? i5 : t11;
  }
  get x() {
    return this._viewport[0];
  }
  set x(t11) {
    t11 += this._padding[t10.LEFT], this._viewport[0] !== t11 && (this._viewport[0] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get y() {
    return this._viewport[1];
  }
  set y(t11) {
    t11 += this._padding[t10.BOTTOM], this._viewport[1] !== t11 && (this._viewport[1] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get width() {
    return this._viewport[2];
  }
  set width(t11) {
    this._viewport[2] !== t11 && (this._viewport[2] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get height() {
    return this._viewport[3];
  }
  set height(t11) {
    this._viewport[3] !== t11 && (this._viewport[3] = t11, this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_viewport"));
  }
  get fullWidth() {
    return this._viewport[2] + this._padding[t10.RIGHT] + this._padding[t10.LEFT];
  }
  set fullWidth(t11) {
    this.width = t11 - (this._padding[t10.RIGHT] + this._padding[t10.LEFT]);
  }
  get fullHeight() {
    return this._viewport[3] + this._padding[t10.TOP] + this._padding[t10.BOTTOM];
  }
  set fullHeight(t11) {
    this.height = t11 - (this._padding[t10.TOP] + this._padding[t10.BOTTOM]);
  }
  get fullViewport() {
    return this._fullViewport[0] = this._viewport[0] - this._padding[t10.LEFT], this._fullViewport[1] = this._viewport[1] - this._padding[t10.BOTTOM], this._fullViewport[2] = this.fullWidth, this._fullViewport[3] = this.fullHeight, this._fullViewport;
  }
  get _aspect() {
    return this.width / this.height;
  }
  get padding() {
    return this._padding;
  }
  set padding(t11) {
    E(this._padding, t11) || (this._viewport[0] += t11[t10.LEFT] - this._padding[t10.LEFT], this._viewport[1] += t11[t10.BOTTOM] - this._padding[t10.BOTTOM], this._viewport[2] -= t11[t10.RIGHT] + t11[t10.LEFT] - (this._padding[t10.RIGHT] + this._padding[t10.LEFT]), this._viewport[3] -= t11[t10.TOP] + t11[t10.BOTTOM] - (this._padding[t10.TOP] + this._padding[t10.BOTTOM]), a2(this._padding, t11), this._viewProjectionDirty = true, this._frustumDirty = true, this.notifyChange("_padding"), this.notifyChange("_viewport"));
  }
  get viewProjectionMatrix() {
    return this._viewProjectionDirty && (c(this._viewProjectionMatrix, this.projectionMatrix, this.viewMatrix), this._viewProjectionDirty = false), this._viewProjectionMatrix;
  }
  get projectionMatrix() {
    return this._projectionMatrixInternal;
  }
  get inverseProjectionMatrix() {
    return h(e2(), this.projectionMatrix) || this._get("inverseProjectionMatrix") || e2();
  }
  get fov() {
    return this._fov;
  }
  set fov(t11) {
    this._fov = t11, this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovX() {
    return n13(this._fov, this.width, this.height);
  }
  set fovX(t11) {
    this._fov = t8(t11, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get fovY() {
    return r10(this._fov, this.width, this.height);
  }
  set fovY(t11) {
    this._fov = a4(t11, this.width, this.height), this._viewProjectionDirty = true, this._frustumDirty = true;
  }
  get distance() {
    return p(this.center, this.eye);
  }
  get frustum() {
    return this._recomputeFrustum(), this._frustum;
  }
  get viewInverseTransposeMatrix() {
    return (this._viewInverseTransposeMatrixDirty || this._viewDirty) && (h(this._viewInverseTransposeMatrix, this.viewMatrix), s2(this._viewInverseTransposeMatrix, this._viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), this._viewInverseTransposeMatrix;
  }
  depthNDCToWorld(t11) {
    const { near: i5, far: e6 } = this;
    return 2 * i5 * e6 / (e6 + i5 - t11 * (e6 - i5));
  }
  get perRenderPixelRatio() {
    return Math.tan(this.fovX / 2) / (this.width / 2);
  }
  get perScreenPixelRatio() {
    return this.perRenderPixelRatio * this.pixelRatio;
  }
  get aboveGround() {
    return null != this.relativeElevation && this.relativeElevation >= 0;
  }
  get _projectionMatrixInternal() {
    const t11 = this.width, i5 = this.height, e6 = this.near * Math.tan(this.fovY / 2) * 2, r14 = e6 * this._aspect, s6 = e6 / this.rows, o9 = r14 / this.columns, n14 = -r14 / 2 + this.column * o9, h3 = n14 + o9, a5 = -e6 / 2 + this.row * s6, p6 = a5 + s6, u6 = A(e2(), n14 * (1 + 2 * this._padding[t10.LEFT] / t11), h3 * (1 + 2 * this._padding[t10.RIGHT] / t11), a5 * (1 + 2 * this._padding[t10.BOTTOM] / i5), p6 * (1 + 2 * this._padding[t10.TOP] / i5), this.near, this.far), l3 = this._get("projectionMatrix");
    return l3 && C(l3, u6) ? l3 : u6;
  }
  copyFrom(t11) {
    s3(this._ray.origin, t11.eye), this.center = t11.center, this.up = t11.up, a2(this._viewport, t11.viewport), this.notifyChange("_viewport"), a2(this._padding, t11.padding), this.notifyChange("_padding"), r6(this._nearFar, t11.nearFar), this.notifyChange("_nearFar"), this._fov = t11.fov, this.row = t11.row, this.column = t11.column, this.rows = t11.rows, this.columns = t11.columns, this.relativeElevation = t11.relativeElevation;
    const i5 = t11;
    return this._viewDirty = i5._viewDirty, this._viewDirty || (n3(this._viewMatrix, t11.viewMatrix), this.notifyChange("_viewMatrix")), this._viewProjectionDirty = true, this._frustumDirty = i5._frustumDirty, this._frustumDirty || (N2(this._frustum, t11.frustum), this._frustumDirty = false), i5._viewInverseTransposeMatrixDirty ? this._viewInverseTransposeMatrixDirty = true : (n3(this._viewInverseTransposeMatrix, t11.viewInverseTransposeMatrix), this._viewInverseTransposeMatrixDirty = false), a2(this._fullViewport, t11.fullViewport), this.pixelRatio = t11.pixelRatio, this;
  }
  copyViewFrom(t11) {
    this.eye = t11.eye, this.center = t11.center, this.up = t11.up, this.fov = t11.fov;
  }
  clone() {
    return new $().copyFrom(this);
  }
  equals(t11) {
    return H(this.eye, t11.eye) && H(this.center, t11.center) && H(this.up, t11.up) && E(this._viewport, t11.viewport) && E(this._padding, t11.padding) && E3(this.nearFar, t11.nearFar) && this._fov === t11.fov && this.pixelRatio === t11.pixelRatio && this.relativeElevation === t11.relativeElevation && this.row === t11.row && this.column === t11.column && this.rows === t11.rows && this.columns === t11.columns;
  }
  almostEquals(t11) {
    const i5 = Math.max(1, 1 / this.pixelRatio, 1 / t11.pixelRatio);
    if (Math.abs(t11.fov - this._fov) >= 1e-3 || x(t11.screenPadding, this.screenPadding) >= i5 || x(this.screenViewport, t11.screenViewport) >= i5 || this.row !== t11.row || this.column !== t11.column || this.rows !== t11.rows || this.columns !== t11.columns) return false;
    R(st, t11.eye, t11.center), R(ot, this.eye, this.center);
    const e6 = P(st, ot), r14 = Z(st), s6 = Z(ot), o9 = 5e-4;
    return e6 * e6 >= (1 - 1e-10) * r14 * s6 && X2(t11.eye, this.eye) < Math.max(r14, s6) * o9 * o9;
  }
  computeRenderPixelSizeAt(t11) {
    return this.computeRenderPixelSizeAtDist(this._viewDirectionDistance(t11));
  }
  computeRenderPixelSizeAtDist(t11) {
    return t11 * this.perRenderPixelRatio;
  }
  computeScreenPixelSizeAt(t11) {
    return this.computeScreenPixelSizeAtDist(this._viewDirectionDistance(t11));
  }
  _viewDirectionDistance(t11) {
    return Math.abs(f2(this.viewForward, c2(st, t11, this.eye)));
  }
  computeScreenPixelSizeAtDist(t11) {
    return t11 * this.perScreenPixelRatio;
  }
  computeDistanceFromRadius(t11, i5) {
    return t11 / Math.tan(Math.min(this.fovX, this.fovY) / (2 * (i5 || 1)));
  }
  getScreenCenter(t11 = f()) {
    return t11[0] = (this.padding[t10.LEFT] + this.width / 2) / this.pixelRatio, t11[1] = (this.padding[t10.TOP] + this.height / 2) / this.pixelRatio, t11;
  }
  getRenderCenter(t11, i5 = 0.5, e6 = 0.5) {
    return t11[0] = this.padding[t10.LEFT] + this.width * i5, t11[1] = this.padding[t10.BOTTOM] + this.height * e6, t11[2] = 0.5, t11;
  }
  setGLViewport(t11) {
    const i5 = this.viewport, e6 = this.padding;
    t11.setViewport(i5[0] - e6[3], i5[1] - e6[2], i5[2] + e6[1] + e6[3], i5[3] + e6[0] + e6[2]);
  }
  applyProjection(t11, i5) {
    t11 !== et && s3(et, t11), et[3] = 1, z(et, et, this.projectionMatrix);
    const e6 = Math.abs(et[3]);
    g2(et, et, 1 / e6);
    const s6 = this.fullViewport;
    i5[0] = o(0, s6[0] + s6[2], 0.5 + 0.5 * et[0]), i5[1] = o(0, s6[1] + s6[3], 0.5 + 0.5 * et[1]), i5[2] = 0.5 * (et[2] + 1), i5[3] = e6;
  }
  unapplyProjection(t11, i5) {
    const e6 = this.fullViewport;
    et[0] = (t11[0] / (e6[0] + e6[2]) * 2 - 1) * t11[3], et[1] = (t11[1] / (e6[1] + e6[3]) * 2 - 1) * t11[3], et[2] = (2 * t11[2] - 1) * t11[3], et[3] = t11[3], null != this.inverseProjectionMatrix && (z(et, et, this.inverseProjectionMatrix), i5[0] = et[0], i5[1] = et[1], i5[2] = et[2]);
  }
  projectToScreen(t11, i5) {
    return this.projectToRenderScreen(t11, nt), this.renderToScreen(nt, i5), i5;
  }
  projectToRenderScreen(t11, i5) {
    if (et[0] = t11[0], et[1] = t11[1], et[2] = t11[2], et[3] = 1, z(et, et, this.viewProjectionMatrix), 0 === et[3]) return null;
    const e6 = et;
    g2(e6, e6, 1 / Math.abs(et[3]));
    const s6 = this.fullViewport, o9 = o(0, s6[0] + s6[2], 0.5 + 0.5 * e6[0]), n14 = o(0, s6[1] + s6[3], 0.5 + 0.5 * e6[1]);
    return "x" in i5 ? (i5.x = o9, i5.y = n14) : (i5[0] = o9, i5[1] = n14, i5.length > 2 && (i5[2] = 0.5 * (e6[2] + 1))), i5;
  }
  unprojectFromScreen(t11, i5) {
    return this.unprojectFromRenderScreen(this.screenToRender(t11, nt), i5);
  }
  unprojectFromRenderScreen(t11, i5) {
    if (c(rt, this.projectionMatrix, this.viewMatrix), !h(rt, rt)) return null;
    const e6 = this.fullViewport;
    return et[0] = 2 * (t11[0] - e6[0]) / e6[2] - 1, et[1] = 2 * (t11[1] - e6[1]) / e6[3] - 1, et[2] = 2 * t11[2] - 1, et[3] = 1, z(et, et, rt), 0 === et[3] ? null : (i5[0] = et[0] / et[3], i5[1] = et[1] / et[3], i5[2] = et[2] / et[3], i5);
  }
  constrainWindowSize(t11, i5, e6, r14) {
    const s6 = t11 * this.pixelRatio, o9 = i5 * this.pixelRatio, n14 = Math.max(s6 - e6 / 2, 0), h3 = Math.max(this.fullHeight - o9 - r14 / 2, 0), a5 = -Math.min(s6 - e6 / 2, 0), p6 = -Math.min(this.fullHeight - o9 - r14 / 2, 0), u6 = e6 - a5 - -Math.min(this.fullWidth - s6 - e6 / 2, 0), l3 = r14 - p6 - -Math.min(o9 - r14 / 2, 0);
    return [Math.round(n14), Math.round(h3), Math.round(u6), Math.round(l3)];
  }
  computeUp(t11) {
    t11 === l.Global ? this._computeUpGlobal() : this._computeUpLocal();
  }
  screenToRender(t11, i5) {
    const e6 = t11[0] * this.pixelRatio, r14 = this.fullHeight - t11[1] * this.pixelRatio;
    return i5[0] = e6, i5[1] = r14, i5;
  }
  renderToScreen(t11, i5) {
    const e6 = t11[0] / this.pixelRatio, r14 = (this.fullHeight - t11[1]) / this.pixelRatio;
    i5[0] = e6, i5[1] = r14;
  }
  _computeUpGlobal() {
    c2(st, this.center, this.eye);
    const t11 = r5(this.center);
    t11 < 1 ? (o2(this._up, 0, 0, 1), this._markViewDirty(), this.notifyChange("_up")) : Math.abs(P(st, this.center)) > 0.9999 * r5(st) * t11 || (_(this._up, st, this.center), _(this._up, this._up, st), A2(this._up, this._up), this.notifyChange("_up"), this._markViewDirty());
  }
  _computeUpLocal() {
    K(st, this.eye, this.center), Math.abs(st[2]) <= 0.9999 && (g2(st, st, st[2]), o2(this._up, -st[0], -st[1], 1 - st[2]), A2(this._up, this._up), this.notifyChange("_up"), this._markViewDirty());
  }
  _compareAndSetView(t11, i5, r14 = "") {
    "number" == typeof t11[0] && isFinite(t11[0]) && "number" == typeof t11[1] && isFinite(t11[1]) && "number" == typeof t11[2] && isFinite(t11[2]) ? H(t11, i5) || (s3(i5, t11), this._markViewDirty(), r14.length && this.notifyChange(r14)) : n.getLogger("esri.views.3d.webgl-engine.lib.RenderCamera").warn("RenderCamera vector contains invalid number, ignoring value");
  }
  _markViewDirty() {
    this._viewDirty = true, this._frustumDirty = true, this._viewProjectionDirty = true;
  }
  _recomputeFrustum() {
    this._frustumDirty && (L2(this.viewMatrix, this.projectionMatrix, this._frustum), this._frustumDirty = false);
  }
  _ensureViewClean() {
    this._viewDirty && (X(this._viewMatrix, this.eye, this.center, this.up), this.notifyChange("_viewMatrix"), this._viewDirty = false, this._viewInverseTransposeMatrixDirty = true);
  }
};
r([m()], tt.prototype, "_viewport", void 0), r([m()], tt.prototype, "_padding", void 0), r([m()], tt.prototype, "_fov", void 0), r([m()], tt.prototype, "_nearFar", void 0), r([m()], tt.prototype, "_viewDirty", void 0), r([m()], tt.prototype, "_viewMatrix", void 0), r([m()], tt.prototype, "_pixelRatio", void 0), r([m()], tt.prototype, "pixelRatio", null), r([m()], tt.prototype, "row", void 0), r([m()], tt.prototype, "column", void 0), r([m()], tt.prototype, "_rows", void 0), r([m()], tt.prototype, "rows", null), r([m()], tt.prototype, "_columns", void 0), r([m()], tt.prototype, "columns", null), r([m()], tt.prototype, "eye", null), r([m()], tt.prototype, "center", null), r([m()], tt.prototype, "_center", void 0), r([m()], tt.prototype, "up", null), r([m()], tt.prototype, "_up", void 0), r([m()], tt.prototype, "viewMatrix", null), r([m({ readOnly: true })], tt.prototype, "viewForward", null), r([m({ readOnly: true })], tt.prototype, "viewUp", null), r([m({ readOnly: true })], tt.prototype, "viewRight", null), r([m({ readOnly: true })], tt.prototype, "nearFar", null), r([m()], tt.prototype, "near", null), r([m()], tt.prototype, "far", null), r([m()], tt.prototype, "viewport", null), r([m({ readOnly: true })], tt.prototype, "screenViewport", null), r([m({ readOnly: true })], tt.prototype, "screenPadding", null), r([m()], tt.prototype, "x", null), r([m()], tt.prototype, "y", null), r([m()], tt.prototype, "width", null), r([m()], tt.prototype, "height", null), r([m()], tt.prototype, "fullWidth", null), r([m()], tt.prototype, "fullHeight", null), r([m({ readOnly: true })], tt.prototype, "_aspect", null), r([m()], tt.prototype, "padding", null), r([m({ readOnly: true })], tt.prototype, "projectionMatrix", null), r([m({ readOnly: true })], tt.prototype, "inverseProjectionMatrix", null), r([m()], tt.prototype, "fov", null), r([m()], tt.prototype, "fovX", null), r([m()], tt.prototype, "fovY", null), r([m()], tt.prototype, "viewInverseTransposeMatrix", null), r([m({ readOnly: true })], tt.prototype, "_projectionMatrixInternal", null), r([m()], tt.prototype, "relativeElevation", void 0), tt = $ = r([a("esri.views.3d.webgl.RenderCamera")], tt);
var it = tt;
var et = n4();
var rt = e2();
var st = n2();
var ot = n2();
var nt = y();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/VertexArrayObject.js
var r13 = class extends o7 {
};

export {
  u5 as u,
  o8 as o,
  it,
  r13 as r,
  ae,
  t6 as t
};
//# sourceMappingURL=chunk-G3BTTC3K.js.map
