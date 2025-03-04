import {
  a,
  c,
  d,
  h,
  i as i2,
  o
} from "./chunk-GGM626BI.js";
import "./chunk-XJX4DLLE.js";
import {
  q
} from "./chunk-3FH2VPTQ.js";
import "./chunk-XDGJIBCU.js";
import "./chunk-KMAZANGA.js";
import "./chunk-LYANRL5K.js";
import "./chunk-7YNOTTY2.js";
import {
  debounce_default,
  escapeRegExp_default,
  forIn_default
} from "./chunk-75ZAPGBC.js";
import "./chunk-LIL4TPKU.js";
import "./chunk-O5FA53B6.js";
import {
  keyed
} from "./chunk-RWVOOLIP.js";
import "./chunk-KES7E466.js";
import {
  m,
  p as p2
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
import {
  s
} from "./chunk-KYXTLOLK.js";
import {
  b
} from "./chunk-RQCMOTBU.js";
import {
  p,
  ut
} from "./chunk-QD55HJQW.js";
import {
  i
} from "./chunk-IRYILD7C.js";
import {
  LitElement,
  M,
  S,
  createEvent,
  css,
  html,
  safeClassMap
} from "./chunk-RVUV2HD7.js";
import "./chunk-JVWSFFO4.js";

// node_modules/@esri/calcite-components/dist/chunks/resources.js
var t = {
  container: "container",
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};
var n = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
};

// node_modules/@esri/calcite-components/dist/components/calcite-stack/customElement.js
var r2 = css`:host([disabled]) .content{cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) .content *,:host([disabled]) .content ::slotted(*){pointer-events:none}:host{display:flex;flex:1 1 0%;flex-direction:column}.container{display:flex;flex:1 1 auto;align-items:stretch;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-2)}.content{display:flex;flex:1 1 auto;flex-direction:column;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;padding-inline:var(--calcite-stack-padding-inline, .75rem);padding-block:var(--calcite-stack-padding-block, .5rem)}.content-start{justify-content:flex-start}.content-end{justify-content:flex-end}.content-start,.content-end{flex:0 1 auto}.content-start ::slotted(calcite-icon),.content-end ::slotted(calcite-icon){margin-inline:.75rem;align-self:center}.actions-start,.actions-end,.content-start,.content-end{display:flex;align-items:center}.actions-start ::slotted(calcite-action),.actions-start ::slotted(calcite-action-menu),.actions-start ::slotted(calcite-handle),.actions-start ::slotted(calcite-dropdown),.actions-end ::slotted(calcite-action),.actions-end ::slotted(calcite-action-menu),.actions-end ::slotted(calcite-handle),.actions-end ::slotted(calcite-dropdown){align-self:stretch;color:inherit}:host([hidden]){display:none}[hidden]{display:none}`;
var _h = class _h extends LitElement {
  constructor() {
    super(...arguments), this.hasActionsEnd = false, this.hasActionsStart = false, this.hasContentEnd = false, this.hasContentStart = false, this.disabled = false;
  }
  // #endregion
  // #region Private Methods
  handleActionsStartSlotChange(t2) {
    this.hasActionsStart = ut(t2);
  }
  handleActionsEndSlotChange(t2) {
    this.hasActionsEnd = ut(t2);
  }
  handleContentStartSlotChange(t2) {
    this.hasContentStart = ut(t2);
  }
  handleContentEndSlotChange(t2) {
    this.hasContentEnd = ut(t2);
  }
  // #endregion
  // #region Rendering
  renderActionsStart() {
    const { hasActionsStart: t2 } = this;
    return keyed("actions-start-container", html`<div class=${safeClassMap(t.actionsStart)} .hidden=${!t2}><slot name=${n.actionsStart} @slotchange=${this.handleActionsStartSlotChange}></slot></div>`);
  }
  renderActionsEnd() {
    const { hasActionsEnd: t2 } = this;
    return keyed("actions-end-container", html`<div class=${safeClassMap(t.actionsEnd)} .hidden=${!t2}><slot name=${n.actionsEnd} @slotchange=${this.handleActionsEndSlotChange}></slot></div>`);
  }
  renderContentStart() {
    const { hasContentStart: t2 } = this;
    return html`<div class=${safeClassMap(t.contentStart)} .hidden=${!t2}><slot name=${n.contentStart} @slotchange=${this.handleContentStartSlotChange}></slot></div>`;
  }
  renderDefaultContent() {
    return html`<div class=${safeClassMap(t.content)}><slot></slot></div>`;
  }
  renderContentEnd() {
    const { hasContentEnd: t2 } = this;
    return html`<div class=${safeClassMap(t.contentEnd)} .hidden=${!t2}><slot name=${n.contentEnd} @slotchange=${this.handleContentEndSlotChange}></slot></div>`;
  }
  render() {
    return html`<div class=${safeClassMap(t.container)}>${this.renderActionsStart()}${this.renderContentStart()}${this.renderDefaultContent()}${this.renderContentEnd()}${this.renderActionsEnd()}</div>`;
  }
};
_h.properties = { hasActionsEnd: 16, hasActionsStart: 16, hasContentEnd: 16, hasContentStart: 16, disabled: 7 };
_h.styles = r2;
var h2 = _h;
S("calcite-stack", h2);

// node_modules/@esri/calcite-components/dist/chunks/filter.js
var y = (n2, i4, u2) => {
  const c2 = escapeRegExp_default(i4), a2 = new RegExp(c2, "i");
  n2.length === 0 && console.warn(`No data was passed to the filter function.
    The data argument should be an array of objects`);
  const o2 = (t2, f2, s2) => {
    if ((t2 == null ? void 0 : t2.constant) || (t2 == null ? void 0 : t2.filterDisabled))
      return true;
    let r3 = false;
    return forIn_default(t2, (e, l) => {
      typeof e == "function" || e == null || s2 && !s2.includes(l) || (Array.isArray(e) || typeof e == "object" && e !== null ? o2(e, f2) && (r3 = true) : f2.test(e) && (r3 = true));
    }), r3;
  };
  return n2.filter((t2) => o2(t2, a2, u2));
};

// node_modules/@esri/calcite-components/dist/components/calcite-filter/customElement.js
var g = {
  container: "container"
};
var y2 = {
  search: "search"
};
var x = css`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;inline-size:100%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{display:flex;inline-size:100%}:host([scale=s]) .container{padding:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding:var(--calcite-spacing-md)}:host([scale=l]) .container{padding:var(--calcite-spacing-lg)}label{position:relative;margin-block:0px;display:flex;inline-size:100%;align-items:center;overflow:hidden}input[type=text]{margin-block-end:.25rem;inline-size:100%;border-style:none;background-color:transparent;padding-block:.25rem;font-family:inherit;font-size:var(--calcite-font-size--2);line-height:1rem;color:var(--calcite-color-text-1);padding-inline-end:.25rem;padding-inline-start:1.5rem;transition:padding var(--calcite-animation-timing),box-shadow var(--calcite-animation-timing)}input[type=text]::-ms-clear{display:none}calcite-input{inline-size:100%}.search-icon{position:absolute;display:flex;color:var(--calcite-color-text-2);inset-inline-start:0;transition:inset-inline-start var(--calcite-animation-timing),inset-inline-end var(--calcite-animation-timing),opacity var(--calcite-animation-timing)}input[type=text]:focus{border-color:var(--calcite-color-brand);outline:2px solid transparent;outline-offset:2px;padding-inline:.25rem}input[type=text]:focus~.search-icon{inset-inline-start:-1rem;opacity:0}.clear-button{display:flex;cursor:pointer;align-items:center;border-width:0px;background-color:transparent;color:var(--calcite-color-text-2)}.clear-button:hover,.clear-button:focus{color:var(--calcite-color-text-1)}:host([hidden]){display:none}[hidden]{display:none}`;
var _k = class _k extends LitElement {
  constructor() {
    super(...arguments), this.filterDebounced = debounce_default((e, t2 = false, i4) => this.updateFiltered(y(this.items ?? [], e, this.filterProps), t2, i4), M.filter), this.textInput = createRef(), this._value = "", this.disabled = false, this.filteredItems = [], this.items = [], this.messages = s(), this.scale = "m", this.calciteFilterChange = createEvent({ cancelable: false });
  }
  /** The component's value. */
  get value() {
    return this._value;
  }
  set value(e) {
    const t2 = this._value;
    e !== t2 && (this._value = e, this.valueHandler(e));
  }
  // #endregion
  // #region Public Methods
  /**
   * Performs a filter on the component.
   *
   * This method can be useful because filtering is delayed and asynchronous.
   *
   * @param {string} value - The filter text value.
   * @returns {Promise<void>}
   */
  async filter(e = this.value) {
    return new Promise((t2) => {
      this.value = e, this.updateFiltered(y(this.items ?? [], e, this.filterProps), false, t2);
    });
  }
  /** Sets focus on the component. */
  async setFocus() {
    var _a;
    return await r(this), (_a = this.textInput.value) == null ? void 0 : _a.setFocus();
  }
  // #endregion
  // #region Lifecycle
  async load() {
    this.updateFiltered(y(this.items ?? [], this.value, this.filterProps));
  }
  willUpdate(e) {
    var _a;
    (e.has("items") && (this.hasUpdated || ((_a = this.items) == null ? void 0 : _a.length) > 0) || e.has("filterProps")) && this.filterDebounced(this.value);
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.filterDebounced.cancel();
  }
  // #endregion
  // #region Private Methods
  valueHandler(e) {
    this.filterDebounced(e);
  }
  inputHandler(e) {
    const t2 = e.target;
    this.value = t2.value, this.filterDebounced(t2.value, true);
  }
  keyDownHandler(e) {
    e.defaultPrevented || (e.key === "Escape" && (this.clear(), e.preventDefault()), e.key === "Enter" && e.preventDefault());
  }
  clear() {
    this.value = "", this.filterDebounced("", true), this.setFocus();
  }
  updateFiltered(e, t2 = false, i4) {
    this.filteredItems = e, t2 && this.calciteFilterChange.emit(), i4 == null ? void 0 : i4();
  }
  // #endregion
  // #region Rendering
  render() {
    const { disabled: e, scale: t2 } = this;
    return p2({ disabled: e, children: html`<div class=${safeClassMap(g.container)}><label><calcite-input clearable .disabled=${e} .icon=${y2.search} .label=${this.label ?? this.messages.label} .messageOverrides=${{ clear: this.messages.clear }} @keydown=${this.keyDownHandler} @calciteInputInput=${this.inputHandler} .placeholder=${this.placeholder} .scale=${t2} type=text .value=${this.value} ${ref(this.textInput)}></calcite-input></label></div>` });
  }
};
_k.properties = { disabled: 7, filterProps: 0, filteredItems: 0, items: 0, label: 1, messageOverrides: 0, placeholder: 1, scale: 3, value: 1 };
_k.shadowRootOptions = { mode: "open", delegatesFocus: true };
_k.styles = x;
var k = _k;
S("calcite-filter", k);

// node_modules/sortablejs/modular/sortable.esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i4 = 1; i4 < arguments.length; i4++) {
    var source = arguments[i4] != null ? arguments[i4] : {};
    if (i4 % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i4 = 1; i4 < arguments.length; i4++) {
      var source = arguments[i4];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i4;
  for (i4 = 0; i4 < sourceKeys.length; i4++) {
    key = sourceKeys[i4];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i4;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i4 = 0; i4 < sourceSymbolKeys.length; i4++) {
      key = sourceSymbolKeys[i4];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.15.6";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector) return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css2(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css2(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i4 = 0, n2 = list.length;
    if (iterator) {
      for (; i4 < n2; i4++) {
        iterator(list[i4], i4);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css2(container, "transform") !== "none" || relativeToNonStaticParent && css2(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css2(container, "border-top-width"));
          left -= containerRect.left + parseInt(css2(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    if (parentSide === "top" || parentSide === "left") {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i4 = 0, children = el.children;
  while (i4 < children.length) {
    if (children[i4].style.display !== "none" && children[i4] !== Sortable.ghost && (includeDragEl || children[i4] !== Sortable.dragged) && closest(children[i4], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i4];
      }
      currentChild++;
    }
    i4++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css2(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i4 in arr) {
    if (!arr.hasOwnProperty(i4)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i4][key]) return Number(i4);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css2(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x3, y3) {
  el.scrollLeft += x3;
  el.scrollTop += y3;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function getChildContainingRectFromElement(container, options, ghostEl2) {
  var rect = {};
  Array.from(container.children).forEach(function(child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl2) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css2(child, "display") === "none" || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function") callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function") callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function") callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css2(target, "transition", "");
        css2(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css2(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css2(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css2(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css2(target, "transition", "");
          css2(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p3) {
      if (p3.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName]) return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2)) continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function") return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName]) return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable) return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl;
var parentEl;
var ghostEl;
var rootEl;
var nextEl;
var lastDownEl;
var cloneEl;
var cloneHidden;
var oldIndex;
var newIndex;
var oldDraggableIndex;
var newDraggableIndex;
var activeGroup;
var putSortable;
var awaitingDragStarted = false;
var ignoreNextClick = false;
var sortables = [];
var tapEvt;
var touchEvt;
var lastDx;
var lastDy;
var tapDistanceLeft;
var tapDistanceTop;
var moved;
var lastTarget;
var lastDirection;
var pastFirstInvertThresh = false;
var isCircumstantialInvert = false;
var targetMoveDistance;
var ghostRelativeParent;
var ghostRelativeParentInitialScroll = [];
var _silent = false;
var savedInputChecked = [];
var documentExists = typeof document !== "undefined";
var PositionGhostAbsolutely = IOS;
var CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float";
var supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div");
var supportCssPointerEvents = function() {
  if (!documentExists) return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
}();
var _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css2(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css2(child1), secondChildCSS = child2 && css2(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
};
var _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
};
var _detectNearestEmptySortable = function _detectNearestEmptySortable2(x3, y3) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable), insideHorizontally = x3 >= rect.left - threshold && x3 <= rect.right + threshold, insideVertically = y3 >= rect.top - threshold && y3 <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
};
var _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
};
var _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css2(ghostEl, "display", "none");
  }
};
var _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css2(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i4 in evt) {
        if (evt.hasOwnProperty(i4)) {
          event[i4] = evt[i4];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable) return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, "pointerup", _this._onDrop);
        !this.nativeDraggable && on(ownerDocument, "pointercancel", _this._onDrop);
      } else {
        on(ownerDocument, "mouseup", _this._onDrop);
        on(ownerDocument, "touchend", _this._onDrop);
        on(ownerDocument, "touchcancel", _this._onDrop);
      }
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        if (options.supportPointer) {
          on(ownerDocument, "pointerup", _this._disableDelayedDrag);
          on(ownerDocument, "pointercancel", _this._disableDelayedDrag);
        } else {
          on(ownerDocument, "mouseup", _this._disableDelayedDrag);
          on(ownerDocument, "touchend", _this._disableDelayedDrag);
          on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        }
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "pointerup", this._disableDelayedDrag);
    off(ownerDocument, "pointercancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css2(ghostEl, "webkitTransform", cssMatrix);
        css2(ghostEl, "mozTransform", cssMatrix);
        css2(ghostEl, "msTransform", cssMatrix);
        css2(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css2(ghostRelativeParent, "position") === "static" && css2(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css2(ghostEl, "transition", "");
      css2(ghostEl, "transform", "");
      css2(ghostEl, "box-sizing", "border-box");
      css2(ghostEl, "margin", 0);
      css2(ghostEl, "top", rect.top);
      css2(ghostEl, "left", rect.left);
      css2(ghostEl, "width", rect.width);
      css2(ghostEl, "height", rect.height);
      css2(ghostEl, "opacity", "0.8");
      css2(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css2(ghostEl, "zIndex", "100000");
      css2(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css2(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css2(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css2(document.body, "user-select", "none");
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css2(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "pointercancel", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css2(document.body, "user-select", "");
    }
    css2(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i4 = 0, n2 = children.length, options = this.options;
    for (; i4 < n2; i4++) {
      el = children[i4];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i4) {
      var el = rootEl2.children[i4];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled) return;
      css2(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled) return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css2(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i4 = str.length, sum = 0;
  while (i4--) {
    sum += str.charCodeAt(i4);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css: css2,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild,
  expando
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array) plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [];
var scrollEl;
var scrollRootEl;
var scrolling = false;
var lastAutoScrollX;
var lastAutoScrollY;
var touchEvt$1;
var pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x3 = (evt.touches ? evt.touches[0] : evt).clientX, y3 = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x3, y3);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x3 !== lastAutoScrollX || y3 !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x3, y3), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x3;
          lastAutoScrollY = y3;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll) return;
  var x3 = (evt.touches ? evt.touches[0] : evt).clientX, y3 = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css2(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x3) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x3) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y3) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y3) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i4 = 0; i4 <= layersOut; i4++) {
        if (!autoScrolls[i4]) {
          autoScrolls[i4] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval((function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }).bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var sortable_esm_default = Sortable;

// node_modules/@esri/calcite-components/dist/chunks/sortableComponent.js
var d2 = /* @__PURE__ */ new Set();
var u = {
  ghostClass: "calcite-sortable--ghost",
  chosenClass: "calcite-sortable--chosen",
  dragClass: "calcite-sortable--drag",
  fallbackClass: "calcite-sortable--fallback"
};
function I(a2) {
  if (i3(a2))
    return;
  D(a2), d2.add(a2);
  const c2 = "id", { group: n2, handleSelector: s2, dragSelector: b2 } = a2;
  a2.sortable = sortable_esm_default.create(a2.el, {
    dataIdAttr: c2,
    ...u,
    ...!!b2 && { draggable: b2 },
    ...!!n2 && {
      group: {
        name: n2,
        ...!!a2.canPull && {
          pull: (r3, e, l, { newDraggableIndex: t2, oldDraggableIndex: o2 }) => a2.canPull({
            toEl: r3.el,
            fromEl: e.el,
            dragEl: l,
            newIndex: t2,
            oldIndex: o2
          })
        },
        ...!!a2.canPut && {
          put: (r3, e, l, { newDraggableIndex: t2, oldDraggableIndex: o2 }) => a2.canPut({
            toEl: r3.el,
            fromEl: e.el,
            dragEl: l,
            newIndex: t2,
            oldIndex: o2
          })
        }
      }
    },
    onMove: ({ from: r3, dragged: e, to: l, related: t2 }) => {
      a2.onDragMove && a2.onDragMove({ fromEl: r3, dragEl: e, toEl: l, relatedEl: t2 });
    },
    handle: s2,
    filter: `${s2}[disabled]`,
    onStart: ({ from: r3, item: e, to: l, newDraggableIndex: t2, oldDraggableIndex: o2 }) => {
      g2.active = true, S2(), a2.onDragStart({ fromEl: r3, dragEl: e, toEl: l, newIndex: t2, oldIndex: o2 });
    },
    onEnd: ({ from: r3, item: e, to: l, newDraggableIndex: t2, oldDraggableIndex: o2 }) => {
      g2.active = false, x2(), a2.onDragEnd({ fromEl: r3, dragEl: e, toEl: l, newIndex: t2, oldIndex: o2 });
    },
    onSort: ({ from: r3, item: e, to: l, newDraggableIndex: t2, oldDraggableIndex: o2 }) => {
      a2.onDragSort({ fromEl: r3, dragEl: e, toEl: l, newIndex: t2, oldIndex: o2 });
    }
  });
}
function D(a2) {
  var _a;
  i3(a2) || (d2.delete(a2), (_a = a2.sortable) == null ? void 0 : _a.destroy(), a2.sortable = null);
}
var g2 = { active: false };
function i3(a2) {
  return a2.dragEnabled && g2.active;
}
function S2() {
  Array.from(d2).forEach((a2) => a2.onGlobalDragStart());
}
function x2() {
  Array.from(d2).forEach((a2) => a2.onGlobalDragEnd());
}

// node_modules/@esri/calcite-components/dist/components/calcite-list/customElement.js
var f = {
  container: "container",
  table: "table",
  scrim: "scrim",
  stack: "stack",
  tableContainer: "table-container",
  sticky: "sticky-pos",
  assistiveText: "assistive-text"
};
var E = {
  filterNoResults: "filter-no-results",
  filterActionsStart: "filter-actions-start",
  filterActionsEnd: "filter-actions-end"
};
var q2 = css`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{position:relative;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.table-container{box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;background-color:transparent}.table-container *{box-sizing:border-box}.table{inline-size:100%}.stack{--calcite-stack-padding-inline: 0;--calcite-stack-padding-block: 0}.sticky-pos{position:sticky;inset-block-start:0px;z-index:var(--calcite-z-index-sticky);background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1))}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}`;
var B = `${o}, ${i2}`;
var _W = class _W extends LitElement {
  // #endregion
  // #region Lifecycle
  constructor() {
    super(), this.dragSelector = i2, this.focusableItems = [], this.handleSelector = "calcite-sort-handle", this.listItems = [], this.listItemGroups = [], this.mutationObserver = b("mutation", () => {
      this.willPerformFilter = true, this.updateListItems();
    }), this.updateListItems = debounce_default(() => {
      this.updateGroupItems();
      const { selectionAppearance: t2, selectionMode: e, interactionMode: i4, dragEnabled: l, el: s2, filterEl: n2, moveToItems: a2, displayMode: r3, scale: c2 } = this, m2 = Array.from(this.el.querySelectorAll(i2));
      if (m2.forEach((o2) => {
        o2.scale = c2, o2.selectionAppearance = t2, o2.selectionMode = e, o2.interactionMode = i4, o2.closest(c) === s2 && (o2.moveToItems = a2.filter((S3) => S3.element !== s2 && !o2.contains(S3.element)), o2.dragHandle = l, o2.displayMode = r3);
      }), this.parentListEl) {
        this.setUpSorting();
        return;
      }
      this.listItems = m2, this.filterEnabled && this.willPerformFilter && (this.willPerformFilter = false, this.dataForFilter = this.getItemData(), n2 && (n2.items = this.dataForFilter, this.filterAndUpdateData())), this.visibleItems = this.listItems.filter((o2) => !o2.closed && !o2.hidden), this.updateFilteredItems(), this.borderItems(), this.focusableItems = this.filteredItems.filter((o2) => !o2.disabled), this.setActiveListItem(), this.updateSelectedItems(), this.setUpSorting();
    }, M.nextTick), this.visibleItems = [], this.willFilterEmit = false, this.willPerformFilter = false, this.dataForFilter = [], this.hasFilterActionsEnd = false, this.hasFilterActionsStart = false, this.hasFilterNoResults = false, this.moveToItems = [], this.disabled = false, this.dragEnabled = false, this.filterEnabled = false, this.filteredData = [], this.filteredItems = [], this.interactionMode = "interactive", this.loading = false, this.messages = s({ blocking: true }), this.displayMode = "flat", this.scale = "m", this.selectedItems = [], this.selectionAppearance = "icon", this.selectionMode = "none", this.calciteInternalListDefaultSlotChange = createEvent({ cancelable: false }), this.calciteListChange = createEvent({ cancelable: false }), this.calciteListDragEnd = createEvent({ cancelable: false }), this.calciteListDragStart = createEvent({ cancelable: false }), this.calciteListFilter = createEvent({ cancelable: false }), this.calciteListOrderChange = createEvent({ cancelable: false }), this.listen("calciteInternalListItemToggle", this.handleCalciteListItemToggle), this.listen("calciteInternalFocusPreviousItem", this.handleCalciteInternalFocusPreviousItem), this.listen("calciteInternalListItemActive", this.handleCalciteInternalListItemActive), this.listen("calciteListItemSelect", this.handleCalciteListItemSelect), this.listen("calciteInternalAssistiveTextChange", this.handleCalciteInternalAssistiveTextChange), this.listen("calciteSortHandleReorder", this.handleSortReorder), this.listen("calciteSortHandleMove", this.handleSortMove), this.listen("calciteInternalListItemSelect", this.handleCalciteInternalListItemSelect), this.listen("calciteInternalListItemSelectMultiple", this.handleCalciteInternalListItemSelectMultiple), this.listen("calciteInternalListItemChange", this.handleCalciteInternalListItemChange), this.listen("calciteInternalListItemGroupDefaultSlotChange", this.handleCalciteInternalListItemGroupDefaultSlotChange);
  }
  get hasActiveFilter() {
    return this.filterEnabled && this.filterText && this.filteredItems.length !== this.visibleItems.length;
  }
  get showNoResultsContainer() {
    return this.filterEnabled && this.filterText && this.hasFilterNoResults && this.visibleItems.length && !this.filteredItems.length;
  }
  // #endregion
  // #region Public Methods
  /**
   * Sets focus on the component's first focusable element.
   *
   * @returns {Promise<void>}
   */
  async setFocus() {
    var _a, _b;
    return await r(this), this.filterEnabled ? (_a = this.filterEl) == null ? void 0 : _a.setFocus() : (_b = this.focusableItems.find((t2) => t2.active)) == null ? void 0 : _b.setFocus();
  }
  connectedCallback() {
    super.connectedCallback(), this.connectObserver(), this.willPerformFilter = true, this.updateListItems(), this.setUpSorting(), this.setParentList(), this.setListItemGroups();
  }
  async load() {
    this.handleInteractionModeWarning();
  }
  /**
   * TODO: [MIGRATION] Consider inlining some of the watch functions called inside of this method to reduce boilerplate code
   *
   * @param changes
   */
  willUpdate(t2) {
    (t2.has("filterText") || t2.has("filterProps") || t2.has("filterPredicate")) && this.performFilter(), (t2.has("filterEnabled") && (this.hasUpdated || this.filterEnabled !== false) || t2.has("group") || t2.has("dragEnabled") && (this.hasUpdated || this.dragEnabled !== false) || t2.has("selectionMode") && (this.hasUpdated || this.selectionMode !== "none") || t2.has("selectionAppearance") && (this.hasUpdated || this.selectionAppearance !== "icon") || t2.has("displayMode") && this.hasUpdated || t2.has("scale") && this.hasUpdated || t2.has("filterPredicate") && this.hasUpdated) && this.handleListItemChange();
  }
  updated() {
    m(this);
  }
  loaded() {
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.disconnectObserver(), D(this);
  }
  // #endregion
  // #region Private Methods
  handleListItemChange() {
    this.willPerformFilter = true, this.updateListItems();
  }
  handleCalciteListItemToggle(t2) {
    this.parentListEl || (t2.stopPropagation(), this.borderItems());
  }
  handleCalciteInternalFocusPreviousItem(t2) {
    if (this.parentListEl)
      return;
    t2.stopPropagation();
    const { focusableItems: e } = this, l = e.findIndex((s2) => s2.active) - 1;
    e[l] && this.focusRow(e[l]);
  }
  handleCalciteInternalListItemActive(t2) {
    if (this.parentListEl)
      return;
    t2.stopPropagation();
    const e = t2.target, { listItems: i4 } = this;
    i4.forEach((l) => {
      l.active = l === e;
    });
  }
  handleCalciteListItemSelect() {
    this.parentListEl || this.updateSelectedItems(true);
  }
  handleCalciteInternalAssistiveTextChange(t2) {
    this.assistiveText = t2.detail.message, t2.stopPropagation();
  }
  handleSortReorder(t2) {
    this.parentListEl || this.handleReorder(t2);
  }
  handleSortMove(t2) {
    this.parentListEl || this.handleMove(t2);
  }
  handleCalciteInternalListItemSelect(t2) {
    if (this.parentListEl)
      return;
    t2.stopPropagation();
    const e = t2.target, { listItems: i4, selectionMode: l } = this;
    e.selected && (l === "single" || l === "single-persist") && i4.forEach((s2) => s2.selected = s2 === e), this.updateSelectedItems();
  }
  handleCalciteInternalListItemSelectMultiple(t2) {
    if (this.parentListEl)
      return;
    t2.stopPropagation();
    const { target: e, detail: i4 } = t2, { focusableItems: l, lastSelectedInfo: s2 } = this, n2 = e;
    if (i4.selectMultiple && s2) {
      const a2 = l.indexOf(n2), r3 = l.indexOf(s2.selectedItem), c2 = Math.min(r3, a2), m2 = Math.max(r3, a2);
      l.slice(c2, m2 + 1).forEach((o2) => o2.selected = s2.selected);
    } else
      this.lastSelectedInfo = { selectedItem: n2, selected: n2.selected };
  }
  handleCalciteInternalListItemChange(t2) {
    this.parentListEl || (t2.stopPropagation(), this.updateListItems());
  }
  handleCalciteInternalListItemGroupDefaultSlotChange(t2) {
    t2.stopPropagation();
  }
  connectObserver() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.observe(this.el, { childList: true, subtree: true });
  }
  disconnectObserver() {
    var _a;
    (_a = this.mutationObserver) == null ? void 0 : _a.disconnect();
  }
  setUpSorting() {
    const { dragEnabled: t2 } = this;
    t2 && I(this);
  }
  onGlobalDragStart() {
    this.disconnectObserver();
  }
  onGlobalDragEnd() {
    this.connectObserver();
  }
  onDragEnd(t2) {
    this.calciteListDragEnd.emit(t2);
  }
  onDragMove({ relatedEl: t2 }) {
    t2.open = true;
  }
  onDragStart(t2) {
    t2.dragEl.sortHandleOpen = false, this.calciteListDragStart.emit(t2);
  }
  onDragSort(t2) {
    this.setParentList(), this.updateListItems(), this.calciteListOrderChange.emit(t2);
  }
  setParentList() {
    var _a;
    this.parentListEl = (_a = this.el.parentElement) == null ? void 0 : _a.closest(c);
  }
  handleDefaultSlotChange(t2) {
    h(t2.target), this.parentListEl && this.calciteInternalListDefaultSlotChange.emit();
  }
  setListItemGroups() {
    this.listItemGroups = Array.from(this.el.querySelectorAll(o));
  }
  handleFilterActionsStartSlotChange(t2) {
    this.hasFilterActionsStart = ut(t2);
  }
  handleFilterActionsEndSlotChange(t2) {
    this.hasFilterActionsEnd = ut(t2);
  }
  handleFilterNoResultsSlotChange(t2) {
    this.hasFilterNoResults = ut(t2);
  }
  setActiveListItem() {
    const { focusableItems: t2 } = this;
    t2.some((e) => e.active) || t2[0] && (t2[0].active = true);
  }
  async updateSelectedItems(t2 = false) {
    await this.updateComplete, this.selectedItems = this.visibleItems.filter((e) => e.selected), t2 && this.calciteListChange.emit();
  }
  filterElements({ el: t2, filteredItems: e, visibleParents: i4 }) {
    const l = !i4.has(t2) && !e.includes(t2);
    t2.filterHidden = l;
    const s2 = t2.parentElement.closest(B);
    s2 && (l || i4.add(s2), this.filterElements({
      el: s2,
      filteredItems: e,
      visibleParents: i4
    }));
  }
  allParentListItemsOpen(t2) {
    var _a;
    const e = (_a = t2.parentElement) == null ? void 0 : _a.closest(i2);
    if (e) {
      if (!e.open)
        return false;
    } else return true;
    return this.allParentListItemsOpen(e);
  }
  borderItems() {
    const t2 = this.visibleItems.filter((e) => !e.filterHidden && this.allParentListItemsOpen(e));
    t2.forEach((e) => e.bordered = e !== t2[t2.length - 1]);
  }
  updateFilteredItems() {
    const { visibleItems: t2, filteredData: e, filterText: i4, filterPredicate: l } = this, s2 = t2 == null ? void 0 : t2.filter((r3) => t2.every((c2) => c2 === r3 || !r3.contains(c2))), n2 = l ? t2.filter(l) : i4 ? e.map((r3) => r3.el) : t2 || [], a2 = /* @__PURE__ */ new WeakSet();
    s2.forEach((r3) => this.filterElements({ el: r3, filteredItems: n2, visibleParents: a2 })), this.filteredItems = n2, this.willFilterEmit && (this.willFilterEmit = false, this.calciteListFilter.emit());
  }
  updateFilteredData() {
    const { filterEl: t2 } = this;
    t2 && (t2.filteredItems && (this.filteredData = t2.filteredItems), this.updateListItems());
  }
  async filterAndUpdateData() {
    var _a;
    await ((_a = this.filterEl) == null ? void 0 : _a.filter(this.filterText)), this.updateFilteredData();
  }
  get effectiveFilterProps() {
    return this.filterProps ? this.filterProps.filter((t2) => t2 !== "el") : ["description", "label", "metadata", "heading"];
  }
  performFilter() {
    const { filterEl: t2, filterText: e, effectiveFilterProps: i4 } = this;
    t2 && (t2.value = e, t2.filterProps = i4, this.filterAndUpdateData());
  }
  setFilterEl(t2) {
    this.filterEl = t2, this.performFilter();
  }
  handleFilterChange(t2) {
    t2.stopPropagation();
    const { value: e } = t2.currentTarget;
    this.filterText = e, this.willFilterEmit = true, this.updateFilteredData();
  }
  getItemData() {
    return this.listItems.map((t2) => ({
      label: t2.label,
      description: t2.description,
      metadata: t2.metadata,
      heading: this.getGroupHeading(t2),
      el: t2
    }));
  }
  getGroupHeading(t2) {
    return this.listItemGroups.filter((i4) => i4.contains(t2)).map((i4) => i4.heading);
  }
  updateGroupItems() {
    const { el: t2, group: e, scale: i4 } = this, l = p(t2), s2 = e ? Array.from(l.querySelectorAll(`${c}[group="${e}"]`)).filter((a2) => !a2.disabled && a2.dragEnabled) : [];
    this.moveToItems = s2.map((a2) => ({
      element: a2,
      label: a2.label ?? a2.id,
      id: i()
    })), Array.from(this.el.querySelectorAll(o)).forEach((a2) => {
      a2.scale = i4;
    });
  }
  focusRow(t2) {
    const { focusableItems: e } = this;
    t2 && (e.forEach((i4) => i4.active = i4 === t2), t2.setFocus());
  }
  isNavigable(t2) {
    var _a;
    const e = (_a = t2.parentElement) == null ? void 0 : _a.closest(i2);
    return e ? e.open && this.isNavigable(e) : true;
  }
  handleListKeydown(t2) {
    var _a;
    if (t2.defaultPrevented || this.parentListEl)
      return;
    const { key: e } = t2, i4 = this.focusableItems.filter((s2) => this.isNavigable(s2)), l = i4.findIndex((s2) => s2.active);
    if (e === "ArrowDown") {
      t2.preventDefault();
      const s2 = t2.target === this.filterEl ? 0 : l + 1;
      i4[s2] && this.focusRow(i4[s2]);
    } else if (e === "ArrowUp") {
      if (t2.preventDefault(), l === 0 && this.filterEnabled) {
        (_a = this.filterEl) == null ? void 0 : _a.setFocus();
        return;
      }
      const s2 = l - 1;
      i4[s2] && this.focusRow(i4[s2]);
    } else if (e === "Home") {
      t2.preventDefault();
      const s2 = i4[0];
      s2 && this.focusRow(s2);
    } else if (e === "End") {
      t2.preventDefault();
      const s2 = i4[i4.length - 1];
      s2 && this.focusRow(s2);
    }
  }
  handleInteractionModeWarning() {
    this.interactionMode === "static" && this.selectionMode !== "none" && this.selectionAppearance === "border" && console.warn('selection-appearance="border" requires interaction-mode="interactive"');
  }
  handleMove(t2) {
    const { moveTo: e } = t2.detail, i4 = t2.target, l = i4 == null ? void 0 : i4.parentElement, s2 = e.element, a2 = Array.from(l.children).filter(d).indexOf(i4);
    if (!l)
      return;
    i4.sortHandleOpen = false, this.disconnectObserver(), s2.prepend(i4), a(i4);
    const c2 = Array.from(s2.children).filter(d).indexOf(i4);
    this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: i4,
      fromEl: l,
      toEl: s2,
      newIndex: c2,
      oldIndex: a2
    });
  }
  handleReorder(t2) {
    const { reorder: e } = t2.detail, i4 = t2.target, l = i4 == null ? void 0 : i4.parentElement;
    if (!l)
      return;
    i4.sortHandleOpen = false;
    const s2 = Array.from(l.children).filter(d), n2 = s2.length - 1, a2 = s2.indexOf(i4);
    let r3 = a2;
    switch (e) {
      case "top":
        r3 = 0;
        break;
      case "bottom":
        r3 = n2;
        break;
      case "up":
        r3 = a2 === 0 ? 0 : a2 - 1;
        break;
      case "down":
        r3 = a2 === n2 ? n2 : a2 + 1;
        break;
    }
    this.disconnectObserver();
    const c2 = e === "up" || e === "top" ? s2[r3] : s2[r3].nextSibling;
    l.insertBefore(i4, c2), this.updateListItems(), this.connectObserver(), this.calciteListOrderChange.emit({
      dragEl: i4,
      fromEl: l,
      toEl: l,
      newIndex: r3,
      oldIndex: a2
    });
  }
  // #endregion
  // #region Rendering
  render() {
    const { loading: t2, label: e, disabled: i4, dataForFilter: l, filterEnabled: s2, filterPlaceholder: n2, filterText: a2, filterLabel: r3, hasFilterActionsStart: c2, hasFilterActionsEnd: m2, effectiveFilterProps: o2 } = this;
    return p2({ disabled: this.disabled, children: html`<div class=${safeClassMap(f.container)}>${this.dragEnabled ? html`<span aria-live=assertive class=${safeClassMap(f.assistiveText)}>${this.assistiveText}</span>` : null}${this.renderItemAriaLive()}${t2 ? html`<calcite-scrim class=${safeClassMap(f.scrim)} .loading=${t2}></calcite-scrim>` : null}<div .ariaBusy=${t2} .ariaLabel=${e || ""} class=${safeClassMap(f.table)} @keydown=${this.handleListKeydown} role=treegrid>${s2 || c2 || m2 ? html`<div class=${safeClassMap(f.sticky)} role=rowgroup><div role=row><div role=columnheader><calcite-stack class=${safeClassMap(f.stack)}><slot name=${E.filterActionsStart} @slotchange=${this.handleFilterActionsStartSlotChange} slot=${n.actionsStart}></slot><calcite-filter .ariaLabel=${n2} .disabled=${i4} .filterProps=${o2} .items=${l} .label=${r3} @calciteFilterChange=${this.handleFilterChange} .placeholder=${n2} .scale=${this.scale} .value=${a2} ${ref(this.setFilterEl)}></calcite-filter><slot name=${E.filterActionsEnd} @slotchange=${this.handleFilterActionsEndSlotChange} slot=${n.actionsEnd}></slot></calcite-stack></div></div></div>` : null}<div class=${safeClassMap(f.tableContainer)} role=rowgroup><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div><div aria-live=polite data-test-id=no-results-container .hidden=${!this.showNoResultsContainer}><slot name=${E.filterNoResults} @slotchange=${this.handleFilterNoResultsSlotChange}></slot></div></div>` });
  }
  renderItemAriaLive() {
    const { messages: t2, filteredItems: e, parentListEl: i4, messages: { _lang: l }, numberingSystem: s2 } = this;
    return q.numberFormatOptions = {
      locale: l,
      numberingSystem: s2
    }, i4 ? null : html`<div aria-live=polite class=${safeClassMap(f.assistiveText)}>${this.hasActiveFilter ? keyed("aria-filter-enabled", html`<div>${t2.filterEnabled}</div>`) : null}${keyed("aria-item-count", html`<div>${t2.total.replace("{count}", q.localize(e.length.toString()))}</div>`)}${e.length ? keyed("aria-item-list", html`<ol>${e.map((n2) => html`<li>${n2.label}</li>`)}</ol>`) : null}</div>`;
  }
};
_W.properties = { assistiveText: 16, dataForFilter: 16, hasFilterActionsEnd: 16, hasFilterActionsStart: 16, hasFilterNoResults: 16, moveToItems: 16, hasActiveFilter: 16, showNoResultsContainer: 16, canPull: 0, canPut: 0, disabled: 7, dragEnabled: 7, filterEnabled: 7, filterPredicate: 0, filterLabel: 3, filterPlaceholder: 3, filterProps: 0, filterText: 3, filteredData: 0, filteredItems: 0, group: 3, interactionMode: 3, label: 1, loading: 7, messageOverrides: 0, displayMode: 3, numberingSystem: 1, scale: 3, selectedItems: 0, selectionAppearance: 3, selectionMode: 3 };
_W.styles = q2;
var W = _W;
S("calcite-list", W);
export {
  W as List
};
/*! Bundled license information:

@esri/calcite-components/dist/chunks/resources.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-stack/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/chunks/filter.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-filter/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

sortablejs/modular/sortable.esm.js:
  (**!
   * Sortable 1.15.6
   * @author	RubaXa   <trash@rubaxa.org>
   * @author	owenm    <owen23355@gmail.com>
   * @license MIT
   *)

@esri/calcite-components/dist/chunks/sortableComponent.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)

@esri/calcite-components/dist/components/calcite-list/customElement.js:
  (*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
  v3.0.3 *)
*/
//# sourceMappingURL=calcite-list-EYDTM3R4.js.map
