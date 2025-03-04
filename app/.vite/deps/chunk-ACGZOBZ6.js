import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a as a2,
  e2 as e,
  l2 as l,
  m as m2,
  y
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/core/asyncUtils.js
function a3(r2, t, o) {
  return y(r2.map((r3, e2) => t.apply(o, [r3, e2])));
}
async function p(r2, t, o) {
  return (await y(r2.map((r3, e2) => t.apply(o, [r3, e2])))).map((r3) => r3.value);
}
function c(r2) {
  return { ok: true, value: r2 };
}
function h(r2) {
  return { ok: false, error: r2 };
}
function m3(r2) {
  return null != r2 && true === r2.ok ? r2.value : null;
}
function f(r2) {
  return null != r2 && false === r2.ok ? r2.error : null;
}
async function _(r2) {
  if (null == r2) return { ok: false, error: new Error("no promise provided") };
  try {
    return c(await r2);
  } catch (t) {
    return h(t);
  }
}
async function b(r2) {
  try {
    return c(await r2);
  } catch (t) {
    return a2(t), h(t);
  }
}
function d(r2, t) {
  return new v(r2, t);
}
var v = class extends g {
  get value() {
    return m3(this._result);
  }
  get error() {
    return f(this._result);
  }
  get finished() {
    return null != this._result;
  }
  constructor(r2, t) {
    super({}), this._result = null, this._abortHandle = null, this.abort = () => {
      this._abortController = e(this._abortController);
    }, this.remove = this.abort, this._abortController = new AbortController();
    const { signal: e2 } = this._abortController;
    this.promise = r2(e2), this.promise.then((r3) => {
      this._result = c(r3), this._cleanup();
    }, (r3) => {
      this._result = h(r3), this._cleanup();
    }), this._abortHandle = m2(t, this.abort);
  }
  normalizeCtorArgs() {
    return {};
  }
  destroy() {
    this.abort();
  }
  _cleanup() {
    this._abortHandle = l(this._abortHandle), this._abortController = null;
  }
};
r([m()], v.prototype, "value", null), r([m()], v.prototype, "error", null), r([m()], v.prototype, "finished", null), r([m()], v.prototype, "promise", void 0), r([m()], v.prototype, "_result", void 0), v = r([a("esri.core.asyncUtils.ReactiveTask")], v);

export {
  a3 as a,
  p,
  _,
  b,
  d
};
//# sourceMappingURL=chunk-ACGZOBZ6.js.map
