import {
  a as a2,
  u
} from "./chunk-STW6HRXO.js";
import {
  a,
  e,
  e2,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/MapUtils.js
function n2(n7, t4) {
  for (const r5 of n7.values()) if (t4(r5)) return true;
  return false;
}
function t(n7, t4) {
  for (const r5 of n7.values()) if (t4(r5)) return r5;
  return null;
}
function r(n7, t4, r5) {
  const e7 = n7.get(t4);
  if (void 0 !== e7) return e7;
  const o7 = r5();
  return n7.set(t4, o7), o7;
}
function e3(n7) {
  const t4 = /* @__PURE__ */ new Map();
  return (r5) => (t4.has(r5) || t4.set(r5, n7(r5)), t4.get(r5));
}

// node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var r2 = () => n.getLogger("esri.core.accessorSupport.ensureTypes");
function t2(e7) {
  return null == e7 ? e7 : new Date(e7);
}
function o(e7) {
  return null == e7 ? e7 : !!e7;
}
function u2(e7) {
  return null == e7 ? e7 : e7.toString();
}
function a3(e7, n7 = 0) {
  return null == e7 ? e7 : (e7 = parseFloat(e7), isNaN(e7) ? n7 : e7);
}
function s2(e7) {
  return null == e7 ? e7 : Math.round(parseFloat(e7));
}
function l(e7) {
  return null;
}
function i(e7, n7) {
  return (r5) => {
    let t4 = e7(r5);
    return null != n7.step && (t4 = Math.round(t4 / n7.step) * n7.step), null != n7.min && (t4 = Math.max(n7.min, t4)), null != n7.max && (t4 = Math.min(n7.max, t4)), t4;
  };
}
function c(e7) {
  return (e7 == null ? void 0 : e7.constructor) && void 0 !== e7.constructor.__accessorMetadata__;
}
function f(e7, n7) {
  return null != n7 && e7 && !(n7 instanceof e7);
}
function p(e7) {
  return e7 && "isCollection" in e7;
}
function y(e7) {
  return (e7 == null ? void 0 : e7.Type) ? "function" == typeof e7.Type ? e7.Type : e7.Type.base : null;
}
function v(e7, n7) {
  if (!(n7 == null ? void 0 : n7.constructor) || !p(n7.constructor)) return g(e7, n7) ? n7 : new e7(n7);
  const r5 = y(e7.prototype.itemType), t4 = y(n7.constructor.prototype.itemType);
  return r5 ? t4 ? r5 === t4 ? n7 : r5.prototype.isPrototypeOf(t4.prototype) ? new e7(n7) : (g(e7, n7), n7) : new e7(n7) : n7;
}
function g(e7, n7) {
  return !!c(n7) && (r2().error("Accessor#set", "Assigning an instance of '" + (n7.declaredClass || "unknown") + "' which is not a subclass of '" + m(e7) + "'"), true);
}
function h(e7, n7) {
  return null == n7 ? n7 : p(e7) ? v(e7, n7) : f(e7, n7) ? g(e7, n7) ? n7 : new e7(n7) : n7;
}
function m(e7) {
  var _a;
  return ((_a = e7 == null ? void 0 : e7.prototype) == null ? void 0 : _a.declaredClass) || "unknown";
}
var d = /* @__PURE__ */ new WeakMap();
function b(e7) {
  switch (e7) {
    case Number:
      return (e8) => a3(e8);
    case x:
      return s2;
    case Boolean:
      return o;
    case String:
      return u2;
    case Date:
      return t2;
    case _:
      return l;
    default:
      return r(d, e7, () => h.bind(null, e7));
  }
}
function w(e7, n7) {
  const r5 = b(e7);
  return 1 === arguments.length ? r5 : r5(n7);
}
function A(e7, n7, r5) {
  return 1 === arguments.length ? A.bind(null, e7) : n7 ? Array.isArray(n7) ? n7.map((n8) => e7(n8, r5)) : [e7(n7, r5)] : n7;
}
function $(e7, n7) {
  return 1 === arguments.length ? A((n8) => w(e7, n8)) : A((n8) => w(e7, n8), n7);
}
function j(e7, n7, r5) {
  return 0 !== n7 && Array.isArray(r5) ? r5.map((r6) => j(e7, n7 - 1, r6)) : e7(r5);
}
function M(e7, n7, r5) {
  if (2 === arguments.length) return (r6) => M(e7, n7, r6);
  if (!r5) return r5;
  r5 = j(e7, n7, r5);
  let t4 = n7, o7 = r5;
  for (; t4 > 0 && Array.isArray(o7); ) t4--, o7 = o7[0];
  if (void 0 !== o7) for (let u7 = 0; u7 < t4; u7++) r5 = [r5];
  return r5;
}
function k(e7, n7, r5) {
  return 2 === arguments.length ? M((n8) => w(e7, n8), n7) : M((n8) => w(e7, n8), n7, r5);
}
function S(e7) {
  return !!Array.isArray(e7) && !e7.some((n7) => {
    const r5 = typeof n7;
    return !("string" === r5 || "number" === r5 || "function" === r5 && e7.length > 1);
  });
}
function T(e7, n7) {
  if (2 === arguments.length) return T(e7).call(null, n7);
  const t4 = /* @__PURE__ */ new Set(), o7 = e7.filter((e8) => "function" != typeof e8), u7 = e7.filter((e8) => "function" == typeof e8);
  for (const r5 of e7) "string" != typeof r5 && "number" != typeof r5 || t4.add(r5);
  let a9 = null, s7 = null;
  return (e8, n8) => {
    if (null == e8) return e8;
    const l6 = typeof e8, i5 = "string" === l6 || "number" === l6;
    return i5 && (t4.has(e8) || u7.some((e9) => "string" === l6 && e9 === String || "number" === l6 && e9 === Number)) || "object" === l6 && u7.some((n9) => !f(e8, n9)) ? e8 : (i5 && o7.length ? (a9 || (a9 = o7.map((e9) => "string" == typeof e9 ? `'${e9}'` : `${e9}`).join(", ")), r2().error("Accessor#set", `'${e8}' is not a valid value for this property, only the following values are valid: ${a9}`)) : "object" == typeof e8 && u7.length ? (s7 || (s7 = u7.map((e9) => m(e9)).join(", ")), r2().error("Accessor#set", `'${e8}' is not a valid value for this property, value must be one of ${s7}`)) : r2().error("Accessor#set", `'${e8}' is not a valid value for this property`), n8 && (n8.valid = false), null);
  };
}
function N(e7, n7) {
  if (2 === arguments.length) return N(e7).call(null, n7);
  const t4 = {}, o7 = [], u7 = [];
  for (const r5 in e7.typeMap) {
    const n8 = e7.typeMap[r5];
    t4[r5] = w(n8), o7.push(m(n8)), u7.push(r5);
  }
  const a9 = () => `'${o7.join("', '")}'`, s7 = () => `'${u7.join("', '")}'`, l6 = "string" == typeof e7.key ? (n8) => n8[e7.key] : e7.key;
  return (n8) => {
    if (e7.base && !f(e7.base, n8)) return n8;
    if (null == n8) return n8;
    const o8 = l6(n8) || e7.defaultKeyValue, u8 = t4[o8];
    if (!u8) return r2().error("Accessor#set", `Invalid property value, value needs to be one of ${a9()}, or a plain object that can autocast (having .type = ${s7()})`), null;
    if (!f(e7.typeMap[o8], n8)) return n8;
    if ("string" == typeof e7.key && !c(n8)) {
      const r5 = {};
      for (const t5 in n8) t5 !== e7.key && (r5[t5] = n8[t5]);
      return u8(r5);
    }
    return u8(n8);
  };
}
var x = class {
};
var _ = class {
};
var B = { native: (e7) => ({ type: "native", value: e7 }), array: (e7) => ({ type: "array", value: e7 }), oneOf: (e7) => ({ type: "one-of", values: e7 }) };
function C(e7) {
  if (!e7 || !("type" in e7)) return false;
  switch (e7.type) {
    case "native":
    case "array":
    case "one-of":
      return true;
  }
  return false;
}
function D(e7) {
  switch (e7.type) {
    case "native":
      return w(e7.value);
    case "array":
      return A(D(e7.value));
    case "one-of":
      return F(e7);
    default:
      return null;
  }
}
function F(e7) {
  let n7 = null;
  return (t4, o7) => L(t4, e7) ? t4 : (null == n7 && (n7 = I(e7)), r2().error("Accessor#set", `Invalid property value, value needs to be of type ${n7}`), o7 && (o7.valid = false), null);
}
function I(e7) {
  switch (e7.type) {
    case "native":
      switch (e7.value) {
        case Number:
          return "number";
        case String:
          return "string";
        case Boolean:
          return "boolean";
        case x:
          return "integer";
        case Date:
          return "date";
        case _:
          return "null";
        default:
          return m(e7.value);
      }
    case "array":
      return `array of ${I(e7.value)}`;
    case "one-of": {
      const n7 = e7.values.map((e8) => I(e8));
      return `one of ${n7.slice(0, -1)} or ${n7[n7.length - 1]}`;
    }
  }
  return "unknown";
}
function L(e7, n7) {
  if (null == e7) return true;
  switch (n7.type) {
    case "native":
      switch (n7.value) {
        case Number:
        case x:
          return "number" == typeof e7;
        case Boolean:
          return "boolean" == typeof e7;
        case String:
          return "string" == typeof e7;
        case _:
          return null === e7;
      }
      return e7 instanceof n7.value;
    case "array":
      return !!Array.isArray(e7) && !e7.some((e8) => !L(e8, n7.value));
    case "one-of":
      return n7.values.some((n8) => L(e7, n8));
  }
}

// node_modules/@arcgis/core/core/Warning.js
var s3 = class extends e2 {
  constructor(e7, s7, t4) {
    super(e7, s7, t4);
  }
};
s3.prototype.type = "warning";

// node_modules/@arcgis/core/core/accessorSupport/beforeDestroy.js
var o2 = Symbol("Accessor-beforeDestroy");

// node_modules/@arcgis/core/core/accessorSupport/interfaces.js
var I2;
!function(I3) {
  I3[I3.INITIALIZING = 0] = "INITIALIZING", I3[I3.CONSTRUCTING = 1] = "CONSTRUCTING", I3[I3.CONSTRUCTED = 2] = "CONSTRUCTED", I3[I3.DESTROYED = 3] = "DESTROYED";
}(I2 || (I2 = {}));

// node_modules/@arcgis/core/core/accessorSupport/metadata.js
function r3(e7) {
  let r5 = e7.constructor.__accessorMetadata__;
  const o7 = Object.prototype.hasOwnProperty.call(e7.constructor, "__accessorMetadata__");
  if (r5) {
    if (!o7) {
      r5 = Object.create(r5);
      for (const e8 in r5) r5[e8] = a(r5[e8]);
      Object.defineProperty(e7.constructor, "__accessorMetadata__", { value: r5, enumerable: false, configurable: true, writable: true });
    }
  } else r5 = {}, Object.defineProperty(e7.constructor, "__accessorMetadata__", { value: r5, enumerable: false, configurable: true, writable: true });
  return e7.constructor.__accessorMetadata__;
}
function o3(t4, e7) {
  const o7 = r3(t4);
  let c7 = o7[e7];
  return c7 || (c7 = o7[e7] = {}), c7;
}
function c2(t4, r5) {
  return u(t4, r5, n3);
}
var a4 = /^(?:[^.]+\.)?(?:value|type|(?:json\.type|json\.origins\.[^.]\.type))$/;
function n3(t4) {
  return a4.test(t4) ? "replace" : "merge";
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/originAliases.js
function n4(n7) {
  if (n7.json && n7.json.origins) {
    const o7 = n7.json.origins, e7 = { "web-document": ["web-scene", "web-map"] };
    for (const n8 in e7) if (o7[n8]) {
      const s7 = o7[n8];
      e7[n8].forEach((n9) => {
        o7[n9] = s7;
      }), delete o7[n8];
    }
  }
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/type.js
function e4(e7) {
  var _a;
  return !!e7 && ((_a = e7.prototype) == null ? void 0 : _a.declaredClass) && 0 === e7.prototype.declaredClass.indexOf("esri.core.Collection");
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/reader.js
var i2 = () => n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.reader");
function p2(t4, r5, n7) {
  var _a, _b;
  t4 && (!n7 && !r5.read || ((_a = r5.read) == null ? void 0 : _a.reader) || false === ((_b = r5.read) == null ? void 0 : _b.enabled) || l2(t4) && e("read.reader", u3(t4), r5));
}
function u3(t4) {
  var _a, _b;
  const e7 = t4.ndimArray ?? 0;
  if (e7 > 1) return c3(t4);
  if (1 === e7) return a5(t4);
  if ("type" in t4 && d2(t4.type)) {
    const e8 = (_b = (_a = t4.type.prototype) == null ? void 0 : _a.itemType) == null ? void 0 : _b.Type, r5 = a5("function" == typeof e8 ? { type: e8 } : { types: e8 });
    return (e9, n7, o7) => {
      const i5 = r5(e9, n7, o7);
      return i5 ? new t4.type(i5) : i5;
    };
  }
  return s4(t4);
}
function s4(t4) {
  return "type" in t4 ? y2(t4.type) : g2(t4.types);
}
function y2(t4) {
  return t4.prototype.read ? (e7, r5, n7) => {
    if (null == e7) return e7;
    const o7 = typeof e7;
    if ("object" !== o7) return void i2().error(`Expected JSON value of type 'object' to deserialize type '${t4.prototype.declaredClass}', but got '${o7}'`);
    const p6 = new t4();
    return p6.read(e7, n7), p6;
  } : t4.fromJSON;
}
function f2(t4, e7, r5, n7) {
  return 0 !== n7 && Array.isArray(e7) ? e7.map((e8) => f2(t4, e8, r5, n7 - 1)) : t4(e7, void 0, r5);
}
function c3(t4) {
  const e7 = s4(t4), r5 = f2.bind(null, e7), n7 = t4.ndimArray ?? 0;
  return (t5, e8, o7) => {
    if (null == t5) return t5;
    t5 = r5(t5, o7, n7);
    let i5 = n7, p6 = t5;
    for (; i5 > 0 && Array.isArray(p6); ) i5--, p6 = p6[0];
    if (void 0 !== p6) for (let r6 = 0; r6 < i5; r6++) t5 = [t5];
    return t5;
  };
}
function a5(t4) {
  const e7 = s4(t4);
  return (t5, r5, n7) => {
    if (null == t5) return t5;
    if (Array.isArray(t5)) {
      const r6 = [];
      for (const o8 of t5) {
        const t6 = e7(o8, void 0, n7);
        void 0 !== t6 && r6.push(t6);
      }
      return r6;
    }
    const o7 = e7(t5, void 0, n7);
    return void 0 !== o7 ? [o7] : void 0;
  };
}
function d2(t4) {
  if (!e4(t4)) return false;
  const e7 = t4.prototype.itemType;
  return !(!e7 || !e7.Type) && ("function" == typeof e7.Type ? m2(e7.Type) : j2(e7.Type));
}
function l2(t4) {
  return "types" in t4 ? j2(t4.types) : m2(t4.type);
}
function m2(t4) {
  return !Array.isArray(t4) && (!!t4 && t4.prototype && ("read" in t4.prototype || "fromJSON" in t4 || d2(t4)));
}
function j2(t4) {
  for (const e7 in t4.typeMap) {
    if (!m2(t4.typeMap[e7])) return false;
  }
  return true;
}
function g2(t4) {
  let e7 = null;
  const n7 = t4.errorContext ?? "type", o7 = t4.validate;
  return (p6, u7, s7) => {
    if (null == p6) return p6;
    const y5 = typeof p6;
    if ("object" !== y5) return void i2().error(`Expected JSON value of type 'object' to deserialize, but got '${y5}'`);
    e7 || (e7 = v2(t4));
    const f5 = t4.key;
    if ("string" != typeof f5) return;
    const c7 = p6[f5], a9 = c7 ? e7[c7] : t4.defaultKeyValue ? t4.typeMap[t4.defaultKeyValue] : void 0;
    if (!a9) {
      const t5 = `Type '${c7 || "unknown"}' is not supported`;
      return (s7 == null ? void 0 : s7.messages) && p6 && s7.messages.push(new s3(`${n7}:unsupported`, t5, { definition: p6, context: s7 })), void i2().error(t5);
    }
    const d3 = new a9();
    return d3.read(p6, s7), o7 ? o7(d3) : d3;
  };
}
function v2(t4) {
  var _a, _b;
  const e7 = {};
  for (const r5 in t4.typeMap) {
    const o7 = t4.typeMap[r5], i5 = r3(o7.prototype);
    if ("function" == typeof t4.key) continue;
    const p6 = i5[t4.key];
    if (!p6) continue;
    if (((_a = p6.json) == null ? void 0 : _a.type) && Array.isArray(p6.json.type) && 1 === p6.json.type.length && "string" == typeof p6.json.type[0]) {
      e7[p6.json.type[0]] = o7;
      continue;
    }
    const u7 = (_b = p6.json) == null ? void 0 : _b.write;
    if (!(u7 == null ? void 0 : u7.writer)) {
      e7[r5] = o7;
      continue;
    }
    const s7 = u7.target, y5 = "string" == typeof s7 ? s7 : t4.key, f5 = {};
    u7.writer(r5, f5, y5), f5[y5] && (e7[f5[y5]] = o7);
  }
  return e7;
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/shorthands.js
function e5(e7) {
  if (e7.json || (e7.json = {}), o4(e7.json), n5(e7.json), r4(e7.json), e7.json.origins) for (const t4 in e7.json.origins) o4(e7.json.origins[t4]), n5(e7.json.origins[t4]), r4(e7.json.origins[t4]);
  return true;
}
function r4(e7) {
  e7.name && (e7.read && "object" == typeof e7.read ? void 0 === e7.read.source && (e7.read.source = e7.name) : e7.read = { source: e7.name }, e7.write && "object" == typeof e7.write ? void 0 === e7.write.target && (e7.write.target = e7.name) : e7.write = { target: e7.name });
}
function o4(e7) {
  "boolean" == typeof e7.read ? e7.read = { enabled: e7.read } : "function" == typeof e7.read ? e7.read = { enabled: true, reader: e7.read } : e7.read && "object" == typeof e7.read && void 0 === e7.read.enabled && (e7.read.enabled = true);
}
function n5(e7) {
  "boolean" == typeof e7.write ? e7.write = { enabled: e7.write } : "function" == typeof e7.write ? e7.write = { enabled: true, writer: e7.write } : e7.write && "object" == typeof e7.write && void 0 === e7.write.enabled && (e7.write.enabled = true);
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty/writer.js
function i3(r5, e7) {
  if (!e7.write || e7.write.writer || false === e7.write.enabled && !e7.write.overridePolicy) return;
  const t4 = (r5 == null ? void 0 : r5.ndimArray) ?? 0;
  r5 && (1 === t4 || "type" in r5 && e4(r5.type)) ? e7.write.writer = a6 : t4 > 1 ? e7.write.writer = l3(t4) : e7.types ? Array.isArray(e7.types) ? e7.write.writer = f3(e7.types[0]) : e7.write.writer = o5(e7.types) : e7.write.writer = s5;
}
function o5(r5) {
  return (e7, t4, n7, i5) => e7 ? u4(e7, r5, i5) ? s5(e7, t4, n7, i5) : void 0 : s5(e7, t4, n7, i5);
}
function u4(t4, n7, i5) {
  for (const r5 in n7.typeMap) if (t4 instanceof n7.typeMap[r5]) return true;
  if (i5 == null ? void 0 : i5.messages) {
    const o7 = n7.errorContext ?? "type", u7 = `Values of type '${("function" != typeof n7.key ? t4[n7.key] : t4.declaredClass) ?? "Unknown"}' cannot be written`;
    i5 && i5.messages && t4 && i5.messages.push(new s(`${o7}:unsupported`, u7, { definition: t4, context: i5 })), n.getLogger("esri.core.accessorSupport.extensions.serializableProperty.writer").error(u7);
  }
  return false;
}
function f3(r5) {
  return (e7, t4, n7, i5) => {
    if (!e7 || !Array.isArray(e7)) return s5(e7, t4, n7, i5);
    return s5(e7.filter((e8) => u4(e8, r5, i5)), t4, n7, i5);
  };
}
function s5(r5, e7, n7, i5) {
  e(n7, p3(r5, i5), e7);
}
function p3(r5, e7) {
  return r5 && "function" == typeof r5.write ? r5.write({}, e7) : r5 && "function" == typeof r5.toJSON ? r5.toJSON() : "number" == typeof r5 ? y3(r5) : r5;
}
function y3(r5) {
  return r5 === -1 / 0 ? -Number.MAX_VALUE : r5 === 1 / 0 ? Number.MAX_VALUE : isNaN(r5) ? null : r5;
}
function a6(r5, e7, n7, i5) {
  let o7;
  null === r5 ? o7 = null : r5 && "function" == typeof r5.map ? (o7 = r5.map((r6) => p3(r6, i5)), "function" == typeof o7.toArray && (o7 = o7.toArray())) : o7 = [p3(r5, i5)], e(n7, o7, e7);
}
function c4(r5, e7, t4) {
  return 0 !== t4 && Array.isArray(r5) ? r5.map((r6) => c4(r6, e7, t4 - 1)) : p3(r5, e7);
}
function l3(r5) {
  return (e7, n7, i5, o7) => {
    let u7;
    if (null === e7) u7 = null;
    else {
      u7 = c4(e7, o7, r5);
      let t4 = r5, n8 = u7;
      for (; t4 > 0 && Array.isArray(n8); ) t4--, n8 = n8[0];
      if (void 0 !== n8) for (let r6 = 0; r6 < t4; r6++) u7 = [u7];
    }
    e(i5, u7, n7);
  };
}

// node_modules/@arcgis/core/core/accessorSupport/extensions/serializableProperty.js
function o6(r5, i5) {
  return y4(r5, "any", i5 == null ? void 0 : i5.origin);
}
function s6(r5, i5) {
  return y4(r5, "read", i5 == null ? void 0 : i5.origin);
}
function a7(r5, i5) {
  return y4(r5, "write", i5 == null ? void 0 : i5.origin);
}
function y4(r5, i5, n7) {
  let e7 = r5 == null ? void 0 : r5.json;
  if ((e7 == null ? void 0 : e7.origins) && n7) {
    let r6;
    r6 = "link-chart" === n7 ? e7.origins[n7] && ("any" === i5 || i5 in e7.origins[n7]) ? e7.origins[n7] : e7.origins["web-map"] : e7.origins[n7], r6 && ("any" === i5 || i5 in r6) && (e7 = r6);
  }
  return e7;
}
function p4(r5) {
  var _a;
  const i5 = f4(r5);
  if (r5.json.origins) for (const e7 in r5.json.origins) {
    const o7 = r5.json.origins[e7], s7 = o7.types ? u5(o7) : i5;
    p2(s7, o7, false), o7.types && !o7.write && ((_a = r5.json.write) == null ? void 0 : _a.enabled) && (o7.write = { ...r5.json.write }), i3(s7, o7);
  }
  p2(i5, r5.json, true), i3(i5, r5.json);
}
function f4(r5) {
  return r5.json.types ? j3(r5.json) : r5.type ? c5(r5) : j3(r5);
}
function u5(r5) {
  return r5.type ? c5(r5) : j3(r5);
}
function c5(i5) {
  if (!i5.type) return;
  let n7 = 0, e7 = i5.type;
  for (; Array.isArray(e7) && !S(e7); ) e7 = e7[0], n7++;
  return { type: e7, ndimArray: n7 };
}
function j3(r5) {
  if (!r5.types) return;
  let i5 = 0, n7 = r5.types;
  for (; Array.isArray(n7); ) n7 = n7[0], i5++;
  return { types: n7, ndimArray: i5 };
}
function l4(r5) {
  e5(r5) && (n4(r5), p4(r5));
}

// node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var n6 = /* @__PURE__ */ new Set();
var c6 = /* @__PURE__ */ new Set();
function a8(e7) {
  return (r5) => {
    e7 ?? (e7 = "esri.core.Accessor"), r5.prototype.declaredClass = e7, p5(r5);
    const s7 = [], i5 = [];
    let a9 = r5.prototype;
    for (; a9; ) a9.hasOwnProperty("initialize") && !n6.has(a9.initialize) && (n6.add(a9.initialize), s7.push(a9.initialize)), a9.hasOwnProperty("destroy") && !c6.has(a9.destroy) && (c6.add(a9.destroy), i5.push(a9.destroy)), a9 = Object.getPrototypeOf(a9);
    n6.clear(), c6.clear();
    const l6 = class extends r5 {
      constructor(...e8) {
        if (super(...e8), this.constructor === l6 && "function" == typeof this.postscript) {
          if (s7.length && Object.defineProperty(this, "initialize", { enumerable: false, configurable: true, value() {
            for (let e9 = s7.length - 1; e9 >= 0; e9--) s7[e9].call(this);
          } }), i5.length) {
            let e9 = false;
            const r6 = this[o2];
            Object.defineProperty(this, "destroy", { enumerable: false, configurable: true, value() {
              if (!e9) {
                e9 = true, r6.call(this);
                for (let e10 = 0; e10 < i5.length; e10++) i5[e10].call(this);
              }
            } });
          }
          Object.defineProperty(this, Symbol.dispose, { enumerable: false, configurable: true, value() {
            this.destroy();
          } }), this.postscript();
        }
      }
    };
    l6.__accessorMetadata__ = r3(r5.prototype), l6.prototype.declaredClass = e7;
    const u7 = (e7 || "AccessorSubclass").split(".").slice(-1)[0];
    return Object.defineProperty(l6, "name", { value: u7, configurable: true }), l6;
  };
}
function l5(e7, t4) {
  return null == t4.get ? function() {
    const t5 = this.__accessor__, r5 = t5.propertiesByName.get(e7);
    if (void 0 === r5) return;
    t5.mutable && a2(r5);
    const o7 = t5.store;
    return o7.has(e7) ? o7.get(e7) : r5.metadata.value;
  } : function() {
    const t5 = this.__accessor__, r5 = t5.propertiesByName.get(e7);
    if (void 0 !== r5) return r5.getComputed(t5);
  };
}
function p5(e7) {
  const t4 = e7.prototype, s7 = r3(t4), n7 = {};
  for (const o7 of Object.getOwnPropertyNames(s7)) {
    const e8 = s7[o7];
    l4(e8), n7[o7] = { enumerable: true, configurable: true, get: l5(o7, e8), set(t5) {
      const s8 = this.__accessor__;
      if (void 0 !== s8) {
        if (s8.mutable) return s8.initialized && e8.readOnly ? u6("read-only", o7) : s8.lifecycle === I2.CONSTRUCTED && e8.constructOnly ? u6("construct-only", o7) : void s8.set(o7, t5);
      } else Object.defineProperty(this, o7, { enumerable: true, configurable: true, writable: true, value: t5 });
    } };
  }
  Object.defineProperties(e7.prototype, n7);
}
var u6 = (t4, r5) => {
  n.getLogger("esri.core.Accessor").error(`cannot assign to ${t4} property '${r5}'`);
};

// node_modules/@arcgis/core/core/ObjectPool.js
function t3(t4) {
  return (t4 == null ? void 0 : t4.release) && "function" == typeof t4.release;
}
function i4(t4) {
  return (t4 == null ? void 0 : t4.acquire) && "function" == typeof t4.acquire;
}
var e6 = class _e {
  constructor(t4, i5, e7, o7 = 1, s7 = 0) {
    this._ctor = t4, this._acquireFunction = i5, this._releaseFunction = e7, this.allocationSize = o7, this._pool = new Array(s7), this._initialSize = s7;
    for (let n7 = 0; n7 < s7; n7++) this._pool[n7] = new this._ctor();
    this.allocationSize = Math.max(o7, 1);
  }
  destroy() {
    this.prune(0);
  }
  acquire(...t4) {
    let o7;
    if (_e.test.disabled) o7 = new this._ctor();
    else {
      if (0 === this._pool.length) {
        const t5 = this.allocationSize;
        for (let i5 = 0; i5 < t5; i5++) this._pool[i5] = new this._ctor();
      }
      o7 = this._pool.pop();
    }
    return this._acquireFunction ? this._acquireFunction(o7, ...t4) : i4(o7) && o7.acquire(...t4), o7;
  }
  release(i5) {
    i5 && !_e.test.disabled && (this._releaseFunction ? this._releaseFunction(i5) : t3(i5) && i5.release(), this._pool.push(i5));
  }
  prune(t4 = this._initialSize) {
    if (!(t4 >= this._pool.length)) {
      for (let i5 = t4; i5 < this._pool.length; ++i5) {
        const t5 = this._pool[i5];
        this._dispose(t5);
      }
      this._pool.length = t4;
    }
  }
  _dispose(t4) {
    t4.dispose && "function" == typeof t4.dispose && t4.dispose();
  }
};
e6.test = { disabled: false };

export {
  o2 as o,
  I2 as I,
  r3 as r,
  o3 as o2,
  c2 as c,
  n2 as n,
  t,
  r as r2,
  e3 as e,
  u2 as u,
  a3 as a,
  s2 as s,
  i,
  h,
  w,
  A,
  $,
  M,
  k,
  S,
  T,
  N,
  x,
  _,
  B,
  C,
  D,
  s3 as s2,
  u3 as u2,
  y3 as y,
  o6 as o3,
  s6 as s3,
  a7 as a2,
  a8 as a3,
  e6 as e2
};
//# sourceMappingURL=chunk-4LTV6KQ5.js.map
