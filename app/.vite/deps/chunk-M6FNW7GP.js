import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/core/handleUtils.js
var n = { remove: () => {
} };
function e(e4) {
  return e4 ? { remove() {
    e4 && (e4(), e4 = void 0);
  } } : n;
}
function o(n5) {
  n5.forEach((n6) => n6 == null ? void 0 : n6.remove());
}
function r(n5) {
  o(n5), n5.length = 0;
}
function t(n5) {
  return e(() => o(n5));
}
function u(n5) {
  return e(() => {
    var _a;
    return (_a = n5()) == null ? void 0 : _a.remove();
  });
}
function l(n5) {
  return e(() => n5 == null ? void 0 : n5.abort());
}
function i(n5) {
  return e(null != n5 ? () => n5.destroy() : void 0);
}

// node_modules/@arcgis/core/core/maybe.js
function n2(n5, u4) {
  if (null == n5) throw new Error(u4 ?? "value is None");
}
function u2(n5) {
  return n5 == null ? void 0 : n5.destroy(), null;
}
function r2(n5) {
  return n5 == null ? void 0 : n5.dispose(), null;
}
function l2(n5) {
  return n5 == null ? void 0 : n5.remove(), null;
}
function e2(n5) {
  return n5 == null ? void 0 : n5.abort(), null;
}
function t2(n5) {
  return n5 == null ? void 0 : n5.release(), null;
}
function o2(n5, u4, r4) {
  return null != n5 && null != u4 ? null != r4 ? r4(n5, u4) : n5.equals(u4) : n5 === u4;
}
function f(n5, u4) {
  let r4;
  return n5.some((n6, l4) => (r4 = u4(n6, l4), null != r4)), r4 ?? void 0;
}

// node_modules/@arcgis/core/core/clock.js
function e3(e4) {
  return { setTimeout: (o5, r4) => {
    const i3 = e4.setTimeout(o5, r4);
    return e(() => e4.clearTimeout(i3));
  } };
}
var o3 = e3(globalThis);

// node_modules/@arcgis/core/core/events.js
function n3(e4) {
  return t3(e4) || r3(e4);
}
function t3(e4) {
  return null != e4 && "object" == typeof e4 && "on" in e4 && "function" == typeof e4.on;
}
function r3(e4) {
  return null != e4 && "object" == typeof e4 && "addEventListener" in e4 && "function" == typeof e4.addEventListener;
}
function o4(e4, t4, o5) {
  if (!n3(e4)) throw new TypeError("target is not a Evented or EventTarget object");
  return r3(e4) ? i2(e4, t4, o5) : e4.on(t4, o5);
}
function i2(n5, t4, r4, o5) {
  if (Array.isArray(t4)) {
    const i3 = t4.slice();
    for (const e4 of i3) n5.addEventListener(e4, r4, o5);
    return e(() => {
      for (const e4 of i3) n5.removeEventListener(e4, r4, o5);
    });
  }
  return n5.addEventListener(t4, r4, o5), e(() => n5.removeEventListener(t4, r4, o5));
}
function c(e4, t4, r4) {
  if (!n3(e4)) throw new TypeError("target is not a Evented or EventTarget object");
  if ("once" in e4) return e4.once(t4, r4);
  const i3 = o4(e4, t4, (n5) => {
    i3.remove(), r4.call(e4, n5);
  });
  return i3;
}

// node_modules/@arcgis/core/core/promiseUtils.js
function u3(t4 = "Aborted") {
  return new s("AbortError", t4);
}
function s2(t4, n5 = "Aborted") {
  if (c2(t4)) throw u3(n5);
}
function l3(t4) {
  return t4 instanceof AbortSignal ? t4 : (t4 == null ? void 0 : t4.signal) ?? void 0;
}
function c2(t4) {
  const n5 = l3(t4);
  return null != n5 && n5.aborted;
}
function a(t4) {
  if (b(t4)) throw t4;
}
function f2(t4) {
  if (!b(t4)) throw t4;
}
function m(t4, n5) {
  const e4 = l3(t4);
  if (null != e4) {
    if (!e4.aborted) return c(e4, "abort", () => n5());
    n5();
  }
}
function w(t4, n5) {
  const e4 = l3(t4);
  if (null != e4) return s2(e4), c(e4, "abort", () => n5(u3()));
}
function h(t4, n5) {
  return null == l3(n5) ? t4 : new Promise((r4, e4) => {
    let i3 = m(n5, () => e4(u3()));
    const s3 = () => {
      i3 = l2(i3);
    };
    t4.then(s3, s3), t4.then(r4, e4);
  });
}
function b(t4) {
  return "AbortError" === (t4 == null ? void 0 : t4.name);
}
async function d(t4) {
  try {
    return await t4;
  } catch (n5) {
    if (!b(n5)) throw n5;
    return;
  }
}
async function y(t4) {
  if (!t4) return;
  if ("function" != typeof t4.forEach) {
    const n6 = Object.keys(t4), r4 = n6.map((n7) => t4[n7]), e4 = await y(r4), o5 = {};
    return n6.map((t5, n7) => o5[t5] = e4[n7]), o5;
  }
  const n5 = t4;
  return Promise.allSettled(n5).then((t5) => Array.from(n5, (n6, r4) => {
    const e4 = t5[r4];
    return "fulfilled" === e4.status ? { promise: n6, value: e4.value } : { promise: n6, error: e4.reason };
  }));
}
async function g(t4) {
  return (await Promise.allSettled(t4)).filter((t5) => "fulfilled" === t5.status).map((t5) => t5.value);
}
async function P(t4) {
  return (await Promise.allSettled(t4)).filter((t5) => "rejected" === t5.status).map((t5) => t5.reason);
}
function A(t4, n5 = void 0, r4) {
  const e4 = new AbortController();
  return m(r4, () => e4.abort()), new Promise((r5, o5) => {
    let i3 = setTimeout(() => {
      i3 = 0, r5(n5);
    }, t4);
    m(e4, () => {
      i3 && (clearTimeout(i3), o5(u3()));
    });
  });
}
function T(t4, r4, e4, o5) {
  const i3 = e4 && "abort" in e4 ? e4 : null;
  null != o5 || i3 || (o5 = e4);
  let u4 = setTimeout(() => {
    u4 = 0, i3 == null ? void 0 : i3.abort();
  }, r4);
  const s3 = () => o5 || new s("promiseUtils:timeout", "The wrapped promise did not resolve within " + r4 + " ms");
  return t4.then((t5) => {
    if (0 === u4) throw s3();
    return clearTimeout(u4), t5;
  }, (t5) => {
    throw clearTimeout(u4), 0 === u4 ? s3() : t5;
  });
}
function E(t4, n5) {
  const r4 = new AbortController(), e4 = setTimeout(() => r4.abort(), n5);
  return m(t4, () => {
    r4.abort(), clearTimeout(e4);
  }), { ...t4, signal: r4.signal };
}
function S(t4) {
  return t4 && "function" == typeof t4.then;
}
function C(t4) {
  return S(t4) ? t4 : Promise.resolve(t4);
}
function k(t4, n5 = -1) {
  let r4, e4, o5, i3, s3 = null;
  const l4 = (...c3) => {
    if (r4) {
      e4 = c3, i3 && i3.reject(u3()), i3 = L();
      const t5 = i3.promise;
      if (s3) {
        const t6 = s3;
        s3 = null, t6.abort();
      }
      return t5;
    }
    if (o5 = i3 || L(), i3 = null, n5 > 0) {
      const e5 = new AbortController();
      r4 = C(t4(...c3, e5.signal));
      const o6 = r4;
      A(n5).then(() => {
        r4 === o6 && (i3 ? e5.abort() : s3 = e5);
      });
    } else r4 = 1, r4 = C(t4(...c3));
    const a2 = () => {
      const t5 = e4;
      e4 = o5 = r4 = s3 = null, null != t5 && l4(...t5);
    }, f3 = r4, m2 = o5;
    return f3.then(a2, a2), f3.then(m2.resolve, m2.reject), m2.promise;
  };
  return l4;
}
function L() {
  let n5, r4;
  const e4 = new Promise((t4, e5) => {
    n5 = t4, r4 = e5;
  }), o5 = (t4) => {
    n5(t4);
  };
  return o5.resolve = (t4) => n5(t4), o5.reject = (t4) => r4(t4), o5.timeout = (n6, r5) => o3.setTimeout(() => o5.reject(r5), n6), o5.promise = e4, o5;
}
async function D(t4) {
  await Promise.resolve(), s2(t4);
}

export {
  e,
  o,
  r,
  t,
  u,
  l,
  i,
  n2 as n,
  u2,
  r2,
  l2,
  e2,
  t2,
  o2,
  f,
  o3,
  n3 as n2,
  o4,
  c,
  u3,
  s2 as s,
  l3,
  c2,
  a,
  f2,
  m,
  w,
  h,
  b,
  d,
  y,
  g,
  P,
  A,
  T,
  E,
  S,
  C,
  k,
  L,
  D
};
//# sourceMappingURL=chunk-M6FNW7GP.js.map
