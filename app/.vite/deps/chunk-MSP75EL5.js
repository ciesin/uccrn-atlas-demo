import {
  r
} from "./chunk-YPP5HIGV.js";
import {
  p
} from "./chunk-U4J3KS6Z.js";
import {
  s
} from "./chunk-6MN3R543.js";
import {
  n as n2
} from "./chunk-O2L6JAHP.js";
import {
  e as e3,
  y as y2
} from "./chunk-K35H6D4D.js";
import {
  G,
  w
} from "./chunk-ZH6PYRVF.js";
import {
  b
} from "./chunk-5X74MKXM.js";
import {
  d
} from "./chunk-IPFYNOOY.js";
import {
  y
} from "./chunk-4WO6KUCB.js";
import {
  d as d2
} from "./chunk-2Y4TRKRB.js";
import {
  P
} from "./chunk-W633AKTD.js";
import {
  e as e2
} from "./chunk-JLFV7EBO.js";
import {
  n
} from "./chunk-JLFSX3JT.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import {
  h
} from "./chunk-4LTV6KQ5.js";
import {
  e
} from "./chunk-M6FNW7GP.js";

// node_modules/@arcgis/core/views/2d/interactive/SnappingVisualizer2D.js
var d3 = class extends r {
  constructor(e4) {
    super(), this._graphicsLayer = e4, this._symbolPairingsByType = /* @__PURE__ */ new Map();
  }
  visualizeIntersectionPoint(e4, t) {
    return this._visualizeSnappingIndicator(new j({ x: e4.intersectionPoint[0], y: e4.intersectionPoint[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("intersectionPoint", t.view.effectiveTheme.accentColor));
  }
  visualizePoint(e4, t) {
    return this._visualizeSnappingIndicator(new j({ x: e4.point[0], y: e4.point[1], spatialReference: t.spatialReference }), this._getOrCreateSymbol("point", t.view.effectiveTheme.accentColor));
  }
  visualizeLine(e4, t) {
    return this._visualizeSnappingIndicator(new P({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: h(g, t.spatialReference) }), this._getOrCreateSymbol("line", t.view.effectiveTheme.accentColor));
  }
  visualizeParallelSign(e4, t) {
    return this._visualizeSnappingIndicator(new P({ paths: [[[...e4.lineStart], [...e4.lineEnd]]], spatialReference: h(g, t.spatialReference) }), this._getOrCreateSymbol("parallelSign", t.view.effectiveTheme.accentColor));
  }
  visualizeRightAngleQuad(e4, t) {
    const r2 = n2(), s2 = n2(), p2 = n();
    e3(r2, s(e4.centerVertex), s(e4.previousVertex)), e3(s2, s(e4.nextVertex), s(e4.previousVertex)), y2(p2, r2, s2);
    const y3 = `rightAngleQuad${p2[2] < 0 ? 45 : 225}`;
    return this._visualizeSnappingIndicator(new P({ paths: [[[...e4.previousVertex], [...e4.centerVertex], [...e4.nextVertex]]], spatialReference: h(g, t.spatialReference) }), this._getOrCreateSymbol(y3, t.view.effectiveTheme.accentColor));
  }
  _visualizeSnappingIndicator(r2, i) {
    const o = new b({ geometry: r2, symbol: i });
    return this._graphicsLayer.add(o), e(() => {
      this._graphicsLayer.remove(o);
    });
  }
  _getOrCreateSymbol(e4, t) {
    var _a;
    const r2 = this._symbolPairingsByType;
    return ((_a = r2.get(e4)) == null ? void 0 : _a.color) !== t && r2.set(e4, { color: t, symbol: M(e4, t) }), r2.get(e4).symbol;
  }
};
function M(e4, t) {
  const i = [...t.toRgb(), 255 * t.a];
  switch (e4) {
    case "point":
      return new y({ outline: { width: 0.5, color: [0, 0, 0, 1] }, size: 10, color: t });
    case "intersectionPoint":
      return new y({ outline: new d2({ width: 1.5, color: t }), size: 15, color: [0, 0, 0, 0] });
    case "line":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: w.Butt, joinStyle: G.Round, miterLimit: 10, width: e2(p.lineHintWidthTarget), color: i }] } } });
    case "parallelSign":
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: -1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, 1.5], [7, 1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }, { type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0, y: 1, z: 0 }, anchorPointUnits: "Relative", size: 5, markerPlacement: { type: "CIMMarkerPlacementOnLine", placePerPart: true, angleToLine: true, relativeTo: "LineMiddle" }, frame: { xmin: -5, ymin: -1.5, xmax: 5, ymax: 1.5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { rings: [[[7, 0], [-7, 0], [-7, -1.5], [7, -1.5]]] }, symbol: { type: "CIMPolygonSymbol", symbolLayers: [{ type: "CIMSolidFill", enable: true, color: i }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    case "rightAngleQuad45":
    case "rightAngleQuad225": {
      const o = "rightAngleQuad45" === e4 ? 45 : 225;
      return new d({ data: { type: "CIMSymbolReference", symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMVectorMarker", enable: true, anchorPoint: { x: 0.5, y: 0.5, z: 0 }, anchorPointUnits: "Relative", size: e2(p.rightAngleHintSize), rotation: o, markerPlacement: { type: "CIMMarkerPlacementOnVertices", placePerPart: true, angleToLine: true, placeOnEndPoints: false }, frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 }, markerGraphics: [{ type: "CIMMarkerGraphic", geometry: { paths: [[[5, -5], [-5, -5], [-5, 5], [5, 5], [5, -5]]] }, symbol: { type: "CIMLineSymbol", symbolLayers: [{ type: "CIMSolidStroke", enable: true, capStyle: "Butt", joinStyle: "Round", miterLimit: 10, width: e2(p.rightAngleHintOutlineSize), color: i }, { type: "CIMSolidFill", enable: true, color: [...t.toRgb(), 255 * t.a * 0.4] }] } }], scaleSymbolsProportionally: true, respectFrame: true }] } } });
    }
  }
}

export {
  d3 as d
};
//# sourceMappingURL=chunk-MSP75EL5.js.map
