import {
  Ie,
  be,
  we
} from "./chunk-6REABBOQ.js";
import {
  o
} from "./chunk-HSI6V34N.js";
import {
  E,
  I,
  j,
  k,
  x
} from "./chunk-REAPFM7O.js";
import {
  h,
  n
} from "./chunk-UNGOQUF2.js";

// node_modules/@arcgis/core/smartMapping/support/utils.js
var f2 = ",";
var h2 = { years: 365, months: 30, days: 1, hours: 1 / 24, minutes: 1 / 1440, seconds: 1 / 86400, milliseconds: 1 / 864e5 };
var v = /* @__PURE__ */ new Set(["integer", "small-integer"]);
var T = null;
function $(t) {
  return Ie(t) || be(t) || we(t);
}
async function U(t) {
  const { field: e, field2: n2, field3: r, normalizationField: o2, valueExpression: i } = t;
  let s = [];
  if (i) {
    if (!T) {
      const { arcadeUtils: t2 } = await o();
      T = t2;
    }
    s = T.extractFieldNames(i);
  }
  return e && s.push(e), n2 && s.push(n2), r && s.push(r), o2 && s.push(o2), s;
}
function D(t) {
  return String(t).padStart(2, "0");
}
function S(t, e, n2) {
  let r;
  if ("date" === e || "number" === e) {
    "number" === e && (t = new Date(t));
    r = `TIMESTAMP'${n2 ? t.getFullYear() : t.getUTCFullYear()}-${D((n2 ? t.getMonth() : t.getUTCMonth()) + 1)}-${D(n2 ? t.getDate() : t.getUTCDate())} ${D(n2 ? t.getHours() : t.getUTCHours())}:${D(n2 ? t.getMinutes() : t.getUTCMinutes())}:${D(n2 ? t.getSeconds() : t.getUTCSeconds())}'`;
  } else r = t;
  return r;
}
function k2(t, e, n2, r) {
  const { hasQueryEngine: o2 } = t, i = `(${S(n2, C(t, n2), o2)} - ${S(e, C(t, e), o2)})`;
  let s = h2[r], a = "/";
  s < 1 && (s = 1 / s, a = "*");
  return { sqlExpression: 1 === s ? i : `(${i} ${a} ${s})`, sqlWhere: null };
}
function C(t, e) {
  if (e instanceof Date) return "date";
  if ("number" == typeof e) return "number";
  if ("string" == typeof e) {
    const n2 = t.getField(e);
    if ("<now>" === e.toLowerCase()) return;
    if (Ie(n2)) return "field";
  }
}
function j2(t, e) {
  const n2 = e && t.getField(e);
  return !!n2 && v.has(n2.type);
}
function M(t) {
  return `cast(${t} as float)`;
}
function N(i, s) {
  const { format: a, timeZoneOptions: l, fieldType: u } = s ?? {};
  let f3, c;
  if (l && ({ timeZone: f3, timeZoneName: c } = h(l.layerTimeZone, l.datesInUnknownTimezone, l.viewTimeZone, j(a || "short-date-short-time"), u)), "string" == typeof i && isNaN(Date.parse("time-only" === u ? `1970-01-01T${i}Z` : i))) return i;
  switch (u) {
    case "date-only": {
      const n2 = j(a || "short-date");
      return "string" == typeof i ? k(i, { ...n2 }) : E(i, { ...n2, timeZone: n });
    }
    case "time-only": {
      const n2 = j(a || "short-time");
      return "string" == typeof i ? I(i, n2) : E(i, { ...n2, timeZone: n });
    }
    case "timestamp-offset": {
      if (!f3 && "string" == typeof i && new Date(i).toISOString() !== i) return i;
      const r = a || l ? j(a || "short-date-short-time") : void 0, o2 = r ? { ...r, timeZone: f3, timeZoneName: c } : void 0;
      return "string" == typeof i ? x(i, o2) : E(i, o2);
    }
    default: {
      const n2 = a || l ? j(a || "short-date-short-time") : void 0;
      return E("string" == typeof i ? new Date(i) : i, n2 ? { ...n2, timeZone: f3, timeZoneName: c } : void 0);
    }
  }
}

export {
  f2 as f,
  $,
  U,
  k2 as k,
  j2 as j,
  M,
  N
};
//# sourceMappingURL=chunk-U4VVTGEX.js.map
