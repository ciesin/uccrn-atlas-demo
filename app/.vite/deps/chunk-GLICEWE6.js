import {
  a as a3,
  a2 as a4,
  f,
  g as g2,
  h as h2,
  l2 as l,
  o2 as o4,
  s as s2,
  u2
} from "./chunk-T4YD2MX2.js";
import {
  B,
  C,
  H,
  U
} from "./chunk-ZD4JXG4O.js";
import {
  o as o3
} from "./chunk-56GFF6UO.js";
import {
  h
} from "./chunk-3UHB6K6P.js";
import {
  w
} from "./chunk-NENDDUWH.js";
import {
  j2 as j
} from "./chunk-YUVX6H42.js";
import {
  o as o2
} from "./chunk-5ESATYIQ.js";
import {
  g,
  r as r2
} from "./chunk-RDUV6YP6.js";
import {
  n as n3
} from "./chunk-7AOPU62X.js";
import {
  i,
  o
} from "./chunk-WE4EKKVR.js";
import {
  S
} from "./chunk-5BULKNR2.js";
import {
  m
} from "./chunk-RYSF6YCR.js";
import {
  a3 as a2
} from "./chunk-4LTV6KQ5.js";
import {
  r
} from "./chunk-PPIAYGRE.js";
import {
  c2 as c,
  n as n2,
  u3 as u
} from "./chunk-M6FNW7GP.js";
import {
  a,
  n2 as n,
  s2 as s
} from "./chunk-CWMZW2S5.js";

// node_modules/@arcgis/core/chunks/Zlib.js
var e;
var r3 = { exports: {} };
function i2() {
  return e || (e = 1, i10 = r3, void 0 !== (t7 = function() {
    function t8() {
      this.pos = 0, this.bufferLength = 0, this.eof = false, this.buffer = null;
    }
    return t8.prototype = { ensureBuffer: function(t9) {
      var e6 = this.buffer, r14 = e6 ? e6.byteLength : 0;
      if (t9 < r14) return e6;
      for (var i11 = 512; i11 < t9; ) i11 <<= 1;
      for (var s9 = new Uint8Array(i11), f6 = 0; f6 < r14; ++f6) s9[f6] = e6[f6];
      return this.buffer = s9;
    }, getByte: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return this.buffer[this.pos++];
    }, getBytes: function(t9) {
      var e6 = this.pos;
      if (t9) {
        this.ensureBuffer(e6 + t9);
        for (var r14 = e6 + t9; !this.eof && this.bufferLength < r14; ) this.readBlock();
        var i11 = this.bufferLength;
        r14 > i11 && (r14 = i11);
      } else {
        for (; !this.eof; ) this.readBlock();
        r14 = this.bufferLength;
      }
      return this.pos = r14, this.buffer.subarray(e6, r14);
    }, lookChar: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos]);
    }, getChar: function() {
      for (var t9 = this.pos; this.bufferLength <= t9; ) {
        if (this.eof) return null;
        this.readBlock();
      }
      return String.fromCharCode(this.buffer[this.pos++]);
    }, makeSubStream: function(t9, e6, r14) {
      for (var i11 = t9 + e6; this.bufferLength <= i11 && !this.eof; ) this.readBlock();
      return new Stream(this.buffer, t9, e6, r14);
    }, skip: function(t9) {
      t9 || (t9 = 1), this.pos += t9;
    }, reset: function() {
      this.pos = 0;
    } }, t8;
  }(), s8 = function() {
    if (!self || !self.Uint32Array) return null;
    var e6 = new Uint32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), r14 = new Uint32Array([3, 4, 5, 6, 7, 8, 9, 10, 65547, 65549, 65551, 65553, 131091, 131095, 131099, 131103, 196643, 196651, 196659, 196667, 262211, 262227, 262243, 262259, 327811, 327843, 327875, 327907, 258, 258, 258]), i11 = new Uint32Array([1, 2, 3, 4, 65541, 65543, 131081, 131085, 196625, 196633, 262177, 262193, 327745, 327777, 393345, 393409, 459009, 459137, 524801, 525057, 590849, 591361, 657409, 658433, 724993, 727041, 794625, 798721, 868353, 876545]), s9 = [new Uint32Array([459008, 524368, 524304, 524568, 459024, 524400, 524336, 590016, 459016, 524384, 524320, 589984, 524288, 524416, 524352, 590048, 459012, 524376, 524312, 589968, 459028, 524408, 524344, 590032, 459020, 524392, 524328, 59e4, 524296, 524424, 524360, 590064, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590024, 459018, 524388, 524324, 589992, 524292, 524420, 524356, 590056, 459014, 524380, 524316, 589976, 459030, 524412, 524348, 590040, 459022, 524396, 524332, 590008, 524300, 524428, 524364, 590072, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590020, 459017, 524386, 524322, 589988, 524290, 524418, 524354, 590052, 459013, 524378, 524314, 589972, 459029, 524410, 524346, 590036, 459021, 524394, 524330, 590004, 524298, 524426, 524362, 590068, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590028, 459019, 524390, 524326, 589996, 524294, 524422, 524358, 590060, 459015, 524382, 524318, 589980, 459031, 524414, 524350, 590044, 459023, 524398, 524334, 590012, 524302, 524430, 524366, 590076, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590018, 459016, 524385, 524321, 589986, 524289, 524417, 524353, 590050, 459012, 524377, 524313, 589970, 459028, 524409, 524345, 590034, 459020, 524393, 524329, 590002, 524297, 524425, 524361, 590066, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590026, 459018, 524389, 524325, 589994, 524293, 524421, 524357, 590058, 459014, 524381, 524317, 589978, 459030, 524413, 524349, 590042, 459022, 524397, 524333, 590010, 524301, 524429, 524365, 590074, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590022, 459017, 524387, 524323, 589990, 524291, 524419, 524355, 590054, 459013, 524379, 524315, 589974, 459029, 524411, 524347, 590038, 459021, 524395, 524331, 590006, 524299, 524427, 524363, 590070, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590030, 459019, 524391, 524327, 589998, 524295, 524423, 524359, 590062, 459015, 524383, 524319, 589982, 459031, 524415, 524351, 590046, 459023, 524399, 524335, 590014, 524303, 524431, 524367, 590078, 459008, 524368, 524304, 524568, 459024, 524400, 524336, 590017, 459016, 524384, 524320, 589985, 524288, 524416, 524352, 590049, 459012, 524376, 524312, 589969, 459028, 524408, 524344, 590033, 459020, 524392, 524328, 590001, 524296, 524424, 524360, 590065, 459010, 524372, 524308, 524572, 459026, 524404, 524340, 590025, 459018, 524388, 524324, 589993, 524292, 524420, 524356, 590057, 459014, 524380, 524316, 589977, 459030, 524412, 524348, 590041, 459022, 524396, 524332, 590009, 524300, 524428, 524364, 590073, 459009, 524370, 524306, 524570, 459025, 524402, 524338, 590021, 459017, 524386, 524322, 589989, 524290, 524418, 524354, 590053, 459013, 524378, 524314, 589973, 459029, 524410, 524346, 590037, 459021, 524394, 524330, 590005, 524298, 524426, 524362, 590069, 459011, 524374, 524310, 524574, 459027, 524406, 524342, 590029, 459019, 524390, 524326, 589997, 524294, 524422, 524358, 590061, 459015, 524382, 524318, 589981, 459031, 524414, 524350, 590045, 459023, 524398, 524334, 590013, 524302, 524430, 524366, 590077, 459008, 524369, 524305, 524569, 459024, 524401, 524337, 590019, 459016, 524385, 524321, 589987, 524289, 524417, 524353, 590051, 459012, 524377, 524313, 589971, 459028, 524409, 524345, 590035, 459020, 524393, 524329, 590003, 524297, 524425, 524361, 590067, 459010, 524373, 524309, 524573, 459026, 524405, 524341, 590027, 459018, 524389, 524325, 589995, 524293, 524421, 524357, 590059, 459014, 524381, 524317, 589979, 459030, 524413, 524349, 590043, 459022, 524397, 524333, 590011, 524301, 524429, 524365, 590075, 459009, 524371, 524307, 524571, 459025, 524403, 524339, 590023, 459017, 524387, 524323, 589991, 524291, 524419, 524355, 590055, 459013, 524379, 524315, 589975, 459029, 524411, 524347, 590039, 459021, 524395, 524331, 590007, 524299, 524427, 524363, 590071, 459011, 524375, 524311, 524575, 459027, 524407, 524343, 590031, 459019, 524391, 524327, 589999, 524295, 524423, 524359, 590063, 459015, 524383, 524319, 589983, 459031, 524415, 524351, 590047, 459023, 524399, 524335, 590015, 524303, 524431, 524367, 590079]), 9], f6 = [new Uint32Array([327680, 327696, 327688, 327704, 327684, 327700, 327692, 327708, 327682, 327698, 327690, 327706, 327686, 327702, 327694, 0, 327681, 327697, 327689, 327705, 327685, 327701, 327693, 327709, 327683, 327699, 327691, 327707, 327687, 327703, 327695, 0]), 5];
    function o12(t8) {
      throw new Error(t8);
    }
    function n15(e7) {
      var r15 = 0, i12 = e7[r15++], s10 = e7[r15++];
      -1 != i12 && -1 != s10 || o12("Invalid header in flate stream"), 8 != (15 & i12) && o12("Unknown compression method in flate stream"), ((i12 << 8) + s10) % 31 != 0 && o12("Bad FCHECK in flate stream"), 32 & s10 && o12("FDICT bit set in flate stream"), this.bytes = e7, this.bytesPos = r15, this.codeSize = 0, this.codeBuf = 0, t7.call(this);
    }
    return n15.prototype = Object.create(t7.prototype), n15.prototype.getBits = function(t8) {
      for (var e7, r15 = this.codeSize, i12 = this.codeBuf, s10 = this.bytes, f7 = this.bytesPos; r15 < t8; ) void 0 === (e7 = s10[f7++]) && o12("Bad encoding in flate stream"), i12 |= e7 << r15, r15 += 8;
      return e7 = i12 & (1 << t8) - 1, this.codeBuf = i12 >> t8, this.codeSize = r15 -= t8, this.bytesPos = f7, e7;
    }, n15.prototype.getCode = function(t8) {
      for (var e7 = t8[0], r15 = t8[1], i12 = this.codeSize, s10 = this.codeBuf, f7 = this.bytes, n16 = this.bytesPos; i12 < r15; ) {
        var a15;
        void 0 === (a15 = f7[n16++]) && o12("Bad encoding in flate stream"), s10 |= a15 << i12, i12 += 8;
      }
      var h7 = e7[s10 & (1 << r15) - 1], u11 = h7 >> 16, l6 = 65535 & h7;
      return (0 == i12 || i12 < u11 || 0 == u11) && o12("Bad encoding in flate stream"), this.codeBuf = s10 >> u11, this.codeSize = i12 - u11, this.bytesPos = n16, l6;
    }, n15.prototype.generateHuffmanTable = function(t8) {
      for (var e7 = t8.length, r15 = 0, i12 = 0; i12 < e7; ++i12) t8[i12] > r15 && (r15 = t8[i12]);
      for (var s10 = 1 << r15, f7 = new Uint32Array(s10), o13 = 1, n16 = 0, a15 = 2; o13 <= r15; ++o13, n16 <<= 1, a15 <<= 1) for (var h7 = 0; h7 < e7; ++h7) if (t8[h7] == o13) {
        var u11 = 0, l6 = n16;
        for (i12 = 0; i12 < o13; ++i12) u11 = u11 << 1 | 1 & l6, l6 >>= 1;
        for (i12 = u11; i12 < s10; i12 += a15) f7[i12] = o13 << 16 | h7;
        ++n16;
      }
      return [f7, r15];
    }, n15.prototype.readBlock = function() {
      function t8(t9, e7, r15, i12, s10) {
        for (var f7 = t9.getBits(r15) + i12; f7-- > 0; ) e7[b4++] = s10;
      }
      var n16 = this.getBits(3);
      if (1 & n16 && (this.eof = true), 0 != (n16 >>= 1)) {
        var a15, h7;
        if (1 == n16) a15 = s9, h7 = f6;
        else if (2 == n16) {
          for (var u11 = this.getBits(5) + 257, l6 = this.getBits(5) + 1, c6 = this.getBits(4) + 4, d6 = Array(e6.length), b4 = 0; b4 < c6; ) d6[e6[b4++]] = this.getBits(3);
          for (var v5 = this.generateHuffmanTable(d6), g7 = 0, B4 = (b4 = 0, u11 + l6), p6 = new Array(B4); b4 < B4; ) {
            var y4 = this.getCode(v5);
            16 == y4 ? t8(this, p6, 2, 3, g7) : 17 == y4 ? t8(this, p6, 3, 3, g7 = 0) : 18 == y4 ? t8(this, p6, 7, 11, g7 = 0) : p6[b4++] = g7 = y4;
          }
          a15 = this.generateHuffmanTable(p6.slice(0, u11)), h7 = this.generateHuffmanTable(p6.slice(u11, B4));
        } else o12("Unknown block type in flate stream");
        for (var m7 = (x4 = this.buffer) ? x4.length : 0, k4 = this.bufferLength; ; ) {
          var w5 = this.getCode(a15);
          if (w5 < 256) k4 + 1 >= m7 && (m7 = (x4 = this.ensureBuffer(k4 + 1)).length), x4[k4++] = w5;
          else {
            if (256 == w5) return void (this.bufferLength = k4);
            var C5 = (w5 = r14[w5 -= 257]) >> 16;
            C5 > 0 && (C5 = this.getBits(C5)), g7 = (65535 & w5) + C5, w5 = this.getCode(h7), (C5 = (w5 = i11[w5]) >> 16) > 0 && (C5 = this.getBits(C5));
            var L3 = (65535 & w5) + C5;
            k4 + g7 >= m7 && (m7 = (x4 = this.ensureBuffer(k4 + g7)).length);
            for (var S6 = 0; S6 < g7; ++S6, ++k4) x4[k4] = x4[k4 - L3];
          }
        }
      } else {
        var A4, U4 = this.bytes, P3 = this.bytesPos;
        void 0 === (A4 = U4[P3++]) && o12("Bad block header in flate stream");
        var z = A4;
        void 0 === (A4 = U4[P3++]) && o12("Bad block header in flate stream"), z |= A4 << 8, void 0 === (A4 = U4[P3++]) && o12("Bad block header in flate stream");
        var H3 = A4;
        void 0 === (A4 = U4[P3++]) && o12("Bad block header in flate stream"), (H3 |= A4 << 8) != (65535 & ~z) && o12("Bad uncompressed block length in flate stream"), this.codeBuf = 0, this.codeSize = 0;
        var T4 = this.bufferLength, x4 = this.ensureBuffer(T4 + z), j3 = T4 + z;
        this.bufferLength = j3;
        for (var E3 = T4; E3 < j3; ++E3) {
          if (void 0 === (A4 = U4[P3++])) {
            this.eof = true;
            break;
          }
          x4[E3] = A4;
        }
        this.bytesPos = P3;
      }
    }, n15;
  }()) && (i10.exports = s8)), r3.exports;
  var t7, i10, s8;
}
var s3 = o3(i2());

// node_modules/@arcgis/core/layers/support/rasterFormats/ImageCanvasDecoder.js
var i3 = class _i {
  constructor(t7) {
    this._canvas = null, this._ctx = null, t7 && (this._canvas = t7.canvas, this._ctx = t7.ctx || t7.canvas && t7.canvas.getContext("2d"));
  }
  decode(n15, s8, r14) {
    if (!n15 || n15.byteLength < 10) throw new s("imagecanvasdecoder: decode", "required a valid encoded data as input.");
    let { width: c6 = 0, height: h7 = 0, format: o12 } = s8;
    const { applyJpegMask: l6 } = s8;
    if (l6 && (!c6 || !h7)) throw new s("imagecanvasdecoder: decode", "image width and height are needed to apply jpeg mask directly to canvas");
    return new Promise((t7, d6) => {
      let g7 = null;
      "jpg" === o12 && l6 && (g7 = _i._getMask(n15, { width: c6, height: h7 }));
      const w5 = new Blob([new Uint8Array(n15)], { type: "image/" + o12 == "jpg" ? "jpeg" : o12 }), v5 = URL.createObjectURL(w5), m7 = new Image();
      let _2;
      m7.src = v5, m7.onload = () => {
        if (URL.revokeObjectURL(v5), c(r14)) return void d6(u());
        c6 = m7.width, h7 = m7.height, this._canvas && this._ctx ? (this._canvas.width === c6 && this._canvas.height === h7 || (this._canvas.width = c6, this._canvas.height = h7), this._ctx.clearRect(0, 0, c6, h7)) : (this._canvas = document.createElement("canvas"), this._canvas.width = c6, this._canvas.height = h7, this._ctx = this._canvas.getContext("2d")), this._ctx.drawImage(m7, 0, 0);
        const n16 = this._ctx.getImageData(0, 0, c6, h7);
        let i10;
        if (_2 = n16.data, s8.renderOnCanvas) {
          if (g7) for (i10 = 0; i10 < g7.length; i10++) g7[i10] ? _2[4 * i10 + 3] = 255 : _2[4 * i10 + 3] = 0;
          return this._ctx.putImageData(n16, 0, 0), void t7(null);
        }
        const o13 = c6 * h7, l7 = new Uint8Array(o13), w6 = new Uint8Array(o13), p6 = new Uint8Array(o13);
        if (g7) for (i10 = 0; i10 < o13; i10++) l7[i10] = _2[4 * i10], w6[i10] = _2[4 * i10 + 1], p6[i10] = _2[4 * i10 + 2];
        else for (g7 = new Uint8Array(o13), i10 = 0; i10 < o13; i10++) l7[i10] = _2[4 * i10], w6[i10] = _2[4 * i10 + 1], p6[i10] = _2[4 * i10 + 2], g7[i10] = _2[4 * i10 + 3];
        t7({ width: c6, height: h7, pixels: [l7, w6, p6], mask: g7, pixelType: "u8" });
      }, m7.onerror = () => {
        URL.revokeObjectURL(v5), d6("cannot load image");
      };
    });
  }
  static _getMask(t7, e6) {
    let a15 = null;
    try {
      const i10 = new Uint8Array(t7), s8 = Math.ceil(i10.length / 2);
      let r14 = 0;
      const c6 = i10.length - 2;
      for (r14 = s8; r14 < c6 && (255 !== i10[r14] || 217 !== i10[r14 + 1]); r14++) ;
      if (r14 += 2, r14 < i10.length - 1) {
        const t8 = new s3(i10.subarray(r14)).getBytes();
        a15 = new Uint8Array(e6.width * e6.height);
        let s9 = 0;
        for (let e7 = 0; e7 < t8.length; e7++) for (let n15 = 7; n15 >= 0; n15--) a15[s9++] = t8[e7] >> n15 & 1;
      }
    } catch (i10) {
    }
    return a15;
  }
};

// node_modules/@arcgis/core/chunks/Jpg.js
var n4;
var r4 = { exports: {} };
function o5() {
  return n4 || (n4 = 1, e6 = r4, o12 = function() {
    var e7 = function() {
      function e8(e9) {
        this.message = "JPEG error: " + e9;
      }
      return e8.prototype = new Error(), e8.prototype.name = "JpegError", e8.constructor = e8, e8;
    }();
    return function() {
      if (!self || !self.Uint8ClampedArray) return null;
      var n15 = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]), r14 = 4017, o13 = 799, a16 = 3406, t7 = 2276, i10 = 1567, s8 = 3784, c6 = 5793, f6 = 2896;
      function l6() {
        this.decodeTransform = null, this.colorTransform = -1;
      }
      function u11(e8, n16) {
        for (var r15, o14, a17 = 0, t8 = [], i11 = 16; i11 > 0 && !e8[i11 - 1]; ) i11--;
        t8.push({ children: [], index: 0 });
        var s9, c7 = t8[0];
        for (r15 = 0; r15 < i11; r15++) {
          for (o14 = 0; o14 < e8[r15]; o14++) {
            for ((c7 = t8.pop()).children[c7.index] = n16[a17]; c7.index > 0; ) c7 = t8.pop();
            for (c7.index++, t8.push(c7); t8.length <= r15; ) t8.push(s9 = { children: [], index: 0 }), c7.children[c7.index] = s9.children, c7 = s9;
            a17++;
          }
          r15 + 1 < i11 && (t8.push(s9 = { children: [], index: 0 }), c7.children[c7.index] = s9.children, c7 = s9);
        }
        return t8[0].children;
      }
      function h7(e8, n16, r15) {
        return 64 * ((e8.blocksPerLine + 1) * n16 + r15);
      }
      function v5(r15, o14, a17, t8, i11, s9, c7, f7, l7) {
        var u12 = a17.mcusPerLine, v6 = a17.progressive, m8 = o14, d7 = 0, b4 = 0;
        function k4() {
          if (b4 > 0) return b4--, d7 >> b4 & 1;
          if (255 === (d7 = r15[o14++])) {
            var n16 = r15[o14++];
            if (n16) throw new e7("unexpected marker " + (d7 << 8 | n16).toString(16));
          }
          return b4 = 7, d7 >>> 7;
        }
        function g7(n16) {
          for (var r16 = n16; ; ) {
            if ("number" == typeof (r16 = r16[k4()])) return r16;
            if ("object" != typeof r16) throw new e7("invalid huffman sequence");
          }
        }
        function C5(e8) {
          for (var n16 = 0; e8 > 0; ) n16 = n16 << 1 | k4(), e8--;
          return n16;
        }
        function w5(e8) {
          if (1 === e8) return 1 === k4() ? 1 : -1;
          var n16 = C5(e8);
          return n16 >= 1 << e8 - 1 ? n16 : n16 + (-1 << e8) + 1;
        }
        function x4(e8, r16) {
          var o15 = g7(e8.huffmanTableDC), a18 = 0 === o15 ? 0 : w5(o15);
          e8.blockData[r16] = e8.pred += a18;
          for (var t9 = 1; t9 < 64; ) {
            var i12 = g7(e8.huffmanTableAC), s10 = 15 & i12, c8 = i12 >> 4;
            if (0 !== s10) {
              var f8 = n15[t9 += c8];
              e8.blockData[r16 + f8] = w5(s10), t9++;
            } else {
              if (c8 < 15) break;
              t9 += 16;
            }
          }
        }
        function y4(e8, n16) {
          var r16 = g7(e8.huffmanTableDC), o15 = 0 === r16 ? 0 : w5(r16) << l7;
          e8.blockData[n16] = e8.pred += o15;
        }
        function D4(e8, n16) {
          e8.blockData[n16] |= k4() << l7;
        }
        var T4 = 0;
        function P3(e8, r16) {
          if (T4 > 0) T4--;
          else for (var o15 = s9, a18 = c7; o15 <= a18; ) {
            var t9 = g7(e8.huffmanTableAC), i12 = 15 & t9, f8 = t9 >> 4;
            if (0 !== i12) {
              var u13 = n15[o15 += f8];
              e8.blockData[r16 + u13] = w5(i12) * (1 << l7), o15++;
            } else {
              if (f8 < 15) {
                T4 = C5(f8) + (1 << f8) - 1;
                break;
              }
              o15 += 16;
            }
          }
        }
        var L3, A4 = 0;
        function _2(r16, o15) {
          for (var a18, t9, i12 = s9, f8 = c7, u13 = 0; i12 <= f8; ) {
            var h8 = n15[i12];
            switch (A4) {
              case 0:
                if (u13 = (t9 = g7(r16.huffmanTableAC)) >> 4, 0 == (a18 = 15 & t9)) u13 < 15 ? (T4 = C5(u13) + (1 << u13), A4 = 4) : (u13 = 16, A4 = 1);
                else {
                  if (1 !== a18) throw new e7("invalid ACn encoding");
                  L3 = w5(a18), A4 = u13 ? 2 : 3;
                }
                continue;
              case 1:
              case 2:
                r16.blockData[o15 + h8] ? r16.blockData[o15 + h8] += k4() << l7 : 0 == --u13 && (A4 = 2 === A4 ? 3 : 0);
                break;
              case 3:
                r16.blockData[o15 + h8] ? r16.blockData[o15 + h8] += k4() << l7 : (r16.blockData[o15 + h8] = L3 << l7, A4 = 0);
                break;
              case 4:
                r16.blockData[o15 + h8] && (r16.blockData[o15 + h8] += k4() << l7);
            }
            i12++;
          }
          4 === A4 && 0 == --T4 && (A4 = 0);
        }
        function U4(e8, n16, r16, o15, a18) {
          var t9 = r16 % u12;
          n16(e8, h7(e8, (r16 / u12 | 0) * e8.v + o15, t9 * e8.h + a18));
        }
        function z(e8, n16, r16) {
          n16(e8, h7(e8, r16 / e8.blocksPerLine | 0, r16 % e8.blocksPerLine));
        }
        var I4, M3, Y2, q, S6, H3, R3 = t8.length;
        H3 = v6 ? 0 === s9 ? 0 === f7 ? y4 : D4 : 0 === f7 ? P3 : _2 : x4;
        var j3, E3, J, V3, B4 = 0;
        for (E3 = 1 === R3 ? t8[0].blocksPerLine * t8[0].blocksPerColumn : u12 * a17.mcusPerColumn; B4 < E3; ) {
          var N2 = i11 ? Math.min(E3 - B4, i11) : E3;
          for (M3 = 0; M3 < R3; M3++) t8[M3].pred = 0;
          if (T4 = 0, 1 === R3) for (I4 = t8[0], S6 = 0; S6 < N2; S6++) z(I4, H3, B4), B4++;
          else for (S6 = 0; S6 < N2; S6++) {
            for (M3 = 0; M3 < R3; M3++) for (J = (I4 = t8[M3]).h, V3 = I4.v, Y2 = 0; Y2 < V3; Y2++) for (q = 0; q < J; q++) U4(I4, H3, B4, Y2, q);
            B4++;
          }
          b4 = 0, (j3 = p6(r15, o14)) && j3.invalid && (console.log("decodeScan - unexpected MCU data, next marker is: " + j3.invalid), o14 = j3.offset);
          var G3 = j3 && j3.marker;
          if (!G3 || G3 <= 65280) throw new e7("marker was not found");
          if (!(G3 >= 65488 && G3 <= 65495)) break;
          o14 += 2;
        }
        return (j3 = p6(r15, o14)) && j3.invalid && (console.log("decodeScan - unexpected Scan data, next marker is: " + j3.invalid), o14 = j3.offset), o14 - m8;
      }
      function m7(n16, l7, u12) {
        var h8, v6, m8, d7, p7, b4, k4, g7, C5, w5, x4, y4, D4, T4, P3, L3, A4, _2 = n16.quantizationTable, U4 = n16.blockData;
        if (!_2) throw new e7("missing required Quantization Table.");
        for (var z = 0; z < 64; z += 8) C5 = U4[l7 + z], w5 = U4[l7 + z + 1], x4 = U4[l7 + z + 2], y4 = U4[l7 + z + 3], D4 = U4[l7 + z + 4], T4 = U4[l7 + z + 5], P3 = U4[l7 + z + 6], L3 = U4[l7 + z + 7], C5 *= _2[z], w5 | x4 | y4 | D4 | T4 | P3 | L3 ? (w5 *= _2[z + 1], x4 *= _2[z + 2], y4 *= _2[z + 3], D4 *= _2[z + 4], T4 *= _2[z + 5], P3 *= _2[z + 6], L3 *= _2[z + 7], v6 = (h8 = (h8 = c6 * C5 + 128 >> 8) + (v6 = c6 * D4 + 128 >> 8) + 1 >> 1) - v6, A4 = (m8 = x4) * s8 + (d7 = P3) * i10 + 128 >> 8, m8 = m8 * i10 - d7 * s8 + 128 >> 8, k4 = (p7 = (p7 = f6 * (w5 - L3) + 128 >> 8) + (k4 = T4 << 4) + 1 >> 1) - k4, b4 = (g7 = (g7 = f6 * (w5 + L3) + 128 >> 8) + (b4 = y4 << 4) + 1 >> 1) - b4, d7 = (h8 = h8 + (d7 = A4) + 1 >> 1) - d7, m8 = (v6 = v6 + m8 + 1 >> 1) - m8, A4 = p7 * t7 + g7 * a16 + 2048 >> 12, p7 = p7 * a16 - g7 * t7 + 2048 >> 12, g7 = A4, A4 = b4 * o13 + k4 * r14 + 2048 >> 12, b4 = b4 * r14 - k4 * o13 + 2048 >> 12, k4 = A4, u12[z] = h8 + g7, u12[z + 7] = h8 - g7, u12[z + 1] = v6 + k4, u12[z + 6] = v6 - k4, u12[z + 2] = m8 + b4, u12[z + 5] = m8 - b4, u12[z + 3] = d7 + p7, u12[z + 4] = d7 - p7) : (A4 = c6 * C5 + 512 >> 10, u12[z] = A4, u12[z + 1] = A4, u12[z + 2] = A4, u12[z + 3] = A4, u12[z + 4] = A4, u12[z + 5] = A4, u12[z + 6] = A4, u12[z + 7] = A4);
        for (var I4 = 0; I4 < 8; ++I4) C5 = u12[I4], (w5 = u12[I4 + 8]) | (x4 = u12[I4 + 16]) | (y4 = u12[I4 + 24]) | (D4 = u12[I4 + 32]) | (T4 = u12[I4 + 40]) | (P3 = u12[I4 + 48]) | (L3 = u12[I4 + 56]) ? (v6 = (h8 = 4112 + ((h8 = c6 * C5 + 2048 >> 12) + (v6 = c6 * D4 + 2048 >> 12) + 1 >> 1)) - v6, A4 = (m8 = x4) * s8 + (d7 = P3) * i10 + 2048 >> 12, m8 = m8 * i10 - d7 * s8 + 2048 >> 12, d7 = A4, k4 = (p7 = (p7 = f6 * (w5 - L3) + 2048 >> 12) + (k4 = T4) + 1 >> 1) - k4, b4 = (g7 = (g7 = f6 * (w5 + L3) + 2048 >> 12) + (b4 = y4) + 1 >> 1) - b4, A4 = p7 * t7 + g7 * a16 + 2048 >> 12, p7 = p7 * a16 - g7 * t7 + 2048 >> 12, g7 = A4, A4 = b4 * o13 + k4 * r14 + 2048 >> 12, b4 = b4 * r14 - k4 * o13 + 2048 >> 12, C5 = (C5 = (h8 = h8 + d7 + 1 >> 1) + g7) < 16 ? 0 : C5 >= 4080 ? 255 : C5 >> 4, w5 = (w5 = (v6 = v6 + m8 + 1 >> 1) + (k4 = A4)) < 16 ? 0 : w5 >= 4080 ? 255 : w5 >> 4, x4 = (x4 = (m8 = v6 - m8) + b4) < 16 ? 0 : x4 >= 4080 ? 255 : x4 >> 4, y4 = (y4 = (d7 = h8 - d7) + p7) < 16 ? 0 : y4 >= 4080 ? 255 : y4 >> 4, D4 = (D4 = d7 - p7) < 16 ? 0 : D4 >= 4080 ? 255 : D4 >> 4, T4 = (T4 = m8 - b4) < 16 ? 0 : T4 >= 4080 ? 255 : T4 >> 4, P3 = (P3 = v6 - k4) < 16 ? 0 : P3 >= 4080 ? 255 : P3 >> 4, L3 = (L3 = h8 - g7) < 16 ? 0 : L3 >= 4080 ? 255 : L3 >> 4, U4[l7 + I4] = C5, U4[l7 + I4 + 8] = w5, U4[l7 + I4 + 16] = x4, U4[l7 + I4 + 24] = y4, U4[l7 + I4 + 32] = D4, U4[l7 + I4 + 40] = T4, U4[l7 + I4 + 48] = P3, U4[l7 + I4 + 56] = L3) : (A4 = (A4 = c6 * C5 + 8192 >> 14) < -2040 ? 0 : A4 >= 2024 ? 255 : A4 + 2056 >> 4, U4[l7 + I4] = A4, U4[l7 + I4 + 8] = A4, U4[l7 + I4 + 16] = A4, U4[l7 + I4 + 24] = A4, U4[l7 + I4 + 32] = A4, U4[l7 + I4 + 40] = A4, U4[l7 + I4 + 48] = A4, U4[l7 + I4 + 56] = A4);
      }
      function d6(e8, n16) {
        for (var r15 = n16.blocksPerLine, o14 = n16.blocksPerColumn, a17 = new Int16Array(64), t8 = 0; t8 < o14; t8++) for (var i11 = 0; i11 < r15; i11++) m7(n16, h7(n16, t8, i11), a17);
        return n16.blockData;
      }
      function p6(e8, n16, r15) {
        function o14(n17) {
          return e8[n17] << 8 | e8[n17 + 1];
        }
        var a17 = e8.length - 1, t8 = r15 < n16 ? r15 : n16;
        if (n16 >= a17) return null;
        var i11 = o14(n16);
        if (i11 >= 65472 && i11 <= 65534) return { invalid: null, marker: i11, offset: n16 };
        for (var s9 = o14(t8); !(s9 >= 65472 && s9 <= 65534); ) {
          if (++t8 >= a17) return null;
          s9 = o14(t8);
        }
        return { invalid: i11.toString(16), marker: s9, offset: t8 };
      }
      return l6.prototype = { parse: function(r15) {
        function o14() {
          var e8 = r15[c7] << 8 | r15[c7 + 1];
          return c7 += 2, e8;
        }
        function a17() {
          var e8 = o14(), n16 = c7 + e8 - 2, a18 = p6(r15, n16, c7);
          a18 && a18.invalid && (console.log("readDataBlock - incorrect length, next marker is: " + a18.invalid), n16 = a18.offset);
          var t9 = r15.subarray(c7, n16);
          return c7 += t9.length, t9;
        }
        function t8(e8) {
          for (var n16 = Math.ceil(e8.samplesPerLine / 8 / e8.maxH), r16 = Math.ceil(e8.scanLines / 8 / e8.maxV), o15 = 0; o15 < e8.components.length; o15++) {
            R3 = e8.components[o15];
            var a18 = Math.ceil(Math.ceil(e8.samplesPerLine / 8) * R3.h / e8.maxH), t9 = Math.ceil(Math.ceil(e8.scanLines / 8) * R3.v / e8.maxV), i12 = n16 * R3.h, s10 = r16 * R3.v * 64 * (i12 + 1);
            R3.blockData = new Int16Array(s10), R3.blocksPerLine = a18, R3.blocksPerColumn = t9;
          }
          e8.mcusPerLine = n16, e8.mcusPerColumn = r16;
        }
        var i11, s9, c7 = 0, f7 = null, l7 = null, h8 = [], m8 = [], b4 = [], k4 = o14();
        if (65496 !== k4) throw new e7("SOI not found");
        for (k4 = o14(); 65497 !== k4; ) {
          var g7, C5, w5;
          switch (k4) {
            case 65504:
            case 65505:
            case 65506:
            case 65507:
            case 65508:
            case 65509:
            case 65510:
            case 65511:
            case 65512:
            case 65513:
            case 65514:
            case 65515:
            case 65516:
            case 65517:
            case 65518:
            case 65519:
            case 65534:
              var x4 = a17();
              65504 === k4 && 74 === x4[0] && 70 === x4[1] && 73 === x4[2] && 70 === x4[3] && 0 === x4[4] && (f7 = { version: { major: x4[5], minor: x4[6] }, densityUnits: x4[7], xDensity: x4[8] << 8 | x4[9], yDensity: x4[10] << 8 | x4[11], thumbWidth: x4[12], thumbHeight: x4[13], thumbData: x4.subarray(14, 14 + 3 * x4[12] * x4[13]) }), 65518 === k4 && 65 === x4[0] && 100 === x4[1] && 111 === x4[2] && 98 === x4[3] && 101 === x4[4] && (l7 = { version: x4[5] << 8 | x4[6], flags0: x4[7] << 8 | x4[8], flags1: x4[9] << 8 | x4[10], transformCode: x4[11] });
              break;
            case 65499:
              for (var y4 = o14() + c7 - 2; c7 < y4; ) {
                var D4 = r15[c7++], T4 = new Uint16Array(64);
                if (D4 >> 4) {
                  if (D4 >> 4 != 1) throw new e7("DQT - invalid table spec");
                  for (C5 = 0; C5 < 64; C5++) T4[n15[C5]] = o14();
                } else for (C5 = 0; C5 < 64; C5++) T4[n15[C5]] = r15[c7++];
                h8[15 & D4] = T4;
              }
              break;
            case 65472:
            case 65473:
            case 65474:
              if (i11) throw new e7("Only single frame JPEGs supported");
              o14(), (i11 = {}).extended = 65473 === k4, i11.progressive = 65474 === k4, i11.precision = r15[c7++], i11.scanLines = o14(), i11.samplesPerLine = o14(), i11.components = [], i11.componentIds = {};
              var P3, L3 = r15[c7++], A4 = 0, _2 = 0;
              for (g7 = 0; g7 < L3; g7++) {
                P3 = r15[c7];
                var U4 = r15[c7 + 1] >> 4, z = 15 & r15[c7 + 1];
                A4 < U4 && (A4 = U4), _2 < z && (_2 = z);
                var I4 = r15[c7 + 2];
                w5 = i11.components.push({ h: U4, v: z, quantizationId: I4, quantizationTable: null }), i11.componentIds[P3] = w5 - 1, c7 += 3;
              }
              i11.maxH = A4, i11.maxV = _2, t8(i11);
              break;
            case 65476:
              var M3 = o14();
              for (g7 = 2; g7 < M3; ) {
                var Y2 = r15[c7++], q = new Uint8Array(16), S6 = 0;
                for (C5 = 0; C5 < 16; C5++, c7++) S6 += q[C5] = r15[c7];
                var H3 = new Uint8Array(S6);
                for (C5 = 0; C5 < S6; C5++, c7++) H3[C5] = r15[c7];
                g7 += 17 + S6, (Y2 >> 4 ? m8 : b4)[15 & Y2] = u11(q, H3);
              }
              break;
            case 65501:
              o14(), s9 = o14();
              break;
            case 65498:
              o14();
              var R3, j3 = r15[c7++], E3 = [];
              for (g7 = 0; g7 < j3; g7++) {
                var J = i11.componentIds[r15[c7++]];
                R3 = i11.components[J];
                var V3 = r15[c7++];
                R3.huffmanTableDC = b4[V3 >> 4], R3.huffmanTableAC = m8[15 & V3], E3.push(R3);
              }
              var B4 = r15[c7++], N2 = r15[c7++], G3 = r15[c7++], O4 = v5(r15, c7, i11, E3, s9, B4, N2, G3 >> 4, 15 & G3);
              c7 += O4;
              break;
            case 65535:
              255 !== r15[c7] && c7--;
              break;
            default:
              if (255 === r15[c7 - 3] && r15[c7 - 2] >= 192 && r15[c7 - 2] <= 254) {
                c7 -= 3;
                break;
              }
              throw new e7("unknown marker " + k4.toString(16));
          }
          k4 = o14();
        }
        for (this.width = i11.samplesPerLine, this.height = i11.scanLines, this.jfif = f7, this.eof = c7, this.adobe = l7, this.components = [], g7 = 0; g7 < i11.components.length; g7++) {
          var Q = h8[(R3 = i11.components[g7]).quantizationId];
          Q && (R3.quantizationTable = Q), this.components.push({ output: d6(i11, R3), scaleX: R3.h / i11.maxH, scaleY: R3.v / i11.maxV, blocksPerLine: R3.blocksPerLine, blocksPerColumn: R3.blocksPerColumn });
        }
        this.numComponents = this.components.length;
      }, _getLinearizedBlockData: function(e8, n16) {
        var r15, o14, a17, t8, i11, s9, c7, f7, l7, u12, h8, v6 = this.width / e8, m8 = this.height / n16, d7 = 0, p7 = this.components.length, b4 = e8 * n16 * p7, k4 = new Uint8ClampedArray(b4), g7 = new Uint32Array(e8), C5 = 4294967288;
        for (c7 = 0; c7 < p7; c7++) {
          for (o14 = (r15 = this.components[c7]).scaleX * v6, a17 = r15.scaleY * m8, d7 = c7, h8 = r15.output, t8 = r15.blocksPerLine + 1 << 3, i11 = 0; i11 < e8; i11++) f7 = 0 | i11 * o14, g7[i11] = (f7 & C5) << 3 | 7 & f7;
          for (s9 = 0; s9 < n16; s9++) for (u12 = t8 * ((f7 = 0 | s9 * a17) & C5) | (7 & f7) << 3, i11 = 0; i11 < e8; i11++) k4[d7] = h8[u12 + g7[i11]], d7 += p7;
        }
        var w5 = this.decodeTransform;
        if (w5) for (c7 = 0; c7 < b4; ) for (f7 = 0, l7 = 0; f7 < p7; f7++, c7++, l7 += 2) k4[c7] = (k4[c7] * w5[l7] >> 8) + w5[l7 + 1];
        return k4;
      }, _isColorConversionNeeded: function() {
        return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this.colorTransform : 1 === this.colorTransform;
      }, _convertYccToRgb: function(e8) {
        for (var n16, r15, o14, a17 = 0, t8 = e8.length; a17 < t8; a17 += 3) n16 = e8[a17], r15 = e8[a17 + 1], o14 = e8[a17 + 2], e8[a17] = n16 - 179.456 + 1.402 * o14, e8[a17 + 1] = n16 + 135.459 - 0.344 * r15 - 0.714 * o14, e8[a17 + 2] = n16 - 226.816 + 1.772 * r15;
        return e8;
      }, _convertYcckToRgb: function(e8) {
        for (var n16, r15, o14, a17, t8 = 0, i11 = 0, s9 = e8.length; i11 < s9; i11 += 4) n16 = e8[i11], r15 = e8[i11 + 1], o14 = e8[i11 + 2], a17 = e8[i11 + 3], e8[t8++] = r15 * (-660635669420364e-19 * r15 + 437130475926232e-18 * o14 - 54080610064599e-18 * n16 + 48449797120281e-17 * a17 - 0.154362151871126) - 122.67195406894 + o14 * (-957964378445773e-18 * o14 + 817076911346625e-18 * n16 - 0.00477271405408747 * a17 + 1.53380253221734) + n16 * (961250184130688e-18 * n16 - 0.00266257332283933 * a17 + 0.48357088451265) + a17 * (-336197177618394e-18 * a17 + 0.484791561490776), e8[t8++] = 107.268039397724 + r15 * (219927104525741e-19 * r15 - 640992018297945e-18 * o14 + 659397001245577e-18 * n16 + 426105652938837e-18 * a17 - 0.176491792462875) + o14 * (-778269941513683e-18 * o14 + 0.00130872261408275 * n16 + 770482631801132e-18 * a17 - 0.151051492775562) + n16 * (0.00126935368114843 * n16 - 0.00265090189010898 * a17 + 0.25802910206845) + a17 * (-318913117588328e-18 * a17 - 0.213742400323665), e8[t8++] = r15 * (-570115196973677e-18 * r15 - 263409051004589e-19 * o14 + 0.0020741088115012 * n16 - 0.00288260236853442 * a17 + 0.814272968359295) - 20.810012546947 + o14 * (-153496057440975e-19 * o14 - 132689043961446e-18 * n16 + 560833691242812e-18 * a17 - 0.195152027534049) + n16 * (0.00174418132927582 * n16 - 0.00255243321439347 * a17 + 0.116935020465145) + a17 * (-343531996510555e-18 * a17 + 0.24165260232407);
        return e8;
      }, _convertYcckToCmyk: function(e8) {
        for (var n16, r15, o14, a17 = 0, t8 = e8.length; a17 < t8; a17 += 4) n16 = e8[a17], r15 = e8[a17 + 1], o14 = e8[a17 + 2], e8[a17] = 434.456 - n16 - 1.402 * o14, e8[a17 + 1] = 119.541 - n16 + 0.344 * r15 + 0.714 * o14, e8[a17 + 2] = 481.816 - n16 - 1.772 * r15;
        return e8;
      }, _convertCmykToRgb: function(e8) {
        for (var n16, r15, o14, a17, t8 = 0, i11 = 1 / 255, s9 = 0, c7 = e8.length; s9 < c7; s9 += 4) n16 = e8[s9] * i11, r15 = e8[s9 + 1] * i11, o14 = e8[s9 + 2] * i11, a17 = e8[s9 + 3] * i11, e8[t8++] = 255 + n16 * (-4.387332384609988 * n16 + 54.48615194189176 * r15 + 18.82290502165302 * o14 + 212.25662451639585 * a17 - 285.2331026137004) + r15 * (1.7149763477362134 * r15 - 5.6096736904047315 * o14 - 17.873870861415444 * a17 - 5.497006427196366) + o14 * (-2.5217340131683033 * o14 - 21.248923337353073 * a17 + 17.5119270841813) - a17 * (21.86122147463605 * a17 + 189.48180835922747), e8[t8++] = 255 + n16 * (8.841041422036149 * n16 + 60.118027045597366 * r15 + 6.871425592049007 * o14 + 31.159100130055922 * a17 - 79.2970844816548) + r15 * (-15.310361306967817 * r15 + 17.575251261109482 * o14 + 131.35250912493976 * a17 - 190.9453302588951) + o14 * (4.444339102852739 * o14 + 9.8632861493405 * a17 - 24.86741582555878) - a17 * (20.737325471181034 * a17 + 187.80453709719578), e8[t8++] = 255 + n16 * (0.8842522430003296 * n16 + 8.078677503112928 * r15 + 30.89978309703729 * o14 - 0.23883238689178934 * a17 - 14.183576799673286) + r15 * (10.49593273432072 * r15 + 63.02378494754052 * o14 + 50.606957656360734 * a17 - 112.23884253719248) + o14 * (0.03296041114873217 * o14 + 115.60384449646641 * a17 - 193.58209356861505) - a17 * (22.33816807309886 * a17 + 180.12613974708367);
        return e8;
      }, getData: function(n16, r15, o14) {
        if (this.numComponents > 4) throw new e7("Unsupported color mode");
        var a17 = this._getLinearizedBlockData(n16, r15);
        if (1 === this.numComponents && o14) {
          for (var t8 = a17.length, i11 = new Uint8ClampedArray(3 * t8), s9 = 0, c7 = 0; c7 < t8; c7++) {
            var f7 = a17[c7];
            i11[s9++] = f7, i11[s9++] = f7, i11[s9++] = f7;
          }
          return i11;
        }
        if (3 === this.numComponents && this._isColorConversionNeeded()) return this._convertYccToRgb(a17);
        if (4 === this.numComponents) {
          if (this._isColorConversionNeeded()) return o14 ? this._convertYcckToRgb(a17) : this._convertYcckToCmyk(a17);
          if (o14) return this._convertCmykToRgb(a17);
        }
        return a17;
      } }, l6;
    }();
  }, void 0 !== (a15 = o12()) && (e6.exports = a15)), r4.exports;
  var e6, o12, a15;
}
var a5 = o3(o5());

// node_modules/@arcgis/core/layers/support/rasterFormats/JpgPlus.js
var r5 = class {
  static decode(r14, n15 = false) {
    const s8 = new Uint8Array(r14), o12 = new a5();
    o12.parse(s8);
    const { width: a15, height: i10, numComponents: f6, eof: h7 } = o12, l6 = o12.getData(a15, i10, true), c6 = a15 * i10;
    let u11, g7 = null, p6 = 0, w5 = 0, m7 = 0;
    if (!n15 && h7 < s8.length - 1) try {
      const t7 = new s3(s8.subarray(h7)).getBytes();
      g7 = new Uint8Array(c6);
      let r15 = 0;
      for (p6 = 0; p6 < t7.length; p6++) for (m7 = 7; m7 >= 0; m7--) g7[r15++] = t7[p6] >> m7 & 1;
    } catch {
    }
    if (1 === f6 && l6.length === a15 * i10) {
      const t7 = new Uint8Array(l6.buffer);
      u11 = [t7, t7, t7];
    } else {
      for (u11 = [], p6 = 0; p6 < 3; p6++) u11.push(new Uint8Array(c6));
      for (m7 = 0, w5 = 0; w5 < c6; w5++) for (p6 = 0; p6 < 3; p6++) u11[p6][w5] = l6[m7++];
    }
    return { width: a15, height: i10, pixels: u11, mask: g7 };
  }
};

// node_modules/@arcgis/core/layers/support/rasterFormats/Lerc.js
var t = [{ pixelType: "S8", size: 1, ctor: Int8Array, range: [-128, 127] }, { pixelType: "U8", size: 1, ctor: Uint8Array, range: [0, 255] }, { pixelType: "S16", size: 2, ctor: Int16Array, range: [-32768, 32767] }, { pixelType: "U16", size: 2, ctor: Uint16Array, range: [0, 65536] }, { pixelType: "S32", size: 4, ctor: Int32Array, range: [-2147483648, 2147483647] }, { pixelType: "U32", size: 4, ctor: Uint32Array, range: [0, 4294967296] }, { pixelType: "F32", size: 4, ctor: Float32Array, range: [-34027999387901484e22, 34027999387901484e22] }, { pixelType: "F64", size: 8, ctor: Float64Array, range: [-17976931348623157e292, 17976931348623157e292] }];
var n5 = null;
function r6() {
  return n5 || (n5 = import("./lerc-wasm-QRDUGGRW.js").then((e6) => e6.l).then(({ default: t7 }) => t7({ locateFile: (t8) => n3(`esri/layers/support/rasterFormats/${t8}`) })).then((e6) => {
    l2(e6);
  }), n5);
}
var a6 = { getBlobInfo: null, decode: null };
function o6(e6) {
  return 16 + (e6 >> 3 << 3);
}
function s4(e6, t7, n15) {
  n15.set(e6.slice(t7, t7 + n15.length));
}
function l2(e6) {
  const { _malloc: n15, _free: r14, _lerc_getBlobInfo: l6, _lerc_getDataRanges: i10, _lerc_decode_4D: u11, asm: f6 } = e6;
  let c6;
  const h7 = Object.values(f6).find((t7) => t7 && "buffer" in t7 && t7.buffer === e6.HEAPU8.buffer), y4 = (e7) => {
    const t7 = e7.map((e8) => o6(e8)), r15 = t7.reduce((e8, t8) => e8 + t8), a15 = n15(r15);
    c6 = new Uint8Array(h7.buffer);
    let s8 = t7[0];
    t7[0] = a15;
    for (let n16 = 1; n16 < t7.length; n16++) {
      const e8 = t7[n16];
      t7[n16] = t7[n16 - 1] + s8, s8 = e8;
    }
    return t7;
  };
  a6.getBlobInfo = (e7) => {
    const t7 = 12, n16 = 3, a15 = new Uint8Array(4 * t7), o12 = new Uint8Array(8 * n16), [u12, f7, p6] = y4([e7.length, a15.length, o12.length]);
    c6.set(e7, u12), c6.set(a15, f7), c6.set(o12, p6);
    let g7 = l6(u12, e7.length, f7, p6, t7, n16);
    if (g7) throw r14(u12), new Error(`lerc-getBlobInfo: error code is ${g7}`);
    c6 = new Uint8Array(h7.buffer), s4(c6, f7, a15), s4(c6, p6, o12);
    const d6 = new Uint32Array(a15.buffer), b4 = new Float64Array(o12.buffer), [w5, A4, , m7, U4, x4, C5, V3, T4, D4, z] = d6, F2 = { version: w5, depthCount: D4, width: m7, height: U4, validPixelCount: C5, bandCount: x4, blobSize: V3, maskCount: T4, dataType: A4, minValue: b4[0], maxValue: b4[1], maxZerror: b4[2], statistics: [], bandCountWithNoData: z };
    if (z && D4 > 1) return r14(u12), F2;
    if (1 === D4 && 1 === x4) return r14(u12), F2.statistics.push({ minValue: b4[0], maxValue: b4[1] }), F2;
    const I4 = D4 * x4 * 8, _2 = new Uint8Array(I4), k4 = new Uint8Array(I4);
    let B4 = u12, S6 = 0, v5 = 0, E3 = false;
    if (c6.byteLength < u12 + 2 * I4 ? (r14(u12), E3 = true, [B4, S6, v5] = y4([e7.length, I4, I4]), c6.set(e7, B4)) : [S6, v5] = y4([I4, I4]), c6.set(_2, S6), c6.set(k4, v5), g7 = i10(B4, e7.length, D4, x4, S6, v5), g7) throw r14(B4), E3 || r14(S6), new Error(`lerc-getDataRanges: error code is ${g7}`);
    c6 = new Uint8Array(h7.buffer), s4(c6, S6, _2), s4(c6, v5, k4);
    const O4 = new Float64Array(_2.buffer), $ = new Float64Array(k4.buffer), j3 = F2.statistics;
    for (let r15 = 0; r15 < x4; r15++) if (D4 > 1) {
      const e8 = O4.slice(r15 * D4, (r15 + 1) * D4), t8 = $.slice(r15 * D4, (r15 + 1) * D4), n17 = Math.min.apply(null, e8), a16 = Math.max.apply(null, t8);
      j3.push({ minValue: n17, maxValue: a16, depthStats: { minValues: e8, maxValues: t8 } });
    } else j3.push({ minValue: O4[r15], maxValue: $[r15] });
    return r14(B4), E3 || r14(S6), F2;
  }, a6.decode = (e7, n16) => {
    const { maskCount: a15, depthCount: o12, bandCount: l7, width: i11, height: f7, dataType: p6, bandCountWithNoData: g7 } = n16, d6 = t[p6], b4 = i11 * f7, w5 = new Uint8Array(b4 * l7), A4 = b4 * o12 * l7 * d6.size, m7 = new Uint8Array(A4), U4 = new Uint8Array(l7), x4 = new Uint8Array(8 * l7), [C5, V3, T4, D4, z] = y4([e7.length, w5.length, m7.length, U4.length, x4.length]);
    c6.set(e7, C5), c6.set(w5, V3), c6.set(m7, T4), c6.set(U4, D4), c6.set(x4, z);
    const F2 = u11(C5, e7.length, a15, V3, o12, i11, f7, l7, p6, T4, D4, z);
    if (F2) throw r14(C5), new Error(`lerc-decode: error code is ${F2}`);
    c6 = new Uint8Array(h7.buffer), s4(c6, T4, m7), s4(c6, V3, w5);
    let I4 = null;
    if (g7) {
      s4(c6, D4, U4), s4(c6, z, x4), I4 = [];
      const e8 = new Float64Array(x4.buffer);
      for (let t7 = 0; t7 < U4.length; t7++) I4.push(U4[t7] ? e8[t7] : null);
    }
    return r14(C5), { data: m7, maskData: w5, noDataValues: I4 };
  };
}
function i4(e6, t7, n15, r14, a15) {
  if (n15 < 2) return e6;
  const o12 = new r14(t7 * n15);
  for (let s8 = 0, l6 = 0; s8 < t7; s8++) for (let r15 = 0, a16 = s8; r15 < n15; r15++, a16 += t7) o12[a16] = e6[l6++];
  return o12;
}
function u3(e6, n15 = {}) {
  const r14 = n15.inputOffset ?? 0, o12 = e6 instanceof Uint8Array ? e6.subarray(r14) : new Uint8Array(e6, r14), s8 = a6.getBlobInfo(o12), { data: l6, maskData: u11, noDataValues: f6 } = a6.decode(o12, s8), { width: c6, height: h7, bandCount: y4, depthCount: p6, dataType: g7, maskCount: d6, statistics: b4 } = s8, w5 = t[g7], A4 = new w5.ctor(l6.buffer), m7 = [], U4 = [], x4 = c6 * h7, C5 = x4 * p6;
  for (let t7 = 0; t7 < y4; t7++) {
    const e7 = A4.subarray(t7 * C5, (t7 + 1) * C5);
    if (n15.returnInterleaved) m7.push(e7);
    else {
      const t8 = i4(e7, x4, p6, w5.ctor);
      m7.push(t8);
    }
    U4.push(u11.subarray(t7 * C5, (t7 + 1) * C5));
  }
  const V3 = 0 === d6 ? null : 1 === d6 ? U4[0] : new Uint8Array(x4);
  if (d6 > 1) {
    V3.set(U4[0]);
    for (let e7 = 1; e7 < U4.length; e7++) {
      const t7 = U4[e7];
      for (let e8 = 0; e8 < x4; e8++) V3[e8] = V3[e8] & t7[e8];
    }
  }
  const { noDataValue: T4 } = n15, D4 = null != T4 && w5.range[0] <= T4 && w5.range[1] >= T4;
  if (d6 > 0 && D4) for (let t7 = 0; t7 < y4; t7++) {
    const e7 = m7[t7], n16 = U4[t7] || V3;
    for (let t8 = 0; t8 < x4; t8++) 0 === n16[t8] && (e7[t8] = T4);
  }
  const z = d6 === y4 && y4 > 1 ? U4 : null, { pixelType: F2 } = w5;
  return { width: c6, height: h7, bandCount: y4, pixelType: F2, depthCount: p6, statistics: b4, pixels: m7, mask: V3, bandMasks: z, noDataValues: f6 };
}

// node_modules/@arcgis/core/layers/support/rasterFormats/Lzw.js
function e2(e6, n15, t7, r14 = true) {
  if (n15 % 4 != 0 || t7 % 4 != 0) {
    const i10 = new ArrayBuffer(4 * Math.ceil(t7 / 4)), o12 = new Uint8Array(i10), l6 = new Uint8Array(e6, n15, t7);
    if (r14) for (let e7 = 0; e7 < o12.length; e7 += 4) o12[e7] = l6[e7 + 3], o12[e7 + 1] = l6[e7 + 2], o12[e7 + 2] = l6[e7 + 1], o12[e7 + 3] = l6[e7];
    else o12.set(l6);
    return new Uint32Array(o12.buffer);
  }
  if (r14) {
    const r15 = new Uint8Array(e6, n15, t7), i10 = new Uint8Array(r15.length);
    for (let e7 = 0; e7 < i10.length; e7 += 4) i10[e7] = r15[e7 + 3], i10[e7 + 1] = r15[e7 + 2], i10[e7 + 2] = r15[e7 + 1], i10[e7 + 3] = r15[e7];
    return new Uint32Array(i10.buffer);
  }
  return new Uint32Array(e6, n15, t7 / 4);
}
function n6() {
  const e6 = [];
  for (let n15 = 0; n15 <= 257; n15++) e6[n15] = [n15];
  return e6;
}
function t2(e6, n15) {
  for (let t7 = 0; t7 < n15.length; t7++) e6.push(n15[t7]);
}
var r7 = /* @__PURE__ */ new Set();
function i5(i10, o12, l6, f6 = true) {
  const s8 = e2(i10, o12, l6, f6);
  let a15 = 9, c6 = n6(), u11 = 32, h7 = c6.length, d6 = [], w5 = 1, g7 = s8[0], y4 = 0;
  const A4 = s8.length, U4 = 8 * (4 * A4 - l6), p6 = [];
  for (; null != g7; ) {
    if (u11 >= a15) u11 -= a15, y4 = g7 >>> 32 - a15, g7 <<= a15;
    else {
      y4 = g7 >>> 32 - u11, g7 = s8[w5++];
      const e7 = a15 - u11;
      u11 = 32 - e7, y4 = (y4 << e7) + (g7 >>> u11), g7 <<= e7;
    }
    if (257 === y4) break;
    if (256 === y4) {
      a15 = 9, c6 = n6(), h7 = c6.length, d6 = [];
      continue;
    }
    const e6 = c6[y4];
    if (null == e6) {
      if (y4 > c6.length) throw new Error("data integrity issue: code does not exist on code page");
      d6.push(d6[0]), c6[h7++] = d6.slice(), t2(p6, d6);
    } else t2(p6, e6), d6.push(e6[0]), d6.length > 1 && (c6[h7++] = d6.slice()), d6 = e6.slice();
    if (r7.has(h7) && a15++, 0 === u11 && (g7 = s8[w5++], u11 = 32), w5 > A4 || w5 === A4 && u11 <= U4) break;
  }
  return new Uint8Array(p6);
}
r7.add(511), r7.add(1023), r7.add(2047), r7.add(4095), r7.add(8191);

// node_modules/@arcgis/core/layers/support/rasterFormats/Raw.js
var e3 = (e6, r14) => {
  const a15 = r14.width * r14.height, n15 = r14.pixelType;
  return Math.floor(e6.byteLength / (a15 * t3(n15)));
};
var t3 = (e6) => {
  let t7 = 1;
  switch (e6) {
    case Uint8Array:
    case Int8Array:
      t7 = 1;
      break;
    case Uint16Array:
    case Int16Array:
      t7 = 2;
      break;
    case Uint32Array:
    case Int32Array:
    case Float32Array:
      t7 = 4;
      break;
    case Float64Array:
      t7 = 8;
  }
  return t7;
};
var r8 = (e6, t7) => {
  if (8 * e6.byteLength < t7) return null;
  const r14 = new Uint8Array(e6, 0, Math.ceil(t7 / 8)), a15 = new Uint8Array(t7);
  let n15 = 0, s8 = 0, l6 = 0, i10 = 0;
  for (l6 = 0; l6 < r14.length - 1; l6++) for (s8 = r14[l6], i10 = 7; i10 >= 0; i10--) a15[n15++] = s8 >> i10 & 1;
  for (i10 = 7; n15 < t7 - 1; ) s8 = r14[r14.length - 1], a15[n15++] = s8 >> i10 & 1, i10--;
  return a15;
};
var a7 = class {
  static decode(a15, n15) {
    const s8 = n15.pixelType, l6 = [], i10 = n15.width * n15.height, h7 = e3(a15, n15), { bandIds: c6, format: y4 } = n15, o12 = (c6 == null ? void 0 : c6.length) || e3(a15, n15), b4 = a15.byteLength - a15.byteLength % (i10 * t3(s8)), f6 = new s8(a15, 0, i10 * h7);
    let u11, g7, A4, p6, d6 = null;
    if ("bip" === y4) for (u11 = 0; u11 < o12; u11++) {
      for (A4 = new s8(i10), p6 = c6 ? c6[u11] : u11, g7 = 0; g7 < i10; g7++) A4[g7] = f6[g7 * h7 + p6];
      l6.push(A4);
    }
    else if ("bsq" === y4) for (u11 = 0; u11 < o12; u11++) p6 = c6 ? c6[u11] : u11, l6.push(f6.subarray(p6 * i10, (p6 + 1) * i10));
    return b4 < a15.byteLength - 1 && (d6 = r8(a15.slice(b4), i10)), { pixels: l6, mask: d6 };
  }
};

// node_modules/@arcgis/core/layers/support/rasterDatasets/byteStreamUtils.js
function r9(r14, t7) {
  let n15 = 0, o12 = "", e6 = 0, f6 = 0;
  const c6 = r14.length;
  for (; n15 < c6; ) f6 = r14[n15++], e6 = f6 >> 4, e6 < 8 ? e6 = 1 : 15 === e6 ? (e6 = 4, f6 = (7 & f6) << 18 | (63 & r14[n15++]) << 12 | (63 & r14[n15++]) << 6 | 63 & r14[n15++]) : 14 === e6 ? (e6 = 3, f6 = (15 & f6) << 12 | (63 & r14[n15++]) << 6 | 63 & r14[n15++]) : (e6 = 2, f6 = (31 & f6) << 6 | 63 & r14[n15++]), (0 !== f6 || t7) && (o12 += String.fromCharCode(f6));
  return o12;
}

// node_modules/@arcgis/core/layers/support/rasterFormats/TiffTags.js
var e4 = (() => {
  const e6 = [];
  return e6[254] = "NEWSUBFILETYPE", e6[255] = "SUBFILETYPE", e6[256] = "IMAGEWIDTH", e6[257] = "IMAGELENGTH", e6[258] = "BITSPERSAMPLE", e6[259] = "COMPRESSION", e6[262] = "PHOTOMETRICINTERPRETATION", e6[263] = "THRESHHOLDING", e6[264] = "CELLWIDTH", e6[265] = "CELLLENGTH", e6[266] = "FILLORDER", e6[269] = "DOCUMENTNAME", e6[270] = "IMAGEDESCRIPTION", e6[271] = "MAKE", e6[272] = "MODEL", e6[273] = "STRIPOFFSETS", e6[274] = "ORIENTATION", e6[277] = "SAMPLESPERPIXEL", e6[278] = "ROWSPERSTRIP", e6[279] = "STRIPBYTECOUNTS", e6[280] = "MINSAMPLEVALUE", e6[281] = "MAXSAMPLEVALUE", e6[282] = "XRESOLUTION", e6[283] = "YRESOLUTION", e6[284] = "PLANARCONFIGURATION", e6[285] = "PAGENAME", e6[286] = "XPOSITION", e6[287] = "YPOSITION", e6[288] = "FREEOFFSETS", e6[289] = "FREEBYTECOUNTS", e6[290] = "GRAYRESPONSEUNIT", e6[291] = "GRAYRESPONSECURVE", e6[292] = "T4OPTIONS", e6[293] = "T6OPTIONS", e6[296] = "RESOLUTIONUNIT", e6[297] = "PAGENUMBER", e6[300] = "COLORRESPONSEUNIT", e6[301] = "TRANSFERFUNCTION", e6[305] = "SOFTWARE", e6[306] = "DATETIME", e6[315] = "ARTIST", e6[316] = "HOSTCOMPUTER", e6[317] = "PREDICTOR", e6[318] = "WHITEPOINT", e6[319] = "PRIMARYCHROMATICITIES", e6[320] = "COLORMAP", e6[321] = "HALFTONEHINTS", e6[322] = "TILEWIDTH", e6[323] = "TILELENGTH", e6[324] = "TILEOFFSETS", e6[325] = "TILEBYTECOUNTS", e6[326] = "BADFAXLINES", e6[327] = "CLEANFAXDATA", e6[328] = "CONSECUTIVEBADFAXLINES", e6[330] = "SUBIFD", e6[332] = "INKSET", e6[333] = "INKNAMES", e6[334] = "NUMBEROFINKS", e6[336] = "DOTRANGE", e6[337] = "TARGETPRINTER", e6[338] = "EXTRASAMPLES", e6[339] = "SAMPLEFORMAT", e6[340] = "SMINSAMPLEVALUE", e6[341] = "SMAXSAMPLEVALUE", e6[342] = "TRANSFERRANGE", e6[347] = "JPEGTABLES", e6[512] = "JPEGPROC", e6[513] = "JPEGIFOFFSET", e6[514] = "JPEGIFBYTECOUNT", e6[515] = "JPEGRESTARTINTERVAL", e6[517] = "JPEGLOSSLESSPREDICTORS", e6[518] = "JPEGPOINTTRANSFORM", e6[519] = "JPEGQTABLES", e6[520] = "JPEGDCTABLES", e6[521] = "JPEGACTABLES", e6[529] = "YCBCRCOEFFICIENTS", e6[530] = "YCBCRSUBSAMPLING", e6[531] = "YCBCRPOSITIONING", e6[532] = "REFERENCEBLACKWHITE", e6[700] = "XMP", e6[33550] = "GEOPIXELSCALE", e6[33922] = "GEOTIEPOINTS", e6[33432] = "COPYRIGHT", e6[42112] = "GDAL_METADATA", e6[42113] = "GDAL_NODATA", e6[50844] = "RPCCOEFFICIENT", e6[34264] = "GEOTRANSMATRIX", e6[34735] = "GEOKEYDIRECTORY", e6[34736] = "GEODOUBLEPARAMS", e6[34737] = "GEOASCIIPARAMS", e6[34665] = "EXIFIFD", e6[34853] = "GPSIFD", e6[40965] = "INTEROPERABILITYIFD", e6;
})();
var i6 = (() => {
  const i10 = e4.slice();
  return i10[36864] = "ExifVersion", i10[40960] = "FlashpixVersion", i10[40961] = "ColorSpace", i10[42240] = "Gamma", i10[37121] = "ComponentsConfiguration", i10[37122] = "CompressedBitsPerPixel", i10[40962] = "PixelXDimension", i10[40963] = "PixelYDimension", i10[37500] = "MakerNote", i10[37510] = "UserComment", i10[40964] = "RelatedSoundFile", i10[36867] = "DateTimeOriginal", i10[36868] = "DateTimeDigitized", i10[36880] = "OffsetTime", i10[36881] = "OffsetTimeOriginal", i10[36882] = "OffsetTimeDigitized", i10[37520] = "SubSecTime", i10[37521] = "SubSecTimeOriginal", i10[37522] = "SubSecTimeDigitized", i10[37888] = "Temperature", i10[37889] = "Humidity", i10[37890] = "Pressure", i10[37891] = "WaterDepth", i10[37892] = "Acceleration", i10[37893] = "CameraElevationAngle", i10[42016] = "ImageUniqueID", i10[42032] = "CameraOwnerName", i10[42033] = "BodySerialNumber", i10[42034] = "LensSpecification", i10[42035] = "LensMake", i10[42036] = "LensModel", i10[42037] = "LensSerialNumber", i10[33434] = "ExposureTime", i10[33437] = "FNumber", i10[34850] = "ExposureProgram", i10[34852] = "SpectralSensitivity", i10[34855] = "PhotographicSensitivity", i10[34856] = "OECF", i10[34864] = "SensitivityType", i10[34865] = "StandardOutputSensitivity", i10[34866] = "RecommendedExposureIndex", i10[34867] = "ISOSpeed", i10[34868] = "ISOSpeedLatitudeyyy", i10[34869] = "ISOSpeedLatitudezzz", i10[37377] = "ShutterSpeedValue", i10[37378] = "ApertureValue", i10[37379] = "BrightnessValue", i10[37380] = "ExposureBiasValue", i10[37381] = "MaxApertureValue", i10[37382] = "SubjectDistance", i10[37383] = "MeteringMode", i10[37384] = "LightSource", i10[37385] = "Flash", i10[37386] = "FocalLength", i10[37396] = "SubjectArea", i10[41483] = "FlashEnergy", i10[41484] = "SpatialFrequencyResponse", i10[41486] = "FocalPlaneXResolution", i10[41487] = "FocalPlaneYResolution", i10[41488] = "FocalPlaneResolutionUnit", i10[41492] = "SubjectLocation", i10[41493] = "ExposureIndex", i10[41495] = "SensingMethod", i10[41728] = "FileSource", i10[41729] = "SceneType", i10[41730] = "CFAPattern", i10[41985] = "CustomRendered", i10[41986] = "ExposureMode", i10[41987] = "WhiteBalance", i10[41988] = "DigitalZoomRatio", i10[41989] = "FocalLengthIn35mmFilm", i10[41990] = "SceneCaptureType", i10[41991] = "GainControl", i10[41992] = "Contrast", i10[41993] = "Saturation", i10[41994] = "Sharpness", i10[41995] = "DeviceSettingDescription", i10[41996] = "SubjectDistanceRange", i10;
})();
var t4 = ["GPSVersionID", "GPSLatitudeRef", "GPSLatitude", "GPSLongitudeRef", "GPSLongitude", "GPSAltitudeRef", "GPSAltitude", "GPSTimeStamp", "GPSSatellites", "GPSStatus", "GPSMeasureMode", "GPSDOP", "GPSSpeedRef", "GPSSpeed", "GPSTrackRef", "GPSTrack", "GPSImgDirectionRef", "GPSImgDirection", "GPSMapDatum", "GPSDestLatitudeRef", "GPSDestLatitude", "GPSDestLongitudeRef", "GPSDestLongitude", "GPSDestBearingRef", "GPSDestBearing", "GPSDestDistanceRef", "GPSDestDistance", "GPSProcessingMethod", "GPSAreaInformation", "GPSDateStamp", "GPSDifferential", "GPSHPositioningError"];
var o7 = (() => {
  const e6 = [];
  return e6[1024] = "GTModelTypeGeoKey", e6[1025] = "GTRasterTypeGeoKey", e6[1026] = "GTCitationGeoKey", e6[2048] = "GeographicTypeGeoKey", e6[2049] = "GeogCitationGeoKey", e6[2050] = "GeogGeodeticDatumGeoKey", e6[2051] = "GeogPrimeMeridianGeoKey", e6[2052] = "GeogLinearUnitsGeoKey", e6[2053] = "GeogLinearUnitSizeGeoKey", e6[2054] = "GeogAngularUnitsGeoKey", e6[2055] = "GeogAngularUnitSizeGeoKey", e6[2056] = "GeogEllipsoidGeoKey", e6[2057] = "GeogSemiMajorAxisGeoKey", e6[2058] = "GeogSemiMinorAxisGeoKey", e6[2059] = "GeogInvFlatteningGeoKey", e6[2061] = "GeogPrimeMeridianLongGeoKey", e6[2060] = "GeogAzimuthUnitsGeoKey", e6[3072] = "ProjectedCSTypeGeoKey", e6[3073] = "PCSCitationGeoKey", e6[3074] = "ProjectionGeoKey", e6[3075] = "ProjCoordTransGeoKey", e6[3076] = "ProjLinearUnitsGeoKey", e6[3077] = "ProjLinearUnitSizeGeoKey", e6[3078] = "ProjStdParallel1GeoKey", e6[3079] = "ProjStdParallel2GeoKey", e6[3080] = "ProjNatOriginLongGeoKey", e6[3081] = "ProjNatOriginLatGeoKey", e6[3082] = "ProjFalseEastingGeoKey", e6[3083] = "ProjFalseNorthingGeoKey", e6[3084] = "ProjFalseOriginLongGeoKey", e6[3085] = "ProjFalseOriginLatGeoKey", e6[3086] = "ProjFalseOriginEastingGeoKey", e6[3087] = "ProjFalseOriginNorthingGeoKey", e6[3088] = "ProjCenterLongGeoKey", e6[3090] = "ProjCenterEastingGeoKey", e6[3091] = "ProjCenterNorthingGeoKey", e6[3092] = "ProjScaleAtNatOriginGeoKey", e6[3093] = "ProjScaleAtCenterGeoKey", e6[3094] = "ProjAzimuthAngleGeoKey", e6[3095] = "ProjStraightVertPoleLongGeoKey", e6[4096] = "VerticalCSTypeGeoKey", e6[4097] = "VerticalCitationGeoKey", e6[4098] = "VerticalDatumGeoKey", e6[4099] = "VerticalUnitsGeoKey", e6;
})();
var S2 = (i10, t7) => {
  let o12 = (t7 || e4)[i10];
  return void 0 === o12 && (o12 = "unknown" + String(i10)), o12;
};
var E = /* @__PURE__ */ new Map();
E.set("EXIFIFD", i6), E.set("GPSIFD", t4);
var n7 = { tiffTags: e4, ifdTags: E, geoKeys: o7, getTagName: S2 };

// node_modules/@arcgis/core/layers/support/rasterFormats/utils.js
var r10 = (() => {
  const r14 = new ArrayBuffer(4), n15 = new Uint8Array(r14);
  return new Uint32Array(r14)[0] = 1, 1 === n15[0];
})();

// node_modules/@arcgis/core/layers/support/rasterFormats/TiffDecoder.js
var f2 = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8, -1, -1, -1, 8, 8, 8];
var u4 = 4294967296;
var c2 = /* @__PURE__ */ new Set([1, 5, 6, 7, 8, 34712, 34887]);
function h3(e6, t7) {
  let n15 = "unknown";
  return 3 === e6 ? n15 = 64 === t7 ? "f64" : "f32" : 1 === e6 ? 1 === t7 ? n15 = "u1" : 2 === t7 ? n15 = "u2" : 4 === t7 ? n15 = "u4" : t7 <= 8 ? n15 = "u8" : t7 <= 16 ? n15 = "u16" : t7 <= 32 && (n15 = "u32") : 2 === e6 && (t7 <= 8 ? n15 = "s8" : t7 <= 16 ? n15 = "s16" : t7 <= 32 && (n15 = "s32")), n15;
}
function g3(e6) {
  let t7 = null;
  switch (e6 ? e6.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      t7 = Uint8Array;
      break;
    case "u16":
      t7 = Uint16Array;
      break;
    case "u32":
      t7 = Uint32Array;
      break;
    case "s8":
      t7 = Int8Array;
      break;
    case "s16":
      t7 = Int16Array;
      break;
    case "s32":
      t7 = Int32Array;
      break;
    case "f64":
      t7 = Float64Array;
      break;
    default:
      t7 = Float32Array;
  }
  return t7;
}
function E2(e6, t7) {
  return { x: t7[0] * e6.x + t7[1] * e6.y + t7[2], y: t7[3] * e6.x + t7[4] * e6.y + t7[5] };
}
function T(e6, t7) {
  var _a;
  return (_a = e6.get(t7)) == null ? void 0 : _a.values;
}
function I(e6, t7) {
  var _a;
  return (_a = e6.get(t7)) == null ? void 0 : _a.values;
}
function w2(e6, t7) {
  var _a, _b;
  return (_b = (_a = e6.get(t7)) == null ? void 0 : _a.values) == null ? void 0 : _b[0];
}
function p(e6, t7) {
  var _a, _b;
  return (_b = (_a = e6.get(t7)) == null ? void 0 : _a.values) == null ? void 0 : _b[0];
}
function d(e6, t7, n15, a15 = 0, i10 = n7.tiffTags, s8 = 4) {
  const l6 = 8 === s8, o12 = l6 ? C2(new DataView(e6, n15, 8), 0, t7) : new DataView(e6, n15, 2).getUint16(0, t7), f6 = 4 + 2 * s8, u11 = l6 ? 8 : 2, c6 = u11 + o12 * f6;
  if (n15 + c6 > e6.byteLength) return { success: false, ifd: null, nextIFD: null, requiredBufferSize: c6 };
  const h7 = n15 + c6 + 4 <= e6.byteLength ? v(new DataView(e6, n15 + c6, 8 === s8 ? 8 : 4), 0, t7, 8 === s8) : null, g7 = n15 + u11, E3 = /* @__PURE__ */ new Map();
  let T4, I4, w5, p6, d6, m7 = 0, y4 = 0;
  for (let A4 = 0; A4 < o12; A4++) {
    I4 = new DataView(e6, g7 + f6 * A4, f6), w5 = I4.getUint16(0, t7), d6 = I4.getUint16(2, t7), p6 = n7.getTagName(w5, i10);
    const n16 = [];
    2 === s8 ? (m7 = I4.getUint16(4, t7), y4 = I4.getUint16(6, t7)) : 4 === s8 ? (m7 = I4.getUint32(4, t7), y4 = I4.getUint32(8, t7)) : 8 === s8 && (m7 = v(I4, 4, t7, true), y4 = v(I4, 12, t7, true), n16.push(I4.getUint32(12, t7)), n16.push(I4.getUint32(16, t7))), T4 = { id: w5, type: d6, valueCount: m7, valueOffset: y4, valueOffsets: n16, values: null }, L(e6, t7, T4, a15, false, s8), E3.set(p6, T4);
  }
  return { success: true, ifd: E3, nextIFD: h7, requiredBufferSize: c6 };
}
var m2 = (e6, t7) => u3(e6, { inputOffset: t7 }).pixels[0];
function y(e6, t7) {
  if (1 !== t7 && 2 !== t7 && 4 !== t7) return e6;
  const n15 = new Uint8Array(e6), a15 = 8 / t7, i10 = new Uint8Array(e6.byteLength * a15);
  let s8 = 0;
  const r14 = 2 ** t7 - 1;
  for (let l6 = 0; l6 < n15.length; l6++) {
    const e7 = n15[l6];
    for (let n16 = 0; n16 < a15; n16++) i10[s8++] = e7 << t7 * n16 >>> 8 - t7 & r14;
  }
  return i10.buffer;
}
function A(e6, n15, a15) {
  const i10 = new a5();
  i10.parse(e6), i10.colorTransform = 6 === a15 ? -1 : 0;
  const s8 = i10.getData(i10.width, i10.height, 1 !== n15 && 4 !== n15);
  return new Uint8Array(s8.buffer);
}
function S3(e6) {
  const t7 = new s3(e6).getBytes(), n15 = new ArrayBuffer(t7.length), a15 = new Uint8Array(n15);
  return a15.set(t7), a15;
}
async function M(e6, t7, a15, s8, r14) {
  const o12 = r10 === t7, f6 = p(a15, "BITSPERSAMPLE"), u11 = p(a15, "SAMPLESPERPIXEL") ?? 1, c6 = p(a15, "PHOTOMETRICINTERPRETATION"), E3 = p(a15, "SAMPLEFORMAT") ?? 1, T4 = h3(E3, f6), I4 = p(a15, "COMPRESSION") ?? 1, w5 = g3(T4);
  let d6, M3, P3;
  if (34887 === I4) return await r6(), m2(e6, s8);
  if (1 === I4) d6 = e6.slice(s8, s8 + r14), M3 = new Uint8Array(d6);
  else if (8 === I4 || 32946 === I4) M3 = new Uint8Array(e6, s8, r14), M3 = S3(M3), d6 = M3.buffer;
  else if (6 === I4) M3 = new Uint8Array(e6, s8, r14), M3 = A(M3, u11, c6), d6 = M3.buffer;
  else if (7 === I4) {
    const t8 = a15.get("JPEGTABLES").values, n15 = t8.length - 2;
    M3 = new Uint8Array(n15 + r14 - 2);
    for (let e7 = 0; e7 < n15; e7++) M3[e7] = t8[e7];
    const i10 = new Uint8Array(e6, s8 + 2, r14 - 2);
    for (let e7 = 0; e7 < i10.length; e7++) M3[n15 + e7] = i10[e7];
    M3 = A(M3, u11, c6), d6 = M3.buffer;
  } else {
    if (5 !== I4) throw new Error("tiff-decode: unsupport compression " + I4);
    M3 = i5(e6, s8, r14, t7), d6 = M3.buffer;
  }
  if (d6 = y(d6, f6), "u8" === T4 || "s8" === T4 || o12) P3 = new w5(d6);
  else {
    d6 = new ArrayBuffer(M3.length);
    const e7 = new Uint8Array(d6);
    switch (T4) {
      case "u16":
      case "s16":
        for (let t8 = 0; t8 < M3.length; t8 += 2) e7[t8] = M3[t8 + 1], e7[t8 + 1] = M3[t8];
        break;
      case "u32":
      case "s32":
      case "f32":
        for (let t8 = 0; t8 < M3.length; t8 += 4) e7[t8] = M3[t8 + 3], e7[t8 + 1] = M3[t8 + 2], e7[t8 + 2] = M3[t8 + 1], e7[t8 + 3] = M3[t8];
    }
    P3 = new w5(d6);
  }
  const O4 = p(a15, "PREDICTOR") ?? 1, b4 = p(a15, "TILEWIDTH"), x4 = p(a15, "TILELENGTH");
  if (O4 > 1 && (5 === I4 || 8 === I4 || 32946 === I4) && b4 && x4) {
    const e7 = R(a15), t8 = new w5(P3.length);
    t8.set(P3), P3 = W(t8, x4, b4, 3 === E3 && 3 === O4, e7 ? 1 : u11);
  }
  return P3;
}
async function P(e6, t7, n15) {
  const a15 = I(n15, "TILEOFFSETS");
  if (void 0 === a15) return null;
  const i10 = I(n15, "TILEBYTECOUNTS"), { width: s8, height: r14, pixelType: l6, tileWidth: o12, tileHeight: f6 } = D([n15]), u11 = R(n15, t7), c6 = p(n15, "SAMPLESPERPIXEL") || t7.planes, h7 = s8 * r14, E3 = p(n15, "BITSPERSAMPLE"), T4 = 34887 === (p(n15, "COMPRESSION") ?? 1), w5 = g3(l6), d6 = [];
  for (let g7 = 0; g7 < c6; g7++) d6.push(new w5(h7));
  let m7, y4, A4, S6, P3, O4, b4, x4, L3, N2, U4, k4, C5;
  const G3 = Math.ceil(s8 / o12), v5 = new Uint8Array(h7).fill(255);
  let F2 = false;
  if (E3 % 8 == 0) if (T4 && u11 && c6 > 1) {
    const l7 = Math.round(a15.length / c6);
    for (m7 = 0; m7 < l7; m7++) {
      O4 = Math.floor(m7 / G3) * f6, b4 = m7 % G3 * o12, x4 = O4 * s8 + b4;
      for (let l8 = 0; l8 < c6; l8++) {
        const u12 = m7 * c6 + l8;
        for (0 === i10[u12] ? (A4 = null, F2 = true) : A4 = await M(e6, t7.littleEndian, n15, a15[u12], i10[u12]), N2 = 0, L3 = x4, k4 = Math.min(o12, s8 - b4), U4 = Math.min(f6, r14 - O4), C5 = d6[l8], S6 = 0; S6 < U4; S6++) for (L3 = x4 + S6 * s8, N2 = S6 * o12, P3 = 0; P3 < k4; P3++, L3++, N2++) A4 ? C5[L3] = A4[N2] : v5[L3] = 0;
      }
    }
  } else for (m7 = 0; m7 < a15.length; m7++) for (O4 = Math.floor(m7 / G3) * f6, b4 = m7 % G3 * o12, x4 = O4 * s8 + b4, 0 === i10[m7] ? (A4 = null, F2 = true) : A4 = await M(e6, t7.littleEndian, n15, a15[m7], i10[m7]), N2 = 0, L3 = x4, k4 = Math.min(o12, s8 - b4), U4 = Math.min(f6, r14 - O4), y4 = 0; y4 < c6; y4++) if (C5 = d6[y4], u11 || T4) for (S6 = 0; S6 < U4; S6++) for (L3 = x4 + S6 * s8, N2 = o12 * f6 * y4 + S6 * o12, P3 = 0; P3 < k4; P3++, L3++, N2++) A4 ? C5[L3] = A4[N2] : v5[L3] = 0;
  else for (S6 = 0; S6 < U4; S6++) for (L3 = x4 + S6 * s8, N2 = S6 * o12 * c6 + y4, P3 = 0; P3 < k4; P3++, L3++, N2 += c6) A4 ? C5[L3] = A4[N2] : v5[L3] = 0;
  return { width: s8, height: r14, pixelType: l6, pixels: d6, mask: F2 ? v5 : void 0 };
}
var O = (e6, t7, n15) => {
  const a15 = r10 === t7.littleEndian, s8 = I(n15, "STRIPOFFSETS");
  if (void 0 === s8) return null;
  const { width: r14, height: o12, pixelType: f6 } = D([n15]), u11 = p(n15, "SAMPLESPERPIXEL") || t7.planes, c6 = p(n15, "PHOTOMETRICINTERPRETATION"), h7 = r14 * o12, E3 = p(n15, "BITSPERSAMPLE"), T4 = g3(f6), w5 = new T4(h7 * u11), d6 = I(n15, "STRIPBYTECOUNTS"), m7 = p(n15, "ROWSPERSTRIP"), M3 = p(n15, "COMPRESSION") ?? 1;
  let P3, O4, b4, x4, L3, R3, N2, U4, k4;
  if (E3 % 8 == 0) for (P3 = 0; P3 < s8.length; P3++) {
    if (L3 = P3 * (m7 * r14) * u11, "u8" === f6 || "s8" === f6 || a15) 8 === M3 || 32946 === M3 ? (N2 = new Uint8Array(e6, s8[P3], d6[P3]), N2 = S3(N2), R3 = N2.buffer) : 6 === M3 ? (N2 = new Uint8Array(e6, s8[P3], d6[P3]), N2 = A(N2, u11, c6), R3 = N2.buffer) : 5 === M3 ? (N2 = i5(e6, s8[P3], d6[P3], t7.littleEndian), R3 = N2.buffer) : R3 = e6.slice(s8[P3], s8[P3] + d6[P3]), R3 = y(R3, E3), x4 = new T4(R3);
    else {
      switch (6 === M3 || 8 === M3 || 32946 === M3 ? (N2 = new Uint8Array(e6, s8[P3], d6[P3]), U4 = S3(N2), R3 = U4.buffer) : (R3 = new ArrayBuffer(d6[P3]), N2 = new Uint8Array(e6, s8[P3], d6[P3]), U4 = new Uint8Array(R3)), f6) {
        case "u16":
        case "s16":
          for (b4 = 0; b4 < N2.length; b4 += 2) U4[b4] = N2[b4 + 1], U4[b4 + 1] = N2[b4];
          break;
        case "u32":
        case "s32":
        case "f32":
          for (b4 = 0; b4 < N2.length; b4 += 4) U4[b4] = N2[b4 + 3], U4[b4 + 1] = N2[b4 + 2], U4[b4 + 2] = N2[b4 + 1], U4[b4 + 3] = N2[b4];
      }
      R3 = y(R3, E3), x4 = new T4(R3);
    }
    w5.set(x4, L3);
  }
  const C5 = [];
  if (1 === u11) C5.push(w5);
  else for (P3 = 0; P3 < u11; P3++) {
    for (k4 = new T4(h7), O4 = 0; O4 < h7; O4++) k4[O4] = w5[O4 * u11 + P3];
    C5.push(k4);
  }
  return { width: r14, height: o12, pixelType: f6, pixels: C5 };
};
var b = (e6, t7, n15) => {
  if (!(e6.length > 0 && t7 && n15)) return null;
  let a15, i10, s8;
  const r14 = e6[0].length, l6 = e6.length, o12 = new Uint8Array(r14);
  for (let f6 = 0; f6 < l6; f6++) if (a15 = e6[f6], i10 = t7[f6], s8 = n15[f6], 0 === f6) for (let e7 = 0; e7 < r14; e7++) o12[e7] = a15[e7] < i10 || a15[e7] > s8 ? 0 : 1;
  else for (let e7 = 0; e7 < r14; e7++) o12[e7] && (o12[e7] = a15[e7] < i10 || a15[e7] > s8 ? 0 : 1);
  return o12;
};
var x = (e6) => {
  if (!e6) return null;
  const t7 = e6.match(/<Item(.*?)Item>/gi);
  if (!t7 || 0 === t7.length) return null;
  const n15 = /* @__PURE__ */ new Map();
  let a15, i10, s8, r14, l6;
  for (let w5 = 0; w5 < t7.length; w5++) a15 = t7[w5], i10 = a15.slice(6, a15.indexOf(">")), r14 = a15.indexOf("sample="), r14 > -1 && (l6 = a15.slice(r14 + 8, a15.indexOf('"', r14 + 8))), r14 = a15.indexOf("name="), r14 > -1 && (i10 = a15.slice(r14 + 6, a15.indexOf('"', r14 + 6))), i10 && (s8 = a15.slice(a15.indexOf(">") + 1, a15.indexOf("</Item>")).trim(), null != l6 ? n15.has(i10) ? n15.get(i10)[l6] = s8 : n15.set(i10, [s8]) : n15.set(i10, s8)), l6 = null;
  const o12 = n15.get("STATISTICS_MINIMUM"), f6 = n15.get("STATISTICS_MAXIMUM"), u11 = n15.get("STATISTICS_MEAN"), c6 = n15.get("STATISTICS_STDDEV");
  let h7 = null;
  if (o12 && f6) {
    h7 = [];
    for (let e7 = 0; e7 < o12.length; e7++) h7.push({ min: parseFloat(o12[e7]), max: parseFloat(f6[e7]), avg: u11 && parseFloat(u11[e7]), stddev: c6 && parseFloat(c6[e7]) });
  }
  const g7 = n15.get("BandName"), E3 = n15.get("WavelengthMin"), T4 = n15.get("WavelengthMax");
  let I4 = null;
  if (g7) {
    I4 = [];
    for (let e7 = 0; e7 < g7.length; e7++) I4.push({ BandName: g7[e7], WavelengthMin: E3 && parseFloat(E3[e7]), WavelengthMax: T4 && parseFloat(T4[e7]) });
  }
  return { statistics: h7, bandProperties: I4, dataType: n15.get("DataType"), rawMetadata: n15 };
};
function L(e6, t7, n15, a15 = 0, i10 = false, s8 = 4) {
  if (n15.values) return true;
  const r14 = n15.type, l6 = n15.valueCount;
  let o12 = n15.valueOffset, c6 = [];
  const h7 = f2[r14], g7 = 8 * h7, E3 = l6 * h7, T4 = l6 * f2[r14] * 8;
  let I4, w5;
  const p6 = 8 === s8 ? 64 : 32, d6 = n15.valueOffsets;
  if (T4 > p6) {
    if (E3 > (i10 ? e6.byteLength : e6 ? e6.byteLength - o12 + a15 : 0)) return n15.offlineOffsetSize = [o12, E3], n15.values = null, false;
  }
  if (T4 <= p6) {
    if (!t7) if (p6 <= 32) o12 >>>= 32 - T4;
    else {
      const e7 = (d6 == null ? void 0 : d6.length) ? d6[0] : o12 >>> 0, t8 = (d6 == null ? void 0 : d6.length) ? d6[1] : Math.round((o12 - e7) / u4);
      T4 <= 32 ? (o12 = e7 >>> 32 - T4, d6[0] = o12) : (o12 = e7 * 2 ** (32 - T4) + (t8 >>> 32 - T4), d6[0] = e7, d6[1] = t8 >>> 32 - T4);
    }
    if (1 === l6 && g7 === p6) c6 = [o12];
    else if (64 === p6) {
      const e7 = (d6 == null ? void 0 : d6.length) ? d6[0] : o12 >>> 0, t8 = (d6 == null ? void 0 : d6.length) ? d6[1] : Math.round((o12 - e7) / u4);
      let n16 = e7, a16 = 32;
      for (w5 = 1; w5 <= l6; w5++) {
        const e8 = 32 - g7 * w5 % 32;
        if (a16 < g7) {
          const i11 = n16 << e8 >>> 32 - a16, s9 = t8 << 32 - a16 >>> 32 - a16;
          n16 = t8, c6.push(i11 + s9 * 2 ** (g7 - a16)), a16 -= 32 - (g7 - a16);
        } else c6.push(n16 << e8 >>> 32 - g7), a16 -= g7;
        0 === a16 && (a16 = 32, n16 = t8);
      }
    } else for (w5 = 1; w5 <= l6; w5++) {
      const e7 = 32 - g7 * w5;
      c6.push(o12 << e7 >>> 32 - g7);
    }
  } else {
    o12 -= a15, i10 && (o12 = 0);
    for (let n16 = o12; n16 < o12 + E3; n16 += h7) {
      switch (r14) {
        case 1:
        case 2:
        case 7:
          I4 = new DataView(e6, n16, 1).getUint8(0);
          break;
        case 3:
          I4 = new DataView(e6, n16, 2).getUint16(0, t7);
          break;
        case 4:
        case 13:
          I4 = new DataView(e6, n16, 4).getUint32(0, t7);
          break;
        case 5:
          I4 = new DataView(e6, n16, 4).getUint32(0, t7) / new DataView(e6, n16 + 4, 4).getUint32(0, t7);
          break;
        case 6:
          I4 = new DataView(e6, n16, 1).getInt8(0);
          break;
        case 8:
          I4 = new DataView(e6, n16, 2).getInt16(0, t7);
          break;
        case 9:
          I4 = new DataView(e6, n16, 4).getInt32(0, t7);
          break;
        case 10:
          I4 = new DataView(e6, n16, 4).getInt32(0, t7) / new DataView(e6, n16 + 4, 4).getInt32(0, t7);
          break;
        case 11:
          I4 = new DataView(e6, n16, 4).getFloat32(0, t7);
          break;
        case 12:
          I4 = new DataView(e6, n16, 8).getFloat64(0, t7);
          break;
        case 16:
        case 18:
          I4 = C2(new DataView(e6, n16, 8), 0, t7);
          break;
        case 17:
          I4 = G(new DataView(e6, n16, 8), 0, t7);
          break;
        default:
          I4 = null;
      }
      c6.push(I4);
    }
  }
  if (2 === r14) {
    let e7 = "";
    const t8 = c6;
    for (c6 = [], w5 = 0; w5 < t8.length; w5++) 0 === t8[w5] && "" !== e7 ? (c6.push(e7), e7 = "") : e7 += String.fromCharCode(t8[w5]);
    "" === e7 && 0 !== c6.length || c6.push(e7);
  }
  return n15.values = c6, true;
}
function D(e6) {
  const t7 = e6[0], n15 = p(t7, "TILEWIDTH"), a15 = p(t7, "TILELENGTH"), i10 = p(t7, "IMAGEWIDTH"), s8 = p(t7, "IMAGELENGTH"), r14 = p(t7, "BITSPERSAMPLE"), l6 = p(t7, "SAMPLESPERPIXEL"), o12 = p(t7, "SAMPLEFORMAT") ?? 1, f6 = h3(o12, r14), u11 = R(t7), g7 = T(t7, "GDAL_NODATA");
  let d6 = null;
  (g7 == null ? void 0 : g7.length) && (d6 = g7.map((e7) => parseFloat(e7)), d6.some((e7) => isNaN(e7)) && (d6 = null));
  const m7 = p(t7, "COMPRESSION") ?? 1;
  let y4;
  switch (m7) {
    case 1:
      y4 = "NONE";
      break;
    case 2:
    case 3:
    case 4:
    case 32771:
      y4 = "CCITT";
      break;
    case 5:
      y4 = "LZW";
      break;
    case 6:
    case 7:
      y4 = "JPEG";
      break;
    case 32773:
      y4 = "PACKBITS";
      break;
    case 8:
    case 32946:
      y4 = "DEFLATE";
      break;
    case 34712:
      y4 = "JPEG2000";
      break;
    case 34887:
      y4 = "LERC";
      break;
    default:
      y4 = String(m7);
  }
  let A4 = true, S6 = "";
  c2.has(m7) || (A4 = false, S6 += "unsupported tag compression " + m7), o12 > 3 && (A4 = false, S6 += "unsupported tag sampleFormat " + o12), 1 !== r14 && 2 !== r14 && 4 !== r14 && r14 % 8 != 0 && (A4 = false, S6 += "unsupported tag bitsPerSample " + r14);
  const M3 = w2(t7, "GEOASCIIPARAMS");
  let P3;
  if (M3) {
    const e7 = M3.split("|").find((e8) => e8.includes("ESRI PE String = ")), t8 = e7 ? e7.replace("ESRI PE String = ", "") : "";
    P3 = t8.startsWith("COMPD_CS") || t8.startsWith("PROJCS") || t8.startsWith("GEOGCS") ? { wkid: null, wkt: t8 } : null;
  }
  const O4 = I(t7, "GEOTIEPOINTS"), b4 = I(t7, "GEOPIXELSCALE"), L3 = I(t7, "GEOTRANSMATRIX"), D4 = t7.has("GEOKEYDIRECTORY") ? t7.get("GEOKEYDIRECTORY").data : null;
  let k4, C5, G3 = false, v5 = false;
  if (D4) {
    G3 = 2 === p(D4, "GTRasterTypeGeoKey");
    const e7 = p(D4, "GTModelTypeGeoKey");
    if (2 === e7) {
      const e8 = p(D4, "GeographicTypeGeoKey");
      e8 >= 1024 && e8 <= 32766 && (P3 = { wkid: e8 }), P3 || 32767 !== e8 || (v5 = true, P3 = { wkid: 4326 });
    } else if (1 === e7) {
      const e8 = p(D4, "ProjectedCSTypeGeoKey");
      e8 >= 1024 && e8 <= 32766 && (P3 = { wkid: e8 });
    }
  }
  if (b4 && O4 && O4.length >= 6 ? (k4 = [b4[0], 0, O4[3] - O4[0] * b4[0], 0, -Math.abs(b4[1]), O4[4] - O4[1] * b4[1]], G3 && (k4[2] -= 0.5 * k4[0] + 0.5 * k4[1], k4[5] -= 0.5 * k4[3] + 0.5 * k4[4])) : L3 && 16 === L3.length && (k4 = G3 ? [L3[0], L3[1], L3[3] - 0.5 * L3[0], L3[4], L3[5], L3[7] - 0.5 * L3[5]] : [L3[0], L3[1], L3[3], L3[4], L3[5], L3[7]]), k4) {
    const e7 = [{ x: 0, y: s8 }, { x: 0, y: 0 }, { x: i10, y: s8 }, { x: i10, y: 0 }];
    let t8, n16 = Number.POSITIVE_INFINITY, a16 = Number.POSITIVE_INFINITY, r15 = Number.NEGATIVE_INFINITY, l7 = Number.NEGATIVE_INFINITY;
    for (let i11 = 0; i11 < e7.length; i11++) t8 = E2(e7[i11], k4), n16 = t8.x > n16 ? n16 : t8.x, r15 = t8.x < r15 ? r15 : t8.x, a16 = t8.y > a16 ? a16 : t8.y, l7 = t8.y < l7 ? l7 : t8.y;
    C5 = { xmin: n16, xmax: r15, ymin: a16, ymax: l7, spatialReference: P3 };
  } else C5 = { xmin: -0.5, ymin: 0.5 - s8, xmax: i10 - 0.5, ymax: 0.5, spatialReference: P3 };
  v5 && (C5.xmax - C5.xmin > 400 || Math.max(Math.abs(C5.xmin), Math.abs(C5.xmax)) > 361) && (P3 = null, C5.spatialReference = null);
  const F2 = N(e6);
  let B4, W2, H3, Y2, _2;
  if (F2.length > 0) {
    H3 = Math.round(Math.log(i10 / p(F2[0], "IMAGEWIDTH")) / Math.LN2);
    const e7 = F2[F2.length - 1];
    Y2 = F2.length, B4 = p(e7, "TILEWIDTH"), W2 = p(e7, "TILELENGTH");
  }
  B4 = null != Y2 && Y2 > 0 ? B4 || n15 : null, W2 = null != Y2 && Y2 > 0 ? W2 || a15 : null, n15 && (_2 = [{ maxCol: Math.ceil(i10 / n15) - 1, maxRow: Math.ceil(s8 / a15) - 1, minRow: 0, minCol: 0 }], F2.forEach((e7) => {
    _2.push({ maxCol: Math.ceil(p(e7, "IMAGEWIDTH") / p(e7, "TILEWIDTH")) - 1, maxRow: Math.ceil(p(e7, "IMAGELENGTH") / p(e7, "TILELENGTH")) - 1, minRow: 0, minCol: 0 });
  }));
  const j3 = w2(e6[0], "GDAL_METADATA"), K = x(j3);
  S6 += " " + V({ width: i10, height: s8, tileWidth: n15, tileHeight: a15, planes: l6, ifds: e6 });
  const X = U2(e6).length === F2.length + 1, J = (F2 == null ? void 0 : F2.length) ? F2.map((e7) => ({ x: i10 / p(e7, "IMAGEWIDTH"), y: s8 / p(e7, "IMAGELENGTH") })) : void 0;
  return { width: i10, height: s8, tileWidth: n15, tileHeight: a15, planes: l6, isBSQ: u11, pixelType: f6, compression: y4, noData: d6, hasMaskBand: X, isSupported: A4, pyramidResolutions: J, message: S6, extent: C5, isPseudoGeographic: v5, affine: b4 ? null : k4, firstPyramidLevel: H3, maximumPyramidLevel: Y2, pyramidBlockWidth: B4, pyramidBlockHeight: W2, tileBoundary: _2, metadata: K };
}
function R(e6, t7) {
  const n15 = T(e6, "PLANARCONFIGURATION");
  return n15 ? 2 === n15[0] : !!t7 && t7.isBSQ;
}
function N(e6) {
  return e6.filter((e7) => 1 === p(e7, "NEWSUBFILETYPE"));
}
function U2(e6) {
  return e6.filter((e7) => {
    const t7 = !(4 & ~(p(e7, "NEWSUBFILETYPE") ?? 0)), n15 = 4 === p(e7, "PHOTOMETRICINTERPRETATION");
    return t7 && n15;
  });
}
function k(e6) {
  const { littleEndian: t7, isBigTiff: n15, firstIFDPos: a15 } = F(e6);
  let i10 = a15;
  const s8 = [];
  do {
    const a16 = B2(e6, t7, i10, 0, n7.tiffTags, n15 ? 8 : 4);
    if (!a16.success) break;
    s8.push(a16.ifd), i10 = a16.nextIFD;
  } while (i10 > 0);
  return { ...D(s8), littleEndian: t7, isBigTiff: n15, ifds: s8, pyramidIFDs: N(s8), maskIFDs: U2(s8) };
}
function C2(e6, t7, n15) {
  const a15 = e6.getUint32(t7, n15), i10 = e6.getUint32(t7 + 4, n15);
  return n15 ? i10 * u4 + a15 : a15 * u4 + i10;
}
function G(e6, t7, n15) {
  let a15 = n15 ? e6.getInt32(t7, n15) : e6.getUint32(t7, n15), i10 = n15 ? e6.getUint32(t7 + 4, n15) : e6.getInt32(t7 + 4, n15);
  const s8 = (n15 ? a15 : i10) >= 0 ? 1 : -1;
  n15 ? a15 *= s8 : i10 *= s8;
  return s8 * (n15 ? i10 * u4 + a15 : a15 * u4 + i10);
}
function v(e6, t7, n15, a15) {
  return a15 ? C2(e6, t7, n15) : e6.getUint32(t7, n15);
}
function F(e6) {
  const t7 = new DataView(e6, 0, 16), n15 = t7.getUint16(0, false);
  let a15 = null;
  if (18761 === n15) a15 = true;
  else {
    if (19789 !== n15) throw new Error("unexpected endianess byte");
    a15 = false;
  }
  const i10 = t7.getUint16(2, a15);
  if (42 !== i10 && 43 !== i10) throw new Error("unexpected tiff identifier");
  let s8 = 4;
  const r14 = 43 === i10;
  if (r14) {
    const e7 = t7.getUint16(s8, a15);
    if (s8 += 2, 8 !== e7) throw new Error("unsupported bigtiff version");
    if (0 !== t7.getUint16(s8, a15)) throw new Error("unsupported bigtiff version");
    s8 += 2;
  }
  return { littleEndian: a15, isBigTiff: r14, firstIFDPos: v(t7, s8, a15, r14) };
}
function B2(t7, n15, a15, i10 = 0, s8 = n7.tiffTags, l6 = 4) {
  const o12 = d(t7, n15, a15, i10, s8, l6);
  let f6;
  const u11 = o12.ifd;
  if (u11) {
    if (n7.ifdTags.forEach((e6, a16) => {
      u11.has(a16) && (f6 = u11.get(a16), f6.data = d(t7, n15, f6.valueOffset - i10, i10, e6).ifd);
    }), u11.has("GEOKEYDIRECTORY")) {
      f6 = u11.get("GEOKEYDIRECTORY");
      const e6 = f6.values;
      if (e6 && e6.length > 4) {
        const a16 = e6[0] + "." + e6[1] + "." + e6[2];
        f6.data = d(t7, n15, f6.valueOffset + 6 - i10, i10, n7.geoKeys, 2).ifd, f6.data && f6.data.set("GEOTIFFVersion", { id: 0, type: 2, valueCount: 1, valueOffset: null, values: [a16] });
      }
    }
    if (u11.has("XMP")) {
      f6 = u11.get("XMP");
      const t8 = f6.values;
      "number" == typeof t8[0] && 7 === f6.type && (f6.values = [r9(new Uint8Array(t8))]);
    }
  }
  return o12;
}
function V(e6) {
  const { width: t7, height: n15, tileHeight: a15, tileWidth: i10 } = e6, s8 = e6.planes, r14 = i10 ? i10 * a15 : t7 * n15, l6 = p(e6.ifds[0], "BITSPERSAMPLE");
  let o12 = "";
  return r14 * s8 > 2 ** 30 / (l6 > 8 ? l6 / 8 : 1) && (o12 = i10 ? "tiled tiff exceeding 1 gigabits per tile is not supported" : "scanline tiff exceeding 1 gigabits is not supported"), o12;
}
function W(e6, t7, n15, a15, i10) {
  const s8 = a15 ? 4 : 1, r14 = n15 * s8 * i10;
  a15 && (e6 = new Uint8Array(e6.buffer));
  for (let f6 = 0; f6 < t7; f6++) {
    const t8 = f6 * r14;
    for (let n16 = i10; n16 < r14; n16++) e6[t8 + n16] += e6[t8 + n16 - i10];
  }
  if (!a15) return e6;
  const l6 = new Uint8Array(e6.length), o12 = n15 * i10;
  for (let f6 = 0; f6 < t7; f6++) {
    const t8 = f6 * r14;
    for (let n16 = 0; n16 < o12; n16++) for (let a16 = 0; a16 < s8; a16++) l6[t8 + n16 * s8 + a16] = e6[t8 + n16 + (s8 - a16 - 1) * o12];
  }
  return new Float32Array(l6.buffer);
}
async function H2(e6, t7) {
  const { headerInfo: n15, ifd: a15, offsets: i10, sizes: r14 } = t7, l6 = [];
  for (let s8 = 0; s8 < i10.length; s8++) {
    r14[s8];
    const t8 = await M(e6, n15.littleEndian, a15, i10[s8], r14[s8] || e6.byteLength);
    l6.push(t8);
  }
  const o12 = R(a15, n15), f6 = p(a15, "BITSPERSAMPLE"), u11 = h3(p(a15, "SAMPLEFORMAT") ?? 1, f6), c6 = p(a15, "SAMPLESPERPIXEL") || n15.planes, E3 = g3(u11), T4 = p(a15, "TILEWIDTH"), I4 = p(a15, "TILELENGTH"), w5 = p(a15, "COMPRESSION") ?? 1, d6 = T4 * I4;
  let m7;
  const y4 = [];
  let A4 = l6[0];
  const S6 = 34887 === w5;
  for (let s8 = 0; s8 < c6; s8++) {
    if (m7 = new E3(d6), l6.length === c6) A4 = l6[s8], A4.length === d6 && (m7 = A4);
    else if (A4.length) if (o12 || S6) m7 = A4.length === d6 ? A4 : A4.slice(d6 * s8, d6 * (s8 + 1));
    else for (let e7 = 0; e7 < d6; e7++) m7[e7] = A4[e7 * c6 + s8];
    y4.push(m7);
  }
  const P3 = n15.noData ? n15.noData[0] : t7.noDataValue, O4 = n15.metadata ? n15.metadata.statistics : null, x4 = O4 ? O4.map((e7) => e7.min) : null, L3 = O4 ? O4.map((e7) => e7.max) : null, D4 = { pixelType: u11, width: T4, height: I4, pixels: y4, noDataValue: P3 };
  return null != P3 ? a3(D4, P3, { matchAllNoData: t7 == null ? void 0 : t7.matchAllNoData }) : x4 && L3 && t7.applyMinMaxConstraint && (D4.mask = b(y4, x4, L3)), D4;
}
async function Y(e6, t7 = {}) {
  const n15 = t7.pyramidLevel || 0, a15 = t7.headerInfo || k(e6), { ifds: i10, noData: r14 } = a15;
  if (0 === i10.length) throw new Error("no valid image file directory");
  const l6 = V(a15);
  if (l6) throw l6;
  let o12 = null;
  const f6 = -1 === n15 ? i10[i10.length - 1] : i10[n15], u11 = r14 ?? t7.noDataValue;
  if (o12 = a15.tileWidth ? await P(e6, a15, f6) : O(e6, a15, f6), !o12) return o12;
  if (null != u11) {
    a3(o12, u11, { matchAllNoData: null == r14 && (t7 == null ? void 0 : t7.matchAllNoData) });
  }
  return o12;
}

// node_modules/@arcgis/core/layers/support/rasterFormats/RasterCodec.js
var m3 = function(t7) {
  var e6, a15, i10, s8, r14, n15;
  function o12(t8) {
    var e7, a16, i11, s9, r15, n16, o13, h7, c6, l6, p6, d6, u11;
    for (this.data = t8, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, r15 = null; ; ) {
      switch (e7 = this.readUInt32(), h7 = (function() {
        var t9, e8;
        for (e8 = [], t9 = 0; t9 < 4; ++t9) e8.push(String.fromCharCode(this.data[this.pos++]));
        return e8;
      }).call(this).join(""), h7) {
        case "IHDR":
          this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
          break;
        case "acTL":
          this.animation = { numFrames: this.readUInt32(), numPlays: this.readUInt32() || 1 / 0, frames: [] };
          break;
        case "PLTE":
          this.palette = this.read(e7);
          break;
        case "fcTL":
          r15 && this.animation.frames.push(r15), this.pos += 4, r15 = { width: this.readUInt32(), height: this.readUInt32(), xOffset: this.readUInt32(), yOffset: this.readUInt32() }, s9 = this.readUInt16(), i11 = this.readUInt16() || 100, r15.delay = 1e3 * s9 / i11, r15.disposeOp = this.data[this.pos++], r15.blendOp = this.data[this.pos++], r15.data = [];
          break;
        case "IDAT":
        case "fdAT":
          for ("fdAT" === h7 && (this.pos += 4, e7 -= 4), t8 = (null != r15 ? r15.data : void 0) || this.imgData, p6 = 0; 0 <= e7 ? p6 < e7 : p6 > e7; 0 <= e7 ? ++p6 : --p6) t8.push(this.data[this.pos++]);
          break;
        case "tRNS":
          switch (this.transparency = {}, this.colorType) {
            case 3:
              if (this.transparency.indexed = this.read(e7), (c6 = 255 - this.transparency.indexed.length) > 0) for (d6 = 0; 0 <= c6 ? d6 < c6 : d6 > c6; 0 <= c6 ? ++d6 : --d6) this.transparency.indexed.push(255);
              break;
            case 0:
              this.transparency.grayscale = this.read(e7)[0];
              break;
            case 2:
              this.transparency.rgb = this.read(e7);
          }
          break;
        case "tEXt":
          n16 = (l6 = this.read(e7)).indexOf(0), o13 = String.fromCharCode.apply(String, l6.slice(0, n16)), this.text[o13] = String.fromCharCode.apply(String, l6.slice(n16 + 1));
          break;
        case "IEND":
          return r15 && this.animation.frames.push(r15), this.colors = (function() {
            switch (this.colorType) {
              case 0:
              case 3:
              case 4:
                return 1;
              case 2:
              case 6:
                return 3;
            }
          }).call(this), this.hasAlphaChannel = 4 === (u11 = this.colorType) || 6 === u11, a16 = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * a16, this.colorSpace = (function() {
            switch (this.colors) {
              case 1:
                return "DeviceGray";
              case 3:
                return "DeviceRGB";
            }
          }).call(this), void (this.imgData = new Uint8Array(this.imgData));
        default:
          this.pos += e7;
      }
      if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file");
    }
  }
  return o12.load = function(t8, e7, a16) {
    var i11;
    return "function" == typeof e7 && (a16 = e7), (i11 = new XMLHttpRequest()).open("GET", t8, true), i11.responseType = "arraybuffer", i11.onload = function() {
      var t9;
      return t9 = new o12(new Uint8Array(i11.response || i11.mozResponseArrayBuffer)), "function" == typeof (null != e7 ? e7.getContext : void 0) && t9.render(e7), "function" == typeof a16 ? a16(t9) : void 0;
    }, i11.send(null);
  }, a15 = 1, i10 = 2, e6 = 0, o12.prototype.read = function(t8) {
    var e7, a16;
    for (a16 = [], e7 = 0; 0 <= t8 ? e7 < t8 : e7 > t8; 0 <= t8 ? ++e7 : --e7) a16.push(this.data[this.pos++]);
    return a16;
  }, o12.prototype.readUInt32 = function() {
    return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o12.prototype.readUInt16 = function() {
    return this.data[this.pos++] << 8 | this.data[this.pos++];
  }, o12.prototype.decodePixels = function(t8) {
    var e7, a16, i11, s9, r15, n16, o13, h7, c6, p6, d6, u11, f6, m7, g7, w5, y4, x4, b4, k4, T4, I4, A4;
    if (null == t8 && (t8 = this.imgData), 0 === t8.length) return new Uint8Array(0);
    for (t8 = (t8 = new s3(t8)).getBytes(), w5 = (u11 = this.pixelBitlength / 8) * this.width, f6 = new Uint8Array(w5 * this.height), n16 = t8.length, g7 = 0, m7 = 0, a16 = 0; m7 < n16; ) {
      switch (t8[m7++]) {
        case 0:
          for (s9 = b4 = 0; b4 < w5; s9 = b4 += 1) f6[a16++] = t8[m7++];
          break;
        case 1:
          for (s9 = k4 = 0; k4 < w5; s9 = k4 += 1) e7 = t8[m7++], r15 = s9 < u11 ? 0 : f6[a16 - u11], f6[a16++] = (e7 + r15) % 256;
          break;
        case 2:
          for (s9 = T4 = 0; T4 < w5; s9 = T4 += 1) e7 = t8[m7++], i11 = (s9 - s9 % u11) / u11, y4 = g7 && f6[(g7 - 1) * w5 + i11 * u11 + s9 % u11], f6[a16++] = (y4 + e7) % 256;
          break;
        case 3:
          for (s9 = I4 = 0; I4 < w5; s9 = I4 += 1) e7 = t8[m7++], i11 = (s9 - s9 % u11) / u11, r15 = s9 < u11 ? 0 : f6[a16 - u11], y4 = g7 && f6[(g7 - 1) * w5 + i11 * u11 + s9 % u11], f6[a16++] = (e7 + Math.floor((r15 + y4) / 2)) % 256;
          break;
        case 4:
          for (s9 = A4 = 0; A4 < w5; s9 = A4 += 1) e7 = t8[m7++], i11 = (s9 - s9 % u11) / u11, r15 = s9 < u11 ? 0 : f6[a16 - u11], 0 === g7 ? y4 = x4 = 0 : (y4 = f6[(g7 - 1) * w5 + i11 * u11 + s9 % u11], x4 = i11 && f6[(g7 - 1) * w5 + (i11 - 1) * u11 + s9 % u11]), o13 = r15 + y4 - x4, h7 = Math.abs(o13 - r15), p6 = Math.abs(o13 - y4), d6 = Math.abs(o13 - x4), c6 = h7 <= p6 && h7 <= d6 ? r15 : p6 <= d6 ? y4 : x4, f6[a16++] = (e7 + c6) % 256;
          break;
        default:
          throw new Error("Invalid filter algorithm: " + t8[m7 - 1]);
      }
      g7++;
    }
    return f6;
  }, o12.prototype.decodePalette = function() {
    var t8, e7, a16, i11, s9, r15, n16, o13, h7;
    for (a16 = this.palette, r15 = this.transparency.indexed || [], s9 = new Uint8Array((r15.length || 0) + a16.length), i11 = 0, a16.length, t8 = 0, e7 = n16 = 0, o13 = a16.length; n16 < o13; e7 = n16 += 3) s9[i11++] = a16[e7], s9[i11++] = a16[e7 + 1], s9[i11++] = a16[e7 + 2], s9[i11++] = null != (h7 = r15[t8++]) ? h7 : 255;
    return s9;
  }, o12.prototype.copyToImageData = function(t8, e7) {
    var a16, i11, s9, r15, n16, o13, h7, c6, l6, p6, d6;
    if (i11 = this.colors, l6 = null, a16 = this.hasAlphaChannel, this.palette.length && (l6 = null != (d6 = this._decodedPalette) ? d6 : this._decodedPalette = this.decodePalette(), i11 = 4, a16 = true), c6 = (s9 = t8.data || t8).length, n16 = l6 || e7, r15 = o13 = 0, 1 === i11) for (; r15 < c6; ) h7 = l6 ? 4 * e7[r15 / 4] : o13, p6 = n16[h7++], s9[r15++] = p6, s9[r15++] = p6, s9[r15++] = p6, s9[r15++] = a16 ? n16[h7++] : this.transparency.grayscale && this.transparency.grayscale === p6 ? 0 : 255, o13 = h7;
    else for (; r15 < c6; ) h7 = l6 ? 4 * e7[r15 / 4] : o13, s9[r15++] = n16[h7++], s9[r15++] = n16[h7++], s9[r15++] = n16[h7++], s9[r15++] = a16 ? n16[h7++] : this.transparency.rgb && this.transparency.rgb[1] === n16[h7 - 3] && this.transparency.rgb[3] === n16[h7 - 2] && this.transparency.rgb[5] === n16[h7 - 1] ? 0 : 255, o13 = h7;
  }, o12.prototype.decode = function() {
    var t8;
    return t8 = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t8, this.decodePixels()), t8;
  }, r14 = t7.document && t7.document.createElement("canvas"), n15 = r14 && r14.getContext("2d"), s8 = function(t8) {
    var e7;
    return n15.width = t8.width, n15.height = t8.height, n15.clearRect(0, 0, t8.width, t8.height), n15.putImageData(t8, 0, 0), (e7 = new Image()).src = r14.toDataURL(), e7;
  }, o12.prototype.decodeFrames = function(t8) {
    var e7, a16, i11, r15, n16, o13, h7, c6;
    if (this.animation) {
      for (c6 = [], a16 = n16 = 0, o13 = (h7 = this.animation.frames).length; n16 < o13; a16 = ++n16) e7 = h7[a16], i11 = t8.createImageData(e7.width, e7.height), r15 = this.decodePixels(new Uint8Array(e7.data)), this.copyToImageData(i11, r15), e7.imageData = i11, c6.push(e7.image = s8(i11));
      return c6;
    }
  }, o12.prototype.renderFrame = function(t8, s9) {
    var r15, n16, o13;
    return r15 = (n16 = this.animation.frames)[s9], o13 = n16[s9 - 1], 0 === s9 && t8.clearRect(0, 0, this.width, this.height), (null != o13 ? o13.disposeOp : void 0) === a15 ? t8.clearRect(o13.xOffset, o13.yOffset, o13.width, o13.height) : (null != o13 ? o13.disposeOp : void 0) === i10 && t8.putImageData(o13.imageData, o13.xOffset, o13.yOffset), r15.blendOp === e6 && t8.clearRect(r15.xOffset, r15.yOffset, r15.width, r15.height), t8.drawImage(r15.image, r15.xOffset, r15.yOffset);
  }, o12.prototype.animate = function(t8) {
    var e7, a16, i11, s9, r15, n16, o13 = this;
    return a16 = 0, n16 = this.animation, s9 = n16.numFrames, i11 = n16.frames, r15 = n16.numPlays, (e7 = function() {
      var n17, h7;
      if (n17 = a16++ % s9, h7 = i11[n17], o13.renderFrame(t8, n17), s9 > 1 && a16 / s9 < r15) return o13.animation._timeout = setTimeout(e7, h7.delay);
    })();
  }, o12.prototype.stopAnimation = function() {
    var t8;
    return clearTimeout(null != (t8 = this.animation) ? t8._timeout : void 0);
  }, o12.prototype.render = function(t8) {
    var e7, a16;
    return t8._png && t8._png.stopAnimation(), t8._png = this, t8.width = this.width, t8.height = this.height, e7 = t8.getContext("2d"), this.animation ? (this.decodeFrames(e7), this.animate(e7)) : (a16 = e7.createImageData(this.width, this.height), this.copyToImageData(a16, this.decodePixels()), e7.putImageData(a16, 0, 0));
  }, o12;
}(self);
var g4 = /* @__PURE__ */ new Set(["jpg", "png", "bmp", "gif"]);
async function w3(e6, s8) {
  if (!r10) throw new s("rasterCoded:decode", "lerc decoder is not supported on big endian platform");
  await r6();
  const { offset: r14 } = s8, { width: h7, height: c6, pixelType: l6, statistics: p6, depthCount: d6, noDataValues: u11, bandMasks: m7, pixels: g7, mask: w5 } = u3(e6, { inputOffset: r14, returnInterleaved: s8.returnInterleaved }), y4 = new g2({ width: h7, height: c6, pixelType: l6.toLowerCase(), pixels: g7, mask: w5, statistics: p6.map(({ minValue: t7, maxValue: e7 }) => new l(t7, e7)), bandMasks: m7, depthCount: d6, noDataValues: u11 });
  return (p6 == null ? void 0 : p6.length) || y4.updateStatistics(), y4;
}
async function y2(t7, i10) {
  const s8 = await Y(t7, { ...i10, noDataValue: i10.tiffNoDataValue, matchAllNoData: i10.matchAllNoData });
  n2(s8);
  const r14 = new g2({ width: s8.width, height: s8.height, pixels: s8.pixels, pixelType: s8.pixelType.toLowerCase(), mask: s8.mask, bandMasks: s8.bandMasks, statistics: null });
  return r14.updateStatistics(), r14;
}
async function x2(t7, e6) {
  const i10 = await H2(t7, e6.customOptions), s8 = new g2({ width: i10.width, height: i10.height, pixels: i10.pixels, pixelType: i10.pixelType.toLowerCase(), mask: i10.mask, statistics: null });
  return s8.updateStatistics(), s8;
}
function b2(t7, e6) {
  const i10 = e6.pixelType || "u8", s8 = g2.getPixelArrayConstructor(i10), r14 = "u8" === i10 ? t7 : new s8(t7.buffer), n15 = [], o12 = e6.planes || 1;
  if (1 === o12) n15.push(r14);
  else for (let a15 = 0; a15 < o12; a15++) {
    const i11 = (e6.width || 1) * (e6.height || t7.length), h8 = new s8(i11);
    for (let t8 = 0; t8 < i11; t8++) h8[t8] = r14[t8 * o12 + a15];
    n15.push(h8);
  }
  const h7 = new g2({ width: e6.width || 1, height: e6.height || t7.length, pixels: n15, pixelType: i10, statistics: null });
  return h7.updateStatistics(), h7;
}
function k2(t7, e6) {
  return b2(new s3(new Uint8Array(t7)).getBytes(), e6);
}
function T2(t7, e6) {
  return b2(i5(t7, e6.offset, e6.eof, !e6.isInputBigEndian), e6);
}
function I2(t7, e6, i10) {
  const { pixelTypeCtor: s8 } = S4(e6.pixelType), r14 = (0, a7.decode)(t7, { width: e6.width, height: e6.height, pixelType: s8, format: i10 }), n15 = new g2({ width: e6.width, height: e6.height, pixels: r14.pixels, pixelType: e6.pixelType, mask: r14.mask, statistics: null });
  return n15.updateStatistics(), n15;
}
function A2(t7, e6) {
  const i10 = r5.decode(t7, e6.hasNoZlibMask ?? void 0), s8 = new g2({ width: i10.width, height: i10.height, pixels: i10.pixels, pixelType: "u8", mask: i10.mask, statistics: null });
  return s8.updateStatistics(), s8;
}
function C3(t7, e6) {
  const i10 = new Uint8Array(t7), s8 = new m3(i10), { width: r14, height: n15 } = e6, o12 = r14 * n15, h7 = s8.decode();
  let c6, l6 = 0, p6 = 0;
  const d6 = new Uint8Array(o12);
  for (l6 = 0; l6 < o12; l6++) d6[l6] = h7[4 * l6 + 3];
  const u11 = new g2({ width: r14, height: n15, pixels: [], pixelType: "u8", mask: d6, statistics: [] });
  for (l6 = 0; l6 < 3; l6++) {
    for (c6 = new Uint8Array(o12), p6 = 0; p6 < o12; p6++) c6[p6] = h7[4 * p6 + l6];
    u11.addData({ pixels: c6 });
  }
  return u11.updateStatistics(), u11;
}
async function v2(t7, e6, i10, r14) {
  const n15 = new i3(), o12 = { applyJpegMask: false, format: e6, ...i10 }, h7 = await n15.decode(t7, o12, r14), c6 = new g2(h7);
  return c6.updateStatistics(), c6;
}
function D2(e6) {
  if (null == e6) throw new s("rasterCodec:decode", "parameter encodeddata is required.");
  const a15 = new Uint8Array(e6, 0, 10);
  let i10 = "";
  return 255 === a15[0] && 216 === a15[1] ? i10 = "jpg" : 137 === a15[0] && 80 === a15[1] && 78 === a15[2] && 71 === a15[3] ? i10 = "png" : 67 === a15[0] && 110 === a15[1] && 116 === a15[2] && 90 === a15[3] && 73 === a15[4] && 109 === a15[5] && 97 === a15[6] && 103 === a15[7] && 101 === a15[8] && 32 === a15[9] ? i10 = "lerc" : 76 === a15[0] && 101 === a15[1] && 114 === a15[2] && 99 === a15[3] && 50 === a15[4] && 32 === a15[5] ? i10 = "lerc2" : 73 === a15[0] && 73 === a15[1] && 42 === a15[2] && 0 === a15[3] || 77 === a15[0] && 77 === a15[1] && 0 === a15[2] && 42 === a15[3] || 73 === a15[0] && 73 === a15[1] && 43 === a15[2] && 0 === a15[3] || 77 === a15[0] && 77 === a15[1] && 0 === a15[2] && 43 === a15[3] ? i10 = "tiff" : 71 === a15[0] && 73 === a15[1] && 70 === a15[2] ? i10 = "gif" : 66 === a15[0] && 77 === a15[1] ? i10 = "bmp" : String.fromCharCode.apply(null, a15).toLowerCase().includes("error") && (i10 = "error"), i10;
}
function U3(e6) {
  let a15 = null;
  switch (e6) {
    case "lerc":
    case "lerc2":
      a15 = w3;
      break;
    case "jpg":
      a15 = A2;
      break;
    case "png":
      a15 = C3;
      break;
    case "bsq":
    case "bip":
      a15 = (t7, a16) => I2(t7, a16, e6);
      break;
    case "tiff":
      a15 = y2;
      break;
    case "deflate":
      a15 = k2;
      break;
    case "lzw":
      a15 = T2;
      break;
    case "error":
      a15 = () => {
        throw new s("rasterCodec:decode", "input data contains error");
      };
      break;
    default:
      a15 = () => {
        throw new s("rasterCodec:decode", "unsupported raster format");
      };
  }
  return a15;
}
function S4(t7) {
  let e6 = null, a15 = null;
  switch (t7 ? t7.toLowerCase() : "f32") {
    case "u1":
    case "u2":
    case "u4":
    case "u8":
      a15 = 255, e6 = Uint8Array;
      break;
    case "u16":
      a15 = a15 || 65535, e6 = Uint16Array;
      break;
    case "u32":
      a15 = a15 || 2 ** 32 - 1, e6 = Uint32Array;
      break;
    case "s8":
      a15 = a15 || -128, e6 = Int8Array;
      break;
    case "s16":
      a15 = a15 || -32768, e6 = Int16Array;
      break;
    case "s32":
      a15 = a15 || 0 - 2 ** 31, e6 = Int32Array;
      break;
    default:
      e6 = Float32Array;
  }
  return { pixelTypeCtor: e6, noDataValue: a15 };
}
function O2(t7, e6 = 1) {
  if (!t7) return;
  const { pixels: i10, width: s8, height: r14, mask: n15 } = t7;
  if (!i10 || 0 === i10.length) return;
  const o12 = i10.length, h7 = s8 - 1, c6 = r14 - 1, l6 = [];
  let p6, d6, u11, f6, m7, g7, w5 = null;
  const y4 = g2.getPixelArrayConstructor(t7.pixelType);
  if (0 === e6) {
    for (p6 = 0; p6 < o12; p6++) {
      for (m7 = i10[p6], g7 = new y4(h7 * c6), d6 = 0; d6 < c6; d6++) for (f6 = d6 * s8, u11 = 0; u11 < h7; u11++) g7[d6 * h7 + u11] = m7[f6 + u11];
      l6.push(g7);
    }
    if (null != n15) for (w5 = new Uint8Array(h7 * c6), d6 = 0; d6 < c6; d6++) for (f6 = d6 * s8, u11 = 0; u11 < h7; u11++) w5[d6 * h7 + u11] = n15[f6 + u11];
  } else {
    for (p6 = 0; p6 < o12; p6++) {
      for (m7 = i10[p6], g7 = new y4(h7 * c6), d6 = 0; d6 < c6; d6++) for (f6 = d6 * s8, u11 = 0; u11 < h7; u11++) g7[d6 * h7 + u11] = (m7[f6 + u11] + m7[f6 + u11 + 1] + m7[f6 + s8 + u11] + m7[f6 + s8 + u11 + 1]) / 4;
      l6.push(g7);
    }
    if (n15) for (w5 = new Uint8Array(h7 * c6), d6 = 0; d6 < c6; d6++) for (f6 = d6 * s8, u11 = 0; u11 < h7; u11++) w5[d6 * h7 + u11] = Math.min.apply(null, [n15[f6 + u11], n15[f6 + u11 + 1], n15[f6 + s8 + u11], n15[f6 + s8 + u11 + 1]]);
  }
  t7.width = h7, t7.height = c6, t7.mask = w5, t7.pixels = l6;
}
function P2(t7) {
  let e6 = D2(t7);
  return "lerc2" === e6 ? e6 = "lerc" : "error" === e6 && (e6 = ""), e6;
}
async function j2(e6, i10 = {}, s8) {
  var _a;
  if (null == e6) throw new s("rasterCodec:decode", "missing encodeddata parameter.");
  let r14 = (_a = i10.format) == null ? void 0 : _a.toLowerCase();
  if (!("bsq" !== r14 && "bip" !== r14 || null != i10.width && null != i10.height)) throw new s("rasterCodec:decode", "requires width and height in options parameter.");
  if ("tiff" === r14 && i10.customOptions) return x2(e6, i10);
  if ((!r14 || "bsq" !== r14 && "bip" !== r14 && "deflate" !== r14 && "lzw" !== r14) && (r14 = D2(e6)), i10.useCanvas && g4.has(r14)) return v2(e6, r14, i10, s8);
  const n15 = U3(r14);
  let o12;
  i10.isPoint && (null != (i10 = { ...i10 }).width && i10.width++, null != i10.height && i10.height++);
  const { offsets: h7 } = i10;
  if (h7 && h7.length > 1) {
    const t7 = h7.map((t8, a15) => n15(e6.slice(t8, h7[a15 + 1]), i10)), s9 = await Promise.all(t7);
    o12 = s9[0], o12.pixels = s9.map((t8) => t8.pixels[0]);
    const r15 = s9.map((t8) => t8.mask);
    s9.some((t8) => null != t8) && (r15.forEach((t8, e7) => {
      null == t8 && (r15[e7] = new Uint8Array(o12.width * o12.height).fill(255));
    }), o12.bandMasks = r15, o12.mask = g2.combineBandMasks(r15)), o12.updateStatistics();
  } else o12 = await n15(e6, { ...i10, offset: (h7 == null ? void 0 : h7[0]) ?? i10.offset });
  return "jpg" !== r14 && null != i10.noDataValue && 1 === o12.depthCount && a3(o12, i10.noDataValue, { customFloatTolerance: i10.tolerance }), i10.isPoint && O2(o12), o12;
}

// node_modules/@arcgis/core/renderers/support/stretchRendererUtils.js
var n8 = new o({ none: "none", standardDeviation: "standard-deviation", histogramEqualization: "histogram-equalization", minMax: "min-max", percentClip: "percent-clip", sigmoid: "sigmoid" });
var a8 = { 0: "none", 3: "standardDeviation", 4: "histogramEqualization", 5: "minMax", 6: "percentClip", 9: "sigmoid" };

// node_modules/@arcgis/core/layers/support/rasterFunctions/stretchUtils.js
var i7 = 1;
var o8 = [0.299, 0.587, 0.114];
function r11(t7, n15 = 256) {
  n15 = Math.min(n15, 256);
  const { size: e6, counts: s8 } = t7, i10 = new Uint8Array(e6), o12 = s8.reduce((t8, e7) => t8 + e7 / n15, 0);
  let r14 = 0, a15 = 0, l6 = 0, u11 = o12;
  for (let f6 = 0; f6 < e6; f6++) if (l6 += s8[f6], !(f6 < e6 - 1 && l6 + s8[f6 + 1] < u11)) {
    for (; r14 < n15 - 1 && u11 < l6; ) r14++, u11 += o12;
    for (let t8 = a15; t8 <= f6; t8++) i10[t8] = r14;
    a15 = f6 + 1;
  }
  for (let f6 = a15; f6 < e6; f6++) i10[f6] = n15 - 1;
  return i10;
}
function a9(t7) {
  const { minCutOff: n15, maxCutOff: e6, gamma: s8, pixelType: i10, rounding: o12 } = t7;
  if (!["u8", "u16", "s8", "s16"].includes(i10)) return null;
  const r14 = n15.length, a15 = "s8" === i10 ? -127 : "s16" === i10 ? -32767 : 0, u11 = ["u16", "s16"].includes(i10) ? 65536 : 256, f6 = [], c6 = [], { minOutput: m7 = 0, maxOutput: h7 = 255 } = t7, p6 = h7 - m7;
  for (let l6 = 0; l6 < r14; l6++) c6[l6] = e6[l6] - n15[l6], f6[l6] = 0 === c6[l6] ? 0 : p6 / c6[l6];
  const g7 = [];
  if (s8 && s8.length >= r14) {
    const t8 = x3(r14, s8);
    for (let i11 = 0; i11 < r14; i11++) {
      const r15 = [];
      for (let l6 = 0; l6 < u11; l6++) {
        if (0 === c6[i11]) {
          r15[l6] = m7;
          continue;
        }
        const u12 = l6 + a15, f7 = (u12 - n15[i11]) / c6[i11];
        let g8 = 1;
        if (s8[i11] > 1 && (g8 -= (1 / p6) ** (f7 * t8[i11])), u12 < e6[i11] && u12 > n15[i11]) {
          const t9 = g8 * p6 * f7 ** (1 / s8[i11]) + m7;
          r15[l6] = "floor" === o12 ? Math.floor(t9) : "round" === o12 ? Math.round(t9) : t9;
        } else u12 >= e6[i11] ? r15[l6] = h7 : r15[l6] = m7;
      }
      g7[i11] = r15;
    }
  } else for (let l6 = 0; l6 < r14; l6++) {
    const t8 = [];
    for (let s9 = 0; s9 < u11; s9++) {
      const i11 = s9 + a15;
      if (i11 <= n15[l6]) t8[s9] = m7;
      else if (i11 >= e6[l6]) t8[s9] = h7;
      else {
        const e7 = (i11 - n15[l6]) * f6[l6] + m7;
        t8[s9] = "floor" === o12 ? Math.floor(e7) : "round" === o12 ? Math.round(e7) : e7;
      }
    }
    g7[l6] = t8;
  }
  if (null != t7.contrastOffset) {
    const n16 = l3(t7.contrastOffset, t7.brightnessOffset);
    for (let t8 = 0; t8 < r14; t8++) {
      const e7 = g7[t8];
      for (let t9 = 0; t9 < u11; t9++) e7[t9] = n16[e7[t9]];
    }
  }
  return { lut: g7, offset: a15 };
}
function l3(t7, n15) {
  const e6 = Math.min(Math.max(t7, -100), 100), s8 = Math.min(Math.max(n15 ?? 0, -100), 100), i10 = 255, o12 = 128, r14 = new Uint8Array(256);
  for (let a15 = 0; a15 < 256; a15++) {
    let t8 = 0;
    e6 > 0 && e6 < 100 ? t8 = (200 * a15 - 100 * i10 + 2 * i10 * s8) / (2 * (100 - e6)) + o12 : e6 <= 0 && e6 > -100 ? t8 = (200 * a15 - 100 * i10 + 2 * i10 * s8) * (100 + e6) / 2e4 + o12 : 100 === e6 ? (t8 = 200 * a15 - 100 * i10 + (i10 + 1) * (100 - e6) + 2 * i10 * s8, t8 = t8 > 0 ? i10 : 0) : -100 === e6 && (t8 = o12), r14[a15] = t8 > i10 ? i10 : t8 < 0 ? 0 : t8;
  }
  return r14;
}
function u5(t7, n15, e6) {
  const s8 = [];
  for (let i10 = 0; i10 < n15.length; i10++) {
    let r14 = 0, a15 = 0, l6 = 0;
    "min" in n15[i10] ? { min: r14, max: a15, avg: l6 } = n15[i10] : [r14, a15, l6] = n15[i10];
    let u11 = l6 ?? 0;
    "u8" !== t7 && (u11 = 255 * (u11 - r14) / (a15 - r14)), e6 && (u11 *= o8[i10]), s8.push(f3(u11));
  }
  return s8;
}
function f3(t7) {
  if (t7 <= 0 || t7 >= 255) return i7;
  const n15 = 255, e6 = t7 + (150 === t7 ? 0 : t7 < 150 ? 45 * Math.cos(0.01047 * t7) : 17 * Math.sin(0.021 * t7)), s8 = Math.log(t7 / n15), o12 = Math.log(e6 / n15);
  if (0 === o12) return i7;
  const r14 = s8 / o12;
  return isNaN(r14) ? i7 : Math.min(9.9, Math.max(0.01, r14));
}
function c3(t7, n15, e6, s8) {
  let i10 = 1 / 0, o12 = -1 / 0, r14 = 0, a15 = 0, l6 = 0, u11 = 0;
  const f6 = t7.length, c6 = /* @__PURE__ */ new Map(), m7 = [];
  for (let v5 = 0; v5 < f6; v5++) {
    const e7 = t7[v5];
    if (!n15 || n15[v5]) {
      m7.push(e7);
      const t8 = (c6.get(e7) ?? 0) + 1;
      c6.set(e7, t8), t8 > u11 && (u11 = t8, l6 = e7), i10 = e7 < i10 ? e7 : i10, o12 = e7 > o12 ? e7 : o12, r14 += e7, a15++;
    }
  }
  if (0 === a15) return { statistics: { min: 0, max: 0, avg: 0, stddev: 0, mode: 0, median: 0 }, histogram: null };
  const h7 = r14 / a15;
  let p6 = 0;
  for (let v5 = 0; v5 < f6; v5++) n15 && !n15[v5] || (p6 += (t7[v5] - h7) ** 2);
  const g7 = n15 ? n15.filter((t8) => t8).length : f6, d6 = g7 <= 1 ? 0 : Math.sqrt(p6 / (g7 - 1));
  m7.sort((t8, n16) => t8 - n16);
  const x4 = a15 >>> 1, M3 = { min: i10, max: o12, avg: h7, stddev: d6, mode: l6, median: a15 % 2 ? m7[Math.floor(x4)] : (m7[x4 - 1] + m7[x4]) / 2 };
  if (["u8", "s8", "u4", "u2", "u1"].includes(e6)) {
    const e7 = o12 - i10 + 1, s9 = new Uint32Array(e7);
    for (let o13 = 0; o13 < f6; o13++) n15 && !n15[o13] || s9[t7[o13] - i10]++;
    return { statistics: M3, histogram: { min: i10 - 0.5, max: o12 + 0.5, size: e7, counts: s9 } };
  }
  const O4 = 256, y4 = new Uint32Array(O4), b4 = (o12 - i10) / O4;
  if (0 === b4) return { statistics: M3, histogram: { min: i10, max: o12, size: 1, counts: new Uint32Array(1).fill(a15) } };
  const k4 = new Uint32Array(O4 + 1);
  for (let v5 = 0; v5 < f6; v5++) n15 && !n15[v5] || k4[Math.floor((t7[v5] - i10) / b4)]++;
  for (let v5 = 0; v5 < O4 - 1; v5++) y4[v5] = k4[v5];
  return y4[O4 - 1] = k4[O4 - 1] + k4[O4], { statistics: M3, histogram: { min: i10, max: o12, size: O4, counts: y4 } };
}
function m4(t7) {
  const { pixels: n15, mask: e6, pixelType: s8, bandMasks: i10 } = t7, o12 = n15.map((t8, n16) => c3(t8, (i10 == null ? void 0 : i10[n16]) ?? e6, s8));
  return { statistics: o12.map(({ statistics: t8 }) => t8), histograms: o12.map(({ histogram: t8 }) => t8) };
}
function h4(t7) {
  var _a;
  if (!((_a = t7 == null ? void 0 : t7.pixels) == null ? void 0 : _a.length)) return null;
  const { pixels: n15, mask: e6, bandMasks: s8, pixelType: i10 } = t7, o12 = t7.width * t7.height, r14 = n15.length, a15 = [], l6 = [], u11 = 256;
  let f6, c6;
  for (let m7 = 0; m7 < r14; m7++) {
    let r15 = new Uint32Array(u11);
    const h7 = n15[m7], p6 = (s8 == null ? void 0 : s8[m7]) ?? e6;
    if ("u8" === i10) {
      if (f6 = 255, c6 = 0, p6) {
        for (let t8 = 0; t8 < o12; t8++) if (p6[t8]) {
          const n16 = h7[t8];
          f6 = n16 < f6 ? n16 : f6, c6 = n16 > c6 ? n16 : c6, r15[n16]++;
        }
      } else for (let t8 = 0; t8 < o12; t8++) {
        const n16 = h7[t8];
        f6 = n16 < f6 ? n16 : f6, c6 = n16 > c6 ? n16 : c6, r15[n16]++;
      }
      r15 = r15.slice(f6, c6 + 1);
    } else {
      let n16 = false;
      t7.statistics || (t7.updateStatistics(), n16 = true);
      const e7 = t7.statistics;
      f6 = e7[m7].minValue, c6 = e7[m7].maxValue;
      const s9 = (c6 - f6) / u11;
      if (0 === s9) {
        !e7 || t7.validPixelCount || n16 || t7.updateStatistics();
        const s10 = (t7.validPixelCount || t7.width * t7.height) / u11;
        for (let t8 = 0; t8 < u11; t8++) r15[t8] = Math.round(s10 * (t8 + 1)) - Math.round(s10 * t8);
      } else {
        const t8 = new Uint32Array(u11 + 1);
        for (let n17 = 0; n17 < o12; n17++) p6 && !p6[n17] || t8[Math.floor((h7[n17] - f6) / s9)]++;
        for (let n17 = 0; n17 < u11 - 1; n17++) r15[n17] = t8[n17];
        r15[u11 - 1] = t8[u11 - 1] + t8[u11];
      }
    }
    const g7 = "u8" === i10 ? f6 - 0.5 : f6, d6 = "u8" === i10 ? c6 + 0.5 : c6;
    a15.push({ min: g7, max: d6, size: r15.length, counts: r15 });
    let x4 = 0, M3 = 0, O4 = 0;
    for (let t8 = 0; t8 < r15.length; t8++) x4 += r15[t8], M3 += t8 * r15[t8];
    const y4 = M3 / x4;
    for (let t8 = 0; t8 < r15.length; t8++) O4 += r15[t8] * (t8 - y4) ** 2;
    const b4 = Math.sqrt(O4 / (x4 - 1)), k4 = (d6 - g7) / r15.length, v5 = (y4 + ("u8" === i10 ? 0 : 0.5)) * k4 + f6, w5 = b4 * k4;
    l6.push({ min: f6, max: c6, avg: v5, stddev: w5 });
  }
  return { statistics: l6, histograms: a15 };
}
function p2(t7) {
  const n15 = [];
  for (let e6 = 0; e6 < t7.length; e6++) {
    const { min: s8, max: i10, size: o12, counts: r14 } = t7[e6];
    let a15 = 0, l6 = 0;
    for (let t8 = 0; t8 < o12; t8++) a15 += r14[t8], l6 += t8 * r14[t8];
    const u11 = l6 / a15;
    let f6 = 0;
    for (let t8 = 0; t8 < o12; t8++) f6 += r14[t8] * (t8 - u11) ** 2;
    const c6 = (i10 - s8) / o12, m7 = (u11 + 0.5) * c6 + s8, h7 = Math.sqrt(f6 / (a15 - 1)) * c6;
    n15.push({ min: s8, max: i10, avg: m7, stddev: h7 });
  }
  return n15;
}
function g5(n15, i10) {
  var _a;
  const { pixelBlock: o12, bandIds: a15, returnHistogramLut: l6, rasterInfo: u11 } = i10;
  let f6 = null, c6 = null, m7 = n15.stretchType;
  if ("number" == typeof m7 && (m7 = a8[m7]), n15.dra) if ("minMax" === m7 && (o12 == null ? void 0 : o12.statistics)) f6 = o12.statistics.map((t7) => [t7.minValue, t7.maxValue, 0, 0]);
  else {
    const t7 = h4(o12);
    f6 = null != t7 ? t7.statistics : null, c6 = null != t7 ? t7.histograms : null;
  }
  else f6 = ((_a = n15.statistics) == null ? void 0 : _a.length) ? n15.statistics : u11.statistics, c6 = "histograms" in n15 ? n15.histograms : void 0, c6 || (c6 = u11.histograms);
  "percentClip" !== m7 && "histogramEqualization" !== m7 || (c6 == null ? void 0 : c6.length) || (m7 = "minMax");
  const p6 = (f6 == null ? void 0 : f6.length) || (c6 == null ? void 0 : c6.length) || u11.bandCount, g7 = [], x4 = [];
  f6 && !Array.isArray(f6[0]) && (f6 = f6.map((t7) => [t7.min, t7.max, t7.avg, t7.stddev]));
  const [M3, O4] = s2(u11.pixelType);
  if (!(f6 == null ? void 0 : f6.length)) {
    f6 = [];
    for (let t7 = 0; t7 < p6; t7++) f6.push([M3, O4, 1, 1]);
    "standardDeviation" === m7 && (m7 = "minMax");
  }
  switch (m7) {
    case "none":
      for (let t7 = 0; t7 < p6; t7++) g7[t7] = M3, x4[t7] = O4;
      break;
    case "minMax":
      for (let t7 = 0; t7 < p6; t7++) {
        const n16 = f6[t7];
        g7[t7] = n16[0], x4[t7] = n16[1];
      }
      break;
    case "standardDeviation":
      {
        const { numberOfStandardDeviations: t7 = 2 } = n15;
        for (let n16 = 0; n16 < p6; n16++) {
          const e6 = f6[n16];
          g7[n16] = e6[2] - t7 * e6[3], x4[n16] = e6[2] + t7 * e6[3], g7[n16] < e6[0] && (g7[n16] = e6[0]), x4[n16] > e6[1] && (x4[n16] = e6[1]);
        }
      }
      break;
    case "histogramEqualization":
      n2(c6);
      for (let t7 = 0; t7 < p6; t7++) g7[t7] = c6[t7].min, x4[t7] = c6[t7].max;
      break;
    case "percentClip":
      n2(c6);
      for (let t7 = 0; t7 < c6.length; t7++) {
        const e6 = c6[t7], s8 = new Uint32Array(e6.size), i11 = [...e6.counts];
        i11.length >= 20 && (i11[0] = i11[1] = i11[2] = i11[i11.length - 1] = i11[i11.length - 2] = 0);
        let o13 = 0;
        const r14 = (e6.max - e6.min) / e6.size, a16 = -0.5 === e6.min && 1 === r14 ? 0.5 : 0;
        for (let t8 = 0; t8 < e6.size; t8++) o13 += i11[t8], s8[t8] = o13;
        let l7 = (n15.minPercent || 0) * o13 / 100;
        g7[t7] = e6.min + a16;
        for (let n16 = 0; n16 < e6.size; n16++) if (s8[n16] > l7) {
          g7[t7] = e6.min + r14 * (n16 + a16);
          break;
        }
        l7 = (1 - (n15.maxPercent || 0) / 100) * o13, x4[t7] = e6.max + a16;
        for (let n16 = e6.size - 2; n16 >= 0; n16--) if (s8[n16] < l7) {
          x4[t7] = e6.min + r14 * (n16 + 2 - a16);
          break;
        }
        if (x4[t7] < g7[t7]) {
          const n16 = g7[t7];
          g7[t7] = x4[t7], x4[t7] = n16;
        }
      }
      break;
    default:
      for (let t7 = 0; t7 < p6; t7++) {
        const n16 = f6[t7];
        g7[t7] = n16[0], x4[t7] = n16[1];
      }
  }
  let y4, b4, k4;
  "histogramEqualization" === m7 ? (n2(c6), b4 = c6[0].size || 256, y4 = 0, l6 && (k4 = c6.map((t7) => r11(t7)))) : (b4 = n15.max || 255, y4 = n15.min || 0);
  return d2({ minCutOff: g7, maxCutOff: x4, maxOutput: b4, minOutput: y4, histogramLut: k4 }, a15);
}
function d2(t7, n15) {
  if (null == n15 || 0 === n15.length) return t7;
  const e6 = Math.max.apply(null, n15), { minCutOff: s8, maxCutOff: i10, minOutput: o12, maxOutput: r14, histogramLut: a15 } = t7;
  return s8.length === n15.length || s8.length <= e6 ? t7 : { minCutOff: n15.map((t8) => s8[t8]), maxCutOff: n15.map((t8) => i10[t8]), histogramLut: a15 ? n15.map((t8) => a15[t8]) : null, minOutput: o12, maxOutput: r14 };
}
function x3(t7, n15) {
  const e6 = new Float32Array(t7);
  for (let s8 = 0; s8 < t7; s8++) n15[s8] > 1 ? n15[s8] > 2 ? e6[s8] = 6.5 + (n15[s8] - 2) ** 2.5 : e6[s8] = 6.5 + 100 * (2 - n15[s8]) ** 4 : e6[s8] = 1;
  return e6;
}
function M2(t7, e6) {
  var _a;
  if (!((_a = t7 == null ? void 0 : t7.pixels) == null ? void 0 : _a.length)) return t7;
  const { mask: s8, bandMasks: i10, width: o12, height: r14, pixels: a15 } = t7, { minCutOff: l6, maxCutOff: u11, minOutput: f6, maxOutput: c6, gamma: m7 } = e6, h7 = o12 * r14, p6 = e6.outputPixelType || "u8", g7 = t7.pixels.map(() => g2.createEmptyBand(p6, h7)), d6 = g7.length, M3 = c6 - f6, O4 = [], y4 = [];
  for (let n15 = 0; n15 < d6; n15++) y4[n15] = u11[n15] - l6[n15], O4[n15] = 0 === y4[n15] ? 0 : M3 / y4[n15];
  const b4 = p6.startsWith("u") || p6.startsWith("s"), k4 = m7 && m7.length >= d6, v5 = !!e6.isRenderer;
  if (k4) {
    const t8 = x3(d6, m7);
    for (let n15 = 0; n15 < d6; n15++) {
      const e7 = (i10 == null ? void 0 : i10[n15]) ?? s8;
      for (let s9 = 0; s9 < h7; s9++) if (null == e7 || e7[s9]) {
        if (0 === y4[n15]) {
          g7[n15][s9] = f6;
          continue;
        }
        const e8 = a15[n15][s9], i11 = (e8 - l6[n15]) / y4[n15];
        let o13 = 1;
        if (m7[n15] > 1 && (o13 -= (1 / M3) ** (i11 * t8[n15])), e8 < u11[n15] && e8 > l6[n15]) {
          const t9 = o13 * M3 * i11 ** (1 / m7[n15]) + f6;
          g7[n15][s9] = v5 ? Math.floor(t9) : b4 ? Math.round(t9) : t9;
        } else e8 >= u11[n15] ? g7[n15][s9] = c6 : g7[n15][s9] = f6;
      }
    }
  } else for (let n15 = 0; n15 < d6; n15++) {
    const t8 = (i10 == null ? void 0 : i10[n15]) ?? s8;
    for (let e7 = 0; e7 < h7; e7++) if (null == t8 || t8[e7]) {
      const t9 = a15[n15][e7];
      if (t9 < u11[n15] && t9 > l6[n15]) {
        const s9 = (t9 - l6[n15]) * O4[n15] + f6;
        g7[n15][e7] = v5 ? Math.floor(s9) : b4 ? Math.round(s9) : s9;
      } else t9 >= u11[n15] ? g7[n15][e7] = c6 : g7[n15][e7] = f6;
    }
  }
  const w5 = new g2({ width: o12, height: r14, mask: s8, bandMasks: i10, pixels: g7, pixelType: p6 });
  return w5.updateStatistics(), w5;
}

// node_modules/@arcgis/core/layers/support/RasterBandInfo.js
var t5;
function n9(e6) {
  return e6 = Number(e6), isNaN(e6) ? void 0 : e6;
}
var o9 = t5 = class extends S {
  constructor() {
    super(...arguments), this.name = null, this.minWavelength = void 0, this.maxWavelength = void 0, this.radianceBias = void 0, this.radianceGain = void 0, this.reflectanceBias = void 0, this.reflectanceGain = void 0, this.solarIrradiance = void 0;
  }
  clone() {
    return new t5({ name: this.name, minWavelength: this.minWavelength, maxWavelength: this.maxWavelength, radianceBias: this.radianceBias, radianceGain: this.radianceGain, reflectanceBias: this.reflectanceBias, reflectanceGain: this.reflectanceGain, solarIrradiance: this.solarIrradiance });
  }
};
r([m({ json: { name: "BandName", write: true } })], o9.prototype, "name", void 0), r([m({ json: { name: "WavelengthMin", read: { reader: n9 }, write: true } })], o9.prototype, "minWavelength", void 0), r([m({ json: { name: "WavelengthMax", read: { reader: n9 }, write: true } })], o9.prototype, "maxWavelength", void 0), r([m({ json: { name: "RadianceBias", read: { reader: n9 }, write: true } })], o9.prototype, "radianceBias", void 0), r([m({ json: { name: "RadianceGain", read: { reader: n9 }, write: true } })], o9.prototype, "radianceGain", void 0), r([m({ json: { name: "ReflectanceBias", read: { reader: n9 }, write: true } })], o9.prototype, "reflectanceBias", void 0), r([m({ json: { name: "ReflectanceGain", read: { reader: n9 }, write: true } })], o9.prototype, "reflectanceGain", void 0), r([m({ json: { name: "SolarIrradiance", read: { reader: n9 }, write: true } })], o9.prototype, "solarIrradiance", void 0), o9 = t5 = r([a2("esri.layers.support.RasterBandInfo")], o9);
var s5 = o9;

// node_modules/@arcgis/core/layers/support/rasterEnums.js
var a10 = i()({ RSP_NearestNeighbor: "nearest", RSP_BilinearInterpolation: "bilinear", RSP_CubicConvolution: "cubic", RSP_Majority: "majority" });
var i8 = i()({ esriNoDataMatchAny: "any", esriNoDataMatchAll: "all" });
var n10 = i()({ U1: "u1", U2: "u2", U4: "u4", U8: "u8", S8: "s8", U16: "u16", S16: "s16", U32: "u32", S32: "s32", F32: "f32", F64: "f64", C64: "c64", C128: "c128", UNKNOWN: "unknown" });

// node_modules/@arcgis/core/layers/support/RasterSensorInfo.js
var n11;
function a11(o12) {
  return o12 = Number(o12), isNaN(o12) ? void 0 : o12;
}
var u6 = n11 = class extends S {
  constructor() {
    super(...arguments), this.acquisitionDate = void 0, this.cloudCover = void 0, this.productName = void 0, this.sensorName = null, this.sensorAzimuth = void 0, this.sensorElevation = void 0, this.sunAzimuth = void 0, this.sunElevation = void 0;
  }
  readAcquisitionDate(o12) {
    return new Date(o12);
  }
  writeAcquisitionDate(o12, e6) {
    e6.AcquisitionDate = o12.getTime();
  }
  clone() {
    return new n11({ acquisitionDate: this.acquisitionDate, cloudCover: this.cloudCover, productName: this.productName, sensorName: this.sensorName, sensorAzimuth: this.sensorAzimuth, sensorElevation: this.sensorElevation, sunAzimuth: this.sunAzimuth, sunElevation: this.sunElevation });
  }
};
r([m({ type: Date, json: { name: "AcquisitionDate", write: true } })], u6.prototype, "acquisitionDate", void 0), r([o2("acquisitionDate")], u6.prototype, "readAcquisitionDate", null), r([r2("acquisitionDate")], u6.prototype, "writeAcquisitionDate", null), r([m({ json: { name: "CloudCover", read: { reader: a11 }, write: true } })], u6.prototype, "cloudCover", void 0), r([m({ json: { name: "ProductName", write: true } })], u6.prototype, "productName", void 0), r([m({ json: { name: "SensorName", write: true } })], u6.prototype, "sensorName", void 0), r([m({ json: { name: "SensorAzimuth", read: { reader: a11 }, write: true } })], u6.prototype, "sensorAzimuth", void 0), r([m({ json: { name: "SensorElevation", read: { reader: a11 }, write: true } })], u6.prototype, "sensorElevation", void 0), r([m({ json: { name: "SunAzimuth", read: { reader: a11 }, write: true } })], u6.prototype, "sunAzimuth", void 0), r([m({ json: { name: "SunElevation", read: { reader: a11 }, write: true } })], u6.prototype, "sunElevation", void 0), u6 = n11 = r([a2("esri.layers.support.RasterSensorInfo")], u6);
var p3 = u6;

// node_modules/@arcgis/core/layers/support/RasterStorageInfo.js
var p4;
var l4 = p4 = class extends S {
  constructor() {
    super(...arguments), this.blockWidth = void 0, this.blockHeight = void 0, this.compression = null, this.origin = null, this.firstPyramidLevel = null, this.maximumPyramidLevel = null, this.pyramidScalingFactor = 2, this.pyramidBlockWidth = null, this.pyramidBlockHeight = null, this.isVirtualTileInfo = false, this.tileInfo = null, this.transposeInfo = null, this.blockBoundary = null;
  }
  clone() {
    return new p4({ blockWidth: this.blockWidth, blockHeight: this.blockHeight, compression: this.compression, origin: a(this.origin), firstPyramidLevel: this.firstPyramidLevel, maximumPyramidLevel: this.maximumPyramidLevel, pyramidResolutions: a(this.pyramidResolutions), pyramidScalingFactor: this.pyramidScalingFactor, pyramidBlockWidth: this.pyramidBlockWidth, pyramidBlockHeight: this.pyramidBlockHeight, isVirtualTileInfo: this.isVirtualTileInfo, tileInfo: a(this.tileInfo), transposeInfo: a(this.transposeInfo), blockBoundary: a(this.blockBoundary) });
  }
};
r([m({ type: Number, json: { write: true } })], l4.prototype, "blockWidth", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "blockHeight", void 0), r([m({ type: String, json: { write: true } })], l4.prototype, "compression", void 0), r([m({ type: j, json: { write: true } })], l4.prototype, "origin", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "firstPyramidLevel", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "maximumPyramidLevel", void 0), r([m({ json: { write: true } })], l4.prototype, "pyramidResolutions", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "pyramidScalingFactor", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "pyramidBlockWidth", void 0), r([m({ type: Number, json: { write: true } })], l4.prototype, "pyramidBlockHeight", void 0), r([m({ type: Boolean, json: { write: true } })], l4.prototype, "isVirtualTileInfo", void 0), r([m({ json: { write: true } })], l4.prototype, "tileInfo", void 0), r([m()], l4.prototype, "transposeInfo", void 0), r([m({ json: { write: true } })], l4.prototype, "blockBoundary", void 0), l4 = p4 = r([a2("esri.layers.support.RasterStorageInfo")], l4);
var n12 = l4;

// node_modules/@arcgis/core/layers/support/RasterInfo.js
var u7;
var m5 = u7 = class extends S {
  constructor(t7) {
    super(t7), this.attributeTable = null, this.bandCount = null, this.colormap = null, this.extent = null, this.format = void 0, this.height = null, this.width = null, this.histograms = null, this.keyProperties = {}, this.multidimensionalInfo = null, this.noDataValue = null, this.pixelSize = null, this.pixelType = null, this.isPseudoSpatialReference = false, this.spatialReference = null, this.statistics = null, this.storageInfo = null, this.transform = null;
  }
  get bandInfos() {
    const t7 = this.keyProperties.BandProperties, { bandCount: e6 } = this;
    if (!(t7 == null ? void 0 : t7.length) || t7.length < e6) {
      const t8 = [];
      for (let o13 = 1; o13 <= e6; o13++) t8.push(new s5({ name: "band_" + o13 }));
      return t8;
    }
    const o12 = t7.map((t8) => s5.fromJSON(t8));
    for (let i10 = 0; i10 < o12.length; i10++) o12[i10].name = o12[i10].name || "band_" + (i10 + 1);
    return o12;
  }
  get dataType() {
    var _a, _b;
    const t7 = ((_b = (_a = this.keyProperties) == null ? void 0 : _a.DataType) == null ? void 0 : _b.toLowerCase()) ?? "generic";
    return "stdtime" === t7 ? "standard-time" : t7;
  }
  get nativeExtent() {
    return this._get("nativeExtent") || this.extent;
  }
  set nativeExtent(t7) {
    t7 && this._set("nativeExtent", t7);
  }
  get nativePixelSize() {
    if (null == this.transform || !this.transform.affectsPixelSize) return this.pixelSize;
    const t7 = this.nativeExtent;
    return { x: t7.width / this.width, y: t7.height / this.height };
  }
  get hasMultidimensionalTranspose() {
    var _a;
    return !!((_a = this.storageInfo) == null ? void 0 : _a.transposeInfo);
  }
  get sensorInfo() {
    var _a;
    if ((_a = this.keyProperties) == null ? void 0 : _a.SensorName) return p3.fromJSON(this.keyProperties);
  }
  clone() {
    return new u7({ attributeTable: a(this.attributeTable), bandCount: this.bandCount, colormap: a(this.colormap), extent: a(this.extent), format: this.format, height: this.height, width: this.width, histograms: a(this.histograms), keyProperties: a(this.keyProperties), multidimensionalInfo: a(this.multidimensionalInfo), noDataValue: this.noDataValue, pixelSize: a(this.pixelSize), pixelType: this.pixelType, isPseudoSpatialReference: this.isPseudoSpatialReference, spatialReference: a(this.spatialReference), statistics: a(this.statistics), storageInfo: a(this.storageInfo), transform: a(this.transform) });
  }
};
r([m({ json: { write: true } })], m5.prototype, "attributeTable", void 0), r([m({ json: { write: true } })], m5.prototype, "bandCount", void 0), r([m({ readOnly: true })], m5.prototype, "bandInfos", null), r([m({ json: { write: true } })], m5.prototype, "colormap", void 0), r([m({ type: String, readOnly: true })], m5.prototype, "dataType", null), r([m({ type: w, json: { write: true } })], m5.prototype, "extent", void 0), r([m({ type: w, json: { write: true } })], m5.prototype, "nativeExtent", null), r([m({ json: { write: true } })], m5.prototype, "nativePixelSize", null), r([m({ json: { write: true } })], m5.prototype, "format", void 0), r([m({ json: { write: true } })], m5.prototype, "height", void 0), r([m({ json: { write: true } })], m5.prototype, "width", void 0), r([m({ json: { write: true } })], m5.prototype, "hasMultidimensionalTranspose", null), r([m({ json: { write: true } })], m5.prototype, "histograms", void 0), r([m({ json: { write: true } })], m5.prototype, "keyProperties", void 0), r([m({ json: { write: true } })], m5.prototype, "multidimensionalInfo", void 0), r([m({ json: { write: true } })], m5.prototype, "noDataValue", void 0), r([m({ json: { write: true } })], m5.prototype, "pixelSize", void 0), r([m({ type: n10.apiValues, json: { write: true } })], m5.prototype, "pixelType", void 0), r([m()], m5.prototype, "isPseudoSpatialReference", void 0), r([m({ readOnly: true })], m5.prototype, "sensorInfo", null), r([m({ type: g, json: { write: true } })], m5.prototype, "spatialReference", void 0), r([m({ json: { write: true } })], m5.prototype, "statistics", void 0), r([m({ type: n12, json: { write: true } })], m5.prototype, "storageInfo", void 0), r([m({ json: { write: true } })], m5.prototype, "transform", void 0), m5 = u7 = r([a2("esri.layers.support.RasterInfo")], m5);
var d3 = m5;

// node_modules/@arcgis/core/layers/support/rasterFunctions/surfaceUtils.js
var s6 = 1;
var n13 = 1 / 111e3;
function a12(t7) {
  let { altitude: e6, azimuth: i10 } = t7;
  const { hillshadeType: s8, pixelSizePower: a15 = 1, pixelSizeFactor: o12 = 1, scalingType: l6, isGCS: r14, resolution: c6 } = t7, h7 = "multi-directional" === s8 ? 2 * t7.zFactor : t7.zFactor, { x: u11, y: f6 } = c6;
  let d6 = h7 / (8 * u11), p6 = h7 / (8 * f6);
  if (r14 && h7 > 1e-3 && (d6 /= n13, p6 /= n13), "adjusted" === l6) if (r14) {
    const t8 = u11 * n13, e7 = f6 * n13;
    d6 = (h7 + t8 ** a15 * o12) / (8 * t8), p6 = (h7 + e7 ** a15 * o12) / (8 * e7);
  } else d6 = (h7 + u11 ** a15 * o12) / (8 * u11), p6 = (h7 + f6 ** a15 * o12) / (8 * f6);
  let x4 = (90 - e6) * Math.PI / 180, w5 = Math.cos(x4), y4 = (360 - i10 + 90) * Math.PI / 180, m7 = Math.sin(x4) * Math.cos(y4), M3 = Math.sin(x4) * Math.sin(y4);
  const z = [315, 270, 225, 360, 180, 0], A4 = [60, 60, 60, 60, 60, 90], g7 = new Float32Array([3, 5, 3, 2, 1, 4]), F2 = g7.reduce((t8, e7) => t8 + e7), k4 = g7.map((t8) => t8 / F2), P3 = "multi-directional" === s8 ? z.length : 1, S6 = new Float32Array(6), C5 = new Float32Array(6), T4 = new Float32Array(6);
  if ("multi-directional" === s8) for (let n15 = 0; n15 < P3; n15++) e6 = A4[n15], i10 = z[n15], x4 = (90 - e6) * Math.PI / 180, w5 = Math.cos(x4), y4 = (360 - i10 + 90) * Math.PI / 180, m7 = Math.sin(x4) * Math.cos(y4), M3 = Math.sin(x4) * Math.sin(y4), S6[n15] = w5, C5[n15] = m7, T4[n15] = M3;
  else S6.fill(w5), C5.fill(m7), T4.fill(M3);
  return { resolution: c6, factor: [d6, p6], sinZcosA: m7, sinZsinA: M3, cosZ: w5, sinZcosAs: [...C5], sinZsinAs: [...T4], cosZs: [...S6], weights: [...k4], hillshadeType: ["traditional", "multi-directional"].indexOf(s8) };
}
function o10(t7, e6) {
  const { width: i10, height: n15 } = t7, a15 = i10 * n15, o12 = new Uint8Array(a15), l6 = null != t7.mask;
  let r14;
  if (l6) {
    r14 = new Uint8Array(t7.mask);
    for (let t8 = 0; t8 < r14.length; t8++) r14[t8] && (o12[t8] = 1, r14[t8] = 1);
  }
  const c6 = t7.pixels[0], h7 = new Float32Array(a15), u11 = new Float32Array(a15);
  let f6, d6 = 0;
  if (e6) {
    const { resolution: t8 } = e6, i11 = t8 ? (t8.x + t8.y) / 2 : 1;
    d6 = 200 * e6.zFactor / (i11 * i11), f6 = new Float32Array(a15);
  }
  const p6 = e6 == null ? void 0 : e6.curvatureType;
  let x4, w5, y4, m7, M3, z, A4, g7;
  for (let F2 = s6; F2 < n15 - s6; F2++) {
    const t8 = F2 * i10;
    for (let e7 = s6; e7 < i10 - s6; e7++) {
      const s8 = t8 + e7;
      if (!r14 || 0 !== r14[s8]) {
        if (r14) {
          if (r14[s8 - i10 - 1] + r14[s8 - i10] + r14[s8 - i10 + 1] + r14[s8 - 1] + r14[s8 + 1] + r14[s8 + i10 - 1] + r14[s8 + i10] + r14[s8 + i10 + 1] < 7) {
            o12[s8] = 0;
            continue;
          }
          x4 = r14[s8 - i10 - 1] ? c6[s8 - i10 - 1] : c6[s8], w5 = r14[s8 - i10] ? c6[s8 - i10] : c6[s8], y4 = r14[s8 - i10 + 1] ? c6[s8 - i10 + 1] : c6[s8], m7 = r14[s8 - 1] ? c6[s8 - 1] : c6[s8], M3 = r14[s8 + 1] ? c6[s8 + 1] : c6[s8], z = r14[s8 + i10 - 1] ? c6[s8 + i10 - 1] : c6[s8], A4 = r14[s8 + i10] ? c6[s8 + i10] : c6[s8], g7 = r14[s8 + i10 + 1] ? c6[s8 + i10 + 1] : c6[s8];
        } else x4 = c6[s8 - i10 - 1], w5 = c6[s8 - i10], y4 = c6[s8 - i10 + 1], m7 = c6[s8 - 1], M3 = c6[s8 + 1], z = c6[s8 + i10 - 1], A4 = c6[s8 + i10], g7 = c6[s8 + i10 + 1];
        if (h7[s8] = y4 + M3 + M3 + g7 - (x4 + m7 + m7 + z), u11[s8] = z + A4 + A4 + g7 - (x4 + w5 + w5 + y4), null != f6) {
          const t9 = c6[s8], e8 = 0.5 * (m7 + M3) - t9, i11 = 0.5 * (w5 + A4) - t9;
          if ("standard" === p6) f6[s8] = -d6 * (e8 + i11);
          else {
            const t10 = (-x4 + y4 + z - g7) / 4, n16 = (-m7 + M3) / 2, a16 = (w5 - A4) / 2, o13 = n16 * n16, l7 = a16 * a16, r15 = o13 + l7;
            r15 && (f6[s8] = "profile" === p6 ? d6 * (e8 * o13 + i11 * l7 + t10 * n16 * a16) / r15 : -d6 * (e8 * l7 + i11 * o13 - t10 * n16 * a16) / r15);
          }
        }
      }
    }
  }
  return { outMask: l6 ? o12 : null, dzxs: h7, dzys: u11, curvatures: f6 };
}
function l5(t7, e6, i10) {
  for (let s8 = 0; s8 < i10; s8++) t7[s8 * e6] = t7[s8 * e6 + 1], t7[(s8 + 1) * e6 - 1] = t7[(s8 + 1) * e6 - 2];
  for (let s8 = 1; s8 < e6 - 1; s8++) t7[s8] = t7[s8 + e6], t7[s8 + (i10 - 1) * e6] = t7[s8 + (i10 - 2) * e6];
}
function r12(n15, r14) {
  if (!o4(n15)) return n15;
  const { factor: c6, sinZcosA: h7, sinZsinA: u11, cosZ: f6, sinZcosAs: d6, sinZsinAs: p6, cosZs: x4, weights: w5 } = a12(r14), [y4, m7] = c6, M3 = "traditional" === r14.hillshadeType, { width: z, height: A4 } = n15, g7 = new Uint8Array(z * A4), { dzxs: F2, dzys: k4, outMask: P3 } = o10(n15);
  for (let t7 = s6; t7 < A4 - s6; t7++) {
    const e6 = t7 * z;
    for (let t8 = s6; t8 < z - s6; t8++) {
      const i10 = e6 + t8;
      if (!P3 || P3[i10]) {
        const t9 = F2[i10] * y4, e7 = k4[i10] * m7, s8 = Math.sqrt(1 + t9 * t9 + e7 * e7);
        let n16 = 0;
        if (M3) {
          let i11 = 255 * (f6 + u11 * e7 - h7 * t9) / s8;
          i11 < 0 && (i11 = 0), n16 = i11;
        } else {
          const i11 = p6.length;
          for (let a15 = 0; a15 < i11; a15++) {
            let i12 = 255 * (x4[a15] + p6[a15] * e7 - d6[a15] * t9) / s8;
            i12 < 0 && (i12 = 0), n16 += i12 * w5[a15];
          }
        }
        g7[i10] = 255 & n16;
      }
    }
  }
  l5(g7, z, A4);
  return new g2({ width: z, height: A4, pixels: [g7], mask: P3, pixelType: "u8", validPixelCount: n15.validPixelCount, statistics: [new l(0, 255)] });
}
function c4(t7, e6, s8, n15) {
  if (!o4(t7) || !o4(e6)) return;
  const { min: a15, max: o12 } = n15, l6 = t7.pixels[0], { pixels: r14, mask: c6 } = e6, h7 = r14[0], u11 = 255.00001 / (o12 - a15), f6 = new Uint8ClampedArray(h7.length), d6 = new Uint8ClampedArray(h7.length), p6 = new Uint8ClampedArray(h7.length), x4 = s8.length - 1;
  for (let i10 = 0; i10 < h7.length; i10++) {
    if (c6 && 0 === c6[i10]) continue;
    const t8 = Math.floor((h7[i10] - a15) * u11), [e7, n16] = s8[t8 < 0 ? 0 : t8 > x4 ? x4 : t8], o13 = l6[i10], r15 = o13 * n16, w5 = r15 * (1 - Math.abs(e7 % 2 - 1)), y4 = o13 - r15;
    switch (Math.floor(e7)) {
      case 0:
        f6[i10] = r15 + y4, d6[i10] = w5 + y4, p6[i10] = y4;
        break;
      case 1:
        f6[i10] = w5 + y4, d6[i10] = r15 + y4, p6[i10] = y4;
        break;
      case 2:
        f6[i10] = y4, d6[i10] = r15 + y4, p6[i10] = w5 + y4;
        break;
      case 3:
        f6[i10] = y4, d6[i10] = w5 + y4, p6[i10] = r15 + y4;
        break;
      case 4:
        f6[i10] = w5 + y4, d6[i10] = y4, p6[i10] = r15 + y4;
        break;
      case 5:
      case 6:
        f6[i10] = r15 + y4, d6[i10] = y4, p6[i10] = w5 + y4;
    }
  }
  t7.pixels = [f6, d6, p6], t7.updateStatistics();
}
function h5(e6, a15) {
  if (!o4(e6)) return e6;
  const r14 = a15.zFactor, c6 = a15.pixelSizePower ?? 1, h7 = a15.pixelSizeFactor ?? 1, u11 = a15.slopeType, f6 = a15.isGCS, { x: d6, y: p6 } = a15.resolution;
  let x4 = r14 / (8 * d6), w5 = r14 / (8 * p6);
  f6 && Math.abs(r14 - 1) < 1e-4 && (x4 /= n13, w5 /= n13), "adjusted" === u11 && (x4 = (r14 + d6 ** c6 * h7) / (8 * d6), w5 = (r14 + p6 ** c6 * h7) / (8 * p6));
  const { dzxs: y4, dzys: m7, outMask: M3 } = o10(e6), { width: z, height: A4 } = e6, g7 = new Float32Array(z * A4);
  for (let t7 = s6; t7 < A4 - s6; t7++) {
    const e7 = t7 * z;
    for (let t8 = s6; t8 < z - s6; t8++) {
      const i10 = e7 + t8;
      if (!M3 || M3[i10]) {
        const s8 = y4[i10] * x4, n15 = m7[i10] * w5, a16 = Math.sqrt(s8 * s8 + n15 * n15);
        g7[e7 + t8] = "percent-rise" === u11 ? 100 * a16 : 57.2957795 * Math.atan(a16);
      }
    }
  }
  l5(g7, z, A4);
  const F2 = new g2({ width: z, height: A4, pixels: [g7], mask: M3, pixelType: "f32", validPixelCount: e6.validPixelCount });
  return F2.updateStatistics(), F2;
}
function u8(n15, a15 = {}) {
  if (!o4(n15)) return n15;
  const { resolution: r14 } = a15, c6 = r14 ? 1 / r14.x : 1, h7 = r14 ? 1 / r14.y : 1, { dzxs: u11, dzys: f6, outMask: d6 } = o10(n15), { width: p6, height: x4 } = n15, w5 = new Float32Array(p6 * x4);
  for (let t7 = s6; t7 < x4 - s6; t7++) {
    const e6 = t7 * p6;
    for (let t8 = s6; t8 < p6 - s6; t8++) {
      const i10 = e6 + t8;
      if (!d6 || d6[i10]) {
        const s8 = u11[i10] * c6, n16 = f6[i10] * h7;
        let a16 = -1;
        0 === s8 && 0 === n16 || (a16 = 90 - 57.29578 * Math.atan2(n16, -s8), a16 < 0 && (a16 += 360), 360 === a16 ? a16 = 0 : a16 > 360 && (a16 %= 360)), w5[e6 + t8] = a16;
      }
    }
  }
  l5(w5, p6, x4);
  return new g2({ width: p6, height: x4, pixels: [w5], mask: d6, pixelType: "f32", validPixelCount: n15.validPixelCount, statistics: [new l(-1, 360)] });
}
function f4(e6, s8) {
  if (!o4(e6)) return e6;
  const { curvatures: n15, outMask: a15 } = o10(e6, s8), { width: r14, height: c6 } = e6;
  l5(n15, r14, c6);
  const h7 = new g2({ width: r14, height: c6, pixels: [n15], mask: a15, pixelType: "f32", validPixelCount: e6.validPixelCount });
  return h7.updateStatistics(), h7;
}
function d4(t7, e6, i10) {
  const { hillshadeType: s8, altitude: n15, azimuth: a15, zFactor: o12, pixelSizeFactor: l6, pixelSizePower: r14, slopeType: c6 } = t7;
  return { hillshadeType: s8, altitude: n15, azimuth: a15, zFactor: o12, pixelSizePower: r14, pixelSizeFactor: l6, scalingType: "scaled" === c6 ? "adjusted" : "none", resolution: e6, isGCS: i10 };
}

// node_modules/@arcgis/core/renderers/support/colorRampUtils.js
var C4 = ["random", "ndvi", "ndvi2", "ndvi3", "elevation", "gray", "hillshade"];
var a13 = [{ id: "aspect", type: "multipart", colorRamps: [{ fromColor: [190, 190, 190], toColor: [255, 45, 8] }, { fromColor: [255, 45, 8], toColor: [255, 181, 61] }, { fromColor: [255, 181, 61], toColor: [255, 254, 52] }, { fromColor: [255, 254, 52], toColor: [0, 251, 50] }, { fromColor: [0, 251, 50], toColor: [255, 254, 52] }, { fromColor: [0, 253, 255], toColor: [0, 181, 255] }, { fromColor: [0, 181, 255], toColor: [26, 35, 253] }, { fromColor: [26, 35, 253], toColor: [255, 57, 251] }, { fromColor: [255, 57, 251], toColor: [255, 45, 8] }] }, { id: "black-to-white", fromColor: [0, 0, 0], toColor: [255, 255, 255] }, { id: "blue-bright", fromColor: [204, 204, 255], toColor: [0, 0, 224] }, { id: "blue-light-to-dark", fromColor: [211, 229, 232], toColor: [46, 100, 140] }, { id: "blue-green-bright", fromColor: [203, 245, 234], toColor: [48, 207, 146] }, { id: "blue-green-light-to-dark", fromColor: [216, 242, 237], toColor: [21, 79, 74] }, { id: "brown-light-to-dark", fromColor: [240, 236, 170], toColor: [102, 72, 48] }, { id: "brown-to-blue-green-diverging-right", type: "multipart", colorRamps: [{ fromColor: [156, 85, 31], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [33, 130, 145] }] }, { id: "brown-to-blue-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [110, 70, 45], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [48, 100, 102] }] }, { id: "coefficient-bias", fromColor: [214, 214, 255], toColor: [0, 57, 148] }, { id: "cold-to-hot-diverging", type: "multipart", colorRamps: [{ fromColor: [69, 117, 181], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [214, 47, 39] }] }, { id: "condition-number", type: "multipart", colorRamps: [{ fromColor: [0, 97, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 34, 0] }] }, { id: "cyan-to-purple", type: "multipart", colorRamps: [{ fromColor: [0, 245, 245], toColor: [0, 0, 245] }, { fromColor: [0, 0, 245], toColor: [245, 0, 245] }] }, { id: "cyan-light-to-blue-dark", type: "multipart", colorRamps: [{ fromColor: [182, 237, 240], toColor: [31, 131, 224] }, { fromColor: [31, 131, 224], toColor: [9, 9, 145] }] }, { id: "distance", fromColor: [255, 200, 0], toColor: [0, 0, 255] }, { id: "elevation1", type: "multipart", colorRamps: [{ fromColor: [175, 240, 233], toColor: [255, 255, 179] }, { fromColor: [255, 255, 179], toColor: [0, 128, 64] }, { fromColor: [0, 128, 64], toColor: [252, 186, 3] }, { fromColor: [252, 186, 3], toColor: [128, 0, 0] }, { fromColor: [120, 0, 0], toColor: [105, 48, 13] }, { fromColor: [105, 48, 13], toColor: [171, 171, 171] }, { fromColor: [171, 171, 171], toColor: [255, 252, 255] }] }, { id: "elevation2", type: "multipart", colorRamps: [{ fromColor: [118, 219, 211], toColor: [255, 255, 199] }, { fromColor: [255, 255, 199], toColor: [255, 255, 128] }, { fromColor: [255, 255, 128], toColor: [217, 194, 121] }, { fromColor: [217, 194, 121], toColor: [135, 96, 38] }, { fromColor: [135, 96, 38], toColor: [150, 150, 181] }, { fromColor: [150, 150, 181], toColor: [181, 150, 181] }, { fromColor: [181, 150, 181], toColor: [255, 252, 255] }] }, { id: "errors", fromColor: [255, 235, 214], toColor: [196, 10, 10] }, { id: "gray-light-to-dark", fromColor: [219, 219, 219], toColor: [69, 69, 69] }, { id: "green-bright", fromColor: [204, 255, 204], toColor: [14, 204, 14] }, { id: "green-light-to-dark", fromColor: [220, 245, 233], toColor: [34, 102, 51] }, { id: "green-to-blue", type: "multipart", colorRamps: [{ fromColor: [32, 204, 16], toColor: [0, 242, 242] }, { fromColor: [0, 242, 242], toColor: [2, 33, 227] }] }, { id: "orange-bright", fromColor: [255, 235, 204], toColor: [240, 118, 5] }, { id: "orange-light-to-dark", fromColor: [250, 233, 212], toColor: [171, 65, 36] }, { id: "partial-spectrum", type: "multipart", colorRamps: [{ fromColor: [242, 241, 162], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }, { fromColor: [252, 3, 69], toColor: [176, 7, 237] }, { fromColor: [176, 7, 237], toColor: [2, 29, 173] }] }, { id: "partial-spectrum-1-diverging", type: "multipart", colorRamps: [{ fromColor: [135, 38, 38], toColor: [240, 149, 12] }, { fromColor: [240, 149, 12], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [74, 80, 181] }, { fromColor: [74, 80, 181], toColor: [39, 32, 122] }] }, { id: "partial-spectrum-2-diverging", type: "multipart", colorRamps: [{ fromColor: [115, 77, 42], toColor: [201, 137, 52] }, { fromColor: [201, 137, 52], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [91, 63, 176] }, { fromColor: [91, 63, 176], toColor: [81, 13, 97] }] }, { id: "pink-to-yellow-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [158, 30, 113], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [99, 110, 45] }] }, { id: "pink-to-yellow-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [97, 47, 73], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [22, 59, 15] }] }, { id: "precipitation", type: "multipart", colorRamps: [{ fromColor: [194, 82, 60], toColor: [237, 161, 19] }, { fromColor: [237, 161, 19], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 219, 0] }, { fromColor: [0, 219, 0], toColor: [32, 153, 143] }, { fromColor: [32, 153, 143], toColor: [11, 44, 122] }] }, { id: "prediction", type: "multipart", colorRamps: [{ fromColor: [40, 146, 199], toColor: [250, 250, 100] }, { fromColor: [250, 250, 100], toColor: [232, 16, 20] }] }, { id: "purple-bright", fromColor: [255, 204, 255], toColor: [199, 0, 199] }, { id: "purple-to-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [77, 32, 150], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [20, 122, 11] }] }, { id: "purple-to-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [67, 14, 89], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [24, 79, 15] }] }, { id: "purple-blue-bright", fromColor: [223, 184, 230], toColor: [112, 12, 242] }, { id: "purple-blue-light-to-dark", fromColor: [229, 213, 242], toColor: [93, 44, 112] }, { id: "purple-red-bright", fromColor: [255, 204, 225], toColor: [199, 0, 99] }, { id: "purple-red-light-to-dark", fromColor: [250, 215, 246], toColor: [143, 17, 57] }, { id: "red-bright", fromColor: [255, 204, 204], toColor: [219, 0, 0] }, { id: "red-light-to-dark", fromColor: [255, 224, 224], toColor: [143, 10, 10] }, { id: "red-to-blue-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [196, 69, 57], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [48, 95, 207] }] }, { id: "red-to-blue-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [107, 13, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [13, 53, 97] }] }, { id: "red-to-green", type: "multipart", colorRamps: [{ fromColor: [245, 0, 0], toColor: [245, 245, 0] }, { fromColor: [245, 245, 0], toColor: [0, 245, 0] }] }, { id: "red-to-green-diverging-bright", type: "multipart", colorRamps: [{ fromColor: [186, 20, 20], toColor: [255, 255, 191] }, { fromColor: [255, 255, 191], toColor: [54, 145, 33] }] }, { id: "red-to-green-diverging-dark", type: "multipart", colorRamps: [{ fromColor: [97, 21, 13], toColor: [204, 204, 102] }, { fromColor: [204, 204, 102], toColor: [16, 69, 16] }] }, { id: "slope", type: "multipart", colorRamps: [{ fromColor: [56, 168, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 0, 0] }] }, { id: "spectrum-full-bright", type: "multipart", colorRamps: [{ fromColor: [255, 0, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 0, 255] }] }, { id: "spectrum-full-dark", type: "multipart", colorRamps: [{ fromColor: [153, 0, 0], toColor: [153, 153, 0] }, { fromColor: [153, 153, 0], toColor: [0, 153, 153] }, { fromColor: [0, 153, 153], toColor: [0, 0, 153] }] }, { id: "spectrum-full-light", type: "multipart", colorRamps: [{ fromColor: [255, 153, 153], toColor: [255, 255, 153] }, { fromColor: [255, 255, 153], toColor: [153, 255, 255] }, { fromColor: [153, 255, 255], toColor: [153, 153, 255] }] }, { id: "surface", type: "multipart", colorRamps: [{ fromColor: [112, 153, 89], toColor: [242, 238, 162] }, { fromColor: [242, 238, 162], toColor: [242, 206, 133] }, { fromColor: [242, 206, 133], toColor: [194, 140, 124] }, { fromColor: [194, 140, 124], toColor: [255, 242, 255] }] }, { id: "temperature", type: "multipart", colorRamps: [{ fromColor: [255, 252, 255], toColor: [255, 0, 255] }, { fromColor: [255, 0, 255], toColor: [0, 0, 255] }, { fromColor: [0, 0, 255], toColor: [0, 255, 255] }, { fromColor: [0, 255, 255], toColor: [0, 255, 0] }, { fromColor: [0, 255, 0], toColor: [255, 255, 0] }, { fromColor: [255, 255, 0], toColor: [255, 128, 0] }, { fromColor: [255, 128, 0], toColor: [128, 0, 0] }] }, { id: "white-to-black", fromColor: [255, 255, 255], toColor: [0, 0, 0] }, { id: "yellow-to-dark-red", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [242, 167, 46] }, { fromColor: [242, 167, 46], toColor: [107, 0, 0] }] }, { id: "yellow-to-green-to-dark-blue", type: "multipart", colorRamps: [{ fromColor: [255, 255, 128], toColor: [56, 224, 9] }, { fromColor: [56, 224, 9], toColor: [26, 147, 171] }, { fromColor: [26, 147, 171], toColor: [12, 16, 120] }] }, { id: "yellow-to-red", fromColor: [245, 245, 0], toColor: [255, 0, 0] }, { id: "yellow-green-bright", fromColor: [236, 252, 204], toColor: [157, 204, 16] }, { id: "yellow-green-light-to-dark", fromColor: [215, 240, 175], toColor: [96, 107, 45] }];
var m6 = new o({ Aspect: "aspect", "Black to White": "black-to-white", "Blue Bright": "blue-bright", "Blue Light to Dark": "blue-light-to-dark", "Blue-Green Bright": "blue-green-bright", "Blue-Green Light to Dark": "blue-green-light-to-dark", "Brown Light to Dark": "brown-light-to-dark", "Brown to Blue Green Diverging, Bright": "brown-to-blue-green-diverging-right", "Brown to Blue Green Diverging, Dark": "brown-to-blue-green-diverging-dark", "Coefficient Bias": "coefficient-bias", "Cold to Hot Diverging": "cold-to-hot-diverging", "Condition Number": "condition-number", "Cyan to Purple": "cyan-to-purple", "Cyan-Light to Blue-Dark": "cyan-light-to-blue-dark", Distance: "distance", "Elevation #1": "elevation1", "Elevation #2": "elevation2", Errors: "errors", "Gray Light to Dark": "gray-light-to-dark", "Green Bright": "green-bright", "Green Light to Dark": "green-light-to-dark", "Green to Blue": "green-to-blue", "Orange Bright": "orange-bright", "Orange Light to Dark": "orange-light-to-dark", "Partial Spectrum": "partial-spectrum", "Partial Spectrum 1 Diverging": "partial-spectrum-1-diverging", "Partial Spectrum 2 Diverging": "partial-spectrum-2-diverging", "Pink to YellowGreen Diverging, Bright": "pink-to-yellow-green-diverging-bright", "Pink to YellowGreen Diverging, Dark": "pink-to-yellow-green-diverging-dark", Precipitation: "precipitation", Prediction: "prediction", "Purple Bright": "purple-bright", "Purple to Green Diverging, Bright": "purple-to-green-diverging-bright", "Purple to Green Diverging, Dark": "purple-to-green-diverging-dark", "Purple-Blue Bright": "purple-blue-bright", "Purple-Blue Light to Dark": "purple-blue-light-to-dark", "Purple-Red Bright": "purple-red-bright", "Purple-Red Light to Dark": "purple-red-light-to-dark", "Red Bright": "red-bright", "Red Light to Dark": "red-light-to-dark", "Red to Blue Diverging, Bright": "red-to-blue-diverging-bright", "Red to Blue Diverging, Dark": "red-to-blue-diverging-dark", "Red to Green": "red-to-green", "Red to Green Diverging, Bright": "red-to-green-diverging-bright", "Red to Green Diverging, Dark": "red-to-green-diverging-dark", Slope: "slope", "Spectrum-Full Bright": "spectrum-full-bright", "Spectrum-Full Dark": "spectrum-full-dark", "Spectrum-Full Light": "spectrum-full-light", Surface: "surface", Temperature: "temperature", "White to Black": "white-to-black", "Yellow to Dark Red": "yellow-to-dark-red", "Yellow to Green to Dark Blue": "yellow-to-green-to-dark-blue", "Yellow to Red": "yellow-to-red", "Yellow-Green Bright": "yellow-green-bright", "Yellow-Green Light to Dark": "yellow-green-light-to-dark" });
function g6(o12, r14) {
  if (!o12 || !r14 || o12.length !== r14.length) return false;
  for (let t7 = 0; t7 < o12.length; t7++) if (o12[t7] > r14[t7] + 2 || o12[t7] < r14[t7] - 2) return false;
  return true;
}
function p5(o12) {
  const r14 = o12.clone();
  return r14.fromColor = o12.toColor, r14.toColor = o12.fromColor, r14.algorithm = o12.algorithm, r14;
}
function u9(o12) {
  var _a;
  if ("multipart" === o12.type) {
    const r14 = o12.clone();
    return ((_a = r14.colorRamps) == null ? void 0 : _a.length) ? (r14.colorRamps = r14.colorRamps.reverse().map((o13) => p5(o13)), r14) : r14;
  }
  return p5(o12);
}
function f5(r14, t7) {
  if (!r14) return;
  const l6 = t7 ?? a13;
  let e6 = null;
  return "algorithmic" === r14.type ? l6.some((o12) => {
    if (g6(r14.fromColor.toRgb(), o12.fromColor) && g6(r14.toColor.toRgb(), o12.toColor)) return e6 = o12.id, true;
  }) : "multipart" === r14.type && l6.some((t8) => {
    const l7 = r14.colorRamps, i10 = t8.colorRamps;
    if (l7 && i10 && l7.length === i10.length && !i10.some((r15, t9) => {
      if (!g6(l7[t9].fromColor.toRgb(), new h(r15.fromColor).toRgb()) || !g6(l7[t9].toColor.toRgb(), new h(r15.toColor).toRgb())) return true;
    })) {
      if (e6) return true;
      e6 = t8.id;
    }
  }), e6;
}
function s7(o12, r14, t7 = false) {
  if (!o12) return;
  let l6 = false, e6 = f5(o12, r14);
  return null != e6 || t7 || (l6 = true, e6 = f5(o12 = u9(o12), r14)), e6 ? { id: e6, inverted: l6 } : void 0;
}
function c5(o12, r14 = false) {
  var _a;
  const t7 = "string" == typeof o12 ? o12 : (_a = s7(o12, void 0, r14)) == null ? void 0 : _a.id;
  return t7 ? m6.toJSON(t7) : null;
}
function d5(o12, r14 = "esriCIELabAlgorithm") {
  const t7 = a13.find(({ id: r15 }) => r15 === o12);
  return t7 ? t7.colorRamps ? { type: "multipart", colorRamps: t7.colorRamps.map((o13) => ({ type: "algorithmic", algorithm: r14, fromColor: [...o13.fromColor], toColor: [...o13.toColor] })) } : { type: "algorithmic", algorithm: r14, fromColor: [...t7.fromColor], toColor: [...t7.toColor] } : null;
}
function h6(o12) {
  const r14 = (o12 = o12 || {}).numColors || 256, t7 = o12.distanceOffset || 0, l6 = null != o12.isCustomInterval ? o12.isCustomInterval : null !== o12.distanceInterval && o12.distanceInterval !== 1 / (r14 - 1), e6 = o12.distanceInterval || 1 / (r14 - 1);
  return { ...o12, numColors: r14, distanceOffset: t7, interpolateAlpha: !!o12.interpolateAlpha, distanceInterval: e6, isCustomInterval: l6, weights: o12.weights };
}
function b3(o12, r14, t7) {
  const { numColors: l6, distanceOffset: e6, distanceInterval: i10, isCustomInterval: n15 } = t7, C5 = 0 === o12.s, a15 = 0 === r14.s;
  let m7 = o12.h, g7 = r14.h;
  C5 && !a15 ? m7 = g7 : a15 && !C5 && (r14 = { ...r14, h: m7 }, g7 = m7);
  let p6, u11 = Math.abs(g7 - m7);
  const f6 = 360;
  u11 < f6 / 2 ? p6 = (g7 - m7) * i10 : (u11 = f6 - u11, p6 = m7 > g7 ? u11 * i10 : -u11 * i10);
  const s8 = (r14.s - o12.s) * i10, c6 = (r14.v - o12.v) * i10;
  let { s: d6, v: h7 } = o12, b4 = m7;
  if (e6) {
    const o13 = e6 / i10;
    b4 = (b4 + o13 * p6 + f6) % f6, d6 += o13 * s8, h7 += o13 * c6;
  }
  const v5 = [];
  for (let k4 = 0; k4 < l6 - 1; k4++) v5.push({ h: b4, s: d6, v: h7 }), b4 = (b4 + p6 + f6) % f6, d6 += s8, h7 += c6;
  return v5.push(n15 ? { h: b4, s: d6, v: h7 } : r14), v5;
}
function v3(o12, r14, t7) {
  const { numColors: l6, distanceOffset: e6, distanceInterval: i10, isCustomInterval: n15 } = t7;
  let { l: C5, a: a15, b: m7 } = o12;
  const g7 = (r14.l - C5) * i10, p6 = (r14.a - a15) * i10, u11 = (r14.b - m7) * i10, f6 = [];
  if (e6) {
    const o13 = e6 / i10;
    C5 += o13 * g7, a15 += o13 * p6, m7 += o13 * u11;
  }
  for (let s8 = 0; s8 < l6 - 1; s8++) f6.push({ l: C5, a: a15, b: m7 }), C5 += g7, a15 += p6, m7 += u11;
  return f6.push(n15 ? { l: C5, a: a15, b: m7 } : r14), f6;
}
function k3(o12, r14, t7) {
  const { numColors: l6, distanceOffset: e6, distanceInterval: i10, isCustomInterval: n15 } = t7, C5 = o12.h, a15 = r14.h, m7 = 2 * Math.PI;
  let g7;
  if (C5 <= a15) {
    const o13 = a15 - C5, r15 = a15 - C5 - m7;
    g7 = Math.abs(r15) < Math.abs(o13) ? r15 : o13;
  } else {
    const o13 = a15 + m7 - C5, r15 = a15 - C5;
    g7 = Math.abs(r15) < Math.abs(o13) ? r15 : o13;
  }
  const p6 = g7 * i10, u11 = (r14.l - o12.l) * i10, f6 = (r14.c - o12.c) * i10;
  let { l: s8, c: c6, h: d6 } = o12;
  if (e6) {
    const o13 = e6 / i10;
    s8 += o13 * u11, c6 += o13 * f6, d6 = (d6 + o13 * p6 + m7) % m7;
  }
  const h7 = [];
  for (let b4 = 0; b4 < l6 - 1; b4++) h7.push({ l: s8, c: c6, h: d6 }), s8 += u11, c6 += f6, d6 = (d6 + p6 + m7) % m7;
  return h7.push(n15 ? { l: s8, c: c6, h: d6 } : r14), h7;
}
function y3(o12, i10) {
  let { fromColor: n15, toColor: C5 } = o12;
  n15 = [...n15], C5 = [...C5], 3 === n15.length && (n15 = n15.concat([255])), 3 === C5.length && (C5 = C5.concat([255]));
  const a15 = o12.algorithm || "esriCIELabAlgorithm", m7 = h6(i10), { numColors: g7, distanceOffset: p6, isCustomInterval: u11, interpolateAlpha: f6 } = m7;
  if (1 === g7 && 0 === p6) return [n15];
  if (2 === g7 && 0 === p6 && !u11) return [n15, C5];
  const s8 = { r: n15[0], g: n15[1], b: n15[2] }, c6 = { r: C5[0], g: C5[1], b: C5[2] }, d6 = "esriCIELabAlgorithm" === a15 ? v3(C(s8), C(c6), m7) : "esriHSVAlgorithm" === a15 ? b3(B(s8), B(c6), m7) : k3(H(s8), H(c6), m7), y4 = [], R3 = n15[3] ?? 255, w5 = ((C5[3] ?? 255) - R3) / (g7 - 1);
  for (let r14 = 0; r14 < g7; r14++) {
    const { r: o13, g: t7, b: l6 } = U(d6[r14]), i11 = f6 ? Math.round(R3 + w5 * r14) : 255;
    y4.push([o13, t7, l6, i11]);
  }
  return y4;
}
function R2(o12, r14) {
  const { numColors: t7, interpolateAlpha: l6 } = h6(r14);
  let e6 = r14 == null ? void 0 : r14.weights;
  const { colorRamps: i10 } = o12;
  if (e6) {
    const o13 = e6.reduce((o14, r15) => o14 + r15);
    e6 = e6.map((r15) => r15 / o13);
  } else {
    e6 = [];
    for (let o13 = 0; o13 < i10.length; o13++) e6[o13] = 1 / i10.length;
  }
  const n15 = [], C5 = 1 / (t7 - 1);
  let a15 = 0, m7 = false;
  for (let p6 = 0; p6 < i10.length; p6++) {
    const o13 = n15.length, r15 = m7 ? 0 : o13 * C5 - a15;
    a15 += e6[p6];
    let g8 = p6 === i10.length - 1 ? t7 - 1 - o13 : (e6[p6] - r15) / C5;
    if (m7 = Math.ceil(g8) === g8, g8 = Math.ceil(g8), 0 === g8) continue;
    const u11 = y3(i10[p6], { numColors: g8, interpolateAlpha: l6, distanceOffset: r15 / e6[p6], distanceInterval: C5 / e6[p6] });
    n15.push(...u11);
  }
  const g7 = [...i10[i10.length - 1].toColor];
  return 3 === g7.length && g7.push(255), n15.push(g7), n15;
}
function w4(o12, r14) {
  const t7 = S.isSerializable(o12) ? o12.toJSON() : o12;
  return "multipart" === t7.type ? R2(t7, r14) : y3(t7, r14);
}
function B3(o12, r14) {
  const t7 = w4(o12, r14), l6 = r14 == null ? void 0 : r14.interpolateAlpha;
  return t7.forEach((o13, r15) => {
    o13.unshift(r15), l6 || o13.pop();
  }), t7;
}
function D3(o12) {
  const t7 = [];
  for (let l6 = 0; l6 < o12.length; l6 += 4) {
    const e6 = B({ r: o12[l6], g: o12[l6 + 1], b: o12[l6 + 2] });
    t7.push([e6.h / 60, e6.s / 100, 255 * e6.v / 100]);
  }
  return t7;
}
function I3(o12) {
  const t7 = B(o12);
  return { type: "HsvColor", Hue: t7.h, Saturation: t7.s, Value: t7.v, AlphaValue: 255 };
}
function G2(o12) {
  const r14 = o12.toJSON();
  return { Algorithm: (r14 == null ? void 0 : r14.Algorithm) || "esriHSVAlgorithm", type: "AlgorithmicColorRamp", FromColor: I3(o12.fromColor), ToColor: I3(o12.toColor) };
}
function S5(o12) {
  const r14 = c5(o12);
  if (!r14) return null;
  if ("algorithmic" === o12.type) return { ...G2(o12), Name: r14 };
  if (o12.colorRamps) {
    const t7 = o12.colorRamps.map(G2);
    return { type: "MultiPartColorRamp", NumColorRamps: t7.length, ArrayOfColorRamp: t7, Name: r14 };
  }
  return null;
}
function A3(o12) {
  const r14 = o12.reverse().map((o13) => {
    const r15 = o13.toString(16);
    return r15.length < 2 ? "0" + r15 : r15;
  });
  return 4294967295 & Number.parseInt(r14.join(""), 16);
}

// node_modules/@arcgis/core/renderers/support/rasterRendererChecks.js
function n14(n15) {
  var _a, _b, _c;
  return ["u8", "s8"].includes(n15.pixelType) && null != ((_b = (_a = n15.statistics) == null ? void 0 : _a[0]) == null ? void 0 : _b.min) && null != ((_c = n15.statistics[0]) == null ? void 0 : _c.max) && 1 === n15.bandCount;
}
function t6(t7, e6) {
  const { attributeTable: u11, bandCount: r14 } = t7;
  if (null == u11 && n14(t7)) return true;
  if (null == u11 || r14 > 1) return false;
  if (e6) {
    if (null == u11.fields.find((n15) => n15.name.toLowerCase() === e6.toLowerCase())) return false;
  }
  return true;
}
function e5(n15) {
  const { bandCount: t7, dataType: e6, pixelType: u11 } = n15;
  return "elevation" === e6 || "generic" === e6 && 1 === t7 && ("s16" === u11 || "s32" === u11 || "f32" === u11 || "f64" === u11);
}
function u10(n15, t7 = false) {
  const { bandCount: e6, colormap: u11, pixelType: r14 } = n15;
  return 1 === e6 && (!!(u11 == null ? void 0 : u11.length) || !t7 && "u8" === r14);
}
function r13(n15, t7 = false) {
  const { attributeTable: e6, bandCount: u11 } = n15;
  return 1 === u11 && (!t7 || null != e6 || null != n15.histograms);
}
function o11(n15) {
  const { dataType: t7 } = n15;
  return "vector-uv" === t7 || "vector-magdir" === t7;
}
function i9(n15) {
  const { dataType: t7 } = n15;
  return "vector-uv" === t7 || "vector-magdir" === t7;
}
function a14(n15) {
  return !!(n15 == null ? void 0 : n15.length) && n15.length <= 16384;
}

// node_modules/@arcgis/core/renderers/support/RasterSymbolizer.js
var L2 = class extends S {
  constructor(e6) {
    super(e6);
  }
  bind() {
    const { rendererJSON: e6 } = this;
    if (!e6) return { success: false };
    let t7;
    switch (this.lookup = { rendererJSON: {} }, e6.type) {
      case "uniqueValue":
        t7 = this._updateUVRenderer(e6);
        break;
      case "rasterColormap":
        t7 = this._updateColormapRenderer(e6);
        break;
      case "rasterStretch":
        t7 = this._updateStretchRenderer(e6);
        break;
      case "classBreaks":
        t7 = this._updateClassBreaksRenderer(e6);
        break;
      case "rasterShadedRelief":
        t7 = this._updateShadedReliefRenderer(e6);
        break;
      case "vectorField":
        t7 = this._updateVectorFieldRenderer();
        break;
      case "flowRenderer":
        t7 = this._updateFlowRenderer();
    }
    return t7;
  }
  symbolize(e6) {
    let t7 = e6 == null ? void 0 : e6.pixelBlock;
    if (!v4(t7)) return t7;
    if (e6.simpleStretchParams && "rasterStretch" === this.rendererJSON.type) return this.simpleStretch(t7, e6.simpleStretchParams);
    try {
      let r14;
      switch (t7.pixels.length > 3 && (t7 = t7.extractBands(e6.bandIds ?? [0, 1, 2])), this.rendererJSON.type) {
        case "uniqueValue":
        case "rasterColormap":
          r14 = this._symbolizeColormap(t7);
          break;
        case "classBreaks":
          r14 = this._symbolizeClassBreaks(t7);
          break;
        case "rasterStretch":
          r14 = this._symbolizeStretch(t7, e6.bandIds);
          break;
        case "rasterShadedRelief": {
          const s8 = e6.extent, a15 = s8.spatialReference.isGeographic, o12 = { x: (s8.xmax - s8.xmin) / t7.width, y: (s8.ymax - s8.ymin) / t7.height };
          r14 = this._symbolizeShadedRelief(t7, { isGCS: a15, resolution: o12 });
          break;
        }
      }
      return r14;
    } catch (s8) {
      return n.getLogger(this).error("symbolize", s8.message), t7;
    }
  }
  simpleStretch(e6, t7) {
    if (!v4(e6)) return e6;
    try {
      return e6.pixels.length > 3 && (e6 = e6.extractBands([0, 1, 2])), M2(e6, { ...t7, isRenderer: true });
    } catch (s8) {
      return n.getLogger(this).error("symbolize", s8.message), e6;
    }
  }
  generateWebGLParameters(e6) {
    if (["uniqueValue", "rasterColormap", "classBreaks"].includes(this.rendererJSON.type)) {
      const { indexedColormap: e7, offset: t8 } = this.lookup.colormapLut || {};
      return { colormap: e7, colormapOffset: t8, isClassBreaks: "classBreaks" === this.rendererJSON.type, type: "lut" };
    }
    const { pixelBlock: t7, isGCS: r14, resolution: s8, bandIds: a15 } = e6, { rendererJSON: o12 } = this;
    return "rasterStretch" === o12.type ? this._generateStretchWebGLParams(t7, o12, a15) : "rasterShadedRelief" === o12.type ? this._generateShadedReliefWebGLParams(o12, r14, s8 ?? void 0) : "vectorField" === o12.type ? this._generateVectorFieldWebGLParams(o12) : null;
  }
  _isLUTChanged(e6) {
    if (!this.lookup || !this.lookup.rendererJSON) return true;
    if ("colorRamp" in this.rendererJSON) {
      const t7 = this.rendererJSON.colorRamp;
      return e6 ? JSON.stringify(t7) !== JSON.stringify(this.lookup.rendererJSON.colorRamp) : (this.rendererJSON, this.lookup.rendererJSON, JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON));
    }
    return JSON.stringify(this.rendererJSON) !== JSON.stringify(this.lookup.rendererJSON);
  }
  _symbolizeColormap(e6) {
    if (this._isLUTChanged()) {
      if (!this.bind().success) return e6;
    }
    return h2(e6, this.lookup.colormapLut);
  }
  _symbolizeClassBreaks(e6) {
    const { canUseIndexedLUT: t7 } = this._analyzeClassBreaks(this.rendererJSON);
    if (this._isLUTChanged()) {
      if (!this.bind().success) return e6;
    }
    return t7 ? h2(e6, this.lookup.colormapLut) : u2(e6, this.lookup.remapLut ?? []);
  }
  _symbolizeStretch(e6, t7) {
    var _a, _b;
    const { rasterInfo: r14 } = this, { pixelType: s8, bandCount: a15 } = r14, o12 = this.rendererJSON, i10 = ["u8", "u16", "s8", "s16"].includes(s8);
    let u11, c6;
    const { dra: m7 } = o12, { gamma: f6 } = this.lookup;
    if ("histogramEqualization" === o12.stretchType) {
      const s9 = m7 ? null : (_a = this.lookup) == null ? void 0 : _a.histogramLut, a16 = g5(o12, { rasterInfo: r14, pixelBlock: e6, bandIds: t7, returnHistogramLut: !s9 }), n15 = M2(e6, { ...a16, gamma: f6, isRenderer: true });
      c6 = f(n15, { lut: m7 ? a16.histogramLut : s9, offset: 0 });
    } else if (i10) {
      if (m7) {
        const a16 = g5(o12, { rasterInfo: r14, pixelBlock: e6, bandIds: t7 });
        u11 = a9({ pixelType: s8, ...a16, gamma: f6, rounding: "floor" });
      } else if (this._isLUTChanged()) {
        if (!this.bind().success) return e6;
        u11 = this.lookup ? this.lookup.stretchLut : null;
      } else u11 = this.lookup ? this.lookup.stretchLut : null;
      if (!u11) return e6;
      a15 > 1 && null != t7 && t7.length === (e6 == null ? void 0 : e6.pixels.length) && (u11 == null ? void 0 : u11.lut.length) === a15 && (u11 = { lut: t7.map((e7) => u11.lut[e7]), offset: u11.offset }), c6 = f(e6, u11);
    } else {
      const s9 = g5(o12, { rasterInfo: r14, pixelBlock: e6, bandIds: t7 });
      c6 = M2(e6, { ...s9, gamma: f6, isRenderer: true });
    }
    if (o12.colorRamp) {
      if (this._isLUTChanged(true)) {
        if (!this.bind().success) return e6;
      }
      c6 = h2(c6, (_b = this.lookup) == null ? void 0 : _b.colormapLut);
    }
    return c6;
  }
  _symbolizeShadedRelief(e6, t7) {
    var _a;
    const r14 = this.rendererJSON, s8 = { ...r14, ...t7 }, a15 = r12(e6, s8);
    if (!r14.colorRamp) return a15;
    let o12;
    if (this._isLUTChanged(true)) {
      if (!this.bind().success) return a15;
      o12 = this.lookup ? this.lookup.hsvMap : null;
    } else o12 = this.lookup ? this.lookup.hsvMap : null;
    if (!o12) return a15;
    const n15 = ((_a = this.rasterInfo.statistics) == null ? void 0 : _a[0]) ?? { min: 0, max: 8e3 };
    return c4(a15, e6, o12, n15), a15;
  }
  _isVectorFieldData() {
    const { bandCount: e6, dataType: t7 } = this.rasterInfo;
    return 2 === e6 && ("vector-magdir" === t7 || "vector-uv" === t7);
  }
  _updateVectorFieldRenderer() {
    return this._isVectorFieldData() ? { success: true } : { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; VectorFieldRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateFlowRenderer() {
    return this._isVectorFieldData() ? { success: true } : { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; FlowRenderer only supports "vector-magdir" and "vector-uv".` };
  }
  _updateUVRenderer(e6) {
    var _a;
    const { bandCount: t7, attributeTable: r14, pixelType: s8 } = this.rasterInfo, a15 = e6.field1;
    if (!a15) return { success: false, error: "Unsupported renderer; missing UniqueValueRenderer.field." };
    const o12 = e6.defaultSymbol, n15 = 1 === t7 && ["u8", "s8"].includes(s8);
    if (!t6(this.rasterInfo, a15) && !n15) return { success: false, error: "Unsupported data; UniqueValueRenderer is only supported on single band data with a valid raster attribute table." };
    const i10 = [];
    if (null != r14) {
      const t8 = r14.fields.find((e7) => "value" === e7.name.toLowerCase());
      if (!t8) return { success: false, error: "Unsupported data; the data's raster attribute table does not have a value field." };
      r14.features.forEach((r15) => {
        var _a2, _b;
        const s9 = (_a2 = e6.uniqueValueInfos) == null ? void 0 : _a2.find((e7) => String(e7.value) === String(r15.attributes[a15])), n16 = (_b = s9 == null ? void 0 : s9.symbol) == null ? void 0 : _b.color;
        n16 ? i10.push([r15.attributes[t8.name]].concat(n16)) : o12 && i10.push([r15.attributes[t8.name]].concat(o12.color));
      });
    } else {
      if ("value" !== a15.toLowerCase()) return { success: false, error: 'Unsupported renderer; UniqueValueRenderer.field must be "Value" when raster attribute table is not available.' };
      (_a = e6.uniqueValueInfos) == null ? void 0 : _a.forEach((e7) => {
        var _a2;
        const t8 = (_a2 = e7 == null ? void 0 : e7.symbol) == null ? void 0 : _a2.color;
        t8 ? i10.push([parseInt("" + e7.value, 10)].concat(t8)) : o12 && i10.push([parseInt("" + e7.value, 10)].concat(o12 == null ? void 0 : o12.color));
      });
    }
    if (0 === i10.length) return { success: false, error: "Invalid UniqueValueRenderer. Cannot find matching records in the raster attribute table." };
    const l6 = a4({ colormap: i10 });
    return this.lookup = { rendererJSON: e6, colormapLut: l6 }, this.canRenderInWebGL = a14(l6 == null ? void 0 : l6.indexedColormap), { success: true };
  }
  _updateColormapRenderer(e6) {
    if (!u10(this.rasterInfo)) return { success: false, error: "Unsupported data; the data source does not have a colormap." };
    const t7 = e6.colormapInfos.map((e7) => [e7.value].concat(e7.color)).sort((e7, t8) => e7[0] - t8[0]);
    if (!t7 || 0 === t7.length) return { success: false, error: "Unsupported renderer; ColormapRenderer must have meaningful colormapInfos." };
    const r14 = a4({ colormap: t7 });
    return this.lookup = { rendererJSON: e6, colormapLut: r14 }, this.canRenderInWebGL = a14(r14 == null ? void 0 : r14.indexedColormap), { success: true };
  }
  _updateShadedReliefRenderer(e6) {
    if (!e5(this.rasterInfo)) return { success: false, error: `Unsupported data type "${this.rasterInfo.dataType}"; ShadedReliefRenderer only supports "elevation", or single band float/s16 data.` };
    if (e6.colorRamp) {
      const t7 = B3(e6.colorRamp, { interpolateAlpha: true }), r14 = a4({ colormap: t7 }), s8 = D3(r14.indexedColormap);
      this.lookup = { rendererJSON: e6, colormapLut: r14, hsvMap: s8 };
    } else this.lookup = null;
    return this.canRenderInWebGL = true, { success: true };
  }
  _analyzeClassBreaks(e6) {
    const { attributeTable: t7, pixelType: r14 } = this.rasterInfo, s8 = null != t7 ? t7.fields.find((e7) => "value" === e7.name.toLowerCase()) : null, a15 = null != t7 ? t7.fields.find((t8) => t8.name.toLowerCase() === e6.field.toLowerCase()) : null, o12 = null != s8 && null !== a15;
    return { canUseIndexedLUT: ["u8", "u16", "s8", "s16"].includes(r14) || o12, tableValueField: s8, tableBreakField: a15 };
  }
  _updateClassBreaksRenderer(e6) {
    const { attributeTable: t7 } = this.rasterInfo, { canUseIndexedLUT: r14, tableValueField: s8, tableBreakField: a15 } = this._analyzeClassBreaks(e6), o12 = e6.classBreakInfos;
    if (!(o12 == null ? void 0 : o12.length)) return { success: false, error: "Unsupported renderer; missing or invalid ClassBreaksRenderer.classBreakInfos." };
    const n15 = o12.sort((e7, t8) => e7.classMaxValue - t8.classMaxValue), i10 = n15[n15.length - 1];
    let l6 = e6.minValue;
    if (!r14) {
      const t8 = [];
      for (let e7 = 0; e7 < n15.length; e7++) t8.push({ value: n15[e7].classMinValue ?? l6, mappedColor: n15[e7].symbol.color }), l6 = n15[e7].classMaxValue;
      return t8.push({ value: i10.classMaxValue, mappedColor: i10.symbol.color }), this.lookup = { rendererJSON: e6, remapLut: t8 }, this.canRenderInWebGL = false, { success: true };
    }
    const c6 = [];
    if (null != t7 && null != s8 && null !== a15 && s8 !== a15) {
      const r15 = s8.name, o13 = a15.name, i11 = n15[n15.length - 1], { classMaxValue: u11 } = i11;
      l6 = e6.minValue;
      for (const e7 of t7.features) {
        const t8 = e7.attributes[r15], s9 = e7.attributes[o13], a16 = s9 === u11 ? i11 : s9 < l6 ? null : n15.find(({ classMaxValue: e8 }) => e8 > s9);
        a16 && c6.push([t8].concat(a16.symbol.color));
      }
    } else {
      l6 = Math.floor(e6.minValue);
      for (let e7 = 0; e7 < n15.length; e7++) {
        const t8 = n15[e7];
        for (let e8 = l6; e8 < t8.classMaxValue; e8++) c6.push([e8].concat(t8.symbol.color));
        l6 = Math.ceil(t8.classMaxValue);
      }
      i10.classMaxValue === l6 && c6.push([i10.classMaxValue].concat(i10.symbol.color));
    }
    const p6 = a4({ colormap: c6, fillUnspecified: false });
    return this.lookup = { rendererJSON: e6, colormapLut: p6 }, this.canRenderInWebGL = a14(p6 == null ? void 0 : p6.indexedColormap), { success: true };
  }
  _updateStretchRenderer(e6) {
    var _a, _b;
    let { stretchType: t7, dra: r14 } = e6;
    if (!("none" === t7 || ((_a = e6.statistics) == null ? void 0 : _a.length) || V2(this.rasterInfo.statistics) || r14)) return { success: false, error: "Unsupported renderer; StretchRenderer.statistics is required when dynamic range adjustment is not used." };
    const s8 = e6.histograms || this.rasterInfo.histograms;
    !O3(e6.stretchType) || (s8 == null ? void 0 : s8.length) || r14 || (t7 = "minMax");
    const { computeGamma: a15, useGamma: o12, colorRamp: n15 } = e6;
    let { gamma: i10 } = e6;
    if (o12 && a15 && !(i10 == null ? void 0 : i10.length)) {
      const t8 = ((_b = e6.statistics) == null ? void 0 : _b.length) ? e6.statistics : this.rasterInfo.statistics;
      i10 = u5(this.rasterInfo.pixelType, t8);
    }
    const l6 = this.rasterInfo.pixelType, c6 = !r14 && ["u8", "u16", "s8", "s16"].includes(l6);
    if ("histogramEqualization" === t7) {
      const t8 = s8.map((e7) => r11(e7));
      this.lookup = { rendererJSON: e6, histogramLut: t8 };
    } else if (c6) {
      const t8 = g5(e6, { rasterInfo: this.rasterInfo }), r15 = a9({ pixelType: l6, ...t8, gamma: o12 ? i10 : null, rounding: "floor" });
      this.lookup = { rendererJSON: e6, stretchLut: r15 };
    }
    if (n15 && !T3(n15)) {
      const t8 = B3(n15, { interpolateAlpha: true });
      this.lookup || (this.lookup = { rendererJSON: e6 }), this.lookup.colormapLut = a4({ colormap: t8 }), this.lookup.rendererJSON = e6;
    }
    return this.lookup.gamma = o12 && (i10 == null ? void 0 : i10.length) ? i10 : null, this.canRenderInWebGL = true, { success: true };
  }
  _generateStretchWebGLParams(e6, t7, r14) {
    var _a;
    let s8 = null, a15 = null;
    const o12 = (_a = this.lookup) == null ? void 0 : _a.colormapLut;
    t7.colorRamp && o12 && (s8 = o12.indexedColormap, a15 = o12.offset), "histogramEqualization" === t7.stretchType && (t7 = { ...t7, stretchType: "minMax" });
    const { gamma: n15 } = this.lookup, i10 = !(!t7.useGamma || !(n15 == null ? void 0 : n15.some((e7) => 1 !== e7))), { minCutOff: l6, maxCutOff: u11, minOutput: c6, maxOutput: p6 } = g5(t7, { rasterInfo: this.rasterInfo, pixelBlock: e6, bandIds: r14 });
    let h7 = 0;
    null != e6 && (h7 = e6.getPlaneCount(), 2 === h7 && ((e6 = e6.clone()).statistics = [e6.statistics[0]], e6.pixels = [e6.pixels[0]]));
    const { bandCount: m7 } = this.rasterInfo, f6 = Math.min(3, (r14 == null ? void 0 : r14.length) || h7 || m7, m7), y4 = s8 || i10 ? 1 : 255, b4 = new Float32Array(f6);
    if (i10 && n15) for (let d6 = 0; d6 < f6; d6++) n15[d6] > 1 ? n15[d6] > 2 ? b4[d6] = 6.5 + (n15[d6] - 2) ** 2.5 : b4[d6] = 6.5 + 100 * (2 - n15[d6]) ** 4 : b4[d6] = 1;
    1 === l6.length && (l6[2] = l6[1] = l6[0]), 1 === u11.length && (u11[2] = u11[1] = u11[0]);
    const g7 = i10 && n15 ? [n15[0], n15[1] ?? n15[0], n15[2] ?? n15[0]] : [1, 1, 1], S6 = i10 ? [b4[0], b4[1] ?? b4[0], b4[2] ?? b4[0]] : [1, 1, 1], k4 = u11.map((e7, t8) => u11[t8] === l6[t8] ? 0 : (p6 - c6) / (u11[t8] - l6[t8]) / y4);
    return { bandCount: f6, minOutput: c6 / y4, maxOutput: p6 / y4, minCutOff: l6, maxCutOff: u11, factor: k4, useGamma: i10, gamma: g7, gammaCorrection: S6, colormap: s8, colormapOffset: a15, stretchType: t7.stretchType, type: "stretch" };
  }
  _generateShadedReliefWebGLParams(e6, t7 = false, r14 = { x: 0, y: 0 }) {
    var _a, _b;
    let s8 = null, a15 = null;
    const o12 = (_a = this.lookup) == null ? void 0 : _a.colormapLut;
    e6.colorRamp && o12 && (s8 = o12.indexedColormap, a15 = o12.offset);
    const n15 = { ...e6, isGCS: t7, resolution: r14 }, i10 = a12(n15), l6 = (_b = this.rasterInfo.statistics) == null ? void 0 : _b[0];
    return { ...i10, minValue: (l6 == null ? void 0 : l6.min) ?? 0, maxValue: (l6 == null ? void 0 : l6.max) ?? 8e3, hillshadeType: "traditional" === e6.hillshadeType ? 0 : 1, type: "hillshade", colormap: s8, colormapOffset: a15 };
  }
  _generateVectorFieldWebGLParams(e6) {
    var _a, _b, _c;
    const { style: t7, inputUnit: r14, outputUnit: s8, visualVariables: a15, symbolTileSize: o12, flowRepresentation: n15 } = e6;
    let i10;
    const l6 = ((_a = this.rasterInfo.statistics) == null ? void 0 : _a[0].min) ?? 0, u11 = ((_b = this.rasterInfo.statistics) == null ? void 0 : _b[0].max) ?? 50, c6 = (a15 == null ? void 0 : a15.find((e7) => "sizeInfo" === e7.type)) ?? { type: "sizeInfo", field: "Magnitude", maxDataValue: u11, maxSize: 0.8 * o12, minDataValue: l6, minSize: 0.2 * o12 }, p6 = c6.minDataValue ?? l6, d6 = c6.maxDataValue ?? u11, h7 = null != c6.maxSize && null != c6.minSize ? [c6.minSize / o12, c6.maxSize / o12] : [0.2, 0.8];
    if ("wind_speed" === t7) {
      const e7 = (h7[0] + h7[1]) / 2;
      h7[0] = h7[1] = e7;
    }
    const m7 = null != p6 && null != d6 ? [p6, d6] : null;
    if ("classified_arrow" === t7) if (null != p6 && null != d6 && null != c6) {
      i10 = [];
      const e7 = (c6.maxDataValue - c6.minDataValue) / 5;
      for (let t8 = 0; t8 < 6; t8++) i10.push(c6.minDataValue + e7 * t8);
    } else i10 = [0, 1e-6, 3.5, 7, 10.5, 14];
    const f6 = "flow_to" === n15 === ("ocean_current_kn" === t7 || "ocean_current_m" === t7) ? 0 : Math.PI, y4 = a15 == null ? void 0 : a15.find((e7) => "rotationInfo" === e7.type);
    return { breakValues: i10, dataRange: m7, inputUnit: r14, outputUnit: s8, symbolTileSize: o12, symbolPercentRange: h7, style: t7 || "single_arrow", rotation: f6, rotationType: ((_c = this.rasterInfo.storageInfo) == null ? void 0 : _c.tileInfo) && "vector-uv" === this.rasterInfo.dataType ? "geographic" : (y4 == null ? void 0 : y4.rotationType) || e6.rotationType, type: "vectorField" };
  }
};
r([m({ json: { write: true } })], L2.prototype, "rendererJSON", void 0), r([m({ type: d3, json: { write: true } })], L2.prototype, "rasterInfo", void 0), r([m({ json: { write: true } })], L2.prototype, "lookup", void 0), r([m()], L2.prototype, "canRenderInWebGL", void 0), L2 = r([a2("esri.renderers.support.RasterSymbolizer")], L2);
var _ = L2;
function O3(e6) {
  return "percentClip" === e6 || "histogramEqualization" === e6;
}
function V2(e6) {
  return null != e6 && e6.length > 0 && null != e6[0].min && null != e6[0].max;
}
function v4(e6) {
  return o4(e6) && 0 !== e6.validPixelCount;
}
function T3(e6) {
  return "algorithmic" === e6.type && ["0,0,0,255", "0,0,0"].includes(e6.fromColor.join(",")) && ["255,255,255,255", "255,255,255"].includes(e6.toColor.join(","));
}

export {
  a10 as a,
  i8 as i,
  n10 as n,
  C4 as C,
  a13 as a2,
  m6 as m,
  c5 as c,
  d5 as d,
  w4 as w,
  B3 as B,
  D3 as D,
  S5 as S,
  A3 as A,
  n8 as n2,
  a8 as a3,
  n12 as n3,
  d3 as d2,
  r9 as r,
  n7 as n4,
  r10 as r2,
  L,
  D as D2,
  R,
  N,
  U2 as U,
  F,
  B2,
  P2 as P,
  j2 as j,
  t6 as t,
  e5 as e,
  u10 as u,
  r13 as r3,
  o11 as o,
  i9 as i2,
  a14 as a4,
  a9 as a5,
  l3 as l,
  m4 as m2,
  h4 as h,
  p2 as p,
  g5 as g,
  x3 as x,
  M2 as M,
  n13 as n5,
  a12 as a6,
  r12 as r4,
  c4 as c2,
  h5 as h2,
  u8 as u2,
  f4 as f,
  d4 as d3,
  _
};
//# sourceMappingURL=chunk-GLICEWE6.js.map
