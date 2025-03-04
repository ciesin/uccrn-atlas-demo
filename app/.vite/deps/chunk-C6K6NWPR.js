import {
  r as r2,
  u
} from "./chunk-X6OZYL6W.js";
import {
  h,
  p
} from "./chunk-DMO5AKFB.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentRotateTooltipInfo.js
var s = class extends r2 {
  constructor(o2) {
    super(o2), this.type = "extent-rotate", this.angle = 0;
  }
};
r([m()], s.prototype, "type", void 0), r([m()], s.prototype, "angle", void 0), s = r([a("esri.views.interactive.tooltip.infos.ExtentRotateTooltipInfo")], s);

// node_modules/@arcgis/core/views/support/extentUtils.js
function o({ topLeft: o2, topRight: n, bottomRight: i2, bottomLeft: r3, spatialReference: l }) {
  const u2 = p(u(r3, i2, l), u(o2, n, l));
  if (null == u2) return null;
  const m2 = p(u(i2, n, l), u(r3, o2, l));
  return null == m2 ? null : { xSize: u2, ySize: m2 };
}

// node_modules/@arcgis/core/views/interactive/tooltip/infos/ExtentScaleTooltipInfo.js
var i = class extends r2 {
  constructor(o2) {
    super(o2), this.type = "extent-scale", this.xScale = 0, this.yScale = 0, this.xSize = h, this.ySize = h;
  }
};
r([m()], i.prototype, "type", void 0), r([m()], i.prototype, "xScale", void 0), r([m()], i.prototype, "yScale", void 0), r([m()], i.prototype, "xSize", void 0), r([m()], i.prototype, "ySize", void 0), i = r([a("esri.views.interactive.tooltip.infos.ExtentScaleTooltipInfo")], i);

export {
  s,
  o,
  i
};
//# sourceMappingURL=chunk-C6K6NWPR.js.map
