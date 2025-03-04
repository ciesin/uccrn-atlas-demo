import {
  f as f4
} from "./chunk-ZBVCPQP5.js";
import {
  h as h2,
  m as m4,
  o as o3
} from "./chunk-QNB4N7PF.js";
import {
  N as N2
} from "./chunk-WHV4I2Y7.js";
import {
  d as d2,
  j as j3,
  k,
  w as w2,
  z as z2
} from "./chunk-QUEKTCSS.js";
import {
  f as f3
} from "./chunk-OTJBTCJE.js";
import {
  p as p4
} from "./chunk-SKW2R7G5.js";
import {
  B,
  E as E2,
  F,
  G as G2,
  O as O2,
  R,
  g as g3,
  h as h3,
  k as k2,
  nt,
  w as w3
} from "./chunk-RJYMNNKW.js";
import {
  a as a4,
  r as r4
} from "./chunk-U2TKRMQE.js";
import {
  c as c6
} from "./chunk-IWFYZGBP.js";
import {
  a as a5
} from "./chunk-H2PMLL3X.js";
import {
  m as m5
} from "./chunk-ZKPJPNLW.js";
import {
  c as c5,
  l,
  t as t2,
  u as u4
} from "./chunk-YINRFSE5.js";
import {
  a as a3,
  n as n4
} from "./chunk-A6DPK5GC.js";
import {
  b
} from "./chunk-HONYA6AI.js";
import {
  e as e3,
  r as r3
} from "./chunk-NOMJWA3C.js";
import {
  e
} from "./chunk-X5RZJMNW.js";
import {
  e as e2
} from "./chunk-K24WU5UX.js";
import {
  n as n5
} from "./chunk-LH36NQSN.js";
import {
  A,
  E,
  N,
  c as c4,
  g as g2,
  o as o2,
  u as u3,
  z
} from "./chunk-UMYFDXOJ.js";
import {
  L,
  c as c2,
  f,
  m as m2,
  t,
  u as u2
} from "./chunk-XEBZUAYT.js";
import {
  L as L2
} from "./chunk-4WERUJEK.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  D,
  I,
  O,
  c as c3,
  f as f2,
  p as p3
} from "./chunk-53ZTROGC.js";
import {
  _,
  n as n3,
  r as r2,
  s as s3
} from "./chunk-JLFSX3JT.js";
import {
  m as m3
} from "./chunk-CHL75CEP.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n as n2
} from "./chunk-YUVX6H42.js";
import {
  d,
  v
} from "./chunk-YSPSOPLL.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  p as p2
} from "./chunk-7LY6RE4Z.js";
import {
  G,
  Rt
} from "./chunk-F7TCEOHX.js";
import {
  m,
  p
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  c2 as c,
  g,
  h,
  s as s2,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/geometry/support/meshErrors.js
var t3 = "Mesh must be loaded before applying operations";
var e4 = "Provided component is not part of the list of components";
var n6 = "Expected polygon to be a Polygon instance";
var s4 = "Expected location to be a Point instance";
var i = class extends s {
  constructor() {
    super("invalid-input:location", s4);
  }
};

// node_modules/@arcgis/core/geometry/support/meshUtils/geographicUtils.js
function t4(o4, t5, i2, a7) {
  if (void 0 !== a7) {
    p(o4(), "option: geographic", { replacement: "Use mesh `vertexSpace` and spatial reference to control how operations are performed instead.", version: "4.30", warnOnce: true });
    const c9 = "local" === t5.type;
    if (!t2(t5) || a7 === c9) return i2.isGeographic || i2.isWebMercator && a7;
    o4().warnOnce(`Specifying the 'geographic' parameter (${a7}) for a Mesh vertex space of type "${t5.type}" is not supported. This parameter will be ignored.`);
  }
  switch (t5.type) {
    case "georeferenced":
      return i2.isGeographic;
    case "local":
      return i2.isGeographic || i2.isWebMercator;
  }
}

// node_modules/@arcgis/core/geometry/support/meshUtils/centerAt.js
var g4 = () => n.getLogger("esri.geometry.support.meshUtils.centerAt");
function u5(e5, t5, r5) {
  var _a;
  if (!((_a = e5.vertexAttributes) == null ? void 0 : _a.position)) return;
  const { vertexSpace: i2 } = e5, o4 = (r5 == null ? void 0 : r5.origin) ?? e5.origin, n7 = t4(g4, i2, o4.spatialReference, r5 == null ? void 0 : r5.geographic);
  t2(i2) ? x(e5, t5, o4) : n7 ? v2(e5, t5, o4) : R2(e5, t5, o4);
}
function x(e5, o4, s5) {
  const { vertexSpace: c9 } = e5;
  if (!t2(c9)) return;
  const f7 = h4, m8 = b2;
  if (!c6(o4, m8, e5.spatialReference)) return void F(g4(), o4.spatialReference, e5.spatialReference, O2);
  if (!c6(s5, f7, e5.spatialReference)) {
    const t5 = e5.origin;
    return f7[0] = t5.x, f7[1] = t5.y, f7[2] = t5.z, void F(g4(), s5.spatialReference, e5.spatialReference, O2);
  }
  const u9 = c4(A2, m8, f7);
  c9.origin = u3(n3(), c9.origin, u9);
}
function v2(e5, t5, r5) {
  const i2 = r2(r5.x, r5.y, r5.z ?? 0), n7 = B(e5, new a3({ origin: i2 }));
  if (!n7) return;
  const a7 = r2(t5.x, t5.y, t5.z ?? 0), f7 = B({ vertexAttributes: n7, spatialReference: e5.spatialReference, vertexSpace: new a3({ origin: a7 }) }, n4.absolute);
  if (!f7) return;
  const { position: p7, normal: l3, tangent: g7 } = f7;
  e5.vertexAttributes.position = p7, e5.vertexAttributes.normal = l3, e5.vertexAttributes.tangent = g7, e5.vertexAttributesChanged();
}
function R2(e5, t5, r5) {
  const i2 = h4, o4 = b2;
  if (c6(t5, o4, e5.spatialReference)) {
    if (!c6(r5, i2, e5.spatialReference)) {
      const t6 = e5.origin;
      return i2[0] = t6.x, i2[1] = t6.y, i2[2] = t6.z, void F(g4(), r5.spatialReference, e5.spatialReference, O2);
    }
    j4(e5.vertexAttributes.position, o4, i2), e5.vertexAttributesChanged();
  } else F(g4(), t5.spatialReference, e5.spatialReference, O2);
}
function j4(e5, t5, r5) {
  if (e5) for (let i2 = 0; i2 < e5.length; i2 += 3) for (let o4 = 0; o4 < 3; o4++) e5[i2 + o4] += t5[o4] - r5[o4];
}
var b2 = n3();
var h4 = n3();
var A2 = n3();

// node_modules/@arcgis/core/geometry/support/meshUtils/extent.js
function l2(r5) {
  const { spatialReference: f7, vertexSpace: l3, untransformedBounds: d5 } = r5, g7 = f(d5, u6);
  if (t2(l3) && r5.transform && r4(g7, g7, r5.transform.localMatrix), "georeferenced" === l3.type) {
    const r6 = l3.origin;
    return r6 && a4(g7, g7, r6), c2(m2(g7), f7);
  }
  const y3 = a5(f7), B3 = l3.origin;
  if (!L2(y3, f7)) {
    const [r6, t5, e5] = B3;
    return new w({ xmin: r6, ymin: t5, zmin: e5, xmax: r6, ymax: t5, zmax: e5, spatialReference: f7 });
  }
  return m5(f7, B3, x2, y3), r4(g7, g7, x2), o(g7, y3, 0, g7, f7, 0), c2(m2(g7), f7);
}
var x2 = e();
var u6 = t(24);

// node_modules/@arcgis/core/geometry/support/meshUtils/loadExternal.js
async function c7(e5, n7, r5) {
  const { source: o4 } = n7, { loadGLTFMesh: i2 } = await h(import("./loadGLTFMesh-CY2V7YD5.js"), r5), l3 = await f5(o4, r5);
  s2(r5);
  const c9 = i2(new j({ x: 0, y: 0, z: 0, spatialReference: e5.spatialReference }), l3.url, { resolveFile: u7(l3), signal: r5 == null ? void 0 : r5.signal, expectedType: l3.type, unitConversionDisabled: n7.unitConversionDisabled });
  c9.then(() => l3.dispose(), () => l3.dispose());
  const { vertexAttributes: m8, components: p7 } = await c9;
  e5.vertexAttributes = m8, e5.components = p7;
}
function u7(e5) {
  const t5 = Rt(e5.url);
  return (s5) => {
    const n7 = G(s5, t5, t5), r5 = n7 ? n7.replace(/^ *\.\//, "") : null;
    return (r5 ? e5.files.get(r5) : null) ?? s5;
  };
}
async function f5(t5, s5) {
  if (Array.isArray(t5)) {
    if (!t5.length) throw new s("mesh-load-external:missing-assets", "There must be at least one file to load");
    return t5[0] instanceof File ? y(t5) : h5(t5, s5);
  }
  return p5(t5);
}
async function m6(e5, t5) {
  const { parts: n7, assetMimeType: r5, assetName: o4 } = e5;
  if (1 === n7.length) return new v3(n7[0].partUrl);
  const i2 = await e5.toBlob(t5);
  return s2(t5), v3.fromBlob(i2, x3(o4, r5));
}
function p5(e5) {
  return v3.fromBlob(e5, x3(e5.name, e5.type));
}
function y(e5) {
  return j5(e5.map((e6) => ({ name: e6.name, mimeType: e6.type, source: p5(e6) })));
}
async function h5(e5, t5) {
  const i2 = await g(e5.map(async (e6) => {
    const n7 = await m6(e6);
    return s2(t5), { name: e6.assetName, mimeType: e6.assetMimeType, source: n7 };
  }));
  if (c(t5)) throw i2.forEach((e6) => e6.source.dispose()), u();
  return j5(i2);
}
var d3 = /^model\/gltf\+json$/;
var g5 = /^model\/gltf-binary$/;
var w4 = /\.gltf$/i;
var b3 = /\.glb$/i;
function T({ mimeType: e5, source: t5, name: s5 }) {
  return d3.test(e5) || w4.test(s5) ? { url: t5.url, type: "gltf" } : g5.test(e5) || b3.test(s5) ? { url: t5.url, type: "glb" } : null;
}
function j5(t5) {
  const s5 = /* @__PURE__ */ new Map();
  let n7 = null, r5 = null;
  for (const e5 of t5) {
    const { source: t6, name: o5 } = e5;
    n7 ?? (n7 = T(e5)), "ESRI3DO_NORM.glb" === o5 && (r5 = T(e5)), s5.set(o5, t6.url), t6.files.forEach((e6, t7) => s5.set(t7, e6));
  }
  const o4 = r5 ?? n7;
  if (null == o4) throw new s("mesh-load-external:missing-files", "Missing files to load external mesh source");
  return new v3(o4.url, () => t5.forEach(({ source: e5 }) => e5.dispose()), s5, o4.type);
}
var v3 = class _v {
  constructor(e5, t5 = () => {
  }, s5 = /* @__PURE__ */ new Map(), n7) {
    this.url = e5, this.dispose = t5, this.files = s5, this.type = n7;
  }
  static fromBlob(e5, t5) {
    const s5 = URL.createObjectURL(e5);
    return new _v(s5, () => URL.revokeObjectURL(s5), void 0, t5);
  }
};
function x3(e5, t5) {
  return d3.test(t5) || w4.test(e5) ? "gltf" : g5.test(t5) || w4.test(e5) ? "glb" : void 0;
}

// node_modules/@arcgis/core/geometry/support/meshUtils/Metadata.js
var a6 = class extends a2 {
  constructor(e5) {
    super(e5), this.externalSources = new V(), this._explicitDisplaySource = null, this.georeferenced = false, this.addHandles(v(() => this.externalSources, "after-remove", ({ item: e6 }) => {
      e6 === this._explicitDisplaySource && (this._explicitDisplaySource = null);
    }, { sync: true, onListenerRemove: () => this._explicitDisplaySource = null }));
  }
  get displaySource() {
    return this._explicitDisplaySource ?? this._implicitDisplaySource;
  }
  set displaySource(e5) {
    if (null != e5 && !o3(e5)) throw new Error("Cannot use this source for display: it is not in a supported format.");
    this._explicitDisplaySource = e5, e5 && this.externalSources.every((r5) => !h2(r5, e5)) && this.externalSources.add(e5);
  }
  clearSources() {
    this.externalSources.removeAll();
  }
  getExternalSourcesOnService(e5) {
    return this.externalSources.items.filter((r5) => m4(r5, e5));
  }
  get _implicitDisplaySource() {
    return this.externalSources.find(o3);
  }
};
r([m()], a6.prototype, "externalSources", void 0), r([m()], a6.prototype, "displaySource", null), r([m()], a6.prototype, "_implicitDisplaySource", null), r([m()], a6.prototype, "_explicitDisplaySource", void 0), r([m()], a6.prototype, "georeferenced", void 0), a6 = r([a("esri.geometry.support.meshUtils.Metadata")], a6);

// node_modules/@arcgis/core/geometry/support/meshUtils/primitives.js
function c8() {
  const { faceDescriptions: t5, faceVertexOffsets: e5, uvScales: r5 } = F2, n7 = 4 * t5.length, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i2 = new Uint32Array(2 * t5.length * 3);
  let l3 = 0, c9 = 0, f7 = 0, u9 = 0;
  for (let h7 = 0; h7 < t5.length; h7++) {
    const n8 = t5[h7], p7 = l3 / 3;
    for (const t6 of e5) i2[u9++] = p7 + t6;
    const m8 = n8.corners;
    for (let t6 = 0; t6 < 4; t6++) {
      const e6 = m8[t6];
      let i3 = 0;
      a7[f7++] = 0.25 * r5[t6][0] + n8.uvOrigin[0], a7[f7++] = n8.uvOrigin[1] - 0.25 * r5[t6][1];
      for (let t7 = 0; t7 < 3; t7++) 0 !== n8.axis[t7] ? (o4[l3++] = 0.5 * n8.axis[t7], s5[c9++] = n8.axis[t7]) : (o4[l3++] = 0.5 * e6[i3++], s5[c9++] = 0);
    }
  }
  return { position: o4, normal: s5, uv: a7, faces: i2 };
}
function f6(t5, e5) {
  const r5 = t5.components[0], n7 = r5.faces, s5 = b4[e5], a7 = 6 * s5, i2 = new Array(6), l3 = new Array(n7.length - 6);
  let c9 = 0, f7 = 0;
  for (let o4 = 0; o4 < n7.length; o4++) o4 >= a7 && o4 < a7 + 6 ? i2[c9++] = n7[o4] : l3[f7++] = n7[o4];
  if (null != t5.vertexAttributes.uv) {
    const e6 = new Float32Array(t5.vertexAttributes.uv), r6 = 4 * s5 * 2, n8 = [0, 1, 1, 1, 1, 0, 0, 0];
    for (let t6 = 0; t6 < n8.length; t6++) e6[r6 + t6] = n8[t6];
    t5.vertexAttributes.uv = e6;
  }
  return t5.components = [new f3({ faces: i2, material: r5.material }), new f3({ faces: l3 })], t5;
}
function u8(t5 = 0) {
  const e5 = Math.round(8 * 2 ** t5), r5 = 2 * e5, n7 = (e5 - 1) * (r5 + 1) + 2 * r5, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i2 = new Uint32Array(3 * ((e5 - 1) * r5 * 2));
  let l3 = 0, c9 = 0, f7 = 0, u9 = 0;
  for (let h7 = 0; h7 <= e5; h7++) {
    const t6 = h7 / e5 * Math.PI + 0.5 * Math.PI, n8 = Math.cos(t6), p7 = Math.sin(t6);
    O3[2] = p7;
    const m8 = 0 === h7 || h7 === e5, w6 = m8 ? r5 - 1 : r5;
    for (let v5 = 0; v5 <= w6; v5++) {
      const t7 = v5 / w6 * 2 * Math.PI;
      O3[0] = -Math.sin(t7) * n8, O3[1] = Math.cos(t7) * n8;
      for (let e6 = 0; e6 < 3; e6++) o4[l3] = 0.5 * O3[e6], s5[l3] = O3[e6], ++l3;
      a7[c9++] = (v5 + (m8 ? 0.5 : 0)) / r5, a7[c9++] = h7 / e5, 0 !== h7 && v5 !== r5 && (h7 !== e5 && (i2[f7++] = u9, i2[f7++] = u9 + 1, i2[f7++] = u9 - r5), 1 !== h7 && (i2[f7++] = u9, i2[f7++] = u9 - r5, i2[f7++] = u9 - r5 - 1)), u9++;
    }
  }
  return { position: o4, normal: s5, uv: a7, faces: i2 };
}
function h6(t5 = 0) {
  const e5 = 5, r5 = Math.round(16 * 2 ** t5), n7 = (e5 - 1) * (r5 + 1) + 2 * r5, o4 = new Float64Array(3 * n7), s5 = new Float32Array(3 * n7), a7 = new Float32Array(2 * n7), i2 = new Uint32Array(3 * (4 * r5));
  let l3 = 0, c9 = 0, f7 = 0, u9 = 0, h7 = 0;
  for (let p7 = 0; p7 <= e5; p7++) {
    const t6 = 0 === p7 || p7 === e5, n8 = p7 <= 1 || p7 >= e5 - 1, m8 = 2 === p7 || 4 === p7, w6 = t6 ? r5 - 1 : r5;
    for (let v5 = 0; v5 <= w6; v5++) {
      const g7 = v5 / w6 * 2 * Math.PI, A4 = t6 ? 0 : 0.5;
      O3[0] = A4 * Math.sin(g7), O3[1] = A4 * -Math.cos(g7), O3[2] = p7 <= 2 ? 0.5 : -0.5;
      for (let t7 = 0; t7 < 3; t7++) o4[l3++] = O3[t7], s5[c9++] = n8 ? 2 === t7 ? p7 <= 1 ? 1 : -1 : 0 : 2 === t7 ? 0 : O3[t7] / A4;
      a7[f7++] = (v5 + (t6 ? 0.5 : 0)) / r5, a7[f7++] = p7 <= 1 ? 1 * p7 / 3 : p7 <= 3 ? 1 * (p7 - 2) / 3 + 1 / 3 : 1 * (p7 - 4) / 3 + 2 / 3, m8 || 0 === p7 || v5 === r5 || (p7 !== e5 && (i2[u9++] = h7, i2[u9++] = h7 + 1, i2[u9++] = h7 - r5), 1 !== p7 && (i2[u9++] = h7, i2[u9++] = h7 - r5, i2[u9++] = h7 - r5 - 1)), h7++;
    }
  }
  return { position: o4, normal: s5, uv: a7, faces: i2 };
}
function p6(t5, e5) {
  const r5 = "number" == typeof e5 ? e5 : null != e5 ? e5.width : 1, n7 = "number" == typeof e5 ? e5 : null != e5 ? e5.height : 1;
  switch (t5) {
    case "up":
    case "down":
      return { width: r5, depth: n7 };
    case "north":
    case "south":
      return { width: r5, height: n7 };
    case "east":
    case "west":
      return { depth: r5, height: n7 };
  }
}
function m7(t5) {
  const e5 = A3.facingAxisOrderSwap[t5], r5 = A3.position, n7 = A3.normal, o4 = new Float64Array(r5.length), s5 = new Float32Array(n7.length);
  let a7 = 0;
  for (let i2 = 0; i2 < 4; i2++) {
    const t6 = a7;
    for (let i3 = 0; i3 < 3; i3++) {
      const l3 = e5[i3], c9 = Math.abs(l3) - 1, f7 = l3 >= 0 ? 1 : -1;
      o4[a7] = r5[t6 + c9] * f7, s5[a7] = n7[t6 + c9] * f7, a7++;
    }
  }
  return { position: o4, normal: s5, uv: new Float32Array(A3.uv), faces: new Uint32Array(A3.faces), isPlane: true };
}
var w5 = 1;
var v4 = 2;
var g6 = 3;
var A3 = { position: [-0.5, -0.5, 0, 0.5, -0.5, 0, 0.5, 0.5, 0, -0.5, 0.5, 0], normal: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1], uv: [0, 1, 1, 1, 1, 0, 0, 0], faces: [0, 1, 2, 0, 2, 3], facingAxisOrderSwap: { east: [g6, w5, v4], west: [-3, -1, v4], north: [-1, g6, v4], south: [w5, -3, v4], up: [w5, v4, g6], down: [w5, -2, -3] } };
function x4(t5, e5, r5) {
  t5.isPlane || y2(t5), M(t5, d4(r5 == null ? void 0 : r5.size, r5 == null ? void 0 : r5.unit, e5.spatialReference));
  const n7 = l(e5, r5), l3 = e5.spatialReference.isGeographic ? l(e5) : n7, c9 = B({ vertexAttributes: t5, vertexSpace: l3, spatialReference: e5.spatialReference }, n7, { allowBufferReuse: true });
  return { vertexAttributes: new p4({ ...c9, uv: t5.uv }), vertexSpace: n7, components: [new f3({ faces: t5.faces, material: (r5 == null ? void 0 : r5.material) || null })], spatialReference: e5.spatialReference };
}
function y2(t5) {
  for (let e5 = 0; e5 < t5.position.length; e5 += 3) t5.position[e5 + 2] += 0.5;
}
function d4(t5, e5, r5) {
  const n7 = nt(e5, r5);
  if (null == t5 && 1 === n7) return null;
  if (null == t5) return [n7, n7, n7];
  if ("number" == typeof t5) {
    const e6 = t5 * n7;
    return [e6, e6, e6];
  }
  return [null != t5.width ? t5.width * n7 : n7, null != t5.depth ? t5.depth * n7 : n7, null != t5.height ? t5.height * n7 : n7];
}
function M(t5, n7) {
  if (null != n7) {
    S[0] = n7[0], S[4] = n7[1], S[8] = n7[2];
    for (let r5 = 0; r5 < t5.position.length; r5 += 3) {
      for (let e5 = 0; e5 < 3; e5++) O3[e5] = t5.position[r5 + e5];
      N(O3, O3, S);
      for (let e5 = 0; e5 < 3; e5++) t5.position[r5 + e5] = O3[e5];
    }
    if (n7[0] !== n7[1] || n7[1] !== n7[2]) {
      S[0] = 1 / n7[0], S[4] = 1 / n7[1], S[8] = 1 / n7[2];
      for (let n8 = 0; n8 < t5.normal.length; n8 += 3) {
        for (let e5 = 0; e5 < 3; e5++) O3[e5] = t5.normal[n8 + e5];
        N(O3, O3, S), A(O3, O3);
        for (let e5 = 0; e5 < 3; e5++) t5.normal[n8 + e5] = O3[e5];
      }
    }
  }
}
var F2 = { faceDescriptions: [{ axis: [0, -1, 0], uvOrigin: [0, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [1, 0, 0], uvOrigin: [0.25, 0.625], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 1, 0], uvOrigin: [0.5, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [-1, 0, 0], uvOrigin: [0.75, 0.625], corners: [[1, -1], [-1, -1], [-1, 1], [1, 1]] }, { axis: [0, 0, 1], uvOrigin: [0, 0.375], corners: [[-1, -1], [1, -1], [1, 1], [-1, 1]] }, { axis: [0, 0, -1], uvOrigin: [0, 0.875], corners: [[-1, 1], [1, 1], [1, -1], [-1, -1]] }], uvScales: [[0, 0], [1, 0], [1, 1], [0, 1]], faceVertexOffsets: [0, 1, 2, 0, 2, 3] };
var b4 = { south: 0, east: 1, north: 2, west: 3, up: 4, down: 5 };
var O3 = n3();
var S = e2();

// node_modules/@arcgis/core/geometry/support/meshUtils/rotate.js
var O4 = () => n.getLogger("esri.geometry.support.meshUtils.rotate");
function B2(t5, e5, r5) {
  var _a;
  if (!((_a = t5.vertexAttributes) == null ? void 0 : _a.position) || 0 === e5[3]) return;
  const { spatialReference: o4, vertexSpace: i2 } = t5, n7 = (r5 == null ? void 0 : r5.origin) ?? t5.origin, s5 = r5 == null ? void 0 : r5.geographic, a7 = t4(O4, i2, o4, s5);
  c5(t5) ? G3(t5, e5, n7) : a7 ? H(t5, e5, n7) : I2(t5, e5, n7);
}
function G3(t5, e5, r5) {
  t5.transform ?? (t5.transform = new N2());
  const { vertexSpace: l3, transform: c9, spatialReference: f7 } = t5, [g7, x5, h7] = l3.origin, R3 = new j({ x: g7, y: x5, z: h7, spatialReference: f7 }), d5 = K;
  if (R3.equals(r5)) o2(d5, 0, 0, 0);
  else if (!k2(d5, r5, t5)) return void F(O4(), r5.spatialReference, f7, O2);
  b(Z, w2(e5), z2(e5));
  const y3 = D(N3, Z, _, s3, d5), { localMatrix: T3 } = c9, U = c3(N3, y3, T3);
  c9.scale = O(n3(), U), f2(U, U, z(K, c9.scale));
  const z4 = c9.rotationAxis;
  c9.rotation = k(U), 0 === c9.rotationAngle && (c9.rotationAxis = z4), c9.translation = I(n3(), U);
}
function H(t5, r5, o4) {
  const i2 = t5.spatialReference, n7 = a5(i2), s5 = Y;
  if (!c6(o4, s5, n7) && (F(O4(), o4.spatialReference, n7, "Falling back to mesh origin"), !c6(t5.origin, s5, n7))) return void F(O4(), t5.origin.spatialReference, n7);
  const a7 = t5.vertexAttributes.position, l3 = t5.vertexAttributes.normal, c9 = t5.vertexAttributes.tangent, m8 = new Float64Array(a7.length), f7 = null != l3 ? new Float32Array(l3.length) : null, p7 = null != c9 ? new Float32Array(c9.length) : null;
  m5(n7, s5, W, n7), n5(X, W);
  const u9 = Q;
  N(w2(Q), w2(r5), X), u9[3] = r5[3], g3(a7, i2, m8, n7) && (null == l3 || null == f7 || E2(l3, a7, i2, m8, n7, f7)) && (null == c9 || null == p7 || w3(c9, a7, i2, m8, n7, p7)) ? (J(m8, u9, 3, s5), h3(m8, n7, a7, i2) && (null == l3 || null == f7 || (J(f7, u9, 3), R(f7, a7, i2, m8, n7, l3))) && (null == c9 || null == p7 || (J(p7, u9, 4), G2(p7, a7, i2, m8, n7, c9))) ? t5.vertexAttributesChanged() : F(O4(), n7, i2)) : F(O4(), i2, n7);
}
function I2(t5, e5, r5) {
  const o4 = Y;
  if (!c6(r5, o4, t5.spatialReference)) {
    const e6 = t5.origin;
    return o4[0] = e6.x, o4[1] = e6.y, o4[2] = e6.z, void F(O4(), r5.spatialReference, t5.spatialReference, O2);
  }
  J(t5.vertexAttributes.position, e5, 3, o4), J(t5.vertexAttributes.normal, e5, 3), J(t5.vertexAttributes.tangent, e5, 4), t5.vertexAttributesChanged();
}
function J(t5, e5, r5, o4 = _) {
  if (null != t5) {
    p3(W, z2(e5), w2(e5));
    for (let e6 = 0; e6 < t5.length; e6 += r5) {
      for (let r6 = 0; r6 < 3; r6++) K[r6] = t5[e6 + r6] - o4[r6];
      E(K, K, W);
      for (let r6 = 0; r6 < 3; r6++) t5[e6 + r6] = K[r6] + o4[r6];
    }
  }
}
var K = n3();
var N3 = e();
var Q = j3();
var W = e();
var X = e2();
var Y = n3();
var Z = e3();

// node_modules/@arcgis/core/geometry/support/meshUtils/scale.js
var k3 = () => n.getLogger("esri.geometry.support.meshUtils.scale");
function q(e5, t5, r5) {
  var _a;
  if (!((_a = e5.vertexAttributes) == null ? void 0 : _a.position)) return;
  const { vertexSpace: o4, spatialReference: i2 } = e5, n7 = (r5 == null ? void 0 : r5.origin) ?? e5.origin, s5 = r5 == null ? void 0 : r5.geographic, a7 = t4(k3, o4, i2, s5);
  c5(e5) ? z3(e5, t5, n7) : a7 ? L3(e5, t5, n7) : M2(e5, t5, n7);
}
function z3(e5, s5, f7) {
  e5.transform ?? (e5.transform = new N2());
  const { vertexSpace: g7, transform: x5, spatialReference: h7 } = e5, [A4, d5, y3] = g7.origin, w6 = new j({ x: A4, y: d5, z: y3, spatialReference: h7 }), F3 = T2;
  if (w6.equals(f7)) o2(F3, 0, 0, 0);
  else if (!k2(F3, f7, e5)) return void F(k3(), f7.spatialReference, h7, O2);
  const S2 = o2(V2, s5, s5, s5), U = D(D2, r3, _, S2, F3), { localMatrix: q3 } = x5, z4 = c3(D2, U, q3);
  x5.scale = O(n3(), z4), f2(z4, z4, z(T2, x5.scale));
  const L4 = x5.rotationAxis;
  x5.rotation = k(z4), 0 === x5.rotationAngle && (x5.rotationAxis = L4), x5.translation = I(n3(), z4);
}
function L3(e5, t5, r5) {
  const o4 = e5.spatialReference, i2 = a5(o4), n7 = E3;
  if (!c6(r5, n7, i2) && (F(k3(), r5.spatialReference, i2, "Falling back to mesh origin"), !c6(e5.origin, n7, i2))) return void F(k3(), e5.origin.spatialReference, i2);
  const s5 = e5.vertexAttributes.position, a7 = e5.vertexAttributes.normal, l3 = e5.vertexAttributes.tangent, c9 = new Float64Array(s5.length), f7 = null != a7 ? new Float32Array(a7.length) : null, m8 = null != l3 ? new Float32Array(l3.length) : null;
  g3(s5, o4, c9, i2) && (null == a7 || null == f7 || E2(a7, s5, o4, c9, i2, f7)) && (null == l3 || null == m8 || w3(l3, s5, o4, c9, i2, m8)) ? (P(c9, t5, n7), h3(c9, i2, s5, o4) && (null == a7 || null == f7 || R(f7, s5, o4, c9, i2, a7)) && (null == l3 || null == m8 || G2(m8, s5, o4, c9, i2, l3)) ? e5.vertexAttributesChanged() : F(k3(), i2, o4)) : F(k3(), o4, i2);
}
function M2(e5, t5, r5) {
  const o4 = E3;
  if (!c6(r5, o4, e5.spatialReference)) {
    const t6 = e5.origin;
    return o4[0] = t6.x, o4[1] = t6.y, o4[2] = t6.z, void F(k3(), r5.spatialReference, e5.spatialReference, O2);
  }
  P(e5.vertexAttributes.position, t5, o4), e5.vertexAttributesChanged();
}
function P(e5, t5, r5 = _) {
  if (e5) for (let o4 = 0; o4 < e5.length; o4 += 3) {
    for (let t6 = 0; t6 < 3; t6++) T2[t6] = e5[o4 + t6] - r5[t6];
    g2(T2, T2, t5);
    for (let t6 = 0; t6 < 3; t6++) e5[o4 + t6] = T2[t6] + r5[t6];
  }
}
var T2 = n3();
var V2 = n3();
var D2 = e();
var E3 = n3();

// node_modules/@arcgis/core/geometry/Mesh.js
var H2;
var K2 = "esri.geometry.Mesh";
function q2() {
  return n.getLogger(K2);
}
var J2 = { base: null, key: "type", defaultKeyValue: "georeferenced", typeMap: { georeferenced: n4, local: a3 } };
var Q2 = H2 = class extends m3.LoadableMixin(p2.EsriPromiseMixin(n2)) {
  constructor(e5) {
    super(e5), this.components = null, this.vertexSpace = new n4(), this.transform = null, this.metadata = new a6(), this.hasZ = true, this.hasM = false, this.vertexAttributes = new p4(), this.type = "mesh";
  }
  initialize() {
    (0 === this.metadata.externalSources.length || this.vertexAttributes.position.length) && (this.loadStatus = "loaded"), this.when(() => {
      this.addHandles(d(() => {
        var _a;
        return { vertexAttributes: this.vertexAttributes, components: (_a = this.components) == null ? void 0 : _a.map((e5) => e5.clone()) };
      }, () => this._clearSources(), { once: true, sync: true }));
    });
  }
  get hasExtent() {
    var _a;
    return this.loaded ? this.vertexAttributes.position.length > 0 && (!this.components || this.components.length > 0) : null != ((_a = this.metadata.displaySource) == null ? void 0 : _a.extent);
  }
  get _transformedExtent() {
    const { spatialReference: e5, vertexSpace: t5 } = this, r5 = this;
    return l2({ get transform() {
      return r5.transform;
    }, vertexSpace: t5, spatialReference: e5, untransformedBounds: this._untransformedBounds });
  }
  get _untransformedBounds() {
    const { vertexAttributes: { position: e5 }, components: t5 } = this;
    return 0 === e5.length || 0 === (t5 == null ? void 0 : t5.length) ? u2(L) : m2(e5);
  }
  get origin() {
    const e5 = u4(this.vertexSpace, this.spatialReference);
    if (null != e5) return e5;
    const { center: t5, zmin: r5 } = this._transformedExtent;
    return new j({ x: t5.x, y: t5.y, z: r5, spatialReference: this.spatialReference });
  }
  get extent() {
    var _a, _b;
    return this.loaded || null == ((_b = (_a = this.metadata) == null ? void 0 : _a.displaySource) == null ? void 0 : _b.extent) ? this._transformedExtent : this.metadata.displaySource.extent.clone();
  }
  addComponent(e5) {
    this._checkIfLoaded("addComponent()") && (this.components || (this.components = []), this.components.push(f3.from(e5)), this.notifyChange("components"));
  }
  removeComponent(e5) {
    if (this._checkIfLoaded("removeComponent()")) {
      if (this.components) {
        const t5 = this.components.indexOf(e5);
        if (-1 !== t5) return this.components.splice(t5, 1), void this.notifyChange("components");
      }
      q2().error("removeComponent()", e4);
    }
  }
  rotate(e5, t5, r5, o4) {
    return d2(e5, t5, r5, X2), B2(this, X2, o4), this;
  }
  offset(e5, t5, r5) {
    if (!this._checkIfLoaded("offset()")) return this;
    const { vertexSpace: o4, vertexAttributes: s5 } = this, n7 = s5 == null ? void 0 : s5.position;
    if (!n7) return this;
    if (t2(o4)) {
      const [s6, n8, i2] = o4.origin;
      o4.origin = r2(s6 + e5, n8 + t5, i2 + r5);
    } else {
      for (let o5 = 0; o5 < n7.length; o5 += 3) n7[o5] += e5, n7[o5 + 1] += t5, n7[o5 + 2] += r5;
      this.vertexAttributesChanged();
    }
    return this;
  }
  scale(e5, t5) {
    return this._checkIfLoaded("scale()") ? (q(this, e5, t5), this) : this;
  }
  centerAt(e5, t5) {
    return this._checkIfLoaded("centerAt()") ? (u5(this, e5, t5), this) : this;
  }
  load(e5) {
    const { metadata: { displaySource: t5 } } = this;
    return t5 && this.addResolvingPromise(c7(this, t5, e5)), Promise.resolve(this);
  }
  addExternalSources(e5) {
    this.metadata.externalSources.addMany(e5);
  }
  updateDisplaySource(e5) {
    this.metadata.displaySource = e5;
  }
  clone() {
    return this.cloneAndModifyVertexAttributes(this.vertexAttributes.clone(), this.vertexSpace.clone(), { preserveMetadata: true });
  }
  cloneAndModifyVertexAttributes(e5, t5, r5) {
    var _a;
    let o4 = null;
    if (this.components) {
      const e6 = /* @__PURE__ */ new Map(), t6 = /* @__PURE__ */ new Map();
      o4 = this.components.map((r6) => r6.cloneWithDeduplication(e6, t6));
    }
    const s5 = { components: o4, spatialReference: this.spatialReference, vertexAttributes: e5, vertexSpace: t5, transform: ((_a = this.transform) == null ? void 0 : _a.clone()) ?? null, metadata: (r5 == null ? void 0 : r5.preserveMetadata) ? this.metadata.clone() : new a6() };
    return new H2(s5);
  }
  cloneShallow() {
    return new H2({ components: this.components, spatialReference: this.spatialReference, vertexAttributes: this.vertexAttributes, vertexSpace: this.vertexSpace.clone(), transform: this.transform, metadata: this.metadata });
  }
  vertexAttributesChanged() {
    this.notifyChange("vertexAttributes");
  }
  async toBinaryGLTF(e5) {
    const [{ toBinaryGLTF: t5 }] = await Promise.all([import("./gltfexport-HNWK4OAL.js"), this.load(e5)]);
    return s2(e5), await t5(this, e5);
  }
  get usedMemory() {
    return this.components ? this.components.reduce((e5, t5) => e5 + t5.memoryUsage, this.vertexAttributes.usedMemory) : this.vertexAttributes.usedMemory;
  }
  _clearSources() {
    this.metadata.clearSources();
  }
  _checkIfLoaded(e5) {
    return !!this.loaded || (q2().error(e5, t3), false);
  }
  static createBox(e5, t5) {
    if (!(e5 instanceof j)) return q2().error(".createBox()", s4), null;
    const r5 = new H2(x4(c8(), e5, t5));
    return (t5 == null ? void 0 : t5.imageFace) && "all" !== t5.imageFace ? f6(r5, t5.imageFace) : r5;
  }
  static createSphere(e5, t5) {
    return e5 instanceof j ? new H2(x4(u8((t5 == null ? void 0 : t5.densificationFactor) || 0), e5, t5)) : (q2().error(".createSphere()", s4), null);
  }
  static createCylinder(e5, t5) {
    return e5 instanceof j ? new H2(x4(h6((t5 == null ? void 0 : t5.densificationFactor) || 0), e5, t5)) : (q2().error(".createCylinder()", s4), null);
  }
  static createPlane(e5, t5) {
    if (!(e5 instanceof j)) return q2().error(".createPlane()", s4), null;
    const r5 = (t5 == null ? void 0 : t5.facing) ?? "up", o4 = p6(r5, t5 == null ? void 0 : t5.size);
    return new H2(x4(m7(r5), e5, { ...t5, size: o4 }));
  }
  static createFromPolygon(e5, t5) {
    if (!(e5 instanceof j2)) return q2().error(".createFromPolygon()", n6), null;
    const r5 = f4(e5);
    return new H2({ vertexAttributes: new p4({ position: r5.position }), components: [new f3({ faces: r5.faces, shading: "flat", material: (t5 == null ? void 0 : t5.material) ?? null })], spatialReference: e5.spatialReference, vertexSpace: new n4() });
  }
  static async createFromGLTF(e5, t5, r5) {
    if (!(e5 instanceof j)) {
      const e6 = new i();
      throw q2().error(".createfromGLTF()", e6.message), e6;
    }
    const { loadGLTFMesh: o4 } = await h(import("./loadGLTFMesh-CY2V7YD5.js"), r5);
    return new H2(await o4(e5, t5, r5));
  }
  static createWithExternalSource(e5, t5, r5) {
    var _a;
    const o4 = (r5 == null ? void 0 : r5.extent) ?? null, { spatialReference: s5 } = e5, n7 = ((_a = r5 == null ? void 0 : r5.transform) == null ? void 0 : _a.clone()) ?? new N2(), i2 = l(e5, r5), a7 = r5 == null ? void 0 : r5.unitConversionDisabled, c9 = { source: t5, extent: o4, unitConversionDisabled: a7 }, p7 = new a6();
    return p7.externalSources.push(c9), new H2({ metadata: p7, transform: n7, vertexSpace: i2, spatialReference: s5 });
  }
  static createIncomplete(e5, r5) {
    var _a;
    const { spatialReference: o4 } = e5, s5 = ((_a = r5 == null ? void 0 : r5.transform) == null ? void 0 : _a.clone()) ?? new N2(), n7 = l(e5, r5), i2 = new H2({ transform: s5, vertexSpace: n7, spatialReference: o4 });
    return i2.addResolvingPromise(Promise.reject(new s("mesh-incomplete", "Mesh resources are not complete"))), i2;
  }
};
r([m({ type: [f3], json: { write: true } })], Q2.prototype, "components", void 0), r([m({ nonNullable: true, types: J2, constructOnly: true, json: { write: true } })], Q2.prototype, "vertexSpace", void 0), r([m({ type: N2, json: { write: true } })], Q2.prototype, "transform", void 0), r([m({ constructOnly: true })], Q2.prototype, "metadata", void 0), r([m()], Q2.prototype, "hasExtent", null), r([m()], Q2.prototype, "_transformedExtent", null), r([m()], Q2.prototype, "_untransformedBounds", null), r([m()], Q2.prototype, "origin", null), r([m({ readOnly: true, json: { read: false } })], Q2.prototype, "extent", null), r([m({ readOnly: true, json: { read: false, write: true, default: true } })], Q2.prototype, "hasZ", void 0), r([m({ readOnly: true, json: { read: false, write: true, default: false } })], Q2.prototype, "hasM", void 0), r([m({ type: p4, nonNullable: true, json: { write: true } })], Q2.prototype, "vertexAttributes", void 0), Q2 = H2 = r([a(K2)], Q2);
var X2 = j3();
var Y2 = Q2;

export {
  Y2 as Y
};
//# sourceMappingURL=chunk-DC6JGQTT.js.map
