import {
  j
} from "./chunk-JUMO2VIG.js";
import {
  g,
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/interactive/sketch/SketchLabelOptions.js
var t = class extends g {
  constructor(o) {
    super(o), this.enabled = false;
  }
};
r([m({ type: Boolean, nonNullable: true })], t.prototype, "enabled", void 0), t = r([a("esri.views.interactive.sketch.SketchLabelOptions")], t);
var c = t;

// node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipElevationOptions.js
var t2 = class extends g {
  constructor(o) {
    super(o), this.mode = "absolute-height";
  }
  toJSON() {
    return { mode: this.mode };
  }
};
r([m({ type: String, nonNullable: true })], t2.prototype, "mode", void 0), t2 = r([a("esri.views.interactive.sketch.SketchTooltipElevationOptions")], t2);

// node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipVisibleElements.js
var a2 = class extends g {
  constructor(o) {
    super(o), this.area = true, this.coordinates = true, this.direction = true, this.distance = true, this.elevation = true, this.header = true, this.helpMessage = false, this.orientation = true, this.radius = true, this.rotation = true, this.scale = true, this.size = true, this.totalLength = true;
  }
};
r([m({ type: Boolean, nonNullable: true })], a2.prototype, "area", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "coordinates", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "direction", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "distance", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "elevation", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "header", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "helpMessage", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "orientation", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "radius", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "rotation", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "scale", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "size", void 0), r([m({ type: Boolean, nonNullable: true })], a2.prototype, "totalLength", void 0), a2 = r([a("esri.views.interactive.sketch.SketchTooltipVisibleElements")], a2);
var n = a2;

// node_modules/@arcgis/core/views/interactive/sketch/SketchTooltipOptions.js
var p = class extends g {
  constructor(e2) {
    super(e2), this.enabled = false, this.forceEnabled = false, this.helpMessage = null, this.helpMessageIcon = null, this.inputEnabled = true, this.elevation = new t2(), this.placement = "auto", this.offset = null, this.visibleElements = new n(), this.visualVariables = null, this.xyMode = "auto";
  }
  get effectiveEnabled() {
    return this.forceEnabled || this.enabled;
  }
};
r([m({ type: Boolean, nonNullable: true })], p.prototype, "enabled", void 0), r([m()], p.prototype, "forceEnabled", void 0), r([m()], p.prototype, "effectiveEnabled", null), r([m()], p.prototype, "helpMessage", void 0), r([m()], p.prototype, "helpMessageIcon", void 0), r([m({ type: Boolean, nonNullable: true })], p.prototype, "inputEnabled", void 0), r([m({ type: t2, nonNullable: true })], p.prototype, "elevation", void 0), r([m()], p.prototype, "placement", void 0), r([m()], p.prototype, "offset", void 0), r([m({ type: n, nonNullable: true })], p.prototype, "visibleElements", void 0), r([m()], p.prototype, "visualVariables", void 0), r([m()], p.prototype, "xyMode", void 0), p = r([a("esri.views.interactive.sketch.SketchTooltipOptions")], p);
var r2 = p;

// node_modules/@arcgis/core/views/interactive/sketch/Units.js
var e = class extends g {
  constructor(o) {
    super(o), this.length = null, this.verticalLength = null, this.area = null;
  }
};
r([m()], e.prototype, "length", void 0), r([m()], e.prototype, "verticalLength", void 0), r([m()], e.prototype, "area", void 0), e = r([a("esri.views.interactive.sketch.Units")], e);
var c2 = e;

// node_modules/@arcgis/core/views/interactive/sketch/SketchValueOptions.js
var n2 = class extends g {
  constructor(t3) {
    super(t3), this.directionMode = "relative", this.relativeDirectionIsBilateral = false;
  }
  get effectiveDirectionMode() {
    switch (this.directionMode) {
      case "relative":
        return this.relativeDirectionIsBilateral ? j.RelativeBilateral : j.Relative;
      case "absolute":
        return j.Absolute;
    }
  }
  get displayUnits() {
    return this._get("displayUnits") ?? new c2();
  }
  set displayUnits(t3) {
    this._set("displayUnits", t3);
  }
  get inputUnits() {
    return this._get("inputUnits") ?? new c2();
  }
  set inputUnits(t3) {
    this._set("inputUnits", t3);
  }
};
r([m({ type: String, nonNullable: true })], n2.prototype, "directionMode", void 0), r([m({ type: Boolean, nonNullable: true })], n2.prototype, "relativeDirectionIsBilateral", void 0), r([m()], n2.prototype, "effectiveDirectionMode", null), r([m({ type: c2, nonNullable: true })], n2.prototype, "displayUnits", null), r([m({ type: c2, nonNullable: true })], n2.prototype, "inputUnits", null), n2 = r([a("esri.views.interactive.sketch.SketchValueOptions")], n2);
var l = n2;

// node_modules/@arcgis/core/views/interactive/sketch/SketchOptions.js
var c3 = class extends g {
  constructor(o) {
    super(o), this.labels = new c(), this.tooltips = new r2(), this.values = new l();
  }
};
r([m({ nonNullable: true, type: c })], c3.prototype, "labels", void 0), r([m({ nonNullable: true, type: r2 })], c3.prototype, "tooltips", void 0), r([m({ nonNullable: true, type: l })], c3.prototype, "values", void 0), c3 = r([a("esri.views.interactive.sketch.SketchOptions")], c3);
var l2 = c3;

export {
  c,
  r2 as r,
  l,
  l2
};
//# sourceMappingURL=chunk-FIOJSKII.js.map
