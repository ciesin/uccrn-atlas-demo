import {
  n as n2,
  t
} from "./chunk-QHF36O7C.js";
import {
  a,
  d2 as d,
  d3 as d2
} from "./chunk-PTXLIK52.js";
import {
  I,
  c,
  l,
  w
} from "./chunk-KXYJDLD2.js";
import {
  I as I2
} from "./chunk-LAXBDZHV.js";
import "./chunk-ZAYRG6WM.js";
import "./chunk-NVEHOQKI.js";
import "./chunk-H2PMLL3X.js";
import "./chunk-ZKPJPNLW.js";
import {
  O
} from "./chunk-HONYA6AI.js";
import {
  e
} from "./chunk-NOMJWA3C.js";
import "./chunk-X5RZJMNW.js";
import "./chunk-K24WU5UX.js";
import "./chunk-U7ERRXB6.js";
import "./chunk-O2L6JAHP.js";
import "./chunk-LH36NQSN.js";
import {
  Q
} from "./chunk-UMYFDXOJ.js";
import "./chunk-4A3WH4AR.js";
import "./chunk-4KREATVZ.js";
import "./chunk-MHM4GDCM.js";
import "./chunk-363AT5UF.js";
import {
  o
} from "./chunk-QTWG47SG.js";
import "./chunk-WJGG35K6.js";
import "./chunk-WJNMFEXQ.js";
import "./chunk-3UHB6K6P.js";
import "./chunk-ZYOZHQFS.js";
import "./chunk-53ZTROGC.js";
import "./chunk-PUM22WTC.js";
import "./chunk-BV7O6P7Z.js";
import "./chunk-JLFSX3JT.js";
import {
  g
} from "./chunk-RDUV6YP6.js";
import "./chunk-6P7HXSJ6.js";
import "./chunk-LTDNORB5.js";
import "./chunk-HQLPC24M.js";
import "./chunk-7AOPU62X.js";
import "./chunk-WE4EKKVR.js";
import "./chunk-UFBX3XSC.js";
import "./chunk-F7TCEOHX.js";
import "./chunk-5BULKNR2.js";
import "./chunk-RYSF6YCR.js";
import "./chunk-4LTV6KQ5.js";
import "./chunk-PPIAYGRE.js";
import "./chunk-WCGYJMU3.js";
import "./chunk-577U4F6A.js";
import "./chunk-HS4XAAAN.js";
import "./chunk-STW6HRXO.js";
import "./chunk-7QTMSBS3.js";
import "./chunk-M6FNW7GP.js";
import "./chunk-5HI5HAKB.js";
import "./chunk-CWMZW2S5.js";
import {
  G,
  n2 as n
} from "./chunk-2N2W26AY.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js
function i(t2, n3, l2, s) {
  const { rendererJSON: i2, isRGBRenderer: u2 } = t2;
  let c4 = null, a3 = null;
  if (n3 && u2) c4 = n3;
  else if (n3 && "pointCloudUniqueValueRenderer" === (i2 == null ? void 0 : i2.type)) {
    a3 = d2.fromJSON(i2);
    const e2 = a3.colorUniqueValueInfos;
    c4 = new Uint8Array(3 * s);
    const r = d3(a3.fieldTransformType);
    for (let o2 = 0; o2 < s; o2++) {
      const t3 = (r ? r(n3[o2]) : n3[o2]) + "";
      for (let r2 = 0; r2 < e2.length; r2++) if (e2[r2].values.includes(t3)) {
        c4[3 * o2] = e2[r2].color.r, c4[3 * o2 + 1] = e2[r2].color.g, c4[3 * o2 + 2] = e2[r2].color.b;
        break;
      }
    }
  } else if (n3 && "pointCloudStretchRenderer" === (i2 == null ? void 0 : i2.type)) {
    a3 = a.fromJSON(i2);
    const e2 = a3.stops;
    c4 = new Uint8Array(3 * s);
    const o2 = d3(a3.fieldTransformType);
    for (let r = 0; r < s; r++) {
      const t3 = o2 ? o2(n3[r]) : n3[r], l3 = e2.length - 1;
      if (t3 < e2[0].value) c4[3 * r] = e2[0].color.r, c4[3 * r + 1] = e2[0].color.g, c4[3 * r + 2] = e2[0].color.b;
      else if (t3 >= e2[l3].value) c4[3 * r] = e2[l3].color.r, c4[3 * r + 1] = e2[l3].color.g, c4[3 * r + 2] = e2[l3].color.b;
      else for (let o3 = 1; o3 < e2.length; o3++) if (t3 < e2[o3].value) {
        const n4 = (t3 - e2[o3 - 1].value) / (e2[o3].value - e2[o3 - 1].value);
        c4[3 * r] = e2[o3].color.r * n4 + e2[o3 - 1].color.r * (1 - n4), c4[3 * r + 1] = e2[o3].color.g * n4 + e2[o3 - 1].color.g * (1 - n4), c4[3 * r + 2] = e2[o3].color.b * n4 + e2[o3 - 1].color.b * (1 - n4);
        break;
      }
    }
  } else if (n3 && "pointCloudClassBreaksRenderer" === (i2 == null ? void 0 : i2.type)) {
    a3 = d.fromJSON(i2);
    const r = a3.colorClassBreakInfos;
    c4 = new Uint8Array(3 * s);
    const o2 = d3(a3.fieldTransformType);
    for (let e2 = 0; e2 < s; e2++) {
      const t3 = o2 ? o2(n3[e2]) : n3[e2];
      for (let o3 = 0; o3 < r.length; o3++) if (t3 >= r[o3].minValue && t3 <= r[o3].maxValue) {
        c4[3 * e2] = r[o3].color.r, c4[3 * e2 + 1] = r[o3].color.g, c4[3 * e2 + 2] = r[o3].color.b;
        break;
      }
    }
  } else c4 = new Uint8Array(3 * s).fill(255);
  if (l2 && (a3 == null ? void 0 : a3.colorModulation)) {
    const e2 = a3.colorModulation.minValue, r = a3.colorModulation.maxValue, o2 = 0.3;
    for (let t3 = 0; t3 < s; t3++) {
      const n4 = l2[t3], s2 = n4 >= r ? 1 : n4 <= e2 ? o2 : o2 + (1 - o2) * (n4 - e2) / (r - e2);
      c4[3 * t3] = s2 * c4[3 * t3], c4[3 * t3 + 1] = s2 * c4[3 * t3 + 1], c4[3 * t3 + 2] = s2 * c4[3 * t3 + 2];
    }
  }
  return c4;
}
function u(e2, r) {
  if (null == e2.encoding || "" === e2.encoding) {
    const o2 = w(r, e2);
    if (null == o2.vertexAttributes.position) return;
    const l2 = l(r, o2.vertexAttributes.position), s = o2.header.fields, i2 = [s.offsetX, s.offsetY, s.offsetZ], u2 = [s.scaleX, s.scaleY, s.scaleZ], c4 = l2.length / 3, a3 = new Float64Array(3 * c4);
    for (let e3 = 0; e3 < c4; e3++) a3[3 * e3] = l2[3 * e3] * u2[0] + i2[0], a3[3 * e3 + 1] = l2[3 * e3 + 1] * u2[1] + i2[1], a3[3 * e3 + 2] = l2[3 * e3 + 2] * u2[2] + i2[2];
    return a3;
  }
  if ("lepcc-xyz" === e2.encoding) return c(r).result;
}
function c2(e2, r, o2) {
  return (e2 == null ? void 0 : e2.attributeInfo.useElevation) ? r ? a2(r, o2) : null : (e2 == null ? void 0 : e2.attributeInfo.storageInfo) ? I(e2.attributeInfo.storageInfo, e2.buffer, o2) : null;
}
function a2(e2, r) {
  const o2 = new Float64Array(r);
  for (let t2 = 0; t2 < r; t2++) o2[t2] = e2[3 * t2 + 2];
  return o2;
}
function f(e2, r, o2, t2, n3) {
  const l2 = e2.length / 3;
  let s = 0;
  for (let i2 = 0; i2 < l2; i2++) {
    let l3 = true;
    for (let e3 = 0; e3 < t2.length && l3; e3++) {
      const { filterJSON: r2 } = t2[e3], o3 = n3[e3].values[i2];
      switch (r2.type) {
        case "pointCloudValueFilter": {
          const e4 = "exclude" === r2.mode;
          r2.values.includes(o3) === e4 && (l3 = false);
          break;
        }
        case "pointCloudBitfieldFilter": {
          const e4 = p(r2.requiredSetBits), t3 = p(r2.requiredClearBits);
          ((o3 & e4) !== e4 || o3 & t3) && (l3 = false);
          break;
        }
        case "pointCloudReturnFilter": {
          const e4 = 15 & o3, t3 = o3 >>> 4 & 15, n4 = t3 > 1, s2 = 1 === e4, i3 = e4 === t3;
          let u2 = false;
          for (const o4 of r2.includedReturns) if ("last" === o4 && i3 || "firstOfMany" === o4 && s2 && n4 || "lastOfMany" === o4 && i3 && n4 || "single" === o4 && !n4) {
            u2 = true;
            break;
          }
          u2 || (l3 = false);
          break;
        }
      }
    }
    l3 && (o2[s] = i2, e2[3 * s] = e2[3 * i2], e2[3 * s + 1] = e2[3 * i2 + 1], e2[3 * s + 2] = e2[3 * i2 + 2], r[3 * s] = r[3 * i2], r[3 * s + 1] = r[3 * i2 + 1], r[3 * s + 2] = r[3 * i2 + 2], s++);
  }
  return s;
}
function d3(e2) {
  switch (e2) {
    default:
    case null:
    case "none":
      return (e3) => e3;
    case "low-four-bit":
      return (e3) => 15 & e3;
    case "high-four-bit":
      return (e3) => (240 & e3) >> 4;
    case "absolute-value":
      return (e3) => Math.abs(e3);
    case "modulo-ten":
      return (e3) => e3 % 10;
  }
}
function p(e2) {
  let r = 0;
  for (const o2 of e2 || []) r |= 1 << o2;
  return r;
}

// node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js
var c3 = class {
  transform(t2) {
    const e2 = this._transform(t2), o2 = [e2.points.buffer, e2.rgb.buffer];
    null != e2.pointIdFilterMap && o2.push(e2.pointIdFilterMap.buffer);
    for (const a3 of e2.attributes) "buffer" in a3.values && n(a3.values.buffer) && a3.values.buffer !== e2.rgb.buffer && o2.push(a3.values.buffer);
    return Promise.resolve({ result: e2, transferList: o2 });
  }
  _transform(r) {
    const e2 = u(r.schema, r.geometryBuffer);
    let o2 = e2.length / 3, a3 = null;
    const i2 = new Array(), f2 = c2(r.primaryAttributeData, e2, o2);
    null != r.primaryAttributeData && f2 && i2.push({ attributeInfo: r.primaryAttributeData.attributeInfo, values: f2 });
    const s = c2(r.modulationAttributeData, e2, o2);
    null != r.modulationAttributeData && s && i2.push({ attributeInfo: r.modulationAttributeData.attributeInfo, values: s });
    let c4 = i(r.rendererInfo, f2, s, o2);
    if (r.filterInfo && r.filterInfo.length > 0 && null != r.filterAttributesData) {
      const f3 = r.filterAttributesData.filter(G).map((t2) => {
        const r2 = c2(t2, e2, o2), a4 = { attributeInfo: t2.attributeInfo, values: r2 };
        return i2.push(a4), a4;
      });
      a3 = new Uint32Array(o2), o2 = f(e2, c4, a3, r.filterInfo, f3);
    }
    for (const t2 of r.userAttributesData) {
      const r2 = c2(t2, e2, o2);
      i2.push({ attributeInfo: t2.attributeInfo, values: r2 });
    }
    3 * o2 < c4.length && (c4 = new Uint8Array(c4.buffer.slice(0, 3 * o2))), I3(e2, o2, r.elevationOffset);
    const A2 = h(e2, o2, I2.fromData(r.obbData), g.fromJSON(r.inSR), g.fromJSON(r.outSR));
    return { obbData: r.obbData, points: A2, rgb: c4, attributes: i2, pointIdFilterMap: a3 };
  }
};
function h(t2, r, o2, n3, u2) {
  if (!o(t2, n3, 0, t2, u2, 0, r)) throw new Error("Can't reproject");
  const l2 = t(o2.center), m = n2(), b = n2(), p2 = t(o2.halfSize);
  O(A, o2.quaternion);
  const c4 = new Float32Array(3 * r);
  for (let e2 = 0; e2 < r; e2++) {
    let r2 = 3 * e2;
    m[0] = t2[r2] - l2[0], m[1] = t2[r2 + 1] - l2[1], m[2] = t2[r2 + 2] - l2[2], Q(b, m, A), p2[0] = Math.max(p2[0], Math.abs(b[0])), p2[1] = Math.max(p2[1], Math.abs(b[1])), p2[2] = Math.max(p2[2], Math.abs(b[2])), c4[r2++] = m[0], c4[r2++] = m[1], c4[r2] = m[2];
  }
  return o2.halfSize = p2, c4;
}
function I3(t2, r, e2) {
  if (0 !== e2) for (let o2 = 0; o2 < r; o2++) t2[3 * o2 + 2] += e2;
}
var A = e();
function g2() {
  return new c3();
}
export {
  g2 as default
};
//# sourceMappingURL=PointCloudWorker-BSZ5D7W2.js.map
