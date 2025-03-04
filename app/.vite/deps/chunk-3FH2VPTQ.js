import {
  e
} from "./chunk-LIL4TPKU.js";

// node_modules/@esri/calcite-components/dist/chunks/locale.js
var D = new RegExp("\\.(0+)?$");
var A = new RegExp("0+$");
var _i = class _i {
  // derived constant
  constructor(t) {
    if (t instanceof _i)
      return t;
    const [s, r] = M(t).split(".").concat("");
    this.value = BigInt(s + r.padEnd(_i.DECIMALS, "0").slice(0, _i.DECIMALS)) + BigInt(_i.ROUNDED && r[_i.DECIMALS] >= "5"), this.isNegative = t.charAt(0) === "-";
  }
  getIntegersAndDecimals() {
    const t = this.value.toString().replace("-", "").padStart(_i.DECIMALS + 1, "0"), s = t.slice(0, -_i.DECIMALS), r = t.slice(-_i.DECIMALS).replace(A, "");
    return { integers: s, decimals: r };
  }
  toString() {
    const { integers: t, decimals: s } = this.getIntegersAndDecimals();
    return `${this.isNegative ? "-" : ""}${t}${s.length ? "." + s : ""}`;
  }
  formatToParts(t) {
    const { integers: s, decimals: r } = this.getIntegersAndDecimals(), n = t.numberFormatter.formatToParts(BigInt(s));
    return this.isNegative && n.unshift({ type: "minusSign", value: t.minusSign }), r.length && (n.push({ type: "decimal", value: t.decimal }), r.split("").forEach((a) => n.push({ type: "fraction", value: a }))), n;
  }
  format(t) {
    const { integers: s, decimals: r } = this.getIntegersAndDecimals(), n = `${this.isNegative ? t.minusSign : ""}${t.numberFormatter.format(
      BigInt(s)
    )}`, a = r.length ? `${t.decimal}${r.split("").map((l) => t.numberFormatter.format(Number(l))).join("")}` : "";
    return `${n}${a}`;
  }
  add(t) {
    return _i.fromBigInt(this.value + new _i(t).value);
  }
  subtract(t) {
    return _i.fromBigInt(this.value - new _i(t).value);
  }
  multiply(t) {
    return _i._divRound(this.value * new _i(t).value, _i.SHIFT);
  }
  divide(t) {
    return _i._divRound(this.value * _i.SHIFT, new _i(t).value);
  }
};
_i.DECIMALS = 100;
_i.ROUNDED = true;
_i.SHIFT = BigInt("1" + "0".repeat(_i.DECIMALS));
_i._divRound = (t, s) => _i.fromBigInt(
  t / s + (_i.ROUNDED ? t * BigInt(2) / s % BigInt(2) : BigInt(0))
);
_i.fromBigInt = (t) => Object.assign(Object.create(_i.prototype), { value: t, isNegative: t < BigInt(0) });
var i = _i;
function f(e2) {
  return !(!e2 || isNaN(Number(e2)));
}
function U(e2) {
  return !e2 || !j(e2) ? "" : h(e2, (t) => {
    let s = false;
    const r = t.split("").filter((n, a) => n.match(/\./g) && !s ? (s = true, true) : n.match(/-/g) && a === 0 ? true : e.includes(n)).join("");
    return f(r) ? new i(r).toString() : "";
  });
}
var F = /^([-0])0+(?=\d)/;
var T = /(?!^\.)\.$/;
var L = /(?!^-)-/g;
var x = /^-\b0\b\.?0*$/;
var _ = /0*$/;
var K = (e2) => h(e2, (t) => {
  const s = t.replace(L, "").replace(T, "").replace(F, "$1");
  return f(s) ? x.test(s) ? s : R(s) : t;
});
function R(e2) {
  const t = e2.split(".")[1], s = new i(e2).toString(), [r, n] = s.split(".");
  return t && n !== t ? `${r}.${t}` : s;
}
function h(e2, t) {
  if (!e2)
    return e2;
  const s = e2.toLowerCase().indexOf("e") + 1;
  return s ? e2.replace(/[eE]*$/g, "").substring(0, s).concat(e2.slice(s).replace(/[eE]/g, "")).split(/[eE]/).map((r, n) => t(n === 1 ? r.replace(/\./g, "") : r)).join("e").replace(/^e/, "1e") : t(e2);
}
function M(e2) {
  const t = e2.split(/[eE]/);
  if (t.length === 1)
    return e2;
  const s = +e2;
  if (Number.isSafeInteger(s))
    return `${s}`;
  const r = e2.charAt(0) === "-", n = +t[1], a = t[0].split("."), l = (r ? a[0].substring(1) : a[0]) || "", b = a[1] || "", E = (m, o) => {
    const c = Math.abs(o) - m.length, d = c > 0 ? `${"0".repeat(c)}${m}` : m;
    return `${d.slice(0, o)}.${d.slice(o)}`;
  }, C = (m, o) => {
    const c = o > m.length ? `${m}${"0".repeat(o - m.length)}` : m;
    return `${c.slice(0, o)}.${c.slice(o)}`;
  }, $ = n > 0 ? `${l}${C(b, n)}` : `${E(l, n)}${b}`;
  return `${r ? "-" : ""}${$.charAt(0) === "." ? "0" : ""}${$.replace(D, "").replace(F, "")}`;
}
function j(e2) {
  return e.some((t) => e2.includes(t));
}
function J(e2, t, s) {
  const r = t.split(".")[1];
  if (r) {
    const n = r.match(_)[0];
    if (n && s.delocalize(e2).length !== t.length && r.indexOf("e") === -1) {
      const a = s.decimal;
      return e2 = e2.includes(a) ? e2 : `${e2}${a}`, e2.padEnd(e2.length + n.length, s.localize("0"));
    }
  }
  return e2;
}
var p = "en";
var I = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "el",
  p,
  "es",
  "et",
  "fi",
  "fr",
  "he",
  "hr",
  "hu",
  "id",
  "it",
  "ja",
  "ko",
  "lt",
  "lv",
  "no",
  "nl",
  "pl",
  "pt-BR",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
var N = [
  "ar",
  "bg",
  "bs",
  "ca",
  "cs",
  "da",
  "de",
  "de-AT",
  "de-CH",
  "el",
  p,
  "en-AU",
  "en-CA",
  "en-GB",
  "es",
  "es-MX",
  "et",
  "fi",
  "fr",
  "fr-CH",
  "he",
  "hi",
  "hr",
  "hu",
  "id",
  "it",
  "it-CH",
  "ja",
  "ko",
  "lt",
  "lv",
  "mk",
  "no",
  "nl",
  "pl",
  "pt",
  "pt-PT",
  "ro",
  "ru",
  "sk",
  "sl",
  "sr",
  "sv",
  "th",
  "tr",
  "uk",
  "vi",
  "zh-CN",
  "zh-HK",
  "zh-TW"
];
var W = new Map(
  Object.entries({
    bg: { am: "пр.об.", pm: "сл.об." },
    bs: { am: "prijepodne", pm: "popodne" },
    ca: { am: "a. m.", pm: "p. m." },
    cs: { am: "dop.", pm: "odp." },
    es: { am: "a. m.", pm: "p. m." },
    "es-mx": { am: "a.m.", pm: "p.m." },
    "es-MX": { am: "a.m.", pm: "p.m." },
    fi: { am: "ap.", pm: "ip." },
    he: { am: "לפנה״צ", pm: "אחה״צ" },
    hu: { am: "de. ", pm: "du." },
    lt: { am: "priešpiet", pm: "popiet" },
    lv: { am: "priekšpusdienā", pm: "pēcpusdienā" },
    mk: { am: "претпл.", pm: "попл." },
    no: { am: "a.m.", pm: "p.m." },
    nl: { am: "a.m.", pm: "p.m." },
    "pt-pt": { am: "da manhã", pm: "da tarde" },
    "pt-PT": { am: "da manhã", pm: "da tarde" },
    ro: { am: "a.m.", pm: "p.m." },
    sl: { am: "dop.", pm: "pop." },
    sv: { am: "fm", pm: "em" },
    th: { am: "ก่อนเที่ยง", pm: "หลังเที่ยง" },
    tr: { am: "ÖÖ", pm: "ÖS" },
    uk: { am: "дп", pm: "пп" },
    vi: { am: "SA", pm: "CH" }
  })
);
var k = ["arab", "arabext", "latn"];
[.../* @__PURE__ */ new Set([...I, ...N])];
var w = (e2) => k.includes(e2);
var g = new Intl.NumberFormat().resolvedOptions().numberingSystem;
var y = g === "arab" || !w(g) ? "latn" : g;
var H = (e2) => w(e2) ? e2 : y;
function O(e2, t = "cldr") {
  const s = t === "cldr" ? N : I;
  return e2 ? s.includes(e2) ? e2 : (e2 = e2.toLowerCase(), e2 === "nb" ? "no" : t === "t9n" && e2 === "pt" ? "pt-BR" : (e2.includes("-") && (e2 = e2.replace(/(\w+)-(\w+)/, (r, n, a) => `${n}-${a.toUpperCase()}`), s.includes(e2) || (e2 = e2.split("-")[0])), e2 === "zh" ? "zh-CN" : s.includes(e2) ? e2 : (console.warn(
    `Translations for the "${e2}" locale are not available and will fall back to the default, English (en).`
  ), p))) : p;
}
var z = class {
  constructor() {
    this.delocalize = (t) => (
      // For performance, (de)localization is skipped if the formatter isn't initialized.
      // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
      // `numberFormatOptions` must be set in a component to create and cache the formatter.
      this._numberFormatOptions ? h(
        t,
        (s) => s.replace(new RegExp(`[${this._minusSign}]`, "g"), "-").replace(new RegExp(`[${this._group}]`, "g"), "").replace(new RegExp(`[${this._decimal}]`, "g"), ".").replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex)
      ) : t
    ), this.localize = (t) => this._numberFormatOptions ? h(
      t,
      (s) => f(s.trim()) ? new i(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group) : s
    ) : t;
  }
  get group() {
    return this._group;
  }
  get decimal() {
    return this._decimal;
  }
  get minusSign() {
    return this._minusSign;
  }
  get digits() {
    return this._digits;
  }
  get numberFormatter() {
    return this._numberFormatter;
  }
  get numberFormatOptions() {
    return this._numberFormatOptions;
  }
  /** numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date */
  set numberFormatOptions(t) {
    if (t.locale = O(t == null ? void 0 : t.locale), t.numberingSystem = H(t == null ? void 0 : t.numberingSystem), // No need to create the formatter if `locale` and `numberingSystem`
    // are the default values and `numberFormatOptions` has not been set
    !this._numberFormatOptions && t.locale === p && t.numberingSystem === y && // don't skip initialization if any options besides locale/numberingSystem are set
    Object.keys(t).length === 2 || // cache formatter by only recreating when options change
    JSON.stringify(this._numberFormatOptions) === JSON.stringify(t))
      return;
    this._numberFormatOptions = t, this._numberFormatter = new Intl.NumberFormat(
      this._numberFormatOptions.locale,
      this._numberFormatOptions
    ), this._digits = [
      ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
        useGrouping: false,
        numberingSystem: this._numberFormatOptions.numberingSystem
      }).format(9876543210)
    ].reverse();
    const s = new Map(this._digits.map((n, a) => [n, a])), r = new Intl.NumberFormat(this._numberFormatOptions.locale, {
      numberingSystem: this._numberFormatOptions.numberingSystem
    }).formatToParts(-123456789e-1);
    this._actualGroup = r.find((n) => n.type === "group").value, this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? " " : this._actualGroup, this._decimal = t.locale === "bs" || t.locale === "mk" ? "," : r.find((n) => n.type === "decimal").value, this._minusSign = r.find((n) => n.type === "minusSign").value, this._getDigitIndex = (n) => s.get(n);
  }
};
var q = new z();

export {
  i,
  f,
  U,
  K,
  J,
  q
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/locale.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-3FH2VPTQ.js.map
