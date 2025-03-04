import {
  i
} from "./chunk-NCWMOUUB.js";
import {
  E,
  R,
  g
} from "./chunk-RD3QRDRK.js";
import {
  a3 as a
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";

// node_modules/@arcgis/core/views/2d/layers/graphics/HighlightGraphicContainer.js
var a2 = class extends i {
  get hasHighlight() {
    return this.children.some((r2) => r2.hasData);
  }
  renderChildren(r2) {
    this.attributeView.update(), r2.drawPhase === E.HIGHLIGHT && this.children.some((r3) => r3.hasData) && (super.renderChildren(r2), r2.context.setColorMask(true, true, true, true), g(r2, false, (r3) => {
      this._renderChildren(r3, R.Highlight);
    }));
  }
};
a2 = r([a("esri.views.2d.layers.graphics.HighlightGraphicContainer")], a2);
var h = a2;

export {
  h
};
//# sourceMappingURL=chunk-FJIVEZZY.js.map
