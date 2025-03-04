import "./chunk-G5SEJ77O.js";
import "./chunk-KMAZANGA.js";
import "./chunk-LYANRL5K.js";
import "./chunk-O5FA53B6.js";
import "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import "./chunk-DXGBUQNN.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import "./chunk-H3ILWZIP.js";
import "./chunk-KYXTLOLK.js";
import "./chunk-RQCMOTBU.js";
import {
  tt
} from "./chunk-QD55HJQW.js";
import "./chunk-IRYILD7C.js";
import {
  LitElement,
  S,
  css,
  html,
  nothing2 as nothing,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/components/calcite-fab/customElement.js
var E = {
  button: "button"
};
var F = {
  plus: "plus"
};
var k = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}calcite-button{--tw-shadow: 0 6px 20px -4px rgba(0, 0, 0, .1), 0 4px 12px -2px rgba(0, 0, 0, .08);--tw-shadow-colored: 0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}calcite-button:hover{--tw-shadow: var(--calcite-shadow-md);--tw-shadow-colored: var(--calcite-shadow-md);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}calcite-button:active{--tw-shadow: 0 2px 12px -4px rgba(0, 0, 0, .2), 0 2px 4px -2px rgba(0, 0, 0, .16);--tw-shadow-colored: 0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:host([hidden]){display:none}[hidden]{display:none}`;
var _R = class _R extends LitElement {
  constructor() {
    super(...arguments), this.buttonEl = createRef(), this.appearance = "solid", this.disabled = false, this.icon = F.plus, this.iconFlipRtl = false, this.kind = "brand", this.loading = false, this.scale = "m", this.textEnabled = false;
  }
  // #endregion
  // #region Public Methods
  /** Sets focus on the component. */
  async setFocus() {
    await r(this), tt(this.buttonEl.value);
  }
  // #endregion
  // #region Lifecycle
  load() {
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  // #endregion
  // #region Rendering
  render() {
    const { appearance: o, kind: s, disabled: t, loading: e, scale: i, textEnabled: l, icon: d, label: a, text: n, iconFlipRtl: r2 } = this, c = l ? null : a || n || null;
    return p({ disabled: t, children: html`<calcite-button .appearance=${o === "solid" ? "solid" : "outline-fill"} class=${safeClassMap(E.button)} .disabled=${t} .iconFlipRtl=${r2 ? "start" : null} .iconStart=${d} .kind=${s} .label=${a} .loading=${e} round .scale=${i} title=${c ?? nothing} type=button width=auto ${ref(this.buttonEl)}>${this.textEnabled ? this.text : null}</calcite-button>` });
  }
};
_R.properties = { appearance: 3, disabled: 7, icon: 3, iconFlipRtl: 7, kind: 3, label: 1, loading: 7, scale: 3, text: 1, textEnabled: 7 };
_R.styles = k;
var R = _R;
S("calcite-fab", R);
export {
  R as Fab
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-fab/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-fab-F763GSQ5.js.map
