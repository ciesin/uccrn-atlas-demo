import {
  C
} from "./chunk-GKX3Z6XX.js";
import {
  $e,
  B,
  Be,
  De,
  Ee,
  H,
  He,
  Ke,
  Oe,
  Ue,
  ge,
  je,
  oe,
  q,
  ye
} from "./chunk-O4H354HZ.js";
import {
  b
} from "./chunk-SCYMP6Y5.js";
import "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import "./chunk-Z2A222O3.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import "./chunk-ZDVQNOKR.js";
import "./chunk-Y3AY7I5U.js";
import "./chunk-WZBMMIVS.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-AIKBABBU.js";
import "./chunk-A42OBC4U.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/arcade/functions/featuresetstring.js
function T(a2, e) {
  return a2 && a2.domain ? "coded-value" === a2.domain.type || "codedValue" === a2.domain.type ? C.convertObjectToArcadeDictionary({ type: "codedValue", name: a2.domain.name, dataType: b[a2.field.type], codedValues: a2.domain.codedValues.map((n) => ({ name: n.name, code: n.code })) }, Be(e)) : C.convertObjectToArcadeDictionary({ type: "range", name: a2.domain.name, dataType: b[a2.field.type], min: a2.domain.minValue, max: a2.domain.maxValue }, Be(e)) : null;
}
function b2(h) {
  "async" === h.mode && (h.functions.domain = function(n, d) {
    return h.standardFunctionAsync(n, d, async (u, m, f) => {
      if (oe(f, 2, 3, n, d), H(f[0])) {
        return T(Ee(f[0], ye(f[1]), void 0 === f[2] ? void 0 : f[2]), n);
      }
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        return T(Oe(ye(f[1]), f[0], null, void 0 === f[2] ? void 0 : f[2]), n);
      }
      throw new a(n, r.InvalidParameter, d);
    });
  }, h.functions.subtypes = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, m, f) => {
      if (oe(f, 1, 1, o, i), H(f[0])) {
        const a2 = Ue(f[0]);
        return a2 ? C.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      if (B(f[0])) {
        await f[0]._ensureLoaded();
        const a2 = f[0].subtypeMetaData();
        return a2 ? C.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  }, h.functions.domainname = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, l) => {
      if (oe(l, 2, 4, n, o), H(l[0])) return He(l[0], ye(l[1]), l[2], void 0 === l[3] ? void 0 : l[3]);
      if (B(l[0])) {
        await l[0]._ensureLoaded();
        const n2 = Oe(ye(l[1]), l[0], null, void 0 === l[3] ? void 0 : l[3]);
        return je(n2, l[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domainname", min: 2, max: 4 }), h.functions.domaincode = function(n, o) {
    return h.standardFunctionAsync(n, o, async (d, u, m) => {
      if (oe(m, 2, 4, n, o), H(m[0])) return $e(m[0], ye(m[1]), m[2], void 0 === m[3] ? void 0 : m[3]);
      if (B(m[0])) {
        await m[0]._ensureLoaded();
        const n2 = Oe(ye(m[1]), m[0], null, void 0 === m[3] ? void 0 : m[3]);
        return De(n2, m[2]);
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.signatures.push({ name: "domaincode", min: 2, max: 4 }), h.functions.text = function(n, r2) {
    return h.standardFunctionAsync(n, r2, async (o, i, s) => {
      if (oe(s, 1, 2, n, r2), B(s[0])) {
        const t = q(s[1], "");
        if ("" === t) return s[0].castToText();
        if ("schema" === t.toLowerCase()) return s[0].convertToText("schema", o.abortSignal);
        if ("featureset" === t.toLowerCase()) return s[0].convertToText("featureset", o.abortSignal);
        throw new a(n, r.InvalidParameter, r2);
      }
      return ge(s[0], s[1]);
    });
  }, h.functions.gdbversion = function(n, o) {
    return h.standardFunctionAsync(n, o, async (i, s, d) => {
      if (oe(d, 1, 1, n, o), H(d[0])) return d[0].gdbVersion();
      if (B(d[0])) {
        return (await d[0].load()).gdbVersion;
      }
      throw new a(n, r.InvalidParameter, o);
    });
  }, h.functions.schema = function(o, i) {
    return h.standardFunctionAsync(o, i, async (s, d, m) => {
      if (oe(m, 1, 1, o, i), B(m[0])) return await m[0].load(), C.convertObjectToArcadeDictionary(m[0].schema(), Be(o));
      if (H(m[0])) {
        const a2 = Ke(m[0]);
        return a2 ? C.convertObjectToArcadeDictionary(a2, Be(o)) : null;
      }
      throw new a(o, r.InvalidParameter, i);
    });
  });
}
export {
  b2 as registerFunctions
};
//# sourceMappingURL=featuresetstring-G6PLOXLR.js.map
