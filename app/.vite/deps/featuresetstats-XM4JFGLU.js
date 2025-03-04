import {
  l
} from "./chunk-OQ3YQLHO.js";
import {
  B,
  Be,
  ee,
  oe,
  q
} from "./chunk-O4H354HZ.js";
import "./chunk-SCYMP6Y5.js";
import "./chunk-TSDU5FXE.js";
import "./chunk-JMVIOIWP.js";
import {
  a,
  r
} from "./chunk-TA6O62P3.js";
import {
  D,
  i
} from "./chunk-CBVVZO37.js";
import "./chunk-Z2A222O3.js";
import "./chunk-FF44HCOD.js";
import "./chunk-AVY6RZDG.js";
import {
  e,
  o
} from "./chunk-ZDVQNOKR.js";
import {
  m
} from "./chunk-Y3AY7I5U.js";
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

// node_modules/@arcgis/core/arcade/functions/featuresetstats.js
async function l2(n, t, e2, a2) {
  if (1 === e2.length) {
    if (o(e2[0])) return l(n, e2[0], q(e2[1], -1));
    if (ee(e2[0])) return l(n, e2[0].toArray(), q(e2[1], -1));
  } else if (2 === e2.length) {
    if (o(e2[0])) return l(n, e2[0], q(e2[1], -1));
    if (ee(e2[0])) return l(n, e2[0].toArray(), q(e2[1], -1));
    if (B(e2[0])) {
      const r2 = await e2[0].load(), i2 = await p(D.create(e2[1], { fieldsIndex: r2.getFieldsIndex(), timeZone: r2.dateFieldsTimeZoneDefaultUTC }), a2, t);
      return g(t, await e2[0].calculateStatistic(n, i2, q(e2[2], 1e3), t.abortSignal));
    }
  } else if (3 === e2.length && B(e2[0])) {
    const r2 = await e2[0].load(), i2 = await p(D.create(e2[1], { fieldsIndex: r2.getFieldsIndex(), timeZone: r2.dateFieldsTimeZoneDefaultUTC }), a2, t);
    return g(t, await e2[0].calculateStatistic(n, i2, q(e2[2], 1e3), t.abortSignal));
  }
  return l(n, e2, -1);
}
function g(t, e2) {
  return e2 instanceof i ? m.fromReaderAsTimeStampOffset(e2.toStorageFormat()) : e2 instanceof Date ? m.dateJSAndZoneToArcadeDate(e2, Be(t)) : e2;
}
async function p(n, t, e2) {
  const a2 = n.getVariables();
  if (a2.length > 0) {
    const r2 = {};
    for (const n2 of a2) r2[n2] = t.evaluateIdentifier(e2, { name: n2 });
    n.parameters = r2;
  }
  return n;
}
function y(n) {
  "async" === n.mode && (n.functions.stdev = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("stdev", t, r2, n));
  }, n.functions.variance = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("variance", t, r2, n));
  }, n.functions.average = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("mean", t, r2, n));
  }, n.functions.mean = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("mean", t, r2, n));
  }, n.functions.sum = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("sum", t, r2, n));
  }, n.functions.min = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("min", t, r2, n));
  }, n.functions.max = function(t, e2) {
    return n.standardFunctionAsync(t, e2, (e3, a2, r2) => l2("max", t, r2, n));
  }, n.functions.count = function(o2, s) {
    return n.standardFunctionAsync(o2, s, async (n2, c, u) => {
      if (oe(u, 1, 1, o2, s), B(u[0])) return u[0].count(n2.abortSignal);
      if (o(u[0]) || e(u[0])) return u[0].length;
      if (ee(u[0])) return u[0].length();
      throw new a(o2, r.InvalidParameter, s);
    });
  });
}
export {
  y as registerFunctions
};
//# sourceMappingURL=featuresetstats-XM4JFGLU.js.map
