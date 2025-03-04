import {
  t
} from "./chunk-EZQWXU2P.js";
import {
  e
} from "./chunk-GMRKZB6Y.js";
import "./chunk-3UHB6K6P.js";
import {
  u
} from "./chunk-JLFV7EBO.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-6P7HXSJ6.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
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

// node_modules/@arcgis/core/symbols/support/previewWebStyleSymbol.js
async function o(e2, i, o2) {
  var _a;
  const r = (_a = e2.thumbnail) == null ? void 0 : _a.url;
  if (r) {
    const e3 = s((await P(r, { responseType: "image" })).data, o2);
    return (o2 == null ? void 0 : o2.node) ? (o2.node.appendChild(e3), o2.node) : e3;
  }
  const a = await e2.fetchSymbol({ acceptedFormats: e });
  return a ? i(a, o2) : null;
}
function s(t2, n) {
  const o2 = !/\\.svg$/i.test(t2.src) && (n == null ? void 0 : n.disableUpsampling), s2 = Math.max(t2.width, t2.height);
  let r = null != (n == null ? void 0 : n.maxSize) ? u(n.maxSize) : t.maxSize;
  o2 && (r = Math.min(s2, r));
  const a = "number" == typeof (n == null ? void 0 : n.size) ? n == null ? void 0 : n.size : null, h = Math.min(r, null != a ? u(a) : s2);
  if (h !== s2) {
    const e2 = 0 !== t2.width && 0 !== t2.height ? t2.width / t2.height : 1;
    e2 >= 1 ? (t2.width = h, t2.height = h / e2) : (t2.width = h * e2, t2.height = h);
  }
  return t2;
}
export {
  o as previewWebStyleSymbol
};
//# sourceMappingURL=previewWebStyleSymbol-IT5NKWT3.js.map
