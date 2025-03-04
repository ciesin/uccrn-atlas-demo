import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  m
} from "./chunk-RYSF6YCR.js";

// node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
function r(r2, a = {}) {
  const t = r2 instanceof o ? r2 : new o(r2, a), { alwaysWriteDefaults: l, default: o2, ignoreUnknown: s = true, name: i, nonNullable: u, readOnly: p = false } = a;
  return m({ type: s ? t.apiValues : String, json: { type: t.jsonValues, default: o2, name: i, read: !p && { reader: t.read }, write: { writer: t.write, alwaysWriteDefaults: l } }, nonNullable: u, readOnly: p });
}

export {
  r
};
//# sourceMappingURL=chunk-ZYOZHQFS.js.map
