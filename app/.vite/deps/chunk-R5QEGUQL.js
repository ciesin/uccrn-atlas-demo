import {
  a as a2
} from "./chunk-WJNMFEXQ.js";
import {
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/layers/support/Relationship.js
var a3 = new o({ esriRelCardinalityOneToOne: "one-to-one", esriRelCardinalityOneToMany: "one-to-many", esriRelCardinalityManyToMany: "many-to-many" });
var n = new o({ esriRelRoleOrigin: "origin", esriRelRoleDestination: "destination" });
var l = class extends a2.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.cardinality = null, this.catalogId = null, this.composite = null, this.id = null, this.keyField = null, this.keyFieldInRelationshipTable = null, this.name = null, this.relatedTableId = null, this.relationshipTableId = null, this.role = null;
  }
};
r([m({ json: { read: a3.read, write: a3.write } })], l.prototype, "cardinality", void 0), r([m({ json: { name: "catalogID" } })], l.prototype, "catalogId", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "composite", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "id", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "keyField", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "keyFieldInRelationshipTable", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "name", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "relatedTableId", void 0), r([m({ json: { read: true, write: true } })], l.prototype, "relationshipTableId", void 0), r([m({ json: { read: n.read, write: n.write } })], l.prototype, "role", void 0), l = r([a("esri.layers.support.Relationship")], l);
var p = l;

export {
  p
};
//# sourceMappingURL=chunk-R5QEGUQL.js.map
