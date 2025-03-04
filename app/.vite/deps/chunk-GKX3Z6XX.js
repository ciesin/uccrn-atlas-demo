import {
  B,
  G,
  Ge,
  H,
  K,
  Le,
  Ne,
  Q,
  U,
  X,
  Ze,
  be,
  de,
  ee,
  ne,
  re,
  s,
  te,
  ye,
  z
} from "./chunk-O4H354HZ.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import {
  e,
  n as n2,
  o,
  t
} from "./chunk-ZDVQNOKR.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
import {
  n
} from "./chunk-YUVX6H42.js";

// node_modules/@arcgis/core/arcade/deepClone.js
function i(a2) {
  p = a2;
}
var p;
function f(i2) {
  return null === i2 ? null : te(i2) ? i2.clone() : z(i2) ? i2 : U(i2) ? i2.clone() : ee(i2) ? i2.toArray().map((a2) => f(a2)) : o(i2) ? i2.map((a2) => f(a2)) : H(i2) ? p.createFromArcadeFeature(i2) : Q(i2) || B(i2) ? i2 : K(i2) || "esri.arcade.Attachment" === (i2 == null ? void 0 : i2.declaredClass) ? i2.deepClone() : ("esri.arcade.Portal" === (i2 == null ? void 0 : i2.declaredClass) || X(i2) || i2 instanceof s || G(i2), i2);
}

// node_modules/@arcgis/core/arcade/Dictionary.js
function j(t2, s2, e2 = false, r2 = false) {
  if (null == t2) return null;
  if (n2(t2)) return be(t2);
  if (t(t2)) return Ze(t2);
  if (e(t2)) return ye(t2);
  if (te(t2)) return Ne(t2, s2);
  if (ne(t2)) return t2;
  if (re(t2)) return t2;
  if (o(t2)) {
    const i3 = [];
    for (const n3 of t2) i3.push(j(n3, s2, e2, r2));
    return i3;
  }
  if (r2 && U(t2)) return t2;
  const i2 = new C();
  i2.immutable = false;
  for (const n3 of Object.keys(t2)) {
    const o2 = t2[n3];
    void 0 !== o2 && i2.setField(n3, j(o2, s2, e2, r2));
  }
  return i2.immutable = e2, i2;
}
var C = class _C {
  constructor(t2) {
    this.declaredClass = "esri.arcade.Dictionary", this.plain = false, this.immutable = true, this.attributes = t2 instanceof _C ? t2.attributes : t2 ?? {};
  }
  field(t2) {
    const s2 = t2.toLowerCase(), i2 = this.attributes[t2];
    if (void 0 !== i2) return i2;
    for (const e2 in this.attributes) if (e2.toLowerCase() === s2) return this.attributes[e2];
    throw new a(null, r.FieldNotFound, null, { key: t2 });
  }
  setField(s2, n3) {
    if (this.immutable) throw new a(null, r.Immutable, null);
    if (G(n3)) throw new a(null, r.NoFunctionInDictionary, null);
    const o2 = s2.toLowerCase();
    n3 instanceof Date && (n3 = m.dateJSToArcadeDate(n3));
    if (void 0 === this.attributes[s2]) {
      for (const t2 in this.attributes) if (t2.toLowerCase() === o2) return void (this.attributes[t2] = n3);
      this.attributes[s2] = n3;
    } else this.attributes[s2] = n3;
  }
  hasField(t2) {
    const s2 = t2.toLowerCase();
    if (void 0 !== this.attributes[t2]) return true;
    for (const e2 in this.attributes) if (e2.toLowerCase() === s2) return true;
    return false;
  }
  keys() {
    let t2 = [];
    for (const s2 in this.attributes) t2.push(s2);
    return t2 = t2.sort(), t2;
  }
  castToText(t2 = false) {
    return de(this.attributes, { useNumbersForDates: t2 });
  }
  static convertObjectToArcadeDictionary(t2, s2, e2 = true, r2 = false) {
    const i2 = new _C();
    i2.immutable = false;
    for (const n3 in t2) {
      const o2 = t2[n3];
      void 0 !== o2 && i2.setField(n3.toString(), j(o2, s2, e2, r2));
    }
    return i2.immutable = e2, i2;
  }
  static convertJsonToArcade(t2, s2, e2 = false, r2 = false) {
    return j(t2, s2, e2, r2);
  }
  castAsJson(t2 = null) {
    const s2 = {};
    for (let e2 in this.attributes) {
      const r2 = this.attributes[e2];
      void 0 !== r2 && ((t2 == null ? void 0 : t2.keyTranslate) && (e2 = t2.keyTranslate(e2)), s2[e2] = Le(r2, t2));
    }
    return s2;
  }
  async castDictionaryValueAsJsonAsync(t2, s2, e2, r2 = null, i2) {
    const n3 = await Ge(e2, r2, i2);
    return t2[s2] = n3, n3;
  }
  async castAsJsonAsync(s2 = null, e2 = null) {
    const r2 = {}, i2 = [];
    for (let n3 in this.attributes) {
      const a2 = this.attributes[n3];
      (e2 == null ? void 0 : e2.keyTranslate) && (n3 = e2.keyTranslate(n3)), void 0 !== a2 && (z(a2) || a2 instanceof n || a2 instanceof m ? r2[n3] = Le(a2, e2) : i2.push(this.castDictionaryValueAsJsonAsync(r2, n3, a2, s2, e2)));
    }
    return i2.length > 0 && await Promise.all(i2), r2;
  }
  deepClone() {
    const t2 = new _C();
    t2.immutable = false;
    for (const e2 of this.keys()) t2.setField(e2, f(this.field(e2)));
    return t2;
  }
};

export {
  i,
  f,
  C
};
//# sourceMappingURL=chunk-GKX3Z6XX.js.map
