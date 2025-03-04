import {
  n,
  t
} from "./chunk-JLFSX3JT.js";

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorInterfaces.js
var i;
var e;
!function(i2) {
  i2[i2.OBJECT = 0] = "OBJECT", i2[i2.HUD = 1] = "HUD", i2[i2.TERRAIN = 2] = "TERRAIN", i2[i2.OVERLAY = 3] = "OVERLAY", i2[i2.I3S = 4] = "I3S", i2[i2.PCL = 5] = "PCL", i2[i2.LOD = 6] = "LOD", i2[i2.VOXEL = 7] = "VOXEL", i2[i2.TILES3D = 8] = "TILES3D";
}(i || (i = {}));
var s = class {
  constructor() {
    this.verticalOffset = 0, this.selectionMode = false, this.hud = true, this.selectOpaqueTerrainOnly = true, this.invisibleTerrain = false, this.backfacesTerrain = true, this.isFiltered = false, this.filteredLayerUids = [], this.store = e.ALL, this.normalRequired = true, this.excludeLabels = false;
  }
};
!function(i2) {
  i2[i2.MIN = 0] = "MIN", i2[i2.MINMAX = 1] = "MINMAX", i2[i2.ALL = 2] = "ALL";
}(e || (e = {}));

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/intersectorUtils.js
function o(t3) {
  return null != (t3 == null ? void 0 : t3.dist);
}
var u = n();

// node_modules/@arcgis/core/views/3d/webgl-engine/lib/IntersectorTarget.js
var t2 = class {
  constructor(s2, t3, r2) {
    this.object = s2, this.geometryId = t3, this.triangleNr = r2;
  }
};
var r = class extends t2 {
  constructor(t3, r2, c, e3) {
    super(t3, r2, c), this.center = null != e3 ? t(e3) : null;
  }
};
var e2 = class {
  constructor(s2) {
    this.layerUid = s2;
  }
};
var o2 = class extends e2 {
  constructor(s2, t3) {
    super(s2), this.graphicUid = t3;
  }
};

export {
  i,
  e,
  s,
  r,
  o2 as o,
  o as o2
};
//# sourceMappingURL=chunk-KGW5IGJ4.js.map
