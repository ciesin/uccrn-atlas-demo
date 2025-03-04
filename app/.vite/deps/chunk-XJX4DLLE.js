import {
  J,
  K,
  U,
  f,
  i,
  q as q2
} from "./chunk-3FH2VPTQ.js";
import {
  $,
  B,
  D as D2,
  W,
  q
} from "./chunk-KMAZANGA.js";
import {
  I,
  T,
  v
} from "./chunk-LYANRL5K.js";
import {
  e
} from "./chunk-LIL4TPKU.js";
import {
  html as html2,
  literal
} from "./chunk-O5FA53B6.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import {
  s as s2
} from "./chunk-KES7E466.js";
import {
  m,
  p
} from "./chunk-4YX4MYVW.js";
import {
  r
} from "./chunk-G7OZSL6E.js";
import {
  createRef,
  ref
} from "./chunk-6Q5AUVK4.js";
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  It,
  Tt,
  bt,
  mt
} from "./chunk-QD55HJQW.js";
import {
  D,
  LitElement,
  S,
  createEvent,
  css,
  html,
  live,
  nothing,
  safeClassMap,
  safeStyleMap,
  stringOrBoolean,
  useWatchAttributes
} from "./chunk-RVUV2HD7.js";

// node_modules/@esri/calcite-components/dist/components/calcite-progress/customElement.js
var m2 = css`:host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%,0,0)}50%{inline-size:40%}to{transform:translate3d(600%,0,0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%,0,0)}50%{inline-size:40%}to{transform:translate3d(-600%,0,0)}}:host([hidden]){display:none}[hidden]{display:none}`;
var _p = class _p extends LitElement {
  constructor() {
    super(...arguments), this.reversed = false, this.type = "determinate", this.value = 0;
  }
  // #endregion
  // #region Rendering
  render() {
    const e2 = this.type === "determinate", i2 = e2 ? { width: `${this.value}%` } : {}, r3 = bt(this.el);
    return html`<div .ariaLabel=${this.label || this.text} .ariaValueMax=${e2 ? "100" : void 0} .ariaValueMin=${e2 ? "0" : void 0} .ariaValueNow=${e2 ? this.value : void 0} role=progressbar><div class="track"><div class=${safeClassMap({
      bar: true,
      indeterminate: this.type === "indeterminate",
      [D.rtl]: r3 === "rtl",
      reversed: this.reversed
    })} style=${safeStyleMap(i2)}></div></div>${this.text ? html`<div class="text">${this.text}</div>` : null}</div>`;
  }
};
_p.properties = { label: 1, reversed: 7, text: 1, type: 3, value: 9 };
_p.styles = m2;
var p2 = _p;
S("calcite-progress", p2);

// node_modules/@esri/calcite-components/dist/chunks/Validation.js
var c = {
  validationContainer: "validation-container"
};
var m3 = ({ scale: i2, status: a3, id: t, icon: n, message: o }) => html`<div class=${safeClassMap(c.validationContainer)}><calcite-input-message aria-live=polite .icon=${n} id=${t ?? nothing} .scale=${i2} .status=${a3}>${o}</calcite-input-message></div>`;

// node_modules/@esri/calcite-components/dist/chunks/input.js
var r2 = ["date", "datetime-local", "month", "number", "range", "time", "week"];
var x = ["email", "password", "search", "tel", "text", "url"];
var u = ["email", "password", "search", "tel", "text", "textarea", "url"];
function a(e2, n, t, c2) {
  const s3 = t.toLowerCase(), i2 = e2[t];
  c2 && i2 != null ? n.setAttribute(s3, `${i2}`) : n.removeAttribute(s3);
}
function m4(e2, n, t) {
  t.type = e2 === "textarea" ? "text" : e2;
  const c2 = r2.includes(e2), s3 = n;
  a(s3, t, "min", c2), a(s3, t, "max", c2), a(s3, t, "step", c2);
  const i2 = u.includes(e2), o = n;
  a(o, t, "minLength", i2), a(o, t, "maxLength", i2);
  const l = x.includes(e2);
  a(o, t, "pattern", l);
}

// node_modules/@esri/calcite-components/dist/components/calcite-input/customElement.js
var a2 = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  numberButtonItem: "number-button-item",
  hasSuffix: "has-suffix",
  hasPrefix: "has-prefix"
};
var k = {
  validationMessage: "inputValidationMessage"
};
var T2 = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
};
var st = {
  action: "action"
};
var lt = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) input[type=file],:host([scale=s]) textarea{min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:.25rem;padding-inline:.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea,:host([scale=m]) input[type=file]{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:.5rem;padding-inline:.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea,:host([scale=l]) input[type=file]{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{position:relative;margin:0;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;text-overflow:ellipsis;border-width:1px;border-style:solid;font-family:inherit;font-weight:var(--calcite-font-weight-normal);border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-background-color, var(--calcite-color-foreground-1));color:var(--calcite-input-text-color, var(--calcite-color-text-1));transition:var(--calcite-animation-timing),block-size 0,outline-offset 0s;-webkit-appearance:none}textarea:placeholder-shown,input:placeholder-shown{text-overflow:ellipsis}::placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-input-placeholder-text-color, var(--calcite-color-text-3))}textarea{border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-prefix input{border-start-start-radius:0;border-end-start-radius:0}.has-suffix input,.element-wrapper:has(.clear-button) input,:host([number-button-type=vertical][type=number]) input,:host([number-button-type=horizontal]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .has-suffix .suffix,:host([number-button-type=vertical][type=number]) .clear-button,:host([number-button-type=horizontal][type=number]) .clear-button{border-start-end-radius:0;border-end-end-radius:0}:host([number-button-type=horizontal]) input{border-start-start-radius:0;border-start-end-radius:0;border-end-start-radius:0;border-end-end-radius:0}.has-prefix .prefix:first-child,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=down]{border-start-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-end-start-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}.has-suffix .suffix,:host([number-button-type=vertical][type=number][read-only]) .has-suffix .suffix,:host([clearable]) .clear-button,:host([number-button-type=horizontal]) .number-button-item[data-adjustment=up]{border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([clearable]) .has-suffix .clear-button{border-end-end-radius:0;border-start-end-radius:0}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px;border-end-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]{border-start-end-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp))}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-input-text-color, var(--calcite-color-text-1))}input[readonly],textarea[readonly]{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-input-background-color, var(--calcite-color-background))}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-input-text-color, var(--calcite-color-text-1))}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}:host([scale=s]) .icon{inset-inline-start:.5rem}:host([scale=m]) .icon{inset-inline-start:.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-icon-color, var(--calcite-color-text-3));z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;outline-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.clear-button calcite-icon{transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.clear-button:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.clear-button:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.clear-button:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.clear-button:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.clear-button:focus{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block;--calcite-progress-background-color: var(--calcite-input-loading-background-color);--calcite-progress-fill-color: var(--calcite-input-loading-fill-color)}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;font-weight:var(--calcite-font-weight-medium);line-height:1;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input))}.prefix{order:2;border-inline-end-width:0px;inline-size:var(--calcite-input-prefix-size, auto);background-color:var(--calcite-input-prefix-background-color, var(--calcite-color-background));color:var(--calcite-input-prefix-text-color, var(--calcite-color-text-2))}.suffix{order:5;border-inline-start-width:0px;inline-size:var(--calcite-input-suffix-size, auto);background-color:var(--calcite-input-suffix-background-color, var(--calcite-color-background));color:var(--calcite-input-suffix-text-color, var(--calcite-color-text-2))}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal{border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));order:1;max-block-size:100%;min-block-size:100%;align-self:stretch;border-width:1px;border-style:solid}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=up]{border-inline-start-width:0px;order:5}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:.5rem;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));background-color:var(--calcite-input-actions-background-color, var(--calcite-color-foreground-1));border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out;color:var(--calcite-input-actions-icon-color, var(--calcite-color-text-3))}.number-button-item:hover{background-color:var(--calcite-input-actions-background-color-hover, var(--calcite-color-foreground-2))}.number-button-item:hover calcite-icon{color:var(--calcite-input-actions-icon-color-hover, var(--calcite-color-text-1))}.number-button-item:active{background-color:var(--calcite-input-actions-background-color-press, var(--calcite-color-foreground-3))}.number-button-item:active calcite-icon{color:var(--calcite-input-actions-icon-color-press, var(--calcite-color-text-1))}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center;border-radius:var(--calcite-input-corner-radius, var(--calcite-corner-radius-sharp));box-shadow:var(--calcite-input-shadow, var(--calcite-shadow-none))}input[type=date]::-webkit-input-placeholder{visibility:hidden!important}:host([type=color]) input{padding:.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;background-color:var(--calcite-color-foreground-1);text-align:center;border-color:var(--calcite-input-border-color, var(--calcite-color-border-input));block-size:initial}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:.5rem}:host([type=file][scale=m]) input{padding-block:.25rem;padding-inline:.75rem}:host([type=file][scale=l]) input{padding-block:.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition-property:background-color,block-size,border-color,box-shadow,color,inset-block-end,inset-block-start,inset-inline-end,inset-inline-start,inset-size,opacity,outline-color,transform;transition-duration:var(--calcite-animation-timing);transition-timing-function:ease-in-out}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:.5rem}:host([scale=s]) .validation-container{padding-block-start:.25rem}::slotted(input[slot=hidden-form-input]){margin:0!important;opacity:0!important;outline:none!important;padding:0!important;position:absolute!important;inset:0!important;transform:none!important;-webkit-appearance:none!important;z-index:-1!important}:host([hidden]){display:none}[hidden]{display:none}`;
var _ct = class _ct extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.actionWrapperEl = createRef(), this.attributeWatch = useWatchAttributes(["autofocus", "enterkeyhint", "inputmode", "spellcheck"], this.handleGlobalAttributesChanged), this.childElType = "input", this.inputWrapperEl = createRef(), this.onHiddenFormInputInput = (t) => {
      t.target.name === this.name && this.setValue({
        value: t.target.value,
        origin: "direct"
      }), this.setFocus(), t.stopPropagation();
    }, this.previousValueOrigin = "initial", this.userChangedValue = false, this._value = "", this.slottedActionElDisabledInternally = false, this.alignment = "start", this.clearable = false, this.disabled = false, this.editingEnabled = false, this.groupSeparator = false, this.iconFlipRtl = false, this.loading = false, this.localeFormat = false, this.messages = s(), this.multiple = false, this.numberButtonType = "vertical", this.readOnly = false, this.required = false, this.scale = "m", this.status = "idle", this.type = "text", this.validity = {
      valid: false,
      badInput: false,
      customError: false,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: false
    }, this.calciteInputChange = createEvent({ cancelable: false }), this.calciteInputInput = createEvent(), this.calciteInternalInputBlur = createEvent({ cancelable: false }), this.calciteInternalInputFocus = createEvent({ cancelable: false }), this.listen("click", this.clickHandler), this.listen("keydown", this.keyDownHandler);
  }
  get isClearable() {
    var _a;
    return !this.isTextarea && (this.clearable || this.type === "search") && ((_a = this.value) == null ? void 0 : _a.length) > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  /** The component's value. */
  get value() {
    return this._value;
  }
  set value(t) {
    const e2 = this._value;
    t !== e2 && (this._value = t, this.valueWatcher(t, e2), t && this._value === "" && this.setValue({
      origin: "reset",
      value: e2
    }));
  }
  // #endregion
  // #region Public Methods
  /** Selects the text of the component's `value`. */
  async selectText() {
    var _a, _b;
    this.type === "number" ? (_a = this.childNumberEl) == null ? void 0 : _a.select() : (_b = this.childEl) == null ? void 0 : _b.select();
  }
  /** Sets focus on the component. */
  async setFocus() {
    await r(this), mt(this.type === "number" ? this.childNumberEl : this.childEl);
  }
  connectedCallback() {
    super.connectedCallback(), this.inlineEditableEl = this.el.closest("calcite-inline-editable"), this.inlineEditableEl && (this.editingEnabled = this.inlineEditableEl.editingEnabled || false), v(this), D2(this), this.el.addEventListener(q, this.onHiddenFormInputInput);
  }
  async load() {
    var _a, _b;
    this.childElType = this.type === "textarea" ? "textarea" : "input", this.maxString = (_a = this.max) == null ? void 0 : _a.toString(), this.minString = (_b = this.min) == null ? void 0 : _b.toString(), this.requestedIcon = Tt(T2, this.icon, this.type), this.setPreviousEmittedValue(this.value), this.setPreviousValue(this.value), this.type === "number" && (this.value === "Infinity" || this.value === "-Infinity" ? (this.displayedValue = this.value, this.previousEmittedValue = this.value) : (this.warnAboutInvalidNumberValue(this.value), this.setValue({
      origin: "connected",
      value: f(this.value) ? this.value : ""
    })));
  }
  willUpdate(t) {
    var _a, _b;
    t.has("max") && (this.maxString = ((_a = this.max) == null ? void 0 : _a.toString()) || null), t.has("min") && (this.minString = ((_b = this.min) == null ? void 0 : _b.toString()) || null), (t.has("icon") || t.has("type") && (this.hasUpdated || this.type !== "text")) && (this.requestedIcon = Tt(T2, this.icon, this.type));
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  disconnectedCallback() {
    super.disconnectedCallback(), T(this), W(this), this.el.removeEventListener(q, this.onHiddenFormInputInput);
  }
  // #endregion
  // #region Private Methods
  handleGlobalAttributesChanged() {
    this.requestUpdate();
  }
  valueWatcher(t, e2) {
    if (!this.userChangedValue) {
      if (this.type === "number" && (t === "Infinity" || t === "-Infinity")) {
        this.displayedValue = t, this.previousEmittedValue = t;
        return;
      }
      this.setValue({
        origin: "direct",
        previousValue: e2,
        value: t == null || t == "" ? "" : this.type === "number" ? f(t) ? t : this.previousValue || "" : t
      }), this.warnAboutInvalidNumberValue(t);
    }
    this.userChangedValue = false;
  }
  keyDownHandler(t) {
    this.readOnly || this.disabled || t.defaultPrevented || (this.isClearable && t.key === "Escape" && (this.clearInputValue(t), t.preventDefault()), t.key === "Enter" && $(this) && t.preventDefault());
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(t, e2, r3, d) {
    const { value: n } = this;
    if (n === "Infinity" || n === "-Infinity")
      return;
    const s3 = t === "up" ? 1 : -1, p3 = this.step === "any" ? 1 : Math.abs(this.step || 1), l = new i(n !== "" ? n : "0").add(`${p3 * s3}`), h = () => typeof r3 == "number" && !isNaN(r3) && l.subtract(`${r3}`).isNegative, f2 = () => typeof e2 == "number" && !isNaN(e2) && !l.subtract(`${e2}`).isNegative, g = h() ? `${r3}` : f2() ? `${e2}` : l.toString();
    this.setValue({
      committing: true,
      nativeEvent: d,
      origin: "user",
      value: g
    });
  }
  clearInputValue(t) {
    this.setValue({
      committing: true,
      nativeEvent: t,
      origin: "user",
      value: ""
    });
  }
  emitChangeIfUserModified() {
    this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue && (this.calciteInputChange.emit(), this.setPreviousEmittedValue(this.value));
  }
  inputBlurHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId), this.calciteInternalInputBlur.emit(), this.emitChangeIfUserModified();
  }
  clickHandler(t) {
    if (this.disabled)
      return;
    const e2 = t.composedPath();
    !e2.includes(this.inputWrapperEl.value) || e2.includes(this.actionWrapperEl.value) || this.setFocus();
  }
  inputFocusHandler() {
    this.calciteInternalInputFocus.emit();
  }
  inputInputHandler(t) {
    this.disabled || this.readOnly || (this.type === "file" && (this.files = this.childEl.files), this.setValue({
      nativeEvent: t,
      origin: "user",
      value: t.target.value
    }));
  }
  inputKeyDownHandler(t) {
    this.disabled || this.readOnly || t.key === "Enter" && this.emitChangeIfUserModified();
  }
  inputNumberInputHandler(t) {
    if (this.disabled || this.readOnly || this.value === "Infinity" || this.value === "-Infinity")
      return;
    const e2 = t.target.value;
    q2.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    };
    const r3 = q2.delocalize(e2);
    t.inputType === "insertFromPaste" ? (f(r3) || t.preventDefault(), this.setValue({
      nativeEvent: t,
      origin: "user",
      value: U(r3)
    }), this.childNumberEl.value = this.displayedValue) : this.setValue({
      nativeEvent: t,
      origin: "user",
      value: r3
    });
  }
  inputNumberKeyDownHandler(t) {
    if (this.type !== "number" || this.disabled || this.readOnly)
      return;
    if (this.value === "Infinity" || this.value === "-Infinity") {
      t.preventDefault(), (t.key === "Backspace" || t.key === "Delete") && this.clearInputValue(t);
      return;
    }
    if (t.key === "ArrowUp") {
      t.preventDefault(), this.nudgeNumberValue("up", t);
      return;
    }
    if (t.key === "ArrowDown") {
      this.nudgeNumberValue("down", t);
      return;
    }
    const e2 = [
      ...e,
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Enter",
      "Escape",
      "Tab"
    ];
    if (t.altKey || t.ctrlKey || t.metaKey)
      return;
    const r3 = t.shiftKey && t.key === "Tab";
    if (e2.includes(t.key) || r3) {
      t.key === "Enter" && this.emitChangeIfUserModified();
      return;
    }
    q2.numberFormatOptions = {
      locale: this.messages._lang,
      numberingSystem: this.numberingSystem,
      useGrouping: this.groupSeparator
    }, !(t.key === q2.decimal && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.indexOf(q2.decimal) === -1)) && (/[eE]/.test(t.key) && (!this.value && !this.childNumberEl.value || this.value && !/[eE]/.test(this.childNumberEl.value)) || t.key === "-" && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.split("-").length <= 2) || t.preventDefault());
  }
  nudgeNumberValue(t, e2) {
    if (e2 instanceof KeyboardEvent && e2.repeat || this.type !== "number")
      return;
    const r3 = this.maxString ? parseFloat(this.maxString) : null, d = this.minString ? parseFloat(this.minString) : null, n = 150;
    this.incrementOrDecrementNumberValue(t, r3, d, e2), this.nudgeNumberValueIntervalId && window.clearInterval(this.nudgeNumberValueIntervalId);
    let s3 = true;
    this.nudgeNumberValueIntervalId = window.setInterval(() => {
      if (s3) {
        s3 = false;
        return;
      }
      this.incrementOrDecrementNumberValue(t, r3, d, e2);
    }, n);
  }
  numberButtonPointerUpAndOutHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  numberButtonPointerDownHandler(t) {
    if (!It(t))
      return;
    t.preventDefault();
    const e2 = t.target.dataset.adjustment;
    this.disabled || this.nudgeNumberValue(e2, t);
  }
  syncHiddenFormInput(t) {
    m4(this.type, this, t);
  }
  setChildElRef(t) {
    this.childEl = t;
  }
  setChildNumberElRef(t) {
    this.childNumberEl = t;
  }
  setInputValue(t) {
    this.type === "number" && this.childNumberEl ? this.childNumberEl.value = t : this.childEl && (this.childEl.value = t);
  }
  setPreviousEmittedValue(t) {
    this.previousEmittedValue = this.normalizeValue(t);
  }
  normalizeValue(t) {
    return this.type === "number" ? f(t) ? t : "" : t;
  }
  setPreviousValue(t) {
    this.previousValue = this.normalizeValue(t);
  }
  setValue({ committing: t = false, nativeEvent: e2, origin: r3, previousValue: d, value: n }) {
    var _a, _b;
    if (this.setPreviousValue(d ?? this.value), this.previousValueOrigin = r3, this.type === "number") {
      q2.numberFormatOptions = {
        locale: this.messages._lang,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator,
        signDisplay: "never"
      };
      const s3 = ((_a = this.previousValue) == null ? void 0 : _a.length) > n.length || ((_b = this.value) == null ? void 0 : _b.length) > n.length, p3 = n.charAt(n.length - 1) === ".", m5 = p3 && s3 ? n : K(n), l = n && !m5 ? f(this.previousValue) ? this.previousValue : "" : m5;
      let h = q2.localize(l);
      r3 !== "connected" && !p3 && (h = J(h, l, q2)), this.displayedValue = p3 && s3 ? `${h}${q2.decimal}` : h, this.userChangedValue = r3 === "user" && this.value !== l, this.value = ["-", "."].includes(l) ? "" : l;
    } else
      this.userChangedValue = r3 === "user" && this.value !== n, this.value = n;
    r3 === "direct" && (this.setInputValue(n), this.previousEmittedValue = n), e2 && (this.calciteInputInput.emit().defaultPrevented ? (this.value = this.previousValue, this.displayedValue = this.type === "number" ? q2.localize(this.previousValue) : this.previousValue) : t && this.emitChangeIfUserModified());
  }
  inputKeyUpHandler() {
    window.clearInterval(this.nudgeNumberValueIntervalId);
  }
  warnAboutInvalidNumberValue(t) {
    this.type === "number" && t && !f(t) && console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`);
  }
  // #endregion
  // #region Rendering
  render() {
    const t = bt(this.el), e2 = html`<div class=${safeClassMap(a2.loader)}><calcite-progress .label=${this.messages.loading} type=indeterminate></calcite-progress></div>`, r3 = html`<button .ariaLabel=${this.messages.clear} class=${safeClassMap(a2.clearButton)} .disabled=${this.disabled || this.readOnly} @click=${this.clearInputValue} tabindex=-1 type=button><calcite-icon icon=x .scale=${s2(this.scale)}></calcite-icon></button>`, d = html`<calcite-icon class=${safeClassMap(a2.inputIcon)} .flipRtl=${this.iconFlipRtl} .icon=${this.requestedIcon} .scale=${s2(this.scale)}></calcite-icon>`, n = this.numberButtonType === "horizontal", s3 = html`<button aria-hidden=true class=${safeClassMap({
      [a2.numberButtonItem]: true,
      [a2.buttonItemHorizontal]: n
    })} data-adjustment=up .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-up .scale=${s2(this.scale)}></calcite-icon></button>`, p3 = html`<button aria-hidden=true class=${safeClassMap({
      [a2.numberButtonItem]: true,
      [a2.buttonItemHorizontal]: n
    })} data-adjustment=down .disabled=${this.disabled || this.readOnly} @pointerdown=${this.numberButtonPointerDownHandler} @pointerout=${this.numberButtonPointerUpAndOutHandler} @pointerup=${this.numberButtonPointerUpAndOutHandler} tabindex=-1 type=button><calcite-icon icon=chevron-down .scale=${s2(this.scale)}></calcite-icon></button>`, m5 = html`<div class=${safeClassMap(a2.numberButtonWrapper)}>${s3}${p3}</div>`, l = html`<div class=${safeClassMap(a2.prefix)}>${this.prefixText}</div>`, h = html`<div class=${safeClassMap(a2.suffix)}>${this.suffixText}</div>`, f2 = this.el.autofocus, g = this.el.enterKeyHint, w = this.el.inputMode, B2 = this.type === "number" ? keyed("localized-input", html`<input accept=${this.accept ?? nothing} aria-errormessage=${k.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${I(this)} autocomplete=${this.autocomplete ?? nothing} .autofocus=${f2} value=${this.defaultValue ?? nothing} .disabled=${this.disabled ? true : null} enterkeyhint=${g ?? nothing} inputmode=${w ?? nothing} maxlength=${this.maxLength ?? nothing} minlength=${this.minLength ?? nothing} .multiple=${this.multiple} name=${nothing} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputNumberInputHandler} @keydown=${this.inputNumberKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? nothing} placeholder=${(this.placeholder || "") ?? nothing} .readOnly=${this.readOnly} type=text .value=${live(this.displayedValue ?? "")} ${ref(this.setChildNumberElRef)}>`) : null, $2 = this.childElType === "input" ? literal`input` : literal`textarea`, O = this.type !== "number" ? html2`<${$2} accept=${this.accept ?? nothing} aria-errormessage=${k.validationMessage} .ariaInvalid=${this.status === "invalid"} .ariaLabel=${I(this)} autocomplete=${this.autocomplete ?? nothing} .autofocus=${f2} class=${safeClassMap({
      [a2.editingEnabled]: this.editingEnabled,
      [a2.inlineChild]: !!this.inlineEditableEl
    })} .defaultValue=${this.defaultValue ?? ""} .disabled=${this.disabled ? true : null} enterkeyhint=${g ?? nothing} inputmode=${w ?? nothing} max=${this.maxString ?? nothing} maxlength=${this.maxLength ?? nothing} min=${this.minString ?? nothing} minlength=${this.minLength ?? nothing} .multiple=${this.multiple} name=${this.name ?? nothing} @blur=${this.inputBlurHandler} @focus=${this.inputFocusHandler} @input=${this.inputInputHandler} @keydown=${this.inputKeyDownHandler} @keyup=${this.inputKeyUpHandler} pattern=${this.pattern ?? nothing} placeholder=${(this.placeholder || "") ?? nothing} .readOnly=${this.readOnly} .required=${this.required ? true : null} spellcheck=${this.el.spellcheck ?? nothing} step=${this.step ?? nothing} tabindex=${(this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null) ?? nothing} type=${this.type ?? nothing} .value=${live(this.value ?? "")} ${ref(this.setChildElRef)}></${$2}>` : null;
    return p({ disabled: this.disabled, children: html`<div class=${safeClassMap({
      [a2.inputWrapper]: true,
      [D.rtl]: t === "rtl",
      [a2.hasSuffix]: this.suffixText,
      [a2.hasPrefix]: this.prefixText
    })} ${ref(this.inputWrapperEl)}>${this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? p3 : null}${this.prefixText ? l : null}<div class=${safeClassMap(a2.wrapper)}>${B2}${O}${this.isClearable ? r3 : null}${this.requestedIcon ? d : null}${this.loading ? e2 : null}</div><div class=${safeClassMap(a2.actionWrapper)} ${ref(this.actionWrapperEl)}><slot name=${st.action}></slot></div>${this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly ? m5 : null}${this.suffixText ? h : null}${this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? s3 : null}${B({ component: this })}</div>${this.validationMessage && this.status === "invalid" ? m3({ icon: this.validationIcon, id: k.validationMessage, message: this.validationMessage, scale: this.scale, status: this.status }) : null}` });
  }
};
_ct.properties = { displayedValue: 16, slottedActionElDisabledInternally: 16, accept: 1, alignment: 3, autocomplete: 0, clearable: 7, disabled: 7, editingEnabled: 7, files: 0, form: 3, groupSeparator: 7, icon: [3, { converter: stringOrBoolean }], iconFlipRtl: 7, label: 1, loading: 7, localeFormat: 5, max: 11, maxLength: 11, messageOverrides: 0, min: 11, minLength: 11, multiple: 5, name: 3, numberButtonType: 3, numberingSystem: 3, pattern: 1, placeholder: 1, prefixText: 1, readOnly: 7, required: 7, scale: 3, status: 3, step: 3, suffixText: 1, type: 3, validationIcon: [3, { converter: stringOrBoolean }], validationMessage: 1, validity: 0, value: 1 };
_ct.styles = lt;
var ct = _ct;
S("calcite-input", ct);

export {
  ct
};
/*! Bundled license information:

@esri/calcite-components/dist/components/calcite-progress/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/Validation.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/input.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-input/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=chunk-XJX4DLLE.js.map
