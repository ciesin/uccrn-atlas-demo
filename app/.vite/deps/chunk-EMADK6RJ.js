import {
  _
} from "./chunk-ACGZOBZ6.js";
import {
  s2 as s
} from "./chunk-4LTV6KQ5.js";
import {
  s as s2
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/renderers/support/styleUtils.js
async function t(t2, i, n) {
  const s3 = t2 && t2.getAtOrigin && t2.getAtOrigin("renderer", i.origin);
  if (s3 && "unique-value" === s3.type && s3.styleOrigin) {
    const a = await _(s3.populateFromStyle());
    if (s2(n), false === a.ok) {
      const e = a.error;
      (i == null ? void 0 : i.messages) && i.messages.push(new s("renderer:style-reference", `Failed to create unique value renderer from style reference: ${e.message}`, { error: e, context: i })), t2.clear("renderer", i == null ? void 0 : i.origin);
    }
  }
}

export {
  t
};
//# sourceMappingURL=chunk-EMADK6RJ.js.map
