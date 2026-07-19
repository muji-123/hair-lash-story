"use strict";

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
const HAIR_ITEMS = ["剪髮（含洗）", "修瀏海", "局部燙（燙劉海）", "局部燙（髮尾C彎）", "護髮（深層護髮）", "護髮（一般護髮）", "洗髮", "頭皮隔離", "染髮（補染）", "染髮（整頭染）"];
const LASH_ITEMS = ["150根", "補接"];
const TABS = ["hair", "lash", "stats", "reminders", "salons"];
const TAB_LABELS = {
  hair: "💇🏻‍♀️ 剪髮",
  lash: "💫 美睫",
  stats: "📊 統計",
  reminders: "⏰ 提醒",
  salons: "⭐ 沙龍"
};
const C = {
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
const fmtDate = d => {
  if (!d) return "";
  const dt = new Date(d);
  return `${dt.getFullYear()}/${String(dt.getMonth() + 1).padStart(2, "0")}/${String(dt.getDate()).padStart(2, "0")}`;
};
const todayStr = () => new Date().toISOString().split("T")[0];
const daysFrom = d => Math.round((new Date(d) - new Date()) / 86400000);
const addDays = (d, n) => {
  const dt = new Date(d);
  dt.setDate(dt.getDate() + n);
  return dt.toISOString().split("T")[0];
};
const monthKey = d => d ? d.slice(0, 7) : "";
const emptyHair = () => ({
  id: Date.now(),
  selectedItems: [],
  customItems: [],
  cost: "",
  date: todayStr(),
  note: "",
  salonId: "",
  photo: ""
});
const emptyLash = () => ({
  id: Date.now(),
  item: "150根",
  cost: "",
  date: todayStr(),
  note: "",
  salonId: "",
  photo: ""
});
const emptyReminder = () => ({
  id: Date.now(),
  type: "hair",
  label: "",
  date: "",
  cycleWeeks: 6,
  active: true
});
const emptySalon = (type = "hair") => ({
  id: Date.now(),
  type,
  name: "",
  phone: "",
  address: "",
  note: "",
  rating: 5
});

// ── Storage ───────────────────────────────────────────────────────────────────
const CLOUD_OK = false;
const load = (key, def) => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : def;
  } catch (e) {
    return def;
  }
};
const save = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
};
const cloudLoad = async key => {
  if (!CLOUD_OK) return null;
  try {
    const r = await window.storage.get(key);
    return r ? JSON.parse(r.value) : null;
  } catch {
    return null;
  }
};
const cloudSave = async (key, val) => {
  if (!CLOUD_OK) return;
  try {
    if (key === "hair" || key === "lash") {
      await window.storage.set(key, JSON.stringify(val.map(r => ({
        ...r,
        photo: ""
      }))));
      for (const r of val) {
        if (r.photo) {
          try {
            await window.storage.set("photo_" + r.id, r.photo);
          } catch (e) {}
        }
      }
    } else {
      await window.storage.set(key, JSON.stringify(val));
    }
  } catch (e) {}
};
const cloudLoadPhotos = async records => {
  if (!CLOUD_OK) return records;
  return Promise.all(records.map(async r => {
    if (r.photo) return r;
    try {
      const res = await window.storage.get("photo_" + r.id);
      return res ? {
        ...r,
        photo: res.value
      } : r;
    } catch {
      return r;
    }
  }));
};

// ── UI Atoms ──────────────────────────────────────────────────────────────────
const inputStyle = {
  width: "100%",
  border: `1.5px solid ${C.border}`,
  borderRadius: 10,
  padding: "9px 12px",
  fontSize: 14,
  background: "#fff8f3",
  color: C.text,
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit"
};
const labelStyle = {
  fontSize: 12,
  fontWeight: 700,
  color: C.textMid,
  marginBottom: 4,
  display: "block"
};
const Btn = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  style: s = {}
}) => {
  const base = {
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    fontWeight: 700,
    borderRadius: size === "sm" ? 10 : 14,
    padding: size === "sm" ? "6px 14px" : size === "lg" ? "14px 0" : "10px 22px",
    fontSize: size === "sm" ? 12 : 14,
    transition: "all 0.15s"
  };
  const variants = {
    primary: {
      background: `linear-gradient(135deg,${C.primary},${C.primary2})`,
      color: "#fff",
      boxShadow: `0 4px 14px rgba(160,96,64,0.28)`
    },
    ghost: {
      background: "#fff",
      color: C.textMid,
      border: `1.5px solid ${C.border}`
    },
    danger: {
      background: "#fff",
      color: C.red,
      border: `1.5px solid #e8c4c4`
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      ...base,
      ...variants[variant],
      ...s
    }
  }, children);
};
const Tag = ({
  label,
  onRemove,
  color
}) => /*#__PURE__*/React.createElement("span", {
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
}, "×"));
const Modal = ({
  show,
  onClose,
  title,
  children
}) => {
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
    onClick: e => e.stopPropagation(),
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
  }, "×")), children));
};

// Photo upload component (with compression)
const PhotoUpload = ({
  value,
  onChange
}) => {
  const ref = useRef();
  const [compressing, setCompressing] = useState(false);
  const handleFile = async e => {
    const f = e.target.files[0];
    if (!f) return;
    setCompressing(true);
    try {
      const compressed = await compressImage(f, 1200, 0.75);
      onChange(compressed);
    } catch (e) {
      const reader = new FileReader();
      reader.onload = ev => onChange(ev.target.result);
      reader.readAsDataURL(f);
    } finally {
      setCompressing(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "照片（選填）"), value ? /*#__PURE__*/React.createElement("div", {
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
      border: `1.5px solid ${C.border}`
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(""),
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
  }, "×")) : /*#__PURE__*/React.createElement("div", {
    onClick: () => !compressing && ref.current.click(),
    style: {
      width: 120,
      height: 90,
      border: `2px dashed ${C.border}`,
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
const Stars = ({
  value,
  onChange
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 4
  }
}, [1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("button", {
  key: i,
  onClick: () => onChange && onChange(i),
  style: {
    background: "none",
    border: "none",
    cursor: onChange ? "pointer" : "default",
    fontSize: 20,
    padding: 0,
    color: i <= value ? "#e8a030" : "#ddd"
  }
}, "★")));

// ── Forms ─────────────────────────────────────────────────────────────────────
function HairForm({
  record,
  onChange,
  salons
}) {
  const [customInput, setCustomInput] = useState("");
  const toggle = item => {
    const sel = record.selectedItems.includes(item) ? record.selectedItems.filter(i => i !== item) : [...record.selectedItems, item];
    onChange({
      ...record,
      selectedItems: sel
    });
  };
  const addCustom = () => {
    const v = customInput.trim();
    if (!v) return;
    onChange({
      ...record,
      customItems: [...record.customItems, v]
    });
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
  }, "服務項目"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7,
      marginBottom: 10
    }
  }, HAIR_ITEMS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    onClick: () => toggle(item),
    style: {
      padding: "5px 12px",
      borderRadius: 20,
      fontSize: 12,
      cursor: "pointer",
      border: record.selectedItems.includes(item) ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
      background: record.selectedItems.includes(item) ? C.primaryLight : "#fff",
      color: record.selectedItems.includes(item) ? C.textMid : "#9a7560",
      fontWeight: record.selectedItems.includes(item) ? 700 : 400,
      transition: "all 0.15s"
    }
  }, item))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      flex: 1
    },
    placeholder: "自訂項目（Enter新增）",
    value: customInput,
    onChange: e => setCustomInput(e.target.value),
    onKeyDown: e => e.key === "Enter" && addCustom()
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
  }, record.customItems.map((item, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    label: item,
    onRemove: () => onChange({
      ...record,
      customItems: record.customItems.filter((_, idx) => idx !== i)
    })
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "費用（元）"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "number",
    placeholder: "0",
    value: record.cost,
    onChange: e => onChange({
      ...record,
      cost: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "日期"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: record.date,
    onChange: e => onChange({
      ...record,
      date: e.target.value
    })
  }))), salons.filter(s => s.type === "hair" || !s.type).length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "沙龍／設計師"), /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    value: record.salonId,
    onChange: e => onChange({
      ...record,
      salonId: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "未指定"), salons.filter(s => s.type === "hair" || !s.type).map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.name)))), /*#__PURE__*/React.createElement(PhotoUpload, {
    value: record.photo,
    onChange: v => onChange({
      ...record,
      photo: v
    })
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "備註"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      resize: "vertical",
      minHeight: 56
    },
    placeholder: "記錄心得…",
    value: record.note,
    onChange: e => onChange({
      ...record,
      note: e.target.value
    })
  })));
}
function LashForm({
  record,
  onChange,
  salons
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: labelStyle
  }, "服務項目"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, LASH_ITEMS.map(item => /*#__PURE__*/React.createElement("button", {
    key: item,
    onClick: () => onChange({
      ...record,
      item
    }),
    style: {
      flex: 1,
      padding: "10px 0",
      borderRadius: 14,
      fontSize: 14,
      cursor: "pointer",
      border: record.item === item ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
      background: record.item === item ? C.primaryLight : "#fff",
      color: record.item === item ? C.textMid : "#9a7560",
      fontWeight: record.item === item ? 700 : 400,
      transition: "all 0.15s"
    }
  }, item)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "費用（元）"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "number",
    placeholder: "0",
    value: record.cost,
    onChange: e => onChange({
      ...record,
      cost: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "日期"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: record.date,
    onChange: e => onChange({
      ...record,
      date: e.target.value
    })
  }))), salons.filter(s => s.type === "lash").length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "沙龍／接睫師"), /*#__PURE__*/React.createElement("select", {
    style: inputStyle,
    value: record.salonId,
    onChange: e => onChange({
      ...record,
      salonId: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "未指定"), salons.filter(s => s.type === "lash").map(s => /*#__PURE__*/React.createElement("option", {
    key: s.id,
    value: s.id
  }, s.name)))), /*#__PURE__*/React.createElement(PhotoUpload, {
    value: record.photo,
    onChange: v => onChange({
      ...record,
      photo: v
    })
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "備註"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      resize: "vertical",
      minHeight: 56
    },
    placeholder: "記錄心得…",
    value: record.note,
    onChange: e => onChange({
      ...record,
      note: e.target.value
    })
  })));
}

// ── Record Cards ──────────────────────────────────────────────────────────────
function RecordCard({
  record,
  onDelete,
  salons,
  type
}) {
  const [expanded, setExpanded] = useState(false);
  const items = type === "hair" ? [...(record.selectedItems || []), ...(record.customItems || [])] : [record.item];
  const salon = salons.find(s => s.id === record.salonId);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: `1.5px solid ${C.border2}`,
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
    onClick: () => setExpanded(!expanded),
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
  }, "×"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      margin: "10px 0 8px"
    }
  }, items.length > 0 ? items.map((item, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    label: item
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.textFaint,
      fontSize: 13
    }
  }, "未選擇項目")), /*#__PURE__*/React.createElement("div", {
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
  }, record.cost ? `NT$ ${Number(record.cost).toLocaleString()}` : "—"), salon && /*#__PURE__*/React.createElement(Tag, {
    label: `⭐ ${salon.name}`,
    color: "#fff3e0"
  }))), expanded && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border2}`,
      padding: "14px 18px",
      background: "#fffaf6",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, record.photo && /*#__PURE__*/React.createElement("img", {
    src: record.photo,
    alt: "記錄照片",
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
  const map = {};
  records.forEach(r => {
    const d = r.date || "unknown";
    if (!map[d]) map[d] = [];
    map[d].push(r);
  });
  // Return sorted date keys (newest first for date_desc, handled by caller)
  return map;
}

// Each individual record row — has its own 📷 toggle per record
function RecordRow({
  r,
  type,
  salons,
  onDelete
}) {
  const [open, setOpen] = useState(false);
  const items = type === "hair" ? [...(r.selectedItems || []), ...(r.customItems || [])] : [r.item];
  const salon = salons.find(s => s.id === r.salonId);
  const hasExtra = !!(r.photo || salon);
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
  }, items.length > 0 ? items.map((item, j) => /*#__PURE__*/React.createElement(Tag, {
    key: j,
    label: item
  })) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: C.textFaint,
      fontSize: 12
    }
  }, "未選擇項目")), /*#__PURE__*/React.createElement("div", {
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
  }, r.cost ? `NT$ ${Number(r.cost).toLocaleString()}` : "—"), hasExtra && /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      background: open ? C.primaryLight : "#f5f0eb",
      border: `1px solid ${C.border}`,
      cursor: "pointer",
      color: open ? C.primary : C.textLight,
      fontSize: 13,
      borderRadius: 7,
      padding: "2px 7px",
      lineHeight: 1.6
    }
  }, open ? "▲" : "📷"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onDelete(r.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 17,
      lineHeight: 1,
      padding: 0
    }
  }, "×"))), r.note && /*#__PURE__*/React.createElement("div", {
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
    alt: "照片",
    style: {
      width: "100%",
      maxHeight: 240,
      objectFit: "cover",
      borderRadius: 12,
      border: `1px solid ${C.border2}`
    }
  }), salon && /*#__PURE__*/React.createElement(Tag, {
    label: `⭐ ${salon.name}`,
    color: "#fff3e0"
  })));
}
function DayGroup({
  date,
  records,
  type,
  salons,
  onDelete
}) {
  const total = records.reduce((s, r) => s + (Number(r.cost) || 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: `1.5px solid ${C.border2}`,
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
  }, records.map((r, i) => {
    const isLast = i === records.length - 1;
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        paddingBottom: isLast ? 12 : 10,
        marginBottom: isLast ? 0 : 10,
        borderBottom: isLast ? "none" : `1px dashed ${C.border2}`
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
      borderTop: `1.5px solid ${C.border2}`,
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
  }, "當日合計"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 900,
      color: C.primary
    }
  }, "NT$ ", total.toLocaleString())));
}

// ── Donut Chart (SVG) ─────────────────────────────────────────────────────────
const PALETTE = ["#c0845a", "#d4a0c0", "#7daa7d", "#a0b8d4", "#d4b87a", "#b07088", "#88a870", "#7898c0", "#c09858", "#a888b0"];
function DonutChart({
  data,
  total
}) {
  try {
    const size = 160,
      cx = 80,
      cy = 80,
      R = 62,
      r = 38;
    let angle = -Math.PI / 2;
    const safeTotal = total > 0 ? total : 1;
    const slices = data.map((d, i) => {
      const pct = Math.max(0, Math.min(1, (d.value || 0) / safeTotal));
      const a1 = angle;
      const a2 = angle + pct * 2 * Math.PI;
      angle = a2;
      if (pct < 0.001) return {
        ...d,
        path: "",
        color: PALETTE[i % PALETTE.length]
      };
      const large = pct > 0.5 ? 1 : 0;
      const fmt = n => isFinite(n) ? n.toFixed(4) : "0";
      const x1 = cx + R * Math.cos(a1),
        y1 = cy + R * Math.sin(a1);
      const x2 = cx + R * Math.cos(a2),
        y2 = cy + R * Math.sin(a2);
      const ix1 = cx + r * Math.cos(a1),
        iy1 = cy + r * Math.sin(a1);
      const ix2 = cx + r * Math.cos(a2),
        iy2 = cy + r * Math.sin(a2);
      const path = `M ${fmt(x1)} ${fmt(y1)} A ${R} ${R} 0 ${large} 1 ${fmt(x2)} ${fmt(y2)} L ${fmt(ix2)} ${fmt(iy2)} A ${r} ${r} 0 ${large} 0 ${fmt(ix1)} ${fmt(iy1)} Z`;
      return {
        ...d,
        path,
        color: PALETTE[i % PALETTE.length]
      };
    });
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: `0 0 ${size} ${size}`
    }, slices.map((s, i) => s.path ? /*#__PURE__*/React.createElement("path", {
      key: i,
      d: s.path,
      fill: s.color,
      stroke: "#fff",
      strokeWidth: 2
    }) : null), /*#__PURE__*/React.createElement("text", {
      x: cx,
      y: cy - 6,
      textAnchor: "middle",
      fontSize: 11,
      fill: C.textLight
    }, "總花費"), /*#__PURE__*/React.createElement("text", {
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
    }, "無資料");
  }
}

// ── Stats Tab ─────────────────────────────────────────────────────────────────
function StatsTab({
  hairRecords,
  lashRecords
}) {
  const [costView, setCostView] = useState("ratio");
  const [chartMode, setChartMode] = useState("monthly"); // "monthly" | "yearly"
  const [selectedYear, setSelectedYear] = useState(null); // null = current year

  const allRecords = useMemo(() => [...hairRecords, ...lashRecords], [hairRecords, lashRecords]);

  // All years that have data
  const allYears = useMemo(() => {
    const ys = new Set(allRecords.map(r => {
      var _r$date;
      return (_r$date = r.date) === null || _r$date === void 0 ? void 0 : _r$date.slice(0, 4);
    }).filter(Boolean));
    return [...ys].sort((a, b) => b - a); // newest first
  }, [allRecords]);
  const currentYear = String(new Date().getFullYear());
  const activeYear = selectedYear || currentYear;

  // ── Yearly overview chart (one bar per year) ──────────────────────────────
  const yearlyData = useMemo(() => {
    return allYears.map(y => ({
      year: y + "年",
      hair: hairRecords.filter(r => {
        var _r$date2;
        return (_r$date2 = r.date) === null || _r$date2 === void 0 ? void 0 : _r$date2.startsWith(y);
      }).reduce((s, r) => s + (Number(r.cost) || 0), 0),
      lash: lashRecords.filter(r => {
        var _r$date3;
        return (_r$date3 = r.date) === null || _r$date3 === void 0 ? void 0 : _r$date3.startsWith(y);
      }).reduce((s, r) => s + (Number(r.cost) || 0), 0)
    })).reverse(); // chronological
  }, [allYears, hairRecords, lashRecords]);

  // ── Monthly chart for selected year ──────────────────────────────────────
  const monthlyData = useMemo(() => {
    return Array.from({
      length: 12
    }, (_, i) => {
      const m = `${activeYear}-${String(i + 1).padStart(2, "0")}`;
      return {
        month: `${i + 1}月`,
        hair: hairRecords.filter(r => monthKey(r.date) === m).reduce((s, r) => s + (Number(r.cost) || 0), 0),
        lash: lashRecords.filter(r => monthKey(r.date) === m).reduce((s, r) => s + (Number(r.cost) || 0), 0)
      };
    });
  }, [activeYear, hairRecords, lashRecords]);

  // Year-filtered totals
  const yearHair = hairRecords.filter(r => {
    var _r$date4;
    return (_r$date4 = r.date) === null || _r$date4 === void 0 ? void 0 : _r$date4.startsWith(activeYear);
  }).reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const yearLash = lashRecords.filter(r => {
    var _r$date5;
    return (_r$date5 = r.date) === null || _r$date5 === void 0 ? void 0 : _r$date5.startsWith(activeYear);
  }).reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const totalHair = hairRecords.reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const totalLash = lashRecords.reduce((s, r) => s + (Number(r.cost) || 0), 0);

  // ── Per-item stats for selected year ──────────────────────────────────────
  const filteredHairForYear = hairRecords.filter(r => {
    var _r$date6;
    return (_r$date6 = r.date) === null || _r$date6 === void 0 ? void 0 : _r$date6.startsWith(activeYear);
  });
  const itemStats = useMemo(() => {
    const map = {};
    filteredHairForYear.forEach(r => {
      const items = [...(r.selectedItems || []), ...(r.customItems || [])];
      if (items.length === 0) return;
      const share = (Number(r.cost) || 0) / items.length;
      items.forEach(item => {
        if (!map[item]) map[item] = {
          count: 0,
          cost: 0
        };
        map[item].count += 1;
        map[item].cost += share;
      });
    });
    return Object.entries(map).map(([name, {
      count,
      cost
    }]) => ({
      name,
      count,
      value: Math.round(cost)
    })).sort((a, b) => b.value - a.value);
  }, [filteredHairForYear]);
  const totalItemCost = itemStats.reduce((s, d) => s + d.value, 0);
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
      border: `1.5px solid ${C.border2}`
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
  }, "✂️ ", activeYear, "年 項目花費比例"), allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 5
    }
  }, allYears.map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setSelectedYear(y),
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
  }, y)))), /*#__PURE__*/React.createElement("div", {
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
  }, itemStats.slice(0, 6).map((d, i) => /*#__PURE__*/React.createElement("div", {
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
  }, totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0, "%"))), itemStats.length > 6 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: C.textFaint
    }
  }, "…等共", itemStats.length, "項"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border2}`,
      paddingTop: 10
    }
  }, itemStats.map((d, i) => {
    const pct = totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0;
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        padding: "7px 0",
        borderBottom: i < itemStats.length - 1 ? `1px solid ${C.border2}` : "none"
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
    }, d.count, "次"), /*#__PURE__*/React.createElement("span", {
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
        width: `${pct}%`,
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
  }, "＊每筆花費平均分配給該次所有項目")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 18,
      border: `1.5px solid ${C.border2}`
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
  }, "📊 花費圖表"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setChartMode("monthly"),
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
  }, "月份"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setChartMode("yearly"),
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
  }, "年份"))), chartMode === "monthly" && allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, allYears.map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setSelectedYear(y),
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
  }, y, "年"))), chartMode === "monthly" && /*#__PURE__*/React.createElement("div", {
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
      border: `1px solid ${C.border2}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "年 剪髮"), /*#__PURE__*/React.createElement("div", {
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
      border: `1px solid ${C.border2}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "年 美睫"), /*#__PURE__*/React.createElement("div", {
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
      border: `1px solid ${C.border2}`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: C.textLight,
      fontWeight: 600
    }
  }, activeYear, "年 合計"), /*#__PURE__*/React.createElement("div", {
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
    formatter: v => `NT$${v.toLocaleString()}`,
    contentStyle: {
      borderRadius: 10,
      border: `1px solid ${C.border}`,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "hair",
    name: "剪髮",
    fill: C.primary,
    radius: [4, 4, 0, 0]
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "lash",
    name: "美睫",
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
    formatter: v => `NT$${v.toLocaleString()}`,
    contentStyle: {
      borderRadius: 10,
      border: `1px solid ${C.border}`,
      fontSize: 12
    }
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "hair",
    name: "剪髮",
    fill: C.primary,
    radius: [4, 4, 0, 0]
  }), /*#__PURE__*/React.createElement(Bar, {
    dataKey: "lash",
    name: "美睫",
    fill: "#d4a0c0",
    radius: [4, 4, 0, 0]
  })))), itemStats.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: 18,
      border: `1.5px solid ${C.border2}`
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
  }, "✂️ 剪髮項目花費比例"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, [["ratio", "比例"], ["count", "次數"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setCostView(v),
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
  }, l)))), allYears.length > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.textLight,
      marginBottom: 10
    }
  }, "顯示：", activeYear, "年資料", chartMode === "monthly" && /*#__PURE__*/React.createElement("span", null, "（可切換年份查看）")), /*#__PURE__*/React.createElement("div", {
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
  }, itemStats.slice(0, 6).map((d, i) => /*#__PURE__*/React.createElement("div", {
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
  }, totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0, "%"))), itemStats.length > 6 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: C.textFaint
    }
  }, "…等共 ", itemStats.length, " 項"))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${C.border2}`,
      paddingTop: 12,
      display: "flex",
      flexDirection: "column",
      gap: 0
    }
  }, itemStats.map((d, i) => {
    const pct = totalItemCost > 0 ? Math.round(d.value / totalItemCost * 100) : 0;
    const barW = costView === "ratio" ? pct : Math.round(d.count / Math.max(...itemStats.map(x => x.count)) * 100);
    return /*#__PURE__*/React.createElement("div", {
      key: d.name,
      style: {
        padding: "9px 0",
        borderBottom: i < itemStats.length - 1 ? `1px solid ${C.border2}` : "none"
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
    }, d.count, "次"), /*#__PURE__*/React.createElement("span", {
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
        width: `${barW}%`,
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
  }, "＊每筆紀錄花費平均分配給該次所有項目計算")));
}

// ── Cycle rules ───────────────────────────────────────────────────────────────
const CYCLE_RULES = [{
  key: "bang_trim",
  icon: "✂️",
  label: "修瀏海",
  match: items => items.some(i => i.includes("修瀏海")),
  minDays: 21,
  maxDays: 28,
  hint: "建議每 3–4 週"
}, {
  key: "bang_perm",
  icon: "🌀",
  label: "燙劉海",
  match: items => items.some(i => i.includes("燙劉海")),
  minDays: 84,
  maxDays: 98,
  hint: "建議每 3 個月"
}, {
  key: "color_touch",
  icon: "🎨",
  label: "補染",
  match: items => items.some(i => i.includes("補染")),
  minDays: 84,
  maxDays: 98,
  hint: "建議每 3 個月"
}, {
  key: "color_full",
  icon: "🌈",
  label: "整頭染",
  match: items => items.some(i => i.includes("整頭染")),
  minDays: 168,
  maxDays: 196,
  hint: "建議每 6 個月"
}, {
  key: "curl_end",
  icon: "🌊",
  label: "髮尾C彎",
  match: items => items.some(i => i.includes("髮尾C彎")),
  minDays: 168,
  maxDays: 196,
  hint: "建議每 6 個月"
}, {
  key: "haircut",
  icon: "💇",
  label: "剪髮",
  match: items => items.some(i => i.includes("剪髮")) && !items.some(i => i.includes("修瀏海") || i.includes("燙劉海") || i.includes("補染") || i.includes("整頭染")),
  minDays: 120,
  maxDays: 180,
  hint: "建議每 4–6 個月"
}];
const LASH_CYCLE = {
  minDays: 45,
  maxDays: 60,
  hint: "建議每 1.5–2 個月"
};

// Find last record date for each cycle key
function buildSuggestions(hairRecords, lashRecords) {
  const suggestions = [];

  // Hair: find the most recent record that matches each rule
  CYCLE_RULES.forEach(rule => {
    const matched = [...hairRecords].filter(r => rule.match([...(r.selectedItems || []), ...(r.customItems || [])])).sort((a, b) => b.date.localeCompare(a.date));
    if (matched.length === 0) return;
    const last = matched[0];
    const nextMin = addDays(last.date, rule.minDays);
    const nextMax = addDays(last.date, rule.maxDays);
    const daysMin = daysFrom(nextMin);
    const daysMax = daysFrom(nextMax);
    suggestions.push({
      ...rule,
      lastDate: last.date,
      nextMin,
      nextMax,
      daysMin,
      daysMax
    });
  });

  // Lash
  const lastLash = [...lashRecords].sort((a, b) => b.date.localeCompare(a.date))[0];
  if (lastLash) {
    const nextMin = addDays(lastLash.date, LASH_CYCLE.minDays);
    const nextMax = addDays(lastLash.date, LASH_CYCLE.maxDays);
    suggestions.push({
      key: "lash",
      icon: "💫",
      label: "美睫",
      lastDate: lastLash.date,
      nextMin,
      nextMax,
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
  if (d < 30) return `${d} 天`;
  const months = Math.floor(d / 30);
  const rem = d % 30;
  if (rem === 0) return `${months} 個月`;
  return `${months} 個月又 ${rem} 天`;
}
function urgencyLabel(dMin, dMax) {
  if (dMax < 0) return `逾期 ${fmtDays(-dMax)}`;
  if (dMin <= 0) return "可以去囉！";
  return `還有 ${fmtDays(dMin)}–${fmtDays(dMax)}`;
}

// ── Reminders Tab ─────────────────────────────────────────────────────────────
function RemindersTab({
  reminders,
  setReminders,
  hairRecords,
  lashRecords
}) {
  const [showModal, setShowModal] = useState(false);
  const [draft, setDraft] = useState(emptyReminder());
  const suggestions = useMemo(() => buildSuggestions(hairRecords, lashRecords), [hairRecords, lashRecords]);
  const saveReminder = () => {
    setReminders([...reminders, {
      ...draft,
      id: Date.now()
    }]);
    setShowModal(false);
    setDraft(emptyReminder());
  };
  const manualUrgencyColor = days => days < 0 ? C.red : days <= 3 ? "#e8a030" : C.green;
  const manualUrgencyLabel = days => days < 0 ? `已過期 ${fmtDays(-days)}` : days === 0 ? "今天！" : `還有 ${fmtDays(days)}`;
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
      border: `1.5px solid ${C.border2}`
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      color: C.textMid,
      fontSize: 13,
      display: "block",
      marginBottom: 10
    }
  }, "💡 智慧建議"), suggestions.map((s, i) => {
    const uc = urgencyColor(s.daysMin, s.daysMax);
    const ul = urgencyLabel(s.daysMin, s.daysMax);
    const isLast = i === suggestions.length - 1;
    // progress bar: 0% = just done, 100% = max window reached/passed
    // daysMax > 0 means still waiting; daysMax <= 0 means overdue
    // pct = how far along the full cycle we are (elapsed / total cycle)
    const totalWindow = s.maxDays;
    const elapsed = totalWindow - Math.max(s.daysMax, 0);
    const pct = Math.min(100, Math.max(0, Math.round(elapsed / totalWindow * 100)));
    // bar color: green (early) → orange (approaching) → red (overdue)
    // Use daysMin to determine urgency, not pct
    return /*#__PURE__*/React.createElement("div", {
      key: s.key,
      style: {
        padding: "10px 0",
        borderBottom: isLast ? "none" : `1px solid ${C.border2}`
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
    }, "上次：", fmtDate(s.lastDate), "\u3000", s.hint), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        color: C.textLight
      }
    }, "建議區間：", fmtDate(s.nextMin), " – ", fmtDate(s.nextMax))), /*#__PURE__*/React.createElement("span", {
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
        width: `${pct}%`,
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
      border: `1.5px solid ${C.border2}`,
      textAlign: "center",
      color: C.textFaint,
      fontSize: 13
    }
  }, "新增幾筆剪髮或美睫紀錄後，系統會自動顯示建議時間 🪄"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setDraft(emptyReminder());
      setShowModal(true);
    }
  }, "＋ 自訂提醒")), reminders.length > 0 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: C.textMid,
      marginBottom: -6
    }
  }, "📌 自訂提醒"), reminders.map(r => {
    const days = daysFrom(r.date);
    return /*#__PURE__*/React.createElement("div", {
      key: r.id,
      style: {
        background: C.card,
        borderRadius: 16,
        padding: "14px 18px",
        border: `1.5px solid ${C.border2}`,
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
    }, r.type === "hair" ? "✂️ 剪髮" : "💫 美睫", " · ", fmtDate(r.date))), /*#__PURE__*/React.createElement("div", {
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
      onClick: () => setReminders(reminders.filter(x => x.id !== r.id)),
      style: {
        background: "none",
        border: "none",
        cursor: "pointer",
        color: C.textFaint,
        fontSize: 18,
        lineHeight: 1
      }
    }, "×")));
  })), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onClose: () => setShowModal(false),
    title: "⏰ 自訂提醒"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "提醒名稱"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "例：預約護髮",
    value: draft.label,
    onChange: e => setDraft({
      ...draft,
      label: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "類型"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, ["hair", "lash"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setDraft({
      ...draft,
      type: t
    }),
    style: {
      flex: 1,
      padding: "8px 0",
      borderRadius: 12,
      fontSize: 13,
      cursor: "pointer",
      border: draft.type === t ? `2px solid ${C.primary}` : `2px solid ${C.border}`,
      background: draft.type === t ? C.primaryLight : "#fff",
      color: draft.type === t ? C.textMid : "#9a7560",
      fontWeight: draft.type === t ? 700 : 400
    }
  }, t === "hair" ? "✂️ 剪髮" : "💫 美睫")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "提醒日期"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    type: "date",
    value: draft.date,
    onChange: e => setDraft({
      ...draft,
      date: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveReminder,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 6
    }
  }, "儲存提醒"))));
}

// ── Salons Tab ────────────────────────────────────────────────────────────────
function SalonCard({
  s,
  onDelete
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 16,
      padding: "14px 16px",
      border: `1.5px solid ${C.border2}`,
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
  }, "×")), s.phone && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.textMid,
      marginTop: 7
    }
  }, "📞 ", s.phone), s.address && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: C.textMid,
      marginTop: 4
    }
  }, "📍 ", s.address), s.note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: C.textLight,
      marginTop: 5,
      lineHeight: 1.5
    }
  }, s.note));
}
function SalonsTab({
  salons,
  setSalons
}) {
  const [showModal, setShowModal] = useState(false);
  const [draft, setDraft] = useState(emptySalon("hair"));
  const [salonTab, setSalonTab] = useState("hair"); // "hair" | "lash"

  const saveSalon = () => {
    if (!draft.name.trim()) return;
    setSalons([...salons, {
      ...draft,
      id: Date.now()
    }]);
    setShowModal(false);
    setDraft(emptySalon(salonTab));
  };
  const hairSalons = salons.filter(s => s.type === "hair" || !s.type);
  const lashSalons = salons.filter(s => s.type === "lash");
  const EmptyState = ({
    icon,
    text
  }) => /*#__PURE__*/React.createElement("div", {
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
      border: `1.5px solid ${C.border2}`
    }
  }, [["hair", "💇🏻‍♀️ 剪髮沙龍"], ["lash", "💫 美睫沙龍"]].map(([t, l]) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setSalonTab(t),
    style: {
      flex: 1,
      border: "none",
      background: "none",
      cursor: "pointer",
      padding: "11px 8px",
      borderBottom: salonTab === t ? `3px solid ${C.primary}` : "3px solid transparent",
      fontWeight: salonTab === t ? 800 : 500,
      color: salonTab === t ? C.textMid : C.textLight,
      fontSize: 13,
      transition: "all 0.15s"
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setDraft(emptySalon(salonTab));
      setShowModal(true);
    }
  }, "＋ 新增", salonTab === "hair" ? "剪髮" : "美睫", "沙龍")), salonTab === "hair" && (hairSalons.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "💇🏻‍♀️",
    text: "還沒有剪髮沙龍，點擊新增！"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, hairSalons.map(s => /*#__PURE__*/React.createElement(SalonCard, {
    key: s.id,
    s: s,
    onDelete: () => setSalons(salons.filter(x => x.id !== s.id))
  })))), salonTab === "lash" && (lashSalons.length === 0 ? /*#__PURE__*/React.createElement(EmptyState, {
    icon: "💫",
    text: "還沒有美睫沙龍，點擊新增！"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, lashSalons.map(s => /*#__PURE__*/React.createElement(SalonCard, {
    key: s.id,
    s: s,
    onDelete: () => setSalons(salons.filter(x => x.id !== s.id))
  })))), /*#__PURE__*/React.createElement(Modal, {
    show: showModal,
    onClose: () => setShowModal(false),
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
    onChange: e => setDraft({
      ...draft,
      name: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "評分"), /*#__PURE__*/React.createElement(Stars, {
    value: draft.rating,
    onChange: r => setDraft({
      ...draft,
      rating: r
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "電話"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "02-xxxx-xxxx",
    value: draft.phone,
    onChange: e => setDraft({
      ...draft,
      phone: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "地址"), /*#__PURE__*/React.createElement("input", {
    style: inputStyle,
    placeholder: "台北市…",
    value: draft.address,
    onChange: e => setDraft({
      ...draft,
      address: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: labelStyle
  }, "備註"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...inputStyle,
      minHeight: 56,
      resize: "vertical"
    },
    placeholder: salonTab === "hair" ? "設計師名字、喜好…" : "接睫師名字、款式偏好…",
    value: draft.note,
    onChange: e => setDraft({
      ...draft,
      note: e.target.value
    })
  })), /*#__PURE__*/React.createElement(Btn, {
    onClick: saveSalon,
    size: "lg",
    style: {
      width: "100%",
      marginTop: 6
    }
  }, "儲存"))));
}

// ── Export ────────────────────────────────────────────────────────────────────
function exportCSV(hairRecords, lashRecords) {
  const hairRows = hairRecords.map(r => [`剪髮`, `"${[...(r.selectedItems || []), ...(r.customItems || [])].join("、")}"`, r.date, r.cost || 0, `"${r.note || ""}"`].join(","));
  const lashRows = lashRecords.map(r => [`美睫`, `"${r.item}"`, r.date, r.cost || 0, `"${r.note || ""}"`].join(","));
  const csv = ["類型,項目,日期,費用,備註", ...hairRows, ...lashRows].join("\n");
  const blob = new Blob(["\uFEFF" + csv], {
    type: "text/csv;charset=utf-8;"
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Hair & Lash Story.csv";
  a.click();
  URL.revokeObjectURL(url);
}

// ── Filter Bar ────────────────────────────────────────────────────────────────
function FilterBar({
  filter,
  setFilter,
  type
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flexWrap: "wrap",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      ...inputStyle,
      flex: 1,
      minWidth: 120,
      padding: "7px 12px",
      fontSize: 13
    },
    placeholder: "🔍 搜尋備註、項目…",
    value: filter.search,
    onChange: e => setFilter({
      ...filter,
      search: e.target.value
    })
  }), /*#__PURE__*/React.createElement("select", {
    style: {
      ...inputStyle,
      width: "auto",
      padding: "7px 10px",
      fontSize: 12
    },
    value: filter.sort,
    onChange: e => setFilter({
      ...filter,
      sort: e.target.value
    })
  }, /*#__PURE__*/React.createElement("option", {
    value: "date_desc"
  }, "最新優先"), /*#__PURE__*/React.createElement("option", {
    value: "date_asc"
  }, "最舊優先"), /*#__PURE__*/React.createElement("option", {
    value: "cost_desc"
  }, "費用高→低"), /*#__PURE__*/React.createElement("option", {
    value: "cost_asc"
  }, "費用低→高")));
}
const applyFilter = (records, filter, type) => {
  let r = [...records];
  if (filter.search) {
    const q = filter.search.toLowerCase();
    r = r.filter(rec => {
      const items = type === "hair" ? [...(rec.selectedItems || []), ...(rec.customItems || [])] : [rec.item];
      return items.some(i => i.includes(q)) || (rec.note || "").toLowerCase().includes(q);
    });
  }
  if (filter.sort === "date_desc") r.sort((a, b) => b.date.localeCompare(a.date));
  if (filter.sort === "date_asc") r.sort((a, b) => a.date.localeCompare(b.date));
  if (filter.sort === "cost_desc") r.sort((a, b) => (Number(b.cost) || 0) - (Number(a.cost) || 0));
  if (filter.sort === "cost_asc") r.sort((a, b) => (Number(a.cost) || 0) - (Number(b.cost) || 0));
  return r;
};

// ══════════════════════════════════════════════════════
// 📅 CALENDAR VERSION — Main view replacement
// ══════════════════════════════════════════════════════
const WEEKDAYS = ["日", "一", "二", "三", "四", "五", "六"];
function CalendarView({
  hairRecords,
  lashRecords,
  salons,
  onAddHair,
  onAddLash,
  onDeleteHair,
  onDeleteLash
}) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addType, setAddType] = useState("hair");
  const todayKey = today.toISOString().split("T")[0];
  const dateMap = useMemo(() => {
    const map = {};
    hairRecords.forEach(r => {
      if (!map[r.date]) map[r.date] = {
        hair: [],
        lash: []
      };
      map[r.date].hair.push(r);
    });
    lashRecords.forEach(r => {
      if (!map[r.date]) map[r.date] = {
        hair: [],
        lash: []
      };
      map[r.date].lash.push(r);
    });
    return map;
  }, [hairRecords, lashRecords]);
  const calDays = useMemo(() => {
    const first = new Date(viewYear, viewMonth, 1);
    const last = new Date(viewYear, viewMonth + 1, 0);
    const days = [];
    for (let i = 0; i < first.getDay(); i++) days.push(null);
    for (let d = 1; d <= last.getDate(); d++) days.push(d);
    return days;
  }, [viewYear, viewMonth]);
  const prevMonth = () => {
    if (viewMonth === 0) {
      setViewYear(y => y - 1);
      setViewMonth(11);
    } else setViewMonth(m => m - 1);
    setSelectedDate(null);
  };
  const nextMonth = () => {
    if (viewMonth === 11) {
      setViewYear(y => y + 1);
      setViewMonth(0);
    } else setViewMonth(m => m + 1);
    setSelectedDate(null);
  };
  const goToday = () => {
    const n = new Date();
    setViewYear(n.getFullYear());
    setViewMonth(n.getMonth());
    setSelectedDate(n.getDate());
  };
  const monthPrefix = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}`;
  const monthTotal = [...hairRecords, ...lashRecords].filter(r => {
    var _r$date7;
    return (_r$date7 = r.date) === null || _r$date7 === void 0 ? void 0 : _r$date7.startsWith(monthPrefix);
  }).reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const selKey = selectedDate ? `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}` : null;
  const selRecs = selKey ? dateMap[selKey] || {
    hair: [],
    lash: []
  } : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 20,
      padding: "18px 16px",
      border: `1.5px solid ${C.border2}`,
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
  }, "‹"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: viewYear,
    onChange: e => {
      setViewYear(Number(e.target.value));
      setSelectedDate(null);
    },
    style: {
      fontSize: 16,
      fontWeight: 900,
      color: C.text,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      appearance: "none",
      WebkitAppearance: "none",
      textAlign: "center",
      paddingRight: 4
    }
  }, Array.from({
    length: 10
  }, (_, i) => new Date().getFullYear() - 5 + i).map(y => /*#__PURE__*/React.createElement("option", {
    key: y,
    value: y
  }, y, "年"))), /*#__PURE__*/React.createElement("select", {
    value: viewMonth,
    onChange: e => {
      setViewMonth(Number(e.target.value));
      setSelectedDate(null);
    },
    style: {
      fontSize: 16,
      fontWeight: 900,
      color: C.text,
      background: "none",
      border: "none",
      cursor: "pointer",
      fontFamily: "inherit",
      appearance: "none",
      WebkitAppearance: "none",
      textAlign: "center"
    }
  }, Array.from({
    length: 12
  }, (_, i) => i).map(m => /*#__PURE__*/React.createElement("option", {
    key: m,
    value: m
  }, m + 1, "月")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: C.textLight
    }
  }, "本月 NT$", monthTotal.toLocaleString()), /*#__PURE__*/React.createElement("button", {
    onClick: goToday,
    style: {
      background: C.primaryLight,
      border: "none",
      cursor: "pointer",
      color: C.primary,
      borderRadius: 10,
      padding: "2px 8px",
      fontSize: 10,
      fontWeight: 700
    }
  }, "今天"))), /*#__PURE__*/React.createElement("button", {
    onClick: nextMonth,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 22,
      color: C.textMid,
      padding: "2px 8px"
    }
  }, "›")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      marginBottom: 4
    }
  }, WEEKDAYS.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      textAlign: "center",
      fontSize: 11,
      fontWeight: 700,
      padding: "3px 0",
      color: i === 0 ? C.red : i === 6 ? "#7898c0" : C.textLight
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: "3px 2px"
    }
  }, calDays.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: `e${i}`
    });
    const key = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const rec = dateMap[key];
    const hasHair = (rec === null || rec === void 0 ? void 0 : rec.hair.length) > 0;
    const hasLash = (rec === null || rec === void 0 ? void 0 : rec.lash.length) > 0;
    const isToday = key === todayKey;
    const isSel = d === selectedDate;
    const dow = new Date(key).getDay();
    const hasReminder = false;
    return /*#__PURE__*/React.createElement("button", {
      key: d,
      onClick: () => setSelectedDate(isSel ? null : d),
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
      borderTop: `1px solid ${C.border2}`
    }
  }, [["💇🏻‍♀️ 剪髮", C.primary], ["💫 美睫", "#d4a0c0"]].map(([l, c]) => /*#__PURE__*/React.createElement("div", {
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
  }), l)))), selKey && selRecs && (selRecs.hair.length > 0 || selRecs.lash.length > 0) ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: `1.5px solid ${C.border2}`,
      boxShadow: "0 2px 16px rgba(140,80,30,0.07)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      borderBottom: `1px solid ${C.border2}`,
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
  }, "NT$ ", [...selRecs.hair, ...selRecs.lash].reduce((s, r) => s + (Number(r.cost) || 0), 0).toLocaleString()), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
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
  }, "＋"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, selRecs.hair.map(r => /*#__PURE__*/React.createElement("div", {
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
  }, [...(r.selectedItems || []), ...(r.customItems || [])].map((it, i) => /*#__PURE__*/React.createElement(Tag, {
    key: i,
    label: it
  }))), /*#__PURE__*/React.createElement("div", {
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
    onClick: () => onDeleteHair(r.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 16
    }
  }, "×")))), selRecs.lash.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    label: `💫 ${r.item}`,
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
    onClick: () => onDeleteLash(r.id),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: C.textFaint,
      fontSize: 16
    }
  }, "×")))))) : selKey ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: C.card,
      borderRadius: 18,
      border: `1.5px solid ${C.border2}`,
      padding: "24px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: C.textFaint,
      fontSize: 13,
      marginBottom: 12
    }
  }, fmtDate(selKey), " 還沒有紀錄"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setAddType("hair");
      setShowAddModal(true);
    },
    style: {
      background: C.primaryLight,
      border: `1px solid ${C.border}`,
      color: C.textMid,
      borderRadius: 12,
      padding: "8px 16px",
      fontSize: 13,
      fontWeight: 700,
      cursor: "pointer"
    }
  }, "＋ 新增剪髮"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
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
  }, "＋ 新增美睫"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: C.textFaint,
      padding: "24px 0",
      fontSize: 13
    }
  }, "👆 點選日期查看或新增紀錄"));
}

// ── App Root ──────────────────────────────────────────────────────────────────
function App() {
  const [tab, setTab] = useState("calendar");
  const [hairRecords, setHairRecords] = useState(() => load("hair", []));
  const [lashRecords, setLashRecords] = useState(() => load("lash", []));
  const [reminders, setReminders] = useState(() => load("reminders", []));
  const [salons, setSalons] = useState(() => load("salons", []));
  const [showHairModal, setShowHairModal] = useState(false);
  const [showLashModal, setShowLashModal] = useState(false);
  const [hairDraft, setHairDraft] = useState(emptyHair());
  const [lashDraft, setLashDraft] = useState(emptyLash());
  const [hairFilter, setHairFilter] = useState({
    search: "",
    sort: "date_desc"
  });
  const [lashFilter, setLashFilter] = useState({
    search: "",
    sort: "date_desc"
  });
  const [syncStatus, setSyncStatus] = useState("idle"); // idle | syncing | ok | error
  const [cloudAvail] = useState(CLOUD_OK);

  // On mount: pull from cloud and merge (cloud wins for text, local wins for photos until cloud loaded)
  useEffect(() => {
    if (!cloudAvail) return;
    setSyncStatus("syncing");
    (async () => {
      try {
        const [ch, cl, cr, cs] = await Promise.all([cloudLoad("hair"), cloudLoad("lash"), cloudLoad("reminders"), cloudLoad("salons")]);
        if (ch) {
          const withPhotos = await cloudLoadPhotos(ch);
          setHairRecords(withPhotos);
          save("hair", withPhotos);
        }
        if (cl) {
          const withPhotos = await cloudLoadPhotos(cl);
          setLashRecords(withPhotos);
          save("lash", withPhotos);
        }
        if (cr) {
          setReminders(cr);
          save("reminders", cr);
        }
        if (cs) {
          setSalons(cs);
          save("salons", cs);
        }
        setSyncStatus("ok");
      } catch (e) {
        setSyncStatus("error");
      }
    })();
  }, []);

  // Save to local + cloud on every change
  useEffect(() => {
    save("hair", hairRecords);
    cloudSave("hair", hairRecords);
  }, [hairRecords]);
  useEffect(() => {
    save("lash", lashRecords);
    cloudSave("lash", lashRecords);
  }, [lashRecords]);
  useEffect(() => {
    save("reminders", reminders);
    cloudSave("reminders", reminders);
  }, [reminders]);
  useEffect(() => {
    save("salons", salons);
    cloudSave("salons", salons);
  }, [salons]);
  const saveHair = () => {
    setHairRecords([hairDraft, ...hairRecords]);
    setHairDraft(emptyHair());
    setShowHairModal(false);
  };
  const saveLash = () => {
    setLashRecords([lashDraft, ...lashRecords]);
    setLashDraft(emptyLash());
    setShowLashModal(false);
  };

  // Upcoming reminders badge
  // Upcoming reminders badge
  const urgentCount = reminders.filter(r => daysFrom(r.date) <= 3 && daysFrom(r.date) >= 0).length;
  // Smart suggestions urgent count (daysMin <= 7)
  const smartUrgent = buildSuggestions(hairRecords, lashRecords).filter(s => s.daysMin <= 7).length;
  const totalUrgent = urgentCount + smartUrgent;
  const filteredHair = applyFilter(hairRecords, hairFilter, "hair");
  const filteredLash = applyFilter(lashRecords, lashFilter, "lash");
  const totalHair = hairRecords.reduce((s, r) => s + (Number(r.cost) || 0), 0);
  const totalLash = lashRecords.reduce((s, r) => s + (Number(r.cost) || 0), 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      background: `linear-gradient(150deg,${C.bg} 0%,${C.bg2} 100%)`,
      fontFamily: "'Noto Sans TC','PingFang TC',sans-serif",
      paddingBottom: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: `linear-gradient(135deg,${C.primary} 0%,${C.primary2} 100%)`,
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
  }, "💇🏻‍♀️"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
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
  }, "Hair · Lash · Record"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => exportCSV(hairRecords, lashRecords),
    title: "匯出 CSV",
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
  }, "⬇️"), /*#__PURE__*/React.createElement("div", {
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
    onClick: () => setTab("reminders"),
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
  }, "⏰"), /*#__PURE__*/React.createElement("span", {
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
  }].map(s => /*#__PURE__*/React.createElement("div", {
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
  }, s.count, " 筆"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 14px 0",
      maxWidth: 600,
      margin: "0 auto"
    }
  }, tab === "calendar" && /*#__PURE__*/React.createElement(CalendarView, {
    hairRecords: hairRecords,
    lashRecords: lashRecords,
    salons: salons,
    onAddHair: () => {
      setHairDraft(emptyHair());
      setShowHairModal(true);
    },
    onAddLash: () => {
      setLashDraft(emptyLash());
      setShowLashModal(true);
    },
    onDeleteHair: id => setHairRecords(hairRecords.filter(x => x.id !== id)),
    onDeleteLash: id => setLashRecords(lashRecords.filter(x => x.id !== id))
  }), tab === "hair" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setHairDraft(emptyHair());
      setShowHairModal(true);
    }
  }, "＋ 新增紀錄")), /*#__PURE__*/React.createElement(FilterBar, {
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
  }, "💇🏻‍♀️"), hairRecords.length === 0 ? "還沒有剪髮紀錄，點擊右上角新增！" : "沒有符合條件的紀錄") : (() => {
    // Group by date, preserving sort order
    const grouped = {};
    const dateOrder = [];
    filteredHair.forEach(r => {
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
    }, dateOrder.map(date => /*#__PURE__*/React.createElement(DayGroup, {
      key: date,
      date: date,
      records: grouped[date],
      type: "hair",
      salons: salons,
      onDelete: id => setHairRecords(hairRecords.filter(x => x.id !== id))
    })));
  })()), tab === "lash" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      setLashDraft(emptyLash());
      setShowLashModal(true);
    }
  }, "＋ 新增紀錄")), /*#__PURE__*/React.createElement(FilterBar, {
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
  }, "💫"), lashRecords.length === 0 ? "還沒有美睫紀錄，點擊右上角新增！" : "沒有符合條件的紀錄") : (() => {
    const grouped = {};
    const dateOrder = [];
    filteredLash.forEach(r => {
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
    }, dateOrder.map(date => /*#__PURE__*/React.createElement(DayGroup, {
      key: date,
      date: date,
      records: grouped[date],
      type: "lash",
      salons: salons,
      onDelete: id => setLashRecords(lashRecords.filter(x => x.id !== id))
    })));
  })()), tab === "stats" && /*#__PURE__*/React.createElement(StatsTab, {
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
      borderTop: `1px solid ${C.border2}`,
      display: "flex",
      justifyContent: "space-around",
      padding: "10px 0 28px",
      boxShadow: "0 -4px 20px rgba(140,80,30,0.08)",
      zIndex: 100
    }
  }, [["calendar", "📅", "月曆"], ["hair", "💇🏻‍♀️", "剪髮"], ["lash", "💫", "美睫"], ["stats", "📊", "統計"], ["reminders", "⏰", "提醒"], ["salons", "⭐", "沙龍"]].map(([t, icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t),
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
  }, totalUrgent))))), /*#__PURE__*/React.createElement(Modal, {
    show: showHairModal,
    onClose: () => setShowHairModal(false),
    title: "💇🏻‍♀️ 新增剪髮紀錄"
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
  }, "儲存紀錄")), /*#__PURE__*/React.createElement(Modal, {
    show: showLashModal,
    onClose: () => setShowLashModal(false),
    title: "💫 新增美睫紀錄"
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
  }, "儲存紀錄")));
}

window.App = App;
