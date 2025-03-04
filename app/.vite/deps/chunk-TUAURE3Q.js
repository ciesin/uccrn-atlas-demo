import {
  g
} from "./chunk-MAMFTXBR.js";
import {
  I
} from "./chunk-KXYJDLD2.js";
import {
  I as I2
} from "./chunk-LAXBDZHV.js";
import {
  e as e2
} from "./chunk-X5RZJMNW.js";
import {
  u
} from "./chunk-G34KEQQG.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  P2 as P
} from "./chunk-UFBX3XSC.js";
import {
  e2 as e,
  o2 as o
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/3d/layers/i3s/I3SProjectionUtil.js
var s2 = 1;
var e3 = 5 - s2;

// node_modules/@arcgis/core/views/3d/layers/i3s/I3SUtil.js
var O = u();
var q;
async function V(t2, r, o3, n5, s5, a, i, l2) {
  const c = [];
  for (const e5 of r) if (e5 && s5.includes(e5.name)) {
    const r2 = `${t2}/nodes/${o3}/attributes/${e5.key}/0`;
    c.push({ url: r2, storageInfo: e5 });
  }
  const u2 = await Promise.allSettled(c.map((t3) => P(t3.url, { responseType: "array-buffer", query: { ...i, token: a }, signal: l2 == null ? void 0 : l2.signal }).then((e5) => I(t3.storageInfo, e5.data)))), f3 = [];
  for (const e5 of n5) {
    const t3 = {};
    for (let r2 = 0; r2 < u2.length; r2++) {
      const o4 = u2[r2];
      if ("fulfilled" === o4.status) {
        const n6 = o4.value;
        t3[c[r2].storageInfo.name] = Q(n6, e5);
      }
    }
    f3.push(t3);
  }
  return f3;
}
!function(e5) {
  e5[e5.OUTSIDE = 0] = "OUTSIDE", e5[e5.INTERSECTS_CENTER_OUTSIDE = 1] = "INTERSECTS_CENTER_OUTSIDE", e5[e5.INTERSECTS_CENTER_INSIDE = 2] = "INTERSECTS_CENTER_INSIDE", e5[e5.INSIDE = 3] = "INSIDE";
}(q || (q = {}));
var $ = -32768;
var z = -2147483648;
function Q(e5, t2) {
  if (!e5) return null;
  const r = e5[t2];
  if (o(e5)) return r === $ ? null : r;
  if (e(e5)) return r === z ? null : r;
  return r != r ? null : r;
}
var ue = g({ color: [0, 0, 0, 0], opacity: 0 });
var ge = [n(), n(), n(), n(), n(), n(), n(), n()];
var Se = u();
var be = u();
var we = new I2();
var Ie = n();
var Te = { data: new Array(72), size: 3, exclusive: true, stride: 3 };
var Ee = e2();

export {
  V
};
//# sourceMappingURL=chunk-TUAURE3Q.js.map
