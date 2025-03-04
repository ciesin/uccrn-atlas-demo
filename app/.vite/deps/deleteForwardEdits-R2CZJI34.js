import {
  f,
  i,
  s as s2
} from "./chunk-D4CSBMND.js";
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

// node_modules/@arcgis/core/rest/versionManagement/gdbVersion/deleteForwardEdits.js
async function e(e2, n, m, a) {
  if (!n) throw new s("post:missing-guid", "guid for version is missing");
  const u = f(e2), d = m.toJSON(), f2 = i(u.query, { query: s2({ ...d, f: "json" }), ...a, method: "post" });
  n.startsWith("{") && (n = n.slice(1, -1));
  const p = `${u.path}/versions/${n}/deleteForwardEdits`, { data: c } = await P(p, f2);
  return c;
}
export {
  e as deleteForwardEdits
};
//# sourceMappingURL=deleteForwardEdits-R2CZJI34.js.map
