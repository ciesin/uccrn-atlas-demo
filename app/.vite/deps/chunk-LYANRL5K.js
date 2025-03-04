import {
  Q,
  Rt,
  m
} from "./chunk-QD55HJQW.js";

// node_modules/@esri/calcite-components/dist/chunks/label.js
var h = "calciteInternalLabelClick";
var E = "calciteInternalLabelConnected";
var f = "calciteInternalLabelDisconnected";
var L = "calcite-label";
var r = /* @__PURE__ */ new WeakMap();
var i = /* @__PURE__ */ new WeakMap();
var c = /* @__PURE__ */ new WeakMap();
var d = /* @__PURE__ */ new WeakMap();
var s = /* @__PURE__ */ new Set();
var y = (e) => {
  const { id: t } = e, l = t && Q(e, { selector: `${L}[for="${t}"]` });
  if (l)
    return l;
  const a = m(e, L);
  return !a || // labelable components within other custom elements are not considered labelable
  M(a, e) ? null : a;
};
function M(e, t) {
  let l;
  const a = "custom-element-ancestor-check", b = (n) => {
    n.stopImmediatePropagation();
    const u = n.composedPath();
    l = u.slice(u.indexOf(t), u.indexOf(e));
  };
  return e.addEventListener(a, b, { once: true }), t.dispatchEvent(new CustomEvent(a, { composed: true, bubbles: true })), e.removeEventListener(a, b), l.filter((n) => n !== t && n !== e).filter((n) => {
    var _a;
    return (_a = n.tagName) == null ? void 0 : _a.includes("-");
  }).length > 0;
}
function v(e) {
  if (!e)
    return;
  const t = y(e.el);
  if (i.has(t) && t === e.labelEl || !t && s.has(e))
    return;
  const l = O.bind(e);
  if (t) {
    e.labelEl = t;
    const a = r.get(t) || [];
    a.push(e), r.set(t, a.sort(g)), i.has(e.labelEl) || (i.set(e.labelEl, C), e.labelEl.addEventListener(h, C)), s.delete(e), document.removeEventListener(E, c.get(e)), d.set(e, l), document.addEventListener(f, l);
  } else s.has(e) || (l(), document.removeEventListener(f, d.get(e)));
}
function T(e) {
  if (!e || (s.delete(e), document.removeEventListener(E, c.get(e)), document.removeEventListener(f, d.get(e)), c.delete(e), d.delete(e), !e.labelEl))
    return;
  const t = r.get(e.labelEl);
  t.length === 1 && (e.labelEl.removeEventListener(h, i.get(e.labelEl)), i.delete(e.labelEl)), r.set(
    e.labelEl,
    t.filter((l) => l !== e).sort(g)
  ), e.labelEl = null;
}
function g(e, t) {
  return Rt(e.el, t.el) ? -1 : 1;
}
function I(e) {
  var _a, _b;
  return e.label || ((_b = (_a = e.labelEl) == null ? void 0 : _a.textContent) == null ? void 0 : _b.trim()) || "";
}
function C(e) {
  const t = e.detail.sourceEvent.target, l = r.get(this), a = l.find((n) => n.el === t);
  if (l.includes(a))
    return;
  const o = l[0];
  o.disabled || o.onLabelClick(e);
}
function D() {
  s.has(this) && v(this);
}
function O() {
  s.add(this);
  const e = c.get(this) || D.bind(this);
  c.set(this, e), document.addEventListener(E, e);
}
async function B(e) {
  var _a;
  if (await e.componentOnReady(), r.has(e))
    return;
  const l = (_a = e.ownerDocument) == null ? void 0 : _a.getElementById(e.for);
  l && requestAnimationFrame(() => {
    for (const a of s)
      if (a.el === l) {
        v(a);
        break;
      }
  });
}

export {
  E,
  f,
  v,
  T,
  I,
  B
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/label.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-LYANRL5K.js.map
