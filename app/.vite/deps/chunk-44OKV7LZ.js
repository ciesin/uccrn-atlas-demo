import {
  p as p2
} from "./chunk-R5QEGUQL.js";
import {
  c as c3
} from "./chunk-6WVUJOLD.js";
import {
  p
} from "./chunk-YQHLNRT3.js";
import {
  M,
  X,
  ie,
  j as j2,
  k,
  re,
  z
} from "./chunk-3GIIPEHS.js";
import {
  c,
  j,
  v,
  y
} from "./chunk-WZ7EFR6C.js";
import {
  a as a5
} from "./chunk-CVABZLLM.js";
import {
  v as v2
} from "./chunk-775V3L2A.js";
import {
  i,
  n as n2
} from "./chunk-FF44HCOD.js";
import {
  c2,
  i2
} from "./chunk-LCBD3JEK.js";
import {
  T,
  Xe,
  _,
  x
} from "./chunk-6REABBOQ.js";
import {
  a as a4
} from "./chunk-WJNMFEXQ.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  o
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r3
} from "./chunk-RDUV6YP6.js";
import {
  Ue,
  de
} from "./chunk-LTDNORB5.js";
import {
  a as a3
} from "./chunk-UNGOQUF2.js";
import {
  V
} from "./chunk-AJSC5XSW.js";
import {
  s
} from "./chunk-BDBI2KVA.js";
import {
  C,
  S as S2
} from "./chunk-UFBX3XSC.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m,
  r3 as r2,
  t4 as t
} from "./chunk-RYSF6YCR.js";
import {
  N,
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  a,
  n2 as n
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/form/ExpressionInfo.js
var s2;
var i3 = s2 = class extends S {
  constructor(e3) {
    super(e3), this.expression = null, this.name = null, this.returnType = "boolean", this.title = null;
  }
  clone() {
    return new s2({ name: this.name, title: this.title, expression: this.expression, returnType: this.returnType });
  }
};
r([m({ type: String, json: { write: true } })], i3.prototype, "expression", void 0), r([m({ type: String, json: { write: true } })], i3.prototype, "name", void 0), r([m({ type: ["boolean", "date", "number", "string"], json: { write: true } })], i3.prototype, "returnType", void 0), r([m({ type: String, json: { write: true } })], i3.prototype, "title", void 0), i3 = s2 = r([a2("esri.form.ExpressionInfo")], i3);
var p3 = i3;

// node_modules/@arcgis/core/form/elements/Element.js
var e = class extends S {
  constructor(t2) {
    super(t2), this.description = null, this.label = null, this.type = null, this.visibilityExpression = null;
  }
};
r([m({ type: String, json: { write: true } })], e.prototype, "description", void 0), r([m({ type: String, json: { write: true } })], e.prototype, "label", void 0), r([m()], e.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], e.prototype, "visibilityExpression", void 0), e = r([a2("esri.form.elements.Element")], e);
var i4 = e;

// node_modules/@arcgis/core/form/elements/inputs/attachments/Input.js
var p4 = class extends a4.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.type = null;
  }
};
r([m()], p4.prototype, "type", void 0), p4 = r([a2("esri.form.elements.inputs.attachments.Input")], p4);
var c4 = p4;

// node_modules/@arcgis/core/form/elements/inputs/attachments/support/utils.js
var a6 = ["any", "capture", "upload"];

// node_modules/@arcgis/core/form/elements/inputs/attachments/AudioInput.js
var p5 = class extends c4 {
  constructor(o2) {
    super(o2), this.type = "audio", this.inputMethod = "any", this.maxDuration = null;
  }
};
r([m({ type: ["audio"], readOnly: true, json: { write: true } })], p5.prototype, "type", void 0), r([m({ type: a6, json: { write: true } })], p5.prototype, "inputMethod", void 0), r([m({ type: Number, json: { write: true } })], p5.prototype, "maxDuration", void 0), p5 = r([a2("esri.form.elements.inputs.attachments.AudioInput")], p5);
var i5 = p5;

// node_modules/@arcgis/core/form/elements/inputs/attachments/DocumentInput.js
var s3 = class extends c4 {
  constructor(o2) {
    super(o2), this.type = "document", this.maxFileSize = null;
  }
};
r([m({ type: ["document"], readOnly: true, json: { write: true } })], s3.prototype, "type", void 0), r([m({ type: Number, json: { write: true } })], s3.prototype, "maxFileSize", void 0), s3 = r([a2("esri.form.elements.inputs.attachments.DocumentInput")], s3);
var p6 = s3;

// node_modules/@arcgis/core/form/elements/inputs/attachments/ImageInput.js
var p7 = class extends c4 {
  constructor(t2) {
    super(t2), this.type = "image", this.inputMethod = "any", this.maxImageSize = null;
  }
};
r([m({ type: ["image"], readOnly: true, json: { write: true } })], p7.prototype, "type", void 0), r([m({ type: a6, json: { write: true } })], p7.prototype, "inputMethod", void 0), r([m({ type: Number, json: { write: true } })], p7.prototype, "maxImageSize", void 0), p7 = r([a2("esri.form.elements.inputs.attachments.ImageInput")], p7);
var i6 = p7;

// node_modules/@arcgis/core/form/elements/inputs/attachments/SignatureInput.js
var p8 = class extends c4 {
  constructor(t2) {
    super(t2), this.type = "signature", this.inputMethod = "any";
  }
};
r([m({ type: ["signature"], readOnly: true, json: { write: true } })], p8.prototype, "type", void 0), r([m({ type: a6, json: { write: true } })], p8.prototype, "inputMethod", void 0), p8 = r([a2("esri.form.elements.inputs.attachments.SignatureInput")], p8);
var i7 = p8;

// node_modules/@arcgis/core/form/elements/inputs/attachments/VideoInput.js
var p9 = class extends c4 {
  constructor(o2) {
    super(o2), this.type = "video", this.inputMethod = "any", this.maxDuration = null;
  }
};
r([m({ type: ["video"], readOnly: true, json: { write: true } })], p9.prototype, "type", void 0), r([m({ type: a6, json: { write: true } })], p9.prototype, "inputMethod", void 0), r([m({ type: Number, json: { write: true } })], p9.prototype, "maxDuration", void 0), p9 = r([a2("esri.form.elements.inputs.attachments.VideoInput")], p9);
var i8 = p9;

// node_modules/@arcgis/core/form/elements/inputs/attachments/support/inputs.js
function u(e3) {
  return { nestableTypes: { base: c4, key: "type", typeMap: { audio: i5, document: p6, image: i6, signature: i7, video: i8 } }, allTypes: { base: c4, key: "type", typeMap: { attachment: e3, audio: i5, document: p6, image: i6, signature: i7, video: i8 } } };
}
function s4(t2, p27, n8) {
  return t2 ? t2.map((t3) => N(n8 ? p27.nestableTypes : p27.allTypes, t3)) : null;
}
function i9(e3, t2, p27) {
  if (!e3) return null;
  const n8 = p27 ? t2.nestableTypes.typeMap : t2.allTypes.typeMap;
  return e3.filter((e4) => n8[e4.type]).map((e4) => n8[e4.type].fromJSON(e4));
}
function m2(e3, t2, p27) {
  if (!e3) return null;
  const n8 = p27 ? t2.nestableTypes.typeMap : t2.allTypes.typeMap;
  return e3.filter((e4) => n8[e4.type]).map((e4) => e4.toJSON());
}

// node_modules/@arcgis/core/form/elements/inputs/attachments/AttachmentInput.js
var m3 = class extends c4 {
  constructor(t2) {
    super(t2), this.type = "attachment", this.attachmentAssociationType = "exact", this.inputTypes = null;
  }
  castInputs(t2) {
    return s4(t2, y2, true);
  }
  readInputs(t2, r5) {
    return i9(r5.inputTypes, y2, true);
  }
  writeInputs(t2, r5) {
    r5.inputTypes = m2(t2, y2, true);
  }
};
r([m({ type: ["attachment"], readOnly: true, json: { write: true } })], m3.prototype, "type", void 0), r([m({ type: ["any", "exact", "exactOrNone"], json: { write: true } })], m3.prototype, "attachmentAssociationType", void 0), r([m({ json: { write: { isRequired: true } } })], m3.prototype, "inputTypes", void 0), r([s("inputTypes")], m3.prototype, "castInputs", null), r([o("inputTypes")], m3.prototype, "readInputs", null), r([r3("inputTypes")], m3.prototype, "writeInputs", null), m3 = r([a2("esri.form.elements.inputs.attachments.AttachmentInput")], m3);
var y2 = u(m3);
var d = m3;

// node_modules/@arcgis/core/form/elements/AttachmentElement.js
var r4;
var a7 = u(d);
var p10 = r4 = class extends i4 {
  constructor(t2) {
    super(t2), this.allowUserRename = true, this.attachmentKeyword = null, this.displayFilename = false, this.editableExpression = null, this.filenameExpression = "{attachmentKeyword}_{now}", this.input = null, this.maxAttachmentCount = null, this.minAttachmentCount = null, this.type = "attachment", this.useOriginalFilename = true;
  }
  clone() {
    var _a;
    return new r4({ allowUserRename: this.allowUserRename, attachmentKeyword: this.attachmentKeyword, description: this.description, displayFilename: this.displayFilename, editableExpression: this.editableExpression, filenameExpression: this.filenameExpression, input: (_a = this.input) == null ? void 0 : _a.clone(), label: this.label, maxAttachmentCount: this.maxAttachmentCount, minAttachmentCount: this.minAttachmentCount, useOriginalFilename: this.useOriginalFilename, visibilityExpression: this.visibilityExpression });
  }
};
r([m({ type: Boolean, json: { write: true } })], p10.prototype, "allowUserRename", void 0), r([m({ type: String, json: { write: { isRequired: true } } })], p10.prototype, "attachmentKeyword", void 0), r([m({ type: Boolean, json: { write: true } })], p10.prototype, "displayFilename", void 0), r([m({ type: String, json: { write: true } })], p10.prototype, "editableExpression", void 0), r([m({ type: String, json: { write: true } })], p10.prototype, "filenameExpression", void 0), r([m({ types: a7.allTypes, json: { read: { source: "inputType" }, write: { target: "inputType", isRequired: true } } })], p10.prototype, "input", void 0), r([m({ type: Number, json: { write: true } })], p10.prototype, "maxAttachmentCount", void 0), r([m({ type: Number, json: { write: true } })], p10.prototype, "minAttachmentCount", void 0), r([m({ type: ["attachment"], readOnly: true, json: { read: false, write: true } })], p10.prototype, "type", void 0), r([m({ type: Boolean, json: { write: true } })], p10.prototype, "useOriginalFilename", void 0), p10 = r4 = r([a2("esri.form.elements.AttachmentElement")], p10);
var m4 = p10;

// node_modules/@arcgis/core/form/elements/inputs/Input.js
var e2 = class extends S {
  constructor(o2) {
    super(o2), this.type = null;
  }
};
r([m()], e2.prototype, "type", void 0), e2 = r([a2("esri.form.elements.inputs.Input")], e2);
var p11 = e2;

// node_modules/@arcgis/core/form/elements/inputs/TextInput.js
var s5 = class extends p11 {
  constructor(o2) {
    super(o2), this.maxLength = null, this.minLength = 0;
  }
};
r([m({ type: Number, json: { write: true } })], s5.prototype, "maxLength", void 0), r([m({ type: Number, json: { write: true } })], s5.prototype, "minLength", void 0), s5 = r([a2("esri.form.elements.inputs.TextInput")], s5);
var p12 = s5;

// node_modules/@arcgis/core/form/elements/inputs/BarcodeScannerInput.js
var s6;
var n3 = s6 = class extends p12 {
  constructor(r5) {
    super(r5), this.type = "barcode-scanner";
  }
  clone() {
    return new s6({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
r([m({ type: ["barcode-scanner"], json: { read: false, write: true } })], n3.prototype, "type", void 0), n3 = s6 = r([a2("esri.form.elements.inputs.BarcodeScannerInput")], n3);
var c5 = n3;

// node_modules/@arcgis/core/form/elements/inputs/ComboBoxInput.js
var s7;
var p13 = s7 = class extends p11 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "combo-box";
  }
  clone() {
    return new s7({ showNoValueOption: this.showNoValueOption, noValueOptionLabel: this.noValueOptionLabel });
  }
};
r([m({ type: String, json: { write: true } })], p13.prototype, "noValueOptionLabel", void 0), r([m({ type: Boolean, json: { write: true } })], p13.prototype, "showNoValueOption", void 0), r([m({ type: ["combo-box"], json: { read: false, write: true } })], p13.prototype, "type", void 0), p13 = s7 = r([a2("esri.form.elements.inputs.ComboBoxInput")], p13);
var i10 = p13;

// node_modules/@arcgis/core/form/elements/inputs/DatePickerInput.js
var p14;
function s8(r5) {
  return null != r5 ? r5 : null;
}
function a8(r5) {
  return null != r5 ? r5 : null;
}
var m5 = p14 = class extends p11 {
  constructor(r5) {
    super(r5), this.max = null, this.min = null, this.type = "date-picker";
  }
  readMax(r5, t2) {
    return s8(t2.max);
  }
  writeMax(r5, t2) {
    t2.max = a8(r5);
  }
  readMin(r5, t2) {
    return s8(t2.min);
  }
  writeMin(r5, t2) {
    t2.min = a8(r5);
  }
  clone() {
    return new p14({ max: this.max, min: this.min });
  }
};
r([m({ type: String, json: { type: String, write: true } })], m5.prototype, "max", void 0), r([o("max")], m5.prototype, "readMax", null), r([r3("max")], m5.prototype, "writeMax", null), r([m({ type: String, json: { type: String, write: true } })], m5.prototype, "min", void 0), r([o("min")], m5.prototype, "readMin", null), r([r3("min")], m5.prototype, "writeMin", null), r([m({ type: ["date-picker"], json: { read: false, write: true } })], m5.prototype, "type", void 0), m5 = p14 = r([a2("esri.form.elements.inputs.DatePickerInput")], m5);
var c6 = m5;

// node_modules/@arcgis/core/form/elements/inputs/DateTimeOffsetPickerInput.js
var s9;
function p15(t2) {
  return null != t2 ? t2 : null;
}
function m6(t2) {
  return null != t2 ? t2 : null;
}
var u2 = s9 = class extends p11 {
  constructor(t2) {
    super(t2), this.includeTimeOffset = true, this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "datetimeoffset-picker";
  }
  readMax(t2, e3) {
    return p15(e3.max);
  }
  writeMax(t2, e3) {
    e3.max = m6(t2);
  }
  readMin(t2, e3) {
    return p15(e3.min);
  }
  writeMin(t2, e3) {
    e3.min = m6(t2);
  }
  readTimeResolution(t2, e3) {
    return p15(e3.timeResolution);
  }
  writeTimeResolution(t2, e3) {
    e3.timeResolution = m6(t2);
  }
  clone() {
    return new s9({ includeTimeOffset: this.includeTimeOffset, max: this.max, min: this.min, timeResolution: this.timeResolution });
  }
};
r([m({ type: Boolean, json: { write: true } })], u2.prototype, "includeTimeOffset", void 0), r([m({ type: String, json: { type: String, write: true } })], u2.prototype, "max", void 0), r([o("max")], u2.prototype, "readMax", null), r([r3("max")], u2.prototype, "writeMax", null), r([m({ type: String, json: { type: String, write: true } })], u2.prototype, "min", void 0), r([o("min")], u2.prototype, "readMin", null), r([r3("min")], u2.prototype, "writeMin", null), r([m({ type: String, json: { type: String, write: true } })], u2.prototype, "timeResolution", void 0), r([o("timeResolution")], u2.prototype, "readTimeResolution", null), r([r3("timeResolution")], u2.prototype, "writeTimeResolution", null), r([m({ type: ["datetimeoffset-picker"], json: { read: false, write: true } })], u2.prototype, "type", void 0), u2 = s9 = r([a2("esri.form.elements.inputs.DateTimeOffsetPickerInput")], u2);
var l = u2;

// node_modules/@arcgis/core/form/elements/inputs/DateTimePickerInput.js
var p16;
function s10(e3) {
  return null != e3 ? new Date(e3) : null;
}
function m7(e3) {
  return e3 ? e3.getTime() : null;
}
var a9 = p16 = class extends p11 {
  constructor(e3) {
    super(e3), this.includeTime = false, this.max = null, this.min = null, this.type = "datetime-picker";
  }
  readMax(e3, r5) {
    return s10(r5.max);
  }
  writeMax(e3, r5) {
    r5.max = m7(e3);
  }
  readMin(e3, r5) {
    return s10(r5.min);
  }
  writeMin(e3, r5) {
    r5.min = m7(e3);
  }
  clone() {
    return new p16({ includeTime: this.includeTime, max: this.max, min: this.min });
  }
};
r([m({ type: Boolean, json: { write: true } })], a9.prototype, "includeTime", void 0), r([m({ type: Date, json: { type: Number, write: true } })], a9.prototype, "max", void 0), r([o("max")], a9.prototype, "readMax", null), r([r3("max")], a9.prototype, "writeMax", null), r([m({ type: Date, json: { type: Number, write: true } })], a9.prototype, "min", void 0), r([o("min")], a9.prototype, "readMin", null), r([r3("min")], a9.prototype, "writeMin", null), r([m({ type: ["datetime-picker"], json: { read: false, write: true } })], a9.prototype, "type", void 0), a9 = p16 = r([a2("esri.form.elements.inputs.DateTimePickerInput")], a9);
var c7 = a9;

// node_modules/@arcgis/core/form/elements/inputs/RadioButtonsInput.js
var s11;
var p17 = s11 = class extends p11 {
  constructor(o2) {
    super(o2), this.noValueOptionLabel = null, this.showNoValueOption = true, this.type = "radio-buttons";
  }
  clone() {
    return new s11({ noValueOptionLabel: this.noValueOptionLabel, showNoValueOption: this.showNoValueOption });
  }
};
r([m({ type: String, json: { write: true } })], p17.prototype, "noValueOptionLabel", void 0), r([m({ type: Boolean, json: { write: true } })], p17.prototype, "showNoValueOption", void 0), r([m({ type: ["radio-buttons"], json: { read: false, write: true } })], p17.prototype, "type", void 0), p17 = s11 = r([a2("esri.form.elements.inputs.RadioButtonsInput")], p17);
var i11 = p17;

// node_modules/@arcgis/core/form/elements/inputs/SwitchInput.js
var s12;
var p18 = s12 = class extends p11 {
  constructor(o2) {
    super(o2), this.offValue = null, this.onValue = null, this.type = "switch";
  }
  clone() {
    return new s12({ offValue: this.offValue, onValue: this.onValue });
  }
};
r([m({ type: [String, Number], json: { write: true } })], p18.prototype, "offValue", void 0), r([m({ type: [String, Number], json: { write: true } })], p18.prototype, "onValue", void 0), r([m({ type: ["switch"], json: { read: false, write: true } })], p18.prototype, "type", void 0), p18 = s12 = r([a2("esri.form.elements.inputs.SwitchInput")], p18);
var i12 = p18;

// node_modules/@arcgis/core/form/elements/inputs/TextAreaInput.js
var s13;
var p19 = s13 = class extends p12 {
  constructor(t2) {
    super(t2), this.type = "text-area";
  }
  clone() {
    return new s13({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
r([m({ type: ["text-area"], json: { read: false, write: true } })], p19.prototype, "type", void 0), p19 = s13 = r([a2("esri.form.elements.inputs.TextAreaInput")], p19);
var a10 = p19;

// node_modules/@arcgis/core/form/elements/inputs/TextBoxInput.js
var s14;
var p20 = s14 = class extends p12 {
  constructor(t2) {
    super(t2), this.type = "text-box";
  }
  clone() {
    return new s14({ maxLength: this.maxLength, minLength: this.minLength });
  }
};
r([m({ type: ["text-box"], json: { read: false, write: true } })], p20.prototype, "type", void 0), p20 = s14 = r([a2("esri.form.elements.inputs.TextBoxInput")], p20);
var n4 = p20;

// node_modules/@arcgis/core/form/elements/inputs/TimePickerInput.js
var s15;
function p21(t2) {
  return null != t2 ? t2 : null;
}
function m8(t2) {
  return null != t2 ? t2 : null;
}
var u3 = s15 = class extends p11 {
  constructor(t2) {
    super(t2), this.max = null, this.min = null, this.timeResolution = "minutes", this.type = "time-picker";
  }
  readMax(t2, e3) {
    return p21(e3.max);
  }
  writeMax(t2, e3) {
    e3.max = m8(t2);
  }
  readMin(t2, e3) {
    return p21(e3.min);
  }
  writeMin(t2, e3) {
    e3.min = m8(t2);
  }
  readTimeResolution(t2, e3) {
    return p21(e3.timeResolution);
  }
  writeTimeResolution(t2, e3) {
    e3.timeResolution = m8(t2);
  }
  clone() {
    return new s15({ max: this.max, min: this.min, timeResolution: this.timeResolution });
  }
};
r([m({ type: String, json: { type: String, write: true } })], u3.prototype, "max", void 0), r([o("max")], u3.prototype, "readMax", null), r([r3("max")], u3.prototype, "writeMax", null), r([m({ type: String, json: { type: String, write: true } })], u3.prototype, "min", void 0), r([o("min")], u3.prototype, "readMin", null), r([r3("min")], u3.prototype, "writeMin", null), r([m({ type: String, json: { type: String, write: true } })], u3.prototype, "timeResolution", void 0), r([o("timeResolution")], u3.prototype, "readTimeResolution", null), r([r3("timeResolution")], u3.prototype, "writeTimeResolution", null), r([m({ type: ["time-picker"], json: { read: false, write: true } })], u3.prototype, "type", void 0), u3 = s15 = r([a2("esri.form.elements.inputs.TimePickerInput")], u3);
var l2 = u3;

// node_modules/@arcgis/core/form/elements/inputs.js
var c8 = { base: p11, key: "type", typeMap: { "barcode-scanner": c5, "combo-box": i10, "date-picker": c6, "datetime-picker": c7, "datetimeoffset-picker": l, "radio-buttons": i11, switch: i12, "text-area": a10, "text-box": n4, "time-picker": l2 } };

// node_modules/@arcgis/core/form/elements/FieldElement.js
var n5;
var l3 = n5 = class extends i4 {
  constructor(e3) {
    super(e3), this.domain = null, this.editable = null, this.editableExpression = null, this.fieldName = null, this.hint = null, this.input = null, this.requiredExpression = null, this.type = "field", this.valueExpression = null;
  }
  clone() {
    return new n5({ description: this.description, domain: this.domain, editable: this.editable, editableExpression: this.editableExpression, fieldName: this.fieldName, hint: this.hint, input: this.input, label: this.label, requiredExpression: this.requiredExpression, valueExpression: this.valueExpression, visibilityExpression: this.visibilityExpression });
  }
};
r([m({ types: n2, json: { read: { reader: i }, write: true } })], l3.prototype, "domain", void 0), r([m({ type: Boolean, json: { write: true } })], l3.prototype, "editable", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "editableExpression", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "fieldName", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "hint", void 0), r([m({ types: c8, json: { read: { source: "inputType" }, write: { target: "inputType" } } })], l3.prototype, "input", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "requiredExpression", void 0), r([m({ type: String, json: { read: false, write: true } })], l3.prototype, "type", void 0), r([m({ type: String, json: { write: true } })], l3.prototype, "valueExpression", void 0), l3 = n5 = r([a2("esri.form.elements.FieldElement")], l3);
var a11 = l3;

// node_modules/@arcgis/core/form/elements/RelationshipElement.js
var p22;
var l4 = p22 = class extends i4 {
  constructor(e3) {
    super(e3), this.displayCount = null, this.displayType = "list", this.editableExpression = null, this.orderByFields = null, this.relationshipId = null, this.type = "relationship";
  }
  clone() {
    return new p22({ description: this.description, displayCount: this.displayCount, displayType: this.displayType, editableExpression: this.editableExpression, label: this.label, orderByFields: a(this.orderByFields), relationshipId: this.relationshipId, visibilityExpression: this.visibilityExpression });
  }
};
r([m({ type: Number, json: { write: true } })], l4.prototype, "displayCount", void 0), r([m({ type: ["list"], json: { write: true } })], l4.prototype, "displayType", void 0), r([m({ type: String, json: { write: true } })], l4.prototype, "editableExpression", void 0), r([m({ type: [i2], json: { write: true } })], l4.prototype, "orderByFields", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "relationshipId", void 0), r([m({ type: ["relationship"], json: { read: false, write: true } })], l4.prototype, "type", void 0), l4 = p22 = r([a2("esri.form.elements.RelationshipElement")], l4);
var n6 = l4;

// node_modules/@arcgis/core/form/elements/TextElement.js
var s16;
var i13 = s16 = class extends i4 {
  constructor(t2) {
    super(t2), this.text = null, this.textFormat = "plain-text", this.type = "text";
  }
  clone() {
    return new s16({ text: this.text, textFormat: this.textFormat, visibilityExpression: this.visibilityExpression });
  }
};
r([m({ type: String, json: { write: true } })], i13.prototype, "text", void 0), r([m({ type: String, json: { write: true } })], i13.prototype, "textFormat", void 0), r([m({ type: ["text"], readOnly: true, json: { read: false, write: true } })], i13.prototype, "type", void 0), i13 = s16 = r([a2("esri.form.elements.TextElement")], i13);
var p23 = i13;

// node_modules/@arcgis/core/form/elements/UtilityNetworkAssociationsElement.js
var p24 = class extends a4.ClonableMixin(i4) {
  constructor(o2) {
    super(o2), this.associationTypes = null, this.editableExpression = null, this.type = "utilityNetworkAssociations";
  }
};
r([m({ type: [c2], json: { write: { isRequired: true } } })], p24.prototype, "associationTypes", void 0), r([m({ type: String, json: { write: true } })], p24.prototype, "editableExpression", void 0), r([m({ type: ["utilityNetworkAssociations"], json: { read: false, write: true } })], p24.prototype, "type", void 0), p24 = r([a2("esri.form.elements.UtilityNetworkAssociationsElement")], p24);
var n7 = p24;

// node_modules/@arcgis/core/form/support/formUtils.js
var s17 = (t2) => "field" === t2.type;
var u4 = (t2) => "group" === t2.type;
var m9 = (t2) => "text" === t2.type;
function h(t2) {
  return { typesWithGroup: { base: i4, key: "type", typeMap: { attachment: m4, field: a11, group: t2, relationship: n6, text: p23, utilityNetworkAssociations: n7 } }, typesWithoutGroup: { base: i4, key: "type", typeMap: { attachment: m4, field: a11, relationship: n6, text: p23, utilityNetworkAssociations: n7 } } };
}
function x2(t2, e3, o2 = true) {
  if (!t2) return null;
  const p27 = o2 ? e3.typesWithGroup.typeMap : e3.typesWithoutGroup.typeMap;
  return t2.filter((t3) => p27[t3.type]).map((t3) => p27[t3.type].fromJSON(t3));
}
function G(t2, e3, o2 = true) {
  if (!t2) return null;
  const p27 = o2 ? e3.typesWithGroup.typeMap : e3.typesWithoutGroup.typeMap;
  return t2.filter((t3) => p27[t3.type]).map((t3) => t3.toJSON());
}
function W(e3, o2, p27 = true) {
  return e3 ? e3.map((e4) => N(p27 ? o2.typesWithGroup : o2.typesWithoutGroup, e4)) : null;
}

// node_modules/@arcgis/core/form/elements/GroupElement.js
var d2;
var u5 = d2 = class extends i4 {
  constructor(e3) {
    super(e3), this.elements = null, this.initialState = "expanded", this.type = "group";
  }
  castElements(e3) {
    return W(e3, E, false);
  }
  readElements(e3, t2) {
    return x2(t2.formElements, E, false);
  }
  writeElements(e3, t2) {
    t2.formElements = G(e3, E, false);
  }
  clone() {
    return new d2({ description: this.description, elements: a(this.elements), initialState: this.initialState, label: this.label, visibilityExpression: this.visibilityExpression });
  }
};
r([m({ json: { write: true } })], u5.prototype, "elements", void 0), r([s("elements")], u5.prototype, "castElements", null), r([o("elements", ["formElements"])], u5.prototype, "readElements", null), r([r3("elements")], u5.prototype, "writeElements", null), r([m({ type: ["collapsed", "expanded"], json: { write: true } })], u5.prototype, "initialState", void 0), r([m({ type: String, json: { read: false, write: true } })], u5.prototype, "type", void 0), u5 = d2 = r([a2("esri.form.elements.GroupElement")], u5);
var E = h(u5);
var j3 = u5;

// node_modules/@arcgis/core/form/FormTemplate.js
var I;
var b = h(j3);
var F = I = class extends S {
  constructor(e3) {
    super(e3), this.description = null, this.elements = null, this.expressionInfos = null, this.preserveFieldValuesWhenHidden = false, this.title = null;
  }
  castElements(e3) {
    return W(e3, b);
  }
  readElements(e3, s18) {
    return x2(s18.formElements, b);
  }
  writeElements(e3, s18) {
    s18.formElements = G(e3, b);
  }
  clone() {
    return new I({ description: this.description, expressionInfos: a(this.expressionInfos), elements: a(this.elements), title: this.title, preserveFieldValuesWhenHidden: this.preserveFieldValuesWhenHidden });
  }
  async getFieldsUsed(e3, s18) {
    const t2 = /* @__PURE__ */ new Set(), { description: r5, elements: o2, expressionInfos: i14, title: n8 } = this;
    if (U(t2, e3, r5), U(t2, e3, n8), !o2) return [];
    const l7 = k2(o2, i14).map((s19) => _(t2, e3, s19));
    await Promise.all(l7);
    for (const p27 of o2) g2(t2, { fieldsIndex: e3, relationships: s18 }, p27);
    return Array.from(t2).sort();
  }
};
function g2(e3, s18, t2) {
  var _a;
  const { fieldsIndex: r5 } = s18;
  if (!r5 || r5.fields.length !== e3.size) switch (U(e3, r5, t2.label), U(e3, r5, t2.description), t2.type) {
    case "field":
      T(e3, r5, t2.fieldName);
      break;
    case "group":
      t2.elements.forEach((t3) => g2(e3, s18, t3));
      break;
    case "relationship":
      if (s18.relationships) {
        const o2 = s18.relationships.find((e4) => e4.id === t2.relationshipId);
        o2 && T(e3, r5, o2.keyField);
      }
      x(e3, r5, (_a = t2.orderByFields) == null ? void 0 : _a.map((e4) => e4.field));
      break;
    case "text":
      U(e3, r5, t2.text);
  }
}
function k2(e3, s18) {
  if (!s18 || 0 === s18.length) return [];
  const t2 = H(e3), r5 = [];
  for (const o2 of s18) t2.has(o2.name) && r5.push(o2.expression);
  return r5;
}
function H(e3) {
  const s18 = /* @__PURE__ */ new Set();
  for (const t2 of e3) if (t(s18, t2.visibilityExpression), !m9(t2)) {
    if (u4(t2)) r2(s18, H(t2.elements));
    else if (t(s18, t2.editableExpression), s17(t2)) {
      const { requiredExpression: e4, valueExpression: r5 } = t2;
      r2(s18, [e4, r5]);
    }
  }
  return s18;
}
function U(e3, s18, t2) {
  x(e3, s18, Xe(t2));
}
r([m({ type: String, json: { write: true } })], F.prototype, "description", void 0), r([m({ json: { write: true } })], F.prototype, "elements", void 0), r([s("elements")], F.prototype, "castElements", null), r([o("elements", ["formElements"])], F.prototype, "readElements", null), r([r3("elements")], F.prototype, "writeElements", null), r([m({ type: [p3], json: { write: true } })], F.prototype, "expressionInfos", void 0), r([m({ type: Boolean, json: { default: false, write: true } })], F.prototype, "preserveFieldValuesWhenHidden", void 0), r([m({ type: String, json: { write: true } })], F.prototype, "title", void 0), F = I = r([a2("esri.form.FormTemplate")], F);
var V2 = F;

// node_modules/@arcgis/core/layers/support/EditFieldsInfo.js
var l5 = class extends a4.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.creatorField = null, this.creationDateField = null, this.editorField = null, this.editDateField = null, this.realm = null, this.timeZone = null;
  }
};
r([m()], l5.prototype, "creatorField", void 0), r([m()], l5.prototype, "creationDateField", void 0), r([m()], l5.prototype, "editorField", void 0), r([m()], l5.prototype, "editDateField", void 0), r([m()], l5.prototype, "realm", void 0), r([m(a3("dateFieldsTimeReference", true))], l5.prototype, "timeZone", void 0), l5 = r([a2("esri.layers.support.EditFieldsInfo")], l5);
var p25 = l5;

// node_modules/@arcgis/core/layers/support/FeatureIndex.js
var p26 = class extends a4.ClonableMixin(S) {
  constructor(o2) {
    super(o2);
  }
};
r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "name", void 0), r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "fields", void 0), r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "isAscending", void 0), r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "indexType", void 0), r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "isUnique", void 0), r([m({ constructOnly: true, json: { write: true } })], p26.prototype, "description", void 0), p26 = r([a2("esri.layers.support.FeatureIndex")], p26);

// node_modules/@arcgis/core/layers/support/GeometryFieldsInfo.js
var a12 = class extends a4.ClonableMixin(S) {
  constructor(e3) {
    super(e3), this.shapeAreaField = null, this.shapeLengthField = null, this.units = null;
  }
};
r([m({ type: String, json: { read: { source: "shapeAreaFieldName" } } })], a12.prototype, "shapeAreaField", void 0), r([m({ type: String, json: { read: { source: "shapeLengthFieldName" } } })], a12.prototype, "shapeLengthField", void 0), r([m({ type: String, json: { read: (e3) => de.read(e3) || Ue.read(e3) } })], a12.prototype, "units", void 0), a12 = r([a2("esri.layers.support.GeometryFieldsInfo")], a12);
var l6 = a12;

// node_modules/@arcgis/core/layers/support/Subtype.js
var a13 = class extends a4.ClonableMixin(S) {
  constructor(o2) {
    super(o2), this.code = null, this.defaultValues = {}, this.domains = null, this.name = null;
  }
  readDomains(o2) {
    if (!o2) return null;
    const r5 = {};
    for (const t2 of Object.keys(o2)) r5[t2] = i(o2[t2]);
    return r5;
  }
  writeDomains(o2, r5) {
    var _a;
    if (!o2) return;
    const t2 = {};
    for (const e3 of Object.keys(o2)) o2[e3] && (t2[e3] = (_a = o2[e3]) == null ? void 0 : _a.toJSON());
    r5.domains = t2;
  }
};
r([m({ type: Number, json: { write: true } })], a13.prototype, "code", void 0), r([m({ type: Object, json: { write: true } })], a13.prototype, "defaultValues", void 0), r([m({ json: { write: true } })], a13.prototype, "domains", void 0), r([o("domains")], a13.prototype, "readDomains", null), r([r3("domains")], a13.prototype, "writeDomains", null), r([m({ type: String, json: { write: true } })], a13.prototype, "name", void 0), a13 = r([a2("esri.layers.support.Subtype")], a13);
var c9 = a13;

// node_modules/@arcgis/core/layers/mixins/FeatureLayerBase.js
var R = (R2) => {
  let C2 = class extends R2 {
    constructor() {
      super(...arguments), this.copyright = null, this.capabilities = null, this.dateFieldsTimeZone = null, this.datesInUnknownTimezone = false, this.definitionExpression = null, this.displayField = null, this.editFieldsInfo = null, this.editingInfo = null, this.elevationInfo = null, this.fieldsIndex = null, this.floorInfo = null, this.fullExtent = null, this.gdbVersion = null, this.geometryFieldsInfo = null, this.geometryType = null, this.globalIdField = null, this.hasM = void 0, this.hasZ = void 0, this.heightModelInfo = null, this.historicMoment = null, this.indexes = new (V.ofType(p26))(), this.isTable = false, this.layerId = void 0, this.maxScale = 0, this.minScale = 0, this.objectIdField = null, this.preferredTimeZone = null, this.relationships = null, this.returnM = void 0, this.returnZ = void 0, this.serviceDefinitionExpression = null, this.serviceItemId = null, this.sourceJSON = null, this.spatialReference = g.WGS84, this.subtypeField = null, this.subtypes = null, this.trackIdField = null, this.version = void 0;
    }
    getFieldDomain() {
      throw new Error("Not implemented");
    }
    getField(e3) {
      return this.fieldsIndex.get(e3);
    }
    get authenticationTriggerEvent() {
      if (!this.url) return null;
      const { capabilities: e3 } = this;
      if (e3) {
        const { query: t3, operations: r5, editing: i14 } = e3;
        if (!t3.supportsQueryByOthers || !t3.supportsQueryByAnonymous) return "load";
        if (r5.supportsEditing && !(i14.supportsUpdateByOthers && i14.supportsUpdateByAnonymous && i14.supportsDeleteByOthers && i14.supportsDeleteByAnonymous)) return "load";
      }
      if (X(this.serviceDefinitionExpression) || X(this.definitionExpression)) return "load";
      if (this.userHasUpdateItemPrivileges) {
        if (re(this)) return "load";
        if (this.hasUpdateItemRestrictions) return e3.operations.supportsQuery ? "editing" : "load";
      }
      if (this.userHasFullEditingPrivileges && this.hasFullEditingRestrictions) return "editing";
      const t2 = this.editFieldsInfo;
      return ((t2 == null ? void 0 : t2.creatorField) || (t2 == null ? void 0 : t2.editorField)) && (e3 == null ? void 0 : e3.operations.supportsEditing) ? "editing" : null;
    }
    readCapabilitiesFromService(e3, t2) {
      return c3(t2, this.url);
    }
    readEditingInfo(e3, t2) {
      const { editingInfo: r5 } = t2;
      return r5 ? { lastEditDate: null != r5.lastEditDate ? new Date(r5.lastEditDate) : null } : null;
    }
    get effectiveCapabilities() {
      const e3 = this.capabilities;
      if (!e3) return null;
      const t2 = a(e3), { operations: i14, editing: o2 } = t2;
      return ie(this) ? (this.userHasUpdateItemPrivileges && (i14.supportsQuery = true), t2) : this.userHasUpdateItemPrivileges ? (i14.supportsAdd = i14.supportsDelete = i14.supportsEditing = i14.supportsQuery = i14.supportsUpdate = o2.supportsDeleteByOthers = o2.supportsGeometryUpdate = o2.supportsUpdateByOthers = true, t2) : (this.userHasFullEditingPrivileges && i14.supportsEditing && (i14.supportsAdd = i14.supportsDelete = i14.supportsUpdate = o2.supportsGeometryUpdate = true), t2);
    }
    get effectiveEditingEnabled() {
      return false;
    }
    readGlobalIdFieldFromService(e3, t2) {
      return M(t2);
    }
    get hasFullEditingRestrictions() {
      const e3 = this.capabilities;
      if (!e3 || ie(this)) return false;
      const { operations: t2, editing: r5 } = e3;
      return t2.supportsEditing && !(t2.supportsAdd && t2.supportsDelete && t2.supportsUpdate && r5.supportsGeometryUpdate);
    }
    get hasUpdateItemRestrictions() {
      const e3 = this.capabilities;
      if (!e3) return false;
      const { operations: t2, editing: r5 } = e3;
      return ie(this) ? !t2.supportsQuery : !(t2.supportsAdd && t2.supportsDelete && t2.supportsEditing && t2.supportsQuery && t2.supportsUpdate && r5.supportsDeleteByOthers && r5.supportsGeometryUpdate && r5.supportsUpdateByOthers);
    }
    readIsTableFromService(e3, t2) {
      return "Table" === t2.type;
    }
    readMaxScale(e3, t2) {
      return t2.effectiveMaxScale || e3 || 0;
    }
    readMinScale(e3, t2) {
      return t2.effectiveMinScale || e3 || 0;
    }
    readObjectIdFieldFromService(e3, t2) {
      return k(t2);
    }
    readServiceDefinitionExpression(e3, t2) {
      return t2.definitionQuery || t2.definitionExpression;
    }
    set url(e3) {
      if (null == e3) return void this._set("url", e3);
      const t2 = S2({ layer: this, url: e3, nonStandardUrlAllowed: true, logger: n.getLogger(this) });
      this._set("url", t2.url), null != t2.layerId && this._set("layerId", t2.layerId);
    }
    writeUrl(e3, t2, r5, i14) {
      C(this, e3, null, t2, i14);
    }
    readVersion(e3, t2) {
      return z(t2);
    }
  };
  return r([m({ readOnly: true })], C2.prototype, "authenticationTriggerEvent", null), r([m({ type: String, json: { origins: { service: { read: { source: "copyrightText" } } } } })], C2.prototype, "copyright", void 0), r([m({ readOnly: true, json: { read: false, origins: { service: { read: { source: ["advancedQueryCapabilities", "allowGeometryUpdates", "allowUpdateWithoutMValues", "archivingInfo", "capabilities", "datesInUnknownTimezone", "hasAttachments", "hasM", "hasZ", "isDataBranchVersioned", "isDataVersioned", "maxRecordCount", "maxRecordCountFactor", "ownershipBasedAccessControlForFeatures", "standardMaxRecordCount", "supportedQueryFormats", "supportsAdvancedQueries", "supportsApplyEditsWithGlobalIds", "supportsAttachmentsByUploadId", "supportsAttachmentsResizing", "supportsCalculate", "supportsCoordinatesQuantization", "supportsExceedsLimitStatistics", "supportsFieldDescriptionProperty", "supportsQuantizationEditMode", "supportsRollbackOnFailureParameter", "supportsStatistics", "supportsTruncate", "supportsValidateSql", "tileMaxRecordCount", "useStandardizedQueries"] } } } } })], C2.prototype, "capabilities", void 0), r([o("service", "capabilities")], C2.prototype, "readCapabilitiesFromService", null), r([m(a3("dateFieldsTimeReference"))], C2.prototype, "dateFieldsTimeZone", void 0), r([m({ type: Boolean })], C2.prototype, "datesInUnknownTimezone", void 0), r([m({ type: String, json: { origins: { service: { read: false, write: false } }, name: "layerDefinition.definitionExpression", write: { enabled: true, allowNull: true } } })], C2.prototype, "definitionExpression", void 0), r([m({ type: String, json: { origins: { service: { read: { source: "displayField" } } } } })], C2.prototype, "displayField", void 0), r([m({ readOnly: true, type: p25 })], C2.prototype, "editFieldsInfo", void 0), r([m({ readOnly: true })], C2.prototype, "editingInfo", void 0), r([o("editingInfo")], C2.prototype, "readEditingInfo", null), r([m({ readOnly: true })], C2.prototype, "effectiveCapabilities", null), r([m()], C2.prototype, "effectiveEditingEnabled", null), r([m((() => {
    const e3 = a(c), t2 = e3.json.origins;
    return t2["web-map"] = { read: false, write: false }, t2["portal-item"] = { read: false, write: false }, e3;
  })())], C2.prototype, "elevationInfo", void 0), r([m()], C2.prototype, "fieldsIndex", void 0), r([m({ type: p, json: { name: "layerDefinition.floorInfo", write: { layerContainerTypes: a5 } } })], C2.prototype, "floorInfo", void 0), r([m({ type: w, json: { origins: { service: { read: { source: "extent" } } } } })], C2.prototype, "fullExtent", void 0), r([m()], C2.prototype, "gdbVersion", void 0), r([m({ readOnly: true, type: l6, json: { read: { source: "geometryProperties" } } })], C2.prototype, "geometryFieldsInfo", void 0), r([m({ type: ["point", "polygon", "polyline", "multipoint", "multipatch", "mesh"], json: { origins: { service: { read: j2.read } } } })], C2.prototype, "geometryType", void 0), r([m({ type: String })], C2.prototype, "globalIdField", void 0), r([o("service", "globalIdField", ["globalIdField", "fields"])], C2.prototype, "readGlobalIdFieldFromService", null), r([m({ readOnly: true })], C2.prototype, "hasFullEditingRestrictions", null), r([m({ type: Boolean, json: { origins: { service: { read: true } } } })], C2.prototype, "hasM", void 0), r([m({ readOnly: true })], C2.prototype, "hasUpdateItemRestrictions", null), r([m({ type: Boolean, json: { origins: { service: { read: true } } } })], C2.prototype, "hasZ", void 0), r([m({ readOnly: true, type: v2 })], C2.prototype, "heightModelInfo", void 0), r([m({ type: Date })], C2.prototype, "historicMoment", void 0), r([m({ type: V.ofType(p26), readOnly: true })], C2.prototype, "indexes", void 0), r([m({ readOnly: true })], C2.prototype, "isTable", void 0), r([o("service", "isTable", ["type"])], C2.prototype, "readIsTableFromService", null), r([m({ type: Number, json: { origins: { service: { read: { source: "id" } }, "portal-item": { read: false, write: { target: "id" } } }, read: false } })], C2.prototype, "layerId", void 0), r([m(v)], C2.prototype, "maxScale", void 0), r([o("service", "maxScale", ["maxScale", "effectiveMaxScale"])], C2.prototype, "readMaxScale", null), r([m(j)], C2.prototype, "minScale", void 0), r([o("service", "minScale", ["minScale", "effectiveMinScale"])], C2.prototype, "readMinScale", null), r([m({ type: String })], C2.prototype, "objectIdField", void 0), r([o("service", "objectIdField", ["objectIdField", "fields"])], C2.prototype, "readObjectIdFieldFromService", null), r([m(a3("preferredTimeReference"))], C2.prototype, "preferredTimeZone", void 0), r([m({ type: [p2], readOnly: true })], C2.prototype, "relationships", void 0), r([m({ type: Boolean })], C2.prototype, "returnM", void 0), r([m({ type: Boolean })], C2.prototype, "returnZ", void 0), r([m({ readOnly: true, json: { write: false } })], C2.prototype, "serverGens", void 0), r([m({ readOnly: true })], C2.prototype, "serviceDefinitionExpression", void 0), r([o("service", "serviceDefinitionExpression", ["definitionQuery", "definitionExpression"])], C2.prototype, "readServiceDefinitionExpression", null), r([m({ type: String, readOnly: true, json: { read: false, origins: { service: { read: true } } } })], C2.prototype, "serviceItemId", void 0), r([m()], C2.prototype, "sourceJSON", void 0), r([m({ type: g, json: { origins: { service: { read: { source: "extent.spatialReference" } } } } })], C2.prototype, "spatialReference", void 0), r([m({ type: String, readOnly: true, json: { origins: { service: { read: true } } } })], C2.prototype, "subtypeField", void 0), r([m({ type: [c9], readOnly: true, json: { read: false, origins: { service: { read: true } } } })], C2.prototype, "subtypes", void 0), r([m({ type: String, json: { read: { source: "timeInfo.trackIdField" } } })], C2.prototype, "trackIdField", void 0), r([m(y)], C2.prototype, "url", null), r([r3("url")], C2.prototype, "writeUrl", null), r([m({ json: { origins: { service: { read: true } }, read: false } })], C2.prototype, "version", void 0), r([o("service", "version", ["currentVersion", "capabilities", "drawingInfo", "hasAttachments", "htmlPopupType", "relationships", "timeInfo", "typeIdField", "types"])], C2.prototype, "readVersion", null), C2 = r([a2("esri.layers.mixins.FeatureLayerBase")], C2), C2;
};

export {
  V2 as V,
  R
};
//# sourceMappingURL=chunk-44OKV7LZ.js.map
