import {
  l
} from "./chunk-OQ3YQLHO.js";
import {
  I,
  Z,
  d,
  k,
  v as v3
} from "./chunk-RQTCSDBY.js";
import {
  t as t3
} from "./chunk-SMPH4DRM.js";
import {
  t as t4
} from "./chunk-4DEIS6AK.js";
import {
  D as D2,
  i as i4
} from "./chunk-7SWL6AYJ.js";
import {
  C,
  f as f2
} from "./chunk-GKX3Z6XX.js";
import {
  $,
  $e,
  Ae,
  B,
  Be,
  E,
  Ee,
  Fe,
  G,
  H,
  He,
  K,
  Ke,
  Me,
  Ne,
  P as P2,
  Q,
  U,
  Ue,
  W,
  We,
  Ze,
  ae,
  be,
  ee,
  ge,
  h as h2,
  i as i3,
  ke,
  le,
  me,
  ne,
  oe,
  q,
  re,
  te,
  v as v2,
  ye,
  z
} from "./chunk-O4H354HZ.js";
import {
  b
} from "./chunk-SCYMP6Y5.js";
import {
  t as t2
} from "./chunk-TSDU5FXE.js";
import {
  p
} from "./chunk-JMVIOIWP.js";
import {
  a as a2,
  r as r4
} from "./chunk-TA6O62P3.js";
import {
  D,
  i as i2
} from "./chunk-CBVVZO37.js";
import {
  i,
  r as r2
} from "./chunk-Z2A222O3.js";
import {
  e,
  n as n4,
  o,
  r as r3,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  h,
  m
} from "./chunk-Y3AY7I5U.js";
import {
  f
} from "./chunk-WZBMMIVS.js";
import {
  u
} from "./chunk-WLGGSXQY.js";
import {
  j as j2
} from "./chunk-T7KGE6VP.js";
import {
  a
} from "./chunk-T57WVICI.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  n as n2
} from "./chunk-5EWD56QJ.js";
import {
  C as C2
} from "./chunk-PAGKMWJH.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j,
  n as n3
} from "./chunk-YUVX6H42.js";
import {
  g as g2
} from "./chunk-RDUV6YP6.js";
import {
  v
} from "./chunk-6P7HXSJ6.js";
import {
  DateTime
} from "./chunk-AIKBABBU.js";
import {
  r
} from "./chunk-A42OBC4U.js";
import {
  J
} from "./chunk-F7TCEOHX.js";
import {
  g
} from "./chunk-RYSF6YCR.js";
import {
  S,
  n
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/arcade/arcadeEnvironment.js
function n5(n8) {
  if ("string" == typeof n8) return n8.toLowerCase();
  if ("name" in n8) return n8.name.toLowerCase();
  if ("string" != typeof n8.value) throw new a2(null, r4.InvalidIdentifier, null);
  return n8.value.toLowerCase();
}

// node_modules/@arcgis/core/arcade/ArcadeModuleLoader.js
var s = class {
  constructor(s4, t7) {
    this._moduleSingletons = s4, this._syntaxModules = t7;
  }
  loadLibrary(s4) {
    if (null == this._syntaxModules) return null;
    const t7 = this._syntaxModules[s4];
    return t7 ? { syntax: t7.script, uri: t7.uri } : null;
  }
};

// node_modules/@arcgis/core/arcade/containerUtils.js
var p2 = { point: ["hasZ", "hasM", "spatialReference", "type", "x", "y", "z", "m"], multipoint: ["hasZ", "hasM", "spatialReference", "type", "points"], polyline: ["hasZ", "hasM", "spatialReference", "type", "paths"], polygon: ["hasZ", "hasM", "spatialReference", "type", "rings"], extent: ["hasZ", "hasM", "spatialReference", "type", "xmin", "xmax", "ymin", "ymax", "zmin", "zmax", "mmin", "mmax"] };
function f3(e3) {
  return p2[e3.type];
}
var m2 = 0;
function d2(s4, i7, c2, o3, u3 = 1) {
  let h5;
  switch (i7 = i7.toLowerCase()) {
    case "hasz": {
      const e3 = s4.hasZ;
      return void 0 !== e3 && e3;
    }
    case "hasm": {
      const e3 = s4.hasM;
      return void 0 !== e3 && e3;
    }
    case "spatialreference": {
      let a5 = s4.spatialReference._arcadeCacheId;
      if (void 0 === a5) {
        let e3 = true;
        g.isFrozen(s4.spatialReference) && (e3 = false), e3 && (m2++, s4.spatialReference._arcadeCacheId = m2, a5 = m2);
      }
      const t7 = new C({ wkt: s4.spatialReference.wkt, wkid: s4.spatialReference.wkid });
      return void 0 !== a5 && (t7._arcadeCacheId = "SPREF" + a5.toString()), t7;
    }
  }
  switch (s4.type) {
    case "extent":
      switch (i7) {
        case "xmin":
        case "xmax":
        case "ymin":
        case "ymax":
        case "zmin":
        case "zmax":
        case "mmin":
        case "mmax": {
          const e3 = s4[i7];
          return void 0 !== e3 ? e3 : null;
        }
        case "type":
          return "Extent";
      }
      break;
    case "polygon":
      switch (i7) {
        case "rings":
          h5 = s4.cache._arcadeCacheId, void 0 === h5 && (m2++, h5 = m2, s4.cache._arcadeCacheId = h5);
          return new h2(s4.rings, s4.spatialReference, true === s4.hasZ, true === s4.hasM, h5);
        case "type":
          return "Polygon";
      }
      break;
    case "point":
      switch (i7) {
        case "x":
        case "y":
        case "z":
        case "m":
          return s4[i7] ?? null;
        case "type":
          return "Point";
      }
      break;
    case "polyline":
      switch (i7) {
        case "paths":
          h5 = s4.cache._arcadeCacheId, void 0 === h5 && (m2++, h5 = m2, s4.cache._arcadeCacheId = h5);
          return new h2(s4.paths, s4.spatialReference, true === s4.hasZ, true === s4.hasM, h5);
        case "type":
          return "Polyline";
      }
      break;
    case "multipoint":
      switch (i7) {
        case "points":
          h5 = s4.cache._arcadeCacheId, void 0 === h5 && (m2++, h5 = m2, s4.cache._arcadeCacheId = h5);
          return new i3(s4.points, s4.spatialReference, true === s4.hasZ, true === s4.hasM, h5, 1);
        case "type":
          return "Multipoint";
      }
  }
  if (1 === u3) throw new a2(c2, r4.InvalidIdentifier, o3);
  return 2 === u3 ? { keystate: "notfound" } : null;
}
function y(e3, a5) {
  let t7, r7 = e3;
  if (null == r7) return null;
  if (o(a5)) t7 = a5;
  else if (ee(a5)) t7 = a5.toArray();
  else {
    if (null == a5) return null;
    t7 = [a5];
  }
  for (const n8 of t7) {
    if (W(r7)) {
      if (false === e(n8)) return null;
      if (!r7.hasField(n8)) return null;
      r7 = r7.field(n8);
    } else if (U(r7)) {
      if (false === e(n8)) return null;
      r7 = d2(r7, n8, null, null, 0);
    } else if (o(r7)) {
      if (false === n4(n8)) return null;
      r7 = n8 >= 0 ? r7[n8] : r7[r7.length + n8];
    } else {
      if (!ee(r7)) return null;
      if (false === n4(n8)) return null;
      r7 = n8 >= 0 ? r7.get(n8) : r7.get(r7.length() + n8);
    }
    if (null == r7) return null;
  }
  return r7;
}

// node_modules/@arcgis/core/arcade/treeAnalysis.js
var n6 = { all: { min: 2, max: 2 }, time: { min: 0, max: 4 }, dateonly: { min: 0, max: 3 }, getenvironment: { min: 0, max: 0 }, none: { min: 2, max: 2 }, any: { min: 2, max: 2 }, reduce: { min: 2, max: 3 }, map: { min: 2, max: 2 }, filter: { min: 2, max: 2 }, fromcodepoint: { min: 1, max: -1 }, fromcharcode: { min: 1, max: -1 }, tocodepoint: { min: 1, max: 2 }, tocharcode: { min: 1, max: 2 }, concatenate: { min: 0, max: -1 }, expects: { min: 1, max: -1 }, getfeatureset: { min: 1, max: 2 }, week: { min: 1, max: 2 }, fromjson: { min: 1, max: 1 }, length3d: { min: 1, max: 2 }, tohex: { min: 1, max: 1 }, hash: { min: 1, max: 1 }, timezone: { min: 1, max: 1 }, timezoneoffset: { min: 1, max: 1 }, changetimezone: { min: 2, max: 2 }, isoweek: { min: 1, max: 1 }, isoweekday: { min: 1, max: 1 }, hasvalue: { min: 2, max: 2 }, isomonth: { min: 1, max: 1 }, isoyear: { min: 1, max: 1 }, resize: { min: 2, max: 3 }, slice: { min: 0, max: -1 }, splice: { min: 0, max: -1 }, push: { min: 2, max: 2 }, pop: { min: 1, max: 1 }, includes: { min: 2, max: 2 }, array: { min: 0, max: 2 }, front: { min: 1, max: 1 }, back: { min: 1, max: 1 }, insert: { min: 3, max: 3 }, erase: { min: 2, max: 2 }, split: { min: 2, max: 4 }, guid: { min: 0, max: 1 }, standardizeguid: { min: 2, max: 2 }, today: { min: 0, max: 0 }, angle: { min: 2, max: 3 }, bearing: { min: 2, max: 3 }, urlencode: { min: 1, max: 1 }, now: { min: 0, max: 0 }, timestamp: { min: 0, max: 0 }, day: { min: 1, max: 1 }, month: { min: 1, max: 1 }, year: { min: 1, max: 1 }, hour: { min: 1, max: 1 }, second: { min: 1, max: 1 }, millisecond: { min: 1, max: 1 }, minute: { min: 1, max: 1 }, weekday: { min: 1, max: 1 }, toutc: { min: 1, max: 1 }, tolocal: { min: 1, max: 1 }, date: { min: 0, max: 8 }, datediff: { min: 2, max: 4 }, dateadd: { min: 2, max: 3 }, trim: { min: 1, max: 1 }, text: { min: 1, max: 2 }, left: { min: 2, max: 2 }, right: { min: 2, max: 2 }, mid: { min: 2, max: 3 }, upper: { min: 1, max: 1 }, proper: { min: 1, max: 2 }, lower: { min: 1, max: 1 }, find: { min: 2, max: 3 }, iif: { min: 3, max: 3 }, decode: { min: 2, max: -1 }, when: { min: 2, max: -1 }, defaultvalue: { min: 2, max: 3 }, isempty: { min: 1, max: 1 }, domaincode: { min: 2, max: 4 }, domainname: { min: 2, max: 4 }, polygon: { min: 1, max: 1 }, point: { min: 1, max: 1 }, polyline: { min: 1, max: 1 }, extent: { min: 1, max: 1 }, multipoint: { min: 1, max: 1 }, ringisclockwise: { min: 1, max: 1 }, geometry: { min: 1, max: 1 }, count: { min: 0, max: -1 }, number: { min: 1, max: 2 }, acos: { min: 1, max: 1 }, asin: { min: 1, max: 1 }, atan: { min: 1, max: 1 }, atan2: { min: 2, max: 2 }, ceil: { min: 1, max: 2 }, floor: { min: 1, max: 2 }, round: { min: 1, max: 2 }, cos: { min: 1, max: 1 }, exp: { min: 1, max: 1 }, log: { min: 1, max: 1 }, min: { min: 0, max: -1 }, constrain: { min: 3, max: 3 }, console: { min: 0, max: -1 }, max: { min: 0, max: -1 }, pow: { min: 2, max: 2 }, random: { min: 0, max: 0 }, sqrt: { min: 1, max: 1 }, sin: { min: 1, max: 1 }, tan: { min: 1, max: 1 }, abs: { min: 1, max: 1 }, isnan: { min: 1, max: 1 }, stdev: { min: 0, max: -1 }, average: { min: 0, max: -1 }, mean: { min: 0, max: -1 }, sum: { min: 0, max: -1 }, variance: { min: 0, max: -1 }, distinct: { min: 0, max: -1 }, first: { min: 1, max: 1 }, top: { min: 2, max: 2 }, boolean: { min: 1, max: 1 }, dictionary: { min: 0, max: -1 }, typeof: { min: 1, max: 1 }, reverse: { min: 1, max: 1 }, replace: { min: 3, max: 4 }, sort: { min: 1, max: 2 }, feature: { min: 1, max: -1 }, haskey: { min: 2, max: 2 }, indexof: { min: 2, max: 2 }, disjoint: { min: 2, max: 2 }, intersects: { min: 2, max: 2 }, touches: { min: 2, max: 2 }, crosses: { min: 2, max: 2 }, within: { min: 2, max: 2 }, contains: { min: 2, max: 2 }, overlaps: { min: 2, max: 2 }, equals: { min: 2, max: 2 }, relate: { min: 3, max: 3 }, intersection: { min: 2, max: 2 }, union: { min: 1, max: 2 }, difference: { min: 2, max: 2 }, symmetricdifference: { min: 2, max: 2 }, clip: { min: 2, max: 2 }, cut: { min: 2, max: 2 }, area: { min: 1, max: 2 }, areageodetic: { min: 1, max: 2 }, length: { min: 1, max: 2 }, lengthgeodetic: { min: 1, max: 2 }, distancegeodetic: { min: 2, max: 3 }, distance: { min: 2, max: 3 }, densify: { min: 2, max: 3 }, densifygeodetic: { min: 2, max: 3 }, generalize: { min: 2, max: 4 }, buffer: { min: 2, max: 3 }, buffergeodetic: { min: 2, max: 3 }, offset: { min: 2, max: 6 }, rotate: { min: 2, max: 3 }, issimple: { min: 1, max: 1 }, simplify: { min: 1, max: 1 }, convexhull: { min: 1, max: 1 }, centroid: { min: 1, max: 1 }, nearestcoordinate: { min: 2, max: 2 }, nearestvertex: { min: 2, max: 2 }, isselfintersecting: { min: 1, max: 1 }, multiparttosinglepart: { min: 1, max: 1 }, setgeometry: { min: 2, max: 2 }, portal: { min: 1, max: 1 }, getuser: { min: 0, max: 2 }, subtypes: { min: 1, max: 1 }, subtypecode: { min: 1, max: 1 }, subtypename: { min: 1, max: 1 }, domain: { min: 2, max: 3 }, convertdirection: { min: 3, max: 3 }, sqltimestamp: { min: 1, max: 3 }, schema: { min: 1, max: 1 }, measuretocoordinate: { min: 2, max: 2 }, distancetocoordinate: { min: 2, max: 2 }, pointtocoordinate: { min: 2, max: 2 } };
var a3 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
var t5 = { functionDefinitions: /* @__PURE__ */ new Map(), constantDefinitions: /* @__PURE__ */ new Map() };
for (const h5 of ["pi", "infinity"]) t5.constantDefinitions.set(h5, { type: "constant" }), a3.constantDefinitions.set(h5, { type: "constant" });
t5.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "newline", type: "constant" }] }), a3.constantDefinitions.set("textformatting", { type: "namespace", key: "textformatting", members: [{ key: "backwardslash", type: "constant" }, { key: "tab", type: "constant" }, { key: "singlequote", type: "constant" }, { key: "doublequote", type: "constant" }, { key: "forwardslash", type: "constant" }, { key: "newline", type: "constant" }] });
for (const h5 in n6) {
  const e3 = n6[h5];
  t5.functionDefinitions.set(h5, { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] }), a3.functionDefinitions.set(h5, { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] });
}
var i5 = /* @__PURE__ */ new Set(["attachments", "featureset", "featuresetbyassociation", "featuresetbyid", "featuresetbyname", "featuresetbyportalitem", "featuresetbyrelationshipname", "featuresetbyurl", "filterbysubtypecode", "getfeatureset", "getfeaturesetinfo", "getuser", "knowledgegraphbyportalitem", "querygraph"]);
var m3 = /* @__PURE__ */ new Set(["area", "areageodetic", "buffer", "buffergeodetic", "centroid", "clip", "contains", "convexhull", "crosses", "cut", "densify", "densifygeodetic", "difference", "disjoint", "distance", "distancegeodetic", "distancetocoordinate", "equals", "generalize", "intersection", "intersects", "issimple", "length", "length3d", "lengthgeodetic", "measuretocoordinate", "multiparttosinglepart", "nearestcoordinate", "nearestvertex", "offset", "overlaps", "pointtocoordinate", "relate", "rotate", "simplify", "symmetricdifference", "touches", "union", "within"]);
function s2(e3, n8) {
  var _a;
  const i7 = "sync" === n8 ? a3 : t5;
  i7.functionDefinitions.has(e3.name.toLowerCase()) ? (_a = i7.functionDefinitions.get(e3.name.toLowerCase())) == null ? void 0 : _a.overloads.push({ type: "function", parametersInfo: { min: e3.min, max: e3.max } }) : i7.functionDefinitions.set(e3.name.toLowerCase(), { overloads: [{ type: "function", parametersInfo: { min: e3.min, max: e3.max } }] });
}
function o2(e3, n8) {
  if (e3) for (const a5 of e3) r5(a5, n8);
}
function r5(e3, n8) {
  if (e3 && false !== n8(e3)) switch (e3.type) {
    case "ImportDeclaration":
      o2(e3.specifiers, n8), r5(e3.source, n8);
      break;
    case "ExportNamedDeclaration":
      r5(e3.declaration, n8);
      break;
    case "ArrayExpression":
      o2(e3.elements, n8);
      break;
    case "AssignmentExpression":
    case "BinaryExpression":
    case "LogicalExpression":
      r5(e3.left, n8), r5(e3.right, n8);
      break;
    case "BlockStatement":
    case "Program":
      o2(e3.body, n8);
      break;
    case "BreakStatement":
    case "ContinueStatement":
    case "EmptyStatement":
    case "Identifier":
    case "Literal":
      break;
    case "CallExpression":
      r5(e3.callee, n8), o2(e3.arguments, n8);
      break;
    case "ExpressionStatement":
      r5(e3.expression, n8);
      break;
    case "ForInStatement":
    case "ForOfStatement":
      r5(e3.left, n8), r5(e3.right, n8), r5(e3.body, n8);
      break;
    case "ForStatement":
      r5(e3.init, n8), r5(e3.test, n8), r5(e3.update, n8), r5(e3.body, n8);
      break;
    case "WhileStatement":
      r5(e3.test, n8), r5(e3.body, n8);
      break;
    case "FunctionDeclaration":
      r5(e3.id, n8), o2(e3.params, n8), r5(e3.body, n8);
      break;
    case "IfStatement":
      r5(e3.test, n8), r5(e3.consequent, n8), r5(e3.alternate, n8);
      break;
    case "MemberExpression":
      r5(e3.object, n8), r5(e3.property, n8);
      break;
    case "ObjectExpression":
      o2(e3.properties, n8);
      break;
    case "Property":
      r5(e3.key, n8), r5(e3.value, n8);
      break;
    case "ReturnStatement":
    case "UnaryExpression":
    case "UpdateExpression":
      r5(e3.argument, n8);
      break;
    case "VariableDeclaration":
      o2(e3.declarations, n8);
      break;
    case "VariableDeclarator":
      r5(e3.id, n8), r5(e3.init, n8);
      break;
    case "TemplateLiteral":
      o2(e3.expressions, n8), o2(e3.quasis, n8);
  }
}
function c(e3) {
  return "Literal" === (e3 == null ? void 0 : e3.type) && "string" == typeof e3.value;
}
function x(e3, n8) {
  let a5 = false;
  const t7 = n8.toLowerCase();
  return r5(e3, (e4) => !a5 && ("Identifier" === e4.type && e4.name && e4.name.toLowerCase() === t7 && (a5 = true), true)), a5;
}
function l2(n8) {
  const a5 = [];
  return r5(n8, (n9) => ("ImportDeclaration" === n9.type && n9.source && n9.source.value && a5.push({ libname: n5(n9.specifiers[0].local), source: n9.source.value }), true)), a5;
}
function u2(e3, n8) {
  let a5 = false;
  const t7 = n8.toLowerCase();
  return r5(e3, (e4) => !a5 && ("CallExpression" !== e4.type || "Identifier" !== e4.callee.type || !e4.callee.name || e4.callee.name.toLowerCase() !== t7 || (a5 = true, false))), a5;
}
function p3(n8) {
  const a5 = [];
  return r5(n8, (n9) => "MemberExpression" !== n9.type || "Identifier" !== n9.object.type || (("Identifier" === n9.property.type || "Literal" === n9.property.type && "string" == typeof n9.property.value) && a5.push({ varId: n5(n9.object), memberId: n5(n9.property) }), false)), a5;
}
function f4(n8) {
  const a5 = [];
  return r5(n8, (n9) => {
    if ("CallExpression" === n9.type && "Identifier" === n9.callee.type) switch (n5(n9.callee)) {
      case "expects":
        if (n9.arguments.length > 1) {
          const [t7, ...i7] = n9.arguments;
          if ("Identifier" === (t7 == null ? void 0 : t7.type)) {
            const n10 = n5(t7);
            for (const e3 of i7) c(e3) && a5.push({ varId: n10, memberNamePattern: e3.value });
          }
        }
        return false;
      case "domainname":
      case "domaincode":
      case "domain":
      case "haskey":
      case "hasvalue":
        if (n9.arguments.length >= 2) {
          const [t7, i7] = n9.arguments;
          "Identifier" === (t7 == null ? void 0 : t7.type) && c(i7) && a5.push({ varId: n5(t7), memberNamePattern: i7.value });
        }
        return true;
      case "defaultvalue":
        if (n9.arguments.length > 2) {
          const [t7, i7] = n9.arguments;
          "Identifier" === (t7 == null ? void 0 : t7.type) && c(i7) && a5.push({ varId: n5(t7), memberNamePattern: i7.value });
        }
        return true;
      default:
        return true;
    }
    return "MemberExpression" !== n9.type || "Identifier" !== n9.object.type || (n9.computed ? !!c(n9.property) && (a5.push({ varId: n5(n9.object), memberNamePattern: n9.property.value }), false) : (a5.push({ varId: n5(n9.object), memberNamePattern: n9.property.name }), false));
  }), a5;
}
function y2(e3) {
  const n8 = [];
  return r5(e3, (e4) => ("CallExpression" === e4.type && "Identifier" === e4.callee.type && n8.push(e4.callee.name.toLowerCase()), true)), n8;
}
function b2(e3, n8 = []) {
  let a5 = null;
  if (void 0 === e3.usesFeatureSet) {
    null === a5 && (a5 = y2(e3)), e3.usesFeatureSet = false;
    for (let n9 = 0; n9 < a5.length; n9++) i5.has(a5[n9]) && (e3.usesFeatureSet = true, e3.isAsync = true);
    if (false === e3.usesFeatureSet && n8 && n8.length > 0) {
      for (const a6 of n8) if (x(e3, a6)) {
        e3.usesFeatureSet = true, e3.isAsync = true;
        break;
      }
    }
  }
  if (void 0 === e3.usesModules) {
    e3.usesModules = false;
    l2(e3).length > 0 && (e3.usesModules = true);
  }
  if (void 0 === e3.usesGeometry) {
    e3.usesGeometry = false, null === a5 && (a5 = y2(e3));
    for (let n9 = 0; n9 < a5.length; n9++) m3.has(a5[n9]) && (e3.usesGeometry = true);
  }
}

// node_modules/@arcgis/core/chunks/array.js
function F(F3) {
  function p8(n8, o3, i7) {
    if (n8 instanceof t2) return n8.toArray();
    if (o(n8)) return n8;
    throw new a2(o3, r4.InvalidParameter, i7);
  }
  function y4(n8, t7) {
    const r7 = n8.length, e3 = Math.floor(r7 / 2);
    return 0 === r7 ? [] : 1 === r7 ? [n8[0]] : v5(y4(n8.slice(0, e3), t7), y4(n8.slice(e3, r7), t7), t7);
  }
  function v5(n8, t7, r7) {
    const e3 = [];
    for (; n8.length > 0 || t7.length > 0; ) if (n8.length > 0 && t7.length > 0) {
      let o3 = r7(n8[0], t7[0]);
      isNaN(o3) && (o3 = 0), o3 <= 0 ? (e3.push(n8[0]), n8 = n8.slice(1)) : (e3.push(t7[0]), t7 = t7.slice(1));
    } else n8.length > 0 ? (e3.push(n8[0]), n8 = n8.slice(1)) : t7.length > 0 && (e3.push(t7[0]), t7 = t7.slice(1));
    return e3;
  }
  async function P5(n8, t7) {
    const r7 = n8.length, e3 = Math.floor(r7 / 2);
    if (0 === r7) return [];
    if (1 === r7) return [n8[0]];
    const o3 = [await P5(n8.slice(0, e3), t7), await P5(n8.slice(e3, r7), t7)];
    return I4(o3[0], o3[1], t7, []);
  }
  async function I4(n8, t7, r7, e3) {
    const o3 = e3;
    if (n8.length > 0 || t7.length > 0) {
      if (n8.length > 0 && t7.length > 0) {
        let i7 = await r7(n8[0], t7[0]);
        return isNaN(i7) && (i7 = 1), i7 <= 0 ? (o3.push(n8[0]), n8 = n8.slice(1)) : (o3.push(t7[0]), t7 = t7.slice(1)), I4(n8, t7, r7, e3);
      }
      return n8.length > 0 ? (o3.push(n8[0]), I4(n8 = n8.slice(1), t7, r7, e3)) : (o3.push(t7[0]), I4(n8, t7 = t7.slice(1), r7, e3));
    }
    return e3;
  }
  function N2(n8, e3, i7, a5) {
    oe(i7, 1, 2, n8, e3);
    let s4 = i7[0];
    if (ee(s4) && (s4 = s4.toArray()), false === o(s4)) throw new a2(n8, r4.InvalidParameter, e3);
    if (i7.length > 1) {
      if (false === G(i7[1])) throw new a2(n8, r4.InvalidParameter, e3);
      let o3 = s4;
      const u3 = i7[1].createFunction(n8);
      return a5 ? P5(o3, u3) : (o3 = y4(o3, (n9, t7) => u3(n9, t7)), o3);
    }
    let h5 = s4;
    if (0 === h5.length) return [];
    const g5 = {};
    for (let t7 = 0; t7 < h5.length; t7++) {
      const n9 = E(h5[t7]);
      "" !== n9 && (g5[n9] = true);
    }
    if (true === g5.Array || true === g5.Dictionary || true === g5.Feature || true === g5.Voxel || true === g5.Point || true === g5.Polygon || true === g5.Polyline || true === g5.Multipoint || true === g5.Extent || true === g5.Function) return h5.slice();
    let m5 = 0, F4 = "";
    for (const t7 in g5) m5++, F4 = t7;
    return h5 = m5 > 1 || "String" === F4 ? y4(h5, (n9, t7) => {
      if (null == n9 || n9 === v2) return null == t7 || t7 === v2 ? 0 : 1;
      if (null == t7 || t7 === v2) return -1;
      const r7 = ye(n9), e4 = ye(t7);
      return r7 < e4 ? -1 : r7 === e4 ? 0 : 1;
    }) : "Number" === F4 ? y4(h5, (n9, t7) => n9 - t7) : "Boolean" === F4 ? y4(h5, (n9, t7) => n9 === t7 ? 0 : t7 ? -1 : 1) : "Date" === F4 ? y4(h5, (n9, t7) => n9.toNumber() - t7.toNumber()) : h5.slice(), h5;
  }
  F3.functions.array = function(e3, c2) {
    return F3.standardFunction(e3, c2, (s4, l4, f6) => {
      if (oe(f6, 0, 2, e3, c2), 0 === f6.length) return [];
      if (1 === f6.length && null === f6[0]) return [];
      if (o(f6[0])) {
        if (2 === f6.length && false === t(f6[1])) throw new a2(e3, r4.InvalidParameter, c2);
        return true === q(f6[1], false) ? f2(f6[0]) : f6[0].slice();
      }
      if (ee(f6[0])) {
        if (2 === f6.length && false === t(f6[1])) throw new a2(e3, r4.InvalidParameter, c2);
        return true === q(f6[1], false) ? f2(f6[0]) : f6[0].toArray().slice();
      }
      const d4 = be(f6[0]);
      if (isNaN(d4) || false === r3(d4)) throw new a2(e3, r4.InvalidParameter, c2);
      const h5 = q(f6[1], null), F4 = new Array(d4);
      return F4.fill(h5), F4;
    });
  }, F3.functions.front = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, a5, c2) => {
      if (oe(c2, 1, 1, n8, e3), ee(c2[0])) {
        if (c2[0].length() <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        return c2[0].get(0);
      }
      if (o(c2[0])) {
        if (c2[0].length <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        return c2[0][0];
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.back = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, a5, c2) => {
      if (oe(c2, 1, 1, n8, e3), ee(c2[0])) {
        if (c2[0].length() <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        return c2[0].get(c2[0].length() - 1);
      }
      if (o(c2[0])) {
        if (c2[0].length <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        return c2[0][c2[0].length - 1];
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.push = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, u3, a5) => {
      if (oe(a5, 1, 2, n8, e3), o(a5[0])) return a5[0][a5[0].length] = a5[1], a5[0].length;
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.pop = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, u3, a5) => {
      if (oe(a5, 1, 1, n8, e3), o(a5[0])) {
        if (a5[0].length <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        const o3 = a5[0][a5[0].length - 1];
        return a5[0].length = a5[0].length - 1, o3;
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.erase = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, u3, s4) => {
      if (oe(s4, 2, 2, n8, e3), o(s4[0])) {
        let o3 = be(s4[1]);
        if (isNaN(o3) || false === r3(o3)) throw new a2(n8, r4.InvalidParameter, e3);
        const i8 = s4[0];
        if (i8.length <= 0) throw new a2(n8, r4.OutOfBounds, e3);
        if (o3 < 0 && (o3 = i8.length + o3), o3 < 0) throw new a2(n8, r4.OutOfBounds, e3);
        if (o3 >= i8.length) throw new a2(n8, r4.OutOfBounds, e3);
        return i8.splice(o3, 1), v2;
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.insert = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, u3, s4) => {
      if (oe(s4, 3, 3, n8, e3), o(s4[0])) {
        const o3 = be(s4[1]);
        if (isNaN(o3) || false === r3(o3)) throw new a2(n8, r4.InvalidParameter, e3);
        const i8 = s4[2], u4 = s4[0];
        if (o3 > u4.length) throw new a2(n8, r4.OutOfBounds, e3);
        if (o3 < 0 && o3 < -1 * u4.length) throw new a2(n8, r4.OutOfBounds, e3);
        return o3 === u4.length ? (u4[o3] = i8, v2) : (u4.splice(o3, 0, i8), v2);
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.resize = function(n8, e3) {
    return F3.standardFunction(n8, e3, (u3, s4, l4) => {
      if (oe(l4, 2, 3, n8, e3), o(l4[0])) {
        const o3 = be(l4[1]);
        if (isNaN(o3) || false === r3(o3)) throw new a2(n8, r4.InvalidParameter, e3);
        if (o3 < 0) throw new a2(n8, r4.InvalidParameter, e3);
        const u4 = q(l4[2], null), s5 = l4[0];
        if (s5.length >= o3) return s5.length = o3, v2;
        const f6 = s5.length;
        s5.length = o3;
        for (let n9 = f6; n9 < s5.length; n9++) s5[n9] = u4;
        return v2;
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.includes = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, a5, c2) => {
      if (oe(c2, 2, 2, n8, e3), o(c2[0])) {
        const n9 = c2[1];
        return !!c2[0].some((t7) => me(t7, n9));
      }
      if (ee(c2[0])) {
        const n9 = c2[1];
        return !!c2[0].toArray().some((t7) => me(t7, n9));
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.slice = function(n8, e3) {
    return F3.standardFunction(n8, e3, (c2, s4, l4) => {
      if (oe(l4, 1, 3, n8, e3), o(l4[0])) {
        const o3 = be(q(l4[1], 0)), u3 = be(q(l4[2], l4[0].length));
        if (isNaN(o3) || false === r3(o3)) throw new a2(n8, r4.InvalidParameter, e3);
        if (isNaN(u3) || false === r3(u3)) throw new a2(n8, r4.InvalidParameter, e3);
        return l4[0].slice(o3, u3);
      }
      if (ee(l4[0])) {
        const o3 = l4[0], u3 = be(q(l4[1], 0)), c3 = be(q(l4[2], o3.length()));
        if (isNaN(u3) || false === r3(u3)) throw new a2(n8, r4.InvalidParameter, e3);
        if (isNaN(c3) || false === r3(c3)) throw new a2(n8, r4.InvalidParameter, e3);
        return o3.toArray().slice(u3, c3);
      }
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.splice = function(n8, t7) {
    return F3.standardFunction(n8, t7, (n9, t8, r7) => {
      const e3 = [];
      for (let o3 = 0; o3 < r7.length; o3++) o(r7[o3]) ? e3.push(...r7[o3]) : ee(r7[o3]) ? e3.push(...r7[o3].toArray()) : e3.push(r7[o3]);
      return e3;
    });
  }, F3.functions.top = function(n8, e3) {
    return F3.standardFunction(n8, e3, (i7, c2, s4) => {
      if (oe(s4, 2, 2, n8, e3), o(s4[0])) return be(s4[1]) >= s4[0].length ? s4[0].slice() : s4[0].slice(0, be(s4[1]));
      if (ee(s4[0])) return be(s4[1]) >= s4[0].length() ? s4[0].slice() : s4[0].slice(0, be(s4[1]));
      throw new a2(n8, r4.InvalidParameter, e3);
    });
  }, F3.functions.first = function(n8, t7) {
    return F3.standardFunction(n8, t7, (r7, e3, i7) => (oe(i7, 1, 1, n8, t7), o(i7[0]) ? 0 === i7[0].length ? null : i7[0][0] : ee(i7[0]) ? 0 === i7[0].length() ? null : i7[0].get(0) : null));
  }, "sync" === F3.mode && (F3.functions.sort = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => N2(n8, r7, e3, false));
  }, F3.functions.any = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        const t9 = i7(n9);
        if (t(t9) && true === t9) return true;
      }
      return false;
    });
  }, F3.functions.all = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        if (true !== i7(n9)) return false;
      }
      return true;
    });
  }, F3.functions.none = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        if (true === i7(n9)) return false;
      }
      return true;
    });
  }, F3.functions.reduce = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 3, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      return 2 === e3.length ? 0 === u3.length ? null : u3.reduce((n9, t9) => {
        const r8 = i7(n9, t9);
        return n9 = void 0 !== r8 && r8 !== v2 ? r8 : null;
      }) : u3.reduce((n9, t9) => {
        const r8 = i7(n9, t9);
        return n9 = void 0 !== r8 && r8 !== v2 ? r8 : null;
      }, e3[2]);
    });
  }, F3.functions.map = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7), a5 = [];
      for (const n9 of u3) {
        const t9 = i7(n9);
        void 0 !== t9 && t9 !== v2 ? a5.push(t9) : a5.push(null);
      }
      return a5;
    });
  }, F3.functions.filter = function(n8, t7) {
    return F3.standardFunction(n8, t7, (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7), a5 = [];
      for (const n9 of u3) {
        true === i7(n9) && a5.push(n9);
      }
      return a5;
    });
  }), "async" === F3.mode && (F3.functions.sort = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => N2(n8, r7, e3, true));
  }, F3.functions.any = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        const t9 = await i7(n9);
        let r8 = null;
        if (r8 = S(r8) ? await t9 : t9, t(r8) && true === r8) return true;
      }
      return false;
    });
  }, F3.functions.all = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        const t9 = await i7(n9);
        let r8 = null;
        if (r8 = S(r8) ? await t9 : t9, true !== r8) return false;
      }
      return true;
    });
  }, F3.functions.none = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7);
      for (const n9 of u3) {
        const t9 = await i7(n9);
        let r8 = null;
        if (r8 = S(r8) ? await t9 : t9, true === r8) return false;
      }
      return true;
    });
  }, F3.functions.filter = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7), a5 = [];
      for (const n9 of u3) {
        const t9 = await i7(n9);
        let r8 = null;
        r8 = S(r8) ? await t9 : t9, true === r8 && a5.push(n9);
      }
      return a5;
    });
  }, F3.functions.reduce = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 3, n8, r7);
      const u3 = e3[1].createFunction(n8), a5 = p8(e3[0], n8, r7);
      let s4;
      if (e3.length > 2) {
        const n9 = q(e3[2], null);
        s4 = a5.reduce(async (n10, t9) => {
          let r8 = await n10;
          return void 0 !== r8 && r8 !== v2 || (r8 = null), u3(r8, t9);
        }, Promise.resolve(n9));
      } else {
        if (0 === a5.length) return null;
        s4 = a5.reduce(async (n9, t9, r8) => {
          if (r8 <= 1) return u3(n9, t9);
          let e4 = await n9;
          return void 0 !== e4 && e4 !== v2 || (e4 = null), u3(e4, t9);
        });
      }
      return s4.then((n9) => void 0 !== n9 && n9 !== v2 ? n9 : null);
    });
  }, F3.functions.map = function(n8, t7) {
    return F3.standardFunctionAsync(n8, t7, async (t8, r7, e3) => {
      oe(e3, 2, 2, n8, r7);
      const i7 = e3[1].createFunction(n8), u3 = p8(e3[0], n8, r7), a5 = [];
      for (const n9 of u3) {
        const t9 = await i7(n9);
        let r8 = null;
        r8 = S(r8) ? await t9 : t9, void 0 !== r8 && r8 !== v2 ? a5.push(r8) : a5.push(null);
      }
      return a5;
    });
  });
}
var p4 = Object.freeze(Object.defineProperty({ __proto__: null, registerFunctions: F }, Symbol.toStringTag, { value: "Module" }));

// node_modules/@arcgis/core/arcade/functions/date.js
function k2(n8, e3, r7) {
  return n8 + (T(r7) ? P3 : D3)[e3];
}
function T(n8) {
  return n8 % 4 == 0 && (n8 % 100 != 0 || n8 % 400 == 0);
}
var D3 = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
var P3 = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function S2(n8) {
  return null === n8 ? n8 : false === n8.isValid ? null : n8;
}
function Z2(n8, e3) {
  return "" === n8 || "default" === n8.toLowerCase().trim() ? Be(e3) : "z" === n8 || "Z" === n8 ? "UTC" : n8;
}
function p5(n8, e3) {
  return ne(n8) ? n8.toArcadeDate() : Ne(n8, Be(e3));
}
function C3(T4, D5) {
  T4.today = function(e3, r7) {
    return D5(e3, r7, (t7, a5, s4) => {
      oe(s4, 0, 0, e3, r7);
      const i7 = /* @__PURE__ */ new Date();
      return i7.setHours(0, 0, 0, 0), m.dateJSAndZoneToArcadeDate(i7, Be(e3));
    });
  }, T4.time = function(e3, c2) {
    return D5(e3, c2, (f6, m5, d4) => {
      switch (oe(d4, 0, 4, e3, c2), d4.length) {
        case 0: {
          const r7 = m.nowToArcadeDate(Be(e3));
          return new r2(r7.hour, r7.minute, r7.second, r7.millisecond);
        }
        case 1: {
          if (re(d4[0])) return d4[0].clone();
          if (te(d4[0])) return new r2(d4[0].hour, d4[0].minute, d4[0].second, d4[0].millisecond);
          if (ne(d4[0])) return new r2(0, 0, 0, 0);
          if (e(d4[0])) return r2.fromString(d4[0]);
          const n8 = be(d4[0]);
          return false === isNaN(n8) ? r2.fromMilliseconds(n8) : null;
        }
        case 2:
          return e(d4[0]) && e(d4[1]) ? r2.fromString(d4[0], d4[1]) : r2.fromParts(be(d4[0]), be(d4[1]), 0, 0);
        case 3:
          return r2.fromParts(be(d4[0]), be(d4[1]), be(d4[2]), 0);
        case 4:
          return r2.fromParts(be(d4[0]), be(d4[1]), be(d4[2]), be(d4[3]));
      }
      throw new a2(e3, r4.InvalidParameter, c2);
    });
  }, T4.dateonly = function(e3, r7) {
    return D5(e3, r7, (t7, s4, f6) => {
      if (oe(f6, 0, 3, e3, r7), 3 === f6.length) return i.fromParts(be(f6[0]), be(f6[1]) + 1, be(f6[2]));
      if (2 === f6.length) {
        const n8 = ye(f6[1]);
        return "" === n8 ? null : "X" === n8 ? i.fromSeconds(be(f6[0])) : "x" === n8 ? i.fromMilliseconds(be(f6[0])) : i.fromString(ye(f6[0]), n8);
      }
      if (1 === f6.length) {
        if (e(f6[0])) {
          if ("" === f6[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(f6[0])) return i.fromString(f6[0] + "-01-01");
        }
        if (ne(f6[0])) return f6[0].clone();
        if (te(f6[0])) return i.fromParts(f6[0].year, f6[0].monthJS + 1, f6[0].day);
        const n8 = be(f6[0]);
        return false === isNaN(n8) ? i.fromMilliseconds(n8) : e(f6[0]) ? i.fromString(f6[0]) : null;
      }
      if (0 === f6.length) {
        const r8 = m.nowToArcadeDate(Be(e3));
        return false === r8.isValid ? null : i.fromParts(r8.year, r8.monthJS + 1, r8.day);
      }
      return null;
    });
  }, T4.changetimezone = function(a5, s4) {
    return D5(a5, s4, (i7, m5, d4) => {
      if (oe(d4, 2, 2, a5, s4), null === d4[0]) return null;
      if (ne(d4[0])) throw new a2(a5, r4.CannotChangeTimeZoneDateOnly, s4);
      if (ne(d4[0])) throw new a2(a5, r4.CannotChangeTimeZoneTime, s4);
      const h5 = Ne(d4[0], Be(a5));
      if (null === h5) throw new a2(a5, r4.InvalidParameter, s4);
      const y4 = h(Z2(ye(d4[1]), a5), false);
      if (null === y4) return null;
      const N2 = m.arcadeDateAndZoneToArcadeDate(h5, y4);
      return false === N2.isValid ? null : N2;
    });
  }, T4.timezone = function(e3, r7) {
    return D5(e3, r7, (t7, a5, i7) => {
      if (oe(i7, 1, 2, e3, r7), re(i7[0])) return "Unknown";
      if (ne(i7[0])) return "Unknown";
      const c2 = Ne(i7[0], Be(e3));
      if (null === c2) return null;
      const m5 = c2.timeZone;
      return "system" === m5 ? m.systemTimeZoneCanonicalName : "utc" === m5.toLowerCase() ? "UTC" : "unknown" === m5.toLowerCase() ? "Unknown" : m5;
    });
  }, T4.timezoneoffset = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = Ne(a5[0], Be(n8));
      return null === s4 ? null : 60 * s4.timeZoneOffset * 1e3;
    });
  }, T4.now = function(e3, r7) {
    return D5(e3, r7, (t7, a5, s4) => {
      oe(s4, 0, 0, e3, r7);
      const i7 = m.nowToArcadeDate(Be(e3));
      return false === i7.isValid ? null : i7;
    });
  }, T4.timestamp = function(e3, r7) {
    return D5(e3, r7, (t7, u3, a5) => {
      oe(a5, 0, 0, e3, r7);
      const s4 = m.nowUTCToArcadeDate();
      return false === s4.isValid ? null : s4;
    });
  }, T4.toutc = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = Ne(a5[0], Be(n8));
      return null === s4 ? null : s4.toUTC();
    });
  }, T4.tolocal = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = Ne(a5[0], Be(n8));
      return null === s4 ? null : s4.toLocal();
    });
  }, T4.day = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.day;
    });
  }, T4.month = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.monthJS;
    });
  }, T4.year = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.year;
    });
  }, T4.hour = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      if (oe(a5, 1, 1, n8, e3), re(a5[0])) return a5[0].hour;
      const i7 = Ne(a5[0], Be(n8));
      return null === i7 ? NaN : i7.hour;
    });
  }, T4.second = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      if (oe(a5, 1, 1, n8, e3), re(a5[0])) return a5[0].second;
      const i7 = Ne(a5[0], Be(n8));
      return null === i7 ? NaN : i7.second;
    });
  }, T4.millisecond = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      if (oe(a5, 1, 1, n8, e3), re(a5[0])) return a5[0].millisecond;
      const i7 = Ne(a5[0], Be(n8));
      return null === i7 ? NaN : i7.millisecond;
    });
  }, T4.minute = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      if (oe(a5, 1, 1, n8, e3), re(a5[0])) return a5[0].minute;
      const i7 = Ne(a5[0], Be(n8));
      return null === i7 ? NaN : i7.minute;
    });
  }, T4.week = function(n8, e3) {
    return D5(n8, e3, (s4, i7, l4) => {
      oe(l4, 1, 2, n8, e3);
      const c2 = p5(l4[0], Be(n8));
      if (null === c2) return NaN;
      const f6 = be(q(l4[1], 0));
      if (f6 < 0 || f6 > 6) throw new a2(n8, r4.InvalidParameter, e3);
      const d4 = c2.day, h5 = c2.monthJS, y4 = c2.year, N2 = c2.dayOfWeekJS, w3 = k2(d4, h5, y4) - 1, g5 = Math.floor(w3 / 7);
      return N2 - f6 + (N2 - f6 < 0 ? 7 : 0) < w3 - 7 * g5 ? g5 + 1 : g5;
    });
  }, T4.weekday = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.dayOfWeekJS;
    });
  }, T4.isoweekday = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.dayOfWeekISO;
    });
  }, T4.isomonth = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.monthISO;
    });
  }, T4.isoweek = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.weekISO;
    });
  }, T4.isoyear = function(n8, e3) {
    return D5(n8, e3, (r7, t7, a5) => {
      oe(a5, 1, 1, n8, e3);
      const s4 = p5(a5[0], Be(n8));
      return null === s4 ? NaN : s4.yearISO;
    });
  }, T4.date = function(r7, t7) {
    return D5(r7, t7, (i7, m5, h5) => {
      if (oe(h5, 0, 8, r7, t7), 3 === h5.length) {
        if (ne(h5[0]) && re(h5[1]) && e(h5[2])) {
          const t8 = h(Z2(ye(h5[2]) ?? "unknown", r7), false);
          return null === t8 ? null : S2(m.fromParts(h5[0].year, h5[0].month, h5[0].day, h5[1].hour, h5[1].minute, h5[1].second, h5[1].millisecond, t8));
        }
        return S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), 0, 0, 0, 0, Be(r7)));
      }
      if (4 === h5.length) return S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), be(h5[3]), 0, 0, 0, Be(r7)));
      if (5 === h5.length) return S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), be(h5[3]), be(h5[4]), 0, 0, Be(r7)));
      if (6 === h5.length) return S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), be(h5[3]), be(h5[4]), be(h5[5]), 0, Be(r7)));
      if (7 === h5.length) return S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), be(h5[3]), be(h5[4]), be(h5[5]), be(h5[6]), Be(r7)));
      if (8 === h5.length) {
        const t8 = h(Z2(ye(h5[7]) ?? "unknown", r7), false);
        return null === t8 ? null : S2(m.fromParts(be(h5[0]), be(h5[1]) + 1, be(h5[2]), be(h5[3]), be(h5[4]), be(h5[5]), be(h5[6]), t8));
      }
      if (2 === h5.length) {
        if (ne(h5[0]) && e(h5[1])) {
          const t9 = h(Z2(ye(h5[1]) ?? "unknown", r7), false);
          return null === t9 ? null : S2(m.fromParts(h5[0].year, h5[0].month, h5[0].day, 0, 0, 0, 0, t9));
        }
        if (ne(h5[0]) && re(h5[1])) return S2(m.fromParts(h5[0].year, h5[0].month, h5[0].day, h5[1].hour, h5[1].minute, h5[1].second, h5[1].millisecond, "unknown"));
        let t8, o3 = ye(h5[1]);
        return "" === o3 ? null : (o3 = le(o3, true), t8 = "X" === o3 ? DateTime.fromSeconds(be(h5[0])) : "x" === o3 ? DateTime.fromMillis(be(h5[0])) : DateTime.fromFormat(ye(h5[0]), o3, { locale: r(), numberingSystem: "latn" }), t8.isValid ? m.dateTimeToArcadeDate(t8) : null);
      }
      if (1 === h5.length) {
        if (ne(h5[0])) return S2(m.fromParts(h5[0].year, h5[0].month, h5[0].day, 0, 0, 0, 0, "unknown"));
        if (e(h5[0])) {
          if ("" === h5[0].replaceAll(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")) return null;
          if (true === /^[0-9][0-9][0-9][0-9]$/.test(h5[0])) return Ne(h5[0] + "-01-01", Be(r7));
        }
        const e3 = be(h5[0]);
        if (false === isNaN(e3)) {
          const t8 = DateTime.fromMillis(e3);
          return t8.isValid ? m.dateTimeAndZoneToArcadeDate(t8, Be(r7)) : null;
        }
        return Ne(h5[0], Be(r7));
      }
      return 0 === h5.length ? m.nowToArcadeDate(Be(r7)) : null;
    });
  }, T4.datediff = function(e3, r7) {
    return D5(e3, r7, (t7, a5, i7) => {
      if (oe(i7, 2, 4, e3, r7), re(i7[0])) return re(i7[1]) ? i7[0].difference(i7[1], ye(i7[2])) : NaN;
      if (re(i7[1])) return NaN;
      if (ne(i7[0])) return ne(i7[1]) ? i7[0].difference(i7[1], ye(i7[2])) : NaN;
      if (ne(i7[1])) return NaN;
      let d4 = Ne(i7[0], Be(e3)), h5 = Ne(i7[1], Be(e3));
      if (null === d4 || null === h5) return NaN;
      let y4 = q(i7[3], "");
      switch ("" !== y4 && null !== y4 ? (y4 = Z2(ye(y4), e3), d4 = m.arcadeDateAndZoneToArcadeDate(d4, y4), h5 = m.arcadeDateAndZoneToArcadeDate(h5, y4)) : d4.timeZone !== h5.timeZone && (d4.isUnknownTimeZone ? d4 = m.arcadeDateAndZoneToArcadeDate(d4, h5.timeZone) : h5 = (h5.isUnknownTimeZone, m.arcadeDateAndZoneToArcadeDate(h5, d4.timeZone))), ye(i7[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          return d4.diff(h5, "days");
        case "months":
        case "month":
          return d4.diff(h5, "months");
        case "minutes":
        case "minute":
        case "m":
          return "M" === i7[2] ? d4.diff(h5, "months") : d4.diff(h5, "minutes");
        case "seconds":
        case "second":
        case "s":
          return d4.diff(h5, "seconds");
        case "milliseconds":
        case "millisecond":
        case "ms":
        default:
          return d4.diff(h5);
        case "hours":
        case "hour":
        case "h":
          return d4.diff(h5, "hours");
        case "years":
        case "year":
        case "y":
          return d4.diff(h5, "years");
      }
    });
  }, T4.dateadd = function(n8, e3) {
    return D5(n8, e3, (r7, t7, i7) => {
      oe(i7, 2, 3, n8, e3);
      let m5 = be(i7[1]);
      if (isNaN(m5) || m5 === 1 / 0 || m5 === -1 / 0) return re(i7[0]) || ne(i7[0]) ? i7[0].clone() : Ne(i7[0], Be(n8));
      let d4 = "milliseconds";
      switch (ye(i7[2]).toLowerCase()) {
        case "days":
        case "day":
        case "d":
          d4 = "days", m5 = ne(i7[0]) ? m5 : ae(m5);
          break;
        case "months":
        case "month":
          d4 = "months", m5 = ne(i7[0]) ? m5 : ae(m5);
          break;
        case "minutes":
        case "minute":
        case "m":
          d4 = "M" === i7[2] ? "months" : "minutes";
          break;
        case "seconds":
        case "second":
        case "s":
          d4 = "seconds";
          break;
        case "milliseconds":
        case "millisecond":
        case "ms":
          d4 = "milliseconds";
          break;
        case "hours":
        case "hour":
        case "h":
          d4 = "hours";
          break;
        case "years":
        case "year":
        case "y":
          d4 = "years";
      }
      if (re(i7[0])) return i7[0].plus(d4, m5);
      if (ne(i7[0])) return i7[0].plus(d4, m5);
      const y4 = Ne(i7[0], Be(n8));
      return null === y4 ? null : y4.plus({ [d4]: m5 });
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/feature.js
function h3(e3) {
  const n8 = e3 == null ? void 0 : e3.fullSchema();
  return (n8 == null ? void 0 : n8.datesInUnknownTimezone) ? "unknown" : (n8 == null ? void 0 : n8.dateFieldsTimeZone) || "UTC";
}
function T2(e3) {
  var _a;
  const n8 = (_a = e3.fullSchema()) == null ? void 0 : _a.fieldsIndex;
  return null == n8 && e3 instanceof D2 ? e3.fieldsIndex : n8;
}
var I2 = { getAttributeSQL(e3, n8) {
  var _a, _b;
  const t7 = e3.field(n8);
  if (null == t7) return t7;
  if (te(t7)) {
    const r7 = t7.toDateTime(), o3 = (_b = (_a = T2(e3)) == null ? void 0 : _a.get(n8)) == null ? void 0 : _b.type;
    return "esriFieldTypeTimestampOffset" === o3 || "timestamp-offset" === o3 ? i2.fromDateTime(r7) : r7;
  }
  return t7;
} };
function g3(r7, p8, w3) {
  r7.domain = function(r8, d4) {
    return p8(r8, d4, (f6, c2, m5) => {
      if (oe(m5, 2, 3, r8, d4), H(m5[0])) {
        const n8 = Ee(m5[0], ye(m5[1]), void 0 === m5[2] ? void 0 : m5[2]);
        return n8 && n8.domain ? "coded-value" === n8.domain.type || "codedValue" === n8.domain.type ? C.convertObjectToArcadeDictionary({ type: "codedValue", name: n8.domain.name, dataType: b[n8.field.type], codedValues: n8.domain.codedValues.map((e3) => ({ name: e3.name, code: e3.code })) }, Be(r8)) : C.convertObjectToArcadeDictionary({ type: "range", name: n8.domain.name, dataType: b[n8.field.type], min: n8.domain.minValue, max: n8.domain.maxValue }, Be(r8)) : null;
      }
      throw new a2(r8, r4.InvalidParameter, d4);
    });
  }, r7.domaincode = function(e3, r8) {
    return p8(e3, r8, (a5, s4, f6) => {
      if (oe(f6, 2, 4, e3, r8), H(f6[0])) return $e(f6[0], ye(f6[1]), f6[2], void 0 === f6[3] ? void 0 : f6[3]);
      throw new a2(e3, r4.InvalidParameter, r8);
    });
  }, r7.domainname = function(e3, r8) {
    return p8(e3, r8, (a5, s4, d4) => {
      if (oe(d4, 2, 4, e3, r8), H(d4[0])) return He(d4[0], ye(d4[1]), d4[2], void 0 === d4[3] ? void 0 : d4[3]);
      throw new a2(e3, r4.InvalidParameter, r8);
    });
  }, r7.expects = function(e3, r8) {
    return p8(e3, r8, (o3, i7, a5) => {
      if (a5.length < 1) throw new a2(e3, r4.WrongNumberOfParameters, r8);
      return v2;
    });
  }, r7.featureinfilter = function(e3, r8) {
    return p8(e3, r8, (e4, r9, a5) => {
      oe(a5, 2, 2, e4, r9);
      const [u3, s4] = a5;
      if (null == u3) return false;
      if ("" === s4 || null == s4) return true;
      if (!H(u3) || !e(s4)) throw new a2(e4, r4.InvalidParameter, r9);
      const d4 = D.create(s4, { fieldsIndex: T2(u3), timeZone: h3(u3) }), f6 = d4.getVariables();
      for (const n8 of f6) d4.parameters[n8] = w3(e4, { name: n8 });
      return d4.testFeature(u3, I2);
    });
  }, r7.gdbversion = function(e3, r8) {
    return p8(e3, r8, (a5, u3, s4) => {
      if (oe(s4, 1, 1, e3, r8), H(s4[0])) return s4[0].gdbVersion();
      throw new a2(e3, r4.InvalidParameter, r8);
    });
  }, r7.schema = function(r8, o3) {
    return p8(r8, o3, (a5, u3, d4) => {
      if (H(d4[0])) {
        const n8 = Ke(d4[0]);
        return n8 ? C.convertObjectToArcadeDictionary(n8, Be(r8)) : null;
      }
      throw new a2(r8, r4.InvalidParameter, o3);
    });
  }, r7.subtypecode = function(e3, r8) {
    return p8(e3, r8, (a5, u3, s4) => {
      if (oe(s4, 1, 1, e3, r8), H(s4[0])) {
        const e4 = Ue(s4[0]);
        if (!e4) return null;
        if (e4.subtypeField && s4[0].hasField(e4.subtypeField)) {
          const n8 = s4[0].field(e4.subtypeField);
          for (const t7 of e4.subtypes) if (t7.code === n8) return t7.code;
          return null;
        }
        return null;
      }
      throw new a2(e3, r4.InvalidParameter, r8);
    });
  }, r7.subtypename = function(e3, r8) {
    return p8(e3, r8, (a5, u3, s4) => {
      if (oe(s4, 1, 1, e3, r8), H(s4[0])) {
        const e4 = Ue(s4[0]);
        if (!e4) return "";
        if (e4.subtypeField && s4[0].hasField(e4.subtypeField)) {
          const n8 = s4[0].field(e4.subtypeField);
          for (const t7 of e4.subtypes) if (t7.code === n8) return t7.name;
          return "";
        }
        return "";
      }
      throw new a2(e3, r4.InvalidParameter, r8);
    });
  }, r7.subtypes = function(r8, a5) {
    return p8(r8, a5, (u3, d4, f6) => {
      if (oe(f6, 1, 1, r8, a5), H(f6[0])) {
        const n8 = Ue(f6[0]);
        return n8 ? C.convertObjectToArcadeDictionary(n8, Be(r8)) : null;
      }
      throw new a2(r8, r4.InvalidParameter, a5);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/geometry.js
function B2(B5, C5) {
  B5.ringisclockwise = function(e3, t7) {
    return C5(e3, t7, (n8, i7, f6) => {
      oe(f6, 1, 1, e3, t7);
      let c2 = [];
      if (null === f6[0]) return false;
      if (o(f6[0])) for (const l4 of f6[0]) {
        if (!(l4 instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
        c2.push(l4.hasZ ? l4.hasM ? [l4.x, l4.y, l4.z, l4.m] : [l4.x, l4.y, l4.z] : [l4.x, l4.y]);
      }
      else if (f6[0] instanceof i3) c2 = f6[0]._elements;
      else {
        if (!ee(f6[0])) throw new a2(e3, r4.InvalidParameter, t7);
        for (const n9 of f6[0].toArray()) {
          if (!(n9 instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
          c2.push(n9.hasZ ? n9.hasM ? [n9.x, n9.y, n9.z, n9.m] : [n9.x, n9.y, n9.z] : [n9.x, n9.y]);
        }
      }
      return !(c2.length < 3) && a(c2);
    });
  }, B5.polygon = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      let u3;
      if (oe(s4, 1, 1, e3, t7), s4[0] instanceof C) {
        const t8 = Ae(i4(s4[0], e3.spatialReference, "polygon"), e3.spatialReference);
        if (null == t8) return null;
        u3 = t8;
      } else if (s4[0] instanceof j2) u3 = f(s4[0].toJSON());
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), u3 = Ae(new j2(t8), e3.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(u3);
    });
  }, B5.polyline = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      let u3;
      if (oe(s4, 1, 1, e3, t7), s4[0] instanceof C) {
        const t8 = Ae(i4(s4[0], e3.spatialReference, "polyline"), e3.spatialReference);
        if (null == t8) return null;
        u3 = t8;
      } else if (s4[0] instanceof P) u3 = f(s4[0].toJSON());
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), u3 = Ae(new P(t8), e3.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(u3);
    });
  }, B5.point = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      let u3;
      if (oe(s4, 1, 1, e3, t7), s4[0] instanceof C) {
        const t8 = Ae(i4(s4[0], e3.spatialReference, "point"), e3.spatialReference);
        if (null == t8) return null;
        u3 = t8;
      } else if (s4[0] instanceof j) u3 = f(s4[0].toJSON());
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), u3 = Ae(new j(t8), e3.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(u3);
    });
  }, B5.multipoint = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      let u3;
      if (oe(s4, 1, 1, e3, t7), s4[0] instanceof C) {
        const t8 = Ae(i4(s4[0], e3.spatialReference, "multipoint"), e3.spatialReference);
        if (null == t8) return null;
        u3 = t8;
      } else if (s4[0] instanceof u) u3 = f(s4[0].toJSON());
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), u3 = Ae(new u(t8), e3.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(u3);
    });
  }, B5.extent = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      var _a, _b, _c;
      s4 = Fe(s4), oe(s4, 1, 1, e3, t7);
      let m5 = null;
      if (s4[0] instanceof C) m5 = Ae(i4(s4[0], e3.spatialReference), e3.spatialReference);
      else if (s4[0] instanceof j) {
        const e4 = { xmin: s4[0].x, ymin: s4[0].y, xmax: s4[0].x, ymax: s4[0].y, spatialReference: s4[0].spatialReference.toJSON() }, t8 = s4[0];
        t8.hasZ && (e4.zmin = t8.z, e4.zmax = t8.z), t8.hasM && (e4.mmin = t8.m, e4.mmax = t8.m), m5 = f(e4);
      } else if (s4[0] instanceof j2) m5 = f((_a = s4[0].extent) == null ? void 0 : _a.toJSON());
      else if (s4[0] instanceof P) m5 = f((_b = s4[0].extent) == null ? void 0 : _b.toJSON());
      else if (s4[0] instanceof u) m5 = f((_c = s4[0].extent) == null ? void 0 : _c.toJSON());
      else if (s4[0] instanceof w) m5 = f(s4[0].toJSON());
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), m5 = Ae(new w(t8), e3.spatialReference);
      }
      if (null !== m5 && false === m5.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(m5);
    });
  }, B5.geometry = function(e3, t7) {
    return C5(e3, t7, (i7, l4, s4) => {
      oe(s4, 1, 1, e3, t7);
      let u3 = null;
      if (null === s4[0]) return null;
      if (H(s4[0])) u3 = Ae(s4[0].geometry(), e3.spatialReference);
      else if (s4[0] instanceof C) u3 = Ae(i4(s4[0], e3.spatialReference), e3.spatialReference);
      else {
        const t8 = JSON.parse(s4[0]);
        t8 && !t8.spatialReference && (t8.spatialReference = e3.spatialReference), u3 = Ae(f(t8), e3.spatialReference);
      }
      if (null !== u3 && false === u3.spatialReference.equals(e3.spatialReference)) throw new a2(e3, r4.WrongSpatialReference, t7);
      return ke(u3);
    });
  }, B5.setgeometry = function(e3, t7) {
    return C5(e3, t7, (n8, i7, l4) => {
      if (oe(l4, 2, 2, e3, t7), !H(l4[0])) throw new a2(e3, r4.InvalidParameter, t7);
      if (true === l4[0].immutable) throw new a2(e3, r4.Immutable, t7);
      if (!(l4[1] instanceof n3 || null === l4[1])) throw new a2(e3, r4.InvalidParameter, t7);
      return l4[0]._geometry = l4[1], v2;
    });
  }, B5.feature = function(e3, t7) {
    return C5(e3, t7, (l4, o3, s4) => {
      if (0 === s4.length) throw new a2(e3, r4.WrongNumberOfParameters, t7);
      let c2;
      if (1 === s4.length) if (e(s4[0])) c2 = D2.fromJson(JSON.parse(s4[0]), e3.timeZone);
      else if (H(s4[0])) c2 = D2.createFromArcadeFeature(s4[0]);
      else if (s4[0] instanceof n3) c2 = D2.createFromGraphicLikeObject(s4[0], null, null, e3.timeZone);
      else {
        if (!(s4[0] instanceof C)) throw new a2(e3, r4.InvalidParameter, t7);
        {
          const n8 = s4[0].hasField("geometry") ? s4[0].field("geometry") : null, l5 = s4[0].hasField("attributes") ? s4[0].field("attributes") : null;
          let o4, f6;
          if (K(n8)) o4 = i4(n8, e3.spatialReference);
          else {
            if (null != n8 && !U(n8)) throw new a2(e3, r4.InvalidParameter, t7);
            o4 = n8;
          }
          if (K(l5)) f6 = D2.parseAttributesFromDictionary(l5);
          else {
            if (null != l5) throw new a2(e3, r4.InvalidParameter, t7);
            f6 = null;
          }
          c2 = D2.createFromGraphicLikeObject(o4, f6, null, e3.timeZone);
        }
      }
      else if (2 === s4.length) {
        let l5 = null, o4 = null;
        if (null !== s4[0]) if (s4[0] instanceof n3) l5 = s4[0];
        else {
          if (!(s4[0] instanceof C)) throw new a2(e3, r4.InvalidParameter, t7);
          l5 = i4(s4[0], e3.spatialReference);
        }
        if (null !== s4[1]) {
          if (!(s4[1] instanceof C)) throw new a2(e3, r4.InvalidParameter, t7);
          o4 = D2.parseAttributesFromDictionary(s4[1]);
        }
        c2 = D2.createFromGraphicLikeObject(l5, o4, null, e3.timeZone);
      } else {
        let l5 = null;
        const o4 = {};
        if (null !== s4[0]) if (s4[0] instanceof n3) l5 = s4[0];
        else {
          if (!(s4[0] instanceof C)) throw new a2(e3, r4.InvalidParameter, t7);
          l5 = i4(s4[0], e3.spatialReference);
        }
        for (let n8 = 1; n8 < s4.length; n8 += 2) {
          const i7 = ye(s4[n8]), l6 = s4[n8 + 1];
          if (!(null == l6 || e(l6) || isNaN(l6) || te(l6) || n4(l6) || re(l6) || ne(l6) || t(l6))) throw new a2(e3, r4.InvalidParameter, t7);
          if (G(l6) || false === z(l6)) throw new a2(e3, r4.InvalidParameter, t7);
          o4[i7] = l6 === v2 ? null : l6;
        }
        c2 = D2.createFromGraphicLikeObject(l5, o4, null, e3.timeZone);
      }
      return c2._geometry = Ae(c2.geometry(), e3.spatialReference), c2.immutable = false, c2;
    });
  }, B5.dictionary = function(e3, t7) {
    return C5(e3, t7, (i7, l4, o3) => {
      if (0 === o3.length || 1 === o3.length && null === o3[0]) {
        const e4 = new C();
        return e4.immutable = false, e4;
      }
      if (1 === o3.length && e(o3[0])) try {
        const t8 = JSON.parse(o3[0]), r7 = C.convertObjectToArcadeDictionary(t8, Be(e3), false);
        return r7.immutable = false, r7;
      } catch (u3) {
        throw new a2(e3, r4.InvalidParameter, t7);
      }
      if (1 === o3.length && o3[0] instanceof n3) try {
        const t8 = o3[0].toJSON();
        t8.hasZ = true === o3[0].hasZ, t8.hasM = true === o3[0].hasM;
        const r7 = C.convertObjectToArcadeDictionary(t8, Be(e3), false);
        return r7.immutable = false, r7;
      } catch (u3) {
        throw new a2(e3, r4.InvalidParameter, t7);
      }
      if (1 === o3.length && H(o3[0])) try {
        const e4 = new C();
        e4.immutable = false, e4.setField("geometry", o3[0].geometry());
        const t8 = new C();
        t8.immutable = false, e4.setField("attributes", t8);
        for (const n8 of o3[0].keys()) t8.setField(n8, o3[0].field(n8));
        return e4;
      } catch (u3) {
        throw new a2(e3, r4.InvalidParameter, t7);
      }
      if (1 === o3.length && (K(o3[0]) || $(o3[0]))) try {
        const e4 = new C();
        e4.immutable = false;
        for (const t8 of o3[0].keys()) e4.setField(t8, o3[0].field(t8));
        return e4;
      } catch (u3) {
        throw new a2(e3, r4.InvalidParameter, t7);
      }
      if (2 === o3.length && o3[0] instanceof C && t(o3[1])) try {
        if (!(true === o3[1])) {
          const e4 = new C();
          e4.immutable = false;
          for (const t8 of o3[0].keys()) e4.setField(t8, o3[0].field(t8));
          return e4;
        }
        return o3[0].deepClone();
      } catch (u3) {
        throw new a2(e3, r4.InvalidParameter, t7);
      }
      if (o3.length % 2 != 0) throw new a2(e3, r4.WrongNumberOfParameters, t7);
      const f6 = {};
      for (let n8 = 0; n8 < o3.length; n8 += 2) {
        const i8 = ye(o3[n8]), l5 = o3[n8 + 1];
        if (!(null == l5 || e(l5) || isNaN(l5) || te(l5) || n4(l5) || t(l5) || ne(l5) || re(l5) || o(l5) || ee(l5))) throw new a2(e3, r4.InvalidParameter, t7);
        if (G(l5)) throw new a2(e3, r4.InvalidParameter, t7);
        f6[i8] = l5 === v2 ? null : l5;
      }
      const c2 = new C(f6);
      return c2.immutable = false, c2;
    });
  }, B5.haskey = function(t7, i7) {
    return C5(t7, i7, (l4, s4, f6) => {
      oe(f6, 2, 2, t7, i7);
      const c2 = ye(f6[1]);
      if (W(f6[0]) || f6[0] instanceof C) return f6[0].hasField(c2);
      if (f6[0] instanceof n3) {
        const t8 = d2(f6[0], c2, null, null, 2);
        return !t8 || "notfound" !== t8.keystate;
      }
      throw new a2(t7, r4.InvalidParameter, i7);
    });
  }, B5.hasvalue = function(e3, n8) {
    return C5(e3, n8, (r7, a5, i7) => (oe(i7, 2, 2, e3, n8), null != y(i7[0], i7[1])));
  }, B5.indexof = function(e3, t7) {
    return C5(e3, t7, (n8, i7, l4) => {
      oe(l4, 2, 2, e3, t7);
      const f6 = l4[1];
      if (o(l4[0])) {
        for (let e4 = 0; e4 < l4[0].length; e4++) if (me(f6, l4[0][e4])) return e4;
        return -1;
      }
      if (ee(l4[0])) {
        const e4 = l4[0].length();
        for (let t8 = 0; t8 < e4; t8++) if (me(f6, l4[0].get(t8))) return t8;
        return -1;
      }
      throw new a2(e3, r4.InvalidParameter, t7);
    });
  }, B5.angle = function(e3, t7) {
    return C5(e3, t7, (n8, i7, l4) => {
      if (l4 = Fe(l4), oe(l4, 2, 3, e3, t7), !(l4[0] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      if (!(l4[1] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      if (l4.length > 2 && !(l4[2] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      return 2 === l4.length ? d(l4[0], l4[1]) : Z(l4[0], l4[1], l4[2]);
    });
  }, B5.bearing = function(e3, t7) {
    return C5(e3, t7, (n8, i7, l4) => {
      if (l4 = Fe(l4), oe(l4, 2, 3, e3, t7), !(l4[0] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      if (!(l4[1] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      if (l4.length > 2 && !(l4[2] instanceof j)) throw new a2(e3, r4.InvalidParameter, t7);
      return 2 === l4.length ? v3(l4[0], l4[1]) : I(l4[0], l4[1], l4[2]);
    });
  }, B5.isselfintersecting = function(e3, t7) {
    return C5(e3, t7, (n8, r7, a5) => {
      a5 = Fe(a5), oe(a5, 1, 1, e3, t7);
      let i7 = a5[0];
      if (i7 instanceof j2) return i7.isSelfIntersecting;
      if (i7 instanceof P) return k(i7.paths);
      if (i7 instanceof u) {
        const e4 = i7.points;
        for (let t8 = 0; t8 < e4.length; t8++) for (let n9 = 0; n9 < e4.length; n9++) if (n9 !== t8) {
          let r8 = true;
          for (let a6 = 0; a6 < e4[t8].length; a6++) if (e4[t8][a6] !== e4[n9][a6]) {
            r8 = false;
            break;
          }
          if (true === r8) return true;
        }
      }
      if (o(i7) || ee(i7)) {
        const t8 = Me(i7, e3.spatialReference);
        return null !== t8 && (i7 = t8.paths), k(i7);
      }
      return false;
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/maths.js
function p6(p8, M2) {
  function b4(n8, t7, r7) {
    const u3 = be(n8);
    return isNaN(u3) ? u3 : isNaN(t7) || isNaN(r7) || t7 > r7 ? NaN : u3 < t7 ? t7 : u3 > r7 ? r7 : u3;
  }
  p8.number = function(o3, i7) {
    return M2(o3, i7, (a5, s4, f6) => {
      oe(f6, 1, 2, o3, i7);
      const p9 = f6[0];
      if (n4(p9)) return p9;
      if (null === p9) return 0;
      if (te(p9) || re(p9) || ne(p9)) return p9.toNumber();
      if (t(p9)) return Number(p9);
      if (o(p9)) return NaN;
      if ("" === p9) return Number(p9);
      if (void 0 === p9) return Number(p9);
      if (e(p9)) {
        if (void 0 !== f6[1]) {
          let n8 = P2(f6[1], "‰", "");
          return n8 = P2(n8, "¤", ""), p(p9, { pattern: n8 });
        }
        return Number(p9.trim());
      }
      return Number(p9);
    });
  }, p8.abs = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.abs(be(i7[0]))));
  }, p8.acos = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.acos(be(i7[0]))));
  }, p8.asin = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.asin(be(i7[0]))));
  }, p8.atan = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.atan(be(i7[0]))));
  }, p8.atan2 = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 2, 2, t7, r7), Math.atan2(be(i7[0]), be(i7[1]))));
  }, p8.ceil = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => {
      if (oe(i7, 1, 2, t7, r7), 2 === i7.length) {
        let n8 = be(i7[1]);
        return isNaN(n8) && (n8 = 0), v("ceil", be(i7[0]), -1 * n8);
      }
      return Math.ceil(be(i7[0]));
    });
  }, p8.round = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => {
      if (oe(i7, 1, 2, t7, r7), 2 === i7.length) {
        let n8 = be(i7[1]);
        return isNaN(n8) && (n8 = 0), v("round", be(i7[0]), -1 * n8);
      }
      return Math.round(be(i7[0]));
    });
  }, p8.floor = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => {
      if (oe(i7, 1, 2, t7, r7), 2 === i7.length) {
        let n8 = be(i7[1]);
        return isNaN(n8) && (n8 = 0), v("floor", be(i7[0]), -1 * n8);
      }
      return Math.floor(be(i7[0]));
    });
  }, p8.cos = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.cos(be(i7[0]))));
  }, p8.isnan = function(t7, r7) {
    return M2(t7, r7, (u3, e3, o3) => (oe(o3, 1, 1, t7, r7), "number" == typeof o3[0] && isNaN(o3[0])));
  }, p8.exp = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.exp(be(i7[0]))));
  }, p8.log = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.log(be(i7[0]))));
  }, p8.pow = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 2, 2, t7, r7), be(i7[0]) ** be(i7[1])));
  }, p8.random = function(t7, r7) {
    return M2(t7, r7, (u3, e3, o3) => (oe(o3, 0, 0, t7, r7), Math.random()));
  }, p8.sin = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.sin(be(i7[0]))));
  }, p8.sqrt = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.sqrt(be(i7[0]))));
  }, p8.tan = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => (oe(i7, 1, 1, t7, r7), Math.tan(be(i7[0]))));
  }, p8.isempty = function(t7, r7) {
    return M2(t7, r7, (u3, e3, o3) => (oe(o3, 1, 1, t7, r7), null === o3[0] || ("" === o3[0] || (void 0 === o3[0] || o3[0] === v2))));
  }, p8.boolean = function(t7, r7) {
    return M2(t7, r7, (u3, e3, o3) => {
      oe(o3, 1, 1, t7, r7);
      const i7 = o3[0];
      return Ze(i7);
    });
  }, p8.constrain = function(t7, r7) {
    return M2(t7, r7, (u3, e3, i7) => {
      oe(i7, 3, 3, t7, r7);
      const a5 = be(i7[1]), f6 = be(i7[2]);
      if (o(i7[0])) {
        const n8 = [];
        for (const t8 of i7[0]) n8.push(b4(t8, a5, f6));
        return n8;
      }
      if (ee(i7[0])) {
        const n8 = [];
        for (let t8 = 0; t8 < i7[0].length(); t8++) n8.push(b4(i7[0].get(t8), a5, f6));
        return n8;
      }
      return b4(i7[0], a5, f6);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/stats.js
function a4(n8, r7) {
  if (1 === r7.length) {
    if (o(r7[0])) return l(n8, r7[0], -1);
    if (ee(r7[0])) return l(n8, r7[0].toArray(), -1);
  }
  return l(n8, r7, -1);
}
function f5(u3, f6) {
  u3.stdev = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("stdev", t7));
  }, u3.variance = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("variance", t7));
  }, u3.average = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("mean", t7));
  }, u3.mean = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("mean", t7));
  }, u3.sum = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("sum", t7));
  }, u3.min = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("min", t7));
  }, u3.max = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("max", t7));
  }, u3.distinct = function(n8, r7) {
    return f6(n8, r7, (n9, r8, t7) => a4("distinct", t7));
  }, u3.count = function(u4, a5) {
    return f6(u4, a5, (f7, m5, c2) => {
      if (oe(c2, 1, 1, u4, a5), o(c2[0]) || e(c2[0])) return c2[0].length;
      if (ee(c2[0])) return c2[0].length();
      throw new a2(u4, r4.InvalidParameter, a5);
    });
  };
}

// node_modules/@arcgis/core/arcade/functions/convertdirection.js
var l3 = (e3) => (n8, t7, r7 = 14) => +e3(n8, t7).toFixed(r7);
var d3 = (e3, n8) => e3 + n8;
var m4 = (e3, n8) => e3 * n8;
var g4 = (e3, n8) => e3 / n8;
var _ = (e3, n8, t7) => l3(d3)(e3, n8, t7);
var w2 = (e3, n8, t7) => l3(m4)(e3, n8, t7);
var A = (e3, n8, t7) => l3(g4)(e3, n8, t7);
var D4 = 360;
var p7 = 400;
var E2 = 2 * Math.PI;
var T3 = 3600;
var S3 = 3240;
var R = 60;
var M = 60;
var F2 = 180 * T3 / Math.PI;
var v4 = D4 * R * M;
var L = 90 * T3;
var U2 = 180 * T3;
var N = 270 * T3;
var x2 = String.fromCharCode(7501);
var z2 = "°";
function O(e3) {
  if (false === e(e3)) throw new a2(null, r4.InvalidParameter, null);
  return e3;
}
function G2(e3, n8) {
  const t7 = 10 ** n8;
  return Math.round(e3 * t7) / t7;
}
function I3(e3, n8) {
  return e3 % n8;
}
function b3(e3) {
  const n8 = parseFloat(e3.toString().replace(Math.trunc(e3).toString(), "0")) * Math.sign(e3);
  if (e3 < 0) {
    return { fraction: n8, integer: Math.ceil(e3) };
  }
  return { fraction: n8, integer: Math.floor(e3) };
}
var H2;
var y3;
var q2;
var k3;
function C4(e3, n8) {
  switch (e3) {
    case H2.north:
      return "SHORT" === n8 ? "N" : "North";
    case H2.east:
      return "SHORT" === n8 ? "E" : "East";
    case H2.south:
      return "SHORT" === n8 ? "S" : "South";
    case H2.west:
      return "SHORT" === n8 ? "W" : "West";
  }
}
function P4(e3, n8) {
  return e3 - Math.floor(e3 / n8) * n8;
}
function Q2(e3) {
  switch (e3) {
    case y3.truncated_degrees:
    case y3.decimal_degrees:
      return D4;
    case y3.radians:
      return E2;
    case y3.gradians:
      return p7;
    case y3.seconds:
      return v4;
    case y3.fractional_degree_minutes:
      return R;
    case y3.fractional_minute_seconds:
      return M;
    default:
      throw new a2(null, r4.LogicError, null, { reason: "unsupported evaluations" });
  }
}
function j3(e3) {
  switch (e3.toUpperCase().trim()) {
    case "NORTH":
    case "NORTHAZIMUTH":
    case "NORTH AZIMUTH":
      return q2.north_azimuth;
    case "POLAR":
      return q2.polar;
    case "QUADRANT":
      return q2.quadrant;
    case "SOUTH":
    case "SOUTHAZIMUTH":
    case "SOUTH AZIMUTH":
      return q2.south_azimuth;
  }
  throw new a2(null, r4.LogicError, null, { reason: "unsupported directionType" });
}
function W2(e3) {
  switch (e3.toUpperCase().trim()) {
    case "D":
    case "DD":
    case "DECIMALDEGREE":
    case "DECIMAL DEGREE":
    case "DEGREE":
    case "DECIMALDEGREES":
    case "DECIMAL DEGREES":
    case "DEGREES":
      return y3.decimal_degrees;
    case "DMS":
    case "DEGREESMINUTESSECONDS":
    case "DEGREES MINUTES SECONDS":
      return y3.degrees_minutes_seconds;
    case "R":
    case "RAD":
    case "RADS":
    case "RADIAN":
    case "RADIANS":
      return y3.radians;
    case "G":
    case "GON":
    case "GONS":
    case "GRAD":
    case "GRADS":
    case "GRADIAN":
    case "GRADIANS":
      return y3.gradians;
  }
  throw new a2(null, r4.LogicError, null, { reason: "unsupported units" });
}
!function(e3) {
  e3[e3.north = 0] = "north", e3[e3.east = 1] = "east", e3[e3.south = 2] = "south", e3[e3.west = 3] = "west";
}(H2 || (H2 = {})), function(e3) {
  e3[e3.decimal_degrees = 1] = "decimal_degrees", e3[e3.seconds = 2] = "seconds", e3[e3.degrees_minutes_seconds = 3] = "degrees_minutes_seconds", e3[e3.radians = 4] = "radians", e3[e3.gradians = 5] = "gradians", e3[e3.truncated_degrees = 6] = "truncated_degrees", e3[e3.fractional_degree_minutes = 7] = "fractional_degree_minutes", e3[e3.fractional_minute_seconds = 8] = "fractional_minute_seconds";
}(y3 || (y3 = {})), function(e3) {
  e3[e3.north_azimuth = 1] = "north_azimuth", e3[e3.polar = 2] = "polar", e3[e3.quadrant = 3] = "quadrant", e3[e3.south_azimuth = 4] = "south_azimuth";
}(q2 || (q2 = {})), function(e3) {
  e3[e3.meridian = 0] = "meridian", e3[e3.direction = 1] = "direction";
}(k3 || (k3 = {}));
var Z3 = class _Z {
  constructor(e3, n8, t7) {
    this.m_degrees = e3, this.m_minutes = n8, this.m_seconds = t7;
  }
  getField(e3) {
    switch (e3) {
      case y3.decimal_degrees:
      case y3.truncated_degrees:
        return this.m_degrees;
      case y3.fractional_degree_minutes:
        return this.m_minutes;
      case y3.seconds:
      case y3.fractional_minute_seconds:
        return this.m_seconds;
      default:
        throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
    }
  }
  static secondsToDMS(e3) {
    const n8 = b3(e3).fraction;
    let t7 = b3(e3).integer;
    const r7 = Math.floor(t7 / T3);
    t7 -= r7 * T3;
    const s4 = Math.floor(t7 / M);
    return t7 -= s4 * M, new _Z(r7, s4, t7 + n8);
  }
  static numberToDms(e3) {
    const n8 = b3(e3).fraction, t7 = b3(e3).integer, r7 = w2(b3(100 * n8).fraction, 100), s4 = b3(100 * n8).integer;
    return new _Z(t7, s4, r7);
  }
  format(e3, n8) {
    let t7 = G2(this.m_seconds, n8), r7 = this.m_minutes, s4 = this.m_degrees;
    if (e3 === y3.seconds || e3 === y3.fractional_minute_seconds) M <= t7 && (t7 -= M, ++r7), R <= r7 && (r7 = 0, ++s4), D4 <= s4 && (s4 = 0);
    else if (e3 === y3.fractional_degree_minutes) t7 = 0, r7 = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes, s4 = this.m_degrees, R <= r7 && (r7 = 0, ++s4), D4 <= s4 && (s4 = 0);
    else if (e3 === y3.decimal_degrees || e3 === y3.truncated_degrees) {
      const e4 = A(this.m_seconds, T3), n9 = A(this.m_minutes, R);
      s4 = Math.round(this.m_degrees + n9 + e4), r7 = 0, t7 = 0;
    }
    return new _Z(s4, r7, t7);
  }
  static dmsToSeconds(e3, n8, t7) {
    return e3 * T3 + n8 * M + t7;
  }
};
var B3 = class {
  constructor(e3, n8, t7) {
    this.meridian = e3, this.angle = n8, this.direction = t7;
  }
  fetchAzimuth(e3) {
    return e3 === k3.meridian ? this.meridian : this.direction;
  }
};
var V = class _V {
  constructor(e3) {
    this._angle = e3;
  }
  static createFromAngleAndDirection(e3, n8) {
    return new _V(new J2(_V._convertDirectionFormat(e3.extractAngularUnits(y3.seconds), n8, q2.north_azimuth)));
  }
  getAngle(e3) {
    const n8 = this._angle.extractAngularUnits(y3.seconds);
    switch (e3) {
      case q2.north_azimuth:
      case q2.south_azimuth:
      case q2.polar:
        return new J2(_V._convertDirectionFormat(n8, q2.north_azimuth, e3));
      case q2.quadrant: {
        const e4 = _V.secondsNorthAzimuthToQuadrant(n8);
        return new J2(e4.angle);
      }
    }
  }
  getMeridian(e3) {
    const n8 = this._angle.extractAngularUnits(y3.seconds);
    switch (e3) {
      case q2.north_azimuth:
        return H2.north;
      case q2.south_azimuth:
        return H2.south;
      case q2.polar:
        return H2.east;
      case q2.quadrant:
        return _V.secondsNorthAzimuthToQuadrant(n8).meridian;
    }
  }
  getDirection(e3) {
    const n8 = this._angle.extractAngularUnits(y3.seconds);
    switch (e3) {
      case q2.north_azimuth:
        return H2.east;
      case q2.south_azimuth:
        return H2.west;
      case q2.polar:
        return H2.north;
      case q2.quadrant:
        return _V.secondsNorthAzimuthToQuadrant(n8).direction;
    }
  }
  static secondsNorthAzimuthToQuadrant(e3) {
    const n8 = e3 <= L || e3 >= N ? H2.north : H2.south, t7 = n8 === H2.north ? Math.min(v4 - e3, e3) : Math.abs(e3 - U2), r7 = e3 > U2 ? H2.west : H2.east;
    return new B3(n8, t7, r7);
  }
  static createFromAngleMeridianAndDirection(e3, n8, t7) {
    return new _V(new J2(_V.secondsQuadrantToNorthAzimuth(e3.extractAngularUnits(y3.seconds), n8, t7)));
  }
  static secondsQuadrantToNorthAzimuth(e3, n8, t7) {
    return n8 === H2.north ? t7 === H2.east ? e3 : v4 - e3 : t7 === H2.east ? U2 - e3 : U2 + e3;
  }
  static _convertDirectionFormat(e3, r7, s4) {
    let a5 = 0;
    switch (r7) {
      case q2.north_azimuth:
        a5 = e3;
        break;
      case q2.polar:
        a5 = L - e3;
        break;
      case q2.quadrant:
        throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
      case q2.south_azimuth:
        a5 = e3 + U2;
    }
    let i7 = 0;
    switch (s4) {
      case q2.north_azimuth:
        i7 = a5;
        break;
      case q2.polar:
        i7 = L - a5;
        break;
      case q2.quadrant:
        throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
      case q2.south_azimuth:
        i7 = a5 - U2;
    }
    return i7 = I3(i7, v4), i7 < 0 ? v4 + i7 : i7;
  }
};
function X(e3, r7, s4) {
  let a5 = null;
  switch (r7) {
    case y3.decimal_degrees:
      a5 = w2(e3, T3);
      break;
    case y3.seconds:
      a5 = e3;
      break;
    case y3.gradians:
      a5 = w2(e3, S3);
      break;
    case y3.radians:
      a5 = w2(e3, F2);
      break;
    default:
      throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
  }
  switch (s4) {
    case y3.decimal_degrees:
      return A(a5, T3);
    case y3.seconds:
      return a5;
    case y3.gradians:
      return A(a5, S3);
    case y3.radians:
      return a5 / F2;
    default:
      throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
  }
}
var J2 = class _J {
  constructor(e3) {
    this._seconds = e3;
  }
  static createFromAngleAndUnits(e3, n8) {
    return new _J(X(e3, n8, y3.seconds));
  }
  extractAngularUnits(e3) {
    return X(this._seconds, y3.seconds, K2(e3));
  }
  static createFromDegreesMinutesSeconds(e3, n8, t7) {
    return new _J(_(_(w2(e3, T3), w2(n8, M)), t7));
  }
};
function K2(e3) {
  switch (n(e3), e3) {
    case y3.decimal_degrees:
    case y3.truncated_degrees:
    case y3.degrees_minutes_seconds:
      return y3.decimal_degrees;
    case y3.gradians:
      return y3.gradians;
    case y3.fractional_degree_minutes:
      return y3.fractional_degree_minutes;
    case y3.radians:
      return y3.radians;
    case y3.seconds:
    case y3.fractional_minute_seconds:
      return y3.seconds;
  }
}
var Y = class _Y {
  constructor(e3, n8, t7, r7) {
    this.view = e3, this.angle = n8, this.merdian = t7, this.direction = r7, this._dms = null, this._formattedDms = null;
  }
  static createFromStringAndBearing(e3, n8, t7) {
    return new _Y(e3, n8.getAngle(t7), n8.getMeridian(t7), n8.getDirection(t7));
  }
  fetchAngle() {
    return this.angle;
  }
  fetchMeridian() {
    return this.merdian;
  }
  fetchDirection() {
    return this.direction;
  }
  fetchView() {
    return this.view;
  }
  fetchDms() {
    return null === this._dms && this._calculateDms(), this._dms;
  }
  fetchFormattedDms() {
    return null === this._formattedDms && this._calculateDms(), this._formattedDms;
  }
  _calculateDms() {
    let e3 = null, n8 = y3.truncated_degrees, t7 = 0;
    for (let r7 = 0; r7 < this.view.length; r7++) {
      const s4 = this.view[r7];
      switch (s4) {
        case "m":
          e3 = le2(this.view, r7, s4), n8 = n8 === y3.truncated_degrees ? y3.fractional_degree_minutes : n8, r7 = e3.newpos;
          continue;
        case "s":
          e3 = le2(this.view, r7, s4), n8 = y3.fractional_minute_seconds, t7 = t7 < e3.rounding ? e3.rounding : t7, r7 = e3.newpos;
          continue;
        default:
          continue;
      }
    }
    this._dms = Z3.secondsToDMS(this.angle.extractAngularUnits(y3.seconds)), this._formattedDms = Z3.secondsToDMS(this.angle.extractAngularUnits(y3.seconds)).format(n8, t7);
  }
};
function $2(e3, r7, s4, a5, i7) {
  let o3 = null;
  switch (r7) {
    case y3.decimal_degrees:
    case y3.radians:
    case y3.gradians:
      return o3 = P4(G2(e3.extractAngularUnits(r7), a5), Q2(r7)), o3.toFixed(a5).padStart(s4 + a5 + (a5 > 0 ? 1 : 0), "0");
    case y3.truncated_degrees:
    case y3.fractional_degree_minutes:
      return o3 = P4(i7.fetchFormattedDms().getField(r7), Q2(r7)), o3.toFixed(a5).padStart(s4 + a5 + (a5 > 0 ? 1 : 0), "0");
    case y3.fractional_minute_seconds:
      return o3 = P4(G2(i7.fetchDms().getField(r7), a5), Q2(r7)), o3.toFixed(a5).padStart(s4 + a5 + (a5 > 0 ? 1 : 0), "0");
    default:
      throw new a2(null, r4.LogicError, null, { reason: "unexpected evaluation" });
  }
}
function ee2(e3, r7, s4) {
  if (s4 === q2.quadrant) throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
  if (r7 === y3.degrees_minutes_seconds) {
    const n8 = Z3.numberToDms(e3);
    return V.createFromAngleAndDirection(J2.createFromDegreesMinutesSeconds(n8.m_degrees, n8.m_minutes, n8.m_seconds), s4);
  }
  return V.createFromAngleAndDirection(J2.createFromAngleAndUnits(e3, K2(r7)), s4);
}
function ne2(e3) {
  switch (be(e3)) {
    case 1:
      return { first: H2.north, second: H2.east };
    case 2:
      return { first: H2.south, second: H2.east };
    case 3:
      return { first: H2.south, second: H2.west };
    case 4:
      return { first: H2.north, second: H2.west };
  }
  return null;
}
function te2(e3) {
  switch (e3.toUpperCase().trim()) {
    case "N":
    case "NORTH":
      return H2.north;
    case "E":
    case "EAST":
      return H2.east;
    case "S":
    case "SOUTH":
      return H2.south;
    case "W":
    case "WEST":
      return H2.west;
  }
  return null;
}
function re2(e3) {
  const r7 = parseFloat(e3);
  if (n4(r7)) {
    if (isNaN(r7)) throw new a2(null, r4.LogicError, null, { reason: "invalid conversion" });
    return r7;
  }
  throw new a2(null, r4.LogicError, null, { reason: "invalid conversion" });
}
function se(e3, s4, a5) {
  const i7 = a5 === q2.quadrant;
  let o3 = null, c2 = null, u3 = 0, l4 = 0, d4 = 0;
  if (i7) {
    if (e3.length < 2) throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
    d4 = 1;
    const s5 = ne2(ye(e3[e3.length - 1]));
    if (s5 ? (o3 = s5.first, c2 = s5.second) : (u3 = 1, o3 = te2(ye(e3[0])), c2 = te2(ye(e3[e3.length - 1]))), null === o3 || null === c2) throw new a2(null, r4.LogicError, null, { reason: "invalid conversion" });
  }
  switch (s4) {
    case y3.decimal_degrees:
    case y3.radians:
    case y3.gradians:
      if (0 === e3.length) throw new a2(null, r4.LogicError, null, { reason: "invalid conversion" });
      return i7 ? V.createFromAngleMeridianAndDirection(J2.createFromAngleAndUnits(re2(e3[u3]), K2(s4)), o3, c2) : V.createFromAngleAndDirection(J2.createFromAngleAndUnits(re2(e3[u3]), K2(s4)), a5);
    case y3.degrees_minutes_seconds:
      if (l4 = e3.length - d4 - u3, 3 === l4) {
        const n8 = J2.createFromDegreesMinutesSeconds(re2(e3[u3]), re2(e3[u3 + 1]), re2(e3[u3 + 2]));
        return i7 ? V.createFromAngleMeridianAndDirection(n8, o3, c2) : V.createFromAngleAndDirection(n8, a5);
      }
      if (1 === l4) {
        const n8 = re2(e3[u3]), t7 = Z3.numberToDms(n8), r7 = J2.createFromDegreesMinutesSeconds(t7.m_degrees, t7.m_minutes, t7.m_seconds);
        return i7 ? V.createFromAngleMeridianAndDirection(r7, o3, c2) : V.createFromAngleAndDirection(r7, a5);
      }
  }
  throw new a2(null, r4.LogicError, null, { reason: "invalid conversion" });
}
function ae2(e3) {
  const n8 = /* @__PURE__ */ new Set([" ", "-", "/", "'", '"', "\\", "^", z2, x2, "	", "\r", "\n", "*"]);
  let t7 = "";
  for (let r7 = 0; r7 < e3.length; r7++) {
    const s4 = e3.charAt(r7);
    n8.has(s4) ? t7 += "RRSPLITRRSPLITRR" : t7 += s4;
  }
  return t7.split("RRSPLITRRSPLITRR").filter((e4) => "" !== e4);
}
function ie(e3, r7, i7) {
  if (n4(e3)) return ee2(be(e3), r7, i7);
  if (e(e3)) return se(ae2(e3), r7, i7);
  if (o(e3)) return se(e3, r7, i7);
  if (ee(e3)) return se(e3.toArray(), r7, i7);
  throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
}
function oe2(e3, r7, s4) {
  const a5 = K2(s4);
  if (a5 && s4 !== y3.degrees_minutes_seconds) {
    return e3.getAngle(r7).extractAngularUnits(a5);
  }
  throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
}
function ce(e3, n8, t7) {
  const r7 = e3.getAngle(n8);
  if (n8 === q2.quadrant && t7 === y3.degrees_minutes_seconds) {
    const t8 = Z3.secondsToDMS(r7.extractAngularUnits(y3.seconds));
    return [C4(e3.getMeridian(n8), "SHORT"), t8.m_degrees, t8.m_minutes, t8.m_seconds, C4(e3.getDirection(n8), "SHORT")];
  }
  if (t7 === y3.degrees_minutes_seconds) {
    const e4 = Z3.secondsToDMS(r7.extractAngularUnits(y3.seconds));
    return [e4.m_degrees, e4.m_minutes, e4.m_seconds];
  }
  return n8 === q2.quadrant ? [C4(e3.getMeridian(n8), "SHORT"), r7.extractAngularUnits(t7), C4(e3.getDirection(n8), "SHORT")] : [r7.extractAngularUnits(t7)];
}
function ue(e3, r7) {
  let s4 = "";
  switch (e3) {
    case y3.decimal_degrees:
      s4 = r7 === q2.quadrant ? "DD.DD" + z2 : "DDD.DD" + z2;
      break;
    case y3.degrees_minutes_seconds:
      s4 = r7 === q2.quadrant ? "dd" + z2 + ` mm' ss"` : "ddd" + z2 + ` mm' ss.ss"`;
      break;
    case y3.radians:
      s4 = "R.RR";
      break;
    case y3.gradians:
      s4 = "GGG.GG" + x2;
      break;
    default:
      throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
  }
  return r7 === q2.quadrant && (s4 = "p " + s4 + " b"), s4;
}
function le2(e3, n8, t7) {
  const r7 = { padding: 0, rounding: 0, newpos: n8 };
  let s4 = false;
  for (; n8 < e3.length; ) {
    const a5 = e3[n8];
    if (a5 === t7) s4 ? r7.rounding++ : r7.padding++, n8++;
    else {
      if ("." !== a5) break;
      s4 = true, n8++;
    }
  }
  return r7.newpos = n8 - 1, r7;
}
function de(e3, n8, t7) {
  const r7 = { escaped: "", newpos: n8 };
  for (n8++; n8 < e3.length; ) {
    const t8 = e3[n8];
    if (n8++, "]" === t8) break;
    r7.escaped += t8;
  }
  return r7.newpos = n8 - 1, r7;
}
function he(e3, n8, t7) {
  let r7 = "", s4 = null, a5 = null;
  const i7 = Y.createFromStringAndBearing(n8, e3, t7), o3 = { D: y3.decimal_degrees, d: y3.truncated_degrees, m: y3.fractional_degree_minutes, s: y3.fractional_minute_seconds, R: y3.radians, G: y3.gradians };
  for (let c2 = 0; c2 < n8.length; c2++) {
    const u3 = n8[c2];
    switch (u3) {
      case "[":
        s4 = de(n8, c2), r7 += s4.escaped, c2 = s4.newpos;
        continue;
      case "D":
      case "d":
      case "m":
      case "s":
      case "R":
      case "G":
        s4 = le2(n8, c2, u3), a5 = e3.getAngle(t7), r7 += $2(a5, o3[u3], s4.padding, s4.rounding, i7), c2 = s4.newpos;
        continue;
      case "P":
      case "p":
        r7 += C4(i7.fetchMeridian(), "p" === u3 ? "SHORT" : "LONG");
        continue;
      case "B":
      case "b":
        r7 += C4(i7.fetchDirection(), "b" === u3 ? "SHORT" : "LONG");
        continue;
      default:
        r7 += u3;
    }
  }
  return r7;
}
function me2(s4, a5, i7) {
  if (!(a5 instanceof C)) throw new a2(null, r4.InvalidParameter, null);
  if (false === a5.hasField("directionType")) throw new a2(null, r4.LogicError, null, { reason: "missing directionType" });
  if (false === a5.hasField("angleType")) throw new a2(null, r4.LogicError, null, { reason: "missing angleType" });
  const o3 = j3(O(a5.field("directiontype"))), c2 = ie(s4, W2(O(a5.field("angletype"))), o3);
  if (!(i7 instanceof C)) throw new a2(null, r4.InvalidParameter, null);
  if (false === i7.hasField("directionType")) throw new a2(null, r4.LogicError, null, { reason: "missing directionType" });
  if (false === i7.hasField("outputType")) throw new a2(null, r4.LogicError, null, { reason: "missing angleType" });
  const u3 = j3(O(i7.field("directiontype"))), l4 = i7.hasField("angleType") ? W2(O(i7.field("angletype"))) : null, d4 = O(i7.field("outputType")).toUpperCase().trim();
  if (!u3 || !d4) throw new a2(null, r4.LogicError, null, { reason: "conversion error" });
  if (!(l4 || "TEXT" === d4 && i7.hasField("format"))) throw new a2(null, r4.LogicError, null, { reason: "invalid unit" });
  switch (d4) {
    case "VALUE":
      return u3 === q2.quadrant || l4 === y3.degrees_minutes_seconds ? ce(c2, u3, l4) : oe2(c2, u3, l4);
    case "TEXT": {
      let e3 = "";
      return i7.hasField("format") && (e3 = ye(i7.field("format"))), null !== e3 && "" !== e3 || (e3 = ue(l4, u3)), he(c2, e3, u3);
    }
    default:
      throw new a2(null, r4.InvalidParameter, null);
  }
}

// node_modules/@arcgis/core/arcade/functions/hash.js
var t6 = 2654435761;
var s3 = 2246822519;
var n7 = 3266489917;
var e2 = 668265263;
var r6 = 374761393;
function h4(t7) {
  const s4 = [];
  for (let n8 = 0, e3 = t7.length; n8 < e3; n8++) {
    let e4 = t7.charCodeAt(n8);
    e4 < 128 ? s4.push(e4) : e4 < 2048 ? s4.push(192 | e4 >> 6, 128 | 63 & e4) : e4 < 55296 || e4 >= 57344 ? s4.push(224 | e4 >> 12, 128 | e4 >> 6 & 63, 128 | 63 & e4) : (n8++, e4 = 65536 + ((1023 & e4) << 10 | 1023 & t7.charCodeAt(n8)), s4.push(240 | e4 >> 18, 128 | e4 >> 12 & 63, 128 | e4 >> 6 & 63, 128 | 63 & e4));
  }
  return new Uint8Array(s4);
}
var i6 = class {
  constructor(t7) {
    this._seed = t7, this._totallen = 0, this._bufs = [], this.init();
  }
  init() {
    return this._bufs = [], this._totallen = 0, this;
  }
  updateFloatArray(t7) {
    const s4 = [];
    for (const n8 of t7) isNaN(n8) ? s4.push("NaN") : n8 === 1 / 0 ? s4.push("Infinity") : n8 === -1 / 0 ? s4.push("-Infinity") : 0 === n8 ? s4.push("0") : s4.push(n8.toString(16));
    this.update(h4(s4.join("")));
  }
  updateIntArray(t7) {
    const s4 = Int32Array.from(t7);
    this.update(new Uint8Array(s4.buffer));
  }
  updateUint8Array(t7) {
    this.update(Uint8Array.from(t7));
  }
  updateWithString(t7) {
    return this.update(h4(t7));
  }
  update(t7) {
    return this._bufs.push(t7), this._totallen += t7.length, this;
  }
  digest() {
    const t7 = new Uint8Array(this._totallen);
    let s4 = 0;
    for (const n8 of this._bufs) t7.set(n8, s4), s4 += n8.length;
    return this.init(), this._xxHash32(t7, this._seed);
  }
  _xxHash32(h5, i7 = 0) {
    const o3 = h5;
    let u3 = i7 + r6 & 4294967295, a5 = 0;
    if (o3.length >= 16) {
      const n8 = [i7 + t6 + s3 & 4294967295, i7 + s3 & 4294967295, i7 + 0 & 4294967295, i7 - t6 & 4294967295], e3 = h5, r7 = e3.length - 16;
      let o4 = 0;
      for (a5 = 0; (4294967280 & a5) <= r7; a5 += 4) {
        const r8 = a5, h6 = e3[r8] + (e3[r8 + 1] << 8), i8 = e3[r8 + 2] + (e3[r8 + 3] << 8), u4 = h6 * s3 + (i8 * s3 << 16);
        let l5 = n8[o4] + u4 & 4294967295;
        l5 = l5 << 13 | l5 >>> 19;
        const f6 = 65535 & l5, p8 = l5 >>> 16;
        n8[o4] = f6 * t6 + (p8 * t6 << 16) & 4294967295, o4 = o4 + 1 & 3;
      }
      u3 = (n8[0] << 1 | n8[0] >>> 31) + (n8[1] << 7 | n8[1] >>> 25) + (n8[2] << 12 | n8[2] >>> 20) + (n8[3] << 18 | n8[3] >>> 14) & 4294967295;
    }
    u3 = u3 + h5.length & 4294967295;
    const l4 = h5.length - 4;
    for (; a5 <= l4; a5 += 4) {
      const t7 = a5, s4 = o3[t7] + (o3[t7 + 1] << 8), r7 = o3[t7 + 2] + (o3[t7 + 3] << 8);
      u3 = u3 + (s4 * n7 + (r7 * n7 << 16)) & 4294967295, u3 = u3 << 17 | u3 >>> 15, u3 = (65535 & u3) * e2 + ((u3 >>> 16) * e2 << 16) & 4294967295;
    }
    for (; a5 < o3.length; ++a5) {
      u3 += o3[a5] * r6, u3 = u3 << 11 | u3 >>> 21, u3 = (65535 & u3) * t6 + ((u3 >>> 16) * t6 << 16) & 4294967295;
    }
    return u3 ^= u3 >>> 15, u3 = ((65535 & u3) * s3 & 4294967295) + ((u3 >>> 16) * s3 << 16), u3 ^= u3 >>> 13, u3 = ((65535 & u3) * n7 & 4294967295) + ((u3 >>> 16) * n7 << 16), u3 ^= u3 >>> 16, u3 < 0 ? u3 + 4294967296 : u3;
  }
};

// node_modules/@arcgis/core/arcade/functions/string.js
function H3(t7) {
  var _a;
  if ("loaded" === t7.loadStatus && ((_a = t7.user) == null ? void 0 : _a.sourceJSON)) {
    return t7.user.sourceJSON;
  }
  return null;
}
function J3(t7, e3) {
  return !!t7 && J(t7, (e3 == null ? void 0 : e3.restUrl) || "");
}
function W3(t7, e3) {
  if (!t7 || !e3) return t7 === e3;
  if (t7.x === e3.x && t7.y === e3.y) {
    if (t7.hasZ) {
      if (t7.z !== e3.z) return false;
    } else if (e3.hasZ) return false;
    if (t7.hasM) {
      if (t7.m !== e3.m) return false;
    } else if (e3.hasM) return false;
    return true;
  }
  return false;
}
function B4(o3, i7, u3) {
  if (null !== o3) if (o(o3)) {
    if (i7.updateUint8Array([61]), u3.map.has(o3)) {
      const t7 = u3.map.get(o3);
      i7.updateIntArray([61237541 ^ t7]);
    } else {
      u3.map.set(o3, u3.currentLength++);
      for (const t7 of o3) B4(t7, i7, u3);
      u3.map.delete(o3), u3.currentLength--;
    }
    i7.updateUint8Array([199]);
  } else if (ee(o3)) {
    if (i7.updateUint8Array([61]), u3.map.has(o3)) {
      const t7 = u3.map.get(o3);
      i7.updateIntArray([61237541 ^ t7]);
    } else {
      u3.map.set(o3, u3.currentLength++);
      for (const t7 of o3.toArray()) B4(t7, i7, u3);
      u3.map.delete(o3), u3.currentLength--;
    }
    i7.updateUint8Array([199]);
  } else {
    if (te(o3)) return i7.updateIntArray([o3.toNumber()]), void i7.updateUint8Array([241]);
    if (ne(o3)) return i7.updateIntArray([o3.toNumber()]), void i7.updateIntArray([257]);
    if (re(o3)) return i7.updateIntArray([o3.toNumber()]), void i7.updateIntArray([263]);
    if (e(o3)) return i7.updateIntArray([o3.length]), i7.updateWithString(o3), void i7.updateUint8Array([41]);
    if (t(o3)) i7.updateUint8Array([true === o3 ? 1 : 0, 113]);
    else {
      if (n4(o3)) return i7.updateFloatArray([o3]), void i7.updateUint8Array([173]);
      if (o3 instanceof t4) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
      if (o3 instanceof t3) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
      if (!(o3 instanceof C)) {
        if (H(o3)) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
        if (o3 instanceof j) return i7.updateIntArray([3833836621]), i7.updateIntArray([0]), i7.updateFloatArray([o3.x]), i7.updateIntArray([1]), i7.updateFloatArray([o3.y]), o3.hasZ && (i7.updateIntArray([2]), i7.updateFloatArray([o3.z])), o3.hasM && (i7.updateIntArray([3]), i7.updateFloatArray([o3.m])), i7.updateIntArray([3765347959]), void B4(o3.spatialReference.wkid, i7, u3);
        if (o3 instanceof j2) {
          i7.updateIntArray([1266616829]);
          for (let t7 = 0; t7 < o3.rings.length; t7++) {
            const e3 = o3.rings[t7], r7 = [];
            let n8 = null, a5 = null;
            for (let i8 = 0; i8 < e3.length; i8++) {
              const u4 = o3.getPoint(t7, i8);
              if (0 === i8) n8 = u4;
              else if (W3(a5, u4)) continue;
              a5 = u4, i8 === e3.length - 1 && W3(n8, u4) || r7.push(u4);
            }
            i7.updateIntArray([1397116793, r7.length]);
            for (let t8 = 0; t8 < r7.length; t8++) {
              const e4 = r7[t8];
              i7.updateIntArray([3962308117, t8]), B4(e4, i7, u3), i7.updateIntArray([2716288009]);
            }
            i7.updateIntArray([2278822459]);
          }
          return i7.updateIntArray([3878477243]), void B4(o3.spatialReference.wkid, i7, u3);
        }
        if (o3 instanceof P) {
          i7.updateIntArray([4106883559]);
          for (let t7 = 0; t7 < o3.paths.length; t7++) {
            const e3 = o3.paths[t7];
            i7.updateIntArray([1397116793, e3.length]);
            for (let r7 = 0; r7 < e3.length; r7++) i7.updateIntArray([3962308117, r7]), B4(o3.getPoint(t7, r7), i7, u3), i7.updateIntArray([2716288009]);
            i7.updateIntArray([2278822459]);
          }
          return i7.updateIntArray([2568784753]), void B4(o3.spatialReference.wkid, i7, u3);
        }
        if (o3 instanceof u) {
          i7.updateIntArray([588535921, o3.points.length]);
          for (let t7 = 0; t7 < o3.points.length; t7++) {
            const e3 = o3.getPoint(t7);
            i7.updateIntArray([t7]), B4(e3, i7, u3);
          }
          return i7.updateIntArray([1700171621]), void B4(o3.spatialReference.wkid, i7, u3);
        }
        if (o3 instanceof w) return i7.updateIntArray([3483648373]), i7.updateIntArray([0]), i7.updateFloatArray([o3.xmax]), i7.updateIntArray([1]), i7.updateFloatArray([o3.xmin]), i7.updateIntArray([2]), i7.updateFloatArray([o3.ymax]), i7.updateIntArray([3]), i7.updateFloatArray([o3.ymin]), o3.hasZ && (i7.updateIntArray([4]), i7.updateFloatArray([o3.zmax]), i7.updateIntArray([5]), i7.updateFloatArray([o3.zmin])), o3.hasM && (i7.updateIntArray([6]), i7.updateFloatArray([o3.mmax]), i7.updateIntArray([7]), i7.updateFloatArray([o3.mmin])), i7.updateIntArray([3622027469]), void B4(o3.spatialReference.wkid, i7, u3);
        if (o3 instanceof g2) return i7.updateIntArray([14]), void 0 !== o3.wkid && null !== o3.wkid && i7.updateIntArray([o3.wkid]), o3.wkt && i7.updateWithString(o3.wkt), void (o3.wkt2 && i7.updateWithString(o3.wkt2));
        if (G(o3)) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
        if (B(o3)) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
        if (Q(o3)) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
        if (o3 === v2) throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
        throw new a2(u3.context, r4.UnsupportedHashType, u3.node);
      }
      if (i7.updateUint8Array([223]), u3.map.has(o3)) {
        const t7 = u3.map.get(o3);
        i7.updateIntArray([61237541 ^ t7]);
      } else {
        u3.map.set(o3, u3.currentLength++);
        for (const t7 of o3.keys()) {
          i7.updateIntArray([t7.length]), i7.updateWithString(t7), i7.updateUint8Array([251]);
          B4(o3.field(t7), i7, u3), i7.updateUint8Array([239]);
        }
        u3.map.delete(o3), u3.currentLength--;
      }
      i7.updateUint8Array([73]);
    }
  }
  else i7.updateUint8Array([0, 139]);
}
function E3(e3, m5) {
  e3.portal = function(e4, r7) {
    return m5(e4, r7, (n8, a5, u3) => (oe(u3, 1, 1, e4, r7), new t3(ye(u3[0]))));
  }, e3.typeof = function(t7, e4) {
    return m5(t7, e4, (r7, i7, s4) => {
      oe(s4, 1, 1, t7, e4);
      const l4 = E(s4[0]);
      if ("Unrecognized Type" === l4) throw new a2(t7, r4.UnrecognizedType, e4);
      return l4;
    });
  }, e3.trim = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => (oe(a5, 1, 1, t7, e4), ye(a5[0]).trim()));
  }, e3.tohex = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 1, 1, t7, e4);
      const i7 = be(a5[0]);
      return isNaN(i7) ? i7 : i7.toString(16);
    });
  }, e3.upper = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => (oe(a5, 1, 1, t7, e4), ye(a5[0]).toUpperCase()));
  }, e3.proper = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 1, 2, t7, e4);
      let u3 = 1;
      2 === a5.length && "firstword" === ye(a5[1]).toLowerCase() && (u3 = 2);
      const s4 = /\s/, l4 = ye(a5[0]);
      let p8 = "", c2 = true;
      for (let t8 = 0; t8 < l4.length; t8++) {
        let e5 = l4[t8];
        if (s4.test(e5)) 1 === u3 && (c2 = true);
        else {
          e5.toUpperCase() !== e5.toLowerCase() && (c2 ? (e5 = e5.toUpperCase(), c2 = false) : e5 = e5.toLowerCase());
        }
        p8 += e5;
      }
      return p8;
    });
  }, e3.lower = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => (oe(a5, 1, 1, t7, e4), ye(a5[0]).toLowerCase()));
  }, e3.guid = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      if (oe(a5, 0, 1, t7, e4), a5.length > 0) switch (ye(a5[0]).toLowerCase()) {
        case "digits":
          return n2().replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return n2();
        case "digits-hyphen-braces":
          return "{" + n2() + "}";
        case "digits-hyphen-parentheses":
          return "(" + n2() + ")";
      }
      return "{" + n2() + "}";
    });
  }, e3.standardizeguid = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t7, e4);
      let u3 = ye(a5[0]);
      if ("" === u3 || null === u3) return "";
      const s4 = /^(\{|\()?(?<partA>[0-9a-z]{8})(-?)(?<partB>[0-9a-z]{4})(-?)(?<partC>[0-9a-z]{4})(-?)(?<partD>[0-9a-z]{4})(-?)(?<partE>[0-9a-z]{12})(\}|\))?$/gim.exec(u3);
      if (!s4) return "";
      const l4 = s4.groups;
      switch (u3 = l4.partA + "-" + l4.partB + "-" + l4.partC + "-" + l4.partD + "-" + l4.partE, ye(a5[1]).toLowerCase()) {
        case "digits":
          return u3.replace("-", "").replace("-", "").replace("-", "").replace("-", "");
        case "digits-hyphen":
          return u3;
        case "digits-hyphen-braces":
          return "{" + u3 + "}";
        case "digits-hyphen-parentheses":
          return "(" + u3 + ")";
      }
      return "{" + u3 + "}";
    });
  }, e3.console = function(t7, e4) {
    return m5(t7, e4, (e5, r7, n8) => (0 === n8.length || (1 === n8.length ? t7.console(ye(n8[0])) : t7.console(ye(n8))), v2));
  }, e3.mid = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 2, 3, t7, e4);
      let u3 = be(a5[1]);
      if (isNaN(u3)) return "";
      if (u3 = Math.max(0, u3), 2 === a5.length) return ye(a5[0]).slice(u3);
      let l4 = be(a5[2]);
      return isNaN(l4) ? "" : (l4 < 0 && (l4 = 0), ye(a5[0]).slice(u3, u3 + l4));
    });
  }, e3.find = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 2, 3, t7, e4);
      let u3 = 0;
      if (a5.length > 2) {
        if (u3 = be(q(a5[2], 0)), isNaN(u3)) return -1;
        u3 < 0 && (u3 = 0);
      }
      return ye(a5[1]).indexOf(ye(a5[0]), u3);
    });
  }, e3.left = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t7, e4);
      let u3 = be(a5[1]);
      return isNaN(u3) ? "" : (u3 < 0 && (u3 = 0), ye(a5[0]).slice(0, u3));
    });
  }, e3.right = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 2, 2, t7, e4);
      const u3 = be(a5[1]);
      if (isNaN(u3) || u3 <= 0) return "";
      return ye(a5[0]).slice(-u3);
    });
  }, e3.split = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      let u3;
      oe(a5, 2, 4, t7, e4);
      let l4 = be(q(a5[2], -1));
      const f6 = Ze(q(a5[3], false));
      if (-1 === l4 || null === l4 || true === f6 ? u3 = ye(a5[0]).split(ye(a5[1])) : (isNaN(l4) && (l4 = -1), l4 < -1 && (l4 = -1), u3 = ye(a5[0]).split(ye(a5[1]), l4)), false === f6) return u3;
      const d4 = [];
      for (let t8 = 0; t8 < u3.length && !(-1 !== l4 && d4.length >= l4); t8++) "" !== u3[t8] && void 0 !== u3[t8] && d4.push(u3[t8]);
      return d4;
    });
  }, e3.text = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => (oe(a5, 1, 2, t7, e4), ge(a5[0], a5[1])));
  }, e3.concatenate = function(t7, e4) {
    return m5(t7, e4, (t8, e5, r7) => {
      const n8 = [];
      if (r7.length < 1) return "";
      if (o(r7[0])) {
        const t9 = q(r7[2], "");
        for (let e6 = 0; e6 < r7[0].length; e6++) n8[e6] = ge(r7[0][e6], t9);
        return r7.length > 1 ? n8.join(r7[1]) : n8.join("");
      }
      if (ee(r7[0])) {
        const t9 = q(r7[2], "");
        for (let e6 = 0; e6 < r7[0].length(); e6++) n8[e6] = ge(r7[0].get(e6), t9);
        return r7.length > 1 ? n8.join(r7[1]) : n8.join("");
      }
      for (let a5 = 0; a5 < r7.length; a5++) n8[a5] = ge(r7[a5]);
      return n8.join("");
    });
  }, e3.reverse = function(t7, e4) {
    return m5(t7, e4, (r7, i7, u3) => {
      if (oe(u3, 1, 1, t7, e4), o(u3[0])) {
        const t8 = u3[0].slice();
        return t8.reverse(), t8;
      }
      if (ee(u3[0])) {
        const t8 = u3[0].toArray().slice();
        return t8.reverse(), t8;
      }
      throw new a2(t7, r4.InvalidParameter, e4);
    });
  }, e3.replace = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 3, 4, t7, e4);
      const u3 = ye(a5[0]), s4 = ye(a5[1]), l4 = ye(a5[2]);
      return 4 !== a5.length || Ze(a5[3]) ? P2(u3, s4, l4) : u3.replace(s4, l4);
    });
  }, e3.urlencode = function(t7, e4) {
    return m5(t7, e4, (n8, a5, u3) => {
      if (oe(u3, 1, 1, t7, e4), null === u3[0]) return "";
      if (u3[0] instanceof C) {
        let t8 = "";
        for (const e5 of u3[0].keys()) {
          const r7 = u3[0].field(e5);
          "" !== t8 && (t8 += "&"), t8 += null === r7 ? encodeURIComponent(e5) + "=" : encodeURIComponent(e5) + "=" + encodeURIComponent(r7);
        }
        return t8;
      }
      return encodeURIComponent(ye(u3[0]));
    });
  }, e3.hash = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => {
      oe(a5, 1, 1, t7, e4);
      const i7 = new i6(0);
      return B4(a5[0], i7, { context: t7, node: e4, map: /* @__PURE__ */ new Map(), currentLength: 0 }), i7.digest();
    });
  }, e3.convertdirection = function(t7, e4) {
    return m5(t7, e4, (r7, n8, a5) => (oe(a5, 3, 3, t7, e4), me2(a5[0], a5[1], a5[2])));
  }, e3.fromjson = function(t7, e4) {
    return m5(t7, e4, (u3, s4, l4) => {
      if (oe(l4, 1, 1, t7, e4), false === e(l4[0])) throw new a2(t7, r4.InvalidParameter, e4);
      return C.convertJsonToArcade(JSON.parse(ye(l4[0])), Be(t7));
    });
  }, e3.tocharcode = function(t7, e4) {
    return m5(t7, e4, (r7, u3, l4) => {
      oe(l4, 1, 2, t7, e4);
      const c2 = be(q(l4[1], 0)), f6 = ye(l4[0]);
      if (0 === f6.length && 1 === l4.length) return null;
      if (f6.length <= c2 || c2 < 0) throw new a2(t7, r4.OutOfBounds, e4);
      return f6.charCodeAt(c2);
    });
  }, e3.tocodepoint = function(t7, e4) {
    return m5(t7, e4, (r7, u3, l4) => {
      oe(l4, 1, 2, t7, e4);
      const c2 = be(q(l4[1], 0)), f6 = ye(l4[0]);
      if (0 === f6.length && 1 === l4.length) return null;
      if (f6.length <= c2 || c2 < 0) throw new a2(t7, r4.OutOfBounds, e4);
      return f6.codePointAt(c2);
    });
  }, e3.fromcharcode = function(t7, e4) {
    return m5(t7, e4, (r7, o3, i7) => {
      if (i7.length < 1) throw new a2(t7, r4.WrongNumberOfParameters, e4);
      const u3 = i7.map((t8) => Math.trunc(be(t8))).filter((t8) => t8 >= 0 && t8 <= 65535);
      return 0 === u3.length ? null : String.fromCharCode.apply(null, u3);
    });
  }, e3.fromcodepoint = function(t7, e4) {
    return m5(t7, e4, (r7, o3, i7) => {
      if (i7.length < 1) throw new a2(t7, r4.WrongNumberOfParameters, e4);
      let u3;
      try {
        u3 = i7.map((t8) => Math.trunc(be(t8))).filter((t8) => t8 <= 1114111 && t8 >>> 0 === t8);
      } catch (l4) {
        return null;
      }
      return 0 === u3.length ? null : String.fromCodePoint.apply(null, u3);
    });
  }, e3.getuser = function(e4, u3) {
    return m5(e4, u3, (s4, l4, c2) => {
      var _a;
      oe(c2, 0, 2, e4, u3);
      let f6 = q(c2[1], "");
      if (f6 = true === f6 || false === f6 ? "" : ye(f6), null !== f6 && "" !== f6) return null;
      if (0 === c2.length || c2[0] instanceof t3) {
        let t7 = null;
        if (t7 = ((_a = e4.services) == null ? void 0 : _a.portal) ? e4.services.portal : C2.getDefault(), c2.length > 0) {
          if (!J3(c2[0].field("url"), t7)) return null;
        }
        if (!t7) return null;
        if ("" === f6) {
          const n8 = H3(t7);
          if (n8) {
            const t8 = JSON.parse(JSON.stringify(n8));
            for (const e5 of ["lastLogin", "created", "modified"]) void 0 !== t8[e5] && null !== t8[e5] && (t8[e5] = new Date(t8[e5]));
            return C.convertObjectToArcadeDictionary(t8, Be(e4));
          }
        }
        return null;
      }
      throw new a2(e4, r4.InvalidParameter, u3);
    });
  }, e3.getenvironment = function(t7, e4) {
    return m5(t7, e4, (n8, a5, i7) => (oe(i7, 0, 0, t7, e4), C.convertObjectToArcadeDictionary(We(Be(t7), t7.spatialReference), Be(t7), true)));
  }, e3.standardizefilename = function(t7, e4) {
    return m5(t7, e4, (t8, e5, r7) => {
      oe(r7, 1, 1, t8, e5);
      const [i7] = r7;
      if (null == i7) return "";
      if (!e(i7)) throw new a2(t8, r4.InvalidParameter, e5);
      return i7.replaceAll(/[<>"?*]/g, "_").replaceAll(/[/\\|]/g, "-").replaceAll(":", ", ");
    });
  };
}

export {
  n5 as n,
  s,
  f3 as f,
  d2 as d,
  y,
  s2,
  x,
  l2 as l,
  u2 as u,
  p3 as p,
  f4 as f2,
  y2,
  b2 as b,
  p4 as p2,
  C3 as C,
  g3 as g,
  B2 as B,
  p6 as p3,
  f5 as f3,
  E3 as E
};
//# sourceMappingURL=chunk-6CNFKQP7.js.map
