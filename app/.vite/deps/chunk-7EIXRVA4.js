import {
  A
} from "./chunk-BSRIVWBN.js";
import {
  e
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/widgets/support/symbols.js
var t = Symbol("widget");
var e2 = Symbol("widget-test-data");

// node_modules/@arcgis/core/widgets/support/jsxWidgetSupport.js
var o = [];
var n = {};
var i = /* @__PURE__ */ new WeakMap();
function d(e4, t5) {
  let r2 = t5.children;
  if (r2 == null ? void 0 : r2.length) for (let o5 = 0; o5 < r2.length; ++o5) r2[o5] = d(e4, r2[o5]);
  else r2 = o;
  const i5 = t5.vnodeSelector;
  if (f(i5)) {
    const o5 = t5.properties || n, d5 = o5.key || i5, f3 = { key: d5, afterCreate: c, afterUpdate: s, afterRemoved: a, parentWidget: e4, widgetConstructor: i5, widgetProperties: { ...o5, key: d5, children: r2 } };
    return { vnodeSelector: i5.vnodeSelector, properties: f3, children: void 0, text: void 0, domNode: null };
  }
  return t5;
}
function c(r2, o5, n6, { parentWidget: d5, widgetConstructor: c3, widgetProperties: s3 }) {
  var _a;
  const f3 = new c3(s3);
  f3.container = r2, i.set(r2, f3), (_a = f3.afterCreate) == null ? void 0 : _a.call(f3, f3, r2), d5.addHandles(e(() => a(r2))), queueMicrotask(() => {
    f3[e2].projector.renderNow();
  });
}
function s(e4, t5, r2, { widgetProperties: o5 }) {
  var _a;
  const n6 = i.get(e4);
  n6 && (n6.set(o5), (_a = n6.afterUpdate) == null ? void 0 : _a.call(n6, n6, e4));
}
function a(e4) {
  var _a;
  const t5 = i.get(e4);
  t5 && ((_a = t5.afterRemoved) == null ? void 0 : _a.call(t5, t5, e4), t5.destroy(), i.delete(e4));
}
function f(e4) {
  return "function" == typeof e4 && e4[t];
}

// node_modules/@arcgis/core/widgets/support/jsxFactory.js
var e3 = function(r2) {
  return { vnodeSelector: "", properties: void 0, children: void 0, text: r2.toString(), domNode: null };
};
var o2 = function(r2, t5) {
  for (var n6 = 0, i5 = r2.length; n6 < i5; n6++) {
    var d5 = r2[n6];
    Array.isArray(d5) ? o2(d5, t5) : null != d5 && false !== d5 && (d5.hasOwnProperty("vnodeSelector") || (d5 = e3(d5)), t5.push(d5));
  }
};
var t2 = function(r2, e4) {
  for (var t5 = [], n6 = 2; n6 < arguments.length; n6++) t5[n6 - 2] = arguments[n6];
  if (1 === t5.length && "string" == typeof t5[0]) return { vnodeSelector: r2, properties: e4 || void 0, children: void 0, text: t5[0], domNode: null };
  var i5 = [];
  return o2(t5, i5), { vnodeSelector: r2, properties: e4 || void 0, children: i5, text: void 0, domNode: null };
};
function n2(e4, o5, ...n6) {
  return "function" != typeof e4 || f(e4) ? t2(e4, o5 ?? null, ...n6) : e4(o5, ...n6);
}
function i2(...r2) {
  return r2;
}

// node_modules/@arcgis/core/libs/maquette/projection.js
var t3 = "http://www.w3.org/";
var r = `${t3}2000/svg`;
var o3 = `${t3}1999/xlink`;
var i3 = [];
var n3 = (e4, t5) => {
  let r2 = {};
  return Object.keys(e4).forEach((t6) => {
    r2[t6] = e4[t6];
  }), t5 && Object.keys(t5).forEach((e5) => {
    r2[e5] = t5[e5];
  }), r2;
};
var s2 = (e4, t5) => e4.vnodeSelector === t5.vnodeSelector && (e4.properties && t5.properties ? e4.properties.key === t5.properties.key && e4.properties.bind === t5.properties.bind : !e4.properties && !t5.properties);
var l = (e4) => {
  if ("string" != typeof e4) throw new Error("Style values must be strings");
};
var p = (e4, t5, r2) => {
  if ("" !== t5.vnodeSelector) {
    for (let o5 = r2; o5 < e4.length; o5++) if (s2(e4[o5], t5)) return o5;
  }
  return -1;
};
var d2 = (e4, t5, r2, o5) => {
  let i5 = e4[t5];
  if ("" === i5.vnodeSelector) return;
  let n6 = i5.properties;
  if (!(n6 ? void 0 === n6.key ? n6.bind : n6.key : void 0)) {
    for (let l2 = 0; l2 < e4.length; l2++) if (l2 !== t5) {
      let t6 = e4[l2];
      if (s2(t6, i5)) throw new Error(`${r2.vnodeSelector} had a ${i5.vnodeSelector} child ${"added" === o5 ? o5 : "removed"}, but there is now more than one. You must add unique key properties to make them distinguishable.`);
    }
  }
};
var a2 = (e4) => {
  if (e4.properties) {
    let t5 = e4.properties.enterAnimation;
    t5 && t5(e4.domNode, e4.properties);
  }
};
var f2 = [];
var c2 = false;
var u = (e4) => {
  (e4.children || []).forEach(u), e4.properties && e4.properties.afterRemoved && e4.properties.afterRemoved.apply(e4.properties.bind || e4.properties, [e4.domNode]);
};
var m = () => {
  c2 = false, f2.forEach(u), f2.length = 0;
};
var h = (e4) => {
  f2.push(e4), c2 || (c2 = true, "undefined" != typeof window && "requestIdleCallback" in window ? window.requestIdleCallback(m, { timeout: 16 }) : setTimeout(m, 16));
};
var v = (e4) => {
  let t5 = e4.domNode;
  if (e4.properties) {
    let r2 = e4.properties.exitAnimation;
    if (r2) {
      t5.style.pointerEvents = "none";
      let o5 = () => {
        t5.parentNode && (t5.parentNode.removeChild(t5), h(e4));
      };
      return void r2(t5, o5, e4.properties);
    }
  }
  t5.parentNode && (t5.parentNode.removeChild(t5), h(e4));
};
var y = (t5, i5, n6) => {
  if (!i5) return;
  let s3 = n6.eventHandlerInterceptor, p3 = Object.keys(i5), d5 = p3.length;
  for (let a3 = 0; a3 < d5; a3++) {
    let d6 = p3[a3], f3 = i5[d6];
    if ("className" === d6) throw new Error('Property "className" is not supported, use "class".');
    if ("class" === d6) k(t5, f3, true);
    else if ("classes" === d6) {
      let e4 = Object.keys(f3), r2 = e4.length;
      for (let o5 = 0; o5 < r2; o5++) {
        let r3 = e4[o5];
        f3[r3] && t5.classList.add(r3);
      }
    } else if ("styles" === d6) {
      let e4 = Object.keys(f3), r2 = e4.length;
      for (let o5 = 0; o5 < r2; o5++) {
        let r3 = e4[o5], i6 = f3[r3];
        i6 && (l(i6), n6.styleApplyer(t5, r3, i6));
      }
    } else if ("key" !== d6 && null != f3) {
      let l2 = typeof f3;
      "function" === l2 ? (0 === d6.lastIndexOf("on", 0) && (s3 && (f3 = s3(d6, f3, t5, i5)), "oninput" === d6 && function() {
        let e4 = f3;
        f3 = function(t6) {
          e4.apply(this, [t6]), t6.target["oninput-value"] = t6.target.value;
        };
      }()), t5[d6] = f3) : n6.namespace === r ? "href" === d6 ? t5.setAttributeNS(o3, d6, f3) : t5.setAttribute(d6, f3) : "string" === l2 && "value" !== d6 ? "innerHTML" === d6 ? t5[d6] = A.sanitize(f3) : g(t5) && d6 in t5 ? t5[d6] = f3 : t5.setAttribute(d6, f3) : t5[d6] = f3;
    }
  }
};
function g(e4) {
  if (!(e4 instanceof Element && e4.tagName.includes("-"))) return false;
  const t5 = window.customElements.get(e4.tagName.toLowerCase());
  return !!t5 && e4 instanceof t5;
}
var N;
var b = (e4, t5, r2) => {
  if (t5) for (let o5 of t5) x(o5, e4, void 0, r2);
};
var w = (e4, t5, r2) => {
  b(e4, t5.children, r2), t5.text && (e4.textContent = t5.text), y(e4, t5.properties, r2), t5.properties && t5.properties.afterCreate && t5.properties.afterCreate.apply(t5.properties.bind || t5.properties, [e4, r2, t5.vnodeSelector, t5.properties, t5.children]);
};
var x = (e4, t5, o5, i5) => {
  let s3, l2 = 0, p3 = e4.vnodeSelector, d5 = t5.ownerDocument;
  if ("" === p3) s3 = e4.domNode = d5.createTextNode(e4.text), void 0 !== o5 ? t5.insertBefore(s3, o5) : t5.appendChild(s3);
  else {
    for (let a3 = 0; a3 <= p3.length; ++a3) {
      let f3 = p3.charAt(a3);
      if (a3 === p3.length || "." === f3 || "#" === f3) {
        let f4 = p3.charAt(l2 - 1), c3 = p3.slice(l2, a3);
        "." === f4 ? s3.classList.add(c3) : "#" === f4 ? s3.id = c3 : ("svg" === c3 && (i5 = n3(i5, { namespace: r })), void 0 !== i5.namespace ? s3 = e4.domNode = d5.createElementNS(i5.namespace, c3) : (s3 = e4.domNode = e4.domNode || d5.createElement(c3), "input" === c3 && e4.properties && void 0 !== e4.properties.type && s3.setAttribute("type", e4.properties.type)), void 0 !== o5 ? t5.insertBefore(s3, o5) : s3.parentNode !== t5 && t5.appendChild(s3)), l2 = a3 + 1;
      }
    }
    w(s3, e4, i5);
  }
};
var k = (e4, t5, r2) => {
  t5 && t5.split(" ").forEach((t6) => {
    t6 && e4.classList.toggle(t6, r2);
  });
};
var A2 = (t5, i5, n6, s3) => {
  if (!n6) return;
  let p3 = false, d5 = Object.keys(n6), a3 = d5.length;
  for (let f3 = 0; f3 < a3; f3++) {
    let a4 = d5[f3], c3 = n6[a4], u2 = i5[a4];
    if ("class" === a4) u2 !== c3 && (k(t5, u2, false), k(t5, c3, true));
    else if ("classes" === a4) {
      let e4 = t5.classList, r2 = Object.keys(c3), o5 = r2.length;
      for (let t6 = 0; t6 < o5; t6++) {
        let o6 = r2[t6], i6 = !!c3[o6];
        i6 !== !!u2[o6] && (p3 = true, i6 ? e4.add(o6) : e4.remove(o6));
      }
    } else if ("styles" === a4) {
      let e4 = Object.keys(c3), r2 = e4.length;
      for (let o5 = 0; o5 < r2; o5++) {
        let r3 = e4[o5], i6 = c3[r3];
        i6 !== u2[r3] && (p3 = true, i6 ? (l(i6), s3.styleApplyer(t5, r3, i6)) : s3.styleApplyer(t5, r3, ""));
      }
    } else if (c3 || "string" != typeof u2 || (c3 = ""), "value" !== a4 || g(t5)) {
      if (c3 !== u2) {
        let i6 = typeof c3;
        "function" === i6 && s3.eventHandlerInterceptor || (s3.namespace === r ? "href" === a4 ? t5.setAttributeNS(o3, a4, c3) : t5.setAttribute(a4, c3) : "string" === i6 ? "innerHTML" === a4 ? t5[a4] = A.sanitize(c3) : "role" === a4 && "" === c3 ? t5.removeAttribute(a4) : g(t5) && a4 in t5 ? t5[a4] = c3 : t5.setAttribute(a4, c3) : t5[a4] !== c3 && (t5[a4] = c3), p3 = true);
      }
    } else {
      let e4 = t5[a4];
      e4 !== c3 && (t5["oninput-value"] ? e4 === t5["oninput-value"] : c3 !== u2) && (t5[a4] = c3, t5["oninput-value"] = void 0), c3 !== u2 && (p3 = true);
    }
  }
  return p3;
};
var S = (e4, t5, r2, o5, n6) => {
  if (r2 === o5) return false;
  o5 = o5 || i3;
  let l2, f3 = (r2 = r2 || i3).length, c3 = o5.length, u2 = 0, m2 = 0, h2 = false;
  for (; m2 < c3; ) {
    let i5 = u2 < f3 ? r2[u2] : void 0, c4 = o5[m2];
    if (void 0 !== i5 && s2(i5, c4)) h2 = N(i5, c4, n6) || h2, u2++;
    else {
      let i6 = p(r2, c4, u2 + 1);
      if (i6 >= 0) {
        for (l2 = u2; l2 < i6; l2++) v(r2[l2]), d2(r2, l2, e4, "removed");
        h2 = N(r2[i6], c4, n6) || h2, u2 = i6 + 1;
      } else x(c4, t5, u2 < f3 ? r2[u2].domNode : void 0, n6), a2(c4), d2(o5, m2, e4, "added");
    }
    m2++;
  }
  if (f3 > u2) for (l2 = u2; l2 < f3; l2++) v(r2[l2]), d2(r2, l2, e4, "removed");
  return h2;
};
N = (e4, t5, o5) => {
  let i5 = e4.domNode, s3 = false;
  if (e4 === t5) return false;
  let l2 = false;
  if ("" === t5.vnodeSelector) {
    if (t5.text !== e4.text) {
      let e5 = i5.ownerDocument.createTextNode(t5.text);
      return i5.parentNode.replaceChild(e5, i5), t5.domNode = e5, s3 = true, s3;
    }
    t5.domNode = i5;
  } else 0 === t5.vnodeSelector.lastIndexOf("svg", 0) && (o5 = n3(o5, { namespace: r })), e4.text !== t5.text && (l2 = true, void 0 === t5.text ? i5.removeChild(i5.firstChild) : i5.textContent = t5.text), t5.domNode = i5, l2 = S(t5, i5, e4.children, t5.children, o5) || l2, l2 = A2(i5, e4.properties, t5.properties, o5) || l2, t5.properties && t5.properties.afterUpdate && t5.properties.afterUpdate.apply(t5.properties.bind || t5.properties, [i5, o5, t5.vnodeSelector, t5.properties, t5.children]);
  return l2 && t5.properties && t5.properties.updateAnimation && t5.properties.updateAnimation(i5, t5.properties, e4.properties), s3;
};
var C = (e4, t5) => ({ getLastRender: () => e4, update: (r2) => {
  if (e4.vnodeSelector !== r2.vnodeSelector) throw new Error("The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)");
  let o5 = e4;
  e4 = r2, N(o5, r2, t5);
}, domNode: e4.domNode });

// node_modules/@arcgis/core/libs/maquette/dom.js
var p2 = { namespace: void 0, performanceLogger: () => {
}, eventHandlerInterceptor: void 0, styleApplyer: (e4, r2, o5) => {
  "-" === r2.charAt(0) ? e4.style.setProperty(r2, o5) : e4.style[r2] = o5;
} };
var d3 = (r2) => n3(p2, r2);
var n4 = { create: (e4, t5) => (t5 = d3(t5), x(e4, document.createElement("div"), void 0, t5), C(e4, t5)), append: (e4, t5, p3) => (p3 = d3(p3), x(t5, e4, void 0, p3), C(t5, p3)), insertBefore: (e4, t5, p3) => (p3 = d3(p3), x(t5, e4.parentNode, e4, p3), C(t5, p3)), merge: (e4, r2, p3) => (p3 = d3(p3), r2.domNode = e4, w(e4, r2, p3), C(r2, p3)), replace: (e4, t5, p3) => (p3 = d3(p3), x(t5, e4.parentNode, e4, p3), e4.parentNode.removeChild(e4), C(t5, p3)) };

// node_modules/@arcgis/core/libs/maquette/projector.js
var t4;
var n5 = (e4, r2) => {
  let t5 = [];
  for (; e4 && e4 !== r2; ) t5.push(e4), e4 = e4.parentNode;
  return t5;
};
t4 = Array.prototype.find ? (e4, r2) => e4.find(r2) : (e4, r2) => e4.filter(r2)[0];
var o4 = (e4, r2) => {
  let n6 = e4;
  return r2.forEach((e5) => {
    n6 = n6 && n6.children ? t4(n6.children, (r3) => r3.domNode === e5) : void 0;
  }), n6;
};
var d4 = (e4, r2, t5) => {
  let d5 = function(d6) {
    t5("domEvent", d6);
    let i5 = r2(), p3 = n5(d6.currentTarget, i5.domNode);
    p3.reverse();
    let l2, a3 = o4(i5.getLastRender(), p3);
    return e4.scheduleRender(), a3 && (l2 = a3.properties[`on${d6.type}`].apply(a3.properties.bind || this, arguments)), t5("domEventProcessed", d6), l2;
  };
  return (e5, r3, t6, n6) => d5;
};
var i4 = (t5) => {
  let n6, o5, i5 = d3(t5), p3 = i5.performanceLogger, l2 = true, a3 = false, s3 = [], c3 = [], u2 = (e4, r2, t6) => {
    let o6, l3 = () => o6;
    i5.eventHandlerInterceptor = d4(n6, l3, p3), o6 = e4(r2, t6(), i5), s3.push(o6), c3.push(t6);
  }, f3 = () => {
    if (o5 = void 0, l2) {
      l2 = false, p3("renderStart", void 0);
      for (let e4 = 0; e4 < s3.length; e4++) {
        let r2 = c3[e4]();
        p3("rendered", void 0), s3[e4].update(r2), p3("patched", void 0);
      }
      p3("renderDone", void 0), l2 = true;
    }
  };
  return n6 = { renderNow: f3, scheduleRender: () => {
    o5 || a3 || (o5 = requestAnimationFrame(f3));
  }, stop: () => {
    o5 && (cancelAnimationFrame(o5), o5 = void 0), a3 = true;
  }, resume: () => {
    a3 = false, l2 = true, n6.scheduleRender();
  }, append: (e4, t6) => {
    u2(n4.append, e4, t6);
  }, insertBefore: (e4, t6) => {
    u2(n4.insertBefore, e4, t6);
  }, merge: (e4, t6) => {
    u2(n4.merge, e4, t6);
  }, replace: (e4, t6) => {
    u2(n4.replace, e4, t6);
  }, detach: (e4) => {
    for (let r2 = 0; r2 < c3.length; r2++) if (c3[r2] === e4) return c3.splice(r2, 1), s3.splice(r2, 1)[0];
    throw new Error("renderFunction was not found");
  } }, n6;
};

export {
  t,
  e2 as e,
  d,
  f,
  n2 as n,
  i2 as i,
  n4 as n2,
  i4 as i2
};
//# sourceMappingURL=chunk-7EIXRVA4.js.map
