import {
  y
} from "./chunk-FF44HCOD.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  B,
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a
} from "./chunk-CWMZW2S5.js";
import {
  G
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/layers/support/rasterFieldUtils.js
var n = "Raster.";
var a3 = "Raster.Dim.";
var i = ".Max";
var t = { servicePixelValue: "Raster.ServicePixelValue", rawServicePixelValue: "Raster.ServicePixelValue.Raw", itemPixelValue: "Raster.ItemPixelValue", magnitude: "Raster.Magnitude", direction: "Raster.Direction", variable: "Raster.Variable" };
var r2 = /* @__PURE__ */ new Map([["quarters", "Quarter"], ["months", "Month"], ["weeks", "Week of the year"], ["days", "Day of the year"]]);
function l(n3, a6) {
  return new y({ name: n3, alias: a6, domain: null, editable: false, length: 50, type: "string" });
}
function s(n3, a6) {
  return new y({ name: n3, alias: a6, domain: null, editable: false, type: "double" });
}
function u(n3, a6) {
  return new y({ name: n3, alias: a6, domain: null, editable: false, type: "date" });
}
function o(e) {
  return l(t.servicePixelValue, e ?? "Service Pixel Value");
}
function c(e) {
  return l(t.rawServicePixelValue, e ?? "Raw Service Pixel Value");
}
function m2() {
  return l(t.itemPixelValue, "Item Pixel Value");
}
function f(e) {
  return l(`${t.servicePixelValue}.${e}`, e);
}
function d(e) {
  return s(`${t.magnitude}`, "Magnitude" + (e ? ` (${e})` : ""));
}
function $() {
  return s(`${t.direction}`, "Direction (°)");
}
function v(e) {
  return e.fields.filter((e2) => "oid" !== e2.type && "value" !== e2.name.toLowerCase()).map((e2) => {
    const a6 = e2.clone();
    return a6.name = `${n}${e2.name}`, a6;
  });
}
function p(e) {
  const n3 = /* @__PURE__ */ new Set(), r4 = /* @__PURE__ */ new Set(), o3 = /* @__PURE__ */ new Map();
  e.variables.forEach(({ dimensions: e2 }) => {
    e2.forEach((e3) => {
      var _a;
      if (e3.recurring) o3.set(e3.name, e3.unit);
      else {
        const a6 = "ISO8601" === ((_a = e3.unit) == null ? void 0 : _a.trim()) ? n3 : r4;
        a6.add(e3.name), e3.hasRanges && a6.add(`${e3.name}${i}`);
      }
    });
  });
  return [l(t.variable, "Variable"), ...[...n3].map((e2) => u(`${a3}${e2}`, x(e2))), ...[...r4].map((e2) => s(`${a3}${e2}`, x(e2))), ...[...o3].map(([e2, n4]) => s(`${a3}${e2}`, h(e2, n4)))];
}
function h(e, n3) {
  return n3 = n3 == null ? void 0 : n3.toLowerCase(), n3 && r2.has(n3) ? r2.get(n3) : x(e);
}
function x(e) {
  const n3 = e.endsWith(i), a6 = n3 ? e.slice(0, -4) : e, t3 = "StdTime" === a6 ? "Standard Time" : "StdZ" === a6 ? "Standard Z" : a6;
  return n3 ? `${t3} Max` : t3;
}
function w(e, n3) {
  return n3 ? new Date(e) : e;
}
function V(e, n3, r4) {
  (r4 == null ? void 0 : r4.length) && (n3[t.variable] = r4[0].variableName, r4.forEach(({ dimensionName: t3, values: r5 }) => {
    if (t3 && (r5 == null ? void 0 : r5.length)) {
      const l3 = `${a3}${t3}`, s3 = e.find(({ name: e2 }) => e2 === l3);
      if (!s3) return;
      const u3 = "date" === s3.type, o3 = r5[0];
      if (Array.isArray(o3)) {
        if (n3[`${a3}${t3}`] = w(o3[0], u3), null != o3[1]) {
          const r6 = `${a3}${t3}${i}`;
          if (e.some(({ name: e2 }) => e2 === r6)) {
            const e2 = w(o3[1], u3);
            n3[r6] = e2;
          }
        }
      } else n3[`${a3}${t3}`] = w(o3, u3);
    }
  }));
}
function b(e, n3) {
  if (n3.pixelType.startsWith("f") && e.forEach(({ format: e2, fieldName: n4 }) => {
    e2 && n4 && /^raster\.(item|service)pixelvalue/i.test(n4) && (e2.places = 2);
  }), n3.multidimensionalInfo) {
    const t3 = n3.multidimensionalInfo.variables.flatMap(({ dimensions: e2 }) => e2);
    e.forEach(({ format: e2, fieldName: n4 }) => {
      var _a;
      if (e2 && (n4 == null ? void 0 : n4.startsWith(a3))) {
        const r4 = n4.slice(a3.length), l3 = `${r4}${i}`, s3 = t3.find(({ name: e3 }) => e3 === r4 || e3 === l3);
        ((_a = s3 == null ? void 0 : s3.values) == null ? void 0 : _a.every((e3) => Number.isInteger(e3))) && (e2.places = 0);
      }
    });
  }
}

// node_modules/@arcgis/core/layers/support/DimensionalDefinition.js
var a4;
var n2 = a4 = class extends S {
  constructor(e) {
    super(e), this.variableName = null, this.dimensionName = null, this.values = [], this.isSlice = false;
  }
  clone() {
    return new a4({ variableName: this.variableName, dimensionName: this.dimensionName, values: a(this.values), isSlice: this.isSlice });
  }
};
r([m({ type: String, json: { write: true } })], n2.prototype, "variableName", void 0), r([m({ type: String, json: { write: true } })], n2.prototype, "dimensionName", void 0), r([m({ type: B.array(B.oneOf([B.native(Number), B.array(B.native(Number))])), json: { write: true } })], n2.prototype, "values", void 0), r([m({ type: Boolean, json: { write: true } })], n2.prototype, "isSlice", void 0), n2 = a4 = r([a2("esri.layers.support.DimensionalDefinition")], n2);
var p2 = n2;

// node_modules/@arcgis/core/layers/support/rasterDatasets/multidimensionalUtils.js
function t2(e, n3, i3) {
  var _a;
  const a6 = n3.shift();
  if (0 === i3.length) {
    const e2 = [];
    i3.push({ sliceId: -1, multidimensionalDefinition: e2 });
  }
  const s3 = i3.length;
  for (let t3 = 0; t3 < s3; t3++) {
    const n4 = i3.shift().multidimensionalDefinition;
    (_a = a6.values) == null ? void 0 : _a.forEach((t4) => {
      i3.push({ sliceId: -1, multidimensionalDefinition: [...n4, { variableName: e, dimensionName: a6.name, values: [t4] }] });
    });
  }
  n3.length && t2(e, n3, i3);
}
function i2(e, n3) {
  const i3 = [];
  let a6 = 0;
  return (n3 ? e.variables.filter((e2) => e2.name.toLowerCase() === n3.toLowerCase()) : [...e.variables].sort((e2, n4) => e2.name > n4.name ? 1 : -1)).forEach((e2) => {
    const n4 = [], s3 = [...e2.dimensions].sort((e3, n5) => e3.name > n5.name ? -1 : 1);
    t2(e2.name, s3, n4), n4.forEach((e3) => {
      i3.push({ ...e3, sliceId: a6++ });
    });
  }), i3;
}
function a5(e, n3, t3) {
  let i3 = e;
  if (n3 && (n3 = [...n3].sort((e2, n4) => e2.dimensionName < n4.dimensionName ? -1 : 1)).forEach(({ dimensionName: e2, values: n4, isSlice: t4 }) => {
    n4.length && (i3 = i3.filter((i4) => {
      const a6 = i4.multidimensionalDefinition.find((n5) => n5.dimensionName === e2);
      if (null == a6) return false;
      const s3 = a6.values[0];
      return "number" == typeof s3 ? "number" == typeof n4[0] ? n4.includes(s3) : n4.some((e3) => e3[0] <= s3 && e3[1] >= s3) : "number" == typeof n4[0] ? n4.some((e3) => s3[0] <= e3 && s3[1] >= e3) : t4 ? n4.some((e3) => e3[0] === s3[0] && e3[0] === s3[1]) : n4.some((e3) => e3[0] >= s3[0] && e3[0] <= s3[1] || e3[1] >= s3[0] && e3[1] <= s3[1] || e3[0] < s3[0] && e3[1] > s3[1]);
    }));
  }), i3.length && null != (t3 == null ? void 0 : t3.start) && null != t3.end) {
    const e2 = t3.start.getTime(), n4 = t3.end.getTime(), a6 = i3[0].multidimensionalDefinition.findIndex((e3) => "StdTime" === e3.dimensionName);
    a6 > -1 && (i3 = i3.filter((t4) => {
      const i4 = t4.multidimensionalDefinition[a6].values[0];
      return e2 <= i4 && n4 >= i4;
    }));
  }
  return i3.map((e2) => e2.sliceId);
}
function s2(e, n3) {
  return Array.isArray(e) ? n3[0] === n3[1] ? e[0] === n3[0] || e[1] === n3[0] : e[0] >= n3[0] && e[0] <= n3[1] && e[1] >= n3[0] && e[1] <= n3[1] : e >= n3[0] && e <= n3[1];
}
function l2(e, n3) {
  return e[0] <= n3[0] && e[1] >= n3[0] || e[0] <= n3[1] && e[1] >= n3[1] || e[0] >= n3[0] && e[1] <= n3[1];
}
function r3(e) {
  return 1 === e.length ? [e[0], e[0]] : [e[0], e[e.length - 1]];
}
function u2(e, n3, t3) {
  var _a, _b;
  if (!((_a = n3 == null ? void 0 : n3.subsetDefinitions) == null ? void 0 : _a.length)) return e;
  let i3;
  if (t3) {
    const { variables: a7 } = n3;
    if (a7.length && !a7.includes(t3)) return null;
    const s3 = n3.subsetDefinitions.find((n4) => n4.dimensionName === e.name && n4.variableName === t3);
    if (!((_b = s3 == null ? void 0 : s3.values) == null ? void 0 : _b.length)) return e;
    i3 = r3(s3.values);
  } else {
    const t4 = n3.dimensions.find(({ name: n4 }) => n4 === e.name);
    i3 = t4 == null ? void 0 : t4.extent;
  }
  const a6 = i3;
  if (!(a6 == null ? void 0 : a6.length)) return e;
  const l3 = e.values.filter((e2) => s2(e2, a6));
  return { ...e, extent: [...a6], values: l3 };
}
function o2(e, n3, t3) {
  var _a;
  if (!((_a = n3 == null ? void 0 : n3.subsetDefinitions) == null ? void 0 : _a.length)) return false;
  const { variables: i3 } = n3;
  if (i3.length && e.some(({ variableName: e2 }) => e2 && !i3.includes(e2))) return true;
  for (let a6 = 0; a6 < e.length; a6++) {
    const i4 = e[a6], u3 = n3.subsetDefinitions.find((e2) => ("" === i4.variableName || e2.variableName === i4.variableName) && e2.dimensionName === i4.dimensionName);
    if (u3 == null ? void 0 : u3.values.length) {
      const e2 = r3(u3.values);
      if (!i4.isSlice && 2 === i4.values.length && !Array.isArray(i4.values[0]) && i4.values[0] !== i4.values[1] && t3) {
        if (!l2(i4.values, e2)) return true;
      } else if (i4.values.some((n4) => !s2(n4, e2))) return true;
    }
  }
  return false;
}
function m3(e, n3) {
  if (null == e) return { isOutside: false };
  const { geometry: t3, timeExtent: i3, multidimensionalDefinition: a6 } = n3;
  let s3 = null;
  if (null != i3 && (s3 = c2(e, i3), null == s3)) return { isOutside: true };
  const { areaOfInterest: l3 } = e;
  if (l3 && t3) {
    const e2 = "point" === t3.type ? t3 : "extent" === t3.type ? t3.center : "polygon" === t3.type ? t3.centroid : null;
    if (e2 && !l3.contains(e2)) return { isOutside: true };
  }
  return null != a6 && a6.length && o2(a6, e, true) ? { isOutside: true } : { isOutside: false, intersection: { geometry: t3, timeExtent: s3, multidimensionalDefinition: a6 } };
}
function c2(e, t3) {
  const i3 = e.dimensions.find(({ name: e2 }) => "StdTime" === e2);
  if (null == i3 || null == t3.start && null == t3.end) return t3;
  t3 = t3.clone();
  const { start: a6, end: s3 } = t3.toJSON(), l3 = a6 === s3 ? [a6] : null != a6 && null != s3 ? [a6, s3] : [a6 ?? s3];
  if (2 === l3.length && (i3 == null ? void 0 : i3.extent.length) && (l3[0] = Math.max(l3[0], i3.extent[0]), l3[1] = Math.min(l3[1], i3.extent[1] ?? i3.extent[0]), l3[1] < l3[0])) return null;
  return o2([new p2({ variableName: "", dimensionName: "StdTime", isSlice: 1 === l3.length, values: l3 })], e, true) ? null : (t3.start = new Date(l3[0]), t3.end = new Date(l3[1] ?? l3[0]), t3);
}
function f2(e) {
  var _a, _b, _c;
  const { rasterInfo: n3, multidimensionalSubset: t3 } = e, { multidimensionalInfo: i3 } = n3;
  if (null == i3) return null;
  let a6 = ((_a = e.multidimensionalDefinition) == null ? void 0 : _a.length) ? e.multidimensionalDefinition : h2(n3, { multidimensionalSubset: t3 });
  if (!(a6 == null ? void 0 : a6.length)) return null;
  if (a6.some((e2) => !e2.dimensionName)) {
    const { variableName: e2 } = a6[0], i4 = h2(n3, { multidimensionalSubset: t3, variableName: e2 });
    i4 == null ? void 0 : i4.forEach((e3) => {
      var _a2;
      const n4 = a6 == null ? void 0 : a6.find(({ dimensionName: n5 }) => n5 === e3.dimensionName);
      ((_a2 = n4 == null ? void 0 : n4.values) == null ? void 0 : _a2.length) && (e3.values = n4.values, e3.isSlice = n4.isSlice);
    }), a6 = i4;
  }
  const { timeExtent: s3 } = e;
  if (null != a6 && null != s3 && (null != s3.start || null != s3.end)) {
    a6 = a6.map((e3) => e3.clone());
    const e2 = (_c = (_b = i3.variables.find(({ name: e3 }) => e3 === a6[0].variableName)) == null ? void 0 : _b.dimensions) == null ? void 0 : _c.find(({ name: e3 }) => "StdTime" === e3), n4 = a6.find(({ dimensionName: e3 }) => "StdTime" === e3);
    if (!e2 || !n4) return null;
    const { start: t4, end: l3 } = s3, r4 = null == t4 ? null : t4.getTime(), u3 = null == l3 ? null : l3.getTime(), o3 = r4 ?? u3, m4 = u3 ?? r4;
    if (null != e2.values) {
      const t5 = e2.values.filter((e3) => {
        if (Array.isArray(e3)) {
          if (o3 === m4) return e3[0] <= o3 && e3[1] >= o3;
          const n5 = e3[0] <= o3 && e3[1] > o3 || e3[0] < m4 && e3[1] >= m4, t6 = e3[0] >= o3 && e3[1] <= m4 || e3[0] < o3 && e3[1] > m4;
          return n5 || t6;
        }
        return o3 === m4 ? e3 === o3 : e3 >= o3 && e3 <= m4;
      });
      if (t5.length) {
        const e3 = t5.sort((e4, n5) => {
          const t6 = Array.isArray(e4) ? e4[0] : e4, i4 = Array.isArray(e4) ? e4[1] : e4, a7 = Array.isArray(n5) ? n5[0] : n5, s4 = Array.isArray(n5) ? n5[1] : n5;
          if (o3 === m4) return t6 - a7;
          return Math.abs(i4 - m4) - Math.abs(s4 - m4);
        })[0];
        n4.values = [e3];
      } else a6 = null;
    } else if (e2.hasRegularIntervals && e2.extent) {
      const [t5, i4] = e2.extent;
      o3 > i4 || m4 < t5 ? a6 = null : n4.values = o3 === m4 ? [o3] : [Math.max(t5, o3), Math.min(i4, m4)];
    }
  }
  return null != a6 && o2(a6, t3) ? null : a6;
}
function d2(e, n3 = {}) {
  var _a, _b;
  const { multidimensionalInfo: t3, keyProperties: i3 } = e;
  if (null == t3) return null;
  const { variableName: a6, multidimensionalSubset: s3, multidimensionalDefinition: l3 } = n3, r4 = null != l3 ? (_a = l3[0]) == null ? void 0 : _a.variableName : null, u3 = a6 || r4 || (i3 == null ? void 0 : i3.DefaultVariable);
  let { variables: o3 } = t3;
  ((_b = s3 == null ? void 0 : s3.variables) == null ? void 0 : _b.length) && (o3 = o3.filter(({ name: e2 }) => s3.variables.includes(e2)));
  return u3 ? o3.find(({ name: e2 }) => e2 === u3) ?? o3[0] : o3[0];
}
function h2(e, t3 = {}) {
  const i3 = d2(e, t3);
  if (!i3) return null;
  const a6 = [], { dimensions: s3, name: l3 } = i3;
  if (0 === s3.length) return [new p2({ variableName: l3, dimensionName: "", values: [], isSlice: true })];
  for (let r4 = 0; r4 < s3.length; r4++) {
    const e2 = u2(s3[r4], t3.multidimensionalSubset, l3);
    if (!e2) return null;
    const { values: i4, extent: o3 } = e2;
    let m4 = (i4 == null ? void 0 : i4[0]) ?? (o3 == null ? void 0 : o3[0]);
    "stdz" === e2.name.toLowerCase() && !e2.hasRanges && o3 && Math.abs(o3[1]) <= Math.abs(o3[0]) && (m4 = (i4 == null ? void 0 : i4.length) ? i4[i4.length - 1] : o3[1]), a6.push(new p2({ variableName: l3, dimensionName: e2.name, values: [m4], isSlice: !t3.useRangeForRangedDimensionInfo || !!e2.hasRanges }));
  }
  return a6;
}
function g(e) {
  return !!(e == null ? void 0 : e.length) && e.some((e2) => {
    if (null == e2.values) return true;
    const n3 = e2.values.length;
    return 0 === n3 || n3 > 1 || !e2.isSlice && Array.isArray(e2.values[0]);
  });
}
function v2(n3, t3) {
  var _a;
  if (null == t3 || null == n3) return null;
  let i3 = t3.variables.map((e) => ({ ...e }));
  return ((_a = n3 == null ? void 0 : n3.variables) == null ? void 0 : _a.length) && (i3 = i3.filter(({ name: e }) => n3.variables.includes(e)), i3.forEach((t4) => {
    t4.dimensions = t4.dimensions.map((e) => u2(e, n3, t4.name)).filter(G);
  })), i3;
}
function b2(e, n3) {
  var _a;
  const { values: t3 } = n3;
  if (t3 == null ? void 0 : t3.length) {
    const n4 = Array.isArray(t3[0]), i4 = Array.isArray(e);
    return n4 !== i4 ? -1 : n4 && i4 ? t3.findIndex((n5) => n5[0] === e[0] && n5[1] === e[1]) : t3.indexOf(e);
  }
  const { extent: i3 } = n3;
  if (Array.isArray(e) || !i3 || e < i3[0] || e > i3[1]) return -1;
  const a6 = n3.interval || 1;
  if ("ISO8601" !== n3.unit) return Math.round((e - i3[0]) / a6);
  const s3 = i3[0];
  let l3 = -1;
  switch (((_a = n3.intervalUnit) == null ? void 0 : _a.toLowerCase()) || "days") {
    case "seconds":
      l3 = Math.round((e - s3) / 1e3 / a6);
      break;
    case "minutes":
      l3 = Math.round((e - s3) / 6e4 / a6);
      break;
    case "hours":
      l3 = Math.round((e - s3) / 36e5 / a6);
      break;
    case "days":
      l3 = Math.round((e - s3) / 864e5 / a6);
      break;
    case "months":
      {
        const n4 = new Date(e).getUTCFullYear() - new Date(s3).getUTCFullYear(), t4 = new Date(s3).getUTCMonth(), i4 = new Date(e).getUTCMonth();
        l3 = 0 === n4 ? i4 - t4 : i4 + 11 - t4 + 12 * (n4 - 1);
      }
      break;
    case "years":
      l3 = Math.round((new Date(e).getUTCFullYear() - new Date(s3).getUTCFullYear()) / a6);
      break;
    case "decades":
      l3 = Math.round((new Date(e).getUTCFullYear() - new Date(s3).getUTCFullYear()) / 10 / a6);
  }
  return l3;
}
function y2(e) {
  var _a, _b;
  let n3 = (_a = e.values) == null ? void 0 : _a.length;
  if (n3) return n3;
  const { extent: t3, unit: i3 } = e, a6 = e.interval || 1, s3 = t3 ? t3[1] - t3[0] : 0;
  if ("ISO8601" !== i3) return Math.round(s3 / a6);
  switch (((_b = e.intervalUnit) == null ? void 0 : _b.toLowerCase()) ?? "seconds") {
    case "seconds":
      n3 = Math.round(s3 / 1e3 / a6);
      break;
    case "minutes":
      n3 = Math.round(s3 / 6e4 / a6);
      break;
    case "hours":
      n3 = Math.round(s3 / 36e5 / a6);
      break;
    case "days":
      n3 = Math.round(s3 / 864e5 / a6);
      break;
    case "months":
      if (t3) {
        const e2 = new Date(t3[1]).getUTCFullYear() - new Date(t3[0]).getUTCFullYear(), i4 = new Date(t3[0]).getUTCMonth(), a7 = new Date(t3[1]).getUTCMonth();
        n3 = 0 === e2 ? a7 - i4 + 1 : a7 + 11 - i4 + 12 * (e2 - 1) + 1;
      } else n3 = 0;
      break;
    case "years":
      n3 = t3 ? Math.round((new Date(t3[1]).getUTCFullYear() - new Date(t3[0]).getUTCFullYear()) / a6) : 0;
      break;
    case "decades":
      n3 = t3 ? Math.round((new Date(t3[1]).getUTCFullYear() - new Date(t3[0]).getUTCFullYear()) / 10 / a6) : 0;
      break;
    default:
      n3 = 0;
  }
  return n3;
}
function D(e) {
  var _a, _b;
  if (2 !== ((_a = e.extent) == null ? void 0 : _a.length) || !e.interval) return [];
  const { extent: [n3, t3], interval: i3 } = e;
  if ("ISO8601" === e.unit) {
    const a7 = ((_b = e.intervalUnit) == null ? void 0 : _b.toLowerCase()) ?? "days";
    return ["decades", "years", "months", "days", "hours", "minutes", "seconds"].includes(a7) ? T(n3, t3, i3, a7) : [];
  }
  const a6 = Math.round((t3 - n3) / i3);
  return Array.from({ length: a6 }, (e2, s3) => s3 === a6 - 1 ? t3 : n3 + s3 * i3);
}
function T(e, n3, t3, i3) {
  const a6 = [];
  let s3 = e;
  const l3 = new Date(e);
  for (; s3 <= n3; ) switch (a6.push(s3), i3) {
    case "decades":
      l3.setUTCFullYear(l3.getUTCFullYear() + 10 * t3), s3 = l3.getTime();
      break;
    case "years":
      l3.setUTCFullYear(l3.getUTCFullYear() + t3), s3 = l3.getTime();
      break;
    case "months":
      l3.setUTCMonth(l3.getUTCMonth() + t3), s3 = l3.getTime();
      break;
    case "days":
      s3 += 864e5 * t3;
      break;
    case "hours":
      s3 += 36e5 * t3;
      break;
    case "minutes":
      s3 += 6e4 * t3;
      break;
    case "seconds":
      s3 += 1e3 * t3;
  }
  return 1 === a6.length ? a6[1] = n3 : a6[a6.length - 1] = n3, a6;
}
function N(e, n3) {
  let t3 = 0;
  const i3 = e[0].variableName, a6 = [...n3.variables].sort((e2, n4) => e2.name > n4.name ? 1 : -1);
  for (let s3 = 0; s3 < a6.length; s3++) {
    const n4 = a6[s3], l3 = [...n4.dimensions].sort((e2, n5) => e2.name > n5.name ? -1 : 1);
    if (n4.name !== i3) {
      t3 += l3.map((e2) => y2(e2)).reduce((e2, n5) => e2 * n5);
      continue;
    }
    const r4 = l3.map((e2) => y2(e2)), u3 = l3.length;
    for (let i4 = 0; i4 < u3; i4++) {
      const n5 = e.find((e2) => e2.dimensionName === l3[i4].name);
      if (null == n5) return null;
      const a7 = b2(n5.values[0], l3[i4]);
      if (-1 === a7) return null;
      r4.shift(), t3 += i4 === u3 - 1 ? a7 : a7 * r4.reduce((e2, n6) => e2 * n6);
    }
    break;
  }
  return t3;
}
function w2(e) {
  return Math.round(24 * (e - 25569) * 3600 * 1e3);
}

export {
  p2 as p,
  n,
  a3 as a,
  t,
  o,
  c,
  m2 as m,
  f,
  d,
  $,
  v,
  p as p2,
  V,
  b,
  i2 as i,
  a5 as a2,
  o2,
  m3 as m2,
  f2,
  d2,
  h2 as h,
  g,
  v2,
  D,
  N,
  w2 as w
};
//# sourceMappingURL=chunk-LZBUPIMY.js.map
