import {
  _,
  n3 as n,
  y
} from "./chunk-3SEDCXI3.js";
import {
  E
} from "./chunk-RD3QRDRK.js";
import {
  has
} from "./chunk-2N2W26AY.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/TileContainer.js
var n2 = (e, r) => e.key.level - r.key.level != 0 ? e.key.level - r.key.level : e.key.row - r.key.row != 0 ? e.key.row - r.key.row : e.key.col - r.key.col;
var i = class extends n {
  constructor(e) {
    super(), this.tileInfoView = e, this.sortFunction = n2;
  }
  renderChildren(e) {
    this.setStencilReference(e), super.renderChildren(e);
  }
  createRenderParams(e) {
    const { state: r } = e, s = super.createRenderParams(e);
    return s.requiredLevel = this.tileInfoView.getClosestInfoForScale(r.scale).level, s.displayLevel = this.tileInfoView.tileInfo.scaleToZoom(r.scale), s;
  }
  prepareRenderPasses(r) {
    const n3 = super.prepareRenderPasses(r);
    return n3.push(r.registerRenderPass({ name: "stencil", brushes: [_], drawPhase: E.DEBUG | E.MAP | E.HIGHLIGHT | E.LABEL, target: () => this.getStencilTarget() })), has("esri-tiles-debug") && n3.push(r.registerRenderPass({ name: "tileInfo", brushes: [y], drawPhase: E.DEBUG, target: () => this.children })), n3;
  }
  getStencilTarget() {
    return this.children;
  }
  setStencilReference(e) {
    let r = 1;
    for (const s of this.children) s.stencilRef = r++;
  }
};

export {
  i
};
//# sourceMappingURL=chunk-RYF2HIUG.js.map
