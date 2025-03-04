import {
  e
} from "./chunk-GMRKZB6Y.js";
import {
  a,
  c as c2
} from "./chunk-ESCAO5DD.js";
import {
  h,
  i as i2,
  m as m2,
  p as p2,
  y
} from "./chunk-CQ2PC3VP.js";
import {
  m
} from "./chunk-XUYUNZTH.js";
import {
  S,
  c,
  i2 as i
} from "./chunk-IPFYNOOY.js";
import {
  C
} from "./chunk-PAGKMWJH.js";
import {
  p
} from "./chunk-UFBX3XSC.js";
import {
  I,
  Rt
} from "./chunk-F7TCEOHX.js";
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/symbols/support/webStyleSymbolUtils.js
function h2(t, e2, o) {
  const l = t.name;
  return null == l ? Promise.reject(new s("symbolstyleutils:style-symbol-reference-name-missing", "Missing name in style symbol reference")) : "Esri2DPointSymbolsStyle" === t.styleName ? U(l, e2, o) : i2(t, e2, o).then((t2) => j(t2, l, e2, y, o));
}
function g(t, e2) {
  return e2.items.find((e3) => e3.name === t);
}
async function j(i3, c3, f, h3, j2) {
  var _a, _b;
  const U2 = null != (f == null ? void 0 : f.portal) ? f.portal : C.getDefault(), w = { portal: U2, url: I(i3.baseUrl), origin: "portal-item" }, N = g(c3, i3.data);
  if (!N) throw new s("symbolstyleutils:symbol-name-not-found", `The symbol name '${c3}' could not be found`, { symbolName: c3 });
  const S2 = (j2 == null ? void 0 : j2.acceptedFormats) ?? e, D = h3(N, S2);
  if (!D) throw new s("symbolstyleutils:symbol-reference-no-accepted-format", `The symbol name '${c3}' does not have an accepted format (one of ${S2})`, { symbolName: c3 });
  const { url: O, format: $ } = D;
  let v = p(O, w), E = ((_a = N.thumbnail) == null ? void 0 : _a.href) ?? null;
  const P = (_b = N.thumbnail) == null ? void 0 : _b.imageData;
  c2() && (v = a(v) ?? "", E = a(E));
  const T = { portal: U2, url: I(Rt(v)), origin: "portal-item" };
  return p2(v, j2).then((t) => {
    const e2 = "cim" === $ ? m2(t.data) : t.data, r = m(e2, T);
    if (r && S(r)) {
      if (E) {
        const t2 = p(E, w);
        r.thumbnail = new c({ url: t2 });
      } else P && (r.thumbnail = new c({ url: `data:image/png;base64,${P}` }));
      i3.styleUrl ? r.styleOrigin = new i({ portal: f.portal, styleUrl: i3.styleUrl, name: c3 }) : i3.styleName && (r.styleOrigin = new i({ portal: f.portal, styleName: i3.styleName, name: c3 }));
    }
    return r;
  });
}
function U(t, e2, r) {
  const s2 = h.replaceAll(/\{SymbolName\}/gi, t), a2 = null != e2.portal ? e2.portal : C.getDefault();
  return p2(s2, r).then((t2) => {
    const e3 = m2(t2.data);
    return m(e3, { portal: a2, url: I(Rt(s2)), origin: "portal-item" });
  });
}

export {
  h2 as h,
  g,
  j
};
//# sourceMappingURL=chunk-BSJSBY3M.js.map
