import {
  a
} from "./chunk-MOU4QRJJ.js";
import "./chunk-CXW7QK2T.js";
import {
  f,
  i,
  s
} from "./chunk-D4CSBMND.js";
import "./chunk-WLGGSXQY.js";
import "./chunk-T7KGE6VP.js";
import "./chunk-T57WVICI.js";
import "./chunk-W633AKTD.js";
import "./chunk-UCMTPLHQ.js";
import "./chunk-G34KEQQG.js";
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
import "./chunk-CWMZW2S5.js";
import "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/rest/networks/trace.js
async function n(o, n2, a3) {
  const u = f(o), i2 = n2.toJSON();
  i2.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (i2.resultTypes = JSON.stringify(n2.resultTypes));
  const y = i(u.query, { query: s({ ...i2, f: "json" }), ...a3 }), p = `${u.path}/trace`;
  return P(p, y).then((t) => c(t));
}
async function a2(o, n2, a3) {
  const c2 = f(o), u = n2.toJSON();
  u.traceLocations = JSON.stringify(n2.traceLocations), n2.resultTypes && (u.resultTypes = JSON.stringify(n2.resultTypes));
  const i2 = i(c2.query, { query: s({ ...u, async: true, f: "json" }), ...a3 }), y = `${c2.path}/trace`, { data: p } = await P(y, i2);
  return p.statusUrl;
}
function c(t) {
  const { data: s2 } = t;
  return a.fromJSON(s2.traceResults);
}
export {
  a2 as submitTraceJob,
  n as trace
};
//# sourceMappingURL=trace-K3EHUUXE.js.map
