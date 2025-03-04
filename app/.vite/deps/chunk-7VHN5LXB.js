import {
  r
} from "./chunk-UPNK3SFT.js";
import {
  t
} from "./chunk-DSDGAHN5.js";

// node_modules/@arcgis/core/views/webgl/ProgramCache.js
var s = class {
  constructor(r2) {
    this._rctx = r2, this._store = new t();
  }
  dispose() {
    this._store.forAll((t2) => t2.dispose()), this._store.clear();
  }
  acquire(t2, s2, e2, o) {
    const i = this._store.get(t2, s2);
    if (null != i) return i.ref(), i;
    const c = new r(this._rctx, t2, s2, e2, o);
    return c.ref(), this._store.set(t2, s2, c), c;
  }
  get test() {
  }
};

// node_modules/@arcgis/core/views/webgl/programUtils.js
function e(e2) {
  const { options: n2, value: o } = e2;
  return "number" == typeof n2[o];
}
function n(n2) {
  let o = "";
  for (const t2 in n2) {
    const i = n2[t2];
    if ("boolean" == typeof i) i && (o += `#define ${t2}
`);
    else if ("number" == typeof i) o += `#define ${t2} ${i.toFixed()}
`;
    else if ("object" == typeof i) if (e(i)) {
      const { value: e2, options: n3, namespace: f } = i, s2 = f ? `${f}_` : "";
      for (const t3 in n3) o += `#define ${s2}${t3} ${n3[t3].toFixed()}
`;
      o += `#define ${t2} ${s2}${e2}
`;
    } else {
      const e2 = i.options;
      let n3 = 0;
      for (const t3 in e2) o += `#define ${e2[t3]} ${(n3++).toFixed()}
`;
      o += `#define ${t2} ${e2[i.value]}
`;
    }
  }
  return o;
}

export {
  s,
  n
};
//# sourceMappingURL=chunk-7VHN5LXB.js.map
