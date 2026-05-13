import { a as e, i as t, n, r } from "./defaults-Db9f81OM.js";
import * as i from "react";
import a, { Children as o, Component as s, Fragment as c, cloneElement as l, createContext as u, createElement as d, forwardRef as f, isValidElement as p, lazy as m, startTransition as h, useCallback as g, useContext as _, useEffect as v, useId as y, useImperativeHandle as b, useLayoutEffect as x, useMemo as S, useReducer as C, useRef as w, useState as T, useSyncExternalStore as E } from "react";
import { Fragment as D, jsx as O, jsxs as k } from "react/jsx-runtime";
import { createPortal as ee } from "react-dom";
//#region \0rolldown/runtime.js
var A = Object.create, j = Object.defineProperty, M = Object.getOwnPropertyDescriptor, N = Object.getOwnPropertyNames, P = Object.getPrototypeOf, F = Object.prototype.hasOwnProperty, I = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), L = (e, t) => {
	let n = {};
	for (var r in e) j(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || j(n, Symbol.toStringTag, { value: "Module" }), n;
}, R = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = N(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !F.call(e, s) && s !== n && j(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = M(t, s)) || r.enumerable
	});
	return e;
}, z = (e, t, n) => (n = e == null ? {} : A(P(e)), R(t || !e || !e.__esModule ? j(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), B = i.use, V = typeof window < "u" ? i.useLayoutEffect : i.useEffect;
function H(e) {
	let t = i.useRef({
		value: e,
		prev: null
	}), n = t.current.value;
	return e !== n && (t.current = {
		value: e,
		prev: n
	}), t.current.prev;
}
function te(e, t, n = {}, r = {}) {
	i.useEffect(() => {
		if (!e.current || r.disabled || typeof IntersectionObserver != "function") return;
		let i = new IntersectionObserver(([e]) => {
			t(e);
		}, n);
		return i.observe(e.current), () => {
			i.disconnect();
		};
	}, [
		t,
		n,
		r.disabled,
		e
	]);
}
function U(e) {
	let t = i.useRef(null);
	return i.useImperativeHandle(e, () => t.current, []), t;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/routerContext.js
var W = i.createContext(null);
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouter.js
function G(e) {
	let t = i.useContext(W);
	return process.env.NODE_ENV !== "production" && (e?.warn ?? !0) && !t && console.warn("Warning: useRouter must be used inside a <RouterProvider> component!"), t;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useNavigate.js
function K(e) {
	let t = G();
	return i.useCallback((n) => t.navigate({
		...n,
		from: n.from ?? e?.from
	}), [e?.from, t]);
}
//#endregion
//#region ../../node_modules/tailwind-merge/dist/bundle-mjs.mjs
var ne = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, re = (e, t) => ({
	classGroupId: e,
	validator: t
}), ie = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), ae = "-", oe = [], se = "arbitrary..", ce = (e) => {
	let t = de(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ue(e);
			let n = e.split(ae);
			return le(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? ne(i, t) : t : i || oe;
			}
			return n[e] || oe;
		}
	};
}, le = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = le(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(ae) : e.slice(t).join(ae), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ue = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? se + r : void 0;
})(), de = (e) => {
	let { theme: t, classGroups: n } = e;
	return fe(n, t);
}, fe = (e, t) => {
	let n = ie();
	for (let r in e) {
		let i = e[r];
		q(i, n, r, t);
	}
	return n;
}, q = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		pe(i, t, n, r);
	}
}, pe = (e, t, n, r) => {
	if (typeof e == "string") {
		me(e, t, n);
		return;
	}
	if (typeof e == "function") {
		J(e, t, n, r);
		return;
	}
	he(e, t, n, r);
}, me = (e, t, n) => {
	let r = e === "" ? t : ge(t, e);
	r.classGroupId = n;
}, J = (e, t, n, r) => {
	if (_e(e)) {
		q(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(re(n, e));
}, he = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		q(o, ge(t, a), n, r);
	}
}, ge = (e, t) => {
	let n = e, r = t.split(ae), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = ie(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, _e = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, ve = (e) => {
	if (e < 1) return {
		get: () => void 0,
		set: () => {}
	};
	let t = 0, n = Object.create(null), r = Object.create(null), i = (i, a) => {
		n[i] = a, t++, t > e && (t = 0, r = n, n = Object.create(null));
	};
	return {
		get(e) {
			let t = n[e];
			if (t !== void 0) return t;
			if ((t = r[e]) !== void 0) return i(e, t), t;
		},
		set(e, t) {
			e in n ? n[e] = t : i(e, t);
		}
	};
}, ye = "!", be = ":", xe = [], Se = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), Ce = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === be) {
					t.push(e.slice(i, s)), i = s + 1;
					continue;
				}
				if (o === "/") {
					a = s;
					continue;
				}
			}
			o === "[" ? n++ : o === "]" ? n-- : o === "(" ? r++ : o === ")" && r--;
		}
		let s = t.length === 0 ? e : e.slice(i), c = s, l = !1;
		s.endsWith(ye) ? (c = s.slice(0, -1), l = !0) : s.startsWith(ye) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return Se(t, l, c, u);
	};
	if (t) {
		let e = t + be, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : Se(xe, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, we = (e) => {
	let t = /* @__PURE__ */ new Map();
	return e.orderSensitiveModifiers.forEach((e, n) => {
		t.set(e, 1e6 + n);
	}), (e) => {
		let n = [], r = [];
		for (let i = 0; i < e.length; i++) {
			let a = e[i], o = a[0] === "[", s = t.has(a);
			o || s ? (r.length > 0 && (r.sort(), n.push(...r), r = []), n.push(a)) : r.push(a);
		}
		return r.length > 0 && (r.sort(), n.push(...r)), n;
	};
}, Te = (e) => ({
	cache: ve(e.cacheSize),
	parseClassName: Ce(e),
	sortModifiers: we(e),
	...ce(e)
}), Ee = /\s+/, De = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(Ee), c = "";
	for (let e = s.length - 1; e >= 0; --e) {
		let t = s[e], { isExternal: l, modifiers: u, hasImportantModifier: d, baseClassName: f, maybePostfixModifierPosition: p } = n(t);
		if (l) {
			c = t + (c.length > 0 ? " " + c : c);
			continue;
		}
		let m = !!p, h = r(m ? f.substring(0, p) : f);
		if (!h) {
			if (!m) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			if (h = r(f), !h) {
				c = t + (c.length > 0 ? " " + c : c);
				continue;
			}
			m = !1;
		}
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + ye : g, v = _ + h;
		if (o.indexOf(v) > -1) continue;
		o.push(v);
		let y = i(h, m);
		for (let e = 0; e < y.length; ++e) {
			let t = y[e];
			o.push(_ + t);
		}
		c = t + (c.length > 0 ? " " + c : c);
	}
	return c;
}, Y = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Oe(n)) && (i && (i += " "), i += r);
	return i;
}, Oe = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Oe(e[r])) && (n && (n += " "), n += t);
	return n;
}, ke = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Te(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = De(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(Y(...e));
}, Ae = [], je = (e) => {
	let t = (t) => t[e] || Ae;
	return t.isThemeGetter = !0, t;
}, Me = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ne = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Pe = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Fe = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ie = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Le = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Re = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ze = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Be = (e) => Pe.test(e), Ve = (e) => !!e && !Number.isNaN(Number(e)), He = (e) => !!e && Number.isInteger(Number(e)), Ue = (e) => e.endsWith("%") && Ve(e.slice(0, -1)), We = (e) => Fe.test(e), Ge = () => !0, Ke = (e) => Ie.test(e) && !Le.test(e), qe = () => !1, Je = (e) => Re.test(e), Ye = (e) => ze.test(e), Xe = (e) => !X(e) && !Z(e), Ze = (e) => ft(e, gt, qe), X = (e) => Me.test(e), Qe = (e) => ft(e, _t, Ke), $e = (e) => ft(e, vt, Ve), et = (e) => ft(e, bt, Ge), tt = (e) => ft(e, yt, qe), nt = (e) => ft(e, mt, qe), rt = (e) => ft(e, ht, Ye), it = (e) => ft(e, xt, Je), Z = (e) => Ne.test(e), at = (e) => pt(e, _t), ot = (e) => pt(e, yt), st = (e) => pt(e, mt), ct = (e) => pt(e, gt), lt = (e) => pt(e, ht), ut = (e) => pt(e, xt, !0), dt = (e) => pt(e, bt, !0), ft = (e, t, n) => {
	let r = Me.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, pt = (e, t, n = !1) => {
	let r = Ne.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, mt = (e) => e === "position" || e === "percentage", ht = (e) => e === "image" || e === "url", gt = (e) => e === "length" || e === "size" || e === "bg-size", _t = (e) => e === "length", vt = (e) => e === "number", yt = (e) => e === "family-name", bt = (e) => e === "number" || e === "weight", xt = (e) => e === "shadow", Q = /* @__PURE__ */ ke(() => {
	let e = je("color"), t = je("font"), n = je("text"), r = je("font-weight"), i = je("tracking"), a = je("leading"), o = je("breakpoint"), s = je("container"), c = je("spacing"), l = je("radius"), u = je("shadow"), d = je("inset-shadow"), f = je("text-shadow"), p = je("drop-shadow"), m = je("blur"), h = je("perspective"), g = je("aspect"), _ = je("ease"), v = je("animate"), y = () => [
		"auto",
		"avoid",
		"all",
		"avoid-page",
		"page",
		"left",
		"right",
		"column"
	], b = () => [
		"center",
		"top",
		"bottom",
		"left",
		"right",
		"top-left",
		"left-top",
		"top-right",
		"right-top",
		"bottom-right",
		"right-bottom",
		"bottom-left",
		"left-bottom"
	], x = () => [
		...b(),
		Z,
		X
	], S = () => [
		"auto",
		"hidden",
		"clip",
		"visible",
		"scroll"
	], C = () => [
		"auto",
		"contain",
		"none"
	], w = () => [
		Z,
		X,
		c
	], T = () => [
		Be,
		"full",
		"auto",
		...w()
	], E = () => [
		He,
		"none",
		"subgrid",
		Z,
		X
	], D = () => [
		"auto",
		{ span: [
			"full",
			He,
			Z,
			X
		] },
		He,
		Z,
		X
	], O = () => [
		He,
		"auto",
		Z,
		X
	], k = () => [
		"auto",
		"min",
		"max",
		"fr",
		Z,
		X
	], ee = () => [
		"start",
		"end",
		"center",
		"between",
		"around",
		"evenly",
		"stretch",
		"baseline",
		"center-safe",
		"end-safe"
	], A = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], j = () => ["auto", ...w()], M = () => [
		Be,
		"auto",
		"full",
		"dvw",
		"dvh",
		"lvw",
		"lvh",
		"svw",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], N = () => [
		Be,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], P = () => [
		Be,
		"screen",
		"full",
		"lh",
		"dvh",
		"lvh",
		"svh",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		e,
		Z,
		X
	], I = () => [
		...b(),
		st,
		nt,
		{ position: [Z, X] }
	], L = () => ["no-repeat", { repeat: [
		"",
		"x",
		"y",
		"space",
		"round"
	] }], R = () => [
		"auto",
		"cover",
		"contain",
		ct,
		Ze,
		{ size: [Z, X] }
	], z = () => [
		Ue,
		at,
		Qe
	], B = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], V = () => [
		"",
		Ve,
		at,
		Qe
	], H = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], te = () => [
		"normal",
		"multiply",
		"screen",
		"overlay",
		"darken",
		"lighten",
		"color-dodge",
		"color-burn",
		"hard-light",
		"soft-light",
		"difference",
		"exclusion",
		"hue",
		"saturation",
		"color",
		"luminosity"
	], U = () => [
		Ve,
		Ue,
		st,
		nt
	], W = () => [
		"",
		"none",
		m,
		Z,
		X
	], G = () => [
		"none",
		Ve,
		Z,
		X
	], K = () => [
		"none",
		Ve,
		Z,
		X
	], ne = () => [
		Ve,
		Z,
		X
	], re = () => [
		Be,
		"full",
		...w()
	];
	return {
		cacheSize: 500,
		theme: {
			animate: [
				"spin",
				"ping",
				"pulse",
				"bounce"
			],
			aspect: ["video"],
			blur: [We],
			breakpoint: [We],
			color: [Ge],
			container: [We],
			"drop-shadow": [We],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Xe],
			"font-weight": [
				"thin",
				"extralight",
				"light",
				"normal",
				"medium",
				"semibold",
				"bold",
				"extrabold",
				"black"
			],
			"inset-shadow": [We],
			leading: [
				"none",
				"tight",
				"snug",
				"normal",
				"relaxed",
				"loose"
			],
			perspective: [
				"dramatic",
				"near",
				"normal",
				"midrange",
				"distant",
				"none"
			],
			radius: [We],
			shadow: [We],
			spacing: ["px", Ve],
			text: [We],
			"text-shadow": [We],
			tracking: [
				"tighter",
				"tight",
				"normal",
				"wide",
				"wider",
				"widest"
			]
		},
		classGroups: {
			aspect: [{ aspect: [
				"auto",
				"square",
				Be,
				X,
				Z,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				Ve,
				X,
				Z,
				s
			] }],
			"break-after": [{ "break-after": y() }],
			"break-before": [{ "break-before": y() }],
			"break-inside": [{ "break-inside": [
				"auto",
				"avoid",
				"avoid-page",
				"avoid-column"
			] }],
			"box-decoration": [{ "box-decoration": ["slice", "clone"] }],
			box: [{ box: ["border", "content"] }],
			display: [
				"block",
				"inline-block",
				"inline",
				"flex",
				"inline-flex",
				"table",
				"inline-table",
				"table-caption",
				"table-cell",
				"table-column",
				"table-column-group",
				"table-footer-group",
				"table-header-group",
				"table-row-group",
				"table-row",
				"flow-root",
				"grid",
				"inline-grid",
				"contents",
				"list-item",
				"hidden"
			],
			sr: ["sr-only", "not-sr-only"],
			float: [{ float: [
				"right",
				"left",
				"none",
				"start",
				"end"
			] }],
			clear: [{ clear: [
				"left",
				"right",
				"both",
				"none",
				"start",
				"end"
			] }],
			isolation: ["isolate", "isolation-auto"],
			"object-fit": [{ object: [
				"contain",
				"cover",
				"fill",
				"none",
				"scale-down"
			] }],
			"object-position": [{ object: x() }],
			overflow: [{ overflow: S() }],
			"overflow-x": [{ "overflow-x": S() }],
			"overflow-y": [{ "overflow-y": S() }],
			overscroll: [{ overscroll: C() }],
			"overscroll-x": [{ "overscroll-x": C() }],
			"overscroll-y": [{ "overscroll-y": C() }],
			position: [
				"static",
				"fixed",
				"absolute",
				"relative",
				"sticky"
			],
			inset: [{ inset: T() }],
			"inset-x": [{ "inset-x": T() }],
			"inset-y": [{ "inset-y": T() }],
			start: [{
				"inset-s": T(),
				start: T()
			}],
			end: [{
				"inset-e": T(),
				end: T()
			}],
			"inset-bs": [{ "inset-bs": T() }],
			"inset-be": [{ "inset-be": T() }],
			top: [{ top: T() }],
			right: [{ right: T() }],
			bottom: [{ bottom: T() }],
			left: [{ left: T() }],
			visibility: [
				"visible",
				"invisible",
				"collapse"
			],
			z: [{ z: [
				He,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				Be,
				"full",
				"auto",
				s,
				...w()
			] }],
			"flex-direction": [{ flex: [
				"row",
				"row-reverse",
				"col",
				"col-reverse"
			] }],
			"flex-wrap": [{ flex: [
				"nowrap",
				"wrap",
				"wrap-reverse"
			] }],
			flex: [{ flex: [
				Ve,
				Be,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Ve,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Ve,
				Z,
				X
			] }],
			order: [{ order: [
				He,
				"first",
				"last",
				"none",
				Z,
				X
			] }],
			"grid-cols": [{ "grid-cols": E() }],
			"col-start-end": [{ col: D() }],
			"col-start": [{ "col-start": O() }],
			"col-end": [{ "col-end": O() }],
			"grid-rows": [{ "grid-rows": E() }],
			"row-start-end": [{ row: D() }],
			"row-start": [{ "row-start": O() }],
			"row-end": [{ "row-end": O() }],
			"grid-flow": [{ "grid-flow": [
				"row",
				"col",
				"dense",
				"row-dense",
				"col-dense"
			] }],
			"auto-cols": [{ "auto-cols": k() }],
			"auto-rows": [{ "auto-rows": k() }],
			gap: [{ gap: w() }],
			"gap-x": [{ "gap-x": w() }],
			"gap-y": [{ "gap-y": w() }],
			"justify-content": [{ justify: [...ee(), "normal"] }],
			"justify-items": [{ "justify-items": [...A(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...A()] }],
			"align-content": [{ content: ["normal", ...ee()] }],
			"align-items": [{ items: [...A(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...A(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": ee() }],
			"place-items": [{ "place-items": [...A(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...A()] }],
			p: [{ p: w() }],
			px: [{ px: w() }],
			py: [{ py: w() }],
			ps: [{ ps: w() }],
			pe: [{ pe: w() }],
			pbs: [{ pbs: w() }],
			pbe: [{ pbe: w() }],
			pt: [{ pt: w() }],
			pr: [{ pr: w() }],
			pb: [{ pb: w() }],
			pl: [{ pl: w() }],
			m: [{ m: j() }],
			mx: [{ mx: j() }],
			my: [{ my: j() }],
			ms: [{ ms: j() }],
			me: [{ me: j() }],
			mbs: [{ mbs: j() }],
			mbe: [{ mbe: j() }],
			mt: [{ mt: j() }],
			mr: [{ mr: j() }],
			mb: [{ mb: j() }],
			ml: [{ ml: j() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: M() }],
			"inline-size": [{ inline: ["auto", ...N()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...N()] }],
			"max-inline-size": [{ "max-inline": ["none", ...N()] }],
			"block-size": [{ block: ["auto", ...P()] }],
			"min-block-size": [{ "min-block": ["auto", ...P()] }],
			"max-block-size": [{ "max-block": ["none", ...P()] }],
			w: [{ w: [
				s,
				"screen",
				...M()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...M()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...M()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...M()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...M()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...M()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				at,
				Qe
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				dt,
				et
			] }],
			"font-stretch": [{ "font-stretch": [
				"ultra-condensed",
				"extra-condensed",
				"condensed",
				"semi-condensed",
				"normal",
				"semi-expanded",
				"expanded",
				"extra-expanded",
				"ultra-expanded",
				Ue,
				X
			] }],
			"font-family": [{ font: [
				ot,
				tt,
				t
			] }],
			"font-features": [{ "font-features": [X] }],
			"fvn-normal": ["normal-nums"],
			"fvn-ordinal": ["ordinal"],
			"fvn-slashed-zero": ["slashed-zero"],
			"fvn-figure": ["lining-nums", "oldstyle-nums"],
			"fvn-spacing": ["proportional-nums", "tabular-nums"],
			"fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
			tracking: [{ tracking: [
				i,
				Z,
				X
			] }],
			"line-clamp": [{ "line-clamp": [
				Ve,
				"none",
				Z,
				$e
			] }],
			leading: [{ leading: [a, ...w()] }],
			"list-image": [{ "list-image": [
				"none",
				Z,
				X
			] }],
			"list-style-position": [{ list: ["inside", "outside"] }],
			"list-style-type": [{ list: [
				"disc",
				"decimal",
				"none",
				Z,
				X
			] }],
			"text-alignment": [{ text: [
				"left",
				"center",
				"right",
				"justify",
				"start",
				"end"
			] }],
			"placeholder-color": [{ placeholder: F() }],
			"text-color": [{ text: F() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...H(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Ve,
				"from-font",
				"auto",
				Z,
				Qe
			] }],
			"text-decoration-color": [{ decoration: F() }],
			"underline-offset": [{ "underline-offset": [
				Ve,
				"auto",
				Z,
				X
			] }],
			"text-transform": [
				"uppercase",
				"lowercase",
				"capitalize",
				"normal-case"
			],
			"text-overflow": [
				"truncate",
				"text-ellipsis",
				"text-clip"
			],
			"text-wrap": [{ text: [
				"wrap",
				"nowrap",
				"balance",
				"pretty"
			] }],
			indent: [{ indent: w() }],
			"vertical-align": [{ align: [
				"baseline",
				"top",
				"middle",
				"bottom",
				"text-top",
				"text-bottom",
				"sub",
				"super",
				Z,
				X
			] }],
			whitespace: [{ whitespace: [
				"normal",
				"nowrap",
				"pre",
				"pre-line",
				"pre-wrap",
				"break-spaces"
			] }],
			break: [{ break: [
				"normal",
				"words",
				"all",
				"keep"
			] }],
			wrap: [{ wrap: [
				"break-word",
				"anywhere",
				"normal"
			] }],
			hyphens: [{ hyphens: [
				"none",
				"manual",
				"auto"
			] }],
			content: [{ content: [
				"none",
				Z,
				X
			] }],
			"bg-attachment": [{ bg: [
				"fixed",
				"local",
				"scroll"
			] }],
			"bg-clip": [{ "bg-clip": [
				"border",
				"padding",
				"content",
				"text"
			] }],
			"bg-origin": [{ "bg-origin": [
				"border",
				"padding",
				"content"
			] }],
			"bg-position": [{ bg: I() }],
			"bg-repeat": [{ bg: L() }],
			"bg-size": [{ bg: R() }],
			"bg-image": [{ bg: [
				"none",
				{
					linear: [
						{ to: [
							"t",
							"tr",
							"r",
							"br",
							"b",
							"bl",
							"l",
							"tl"
						] },
						He,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						He,
						Z,
						X
					]
				},
				lt,
				rt
			] }],
			"bg-color": [{ bg: F() }],
			"gradient-from-pos": [{ from: z() }],
			"gradient-via-pos": [{ via: z() }],
			"gradient-to-pos": [{ to: z() }],
			"gradient-from": [{ from: F() }],
			"gradient-via": [{ via: F() }],
			"gradient-to": [{ to: F() }],
			rounded: [{ rounded: B() }],
			"rounded-s": [{ "rounded-s": B() }],
			"rounded-e": [{ "rounded-e": B() }],
			"rounded-t": [{ "rounded-t": B() }],
			"rounded-r": [{ "rounded-r": B() }],
			"rounded-b": [{ "rounded-b": B() }],
			"rounded-l": [{ "rounded-l": B() }],
			"rounded-ss": [{ "rounded-ss": B() }],
			"rounded-se": [{ "rounded-se": B() }],
			"rounded-ee": [{ "rounded-ee": B() }],
			"rounded-es": [{ "rounded-es": B() }],
			"rounded-tl": [{ "rounded-tl": B() }],
			"rounded-tr": [{ "rounded-tr": B() }],
			"rounded-br": [{ "rounded-br": B() }],
			"rounded-bl": [{ "rounded-bl": B() }],
			"border-w": [{ border: V() }],
			"border-w-x": [{ "border-x": V() }],
			"border-w-y": [{ "border-y": V() }],
			"border-w-s": [{ "border-s": V() }],
			"border-w-e": [{ "border-e": V() }],
			"border-w-bs": [{ "border-bs": V() }],
			"border-w-be": [{ "border-be": V() }],
			"border-w-t": [{ "border-t": V() }],
			"border-w-r": [{ "border-r": V() }],
			"border-w-b": [{ "border-b": V() }],
			"border-w-l": [{ "border-l": V() }],
			"divide-x": [{ "divide-x": V() }],
			"divide-x-reverse": ["divide-x-reverse"],
			"divide-y": [{ "divide-y": V() }],
			"divide-y-reverse": ["divide-y-reverse"],
			"border-style": [{ border: [
				...H(),
				"hidden",
				"none"
			] }],
			"divide-style": [{ divide: [
				...H(),
				"hidden",
				"none"
			] }],
			"border-color": [{ border: F() }],
			"border-color-x": [{ "border-x": F() }],
			"border-color-y": [{ "border-y": F() }],
			"border-color-s": [{ "border-s": F() }],
			"border-color-e": [{ "border-e": F() }],
			"border-color-bs": [{ "border-bs": F() }],
			"border-color-be": [{ "border-be": F() }],
			"border-color-t": [{ "border-t": F() }],
			"border-color-r": [{ "border-r": F() }],
			"border-color-b": [{ "border-b": F() }],
			"border-color-l": [{ "border-l": F() }],
			"divide-color": [{ divide: F() }],
			"outline-style": [{ outline: [
				...H(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Ve,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Ve,
				at,
				Qe
			] }],
			"outline-color": [{ outline: F() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ut,
				it
			] }],
			"shadow-color": [{ shadow: F() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ut,
				it
			] }],
			"inset-shadow-color": [{ "inset-shadow": F() }],
			"ring-w": [{ ring: V() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: F() }],
			"ring-offset-w": [{ "ring-offset": [Ve, Qe] }],
			"ring-offset-color": [{ "ring-offset": F() }],
			"inset-ring-w": [{ "inset-ring": V() }],
			"inset-ring-color": [{ "inset-ring": F() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ut,
				it
			] }],
			"text-shadow-color": [{ "text-shadow": F() }],
			opacity: [{ opacity: [
				Ve,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...te(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": te() }],
			"mask-clip": [{ "mask-clip": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }, "mask-no-clip"],
			"mask-composite": [{ mask: [
				"add",
				"subtract",
				"intersect",
				"exclude"
			] }],
			"mask-image-linear-pos": [{ "mask-linear": [Ve] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": U() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": U() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": F() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": F() }],
			"mask-image-t-from-pos": [{ "mask-t-from": U() }],
			"mask-image-t-to-pos": [{ "mask-t-to": U() }],
			"mask-image-t-from-color": [{ "mask-t-from": F() }],
			"mask-image-t-to-color": [{ "mask-t-to": F() }],
			"mask-image-r-from-pos": [{ "mask-r-from": U() }],
			"mask-image-r-to-pos": [{ "mask-r-to": U() }],
			"mask-image-r-from-color": [{ "mask-r-from": F() }],
			"mask-image-r-to-color": [{ "mask-r-to": F() }],
			"mask-image-b-from-pos": [{ "mask-b-from": U() }],
			"mask-image-b-to-pos": [{ "mask-b-to": U() }],
			"mask-image-b-from-color": [{ "mask-b-from": F() }],
			"mask-image-b-to-color": [{ "mask-b-to": F() }],
			"mask-image-l-from-pos": [{ "mask-l-from": U() }],
			"mask-image-l-to-pos": [{ "mask-l-to": U() }],
			"mask-image-l-from-color": [{ "mask-l-from": F() }],
			"mask-image-l-to-color": [{ "mask-l-to": F() }],
			"mask-image-x-from-pos": [{ "mask-x-from": U() }],
			"mask-image-x-to-pos": [{ "mask-x-to": U() }],
			"mask-image-x-from-color": [{ "mask-x-from": F() }],
			"mask-image-x-to-color": [{ "mask-x-to": F() }],
			"mask-image-y-from-pos": [{ "mask-y-from": U() }],
			"mask-image-y-to-pos": [{ "mask-y-to": U() }],
			"mask-image-y-from-color": [{ "mask-y-from": F() }],
			"mask-image-y-to-color": [{ "mask-y-to": F() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": U() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": U() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": F() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": F() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Ve] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": U() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": U() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": F() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": F() }],
			"mask-mode": [{ mask: [
				"alpha",
				"luminance",
				"match"
			] }],
			"mask-origin": [{ "mask-origin": [
				"border",
				"padding",
				"content",
				"fill",
				"stroke",
				"view"
			] }],
			"mask-position": [{ mask: I() }],
			"mask-repeat": [{ mask: L() }],
			"mask-size": [{ mask: R() }],
			"mask-type": [{ "mask-type": ["alpha", "luminance"] }],
			"mask-image": [{ mask: [
				"none",
				Z,
				X
			] }],
			filter: [{ filter: [
				"",
				"none",
				Z,
				X
			] }],
			blur: [{ blur: W() }],
			brightness: [{ brightness: [
				Ve,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Ve,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ut,
				it
			] }],
			"drop-shadow-color": [{ "drop-shadow": F() }],
			grayscale: [{ grayscale: [
				"",
				Ve,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Ve,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Ve,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Ve,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Ve,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": W() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Ve,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Ve,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Ve,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Ve,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Ve,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Ve,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Ve,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Ve,
				Z,
				X
			] }],
			"border-collapse": [{ border: ["collapse", "separate"] }],
			"border-spacing": [{ "border-spacing": w() }],
			"border-spacing-x": [{ "border-spacing-x": w() }],
			"border-spacing-y": [{ "border-spacing-y": w() }],
			"table-layout": [{ table: ["auto", "fixed"] }],
			caption: [{ caption: ["top", "bottom"] }],
			transition: [{ transition: [
				"",
				"all",
				"colors",
				"opacity",
				"shadow",
				"transform",
				"none",
				Z,
				X
			] }],
			"transition-behavior": [{ transition: ["normal", "discrete"] }],
			duration: [{ duration: [
				Ve,
				"initial",
				Z,
				X
			] }],
			ease: [{ ease: [
				"linear",
				"initial",
				_,
				Z,
				X
			] }],
			delay: [{ delay: [
				Ve,
				Z,
				X
			] }],
			animate: [{ animate: [
				"none",
				v,
				Z,
				X
			] }],
			backface: [{ backface: ["hidden", "visible"] }],
			perspective: [{ perspective: [
				h,
				Z,
				X
			] }],
			"perspective-origin": [{ "perspective-origin": x() }],
			rotate: [{ rotate: G() }],
			"rotate-x": [{ "rotate-x": G() }],
			"rotate-y": [{ "rotate-y": G() }],
			"rotate-z": [{ "rotate-z": G() }],
			scale: [{ scale: K() }],
			"scale-x": [{ "scale-x": K() }],
			"scale-y": [{ "scale-y": K() }],
			"scale-z": [{ "scale-z": K() }],
			"scale-3d": ["scale-3d"],
			skew: [{ skew: ne() }],
			"skew-x": [{ "skew-x": ne() }],
			"skew-y": [{ "skew-y": ne() }],
			transform: [{ transform: [
				Z,
				X,
				"",
				"none",
				"gpu",
				"cpu"
			] }],
			"transform-origin": [{ origin: x() }],
			"transform-style": [{ transform: ["3d", "flat"] }],
			translate: [{ translate: re() }],
			"translate-x": [{ "translate-x": re() }],
			"translate-y": [{ "translate-y": re() }],
			"translate-z": [{ "translate-z": re() }],
			"translate-none": ["translate-none"],
			accent: [{ accent: F() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: F() }],
			"color-scheme": [{ scheme: [
				"normal",
				"dark",
				"light",
				"light-dark",
				"only-dark",
				"only-light"
			] }],
			cursor: [{ cursor: [
				"auto",
				"default",
				"pointer",
				"wait",
				"text",
				"move",
				"help",
				"not-allowed",
				"none",
				"context-menu",
				"progress",
				"cell",
				"crosshair",
				"vertical-text",
				"alias",
				"copy",
				"no-drop",
				"grab",
				"grabbing",
				"all-scroll",
				"col-resize",
				"row-resize",
				"n-resize",
				"e-resize",
				"s-resize",
				"w-resize",
				"ne-resize",
				"nw-resize",
				"se-resize",
				"sw-resize",
				"ew-resize",
				"ns-resize",
				"nesw-resize",
				"nwse-resize",
				"zoom-in",
				"zoom-out",
				Z,
				X
			] }],
			"field-sizing": [{ "field-sizing": ["fixed", "content"] }],
			"pointer-events": [{ "pointer-events": ["auto", "none"] }],
			resize: [{ resize: [
				"none",
				"",
				"y",
				"x"
			] }],
			"scroll-behavior": [{ scroll: ["auto", "smooth"] }],
			"scroll-m": [{ "scroll-m": w() }],
			"scroll-mx": [{ "scroll-mx": w() }],
			"scroll-my": [{ "scroll-my": w() }],
			"scroll-ms": [{ "scroll-ms": w() }],
			"scroll-me": [{ "scroll-me": w() }],
			"scroll-mbs": [{ "scroll-mbs": w() }],
			"scroll-mbe": [{ "scroll-mbe": w() }],
			"scroll-mt": [{ "scroll-mt": w() }],
			"scroll-mr": [{ "scroll-mr": w() }],
			"scroll-mb": [{ "scroll-mb": w() }],
			"scroll-ml": [{ "scroll-ml": w() }],
			"scroll-p": [{ "scroll-p": w() }],
			"scroll-px": [{ "scroll-px": w() }],
			"scroll-py": [{ "scroll-py": w() }],
			"scroll-ps": [{ "scroll-ps": w() }],
			"scroll-pe": [{ "scroll-pe": w() }],
			"scroll-pbs": [{ "scroll-pbs": w() }],
			"scroll-pbe": [{ "scroll-pbe": w() }],
			"scroll-pt": [{ "scroll-pt": w() }],
			"scroll-pr": [{ "scroll-pr": w() }],
			"scroll-pb": [{ "scroll-pb": w() }],
			"scroll-pl": [{ "scroll-pl": w() }],
			"snap-align": [{ snap: [
				"start",
				"end",
				"center",
				"align-none"
			] }],
			"snap-stop": [{ snap: ["normal", "always"] }],
			"snap-type": [{ snap: [
				"none",
				"x",
				"y",
				"both"
			] }],
			"snap-strictness": [{ snap: ["mandatory", "proximity"] }],
			touch: [{ touch: [
				"auto",
				"none",
				"manipulation"
			] }],
			"touch-x": [{ "touch-pan": [
				"x",
				"left",
				"right"
			] }],
			"touch-y": [{ "touch-pan": [
				"y",
				"up",
				"down"
			] }],
			"touch-pz": ["touch-pinch-zoom"],
			select: [{ select: [
				"none",
				"text",
				"all",
				"auto"
			] }],
			"will-change": [{ "will-change": [
				"auto",
				"scroll",
				"contents",
				"transform",
				Z,
				X
			] }],
			fill: [{ fill: ["none", ...F()] }],
			"stroke-w": [{ stroke: [
				Ve,
				at,
				Qe,
				$e
			] }],
			stroke: [{ stroke: ["none", ...F()] }],
			"forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }]
		},
		conflictingClassGroups: {
			overflow: ["overflow-x", "overflow-y"],
			overscroll: ["overscroll-x", "overscroll-y"],
			inset: [
				"inset-x",
				"inset-y",
				"inset-bs",
				"inset-be",
				"start",
				"end",
				"top",
				"right",
				"bottom",
				"left"
			],
			"inset-x": ["right", "left"],
			"inset-y": ["top", "bottom"],
			flex: [
				"basis",
				"grow",
				"shrink"
			],
			gap: ["gap-x", "gap-y"],
			p: [
				"px",
				"py",
				"ps",
				"pe",
				"pbs",
				"pbe",
				"pt",
				"pr",
				"pb",
				"pl"
			],
			px: ["pr", "pl"],
			py: ["pt", "pb"],
			m: [
				"mx",
				"my",
				"ms",
				"me",
				"mbs",
				"mbe",
				"mt",
				"mr",
				"mb",
				"ml"
			],
			mx: ["mr", "ml"],
			my: ["mt", "mb"],
			size: ["w", "h"],
			"font-size": ["leading"],
			"fvn-normal": [
				"fvn-ordinal",
				"fvn-slashed-zero",
				"fvn-figure",
				"fvn-spacing",
				"fvn-fraction"
			],
			"fvn-ordinal": ["fvn-normal"],
			"fvn-slashed-zero": ["fvn-normal"],
			"fvn-figure": ["fvn-normal"],
			"fvn-spacing": ["fvn-normal"],
			"fvn-fraction": ["fvn-normal"],
			"line-clamp": ["display", "overflow"],
			rounded: [
				"rounded-s",
				"rounded-e",
				"rounded-t",
				"rounded-r",
				"rounded-b",
				"rounded-l",
				"rounded-ss",
				"rounded-se",
				"rounded-ee",
				"rounded-es",
				"rounded-tl",
				"rounded-tr",
				"rounded-br",
				"rounded-bl"
			],
			"rounded-s": ["rounded-ss", "rounded-es"],
			"rounded-e": ["rounded-se", "rounded-ee"],
			"rounded-t": ["rounded-tl", "rounded-tr"],
			"rounded-r": ["rounded-tr", "rounded-br"],
			"rounded-b": ["rounded-br", "rounded-bl"],
			"rounded-l": ["rounded-tl", "rounded-bl"],
			"border-spacing": ["border-spacing-x", "border-spacing-y"],
			"border-w": [
				"border-w-x",
				"border-w-y",
				"border-w-s",
				"border-w-e",
				"border-w-bs",
				"border-w-be",
				"border-w-t",
				"border-w-r",
				"border-w-b",
				"border-w-l"
			],
			"border-w-x": ["border-w-r", "border-w-l"],
			"border-w-y": ["border-w-t", "border-w-b"],
			"border-color": [
				"border-color-x",
				"border-color-y",
				"border-color-s",
				"border-color-e",
				"border-color-bs",
				"border-color-be",
				"border-color-t",
				"border-color-r",
				"border-color-b",
				"border-color-l"
			],
			"border-color-x": ["border-color-r", "border-color-l"],
			"border-color-y": ["border-color-t", "border-color-b"],
			translate: [
				"translate-x",
				"translate-y",
				"translate-none"
			],
			"translate-none": [
				"translate",
				"translate-x",
				"translate-y",
				"translate-z"
			],
			"scroll-m": [
				"scroll-mx",
				"scroll-my",
				"scroll-ms",
				"scroll-me",
				"scroll-mbs",
				"scroll-mbe",
				"scroll-mt",
				"scroll-mr",
				"scroll-mb",
				"scroll-ml"
			],
			"scroll-mx": ["scroll-mr", "scroll-ml"],
			"scroll-my": ["scroll-mt", "scroll-mb"],
			"scroll-p": [
				"scroll-px",
				"scroll-py",
				"scroll-ps",
				"scroll-pe",
				"scroll-pbs",
				"scroll-pbe",
				"scroll-pt",
				"scroll-pr",
				"scroll-pb",
				"scroll-pl"
			],
			"scroll-px": ["scroll-pr", "scroll-pl"],
			"scroll-py": ["scroll-pt", "scroll-pb"],
			touch: [
				"touch-x",
				"touch-y",
				"touch-pz"
			],
			"touch-x": ["touch"],
			"touch-y": ["touch"],
			"touch-pz": ["touch"]
		},
		conflictingClassGroupModifiers: { "font-size": ["leading"] },
		orderSensitiveModifiers: [
			"*",
			"**",
			"after",
			"backdrop",
			"before",
			"details-content",
			"file",
			"first-letter",
			"first-line",
			"marker",
			"placeholder",
			"selection"
		]
	};
}), St = 8, Ct = 12, wt = 0, Tt = 0, Et = 60, Dt = "(any-hover: hover)", Ot = "pc:hover-tooltip-dismiss", kt = () => {
	typeof document > "u" || document.dispatchEvent(new Event(Ot));
}, At = {
	top: [
		"top",
		"bottom",
		"right",
		"left"
	],
	right: [
		"right",
		"left",
		"top",
		"bottom"
	],
	bottom: [
		"bottom",
		"top",
		"right",
		"left"
	],
	left: [
		"left",
		"right",
		"top",
		"bottom"
	]
}, jt = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, Mt = () => typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia(Dt).matches, Nt = (e, t, n) => e < t ? t : e > n ? n : e, Pt = (e, t) => {
	if (!e) return t;
	let n = new Set(e.split(/\s+/).filter(Boolean));
	return n.add(t), Array.from(n).join(" ");
}, Ft = (e, t, n, r) => {
	let i = e.left + e.width / 2, a = e.top + e.height / 2;
	return n === "top" ? {
		top: e.top - t.height - r,
		left: i - t.width / 2,
		width: t.width,
		height: t.height
	} : n === "bottom" ? {
		top: e.bottom + r,
		left: i - t.width / 2,
		width: t.width,
		height: t.height
	} : n === "left" ? {
		top: a - t.height / 2,
		left: e.left - t.width - r,
		width: t.width,
		height: t.height
	} : {
		top: a - t.height / 2,
		left: e.right + r,
		width: t.width,
		height: t.height
	};
}, It = (e, t, n) => e.top >= St && e.left >= St && e.top + e.height <= n - St && e.left + e.width <= t - St, Lt = (e, t, n) => {
	let r = Math.max(St, n - St - e.height), i = Math.max(St, t - St - e.width);
	return {
		...e,
		top: Nt(e.top, St, r),
		left: Nt(e.left, St, i)
	};
};
function Rt({ children: e, label: t, placement: n = "bottom", positionMode: r = "anchor", cursorPoint: i = null, offset: a = Ct, disabled: o = !1, lockVisible: s = !1, portalContainer: c = null }) {
	let u = jt(t), [d, f] = T(Mt), m = !o && !!u && d, h = y(), [_, b] = T(null), C = w(null), [E, A] = T(!1), [j, M] = T(!1), [N, P] = T(null), [F, I] = T(null), L = w(null), R = w(!1), z = w(!1), B = w(null), V = w(null), H = w(null);
	v(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(Dt), t = () => {
			f(e.matches);
		};
		if (t(), typeof e.addEventListener == "function") return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
		let n = e.onchange;
		return e.onchange = t, () => {
			e.onchange === t && (e.onchange = n);
		};
	}, []);
	let te = g(() => {
		B.current !== null && (window.clearTimeout(B.current), B.current = null);
	}, []), U = g(() => {
		V.current !== null && (window.clearTimeout(V.current), V.current = null);
	}, []), W = g(() => {
		H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null);
	}, []), G = g(() => {
		typeof window > "u" || (te(), U(), W());
	}, [
		W,
		U,
		te
	]), K = g((e = 0) => {
		if (typeof window > "u") {
			M(!1);
			return;
		}
		te(), W(), U(), V.current = window.setTimeout(() => {
			M(!1), V.current = null;
		}, e);
	}, [
		W,
		U,
		te
	]), ne = g((e = 0) => {
		s || K(e);
	}, [s, K]), re = g((e = 0) => {
		if (m) {
			if (typeof window > "u") {
				A(!0), M(!0);
				return;
			}
			U(), te(), W(), B.current = window.setTimeout(() => {
				A(!0), H.current = window.requestAnimationFrame(() => {
					M(!0), H.current = null;
				}), B.current = null;
			}, e);
		}
	}, [
		W,
		U,
		te,
		m
	]);
	v(() => () => {
		G();
	}, [G]), v(() => {
		m || (G(), M(!1), A(!1), b(null), R.current = !1, z.current = !1, I(null), P(null));
	}, [G, m]), v(() => {
		if (!E || j) return;
		let e = window.setTimeout(() => {
			A(!1), b(null), L.current = null, I(null), P(null);
		}, Et);
		return () => {
			window.clearTimeout(e);
		};
	}, [E, j]);
	let ie = g(() => {
		if (!E || typeof window > "u") return;
		let e = C.current;
		if (!_ || !e) return;
		let t = r === "cursor" ? i ?? F ?? L.current : null, o = r === "cursor" && t ? {
			x: t.x,
			y: t.y,
			top: t.y,
			right: t.x,
			bottom: t.y,
			left: t.x,
			width: 0,
			height: 0,
			toJSON: () => ({})
		} : _.getBoundingClientRect(), s = e.getBoundingClientRect(), c = window.innerWidth, l = window.innerHeight, u = At[n], d = null;
		for (let e of u) {
			let t = Ft(o, s, e, a);
			if (It(t, c, l)) {
				d = {
					top: t.top,
					left: t.left,
					placement: e
				};
				break;
			}
		}
		if (!d) {
			let e = Lt(Ft(o, s, n, a), c, l);
			d = {
				top: e.top,
				left: e.left,
				placement: n
			};
		}
		P((e) => e && e.top === d.top && e.left === d.left && e.placement === d.placement ? e : d);
	}, [
		_,
		F,
		i,
		E,
		a,
		n,
		r
	]);
	x(() => {
		E && ie();
	}, [E, ie]), v(() => {
		if (!E) return;
		let e = () => {
			ie();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [E, ie]), v(() => {
		if (!j) return;
		let e = (e) => {
			e.key === "Escape" && ne();
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [ne, j]), v(() => {
		if (s) {
			U(), (E || j) && (A(!0), M(!0));
			return;
		}
		j && (R.current || z.current || K());
	}, [
		U,
		E,
		j,
		s,
		K
	]), v(() => {
		if (typeof document > "u") return;
		let e = () => {
			K();
		};
		return document.addEventListener(Ot, e), () => {
			document.removeEventListener(Ot, e);
		};
	}, [K]);
	let ae = S(() => typeof document > "u" ? null : c ?? document.body, [c]);
	if (!m || !p(e)) return e;
	let oe = e, se = oe.props, ce = r === "cursor" && i === null, le = l(oe, {
		onMouseEnter: (e) => {
			if (se.onMouseEnter?.(e), !e.defaultPrevented) {
				if (R.current = !0, b(e.currentTarget), ce) {
					let t = {
						x: e.clientX,
						y: e.clientY
					};
					L.current = t, I(t);
				}
				re(wt);
			}
		},
		onMouseMove: (e) => {
			if (se.onMouseMove?.(e), !e.defaultPrevented) {
				if (R.current = !0, _ || b(e.currentTarget), ce) {
					let t = {
						x: e.clientX,
						y: e.clientY
					};
					L.current = t, I(t);
				}
				j || re(wt);
			}
		},
		onMouseLeave: (e) => {
			se.onMouseLeave?.(e), R.current = !1, ne(Tt);
		},
		onFocus: (e) => {
			if (se.onFocus?.(e), e.defaultPrevented) return;
			let t = e.currentTarget;
			typeof t.matches == "function" && !t.matches(":focus-visible") || (b(t), z.current = !0, L.current = null, I(null), re());
		},
		onBlur: (e) => {
			se.onBlur?.(e), z.current = !1, ne();
		},
		"aria-describedby": j ? Pt(se["aria-describedby"], h) : se["aria-describedby"]
	}), ue = N?.placement ?? n;
	return /* @__PURE__ */ k(D, { children: [le, E && ae ? ee(/* @__PURE__ */ O("div", {
		id: h,
		ref: C,
		role: "tooltip",
		"data-placement": ue,
		className: Y("pointer-events-none fixed z-[2200]", "max-w-[calc(100vw-16px)] whitespace-nowrap rounded-[var(--pc-radius-md)] px-3 py-1 text-base font-medium", "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)]", "transition-[opacity,transform] duration-60 ease-out motion-reduce:transition-none motion-reduce:transform-none", j ? "opacity-100 scale-100 translate-x-0 translate-y-0" : Y("opacity-0 scale-95", ue === "top" ? "translate-y-0.5" : ue === "bottom" ? "-translate-y-0.5" : ue === "left" ? "translate-x-0.5" : "-translate-x-0.5")),
		style: {
			top: N?.top ?? -9999,
			left: N?.left ?? -9999
		},
		children: u
	}), ae) : null] });
}
//#endregion
//#region ../ui/src/lib/icons/LoaderIcon.tsx
function zt({ className: e } = {}) {
	return /* @__PURE__ */ O("span", {
		"aria-hidden": "true",
		className: Q("inline-block h-4 w-4 animate-spin rounded-[var(--pc-radius-full)] border-2 border-current border-t-transparent align-middle", e)
	});
}
//#endregion
//#region ../ui/src/lib/buttonPrimitives.ts
var Bt = {
	xl: "px-6 py-3 text-lg",
	lg: "px-5 py-2.5 text-base",
	md: "px-3.5 py-2 text-base",
	sm: "px-3 py-2 text-sm",
	xs: "px-2.5 py-1 text-xs"
}, Vt = {
	xl: "h-12 w-12 p-2 text-lg [&_svg]:h-5 [&_svg]:w-5",
	lg: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	md: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	sm: "h-9 w-9 p-1 text-sm [&_svg]:h-[17px] [&_svg]:w-[17px]",
	xs: "h-7 w-7 p-1 text-xs [&_svg]:h-[16px] [&_svg]:w-[16px]"
}, Ht = Bt, Ut = {
	xl: "pl-2 pr-4 py-3 text-lg",
	lg: "pl-1.5 pr-3 py-2.5 text-base",
	md: "pl-1 pr-2.5 py-1.5 text-base",
	sm: "pl-1.5 pr-2.5 py-2 text-sm",
	xs: "pl-1 pr-2 py-1 text-xs"
}, Wt = Y("relative inline-flex items-center justify-center whitespace-nowrap", "cursor-pointer transition-colors duration-200 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]", "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-[var(--pc-color-text)]", "disabled:pointer-events-none disabled:cursor-not-allowed", "data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed", "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "data-[loading=true]:pointer-events-none data-[loading=true]:cursor-wait"), Gt = Y("enabled:active:[background:var(--pc-color-surface-strongest)]", "enabled:active:text-[var(--pc-color-text)]", "data-[touch-active=true]:[background:var(--pc-color-surface-strongest)]", "data-[touch-active=true]:text-[var(--pc-color-text)]"), Kt = Y("data-[active=true]:[background:var(--pc-color-surface-strongest)]", "data-[active=true]:text-[var(--pc-color-text)]"), qt = {
	solid: Y("bg-[var(--pc-color-surface)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", Gt, Kt, "disabled:[background:var(--pc-color-surface-strongest)]", "disabled:text-[var(--pc-color-text-muted)]"),
	ghost: Y("bg-transparent text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", "enabled:hover:text-[var(--pc-color-text)]", Gt, Kt, "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "disabled:[background:var(--pc-color-surface-strongest)]"),
	outline: Y("border border-[var(--pc-color-text)] bg-[var(--pc-color-outline-surface,transparent)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", "enabled:hover:text-[var(--pc-color-text)]", Gt, Kt, "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "disabled:[background:var(--pc-color-surface-strongest)]"),
	muted: Y("bg-[var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", Gt, Kt, "disabled:[background:var(--pc-color-surface-strongest)]", "disabled:text-[var(--pc-color-text-muted)]")
}, Jt = {
	solid: "data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]",
	ghost: Y("data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]", "data-[split-hover=true]:text-[var(--pc-color-text)]"),
	outline: Y("data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]", "data-[split-hover=true]:text-[var(--pc-color-text)]"),
	muted: "data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]"
}, Yt = {
	solid: Y("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	ghost: Y("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	outline: Y("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	muted: Y("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]")
}, Xt = Y(Wt, "rounded-[var(--pc-radius-3xl)] font-medium"), Zt = Y(Wt, "font-medium"), Qt = Y(Zt, "rounded-l-[var(--pc-radius-3xl)]"), $t = Y(Zt, "rounded-r-[var(--pc-radius-3xl)]"), en = (e) => qt[e], tn = (e) => Jt[e], nn = (e) => Yt[e], rn = (e, t = !1) => t ? Vt[e] : Bt[e], an = (e) => e ? "true" : void 0, on = ({ disabled: e = !1, loading: t = !1 }) => e || t, sn = ({ loading: e, iconOnly: t = !1 }) => Y("relative z-[1] inline-flex items-center justify-center", t ? "gap-1" : "gap-2", e ? "opacity-0" : "opacity-100"), cn = (e) => e === !0 ? "true" : void 0, ln = (e) => e === !0 || e === "true", un = (e) => {
	if (ln(e)) return "true";
}, dn = (e) => e && e !== "default" ? e : void 0, fn = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, pn = (e) => dn(e), mn = f(function({ label: e, variant: t = "secondary", appearance: n = "solid", size: r = "md", className: i, fullWidth: a = !1, loading: o = !1, iconOnly: s = !1, showTooltip: c, tooltipLabel: l, tooltipPlacement: u = "bottom", leadingIcon: d, trailingIcon: f, edgeAlignedIcon: p = !1, toggled: m, type: h = "button", disabled: g, "aria-label": _, title: v, ...y }, b) {
	let x = on({
		disabled: g === !0,
		loading: o
	}), S = pn(t), C = cn(m), w = un(y["aria-expanded"]), T = ln(y["data-touch-active"]), E = an(ln(y["data-active"]) || C === "true" || w === "true"), D = an(T), ee = fn(l) ?? fn(_) ?? fn(e) ?? fn(v), A = !!(f && a && !s && !d), j = !!(d && p && a && !s && !f), M = j || A, N = j && p === "below-sm", P = N ? "sm:inline-flex sm:w-auto sm:grid-cols-none sm:justify-center sm:gap-2" : void 0, F = N && !f ? "sm:hidden" : void 0, I = (c ?? s) && s && !x && ee !== void 0, L = Q(Xt, en(n), rn(r, s), a && !s && "w-full", s && "aspect-square", i), R = s ? _ ?? e : _, z = /* @__PURE__ */ k("button", {
		ref: b,
		...y,
		type: h,
		disabled: x,
		"aria-busy": o ? !0 : void 0,
		"aria-pressed": m === void 0 ? void 0 : m,
		"aria-label": R,
		title: I ? void 0 : v,
		className: L,
		"data-theme": S,
		"data-loading": an(o),
		"data-disabled": an(x),
		"data-touch-active": D,
		"data-active": E,
		"data-toggled": C,
		"data-expanded": w,
		"data-icon-only": an(s),
		children: [o && /* @__PURE__ */ O("span", {
			className: "absolute inset-0 z-20 flex items-center justify-center",
			"aria-hidden": "true",
			children: /* @__PURE__ */ O(zt, {})
		}), M ? /* @__PURE__ */ k("span", {
			className: Y("relative z-[1] grid w-full grid-cols-[1fr_auto_1fr] items-center", P, o ? "opacity-0" : "opacity-100"),
			children: [
				/* @__PURE__ */ O("span", {
					className: Y("inline-flex items-center justify-self-start", N && "sm:justify-self-auto"),
					"aria-hidden": d ? void 0 : !0,
					children: d
				}),
				/* @__PURE__ */ O("span", {
					className: Y("col-start-2", N && "sm:col-auto"),
					children: e
				}),
				/* @__PURE__ */ O("span", {
					className: Y("col-start-3 inline-flex items-center justify-self-end", F),
					"aria-hidden": f ? void 0 : !0,
					children: f
				})
			]
		}) : /* @__PURE__ */ k("span", {
			className: sn({
				loading: o,
				iconOnly: s
			}),
			children: [
				d ? /* @__PURE__ */ O("span", {
					className: "inline-flex items-center",
					children: d
				}) : null,
				s ? null : /* @__PURE__ */ O("span", { children: e }),
				f ? /* @__PURE__ */ O("span", {
					className: "inline-flex items-center",
					children: f
				}) : null
			]
		})]
	});
	return I ? /* @__PURE__ */ O(Rt, {
		label: ee,
		placement: u,
		disabled: x,
		children: z
	}) : z;
});
mn.displayName = "Button";
//#endregion
//#region ../ui/src/lib/Card.tsx
var hn = {
	neutral: "[background:var(--pc-color-neutral)]",
	neutralDarker: "[background:var(--pc-color-depth-2)]",
	neutralDarkest: "[background:var(--pc-color-depth-3)]",
	surface: "[background:var(--pc-color-surface)]",
	secondary: "[background:var(--pc-color-secondary)]",
	primary: "[background:var(--pc-color-primary)]",
	secondaryInverted: "[background:var(--pc-color-secondary)]",
	secondaryPrimary: "[background:var(--pc-color-secondary)]"
}, gn = {
	neutral: "text-[var(--pc-color-text)]",
	neutralDarker: "text-[var(--pc-color-text)]",
	neutralDarkest: "text-[var(--pc-color-text)]",
	surface: "text-[var(--pc-color-text)]",
	secondary: "text-[var(--pc-color-text-inverted)]",
	primary: "text-[var(--pc-color-text)]",
	secondaryInverted: "text-[var(--pc-color-text-inverted)]",
	secondaryPrimary: "text-[var(--pc-color-primary)]"
}, _n = {
	solid: "",
	ghost: "bg-transparent",
	outline: Y("border border-[var(--pc-color-depth-3)]", "[background:var(--pc-color-outline-surface,transparent)]"),
	muted: "[background:var(--pc-color-surface-weakest)]"
}, vn = {
	flush: "rounded-[var(--pc-radius-lg)] p-0",
	compact: "rounded-[var(--pc-radius-lg)] p-2",
	default: "rounded-[var(--pc-radius-lg)] p-4",
	md: "rounded-[var(--pc-radius-lg)] p-5",
	lg: "rounded-[var(--pc-radius-xl)] p-6 sm:p-8 lg:p-10"
};
function yn({ children: e, variant: t = "neutral", size: n = "default", appearance: r = "solid", interactive: i = !1, href: a, as: o = "div", target: s, rel: c, id: l, role: u, tabIndex: d, title: f, ariaLabel: p, ariaDescribedBy: m, ariaLabelledBy: h, overflow: g, className: _, ...v }) {
	let y = g ?? (n === "flush" ? "hidden" : void 0), b = "";
	y === "hidden" && (b = "overflow-hidden"), y === "visible" && (b = "overflow-visible");
	let x = Y("block transition-colors duration-150 ease-out", vn[n], gn[t], r === "solid" ? hn[t] : _n[r], b, i || a ? [
		"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)]",
		"focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]",
		"hover:[background:var(--pc-color-depth-4)]",
		"group-hover:[background:var(--pc-color-depth-4)]",
		"group-focus-visible:[background:var(--pc-color-depth-4)]",
		"cursor-pointer"
	].join(" ") : ""), S = {
		className: _ ? Q(x, _) : x,
		"data-pc-appearance": r,
		id: l,
		role: u,
		tabIndex: d,
		title: f,
		"aria-label": p,
		"aria-describedby": m,
		"aria-labelledby": h
	};
	return a ? /* @__PURE__ */ O("a", {
		...S,
		href: a,
		target: s,
		rel: c,
		...v,
		children: e
	}) : O(o === "section" ? "section" : o === "article" ? "article" : "div", {
		...S,
		...v,
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/CreditCardLayout.tsx
var bn = "brandless-card", xn = "cubic-bezier(0.22, 1, 0.36, 1)";
function Sn({ cardFields: e, details: t, footer: n, reserveFooterSpace: r = !1, dataTheme: i = bn, brandMotionKey: a, className: o, cardFieldsClassName: s, detailsClassName: c, footerClassName: l }) {
	let u = r || n != null, d = i !== "neutral" && i !== bn, f = {
		backgroundImage: d ? [
			"radial-gradient(128% 102% at 12% 10%, color-mix(in oklab, white 22%, transparent) 0%, transparent 44%)",
			"radial-gradient(112% 84% at 90% 13%, color-mix(in oklab, white 12%, transparent) 0%, transparent 38%)",
			"radial-gradient(124% 98% at 78% 88%, color-mix(in oklab, white 7%, transparent) 0%, transparent 50%)",
			"linear-gradient(136deg, color-mix(in oklab, white 9%, transparent) 0%, transparent 48%, color-mix(in oklab, white 5%, transparent) 100%)"
		].join(", ") : "none",
		opacity: d ? .86 : 0,
		transform: d ? "translate3d(1.75%, -1.25%, 0) scale(1.06)" : "translate3d(-2%, 1%, 0) scale(0.98)",
		transition: [`opacity 500ms ${xn}`, `transform 620ms ${xn}`].join(", ")
	}, p = {
		backgroundImage: d ? ["linear-gradient(308deg, transparent 0%, transparent 32%, color-mix(in oklab, white 16%, transparent) 49%, transparent 67%, transparent 100%)", "conic-gradient(from 18deg at 82% 82%, transparent 0deg, color-mix(in oklab, white 7%, transparent) 62deg, transparent 126deg, transparent 360deg)"].join(", ") : "none",
		opacity: d ? .32 : 0,
		transform: d ? "translate3d(-1%, 1.5%, 0) scale(1.04) rotate(0.001deg)" : "translate3d(1.5%, -1%, 0) scale(0.985) rotate(0.001deg)",
		transition: [`opacity 440ms ${xn}`, `transform 580ms ${xn}`].join(", ")
	}, m = {
		backgroundImage: d ? "linear-gradient(105deg, transparent 0%, transparent 38%, color-mix(in oklab, white 18%, transparent) 50%, transparent 62%, transparent 100%)" : "none",
		opacity: 0
	};
	return /* @__PURE__ */ k("div", {
		"data-slot": "credit-card-layout",
		"data-theme": i,
		className: Q(["relative isolate flex w-full min-w-0 flex-col overflow-hidden rounded-[var(--pc-radius-lg)] bg-[var(--pc-color-surface)] pt-1 @xl:pt-2 pr-1 @xl:pr-2 pb-3 @xl:pb-4 pl-1 @xl:pl-2 text-[var(--pc-color-text)]", "transition-[background-color,color,transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-colors motion-safe:will-change-[background-color,color,transform]"].filter(Boolean).join(" "), o),
		children: [
			/* @__PURE__ */ O("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-ambient-glow",
				style: f,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ O("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-spotlight-inner",
				style: p,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ O("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-brand-sheen",
				style: m,
				className: Q("pointer-events-none absolute -inset-x-1 inset-y-0 z-0 mix-blend-screen", d && "pc-card-brand-sheen-enter")
			}, `sheen:${a ?? i}`),
			/* @__PURE__ */ O("div", {
				"data-slot": "credit-card-layout-card-fields",
				className: Q("relative z-10 w-full min-w-0 px-1 pt-2", s),
				children: /* @__PURE__ */ O("div", {
					"data-slot": "credit-card-layout-card-fields-content",
					className: "w-full min-w-0",
					children: e
				})
			}),
			t != null && /* @__PURE__ */ O("div", {
				"data-slot": "credit-card-layout-details",
				className: Q("relative z-10 mt-2 w-full min-w-0 px-1", c),
				children: /* @__PURE__ */ O("div", {
					"data-slot": "credit-card-layout-details-content",
					className: "w-full min-w-0",
					children: t
				})
			}),
			u && /* @__PURE__ */ O("div", {
				"data-slot": "credit-card-layout-footer",
				className: Q("relative z-10 flex min-h-7 items-center justify-end px-1 md:min-h-8", n == null && "invisible", l),
				children: n
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/Section.tsx
var Cn = {
	xl: {
		gapClassName: "gap-5",
		paddingClassName: "p-5",
		compactPaddingClassName: "p-4",
		paddingInsetClassName: "[--pc-section-edge-inset:1.25rem]",
		compactPaddingInsetClassName: "[--pc-section-edge-inset:1rem]",
		paddingOffsetClassName: "[--pc-section-edge-offset:-1.25rem]",
		compactPaddingOffsetClassName: "[--pc-section-edge-offset:-1rem]",
		roundingClassName: "rounded-[var(--pc-radius-xl)]",
		fontClassName: "text-xl"
	},
	lg: {
		gapClassName: "gap-4",
		paddingClassName: "p-4",
		compactPaddingClassName: "p-3",
		paddingInsetClassName: "[--pc-section-edge-inset:1rem]",
		compactPaddingInsetClassName: "[--pc-section-edge-inset:0.75rem]",
		paddingOffsetClassName: "[--pc-section-edge-offset:-1rem]",
		compactPaddingOffsetClassName: "[--pc-section-edge-offset:-0.75rem]",
		roundingClassName: "rounded-[var(--pc-radius-xl)]",
		fontClassName: "text-lg"
	},
	md: {
		gapClassName: "gap-3",
		paddingClassName: "p-3",
		compactPaddingClassName: "p-2",
		paddingInsetClassName: "[--pc-section-edge-inset:0.75rem]",
		compactPaddingInsetClassName: "[--pc-section-edge-inset:0.5rem]",
		paddingOffsetClassName: "[--pc-section-edge-offset:-0.75rem]",
		compactPaddingOffsetClassName: "[--pc-section-edge-offset:-0.5rem]",
		roundingClassName: "rounded-[var(--pc-radius-lg)]",
		fontClassName: "text-base"
	},
	sm: {
		gapClassName: "gap-2",
		paddingClassName: "p-2.5",
		compactPaddingClassName: "p-1.5",
		paddingInsetClassName: "[--pc-section-edge-inset:0.625rem]",
		compactPaddingInsetClassName: "[--pc-section-edge-inset:0.375rem]",
		paddingOffsetClassName: "[--pc-section-edge-offset:-0.625rem]",
		compactPaddingOffsetClassName: "[--pc-section-edge-offset:-0.375rem]",
		roundingClassName: "rounded-[var(--pc-radius-md)]",
		fontClassName: "text-sm"
	},
	xs: {
		gapClassName: "gap-1.5",
		paddingClassName: "p-1.5",
		compactPaddingClassName: "p-1",
		paddingInsetClassName: "[--pc-section-edge-inset:0.375rem]",
		compactPaddingInsetClassName: "[--pc-section-edge-inset:0.25rem]",
		paddingOffsetClassName: "[--pc-section-edge-offset:-0.375rem]",
		compactPaddingOffsetClassName: "[--pc-section-edge-offset:-0.25rem]",
		roundingClassName: "rounded-[var(--pc-radius-sm)]",
		fontClassName: "text-xs"
	}
};
function wn({ children: e, size: t = "md", spacing: n = "default", fill: r = !1, fillMode: i = "full", grow: a = !1, scroll: o = !1, variant: s, inheritTheme: c = !1, as: l = "section", id: u, role: d, ariaLabel: f, ariaDescribedBy: p, ariaLabelledBy: m }) {
	let h = c ? void 0 : dn(s) ?? "neutral", g = Cn[t], _ = Y("flex flex-col", n === "flush" ? Y("gap-0 p-0", "[--pc-section-edge-inset:0px]", "[--pc-section-edge-offset:0px]") : n === "compact" ? Y(g.gapClassName, g.compactPaddingClassName, g.compactPaddingInsetClassName, g.compactPaddingOffsetClassName) : Y(g.gapClassName, g.paddingClassName, g.paddingInsetClassName, g.paddingOffsetClassName), (() => {
		if (r) return i === "max" ? Y("max-h-full w-full min-h-0 min-w-0", a && "flex-1", !o && "overflow-hidden") : Y("h-full w-full min-h-0 min-w-0", a && "flex-1");
	})(), o ? "overflow-y-auto [scrollbar-gutter:stable]" : void 0, g.roundingClassName, g.fontClassName, "text-[var(--pc-color-text)]", "[background:var(--pc-color-surface)]");
	return O(l === "article" ? "article" : l === "div" ? "div" : "section", {
		"data-theme": h,
		className: _,
		id: u,
		role: d,
		"aria-label": f,
		"aria-describedby": p,
		"aria-labelledby": m,
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/useElementOverflow.ts
var Tn = ({ axis: e, element: t }) => {
	let n = Math.ceil(t.scrollWidth) > Math.ceil(t.clientWidth), r = Math.ceil(t.scrollHeight) > Math.ceil(t.clientHeight);
	switch (e) {
		case "horizontal": return n;
		case "vertical": return r;
		default: return n || r;
	}
};
function En({ enabled: e = !0, axis: t = "both" } = {}) {
	let [n, r] = T(null), [i, a] = T(!1), o = g((r = n) => {
		if (!e || !r) return a(!1), !1;
		let i = Tn({
			axis: t,
			element: r
		});
		return a((e) => e === i ? e : i), i;
	}, [
		t,
		n,
		e
	]), s = g((e) => {
		r(e), o(e);
	}, [o]);
	return v(() => {
		if (!e || !n || typeof window > "u") return;
		let t = () => {
			o(n);
		};
		return window.addEventListener("resize", t), () => {
			window.removeEventListener("resize", t);
		};
	}, [
		n,
		e,
		o
	]), v(() => {
		if (!e || !n || typeof ResizeObserver != "function") return;
		let t = new ResizeObserver(() => {
			o(n);
		});
		return t.observe(n), () => {
			t.disconnect();
		};
	}, [
		n,
		e,
		o
	]), {
		element: n,
		isOverflowed: i,
		registerElement: s,
		syncOverflow: o
	};
}
//#endregion
//#region ../ui/src/lib/Toolbar.tsx
var Dn = {
	xl: {
		gap: "gap-4",
		columnGap: "gap-1.5",
		headlineRowGap: "gap-3",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-4",
		leadingVisualClassName: "self-center h-16 w-16",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-3xl font-medium leading-tight text-[var(--pc-color-text)]",
		subheaderClassName: "text-base leading-tight text-[var(--pc-color-text-muted)]",
		padding: {
			top: "pt-4",
			right: "pr-6",
			bottom: "pb-4",
			left: "pl-6"
		}
	},
	lg: {
		gap: "gap-3",
		columnGap: "gap-1",
		headlineRowGap: "gap-2",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-14 w-14",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-2xl font-medium leading-tight text-[var(--pc-color-text)]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-text-muted)]",
		padding: {
			top: "pt-3",
			right: "pr-4",
			bottom: "pb-3",
			left: "pl-4"
		}
	},
	md: {
		gap: "gap-2",
		columnGap: "gap-0.5",
		headlineRowGap: "gap-2",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-12 w-12",
		actionsGap: "gap-2",
		secondaryActionsGap: "gap-2",
		headlineClassName: "text-xl font-medium leading-tight text-[var(--pc-color-text)]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-text-muted)]",
		padding: {
			top: "pt-3",
			right: "pr-4",
			bottom: "pb-3",
			left: "pl-4"
		}
	},
	sm: {
		gap: "gap-2",
		columnGap: "gap-[0.1875rem]",
		headlineRowGap: "gap-1.5",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-10 w-10",
		actionsGap: "gap-1.5",
		secondaryActionsGap: "gap-1.5",
		headlineClassName: "text-lg font-medium leading-tight text-[var(--pc-color-text)]",
		subheaderClassName: "text-sm leading-tight text-[var(--pc-color-text-muted)]",
		padding: {
			top: "pt-2.5",
			right: "pr-2.5",
			bottom: "pb-2.5",
			left: "pl-2.5"
		}
	},
	xs: {
		gap: "gap-1.5",
		columnGap: "gap-0",
		headlineRowGap: "gap-1",
		inlineActionsOffset: "ml-1",
		leadingVisualGap: "gap-3",
		leadingVisualClassName: "self-center h-9 w-9",
		actionsGap: "gap-1",
		secondaryActionsGap: "gap-1",
		headlineClassName: "text-base font-medium leading-tight text-[var(--pc-color-text)]",
		subheaderClassName: "text-xs leading-tight text-[var(--pc-color-text-muted)]",
		padding: {
			top: "pt-2",
			right: "pr-2.5",
			bottom: "pb-2",
			left: "pl-2.5"
		}
	}
}, On = {
	solid: "bg-[var(--pc-color-surface)] text-[var(--pc-color-text)]",
	ghost: "bg-transparent text-[var(--pc-color-text)]",
	outline: Y("border border-[var(--pc-color-border)]", "bg-[var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-text)]"),
	muted: "bg-[var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]"
}, kn = "border-b border-[var(--pc-color-border)]", An = {
	xl: "xl",
	lg: "lg",
	md: "md",
	sm: "sm",
	xs: "xs"
}, jn = {
	n: { top: !0 },
	ne: {
		top: !0,
		right: !0
	},
	e: { right: !0 },
	se: {
		right: !0,
		bottom: !0
	},
	s: { bottom: !0 },
	sw: {
		bottom: !0,
		left: !0
	},
	w: { left: !0 },
	nw: {
		top: !0,
		left: !0
	},
	c: {}
}, Mn = {
	top: !1,
	right: !1,
	bottom: !1,
	left: !1
}, Nn = (e) => An[e], Pn = (e) => Array.isArray(e), Fn = (e) => e === !0 ? {
	top: !0,
	right: !0,
	bottom: !0,
	left: !0
} : !Pn(e) || e.length === 0 ? Mn : e.reduce((e, t) => {
	let n = jn[t];
	return {
		top: e.top || !!n.top,
		right: e.right || !!n.right,
		bottom: e.bottom || !!n.bottom,
		left: e.left || !!n.left
	};
}, Mn), In = (e, t) => {
	let n = Fn(t);
	return Y(n.top ? "pt-0" : e.padding.top, n.right ? "pr-0" : e.padding.right, n.bottom ? "pb-0" : e.padding.bottom, n.left ? "pl-0" : e.padding.left);
}, Ln = (e) => {
	let t = 0, n = (e) => {
		let r = o.toArray(e);
		return r.length === 0 ? !1 : r.every((e) => {
			if (typeof e == "boolean") return !0;
			if (typeof e == "string" || typeof e == "number") return String(e).trim().length === 0;
			if (!p(e)) return !1;
			let r = e.props;
			return r.iconOnly === !0 || r["data-icon-only"] === !0 || r["data-icon-only"] === "true" ? (t += 1, !0) : "children" in r ? n(r.children) : !1;
		});
	};
	return n(e) && t > 0 ? t : null;
};
function Rn({ className: e, container: t = !0, leadingClassName: n, leadingVisual: r, leadingVisualClassName: i, leadingContentClassName: a, headline: o, headlineId: s, headlineClassName: c, headlineRowClassName: l, subheader: u, subheaderId: d, subheaderClassName: f, startActions: p, actions: m, actionsClassName: h, secondaryActions: _, secondaryActionsClassName: v, inlineActionsClassName: y, size: b = "lg", variant: x = "default", appearance: C = "ghost", flush: w = !1, divider: T = !1, as: E = "header", actionsAlign: D = "centre", headlineTooltip: ee }) {
	let A = Dn[b], j = dn(x), M = ee?.showWhenOverflowed === !0, { isOverflowed: N, registerElement: P, syncOverflow: F } = En({
		enabled: M,
		axis: "horizontal"
	}), I = g((e) => {
		F(e.currentTarget);
	}, [F]), L = g((e) => {
		F(e.currentTarget);
	}, [F]), R = g((e) => {
		F(e.currentTarget);
	}, [F]), z = S(() => o ? /* @__PURE__ */ O("h2", {
		id: s,
		ref: P,
		className: Q(A.headlineClassName, "inline-block max-w-full align-top", M && "truncate", c),
		onMouseEnter: I,
		onMouseMove: L,
		onFocus: R,
		children: o
	}) : null, [
		R,
		I,
		L,
		o,
		c,
		s,
		P,
		M,
		A.headlineClassName
	]), B = S(() => u == null ? null : typeof u == "string" || typeof u == "number" ? /* @__PURE__ */ O("p", {
		id: d,
		className: Q(A.subheaderClassName, f),
		children: u
	}) : u, [
		A.subheaderClassName,
		u,
		f,
		d
	]), V = ee?.label ?? (typeof o == "string" || typeof o == "number" ? String(o) : void 0), H = !!(ee && z), te = !V || M && !N, U = H && z ? /* @__PURE__ */ O(Rt, {
		label: V,
		placement: ee?.placement,
		positionMode: ee?.positionMode,
		offset: ee?.offset,
		disabled: te,
		children: z
	}) : z, W = !!z, G = !!B, K = !!r, ne = !!p, re = Ln(m), ie = b === "xs" && W && re !== null && re > 1, ae = ie ? m : null, oe = W || ne, se = !!_, ce = !!m && !ie, le = oe || G || se, ue = K || le, de;
	ue && (de = D === "centre" ? "self-center" : "self-start");
	let fe = ue ? /* @__PURE__ */ k("div", {
		"data-slot": "toolbar-leading",
		className: Y("min-w-0 flex", K ? "items-stretch" : "flex-col", K ? A.leadingVisualGap : A.columnGap, n),
		children: [K ? /* @__PURE__ */ O("div", {
			"data-slot": "toolbar-leading-visual",
			className: Y("flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--pc-radius)]", "text-[var(--pc-color-text)]", "[&_img]:h-full [&_img]:w-full [&_img]:object-contain", "[&_svg]:h-full [&_svg]:w-full", A.leadingVisualClassName, i),
			children: r
		}) : null, le ? /* @__PURE__ */ k("div", {
			"data-slot": "toolbar-leading-content",
			className: Q("min-w-0 flex flex-1 flex-col", K && "justify-center", A.columnGap, a),
			children: [
				oe ? /* @__PURE__ */ k("div", {
					"data-slot": "toolbar-headline-row",
					className: Y("flex min-w-0 items-center", W && (ne || ie) ? "flex-nowrap" : "flex-wrap", A.headlineRowGap, l),
					children: [
						W ? /* @__PURE__ */ O("div", {
							"data-slot": "toolbar-headline-content",
							className: Y("max-w-full min-w-0", !ne && !ie && "flex-1"),
							children: U
						}) : null,
						p,
						ae ? /* @__PURE__ */ O("div", {
							"data-slot": "toolbar-inline-actions",
							className: Y("flex shrink-0 items-center", A.inlineActionsOffset, A.actionsGap, y),
							children: ae
						}) : null
					]
				}) : null,
				G ? /* @__PURE__ */ O("div", {
					"data-slot": "toolbar-subheader",
					className: "min-w-0",
					children: B
				}) : null,
				se ? /* @__PURE__ */ O("div", {
					"data-slot": "toolbar-secondary-actions",
					className: Y("flex min-w-0 flex-wrap items-center", A.secondaryActionsGap, v),
					children: _
				}) : null
			]
		}) : null]
	}) : null, q = ce ? /* @__PURE__ */ O("div", {
		"data-slot": "toolbar-actions",
		className: Y("flex min-w-0 max-w-full items-center justify-self-end overflow-hidden", A.actionsGap, de, h),
		children: m
	}) : null, pe = ue && ce ? /* @__PURE__ */ k("div", {
		"data-slot": "toolbar-layout",
		className: Y("grid", "grid-cols-[minmax(0,1fr)_fit-content(100%)]", D === "centre" ? "items-center" : "items-start", "gap-2"),
		children: [fe, q]
	}) : ue ? fe : ce ? /* @__PURE__ */ O("div", {
		"data-slot": "toolbar-layout",
		className: "flex justify-end",
		children: q
	}) : null;
	return /* @__PURE__ */ O(E, {
		"data-slot": "toolbar",
		"data-theme": j,
		className: Y(t && "@container", "min-w-0", "flex flex-col", "text-[var(--pc-color-text)]", On[C], A.gap, In(A, w), T && kn, e),
		children: pe
	});
}
//#endregion
//#region ../ui/src/assets/logo.svg
var zn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%20182%20112.5'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23231f20;%20}%20.st2%20{%20clip-path:%20url(%23clippath-1);%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='112.5'%20width='69.5'%20height='112.5'%20rx='9.7'%20ry='9.7'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3crect%20class='st0'%20width='112.5'%20height='112.5'%20rx='9.8'%20ry='9.8'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st1'%20d='M172.2,112.1V0h12.2v112.1h-12.2Z'/%3e%3cpath%20class='st1'%20d='M160.2,112.1V0h9.8v112.1h-9.8Z'/%3e%3cpath%20class='st1'%20d='M148.3,112.1V0h7.4v112.1h-7.4Z'/%3e%3cpath%20class='st1'%20d='M136.3,112.1V0h4.9v112.1h-4.9Z'/%3e%3cpath%20class='st1'%20d='M124.4,112.1V0h2.5v112.1h-2.5Z'/%3e%3cpath%20class='st1'%20d='M112.4,112.1V0h0v112.1h0Z'/%3e%3c/g%3e%3c/g%3e%3cg%20class='st2'%3e%3cg%3e%3cpath%20class='st1'%20d='M103.4,112.1V0h10.8v112.1h-10.8Z'/%3e%3cpath%20class='st1'%20d='M90.4,112.1V0h9.5v112.1h-9.5Z'/%3e%3cpath%20class='st1'%20d='M77.5,112.1V0h8.1v112.1h-8.1Z'/%3e%3cpath%20class='st1'%20d='M64.6,112.1V0h6.8v112.1h-6.8Z'/%3e%3cpath%20class='st1'%20d='M51.7,112.1V0h5.4v112.1h-5.4Z'/%3e%3cpath%20class='st1'%20d='M38.8,112.1V0h4.1v112.1h-4.1Z'/%3e%3cpath%20class='st1'%20d='M25.8,112.1V0h2.8v112.1h-2.8Z'/%3e%3cpath%20class='st1'%20d='M12.9,112.1V0h1.4v112.1h-1.4Z'/%3e%3cpath%20class='st1'%20d='M0,112.1V0h.1v112.1h-.1Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Bn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%20182%20112.5'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23231f20;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20.st1%20{%20fill:%20%23e0ff7b;%20}%20}%20.st2%20{%20clip-path:%20url(%23clippath-1);%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='112.5'%20width='69.5'%20height='112.5'%20rx='9.7'%20ry='9.7'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3crect%20class='st0'%20width='112.5'%20height='112.5'%20rx='9.8'%20ry='9.8'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st1'%20d='M172.2,112.1V0h12.2v112.1h-12.2Z'/%3e%3cpath%20class='st1'%20d='M160.2,112.1V0h9.8v112.1h-9.8Z'/%3e%3cpath%20class='st1'%20d='M148.3,112.1V0h7.4v112.1h-7.4Z'/%3e%3cpath%20class='st1'%20d='M136.3,112.1V0h4.9v112.1h-4.9Z'/%3e%3cpath%20class='st1'%20d='M124.4,112.1V0h2.5v112.1h-2.5Z'/%3e%3cpath%20class='st1'%20d='M112.4,112.1V0h0v112.1h0Z'/%3e%3c/g%3e%3c/g%3e%3cg%20class='st2'%3e%3cg%3e%3cpath%20class='st1'%20d='M103.4,112.1V0h10.8v112.1h-10.8Z'/%3e%3cpath%20class='st1'%20d='M90.4,112.1V0h9.5v112.1h-9.5Z'/%3e%3cpath%20class='st1'%20d='M77.5,112.1V0h8.1v112.1h-8.1Z'/%3e%3cpath%20class='st1'%20d='M64.6,112.1V0h6.8v112.1h-6.8Z'/%3e%3cpath%20class='st1'%20d='M51.7,112.1V0h5.4v112.1h-5.4Z'/%3e%3cpath%20class='st1'%20d='M38.8,112.1V0h4.1v112.1h-4.1Z'/%3e%3cpath%20class='st1'%20d='M25.8,112.1V0h2.8v112.1h-2.8Z'/%3e%3cpath%20class='st1'%20d='M12.9,112.1V0h1.4v112.1h-1.4Z'/%3e%3cpath%20class='st1'%20d='M0,112.1V0h.1v112.1h-.1Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Vn = (e) => {
	if (typeof e == "string") return e;
	if (e instanceof URL) return e.toString();
	if (typeof e == "object" && "src" in e) {
		let t = e.src;
		if (typeof t == "string") return t;
	}
	return "/favicon.ico";
};
Vn(zn), Vn(Bn);
//#endregion
//#region ../ui/src/lib/RandomShape.tsx
var Hn = [
	({ fill: e }) => /* @__PURE__ */ O("circle", {
		cx: "50",
		cy: "50",
		r: "32",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ O("rect", {
		x: "22",
		y: "22",
		width: "56",
		height: "56",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ O("rect", {
		x: "20",
		y: "20",
		width: "60",
		height: "60",
		rx: "12",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ O("polygon", {
		points: "50,18 82,82 18,82",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ O("polygon", {
		points: "50,12 86,50 50,88 14,50",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ O("polygon", {
		points: "50,12 82,30 82,70 50,88 18,70 18,30",
		fill: e
	})
], Un = {
	compact: "h-6 w-6",
	default: "h-8 w-8",
	large: "h-12 w-12"
}, Wn = {
	compact: "text-xs",
	default: "text-lg",
	large: "text-2xl"
}, Gn = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n += 1) t = t * 31 + e.charCodeAt(n) | 0;
	return Math.abs(t);
}, Kn = (e) => {
	let t = e?.trim() ?? "";
	return t ? t.slice(0, 2).toUpperCase() : "";
};
function qn({ seed: e, ariaLabel: t, scale: n = 1, size: r, initials: i, tone: a = "secondary" }) {
	let o = Hn[Gn(e) % Hn.length], s = n > 0 ? n : 1, c = s === 1 ? void 0 : `translate(50 50) scale(${String(s)}) translate(-50 -50)`, l = !t, u = Kn(i), d = u.length > 0, f = r ? Un[r] : "h-full w-full", p = r ? Wn[r] : "text-base", m = "var(--pc-color-text)";
	a === "primary" && (m = "var(--pc-color-primary)"), a === "surface" && (m = "var(--pc-color-surface)");
	let h = "text-[var(--pc-color-surface)]";
	return a === "primary" && (h = "text-[var(--pc-color-secondary)]"), a === "surface" && (h = "text-[var(--pc-color-text)]"), /* @__PURE__ */ k("div", {
		className: Y("relative flex items-center justify-center", h, f),
		"aria-hidden": l || void 0,
		children: [/* @__PURE__ */ O("svg", {
			viewBox: "0 0 100 100",
			className: "h-full w-full block",
			role: l ? void 0 : "img",
			"aria-label": l ? void 0 : t,
			"aria-hidden": l,
			focusable: "false",
			children: /* @__PURE__ */ O("g", {
				transform: c,
				children: /* @__PURE__ */ O(o, { fill: m })
			})
		}), d && /* @__PURE__ */ O("span", {
			className: Y("absolute inset-0 flex items-center justify-center", "font-normal uppercase", p),
			"aria-hidden": "true",
			children: u
		})]
	});
}
//#endregion
//#region ../ui/src/lib/logoTone.ts
var Jn = (e, t) => {
	if (typeof e.getPropertyValue == "function") {
		let n = e.getPropertyValue(t);
		if (typeof n == "string" && n.length > 0) return n;
	}
	let n = e[t];
	return typeof n == "string" ? n : "";
}, Yn = (e, t) => e === null ? !1 : t?.allowTransparent ? e <= .01 : e < .95, Xn = (e, t, n) => Math.min(n, Math.max(t, e)), Zn = (e, t) => {
	let n = e.trim();
	if (n.endsWith("%")) {
		let e = Number(n.slice(0, -1));
		return Number.isNaN(e) ? null : Xn(e / 100 * t, 0, t);
	}
	let r = Number(n);
	return Number.isNaN(r) ? null : Xn(r, 0, t);
}, Qn = (e, t) => {
	let n = /^rgba?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = Zn(r[0], 255), a = Zn(r[1], 255), o = Zn(r[2], 255);
	if (i === null || a === null || o === null) return null;
	let s = r.length >= 4 ? Zn(r[3], 1) : 1;
	return Yn(s, t) ? null : {
		r: i,
		g: a,
		b: o,
		alpha: s ?? 1
	};
}, $n = (e, t) => {
	let n = /^hsla?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = r[0].trim().toLowerCase(), a = Number(i.replace("deg", ""));
	if (i.endsWith("rad") && (a = Number(i.replace("rad", "")) * 180 / Math.PI), i.endsWith("turn") && (a = Number(i.replace("turn", "")) * 360), Number.isNaN(a)) return null;
	let o = Zn(r[1], 100), s = Zn(r[2], 100), c = r.length >= 4 ? Zn(r[3], 1) : 1;
	if (Yn(c, t) || o === null || s === null) return null;
	let l = o / 100, u = s / 100, d = (1 - Math.abs(2 * u - 1)) * l, f = (a % 360 + 360) % 360 / 60, p = d * (1 - Math.abs(f % 2 - 1)), m = 0, h = 0, g = 0;
	f >= 0 && f < 1 ? (m = d, h = p) : f >= 1 && f < 2 ? (m = p, h = d) : f >= 2 && f < 3 ? (h = d, g = p) : f >= 3 && f < 4 ? (h = p, g = d) : f >= 4 && f < 5 ? (m = p, g = d) : (m = d, g = p);
	let _ = u - d / 2;
	return {
		r: Xn((m + _) * 255, 0, 255),
		g: Xn((h + _) * 255, 0, 255),
		b: Xn((g + _) * 255, 0, 255),
		alpha: c ?? 1
	};
}, er = (e, t) => {
	let n = /^color\(\s*srgb\s+([^)]+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = (e) => {
		let t = e.trim();
		if (t.endsWith("%")) {
			let e = Number(t.slice(0, -1));
			return Number.isNaN(e) ? null : Xn(e / 100 * 255, 0, 255);
		}
		let n = Number(t);
		return Number.isNaN(n) ? null : Xn(n > 1 ? n : n * 255, 0, 255);
	}, a = i(r[0]), o = i(r[1]), s = i(r[2]), c = r.length >= 4 ? Zn(r[3], 1) : 1;
	return Yn(c, t) || a === null || o === null || s === null ? null : {
		r: a,
		g: o,
		b: s,
		alpha: c ?? 1
	};
}, tr = (e, t) => {
	let n = e.trim().replace("#", "");
	if (![
		3,
		4,
		6,
		8
	].includes(n.length)) return null;
	let r = n.length === 3 || n.length === 4 ? n.split("").map((e) => `${e}${e}`).join("") : n, i = r.length === 8 ? Number.parseInt(r.slice(6, 8), 16) / 255 : 1;
	if (Yn(i, t)) return null;
	let a = Number.parseInt(r.slice(0, 2), 16), o = Number.parseInt(r.slice(2, 4), 16), s = Number.parseInt(r.slice(4, 6), 16);
	return Number.isNaN(a) || Number.isNaN(o) || Number.isNaN(s) ? null : {
		r: a,
		g: o,
		b: s,
		alpha: i
	};
}, nr = (e, t) => {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length === 0 ? null : n.startsWith("#") ? tr(n, t) : Qn(n, t) ?? $n(n, t) ?? er(n, t);
}, rr = (e, t) => {
	let n = e.alpha + t.alpha * (1 - e.alpha);
	return n <= 0 ? {
		r: 0,
		g: 0,
		b: 0,
		alpha: 0
	} : {
		r: (e.r * e.alpha + t.r * t.alpha * (1 - e.alpha)) / n,
		g: (e.g * e.alpha + t.g * t.alpha * (1 - e.alpha)) / n,
		b: (e.b * e.alpha + t.b * t.alpha * (1 - e.alpha)) / n,
		alpha: n
	};
}, ir = (e, t) => e ? e.alpha >= .999 || !t ? e : rr(e, t) : null, ar = (e, t, n, r) => {
	if (typeof window > "u") return null;
	let i = e.ownerDocument, a = i.defaultView;
	if (!a) return null;
	let o = e;
	for (; o;) {
		let e = i.createElement("div");
		e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.inset = "0", e.style.backgroundColor = "transparent", e.style.color = "transparent", e.style[n] = `var(${t})`, o.appendChild(e);
		let s = Jn(a.getComputedStyle(e), n);
		e.remove();
		let c = nr(s, { allowTransparent: !0 });
		if (c) return ir(c, r?.(o.parentElement ?? null) ?? null);
		o = o.parentElement;
	}
	return null;
}, or = (e) => {
	let t = e.match(/#[\da-fA-F]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\)|color\(\s*srgb[^)]*\)/g);
	if (!t) return null;
	for (let e of t) {
		let t = nr(e);
		if (t) return t;
	}
	return null;
}, sr = (e) => {
	if (typeof window > "u" || !e) return null;
	let t = e.ownerDocument.defaultView;
	if (!t) return null;
	let n = (e) => {
		if (!e) return null;
		let r = n(e.parentElement), i = t.getComputedStyle(e), a = nr(Jn(i, "backgroundColor"), { allowTransparent: !0 });
		if (a) return ir(a, r);
		let o = Jn(i, "backgroundImage");
		if (o && o !== "none") {
			let e = or(o);
			if (e) return ir(e, r);
		}
		return r;
	};
	return n(e);
}, cr = (e, t) => {
	if (typeof window > "u") return null;
	let n = e.ownerDocument.defaultView;
	if (!n) return null;
	let r = e;
	for (; r;) {
		let e = nr(Jn(n.getComputedStyle(r), t), { allowTransparent: !0 });
		if (e) return ir(e, sr(r.parentElement));
		r = r.parentElement;
	}
	return ar(e, t, "backgroundColor", sr);
}, lr = ({ r: e, g: t, b: n }) => {
	let r = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, i = r(e), a = r(t), o = r(n);
	return .2126 * i + .7152 * a + .0722 * o;
}, ur = (e) => e ? lr(e) < .5 : !1, dr = (e, t) => e && ur(cr(e, t?.tokenName ?? "--pc-color-surface") ?? sr(e)) ? "dark" : "default", fr = .64, pr = 1, mr = .85, hr = .84, gr = 1, _r = pr / fr, vr = mr / fr, yr = hr / fr, br = gr / fr, xr = 1.25, Sr = 1.6, Cr = 1.12, wr = 1.18, Tr = .6, Er = .45, Dr = 1.12, Or = 1.18, kr = 1.22, Ar = 1.28, jr = ["compact-default", "compact-dark"], Mr = (e, t, n) => {
	if (!e) return [];
	if (typeof e == "string") return [e];
	let r = e, i = t === "dark" ? "dark" : "default", a = t === "dark" ? "default" : "dark", o = (n ? [
		t === "dark" ? "compact-dark" : "compact-default",
		t === "dark" ? "compact-default" : "compact-dark",
		i,
		a
	] : [i, a]).map((e) => r[e]).filter((e) => !!e), s = Object.entries(r).filter((e) => typeof e[1] == "string" && e[1].length > 0).filter(([e]) => n || !jr.includes(e)).map(([, e]) => e), c = [...o, ...s], l = /* @__PURE__ */ new Set();
	return c.filter((e) => l.has(e) ? !1 : (l.add(e), !0));
}, Nr = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => n || e === "inline" ? "h-full w-full" : "h-[85%] w-[85%]", Pr = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => Y("flex items-center justify-center", "text-[var(--pc-color-text)]", e === "grid" ? "h-[42%] w-full max-w-[55%] @md:h-[45%]" : e === "inline" ? t ? "h-5 w-5 flex-shrink-0" : "h-8 w-8 flex-shrink-0" : t ? "h-10 w-10 flex-shrink-0" : "h-9 w-9 @sm:h-12 @sm:w-12 @xl:h-16 @xl:w-16 @3xl:h-16 @3xl:w-16 flex-shrink-0", n && [
	"group-data-[stuck=true]:h-5",
	"group-data-[stuck=true]:w-5",
	"@md:group-data-[stuck=true]:h-8",
	"@md:group-data-[stuck=true]:w-8"
]);
function Fr({ logo: e, alt: t, seed: n, className: r, tone: i, layout: a = "list", compact: o = !1, balanceLogo: s = !0, stuck: c = !1, stablePresentation: l = !1, content: u }) {
	let [d, f] = T(null), p = i ?? dr(d), m = a === "grid", h = s && !l && !m && !c, _ = Nr({
		layout: a,
		compact: o,
		stuck: c
	}), v = c ? br : o ? _r : m ? vr : yr, y = Pr({
		layout: a,
		compact: o,
		stuck: c
	}), b = l && typeof e == "object" && !!e && d === null, x = S(() => b ? [] : Mr(e, p, o), [
		o,
		e,
		b,
		p
	]), C = S(() => JSON.stringify(x), [x]), [w, E] = T({
		key: "",
		values: []
	}), D = S(() => {
		let e = w.key === C ? w.values : [];
		return x.find((t) => !e.includes(t));
	}, [
		C,
		w,
		x
	]), [k, ee] = T(null), A = g((e) => {
		if (!h) return 1;
		let { naturalWidth: t, naturalHeight: n } = e;
		if (!t || !n) return 1;
		let r = n / t;
		return r >= Sr ? wr : r >= xr ? Cr : r <= Er ? o ? Ar : Or : r <= Tr ? o ? kr : Dr : 1;
	}, [o, h]), j = D ? [
		D,
		h ? "balanced" : "static",
		o ? "compact" : "regular"
	].join("-") : "logo-fallback", M = k === j ? "opacity-100" : "opacity-0", N = g((e) => {
		let t = e.currentTarget, n = A(t);
		t.style.transform = n === 1 ? "" : `scale(${String(n)})`, ee(j);
	}, [A, j]), P = g((e) => {
		let t = e.currentTarget, n = t.getAttribute("src") || t.currentSrc || t.src;
		n && (ee(null), E((e) => {
			let t = C, r = e.key === t ? e.values : [], i = D ?? n;
			return r.includes(i) ? e : {
				key: t,
				values: [...r, i]
			};
		}));
	}, [C, D]), F = u;
	return F ??= D ? /* @__PURE__ */ O("img", {
		src: D,
		alt: t ?? "",
		className: Y("block object-contain origin-center", _, "transition-opacity duration-120 ease-out motion-reduce:transition-none", M),
		loading: l ? "eager" : "lazy",
		decoding: "async",
		onLoad: N,
		onError: P
	}, j) : b ? /* @__PURE__ */ O("span", {
		"aria-hidden": "true",
		className: _
	}) : /* @__PURE__ */ O(qn, {
		seed: n,
		ariaLabel: t,
		scale: v
	}), /* @__PURE__ */ O("div", {
		ref: f,
		className: Y(y, r),
		children: F
	});
}
//#endregion
//#region ../ui/src/lib/formFieldVisuals.ts
var Ir = {
	resting: "top-1/2 -translate-y-1/2 text-base font-medium",
	raised: "top-1 -translate-y-0 text-base font-medium",
	compactResting: "top-1/2 -translate-y-1/2 text-sm font-medium",
	compactRaised: "top-0.5 -translate-y-0 text-sm font-medium"
}, Lr = [
	"peer-focus:top-1",
	"peer-focus:-translate-y-0",
	"peer-focus:text-base",
	"peer-focus:font-medium"
].join(" "), Rr = [
	"peer-focus:top-0.5",
	"peer-focus:-translate-y-0",
	"peer-focus:text-sm",
	"peer-focus:font-medium"
].join(" "), zr = [
	"pointer-events-none",
	"h-4 w-4 shrink-0",
	"transition-transform duration-200 ease-out"
].join(" "), Br = ({ hasError: e, isRaised: t, isActiveTone: n, isDisabled: r = !1, tones: i }) => e ? i.error : r && i.disabled ? i.disabled : n ?? t ? i.active : i.inactive, Vr = ({ baseClassName: e, horizontalClassName: t, labelClassName: n, isCompact: r, isRaised: i, toneClassName: a, focusToneClassName: o, compactFocusRaiseClassName: s = Rr, defaultFocusRaiseClassName: c = Lr }) => {
	let l = Ir.resting;
	return i ? l = r ? Ir.compactRaised : Ir.raised : r && (l = Ir.compactResting), Q(Y(e, t, r ? s : c, l, a, o), n);
}, Hr = ({ hideLabel: e, isCompact: t, withLabelDefaultClassName: n, hiddenLabelDefaultClassName: r, withLabelCompactClassName: i, hiddenLabelCompactClassName: a }) => e ? t ? a ?? r : r : t ? i ?? n : n, Ur = ({ isOpen: e = !1, spinOnGroupFocus: t = !1 }) => Y(zr, e && "rotate-180", t && "group-focus-within:rotate-180"), Wr = (e) => Ur(e);
//#endregion
//#region ../ui/src/lib/icons/ChevronDownIcon.tsx
function Gr({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			d: "m6 8 4 4 4-4",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/DropdownListItem.tsx
var Kr = Y("group relative px-1 py-0.5 first:pt-1 last:pb-1"), qr = Y("flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm text-[var(--pc-color-text)] transition-colors", "hover:[background:var(--pc-color-depth-1)] active:[background:var(--pc-color-depth-1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:opacity-60", "data-[selected=true]:[background:var(--pc-color-depth-1)] data-[selected=true]:text-[var(--pc-color-text)]", "data-[selected=true]:hover:[background:var(--pc-color-depth-1)] data-[selected=true]:active:[background:var(--pc-color-depth-1)]"), Jr = Y("absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[var(--pc-radius-full)]", "cursor-pointer text-[var(--pc-color-text-muted)] transition-colors", "hover:[background:var(--pc-color-depth-1)] hover:text-[var(--pc-color-text)]", "active:[background:var(--pc-color-depth-1)] active:text-[var(--pc-color-text)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]"), Yr = f(function({ wrapperAs: e = "div", wrapperId: t, wrapperRole: n, wrapperAriaSelected: r, wrapperAriaDisabled: i, label: a, description: o, leading: s, trailing: c, selected: l = !1, highlighted: u = !1, disabled: f = !1, suppressDisabledCursor: p = !1, theme: m, role: h, ariaSelected: g, onClick: _, onMouseEnter: v, trailingAction: y }, b) {
	let x = e, S = dn(m), C = dn(y?.theme ?? m), w = Q(qr, y ? "pr-12" : void 0, !l && u ? "[background:var(--pc-color-depth-1)]" : void 0, p ? "disabled:cursor-default" : void 0);
	return d(x, {
		id: t,
		role: n,
		"aria-selected": r,
		"aria-disabled": i,
		className: Kr
	}, /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ k("button", {
		ref: b,
		type: "button",
		role: h,
		"aria-selected": g,
		disabled: f,
		"data-theme": S,
		"data-selected": l ? "true" : void 0,
		"data-disabled": f ? "true" : void 0,
		className: w,
		onClick: _,
		onMouseEnter: v,
		children: [
			s ? /* @__PURE__ */ O("span", {
				className: "flex h-4 w-4 items-center justify-center",
				children: s
			}) : null,
			/* @__PURE__ */ k("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ O("span", {
					className: "block truncate text-sm text-[var(--pc-color-text)]",
					children: a
				}), o ? /* @__PURE__ */ O("span", {
					className: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
					children: o
				}) : null]
			}),
			c
		]
	}), y ? /* @__PURE__ */ O("button", {
		type: "button",
		role: y.role,
		"aria-label": y.ariaLabel,
		disabled: f || y.disabled,
		"data-theme": C,
		"data-disabled": f || y.disabled ? "true" : void 0,
		className: Jr,
		onClick: y.onClick,
		children: /* @__PURE__ */ O("span", {
			className: "flex h-4 w-4 items-center justify-center",
			children: y.icon
		})
	}) : null] }));
}), Xr = u(null);
function Zr({ portalContainer: e, children: t }) {
	return /* @__PURE__ */ O(Xr.Provider, {
		value: e,
		children: t
	});
}
function Qr() {
	return _(Xr);
}
//#endregion
//#region ../ui/src/lib/DropdownMenu.tsx
var $r = 8, ei = 12, ti = 96, ni = 192, ri = 140, ii = 1e3, ai = [
	80,
	200,
	500
], oi = 24, si = (e) => {
	if (typeof queueMicrotask == "function") {
		queueMicrotask(e);
		return;
	}
	Promise.resolve().then(e);
}, ci = (e, t, n) => n < t ? t : Math.max(t, Math.min(e, n)), li = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => e >= n ? "below" : e >= ti ? e >= ri || t <= e ? "below" : "above" : t > e ? "above" : "below", ui = (e) => Math.max(ti, e), di = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => li({
	availableBelow: e,
	availableAbove: t,
	menuHeight: ui(n)
}), fi = (e) => {
	let t = window.getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(`${t.overflow}${t.overflowX}${t.overflowY}`);
}, pi = (e) => {
	let t = [], n = e.parentElement;
	for (; n;) fi(n) && t.push(n), n = n.parentElement;
	return t;
}, mi = (e, t) => Math.abs(e.top - t.top) > oi && Math.abs(e.bottom - t.bottom) > oi || Math.abs(e.left - t.left) > oi && Math.abs(e.right - t.right) > oi;
function hi({ id: e, options: t = [], renderContent: n, isOpen: r, theme: i, disabled: a = !1, align: o = "start", widthMode: s = "content", lockPlacementWhileOpen: c = !1, menuRole: l = "menu", labelledBy: u, className: d, anchorRef: f, usePortal: p = !1, portalContainer: m = null, onRequestClose: h }) {
	let _ = n !== void 0, y = r && (_ || t.length > 0), b = Qr(), x = m ?? b, C = w(null), E = w(null), D = w(null), k = w(0), A = w(null), j = w([]), [M, N] = T(null), P = p && typeof document < "u", F = P && !!x && x !== document.body, I = g(() => {
		A.current !== null && (window.cancelAnimationFrame(A.current), A.current = null);
		for (let e of j.current) window.clearTimeout(e);
		j.current = [];
	}, []);
	v(() => {
		r || (E.current = null, D.current = null, I());
	}, [I, r]);
	let L = g((e) => {
		let t = e.getBoundingClientRect();
		return D.current === null ? (D.current = t, t) : (mi(D.current, t) && (D.current = t), D.current);
	}, []), R = g(() => {
		if (!r || !P) return;
		let e = f?.current, t = C.current;
		if (!e || !t) return;
		let n = L(e), i = t.getBoundingClientRect(), a;
		if (F && x) {
			let e = x.getBoundingClientRect(), t = x.scrollTop, r = x.scrollLeft, l = t, u = t + x.clientHeight, d = r, f = r + x.clientWidth, p = Math.max(0, x.clientWidth - ei * 2), m = n.top - e.top + t, h = n.bottom - e.top + t, g = n.left - e.left + r, _ = n.right - e.left + r, v = u - h - $r - ei, y = m - l - $r - ei, b = di({
				availableBelow: v,
				availableAbove: y,
				menuHeight: i.height
			}), S = b;
			c && (E.current === null && (E.current = b), S = E.current);
			let C = Math.max(0, S === "below" ? v : y), w = Math.min(i.height || C, C), T = ci(S === "below" ? h + $r : m - $r - w, l + ei, u - ei - w), D = s === "anchor" ? n.width : Math.max(i.width, ni), O = p > 0 ? Math.min(D, p) : D;
			a = {
				top: T,
				left: ci(o === "end" ? _ - O : g, d + ei, f - ei - O),
				minWidth: s === "anchor" ? n.width : Math.max(n.width, O),
				width: s === "anchor" ? n.width : void 0,
				maxHeight: C
			};
		} else {
			let e = window.innerWidth, t = window.innerHeight, r = t - n.bottom - $r - ei, l = n.top - $r - ei, u = di({
				availableBelow: r,
				availableAbove: l,
				menuHeight: i.height
			}), d = u;
			c && (E.current === null && (E.current = u), d = E.current);
			let f = Math.max(0, d === "below" ? r : l), p = Math.min(i.height || f, f), m = ci(d === "below" ? n.bottom + $r : n.top - $r - p, ei, t - ei - p), h = s === "anchor" ? n.width : Math.max(i.width, ni);
			a = {
				top: m,
				left: ci(o === "end" ? n.right - h : n.left, ei, e - ei - h),
				minWidth: s === "anchor" ? n.width : Math.max(n.width, h),
				width: s === "anchor" ? n.width : void 0,
				maxHeight: f
			};
		}
		N((e) => e && e.top === a.top && e.left === a.left && e.minWidth === a.minWidth && e.width === a.width && e.maxHeight === a.maxHeight ? e : a);
	}, [
		o,
		f,
		L,
		r,
		F,
		c,
		x,
		P,
		s
	]), z = g(() => {
		I(), A.current = window.requestAnimationFrame(() => {
			A.current = null, R(), A.current = window.requestAnimationFrame(() => {
				A.current = null, R();
			});
		}), j.current = ai.map((e) => window.setTimeout(() => {
			R();
		}, e));
	}, [I, R]), B = g(() => {
		k.current = Date.now() + ii, z();
	}, [z]);
	v(() => () => {
		I();
	}, [I]);
	let V = g((e) => {
		if (C.current = e, !e) {
			N(null), D.current = null, I();
			return;
		}
		let t = !f?.current;
		R(), t && si(() => {
			C.current === e && R();
		});
	}, [
		f,
		I,
		R
	]);
	v(() => {
		if (!r || !P || typeof ResizeObserver > "u") return;
		let e = C.current;
		if (!e) return;
		let t = null, n = () => {
			t !== null && window.cancelAnimationFrame(t), t = window.requestAnimationFrame(() => {
				t = null, R();
			});
		}, i = new ResizeObserver(() => {
			n();
		});
		return i.observe(e), () => {
			i.disconnect(), t !== null && window.cancelAnimationFrame(t);
		};
	}, [
		f,
		r,
		P,
		R
	]), v(() => {
		if (!r || !P) return;
		let e = () => {
			D.current = null, R();
		}, t = (e) => {
			if (Date.now() < k.current) {
				R();
				return;
			}
			let t = e.target;
			t instanceof Node && C.current?.contains(t) || h?.();
		};
		window.addEventListener("resize", e), window.addEventListener("scroll", t, !0);
		let n = f?.current, i = n ? pi(n) : [];
		for (let e of i) e.addEventListener("scroll", t);
		return () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", t, !0);
			for (let e of i) e.removeEventListener("scroll", t);
		};
	}, [
		f,
		r,
		h,
		P,
		R
	]), v(() => {
		if (!r) return;
		let e = (e) => {
			let t = e.target;
			if (!(t instanceof Node)) return;
			let n = C.current, r = f?.current;
			n?.contains(t) || r?.contains(t) || h?.();
		}, t = (e) => {
			e.key === "Escape" && h?.();
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), window.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e), window.removeEventListener("keydown", t);
		};
	}, [
		f,
		r,
		h
	]);
	let H = S(() => !P || typeof document > "u" ? null : x ?? document.body, [x, P]), te = o === "end" ? "left-auto right-0" : "right-auto left-0", U = dn(i), W = "absolute top-full z-20 mt-2";
	P && (W = F ? "absolute z-[2200]" : "fixed z-[2200]");
	let G = Q(W, s === "anchor" ? "min-w-0 max-w-none" : "min-w-[12rem] max-w-[calc(100vw-1.5rem)]", "overflow-x-hidden overflow-y-auto rounded-[var(--pc-radius-2xl)] bg-[var(--pc-color-surface)] shadow-2xl [--tw-shadow-color:var(--pc-color-backdrop)] [&_button:not(:disabled)]:cursor-pointer", "text-[var(--pc-color-text)] border border-[var(--pc-color-depth-2)]", P ? "" : te, !P && s === "anchor" ? "w-full" : "", d), K = P ? M : null, ne = P ? {
		top: K?.top ?? -9999,
		left: K?.left ?? -9999,
		minWidth: K?.minWidth,
		width: K?.width,
		maxHeight: K?.maxHeight
	} : void 0;
	if (!y) return null;
	let re = null;
	_ && (re = typeof n == "function" ? n({ close: () => {
		h?.();
	} }) : n);
	let ie = (e) => (t) => {
		if (a || e.disabled) {
			t.preventDefault();
			return;
		}
		e.onSelect?.(t), h?.();
	}, ae = (e) => (t) => {
		let n = e.trailingAction;
		if (!n || a || e.disabled || n.disabled) {
			t.preventDefault();
			return;
		}
		n.onSelect?.(t), h?.();
	}, oe = /* @__PURE__ */ O("div", {
		id: e,
		ref: V,
		role: l,
		"aria-labelledby": u,
		className: G,
		style: ne,
		"data-theme": U,
		"data-dropdown-menu-owner": u,
		onMouseDownCapture: B,
		onTouchStartCapture: B,
		onKeyDownCapture: B,
		children: re ?? t.map((e, t) => {
			let n = e.trailingAction, r = e.id ?? String(t);
			return /* @__PURE__ */ O(Yr, {
				wrapperRole: "none",
				label: e.label,
				leading: e.icon,
				trailing: e.trailingIcon ? /* @__PURE__ */ O("span", {
					className: "flex h-4 w-4 items-center justify-center text-current",
					children: e.trailingIcon
				}) : void 0,
				selected: e.selected === !0,
				disabled: a || e.disabled,
				suppressDisabledCursor: e.suppressDisabledCursor,
				theme: e.theme,
				role: l === "menu" ? "menuitem" : void 0,
				onClick: ie(e),
				trailingAction: n ? {
					ariaLabel: n.ariaLabel,
					icon: n.icon,
					onClick: ae(e),
					disabled: a || e.disabled || n.disabled,
					theme: n.theme ?? e.theme,
					role: l === "menu" ? "menuitem" : void 0
				} : void 0
			}, r);
		})
	});
	return P && H ? ee(oe, H) : oe;
}
//#endregion
//#region ../ui/src/lib/SplitButton.tsx
var gi = f(function({ options: e, primaryOption: t, primaryLabel: n, leadingIcon: r, trailingIcon: i, variant: a = "secondary", appearance: o = "solid", size: s = "md", fullWidth: c = !1, loading: l = !1, disabled: u = !1, primaryDisabled: d = !1, toggleDisabled: f = !1, alignMenu: p = "start", toggleLabel: m = "Show more actions", primaryOpensMenu: h = !1 }, g) {
	let _ = !!t, x = t?.label ?? n;
	if (!_ && x == null) throw Error("SplitButton requires primaryLabel when no primaryOption is provided.");
	let [S, C] = T(!1), E = w(null), D = y(), ee = `${D}-menu`, A = h || !_, j = on({
		disabled: u,
		loading: l
	}), M = j || f || e.length === 0, N = j || d || !A && t?.disabled === !0 || A && M, P = N && M, F = S && !M, [I, L] = T(!1), [R, z] = T(!1);
	b(g, () => E.current ?? document.createElement("div")), v(() => {
		if (!R) return;
		let e = () => {
			z(!1);
		};
		return window.addEventListener("pointerup", e), window.addEventListener("pointercancel", e), window.addEventListener("blur", e), () => {
			window.removeEventListener("pointerup", e), window.removeEventListener("pointercancel", e), window.removeEventListener("blur", e);
		};
	}, [R]);
	let B = (e) => {
		let t = e.target;
		if (!(t instanceof Element)) return;
		let n = t.closest("button");
		!(n instanceof HTMLButtonElement) || n.disabled || e.button === 0 && z(!0);
	}, V = () => {
		M || C((e) => !e);
	};
	return /* @__PURE__ */ k("div", {
		ref: E,
		className: Y("relative inline-flex items-stretch", c && "w-full"),
		onMouseEnter: () => {
			L(!0);
		},
		onMouseLeave: () => {
			L(!1);
		},
		onPointerDown: B,
		onPointerLeave: () => {
			z(!1);
		},
		onPointerCancel: () => {
			z(!1);
		},
		"data-theme": dn(a),
		"data-loading": an(l),
		"data-disabled": an(P),
		"data-open": an(F),
		children: [
			/* @__PURE__ */ k("button", {
				type: "button",
				className: Y(Qt, tn(o), nn(o), en(o), Ht[s], c && "flex-1"),
				"data-loading": an(l),
				"data-disabled": an(N),
				"data-split-hover": an(I && !N),
				"data-split-press": an(R && !N),
				"data-open": an(A && F),
				"data-active": A ? an(F) : void 0,
				"data-toggled": A ? an(F) : void 0,
				"data-expanded": A ? an(F) : void 0,
				onClick: (e) => {
					if (N) {
						e.preventDefault();
						return;
					}
					if (A) {
						e.preventDefault(), V();
						return;
					}
					t?.onSelect?.(e);
				},
				"aria-haspopup": A ? "menu" : void 0,
				"aria-expanded": A ? F : void 0,
				"aria-controls": A ? ee : void 0,
				disabled: N,
				"aria-busy": l ? !0 : void 0,
				children: [l && /* @__PURE__ */ O("span", {
					className: "absolute inset-0 z-20 flex items-center justify-center",
					"aria-hidden": "true",
					children: /* @__PURE__ */ O(zt, {})
				}), /* @__PURE__ */ k("span", {
					className: sn({ loading: l }),
					children: [
						r ? /* @__PURE__ */ O("span", {
							className: "inline-flex items-center",
							children: r
						}) : null,
						x,
						i ? /* @__PURE__ */ O("span", {
							className: "inline-flex items-center",
							children: i
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ O("button", {
				id: D,
				type: "button",
				disabled: M,
				"aria-expanded": F,
				"aria-haspopup": "menu",
				"aria-controls": ee,
				"aria-label": m,
				className: Y($t, tn(o), nn(o), en(o), Ut[s]),
				"data-disabled": an(M),
				"data-split-hover": an(I && !M),
				"data-split-press": an(R && !M),
				"data-open": an(F),
				"data-active": an(F),
				"data-toggled": an(F),
				"data-expanded": an(F),
				onClick: () => {
					M || V();
				},
				children: /* @__PURE__ */ O("span", {
					className: Y("inline-flex items-center justify-center", Ur({ isOpen: F }), "scale-125"),
					children: /* @__PURE__ */ O(Gr, {})
				})
			}),
			/* @__PURE__ */ O(hi, {
				id: ee,
				options: e,
				isOpen: F,
				disabled: M,
				align: p,
				labelledBy: D,
				anchorRef: E,
				usePortal: !0,
				onRequestClose: () => {
					C(!1);
				}
			})
		]
	});
});
gi.displayName = "SplitButton";
//#endregion
//#region ../ui/src/lib/DropdownSearchInput.tsx
var _i = [
	"w-full rounded-[var(--pc-radius-full)] border-0",
	"[background:var(--pc-color-surface)]",
	"px-3 py-2 text-sm text-[var(--pc-color-text)]",
	"placeholder:text-[var(--pc-color-border)]",
	"transition-colors focus:[background:var(--pc-color-surface)]",
	"focus:outline-none disabled:cursor-default disabled:opacity-60"
].join(" "), vi = f(function({ value: e, onChange: t, onKeyDown: n, placeholder: r, ariaLabel: i, disabled: a = !1 }, o) {
	return /* @__PURE__ */ O("div", {
		className: "border-b border-[var(--pc-color-border-weakest)] px-1 py-2",
		children: /* @__PURE__ */ O("input", {
			ref: o,
			type: "text",
			autoComplete: "off",
			value: e,
			onChange: (e) => {
				t(e.currentTarget.value);
			},
			onKeyDown: n,
			className: _i,
			placeholder: r,
			"aria-label": i,
			disabled: a
		})
	});
});
vi.displayName = "DropdownSearchInput";
//#endregion
//#region ../../node_modules/@date-fns/tz/tzName/index.js
function yi(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region ../../node_modules/@date-fns/tz/tzOffset/index.js
var bi = {}, xi = {};
function Si(e, t) {
	try {
		let n = (bi[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in xi ? xi[n] : wi(n, n.split(":"));
	} catch {
		if (e in xi) return xi[e];
		let t = e?.match(Ci);
		return t ? wi(e, t.slice(1)) : NaN;
	}
}
var Ci = /([+-]\d\d):?(\d\d)?/;
function wi(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return xi[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/mini.js
var Ti = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(Si(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), ki(this, NaN), Di(this)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -Si(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), Di(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Ei = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Ei.test(e)) return;
	let t = e.replace(Ei, "$1UTC");
	Ti.prototype[t] && (e.startsWith("get") ? Ti.prototype[e] = function() {
		return this.internal[t]();
	} : (Ti.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), Oi(this), +this;
	}, Ti.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Di(this), +this;
	}));
});
function Di(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-Si(e.timeZone, e) * 60));
}
function Oi(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), ki(e);
}
function ki(e) {
	let t = Si(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let i = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = i - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	let s = i - n;
	s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
	let c = /* @__PURE__ */ new Date(+e);
	c.setUTCSeconds(0);
	let l = i > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, u = Math.round(-(Si(e.timeZone, e) * 60)) % 60;
	(u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
	let d = Si(e.timeZone, e), f = d > 0 ? Math.floor(d) : Math.ceil(d), p = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - f, m = f !== n, h = p - s;
	if (m && h) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + h);
		let t = Si(e.timeZone, e), n = f - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + n), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n));
	}
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/index.js
var Ai = class e extends Ti {
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	toISOString() {
		let [e, t, n] = this.tzComponents(), r = `${e}${t}:${n}`;
		return this.internal.toISOString().slice(0, -1) + r;
	}
	toString() {
		return `${this.toDateString()} ${this.toTimeString()}`;
	}
	toDateString() {
		let [e, t, n, r] = this.internal.toUTCString().split(" ");
		return `${e?.slice(0, -1)} ${n} ${t} ${r}`;
	}
	toTimeString() {
		let e = this.internal.toUTCString().split(" ")[4], [t, n, r] = this.tzComponents();
		return `${e} GMT${t}${n}${r} (${yi(this.timeZone, this)})`;
	}
	toLocaleString(e, t) {
		return Date.prototype.toLocaleString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleDateString(e, t) {
		return Date.prototype.toLocaleDateString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	toLocaleTimeString(e, t) {
		return Date.prototype.toLocaleTimeString.call(this, e, {
			...t,
			timeZone: t?.timeZone || this.timeZone
		});
	}
	tzComponents() {
		let e = this.getTimezoneOffset();
		return [
			e > 0 ? "-" : "+",
			String(Math.floor(Math.abs(e) / 60)).padStart(2, "0"),
			String(Math.abs(e) % 60).padStart(2, "0")
		];
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, ji = 365.2425, Mi = 6048e5, Ni = 864e5, Pi = 3600 * 24;
Pi * 7, Pi * ji / 12 * 3;
var Fi = Symbol.for("constructDateFrom");
//#endregion
//#region ../../node_modules/date-fns/constructFrom.js
function Ii(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && Fi in e ? e[Fi](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region ../../node_modules/date-fns/toDate.js
function Li(e, t) {
	return Ii(t || e, e);
}
//#endregion
//#region ../../node_modules/date-fns/addDays.js
function Ri(e, t, n) {
	let r = Li(e, n?.in);
	return isNaN(t) ? Ii(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region ../../node_modules/date-fns/addMonths.js
function zi(e, t, n) {
	let r = Li(e, n?.in);
	if (isNaN(t)) return Ii(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = Ii(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region ../../node_modules/date-fns/_lib/defaultOptions.js
var Bi = {};
function Vi() {
	return Bi;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeek.js
function Hi(e, t) {
	let n = Vi(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Li(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeek.js
function Ui(e, t) {
	return Hi(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeekYear.js
function Wi(e, t) {
	let n = Li(e, t?.in), r = n.getFullYear(), i = Ii(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = Ui(i), o = Ii(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = Ui(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Gi(e) {
	let t = Li(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeDates.js
function Ki(e, ...t) {
	let n = Ii.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region ../../node_modules/date-fns/startOfDay.js
function qi(e, t) {
	let n = Li(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarDays.js
function Ji(e, t, n) {
	let [r, i] = Ki(n?.in, e, t), a = qi(r), o = qi(i), s = +a - Gi(a), c = +o - Gi(o);
	return Math.round((s - c) / Ni);
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeekYear.js
function Yi(e, t) {
	let n = Wi(e, t), r = Ii(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), Ui(r);
}
//#endregion
//#region ../../node_modules/date-fns/addWeeks.js
function Xi(e, t, n) {
	return Ri(e, t * 7, n);
}
//#endregion
//#region ../../node_modules/date-fns/addYears.js
function Zi(e, t, n) {
	return zi(e, t * 12, n);
}
//#endregion
//#region ../../node_modules/date-fns/max.js
function Qi(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Ii.bind(null, e));
		let t = Li(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), Ii(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/min.js
function $i(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Ii.bind(null, e));
		let t = Li(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), Ii(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/isSameDay.js
function ea(e, t, n) {
	let [r, i] = Ki(n?.in, e, t);
	return +qi(r) == +qi(i);
}
//#endregion
//#region ../../node_modules/date-fns/isDate.js
function ta(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/date-fns/isValid.js
function na(e) {
	return !(!ta(e) && typeof e != "number" || isNaN(+Li(e)));
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarMonths.js
function ra(e, t, n) {
	let [r, i] = Ki(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region ../../node_modules/date-fns/endOfMonth.js
function ia(e, t) {
	let n = Li(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeInterval.js
function aa(e, t) {
	let [n, r] = Ki(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region ../../node_modules/date-fns/eachMonthOfInterval.js
function oa(e, t) {
	let { start: n, end: r } = aa(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Ii(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/startOfMonth.js
function sa(e, t) {
	let n = Li(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/endOfYear.js
function ca(e, t) {
	let n = Li(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/startOfYear.js
function la(e, t) {
	let n = Li(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/eachYearOfInterval.js
function ua(e, t) {
	let { start: n, end: r } = aa(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Ii(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/endOfWeek.js
function da(e, t) {
	let n = Vi(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Li(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region ../../node_modules/date-fns/endOfISOWeek.js
function fa(e, t) {
	return da(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var pa = {
	lessThanXSeconds: {
		one: "less than a second",
		other: "less than {{count}} seconds"
	},
	xSeconds: {
		one: "1 second",
		other: "{{count}} seconds"
	},
	halfAMinute: "half a minute",
	lessThanXMinutes: {
		one: "less than a minute",
		other: "less than {{count}} minutes"
	},
	xMinutes: {
		one: "1 minute",
		other: "{{count}} minutes"
	},
	aboutXHours: {
		one: "about 1 hour",
		other: "about {{count}} hours"
	},
	xHours: {
		one: "1 hour",
		other: "{{count}} hours"
	},
	xDays: {
		one: "1 day",
		other: "{{count}} days"
	},
	aboutXWeeks: {
		one: "about 1 week",
		other: "about {{count}} weeks"
	},
	xWeeks: {
		one: "1 week",
		other: "{{count}} weeks"
	},
	aboutXMonths: {
		one: "about 1 month",
		other: "about {{count}} months"
	},
	xMonths: {
		one: "1 month",
		other: "{{count}} months"
	},
	aboutXYears: {
		one: "about 1 year",
		other: "about {{count}} years"
	},
	xYears: {
		one: "1 year",
		other: "{{count}} years"
	},
	overXYears: {
		one: "over 1 year",
		other: "over {{count}} years"
	},
	almostXYears: {
		one: "almost 1 year",
		other: "almost {{count}} years"
	}
}, ma = (e, t, n) => {
	let r, i = pa[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function ha(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var ga = {
	date: ha({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: ha({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: ha({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, _a = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, va = (e, t, n, r) => _a[e];
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function ya(e) {
	return (t, n) => {
		let r = n?.context ? String(n.context) : "standalone", i;
		if (r === "formatting" && e.formattingValues) {
			let t = e.defaultFormattingWidth || e.defaultWidth, r = n?.width ? String(n.width) : t;
			i = e.formattingValues[r] || e.formattingValues[t];
		} else {
			let t = e.defaultWidth, r = n?.width ? String(n.width) : e.defaultWidth;
			i = e.values[r] || e.values[t];
		}
		let a = e.argumentCallback ? e.argumentCallback(t) : t;
		return i[a];
	};
}
var ba = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: ya({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: ya({
		values: {
			narrow: [
				"1",
				"2",
				"3",
				"4"
			],
			abbreviated: [
				"Q1",
				"Q2",
				"Q3",
				"Q4"
			],
			wide: [
				"1st quarter",
				"2nd quarter",
				"3rd quarter",
				"4th quarter"
			]
		},
		defaultWidth: "wide",
		argumentCallback: (e) => e - 1
	}),
	month: ya({
		values: {
			narrow: [
				"J",
				"F",
				"M",
				"A",
				"M",
				"J",
				"J",
				"A",
				"S",
				"O",
				"N",
				"D"
			],
			abbreviated: [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec"
			],
			wide: [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			]
		},
		defaultWidth: "wide"
	}),
	day: ya({
		values: {
			narrow: [
				"S",
				"M",
				"T",
				"W",
				"T",
				"F",
				"S"
			],
			short: [
				"Su",
				"Mo",
				"Tu",
				"We",
				"Th",
				"Fr",
				"Sa"
			],
			abbreviated: [
				"Sun",
				"Mon",
				"Tue",
				"Wed",
				"Thu",
				"Fri",
				"Sat"
			],
			wide: [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday"
			]
		},
		defaultWidth: "wide"
	}),
	dayPeriod: ya({
		values: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "morning",
				afternoon: "afternoon",
				evening: "evening",
				night: "night"
			}
		},
		defaultWidth: "wide",
		formattingValues: {
			narrow: {
				am: "a",
				pm: "p",
				midnight: "mi",
				noon: "n",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			abbreviated: {
				am: "AM",
				pm: "PM",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			},
			wide: {
				am: "a.m.",
				pm: "p.m.",
				midnight: "midnight",
				noon: "noon",
				morning: "in the morning",
				afternoon: "in the afternoon",
				evening: "in the evening",
				night: "at night"
			}
		},
		defaultFormattingWidth: "wide"
	})
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchFn.js
function xa(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? Ca(s, (e) => e.test(o)) : Sa(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function Sa(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function Ca(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function wa(e) {
	return (t, n = {}) => {
		let r = t.match(e.matchPattern);
		if (!r) return null;
		let i = r[0], a = t.match(e.parsePattern);
		if (!a) return null;
		let o = e.valueCallback ? e.valueCallback(a[0]) : a[0];
		o = n.valueCallback ? n.valueCallback(o) : o;
		let s = t.slice(i.length);
		return {
			value: o,
			rest: s
		};
	};
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US.js
var Ta = {
	code: "en-US",
	formatDistance: ma,
	formatLong: ga,
	formatRelative: va,
	localize: ba,
	match: {
		ordinalNumber: wa({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: xa({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: xa({
			matchPatterns: {
				narrow: /^[1234]/i,
				abbreviated: /^q[1234]/i,
				wide: /^[1234](th|st|nd|rd)? quarter/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [
				/1/i,
				/2/i,
				/3/i,
				/4/i
			] },
			defaultParseWidth: "any",
			valueCallback: (e) => e + 1
		}),
		month: xa({
			matchPatterns: {
				narrow: /^[jfmasond]/i,
				abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
				wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^j/i,
					/^f/i,
					/^m/i,
					/^a/i,
					/^m/i,
					/^j/i,
					/^j/i,
					/^a/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				],
				any: [
					/^ja/i,
					/^f/i,
					/^mar/i,
					/^ap/i,
					/^may/i,
					/^jun/i,
					/^jul/i,
					/^au/i,
					/^s/i,
					/^o/i,
					/^n/i,
					/^d/i
				]
			},
			defaultParseWidth: "any"
		}),
		day: xa({
			matchPatterns: {
				narrow: /^[smtwf]/i,
				short: /^(su|mo|tu|we|th|fr|sa)/i,
				abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
				wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: {
				narrow: [
					/^s/i,
					/^m/i,
					/^t/i,
					/^w/i,
					/^t/i,
					/^f/i,
					/^s/i
				],
				any: [
					/^su/i,
					/^m/i,
					/^tu/i,
					/^w/i,
					/^th/i,
					/^f/i,
					/^sa/i
				]
			},
			defaultParseWidth: "any"
		}),
		dayPeriod: xa({
			matchPatterns: {
				narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
				any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
			},
			defaultMatchWidth: "any",
			parsePatterns: { any: {
				am: /^a/i,
				pm: /^p/i,
				midnight: /^mi/i,
				noon: /^no/i,
				morning: /morning/i,
				afternoon: /afternoon/i,
				evening: /evening/i,
				night: /night/i
			} },
			defaultParseWidth: "any"
		})
	},
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
//#endregion
//#region ../../node_modules/date-fns/getDayOfYear.js
function Ea(e, t) {
	let n = Li(e, t?.in);
	return Ji(n, la(n)) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeek.js
function Da(e, t) {
	let n = Li(e, t?.in), r = Ui(n) - +Yi(n);
	return Math.round(r / Mi) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getWeekYear.js
function Oa(e, t) {
	let n = Li(e, t?.in), r = n.getFullYear(), i = Vi(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = Ii(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Hi(o, t), c = Ii(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Hi(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeekYear.js
function ka(e, t) {
	let n = Vi(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = Oa(e, t), a = Ii(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Hi(a, t);
}
//#endregion
//#region ../../node_modules/date-fns/getWeek.js
function Aa(e, t) {
	let n = Li(e, t?.in), r = Hi(n, t) - +ka(n, t);
	return Math.round(r / Mi) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/addLeadingZeros.js
function ja(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/lightFormatters.js
var Ma = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return ja(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : ja(n + 1, 2);
	},
	d(e, t) {
		return ja(e.getDate(), t.length);
	},
	a(e, t) {
		let n = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.toUpperCase();
			case "aaa": return n;
			case "aaaaa": return n[0];
			default: return n === "am" ? "a.m." : "p.m.";
		}
	},
	h(e, t) {
		return ja(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return ja(e.getHours(), t.length);
	},
	m(e, t) {
		return ja(e.getMinutes(), t.length);
	},
	s(e, t) {
		return ja(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return ja(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, Na = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Pa = {
	G: function(e, t, n) {
		let r = +(e.getFullYear() > 0);
		switch (t) {
			case "G":
			case "GG":
			case "GGG": return n.era(r, { width: "abbreviated" });
			case "GGGGG": return n.era(r, { width: "narrow" });
			default: return n.era(r, { width: "wide" });
		}
	},
	y: function(e, t, n) {
		if (t === "yo") {
			let t = e.getFullYear(), r = t > 0 ? t : 1 - t;
			return n.ordinalNumber(r, { unit: "year" });
		}
		return Ma.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = Oa(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? ja(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : ja(a, t.length);
	},
	R: function(e, t) {
		return ja(Wi(e), t.length);
	},
	u: function(e, t) {
		return ja(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return ja(r, 2);
			case "Qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "QQQ": return n.quarter(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "QQQQQ": return n.quarter(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "q": return String(r);
			case "qq": return ja(r, 2);
			case "qo": return n.ordinalNumber(r, { unit: "quarter" });
			case "qqq": return n.quarter(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "qqqqq": return n.quarter(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.quarter(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	M: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "M":
			case "MM": return Ma.M(e, t);
			case "Mo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "MMM": return n.month(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "MMMMM": return n.month(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.month(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	L: function(e, t, n) {
		let r = e.getMonth();
		switch (t) {
			case "L": return String(r + 1);
			case "LL": return ja(r + 1, 2);
			case "Lo": return n.ordinalNumber(r + 1, { unit: "month" });
			case "LLL": return n.month(r, {
				width: "abbreviated",
				context: "standalone"
			});
			case "LLLLL": return n.month(r, {
				width: "narrow",
				context: "standalone"
			});
			default: return n.month(r, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	w: function(e, t, n, r) {
		let i = Aa(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : ja(i, t.length);
	},
	I: function(e, t, n) {
		let r = Da(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : ja(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Ma.d(e, t);
	},
	D: function(e, t, n) {
		let r = Ea(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : ja(r, t.length);
	},
	E: function(e, t, n) {
		let r = e.getDay();
		switch (t) {
			case "E":
			case "EE":
			case "EEE": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "EEEEE": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "EEEEEE": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	e: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "e": return String(a);
			case "ee": return ja(a, 2);
			case "eo": return n.ordinalNumber(a, { unit: "day" });
			case "eee": return n.day(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "eeeee": return n.day(i, {
				width: "narrow",
				context: "formatting"
			});
			case "eeeeee": return n.day(i, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	c: function(e, t, n, r) {
		let i = e.getDay(), a = (i - r.weekStartsOn + 8) % 7 || 7;
		switch (t) {
			case "c": return String(a);
			case "cc": return ja(a, t.length);
			case "co": return n.ordinalNumber(a, { unit: "day" });
			case "ccc": return n.day(i, {
				width: "abbreviated",
				context: "standalone"
			});
			case "ccccc": return n.day(i, {
				width: "narrow",
				context: "standalone"
			});
			case "cccccc": return n.day(i, {
				width: "short",
				context: "standalone"
			});
			default: return n.day(i, {
				width: "wide",
				context: "standalone"
			});
		}
	},
	i: function(e, t, n) {
		let r = e.getDay(), i = r === 0 ? 7 : r;
		switch (t) {
			case "i": return String(i);
			case "ii": return ja(i, t.length);
			case "io": return n.ordinalNumber(i, { unit: "day" });
			case "iii": return n.day(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "iiiii": return n.day(r, {
				width: "narrow",
				context: "formatting"
			});
			case "iiiiii": return n.day(r, {
				width: "short",
				context: "formatting"
			});
			default: return n.day(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	a: function(e, t, n) {
		let r = e.getHours() / 12 >= 1 ? "pm" : "am";
		switch (t) {
			case "a":
			case "aa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			});
			case "aaa": return n.dayPeriod(r, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "aaaaa": return n.dayPeriod(r, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(r, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	b: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r === 12 ? Na.noon : r === 0 ? Na.midnight : r / 12 >= 1 ? "pm" : "am", t) {
			case "b":
			case "bb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "bbb": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			}).toLowerCase();
			case "bbbbb": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	B: function(e, t, n) {
		let r = e.getHours(), i;
		switch (i = r >= 17 ? Na.evening : r >= 12 ? Na.afternoon : r >= 4 ? Na.morning : Na.night, t) {
			case "B":
			case "BB":
			case "BBB": return n.dayPeriod(i, {
				width: "abbreviated",
				context: "formatting"
			});
			case "BBBBB": return n.dayPeriod(i, {
				width: "narrow",
				context: "formatting"
			});
			default: return n.dayPeriod(i, {
				width: "wide",
				context: "formatting"
			});
		}
	},
	h: function(e, t, n) {
		if (t === "ho") {
			let t = e.getHours() % 12;
			return t === 0 && (t = 12), n.ordinalNumber(t, { unit: "hour" });
		}
		return Ma.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Ma.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : ja(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : ja(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Ma.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Ma.s(e, t);
	},
	S: function(e, t) {
		return Ma.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Ia(r);
			case "XXXX":
			case "XX": return La(r);
			default: return La(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Ia(r);
			case "xxxx":
			case "xx": return La(r);
			default: return La(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + Fa(r, ":");
			default: return "GMT" + La(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + Fa(r, ":");
			default: return "GMT" + La(r, ":");
		}
	},
	t: function(e, t, n) {
		return ja(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return ja(+e, t.length);
	}
};
function Fa(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + ja(a, 2);
}
function Ia(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + ja(Math.abs(e) / 60, 2) : La(e, t);
}
function La(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = ja(Math.trunc(r / 60), 2), a = ja(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/longFormatters.js
var Ra = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, za = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Ba = {
	p: za,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Ra(e, t);
		let a;
		switch (r) {
			case "P":
				a = t.dateTime({ width: "short" });
				break;
			case "PP":
				a = t.dateTime({ width: "medium" });
				break;
			case "PPP":
				a = t.dateTime({ width: "long" });
				break;
			default:
				a = t.dateTime({ width: "full" });
				break;
		}
		return a.replace("{{date}}", Ra(r, t)).replace("{{time}}", za(i, t));
	}
}, Va = /^D+$/, Ha = /^Y+$/, Ua = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Wa(e) {
	return Va.test(e);
}
function Ga(e) {
	return Ha.test(e);
}
function Ka(e, t, n) {
	let r = qa(e, t, n);
	if (console.warn(r), Ua.includes(e)) throw RangeError(r);
}
function qa(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region ../../node_modules/date-fns/format.js
var Ja = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ya = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Xa = /^'([^]*?)'?$/, Za = /''/g, Qa = /[a-zA-Z]/;
function $a(e, t, n) {
	let r = Vi(), i = n?.locale ?? r.locale ?? Ta, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Li(e, n?.in);
	if (!na(s)) throw RangeError("Invalid time value");
	let c = t.match(Ya).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Ba[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Ja).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: eo(e)
		};
		if (Pa[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Qa)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
		return {
			isToken: !1,
			value: e
		};
	});
	i.localize.preprocessor && (c = i.localize.preprocessor(s, c));
	let l = {
		firstWeekContainsDate: a,
		weekStartsOn: o,
		locale: i
	};
	return c.map((r) => {
		if (!r.isToken) return r.value;
		let a = r.value;
		(!n?.useAdditionalWeekYearTokens && Ga(a) || !n?.useAdditionalDayOfYearTokens && Wa(a)) && Ka(a, t, String(e));
		let o = Pa[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function eo(e) {
	let t = e.match(Xa);
	return t ? t[1].replace(Za, "'") : e;
}
//#endregion
//#region ../../node_modules/date-fns/getDaysInMonth.js
function to(e, t) {
	let n = Li(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = Ii(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region ../../node_modules/date-fns/getMonth.js
function no(e, t) {
	return Li(e, t?.in).getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/getYear.js
function ro(e, t) {
	return Li(e, t?.in).getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/isAfter.js
function io(e, t) {
	return +Li(e) > +Li(t);
}
//#endregion
//#region ../../node_modules/date-fns/isBefore.js
function ao(e, t) {
	return +Li(e) < +Li(t);
}
//#endregion
//#region ../../node_modules/date-fns/isSameMonth.js
function oo(e, t, n) {
	let [r, i] = Ki(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/isSameYear.js
function so(e, t, n) {
	let [r, i] = Ki(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/setMonth.js
function co(e, t, n) {
	let r = Li(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = Ii(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = to(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region ../../node_modules/date-fns/setYear.js
function lo(e, t, n) {
	let r = Li(e, n?.in);
	return isNaN(+r) ? Ii(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var uo = 5, fo = 4;
function po(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, uo * 7 - 1);
	return t.getMonth(e) === t.getMonth(a) ? uo : fo;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function mo(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function ho(e, t) {
	let n = mo(e, t), r = po(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/classes/DateLib.js
var go = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Ai.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new Ai(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : Ri(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : zi(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : Xi(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : Zi(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : Ji(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : ra(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : oa(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : ua(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : ho(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : fa(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : ia(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : da(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : ca(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : $a(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : Da(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : no(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : ro(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : Aa(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : io(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : ao(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : ta(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : ea(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : oo(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : so(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : Qi(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : $i(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : co(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : lo(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : mo(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : qi(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : Ui(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : sa(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : Hi(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : la(e), this.options = {
			locale: Ta,
			...e
		}, this.overrides = t;
	}
	getDigitMap() {
		let { numerals: e = "latn" } = this.options, t = new Intl.NumberFormat("en-US", { numberingSystem: e }), n = {};
		for (let e = 0; e < 10; e++) n[e.toString()] = t.format(e);
		return n;
	}
	replaceDigits(e) {
		let t = this.getDigitMap();
		return e.replace(/\d/g, (e) => t[e] || e);
	}
	formatNumber(e) {
		return this.replaceDigits(e.toString());
	}
	getMonthYearOrder() {
		let t = this.options.locale?.code;
		return t && e.yearFirstLocales.has(t) ? "year-first" : "month-first";
	}
	formatMonthYear(t) {
		let { locale: n, timeZone: r, numerals: i } = this.options, a = n?.code;
		if (a && e.yearFirstLocales.has(a)) try {
			return new Intl.DateTimeFormat(a, {
				month: "long",
				year: "numeric",
				timeZone: r,
				numberingSystem: i
			}).format(t);
		} catch {}
		let o = this.getMonthYearOrder() === "year-first" ? "y LLLL" : "LLLL y";
		return this.format(t, o);
	}
};
go.yearFirstLocales = new Set([
	"eu",
	"hu",
	"ja",
	"ja-Hira",
	"ja-JP",
	"ko",
	"ko-KR",
	"lt",
	"lt-LT",
	"lv",
	"lv-LV",
	"mn",
	"mn-MN",
	"zh",
	"zh-CN",
	"zh-HK",
	"zh-TW"
]);
var _o = new go(), vo = class {
	constructor(e, t, n = _o) {
		this.date = e, this.displayMonth = t, this.outside = !!(t && !n.isSameMonth(e, t)), this.dateLib = n;
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, yo = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, bo = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Button.js
function xo(e) {
	return a.createElement("button", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function So(e) {
	return a.createElement("span", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Chevron.js
function Co(e) {
	let { size: t = 24, orientation: n = "left", className: r } = e;
	return a.createElement("svg", {
		className: r,
		width: t,
		height: t,
		viewBox: "0 0 24 24"
	}, n === "up" && a.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), n === "down" && a.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), n === "left" && a.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), n === "right" && a.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Day.js
function wo(e) {
	let { day: t, modifiers: n, ...r } = e;
	return a.createElement("td", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DayButton.js
function To(e) {
	let { day: t, modifiers: n, ...r } = e, i = a.useRef(null);
	return a.useEffect(() => {
		n.focused && i.current?.focus();
	}, [n.focused]), a.createElement("button", {
		ref: i,
		...r
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/UI.js
var Eo;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(Eo ||= {});
var Do;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Do ||= {});
var Oo;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(Oo ||= {});
var ko;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(ko ||= {});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Dropdown.js
function Ao(e) {
	let { options: t, className: n, components: r, classNames: i, ...o } = e, s = [i[Eo.Dropdown], n].join(" "), c = t?.find(({ value: e }) => e === o.value);
	return a.createElement("span", {
		"data-disabled": o.disabled,
		className: i[Eo.DropdownRoot]
	}, a.createElement(r.Select, {
		className: s,
		...o
	}, t?.map(({ value: e, label: t, disabled: n }) => a.createElement(r.Option, {
		key: e,
		value: e,
		disabled: n
	}, t))), a.createElement("span", {
		className: i[Eo.CaptionLabel],
		"aria-hidden": !0
	}, c?.label, a.createElement(r.Chevron, {
		orientation: "down",
		size: 18,
		className: i[Eo.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function jo(e) {
	return a.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Footer.js
function Mo(e) {
	return a.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Month.js
function No(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return a.createElement("div", { ...r }, e.children);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function Po(e) {
	let { calendarMonth: t, displayIndex: n, ...r } = e;
	return a.createElement("div", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function Fo(e) {
	return a.createElement("table", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Months.js
function Io(e) {
	return a.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useDayPicker.js
var Lo = u(void 0);
function Ro() {
	let e = _(Lo);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function zo(e) {
	let { components: t } = Ro();
	return a.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Nav.js
function Bo(e) {
	let { onPreviousClick: t, onNextClick: n, previousMonth: r, nextMonth: i, ...o } = e, { components: s, classNames: c, labels: { labelPrevious: l, labelNext: u } } = Ro(), d = g((e) => {
		i && n?.(e);
	}, [i, n]), f = g((e) => {
		r && t?.(e);
	}, [r, t]);
	return a.createElement("nav", { ...o }, a.createElement(s.PreviousMonthButton, {
		type: "button",
		className: c[Eo.PreviousMonthButton],
		tabIndex: r ? void 0 : -1,
		"aria-disabled": r ? void 0 : !0,
		"aria-label": l(r),
		onClick: f
	}, a.createElement(s.Chevron, {
		disabled: r ? void 0 : !0,
		className: c[Eo.Chevron],
		orientation: "left"
	})), a.createElement(s.NextMonthButton, {
		type: "button",
		className: c[Eo.NextMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": i ? void 0 : !0,
		"aria-label": u(i),
		onClick: d
	}, a.createElement(s.Chevron, {
		disabled: i ? void 0 : !0,
		orientation: "right",
		className: c[Eo.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function Vo(e) {
	let { components: t } = Ro();
	return a.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Option.js
function Ho(e) {
	return a.createElement("option", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function Uo(e) {
	let { components: t } = Ro();
	return a.createElement(t.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Root.js
function Wo(e) {
	let { rootRef: t, ...n } = e;
	return a.createElement("div", {
		...n,
		ref: t
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Select.js
function Go(e) {
	return a.createElement("select", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Week.js
function Ko(e) {
	let { week: t, ...n } = e;
	return a.createElement("tr", { ...n });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekday.js
function qo(e) {
	return a.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekdays.js
function Jo(e) {
	return a.createElement("thead", { "aria-hidden": !0 }, a.createElement("tr", { ...e }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function Yo(e) {
	let { week: t, ...n } = e;
	return a.createElement("th", { ...n });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function Xo(e) {
	return a.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weeks.js
function Zo(e) {
	return a.createElement("tbody", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function Qo(e) {
	let { components: t } = Ro();
	return a.createElement(t.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/custom-components.js
var $o = /* @__PURE__ */ L({
	Button: () => xo,
	CaptionLabel: () => So,
	Chevron: () => Co,
	Day: () => wo,
	DayButton: () => To,
	Dropdown: () => Ao,
	DropdownNav: () => jo,
	Footer: () => Mo,
	Month: () => No,
	MonthCaption: () => Po,
	MonthGrid: () => Fo,
	Months: () => Io,
	MonthsDropdown: () => zo,
	Nav: () => Bo,
	NextMonthButton: () => Vo,
	Option: () => Ho,
	PreviousMonthButton: () => Uo,
	Root: () => Wo,
	Select: () => Go,
	Week: () => Ko,
	WeekNumber: () => Yo,
	WeekNumberHeader: () => Xo,
	Weekday: () => qo,
	Weekdays: () => Jo,
	Weeks: () => Zo,
	YearsDropdown: () => Qo
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function es(e, t, n = !1, r = _o) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/typeguards.js
function ts(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function ns(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function rs(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function is(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function as(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function os(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function ss(e, t, n = _o) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (os(t, n)) return t.includes(e);
		if (ns(t)) return es(t, e, !1, n);
		if (as(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (ts(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return rs(t) ? a(e, t.after) > 0 : is(t) ? a(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function cs(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[Do.focused]: [],
		[Do.outside]: [],
		[Do.disabled]: [],
		[Do.hidden]: [],
		[Do.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !!(n && !f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && ss(e, a, i)), S = !!(o && ss(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u ?? i.today());
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && ss(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[Do.focused]: !1,
			[Do.disabled]: !1,
			[Do.hidden]: !1,
			[Do.outside]: !1,
			[Do.today]: !1
		}, n = {};
		for (let n in y) t[n] = y[n].some((t) => t === e);
		for (let t in b) n[t] = b[t].some((t) => t === e);
		return {
			...t,
			...n
		};
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getClassNamesForModifiers.js
function ls(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[Do[r]] ? e.push(t[Do[r]]) : t[Oo[r]] && e.push(t[Oo[r]]), e), [t[Eo.Day]]);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function us(e) {
	return {
		...$o,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function ds(e) {
	let t = {
		"data-mode": e.mode ?? void 0,
		"data-required": "required" in e ? e.required : void 0,
		"data-multiple-months": e.numberOfMonths && e.numberOfMonths > 1 || void 0,
		"data-week-numbers": e.showWeekNumber || void 0,
		"data-broadcast-calendar": e.broadcastCalendar || void 0,
		"data-nav-layout": e.navLayout || void 0
	};
	return Object.entries(e).forEach(([e, n]) => {
		e.startsWith("data-") && (t[e] = n);
	}), t;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDefaultClassNames.js
function fs() {
	let e = {};
	for (let t in Eo) e[Eo[t]] = `rdp-${Eo[t]}`;
	for (let t in Do) e[Do[t]] = `rdp-${Do[t]}`;
	for (let t in Oo) e[Oo[t]] = `rdp-${Oo[t]}`;
	for (let t in ko) e[ko[t]] = `rdp-${ko[t]}`;
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function ps(e, t, n) {
	return (n ?? new go(t)).formatMonthYear(e);
}
var ms = ps;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function hs(e, t, n) {
	return (n ?? new go(t)).format(e, "d");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function gs(e, t = _o) {
	return t.format(e, "LLLL");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function _s(e, t, n) {
	return (n ?? new go(t)).format(e, "cccccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function vs(e, t = _o) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function ys() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function bs(e, t = _o) {
	return t.format(e, "yyyy");
}
var xs = bs, Ss = /* @__PURE__ */ L({
	formatCaption: () => ps,
	formatDay: () => hs,
	formatMonthCaption: () => ms,
	formatMonthDropdown: () => gs,
	formatWeekNumber: () => vs,
	formatWeekNumberHeader: () => ys,
	formatWeekdayName: () => _s,
	formatYearCaption: () => xs,
	formatYearDropdown: () => bs
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function Cs(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...Ss,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function ws(e, t, n, r, i) {
	let { startOfMonth: a, startOfYear: o, endOfYear: s, eachMonthOfInterval: c, getMonth: l } = i;
	return c({
		start: o(e),
		end: s(e)
	}).map((e) => {
		let o = r.formatMonthDropdown(e, i);
		return {
			value: l(e),
			label: o,
			disabled: t && e < a(t) || n && e > a(n) || !1
		};
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getStyleForModifiers.js
function Ts(e, t = {}, n = {}) {
	let r = { ...t?.[Eo.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function Es(e, t, n) {
	let r = e.today(), i = n ? e.startOfBroadcastWeek(r, e) : t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(i, t);
		a.push(n);
	}
	return a;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function Ds(e, t, n, r, i = !1) {
	if (!e || !t) return;
	let { startOfYear: a, endOfYear: o, eachYearOfInterval: s, getYear: c } = r, l = s({
		start: a(e),
		end: o(t)
	});
	return i && l.reverse(), l.map((e) => {
		let t = n.formatYearDropdown(e, r);
		return {
			value: c(e),
			label: t,
			disabled: !1
		};
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelDayButton.js
function Os(e, t, n, r) {
	let i = (r ?? new go(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var ks = Os;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function As(e, t, n) {
	return (n ?? new go(t)).formatMonthYear(e);
}
var js = As;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function Ms(e, t, n, r) {
	let i = (r ?? new go(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function Ns(e) {
	return "Choose the Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNav.js
function Ps() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNext.js
function Fs(e) {
	return "Go to the Next Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function Is(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function Ls(e, t, n) {
	return (n ?? new go(t)).format(e, "cccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function Rs(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function zs(e) {
	return "Week Number";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function Bs(e) {
	return "Choose the Year";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/index.js
var Vs = /* @__PURE__ */ L({
	labelCaption: () => js,
	labelDay: () => ks,
	labelDayButton: () => Os,
	labelGrid: () => As,
	labelGridcell: () => Ms,
	labelMonthDropdown: () => Ns,
	labelNav: () => Ps,
	labelNext: () => Fs,
	labelPrevious: () => Is,
	labelWeekNumber: () => Rs,
	labelWeekNumberHeader: () => zs,
	labelWeekday: () => Ls,
	labelYearDropdown: () => Bs
}), Hs = (e) => e instanceof HTMLElement ? e : null, Us = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], Ws = (e) => Hs(e.querySelector("[data-animated-month]")), Gs = (e) => Hs(e.querySelector("[data-animated-caption]")), Ks = (e) => Hs(e.querySelector("[data-animated-weeks]")), qs = (e) => Hs(e.querySelector("[data-animated-nav]")), Js = (e) => Hs(e.querySelector("[data-animated-weekdays]"));
function Ys(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = w(null), s = w(r), c = w(!1);
	x(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[ko.caption_after_enter] : n[ko.caption_before_enter], p = d ? n[ko.weeks_after_enter] : n[ko.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (Us(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = Ws(e);
			t && e.contains(t) && e.removeChild(t);
			let n = Gs(e);
			n && n.classList.remove(f);
			let r = Ks(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? Us(m) : [], _ = Us(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = qs(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = Gs(i);
				s && s.classList.add(f);
				let l = Ks(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = Js(o);
				m && (m.style.opacity = "0");
				let h = Gs(o);
				h && (h.classList.add(d ? n[ko.caption_before_exit] : n[ko.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = Ks(o);
				_ && _.classList.add(d ? n[ko.weeks_before_exit] : n[ko.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDates.js
function Xs(e, t, n, r) {
	let i = e[0], a = e[e.length - 1], { ISOWeek: o, fixedWeeks: s, broadcastCalendar: c } = n ?? {}, { addDays: l, differenceInCalendarDays: u, differenceInCalendarMonths: d, endOfBroadcastWeek: f, endOfISOWeek: p, endOfMonth: m, endOfWeek: h, isAfter: g, startOfBroadcastWeek: _, startOfISOWeek: v, startOfWeek: y } = r, b = c ? _(i, r) : o ? v(i) : y(i), x = u(c ? f(a) : o ? p(m(a)) : h(m(a)), b), S = d(a, i) + 1, C = [];
	for (let e = 0; e <= x; e++) {
		let n = l(b, e);
		if (t && g(n, t)) break;
		C.push(n);
	}
	let w = (c ? 35 : 42) * S;
	if (s && C.length < w) {
		let e = w - C.length;
		for (let t = 0; t < e; t++) {
			let e = l(C[C.length - 1], 1);
			C.push(e);
		}
	}
	return C;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDays.js
function Zs(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function Qs(e, t, n, r) {
	let { numberOfMonths: i = 1 } = n, a = [];
	for (let n = 0; n < i; n++) {
		let i = r.addMonths(e, n);
		if (t && i > t) break;
		a.push(i);
	}
	return a;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getInitialMonth.js
function $s(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function ec(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new yo(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new vo(t, m, r);
			return a ? a.days.push(o) : e.push(new bo(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function tc(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function nc(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function rc(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function ic(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function ac(e, t) {
	let [n, r] = T(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useCalendar.js
function oc(e, t) {
	let [n, r] = tc(e, t), { startOfMonth: i, endOfMonth: a } = t, o = $s(e, n, r, t), [s, c] = ac(o, e.month ? o : void 0);
	v(() => {
		c($s(e, n, r, t));
	}, [e.timeZone]);
	let l = Qs(s, r, e, t), u = ec(l, Xs(l, e.endMonth ? a(e.endMonth) : void 0, e, t), e, t), d = ic(u), f = Zs(u), p = rc(s, n, e, t), m = nc(s, r, e, t), { disableNavigation: h, onMonthChange: g } = e, _ = (e) => d.some((t) => t.days.some((t) => t.isEqualTo(e))), y = (e) => {
		if (h) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), g?.(t);
	};
	return {
		months: u,
		weeks: d,
		days: f,
		navStart: n,
		navEnd: r,
		previousMonth: p,
		nextMonth: m,
		goToMonth: y,
		goToDay: (e) => {
			_(e) || y(e.date);
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var sc;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(sc ||= {});
function cc(e) {
	return !e[Do.disabled] && !e[Do.hidden] && !e[Do.outside];
}
function lc(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		cc(e) && (e[Do.focused] && a < sc.FocusedModifier ? (i = o, a = sc.FocusedModifier) : r?.isEqualTo(o) && a < sc.LastFocused ? (i = o, a = sc.LastFocused) : n(o.date) && a < sc.Selected ? (i = o, a = sc.Selected) : e[Do.today] && a < sc.Today && (i = o, a = sc.Today));
	}
	return i ||= e.find((e) => cc(t(e))), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function uc(e, t, n, r, i, a, o) {
	let { ISOWeek: s, broadcastCalendar: c } = a, { addDays: l, addMonths: u, addWeeks: d, addYears: f, endOfBroadcastWeek: p, endOfISOWeek: m, endOfWeek: h, max: g, min: _, startOfBroadcastWeek: v, startOfISOWeek: y, startOfWeek: b } = o, x = {
		day: l,
		week: d,
		month: u,
		year: f,
		startOfWeek: (e) => c ? v(e, o) : s ? y(e) : b(e),
		endOfWeek: (e) => c ? p(e) : s ? m(e) : h(e)
	}[e](n, t === "after" ? 1 : -1);
	return t === "before" && r ? x = g([r, x]) : t === "after" && i && (x = _([i, x])), x;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNextFocus.js
function dc(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = uc(e, t, n.date, r, i, a, o), l = !!(a.disabled && ss(c, a.disabled, o)), u = !!(a.hidden && ss(c, a.hidden, o)), d = new vo(c, c, o);
	return !l && !u ? d : dc(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useFocus.js
function fc(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = T(), c = lc(t.days, n, r || (() => !1), o), [l, u] = T(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = dc(n, r, l, t.navStart, t.navEnd, e, i);
			a && (e.disableNavigation && !t.days.some((e) => e.isEqualTo(a)) || (t.goToDay(a), u(a)));
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useMulti.js
function pc(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = ac(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = [...s ?? []];
			if (l(e)) {
				if (s?.length === u || r && s?.length === 1) return;
				a = s?.filter((t) => !c(t, e));
			} else a = s?.length === d ? [e] : [...a, e];
			return i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: l
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/addToRange.js
function mc(e, t, n = 0, r = 0, i = !1, a = _o) {
	let { from: o, to: s } = t || {}, { isSameDay: c, isAfter: l, isBefore: u } = a, d;
	if (!o && !s) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (o && !s) d = c(o, e) ? n === 0 ? {
		from: o,
		to: e
	} : i ? {
		from: o,
		to: void 0
	} : void 0 : u(e, o) ? {
		from: e,
		to: o
	} : {
		from: o,
		to: e
	};
	else if (o && s) if (c(o, e) && c(s, e)) d = i ? {
		from: o,
		to: s
	} : void 0;
	else if (c(o, e)) d = {
		from: o,
		to: n > 0 ? void 0 : e
	};
	else if (c(s, e)) d = {
		from: e,
		to: n > 0 ? void 0 : e
	};
	else if (u(e, o)) d = {
		from: e,
		to: s
	};
	else if (l(e, o)) d = {
		from: o,
		to: e
	};
	else if (l(e, s)) d = {
		from: o,
		to: e
	};
	else throw Error("Invalid range");
	if (d?.from && d?.to) {
		let t = a.differenceInCalendarDays(d.to, d.from);
		(r > 0 && t > r || n > 1 && t < n) && (d = {
			from: e,
			to: void 0
		});
	}
	return d;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeContainsDayOfWeek.js
function hc(e, t, n = _o) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function gc(e, t, n = _o) {
	return es(e, t.from, !1, n) || es(e, t.to, !1, n) || es(t, e.from, !1, n) || es(t, e.to, !1, n);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function _c(e, t, n = _o) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? es(e, t, !1, n) : os(t, n) ? t.some((t) => es(e, t, !1, n)) : ns(t) ? t.from && t.to ? gc(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : as(t) ? hc(e, t.dayOfWeek, n) : ts(t) ? n.isAfter(t.before, t.after) ? gc(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : ss(e.from, t, n) || ss(e.to, t, n) : rs(t) || is(t) ? ss(e.from, t, n) || ss(e.to, t, n) : !1)) return !0;
	let i = r.filter((e) => typeof e == "function");
	if (i.length) {
		let t = e.from, r = n.differenceInCalendarDays(e.to, e.from);
		for (let e = 0; e <= r; e++) {
			if (i.some((e) => e(t))) return !0;
			t = n.addDays(t, 1);
		}
	}
	return !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useRange.js
function vc(e, t) {
	let { disabled: n, excludeDisabled: r, selected: i, required: a, onSelect: o } = e, [s, c] = ac(i, o ? i : void 0), l = o ? i : s;
	return {
		selected: l,
		select: (i, s, u) => {
			let { min: d, max: f } = e, p = i ? mc(i, l, d, f, a, t) : void 0;
			return r && n && p?.from && p.to && _c({
				from: p.from,
				to: p.to
			}, n, t) && (p.from = i, p.to = void 0), o || c(p), o?.(p, i, s, u), p;
		},
		isSelected: (e) => l && es(l, e, !1, t)
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useSingle.js
function yc(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = ac(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
	return {
		selected: s,
		select: (e, t, n) => {
			let a = e;
			return !r && s && s && c(e, s) && (a = void 0), i || o(a), i?.(a, e, t, n), a;
		},
		isSelected: (e) => s ? c(s, e) : !1
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useSelection.js
function bc(e, t) {
	let n = yc(e, t), r = pc(e, t), i = vc(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/DayPicker.js
function xc(e) {
	let t = e;
	t.timeZone && (t = { ...e }, t.today &&= new Ai(t.today, t.timeZone), t.month &&= new Ai(t.month, t.timeZone), t.defaultMonth &&= new Ai(t.defaultMonth, t.timeZone), t.startMonth &&= new Ai(t.startMonth, t.timeZone), t.endMonth &&= new Ai(t.endMonth, t.timeZone), t.mode === "single" && t.selected ? t.selected = new Ai(t.selected, t.timeZone) : t.mode === "multiple" && t.selected ? t.selected = t.selected?.map((e) => new Ai(e, t.timeZone)) : t.mode === "range" && t.selected && (t.selected = {
		from: t.selected.from ? new Ai(t.selected.from, t.timeZone) : void 0,
		to: t.selected.to ? new Ai(t.selected.to, t.timeZone) : void 0
	}));
	let { components: n, formatters: r, labels: i, dateLib: o, locale: s, classNames: c } = S(() => {
		let e = {
			...Ta,
			...t.locale
		};
		return {
			dateLib: new go({
				locale: e,
				weekStartsOn: t.broadcastCalendar ? 1 : t.weekStartsOn,
				firstWeekContainsDate: t.firstWeekContainsDate,
				useAdditionalWeekYearTokens: t.useAdditionalWeekYearTokens,
				useAdditionalDayOfYearTokens: t.useAdditionalDayOfYearTokens,
				timeZone: t.timeZone,
				numerals: t.numerals
			}, t.dateLib),
			components: us(t.components),
			formatters: Cs(t.formatters),
			labels: {
				...Vs,
				...t.labels
			},
			locale: e,
			classNames: {
				...fs(),
				...t.classNames
			}
		};
	}, [
		t.locale,
		t.broadcastCalendar,
		t.weekStartsOn,
		t.firstWeekContainsDate,
		t.useAdditionalWeekYearTokens,
		t.useAdditionalDayOfYearTokens,
		t.timeZone,
		t.numerals,
		t.dateLib,
		t.components,
		t.formatters,
		t.labels,
		t.classNames
	]), { captionLayout: l, mode: u, navLayout: d, numberOfMonths: f = 1, onDayBlur: p, onDayClick: m, onDayFocus: h, onDayKeyDown: _, onDayMouseEnter: v, onDayMouseLeave: y, onNextClick: b, onPrevClick: x, showWeekNumber: C, styles: T } = t, { formatCaption: E, formatDay: D, formatMonthDropdown: O, formatWeekNumber: k, formatWeekNumberHeader: ee, formatWeekdayName: A, formatYearDropdown: j } = r, M = oc(t, o), { days: N, months: P, navStart: F, navEnd: I, previousMonth: L, nextMonth: R, goToMonth: z } = M, B = cs(N, t, F, I, o), { isSelected: V, select: H, selected: te } = bc(t, o) ?? {}, { blur: U, focused: W, isFocusTarget: G, moveFocus: K, setFocused: ne } = fc(t, M, B, V ?? (() => !1), o), { labelDayButton: re, labelGridcell: ie, labelGrid: ae, labelMonthDropdown: oe, labelNav: se, labelPrevious: ce, labelNext: le, labelWeekday: ue, labelWeekNumber: de, labelWeekNumberHeader: fe, labelYearDropdown: q } = i, pe = S(() => Es(o, t.ISOWeek), [o, t.ISOWeek]), me = u !== void 0 || m !== void 0, J = g(() => {
		L && (z(L), x?.(L));
	}, [
		L,
		z,
		x
	]), he = g(() => {
		R && (z(R), b?.(R));
	}, [
		z,
		R,
		b
	]), ge = g((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), ne(e), H?.(e.date, t, n), m?.(e.date, t, n);
	}, [
		H,
		m,
		ne
	]), _e = g((e, t) => (n) => {
		ne(e), h?.(e.date, t, n);
	}, [h, ne]), ve = g((e, t) => (n) => {
		U(), p?.(e.date, t, n);
	}, [U, p]), ye = g((e, n) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", t.dir === "rtl" ? "before" : "after"],
			ArrowDown: [r.shiftKey ? "year" : "week", "after"],
			ArrowUp: [r.shiftKey ? "year" : "week", "before"],
			PageUp: [r.shiftKey ? "year" : "month", "before"],
			PageDown: [r.shiftKey ? "year" : "month", "after"],
			Home: ["startOfWeek", "before"],
			End: ["endOfWeek", "after"]
		};
		if (i[r.key]) {
			r.preventDefault(), r.stopPropagation();
			let [e, t] = i[r.key];
			K(e, t);
		}
		_?.(e.date, n, r);
	}, [
		K,
		_,
		t.dir
	]), be = g((e, t) => (n) => {
		v?.(e.date, t, n);
	}, [v]), xe = g((e, t) => (n) => {
		y?.(e.date, t, n);
	}, [y]), Se = g((e) => (t) => {
		let n = Number(t.target.value);
		z(o.setMonth(o.startOfMonth(e), n));
	}, [o, z]), Ce = g((e) => (t) => {
		let n = Number(t.target.value);
		z(o.setYear(o.startOfMonth(e), n));
	}, [o, z]), { className: we, style: Te } = S(() => ({
		className: [c[Eo.Root], t.className].filter(Boolean).join(" "),
		style: {
			...T?.[Eo.Root],
			...t.style
		}
	}), [
		c,
		t.className,
		t.style,
		T
	]), Ee = ds(t), De = w(null);
	Ys(De, !!t.animate, {
		classNames: c,
		months: P,
		focused: W,
		dateLib: o
	});
	let Y = {
		dayPickerProps: t,
		selected: te,
		select: H,
		isSelected: V,
		months: P,
		nextMonth: R,
		previousMonth: L,
		goToMonth: z,
		getModifiers: B,
		components: n,
		classNames: c,
		styles: T,
		labels: i,
		formatters: r
	};
	return a.createElement(Lo.Provider, { value: Y }, a.createElement(n.Root, {
		rootRef: t.animate ? De : void 0,
		className: we,
		style: Te,
		dir: t.dir,
		id: t.id,
		lang: t.lang,
		nonce: t.nonce,
		title: t.title,
		role: t.role,
		"aria-label": t["aria-label"],
		"aria-labelledby": t["aria-labelledby"],
		...Ee
	}, a.createElement(n.Months, {
		className: c[Eo.Months],
		style: T?.[Eo.Months]
	}, !t.hideNavigation && !d && a.createElement(n.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: c[Eo.Nav],
		style: T?.[Eo.Nav],
		"aria-label": se(),
		onPreviousClick: J,
		onNextClick: he,
		previousMonth: L,
		nextMonth: R
	}), P.map((e, i) => a.createElement(n.Month, {
		"data-animated-month": t.animate ? "true" : void 0,
		className: c[Eo.Month],
		style: T?.[Eo.Month],
		key: i,
		displayIndex: i,
		calendarMonth: e
	}, d === "around" && !t.hideNavigation && i === 0 && a.createElement(n.PreviousMonthButton, {
		type: "button",
		className: c[Eo.PreviousMonthButton],
		tabIndex: L ? void 0 : -1,
		"aria-disabled": L ? void 0 : !0,
		"aria-label": ce(L),
		onClick: J,
		"data-animated-button": t.animate ? "true" : void 0
	}, a.createElement(n.Chevron, {
		disabled: L ? void 0 : !0,
		className: c[Eo.Chevron],
		orientation: t.dir === "rtl" ? "right" : "left"
	})), a.createElement(n.MonthCaption, {
		"data-animated-caption": t.animate ? "true" : void 0,
		className: c[Eo.MonthCaption],
		style: T?.[Eo.MonthCaption],
		calendarMonth: e,
		displayIndex: i
	}, l?.startsWith("dropdown") ? a.createElement(n.DropdownNav, {
		className: c[Eo.Dropdowns],
		style: T?.[Eo.Dropdowns]
	}, (() => {
		let i = l === "dropdown" || l === "dropdown-months" ? a.createElement(n.MonthsDropdown, {
			key: "month",
			className: c[Eo.MonthsDropdown],
			"aria-label": oe(),
			classNames: c,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: Se(e.date),
			options: ws(e.date, F, I, r, o),
			style: T?.[Eo.Dropdown],
			value: o.getMonth(e.date)
		}) : a.createElement("span", { key: "month" }, O(e.date, o)), s = l === "dropdown" || l === "dropdown-years" ? a.createElement(n.YearsDropdown, {
			key: "year",
			className: c[Eo.YearsDropdown],
			"aria-label": q(o.options),
			classNames: c,
			components: n,
			disabled: !!t.disableNavigation,
			onChange: Ce(e.date),
			options: Ds(F, I, r, o, !!t.reverseYears),
			style: T?.[Eo.Dropdown],
			value: o.getYear(e.date)
		}) : a.createElement("span", { key: "year" }, j(e.date, o));
		return o.getMonthYearOrder() === "year-first" ? [s, i] : [i, s];
	})(), a.createElement("span", {
		role: "status",
		"aria-live": "polite",
		style: {
			border: 0,
			clip: "rect(0 0 0 0)",
			height: "1px",
			margin: "-1px",
			overflow: "hidden",
			padding: 0,
			position: "absolute",
			width: "1px",
			whiteSpace: "nowrap",
			wordWrap: "normal"
		}
	}, E(e.date, o.options, o))) : a.createElement(n.CaptionLabel, {
		className: c[Eo.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, E(e.date, o.options, o))), d === "around" && !t.hideNavigation && i === f - 1 && a.createElement(n.NextMonthButton, {
		type: "button",
		className: c[Eo.NextMonthButton],
		tabIndex: R ? void 0 : -1,
		"aria-disabled": R ? void 0 : !0,
		"aria-label": le(R),
		onClick: he,
		"data-animated-button": t.animate ? "true" : void 0
	}, a.createElement(n.Chevron, {
		disabled: R ? void 0 : !0,
		className: c[Eo.Chevron],
		orientation: t.dir === "rtl" ? "left" : "right"
	})), i === f - 1 && d === "after" && !t.hideNavigation && a.createElement(n.Nav, {
		"data-animated-nav": t.animate ? "true" : void 0,
		className: c[Eo.Nav],
		style: T?.[Eo.Nav],
		"aria-label": se(),
		onPreviousClick: J,
		onNextClick: he,
		previousMonth: L,
		nextMonth: R
	}), a.createElement(n.MonthGrid, {
		role: "grid",
		"aria-multiselectable": u === "multiple" || u === "range",
		"aria-label": ae(e.date, o.options, o) || void 0,
		className: c[Eo.MonthGrid],
		style: T?.[Eo.MonthGrid]
	}, !t.hideWeekdays && a.createElement(n.Weekdays, {
		"data-animated-weekdays": t.animate ? "true" : void 0,
		className: c[Eo.Weekdays],
		style: T?.[Eo.Weekdays]
	}, C && a.createElement(n.WeekNumberHeader, {
		"aria-label": fe(o.options),
		className: c[Eo.WeekNumberHeader],
		style: T?.[Eo.WeekNumberHeader],
		scope: "col"
	}, ee()), pe.map((e) => a.createElement(n.Weekday, {
		"aria-label": ue(e, o.options, o),
		className: c[Eo.Weekday],
		key: String(e),
		style: T?.[Eo.Weekday],
		scope: "col"
	}, A(e, o.options, o)))), a.createElement(n.Weeks, {
		"data-animated-weeks": t.animate ? "true" : void 0,
		className: c[Eo.Weeks],
		style: T?.[Eo.Weeks]
	}, e.weeks.map((e) => a.createElement(n.Week, {
		className: c[Eo.Week],
		key: e.weekNumber,
		style: T?.[Eo.Week],
		week: e
	}, C && a.createElement(n.WeekNumber, {
		week: e,
		style: T?.[Eo.WeekNumber],
		"aria-label": de(e.weekNumber, { locale: s }),
		className: c[Eo.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, k(e.weekNumber, o)), e.days.map((e) => {
		let { date: r } = e, i = B(e);
		if (i[Do.focused] = !i.hidden && !!W?.isEqualTo(e), i[Oo.selected] = V?.(r) || i.selected, ns(te)) {
			let { from: e, to: t } = te;
			i[Oo.range_start] = !!(e && t && o.isSameDay(r, e)), i[Oo.range_end] = !!(e && t && o.isSameDay(r, t)), i[Oo.range_middle] = es(te, r, !0, o);
		}
		let s = Ts(i, T, t.modifiersStyles), l = ls(i, c, t.modifiersClassNames), u = !me && !i.hidden ? ie(r, i, o.options, o) : void 0;
		return a.createElement(n.Day, {
			key: `${o.format(r, "yyyy-MM-dd")}_${o.format(e.displayMonth, "yyyy-MM")}`,
			day: e,
			modifiers: i,
			className: l.join(" "),
			style: s,
			role: "gridcell",
			"aria-selected": i.selected || void 0,
			"aria-label": u,
			"data-day": o.format(r, "yyyy-MM-dd"),
			"data-month": e.outside ? o.format(r, "yyyy-MM") : void 0,
			"data-selected": i.selected || void 0,
			"data-disabled": i.disabled || void 0,
			"data-hidden": i.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": i.focused || void 0,
			"data-today": i.today || void 0
		}, !i.hidden && me ? a.createElement(n.DayButton, {
			className: c[Eo.DayButton],
			style: T?.[Eo.DayButton],
			type: "button",
			day: e,
			modifiers: i,
			disabled: i.disabled || void 0,
			tabIndex: G(e) ? 0 : -1,
			"aria-label": re(r, i, o.options, o),
			onClick: ge(e, i),
			onBlur: ve(e, i),
			onFocus: _e(e, i),
			onKeyDown: ye(e, i),
			onMouseEnter: be(e, i),
			onMouseLeave: xe(e, i)
		}, D(r, o.options, o)) : !i.hidden && D(e.date, o.options, o));
	})))))))), t.footer && a.createElement(n.Footer, {
		className: c[Eo.Footer],
		style: T?.[Eo.Footer],
		role: "status",
		"aria-live": "polite"
	}, t.footer)));
}
//#endregion
//#region ../format/src/money.ts
var Sc = (e) => {
	if (typeof e == "number") return Number.isFinite(e) ? e : null;
	if (typeof e == "bigint") {
		let t = Number(e);
		return Number.isFinite(t) ? t : null;
	}
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return null;
		let n = Number(t);
		return Number.isFinite(n) ? n : null;
	}
	return null;
}, Cc = (e, t) => {
	try {
		let n = new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits;
		return typeof n == "number" ? n : 2;
	} catch {
		return 2;
	}
}, wc = ({ currency: e, locale: t, formatOptions: n, useCurrencyScale: r = !1, defaultMaxFractionDigits: i = 2 }) => {
	let a = {
		style: "currency",
		currencyDisplay: "code",
		...n,
		currency: e
	};
	if (r) {
		let n = Cc(e, t);
		a.minimumFractionDigits === void 0 && (a.minimumFractionDigits = n), a.maximumFractionDigits === void 0 && (a.maximumFractionDigits = n);
	} else a.maximumFractionDigits === void 0 && (a.maximumFractionDigits = i);
	return new Intl.NumberFormat(t ?? void 0, a);
}, Tc = (e, t) => {
	let n = Sc(e.value);
	return n === null ? "" : wc({
		currency: e.currency,
		locale: t?.locale,
		useCurrencyScale: !0
	}).format(n);
}, Ec = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e, n = typeof t.currency == "string", r = Sc(t.value) !== null;
	return n && r;
}, Dc = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";
new RegExp(Dc, "u");
var Oc = "^(https?://.+|/.*)$", kc = "^\\d+(\\.\\d{1,2})?$", Ac = "^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$", jc = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/, Mc = "\\s+";
new RegExp(Mc, "g"), new RegExp(Mc);
var Nc = /^#?([a-fA-F0-9]{6})$/, Pc = /^#?([a-fA-F0-9]{3})$/, Fc = /^[0-9]$/, Ic = /^[0-9a-z]$/i, Lc = /^[a-z]$/i, Rc = /[?#]/u, zc = /^https:\/\//iu, Bc = /^data:font\//iu, Vc = /^[-+]?\d*(?:\.(\d*))?(?:e[-+]?(\d+))?$/i, Hc = /\.?0+$/, Uc = /\D/g, Wc = /(.{4})/g, Gc = /,/g, Kc = /[^\d.]/g;
new RegExp(Oc, "u"), new RegExp(Dc, "u");
var qc = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim();
	return t.length > 0 ? t : null;
}, Jc = 15, Yc = 34, Xc = /[^a-z0-9]/gi, Zc = /^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/, Qc = {
	AD: 24,
	AE: 23,
	AL: 28,
	AO: 25,
	AT: 20,
	AZ: 28,
	BA: 20,
	BE: 16,
	BF: 27,
	BG: 22,
	BH: 22,
	BI: 16,
	BJ: 28,
	BL: 27,
	BR: 29,
	BY: 28,
	CH: 21,
	CI: 28,
	CM: 27,
	CR: 22,
	CV: 25,
	CY: 28,
	CZ: 24,
	DE: 22,
	DK: 18,
	DO: 28,
	DZ: 24,
	EE: 20,
	EG: 29,
	ES: 24,
	FI: 18,
	FO: 18,
	FR: 27,
	GB: 22,
	GE: 22,
	GF: 27,
	GI: 23,
	GL: 18,
	GP: 27,
	GR: 27,
	GT: 28,
	HR: 21,
	HU: 28,
	IE: 22,
	IL: 23,
	IQ: 23,
	IR: 26,
	IS: 26,
	IT: 27,
	JO: 30,
	KW: 30,
	KZ: 20,
	LB: 28,
	LC: 32,
	LI: 21,
	LT: 20,
	LU: 20,
	LV: 21,
	MC: 27,
	MD: 24,
	ME: 22,
	MF: 27,
	MG: 27,
	MK: 19,
	ML: 28,
	MQ: 27,
	MR: 27,
	MT: 31,
	MU: 30,
	MZ: 25,
	NC: 27,
	NL: 18,
	NO: 15,
	PF: 27,
	PK: 24,
	PL: 28,
	PM: 27,
	PS: 29,
	PT: 25,
	QA: 29,
	RE: 27,
	RO: 24,
	RS: 22,
	SA: 24,
	SC: 31,
	SE: 24,
	SI: 19,
	SK: 24,
	SM: 27,
	SN: 28,
	ST: 25,
	SV: 28,
	TF: 27,
	TL: 23,
	TN: 24,
	TR: 26,
	UA: 29,
	VA: 22,
	VG: 24,
	WF: 27,
	XK: 20,
	YT: 27
}, $c = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim();
	return t.length === 0 ? "" : t.replace(Xc, "").toUpperCase();
}, el = (e) => {
	let t = $c(e);
	return t.length === 0 ? "" : t.replace(Wc, "$1 ").trim();
}, tl = {
	formatDisplayValue: (e) => el(e),
	parseUserInput: (e) => $c(e)
}, nl = (e) => {
	let t = `${e.slice(4)}${e.slice(0, 4)}`, n = 0;
	for (let e = 0; e < t.length; e += 1) {
		let r = t.charCodeAt(e);
		if (r >= 48 && r <= 57) {
			n = (n * 10 + (r - 48)) % 97;
			continue;
		}
		let i = r - 55;
		n = (n * 100 + i) % 97;
	}
	return n;
}, rl = (e) => {
	let t = $c(e);
	if (t.length === 0 || t.length < Jc || t.length > Yc || !Zc.test(t)) return !1;
	let n = Qc[t.slice(0, 2)];
	return !n || t.length !== n ? !1 : nl(t) === 1;
}, il = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim().replace(Gc, ".");
	if (t.length === 0) return "";
	let n = t.replace(Kc, "");
	if (n.length === 0) return "";
	let [r = "", ...i] = n.split("."), a = i.pop() ?? "", o = `${r}${i.join("")}`;
	return t.endsWith(".") ? `${o}.` : a.length === 0 ? o : `${o}.${a}`;
}, al = (e) => {
	let t = il(e);
	return t.length === 0 || t === "." ? "" : t.startsWith(".") ? `0${t}` : t.endsWith(".") ? t.slice(0, -1) : t;
}, ol = (e) => al(e).length > 0, sl = (e) => {
	if (typeof e != "string" || e.trim().length === 0) return [];
	let t = /* @__PURE__ */ new Set(), n = [];
	return e.split(",").forEach((e) => {
		let r = al(e);
		r.length !== 0 && (t.has(r) || (t.add(r), n.push(r)));
	}), n;
}, cl = /^\d{4}-\d{2}-\d{2}$/, ll = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/, ul = (e) => cl.test(e) || jc.test(e) || ll.test(e), dl = (e, t = {}) => {
	if (e == null) return null;
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		if (t.strict || !Number.isFinite(e)) return null;
		let n = new Date(e);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	if (typeof e == "string") {
		let n = e.trim();
		if (!n || t.strict && !ul(n)) return null;
		let r = new Date(n);
		return Number.isNaN(r.getTime()) ? null : r;
	}
	return null;
}, fl = ({ locale: e, formatOptions: t }) => new Intl.DateTimeFormat(e ?? void 0, t), pl = (e, t, n) => {
	let r = dl(e);
	if (!r) return "—";
	try {
		return fl({
			locale: t,
			formatOptions: n
		}).format(r);
	} catch {
		return r.toISOString();
	}
}, ml = new RegExp(Ac, "u"), hl = new Intl.Locale("en-GB"), gl = (e, t = hl) => {
	if (e instanceof Intl.Locale) return e;
	if (typeof e == "string" && e.length > 0) {
		if (!ml.test(e)) return t;
		try {
			return new Intl.Locale(e);
		} catch {}
		try {
			let [t] = Intl.getCanonicalLocales(e);
			if (t) return new Intl.Locale(t);
		} catch {}
	}
	return t;
}, _l = (e) => e instanceof Intl.Locale ? e.toString() : gl(e).toString(), vl = "This field is required", yl = "Invalid value", bl = (e, t) => typeof e == "string" && e.trim().length > 0 ? e : t, xl = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let { pattern: e } = n;
		if (!(typeof e != "string" || e.length === 0)) try {
			t.push({
				pattern: e,
				regex: new RegExp(e),
				message: bl(n.invalidMessage, yl)
			});
		} catch (t) {
			if (process.env.NODE_ENV !== "production") {
				let n = t instanceof Error ? t.message : String(t);
				console.warn("[validation] Unable to compile RegExp for pattern \"%s\": %s", e, n);
			}
		}
	}
	return t;
}, Sl = (e, { forceRequired: t = !1 } = {}) => {
	let n = t || !!e?.required?.value, r = xl(e?.rules), i = !!e?.iban?.value;
	if (!n && r.length === 0 && !i) return;
	let a = n ? {
		value: !0,
		invalidMessage: bl(e?.required?.invalidMessage, vl)
	} : void 0, o = i ? {
		value: !0,
		invalidMessage: bl(e?.iban?.invalidMessage, yl)
	} : void 0;
	return {
		...a ? { required: a } : {},
		...o ? { iban: o } : {},
		...r.length > 0 ? { rules: r } : {}
	};
}, Cl = (e, t) => {
	let n = Sl(e, t), r = !!n?.required, i = n?.required?.invalidMessage ?? vl, a = !!n?.iban?.value, o = n?.iban?.invalidMessage ?? yl;
	return {
		config: n,
		evaluate: (e, t) => {
			let s = !!t?.includeRequired;
			if (e == null) return s && r ? i : void 0;
			let c = null;
			if (typeof e == "string" ? c = e : (typeof e == "number" || typeof e == "boolean") && (c = String(e)), c === null) return s && r ? i : void 0;
			let l = c.trim();
			if (l.length === 0) return s && r ? i : void 0;
			let u = a ? $c(l) : l;
			for (let { regex: e, message: t } of n?.rules ?? []) if (!e.test(u)) return t;
			if (a && !rl(l)) return o;
		}
	};
}, wl = (e, t) => {
	if (!(!e || typeof e != "object" || typeof t != "string")) return t.split(".").reduce((e, t) => {
		if (!(!e || typeof e != "object")) return e[t];
	}, e);
}, Tl = (e, t) => {
	if (e) {
		if (typeof e == "function") {
			e(t);
			return;
		}
		try {
			e.current = t;
		} catch {}
	}
}, El = (e) => {
	if (e != null) {
		if (typeof e == "string") return e;
		if (e instanceof Error) return e.message;
		if (typeof e == "number" || typeof e == "boolean") return String(e);
	}
}, Dl = (e) => e == null ? !1 : typeof e == "string" ? e.length > 0 : typeof e == "number" ? !Number.isNaN(e) : typeof e == "boolean" ? !0 : Array.isArray(e) ? e.length > 0 : e instanceof Date ? !Number.isNaN(e.getTime()) : !1, Ol = (e) => typeof e == "object" && !!e, kl = (e, t) => {
	if (!(!t || !Ol(e))) return wl(e, t);
}, Al = (e) => e ? typeof e == "boolean" ? e : Array.isArray(e) ? e.some(Al) : Ol(e) ? Object.values(e).some(Al) : !!e : !1, jl = ({ forwardedRef: e, field: t, meta: n, form: r, innerRef: i, id: a, name: o, value: s, defaultValue: c, explicitError: l, helperText: u, onChange: d, onBlur: f }) => {
	let p = t?.name ?? o, m = a ?? p, { errors: h, touched: _, submitCount: v } = r ?? {}, y = Ol(h) ? h : void 0, b = Ol(_) ? _ : void 0, x = v ?? 0, S = l ?? n?.error ?? kl(y, p), C = n?.touched ?? kl(b, p), w = !!(t || r || n), T = S != null, E = w && Al(b), D = T && (l !== void 0 || !w || C || E || x > 0) ? l ?? El(S) : void 0, O = D ? void 0 : u, k = g((t) => {
		Tl(e, t), Tl(i, t);
	}, [e, i]), ee = g((e) => {
		t?.onChange(e), d?.(e);
	}, [t, d]), A = g((e) => {
		t?.onBlur(e), f?.(e);
	}, [t, f]), j = t?.value ?? s, M = Dl(j ?? c), N = {};
	return N.ref = k, N.onBlur = A, N.onChange = ee, m !== void 0 && (N.id = m), p !== void 0 && (N.name = p), j === void 0 ? c !== void 0 && (N.defaultValue = c) : N.value = j, {
		inputId: m,
		resolvedName: p,
		mergedRef: k,
		handleChange: ee,
		handleBlur: A,
		resolvedValue: j,
		hasValue: M,
		errorContent: D,
		helperContent: O,
		sharedProps: N
	};
}, Ml = ({ value: e, required: t = !1, validation: n, metaTouched: r = !1, submitCount: i = 0, resolvedName: a, setFieldError: o, handleChange: s, handleBlur: c, setManagedError: l, getValueFromChangeEvent: u, normalizeValue: d }) => {
	let { config: f, evaluate: p } = S(() => Cl(n, { forceRequired: t }), [t, n]), m = !!f, h = g((e) => d ? d(e) : e, [d]), _ = w({ display: !1 }), y = g((e, t) => {
		let n = typeof e == "string" ? e : void 0, r = _.current;
		r.message === n && r.display === t || (_.current = {
			message: n,
			display: t
		}, o && a && o(a, n), l(t ? n : void 0));
	}, [
		a,
		o,
		l
	]), b = g((e, t) => {
		if (m) return p(h(e), { includeRequired: t });
	}, [
		p,
		h,
		m
	]);
	v(() => {
		m && y(b(e, !0), r || i > 0);
	}, [
		y,
		r,
		b,
		m,
		i,
		e
	]);
	let x = g((e) => {
		s(e), m && y(b(u(e), !0), r || i > 0);
	}, [
		y,
		u,
		s,
		r,
		b,
		m,
		i
	]), C = g((t) => {
		c(t), m && y(b(e, !0), !0);
	}, [
		y,
		c,
		b,
		m,
		e
	]);
	return {
		onChange: m ? x : s,
		onBlur: m ? C : c,
		normalizedValidation: f,
		shouldValidate: m
	};
}, Nl, Pl = () => {
	if (Nl !== void 0) return Nl ?? void 0;
	let e = (typeof globalThis == "object" ? globalThis : void 0)?.Event;
	return Nl = typeof e == "function" ? e : null, Nl ?? void 0;
}, Fl = (e) => {
	let t = Pl();
	if (!t) return;
	let n = { bubbles: !0 }, r = new t("input", n);
	e.dispatchEvent?.(r);
	let i = new t("change", n);
	e.dispatchEvent?.(i);
}, Il = "value", Ll = /* @__PURE__ */ new WeakMap(), Rl = (e) => {
	let t = Object.getPrototypeOf(e);
	if (!t) return;
	let n = Ll.get(t);
	if (n !== void 0) return n ?? void 0;
	let r = Object.getOwnPropertyDescriptor(t, Il)?.set;
	if (!r || typeof r != "function") {
		Ll.set(t, null);
		return;
	}
	let i = (e, t) => {
		Reflect.apply(r, e, [t]);
	};
	return Ll.set(t, i), i;
}, zl = (e, t) => {
	let n = Rl(e);
	if (n) {
		n(e, t);
		return;
	}
	Reflect.set(e, Il, t);
}, Bl = u({ hideLabel: !1 }), Vl = () => _(Bl), Hl = "flex flex-col", Ul = "mt-1 block text-sm max-w-full", Wl = {
	error: "text-[var(--pc-color-text)]",
	helper: "text-[var(--pc-color-text-muted)]",
	darkError: "text-[var(--pc-color-text)]",
	darkHelper: "text-[var(--pc-color-text-muted)]"
}, Gl = {
	error: `${Ul} ${Wl.error}`,
	helper: `${Ul} ${Wl.helper}`,
	darkError: `${Ul} ${Wl.darkError}`,
	darkHelper: `${Ul} ${Wl.darkHelper}`
}, Kl = "flex items-center", ql = "text-[var(--pc-color-text-muted)]", Jl = ["rounded-[var(--pc-radius)] border disabled:opacity-25 focus-within:outline-2", [
	"[--pc-autofill-surface:color-mix(in_srgb,var(--pc-color-surface)_86%,#9ec5ff_14%)]",
	"[&:has(input:-webkit-autofill)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(textarea:-webkit-autofill)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(select:-webkit-autofill)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(input:-internal-autofill-previewed)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(textarea:-internal-autofill-previewed)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(select:-internal-autofill-previewed)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(input:-internal-autofill-selected)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(textarea:-internal-autofill-selected)]:[background-color:var(--pc-autofill-surface)]",
	"[&:has(select:-internal-autofill-selected)]:[background-color:var(--pc-autofill-surface)]"
].join(" ")].join(" "), Yl = "relative flex w-full items-center", Xl = "relative flex w-full", Zl = "px-3", Ql = "px-2", $l = "px-3", eu = "px-2", tu = {
	neutralLight: "outline-[var(--pc-color-border)]",
	neutralDark: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	errorLight: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	errorDark: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]"
}, nu = "text-base", ru = "pt-6 pb-1.5", iu = "pt-3.5 pb-3", au = "pt-6 pb-1.5", ou = "pt-3.5 pb-3", su = "pt-5.5 pb-1", cu = "pt-1.5 pb-2", lu = `${ru} ${nu}`, uu = `${iu} ${nu}`, du = `${au} ${nu}`, fu = `${ou} ${nu}`, pu = `${su} ${nu}`, mu = `${cu} ${nu}`, hu = {
	typography: nu,
	padding: {
		default: ru,
		hiddenDefault: iu,
		select: au,
		hiddenSelect: ou,
		compact: su,
		hiddenCompact: cu
	},
	spacing: {
		default: lu,
		hiddenDefault: uu,
		textarea: lu,
		hiddenTextarea: uu,
		select: du,
		hiddenSelect: fu,
		compact: pu,
		selectCompact: pu,
		hiddenCompact: mu,
		hiddenSelectCompact: mu
	}
}, gu = [
	"absolute",
	"max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
	"pointer-events-none",
	"leading-tight",
	"transition-all duration-200 ease-in-out"
].join(" "), _u = "gap-3", vu = "relative flex-1", yu = [
	"[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-autofill-surface)_inset]",
	"[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]",
	"[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]",
	"[&:-webkit-autofill]:[background-color:var(--pc-autofill-surface)]",
	"[&:-internal-autofill-previewed]:[box-shadow:0_0_0_1000px_var(--pc-autofill-surface)_inset]",
	"[&:-internal-autofill-previewed]:[-webkit-text-fill-color:var(--pc-color-text)]",
	"[&:-internal-autofill-previewed]:[caret-color:var(--pc-color-text)]",
	"[&:-internal-autofill-previewed]:[background-color:var(--pc-autofill-surface)]",
	"[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-autofill-surface)_inset]",
	"[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]",
	"[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]",
	"[&:-internal-autofill-selected]:[background-color:var(--pc-autofill-surface)]"
].join(" "), bu = [
	"appearance-none",
	"[&::-webkit-search-decoration]:hidden",
	"[&::-webkit-search-cancel-button]:hidden",
	"[&::-webkit-search-results-button]:hidden",
	"[&::-webkit-search-results-decoration]:hidden"
].join(" "), xu = [
	"appearance-none",
	"[font-variant-numeric:tabular-nums]",
	"[&::-webkit-calendar-picker-indicator]:hidden",
	"[&::-webkit-calendar-picker-indicator]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-clear-button]:hidden"
].join(" "), Su = [
	"appearance-none",
	"[&::-webkit-inner-spin-button]:appearance-none",
	"[&::-webkit-outer-spin-button]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-outer-spin-button]:hidden"
].join(" "), Cu = ["peer w-full bg-transparent text-[var(--pc-color-text)] outline-0 px-0", yu].join(" "), wu = ["peer block w-full min-h-48 resize-y bg-transparent text-[var(--pc-color-text)] px-0 outline-0", yu].join(" "), Tu = {
	container: Hl,
	label: { floating: gu },
	control: hu,
	wrapper: {
		base: Jl,
		inline: Yl,
		block: Xl,
		spacing: Zl,
		spacingCompact: $l,
		spacingWithLabel: Zl,
		spacingWithLabelCompact: Ql,
		spacingWithoutLabel: $l,
		spacingWithoutLabelCompact: eu,
		tone: tu
	},
	adornment: {
		base: Kl,
		dark: ql
	},
	gap: _u,
	inner: vu,
	input: {
		base: Cu,
		textarea: wu
	},
	messages: {
		base: Ul,
		tone: Wl,
		composed: Gl
	}
}, Eu = {
	container: Tu.container,
	message: {
		base: Ul,
		errorTone: Wl.error,
		helperTone: Wl.helper,
		darkErrorTone: Wl.darkError,
		darkHelperTone: Wl.darkHelper
	},
	adornment: {
		base: Kl,
		darkTone: ql
	}
}, Du = Tu.messages.composed, Ou = Tu.adornment, ku = Tu.inner, Au = Tu.gap, ju = Tu.control, Mu = Tu.wrapper.inline, Nu = Tu.wrapper.block, Pu = Tu.wrapper.base, Fu = Tu.wrapper.spacingWithLabel, Iu = Tu.wrapper.spacingWithLabelCompact, Lu = Tu.wrapper.spacingWithoutLabel, Ru = Tu.wrapper.spacingWithoutLabelCompact, zu = Tu.label.floating, Bu = Tu.input.base, Vu = Tu.input.textarea, Hu = bu, Uu = xu, Wu = Su;
//#endregion
//#region ../ui/src/lib/icons/AlertCircleIcon.tsx
function Gu({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [/* @__PURE__ */ O("path", { d: "M18.22 21.25H5.78a3.78 3.78 0 0 1-3.31-5.33L8.69 5.11a3.87 3.87 0 0 1 6.62 0l6.22 10.81a3.78 3.78 0 0 1-3.31 5.33Z" }), /* @__PURE__ */ O("path", {
			fill: "currentColor",
			stroke: "none",
			d: "M10.88 17.15a1.13 1.13 0 1 1 2.26 0a1.13 1.13 0 0 1-2.26 0Zm.36-2.73L11.1 9.2a.9.9 0 0 1 1.79 0l-.13 5.22a.76.76 0 0 1-1.52 0Z"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/BadgeCheckIcon.tsx
function Ku({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ k("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		children: [/* @__PURE__ */ O("path", {
			d: "M14.262 3.6C13.196 2.532 12.662 2 12 2s-1.196.533-2.262 1.6c-.64.64-1.274.936-2.186.936c-.796 0-1.93-.154-2.552.473c-.618.623-.464 1.752-.464 2.543c0 .912-.297 1.546-.937 2.186C2.533 10.804 2 11.338 2 12s.533 1.196 1.6 2.262c.716.717.936 1.18.936 2.186c0 .796-.154 1.93.473 2.552c.623.617 1.752.464 2.543.464c.971 0 1.44.19 2.133.883c.59.59 1.381 1.653 2.315 1.653s1.725-1.063 2.315-1.653c.694-.693 1.162-.883 2.133-.883c.791 0 1.92.154 2.543-.464m1.41-9.262C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186c0 .796.154 1.93-.473 2.552m0 0H19",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ O("path", {
			d: "M8.5 9.5L12 13l9-10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/CheckIcon.tsx
function qu({ strokeWidth: e = 2.2 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			d: "M3.25 10.5 7.75 15 17 5.75",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChoosePaymentTypeIcon.tsx
function Ju({ className: e }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 28 28",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ O("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M26.9648 24.2849C26.9484 25.1008 26.4772 25.6733 25.7981 25.804C25.5313 25.9298 25.2338 26 24.92 26H3.08005C1.93127 26 1 25.0587 1 23.8975V9.18008C1 8.01891 1.93127 7.07759 3.08004 7.07759H4.79675C5.01766 7.07759 5.19675 6.8985 5.19675 6.67758L5.19665 3.59183C5.19662 2.46502 6.05341 1.78789 7.13478 2.0601L24.8817 6.52747C25.6294 6.71569 26.2936 7.30816 26.6607 8.02877C26.8752 8.3595 27 8.75506 27 9.18008V23.8975C27 24.0298 26.9879 24.1593 26.9648 24.2849ZM7.60619 7.07759C7.38528 7.07759 7.2062 6.89852 7.20619 6.67761L7.20613 4.68512C7.20612 4.42461 7.45115 4.23361 7.70377 4.2972L17.9665 6.88062C18.0808 6.90938 18.06 7.07759 17.9421 7.07759H7.60619ZM24.42 9.18008C24.6961 9.18008 24.92 9.40394 24.92 9.68008V13.5H21.4999C20.4786 13.5 19.6391 13.893 19.0651 14.5388C18.5074 15.1662 18.25 15.9744 18.25 16.75C18.25 17.5255 18.5074 18.3338 19.065 18.9612C19.6391 19.607 20.4785 20 21.4999 20H24.92V23.3975C24.92 23.6737 24.6961 23.8975 24.42 23.8975H3.58004C3.3039 23.8975 3.08004 23.6737 3.08004 23.3975V9.68008C3.08004 9.40394 3.3039 9.18008 3.58004 9.18008H24.42ZM24.92 18L24.92 15.5H21.4999C21.0213 15.5 20.7359 15.6695 20.5599 15.8675C20.3676 16.0838 20.25 16.4006 20.25 16.75C20.25 17.0995 20.3676 17.4162 20.5599 17.6325C20.7358 17.8305 21.0213 18 21.4999 18H24.92Z"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronLeftIcon.tsx
function Yu({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			d: "M15 6l-6 6 6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronRightIcon.tsx
function Xu({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			d: "M9 6l6 6-6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CloseIcon.tsx
function Zu({ className: e, strokeWidth: t = 1.8 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ O("path", {
			d: "M6 6l12 12M18 6 6 18",
			strokeLinecap: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CopyIcon.tsx
function Qu({ strokeWidth: e = 1.5 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: [/* @__PURE__ */ O("rect", {
			x: "6",
			y: "6",
			width: "9",
			height: "12",
			rx: "2"
		}), /* @__PURE__ */ O("path", { d: "M13 4V3a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H6" })]
	});
}
//#endregion
//#region ../ui/src/lib/icons/DebugIcon.tsx
function $u({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [
			/* @__PURE__ */ O("path", { d: "M7.2 9.6 4.8 12l2.4 2.4" }),
			/* @__PURE__ */ O("path", { d: "M16.8 14.4 19.2 12l-2.4-2.4" }),
			/* @__PURE__ */ O("path", { d: "M13.4 8.8 10.6 15.2" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/ExternalLinkIcon.tsx
function ed({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: [
			/* @__PURE__ */ O("path", { d: "M14 4h6v6" }),
			/* @__PURE__ */ O("path", { d: "M10 14 20 4" }),
			/* @__PURE__ */ O("path", { d: "M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptIcon.tsx
function td({ className: e }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ O("path", {
			strokeWidth: "2",
			d: "M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptReadyIcon.tsx
function nd({ className: e }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 512 512",
		fill: "currentColor",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [
			/* @__PURE__ */ O("path", { d: "M344.356,404.041c-6.431-6.43-230.164-230.163-236.398-236.396c-6.527-6.528-17.111-6.528-23.639,0c-6.528,6.528-6.528,17.111,0,23.639l16.193,16.193L0.981,489.696c-4.659,13.211,8.096,25.987,21.324,21.324l282.22-99.532l16.193,16.193c6.527,6.528,17.111,6.529,23.639,0C350.884,421.153,350.884,410.569,344.356,404.041zM44.126,467.874l20.959-59.429l38.469,38.469L44.126,467.874zM138.506,434.589l-61.095-61.095l18.491-52.429l95.033,95.033L138.506,434.589zM225.887,403.771L108.228,286.112l18.491-52.429l151.597,151.598L225.887,403.771z" }),
			/* @__PURE__ */ O("path", { d: "M384.71,127.29c-6.528-6.528-17.112-6.528-23.639,0L256.72,231.64c-6.528,6.528-6.528,17.111,0,23.639c6.527,6.528,17.111,6.529,23.639,0l104.35-104.35C391.238,144.401,391.238,133.818,384.71,127.29z" }),
			/* @__PURE__ */ O("path", { d: "M367.318,280.947h-58.422c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h58.422c9.232,0,16.716-7.484,16.716-16.716S376.549,280.947,367.318,280.947z" }),
			/* @__PURE__ */ O("path", { d: "M214.337,127.966c-9.232,0-16.716,7.483-16.716,16.716v58.422c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-58.422C231.053,135.451,223.569,127.966,214.337,127.966z" }),
			/* @__PURE__ */ O("path", { d: "M497.336,262.203c-19.6-19.6-51.318-19.601-70.919,0c-19.552,19.552-19.552,51.366,0,70.918c19.597,19.597,51.318,19.601,70.918,0C516.888,313.569,516.888,281.756,497.336,262.203zM473.697,309.482c-6.532,6.532-17.106,6.534-23.639,0c-6.517-6.518-6.517-17.122,0-23.639c6.535-6.534,17.106-6.534,23.639,0C480.23,292.377,480.229,302.948,473.697,309.482z" }),
			/* @__PURE__ */ O("path", { d: "M249.797,14.664c-19.552-19.552-51.366-19.553-70.918,0c-19.597,19.597-19.601,51.318,0,70.919c19.549,19.551,51.365,19.553,70.918-0.001C269.395,65.984,269.398,34.264,249.797,14.664zM226.156,61.943c-6.517,6.517-17.121,6.517-23.639,0c-6.531-6.533-6.532-17.105,0-23.639c6.535-6.534,17.106-6.534,23.639,0C232.69,44.837,232.69,55.408,226.156,61.943z" }),
			/* @__PURE__ */ O("circle", {
				cx: "427.097",
				cy: "203.107",
				r: "16.716"
			}),
			/* @__PURE__ */ O("circle", {
				cx: "308.894",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ O("circle", {
				cx: "427.097",
				cy: "392.217",
				r: "16.716"
			}),
			/* @__PURE__ */ O("circle", {
				cx: "119.773",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ O("path", { d: "M443.809,1.329c-9.232,0-16.716,7.484-16.716,16.716V34.76c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716V18.044C460.525,8.813,453.04,1.329,443.809,1.329z" }),
			/* @__PURE__ */ O("path", { d: "M443.809,84.907c-9.232,0-16.716,7.484-16.716,16.716v16.716c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-16.716C460.525,92.391,453.04,84.907,443.809,84.907z" }),
			/* @__PURE__ */ O("path", { d: "M410.378,51.475h-16.716c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S419.609,51.475,410.378,51.475z" }),
			/* @__PURE__ */ O("path", { d: "M493.956,51.475H477.24c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S503.187,51.475,493.956,51.475z" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InfoIcon.tsx
function rd() {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ k("g", {
			transform: "matrix(1.457587 0 0 1.457587 -4.762248 -5.287919)",
			children: [
				/* @__PURE__ */ O("path", {
					d: "M12.1845 6.49999C12.1845 7.32842 11.513 7.99999 10.6845 7.99999C9.8561 7.99999 9.18452 7.32842 9.18452 6.49999C9.18452 5.67156 9.8561 4.99999 10.6845 4.99999C11.513 4.99999 12.1845 5.67156 12.1845 6.49999Z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ O("path", {
					d: "M12 18.7213L12 10.7213L9 10.7213",
					stroke: "currentColor",
					strokeWidth: "1.8",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				}),
				/* @__PURE__ */ O("path", {
					d: "M12 18.7213H14",
					stroke: "currentColor",
					strokeWidth: "1.8",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				})
			]
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/MinusIcon.tsx
function id({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ O("path", {
			d: "M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/OverwriteIcon.tsx
function ad({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [
			/* @__PURE__ */ O("path", { d: "M4.75 6h8.5A1.75 1.75 0 0 1 15 7.75v10.5A1.75 1.75 0 0 1 13.25 20h-8.5A1.75 1.75 0 0 1 3 18.25V7.75A1.75 1.75 0 0 1 4.75 6Z" }),
			/* @__PURE__ */ O("path", { d: "M9 4h8.5A1.75 1.75 0 0 1 19.25 5.75V15" }),
			/* @__PURE__ */ O("path", { d: "M7.75 10.25h5.5" }),
			/* @__PURE__ */ O("path", { d: "M7.75 13.25h5.5" }),
			/* @__PURE__ */ O("path", { d: "M7.75 16.25h5.5" }),
			/* @__PURE__ */ O("path", { d: "M21 12.25h-5" }),
			/* @__PURE__ */ O("path", { d: "m16.5 12.25 2.5-2.5" }),
			/* @__PURE__ */ O("path", { d: "m16.5 12.25 2.5 2.5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/PaymentDetailsIcon.tsx
function od({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [/* @__PURE__ */ O("path", {
			d: "M16 5 18.2929 2.70711c.3905-.39053 1.0237-.39053 1.4142 0l1.5858 1.58578c.3905.39053.3905 1.02369 0 1.41422L19 8M16 5l-5.7071 5.7071A1.4141 1.4141 0 0 0 10 11.4142V13a1 1 0 0 0 1 1h1.5858a1.4143 1.4143 0 0 0 1.4142-.2929L19 8M16 5l3 3",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ O("path", {
			d: "M6 14H5a2 2 0 0 0-2 2 2 2 0 0 0 2 2h14a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/PresentIcon.tsx
function sd({ className: e }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ O("path", {
			d: "M32 10.015c0-1.104-.895-2-2-2h-3.414c.884-.872 1.449-2.014 1.449-3.421 0-1.732-.995-3.615-3.788-3.615-3.675 0-6.745 3.913-8.188 6.106-1.444-2.193-4.607-6.106-8.282-6.106-2.793 0-3.788 1.882-3.788 3.614 0 1.407.581 2.55 1.482 3.421h-3.472c-1.105 0-2 .896-2 2v5.986h2.018v13.017c0 1.105.895 2 2 2h23.99c1.105 0 2-.895 2-2v-13.018h1.992v-5.986ZM24.247 2.981c1.236 0 1.788.52 1.788 1.615 0 2.221-2.479 3.42-4.811 3.42h-3.386c1.421-2.111 3.922-5.035 6.409-5.035ZM7.778 2.981c2.487 0 5.083 2.924 6.504 5.034h-3.386c-2.332 0-4.905-1.229-4.905-3.451 0-1.095.551-1.583 1.788-1.583ZM30 14.002h-13v-3.986h13v3.986ZM2 10.015h13v3.986H2zM4.018 16.002h10.982v13.018H4.018V16.002ZM28.008 29.02H17V16.003h11.008V29.02Z",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/PlusIcon.tsx
function cd({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ O("path", {
			d: "M10 4v12M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ResetIcon.tsx
function ld({ strokeWidth: e = 2.1 }) {
	return /* @__PURE__ */ k("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [/* @__PURE__ */ O("path", {
			d: "M3 5v5h5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ O("path", {
			d: "M5.85 18.15A9 9 0 1 0 5.18 6.4L3 10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/SwitchArrowsIcon.tsx
function ud() {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "21",
		height: "21",
		children: /* @__PURE__ */ O("path", {
			d: "M7 15L12 20L17 15M7 9L12 4L17 9",
			stroke: "currentColor",
			strokeWidth: "1.9",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/Skeleton.tsx
var dd = [
	"pc-skeleton-shimmer",
	"block",
	"max-w-full",
	"rounded-[var(--pc-radius)]",
	"[background:var(--pc-color-depth-3)]"
].join(" "), fd = f(function({ as: e = "div", className: t, "aria-hidden": n = !0, "data-slot": r, ...i }, a) {
	return d(e, {
		...i,
		ref: a,
		"aria-hidden": n,
		"data-slot": r ?? "skeleton",
		className: Q(dd, t)
	});
});
fd.displayName = "Skeleton";
//#endregion
//#region ../ui/src/lib/NumberInput.tsx
var pd = (e) => {
	if (e == null || e === "" || Array.isArray(e)) return;
	let t = typeof e == "number" ? e : Number(e);
	return Number.isNaN(t) ? void 0 : t;
}, md = 1, hd = (e) => {
	if (!(e == null || e === "" || e === "any")) {
		if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
		if (typeof e == "string") {
			let t = Number(e);
			return Number.isFinite(t) ? t : void 0;
		}
	}
}, gd = (e) => {
	if (e == null) return 0;
	let t = "";
	if (typeof e == "number" ? t = e.toString() : typeof e == "string" && (t = e), !t) return 0;
	let n = t.trim().match(Vc);
	if (!n) return 0;
	let r = n[1], i = n[2];
	return (r ? r.length : 0) + (i ? Number(i) : 0);
}, _d = (e, t, n) => {
	let r = e;
	return t !== void 0 && r < t && (r = t), n !== void 0 && r > n && (r = n), r;
}, vd = (e, t) => {
	if (!Number.isFinite(e) || t <= 0) return e;
	let n = 10 ** t;
	return Math.round(e * n) / n;
}, yd = (e, t) => Number.isFinite(e) ? t <= 0 ? e.toString() : vd(e, t).toFixed(t).replace(Hc, "") : "", bd = ({ currentString: e, direction: t, minValue: n, maxValue: r, stepValue: i }) => {
	let a = pd(e), o = i ?? md, s = Math.max(gd(e), gd(i), gd(n), gd(r)), c = yd(_d(a === void 0 ? t === 1 ? n === void 0 ? o : n : r === void 0 ? -o : r : a + t * o, n, r), s);
	return c === e ? void 0 : c;
}, xd = {
	stepperGroup: ["shrink-0 flex self-stretch flex-row items-center gap-1", "py-1"].join(" "),
	input: { base: Wu },
	mozAppearance: "textfield"
}, Sd = f(function({ inputMode: e, innerRef: t, style: n, className: r, reserveMessageSpace: i, density: a = "default", skeleton: o = !1, ...s }, c) {
	let { label: l, hideLabel: u, helperText: d, error: f, variant: p, containerClassName: m, inputClassName: h, labelClassName: _, messageClassName: v, field: y, meta: b, form: x, onChange: S, onBlur: C, onFocus: T, id: E, name: ee, value: A, defaultValue: j, formattingAdapter: M, validation: N, required: P, inputProps: F, ...I } = s, L = {
		...F,
		...I
	}, R = w(null), z = L.min, B = L.max, V = L.step, H = pd(z), te = pd(B), U = hd(V), W = g((e) => {
		R.current = e, Tl(c, e), Tl(t, e);
	}, [c, t]), G = pd(A ?? j), K = !!L.disabled, ne = !!L.readOnly, re = a === "compact", ie = K || ne || H !== void 0 && G !== void 0 && G <= H, ae = K || ne || te !== void 0 && G !== void 0 && G >= te, oe = (e) => {
		let t = R.current;
		if (!t) return;
		let n = t;
		if (n.disabled || n.readOnly) return;
		let r = n.value, i = bd({
			currentString: r,
			direction: e,
			minValue: H,
			maxValue: te,
			stepValue: U
		});
		if (i !== void 0) {
			zl(t, i), Fl(t);
			try {
				n.focus?.({ preventScroll: !0 });
			} catch {
				n.focus?.();
			}
		}
	}, se = (e) => {
		e.preventDefault();
	}, ce = (e) => {
		e.preventDefault(), e.stopPropagation(), oe(-1);
	}, le = (e) => {
		e.preventDefault(), e.stopPropagation(), oe(1);
	}, ue = re ? "xs" : "sm", de = xd.stepperGroup, fe = Q(xd.input.base, h), q = o ? /* @__PURE__ */ O(fd, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", re ? "h-6 w-6" : "h-8 w-8")
	}) : /* @__PURE__ */ O(mn, {
		type: "button",
		variant: "neutral",
		size: ue,
		iconOnly: !0,
		showTooltip: !1,
		label: "Decrease value",
		"aria-label": "Decrease value",
		leadingIcon: /* @__PURE__ */ O(id, {}),
		onClick: ce,
		onPointerDown: se,
		disabled: ie
	}), pe = o ? /* @__PURE__ */ O(fd, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", re ? "h-6 w-6" : "h-8 w-8")
	}) : /* @__PURE__ */ O(mn, {
		type: "button",
		variant: "neutral",
		size: ue,
		iconOnly: !0,
		showTooltip: !1,
		label: "Increase value",
		"aria-label": "Increase value",
		leadingIcon: /* @__PURE__ */ O(cd, {}),
		onClick: le,
		onPointerDown: se,
		disabled: ae
	});
	return /* @__PURE__ */ O(Tf, {
		ref: W,
		label: l,
		hideLabel: u,
		variant: p,
		helperText: d,
		error: f,
		containerClassName: m,
		labelClassName: _,
		messageClassName: v,
		field: y,
		meta: b,
		form: x,
		onChange: S,
		onBlur: C,
		onFocus: T,
		id: E,
		name: ee,
		value: A,
		defaultValue: j,
		formattingAdapter: M,
		validation: N,
		required: P,
		inputProps: L,
		type: "text",
		inputMode: e ?? "decimal",
		trailingAdornment: /* @__PURE__ */ k(D, { children: [q, pe] }),
		trailingAdornmentClassName: de,
		inputClassName: fe,
		className: Q("gap-1 pr-1 items-center", r),
		density: a,
		skeleton: o,
		style: {
			...n,
			MozAppearance: xd.mozAppearance
		},
		reserveMessageSpace: i
	});
});
Sd.displayName = "NumberInput";
//#endregion
//#region ../ui/src/lib/utils/text.ts
function Cd(e) {
	if (typeof e == "string" || typeof e == "number") return String(e);
}
//#endregion
//#region ../ui/src/lib/FieldLayout.tsx
function wd({ styles: e, tone: t = "light", messageClassName: n, error: r, helper: i, errorClassName: a, helperClassName: o, reserveSpace: s = !0 }) {
	let c = Cd(r), l = Cd(i), u = Q(e.error, t === "dark" ? e.darkErrorTone : void 0, n, a), d = Q(e.helper, t === "dark" ? e.darkHelperTone : void 0, n, o);
	return r ? /* @__PURE__ */ O("span", {
		"data-slot": "field-message",
		className: u,
		title: c,
		children: r
	}) : i ? /* @__PURE__ */ O("span", {
		"data-slot": "field-message",
		className: d,
		title: l,
		children: i
	}) : s ? /* @__PURE__ */ O("span", {
		"data-slot": "field-message",
		className: Q(d, "opacity-0 select-none pointer-events-none"),
		"aria-hidden": "true",
		children: "message placeholder"
	}) : null;
}
function Td({ baseClassName: e, containerClassName: t, belowFieldContent: n, belowFieldContentInheritsTheme: r = !0, children: i, style: a, dataTheme: o, ...s }) {
	let c = Q(e, t), { styles: l, tone: u, messageClassName: d, error: f, helper: p, errorClassName: m, helperClassName: h, reserveSpace: g } = s, _ = n == null ? null : /* @__PURE__ */ O("div", {
		"data-slot": "field-below-content",
		className: "mt-4",
		children: n
	}), v = g !== !1 || f || p ? /* @__PURE__ */ O(wd, {
		styles: l,
		tone: u,
		messageClassName: d,
		error: f,
		helper: p,
		errorClassName: m,
		helperClassName: h,
		reserveSpace: g
	}) : null;
	return r ? /* @__PURE__ */ k("div", {
		className: c,
		style: a,
		"data-theme": o,
		children: [
			i,
			_,
			v
		]
	}) : /* @__PURE__ */ k("div", {
		className: c,
		style: a,
		children: [
			/* @__PURE__ */ O("div", {
				"data-theme": o,
				children: i
			}),
			_,
			v && /* @__PURE__ */ O("div", {
				"data-theme": o,
				children: v
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/formSkeletons.tsx
function Ed({ showLabel: e, labelClassName: t, compact: n = !1, widthClassName: r }) {
	return e ? /* @__PURE__ */ O("span", {
		"aria-hidden": "true",
		className: t,
		"data-slot": "field-skeleton-label",
		children: /* @__PURE__ */ O(fd, {
			as: "span",
			className: Q("block rounded-full", n ? "h-2.5 w-16" : "h-3 w-20", r)
		})
	}) : null;
}
function Dd({ compact: e = !1, helper: t, error: n, reserveSpace: r = !0, widthClassName: i }) {
	if (!(!t && !n && !r)) return /* @__PURE__ */ O(fd, {
		as: "span",
		"data-slot": "field-skeleton-message",
		className: Q("block rounded-full", e ? "h-2.5 w-24" : "h-3 w-28", i)
	});
}
//#endregion
//#region ../ui/src/lib/formTheme.ts
var Od = ({ variant: e, hasError: t = !1 }) => {
	let n = t ? "danger" : e;
	return {
		variant: n,
		dataTheme: dn(n)
	};
}, kd = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => kd(e)).join(" ") : p(e) ? kd(e.props.children ?? "") : "", Ad = (e) => e.trim().toLowerCase(), jd = (e, t) => e ? t.map((e) => kd(e)).filter(Boolean).join(" ").toLowerCase().includes(e) : !0, Md = (e, t, n) => t ? e.filter((e) => jd(t, n(e))) : [...e], Nd = (e, t, n, r) => e.findIndex((e) => r(e) && jd(t, n(e))), Pd = (e, t) => typeof e == "string" && e.length > 0 ? `Search ${e}` : t, Fd = 8, Id = {
	container: Eu.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: Fu,
		wrapperSpacingCompact: Iu,
		wrapperHiddenSpacing: Lu,
		wrapperHiddenSpacingCompact: Ru,
		selectSpacing: ju.spacing.select,
		hiddenSelectSpacing: ju.spacing.hiddenSelect,
		selectSpacingCompact: ju.spacing.selectCompact,
		hiddenSelectSpacingCompact: ju.spacing.hiddenSelectCompact
	},
	label: {
		base: `${zu} select-none`,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]",
		tone: {
			active: "text-[var(--pc-color-text-muted)]",
			inactive: "text-[var(--pc-color-text-muted)]",
			error: "text-[var(--pc-color-text-muted)]",
			disabled: "text-[var(--pc-color-border)]"
		}
	},
	wrapper: {
		base: `${Mu} group cursor-pointer`,
		gap: Au,
		frame: Pu,
		neutral: [
			"border-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		raised: [
			"border-[var(--pc-color-depth-5)]",
			"outline-[var(--pc-color-depth-5)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		error: [
			"border-[var(--pc-color-border)]",
			"outline-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" ")
	},
	control: {
		base: [
			Bu,
			"flex items-center text-left",
			"cursor-pointer",
			"text-[var(--pc-color-text)]",
			"disabled:text-[var(--pc-color-border)]"
		].join(" "),
		disabled: "cursor-not-allowed",
		display: "block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap"
	},
	nativeSelect: {
		base: [
			Bu,
			"appearance-none cursor-pointer",
			"text-[var(--pc-color-text)]",
			"disabled:text-[var(--pc-color-border)]"
		].join(" "),
		multiple: [
			"appearance-auto",
			"cursor-default",
			"min-h-32"
		].join(" "),
		option: ["[&>option]:bg-[var(--pc-color-surface)]", "[&>option]:text-[var(--pc-color-text)]"].join(" "),
		hidden: "sr-only"
	},
	adornment: {
		base: Ou.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	dropdown: {
		content: "flex flex-col",
		list: "overflow-y-auto py-1",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]",
		optionSelectedIcon: "shrink-0 text-[var(--pc-color-text)]"
	},
	message: {
		error: Du.error,
		helper: Du.helper
	},
	inner: ku
}, Ld = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? String(e) : null, Rd = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.map(Ld).filter((e) => e !== null).filter((e) => e.length > 0);
	let t = Ld(e);
	return t === null || t.length === 0 ? [] : [t];
}, zd = (e) => {
	if (e == null) return;
	if (Array.isArray(e)) {
		let [t] = e;
		if (t === void 0) return;
		let n = Ld(t);
		return n === null ? void 0 : n;
	}
	let t = Ld(e);
	return t === null ? void 0 : t;
}, Bd = (e) => {
	let t = [], n = !0, r = (e) => {
		if (e == null || typeof e == "boolean") return;
		if (Array.isArray(e)) {
			e.forEach(r);
			return;
		}
		if (typeof e == "string") {
			if (e.trim().length === 0) return;
			n = !1;
			return;
		}
		if (typeof e == "number") {
			n = !1;
			return;
		}
		if (!p(e)) {
			n = !1;
			return;
		}
		if (e.type === c) {
			let t = e.props;
			r(t.children);
			return;
		}
		if (e.type !== "option") {
			n = !1;
			return;
		}
		let i = e.props;
		t.push({
			value: Ld(i.value) ?? "",
			label: i.children ?? "",
			disabled: !!i.disabled
		});
	};
	return r(e), {
		options: t,
		supportsCustomSingle: n
	};
}, Vd = (e, t = e.value) => {
	let n = {
		id: e.id,
		name: e.name,
		value: t,
		multiple: e.multiple,
		selectedOptions: e.selectedOptions
	};
	return {
		target: n,
		currentTarget: n,
		type: "change",
		timeStamp: Date.now(),
		bubbles: !0,
		cancelable: !0,
		defaultPrevented: !1,
		eventPhase: 3,
		isTrusted: !1,
		nativeEvent: typeof Event == "function" ? new Event("change", { bubbles: !0 }) : void 0,
		preventDefault: () => void 0,
		isDefaultPrevented: () => !1,
		stopPropagation: () => void 0,
		isPropagationStopped: () => !1,
		persist: () => void 0
	};
}, Hd = (e) => ({
	target: e,
	currentTarget: e,
	type: "blur",
	timeStamp: Date.now(),
	bubbles: !1,
	cancelable: !1,
	defaultPrevented: !1,
	eventPhase: 3,
	isTrusted: !1,
	nativeEvent: typeof FocusEvent == "function" ? new FocusEvent("blur") : void 0,
	relatedTarget: typeof document == "object" ? document.activeElement : null,
	preventDefault: () => void 0,
	isDefaultPrevented: () => !1,
	stopPropagation: () => void 0,
	isPropagationStopped: () => !1,
	persist: () => void 0
}), Ud = f(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, containerClassName: s, className: c, selectClassName: l, labelClassName: u, messageClassName: d, field: f, meta: p, form: m, innerRef: h, onChange: _, onBlur: b, validation: x, required: C, id: E, name: ee, value: A, defaultValue: j, leadingAdornment: M, trailingAdornment: N, leadingAdornmentClassName: P, trailingAdornmentClassName: F, children: I, density: L = "default", reserveMessageSpace: R, skeleton: z = !1, searchable: B = "auto", searchThreshold: V = Fd, searchPlaceholder: H = "Search options", noMatchesMessage: te = "No options match your search.", optionLeadingIconByValue: U, ...W }, G) {
	let [K, ne] = T(), { inputId: re, resolvedName: ie, handleChange: ae, handleBlur: oe, hasValue: se, errorContent: ce, helperContent: le, sharedProps: ue, mergedRef: de, resolvedValue: fe } = jl({
		forwardedRef: G,
		field: f,
		meta: p,
		form: m,
		innerRef: h,
		id: E,
		name: ee,
		value: A,
		defaultValue: j,
		explicitError: o ?? K,
		helperText: r,
		onChange: _,
		onBlur: b
	}), q = !!W.multiple, { dataTheme: pe } = Od({
		variant: e,
		hasError: !z && !!ce
	}), me = g((e) => {
		ne(e);
	}, []), J = Object.prototype.hasOwnProperty.call(ue, "value"), he = Object.prototype.hasOwnProperty.call(ue, "defaultValue"), ge = J ? ue.value : void 0, _e = he ? ue.defaultValue : j, { options: ve, supportsCustomSingle: ye } = S(() => Bd(I), [I]), be = y(), xe = re ?? be, Se = `${xe}-label`, Ce = `${xe}-listbox`, we = `${xe}-native`, Te = S(() => zd(ge), [ge]), Ee = S(() => zd(_e), [_e]), De = S(() => Rd(_e), [_e]), Y = S(() => Rd(ge), [ge]), Oe = ve[0]?.value ?? "", ke = J ? Te ?? Oe : Ee ?? Oe, [Ae, je] = T(() => J ? Y : De), [Me, Ne] = T(() => ke), [Pe, Fe] = T(!1), [Ie, Le] = T(-1), [Re, ze] = T(""), Be = J ? Te ?? Oe : Me, Ve = Y;
	J || (Ve = q ? Ae : Rd(Be));
	let He = g((e) => e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : e.currentTarget.value, []), Ue = g((e) => q && Array.isArray(e) ? e.join(",") : e, [q]), We;
	We = q ? J ? fe : Ae : Be;
	let { onChange: Ge, onBlur: Ke, normalizedValidation: qe } = Ml({
		value: We,
		required: C,
		validation: x,
		metaTouched: p?.touched,
		submitCount: m?.submitCount,
		resolvedName: ie,
		setFieldError: m?.setFieldError,
		handleChange: ae,
		handleBlur: oe,
		setManagedError: me,
		getValueFromChangeEvent: He,
		normalizeValue: Ue
	}), Je = w(null), Ye = w(null), Xe = w(null), Ze = w(null), X = g((e) => {
		Je.current = e, de(e);
	}, [de]), Qe = g((e) => {
		Xe.current = e;
	}, []), $e = q || typeof W.size == "number" && W.size > 1 || !ye, et = Math.max(0, V), tt = !$e && (B === !0 || B !== !1 && ve.length >= et), nt = tt ? Ad(Re) : "", rt = S(() => ve.map((e, t) => ({
		option: e,
		index: t
	})), [ve]), it = S(() => Md(rt, nt, ({ option: e }) => [e.value, e.label]), [rt, nt]), Z = S(() => tt ? it : rt, [
		it,
		rt,
		tt
	]), at = g(() => {
		let e = Je.current;
		if (!e) return;
		let t = e;
		if (t.focus?.(), !e.multiple) {
			try {
				t.showPicker?.();
				return;
			} catch {}
			t.click?.();
		}
	}, []), { hideLabel: ot } = Vl(), st = t ?? ie ?? "", ct = Cd(st), lt = n ?? ot ?? !1, ut = !lt && !(typeof t == "string" && t.length === 0), dt = L === "compact", ft = Hr({
		hideLabel: lt,
		isCompact: dt,
		withLabelDefaultClassName: Id.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: Id.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: Id.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: Id.layout.wrapperHiddenSpacingCompact
	}), pt = (() => {
		let e = W["aria-label"] ?? ue["aria-label"];
		return typeof e == "string" ? e : void 0;
	})(), mt = (() => {
		let e = W["aria-labelledby"] ?? ue["aria-labelledby"];
		return typeof e == "string" && e.trim().length > 0 ? e.trim() : void 0;
	})(), ht = lt && typeof st == "string" && st.length > 0 && mt === void 0 ? pt ?? st : pt, gt = ve.find((e) => e.value === Be) ?? (ve.length > 0 ? ve[0] : null), _t = gt === null ? "" : gt.label, vt = Cd(_t), yt = S(() => ve.flatMap((e, t) => e.disabled ? [] : [t]), [ve]), bt = S(() => Z.flatMap(({ option: e, index: t }) => e.disabled ? [] : [t]), [Z]), xt = () => {
		let e = ve.findIndex((e) => e.value === Be && !e.disabled);
		return e >= 0 ? e : yt[0] ?? -1;
	}, St = (e) => {
		let t = Ad(e);
		return t ? Nd(ve, t, (e) => [e.value, e.label], (e) => !e.disabled) : xt();
	}, Ct = (e) => {
		bt.length !== 0 && Le((t) => {
			let n = bt.indexOf(t);
			return n === -1 ? e === 1 ? bt[0] : bt[bt.length - 1] : bt[(n + e + bt.length) % bt.length];
		});
	};
	v(() => {
		if (!Pe || !tt) return;
		let e = window.requestAnimationFrame(() => {
			Ze.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [Pe, tt]);
	let wt = () => {
		Fe(!1), ze("");
	}, Tt = () => {
		$e || W.disabled || (ze(""), Le(xt()), Fe(!0));
	}, Et = (e) => {
		if (e.disabled) return;
		let t = Je.current;
		t && (J || Ne(e.value), zl(t, e.value), Ge(Vd(t, e.value)), Le(ve.findIndex((t) => t.value === e.value)), Fe(!1), window.requestAnimationFrame(() => {
			Xe.current?.focus();
		}));
	}, Dt = (e) => {
		if (W.disabled) return;
		if ($e) {
			let t = Je.current;
			if (!t) return;
			let n = e.target;
			if (n && t.contains(n)) return;
			e.preventDefault(), at();
			return;
		}
		let t = Xe.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), Pe || Tt());
	}, Ot = g((e) => {
		let t = e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : [e.currentTarget.value];
		J || (je(t), e.currentTarget.multiple || Ne(e.currentTarget.value)), Ge(e);
	}, [J, Ge]), kt = (e) => {
		switch (e.key) {
			case "ArrowDown":
				if (e.preventDefault(), !Pe) {
					Tt();
					return;
				}
				Ct(1);
				return;
			case "ArrowUp":
				if (e.preventDefault(), !Pe) {
					Tt();
					return;
				}
				Ct(-1);
				return;
			case "Home":
				if (!Pe || bt.length === 0) return;
				e.preventDefault(), Le(bt[0]);
				return;
			case "End":
				if (!Pe || bt.length === 0) return;
				e.preventDefault(), Le(bt[bt.length - 1]);
				return;
			case "Enter":
			case " ":
				if (e.preventDefault(), !Pe) {
					Tt();
					return;
				}
				Ie >= 0 && Et(ve[Ie]);
				return;
			case "Escape":
				if (!Pe) return;
				e.preventDefault(), wt();
				return;
			default: return;
		}
	}, At = (e) => {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault(), Ct(1);
				return;
			case "ArrowUp":
				e.preventDefault(), Ct(-1);
				return;
			case "Enter":
				e.preventDefault(), bt.length > 0 && Et(ve[bt[0]]);
				return;
			case "Escape":
				e.preventDefault(), wt(), window.requestAnimationFrame(() => {
					Xe.current?.focus();
				});
				return;
			default: return;
		}
	}, jt = () => {
		window.requestAnimationFrame(() => {
			let e = Ye.current?.ownerDocument ?? (typeof document == "object" ? document : null), t = e?.activeElement ?? null, n = e?.getElementById(Ce) ?? null;
			if (t instanceof Node && (Ye.current?.contains(t) || n?.contains(t))) return;
			wt();
			let r = Je.current;
			r && Ke(Hd(r));
		});
	}, Mt = g((e, t) => e.length === t.length ? e.every((e, n) => e === t[n]) : !1, [])(Ve, De), Nt = J || he || Dl(ge) || Dl(_e), Pt = !q && !J && !he && ve.length > 0, Ft = (q ? se || Nt : se || Nt || Dl(Be) || Pt) || q, It = Ft && !Mt, Lt = Q(dt ? "text-xs" : void 0, d), Rt = !!W.disabled, zt = Rt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, Bt = M ? "left-0" : dt ? Id.layout.compactLabelOffset : Id.layout.labelOffset, Vt = ce ? Id.wrapper.error : It ? Id.wrapper.raised : Id.wrapper.neutral, Ht = ce ? void 0 : Id.label.focusToneRaised, Ut = Br({
		hasError: !!ce,
		isRaised: Ft,
		isActiveTone: !Mt && Ft,
		isDisabled: Rt,
		tones: Id.label.tone
	}), Wt = Vr({
		baseClassName: Id.label.base,
		horizontalClassName: Bt,
		labelClassName: u,
		isCompact: dt,
		isRaised: Ft,
		toneClassName: Ut,
		focusToneClassName: Ht
	}), Gt = Vr({
		baseClassName: Id.label.base,
		horizontalClassName: Bt,
		labelClassName: u,
		isCompact: dt,
		isRaised: !0,
		toneClassName: Ut,
		focusToneClassName: Ht
	}), Kt = Hr({
		hideLabel: lt,
		isCompact: dt,
		withLabelDefaultClassName: Id.layout.selectSpacing,
		hiddenLabelDefaultClassName: Id.layout.hiddenSelectSpacing,
		withLabelCompactClassName: Id.layout.selectSpacingCompact,
		hiddenLabelCompactClassName: Id.layout.hiddenSelectSpacingCompact
	}), qt = Q(Id.control.base, dt ? "min-h-[3rem]" : "min-h-[3.25rem]", Kt, Rt ? Id.control.disabled : void 0, l), Jt = Q(Id.nativeSelect.base, dt ? "min-h-[3rem]" : "min-h-[3.25rem]", Kt, q && Id.nativeSelect.multiple, Id.nativeSelect.option, l), Yt = Q(Id.wrapper.base, M || N || !q ? Id.wrapper.gap : void 0, Id.wrapper.frame, ft, Vt, zt, c), Xt = Q(Id.adornment.base, Rt ? Id.adornment.disabled : void 0, P), Zt = N ?? (q ? null : /* @__PURE__ */ O("svg", {
		"aria-hidden": "true",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: Wr({ isOpen: !$e && Pe }),
		children: /* @__PURE__ */ O("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	})), Qt = Q(Id.adornment.base, Ut, F), $t = le !== void 0 || ce !== void 0, en = $t ? !1 : R !== !1;
	if (z) {
		let e = $t ? /* @__PURE__ */ O(Dd, {
			compact: dt,
			helper: le,
			error: ce,
			reserveSpace: !1
		}) : void 0;
		return /* @__PURE__ */ O(Td, {
			baseClassName: Id.container,
			containerClassName: s,
			dataTheme: pe,
			styles: Id.message,
			messageClassName: Lt,
			helper: e,
			reserveSpace: en,
			children: /* @__PURE__ */ k("div", {
				className: Yt,
				"data-skeleton": "true",
				"data-slot": "select-skeleton-shell",
				children: [
					M && /* @__PURE__ */ O("div", {
						className: Xt,
						children: /* @__PURE__ */ O(fd, { className: "h-4 w-4 rounded-full" })
					}),
					/* @__PURE__ */ k("div", {
						className: Id.inner,
						children: [/* @__PURE__ */ O("div", {
							"aria-hidden": "true",
							className: Q(qt, "flex items-center text-transparent select-none"),
							children: /* @__PURE__ */ O(fd, { className: "h-3.5 w-3/5 rounded-full" })
						}), /* @__PURE__ */ O(Ed, {
							showLabel: ut,
							labelClassName: Gt,
							compact: dt
						})]
					}),
					Zt && /* @__PURE__ */ O("div", {
						className: Qt,
						children: /* @__PURE__ */ O(fd, { className: "h-4 w-4 rounded-full" })
					})
				]
			})
		});
	}
	let tn = qe?.required?.value ?? C, nn = {
		...W,
		...ue,
		id: xe,
		ref: X,
		className: Jt
	};
	ht === void 0 ? mt === void 0 ? ut && (nn["aria-labelledby"] = Se) : nn["aria-labelledby"] = mt : nn["aria-label"] = ht, nn.onChange = Ot, nn.onBlur = Ke, tn && (nn.required = !0, nn["aria-required"] = !0), q ? J ? nn.value = Ve : nn.defaultValue = Ve : J ? nn.value = Be : nn.defaultValue = Be;
	let rn = {
		...W,
		id: we,
		name: ie,
		className: Id.nativeSelect.hidden,
		tabIndex: -1,
		disabled: Rt,
		required: tn,
		value: Be,
		onChange: () => void 0
	};
	rn["aria-hidden"] = !0;
	let an = (() => {
		if (ht === void 0) return ut ? Se : mt;
	})(), on = Z.length > 0 ? Z.map(({ option: e, index: t }) => {
		let n = e.value === Be;
		return /* @__PURE__ */ O(Yr, {
			role: "option",
			ariaSelected: n,
			selected: n,
			highlighted: t === Ie,
			disabled: e.disabled,
			label: e.label,
			leading: U?.[e.value],
			trailing: n ? /* @__PURE__ */ O("span", {
				className: Id.dropdown.optionSelectedIcon,
				children: /* @__PURE__ */ O(qu, {})
			}) : void 0,
			onMouseEnter: () => {
				Le(t);
			},
			onClick: () => {
				Et(e);
			}
		}, `${e.value}-${String(t)}`);
	}) : tt && nt ? /* @__PURE__ */ O("div", {
		className: Id.dropdown.empty,
		children: te
	}) : /* @__PURE__ */ O("div", {
		className: Id.dropdown.empty,
		children: "No options are available."
	});
	return /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O(Td, {
		baseClassName: Id.container,
		containerClassName: s,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: pe,
		styles: Id.message,
		messageClassName: Lt,
		error: ce,
		helper: le,
		reserveSpace: R !== !1,
		children: /* @__PURE__ */ k("div", {
			ref: Ye,
			className: Yt,
			onMouseDown: Dt,
			"data-slot": "select-shell",
			children: [
				M && /* @__PURE__ */ O("div", {
					className: Xt,
					children: M
				}),
				/* @__PURE__ */ k("div", {
					className: Id.inner,
					children: [$e ? /* @__PURE__ */ O("select", {
						...nn,
						children: I
					}) : /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O("select", {
						ref: X,
						...rn,
						children: I
					}), /* @__PURE__ */ O("button", {
						id: xe,
						ref: Qe,
						type: "button",
						role: "combobox",
						"aria-expanded": Pe,
						"aria-controls": Ce,
						"aria-haspopup": "listbox",
						"aria-invalid": ce ? !0 : void 0,
						"aria-required": tn ? !0 : void 0,
						"aria-label": ht,
						"aria-labelledby": an,
						disabled: Rt,
						autoFocus: W.autoFocus,
						className: qt,
						onClick: () => {
							if (Pe) {
								wt();
								return;
							}
							Tt();
						},
						onKeyDown: kt,
						onBlur: jt,
						children: /* @__PURE__ */ O("span", {
							className: Id.control.display,
							title: vt,
							children: _t
						})
					})] }), ut && /* @__PURE__ */ O("span", {
						id: Se,
						className: Wt,
						title: ct,
						children: st
					})]
				}),
				Zt && /* @__PURE__ */ O("div", {
					className: Qt,
					children: Zt
				})
			]
		})
	}), !$e && /* @__PURE__ */ O(hi, {
		id: Ce,
		anchorRef: Ye,
		isOpen: Pe,
		onRequestClose: wt,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: "listbox",
		labelledBy: ut ? Se : void 0,
		renderContent: () => /* @__PURE__ */ k("div", {
			className: Id.dropdown.content,
			children: [tt && /* @__PURE__ */ O(vi, {
				ref: Ze,
				value: Re,
				onChange: (e) => {
					ze(e), Le(St(e));
				},
				onKeyDown: At,
				placeholder: H,
				ariaLabel: Pd(st, "Search options")
			}), /* @__PURE__ */ O("div", {
				className: Id.dropdown.list,
				children: on
			})]
		})
	})] });
});
Ud.displayName = "Select";
//#endregion
//#region ../ui/src/lib/Input.tsx
var Wd = (e) => e == null ? "" : Array.isArray(e) ? e.join(",") : String(e), Gd = (e, t) => Number.isNaN(e) ? t : e <= 0 ? 0 : e >= t ? t : e, Kd = (e, t, n) => {
	if (!t) return 0;
	let r = Gd(n, t.length);
	return r <= 0 ? 0 : e.parseUserInput(t.slice(0, r)).length;
}, qd = (e, t, n) => {
	if (n <= 0) return 0;
	if (n >= e.parseUserInput(t).length) return t.length;
	for (let r = 0; r <= t.length; r += 1) if (e.parseUserInput(t.slice(0, r)).length >= n) return r;
	return t.length;
}, Jd = new Set([
	"date",
	"datetime-local",
	"month",
	"time",
	"week"
]), Yd = (e) => typeof e == "string" ? Jd.has(e) : !1, Xd = "00:00", Zd = (e) => {
	if (!e) return {
		date: "",
		time: Xd
	};
	let [t, n] = e.split("T");
	return {
		date: t,
		time: n ? n.slice(0, 5) : Xd
	};
}, Qd = (e, t) => e ? `${e}T${t || Xd}` : "", $d = 1970, ef = 2125, tf = new Date($d, 0, 1), nf = new Date(ef, 11, 31), rf = tf, af = new Date(ef, 11, 1), of = new Intl.DateTimeFormat("en-GB", { month: "long" }), sf = Array.from({ length: 12 }, (e, t) => of.format(new Date(2e3, t, 1))), cf = Array.from({ length: ef - $d + 1 }, (e, t) => $d + t), lf = {
	root: "space-y-2 text-[var(--pc-color-text)]",
	months: "flex flex-col gap-2",
	month: "space-y-1.5",
	month_grid: "w-full border-collapse text-[13px]",
	weekdays: "text-[0.6rem] font-semibold uppercase tracking-wide text-[var(--pc-color-text-muted)]",
	weekday: "text-center",
	weeks: "text-xs",
	week: "",
	day: "p-0.5 text-center",
	day_button: "",
	caption_label: "sr-only",
	dropdowns: "hidden",
	dropdown: "hidden",
	dropdown_root: "hidden",
	nav: "hidden",
	footer: "text-xs text-[var(--pc-color-text-muted)]"
}, uf = (e) => new Date(e.getFullYear(), e.getMonth(), 1), df = (e) => {
	let t = uf(e);
	return t < rf ? uf(rf) : t > af ? uf(af) : t;
}, ff = (e) => {
	if (!e) return;
	let [t, n, r] = e.split("-"), i = Number.parseInt(t, 10), a = Number.parseInt(n, 10), o = Number.parseInt(r, 10);
	if (!(Number.isNaN(i) || Number.isNaN(a) || Number.isNaN(o))) return new Date(i, a - 1, o, 12);
}, pf = (e) => df(ff(e) || /* @__PURE__ */ new Date()), mf = (e) => `${e.getFullYear().toString().padStart(4, "0")}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`, hf = (e) => `${e.getHours().toString().padStart(2, "0")}:${e.getMinutes().toString().padStart(2, "0")}`, gf = (e, t) => {
	let n = Number.parseInt(e, 10);
	return Number.isNaN(n) ? "00" : Math.min(Math.max(n, 0), t).toString().padStart(2, "0");
}, _f = (e) => {
	let [t = "00", n = "00"] = (e || Xd).split(":");
	return {
		hours: gf(t, 23),
		minutes: gf(n, 59)
	};
}, vf = (e, t) => `${e}:${t}`, yf = ({ className: e, modifiers: t, disabled: n, ...r }) => {
	let { children: i, ...a } = r, o = t.selected, s = t.outside, c = t.today, l = !!(t.disabled || n);
	return /* @__PURE__ */ O("button", {
		...a,
		type: "button",
		disabled: l,
		"data-theme": dn(o ? "secondary" : "neutral"),
		"data-disabled": an(l),
		className: Q(Xt, Vt.md, en(o ? "solid" : "outline"), "h-8 w-8 rounded-[var(--pc-radius-full)] border-0 text-xs font-semibold transition-none", o ? "text-[var(--pc-color-text)]" : "text-[var(--pc-color-text-muted)] focus-visible:ring-[var(--pc-color-border)]", c && !o && "text-[var(--pc-color-text)]", s && "opacity-50", e),
		children: i
	});
}, bf = (e, t, n, r) => {
	let i = t.length, a = r.start ?? r.end ?? i, o = r.end ?? r.start ?? i, s = Math.min(a, o), c = Math.max(a, o), l = Kd(e, t, s), u = Kd(e, t, c);
	return {
		start: qd(e, n, l),
		end: qd(e, n, u)
	};
}, xf = (e) => !!e && typeof e == "object" && ("start" in e || "end" in e), Sf = (e, t) => {
	if (xf(e)) return {
		start: Gd(e.start ?? t, t),
		end: Gd(e.end ?? t, t)
	};
	let n = Gd(typeof e == "number" ? e : t, t);
	return {
		start: n,
		end: n
	};
}, Cf = (e, t) => {
	try {
		let n = t.start ?? t.end ?? null, r = t.end ?? t.start ?? null;
		e.setSelectionRange(n, r);
	} catch {}
}, wf = {
	container: Eu.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		textareaLabelOffset: "left-0",
		wrapperSpacing: Fu,
		wrapperSpacingCompact: Iu,
		wrapperHiddenSpacing: Lu,
		wrapperHiddenSpacingCompact: Ru,
		inputSpacing: ju.spacing.default,
		hiddenInputSpacing: ju.spacing.hiddenDefault,
		textareaSpacing: ju.spacing.textarea,
		hiddenTextareaSpacing: ju.spacing.hiddenTextarea,
		compactInputSpacing: ju.spacing.compact,
		hiddenCompactInputSpacing: ju.spacing.hiddenCompact,
		compactTextareaSpacing: ju.spacing.compact,
		hiddenCompactTextareaSpacing: ju.spacing.hiddenCompact
	},
	label: {
		base: zu,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]"
	},
	labelState: { tone: {
		active: "text-[var(--pc-color-text-muted)]",
		inactive: "text-[var(--pc-color-text-muted)]",
		error: "text-[var(--pc-color-text-muted)]",
		disabled: "text-[var(--pc-color-border)]"
	} },
	input: { base: `${Bu} placeholder:text-[var(--pc-color-depth-5)] disabled:text-[var(--pc-color-border)] disabled:placeholder:text-[var(--pc-color-border)]` },
	textarea: {
		base: `${Vu} placeholder:text-[var(--pc-color-depth-5)] disabled:text-[var(--pc-color-border)] disabled:placeholder:text-[var(--pc-color-border)]`,
		disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
	},
	wrapper: {
		base: Pu,
		text: Mu,
		textarea: Nu,
		neutral: [
			"border-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		raised: [
			"border-[var(--pc-color-depth-5)]",
			"outline-[var(--pc-color-depth-5)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		error: [
			"border-[var(--pc-color-border)]",
			"outline-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" ")
	},
	adornment: {
		base: Ou.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	message: {
		error: Du.error,
		helper: Du.helper,
		darkErrorTone: Eu.message.darkErrorTone,
		darkHelperTone: Eu.message.darkHelperTone
	},
	inner: ku,
	gapWithAdornment: Au
}, Tf = f(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, containerClassName: s, className: c, inputClassName: l, labelClassName: u, messageClassName: d, field: f, meta: p, form: m, innerRef: h, as: _, type: y, onChange: b, onBlur: C, onFocus: E, id: D, name: A, value: j, defaultValue: M, leadingAdornment: N, trailingAdornment: P, leadingAdornmentClassName: F, trailingAdornmentClassName: I, validation: L, required: R, density: z = "default", reserveMessageSpace: B, skeleton: V = !1, formattingAdapter: H, inputProps: te, ...U }, W) {
	let [G, K] = T(), { inputId: ne, resolvedName: re, handleChange: ie, handleBlur: ae, hasValue: oe, errorContent: se, helperContent: ce, sharedProps: le, resolvedValue: ue } = jl({
		forwardedRef: W,
		field: f,
		meta: p,
		form: m,
		innerRef: h,
		id: D,
		name: A,
		value: j,
		defaultValue: M,
		explicitError: o ?? G,
		helperText: r,
		onChange: b,
		onBlur: C
	}), de = z === "compact", fe = Q(de ? "text-xs" : void 0, d), q = _ === "textarea" || y === "textarea", pe = typeof y == "string" ? y.toLowerCase() : y, { dataTheme: me } = Od({
		variant: e,
		hasError: !V && !!se
	}), J = !q && pe === "datetime-local", he = !q && pe === "search", ge = !q, _e = m?.setFieldValue, ve = g((e) => ge && typeof e == "boolean" ? String(e) : e, [ge]), ye = S(() => ({
		...te,
		...U
	}), [te, U]), be = S(() => {
		if (!ge) return le;
		let e = { ...le };
		return "value" in e && (e.value = ve(e.value)), "defaultValue" in e && (e.defaultValue = ve(e.defaultValue)), e;
	}, [
		ve,
		le,
		ge
	]), xe = w(null), Se = w(null), Ce = w(null), { ref: we, ...Te } = be, Ee = Object.prototype.hasOwnProperty.call(Te, "value"), De = Object.prototype.hasOwnProperty.call(Te, "defaultValue"), Y = Ee ? Te.value : void 0, Oe = De ? Te.defaultValue : void 0, ke = Ee, Ae = S(() => Zd(typeof Y == "string" && Y || typeof Oe == "string" && Oe || (typeof M == "string" ? M : void 0)), [
		M,
		Oe,
		Y
	]), [je, Me] = T(oe ? !0 : Ee ? Dl(Y) : De ? Dl(Oe) : M === void 0 ? !1 : Dl(M)), [Ne, Pe] = T(!1), [Fe, Ie] = T(Ae.date), [Le, Re] = T(Ae.time), [ze, Be] = T(null), [Ve, He] = T(() => pf(Ae.date)), Ue = g((e) => {
		He((t) => df(typeof e == "function" ? e(t) : e));
	}, []), We = ke ? oe : je, Ge = g((e) => {
		let t = e.currentTarget;
		if (t instanceof HTMLInputElement) return t.type === "checkbox" ? t.checked : t.value;
		if (t instanceof HTMLTextAreaElement) return t.value;
	}, []), Ke = g((e) => {
		K(e);
	}, [K]), { onChange: qe, onBlur: Je, normalizedValidation: Ye } = Ml({
		value: ue,
		required: R,
		validation: L,
		metaTouched: p?.touched,
		submitCount: m?.submitCount,
		resolvedName: re,
		setFieldError: m?.setFieldError,
		handleChange: ie,
		handleBlur: ae,
		setManagedError: Ke,
		getValueFromChangeEvent: Ge,
		normalizeValue: ve
	}), Xe = (e) => {
		if (!ke) {
			let t = e.currentTarget;
			t instanceof HTMLInputElement ? t.type === "checkbox" ? Me(t.checked) : Me(t.value.length > 0) : t instanceof HTMLTextAreaElement && Me(t.value.length > 0);
		}
		qe(e);
	};
	v(() => {
		!ge || !_e || !re || typeof ue != "boolean" || _e(re, String(ue), !1);
	}, [
		re,
		ue,
		_e,
		ge
	]);
	let { hideLabel: Ze } = Vl(), X = t ?? re ?? "", Qe = Cd(X), $e = n ?? Ze ?? !1, et = !$e && !(typeof t == "string" && t.length === 0), tt = Hr({
		hideLabel: $e,
		isCompact: de,
		withLabelDefaultClassName: wf.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: wf.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: wf.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: wf.layout.wrapperHiddenSpacingCompact
	}), nt = !!N, rt = !!P, it = q ? de ? wf.layout.compactLabelOffset : wf.layout.textareaLabelOffset : nt ? "left-0" : de ? wf.layout.compactLabelOffset : wf.layout.labelOffset, Z = ye.placeholder, at = typeof Z == "string" && Z.length > 0, ot = !q && Yd(pe), st = We || at || ot, ct = q || st, lt = !!(ye.disabled || ye.readOnly), ut = lt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, dt = We, ft = Br({
		hasError: !!se,
		isRaised: st,
		isActiveTone: We,
		isDisabled: lt,
		tones: wf.labelState.tone
	}), pt = se ? wf.wrapper.error : dt ? wf.wrapper.raised : wf.wrapper.neutral, mt = se ? void 0 : wf.label.focusToneRaised, ht = Vr({
		baseClassName: wf.label.base,
		horizontalClassName: it,
		labelClassName: u,
		isCompact: de,
		isRaised: ct,
		toneClassName: ft,
		focusToneClassName: mt
	}), gt = Vr({
		baseClassName: wf.label.base,
		horizontalClassName: it,
		labelClassName: u,
		isCompact: de,
		isRaised: !0,
		toneClassName: ft,
		focusToneClassName: mt
	}), _t = g(() => {
		if (!J) return;
		let e = xe.current;
		if (!(e instanceof HTMLInputElement)) {
			let e = Zd(void 0);
			Ie(e.date), Re(e.time), Ue(pf(e.date));
			return;
		}
		let t = Zd(e.value);
		Ie(t.date), Re(t.time), Ue(pf(t.date));
	}, [
		J,
		Ue,
		Ie,
		Re
	]), vt = g((e, t) => {
		if (!J) return;
		let n = e ?? "", r = t ?? Xd;
		if (!(xe.current instanceof HTMLInputElement)) {
			Ie(n), Re(r);
			return;
		}
		let i = n ? Qd(n, r) : "";
		if (zl(xe.current, i), xe.current.dispatchEvent(new Event("input", { bubbles: !0 })), n) {
			let e = ff(n);
			e && Ue(e);
		}
		Ie(n), Re(r), Me(i.length > 0);
	}, [
		J,
		Ue,
		Ie,
		Me,
		Re
	]), yt = S(() => ff(Fe), [Fe]), bt = S(() => _f(Le), [Le]), xt = g((e) => {
		vt(Fe, vf(gf(e.currentTarget.value, 23), bt.minutes));
	}, [
		vt,
		Fe,
		bt.minutes
	]), St = g((e) => {
		let t = gf(e.currentTarget.value, 59);
		vt(Fe, vf(bt.hours, t));
	}, [
		vt,
		Fe,
		bt.hours
	]), Ct = g((e) => {
		if (J) {
			if (!e) {
				vt("", Le);
				return;
			}
			vt(mf(e), Le), Ue(e);
		}
	}, [
		vt,
		J,
		Ue,
		Le
	]), wt = g((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || Ue((e) => new Date(e.getFullYear(), t, 1));
	}, [Ue]), Tt = g((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || Ue((e) => new Date(t, e.getMonth(), 1));
	}, [Ue]), Et = g((e) => {
		Ue((t) => new Date(t.getFullYear(), t.getMonth() + (e === "next" ? 1 : -1), 1));
	}, [Ue]), Dt = g(() => {
		vt("", Xd), Ue(/* @__PURE__ */ new Date());
	}, [vt, Ue]), Ot = g(() => {
		let e = /* @__PURE__ */ new Date();
		vt(mf(e), hf(e)), Ue(e);
	}, [vt, Ue]), kt = g(() => {
		J && (_t(), Pe(!0));
	}, [
		J,
		Pe,
		_t
	]), At = g(() => {
		Pe(!1), Be(null);
	}, [Be, Pe]), jt = g((e) => {
		if (!J || !Ne || typeof window > "u") return;
		let t = Se.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = window.innerWidth || 0, i = window.innerHeight || 0, a = n.width, o = Math.max(r - 32, a), s = Ce.current?.getBoundingClientRect().width, c = Math.min(Math.max(s ?? a, a), o), l = e ?? Ce.current?.getBoundingClientRect().height ?? 320, u = Math.max(i - 32, 320), d = Math.min(l, u), f = i - n.bottom - 8 - 16, p = n.top - 8 - 16, m = d > f && p > f, h = r - c - 16, g = Math.min(Math.max(n.left, 16), Math.max(h, 16)), _ = n.bottom + 8, v = n.top - 8 - d, y = Math.max(i - d - 16, 16), b = m ? Math.max(v, 16) : Math.min(Math.max(_, 16), y);
		Be((e) => e && e.top === b && e.left === g && e.width === c ? e : {
			top: b,
			left: g,
			width: c
		});
	}, [
		J,
		Ne,
		Be
	]);
	v(() => {
		if (!Ne || typeof document > "u") return;
		let e = (e) => {
			let t = Se.current, n = Ce.current, r = e.target;
			t && r && t.contains(r) || n && r && n.contains(r) || At();
		}, t = (e) => {
			e.key === "Escape" && At();
		};
		return document.addEventListener("pointerdown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", t);
		};
	}, [At, Ne]), x(() => {
		if (!Ne || !J || typeof window > "u") return;
		jt();
		let e = () => {
			jt();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		J,
		Ne,
		jt
	]), x(() => {
		if (!Ne || !J) return;
		let e = Ce.current;
		e && jt(e.getBoundingClientRect().height);
	}, [
		J,
		Ne,
		ze,
		jt
	]);
	let Mt = Hr({
		hideLabel: $e,
		isCompact: de,
		withLabelDefaultClassName: wf.layout.inputSpacing,
		hiddenLabelDefaultClassName: wf.layout.hiddenInputSpacing,
		withLabelCompactClassName: wf.layout.compactInputSpacing,
		hiddenLabelCompactClassName: wf.layout.hiddenCompactInputSpacing
	}), Nt = Hr({
		hideLabel: $e,
		isCompact: de,
		withLabelDefaultClassName: wf.layout.textareaSpacing,
		hiddenLabelDefaultClassName: wf.layout.hiddenTextareaSpacing,
		withLabelCompactClassName: wf.layout.compactTextareaSpacing,
		hiddenLabelCompactClassName: wf.layout.hiddenCompactTextareaSpacing
	}), Pt = Q(wf.input.base, Mt, void 0, void 0, J ? Uu : void 0, he ? Hu : void 0, l), Ft = Q(wf.wrapper.text, (nt || rt) && wf.gapWithAdornment, wf.wrapper.base, tt, pt, ut, c), It = Q(wf.wrapper.textarea, wf.wrapper.base, tt, pt, ut, c), Lt = Q(wf.textarea.base, Nt, void 0, void 0, de && "text-sm", wf.textarea.disabled, l), Rt = Q(wf.adornment.base, lt ? wf.adornment.disabled : void 0, F), zt = Q(wf.adornment.base, lt ? wf.adornment.disabled : void 0, I), Bt = ce !== void 0 || se !== void 0, Vt = Bt ? !1 : B !== !1;
	if (V) {
		let e = Bt ? /* @__PURE__ */ O(Dd, {
			compact: de,
			helper: ce,
			error: se,
			reserveSpace: !1
		}) : void 0, t = q ? /* @__PURE__ */ O("div", {
			className: It,
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: /* @__PURE__ */ k("div", {
				className: wf.inner,
				children: [/* @__PURE__ */ k("div", {
					"aria-hidden": "true",
					className: Q(Lt, "flex flex-col gap-2 text-transparent select-none"),
					children: [
						/* @__PURE__ */ O(fd, { className: "h-3.5 w-4/5 rounded-full" }),
						/* @__PURE__ */ O(fd, { className: "h-3.5 w-full rounded-full" }),
						/* @__PURE__ */ O(fd, { className: "h-3.5 w-3/5 rounded-full" })
					]
				}), /* @__PURE__ */ O(Ed, {
					showLabel: et,
					labelClassName: gt,
					compact: de,
					widthClassName: "mt-1"
				})]
			})
		}) : /* @__PURE__ */ k("div", {
			className: Ft,
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: [
				nt && /* @__PURE__ */ O("div", {
					className: Rt,
					children: N
				}),
				/* @__PURE__ */ k("div", {
					className: wf.inner,
					children: [/* @__PURE__ */ O("div", {
						"aria-hidden": "true",
						className: Q(Pt, "text-transparent select-none"),
						children: /* @__PURE__ */ O("div", {
							className: "flex h-6 w-full items-center",
							children: /* @__PURE__ */ O(fd, { className: Q("h-3.5 rounded-full translate-y-0.5", rt ? "w-2/3" : "w-4/5") })
						})
					}), /* @__PURE__ */ O(Ed, {
						showLabel: et,
						labelClassName: gt,
						compact: de,
						widthClassName: "mt-1"
					})]
				}),
				rt && /* @__PURE__ */ O("div", {
					className: zt,
					children: P
				})
			]
		});
		return /* @__PURE__ */ O(Td, {
			baseClassName: wf.container,
			containerClassName: s,
			dataTheme: me,
			styles: wf.message,
			messageClassName: fe,
			helper: e,
			reserveSpace: Vt,
			children: t
		});
	}
	let Ht = {
		...ye,
		...Te
	};
	Ht.ref = (e) => {
		xe.current = e, we && Tl(we, e);
	}, Ht.onChange = Xe, Ht.onBlur = Je, $e && typeof X == "string" && X.length > 0 && Ht["aria-label"] === void 0 && Ht["aria-labelledby"] === void 0 && (Ht["aria-label"] = X), q || (J ? (Ht.type = "text", Ht.inputMode ??= "numeric", Ht.autoComplete ??= "off", Ht.pattern ??= "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", Ht["aria-label"] ??= typeof X == "string" ? X : "Date time input", Ht["data-datetime-input"] = "true", (Ht.placeholder === void 0 || Ht.placeholder === null || Ht.placeholder === "") && (Ht.placeholder = "YYYY-MM-DDTHH:MM")) : Ht.type = (y === "checkbox" ? "text" : y) ?? "text"), (Ye?.required?.value ?? R) && (Ht.required = !0, Ht["aria-required"] = !0), H ? (Ee ? Ht.value = H.formatDisplayValue(Wd(Y)) : De && (Ht.defaultValue = H.formatDisplayValue(Wd(Oe))), Ht.onChange = (e) => {
		if (!H) {
			Xe(e);
			return;
		}
		let t = e.currentTarget, n = t.value, r = {
			start: t.selectionStart ?? n.length,
			end: t.selectionEnd ?? n.length
		}, i = Wd(H.parseUserInput(n)), a = H.formatDisplayValue(i);
		if (zl(t, i), Xe(e), t.value !== a && zl(t, a), t !== (typeof document < "u" ? document.activeElement : null) || typeof t.setSelectionRange != "function") {
			ke || Me(t.type === "checkbox" ? t.checked : t.value.length > 0);
			return;
		}
		Cf(t, Sf((H.restoreCaret ? H.restoreCaret(n, a, r) : void 0) ?? bf(H, n, a, r), a.length)), ke || Me(t.type === "checkbox" ? t.checked : t.value.length > 0);
	}) : Ht.onChange = Xe, Ht.onFocus = (e) => {
		E?.(e), !e.defaultPrevented && !q && J && kt();
	};
	let Ut = (e) => {
		e.stopPropagation();
	}, Wt = (e) => {
		e.stopPropagation();
	}, Gt = () => {
		if (!J || !Ne || !ze || typeof document > "u") return null;
		let e = !!Fe, t = "w-32";
		return ee(/* @__PURE__ */ k("div", {
			ref: (e) => {
				Ce.current = e;
			},
			className: "fixed z-[2200] inline-flex flex-col max-w-[calc(100vw-2rem)] rounded-[var(--pc-radius-2xl)] bg-[var(--pc-color-surface)] p-3 text-[var(--pc-color-text)] shadow-2xl",
			onMouseDownCapture: Ut,
			onPointerDownCapture: Ut,
			onTouchStartCapture: Wt,
			style: {
				top: ze.top,
				left: ze.left,
				minWidth: ze.width
			},
			children: [
				/* @__PURE__ */ O("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: /* @__PURE__ */ k("div", {
						className: "flex flex-nowrap items-center gap-2",
						children: [
							/* @__PURE__ */ O(mn, {
								"aria-label": "Go to previous month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									Et("previous");
								},
								iconOnly: !0,
								label: "Go to previous month",
								leadingIcon: /* @__PURE__ */ O(Yu, {})
							}),
							/* @__PURE__ */ O("div", {
								className: "w-40",
								children: /* @__PURE__ */ O(Ud, {
									label: "Select month",
									hideLabel: !0,
									value: Ve.getMonth().toString(),
									onChange: wt,
									density: "compact",
									reserveMessageSpace: !1,
									children: sf.map((e, t) => /* @__PURE__ */ O("option", {
										value: t,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ O("div", {
								className: "w-28",
								children: /* @__PURE__ */ O(Ud, {
									label: "Select year",
									hideLabel: !0,
									value: Ve.getFullYear().toString(),
									onChange: Tt,
									density: "compact",
									reserveMessageSpace: !1,
									children: cf.map((e) => /* @__PURE__ */ O("option", {
										value: e,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ O(mn, {
								"aria-label": "Go to next month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									Et("next");
								},
								iconOnly: !0,
								label: "Go to next month",
								leadingIcon: /* @__PURE__ */ O(Xu, {})
							})
						]
					})
				}),
				/* @__PURE__ */ O("div", {
					className: "mt-3 rounded-[var(--pc-radius-2xl)] bg-[color:var(--pc-color-surface)] p-2",
					children: /* @__PURE__ */ O(xc, {
						mode: "single",
						month: Ve,
						onMonthChange: Ue,
						selected: yt,
						onSelect: Ct,
						startMonth: rf,
						endMonth: af,
						disabled: {
							before: tf,
							after: nf
						},
						showOutsideDays: !0,
						classNames: lf,
						components: { DayButton: yf }
					})
				}),
				/* @__PURE__ */ k("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ O("p", {
						className: "text-[10px] font-semibold uppercase tracking-wide text-[var(--pc-color-text-muted)]",
						children: "Time"
					}), /* @__PURE__ */ k("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ O("div", {
							className: t,
							children: /* @__PURE__ */ O(Sd, {
								label: "Hours",
								hideLabel: !0,
								density: "compact",
								reserveMessageSpace: !1,
								min: 0,
								max: 23,
								step: 1,
								inputMode: "numeric",
								pattern: "[0-9]*",
								value: bt.hours,
								onChange: xt
							})
						}), /* @__PURE__ */ O("div", {
							className: t,
							children: /* @__PURE__ */ O(Sd, {
								label: "Minutes",
								hideLabel: !0,
								density: "compact",
								reserveMessageSpace: !1,
								min: 0,
								max: 59,
								step: 1,
								inputMode: "numeric",
								pattern: "[0-9]*",
								value: bt.minutes,
								onChange: St
							})
						})]
					})]
				}),
				/* @__PURE__ */ k("div", {
					className: "mt-3 flex items-center justify-end gap-2",
					children: [
						/* @__PURE__ */ O(mn, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: Dt,
							disabled: !e,
							label: "Clear"
						}),
						/* @__PURE__ */ O(mn, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: Ot,
							label: "Use now"
						}),
						/* @__PURE__ */ O(mn, {
							type: "button",
							variant: "secondary",
							size: "sm",
							onClick: At,
							label: "Apply"
						})
					]
				})
			]
		}), document.body);
	}, Kt = q ? /* @__PURE__ */ O("label", {
		htmlFor: ne,
		className: It,
		children: /* @__PURE__ */ k("div", {
			className: wf.inner,
			children: [/* @__PURE__ */ O("textarea", {
				className: Lt,
				...Ht
			}), et && /* @__PURE__ */ O("span", {
				className: ht,
				title: Qe,
				children: X
			})]
		})
	}) : /* @__PURE__ */ k("label", {
		htmlFor: ne,
		className: Ft,
		ref: Se,
		children: [
			nt && /* @__PURE__ */ O("div", {
				className: Rt,
				children: N
			}),
			/* @__PURE__ */ k("div", {
				className: wf.inner,
				children: [
					/* @__PURE__ */ O("input", {
						className: Pt,
						...Ht
					}),
					et && /* @__PURE__ */ O("span", {
						className: ht,
						title: Qe,
						children: X
					}),
					Gt()
				]
			}),
			rt && /* @__PURE__ */ O("div", {
				className: zt,
				children: P
			})
		]
	});
	return /* @__PURE__ */ O(Td, {
		baseClassName: wf.container,
		containerClassName: s,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: me,
		styles: wf.message,
		messageClassName: fe,
		error: se,
		helper: ce,
		reserveSpace: B !== !1,
		children: Kt
	});
});
Tf.displayName = "Input", [
	"var(--font-mono)",
	"ui-monospace",
	"SFMono-Regular",
	"Menlo",
	"Monaco",
	"Consolas",
	"\"Liberation Mono\"",
	"\"Courier New\"",
	"monospace"
].join(", "), ["min-h-0 h-full w-full overflow-hidden border border-[var(--pc-color-border-weaker)] rounded-[var(--pc-radius-lg)]", "focus-within:outline-2 focus-within:outline-[var(--pc-color-text)] focus-within:outline-offset-0"].join(" "), m(async () => ({ default: (await import("./dist-gCDXjkLl.js")).default })), `${Eu.container}`, [
	Pu,
	"relative flex w-full min-w-0 overflow-hidden rounded-[var(--pc-radius)]",
	"border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	"focus-within:border-[var(--pc-color-text)]",
	"focus-within:outline-[var(--pc-color-text)]",
	"bg-transparent"
].join(" "), Du.error, Du.helper, ["h-full w-full resize-none bg-transparent px-3 py-3", "font-mono text-sm leading-[20px] text-[var(--pc-color-text)] outline-0"].join(" ");
//#endregion
//#region ../ui/src/lib/Tag.tsx
function Ef({ as: e, children: t, className: n, theme: r, size: i = "md", style: a, ...o }) {
	let s = e ?? "span", c = s === "button", l = s === "code", u = {
		...a,
		lineHeight: 1
	}, f = Df[i];
	return d(s, {
		...o,
		...r ? { "data-theme": r } : {},
		style: u,
		className: Q(l ? "inline-block align-middle" : "inline-flex items-center", "[background:var(--pc-color-surface)] text-[var(--pc-color-text)]", c && [
			"max-w-full cursor-pointer gap-1 transition-colors duration-200 ease-out",
			"hover:[background:var(--pc-color-surface-weaker)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]",
			"disabled:cursor-not-allowed disabled:opacity-60"
		], n, f)
	}, t);
}
var Df = {
	xl: "rounded-[var(--pc-radius-sm)] px-3.5 py-1.5 font-mono font-medium text-base leading-none",
	lg: "rounded-[var(--pc-radius-sm)] px-1.5 py-1 font-mono font-medium text-sm leading-none",
	md: "rounded-[var(--pc-radius-sm)] px-2.5 py-0.5 font-mono font-medium text-sm leading-none",
	sm: "rounded-[var(--pc-radius-sm)] px-2 py-0.5 font-mono font-medium text-xs leading-none",
	xs: "rounded-[var(--pc-radius-sm)] px-1.5 py-0.5 font-mono font-medium text-[11px] leading-none"
}, Of = {
	container: `${Eu.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-3",
		compactLabelOffset: "left-2",
		wrapperSpacing: Fu,
		wrapperSpacingCompact: Iu,
		wrapperHiddenSpacing: Lu,
		wrapperHiddenSpacingCompact: Ru
	},
	wrapper: {
		base: `${Mu} ${Pu} min-w-0 max-w-full`,
		gap: Au,
		neutral: [
			"border-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		raised: [
			"border-[var(--pc-color-depth-5)]",
			"outline-[var(--pc-color-depth-5)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		error: [
			"border-[var(--pc-color-border)]",
			"outline-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" ")
	},
	control: {
		base: ["peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0", ju.typography].join(" "),
		spacing: ju.spacing.default,
		hiddenSpacing: ju.spacing.hiddenDefault,
		compactSpacing: ju.spacing.compact,
		compactHiddenSpacing: ju.spacing.hiddenCompact,
		interactive: "cursor-pointer",
		disabled: "cursor-not-allowed pointer-events-none text-[var(--pc-color-depth-5)] opacity-70"
	},
	chips: {
		container: "flex min-h-[1.25rem] min-w-0 max-w-full flex-1 flex-wrap items-center gap-1.5 overflow-x-hidden",
		placeholder: "text-[var(--pc-color-depth-5)]",
		buttonIcon: "inline-flex items-center [&_svg]:h-3.5 [&_svg]:w-3.5",
		chipLabel: "block min-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
		chip: [
			"min-w-0 max-w-full",
			"[background:var(--pc-multiselect-chip-background,var(--pc-color-surface))]",
			"hover:[background:var(--pc-multiselect-chip-background,var(--pc-color-surface))]"
		].join(" ")
	},
	adornment: {
		base: Ou.base,
		trailing: "text-[var(--pc-color-text)]",
		disabled: "text-[var(--pc-color-depth-5)]"
	},
	label: {
		base: `${zu} select-none`,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]",
		tone: {
			active: "text-[var(--pc-color-text-muted)]",
			inactive: "text-[var(--pc-color-text-muted)]",
			error: "text-[var(--pc-color-text-muted)]",
			disabled: "text-[var(--pc-color-depth-5)]"
		}
	},
	dropdown: {
		menu: "",
		menuAbove: "",
		menuBelow: "",
		content: "flex flex-col",
		actions: "flex items-center justify-between gap-2 border-b border-[var(--pc-color-border-weakest)] px-3 py-2 text-xs",
		list: "overflow-y-auto py-1",
		optionRow: "group relative px-1 py-0.5 first:pt-1 last:pb-1",
		optionButton: [
			"flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm transition-colors",
			"hover:[background:var(--pc-color-surface-weaker)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]"
		].join(" "),
		optionLabelWrap: "min-w-0 flex-1",
		optionLabel: "block truncate text-sm text-[var(--pc-color-text)]",
		optionDescription: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]"
	},
	message: {
		error: Du.error,
		helper: Du.helper
	}
}, kf = (e) => {
	if (!Array.isArray(e)) return [];
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = "";
		typeof n == "string" ? e = n.trim() : (typeof n == "number" || typeof n == "boolean") && (e = String(n).trim()), e && t.add(e);
	}
	return [...t];
}, Af = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => Af(e)).join(" ") : p(e) ? Af(e.props.children) : "", jf = (e, t) => {
	let n = new Set(e), r = [];
	for (let e of t) n.has(e.value) && (r.push(e.value), n.delete(e.value));
	for (let t of e) n.has(t) && (r.push(t), n.delete(t));
	return r;
}, Mf = (e) => ({
	target: { name: e },
	currentTarget: { name: e }
}), Nf = (e, t) => ({
	target: {
		name: e,
		value: t
	},
	currentTarget: {
		name: e,
		value: t
	}
}), Pf = (e) => "lg", Ff = (e, t = "first") => {
	if (e.length === 0) return -1;
	if (t === "last") {
		for (let t = e.length - 1; t >= 0; --t) if (!e[t]?.disabled) return t;
		return -1;
	}
	for (let t = 0; t < e.length; t += 1) if (!e[t]?.disabled) return t;
	return -1;
}, If = f(function({ options: e, variant: t, label: n, hideLabel: r, helperText: i, belowFieldContent: a, belowFieldContentInheritsTheme: o = !0, error: s, containerClassName: c, className: l, labelClassName: u, messageClassName: d, field: f, meta: p, form: m, innerRef: h, onChange: _, onBlur: b, validation: x, required: C, density: E = "default", reserveMessageSpace: D, id: ee, name: A, value: j, defaultValue: M, placeholder: N = "Select one or more values", searchPlaceholder: P = "Search values", disabled: F = !1, emptyMessage: I = "No values available.", noMatchesMessage: L = "No values match your search.", skeleton: R = !1 }, z) {
	let [B, V] = T(), H = s ?? B, [te, U] = T(() => kf(M)), [W, G] = T(!1), [K, ne] = T(""), [re, ie] = T(-1), [ae, oe] = T("below"), [se, ce] = T(220), { inputId: le, resolvedName: ue, handleChange: de, handleBlur: fe, resolvedValue: q, errorContent: pe, helperContent: me, mergedRef: J, hasValue: he } = jl({
		forwardedRef: z,
		field: f,
		meta: p,
		form: m,
		innerRef: h,
		id: ee,
		name: A,
		value: j,
		defaultValue: M,
		explicitError: H,
		helperText: i,
		onChange: g((e) => {
			_?.(e.currentTarget.value);
		}, [_]),
		onBlur: g(() => {
			b?.();
		}, [b])
	}), ge = g((e) => {
		V(e);
	}, []), _e = g((e) => Array.isArray(e) ? e.join(",") : e, []), { onChange: ve, onBlur: ye, normalizedValidation: be } = Ml({
		value: q,
		required: C,
		validation: x,
		metaTouched: p?.touched,
		submitCount: m?.submitCount,
		resolvedName: ue,
		setFieldError: m?.setFieldError,
		handleChange: de,
		handleBlur: fe,
		setManagedError: ge,
		getValueFromChangeEvent: (e) => e.currentTarget.value,
		normalizeValue: _e
	}), xe = q !== void 0, Se = S(() => xe ? kf(q) : te, [
		te,
		xe,
		q
	]), Ce = S(() => jf(Se, e), [e, Se]), we = S(() => new Set(Ce), [Ce]), Te = S(() => {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			t.set(e.value, e);
		}), t;
	}, [e]), Ee = S(() => Ce.map((e) => {
		let t = Te.get(e);
		return {
			value: e,
			label: t?.label ?? e,
			disabled: t?.disabled === !0
		};
	}), [Te, Ce]), De = K.trim().toLowerCase(), Y = S(() => De ? e.filter((e) => `${Af(e.label)} ${e.value}`.toLowerCase().includes(De)) : e, [De, e]), Oe = S(() => Y.filter((e) => e.disabled !== !0).map((e) => e.value), [Y]), ke = S(() => W ? re >= 0 && re < Y.length && Y[re]?.disabled !== !0 ? re : Ff(Y, "first") : -1, [
		Y,
		re,
		W
	]), Ae = w(null), je = w(null), Me = w(null), Ne = w(/* @__PURE__ */ new Map()), Pe = g((e) => {
		Ae.current = e, J(e);
	}, [J]), Fe = g((e) => {
		je.current = e;
	}, []), Ie = y(), Le = le ?? `${Ie}-multiselect`, Re = `${Le}-listbox`, ze = `${Le}-label`, Be = g(() => {
		G(!1), ne(""), ie(-1);
	}, []), Ve = g(() => {
		let e = Ae.current;
		if (!e || typeof window > "u") return;
		let t = e.getBoundingClientRect(), n = Math.max(140, Math.floor(window.innerHeight - t.bottom - 12)), r = Math.max(140, Math.floor(t.top - 12)), i = n < 200 && r > n, a = i ? "above" : "below", o = i ? r : n;
		oe(a), ce(Math.max(140, Math.min(o - 92, 320)));
	}, []), He = g((e = "search") => {
		F || (G(!0), ie(Ff(Y, "first")), Ve(), e === "search" && requestAnimationFrame(() => {
			Me.current?.focus();
		}));
	}, [
		F,
		Y,
		Ve
	]);
	v(() => {
		if (!W) return;
		let e = () => {
			Ve();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [W, Ve]), v(() => {
		if (!W) return;
		let e = (e) => {
			let t = e.target;
			t instanceof Node && (je.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Le}"]`) || Be());
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
		};
	}, [
		Be,
		W,
		Le
	]), v(() => {
		if (!W || ke < 0 || ke >= Y.length) return;
		let e = Y[ke], t = Ne.current.get(e.value);
		t && typeof t.scrollIntoView == "function" && t.scrollIntoView({ block: "nearest" });
	}, [
		ke,
		Y,
		W
	]);
	let { dataTheme: Ue } = Od({
		variant: t,
		hasError: !R && !!pe
	}), We = g((t) => {
		let n = jf(kf(t), e);
		xe || U(n), ve(Nf(ue, n));
	}, [
		xe,
		e,
		ue,
		ve
	]), Ge = g((e) => {
		if (e && !Te.get(e)?.disabled) {
			if (we.has(e)) {
				We(Ce.filter((t) => t !== e));
				return;
			}
			We([...Ce, e]);
		}
	}, [
		We,
		Te,
		we,
		Ce
	]), Ke = g((e) => {
		we.has(e) && We(Ce.filter((t) => t !== e));
	}, [
		We,
		we,
		Ce
	]), qe = g(() => {
		Ce.length !== 0 && We(Ce.slice(0, -1));
	}, [We, Ce]), Je = g(() => {
		if (Oe.length === 0) return;
		let e = new Set(Ce);
		Oe.forEach((t) => {
			e.add(t);
		}), We([...e]);
	}, [
		We,
		Oe,
		Ce
	]), Ye = g(() => {
		We([]);
	}, [We]), Xe = g((e) => {
		if (Y.length === 0) return;
		let t = Y.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0);
		if (t.length === 0) return;
		let n = t.indexOf(ke), r = 0;
		r = n < 0 ? e === 1 ? 0 : t.length - 1 : (n + e + t.length) % t.length;
		let i = t[r];
		ie(i);
	}, [ke, Y]), Ze = (e) => {
		if (!F) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault(), W || He();
				return;
			}
			if (e.key === "ArrowDown") {
				e.preventDefault(), W || He("none"), Xe(1);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault(), W || He("none"), Xe(-1);
				return;
			}
			e.key === "Backspace" && !W && Ce.length > 0 && (e.preventDefault(), qe()), e.key === "Escape" && W && (e.preventDefault(), Be());
		}
	}, X = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault(), Xe(1);
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault(), Xe(-1);
			return;
		}
		if ((e.key === "Enter" || e.key === " ") && ke >= 0) {
			e.preventDefault();
			let t = Y[ke];
			t.disabled || Ge(t.value);
			return;
		}
		if (e.key === "Backspace" && K.length === 0) {
			qe();
			return;
		}
		e.key === "Escape" && (e.preventDefault(), Be(), Ae.current?.focus());
	}, Qe = (e) => {
		let t = e.relatedTarget;
		t instanceof Node && je.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Le}"]`) || (Be(), ye(Mf(ue)));
	}, $e = n ?? ue ?? "", et = Cd($e), { hideLabel: tt } = Vl(), nt = r ?? tt ?? !1, rt = !nt && !(typeof n == "string" && n.length === 0), it = E === "compact", Z = Pf(E), at = Hr({
		hideLabel: nt,
		isCompact: it,
		withLabelDefaultClassName: Of.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: Of.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: Of.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: Of.layout.wrapperHiddenSpacingCompact
	}), ot = it ? Of.layout.compactLabelOffset : Of.layout.labelOffset, st = typeof N == "string" && N.length > 0, ct = Ce.length > 0, lt = F, ut = W && !lt, dt = he || ct || st, ft = pe ? Of.wrapper.error : !lt && (ct || he) ? Of.wrapper.raised : Of.wrapper.neutral, pt = Br({
		hasError: !!pe,
		isRaised: dt,
		isActiveTone: ct || he || ut,
		isDisabled: lt,
		tones: Of.label.tone
	}), mt = Hr({
		hideLabel: nt,
		isCompact: it,
		withLabelDefaultClassName: Of.control.spacing,
		hiddenLabelDefaultClassName: Of.control.hiddenSpacing,
		withLabelCompactClassName: Of.control.compactSpacing,
		hiddenLabelCompactClassName: Of.control.compactHiddenSpacing
	}), ht = Vr({
		baseClassName: Of.label.base,
		horizontalClassName: ot,
		labelClassName: u,
		isCompact: it,
		isRaised: dt,
		toneClassName: pt,
		focusToneClassName: pe ? void 0 : Of.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), gt = Vr({
		baseClassName: Of.label.base,
		horizontalClassName: ot,
		labelClassName: u,
		isCompact: it,
		isRaised: !0,
		toneClassName: pt,
		focusToneClassName: pe ? void 0 : Of.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), _t = Q(Of.wrapper.base, Of.wrapper.gap, at, ft, ut ? "border-[var(--pc-color-text)] outline-2 outline-[var(--pc-color-text)]" : void 0, lt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, l), vt = Q(Of.control.base, it ? "min-h-[3rem]" : "min-h-[3.25rem]", mt, F ? Of.control.disabled : Of.control.interactive), yt, bt;
	Ee.length > 0 && (bt = "content-start items-start", yt = it ? "pt-0" : "pt-1.5");
	let xt = Q(Of.chips.container, bt, yt), St = Q(it ? "text-xs" : void 0, d), Ct = pt, wt = nt && typeof $e == "string" && $e.length > 0 ? $e : void 0, Tt = be?.required?.value ?? C, Et = () => {
		if (!F) {
			if (W) {
				Be();
				return;
			}
			He();
		}
	}, Dt = (e) => {
		let t = e.target;
		t instanceof Node && je.current?.contains(t) && Et();
	}, Ot = Q(Of.adornment.base, Ct), kt = me !== void 0 || pe !== void 0, At = kt ? !1 : D !== !1;
	if (R) {
		let e = kt ? /* @__PURE__ */ O(Dd, {
			compact: it,
			helper: me,
			error: pe,
			reserveSpace: !1
		}) : void 0, t = it ? "h-5" : "h-6";
		return /* @__PURE__ */ O(Td, {
			baseClassName: Of.container,
			containerClassName: c,
			dataTheme: Ue,
			styles: Of.message,
			messageClassName: St,
			helper: e,
			reserveSpace: At,
			children: /* @__PURE__ */ k("div", {
				className: _t,
				"data-skeleton": "true",
				"data-slot": "multiselect-skeleton-shell",
				children: [
					/* @__PURE__ */ O("div", {
						className: Q(Of.control.base, it ? "min-h-[3rem]" : "min-h-[3.25rem]", it ? "px-0" : void 0, mt),
						children: /* @__PURE__ */ k("div", {
							"data-theme": "neutral",
							className: xt,
							children: [/* @__PURE__ */ O(fd, { className: Q(t, "w-20 rounded-full") }), /* @__PURE__ */ O(fd, { className: Q(t, "w-16 rounded-full") })]
						})
					}),
					/* @__PURE__ */ O("div", {
						className: Ot,
						children: /* @__PURE__ */ O(fd, { className: "h-4 w-4 rounded-full" })
					}),
					/* @__PURE__ */ O(Ed, {
						showLabel: rt,
						labelClassName: gt,
						compact: it
					})
				]
			})
		});
	}
	return /* @__PURE__ */ O(Td, {
		baseClassName: Of.container,
		containerClassName: c,
		belowFieldContent: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: Ue,
		styles: Of.message,
		messageClassName: St,
		error: pe,
		helper: me,
		reserveSpace: D !== !1,
		children: /* @__PURE__ */ k("div", {
			ref: Fe,
			className: _t,
			onBlurCapture: Qe,
			onClick: Dt,
			children: [
				/* @__PURE__ */ O("div", {
					id: Le,
					ref: Pe,
					role: "combobox",
					tabIndex: F ? -1 : 0,
					"aria-controls": Re,
					"aria-expanded": ut,
					"aria-haspopup": "listbox",
					"aria-invalid": pe ? !0 : void 0,
					"aria-disabled": F ? !0 : void 0,
					"aria-label": wt,
					"aria-labelledby": rt ? ze : void 0,
					"aria-required": Tt ? !0 : void 0,
					className: vt,
					onKeyDown: Ze,
					"data-name": ue,
					children: /* @__PURE__ */ O("div", {
						"data-theme": "neutral",
						className: xt,
						children: Ee.length > 0 ? Ee.map((e) => {
							let t = Af(e.label).trim() || e.value;
							return /* @__PURE__ */ k(Ef, {
								as: "button",
								type: "button",
								"data-pc-multiselect-chip": "true",
								className: Of.chips.chip,
								theme: "neutral",
								size: Z,
								style: { paddingInline: "0.625rem" },
								disabled: F || e.disabled,
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), Ke(e.value);
								},
								"aria-label": `Remove ${t}`,
								children: [/* @__PURE__ */ O("span", {
									className: Of.chips.chipLabel,
									children: t
								}), /* @__PURE__ */ O("span", {
									className: Of.chips.buttonIcon,
									children: /* @__PURE__ */ O(Zu, {})
								})]
							}, e.value);
						}) : /* @__PURE__ */ O("span", {
							className: Of.chips.placeholder,
							children: N
						})
					})
				}),
				/* @__PURE__ */ O("div", {
					className: Ot,
					children: /* @__PURE__ */ O("svg", {
						"aria-hidden": "true",
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: Wr({ isOpen: ut }),
						children: /* @__PURE__ */ O("path", {
							d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})
				}),
				rt && /* @__PURE__ */ O("span", {
					id: ze,
					className: ht,
					title: et,
					children: $e
				}),
				/* @__PURE__ */ O(hi, {
					options: [],
					isOpen: W && !F,
					align: "start",
					widthMode: "anchor",
					lockPlacementWhileOpen: !0,
					menuRole: "dialog",
					labelledBy: Le,
					anchorRef: je,
					usePortal: !0,
					className: Q(Of.dropdown.menu, ae === "above" ? Of.dropdown.menuAbove : Of.dropdown.menuBelow),
					renderContent: () => /* @__PURE__ */ k("div", {
						className: Of.dropdown.content,
						children: [
							/* @__PURE__ */ O(vi, {
								ref: Me,
								value: K,
								onChange: (e) => {
									ne(e), ie(-1);
								},
								onKeyDown: X,
								placeholder: P,
								ariaLabel: "Search options"
							}),
							/* @__PURE__ */ O("div", {
								className: Of.dropdown.actions,
								onMouseDown: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								onTouchStart: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								children: /* @__PURE__ */ k("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ O(mn, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: Je,
										disabled: Oe.length === 0,
										label: "Select all"
									}), /* @__PURE__ */ O(mn, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: Ye,
										disabled: Ce.length === 0,
										label: "Deselect all"
									})]
								})
							}),
							/* @__PURE__ */ O("ul", {
								id: Re,
								role: "listbox",
								"aria-multiselectable": "true",
								className: Of.dropdown.list,
								style: { maxHeight: `${String(se)}px` },
								children: Y.length === 0 ? /* @__PURE__ */ O("li", {
									className: Of.dropdown.empty,
									children: e.length === 0 ? I : L
								}) : Y.map((e, t) => {
									let n = we.has(e.value), r = ke === t, i = e.disabled === !0;
									return /* @__PURE__ */ O(Yr, {
										ref: (t) => {
											if (t) {
												Ne.current.set(e.value, t);
												return;
											}
											Ne.current.delete(e.value);
										},
										wrapperAs: "li",
										wrapperId: `${Re}-${e.value}`,
										wrapperRole: "option",
										wrapperAriaSelected: n,
										wrapperAriaDisabled: i,
										label: e.label,
										description: e.description,
										selected: n,
										highlighted: r,
										disabled: i,
										trailing: /* @__PURE__ */ O("span", {
											className: Q("shrink-0 text-[var(--pc-color-text)] transition-opacity", n ? "opacity-100" : "opacity-0"),
											children: /* @__PURE__ */ O(qu, {})
										}),
										onMouseEnter: () => {
											ie(t);
										},
										onClick: () => {
											i || Ge(e.value);
										}
									}, e.value);
								})
							})
						]
					})
				})
			]
		})
	});
});
If.displayName = "MultiSelect";
//#endregion
//#region ../ui/src/lib/SearchSelect.tsx
var Lf = {
	container: `${Eu.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: Fu,
		wrapperSpacingCompact: Iu,
		wrapperHiddenSpacing: Lu,
		wrapperHiddenSpacingCompact: Ru
	},
	wrapper: {
		base: `${Mu} group min-w-0 max-w-full`,
		frame: Pu,
		gap: Au,
		neutral: [
			"border-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		raised: [
			"border-[var(--pc-color-depth-5)]",
			"outline-[var(--pc-color-depth-5)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" "),
		error: [
			"border-[var(--pc-color-border)]",
			"outline-[var(--pc-color-border)]",
			"focus-within:border-[var(--pc-color-text)]",
			"focus-within:outline-[var(--pc-color-text)]"
		].join(" ")
	},
	inner: ku,
	control: {
		base: [
			"peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0",
			ju.typography,
			"cursor-pointer text-left"
		].join(" "),
		inputBase: Bu,
		spacing: ju.spacing.select,
		hiddenSpacing: ju.spacing.hiddenSelect,
		compactSpacing: ju.spacing.selectCompact,
		compactHiddenSpacing: ju.spacing.hiddenSelectCompact,
		disabled: "cursor-not-allowed pointer-events-none text-[var(--pc-color-depth-5)] opacity-70"
	},
	value: {
		base: "block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[var(--pc-color-text)]",
		placeholder: "text-[var(--pc-color-depth-5)]"
	},
	adornment: {
		base: Ou.base,
		trailing: "text-[var(--pc-color-text-muted)]",
		disabled: "text-[var(--pc-color-depth-5)]"
	},
	label: {
		base: `${zu} select-none`,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]",
		tone: {
			active: "text-[var(--pc-color-text-muted)]",
			inactive: "text-[var(--pc-color-text-muted)]",
			error: "text-[var(--pc-color-text-muted)]",
			disabled: "text-[var(--pc-color-depth-5)]"
		}
	},
	dropdown: {
		content: "flex flex-col",
		list: "overflow-y-auto py-1",
		optionRow: "group relative px-1 py-0.5 first:pt-1 last:pb-1",
		optionButton: [
			"flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm transition-colors",
			"hover:[background:var(--pc-color-depth-1)] active:[background:var(--pc-color-depth-1)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]",
			"disabled:cursor-not-allowed disabled:opacity-60"
		].join(" "),
		optionLabelWrap: "min-w-0 flex-1",
		optionLabel: "block truncate text-sm text-[var(--pc-color-text)]",
		optionDescription: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
		optionSelectedIcon: "shrink-0 text-[var(--pc-color-text)]",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]"
	},
	message: {
		error: Du.error,
		helper: Du.helper
	}
}, Rf = (e) => e?.trim() ?? "", zf = f(function({ options: e, value: t, onChange: n, variant: r, label: i, hideLabel: a = !1, helperText: o, error: s, containerClassName: c, className: l, labelClassName: u, messageClassName: d, required: f = !1, density: p = "default", reserveMessageSpace: m = !0, id: h, name: _, placeholder: b = "Select a value", searchPlaceholder: x = "Search values", disabled: C = !1, emptyMessage: E = "No values are available.", noMatchesMessage: ee = "No values match your search.", allowCustomValue: A = !1 }, j) {
	let M = y(), N = h ?? M, P = `${N}-label`, F = `${N}-listbox`, I = w(null), L = w(null), R = w(null), [z, B] = T(!1), [V, H] = T(""), [te, U] = T(!1), W = Rf(t), G = S(() => e.find((e) => e.value === W) ?? null, [e, W]), K = Ad(te ? V : ""), ne = S(() => Md(e, K, (e) => [
		e.value,
		e.searchText,
		e.label,
		e.description
	]), [K, e]), re = S(() => e.some((e) => e.value.trim().toLowerCase() === K), [K, e]), ie = A ? V.trim() : "", ae = A && ie.length > 0 && !re, oe = !!s, { dataTheme: se } = Od({
		variant: r,
		hasError: oe
	});
	v(() => {
		if (!z || A) return;
		let e = window.requestAnimationFrame(() => {
			I.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [A, z]);
	let ce = g((e) => {
		if (L.current = e, typeof j == "function") {
			j(e);
			return;
		}
		j && (j.current = e);
	}, [j]), le = g((e) => {
		R.current = e;
	}, []), ue = g(() => {
		B(!1), H(""), U(!1);
	}, []), de = g((e) => {
		A && (H(e), U(!1)), n?.(e), ue();
	}, [
		A,
		ue,
		n
	]), fe = g((e) => {
		(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), B(!0));
	}, []), q = g((e) => {
		if (C) return;
		let t = L.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), z || B(!0));
	}, [C, z]), pe = g((e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault(), B(!0);
			return;
		}
		e.key === "Enter" && (e.preventDefault(), ae && ie && de(ie));
	}, [
		ae,
		de,
		ie
	]), me = g((e) => {
		if (e.key !== "Enter") return;
		if (e.preventDefault(), ae && ie) {
			de(ie);
			return;
		}
		let t = ne.find((e) => !e.disabled);
		t && de(t.value);
	}, [
		ae,
		de,
		ie,
		ne
	]), J = W.length > 0, he = G !== null || J, ge = p === "compact", _e = he || z, ve = a ? b : "", ye = a ? b : void 0;
	G ? (ve = G.label, ye = Cd(G.label)) : J && (ve = W, ye = W);
	let be = Lf.wrapper.neutral;
	oe ? be = Lf.wrapper.error : _e && !C && (be = Lf.wrapper.raised);
	let xe = Lf.layout.wrapperSpacing;
	a ? xe = ge ? Lf.layout.wrapperHiddenSpacingCompact : Lf.layout.wrapperHiddenSpacing : ge && (xe = Lf.layout.wrapperSpacingCompact);
	let Se = Hr({
		hideLabel: a,
		isCompact: ge,
		withLabelDefaultClassName: Lf.control.spacing,
		hiddenLabelDefaultClassName: Lf.control.hiddenSpacing,
		withLabelCompactClassName: Lf.control.compactSpacing,
		hiddenLabelCompactClassName: Lf.control.compactHiddenSpacing
	}), Ce = he || z, we = Br({
		hasError: oe,
		isRaised: Ce,
		isActiveTone: Ce,
		isDisabled: C,
		tones: Lf.label.tone
	}), Te = Vr({
		baseClassName: Lf.label.base,
		horizontalClassName: ge ? Lf.layout.compactLabelOffset : Lf.layout.labelOffset,
		labelClassName: u,
		isCompact: ge,
		isRaised: Ce,
		toneClassName: we,
		focusToneClassName: oe ? void 0 : Lf.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), Ee = Pd(i, "Search values"), De = Q(Lf.value.base, !he && a ? Lf.value.placeholder : void 0), Y = Q(Lf.wrapper.base, Lf.wrapper.gap, Lf.wrapper.frame, xe, be, l), Oe = Q(Lf.control.base, ge ? "min-h-[3rem]" : "min-h-[3.25rem]", Se, C ? Lf.control.disabled : void 0), ke = Q(Lf.control.inputBase, ge ? "min-h-[3rem]" : "min-h-[3.25rem]", Se, C ? Lf.control.disabled : void 0), Ae = Q(Lf.adornment.base, Lf.adornment.trailing, C ? Lf.adornment.disabled : void 0), je = K ? ee : E, Me = !a && i ? /* @__PURE__ */ O("span", {
		id: P,
		className: Te,
		title: Cd(i),
		children: i
	}) : null, Ne = /* @__PURE__ */ O("svg", {
		"aria-hidden": "true",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: Wr({
			isOpen: z,
			spinOnGroupFocus: A
		}),
		children: /* @__PURE__ */ O("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
	return /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ k(Td, {
		baseClassName: Lf.container,
		containerClassName: c,
		styles: Lf.message,
		error: s,
		helper: o,
		messageClassName: d,
		reserveSpace: m,
		dataTheme: se,
		children: [a && i ? /* @__PURE__ */ O("span", {
			id: P,
			className: "sr-only",
			children: i
		}) : null, A ? /* @__PURE__ */ k("label", {
			htmlFor: N,
			className: Y,
			ref: le,
			children: [/* @__PURE__ */ k("div", {
				className: Lf.inner,
				children: [/* @__PURE__ */ O("input", {
					ref: (e) => {
						ce(e);
					},
					id: N,
					name: _,
					type: "text",
					autoComplete: "off",
					role: "combobox",
					"aria-expanded": z,
					"aria-controls": F,
					"aria-haspopup": "listbox",
					"aria-labelledby": i ? P : void 0,
					"aria-required": f,
					className: ke,
					disabled: C,
					value: z && te ? V : W,
					placeholder: a ? b : void 0,
					onFocus: () => {
						B(!0);
					},
					onChange: (e) => {
						let t = e.currentTarget.value;
						U(!0), H(t), n?.(t), z || B(!0);
					},
					onKeyDown: pe
				}), Me]
			}), /* @__PURE__ */ O("span", {
				className: Ae,
				children: Ne
			})]
		}) : /* @__PURE__ */ k("div", {
			className: Q(Y, "cursor-pointer"),
			onMouseDown: q,
			ref: le,
			children: [/* @__PURE__ */ k("div", {
				className: Lf.inner,
				children: [/* @__PURE__ */ O("button", {
					ref: (e) => {
						ce(e);
					},
					id: N,
					name: _,
					type: "button",
					role: "combobox",
					"aria-expanded": z,
					"aria-controls": F,
					"aria-haspopup": "listbox",
					"aria-labelledby": i ? P : void 0,
					"aria-required": f,
					className: Oe,
					disabled: C,
					onClick: () => {
						if (z) {
							ue();
							return;
						}
						B(!0);
					},
					onKeyDown: fe,
					children: /* @__PURE__ */ O("span", {
						className: De,
						title: ye,
						children: ve
					})
				}), Me]
			}), /* @__PURE__ */ O("span", {
				className: Ae,
				children: Ne
			})]
		})]
	}), /* @__PURE__ */ O(hi, {
		anchorRef: R,
		isOpen: z,
		onRequestClose: ue,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: "listbox",
		labelledBy: i ? P : void 0,
		renderContent: () => /* @__PURE__ */ k("div", {
			className: Lf.dropdown.content,
			children: [!A && /* @__PURE__ */ O(vi, {
				ref: I,
				value: V,
				onChange: (e) => {
					U(!0), H(e);
				},
				onKeyDown: me,
				placeholder: x,
				ariaLabel: Ee
			}), /* @__PURE__ */ k("div", {
				id: F,
				className: Lf.dropdown.list,
				children: [ne.length > 0 ? ne.map((e) => {
					let t = e.value === W, n = t ? /* @__PURE__ */ O("span", {
						className: Lf.dropdown.optionSelectedIcon,
						children: /* @__PURE__ */ O(qu, {})
					}) : null;
					return /* @__PURE__ */ O(Yr, {
						role: "option",
						ariaSelected: t,
						label: e.label,
						description: e.description,
						selected: t,
						disabled: e.disabled,
						trailing: n,
						onClick: () => {
							de(e.value);
						}
					}, e.value);
				}) : /* @__PURE__ */ O("div", {
					className: Lf.dropdown.empty,
					children: je
				}), ae && ie && /* @__PURE__ */ O(Yr, {
					role: "option",
					ariaSelected: W === ie,
					label: /* @__PURE__ */ k(D, { children: [
						"Use \"",
						ie,
						"\""
					] }),
					onClick: () => {
						de(ie);
					}
				})]
			})]
		})
	})] });
});
zf.displayName = "SearchSelect";
//#endregion
//#region ../ui/src/lib/Toggle.tsx
var Bf = new Set([
	"true",
	"1",
	"yes",
	"y",
	"on"
]), Vf = new Set([
	"false",
	"0",
	"no",
	"n",
	"off",
	""
]), Hf = (e) => {
	if (typeof e == "boolean") return e;
	if (typeof e == "number") return Number.isNaN(e) ? void 0 : e !== 0;
	if (typeof e == "string") {
		let t = e.trim().toLowerCase();
		return Bf.has(t) ? !0 : Vf.has(t) ? !1 : void 0;
	}
}, Uf = {
	container: Eu.container,
	input: "peer sr-only",
	labelWrapper: {
		base: "flex flex-col gap-1.5",
		disabled: "cursor-not-allowed",
		enabled: "cursor-pointer"
	},
	labelText: {
		base: "text-base font-medium transition-colors duration-200 block max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
		error: "text-[var(--pc-color-text)]",
		disabled: "text-[var(--pc-color-text)]",
		default: "text-[var(--pc-color-text)]"
	},
	focusRing: {
		base: "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--pc-color-surface)]",
		disabled: "peer-focus-visible:ring-[var(--pc-color-depth-2)]",
		error: "peer-focus-visible:ring-[var(--pc-color-depth-3)]",
		default: "peer-focus-visible:ring-[var(--pc-color-depth-3)]"
	},
	track: {
		base: "relative inline-flex h-[1.8125rem] w-12 shrink-0 items-center overflow-hidden rounded-[var(--pc-radius-full)] border bg-transparent px-[3px] transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] [contain:paint]",
		compact: "h-7 w-[2.875rem]",
		disabled: "border-[var(--pc-color-depth-4)] [background:var(--pc-color-depth-3)] text-[var(--pc-color-text-muted)]",
		checked: "border-2 border-[var(--pc-color-text)]",
		unchecked: "border-[var(--pc-color-depth-5)]"
	},
	thumb: {
		base: "pointer-events-none inline-block h-[1.3125rem] w-[1.3125rem] rounded-[var(--pc-radius-full)] transition-[translate,background-color] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform [will-change:translate,background-color]",
		checked: "translate-x-[18px] bg-[var(--pc-color-text)]",
		checkedCompact: "translate-x-[17px] bg-[var(--pc-color-text)]",
		compact: "h-5 w-5",
		unchecked: "translate-x-0 bg-[var(--pc-color-depth-5)]",
		disabled: "[background:var(--pc-color-depth-4)]"
	},
	checkedIcon: {
		base: "pointer-events-none absolute inset-y-0 left-0.5 inline-flex w-[1.125rem] items-center justify-center transition-[opacity,color] duration-[320ms] ease-[cubic-bezier(0.22,1,0.36,1)] [&_svg]:block [&_svg]:h-3.5 [&_svg]:w-3.5",
		compact: "w-[1.125rem] [&_svg]:h-3.5 [&_svg]:w-3.5",
		visible: "opacity-100",
		hidden: "opacity-0",
		enabled: "text-[var(--pc-color-text)]",
		disabled: "text-[var(--pc-color-text-muted)]"
	},
	message: {
		error: Du.error,
		helper: Du.helper
	},
	srOnly: "sr-only"
}, Wf = f(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, density: s = "default", containerClassName: c, className: l, inputClassName: u, labelClassName: d, messageClassName: f, reserveMessageSpace: p, field: m, meta: h, form: _, innerRef: y, validation: b, onChange: x, onBlur: C, required: E, checkedIcon: D, skeleton: ee = !1, id: A, name: j, value: M, defaultValue: N, checked: P, defaultChecked: F, disabled: I, ...L }, R) {
	let [z, B] = T(), V = o ?? z, H = P ?? M, te = F ?? N, U = s === "compact", W = Q(U ? "text-xs" : void 0, f), { inputId: G, resolvedName: K, handleChange: ne, handleBlur: re, errorContent: ie, helperContent: ae, mergedRef: oe, sharedProps: se, resolvedValue: ce } = jl({
		forwardedRef: R,
		field: m,
		meta: h,
		form: _,
		innerRef: y,
		id: A,
		name: j,
		value: H,
		defaultValue: te,
		explicitError: V,
		helperText: r,
		onChange: x,
		onBlur: C
	}), { dataTheme: le } = Od({
		variant: e,
		hasError: !ee && !!ie
	}), ue = S(() => Hf(ce ?? H), [ce, H]), de = S(() => Hf(te), [te]), fe = ue ?? de ?? !1, q = g((e) => !!e.currentTarget?.checked, []);
	v(() => {
		if (!_?.setFieldValue || !K) return;
		let e = Hf(ce);
		typeof e == "boolean" && e !== ce && _.setFieldValue(K, e, !1);
	}, [
		_,
		K,
		ce
	]);
	let pe = g((e) => {
		B(e);
	}, [B]), { onChange: me, onBlur: J, normalizedValidation: he } = Ml({
		value: fe,
		required: E,
		validation: b,
		metaTouched: h?.touched,
		submitCount: _?.submitCount,
		resolvedName: K,
		setFieldError: _?.setFieldError,
		handleChange: ne,
		handleBlur: re,
		setManagedError: pe,
		getValueFromChangeEvent: q
	}), ge = {
		...L,
		...se
	};
	delete ge.value, delete ge.defaultValue;
	let _e = typeof M == "string" ? M : "true";
	ge.type = "checkbox", ge.value = _e, ge.disabled = I, typeof ue == "boolean" ? ge.checked = ue : typeof de == "boolean" && (ge.defaultChecked = de), ge.onChange = me, ge.onBlur = J, (he?.required?.value ?? E) && (ge.required = !0, ge["aria-required"] = !0);
	let { hideLabel: ve } = Vl(), ye = t ?? K ?? "", be = Cd(ye), xe = n ?? ve ?? !1;
	xe && typeof ye == "string" && ye.length > 0 && ge["aria-label"] === void 0 && ge["aria-labelledby"] === void 0 && (ge["aria-label"] = ye);
	let Se = Q(Uf.input, u), Ce = w(null), we = g((e) => {
		Ce.current = e, oe(e);
	}, [oe]);
	ge.className = Se, ge.ref = we, ge.id = G;
	let Te = I === !0, Ee = g((e) => {
		if (Te || e.button !== 0) return;
		e.preventDefault();
		let t = Ce.current;
		if (t) try {
			t.focus({ preventScroll: !0 });
		} catch {
			t.focus();
		}
	}, [Te]), De = !xe && !(typeof ye == "string" && ye.length === 0), Y = ie ? Uf.labelText.error : Te ? Uf.labelText.disabled : Uf.labelText.default, Oe = Q(Uf.labelText.base, Y, U ? "text-sm" : void 0, d), ke = Te ? Uf.focusRing.disabled : ie ? Uf.focusRing.error : Uf.focusRing.default, Ae = Te ? Uf.track.disabled : fe ? Uf.track.checked : Uf.track.unchecked, je = Q(Uf.track.base, Uf.focusRing.base, ke, Ae, U ? Uf.track.compact : void 0, l), Me = fe ? U ? Uf.thumb.checkedCompact : Uf.thumb.checked : Uf.thumb.unchecked, Ne = Q(Uf.thumb.base, Me, U ? Uf.thumb.compact : void 0, Te ? Uf.thumb.disabled : void 0), Pe = S(() => D === !0 ? /* @__PURE__ */ O(qu, { strokeWidth: 2.2 }) : D, [D]), Fe = Pe !== void 0, Ie = Q(Uf.checkedIcon.base, U ? Uf.checkedIcon.compact : void 0, Te ? Uf.checkedIcon.disabled : Uf.checkedIcon.enabled, fe ? Uf.checkedIcon.visible : Uf.checkedIcon.hidden), Le = ae !== void 0 || ie !== void 0, Re = Le ? !1 : p !== !1;
	if (ee) {
		let e = Le ? /* @__PURE__ */ O(Dd, {
			compact: U,
			helper: ae,
			error: ie,
			reserveSpace: !1
		}) : void 0, t = Q(Uf.track.base, Uf.track.unchecked, U ? Uf.track.compact : void 0, l), n = Q(Uf.thumb.base, Uf.thumb.unchecked, U ? Uf.thumb.compact : void 0);
		return /* @__PURE__ */ O(Td, {
			baseClassName: Uf.container,
			containerClassName: c,
			dataTheme: le,
			styles: Uf.message,
			messageClassName: W,
			helper: e,
			reserveSpace: Re,
			children: /* @__PURE__ */ k("div", {
				className: Q(Uf.labelWrapper.base, U ? "gap-1" : void 0),
				"data-skeleton": "true",
				"data-slot": "toggle-skeleton-shell",
				children: [/* @__PURE__ */ O(Ed, {
					showLabel: De,
					labelClassName: Oe,
					compact: U
				}), /* @__PURE__ */ O("span", {
					"aria-hidden": "true",
					className: t,
					children: /* @__PURE__ */ O("span", {
						"data-slot": "thumb",
						className: n,
						children: /* @__PURE__ */ O(fd, { className: "h-full w-full rounded-full [background:var(--pc-color-depth-4)]" })
					})
				})]
			})
		});
	}
	return /* @__PURE__ */ O(Td, {
		baseClassName: Uf.container,
		containerClassName: c,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: le,
		styles: Uf.message,
		messageClassName: W,
		error: ie,
		helper: ae,
		reserveSpace: p !== !1,
		children: /* @__PURE__ */ k("label", {
			htmlFor: G,
			onMouseDown: Ee,
			className: Q(Uf.labelWrapper.base, U ? "gap-1" : void 0, Te ? Uf.labelWrapper.disabled : Uf.labelWrapper.enabled),
			children: [
				/* @__PURE__ */ O("input", { ...ge }),
				De ? /* @__PURE__ */ O("span", {
					className: Oe,
					title: be,
					children: ye
				}) : typeof ye == "string" && ye.length > 0 && /* @__PURE__ */ O("span", {
					className: Q(Uf.srOnly, d),
					children: ye
				}),
				/* @__PURE__ */ k("span", {
					"aria-hidden": "true",
					className: je,
					children: [Fe ? /* @__PURE__ */ O("span", {
						"data-slot": "checked-icon",
						className: Ie,
						children: Pe
					}) : null, /* @__PURE__ */ O("span", {
						"data-slot": "thumb",
						className: Ne
					})]
				})
			]
		})
	});
});
Wf.displayName = "Toggle";
//#endregion
//#region ../../node_modules/credit-card-type/dist/lib/card-types.js
var Gf = /* @__PURE__ */ I(((e, t) => {
	t.exports = {
		visa: {
			niceType: "Visa",
			type: "visa",
			patterns: [4],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		mastercard: {
			niceType: "Mastercard",
			type: "mastercard",
			patterns: [
				[51, 55],
				[2221, 2229],
				[223, 229],
				[23, 26],
				[270, 271],
				2720
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		"american-express": {
			niceType: "American Express",
			type: "american-express",
			patterns: [34, 37],
			gaps: [4, 10],
			lengths: [15],
			code: {
				name: "CID",
				size: 4
			}
		},
		"diners-club": {
			niceType: "Diners Club",
			type: "diners-club",
			patterns: [
				[300, 305],
				36,
				38,
				39
			],
			gaps: [4, 10],
			lengths: [
				14,
				16,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		discover: {
			niceType: "Discover",
			type: "discover",
			patterns: [
				6011,
				[644, 649],
				65
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16, 19],
			code: {
				name: "CID",
				size: 3
			}
		},
		jcb: {
			niceType: "JCB",
			type: "jcb",
			patterns: [
				2131,
				1800,
				[3528, 3589]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		},
		unionpay: {
			niceType: "UnionPay",
			type: "unionpay",
			patterns: [
				620,
				[62100, 62182],
				[62184, 62187],
				[62185, 62197],
				[62200, 62205],
				[622010, 622999],
				622018,
				[62207, 62209],
				[623, 626],
				6270,
				6272,
				6276,
				[627700, 627779],
				[627781, 627799],
				[6282, 6289],
				6291,
				6292,
				810,
				[8110, 8131],
				[8132, 8151],
				[8152, 8163],
				[8164, 8171]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				14,
				15,
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVN",
				size: 3
			}
		},
		maestro: {
			niceType: "Maestro",
			type: "maestro",
			patterns: [
				493698,
				[5e5, 504174],
				[504176, 506698],
				[506779, 508999],
				[56, 59],
				63,
				67,
				6
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVC",
				size: 3
			}
		},
		elo: {
			niceType: "Elo",
			type: "elo",
			patterns: [
				401178,
				401179,
				438935,
				457631,
				457632,
				431274,
				451416,
				457393,
				504175,
				[506699, 506778],
				[509e3, 509999],
				627780,
				636297,
				636368,
				[650031, 650033],
				[650035, 650051],
				[650405, 650439],
				[650485, 650538],
				[650541, 650598],
				[650700, 650718],
				[650720, 650727],
				[650901, 650978],
				[651652, 651679],
				[655e3, 655019],
				[655021, 655058]
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVE",
				size: 3
			}
		},
		mir: {
			niceType: "Mir",
			type: "mir",
			patterns: [[2200, 2204]],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				17,
				18,
				19
			],
			code: {
				name: "CVP2",
				size: 3
			}
		},
		hiper: {
			niceType: "Hiper",
			type: "hiper",
			patterns: [
				637095,
				63737423,
				63743358,
				637568,
				637599,
				637609,
				637612
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		hipercard: {
			niceType: "Hipercard",
			type: "hipercard",
			patterns: [606282],
			gaps: [
				4,
				8,
				12
			],
			lengths: [16],
			code: {
				name: "CVC",
				size: 3
			}
		},
		verve: {
			niceType: "Verve",
			type: "verve",
			patterns: [
				[506099, 506127],
				506129,
				[506133, 506150],
				[506158, 506163],
				506166,
				506168,
				506170,
				506173,
				[506176, 506180],
				506184,
				[506187, 506188],
				506191,
				506195,
				506197,
				507865,
				507866,
				[507868, 507877],
				[507880, 507888],
				507900,
				507941
			],
			gaps: [
				4,
				8,
				12
			],
			lengths: [
				16,
				18,
				19
			],
			code: {
				name: "CVV",
				size: 3
			}
		}
	};
})), Kf = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.clone = void 0;
	function t(e) {
		return e ? JSON.parse(JSON.stringify(e)) : null;
	}
	e.clone = t;
})), qf = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.matches = void 0;
	function t(e, t, n) {
		var r = String(t).length, i = e.substr(0, r), a = parseInt(i, 10);
		return t = parseInt(String(t).substr(0, i.length), 10), n = parseInt(String(n).substr(0, i.length), 10), a >= t && a <= n;
	}
	function n(e, t) {
		return t = String(t), t.substring(0, e.length) === e.substring(0, t.length);
	}
	function r(e, r) {
		return Array.isArray(r) ? t(e, r[0], r[1]) : n(e, r);
	}
	e.matches = r;
})), Jf = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addMatchingCardsToResults = void 0;
	var t = Kf(), n = qf();
	function r(e, r, i) {
		var a, o;
		for (a = 0; a < r.patterns.length; a++) {
			var s = r.patterns[a];
			if ((0, n.matches)(e, s)) {
				var c = (0, t.clone)(r);
				o = Array.isArray(s) ? String(s[0]).length : String(s).length, e.length >= o && (c.matchStrength = o), i.push(c);
				break;
			}
		}
	}
	e.addMatchingCardsToResults = r;
})), Yf = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isValidInputType = void 0;
	function t(e) {
		return typeof e == "string" || e instanceof String;
	}
	e.isValidInputType = t;
})), Xf = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.findBestMatch = void 0;
	function t(e) {
		var t = e.filter(function(e) {
			return e.matchStrength;
		}).length;
		return t > 0 && t === e.length;
	}
	function n(e) {
		return t(e) ? e.reduce(function(e, t) {
			return !e || Number(e.matchStrength) < Number(t.matchStrength) ? t : e;
		}) : null;
	}
	e.findBestMatch = n;
})), Zf = /* @__PURE__ */ I(((e, t) => {
	var n = e && e.__assign || function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	}, r = Gf(), i = Jf(), a = Yf(), o = Xf(), s = Kf(), c = {}, l = {
		VISA: "visa",
		MASTERCARD: "mastercard",
		AMERICAN_EXPRESS: "american-express",
		DINERS_CLUB: "diners-club",
		DISCOVER: "discover",
		JCB: "jcb",
		UNIONPAY: "unionpay",
		VERVE: "verve",
		MAESTRO: "maestro",
		ELO: "elo",
		MIR: "mir",
		HIPER: "hiper",
		HIPERCARD: "hipercard"
	}, u = [
		l.VISA,
		l.MASTERCARD,
		l.AMERICAN_EXPRESS,
		l.DINERS_CLUB,
		l.DISCOVER,
		l.JCB,
		l.UNIONPAY,
		l.VERVE,
		l.MAESTRO,
		l.ELO,
		l.MIR,
		l.HIPER,
		l.HIPERCARD
	], d = (0, s.clone)(u);
	function f(e) {
		return c[e] || r[e];
	}
	function p() {
		return d.map(function(e) {
			return (0, s.clone)(f(e));
		});
	}
	function m(e, t) {
		t === void 0 && (t = !1);
		var n = d.indexOf(e);
		if (!t && n === -1) throw Error("\"" + e + "\" is not a supported card type.");
		return n;
	}
	function h(e) {
		var t = [];
		if (!(0, a.isValidInputType)(e)) return t;
		if (e.length === 0) return p();
		d.forEach(function(n) {
			var r = f(n);
			(0, i.addMatchingCardsToResults)(e, r, t);
		});
		var n = (0, o.findBestMatch)(t);
		return n ? [n] : t;
	}
	h.getTypeInfo = function(e) {
		return (0, s.clone)(f(e));
	}, h.removeCard = function(e) {
		var t = m(e);
		d.splice(t, 1);
	}, h.addCard = function(e) {
		var t = m(e.type, !0);
		c[e.type] = e, t === -1 && d.push(e.type);
	}, h.updateCard = function(e, t) {
		var i = c[e] || r[e];
		if (!i) throw Error(`"${e}" is not a recognized type. Use \`addCard\` instead.'`);
		if (t.type && i.type !== t.type) throw Error("Cannot overwrite type parameter.");
		var a = (0, s.clone)(i);
		a = n(n({}, a), t), c[a.type] = a;
	}, h.changeOrder = function(e, t) {
		var n = m(e);
		d.splice(n, 1), d.splice(t, 0, e);
	}, h.resetModifications = function() {
		d = (0, s.clone)(u), c = {};
	}, h.types = l, t.exports = h;
})), Qf = function(e) {
	return $f(e) && !ep(e);
};
function $f(e) {
	return !!e && typeof e == "object";
}
function ep(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || np(e);
}
var tp = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function np(e) {
	return e.$$typeof === tp;
}
function rp(e) {
	return Array.isArray(e) ? [] : {};
}
function ip(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? sp(rp(e), e, t) : e;
}
function ap(e, t, n) {
	return e.concat(t).map(function(e) {
		return ip(e, n);
	});
}
function op(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = ip(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = ip(t[i], n) : r[i] = sp(e[i], t[i], n);
	}), r;
}
function sp(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || ap, n.isMergeableObject = n.isMergeableObject || Qf;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : op(e, t, n) : ip(t, n);
}
sp.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return sp(e, n, t);
	}, {});
};
var cp = sp, lp = typeof global == "object" && global && global.Object === Object && global, up = typeof self == "object" && self && self.Object === Object && self, dp = lp || up || Function("return this")(), fp = dp.Symbol, pp = Object.prototype, mp = pp.hasOwnProperty, hp = pp.toString, gp = fp ? fp.toStringTag : void 0;
function _p(e) {
	var t = mp.call(e, gp), n = e[gp];
	try {
		e[gp] = void 0;
		var r = !0;
	} catch {}
	var i = hp.call(e);
	return r && (t ? e[gp] = n : delete e[gp]), i;
}
//#endregion
//#region ../../node_modules/lodash-es/_objectToString.js
var vp = Object.prototype.toString;
function yp(e) {
	return vp.call(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetTag.js
var bp = "[object Null]", xp = "[object Undefined]", Sp = fp ? fp.toStringTag : void 0;
function Cp(e) {
	return e == null ? e === void 0 ? xp : bp : Sp && Sp in Object(e) ? _p(e) : yp(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_overArg.js
function wp(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_getPrototype.js
var Tp = wp(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/lodash-es/isObjectLike.js
function Ep(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/lodash-es/isPlainObject.js
var Dp = "[object Object]", Op = Function.prototype, kp = Object.prototype, Ap = Op.toString, jp = kp.hasOwnProperty, Mp = Ap.call(Object);
function Np(e) {
	if (!Ep(e) || Cp(e) != Dp) return !1;
	var t = Tp(e);
	if (t === null) return !0;
	var n = jp.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && Ap.call(n) == Mp;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheClear.js
function Pp() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/eq.js
function Fp(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/lodash-es/_assocIndexOf.js
function Ip(e, t) {
	for (var n = e.length; n--;) if (Fp(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheDelete.js
var Lp = Array.prototype.splice;
function Rp(e) {
	var t = this.__data__, n = Ip(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : Lp.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheGet.js
function zp(e) {
	var t = this.__data__, n = Ip(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheHas.js
function Bp(e) {
	return Ip(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheSet.js
function Vp(e, t) {
	var n = this.__data__, r = Ip(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_ListCache.js
function Hp(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Hp.prototype.clear = Pp, Hp.prototype.delete = Rp, Hp.prototype.get = zp, Hp.prototype.has = Bp, Hp.prototype.set = Vp;
//#endregion
//#region ../../node_modules/lodash-es/_stackClear.js
function Up() {
	this.__data__ = new Hp(), this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackDelete.js
function Wp(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackGet.js
function Gp(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_stackHas.js
function Kp(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/isObject.js
function qp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/lodash-es/isFunction.js
var Jp = "[object AsyncFunction]", Yp = "[object Function]", Xp = "[object GeneratorFunction]", Zp = "[object Proxy]";
function Qp(e) {
	if (!qp(e)) return !1;
	var t = Cp(e);
	return t == Yp || t == Xp || t == Jp || t == Zp;
}
//#endregion
//#region ../../node_modules/lodash-es/_coreJsData.js
var $p = dp["__core-js_shared__"], em = function() {
	var e = /[^.]+$/.exec($p && $p.keys && $p.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function tm(e) {
	return !!em && em in e;
}
//#endregion
//#region ../../node_modules/lodash-es/_toSource.js
var nm = Function.prototype.toString;
function rm(e) {
	if (e != null) {
		try {
			return nm.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsNative.js
var im = /[\\^$.*+?()[\]{}|]/g, am = /^\[object .+?Constructor\]$/, om = Function.prototype, sm = Object.prototype, cm = om.toString, lm = sm.hasOwnProperty, um = RegExp("^" + cm.call(lm).replace(im, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function dm(e) {
	return !qp(e) || tm(e) ? !1 : (Qp(e) ? um : am).test(rm(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getValue.js
function fm(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/lodash-es/_getNative.js
function pm(e, t) {
	var n = fm(e, t);
	return dm(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_Map.js
var mm = pm(dp, "Map"), hm = pm(Object, "create");
//#endregion
//#region ../../node_modules/lodash-es/_hashClear.js
function gm() {
	this.__data__ = hm ? hm(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashDelete.js
function _m(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashGet.js
var vm = "__lodash_hash_undefined__", ym = Object.prototype.hasOwnProperty;
function bm(e) {
	var t = this.__data__;
	if (hm) {
		var n = t[e];
		return n === vm ? void 0 : n;
	}
	return ym.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashHas.js
var xm = Object.prototype.hasOwnProperty;
function Sm(e) {
	var t = this.__data__;
	return hm ? t[e] !== void 0 : xm.call(t, e);
}
//#endregion
//#region ../../node_modules/lodash-es/_hashSet.js
var Cm = "__lodash_hash_undefined__";
function wm(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = hm && t === void 0 ? Cm : t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Hash.js
function Tm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Tm.prototype.clear = gm, Tm.prototype.delete = _m, Tm.prototype.get = bm, Tm.prototype.has = Sm, Tm.prototype.set = wm;
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheClear.js
function Em() {
	this.size = 0, this.__data__ = {
		hash: new Tm(),
		map: new (mm || Hp)(),
		string: new Tm()
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_isKeyable.js
function Dm(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/lodash-es/_getMapData.js
function Om(e, t) {
	var n = e.__data__;
	return Dm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheDelete.js
function km(e) {
	var t = Om(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheGet.js
function Am(e) {
	return Om(this, e).get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheHas.js
function jm(e) {
	return Om(this, e).has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheSet.js
function Mm(e, t) {
	var n = Om(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_MapCache.js
function Nm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Nm.prototype.clear = Em, Nm.prototype.delete = km, Nm.prototype.get = Am, Nm.prototype.has = jm, Nm.prototype.set = Mm;
//#endregion
//#region ../../node_modules/lodash-es/_stackSet.js
var Pm = 200;
function Fm(e, t) {
	var n = this.__data__;
	if (n instanceof Hp) {
		var r = n.__data__;
		if (!mm || r.length < Pm - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Nm(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Stack.js
function Im(e) {
	var t = this.__data__ = new Hp(e);
	this.size = t.size;
}
Im.prototype.clear = Up, Im.prototype.delete = Wp, Im.prototype.get = Gp, Im.prototype.has = Kp, Im.prototype.set = Fm;
//#endregion
//#region ../../node_modules/lodash-es/_arrayEach.js
function Lm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_defineProperty.js
var Rm = function() {
	try {
		var e = pm(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignValue.js
function zm(e, t, n) {
	t == "__proto__" && Rm ? Rm(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/lodash-es/_assignValue.js
var Bm = Object.prototype.hasOwnProperty;
function Vm(e, t, n) {
	var r = e[t];
	(!(Bm.call(e, t) && Fp(r, n)) || n === void 0 && !(t in e)) && zm(e, t, n);
}
//#endregion
//#region ../../node_modules/lodash-es/_copyObject.js
function Hm(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? zm(n, s, c) : Vm(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseTimes.js
function Um(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsArguments.js
var Wm = "[object Arguments]";
function Gm(e) {
	return Ep(e) && Cp(e) == Wm;
}
//#endregion
//#region ../../node_modules/lodash-es/isArguments.js
var Km = Object.prototype, qm = Km.hasOwnProperty, Jm = Km.propertyIsEnumerable, Ym = Gm(function() {
	return arguments;
}()) ? Gm : function(e) {
	return Ep(e) && qm.call(e, "callee") && !Jm.call(e, "callee");
}, Xm = Array.isArray;
//#endregion
//#region ../../node_modules/lodash-es/stubFalse.js
function Zm() {
	return !1;
}
//#endregion
//#region ../../node_modules/lodash-es/isBuffer.js
var Qm = typeof exports == "object" && exports && !exports.nodeType && exports, $m = Qm && typeof module == "object" && module && !module.nodeType && module, eh = $m && $m.exports === Qm ? dp.Buffer : void 0, th = (eh ? eh.isBuffer : void 0) || Zm, nh = 9007199254740991, rh = /^(?:0|[1-9]\d*)$/;
function ih(e, t) {
	var n = typeof e;
	return t ??= nh, !!t && (n == "number" || n != "symbol" && rh.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/lodash-es/isLength.js
var ah = 9007199254740991;
function oh(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= ah;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsTypedArray.js
var sh = "[object Arguments]", ch = "[object Array]", lh = "[object Boolean]", uh = "[object Date]", dh = "[object Error]", fh = "[object Function]", ph = "[object Map]", mh = "[object Number]", hh = "[object Object]", gh = "[object RegExp]", _h = "[object Set]", vh = "[object String]", yh = "[object WeakMap]", bh = "[object ArrayBuffer]", xh = "[object DataView]", Sh = "[object Float32Array]", Ch = "[object Float64Array]", wh = "[object Int8Array]", Th = "[object Int16Array]", Eh = "[object Int32Array]", Dh = "[object Uint8Array]", Oh = "[object Uint8ClampedArray]", kh = "[object Uint16Array]", Ah = "[object Uint32Array]", jh = {};
jh[Sh] = jh[Ch] = jh[wh] = jh[Th] = jh[Eh] = jh[Dh] = jh[Oh] = jh[kh] = jh[Ah] = !0, jh[sh] = jh[ch] = jh[bh] = jh[lh] = jh[xh] = jh[uh] = jh[dh] = jh[fh] = jh[ph] = jh[mh] = jh[hh] = jh[gh] = jh[_h] = jh[vh] = jh[yh] = !1;
function Mh(e) {
	return Ep(e) && oh(e.length) && !!jh[Cp(e)];
}
//#endregion
//#region ../../node_modules/lodash-es/_baseUnary.js
function Nh(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/lodash-es/isTypedArray.js
var Ph = void 0, Fh = Ph ? Nh(Ph) : Mh, Ih = Object.prototype.hasOwnProperty;
function Lh(e, t) {
	var n = Xm(e), r = !n && Ym(e), i = !n && !r && th(e), a = !n && !r && !i && Fh(e), o = n || r || i || a, s = o ? Um(e.length, String) : [], c = s.length;
	for (var l in e) (t || Ih.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || ih(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/lodash-es/_isPrototype.js
var Rh = Object.prototype;
function zh(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Rh);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeys.js
var Bh = wp(Object.keys, Object), Vh = Object.prototype.hasOwnProperty;
function Hh(e) {
	if (!zh(e)) return Bh(e);
	var t = [];
	for (var n in Object(e)) Vh.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/isArrayLike.js
function Uh(e) {
	return e != null && oh(e.length) && !Qp(e);
}
//#endregion
//#region ../../node_modules/lodash-es/keys.js
function Wh(e) {
	return Uh(e) ? Lh(e) : Hh(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssign.js
function Gh(e, t) {
	return e && Hm(t, Wh(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeysIn.js
function Kh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseKeysIn.js
var qh = Object.prototype.hasOwnProperty;
function Jh(e) {
	if (!qp(e)) return Kh(e);
	var t = zh(e), n = [];
	for (var r in e) r == "constructor" && (t || !qh.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/keysIn.js
function Yh(e) {
	return Uh(e) ? Lh(e, !0) : Jh(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignIn.js
function Xh(e, t) {
	return e && Hm(t, Yh(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneBuffer.js
var Zh = typeof exports == "object" && exports && !exports.nodeType && exports, Qh = Zh && typeof module == "object" && module && !module.nodeType && module, $h = Qh && Qh.exports === Zh ? dp.Buffer : void 0, eg = $h ? $h.allocUnsafe : void 0;
function tg(e, t) {
	if (t) return e.slice();
	var n = e.length, r = eg ? eg(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/lodash-es/_copyArray.js
function ng(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayFilter.js
function rg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/lodash-es/stubArray.js
function ig() {
	return [];
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbols.js
var ag = Object.prototype.propertyIsEnumerable, og = Object.getOwnPropertySymbols, sg = og ? function(e) {
	return e == null ? [] : (e = Object(e), rg(og(e), function(t) {
		return ag.call(e, t);
	}));
} : ig;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbols.js
function cg(e, t) {
	return Hm(e, sg(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayPush.js
function lg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbolsIn.js
var ug = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) lg(t, sg(e)), e = Tp(e);
	return t;
} : ig;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbolsIn.js
function dg(e, t) {
	return Hm(e, ug(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetAllKeys.js
function fg(e, t, n) {
	var r = t(e);
	return Xm(e) ? r : lg(r, n(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeys.js
function pg(e) {
	return fg(e, Wh, sg);
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeysIn.js
function mg(e) {
	return fg(e, Yh, ug);
}
//#endregion
//#region ../../node_modules/lodash-es/_DataView.js
var hg = pm(dp, "DataView"), gg = pm(dp, "Promise"), _g = pm(dp, "Set"), vg = pm(dp, "WeakMap"), yg = "[object Map]", bg = "[object Object]", xg = "[object Promise]", Sg = "[object Set]", Cg = "[object WeakMap]", wg = "[object DataView]", Tg = rm(hg), Eg = rm(mm), Dg = rm(gg), Og = rm(_g), kg = rm(vg), Ag = Cp;
(hg && Ag(new hg(/* @__PURE__ */ new ArrayBuffer(1))) != wg || mm && Ag(new mm()) != yg || gg && Ag(gg.resolve()) != xg || _g && Ag(new _g()) != Sg || vg && Ag(new vg()) != Cg) && (Ag = function(e) {
	var t = Cp(e), n = t == bg ? e.constructor : void 0, r = n ? rm(n) : "";
	if (r) switch (r) {
		case Tg: return wg;
		case Eg: return yg;
		case Dg: return xg;
		case Og: return Sg;
		case kg: return Cg;
	}
	return t;
});
var jg = Ag, Mg = Object.prototype.hasOwnProperty;
function Ng(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Mg.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/lodash-es/_Uint8Array.js
var Pg = dp.Uint8Array;
//#endregion
//#region ../../node_modules/lodash-es/_cloneArrayBuffer.js
function Fg(e) {
	var t = new e.constructor(e.byteLength);
	return new Pg(t).set(new Pg(e)), t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneDataView.js
function Ig(e, t) {
	var n = t ? Fg(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneRegExp.js
var Lg = /\w*$/;
function Rg(e) {
	var t = new e.constructor(e.source, Lg.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneSymbol.js
var zg = fp ? fp.prototype : void 0, Bg = zg ? zg.valueOf : void 0;
function Vg(e) {
	return Bg ? Object(Bg.call(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneTypedArray.js
function Hg(e, t) {
	var n = t ? Fg(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/lodash-es/_initCloneByTag.js
var Ug = "[object Boolean]", Wg = "[object Date]", Gg = "[object Map]", Kg = "[object Number]", qg = "[object RegExp]", Jg = "[object Set]", Yg = "[object String]", Xg = "[object Symbol]", Zg = "[object ArrayBuffer]", Qg = "[object DataView]", $g = "[object Float32Array]", e_ = "[object Float64Array]", t_ = "[object Int8Array]", n_ = "[object Int16Array]", r_ = "[object Int32Array]", i_ = "[object Uint8Array]", a_ = "[object Uint8ClampedArray]", o_ = "[object Uint16Array]", s_ = "[object Uint32Array]";
function c_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Zg: return Fg(e);
		case Ug:
		case Wg: return new r(+e);
		case Qg: return Ig(e, n);
		case $g:
		case e_:
		case t_:
		case n_:
		case r_:
		case i_:
		case a_:
		case o_:
		case s_: return Hg(e, n);
		case Gg: return new r();
		case Kg:
		case Yg: return new r(e);
		case qg: return Rg(e);
		case Jg: return new r();
		case Xg: return Vg(e);
	}
}
//#endregion
//#region ../../node_modules/lodash-es/_baseCreate.js
var l_ = Object.create, u_ = function() {
	function e() {}
	return function(t) {
		if (!qp(t)) return {};
		if (l_) return l_(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/lodash-es/_initCloneObject.js
function d_(e) {
	return typeof e.constructor == "function" && !zh(e) ? u_(Tp(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsMap.js
var f_ = "[object Map]";
function p_(e) {
	return Ep(e) && jg(e) == f_;
}
//#endregion
//#region ../../node_modules/lodash-es/isMap.js
var m_ = void 0, h_ = m_ ? Nh(m_) : p_, g_ = "[object Set]";
function __(e) {
	return Ep(e) && jg(e) == g_;
}
//#endregion
//#region ../../node_modules/lodash-es/isSet.js
var v_ = void 0, y_ = v_ ? Nh(v_) : __, b_ = 1, x_ = 2, S_ = 4, C_ = "[object Arguments]", w_ = "[object Array]", T_ = "[object Boolean]", E_ = "[object Date]", D_ = "[object Error]", O_ = "[object Function]", k_ = "[object GeneratorFunction]", A_ = "[object Map]", j_ = "[object Number]", M_ = "[object Object]", N_ = "[object RegExp]", P_ = "[object Set]", F_ = "[object String]", I_ = "[object Symbol]", L_ = "[object WeakMap]", R_ = "[object ArrayBuffer]", z_ = "[object DataView]", B_ = "[object Float32Array]", V_ = "[object Float64Array]", H_ = "[object Int8Array]", U_ = "[object Int16Array]", W_ = "[object Int32Array]", G_ = "[object Uint8Array]", K_ = "[object Uint8ClampedArray]", q_ = "[object Uint16Array]", J_ = "[object Uint32Array]", Y_ = {};
Y_[C_] = Y_[w_] = Y_[R_] = Y_[z_] = Y_[T_] = Y_[E_] = Y_[B_] = Y_[V_] = Y_[H_] = Y_[U_] = Y_[W_] = Y_[A_] = Y_[j_] = Y_[M_] = Y_[N_] = Y_[P_] = Y_[F_] = Y_[I_] = Y_[G_] = Y_[K_] = Y_[q_] = Y_[J_] = !0, Y_[D_] = Y_[O_] = Y_[L_] = !1;
function X_(e, t, n, r, i, a) {
	var o, s = t & b_, c = t & x_, l = t & S_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!qp(e)) return e;
	var u = Xm(e);
	if (u) {
		if (o = Ng(e), !s) return ng(e, o);
	} else {
		var d = jg(e), f = d == O_ || d == k_;
		if (th(e)) return tg(e, s);
		if (d == M_ || d == C_ || f && !i) {
			if (o = c || f ? {} : d_(e), !s) return c ? dg(e, Xh(o, e)) : cg(e, Gh(o, e));
		} else {
			if (!Y_[d]) return i ? e : {};
			o = c_(e, d, s);
		}
	}
	a ||= new Im();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), y_(e) ? e.forEach(function(r) {
		o.add(X_(r, t, n, r, e, a));
	}) : h_(e) && e.forEach(function(r, i) {
		o.set(i, X_(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? mg : pg : c ? Yh : Wh)(e);
	return Lm(m || e, function(r, i) {
		m && (i = r, r = e[i]), Vm(o, i, X_(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/lodash-es/cloneDeep.js
var Z_ = 1, Q_ = 4;
function $_(e) {
	return X_(e, Z_ | Q_);
}
//#endregion
//#region ../../node_modules/tiny-warning/dist/tiny-warning.esm.js
var ev = /* @__PURE__ */ z((/* @__PURE__ */ I(((e, t) => {
	var n = Array.isArray, r = Object.keys, i = Object.prototype.hasOwnProperty, a = typeof Element < "u";
	function o(e, t) {
		if (e === t) return !0;
		if (e && t && typeof e == "object" && typeof t == "object") {
			var s = n(e), c = n(t), l, u, d;
			if (s && c) {
				if (u = e.length, u != t.length) return !1;
				for (l = u; l-- !== 0;) if (!o(e[l], t[l])) return !1;
				return !0;
			}
			if (s != c) return !1;
			var f = e instanceof Date, p = t instanceof Date;
			if (f != p) return !1;
			if (f && p) return e.getTime() == t.getTime();
			var m = e instanceof RegExp, h = t instanceof RegExp;
			if (m != h) return !1;
			if (m && h) return e.toString() == t.toString();
			var g = r(e);
			if (u = g.length, u !== r(t).length) return !1;
			for (l = u; l-- !== 0;) if (!i.call(t, g[l])) return !1;
			if (a && e instanceof Element && t instanceof Element) return e === t;
			for (l = u; l-- !== 0;) if (d = g[l], !(d === "_owner" && e.$$typeof) && !o(e[d], t[d])) return !1;
			return !0;
		}
		return e !== e && t !== t;
	}
	t.exports = function(e, t) {
		try {
			return o(e, t);
		} catch (e) {
			if (e.message && e.message.match(/stack|recursion/i) || e.number === -2146828260) return console.warn("Warning: react-fast-compare does not handle circular references.", e.name, e.message), !1;
			throw e;
		}
	};
})))()), tv = process.env.NODE_ENV === "production";
function nv(e, t) {
	if (!tv) {
		if (e) return;
		var n = "Warning: " + t;
		typeof console < "u" && console.warn(n);
		try {
			throw Error(n);
		} catch {}
	}
}
//#endregion
//#region ../../node_modules/lodash-es/clone.js
var rv = 4;
function iv(e) {
	return X_(e, rv);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayMap.js
function av(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/lodash-es/isSymbol.js
var ov = "[object Symbol]";
function sv(e) {
	return typeof e == "symbol" || Ep(e) && Cp(e) == ov;
}
//#endregion
//#region ../../node_modules/lodash-es/memoize.js
var cv = "Expected a function";
function lv(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(cv);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (lv.Cache || Nm)(), n;
}
lv.Cache = Nm;
//#endregion
//#region ../../node_modules/lodash-es/_memoizeCapped.js
var uv = 500;
function dv(e) {
	var t = lv(e, function(e) {
		return n.size === uv && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_stringToPath.js
var fv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pv = /\\(\\)?/g, mv = dv(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(fv, function(e, n, r, i) {
		t.push(r ? i.replace(pv, "$1") : n || e);
	}), t;
}), hv = Infinity;
function gv(e) {
	if (typeof e == "string" || sv(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -hv ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseToString.js
var _v = Infinity, vv = fp ? fp.prototype : void 0, yv = vv ? vv.toString : void 0;
function bv(e) {
	if (typeof e == "string") return e;
	if (Xm(e)) return av(e, bv) + "";
	if (sv(e)) return yv ? yv.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -_v ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/toString.js
function xv(e) {
	return e == null ? "" : bv(e);
}
//#endregion
//#region ../../node_modules/lodash-es/toPath.js
function Sv(e) {
	return Xm(e) ? av(e, gv) : sv(e) ? [e] : ng(mv(xv(e)));
}
//#endregion
//#region ../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
var Cv = /* @__PURE__ */ I(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), wv = /* @__PURE__ */ I(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, ee = m, A = r, j = o, M = a, N = f, P = !1;
		function F(e) {
			return P || (P = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), I(e) || x(e) === l;
		}
		function I(e) {
			return x(e) === u;
		}
		function L(e) {
			return x(e) === c;
		}
		function R(e) {
			return x(e) === s;
		}
		function z(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function B(e) {
			return x(e) === d;
		}
		function V(e) {
			return x(e) === i;
		}
		function H(e) {
			return x(e) === h;
		}
		function te(e) {
			return x(e) === m;
		}
		function U(e) {
			return x(e) === r;
		}
		function W(e) {
			return x(e) === o;
		}
		function G(e) {
			return x(e) === a;
		}
		function K(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = ee, e.Portal = A, e.Profiler = j, e.StrictMode = M, e.Suspense = N, e.isAsyncMode = F, e.isConcurrentMode = I, e.isContextConsumer = L, e.isContextProvider = R, e.isElement = z, e.isForwardRef = B, e.isFragment = V, e.isLazy = H, e.isMemo = te, e.isPortal = U, e.isProfiler = W, e.isStrictMode = G, e.isSuspense = K, e.isValidElementType = b, e.typeOf = x;
	})();
})), Tv = /* @__PURE__ */ I(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Cv() : t.exports = wv();
}));
(/* @__PURE__ */ I(((e, t) => {
	var n = Tv(), r = {
		childContextTypes: !0,
		contextType: !0,
		contextTypes: !0,
		defaultProps: !0,
		displayName: !0,
		getDefaultProps: !0,
		getDerivedStateFromError: !0,
		getDerivedStateFromProps: !0,
		mixins: !0,
		propTypes: !0,
		type: !0
	}, i = {
		name: !0,
		length: !0,
		prototype: !0,
		caller: !0,
		callee: !0,
		arguments: !0,
		arity: !0
	}, a = {
		$$typeof: !0,
		render: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0
	}, o = {
		$$typeof: !0,
		compare: !0,
		defaultProps: !0,
		displayName: !0,
		propTypes: !0,
		type: !0
	}, s = {};
	s[n.ForwardRef] = a, s[n.Memo] = o;
	function c(e) {
		return n.isMemo(e) ? o : s[e.$$typeof] || r;
	}
	var l = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, f = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, m = Object.prototype;
	function h(e, t, n) {
		if (typeof t != "string") {
			if (m) {
				var r = p(t);
				r && r !== m && h(e, r, n);
			}
			var a = u(t);
			d && (a = a.concat(d(t)));
			for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
				var _ = a[g];
				if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
					var v = f(t, _);
					try {
						l(e, _, v);
					} catch {}
				}
			}
		}
		return e;
	}
	t.exports = h;
})))();
function Ev() {
	return Ev = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, Ev.apply(this, arguments);
}
function Dv(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Ov(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function kv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Av = /* @__PURE__ */ u(void 0);
Av.displayName = "FormikContext";
var jv = Av.Provider;
Av.Consumer;
function Mv() {
	var e = _(Av);
	return !e && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.")), e;
}
var Nv = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Pv = function(e) {
	return typeof e == "function";
}, Fv = function(e) {
	return typeof e == "object" && !!e;
}, Iv = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Lv = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Rv = function(e) {
	return o.count(e) === 0;
}, zv = function(e) {
	return Fv(e) && Pv(e.then);
};
function Bv(e) {
	if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function Vv(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = Sv(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Hv(e, t, n) {
	for (var r = iv(e), i = r, a = 0, o = Sv(t); a < o.length - 1; a++) {
		var s = o[a], c = Vv(e, o.slice(0, a + 1));
		if (c && (Fv(c) || Array.isArray(c))) i = i[s] = iv(c);
		else {
			var l = o[a + 1];
			i = i[s] = Iv(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Uv(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Fv(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Uv(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Wv(e, t) {
	switch (t.type) {
		case "SET_VALUES": return Ev({}, e, { values: t.payload });
		case "SET_TOUCHED": return Ev({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, ev.default)(e.errors, t.payload) ? e : Ev({}, e, { errors: t.payload });
		case "SET_STATUS": return Ev({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return Ev({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return Ev({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return Ev({}, e, { values: Hv(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return Ev({}, e, { touched: Hv(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return Ev({}, e, { errors: Hv(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return Ev({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return Ev({}, e, {
			touched: Uv(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return Ev({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return Ev({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Gv = {}, Kv = {};
function qv(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, d = Ov(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), f = Ev({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, d), p = w(f.initialValues), m = w(f.initialErrors || Gv), h = w(f.initialTouched || Kv), _ = w(f.initialStatus), y = w(!1), b = w({});
	process.env.NODE_ENV !== "production" && v(function() {
		s !== void 0 && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead."));
	}, []), v(function() {
		return y.current = !0, function() {
			y.current = !1;
		};
	}, []);
	var x = T(0)[1], C = w({
		values: $_(f.initialValues),
		errors: $_(f.initialErrors) || Gv,
		touched: $_(f.initialTouched) || Kv,
		status: $_(f.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), E = C.current, D = g(function(e) {
		var t = C.current;
		C.current = Wv(t, e), t !== C.current && x(function(e) {
			return e + 1;
		});
	}, []), O = g(function(e, t) {
		return new Promise(function(n, r) {
			var i = f.validate(e, t);
			i == null ? n(Gv) : zv(i) ? i.then(function(e) {
				n(e || Gv);
			}, function(e) {
				process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", e), r(e);
			}) : n(i);
		});
	}, [f.validate]), k = g(function(e, t) {
		var n = f.validationSchema, r = Pv(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Zv(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Gv);
			}, function(n) {
				n.name === "ValidationError" ? e(Xv(n)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", n), t(n));
			});
		});
	}, [f.validationSchema]), ee = g(function(e, t) {
		return new Promise(function(n) {
			return n(b.current[e].validate(t));
		});
	}, []), A = g(function(e) {
		var t = Object.keys(b.current).filter(function(e) {
			return Pv(b.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return ee(t, Vv(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Hv(e, t[r], n)), e;
			}, {});
		});
	}, [ee]), j = g(function(e) {
		return Promise.all([
			A(e),
			f.validationSchema ? k(e) : {},
			f.validate ? O(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return cp.all([
				t,
				n,
				r
			], { arrayMerge: $v });
		});
	}, [
		f.validate,
		f.validationSchema,
		A,
		O,
		k
	]), M = ry(function(e) {
		return e === void 0 && (e = E.values), D({
			type: "SET_ISVALIDATING",
			payload: !0
		}), j(e).then(function(e) {
			return y.current && (D({
				type: "SET_ISVALIDATING",
				payload: !1
			}), D({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	v(function() {
		o && y.current === !0 && (0, ev.default)(p.current, f.initialValues) && M(p.current);
	}, [o, M]);
	var N = g(function(e) {
		var t = e && e.values ? e.values : p.current, n = e && e.errors ? e.errors : m.current ? m.current : f.initialErrors || {}, r = e && e.touched ? e.touched : h.current ? h.current : f.initialTouched || {}, i = e && e.status ? e.status : _.current ? _.current : f.initialStatus;
		p.current = t, m.current = n, h.current = r, _.current = i;
		var a = function() {
			D({
				type: "RESET_FORM",
				payload: {
					isSubmitting: !!e && !!e.isSubmitting,
					errors: n,
					touched: r,
					status: i,
					values: t,
					isValidating: !!e && !!e.isValidating,
					submitCount: e && e.submitCount && typeof e.submitCount == "number" ? e.submitCount : 0
				}
			});
		};
		if (f.onReset) {
			var o = f.onReset(E.values, oe);
			zv(o) ? o.then(a) : a();
		} else a();
	}, [
		f.initialErrors,
		f.initialStatus,
		f.initialTouched,
		f.onReset
	]);
	v(function() {
		y.current === !0 && !(0, ev.default)(p.current, f.initialValues) && l && (p.current = f.initialValues, N(), o && M(p.current));
	}, [
		l,
		f.initialValues,
		N,
		o,
		M
	]), v(function() {
		l && y.current === !0 && !(0, ev.default)(m.current, f.initialErrors) && (m.current = f.initialErrors || Gv, D({
			type: "SET_ERRORS",
			payload: f.initialErrors || Gv
		}));
	}, [l, f.initialErrors]), v(function() {
		l && y.current === !0 && !(0, ev.default)(h.current, f.initialTouched) && (h.current = f.initialTouched || Kv, D({
			type: "SET_TOUCHED",
			payload: f.initialTouched || Kv
		}));
	}, [l, f.initialTouched]), v(function() {
		l && y.current === !0 && !(0, ev.default)(_.current, f.initialStatus) && (_.current = f.initialStatus, D({
			type: "SET_STATUS",
			payload: f.initialStatus
		}));
	}, [
		l,
		f.initialStatus,
		f.initialTouched
	]);
	var P = ry(function(e) {
		if (b.current[e] && Pv(b.current[e].validate)) {
			var t = Vv(E.values, e), n = b.current[e].validate(t);
			return zv(n) ? (D({
				type: "SET_ISVALIDATING",
				payload: !0
			}), n.then(function(e) {
				return e;
			}).then(function(t) {
				D({
					type: "SET_FIELD_ERROR",
					payload: {
						field: e,
						value: t
					}
				}), D({
					type: "SET_ISVALIDATING",
					payload: !1
				});
			})) : (D({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: n
				}
			}), Promise.resolve(n));
		} else if (f.validationSchema) return D({
			type: "SET_ISVALIDATING",
			payload: !0
		}), k(E.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			D({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: Vv(t, e)
				}
			}), D({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), F = g(function(e, t) {
		var n = t.validate;
		b.current[e] = { validate: n };
	}, []), I = g(function(e) {
		delete b.current[e];
	}, []), L = ry(function(e, t) {
		return D({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? M(E.values) : Promise.resolve();
	}), R = g(function(e) {
		D({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), z = ry(function(e, t) {
		var r = Pv(e) ? e(E.values) : e;
		return D({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? M(r) : Promise.resolve();
	}), B = g(function(e, t) {
		D({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), V = ry(function(e, t, r) {
		return D({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: t
			}
		}), (r === void 0 ? n : r) ? M(Hv(E.values, e, t)) : Promise.resolve();
	}), H = g(function(e, t) {
		var n = t, r = e, i;
		if (!Lv(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked, d = a.outerHTML, f = a.options, p = a.multiple;
			n = t || s || c, !n && process.env.NODE_ENV !== "production" && Yv({
				htmlContent: d,
				documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
				handlerName: "handleChange"
			}), r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? ty(Vv(E.values, n), u, l) : f && p ? ey(f) : l;
		}
		n && V(n, r);
	}, [V, E.values]), te = ry(function(e) {
		if (Lv(e)) return function(t) {
			return H(t, e);
		};
		H(e);
	}), U = ry(function(e, t, n) {
		return t === void 0 && (t = !0), D({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? M(E.values) : Promise.resolve();
	}), W = g(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id, a = n.outerHTML, o = t || r || i;
		!o && process.env.NODE_ENV !== "production" && Yv({
			htmlContent: a,
			documentationAnchorLink: "handleblur-e-any--void",
			handlerName: "handleBlur"
		}), U(o, !0);
	}, [U]), G = ry(function(e) {
		if (Lv(e)) return function(t) {
			return W(t, e);
		};
		W(e);
	}), K = g(function(e) {
		Pv(e) ? D({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : D({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ne = g(function(e) {
		D({
			type: "SET_STATUS",
			payload: e
		});
	}, []), re = g(function(e) {
		D({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), ie = ry(function() {
		return D({ type: "SUBMIT_ATTEMPT" }), M().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = se(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return y.current && D({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (y.current) throw D({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (y.current && (D({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), ae = ry(function(e) {
		if (e && e.preventDefault && Pv(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Pv(e.stopPropagation) && e.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
			var t = Bv();
			t !== null && t instanceof HTMLButtonElement && !(t.attributes && t.attributes.getNamedItem("type")) && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type=\"submit\"`. If this is not a submit button, please add `type=\"button\"`."));
		}
		ie().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), oe = {
		resetForm: N,
		validateForm: M,
		validateField: P,
		setErrors: R,
		setFieldError: B,
		setFieldTouched: U,
		setFieldValue: V,
		setStatus: ne,
		setSubmitting: re,
		setTouched: L,
		setValues: z,
		setFormikState: K,
		submitForm: ie
	}, se = ry(function() {
		return u(E.values, oe);
	}), ce = ry(function(e) {
		e && e.preventDefault && Pv(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Pv(e.stopPropagation) && e.stopPropagation(), N();
	}), le = g(function(e) {
		return {
			value: Vv(E.values, e),
			error: Vv(E.errors, e),
			touched: !!Vv(E.touched, e),
			initialValue: Vv(p.current, e),
			initialTouched: !!Vv(h.current, e),
			initialError: Vv(m.current, e)
		};
	}, [
		E.errors,
		E.touched,
		E.values
	]), ue = g(function(e) {
		return {
			setValue: function(t, n) {
				return V(e, t, n);
			},
			setTouched: function(t, n) {
				return U(e, t, n);
			},
			setError: function(t) {
				return B(e, t);
			}
		};
	}, [
		V,
		U,
		B
	]), de = g(function(e) {
		var t = Fv(e), n = t ? e.name : e, r = Vv(E.values, n), i = {
			name: n,
			value: r,
			onChange: te,
			onBlur: G
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		G,
		te,
		E.values
	]), fe = S(function() {
		return !(0, ev.default)(p.current, E.values);
	}, [p.current, E.values]), q = S(function() {
		return s === void 0 || fe ? E.errors && Object.keys(E.errors).length === 0 : s !== !1 && Pv(s) ? s(f) : s;
	}, [
		s,
		fe,
		E.errors,
		f
	]);
	return Ev({}, E, {
		initialValues: p.current,
		initialErrors: m.current,
		initialTouched: h.current,
		initialStatus: _.current,
		handleBlur: G,
		handleChange: te,
		handleReset: ce,
		handleSubmit: ae,
		resetForm: N,
		setErrors: R,
		setFormikState: K,
		setFieldTouched: U,
		setFieldValue: V,
		setFieldError: B,
		setStatus: ne,
		setSubmitting: re,
		setTouched: L,
		setValues: z,
		submitForm: ie,
		validateForm: M,
		validateField: P,
		isValid: q,
		dirty: fe,
		unregisterField: I,
		registerField: F,
		getFieldProps: de,
		getFieldMeta: le,
		getFieldHelpers: ue,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Jv(e) {
	var t = qv(e), n = e.component, r = e.children, i = e.render, a = e.innerRef;
	return b(a, function() {
		return t;
	}), process.env.NODE_ENV !== "production" && v(function() {
		e.render && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>"));
	}, []), d(jv, { value: t }, n ? d(n, t) : i ? i(t) : r ? Pv(r) ? r(t) : Rv(r) ? null : o.only(r) : null);
}
function Yv(e) {
	var t = e.htmlContent, n = e.documentationAnchorLink, r = e.handlerName;
	console.warn("Warning: Formik called `" + r + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + n + "\n  ");
}
function Xv(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Hv(t, e.path, e.message);
		for (var n = e.inner, r = Array.isArray(n), i = 0, n = r ? n : n[Symbol.iterator]();;) {
			var a;
			if (r) {
				if (i >= n.length) break;
				a = n[i++];
			} else {
				if (i = n.next(), i.done) break;
				a = i.value;
			}
			var o = a;
			Vv(t, o.path) || (t = Hv(t, o.path, o.message));
		}
	}
	return t;
}
function Zv(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Qv(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Qv(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Np(e) ? Qv(e) : e === "" ? void 0 : e;
		}) : Np(e[r]) ? t[r] = Qv(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function $v(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? cp(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = cp(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function ey(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function ty(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var ny = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? x : v;
function ry(e) {
	var t = w(e);
	return ny(function() {
		t.current = e;
	}), g(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function iy(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, s = e.className, c = Ov(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), l = Ov(Mv(), ["validate", "validationSchema"]);
	process.env.NODE_ENV !== "production" && v(function() {
		r && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + n + "\" render={({field, form}) => ...} /> with <Field name=\"" + n + "\">{({field, form, meta}) => ...}</Field>")), a && i && Pv(i) && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.")), o && i && Pv(i) && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.")), r && i && !Rv(i) && (process.env.NODE_ENV === "production" ? nv(!1) : nv(!1, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored"));
	}, []);
	var u = l.registerField, f = l.unregisterField;
	v(function() {
		return u(n, { validate: t }), function() {
			f(n);
		};
	}, [
		u,
		f,
		n,
		t
	]);
	var p = l.getFieldProps(Ev({ name: n }, c)), m = l.getFieldMeta(n), h = {
		field: p,
		form: l
	};
	if (r) return r(Ev({}, h, { meta: m }));
	if (Pv(i)) return i(Ev({}, h, { meta: m }));
	if (o) {
		if (typeof o == "string") {
			var g = c.innerRef, _ = Ov(c, ["innerRef"]);
			return d(o, Ev({ ref: g }, p, _, { className: s }), i);
		}
		return d(o, Ev({
			field: p,
			form: l
		}, c, { className: s }), i);
	}
	var y = a || "input";
	if (typeof y == "string") {
		var b = c.innerRef, x = Ov(c, ["innerRef"]);
		return d(y, Ev({ ref: b }, p, x, { className: s }), i);
	}
	return d(y, Ev({}, p, c, { className: s }), i);
}
var ay = /* @__PURE__ */ f(function(e, t) {
	var n = e.action, r = Ov(e, ["action"]), i = n ?? "#", a = Mv(), o = a.handleReset, s = a.handleSubmit;
	return d("form", Ev({
		onSubmit: s,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
ay.displayName = "Form";
var oy = function(e, t, n) {
	var r = uy(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, sy = function(e, t, n) {
	var r = uy(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, cy = function(e, t, n) {
	var r = uy(e);
	return r.splice(t, 0, n), r;
}, ly = function(e, t, n) {
	var r = uy(e);
	return r[t] = n, r;
}, uy = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(Ev({}, e, { length: t + 1 }));
}, dy = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Fv(e) ? n(uy(e)) : e;
	};
}, fy = /* @__PURE__ */ function(e) {
	Dv(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = dy(r, e), o = dy(t, e), s = Hv(n.values, a, e(Vv(n.values, a))), c = r ? i(Vv(n.errors, a)) : void 0, l = t ? o(Vv(n.touched, a)) : void 0;
				return Nv(c) && (c = void 0), Nv(l) && (l = void 0), Ev({}, n, {
					values: s,
					errors: r ? Hv(n.errors, a, c) : n.errors,
					touched: t ? Hv(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(uy(t), [$_(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return sy(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return oy(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return cy(n, e, t);
			}, function(t) {
				return cy(t, e, null);
			}, function(t) {
				return cy(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return ly(n, e, t);
			}, !1, !1);
		}, n.handleReplace = function(e, t) {
			return function() {
				return n.replace(e, t);
			};
		}, n.unshift = function(e) {
			var t = -1;
			return n.updateArrayField(function(n) {
				var r = n ? [e].concat(n) : [e];
				return t = r.length, r;
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}, function(e) {
				return e ? [null].concat(e) : [null];
			}), t;
		}, n.handleUnshift = function(e) {
			return function() {
				return n.unshift(e);
			};
		}, n.handleRemove = function(e) {
			return function() {
				return n.remove(e);
			};
		}, n.handlePop = function() {
			return function() {
				return n.pop();
			};
		}, n.remove = n.remove.bind(kv(n)), n.pop = n.pop.bind(kv(n)), n;
	}
	var n = t.prototype;
	return n.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, ev.default)(Vv(e.formik.values, e.name), Vv(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, n.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? uy(n) : [];
			return t ||= r[e], Pv(r.splice) && r.splice(e, 1), Pv(r.every) && r.every(function(e) {
				return e === void 0;
			}) ? [] : r;
		}, !0, !0), t;
	}, n.pop = function() {
		var e;
		return this.updateArrayField(function(t) {
			var n = t.slice();
			return e ||= n && n.pop && n.pop(), n;
		}, !0, !0), e;
	}, n.render = function() {
		var e = {
			push: this.push,
			pop: this.pop,
			swap: this.swap,
			move: this.move,
			insert: this.insert,
			replace: this.replace,
			unshift: this.unshift,
			remove: this.remove,
			handlePush: this.handlePush,
			handlePop: this.handlePop,
			handleSwap: this.handleSwap,
			handleMove: this.handleMove,
			handleInsert: this.handleInsert,
			handleReplace: this.handleReplace,
			handleUnshift: this.handleUnshift,
			handleRemove: this.handleRemove
		}, t = this.props, n = t.component, r = t.render, i = t.children, a = t.name, s = t.formik, c = Ov(s, ["validate", "validationSchema"]), l = Ev({}, e, {
			form: c,
			name: a
		});
		return n ? d(n, l) : r ? r(l) : i ? typeof i == "function" ? i(l) : Rv(i) ? null : o.only(i) : null;
	}, t;
}(s);
fy.defaultProps = { validateOnChange: !0 };
//#endregion
//#region ../../node_modules/comma-separated-tokens/index.js
function py(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region ../../node_modules/estree-util-is-identifier-name/lib/index.js
var my = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, hy = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, gy = {};
function _y(e, t) {
	return ((t || gy).jsx ? hy : my).test(e);
}
//#endregion
//#region ../../node_modules/hast-util-whitespace/lib/index.js
var vy = /[ \t\n\f\r]/g;
function yy(e) {
	return typeof e == "object" ? e.type === "text" ? by(e.value) : !1 : by(e);
}
function by(e) {
	return e.replace(vy, "") === "";
}
//#endregion
//#region ../../node_modules/property-information/lib/util/schema.js
var xy = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
xy.prototype.normal = {}, xy.prototype.property = {}, xy.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/merge.js
function Sy(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new xy(n, r, t);
}
//#endregion
//#region ../../node_modules/property-information/lib/normalize.js
function Cy(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../../node_modules/property-information/lib/util/info.js
var wy = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
wy.prototype.attribute = "", wy.prototype.booleanish = !1, wy.prototype.boolean = !1, wy.prototype.commaOrSpaceSeparated = !1, wy.prototype.commaSeparated = !1, wy.prototype.defined = !1, wy.prototype.mustUseProperty = !1, wy.prototype.number = !1, wy.prototype.overloadedBoolean = !1, wy.prototype.property = "", wy.prototype.spaceSeparated = !1, wy.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/types.js
var Ty = /* @__PURE__ */ L({
	boolean: () => Dy,
	booleanish: () => Oy,
	commaOrSpaceSeparated: () => My,
	commaSeparated: () => jy,
	number: () => $,
	overloadedBoolean: () => ky,
	spaceSeparated: () => Ay
}), Ey = 0, Dy = Ny(), Oy = Ny(), ky = Ny(), $ = Ny(), Ay = Ny(), jy = Ny(), My = Ny();
function Ny() {
	return 2 ** ++Ey;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/defined-info.js
var Py = Object.keys(Ty), Fy = class extends wy {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Iy(this, "space", r), typeof n == "number") for (; ++i < Py.length;) {
			let e = Py[i];
			Iy(this, Py[i], (n & Ty[e]) === Ty[e]);
		}
	}
};
Fy.prototype.defined = !0;
function Iy(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../../node_modules/property-information/lib/util/create.js
function Ly(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Fy(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[Cy(r)] = r, n[Cy(a.attribute)] = r;
	}
	return new xy(t, n, e.space);
}
//#endregion
//#region ../../node_modules/property-information/lib/aria.js
var Ry = Ly({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: Oy,
		ariaAutoComplete: null,
		ariaBusy: Oy,
		ariaChecked: Oy,
		ariaColCount: $,
		ariaColIndex: $,
		ariaColSpan: $,
		ariaControls: Ay,
		ariaCurrent: null,
		ariaDescribedBy: Ay,
		ariaDetails: null,
		ariaDisabled: Oy,
		ariaDropEffect: Ay,
		ariaErrorMessage: null,
		ariaExpanded: Oy,
		ariaFlowTo: Ay,
		ariaGrabbed: Oy,
		ariaHasPopup: null,
		ariaHidden: Oy,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Ay,
		ariaLevel: $,
		ariaLive: null,
		ariaModal: Oy,
		ariaMultiLine: Oy,
		ariaMultiSelectable: Oy,
		ariaOrientation: null,
		ariaOwns: Ay,
		ariaPlaceholder: null,
		ariaPosInSet: $,
		ariaPressed: Oy,
		ariaReadOnly: Oy,
		ariaRelevant: null,
		ariaRequired: Oy,
		ariaRoleDescription: Ay,
		ariaRowCount: $,
		ariaRowIndex: $,
		ariaRowSpan: $,
		ariaSelected: Oy,
		ariaSetSize: $,
		ariaSort: null,
		ariaValueMax: $,
		ariaValueMin: $,
		ariaValueNow: $,
		ariaValueText: null,
		role: null
	},
	transform(e, t) {
		return t === "role" ? t : "aria-" + t.slice(4).toLowerCase();
	}
});
//#endregion
//#region ../../node_modules/property-information/lib/util/case-sensitive-transform.js
function zy(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/case-insensitive-transform.js
function By(e, t) {
	return zy(e, t.toLowerCase());
}
//#endregion
//#region ../../node_modules/property-information/lib/html.js
var Vy = Ly({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: jy,
		acceptCharset: Ay,
		accessKey: Ay,
		action: null,
		allow: null,
		allowFullScreen: Dy,
		allowPaymentRequest: Dy,
		allowUserMedia: Dy,
		alt: null,
		as: null,
		async: Dy,
		autoCapitalize: null,
		autoComplete: Ay,
		autoFocus: Dy,
		autoPlay: Dy,
		blocking: Ay,
		capture: null,
		charSet: null,
		checked: Dy,
		cite: null,
		className: Ay,
		cols: $,
		colSpan: null,
		content: null,
		contentEditable: Oy,
		controls: Dy,
		controlsList: Ay,
		coords: $ | jy,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: Dy,
		defer: Dy,
		dir: null,
		dirName: null,
		disabled: Dy,
		download: ky,
		draggable: Oy,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: Dy,
		formTarget: null,
		headers: Ay,
		height: $,
		hidden: ky,
		high: $,
		href: null,
		hrefLang: null,
		htmlFor: Ay,
		httpEquiv: Ay,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: Dy,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: Dy,
		itemId: null,
		itemProp: Ay,
		itemRef: Ay,
		itemScope: Dy,
		itemType: Ay,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: Dy,
		low: $,
		manifest: null,
		max: null,
		maxLength: $,
		media: null,
		method: null,
		min: null,
		minLength: $,
		multiple: Dy,
		muted: Dy,
		name: null,
		nonce: null,
		noModule: Dy,
		noValidate: Dy,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: Dy,
		optimum: $,
		pattern: null,
		ping: Ay,
		placeholder: null,
		playsInline: Dy,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: Dy,
		referrerPolicy: null,
		rel: Ay,
		required: Dy,
		reversed: Dy,
		rows: $,
		rowSpan: $,
		sandbox: Ay,
		scope: null,
		scoped: Dy,
		seamless: Dy,
		selected: Dy,
		shadowRootClonable: Dy,
		shadowRootDelegatesFocus: Dy,
		shadowRootMode: null,
		shape: null,
		size: $,
		sizes: null,
		slot: null,
		span: $,
		spellCheck: Oy,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: $,
		step: null,
		style: null,
		tabIndex: $,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: Dy,
		useMap: null,
		value: Oy,
		width: $,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Ay,
		axis: null,
		background: null,
		bgColor: null,
		border: $,
		borderColor: null,
		bottomMargin: $,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: Dy,
		declare: Dy,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: $,
		leftMargin: $,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: $,
		marginWidth: $,
		noResize: Dy,
		noHref: Dy,
		noShade: Dy,
		noWrap: Dy,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: $,
		rules: null,
		scheme: null,
		scrolling: Oy,
		standby: null,
		summary: null,
		text: null,
		topMargin: $,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: $,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		disablePictureInPicture: Dy,
		disableRemotePlayback: Dy,
		prefix: null,
		property: null,
		results: $,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: By
}), Hy = Ly({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: My,
		accentHeight: $,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: $,
		amplitude: $,
		arabicForm: null,
		ascent: $,
		attributeName: null,
		attributeType: null,
		azimuth: $,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: $,
		by: null,
		calcMode: null,
		capHeight: $,
		className: Ay,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: $,
		diffuseConstant: $,
		direction: null,
		display: null,
		dur: null,
		divisor: $,
		dominantBaseline: null,
		download: Dy,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: $,
		enableBackground: null,
		end: null,
		event: null,
		exponent: $,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: $,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: jy,
		g2: jy,
		glyphName: jy,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: $,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: $,
		horizOriginX: $,
		horizOriginY: $,
		id: null,
		ideographic: $,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: $,
		k: $,
		k1: $,
		k2: $,
		k3: $,
		k4: $,
		kernelMatrix: My,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: $,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: $,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: $,
		overlineThickness: $,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: $,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: Ay,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: $,
		pointsAtY: $,
		pointsAtZ: $,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: My,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: My,
		rev: My,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: My,
		requiredFeatures: My,
		requiredFonts: My,
		requiredFormats: My,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: $,
		specularExponent: $,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: $,
		strikethroughThickness: $,
		string: null,
		stroke: null,
		strokeDashArray: My,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: $,
		strokeOpacity: $,
		strokeWidth: null,
		style: null,
		surfaceScale: $,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: My,
		tabIndex: $,
		tableValues: null,
		target: null,
		targetX: $,
		targetY: $,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: My,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: $,
		underlineThickness: $,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: $,
		values: null,
		vAlphabetic: $,
		vMathematical: $,
		vectorEffect: null,
		vHanging: $,
		vIdeographic: $,
		version: null,
		vertAdvY: $,
		vertOriginX: $,
		vertOriginY: $,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: $,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: zy
}), Uy = Ly({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(e, t) {
		return "xlink:" + t.slice(5).toLowerCase();
	}
}), Wy = Ly({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: By
}), Gy = Ly({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Ky = {
	classId: "classID",
	dataType: "datatype",
	itemId: "itemID",
	strokeDashArray: "strokeDasharray",
	strokeDashOffset: "strokeDashoffset",
	strokeLineCap: "strokeLinecap",
	strokeLineJoin: "strokeLinejoin",
	strokeMiterLimit: "strokeMiterlimit",
	typeOf: "typeof",
	xLinkActuate: "xlinkActuate",
	xLinkArcRole: "xlinkArcrole",
	xLinkHref: "xlinkHref",
	xLinkRole: "xlinkRole",
	xLinkShow: "xlinkShow",
	xLinkTitle: "xlinkTitle",
	xLinkType: "xlinkType",
	xmlnsXLink: "xmlnsXlink"
}, qy = /[A-Z]/g, Jy = /-[a-z]/g, Yy = /^data[-\w.:]+$/i;
function Xy(e, t) {
	let n = Cy(t), r = t, i = wy;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && Yy.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Jy, Qy);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Jy.test(e)) {
				let n = e.replace(qy, Zy);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Fy;
	}
	return new i(r, t);
}
function Zy(e) {
	return "-" + e.toLowerCase();
}
function Qy(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../../node_modules/property-information/index.js
var $y = Sy([
	Ry,
	Vy,
	Uy,
	Wy,
	Gy
], "html"), eb = Sy([
	Ry,
	Hy,
	Uy,
	Wy,
	Gy
], "svg");
//#endregion
//#region ../../node_modules/space-separated-tokens/index.js
function tb(e) {
	return e.join(" ").trim();
}
//#endregion
//#region ../../node_modules/inline-style-parser/cjs/index.js
var nb = /* @__PURE__ */ I(((e, t) => {
	var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, r = /\n/g, i = /^\s*/, a = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, o = /^:\s*/, s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, c = /^[;\s]*/, l = /^\s+|\s+$/g, u = "\n", d = "/", f = "*", p = "", m = "comment", h = "declaration";
	function g(e, t) {
		if (typeof e != "string") throw TypeError("First argument must be a string");
		if (!e) return [];
		t ||= {};
		var l = 1, g = 1;
		function v(e) {
			var t = e.match(r);
			t && (l += t.length);
			var n = e.lastIndexOf(u);
			g = ~n ? e.length - n : g + e.length;
		}
		function y() {
			var e = {
				line: l,
				column: g
			};
			return function(t) {
				return t.position = new b(e), C(), t;
			};
		}
		function b(e) {
			this.start = e, this.end = {
				line: l,
				column: g
			}, this.source = t.source;
		}
		b.prototype.content = e;
		function x(n) {
			var r = /* @__PURE__ */ Error(t.source + ":" + l + ":" + g + ": " + n);
			if (r.reason = n, r.filename = t.source, r.line = l, r.column = g, r.source = e, !t.silent) throw r;
		}
		function S(t) {
			var n = t.exec(e);
			if (n) {
				var r = n[0];
				return v(r), e = e.slice(r.length), n;
			}
		}
		function C() {
			S(i);
		}
		function w(e) {
			var t;
			for (e ||= []; t = T();) t !== !1 && e.push(t);
			return e;
		}
		function T() {
			var t = y();
			if (!(d != e.charAt(0) || f != e.charAt(1))) {
				for (var n = 2; p != e.charAt(n) && (f != e.charAt(n) || d != e.charAt(n + 1));) ++n;
				if (n += 2, p === e.charAt(n - 1)) return x("End of comment missing");
				var r = e.slice(2, n - 2);
				return g += 2, v(r), e = e.slice(n), g += 2, t({
					type: m,
					comment: r
				});
			}
		}
		function E() {
			var e = y(), t = S(a);
			if (t) {
				if (T(), !S(o)) return x("property missing ':'");
				var r = S(s), i = e({
					type: h,
					property: _(t[0].replace(n, p)),
					value: r ? _(r[0].replace(n, p)) : p
				});
				return S(c), i;
			}
		}
		function D() {
			var e = [];
			w(e);
			for (var t; t = E();) t !== !1 && (e.push(t), w(e));
			return e;
		}
		return C(), D();
	}
	function _(e) {
		return e ? e.replace(l, p) : p;
	}
	t.exports = g;
})), rb = /* @__PURE__ */ I(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(nb());
	function r(e, t) {
		let r = null;
		if (!e || typeof e != "string") return r;
		let i = (0, n.default)(e), a = typeof t == "function";
		return i.forEach((e) => {
			if (e.type !== "declaration") return;
			let { property: n, value: i } = e;
			a ? t(n, i, e) : i && (r ||= {}, r[n] = i);
		}), r;
	}
})), ib = /* @__PURE__ */ I(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.camelCase = void 0;
	var t = /^--[a-zA-Z0-9_-]+$/, n = /-([a-z])/g, r = /^[^-]+$/, i = /^-(webkit|moz|ms|o|khtml)-/, a = /^-(ms)-/, o = function(e) {
		return !e || r.test(e) || t.test(e);
	}, s = function(e, t) {
		return t.toUpperCase();
	}, c = function(e, t) {
		return `${t}-`;
	};
	e.camelCase = function(e, t) {
		return t === void 0 && (t = {}), o(e) ? e : (e = e.toLowerCase(), e = t.reactCompat ? e.replace(a, c) : e.replace(i, c), e.replace(n, s));
	};
})), ab = /* @__PURE__ */ I(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(rb()), r = ib();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), ob = cb("end"), sb = cb("start");
function cb(e) {
	return t;
	function t(t) {
		let n = t && t.position && t.position[e] || {};
		if (typeof n.line == "number" && n.line > 0 && typeof n.column == "number" && n.column > 0) return {
			line: n.line,
			column: n.column,
			offset: typeof n.offset == "number" && n.offset > -1 ? n.offset : void 0
		};
	}
}
function lb(e) {
	let t = sb(e), n = ob(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region ../../node_modules/unist-util-stringify-position/lib/index.js
function ub(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? fb(e.position) : "start" in e || "end" in e ? fb(e) : "line" in e || "column" in e ? db(e) : "";
}
function db(e) {
	return pb(e && e.line) + ":" + pb(e && e.column);
}
function fb(e) {
	return db(e && e.start) + "-" + db(e && e.end);
}
function pb(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region ../../node_modules/vfile-message/lib/index.js
var mb = class extends Error {
	constructor(e, t, n) {
		super(), typeof t == "string" && (n = t, t = void 0);
		let r = "", i = {}, a = !1;
		if (t && (i = "line" in t && "column" in t || "start" in t && "end" in t ? { place: t } : "type" in t ? {
			ancestors: [t],
			place: t.position
		} : { ...t }), typeof e == "string" ? r = e : !i.cause && e && (a = !0, r = e.message, i.cause = e), !i.ruleId && !i.source && typeof n == "string") {
			let e = n.indexOf(":");
			e === -1 ? i.ruleId = n : (i.source = n.slice(0, e), i.ruleId = n.slice(e + 1));
		}
		if (!i.place && i.ancestors && i.ancestors) {
			let e = i.ancestors[i.ancestors.length - 1];
			e && (i.place = e.position);
		}
		let o = i.place && "start" in i.place ? i.place.start : i.place;
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = ub(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
mb.prototype.file = "", mb.prototype.name = "", mb.prototype.reason = "", mb.prototype.message = "", mb.prototype.stack = "", mb.prototype.column = void 0, mb.prototype.line = void 0, mb.prototype.ancestors = void 0, mb.prototype.cause = void 0, mb.prototype.fatal = void 0, mb.prototype.place = void 0, mb.prototype.ruleId = void 0, mb.prototype.source = void 0;
//#endregion
//#region ../../node_modules/hast-util-to-jsx-runtime/lib/index.js
var hb = /* @__PURE__ */ z(ab(), 1), gb = {}.hasOwnProperty, _b = /* @__PURE__ */ new Map(), vb = /[A-Z]/g, yb = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), bb = new Set(["td", "th"]), xb = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function Sb(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = Nb(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = Mb(n, t.jsx, t.jsxs);
	}
	let i = {
		Fragment: t.Fragment,
		ancestors: [],
		components: t.components || {},
		create: r,
		elementAttributeNameCase: t.elementAttributeNameCase || "react",
		evaluater: t.createEvaluater ? t.createEvaluater() : void 0,
		filePath: n,
		ignoreInvalidStyle: t.ignoreInvalidStyle || !1,
		passKeys: t.passKeys !== !1,
		passNode: t.passNode || !1,
		schema: t.space === "svg" ? eb : $y,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = Cb(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function Cb(e, t, n) {
	if (t.type === "element") return wb(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Tb(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Db(e, t, n);
	if (t.type === "mdxjsEsm") return Eb(e, t);
	if (t.type === "root") return Ob(e, t, n);
	if (t.type === "text") return kb(e, t);
}
function wb(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = eb, e.schema = i), e.ancestors.push(t);
	let a = zb(e, t.tagName, !1), o = Pb(e, t), s = Ib(e, t);
	return yb.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !yy(e) : !0;
	})), Ab(e, o, a, t), jb(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Tb(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Bb(e, t.position);
}
function Eb(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Bb(e, t.position);
}
function Db(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = eb, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : zb(e, t.name, !0), o = Fb(e, t), s = Ib(e, t);
	return Ab(e, o, a, t), jb(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Ob(e, t, n) {
	let r = {};
	return jb(r, Ib(e, t)), e.create(t, e.Fragment, r, n);
}
function kb(e, t) {
	return t.value;
}
function Ab(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function jb(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function Mb(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function Nb(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = sb(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Pb(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && gb.call(t.properties, i)) {
		let a = Lb(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && bb.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Fb(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else Bb(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else Bb(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Ib(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : _b;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = Cb(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Lb(e, t, n) {
	let r = Xy(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? py(n) : tb(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Rb(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = Vb(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Ky[r.property] || r.property : r.attribute, n];
	}
}
function Rb(e, t) {
	try {
		return (0, hb.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new mb("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = xb + "#cannot-parse-style-attribute", r;
	}
}
function zb(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = _y(e[n]) ? {
				type: "Identifier",
				name: e[n]
			} : {
				type: "Literal",
				value: e[n]
			};
			i = i ? {
				type: "MemberExpression",
				object: i,
				property: t,
				computed: !!(n && t.type === "Literal"),
				optional: !1
			} : t;
		}
		r = i;
	} else r = _y(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return gb.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Bb(e);
}
function Bb(e, t) {
	let n = new mb("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = xb + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Vb(e) {
	let t = {}, n;
	for (n in e) gb.call(e, n) && (t[Hb(n)] = e[n]);
	return t;
}
function Hb(e) {
	let t = e.replace(vb, Ub);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Ub(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region ../../node_modules/html-url-attributes/lib/index.js
var Wb = {
	action: ["form"],
	cite: [
		"blockquote",
		"del",
		"ins",
		"q"
	],
	data: ["object"],
	formAction: ["button", "input"],
	href: [
		"a",
		"area",
		"base",
		"link"
	],
	icon: ["menuitem"],
	itemId: null,
	manifest: ["html"],
	ping: ["a", "area"],
	poster: ["video"],
	src: [
		"audio",
		"embed",
		"iframe",
		"img",
		"input",
		"script",
		"source",
		"track",
		"video"
	]
}, Gb = {};
function Kb(e, t) {
	let n = t || Gb;
	return qb(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function qb(e, t, n) {
	if (Yb(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Jb(e.children, t, n);
	}
	return Array.isArray(e) ? Jb(e, t, n) : "";
}
function Jb(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = qb(e[i], t, n);
	return r.join("");
}
function Yb(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../../node_modules/decode-named-character-reference/index.dom.js
var Xb = document.createElement("i");
function Zb(e) {
	let t = "&" + e + ";";
	Xb.innerHTML = t;
	let n = Xb.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region ../../node_modules/micromark-util-chunked/index.js
function Qb(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function $b(e, t) {
	return e.length > 0 ? (Qb(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/micromark-util-combine-extensions/index.js
var ex = {}.hasOwnProperty;
function tx(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) nx(t, e[n]);
	return t;
}
function nx(e, t) {
	let n;
	for (n in t) {
		let r = (ex.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			ex.call(r, a) || (r[a] = []);
			let e = i[a];
			rx(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function rx(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Qb(e, 0, 0, r);
}
//#endregion
//#region ../../node_modules/micromark-util-decode-numeric-character-reference/index.js
function ix(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/micromark-util-normalize-identifier/index.js
function ax(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/micromark-util-character/index.js
var ox = vx(/[A-Za-z]/), sx = vx(/[\dA-Za-z]/), cx = vx(/[#-'*+\--9=?A-Z^-~]/);
function lx(e) {
	return e !== null && (e < 32 || e === 127);
}
var ux = vx(/\d/), dx = vx(/[\dA-Fa-f]/), fx = vx(/[!-/:-@[-`{-~]/);
function px(e) {
	return e !== null && e < -2;
}
function mx(e) {
	return e !== null && (e < 0 || e === 32);
}
function hx(e) {
	return e === -2 || e === -1 || e === 32;
}
var gx = vx(/\p{P}|\p{S}/u), _x = vx(/\s/);
function vx(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-sanitize-uri/index.js
function yx(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && sx(e.charCodeAt(n + 1)) && sx(e.charCodeAt(n + 2))) i = 2;
		else if (a < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a)) || (o = String.fromCharCode(a));
		else if (a > 55295 && a < 57344) {
			let t = e.charCodeAt(n + 1);
			a < 56320 && t > 56319 && t < 57344 ? (o = String.fromCharCode(a, t), i = 1) : o = "�";
		} else o = String.fromCharCode(a);
		o &&= (t.push(e.slice(r, n), encodeURIComponent(o)), r = n + i + 1, ""), i &&= (n += i, 0);
	}
	return t.join("") + e.slice(r);
}
//#endregion
//#region ../../node_modules/micromark-factory-space/index.js
function bx(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return hx(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return hx(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/content.js
var xx = { tokenize: Sx };
function Sx(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), bx(e, t, "linePrefix");
	}
	function i(t) {
		return e.enter("paragraph"), a(t);
	}
	function a(t) {
		let r = e.enter("chunkText", {
			contentType: "text",
			previous: n
		});
		return n && (n.next = r), n = r, o(t);
	}
	function o(t) {
		if (t === null) {
			e.exit("chunkText"), e.exit("paragraph"), e.consume(t);
			return;
		}
		return px(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/document.js
var Cx = { tokenize: Tx }, wx = { tokenize: Ex };
function Tx(e) {
	let t = this, n = [], r = 0, i, a, o;
	return s;
	function s(i) {
		if (r < n.length) {
			let a = n[r];
			return t.containerState = a[1], e.attempt(a[0].continuation, c, l)(i);
		}
		return l(i);
	}
	function c(e) {
		if (r++, t.containerState._closeFlow) {
			t.containerState._closeFlow = void 0, i && v();
			let n = t.events.length, a = n, o;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				o = t.events[a][1].end;
				break;
			}
			_(r);
			let s = n;
			for (; s < t.events.length;) t.events[s][1].end = { ...o }, s++;
			return Qb(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(wx, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(wx, p, m)(n);
	}
	function p(e) {
		return r++, n.push([t.currentConstruct, t.containerState]), f(e);
	}
	function m(n) {
		if (n === null) {
			i && v(), _(0), e.consume(n);
			return;
		}
		return i ||= t.parser.flow(t.now()), e.enter("chunkFlow", {
			_tokenizer: i,
			contentType: "flow",
			previous: a
		}), h(n);
	}
	function h(n) {
		if (n === null) {
			g(e.exit("chunkFlow"), !0), _(0), e.consume(n);
			return;
		}
		return px(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
	}
	function g(e, n) {
		let s = t.sliceStream(e);
		if (n && s.push(null), e.previous = a, a && (a.next = e), a = e, i.defineSkip(e.start), i.write(s), t.parser.lazy[e.start.line]) {
			let e = i.events.length;
			for (; e--;) if (i.events[e][1].start.offset < o && (!i.events[e][1].end || i.events[e][1].end.offset > o)) return;
			let n = t.events.length, a = n, s, c;
			for (; a--;) if (t.events[a][0] === "exit" && t.events[a][1].type === "chunkFlow") {
				if (s) {
					c = t.events[a][1].end;
					break;
				}
				s = !0;
			}
			for (_(r), e = n; e < t.events.length;) t.events[e][1].end = { ...c }, e++;
			Qb(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
		}
	}
	function _(r) {
		let i = n.length;
		for (; i-- > r;) {
			let r = n[i];
			t.containerState = r[1], r[0].exit.call(t, e);
		}
		n.length = r;
	}
	function v() {
		i.write([null]), a = void 0, i = void 0, t.containerState._closeFlow = void 0;
	}
}
function Ex(e, t, n) {
	return bx(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/micromark-util-classify-character/index.js
function Dx(e) {
	if (e === null || mx(e) || _x(e)) return 1;
	if (gx(e)) return 2;
}
//#endregion
//#region ../../node_modules/micromark-util-resolve-all/index.js
function Ox(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/attention.js
var kx = {
	name: "attention",
	resolveAll: Ax,
	tokenize: jx
};
function Ax(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Mx(d, -c), Mx(f, c), o = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: d,
				end: { ...e[r][1].end }
			}, s = {
				type: c > 1 ? "strongSequence" : "emphasisSequence",
				start: { ...e[n][1].start },
				end: f
			}, a = {
				type: c > 1 ? "strongText" : "emphasisText",
				start: { ...e[r][1].end },
				end: { ...e[n][1].start }
			}, i = {
				type: c > 1 ? "strong" : "emphasis",
				start: { ...o.start },
				end: { ...s.end }
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = $b(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = $b(l, [
				[
					"enter",
					i,
					t
				],
				[
					"enter",
					o,
					t
				],
				[
					"exit",
					o,
					t
				],
				[
					"enter",
					a,
					t
				]
			]), l = $b(l, Ox(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = $b(l, [
				[
					"exit",
					a,
					t
				],
				[
					"enter",
					s,
					t
				],
				[
					"exit",
					s,
					t
				],
				[
					"exit",
					i,
					t
				]
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = $b(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, Qb(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function jx(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Dx(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Dx(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Mx(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/autolink.js
var Nx = {
	name: "autolink",
	tokenize: Px
};
function Px(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return ox(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || sx(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || sx(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || lx(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : cx(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return sx(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || sx(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/blank-line.js
var Fx = {
	partial: !0,
	tokenize: Ix
};
function Ix(e, t, n) {
	return r;
	function r(t) {
		return hx(t) ? bx(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || px(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/block-quote.js
var Lx = {
	continuation: { tokenize: zx },
	exit: Bx,
	name: "blockQuote",
	tokenize: Rx
};
function Rx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		if (t === 62) {
			let n = r.containerState;
			return n.open ||= (e.enter("blockQuote", { _container: !0 }), !0), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(t), e.exit("blockQuoteMarker"), a;
		}
		return n(t);
	}
	function a(n) {
		return hx(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function zx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return hx(t) ? bx(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Lx, t, n)(r);
	}
}
function Bx(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-escape.js
var Vx = {
	name: "characterEscape",
	tokenize: Hx
};
function Hx(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return fx(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-reference.js
var Ux = {
	name: "characterReference",
	tokenize: Wx
};
function Wx(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = sx, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = dx, u) : (e.enter("characterReferenceValue"), a = 7, o = ux, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === sx && !Zb(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-fenced.js
var Gx = {
	partial: !0,
	tokenize: Jx
}, Kx = {
	concrete: !0,
	name: "codeFenced",
	tokenize: qx
};
function qx(e, t, n) {
	let r = this, i = {
		partial: !0,
		tokenize: x
	}, a = 0, o = 0, s;
	return c;
	function c(e) {
		return l(e);
	}
	function l(t) {
		let n = r.events[r.events.length - 1];
		return a = n && n[1].type === "linePrefix" ? n[2].sliceSerialize(n[1], !0).length : 0, s = t, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), u(t);
	}
	function u(t) {
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), hx(t) ? bx(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || px(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Gx, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || px(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : hx(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), bx(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || px(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || px(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && hx(t) ? bx(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || px(t) ? e.check(Gx, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || px(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
	}
	function b(n) {
		return e.exit("codeFenced"), t(n);
	}
	function x(e, t, n) {
		let i = 0;
		return a;
		function a(t) {
			return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c;
		}
		function c(t) {
			return e.enter("codeFencedFence"), hx(t) ? bx(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), hx(t) ? bx(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || px(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Jx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t === null ? n(t) : (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-indented.js
var Yx = {
	name: "codeIndented",
	tokenize: Zx
}, Xx = {
	partial: !0,
	tokenize: Qx
};
function Zx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), bx(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : px(t) ? e.attempt(Xx, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || px(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Qx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : px(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : bx(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : px(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-text.js
var $x = {
	name: "codeText",
	previous: tS,
	resolve: eS,
	tokenize: nS
};
function eS(e) {
	let t = e.length - 4, n = 3, r, i;
	if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
		for (r = n; ++r < t;) if (e[r][1].type === "codeTextData") {
			e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
			break;
		}
	}
	for (r = n - 1, t++; ++r <= t;) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
	return e;
}
function tS(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function nS(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : px(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || px(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var rS = class {
	constructor(e) {
		this.left = e ? [...e] : [], this.right = [];
	}
	get(e) {
		if (e < 0 || e >= this.left.length + this.right.length) throw RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
		return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
	}
	get length() {
		return this.left.length + this.right.length;
	}
	shift() {
		return this.setCursor(0), this.right.pop();
	}
	slice(e, t) {
		let n = t ?? Infinity;
		return n < this.left.length ? this.left.slice(e, n) : e > this.left.length ? this.right.slice(this.right.length - n + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - n + this.left.length).reverse());
	}
	splice(e, t, n) {
		let r = t || 0;
		this.setCursor(Math.trunc(e));
		let i = this.right.splice(this.right.length - r, Infinity);
		return n && iS(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), iS(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), iS(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			iS(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			iS(this.left, t.reverse());
		}
	}
};
function iS(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/index.js
function aS(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new rS(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, oS(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Qb(e, 0, Infinity, u.slice(0)), !l;
}
function oS(e, t) {
	let n = e.get(t)[1], r = e.get(t)[2], i = t - 1, a = [], o = n._tokenizer;
	o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
	let s = o.events, c = [], l = {}, u, d, f = -1, p = n, m = 0, h = 0, g = [h];
	for (; p;) {
		for (; e.get(++i)[1] !== p;);
		a.push(i), p._tokenizer || (u = r.sliceStream(p), p.next || u.push(null), d && o.defineSkip(p.start), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), p._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), d = p, p = p.next;
	}
	for (p = n; ++f < s.length;) s[f][0] === "exit" && s[f - 1][0] === "enter" && s[f][1].type === s[f - 1][1].type && s[f][1].start.line !== s[f][1].end.line && (h = f + 1, g.push(h), p._tokenizer = void 0, p.previous = void 0, p = p.next);
	for (o.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : g.pop(), f = g.length; f--;) {
		let t = s.slice(g[f], g[f + 1]), n = a.pop();
		c.push([n, n + t.length - 1]), e.splice(n, 2, t);
	}
	for (c.reverse(), f = -1; ++f < c.length;) l[m + c[f][0]] = m + c[f][1], m += c[f][1] - c[f][0] - 1;
	return l;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/content.js
var sS = {
	resolve: lS,
	tokenize: uS
}, cS = {
	partial: !0,
	tokenize: dS
};
function lS(e) {
	return aS(e), e;
}
function uS(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : px(t) ? e.check(cS, o, a)(t) : (e.consume(t), i);
	}
	function a(n) {
		return e.exit("chunkContent"), e.exit("content"), t(n);
	}
	function o(t) {
		return e.consume(t), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
			contentType: "content",
			previous: n
		}), n = n.next, i;
	}
}
function dS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), bx(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || px(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-destination/index.js
function fS(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || lx(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || px(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || mx(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || lx(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-label/index.js
function pS(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : px(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || px(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !hx(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-title/index.js
function mS(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : px(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), bx(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || px(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-whitespace/index.js
function hS(e, t) {
	let n;
	return r;
	function r(i) {
		return px(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : hx(i) ? bx(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/definition.js
var gS = {
	name: "definition",
	tokenize: vS
}, _S = {
	partial: !0,
	tokenize: yS
};
function vS(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return pS.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = ax(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return mx(t) ? hS(e, l)(t) : l(t);
	}
	function l(t) {
		return fS(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(_S, d, d)(t);
	}
	function d(t) {
		return hx(t) ? bx(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || px(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function yS(e, t, n) {
	return r;
	function r(t) {
		return mx(t) ? hS(e, i)(t) : n(t);
	}
	function i(t) {
		return mS(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return hx(t) ? bx(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || px(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var bS = {
	name: "hardBreakEscape",
	tokenize: xS
};
function xS(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return px(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/heading-atx.js
var SS = {
	name: "headingAtx",
	resolve: CS,
	tokenize: wS
};
function CS(e, t) {
	let n = e.length - 2, r = 3, i, a;
	return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
		type: "atxHeadingText",
		start: e[r][1].start,
		end: e[n][1].end
	}, a = {
		type: "chunkText",
		start: e[r][1].start,
		end: e[n][1].end,
		contentType: "text"
	}, Qb(e, r, n - r + 1, [
		[
			"enter",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"exit",
			a,
			t
		],
		[
			"exit",
			i,
			t
		]
	])), e;
}
function wS(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || mx(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || px(n) ? (e.exit("atxHeading"), t(n)) : hx(n) ? bx(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || mx(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/micromark-util-html-tag-name/index.js
var TS = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), ES = [
	"pre",
	"script",
	"style",
	"textarea"
], DS = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: AS,
	tokenize: jS
}, OS = {
	partial: !0,
	tokenize: NS
}, kS = {
	partial: !0,
	tokenize: MS
};
function AS(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function jS(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : F) : ox(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : ox(a) ? (e.consume(a), i = 4, r.interrupt ? t : F) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : F) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return ox(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || mx(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && ES.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : TS.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || sx(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return hx(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || ox(t) ? (e.consume(t), b) : hx(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || sx(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : hx(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : hx(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || px(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || mx(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || hx(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || px(t) ? O(t) : hx(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), j) : t === 60 && i === 1 ? (e.consume(t), M) : t === 62 && i === 4 ? (e.consume(t), I) : t === 63 && i === 3 ? (e.consume(t), F) : t === 93 && i === 5 ? (e.consume(t), P) : px(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(OS, L, k)(t)) : t === null || px(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(kS, ee, L)(t);
	}
	function ee(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), A;
	}
	function A(t) {
		return t === null || px(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function j(t) {
		return t === 45 ? (e.consume(t), F) : O(t);
	}
	function M(t) {
		return t === 47 ? (e.consume(t), o = "", N) : O(t);
	}
	function N(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return ES.includes(n) ? (e.consume(t), I) : O(t);
		}
		return ox(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), N) : O(t);
	}
	function P(t) {
		return t === 93 ? (e.consume(t), F) : O(t);
	}
	function F(t) {
		return t === 62 ? (e.consume(t), I) : t === 45 && i === 2 ? (e.consume(t), F) : O(t);
	}
	function I(t) {
		return t === null || px(t) ? (e.exit("htmlFlowData"), L(t)) : (e.consume(t), I);
	}
	function L(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function MS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return px(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function NS(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Fx, t, n);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/html-text.js
var PS = {
	name: "htmlText",
	tokenize: FS
};
function FS(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : ox(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : ox(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : px(t) ? (o = d, M(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? j(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : px(t) ? (o = h, M(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? j(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? j(t) : px(t) ? (o = v, M(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : px(t) ? (o = y, M(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? j(e) : y(e);
	}
	function x(t) {
		return ox(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || sx(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return px(t) ? (o = C, M(t)) : hx(t) ? (e.consume(t), C) : j(t);
	}
	function w(t) {
		return t === 45 || sx(t) ? (e.consume(t), w) : t === 47 || t === 62 || mx(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), j) : t === 58 || t === 95 || ox(t) ? (e.consume(t), E) : px(t) ? (o = T, M(t)) : hx(t) ? (e.consume(t), T) : j(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || sx(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : px(t) ? (o = D, M(t)) : hx(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : px(t) ? (o = O, M(t)) : hx(t) ? (e.consume(t), O) : (e.consume(t), ee);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, A) : t === null ? n(t) : px(t) ? (o = k, M(t)) : (e.consume(t), k);
	}
	function ee(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || mx(t) ? T(t) : (e.consume(t), ee);
	}
	function A(e) {
		return e === 47 || e === 62 || mx(e) ? T(e) : n(e);
	}
	function j(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function M(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), N;
	}
	function N(t) {
		return hx(t) ? bx(e, P, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : P(t);
	}
	function P(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-end.js
var IS = {
	name: "labelEnd",
	resolveAll: BS,
	resolveTo: VS,
	tokenize: HS
}, LS = { tokenize: US }, RS = { tokenize: WS }, zS = { tokenize: GS };
function BS(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Qb(e, 0, e.length, n), e;
}
function VS(e, t) {
	let n = e.length, r = 0, i, a, o, s;
	for (; n--;) if (i = e[n][1], a) {
		if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
		e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
	} else if (o) {
		if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (a = n, i.type !== "labelLink")) {
			r = 2;
			break;
		}
	} else i.type === "labelEnd" && (o = n);
	let c = {
		type: e[a][1].type === "labelLink" ? "link" : "image",
		start: { ...e[a][1].start },
		end: { ...e[e.length - 1][1].end }
	}, l = {
		type: "label",
		start: { ...e[a][1].start },
		end: { ...e[o][1].end }
	}, u = {
		type: "labelText",
		start: { ...e[a + r + 2][1].end },
		end: { ...e[o - 2][1].start }
	};
	return s = [[
		"enter",
		c,
		t
	], [
		"enter",
		l,
		t
	]], s = $b(s, e.slice(a + 1, a + r + 3)), s = $b(s, [[
		"enter",
		u,
		t
	]]), s = $b(s, Ox(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = $b(s, [
		[
			"exit",
			u,
			t
		],
		e[o - 2],
		e[o - 1],
		[
			"exit",
			l,
			t
		]
	]), s = $b(s, e.slice(o + 1)), s = $b(s, [[
		"exit",
		c,
		t
	]]), Qb(e, a, e.length, s), e;
}
function HS(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(ax(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(LS, u, o ? u : d)(t) : t === 91 ? e.attempt(RS, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(zS, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function US(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return mx(t) ? hS(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : fS(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return mx(t) ? hS(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? mS(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return mx(t) ? hS(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function WS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return pS.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(ax(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function GS(e, t, n) {
	return r;
	function r(t) {
		return e.enter("reference"), e.enter("referenceMarker"), e.consume(t), e.exit("referenceMarker"), i;
	}
	function i(r) {
		return r === 93 ? (e.enter("referenceMarker"), e.consume(r), e.exit("referenceMarker"), e.exit("reference"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-image.js
var KS = {
	name: "labelStartImage",
	resolveAll: IS.resolveAll,
	tokenize: qS
};
function qS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(t), e.exit("labelImageMarker"), a;
	}
	function a(t) {
		return t === 91 ? (e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelImage"), o) : n(t);
	}
	function o(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-start-link.js
var JS = {
	name: "labelStartLink",
	resolveAll: IS.resolveAll,
	tokenize: YS
};
function YS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("labelLink"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelLink"), a;
	}
	function a(e) {
		/* c8 ignore next 3 */
		return e === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/line-ending.js
var XS = {
	name: "lineEnding",
	tokenize: ZS
};
function ZS(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), bx(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/thematic-break.js
var QS = {
	name: "thematicBreak",
	tokenize: $S
};
function $S(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || px(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), hx(t) ? bx(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/list.js
var eC = {
	continuation: { tokenize: iC },
	exit: oC,
	name: "list",
	tokenize: rC
}, tC = {
	partial: !0,
	tokenize: sC
}, nC = {
	partial: !0,
	tokenize: aC
};
function rC(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : ux(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(QS, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return ux(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Fx, r.interrupt ? n : u, e.attempt(tC, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return hx(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function iC(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Fx, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, bx(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !hx(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(nC, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, bx(e, e.attempt(eC, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function aC(e, t, n) {
	let r = this;
	return bx(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function oC(e) {
	e.exit(this.containerState.type);
}
function sC(e, t, n) {
	let r = this;
	return bx(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !hx(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/setext-underline.js
var cC = {
	name: "setextUnderline",
	resolveTo: lC,
	tokenize: uC
};
function lC(e, t) {
	let n = e.length, r, i, a;
	for (; n--;) if (e[n][0] === "enter") {
		if (e[n][1].type === "content") {
			r = n;
			break;
		}
		e[n][1].type === "paragraph" && (i = n);
	} else e[n][1].type === "content" && e.splice(n, 1), !a && e[n][1].type === "definition" && (a = n);
	let o = {
		type: "setextHeading",
		start: { ...e[r][1].start },
		end: { ...e[e.length - 1][1].end }
	};
	return e[i][1].type = "setextHeadingText", a ? (e.splice(i, 0, [
		"enter",
		o,
		t
	]), e.splice(a + 1, 0, [
		"exit",
		e[r][1],
		t
	]), e[r][1].end = { ...e[a][1].end }) : e[r][1] = o, e.push([
		"exit",
		o,
		t
	]), e;
}
function uC(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		let a = r.events.length, s;
		for (; a--;) if (r.events[a][1].type !== "lineEnding" && r.events[a][1].type !== "linePrefix" && r.events[a][1].type !== "content") {
			s = r.events[a][1].type === "paragraph";
			break;
		}
		return !r.parser.lazy[r.now().line] && (r.interrupt || s) ? (e.enter("setextHeadingLine"), i = t, o(t)) : n(t);
	}
	function o(t) {
		return e.enter("setextHeadingLineSequence"), s(t);
	}
	function s(t) {
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), hx(t) ? bx(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || px(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/flow.js
var dC = { tokenize: fC };
function fC(e) {
	let t = this, n = e.attempt(Fx, r, e.attempt(this.parser.constructs.flowInitial, i, bx(e, e.attempt(this.parser.constructs.flow, i, e.attempt(sS, i)), "linePrefix")));
	return n;
	function r(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEndingBlank"), e.consume(r), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
	}
	function i(r) {
		if (r === null) {
			e.consume(r);
			return;
		}
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), t.currentConstruct = void 0, n;
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/text.js
var pC = { resolveAll: _C() }, mC = gC("string"), hC = gC("text");
function gC(e) {
	return {
		resolveAll: _C(e === "text" ? vC : void 0),
		tokenize: t
	};
	function t(t) {
		let n = this, r = this.parser.constructs[e], i = t.attempt(r, a, o);
		return a;
		function a(e) {
			return c(e) ? i(e) : o(e);
		}
		function o(e) {
			if (e === null) {
				t.consume(e);
				return;
			}
			return t.enter("data"), t.consume(e), s;
		}
		function s(e) {
			return c(e) ? (t.exit("data"), i(e)) : (t.consume(e), s);
		}
		function c(e) {
			if (e === null) return !0;
			let t = r[e], i = -1;
			if (t) for (; ++i < t.length;) {
				let e = t[i];
				if (!e.previous || e.previous.call(n, n.previous)) return !0;
			}
			return !1;
		}
	}
}
function _C(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function vC(e, t) {
	let n = 0;
	for (; ++n <= e.length;) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
		let r = e[n - 1][1], i = t.sliceStream(r), a = i.length, o = -1, s = 0, c;
		for (; a--;) {
			let e = i[a];
			if (typeof e == "string") {
				for (o = e.length; e.charCodeAt(o - 1) === 32;) s++, o--;
				if (o) break;
				o = -1;
			} else if (e === -2) c = !0, s++;
			else if (e !== -1) {
				a++;
				break;
			}
		}
		if (t._contentTypeTextTrailing && n === e.length && (s = 0), s) {
			let i = {
				type: n === e.length || c || s < 2 ? "lineSuffix" : "hardBreakTrailing",
				start: {
					_bufferIndex: a ? o : r.start._bufferIndex + o,
					_index: r.start._index + a,
					line: r.end.line,
					column: r.end.column - s,
					offset: r.end.offset - s
				},
				end: { ...r.end }
			};
			r.end = { ...i.start }, r.start.offset === r.end.offset ? Object.assign(r, i) : (e.splice(n, 0, [
				"enter",
				i,
				t
			], [
				"exit",
				i,
				t
			]), n += 2);
		}
		n++;
	}
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/constructs.js
var yC = /* @__PURE__ */ L({
	attentionMarkers: () => DC,
	contentInitial: () => xC,
	disable: () => OC,
	document: () => bC,
	flow: () => CC,
	flowInitial: () => SC,
	insideSpan: () => EC,
	string: () => wC,
	text: () => TC
}), bC = {
	42: eC,
	43: eC,
	45: eC,
	48: eC,
	49: eC,
	50: eC,
	51: eC,
	52: eC,
	53: eC,
	54: eC,
	55: eC,
	56: eC,
	57: eC,
	62: Lx
}, xC = { 91: gS }, SC = {
	[-2]: Yx,
	[-1]: Yx,
	32: Yx
}, CC = {
	35: SS,
	42: QS,
	45: [cC, QS],
	60: DS,
	61: cC,
	95: QS,
	96: Kx,
	126: Kx
}, wC = {
	38: Ux,
	92: Vx
}, TC = {
	[-5]: XS,
	[-4]: XS,
	[-3]: XS,
	33: KS,
	38: Ux,
	42: kx,
	60: [Nx, PS],
	91: JS,
	92: [bS, Vx],
	93: IS,
	95: kx,
	96: $x
}, EC = { null: [kx, pC] }, DC = { null: [42, 95] }, OC = { null: [] };
//#endregion
//#region ../../node_modules/micromark/lib/create-tokenizer.js
function kC(e, t, n) {
	let r = {
		_bufferIndex: -1,
		_index: 0,
		line: n && n.line || 1,
		column: n && n.column || 1,
		offset: n && n.offset || 0
	}, i = {}, a = [], o = [], s = [], c = {
		attempt: C(x),
		check: C(S),
		consume: v,
		enter: y,
		exit: b,
		interrupt: C(S, { interrupt: !0 })
	}, l = {
		code: null,
		containerState: {},
		defineSkip: h,
		events: [],
		now: m,
		parser: e,
		previous: null,
		sliceSerialize: f,
		sliceStream: p,
		write: d
	}, u = t.tokenize.call(l, c);
	return t.resolveAll && a.push(t), l;
	function d(e) {
		return o = $b(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Ox(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return jC(p(e), t);
	}
	function p(e) {
		return AC(o, e);
	}
	function m() {
		let { _bufferIndex: e, _index: t, line: n, column: i, offset: a } = r;
		return {
			_bufferIndex: e,
			_index: t,
			line: n,
			column: i,
			offset: a
		};
	}
	function h(e) {
		i[e.line] = e.column, E();
	}
	function g() {
		let e;
		for (; r._index < o.length;) {
			let t = o[r._index];
			if (typeof t == "string") for (e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === e && r._bufferIndex < t.length;) _(t.charCodeAt(r._bufferIndex));
			else _(t);
		}
	}
	function _(e) {
		u = u(e);
	}
	function v(e) {
		px(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
	}
	function y(e, t) {
		let n = t || {};
		return n.type = e, n.start = m(), l.events.push([
			"enter",
			n,
			l
		]), s.push(n), n;
	}
	function b(e) {
		let t = s.pop();
		return t.end = m(), l.events.push([
			"exit",
			t,
			l
		]), t;
	}
	function x(e, t) {
		w(e, t.from);
	}
	function S(e, t) {
		t.restore();
	}
	function C(e, t) {
		return n;
		function n(n, r, i) {
			let a, o, s, u;
			return Array.isArray(n) ? f(n) : "tokenize" in n ? f([n]) : d(n);
			function d(e) {
				return t;
				function t(t) {
					let n = t !== null && e[t], r = t !== null && e.null;
					return f([...Array.isArray(n) ? n : n ? [n] : [], ...Array.isArray(r) ? r : r ? [r] : []])(t);
				}
			}
			function f(e) {
				return a = e, o = 0, e.length === 0 ? i : p(e[o]);
			}
			function p(e) {
				return n;
				function n(n) {
					return u = T(), s = e, e.partial || (l.currentConstruct = e), e.name && l.parser.constructs.disable.null.includes(e.name) ? h(n) : e.tokenize.call(t ? Object.assign(Object.create(l), t) : l, c, m, h)(n);
				}
			}
			function m(t) {
				return e(s, u), r;
			}
			function h(e) {
				return u.restore(), ++o < a.length ? p(a[o]) : i;
			}
		}
	}
	function w(e, t) {
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Qb(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
	}
	function T() {
		let e = m(), t = l.previous, n = l.currentConstruct, i = l.events.length, a = Array.from(s);
		return {
			from: i,
			restore: o
		};
		function o() {
			r = e, l.previous = t, l.currentConstruct = n, l.events.length = i, s = a, E();
		}
	}
	function E() {
		r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
	}
}
function AC(e, t) {
	let n = t.start._index, r = t.start._bufferIndex, i = t.end._index, a = t.end._bufferIndex, o;
	if (n === i) o = [e[n].slice(r, a)];
	else {
		if (o = e.slice(n, i), r > -1) {
			let e = o[0];
			typeof e == "string" ? o[0] = e.slice(r) : o.shift();
		}
		a > 0 && o.push(e[i].slice(0, a));
	}
	return o;
}
function jC(e, t) {
	let n = -1, r = [], i;
	for (; ++n < e.length;) {
		let a = e[n], o;
		if (typeof a == "string") o = a;
		else switch (a) {
			case -5:
				o = "\r";
				break;
			case -4:
				o = "\n";
				break;
			case -3:
				o = "\r\n";
				break;
			case -2:
				o = t ? " " : "	";
				break;
			case -1:
				if (!t && i) continue;
				o = " ";
				break;
			default: o = String.fromCharCode(a);
		}
		i = a === -2, r.push(o);
	}
	return r.join("");
}
//#endregion
//#region ../../node_modules/micromark/lib/parse.js
function MC(e) {
	let t = {
		constructs: tx([yC, ...(e || {}).extensions || []]),
		content: n(xx),
		defined: [],
		document: n(Cx),
		flow: n(dC),
		lazy: {},
		string: n(mC),
		text: n(hC)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return kC(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/postprocess.js
function NC(e) {
	for (; !aS(e););
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/preprocess.js
var PC = /[\0\t\n\r]/g;
function FC() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (PC.lastIndex = u, c = PC.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
				t = i.slice(u);
				break;
			}
			if (f === 10 && u === d && r) s.push(-3), r = void 0;
			else switch (r &&= (s.push(-5), void 0), u < d && (s.push(i.slice(u, d)), e += d - u), f) {
				case 0:
					s.push(65533), e++;
					break;
				case 9:
					for (l = Math.ceil(e / 4) * 4, s.push(-2); e++ < l;) s.push(-1);
					break;
				case 10:
					s.push(-4), e = 1;
					break;
				default: r = !0, e = 1;
			}
			u = d + 1;
		}
		return o && (r && s.push(-5), t && s.push(t), s.push(null)), s;
	}
}
//#endregion
//#region ../../node_modules/micromark-util-decode-string/index.js
var IC = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function LC(e) {
	return e.replace(IC, RC);
}
function RC(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return ix(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Zb(n) || e;
}
//#endregion
//#region ../../node_modules/mdast-util-from-markdown/lib/index.js
var zC = {}.hasOwnProperty;
function BC(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), VC(n)(NC(MC(n).document().write(FC()(e, t, !0))));
}
function VC(e) {
	let t = {
		transforms: [],
		canContainEols: [
			"emphasis",
			"fragment",
			"heading",
			"paragraph",
			"strong"
		],
		enter: {
			autolink: a(ce),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(ie),
			blockQuote: a(W),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(G),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(G, o),
			codeText: a(K, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(ne),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(re),
			hardBreakEscape: a(ae),
			hardBreakTrailing: a(ae),
			htmlFlow: a(oe, o),
			htmlFlowData: T,
			htmlText: a(oe, o),
			htmlTextData: T,
			image: a(se),
			label: o,
			link: a(ce),
			listItem: a(ue),
			listItemValue: f,
			listOrdered: a(le, d),
			listUnordered: a(le),
			paragraph: a(de),
			reference: R,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(ie),
			strong: a(fe),
			thematicBreak: a(pe)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: U,
			autolinkProtocol: te,
			blockQuote: c(),
			characterEscapeValue: E,
			characterReferenceMarkerHexadecimal: B,
			characterReferenceMarkerNumeric: B,
			characterReferenceValue: V,
			characterReference: H,
			codeFenced: c(g),
			codeFencedFence: h,
			codeFencedFenceInfo: p,
			codeFencedFenceMeta: m,
			codeFlowValue: E,
			codeIndented: c(_),
			codeText: c(A),
			codeTextData: E,
			data: E,
			definition: c(),
			definitionDestinationString: b,
			definitionLabelString: v,
			definitionTitleString: y,
			emphasis: c(),
			hardBreakEscape: c(O),
			hardBreakTrailing: c(O),
			htmlFlow: c(k),
			htmlFlowData: E,
			htmlText: c(ee),
			htmlTextData: E,
			image: c(M),
			label: P,
			labelText: N,
			lineEnding: D,
			link: c(j),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: z,
			resourceDestinationString: F,
			resourceTitleString: I,
			resource: L,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	UC(t, (e || {}).mdastExtensions || []);
	let n = {};
	return r;
	function r(e) {
		let r = {
			type: "root",
			children: []
		}, a = {
			stack: [r],
			tokenStack: [],
			config: t,
			enter: s,
			exit: l,
			buffer: o,
			resume: u,
			data: n
		}, c = [], d = -1;
		for (; ++d < e.length;) (e[d][1].type === "listOrdered" || e[d][1].type === "listUnordered") && (e[d][0] === "enter" ? c.push(d) : d = i(e, c.pop(), d));
		for (d = -1; ++d < e.length;) {
			let n = t[e[d][0]];
			zC.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || GC).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: HC(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: HC(e.length > 0 ? e[e.length - 2][1].end : {
				line: 1,
				column: 1,
				offset: 0
			})
		}, d = -1; ++d < t.transforms.length;) r = t.transforms[d](r) || r;
		return r;
	}
	function i(e, t, n) {
		let r = t - 1, i = -1, a = !1, o, s, c, l;
		for (; ++r <= n;) {
			let t = e[r];
			switch (t[1].type) {
				case "listUnordered":
				case "listOrdered":
				case "blockQuote":
					t[0] === "enter" ? i++ : i--, l = void 0;
					break;
				case "lineEndingBlank":
					t[0] === "enter" && (o && !l && !i && !c && (c = r), l = void 0);
					break;
				case "linePrefix":
				case "listItemValue":
				case "listItemMarker":
				case "listItemPrefix":
				case "listItemPrefixWhitespace": break;
				default: l = void 0;
			}
			if (!i && t[0] === "enter" && t[1].type === "listItemPrefix" || i === -1 && t[0] === "exit" && (t[1].type === "listUnordered" || t[1].type === "listOrdered")) {
				if (o) {
					let i = r;
					for (s = void 0; i--;) {
						let t = e[i];
						if (t[1].type === "lineEnding" || t[1].type === "lineEndingBlank") {
							if (t[0] === "exit") continue;
							s && (e[s][1].type = "lineEndingBlank", a = !0), t[1].type = "lineEnding", s = i;
						} else if (!(t[1].type === "linePrefix" || t[1].type === "blockQuotePrefix" || t[1].type === "blockQuotePrefixWhitespace" || t[1].type === "blockQuoteMarker" || t[1].type === "listItemIndent")) break;
					}
					c && (!s || c < s) && (o._spread = !0), o.end = Object.assign({}, s ? e[s][1].start : t[1].end), e.splice(s || r, 0, [
						"exit",
						o,
						t[2]
					]), r++, n++;
				}
				if (t[1].type === "listItemPrefix") {
					let i = {
						type: "listItem",
						_spread: !1,
						start: Object.assign({}, t[1].start),
						end: void 0
					};
					o = i, e.splice(r, 0, [
						"enter",
						i,
						t[2]
					]), r++, n++, c = void 0, l = !0;
				}
			}
		}
		return e[t][1]._spread = a, n;
	}
	function a(e, t) {
		return n;
		function n(n) {
			s.call(this, e(n), n), t && t.call(this, n);
		}
	}
	function o() {
		this.stack.push({
			type: "fragment",
			children: []
		});
	}
	function s(e, t, n) {
		this.stack[this.stack.length - 1].children.push(e), this.stack.push(e), this.tokenStack.push([t, n || void 0]), e.position = {
			start: HC(t.start),
			end: void 0
		};
	}
	function c(e) {
		return t;
		function t(t) {
			e && e.call(this, t), l.call(this, t);
		}
	}
	function l(e, t) {
		let n = this.stack.pop(), r = this.tokenStack.pop();
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || GC).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + ub({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = HC(e.end);
	}
	function u() {
		return Kb(this.stack.pop());
	}
	function d() {
		this.data.expectingFirstListItemValue = !0;
	}
	function f(e) {
		if (this.data.expectingFirstListItemValue) {
			let t = this.stack[this.stack.length - 2];
			t.start = Number.parseInt(this.sliceSerialize(e), 10), this.data.expectingFirstListItemValue = void 0;
		}
	}
	function p() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.lang = e;
	}
	function m() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.meta = e;
	}
	function h() {
		this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
	}
	function g() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
	}
	function _() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e.replace(/(\r?\n|\r)$/g, "");
	}
	function v(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = ax(this.sliceSerialize(e)).toLowerCase();
	}
	function y() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function b() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function x(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth ||= this.sliceSerialize(e).length;
	}
	function S() {
		this.data.setextHeadingSlurpLineEnding = !0;
	}
	function C(e) {
		let t = this.stack[this.stack.length - 1];
		t.depth = this.sliceSerialize(e).codePointAt(0) === 61 ? 1 : 2;
	}
	function w() {
		this.data.setextHeadingSlurpLineEnding = void 0;
	}
	function T(e) {
		let t = this.stack[this.stack.length - 1].children, n = t[t.length - 1];
		(!n || n.type !== "text") && (n = q(), n.position = {
			start: HC(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = HC(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = HC(e.end), this.data.atHardBreak = void 0;
			return;
		}
		!this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(n.type) && (T.call(this, e), E.call(this, e));
	}
	function O() {
		this.data.atHardBreak = !0;
	}
	function k() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function ee() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = LC(t), n.identifier = ax(t).toLowerCase();
	}
	function P() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function F() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function I() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.title = e;
	}
	function L() {
		this.data.inReference = void 0;
	}
	function R() {
		this.data.referenceType = "collapsed";
	}
	function z(e) {
		let t = this.resume(), n = this.stack[this.stack.length - 1];
		n.label = t, n.identifier = ax(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function B(e) {
		this.data.characterReferenceType = e.type;
	}
	function V(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = ix(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Zb(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function H(e) {
		let t = this.stack.pop();
		t.position.end = HC(e.end);
	}
	function te(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function U(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function W() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function G() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function K() {
		return {
			type: "inlineCode",
			value: ""
		};
	}
	function ne() {
		return {
			type: "definition",
			identifier: "",
			label: null,
			title: null,
			url: ""
		};
	}
	function re() {
		return {
			type: "emphasis",
			children: []
		};
	}
	function ie() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function ae() {
		return { type: "break" };
	}
	function oe() {
		return {
			type: "html",
			value: ""
		};
	}
	function se() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function ce() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function le(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function ue(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function de() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function fe() {
		return {
			type: "strong",
			children: []
		};
	}
	function q() {
		return {
			type: "text",
			value: ""
		};
	}
	function pe() {
		return { type: "thematicBreak" };
	}
}
function HC(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function UC(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? UC(e, r) : WC(e, r);
	}
}
function WC(e, t) {
	let n;
	for (n in t) if (zC.call(t, n)) switch (n) {
		case "canContainEols": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "transforms": {
			let r = t[n];
			r && e[n].push(...r);
			break;
		}
		case "enter":
		case "exit": {
			let r = t[n];
			r && Object.assign(e[n], r);
			break;
		}
	}
}
function GC(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + ub({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + ub({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + ub({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../../node_modules/remark-parse/lib/index.js
function KC(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return BC(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function qC(e, t) {
	let n = {
		type: "element",
		tagName: "blockquote",
		properties: {},
		children: e.wrap(e.all(t), !0)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/break.js
function JC(e, t) {
	let n = {
		type: "element",
		tagName: "br",
		properties: {},
		children: []
	};
	return e.patch(t, n), [e.applyData(t, n), {
		type: "text",
		value: "\n"
	}];
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/code.js
function YC(e, t) {
	let n = t.value ? t.value + "\n" : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
	i.length > 0 && (r.className = ["language-" + i[0]]);
	let a = {
		type: "element",
		tagName: "code",
		properties: r,
		children: [{
			type: "text",
			value: n
		}]
	};
	return t.meta && (a.data = { meta: t.meta }), e.patch(t, a), a = e.applyData(t, a), a = {
		type: "element",
		tagName: "pre",
		properties: {},
		children: [a]
	}, e.patch(t, a), a;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/delete.js
function XC(e, t) {
	let n = {
		type: "element",
		tagName: "del",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/emphasis.js
function ZC(e, t) {
	let n = {
		type: "element",
		tagName: "em",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js
function QC(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = yx(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
	s === void 0 ? (s = 0, e.footnoteOrder.push(r), o = e.footnoteOrder.length) : o = a + 1, s += 1, e.footnoteCounts.set(r, s);
	let c = {
		type: "element",
		tagName: "a",
		properties: {
			href: "#" + n + "fn-" + i,
			id: n + "fnref-" + i + (s > 1 ? "-" + s : ""),
			dataFootnoteRef: !0,
			ariaDescribedBy: ["footnote-label"]
		},
		children: [{
			type: "text",
			value: String(o)
		}]
	};
	e.patch(t, c);
	let l = {
		type: "element",
		tagName: "sup",
		properties: {},
		children: [c]
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/heading.js
function $C(e, t) {
	let n = {
		type: "element",
		tagName: "h" + t.depth,
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/html.js
function ew(e, t) {
	if (e.options.allowDangerousHtml) {
		let n = {
			type: "raw",
			value: t.value
		};
		return e.patch(t, n), e.applyData(t, n);
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/revert.js
function tw(e, t) {
	let n = t.referenceType, r = "]";
	if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [{
		type: "text",
		value: "![" + t.alt + r
	}];
	let i = e.all(t), a = i[0];
	a && a.type === "text" ? a.value = "[" + a.value : i.unshift({
		type: "text",
		value: "["
	});
	let o = i[i.length - 1];
	return o && o.type === "text" ? o.value += r : i.push({
		type: "text",
		value: r
	}), i;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/image-reference.js
function nw(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return tw(e, t);
	let i = {
		src: yx(r.url || ""),
		alt: t.alt
	};
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "img",
		properties: i,
		children: []
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/image.js
function rw(e, t) {
	let n = { src: yx(t.url) };
	t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "img",
		properties: n,
		children: []
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/inline-code.js
function iw(e, t) {
	let n = {
		type: "text",
		value: t.value.replace(/\r?\n|\r/g, " ")
	};
	e.patch(t, n);
	let r = {
		type: "element",
		tagName: "code",
		properties: {},
		children: [n]
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/link-reference.js
function aw(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return tw(e, t);
	let i = { href: yx(r.url || "") };
	r.title !== null && r.title !== void 0 && (i.title = r.title);
	let a = {
		type: "element",
		tagName: "a",
		properties: i,
		children: e.all(t)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/link.js
function ow(e, t) {
	let n = { href: yx(t.url) };
	t.title !== null && t.title !== void 0 && (n.title = t.title);
	let r = {
		type: "element",
		tagName: "a",
		properties: n,
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/list-item.js
function sw(e, t, n) {
	let r = e.all(t), i = n ? cw(n) : lw(t), a = {}, o = [];
	if (typeof t.checked == "boolean") {
		let e = r[0], n;
		e && e.type === "element" && e.tagName === "p" ? n = e : (n = {
			type: "element",
			tagName: "p",
			properties: {},
			children: []
		}, r.unshift(n)), n.children.length > 0 && n.children.unshift({
			type: "text",
			value: " "
		}), n.children.unshift({
			type: "element",
			tagName: "input",
			properties: {
				type: "checkbox",
				checked: t.checked,
				disabled: !0
			},
			children: []
		}), a.className = ["task-list-item"];
	}
	let s = -1;
	for (; ++s < r.length;) {
		let e = r[s];
		(i || s !== 0 || e.type !== "element" || e.tagName !== "p") && o.push({
			type: "text",
			value: "\n"
		}), e.type === "element" && e.tagName === "p" && !i ? o.push(...e.children) : o.push(e);
	}
	let c = r[r.length - 1];
	c && (i || c.type !== "element" || c.tagName !== "p") && o.push({
		type: "text",
		value: "\n"
	});
	let l = {
		type: "element",
		tagName: "li",
		properties: a,
		children: o
	};
	return e.patch(t, l), e.applyData(t, l);
}
function cw(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = lw(n[r]);
	}
	return t;
}
function lw(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/list.js
function uw(e, t) {
	let n = {}, r = e.all(t), i = -1;
	for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length;) {
		let e = r[i];
		if (e.type === "element" && e.tagName === "li" && e.properties && Array.isArray(e.properties.className) && e.properties.className.includes("task-list-item")) {
			n.className = ["contains-task-list"];
			break;
		}
	}
	let a = {
		type: "element",
		tagName: t.ordered ? "ol" : "ul",
		properties: n,
		children: e.wrap(r, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/paragraph.js
function dw(e, t) {
	let n = {
		type: "element",
		tagName: "p",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/root.js
function fw(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/strong.js
function pw(e, t) {
	let n = {
		type: "element",
		tagName: "strong",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table.js
function mw(e, t) {
	let n = e.all(t), r = n.shift(), i = [];
	if (r) {
		let n = {
			type: "element",
			tagName: "thead",
			properties: {},
			children: e.wrap([r], !0)
		};
		e.patch(t.children[0], n), i.push(n);
	}
	if (n.length > 0) {
		let r = {
			type: "element",
			tagName: "tbody",
			properties: {},
			children: e.wrap(n, !0)
		}, a = sb(t.children[1]), o = ob(t.children[t.children.length - 1]);
		a && o && (r.position = {
			start: a,
			end: o
		}), i.push(r);
	}
	let a = {
		type: "element",
		tagName: "table",
		properties: {},
		children: e.wrap(i, !0)
	};
	return e.patch(t, a), e.applyData(t, a);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table-row.js
function hw(e, t, n) {
	let r = n ? n.children : void 0, i = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", a = n && n.type === "table" ? n.align : void 0, o = a ? a.length : t.children.length, s = -1, c = [];
	for (; ++s < o;) {
		let n = t.children[s], r = {}, o = a ? a[s] : void 0;
		o && (r.align = o);
		let l = {
			type: "element",
			tagName: i,
			properties: r,
			children: []
		};
		n && (l.children = e.all(n), e.patch(n, l), l = e.applyData(n, l)), c.push(l);
	}
	let l = {
		type: "element",
		tagName: "tr",
		properties: {},
		children: e.wrap(c, !0)
	};
	return e.patch(t, l), e.applyData(t, l);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/table-cell.js
function gw(e, t) {
	let n = {
		type: "element",
		tagName: "td",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/trim-lines/index.js
var _w = 9, vw = 32;
function yw(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(bw(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(bw(t.slice(i), i > 0, !1)), a.join("");
}
function bw(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === _w || t === vw;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === _w || t === vw;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/text.js
function xw(e, t) {
	let n = {
		type: "text",
		value: yw(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function Sw(e, t) {
	let n = {
		type: "element",
		tagName: "hr",
		properties: {},
		children: []
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/index.js
var Cw = {
	blockquote: qC,
	break: JC,
	code: YC,
	delete: XC,
	emphasis: ZC,
	footnoteReference: QC,
	heading: $C,
	html: ew,
	imageReference: nw,
	image: rw,
	inlineCode: iw,
	linkReference: aw,
	link: ow,
	listItem: sw,
	list: uw,
	paragraph: dw,
	root: fw,
	strong: pw,
	table: mw,
	tableCell: gw,
	tableRow: hw,
	text: xw,
	thematicBreak: Sw,
	toml: ww,
	yaml: ww,
	definition: ww,
	footnoteDefinition: ww
};
function ww() {}
//#endregion
//#region ../../node_modules/@ungap/structured-clone/esm/deserialize.js
var Tw = typeof self == "object" ? self : globalThis, Ew = (e, t) => {
	let n = (t, n) => (e.set(n, t), t), r = (i) => {
		if (e.has(i)) return e.get(i);
		let [a, o] = t[i];
		switch (a) {
			case 0:
			case -1: return n(o, i);
			case 1: {
				let e = n([], i);
				for (let t of o) e.push(r(t));
				return e;
			}
			case 2: {
				let e = n({}, i);
				for (let [t, n] of o) e[r(t)] = r(n);
				return e;
			}
			case 3: return n(new Date(o), i);
			case 4: {
				let { source: e, flags: t } = o;
				return n(new RegExp(e, t), i);
			}
			case 5: {
				let e = n(/* @__PURE__ */ new Map(), i);
				for (let [t, n] of o) e.set(r(t), r(n));
				return e;
			}
			case 6: {
				let e = n(/* @__PURE__ */ new Set(), i);
				for (let t of o) e.add(r(t));
				return e;
			}
			case 7: {
				let { name: e, message: t } = o;
				return n(new Tw[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Tw[a](o), i);
	};
	return r;
}, Dw = (e) => Ew(/* @__PURE__ */ new Map(), e)(0), Ow = "", { toString: kw } = {}, { keys: Aw } = Object, jw = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = kw.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ow];
		case "Object": return [2, Ow];
		case "Date": return [3, Ow];
		case "RegExp": return [4, Ow];
		case "Map": return [5, Ow];
		case "Set": return [6, Ow];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Mw = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), Nw = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = jw(r);
		switch (o) {
			case 0: {
				let t = r;
				switch (s) {
					case "bigint":
						o = 8, t = r.toString();
						break;
					case "function":
					case "symbol":
						if (e) throw TypeError("unable to serialize " + s);
						t = null;
						break;
					case "undefined": return i([-1], r);
				}
				return i([o, t], r);
			}
			case 1: {
				if (s) {
					let e = r;
					return s === "DataView" ? e = new Uint8Array(r.buffer) : s === "ArrayBuffer" && (e = new Uint8Array(r)), i([s, [...e]], r);
				}
				let e = [], t = i([o, e], r);
				for (let t of r) e.push(a(t));
				return t;
			}
			case 2: {
				if (s) switch (s) {
					case "BigInt": return i([s, r.toString()], r);
					case "Boolean":
					case "Number":
					case "String": return i([s, r.valueOf()], r);
				}
				if (t && "toJSON" in r) return a(r.toJSON());
				let n = [], c = i([o, n], r);
				for (let t of Aw(r)) (e || !Mw(jw(r[t]))) && n.push([a(t), a(r[t])]);
				return c;
			}
			case 3: return i([o, r.toISOString()], r);
			case 4: {
				let { source: e, flags: t } = r;
				return i([o, {
					source: e,
					flags: t
				}], r);
			}
			case 5: {
				let t = [], n = i([o, t], r);
				for (let [n, i] of r) (e || !(Mw(jw(n)) || Mw(jw(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Mw(jw(n))) && t.push(a(n));
				return n;
			}
		}
		let { message: c } = r;
		return i([o, {
			name: s,
			message: c
		}], r);
	};
	return a;
}, Pw = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return Nw(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Fw = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Dw(Pw(e, t)) : structuredClone(e) : (e, t) => Dw(Pw(e, t));
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/footer.js
function Iw(e, t) {
	let n = [{
		type: "text",
		value: "↩"
	}];
	return t > 1 && n.push({
		type: "element",
		tagName: "sup",
		properties: {},
		children: [{
			type: "text",
			value: String(t)
		}]
	}), n;
}
function Lw(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Rw(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Iw, r = e.options.footnoteBackLabel || Lw, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = yx(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
		for (; f !== void 0 && ++u <= f;) {
			d.length > 0 && d.push({
				type: "text",
				value: " "
			});
			let e = typeof n == "string" ? n : n(c, u);
			typeof e == "string" && (e = {
				type: "text",
				value: e
			}), d.push({
				type: "element",
				tagName: "a",
				properties: {
					href: "#" + t + "fnref-" + l + (u > 1 ? "-" + u : ""),
					dataFootnoteBackref: "",
					ariaLabel: typeof r == "string" ? r : r(c, u),
					className: ["data-footnote-backref"]
				},
				children: Array.isArray(e) ? e : [e]
			});
		}
		let p = a[a.length - 1];
		if (p && p.type === "element" && p.tagName === "p") {
			let e = p.children[p.children.length - 1];
			e && e.type === "text" ? e.value += " " : p.children.push({
				type: "text",
				value: " "
			}), p.children.push(...d);
		} else a.push(...d);
		let m = {
			type: "element",
			tagName: "li",
			properties: { id: t + "fn-" + l },
			children: e.wrap(a, !0)
		};
		e.patch(i, m), s.push(m);
	}
	if (s.length !== 0) return {
		type: "element",
		tagName: "section",
		properties: {
			dataFootnotes: !0,
			className: ["footnotes"]
		},
		children: [
			{
				type: "element",
				tagName: a,
				properties: {
					...Fw(o),
					id: "footnote-label"
				},
				children: [{
					type: "text",
					value: i
				}]
			},
			{
				type: "text",
				value: "\n"
			},
			{
				type: "element",
				tagName: "ol",
				properties: {},
				children: e.wrap(s, !0)
			},
			{
				type: "text",
				value: "\n"
			}
		]
	};
}
//#endregion
//#region ../../node_modules/unist-util-is/lib/index.js
var zw = (function(e) {
	if (e == null) return Ww;
	if (typeof e == "function") return Uw(e);
	if (typeof e == "object") return Array.isArray(e) ? Bw(e) : Vw(e);
	if (typeof e == "string") return Hw(e);
	throw Error("Expected function, string, or object as test");
});
function Bw(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = zw(e[n]);
	return Uw(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function Vw(e) {
	let t = e;
	return Uw(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Hw(e) {
	return Uw(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Uw(e) {
	return t;
	function t(t, n, r) {
		return !!(Gw(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Ww() {
	return !0;
}
function Gw(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/color.js
function Kw(e) {
	return e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/index.js
var qw = [];
function Jw(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = zw(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Kw(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = qw, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = Yw(n(e, c)), l[0] === !1)) return l;
			if ("children" in e && e.children) {
				let t = e;
				if (t.children && l[0] !== "skip") for (d = (r ? t.children.length : -1) + o, f = c.concat(t); d > -1 && d < t.children.length;) {
					let e = t.children[d];
					if (u = s(e, d, f)(), u[0] === !1) return u;
					d = typeof u[1] == "number" ? u[1] : d + o;
				}
			}
			return l;
		}
	}
}
function Yw(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? qw : [e];
}
//#endregion
//#region ../../node_modules/unist-util-visit/lib/index.js
function Xw(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Jw(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/state.js
var Zw = {}.hasOwnProperty, Qw = {};
function $w(e, t) {
	let n = t || Qw, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: tT,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...Cw,
			...n.handlers
		},
		one: o,
		options: n,
		patch: eT,
		wrap: rT
	};
	return Xw(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Zw.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Fw(n);
				return r.children = a.all(e), r;
			}
			return Fw(e);
		}
		return (a.options.unknownHandler || nT)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = iT(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = iT(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function eT(e, t) {
	e.position && (t.position = lb(e));
}
function tT(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Fw(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function nT(e, t) {
	let n = t.data || {}, r = "value" in t && !(Zw.call(n, "hProperties") || Zw.call(n, "hChildren")) ? {
		type: "text",
		value: t.value
	} : {
		type: "element",
		tagName: "div",
		properties: {},
		children: e.all(t)
	};
	return e.patch(t, r), e.applyData(t, r);
}
function rT(e, t) {
	let n = [], r = -1;
	for (t && n.push({
		type: "text",
		value: "\n"
	}); ++r < e.length;) r && n.push({
		type: "text",
		value: "\n"
	}), n.push(e[r]);
	return t && e.length > 0 && n.push({
		type: "text",
		value: "\n"
	}), n;
}
function iT(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/index.js
function aT(e, t) {
	let n = $w(e, t), r = n.one(e, void 0), i = Rw(n), a = Array.isArray(r) ? {
		type: "root",
		children: r
	} : r || {
		type: "root",
		children: []
	};
	return i && ("children" in a, a.children.push({
		type: "text",
		value: "\n"
	}, i)), a;
}
//#endregion
//#region ../../node_modules/remark-rehype/lib/index.js
function oT(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = aT(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return aT(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../../node_modules/bail/index.js
function sT(e) {
	if (e) throw e;
}
//#endregion
//#region ../../node_modules/unified/node_modules/is-plain-obj/index.js
var cT = /* @__PURE__ */ z((/* @__PURE__ */ I(((e, t) => {
	var n = Object.prototype.hasOwnProperty, r = Object.prototype.toString, i = Object.defineProperty, a = Object.getOwnPropertyDescriptor, o = function(e) {
		return typeof Array.isArray == "function" ? Array.isArray(e) : r.call(e) === "[object Array]";
	}, s = function(e) {
		if (!e || r.call(e) !== "[object Object]") return !1;
		var t = n.call(e, "constructor"), i = e.constructor && e.constructor.prototype && n.call(e.constructor.prototype, "isPrototypeOf");
		if (e.constructor && !t && !i) return !1;
		for (var a in e);
		return a === void 0 || n.call(e, a);
	}, c = function(e, t) {
		i && t.name === "__proto__" ? i(e, t.name, {
			enumerable: !0,
			configurable: !0,
			value: t.newValue,
			writable: !0
		}) : e[t.name] = t.newValue;
	}, l = function(e, t) {
		if (t === "__proto__") {
			if (!n.call(e, t)) return;
			if (a) return a(e, t).value;
		}
		return e[t];
	};
	t.exports = function e() {
		var t, n, r, i, a, u, d = arguments[0], f = 1, p = arguments.length, m = !1;
		for (typeof d == "boolean" && (m = d, d = arguments[1] || {}, f = 2), (d == null || typeof d != "object" && typeof d != "function") && (d = {}); f < p; ++f) if (t = arguments[f], t != null) for (n in t) r = l(d, n), i = l(t, n), d !== i && (m && i && (s(i) || (a = o(i))) ? (a ? (a = !1, u = r && o(r) ? r : []) : u = r && s(r) ? r : {}, c(d, {
			name: n,
			newValue: e(m, u, i)
		})) : i !== void 0 && c(d, {
			name: n,
			newValue: i
		}));
		return d;
	};
})))(), 1);
function lT(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../../node_modules/trough/lib/index.js
function uT() {
	let e = [], t = {
		run: n,
		use: r
	};
	return t;
	function n(...t) {
		let n = -1, r = t.pop();
		if (typeof r != "function") throw TypeError("Expected function as last argument, not " + r);
		i(null, ...t);
		function i(a, ...o) {
			let s = e[++n], c = -1;
			if (a) {
				r(a);
				return;
			}
			for (; ++c < t.length;) (o[c] === null || o[c] === void 0) && (o[c] = t[c]);
			t = o, s ? dT(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function dT(e, t) {
	let n;
	return r;
	function r(...t) {
		let r = e.length > t.length, o;
		r && t.push(i);
		try {
			o = e.apply(this, t);
		} catch (e) {
			let t = e;
			if (r && n) throw t;
			return i(t);
		}
		r || (o && o.then && typeof o.then == "function" ? o.then(a, i) : o instanceof Error ? i(o) : a(o));
	}
	function i(e, ...r) {
		n || (n = !0, t(e, ...r));
	}
	function a(e) {
		i(null, e);
	}
}
//#endregion
//#region ../../node_modules/vfile/lib/minpath.browser.js
var fT = {
	basename: pT,
	dirname: mT,
	extname: hT,
	join: gT,
	sep: "/"
};
function pT(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	yT(e);
	let n = 0, r = -1, i = e.length, a;
	if (t === void 0 || t.length === 0 || t.length > e.length) {
		for (; i--;) if (e.codePointAt(i) === 47) {
			if (a) {
				n = i + 1;
				break;
			}
		} else r < 0 && (a = !0, r = i + 1);
		return r < 0 ? "" : e.slice(n, r);
	}
	if (t === e) return "";
	let o = -1, s = t.length - 1;
	for (; i--;) if (e.codePointAt(i) === 47) {
		if (a) {
			n = i + 1;
			break;
		}
	} else o < 0 && (a = !0, o = i + 1), s > -1 && (e.codePointAt(i) === t.codePointAt(s--) ? s < 0 && (r = i) : (s = -1, r = o));
	return n === r ? r = o : r < 0 && (r = e.length), e.slice(n, r);
}
function mT(e) {
	if (yT(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function hT(e) {
	yT(e);
	let t = e.length, n = -1, r = 0, i = -1, a = 0, o;
	for (; t--;) {
		let s = e.codePointAt(t);
		if (s === 47) {
			if (o) {
				r = t + 1;
				break;
			}
			continue;
		}
		n < 0 && (o = !0, n = t + 1), s === 46 ? i < 0 ? i = t : a !== 1 && (a = 1) : i > -1 && (a = -1);
	}
	return i < 0 || n < 0 || a === 0 || a === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
}
function gT(...e) {
	let t = -1, n;
	for (; ++t < e.length;) yT(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : _T(n);
}
function _T(e) {
	yT(e);
	let t = e.codePointAt(0) === 47, n = vT(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function vT(e, t) {
	let n = "", r = 0, i = -1, a = 0, o = -1, s, c;
	for (; ++o <= e.length;) {
		if (o < e.length) s = e.codePointAt(o);
		else if (s === 47) break;
		else s = 47;
		if (s === 47) {
			if (!(i === o - 1 || a === 1)) if (i !== o - 1 && a === 2) {
				if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
					if (n.length > 2) {
						if (c = n.lastIndexOf("/"), c !== n.length - 1) {
							c < 0 ? (n = "", r = 0) : (n = n.slice(0, c), r = n.length - 1 - n.lastIndexOf("/")), i = o, a = 0;
							continue;
						}
					} else if (n.length > 0) {
						n = "", r = 0, i = o, a = 0;
						continue;
					}
				}
				t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
			} else n.length > 0 ? n += "/" + e.slice(i + 1, o) : n = e.slice(i + 1, o), r = o - i - 1;
			i = o, a = 0;
		} else s === 46 && a > -1 ? a++ : a = -1;
	}
	return n;
}
function yT(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/vfile/lib/minproc.browser.js
var bT = { cwd: xT };
function xT() {
	return "/";
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.shared.js
function ST(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.browser.js
function CT(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!ST(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return wT(e);
}
function wT(e) {
	if (e.hostname !== "") {
		let e = /* @__PURE__ */ TypeError("File URL host must be \"localhost\" or empty on darwin");
		throw e.code = "ERR_INVALID_FILE_URL_HOST", e;
	}
	let t = e.pathname, n = -1;
	for (; ++n < t.length;) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
		let e = t.codePointAt(n + 2);
		if (e === 70 || e === 102) {
			let e = /* @__PURE__ */ TypeError("File URL path must not include encoded / characters");
			throw e.code = "ERR_INVALID_FILE_URL_PATH", e;
		}
	}
	return decodeURIComponent(t);
}
//#endregion
//#region ../../node_modules/vfile/lib/index.js
var TT = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], ET = class {
	constructor(e) {
		let t;
		t = e ? ST(e) ? { path: e } : typeof e == "string" || AT(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : bT.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < TT.length;) {
			let e = TT[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) TT.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? fT.basename(this.path) : void 0;
	}
	set basename(e) {
		OT(e, "basename"), DT(e, "basename"), this.path = fT.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? fT.dirname(this.path) : void 0;
	}
	set dirname(e) {
		kT(this.basename, "dirname"), this.path = fT.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? fT.extname(this.path) : void 0;
	}
	set extname(e) {
		if (DT(e, "extname"), kT(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = fT.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		ST(e) && (e = CT(e)), OT(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? fT.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		OT(e, "stem"), DT(e, "stem"), this.path = fT.join(this.dirname || "", e + (this.extname || ""));
	}
	fail(e, t, n) {
		let r = this.message(e, t, n);
		throw r.fatal = !0, r;
	}
	info(e, t, n) {
		let r = this.message(e, t, n);
		return r.fatal = void 0, r;
	}
	message(e, t, n) {
		let r = new mb(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function DT(e, t) {
	if (e && e.includes(fT.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + fT.sep + "`");
}
function OT(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function kT(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function AT(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/unified/lib/callable-instance.js
var jT = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), MT = {}.hasOwnProperty, NT = new class e extends jT {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = uT();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, cT.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (IT("data", this.frozen), this.namespace[e] = t, this) : MT.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (IT("data", this.frozen), this.namespace = e, this) : this.namespace;
	}
	freeze() {
		if (this.frozen) return this;
		let e = this;
		for (; ++this.freezeIndex < this.attachers.length;) {
			let [t, ...n] = this.attachers[this.freezeIndex];
			if (n[0] === !1) continue;
			n[0] === !0 && (n[0] = void 0);
			let r = t.call(e, ...n);
			typeof r == "function" && this.transformers.use(r);
		}
		return this.frozen = !0, this.freezeIndex = Infinity, this;
	}
	parse(e) {
		this.freeze();
		let t = zT(e), n = this.parser || this.Parser;
		return PT("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), PT("process", this.parser || this.Parser), FT("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = zT(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				VT(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), PT("processSync", this.parser || this.Parser), FT("processSync", this.compiler || this.Compiler), this.process(e, r), RT("processSync", "process", t), n;
		function r(e, r) {
			t = !0, sT(e), n = r;
		}
	}
	run(e, t, n) {
		LT(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = zT(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), RT("runSync", "run", n), r;
		function i(e, t) {
			sT(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = zT(t), r = this.compiler || this.Compiler;
		return FT("stringify", r), LT(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (IT("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
		else if (typeof e == "object") Array.isArray(e) ? o(e) : a(e);
		else throw TypeError("Expected usable value, not `" + e + "`");
		return this;
		function i(e) {
			if (typeof e == "function") s(e, []);
			else if (typeof e == "object") if (Array.isArray(e)) {
				let [t, ...n] = e;
				s(t, n);
			} else a(e);
			else throw TypeError("Expected usable value, not `" + e + "`");
		}
		function a(e) {
			if (!("plugins" in e) && !("settings" in e)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
			o(e.plugins), e.settings && (r.settings = (0, cT.default)(!0, r.settings, e.settings));
		}
		function o(e) {
			let t = -1;
			if (e != null) if (Array.isArray(e)) for (; ++t < e.length;) {
				let n = e[t];
				i(n);
			}
			else throw TypeError("Expected a list of plugins, not `" + e + "`");
		}
		function s(e, t) {
			let r = -1, i = -1;
			for (; ++r < n.length;) if (n[r][0] === e) {
				i = r;
				break;
			}
			if (i === -1) n.push([e, ...t]);
			else if (t.length > 0) {
				let [r, ...a] = t, o = n[i][1];
				lT(o) && lT(r) && (r = (0, cT.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function PT(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function FT(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function IT(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function LT(e) {
	if (!lT(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function RT(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function zT(e) {
	return BT(e) ? e : new ET(e);
}
function BT(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function VT(e) {
	return typeof e == "string" || HT(e);
}
function HT(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/react-markdown/lib/index.js
var UT = [], WT = { allowDangerousHtml: !0 }, GT = /^(https?|ircs?|mailto|xmpp)$/i, KT = [
	{
		from: "astPlugins",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowDangerousHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "allowNode",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowElement"
	},
	{
		from: "allowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "allowedElements"
	},
	{
		from: "className",
		id: "remove-classname"
	},
	{
		from: "disallowedTypes",
		id: "replace-allownode-allowedtypes-and-disallowedtypes",
		to: "disallowedElements"
	},
	{
		from: "escapeHtml",
		id: "remove-buggy-html-in-markdown-parser"
	},
	{
		from: "includeElementIndex",
		id: "#remove-includeelementindex"
	},
	{
		from: "includeNodeIndex",
		id: "change-includenodeindex-to-includeelementindex"
	},
	{
		from: "linkTarget",
		id: "remove-linktarget"
	},
	{
		from: "plugins",
		id: "change-plugins-to-remarkplugins",
		to: "remarkPlugins"
	},
	{
		from: "rawSourcePos",
		id: "#remove-rawsourcepos"
	},
	{
		from: "renderers",
		id: "change-renderers-to-components",
		to: "components"
	},
	{
		from: "source",
		id: "change-source-to-children",
		to: "children"
	},
	{
		from: "sourcePos",
		id: "#remove-sourcepos"
	},
	{
		from: "transformImageUri",
		id: "#add-urltransform",
		to: "urlTransform"
	},
	{
		from: "transformLinkUri",
		id: "#add-urltransform",
		to: "urlTransform"
	}
];
function qT(e) {
	let t = JT(e), n = YT(e);
	return XT(t.runSync(t.parse(n), n), e);
}
function JT(e) {
	let t = e.rehypePlugins || UT, n = e.remarkPlugins || UT, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...WT
	} : WT;
	return NT().use(KC).use(n).use(oT, r).use(t);
}
function YT(e) {
	let t = e.children || "", n = new ET();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function XT(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || ZT;
	for (let e of KT) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Xw(e, l), Sb(e, {
		Fragment: D,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: O,
		jsxs: k,
		passKeys: !0,
		passNode: !0
	});
	function l(e, t, i) {
		if (e.type === "raw" && i && typeof t == "number") return o ? i.children.splice(t, 1) : i.children[t] = {
			type: "text",
			value: e.value
		}, t;
		if (e.type === "element") {
			let t;
			for (t in Wb) if (Object.hasOwn(Wb, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Wb[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function ZT(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || GT.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region ../../node_modules/ccount/index.js
function QT(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function $T(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/lib/index.js
function eE(e, t, n) {
	let r = zw((n || {}).ignore || []), i = tE(t), a = -1;
	for (; ++a < i.length;) Jw(e, "text", o);
	function o(e, t) {
		let n = -1, i;
		for (; ++n < t.length;) {
			let e = t[n], a = i ? i.children : void 0;
			if (r(e, a ? a.indexOf(e) : void 0, i)) return;
			i = e;
		}
		if (i) return s(e, t);
	}
	function s(e, t) {
		let n = t[t.length - 1], r = i[a][0], o = i[a][1], s = 0, c = n.children.indexOf(e), l = !1, u = [];
		r.lastIndex = 0;
		let d = r.exec(e.value);
		for (; d;) {
			let n = d.index, i = {
				index: d.index,
				input: d.input,
				stack: [...t, e]
			}, a = o(...d, i);
			if (typeof a == "string" && (a = a.length > 0 ? {
				type: "text",
				value: a
			} : void 0), a === !1 ? r.lastIndex = n + 1 : (s !== n && u.push({
				type: "text",
				value: e.value.slice(s, n)
			}), Array.isArray(a) ? u.push(...a) : a && u.push(a), s = n + d[0].length, l = !0), !r.global) break;
			d = r.exec(e.value);
		}
		return l ? (s < e.value.length && u.push({
			type: "text",
			value: e.value.slice(s)
		}), n.children.splice(c, 1, ...u)) : u = [e], c + u.length;
	}
}
function tE(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([nE(e[0]), rE(e[1])]);
	}
	return t;
}
function nE(e) {
	return typeof e == "string" ? new RegExp($T(e), "g") : e;
}
function rE(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var iE = "phrasing", aE = [
	"autolink",
	"link",
	"image",
	"label"
];
function oE() {
	return {
		transforms: [mE],
		enter: {
			literalAutolink: cE,
			literalAutolinkEmail: lE,
			literalAutolinkHttp: lE,
			literalAutolinkWww: lE
		},
		exit: {
			literalAutolink: pE,
			literalAutolinkEmail: fE,
			literalAutolinkHttp: uE,
			literalAutolinkWww: dE
		}
	};
}
function sE() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: iE,
			notInConstruct: aE
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: iE,
			notInConstruct: aE
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: iE,
			notInConstruct: aE
		}
	] };
}
function cE(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function lE(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function uE(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function dE(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function fE(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function pE(e) {
	this.exit(e);
}
function mE(e) {
	eE(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, hE], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, gE]], { ignore: ["link", "linkReference"] });
}
function hE(e, t, n, r, i) {
	let a = "";
	if (!yE(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !_E(n))) return !1;
	let o = vE(n + r);
	if (!o[0]) return !1;
	let s = {
		type: "link",
		title: null,
		url: a + t + o[0],
		children: [{
			type: "text",
			value: t + o[0]
		}]
	};
	return o[1] ? [s, {
		type: "text",
		value: o[1]
	}] : s;
}
function gE(e, t, n, r) {
	return !yE(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function _E(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function vE(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = QT(e, "("), a = QT(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function yE(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || _x(n) || gx(n)) && (!t || n !== 47);
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-footnote/lib/index.js
kE.peek = OE;
function bE() {
	this.buffer();
}
function xE(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function SE() {
	this.buffer();
}
function CE(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function wE(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ax(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function TE(e) {
	this.exit(e);
}
function EE(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = ax(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function DE(e) {
	this.exit(e);
}
function OE() {
	return "[";
}
function kE(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function AE() {
	return {
		enter: {
			gfmFootnoteCallString: bE,
			gfmFootnoteCall: xE,
			gfmFootnoteDefinitionLabelString: SE,
			gfmFootnoteDefinition: CE
		},
		exit: {
			gfmFootnoteCallString: wE,
			gfmFootnoteCall: TE,
			gfmFootnoteDefinitionLabelString: EE,
			gfmFootnoteDefinition: DE
		}
	};
}
function jE(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: kE
		},
		unsafe: [{
			character: "[",
			inConstruct: [
				"label",
				"phrasing",
				"reference"
			]
		}]
	};
	function n(e, n, r, i) {
		let a = r.createTracker(i), o = a.move("[^"), s = r.enter("footnoteDefinition"), c = r.enter("label");
		return o += a.move(r.safe(r.associationId(e), {
			before: o,
			after: "]"
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? NE : ME))), s(), o;
	}
}
function ME(e, t, n) {
	return t === 0 ? e : NE(e, t, n);
}
function NE(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-strikethrough/lib/index.js
var PE = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
zE.peek = BE;
function FE() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: LE },
		exit: { strikethrough: RE }
	};
}
function IE() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: PE
		}],
		handlers: { delete: zE }
	};
}
function LE(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function RE(e) {
	this.exit(e);
}
function zE(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function BE() {
	return "~";
}
//#endregion
//#region ../../node_modules/markdown-table/index.js
function VE(e) {
	return e.length;
}
function HE(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || VE, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = UE(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = WE(r[d]);
	else {
		let e = WE(r);
		for (; ++d < l;) a[d] = e;
	}
	d = -1;
	let f = [], p = [];
	for (; ++d < l;) {
		let e = a[d], t = "", r = "";
		e === 99 ? (t = ":", r = ":") : e === 108 ? t = ":" : e === 114 && (r = ":");
		let i = n.alignDelimiters === !1 ? 1 : Math.max(1, c[d] - t.length - r.length), o = t + "-".repeat(i) + r;
		n.alignDelimiters !== !1 && (i = t.length + i + r.length, i > c[d] && (c[d] = i), p[d] = i), f[d] = o;
	}
	o.splice(1, 0, f), s.splice(1, 0, p), u = -1;
	let m = [];
	for (; ++u < o.length;) {
		let e = o[u], t = s[u];
		d = -1;
		let r = [];
		for (; ++d < l;) {
			let i = e[d] || "", o = "", s = "";
			if (n.alignDelimiters !== !1) {
				let e = c[d] - (t[d] || 0), n = a[d];
				n === 114 ? o = " ".repeat(e) : n === 99 ? e % 2 ? (o = " ".repeat(e / 2 + .5), s = " ".repeat(e / 2 - .5)) : (o = " ".repeat(e / 2), s = o) : s = " ".repeat(e);
			}
			n.delimiterStart !== !1 && !d && r.push("|"), n.padding !== !1 && !(n.alignDelimiters === !1 && i === "") && (n.delimiterStart !== !1 || d) && r.push(" "), n.alignDelimiters !== !1 && r.push(o), r.push(i), n.alignDelimiters !== !1 && r.push(s), n.padding !== !1 && r.push(" "), (n.delimiterEnd !== !1 || d !== l - 1) && r.push("|");
		}
		m.push(n.delimiterEnd === !1 ? r.join("").replace(/ +$/, "") : r.join(""));
	}
	return m.join("\n");
}
function UE(e) {
	return e == null ? "" : String(e);
}
function WE(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function GE(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), KE);
	return i(), o;
}
function KE(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function qE(e, t) {
	return JE(e, t.inConstruct, !0) && !JE(e, t.notInConstruct, !1);
}
function JE(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/break.js
function YE(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && qE(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../../node_modules/longest-streak/index.js
function XE(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function ZE(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function QE(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/code.js
function $E(e, t, n, r) {
	let i = QE(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (ZE(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, eD);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(XE(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
	if (e.lang) {
		let t = n.enter(`codeFencedLang${o}`);
		u += s.move(n.safe(e.lang, {
			before: u,
			after: " ",
			encode: ["`"],
			...s.current()
		})), t();
	}
	if (e.lang && e.meta) {
		let t = n.enter(`codeFencedMeta${o}`);
		u += s.move(" "), u += s.move(n.safe(e.meta, {
			before: u,
			after: "\n",
			encode: ["`"],
			...s.current()
		})), t();
	}
	return u += s.move("\n"), a && (u += s.move(a + "\n")), u += s.move(c), l(), u;
}
function eD(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function tD(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/definition.js
function nD(e, t, n, r) {
	let i = tD(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
	return l += c.move(n.safe(n.associationId(e), {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]: "), s(), !e.url || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : "\n",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), o(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-emphasis.js
function rD(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function iD(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function aD(e, t, n) {
	let r = Dx(e), i = Dx(t);
	return r === void 0 ? i === void 0 ? n === "_" ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !0
	} : r === 1 ? i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !0
	} : {
		inside: !1,
		outside: !1
	} : i === void 0 ? {
		inside: !1,
		outside: !1
	} : i === 1 ? {
		inside: !0,
		outside: !1
	} : {
		inside: !1,
		outside: !1
	};
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/emphasis.js
oD.peek = sD;
function oD(e, t, n, r) {
	let i = rD(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = aD(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = iD(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = aD(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + iD(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function sD(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function cD(e, t) {
	let n = !1;
	return Xw(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Kb(e) && (t.options.setext || n));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/heading.js
function lD(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (cD(e, n)) {
		let t = n.enter("headingSetext"), r = n.enter("phrasing"), o = n.containerPhrasing(e, {
			...a.current(),
			before: "\n",
			after: "\n"
		});
		return r(), t(), o + "\n" + (i === 1 ? "=" : "-").repeat(o.length - (Math.max(o.lastIndexOf("\r"), o.lastIndexOf("\n")) + 1));
	}
	let o = "#".repeat(i), s = n.enter("headingAtx"), c = n.enter("phrasing");
	a.move(o + " ");
	let l = n.containerPhrasing(e, {
		before: "# ",
		after: "\n",
		...a.current()
	});
	return /^[\t ]/.test(l) && (l = iD(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/html.js
uD.peek = dD;
function uD(e) {
	return e.value || "";
}
function dD() {
	return "<";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image.js
fD.peek = pD;
function fD(e, t, n, r) {
	let i = tD(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
	return l += c.move(n.safe(e.alt, {
		before: l,
		after: "]",
		...c.current()
	})), l += c.move("]("), s(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (s = n.enter("destinationLiteral"), l += c.move("<"), l += c.move(n.safe(e.url, {
		before: l,
		after: ">",
		...c.current()
	})), l += c.move(">")) : (s = n.enter("destinationRaw"), l += c.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...c.current()
	}))), s(), e.title && (s = n.enter(`title${a}`), l += c.move(" " + i), l += c.move(n.safe(e.title, {
		before: l,
		after: i,
		...c.current()
	})), l += c.move(i), s()), l += c.move(")"), o(), l;
}
function pD() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
mD.peek = hD;
function mD(e, t, n, r) {
	let i = e.referenceType, a = n.enter("imageReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("!["), l = n.safe(e.alt, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function hD() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
gD.peek = _D;
function gD(e, t, n) {
	let r = e.value || "", i = "`", a = -1;
	for (; RegExp("(^|[^`])" + i + "([^`]|$)").test(r);) i += "`";
	for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++a < n.unsafe.length;) {
		let e = n.unsafe[a], t = n.compilePattern(e), i;
		if (e.atBreak) for (; i = t.exec(r);) {
			let e = i.index;
			r.charCodeAt(e) === 10 && r.charCodeAt(e - 1) === 13 && e--, r = r.slice(0, e) + " " + r.slice(i.index + 1);
		}
	}
	return i + r + i;
}
function _D() {
	return "`";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function vD(e, t) {
	let n = Kb(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link.js
yD.peek = bD;
function yD(e, t, n, r) {
	let i = tD(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (vD(e, n)) {
		let t = n.stack;
		n.stack = [], s = n.enter("autolink");
		let r = o.move("<");
		return r += o.move(n.containerPhrasing(e, {
			before: r,
			after: ">",
			...o.current()
		})), r += o.move(">"), s(), n.stack = t, r;
	}
	s = n.enter("link"), c = n.enter("label");
	let l = o.move("[");
	return l += o.move(n.containerPhrasing(e, {
		before: l,
		after: "](",
		...o.current()
	})), l += o.move("]("), c(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (c = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
		before: l,
		after: ">",
		...o.current()
	})), l += o.move(">")) : (c = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
		before: l,
		after: e.title ? " " : ")",
		...o.current()
	}))), c(), e.title && (c = n.enter(`title${a}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
		before: l,
		after: i,
		...o.current()
	})), l += o.move(i), c()), l += o.move(")"), s(), l;
}
function bD(e, t, n) {
	return vD(e, n) ? "<" : "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
xD.peek = SD;
function xD(e, t, n, r) {
	let i = e.referenceType, a = n.enter("linkReference"), o = n.enter("label"), s = n.createTracker(r), c = s.move("["), l = n.containerPhrasing(e, {
		before: c,
		after: "]",
		...s.current()
	});
	c += s.move(l + "]["), o();
	let u = n.stack;
	n.stack = [], o = n.enter("reference");
	let d = n.safe(n.associationId(e), {
		before: c,
		after: "]",
		...s.current()
	});
	return o(), n.stack = u, a(), i === "full" || !l || l !== d ? c += s.move(d + "]") : i === "shortcut" ? c = c.slice(0, -1) : c += s.move("]"), c;
}
function SD() {
	return "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function CD(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function wD(e) {
	let t = CD(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function TD(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function ED(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list.js
function DD(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? TD(n) : CD(n), s = e.ordered ? o === "." ? ")" : "." : wD(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), ED(n) === o && t) {
			let t = -1;
			for (; ++t < e.children.length;) {
				let n = e.children[t];
				if (n && n.type === "listItem" && n.children && n.children[0] && n.children[0].type === "thematicBreak") {
					c = !0;
					break;
				}
			}
		}
	}
	c && (o = s), n.bulletCurrent = o;
	let l = n.containerFlow(e, r);
	return n.bulletLastUsed = o, n.bulletCurrent = a, i(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js
function OD(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function kD(e, t, n, r) {
	let i = OD(n), a = n.bulletCurrent || CD(n);
	t && t.type === "list" && t.ordered && (a = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === !1 ? 0 : t.children.indexOf(e)) + a);
	let o = a.length + 1;
	(i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (o = Math.ceil(o / 4) * 4);
	let s = n.createTracker(r);
	s.move(a + " ".repeat(o - a.length)), s.shift(o);
	let c = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, s.current()), u);
	return c(), l;
	function u(e, t, n) {
		return t ? (n ? "" : " ".repeat(o)) + e : (n ? a : a + " ".repeat(o - a.length)) + e;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/paragraph.js
function AD(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../../node_modules/mdast-util-phrasing/lib/index.js
var jD = zw([
	"break",
	"delete",
	"emphasis",
	"footnote",
	"footnoteReference",
	"image",
	"imageReference",
	"inlineCode",
	"inlineMath",
	"link",
	"linkReference",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"strong",
	"text",
	"textDirective"
]);
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/root.js
function MD(e, t, n, r) {
	return (e.children.some(function(e) {
		return jD(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function ND(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/strong.js
PD.peek = FD;
function PD(e, t, n, r) {
	let i = ND(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = aD(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = iD(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = aD(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + iD(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function FD(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/text.js
function ID(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function LD(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function RD(e, t, n) {
	let r = (ED(n) + (n.options.ruleSpaces ? " " : "")).repeat(LD(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/index.js
var zD = {
	blockquote: GE,
	break: YE,
	code: $E,
	definition: nD,
	emphasis: oD,
	hardBreak: YE,
	heading: lD,
	html: uD,
	image: fD,
	imageReference: mD,
	inlineCode: gD,
	link: yD,
	linkReference: xD,
	list: DD,
	listItem: kD,
	paragraph: AD,
	root: MD,
	strong: PD,
	text: ID,
	thematicBreak: RD
};
//#endregion
//#region ../../node_modules/mdast-util-gfm-table/lib/index.js
function BD() {
	return {
		enter: {
			table: VD,
			tableData: GD,
			tableHeader: GD,
			tableRow: UD
		},
		exit: {
			codeText: KD,
			table: HD,
			tableData: WD,
			tableHeader: WD,
			tableRow: WD
		}
	};
}
function VD(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function HD(e) {
	this.exit(e), this.data.inTable = void 0;
}
function UD(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function WD(e) {
	this.exit(e);
}
function GD(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function KD(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, qD));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function qD(e, t) {
	return t === "|" ? t : e;
}
function JD(e) {
	let t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, a = n ? " " : "|";
	return {
		unsafe: [
			{
				character: "\r",
				inConstruct: "tableCell"
			},
			{
				character: "\n",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: "|",
				after: "[	 :-]"
			},
			{
				character: "|",
				inConstruct: "tableCell"
			},
			{
				atBreak: !0,
				character: ":",
				after: "-"
			},
			{
				atBreak: !0,
				character: "-",
				after: "[:|-]"
			}
		],
		handlers: {
			inlineCode: f,
			table: o,
			tableCell: c,
			tableRow: s
		}
	};
	function o(e, t, n, r) {
		return l(u(e, n, r), e.align);
	}
	function s(e, t, n, r) {
		let i = l([d(e, n, r)]);
		return i.slice(0, i.indexOf("\n"));
	}
	function c(e, t, n, r) {
		let i = n.enter("tableCell"), o = n.enter("phrasing"), s = n.containerPhrasing(e, {
			...r,
			before: a,
			after: a
		});
		return o(), i(), s;
	}
	function l(e, t) {
		return HE(e, {
			align: t,
			alignDelimiters: r,
			padding: n,
			stringLength: i
		});
	}
	function u(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("table");
		for (; ++i < r.length;) a[i] = d(r[i], t, n);
		return o(), a;
	}
	function d(e, t, n) {
		let r = e.children, i = -1, a = [], o = t.enter("tableRow");
		for (; ++i < r.length;) a[i] = c(r[i], e, t, n);
		return o(), a;
	}
	function f(e, t, n) {
		let r = zD.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-task-list-item/lib/index.js
function YD() {
	return { exit: {
		taskListCheckValueChecked: ZD,
		taskListCheckValueUnchecked: ZD,
		paragraph: QD
	} };
}
function XD() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: $D }
	};
}
function ZD(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function QD(e) {
	let t = this.stack[this.stack.length - 2];
	if (t && t.type === "listItem" && typeof t.checked == "boolean") {
		let e = this.stack[this.stack.length - 1];
		e.type;
		let n = e.children[0];
		if (n && n.type === "text") {
			let r = t.children, i = -1, a;
			for (; ++i < r.length;) {
				let e = r[i];
				if (e.type === "paragraph") {
					a = e;
					break;
				}
			}
			a === e && (n.value = n.value.slice(1), n.value.length === 0 ? e.children.shift() : e.position && n.position && typeof n.position.start.offset == "number" && (n.position.start.column++, n.position.start.offset++, e.position.start = Object.assign({}, n.position.start)));
		}
	}
	this.exit(e);
}
function $D(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = zD.listItem(e, t, n, {
		...r,
		...s.current()
	});
	return a && (c = c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), c;
	function l(e) {
		return e + o;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-gfm/lib/index.js
function eO() {
	return [
		oE(),
		AE(),
		FE(),
		BD(),
		YD()
	];
}
function tO(e) {
	return { extensions: [
		sE(),
		jE(e),
		IE(),
		JD(e),
		XD()
	] };
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var nO = {
	tokenize: gO,
	partial: !0
}, rO = {
	tokenize: _O,
	partial: !0
}, iO = {
	tokenize: vO,
	partial: !0
}, aO = {
	tokenize: yO,
	partial: !0
}, oO = {
	tokenize: bO,
	partial: !0
}, sO = {
	name: "wwwAutolink",
	tokenize: mO,
	previous: xO
}, cO = {
	name: "protocolAutolink",
	tokenize: hO,
	previous: SO
}, lO = {
	name: "emailAutolink",
	tokenize: pO,
	previous: CO
}, uO = {};
function dO() {
	return { text: uO };
}
for (var fO = 48; fO < 123;) uO[fO] = lO, fO++, fO === 58 ? fO = 65 : fO === 91 && (fO = 97);
uO[43] = lO, uO[45] = lO, uO[46] = lO, uO[95] = lO, uO[72] = [lO, cO], uO[104] = [lO, cO], uO[87] = [lO, sO], uO[119] = [lO, sO];
function pO(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !wO(t) || !CO.call(r, r.previous) || TO(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return wO(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(oO, u, l)(t) : t === 45 || t === 95 || sx(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && ox(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function mO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !xO.call(r, r.previous) || TO(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(nO, e.attempt(rO, e.attempt(iO, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function hO(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && SO.call(r, r.previous) && !TO(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (ox(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
		if (t === 58) {
			let n = i.toLowerCase();
			if (n === "http" || n === "https") return e.consume(t), c;
		}
		return n(t);
	}
	function c(t) {
		return t === 47 ? (e.consume(t), a ? l : (a = !0, c)) : n(t);
	}
	function l(t) {
		return t === null || lx(t) || mx(t) || _x(t) || gx(t) ? n(t) : e.attempt(rO, e.attempt(iO, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function gO(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function _O(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(aO, c, s)(t) : t === null || mx(t) || _x(t) || t !== 45 && gx(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function vO(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(aO, t, a)(o) : o === null || mx(o) || _x(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function yO(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || mx(o) || _x(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || mx(e) || _x(e) ? t(e) : r(e);
	}
	function a(e) {
		return ox(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : ox(t) ? (e.consume(t), o) : n(t);
	}
}
function bO(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return sx(e) ? n(e) : t(e);
	}
}
function xO(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || mx(e);
}
function SO(e) {
	return !ox(e);
}
function CO(e) {
	return !(e === 47 || wO(e));
}
function wO(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || sx(e);
}
function TO(e) {
	let t = e.length, n = !1;
	for (; t--;) {
		let r = e[t][1];
		if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
			n = !0;
			break;
		}
		if (r._gfmAutolinkLiteralWalkedInto) {
			n = !1;
			break;
		}
	}
	return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), n;
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-footnote/lib/syntax.js
var EO = {
	tokenize: PO,
	partial: !0
};
function DO() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: jO,
			continuation: { tokenize: MO },
			exit: NO
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: AO
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: OO,
				resolveTo: kO
			}
		}
	};
}
function OO(e, t, n) {
	let r = this, i = r.events.length, a = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), o;
	for (; i--;) {
		let e = r.events[i][1];
		if (e.type === "labelImage") {
			o = e;
			break;
		}
		if (e.type === "gfmFootnoteCall" || e.type === "labelLink" || e.type === "label" || e.type === "image" || e.type === "link") break;
	}
	return s;
	function s(i) {
		if (!o || !o._balanced) return n(i);
		let s = ax(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function kO(e, t) {
	let n = e.length;
	for (; n--;) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
		e[n][1];
		break;
	}
	e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
	let r = {
		type: "gfmFootnoteCall",
		start: Object.assign({}, e[n + 3][1].start),
		end: Object.assign({}, e[e.length - 1][1].end)
	}, i = {
		type: "gfmFootnoteCallMarker",
		start: Object.assign({}, e[n + 3][1].end),
		end: Object.assign({}, e[n + 3][1].end)
	};
	i.end.column++, i.end.offset++, i.end._bufferIndex++;
	let a = {
		type: "gfmFootnoteCallString",
		start: Object.assign({}, i.end),
		end: Object.assign({}, e[e.length - 1][1].start)
	}, o = {
		type: "chunkString",
		contentType: "string",
		start: Object.assign({}, a.start),
		end: Object.assign({}, a.end)
	}, s = [
		e[n + 1],
		e[n + 2],
		[
			"enter",
			r,
			t
		],
		e[n + 3],
		e[n + 4],
		[
			"enter",
			i,
			t
		],
		[
			"exit",
			i,
			t
		],
		[
			"enter",
			a,
			t
		],
		[
			"enter",
			o,
			t
		],
		[
			"exit",
			o,
			t
		],
		[
			"exit",
			a,
			t
		],
		e[e.length - 2],
		e[e.length - 1],
		[
			"exit",
			r,
			t
		]
	];
	return e.splice(n, e.length - n + 1, ...s), e;
}
function AO(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || mx(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(ax(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return mx(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function jO(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || mx(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = ax(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return mx(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), bx(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function MO(e, t, n) {
	return e.check(Fx, t, e.attempt(EO, t, n));
}
function NO(e) {
	e.exit("gfmFootnoteDefinition");
}
function PO(e, t, n) {
	let r = this;
	return bx(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function FO(e) {
	let t = (e || {}).singleTilde, n = {
		name: "strikethrough",
		tokenize: i,
		resolveAll: r
	};
	return t ??= !0, {
		text: { 126: n },
		insideSpan: { null: [n] },
		attentionMarkers: { null: [126] }
	};
	function r(e, t) {
		let n = -1;
		for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "strikethroughSequenceTemporary" && e[n][1]._close) {
			let r = n;
			for (; r--;) if (e[r][0] === "exit" && e[r][1].type === "strikethroughSequenceTemporary" && e[r][1]._open && e[n][1].end.offset - e[n][1].start.offset === e[r][1].end.offset - e[r][1].start.offset) {
				e[n][1].type = "strikethroughSequence", e[r][1].type = "strikethroughSequence";
				let i = {
					type: "strikethrough",
					start: Object.assign({}, e[r][1].start),
					end: Object.assign({}, e[n][1].end)
				}, a = {
					type: "strikethroughText",
					start: Object.assign({}, e[r][1].end),
					end: Object.assign({}, e[n][1].start)
				}, o = [
					[
						"enter",
						i,
						t
					],
					[
						"enter",
						e[r][1],
						t
					],
					[
						"exit",
						e[r][1],
						t
					],
					[
						"enter",
						a,
						t
					]
				], s = t.parser.constructs.insideSpan.null;
				s && Qb(o, o.length, 0, Ox(s, e.slice(r + 1, n), t)), Qb(o, o.length, 0, [
					[
						"exit",
						a,
						t
					],
					[
						"enter",
						e[n][1],
						t
					],
					[
						"exit",
						e[n][1],
						t
					],
					[
						"exit",
						i,
						t
					]
				]), Qb(e, r - 1, n - r + 3, o), n = r + o.length - 2;
				break;
			}
		}
		for (n = -1; ++n < e.length;) e[n][1].type === "strikethroughSequenceTemporary" && (e[n][1].type = "data");
		return e;
	}
	function i(e, n, r) {
		let i = this.previous, a = this.events, o = 0;
		return s;
		function s(t) {
			return i === 126 && a[a.length - 1][1].type !== "characterEscape" ? r(t) : (e.enter("strikethroughSequenceTemporary"), c(t));
		}
		function c(a) {
			let s = Dx(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Dx(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/edit-map.js
var IO = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		LO(this, e, t, n);
	}
	consume(e) {
		/* c8 ignore next 3 -- `resolve` is never called without tables, so without edits. */
		if (this.map.sort(function(e, t) {
			return e[0] - t[0];
		}), this.map.length === 0) return;
		let t = this.map.length, n = [];
		for (; t > 0;) --t, n.push(e.slice(this.map[t][0] + this.map[t][1]), this.map[t][2]), e.length = this.map[t][0];
		n.push(e.slice()), e.length = 0;
		let r = n.pop();
		for (; r;) {
			for (let t of r) e.push(t);
			r = n.pop();
		}
		this.map.length = 0;
	}
};
function LO(e, t, n, r) {
	let i = 0;
	if (!(n === 0 && r.length === 0)) {
		for (; i < e.map.length;) {
			if (e.map[i][0] === t) {
				e.map[i][1] += n, e.map[i][2].push(...r);
				return;
			}
			i += 1;
		}
		e.map.push([
			t,
			n,
			r
		]);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/infer.js
function RO(e, t) {
	let n = !1, r = [];
	for (; t < e.length;) {
		let i = e[t];
		if (n) {
			if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
			else if (i[1].type === "tableContent") {
				if (e[t - 1][1].type === "tableDelimiterMarker") {
					let e = r.length - 1;
					r[e] = r[e] === "left" ? "center" : "right";
				}
			} else if (i[1].type === "tableDelimiterRow") break;
		} else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = !0);
		t += 1;
	}
	return r;
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/syntax.js
function zO() {
	return { flow: { null: {
		name: "table",
		tokenize: BO,
		resolveAll: VO
	} } };
}
function BO(e, t, n) {
	let r = this, i = 0, a = 0, o;
	return s;
	function s(e) {
		let t = r.events.length - 1;
		for (; t > -1;) {
			let e = r.events[t][1].type;
			if (e === "lineEnding" || e === "linePrefix") t--;
			else break;
		}
		let i = t > -1 ? r.events[t][1].type : null, a = i === "tableHead" || i === "tableRow" ? S : c;
		return a === S && r.parser.lazy[r.now().line] ? n(e) : a(e);
	}
	function c(t) {
		return e.enter("tableHead"), e.enter("tableRow"), l(t);
	}
	function l(e) {
		return e === 124 ? u(e) : (o = !0, a += 1, u(e));
	}
	function u(t) {
		return t === null ? n(t) : px(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : hx(t) ? bx(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || mx(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, hx(t) ? bx(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return hx(t) ? bx(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || px(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return hx(t) ? bx(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || px(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || px(n) ? (e.exit("tableRow"), t(n)) : hx(n) ? bx(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || mx(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function VO(e, t) {
	let n = -1, r = !0, i = 0, a = [
		0,
		0,
		0,
		0
	], o = [
		0,
		0,
		0,
		0
	], s = !1, c = 0, l, u, d, f = new IO();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (UO(f, t, c, l, u), u = void 0, c = 0), l = {
			type: "table",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			l,
			t
		]])) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (r = !0, d = void 0, a = [
			0,
			0,
			0,
			0
		], o = [
			0,
			n + 1,
			0,
			0
		], s && (s = !1, u = {
			type: "tableBody",
			start: Object.assign({}, m.start),
			end: Object.assign({}, m.end)
		}, f.add(n, 0, [[
			"enter",
			u,
			t
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = HO(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = HO(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = HO(f, t, o, i, n, d)) : (o[0] = o[1], d = HO(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && UO(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = RO(t.events, n));
	}
	return e;
}
function HO(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, WO(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = WO(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = WO(t.events, n[2]), a = WO(t.events, n[3]), o = {
			type: "tableContent",
			start: Object.assign({}, i),
			end: Object.assign({}, a)
		};
		if (e.add(n[2], 0, [[
			"enter",
			o,
			t
		]]), r !== 2) {
			let r = t.events[n[2]], i = t.events[n[3]];
			if (r[1].end = Object.assign({}, i[1].end), r[1].type = "chunkText", r[1].contentType = "text", n[3] > n[2] + 1) {
				let t = n[2] + 1, r = n[3] - n[2] - 1;
				e.add(t, r, []);
			}
		}
		e.add(n[3] + 1, 0, [[
			"exit",
			o,
			t
		]]);
	}
	return i !== void 0 && (a.end = Object.assign({}, WO(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function UO(e, t, n, r, i) {
	let a = [], o = WO(t.events, n);
	i && (i.end = Object.assign({}, o), a.push([
		"exit",
		i,
		t
	])), r.end = Object.assign({}, o), a.push([
		"exit",
		r,
		t
	]), e.add(n + 1, 0, a);
}
function WO(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var GO = {
	name: "tasklistCheck",
	tokenize: qO
};
function KO() {
	return { text: { 91: GO } };
}
function qO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return mx(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return px(r) ? t(r) : hx(r) ? e.check({ tokenize: JO }, t, n)(r) : n(r);
	}
}
function JO(e, t, n) {
	return bx(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm/index.js
function YO(e) {
	return tx([
		dO(),
		DO(),
		FO(e),
		zO(),
		KO()
	]);
}
//#endregion
//#region ../../node_modules/remark-gfm/lib/index.js
var XO = {};
function ZO(e) {
	let t = this, n = e || XO, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(YO(n)), a.push(eO()), o.push(tO(n));
}
//#endregion
//#region ../ui/src/lib/markdown/extractText.ts
var QO = /* @__PURE__ */ z(Zf(), 1), $O = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map($O).join("") : p(e) ? $O(e.props.children ?? "") : "", ek = (e) => {
	if (typeof document > "u") return !1;
	let t = document.createElement("textarea");
	t.value = e, t.setAttribute("readonly", ""), t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.width = "1px", t.style.height = "1px", t.style.opacity = "0", document.body.appendChild(t), t.select(), t.setSelectionRange(0, e.length);
	try {
		return document.execCommand("copy");
	} catch {
		return !1;
	} finally {
		document.body.removeChild(t);
	}
}, tk = ({ resetDelayMs: e = 1200 } = {}) => {
	let [t, n] = T("idle"), r = g((e) => {
		if (!e) return;
		let t = typeof navigator > "u" ? null : navigator.clipboard;
		if (!t || typeof t.writeText != "function") {
			n(ek(e) ? "copied" : "error");
			return;
		}
		n("copied"), t.writeText(e).catch(() => {
			n(ek(e) ? "copied" : "error");
		});
	}, []);
	return v(() => {
		if (t === "idle" || typeof e != "number" || e <= 0) return;
		let r = window.setTimeout(() => {
			n("idle");
		}, e);
		return () => {
			window.clearTimeout(r);
		};
	}, [e, t]), {
		status: t,
		copy: r
	};
}, nk = ({ children: e, textToCopy: t, preProps: n }) => {
	let { status: r, copy: i } = tk(), a = /* @__PURE__ */ O(Qu, {});
	return r === "copied" ? a = /* @__PURE__ */ O(qu, {}) : r === "error" && (a = /* @__PURE__ */ O(Gu, {})), /* @__PURE__ */ k(yn, {
		variant: "surface",
		size: "flush",
		"data-theme": "neutral",
		className: "relative max-w-full",
		children: [/* @__PURE__ */ O("span", {
			className: "absolute right-2 top-2",
			children: /* @__PURE__ */ O(mn, {
				type: "button",
				variant: "neutral",
				size: "xs",
				"aria-label": "Copy code block",
				onClick: () => {
					i(t);
				},
				disabled: !t,
				iconOnly: !0,
				label: "Copy code block",
				leadingIcon: a
			})
		}), /* @__PURE__ */ O("pre", {
			className: "max-w-full overflow-x-auto whitespace-pre p-4 font-mono text-sm",
			...n,
			children: e
		})]
	});
}, rk = (e) => {
	if (!e) return null;
	let t = e.match(/language-([\w-]+)/);
	return t ? t[1] : null;
}, ik = (e) => (t) => {
	let { inline: n, children: r, className: i, node: a, ...o } = t, s = $O(r), c = rk(i), l = o, u = s.includes("\n");
	return n ?? (!c && !u) ? d(Ef, {
		...o,
		as: "code",
		theme: "neutral"
	}, r) : e ? e({
		children: r,
		textToCopy: s,
		preProps: l,
		language: c
	}) : /* @__PURE__ */ O(nk, {
		textToCopy: s,
		preProps: l,
		children: r
	});
}, ak = ik(), ok = (e, t) => ({ children: n, node: r, ...i }) => d(e, {
	...i,
	className: Q("font-semibold", t)
}, n), sk = {
	h1: ok("h2", "text-xl"),
	h2: ok("h3", "text-lg"),
	pre: ({ children: e }) => e,
	a: ({ children: e, node: t, ...n }) => /* @__PURE__ */ k("a", {
		className: "inline text-[var(--pc-color-text)] underline underline-offset-2",
		target: "_blank",
		rel: "noreferrer noopener",
		...n,
		children: [e, /* @__PURE__ */ O("span", {
			"aria-hidden": "true",
			className: "ml-1 inline-flex align-middle",
			children: /* @__PURE__ */ O(ed, {})
		})]
	}),
	h3: ok("h4"),
	h4: ok("h5"),
	h5: ok("h6"),
	h6: ok("h6"),
	p: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ O("p", {
		...r,
		className: Q("text-sm @md:text-base text-[var(--pc-color-text-muted)]", n),
		children: e
	}),
	strong: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ O("strong", {
		...r,
		className: Q("font-medium text-[var(--pc-color-text)]", n),
		children: e
	}),
	ul: ({ children: e, node: t, ...n }) => /* @__PURE__ */ O("ul", {
		className: "list-disc pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		...n,
		children: e
	}),
	ol: ({ children: e, node: t, ...n }) => /* @__PURE__ */ O("ol", {
		className: "list-decimal pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		style: { listStyleType: "decimal" },
		type: "1",
		...n,
		children: e
	}),
	li: ({ children: e, ...t }) => {
		let { className: n, ...r } = t, i = o.toArray(e).some((e) => p(e) && e.type === "a"), a = [
			"text-sm @md:text-base",
			"text-[var(--pc-color-text-muted)]",
			"[&>p:first-child]:inline",
			"[&>p+p]:mt-2",
			"[&>p+ul]:mt-2 [&>p+ol]:mt-2 [&>p+pre]:mt-2 [&>p+table]:mt-2",
			"[&>ul+p]:mt-2 [&>ol+p]:mt-2 [&>pre+p]:mt-2 [&>table+p]:mt-2",
			"[&>ul+pre]:mt-2 [&>ol+pre]:mt-2 [&>pre+ul]:mt-2 [&>pre+ol]:mt-2"
		], s = i ? "transition-colors" : void 0;
		return /* @__PURE__ */ O("li", {
			...r,
			className: Q(a, s, n),
			children: e
		});
	},
	code: ak
}, ck = (e, t) => ({
	...sk,
	code: t?.codeBlockRenderer ? ik(t.codeBlockRenderer) : sk.code,
	...e ?? {}
});
function lk({ content: e, components: t, className: n, codeBlockRenderer: r }) {
	return /* @__PURE__ */ O("div", {
		className: Q("w-full max-w-full min-w-0", "[&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words [&_h5]:break-words [&_h6]:break-words", "[&_p]:break-words [&_li]:break-words [&_a]:break-words [&_code]:break-words", "[&_h1]:mt-8 [&_h1:first-child]:mt-0", "[&_h2]:mt-7 [&_h2:first-child]:mt-0", "[&_h3]:mt-5 [&_h3:first-child]:mt-0", "[&_h4]:mt-5 [&_h4:first-child]:mt-0", "[&_h5]:mt-4 [&_h5:first-child]:mt-0", "[&_h6]:mt-4 [&_h6:first-child]:mt-0", "[&_h1+h1]:mt-3 [&_h1+h2]:mt-3", "[&_h2+h2]:mt-3 [&_h2+h3]:mt-3", "[&_h3+h3]:mt-2 [&_h3+h4]:mt-2", "[&_h4+h4]:mt-2 [&_h4+h5]:mt-2", "[&_h5+h5]:mt-2 [&_h5+h6]:mt-2", "[&_h6+h6]:mt-2", "[&_h1+*]:mt-2 [&_h2+*]:mt-2 [&_h3+*]:mt-2 [&_h4+*]:mt-2 [&_h5+*]:mt-2 [&_h6+*]:mt-2", "[&_h3+p]:mt-1.5", "[&_p+p]:mt-2 [&_p+ul]:mt-2 [&_p+ol]:mt-2 [&_p+pre]:mt-2 [&_p+table]:mt-2", "[&_ul+p]:mt-2 [&_ol+p]:mt-2 [&_pre+p]:mt-2 [&_table+p]:mt-2", "[&_ul+pre]:mt-2 [&_ol+pre]:mt-2 [&_pre+ul]:mt-2 [&_pre+ol]:mt-2", n),
		children: /* @__PURE__ */ O(qT, {
			remarkPlugins: [ZO],
			components: ck(t, { codeBlockRenderer: r }),
			children: e
		})
	});
}
//#endregion
//#region ../ui/src/lib/cashierFormLayout.ts
var uk = [
	"grid",
	"grid-cols-1",
	"items-start",
	"gap-x-2",
	"gap-y-2"
].join(" "), dk = new Set([
	"american-express",
	"diners-club",
	"discover",
	"elo",
	"hiper",
	"hipercard",
	"jcb",
	"maestro",
	"mastercard",
	"mir",
	"unionpay",
	"verve",
	"visa"
]), fk = (e) => {
	if (e) return dk.has(e) ? e : void 0;
}, pk = (e) => {
	let t = e?.trim();
	if (!t) return;
	let n = (0, QO.default)(t);
	if (n.length === 0) return;
	let r = n[0];
	if (!((r.matchStrength ?? 0) <= 0)) return fk(typeof r.type == "string" ? r.type : void 0);
};
["relative z-10 grid grid-cols-2 items-start gap-2 p-1"].join(" ");
//#endregion
//#region ../ui/src/lib/useSlidingIndicator.ts
function mk({ activeKey: e, dependencies: t = [] }) {
	let n = w(null), r = w(/* @__PURE__ */ new Map()), i = w(null), [a, o] = T({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		ready: !1
	}), s = g((e) => {
		n.current = e;
	}, []), c = g(() => {
		let t = n.current, i = r.current.get(e);
		if (!t || !i) {
			o((e) => e.ready ? {
				...e,
				ready: !1
			} : e);
			return;
		}
		let a = t.getBoundingClientRect(), s = i.getBoundingClientRect(), c = {
			left: s.left - a.left + t.scrollLeft - t.clientLeft,
			top: s.top - a.top + t.scrollTop - t.clientTop,
			width: s.width,
			height: s.height,
			ready: !0
		};
		o((e) => e.ready && e.left === c.left && e.top === c.top && e.width === c.width && e.height === c.height ? e : c);
	}, [e]), l = g((e) => (t) => {
		let n = r.current.get(e);
		i.current && n && n !== t && i.current.unobserve(n), r.current.set(e, t), i.current && t && i.current.observe(t);
	}, []);
	return x(() => {
		let e = requestAnimationFrame(() => {
			c();
		}), t = () => {
			requestAnimationFrame(() => {
				c();
			});
		};
		if (window.addEventListener("resize", t), typeof ResizeObserver > "u") return () => {
			cancelAnimationFrame(e), window.removeEventListener("resize", t);
		};
		let a = new ResizeObserver(c), o = new ResizeObserver(c);
		i.current = o, r.current.forEach((e) => {
			e && o.observe(e);
		});
		let s = n.current;
		return s && a.observe(s), () => {
			cancelAnimationFrame(e), window.removeEventListener("resize", t), a.disconnect(), o.disconnect(), i.current = null;
		};
	}, [t, c]), {
		containerRef: n,
		setContainerNode: s,
		registerOption: l,
		indicator: a,
		refresh: c
	};
}
function hk(e) {
	let [t, n] = T(!1);
	return v(() => {
		if (!e || t) return;
		let r = requestAnimationFrame(() => {
			n(!0);
		});
		return () => {
			cancelAnimationFrame(r);
		};
	}, [t, e]), t;
}
//#endregion
//#region ../ui/src/lib/Switcher.tsx
var gk = 2, _k = 8, vk = 120, yk = "relative inline-block min-w-0 max-w-full align-top", bk = Y("relative inline-flex max-w-full items-center rounded-[var(--pc-radius-full)]", "border border-[var(--pc-color-border-weaker)] bg-transparent p-1", "flex-nowrap"), xk = bk, Sk = Y("overflow-x-auto overflow-y-hidden", "[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]", "[&::-webkit-scrollbar]:h-[6px]", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]", "[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"), Ck = Y(bk, "overflow-hidden"), wk = Y(bk, "pointer-events-none fixed left-[-9999px] top-[-9999px] z-[-1] w-max max-w-none overflow-visible opacity-0"), Tk = {
	default: "md",
	compact: "sm"
}, Ek = {
	xs: "gap-0.5",
	sm: "gap-1",
	md: "gap-1",
	lg: "gap-1",
	xl: "gap-1"
}, Dk = {
	xs: Y("h-5 w-5 p-0.5 text-xs", "[&_svg]:h-3 [&_svg]:w-3"),
	sm: Y("h-6 w-6 p-0.5 text-sm", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
	md: Y("h-7 w-7 p-1 text-sm", "[&_svg]:h-4 [&_svg]:w-4"),
	lg: Y("h-8 w-8 p-1 text-base", "[&_svg]:h-[18px] [&_svg]:w-[18px]"),
	xl: Y("h-9 w-9 p-1.5 text-lg", "[&_svg]:h-5 [&_svg]:w-5")
}, Ok = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, kk = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, Ak = {
	xs: "h-5 w-5 p-0 text-xs",
	sm: "h-7 w-7 p-0 text-sm",
	md: "h-8 w-8 p-0 text-base",
	lg: "h-9 w-9 p-0 text-base",
	xl: "h-10 w-10 p-0 text-lg"
}, jk = "relative z-10 inline-flex items-center justify-center rounded-[var(--pc-radius-full)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-[var(--pc-color-surface)] whitespace-nowrap leading-none cursor-pointer disabled:cursor-not-allowed [font-variant-numeric:tabular-nums]", Mk = "relative z-10 inline-flex min-w-0 cursor-pointer items-center gap-0.5 rounded-[var(--pc-radius-full)] pr-1.5", Nk = "text-[var(--pc-color-text)]", Pk = "text-[var(--pc-color-text-muted)] hover:[background:var(--pc-color-border-weakest)]", Fk = "[background:var(--pc-color-secondary)] data-[theme=secondary]:[background:var(--pc-color-surface)]", Ik = (e) => typeof e == "string" || typeof e == "number", Lk = (e) => Ik(e) ? String(e) : Array.isArray(e) ? e.map((e) => Lk(e)).join(" ") : "", Rk = (e) => e === "danger" ? Y("text-[var(--pc-color-danger)]", "hover:[background:color-mix(in_srgb,var(--pc-color-danger)_12%,transparent)]") : Y("text-[var(--pc-color-text-muted)]", "hover:[background:var(--pc-color-surface)]"), zk = ({ hostNode: e, probeExpandedWidth: t }) => {
	let n = Math.ceil(e.clientWidth), r = Math.ceil(e.parentElement?.clientWidth ?? 0);
	return t ? Math.max(n, r) : n > 0 && r > 0 ? Math.min(n, r) : r > 0 ? r : n;
};
function Bk({ options: e, value: t, onChange: n, variant: r = "default", size: i, disabled: a = !1, allowReselect: o = !1, className: s, optionClassName: c, activeOptionClassName: l, inactiveOptionClassName: u, ariaLabel: d, navigation: f, overflowBehaviour: p = "dropdown", overflowMode: m = "auto", skeleton: h = !1 }) {
	let _ = i ?? Tk[r], b = dn("secondary"), [C, E] = T(!1), [ee, A] = T(!1), [j, M] = T(() => p !== "dropdown" || m !== "auto"), [N, P] = T(!1), F = w(null), I = w(null), L = w(null), R = w(null), z = w(null), B = w(null), V = w(!1), H = w(p !== "dropdown" || m !== "auto"), { setContainerNode: te, registerOption: U, indicator: W } = mk({
		activeKey: t,
		dependencies: [
			e,
			_,
			!!f
		]
	});
	v(() => {
		V.current = ee;
	}, [ee]), v(() => {
		H.current = j;
	}, [j]);
	let G = g(() => {
		z.current !== null && (window.clearTimeout(z.current), z.current = null);
	}, []), K = g((e, t = {}) => {
		let { immediate: n = !1 } = t, r = () => {
			B.current = null, A((t) => t === e ? t : (t && !e && P(!1), e)), M(!0);
		};
		if (n || !H.current) {
			G(), r();
			return;
		}
		if (e === V.current) {
			B.current = null, G();
			return;
		}
		B.current = e, G(), z.current = window.setTimeout(() => {
			z.current = null, B.current !== null && r();
		}, vk);
	}, [G]);
	v(() => () => {
		G();
	}, [G]);
	let ne = g((e) => {
		F.current = e;
	}, []), re = g((e) => {
		I.current = e, L.current = null, te(e);
	}, [te]), ie = g((e) => {
		I.current = e, L.current = e, te(null);
	}, [te]), ae = g(() => {
		if (p === "scroll") {
			G(), B.current = null, P(!1), A(!1), M(!0);
			return;
		}
		if (m === "full") {
			G(), B.current = null, P(!1), A(!1), M(!0);
			return;
		}
		if (m === "collapsed") {
			G(), B.current = null, A(!0), M(!0);
			return;
		}
		let e = F.current, t = R.current;
		if (!e || !t) return;
		let n = Math.ceil(t.scrollWidth), r = V.current, i = zk({
			hostNode: e,
			probeExpandedWidth: r
		});
		i <= 0 || n <= 0 || K(r ? n > i - _k : n > i + gk);
	}, [
		K,
		G,
		p,
		m
	]), oe = ee;
	m === "collapsed" ? oe = !0 : m === "full" && (oe = !1);
	let se = p === "dropdown" && oe, ce = p === "dropdown" && m === "auto" && !j;
	v(() => {
		if (!a) return;
		let e = requestAnimationFrame(() => {
			P(!1);
		});
		return () => {
			cancelAnimationFrame(e);
		};
	}, [a]), x(() => {
		if (p === "scroll") return;
		let e = null, t = () => {
			e !== null && cancelAnimationFrame(e), e = requestAnimationFrame(() => {
				e = null, a && P(!1), ae();
			});
		};
		t();
		let n = typeof ResizeObserver == "function" ? new ResizeObserver(() => {
			t();
		}) : null;
		if (n) {
			let e = /* @__PURE__ */ new Set(), t = (t) => {
				!t || e.has(t) || (e.add(t), n.observe(t));
			}, r = F.current;
			t(r), t(I.current), t(R.current), t(r?.parentElement ?? null), t(r?.parentElement?.parentElement ?? null);
		}
		let r = () => {
			t();
		};
		window.addEventListener("resize", r);
		let i = typeof document < "u" ? document.fonts : void 0, o = () => {
			t();
		};
		return i && i.addEventListener("loadingdone", o), () => {
			window.removeEventListener("resize", r), i && i.removeEventListener("loadingdone", o), n?.disconnect(), e !== null && cancelAnimationFrame(e);
		};
	}, [
		f,
		c,
		l,
		u,
		e,
		t,
		s,
		p,
		m,
		_,
		a,
		ae
	]);
	let le = se && !a && N, ue = Q(Nk, l), de = Q(Pk, u), fe = Q("pointer-events-none absolute rounded-[var(--pc-radius-full)]", Fk, C ? "transition-[top,left,width,height] duration-200 ease-out" : "transition-none"), q = f?.canGoPrevious ?? !0, pe = f?.canGoNext ?? !0, me = Q(jk, rn(_, !0), "z-20 shrink-0 disabled:opacity-50", de, f?.buttonClassName), J = S(() => e.find((e) => e.value === t) ?? null, [e, t]), he = S(() => J ? Ik(J.label) ? J.label : J.ariaLabel ?? J.label : null, [J]), ge = Y("inline-flex shrink-0 items-center justify-center text-current", Ok[_], "[&>svg]:h-full [&>svg]:w-full"), _e = (e, t) => t ? /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O("span", {
		className: ge,
		children: t
	}), e] }) : e, ve = S(() => e.map((e) => {
		let r = e.value === t, i = e.disabled === !0, s = r && !o, c = e.trailingAction, l = Ik(e.label) ? e.label : e.ariaLabel ?? e.label;
		return {
			id: e.value,
			label: l,
			icon: e.leadingIcon,
			theme: r ? "neutral" : void 0,
			selected: r,
			disabled: i || s,
			suppressDisabledCursor: s && !i,
			onSelect: () => {
				a || i || s || (C || E(!0), n(e.value));
			},
			trailingAction: c ? {
				ariaLabel: c.ariaLabel,
				icon: c.icon,
				disabled: c.disabled,
				theme: c.theme,
				onSelect: () => {
					a || c.disabled || c.onSelect?.();
				}
			} : void 0
		};
	}), [
		o,
		a,
		C,
		n,
		e,
		t
	]), ye = Q(yk, !h && ce && "invisible pointer-events-none", a ? "opacity-60 pointer-events-none" : "", s), be = Q(xk, p === "scroll" ? Sk : "overflow-hidden", Ek[_]), xe = Q(Ck, Ek[_]), Se = Q(wk, Ek[_]), Ce = Q(jk, rn(_), c, ue, Fk, "z-20 min-w-0 flex-1 justify-start gap-2 px-3"), we = Q(jk, Ak[_], de, "z-20 shrink-0"), Te = y(), Ee = `${Te}-menu`, De = () => {
		a || e.length === 0 || P(!0);
	}, Oe = () => {
		a || e.length === 0 || P((e) => !e);
	}, ke = /* @__PURE__ */ k("div", {
		"aria-hidden": !0,
		ref: R,
		className: Se,
		"data-switcher-measurement": "true",
		children: [
			f && /* @__PURE__ */ O("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !q,
				className: me,
				children: f.previousIcon ?? "<"
			}),
			e.map(({ value: e, label: n, leadingIcon: r, disabled: i, trailingAction: o }) => {
				let s = e === t, l = !!o, u = s ? ue : de, d = l ? u : void 0, f = l ? void 0 : u, p = Q(jk, rn(_), c, r ? "gap-2" : void 0, l ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, f, i ? "opacity-50 cursor-not-allowed" : ""), m = Q(Mk, d, i ? "opacity-50" : void 0), h = Q(jk, Dk[_], "shrink-0 rounded-[inherit] bg-transparent", Rk(o?.theme), o?.disabled ? "opacity-50 cursor-not-allowed" : void 0);
				return o ? /* @__PURE__ */ k("div", {
					className: m,
					"data-theme": s ? b : void 0,
					children: [/* @__PURE__ */ O("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || i,
						className: p,
						children: _e(n, r)
					}), /* @__PURE__ */ O("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || o.disabled,
						className: h,
						children: o.icon
					})]
				}, `measure-${e}`) : /* @__PURE__ */ O("button", {
					type: "button",
					tabIndex: -1,
					disabled: a || i,
					className: p,
					children: _e(n, r)
				}, `measure-${e}`);
			}),
			f && /* @__PURE__ */ O("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !pe,
				className: me,
				children: f.nextIcon ?? ">"
			})
		]
	});
	if (h) {
		let t = Q(jk, rn(_), c, "cursor-default"), n = Q(jk, rn(_, !0), f?.buttonClassName, "cursor-default");
		return /* @__PURE__ */ O("div", {
			className: ye,
			"data-switcher-host": "true",
			"data-slot": "switcher-skeleton-shell",
			children: /* @__PURE__ */ k("div", {
				"aria-hidden": "true",
				className: be,
				"data-switcher-mode": "skeleton",
				children: [
					f && /* @__PURE__ */ O("div", {
						className: n,
						children: /* @__PURE__ */ O(fd, { className: "h-4 w-4 rounded-full" })
					}),
					e.map(({ value: e, label: n }) => {
						let r = Lk(n).trim().length;
						return /* @__PURE__ */ O("div", {
							className: t,
							children: /* @__PURE__ */ O(fd, {
								className: "h-3 rounded-full",
								style: { width: `${String(Math.max(4, Math.min(r, 14)))}ch` }
							})
						}, e);
					}),
					f && /* @__PURE__ */ O("div", {
						className: n,
						children: /* @__PURE__ */ O(fd, { className: "h-4 w-4 rounded-full" })
					})
				]
			})
		});
	}
	return /* @__PURE__ */ k("div", {
		ref: ne,
		className: ye,
		"data-switcher-host": "true",
		children: [se ? /* @__PURE__ */ k("div", {
			role: "group",
			"aria-label": d,
			className: xe,
			ref: ie,
			"data-switcher-mode": "collapsed",
			children: [
				f && /* @__PURE__ */ O("button", {
					type: "button",
					"aria-label": f.previousAriaLabel ?? "Previous",
					disabled: a || !q,
					className: me,
					onClick: () => {
						a || !q || (C || E(!0), f.onPrevious());
					},
					children: f.previousIcon ?? "<"
				}),
				/* @__PURE__ */ O("button", {
					id: Te,
					type: "button",
					"aria-haspopup": "menu",
					"aria-expanded": le,
					"aria-controls": Ee,
					"aria-label": d,
					disabled: a || e.length === 0,
					className: Ce,
					"data-theme": b,
					onClick: De,
					children: /* @__PURE__ */ k("span", {
						className: "flex min-w-0 flex-1 items-center gap-2 text-left",
						children: [J?.leadingIcon ? /* @__PURE__ */ O("span", {
							className: ge,
							children: J.leadingIcon
						}) : null, /* @__PURE__ */ O("span", {
							className: "min-w-0 truncate",
							children: he
						})]
					})
				}),
				/* @__PURE__ */ O("button", {
					type: "button",
					"aria-label": "Toggle options",
					"aria-haspopup": "menu",
					"aria-expanded": le,
					"aria-controls": Ee,
					disabled: a || e.length === 0,
					className: we,
					onClick: Oe,
					children: /* @__PURE__ */ O("span", {
						className: Q(Wr({ isOpen: le }), kk[_], "inline-flex items-center justify-center [&>svg]:h-full [&>svg]:w-full"),
						children: /* @__PURE__ */ O(Gr, {})
					})
				}),
				f && /* @__PURE__ */ O("button", {
					type: "button",
					"aria-label": f.nextAriaLabel ?? "Next",
					disabled: a || !pe,
					className: me,
					onClick: () => {
						a || !pe || (C || E(!0), f.onNext());
					},
					children: f.nextIcon ?? ">"
				}),
				/* @__PURE__ */ O(hi, {
					id: Ee,
					options: ve,
					isOpen: le,
					align: "start",
					widthMode: "content",
					usePortal: !0,
					anchorRef: L,
					labelledBy: Te,
					onRequestClose: () => {
						P(!1);
					}
				})
			]
		}) : /* @__PURE__ */ k("div", {
			role: "radiogroup",
			"aria-label": d,
			className: be,
			ref: re,
			"data-switcher-mode": "full",
			children: [
				W.ready && /* @__PURE__ */ O("div", {
					"aria-hidden": !0,
					className: fe,
					"data-theme": b,
					style: {
						top: W.top,
						left: W.left,
						width: W.width,
						height: W.height
					}
				}),
				f && /* @__PURE__ */ O("button", {
					type: "button",
					"aria-label": f.previousAriaLabel ?? "Previous",
					disabled: a || !q,
					className: me,
					onClick: () => {
						a || !q || (C || E(!0), f.onPrevious());
					},
					children: f.previousIcon ?? "<"
				}),
				e.map(({ value: e, label: r, leadingIcon: i, disabled: s, ariaLabel: l, trailingAction: u }) => {
					let d = e === t, f = d ? b : void 0, p = !!u, m = d ? ue : de, h = p ? m : void 0, g = p ? void 0 : m, v = Q(jk, rn(_), c, i ? "gap-2" : void 0, p ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, g, s ? "opacity-50 cursor-not-allowed" : ""), y = Q(Mk, h, a || s ? "opacity-50 cursor-not-allowed" : void 0), x = Q(jk, Dk[_], "shrink-0 rounded-[inherit] bg-transparent", Rk(u?.theme), u?.disabled ? "opacity-50 cursor-not-allowed" : void 0), S = () => {
						d && !o || a || s || (C || E(!0), n(e));
					};
					return u ? /* @__PURE__ */ k("div", {
						ref: U(e),
						className: y,
						"data-theme": f,
						onClick: S,
						children: [/* @__PURE__ */ O("button", {
							type: "button",
							role: "radio",
							"aria-checked": d,
							"aria-label": l,
							disabled: a || s,
							className: v,
							children: _e(r, i)
						}), /* @__PURE__ */ O("button", {
							type: "button",
							"aria-label": u.ariaLabel,
							disabled: a || u.disabled,
							className: x,
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), !(a || u.disabled) && u.onSelect?.();
							},
							children: u.icon
						})]
					}, e) : /* @__PURE__ */ O("button", {
						type: "button",
						role: "radio",
						"aria-checked": d,
						"aria-label": l,
						disabled: a || s,
						className: v,
						"data-theme": f,
						ref: U(e),
						onClick: S,
						children: _e(r, i)
					}, e);
				}),
				f && /* @__PURE__ */ O("button", {
					type: "button",
					"aria-label": f.nextAriaLabel ?? "Next",
					disabled: a || !pe,
					className: me,
					onClick: () => {
						a || !pe || (C || E(!0), f.onNext());
					},
					children: f.nextIcon ?? ">"
				})
			]
		}), ke]
	});
}
//#endregion
//#region ../ui/src/lib/NavigationList.tsx
var Vk = "relative flex w-full flex-row items-stretch", Hk = "relative flex w-full flex-col items-stretch gap-1", Uk = "border-b border-[var(--pc-color-depth-2)]", Wk = "rounded-[var(--pc-radius-xl)] p-1", Gk = "relative min-w-0 flex-1 inline-flex items-center justify-center gap-2 p-3.5 text-lg font-medium leading-none whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]", Kk = "relative inline-flex w-full items-center justify-between gap-3 rounded-[var(--pc-radius-lg)] px-3 py-1.5 text-left text-sm font-medium leading-5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:opacity-60", qk = "pr-1.5", Jk = "pr-1", Yk = "relative flex min-w-0 max-w-full shrink-0 items-stretch gap-0.5", Xk = "relative flex w-full min-w-0 items-stretch gap-1", Zk = "mr-1 self-center rounded-[var(--pc-radius-full)]", Qk = "mr-1 self-center rounded-[var(--pc-radius-full)]", $k = "inline-flex h-4 w-4 shrink-0 items-center justify-center text-current [&>svg]:h-full [&>svg]:w-full", eA = "text-[var(--pc-color-text)]", tA = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)]", nA = "text-[var(--pc-color-text)] bg-[var(--pc-color-depth-2)]", rA = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)] hover:bg-[var(--pc-color-depth-1)]", iA = "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)] hover:[background:color-mix(in_srgb,var(--pc-color-secondary)_92%,var(--pc-color-secondary))]", aA = "text-[var(--pc-color-text)] [background:transparent] hover:[background:var(--pc-color-depth-2)] focus-visible:[background:var(--pc-color-depth-2)]", oA = (e) => e && e !== "default" ? e : "neutral", sA = ({ active: e, theme: t }) => t === "danger" ? void 0 : Y(!e && "text-[var(--pc-color-text-muted)]", "hover:text-[var(--pc-color-text)]");
function cA({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", selectionSemantics: a = "tabs", itemStyle: o = "sliding", appearance: s = "default", showBorder: c = !0, disabled: l = !1, className: u, itemClassName: d, activeItemClassName: f, inactiveItemClassName: p, ariaLabel: m }) {
	let h = i === "vertical", g = a === "tabs", _ = o === "sliding", v = h ? Hk : Vk, y = "";
	c && (y = h ? Wk : Uk);
	let b = Q(Y(v, y, l ? "pointer-events-none opacity-60" : ""), u), x = s === "neutral" ? "neutral" : void 0, S = h ? _ ? nA : iA : eA, C = h ? _ ? rA : aA : tA, w = Q(S, f), T = Q(C, p), E = t.some((e) => e.value === n), D = t.find((e) => !e.disabled)?.value, { containerRef: ee, registerOption: A, indicator: j } = mk({
		activeKey: n,
		dependencies: [
			t,
			i,
			o,
			a
		]
	}), M = hk(j.ready), N = _ && j.ready, P = h ? "left-0 w-0.5" : "bottom-0 h-0.5", F = "transition-none";
	M && (F = h ? "transition-[top,height] duration-200 ease-out" : "transition-[left,width] duration-200 ease-out");
	let I = Y("pointer-events-none absolute rounded-[var(--pc-radius-full)] [background:var(--pc-color-secondary)]", P, F), L = h ? {
		top: j.top,
		height: j.height
	} : {
		left: j.left,
		width: j.width
	};
	return /* @__PURE__ */ k("div", {
		id: e,
		role: g ? "tablist" : "listbox",
		"aria-label": m,
		"aria-orientation": h ? "vertical" : void 0,
		"data-theme": x,
		className: b,
		ref: ee,
		children: [N && /* @__PURE__ */ O("div", {
			"aria-hidden": !0,
			className: I,
			style: L
		}), t.map(({ value: e, label: t, leadingIcon: i, badge: a, disabled: o, trailingAction: s }) => {
			let c = e === n, u = (() => {
				if (g) return c || !E && e === D ? 0 : -1;
			})(), f = h && _ ? "pl-4" : "", p = !!s, m = Q(Y(h ? Kk : Gk, f, p && (h ? Jk : qk)), d, c ? w : T), v = Y(h ? Xk : Yk), y = Y(h ? Qk : Zk, sA({
				active: c,
				theme: s?.theme
			})), b = /* @__PURE__ */ k("button", {
				type: "button",
				role: g ? "tab" : "option",
				"aria-selected": c,
				tabIndex: u,
				disabled: l || o,
				className: m,
				ref: p ? void 0 : A(e),
				onClick: () => {
					c || l || o || r(e);
				},
				children: [
					i && /* @__PURE__ */ O("span", {
						className: $k,
						children: i
					}),
					/* @__PURE__ */ O("span", {
						className: "min-w-0 truncate",
						children: t
					}),
					a && /* @__PURE__ */ O("span", {
						className: Y("shrink-0", h ? "" : "ml-1"),
						children: a
					})
				]
			}, e);
			if (!s) return b;
			let x = s;
			return /* @__PURE__ */ k("div", {
				ref: A(e),
				className: v,
				role: "presentation",
				children: [b, /* @__PURE__ */ O(mn, {
					"aria-label": x.ariaLabel,
					appearance: "ghost",
					className: y,
					disabled: l || o || x.disabled,
					iconOnly: !0,
					label: x.ariaLabel,
					leadingIcon: x.icon,
					onClick: (e) => {
						e.stopPropagation(), !(l || o || x.disabled) && x.onSelect?.();
					},
					showTooltip: !1,
					size: "xs",
					variant: oA(x.theme)
				})]
			}, e);
		})]
	});
}
//#endregion
//#region ../ui/src/lib/Tabs.tsx
function lA({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", showBorder: a = !0, disabled: o = !1, className: s, tabClassName: c, activeTabClassName: l, inactiveTabClassName: u, ariaLabel: d }) {
	return /* @__PURE__ */ O(cA, {
		id: e,
		options: t,
		value: n,
		onChange: r,
		orientation: i,
		selectionSemantics: "tabs",
		itemStyle: "sliding",
		showBorder: a,
		disabled: o,
		className: s,
		itemClassName: c,
		activeItemClassName: l,
		inactiveItemClassName: u,
		ariaLabel: d
	});
}
//#endregion
//#region ../ui/src/lib/overlayAnimation.ts
var uA = "preload-first-open", dA = "preload-always", fA = "preload-first-open";
function pA({ isOpen: e, animationMode: t = uA }) {
	let [n, r] = T(e);
	return v(() => {
		e && r(!0);
	}, [e]), {
		shouldPreloadClosedState: !e && (t === "preload-always" || t === "preload-first-open" && !n),
		shouldRender: e
	};
}
//#endregion
//#region ../ui/src/lib/motionPrimitives.ts
var mA = "transition-transform duration-[440ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", hA = "transition-opacity duration-[320ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", gA = "inset-0 z-[1050] flex h-full w-full overflow-hidden", _A = 440, vA = mA, yA = mA, bA = "transition-opacity duration-[260ms] ease-out motion-reduce:transition-none", xA = "transition-opacity duration-[150ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", SA = hA, CA = hA, wA = ["absolute inset-0 h-full w-full", "bg-[var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]"].join(" "), TA = [
	"relative pointer-events-auto flex min-h-0 min-w-0 max-w-full shrink-0 flex-col overflow-hidden",
	"bg-[var(--pc-color-surface)] text-[var(--pc-color-text)] shadow-2xl",
	"transform-gpu will-change-transform [backface-visibility:hidden] [contain:layout_paint_style]"
].join(" "), EA = ["px-4 py-3 @md:px-5 @md:py-4", "bg-inherit"].join(" "), DA = "border-b border-[var(--pc-color-border)]", OA = "text-lg font-medium text-[var(--pc-color-text)] leading-none", kA = "text-sm text-[var(--pc-color-text-secondary)] leading-none", AA = [
	"min-h-0 w-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden",
	"[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]",
	"[&::-webkit-scrollbar]:w-[6px]",
	"[&::-webkit-scrollbar-track]:bg-transparent",
	"[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]",
	"[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"
].join(" "), jA = {
	bottom: {
		container: "items-end justify-center",
		rounding: "rounded-t-[var(--pc-radius-3xl)]",
		open: "translate-y-0",
		closed: "translate-y-full"
	},
	top: {
		container: "items-start justify-center",
		rounding: "rounded-b-[var(--pc-radius-3xl)]",
		open: "translate-y-0",
		closed: "-translate-y-full"
	},
	right: {
		container: "items-center justify-end",
		rounding: "rounded-l-[var(--pc-radius-3xl)]",
		open: "translate-x-0",
		closed: "translate-x-full"
	},
	left: {
		container: "items-center justify-start",
		rounding: "rounded-r-[var(--pc-radius-3xl)]",
		open: "translate-x-0",
		closed: "-translate-x-full"
	}
}, MA = {
	bottom: {
		xs: "w-full max-h-[min(56vh,24rem,100%)] min-h-[min(24vh,100%)]",
		sm: "w-full max-h-[min(68vh,30rem,100%)] min-h-[min(28vh,100%)]",
		md: "w-full max-h-[min(80vh,36rem,100%)] min-h-[min(32vh,100%)]",
		lg: "w-full max-h-[min(88vh,44rem,100%)] min-h-[min(36vh,100%)]",
		xl: "w-full max-h-[min(92vh,52rem,100%)] min-h-[min(40vh,100%)]",
		full: "w-full h-full max-h-full"
	},
	top: {
		xs: "w-full max-h-[min(56vh,24rem,100%)] min-h-[min(24vh,100%)]",
		sm: "w-full max-h-[min(68vh,30rem,100%)] min-h-[min(28vh,100%)]",
		md: "w-full max-h-[min(80vh,36rem,100%)] min-h-[min(32vh,100%)]",
		lg: "w-full max-h-[min(88vh,44rem,100%)] min-h-[min(36vh,100%)]",
		xl: "w-full max-h-[min(92vh,52rem,100%)] min-h-[min(40vh,100%)]",
		full: "w-full h-full max-h-full"
	},
	right: {
		xs: "h-full w-[min(90vw,20rem)] max-w-full min-w-[14rem]",
		sm: "h-full w-[min(90vw,22rem)] max-w-full min-w-[15rem]",
		md: "h-full w-[min(90vw,24rem)] max-w-full min-w-[16rem]",
		lg: "h-full w-[min(96vw,40rem)] max-w-full min-w-[20rem]",
		xl: "h-full w-[min(98vw,48rem)] max-w-full min-w-[22rem]",
		full: "h-full w-full max-w-full"
	},
	left: {
		xs: "h-full w-[min(90vw,20rem)] max-w-full min-w-[14rem]",
		sm: "h-full w-[min(90vw,22rem)] max-w-full min-w-[15rem]",
		md: "h-full w-[min(90vw,24rem)] max-w-full min-w-[16rem]",
		lg: "h-full w-[min(96vw,40rem)] max-w-full min-w-[20rem]",
		xl: "h-full w-[min(98vw,48rem)] max-w-full min-w-[22rem]",
		full: "h-full w-full max-w-full"
	}
}, NA = () => () => void 0, PA = () => typeof document > "u" ? null : document.body, FA = () => null;
function IA({ isOpen: e, onClose: t, side: n = "right", size: r, title: i, description: a, headerActions: o, variant: s, onBack: c, backButtonLabel: l = "Back", backButtonDisabled: u = !1, children: d, portalContainer: f, overlayClassName: p, contentClassName: m, bodyClassName: h, closeOnOverlayClick: _ = !0, closeOnEscape: b = !0, ariaLabel: C, ariaLabelledby: D, ariaDescribedby: A, contentRef: j, fullSize: M = !1, rootClassName: N, showCloseButton: P = !0, closeButtonDisabled: F = !1, closeButtonClassName: I, closeButtonLabel: L, footer: R, showHeaderDivider: z = !1, animationMode: B = dA }) {
	let { shouldPreloadClosedState: V, shouldRender: H } = pA({
		isOpen: e,
		animationMode: B
	}), te = w(e), U = w(null), W = w(null), G = w(null), [K, ne] = T(e), [re, ie] = T(!1), [ae, oe] = T(!1), se = M ? "full" : r ?? "md", ce = S(() => ({
		...jA[n],
		size: MA[n][se]
	}), [se, n]), le = Qr(), ue = f ?? le, de = E(NA, PA, FA);
	v(() => {
		if (!e || !b || !t) return;
		let n = (e) => {
			e.key === "Escape" && (e.preventDefault(), t());
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}, [
		b,
		e,
		t
	]), x(() => {
		W.current !== null && (window.cancelAnimationFrame(W.current), W.current = null), G.current !== null && (window.cancelAnimationFrame(G.current), G.current = null), U.current !== null && (window.clearTimeout(U.current), U.current = null);
		let t = te.current;
		if (te.current = e, ne(e), e) {
			if (oe(!1), B === "standard") {
				ie(!1);
				return;
			}
			ie(!0), W.current = window.requestAnimationFrame(() => {
				W.current = null, G.current = window.requestAnimationFrame(() => {
					ie(!1), G.current = null;
				});
			});
			return;
		}
		if (ie(!1), !t) {
			oe(!1);
			return;
		}
		if (B === "standard") {
			oe(!1);
			return;
		}
		return oe(!0), U.current = window.setTimeout(() => {
			oe(!1), U.current = null;
		}, _A), () => {
			U.current !== null && (window.clearTimeout(U.current), U.current = null), W.current !== null && (window.cancelAnimationFrame(W.current), W.current = null), G.current !== null && (window.cancelAnimationFrame(G.current), G.current = null);
		};
	}, [B, e]);
	let fe = g(() => {
		!_ || !t || t();
	}, [_, t]), q = S(() => Q(ue ? `absolute ${gA}` : `fixed ${gA}`, p), [p, ue]), pe = ae || !e && K, me = ce.closed;
	re ? me = ce.closed : (V && !pe || e) && (me = ce.open);
	let J;
	re ? J = "transition-none" : V && !pe && (J = "invisible opacity-0 transition-none");
	let he = "opacity-0 transition-none";
	re || V && !pe ? he = "opacity-0 transition-none" : e ? he = "opacity-100 transition-none" : pe && (he = `opacity-0 ${xA}`);
	let ge = S(() => Q(TA, e ? vA : yA, ce.size, ce.rounding, me, J, m), [
		me,
		J,
		m,
		e,
		ce
	]), _e = S(() => L ?? C ?? "Close drawer", [C, L]), ve = dn(s), ye = y(), be = y(), xe = D || (i ? ye : void 0), Se = A || (a ? be : void 0), Ce = xe ? void 0 : C, we = ue ?? de;
	if (!(H || pe) || !we) return null;
	let Te = !!c, Ee = !!(i || a || o || Te || P && t), De = Nn("sm"), Y = Cd(i), Oe = !!Y, ke = Cd(a), Ae = e || pe, je = "opacity-0 transition-none";
	re || V && !pe ? je = "opacity-0 transition-none" : e ? je = `opacity-100 ${SA}` : pe && (je = `opacity-0 ${CA}`);
	let Me = pe ? `opacity-0 ${bA}` : "opacity-100 transition-none";
	return ee(/* @__PURE__ */ k("div", {
		className: Q(q, N, Ae ? "pointer-events-auto" : "pointer-events-none"),
		role: "presentation",
		"aria-hidden": !e,
		children: [/* @__PURE__ */ O("button", {
			type: "button",
			className: Q(wA, je),
			"aria-label": _e,
			onClick: fe
		}), /* @__PURE__ */ O("div", {
			className: Q("pointer-events-none relative flex h-full w-full min-w-0 overflow-hidden", ce.container, Me),
			children: /* @__PURE__ */ O("div", {
				ref: j,
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": xe,
				"aria-describedby": Se,
				"aria-label": Ce,
				tabIndex: -1,
				"data-theme": ve,
				className: Q("pointer-events-auto", ge),
				children: /* @__PURE__ */ k("div", {
					"data-drawer-internals": "",
					className: Q("flex min-h-0 min-w-0 flex-1 flex-col", he),
					children: [
						Ee && /* @__PURE__ */ O("header", {
							className: Q(EA, z && DA),
							children: /* @__PURE__ */ O(Rn, {
								as: "div",
								flush: !0,
								size: "sm",
								headline: Y,
								headlineId: Oe ? xe : void 0,
								headlineClassName: OA,
								startActions: !Oe && i ? /* @__PURE__ */ O("div", {
									id: xe,
									className: OA,
									children: i
								}) : void 0,
								subheader: ke ?? (a ? /* @__PURE__ */ O("p", {
									id: Se,
									className: kA,
									children: a
								}) : void 0),
								subheaderId: ke ? Se : void 0,
								subheaderClassName: ke ? kA : void 0,
								actions: /* @__PURE__ */ k("div", {
									className: "flex items-center gap-2",
									children: [
										Te && c && /* @__PURE__ */ O(mn, {
											variant: "neutral",
											size: De,
											"aria-label": l,
											onClick: c,
											disabled: u,
											iconOnly: !0,
											label: l,
											leadingIcon: /* @__PURE__ */ O(Yu, {})
										}),
										o,
										P && t && /* @__PURE__ */ O("span", {
											className: I,
											children: /* @__PURE__ */ O(mn, {
												variant: "neutral",
												size: De,
												showTooltip: !1,
												"aria-label": _e,
												onClick: t,
												disabled: F,
												iconOnly: !0,
												label: _e,
												leadingIcon: /* @__PURE__ */ O(Zu, {})
											})
										})
									]
								})
							})
						}),
						/* @__PURE__ */ O("div", {
							className: Q(AA, h),
							children: d
						}),
						R ? /* @__PURE__ */ O("div", {
							className: "flex-shrink-0",
							children: R
						}) : null
					]
				})
			})
		})]
	}), we);
}
//#endregion
//#region ../ui/src/lib/Modal.tsx
var LA = [
	"a[href]",
	"area[href]",
	"button:not([disabled])",
	"input:not([disabled]):not([type=\"hidden\"])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"iframe",
	"audio[controls]",
	"video[controls]",
	"[contenteditable]:not([contenteditable=\"false\"])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(","), RA = (e) => {
	let t = Number.parseFloat(e);
	return Number.isFinite(t) ? t : 0;
}, zA = (e) => {
	if (typeof window > "u") return Math.ceil(e.scrollHeight);
	let t = window.getComputedStyle(e), n = RA(t.paddingTop) + RA(t.paddingBottom);
	return Math.max(0, Math.ceil(e.scrollHeight - n));
};
function BA(e) {
	if (!e) return [];
	let t = e.querySelectorAll(LA);
	return Array.from(t).filter((e) => {
		if (e.hasAttribute("disabled") || e.getAttribute("aria-hidden") === "true" || e.closest("[aria-hidden=\"true\"]") || e.tabIndex < 0) return !1;
		if (typeof window < "u") {
			let t = window.getComputedStyle(e);
			if (t.display === "none" || t.visibility === "hidden") return !1;
		}
		return !0;
	});
}
var VA = 0, HA = null, UA = [], WA = 0;
function GA(e) {
	UA.includes(e) || UA.push(e);
}
function KA(e) {
	let t = UA.lastIndexOf(e);
	t < 0 || UA.splice(t, 1);
}
function qA(e) {
	return UA.length === 0 ? !1 : UA[UA.length - 1] === e;
}
function JA() {
	if (typeof document > "u") return () => void 0;
	let { body: e } = document;
	return VA === 0 && (HA = e.style.overflow || null, e.style.overflow = "hidden"), VA += 1, () => {
		VA !== 0 && (--VA, VA === 0 && typeof document < "u" && (HA === null ? document.body.style.removeProperty("overflow") : document.body.style.overflow = HA, HA = null));
	};
}
var YA = "relative inset-0 z-[2000] flex items-center justify-center p-4 md:p-8", XA = "pointer-events-none absolute inset-0 [background:var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]", ZA = "transition-opacity duration-[140ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", QA = "transition-opacity duration-[180ms] ease-out", $A = "relative z-[2010] flex w-full max-h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[var(--pc-radius-2xl)] [background:var(--pc-color-surface)] text-[var(--pc-color-text)] shadow-2xl outline-none transform-gpu [transform-origin:50%_92%] [backface-visibility:hidden] [contain:layout_paint_style]", ej = "transition-[opacity,transform] duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[opacity,transform]", tj = "transition-opacity duration-[180ms] ease-out will-change-opacity", nj = "opacity-100 translate-y-0 scale-100", rj = "opacity-0 translate-y-[min(22vh,9rem)] scale-[0.985]", ij = "opacity-0 translate-y-0 scale-100", aj = "relative flex min-h-0 min-w-0 flex-auto flex-col", oj = "opacity-100 transition-opacity delay-[35ms] duration-[100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", sj = "opacity-0 transition-opacity duration-[120ms] ease-out", cj = 180, lj = {
	sm: "max-w-md",
	md: "max-w-xl",
	lg: "max-w-2xl",
	xl: "max-w-4xl",
	full: "max-w-[min(96vw,80rem)] max-h-[calc(100vh-2rem)]"
}, uj = {
	sm: "h-[calc(100vh-4rem)]",
	md: "h-[calc(100vh-4rem)]",
	lg: "h-[calc(100vh-4rem)]",
	xl: "h-[calc(100vh-4rem)]",
	full: "h-[calc(100vh-2rem)]"
}, dj = "px-5 pt-5 pb-4", fj = "text-xl font-semibold leading-tight text-[var(--pc-color-text)]", pj = "text-sm leading-tight text-[var(--pc-color-text-secondary)]", mj = "flex-1 overflow-y-auto px-5 pt-2 [scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)] [&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]", hj = "px-5 py-4 bg-[color:color-mix(in oklab,var(--pc-color-surface) 90%, rgba(0,0,0,0))]", gj = () => () => void 0, _j = () => typeof document > "u" ? null : document.body, vj = () => null;
function yj({ isOpen: e, onClose: t, title: n, description: r, notification: i, tabs: a, children: o, footer: s, size: c = "md", variant: l, forceMaxHeight: u = !1, overlayClassName: d, contentClassName: f, headerClassName: p, bodyClassName: m, footerClassName: h, titleClassName: _, descriptionClassName: b, closeButtonClassName: C, closeButtonLabel: D = "Close modal", showCloseButton: A = !0, closeOnOverlayClick: j = !0, closeOnEscape: M = !0, trapFocus: N = !0, restoreFocus: P = !0, initialFocusRef: F, portalContainer: I, animationMode: L = fA }) {
	let R = w(null), z = w(null), B = w(null), V = w(null), H = w(null), te = w(null), U = w(null), W = w(e), [G, K] = T(!1), [ne, re] = T(e), [ie, ae] = T(!1), [oe, se] = T(null);
	V.current === null && (V.current = `pc-modal-${String(++WA)}`);
	let ce = typeof t == "function" ? t : void 0, le = N, ue = y(), de = y(), fe = !!(n || r), q = !!a, pe = !!s, me = !!i?.message, J = dn(l), he = Qr(), ge = I ?? he, _e = E(gj, _j, vj), { shouldPreloadClosedState: ve, shouldRender: ye } = pA({
		isOpen: e,
		animationMode: L
	});
	x(() => {
		H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null), te.current !== null && (window.cancelAnimationFrame(te.current), te.current = null), U.current !== null && (window.clearTimeout(U.current), U.current = null);
		let t = W.current;
		if (W.current = e, re(e), e) {
			if (ae(!1), L === "standard") {
				K(!1);
				return;
			}
			K(!0), H.current = window.requestAnimationFrame(() => {
				H.current = null, te.current = window.requestAnimationFrame(() => {
					K(!1), te.current = null;
				});
			});
			return;
		}
		if (K(!1), !t) {
			ae(!1);
			return;
		}
		if (L === "standard") {
			ae(!1);
			return;
		}
		return ae(!0), U.current = window.setTimeout(() => {
			ae(!1), U.current = null;
		}, cj), () => {
			U.current !== null && (window.clearTimeout(U.current), U.current = null), H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null), te.current !== null && (window.cancelAnimationFrame(te.current), te.current = null);
		};
	}, [L, e]), x(() => {
		if (!e || typeof document > "u") return;
		kt();
		let t = R.current;
		B.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		let n = window.requestAnimationFrame(() => {
			let e = F?.current;
			if (e) {
				e.focus({ preventScroll: !0 });
				return;
			}
			let n = BA(t);
			if (n.length > 0) {
				n[0].focus({ preventScroll: !0 });
				return;
			}
			t?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(n), P && B.current && B.current.focus({ preventScroll: !0 }), B.current = null;
		};
	}, [
		F,
		e,
		P
	]), v(() => {
		if (!(!e || ge)) return JA();
	}, [e, ge]), v(() => {
		if (!e || !V.current) return;
		let t = V.current;
		return GA(t), () => {
			KA(t);
		};
	}, [e]);
	let be = g((t) => {
		if (!e || !V.current || !qA(V.current)) return;
		if (t.key === "Escape") {
			if (!M || !ce) return;
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), ce();
			return;
		}
		if (t.key !== "Tab" || !le) return;
		let n = R.current;
		if (!n) return;
		let r = BA(n);
		if (r.length === 0) {
			t.preventDefault(), n.focus();
			return;
		}
		let i = document.activeElement, a = r[0], o = r[r.length - 1];
		if (t.shiftKey) {
			(!i || i === a || !n.contains(i)) && (t.preventDefault(), o.focus());
			return;
		}
		i === o && (t.preventDefault(), a.focus());
	}, [
		M,
		ce,
		e,
		le
	]);
	v(() => {
		if (e) return document.addEventListener("keydown", be), () => {
			document.removeEventListener("keydown", be);
		};
	}, [be, e]);
	let xe = a?.panels ? a.options.flatMap((e) => {
		let t = a.panels?.[e.value];
		return t === void 0 ? [] : [{
			value: e.value,
			panel: t
		}];
	}) : null, Se = !!xe?.length;
	x(() => {
		if (!e || !q || Se) {
			se(null);
			return;
		}
		let t = z.current;
		if (!t) return;
		let n = () => {
			let e = zA(t);
			e <= 0 || se((t) => t === null || e > t ? e : t);
		};
		if (n(), typeof ResizeObserver > "u") return;
		let r = null, i = new ResizeObserver(() => {
			r === null && (r = window.requestAnimationFrame(() => {
				r = null, n();
			}));
		});
		return i.observe(t), () => {
			i.disconnect(), r !== null && window.cancelAnimationFrame(r);
		};
	}, [
		o,
		q,
		Se,
		e,
		i?.message,
		a?.value
	]);
	let Ce = S(() => n ? ue : void 0, [n, ue]), we = S(() => r ? de : void 0, [r, de]), Te = ge ?? _e, Ee = g((e) => {
		!j || !ce || !V.current || !qA(V.current) || e.target === e.currentTarget && (e.preventDefault(), ce());
	}, [j, ce]), De = ie || !e && ne;
	if (!(ye || De) || !Te) return null;
	let Y = nj;
	G ? Y = rj : De ? Y = ij : ve && (Y = `${rj} invisible transition-none`);
	let Oe = "opacity-0 transition-none";
	G ? Oe = "opacity-0 transition-none" : De ? Oe = `opacity-0 ${QA}` : ve ? Oe = "opacity-0 transition-none" : e && (Oe = `opacity-100 ${ZA}`);
	let ke = Q($A, De ? tj : ej, lj[c], u ? uj[c] : "", Y, G ? "transition-none" : "", f), Ae = oj;
	G ? Ae = "opacity-0 transition-none" : De ? Ae = sj : ve && (Ae = "opacity-0 transition-none");
	let je = Q(aj, Ae), Me = Q(dj, p), Ne = Q(fj, _), Pe = Q(pj, b), Fe = Q(mj, !fe && !q ? "pt-6" : "", q ? "pt-4" : "", pe ? "pb-2" : "pb-8", me ? "flex flex-col gap-4" : "", m), Ie = q && oe !== null && !Se ? { minHeight: `${String(oe)}px` } : void 0, Le = Q(hj, h), Re = Q(C), ze = Q("px-5", fe ? "pb-1" : "pt-5 pb-1"), Be = Cd(n), Ve = !ve || De, He = !!Be, Ue = Cd(r), We = Nn("sm"), Ge = A && t ? /* @__PURE__ */ O("span", {
		className: Re,
		children: /* @__PURE__ */ O(mn, {
			variant: "neutral",
			size: We,
			showTooltip: !1,
			iconOnly: !0,
			label: D,
			"aria-label": D,
			onClick: t,
			leadingIcon: /* @__PURE__ */ O(Zu, {})
		})
	}) : null;
	return ee(/* @__PURE__ */ k("div", {
		className: Q(YA, ge ? "absolute" : "fixed", e ? "pointer-events-auto" : "pointer-events-none", d),
		role: "presentation",
		"aria-hidden": !e,
		onPointerDown: Ee,
		children: [/* @__PURE__ */ O("div", { className: Q(XA, Oe) }), /* @__PURE__ */ O("div", {
			ref: R,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": Ve ? void 0 : Be,
			"aria-labelledby": Ve ? Ce : void 0,
			"aria-describedby": Ve ? we : void 0,
			tabIndex: -1,
			"data-theme": J,
			className: ke,
			children: Ve && /* @__PURE__ */ k("div", {
				"data-modal-internals": "",
				className: je,
				children: [
					fe && /* @__PURE__ */ O("div", {
						className: Me,
						children: /* @__PURE__ */ O(Rn, {
							as: "div",
							flush: !0,
							size: "md",
							headline: Be,
							headlineId: He ? ue : void 0,
							headlineClassName: Ne,
							startActions: !He && n ? /* @__PURE__ */ O("div", {
								id: ue,
								className: Ne,
								children: n
							}) : void 0,
							subheader: Ue ?? (r ? /* @__PURE__ */ O("p", {
								id: de,
								className: Pe,
								children: r
							}) : void 0),
							subheaderId: Ue ? de : void 0,
							subheaderClassName: Ue ? Pe : void 0,
							actions: Ge ? /* @__PURE__ */ O("div", {
								className: "flex items-center gap-2",
								children: Ge
							}) : void 0
						})
					}),
					!fe && Ge ? /* @__PURE__ */ O("div", {
						className: "absolute right-5 top-4 z-[1]",
						children: Ge
					}) : null,
					a && /* @__PURE__ */ O("div", {
						className: ze,
						children: /* @__PURE__ */ O(Bk, {
							options: a.options,
							value: a.value,
							onChange: a.onChange,
							ariaLabel: a.ariaLabel,
							disabled: a.disabled,
							variant: "compact",
							overflowBehaviour: "scroll",
							overflowMode: "full",
							className: "w-full [&_[data-switcher-mode=full]]:w-full",
							optionClassName: "flex-1 justify-center"
						})
					}),
					/* @__PURE__ */ k("div", {
						ref: z,
						className: Fe,
						style: Ie,
						children: [me && i ? /* @__PURE__ */ O(wn, {
							as: "div",
							size: "sm",
							variant: i.variant,
							children: typeof i.message == "string" ? /* @__PURE__ */ O("p", { children: i.message }) : i.message
						}) : null, xe ? /* @__PURE__ */ O("div", {
							"data-slot": "modal-tab-panels",
							className: "grid min-w-0 grid-cols-1 items-start",
							children: xe.map(({ value: e, panel: t }) => {
								let n = e === a?.value;
								return /* @__PURE__ */ O("div", {
									role: "tabpanel",
									"aria-hidden": n ? void 0 : !0,
									"data-active": n ? "true" : "false",
									className: Q("min-w-0 [grid-area:1/1]", !n && "invisible pointer-events-none select-none"),
									children: t
								}, e);
							})
						}) : o]
					}),
					pe && /* @__PURE__ */ O("div", {
						className: Le,
						children: s
					})
				]
			})
		})]
	}), Te);
}
//#endregion
//#region ../ui/src/lib/layout/splitViewResponsive.ts
var bj = {
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)"
}, xj = {
	md: "md:hidden",
	lg: "lg:hidden"
}, Sj = (e) => xj[e], Cj = (e) => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(bj[e]).matches;
//#endregion
//#region ../ui/src/lib/CountBadge.tsx
function wj({ value: e, variant: t = "accent", className: n }) {
	let r = String(e);
	return /* @__PURE__ */ O("span", {
		className: Q("inline-flex h-4.5 items-center justify-center rounded-[var(--pc-radius-full)] align-middle", /^[0-9]$/.test(r.trim()) ? "w-4.5 px-0 py-0" : "min-w-4.5 px-1.5 py-0.5", "!text-xs !font-medium leading-none", t === "primary" ? "bg-[var(--pc-color-primary)] text-[var(--pc-color-primary-text)]" : "bg-[var(--pc-color-accent)] text-[var(--pc-color-text-inverted)]", n),
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/layout/ResponsivePanelTriggerButton.tsx
var Tj = Symbol("pc.responsive-panel-trigger");
function Ej({ label: e, icon: t, onNarrowOpen: n, inlineBreakpoint: r = "md", sidebarCollapse: i, badgeCount: a = 0, variant: o = "neutral", size: s = "md", disabled: c = !1 }) {
	let l = i?.collapsed ?? !1, u = i?.expandLabel?.trim() || e;
	return /* @__PURE__ */ k("span", {
		className: Y("relative inline-flex overflow-visible", l ? void 0 : Sj(r)),
		children: [/* @__PURE__ */ O(mn, {
			variant: o,
			size: s,
			disabled: c,
			"aria-label": u,
			onClick: () => {
				if (l && i && Cj(r)) {
					i.onCollapsedChange(!1);
					return;
				}
				n();
			},
			iconOnly: !0,
			label: u,
			leadingIcon: t
		}), a > 0 ? /* @__PURE__ */ O(wj, {
			value: a,
			variant: "primary",
			className: "pointer-events-none absolute -right-1 top-0"
		}) : null]
	});
}
Ej.__pcMarker__ = Tj;
//#endregion
//#region ../ui/src/lib/layout/sidebar/SidebarItemButton.tsx
var Dj = Y("flex w-full flex-col items-start gap-0 overflow-hidden rounded-[var(--pc-radius-lg)] px-3 py-1.5", "cursor-pointer text-left font-normal focus-visible:outline-none", "focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)]", "disabled:cursor-default disabled:opacity-60");
f(function({ selected: e = !1, variant: t, appearance: n, className: r, type: i = "button", ...a }, o) {
	let s = t ?? (e ? "secondary" : void 0), c = n ?? (e ? "solid" : "ghost");
	return /* @__PURE__ */ O("button", {
		ref: o,
		type: i,
		"data-theme": dn(s),
		className: Q(Dj, en(c), e ? "transition-none" : "", r),
		"data-selected": e ? "true" : void 0,
		...a
	});
});
//#endregion
//#region ../ui/src/lib/layout/stickyBoundary.ts
var Oj = new Set([
	"auto",
	"overlay",
	"scroll"
]), kj = (e) => Oj.has(e.overflowY) || Oj.has(e.overflow), Aj = (e) => {
	let t = e.parentElement;
	for (; t;) {
		if (kj(window.getComputedStyle(t))) return t;
		t = t.parentElement;
	}
	return null;
};
Y("rounded-[var(--pc-radius-lg)]", "border border-[var(--pc-color-depth-4)]", "p-3");
//#endregion
//#region ../ui/src/lib/InteractivePrompt.tsx
var jj = {
	solid: "text-[var(--pc-color-surface)]",
	outline: "text-[var(--pc-color-surface)]",
	muted: "text-[var(--pc-color-surface-weakest)]",
	ghost: "text-transparent"
}, Mj = {
	xl: "-left-[1rem] top-1/2 h-[5rem] w-[1.7rem] -translate-y-1/2",
	lg: "-left-[0.7rem] top-1/2 h-[3.6rem] w-[1.2rem] -translate-y-1/2",
	md: "-left-[0.8rem] top-1/2 h-[4rem] w-[1.35rem] -translate-y-1/2",
	sm: "-left-[0.65rem] top-1/2 h-[3.4rem] w-[1.12rem] -translate-y-1/2",
	xs: "-left-[0.6rem] top-1/2 h-[3.25rem] w-[1.05rem] -translate-y-1/2"
}, Nj = {
	xl: "rounded-[calc(var(--pc-radius-xl)+0.65rem)]",
	lg: "rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	md: "rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	sm: "rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	xs: "rounded-[calc(var(--pc-radius-lg)+0.05rem)]"
}, Pj = [
	"M32 16",
	"C26 18.5 22 24.5 20 33",
	"C18 40.5 12.5 46.5 7 50",
	"C4 52 2 54 2 56",
	"C2 58 4 60 7 62",
	"C12.5 65.5 18 71.5 20 79",
	"C22 88.5 26 94.5 32 97",
	"V16Z"
].join(""), Fj = {
	xl: "p-6",
	lg: "py-3 px-3",
	md: "p-4",
	sm: "py-3 px-3",
	xs: "p-3"
}, Ij = {
	xl: "@max-sm/interactive-prompt:p-5",
	lg: "",
	md: "@max-sm/interactive-prompt:p-3.5",
	sm: "@max-sm/interactive-prompt:p-3",
	xs: ""
}, Lj = {
	xl: "lg",
	lg: "md",
	md: "md",
	sm: "sm",
	xs: "xs"
}, Rj = {
	xl: "md",
	lg: "md",
	md: "sm",
	sm: "sm",
	xs: "xs"
}, zj = {
	xl: "ml-[4.25rem]",
	lg: "ml-[3.75rem]",
	md: "ml-[3.75rem]",
	sm: "ml-[3.25rem]",
	xs: "ml-[3rem]"
}, Bj = {
	xl: "lg",
	lg: "md",
	md: "sm",
	sm: "xs",
	xs: "xs"
}, Vj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Hj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Uj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Wj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Gj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Kj = {
	md: "",
	sm: "",
	xs: "",
	lg: "",
	xl: ""
}, qj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Jj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Yj = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, Xj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Zj = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, Qj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, $j = {
	xl: "@max-sm/interactive-prompt:!px-5 @max-sm/interactive-prompt:!py-2.5 @max-sm/interactive-prompt:!text-base",
	lg: "@max-sm/interactive-prompt:!px-3.5 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-base",
	md: "@max-sm/interactive-prompt:!px-3 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-sm",
	sm: "@max-sm/interactive-prompt:!px-2.5 @max-sm/interactive-prompt:!py-1 @max-sm/interactive-prompt:!text-xs",
	xs: ""
}, eM = {
	xl: "@max-sm/interactive-prompt:ml-[3.75rem]",
	lg: "@max-sm/interactive-prompt:ml-[3.25rem]",
	md: "@max-sm/interactive-prompt:ml-[3.25rem]",
	sm: "@max-sm/interactive-prompt:ml-[3rem]",
	xs: "@max-sm/interactive-prompt:ml-[3rem]"
}, tM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, nM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, rM = "mt-2 @max-sm/interactive-prompt:mt-2.5", iM = "gap-2 @max-sm/interactive-prompt:gap-1.5", aM = {
	xl: "leading-6",
	lg: "leading-6",
	md: "leading-5",
	sm: "leading-5",
	xs: "leading-4"
}, oM = {
	xl: "@max-sm/interactive-prompt:leading-6",
	lg: "@max-xs/interactive-prompt:leading-4",
	md: "@max-xs/interactive-prompt:leading-4",
	sm: "@max-sm/interactive-prompt:leading-4",
	xs: ""
}, sM = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, cM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, lM = {
	xl: "@max-sm/interactive-prompt:-left-[0.9rem] @max-sm/interactive-prompt:h-[4.45rem] @max-sm/interactive-prompt:w-[1.5rem]",
	lg: "@max-sm/interactive-prompt:-left-[0.6rem] @max-sm/interactive-prompt:h-[3.2rem] @max-sm/interactive-prompt:w-[1.05rem]",
	md: "@max-sm/interactive-prompt:-left-[0.7rem] @max-sm/interactive-prompt:h-[3.65rem] @max-sm/interactive-prompt:w-[1.2rem]",
	sm: "@max-sm/interactive-prompt:-left-[0.55rem] @max-sm/interactive-prompt:h-[3rem] @max-sm/interactive-prompt:w-[0.98rem]",
	xs: ""
}, uM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, dM = {
	xl: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	lg: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	md: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	sm: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.05rem)]",
	xs: ""
}, fM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, pM = {
	xl: "@max-sm/interactive-prompt:gap-3",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-2",
	sm: "@max-sm/interactive-prompt:gap-1.5",
	xs: ""
}, mM = "@max-sm/interactive-prompt:gap-3", hM = {
	xl: "gap-0.5",
	lg: "gap-px",
	md: "gap-0",
	sm: "gap-0",
	xs: ""
}, gM = {
	xl: "@max-sm/interactive-prompt:gap-0.5",
	lg: "@max-sm/interactive-prompt:gap-px",
	md: "@max-sm/interactive-prompt:gap-0",
	sm: "@max-sm/interactive-prompt:gap-0",
	xs: ""
}, _M = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, vM = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, yM = {
	xl: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1",
	xs: ""
}, bM = {
	xl: "@max-sm/interactive-prompt:!h-14 @max-sm/interactive-prompt:!w-14",
	lg: "@max-sm/interactive-prompt:!h-12 @max-sm/interactive-prompt:!w-12",
	md: "@max-sm/interactive-prompt:!h-10 @max-sm/interactive-prompt:!w-10",
	sm: "@max-sm/interactive-prompt:!h-9 @max-sm/interactive-prompt:!w-9",
	xs: ""
}, xM = (e, t) => t ? Bj[e] : e, SM = (e) => e === "outline" ? "solid" : e, CM = (e) => e === "danger" ? "danger" : "secondary-tinted", wM = (e) => e === "danger" ? "danger" : "default", TM = (e) => {
	switch (e) {
		case "xl": return "text-3xl @max-sm/interactive-prompt:text-2xl";
		case "lg": return "text-2xl @max-sm/interactive-prompt:text-xl";
		case "md": return "text-xl @max-lg/interactive-prompt:text-lg";
		case "sm": return "text-lg @max-sm/interactive-prompt:text-base";
		case "xs": return "text-base";
	}
}, EM = (e) => "", DM = (e) => {
	switch (e) {
		case "xl": return "text-base @max-sm/interactive-prompt:!text-sm";
		case "lg": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "md": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "sm": return "text-xs";
		case "xs": return "text-xs";
	}
};
function OM({ className: e, title: t, body: n, meta: r, icon: i, iconSlotClassName: a, trailingVisual: o, footer: s, actions: c = [], actionsOffsetClassName: l, compact: u = !1, tone: d = "neutral", appearance: f = "solid", size: p = "lg" }) {
	let m = xM(p, u), h = Lj[m], g = Rj[m], _ = c.length > 0, v = !!s, y = f !== "ghost", b = CM(d), x = wM(d), S = i ? Y(zj[m], l, eM[m]) : void 0;
	return /* @__PURE__ */ O("div", {
		"data-interactive-prompt": "true",
		"data-theme": b,
		"data-compact": u ? "true" : void 0,
		className: Y("@container/interactive-prompt w-full max-w-full", "transition-[transform,opacity] duration-200 ease-out", e),
		children: /* @__PURE__ */ k("section", {
			"data-slot": "interactive-prompt-shell",
			className: Y("relative overflow-visible"),
			children: [y && /* @__PURE__ */ O("svg", {
				"data-slot": "interactive-prompt-tail",
				"aria-hidden": "true",
				viewBox: "0 0 32 100",
				className: Y("pointer-events-none absolute z-0 overflow-visible", jj[f], Mj[m], lM[m], Vj[m], uM[m]),
				children: /* @__PURE__ */ O("path", {
					fill: "currentColor",
					d: Pj
				})
			}), /* @__PURE__ */ O(yn, {
				variant: "surface",
				appearance: SM(f),
				size: "flush",
				className: Y("relative z-[1] w-full max-w-full text-left", Nj[m], dM[m], Hj[m], fM[m]),
				children: /* @__PURE__ */ k("div", {
					className: Y("w-full max-w-full text-[var(--pc-color-text)]", Fj[m], Ij[m], Uj[m], Wj[m]),
					children: [/* @__PURE__ */ O(Rn, {
						as: "div",
						container: !1,
						flush: !0,
						size: h,
						variant: x,
						appearance: "ghost",
						className: Y(pM[h], Yj[h], Xj[h]),
						leadingClassName: i ? mM : void 0,
						leadingVisual: i,
						leadingVisualClassName: Y(a, bM[h], Zj[h], Qj[h]),
						leadingContentClassName: Y(hM[h], gM[h], qj[h], Jj[h]),
						headline: t,
						subheader: n,
						headlineRowClassName: _M[h],
						secondaryActions: r ? /* @__PURE__ */ O("div", {
							className: Y("flex min-w-0 flex-wrap items-center gap-2", "[&_a]:underline [&_a]:underline-offset-2"),
							children: r
						}) : void 0,
						secondaryActionsClassName: vM[h],
						actions: o,
						actionsClassName: vM[h],
						inlineActionsClassName: yM[h],
						actionsAlign: "start",
						headlineClassName: Y(TM(h), "text-balance leading-tight tracking-tight @max-sm/interactive-prompt:text-wrap @max-sm/interactive-prompt:tracking-normal", EM(h)),
						subheaderClassName: Y("max-w-[60ch] text-[var(--pc-color-text-muted)]", DM(h), aM[h], oM[h], sM[h], cM[h])
					}), (_ || v) && /* @__PURE__ */ k("div", {
						"data-slot": "interactive-prompt-actions",
						className: Y("min-w-0", rM, S, i ? tM[m] : void 0, i ? Gj[m] : void 0),
						children: [v && /* @__PURE__ */ O("div", {
							"data-slot": "interactive-prompt-footer",
							className: Y(_ && "pb-2 @max-sm/interactive-prompt:pb-1.5"),
							children: s
						}), _ && /* @__PURE__ */ O("div", {
							className: Y("flex min-w-0 flex-wrap items-center", iM),
							children: c.map((e) => /* @__PURE__ */ O(mn, {
								label: e.label,
								onClick: e.onClick,
								disabled: e.disabled,
								variant: e.variant ?? "default",
								appearance: e.appearance,
								size: g,
								className: Y($j[g], Kj[g], nM[g]),
								leadingIcon: e.leadingIcon,
								trailingIcon: e.trailingIcon
							}, e.id))
						})]
					})]
				})
			})]
		})
	});
}
//#endregion
//#region ../ui/src/lib/RecordFieldPrimitives.tsx
var kM = {
	sm: "text-sm",
	xs: "text-xs"
};
Y(kM.sm, "font-medium text-[var(--pc-color-text)]"), Y(kM.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), Y("font-mono", kM.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), Y("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"), Y("@container/preference-panel", "flex w-full flex-col");
var AM = Y("relative grid w-full grid-cols-1", "@xl/preference-panel:gap-x-6", "@xl/preference-panel:grid-cols-[minmax(16rem,0.95fr)_minmax(16rem,1.05fr)]");
Y(AM, "gap-y-3 px-3 py-3.5"), Y(AM, "gap-y-2 px-0.5 py-0.5 -mx-0.5"), Y("flex min-w-0 justify-between gap-3"), Y("absolute right-3 top-3.5 flex shrink-0 items-center", "@xl/preference-panel:static"), u("outlined");
//#endregion
//#region ../ui/src/lib/LinearProgress.tsx
var jM = {
	xl: "h-4",
	lg: "h-3.5",
	md: "h-3",
	sm: "h-2",
	xs: "h-1.5"
}, MM = (e, t, n) => Math.min(Math.max(e, t), n), NM = (e) => Number.isFinite(e) ? Math.max(Math.trunc(e ?? 1), 1) : 1, PM = (e, t) => Number.isFinite(e) ? MM(Math.trunc(e ?? 0), 0, Math.max(t - 1, 0)) : 0, FM = ({ stepCount: e = 1, currentStepIndex: t = 0, showInitialFill: n = !1 }) => {
	let r = NM(e), i = PM(t, r);
	return r <= 1 ? 100 : MM(n ? (i + 1) / r * 100 : i / (r - 1) * 100, 0, 100);
};
function IM({ mode: e = "determinate", size: t = "md", variant: n = "default", inheritTheme: r = !1, stepCount: i = 1, currentStepIndex: a = 0, showInitialFill: o = !1, id: s, ariaLabel: c, ariaLabelledBy: l, ariaDescribedBy: u }) {
	let d = r ? void 0 : dn(n), f = e === "indeterminate", p = f ? void 0 : FM({
		stepCount: i,
		currentStepIndex: a,
		showInitialFill: o
	}), m = p === void 0 ? void 0 : `${p.toFixed(2)}%`, h = !f && p !== void 0 && p <= 0, g = p !== void 0 && p > 0 && p < 100;
	return /* @__PURE__ */ O("div", {
		id: s,
		role: "progressbar",
		"data-theme": d,
		"aria-label": c,
		"aria-labelledby": l,
		"aria-describedby": u,
		"aria-valuemin": f ? void 0 : 0,
		"aria-valuemax": f ? void 0 : 100,
		"aria-valuenow": p === void 0 ? void 0 : Math.round(p),
		className: "relative block w-full overflow-visible",
		children: /* @__PURE__ */ O("div", {
			"data-slot": "linear-progress-track",
			className: Y("relative w-full overflow-hidden", h ? "[background:transparent]" : "[background:var(--pc-color-neutral)]", jM[t]),
			children: /* @__PURE__ */ O("span", {
				"aria-hidden": "true",
				"data-slot": "linear-progress-fill",
				"data-mode": e,
				className: Q(Y("block h-full", "[background:var(--pc-color-surface)]", "will-change-[transform,width]", g && "rounded-r-[var(--pc-radius-full)]"), f ? Y("absolute inset-y-0 left-0 w-[36%]", "rounded-[var(--pc-radius-full)]", "animate-[pc-linear-progress-indeterminate_1.4s_ease-in-out_infinite]") : "transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"),
				style: m ? { width: m } : void 0
			})
		})
	});
}
//#endregion
//#region ../ui/src/lib/CircularProgress.tsx
var LM = 44, RM = "0 0 44 44", zM = 4, BM = "var(--pc-color-depth-4)", VM = "var(--pc-color-success)", HM = (e, t, n) => Math.min(Math.max(e, t), n);
function UM({ value: e, max: t = 100, strokeWidth: n = zM, className: r, contentClassName: i, trackColor: a = BM, indicatorColor: o = VM, ariaLabel: s, children: c }) {
	let l = Number.isFinite(t) && t > 0 ? t : 100, u = Number.isFinite(e) ? HM(e, 0, l) : 0, d = HM(n, 1.5, 10), f = (LM - d) / 2, p = 2 * Math.PI * f, m = p * (1 - u / l);
	return /* @__PURE__ */ k("div", {
		"data-slot": "circular-progress",
		role: s ? "progressbar" : void 0,
		"aria-label": s,
		"aria-hidden": s ? void 0 : "true",
		"aria-valuemin": s ? 0 : void 0,
		"aria-valuemax": s ? l : void 0,
		"aria-valuenow": s ? Math.round(u) : void 0,
		className: Y("relative block h-full w-full", r),
		children: [/* @__PURE__ */ k("svg", {
			viewBox: RM,
			className: "block h-full w-full -rotate-90 overflow-visible",
			children: [/* @__PURE__ */ O("circle", {
				cx: LM / 2,
				cy: LM / 2,
				r: f,
				fill: "none",
				stroke: a,
				strokeWidth: d
			}), /* @__PURE__ */ O("circle", {
				cx: LM / 2,
				cy: LM / 2,
				r: f,
				fill: "none",
				stroke: o,
				strokeWidth: d,
				strokeLinecap: "round",
				strokeDasharray: p,
				strokeDashoffset: m,
				className: Y("transition-[stroke-dashoffset] duration-500", "ease-[cubic-bezier(0.22,1,0.36,1)]", "will-change-[stroke-dashoffset]")
			})]
		}), c && /* @__PURE__ */ O("div", {
			"data-slot": "circular-progress-content",
			className: Y("absolute inset-[18%] flex items-center justify-center", i),
			children: c
		})]
	});
}
new Set(Object.keys({
	successful: "successful",
	captured: "successful",
	awaiting_capture: "successful",
	refunded: "successful",
	partially_refunded: "successful",
	voided: "successful",
	partially_captured: "successful",
	reversed_success: "successful",
	chargeback_won: "successful",
	frictionless: "successful",
	challenged: "successful",
	active: "successful",
	failed: "failed",
	general_decline: "failed",
	insufficient_funds: "failed",
	internal_failure: "failed",
	not_supported: "failed",
	bad_request: "failed",
	unauthorized: "failed",
	forbidden: "failed",
	expired_card: "failed",
	do_not_honour: "failed",
	threeds_denied: "failed",
	threeds_failure: "failed",
	threeds_rejected: "failed",
	duplicate: "failed",
	invalid_credential: "failed",
	stolen_card: "failed",
	invalid_config_value: "failed",
	kyc_error: "failed",
	limit_exceeded: "failed",
	suspected_fraud: "failed",
	payment_error: "failed",
	reversed_failure: "failed",
	reversal_failed: "failed",
	revoked: "failed",
	inactive: "cancelled",
	disabled: "cancelled",
	incorrect_csc: "failed",
	soft_decline: "failed",
	chargeback_lost: "failed",
	verification_failed: "failed",
	voucher_used: "failed",
	voucher_locked: "failed",
	voucher_inactive: "failed",
	voucher_expired: "failed",
	voucher_not_found: "failed",
	merchant_response_failure: "failed",
	blocked: "failed",
	deleted: "failed",
	cancelled: "cancelled",
	cancelled_user: "cancelled",
	cancelled_timeout: "cancelled",
	denied_by_merchant: "cancelled",
	blocked_by_merchant: "cancelled",
	cancelled_cleanup: "cancelled",
	pending: "pending",
	pending_user: "pending",
	pending_payment: "pending",
	pending_kyc: "pending",
	pending_approval: "pending",
	pending_threeds_method: "pending",
	pending_threeds_challenge: "pending",
	pending_delayed_approval: "pending",
	pending_dual_approval: "pending",
	pending_refund: "pending",
	pending_capture: "pending",
	pending_void: "pending",
	pending_user_form: "pending",
	voucher_validated: "pending",
	invited: "pending",
	inconsistent: "inconsistent",
	response_failure: "inconsistent",
	internal_timeout: "inconsistent",
	request_timeout: "inconsistent",
	unknown: "inconsistent",
	amount_mismatch: "inconsistent",
	chargeback_opened: "inconsistent",
	processing: "processing",
	true: "successful",
	false: "failed",
	inherited: "successful"
})), Y("[background:var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-text)]");
//#endregion
//#region ../ui/src/lib/useActionConfirmation.tsx
var WM = (e) => typeof e == "object" && !!e, GM = (e) => {
	for (let t of [
		"message",
		"error",
		"statusText",
		"title",
		"detail"
	]) {
		let n = e[t], r = qc(n);
		if (r) return r;
	}
	let t = e.error;
	if (t && typeof t == "object" && typeof t.message == "string") {
		let e = qc(t.message);
		if (e) return e;
	}
	if ("body" in e) {
		let t = e.body, n = qc(t);
		if (n) return n;
		if (WM(t)) {
			let e = GM(t);
			if (e) return e;
		}
	}
	return null;
}, KM = (e) => {
	if (typeof e == "string") return qc(e);
	if (e instanceof Error) return qc(e.message);
	if (WM(e)) {
		let t = GM(e);
		if (t) return t;
	}
	return null;
}, qM = 440;
function JM(e = {}) {
	let [t, n] = T(null), [r, i] = T(null), [a, o] = T(!1), [s, c] = T(!1), l = w(null), u = w(null), d = e.presentation ?? "modal", f = e.drawer, p = e.modal, m = e.renderActions, h = d === "drawer", _ = h, y = g(() => {
		l.current !== null && (clearTimeout(l.current), l.current = null);
	}, []), b = g(() => {
		u.current !== null && (typeof window < "u" && window.cancelAnimationFrame(u.current), u.current = null);
	}, []);
	v(() => () => {
		y(), b();
	}, [y, b]);
	let x = g(() => {
		if (o(!1), i(null), !_) {
			n(null), c(!1);
			return;
		}
		c(!1), y(), l.current = setTimeout(() => {
			n(null), l.current = null;
		}, qM);
	}, [y, _]), C = g(async () => {
		if (!(!t || a)) {
			o(!0), i(null);
			try {
				await t.onConfirm(), x();
			} catch (e) {
				i(t.errorMessage || KM(e) || "Unable to complete action."), o(!1);
			}
		}
	}, [
		x,
		a,
		t
	]);
	return {
		openActionConfirmation: g((e) => {
			if (y(), b(), n(e), i(null), o(!1), !_) {
				c(!0);
				return;
			}
			if (c(!1), typeof window > "u" || typeof window.requestAnimationFrame != "function") {
				c(!0);
				return;
			}
			u.current = window.requestAnimationFrame(() => {
				u.current = window.requestAnimationFrame(() => {
					u.current = null, c(!0);
				});
			});
		}, [
			y,
			b,
			_
		]),
		actionConfirmationModal: S(() => {
			if (!t) return null;
			let e = qc(t.confirmLabel) ?? "Confirm", n = t.confirmVariant ?? "neutral", i = /* @__PURE__ */ k("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ O("div", {
					className: "text-sm text-[var(--pc-color-text-muted)]",
					children: t.description
				}), r ? /* @__PURE__ */ O("p", {
					className: "text-sm text-[var(--pc-color-danger)]",
					children: r
				}) : null]
			}), o = m, c = o ? /* @__PURE__ */ O(o, {
				confirmLabel: e,
				confirmVariant: n,
				isSubmitting: a,
				onConfirm: () => {
					C();
				}
			}) : /* @__PURE__ */ O("div", {
				className: "flex justify-end gap-2",
				children: /* @__PURE__ */ O(mn, {
					type: "button",
					variant: n,
					loading: a,
					onClick: () => {
						C();
					},
					label: e
				})
			}), l = h ? f?.actionsPlacement ?? "content" : "content", u = /* @__PURE__ */ k("div", {
				className: "flex flex-col gap-4",
				children: [i, !h || l === "content" ? c : null]
			});
			if (h) {
				let e;
				return l === "footer" && (e = f?.renderFooter ? f.renderFooter(c) : c), /* @__PURE__ */ O(IA, {
					isOpen: s,
					onClose: x,
					side: f?.side,
					variant: f?.variant,
					title: t.title,
					headerActions: f?.headerActions,
					onBack: f?.onBack,
					backButtonLabel: f?.backButtonLabel,
					backButtonDisabled: f?.backButtonDisabled,
					portalContainer: f?.portalContainer,
					closeButtonLabel: f?.closeButtonLabel,
					closeOnOverlayClick: f?.closeOnOverlayClick,
					closeOnEscape: f?.closeOnEscape,
					showHeaderDivider: f?.showHeaderDivider,
					size: f?.size,
					fullSize: f?.fullSize,
					ariaLabel: f?.ariaLabel,
					ariaLabelledby: f?.ariaLabelledby,
					ariaDescribedby: f?.ariaDescribedby,
					showCloseButton: f?.showCloseButton,
					footer: e,
					children: /* @__PURE__ */ O("div", {
						className: "px-5 pb-5 pt-2",
						children: u
					})
				});
			}
			return /* @__PURE__ */ O(yj, {
				isOpen: s,
				onClose: x,
				title: t.title,
				notification: t.notification,
				size: p?.size,
				variant: p?.variant,
				portalContainer: p?.portalContainer,
				closeButtonLabel: p?.closeButtonLabel,
				showCloseButton: p?.showCloseButton,
				closeOnOverlayClick: p?.closeOnOverlayClick,
				closeOnEscape: p?.closeOnEscape,
				children: u
			});
		}, [
			r,
			x,
			C,
			a,
			t,
			m,
			s,
			f,
			h,
			p
		]),
		isActionConfirmationOpen: s,
		closeActionConfirmation: x
	};
}
//#endregion
//#region ../ui/src/lib/toast/ToastProvider.tsx
var YM = 6e3, XM = (e, t) => {
	switch (t.type) {
		case "upsert": {
			let n = e.findIndex((e) => e.id === t.toast.id);
			if (n >= 0) {
				let r = e.slice();
				return r[n] = t.toast, r;
			}
			return [...e, t.toast];
		}
		case "remove": return e.filter((e) => e.id !== t.id);
		case "setPaused": return e.map((e) => e.id === t.id ? {
			...e,
			isPaused: t.isPaused
		} : e);
		case "clear": return [];
		default: return e;
	}
}, ZM = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Math.random().toString(36).slice(2), QM = u(null);
function $M({ children: e }) {
	let [t, n] = C(XM, []), r = w(/* @__PURE__ */ new Map()), i = g((e, t) => {
		n({
			type: "setPaused",
			id: e,
			isPaused: t
		});
	}, []), a = g((e) => {
		let t = r.current.get(e);
		t && (typeof window < "u" && t.timeoutId !== null && window.clearTimeout(t.timeoutId), r.current.delete(e));
	}, []), o = g((e) => {
		n({
			type: "remove",
			id: e
		});
	}, []), s = g((e, t) => {
		if (typeof window > "u") return;
		if (t <= 0) {
			a(e), o(e);
			return;
		}
		a(e);
		let n = window.setTimeout(() => {
			r.current.delete(e), o(e);
		}, t);
		r.current.set(e, {
			timeoutId: n,
			remaining: t,
			startedAt: Date.now()
		});
	}, [a, o]), c = g((e) => {
		a(e), o(e);
	}, [a, o]), l = g((e) => {
		let t = qc(e.id) ?? ZM(), r = e.variant ?? "default", i = e.persistent ?? !1, o = YM;
		return n({
			type: "upsert",
			toast: {
				id: t,
				variant: r,
				message: e.message,
				description: e.description,
				action: e.action,
				isPaused: !1,
				category: i ? "persistent" : "transient",
				durationMs: o,
				createdAt: Date.now()
			}
		}), i ? a(t) : s(t, o), t;
	}, [a, s]), u = g((e) => {
		let t = r.current.get(e);
		if (!t) {
			i(e, !0);
			return;
		}
		if (t.timeoutId !== null && typeof window < "u") {
			let n = Date.now() - t.startedAt, i = Math.max(t.remaining - n, 0);
			window.clearTimeout(t.timeoutId), r.current.set(e, {
				timeoutId: null,
				remaining: i,
				startedAt: Date.now()
			});
		}
		i(e, !0);
	}, [i]), d = g((e) => {
		let t = r.current.get(e);
		if (!t) {
			i(e, !1);
			return;
		}
		if (t.timeoutId !== null) {
			i(e, !1);
			return;
		}
		if (t.remaining <= 0) {
			r.current.delete(e), o(e);
			return;
		}
		if (typeof window > "u") {
			i(e, !1);
			return;
		}
		s(e, t.remaining), i(e, !1);
	}, [
		o,
		i,
		s
	]), f = g(() => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear(), n({ type: "clear" });
	}, [a]), p = g((e) => {
		let n = r.current.get(e);
		if (!n) {
			let n = t.find((t) => t.id === e);
			return !n || n.category !== "transient" ? null : 0;
		}
		if (typeof window > "u" || n.timeoutId === null) return n.remaining;
		let i = Date.now() - n.startedAt;
		return Math.max(n.remaining - i, 0);
	}, [t]);
	v(() => () => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear();
	}, [a]);
	let m = S(() => ({
		toasts: t,
		publish: l,
		dismiss: c,
		pause: u,
		resume: d,
		clear: f,
		getRemainingMs: p
	}), [
		f,
		c,
		p,
		u,
		l,
		d,
		t
	]);
	return /* @__PURE__ */ O(QM.Provider, {
		value: m,
		children: e
	});
}
var eN = () => {
	let e = _(QM);
	if (!e) throw Error("useToastContext must be used within a ToastProvider");
	return e;
}, tN = (e) => e ? {
	id: e.id,
	variant: e.kind === "error" ? "danger" : e.kind,
	message: e.message,
	description: e.description
} : null;
//#endregion
//#region ../ui/src/lib/toast/ToastItem.tsx
function nN({ toast: e, getRemainingMs: t, animationTick: n }) {
	if (e.category !== "transient") return null;
	let r = Math.max(n - e.createdAt, 0), i = t(e.id) ?? Math.max(e.durationMs - r, 0);
	return /* @__PURE__ */ O("div", {
		"aria-hidden": "true",
		"data-progress-bar": "true",
		className: "pointer-events-none absolute bottom-0 left-0 right-0 h-1 rounded-b-[var(--pc-radius-lg)] bg-[var(--pc-color-depth-2)]",
		children: /* @__PURE__ */ O("div", {
			className: "h-full bg-[var(--pc-color-text)] w-[var(--pc-toast-progress)]",
			style: { "--pc-toast-progress": `${((e.durationMs > 0 ? Math.min(Math.max(i / e.durationMs, 0), 1) : 0) * 100).toFixed(2)}%` }
		})
	});
}
function rN({ toast: e, dismiss: t, pause: n, resume: r, getRemainingMs: i, animationTick: a }) {
	let o = e.category === "persistent", s = !!e.description, c = !!e.action, l = e.category === "transient", u = o ? "assertive" : "polite", d = o ? "alert" : "status", f = e.variant === "default" ? void 0 : e.variant, p = () => {
		n(e.id);
	}, m = () => {
		r(e.id);
	};
	return /* @__PURE__ */ O("div", {
		className: "pointer-events-auto w-full sm:w-auto sm:max-w-sm",
		children: /* @__PURE__ */ k("div", {
			role: d,
			"aria-live": u,
			"data-theme": f,
			className: Y("pointer-events-auto relative flex min-w-[min(90vw,24rem)] max-w-full flex-col overflow-hidden rounded-[var(--pc-radius-lg)] bg-[var(--pc-color-surface)] px-4 text-[var(--pc-color-text)]", l ? "pt-3 pb-3.5" : "py-3", "transition duration-200 shadow-lg", e.isPaused ? "opacity-95" : "opacity-100"),
			onPointerEnter: p,
			onPointerLeave: m,
			onFocusCapture: p,
			onBlurCapture: m,
			children: [/* @__PURE__ */ k("div", {
				className: "relative pr-8",
				children: [/* @__PURE__ */ k("div", {
					className: "flex min-w-0 flex-col gap-2",
					children: [
						/* @__PURE__ */ O("p", {
							className: "text-lg leading-5 font-medium",
							children: e.message
						}),
						s ? /* @__PURE__ */ O("p", {
							className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
							children: e.description
						}) : null,
						c ? /* @__PURE__ */ O("div", {
							className: "flex items-center",
							children: /* @__PURE__ */ O(mn, {
								type: "button",
								size: "sm",
								variant: e.action?.variant ?? "secondary",
								appearance: e.action?.appearance ?? "ghost",
								showTooltip: !1,
								onClick: () => {
									e.action?.onClick(), e.action?.dismissOnClick && t(e.id);
								},
								label: e.action?.label ?? "Run action"
							})
						}) : null
					]
				}), /* @__PURE__ */ O("div", {
					className: "absolute inset-y-0 -right-0.5 flex items-center",
					children: /* @__PURE__ */ O(mn, {
						size: "xs",
						variant: "neutral",
						appearance: "ghost",
						showTooltip: !1,
						"aria-label": "Dismiss notification",
						onClick: () => {
							t(e.id);
						},
						iconOnly: !0,
						label: "Dismiss notification",
						leadingIcon: /* @__PURE__ */ O(Zu, {})
					})
				})]
			}), /* @__PURE__ */ O(nN, {
				toast: e,
				getRemainingMs: i,
				animationTick: a
			})]
		})
	});
}
//#endregion
//#region ../ui/src/lib/toast/layout.ts
var iN = {
	n: {
		anchorClassName: "top-6 left-1/2 -translate-x-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col-reverse"
	},
	ne: {
		anchorClassName: "top-6 right-3 sm:right-6",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col-reverse"
	},
	e: {
		anchorClassName: "top-1/2 right-3 sm:right-6 -translate-y-1/2",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col"
	},
	se: {
		anchorClassName: "bottom-6 right-3 sm:right-6",
		alignItemsClassName: "items-end",
		stackDirectionClassName: "flex-col"
	},
	s: {
		anchorClassName: "bottom-6 left-1/2 -translate-x-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col"
	},
	sw: {
		anchorClassName: "bottom-6 left-3 sm:left-6",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col"
	},
	w: {
		anchorClassName: "top-1/2 left-3 sm:left-6 -translate-y-1/2",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col"
	},
	nw: {
		anchorClassName: "top-6 left-3 sm:left-6",
		alignItemsClassName: "items-start",
		stackDirectionClassName: "flex-col-reverse"
	},
	c: {
		anchorClassName: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
		alignItemsClassName: "items-center",
		stackDirectionClassName: "flex-col"
	}
}, aN = (e) => iN[e];
//#endregion
//#region ../ui/src/lib/toast/ToastViewport.tsx
function oN(e) {
	let [t, n] = T(0);
	return v(() => {
		if (!e || typeof window > "u") return;
		let t = null, r = () => {
			n(Date.now()), t = window.requestAnimationFrame(r);
		};
		return t = window.requestAnimationFrame(r), () => {
			t !== null && window.cancelAnimationFrame(t);
		};
	}, [e]), t;
}
function sN({ orientation: e = "se", portalContainer: t }) {
	let { toasts: n, dismiss: r, pause: i, resume: a, getRemainingMs: o } = eN(), s = typeof document > "u" ? null : t ?? document.body, c = oN(n.some((e) => e.category === "transient" && !e.isPaused)), l = aN(e), u = Y("pointer-events-none z-[2147483647] flex w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] gap-3 sm:w-auto sm:max-w-none", t ? "absolute" : "fixed", l.anchorClassName, l.alignItemsClassName, l.stackDirectionClassName);
	return !s || n.length === 0 ? null : ee(/* @__PURE__ */ O("div", {
		className: u,
		children: n.map((e) => /* @__PURE__ */ O(rN, {
			toast: e,
			dismiss: r,
			pause: i,
			resume: a,
			getRemainingMs: o,
			animationTick: c
		}, e.id))
	}), s);
}
//#endregion
//#region ../ui/src/lib/toast/useToast.ts
var cN = {
	default: "default",
	neutral: "neutral",
	secondary: "secondary",
	primary: "primary",
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
}, lN = (e, t, n) => ({
	id: n?.id,
	variant: e,
	message: t,
	description: n?.description,
	action: n?.action,
	persistent: n?.persistent ?? !1
}), uN = (e) => {
	let t = Object.keys(cN), n = {};
	return t.forEach((t) => {
		let r = cN[t];
		n[t] = (t, n) => e(lN(r, t, n));
	}), n;
}, dN = () => {
	let { publish: e, dismiss: t, pause: n, resume: r, clear: i, toasts: a } = eN();
	return {
		toast: S(() => ({
			push: (t) => e({
				...t,
				variant: t.variant ?? "default"
			}),
			...uN(e),
			fromStatus: (t, n) => {
				let r = tN(t);
				return r ? e({
					...r,
					id: n?.id ?? r.id,
					description: n?.description ?? r.description,
					persistent: n?.persistent ?? !1
				}) : null;
			}
		}), [e]),
		dismiss: t,
		pause: n,
		resume: r,
		clear: i,
		toasts: a
	};
}, fN = (e) => ({
	method: e.method,
	selectedPaymentType: e.gotoPaymentType,
	currency: e.currency,
	initialAmount: e.initialAmount,
	selectedBonusCode: null,
	paymentFormDraft: null,
	comboViewFormDraft: null,
	resetFlowOnBack: !1,
	hasAppliedGotoPaymentType: !1
}), pN = fN(n), mN = () => {
	throw Error("setCashierState must be used within a Cashier provider");
}, hN = u({
	...n,
	...pN,
	setCashierState: mN
}), gN = "pc-cashier", _N = (e) => e.replace(/^-+|-+$/g, ""), vN = (e, t = "item") => {
	let n = _N((typeof e == "string" ? e : "").toLowerCase().replace(/[^a-z0-9]+/g, "-"));
	return n.length > 0 ? n : t;
}, yN = () => {
	let e = /* @__PURE__ */ new Map();
	return (t, n = "item") => {
		let r = vN(t, n), i = (e.get(r) ?? 0) + 1;
		return e.set(r, i), i === 1 ? r : `${r}-${i.toString()}`;
	};
}, bN = (e) => {
	let t = (e, t = "item") => vN(e, t);
	return {
		prefix: e,
		baseClass: gN,
		id: (n, r) => {
			let i = t(n, "slot"), a = r?.slug ? t(r.slug, r.fallbackSlug ?? "item") : null;
			return a ? `${e}-${i}-${a}` : `${e}-${i}`;
		},
		className: (e, n) => {
			let r = `${gN}__${t(e, "slot")}`, i = n?.slug ? t(n.slug, n.fallbackSlug ?? "item") : null;
			return i ? `${r} ${r}--${i}` : r;
		},
		token: t
	};
}, xN = u(bN(gN)), SN = (e) => {
	if (!e) return null;
	let t = vN(e, "");
	return t.length > 0 ? t : null;
};
function CN({ prefix: e, children: t }) {
	let n = SN(e) ?? gN, r = S(() => bN(n), [n]);
	return /* @__PURE__ */ O(xN.Provider, {
		value: r,
		children: t
	});
}
var wN = () => _(xN), TN = "44px", EN = [
	"linear-gradient(",
	"to bottom,",
	"var(--pc-color-surface) 0%,",
	"var(--pc-color-surface) 8%,",
	"color-mix(in srgb, var(--pc-color-surface) 92%, transparent) 16%,",
	"color-mix(in srgb, var(--pc-color-surface) 78%, transparent) 26%,",
	"color-mix(in srgb, var(--pc-color-surface) 40%, transparent) 42%,",
	"color-mix(in srgb, var(--pc-color-surface) 18%, transparent) 64%,",
	"color-mix(in srgb, var(--pc-color-surface) 6%, transparent) 84%,",
	"color-mix(in srgb, var(--pc-color-surface) 0%, transparent) 100%",
	")"
].join(" "), DN = {
	height: TN,
	backgroundImage: [
		"linear-gradient(",
		"to bottom,",
		"color-mix(in srgb, var(--pc-color-surface) 0%, transparent) 0%,",
		"color-mix(in srgb, var(--pc-color-surface) 6%, transparent) 16%,",
		"color-mix(in srgb, var(--pc-color-surface) 18%, transparent) 36%,",
		"color-mix(in srgb, var(--pc-color-surface) 40%, transparent) 58%,",
		"color-mix(in srgb, var(--pc-color-surface) 78%, transparent) 74%,",
		"color-mix(in srgb, var(--pc-color-surface) 92%, transparent) 84%,",
		"var(--pc-color-surface) 92%,",
		"var(--pc-color-surface) 100%",
		")"
	].join(" "),
	backgroundRepeat: "no-repeat",
	backgroundSize: "100% 100%"
}, ON = {
	height: TN,
	backgroundImage: EN,
	backgroundRepeat: "no-repeat",
	backgroundSize: "100% 100%"
}, kN = "sticky left-0 right-0 top-0 z-20 flex-shrink-0 w-full", AN = "relative z-20 w-full", jN = "sticky bottom-0 z-40 h-0 overflow-visible", MN = "-translate-y-full transform-gpu will-change-transform", NN = (e) => e === "top" ? "grid gap-3 justify-center @lg:justify-start" : "grid gap-3", PN = (e) => e === "top" ? "" : "pb-4", FN = (e) => e === "top" ? "mx-auto w-full" : "mx-auto w-full px-3", IN = (e, t) => ({ gridTemplateColumns: "repeat(" + t.toString() + ", minmax(0, 1fr))" }), LN = (e) => e === "top" ? "flex justify-center" : "flex w-full justify-center";
function RN({ placement: e, items: t, showFade: n = !0 }) {
	let r = wN(), i = t.length, a = yN(), o = IN(e, i), s = LN(e), c = NN(e), l = e === "top" ? kN : AN, u = PN(e), d = FN(e);
	if (i === 0) return null;
	let f = /* @__PURE__ */ O("div", {
		id: r.id(`navigation-rail-grid-${e}`),
		className: Y(r.className(`navigation-rail-grid-${e}`), c),
		style: o,
		children: t.map((t, n) => {
			let i = `navigation-shell-item-${e}-${n.toString()}`, o = a(i, "action");
			return /* @__PURE__ */ O("div", {
				id: r.id("navigation-item", { slug: o }),
				className: Y(r.className("navigation-item", { slug: o }), s),
				children: t
			}, i);
		})
	});
	return e === "bottom" ? /* @__PURE__ */ k("div", {
		id: r.id(`navigation-rail-${e}`),
		className: Y(r.className(`navigation-rail-${e}`), l),
		children: [/* @__PURE__ */ O("div", {
			"aria-hidden": "true",
			inert: !0,
			className: "invisible pointer-events-none w-full",
			children: /* @__PURE__ */ O("div", {
				className: Y(r.className("navigation-rail-wrapper"), u),
				children: /* @__PURE__ */ O("div", {
					className: Y(r.className("navigation-rail-inner"), d),
					children: f
				})
			})
		}), /* @__PURE__ */ O("div", {
			className: jN,
			children: /* @__PURE__ */ k("div", {
				"data-slot": "navigation-rail-bottom-surface",
				"data-pc-scroll-obstruction": "bottom",
				className: Y("pointer-events-none relative w-full bg-[var(--pc-color-surface)]", MN),
				children: [n && /* @__PURE__ */ O("div", {
					"aria-hidden": "true",
					"data-slot": "navigation-rail-bottom-fade",
					"data-pc-scroll-obstruction": "bottom",
					style: DN,
					className: "pointer-events-none absolute inset-x-0 bottom-full"
				}), /* @__PURE__ */ O("div", {
					className: "pointer-events-auto",
					children: /* @__PURE__ */ O("div", {
						className: Y(r.className("navigation-rail-wrapper"), u),
						children: /* @__PURE__ */ O("div", {
							className: Y(r.className("navigation-rail-inner"), d),
							children: f
						})
					})
				})]
			})
		})]
	}) : /* @__PURE__ */ O("div", {
		id: r.id(`navigation-rail-${e}`),
		"data-pc-scroll-obstruction": "top",
		className: Y(r.className(`navigation-rail-${e}`), l),
		children: /* @__PURE__ */ O("div", {
			className: Y(r.className("navigation-rail-wrapper"), u),
			children: /* @__PURE__ */ O("div", {
				className: Y(r.className("navigation-rail-inner"), d),
				children: f
			})
		})
	});
}
//#endregion
//#region src/context/navigationShell.tsx
var zN = () => ({
	top: [],
	bottom: []
}), BN = u(void 0);
function VN({ children: e, beforeTopRail: t, themeStyles: n }) {
	let [r, i] = T(() => zN()), [a, o] = T(null), [s, c] = T(null), [l, u] = T(0), [d, f] = T(!1), p = g((e) => {
		o(e);
	}, []), m = g((e) => {
		c(e), e || u(0);
	}, []), h = g((e, t) => {
		i((n) => n[e] === t ? n : {
			...n,
			[e]: t
		});
	}, []), _ = g((e) => {
		if (!e) {
			i(zN()), o(null);
			return;
		}
		i((t) => t[e].length === 0 ? t : {
			...t,
			[e]: []
		});
	}, []), v = S(() => ({
		items: r,
		setItems: h,
		clearItems: _,
		registerOverlay: p,
		contentNode: s,
		contentInset: l,
		setContentInset: u,
		setBottomRailFadeSuppressed: f
	}), [
		r,
		_,
		s,
		l,
		p,
		h
	]);
	return /* @__PURE__ */ O(BN.Provider, {
		value: v,
		children: /* @__PURE__ */ O(WN, {
			itemsByPlacement: r,
			overlay: a,
			onContentNodeChange: m,
			contentInset: l,
			bottomRailFadeSuppressed: d,
			beforeTopRail: t,
			themeStyles: n,
			children: e
		})
	});
}
function HN() {
	let e = _(BN);
	if (!e) throw Error("useNavigationShell must be used within a NavigationShellProvider");
	return e;
}
function UN(e, t, n = !0) {
	let { setItems: r, clearItems: i } = HN();
	v(() => {
		if (!n) {
			i(e);
			return;
		}
		if (t.length === 0) {
			i(e);
			return;
		}
		r(e, t);
	}, [
		i,
		n,
		t,
		e,
		r
	]), v(() => () => {
		i(e);
	}, [i, e]);
}
function WN({ itemsByPlacement: e, overlay: t, onContentNodeChange: n, contentInset: r, bottomRailFadeSuppressed: i, beforeTopRail: a, themeStyles: o, children: s }) {
	let c = wN(), l = 16 + Math.max(r, 0), u = r > 0 && !i ? { paddingBottom: r } : void 0, d = e.bottom.length > 0 && !i;
	return /* @__PURE__ */ k("div", {
		id: c.id("navigation-shell"),
		"data-pc-bottom-rail-fade": d ? "true" : void 0,
		className: Y(c.className("navigation-shell"), "relative flex h-full min-h-0 w-full flex-col overflow-hidden"),
		style: o,
		children: [
			a,
			/* @__PURE__ */ O(RN, {
				placement: "top",
				items: e.top
			}),
			/* @__PURE__ */ k("div", {
				id: c.id("navigation-main"),
				className: Y(c.className("navigation-main"), "relative flex min-h-0 flex-1 flex-col"),
				children: [/* @__PURE__ */ O("div", {
					ref: n,
					id: c.id("navigation-content"),
					className: Y(c.className("navigation-content"), "relative flex min-h-0 flex-1 flex-col overflow-hidden"),
					style: u,
					children: s
				}), t && /* @__PURE__ */ O("div", {
					id: c.id("navigation-overlay"),
					className: Y(c.className("navigation-overlay"), "pointer-events-none absolute inset-0 z-60"),
					children: /* @__PURE__ */ O("div", {
						className: Y(c.className("navigation-overlay-content"), "pointer-events-auto absolute right-4"),
						style: { bottom: l },
						children: t
					})
				})]
			}),
			/* @__PURE__ */ O(RN, {
				placement: "bottom",
				items: e.bottom,
				showFade: !i
			})
		]
	});
}
var GN = {
	valid: {
		holderName: "X’Æon-Júliën Þørnßon-Smith Jr.",
		accountHolder: "X’Æon-Júliën Þørnßon-Smith Jr.",
		bic: "DEUTDEFF500",
		iban: "GB29NWBK60161331926819",
		bankName: "Zürcher Kredït-Bänké 2.0"
	},
	invalid: {
		amount: "123abc",
		holderName: "",
		accountHolder: "",
		bic: "DEUTDEFFF00",
		iban: "GB99BANK123456",
		bankName: "Bank#123!"
	},
	generate: { amount: () => {
		let e = Math.floor(Math.random() * 5) + 2, t = 10 ** (e - 1), n = 10 ** e - 1, r = Math.floor(Math.random() * (n - t + 1)) + t, i = Math.random() < .7, a = r.toString();
		if (!i) return a;
		let o = Math.random() < .5 ? 2 : 1, s = 10 ** o;
		return `${a}.${Math.floor(Math.random() * s).toString().padStart(o, "0")}`;
	} }
}, KN = JSON.stringify({
	sessionId: "session_example",
	amount: "91038501",
	accountId: "",
	input: {
		holderName: "X'Æon-Júliën Þørnßon-Smith Jr.",
		expiryDate: "0825",
		transactionToken: "12a2ab5daf8ab37b0d6724b23ff8765f"
	},
	userId: "kalle_kula"
}), qN = u(void 0), JN = () => void 0, YN = {
	overridePayload: "",
	setOverridePayload: JN,
	resetOverridePayload: JN,
	isLocked: !1,
	setLocked: JN
}, XN = (() => {
	let e = !1;
	return () => {
		process.env.NODE_ENV !== "production" && (e ||= (console.warn("useOverridePayload was accessed outside an OverridePayloadProvider. Falling back to a no-op implementation."), !0));
	};
})();
function ZN({ children: e }) {
	let [t, n] = T(""), [r, i] = T(!1), a = g(() => {
		n("");
	}, []), o = g((e) => {
		i(e);
	}, []), s = S(() => ({
		overridePayload: t,
		setOverridePayload: n,
		resetOverridePayload: a,
		isLocked: r,
		setLocked: o
	}), [
		t,
		r,
		a,
		o,
		n
	]);
	return /* @__PURE__ */ O(qN.Provider, {
		value: s,
		children: e
	});
}
function QN() {
	return _(qN) || (XN(), YN);
}
//#endregion
//#region src/context/paymentFormReset.tsx
var $N = u(void 0);
function eP({ children: e }) {
	let t = w(null), n = w(!1), [r, i] = T(!1), a = g((e) => {
		let r = !!e;
		t.current === e && n.current === r || (t.current = e, n.current !== r && (n.current = r, i(r)));
	}, []), o = g(() => {
		t.current?.();
	}, []), s = S(() => ({
		reset: o,
		registerReset: a,
		hasResetHandler: r
	}), [
		r,
		a,
		o
	]);
	return /* @__PURE__ */ O($N.Provider, {
		value: s,
		children: e
	});
}
function tP() {
	let e = _($N);
	if (!e) throw Error("usePaymentFormReset must be used within a PaymentFormResetProvider");
	return e;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/subscribable.js
var nP = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
	}
	subscribe(e) {
		return this.listeners.add(e), this.onSubscribe(), () => {
			this.listeners.delete(e), this.onUnsubscribe();
		};
	}
	hasListeners() {
		return this.listeners.size > 0;
	}
	onSubscribe() {}
	onUnsubscribe() {}
}, rP = new class extends nP {
	#e;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e();
				return window.addEventListener("visibilitychange", t, !1), () => {
					window.removeEventListener("visibilitychange", t);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e((e) => {
			typeof e == "boolean" ? this.setFocused(e) : this.onFocus();
		});
	}
	setFocused(e) {
		this.#e !== e && (this.#e = e, this.onFocus());
	}
	onFocus() {
		let e = this.isFocused();
		this.listeners.forEach((t) => {
			t(e);
		});
	}
	isFocused() {
		return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
	}
}(), iP = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, aP = new class {
	#e = iP;
	#t = !1;
	setTimeoutProvider(e) {
		process.env.NODE_ENV !== "production" && this.#t && e !== this.#e && console.error("[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.", {
			previous: this.#e,
			provider: e
		}), this.#e = e, process.env.NODE_ENV !== "production" && (this.#t = !1);
	}
	setTimeout(e, t) {
		return process.env.NODE_ENV !== "production" && (this.#t = !0), this.#e.setTimeout(e, t);
	}
	clearTimeout(e) {
		this.#e.clearTimeout(e);
	}
	setInterval(e, t) {
		return process.env.NODE_ENV !== "production" && (this.#t = !0), this.#e.setInterval(e, t);
	}
	clearInterval(e) {
		this.#e.clearInterval(e);
	}
}();
function oP(e) {
	setTimeout(e, 0);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/utils.js
var sP = typeof window > "u" || "Deno" in globalThis;
function cP() {}
function lP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function uP(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function dP(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function fP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function pP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function mP(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== gP(o, t.options)) return !1;
		} else if (!vP(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function hP(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (_P(t.options.mutationKey) !== _P(a)) return !1;
		} else if (!vP(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function gP(e, t) {
	return (t?.queryKeyHashFn || _P)(e);
}
function _P(e) {
	return JSON.stringify(e, (e, t) => CP(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function vP(e, t) {
	return e === t ? !0 : typeof e == typeof t && e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => vP(e[n], t[n])) : !1;
}
var yP = Object.prototype.hasOwnProperty;
function bP(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = SP(e) && SP(t);
	if (!r && !(CP(e) && CP(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : yP.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = bP(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function xP(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function SP(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function CP(e) {
	if (!wP(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!wP(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function wP(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function TP(e) {
	return new Promise((t) => {
		aP.setTimeout(t, e);
	});
}
function EP(e, t, n) {
	if (typeof n.structuralSharing == "function") return n.structuralSharing(e, t);
	if (n.structuralSharing !== !1) {
		if (process.env.NODE_ENV !== "production") try {
			return bP(e, t);
		} catch (e) {
			throw console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${e}`), e;
		}
		return bP(e, t);
	}
	return t;
}
function DP(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function OP(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var kP = /* @__PURE__ */ Symbol();
function AP(e, t) {
	return process.env.NODE_ENV !== "production" && e.queryFn === kP && console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`), !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === kP ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function jP(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function MP(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r ? i : (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 }), i))
	}), e;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/environmentManager.js
var NP = /* @__PURE__ */ (() => {
	let e = () => sP;
	return {
		isServer() {
			return e();
		},
		setIsServer(t) {
			e = t;
		}
	};
})();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/thenable.js
function PP() {
	let e, t, n = new Promise((n, r) => {
		e = n, t = r;
	});
	n.status = "pending", n.catch(() => {});
	function r(e) {
		Object.assign(n, e), delete n.resolve, delete n.reject;
	}
	return n.resolve = (t) => {
		r({
			status: "fulfilled",
			value: t
		}), e(t);
	}, n.reject = (e) => {
		r({
			status: "rejected",
			reason: e
		}), t(e);
	}, n;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/notifyManager.js
var FP = oP;
function IP() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = FP, a = (r) => {
		t ? e.push(r) : i(() => {
			n(r);
		});
	}, o = () => {
		let t = e;
		e = [], t.length && i(() => {
			r(() => {
				t.forEach((e) => {
					n(e);
				});
			});
		});
	};
	return {
		batch: (e) => {
			let n;
			t++;
			try {
				n = e();
			} finally {
				t--, t || o();
			}
			return n;
		},
		batchCalls: (e) => (...t) => {
			a(() => {
				e(...t);
			});
		},
		schedule: a,
		setNotifyFunction: (e) => {
			n = e;
		},
		setBatchNotifyFunction: (e) => {
			r = e;
		},
		setScheduler: (e) => {
			i = e;
		}
	};
}
var LP = IP(), RP = new class extends nP {
	#e = !0;
	#t;
	#n;
	constructor() {
		super(), this.#n = (e) => {
			if (typeof window < "u" && window.addEventListener) {
				let t = () => e(!0), n = () => e(!1);
				return window.addEventListener("online", t, !1), window.addEventListener("offline", n, !1), () => {
					window.removeEventListener("online", t), window.removeEventListener("offline", n);
				};
			}
		};
	}
	onSubscribe() {
		this.#t || this.setEventListener(this.#n);
	}
	onUnsubscribe() {
		this.hasListeners() || (this.#t?.(), this.#t = void 0);
	}
	setEventListener(e) {
		this.#n = e, this.#t?.(), this.#t = e(this.setOnline.bind(this));
	}
	setOnline(e) {
		this.#e !== e && (this.#e = e, this.listeners.forEach((t) => {
			t(e);
		}));
	}
	isOnline() {
		return this.#e;
	}
}();
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/retryer.js
function zP(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function BP(e) {
	return (e ?? "online") === "online" ? RP.isOnline() : !0;
}
var VP = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function HP(e) {
	let t = !1, n = 0, r, i = PP(), a = () => i.status !== "pending", o = (t) => {
		if (!a()) {
			let n = new VP(t);
			f(n), e.onCancel?.(n);
		}
	}, s = () => {
		t = !0;
	}, c = () => {
		t = !1;
	}, l = () => rP.isFocused() && (e.networkMode === "always" || RP.isOnline()) && e.canRun(), u = () => BP(e.networkMode) && e.canRun(), d = (e) => {
		a() || (r?.(), i.resolve(e));
	}, f = (e) => {
		a() || (r?.(), i.reject(e));
	}, p = () => new Promise((t) => {
		r = (e) => {
			(a() || l()) && t(e);
		}, e.onPause?.();
	}).then(() => {
		r = void 0, a() || e.onContinue?.();
	}), m = () => {
		if (a()) return;
		let r, i = n === 0 ? e.initialPromise : void 0;
		try {
			r = i ?? e.fn();
		} catch (e) {
			r = Promise.reject(e);
		}
		Promise.resolve(r).then(d).catch((r) => {
			if (a()) return;
			let i = e.retry ?? (NP.isServer() ? 0 : 3), o = e.retryDelay ?? zP, s = typeof o == "function" ? o(n, r) : o, c = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			if (t || !c) {
				f(r);
				return;
			}
			n++, e.onFail?.(n, r), TP(s).then(() => l() ? void 0 : p()).then(() => {
				t ? f(r) : m();
			});
		});
	};
	return {
		promise: i,
		status: () => i.status,
		cancel: o,
		continue: () => (r?.(), i),
		cancelRetry: s,
		continueRetry: c,
		canStart: u,
		start: () => (u() ? m() : p().then(m), i)
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/removable.js
var UP = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), uP(this.gcTime) && (this.#e = aP.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (NP.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		this.#e &&= (aP.clearTimeout(this.#e), void 0);
	}
}, WP = class extends UP {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	constructor(e) {
		super(), this.#o = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#r = e.client, this.#n = this.#r.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = qP(this.options), this.state = e.state ?? this.#e, this.scheduleGc();
	}
	get meta() {
		return this.options.meta;
	}
	get promise() {
		return this.#i?.promise;
	}
	setOptions(e) {
		if (this.options = {
			...this.#a,
			...e
		}, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
			let e = qP(this.options);
			e.data !== void 0 && (this.setState(KP(e.data, e.dataUpdatedAt)), this.#e = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this);
	}
	setData(e, t) {
		let n = EP(this.state.data, e, this.options);
		return this.#c({
			data: n,
			type: "success",
			dataUpdatedAt: t?.updatedAt,
			manual: t?.manual
		}), n;
	}
	setState(e, t) {
		this.#c({
			type: "setState",
			state: e,
			setStateOptions: t
		});
	}
	cancel(e) {
		let t = this.#i?.promise;
		return this.#i?.cancel(e), t ? t.then(cP).catch(cP) : Promise.resolve();
	}
	destroy() {
		super.destroy(), this.cancel({ silent: !0 });
	}
	get resetState() {
		return this.#e;
	}
	reset() {
		this.destroy(), this.setState(this.resetState);
	}
	isActive() {
		return this.observers.some((e) => pP(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === kP || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => fP(e.options.staleTime, this) === "static") : !1;
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !dP(this.state.dataUpdatedAt, e);
	}
	onFocus() {
		this.observers.find((e) => e.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
	}
	onOnline() {
		this.observers.find((e) => e.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }), this.#i?.continue();
	}
	addObserver(e) {
		this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			query: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.observers.includes(e) && (this.observers = this.observers.filter((t) => t !== e), this.observers.length || (this.#i && (this.#o || this.#s() ? this.#i.cancel({ revert: !0 }) : this.#i.cancelRetry()), this.scheduleGc()), this.#n.notify({
			type: "observerRemoved",
			query: this,
			observer: e
		}));
	}
	getObserversCount() {
		return this.observers.length;
	}
	#s() {
		return this.state.fetchStatus === "paused" && this.state.status === "pending";
	}
	invalidate() {
		this.state.isInvalidated || this.#c({ type: "invalidate" });
	}
	async fetch(e, t) {
		if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
			if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
			else if (this.#i) return this.#i.continueRetry(), this.#i.promise;
		}
		if (e && this.setOptions(e), !this.options.queryFn) {
			let e = this.observers.find((e) => e.options.queryFn);
			e && this.setOptions(e.options);
		}
		process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error("As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"));
		let n = new AbortController(), r = (e) => {
			Object.defineProperty(e, "signal", {
				enumerable: !0,
				get: () => (this.#o = !0, n.signal)
			});
		}, i = () => {
			let e = AP(this.options, t), n = (() => {
				let e = {
					client: this.#r,
					queryKey: this.queryKey,
					meta: this.meta
				};
				return r(e), e;
			})();
			return this.#o = !1, this.options.persister ? this.options.persister(e, n, this) : e(n);
		}, a = (() => {
			let e = {
				fetchOptions: t,
				options: this.options,
				queryKey: this.queryKey,
				client: this.#r,
				state: this.state,
				fetchFn: i
			};
			return r(e), e;
		})();
		this.options.behavior?.onFetch(a, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== a.fetchOptions?.meta) && this.#c({
			type: "fetch",
			meta: a.fetchOptions?.meta
		}), this.#i = HP({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof VP && e.revert && this.setState({
					...this.#t,
					fetchStatus: "idle"
				}), n.abort();
			},
			onFail: (e, t) => {
				this.#c({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#c({ type: "pause" });
			},
			onContinue: () => {
				this.#c({ type: "continue" });
			},
			retry: a.options.retry,
			retryDelay: a.options.retryDelay,
			networkMode: a.options.networkMode,
			canRun: () => !0
		});
		try {
			let e = await this.#i.start();
			if (e === void 0) throw process.env.NODE_ENV !== "production" && console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`), Error(`${this.queryHash} data is undefined`);
			return this.setData(e), this.#n.config.onSuccess?.(e, this), this.#n.config.onSettled?.(e, this.state.error, this), e;
		} catch (e) {
			if (e instanceof VP) {
				if (e.silent) return this.#i.promise;
				if (e.revert) {
					if (this.state.data === void 0) throw e;
					return this.state.data;
				}
			}
			throw this.#c({
				type: "error",
				error: e
			}), this.#n.config.onError?.(e, this), this.#n.config.onSettled?.(this.state.data, e, this), e;
		} finally {
			this.scheduleGc();
		}
	}
	#c(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					fetchFailureCount: e.failureCount,
					fetchFailureReason: e.error
				};
				case "pause": return {
					...t,
					fetchStatus: "paused"
				};
				case "continue": return {
					...t,
					fetchStatus: "fetching"
				};
				case "fetch": return {
					...t,
					...GP(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...KP(e.data, e.dataUpdatedAt),
						dataUpdateCount: t.dataUpdateCount + 1,
						...!e.manual && {
							fetchStatus: "idle",
							fetchFailureCount: 0,
							fetchFailureReason: null
						}
					};
					return this.#t = e.manual ? n : void 0, n;
				case "error":
					let r = e.error;
					return {
						...t,
						error: r,
						errorUpdateCount: t.errorUpdateCount + 1,
						errorUpdatedAt: Date.now(),
						fetchFailureCount: t.fetchFailureCount + 1,
						fetchFailureReason: r,
						fetchStatus: "idle",
						status: "error",
						isInvalidated: !0
					};
				case "invalidate": return {
					...t,
					isInvalidated: !0
				};
				case "setState": return {
					...t,
					...e.state
				};
			}
		};
		this.state = t(this.state), LP.batch(() => {
			this.observers.forEach((e) => {
				e.onQueryUpdate();
			}), this.#n.notify({
				query: this,
				type: "updated",
				action: e
			});
		});
	}
};
function GP(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: BP(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function KP(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function qP(e) {
	let t = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = t !== void 0, r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: n ? r ?? Date.now() : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: n ? "success" : "pending",
		fetchStatus: "idle"
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/queryObserver.js
var JP = class extends nP {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = PP(), this.bindMethods(), this.setOptions(t);
	}
	#e;
	#t = void 0;
	#n = void 0;
	#r = void 0;
	#i;
	#a;
	#o;
	#s;
	#c;
	#l;
	#u;
	#d;
	#f;
	#p;
	#m = /* @__PURE__ */ new Set();
	bindMethods() {
		this.refetch = this.refetch.bind(this);
	}
	onSubscribe() {
		this.listeners.size === 1 && (this.#t.addObserver(this), XP(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return ZP(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return ZP(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof pP(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !xP(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && QP(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || pP(this.options.enabled, this.#t) !== pP(t.enabled, this.#t) || fP(this.options.staleTime, this.#t) !== fP(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || pP(this.options.enabled, this.#t) !== pP(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return eF(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
	}
	getCurrentResult() {
		return this.#r;
	}
	trackResult(e, t) {
		return new Proxy(e, { get: (e, n) => (this.trackProp(n), t?.(n), n === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && this.#o.status === "pending" && this.#o.reject(/* @__PURE__ */ Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(e, n)) });
	}
	trackProp(e) {
		this.#m.add(e);
	}
	getCurrentQuery() {
		return this.#t;
	}
	refetch({ ...e } = {}) {
		return this.fetch({ ...e });
	}
	fetchOptimistic(e) {
		let t = this.#e.defaultQueryOptions(e), n = this.#e.getQueryCache().build(this.#e, t);
		return n.fetch().then(() => this.createResult(n, t));
	}
	fetch(e) {
		return this.#h({
			...e,
			cancelRefetch: e.cancelRefetch ?? !0
		}).then(() => (this.updateResult(), this.#r));
	}
	#h(e) {
		this.#S();
		let t = this.#t.fetch(this.options, e);
		return e?.throwOnError || (t = t.catch(cP)), t;
	}
	#g() {
		this.#b();
		let e = fP(this.options.staleTime, this.#t);
		if (NP.isServer() || this.#r.isStale || !uP(e)) return;
		let t = dP(this.#r.dataUpdatedAt, e) + 1;
		this.#d = aP.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !(NP.isServer() || pP(this.options.enabled, this.#t) === !1 || !uP(this.#p) || this.#p === 0) && (this.#f = aP.setInterval(() => {
			(this.options.refetchIntervalInBackground || rP.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d &&= (aP.clearTimeout(this.#d), void 0);
	}
	#x() {
		this.#f &&= (aP.clearInterval(this.#f), void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && XP(e, t), o = i && QP(e, n, t, r);
			(a || o) && (l = {
				...l,
				...GP(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (m = "success", d = EP(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) if (i && d === a?.data && t.select === this.#c) d = this.#l;
		else try {
			this.#c = t.select, d = t.select(d), d = EP(i?.data, d, t), this.#l = d, this.#s = null;
		} catch (e) {
			this.#s = e;
		}
		this.#s && (f = this.#s, d = this.#l, p = Date.now(), m = "error");
		let g = l.fetchStatus === "fetching", _ = m === "pending", v = m === "error", y = _ && g, b = d !== void 0, x = {
			status: m,
			fetchStatus: l.fetchStatus,
			isPending: _,
			isSuccess: m === "success",
			isError: v,
			isInitialLoading: y,
			isLoading: y,
			data: d,
			dataUpdatedAt: l.dataUpdatedAt,
			error: f,
			errorUpdatedAt: p,
			failureCount: l.fetchFailureCount,
			failureReason: l.fetchFailureReason,
			errorUpdateCount: l.errorUpdateCount,
			isFetched: e.isFetched(),
			isFetchedAfterMount: l.dataUpdateCount > s.dataUpdateCount || l.errorUpdateCount > s.errorUpdateCount,
			isFetching: g,
			isRefetching: g && !_,
			isLoadingError: v && !b,
			isPaused: l.fetchStatus === "paused",
			isPlaceholderData: u,
			isRefetchError: v && b,
			isStale: $P(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: pP(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = x.data !== void 0, r = x.status === "error" && !t, i = (e) => {
				r ? e.reject(x.error) : t && e.resolve(x.data);
			}, a = () => {
				i(this.#o = x.promise = PP());
			}, o = this.#o;
			switch (o.status) {
				case "pending":
					e.queryHash === n.queryHash && i(o);
					break;
				case "fulfilled":
					(r || x.data !== o.value) && a();
					break;
				case "rejected":
					(!r || x.error !== o.reason) && a();
					break;
			}
		}
		return x;
	}
	updateResult() {
		let e = this.#r, t = this.createResult(this.#t, this.options);
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !xP(t, e) && (this.#r = t, this.#C({ listeners: (() => {
			if (!e) return !0;
			let { notifyOnChangeProps: t } = this.options, n = typeof t == "function" ? t() : t;
			if (n === "all" || !n && !this.#m.size) return !0;
			let r = new Set(n ?? this.#m);
			return this.options.throwOnError && r.add("error"), Object.keys(this.#r).some((t) => {
				let n = t;
				return this.#r[n] !== e[n] && r.has(n);
			});
		})() }));
	}
	#S() {
		let e = this.#e.getQueryCache().build(this.#e, this.options);
		if (e === this.#t) return;
		let t = this.#t;
		this.#t = e, this.#n = e.state, this.hasListeners() && (t?.removeObserver(this), e.addObserver(this));
	}
	onQueryUpdate() {
		this.updateResult(), this.hasListeners() && this.#y();
	}
	#C(e) {
		LP.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function YP(e, t) {
	return pP(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function XP(e, t) {
	return YP(e, t) || e.state.data !== void 0 && ZP(e, t, t.refetchOnMount);
}
function ZP(e, t, n) {
	if (pP(t.enabled, e) !== !1 && fP(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && $P(e, t);
	}
	return !1;
}
function QP(e, t, n, r) {
	return (e !== t || pP(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && $P(e, n);
}
function $P(e, t) {
	return pP(t.enabled, e) !== !1 && e.isStaleByTime(fP(t.staleTime, e));
}
function eF(e, t) {
	return !xP(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutation.js
var tF = class extends UP {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || nF(), this.setOptions(e.options), this.scheduleGc();
	}
	setOptions(e) {
		this.options = e, this.updateGcTime(this.options.gcTime);
	}
	get meta() {
		return this.options.meta;
	}
	addObserver(e) {
		this.#t.includes(e) || (this.#t.push(e), this.clearGcTimeout(), this.#n.notify({
			type: "observerAdded",
			mutation: this,
			observer: e
		}));
	}
	removeObserver(e) {
		this.#t = this.#t.filter((t) => t !== e), this.scheduleGc(), this.#n.notify({
			type: "observerRemoved",
			mutation: this,
			observer: e
		});
	}
	optionalRemove() {
		this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this));
	}
	continue() {
		return this.#r?.continue() ?? this.execute(this.state.variables);
	}
	async execute(e) {
		let t = () => {
			this.#i({ type: "continue" });
		}, n = {
			client: this.#e,
			meta: this.options.meta,
			mutationKey: this.options.mutationKey
		};
		this.#r = HP({
			fn: () => this.options.mutationFn ? this.options.mutationFn(e, n) : Promise.reject(/* @__PURE__ */ Error("No mutationFn found")),
			onFail: (e, t) => {
				this.#i({
					type: "failed",
					failureCount: e,
					error: t
				});
			},
			onPause: () => {
				this.#i({ type: "pause" });
			},
			onContinue: t,
			retry: this.options.retry ?? 0,
			retryDelay: this.options.retryDelay,
			networkMode: this.options.networkMode,
			canRun: () => this.#n.canRun(this)
		});
		let r = this.state.status === "pending", i = !this.#r.canStart();
		try {
			if (r) t();
			else {
				this.#i({
					type: "pending",
					variables: e,
					isPaused: i
				}), this.#n.config.onMutate && await this.#n.config.onMutate(e, this, n);
				let t = await this.options.onMutate?.(e, n);
				t !== this.state.context && this.#i({
					type: "pending",
					context: t,
					variables: e,
					isPaused: i
				});
			}
			let a = await this.#r.start();
			return await this.#n.config.onSuccess?.(a, e, this.state.context, this, n), await this.options.onSuccess?.(a, e, this.state.context, n), await this.#n.config.onSettled?.(a, null, this.state.variables, this.state.context, this, n), await this.options.onSettled?.(a, null, e, this.state.context, n), this.#i({
				type: "success",
				data: a
			}), a;
		} catch (t) {
			try {
				await this.#n.config.onError?.(t, e, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onError?.(t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.#n.config.onSettled?.(void 0, t, this.state.variables, this.state.context, this, n);
			} catch (e) {
				Promise.reject(e);
			}
			try {
				await this.options.onSettled?.(void 0, t, e, this.state.context, n);
			} catch (e) {
				Promise.reject(e);
			}
			throw this.#i({
				type: "error",
				error: t
			}), t;
		} finally {
			this.#n.runNext(this);
		}
	}
	#i(e) {
		let t = (t) => {
			switch (e.type) {
				case "failed": return {
					...t,
					failureCount: e.failureCount,
					failureReason: e.error
				};
				case "pause": return {
					...t,
					isPaused: !0
				};
				case "continue": return {
					...t,
					isPaused: !1
				};
				case "pending": return {
					...t,
					context: e.context,
					data: void 0,
					failureCount: 0,
					failureReason: null,
					error: null,
					isPaused: e.isPaused,
					status: "pending",
					variables: e.variables,
					submittedAt: Date.now()
				};
				case "success": return {
					...t,
					data: e.data,
					failureCount: 0,
					failureReason: null,
					error: null,
					status: "success",
					isPaused: !1
				};
				case "error": return {
					...t,
					data: void 0,
					error: e.error,
					failureCount: t.failureCount + 1,
					failureReason: e.error,
					isPaused: !1,
					status: "error"
				};
			}
		};
		this.state = t(this.state), LP.batch(() => {
			this.#t.forEach((t) => {
				t.onMutationUpdate(e);
			}), this.#n.notify({
				mutation: this,
				type: "updated",
				action: e
			});
		});
	}
};
function nF() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: "idle",
		variables: void 0,
		submittedAt: 0
	};
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutationObserver.js
var rF = class extends nP {
	#e;
	#t = void 0;
	#n;
	#r;
	constructor(e, t) {
		super(), this.#e = e, this.setOptions(t), this.bindMethods(), this.#i();
	}
	bindMethods() {
		this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
	}
	setOptions(e) {
		let t = this.options;
		this.options = this.#e.defaultMutationOptions(e), xP(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && _P(t.mutationKey) !== _P(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
	}
	onUnsubscribe() {
		this.hasListeners() || this.#n?.removeObserver(this);
	}
	onMutationUpdate(e) {
		this.#i(), this.#a(e);
	}
	getCurrentResult() {
		return this.#t;
	}
	reset() {
		this.#n?.removeObserver(this), this.#n = void 0, this.#i(), this.#a();
	}
	mutate(e, t) {
		return this.#r = t, this.#n?.removeObserver(this), this.#n = this.#e.getMutationCache().build(this.#e, this.options), this.#n.addObserver(this), this.#n.execute(e);
	}
	#i() {
		let e = this.#n?.state ?? nF();
		this.#t = {
			...e,
			isPending: e.status === "pending",
			isSuccess: e.status === "success",
			isError: e.status === "error",
			isIdle: e.status === "idle",
			mutate: this.mutate,
			reset: this.reset
		};
	}
	#a(e) {
		LP.batch(() => {
			if (this.#r && this.hasListeners()) {
				let t = this.#t.variables, n = this.#t.context, r = {
					client: this.#e,
					meta: this.options.meta,
					mutationKey: this.options.mutationKey
				};
				if (e?.type === "success") {
					try {
						this.#r.onSuccess?.(e.data, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(e.data, null, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				} else if (e?.type === "error") {
					try {
						this.#r.onError?.(e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
					try {
						this.#r.onSettled?.(void 0, e.error, t, n, r);
					} catch (e) {
						Promise.reject(e);
					}
				}
			}
			this.listeners.forEach((e) => {
				e(this.#t);
			});
		});
	}
}, iF = i.createContext(void 0), aF = (e) => {
	let t = i.useContext(iF);
	if (e) return e;
	if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return t;
}, oF = ({ client: e, children: t }) => (i.useEffect(() => (e.mount(), () => {
	e.unmount();
}), [e]), /* @__PURE__ */ O(iF.Provider, {
	value: e,
	children: t
})), sF = i.createContext(!1), cF = () => i.useContext(sF);
sF.Provider;
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function lF() {
	let e = !1;
	return {
		clearReset: () => {
			e = !1;
		},
		reset: () => {
			e = !0;
		},
		isReset: () => e
	};
}
var uF = i.createContext(lF()), dF = () => i.useContext(uF), fF = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? jP(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, pF = (e) => {
	i.useEffect(() => {
		e.clearReset();
	}, [e]);
}, mF = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || jP(n, [e.error, r])), hF = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, gF = (e, t) => e.isLoading && e.isFetching && !t, _F = (e, t) => e?.suspense && t.isPending, vF = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function yF(e, t, n) {
	if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e))) throw Error("Bad argument type. Starting with v5, only the \"Object\" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object");
	let r = cF(), a = dF(), o = aF(n), s = o.defaultQueryOptions(e);
	o.getDefaultOptions().queries?._experimental_beforeQuery?.(s);
	let c = o.getQueryCache().get(s.queryHash);
	process.env.NODE_ENV !== "production" && (s.queryFn || console.error(`[${s.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`)), s._optimisticResults = r ? "isRestoring" : "optimistic", hF(s), fF(s, a, c), pF(a);
	let l = !o.getQueryCache().get(s.queryHash), [u] = i.useState(() => new t(o, s)), d = u.getOptimisticResult(s), f = !r && e.subscribed !== !1;
	if (i.useSyncExternalStore(i.useCallback((e) => {
		let t = f ? u.subscribe(LP.batchCalls(e)) : cP;
		return u.updateResult(), t;
	}, [u, f]), () => u.getCurrentResult(), () => u.getCurrentResult()), i.useEffect(() => {
		u.setOptions(s);
	}, [s, u]), _F(s, d)) throw vF(s, u, a);
	if (mF({
		result: d,
		errorResetBoundary: a,
		throwOnError: s.throwOnError,
		query: c,
		suspense: s.suspense
	})) throw d.error;
	return o.getDefaultOptions().queries?._experimental_afterQuery?.(s, d), s.experimental_prefetchInRender && !NP.isServer() && gF(d, r) && (l ? vF(s, u, a) : c?.promise)?.catch(cP).finally(() => {
		u.updateResult();
	}), s.notifyOnChangeProps ? d : u.trackResult(d);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useQuery.js
function bF(e, t) {
	return yF(e, JP, t);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useMutation.js
function xF(e, t) {
	let n = aF(t), [r] = i.useState(() => new rF(n, e));
	i.useEffect(() => {
		r.setOptions(e);
	}, [r, e]);
	let a = i.useSyncExternalStore(i.useCallback((e) => r.subscribe(LP.batchCalls(e)), [r]), () => r.getCurrentResult(), () => r.getCurrentResult()), o = i.useCallback((e, t) => {
		r.mutate(e, t).catch(cP);
	}, [r]);
	if (a.error && jP(r.options.throwOnError, [a.error])) throw a.error;
	return {
		...a,
		mutate: o,
		mutateAsync: a.mutate
	};
}
//#endregion
//#region ../api/src/payments/core/bodySerializer.gen.ts
var SF = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) };
Object.entries({
	$body_: "body",
	$headers_: "headers",
	$path_: "path",
	$query_: "query"
});
//#endregion
//#region ../api/src/payments/core/serverSentEvents.gen.ts
var CF = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
	let d, f = c ?? ((e) => new Promise((t) => setTimeout(t, e)));
	return { stream: async function* () {
		let c = a ?? 3e3, p = 0, m = u.signal ?? new AbortController().signal;
		for (; !m.aborted;) {
			p++;
			let a = u.headers instanceof Headers ? u.headers : new Headers(u.headers);
			d !== void 0 && a.set("Last-Event-ID", d);
			try {
				let t = {
					redirect: "follow",
					...u,
					body: u.serializedBody,
					headers: a,
					signal: m
				}, o = new Request(l, t);
				e && (o = await e(l, t));
				let s = await (u.fetch ?? globalThis.fetch)(o);
				if (!s.ok) throw Error(`SSE failed: ${s.status} ${s.statusText}`);
				if (!s.body) throw Error("No body in SSE response");
				let f = s.body.pipeThrough(new TextDecoderStream()).getReader(), p = "", h = () => {
					try {
						f.cancel();
					} catch {}
				};
				m.addEventListener("abort", h);
				try {
					for (;;) {
						let { done: e, value: t } = await f.read();
						if (e) break;
						p += t;
						let a = p.split("\n\n");
						p = a.pop() ?? "";
						for (let e of a) {
							let t = e.split("\n"), a = [], o;
							for (let e of t) if (e.startsWith("data:")) a.push(e.replace(/^data:\s*/, ""));
							else if (e.startsWith("event:")) o = e.replace(/^event:\s*/, "");
							else if (e.startsWith("id:")) d = e.replace(/^id:\s*/, "");
							else if (e.startsWith("retry:")) {
								let t = Number.parseInt(e.replace(/^retry:\s*/, ""), 10);
								Number.isNaN(t) || (c = t);
							}
							let s, l = !1;
							if (a.length) {
								let e = a.join("\n");
								try {
									s = JSON.parse(e), l = !0;
								} catch {
									s = e;
								}
							}
							l && (i && await i(s), r && (s = await r(s))), n?.({
								data: s,
								event: o,
								id: d,
								retry: c
							}), a.length && (yield s);
						}
					}
				} finally {
					m.removeEventListener("abort", h), f.releaseLock();
				}
				break;
			} catch (e) {
				if (t?.(e), o !== void 0 && p >= o) break;
				await f(Math.min(c * 2 ** (p - 1), s ?? 3e4));
			}
		}
	}() };
}, wF = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, TF = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, EF = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, DF = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(TF(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = wF(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : OF({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, OF = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, kF = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
	if (i instanceof Date) return a ? i.toISOString() : `${n}=${i.toISOString()}`;
	if (r !== "deepObject" && !t) {
		let t = [];
		Object.entries(i).forEach(([n, r]) => {
			t = [
				...t,
				n,
				e ? r : encodeURIComponent(r)
			];
		});
		let a = t.join(",");
		switch (r) {
			case "form": return `${n}=${a}`;
			case "label": return `.${a}`;
			case "matrix": return `;${n}=${a}`;
			default: return a;
		}
	}
	let o = EF(r), s = Object.entries(i).map(([t, i]) => OF({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, AF = /\{[^{}]+\}/g, jF = ({ path: e, url: t }) => {
	let n = t, r = t.match(AF);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, DF({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, kF({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${OF({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, MF = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = jF({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function NF(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
//#endregion
//#region ../api/src/payments/core/auth.gen.ts
var PF = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, FF = ({ allowReserved: e, array: t, object: n } = {}) => (r) => {
	let i = [];
	if (r && typeof r == "object") for (let a in r) {
		let o = r[a];
		if (o != null) if (Array.isArray(o)) {
			let n = DF({
				allowReserved: e,
				explode: !0,
				name: a,
				style: "form",
				value: o,
				...t
			});
			n && i.push(n);
		} else if (typeof o == "object") {
			let t = kF({
				allowReserved: e,
				explode: !0,
				name: a,
				style: "deepObject",
				value: o,
				...n
			});
			t && i.push(t);
		} else {
			let t = OF({
				allowReserved: e,
				name: a,
				value: o
			});
			t && i.push(t);
		}
	}
	return i.join("&");
}, IF = (e) => {
	if (!e) return "stream";
	let t = e.split(";")[0]?.trim();
	if (t) {
		if (t.startsWith("application/json") || t.endsWith("+json")) return "json";
		if (t === "multipart/form-data") return "formData";
		if ([
			"application/",
			"audio/",
			"image/",
			"video/"
		].some((e) => t.startsWith(e))) return "blob";
		if (t.startsWith("text/")) return "text";
	}
}, LF = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, RF = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (LF(t, n.name)) continue;
		let e = await PF(n, t.auth);
		if (!e) continue;
		let r = n.name ?? "Authorization";
		switch (n.in) {
			case "query":
				t.query ||= {}, t.query[r] = e;
				break;
			case "cookie":
				t.headers.append("Cookie", `${r}=${e}`);
				break;
			default:
				t.headers.set(r, e);
				break;
		}
	}
}, zF = (e) => MF({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : FF(e.querySerializer),
	url: e.url
}), BF = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = HF(e.headers, t.headers), n;
}, VF = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, HF = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? VF(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, UF = class {
	fns = [];
	clear() {
		this.fns = [];
	}
	eject(e) {
		let t = this.getInterceptorIndex(e);
		this.fns[t] && (this.fns[t] = null);
	}
	exists(e) {
		let t = this.getInterceptorIndex(e);
		return !!this.fns[t];
	}
	getInterceptorIndex(e) {
		return typeof e == "number" ? this.fns[e] ? e : -1 : this.fns.indexOf(e);
	}
	update(e, t) {
		let n = this.getInterceptorIndex(e);
		return this.fns[n] ? (this.fns[n] = t, e) : !1;
	}
	use(e) {
		return this.fns.push(e), this.fns.length - 1;
	}
}, WF = () => ({
	error: new UF(),
	request: new UF(),
	response: new UF()
}), GF = FF({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), KF = { "Content-Type": "application/json" }, qF = (e = {}) => ({
	...SF,
	headers: KF,
	parseAs: "auto",
	querySerializer: GF,
	...e
}), JF = ((e = {}) => {
	let t = BF(qF(), e), n = () => ({ ...t }), r = (e) => (t = BF(t, e), n()), i = WF(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: HF(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await RF({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: zF(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: NF(t)
		}, o = new Request(n, r);
		for (let e of i.request.fns) e && (o = await e(o, t));
		let s = t.fetch, c = await s(o);
		for (let e of i.response.fns) e && (c = await e(c, o, t));
		let l = {
			request: o,
			response: c
		};
		if (c.ok) {
			let e = (t.parseAs === "auto" ? IF(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
			if (c.status === 204 || c.headers.get("Content-Length") === "0") {
				let n;
				switch (e) {
					case "arrayBuffer":
					case "blob":
					case "text":
						n = await c[e]();
						break;
					case "formData":
						n = new FormData();
						break;
					case "stream":
						n = c.body;
						break;
					default:
						n = {};
						break;
				}
				return t.responseStyle === "data" ? n : {
					data: n,
					...l
				};
			}
			let n;
			switch (e) {
				case "arrayBuffer":
				case "blob":
				case "formData":
				case "json":
				case "text":
					n = await c[e]();
					break;
				case "stream": return t.responseStyle === "data" ? c.body : {
					data: c.body,
					...l
				};
			}
			return e === "json" && (t.responseValidator && await t.responseValidator(n), t.responseTransformer && (n = await t.responseTransformer(n))), t.responseStyle === "data" ? n : {
				data: n,
				...l
			};
		}
		let u = await c.text(), d;
		try {
			d = JSON.parse(u);
		} catch {}
		let f = d ?? u, p = f;
		for (let e of i.error.fns) e && (p = await e(f, c, o, t));
		if (p ||= {}, t.throwOnError) throw p;
		return t.responseStyle === "data" ? void 0 : {
			error: p,
			...l
		};
	}, s = (e) => (t) => o({
		...t,
		method: e
	}), c = (e) => async (t) => {
		let { opts: n, url: r } = await a(t);
		return CF({
			...n,
			body: n.body,
			headers: n.headers,
			method: e,
			onRequest: async (e, t) => {
				let r = new Request(e, t);
				for (let e of i.request.fns) e && (r = await e(r, n));
				return r;
			},
			url: r
		});
	};
	return {
		buildUrl: zF,
		connect: s("CONNECT"),
		delete: s("DELETE"),
		get: s("GET"),
		getConfig: n,
		head: s("HEAD"),
		interceptors: i,
		options: s("OPTIONS"),
		patch: s("PATCH"),
		post: s("POST"),
		put: s("PUT"),
		request: o,
		setConfig: r,
		sse: {
			connect: c("CONNECT"),
			delete: c("DELETE"),
			get: c("GET"),
			head: c("HEAD"),
			options: c("OPTIONS"),
			patch: c("PATCH"),
			post: c("POST"),
			put: c("PUT"),
			trace: c("TRACE")
		},
		trace: s("TRACE")
	};
})(qF({ baseUrl: "https://api.example.com" })), YF = async (e) => (e = XF(e), e), XF = (e) => (e.paymentTypes &&= e.paymentTypes.map((e) => ZF(e)), e), ZF = (e) => (e.lastSuccessful &&= new Date(e.lastSuccessful), e), QF = async (e) => (e = $F(e), e), $F = (e) => (e.payments = e.payments.map((e) => eI(e)), e), eI = (e) => (e.createdAt = new Date(e.createdAt), e), tI = (e) => (e.client ?? JF).get({
	responseTransformer: YF,
	url: "/payment-types",
	...e
}), nI = (e) => (e.client ?? JF).post({
	url: "/payment/{paymentType}/{method}",
	...e,
	headers: {
		"Content-Type": "application/json",
		...e.headers
	}
}), rI = (e) => (e.client ?? JF).get({
	url: "/payment/summary/{paymentId}",
	...e
}), iI = (e) => (e.client ?? JF).get({
	responseTransformer: QF,
	url: "/payment/history",
	...e
}), aI = (e) => (e.client ?? JF).post({
	url: "/payment/{paymentId}/cancel",
	...e
}), oI = (e) => (e.client ?? JF).get({
	url: "/i18n",
	...e
}), sI = (e) => (e.client ?? JF).post({
	url: "/account/delete",
	...e
}), cI = ({ merchantId: e, locale: t }) => [
	"cashier",
	"i18n",
	e,
	t
], lI = (e) => ({
	queryKey: cI(e),
	queryFn: () => uI(e),
	staleTime: 10 * 6e4,
	gcTime: 30 * 6e4
}), uI = async ({ merchantId: e, locale: t }) => {
	let { data: n, error: r } = await oI({
		query: {
			merchantId: e,
			locale: t
		},
		cache: "no-store"
	});
	return r ? {} : n?.texts ?? {};
}, dI = u({
	translations: {},
	translateKey: (e) => typeof e == "string" ? e : "",
	hasTranslation: () => !1,
	isTranslationVisible: !0
});
function fI({ children: e, translations: t, debug: n, isTranslationVisible: r }) {
	let i = g((e) => {
		if (typeof e != "string" || e.length === 0 || !r) return !1;
		let n = t[e];
		return typeof n == "string" && n.length > 0;
	}, [r, t]), a = g((e) => {
		if (typeof e != "string" || e.length === 0) return "";
		if (n) return e;
		if (!r) return "";
		let i = t[e];
		return typeof i == "string" && i.length > 0 ? i : e;
	}, [
		n,
		r,
		t
	]), o = S(() => ({
		translations: t,
		translateKey: a,
		hasTranslation: i,
		isTranslationVisible: r
	}), [
		i,
		r,
		t,
		a
	]);
	return /* @__PURE__ */ O(dI.Provider, {
		value: o,
		children: e
	});
}
function pI({ children: e }) {
	let { merchantId: t, locale: n, debug: r } = _(hN), i = _l(n), a = !r && !!(t && i), { data: o, isFetched: s } = bF({
		...lI({
			merchantId: t,
			locale: i
		}),
		enabled: a && !!(t && i)
	});
	return /* @__PURE__ */ O(fI, {
		translations: o ?? {},
		debug: r,
		isTranslationVisible: r || !a || s,
		children: e
	});
}
var mI = () => _(dI), hI = () => {
	let { hasTranslation: e, isTranslationVisible: t } = _(dI);
	return {
		hasTranslation: e,
		isTranslationVisible: t
	};
}, gI = u({ portalContainer: null }), _I = gI.Provider, vI = () => _(gI), yI = (e) => e?.parentElement?.parentElement ?? e?.parentElement ?? e ?? void 0, bI = () => {
	let { portalContainer: e } = vI();
	return yI(e);
}, xI = "bottom", SI = "cta.close";
function CI({ isOpen: e, onClose: t, side: n = xI, title: r, children: i, portalContainer: a, closeButtonLabel: o, overlayClassName: s, contentClassName: c, variant: l, contentRef: u }) {
	let { translateKey: d } = mI(), f = bI(), p = a ?? f;
	return /* @__PURE__ */ O(IA, {
		isOpen: e,
		onClose: t,
		side: n,
		title: r,
		closeButtonLabel: o ?? d(SI),
		portalContainer: p,
		overlayClassName: s,
		contentClassName: c,
		variant: l,
		contentRef: u,
		children: i
	});
}
//#endregion
//#region src/utils/formatTemplate.ts
var wI = (e, t, n) => {
	let r = `{${t}}`;
	return e.includes(r) ? e.replace(r, n) : `${e} ${n}`;
}, TI = {
	available: 0,
	close: 1
}, EI = (e) => e.map((e, t) => ({
	item: e,
	index: t
})).sort((e, t) => {
	let n = TI[e.item.status] - TI[t.item.status];
	return n === 0 ? e.index - t.index : n;
}).map(({ item: e }) => e), DI = (e) => typeof e == "string" && e.trim().length > 0, OI = (e) => typeof e == "string" ? e.trim().toLowerCase() : void 0, kI = (e, t) => e == null ? !0 : t == null ? !1 : OI(e) === OI(t), AI = (e, t) => kI(t.method, e.method) && kI(t.type, e.type) && kI(t.service, e.service) && kI(t.accountId, e.accountId), jI = (e) => typeof e == "number" && Number.isFinite(e), MI = (e, t = 0) => jI(e) ? e : t, NI = (e) => jI(e) ? e : void 0, PI = (e) => {
	if (!jI(e)) return;
	let t = e;
	return t >= 0 ? t : void 0;
}, FI = (e) => {
	if (jI(e)) return e > 0 ? e : void 0;
}, II = (e) => ({
	payinCount: MI(e?.payinCount),
	daysSinceRegistration: MI(e?.daysSinceRegistration),
	totalPayinAmount: MI(e?.totalPayinAmount)
}), LI = (e, t, n, r, i) => {
	let a = [];
	if (t !== void 0 && e < t) {
		let n = t - e;
		if (r !== void 0 && n <= r) a.push({
			type: i,
			delta: n
		});
		else return {
			status: "fail",
			closeReasons: []
		};
	}
	if (n !== void 0 && e > n) {
		let t = e - n;
		if (r !== void 0 && t <= r) a.push({
			type: i,
			delta: t
		});
		else return {
			status: "fail",
			closeReasons: []
		};
	}
	return a.length > 0 ? {
		status: "close",
		closeReasons: a
	} : {
		status: "pass",
		closeReasons: []
	};
}, RI = (e, t, n) => {
	if (!AI(e, t)) return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let r = LI(n.amount, NI(t.minAmount), NI(t.maxAmount), PI(t.closeToAmount), "amount");
	if (r.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let i = LI(n.user.payinCount, NI(t.minPayinCount), NI(t.maxPayinCount), PI(t.closeToPayinCount), "payinCount");
	if (i.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let a = LI(n.user.totalPayinAmount, NI(t.minTotalPayinAmount), NI(t.maxTotalPayinAmount), PI(t.closeToTotalPayinAmount), "totalPayinAmount");
	if (a.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let o = LI(n.user.daysSinceRegistration, NI(t.minDaysSinceRegistration), NI(t.maxDaysSinceRegistration), PI(t.closeToDaysSinceRegistration), "daysSinceRegistration");
	if (o.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let s = [
		...r.closeReasons,
		...i.closeReasons,
		...a.closeReasons,
		...o.closeReasons
	];
	return s.length > 0 ? {
		status: "close",
		closeReasons: s,
		score: s.reduce((e, t) => e + Math.abs(t.delta), 0)
	} : {
		status: "eligible",
		closeReasons: [],
		score: 0
	};
}, zI = (e) => Array.isArray(e) ? e.filter((e) => DI(e.code) && DI(e.title) && DI(e.description)) : [], BI = (e) => Array.isArray(e) && e.length > 0, VI = (e, t, n) => {
	if (!t) return [];
	let r = {
		amount: MI(n?.amount),
		user: II(n?.user)
	}, i = [];
	for (let n of e) {
		let e = n.conditions, a = e?.include ?? [], o = e?.exclude ?? [], s = a.length > 0 ? a.map((e) => RI(t, e, r)) : [{
			status: "eligible",
			closeReasons: [],
			score: 0
		}], c = s.find((e) => e.status === "eligible"), l = null, u = [];
		if (c) l = "available";
		else {
			let e = s.filter((e) => e.status === "close");
			if (e.length === 0) continue;
			let t = e.reduce((e, t) => t.score < e.score ? t : e);
			l = "close", u = t.closeReasons;
		}
		o.some((e) => RI(t, e, r).status === "eligible") || i.push({
			bonus: n,
			status: l,
			closeReasons: u
		});
	}
	return i;
}, HI = (e, t) => {
	let n = FI(e.maxBonus);
	if (n === void 0) return null;
	let r = FI(e.maxBonusPercentage) ?? 100, i = n / (r / 100), a = FI(t), o = a === void 0 ? null : Math.min(n, r / 100 * a);
	return {
		maxBonus: n,
		maxBonusPercentage: r,
		estimatedBonus: o,
		fullClaimAmount: i,
		claimPercentage: o === null ? null : Math.min(100, o / n * 100)
	};
}, UI = (e, t, n) => e.type === "amount" ? wI(t("bonus.close_to_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "totalPayinAmount" ? wI(t("bonus.close_to_total_payin_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "payinCount" ? wI(t("bonus.close_to_payin_count"), "count", String(Math.round(Math.abs(e.delta)))) : wI(t("bonus.close_to_registration_days"), "days", String(Math.round(Math.abs(e.delta)))), WI = ({ uiComboView: e, lockAmount: t }) => e && !t, GI = ({ uiComboView: e, lockAmount: t, method: n }) => WI({
	uiComboView: e,
	lockAmount: t
}) ? "/quick-payment" : `/pts/${n}`, KI = (e) => WI(e) ? "/quick-payment" : e.gotoPaymentType ? e.uiBonuses && BI(e.bonuses) ? "/bonus" : `/pt/${encodeURIComponent(e.gotoPaymentType)}` : `/pts/${e.method}`, qI = (e) => e === "fixed" || e === "percentage", JI = (e) => e === "add" || e === "deduct", YI = (e) => e?.value === void 0 ? null : Sc(e.value), XI = (e) => YI(e) !== null, ZI = (e) => e === "add" ? "" : e === "deduct" ? "-" : "", QI = (e) => {
	if (!e) return null;
	try {
		let { locale: t, ...n } = e.resolvedOptions();
		return new Intl.NumberFormat(t, { ...n });
	} catch {
		return null;
	}
}, $I = (e, t) => {
	if (!e || !qI(e.feeType) || !JI(e.direction)) return null;
	let n = YI(e);
	if (n === null) return null;
	let r = Math.max(Number.isFinite(t) ? t : 0, 0), i = Math.abs(n), a = e.feeType === "percentage" ? i / 100 * r : i;
	return {
		amount: a,
		signedAmount: e.direction === "deduct" ? -a : a,
		direction: e.direction,
		feeType: e.feeType
	};
}, eL = (e, t, n) => {
	let r = $I(e, t);
	if (!r) return "";
	if (n.feeCurrencyFormatter) return n.feeCurrencyFormatter.format(r.signedAmount);
	let i = ZI(r.direction), a = n.formatCurrencyValue(r.amount) || String(r.amount);
	return i ? `${i}${a}` : a;
}, tL = (e, t, n) => {
	let r = eL(e, t, n);
	return r ? {
		id: "fee",
		label: "field.fee.label",
		value: r
	} : null;
}, nL = (e, t, n) => iL(e, t, n, {
	id: "total-payout",
	label: "field.total_payout.label",
	includeAddedFee: !1,
	hideWhenUnchanged: !1
}), rL = (e, t, n) => iL(e, t, n, {
	id: "total",
	label: "field.total.label",
	includeAddedFee: !0,
	hideWhenUnchanged: !0,
	showWhenEmpty: !0
}), iL = (e, t, n, r) => {
	if (!e || !qI(e.feeType) || !JI(e.direction) || YI(e) === null) return null;
	let i = Math.max(Number.isFinite(t) ? t : 0, 0);
	if (r.showWhenEmpty && i === 0) return {
		id: r.id,
		label: r.label,
		value: {
			value: 0,
			currency: n
		}
	};
	let a = i > 0 ? $I(e, i) : null, o = Math.max(i + (r.includeAddedFee ? a?.signedAmount ?? 0 : Math.min(a?.signedAmount ?? 0, 0)), 0);
	return r.hideWhenUnchanged && o === i ? null : {
		id: r.id,
		label: r.label,
		value: {
			value: o,
			currency: n
		}
	};
}, aL = (e, t) => {
	let n = t.filter((e) => e !== null);
	if (n.length === 0) return e;
	let r = e.findIndex((e) => e.id === "remaining-balance");
	return r === -1 ? [...e, ...n] : [
		...e.slice(0, r),
		...n,
		...e.slice(r)
	];
}, oL = (e, t) => Math.max(e, 0), sL = (e, t) => Math.max(Number.isFinite(e) ? e : 0, 0), cL = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, lL = (t, n) => {
	if (t !== e.PAYOUT || !n) return null;
	let r = cL(n.withdrawableBalance);
	return r === null ? null : Math.max(r, 0);
}, uL = (e, t, n) => {
	let r = lL(e, t);
	return r === null ? null : oL(r, n);
}, dL = (e, t) => sL(e, t), fL = new RegExp(kc), pL = (e, t) => {
	if (!t) return e;
	let n = qc(e) ?? "";
	return fL.test(n) ? n : "0";
}, mL = (e, t, n) => uL(e, t, n), hL = (e) => {
	let t = al(il(e));
	if (!t) return null;
	let n = Number(t);
	return Number.isFinite(n) ? n : null;
}, gL = (e) => e.length === 0 || e === "." || e.endsWith("."), _L = (e, t, n) => {
	let r = il(e), i = gL(r), a = i ? null : hL(r), o = t?.min ? hL(t.min) : null, s = t?.max ? hL(t.max) : null, c = (() => {
		let e = n?.maxBoundary ?? null;
		return s === null ? e : e === null ? s : Math.min(s, e);
	})(), l = a !== null && o !== null && a < o, u = a !== null && c !== null && a > c;
	return {
		value: a,
		min: o,
		max: c,
		isBelowMin: l,
		isAboveMax: u,
		isOutOfRange: l || u,
		isIncomplete: i
	};
}, vL = (e, t, n) => {
	let r = _L(e, t, n);
	if (r.isOutOfRange) {
		if (r.isBelowMin && r.min !== null) return {
			key: "error.amount_below_limit",
			boundaryValue: r.min
		};
		if (r.isAboveMax && r.max !== null) return {
			key: "error.amount_above_limit",
			boundaryValue: r.max
		};
	}
}, yL = (e, t, n) => {
	if (e) return wI(t(e.key), "amount", n(e.boundaryValue) || String(e.boundaryValue));
};
//#endregion
//#region src/hooks/useCashierFormatters.ts
function bL(e, t, n, r) {
	return {
		currencyFormatter: S(() => {
			if (!e) return null;
			let r = {
				trailingZeroDisplay: "stripIfInteger",
				...n
			};
			try {
				return wc({
					currency: e,
					locale: t,
					formatOptions: r,
					useCurrencyScale: !0
				});
			} catch {
				return null;
			}
		}, [
			e,
			n,
			t
		]),
		dateTimeFormatter: S(() => {
			try {
				return fl({
					locale: t,
					formatOptions: r
				});
			} catch {
				return null;
			}
		}, [r, t])
	};
}
var xL = (e, t) => {
	if (!t) return "";
	let n = Sc(e);
	return n === null ? "" : t.format(n);
}, SL = (e, t, n, r) => {
	if (!(e instanceof Date) && typeof e != "string") return "";
	let i = dl(e, { strict: !0 });
	if (!i) return "";
	if (t) try {
		return t.format(i);
	} catch {}
	return pl(i, n, r);
}, CL = (e, t, n, r, i) => {
	if (Ec(e)) return xL(e.value, t) || Tc(e, { locale: r });
	if (e instanceof Date) return SL(e, n, r, i);
	if (typeof e == "string") return xL(e, t) || SL(e, n, r, i) || e;
	if (typeof e == "boolean") return e ? "true" : "false";
	if (typeof e == "number" || typeof e == "bigint") return e.toString();
	if (typeof e == "symbol") return e.description || "";
	if (typeof e == "function") return e.name;
	let a = xL(e, t);
	if (a) return a;
	if (e == null) return "";
	if (typeof e == "object") try {
		return JSON.stringify(e);
	} catch {
		return "";
	}
	return "";
}, wL = "card", TL = "••••", EL = "pt_", DL = (e) => {
	if (e) {
		if (typeof e == "string") return { default: e };
		if (typeof e == "object" && !Array.isArray(e)) {
			let t = Object.entries(e).filter((e) => typeof e[1] == "string" && e[1].length > 0).map(([e, t]) => [e.trim().toLowerCase(), t]).filter(([e]) => e.length > 0);
			if (t.length === 0) return;
			let n = {};
			for (let [e, r] of t) n[e] || (n[e] = r);
			return n;
		}
	}
}, OL = (e) => DL(e.logo), kL = (e) => {
	let t = e.replace(Uc, "");
	if (!t) return null;
	let n = t.slice(-4);
	return n.length > 0 ? n : null;
}, AL = (e) => {
	if (qc(e.type)?.toLowerCase() !== wL || !qc(e.accountId)) return null;
	let t = qc(e.name);
	if (!t) return null;
	let n = kL(t);
	return n ? `${TL}${n}` : null;
}, jL = (e) => {
	let t = 2166136261, n = 522970236;
	for (let r = 0; r < e.length; r += 1) {
		let i = e.charCodeAt(r);
		t ^= i, t = Math.imul(t, 16777619), n ^= i, n = Math.imul(n, 2246822507);
	}
	return [t >>> 0, n >>> 0].map((e) => e.toString(36)).join("");
}, ML = (e) => qc(e) ?? "", NL = (e) => {
	let t = [
		ML(e.accountId),
		ML(e.name),
		ML(e.type),
		ML(e.method),
		ML(e.service)
	];
	return `${EL}${jL(JSON.stringify(t))}`;
}, PL = (e) => e?.map((e) => ({
	...e,
	logo: OL(e)
})) ?? [], FL = async (e) => {
	let { data: t, error: n } = await tI({
		query: e,
		cache: "no-store"
	});
	if (n) throw Error();
	return {
		paymentTypes: PL(t?.paymentTypes),
		currency: t?.currency,
		pciTenantId: t?.pciTenantId
	};
}, IL = (e) => !e || typeof e != "string" ? null : qc(e)?.toLowerCase() ?? null, LL = (e, t) => {
	let n = e[t];
	return typeof n == "string" ? IL(n) : null;
}, RL = (e, t, n) => LL(e, t) === n, zL = (e) => {
	let t = e.split(".").map((e) => e.trim()).filter((e) => e.length > 0);
	return t[0] === "payment_type" ? t.slice(1) : t;
}, BL = (e, t) => e.find((e) => t.every(([t, n]) => RL(e, t, n))) ?? null, VL = (e, t) => {
	let n = zL(t);
	if (n.length === 1) {
		let [t] = n;
		return t ? BL(e, [["type", t]]) ?? BL(e, [["service", t]]) : null;
	}
	if (n.length === 2) {
		let [t, r] = n;
		return !t || !r ? null : BL(e, [["type", t], ["method", r]]) ?? BL(e, [["type", t], ["service", r]]) ?? BL(e, [["service", t], ["method", r]]);
	}
	if (n.length === 3) {
		let [t, r, i] = n;
		return !t || !r || !i ? null : BL(e, [
			["type", t],
			["service", r],
			["method", i]
		]) ?? BL(e, [
			["type", t],
			["method", r],
			["service", i]
		]);
	}
	return null;
}, HL = (e, t) => {
	let n = IL(t);
	if (!n) return null;
	let r = e.find((e) => NL(e) === n) ?? null;
	if (r) return r;
	let i = (t) => BL(e, [[t, n]]);
	return i("accountId") ?? i("name") ?? VL(e, n);
}, UL = ({ merchantId: e, method: t, userId: n, sessionId: r, currency: i }) => [
	"payment-types",
	e,
	t,
	n,
	r,
	i
], WL = (e) => ({
	queryKey: UL(e),
	queryFn: () => FL(e),
	enabled: !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 5 * 6e4,
	gcTime: 30 * 6e4
}), GL = async (e, t) => await e.ensureQueryData(WL(t)), KL = [
	"pan",
	"expiryDate",
	"csc"
];
function qL() {
	let { merchantId: e, method: t, userId: n, sessionId: r, currency: i, gotoPaymentType: a, selectedPaymentType: o, hasAppliedGotoPaymentType: s, setCashierState: c } = _(hN), l = w(null), u = w(null), { data: d, isLoading: f, isError: p } = bF(WL({
		merchantId: e,
		method: t,
		userId: n,
		sessionId: r,
		currency: i
	})), m = S(() => d?.paymentTypes ?? [], [d?.paymentTypes]), h = S(() => new Map(m.map((e) => {
		let t = e.fields?.filter(({ id: e }) => e && !KL.includes(e)), n = e.fields?.filter(({ id: e }) => e && KL.includes(e));
		return [e, {
			...e,
			fields: t,
			hfFields: n
		}];
	})), [m]), y = d?.currency, b = d?.pciTenantId;
	return v(() => {
		y && c((e) => e.currency === y ? e : {
			...e,
			currency: y
		});
	}, [y, c]), v(() => {
		l.current !== t && (l.current = t, u.current = t);
	}, [t]), v(() => {
		if (!u.current || u.current !== t || m.length === 0) return;
		let e = t;
		if (!m.every((t) => t.method === e)) return;
		if (o) {
			let e = HL(m, o);
			if (e) {
				let t = NL(e);
				c((e) => e.selectedPaymentType === t ? e : {
					...e,
					selectedPaymentType: t
				});
			} else a && o === a && c((e) => e.selectedPaymentType === o ? {
				...e,
				selectedPaymentType: null,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			} : e);
			u.current = null;
			return;
		}
		if (!a) {
			u.current = null;
			return;
		}
		if (s) {
			u.current = null;
			return;
		}
		let n = HL(m, a);
		if (!n) {
			u.current = null;
			return;
		}
		let r = NL(n);
		c((e) => e.selectedPaymentType === r ? e : {
			...e,
			selectedPaymentType: r
		}), u.current = null;
	}, [
		a,
		s,
		t,
		m,
		o,
		c
	]), {
		paymentTypesList: m,
		getPaymentType: g((e) => {
			let t = HL(m, e);
			return t ? h.get(t) ?? null : null;
		}, [h, m]),
		pciTenantId: b,
		isLoading: f,
		isError: p
	};
}
//#endregion
//#region src/utils/redirect.ts
var JL = (e) => typeof e == "string" ? e : void 0, YL = (e, t) => {
	if (e) {
		if (typeof e == "string") return e;
		try {
			return encodeURIComponent(JSON.stringify(e));
		} catch (e) {
			t && console.error("[Cashier] Failed to encode redirect payload", e);
			return;
		}
	}
}, XL = (e) => e === "POST" ? "POST" : "GET", ZL = (e) => typeof e == "string" ? e : "iframe", QL = (e, t) => {
	if (e) try {
		let t = JSON.parse(decodeURIComponent(e));
		return !t || typeof t != "object" || Array.isArray(t) ? void 0 : Object.entries(t).reduce((e, [t, n]) => (n == null || (e[t] = typeof n == "string" ? n : JSON.stringify(n)), e), {});
	} catch (e) {
		t && console.error("[Cashier] Failed to decode redirect payload", e);
		return;
	}
}, $L = (e) => {
	if (!e) return;
	let t = e.toLowerCase();
	if (t === "ongoing") return "ongoing";
	if (t === "done") return "done";
}, eR = new Set(["ongoing"]), tR = new Set(["done"]), nR = (e) => !!e && typeof e == "object" && !Array.isArray(e), rR = (e) => {
	if (typeof e == "string") return e;
	if (nR(e)) return Object.entries(e).reduce((e, [t, n]) => (n == null || (e[t] = typeof n == "string" ? n : JSON.stringify(n)), e), {});
}, iR = (e) => {
	if (e === "POST") return "POST";
	if (e === "GET") return "GET";
}, aR = (e) => {
	if (!nR(e)) return;
	let t;
	if (typeof e.url == "string" && e.url.length > 0 ? t = e.url : typeof e.redirectUrl == "string" && e.redirectUrl.length > 0 && (t = e.redirectUrl), !t) return;
	let n = iR(e.method ?? e.redirectMethod), r = JL(e.type ?? e.redirectType), i;
	typeof e.scriptId == "string" ? i = e.scriptId : typeof e.redirectScriptId == "string" && (i = e.redirectScriptId);
	let a = e.data ?? e.redirectData;
	return {
		url: t,
		method: XL(n),
		data: rR(a),
		type: ZL(r ?? "iframe"),
		scriptId: i
	};
}, oR = (e) => {
	if (!nR(e)) return;
	let t = typeof e.actionUrl == "string" ? e.actionUrl : void 0, n = Array.isArray(e.fields) ? e.fields : void 0, r = n ? n.filter(nR) : void 0;
	if (!(!t || !r)) return {
		actionUrl: t,
		fields: r
	};
}, sR = (e, t) => {
	try {
		let t = JSON.parse(e);
		if (typeof t == "string") {
			let e = $L(t);
			return e ? { status: e } : null;
		}
		if (!nR(t)) return null;
		let n = aR(t.redirect ?? t) ?? void 0, r = oR(t.form), i = $L(typeof t.status == "string" ? t.status : void 0), a = {};
		return i && (a.status = i), n && (a.redirect = n), r && (a.form = r), a;
	} catch (e) {
		t && console.error("[Cashier] Failed to parse payment status stream payload", e);
	}
	return null;
}, cR = (e) => {
	let t = $L(e);
	return t ? eR.has(t) : !1;
}, lR = (e) => {
	let t = $L(e);
	return t ? tR.has(t) : !1;
}, uR = ({ paymentId: e, merchantId: t, userId: n, sessionId: r }) => {
	let i = JF.getConfig().baseUrl, a = JF.buildUrl({
		baseUrl: i,
		url: "/payment/status/{paymentId}",
		path: { paymentId: e },
		query: {
			merchantId: t,
			userId: n,
			sessionId: r,
			stream: !0
		}
	});
	return { url: new URL(a, window.location.origin).toString() };
}, dR = (e) => {
	let { paymentId: t, merchantId: n, userId: r, sessionId: i, onMessage: a, onError: o, onOpen: s, debug: c } = e, { url: l } = uR({
		paymentId: t,
		merchantId: n,
		userId: r,
		sessionId: i
	});
	c && console.log("[Cashier] Connecting to payment status stream", l);
	let u = new EventSource(l, { withCredentials: !1 });
	return u.onopen = () => {
		c && console.log("[Cashier] Connected to payment status stream"), s?.();
	}, u.onmessage = (e) => {
		let t = typeof e.data == "string" ? e.data : "";
		c && console.log("[Cashier] Payment status stream event", t), t.length !== 0 && a(sR(t, c), t);
	}, u.onerror = (e) => {
		c && console.error("[Cashier] Payment status stream error", e), o?.(e);
	}, u;
}, fR = null, pR = null, mR = null, hR = null, gR = 0, _R = 0, vR = !1, yR = !1, bR = /* @__PURE__ */ new Set(), xR = /* @__PURE__ */ new Set(), SR = /* @__PURE__ */ new Set(), CR = (e) => {
	bR.forEach((t) => {
		t(e);
	});
}, wR = (e) => {
	xR.forEach((t) => {
		t(e);
	});
}, TR = (e) => {
	vR = e, SR.forEach((t) => {
		t(e);
	});
}, ER = (e, t) => (bR.add(t), mR && hR === e && t(mR), () => {
	bR.delete(t);
}), DR = (e) => (xR.add(e), () => {
	xR.delete(e);
}), OR = (e) => (SR.add(e), e(vR), () => {
	SR.delete(e);
}), kR = (e) => {
	if (fR) {
		if (yR) {
			let t = e ? ` (${e})` : "";
			console.log("[Cashier] Closing payment status stream", t);
		}
		fR.close(), fR = null, pR = null, mR = null, hR = null, _R = 0, TR(!1);
	}
}, AR = ({ paymentId: e, merchantId: t, userId: n, sessionId: r, debug: i }) => {
	if (!e || !t || !n || !r) return null;
	if (fR && pR === e) return fR;
	kR("restart"), yR = !!i, mR = null, hR = null;
	let a = ++gR;
	return _R = a, fR = dR({
		paymentId: e,
		merchantId: t,
		userId: n,
		sessionId: r,
		debug: yR,
		onMessage: (t) => {
			if (_R !== a) return;
			mR = t, hR = e, CR(t);
			let n = t?.status;
			n && lR(n) && kR("terminal");
		},
		onError: (e) => {
			_R === a && (wR(e), kR("error"));
		}
	}), pR = e, TR(!0), fR;
}, jR = "cashier-provider-window", MR = "cashier-provider-popup-blocked", NR = 500, PR = null, FR = (e) => {
	PR = e;
}, IR = (e) => {
	if (!e) return !1;
	try {
		return !e.closed;
	} catch {
		return !0;
	}
}, LR = (e) => {
	typeof e.focus == "function" && e.focus();
}, RR = ({ ownerWindow: e, url: t, target: n, features: r }) => {
	let i;
	try {
		i = e.open("about:blank", n, r);
	} catch {
		return null;
	}
	if (!IR(i)) return null;
	try {
		i.opener = null;
	} catch {
		try {
			i.close();
		} catch {}
		return null;
	}
	try {
		i.location.href = t;
	} catch {
		try {
			i.close();
		} catch {}
		return null;
	}
	return LR(i), i;
}, zR = ({ ownerWindow: e, popupWindow: t, onClosed: n, pollIntervalMs: r = NR }) => {
	let i = !0, a = null, o = () => {
		i && (i = !1, a !== null && (e.clearInterval(a), a = null), e.removeEventListener("focus", c));
	}, s = () => {
		try {
			return t.closed;
		} catch {
			return !1;
		}
	};
	function c() {
		!i || !s() || (o(), n());
	}
	return a = e.setInterval(c, r), e.addEventListener("focus", c), c(), o;
}, BR = () => (IR(PR) || (PR = null), PR), VR = () => {
	if (PR) try {
		PR.close();
	} finally {
		PR = null;
	}
}, HR = () => !(typeof window > "u" || typeof window.open != "function" || typeof navigator < "u" && navigator.userAgent.includes("jsdom")), UR = ({ paymentId: e, redirectType: t, redirectMethod: n, redirectUrl: r, redirectData: i, redirectScriptId: a }) => r ? [
	e ?? "",
	t ?? "",
	n ?? "",
	r,
	i ?? "",
	a ?? ""
].join("|") : null, WR = () => typeof document > "u" ? !1 : document.visibilityState === "hidden" || typeof document.hasFocus == "function" && !document.hasFocus(), GR = async () => typeof window > "u" ? !1 : WR() ? !0 : await new Promise((e) => {
	let t = !1, n = (n) => {
		t || (t = !0, window.clearTimeout(o), window.removeEventListener("blur", r), window.removeEventListener("pagehide", i), document.removeEventListener("visibilitychange", a), e(n));
	}, r = () => {
		n(!0);
	}, i = () => {
		n(!0);
	}, a = () => {
		document.visibilityState === "hidden" && n(!0);
	}, o = window.setTimeout(() => {
		n(WR());
	}, 500);
	window.addEventListener("blur", r), window.addEventListener("pagehide", i), document.addEventListener("visibilitychange", a), WR() && n(!0);
}), KR = (e) => {
	let { source: t, open: n, onReuse: r, onOpened: i, onBlocked: a, canReuse: o, canOpen: s, setHandle: c, allowManualDetachedOpen: l, onDetachedOpened: u } = e, d = BR, f = c ?? FR, p = d();
	if (p) {
		if (!o || o(p)) return r?.(p), LR(p), Promise.resolve(p);
		VR();
	}
	if (!(s ?? HR)()) return a(t), Promise.resolve(null);
	let m = null;
	try {
		m = n();
	} catch {
		return a(t), Promise.resolve(null);
	}
	return IR(m) ? (f(m), i?.(m), LR(m), Promise.resolve(m)) : l && t === "manual" ? GR().then((e) => e ? (u?.(), null) : (a(t), null)) : (a(t), Promise.resolve(null));
}, qR = () => {}, JR = u({
	payment: void 0,
	paymentId: null,
	status: void 0,
	redirect: void 0,
	paymentStatusMessage: null,
	makePayment: qR,
	clearPaymentState: qR,
	setPaymentTracking: qR,
	isPaymentPending: !1,
	isPaymentFailed: !1,
	isPaymentSuccessful: !1
}), YR = ({ children: e }) => {
	let { merchantId: t, userId: n, sessionId: r, debug: i, onPaymentCreated: a } = _(hN), [o, s] = T(), [c, l] = T(null), [u, d] = T(null), [f, p] = T(null), [m, h] = T(!1), y = w(null);
	v(() => {
		let e = OR(h);
		return () => {
			e(), kR("provider-unmount");
		};
	}, []);
	let b = g((e, t) => {
		l(e), s((n) => {
			let r = $L(t?.status ?? t?.paymentStatus);
			return e ? !t && n?.paymentId === e ? n : {
				paymentId: e,
				...t,
				status: r ?? t?.status
			} : t ? {
				...t,
				status: r ?? t.status
			} : void 0;
		}), p(null);
	}, []);
	v(() => {
		if (!c || !t || !n || !r) return;
		let e = ER(c, (e) => {
			s((t) => {
				let n = t?.paymentId === c ? t : { paymentId: c }, r = $L(e?.status ?? n.status ?? n.paymentStatus), i = e?.redirect, a = e?.form;
				return {
					...n,
					status: r,
					paymentStatus: r,
					redirect: i,
					form: a
				};
			});
		}), a = DR(() => {
			p("error.payment_status_unavailable");
		});
		return AR({
			paymentId: c,
			merchantId: t,
			userId: n,
			sessionId: r,
			debug: i
		}), () => {
			e(), a();
		};
	}, [
		i,
		t,
		c,
		r,
		n
	]);
	let x = (e) => {
		if (e && typeof e == "object" && "error" in e) {
			let t = e.error;
			if (typeof t == "string") return { error: t };
		}
		return e instanceof Error && e.message ? { error: e.message } : { error: "error.payment_processing_failed" };
	}, C = g((e) => {
		let t = e?.closeProviderWindow ?? !0, n = e?.resetCreateState ?? !0;
		kR("reset"), t && VR(), s(void 0), l(null), d(null), p(null), n && y.current?.();
	}, [
		s,
		d,
		l,
		p
	]), { mutate: E, isPending: D, isError: k, reset: ee } = xF({
		mutationFn: async ({ body: e, path: t }) => {
			try {
				let n = await nI({
					body: e,
					path: t
				}), { data: r } = n, i = n.error;
				if (i) {
					let e = i instanceof Error ? i.message : JSON.stringify(i);
					throw Error(e);
				}
				if (!r?.paymentId) throw Error("error.payment_id_missing");
				return r;
			} catch (e) {
				let t = x(e);
				throw Error(t.error);
			}
		},
		onMutate: () => {
			C({ resetCreateState: !1 });
		},
		onSuccess: (e) => {
			let t = $L(e.paymentStatus) ?? "ongoing", n = {
				...e,
				status: t,
				paymentStatus: t
			};
			s(n), l(e.paymentId ?? null), d(null), p(null), a && a(e), e.paymentId && !lR(t) && b(e.paymentId, n);
		},
		onError: (e) => {
			let t = x(e);
			d(t.error), a && a(t);
		}
	});
	y.current = ee;
	let A = o?.status ?? $L(o?.paymentStatus), j = A ? A.toLowerCase() : void 0, M = j === "done", N = k || !!u || !!f, P = !M && !N && (D || cR(j) || m), F = f ?? u ?? null, I = S(() => ({
		payment: o,
		paymentId: c,
		status: A,
		redirect: o?.redirect,
		paymentStatusMessage: F,
		makePayment: E,
		clearPaymentState: C,
		setPaymentTracking: b,
		isPaymentPending: P,
		isPaymentFailed: N,
		isPaymentSuccessful: M
	}), [
		A,
		N,
		P,
		M,
		E,
		o,
		c,
		F,
		C,
		b
	]);
	return /* @__PURE__ */ O(JR.Provider, {
		value: I,
		children: e
	});
}, XR = () => _(JR), ZR = null, QR = (e) => {
	ZR = e;
}, $R = () => ZR, ez = () => {
	ZR = null;
}, tz = null, nz = (e) => {
	tz = e;
}, rz = () => {
	tz = null;
}, iz = (e) => e !== null && tz?.paymentId === e && tz.reachedSummaryViaProvider, az = () => {
	let e = K(), t = aF(), { clearPaymentState: n, payment: r, status: i } = XR(), { merchantId: a, method: o, userId: s, sessionId: c, currency: l, setCashierState: u, onPaymentFinished: d } = _(hN);
	return g((f) => {
		let p = f?.paymentId ?? void 0, m = f?.merchantId ?? void 0, h = f?.replace ?? !1, g = f?.reachedSummaryViaProvider ?? !1, _ = !!(p && m && lR(i)), v = r;
		if (n(), a && s && c && t.invalidateQueries({ queryKey: UL({
			merchantId: a,
			method: o,
			userId: s,
			sessionId: c,
			currency: l
		}) }), !p || !m) {
			rz(), u((e) => !e.selectedBonusCode && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
				...e,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
			return;
		}
		QR({
			paymentId: p,
			merchantId: m
		}), nz({
			paymentId: p,
			reachedSummaryViaProvider: g
		}), u((e) => !e.resetFlowOnBack && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
			...e,
			resetFlowOnBack: !1,
			paymentFormDraft: null,
			comboViewFormDraft: null
		}), _ && d && d(v ?? {
			paymentId: p,
			paymentStatus: "done",
			status: "done"
		}), e({
			to: "/summary/$id",
			params: { id: p },
			search: { merchantId: m },
			...h ? { replace: h } : {}
		});
	}, [
		n,
		l,
		a,
		o,
		e,
		d,
		r,
		t,
		c,
		u,
		i,
		s
	]);
}, oz = (e) => {
	let { payment: t, paymentStatusMessage: n, makePayment: r, isPaymentFailed: i, isPaymentPending: a, isPaymentSuccessful: o } = XR(), s = az();
	return {
		makePayment: g((t) => {
			r({
				body: t,
				path: e
			});
		}, [r, e]),
		finishPayment: s,
		paymentResponse: t,
		paymentStatusMessage: n,
		isPaymentSuccessful: o,
		isPaymentFailed: i,
		isPaymentPending: a
	};
}, sz = ({ paymentResponse: e, merchantId: t, debug: n }) => {
	let r = K(), i = az(), a = e?.paymentId, o = e?.status ?? e?.paymentStatus, s = e?.redirect, c = e?.form, l = s?.url ?? null, u = s?.method, d = s?.data, f = s?.type, p = s?.scriptId, m = !!c?.actionUrl, h = S(() => YL(d, n), [n, d]), g = !!(l || m);
	v(() => {
		!a || !o || g || lR(o) && i({
			paymentId: a,
			merchantId: t
		});
	}, [
		i,
		t,
		r,
		a,
		o,
		g
	]), v(() => {
		if (!l && !m) return;
		let e = {};
		a && (e.paymentId = a), l && (e.redirectUrl = l, u && (e.redirectMethod = u), f && (e.redirectType = ZL(f)), p && (e.redirectScriptId = p), h && (e.redirectData = h)), r({
			to: "/provider",
			search: e
		});
	}, [
		h,
		m,
		r,
		a,
		u,
		p,
		f,
		l
	]);
}, cz = u({
	currencyFormatter: null,
	formatCurrencyValue: () => "",
	formatDisplayValue: () => ""
});
function lz({ children: e }) {
	let { currency: t, locale: n, currencyFormatOptions: r, dateTimeFormatOptions: i } = _(hN), { currencyFormatter: a, dateTimeFormatter: o } = bL(t, n, r, i), s = S(() => ({
		currencyFormatter: a,
		formatCurrencyValue: (e) => xL(e, a),
		formatDisplayValue: (e) => CL(e, a, o, n, i)
	}), [
		a,
		i,
		o,
		n
	]);
	return /* @__PURE__ */ O(cz.Provider, {
		value: s,
		children: e
	});
}
var uz = () => _(cz), dz = "This field is required", fz = "Invalid value", pz = (e, t, n) => typeof e == "string" ? n(e.trim().length > 0 ? e : t) : t, mz = (e, t) => {
	if (!e || e.length === 0) return [];
	let n = [];
	for (let r of e) {
		let e = r.pattern;
		if (!(typeof e != "string" || e.length === 0)) try {
			n.push({
				regex: new RegExp(e),
				message: pz(r.invalidMessage, fz, t)
			});
		} catch (t) {
			if (process.env.NODE_ENV !== "production") {
				let n = t instanceof Error ? t.message : String(t);
				console.warn("[Cashier] Invalid validation pattern \"%s\": %s", e, n);
			}
		}
	}
	return n;
}, hz = (e, t, n) => {
	if (!t) return;
	let r = !!t.required?.value, i = !!t.iban?.value, a = pz(t.required?.invalidMessage, dz, n), o = pz(t.iban?.invalidMessage, fz, n), s = mz(t.rules, n);
	if (!r && !i && s.length === 0) return;
	if (e == null) return r ? a : void 0;
	let c = null;
	if (typeof e == "string" ? c = e : (typeof e == "number" || typeof e == "boolean") && (c = String(e)), c === null) return r ? a : void 0;
	let l = c.trim();
	if (l.length === 0) return r ? a : void 0;
	let u = i ? $c(l) : l;
	for (let e of s) if (!e.regex.test(u)) return e.message;
	if (i && !rl(l)) return o;
}, gz = (e) => e === void 0 ? "" : typeof e == "boolean" ? e ? "true" : "false" : e, _z = (e) => e === !0 || e === "true", vz = (e) => Object.entries(e).reduce((e, [t, n]) => (e[t] = gz(n), e), {}), yz = (e, t) => (e ?? []).reduce((e, n) => {
	let r = n.id;
	return r && (e[r] = t[r] ?? n.defaultValue ?? ""), e;
}, {}), bz = (e) => typeof e == "string" ? qc(e) !== null : e === !0, xz = (e) => e ? typeof e == "string" ? qc(e) !== null : Array.isArray(e) ? e.some(xz) : typeof e == "object" ? Object.values(e).some(xz) : !1 : !1, Sz = (e, t) => (e ?? []).some((e) => {
	let n = e.id;
	return !n || !e.validation?.required?.value ? !1 : !bz(t[n]);
}), Cz = (e, t, n) => (e ?? []).reduce((e, r) => {
	let i = r.id;
	if (!i) return e;
	let a = hz(t[i], r.validation, n);
	return a && (e[i] = a), e;
}, {}), wz = (e, t) => {
	if (!e) return e;
	let n = { ...e };
	return e.required && (n.required = {
		...e.required,
		invalidMessage: t(e.required.invalidMessage)
	}), e.rules && (n.rules = e.rules.map((e) => ({
		...e,
		invalidMessage: t(e.invalidMessage)
	}))), e.luhn && (n.luhn = {
		...e.luhn,
		invalidMessage: t(e.luhn.invalidMessage)
	}), e.iban && (n.iban = {
		...e.iban,
		invalidMessage: t(e.iban.invalidMessage)
	}), n;
}, Tz = "pc-enter-rise", Ez = "pc-enter-rise-item", Dz = "pc-enter-panel", Oz = "pc-enter-panel-item", kz = "pc-enter-sweep", Az = "pc-enter-sweep-item", jz = 70, Mz = 45, Nz = 100, Pz = 360, Fz = 3, Iz = 36, Lz = 12, Rz = 80, zz = (e) => Number.isFinite(e) ? Math.max(0, e) : 0, Bz = (e, t) => t <= 1 ? 0 : e / (t - 1), Vz = (e, t) => {
	switch (t) {
		case "linear": return e;
		case "ease-out": return 1 - (1 - e) ** 1.35;
		default: return e;
	}
}, Hz = ({ index: e, total: t, direction: n = "forward", baseDelayMs: r = jz, staggerMs: i = Mz, maxAdditionalDelayMs: a, distribution: o = "step" }) => {
	let s = Math.trunc(zz(e)), c = Math.max(s + 1, Math.trunc(zz(t ?? s + 1))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = (() => {
		if (a !== void 0) {
			let e = Vz(Bz(l, c), o);
			return Math.round(r + e * a);
		}
		return Math.round(r + l * i);
	})();
	return { animationDelay: `${String(u)}ms` };
}, Uz = (e, t, n = "forward", { baseDelayMs: r = Nz, maxAdditionalDelayMs: i = Pz, distribution: a = "linear", staggerMode: o = "distributed" } = {}) => {
	if (o === "distributed") return Hz({
		index: e,
		total: t,
		direction: n,
		baseDelayMs: r,
		maxAdditionalDelayMs: i,
		distribution: a
	});
	let s = Math.trunc(zz(e)), c = Math.max(s + 1, Math.trunc(zz(t))), l = n === "reverse" ? Math.max(0, c - s - 1) : s, u = Math.min(c, Fz), d = Math.max(0, (u - 1) * Iz), f = Math.min(zz(i), d), p = u > 1 ? f / (u - 1) : 0, m = (() => {
		if (l < u) return Math.round(r + l * p);
		let e = Math.max(zz(i) - f, 0);
		if (e <= 0 || c - u <= 0) return Math.round(r + f);
		let t = Math.min(Lz, e);
		return Math.round(r + f + t);
	})();
	return { animationDelay: `${String(m)}ms` };
}, Wz = ({ baseDelayMs: e = Nz } = {}) => ({ animationDelay: `${String(Math.max(0, Math.round(e - Rz)))}ms` }), Gz = "amount", Kz = (e) => e ? !!(e.required?.value || e.iban?.value || e.luhn?.value || e.rules?.some((e) => !!e.pattern)) : !1, qz = (e, t, n) => (t ?? []).reduce((t, r, i) => {
	let a = r.value, o = n(r.label || a);
	if (!o && !a) return t;
	let s = `${e}_${String(i)}`;
	return t.push(/* @__PURE__ */ O("option", {
		value: a,
		children: o || a
	}, s)), t;
}, []), Jz = ({ canSurfaceInlineMessage: e, isAmountField: t, isCheckboxField: n, isLastRenderableField: r, reserveCheckboxMessageSpace: i }) => t || e ? !0 : !n || !i ? !1 : !r, Yz = ({ fields: e, translateKey: t, disabled: n = !1, amountError: r, amountFieldId: i = Gz, renderBelowFieldContent: a, belowFieldContentInheritsTheme: o = !0, renderBeforeField: s, renderAfterField: c, animateRows: l = !1, animationStartIndex: u = 0, animationTotalCount: d, animationDirection: f = "forward", reserveCheckboxMessageSpace: p = !0 }) => {
	let m = wN(), { setFieldValue: h } = Mv(), g = yN(), _ = e.reduce((e, t, n) => t.id && !t.hidden ? n : e, -1);
	return /* @__PURE__ */ O(D, { children: e.map((e, v) => {
		let y = e.id;
		if (!y || e.hidden) return null;
		let b = g(y, "field"), x = m.id("payment-field", { slug: b }), S = t(e.label ?? y), C = wz(e.validation, t), w = e.type, T = w === "checkbox", E = w === "select", D = y === i, ee = Kz(e.validation), A = y === "iban" || !!C?.iban?.value, j = !T && A ? tl : void 0, M = Tf;
		T ? M = Wf : E && (M = Ud);
		let N = (e) => {
			if (!D) return;
			let t = e.currentTarget.value;
			h(y, t, !1);
		}, P = E ? qz(y, e.options, t) : null, F = e.placeholder ? t(e.placeholder) : void 0, I = D ? r : void 0, L = Jz({
			canSurfaceInlineMessage: ee,
			isAmountField: D,
			isCheckboxField: T,
			isLastRenderableField: v === _,
			reserveCheckboxMessageSpace: p
		}), R = v === _ && !L, z;
		R && (z = T ? "pb-3" : "pb-1.5");
		let B = s?.(y), V = a?.(y), H;
		return H = D ? /* @__PURE__ */ O(iy, {
			label: S,
			id: x,
			name: y,
			validation: C,
			error: I,
			disabled: n,
			component: M,
			onChange: N,
			belowFieldContent: V,
			belowFieldContentInheritsTheme: o,
			formattingAdapter: j,
			placeholder: F,
			reserveMessageSpace: L,
			type: T || E ? void 0 : "text",
			inputMode: "numeric",
			pattern: "[0-9]*",
			children: E ? P : void 0
		}) : T ? /* @__PURE__ */ O(iy, {
			label: S,
			id: x,
			name: y,
			validation: C,
			error: I,
			disabled: n,
			component: M,
			belowFieldContent: V,
			belowFieldContentInheritsTheme: o,
			placeholder: F,
			reserveMessageSpace: L,
			type: void 0
		}) : /* @__PURE__ */ O(iy, {
			label: S,
			id: x,
			name: y,
			validation: C,
			error: I,
			disabled: n,
			component: M,
			belowFieldContent: V,
			belowFieldContentInheritsTheme: o,
			formattingAdapter: j,
			placeholder: F,
			reserveMessageSpace: L,
			type: E ? void 0 : w ?? "text",
			children: E ? P : void 0
		}), /* @__PURE__ */ k("div", {
			"data-payment-field-row": y,
			id: m.id("payment-field-row", { slug: b }),
			className: [
				m.className("payment-field-row", { slug: b }),
				"flex flex-col w-full",
				z,
				l ? Ez : void 0
			].filter(Boolean).join(" "),
			style: l ? Hz({
				index: u + v,
				total: d,
				direction: f
			}) : void 0,
			children: [
				B,
				H,
				c?.(y)
			]
		}, y);
	}) });
}, Xz = "pan", Zz = "expiryDate", Qz = "csc", $z = (e) => e === Qz || e === Zz, eB = (e) => typeof e.id == "string" && e.id.trim().length > 0, tB = (e) => {
	let t = (e.type ?? "text").trim().toLowerCase(), n = (e.options ?? []).length > 0;
	return t === "switcher" ? "switcher" : t === "checkbox" ? "toggle" : t === "select" || n ? "select" : "input";
}, nB = (e, t, n) => e === Xz || !$z(e) ? "col-span-2" : t === n ? "col-span-1" : "col-span-2", rB = (e, t, n) => e === Xz || !$z(e) ? 2 : t === n ? 1 : 2, iB = (e) => {
	let t = (e ?? []).filter(eB);
	if (t.length === 0) return 0;
	let n = t.some((e) => e.id === Qz), r = t.some((e) => e.id === Zz), i = 0, a = 0;
	for (let e of t) {
		let t = rB(e.id, n, r);
		a + t > 2 && (i += 1, a = 0), a += t, a === 2 && (i += 1, a = 0);
	}
	return a > 0 && (i += 1), i;
}, aB = ["relative z-10 grid grid-cols-2 items-start gap-2 p-1"].join(" "), oB = ["box-border flex h-full w-full flex-col"].join(" "), sB = () => void 0, cB = (e) => e.label?.trim() || e.id, lB = (e) => (e.options ?? []).map((t, n) => ({
	value: t.value || `${e.id}-${String(n)}`,
	label: t.label || t.value || `Option ${String(n + 1)}`
})), uB = (e, t) => {
	let n = tB(e);
	if (n === "select") return /* @__PURE__ */ O(Ud, {
		skeleton: !0,
		label: t,
		children: lB(e).map((e) => /* @__PURE__ */ O("option", {
			value: e.value,
			children: e.label
		}, e.value))
	});
	if (n === "switcher") {
		let n = lB(e);
		return /* @__PURE__ */ O(Bk, {
			skeleton: !0,
			ariaLabel: t,
			value: n[0]?.value ?? e.id,
			onChange: sB,
			options: n.length > 0 ? n : [{
				value: e.id,
				label: t
			}]
		});
	}
	return n === "toggle" ? /* @__PURE__ */ O(Wf, {
		skeleton: !0,
		label: t
	}) : /* @__PURE__ */ O(Tf, {
		skeleton: !0,
		label: t,
		as: e.type === "textarea" ? "textarea" : void 0
	});
};
function dB({ fields: e, className: t }) {
	let n = e.filter(eB), r = n.some((e) => e.id === "csc"), i = n.some((e) => e.id === "expiryDate");
	return /* @__PURE__ */ O("div", {
		"aria-hidden": "true",
		"data-slot": "hosted-fields-layout-skeleton",
		className: Y(oB, t),
		children: /* @__PURE__ */ O("div", {
			className: aB,
			children: n.map((e) => {
				let t = cB(e), n = nB(e.id, r, i);
				return /* @__PURE__ */ O("div", {
					"data-slot": "hosted-fields-layout-skeleton-item",
					"data-field-id": e.id,
					className: Y("flex w-full flex-col whitespace-nowrap", n),
					children: uB(e, t)
				}, e.id);
			})
		})
	});
}
//#endregion
//#region src/components/SuggestedAmountButtons.tsx
function fB({ suggestions: e, activeSuggestion: t, onSelect: n, formatLabel: r, amountLimits: i, size: a = "lg", disabled: o = !1, className: s, style: c }) {
	let l = wN(), u = g((e) => {
		e.preventDefault();
	}, []), d = r ?? ((e) => e), f = yN();
	return e.length === 0 ? null : /* @__PURE__ */ O("div", {
		id: l.id("amount-suggestions"),
		style: c,
		className: Y(l.className("amount-suggestions"), "grid grid-cols-3 gap-1 @sm:gap-2 @md:gap-3 text-center", s),
		children: e.map((e) => {
			let r = f(e), s = e === t, c = o || (i ? _L(e, i).isOutOfRange : !1);
			return /* @__PURE__ */ O(mn, {
				id: l.id("amount-suggestion", { slug: r }),
				variant: s ? "secondary" : "neutral",
				size: a,
				disabled: c,
				onMouseDown: u,
				onClick: () => {
					n(e);
				},
				label: d(e)
			}, `cashier-amount-suggestion-${r}`);
		})
	});
}
//#endregion
//#region src/components/PaymentNotificationCard.tsx
var pB = (e) => ({
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
})[e];
function mB({ notification: e, translateKey: t, tone: n = "status" }) {
	let r = qc(t(e.key));
	return r ? /* @__PURE__ */ O(yn, {
		"data-theme": n === "status" ? pB(e.type) : void 0,
		variant: "surface",
		size: "default",
		className: "flex w-full text-[var(--pc-color-text)]",
		children: /* @__PURE__ */ O(lk, { content: r })
	}) : null;
}
//#endregion
//#region src/lib/hostedFields.ts
var hB = /* @__PURE__ */ function(e) {
	return e.INIT = "INIT", e.TOKENIZE = "TOKENIZE", e.LAYOUT = "HF_LAYOUT", e.FORM_DATA = "HF_FORM_DATA", e.FORM_STATE = "HF_FORM_STATE", e.CARD_BRAND = "HF_CARD_BRAND", e.READY = "HF_READY", e.ERROR = "HF_ERROR", e.RESET = "RESET", e;
}({}), gB = "hosted_fields.title", _B = Object.freeze(["allow-scripts", "allow-same-origin"]), vB = "error.hosted_fields_error_received", yB = 5e3, bB = Object.freeze({
	border: "0",
	width: "100%",
	height: "100%",
	display: "block",
	backgroundColor: "transparent",
	colorScheme: "normal"
}), xB = "hf-merchant-fonts", SB = "--hf-font-family", CB = [
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Helvetica Neue'",
	"sans-serif"
].join(", "), wB = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !(typeof t.type != "string" || !Object.values(hB).includes(t.type));
}, TB = (e) => {
	let t = e.document ?? (typeof document < "u" ? document : void 0);
	if (!t) throw Error("createHostedFieldsIframe requires a Document instance.");
	let n = t.createElement("iframe");
	n.title = qc(e.title) ?? "hosted_fields.title", e.ariaLabel && n.setAttribute("aria-label", e.ariaLabel), n.name = e.name ?? "cashier-hosted-fields", e.className && (n.className = e.className);
	let r = _B.join(" ");
	r && n.setAttribute("sandbox", r);
	let i = qc(e.allow);
	i && n.setAttribute("allow", i), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), n.setAttribute("src", e.src);
	let a = {
		...bB,
		...e.styles ?? {}
	};
	if (Object.assign(n.style, a), n.setAttribute("frameborder", "0"), e.attributes) for (let [t, r] of Object.entries(e.attributes)) r != null && n.setAttribute(t, String(r));
	return n;
}, EB = (e, t, n) => {
	let r = qc(n ?? e.getAttribute("src") ?? e.src) ?? "";
	if (r.length === 0) throw Error("Hosted fields iframe requires a target origin. Set controller.targetOrigin or iframe src.");
	if (r === "*") throw Error("Hosted fields target origin cannot be a wildcard (*).");
	let i;
	try {
		i = new URL(r, t.location.href);
	} catch {
		throw Error(`Invalid hosted fields target origin: ${r}`);
	}
	if (!i.protocol || i.origin === "null") throw Error(`Hosted fields target origin must resolve to a valid origin. Received: ${r}`);
	return i.origin;
}, DB = (e) => {
	let { container: t, iframe: n } = e, r = n.document ?? t.ownerDocument, i = TB({
		...n,
		document: r
	});
	t.firstChild && t.replaceChildren(), t.appendChild(i);
	let a = r.defaultView ?? void 0, o = OB({
		iframe: i,
		targetOrigin: e.controller?.targetOrigin,
		win: e.controller?.win ?? a
	}), s = !1;
	return {
		iframe: i,
		controller: o,
		destroy: () => {
			s || (s = !0, o.destroy(), i.parentNode === t && t.removeChild(i));
		}
	};
}, OB = (e) => {
	let { iframe: t } = e, n = e.win ?? (typeof window < "u" ? window : void 0);
	if (!n) throw Error("Hosted fields controller requires a Window instance.");
	let r = EB(t, n, e.targetOrigin), i = {}, a = !1, o = null, s = null, c = null, l = null, u = (e) => {
		l &&= (n.clearTimeout(l.timeoutId), e && l.reject(e), null);
	}, d = (e) => {
		let n = t.contentWindow;
		n && n.postMessage(e, r);
	}, f = () => {
		if (!a || !c) return;
		let { fields: e, debugMode: t, fonts: n, uiTheme: r, autoFocusNextField: i, pciTenantId: o } = c;
		d({
			type: hB.INIT,
			debugMode: !!t,
			fields: e ?? void 0,
			autoFocusNextField: i,
			fonts: n ?? void 0,
			theme: r ?? void 0,
			tenantId: o
		});
	}, p = () => {
		a || (a = !0, i.onReady?.(), f());
	}, m = (e) => {
		if (!l) return;
		if (!e) {
			u(/* @__PURE__ */ Error("No form data received from hosted fields iframe."));
			return;
		}
		let { resolve: t } = l;
		u(), t(e);
	}, h = (e) => {
		if (!l) return;
		let t = qc(e.message) ?? vB;
		u(Error(t));
	}, g = () => {
		try {
			return t.contentDocument ?? null;
		} catch {
			return null;
		}
	}, _ = (e) => {
		let t = g();
		t && zB(e.fonts, { document: t }), i.onInit?.(e.fonts, e);
	}, v = (e) => {
		if (e.source !== t.contentWindow || e.origin !== r || !wB(e.data)) return;
		let n = e.data;
		n.type === hB.INIT && _(n), n.type === hB.READY && p(), n.type === hB.LAYOUT && n.layout && (o = n.layout, i.onLayout?.(n.layout, n)), n.type === hB.FORM_DATA && m(n.formData), n.type === hB.FORM_STATE && (s = n.formState ?? null), n.type === hB.ERROR && h(n), i.onMessage?.(n);
	};
	return n.addEventListener("message", v), {
		configure: (e) => {
			c = e ? {
				debugMode: e.debugMode,
				fields: e.fields ?? null,
				fonts: e.fonts ?? null,
				uiTheme: e.uiTheme ?? null,
				pciTenantId: e.pciTenantId,
				autoFocusNextField: e.autoFocusNextField
			} : null, f();
		},
		tokenize: (e) => {
			if (!a) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe is not ready."));
			if (l) return Promise.reject(/* @__PURE__ */ Error("Hosted fields tokenization already pending."));
			if (!t.contentWindow) return Promise.reject(/* @__PURE__ */ Error("Hosted fields iframe window unavailable."));
			let r = e?.timeoutMs ?? yB;
			return new Promise((t, i) => {
				l = {
					resolve: t,
					reject: i,
					timeoutId: n.setTimeout(() => {
						l = null, i(/* @__PURE__ */ Error("No response from hosted fields iframe."));
					}, r)
				}, d({
					type: hB.TOKENIZE,
					saveAccount: e?.saveAccount
				});
			});
		},
		destroy: () => {
			u(/* @__PURE__ */ Error("Hosted fields controller destroyed before response.")), n.removeEventListener("message", v);
		},
		setCallbacks: (e) => {
			i = e ?? {};
		},
		isReady: () => a,
		getLastLayout: () => o,
		getLastFormState: () => s,
		reset: () => {
			s = null, d({ type: hB.RESET });
		}
	};
}, kB = new Set([
	"woff2",
	"woff",
	"truetype",
	"opentype"
]), AB = new Set([
	"auto",
	"block",
	"swap",
	"fallback",
	"optional"
]), jB = (e) => {
	let t = e.split(Rc)[0]?.toLowerCase() ?? "";
	if (t.endsWith(".woff2")) return "woff2";
	if (t.endsWith(".woff")) return "woff";
	if (t.endsWith(".ttf") || t.endsWith(".ttc")) return "truetype";
	if (t.endsWith(".otf")) return "opentype";
	if (t.startsWith("data:font/woff2")) return "woff2";
	if (t.startsWith("data:font/woff")) return "woff";
	if (t.startsWith("data:font/ttf") || t.startsWith("data:font/truetype")) return "truetype";
	if (t.startsWith("data:font/otf") || t.startsWith("data:font/opentype")) return "opentype";
}, MB = (e) => {
	if (!e) return null;
	let t = qc(e);
	return t && (zc.test(t) || Bc.test(t)) ? t : null;
}, NB = (e) => {
	if (e) return kB.has(e) ? e : void 0;
}, PB = (e) => e && AB.has(e) ? e : "swap", FB = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let e = qc(n.family) ?? "";
		if (!e) continue;
		let r = [];
		for (let e of n.sources) {
			let t = MB(e.url);
			if (!t) continue;
			let n = NB(e.format) ?? jB(t);
			r.push({
				url: t,
				format: n,
				weight: e.weight,
				style: e.style === "italic" ? "italic" : "normal",
				display: PB(e.display)
			});
		}
		r.length !== 0 && t.push({
			family: e,
			sources: r
		});
	}
	return t;
}, IB = (e) => {
	if (e.length === 0) return "";
	let t = [];
	for (let n of e) {
		let e = /* @__PURE__ */ new Map();
		for (let t of n.sources) {
			let n = t.weight ?? "normal", r = t.style, i = t.display, a = `${String(n)}__${r}__${i}`, o = e.get(a);
			o ? o.push(t) : e.set(a, [t]);
		}
		for (let [r, i] of e.entries()) {
			let [e, a, o] = r.split("__"), s = i.map(({ url: e, format: t }) => {
				let n = t ? ` format('${t}')` : "";
				return `url(${JSON.stringify(e)})${n}`;
			}).join(", ");
			t.push([
				"@font-face {",
				`  font-family: ${JSON.stringify(n.family)};`,
				`  font-style: ${a};`,
				`  font-weight: ${e};`,
				`  font-display: ${o};`,
				`  src: ${s};`,
				"}"
			].join("\n"));
		}
	}
	return t.join("\n");
}, LB = (e) => {
	let t = e.getElementById(xB);
	t?.parentNode && t.parentNode.removeChild(t);
}, RB = (e, t) => {
	let n = e.documentElement;
	if (t.length === 0) {
		n.style.setProperty(SB, CB);
		return;
	}
	let r = [Array.from(new Set(t.map((e) => e.family))).map((e) => JSON.stringify(e)).join(", "), CB].join(", ");
	n.style.setProperty(SB, r);
}, zB = (e, t) => {
	let n = null;
	if (t?.document) n = t.document;
	else {
		let e = globalThis.document;
		e && (n = e);
	}
	if (!n) return;
	LB(n);
	let r = FB(e);
	if (RB(n, r), r.length === 0) return;
	let i = n.getElementsByTagName("head").item(0);
	if (!i) return;
	let a = IB(r);
	if (!a) return;
	let o = n.createElement("style");
	o.id = xB, o.append(n.createTextNode(a)), i.appendChild(o);
}, BB = (e) => {
	if (!e) return {};
	let t = {};
	for (let [n, r] of Object.entries(e)) {
		if (!n.startsWith("--pc-")) continue;
		if (typeof r == "number") {
			t[n] = r;
			continue;
		}
		if (typeof r != "string") continue;
		let e = r.trim();
		e && (t[n] = e);
	}
	return t;
}, VB = (e) => BB(e?.()), HB = new Set([
	"1",
	"4",
	"8",
	"15",
	"16",
	"24",
	"32",
	"48"
]), UB = [
	{
		code: "04",
		width: 600,
		height: 400
	},
	{
		code: "03",
		width: 500,
		height: 600
	},
	{
		code: "02",
		width: 390,
		height: 400
	},
	{
		code: "01",
		width: 250,
		height: 400
	}
], WB = (e) => {
	let t = e === void 0 ? void 0 : String(e);
	return t && HB.has(t) ? t : void 0;
}, GB = (e) => {
	if (!e) return [];
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = r.trim();
		!e || n.has(e) || (n.add(e), t.push(e));
	}
	return t;
}, KB = () => {
	if (typeof navigator > "u") return;
	let { language: e } = navigator;
	return e?.trim() || GB(Array.isArray(navigator.languages) ? navigator.languages : [])[0];
}, qB = () => {
	if (typeof navigator > "u") return;
	let e = GB(Array.isArray(navigator.languages) ? navigator.languages : []);
	if (e.length > 0) return e;
	let { language: t } = navigator, n = t?.trim();
	return n ? [n] : void 0;
}, JB = (e) => typeof e == "number" && Number.isFinite(e) ? String(Math.trunc(e)) : void 0, YB = (e, t) => UB.find(({ width: n, height: r }) => e >= n && t >= r)?.code ?? "05", XB = () => {
	if (typeof window > "u" || typeof navigator > "u") return;
	let { screen: e, innerWidth: t, innerHeight: n } = window, r = t || e.width || 0, i = n || e.height || 0, a = WB(e.colorDepth), o = JB(e.height), s = JB(e.width), c = qB(), l = KB(), u = String((/* @__PURE__ */ new Date()).getTimezoneOffset()), d = {
		browserJavascriptEnabled: !0,
		challengeWindowSize: YB(r, i)
	};
	a && (d.browserColorDepth = a), c?.length && (d.browserAcceptLanguage = c), d.browserJavaEnabled = !1, l && (d.browserLanguage = l), o && (d.browserScreenHeight = o), s && (d.browserScreenWidth = s), u && (d.browserTZ = u);
	let f = navigator.userAgent || void 0;
	return f && (d.browserUserAgent = f), d;
}, ZB = "/logos/payment-types/", QB = "/assets/payment-type-logos/", $B = (e) => e.replace(/\/+$/, ""), eV = (e, t, n) => {
	let r = t?.trim();
	if (r) try {
		let t = new URL(r);
		return !t.pathname.endsWith(QB) && !t.pathname.endsWith(ZB) ? void 0 : (t.pathname = `${ZB}${n === "dark" ? `${e}-dark.svg` : `${e}.svg`}`, t.search = "", t.hash = "", t.toString());
	} catch {
		return;
	}
}, tV = (e, t) => {
	if (!e) return;
	let n = t?.trim(), r = n ? {
		default: eV(e, n, "default") ?? `${$B(n)}/${e}.svg`,
		dark: eV(e, n, "dark") ?? `${$B(n)}/${e}-dark.svg`
	} : void 0;
	return {
		brand: e,
		theme: fk(e),
		logo: r
	};
}, nV = ({ renderMode: e, hideAmountField: t = !1, lockAmount: n = !1, fields: r }) => e !== "form" || t || n ? !1 : (r ?? []).some((e) => e.id === "amount"), rV = (e) => e?.orientation === "top", iV = 120, aV = (e) => e ? !!(e.isComplete ?? (e.isValid && e.dirty)) : !1, oV = (e, t) => {
	if (!(e?.toLowerCase() !== "card" || t?.toLowerCase() !== "payin")) return XB();
}, sV = (e, t) => {
	if (e) try {
		return JSON.parse(e);
	} catch (e) {
		t && console.error("[Cashier] Failed to parse override payload", e);
		return;
	}
}, cV = (e) => {
	let t = e?.ownerDocument.defaultView;
	if (!e || !t) return;
	let n = t.getComputedStyle(e), r = {};
	for (let e = 0; e < n.length; e += 1) {
		let t = n.item(e);
		if (!t.startsWith("--pc-")) continue;
		let i = qc(n.getPropertyValue(t));
		i && (r[t] = i);
	}
	return r;
}, lV = async (e) => e.current ? !xz(await e.current.validateForm()) : !0, uV = (e, t) => t.reduce((t, n) => {
	let r = n.id;
	return !r || !Object.prototype.hasOwnProperty.call(e, r) || (t[r] = e[r]), t;
}, {}), dV = async (e, t, n) => {
	if (!n) return e;
	let r = await t(_z(e.saveAccount));
	return {
		...e,
		...r
	};
}, fV = async (e, t, n) => {
	let { amount: r, merchantRequestId: i, ...a } = e, o = { ...await dV(a, t, n) };
	return Object.prototype.hasOwnProperty.call(e, "amount") && (o.amount = r), Object.prototype.hasOwnProperty.call(e, "merchantRequestId") && (o.merchantRequestId = i), o;
}, pV = (e) => {
	let { values: t, merchantId: n, userId: r, sessionId: i, accountId: a, currency: o, service: s, bonusCode: c, locales: l, extra: u, method: d, type: f, debug: p, overrideRaw: m } = e, { amount: h, merchantRequestId: g, ..._ } = t, v = {
		merchantId: n,
		userId: r,
		sessionId: i,
		amount: gz(h),
		accountId: a,
		currency: o,
		service: qc(s) ?? void 0,
		input: vz(_)
	}, y = qc(c);
	y && (v.bonusCode = y), l?.length && (v.locales = l), u && Object.keys(u).length > 0 && (v.extra = u);
	let b = qc(g);
	b && (v.merchantRequestId = b);
	let x = oV(f, d);
	x && (v.threeds = x);
	let S = sV(m, p);
	return S && Object.assign(v, S), v;
}, mV = "pan", hV = "expiryDate", gV = "csc", _V = "amount", vV = "field.card.pan.luhn_invalid", yV = [
	"min-h-[11rem]",
	"@sm:min-h-[11.75rem]",
	"@lg:min-h-[12.25rem]"
].join(" "), bV = 4, xV = new Set([
	mV,
	hV,
	gV
]), SV = (e) => e?.luhn ? e : {
	...e ?? {},
	luhn: {
		value: !0,
		invalidMessage: vV
	}
}, CV = (e, t) => {
	let n = t(e.label), r = e.placeholder ? t(e.placeholder) : void 0, i = e.id === mV ? SV(e.validation) : e.validation;
	return {
		...e,
		label: n,
		...r ? { placeholder: r } : {},
		validation: wz(i, t)
	};
}, wV = "Secure card fields are temporarily unavailable", TV = "We couldn't verify your card details.", EV = new Set([
	"error.hosted_fields_not_ready",
	"Hosted fields iframe is not ready.",
	"Hosted fields iframe window unavailable.",
	"Hosted fields controller destroyed before response."
]), DV = new Set([
	"error.hosted_fields_error_received",
	"Hosted fields tokenization already pending.",
	"No response from hosted fields iframe.",
	"No form data received from hosted fields iframe."
]), OV = (e, t, n) => n(qc(e) ?? qc(t)), kV = (e) => {
	let t = qc(e);
	return !t || EV.has(t) ? wV : t;
}, AV = (e) => {
	let t = qc(e);
	return !t || DV.has(t) ? TV : EV.has(t) ? wV : t;
}, jV = (e) => {
	let t = GN.generate[e];
	return [{
		value: t ? t() : GN.valid[e],
		label: "Valid"
	}, {
		value: GN.invalid[e],
		label: "Invalid"
	}].filter(({ value: e }) => e === void 0 ? !1 : typeof e != "string" || e.length > 0).map(({ value: e, label: t }) => ({
		value: e,
		label: t
	}));
}, MV = (e) => jV(e).length > 0, NV = (e, t) => {
	let n = qc(e);
	if (!n) return null;
	try {
		let e = t ? new URL(n, t) : new URL(n);
		if (e.protocol !== "http:" && e.protocol !== "https:" || e.origin === "null") return null;
		let r = e.pathname || "/", i = r.lastIndexOf("/");
		return e.pathname = i >= 0 ? r.slice(0, i + 1) : "/", e.search = "", e.hash = "", e.toString();
	} catch {
		return null;
	}
}, PV = (e) => {
	if (e.length === 0) return;
	let t = typeof window < "u" ? window.location.href : void 0;
	for (let n of e) {
		let e = n.logo;
		if (e) {
			if (typeof e == "string") {
				let n = NV(e, t);
				if (n) return n;
				continue;
			}
			if (!(typeof e != "object" || Array.isArray(e))) for (let n of Object.values(e)) {
				if (typeof n != "string") continue;
				let e = NV(n, t);
				if (e) return e;
			}
		}
	}
}, FV = {
	field: 76,
	gap: 8,
	min: 160
}, IV = 180, LV = "saveAccount", RV = "card", zV = new Set([
	"holderName",
	"accountHolder",
	"cardholderName"
]), BV = "brandless";
function VV({ id: t, onActionsChange: n, onPromptStateChange: r, onPreparedValues: i, onValuesChange: a, renderMode: o = "form", hideAmountField: s = !1, amountValueOverride: c, valueOverrides: l, requireDirtyBeforeSubmit: u = !0, comboViewLayout: d = !1, comboViewSurfaceChrome: f = "contained" }) {
	let p = wN(), { debug: m, initialAmount: y, lockAmount: b, currency: x, locale: C, merchantId: E, userId: ee, user: A, hostedFieldsUrl: j, sessionId: M, hostedFieldsFonts: N, hostedFieldsAutoFocusNextField: P, uiTheme: F, uiCardBrand: I, uiSuggestAmounts: L, uiComboView: R, uiBonuses: z, extraAttributes: B, selectedBonusCode: V, setCashierState: H } = _(hN), te = j || "https://hf.pvault.net", { translateKey: U } = mI(), { formatCurrencyValue: W, formatDisplayValue: G } = uz(), K = S(() => qc(_l(C)), [C]), ne = S(() => K ? [K] : void 0, [K]), re = S(() => U(gB), [U]), { getPaymentType: ie, paymentTypesList: ae, pciTenantId: oe } = qL(), se = S(() => PV(ae), [ae]), ce = F ? "neutral" : void 0, [le, ue] = T(null), de = dr(le) === "dark" ? "secondary" : "secondary-tinted", { fields: fe, hfFields: q, name: pe, type: me, method: J, accountId: he, service: ge, limits: _e, fee: ve, logo: ye } = ie(t) ?? {}, be = fe ?? [], xe = s || b ? be.filter((e) => e.id !== _V) : be, Se = nV({
		renderMode: o,
		hideAmountField: s,
		lockAmount: b,
		fields: xe
	}), Ce = S(() => sl(L), [L]), we = g((e) => G(e) || e, [G]), Te = new Map(be.flatMap((e) => e.id && e.notification ? [[e.id, e.notification]] : [])), Ee = q?.flatMap((e) => e.id && e.notification ? [{
		fieldId: e.id,
		notification: e.notification
	}] : []) ?? [], De = Ee.filter(({ notification: e }) => rV(e)), Oe = Ee.filter(({ notification: e }) => !rV(e)), ke = !!(q && q.length > 0), Ae = q?.some((e) => typeof e.id == "string" && xV.has(e.id)) ?? !1, je = ke && Ae && me?.toLowerCase() === RV && I, Me = d && f === "plain", Ne = je && !Me, { fieldsBeforeHosted: Pe, cardLayoutDetailsField: Fe, cardLayoutFooterField: Ie, fieldsAfterHosted: Le } = S(() => {
		if (!ke) return {
			fieldsBeforeHosted: xe,
			cardLayoutDetailsField: null,
			cardLayoutFooterField: null,
			fieldsAfterHosted: []
		};
		let e = [], t = null, n = null, r = [];
		for (let i of xe) {
			if (i.id === LV) {
				if (Ne && !n) {
					n = i;
					continue;
				}
				r.push(i);
				continue;
			}
			if (je && !t && typeof i.id == "string" && zV.has(i.id)) {
				t = i;
				continue;
			}
			e.push(i);
		}
		return {
			fieldsBeforeHosted: e,
			cardLayoutDetailsField: t,
			cardLayoutFooterField: n,
			fieldsAfterHosted: r
		};
	}, [
		xe,
		Ne,
		je,
		ke
	]), Re = S(() => {
		let e = iB(q);
		if (e === 0) return FV.min;
		let t = e * FV.field + Math.max(e - 1, 0) * FV.gap;
		return Math.max(t, FV.min);
	}, [q]), [ze, Be] = T(null), [Ve, He] = T(null), [Ue, We] = T("pending"), [Ge, Ke] = T(null), [qe, Je] = T(null), [Ye, Xe] = T({
		formId: t,
		brand: void 0
	}), Ze = w(null), X = Ye.formId === t ? Ye.brand : void 0, [Qe, $e] = T(!1), et = ke ? ze ?? Ve ?? Re : null, tt = ke && Ue === "loading", nt = Ue === "ready", rt = Ue, it = S(() => q ? JSON.stringify(q) : null, [q]), Z = S(() => {
		if (q) return q.map((e) => CV(e, U));
	}, [q, U]), at = S(() => Z || q, [q, Z]), ot = w(null), st = w(null), ct = w(null), lt = w(null), ut = w(re), dt = w(null), ft = w(null), pt = w(Ue), mt = w(!1), ht = w(null), gt = w(null), _t = w(null), vt = g(() => cV(st.current), []), yt = S(() => tV(X, se), [X, se]), bt = S(() => {
		if (!(me?.toLowerCase() !== RV || !he)) return pk(pe);
	}, [
		he,
		pe,
		me
	]), xt = S(() => tV(bt, se), [se, bt]), Q = X ? yt : xt, St = (() => {
		if (X) return yt?.logo;
		if (bt) return ye ?? xt?.logo;
	})(), Ct = je, wt = de, Tt = Ct ? Q?.theme ?? wt : wt, Et = Q?.brand ?? BV, Dt = w(null), [Ot, kt] = T(!1), { paymentResponse: At, makePayment: jt, finishPayment: Mt, paymentStatusMessage: Nt, isPaymentPending: Pt, isPaymentSuccessful: Ft, isPaymentFailed: It } = oz({
		paymentType: me ?? "",
		method: J ?? ""
	}), Lt = Pt || Ft || Ot && !It, { overridePayload: Rt, resetOverridePayload: zt, setLocked: Bt } = QN(), { registerReset: Vt } = tP();
	sz({
		paymentResponse: At,
		merchantId: E,
		debug: m
	}), v(() => {
		Bt(Lt);
	}, [Lt, Bt]), v(() => () => {
		zt(), Bt(!1);
	}, [zt, Bt]), v(() => {
		ut.current = re;
		let e = lt.current?.iframe;
		e && re && (e.title = re);
	}, [re]);
	let Ht = g((e) => {
		let t = e?.preserveHeight ?? !1;
		Be((e) => t ? e : null), Ke(null);
	}, []), Ut = g(() => {
		let e = ft.current;
		e && (clearTimeout(e), ft.current = null);
	}, []), Wt = g(() => {
		Ut(), ft.current = setTimeout(() => {
			ft.current = null, We((e) => e === "pending" ? "loading" : e);
		}, iV);
	}, [Ut]), Gt = g(() => {
		Ut(), mt.current = !1, ht.current = null, We("pending");
	}, [Ut]), Kt = g(() => {
		pt.current !== "ready" && (Ut(), We("ready"));
	}, [Ut]), qt = g(() => {
		let e = ht.current;
		!mt.current || !e || e.containerHeight <= 0 || Kt();
	}, [Kt]), Jt = g(() => {
		mt.current = !0, qt();
	}, [qt]), Yt = g(({ containerHeight: e }) => {
		let t = Math.ceil(e);
		t <= 0 || (ht.current = { containerHeight: t }, Be((e) => e === t ? e : t), qt());
	}, [qt]);
	v(() => {
		pt.current = Ue;
	}, [Ue]), v(() => Ut, [Ut]), v(() => {
		if (!ke) return;
		let e = ct.current;
		if (!e) return;
		let t = () => {
			let t = Math.ceil(e.getBoundingClientRect().height);
			t <= 0 || He((e) => e === t ? e : t);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(() => {
			t();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [it, ke]);
	let Xt = g(() => {
		Ht({ preserveHeight: !0 });
	}, [Ht]), Zt = g(() => {
		let e = Ze.current;
		e !== null && (clearTimeout(e), Ze.current = null);
	}, []), Qt = g((e, n) => {
		if (Zt(), e || !n?.delayedClear) {
			Xe((n) => n.formId === t && n.brand === e ? n : {
				formId: t,
				brand: e
			});
			return;
		}
		Ze.current = setTimeout(() => {
			Ze.current = null, Xe((e) => e.formId === t && e.brand === void 0 ? e : {
				formId: t,
				brand: void 0
			});
		}, IV);
	}, [Zt, t]);
	v(() => Zt, [Zt]);
	let $t = g(() => {
		Ht({ preserveHeight: !0 }), Je(null), Qt(void 0), dt.current?.reset();
	}, [Ht, Qt]), en = g(() => {
		Lt || Qe || (kt(!1), $t(), Dt.current?.resetForm(), Mt(), zt());
	}, [
		Mt,
		Lt,
		Qe,
		$t,
		zt
	]), tn = w(null);
	v(() => {
		tn.current = en;
	}, [en]);
	let nn = g(() => {
		tn.current?.();
	}, []), rn = w(!1);
	v(() => {
		if (!m) {
			rn.current &&= (Vt(null), !1);
			return;
		}
		if (!rn.current) return Vt(nn), rn.current = !0, () => {
			rn.current &&= (Vt(null), !1);
		};
	}, [
		m,
		Vt,
		nn
	]);
	let an = g((e) => {
		if (e.type === hB.CARD_BRAND) {
			Qt(e.cardBrand, { delayedClear: e.cardBrand === void 0 });
			return;
		}
		if (e.type === hB.FORM_STATE) {
			Je(e.formState ?? null);
			return;
		}
		if (e.type === hB.ERROR) {
			let t = kV(e.message);
			Ut(), We((e) => e === "ready" ? e : "loading"), Ke(t), $e(!1);
		}
	}, [Ut, Qt]);
	v(() => {
		if (!ke) return;
		let e = st.current;
		if (!e) return;
		let t = e.ownerDocument.defaultView ?? (typeof window < "u" ? window : void 0), n = gt.current, r = it ?? null;
		if (lt.current && n !== null && n === r) return;
		h(() => {
			Gt(), Ht(), Je(null), Qt(void 0);
		}), Wt(), lt.current?.destroy(), lt.current = null, dt.current = null, gt.current = r, _t.current = null;
		let i = (() => {
			let e;
			if (t ? e = t.location.href : typeof window < "u" && (e = window.location.href), e) try {
				return new URL(te, e).origin;
			} catch {
				return;
			}
		})(), a = DB({
			container: e,
			iframe: {
				src: te,
				title: ut.current,
				attributes: { scrolling: "no" },
				styles: {
					minHeight: `${String(FV.min)}px`,
					overflow: "hidden"
				}
			},
			controller: i ? { targetOrigin: i } : void 0
		});
		return lt.current = a, dt.current = a.controller, typeof a.iframe.addEventListener == "function" && a.iframe.addEventListener("pointerdown", Xt), () => {
			typeof a.iframe.removeEventListener == "function" && a.iframe.removeEventListener("pointerdown", Xt), a.destroy(), lt.current === a && (lt.current = null, dt.current = null), Gt(), Ht(), Je(null), Qt(void 0), gt.current = null, _t.current = null;
		};
	}, [
		Xt,
		Ht,
		it,
		te,
		Gt,
		Wt,
		ke,
		Qt
	]), v(() => {
		if (!ke) return;
		let e = dt.current;
		if (!e) return;
		e.setCallbacks({
			onReady: Jt,
			onLayout: Yt,
			onMessage: an
		});
		let t = e.getLastLayout();
		t && Yt(t);
		let n = e.getLastFormState();
		return n && Je(n), e.isReady() && Jt(), () => {
			e.setCallbacks(null);
		};
	}, [
		Jt,
		Yt,
		an,
		it,
		te,
		ke
	]), v(() => {
		if (!ke) return;
		let e = dt.current;
		if (!e) return;
		let t = VB(vt), n = Object.entries(t).sort(([e], [t]) => e.localeCompare(t)), r = n.length > 0 ? Object.fromEntries(n) : void 0, i = {
			debugMode: m,
			fields: at ?? void 0,
			fonts: N,
			uiTheme: r,
			autoFocusNextField: P,
			pciTenantId: oe
		}, a = JSON.stringify({
			...i,
			fields: i.fields ?? null,
			fonts: i.fonts ?? null,
			uiTheme: i.uiTheme ?? null,
			pciTenantId: i.pciTenantId ?? null
		});
		_t.current !== a && (_t.current = a, e.configure(i));
	}, [
		Tt,
		m,
		N,
		P,
		te,
		oe,
		at,
		vt,
		ke,
		F
	]);
	let on = S(() => {
		let e = yz(fe, { amount: y });
		return Object.entries(l ?? {}).forEach(([t, n]) => {
			n !== void 0 && (e[t] = n);
		}), e;
	}, [
		fe,
		y,
		l
	]), sn = g((e) => {
		let t = dt.current;
		if (!t) return Promise.reject(/* @__PURE__ */ Error("error.hosted_fields_not_ready"));
		Ke(null), $e(!0);
		try {
			let n = t.tokenize({ saveAccount: e });
			return Promise.resolve(n).catch((e) => {
				let t = e instanceof Error ? e : Error(String(e));
				throw Ke(AV(t.message)), t;
			}).finally(() => {
				$e(!1);
			});
		} catch (e) {
			$e(!1);
			let t = e instanceof Error ? e : Error(String(e));
			return Ke(AV(t.message)), Promise.reject(t);
		}
	}, []), cn = g(async (e, t) => {
		if (t.setSubmitting(!1), !await lV(Dt)) return;
		let n = m ? Rt : void 0;
		try {
			let t = await fV(e, sn, dt.current);
			if (i) {
				i({
					values: t,
					hasHostedFields: ke
				});
				return;
			}
			let r = pV({
				values: t,
				merchantId: E,
				userId: ee,
				sessionId: M,
				accountId: he,
				currency: x,
				service: ge,
				bonusCode: z ? V ?? void 0 : void 0,
				locales: ne,
				extra: B,
				method: J,
				type: me,
				debug: m,
				overrideRaw: n
			});
			kt(!0), jt(r);
		} catch (e) {
			kt(!1), Ke(AV((e instanceof Error ? e : Error(String(e))).message));
		}
	}, [
		E,
		ee,
		he,
		ge,
		V,
		z,
		m,
		jt,
		x,
		M,
		B,
		sn,
		i,
		J,
		ke,
		me,
		Rt,
		ne
	]), ln = g((e) => Cz(o === "confirm" ? [] : xe, e, U), [
		o,
		xe,
		U
	]), un = It ? OV(Nt, "error.unknown", U) : null, dn = ke && Ge !== null ? OV(Ge, wV, U) : null, fn = un || dn;
	return !t || !fe ? null : /* @__PURE__ */ O(Jv, {
		initialValues: on,
		onSubmit: cn,
		validate: ln,
		innerRef: Dt,
		validateOnMount: !0,
		children: ({ values: i, errors: s, initialValues: l, submitForm: f, setFieldValue: h, setFieldTouched: g, isValid: _, dirty: v }) => {
			let x = (e, t) => {
				if (g(e, !0, !1), h(e, t, !0), typeof window > "u" || typeof document > "u") return;
				let n = () => {
					let t = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/"/g, "\\\""), n = document.querySelector(`[name="${t}"]`);
					if (n) {
						n.focus();
						return;
					}
					document.getElementById(p.id("payment-field", { slug: e }))?.focus();
				}, r = typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : null;
				if (r) {
					r(n);
					return;
				}
				setTimeout(n, 0);
			}, S = typeof i.amount == "string" ? i.amount : "", C = c ?? S, w = vL(C, _e, { maxBoundary: mL(J === "payout" ? e.PAYOUT : e.PAYIN, A, ve) }), T = yL(w, U, W), E = !!w, ee = typeof s.amount == "string" && s.amount.length > 0 && s.amount ? void 0 : T, j = Object.values(l).some(bz), M = u && o !== "confirm" && !j, N = xz(s), P = Sz(o === "confirm" ? [] : xe, i), F = o === "confirm" || !ke || aV(qe), I = !_ || N || E || P || !F || !v && M, L = Lt || Qe || I, z = !I, B = !It || _, V = !n, te = U("payment.submit"), G = U("cta.reset"), K = Lt || Qe, ne = Lt || Qe, re = o !== "confirm", ie = re && ke, ae = ie && De.length > 0, oe = ie && Oe.length > 0, se = al(C) || C || void 0, le = !b && !R && re && Ce.length > 0 && !!xe.find((e) => e.id === _V), de = V && B ? 1 : 0, fe = Pe.length + +!!ae + +!!ie + +!!oe + Le.length + de, q = Pe.length, pe = q + +!!ae, me = pe + +!!ie, he = me + +!!oe, ge = he + Le.length, ye = (e) => le && e === _V ? /* @__PURE__ */ O(fB, {
				suggestions: Ce,
				activeSuggestion: se,
				onSelect: (e) => {
					h(_V, il(e), !1);
				},
				formatLabel: we,
				amountLimits: _e,
				size: "sm"
			}) : null, Ee = (e) => {
				let t = Te.get(e);
				return rV(t) ? /* @__PURE__ */ O("div", {
					className: "mb-2 flex flex-col gap-2",
					children: /* @__PURE__ */ O(mB, {
						notification: t,
						translateKey: U
					})
				}) : null;
			}, Ae = (e) => {
				let t = Te.get(e), n = t && !rV(t) ? t : null, r = m && MV(e);
				return !n && !r ? null : /* @__PURE__ */ k("div", {
					className: n ? "mt-1 mb-4.5 flex flex-col gap-2" : "mt-2 flex flex-col gap-2",
					children: [n && /* @__PURE__ */ O(mB, {
						notification: n,
						translateKey: U
					}), r && /* @__PURE__ */ k("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ O("span", {
							className: "text-sm font-medium",
							children: "Debug"
						}), jV(e).map(({ value: t, label: n }) => /* @__PURE__ */ O(mn, {
							variant: "neutral",
							size: "sm",
							disabled: Pt || Ft,
							onClick: () => {
								x(e, t);
							},
							label: n
						}, `${e}_${n}`))]
					})]
				});
			}, Ne = ie && je, Re = d && Ne && !Me, ze = {
				margin: -bV,
				width: `calc(100% + ${String(bV * 2)}px)`
			}, Be = ze;
			Ne && (Be = et === null ? void 0 : { height: et }), !Ne && et !== null && (Be = {
				...ze,
				height: et + bV * 2
			});
			let Ve = /* @__PURE__ */ k("div", {
				"data-theme": Ne ? void 0 : ce,
				className: Y(p.className("hosted-fields-frame"), "relative", Ne ? "overflow-hidden rounded-[var(--pc-radius-lg)] bg-transparent" : "overflow-visible bg-transparent"),
				children: [/* @__PURE__ */ O("div", {
					ref: st,
					"data-slot": "hosted-fields-target",
					"data-state": nt ? "ready" : "loading",
					className: Y(p.className("hosted-fields-target"), "w-full overflow-hidden transition-opacity duration-180 ease-out", nt ? "opacity-100" : "opacity-0"),
					style: Be
				}), ke && /* @__PURE__ */ O("div", {
					"aria-hidden": "true",
					"data-testid": "cashier-hosted-fields-skeleton",
					"data-slot": "hosted-fields-skeleton-layer",
					"data-state": rt,
					className: Y(p.className("hosted-fields-skeleton"), "pointer-events-none absolute inset-0 z-10 transition-opacity duration-180 ease-out", tt ? "opacity-100" : "opacity-0"),
					style: Ne ? void 0 : { inset: -bV },
					children: /* @__PURE__ */ O(dB, {
						fields: at ?? [],
						className: "h-full"
					})
				})]
			}), He = Fe ? /* @__PURE__ */ O(Yz, {
				fields: [Fe],
				translateKey: U,
				disabled: Lt,
				amountError: ee,
				renderBelowFieldContent: ye,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: Ee,
				renderAfterField: Ae,
				reserveCheckboxMessageSpace: !Me
			}) : void 0, Ue = Ie ? /* @__PURE__ */ O("div", {
				className: "min-w-0 flex-1",
				children: /* @__PURE__ */ O(Yz, {
					fields: [Ie],
					translateKey: U,
					disabled: Lt,
					amountError: ee,
					renderBelowFieldContent: ye,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: Ee,
					renderAfterField: Ae,
					reserveCheckboxMessageSpace: !1
				})
			}) : null, We = Ct ? /* @__PURE__ */ O(HV, {
				brand: Q?.brand,
				logo: St
			}) : null, Ge = Ue || We ? /* @__PURE__ */ k("div", {
				"data-slot": "cashier-card-shell-footer-row",
				className: Y("flex w-full min-w-0 items-end gap-3 px-0.5 pb-1.5", Ue ? "justify-between" : "justify-end"),
				children: [Ue, We]
			}) : void 0, Ke = Pe.length > 0 ? /* @__PURE__ */ O("div", {
				className: "contents",
				children: /* @__PURE__ */ O(Yz, {
					fields: Pe,
					translateKey: U,
					disabled: Lt,
					amountError: ee,
					renderBelowFieldContent: ye,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: Ee,
					renderAfterField: Ae,
					animateRows: !0,
					animationStartIndex: 0,
					animationTotalCount: fe,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !Me
				})
			}) : null, Je = ie ? /* @__PURE__ */ k("div", {
				id: p.id("hosted-fields-container"),
				ref: ot,
				className: Y(p.className("hosted-fields-container"), Re ? "relative mb-2 @md:mb-3 w-full" : "relative mb-2 w-full", Ez),
				"data-testid": "cashier-hosted-fields-container",
				style: Hz({
					index: pe,
					total: fe,
					direction: "reverse"
				}),
				children: [
					/* @__PURE__ */ O("span", {
						ref: ue,
						"aria-hidden": "true",
						"data-slot": "cashier-card-shell-theme-probe",
						hidden: !0
					}),
					Ne ? /* @__PURE__ */ O(Sn, {
						dataTheme: Tt,
						brandMotionKey: Et,
						className: Y(p.className("hosted-fields-card-shell"), yV),
						cardFields: Ve,
						cardFieldsClassName: "flex-1 px-0",
						details: He,
						detailsClassName: "px-1",
						footer: Ge,
						footerClassName: "w-full",
						reserveFooterSpace: Ct || !!Ie
					}) : Ve,
					/* @__PURE__ */ O("div", {
						"aria-hidden": "true",
						className: "pointer-events-none invisible absolute inset-x-0 top-0 -z-10",
						children: /* @__PURE__ */ O("div", {
							ref: ct,
							children: /* @__PURE__ */ O(dB, { fields: at ?? [] })
						})
					})
				]
			}) : null, Ye = (e, t) => e.length > 0 ? /* @__PURE__ */ O("div", {
				className: Y(p.className("hosted-fields-notifications"), t.placement === "top" ? "mb-2 flex flex-col gap-2 @xl:col-span-2" : "mt-1 mb-4.5 flex flex-col gap-2 @xl:col-span-2", Ez),
				style: Hz({
					index: t.animationIndex,
					total: fe,
					direction: "reverse"
				}),
				children: e.map(({ fieldId: e, notification: t }) => /* @__PURE__ */ O(mB, {
					notification: t,
					translateKey: U
				}, `${e}-${t.key}-${t.type}`))
			}) : null, Xe = ae ? Ye(De, {
				placement: "top",
				animationIndex: q
			}) : null, Ze = oe ? Ye(Oe, {
				placement: "bottom",
				animationIndex: me
			}) : null, X = Le.length > 0 ? /* @__PURE__ */ O("div", {
				className: "contents",
				children: /* @__PURE__ */ O(Yz, {
					fields: Le,
					translateKey: U,
					disabled: Lt,
					amountError: ee,
					renderBelowFieldContent: ye,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: Ee,
					renderAfterField: Ae,
					animateRows: !0,
					animationStartIndex: he,
					animationTotalCount: fe,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !Me
				})
			}) : null, $e = d && (!!Ke || !!X || !Re && (!!Je || !!Xe || !!Ze)), it = /* @__PURE__ */ k(D, { children: [
				Ke,
				!Re && Xe,
				!Re && Je,
				!Re && Ze,
				X
			] }), Z = Me || Re ? "pt-0" : Ne ? "pt-2" : "pt-2.5", lt = /* @__PURE__ */ k(D, { children: [
				Re && Xe,
				Re && Je,
				Re && Ze,
				$e && /* @__PURE__ */ O("div", {
					"data-slot": "quick-payment-form-surface",
					"data-theme": "neutral",
					className: Y("w-full text-[var(--pc-color-text)]", Me ? "overflow-visible" : [
						"flex flex-col rounded-[var(--pc-radius-lg)]",
						"[background:var(--pc-color-surface)]",
						"pc-enter-panel",
						"pt-3 @xl:pt-4 pr-3 @xl:pr-4 pb-3 @xl:pb-4 pl-3 @xl:pl-4"
					]),
					children: /* @__PURE__ */ O("div", {
						className: Y(uk, Me && "overflow-visible", Z),
						children: it
					})
				})
			] }), ut = /* @__PURE__ */ k(D, { children: [
				Ke,
				Xe,
				Je,
				Ze,
				X
			] }), dt = Y(p.className("payment-form", { slug: t }), d ? "contents" : [
				uk,
				Tz,
				Ne ? "pt-1 @md:pt-2" : "pt-4.5"
			]), ft = d ? lt : ut;
			return /* @__PURE__ */ k(D, { children: [
				/* @__PURE__ */ O(UV, {
					enabled: Se,
					amountValue: C,
					sharedAmount: y,
					setCashierState: H
				}),
				a && /* @__PURE__ */ O(WV, {
					onValuesChange: a,
					values: i,
					fields: be,
					hasHostedFields: ke
				}),
				r && /* @__PURE__ */ O(KV, {
					onPromptStateChange: r,
					isComplete: z,
					errorMessage: fn
				}),
				n && /* @__PURE__ */ O(GV, {
					onActionsChange: n,
					submitLabel: te,
					resetLabel: G,
					submitDisabled: L,
					submitVisible: B,
					submitLoading: ne,
					resetDisabled: K,
					resetVisible: m,
					submitForm: f,
					onReset: en
				}),
				re && /* @__PURE__ */ O(ay, {
					id: p.id("payment-form", { slug: t }),
					className: dt,
					noValidate: !0,
					children: ft
				}),
				V && B && /* @__PURE__ */ O("div", {
					className: "pc-enter-rise-item",
					style: Hz({
						index: ge,
						total: fe,
						direction: "reverse"
					}),
					children: /* @__PURE__ */ O(mn, {
						variant: "secondary",
						disabled: L,
						loading: ne,
						onClick: () => {
							f();
						},
						label: te
					})
				})
			] });
		}
	});
}
function HV({ brand: e, logo: t }) {
	let [n, r] = T(null), [i, a] = T({
		key: "",
		values: []
	}), o = dr(n, { tokenName: "--pc-color-secondary" }), s = [
		e ?? "",
		o,
		JSON.stringify(t ?? null)
	].join("|"), c = i.key === s ? i.values : [], l = Mr(t, o, !1).find((e) => !c.includes(e));
	return /* @__PURE__ */ O("div", {
		ref: r,
		"data-slot": "cashier-card-brand-footer",
		className: "flex h-7 w-[4.125rem] shrink-0 items-center justify-end overflow-hidden",
		children: l && /* @__PURE__ */ O("img", {
			src: l,
			alt: "",
			"aria-hidden": "true",
			className: Y("block h-6.5 w-[3.75rem] shrink-0 object-contain object-right md:h-7 md:w-[4.125rem]", "pc-card-brand-logo-enter"),
			onError: () => {
				a((e) => {
					let t = e.key === s ? e.values : [];
					return t.includes(l) ? e.key === s ? e : {
						key: s,
						values: t
					} : {
						key: s,
						values: [...t, l]
					};
				});
			}
		}, l)
	});
}
function UV({ enabled: e, amountValue: t, sharedAmount: n, setCashierState: r }) {
	let i = w(n);
	return v(() => {
		i.current = n;
	}, [n]), v(() => {
		e && t !== i.current && (i.current = t, r((e) => e.initialAmount === t ? e : {
			...e,
			initialAmount: t
		}));
	}, [
		t,
		e,
		r
	]), null;
}
function WV({ onValuesChange: e, values: t, fields: n, hasHostedFields: r }) {
	return v(() => {
		e({
			values: uV(t, n),
			hasHostedFields: r
		});
	}, [
		n,
		r,
		e,
		t
	]), null;
}
function GV({ onActionsChange: e, submitLabel: t, resetLabel: n, submitDisabled: r, submitVisible: i, submitLoading: a, resetDisabled: o, resetVisible: s, submitForm: c, onReset: l }) {
	let u = w(c), d = w(l);
	v(() => {
		u.current = c;
	}, [c]), v(() => {
		d.current = l;
	}, [l]);
	let f = g(() => {
		u.current();
	}, []), p = g(() => {
		d.current();
	}, []), m = S(() => ({
		submit: {
			label: t,
			disabled: r,
			visible: i,
			loading: a,
			onClick: f
		},
		reset: {
			label: n,
			disabled: o,
			visible: s,
			onClick: p
		}
	}), [
		p,
		f,
		o,
		n,
		s,
		r,
		a,
		t,
		i
	]);
	return v(() => {
		e && e(m);
	}, [m, e]), null;
}
function KV({ onPromptStateChange: e, isComplete: t, errorMessage: n }) {
	return v(() => (e({
		isComplete: t,
		errorMessage: n
	}), () => {
		e({
			isComplete: !1,
			errorMessage: null
		});
	}), [
		n,
		t,
		e
	]), null;
}
//#endregion
//#region src/utils/paymentTypeDisplay.ts
var qV = (e) => e !== r.NONE, JV = (e) => e === r.PICKER, YV = ({ mode: e, paymentFormEnabled: n }) => {
	switch (e) {
		case r.ACCORDION: return n ? t.ACCORDION : t.LIST;
		case r.GRID: return t.GRID;
		case r.LIST: return t.LIST;
		case r.NONE:
		case r.PICKER:
		default: return null;
	}
}, XV = (e) => e === t.ACCORDION ? t.LIST : e, ZV = (e) => (e.fields ?? []).some((e) => e.id === "amount"), QV = (e) => {
	let t = e.hfFields;
	return (e.fields ?? []).some((e) => !!e.id && e.id !== "amount") || (t ?? []).length > 0;
}, $V = (e, t, n) => {
	if (!ZV(e)) return "";
	let r = n?.amount;
	return al(typeof r == "string" ? r : t);
}, eH = (e, t) => QV(e) ? !0 : ZV(e) && !ol(t);
//#endregion
//#region src/components/PaymentTypeInlineForm.tsx
function tH({ paymentType: e, selectionId: t, amountValue: n, valueOverrides: r, hideAmountField: i = !1, surfaceChrome: a = "contained", onActionsChange: o, onPromptStateChange: s, onPreparedValues: c, onValuesChange: l }) {
	let u = t ?? NL(e), d = ZV(e), f = $V(e, n), p = d && i;
	return /* @__PURE__ */ O(VV, {
		id: u,
		onActionsChange: o,
		onPromptStateChange: g((e) => {
			s(u, e);
		}, [s, u]),
		onPreparedValues: g((t) => {
			c(e, t);
		}, [c, e]),
		onValuesChange: g((t) => {
			l(e, t);
		}, [l, e]),
		hideAmountField: p,
		amountValueOverride: p ? f : void 0,
		valueOverrides: r,
		requireDirtyBeforeSubmit: !1,
		comboViewLayout: !0,
		comboViewSurfaceChrome: a
	});
}
//#endregion
//#region src/components/PaymentTypeLogo.tsx
var nH = (e) => e === t.GRID ? "grid" : "list";
function rH({ logo: e, alt: t, seed: n, className: r, tone: i, listStyle: a, compact: o = !1, balanceLogo: s = !0, stuck: c = !1, content: l }) {
	return /* @__PURE__ */ O(Fr, {
		logo: e,
		alt: t,
		seed: n,
		className: r,
		tone: i,
		layout: nH(a),
		compact: o,
		balanceLogo: s,
		stuck: c,
		stablePresentation: !0,
		content: l
	});
}
//#endregion
//#region src/components/PaymentTypeLimitsFee.tsx
var iH = (e, t) => {
	if (!e) return {
		min: "",
		max: ""
	};
	let n = (e) => e === void 0 ? "" : t(e) || e;
	return {
		min: n(e.min),
		max: n(e.max)
	};
}, aH = (e, t, n) => {
	if (!e || !XI(e)) return "";
	let r = ZI(e.direction), i = e.value || "", a = t(i) || i;
	if (e.feeType === "percentage") {
		let e = `${i}%`;
		return r ? `${r}${e}` : e;
	}
	let o = eL(e, 0, {
		feeCurrencyFormatter: n,
		formatCurrencyValue: t
	});
	return r && o ? o : r ? o || `${r}${a}` : a;
}, oH = ({ min: e, max: t }) => e && t ? `${e} - ${t}` : e || t || "";
function sH({ limits: e, fee: t, extraItems: n = [], rowGap: r = "tight", align: i = "center", truncate: a = !1, className: o }) {
	let { uiShowFees: s } = _(hN), { translateKey: c } = mI(), { currencyFormatter: l, formatCurrencyValue: u, formatDisplayValue: d } = uz(), f = d ?? (() => ""), p = u ?? d, m = a, h = QI(l ?? null), g = iH(e, f), v = aH(t, p ?? f, h), y = oH(g), b = c("field.fee.label"), x = s && v ? `${v} ${b}` : "", S = [
		y ? {
			id: "limits",
			value: y
		} : null,
		x ? {
			id: "fee",
			value: x
		} : null,
		...n
	].filter((e) => !!e);
	return S.length === 0 ? null : /* @__PURE__ */ O("div", {
		className: Y(m ? "min-w-0 line-clamp-2 leading-tight @md:leading-snug" : "flex flex-wrap items-center leading-tight @md:leading-snug", !m && (r === "normal" ? "gap-y-1.5" : "gap-y-0.5"), i === "left" ? "justify-start text-left" : "justify-center text-center", o),
		children: S.map((e, t) => {
			let n = m && t > 0, r = !m && t < S.length - 1, i = /* @__PURE__ */ k(D, { children: [e.label && /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O("span", {
				className: "font-medium",
				children: e.label
			}), ": "] }), /* @__PURE__ */ O("span", { children: e.value })] });
			return /* @__PURE__ */ k("span", {
				"data-payment-meta-item": e.id,
				"data-theme": e.id === "bonus" ? "success" : void 0,
				className: Y("inline-flex items-center whitespace-nowrap", e.id === "bonus" && "text-[var(--pc-color-text)]"),
				children: [
					n ? /* @__PURE__ */ O("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null,
					i,
					r ? /* @__PURE__ */ O("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null
				]
			}, e.id);
		})
	});
}
function cH({ limits: e, fee: t, extraItems: n, align: r = "left", rowGap: i, truncate: a, className: o }) {
	return /* @__PURE__ */ O(sH, {
		limits: e,
		fee: t,
		extraItems: n,
		align: r,
		rowGap: i,
		truncate: a,
		className: Y(["text-xs @sm:text-sm text-[var(--pc-color-text-muted)]"].join(" "), o)
	});
}
//#endregion
//#region src/hooks/usePaymentSelection.ts
var lH = () => {
	let { selectedPaymentType: e, gotoPaymentType: t, hasAppliedGotoPaymentType: n, setCashierState: r } = _(hN), i = g((e) => {
		r((t) => t.selectedPaymentType === e ? t : {
			...t,
			selectedPaymentType: e,
			selectedBonusCode: null,
			paymentFormDraft: null,
			comboViewFormDraft: null
		});
	}, [r]);
	return {
		selectedPaymentType: e,
		selectPaymentType: i,
		clearPaymentSelection: g(() => {
			r((e) => e.selectedPaymentType === null && !e.selectedBonusCode ? e : {
				...e,
				selectedPaymentType: null,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
		}, [r]),
		ensureDefaultSelection: g((r) => {
			if (e) return;
			let a = t && !n ? HL(r, t) : null, o = null;
			a ? o = NL(a) : r[0] && (o = NL(r[0])), o && i(o);
		}, [
			t,
			n,
			i,
			e
		])
	};
};
//#endregion
//#region src/ui/I18nTextSlot.tsx
function uH({ children: e, className: t }) {
	let { isTranslationVisible: n } = hI();
	return e == null ? null : /* @__PURE__ */ O("span", {
		className: Y("transition-opacity duration-150", n ? "opacity-100" : "opacity-0", t),
		children: e
	});
}
//#endregion
//#region src/ui/PaymentTypeListItem.tsx
var dH = (e, t) => !t || e == null ? e : o.map(e, (e) => {
	if (!p(e)) return e;
	let n = e.props, r = n.children === void 0 ? n.children : dH(n.children, t);
	return e.type === mn ? l(e, {
		appearance: "ghost",
		children: r
	}) : r === n.children ? e : l(e, { children: r });
});
function fH({ name: e, selectionId: n, domSlug: r, logo: i, logoContent: a, limits: o, fee: s, onSelect: c, listStyle: l, compact: u, variant: d = "neutral", appearance: f = "solid", shape: p = "default", showMeta: m = !1, title: h, description: v, meta: y, isSelected: b = !1, showSelectedIndicator: x = !0, bonusLabel: S = null, badges: C, hasAvailableBonuses: w, interactive: E = !0, includeDataTheme: ee = !0, hoverMode: A = "self", isDisabled: j = !1, balanceLogo: M = !0, embedded: N = !1, actions: P, actionStopsPropagation: F = !0, className: I, animationClassName: L, animationStyle: R, infoDrawer: z }) {
	let B = wN(), V = K(), { translateKey: H } = mI(), { uiListStyle: te, bonuses: U, uiBonuses: W, uiBonusesAvailable: G, uiShowFees: ne } = _(hN), { selectPaymentType: re } = lH(), [ie, ae] = T(!1), oe = E && !j, se = h ?? e, ce = H(se), le = se.trim().length > 0, ue = v ? H(v) : null, de = typeof v == "string" && v.trim().length > 0, fe = H("aria.logo"), q = l ?? te, pe = q === t.GRID, me = !!u, J = p === "rounded", he = dn(d), ge = ee && !N, _e = B.token(r ?? e, "item"), ve = n ?? e, ye = g(() => {
		if (oe) {
			if (c) {
				c(ve);
				return;
			}
			if (re(ve), w ?? (W && BI(U))) {
				V({ to: "/bonus" });
				return;
			}
			V({
				to: "/pt/$id",
				params: { id: ve }
			});
		}
	}, [
		U,
		w,
		oe,
		V,
		c,
		ve,
		re,
		W
	]), be = (e) => {
		oe && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ye());
	}, xe = g((e) => {
		e.stopPropagation(), ae(!0);
	}, []), Se = g(() => {
		ae(!1);
	}, []), Ce = G ? S : null, we = pe ? [...C ?? [], ...Ce ? [{
		id: "bonus",
		label: Ce
	}] : []] : [], Te = pe ? "p-2 gap-0.5" : N && !me && !J ? "px-0 py-2.5 gap-2.5" : Y(N ? "px-0 py-2.5" : me ? "py-2 px-2 @md:px-3" : J ? "py-2.5 px-3.5" : "p-3", me ? "gap-2.5 @md:gap-3" : J ? "gap-2 @lg:gap-2.5" : "gap-3"), Ee = pe ? "aspect-square flex-col justify-around" : me ? "items-center justify-between" : "justify-between @md:justify-around", De = m || !!S, Oe = oe || A === "group" ? "transition-[background-color] duration-[250ms] ease-out" : null, ke = A === "group" ? ["group-hover:[background:var(--pc-color-surface-weaker)]", "group-active:[background:var(--pc-color-surface-weaker)]"].join(" ") : A === "self" && oe ? ["hover:[background:var(--pc-color-surface-weaker)]", "active:[background:var(--pc-color-surface-weaker)]"].join(" ") : null, Ae = Y("flex w-full min-w-0 overflow-hidden items-center", (() => {
		if (N) return "bg-transparent text-[var(--pc-color-text)]";
		switch (f) {
			case "ghost": return "bg-transparent text-[var(--pc-color-text)]";
			case "outline": return "border border-[var(--pc-color-border)] bg-[var(--pc-color-outline-surface,transparent)] text-[var(--pc-color-text)]";
			case "muted": return "[background:var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]";
			default: return "[background:var(--pc-color-surface)] text-[var(--pc-color-text)]";
		}
	})(), !!(P || z) && "relative", !N && (J ? "rounded-[var(--pc-radius-3xl)]" : "rounded-[var(--pc-radius-lg)]"), oe && "group cursor-pointer", Oe, ke, j && he !== "danger" && [
		"opacity-55",
		"[filter:saturate(0.72)_grayscale(0.18)]",
		"[--pc-enter-final-opacity:0.55]"
	].join(" "), Te, Ee, L, I), je = pe ? "text-center" : "text-left", Me = Y("w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", j ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", pe ? "break-words" : "truncate", je), Ne = Y("flex min-w-0 flex-col", pe ? "items-center w-full" : "items-start flex-1"), Pe = De ? /* @__PURE__ */ O(cH, {
		limits: o,
		fee: s,
		align: pe ? "center" : "left",
		rowGap: pe ? void 0 : "normal",
		extraItems: Ce && !pe ? [{
			id: "bonus",
			value: Ce
		}] : void 0
	}) : null, Fe = !!(m && (o?.min || o?.max || ne && s?.value)), Ie = !!(de || Fe || y), Le = pe && we.length > 0 ? /* @__PURE__ */ O("div", {
		className: Y("flex flex-wrap justify-center gap-1 text-center", Ie && "-mt-0.5"),
		children: we.map((e) => /* @__PURE__ */ O("span", {
			"data-theme": dn(e.variant ?? "success"),
			className: Y("inline-flex items-center rounded-[var(--pc-radius-full)] px-2.5 py-1 text-xs font-medium leading-tight", e.variant === "neutral" ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", e.id !== "bonus" && "italic"),
			children: e.label
		}, e.id))
	}) : null, Re = !!(de || Pe || y || Le), ze = null;
	Re ? ze = /* @__PURE__ */ k("div", {
		className: Ne,
		children: [
			le && /* @__PURE__ */ O("h3", {
				className: Me,
				children: /* @__PURE__ */ O(uH, { children: ce })
			}),
			de && /* @__PURE__ */ O("p", {
				className: Y("text-xs @sm:text-sm text-[var(--pc-color-text-muted)] @md:leading-tight", je),
				children: /* @__PURE__ */ O(uH, { children: ue })
			}),
			Pe,
			y,
			Le
		]
	}) : le && (ze = /* @__PURE__ */ O("h3", {
		className: Me,
		children: /* @__PURE__ */ O(uH, { children: ce })
	}));
	let Be = z ? {
		label: H(z.ariaLabelKey ?? z.titleKey),
		title: /* @__PURE__ */ O(uH, { children: H(z.titleKey) }),
		icon: z.icon ?? /* @__PURE__ */ O(rd, {})
	} : null, Ve = Be ? /* @__PURE__ */ O(mn, {
		size: "sm",
		variant: "neutral",
		appearance: me ? "ghost" : void 0,
		"aria-label": Be.label,
		onClick: xe,
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		iconOnly: !0,
		label: Be.label,
		leadingIcon: Be.icon
	}) : null, He = dH(P, me), Ue = g((e) => {
		F && e.stopPropagation();
	}, [F]), We = g((e) => {
		F && e.stopPropagation();
	}, [F]), Ge = P || Ve ? /* @__PURE__ */ k("div", {
		id: B.id("payment-list-item-actions", { slug: _e }),
		className: Y(B.className("payment-list-item-actions", { slug: _e }), "flex items-center justify-end gap-2", pe ? "absolute right-2 top-2" : "ml-auto self-center"),
		onClick: Ue,
		onKeyDown: We,
		children: [Ve, He]
	}) : null, Ke = Be ? /* @__PURE__ */ O(CI, {
		isOpen: ie,
		onClose: Se,
		title: Be.title,
		children: /* @__PURE__ */ O("div", {
			className: "px-5 pb-5 pt-2",
			children: z?.content
		})
	}) : null, qe = pe ? "grid" : "list", Je = [ce, fe].filter((e) => typeof e == "string" && e.length > 0).join(" "), Ye = a ? /* @__PURE__ */ O("div", {
		className: Pr({
			layout: qe,
			compact: me
		}),
		children: /* @__PURE__ */ O("span", {
			className: Y("flex items-center justify-center", Nr({
				layout: qe,
				compact: me
			})),
			children: a
		})
	}) : /* @__PURE__ */ O(rH, {
		logo: i,
		alt: Je,
		seed: e,
		listStyle: q,
		compact: u,
		balanceLogo: M
	});
	return /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ k("div", {
		id: B.id("payment-list-item", { slug: _e }),
		onClick: ye,
		onKeyDown: oe ? be : void 0,
		role: oe ? "button" : void 0,
		tabIndex: oe ? 0 : void 0,
		"aria-disabled": j || void 0,
		"data-theme": ge ? he : void 0,
		style: R,
		className: Y(B.className("payment-list-item", { slug: _e }), Ae, pe && "relative", b && x && [
			"[outline-style:solid]",
			"outline-3 outline-[var(--pc-color-secondary)]",
			"outline-offset-[2.5px]"
		].join(" ")),
		children: [
			Ye,
			ze,
			Ge
		]
	}), Ke] });
}
//#endregion
//#region src/ui/SelectableListLayout.tsx
function pH({ children: e, id: n, className: r, contentClassName: i, contentStyle: a, listStyle: o, compact: s, stacked: c = !1 }) {
	let { uiListStyle: l } = _(hN), u = (o ?? l) === t.GRID;
	return /* @__PURE__ */ O("div", {
		id: n,
		className: r,
		children: /* @__PURE__ */ O("div", {
			className: Y("gap-2", c || s || !u ? "grid grid-cols-1" : "grid grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4", i),
			style: a,
			children: e
		})
	});
}
//#endregion
//#region src/hooks/useBonuses.ts
var mH = (e) => e ? [
	e.name,
	e.accountId,
	e.method,
	e.type,
	e.service ?? ""
].join("|") : "__none__", hH = (e) => [
	String(e.amount ?? ""),
	String(e.user?.payinCount ?? ""),
	String(e.user?.daysSinceRegistration ?? ""),
	String(e.user?.totalPayinAmount ?? "")
].join("|");
function gH() {
	let { bonuses: e, user: t, initialAmount: n, uiBonuses: r } = _(hN), i = S(() => zI(r ? e : void 0), [e, r]), a = S(() => hL(n), [n]), o = S(() => ({
		payinCount: t?.payinCount,
		daysSinceRegistration: t?.daysSinceRegistration,
		totalPayinAmount: t?.totalPayinAmount
	}), [
		t?.daysSinceRegistration,
		t?.payinCount,
		t?.totalPayinAmount
	]), s = g((e) => ({
		amount: e?.amount ?? a,
		user: e?.user ?? o
	}), [a, o]), c = w(/* @__PURE__ */ new Map());
	v(() => {
		c.current = /* @__PURE__ */ new Map();
	}, [i, s]);
	let l = g((e, t) => {
		let n = s(t), r = [mH(e), hH(n)].join("::"), a = c.current.get(r);
		if (a) return a;
		let o = VI(i, e, n), l = {
			availability: o,
			availableBonuses: o.filter((e) => e.status === "available").map((e) => e.bonus)
		};
		return c.current.set(r, l), l;
	}, [i, s]), u = g((e, t) => l(e, t).availability, [l]), d = g((e, t) => l(e, t).availableBonuses, [l]);
	return {
		bonuses: i,
		getBonusAvailabilityForPaymentType: u,
		getAvailableBonusesForPaymentType: d,
		getBonusCountForPaymentType: g((e, t) => d(e, t).length, [d])
	};
}
//#endregion
//#region src/components/icons/PresentIcon.tsx
var _H = {
	xxs: "h-2.5 w-2.5 shrink-0",
	xs: "h-3 w-3 shrink-0",
	sm: "h-3.5 w-3.5 shrink-0"
};
function vH({ size: e = "sm" }) {
	return /* @__PURE__ */ O("svg", {
		viewBox: "0 0 32 32",
		fill: "currentColor",
		className: _H[e],
		"aria-hidden": "true",
		children: /* @__PURE__ */ O("path", { d: "M32 10.015c0-1.104-0.895-2-2-2h-3.414c0.884-0.872 1.449-2.014 1.449-3.421 0-1.732-0.995-3.615-3.788-3.615-3.675 0-6.745 3.913-8.188 6.106-1.444-2.193-4.607-6.106-8.282-6.106-2.793 0-3.788 1.882-3.788 3.614 0 1.407 0.581 2.55 1.482 3.421h-3.472c-1.105 0-2 0.896-2 2v5.986h2.018v13.017c0 1.105 0.895 2 2 2h23.99c1.105 0 2-0.895 2-2v-13.018h1.992v-5.986zM24.247 2.981c1.236 0 1.788 0.52 1.788 1.615 0 2.221-2.479 3.42-4.811 3.42h-3.386c1.421-2.111 3.922-5.035 6.409-5.035zM7.778 2.981c2.487 0 5.083 2.924 6.504 5.034h-3.386c-2.332 0-4.905-1.229-4.905-3.451 0-1.095 0.551-1.583 1.788-1.583zM30 14.002h-13v-3.986h13v3.986zM2 10.015h13v3.986h-13zM4.018 16.002h10.982v13.018h-10.982zM28.008 29.020h-11.008v-13.017h11.008v13.017z" })
	});
}
//#endregion
//#region src/components/BonusCountBadge.tsx
var yH = (e) => typeof e == "number" && Number.isFinite(e);
function bH({ count: e, domSlug: t }) {
	let n = wN();
	if (!yH(e) || e <= 0) return null;
	let r = t ? n.id("bonus-count", { slug: t }) : void 0, i = t ? n.id("bonus-count-value", { slug: t }) : void 0;
	return /* @__PURE__ */ k("span", {
		id: r,
		className: [n.className("bonus-count", t ? { slug: t } : void 0), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
		"data-testid": "cashier-bonus-count",
		children: [/* @__PURE__ */ O(vH, { size: "xs" }), /* @__PURE__ */ O("span", {
			id: i,
			className: n.className("bonus-count-value", t ? { slug: t } : void 0),
			"data-testid": "cashier-bonus-count-value",
			children: e
		})]
	});
}
//#endregion
//#region src/ui/PaymentTypesList.tsx
function xH({ paymentTypes: e, onSelect: t, listStyle: n, compact: r, stacked: i = !1, showMeta: a = !1, selectable: o = !1, selectedPaymentType: s, renderActions: c, isPaymentTypeDisabled: l, preserveDisabledSelection: u = !1, itemVariant: d = "neutral", itemAppearance: f = "solid", includeItemDataTheme: p = !0, domScope: m, animateItems: h = !1 }) {
	let g = wN(), { getBonusCountForPaymentType: _ } = gH(), v = n, y = m ? g.token(m, "list") : null, b = y ? g.id("payment-types-list", { slug: y }) : void 0, x = g.className("payment-types-list", y ? { slug: y } : void 0), C = S(() => HL(e, s), [e, s]), w = { staggerMode: "compressed-tail" }, T = S(() => e.map((e) => {
		let t = NL(e), n = _(e);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: n,
			label: n > 0 ? /* @__PURE__ */ O(bH, {
				count: n,
				domSlug: t
			}) : null
		};
	}), [_, e]);
	return /* @__PURE__ */ O(pH, {
		id: b,
		className: Y(x, "w-full"),
		contentClassName: h ? kz : void 0,
		contentStyle: h ? Wz(w) : void 0,
		listStyle: v,
		compact: r,
		stacked: i,
		children: T.map(({ paymentTypeKey: e, paymentType: n, count: i, label: s }, m) => {
			let { name: g, logo: _, limits: y, fee: b } = n, x = e, S = !!l?.(n), E = o && !S, D = o && C === n && (!S || u), k = c?.(n);
			return /* @__PURE__ */ O(fH, {
				selectionId: e,
				domSlug: x,
				name: g,
				logo: _,
				limits: y,
				fee: b,
				listStyle: v,
				compact: r,
				showMeta: a,
				title: AL(n) ?? void 0,
				bonusLabel: s,
				hasAvailableBonuses: i > 0,
				onSelect: t,
				isSelected: D,
				isDisabled: S,
				hoverMode: E ? "none" : void 0,
				includeDataTheme: p,
				actions: k,
				variant: d,
				appearance: f,
				animationClassName: h ? Az : void 0,
				animationStyle: h ? Uz(m, T.length, "forward", w) : void 0
			}, e);
		})
	});
}
//#endregion
//#region src/hooks/useHotkey.ts
var SH = new Set(["Backspace"]), CH = (e) => (t) => {
	let { key: n } = t;
	return SH.has(n) ? !0 : e === "numeric" ? Fc.test(n) : e === "decimal" ? n === "." || n === "," ? !0 : Fc.test(n) : e === "alphanumeric" ? Ic.test(n) : e === "alphabetic" ? Lc.test(n) : n.length === 1;
}, wH = (e, t) => e instanceof HTMLElement ? !!(t?.current && e === t.current || e.isContentEditable || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) : !1, TH = ({ inputRef: e, onType: t, shouldHandleKey: n, isEventTargetInteractive: r, inputType: i = "text", onBack: a, backKey: o }) => {
	let s = e !== void 0 && t !== void 0, c = o ?? "Escape", l = S(() => {
		if (s) return n || CH(i);
	}, [
		s,
		i,
		n
	]);
	v(() => {
		if (!s && !a) return;
		let n = (n) => {
			let i = e?.current ?? null, o = r ? r(n.target) : wH(n.target, e);
			if (n.key === "Escape" && i && document.activeElement === i) {
				n.preventDefault(), i.blur();
				return;
			}
			if (n.key === c) {
				if (o) return;
				a && (n.preventDefault(), a());
				return;
			}
			!s || !i || !l || n.defaultPrevented || n.metaKey || n.ctrlKey || n.altKey || l(n) && (o || (n.preventDefault(), i.focus(), t(n)));
		};
		return window.addEventListener("keydown", n, { capture: !0 }), () => {
			window.removeEventListener("keydown", n, { capture: !0 });
		};
	}, [
		s,
		e,
		r,
		l,
		a,
		t,
		c
	]);
}, EH = () => {
	let e = aF(), { translateKey: t } = mI(), { uiAccountDelete: n, merchantId: r, userId: i, sessionId: a, method: o, currency: s, onAccountDeleted: c } = _(hN), { selectedPaymentType: l, clearPaymentSelection: u } = lH(), d = bI(), { openActionConfirmation: f, actionConfirmationModal: p } = JM({
		presentation: "drawer",
		renderActions: ({ confirmLabel: e, confirmVariant: t, isSubmitting: n, onConfirm: r }) => /* @__PURE__ */ O(mn, {
			type: "button",
			variant: t,
			size: "xl",
			fullWidth: !0,
			loading: n,
			onClick: r,
			label: e
		}),
		drawer: {
			side: "bottom",
			closeButtonLabel: t("cta.close"),
			portalContainer: d,
			actionsPlacement: "footer",
			renderFooter: (e) => /* @__PURE__ */ O(RN, {
				placement: "bottom",
				items: [e]
			})
		}
	});
	return {
		requestAccountDelete: g((d) => {
			if (!n) return;
			let p = d.accountId;
			if (!p) return;
			let m = t(d.name), h = t("account.delete.title"), g = t("account.delete.description"), _ = t("cta.delete"), v = t("account.delete.error");
			f({
				title: h,
				description: wI(g, "name", m),
				confirmLabel: _,
				confirmVariant: "danger",
				errorMessage: v,
				onConfirm: async () => {
					if (!r || !i || !a) throw Error("Missing required account context.");
					await sI({
						query: {
							merchantId: r,
							userId: i,
							sessionId: a,
							accountId: p
						},
						parseAs: "text"
					}), (l === NL(d) || l === d.name || l === p) && u(), c && c(d), await e.invalidateQueries({ queryKey: UL({
						merchantId: r,
						method: o,
						userId: i,
						sessionId: a,
						currency: s
					}) });
				}
			});
		}, [
			n,
			t,
			f,
			r,
			i,
			a,
			l,
			u,
			c,
			e,
			o,
			s
		]),
		actionConfirmationModal: p
	};
};
//#endregion
//#region src/utils/interactivePrompt.tsx
function DH(e, t, n) {
	if (!t) return;
	let r = e(t);
	if (!(!r || r === t)) return Object.entries(n ?? {}).reduce((e, [t, n]) => wI(e, t, n), r);
}
function OH(e, t, n, r) {
	return DH(e, t, r) ?? n;
}
function kH(e, t, n) {
	return DH(e, t, n);
}
var AH = (e) => /* @__PURE__ */ O(Ju, { className: e }), jH = ({ translateKey: e }) => ({
	legacyTitle: e("cta.choose_payment_type"),
	titleKey: "cta.interactive_prompt.choose_payment_type.title",
	bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
	icon: AH()
}), MH = ({ translateKey: e }) => ({
	legacyTitle: e("payment.enter_details"),
	titleKey: "payment.interactive_prompt.enter_details",
	bodyKey: "interactive_prompt.payment_details.form.body",
	icon: /* @__PURE__ */ O(od, {})
}), NH = (e) => e.toFixed(2).replace(/\.?0+$/, ""), PH = "[data-pc-scroll-obstruction=\"top\"]", FH = "[data-pc-scroll-obstruction=\"bottom\"]", IH = ["[data-pc-scroll-obstruction-extent=\"true\"]", "[data-slot=\"interactive-prompt-tail\"]"].join(","), LH = 4, RH = 8, zH = 64, BH = 150, VH = 2, HH = 320, UH = 520, WH = 1.2, GH = .5, KH = /* @__PURE__ */ new WeakMap(), qH = /* @__PURE__ */ new WeakSet(), JH = (e) => typeof window < "u" && e === window, YH = (e) => {
	if (JH(e)) return {
		top: 0,
		bottom: window.innerHeight
	};
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom
	};
}, XH = (e) => JH(e) ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : e.scrollTop, ZH = (e) => {
	if (JH(e)) {
		let e = document.documentElement, t = document.body;
		return Math.max(0, Math.max(e.scrollHeight, t.scrollHeight) - window.innerHeight);
	}
	return Math.max(0, e.scrollHeight - e.clientHeight);
}, QH = (e) => JH(e) ? document.documentElement : e, $H = (e) => {
	let t = QH(e), n = KH.get(t);
	n?.element && qH.delete(n.element), KH.delete(t);
}, eU = (e) => {
	let t = QH(e), n = KH.get(t);
	n && (n.frameId !== void 0 && window.cancelAnimationFrame(n.frameId), $H(e));
}, tU = () => typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, nU = (e, t, n) => Math.min(n, Math.max(t, e)), rU = (e) => -(Math.cos(Math.PI * e) - 1) / 2, iU = (e) => nU(Math.abs(e) * WH, HH, UH), aU = (e) => {
	let t = window.getComputedStyle(e);
	return !(t.display === "none" || t.visibility === "hidden");
}, oU = (e) => {
	let t = e.getBoundingClientRect(), n = t.top, r = t.right, i = t.bottom, a = t.left, o = Array.from(e.querySelectorAll(IH));
	for (let e of o) {
		if (!aU(e)) continue;
		let t = e.getBoundingClientRect();
		t.height <= 0 || t.width <= 0 || (n = Math.min(n, t.top), r = Math.max(r, t.right), i = Math.max(i, t.bottom), a = Math.min(a, t.left));
	}
	return {
		top: n,
		right: r,
		bottom: i,
		left: a,
		width: Math.max(0, r - a),
		height: Math.max(0, i - n)
	};
}, sU = (e, t, n, r) => aU(e) ? t.height > 0 && t.width > 0 && t.bottom > n && t.top < r : !1, cU = (e) => {
	let t = YH(e), n = t.top, r = Array.from(document.querySelectorAll(PH)).map((e) => ({
		element: e,
		rect: oU(e)
	})).filter(({ element: e, rect: n }) => sU(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.max(n, e.bottom);
	return n + LH;
}, lU = (e) => {
	let t = YH(e), n = t.bottom, r = Array.from(document.querySelectorAll(FH)).map((e) => ({
		element: e,
		rect: oU(e)
	})).filter(({ element: e, rect: n }) => sU(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.min(n, e.top);
	return n - LH;
}, uU = (e, t = "start") => {
	let n = Aj(e) ?? window, r = cU(n), i = lU(n), a = e.getBoundingClientRect(), o = XH(n), s = Math.max(a.height, e.scrollHeight), c = a.top + s, l = o + a.top - r, u = o + c - i, d = t === "start" ? l : t === "nearest-fit" ? s > i - r ? Math.abs(a.top - r) > RH ? l : null : a.top < r ? l : c > i ? u : null : Math.abs(a.top - r) > RH || c > i ? l : null;
	return d === null ? null : {
		container: n,
		top: Math.max(0, Math.round(d))
	};
}, dU = (e, t, n = "auto") => {
	let r = XH(e);
	if (!(Math.abs(t - r) <= GH)) {
		if (JH(e)) {
			window.scrollTo({
				top: t,
				left: window.scrollX,
				behavior: n
			});
			return;
		}
		if (typeof e.scrollTo == "function") {
			e.scrollTo({
				top: t,
				left: e.scrollLeft,
				behavior: n
			});
			return;
		}
		e.scrollTop = t;
	}
}, fU = (e, t) => JH(e) ? t : Math.min(t, ZH(e)), pU = (e, t, n) => {
	if (typeof window.requestAnimationFrame != "function") {
		t(Date.now());
		return;
	}
	let r = QH(e), i = {
		frameId: window.requestAnimationFrame(t),
		element: n
	};
	KH.set(r, i);
}, mU = (e) => {
	if (typeof window > "u") return;
	let t = Aj(e) ?? window, n = null, r = null, i = null, a = HH, o = 0;
	if (eU(t), typeof window.requestAnimationFrame != "function") {
		let t = uU(e, "nearest-fit");
		t && dU(t.container, t.top, tU() ? "auto" : "smooth");
		return;
	}
	let s = (c) => {
		if (!e.isConnected) {
			$H(t);
			return;
		}
		n ??= c, o += 1;
		let l = o >= VH, u = c - n >= BH;
		if (tU()) {
			if (l && u) {
				let n = uU(e, "nearest-fit");
				$H(t), n && dU(n.container, fU(n.container, n.top), "auto");
				return;
			}
			pU(t, s, e);
			return;
		}
		if (l) {
			let n = uU(e, "nearest-fit");
			if (n) {
				let e = fU(n.container, n.top);
				r ??= c, i ??= XH(n.container), a = iU(e - i);
				let o = nU((c - r) / a, 0, 1), s = Math.round(i + (e - i) * rU(o));
				if (dU(n.container, s, "auto"), u && o >= 1) {
					dU(n.container, e, "auto"), $H(t);
					return;
				}
			} else if (u) {
				$H(t);
				return;
			}
		}
		pU(t, s, e);
	};
	qH.add(e), pU(t, s, e);
};
function hU(e) {
	typeof window > "u" || mU(e);
}
function gU(e) {
	if (typeof window > "u" || !e.isConnected || qH.has(e)) return !1;
	let t = uU(e, "nearest-fit");
	return t ? Math.abs(t.top - XH(t.container)) > zH : !1;
}
//#endregion
//#region src/ui/PaymentTypesAccordion.tsx
function _U({ paymentTypes: e, selectedPaymentType: n, onSelect: r, renderPanel: i, hasPanel: a, showMeta: o = !1, compact: s = !1, renderActions: c, isPaymentTypeDisabled: l, preserveDisabledSelection: u = !1, itemVariant: d = "neutral", itemAppearance: f = "solid", includeItemDataTheme: p = !0, domScope: m, animateItems: h = !1 }) {
	let g = wN(), { getBonusCountForPaymentType: _ } = gH(), v = m ? g.token(m, "accordion") : null, y = v ? g.id("payment-types-accordion", { slug: v }) : void 0, b = g.className("payment-types-accordion", v ? { slug: v } : void 0), x = S(() => HL(e, n ?? null), [e, n]), C = { staggerMode: "compressed-tail" }, w = S(() => e.map((e) => {
		let t = NL(e), n = _(e);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: n,
			label: n > 0 ? /* @__PURE__ */ O(bH, {
				count: n,
				domSlug: t
			}) : null
		};
	}), [_, e]);
	return /* @__PURE__ */ O("div", {
		id: y,
		className: Y(b, "w-full"),
		children: /* @__PURE__ */ O("div", {
			className: Y("grid grid-cols-1 gap-2", h && "pc-enter-sweep"),
			style: h ? Wz(C) : void 0,
			children: w.map(({ paymentTypeKey: e, paymentType: n, count: m, label: _ }, v) => {
				let { name: y, logo: b, limits: S, fee: T } = n, E = e, D = g.token(E, "accordion-item"), ee = g.id("payment-types-accordion-header", { slug: D }), A = g.id("payment-types-accordion-panel", { slug: D }), j = !!l?.(n), M = x === n && (!j || u), N = a?.(n) ?? !0, P = M && !j && N, F = AL(n), I = c?.(n), L = p ? dn(d) : void 0, R = h ? Uz(v, w.length, "forward", C) : void 0, z = (e) => e.parentElement, B = (e) => {
					let t = z(e);
					t && hU(t);
				}, V = (t) => {
					if (j) return;
					r?.(e);
					let n = z(t), i = !!(P && n && gU(n));
					(!P || i) && B(t);
				};
				return /* @__PURE__ */ k("div", {
					"data-theme": L,
					"data-selected": M ? "true" : void 0,
					style: R,
					className: Y("rounded-[var(--pc-radius-xl)]", P || M ? "overflow-visible" : "overflow-hidden", "[background:var(--pc-color-surface)]", M && [
						"[outline-style:solid]",
						"outline-3 outline-[var(--pc-color-secondary)]",
						"outline-offset-[2.5px]"
					], h && "pc-enter-sweep-item"),
					children: [/* @__PURE__ */ O("div", {
						id: ee,
						role: "button",
						tabIndex: j ? -1 : 0,
						"aria-disabled": j || void 0,
						"aria-expanded": N ? P : void 0,
						"aria-controls": N ? A : void 0,
						onClick: (e) => {
							V(e.currentTarget);
						},
						onKeyDown: (e) => {
							j || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), V(e.currentTarget));
						},
						className: Y("group focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-accent)]", "focus-visible:ring-offset-2", "focus-visible:ring-offset-transparent", !j && "cursor-pointer"),
						children: /* @__PURE__ */ O(fH, {
							selectionId: e,
							domSlug: E,
							name: y,
							logo: b,
							limits: S,
							fee: T,
							listStyle: t.LIST,
							compact: s,
							showMeta: o,
							title: F ?? void 0,
							bonusLabel: _,
							hasAvailableBonuses: m > 0,
							isSelected: M,
							showSelectedIndicator: !1,
							isDisabled: j,
							interactive: !1,
							hoverMode: "none",
							includeDataTheme: !1,
							actions: I,
							variant: d,
							appearance: f
						})
					}), N && /* @__PURE__ */ O("div", {
						id: A,
						role: "region",
						"aria-labelledby": ee,
						"aria-hidden": !P,
						className: Y("grid", P ? "overflow-visible" : "overflow-hidden", "transition-[grid-template-rows,opacity] duration-150 ease-out", P ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"),
						children: /* @__PURE__ */ O("div", {
							className: "min-h-0 min-w-0",
							children: P ? /* @__PURE__ */ O("div", {
								className: "min-w-0 border-t border-[var(--pc-color-border-weakest)] px-2 py-3.5 @md:px-3.5 @md:py-4",
								children: i(n)
							}) : null
						})
					})]
				}, e);
			})
		})
	});
}
//#endregion
//#region src/ui/CashierHeader.tsx
var vU = ["py-4 text-center leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:py-2"].join(" "), yU = "flex items-center gap-2", bU = ["text-2xl font-medium tracking-tight leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:text-lg @md:group-data-[stuck=true]:text-xl"].join(" "), xU = ["text-sm @xs:text-base @sm:text-lg mb-4 leading-none text-[var(--pc-color-text-muted)]", "group-data-[stuck=true]:text-base"].join(" "), SU = "flex flex-col gap-1", CU = "flex items-center justify-center", wU = {
	stacked: {
		container: "text-center",
		layout: "flex-col",
		titleWrapper: ""
	},
	row: {
		container: "text-left",
		layout: "flex-row",
		titleWrapper: "items-start"
	}
}, TU = {
	default: {},
	details: {
		container: "py-2 text-left px-1.5 @sm:px-3 group-data-[stuck=true]:py-1",
		layout: "flex-row items-center gap-2 w-full group-data-[stuck=true]:items-center",
		titleWrapper: [
			"items-start min-w-0 w-full gap-0",
			"group-data-[stuck=true]:flex-row",
			"group-data-[stuck=true]:items-center",
			"group-data-[stuck=true]:gap-1",
			"group-data-[stuck=true]:flex-wrap"
		].join(" "),
		title: [
			"break-words text-lg @md:text-2xl w-full",
			"group-data-[stuck=true]:text-base @md:group-data-[stuck=true]:text-lg",
			"group-data-[stuck=true]:w-auto",
			"group-data-[stuck=true]:flex-1",
			"group-data-[stuck=true]:min-w-[10ch]"
		].join(" "),
		leading: "flex-shrink-0",
		titleMeta: ["group-data-[stuck=true]:shrink-0", "group-data-[stuck=true]:max-w-full"].join(" ")
	}
}, EU = {
	stacked: {
		container: "group-data-[stuck=true]:text-center",
		layout: "group-data-[stuck=true]:flex-col",
		titleWrapper: ""
	},
	row: {
		container: "group-data-[stuck=true]:text-left",
		layout: "group-data-[stuck=true]:flex-row",
		titleWrapper: "group-data-[stuck=true]:items-start"
	}
}, DU = (e) => typeof e == "string" || typeof e == "number";
function OU({ title: e, subtitle: t, leading: n, trailing: r, titleMeta: i, variant: a = "default", layout: o = "stacked", stuckLayout: s, className: c, layoutClassName: l, titleWrapperClassName: u, titleClassName: d, subtitleClassName: f, leadingClassName: p, trailingClassName: m, titleMetaClassName: h }) {
	let g = !!(e || t || i);
	if (!(n || r || g)) return null;
	let _ = wU[o], v = s ? EU[s] : null, y = TU[a], b = typeof t == "string" || typeof t == "number", x = DU(e) ? /* @__PURE__ */ O(uH, { children: e }) : e, S = b ? /* @__PURE__ */ O(uH, { children: t }) : t, C = Q(vU, _.container, y.container, v?.container, c), w = Q(yU, _.layout, y.layout, v?.layout, l), T = Q(SU, _.titleWrapper, y.titleWrapper, v?.titleWrapper, u), E = Q(bU, y.title, d), D = Q(CU, y.leading, p), ee = Q("min-w-0", y.trailing, m), A = Q(xU, y.subtitle, f), j = Q(y.titleMeta, h);
	return /* @__PURE__ */ O("div", {
		className: C,
		children: /* @__PURE__ */ k("div", {
			className: w,
			children: [
				n && /* @__PURE__ */ O("div", {
					className: D,
					children: n
				}),
				g && /* @__PURE__ */ k("div", {
					className: T,
					children: [
						e && /* @__PURE__ */ O("h2", {
							className: E,
							children: x
						}),
						i ? j ? /* @__PURE__ */ O("div", {
							className: j,
							children: i
						}) : i : null,
						t ? O(b ? "p" : "div", {
							className: A,
							children: S
						}) : null
					]
				}),
				r && /* @__PURE__ */ O("div", {
					className: ee,
					children: r
				})
			]
		})
	});
}
//#endregion
//#region src/components/InteractivePromptHeader.tsx
function kU({ content: e, forceVisible: t = !1, className: n }) {
	let { uiInteractivePrompts: r, uiPaymentMethodSwitcher: i, uiUserBalance: a, debug: o } = _(hN), { translateKey: s } = mI(), c = S(() => (e?.actions ?? []).flatMap((e) => {
		let t = o && e.labelKey ? e.labelKey : OH(s, e.labelKey, e.legacyLabel);
		return t ? [{
			id: e.id,
			label: t,
			onClick: e.onClick,
			disabled: e.disabled,
			variant: e.variant,
			appearance: e.appearance,
			leadingIcon: e.leadingIcon,
			trailingIcon: e.trailingIcon
		}] : [];
	}), [
		e?.actions,
		o,
		s
	]);
	if (!r && !t || !e) return null;
	let l = OH(s, e.titleKey, e.legacyTitle, e.titleValues) ?? e.legacyTitle;
	e.preferLegacyTitle && e.legacyTitle && (l = e.legacyTitle), o && e.titleKey && (l = e.titleKey);
	let u = o && e.bodyKey ? e.bodyKey : kH(s, e.bodyKey, e.bodyValues) ?? e.legacyBody;
	return e.preferLegacyBody && e.legacyBody && (u = e.legacyBody), /* @__PURE__ */ O(OM, {
		className: Y(!i && !a && "pt-1.5 @sm:pt-2", n),
		title: l,
		body: u,
		meta: e.meta,
		icon: e.icon,
		iconSlotClassName: e.iconSlotClassName,
		trailingVisual: e.trailingVisual,
		footer: e.footer,
		actions: c,
		actionsOffsetClassName: e.actionsOffsetClassName,
		tone: e.tone,
		appearance: e.appearance,
		size: e.size,
		compact: e.compact
	});
}
//#endregion
//#region src/utils/paymentFormDraft.ts
var AU = (e, t) => {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length ? n.every((n) => e[n] === t[n]) : !1;
}, jU = (e, t) => !!e && e?.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount, MU = (e, t) => e === t ? !0 : !e || !t ? !1 : e.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount && e.hasHostedFields === t.hasHostedFields && AU(e.values, t.values), NU = (e, t, n) => jU(e, t) ? {
	...e,
	amount: n,
	values: {
		...e.values,
		amount: n
	}
} : e, PU = ["flex flex-col w-full bg-[var(--pc-color-surface)]"].join(" "), FU = ["relative z-30"].join(" "), IU = "sticky top-0 z-40 h-0 overflow-visible", LU = ["transition-transform duration-200 ease-out", "transform-gpu will-change-transform"].join(" "), RU = "w-full", zU = (e) => {
	if (!e || typeof window > "u") return window;
	let t = e.parentElement;
	for (; t;) {
		let e = window.getComputedStyle(t), n = `${e.overflow}${e.overflowY}${e.overflowX}`;
		if (/(auto|scroll|overlay)/.test(n)) return t;
		t = t.parentElement;
	}
	return window;
}, BU = (e) => typeof window < "u" && e === window, VU = (e) => {
	let [t, n] = T(null), [r, i] = T(null), [a, o] = T(1), s = g((e) => {
		n(e);
	}, []), c = g((e) => {
		i(e);
	}, []);
	return v(() => {
		if (!e || !t || !r || typeof window > "u") return;
		let n = zU(t), i = 0, a = () => {
			let e = t.getBoundingClientRect(), i = r.getBoundingClientRect(), a = 0;
			if (!BU(n)) {
				let e = n.getBoundingClientRect(), t = window.getComputedStyle(n).paddingTop, r = Number.parseFloat(t), i = Number.isNaN(r) ? 0 : r;
				a = e.top + i;
			}
			let s = Math.min(24, Math.max(8, i.height * .2)), c = a + s, l = a, u = c - l || 1, d = Math.min(1, Math.max(0, (e.top - l) / u));
			o((e) => Math.abs(e - d) < .002 ? e : d);
		}, s = () => {
			i && cancelAnimationFrame(i), i = requestAnimationFrame(a);
		};
		a(), BU(n) ? window.addEventListener("scroll", s, { passive: !0 }) : n.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", s, { passive: !0 });
		let c = null;
		return typeof ResizeObserver < "u" && (c = new ResizeObserver(() => {
			s();
		}), c.observe(r), BU(n) || c.observe(n)), () => {
			i && cancelAnimationFrame(i), BU(n) ? window.removeEventListener("scroll", s) : n.removeEventListener("scroll", s), window.removeEventListener("resize", s), c?.disconnect();
		};
	}, [
		t,
		e,
		r
	]), {
		progress: a,
		setAnchorRef: s,
		setHeaderRef: c
	};
};
function HU({ sticky: e = !1, className: t, children: n }) {
	let { progress: r, setAnchorRef: i, setHeaderRef: a } = VU(e), o = r < 1, s = { transform: `translateY(-${(r * 100).toFixed(2)}%)` };
	return n ? e ? /* @__PURE__ */ k(D, { children: [/* @__PURE__ */ O("div", {
		ref: a,
		"aria-hidden": o ? "true" : void 0,
		className: Y(PU, "group", o ? "invisible" : "", t),
		children: n
	}), /* @__PURE__ */ O("div", {
		ref: i,
		className: IU,
		children: /* @__PURE__ */ O("div", {
			"data-stuck": o ? "true" : void 0,
			"data-pc-scroll-obstruction": o ? "top" : void 0,
			"aria-hidden": o ? void 0 : "true",
			style: s,
			className: Y(PU, "group", LU, o ? FU : "", o ? "pointer-events-auto" : "pointer-events-none", o ? "overflow-visible" : "invisible", t),
			children: /* @__PURE__ */ k("div", {
				className: "relative bg-[var(--pc-color-surface)]",
				children: [/* @__PURE__ */ O("div", {
					className: RU,
					children: n
				}), /* @__PURE__ */ O("div", {
					"aria-hidden": "true",
					"data-slot": "sticky-header-stack-fade",
					"data-pc-scroll-obstruction": "top",
					style: ON,
					className: "pointer-events-none absolute inset-x-0 top-full"
				})]
			})
		})
	})] }) : /* @__PURE__ */ O("div", {
		className: Y(PU, "group", t),
		children: n
	}) : null;
}
//#endregion
//#region src/ui/SubContainer.tsx
function UU({ id: e, className: t, contentId: n, contentClassName: r, title: i, subtitle: a, header: o, stickyHeader: s = !1, fitted: c, fullHeight: l, children: u }) {
	let { translateKey: d } = mI(), f = typeof i == "string" ? d(i) : i, p = typeof a == "string" ? d(a) : a, m = o ?? (i || a ? /* @__PURE__ */ O(OU, {
		title: f,
		subtitle: p
	}) : null);
	return /* @__PURE__ */ k("div", {
		id: e,
		className: Y([
			"flex flex-col",
			l && "min-h-0 flex-1",
			t
		]),
		children: [m && (s ? /* @__PURE__ */ O(HU, {
			sticky: !0,
			children: m
		}) : m), /* @__PURE__ */ O("div", {
			id: n,
			className: Y([
				"wrap-anywhere flex flex-col",
				l && "min-h-0 flex-1",
				s && !l && "pb-4",
				!c && "px-1.5 @sm:px-3 rounded-[var(--pc-radius-lg)]",
				r
			]),
			children: u
		})]
	});
}
//#endregion
//#region src/ui/StatusHeader.tsx
var WU = [
	"h-12 w-12 @md:h-16 @md:w-16",
	"group-data-[stuck=true]:h-6 group-data-[stuck=true]:w-6",
	"@md:group-data-[stuck=true]:h-8 @md:group-data-[stuck=true]:w-8",
	"inline-flex items-center justify-center"
].join(" "), GU = "h-full w-full text-inherit", KU = ["h-[70%] w-[70%]", "text-[var(--pc-color-surface)]"].join(" "), qU = [
	"group-data-[stuck=true]:flex-row",
	"group-data-[stuck=true]:items-center",
	"group-data-[stuck=true]:flex-wrap",
	"group-data-[stuck=true]:justify-between",
	"group-data-[stuck=true]:gap-3",
	"group-data-[stuck=true]:flex-1",
	"group-data-[stuck=true]:min-w-0"
].join(" "), JU = [
	"group-data-[stuck=true]:mt-0",
	"group-data-[stuck=true]:mb-0",
	"group-data-[stuck=true]:min-w-0"
].join(" ");
function YU() {
	return /* @__PURE__ */ O(zt, { className: KU });
}
function XU({ title: e, subtitle: t, theme: n, leading: r }) {
	return /* @__PURE__ */ O(OU, {
		className: "px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2",
		stuckLayout: "row",
		titleWrapperClassName: qU,
		leading: r ? /* @__PURE__ */ O("span", {
			"data-theme": n,
			className: "inline-flex items-center justify-center",
			children: /* @__PURE__ */ O("span", {
				className: WU,
				children: r
			})
		}) : void 0,
		title: e,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		subtitleClassName: JU
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function ZU({ text: e, subtitle: t, theme: n, withLoader: r = !1 }) {
	let { translateKey: i } = mI(), a = r ? /* @__PURE__ */ O(YU, {}) : void 0;
	return !t && !n && !a ? /* @__PURE__ */ O(UU, { title: e }) : /* @__PURE__ */ O(UU, { header: /* @__PURE__ */ O(XU, {
		title: i(e),
		subtitle: t ? i(t) : void 0,
		theme: n,
		leading: a
	}) });
}
//#endregion
//#region src/hooks/useBackNavigation.ts
function QU({ defaultRoute: e, backKey: t = "Backspace", enableHotkey: n = !0, useHistory: r = !0, requireCanGoBackForHotkey: i = !1, replace: a = !1, resetHistory: o = !1 }) {
	let s = K(), c = G().history, l = r && !!c?.canGoBack(), u = g(() => {
		if (o && c) {
			let e = c.location.state.__TSR_index;
			if (e > 0) {
				c.go(-e);
				return;
			}
		}
		if (r && c?.canGoBack()) {
			c.back();
			return;
		}
		s({
			to: e,
			replace: a
		});
	}, [
		e,
		c,
		s,
		a,
		o,
		r
	]);
	return TH({
		onBack: n && (!i || l) ? u : void 0,
		backKey: t
	}), S(() => ({
		canGoBack: l,
		handleBack: u
	}), [l, u]);
}
//#endregion
export { bz as $, IM as $n, zI as $t, eH as A, vP as An, K as Ar, NL as At, fB as B, VN as Bn, dL as Bt, fH as C, AP as Cn, Pc as Cr, YL as Ct, rH as D, hP as Dn, dn as Dr, qL as Dt, cH as E, gP as En, mn as Er, JL as Et, YV as F, eP as Fn, te as Fr, vL as Ft, Oz as G, CN as Gn, rL as Gt, Ez as H, HN as Hn, lL as Ht, $V as I, tP as In, V as Ir, _L as It, Hz as J, fN as Jn, WI as Jt, Dz as K, wN as Kn, nL as Kt, VV as L, ZN as Ln, H as Lr, mL as Lt, qV as M, kP as Mn, W as Mr, CL as Mt, ZV as N, rP as Nn, B as Nr, bL as Nt, tH as O, mP as On, zt as Or, GL as Ot, XV as P, nP as Pn, U as Pr, yL as Pt, xz as Q, UM as Qn, BI as Qt, nV as R, QN as Rn, I as Rr, hL as Rt, pH as S, OP as Sn, Nc as Sr, QL as St, lH as T, _P as Tn, Zr as Tr, ZL as Tt, Az as U, DN as Un, QI as Ut, Yz as V, UN as Vn, uL as Vt, kz as W, ON as Wn, tL as Wt, Wz as X, sN as Xn, KI as Xt, Uz as Y, dN as Yn, GI as Yt, yz as Z, $M as Zn, UI as Zt, EH as _, WP as _n, gl as _r, KR as _t, YU as a, pI as an, Jv as ar, rz as at, bH as b, MP as bn, sl as br, zR as bt, jU as c, aI as cn, ld as cr, $R as ct, OU as d, JF as dn, nd as dr, MR as dt, HI as en, OM as er, Sz as et, _U as f, xF as fn, td as fr, jR as ft, NH as g, tF as gn, _l as gr, BR as gt, MH as h, aF as hn, Ku as hr, VR as ht, XU as i, _I as in, lk as ir, az as it, JV as j, fP as jn, G as jr, HL as jt, QV as k, cP as kn, Y as kr, AL as kt, NU as l, iI as ln, sd as lr, YR as lt, AH as m, oF as mn, Zu as mr, HR as mt, ZU as n, wI as nn, Bk as nr, lz as nt, UU as o, hI as on, Tf as or, iz as ot, jH as p, bF as pn, $u as pr, UR as pt, Tz as q, hN as qn, aL as qt, GU as r, CI as rn, uk as rr, uz as rt, MU as s, mI as sn, ud as sr, ez as st, QU as t, EI as tn, lA as tr, Cz as tt, kU as u, rI as un, ad as ur, XR as ut, TH as v, RP as vn, ol as vr, RR as vt, uH as w, lP as wn, Ec as wr, XL as wt, gH as x, DP as xn, il as xr, lR as xt, xH as y, LP as yn, al as yr, FR as yt, mB as z, KN as zn, z as zr, pL as zt };
