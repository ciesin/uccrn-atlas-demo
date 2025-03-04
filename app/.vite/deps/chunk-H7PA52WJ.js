import {
  l
} from "./chunk-PODRVOXS.js";
import {
  h,
  p
} from "./chunk-NALU24NB.js";
import {
  E
} from "./chunk-REAPFM7O.js";
import {
  n as n2
} from "./chunk-7AOPU62X.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  n2 as n,
  r,
  s2 as s,
  t
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/intl/substitute.js
var i = () => n.getLogger("esri.intl.substitute");
function s2(t2, r4, n3 = {}) {
  const { format: o2 = {} } = n3;
  return r(t2, (t3) => u(t3, r4, o2));
}
function u(t2, e, n3) {
  let o2, i4;
  const s4 = t2.indexOf(":");
  if (-1 === s4 ? o2 = t2.trim() : (o2 = t2.slice(0, s4).trim(), i4 = t2.slice(s4 + 1).trim()), !o2) return "";
  const u2 = t(o2, e);
  if (null == u2) return "";
  const m = (i4 ? n3 == null ? void 0 : n3[i4] : null) ?? (n3 == null ? void 0 : n3[o2]);
  return m ? c(u2, m) : i4 ? a(u2, i4) : f(u2);
}
function c(t2, r4) {
  switch (r4.type) {
    case "date":
      return E(t2, r4.intlOptions);
    case "number":
      return l(t2, r4.intlOptions);
    default:
      return i().warn("missing format descriptor for key {key}"), f(t2);
  }
}
function a(t2, r4) {
  switch (r4.toLowerCase()) {
    case "dateformat":
      return E(t2);
    case "numberformat":
      return l(t2);
    default:
      return i().warn(`inline format is unsupported since 4.12: ${r4}`), /^(dateformat|datestring)/i.test(r4) ? E(t2) : /^numberformat/i.test(r4) ? l(t2) : f(t2);
  }
}
function f(t2) {
  switch (typeof t2) {
    case "string":
      return t2;
    case "number":
      return l(t2);
    case "boolean":
      return "" + t2;
    default:
      return t2 instanceof Date ? E(t2) : "";
  }
}

// node_modules/@arcgis/core/intl/t9n.js
async function r2(e, r4, s4, i4) {
  const a3 = r4.exec(s4);
  if (!a3) throw new s("esri-intl:invalid-bundle", `Bundle id "${s4}" is not compatible with the pattern "${r4}"`);
  const c3 = a3[1] ? `${a3[1]}/` : "", l2 = a3[2], w = p(i4), h3 = `${c3}${l2}.json`, u2 = w ? `${c3}${l2}_${w}.json` : h3;
  let d;
  try {
    d = await o(e(u2));
  } catch (f4) {
    if (u2 === h3) throw new s("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, { error: f4 });
    try {
      d = await o(e(h3));
    } catch (f5) {
      throw new s("intl:unknown-bundle", `Bundle "${s4}" cannot be loaded`, { error: f5 });
    }
  }
  return d;
}
async function o(t2) {
  if (null != a2.fetchBundleAsset) return a2.fetchBundleAsset(t2);
  const n3 = await P(t2, { responseType: "text" });
  return JSON.parse(n3.data);
}
var s3 = class {
  constructor({ base: e = "", pattern: t2, location: n3 = new URL(window.location.href) }) {
    let r4;
    r4 = "string" == typeof n3 ? (e2) => new URL(e2, new URL(n3, window.location.href)).href : n3 instanceof URL ? (e2) => new URL(e2, n3).href : n3, this.pattern = "string" == typeof t2 ? new RegExp(`^${t2}`) : t2, this.getAssetUrl = r4, e = e ? e.endsWith("/") ? e : e + "/" : "", this.matcher = new RegExp(`^${e}(?:(.*)\\/)?(.*)$`);
  }
  fetchMessageBundle(e, t2) {
    return r2(this.getAssetUrl, this.matcher, e, t2);
  }
};
function i2(e) {
  return new s3(e);
}
var a2 = {};

// node_modules/@arcgis/core/intl.js
h(i2({ pattern: "esri/", location: n2 }));

export {
  s2 as s
};
//# sourceMappingURL=chunk-H7PA52WJ.js.map
