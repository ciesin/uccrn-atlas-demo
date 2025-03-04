import {
  E as E2,
  o
} from "./chunk-HABQD3Y4.js";
import {
  r
} from "./chunk-HDT7YPJI.js";
import {
  t
} from "./chunk-3VWS6Q3L.js";
import {
  C,
  E,
  F
} from "./chunk-CRKFUUKK.js";

// node_modules/@arcgis/core/views/2d/engine/webgl/VertexStream.js
var n = class {
  constructor(i, n2) {
    this._rctx = i, this._attributes = [{ name: "position", offset: 0, type: C.SHORT, count: 2 }], this.layout = { hash: r(this._attributes), attributes: this._attributes, stride: 4 }, this._vertexBuffer = E2.createVertex(i, F.STATIC_DRAW, new Uint16Array(n2)), this._vao = new o(i, /* @__PURE__ */ new Map([["a_position", 0]]), /* @__PURE__ */ new Map([["geometry", [new t("a_position", 2, C.SHORT, 0, 4)]]]), /* @__PURE__ */ new Map([["geometry", this._vertexBuffer]])), this._count = n2.length / 2;
  }
  bind() {
    this._rctx.bindVAO(this._vao);
  }
  unbind() {
    this._rctx.bindVAO(null);
  }
  dispose() {
    this._vao.dispose();
  }
  draw() {
    this._rctx.bindVAO(this._vao), this._rctx.drawArrays(E.TRIANGLE_STRIP, 0, this._count);
  }
};

export {
  n
};
//# sourceMappingURL=chunk-KHRGTQOH.js.map
