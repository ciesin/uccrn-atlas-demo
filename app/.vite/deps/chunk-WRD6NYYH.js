import {
  P
} from "./chunk-W633AKTD.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
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

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphObject.js
var t = class extends S {
  constructor(r2) {
    super(r2), this.properties = null;
  }
};
r([m({ json: { write: true } })], t.prototype, "properties", void 0), t = r([a("esri.rest.knowledgeGraph.GraphObject")], t);
var p = t;

// node_modules/@arcgis/core/rest/knowledgeGraph/GraphNamedObject.js
var s = class extends p {
  constructor(r2) {
    super(r2), this.typeName = null, this.id = null;
  }
};
r([m({ type: String, json: { write: true } })], s.prototype, "typeName", void 0), r([m({ type: String, json: { write: true } })], s.prototype, "id", void 0), s = r([a("esri.rest.knowledgeGraph.GraphNamedObject")], s);
var p2 = s;

// node_modules/@arcgis/core/rest/knowledgeGraph/Entity.js
var p3 = class extends p2 {
  constructor(o) {
    super(o), this.layoutGeometry = null;
  }
};
r([m({ type: j, json: { write: true } })], p3.prototype, "layoutGeometry", void 0), p3 = r([a("esri.rest.knowledgeGraph.Entity")], p3);
var c = p3;

// node_modules/@arcgis/core/rest/knowledgeGraph/Relationship.js
var i = class extends p2 {
  constructor(o) {
    super(o), this.originId = null, this.destinationId = null, this.layoutGeometry = null;
  }
};
r([m({ type: String, json: { write: true } })], i.prototype, "originId", void 0), r([m({ type: String, json: { write: true } })], i.prototype, "destinationId", void 0), r([m({ type: P, json: { write: true } })], i.prototype, "layoutGeometry", void 0), i = r([a("esri.rest.knowledgeGraph.Relationship")], i);
var p4 = i;

// node_modules/@arcgis/core/rest/knowledgeGraph/ObjectValue.js
var e = class extends p {
  constructor(r2) {
    super(r2);
  }
};
e = r([a("esri.rest.knowledgeGraph.ObjectValue")], e);
var t2 = e;

// node_modules/@arcgis/core/rest/knowledgeGraph/Path.js
var p5 = class extends S {
  constructor(r2) {
    super(r2), this.path = [];
  }
};
r([m({ type: [p], json: { write: true } })], p5.prototype, "path", void 0), p5 = r([a("esri.rest.knowledgeGraph.Path")], p5);
var c2 = p5;

export {
  c,
  p4 as p,
  t2 as t,
  c2
};
//# sourceMappingURL=chunk-WRD6NYYH.js.map
