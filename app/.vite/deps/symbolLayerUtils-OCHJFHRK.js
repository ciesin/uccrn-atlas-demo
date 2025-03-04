import {
  e
} from "./chunk-JST5QDP2.js";
import "./chunk-A4BGGF5Z.js";
import {
  c
} from "./chunk-ESU5C3MV.js";
import {
  b,
  u
} from "./chunk-XEBZUAYT.js";
import "./chunk-G34KEQQG.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import "./chunk-NENDDUWH.js";
import "./chunk-YUVX6H42.js";
import "./chunk-5ESATYIQ.js";
import "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-BDBI2KVA.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
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
import {
  s2 as s
} from "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/symbols/support/symbolLayerUtils.js
var c2 = u2();
function u2() {
  return new e(50);
}
function a() {
  c2 = u2();
}
async function l(e2, o) {
  var _a, _b;
  if ((_a = e2.resource) == null ? void 0 : _a.href) return m(e2.resource.href).then((e3) => [e3.width, e3.height]);
  if ((_b = e2.resource) == null ? void 0 : _b.primitive) return null != o ? [o, o] : [256, 256];
  throw new s("symbol3d:invalid-symbol-layer", "symbol layers of type Icon must have either an href or a primitive resource");
}
function m(r) {
  return P(r, { responseType: "image" }).then((e2) => e2.data);
}
async function f(e2, o = null) {
  var _a, _b;
  if (!e2.isPrimitive) {
    const o2 = (_a = e2.resource) == null ? void 0 : _a.href;
    if (!o2) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
    const s2 = c2.get(o2);
    if (void 0 !== s2) return s2;
    const { fetch: n2 } = await import("./objectResourceUtils-25GFGNXP.js"), u4 = await n2(o2, { disableTextures: true, spherical: true, doublePrecisionRequiresObfuscation: true }), a2 = b(u4.referenceBoundingBox, n());
    return c2.put(o2, a2), a2;
  }
  if (!((_b = e2.resource) == null ? void 0 : _b.primitive)) throw new s("symbol:invalid-resource", "The symbol does not have a valid resource");
  const u3 = u(c(e2.resource.primitive));
  if (null != o) for (let r = 0; r < u3.length; r++) u3[r] *= o;
  return b(u3, n());
}
export {
  a as clearBoundingBoxCache,
  l as computeIconLayerResourceSize,
  f as computeObjectLayerResourceSize
};
//# sourceMappingURL=symbolLayerUtils-OCHJFHRK.js.map
