import {
  i as i2
} from "./chunk-NVR47E5B.js";
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

// node_modules/@arcgis/core/rest/networks/validateNetworkTopology.js
async function o(t, o2, d2) {
  const l = f(t), u = o2.toJSON();
  o2.validationSet && (u.validationSet = JSON.stringify(o2.validationSet));
  const c = { ...u, returnEdits: true, f: "json" }, p = s2({ ...l.query, ...c }), f2 = i(p, { ...d2, method: "post" }), k = `${l.path}/validateNetworkTopology`, { data: v } = await P(k, f2);
  return i2.fromJSON(n(v));
}
async function d(r, o2, d2) {
  if (!o2.gdbVersion) throw new s("submit-validate-network-topology-job:missing-gdb-version", "version is missing");
  const n2 = f(r), l = o2.toJSON();
  o2.validationSet && (l.validationSet = JSON.stringify(o2.validationSet));
  const u = i(n2.query, { query: s2({ ...l, returnEdits: true, async: true, f: "json" }), ...d2, method: "post" }), c = `${n2.path}/validateNetworkTopology`, { data: p } = await P(c, u);
  return p ? p.statusUrl : null;
}
function n(e) {
  return e.serviceEdits && (e.serviceEdits = e.serviceEdits.map((e2) => (e2.editedFeatures.spatialReference && (e2.editedFeatures.spatialReference = { wkid: e2.editedFeatures.spatialReference.wkid, wkt: e2.editedFeatures.spatialReference.wkt, wkt2: e2.editedFeatures.spatialReference.wkt2, latestWkid: e2.editedFeatures.spatialReference.latestWkid, latestVcsWkid: e2.editedFeatures.spatialReference.latestVcsWkid, vcsWkid: e2.editedFeatures.spatialReference.vcsWkid }), e2 = { layerId: e2.id, editedFeatures: e2.editedFeatures }))), e;
}
export {
  n as handleValidateNetworkTopologyResult,
  d as submitValidateNetworkTopologyJob,
  o as validateNetworkTopology
};
//# sourceMappingURL=validateNetworkTopology-K4IZ3Z5O.js.map
