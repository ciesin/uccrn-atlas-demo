import {
  a
} from "./chunk-TECUWEJV.js";
import {
  t as t2
} from "./chunk-TSDCR4OY.js";
import {
  P2,
  t
} from "./chunk-UFBX3XSC.js";
import {
  P
} from "./chunk-F7TCEOHX.js";
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

// node_modules/@arcgis/core/rest/query/operations/queryAttachments.js
function s(t3) {
  const o = t3.toJSON();
  return o.attachmentTypes && (o.attachmentTypes = o.attachmentTypes.join(",")), o.keywords && (o.keywords = o.keywords.join(",")), o.globalIds && (o.globalIds = o.globalIds.join(",")), o.objectIds && (o.objectIds = o.objectIds.join(",")), o.size && (o.size = o.size.join(",")), o.orderByFields && (o.orderByFields = o.orderByFields.join(",")), o;
}
function a2(o, r) {
  const s2 = {};
  for (const a3 of r) {
    const { parentObjectId: r2, parentGlobalId: c2, attachmentInfos: i2 } = a3;
    for (const a4 of i2) {
      const { id: i3 } = a4, d = P(t(`${o.path}/${r2}/attachments/${i3}`)), m = a.fromJSON(a4);
      m.set({ url: d, parentObjectId: r2, parentGlobalId: c2 }), s2[r2] ? s2[r2].push(m) : s2[r2] = [m];
    }
  }
  return s2;
}
function c(t3, e, n) {
  let a3 = { query: t2({ ...t3.query, f: "json", ...s(e) }) };
  return n && (a3 = { ...n, ...a3, query: { ...n.query, ...a3.query } }), P2(t3.path + "/queryAttachments", a3).then((t4) => t4.data.attachmentGroups);
}
async function i(t3, e, r) {
  const { objectIds: n } = e, s2 = [];
  for (const a3 of n) s2.push(P2(t3.path + "/" + a3 + "/attachments", r));
  return Promise.all(s2).then((t4) => n.map((o, e2) => ({ parentObjectId: o, attachmentInfos: t4[e2].data.attachmentInfos })));
}
export {
  c as executeAttachmentQuery,
  i as fetchAttachments,
  a2 as processAttachmentQueryResult
};
//# sourceMappingURL=queryAttachments-MWSFGQZH.js.map
