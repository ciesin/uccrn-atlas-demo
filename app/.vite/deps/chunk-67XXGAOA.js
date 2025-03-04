import {
  i,
  o,
  r,
  s as s3
} from "./chunk-4TZUFQZG.js";
import {
  o as o2,
  r as r2
} from "./chunk-JJAT7JGD.js";
import {
  f as f2
} from "./chunk-D4CSBMND.js";
import {
  f,
  v
} from "./chunk-WZBMMIVS.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  P as P2
} from "./chunk-W633AKTD.js";
import {
  S,
  j
} from "./chunk-YUVX6H42.js";
import {
  c,
  d
} from "./chunk-LTDNORB5.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  I
} from "./chunk-F7TCEOHX.js";
import {
  n2 as n,
  s,
  s2
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/rest/geometryService/cut.js
async function i2(i3, n2, p, m3) {
  const a = f2(i3), u = n2[0].spatialReference, c2 = { ...m3, responseType: "json", query: { ...a.query, f: "json", sr: c(u), target: JSON.stringify({ geometryType: v(n2[0]), geometries: n2 }), cutter: JSON.stringify(p) } }, f3 = await P(a.path + "/cut", c2), { cutIndexes: y2, geometries: g2 = [] } = f3.data;
  return { cutIndexes: y2, geometries: g2.map((e) => {
    const t = f(e);
    return t.spatialReference = u, t;
  }) };
}

// node_modules/@arcgis/core/rest/geometryService/simplify.js
async function m(m3, p, f3) {
  const n2 = "string" == typeof m3 ? I(m3) : m3, a = p[0].spatialReference, u = v(p[0]), l = { ...f3, query: { ...n2.query, f: "json", sr: c(a), geometries: JSON.stringify(r2(p)) } }, { data: y2 } = await P(n2.path + "/simplify", l);
  return o2(y2.geometries, u, a);
}

// node_modules/@arcgis/core/geometry/support/normalizeUtils.js
var m2 = () => n.getLogger("esri.geometry.support.normalizeUtils");
function g(t) {
  return "polygon" === t.type;
}
function y(t) {
  return "polygon" === t[0].type;
}
function x(t) {
  return "polyline" === t[0].type;
}
function d2(t) {
  const e = [];
  let n2 = 0, o3 = 0;
  for (let s4 = 0; s4 < t.length; s4++) {
    const r3 = t[s4];
    let i3 = null;
    for (let t2 = 0; t2 < r3.length; t2++) i3 = r3[t2], e.push(i3), 0 === t2 ? (n2 = i3[0], o3 = n2) : (n2 = Math.min(n2, i3[0]), o3 = Math.max(o3, i3[0]));
    i3 && e.push([(n2 + o3) / 2, 0]);
  }
  return e;
}
function M(t, n2) {
  if (!(t instanceof P2 || t instanceof j2)) {
    const t2 = "straightLineDensify: the input geometry is neither polyline nor polygon";
    throw m2().error(t2), new s2(t2);
  }
  const i3 = o(t), l = [];
  for (const e of i3) {
    const t2 = [];
    l.push(t2), t2.push([e[0][0], e[0][1]]);
    for (let o3 = 0; o3 < e.length - 1; o3++) {
      const s4 = e[o3][0], r3 = e[o3][1], i4 = e[o3 + 1][0], l2 = e[o3 + 1][1], c2 = Math.sqrt((i4 - s4) * (i4 - s4) + (l2 - r3) * (l2 - r3)), f3 = (l2 - r3) / c2, u = (i4 - s4) / c2, p = c2 / n2;
      if (p > 1) {
        for (let l3 = 1; l3 <= p - 1; l3++) {
          const e3 = l3 * n2, o5 = u * e3 + s4, i6 = f3 * e3 + r3;
          t2.push([o5, i6]);
        }
        const e2 = (c2 + Math.floor(p - 1) * n2) / 2, o4 = u * e2 + s4, i5 = f3 * e2 + r3;
        t2.push([o4, i5]);
      }
      t2.push([i4, l2]);
    }
  }
  return g(t) ? new j2({ rings: l, spatialReference: t.spatialReference }) : new P2({ paths: l, spatialReference: t.spatialReference });
}
function w(t, e, n2) {
  if (e) {
    const e2 = M(t, 1e6);
    t = S(e2, true);
  }
  return n2 && (t = s3(t, n2)), t;
}
function b(t, e, n2) {
  if (Array.isArray(t)) {
    const o3 = t[0];
    if (o3 > e) {
      const n3 = i(o3, e);
      t[0] = o3 + n3 * (-2 * e);
    } else if (o3 < n2) {
      const e2 = i(o3, n2);
      t[0] = o3 + e2 * (-2 * n2);
    }
  } else {
    const o3 = t.x;
    if (o3 > e) {
      const n3 = i(o3, e);
      t = t.clone().offset(n3 * (-2 * e), 0);
    } else if (o3 < n2) {
      const e2 = i(o3, n2);
      t = t.clone().offset(e2 * (-2 * n2), 0);
    }
  }
  return t;
}
function j3(t, e) {
  let n2 = -1;
  for (let o3 = 0; o3 < e.cutIndexes.length; o3++) {
    const s4 = e.cutIndexes[o3], i3 = e.geometries[o3], c2 = o(i3);
    for (let t2 = 0; t2 < c2.length; t2++) {
      const e2 = c2[t2];
      e2.some((n3) => {
        if (n3[0] < 180) return true;
        {
          let n4 = 0;
          for (let t3 = 0; t3 < e2.length; t3++) {
            const o5 = e2[t3][0];
            n4 = o5 > n4 ? o5 : n4;
          }
          n4 = Number(n4.toFixed(9));
          const o4 = -360 * i(n4, 180);
          for (let s5 = 0; s5 < e2.length; s5++) {
            const e3 = i3.getPoint(t2, s5);
            i3.setPoint(t2, s5, e3.clone().offset(o4, 0));
          }
          return true;
        }
      });
    }
    if (s4 === n2) {
      if (y(t)) for (const e2 of o(i3)) t[s4] = t[s4].addRing(e2);
      else if (x(t)) for (const e2 of o(i3)) t[s4] = t[s4].addPath(e2);
    } else n2 = s4, t[s4] = i3;
  }
  return t;
}
async function R(e, n2, r3) {
  if (!Array.isArray(e)) return R([e], n2);
  n2 && "string" != typeof n2 && m2().warn("normalizeCentralMeridian()", "The url object is deprecated, use the url string instead");
  const p = "string" == typeof n2 ? n2 : (n2 == null ? void 0 : n2.url) ?? s.geometryServiceUrl;
  let g2, y2, x2, d3, M2, v3, P4, L2, U = 0;
  const z = [], A = [];
  for (const t of e) if (null != t) if (g2 || (g2 = t.spatialReference, y2 = d(g2), x2 = g2.isWebMercator, v3 = x2 ? 102100 : 4326, d3 = r[v3].maxX, M2 = r[v3].minX, P4 = r[v3].plus180Line, L2 = r[v3].minus180Line), y2) if ("mesh" === t.type) A.push(t);
  else if ("point" === t.type) A.push(b(t.clone(), d3, M2));
  else if ("multipoint" === t.type) {
    const e2 = t.clone();
    e2.points = e2.points.map((t2) => b(t2, d3, M2)), A.push(e2);
  } else if ("extent" === t.type) {
    const e2 = t.clone()._normalize(false, false, y2);
    A.push(e2.rings ? new j2(e2) : e2);
  } else if (t.extent) {
    const e2 = t.extent, n3 = i(e2.xmin, M2) * (2 * d3);
    let o3 = 0 === n3 ? t.clone() : s3(t.clone(), n3);
    e2.offset(n3, 0);
    let { xmin: s4, xmax: r4 } = e2;
    s4 = Number(s4.toFixed(9)), r4 = Number(r4.toFixed(9)), e2.intersects(P4) && r4 !== d3 ? (U = r4 > U ? r4 : U, o3 = w(o3, x2), z.push(o3), A.push("cut")) : e2.intersects(L2) && s4 !== M2 ? (U = r4 * (2 * d3) > U ? r4 * (2 * d3) : U, o3 = w(o3, x2, 360), z.push(o3), A.push("cut")) : A.push(o3);
  } else A.push(t.clone());
  else A.push(t);
  else A.push(t);
  let F = i(U, d3), N = -90;
  const S2 = F, k = new P2();
  for (; F > 0; ) {
    const t = 360 * F - 180;
    k.addPath([[t, N], [t, -1 * N]]), N *= -1, F--;
  }
  if (z.length > 0 && S2 > 0) {
    const t = j3(z, await i2(p, z, k, r3)), n3 = [], o3 = [];
    for (let r4 = 0; r4 < A.length; r4++) {
      const s5 = A[r4];
      if ("cut" !== s5) o3.push(s5);
      else {
        const s6 = t.shift(), i4 = e[r4];
        null != i4 && "polygon" === i4.type && i4.rings && i4.rings.length > 1 && s6.rings.length >= i4.rings.length ? (n3.push(s6), o3.push("simplify")) : o3.push(x2 ? j(s6) : s6);
      }
    }
    if (!n3.length) return o3;
    const s4 = await m(p, n3, r3), i3 = [];
    for (let e2 = 0; e2 < o3.length; e2++) {
      const t2 = o3[e2];
      "simplify" !== t2 ? i3.push(t2) : i3.push(x2 ? j(s4.shift()) : s4.shift());
    }
    return i3;
  }
  const C = [];
  for (let t = 0; t < A.length; t++) {
    const e2 = A[t];
    if ("cut" !== e2) C.push(e2);
    else {
      const t2 = z.shift();
      C.push(true === x2 ? j(t2) : t2);
    }
  }
  return C;
}
function v2(t) {
  if (!t) return null;
  const e = t.extent;
  if (!e) return null;
  const n2 = t.spatialReference && d(t.spatialReference);
  if (!n2) return e;
  const [o3, s4] = n2.valid, r3 = 2 * s4, { width: i3 } = e;
  let l, { xmin: c2, xmax: u } = e;
  if ([c2, u] = [u, c2], "extent" === t.type || 0 === i3 || i3 <= s4 || i3 > r3 || c2 < o3 || u > s4) return e;
  switch (t.type) {
    case "polygon":
      if (!(t.rings.length > 1)) return e;
      l = d2(t.rings);
      break;
    case "polyline":
      if (!(t.paths.length > 1)) return e;
      l = d2(t.paths);
      break;
    case "multipoint":
      l = t.points;
  }
  const p = e.clone();
  for (let f3 = 0; f3 < l.length; f3++) {
    let t2 = l[f3][0];
    t2 < 0 ? (t2 += s4, u = Math.max(t2, u)) : (t2 -= s4, c2 = Math.min(t2, c2));
  }
  return p.xmin = c2, p.xmax = u, p.width < i3 ? (p.xmin -= s4, p.xmax -= s4, p) : e;
}
function P3(t, e, n2) {
  const o3 = d(n2);
  if (null == o3) return t;
  const [s4, r3] = o3.valid, i3 = 2 * r3;
  let l = 0, c2 = 0;
  e > r3 ? l = Math.ceil(Math.abs(e - r3) / i3) : e < s4 && (l = -Math.ceil(Math.abs(e - s4) / i3)), t > r3 ? c2 = Math.ceil(Math.abs(t - r3) / i3) : t < s4 && (c2 = -Math.ceil(Math.abs(t - s4) / i3));
  let u = t + (l - c2) * i3;
  const p = u - e;
  return p > r3 ? u -= i3 : p < s4 && (u += i3), u;
}
function L(t, e) {
  const n2 = d(e);
  if (n2) {
    const [e2, o3] = n2.valid, s4 = o3 - e2;
    if (t < e2) for (; t < e2; ) t += s4;
    if (t > o3) for (; t > o3; ) t -= s4;
  }
  return t;
}

export {
  M,
  R,
  v2 as v,
  P3 as P,
  L
};
//# sourceMappingURL=chunk-67XXGAOA.js.map
