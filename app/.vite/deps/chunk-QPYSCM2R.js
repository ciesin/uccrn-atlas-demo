import {
  B,
  m
} from "./chunk-HY3PTUEL.js";
import {
  $
} from "./chunk-U4VVTGEX.js";
import {
  j as j2
} from "./chunk-A4LAIXK6.js";
import {
  l,
  u as u2
} from "./chunk-RAXTPGM6.js";
import {
  xe
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import {
  r
} from "./chunk-HP7OWCUK.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  d,
  g
} from "./chunk-LTDNORB5.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/smartMapping/statistics/support/utils.js
var $2 = null;
var g3 = /^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;
function j3(e, t, n) {
  return e.x < 0 ? e.x += t : e.x > n && (e.x -= t), e;
}
function x(e, t, n, o2) {
  const a = g(n) ? d(n) : null, u3 = a ? Math.round((a.valid[1] - a.valid[0]) / t.scale[0]) : null;
  return e.map((e2) => {
    const n2 = new j(e2.geometry);
    return j2(t, n2, n2), e2.geometry = a ? j3(n2, u3 ?? 0, o2[0]) : n2, e2;
  });
}
function w(e, n = 18, r2, o2, i) {
  const s2 = new Float64Array(o2 * i);
  n = Math.round(u(n));
  let l2 = Number.POSITIVE_INFINITY, a = Number.NEGATIVE_INFINITY;
  const u3 = u2(r2);
  for (const { geometry: t, attributes: f } of e) {
    const { x: e2, y: r3 } = t, m2 = Math.max(0, e2 - n), p = Math.max(0, r3 - n), d2 = Math.min(i, r3 + n), h = Math.min(o2, e2 + n), y = +u3(f);
    for (let t2 = p; t2 < d2; t2++) for (let i2 = m2; i2 < h; i2++) {
      const u4 = t2 * o2 + i2, f2 = l(i2 - e2, t2 - r3, n) * y, m3 = s2[u4] += f2;
      l2 = Math.min(l2, m3), a = Math.max(a, m3);
    }
  }
  return { min: l2, max: a };
}
function I(e) {
  const t = g3.exec(e);
  if (!t) return null;
  const { hh: r2, mm: o2, ss: i, ms: s2 } = t.groups;
  return Number(r2) * r.hours + Number(o2) * r.minutes + Number(i) * r.seconds + Number(s2 || 0);
}
async function b(e, t, n = true) {
  if (!t) return [];
  const { field: r2, field2: i, field3: s2, fieldDelimiter: l2, fieldInfos: u3, timeZone: f } = e, c = r2 && (u3 == null ? void 0 : u3.find((e2) => e2.name.toLowerCase() === r2.toLowerCase())), m2 = !!c && xe(c), g4 = !!c && $(c), j4 = e.valueExpression, x2 = e.normalizationType, w2 = e.normalizationField, b2 = e.normalizationTotal, F2 = [], N2 = e.viewInfoParams;
  let E = null, v = null;
  if (j4) {
    if (!$2) {
      const { arcadeUtils: e2 } = await o();
      $2 = e2;
    }
    $2.hasGeometryOperations(j4) && await $2.enableGeometryOperations(), E = $2.createFunction(j4), v = N2 ? $2.getViewInfo({ viewingMode: N2.viewingMode, scale: N2.scale, spatialReference: new g2(N2.spatialReference) }) : null;
  }
  const U2 = e.fieldInfos, M2 = !(t[0] && "declaredClass" in t[0] && "esri.Graphic" === t[0].declaredClass) && U2 ? { fields: U2 } : null;
  return t.forEach((e2) => {
    const t2 = e2.attributes;
    let o2;
    if (j4) {
      const t3 = M2 ? { ...e2, layer: M2 } : e2, n2 = $2.createExecContext(t3, v, f);
      o2 = $2.executeFunction(E, n2);
    } else t2 && (o2 = t2[r2], i ? (o2 = `${m(o2)}${l2}${m(t2[i])}`, s2 && (o2 = `${o2}${l2}${m(t2[s2])}`)) : "string" == typeof o2 && n && (g4 ? o2 = o2 ? new Date(o2).getTime() : null : m2 && (o2 = o2 ? I(o2) : null)));
    if (x2 && "number" == typeof o2 && isFinite(o2)) {
      const e3 = t2 && parseFloat(t2[w2]);
      o2 = B(o2, x2, e3, b2);
    }
    F2.push(o2);
  }), F2;
}
function F(e) {
  const t = e.field, n = e.normalizationType, r2 = e.normalizationField;
  let o2;
  return "field" === n ? o2 = "(NOT " + r2 + " = 0)" : "log" !== n && "natural-log" !== n && "square-root" !== n || (o2 = `(${t} > 0)`), o2;
}
function N(e, t, n) {
  const r2 = null != t ? e + " >= " + t : "", o2 = null != n ? e + " <= " + n : "";
  let i = "";
  return i = r2 && o2 ? U(r2, o2) : r2 || o2, i ? "(" + i + ")" : "";
}
function U(e, t) {
  let n = null != e ? e : "";
  return null != t && t && (n = n ? "(" + n + ") AND (" + t + ")" : t), n;
}
function M(t, n) {
  if (t && "intersects" !== t.spatialRelationship) return new s(n, "Only 'intersects' spatialRelationship is supported for featureFilter");
}
function T(t, n, r2) {
  const o2 = z({ layer: t, fields: n });
  if (o2.length) return new s(r2, "Unknown fields: " + o2.join(", ") + ". You can only use fields defined in the layer schema");
  const i = O({ layer: t, fields: n });
  return i.length ? new s(r2, "Unsupported fields: " + i.join(", ") + ". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true") : void 0;
}
function z(e) {
  const t = e.layer;
  return e.fields.filter((e2) => !t.getField(e2));
}
function O(e) {
  const t = e.layer;
  return e.fields.filter((e2) => {
    const n = t.getFieldUsageInfo(e2);
    return !n || !n.supportsStatistics;
  });
}

export {
  x,
  w,
  I,
  b,
  F,
  N,
  U,
  M,
  T
};
//# sourceMappingURL=chunk-QPYSCM2R.js.map
