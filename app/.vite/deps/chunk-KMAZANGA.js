import {
  Q,
  m
} from "./chunk-QD55HJQW.js";
import {
  html
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/chunks/form.js
var S = [
  "calcite-input",
  "calcite-input-number",
  "calcite-input-text",
  "calcite-text-area"
];
function V(e) {
  return `${e.split("-").map((n, i) => i === 0 ? n : `${n[0].toUpperCase()}${n.slice(1)}`).join("")}${S.includes(e) ? "Input" : "Change"}`;
}
var v = "hidden-form-input";
function E(e) {
  return "checked" in e;
}
var m2 = /* @__PURE__ */ new WeakMap();
var g = /* @__PURE__ */ new WeakSet();
function H(e, t) {
  if (m(t.parentElement, "[form]"))
    return true;
  const n = "calciteInternalFormComponentRegister";
  let i = false;
  return e.addEventListener(n, (o) => {
    i = o.composedPath().some((l) => g.has(l)), o.stopPropagation();
  }, { once: true }), t.dispatchEvent(new CustomEvent(n, {
    bubbles: true,
    composed: true
  })), i;
}
function L(e, { status: t, message: a, icon: n }) {
  "status" in e && (e.status = t), "validationIcon" in e && typeof e.validationIcon != "string" && (e.validationIcon = n), "validationMessage" in e && !e.validationMessage && (e.validationMessage = a);
}
function F(e) {
  return e.nodeName === "CALCITE-RADIO-BUTTON" ? m(e, "calcite-radio-button-group") : e;
}
var R = new CustomEvent("calciteInvalid", { bubbles: true, composed: true });
function I(e) {
  var _a;
  const t = e == null ? void 0 : e.target, a = t == null ? void 0 : t.validationMessage, n = F(t == null ? void 0 : t.parentElement);
  if (!n)
    return;
  const i = (_a = n == null ? void 0 : n.nodeName) == null ? void 0 : _a.toLowerCase(), o = i == null ? void 0 : i.split("-");
  if (o.length < 2 || o[0] !== "calcite")
    return;
  e == null ? void 0 : e.preventDefault(), "validity" in n && (n.validity = t == null ? void 0 : t.validity), n.dispatchEvent(R), L(n, {
    message: a,
    icon: true,
    status: "invalid"
  });
  const l = V(i);
  n.addEventListener(l, () => {
    "status" in n && (n.status = "idle"), "validationIcon" in n && (n.validationIcon === "" || n.validationIcon === true) && (n.validationIcon = false), "validationMessage" in n && n.validationMessage === a && (n.validationMessage = ""), "validity" in n && (n.validity = t == null ? void 0 : t.validity);
  }, { once: true });
}
function $(e) {
  const { formEl: t } = e;
  return t ? (t.addEventListener("invalid", I, true), t.requestSubmit(), t.removeEventListener("invalid", I, true), requestAnimationFrame(() => {
    const a = t.querySelectorAll("[status=invalid]");
    for (const n of a)
      if (n == null ? void 0 : n.validationMessage) {
        n == null ? void 0 : n.setFocus();
        break;
      }
  }), true) : false;
}
function x(e) {
  var _a;
  (_a = e.formEl) == null ? void 0 : _a.reset();
}
function D(e) {
  const { el: t, value: a } = e, n = A(e);
  if (!n || H(n, t))
    return;
  e.formEl = n, e.defaultValue = a, E(e) && (e.defaultChecked = e.checked);
  const i = w.bind(e);
  n.addEventListener("reset", i), m2.set(e.el, i), g.add(t);
}
function A(e) {
  const { el: t, form: a } = e;
  return a ? Q(t, { id: a }) : m(t, "form");
}
function w() {
  var _a;
  if ("status" in this && (this.status = "idle"), "validationIcon" in this && (this.validationIcon = false), "validationMessage" in this && (this.validationMessage = ""), E(this)) {
    this.checked = this.defaultChecked;
    return;
  }
  this.value = this.defaultValue, (_a = this.onFormReset) == null ? void 0 : _a.call(this);
}
function W(e) {
  const { el: t, formEl: a } = e;
  if (!a)
    return;
  const n = m2.get(t);
  a.removeEventListener("reset", n), m2.delete(t), e.formEl = null, g.delete(t);
}
var q = "calciteInternalHiddenInputInput";
var b = (e) => {
  e.target.dispatchEvent(new CustomEvent(q, { bubbles: true }));
};
var C = (e) => e.removeEventListener("input", b);
function P(e) {
  const { el: t, formEl: a, name: n, value: i } = e, { ownerDocument: o } = t, l = t.querySelectorAll(`input[slot="${v}"]`);
  if (!a || !n) {
    l.forEach((s) => {
      C(s), s.remove();
    });
    return;
  }
  const f = Array.isArray(i) ? i : [i], d = [], u = /* @__PURE__ */ new Set();
  l.forEach((s) => {
    const r = f.find((y) => (
      /* intentional non-strict equality check */
      y == s.value
    ));
    r != null ? (u.add(r), p(e, s, r)) : d.push(s);
  });
  let c;
  f.forEach((s) => {
    if (u.has(s))
      return;
    let r = d.pop();
    r || (r = o.createElement("input"), r.ariaHidden = "true", r.slot = v), c || (c = o.createDocumentFragment()), c.append(r), r.addEventListener("input", b), p(e, r, s);
  }), c && t.append(c), d.forEach((s) => {
    C(s), s.remove();
  });
}
function p(e, t, a) {
  var _a;
  const { defaultValue: n, disabled: i, form: o, name: l, required: f } = e;
  t.defaultValue = n, t.disabled = i, t.name = l, t.required = f, t.tabIndex = -1, o ? t.setAttribute("form", o) : t.removeAttribute("form"), E(e) ? (t.checked = e.checked, t.defaultChecked = e.defaultChecked, t.value = e.checked ? a || "on" : "") : t.value = a || "", (_a = e.syncHiddenFormInput) == null ? void 0 : _a.call(e, t);
  const d = F(e.el);
  if (d && "validity" in d)
    for (const u in { ...t == null ? void 0 : t.validity })
      d.validity[u] = t.validity[u];
}
var B = ({ component: e }) => (P(e), html`<slot name=${v}></slot>`);

export {
  $,
  x,
  D,
  A,
  W,
  q,
  B
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/form.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-KMAZANGA.js.map
