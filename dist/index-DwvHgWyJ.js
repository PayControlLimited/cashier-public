"use client";
import T, { memo as ne, useState as F, useRef as g, useCallback as re, useEffect as j } from "react";
function ae(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Oe(e) {
  if (Array.isArray(e)) return e;
}
function je(e, t, r) {
  return (t = Ce(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Me(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, i, u, l = [], s = !0, d = !1;
    try {
      if (i = (r = r.call(e)).next, t !== 0) for (; !(s = (n = i.call(r)).done) && (l.push(n.value), l.length !== t); s = !0) ;
    } catch (M) {
      d = !0, o = M;
    } finally {
      try {
        if (!s && r.return != null && (u = r.return(), Object(u) !== u)) return;
      } finally {
        if (d) throw o;
      }
    }
    return l;
  }
}
function Pe() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ue(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function ce(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? ue(Object(r), !0).forEach(function(n) {
      je(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ue(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Se(e, t) {
  if (e == null) return {};
  var r, n, o = Ee(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function Ee(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Ie(e, t) {
  return Oe(e) || Me(e, t) || Le(e, t) || Pe();
}
function Te(e, t) {
  if (typeof e != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (typeof n != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ce(e) {
  var t = Te(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Le(e, t) {
  if (e) {
    if (typeof e == "string") return ae(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? ae(e, t) : void 0;
  }
}
function Ae(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function le(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function se(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? le(Object(r), !0).forEach(function(n) {
      Ae(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : le(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function $e() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(n) {
    return t.reduceRight(function(o, i) {
      return i(o);
    }, n);
  };
}
function D(e) {
  return function t() {
    for (var r = this, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
        l[s] = arguments[s];
      return t.apply(r, [].concat(o, l));
    };
  };
}
function H(e) {
  return {}.toString.call(e).includes("Object");
}
function De(e) {
  return !Object.keys(e).length;
}
function V(e) {
  return typeof e == "function";
}
function Re(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Ve(e, t) {
  return H(t) || S("changeType"), Object.keys(t).some(function(r) {
    return !Re(e, r);
  }) && S("changeField"), t;
}
function xe(e) {
  V(e) || S("selectorType");
}
function Ne(e) {
  V(e) || H(e) || S("handlerType"), H(e) && Object.values(e).some(function(t) {
    return !V(t);
  }) && S("handlersType");
}
function qe(e) {
  e || S("initialIsRequired"), H(e) || S("initialType"), De(e) && S("initialContent");
}
function ze(e, t) {
  throw new Error(e[t] || e.default);
}
var Ue = {
  initialIsRequired: "initial state is required",
  initialType: "initial state should be an object",
  initialContent: "initial state shouldn't be an empty object",
  handlerType: "handler should be an object or a function",
  handlersType: "all handlers should be a functions",
  selectorType: "selector should be a function",
  changeType: "provided value of changes should be an object",
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  default: "an unknown error accured in `state-local` package"
}, S = D(ze)(Ue), z = {
  changes: Ve,
  selector: xe,
  handler: Ne,
  initial: qe
};
function Fe(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  z.initial(e), z.handler(t);
  var r = {
    current: e
  }, n = D(_e)(r, t), o = D(We)(r), i = D(z.changes)(e), u = D(He)(r);
  function l() {
    var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(M) {
      return M;
    };
    return z.selector(d), d(r.current);
  }
  function s(d) {
    $e(n, o, i, u)(d);
  }
  return [l, s];
}
function He(e, t) {
  return V(t) ? t(e.current) : t;
}
function We(e, t) {
  return e.current = se(se({}, e.current), t), t;
}
function _e(e, t, r) {
  return V(t) ? t(e.current) : Object.keys(r).forEach(function(n) {
    var o;
    return (o = t[n]) === null || o === void 0 ? void 0 : o.call(t, e.current[n]);
  }), r;
}
var Be = {
  create: Fe
}, Ke = {
  paths: {
    vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs"
  }
};
function Ge(e) {
  return function t() {
    for (var r = this, n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return o.length >= e.length ? e.apply(this, o) : function() {
      for (var u = arguments.length, l = new Array(u), s = 0; s < u; s++)
        l[s] = arguments[s];
      return t.apply(r, [].concat(o, l));
    };
  };
}
function Ye(e) {
  return {}.toString.call(e).includes("Object");
}
function Je(e) {
  return e || fe("configIsRequired"), Ye(e) || fe("configType"), e.urls ? (Qe(), {
    paths: {
      vs: e.urls.monacoBase
    }
  }) : e;
}
function Qe() {
  console.warn(de.deprecation);
}
function Xe(e, t) {
  throw new Error(e[t] || e.default);
}
var de = {
  configIsRequired: "the configuration object is required",
  configType: "the configuration object should be an object",
  default: "an unknown error accured in `@monaco-editor/loader` package",
  deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
}, fe = Ge(Xe)(de), Ze = {
  config: Je
}, ke = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return function(o) {
    return r.reduceRight(function(i, u) {
      return u(i);
    }, o);
  };
};
function pe(e, t) {
  return Object.keys(t).forEach(function(r) {
    t[r] instanceof Object && e[r] && Object.assign(t[r], pe(e[r], t[r]));
  }), ce(ce({}, e), t);
}
var et = {
  type: "cancelation",
  msg: "operation is manually canceled"
};
function k(e) {
  var t = !1, r = new Promise(function(n, o) {
    e.then(function(i) {
      return t ? o(et) : n(i);
    }), e.catch(o);
  });
  return r.cancel = function() {
    return t = !0;
  }, r;
}
var tt = ["monaco"], rt = Be.create({
  config: Ke,
  isInitialized: !1,
  resolve: null,
  reject: null,
  monaco: null
}), ge = Ie(rt, 2), x = ge[0], W = ge[1];
function nt(e) {
  var t = Ze.config(e), r = t.monaco, n = Se(t, tt);
  W(function(o) {
    return {
      config: pe(o.config, n),
      monaco: r
    };
  });
}
function ot() {
  var e = x(function(t) {
    var r = t.monaco, n = t.isInitialized, o = t.resolve;
    return {
      monaco: r,
      isInitialized: n,
      resolve: o
    };
  });
  if (!e.isInitialized) {
    if (W({
      isInitialized: !0
    }), e.monaco)
      return e.resolve(e.monaco), k(ee);
    if (window.monaco && window.monaco.editor)
      return he(window.monaco), e.resolve(window.monaco), k(ee);
    ke(it, ut)(ct);
  }
  return k(ee);
}
function it(e) {
  return document.body.appendChild(e);
}
function at(e) {
  var t = document.createElement("script");
  return e && (t.src = e), t;
}
function ut(e) {
  var t = x(function(n) {
    var o = n.config, i = n.reject;
    return {
      config: o,
      reject: i
    };
  }), r = at("".concat(t.config.paths.vs, "/loader.js"));
  return r.onload = function() {
    return e();
  }, r.onerror = t.reject, r;
}
function ct() {
  var e = x(function(r) {
    var n = r.config, o = r.resolve, i = r.reject;
    return {
      config: n,
      resolve: o,
      reject: i
    };
  }), t = window.require;
  t.config(e.config), t(["vs/editor/editor.main"], function(r) {
    var n = r.m || r;
    he(n), e.resolve(n);
  }, function(r) {
    e.reject(r);
  });
}
function he(e) {
  x().monaco || W({
    monaco: e
  });
}
function lt() {
  return x(function(e) {
    var t = e.monaco;
    return t;
  });
}
var ee = new Promise(function(e, t) {
  return W({
    resolve: e,
    reject: t
  });
}), ve = {
  config: nt,
  init: ot,
  __getMonacoInstance: lt
}, st = { wrapper: { display: "flex", position: "relative", textAlign: "initial" }, fullWidth: { width: "100%" }, hide: { display: "none" } }, te = st, ft = { container: { display: "flex", height: "100%", width: "100%", justifyContent: "center", alignItems: "center" } }, dt = ft;
function pt({ children: e }) {
  return T.createElement("div", { style: dt.container }, e);
}
var gt = pt, ht = gt;
function vt({ width: e, height: t, isEditorReady: r, loading: n, _ref: o, className: i, wrapperProps: u }) {
  return T.createElement("section", { style: { ...te.wrapper, width: e, height: t }, ...u }, !r && T.createElement(ht, null, n), T.createElement("div", { ref: o, style: { ...te.fullWidth, ...!r && te.hide }, className: i }));
}
var mt = vt, me = ne(mt);
function bt(e) {
  j(e, []);
}
var be = bt;
function yt(e, t, r = !0) {
  let n = g(!0);
  j(n.current || !r ? () => {
    n.current = !1;
  } : e, t);
}
var w = yt;
function R() {
}
function I(e, t, r, n) {
  return wt(e, n) || Ot(e, t, r, n);
}
function wt(e, t) {
  return e.editor.getModel(ye(e, t));
}
function Ot(e, t, r, n) {
  return e.editor.createModel(t, r, n ? ye(e, n) : void 0);
}
function ye(e, t) {
  return e.Uri.parse(t);
}
function jt({ original: e, modified: t, language: r, originalLanguage: n, modifiedLanguage: o, originalModelPath: i, modifiedModelPath: u, keepCurrentOriginalModel: l = !1, keepCurrentModifiedModel: s = !1, theme: d = "light", loading: M = "Loading...", options: O = {}, height: _ = "100%", width: B = "100%", className: K, wrapperProps: G = {}, beforeMount: Y = R, onMount: J = R }) {
  let [y, C] = F(!1), [L, p] = F(!0), h = g(null), f = g(null), A = g(null), m = g(J), a = g(Y), E = g(!1);
  be(() => {
    let c = ve.init();
    return c.then((v) => (f.current = v) && p(!1)).catch((v) => v?.type !== "cancelation" && console.error("Monaco initialization: error:", v)), () => h.current ? $() : c.cancel();
  }), w(() => {
    if (h.current && f.current) {
      let c = h.current.getOriginalEditor(), v = I(f.current, e || "", n || r || "text", i || "");
      v !== c.getModel() && c.setModel(v);
    }
  }, [i], y), w(() => {
    if (h.current && f.current) {
      let c = h.current.getModifiedEditor(), v = I(f.current, t || "", o || r || "text", u || "");
      v !== c.getModel() && c.setModel(v);
    }
  }, [u], y), w(() => {
    let c = h.current.getModifiedEditor();
    c.getOption(f.current.editor.EditorOption.readOnly) ? c.setValue(t || "") : t !== c.getValue() && (c.executeEdits("", [{ range: c.getModel().getFullModelRange(), text: t || "", forceMoveMarkers: !0 }]), c.pushUndoStop());
  }, [t], y), w(() => {
    h.current?.getModel()?.original.setValue(e || "");
  }, [e], y), w(() => {
    let { original: c, modified: v } = h.current.getModel();
    f.current.editor.setModelLanguage(c, n || r || "text"), f.current.editor.setModelLanguage(v, o || r || "text");
  }, [r, n, o], y), w(() => {
    f.current?.editor.setTheme(d);
  }, [d], y), w(() => {
    h.current?.updateOptions(O);
  }, [O], y);
  let N = re(() => {
    if (!f.current) return;
    a.current(f.current);
    let c = I(f.current, e || "", n || r || "text", i || ""), v = I(f.current, t || "", o || r || "text", u || "");
    h.current?.setModel({ original: c, modified: v });
  }, [r, t, o, e, n, i, u]), q = re(() => {
    !E.current && A.current && (h.current = f.current.editor.createDiffEditor(A.current, { automaticLayout: !0, ...O }), N(), f.current?.editor.setTheme(d), C(!0), E.current = !0);
  }, [O, d, N]);
  j(() => {
    y && m.current(h.current, f.current);
  }, [y]), j(() => {
    !L && !y && q();
  }, [L, y, q]);
  function $() {
    let c = h.current?.getModel();
    l || c?.original?.dispose(), s || c?.modified?.dispose(), h.current?.dispose();
  }
  return T.createElement(me, { width: B, height: _, isEditorReady: y, loading: M, _ref: A, className: K, wrapperProps: G });
}
var Mt = jt;
ne(Mt);
function Pt(e) {
  let t = g();
  return j(() => {
    t.current = e;
  }, [e]), t.current;
}
var St = Pt, U = /* @__PURE__ */ new Map();
function Et({ defaultValue: e, defaultLanguage: t, defaultPath: r, value: n, language: o, path: i, theme: u = "light", line: l, loading: s = "Loading...", options: d = {}, overrideServices: M = {}, saveViewState: O = !0, keepCurrentModel: _ = !1, width: B = "100%", height: K = "100%", className: G, wrapperProps: Y = {}, beforeMount: J = R, onMount: y = R, onChange: C, onValidate: L = R }) {
  let [p, h] = F(!1), [f, A] = F(!0), m = g(null), a = g(null), E = g(null), N = g(y), q = g(J), $ = g(), c = g(n), v = St(i), oe = g(!1), Q = g(!1);
  be(() => {
    let b = ve.init();
    return b.then((P) => (m.current = P) && A(!1)).catch((P) => P?.type !== "cancelation" && console.error("Monaco initialization: error:", P)), () => a.current ? we() : b.cancel();
  }), w(() => {
    let b = I(m.current, e || n || "", t || o || "", i || r || "");
    b !== a.current?.getModel() && (O && U.set(v, a.current?.saveViewState()), a.current?.setModel(b), O && a.current?.restoreViewState(U.get(i)));
  }, [i], p), w(() => {
    a.current?.updateOptions(d);
  }, [d], p), w(() => {
    !a.current || n === void 0 || (a.current.getOption(m.current.editor.EditorOption.readOnly) ? a.current.setValue(n) : n !== a.current.getValue() && (Q.current = !0, a.current.executeEdits("", [{ range: a.current.getModel().getFullModelRange(), text: n, forceMoveMarkers: !0 }]), a.current.pushUndoStop(), Q.current = !1));
  }, [n], p), w(() => {
    let b = a.current?.getModel();
    b && o && m.current?.editor.setModelLanguage(b, o);
  }, [o], p), w(() => {
    l !== void 0 && a.current?.revealLine(l);
  }, [l], p), w(() => {
    m.current?.editor.setTheme(u);
  }, [u], p);
  let ie = re(() => {
    if (!(!E.current || !m.current) && !oe.current) {
      q.current(m.current);
      let b = i || r, P = I(m.current, n || e || "", t || o || "", b || "");
      a.current = m.current?.editor.create(E.current, { model: P, automaticLayout: !0, ...d }, M), O && a.current.restoreViewState(U.get(b)), m.current.editor.setTheme(u), l !== void 0 && a.current.revealLine(l), h(!0), oe.current = !0;
    }
  }, [e, t, r, n, o, i, d, M, O, u, l]);
  j(() => {
    p && N.current(a.current, m.current);
  }, [p]), j(() => {
    !f && !p && ie();
  }, [f, p, ie]), c.current = n, j(() => {
    p && C && ($.current?.dispose(), $.current = a.current?.onDidChangeModelContent((b) => {
      Q.current || C(a.current.getValue(), b);
    }));
  }, [p, C]), j(() => {
    if (p) {
      let b = m.current.editor.onDidChangeMarkers((P) => {
        let X = a.current.getModel()?.uri;
        if (X && P.find((Z) => Z.path === X.path)) {
          let Z = m.current.editor.getModelMarkers({ resource: X });
          L?.(Z);
        }
      });
      return () => {
        b?.dispose();
      };
    }
    return () => {
    };
  }, [p, L]);
  function we() {
    $.current?.dispose(), _ ? O && U.set(i, a.current.saveViewState()) : a.current.getModel()?.dispose(), a.current.dispose();
  }
  return T.createElement(me, { width: B, height: K, isEditorReady: p, loading: s, _ref: E, className: G, wrapperProps: Y });
}
var It = Et, Tt = ne(It), Lt = Tt;
export {
  Tt as Editor,
  Lt as default,
  ve as loader
};
