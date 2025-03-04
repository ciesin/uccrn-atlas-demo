import {
  Q,
  h,
  w
} from "./chunk-YPP5HIGV.js";
import {
  r as r2
} from "./chunk-X6OZYL6W.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/interactive/tooltip/infos/MovePointTooltipInfo.js
var i = class extends h(r2) {
  constructor(o) {
    super(o), this.type = "move-point", this.allFields.forEach((o2) => {
      o2.lockable = false, o2.setActual(null);
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation];
  }
};
r([m()], i.prototype, "allFields", null), i = r([a("esri.views.interactive.tooltip.infos.MovePointTooltipInfo")], i);

// node_modules/@arcgis/core/views/interactive/tooltip/infos/SelectedVertexTooltipInfo.js
var p = class extends h(r2) {
  constructor(t) {
    super(t), this.type = "selected-vertex", this.area = Q(), this.totalLength = w(), this.geometryType = "polyline", this.allFields.forEach((t2) => {
      t2.lockable = false, t2.setActual(null);
    });
  }
  get allFields() {
    return [this.longitude, this.latitude, this.x, this.y, this.elevation, "polygon" === this.geometryType ? this.area : this.totalLength];
  }
};
r([m()], p.prototype, "geometryType", void 0), r([m()], p.prototype, "allFields", null), p = r([a("esri.views.interactive.tooltip.infos.SelectedVertexTooltipInfo")], p);

export {
  i,
  p
};
//# sourceMappingURL=chunk-ROUC6FH2.js.map
