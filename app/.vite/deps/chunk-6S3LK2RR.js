import {
  s as s3
} from "./chunk-3Y5232PZ.js";
import {
  t as t2
} from "./chunk-RDFKHZPN.js";
import {
  H
} from "./chunk-FWGIWKNF.js";
import {
  e as e2
} from "./chunk-ZAYRG6WM.js";
import {
  e
} from "./chunk-J3KMTGEW.js";
import {
  A,
  K,
  P,
  _,
  c,
  o,
  p,
  s as s2,
  u
} from "./chunk-UMYFDXOJ.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  b,
  s
} from "./chunk-6P7HXSJ6.js";
import {
  r
} from "./chunk-7QTMSBS3.js";
import {
  t
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/bufferLayouts.js
var E = H().vec3f(e2.POSITION).u16(e2.COMPONENTINDEX).freeze();
var I = H().vec2u8(e2.SIDENESS).freeze();
var S = t2(I);
var T = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).vec2i16(e2.NORMALCOMPRESSED).u16(e2.COMPONENTINDEX).u8(e2.VARIANTOFFSET, { glNormalized: true }).u8(e2.VARIANTSTROKE).u8(e2.VARIANTEXTENSION, { glNormalized: true }).freeze();
var A2 = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).vec2i16(e2.NORMALCOMPRESSED).vec2i16(e2.NORMAL2COMPRESSED).u16(e2.COMPONENTINDEX).u8(e2.VARIANTOFFSET, { glNormalized: true }).u8(e2.VARIANTSTROKE).u8(e2.VARIANTEXTENSION, { glNormalized: true }).freeze();
var r2 = /* @__PURE__ */ new Map([[e2.POSITION0, 0], [e2.POSITION1, 1], [e2.COMPONENTINDEX, 2], [e2.VARIANTOFFSET, 3], [e2.VARIANTSTROKE, 4], [e2.VARIANTEXTENSION, 5], [e2.NORMALCOMPRESSED, 6], [e2.NORMAL2COMPRESSED, 7], [e2.SIDENESS, 8]]);

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/Edge.js
var s4 = class {
  constructor() {
    this.position0 = n(), this.position1 = n(), this.faceNormal0 = n(), this.faceNormal1 = n(), this.componentIndex = 0, this.cosAngle = 0;
  }
};

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgePreprocessing.js
var d = -1;
function p2(e3, t4, o2) {
  const c3 = e3.vertices.position, l2 = e3.vertices.componentIndex, i = y.position0, h2 = y.position1, g3 = y.faceNormal0, u4 = y.faceNormal1, { edges: p5, normals: v2 } = w(e3), V2 = p5.length / 4, j2 = t4.allocate(V2);
  let I3 = 0;
  const N3 = V2, b3 = o2 == null ? void 0 : o2.allocate(N3);
  let D2 = 0, E3 = 0, k2 = 0;
  x.length = 0;
  for (let s5 = 0; s5 < V2; ++s5) {
    const e4 = 4 * s5;
    c3.getVec(p5.data[e4], i), c3.getVec(p5.data[e4 + 1], h2);
    const t5 = x.pushNew();
    t5.index = 4 * s5, t5.length = p(i, h2);
  }
  x.sort((e4, t5) => t5.length - e4.length);
  const P2 = new Array(), U = new Array();
  x.forAll(({ length: e4, index: n2 }) => {
    const w3 = p5.data[n2], x2 = p5.data[n2 + 1], V3 = p5.data[n2 + 2], N4 = p5.data[n2 + 3], q2 = N4 === d;
    if (c3.getVec(w3, i), c3.getVec(x2, h2), q2) {
      const e5 = 3 * V3;
      o(g3, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), s2(u4, g3), y.componentIndex = l2.get(w3), y.cosAngle = P(g3, u4);
    } else {
      let e5 = 3 * V3;
      if (o(g3, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), e5 = 3 * N4, o(u4, v2.data[e5], v2.data[e5 + 1], v2.data[e5 + 2]), y.componentIndex = l2.get(w3), y.cosAngle = P(g3, u4), m(y, M)) return;
      y.cosAngle < -0.9999 && s2(u4, g3);
    }
    E3 += e4, k2++, q2 || f(y, L) ? (t4.write(j2, I3++, y), P2.push(e4)) : A3(y, F) && (b3 && o2 && o2.write(b3, D2++, y), U.push(e4));
  });
  const q = new Float32Array(P2.reverse()), z = new Float32Array(U.reverse()), B2 = b3 && o2 ? { instancesData: b3.slice(0, D2), lodInfo: { lengths: z } } : void 0;
  return { regular: { instancesData: j2.slice(0, I3), lodInfo: { lengths: q } }, silhouette: B2, averageEdgeLength: E3 / k2 };
}
function f(e3, t4) {
  return e3.cosAngle < t4;
}
function m(e3, t4) {
  return e3.cosAngle > t4;
}
function A3(t4, o2) {
  const n2 = b(t4.cosAngle);
  K(N, t4.position1, t4.position0);
  return n2 * (P(_(I2, t4.faceNormal0, t4.faceNormal1), N) > 0 ? -1 : 1) > o2;
}
function w(e3) {
  const t4 = e3.faces.length / 3, o2 = e3.faces, n2 = e3.neighbors, s5 = e3.vertices.position;
  V.length = j.length = 0;
  for (let a2 = 0; a2 < t4; a2++) {
    const e4 = 3 * a2, t5 = n2[e4], r3 = n2[e4 + 1], c3 = n2[e4 + 2], g3 = o2[e4], u4 = o2[e4 + 1], p5 = o2[e4 + 2];
    s5.getVec(g3, b2), s5.getVec(u4, D), s5.getVec(p5, E2), c(D, D, b2), c(E2, E2, b2), _(b2, D, E2), A(b2, b2), j.pushArray(b2), (t5 === d || g3 < u4) && (V.push(g3), V.push(u4), V.push(a2), V.push(t5)), (r3 === d || u4 < p5) && (V.push(u4), V.push(p5), V.push(a2), V.push(r3)), (c3 === d || p5 < g3) && (V.push(p5), V.push(g3), V.push(a2), V.push(c3));
  }
  return { edges: V, normals: j };
}
var v = class {
  constructor() {
    this.index = 0, this.length = 0;
  }
};
var x = new r({ allocator: (e3) => e3 || new v(), deallocator: null });
var V = new r({ deallocator: null });
var j = new r({ deallocator: null });
var y = new s4();
var I2 = n();
var N = n();
var b2 = n();
var D = n();
var E2 = n();
var F = s(4);
var M = Math.cos(F);
var k = s(35);
var L = Math.cos(k);

// node_modules/@arcgis/core/views/3d/support/meshProcessing.js
function t3(t4, o2, n2) {
  const r3 = o2 / 3, c3 = new Uint32Array(n2 + 1), e3 = new Uint32Array(n2 + 1), s5 = (t5, o3) => {
    t5 < o3 ? c3[t5 + 1]++ : e3[o3 + 1]++;
  };
  for (let x2 = 0; x2 < r3; x2++) {
    const o3 = t4[3 * x2], n3 = t4[3 * x2 + 1], r4 = t4[3 * x2 + 2];
    s5(o3, n3), s5(n3, r4), s5(r4, o3);
  }
  let f4 = 0, l2 = 0;
  for (let x2 = 0; x2 < n2; x2++) {
    const t5 = c3[x2 + 1], o3 = e3[x2 + 1];
    c3[x2 + 1] = f4, e3[x2 + 1] = l2, f4 += t5, l2 += o3;
  }
  const i = new Uint32Array(6 * r3), a2 = c3[n2], w3 = (t5, o3, n3) => {
    if (t5 < o3) {
      const r4 = c3[t5 + 1]++;
      i[2 * r4] = o3, i[2 * r4 + 1] = n3;
    } else {
      const r4 = e3[o3 + 1]++;
      i[2 * a2 + 2 * r4] = t5, i[2 * a2 + 2 * r4 + 1] = n3;
    }
  };
  for (let x2 = 0; x2 < r3; x2++) {
    const o3 = t4[3 * x2], n3 = t4[3 * x2 + 1], r4 = t4[3 * x2 + 2];
    w3(o3, n3, x2), w3(n3, r4, x2), w3(r4, o3, x2);
  }
  const y3 = (t5, o3) => {
    const n3 = 2 * t5, r4 = o3 - t5;
    for (let c4 = 1; c4 < r4; c4++) {
      const t6 = i[n3 + 2 * c4], o4 = i[n3 + 2 * c4 + 1];
      let r5 = c4 - 1;
      for (; r5 >= 0 && i[n3 + 2 * r5] > t6; r5--) i[n3 + 2 * r5 + 2] = i[n3 + 2 * r5], i[n3 + 2 * r5 + 3] = i[n3 + 2 * r5 + 1];
      i[n3 + 2 * r5 + 2] = t6, i[n3 + 2 * r5 + 3] = o4;
    }
  };
  for (let x2 = 0; x2 < n2; x2++) y3(c3[x2], c3[x2 + 1]), y3(a2 + e3[x2], a2 + e3[x2 + 1]);
  const A4 = new Int32Array(3 * r3), U = (o3, n3) => o3 === t4[3 * n3] ? 0 : o3 === t4[3 * n3 + 1] ? 1 : o3 === t4[3 * n3 + 2] ? 2 : -1, u4 = (t5, o3) => {
    const n3 = U(t5, o3);
    A4[3 * o3 + n3] = -1;
  }, p5 = (t5, o3, n3, r4) => {
    const c4 = U(t5, o3);
    A4[3 * o3 + c4] = r4;
    const e4 = U(n3, r4);
    A4[3 * r4 + e4] = o3;
  };
  for (let x2 = 0; x2 < n2; x2++) {
    let t5 = c3[x2];
    const o3 = c3[x2 + 1];
    let n3 = e3[x2];
    const r4 = e3[x2 + 1];
    for (; t5 < o3 && n3 < r4; ) {
      const o4 = i[2 * t5], r5 = i[2 * a2 + 2 * n3];
      o4 === r5 ? (p5(x2, i[2 * t5 + 1], r5, i[2 * a2 + 2 * n3 + 1]), t5++, n3++) : o4 < r5 ? (u4(x2, i[2 * t5 + 1]), t5++) : (u4(r5, i[2 * a2 + 2 * n3 + 1]), n3++);
    }
    for (; t5 < o3; ) u4(x2, i[2 * t5 + 1]), t5++;
    for (; n3 < r4; ) {
      u4(i[2 * a2 + 2 * n3], i[2 * a2 + 2 * n3 + 1]), n3++;
    }
  }
  return A4;
}

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeBufferWriters.js
var c2 = 0.7;
var f2 = class {
  updateSettings(t4) {
    this.settings = t4, this._edgeHashFunction = t4.reducedPrecision ? d2 : l;
  }
  write(t4, o2, e3) {
    B.seed = this._edgeHashFunction(e3);
    const r3 = B.getIntRange(0, 255), n2 = B.getIntRange(0, this.settings.variants - 1), i = B.getFloat(), s5 = 255 * (0.5 * y2(-(1 - Math.min(i / c2, 1)) + Math.max(0, i - c2) / (1 - c2), 1.2) + 0.5);
    t4.position0.setVec(o2, e3.position0), t4.position1.setVec(o2, e3.position1), t4.componentIndex.set(o2, e3.componentIndex), t4.variantOffset.set(o2, r3), t4.variantStroke.set(o2, n2), t4.variantExtension.set(o2, s5);
  }
};
var m2 = new Float32Array(6);
var p3 = new Uint32Array(m2.buffer);
var u2 = new Uint32Array(1);
function l(t4) {
  return m2[0] = t4.position0[0], m2[1] = t4.position0[1], m2[2] = t4.position0[2], m2[3] = t4.position1[0], m2[4] = t4.position1[1], m2[5] = t4.position1[2], u2[0] = 31 * (31 * (31 * (31 * (31 * (166811 + p3[0]) + p3[1]) + p3[2]) + p3[3]) + p3[4]) + p3[5], u2[0];
}
function d2(t4) {
  const o2 = m2;
  o2[0] = h(t4.position0[0]), o2[1] = h(t4.position0[1]), o2[2] = h(t4.position0[2]), o2[3] = h(t4.position1[0]), o2[4] = h(t4.position1[1]), o2[5] = h(t4.position1[2]), u2[0] = 5381;
  for (let e3 = 0; e3 < p3.length; e3++) u2[0] = 31 * u2[0] + p3[e3];
  return u2[0];
}
var g = 1e4;
function h(t4) {
  return Math.round(t4 * g) / g;
}
function y2(t4, o2) {
  return Math.abs(t4) ** o2 * Math.sign(t4);
}
var w2 = class {
  constructor() {
    this._commonWriter = new f2();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return T.createBuffer(t4);
  }
  write(t4, r3, n2) {
    this._commonWriter.write(t4, r3, n2), u(S2, n2.faceNormal0, n2.faceNormal1), A(S2, S2);
    const { typedBuffer: s5, typedBufferStride: a2 } = t4.normalCompressed;
    s3(s5, r3, S2[0], S2[1], S2[2], a2);
  }
};
w2.Layout = T, w2.glLayout = t2(T, 1);
var N2 = class {
  constructor() {
    this._commonWriter = new f2();
  }
  updateSettings(t4) {
    this._commonWriter.updateSettings(t4);
  }
  allocate(t4) {
    return A2.createBuffer(t4);
  }
  write(t4, o2, e3) {
    this._commonWriter.write(t4, o2, e3);
    {
      const { typedBuffer: r3, typedBufferStride: n2 } = t4.normalCompressed;
      s3(r3, o2, e3.faceNormal0[0], e3.faceNormal0[1], e3.faceNormal0[2], n2);
    }
    {
      const { typedBuffer: r3, typedBufferStride: n2 } = t4.normal2Compressed;
      s3(r3, o2, e3.faceNormal1[0], e3.faceNormal1[1], e3.faceNormal1[2], n2);
    }
  }
};
N2.Layout = A2, N2.glLayout = t2(A2, 1);
var S2 = n();
var B = new t();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/edgeRendering/edgeProcessing.js
function f3(e3) {
  const t4 = u3(e3.data, e3.skipDeduplicate, e3.indices, e3.indicesLength);
  return g2.updateSettings(e3.writerSettings), a.updateSettings(e3.writerSettings), p2(t4, g2, a);
}
function u3(r3, i, n2, o2) {
  if (i) {
    const e3 = t3(n2, o2, r3.count);
    return new p4(n2, o2, e3, r3);
  }
  const c3 = e(r3.buffer, r3.stride / 4, { originalIndices: n2, originalIndicesLength: o2 }), f4 = t3(c3.indices, o2, c3.uniqueCount);
  return { faces: c3.indices, facesLength: c3.indices.length, neighbors: f4, vertices: E.createView(c3.buffer) };
}
var p4 = class {
  constructor(e3, t4, r3, i) {
    this.faces = e3, this.facesLength = t4, this.neighbors = r3, this.vertices = i;
  }
};
var g2 = new w2();
var a = new N2();
var d3 = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1);
var m3 = H().vec3f(e2.POSITION0).vec3f(e2.POSITION1).u16(e2.COMPONENTINDEX);

export {
  E,
  p2 as p,
  f3 as f,
  u3 as u,
  d3 as d,
  m3 as m
};
//# sourceMappingURL=chunk-6S3LK2RR.js.map
