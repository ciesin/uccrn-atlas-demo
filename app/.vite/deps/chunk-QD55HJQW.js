import {
  i
} from "./chunk-IRYILD7C.js";

// node_modules/@esri/calcite-components/dist/chunks/dom.js
var O = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var v = O.join(",");
var C = typeof Element > "u";
var d = C ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var h = !C && Element.prototype.getRootNode ? function(e4) {
  var t;
  return e4 == null || (t = e4.getRootNode) === null || t === void 0 ? void 0 : t.call(e4);
} : function(e4) {
  return e4 == null ? void 0 : e4.ownerDocument;
};
var g = function e(t, n) {
  var r;
  n === void 0 && (n = true);
  var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), u = a === "" || a === "true", i2 = u || n && t && e(t.parentNode);
  return i2;
};
var k = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
};
var M = function(t, n, r) {
  if (g(t))
    return [];
  var a = Array.prototype.slice.apply(t.querySelectorAll(v));
  return n && d.call(t, v) && a.unshift(t), a = a.filter(r), a;
};
var B = function e2(t, n, r) {
  for (var a = [], u = Array.from(t); u.length; ) {
    var i2 = u.shift();
    if (!g(i2, false))
      if (i2.tagName === "SLOT") {
        var s = i2.assignedElements(), o = s.length ? s : i2.children, l = e2(o, true, r);
        r.flatten ? a.push.apply(a, l) : a.push({
          scopeParent: i2,
          candidates: l
        });
      } else {
        var c = d.call(i2, v);
        c && r.filter(i2) && (n || !t.includes(i2)) && a.push(i2);
        var f = i2.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i2), D2 = !g(f, false) && (!r.shadowRootFilter || r.shadowRootFilter(i2));
        if (f && D2) {
          var S = e2(f === true ? i2.children : f.children, true, r);
          r.flatten ? a.push.apply(a, S) : a.push({
            scopeParent: i2,
            candidates: S
          });
        } else
          u.unshift.apply(u, i2.children);
      }
  }
  return a;
};
var N = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
};
var I = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || k(t)) && !N(t) ? 0 : t.tabIndex;
};
var L = function(t, n) {
  var r = I(t);
  return r < 0 && n && !N(t) ? 0 : r;
};
var P = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
};
var A = function(t) {
  return t.tagName === "INPUT";
};
var q = function(t) {
  return A(t) && t.type === "hidden";
};
var $ = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
};
var W = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
};
var G = function(t) {
  if (!t.name)
    return true;
  var n = t.form || h(t), r = function(s) {
    return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
  }, a;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    a = r(window.CSS.escape(t.name));
  else
    try {
      a = r(t.name);
    } catch (i2) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i2.message), false;
    }
  var u = W(a, t.form);
  return !u || u === t;
};
var U = function(t) {
  return A(t) && t.type === "radio";
};
var j = function(t) {
  return U(t) && !G(t);
};
var z = function(t) {
  var n, r = t && h(t), a = (n = r) === null || n === void 0 ? void 0 : n.host, u = false;
  if (r && r !== t) {
    var i2, s, o;
    for (u = !!((i2 = a) !== null && i2 !== void 0 && (s = i2.ownerDocument) !== null && s !== void 0 && s.contains(a) || t != null && (o = t.ownerDocument) !== null && o !== void 0 && o.contains(t)); !u && a; ) {
      var l, c, f;
      r = h(a), a = (l = r) === null || l === void 0 ? void 0 : l.host, u = !!((c = a) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(a));
    }
  }
  return u;
};
var T = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, a = n.height;
  return r === 0 && a === 0;
};
var X = function(t, n) {
  var r = n.displayCheck, a = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return true;
  var u = d.call(t, "details>summary:first-of-type"), i2 = u ? t.parentElement : t;
  if (d.call(i2, "details:not([open]) *"))
    return true;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof a == "function") {
      for (var s = t; t; ) {
        var o = t.parentElement, l = h(t);
        if (o && !o.shadowRoot && a(o) === true)
          return T(t);
        t.assignedSlot ? t = t.assignedSlot : !o && l !== t.ownerDocument ? t = l.host : t = o;
      }
      t = s;
    }
    if (z(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return true;
  } else if (r === "non-zero-area")
    return T(t);
  return false;
};
var V = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var a = n.children.item(r);
          if (a.tagName === "LEGEND")
            return d.call(n, "fieldset[disabled] *") ? true : !a.contains(t);
        }
        return true;
      }
      n = n.parentElement;
    }
  return false;
};
var Y = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  g(n) || q(n) || X(n, t) || // For a details element with a summary, the summary element gets the focus
  $(n) || V(n));
};
var E = function(t, n) {
  return !(j(n) || I(n) < 0 || !Y(t, n));
};
var Z = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
};
var H = function e3(t) {
  var n = [], r = [];
  return t.forEach(function(a, u) {
    var i2 = !!a.scopeParent, s = i2 ? a.scopeParent : a, o = L(s, i2), l = i2 ? e3(a.candidates) : s;
    o === 0 ? i2 ? n.push.apply(n, l) : n.push(s) : r.push({
      documentOrder: u,
      tabIndex: o,
      item: a,
      isScope: i2,
      content: l
    });
  }), r.sort(P).reduce(function(a, u) {
    return u.isScope ? a.push.apply(a, u.content) : a.push(u.content), a;
  }, []).concat(n);
};
var K = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = B([t], n.includeContainer, {
    filter: E.bind(null, n),
    flatten: false,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Z
  }) : r = M(t, n.includeContainer, E.bind(null, n)), H(r);
};
var J = {
  getShadowRoot: true
};
function dt(e4) {
  return e4 ? e4.id = e4.id || `${e4.tagName.toLowerCase()}-${i()}` : "";
}
function bt(e4) {
  const t = "dir", n = `[${t}]`, r = m(e4, n);
  return r ? r.getAttribute(t) : "ltr";
}
function p(e4) {
  return e4.getRootNode();
}
function yt(e4) {
  const t = p(e4);
  return "host" in t ? t : null;
}
function x(e4) {
  return e4.host || null;
}
function Q(e4, {
  selector: t,
  id: n
}) {
  if (!e4)
    return null;
  e4.assignedSlot && (e4 = e4.assignedSlot);
  const r = p(e4);
  return (n ? "getElementById" in r ? (
    /*
      Check to make sure 'getElementById' exists in cases where element is no longer connected to the DOM and getRootNode() returns the element.
      https://github.com/Esri/calcite-design-system/pull/4280
       */
    r.getElementById(n)
  ) : null : t ? r.querySelector(t) : null) || Q(x(r), { selector: t, id: n });
}
function m(e4, t) {
  return e4 ? e4.closest(t) || m(x(p(e4)), t) : null;
}
function _(e4) {
  return typeof (e4 == null ? void 0 : e4.setFocus) == "function";
}
async function tt(e4) {
  if (e4)
    return _(e4) ? e4.setFocus() : e4.focus();
}
function et(e4) {
  if (e4)
    return K(e4, J)[0] ?? e4;
}
function mt(e4) {
  var _a;
  (_a = et(e4)) == null ? void 0 : _a.focus();
}
function nt(e4, t) {
  return e4.filter((n) => n.matches(t));
}
function Tt(e4, t, n) {
  if (typeof t == "string" && t !== "")
    return t;
  if (t === "" || t === true)
    return e4[n];
}
function wt(e4) {
  return (!!e4).toString();
}
function Ct(e4) {
  return ut(e4) || at(e4);
}
function rt(e4) {
  return it(e4).filter((t) => t.nodeType === Node.TEXT_NODE).map((t) => t.textContent).join("").trim();
}
function Nt(e4) {
  var _a;
  for (const t of e4.childNodes)
    if (t.nodeType === Node.TEXT_NODE && ((_a = t.textContent) == null ? void 0 : _a.trim()) !== "" || t.nodeType === Node.ELEMENT_NODE)
      return true;
  return false;
}
function at(e4) {
  return !!rt(e4);
}
function it(e4) {
  return e4.currentTarget.assignedNodes({
    flatten: true
  });
}
function ut(e4) {
  return !!st(e4).length;
}
function st(e4, t) {
  return ot(e4.target, t);
}
function ot(e4, t) {
  const n = e4.assignedElements({
    flatten: true
  });
  return t ? nt(n, t) : n;
}
function It(e4) {
  return !!(e4.isPrimary && e4.button === 0);
}
function At(e4) {
  return e4.detail === 0;
}
var xt = (e4, t, n, r = true) => {
  const a = e4.indexOf(t), u = a === 0, i2 = a === e4.length - 1;
  r && (n = n === "previous" && u ? "last" : n === "next" && i2 ? "first" : n);
  let s;
  return n === "previous" ? s = e4[a - 1] || e4[r ? e4.length - 1 : a] : n === "next" ? s = e4[a + 1] || e4[r ? 0 : a] : n === "last" ? s = e4[e4.length - 1] : s = e4[0], tt(s), s;
};
function Rt(e4, t) {
  if (e4.parentNode !== t.parentNode)
    return false;
  const n = Array.from(e4.parentNode.children);
  return n.indexOf(e4) < n.indexOf(t);
}
async function Dt(e4, t, n, r) {
  return R(e4, t, "animation", n, r);
}
async function Ft(e4, t, n, r) {
  return R(e4, t, "transition", n, r);
}
async function lt(e4, t) {
  await y(), e4 == null ? void 0 : e4(), await y(), t == null ? void 0 : t();
}
function w(e4, t, n) {
  const r = t === "transition" ? "transitionProperty" : "animationName";
  return e4.getAnimations().find((a) => a[r] === n);
}
async function R(e4, t, n, r, a) {
  let u = w(e4, n, t);
  if (u || (await y(), u = w(e4, n, t)), !u)
    return lt(r, a);
  r == null ? void 0 : r();
  try {
    await u.finished;
  } catch {
  } finally {
    a == null ? void 0 : a();
  }
}
function y() {
  return new Promise((e4) => requestAnimationFrame(() => e4()));
}
function Ot(e4) {
  return e4.endsWith("px");
}

export {
  J,
  dt,
  bt,
  p,
  yt,
  Q,
  m,
  tt,
  et,
  mt,
  Tt,
  wt,
  Ct,
  Nt,
  ut,
  st,
  It,
  At,
  xt,
  Rt,
  Dt,
  Ft,
  Ot
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/dom.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
  (*!
  * tabbable 6.2.0
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/
//# sourceMappingURL=chunk-QD55HJQW.js.map
