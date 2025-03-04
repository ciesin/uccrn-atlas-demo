import {
  C,
  I,
  M,
  f,
  m,
  y
} from "./chunk-BTTTF5H4.js";
import {
  h
} from "./chunk-3UHB6K6P.js";

// node_modules/@arcgis/core/symbols/support/cimSymbolUtils.js
function l(e, t, o, r) {
  if (e) if ("CIMTextSymbol" !== e.type) {
    if (o && e.effects) for (const o2 of e.effects) y2(o2, t);
    if (e.symbolLayers) for (const o2 of e.symbolLayers) {
      switch (o2.type) {
        case "CIMPictureMarker":
        case "CIMVectorMarker":
          m2(o2, t, r);
          break;
        case "CIMPictureStroke":
        case "CIMSolidStroke":
        case "CIMGradientStroke":
          !(r == null ? void 0 : r.preserveOutlineWidth) && o2.width && (o2.width *= t);
          break;
        case "CIMPictureFill":
          o2.height && (o2.height *= t), o2.offsetX && (o2.offsetX *= t), o2.offsetY && (o2.offsetY *= t);
          break;
        case "CIMHatchFill":
          l(o2.lineSymbol, t, true, { ...r, preserveOutlineWidth: false }), o2.offsetX && (o2.offsetX *= t), o2.offsetY && (o2.offsetY *= t), o2.separation && (o2.separation *= t);
      }
      if (o2.effects) for (const e2 of o2.effects) y2(e2, t);
    }
  } else null != e.height && (e.height *= t);
}
function m2(e, t, o) {
  if (e && (e.markerPlacement && M2(e.markerPlacement, t), e.offsetX && (e.offsetX *= t), e.offsetY && (e.offsetY *= t), e.anchorPoint && "Absolute" === e.anchorPointUnits && (e.anchorPoint = { x: e.anchorPoint.x * t, y: e.anchorPoint.y * t }), e.size = null != e.size ? e.size * t : 0, "CIMVectorMarker" === e.type && e.markerGraphics)) for (const r of e.markerGraphics) e.scaleSymbolsProportionally || l(r.symbol, t, true, o);
}
function M2(e, t) {
  switch (I(e) && e.offset && (e.offset *= t), e.type) {
    case "CIMMarkerPlacementAlongLineRandomSize":
    case "CIMMarkerPlacementAlongLineSameSize":
      if (e.customEndingOffset && (e.customEndingOffset *= t), e.offsetAlongLine && (e.offsetAlongLine *= t), e.placementTemplate && e.placementTemplate.length) {
        const o = e.placementTemplate.map((e2) => e2 * t);
        e.placementTemplate = o;
      }
      break;
    case "CIMMarkerPlacementAlongLineVariableSize":
      if (e.maxRandomOffset && (e.maxRandomOffset *= t), e.placementTemplate && e.placementTemplate.length) {
        const o = e.placementTemplate.map((e2) => e2 * t);
        e.placementTemplate = o;
      }
      break;
    case "CIMMarkerPlacementOnLine":
      e.startPointOffset && (e.startPointOffset *= t);
      break;
    case "CIMMarkerPlacementAtExtremities":
      e.offsetAlongLine && (e.offsetAlongLine *= t);
      break;
    case "CIMMarkerPlacementAtMeasuredUnits":
    case "CIMMarkerPlacementOnVertices":
      break;
    case "CIMMarkerPlacementAtRatioPositions":
      e.beginPosition && (e.beginPosition *= t), e.endPosition && (e.endPosition *= t);
      break;
    case "CIMMarkerPlacementPolygonCenter":
      e.offsetX && (e.offsetX *= t), e.offsetY && (e.offsetY *= t);
      break;
    case "CIMMarkerPlacementInsidePolygon":
      e.offsetX && (e.offsetX *= t), e.offsetY && (e.offsetY *= t), e.stepX && (e.stepX *= t), e.stepY && (e.stepY *= t);
  }
}
function y2(e, t) {
  switch (e.type) {
    case "CIMGeometricEffectArrow":
    case "CIMGeometricEffectDonut":
      e.width && (e.width *= t);
      break;
    case "CIMGeometricEffectBuffer":
      e.size && (e.size *= t);
      break;
    case "CIMGeometricEffectCut":
      e.beginCut && (e.beginCut *= t), e.endCut && (e.endCut *= t), e.middleCut && (e.middleCut *= t);
      break;
    case "CIMGeometricEffectDashes":
      if (e.customEndingOffset && (e.customEndingOffset *= t), e.offsetAlongLine && (e.offsetAlongLine *= t), e.dashTemplate && e.dashTemplate.length) {
        const o = e.dashTemplate.map((e2) => e2 * t);
        e.dashTemplate = o;
      }
      break;
    case "CIMGeometricEffectExtension":
    case "CIMGeometricEffectJog":
    case "CIMGeometricEffectRadial":
      e.length && (e.length *= t);
      break;
    case "CIMGeometricEffectMove":
      e.offsetX && (e.offsetX *= t), e.offsetY && (e.offsetY *= t);
      break;
    case "CIMGeometricEffectOffset":
    case "CIMGeometricEffectOffsetTangent":
      e.offset && (e.offset *= t);
      break;
    case "CIMGeometricEffectRegularPolygon":
      e.radius && (e.radius *= t);
      break;
    case "CIMGeometricEffectTaperedPolygon":
      e.fromWidth && (e.fromWidth *= t), e.length && (e.length *= t), e.toWidth && (e.toWidth *= t);
      break;
    case "CIMGeometricEffectWave":
      e.amplitude && (e.amplitude *= t), e.period && (e.period *= t);
  }
}
function C2(o) {
  const r = [];
  return u(y(o), r), r.length ? new h(f(r[0])) : null;
}
function u(e, t) {
  var _a;
  if (!e) return;
  let s;
  s = "CIMTextSymbol" === e.type ? e.symbol : e;
  const a = "CIMPolygonSymbol" === e.type;
  if (s == null ? void 0 : s.symbolLayers) {
    for (const i of s.symbolLayers) if (!(i.colorLocked || a && (m(i) || M(i) && i.markerPlacement && I(i.markerPlacement)))) switch (i.type) {
      case "CIMPictureMarker":
      case "CIMPictureStroke":
      case "CIMPictureFill":
        i.tintColor && b(t, i.tintColor);
        break;
      case "CIMVectorMarker":
        (_a = i.markerGraphics) == null ? void 0 : _a.forEach((e2) => {
          u(e2.symbol, t);
        });
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
        b(t, i.color);
        break;
      case "CIMHatchFill":
        u(i.lineSymbol, t);
    }
  }
}
function b(e, t) {
  for (const o of e) if (o.join(".") === t.join(".")) return;
  e.push(t);
}
function I2(o, r, s) {
  r instanceof h || (r = new h(r));
  const n = y(o);
  n && k(n, r, s);
}
function k(e, t, a) {
  var _a;
  if (!e) return;
  let i;
  i = "CIMTextSymbol" === e.type ? e.symbol : e;
  const c = "CIMPolygonSymbol" === (i == null ? void 0 : i.type);
  if (i == null ? void 0 : i.symbolLayers) for (const f2 of i.symbolLayers) {
    if (f2.colorLocked) continue;
    if (c) {
      if (a) {
        const { layersToColor: e3 } = a;
        if ((m(f2) || M(f2) && f2.markerPlacement && I(f2.markerPlacement)) && "fill" === e3 || C(f2) && "outline" === e3) continue;
      } else if (m(f2) || M(f2) && f2.markerPlacement && I(f2.markerPlacement)) continue;
    }
    const e2 = t.toArray();
    switch (f2.type) {
      case "CIMPictureMarker":
      case "CIMPictureStroke":
      case "CIMPictureFill":
        f2.tintColor = e2;
        break;
      case "CIMVectorMarker":
        (_a = f2.markerGraphics) == null ? void 0 : _a.forEach((e3) => {
          k(e3.symbol, t, a);
        });
        break;
      case "CIMSolidStroke":
      case "CIMSolidFill":
        f2.color = e2;
        break;
      case "CIMHatchFill":
        k(f2.lineSymbol, t, a);
    }
  }
}

export {
  l,
  C2 as C,
  I2 as I
};
//# sourceMappingURL=chunk-4FQK362J.js.map
