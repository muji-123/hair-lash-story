"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var Recharts = window.Recharts || {};
var BarChart = Recharts.BarChart,
  Bar = Recharts.Bar,
  XAxis = Recharts.XAxis,
  YAxis = Recharts.YAxis;
var Tooltip = Recharts.Tooltip,
  ResponsiveContainer = Recharts.ResponsiveContainer,
  CartesianGrid = Recharts.CartesianGrid;
var LineChart = Recharts.LineChart,
  Line = Recharts.Line;
var useState = React.useState,
  useEffect = React.useEffect,
  useMemo = React.useMemo,
  useRef = React.useRef;

// ── Constants ────────────────────────────────────────────────────────────────
var HAIR_ITEMS = ["剪髮（含洗）", "修瀏海", "局部燙（燙劉海）", "局部燙（髮尾C彎）", "護髮（深層護髮）", "護髮（一般護髮）", "洗髮", "頭皮隔離", "染髮（補染）", "染髮（整頭染）"];
var LASH_ITEMS = ["150根", "補接"];
var TABS = ["hair", "lash", "stats", "reminders", "salons"];
var TAB_LABELS = {
  hair: "💇🏻‍♀️ 剪髮",
  lash: "💫 美睫",
  stats: "📊 統計",
  reminders: "⏰ 提醒",
  salons: "⭐ 沙龍"
};
var C = {
  bg: "#fdf6f0",
  bg2: "#fce9dc",
  card: "#ffffff",
  primary: "#c0845a",
  primary2: "#a06040",
  primaryLight: "#f5e6d8",
  text: "#4a2e1a",
  textMid: "#8b6045",
  textLight: "#b09080",
  textFaint: "#c4a898",
  border: "#e8d5c4",
  border2: "#f0ddd0",
  green: "#7daa7d",
  red: "#d08080"
};

// ── Helpers ───────────────────────────────────────────────────────────────────
var fmtDate = function fmtDate(d) {
  if (!d) return "";
  var dt = new Date(d);
  return "".concat(dt.getFullYear(), "/").concat(String(dt.getMonth() + 1).padStart(2, "0"), "/").concat(String(dt.getDate()).padStart(2, "0"));
};
var todayStr = function todayStr() {
  return new Date().toISOString().split("T")[0];
};
var daysFrom = function daysFrom(d) {
  return Math.round((new Date(d) - new Date()) / 86400000);
};
var addDays = function addDays(d, n) {
  var dt = new Date(d);
  dt.setDate(dt.getDate() + n);
  return dt.toISOString().split("T")[0];
};
var monthKey = function monthKey(d) {
  return d ? d.slice(0, 7) : "";
};
var emptyHair = function emptyHair() {
  return {
    id: Date.now(),
    selectedItems: [],
    customItems: [],
    cost: "",
    date: todayStr(),
    note: "",
    salonId: "",
    photo: ""
  };
};
var emptyLash = function emptyLash() {
  return {
    id: Date.now(),
    item: "150根",
    cost: "",
    date: todayStr(),
    note: "",
    salonId: "",
    photo: ""
  };
};
var emptyReminder = function emptyReminder() {
  return {
    id: Date.now(),
    type: "hair",
    label: "",
    date: "",
    cycleWeeks: 6,
    active: true
  };
};
var emptySalon = function emptySalon() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "hair";
  return {
    id: Date.now(),
    type: type,
    name: "",
    phone: "",
    address: "",
    note: "",
    rating: 5
  };
};

// ── Storage ───────────────────────────────────────────────────────────────────
var CLOUD_OK = false;
var load = function load(key, def) {
  try {
    var v = localStorage.getItem(key);
    return v ? JSON.parse(v) : def;
  } catch (e) {
    return def;
  }
};
var save = function save(key, val) {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
};
var cloudLoad = /*#__PURE__*/function () {
  var _cloudLoad = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(key) {
    var r, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          if (CLOUD_OK) {
            _context.n = 1;
            break;
          }
          return _context.a(2, null);
        case 1:
          _context.p = 1;
          _context.n = 2;
          return window.storage.get(key);
        case 2:
          r = _context.v;
          return _context.a(2, r ? JSON.parse(r.value) : null);
        case 3:
          _context.p = 3;
          _t = _context.v;
          return _context.a(2, null);
      }
    }, _callee, null, [[1, 3]]);
  }));
  function cloudLoad(_x) {
    return _cloudLoad.apply(this, arguments);
  }
  return cloudLoad;
}();
var cloudSave = /*#__PURE__*/function () {
  var _cloudSave = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(key, val) {
    var _iterator, _step, r, _t2, _t3, _t4;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (CLOUD_OK) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          if (!(key === "hair" || key === "lash")) {
            _context2.n = 13;
            break;
          }
          _context2.n = 2;
          return window.storage.set(key, JSON.stringify(val.map(function (r) {
            return _objectSpread(_objectSpread({}, r), {}, {
              photo: ""
            });
          })));
        case 2:
          _iterator = _createForOfIteratorHelper(val);
          _context2.p = 3;
          _iterator.s();
        case 4:
          if ((_step = _iterator.n()).done) {
            _context2.n = 9;
            break;
          }
          r = _step.value;
          if (!r.photo) {
            _context2.n = 8;
            break;
          }
          _context2.p = 5;
          _context2.n = 6;
          return window.storage.set("photo_" + r.id, r.photo);
        case 6:
          _context2.n = 8;
          break;
        case 7:
          _context2.p = 7;
          _t2 = _context2.v;
        case 8:
          _context2.n = 4;
          break;
        case 9:
          _context2.n = 11;
          break;
        case 10:
          _context2.p = 10;
          _t3 = _context2.v;
          _iterator.e(_t3);
        case 11:
          _context2.p = 11;
          _iterator.f();
          return _context2.f(11);
        case 12:
          _context2.n = 14;
          break;
        case 13:
          _context2.n = 14;
          return window.storage.set(key, JSON.stringify(val));
        case 14:
          _context2.n = 16;
          break;
        case 15:
          _context2.p = 15;
          _t4 = _context2.v;
        case 16:
          return _context2.a(2);
      }
    }, _callee2, null, [[5, 7], [3, 10, 11, 12], [1, 15]]);
  }));
  function cloudSave(_x2, _x3) {
    return _cloudSave.apply(this, arguments);
  }
  return cloudSave;
}();
var cloudLoadPhotos = /*#__PURE__*/function () {
  var _cloudLoadPhotos = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(records) {
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          if (CLOUD_OK) {
            _context4.n = 1;
            break;
          }
          return _context4.a(2, records);
        case 1:
          return _context4.a(2, Promise.all(records.map(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(r) {
              var res, _t5;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.p = _context3.n) {
                  case 0:
                    if (!r.photo) {
                      _context3.n = 1;
                      break;
                    }
                    return _context3.a(2, r);
                  case 1:
                    _context3.p = 1;
                    _context3.n = 2;
                    return window.storage.get("photo_" + r.id);
                  case 2:
                    res = _context3.v;
                    return _context3.a(2, res ? _objectSpread(_objectSpread({}, r), {}, {
                      photo: res.value
                    }) : r);
                  case 3:
                    _context3.p = 3;
                    _t5 = _context3.v;
                    return _context3.a(2, r);
                }
              }, _callee3, null, [[1, 3]]);
            }));
            return function (_x5) {
              return _ref.apply(this, arguments);
            };
          }())));
      }
    }, _callee4);
  }));
  function cloudLoadPhotos(_x4) {
    return _cloudLoadPhotos.apply(this, arguments);
  }
  return cloudLoadPhotos;
}();

// ── UI Atoms ──────────────────────────────────────────────────────────────────
var inputStyle = {
  width: "100%",
  border: "1.5px solid ".concat(C.border),
  borderRadius: 10,
  padding: "9px 12px",
  fontSize: 14,
  background: "#fff8f3",
  color: C.text,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit"
};
var labelStyle = {
  fontSize: 12,
  fontWeight: 700,
  color: C.textMid,
  marginBottom: 4,
  display: "block"
};
var Btn = function Btn(_ref2) {
  var children = _ref2.children,
    onClick = _ref2.onClick,
    _ref2$variant = _ref2.variant,
    variant = _ref2$variant === void 0 ? "primary" : _ref2$variant,
    _ref2$size = _ref2.size,
    size = _ref2$size === void 0 ? "md" : _ref2$size,
    _ref2$style = _ref2.style,
    s = _ref2$style === void 0 ? {} : _ref2$style;
  var base = {
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 700,
    borderRadius: size === "sm" ? 10 : 14,
    padding: size === "sm" ? "6px 14px" : size === "lg" ? "14px 0" : "10px 22px",
    fontSize: size === "sm" ? 12 : 14,
    transition: "all 0.15s"
  };
  var variants = {
    primary: {
      background: "linear-gradient(135deg,".concat(C.primary, ",").concat(C.primary2, ")"),
      color: "#fff",
      boxShadow: "0 4px 14px rgba(160,96,64,0.28)"
    },
    ghost: {
      background: "#fff",
      color: C.textMid,
      border: "1.5px solid ".concat(C.border)
    },
    danger: {
      background: "#fff",
      color: C.red,
      border: "1.5px solid #e8c4c4"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: _objectSpread(_objectSpread(_objectSpread({}, base), variants[variant]), s)
  }, children);
};
var Tag = function Tag(_ref3) {
  var label = _ref3.label,
    onRemove = _ref3.onRemove,
    color = _ref3.color;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      background: color || C.primaryLight,
      color: C.textMid,
      borderRadius: 20,
      padding: "3px 10px",
      fontSize: 12,
      fontWeight: 600
    }
  }, label, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textMid,
      fontSize: 14,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
};
var Modal = function Modal(_ref4) {
  var show = _ref4.show,
    onClose = _ref4.onClose,
    title = _ref4.title,
    children = _ref4.children;
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(30,18,10,0.45)",
      zIndex: 200,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: function onClick(e) {
      return e.stopPropagation();
    },
    style: {
      background: "#fffaf6",
      borderRadius: 20,
      padding: 24,
      width: "min(96vw,440px)",
      boxShadow: "0 20px 60px rgba(100,60,20,0.2)",
      maxHeight: "90vh",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 17,
      fontWeight: 900,
      color: "#6b3e20"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textLight,
      fontSize: 24,
      lineHeight: 1
    }
  }, "\xD7")), children));
};

// Photo upload component (with compression)
var PhotoUpload = function PhotoUpload(_ref5) {
  var value = _ref5.value,
    onChange = _ref5.onChange;
  var ref = useRef();
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    compressing = _useState2[0],
    setCompressing = _useState2[1];
  var handleFile = /*#__PURE__*/function () {
    var _handleFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(e) {
      var f, compressed, reader, _t6;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            f = e.target.files[0];
            if (f) {
              _context5.n = 1;
              break;
            }
            return _context5.a(2);
          case 1:
            setCompressing(true);
            _context5.p = 2;
            _context5.n = 3;
            return compressImage(f, 1200, 0.75);
          case 3:
            compressed = _context5.v;
            onChange(compressed);
            _context5.n = 5;
            break;
          case 4:
            _context5.p = 4;
            _t6 = _context5.v;
            reader = new FileReader();
            reader.onload = function (ev) {
              return onChange(ev.target.result);
            };
            reader.readAsDataURL(f);
          case 5:
            _context5.p = 5;
            setCompressing(false);
            return _context5.f(5);
          case 6:
            return _context5.a(2);
        }
      }, _callee5, null, [[2, 4, 5, 6]]);
    }));
    function handleFile(_x6) {
      return _handleFile.apply(this, arguments);
    }
    return handleFile;
  }();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u7167\u7247\uFF08\u9078\u586B\uFF09"), value ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: value,
    alt: "preview",
    style: {
      width: 120,
      height: 90,
      objectFit: "cover",
      borderRadius: 12,
      border: "1.5px solid ".concat(C.border)
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onChange("");
    },
    style: {
      position: "absolute",
      top: 4,
      right: 4,
      background: "rgba(0,0,0,0.5)",
      border: "none",
      color: "#fff",
      borderRadius: "50%",
      width: 22,
      height: 22,
      cursor: "pointer",
      fontSize: 14,
      lineHeight: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\xD7")) : /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return !compressing && ref.current.click();
    },
    style: {
      width: 120,
      height: 90,
      border: "2px dashed ".concat(C.border),
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 12,
      gap: 4,
      opacity: compressing ? 0.6 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24
    }
  }, compressing ? "⏳" : "📷"), compressing ? "壓縮中…" : "上傳照片"), /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: "image/*",
    style: {
      display: "none"
    },
    onChange: handleFile
  }));
};

// Star rating
var Stars = function Stars(_ref6) {
  var value = _ref6.value,
    onChange = _ref6.onChange;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, [1, 2, 3, 4, 5].map(function (i) {
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: function onClick() {
        return onChange && onChange(i);
      },
      style: {
        background: "none",
        border: "none",
        cursor: onChange ? "pointer" : "default",
        fontSize: 20,
        padding: 0,
        color: i <= value ? "#e8a030" : "#ddd"
      }
    }, "\u2605");
  }));
};

// ── Forms ─────────────────────────────────────────────────────────────────────
function HairForm(_ref7) {
  var record = _ref7.record,
    _onChange = _ref7.onChange,
    salons = _ref7.salons;
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    customInput = _useState4[0],
    setCustomInput = _useState4[1];
  var toggle = function toggle(item) {
    var sel = record.selectedItems.includes(item) ? record.selectedItems.filter(function (i) {
      return i !== item;
    }) : [].concat(_toConsumableArray(record.selectedItems), [item]);
    _onChange(_objectSpread(_objectSpread({}, record), {}, {
      selectedItems: sel
    }));
  };
  var addCustom = function addCustom() {
    var v = customInput.trim();
    if (!v) return;
    _onChange(_objectSpread(_objectSpread({}, record), {}, {
      customItems: [].concat(_toConsumableArray(record.customItems), [v])
    }));
    setCustomInput("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "\u670D\u52D9\u9805\u76EE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
      marginBottom: 10
    }
  }, HAIR_ITEMS.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: function onClick() {
        return toggle(item);
      },
      style: {
        padding: "5px 12px",
        borderRadius: 20,
        fontSize: 12,
        cursor: "pointer",
        border: record.selectedItems.includes(item) ? "2px solid ".concat(C.primary) : "2px solid ".concat(C.border),
        background: record.selectedItems.includes(item) ? C.primaryLight : "#fff",
        color: record.selectedItems.includes(item) ? C.textMid : "#9a7560",
        fontWeight: record.selectedItems.includes(item) ? 700 : 400,
        transition: "all 0.15s"
      }
    }, item);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      flex: 1
    }),
    placeholder: "\u81EA\u8A02\u9805\u76EE\uFF08Enter\u65B0\u589E\uFF09",
    value: customInput,
    onChange: function onChange(e) {
      return setCustomInput(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === "Enter" && addCustom();
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: addCustom,
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "none",
      background: C.primary,
      color: "#fff",
      fontSize: 22,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "+")), record.customItems.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 8
    }
  }, record.customItems.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Tag, {
      key: i,
      label: item,
      onRemove: function onRemove() {
        return _onChange(_objectSpread(_objectSpread({}, record), {}, {
          customItems: record.customItems.filter(function (_, idx) {
            return idx !== i;
          })
        }));
      }
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u8CBB\u7528\uFF08\u5143\uFF09"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "number",
    placeholder: "0",
    value: record.cost,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, record), {}, {
        cost: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: record.date,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, record), {}, {
        date: e.target.value
      }));
    }
  }))), salons.filter(function (s) {
    return s.type === "hair" || !s.type;
  }).length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u6C99\u9F8D\uFF0F\u8A2D\u8A08\u5E2B"), /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    value: record.salonId,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, record), {}, {
        salonId: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u672A\u6307\u5B9A"), salons.filter(function (s) {
    return s.type === "hair" || !s.type;
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/React.createElement(PhotoUpload, {
    value: record.photo,
    onChange: function onChange(v) {
      return _onChange(_objectSpread(_objectSpread({}, record), {}, {
        photo: v
      }));
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u5099\u8A3B"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      resize: "vertical",
      minHeight: 56
    }),
    placeholder: "\u8A18\u9304\u5FC3\u5F97\u2026",
    value: record.note,
    onChange: function onChange(e) {
      return _onChange(_objectSpread(_objectSpread({}, record), {}, {
        note: e.target.value
      }));
    }
  })));
}
function LashForm(_ref8) {
  var record = _ref8.record,
    _onChange2 = _ref8.onChange,
    salons = _ref8.salons;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "\u670D\u52D9\u9805\u76EE"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, LASH_ITEMS.map(function (item) {
    return /*#__PURE__*/React.createElement("button", {
      key: item,
      onClick: function onClick() {
        return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
          item: item
        }));
      },
      style: {
        flex: 1,
        padding: "10px 0",
        borderRadius: 14,
        fontSize: 14,
        cursor: "pointer",
        border: record.item === item ? "2px solid ".concat(C.primary) : "2px solid ".concat(C.border),
        background: record.item === item ? C.primaryLight : "#fff",
        color: record.item === item ? C.textMid : "#9a7560",
        fontWeight: record.item === item ? 700 : 400,
        transition: "all 0.15s"
      }
    }, item);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u8CBB\u7528\uFF08\u5143\uFF09"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "number",
    placeholder: "0",
    value: record.cost,
    onChange: function onChange(e) {
      return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
        cost: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: record.date,
    onChange: function onChange(e) {
      return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
        date: e.target.value
      }));
    }
  }))), salons.filter(function (s) {
    return s.type === "lash";
  }).length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u6C99\u9F8D\uFF0F\u63A5\u776B\u5E2B"), /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    value: record.salonId,
    onChange: function onChange(e) {
      return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
        salonId: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "\u672A\u6307\u5B9A"), salons.filter(function (s) {
    return s.type === "lash";
  }).map(function (s) {
    return /*#__PURE__*/React.createElement("option", {
      key: s.id,
      value: s.id
    }, s.name);
  }))), /*#__PURE__*/React.createElement(PhotoUpload, {
    value: record.photo,
    onChange: function onChange(v) {
      return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
        photo: v
      }));
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u5099\u8A3B"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      resize: "vertical",
      minHeight: 56
    }),
    placeholder: "\u8A18\u9304\u5FC3\u5F97\u2026",
    value: record.note,
    onChange: function onChange(e) {
      return _onChange2(_objectSpread(_objectSpread({}, record), {}, {
        note: e.target.value
      }));
    }
  })));
}

// ── Record Cards ──────────────────────────────────────────────────────────────
function RecordCard(_ref9) {
  var record = _ref9.record,
    onDelete = _ref9.onDelete,
    salons = _ref9.salons,
    type = _ref9.type;
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    expanded = _useState6[0],
    setExpanded = _useState6[1];
  var items = type === "hair" ? [].concat(_toConsumableArray(record.selectedItems || []), _toConsumableArray(record.customItems || [])) : [record.item];
  var salon = salons.find(function (s) {
    return s.id === record.salonId;
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: "1.5px solid ".concat(C.border2),
      boxShadow: "0 2px 16px rgba(140,80,30,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.textLight,
      fontWeight: 600
    }
  }, fmtDate(record.date)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, (record.photo || record.note || salon) && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setExpanded(!expanded);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 12
    }
  }, expanded ? "▲" : "▼"), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 18,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      margin: "10px 0 8px"
    }
  }, items.length > 0 ? items.map(function (item, i) {
    return /*#__PURE__*/React.createElement(Tag, {
      key: i,
      label: item
    });
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.textFaint,
      fontSize: 13
    }
  }, "\u672A\u9078\u64C7\u9805\u76EE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      color: C.textMid
    }
  }, record.cost ? "NT$ ".concat(Number(record.cost).toLocaleString()) : "—"), salon && /*#__PURE__*/React.createElement(Tag, {
    label: "\u2B50 ".concat(salon.name),
    color: "#fff3e0"
  }))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(C.border2),
      padding: "14px 18px",
      background: "#fffaf6",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, record.photo && /*#__PURE__*/React.createElement("img", {
    src: record.photo,
    alt: "\u8A18\u9304\u7167\u7247",
    style: {
      width: "100%",
      maxHeight: 200,
      objectFit: "cover",
      borderRadius: 12
    }
  }), record.note && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      color: C.textMid
    }
  }, record.note)));
}

// ── Group records by date ─────────────────────────────────────────────────────
function groupByDate(records) {
  var map = {};
  records.forEach(function (r) {
    var d = r.date || "unknown";
    if (!map[d]) map[d] = [];
    map[d].push(r);
  });
  // Return sorted date keys (newest first for date_desc, handled by caller)
  return map;
}

// Each individual record row — has its own 📷 toggle per record
function RecordRow(_ref0) {
  var r = _ref0.r,
    type = _ref0.type,
    salons = _ref0.salons,
    onDelete = _ref0.onDelete;
  var _useState7 = useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
  var items = type === "hair" ? [].concat(_toConsumableArray(r.selectedItems || []), _toConsumableArray(r.customItems || [])) : [r.item];
  var salon = salons.find(function (s) {
    return s.id === r.salonId;
  });
  var hasExtra = !!(r.photo || salon);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 5,
      flex: 1
    }
  }, items.length > 0 ? items.map(function (item, j) {
    return /*#__PURE__*/React.createElement(Tag, {
      key: j,
      label: item
    });
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.textFaint,
      fontSize: 12
    }
  }, "\u672A\u9078\u64C7\u9805\u76EE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexShrink: 0,
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: C.textMid,
      whiteSpace: "nowrap"
    }
  }, r.cost ? "NT$ ".concat(Number(r.cost).toLocaleString()) : "—"), hasExtra && /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setOpen(!open);
    },
    style: {
      background: open ? C.primaryLight : "#f5f0eb",
      border: "1px solid ".concat(C.border),
      cursor: "pointer",
      color: open ? C.primary : C.textLight,
      fontSize: 13,
      borderRadius: 7,
      padding: "2px 7px",
      lineHeight: 1.6
    }
  }, open ? "▲" : "📷"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return onDelete(r.id);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 17,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"))), r.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.textLight,
      marginTop: 4,
      lineHeight: 1.5
    }
  }, r.note), open && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, r.photo && /*#__PURE__*/React.createElement("img", {
    src: r.photo,
    alt: "\u7167\u7247",
    style: {
      width: "100%",
      maxHeight: 240,
      objectFit: "cover",
      borderRadius: 12,
      border: "1px solid ".concat(C.border2)
    }
  }), salon && /*#__PURE__*/React.createElement(Tag, {
    label: "\u2B50 ".concat(salon.name),
    color: "#fff3e0"
  })));
}
function DayGroup(_ref1) {
  var date = _ref1.date,
    records = _ref1.records,
    type = _ref1.type,
    salons = _ref1.salons,
    onDelete = _ref1.onDelete;
  var total = records.reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: "1.5px solid ".concat(C.border2),
      boxShadow: "0 2px 16px rgba(140,80,30,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.textLight,
      fontWeight: 600
    }
  }, fmtDate(date)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, records.map(function (r, i) {
    var isLast = i === records.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        paddingBottom: isLast ? 12 : 10,
        marginBottom: isLast ? 0 : 10,
        borderBottom: isLast ? "none" : "1px dashed ".concat(C.border2)
      }
    }, /*#__PURE__*/React.createElement(RecordRow, {
      r: r,
      type: type,
      salons: salons,
      onDelete: onDelete
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fdf6f0",
      borderTop: "1.5px solid ".concat(C.border2),
      padding: "10px 18px",
      display: "flex",
      justifyContent: records.length > 1 ? "space-between" : "flex-end",
      alignItems: "center"
    }
  }, records.length > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: C.textLight,
      fontWeight: 600
    }
  }, "\u7576\u65E5\u5408\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: C.primary
    }
  }, "NT$ ", total.toLocaleString())));
}

// ── Donut Chart (SVG) ─────────────────────────────────────────────────────────
var PALETTE = ["#c0845a", "#d4a0c0", "#7daa7d", "#a0b8d4", "#d4b87a", "#b07088", "#88a870", "#7898c0", "#c09858", "#a888b0"];
function DonutChart(_ref10) {
  var data = _ref10.data,
    total = _ref10.total;
  try {
    var size = 160,
      cx = 80,
      cy = 80,
      R = 62,
      r = 38;
    var angle = -Math.PI / 2;
    var safeTotal = total > 0 ? total : 1;
    var slices = data.map(function (d, i) {
      var pct = Math.max(0, Math.min(1, (d.value || 0) / safeTotal));
      var a1 = angle;
      var a2 = angle + pct * 2 * Math.PI;
      angle = a2;
      if (pct < 0.001) return _objectSpread(_objectSpread({}, d), {}, {
        path: "",
        color: PALETTE[i % PALETTE.length]
      });
      var large = pct > 0.5 ? 1 : 0;
      var fmt = function fmt(n) {
        return isFinite(n) ? n.toFixed(4) : "0";
      };
      var x1 = cx + R * Math.cos(a1),
        y1 = cy + R * Math.sin(a1);
      var x2 = cx + R * Math.cos(a2),
        y2 = cy + R * Math.sin(a2);
      var ix1 = cx + r * Math.cos(a1),
        iy1 = cy + r * Math.sin(a1);
      var ix2 = cx + r * Math.cos(a2),
        iy2 = cy + r * Math.sin(a2);
      var path = "M ".concat(fmt(x1), " ").concat(fmt(y1), " A ").concat(R, " ").concat(R, " 0 ").concat(large, " 1 ").concat(fmt(x2), " ").concat(fmt(y2), " L ").concat(fmt(ix2), " ").concat(fmt(iy2), " A ").concat(r, " ").concat(r, " 0 ").concat(large, " 0 ").concat(fmt(ix1), " ").concat(fmt(iy1), " Z");
      return _objectSpread(_objectSpread({}, d), {}, {
        path: path,
        color: PALETTE[i % PALETTE.length]
      });
    });
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 ".concat(size, " ").concat(size)
    }, slices.map(function (s, i) {
      return s.path ? /*#__PURE__*/React.createElement("path", {
        key: i,
        d: s.path,
        fill: s.color,
        stroke: "#fff",
        strokeWidth: 2
      }) : null;
    }), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 6,
      textAnchor: "middle",
      fontSize: 11,
      fill: C.textLight
    }, "\u7E3D\u82B1\u8CBB"), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy + 10,
      textAnchor: "middle",
      fontSize: 13,
      fontWeight: "800",
      fill: C.textMid
    }, "NT$", (total || 0).toLocaleString()));
  } catch (e) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 160,
        height: 160,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: C.textFaint,
        fontSize: 12
      }
    }, "\u7121\u8CC7\u6599");
  }
}

// ── Stats Tab ─────────────────────────────────────────────────────────────────
function StatsTab(_ref11) {
  var hairRecords = _ref11.hairRecords,
    lashRecords = _ref11.lashRecords;
  var _useState9 = useState("ratio"),
    _useState0 = _slicedToArray(_useState9, 2),
    costView = _useState0[0],
    setCostView = _useState0[1];
  var _useState1 = useState("monthly"),
    _useState10 = _slicedToArray(_useState1, 2),
    chartMode = _useState10[0],
    setChartMode = _useState10[1]; // "monthly" | "yearly"
  var _useState11 = useState(null),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedYear = _useState12[0],
    setSelectedYear = _useState12[1]; // null = current year

  var allRecords = useMemo(function () {
    return [].concat(_toConsumableArray(hairRecords), _toConsumableArray(lashRecords));
  }, [hairRecords, lashRecords]);

  // All years that have data
  var allYears = useMemo(function () {
    var ys = new Set(allRecords.map(function (r) {
      var _r$date;
      return (_r$date = r.date) === null || _r$date === void 0 ? void 0 : _r$date.slice(0, 4);
    }).filter(Boolean));
    return _toConsumableArray(ys).sort(function (a, b) {
      return b - a;
    }); // newest first
  }, [allRecords]);
  var currentYear = String(new Date().getFullYear());
  var activeYear = selectedYear || currentYear;

  // ── Yearly overview chart (one bar per year) ──────────────────────────────
  var yearlyData = useMemo(function () {
    return allYears.map(function (y) {
      return {
        year: y + "年",
        hair: hairRecords.filter(function (r) {
          var _r$date2;
          return (_r$date2 = r.date) === null || _r$date2 === void 0 ? void 0 : _r$date2.startsWith(y);
        }).reduce(function (s, r) {
          return s + (Number(r.cost) || 0);
        }, 0),
        lash: lashRecords.filter(function (r) {
          var _r$date3;
          return (_r$date3 = r.date) === null || _r$date3 === void 0 ? void 0 : _r$date3.startsWith(y);
        }).reduce(function (s, r) {
          return s + (Number(r.cost) || 0);
        }, 0)
      };
    }).reverse(); // chronological
  }, [allYears, hairRecords, lashRecords]);

  // ── Monthly chart for selected year ──────────────────────────────────────
  var monthlyData = useMemo(function () {
    return Array.from({
      length: 12
    }, function (_, i) {
      var m = "".concat(activeYear, "-").concat(String(i + 1).padStart(2, "0"));
      return {
        month: "".concat(i + 1, "\u6708"),
        hair: hairRecords.filter(function (r) {
          return monthKey(r.date) === m;
        }).reduce(function (s, r) {
          return s + (Number(r.cost) || 0);
        }, 0),
        lash: lashRecords.filter(function (r) {
          return monthKey(r.date) === m;
        }).reduce(function (s, r) {
          return s + (Number(r.cost) || 0);
        }, 0)
      };
    });
  }, [activeYear, hairRecords, lashRecords]);

  // Year-filtered totals
  var yearHair = hairRecords.filter(function (r) {
    var _r$date4;
    return (_r$date4 = r.date) === null || _r$date4 === void 0 ? void 0 : _r$date4.startsWith(activeYear);
  }).reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  var yearLash = lashRecords.filter(function (r) {
    var _r$date5;
    return (_r$date5 = r.date) === null || _r$date5 === void 0 ? void 0 : _r$date5.startsWith(activeYear);
  }).reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  var totalHair = hairRecords.reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  var totalLash = lashRecords.reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);

  // ── Per-item stats for selected year ──────────────────────────────────────
  var filteredHairForYear = hairRecords.filter(function (r) {
    var _r$date6;
    return (_r$date6 = r.date) === null || _r$date6 === void 0 ? void 0 : _r$date6.startsWith(activeYear);
  });
  var itemStats = useMemo(function () {
    var map = {};
    filteredHairForYear.forEach(function (r) {
      var items = [].concat(_toConsumableArray(r.selectedItems || []), _toConsumableArray(r.customItems || []));
      if (items.length === 0) return;
      var share = (Number(r.cost) || 0) / items.length;
      items.forEach(function (item) {
        if (!map[item]) map[item] = {
          count: 0,
          cost: 0
        };
        map[item].count += 1;
        map[item].cost += share;
      });
    });
    return Object.entries(map).map(function (_ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
        name = _ref13[0],
        _ref13$ = _ref13[1],
        count = _ref13$.count,
        cost = _ref13$.cost;
      return {
        name: name,
        count: count,
        value: Math.round(cost)
      };
    }).sort(function (a, b) {
      return b.value - a.value;
    });
  }, [filteredHairForYear]);
  var totalItemCost = itemStats.reduce(function (s, d) {
    return s + d.value;
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, itemStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 18,
      border: "1.5px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.textMid,
      fontSize: 14
    }
  }, "\u2702\uFE0F ", activeYear, "\u5E74 \u9805\u76EE\u82B1\u8CBB\u6BD4\u4F8B"), allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, allYears.map(function (y) {
    return /*#__PURE__*/React.createElement("button", {
      key: y,
      onClick: function onClick() {
        return setSelectedYear(y);
      },
      style: {
        padding: "3px 8px",
        borderRadius: 8,
        fontSize: 10,
        fontWeight: 700,
        cursor: "pointer",
        border: "none",
        background: activeYear === y ? C.primary : "#f0e4d8",
        color: activeYear === y ? "#fff" : C.textMid
      }
    }, y);
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    data: itemStats,
    total: totalItemCost
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 5
    }
  }, itemStats.slice(0, 6).map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 9,
        height: 9,
        borderRadius: 3,
        background: PALETTE[i % PALETTE.length],
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.text,
        flex: 1,
        lineHeight: 1.3
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: C.textMid,
        flexShrink: 0
      }
    }, totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0, "%"));
  }), itemStats.length > 6 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.textFaint
    }
  }, "\u2026\u7B49\u5171", itemStats.length, "\u9805"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(C.border2),
      paddingTop: 10
    }
  }, itemStats.map(function (d, i) {
    var pct = totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        padding: "7px 0",
        borderBottom: i < itemStats.length - 1 ? "1px solid ".concat(C.border2) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 7,
        height: 7,
        borderRadius: 2,
        background: PALETTE[i % PALETTE.length],
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.text
      }
    }, d.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.textLight
      }
    }, d.count, "\u6B21"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: C.textMid
      }
    }, "NT$", d.value.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 800,
        color: PALETTE[i % PALETTE.length],
        minWidth: 28,
        textAlign: "right"
      }
    }, pct, "%"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 5,
        background: "#f0e8e0",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(pct, "%"),
        background: PALETTE[i % PALETTE.length],
        borderRadius: 4,
        transition: "width 0.4s"
      }
    })));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 10,
      color: C.textFaint,
      margin: "8px 0 0"
    }
  }, "\uFF0A\u6BCF\u7B46\u82B1\u8CBB\u5E73\u5747\u5206\u914D\u7D66\u8A72\u6B21\u6240\u6709\u9805\u76EE")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 18,
      border: "1.5px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.textMid,
      fontSize: 14
    }
  }, "\uD83D\uDCCA \u82B1\u8CBB\u5716\u8868"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setChartMode("monthly");
    },
    style: {
      padding: "4px 10px",
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      border: "none",
      background: chartMode === "monthly" ? C.primary : "#f0e4d8",
      color: chartMode === "monthly" ? "#fff" : C.textMid
    }
  }, "\u6708\u4EFD"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setChartMode("yearly");
    },
    style: {
      padding: "4px 10px",
      borderRadius: 10,
      fontSize: 11,
      fontWeight: 700,
      cursor: "pointer",
      border: "none",
      background: chartMode === "yearly" ? C.primary : "#f0e4d8",
      color: chartMode === "yearly" ? "#fff" : C.textMid
    }
  }, "\u5E74\u4EFD"))), chartMode === "monthly" && allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, allYears.map(function (y) {
    return /*#__PURE__*/React.createElement("button", {
      key: y,
      onClick: function onClick() {
        return setSelectedYear(y);
      },
      style: {
        padding: "4px 12px",
        borderRadius: 10,
        fontSize: 12,
        fontWeight: 700,
        cursor: "pointer",
        border: "none",
        background: activeYear === y ? C.primary : "#f0e4d8",
        color: activeYear === y ? "#fff" : C.textMid
      }
    }, y, "\u5E74");
  })), chartMode === "monthly" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fdf6f0",
      borderRadius: 10,
      padding: "8px 12px",
      border: "1px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "\u5E74 \u526A\u9AEE"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: C.textMid
    }
  }, "NT$", yearHair.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fdf6f0",
      borderRadius: 10,
      padding: "8px 12px",
      border: "1px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "\u5E74 \u7F8E\u776B"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: "#d4a0c0"
    }
  }, "NT$", yearLash.toLocaleString())), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "#fdf6f0",
      borderRadius: 10,
      padding: "8px 12px",
      border: "1px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "\u5E74 \u5408\u8A08"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      color: C.text
    }
  }, "NT$", (yearHair + yearLash).toLocaleString()))), /*#__PURE__*/React.createElement(ResponsiveContainer, {
    width: "100%",
    height: 190
  }, chartMode === "monthly" ? /*#__PURE__*/React.createElement(BarChart, {
    data: monthlyData,
    margin: {
      top: 0,
      right: 0,
      left: -20,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#f0e0d0"
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "month",
    tick: {
      fontSize: 10,
      fill: C.textLight
    }
  }), /*#__PURE__*/React.createElement(YAxis, {
    tick: {
      fontSize: 10,
      fill: C.textLight
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    formatter: function formatter(v) {
      return "NT$".concat(v.toLocaleString());
    },
    contentStyle: {
      borderRadius: 10,
      border: "1px solid ".concat(C.border),
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "hair",
    name: "\u526A\u9AEE",
    fill: C.primary,
    radius: [4, 4, 0, 0]
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "lash",
    name: "\u7F8E\u776B",
    fill: "#d4a0c0",
    radius: [4, 4, 0, 0]
  })) : /*#__PURE__*/React.createElement(BarChart, {
    data: yearlyData,
    margin: {
      top: 0,
      right: 0,
      left: -20,
      bottom: 0
    }
  }, /*#__PURE__*/React.createElement(CartesianGrid, {
    strokeDasharray: "3 3",
    stroke: "#f0e0d0"
  }), /*#__PURE__*/React.createElement(XAxis, {
    dataKey: "year",
    tick: {
      fontSize: 11,
      fill: C.textLight
    }
  }), /*#__PURE__*/React.createElement(YAxis, {
    tick: {
      fontSize: 10,
      fill: C.textLight
    }
  }), /*#__PURE__*/React.createElement(Tooltip, {
    formatter: function formatter(v) {
      return "NT$".concat(v.toLocaleString());
    },
    contentStyle: {
      borderRadius: 10,
      border: "1px solid ".concat(C.border),
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "hair",
    name: "\u526A\u9AEE",
    fill: C.primary,
    radius: [4, 4, 0, 0]
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "lash",
    name: "\u7F8E\u776B",
    fill: "#d4a0c0",
    radius: [4, 4, 0, 0]
  })))), itemStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 18,
      border: "1.5px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.textMid,
      fontSize: 14
    }
  }, "\u2702\uFE0F \u526A\u9AEE\u9805\u76EE\u82B1\u8CBB\u6BD4\u4F8B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [["ratio", "比例"], ["count", "次數"]].map(function (_ref14) {
    var _ref15 = _slicedToArray(_ref14, 2),
      v = _ref15[0],
      l = _ref15[1];
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      onClick: function onClick() {
        return setCostView(v);
      },
      style: {
        padding: "4px 10px",
        borderRadius: 10,
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        border: "none",
        background: costView === v ? C.primary : "#f0e4d8",
        color: costView === v ? "#fff" : C.textMid
      }
    }, l);
  }))), allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.textLight,
      marginBottom: 10
    }
  }, "\u986F\u793A\uFF1A", activeYear, "\u5E74\u8CC7\u6599", chartMode === "monthly" && /*#__PURE__*/React.createElement("span", null, "\uFF08\u53EF\u5207\u63DB\u5E74\u4EFD\u67E5\u770B\uFF09")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(DonutChart, {
    data: itemStats,
    total: totalItemCost
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, itemStats.slice(0, 6).map(function (d, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 10,
        height: 10,
        borderRadius: 3,
        background: PALETTE[i % PALETTE.length],
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: C.text,
        flex: 1,
        lineHeight: 1.3
      }
    }, d.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        color: C.textMid,
        flexShrink: 0
      }
    }, totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0, "%"));
  }), itemStats.length > 6 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.textFaint
    }
  }, "\u2026\u7B49\u5171 ", itemStats.length, " \u9805"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid ".concat(C.border2),
      paddingTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, itemStats.map(function (d, i) {
    var pct = totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0;
    var barW = costView === "ratio" ? pct : Math.round(d.count / Math.max.apply(Math, _toConsumableArray(itemStats.map(function (x) {
      return x.count;
    }))) * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        padding: "9px 0",
        borderBottom: i < itemStats.length - 1 ? "1px solid ".concat(C.border2) : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 2,
        background: PALETTE[i % PALETTE.length],
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: C.text
      }
    }, d.name)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: C.textLight
      }
    }, d.count, "\u6B21"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: C.textMid
      }
    }, "NT$", d.value.toLocaleString()), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        color: PALETTE[i % PALETTE.length],
        minWidth: 32,
        textAlign: "right"
      }
    }, pct, "%"))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#f0e8e0",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(barW, "%"),
        background: PALETTE[i % PALETTE.length],
        borderRadius: 4,
        transition: "width 0.4s ease"
      }
    })));
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: C.textFaint,
      margin: "10px 0 0",
      lineHeight: 1.5
    }
  }, "\uFF0A\u6BCF\u7B46\u7D00\u9304\u82B1\u8CBB\u5E73\u5747\u5206\u914D\u7D66\u8A72\u6B21\u6240\u6709\u9805\u76EE\u8A08\u7B97")));
}

// ── Cycle rules ───────────────────────────────────────────────────────────────
var CYCLE_RULES = [{
  key: "bang_trim",
  icon: "✂️",
  label: "修瀏海",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("修瀏海");
    });
  },
  minDays: 21,
  maxDays: 28,
  hint: "建議每 3–4 週"
}, {
  key: "bang_perm",
  icon: "🌀",
  label: "燙劉海",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("燙劉海");
    });
  },
  minDays: 84,
  maxDays: 98,
  hint: "建議每 3 個月"
}, {
  key: "color_touch",
  icon: "🎨",
  label: "補染",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("補染");
    });
  },
  minDays: 84,
  maxDays: 98,
  hint: "建議每 3 個月"
}, {
  key: "color_full",
  icon: "🌈",
  label: "整頭染",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("整頭染");
    });
  },
  minDays: 168,
  maxDays: 196,
  hint: "建議每 6 個月"
}, {
  key: "curl_end",
  icon: "🌊",
  label: "髮尾C彎",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("髮尾C彎");
    });
  },
  minDays: 168,
  maxDays: 196,
  hint: "建議每 6 個月"
}, {
  key: "haircut",
  icon: "💇",
  label: "剪髮",
  match: function match(items) {
    return items.some(function (i) {
      return i.includes("剪髮");
    }) && !items.some(function (i) {
      return i.includes("修瀏海") || i.includes("燙劉海") || i.includes("補染") || i.includes("整頭染");
    });
  },
  minDays: 120,
  maxDays: 180,
  hint: "建議每 4–6 個月"
}];
var LASH_CYCLE = {
  minDays: 45,
  maxDays: 60,
  hint: "建議每 1.5–2 個月"
};

// Find last record date for each cycle key
function buildSuggestions(hairRecords, lashRecords) {
  var suggestions = [];

  // Hair: find the most recent record that matches each rule
  CYCLE_RULES.forEach(function (rule) {
    var matched = _toConsumableArray(hairRecords).filter(function (r) {
      return rule.match([].concat(_toConsumableArray(r.selectedItems || []), _toConsumableArray(r.customItems || [])));
    }).sort(function (a, b) {
      return b.date.localeCompare(a.date);
    });
    if (matched.length === 0) return;
    var last = matched[0];
    var nextMin = addDays(last.date, rule.minDays);
    var nextMax = addDays(last.date, rule.maxDays);
    var daysMin = daysFrom(nextMin);
    var daysMax = daysFrom(nextMax);
    suggestions.push(_objectSpread(_objectSpread({}, rule), {}, {
      lastDate: last.date,
      nextMin: nextMin,
      nextMax: nextMax,
      daysMin: daysMin,
      daysMax: daysMax
    }));
  });

  // Lash
  var lastLash = _toConsumableArray(lashRecords).sort(function (a, b) {
    return b.date.localeCompare(a.date);
  })[0];
  if (lastLash) {
    var nextMin = addDays(lastLash.date, LASH_CYCLE.minDays);
    var nextMax = addDays(lastLash.date, LASH_CYCLE.maxDays);
    suggestions.push({
      key: "lash",
      icon: "💫",
      label: "美睫",
      lastDate: lastLash.date,
      nextMin: nextMin,
      nextMax: nextMax,
      daysMin: daysFrom(nextMin),
      daysMax: daysFrom(nextMax),
      hint: LASH_CYCLE.hint
    });
  }
  return suggestions;
}
function urgencyColor(dMin, dMax) {
  if (dMax < 0) return C.red; // past max → overdue
  if (dMin <= 0) return "#e8a030"; // past min window → time to go
  if (dMin <= 7) return "#e8a030"; // within a week
  return C.green;
}
// Format days into "X個月又Y天" style
function fmtDays(d) {
  if (d <= 0) return "0 天";
  if (d < 30) return "".concat(d, " \u5929");
  var months = Math.floor(d / 30);
  var rem = d % 30;
  if (rem === 0) return "".concat(months, " \u500B\u6708");
  return "".concat(months, " \u500B\u6708\u53C8 ").concat(rem, " \u5929");
}
function urgencyLabel(dMin, dMax) {
  if (dMax < 0) return "\u903E\u671F ".concat(fmtDays(-dMax));
  if (dMin <= 0) return "可以去囉！";
  return "\u9084\u6709 ".concat(fmtDays(dMin), "\u2013").concat(fmtDays(dMax));
}

// ── Reminders Tab ─────────────────────────────────────────────────────────────
function RemindersTab(_ref16) {
  var reminders = _ref16.reminders,
    setReminders = _ref16.setReminders,
    hairRecords = _ref16.hairRecords,
    lashRecords = _ref16.lashRecords;
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showModal = _useState14[0],
    setShowModal = _useState14[1];
  var _useState15 = useState(emptyReminder()),
    _useState16 = _slicedToArray(_useState15, 2),
    draft = _useState16[0],
    setDraft = _useState16[1];
  var suggestions = useMemo(function () {
    return buildSuggestions(hairRecords, lashRecords);
  }, [hairRecords, lashRecords]);
  var saveReminder = function saveReminder() {
    setReminders([].concat(_toConsumableArray(reminders), [_objectSpread(_objectSpread({}, draft), {}, {
      id: Date.now()
    })]));
    setShowModal(false);
    setDraft(emptyReminder());
  };
  var manualUrgencyColor = function manualUrgencyColor(days) {
    return days < 0 ? C.red : days <= 3 ? "#e8a030" : C.green;
  };
  var manualUrgencyLabel = function manualUrgencyLabel(days) {
    return days < 0 ? "\u5DF2\u904E\u671F ".concat(fmtDays(-days)) : days === 0 ? "今天！" : "\u9084\u6709 ".concat(fmtDays(days));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, suggestions.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 16,
      border: "1.5px solid ".concat(C.border2)
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.textMid,
      fontSize: 13,
      display: "block",
      marginBottom: 10
    }
  }, "\uD83D\uDCA1 \u667A\u6167\u5EFA\u8B70"), suggestions.map(function (s, i) {
    var uc = urgencyColor(s.daysMin, s.daysMax);
    var ul = urgencyLabel(s.daysMin, s.daysMax);
    var isLast = i === suggestions.length - 1;
    // progress bar: 0% = just done, 100% = max window reached/passed
    // daysMax > 0 means still waiting; daysMax <= 0 means overdue
    // pct = how far along the full cycle we are (elapsed / total cycle)
    var totalWindow = s.maxDays;
    var elapsed = totalWindow - Math.max(s.daysMax, 0);
    var pct = Math.min(100, Math.max(0, Math.round(elapsed / totalWindow * 100)));
    // bar color: green (early) → orange (approaching) → red (overdue)
    // Use daysMin to determine urgency, not pct
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        padding: "10px 0",
        borderBottom: isLast ? "none" : "1px solid ".concat(C.border2)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: C.text
      }
    }, s.icon, " ", s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.textLight,
        marginTop: 2
      }
    }, "\u4E0A\u6B21\uFF1A", fmtDate(s.lastDate), "\u3000", s.hint), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.textLight
      }
    }, "\u5EFA\u8B70\u5340\u9593\uFF1A", fmtDate(s.nextMin), " \u2013 ", fmtDate(s.nextMax))), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 800,
        color: uc,
        textAlign: "right",
        flexShrink: 0,
        marginLeft: 8,
        paddingTop: 2
      }
    }, ul)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: "#f0e8e0",
        borderRadius: 4,
        overflow: "hidden"
      }
    }, pct > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        width: "".concat(pct, "%"),
        background: s.daysMax < 0 ? C.red : s.daysMin <= 0 ? "#e8a030" : s.daysMin <= 14 ? "#e8a030" : C.green,
        borderRadius: 4,
        transition: "width 0.4s"
      }
    })));
  })), suggestions.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 16,
      border: "1.5px solid ".concat(C.border2),
      textAlign: "center",
      color: C.textFaint,
      fontSize: 13
    }
  }, "\u65B0\u589E\u5E7E\u7B46\u526A\u9AEE\u6216\u7F8E\u776B\u7D00\u9304\u5F8C\uFF0C\u7CFB\u7D71\u6703\u81EA\u52D5\u986F\u793A\u5EFA\u8B70\u6642\u9593 \uD83E\uDE84"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      setDraft(emptyReminder());
      setShowModal(true);
    }
  }, "\uFF0B \u81EA\u8A02\u63D0\u9192")), reminders.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: C.textMid,
      marginBottom: -6
    }
  }, "\uD83D\uDCCC \u81EA\u8A02\u63D0\u9192"), reminders.map(function (r) {
    var days = daysFrom(r.date);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        background: C.card,
        borderRadius: 16,
        padding: "14px 18px",
        border: "1.5px solid ".concat(C.border2),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: C.text
      }
    }, r.label || "提醒"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.textLight,
        marginTop: 3
      }
    }, r.type === "hair" ? "✂️ 剪髮" : "💫 美睫", " \xB7 ", fmtDate(r.date))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 700,
        color: manualUrgencyColor(days)
      }
    }, manualUrgencyLabel(days)), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return setReminders(reminders.filter(function (x) {
          return x.id !== r.id;
        }));
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: C.textFaint,
        fontSize: 18,
        lineHeight: 1
      }
    }, "\xD7")));
  })), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onClose: function onClose() {
      return setShowModal(false);
    },
    title: "\u23F0 \u81EA\u8A02\u63D0\u9192"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u63D0\u9192\u540D\u7A31"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "\u4F8B\uFF1A\u9810\u7D04\u8B77\u9AEE",
    value: draft.label,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        label: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u985E\u578B"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, ["hair", "lash"].map(function (t) {
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: function onClick() {
        return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
          type: t
        }));
      },
      style: {
        flex: 1,
        padding: "8px 0",
        borderRadius: 12,
        fontSize: 13,
        cursor: "pointer",
        border: draft.type === t ? "2px solid ".concat(C.primary) : "2px solid ".concat(C.border),
        background: draft.type === t ? C.primaryLight : "#fff",
        color: draft.type === t ? C.textMid : "#9a7560",
        fontWeight: draft.type === t ? 700 : 400
      }
    }, t === "hair" ? "✂️ 剪髮" : "💫 美睫");
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u63D0\u9192\u65E5\u671F"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: draft.date,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        date: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveReminder,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 6
    }
  }, "\u5132\u5B58\u63D0\u9192"))));
}

// ── Salons Tab ────────────────────────────────────────────────────────────────
function SalonCard(_ref17) {
  var s = _ref17.s,
    onDelete = _ref17.onDelete;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: "14px 16px",
      border: "1.5px solid ".concat(C.border2),
      boxShadow: "0 2px 10px rgba(140,80,30,0.06)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: C.text
    }
  }, s.name), /*#__PURE__*/React.createElement(Stars, {
    value: s.rating
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onDelete,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 18,
      marginLeft: 8
    }
  }, "\xD7")), s.phone && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.textMid,
      marginTop: 7
    }
  }, "\uD83D\uDCDE ", s.phone), s.address && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.textMid,
      marginTop: 4
    }
  }, "\uD83D\uDCCD ", s.address), s.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.textLight,
      marginTop: 5,
      lineHeight: 1.5
    }
  }, s.note));
}
function SalonsTab(_ref18) {
  var salons = _ref18.salons,
    setSalons = _ref18.setSalons;
  var _useState17 = useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showModal = _useState18[0],
    setShowModal = _useState18[1];
  var _useState19 = useState(emptySalon("hair")),
    _useState20 = _slicedToArray(_useState19, 2),
    draft = _useState20[0],
    setDraft = _useState20[1];
  var _useState21 = useState("hair"),
    _useState22 = _slicedToArray(_useState21, 2),
    salonTab = _useState22[0],
    setSalonTab = _useState22[1]; // "hair" | "lash"

  var saveSalon = function saveSalon() {
    if (!draft.name.trim()) return;
    setSalons([].concat(_toConsumableArray(salons), [_objectSpread(_objectSpread({}, draft), {}, {
      id: Date.now()
    })]));
    setShowModal(false);
    setDraft(emptySalon(salonTab));
  };
  var hairSalons = salons.filter(function (s) {
    return s.type === "hair" || !s.type;
  });
  var lashSalons = salons.filter(function (s) {
    return s.type === "lash";
  });
  var EmptyState = function EmptyState(_ref19) {
    var icon = _ref19.icon,
      text = _ref19.text;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: "center",
        color: C.textFaint,
        padding: "36px 0",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 32,
        marginBottom: 8
      }
    }, icon), text);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "#fff",
      borderRadius: 14,
      overflow: "hidden",
      border: "1.5px solid ".concat(C.border2)
    }
  }, [["hair", "💇🏻‍♀️ 剪髮沙龍"], ["lash", "💫 美睫沙龍"]].map(function (_ref20) {
    var _ref21 = _slicedToArray(_ref20, 2),
      t = _ref21[0],
      l = _ref21[1];
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: function onClick() {
        return setSalonTab(t);
      },
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        padding: "11px 8px",
        borderBottom: salonTab === t ? "3px solid ".concat(C.primary) : "3px solid transparent",
        fontWeight: salonTab === t ? 800 : 500,
        color: salonTab === t ? C.textMid : C.textLight,
        fontSize: 13,
        transition: "all 0.15s"
      }
    }, l);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      setDraft(emptySalon(salonTab));
      setShowModal(true);
    }
  }, "\uFF0B \u65B0\u589E", salonTab === "hair" ? "剪髮" : "美睫", "\u6C99\u9F8D")), salonTab === "hair" && (hairSalons.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F",
    text: "\u9084\u6C92\u6709\u526A\u9AEE\u6C99\u9F8D\uFF0C\u9EDE\u64CA\u65B0\u589E\uFF01"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, hairSalons.map(function (s) {
    return /*#__PURE__*/React.createElement(SalonCard, {
      key: s.id,
      s: s,
      onDelete: function onDelete() {
        return setSalons(salons.filter(function (x) {
          return x.id !== s.id;
        }));
      }
    });
  }))), salonTab === "lash" && (lashSalons.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "\uD83D\uDCAB",
    text: "\u9084\u6C92\u6709\u7F8E\u776B\u6C99\u9F8D\uFF0C\u9EDE\u64CA\u65B0\u589E\uFF01"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, lashSalons.map(function (s) {
    return /*#__PURE__*/React.createElement(SalonCard, {
      key: s.id,
      s: s,
      onDelete: function onDelete() {
        return setSalons(salons.filter(function (x) {
          return x.id !== s.id;
        }));
      }
    });
  }))), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onClose: function onClose() {
      return setShowModal(false);
    },
    title: salonTab === "hair" ? "💇🏻‍♀️ 新增剪髮沙龍" : "💫 新增美睫沙龍"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, salonTab === "hair" ? "沙龍／設計師名稱" : "沙龍／接睫師名稱", " *"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: salonTab === "hair" ? "例：Hair Lab 美髮" : "例：Lash Studio",
    value: draft.name,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        name: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u8A55\u5206"), /*#__PURE__*/React.createElement(Stars, {
    value: draft.rating,
    onChange: function onChange(r) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        rating: r
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u96FB\u8A71"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "02-xxxx-xxxx",
    value: draft.phone,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        phone: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u5730\u5740"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "\u53F0\u5317\u5E02\u2026",
    value: draft.address,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        address: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "\u5099\u8A3B"), /*#__PURE__*/React.createElement("textarea", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      minHeight: 56,
      resize: "vertical"
    }),
    placeholder: salonTab === "hair" ? "設計師名字、喜好…" : "接睫師名字、款式偏好…",
    value: draft.note,
    onChange: function onChange(e) {
      return setDraft(_objectSpread(_objectSpread({}, draft), {}, {
        note: e.target.value
      }));
    }
  })), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveSalon,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 6
    }
  }, "\u5132\u5B58"))));
}

// ── Export ────────────────────────────────────────────────────────────────────
function exportCSV(hairRecords, lashRecords) {
  var hairRows = hairRecords.map(function (r) {
    return ["\u526A\u9AEE", "\"".concat([].concat(_toConsumableArray(r.selectedItems || []), _toConsumableArray(r.customItems || [])).join("、"), "\""), r.date, r.cost || 0, "\"".concat(r.note || "", "\"")].join(",");
  });
  var lashRows = lashRecords.map(function (r) {
    return ["\u7F8E\u776B", "\"".concat(r.item, "\""), r.date, r.cost || 0, "\"".concat(r.note || "", "\"")].join(",");
  });
  var csv = ["類型,項目,日期,費用,備註"].concat(_toConsumableArray(hairRows), _toConsumableArray(lashRows)).join("\n");
  var blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url;
  a.download = "Hair & Lash Story.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// ── Filter Bar ────────────────────────────────────────────────────────────────
function FilterBar(_ref22) {
  var filter = _ref22.filter,
    setFilter = _ref22.setFilter,
    type = _ref22.type;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      flex: 1,
      minWidth: 120,
      padding: "7px 12px",
      fontSize: 13
    }),
    placeholder: "\uD83D\uDD0D \u641C\u5C0B\u5099\u8A3B\u3001\u9805\u76EE\u2026",
    value: filter.search,
    onChange: function onChange(e) {
      return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
        search: e.target.value
      }));
    }
  }), /*#__PURE__*/React.createElement("select", {
    style: _objectSpread(_objectSpread({}, inputStyle), {}, {
      width: "auto",
      padding: "7px 10px",
      fontSize: 12
    }),
    value: filter.sort,
    onChange: function onChange(e) {
      return setFilter(_objectSpread(_objectSpread({}, filter), {}, {
        sort: e.target.value
      }));
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "date_desc"
  }, "\u6700\u65B0\u512A\u5148"), /*#__PURE__*/React.createElement("option", {
    value: "date_asc"
  }, "\u6700\u820A\u512A\u5148"), /*#__PURE__*/React.createElement("option", {
    value: "cost_desc"
  }, "\u8CBB\u7528\u9AD8\u2192\u4F4E"), /*#__PURE__*/React.createElement("option", {
    value: "cost_asc"
  }, "\u8CBB\u7528\u4F4E\u2192\u9AD8")));
}
var applyFilter = function applyFilter(records, filter, type) {
  var r = _toConsumableArray(records);
  if (filter.search) {
    var q = filter.search.toLowerCase();
    r = r.filter(function (rec) {
      var items = type === "hair" ? [].concat(_toConsumableArray(rec.selectedItems || []), _toConsumableArray(rec.customItems || [])) : [rec.item];
      return items.some(function (i) {
        return i.includes(q);
      }) || (rec.note || "").toLowerCase().includes(q);
    });
  }
  if (filter.sort === "date_desc") r.sort(function (a, b) {
    return b.date.localeCompare(a.date);
  });
  if (filter.sort === "date_asc") r.sort(function (a, b) {
    return a.date.localeCompare(b.date);
  });
  if (filter.sort === "cost_desc") r.sort(function (a, b) {
    return (Number(b.cost) || 0) - (Number(a.cost) || 0);
  });
  if (filter.sort === "cost_asc") r.sort(function (a, b) {
    return (Number(a.cost) || 0) - (Number(b.cost) || 0);
  });
  return r;
};

// ══════════════════════════════════════════════════════
// 📅 CALENDAR VERSION — Main view replacement
// ══════════════════════════════════════════════════════
var WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
function CalendarView(_ref23) {
  var hairRecords = _ref23.hairRecords,
    lashRecords = _ref23.lashRecords,
    salons = _ref23.salons,
    onAddHair = _ref23.onAddHair,
    onAddLash = _ref23.onAddLash,
    onDeleteHair = _ref23.onDeleteHair,
    onDeleteLash = _ref23.onDeleteLash;
  var today = new Date();
  var _useState23 = useState(today.getFullYear()),
    _useState24 = _slicedToArray(_useState23, 2),
    viewYear = _useState24[0],
    setViewYear = _useState24[1];
  var _useState25 = useState(today.getMonth()),
    _useState26 = _slicedToArray(_useState25, 2),
    viewMonth = _useState26[0],
    setViewMonth = _useState26[1];
  var _useState27 = useState(null),
    _useState28 = _slicedToArray(_useState27, 2),
    selectedDate = _useState28[0],
    setSelectedDate = _useState28[1];
  var _useState29 = useState(false),
    _useState30 = _slicedToArray(_useState29, 2),
    showAddModal = _useState30[0],
    setShowAddModal = _useState30[1];
  var _useState31 = useState("hair"),
    _useState32 = _slicedToArray(_useState31, 2),
    addType = _useState32[0],
    setAddType = _useState32[1];
  var todayKey = today.toISOString().split("T")[0];
  var dateMap = useMemo(function () {
    var map = {};
    hairRecords.forEach(function (r) {
      if (!map[r.date]) map[r.date] = {
        hair: [],
        lash: []
      };
      map[r.date].hair.push(r);
    });
    lashRecords.forEach(function (r) {
      if (!map[r.date]) map[r.date] = {
        hair: [],
        lash: []
      };
      map[r.date].lash.push(r);
    });
    return map;
  }, [hairRecords, lashRecords]);
  var calDays = useMemo(function () {
    var first = new Date(viewYear, viewMonth, 1);
    var last = new Date(viewYear, viewMonth + 1, 0);
    var days = [];
    for (var i = 0; i < first.getDay(); i++) days.push(null);
    for (var d = 1; d <= last.getDate(); d++) days.push(d);
    return days;
  }, [viewYear, viewMonth]);
  var prevMonth = function prevMonth() {
    if (viewMonth === 0) {
      setViewYear(function (y) {
        return y - 1;
      });
      setViewMonth(11);
    } else setViewMonth(function (m) {
      return m - 1;
    });
    setSelectedDate(null);
  };
  var nextMonth = function nextMonth() {
    if (viewMonth === 11) {
      setViewYear(function (y) {
        return y + 1;
      });
      setViewMonth(0);
    } else setViewMonth(function (m) {
      return m + 1;
    });
    setSelectedDate(null);
  };
  var monthPrefix = "".concat(viewYear, "-").concat(String(viewMonth + 1).padStart(2, "0"));
  var monthTotal = [].concat(_toConsumableArray(hairRecords), _toConsumableArray(lashRecords)).filter(function (r) {
    var _r$date7;
    return (_r$date7 = r.date) === null || _r$date7 === void 0 ? void 0 : _r$date7.startsWith(monthPrefix);
  }).reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  var selKey = selectedDate ? "".concat(viewYear, "-").concat(String(viewMonth + 1).padStart(2, "0"), "-").concat(String(selectedDate).padStart(2, "0")) : null;
  var selRecs = selKey ? dateMap[selKey] || {
    hair: [],
    lash: []
  } : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 20,
      padding: "18px 16px",
      border: "1.5px solid ".concat(C.border2),
      boxShadow: "0 2px 20px rgba(140,80,30,0.08)",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prevMonth,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 22,
      color: C.textMid,
      padding: "2px 8px"
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 900,
      color: C.text
    }
  }, viewYear, "\u5E74 ", viewMonth + 1, "\u6708"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.textLight,
      marginTop: 1
    }
  }, "\u672C\u6708 NT$", monthTotal.toLocaleString())), /*#__PURE__*/React.createElement("button", {
    onClick: nextMonth,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 22,
      color: C.textMid,
      padding: "2px 8px"
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      marginBottom: 4
    }
  }, WEEKDAYS.map(function (w, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: 700,
        padding: "3px 0",
        color: i === 0 ? C.red : i === 6 ? "#7898c0" : C.textLight
      }
    }, w);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: "3px 2px"
    }
  }, calDays.map(function (d, i) {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: "e".concat(i)
    });
    var key = "".concat(viewYear, "-").concat(String(viewMonth + 1).padStart(2, "0"), "-").concat(String(d).padStart(2, "0"));
    var rec = dateMap[key];
    var hasHair = (rec === null || rec === void 0 ? void 0 : rec.hair.length) > 0;
    var hasLash = (rec === null || rec === void 0 ? void 0 : rec.lash.length) > 0;
    var isToday = key === todayKey;
    var isSel = d === selectedDate;
    var dow = new Date(key).getDay();
    var hasReminder = false;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: function onClick() {
        return setSelectedDate(isSel ? null : d);
      },
      style: {
        border: "none",
        borderRadius: 12,
        cursor: "pointer",
        padding: "7px 2px 6px",
        background: isSel ? C.primary : isToday ? C.primaryLight : "transparent",
        transition: "all 0.15s"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: hasHair || hasLash || isToday ? 700 : 400,
        textAlign: "center",
        color: isSel ? "#fff" : isToday ? C.primary : dow === 0 ? C.red : dow === 6 ? "#7898c0" : C.text
      }
    }, d), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        gap: 2,
        marginTop: 3,
        height: 7
      }
    }, hasHair && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: isSel ? "#fff" : C.primary
      }
    }), hasLash && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: isSel ? "rgba(255,255,255,0.8)" : "#d4a0c0"
      }
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 10,
      paddingTop: 10,
      borderTop: "1px solid ".concat(C.border2)
    }
  }, [["💇🏻‍♀️ 剪髮", C.primary], ["💫 美睫", "#d4a0c0"]].map(function (_ref24) {
    var _ref25 = _slicedToArray(_ref24, 2),
      l = _ref25[0],
      c = _ref25[1];
    return /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        fontSize: 11,
        color: C.textLight
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: c
      }
    }), l);
  }))), selKey && selRecs && (selRecs.hair.length > 0 || selRecs.lash.length > 0) ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: "1.5px solid ".concat(C.border2),
      boxShadow: "0 2px 16px rgba(140,80,30,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: "1px solid ".concat(C.border2),
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: C.textMid
    }
  }, fmtDate(selKey)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 900,
      color: C.primary
    }
  }, "NT$ ", [].concat(_toConsumableArray(selRecs.hair), _toConsumableArray(selRecs.lash)).reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0).toLocaleString()), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAddType("hair");
      setShowAddModal(true);
    },
    style: {
      background: C.primary,
      border: "none",
      color: "#fff",
      borderRadius: 8,
      padding: "4px 10px",
      fontSize: 12,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uFF0B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, selRecs.hair.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        flex: 1
      }
    }, [].concat(_toConsumableArray(r.selectedItems || []), _toConsumableArray(r.customItems || [])).map(function (it, i) {
      return /*#__PURE__*/React.createElement(Tag, {
        key: i,
        label: it
      });
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        marginLeft: 8,
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: C.textMid
      }
    }, "NT$", Number(r.cost).toLocaleString()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDeleteHair(r.id);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: C.textFaint,
        fontSize: 16
      }
    }, "\xD7")));
  }), selRecs.lash.map(function (r) {
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      label: "\uD83D\uDCAB ".concat(r.item),
      color: "#fce8f5"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        alignItems: "center",
        marginLeft: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: 700,
        color: C.textMid
      }
    }, "NT$", Number(r.cost).toLocaleString()), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDeleteLash(r.id);
      },
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: C.textFaint,
        fontSize: 16
      }
    }, "\xD7")));
  }))) : selKey ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: "1.5px solid ".concat(C.border2),
      padding: "24px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.textFaint,
      fontSize: 13,
      marginBottom: 12
    }
  }, fmtDate(selKey), " \u9084\u6C92\u6709\u7D00\u9304"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAddType("hair");
      setShowAddModal(true);
    },
    style: {
      background: C.primaryLight,
      border: "1px solid ".concat(C.border),
      color: C.textMid,
      borderRadius: 12,
      padding: "8px 16px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uFF0B \u65B0\u589E\u526A\u9AEE"), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setAddType("lash");
      setShowAddModal(true);
    },
    style: {
      background: "#fce8f5",
      border: "1px solid #e8d0e0",
      color: "#a06080",
      borderRadius: 12,
      padding: "8px 16px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "\uFF0B \u65B0\u589E\u7F8E\u776B"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: C.textFaint,
      padding: "24px 0",
      fontSize: 13
    }
  }, "\uD83D\uDC46 \u9EDE\u9078\u65E5\u671F\u67E5\u770B\u6216\u65B0\u589E\u7D00\u9304"));
}

// ── App Root ──────────────────────────────────────────────────────────────────
function App() {
  var _useState33 = useState("calendar"),
    _useState34 = _slicedToArray(_useState33, 2),
    tab = _useState34[0],
    setTab = _useState34[1];
  var _useState35 = useState(function () {
      return load("hair", []);
    }),
    _useState36 = _slicedToArray(_useState35, 2),
    hairRecords = _useState36[0],
    setHairRecords = _useState36[1];
  var _useState37 = useState(function () {
      return load("lash", []);
    }),
    _useState38 = _slicedToArray(_useState37, 2),
    lashRecords = _useState38[0],
    setLashRecords = _useState38[1];
  var _useState39 = useState(function () {
      return load("reminders", []);
    }),
    _useState40 = _slicedToArray(_useState39, 2),
    reminders = _useState40[0],
    setReminders = _useState40[1];
  var _useState41 = useState(function () {
      return load("salons", []);
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    salons = _useState42[0],
    setSalons = _useState42[1];
  var _useState43 = useState(false),
    _useState44 = _slicedToArray(_useState43, 2),
    showHairModal = _useState44[0],
    setShowHairModal = _useState44[1];
  var _useState45 = useState(false),
    _useState46 = _slicedToArray(_useState45, 2),
    showLashModal = _useState46[0],
    setShowLashModal = _useState46[1];
  var _useState47 = useState(emptyHair()),
    _useState48 = _slicedToArray(_useState47, 2),
    hairDraft = _useState48[0],
    setHairDraft = _useState48[1];
  var _useState49 = useState(emptyLash()),
    _useState50 = _slicedToArray(_useState49, 2),
    lashDraft = _useState50[0],
    setLashDraft = _useState50[1];
  var _useState51 = useState({
      search: "",
      sort: "date_desc"
    }),
    _useState52 = _slicedToArray(_useState51, 2),
    hairFilter = _useState52[0],
    setHairFilter = _useState52[1];
  var _useState53 = useState({
      search: "",
      sort: "date_desc"
    }),
    _useState54 = _slicedToArray(_useState53, 2),
    lashFilter = _useState54[0],
    setLashFilter = _useState54[1];
  var _useState55 = useState("idle"),
    _useState56 = _slicedToArray(_useState55, 2),
    syncStatus = _useState56[0],
    setSyncStatus = _useState56[1]; // idle | syncing | ok | error
  var _useState57 = useState(CLOUD_OK),
    _useState58 = _slicedToArray(_useState57, 1),
    cloudAvail = _useState58[0];

  // On mount: pull from cloud and merge (cloud wins for text, local wins for photos until cloud loaded)
  useEffect(function () {
    if (!cloudAvail) return;
    setSyncStatus("syncing");
    _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var _yield$Promise$all, _yield$Promise$all2, ch, cl, cr, cs, withPhotos, _withPhotos, _t7;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            _context6.n = 1;
            return Promise.all([cloudLoad("hair"), cloudLoad("lash"), cloudLoad("reminders"), cloudLoad("salons")]);
          case 1:
            _yield$Promise$all = _context6.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 4);
            ch = _yield$Promise$all2[0];
            cl = _yield$Promise$all2[1];
            cr = _yield$Promise$all2[2];
            cs = _yield$Promise$all2[3];
            if (!ch) {
              _context6.n = 3;
              break;
            }
            _context6.n = 2;
            return cloudLoadPhotos(ch);
          case 2:
            withPhotos = _context6.v;
            setHairRecords(withPhotos);
            save("hair", withPhotos);
          case 3:
            if (!cl) {
              _context6.n = 5;
              break;
            }
            _context6.n = 4;
            return cloudLoadPhotos(cl);
          case 4:
            _withPhotos = _context6.v;
            setLashRecords(_withPhotos);
            save("lash", _withPhotos);
          case 5:
            if (cr) {
              setReminders(cr);
              save("reminders", cr);
            }
            if (cs) {
              setSalons(cs);
              save("salons", cs);
            }
            setSyncStatus("ok");
            _context6.n = 7;
            break;
          case 6:
            _context6.p = 6;
            _t7 = _context6.v;
            setSyncStatus("error");
          case 7:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 6]]);
    }))();
  }, []);

  // Save to local + cloud on every change
  useEffect(function () {
    save("hair", hairRecords);
    cloudSave("hair", hairRecords);
  }, [hairRecords]);
  useEffect(function () {
    save("lash", lashRecords);
    cloudSave("lash", lashRecords);
  }, [lashRecords]);
  useEffect(function () {
    save("reminders", reminders);
    cloudSave("reminders", reminders);
  }, [reminders]);
  useEffect(function () {
    save("salons", salons);
    cloudSave("salons", salons);
  }, [salons]);
  var saveHair = function saveHair() {
    setHairRecords([hairDraft].concat(_toConsumableArray(hairRecords)));
    setHairDraft(emptyHair());
    setShowHairModal(false);
  };
  var saveLash = function saveLash() {
    setLashRecords([lashDraft].concat(_toConsumableArray(lashRecords)));
    setLashDraft(emptyLash());
    setShowLashModal(false);
  };

  // Upcoming reminders badge
  // Upcoming reminders badge
  var urgentCount = reminders.filter(function (r) {
    return daysFrom(r.date) <= 3 && daysFrom(r.date) >= 0;
  }).length;
  // Smart suggestions urgent count (daysMin <= 7)
  var smartUrgent = buildSuggestions(hairRecords, lashRecords).filter(function (s) {
    return s.daysMin <= 7;
  }).length;
  var totalUrgent = urgentCount + smartUrgent;
  var filteredHair = applyFilter(hairRecords, hairFilter, "hair");
  var filteredLash = applyFilter(lashRecords, lashFilter, "lash");
  var totalHair = hairRecords.reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  var totalLash = lashRecords.reduce(function (s, r) {
    return s + (Number(r.cost) || 0);
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: "linear-gradient(150deg,".concat(C.bg, " 0%,").concat(C.bg2, " 100%)"),
      fontFamily: "'Noto Sans TC','PingFang TC',sans-serif",
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(135deg,".concat(C.primary, " 0%,").concat(C.primary2, " 100%)"),
      padding: "16px 18px 16px",
      boxShadow: "0 4px 20px rgba(140,70,20,0.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.2)",
      borderRadius: 12,
      width: 38,
      height: 38,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 20,
      flexShrink: 0
    }
  }, "\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontSize: 16,
      fontWeight: 900,
      letterSpacing: 0.5,
      lineHeight: 1,
      whiteSpace: "nowrap"
    }
  }, "Hair & Lash Story"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.6)",
      fontSize: 10,
      marginTop: 3
    }
  }, "Hair \xB7 Lash \xB7 Record"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return exportCSV(hairRecords, lashRecords);
    },
    title: "\u532F\u51FA CSV",
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.3)",
      color: "#fff",
      borderRadius: 12,
      width: 36,
      height: 36,
      fontSize: 16,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, "\u2B07\uFE0F"), /*#__PURE__*/React.createElement("div", {
    title: syncStatus === "ok" ? "已同步" : syncStatus === "syncing" ? "同步中" : "失敗",
    style: {
      background: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 12,
      width: 36,
      height: 36,
      fontSize: 16,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, syncStatus === "syncing" ? "🔄" : syncStatus === "ok" ? "☁️" : syncStatus === "error" ? "⚠️" : "💾"), totalUrgent > 0 && /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      return setTab("reminders");
    },
    style: {
      background: "rgba(208,128,128,0.9)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 12,
      width: 36,
      height: 36,
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "\u23F0"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontSize: 8,
      fontWeight: 800,
      lineHeight: 1
    }
  }, totalUrgent)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, [{
    label: "💇🏻‍♀️ 剪髮",
    value: totalHair,
    count: hairRecords.length
  }, {
    label: "💫 美睫",
    value: totalLash,
    count: lashRecords.length
  }, {
    label: "✨ 合計",
    value: totalHair + totalLash,
    count: hairRecords.length + lashRecords.length
  }].map(function (s) {
    return /*#__PURE__*/React.createElement("div", {
      key: s.label,
      style: {
        flex: 1,
        background: "rgba(255,255,255,0.15)",
        border: "1px solid rgba(255,255,255,0.22)",
        borderRadius: 12,
        padding: "8px 8px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: "rgba(255,255,255,0.7)",
        fontSize: 9,
        fontWeight: 600,
        marginBottom: 2
      }
    }, s.label), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "#fff",
        fontSize: 13,
        fontWeight: 900,
        whiteSpace: "nowrap"
      }
    }, "NT$", s.value.toLocaleString()), /*#__PURE__*/React.createElement("div", {
      style: {
        color: "rgba(255,255,255,0.5)",
        fontSize: 9,
        marginTop: 1
      }
    }, s.count, " \u7B46"));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px 0",
      maxWidth: 600,
      margin: "0 auto"
    }
  }, tab === "calendar" && /*#__PURE__*/React.createElement(CalendarView, {
    hairRecords: hairRecords,
    lashRecords: lashRecords,
    salons: salons,
    onAddHair: function onAddHair() {
      setHairDraft(emptyHair());
      setShowHairModal(true);
    },
    onAddLash: function onAddLash() {
      setLashDraft(emptyLash());
      setShowLashModal(true);
    },
    onDeleteHair: function onDeleteHair(id) {
      return setHairRecords(hairRecords.filter(function (x) {
        return x.id !== id;
      }));
    },
    onDeleteLash: function onDeleteLash(id) {
      return setLashRecords(lashRecords.filter(function (x) {
        return x.id !== id;
      }));
    }
  }), tab === "hair" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      setHairDraft(emptyHair());
      setShowHairModal(true);
    }
  }, "\uFF0B \u65B0\u589E\u7D00\u9304")), /*#__PURE__*/React.createElement(FilterBar, {
    filter: hairFilter,
    setFilter: setHairFilter,
    type: "hair"
  }), filteredHair.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: C.textFaint,
      padding: "56px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 10
    }
  }, "\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F"), hairRecords.length === 0 ? "還沒有剪髮紀錄，點擊右上角新增！" : "沒有符合條件的紀錄") : function () {
    // Group by date, preserving sort order
    var grouped = {};
    var dateOrder = [];
    filteredHair.forEach(function (r) {
      if (!grouped[r.date]) {
        grouped[r.date] = [];
        dateOrder.push(r.date);
      }
      grouped[r.date].push(r);
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, dateOrder.map(function (date) {
      return /*#__PURE__*/React.createElement(DayGroup, {
        key: date,
        date: date,
        records: grouped[date],
        type: "hair",
        salons: salons,
        onDelete: function onDelete(id) {
          return setHairRecords(hairRecords.filter(function (x) {
            return x.id !== id;
          }));
        }
      });
    }));
  }()), tab === "lash" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: function onClick() {
      setLashDraft(emptyLash());
      setShowLashModal(true);
    }
  }, "\uFF0B \u65B0\u589E\u7D00\u9304")), /*#__PURE__*/React.createElement(FilterBar, {
    filter: lashFilter,
    setFilter: setLashFilter,
    type: "lash"
  }), filteredLash.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: C.textFaint,
      padding: "56px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 10
    }
  }, "\uD83D\uDCAB"), lashRecords.length === 0 ? "還沒有美睫紀錄，點擊右上角新增！" : "沒有符合條件的紀錄") : function () {
    var grouped = {};
    var dateOrder = [];
    filteredLash.forEach(function (r) {
      if (!grouped[r.date]) {
        grouped[r.date] = [];
        dateOrder.push(r.date);
      }
      grouped[r.date].push(r);
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, dateOrder.map(function (date) {
      return /*#__PURE__*/React.createElement(DayGroup, {
        key: date,
        date: date,
        records: grouped[date],
        type: "lash",
        salons: salons,
        onDelete: function onDelete(id) {
          return setLashRecords(lashRecords.filter(function (x) {
            return x.id !== id;
          }));
        }
      });
    }));
  }()), tab === "stats" && /*#__PURE__*/React.createElement(StatsTab, {
    hairRecords: hairRecords,
    lashRecords: lashRecords
  }), tab === "reminders" && /*#__PURE__*/React.createElement(RemindersTab, {
    reminders: reminders,
    setReminders: setReminders,
    hairRecords: hairRecords,
    lashRecords: lashRecords
  }), tab === "salons" && /*#__PURE__*/React.createElement(SalonsTab, {
    salons: salons,
    setSalons: setSalons
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      background: "#fff",
      borderTop: "1px solid ".concat(C.border2),
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0 28px",
      boxShadow: "0 -4px 20px rgba(140,80,30,0.08)",
      zIndex: 100
    }
  }, [["calendar", "📅", "月曆"], ["hair", "💇🏻‍♀️", "剪髮"], ["lash", "💫", "美睫"], ["stats", "📊", "統計"], ["reminders", "⏰", "提醒"], ["salons", "⭐", "沙龍"]].map(function (_ref27) {
    var _ref28 = _slicedToArray(_ref27, 3),
      t = _ref28[0],
      icon = _ref28[1],
      label = _ref28[2];
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: function onClick() {
        return setTab(t);
      },
      style: {
        flex: 1,
        border: "none",
        background: "none",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        padding: "4px 0",
        opacity: tab === t ? 1 : 0.45,
        transition: "opacity 0.15s"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 20
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 9,
        fontWeight: tab === t ? 800 : 500,
        color: tab === t ? C.primary : C.textLight
      }
    }, label, t === "reminders" && totalUrgent > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 2,
        background: C.red,
        color: "#fff",
        borderRadius: "50%",
        width: 14,
        height: 14,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 9
      }
    }, totalUrgent)));
  })), /*#__PURE__*/React.createElement(Modal, {
    show: showHairModal,
    onClose: function onClose() {
      return setShowHairModal(false);
    },
    title: "\uD83D\uDC87\uD83C\uDFFB\u200D\u2640\uFE0F \u65B0\u589E\u526A\u9AEE\u7D00\u9304"
  }, /*#__PURE__*/React.createElement(HairForm, {
    record: hairDraft,
    onChange: setHairDraft,
    salons: salons
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveHair,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 20
    }
  }, "\u5132\u5B58\u7D00\u9304")), /*#__PURE__*/React.createElement(Modal, {
    show: showLashModal,
    onClose: function onClose() {
      return setShowLashModal(false);
    },
    title: "\uD83D\uDCAB \u65B0\u589E\u7F8E\u776B\u7D00\u9304"
  }, /*#__PURE__*/React.createElement(LashForm, {
    record: lashDraft,
    onChange: setLashDraft,
    salons: salons
  }), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveLash,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 20
    }
  }, "\u5132\u5B58\u7D00\u9304")));
}

window.App = App;
