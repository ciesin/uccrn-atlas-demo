import {
  b
} from "./chunk-WAKNRSGF.js";
import {
  n
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtilsConversions.js
var B = n();

// node_modules/@arcgis/core/analysis/featureReferenceUtils.js
function c(e3, t) {
  return d(e3) === d(t);
}
function d(e3) {
  if (null == e3) return null;
  const t = null != e3.layer ? e3.layer.id : "";
  let r2 = null;
  return r2 = null != e3.objectId ? e3.objectId : null != e3.layer && "objectIdField" in e3.layer && null != e3.layer.objectIdField && null != e3.attributes ? e3.attributes[e3.layer.objectIdField] : e3.uid, null == r2 ? null : `o-${t}-${r2}`;
}
var b2 = { json: { write: { writer: f, target: { "feature.layerId": { type: [Number, String], isRequired: true }, "feature.objectId": { type: [Number, String], isRequired: true } } }, origins: { "web-scene": { read: I } } } };
function f(e3, t) {
  var _a;
  null != ((_a = e3 == null ? void 0 : e3.layer) == null ? void 0 : _a.objectIdField) && null != e3.attributes && (t.feature = { layerId: e3.layer.id, objectId: e3.attributes[e3.layer.objectIdField] });
}
function I(e3) {
  if (null != e3.layerId && null != e3.objectId) return { uid: null, layer: { id: e3.layerId, objectIdField: "ObjectId" }, attributes: { ObjectId: e3.objectId } };
}
var y = b();
var p2 = n();

export {
  c,
  b2 as b
};
//# sourceMappingURL=chunk-JUU24EKT.js.map
