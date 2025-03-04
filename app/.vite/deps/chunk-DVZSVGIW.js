import {
  $,
  N
} from "./chunk-U4VVTGEX.js";
import {
  d
} from "./chunk-2Y4TRKRB.js";
import {
  xe
} from "./chunk-6REABBOQ.js";
import {
  r
} from "./chunk-HP7OWCUK.js";
import {
  l
} from "./chunk-PODRVOXS.js";

// node_modules/@arcgis/core/renderers/support/numberUtils.js
var n = /^-?(\d+)(\.(\d+))?$/i;
function e(t, n2) {
  return t - n2;
}
function r2(t, n2) {
  let e2, r4;
  return e2 = Number(t.toFixed(n2)), e2 < t ? r4 = e2 + 1 / 10 ** n2 : (r4 = e2, e2 -= 1 / 10 ** n2), e2 = Number(e2.toFixed(n2)), r4 = Number(r4.toFixed(n2)), [e2, r4];
}
function o(t, n2, e2, r4, o3) {
  const i2 = l2(t, n2, e2, r4), u3 = null == i2.previous || i2.previous <= o3, s3 = null == i2.next || i2.next <= o3;
  return u3 && s3 || i2.previous + i2.next <= 2 * o3;
}
function i(t) {
  const e2 = String(t), r4 = e2.match(n);
  if (r4 == null ? void 0 : r4[1]) return { integer: r4[1].split("").length, fractional: r4[3] ? r4[3].split("").length : 0 };
  if (e2.toLowerCase().includes("e")) {
    const t2 = e2.split("e"), n2 = t2[0], r5 = t2[1];
    if (n2 && r5) {
      const t3 = Number(n2);
      let e3 = Number(r5);
      const o3 = e3 > 0;
      o3 || (e3 = Math.abs(e3));
      const l4 = i(t3);
      return o3 ? (l4.integer += e3, e3 > l4.fractional ? l4.fractional = 0 : l4.fractional -= e3) : (l4.fractional += e3, e3 > l4.integer ? l4.integer = 1 : l4.integer -= e3), l4;
    }
  }
  return { integer: 0, fractional: 0 };
}
function l2(t, n2, e2, r4) {
  const o3 = { previous: null, next: null };
  if (null != e2) {
    const r5 = t - e2, i2 = n2 - e2 - r5;
    o3.previous = Math.floor(Math.abs(100 * i2 / r5));
  }
  if (null != r4) {
    const e3 = r4 - t, i2 = r4 - n2 - e3;
    o3.next = Math.floor(Math.abs(100 * i2 / e3));
  }
  return o3;
}
function u(t, n2 = {}) {
  const l4 = t.slice(), { tolerance: u3 = 2, strictBounds: s3 = false, indexes: c3 = l4.map((t2, n3) => n3) } = n2;
  c3.sort(e);
  for (let e2 = 0; e2 < c3.length; e2++) {
    const t2 = c3[e2], n3 = l4[t2], a = 0 === t2 ? null : l4[t2 - 1], f2 = t2 === l4.length - 1 ? null : l4[t2 + 1], m2 = i(n3).fractional;
    if (m2) {
      let i2, c4 = 0, g = false;
      for (; c4 <= m2 && !g; ) {
        const t3 = r2(n3, c4);
        i2 = s3 && 0 === e2 ? t3[1] : t3[0], g = o(n3, i2, a, f2, u3), c4++;
      }
      g && (l4[t2] = i2);
    }
  }
  return l4;
}
var s = { maximumFractionDigits: 20 };
function c(n2) {
  return l(n2, s);
}

// node_modules/@arcgis/core/widgets/Legend/support/utils.js
var o2 = "<";
var l3 = ">";
function r3(e2, A, i2, a) {
  let r4 = "";
  0 === A ? r4 = `${o2} ` : A === i2 && (r4 = `${l3} `);
  return r4 + (a ? N(e2, a) : c(e2));
}
var s2 = ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwcdIkqhiWn5fHwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6JrzFUAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwaeIkqhiWl5/HwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu6sKxboAAAAASUVORK5CYII=", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAAAAAAAAAHqZRakAAAANUlEQVQ4jWPMy8v7z0BFwMLAwMAwadJEqhiWl5fPwEQVk5DAqIGjBo4aOGrgqIEQwEjtKgAATl0Hu75+IUcAAAAASUVORK5CYII="];
async function u2(e2) {
  if (!("visualVariables" in e2) || !e2.visualVariables) return null;
  const A = e2.visualVariables.find((e3) => "color" === e3.type);
  if (!A) return null;
  let t = null, n2 = null;
  if (A.stops) {
    if (1 === A.stops.length) return A.stops[0].color;
    t = A.stops[0].value, n2 = A.stops[A.stops.length - 1].value;
  }
  const i2 = null != t && null != n2 ? t + (n2 - t) / 2 : 0, { getColor: a } = await import("./visualVariableUtils-ZEYVTAMY.js");
  return a(A, i2) ?? null;
}
async function p(e2, A) {
  const t = e2.trailCap, n2 = e2.trailWidth || 1, i2 = A || await u2(e2) || e2.color;
  return new d({ cap: t, color: i2, width: n2 });
}
function f(e2, A) {
  var _a, _b;
  if (!A.field) return null;
  if ("featureReduction" in e2) switch ((_a = e2.featureReduction) == null ? void 0 : _a.type) {
    case "cluster":
    case "binning": {
      const t = e2.featureReduction.fields.find(({ name: e3 }) => e3.toLowerCase() === A.field.toLowerCase());
      return t && "getField" in e2 ? e2.getField(t.onStatisticField) : null;
    }
  }
  return "getField" in e2 ? (_b = e2.getField) == null ? void 0 : _b.call(e2, A.field) : null;
}
function m(e2, A) {
  var _a, _b, _c;
  const t = "popupTemplate" in e2 ? (_a = e2.popupTemplate) == null ? void 0 : _a.fieldInfos : null;
  if ((t == null ? void 0 : t.length) && A) return (_c = (_b = t.find((e3) => {
    var _a2;
    return ((_a2 = e3.fieldName) == null ? void 0 : _a2.toLowerCase()) === A.toLowerCase();
  })) == null ? void 0 : _b.format) == null ? void 0 : _c.dateFormat;
}
function d2(t, n2, a) {
  var _a, _b, _c, _d;
  const o3 = f(t, n2);
  if (!o3 || !$(o3) && !xe(o3)) return null;
  let l4 = m(t, o3.name);
  if (!l4 && "date" === o3.type) {
    let A = 0, t2 = 0;
    n2.stops ? (A = ((_b = (_a = n2.stops) == null ? void 0 : _a.at(0)) == null ? void 0 : _b.value) ?? A, t2 = ((_d = (_c = n2.stops) == null ? void 0 : _c.at(-1)) == null ? void 0 : _d.value) ?? t2) : "minDataValue" in n2 && "maxDataValue" in n2 && (A = n2.minDataValue ?? A, t2 = n2.maxDataValue ?? t2), l4 = t2 - A > 2 * r.days ? "short-date" : "short-date-short-time";
  }
  return { fieldType: o3.type, format: l4, timeZoneOptions: { layerTimeZone: "preferredTimeZone" in t ? t.preferredTimeZone : null, viewTimeZone: a, datesInUnknownTimezone: "datesInUnknownTimezone" in t && t.datesInUnknownTimezone } };
}
function c2(e2) {
  var _a, _b;
  if ("authoringInfo" in e2) return (_b = (_a = e2.authoringInfo) == null ? void 0 : _a.visualVariables) == null ? void 0 : _b.find(({ theme: e3 }) => "reference-size" === e3);
}

export {
  i,
  l2 as l,
  u,
  o2 as o,
  l3 as l2,
  r3 as r,
  s2 as s,
  u2,
  p,
  d2 as d,
  c2 as c
};
//# sourceMappingURL=chunk-DVZSVGIW.js.map
