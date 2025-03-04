import {
  e,
  u
} from "./chunk-XEIAE5ZE.js";
import "./chunk-7AOPU62X.js";
import "./chunk-UFBX3XSC.js";
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

// node_modules/@arcgis/core/views/3d/layers/Lyr3DWorker.js
var e2;
var n;
async function r(t) {
  if (await o(), t.inputs.length < 1) return { result: { status: u.Failed, error: "", jobDescJson: "", data: new Uint8Array(0), missingInputUrls: [] }, transferList: [] };
  const e3 = { ptrs: [], sizes: [] };
  for (const s of t.inputs) {
    const t2 = n._malloc(s.byteLength);
    new Uint8Array(n.HEAPU8.buffer, t2, s.byteLength).set(new Uint8Array(s)), e3.ptrs.push(t2), e3.sizes.push(s.byteLength);
  }
  const r2 = n.process(t.jobDescJson, e3, t.isMissingResourceCase), i2 = r2.status === u.Succeeded && r2.data, a = r2.status === u.MissingInputs && r2.missingInputUrls.length > 0;
  if (i2) {
    const s = r2.data.slice();
    r2.data = s;
  } else a && (r2.jobDescJson = r2.jobDescJson.slice(), r2.originalInputs = t.inputs.slice());
  for (let s = 0; s < e3.ptrs.length; ++s) n._free(e3.ptrs[s]);
  const l = [];
  if (i2) l.push(r2.data.buffer);
  else if (a) for (const s of t.inputs) l.push(s);
  return { result: r2, transferList: l };
}
function i() {
  n && (n.uninitialize_lyr3d_worker_wasm(), n = null);
}
function o() {
  return n ? Promise.resolve() : (e2 || (e2 = e().then((s) => {
    n = s, n.initialize_lyr3d_worker_wasm(), e2 = null;
  })), e2);
}
export {
  i as destroyWasm,
  o as initialize,
  r as process
};
//# sourceMappingURL=Lyr3DWorker-FCLNB2NI.js.map
