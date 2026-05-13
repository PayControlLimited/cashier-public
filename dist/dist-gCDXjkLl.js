import e, { memo as t, useCallback as n, useEffect as r, useRef as i, useState as a } from "react";
//#region ../../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js
function o(e, t) {
	(t == null || t > e.length) && (t = e.length);
	for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
	return r;
}
function s(e) {
	if (Array.isArray(e)) return e;
}
function c(e, t, n) {
	return (t = _(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function l(e, t) {
	var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
	if (n != null) {
		var r, i, a, o, s = [], c = !0, l = !1;
		try {
			if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0);
		} catch (e) {
			l = !0, i = e;
		} finally {
			try {
				if (!c && n.return != null && (o = n.return(), Object(o) !== o)) return;
			} finally {
				if (l) throw i;
			}
		}
		return s;
	}
}
function u() {
	throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function d(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function f(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? d(Object(n), !0).forEach(function(t) {
			c(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function p(e, t) {
	if (e == null) return {};
	var n, r, i = m(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
function m(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.indexOf(r) !== -1) continue;
		n[r] = e[r];
	}
	return n;
}
function h(e, t) {
	return s(e) || l(e, t) || v(e, t) || u();
}
function g(e, t) {
	if (typeof e != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t);
		if (typeof r != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
function _(e) {
	var t = g(e, "string");
	return typeof t == "symbol" ? t : t + "";
}
function v(e, t) {
	if (e) {
		if (typeof e == "string") return o(e, t);
		var n = {}.toString.call(e).slice(8, -1);
		return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
	}
}
//#endregion
//#region ../../node_modules/state-local/lib/es/state-local.js
function y(e, t, n) {
	return t in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
function b(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function x(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? b(Object(n), !0).forEach(function(t) {
			y(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
function S() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
}
function C(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
function w(e) {
	return {}.toString.call(e).includes("Object");
}
function T(e) {
	return !Object.keys(e).length;
}
function E(e) {
	return typeof e == "function";
}
function D(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function O(e, t) {
	return w(t) || N("changeType"), Object.keys(t).some(function(t) {
		return !D(e, t);
	}) && N("changeField"), t;
}
function k(e) {
	E(e) || N("selectorType");
}
function A(e) {
	E(e) || w(e) || N("handlerType"), w(e) && Object.values(e).some(function(e) {
		return !E(e);
	}) && N("handlersType");
}
function j(e) {
	e || N("initialIsRequired"), w(e) || N("initialType"), T(e) && N("initialContent");
}
function M(e, t) {
	throw Error(e[t] || e.default);
}
var N = C(M)({
	initialIsRequired: "initial state is required",
	initialType: "initial state should be an object",
	initialContent: "initial state shouldn't be an empty object",
	handlerType: "handler should be an object or a function",
	handlersType: "all handlers should be a functions",
	selectorType: "selector should be a function",
	changeType: "provided value of changes should be an object",
	changeField: "it seams you want to change a field in the state which is not specified in the \"initial\" state",
	default: "an unknown error accured in `state-local` package"
}), P = {
	changes: O,
	selector: k,
	handler: A,
	initial: j
};
function F(e) {
	var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
	P.initial(e), P.handler(t);
	var n = { current: e }, r = C(R)(n, t), i = C(L)(n), a = C(P.changes)(e), o = C(I)(n);
	function s() {
		var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(e) {
			return e;
		};
		return P.selector(e), e(n.current);
	}
	function c(e) {
		S(r, i, a, o)(e);
	}
	return [s, c];
}
function I(e, t) {
	return E(t) ? t(e.current) : t;
}
function L(e, t) {
	return e.current = x(x({}, e.current), t), t;
}
function R(e, t, n) {
	return E(t) ? t(e.current) : Object.keys(n).forEach(function(n) {
		return t[n]?.call(t, e.current[n]);
	}), n;
}
var z = { create: F }, B = { paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.55.1/min/vs" } };
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/utils/curry.js
function V(e) {
	return function t() {
		var n = this, r = [...arguments];
		return r.length >= e.length ? e.apply(this, r) : function() {
			var e = [...arguments];
			return t.apply(n, [].concat(r, e));
		};
	};
}
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/utils/isObject.js
function ee(e) {
	return {}.toString.call(e).includes("Object");
}
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/validators/index.js
function te(e) {
	return e || ae("configIsRequired"), ee(e) || ae("configType"), e.urls ? (ne(), { paths: { vs: e.urls.monacoBase } }) : e;
}
function ne() {
	console.warn(ie.deprecation);
}
function re(e, t) {
	throw Error(e[t] || e.default);
}
var ie = {
	configIsRequired: "the configuration object is required",
	configType: "the configuration object should be an object",
	default: "an unknown error accured in `@monaco-editor/loader` package",
	deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
}, ae = V(re)(ie), oe = { config: te }, se = function() {
	var e = [...arguments];
	return function(t) {
		return e.reduceRight(function(e, t) {
			return t(e);
		}, t);
	};
};
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js
function H(e, t) {
	return Object.keys(t).forEach(function(n) {
		t[n] instanceof Object && e[n] && Object.assign(t[n], H(e[n], t[n]));
	}), f(f({}, e), t);
}
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js
var ce = {
	type: "cancelation",
	msg: "operation is manually canceled"
};
function U(e) {
	var t = !1, n = new Promise(function(n, r) {
		e.then(function(e) {
			return t ? r(ce) : n(e);
		}), e.catch(r);
	});
	return n.cancel = function() {
		return t = !0;
	}, n;
}
//#endregion
//#region ../../node_modules/@monaco-editor/loader/lib/es/loader/index.js
var le = ["monaco"], W = h(z.create({
	config: B,
	isInitialized: !1,
	resolve: null,
	reject: null,
	monaco: null
}), 2), G = W[0], K = W[1];
function ue(e) {
	var t = oe.config(e), n = t.monaco, r = p(t, le);
	K(function(e) {
		return {
			config: H(e.config, r),
			monaco: n
		};
	});
}
function de() {
	var e = G(function(e) {
		return {
			monaco: e.monaco,
			isInitialized: e.isInitialized,
			resolve: e.resolve
		};
	});
	if (!e.isInitialized) {
		if (K({ isInitialized: !0 }), e.monaco) return e.resolve(e.monaco), U(q);
		if (window.monaco && window.monaco.editor) return ge(window.monaco), e.resolve(window.monaco), U(q);
		se(fe, me)(he);
	}
	return U(q);
}
function fe(e) {
	return document.body.appendChild(e);
}
function pe(e) {
	var t = document.createElement("script");
	return e && (t.src = e), t;
}
function me(e) {
	var t = G(function(e) {
		return {
			config: e.config,
			reject: e.reject
		};
	}), n = pe(`${t.config.paths.vs}/loader.js`);
	return n.onload = function() {
		return e();
	}, n.onerror = t.reject, n;
}
function he() {
	var e = G(function(e) {
		return {
			config: e.config,
			resolve: e.resolve,
			reject: e.reject
		};
	}), t = window.require;
	t.config(e.config), t(["vs/editor/editor.main"], function(t) {
		var n = t.m || t;
		ge(n), e.resolve(n);
	}, function(t) {
		e.reject(t);
	});
}
function ge(e) {
	G().monaco || K({ monaco: e });
}
function _e() {
	return G(function(e) {
		return e.monaco;
	});
}
var q = new Promise(function(e, t) {
	return K({
		resolve: e,
		reject: t
	});
}), ve = {
	config: ue,
	init: de,
	__getMonacoInstance: _e
}, J = {
	wrapper: {
		display: "flex",
		position: "relative",
		textAlign: "initial"
	},
	fullWidth: { width: "100%" },
	hide: { display: "none" }
}, ye = { container: {
	display: "flex",
	height: "100%",
	width: "100%",
	justifyContent: "center",
	alignItems: "center"
} };
function be({ children: t }) {
	return e.createElement("div", { style: ye.container }, t);
}
var xe = be;
function Se({ width: t, height: n, isEditorReady: r, loading: i, _ref: a, className: o, wrapperProps: s }) {
	return e.createElement("section", {
		style: {
			...J.wrapper,
			width: t,
			height: n
		},
		...s
	}, !r && e.createElement(xe, null, i), e.createElement("div", {
		ref: a,
		style: {
			...J.fullWidth,
			...!r && J.hide
		},
		className: o
	}));
}
var Ce = t(Se);
function we(e) {
	r(e, []);
}
var Te = we;
function Ee(e, t, n = !0) {
	let a = i(!0);
	r(a.current || !n ? () => {
		a.current = !1;
	} : e, t);
}
var Y = Ee;
function X() {}
function Z(e, t, n, r) {
	return De(e, r) || Oe(e, t, n, r);
}
function De(e, t) {
	return e.editor.getModel(Q(e, t));
}
function Oe(e, t, n, r) {
	return e.editor.createModel(t, n, r ? Q(e, r) : void 0);
}
function Q(e, t) {
	return e.Uri.parse(t);
}
function ke({ original: t, modified: o, language: s, originalLanguage: c, modifiedLanguage: l, originalModelPath: u, modifiedModelPath: d, keepCurrentOriginalModel: f = !1, keepCurrentModifiedModel: p = !1, theme: m = "light", loading: h = "Loading...", options: g = {}, height: _ = "100%", width: v = "100%", className: y, wrapperProps: b = {}, beforeMount: x = X, onMount: S = X }) {
	let [C, w] = a(!1), [T, E] = a(!0), D = i(null), O = i(null), k = i(null), A = i(S), j = i(x), M = i(!1);
	Te(() => {
		let e = ve.init();
		return e.then((e) => (O.current = e) && E(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => D.current ? F() : e.cancel();
	}), Y(() => {
		if (D.current && O.current) {
			let e = D.current.getOriginalEditor(), n = Z(O.current, t || "", c || s || "text", u || "");
			n !== e.getModel() && e.setModel(n);
		}
	}, [u], C), Y(() => {
		if (D.current && O.current) {
			let e = D.current.getModifiedEditor(), t = Z(O.current, o || "", l || s || "text", d || "");
			t !== e.getModel() && e.setModel(t);
		}
	}, [d], C), Y(() => {
		let e = D.current.getModifiedEditor();
		e.getOption(O.current.editor.EditorOption.readOnly) ? e.setValue(o || "") : o !== e.getValue() && (e.executeEdits("", [{
			range: e.getModel().getFullModelRange(),
			text: o || "",
			forceMoveMarkers: !0
		}]), e.pushUndoStop());
	}, [o], C), Y(() => {
		D.current?.getModel()?.original.setValue(t || "");
	}, [t], C), Y(() => {
		let { original: e, modified: t } = D.current.getModel();
		O.current.editor.setModelLanguage(e, c || s || "text"), O.current.editor.setModelLanguage(t, l || s || "text");
	}, [
		s,
		c,
		l
	], C), Y(() => {
		O.current?.editor.setTheme(m);
	}, [m], C), Y(() => {
		D.current?.updateOptions(g);
	}, [g], C);
	let N = n(() => {
		if (!O.current) return;
		j.current(O.current);
		let e = Z(O.current, t || "", c || s || "text", u || ""), n = Z(O.current, o || "", l || s || "text", d || "");
		D.current?.setModel({
			original: e,
			modified: n
		});
	}, [
		s,
		o,
		l,
		t,
		c,
		u,
		d
	]), P = n(() => {
		!M.current && k.current && (D.current = O.current.editor.createDiffEditor(k.current, {
			automaticLayout: !0,
			...g
		}), N(), O.current?.editor.setTheme(m), w(!0), M.current = !0);
	}, [
		g,
		m,
		N
	]);
	r(() => {
		C && A.current(D.current, O.current);
	}, [C]), r(() => {
		!T && !C && P();
	}, [
		T,
		C,
		P
	]);
	function F() {
		let e = D.current?.getModel();
		f || e?.original?.dispose(), p || e?.modified?.dispose(), D.current?.dispose();
	}
	return e.createElement(Ce, {
		width: v,
		height: _,
		isEditorReady: C,
		loading: h,
		_ref: k,
		className: y,
		wrapperProps: b
	});
}
t(ke);
function Ae(e) {
	let t = i();
	return r(() => {
		t.current = e;
	}, [e]), t.current;
}
var je = Ae, $ = /* @__PURE__ */ new Map();
function Me({ defaultValue: t, defaultLanguage: o, defaultPath: s, value: c, language: l, path: u, theme: d = "light", line: f, loading: p = "Loading...", options: m = {}, overrideServices: h = {}, saveViewState: g = !0, keepCurrentModel: _ = !1, width: v = "100%", height: y = "100%", className: b, wrapperProps: x = {}, beforeMount: S = X, onMount: C = X, onChange: w, onValidate: T = X }) {
	let [E, D] = a(!1), [O, k] = a(!0), A = i(null), j = i(null), M = i(null), N = i(C), P = i(S), F = i(), I = i(c), L = je(u), R = i(!1), z = i(!1);
	Te(() => {
		let e = ve.init();
		return e.then((e) => (A.current = e) && k(!1)).catch((e) => e?.type !== "cancelation" && console.error("Monaco initialization: error:", e)), () => j.current ? V() : e.cancel();
	}), Y(() => {
		let e = Z(A.current, t || c || "", o || l || "", u || s || "");
		e !== j.current?.getModel() && (g && $.set(L, j.current?.saveViewState()), j.current?.setModel(e), g && j.current?.restoreViewState($.get(u)));
	}, [u], E), Y(() => {
		j.current?.updateOptions(m);
	}, [m], E), Y(() => {
		!j.current || c === void 0 || (j.current.getOption(A.current.editor.EditorOption.readOnly) ? j.current.setValue(c) : c !== j.current.getValue() && (z.current = !0, j.current.executeEdits("", [{
			range: j.current.getModel().getFullModelRange(),
			text: c,
			forceMoveMarkers: !0
		}]), j.current.pushUndoStop(), z.current = !1));
	}, [c], E), Y(() => {
		let e = j.current?.getModel();
		e && l && A.current?.editor.setModelLanguage(e, l);
	}, [l], E), Y(() => {
		f !== void 0 && j.current?.revealLine(f);
	}, [f], E), Y(() => {
		A.current?.editor.setTheme(d);
	}, [d], E);
	let B = n(() => {
		if (!(!M.current || !A.current) && !R.current) {
			P.current(A.current);
			let e = u || s, n = Z(A.current, c || t || "", o || l || "", e || "");
			j.current = A.current?.editor.create(M.current, {
				model: n,
				automaticLayout: !0,
				...m
			}, h), g && j.current.restoreViewState($.get(e)), A.current.editor.setTheme(d), f !== void 0 && j.current.revealLine(f), D(!0), R.current = !0;
		}
	}, [
		t,
		o,
		s,
		c,
		l,
		u,
		m,
		h,
		g,
		d,
		f
	]);
	r(() => {
		E && N.current(j.current, A.current);
	}, [E]), r(() => {
		!O && !E && B();
	}, [
		O,
		E,
		B
	]), I.current = c, r(() => {
		E && w && (F.current?.dispose(), F.current = j.current?.onDidChangeModelContent((e) => {
			z.current || w(j.current.getValue(), e);
		}));
	}, [E, w]), r(() => {
		if (E) {
			let e = A.current.editor.onDidChangeMarkers((e) => {
				let t = j.current.getModel()?.uri;
				if (t && e.find((e) => e.path === t.path)) {
					let e = A.current.editor.getModelMarkers({ resource: t });
					T?.(e);
				}
			});
			return () => {
				e?.dispose();
			};
		}
		return () => {};
	}, [E, T]);
	function V() {
		F.current?.dispose(), _ ? g && $.set(u, j.current.saveViewState()) : j.current.getModel()?.dispose(), j.current.dispose();
	}
	return e.createElement(Ce, {
		width: v,
		height: y,
		isEditorReady: E,
		loading: p,
		_ref: M,
		className: b,
		wrapperProps: x
	});
}
var Ne = t(Me);
//#endregion
export { Ne as default };
