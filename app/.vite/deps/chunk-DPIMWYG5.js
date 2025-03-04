import {
  i,
  o
} from "./chunk-5LZH2YNQ.js";
import {
  E
} from "./chunk-CRKFUUKK.js";
import {
  _
} from "./chunk-ACGZOBZ6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  nt,
  tt
} from "./chunk-F7TCEOHX.js";
import {
  a,
  s as s3
} from "./chunk-M6FNW7GP.js";
import {
  s2
} from "./chunk-CWMZW2S5.js";
import {
  A2 as A,
  U,
  s2 as s,
  t2 as t,
  y2 as y
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/chunks/vec2.js
function o2(e, t2) {
  n(e.typedBuffer, t2.typedBuffer, e.typedBufferStride, t2.typedBufferStride);
}
function n(o4, n3, l2 = 2, u3 = l2) {
  const i3 = n3.length / 2;
  let a2 = 0, d = 0;
  if (!s(n3) || A(n3)) {
    for (let e = 0; e < i3; ++e) o4[a2] = n3[d], o4[a2 + 1] = n3[d + 1], a2 += l2, d += u3;
    return;
  }
  const c = U(n3);
  if (y(n3)) for (let e = 0; e < i3; ++e) o4[a2] = Math.max(n3[d] / c, -1), o4[a2 + 1] = Math.max(n3[d + 1] / c, -1), a2 += l2, d += u3;
  else for (let e = 0; e < i3; ++e) o4[a2] = n3[d] / c, o4[a2 + 1] = n3[d + 1] / c, a2 += l2, d += u3;
}
function l(e, t2, r, f2) {
  const o4 = e.typedBuffer, n3 = e.typedBufferStride, l2 = (f2 == null ? void 0 : f2.count) ?? e.count;
  let u3 = ((f2 == null ? void 0 : f2.dstIndex) ?? 0) * n3;
  for (let i3 = 0; i3 < l2; ++i3) o4[u3] = t2, o4[u3 + 1] = r, u3 += n3;
}
var u = Object.freeze(Object.defineProperty({ __proto__: null, fill: l, normalizeIntegerBuffer: n, normalizeIntegerBufferView: o2 }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/views/3d/glTF/DefaultLoadingContext.js
var n2 = class {
  constructor(r) {
    this._streamDataRequester = r;
  }
  async loadJSON(r, e) {
    return this._load("json", r, e);
  }
  async loadBinary(r, e) {
    return tt(r) ? (s3(e), nt(r)) : this._load("binary", r, e);
  }
  async loadImage(r, e) {
    return this._load("image", r, e);
  }
  async _load(a2, s4, i3) {
    if (null == this._streamDataRequester) return (await P(s4, { responseType: m[a2] })).data;
    const n3 = await _(this._streamDataRequester.request(s4, a2, i3));
    if (true === n3.ok) return n3.value;
    throw a(n3.error), new s2("glt-loader-request-error", `Request for resource failed: ${n3.error}`);
  }
};
var m = { image: "image", binary: "array-buffer", json: "json", "image+type": void 0 };

// node_modules/@arcgis/core/views/3d/glTF/internal/indexUtils.js
function o3(r, t2) {
  switch (t2) {
    case E.TRIANGLES:
      return f(r);
    case E.TRIANGLE_STRIP:
      return u2(r);
    case E.TRIANGLE_FAN:
      return i2(r);
  }
}
function f(e) {
  return "number" == typeof e ? o(e) : t(e) ? new Uint16Array(e) : e;
}
function u2(r) {
  const t2 = "number" == typeof r ? r : r.length;
  if (t2 < 3) return [];
  const n3 = t2 - 2, o4 = i(3 * n3);
  if ("number" == typeof r) {
    let r2 = 0;
    for (let t3 = 0; t3 < n3; t3 += 1) t3 % 2 == 0 ? (o4[r2++] = t3, o4[r2++] = t3 + 1, o4[r2++] = t3 + 2) : (o4[r2++] = t3 + 1, o4[r2++] = t3, o4[r2++] = t3 + 2);
  } else {
    let t3 = 0;
    for (let e = 0; e < n3; e += 1) e % 2 == 0 ? (o4[t3++] = r[e], o4[t3++] = r[e + 1], o4[t3++] = r[e + 2]) : (o4[t3++] = r[e + 1], o4[t3++] = r[e], o4[t3++] = r[e + 2]);
  }
  return o4;
}
function i2(r) {
  const t2 = "number" == typeof r ? r : r.length;
  if (t2 < 3) return new Uint16Array(0);
  const e = t2 - 2, n3 = e <= 65536 ? new Uint16Array(3 * e) : new Uint32Array(3 * e);
  if ("number" == typeof r) {
    let r2 = 0;
    for (let t3 = 0; t3 < e; ++t3) n3[r2++] = 0, n3[r2++] = t3 + 1, n3[r2++] = t3 + 2;
    return n3;
  }
  const o4 = r[0];
  let f2 = r[1], u3 = 0;
  for (let i3 = 0; i3 < e; ++i3) {
    const t3 = r[i3 + 2];
    n3[u3++] = o4, n3[u3++] = f2, n3[u3++] = t3, f2 = t3;
  }
  return n3;
}

export {
  o2 as o,
  n,
  l,
  n2,
  o3 as o2
};
//# sourceMappingURL=chunk-DPIMWYG5.js.map
