"use client";
import * as e from "react";
import t, { Children as n, Component as r, Fragment as i, cloneElement as a, createContext as o, createElement as s, forwardRef as c, isValidElement as l, startTransition as u, useCallback as d, useContext as f, useEffect as p, useId as m, useImperativeHandle as h, useLayoutEffect as g, useMemo as _, useReducer as v, useRef as y, useState as b, useSyncExternalStore as x } from "react";
import { Fragment as S, jsx as C, jsxs as w } from "react/jsx-runtime";
import { createPortal as T } from "react-dom";
//#region \0rolldown/runtime.js
var E = Object.create, D = Object.defineProperty, O = Object.getOwnPropertyDescriptor, k = Object.getOwnPropertyNames, A = Object.getPrototypeOf, j = Object.prototype.hasOwnProperty, M = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), N = (e, t) => {
	let n = {};
	for (var r in e) D(n, r, {
		get: e[r],
		enumerable: !0
	});
	return t || D(n, Symbol.toStringTag, { value: "Module" }), n;
}, P = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = k(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !j.call(e, s) && s !== n && D(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = O(t, s)) || r.enumerable
	});
	return e;
}, F = (e, t, n) => (n = e == null ? {} : E(A(e)), P(t || !e || !e.__esModule ? D(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), I = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), ee = e.use, L = typeof window < "u" ? e.useLayoutEffect : e.useEffect;
function R(t) {
	let n = e.useRef({
		value: t,
		prev: null
	}), r = n.current.value;
	return t !== r && (n.current = {
		value: t,
		prev: r
	}), n.current.prev;
}
function z(t, n, r = {}, i = {}) {
	e.useEffect(() => {
		if (!t.current || i.disabled || typeof IntersectionObserver != "function") return;
		let e = new IntersectionObserver(([e]) => {
			n(e);
		}, r);
		return e.observe(t.current), () => {
			e.disconnect();
		};
	}, [
		n,
		r,
		i.disabled,
		t
	]);
}
function B(t) {
	let n = e.useRef(null);
	return e.useImperativeHandle(t, () => n.current, []), n;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/routerContext.js
var V = e.createContext(null);
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouter.js
function H(t) {
	let n = e.useContext(V);
	return process.env.NODE_ENV !== "production" && (t?.warn ?? !0) && !n && console.warn("Warning: useRouter must be used inside a <RouterProvider> component!"), n;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useNavigate.js
function U(t) {
	let n = H();
	return e.useCallback((e) => n.navigate({
		...e,
		from: e.from ?? t?.from
	}), [t?.from, n]);
}
//#endregion
//#region ../../node_modules/tailwind-merge/dist/bundle-mjs.mjs
var W = (e, t) => {
	let n = Array(e.length + t.length);
	for (let t = 0; t < e.length; t++) n[t] = e[t];
	for (let r = 0; r < t.length; r++) n[e.length + r] = t[r];
	return n;
}, G = (e, t) => ({
	classGroupId: e,
	validator: t
}), K = (e = /* @__PURE__ */ new Map(), t = null, n) => ({
	nextPart: e,
	validators: t,
	classGroupId: n
}), te = "-", ne = [], re = "arbitrary..", q = (e) => {
	let t = oe(e), { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
	return {
		getClassGroupId: (e) => {
			if (e.startsWith("[") && e.endsWith("]")) return ae(e);
			let n = e.split(te);
			return ie(n, +(n[0] === "" && n.length > 1), t);
		},
		getConflictingClassGroupIds: (e, t) => {
			if (t) {
				let t = r[e], i = n[e];
				return t ? i ? W(i, t) : t : i || ne;
			}
			return n[e] || ne;
		}
	};
}, ie = (e, t, n) => {
	if (e.length - t === 0) return n.classGroupId;
	let r = e[t], i = n.nextPart.get(r);
	if (i) {
		let n = ie(e, t + 1, i);
		if (n) return n;
	}
	let a = n.validators;
	if (a === null) return;
	let o = t === 0 ? e.join(te) : e.slice(t).join(te), s = a.length;
	for (let e = 0; e < s; e++) {
		let t = a[e];
		if (t.validator(o)) return t.classGroupId;
	}
}, ae = (e) => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
	let t = e.slice(1, -1), n = t.indexOf(":"), r = t.slice(0, n);
	return r ? re + r : void 0;
})(), oe = (e) => {
	let { theme: t, classGroups: n } = e;
	return se(n, t);
}, se = (e, t) => {
	let n = K();
	for (let r in e) {
		let i = e[r];
		ce(i, n, r, t);
	}
	return n;
}, ce = (e, t, n, r) => {
	let i = e.length;
	for (let a = 0; a < i; a++) {
		let i = e[a];
		le(i, t, n, r);
	}
}, le = (e, t, n, r) => {
	if (typeof e == "string") {
		ue(e, t, n);
		return;
	}
	if (typeof e == "function") {
		de(e, t, n, r);
		return;
	}
	fe(e, t, n, r);
}, ue = (e, t, n) => {
	let r = e === "" ? t : pe(t, e);
	r.classGroupId = n;
}, de = (e, t, n, r) => {
	if (me(e)) {
		ce(e(r), t, n, r);
		return;
	}
	t.validators === null && (t.validators = []), t.validators.push(G(n, e));
}, fe = (e, t, n, r) => {
	let i = Object.entries(e), a = i.length;
	for (let e = 0; e < a; e++) {
		let [a, o] = i[e];
		ce(o, pe(t, a), n, r);
	}
}, pe = (e, t) => {
	let n = e, r = t.split(te), i = r.length;
	for (let e = 0; e < i; e++) {
		let t = r[e], i = n.nextPart.get(t);
		i || (i = K(), n.nextPart.set(t, i)), n = i;
	}
	return n;
}, me = (e) => "isThemeGetter" in e && e.isThemeGetter === !0, he = (e) => {
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
}, ge = "!", _e = ":", ve = [], ye = (e, t, n, r, i) => ({
	modifiers: e,
	hasImportantModifier: t,
	baseClassName: n,
	maybePostfixModifierPosition: r,
	isExternal: i
}), be = (e) => {
	let { prefix: t, experimentalParseClassName: n } = e, r = (e) => {
		let t = [], n = 0, r = 0, i = 0, a, o = e.length;
		for (let s = 0; s < o; s++) {
			let o = e[s];
			if (n === 0 && r === 0) {
				if (o === _e) {
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
		s.endsWith(ge) ? (c = s.slice(0, -1), l = !0) : s.startsWith(ge) && (c = s.slice(1), l = !0);
		let u = a && a > i ? a - i : void 0;
		return ye(t, l, c, u);
	};
	if (t) {
		let e = t + _e, n = r;
		r = (t) => t.startsWith(e) ? n(t.slice(e.length)) : ye(ve, !1, t, void 0, !0);
	}
	if (n) {
		let e = r;
		r = (t) => n({
			className: t,
			parseClassName: e
		});
	}
	return r;
}, xe = (e) => {
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
}, Se = (e) => ({
	cache: he(e.cacheSize),
	parseClassName: be(e),
	sortModifiers: xe(e),
	...q(e)
}), Ce = /\s+/, we = (e, t) => {
	let { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: i, sortModifiers: a } = t, o = [], s = e.trim().split(Ce), c = "";
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
		let g = u.length === 0 ? "" : u.length === 1 ? u[0] : a(u).join(":"), _ = d ? g + ge : g, v = _ + h;
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
}, J = (...e) => {
	let t = 0, n, r, i = "";
	for (; t < e.length;) (n = e[t++]) && (r = Te(n)) && (i && (i += " "), i += r);
	return i;
}, Te = (e) => {
	if (typeof e == "string") return e;
	let t, n = "";
	for (let r = 0; r < e.length; r++) e[r] && (t = Te(e[r])) && (n && (n += " "), n += t);
	return n;
}, Ee = (e, ...t) => {
	let n, r, i, a, o = (o) => (n = Se(t.reduce((e, t) => t(e), e())), r = n.cache.get, i = n.cache.set, a = s, s(o)), s = (e) => {
		let t = r(e);
		if (t) return t;
		let a = we(e, n);
		return i(e, a), a;
	};
	return a = o, (...e) => a(J(...e));
}, De = [], Oe = (e) => {
	let t = (t) => t[e] || De;
	return t.isThemeGetter = !0, t;
}, ke = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ae = /^\((?:(\w[\w-]*):)?(.+)\)$/i, je = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Me = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ne = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Pe = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Fe = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ie = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Le = (e) => je.test(e), Y = (e) => !!e && !Number.isNaN(Number(e)), Re = (e) => !!e && Number.isInteger(Number(e)), ze = (e) => e.endsWith("%") && Y(e.slice(0, -1)), Be = (e) => Me.test(e), Ve = () => !0, He = (e) => Ne.test(e) && !Pe.test(e), Ue = () => !1, We = (e) => Fe.test(e), Ge = (e) => Ie.test(e), Ke = (e) => !X(e) && !Z(e), qe = (e) => ct(e, ft, Ue), X = (e) => ke.test(e), Je = (e) => ct(e, pt, He), Ye = (e) => ct(e, mt, Y), Xe = (e) => ct(e, gt, Ve), Ze = (e) => ct(e, ht, Ue), Qe = (e) => ct(e, ut, Ue), $e = (e) => ct(e, dt, Ge), et = (e) => ct(e, _t, We), Z = (e) => Ae.test(e), tt = (e) => lt(e, pt), nt = (e) => lt(e, ht), rt = (e) => lt(e, ut), it = (e) => lt(e, ft), at = (e) => lt(e, dt), ot = (e) => lt(e, _t, !0), st = (e) => lt(e, gt, !0), ct = (e, t, n) => {
	let r = ke.exec(e);
	return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, lt = (e, t, n = !1) => {
	let r = Ae.exec(e);
	return r ? r[1] ? t(r[1]) : n : !1;
}, ut = (e) => e === "position" || e === "percentage", dt = (e) => e === "image" || e === "url", ft = (e) => e === "length" || e === "size" || e === "bg-size", pt = (e) => e === "length", mt = (e) => e === "number", ht = (e) => e === "family-name", gt = (e) => e === "number" || e === "weight", _t = (e) => e === "shadow", Q = /* @__PURE__ */ Ee(() => {
	let e = Oe("color"), t = Oe("font"), n = Oe("text"), r = Oe("font-weight"), i = Oe("tracking"), a = Oe("leading"), o = Oe("breakpoint"), s = Oe("container"), c = Oe("spacing"), l = Oe("radius"), u = Oe("shadow"), d = Oe("inset-shadow"), f = Oe("text-shadow"), p = Oe("drop-shadow"), m = Oe("blur"), h = Oe("perspective"), g = Oe("aspect"), _ = Oe("ease"), v = Oe("animate"), y = () => [
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
		Le,
		"full",
		"auto",
		...w()
	], E = () => [
		Re,
		"none",
		"subgrid",
		Z,
		X
	], D = () => [
		"auto",
		{ span: [
			"full",
			Re,
			Z,
			X
		] },
		Re,
		Z,
		X
	], O = () => [
		Re,
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
	], A = () => [
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
	], j = () => [
		"start",
		"end",
		"center",
		"stretch",
		"center-safe",
		"end-safe"
	], M = () => ["auto", ...w()], N = () => [
		Le,
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
	], P = () => [
		Le,
		"screen",
		"full",
		"dvw",
		"lvw",
		"svw",
		"min",
		"max",
		"fit",
		...w()
	], F = () => [
		Le,
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
	], I = () => [
		e,
		Z,
		X
	], ee = () => [
		...b(),
		rt,
		Qe,
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
		it,
		qe,
		{ size: [Z, X] }
	], z = () => [
		ze,
		tt,
		Je
	], B = () => [
		"",
		"none",
		"full",
		l,
		Z,
		X
	], V = () => [
		"",
		Y,
		tt,
		Je
	], H = () => [
		"solid",
		"dashed",
		"dotted",
		"double"
	], U = () => [
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
	], W = () => [
		Y,
		ze,
		rt,
		Qe
	], G = () => [
		"",
		"none",
		m,
		Z,
		X
	], K = () => [
		"none",
		Y,
		Z,
		X
	], te = () => [
		"none",
		Y,
		Z,
		X
	], ne = () => [
		Y,
		Z,
		X
	], re = () => [
		Le,
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
			blur: [Be],
			breakpoint: [Be],
			color: [Ve],
			container: [Be],
			"drop-shadow": [Be],
			ease: [
				"in",
				"out",
				"in-out"
			],
			font: [Ke],
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
			"inset-shadow": [Be],
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
			radius: [Be],
			shadow: [Be],
			spacing: ["px", Y],
			text: [Be],
			"text-shadow": [Be],
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
				Le,
				X,
				Z,
				g
			] }],
			container: ["container"],
			columns: [{ columns: [
				Y,
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
				Re,
				"auto",
				Z,
				X
			] }],
			basis: [{ basis: [
				Le,
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
				Y,
				Le,
				"auto",
				"initial",
				"none",
				X
			] }],
			grow: [{ grow: [
				"",
				Y,
				Z,
				X
			] }],
			shrink: [{ shrink: [
				"",
				Y,
				Z,
				X
			] }],
			order: [{ order: [
				Re,
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
			"justify-content": [{ justify: [...A(), "normal"] }],
			"justify-items": [{ "justify-items": [...j(), "normal"] }],
			"justify-self": [{ "justify-self": ["auto", ...j()] }],
			"align-content": [{ content: ["normal", ...A()] }],
			"align-items": [{ items: [...j(), { baseline: ["", "last"] }] }],
			"align-self": [{ self: [
				"auto",
				...j(),
				{ baseline: ["", "last"] }
			] }],
			"place-content": [{ "place-content": A() }],
			"place-items": [{ "place-items": [...j(), "baseline"] }],
			"place-self": [{ "place-self": ["auto", ...j()] }],
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
			m: [{ m: M() }],
			mx: [{ mx: M() }],
			my: [{ my: M() }],
			ms: [{ ms: M() }],
			me: [{ me: M() }],
			mbs: [{ mbs: M() }],
			mbe: [{ mbe: M() }],
			mt: [{ mt: M() }],
			mr: [{ mr: M() }],
			mb: [{ mb: M() }],
			ml: [{ ml: M() }],
			"space-x": [{ "space-x": w() }],
			"space-x-reverse": ["space-x-reverse"],
			"space-y": [{ "space-y": w() }],
			"space-y-reverse": ["space-y-reverse"],
			size: [{ size: N() }],
			"inline-size": [{ inline: ["auto", ...P()] }],
			"min-inline-size": [{ "min-inline": ["auto", ...P()] }],
			"max-inline-size": [{ "max-inline": ["none", ...P()] }],
			"block-size": [{ block: ["auto", ...F()] }],
			"min-block-size": [{ "min-block": ["auto", ...F()] }],
			"max-block-size": [{ "max-block": ["none", ...F()] }],
			w: [{ w: [
				s,
				"screen",
				...N()
			] }],
			"min-w": [{ "min-w": [
				s,
				"screen",
				"none",
				...N()
			] }],
			"max-w": [{ "max-w": [
				s,
				"screen",
				"none",
				"prose",
				{ screen: [o] },
				...N()
			] }],
			h: [{ h: [
				"screen",
				"lh",
				...N()
			] }],
			"min-h": [{ "min-h": [
				"screen",
				"lh",
				"none",
				...N()
			] }],
			"max-h": [{ "max-h": [
				"screen",
				"lh",
				...N()
			] }],
			"font-size": [{ text: [
				"base",
				n,
				tt,
				Je
			] }],
			"font-smoothing": ["antialiased", "subpixel-antialiased"],
			"font-style": ["italic", "not-italic"],
			"font-weight": [{ font: [
				r,
				st,
				Xe
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
				ze,
				X
			] }],
			"font-family": [{ font: [
				nt,
				Ze,
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
				Y,
				"none",
				Z,
				Ye
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
			"placeholder-color": [{ placeholder: I() }],
			"text-color": [{ text: I() }],
			"text-decoration": [
				"underline",
				"overline",
				"line-through",
				"no-underline"
			],
			"text-decoration-style": [{ decoration: [...H(), "wavy"] }],
			"text-decoration-thickness": [{ decoration: [
				Y,
				"from-font",
				"auto",
				Z,
				Je
			] }],
			"text-decoration-color": [{ decoration: I() }],
			"underline-offset": [{ "underline-offset": [
				Y,
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
			"bg-position": [{ bg: ee() }],
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
						Re,
						Z,
						X
					],
					radial: [
						"",
						Z,
						X
					],
					conic: [
						Re,
						Z,
						X
					]
				},
				at,
				$e
			] }],
			"bg-color": [{ bg: I() }],
			"gradient-from-pos": [{ from: z() }],
			"gradient-via-pos": [{ via: z() }],
			"gradient-to-pos": [{ to: z() }],
			"gradient-from": [{ from: I() }],
			"gradient-via": [{ via: I() }],
			"gradient-to": [{ to: I() }],
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
			"border-color": [{ border: I() }],
			"border-color-x": [{ "border-x": I() }],
			"border-color-y": [{ "border-y": I() }],
			"border-color-s": [{ "border-s": I() }],
			"border-color-e": [{ "border-e": I() }],
			"border-color-bs": [{ "border-bs": I() }],
			"border-color-be": [{ "border-be": I() }],
			"border-color-t": [{ "border-t": I() }],
			"border-color-r": [{ "border-r": I() }],
			"border-color-b": [{ "border-b": I() }],
			"border-color-l": [{ "border-l": I() }],
			"divide-color": [{ divide: I() }],
			"outline-style": [{ outline: [
				...H(),
				"none",
				"hidden"
			] }],
			"outline-offset": [{ "outline-offset": [
				Y,
				Z,
				X
			] }],
			"outline-w": [{ outline: [
				"",
				Y,
				tt,
				Je
			] }],
			"outline-color": [{ outline: I() }],
			shadow: [{ shadow: [
				"",
				"none",
				u,
				ot,
				et
			] }],
			"shadow-color": [{ shadow: I() }],
			"inset-shadow": [{ "inset-shadow": [
				"none",
				d,
				ot,
				et
			] }],
			"inset-shadow-color": [{ "inset-shadow": I() }],
			"ring-w": [{ ring: V() }],
			"ring-w-inset": ["ring-inset"],
			"ring-color": [{ ring: I() }],
			"ring-offset-w": [{ "ring-offset": [Y, Je] }],
			"ring-offset-color": [{ "ring-offset": I() }],
			"inset-ring-w": [{ "inset-ring": V() }],
			"inset-ring-color": [{ "inset-ring": I() }],
			"text-shadow": [{ "text-shadow": [
				"none",
				f,
				ot,
				et
			] }],
			"text-shadow-color": [{ "text-shadow": I() }],
			opacity: [{ opacity: [
				Y,
				Z,
				X
			] }],
			"mix-blend": [{ "mix-blend": [
				...U(),
				"plus-darker",
				"plus-lighter"
			] }],
			"bg-blend": [{ "bg-blend": U() }],
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
			"mask-image-linear-pos": [{ "mask-linear": [Y] }],
			"mask-image-linear-from-pos": [{ "mask-linear-from": W() }],
			"mask-image-linear-to-pos": [{ "mask-linear-to": W() }],
			"mask-image-linear-from-color": [{ "mask-linear-from": I() }],
			"mask-image-linear-to-color": [{ "mask-linear-to": I() }],
			"mask-image-t-from-pos": [{ "mask-t-from": W() }],
			"mask-image-t-to-pos": [{ "mask-t-to": W() }],
			"mask-image-t-from-color": [{ "mask-t-from": I() }],
			"mask-image-t-to-color": [{ "mask-t-to": I() }],
			"mask-image-r-from-pos": [{ "mask-r-from": W() }],
			"mask-image-r-to-pos": [{ "mask-r-to": W() }],
			"mask-image-r-from-color": [{ "mask-r-from": I() }],
			"mask-image-r-to-color": [{ "mask-r-to": I() }],
			"mask-image-b-from-pos": [{ "mask-b-from": W() }],
			"mask-image-b-to-pos": [{ "mask-b-to": W() }],
			"mask-image-b-from-color": [{ "mask-b-from": I() }],
			"mask-image-b-to-color": [{ "mask-b-to": I() }],
			"mask-image-l-from-pos": [{ "mask-l-from": W() }],
			"mask-image-l-to-pos": [{ "mask-l-to": W() }],
			"mask-image-l-from-color": [{ "mask-l-from": I() }],
			"mask-image-l-to-color": [{ "mask-l-to": I() }],
			"mask-image-x-from-pos": [{ "mask-x-from": W() }],
			"mask-image-x-to-pos": [{ "mask-x-to": W() }],
			"mask-image-x-from-color": [{ "mask-x-from": I() }],
			"mask-image-x-to-color": [{ "mask-x-to": I() }],
			"mask-image-y-from-pos": [{ "mask-y-from": W() }],
			"mask-image-y-to-pos": [{ "mask-y-to": W() }],
			"mask-image-y-from-color": [{ "mask-y-from": I() }],
			"mask-image-y-to-color": [{ "mask-y-to": I() }],
			"mask-image-radial": [{ "mask-radial": [Z, X] }],
			"mask-image-radial-from-pos": [{ "mask-radial-from": W() }],
			"mask-image-radial-to-pos": [{ "mask-radial-to": W() }],
			"mask-image-radial-from-color": [{ "mask-radial-from": I() }],
			"mask-image-radial-to-color": [{ "mask-radial-to": I() }],
			"mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
			"mask-image-radial-size": [{ "mask-radial": [{
				closest: ["side", "corner"],
				farthest: ["side", "corner"]
			}] }],
			"mask-image-radial-pos": [{ "mask-radial-at": b() }],
			"mask-image-conic-pos": [{ "mask-conic": [Y] }],
			"mask-image-conic-from-pos": [{ "mask-conic-from": W() }],
			"mask-image-conic-to-pos": [{ "mask-conic-to": W() }],
			"mask-image-conic-from-color": [{ "mask-conic-from": I() }],
			"mask-image-conic-to-color": [{ "mask-conic-to": I() }],
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
			"mask-position": [{ mask: ee() }],
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
			blur: [{ blur: G() }],
			brightness: [{ brightness: [
				Y,
				Z,
				X
			] }],
			contrast: [{ contrast: [
				Y,
				Z,
				X
			] }],
			"drop-shadow": [{ "drop-shadow": [
				"",
				"none",
				p,
				ot,
				et
			] }],
			"drop-shadow-color": [{ "drop-shadow": I() }],
			grayscale: [{ grayscale: [
				"",
				Y,
				Z,
				X
			] }],
			"hue-rotate": [{ "hue-rotate": [
				Y,
				Z,
				X
			] }],
			invert: [{ invert: [
				"",
				Y,
				Z,
				X
			] }],
			saturate: [{ saturate: [
				Y,
				Z,
				X
			] }],
			sepia: [{ sepia: [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-filter": [{ "backdrop-filter": [
				"",
				"none",
				Z,
				X
			] }],
			"backdrop-blur": [{ "backdrop-blur": G() }],
			"backdrop-brightness": [{ "backdrop-brightness": [
				Y,
				Z,
				X
			] }],
			"backdrop-contrast": [{ "backdrop-contrast": [
				Y,
				Z,
				X
			] }],
			"backdrop-grayscale": [{ "backdrop-grayscale": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-hue-rotate": [{ "backdrop-hue-rotate": [
				Y,
				Z,
				X
			] }],
			"backdrop-invert": [{ "backdrop-invert": [
				"",
				Y,
				Z,
				X
			] }],
			"backdrop-opacity": [{ "backdrop-opacity": [
				Y,
				Z,
				X
			] }],
			"backdrop-saturate": [{ "backdrop-saturate": [
				Y,
				Z,
				X
			] }],
			"backdrop-sepia": [{ "backdrop-sepia": [
				"",
				Y,
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
				Y,
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
				Y,
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
			rotate: [{ rotate: K() }],
			"rotate-x": [{ "rotate-x": K() }],
			"rotate-y": [{ "rotate-y": K() }],
			"rotate-z": [{ "rotate-z": K() }],
			scale: [{ scale: te() }],
			"scale-x": [{ "scale-x": te() }],
			"scale-y": [{ "scale-y": te() }],
			"scale-z": [{ "scale-z": te() }],
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
			accent: [{ accent: I() }],
			appearance: [{ appearance: ["none", "auto"] }],
			"caret-color": [{ caret: I() }],
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
			fill: [{ fill: ["none", ...I()] }],
			"stroke-w": [{ stroke: [
				Y,
				tt,
				Je,
				Ye
			] }],
			stroke: [{ stroke: ["none", ...I()] }],
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
}), vt = 8, yt = 12, bt = 0, xt = 0, St = 60, Ct = "(any-hover: hover)", wt = "pc:hover-tooltip-dismiss", Tt = () => {
	typeof document > "u" || document.dispatchEvent(new Event(wt));
}, Et = {
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
}, Dt = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, Ot = () => typeof window > "u" || typeof window.matchMedia != "function" ? !0 : window.matchMedia(Ct).matches, kt = (e, t, n) => e < t ? t : e > n ? n : e, At = (e, t) => {
	if (!e) return t;
	let n = new Set(e.split(/\s+/).filter(Boolean));
	return n.add(t), Array.from(n).join(" ");
}, jt = (e, t, n, r) => {
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
}, Mt = (e, t, n) => e.top >= vt && e.left >= vt && e.top + e.height <= n - vt && e.left + e.width <= t - vt, Nt = (e, t, n) => {
	let r = Math.max(vt, n - vt - e.height), i = Math.max(vt, t - vt - e.width);
	return {
		...e,
		top: kt(e.top, vt, r),
		left: kt(e.left, vt, i)
	};
};
function Pt({ children: e, label: t, placement: n = "bottom", positionMode: r = "anchor", cursorPoint: i = null, offset: o = yt, disabled: s = !1, lockVisible: c = !1, portalContainer: u = null }) {
	let f = Dt(t), [h, v] = b(Ot), x = !s && !!f && h, E = m(), [D, O] = b(null), k = y(null), [A, j] = b(!1), [M, N] = b(!1), [P, F] = b(null), [I, ee] = b(null), L = y(null), R = y(!1), z = y(!1), B = y(null), V = y(null), H = y(null);
	p(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia(Ct), t = () => {
			v(e.matches);
		};
		if (t(), typeof e.addEventListener == "function") return e.addEventListener("change", t), () => {
			e.removeEventListener("change", t);
		};
		let n = e.onchange;
		return e.onchange = t, () => {
			e.onchange === t && (e.onchange = n);
		};
	}, []);
	let U = d(() => {
		B.current !== null && (window.clearTimeout(B.current), B.current = null);
	}, []), W = d(() => {
		V.current !== null && (window.clearTimeout(V.current), V.current = null);
	}, []), G = d(() => {
		H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null);
	}, []), K = d(() => {
		typeof window > "u" || (U(), W(), G());
	}, [
		G,
		W,
		U
	]), te = d((e = 0) => {
		if (typeof window > "u") {
			N(!1);
			return;
		}
		U(), G(), W(), V.current = window.setTimeout(() => {
			N(!1), V.current = null;
		}, e);
	}, [
		G,
		W,
		U
	]), ne = d((e = 0) => {
		c || te(e);
	}, [c, te]), re = d((e = 0) => {
		if (x) {
			if (typeof window > "u") {
				j(!0), N(!0);
				return;
			}
			W(), U(), G(), B.current = window.setTimeout(() => {
				j(!0), H.current = window.requestAnimationFrame(() => {
					N(!0), H.current = null;
				}), B.current = null;
			}, e);
		}
	}, [
		G,
		W,
		U,
		x
	]);
	p(() => () => {
		K();
	}, [K]), p(() => {
		x || (K(), N(!1), j(!1), O(null), R.current = !1, z.current = !1, ee(null), F(null));
	}, [K, x]), p(() => {
		if (!A || M) return;
		let e = window.setTimeout(() => {
			j(!1), O(null), L.current = null, ee(null), F(null);
		}, St);
		return () => {
			window.clearTimeout(e);
		};
	}, [A, M]);
	let q = d(() => {
		if (!A || typeof window > "u") return;
		let e = k.current;
		if (!D || !e) return;
		let t = r === "cursor" ? i ?? I ?? L.current : null, a = r === "cursor" && t ? {
			x: t.x,
			y: t.y,
			top: t.y,
			right: t.x,
			bottom: t.y,
			left: t.x,
			width: 0,
			height: 0,
			toJSON: () => ({})
		} : D.getBoundingClientRect(), s = e.getBoundingClientRect(), c = window.innerWidth, l = window.innerHeight, u = Et[n], d = null;
		for (let e of u) {
			let t = jt(a, s, e, o);
			if (Mt(t, c, l)) {
				d = {
					top: t.top,
					left: t.left,
					placement: e
				};
				break;
			}
		}
		if (!d) {
			let e = Nt(jt(a, s, n, o), c, l);
			d = {
				top: e.top,
				left: e.left,
				placement: n
			};
		}
		F((e) => e && e.top === d.top && e.left === d.left && e.placement === d.placement ? e : d);
	}, [
		D,
		I,
		i,
		A,
		o,
		n,
		r
	]);
	g(() => {
		A && q();
	}, [A, q]), p(() => {
		if (!A) return;
		let e = () => {
			q();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [A, q]), p(() => {
		if (!M) return;
		let e = (e) => {
			e.key === "Escape" && ne();
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [ne, M]), p(() => {
		if (c) {
			W(), (A || M) && (j(!0), N(!0));
			return;
		}
		M && (R.current || z.current || te());
	}, [
		W,
		A,
		M,
		c,
		te
	]), p(() => {
		if (typeof document > "u") return;
		let e = () => {
			te();
		};
		return document.addEventListener(wt, e), () => {
			document.removeEventListener(wt, e);
		};
	}, [te]);
	let ie = _(() => typeof document > "u" ? null : u ?? document.body, [u]);
	if (!x || !l(e)) return e;
	let ae = e, oe = ae.props, se = r === "cursor" && i === null, ce = a(ae, {
		onMouseEnter: (e) => {
			if (oe.onMouseEnter?.(e), !e.defaultPrevented) {
				if (R.current = !0, O(e.currentTarget), se) {
					let t = {
						x: e.clientX,
						y: e.clientY
					};
					L.current = t, ee(t);
				}
				re(bt);
			}
		},
		onMouseMove: (e) => {
			if (oe.onMouseMove?.(e), !e.defaultPrevented) {
				if (R.current = !0, D || O(e.currentTarget), se) {
					let t = {
						x: e.clientX,
						y: e.clientY
					};
					L.current = t, ee(t);
				}
				M || re(bt);
			}
		},
		onMouseLeave: (e) => {
			oe.onMouseLeave?.(e), R.current = !1, ne(xt);
		},
		onFocus: (e) => {
			if (oe.onFocus?.(e), e.defaultPrevented) return;
			let t = e.currentTarget;
			typeof t.matches == "function" && !t.matches(":focus-visible") || (O(t), z.current = !0, L.current = null, ee(null), re());
		},
		onBlur: (e) => {
			oe.onBlur?.(e), z.current = !1, ne();
		},
		"aria-describedby": M ? At(oe["aria-describedby"], E) : oe["aria-describedby"]
	}), le = P?.placement ?? n;
	return /* @__PURE__ */ w(S, { children: [ce, A && ie ? T(/* @__PURE__ */ C("div", {
		id: E,
		ref: k,
		role: "tooltip",
		"data-placement": le,
		className: J("pointer-events-none fixed z-[2200]", "max-w-[calc(100vw-16px)] whitespace-nowrap rounded-[var(--pc-radius-md)] px-3 py-1 text-base font-medium", "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)]", "transition-[opacity,transform] duration-60 ease-out motion-reduce:transition-none motion-reduce:transform-none", M ? "opacity-100 scale-100 translate-x-0 translate-y-0" : J("opacity-0 scale-95", le === "top" ? "translate-y-0.5" : le === "bottom" ? "-translate-y-0.5" : le === "left" ? "translate-x-0.5" : "-translate-x-0.5")),
		style: {
			top: P?.top ?? -9999,
			left: P?.left ?? -9999
		},
		children: f
	}), ie) : null] });
}
//#endregion
//#region ../ui/src/lib/icons/LoaderIcon.tsx
function Ft({ className: e } = {}) {
	return /* @__PURE__ */ C("span", {
		"aria-hidden": "true",
		className: Q("inline-block h-4 w-4 animate-spin rounded-[var(--pc-radius-full)] border-2 border-current border-t-transparent align-middle", e)
	});
}
//#endregion
//#region ../ui/src/lib/buttonPrimitives.ts
var It = {
	xl: "px-6 py-3 text-lg",
	lg: "px-5 py-2.5 text-base",
	md: "px-3.5 py-2 text-base",
	sm: "px-3 py-2 text-sm",
	xs: "px-2.5 py-1 text-xs"
}, Lt = {
	xl: "h-12 w-12 p-2 text-lg [&_svg]:h-5 [&_svg]:w-5",
	lg: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	md: "h-10 w-10 p-1.5 text-base [&_svg]:h-[18px] [&_svg]:w-[18px]",
	sm: "h-9 w-9 p-1 text-sm [&_svg]:h-[17px] [&_svg]:w-[17px]",
	xs: "h-7 w-7 p-1 text-xs [&_svg]:h-[16px] [&_svg]:w-[16px]"
}, Rt = It, zt = {
	xl: "pl-2 pr-4 py-3 text-lg",
	lg: "pl-1.5 pr-3 py-2.5 text-base",
	md: "pl-1 pr-2.5 py-1.5 text-base",
	sm: "pl-1.5 pr-2.5 py-2 text-sm",
	xs: "pl-1 pr-2 py-1 text-xs"
}, Bt = J("relative inline-flex items-center justify-center whitespace-nowrap", "cursor-pointer transition-colors duration-200 ease-out", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]", "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2 data-[focus-visible=true]:ring-[var(--pc-color-text)]", "disabled:pointer-events-none disabled:cursor-not-allowed", "data-[disabled=true]:pointer-events-none data-[disabled=true]:cursor-not-allowed", "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "data-[loading=true]:pointer-events-none data-[loading=true]:cursor-wait"), Vt = J("enabled:active:[background:var(--pc-color-surface-strongest)]", "enabled:active:text-[var(--pc-color-text)]", "data-[touch-active=true]:[background:var(--pc-color-surface-strongest)]", "data-[touch-active=true]:text-[var(--pc-color-text)]"), Ht = J("data-[active=true]:[background:var(--pc-color-surface-strongest)]", "data-[active=true]:text-[var(--pc-color-text)]"), Ut = {
	solid: J("bg-[var(--pc-color-surface)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", Vt, Ht, "disabled:[background:var(--pc-color-surface-weakest)]", "disabled:text-[var(--pc-color-text-muted)]"),
	ghost: J("bg-transparent text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", "enabled:hover:text-[var(--pc-color-text)]", Vt, Ht, "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "disabled:[background:var(--pc-color-surface-weakest)]"),
	outline: J("border border-[var(--pc-color-text)] bg-[var(--pc-color-outline-surface,transparent)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", "enabled:hover:text-[var(--pc-color-text)]", Vt, Ht, "data-[loading=true]:[background:var(--pc-color-surface-weakest)]", "disabled:[background:var(--pc-color-surface-weakest)]"),
	muted: J("bg-[var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]", "enabled:hover:[background:var(--pc-color-surface-weaker)]", Vt, Ht, "disabled:[background:var(--pc-color-surface-weakest)]", "disabled:text-[var(--pc-color-text-muted)]")
}, Wt = {
	solid: "data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]",
	ghost: J("data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]", "data-[split-hover=true]:text-[var(--pc-color-text)]"),
	outline: J("data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]", "data-[split-hover=true]:text-[var(--pc-color-text)]"),
	muted: "data-[split-hover=true]:[background:var(--pc-color-surface-weaker)]"
}, Gt = {
	solid: J("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	ghost: J("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	outline: J("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]"),
	muted: J("data-[split-press=true]:[background:var(--pc-color-surface-strongest)]", "data-[split-press=true]:text-[var(--pc-color-text)]")
}, Kt = J(Bt, "rounded-[var(--pc-radius-3xl)] font-medium"), qt = J(Bt, "font-medium"), Jt = J(qt, "rounded-l-[var(--pc-radius-3xl)]"), Yt = J(qt, "rounded-r-[var(--pc-radius-3xl)]"), Xt = (e) => Ut[e], Zt = (e) => Wt[e], Qt = (e) => Gt[e], $t = (e, t = !1) => t ? Lt[e] : It[e], en = (e) => e ? "true" : void 0, tn = ({ disabled: e = !1, loading: t = !1 }) => e || t, nn = ({ loading: e, iconOnly: t = !1 }) => J("relative z-[1] inline-flex items-center justify-center", t ? "gap-1" : "gap-2", e ? "opacity-0" : "opacity-100"), rn = (e) => e === !0 ? "true" : void 0, an = (e) => e === !0 || e === "true", on = (e) => {
	if (an(e)) return "true";
}, sn = (e) => e && e !== "default" ? e : void 0, cn = (e) => {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}, ln = (e) => sn(e), un = c(function({ label: e, variant: t = "secondary", appearance: n = "solid", size: r = "md", className: i, fullWidth: a = !1, loading: o = !1, iconOnly: s = !1, showTooltip: c, tooltipLabel: l, tooltipPlacement: u = "bottom", leadingIcon: d, trailingIcon: f, edgeAlignedIcon: p = !1, toggled: m, type: h = "button", disabled: g, "aria-label": _, title: v, ...y }, b) {
	let x = tn({
		disabled: g === !0,
		loading: o
	}), S = ln(t), T = rn(m), E = on(y["aria-expanded"]), D = an(y["data-touch-active"]), O = en(an(y["data-active"]) || T === "true" || E === "true"), k = en(D), A = cn(l) ?? cn(_) ?? cn(e) ?? cn(v), j = !!(f && a && !s && !d), M = !!(d && p && a && !s && !f), N = M || j, P = M && p === "below-sm", F = P ? "sm:inline-flex sm:w-auto sm:grid-cols-none sm:justify-center sm:gap-2" : void 0, I = P && !f ? "sm:hidden" : void 0, ee = (c ?? s) && s && !x && A !== void 0, L = Q(Kt, Xt(n), $t(r, s), a && !s && "w-full", s && "aspect-square", i), R = s ? _ ?? e : _, z = /* @__PURE__ */ w("button", {
		ref: b,
		...y,
		type: h,
		disabled: x,
		"aria-busy": o ? !0 : void 0,
		"aria-pressed": m === void 0 ? void 0 : m,
		"aria-label": R,
		title: ee ? void 0 : v,
		className: L,
		"data-theme": S,
		"data-loading": en(o),
		"data-disabled": en(x),
		"data-touch-active": k,
		"data-active": O,
		"data-toggled": T,
		"data-expanded": E,
		"data-icon-only": en(s),
		children: [o && /* @__PURE__ */ C("span", {
			className: "absolute inset-0 z-20 flex items-center justify-center",
			"aria-hidden": "true",
			children: /* @__PURE__ */ C(Ft, {})
		}), N ? /* @__PURE__ */ w("span", {
			className: J("relative z-[1] grid w-full grid-cols-[1fr_auto_1fr] items-center", F, o ? "opacity-0" : "opacity-100"),
			children: [
				/* @__PURE__ */ C("span", {
					className: J("inline-flex items-center justify-self-start", P && "sm:justify-self-auto"),
					"aria-hidden": d ? void 0 : !0,
					children: d
				}),
				/* @__PURE__ */ C("span", {
					className: J("col-start-2", P && "sm:col-auto"),
					children: e
				}),
				/* @__PURE__ */ C("span", {
					className: J("col-start-3 inline-flex items-center justify-self-end", I),
					"aria-hidden": f ? void 0 : !0,
					children: f
				})
			]
		}) : /* @__PURE__ */ w("span", {
			className: nn({
				loading: o,
				iconOnly: s
			}),
			children: [
				d ? /* @__PURE__ */ C("span", {
					className: "inline-flex items-center",
					children: d
				}) : null,
				s ? null : /* @__PURE__ */ C("span", { children: e }),
				f ? /* @__PURE__ */ C("span", {
					className: "inline-flex items-center",
					children: f
				}) : null
			]
		})]
	});
	return ee ? /* @__PURE__ */ C(Pt, {
		label: A,
		placement: u,
		disabled: x,
		children: z
	}) : z;
});
un.displayName = "Button";
//#endregion
//#region ../ui/src/lib/Card.tsx
var dn = {
	neutral: "[background:var(--pc-color-neutral)]",
	neutralDarker: "[background:var(--pc-color-depth-2)]",
	neutralDarkest: "[background:var(--pc-color-depth-3)]",
	surface: "[background:var(--pc-color-surface)]",
	secondary: "[background:var(--pc-color-secondary)]",
	primary: "[background:var(--pc-color-primary)]",
	secondaryInverted: "[background:var(--pc-color-secondary)]",
	secondaryPrimary: "[background:var(--pc-color-secondary)]"
}, fn = {
	neutral: "text-[var(--pc-color-text)]",
	neutralDarker: "text-[var(--pc-color-text)]",
	neutralDarkest: "text-[var(--pc-color-text)]",
	surface: "text-[var(--pc-color-text)]",
	secondary: "text-[var(--pc-color-text-inverted)]",
	primary: "text-[var(--pc-color-text)]",
	secondaryInverted: "text-[var(--pc-color-text-inverted)]",
	secondaryPrimary: "text-[var(--pc-color-primary)]"
}, pn = {
	solid: "",
	ghost: "bg-transparent",
	outline: J("border border-[var(--pc-color-depth-3)]", "[background:var(--pc-color-outline-surface,transparent)]"),
	muted: "[background:var(--pc-color-surface-weakest)]"
}, mn = {
	flush: "rounded-[var(--pc-radius-lg)] p-0",
	compact: "rounded-[var(--pc-radius-lg)] p-2",
	default: "rounded-[var(--pc-radius-lg)] p-4",
	md: "rounded-[var(--pc-radius-lg)] p-5",
	lg: "rounded-[var(--pc-radius-xl)] p-6 sm:p-8 lg:p-10"
};
function hn({ children: e, variant: t = "neutral", size: n = "default", appearance: r = "solid", interactive: i = !1, href: a, as: o = "div", target: s, rel: c, id: l, role: u, tabIndex: d, title: f, ariaLabel: p, ariaDescribedBy: m, ariaLabelledBy: h, overflow: g, className: _, ...v }) {
	let y = g ?? (n === "flush" ? "hidden" : void 0), b = "";
	y === "hidden" && (b = "overflow-hidden"), y === "visible" && (b = "overflow-visible");
	let x = J("block transition-colors duration-150 ease-out", mn[n], fn[t], r === "solid" ? dn[t] : pn[r], b, i || a ? [
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
	return a ? /* @__PURE__ */ C("a", {
		...S,
		href: a,
		target: s,
		rel: c,
		...v,
		children: e
	}) : C(o === "section" ? "section" : o === "article" ? "article" : "div", {
		...S,
		...v,
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/CreditCardLayout.tsx
var gn = "brandless-card", _n = "cubic-bezier(0.22, 1, 0.36, 1)";
function vn({ cardFields: e, details: t, footer: n, reserveFooterSpace: r = !1, dataTheme: i = gn, brandMotionKey: a, className: o, cardFieldsClassName: s, detailsClassName: c, footerClassName: l }) {
	let u = r || n != null, d = i !== "neutral" && i !== gn, f = {
		backgroundImage: d ? [
			"radial-gradient(128% 102% at 12% 10%, color-mix(in oklab, white 22%, transparent) 0%, transparent 44%)",
			"radial-gradient(112% 84% at 90% 13%, color-mix(in oklab, white 12%, transparent) 0%, transparent 38%)",
			"radial-gradient(124% 98% at 78% 88%, color-mix(in oklab, white 7%, transparent) 0%, transparent 50%)",
			"linear-gradient(136deg, color-mix(in oklab, white 9%, transparent) 0%, transparent 48%, color-mix(in oklab, white 5%, transparent) 100%)"
		].join(", ") : "none",
		opacity: d ? .86 : 0,
		transform: d ? "translate3d(1.75%, -1.25%, 0) scale(1.06)" : "translate3d(-2%, 1%, 0) scale(0.98)",
		transition: [`opacity 500ms ${_n}`, `transform 620ms ${_n}`].join(", ")
	}, p = {
		backgroundImage: d ? ["linear-gradient(308deg, transparent 0%, transparent 32%, color-mix(in oklab, white 16%, transparent) 49%, transparent 67%, transparent 100%)", "conic-gradient(from 18deg at 82% 82%, transparent 0deg, color-mix(in oklab, white 7%, transparent) 62deg, transparent 126deg, transparent 360deg)"].join(", ") : "none",
		opacity: d ? .32 : 0,
		transform: d ? "translate3d(-1%, 1.5%, 0) scale(1.04) rotate(0.001deg)" : "translate3d(1.5%, -1%, 0) scale(0.985) rotate(0.001deg)",
		transition: [`opacity 440ms ${_n}`, `transform 580ms ${_n}`].join(", ")
	}, m = {
		backgroundImage: d ? "linear-gradient(105deg, transparent 0%, transparent 38%, color-mix(in oklab, white 18%, transparent) 50%, transparent 62%, transparent 100%)" : "none",
		opacity: 0
	};
	return /* @__PURE__ */ w("div", {
		"data-slot": "credit-card-layout",
		"data-theme": i,
		className: Q(["relative isolate flex w-full min-w-0 flex-col overflow-hidden rounded-[var(--pc-radius-lg)] bg-[var(--pc-color-surface)] pt-1 @xl:pt-2 pr-1 @xl:pr-2 pb-3 @xl:pb-4 pl-1 @xl:pl-2 text-[var(--pc-color-text)]", "transition-[background-color,color,transform] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-colors motion-safe:will-change-[background-color,color,transform]"].filter(Boolean).join(" "), o),
		children: [
			/* @__PURE__ */ C("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-ambient-glow",
				style: f,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ C("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-spotlight-inner",
				style: p,
				className: "pointer-events-none absolute inset-0 z-0"
			}),
			/* @__PURE__ */ C("div", {
				"aria-hidden": "true",
				"data-slot": "credit-card-layout-brand-sheen",
				style: m,
				className: Q("pointer-events-none absolute -inset-x-1 inset-y-0 z-0 mix-blend-screen", d && "pc-card-brand-sheen-enter")
			}, `sheen:${a ?? i}`),
			/* @__PURE__ */ C("div", {
				"data-slot": "credit-card-layout-card-fields",
				className: Q("relative z-10 w-full min-w-0 px-1 pt-2", s),
				children: /* @__PURE__ */ C("div", {
					"data-slot": "credit-card-layout-card-fields-content",
					className: "w-full min-w-0",
					children: e
				})
			}),
			t != null && /* @__PURE__ */ C("div", {
				"data-slot": "credit-card-layout-details",
				className: Q("relative z-10 mt-2 w-full min-w-0 px-1", c),
				children: /* @__PURE__ */ C("div", {
					"data-slot": "credit-card-layout-details-content",
					className: "w-full min-w-0",
					children: t
				})
			}),
			u && /* @__PURE__ */ C("div", {
				"data-slot": "credit-card-layout-footer",
				className: Q("relative z-10 flex min-h-7 items-center justify-end px-1 md:min-h-8", n == null && "invisible", l),
				children: n
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/Section.tsx
var yn = {
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
function bn({ children: e, size: t = "md", spacing: n = "default", fill: r = !1, fillMode: i = "full", grow: a = !1, scroll: o = !1, variant: s, inheritTheme: c = !1, as: l = "section", id: u, role: d, ariaLabel: f, ariaDescribedBy: p, ariaLabelledBy: m }) {
	let h = c ? void 0 : sn(s) ?? "neutral", g = yn[t], _ = J("flex flex-col", n === "flush" ? J("gap-0 p-0", "[--pc-section-edge-inset:0px]", "[--pc-section-edge-offset:0px]") : n === "compact" ? J(g.gapClassName, g.compactPaddingClassName, g.compactPaddingInsetClassName, g.compactPaddingOffsetClassName) : J(g.gapClassName, g.paddingClassName, g.paddingInsetClassName, g.paddingOffsetClassName), (() => {
		if (r) return i === "max" ? J("max-h-full w-full min-h-0 min-w-0", a && "flex-1", !o && "overflow-hidden") : J("h-full w-full min-h-0 min-w-0", a && "flex-1");
	})(), o ? "overflow-y-auto [scrollbar-gutter:stable]" : void 0, g.roundingClassName, g.fontClassName, "text-[var(--pc-color-text)]", "[background:var(--pc-color-surface)]");
	return C(l === "article" ? "article" : l === "div" ? "div" : "section", {
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
var xn = ({ axis: e, element: t }) => {
	let n = Math.ceil(t.scrollWidth) > Math.ceil(t.clientWidth), r = Math.ceil(t.scrollHeight) > Math.ceil(t.clientHeight);
	switch (e) {
		case "horizontal": return n;
		case "vertical": return r;
		default: return n || r;
	}
};
function Sn({ enabled: e = !0, axis: t = "both" } = {}) {
	let [n, r] = b(null), [i, a] = b(!1), o = d((r = n) => {
		if (!e || !r) return a(!1), !1;
		let i = xn({
			axis: t,
			element: r
		});
		return a((e) => e === i ? e : i), i;
	}, [
		t,
		n,
		e
	]), s = d((e) => {
		r(e), o(e);
	}, [o]);
	return p(() => {
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
	]), p(() => {
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
var Cn = {
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
}, wn = {
	solid: "bg-[var(--pc-color-surface)] text-[var(--pc-color-text)]",
	ghost: "bg-transparent text-[var(--pc-color-text)]",
	outline: J("border border-[var(--pc-color-border)]", "bg-[var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-text)]"),
	muted: "bg-[var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]"
}, Tn = "border-b border-[var(--pc-color-border)]", En = {
	xl: "xl",
	lg: "lg",
	md: "md",
	sm: "sm",
	xs: "xs"
}, Dn = {
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
}, On = {
	top: !1,
	right: !1,
	bottom: !1,
	left: !1
}, kn = (e) => En[e], An = (e) => Array.isArray(e), jn = (e) => e === !0 ? {
	top: !0,
	right: !0,
	bottom: !0,
	left: !0
} : !An(e) || e.length === 0 ? On : e.reduce((e, t) => {
	let n = Dn[t];
	return {
		top: e.top || !!n.top,
		right: e.right || !!n.right,
		bottom: e.bottom || !!n.bottom,
		left: e.left || !!n.left
	};
}, On), Mn = (e, t) => {
	let n = jn(t);
	return J(n.top ? "pt-0" : e.padding.top, n.right ? "pr-0" : e.padding.right, n.bottom ? "pb-0" : e.padding.bottom, n.left ? "pl-0" : e.padding.left);
}, Nn = (e) => {
	let t = 0, r = (e) => {
		let i = n.toArray(e);
		return i.length === 0 ? !1 : i.every((e) => {
			if (typeof e == "boolean") return !0;
			if (typeof e == "string" || typeof e == "number") return String(e).trim().length === 0;
			if (!l(e)) return !1;
			let n = e.props;
			return n.iconOnly === !0 || n["data-icon-only"] === !0 || n["data-icon-only"] === "true" ? (t += 1, !0) : "children" in n ? r(n.children) : !1;
		});
	};
	return r(e) && t > 0 ? t : null;
};
function Pn({ className: e, container: t = !0, leadingClassName: n, leadingVisual: r, leadingVisualClassName: i, leadingContentClassName: a, headline: o, headlineId: s, headlineClassName: c, headlineRowClassName: l, subheader: u, subheaderId: f, subheaderClassName: p, startActions: m, actions: h, actionsClassName: g, secondaryActions: v, secondaryActionsClassName: y, inlineActionsClassName: b, size: x = "lg", variant: S = "default", appearance: T = "ghost", flush: E = !1, divider: D = !1, as: O = "header", actionsAlign: k = "centre", headlineTooltip: A }) {
	let j = Cn[x], M = sn(S), N = A?.showWhenOverflowed === !0, { isOverflowed: P, registerElement: F, syncOverflow: I } = Sn({
		enabled: N,
		axis: "horizontal"
	}), ee = d((e) => {
		I(e.currentTarget);
	}, [I]), L = d((e) => {
		I(e.currentTarget);
	}, [I]), R = d((e) => {
		I(e.currentTarget);
	}, [I]), z = _(() => o ? /* @__PURE__ */ C("h2", {
		id: s,
		ref: F,
		className: Q(j.headlineClassName, "inline-block max-w-full align-top", N && "truncate", c),
		onMouseEnter: ee,
		onMouseMove: L,
		onFocus: R,
		children: o
	}) : null, [
		R,
		ee,
		L,
		o,
		c,
		s,
		F,
		N,
		j.headlineClassName
	]), B = _(() => u == null ? null : typeof u == "string" || typeof u == "number" ? /* @__PURE__ */ C("p", {
		id: f,
		className: Q(j.subheaderClassName, p),
		children: u
	}) : u, [
		j.subheaderClassName,
		u,
		p,
		f
	]), V = A?.label ?? (typeof o == "string" || typeof o == "number" ? String(o) : void 0), H = !!(A && z), U = !V || N && !P, W = H && z ? /* @__PURE__ */ C(Pt, {
		label: V,
		placement: A?.placement,
		positionMode: A?.positionMode,
		offset: A?.offset,
		disabled: U,
		children: z
	}) : z, G = !!z, K = !!B, te = !!r, ne = !!m, re = Nn(h), q = x === "xs" && G && re !== null && re > 1, ie = q ? h : null, ae = G || ne, oe = !!v, se = !!h && !q, ce = ae || K || oe, le = te || ce, ue;
	le && (ue = k === "centre" ? "self-center" : "self-start");
	let de = le ? /* @__PURE__ */ w("div", {
		"data-slot": "toolbar-leading",
		className: J("min-w-0 flex", te ? "items-stretch" : "flex-col", te ? j.leadingVisualGap : j.columnGap, n),
		children: [te ? /* @__PURE__ */ C("div", {
			"data-slot": "toolbar-leading-visual",
			className: J("flex shrink-0 items-center justify-center overflow-hidden rounded-[var(--pc-radius)]", "text-[var(--pc-color-text)]", "[&_img]:h-full [&_img]:w-full [&_img]:object-contain", "[&_svg]:h-full [&_svg]:w-full", j.leadingVisualClassName, i),
			children: r
		}) : null, ce ? /* @__PURE__ */ w("div", {
			"data-slot": "toolbar-leading-content",
			className: Q("min-w-0 flex flex-1 flex-col", te && "justify-center", j.columnGap, a),
			children: [
				ae ? /* @__PURE__ */ w("div", {
					"data-slot": "toolbar-headline-row",
					className: J("flex min-w-0 items-center", G && (ne || q) ? "flex-nowrap" : "flex-wrap", j.headlineRowGap, l),
					children: [
						G ? /* @__PURE__ */ C("div", {
							"data-slot": "toolbar-headline-content",
							className: J("max-w-full min-w-0", !ne && !q && "flex-1"),
							children: W
						}) : null,
						m,
						ie ? /* @__PURE__ */ C("div", {
							"data-slot": "toolbar-inline-actions",
							className: J("flex shrink-0 items-center", j.inlineActionsOffset, j.actionsGap, b),
							children: ie
						}) : null
					]
				}) : null,
				K ? /* @__PURE__ */ C("div", {
					"data-slot": "toolbar-subheader",
					className: "min-w-0",
					children: B
				}) : null,
				oe ? /* @__PURE__ */ C("div", {
					"data-slot": "toolbar-secondary-actions",
					className: J("flex min-w-0 flex-wrap items-center", j.secondaryActionsGap, y),
					children: v
				}) : null
			]
		}) : null]
	}) : null, fe = se ? /* @__PURE__ */ C("div", {
		"data-slot": "toolbar-actions",
		className: J("flex min-w-0 max-w-full items-center justify-self-end overflow-hidden", j.actionsGap, ue, g),
		children: h
	}) : null, pe = le && se ? /* @__PURE__ */ w("div", {
		"data-slot": "toolbar-layout",
		className: J("grid", "grid-cols-[minmax(0,1fr)_fit-content(100%)]", k === "centre" ? "items-center" : "items-start", "gap-2"),
		children: [de, fe]
	}) : le ? de : se ? /* @__PURE__ */ C("div", {
		"data-slot": "toolbar-layout",
		className: "flex justify-end",
		children: fe
	}) : null;
	return /* @__PURE__ */ C(O, {
		"data-slot": "toolbar",
		"data-theme": M,
		className: J(t && "@container", "min-w-0", "flex flex-col", "text-[var(--pc-color-text)]", wn[T], j.gap, Mn(j, E), D && Tn, e),
		children: pe
	});
}
//#endregion
//#region ../ui/src/assets/logo.svg
var Fn = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%20182%20112.5'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23231f20;%20}%20.st2%20{%20clip-path:%20url(%23clippath-1);%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='112.5'%20width='69.5'%20height='112.5'%20rx='9.7'%20ry='9.7'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3crect%20class='st0'%20width='112.5'%20height='112.5'%20rx='9.8'%20ry='9.8'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st1'%20d='M172.2,112.1V0h12.2v112.1h-12.2Z'/%3e%3cpath%20class='st1'%20d='M160.2,112.1V0h9.8v112.1h-9.8Z'/%3e%3cpath%20class='st1'%20d='M148.3,112.1V0h7.4v112.1h-7.4Z'/%3e%3cpath%20class='st1'%20d='M136.3,112.1V0h4.9v112.1h-4.9Z'/%3e%3cpath%20class='st1'%20d='M124.4,112.1V0h2.5v112.1h-2.5Z'/%3e%3cpath%20class='st1'%20d='M112.4,112.1V0h0v112.1h0Z'/%3e%3c/g%3e%3c/g%3e%3cg%20class='st2'%3e%3cg%3e%3cpath%20class='st1'%20d='M103.4,112.1V0h10.8v112.1h-10.8Z'/%3e%3cpath%20class='st1'%20d='M90.4,112.1V0h9.5v112.1h-9.5Z'/%3e%3cpath%20class='st1'%20d='M77.5,112.1V0h8.1v112.1h-8.1Z'/%3e%3cpath%20class='st1'%20d='M64.6,112.1V0h6.8v112.1h-6.8Z'/%3e%3cpath%20class='st1'%20d='M51.7,112.1V0h5.4v112.1h-5.4Z'/%3e%3cpath%20class='st1'%20d='M38.8,112.1V0h4.1v112.1h-4.1Z'/%3e%3cpath%20class='st1'%20d='M25.8,112.1V0h2.8v112.1h-2.8Z'/%3e%3cpath%20class='st1'%20d='M12.9,112.1V0h1.4v112.1h-1.4Z'/%3e%3cpath%20class='st1'%20d='M0,112.1V0h.1v112.1h-.1Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", In = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20version='1.1'%20viewBox='0%200%20182%20112.5'%3e%3c!--%20Generator:%20Adobe%20Illustrator%2029.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%202.1.0%20Build%20192)%20--%3e%3cdefs%3e%3cstyle%3e%20.st0%20{%20fill:%20none;%20}%20.st1%20{%20fill:%20%23231f20;%20}%20@media%20(prefers-color-scheme:%20dark)%20{%20.st1%20{%20fill:%20%23e0ff7b;%20}%20}%20.st2%20{%20clip-path:%20url(%23clippath-1);%20}%20.st3%20{%20clip-path:%20url(%23clippath);%20}%20%3c/style%3e%3cclipPath%20id='clippath'%3e%3crect%20class='st0'%20x='112.5'%20width='69.5'%20height='112.5'%20rx='9.7'%20ry='9.7'/%3e%3c/clipPath%3e%3cclipPath%20id='clippath-1'%3e%3crect%20class='st0'%20width='112.5'%20height='112.5'%20rx='9.8'%20ry='9.8'/%3e%3c/clipPath%3e%3c/defs%3e%3cg%20class='st3'%3e%3cg%3e%3cpath%20class='st1'%20d='M172.2,112.1V0h12.2v112.1h-12.2Z'/%3e%3cpath%20class='st1'%20d='M160.2,112.1V0h9.8v112.1h-9.8Z'/%3e%3cpath%20class='st1'%20d='M148.3,112.1V0h7.4v112.1h-7.4Z'/%3e%3cpath%20class='st1'%20d='M136.3,112.1V0h4.9v112.1h-4.9Z'/%3e%3cpath%20class='st1'%20d='M124.4,112.1V0h2.5v112.1h-2.5Z'/%3e%3cpath%20class='st1'%20d='M112.4,112.1V0h0v112.1h0Z'/%3e%3c/g%3e%3c/g%3e%3cg%20class='st2'%3e%3cg%3e%3cpath%20class='st1'%20d='M103.4,112.1V0h10.8v112.1h-10.8Z'/%3e%3cpath%20class='st1'%20d='M90.4,112.1V0h9.5v112.1h-9.5Z'/%3e%3cpath%20class='st1'%20d='M77.5,112.1V0h8.1v112.1h-8.1Z'/%3e%3cpath%20class='st1'%20d='M64.6,112.1V0h6.8v112.1h-6.8Z'/%3e%3cpath%20class='st1'%20d='M51.7,112.1V0h5.4v112.1h-5.4Z'/%3e%3cpath%20class='st1'%20d='M38.8,112.1V0h4.1v112.1h-4.1Z'/%3e%3cpath%20class='st1'%20d='M25.8,112.1V0h2.8v112.1h-2.8Z'/%3e%3cpath%20class='st1'%20d='M12.9,112.1V0h1.4v112.1h-1.4Z'/%3e%3cpath%20class='st1'%20d='M0,112.1V0h.1v112.1h-.1Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", Ln = (e) => {
	if (typeof e == "string") return e;
	if (e instanceof URL) return e.toString();
	if (typeof e == "object" && "src" in e) {
		let t = e.src;
		if (typeof t == "string") return t;
	}
	return "/favicon.ico";
};
Ln(Fn), Ln(In);
//#endregion
//#region ../ui/src/lib/RandomShape.tsx
var Rn = [
	({ fill: e }) => /* @__PURE__ */ C("circle", {
		cx: "50",
		cy: "50",
		r: "32",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ C("rect", {
		x: "22",
		y: "22",
		width: "56",
		height: "56",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ C("rect", {
		x: "20",
		y: "20",
		width: "60",
		height: "60",
		rx: "12",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ C("polygon", {
		points: "50,18 82,82 18,82",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ C("polygon", {
		points: "50,12 86,50 50,88 14,50",
		fill: e
	}),
	({ fill: e }) => /* @__PURE__ */ C("polygon", {
		points: "50,12 82,30 82,70 50,88 18,70 18,30",
		fill: e
	})
], zn = {
	compact: "h-6 w-6",
	default: "h-8 w-8",
	large: "h-12 w-12"
}, Bn = {
	compact: "text-xs",
	default: "text-lg",
	large: "text-2xl"
}, Vn = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n += 1) t = t * 31 + e.charCodeAt(n) | 0;
	return Math.abs(t);
}, Hn = (e) => {
	let t = e?.trim() ?? "";
	return t ? t.slice(0, 2).toUpperCase() : "";
};
function Un({ seed: e, ariaLabel: t, scale: n = 1, size: r, initials: i, tone: a = "secondary" }) {
	let o = Rn[Vn(e) % Rn.length], s = n > 0 ? n : 1, c = s === 1 ? void 0 : `translate(50 50) scale(${String(s)}) translate(-50 -50)`, l = !t, u = Hn(i), d = u.length > 0, f = r ? zn[r] : "h-full w-full", p = r ? Bn[r] : "text-base", m = "var(--pc-color-text)";
	a === "primary" && (m = "var(--pc-color-primary)"), a === "surface" && (m = "var(--pc-color-surface)");
	let h = "text-[var(--pc-color-surface)]";
	return a === "primary" && (h = "text-[var(--pc-color-secondary)]"), a === "surface" && (h = "text-[var(--pc-color-text)]"), /* @__PURE__ */ w("div", {
		className: J("relative flex items-center justify-center", h, f),
		"aria-hidden": l || void 0,
		children: [/* @__PURE__ */ C("svg", {
			viewBox: "0 0 100 100",
			className: "h-full w-full block",
			role: l ? void 0 : "img",
			"aria-label": l ? void 0 : t,
			"aria-hidden": l,
			focusable: "false",
			children: /* @__PURE__ */ C("g", {
				transform: c,
				children: /* @__PURE__ */ C(o, { fill: m })
			})
		}), d && /* @__PURE__ */ C("span", {
			className: J("absolute inset-0 flex items-center justify-center", "font-normal uppercase", p),
			"aria-hidden": "true",
			children: u
		})]
	});
}
//#endregion
//#region ../ui/src/lib/logoTone.ts
var Wn = (e, t) => {
	if (typeof e.getPropertyValue == "function") {
		let n = e.getPropertyValue(t);
		if (typeof n == "string" && n.length > 0) return n;
	}
	let n = e[t];
	return typeof n == "string" ? n : "";
}, Gn = (e, t) => e === null ? !1 : t?.allowTransparent ? e <= .01 : e < .95, Kn = (e, t, n) => Math.min(n, Math.max(t, e)), qn = (e, t) => {
	let n = e.trim();
	if (n.endsWith("%")) {
		let e = Number(n.slice(0, -1));
		return Number.isNaN(e) ? null : Kn(e / 100 * t, 0, t);
	}
	let r = Number(n);
	return Number.isNaN(r) ? null : Kn(r, 0, t);
}, Jn = (e, t) => {
	let n = /^rgba?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = qn(r[0], 255), a = qn(r[1], 255), o = qn(r[2], 255);
	if (i === null || a === null || o === null) return null;
	let s = r.length >= 4 ? qn(r[3], 1) : 1;
	return Gn(s, t) ? null : {
		r: i,
		g: a,
		b: o,
		alpha: s ?? 1
	};
}, Yn = (e, t) => {
	let n = /^hsla?\((.+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = r[0].trim().toLowerCase(), a = Number(i.replace("deg", ""));
	if (i.endsWith("rad") && (a = Number(i.replace("rad", "")) * 180 / Math.PI), i.endsWith("turn") && (a = Number(i.replace("turn", "")) * 360), Number.isNaN(a)) return null;
	let o = qn(r[1], 100), s = qn(r[2], 100), c = r.length >= 4 ? qn(r[3], 1) : 1;
	if (Gn(c, t) || o === null || s === null) return null;
	let l = o / 100, u = s / 100, d = (1 - Math.abs(2 * u - 1)) * l, f = (a % 360 + 360) % 360 / 60, p = d * (1 - Math.abs(f % 2 - 1)), m = 0, h = 0, g = 0;
	f >= 0 && f < 1 ? (m = d, h = p) : f >= 1 && f < 2 ? (m = p, h = d) : f >= 2 && f < 3 ? (h = d, g = p) : f >= 3 && f < 4 ? (h = p, g = d) : f >= 4 && f < 5 ? (m = p, g = d) : (m = d, g = p);
	let _ = u - d / 2;
	return {
		r: Kn((m + _) * 255, 0, 255),
		g: Kn((h + _) * 255, 0, 255),
		b: Kn((g + _) * 255, 0, 255),
		alpha: c ?? 1
	};
}, Xn = (e, t) => {
	let n = /^color\(\s*srgb\s+([^)]+)\)$/i.exec(e.trim());
	if (!n) return null;
	let r = n[1].split(/[,\s/]+/).filter(Boolean);
	if (r.length < 3) return null;
	let i = (e) => {
		let t = e.trim();
		if (t.endsWith("%")) {
			let e = Number(t.slice(0, -1));
			return Number.isNaN(e) ? null : Kn(e / 100 * 255, 0, 255);
		}
		let n = Number(t);
		return Number.isNaN(n) ? null : Kn(n > 1 ? n : n * 255, 0, 255);
	}, a = i(r[0]), o = i(r[1]), s = i(r[2]), c = r.length >= 4 ? qn(r[3], 1) : 1;
	return Gn(c, t) || a === null || o === null || s === null ? null : {
		r: a,
		g: o,
		b: s,
		alpha: c ?? 1
	};
}, Zn = (e, t) => {
	let n = e.trim().replace("#", "");
	if (![
		3,
		4,
		6,
		8
	].includes(n.length)) return null;
	let r = n.length === 3 || n.length === 4 ? n.split("").map((e) => `${e}${e}`).join("") : n, i = r.length === 8 ? Number.parseInt(r.slice(6, 8), 16) / 255 : 1;
	if (Gn(i, t)) return null;
	let a = Number.parseInt(r.slice(0, 2), 16), o = Number.parseInt(r.slice(2, 4), 16), s = Number.parseInt(r.slice(4, 6), 16);
	return Number.isNaN(a) || Number.isNaN(o) || Number.isNaN(s) ? null : {
		r: a,
		g: o,
		b: s,
		alpha: i
	};
}, Qn = (e, t) => {
	if (typeof e != "string") return null;
	let n = e.trim();
	return n.length === 0 ? null : n.startsWith("#") ? Zn(n, t) : Jn(n, t) ?? Yn(n, t) ?? Xn(n, t);
}, $n = (e, t) => {
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
}, er = (e, t) => e ? e.alpha >= .999 || !t ? e : $n(e, t) : null, tr = (e, t, n, r) => {
	if (typeof window > "u") return null;
	let i = e.ownerDocument, a = i.defaultView;
	if (!a) return null;
	let o = e;
	for (; o;) {
		let e = i.createElement("div");
		e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.pointerEvents = "none", e.style.opacity = "0", e.style.inset = "0", e.style.backgroundColor = "transparent", e.style.color = "transparent", e.style[n] = `var(${t})`, o.appendChild(e);
		let s = Wn(a.getComputedStyle(e), n);
		e.remove();
		let c = Qn(s, { allowTransparent: !0 });
		if (c) return er(c, r?.(o.parentElement ?? null) ?? null);
		o = o.parentElement;
	}
	return null;
}, nr = (e) => {
	let t = e.match(/#[\da-fA-F]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*\)|color\(\s*srgb[^)]*\)/g);
	if (!t) return null;
	for (let e of t) {
		let t = Qn(e);
		if (t) return t;
	}
	return null;
}, rr = (e) => {
	if (typeof window > "u" || !e) return null;
	let t = e.ownerDocument.defaultView;
	if (!t) return null;
	let n = (e) => {
		if (!e) return null;
		let r = n(e.parentElement), i = t.getComputedStyle(e), a = Qn(Wn(i, "backgroundColor"), { allowTransparent: !0 });
		if (a) return er(a, r);
		let o = Wn(i, "backgroundImage");
		if (o && o !== "none") {
			let e = nr(o);
			if (e) return er(e, r);
		}
		return r;
	};
	return n(e);
}, ir = (e, t) => {
	if (typeof window > "u") return null;
	let n = e.ownerDocument.defaultView;
	if (!n) return null;
	let r = e;
	for (; r;) {
		let e = Qn(Wn(n.getComputedStyle(r), t), { allowTransparent: !0 });
		if (e) return er(e, rr(r.parentElement));
		r = r.parentElement;
	}
	return tr(e, t, "backgroundColor", rr);
}, ar = ({ r: e, g: t, b: n }) => {
	let r = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, i = r(e), a = r(t), o = r(n);
	return .2126 * i + .7152 * a + .0722 * o;
}, or = (e) => e ? ar(e) < .5 : !1, sr = (e, t) => e && or(ir(e, t?.tokenName ?? "--pc-color-surface") ?? rr(e)) ? "dark" : "default", cr = .64, lr = 1, ur = .85, dr = .84, fr = 1, pr = lr / cr, mr = ur / cr, hr = dr / cr, gr = fr / cr, _r = 1.25, vr = 1.6, yr = 1.12, br = 1.18, xr = .6, Sr = .45, Cr = 1.12, wr = 1.18, Tr = 1.22, Er = 1.28, Dr = ["compact-default", "compact-dark"], Or = (e, t, n) => {
	if (!e) return [];
	if (typeof e == "string") return [e];
	let r = e, i = t === "dark" ? "dark" : "default", a = t === "dark" ? "default" : "dark", o = (n ? [
		t === "dark" ? "compact-dark" : "compact-default",
		t === "dark" ? "compact-default" : "compact-dark",
		i,
		a
	] : [i, a]).map((e) => r[e]).filter((e) => !!e), s = Object.entries(r).filter((e) => typeof e[1] == "string" && e[1].length > 0).filter(([e]) => n || !Dr.includes(e)).map(([, e]) => e), c = [...o, ...s], l = /* @__PURE__ */ new Set();
	return c.filter((e) => l.has(e) ? !1 : (l.add(e), !0));
}, kr = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => n || e === "inline" ? "h-full w-full" : "h-[85%] w-[85%]", Ar = ({ layout: e = "list", compact: t = !1, stuck: n = !1 } = {}) => J("flex items-center justify-center", "text-[var(--pc-color-text)]", e === "grid" ? "h-[42%] w-full max-w-[55%] @md:h-[45%]" : e === "inline" ? t ? "h-5 w-5 flex-shrink-0" : "h-8 w-8 flex-shrink-0" : t ? "h-10 w-10 flex-shrink-0" : "h-9 w-9 @sm:h-12 @sm:w-12 @xl:h-16 @xl:w-16 @3xl:h-16 @3xl:w-16 flex-shrink-0", n && [
	"group-data-[stuck=true]:h-5",
	"group-data-[stuck=true]:w-5",
	"@md:group-data-[stuck=true]:h-8",
	"@md:group-data-[stuck=true]:w-8"
]);
function jr({ logo: e, alt: t, seed: n, className: r, tone: i, layout: a = "list", compact: o = !1, balanceLogo: s = !0, stuck: c = !1, stablePresentation: l = !1, content: u }) {
	let [f, p] = b(null), m = i ?? sr(f), h = a === "grid", g = s && !l && !h && !c, v = kr({
		layout: a,
		compact: o,
		stuck: c
	}), y = c ? gr : o ? pr : h ? mr : hr, x = Ar({
		layout: a,
		compact: o,
		stuck: c
	}), S = l && typeof e == "object" && !!e && f === null, w = _(() => S ? [] : Or(e, m, o), [
		o,
		e,
		S,
		m
	]), T = _(() => JSON.stringify(w), [w]), [E, D] = b({
		key: "",
		values: []
	}), O = _(() => {
		let e = E.key === T ? E.values : [];
		return w.find((t) => !e.includes(t));
	}, [
		T,
		E,
		w
	]), [k, A] = b(null), j = d((e) => {
		if (!g) return 1;
		let { naturalWidth: t, naturalHeight: n } = e;
		if (!t || !n) return 1;
		let r = n / t;
		return r >= vr ? br : r >= _r ? yr : r <= Sr ? o ? Er : wr : r <= xr ? o ? Tr : Cr : 1;
	}, [o, g]), M = O ? [
		O,
		g ? "balanced" : "static",
		o ? "compact" : "regular"
	].join("-") : "logo-fallback", N = k === M ? "opacity-100" : "opacity-0", P = d((e) => {
		let t = e.currentTarget, n = j(t);
		t.style.transform = n === 1 ? "" : `scale(${String(n)})`, A(M);
	}, [j, M]), F = d((e) => {
		let t = e.currentTarget, n = t.getAttribute("src") || t.currentSrc || t.src;
		n && (A(null), D((e) => {
			let t = T, r = e.key === t ? e.values : [], i = O ?? n;
			return r.includes(i) ? e : {
				key: t,
				values: [...r, i]
			};
		}));
	}, [T, O]), I = u;
	return I ??= O ? /* @__PURE__ */ C("img", {
		src: O,
		alt: t ?? "",
		className: J("block object-contain origin-center", v, "transition-opacity duration-120 ease-out motion-reduce:transition-none", N),
		loading: l ? "eager" : "lazy",
		decoding: "async",
		onLoad: P,
		onError: F
	}, M) : S ? /* @__PURE__ */ C("span", {
		"aria-hidden": "true",
		className: v
	}) : /* @__PURE__ */ C(Un, {
		seed: n,
		ariaLabel: t,
		scale: y
	}), /* @__PURE__ */ C("div", {
		ref: p,
		className: J(x, r),
		children: I
	});
}
//#endregion
//#region ../ui/src/lib/formFieldVisuals.ts
var Mr = {
	resting: "top-1/2 -translate-y-1/2 text-base font-medium",
	raised: "top-1 -translate-y-0 text-base font-medium",
	compactResting: "top-1/2 -translate-y-1/2 text-sm font-medium",
	compactRaised: "top-0.5 -translate-y-0 text-sm font-medium"
}, Nr = [
	"peer-focus:top-1",
	"peer-focus:-translate-y-0",
	"peer-focus:text-base",
	"peer-focus:font-medium"
].join(" "), Pr = [
	"peer-focus:top-0.5",
	"peer-focus:-translate-y-0",
	"peer-focus:text-sm",
	"peer-focus:font-medium"
].join(" "), Fr = [
	"pointer-events-none",
	"h-4 w-4 shrink-0",
	"transition-transform duration-200 ease-out"
].join(" "), Ir = ({ hasError: e, isRaised: t, isActiveTone: n, isDisabled: r = !1, tones: i }) => e ? i.error : r && i.disabled ? i.disabled : n ?? t ? i.active : i.inactive, Lr = ({ baseClassName: e, horizontalClassName: t, labelClassName: n, isCompact: r, isRaised: i, toneClassName: a, focusToneClassName: o, compactFocusRaiseClassName: s = Pr, defaultFocusRaiseClassName: c = Nr }) => {
	let l = Mr.resting;
	return i ? l = r ? Mr.compactRaised : Mr.raised : r && (l = Mr.compactResting), Q(J(e, t, r ? s : c, l, a, o), n);
}, Rr = ({ hideLabel: e, isCompact: t, withLabelDefaultClassName: n, hiddenLabelDefaultClassName: r, withLabelCompactClassName: i, hiddenLabelCompactClassName: a }) => e ? t ? a ?? r : r : t ? i ?? n : n, zr = ({ isOpen: e = !1, spinOnGroupFocus: t = !1 }) => J(Fr, e && "rotate-180", t && "group-focus-within:rotate-180"), Br = (e) => zr(e);
//#endregion
//#region ../ui/src/lib/icons/ChevronDownIcon.tsx
function Vr({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ C("path", {
			d: "m6 8 4 4 4-4",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/DropdownListItem.tsx
var Hr = J("group relative px-1 py-0.5 first:pt-1 last:pb-1"), Ur = J("flex min-w-0 w-full items-center justify-between gap-3 rounded-[var(--pc-radius-xl)] px-3 py-2 text-left text-sm text-[var(--pc-color-text)] transition-colors", "hover:[background:var(--pc-color-depth-1)] active:[background:var(--pc-color-depth-1)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:opacity-60", "data-[selected=true]:[background:var(--pc-color-depth-1)] data-[selected=true]:text-[var(--pc-color-text)]", "data-[selected=true]:hover:[background:var(--pc-color-depth-1)] data-[selected=true]:active:[background:var(--pc-color-depth-1)]"), Wr = J("absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-[var(--pc-radius-full)]", "cursor-pointer text-[var(--pc-color-text-muted)] transition-colors", "hover:[background:var(--pc-color-depth-1)] hover:text-[var(--pc-color-text)]", "active:[background:var(--pc-color-depth-1)] active:text-[var(--pc-color-text)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--pc-color-surface)]", "disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]"), Gr = c(function({ wrapperAs: e = "div", wrapperId: t, wrapperRole: n, wrapperAriaSelected: r, wrapperAriaDisabled: i, label: a, description: o, leading: c, trailing: l, selected: u = !1, highlighted: d = !1, disabled: f = !1, suppressDisabledCursor: p = !1, theme: m, role: h, ariaSelected: g, onClick: _, onMouseEnter: v, trailingAction: y }, b) {
	let x = e, T = sn(m), E = sn(y?.theme ?? m), D = Q(Ur, y ? "pr-12" : void 0, !u && d ? "[background:var(--pc-color-depth-1)]" : void 0, p ? "disabled:cursor-default" : void 0);
	return s(x, {
		id: t,
		role: n,
		"aria-selected": r,
		"aria-disabled": i,
		className: Hr
	}, /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ w("button", {
		ref: b,
		type: "button",
		role: h,
		"aria-selected": g,
		disabled: f,
		"data-theme": T,
		"data-selected": u ? "true" : void 0,
		"data-disabled": f ? "true" : void 0,
		className: D,
		onClick: _,
		onMouseEnter: v,
		children: [
			c ? /* @__PURE__ */ C("span", {
				className: "flex h-4 w-4 items-center justify-center",
				children: c
			}) : null,
			/* @__PURE__ */ w("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ C("span", {
					className: "block truncate text-sm text-[var(--pc-color-text)]",
					children: a
				}), o ? /* @__PURE__ */ C("span", {
					className: "mt-0.5 block text-xs text-[var(--pc-color-text-muted)]",
					children: o
				}) : null]
			}),
			l
		]
	}), y ? /* @__PURE__ */ C("button", {
		type: "button",
		role: y.role,
		"aria-label": y.ariaLabel,
		disabled: f || y.disabled,
		"data-theme": E,
		"data-disabled": f || y.disabled ? "true" : void 0,
		className: Wr,
		onClick: y.onClick,
		children: /* @__PURE__ */ C("span", {
			className: "flex h-4 w-4 items-center justify-center",
			children: y.icon
		})
	}) : null] }));
}), Kr = o(null);
function qr({ portalContainer: e, children: t }) {
	return /* @__PURE__ */ C(Kr.Provider, {
		value: e,
		children: t
	});
}
function Jr() {
	return f(Kr);
}
//#endregion
//#region ../ui/src/lib/DropdownMenu.tsx
var Yr = 8, Xr = 12, Zr = 96, Qr = 192, $r = 140, ei = 1e3, ti = [
	80,
	200,
	500
], ni = 24, ri = (e) => {
	if (typeof queueMicrotask == "function") {
		queueMicrotask(e);
		return;
	}
	Promise.resolve().then(e);
}, ii = (e, t, n) => n < t ? t : Math.max(t, Math.min(e, n)), ai = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => e >= n ? "below" : e >= Zr ? e >= $r || t <= e ? "below" : "above" : t > e ? "above" : "below", oi = (e) => Math.max(Zr, e), si = ({ availableBelow: e, availableAbove: t, menuHeight: n }) => ai({
	availableBelow: e,
	availableAbove: t,
	menuHeight: oi(n)
}), ci = (e) => {
	let t = window.getComputedStyle(e);
	return /(auto|scroll|overlay)/.test(`${t.overflow}${t.overflowX}${t.overflowY}`);
}, li = (e) => {
	let t = [], n = e.parentElement;
	for (; n;) ci(n) && t.push(n), n = n.parentElement;
	return t;
}, ui = (e, t) => Math.abs(e.top - t.top) > ni && Math.abs(e.bottom - t.bottom) > ni || Math.abs(e.left - t.left) > ni && Math.abs(e.right - t.right) > ni;
function di({ id: e, options: t = [], renderContent: n, isOpen: r, theme: i, disabled: a = !1, align: o = "start", widthMode: s = "content", lockPlacementWhileOpen: c = !1, menuRole: l = "menu", labelledBy: u, className: f, anchorRef: m, usePortal: h = !1, portalContainer: g = null, onRequestClose: v }) {
	let x = n !== void 0, S = r && (x || t.length > 0), w = Jr(), E = g ?? w, D = y(null), O = y(null), k = y(null), A = y(0), j = y(null), M = y([]), [N, P] = b(null), F = h && typeof document < "u", I = F && !!E && E !== document.body, ee = d(() => {
		j.current !== null && (window.cancelAnimationFrame(j.current), j.current = null);
		for (let e of M.current) window.clearTimeout(e);
		M.current = [];
	}, []);
	p(() => {
		r || (O.current = null, k.current = null, ee());
	}, [ee, r]);
	let L = d((e) => {
		let t = e.getBoundingClientRect();
		return k.current === null ? (k.current = t, t) : (ui(k.current, t) && (k.current = t), k.current);
	}, []), R = d(() => {
		if (!r || !F) return;
		let e = m?.current, t = D.current;
		if (!e || !t) return;
		let n = L(e), i = t.getBoundingClientRect(), a;
		if (I && E) {
			let e = E.getBoundingClientRect(), t = E.scrollTop, r = E.scrollLeft, l = t, u = t + E.clientHeight, d = r, f = r + E.clientWidth, p = Math.max(0, E.clientWidth - Xr * 2), m = n.top - e.top + t, h = n.bottom - e.top + t, g = n.left - e.left + r, _ = n.right - e.left + r, v = u - h - Yr - Xr, y = m - l - Yr - Xr, b = si({
				availableBelow: v,
				availableAbove: y,
				menuHeight: i.height
			}), x = b;
			c && (O.current === null && (O.current = b), x = O.current);
			let S = Math.max(0, x === "below" ? v : y), C = Math.min(i.height || S, S), w = ii(x === "below" ? h + Yr : m - Yr - C, l + Xr, u - Xr - C), T = s === "anchor" ? n.width : Math.max(i.width, Qr), D = p > 0 ? Math.min(T, p) : T;
			a = {
				top: w,
				left: ii(o === "end" ? _ - D : g, d + Xr, f - Xr - D),
				minWidth: s === "anchor" ? n.width : Math.max(n.width, D),
				width: s === "anchor" ? n.width : void 0,
				maxHeight: S
			};
		} else {
			let e = window.innerWidth, t = window.innerHeight, r = t - n.bottom - Yr - Xr, l = n.top - Yr - Xr, u = si({
				availableBelow: r,
				availableAbove: l,
				menuHeight: i.height
			}), d = u;
			c && (O.current === null && (O.current = u), d = O.current);
			let f = Math.max(0, d === "below" ? r : l), p = Math.min(i.height || f, f), m = ii(d === "below" ? n.bottom + Yr : n.top - Yr - p, Xr, t - Xr - p), h = s === "anchor" ? n.width : Math.max(i.width, Qr);
			a = {
				top: m,
				left: ii(o === "end" ? n.right - h : n.left, Xr, e - Xr - h),
				minWidth: s === "anchor" ? n.width : Math.max(n.width, h),
				width: s === "anchor" ? n.width : void 0,
				maxHeight: f
			};
		}
		P((e) => e && e.top === a.top && e.left === a.left && e.minWidth === a.minWidth && e.width === a.width && e.maxHeight === a.maxHeight ? e : a);
	}, [
		o,
		m,
		L,
		r,
		I,
		c,
		E,
		F,
		s
	]), z = d(() => {
		ee(), j.current = window.requestAnimationFrame(() => {
			j.current = null, R(), j.current = window.requestAnimationFrame(() => {
				j.current = null, R();
			});
		}), M.current = ti.map((e) => window.setTimeout(() => {
			R();
		}, e));
	}, [ee, R]), B = d(() => {
		A.current = Date.now() + ei, z();
	}, [z]);
	p(() => () => {
		ee();
	}, [ee]);
	let V = d((e) => {
		if (D.current = e, !e) {
			P(null), k.current = null, ee();
			return;
		}
		let t = !m?.current;
		R(), t && ri(() => {
			D.current === e && R();
		});
	}, [
		m,
		ee,
		R
	]);
	p(() => {
		if (!r || !F || typeof ResizeObserver > "u") return;
		let e = D.current;
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
		m,
		r,
		F,
		R
	]), p(() => {
		if (!r || !F) return;
		let e = () => {
			k.current = null, R();
		}, t = (e) => {
			if (Date.now() < A.current) {
				R();
				return;
			}
			let t = e.target;
			t instanceof Node && D.current?.contains(t) || v?.();
		};
		window.addEventListener("resize", e), window.addEventListener("scroll", t, !0);
		let n = m?.current, i = n ? li(n) : [];
		for (let e of i) e.addEventListener("scroll", t);
		return () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", t, !0);
			for (let e of i) e.removeEventListener("scroll", t);
		};
	}, [
		m,
		r,
		v,
		F,
		R
	]), p(() => {
		if (!r) return;
		let e = (e) => {
			let t = e.target;
			if (!(t instanceof Node)) return;
			let n = D.current, r = m?.current;
			n?.contains(t) || r?.contains(t) || v?.();
		}, t = (e) => {
			e.key === "Escape" && v?.();
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), window.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e), window.removeEventListener("keydown", t);
		};
	}, [
		m,
		r,
		v
	]);
	let H = _(() => !F || typeof document > "u" ? null : E ?? document.body, [E, F]), U = o === "end" ? "left-auto right-0" : "right-auto left-0", W = sn(i), G = "absolute top-full z-20 mt-2";
	F && (G = I ? "absolute z-[2200]" : "fixed z-[2200]");
	let K = Q(G, s === "anchor" ? "min-w-0 max-w-none" : "min-w-[12rem] max-w-[calc(100vw-1.5rem)]", "overflow-x-hidden overflow-y-auto rounded-[var(--pc-radius-2xl)] bg-[var(--pc-color-surface)] shadow-2xl [--tw-shadow-color:var(--pc-color-backdrop)] [&_button:not(:disabled)]:cursor-pointer", "text-[var(--pc-color-text)] border border-[var(--pc-color-depth-2)]", F ? "" : U, !F && s === "anchor" ? "w-full" : "", f), te = F ? N : null, ne = F ? {
		top: te?.top ?? -9999,
		left: te?.left ?? -9999,
		minWidth: te?.minWidth,
		width: te?.width,
		maxHeight: te?.maxHeight
	} : void 0;
	if (!S) return null;
	let re = null;
	x && (re = typeof n == "function" ? n({ close: () => {
		v?.();
	} }) : n);
	let q = (e) => (t) => {
		if (a || e.disabled) {
			t.preventDefault();
			return;
		}
		e.onSelect?.(t), v?.();
	}, ie = (e) => (t) => {
		let n = e.trailingAction;
		if (!n || a || e.disabled || n.disabled) {
			t.preventDefault();
			return;
		}
		n.onSelect?.(t), v?.();
	}, ae = /* @__PURE__ */ C("div", {
		id: e,
		ref: V,
		role: l,
		"aria-labelledby": u,
		className: K,
		style: ne,
		"data-theme": W,
		"data-dropdown-menu-owner": u,
		onMouseDownCapture: B,
		onTouchStartCapture: B,
		onKeyDownCapture: B,
		children: re ?? t.map((e, t) => {
			let n = e.trailingAction, r = e.id ?? String(t);
			return /* @__PURE__ */ C(Gr, {
				wrapperRole: "none",
				label: e.label,
				leading: e.icon,
				trailing: e.trailingIcon ? /* @__PURE__ */ C("span", {
					className: "flex h-4 w-4 items-center justify-center text-current",
					children: e.trailingIcon
				}) : void 0,
				selected: e.selected === !0,
				disabled: a || e.disabled,
				suppressDisabledCursor: e.suppressDisabledCursor,
				theme: e.theme,
				role: l === "menu" ? "menuitem" : void 0,
				onClick: q(e),
				trailingAction: n ? {
					ariaLabel: n.ariaLabel,
					icon: n.icon,
					onClick: ie(e),
					disabled: a || e.disabled || n.disabled,
					theme: n.theme ?? e.theme,
					role: l === "menu" ? "menuitem" : void 0
				} : void 0
			}, r);
		})
	});
	return F && H ? T(ae, H) : ae;
}
//#endregion
//#region ../ui/src/lib/SplitButton.tsx
var fi = c(function({ options: e, primaryOption: t, primaryLabel: n, leadingIcon: r, trailingIcon: i, variant: a = "secondary", appearance: o = "solid", size: s = "md", fullWidth: c = !1, loading: l = !1, disabled: u = !1, primaryDisabled: d = !1, toggleDisabled: f = !1, alignMenu: g = "start", toggleLabel: _ = "Show more actions", primaryOpensMenu: v = !1 }, x) {
	let S = !!t, T = t?.label ?? n;
	if (!S && T == null) throw Error("SplitButton requires primaryLabel when no primaryOption is provided.");
	let [E, D] = b(!1), O = y(null), k = m(), A = `${k}-menu`, j = v || !S, M = tn({
		disabled: u,
		loading: l
	}), N = M || f || e.length === 0, P = M || d || !j && t?.disabled === !0 || j && N, F = P && N, I = E && !N, [ee, L] = b(!1), [R, z] = b(!1);
	h(x, () => O.current ?? document.createElement("div")), p(() => {
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
		N || D((e) => !e);
	};
	return /* @__PURE__ */ w("div", {
		ref: O,
		className: J("relative inline-flex items-stretch", c && "w-full"),
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
		"data-theme": sn(a),
		"data-loading": en(l),
		"data-disabled": en(F),
		"data-open": en(I),
		children: [
			/* @__PURE__ */ w("button", {
				type: "button",
				className: J(Jt, Zt(o), Qt(o), Xt(o), Rt[s], c && "flex-1"),
				"data-loading": en(l),
				"data-disabled": en(P),
				"data-split-hover": en(ee && !P),
				"data-split-press": en(R && !P),
				"data-open": en(j && I),
				"data-active": j ? en(I) : void 0,
				"data-toggled": j ? en(I) : void 0,
				"data-expanded": j ? en(I) : void 0,
				onClick: (e) => {
					if (P) {
						e.preventDefault();
						return;
					}
					if (j) {
						e.preventDefault(), V();
						return;
					}
					t?.onSelect?.(e);
				},
				"aria-haspopup": j ? "menu" : void 0,
				"aria-expanded": j ? I : void 0,
				"aria-controls": j ? A : void 0,
				disabled: P,
				"aria-busy": l ? !0 : void 0,
				children: [l && /* @__PURE__ */ C("span", {
					className: "absolute inset-0 z-20 flex items-center justify-center",
					"aria-hidden": "true",
					children: /* @__PURE__ */ C(Ft, {})
				}), /* @__PURE__ */ w("span", {
					className: nn({ loading: l }),
					children: [
						r ? /* @__PURE__ */ C("span", {
							className: "inline-flex items-center",
							children: r
						}) : null,
						T,
						i ? /* @__PURE__ */ C("span", {
							className: "inline-flex items-center",
							children: i
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ C("button", {
				id: k,
				type: "button",
				disabled: N,
				"aria-expanded": I,
				"aria-haspopup": "menu",
				"aria-controls": A,
				"aria-label": _,
				className: J(Yt, Zt(o), Qt(o), Xt(o), zt[s]),
				"data-disabled": en(N),
				"data-split-hover": en(ee && !N),
				"data-split-press": en(R && !N),
				"data-open": en(I),
				"data-active": en(I),
				"data-toggled": en(I),
				"data-expanded": en(I),
				onClick: () => {
					N || V();
				},
				children: /* @__PURE__ */ C("span", {
					className: J("inline-flex items-center justify-center", zr({ isOpen: I }), "scale-125"),
					children: /* @__PURE__ */ C(Vr, {})
				})
			}),
			/* @__PURE__ */ C(di, {
				id: A,
				options: e,
				isOpen: I,
				disabled: N,
				align: g,
				labelledBy: k,
				anchorRef: O,
				usePortal: !0,
				onRequestClose: () => {
					D(!1);
				}
			})
		]
	});
});
fi.displayName = "SplitButton";
//#endregion
//#region ../ui/src/lib/DropdownSearchInput.tsx
var pi = [
	"w-full rounded-[var(--pc-radius-full)] border-0",
	"[background:var(--pc-color-surface)]",
	"px-3 py-2 text-sm text-[var(--pc-color-text)]",
	"placeholder:text-[var(--pc-color-border)]",
	"transition-colors focus:[background:var(--pc-color-surface)]",
	"focus:outline-none disabled:cursor-default disabled:opacity-60"
].join(" "), mi = c(function({ value: e, onChange: t, onKeyDown: n, placeholder: r, ariaLabel: i, disabled: a = !1 }, o) {
	return /* @__PURE__ */ C("div", {
		className: "border-b border-[var(--pc-color-border-weakest)] px-1 py-2",
		children: /* @__PURE__ */ C("input", {
			ref: o,
			type: "text",
			autoComplete: "off",
			value: e,
			onChange: (e) => {
				t(e.currentTarget.value);
			},
			onKeyDown: n,
			className: pi,
			placeholder: r,
			"aria-label": i,
			disabled: a
		})
	});
});
mi.displayName = "DropdownSearchInput";
//#endregion
//#region ../../node_modules/@date-fns/tz/tzName/index.js
function hi(e, t, n = "long") {
	return new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		timeZone: e,
		timeZoneName: n
	}).format(t).split(/\s/g).slice(2).join(" ");
}
//#endregion
//#region ../../node_modules/@date-fns/tz/tzOffset/index.js
var gi = {}, _i = {};
function vi(e, t) {
	try {
		let n = (gi[e] ||= new Intl.DateTimeFormat("en-US", {
			timeZone: e,
			timeZoneName: "longOffset"
		}).format)(t).split("GMT")[1];
		return n in _i ? _i[n] : bi(n, n.split(":"));
	} catch {
		if (e in _i) return _i[e];
		let t = e?.match(yi);
		return t ? bi(e, t.slice(1)) : NaN;
	}
}
var yi = /([+-]\d\d):?(\d\d)?/;
function bi(e, t) {
	let n = +(t[0] || 0), r = +(t[1] || 0), i = (t[2] || 0) / 60;
	return _i[e] = n * 60 + r > 0 ? n * 60 + r + i : n * 60 - r - i;
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/mini.js
var xi = class e extends Date {
	constructor(...e) {
		super(), e.length > 1 && typeof e[e.length - 1] == "string" && (this.timeZone = e.pop()), this.internal = /* @__PURE__ */ new Date(), isNaN(vi(this.timeZone, this)) ? this.setTime(NaN) : e.length ? typeof e[0] == "number" && (e.length === 1 || e.length === 2 && typeof e[1] != "number") ? this.setTime(e[0]) : typeof e[0] == "string" ? this.setTime(+new Date(e[0])) : e[0] instanceof Date ? this.setTime(+e[0]) : (this.setTime(+new Date(...e)), Ti(this, NaN), Ci(this)) : this.setTime(Date.now());
	}
	static tz(t, ...n) {
		return n.length ? new e(...n, t) : new e(Date.now(), t);
	}
	withTimeZone(t) {
		return new e(+this, t);
	}
	getTimezoneOffset() {
		let e = -vi(this.timeZone, this);
		return e > 0 ? Math.floor(e) : Math.ceil(e);
	}
	setTime(e) {
		return Date.prototype.setTime.apply(this, arguments), Ci(this), +this;
	}
	[Symbol.for("constructDateFrom")](t) {
		return new e(+new Date(t), this.timeZone);
	}
}, Si = /^(get|set)(?!UTC)/;
Object.getOwnPropertyNames(Date.prototype).forEach((e) => {
	if (!Si.test(e)) return;
	let t = e.replace(Si, "$1UTC");
	xi.prototype[t] && (e.startsWith("get") ? xi.prototype[e] = function() {
		return this.internal[t]();
	} : (xi.prototype[e] = function() {
		return Date.prototype[t].apply(this.internal, arguments), wi(this), +this;
	}, xi.prototype[t] = function() {
		return Date.prototype[t].apply(this, arguments), Ci(this), +this;
	}));
});
function Ci(e) {
	e.internal.setTime(+e), e.internal.setUTCSeconds(e.internal.getUTCSeconds() - Math.round(-vi(e.timeZone, e) * 60));
}
function wi(e) {
	Date.prototype.setFullYear.call(e, e.internal.getUTCFullYear(), e.internal.getUTCMonth(), e.internal.getUTCDate()), Date.prototype.setHours.call(e, e.internal.getUTCHours(), e.internal.getUTCMinutes(), e.internal.getUTCSeconds(), e.internal.getUTCMilliseconds()), Ti(e);
}
function Ti(e) {
	let t = vi(e.timeZone, e), n = t > 0 ? Math.floor(t) : Math.ceil(t), r = /* @__PURE__ */ new Date(+e);
	r.setUTCHours(r.getUTCHours() - 1);
	let i = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset(), a = i - -(/* @__PURE__ */ new Date(+r)).getTimezoneOffset(), o = Date.prototype.getHours.apply(e) !== e.internal.getUTCHours();
	a && o && e.internal.setUTCMinutes(e.internal.getUTCMinutes() + a);
	let s = i - n;
	s && Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + s);
	let c = /* @__PURE__ */ new Date(+e);
	c.setUTCSeconds(0);
	let l = i > 0 ? c.getSeconds() : (c.getSeconds() - 60) % 60, u = Math.round(-(vi(e.timeZone, e) * 60)) % 60;
	(u || l) && (e.internal.setUTCSeconds(e.internal.getUTCSeconds() + u), Date.prototype.setUTCSeconds.call(e, Date.prototype.getUTCSeconds.call(e) + u + l));
	let d = vi(e.timeZone, e), f = d > 0 ? Math.floor(d) : Math.ceil(d), p = -(/* @__PURE__ */ new Date(+e)).getTimezoneOffset() - f, m = f !== n, h = p - s;
	if (m && h) {
		Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + h);
		let t = vi(e.timeZone, e), n = f - (t > 0 ? Math.floor(t) : Math.ceil(t));
		n && (e.internal.setUTCMinutes(e.internal.getUTCMinutes() + n), Date.prototype.setUTCMinutes.call(e, Date.prototype.getUTCMinutes.call(e) + n));
	}
}
//#endregion
//#region ../../node_modules/@date-fns/tz/date/index.js
var Ei = class e extends xi {
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
		return `${e} GMT${t}${n}${r} (${hi(this.timeZone, this)})`;
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
}, Di = 365.2425, Oi = 6048e5, ki = 864e5, Ai = 3600 * 24;
Ai * 7, Ai * Di / 12 * 3;
var ji = Symbol.for("constructDateFrom");
//#endregion
//#region ../../node_modules/date-fns/constructFrom.js
function Mi(e, t) {
	return typeof e == "function" ? e(t) : e && typeof e == "object" && ji in e ? e[ji](t) : e instanceof Date ? new e.constructor(t) : new Date(t);
}
//#endregion
//#region ../../node_modules/date-fns/toDate.js
function Ni(e, t) {
	return Mi(t || e, e);
}
//#endregion
//#region ../../node_modules/date-fns/addDays.js
function Pi(e, t, n) {
	let r = Ni(e, n?.in);
	return isNaN(t) ? Mi(n?.in || e, NaN) : (t && r.setDate(r.getDate() + t), r);
}
//#endregion
//#region ../../node_modules/date-fns/addMonths.js
function Fi(e, t, n) {
	let r = Ni(e, n?.in);
	if (isNaN(t)) return Mi(n?.in || e, NaN);
	if (!t) return r;
	let i = r.getDate(), a = Mi(n?.in || e, r.getTime());
	return a.setMonth(r.getMonth() + t + 1, 0), i >= a.getDate() ? a : (r.setFullYear(a.getFullYear(), a.getMonth(), i), r);
}
//#endregion
//#region ../../node_modules/date-fns/_lib/defaultOptions.js
var Ii = {};
function Li() {
	return Ii;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeek.js
function Ri(e, t) {
	let n = Li(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Ni(e, t?.in), a = i.getDay(), o = (a < r ? 7 : 0) + a - r;
	return i.setDate(i.getDate() - o), i.setHours(0, 0, 0, 0), i;
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeek.js
function zi(e, t) {
	return Ri(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeekYear.js
function Bi(e, t) {
	let n = Ni(e, t?.in), r = n.getFullYear(), i = Mi(n, 0);
	i.setFullYear(r + 1, 0, 4), i.setHours(0, 0, 0, 0);
	let a = zi(i), o = Mi(n, 0);
	o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
	let s = zi(o);
	return n.getTime() >= a.getTime() ? r + 1 : n.getTime() >= s.getTime() ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function Vi(e) {
	let t = Ni(e), n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
	return n.setUTCFullYear(t.getFullYear()), e - +n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeDates.js
function Hi(e, ...t) {
	let n = Mi.bind(null, e || t.find((e) => typeof e == "object"));
	return t.map(n);
}
//#endregion
//#region ../../node_modules/date-fns/startOfDay.js
function Ui(e, t) {
	let n = Ni(e, t?.in);
	return n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarDays.js
function Wi(e, t, n) {
	let [r, i] = Hi(n?.in, e, t), a = Ui(r), o = Ui(i), s = +a - Vi(a), c = +o - Vi(o);
	return Math.round((s - c) / ki);
}
//#endregion
//#region ../../node_modules/date-fns/startOfISOWeekYear.js
function Gi(e, t) {
	let n = Bi(e, t), r = Mi(t?.in || e, 0);
	return r.setFullYear(n, 0, 4), r.setHours(0, 0, 0, 0), zi(r);
}
//#endregion
//#region ../../node_modules/date-fns/addWeeks.js
function Ki(e, t, n) {
	return Pi(e, t * 7, n);
}
//#endregion
//#region ../../node_modules/date-fns/addYears.js
function qi(e, t, n) {
	return Fi(e, t * 12, n);
}
//#endregion
//#region ../../node_modules/date-fns/max.js
function Ji(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Mi.bind(null, e));
		let t = Ni(e, r);
		(!n || n < t || isNaN(+t)) && (n = t);
	}), Mi(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/min.js
function Yi(e, t) {
	let n, r = t?.in;
	return e.forEach((e) => {
		!r && typeof e == "object" && (r = Mi.bind(null, e));
		let t = Ni(e, r);
		(!n || n > t || isNaN(+t)) && (n = t);
	}), Mi(r, n || NaN);
}
//#endregion
//#region ../../node_modules/date-fns/isSameDay.js
function Xi(e, t, n) {
	let [r, i] = Hi(n?.in, e, t);
	return +Ui(r) == +Ui(i);
}
//#endregion
//#region ../../node_modules/date-fns/isDate.js
function Zi(e) {
	return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
//#endregion
//#region ../../node_modules/date-fns/isValid.js
function Qi(e) {
	return !(!Zi(e) && typeof e != "number" || isNaN(+Ni(e)));
}
//#endregion
//#region ../../node_modules/date-fns/differenceInCalendarMonths.js
function $i(e, t, n) {
	let [r, i] = Hi(n?.in, e, t), a = r.getFullYear() - i.getFullYear(), o = r.getMonth() - i.getMonth();
	return a * 12 + o;
}
//#endregion
//#region ../../node_modules/date-fns/endOfMonth.js
function ea(e, t) {
	let n = Ni(e, t?.in), r = n.getMonth();
	return n.setFullYear(n.getFullYear(), r + 1, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/normalizeInterval.js
function ta(e, t) {
	let [n, r] = Hi(e, t.start, t.end);
	return {
		start: n,
		end: r
	};
}
//#endregion
//#region ../../node_modules/date-fns/eachMonthOfInterval.js
function na(e, t) {
	let { start: n, end: r } = ta(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setDate(1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Mi(n, o)), o.setMonth(o.getMonth() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/startOfMonth.js
function ra(e, t) {
	let n = Ni(e, t?.in);
	return n.setDate(1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/endOfYear.js
function ia(e, t) {
	let n = Ni(e, t?.in), r = n.getFullYear();
	return n.setFullYear(r + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
//#endregion
//#region ../../node_modules/date-fns/startOfYear.js
function aa(e, t) {
	let n = Ni(e, t?.in);
	return n.setFullYear(n.getFullYear(), 0, 1), n.setHours(0, 0, 0, 0), n;
}
//#endregion
//#region ../../node_modules/date-fns/eachYearOfInterval.js
function oa(e, t) {
	let { start: n, end: r } = ta(t?.in, e), i = +n > +r, a = i ? +n : +r, o = i ? r : n;
	o.setHours(0, 0, 0, 0), o.setMonth(0, 1);
	let s = t?.step ?? 1;
	if (!s) return [];
	s < 0 && (s = -s, i = !i);
	let c = [];
	for (; +o <= a;) c.push(Mi(n, o)), o.setFullYear(o.getFullYear() + s);
	return i ? c.reverse() : c;
}
//#endregion
//#region ../../node_modules/date-fns/endOfWeek.js
function sa(e, t) {
	let n = Li(), r = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? n.weekStartsOn ?? n.locale?.options?.weekStartsOn ?? 0, i = Ni(e, t?.in), a = i.getDay(), o = (a < r ? -7 : 0) + 6 - (a - r);
	return i.setDate(i.getDate() + o), i.setHours(23, 59, 59, 999), i;
}
//#endregion
//#region ../../node_modules/date-fns/endOfISOWeek.js
function ca(e, t) {
	return sa(e, {
		...t,
		weekStartsOn: 1
	});
}
//#endregion
//#region ../../node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var la = {
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
}, ua = (e, t, n) => {
	let r, i = la[e];
	return r = typeof i == "string" ? i : t === 1 ? i.one : i.other.replace("{{count}}", t.toString()), n?.addSuffix ? n.comparison && n.comparison > 0 ? "in " + r : r + " ago" : r;
};
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function da(e) {
	return (t = {}) => {
		let n = t.width ? String(t.width) : e.defaultWidth;
		return e.formats[n] || e.formats[e.defaultWidth];
	};
}
var fa = {
	date: da({
		formats: {
			full: "EEEE, MMMM do, y",
			long: "MMMM do, y",
			medium: "MMM d, y",
			short: "MM/dd/yyyy"
		},
		defaultWidth: "full"
	}),
	time: da({
		formats: {
			full: "h:mm:ss a zzzz",
			long: "h:mm:ss a z",
			medium: "h:mm:ss a",
			short: "h:mm a"
		},
		defaultWidth: "full"
	}),
	dateTime: da({
		formats: {
			full: "{{date}} 'at' {{time}}",
			long: "{{date}} 'at' {{time}}",
			medium: "{{date}}, {{time}}",
			short: "{{date}}, {{time}}"
		},
		defaultWidth: "full"
	})
}, pa = {
	lastWeek: "'last' eeee 'at' p",
	yesterday: "'yesterday at' p",
	today: "'today at' p",
	tomorrow: "'tomorrow at' p",
	nextWeek: "eeee 'at' p",
	other: "P"
}, ma = (e, t, n, r) => pa[e];
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function ha(e) {
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
var ga = {
	ordinalNumber: (e, t) => {
		let n = Number(e), r = n % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1: return n + "st";
			case 2: return n + "nd";
			case 3: return n + "rd";
		}
		return n + "th";
	},
	era: ha({
		values: {
			narrow: ["B", "A"],
			abbreviated: ["BC", "AD"],
			wide: ["Before Christ", "Anno Domini"]
		},
		defaultWidth: "wide"
	}),
	quarter: ha({
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
	month: ha({
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
	day: ha({
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
	dayPeriod: ha({
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
function _a(e) {
	return (t, n = {}) => {
		let r = n.width, i = r && e.matchPatterns[r] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
		if (!a) return null;
		let o = a[0], s = r && e.parsePatterns[r] || e.parsePatterns[e.defaultParseWidth], c = Array.isArray(s) ? ya(s, (e) => e.test(o)) : va(s, (e) => e.test(o)), l;
		l = e.valueCallback ? e.valueCallback(c) : c, l = n.valueCallback ? n.valueCallback(l) : l;
		let u = t.slice(o.length);
		return {
			value: l,
			rest: u
		};
	};
}
function va(e, t) {
	for (let n in e) if (Object.prototype.hasOwnProperty.call(e, n) && t(e[n])) return n;
}
function ya(e, t) {
	for (let n = 0; n < e.length; n++) if (t(e[n])) return n;
}
//#endregion
//#region ../../node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function ba(e) {
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
var xa = {
	code: "en-US",
	formatDistance: ua,
	formatLong: fa,
	formatRelative: ma,
	localize: ga,
	match: {
		ordinalNumber: ba({
			matchPattern: /^(\d+)(th|st|nd|rd)?/i,
			parsePattern: /\d+/i,
			valueCallback: (e) => parseInt(e, 10)
		}),
		era: _a({
			matchPatterns: {
				narrow: /^(b|a)/i,
				abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
				wide: /^(before christ|before common era|anno domini|common era)/i
			},
			defaultMatchWidth: "wide",
			parsePatterns: { any: [/^b/i, /^(a|c)/i] },
			defaultParseWidth: "any"
		}),
		quarter: _a({
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
		month: _a({
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
		day: _a({
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
		dayPeriod: _a({
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
function Sa(e, t) {
	let n = Ni(e, t?.in);
	return Wi(n, aa(n)) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getISOWeek.js
function Ca(e, t) {
	let n = Ni(e, t?.in), r = zi(n) - +Gi(n);
	return Math.round(r / Oi) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/getWeekYear.js
function wa(e, t) {
	let n = Ni(e, t?.in), r = n.getFullYear(), i = Li(), a = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? i.firstWeekContainsDate ?? i.locale?.options?.firstWeekContainsDate ?? 1, o = Mi(t?.in || e, 0);
	o.setFullYear(r + 1, 0, a), o.setHours(0, 0, 0, 0);
	let s = Ri(o, t), c = Mi(t?.in || e, 0);
	c.setFullYear(r, 0, a), c.setHours(0, 0, 0, 0);
	let l = Ri(c, t);
	return +n >= +s ? r + 1 : +n >= +l ? r : r - 1;
}
//#endregion
//#region ../../node_modules/date-fns/startOfWeekYear.js
function Ta(e, t) {
	let n = Li(), r = t?.firstWeekContainsDate ?? t?.locale?.options?.firstWeekContainsDate ?? n.firstWeekContainsDate ?? n.locale?.options?.firstWeekContainsDate ?? 1, i = wa(e, t), a = Mi(t?.in || e, 0);
	return a.setFullYear(i, 0, r), a.setHours(0, 0, 0, 0), Ri(a, t);
}
//#endregion
//#region ../../node_modules/date-fns/getWeek.js
function Ea(e, t) {
	let n = Ni(e, t?.in), r = Ri(n, t) - +Ta(n, t);
	return Math.round(r / Oi) + 1;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/addLeadingZeros.js
function Da(e, t) {
	return (e < 0 ? "-" : "") + Math.abs(e).toString().padStart(t, "0");
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/lightFormatters.js
var Oa = {
	y(e, t) {
		let n = e.getFullYear(), r = n > 0 ? n : 1 - n;
		return Da(t === "yy" ? r % 100 : r, t.length);
	},
	M(e, t) {
		let n = e.getMonth();
		return t === "M" ? String(n + 1) : Da(n + 1, 2);
	},
	d(e, t) {
		return Da(e.getDate(), t.length);
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
		return Da(e.getHours() % 12 || 12, t.length);
	},
	H(e, t) {
		return Da(e.getHours(), t.length);
	},
	m(e, t) {
		return Da(e.getMinutes(), t.length);
	},
	s(e, t) {
		return Da(e.getSeconds(), t.length);
	},
	S(e, t) {
		let n = t.length, r = e.getMilliseconds();
		return Da(Math.trunc(r * 10 ** (n - 3)), t.length);
	}
}, ka = {
	am: "am",
	pm: "pm",
	midnight: "midnight",
	noon: "noon",
	morning: "morning",
	afternoon: "afternoon",
	evening: "evening",
	night: "night"
}, Aa = {
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
		return Oa.y(e, t);
	},
	Y: function(e, t, n, r) {
		let i = wa(e, r), a = i > 0 ? i : 1 - i;
		return t === "YY" ? Da(a % 100, 2) : t === "Yo" ? n.ordinalNumber(a, { unit: "year" }) : Da(a, t.length);
	},
	R: function(e, t) {
		return Da(Bi(e), t.length);
	},
	u: function(e, t) {
		return Da(e.getFullYear(), t.length);
	},
	Q: function(e, t, n) {
		let r = Math.ceil((e.getMonth() + 1) / 3);
		switch (t) {
			case "Q": return String(r);
			case "QQ": return Da(r, 2);
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
			case "qq": return Da(r, 2);
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
			case "MM": return Oa.M(e, t);
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
			case "LL": return Da(r + 1, 2);
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
		let i = Ea(e, r);
		return t === "wo" ? n.ordinalNumber(i, { unit: "week" }) : Da(i, t.length);
	},
	I: function(e, t, n) {
		let r = Ca(e);
		return t === "Io" ? n.ordinalNumber(r, { unit: "week" }) : Da(r, t.length);
	},
	d: function(e, t, n) {
		return t === "do" ? n.ordinalNumber(e.getDate(), { unit: "date" }) : Oa.d(e, t);
	},
	D: function(e, t, n) {
		let r = Sa(e);
		return t === "Do" ? n.ordinalNumber(r, { unit: "dayOfYear" }) : Da(r, t.length);
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
			case "ee": return Da(a, 2);
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
			case "cc": return Da(a, t.length);
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
			case "ii": return Da(i, t.length);
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
		switch (i = r === 12 ? ka.noon : r === 0 ? ka.midnight : r / 12 >= 1 ? "pm" : "am", t) {
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
		switch (i = r >= 17 ? ka.evening : r >= 12 ? ka.afternoon : r >= 4 ? ka.morning : ka.night, t) {
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
		return Oa.h(e, t);
	},
	H: function(e, t, n) {
		return t === "Ho" ? n.ordinalNumber(e.getHours(), { unit: "hour" }) : Oa.H(e, t);
	},
	K: function(e, t, n) {
		let r = e.getHours() % 12;
		return t === "Ko" ? n.ordinalNumber(r, { unit: "hour" }) : Da(r, t.length);
	},
	k: function(e, t, n) {
		let r = e.getHours();
		return r === 0 && (r = 24), t === "ko" ? n.ordinalNumber(r, { unit: "hour" }) : Da(r, t.length);
	},
	m: function(e, t, n) {
		return t === "mo" ? n.ordinalNumber(e.getMinutes(), { unit: "minute" }) : Oa.m(e, t);
	},
	s: function(e, t, n) {
		return t === "so" ? n.ordinalNumber(e.getSeconds(), { unit: "second" }) : Oa.s(e, t);
	},
	S: function(e, t) {
		return Oa.S(e, t);
	},
	X: function(e, t, n) {
		let r = e.getTimezoneOffset();
		if (r === 0) return "Z";
		switch (t) {
			case "X": return Ma(r);
			case "XXXX":
			case "XX": return Na(r);
			default: return Na(r, ":");
		}
	},
	x: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "x": return Ma(r);
			case "xxxx":
			case "xx": return Na(r);
			default: return Na(r, ":");
		}
	},
	O: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "O":
			case "OO":
			case "OOO": return "GMT" + ja(r, ":");
			default: return "GMT" + Na(r, ":");
		}
	},
	z: function(e, t, n) {
		let r = e.getTimezoneOffset();
		switch (t) {
			case "z":
			case "zz":
			case "zzz": return "GMT" + ja(r, ":");
			default: return "GMT" + Na(r, ":");
		}
	},
	t: function(e, t, n) {
		return Da(Math.trunc(e / 1e3), t.length);
	},
	T: function(e, t, n) {
		return Da(+e, t.length);
	}
};
function ja(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Math.trunc(r / 60), a = r % 60;
	return a === 0 ? n + String(i) : n + String(i) + t + Da(a, 2);
}
function Ma(e, t) {
	return e % 60 == 0 ? (e > 0 ? "-" : "+") + Da(Math.abs(e) / 60, 2) : Na(e, t);
}
function Na(e, t = "") {
	let n = e > 0 ? "-" : "+", r = Math.abs(e), i = Da(Math.trunc(r / 60), 2), a = Da(r % 60, 2);
	return n + i + t + a;
}
//#endregion
//#region ../../node_modules/date-fns/_lib/format/longFormatters.js
var Pa = (e, t) => {
	switch (e) {
		case "P": return t.date({ width: "short" });
		case "PP": return t.date({ width: "medium" });
		case "PPP": return t.date({ width: "long" });
		default: return t.date({ width: "full" });
	}
}, Fa = (e, t) => {
	switch (e) {
		case "p": return t.time({ width: "short" });
		case "pp": return t.time({ width: "medium" });
		case "ppp": return t.time({ width: "long" });
		default: return t.time({ width: "full" });
	}
}, Ia = {
	p: Fa,
	P: (e, t) => {
		let n = e.match(/(P+)(p+)?/) || [], r = n[1], i = n[2];
		if (!i) return Pa(e, t);
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
		return a.replace("{{date}}", Pa(r, t)).replace("{{time}}", Fa(i, t));
	}
}, La = /^D+$/, Ra = /^Y+$/, za = [
	"D",
	"DD",
	"YY",
	"YYYY"
];
function Ba(e) {
	return La.test(e);
}
function Va(e) {
	return Ra.test(e);
}
function Ha(e, t, n) {
	let r = Ua(e, t, n);
	if (console.warn(r), za.includes(e)) throw RangeError(r);
}
function Ua(e, t, n) {
	let r = e[0] === "Y" ? "years" : "days of the month";
	return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
//#endregion
//#region ../../node_modules/date-fns/format.js
var Wa = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Ga = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Ka = /^'([^]*?)'?$/, qa = /''/g, Ja = /[a-zA-Z]/;
function Ya(e, t, n) {
	let r = Li(), i = n?.locale ?? r.locale ?? xa, a = n?.firstWeekContainsDate ?? n?.locale?.options?.firstWeekContainsDate ?? r.firstWeekContainsDate ?? r.locale?.options?.firstWeekContainsDate ?? 1, o = n?.weekStartsOn ?? n?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0, s = Ni(e, n?.in);
	if (!Qi(s)) throw RangeError("Invalid time value");
	let c = t.match(Ga).map((e) => {
		let t = e[0];
		if (t === "p" || t === "P") {
			let n = Ia[t];
			return n(e, i.formatLong);
		}
		return e;
	}).join("").match(Wa).map((e) => {
		if (e === "''") return {
			isToken: !1,
			value: "'"
		};
		let t = e[0];
		if (t === "'") return {
			isToken: !1,
			value: Xa(e)
		};
		if (Aa[t]) return {
			isToken: !0,
			value: e
		};
		if (t.match(Ja)) throw RangeError("Format string contains an unescaped latin alphabet character `" + t + "`");
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
		(!n?.useAdditionalWeekYearTokens && Va(a) || !n?.useAdditionalDayOfYearTokens && Ba(a)) && Ha(a, t, String(e));
		let o = Aa[a[0]];
		return o(s, a, i.localize, l);
	}).join("");
}
function Xa(e) {
	let t = e.match(Ka);
	return t ? t[1].replace(qa, "'") : e;
}
//#endregion
//#region ../../node_modules/date-fns/getDaysInMonth.js
function Za(e, t) {
	let n = Ni(e, t?.in), r = n.getFullYear(), i = n.getMonth(), a = Mi(n, 0);
	return a.setFullYear(r, i + 1, 0), a.setHours(0, 0, 0, 0), a.getDate();
}
//#endregion
//#region ../../node_modules/date-fns/getMonth.js
function Qa(e, t) {
	return Ni(e, t?.in).getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/getYear.js
function $a(e, t) {
	return Ni(e, t?.in).getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/isAfter.js
function eo(e, t) {
	return +Ni(e) > +Ni(t);
}
//#endregion
//#region ../../node_modules/date-fns/isBefore.js
function to(e, t) {
	return +Ni(e) < +Ni(t);
}
//#endregion
//#region ../../node_modules/date-fns/isSameMonth.js
function no(e, t, n) {
	let [r, i] = Hi(n?.in, e, t);
	return r.getFullYear() === i.getFullYear() && r.getMonth() === i.getMonth();
}
//#endregion
//#region ../../node_modules/date-fns/isSameYear.js
function ro(e, t, n) {
	let [r, i] = Hi(n?.in, e, t);
	return r.getFullYear() === i.getFullYear();
}
//#endregion
//#region ../../node_modules/date-fns/setMonth.js
function io(e, t, n) {
	let r = Ni(e, n?.in), i = r.getFullYear(), a = r.getDate(), o = Mi(n?.in || e, 0);
	o.setFullYear(i, t, 15), o.setHours(0, 0, 0, 0);
	let s = Za(o);
	return r.setMonth(t, Math.min(a, s)), r;
}
//#endregion
//#region ../../node_modules/date-fns/setYear.js
function ao(e, t, n) {
	let r = Ni(e, n?.in);
	return isNaN(+r) ? Mi(n?.in || e, NaN) : (r.setFullYear(t), r);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getBroadcastWeeksInMonth.js
var oo = 5, so = 4;
function co(e, t) {
	let n = t.startOfMonth(e), r = n.getDay() > 0 ? n.getDay() : 7, i = t.addDays(e, -r + 1), a = t.addDays(i, oo * 7 - 1);
	return t.getMonth(e) === t.getMonth(a) ? oo : so;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/startOfBroadcastWeek.js
function lo(e, t) {
	let n = t.startOfMonth(e), r = n.getDay();
	return r === 1 ? n : r === 0 ? t.addDays(n, -6) : t.addDays(n, -1 * (r - 1));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/endOfBroadcastWeek.js
function uo(e, t) {
	let n = lo(e, t), r = co(e, t);
	return t.addDays(n, r * 7 - 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/classes/DateLib.js
var fo = class e {
	constructor(e, t) {
		this.Date = Date, this.today = () => this.overrides?.today ? this.overrides.today() : this.options.timeZone ? Ei.tz(this.options.timeZone) : new this.Date(), this.newDate = (e, t, n) => this.overrides?.newDate ? this.overrides.newDate(e, t, n) : this.options.timeZone ? new Ei(e, t, n, this.options.timeZone) : new Date(e, t, n), this.addDays = (e, t) => this.overrides?.addDays ? this.overrides.addDays(e, t) : Pi(e, t), this.addMonths = (e, t) => this.overrides?.addMonths ? this.overrides.addMonths(e, t) : Fi(e, t), this.addWeeks = (e, t) => this.overrides?.addWeeks ? this.overrides.addWeeks(e, t) : Ki(e, t), this.addYears = (e, t) => this.overrides?.addYears ? this.overrides.addYears(e, t) : qi(e, t), this.differenceInCalendarDays = (e, t) => this.overrides?.differenceInCalendarDays ? this.overrides.differenceInCalendarDays(e, t) : Wi(e, t), this.differenceInCalendarMonths = (e, t) => this.overrides?.differenceInCalendarMonths ? this.overrides.differenceInCalendarMonths(e, t) : $i(e, t), this.eachMonthOfInterval = (e) => this.overrides?.eachMonthOfInterval ? this.overrides.eachMonthOfInterval(e) : na(e), this.eachYearOfInterval = (e) => {
			let t = this.overrides?.eachYearOfInterval ? this.overrides.eachYearOfInterval(e) : oa(e), n = new Set(t.map((e) => this.getYear(e)));
			if (n.size === t.length) return t;
			let r = [];
			return n.forEach((e) => {
				r.push(new Date(e, 0, 1));
			}), r;
		}, this.endOfBroadcastWeek = (e) => this.overrides?.endOfBroadcastWeek ? this.overrides.endOfBroadcastWeek(e) : uo(e, this), this.endOfISOWeek = (e) => this.overrides?.endOfISOWeek ? this.overrides.endOfISOWeek(e) : ca(e), this.endOfMonth = (e) => this.overrides?.endOfMonth ? this.overrides.endOfMonth(e) : ea(e), this.endOfWeek = (e, t) => this.overrides?.endOfWeek ? this.overrides.endOfWeek(e, t) : sa(e, this.options), this.endOfYear = (e) => this.overrides?.endOfYear ? this.overrides.endOfYear(e) : ia(e), this.format = (e, t, n) => {
			let r = this.overrides?.format ? this.overrides.format(e, t, this.options) : Ya(e, t, this.options);
			return this.options.numerals && this.options.numerals !== "latn" ? this.replaceDigits(r) : r;
		}, this.getISOWeek = (e) => this.overrides?.getISOWeek ? this.overrides.getISOWeek(e) : Ca(e), this.getMonth = (e, t) => this.overrides?.getMonth ? this.overrides.getMonth(e, this.options) : Qa(e, this.options), this.getYear = (e, t) => this.overrides?.getYear ? this.overrides.getYear(e, this.options) : $a(e, this.options), this.getWeek = (e, t) => this.overrides?.getWeek ? this.overrides.getWeek(e, this.options) : Ea(e, this.options), this.isAfter = (e, t) => this.overrides?.isAfter ? this.overrides.isAfter(e, t) : eo(e, t), this.isBefore = (e, t) => this.overrides?.isBefore ? this.overrides.isBefore(e, t) : to(e, t), this.isDate = (e) => this.overrides?.isDate ? this.overrides.isDate(e) : Zi(e), this.isSameDay = (e, t) => this.overrides?.isSameDay ? this.overrides.isSameDay(e, t) : Xi(e, t), this.isSameMonth = (e, t) => this.overrides?.isSameMonth ? this.overrides.isSameMonth(e, t) : no(e, t), this.isSameYear = (e, t) => this.overrides?.isSameYear ? this.overrides.isSameYear(e, t) : ro(e, t), this.max = (e) => this.overrides?.max ? this.overrides.max(e) : Ji(e), this.min = (e) => this.overrides?.min ? this.overrides.min(e) : Yi(e), this.setMonth = (e, t) => this.overrides?.setMonth ? this.overrides.setMonth(e, t) : io(e, t), this.setYear = (e, t) => this.overrides?.setYear ? this.overrides.setYear(e, t) : ao(e, t), this.startOfBroadcastWeek = (e, t) => this.overrides?.startOfBroadcastWeek ? this.overrides.startOfBroadcastWeek(e, this) : lo(e, this), this.startOfDay = (e) => this.overrides?.startOfDay ? this.overrides.startOfDay(e) : Ui(e), this.startOfISOWeek = (e) => this.overrides?.startOfISOWeek ? this.overrides.startOfISOWeek(e) : zi(e), this.startOfMonth = (e) => this.overrides?.startOfMonth ? this.overrides.startOfMonth(e) : ra(e), this.startOfWeek = (e, t) => this.overrides?.startOfWeek ? this.overrides.startOfWeek(e, this.options) : Ri(e, this.options), this.startOfYear = (e) => this.overrides?.startOfYear ? this.overrides.startOfYear(e) : aa(e), this.options = {
			locale: xa,
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
fo.yearFirstLocales = new Set([
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
var po = new fo(), mo = class {
	constructor(e, t, n = po) {
		this.date = e, this.displayMonth = t, this.outside = !!(t && !n.isSameMonth(e, t)), this.dateLib = n;
	}
	isEqualTo(e) {
		return this.dateLib.isSameDay(e.date, this.date) && this.dateLib.isSameMonth(e.displayMonth, this.displayMonth);
	}
}, ho = class {
	constructor(e, t) {
		this.date = e, this.weeks = t;
	}
}, go = class {
	constructor(e, t) {
		this.days = t, this.weekNumber = e;
	}
};
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Button.js
function _o(e) {
	return t.createElement("button", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/CaptionLabel.js
function vo(e) {
	return t.createElement("span", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Chevron.js
function yo(e) {
	let { size: n = 24, orientation: r = "left", className: i } = e;
	return t.createElement("svg", {
		className: i,
		width: n,
		height: n,
		viewBox: "0 0 24 24"
	}, r === "up" && t.createElement("polygon", { points: "6.77 17 12.5 11.43 18.24 17 20 15.28 12.5 8 5 15.28" }), r === "down" && t.createElement("polygon", { points: "6.77 8 12.5 13.57 18.24 8 20 9.72 12.5 17 5 9.72" }), r === "left" && t.createElement("polygon", { points: "16 18.112 9.81111111 12 16 5.87733333 14.0888889 4 6 12 14.0888889 20" }), r === "right" && t.createElement("polygon", { points: "8 18.112 14.18888889 12 8 5.87733333 9.91111111 4 18 12 9.91111111 20" }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Day.js
function bo(e) {
	let { day: n, modifiers: r, ...i } = e;
	return t.createElement("td", { ...i });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DayButton.js
function xo(e) {
	let { day: n, modifiers: r, ...i } = e, a = t.useRef(null);
	return t.useEffect(() => {
		r.focused && a.current?.focus();
	}, [r.focused]), t.createElement("button", {
		ref: a,
		...i
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/UI.js
var So;
(function(e) {
	e.Root = "root", e.Chevron = "chevron", e.Day = "day", e.DayButton = "day_button", e.CaptionLabel = "caption_label", e.Dropdowns = "dropdowns", e.Dropdown = "dropdown", e.DropdownRoot = "dropdown_root", e.Footer = "footer", e.MonthGrid = "month_grid", e.MonthCaption = "month_caption", e.MonthsDropdown = "months_dropdown", e.Month = "month", e.Months = "months", e.Nav = "nav", e.NextMonthButton = "button_next", e.PreviousMonthButton = "button_previous", e.Week = "week", e.Weeks = "weeks", e.Weekday = "weekday", e.Weekdays = "weekdays", e.WeekNumber = "week_number", e.WeekNumberHeader = "week_number_header", e.YearsDropdown = "years_dropdown";
})(So ||= {});
var Co;
(function(e) {
	e.disabled = "disabled", e.hidden = "hidden", e.outside = "outside", e.focused = "focused", e.today = "today";
})(Co ||= {});
var wo;
(function(e) {
	e.range_end = "range_end", e.range_middle = "range_middle", e.range_start = "range_start", e.selected = "selected";
})(wo ||= {});
var To;
(function(e) {
	e.weeks_before_enter = "weeks_before_enter", e.weeks_before_exit = "weeks_before_exit", e.weeks_after_enter = "weeks_after_enter", e.weeks_after_exit = "weeks_after_exit", e.caption_after_enter = "caption_after_enter", e.caption_after_exit = "caption_after_exit", e.caption_before_enter = "caption_before_enter", e.caption_before_exit = "caption_before_exit";
})(To ||= {});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Dropdown.js
function Eo(e) {
	let { options: n, className: r, components: i, classNames: a, ...o } = e, s = [a[So.Dropdown], r].join(" "), c = n?.find(({ value: e }) => e === o.value);
	return t.createElement("span", {
		"data-disabled": o.disabled,
		className: a[So.DropdownRoot]
	}, t.createElement(i.Select, {
		className: s,
		...o
	}, n?.map(({ value: e, label: n, disabled: r }) => t.createElement(i.Option, {
		key: e,
		value: e,
		disabled: r
	}, n))), t.createElement("span", {
		className: a[So.CaptionLabel],
		"aria-hidden": !0
	}, c?.label, t.createElement(i.Chevron, {
		orientation: "down",
		size: 18,
		className: a[So.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/DropdownNav.js
function Do(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Footer.js
function Oo(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Month.js
function ko(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i }, e.children);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthCaption.js
function Ao(e) {
	let { calendarMonth: n, displayIndex: r, ...i } = e;
	return t.createElement("div", { ...i });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthGrid.js
function jo(e) {
	return t.createElement("table", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Months.js
function Mo(e) {
	return t.createElement("div", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useDayPicker.js
var No = o(void 0);
function Po() {
	let e = f(No);
	if (e === void 0) throw Error("useDayPicker() must be used within a custom component.");
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/MonthsDropdown.js
function Fo(e) {
	let { components: n } = Po();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Nav.js
function Io(e) {
	let { onPreviousClick: n, onNextClick: r, previousMonth: i, nextMonth: a, ...o } = e, { components: s, classNames: c, labels: { labelPrevious: l, labelNext: u } } = Po(), f = d((e) => {
		a && r?.(e);
	}, [a, r]), p = d((e) => {
		i && n?.(e);
	}, [i, n]);
	return t.createElement("nav", { ...o }, t.createElement(s.PreviousMonthButton, {
		type: "button",
		className: c[So.PreviousMonthButton],
		tabIndex: i ? void 0 : -1,
		"aria-disabled": i ? void 0 : !0,
		"aria-label": l(i),
		onClick: p
	}, t.createElement(s.Chevron, {
		disabled: i ? void 0 : !0,
		className: c[So.Chevron],
		orientation: "left"
	})), t.createElement(s.NextMonthButton, {
		type: "button",
		className: c[So.NextMonthButton],
		tabIndex: a ? void 0 : -1,
		"aria-disabled": a ? void 0 : !0,
		"aria-label": u(a),
		onClick: f
	}, t.createElement(s.Chevron, {
		disabled: a ? void 0 : !0,
		orientation: "right",
		className: c[So.Chevron]
	})));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/NextMonthButton.js
function Lo(e) {
	let { components: n } = Po();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Option.js
function Ro(e) {
	return t.createElement("option", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/PreviousMonthButton.js
function zo(e) {
	let { components: n } = Po();
	return t.createElement(n.Button, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Root.js
function Bo(e) {
	let { rootRef: n, ...r } = e;
	return t.createElement("div", {
		...r,
		ref: n
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Select.js
function Vo(e) {
	return t.createElement("select", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Week.js
function Ho(e) {
	let { week: n, ...r } = e;
	return t.createElement("tr", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekday.js
function Uo(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weekdays.js
function Wo(e) {
	return t.createElement("thead", { "aria-hidden": !0 }, t.createElement("tr", { ...e }));
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumber.js
function Go(e) {
	let { week: n, ...r } = e;
	return t.createElement("th", { ...r });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/WeekNumberHeader.js
function Ko(e) {
	return t.createElement("th", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/Weeks.js
function qo(e) {
	return t.createElement("tbody", { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/YearsDropdown.js
function Jo(e) {
	let { components: n } = Po();
	return t.createElement(n.Dropdown, { ...e });
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/components/custom-components.js
var Yo = /* @__PURE__ */ N({
	Button: () => _o,
	CaptionLabel: () => vo,
	Chevron: () => yo,
	Day: () => bo,
	DayButton: () => xo,
	Dropdown: () => Eo,
	DropdownNav: () => Do,
	Footer: () => Oo,
	Month: () => ko,
	MonthCaption: () => Ao,
	MonthGrid: () => jo,
	Months: () => Mo,
	MonthsDropdown: () => Fo,
	Nav: () => Io,
	NextMonthButton: () => Lo,
	Option: () => Ro,
	PreviousMonthButton: () => zo,
	Root: () => Bo,
	Select: () => Vo,
	Week: () => Ho,
	WeekNumber: () => Go,
	WeekNumberHeader: () => Ko,
	Weekday: () => Uo,
	Weekdays: () => Wo,
	Weeks: () => qo,
	YearsDropdown: () => Jo
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeIncludesDate.js
function Xo(e, t, n = !1, r = po) {
	let { from: i, to: a } = e, { differenceInCalendarDays: o, isSameDay: s } = r;
	return i && a ? (o(a, i) < 0 && ([i, a] = [a, i]), o(t, i) >= +!!n && o(a, t) >= +!!n) : !n && a ? s(a, t) : !n && i ? s(i, t) : !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/typeguards.js
function Zo(e) {
	return !!(e && typeof e == "object" && "before" in e && "after" in e);
}
function Qo(e) {
	return !!(e && typeof e == "object" && "from" in e);
}
function $o(e) {
	return !!(e && typeof e == "object" && "after" in e);
}
function es(e) {
	return !!(e && typeof e == "object" && "before" in e);
}
function ts(e) {
	return !!(e && typeof e == "object" && "dayOfWeek" in e);
}
function ns(e, t) {
	return Array.isArray(e) && e.every(t.isDate);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/dateMatchModifiers.js
function rs(e, t, n = po) {
	let r = Array.isArray(t) ? t : [t], { isSameDay: i, differenceInCalendarDays: a, isAfter: o } = n;
	return r.some((t) => {
		if (typeof t == "boolean") return t;
		if (n.isDate(t)) return i(e, t);
		if (ns(t, n)) return t.includes(e);
		if (Qo(t)) return Xo(t, e, !1, n);
		if (ts(t)) return Array.isArray(t.dayOfWeek) ? t.dayOfWeek.includes(e.getDay()) : t.dayOfWeek === e.getDay();
		if (Zo(t)) {
			let n = a(t.before, e), r = a(t.after, e), i = n > 0, s = r < 0;
			return o(t.before, t.after) ? s && i : i || s;
		}
		return $o(t) ? a(e, t.after) > 0 : es(t) ? a(t.before, e) > 0 : typeof t == "function" ? t(e) : !1;
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/createGetModifiers.js
function is(e, t, n, r, i) {
	let { disabled: a, hidden: o, modifiers: s, showOutsideDays: c, broadcastCalendar: l, today: u } = t, { isSameDay: d, isSameMonth: f, startOfMonth: p, isBefore: m, endOfMonth: h, isAfter: g } = i, _ = n && p(n), v = r && h(r), y = {
		[Co.focused]: [],
		[Co.outside]: [],
		[Co.disabled]: [],
		[Co.hidden]: [],
		[Co.today]: []
	}, b = {};
	for (let t of e) {
		let { date: e, displayMonth: n } = t, r = !!(n && !f(e, n)), p = !!(_ && m(e, _)), h = !!(v && g(e, v)), x = !!(a && rs(e, a, i)), S = !!(o && rs(e, o, i)) || p || h || !l && !c && r || l && c === !1 && r, C = d(e, u ?? i.today());
		r && y.outside.push(t), x && y.disabled.push(t), S && y.hidden.push(t), C && y.today.push(t), s && Object.keys(s).forEach((n) => {
			let r = s?.[n];
			r && rs(e, r, i) && (b[n] ? b[n].push(t) : b[n] = [t]);
		});
	}
	return (e) => {
		let t = {
			[Co.focused]: !1,
			[Co.disabled]: !1,
			[Co.hidden]: !1,
			[Co.outside]: !1,
			[Co.today]: !1
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
function as(e, t, n = {}) {
	return Object.entries(e).filter(([, e]) => e === !0).reduce((e, [r]) => (n[r] ? e.push(n[r]) : t[Co[r]] ? e.push(t[Co[r]]) : t[wo[r]] && e.push(t[wo[r]]), e), [t[So.Day]]);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getComponents.js
function os(e) {
	return {
		...Yo,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDataAttributes.js
function ss(e) {
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
function cs() {
	let e = {};
	for (let t in So) e[So[t]] = `rdp-${So[t]}`;
	for (let t in Co) e[Co[t]] = `rdp-${Co[t]}`;
	for (let t in wo) e[wo[t]] = `rdp-${wo[t]}`;
	for (let t in To) e[To[t]] = `rdp-${To[t]}`;
	return e;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatCaption.js
function ls(e, t, n) {
	return (n ?? new fo(t)).formatMonthYear(e);
}
var us = ls;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatDay.js
function ds(e, t, n) {
	return (n ?? new fo(t)).format(e, "d");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatMonthDropdown.js
function fs(e, t = po) {
	return t.format(e, "LLLL");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekdayName.js
function ps(e, t, n) {
	return (n ?? new fo(t)).format(e, "cccccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumber.js
function ms(e, t = po) {
	return e < 10 ? t.formatNumber(`0${e.toLocaleString()}`) : t.formatNumber(`${e.toLocaleString()}`);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatWeekNumberHeader.js
function hs() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/formatters/formatYearDropdown.js
function gs(e, t = po) {
	return t.format(e, "yyyy");
}
var _s = gs, vs = /* @__PURE__ */ N({
	formatCaption: () => ls,
	formatDay: () => ds,
	formatMonthCaption: () => us,
	formatMonthDropdown: () => fs,
	formatWeekNumber: () => ms,
	formatWeekNumberHeader: () => hs,
	formatWeekdayName: () => ps,
	formatYearCaption: () => _s,
	formatYearDropdown: () => gs
});
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFormatters.js
function ys(e) {
	return e?.formatMonthCaption && !e.formatCaption && (e.formatCaption = e.formatMonthCaption), e?.formatYearCaption && !e.formatYearDropdown && (e.formatYearDropdown = e.formatYearCaption), {
		...vs,
		...e
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonthOptions.js
function bs(e, t, n, r, i) {
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
function xs(e, t = {}, n = {}) {
	let r = { ...t?.[So.Day] };
	return Object.entries(e).filter(([, e]) => e === !0).forEach(([e]) => {
		r = {
			...r,
			...n?.[e]
		};
	}), r;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeekdays.js
function Ss(e, t, n) {
	let r = e.today(), i = n ? e.startOfBroadcastWeek(r, e) : t ? e.startOfISOWeek(r) : e.startOfWeek(r), a = [];
	for (let t = 0; t < 7; t++) {
		let n = e.addDays(i, t);
		a.push(n);
	}
	return a;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getYearOptions.js
function Cs(e, t, n, r, i = !1) {
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
function ws(e, t, n, r) {
	let i = (r ?? new fo(n)).format(e, "PPPP");
	return t.today && (i = `Today, ${i}`), t.selected && (i = `${i}, selected`), i;
}
var Ts = ws;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGrid.js
function Es(e, t, n) {
	return (n ?? new fo(t)).formatMonthYear(e);
}
var Ds = Es;
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelGridcell.js
function Os(e, t, n, r) {
	let i = (r ?? new fo(n)).format(e, "PPPP");
	return t?.today && (i = `Today, ${i}`), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelMonthDropdown.js
function ks(e) {
	return "Choose the Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNav.js
function As() {
	return "";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelNext.js
function js(e) {
	return "Go to the Next Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelPrevious.js
function Ms(e) {
	return "Go to the Previous Month";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekday.js
function Ns(e, t, n) {
	return (n ?? new fo(t)).format(e, "cccc");
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumber.js
function Ps(e, t) {
	return `Week ${e}`;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelWeekNumberHeader.js
function Fs(e) {
	return "Week Number";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/labelYearDropdown.js
function Is(e) {
	return "Choose the Year";
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/labels/index.js
var Ls = /* @__PURE__ */ N({
	labelCaption: () => Ds,
	labelDay: () => Ts,
	labelDayButton: () => ws,
	labelGrid: () => Es,
	labelGridcell: () => Os,
	labelMonthDropdown: () => ks,
	labelNav: () => As,
	labelNext: () => js,
	labelPrevious: () => Ms,
	labelWeekNumber: () => Ps,
	labelWeekNumberHeader: () => Fs,
	labelWeekday: () => Ns,
	labelYearDropdown: () => Is
}), Rs = (e) => e instanceof HTMLElement ? e : null, zs = (e) => [...e.querySelectorAll("[data-animated-month]") ?? []], Bs = (e) => Rs(e.querySelector("[data-animated-month]")), Vs = (e) => Rs(e.querySelector("[data-animated-caption]")), Hs = (e) => Rs(e.querySelector("[data-animated-weeks]")), Us = (e) => Rs(e.querySelector("[data-animated-nav]")), Ws = (e) => Rs(e.querySelector("[data-animated-weekdays]"));
function Gs(e, t, { classNames: n, months: r, focused: i, dateLib: a }) {
	let o = y(null), s = y(r), c = y(!1);
	g(() => {
		let l = s.current;
		if (s.current = r, !t || !e.current || !(e.current instanceof HTMLElement) || r.length === 0 || l.length === 0 || r.length !== l.length) return;
		let u = a.isSameMonth(r[0].date, l[0].date), d = a.isAfter(r[0].date, l[0].date), f = d ? n[To.caption_after_enter] : n[To.caption_before_enter], p = d ? n[To.weeks_after_enter] : n[To.weeks_before_enter], m = o.current, h = e.current.cloneNode(!0);
		if (h instanceof HTMLElement ? (zs(h).forEach((e) => {
			if (!(e instanceof HTMLElement)) return;
			let t = Bs(e);
			t && e.contains(t) && e.removeChild(t);
			let n = Vs(e);
			n && n.classList.remove(f);
			let r = Hs(e);
			r && r.classList.remove(p);
		}), o.current = h) : o.current = null, c.current || u || i) return;
		let g = m instanceof HTMLElement ? zs(m) : [], _ = zs(e.current);
		if (_?.every((e) => e instanceof HTMLElement) && g && g.every((e) => e instanceof HTMLElement)) {
			c.current = !0;
			let t = [];
			e.current.style.isolation = "isolate";
			let r = Us(e.current);
			r && (r.style.zIndex = "1"), _.forEach((i, a) => {
				let o = g[a];
				if (!o) return;
				i.style.position = "relative", i.style.overflow = "hidden";
				let s = Vs(i);
				s && s.classList.add(f);
				let l = Hs(i);
				l && l.classList.add(p);
				let u = () => {
					c.current = !1, e.current && (e.current.style.isolation = ""), r && (r.style.zIndex = ""), s && s.classList.remove(f), l && l.classList.remove(p), i.style.position = "", i.style.overflow = "", i.contains(o) && i.removeChild(o);
				};
				t.push(u), o.style.pointerEvents = "none", o.style.position = "absolute", o.style.overflow = "hidden", o.setAttribute("aria-hidden", "true");
				let m = Ws(o);
				m && (m.style.opacity = "0");
				let h = Vs(o);
				h && (h.classList.add(d ? n[To.caption_before_exit] : n[To.caption_after_exit]), h.addEventListener("animationend", u));
				let _ = Hs(o);
				_ && _.classList.add(d ? n[To.weeks_before_exit] : n[To.weeks_after_exit]), i.insertBefore(o, i.firstChild);
			});
		}
	});
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDates.js
function Ks(e, t, n, r) {
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
function qs(e) {
	let t = [];
	return e.reduce((e, n) => {
		let r = n.weeks.reduce((e, t) => e.concat(t.days.slice()), t.slice());
		return e.concat(r.slice());
	}, t.slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getDisplayMonths.js
function Js(e, t, n, r) {
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
function Ys(e, t, n, r) {
	let { month: i, defaultMonth: a, today: o = r.today(), numberOfMonths: s = 1 } = e, c = i || a || o, { differenceInCalendarMonths: l, addMonths: u, startOfMonth: d } = r;
	return n && l(n, c) < s - 1 && (c = u(n, -1 * (s - 1))), t && l(c, t) < 0 && (c = t), d(c);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getMonths.js
function Xs(e, t, n, r) {
	let { addDays: i, endOfBroadcastWeek: a, endOfISOWeek: o, endOfMonth: s, endOfWeek: c, getISOWeek: l, getWeek: u, startOfBroadcastWeek: d, startOfISOWeek: f, startOfWeek: p } = r, m = e.reduce((e, m) => {
		let h = n.broadcastCalendar ? d(m, r) : n.ISOWeek ? f(m) : p(m), g = n.broadcastCalendar ? a(m) : n.ISOWeek ? o(s(m)) : c(s(m)), _ = t.filter((e) => e >= h && e <= g), v = n.broadcastCalendar ? 35 : 42;
		if (n.fixedWeeks && _.length < v) {
			let e = t.filter((e) => {
				let t = v - _.length;
				return e > g && e <= i(g, t);
			});
			_.push(...e);
		}
		let y = new ho(m, _.reduce((e, t) => {
			let i = n.ISOWeek ? l(t) : u(t), a = e.find((e) => e.weekNumber === i), o = new mo(t, m, r);
			return a ? a.days.push(o) : e.push(new go(i, [o])), e;
		}, []));
		return e.push(y), e;
	}, []);
	return n.reverseMonths ? m.reverse() : m;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNavMonth.js
function Zs(e, t) {
	let { startMonth: n, endMonth: r } = e, { startOfYear: i, startOfDay: a, startOfMonth: o, endOfMonth: s, addYears: c, endOfYear: l, newDate: u, today: d } = t, { fromYear: f, toYear: p, fromMonth: m, toMonth: h } = e;
	!n && m && (n = m), !n && f && (n = t.newDate(f, 0, 1)), !r && h && (r = h), !r && p && (r = u(p, 11, 31));
	let g = e.captionLayout === "dropdown" || e.captionLayout === "dropdown-years";
	return n ? n = o(n) : f ? n = u(f, 0, 1) : !n && g && (n = i(c(e.today ?? d(), -100))), r ? r = s(r) : p ? r = u(p, 11, 31) : !r && g && (r = l(e.today ?? d())), [n && a(n), r && a(r)];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getNextMonth.js
function Qs(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a = 1 } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a : 1, u = o(e);
	if (!t || !(c(t, e) < a)) return s(u, l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getPreviousMonth.js
function $s(e, t, n, r) {
	if (n.disableNavigation) return;
	let { pagedNavigation: i, numberOfMonths: a } = n, { startOfMonth: o, addMonths: s, differenceInCalendarMonths: c } = r, l = i ? a ?? 1 : 1, u = o(e);
	if (!t || !(c(u, t) <= 0)) return s(u, -l);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getWeeks.js
function ec(e) {
	return e.reduce((e, t) => e.concat(t.weeks.slice()), [].slice());
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/useControlledValue.js
function tc(e, t) {
	let [n, r] = b(e);
	return [t === void 0 ? n : t, r];
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useCalendar.js
function nc(e, t) {
	let [n, r] = Zs(e, t), { startOfMonth: i, endOfMonth: a } = t, o = Ys(e, n, r, t), [s, c] = tc(o, e.month ? o : void 0);
	p(() => {
		c(Ys(e, n, r, t));
	}, [e.timeZone]);
	let l = Js(s, r, e, t), u = Xs(l, Ks(l, e.endMonth ? a(e.endMonth) : void 0, e, t), e, t), d = ec(u), f = qs(u), m = $s(s, n, e, t), h = Qs(s, r, e, t), { disableNavigation: g, onMonthChange: _ } = e, v = (e) => d.some((t) => t.days.some((t) => t.isEqualTo(e))), y = (e) => {
		if (g) return;
		let t = i(e);
		n && t < i(n) && (t = i(n)), r && t > i(r) && (t = i(r)), c(t), _?.(t);
	};
	return {
		months: u,
		weeks: d,
		days: f,
		navStart: n,
		navEnd: r,
		previousMonth: m,
		nextMonth: h,
		goToMonth: y,
		goToDay: (e) => {
			v(e) || y(e.date);
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/calculateFocusTarget.js
var rc;
(function(e) {
	e[e.Today = 0] = "Today", e[e.Selected = 1] = "Selected", e[e.LastFocused = 2] = "LastFocused", e[e.FocusedModifier = 3] = "FocusedModifier";
})(rc ||= {});
function ic(e) {
	return !e[Co.disabled] && !e[Co.hidden] && !e[Co.outside];
}
function ac(e, t, n, r) {
	let i, a = -1;
	for (let o of e) {
		let e = t(o);
		ic(e) && (e[Co.focused] && a < rc.FocusedModifier ? (i = o, a = rc.FocusedModifier) : r?.isEqualTo(o) && a < rc.LastFocused ? (i = o, a = rc.LastFocused) : n(o.date) && a < rc.Selected ? (i = o, a = rc.Selected) : e[Co.today] && a < rc.Today && (i = o, a = rc.Today));
	}
	return i ||= e.find((e) => ic(t(e))), i;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/helpers/getFocusableDate.js
function oc(e, t, n, r, i, a, o) {
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
function sc(e, t, n, r, i, a, o, s = 0) {
	if (s > 365) return;
	let c = oc(e, t, n.date, r, i, a, o), l = !!(a.disabled && rs(c, a.disabled, o)), u = !!(a.hidden && rs(c, a.hidden, o)), d = new mo(c, c, o);
	return !l && !u ? d : sc(e, t, d, r, i, a, o, s + 1);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/useFocus.js
function cc(e, t, n, r, i) {
	let { autoFocus: a } = e, [o, s] = b(), c = ac(t.days, n, r || (() => !1), o), [l, u] = b(a ? c : void 0);
	return {
		isFocusTarget: (e) => !!c?.isEqualTo(e),
		setFocused: u,
		focused: l,
		blur: () => {
			s(l), u(void 0);
		},
		moveFocus: (n, r) => {
			if (!l) return;
			let a = sc(n, r, l, t.navStart, t.navEnd, e, i);
			a && (e.disableNavigation && !t.days.some((e) => e.isEqualTo(a)) || (t.goToDay(a), u(a)));
		}
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useMulti.js
function lc(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = tc(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t, l = (e) => s?.some((t) => c(t, e)) ?? !1, { min: u, max: d } = e;
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
function uc(e, t, n = 0, r = 0, i = !1, a = po) {
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
function dc(e, t, n = po) {
	let r = Array.isArray(t) ? t : [t], i = e.from, a = n.differenceInCalendarDays(e.to, e.from), o = Math.min(a, 6);
	for (let e = 0; e <= o; e++) {
		if (r.includes(i.getDay())) return !0;
		i = n.addDays(i, 1);
	}
	return !1;
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeOverlaps.js
function fc(e, t, n = po) {
	return Xo(e, t.from, !1, n) || Xo(e, t.to, !1, n) || Xo(t, e.from, !1, n) || Xo(t, e.to, !1, n);
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/utils/rangeContainsModifiers.js
function pc(e, t, n = po) {
	let r = Array.isArray(t) ? t : [t];
	if (r.filter((e) => typeof e != "function").some((t) => typeof t == "boolean" ? t : n.isDate(t) ? Xo(e, t, !1, n) : ns(t, n) ? t.some((t) => Xo(e, t, !1, n)) : Qo(t) ? t.from && t.to ? fc(e, {
		from: t.from,
		to: t.to
	}, n) : !1 : ts(t) ? dc(e, t.dayOfWeek, n) : Zo(t) ? n.isAfter(t.before, t.after) ? fc(e, {
		from: n.addDays(t.after, 1),
		to: n.addDays(t.before, -1)
	}, n) : rs(e.from, t, n) || rs(e.to, t, n) : $o(t) || es(t) ? rs(e.from, t, n) || rs(e.to, t, n) : !1)) return !0;
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
function mc(e, t) {
	let { disabled: n, excludeDisabled: r, selected: i, required: a, onSelect: o } = e, [s, c] = tc(i, o ? i : void 0), l = o ? i : s;
	return {
		selected: l,
		select: (i, s, u) => {
			let { min: d, max: f } = e, p = i ? uc(i, l, d, f, a, t) : void 0;
			return r && n && p?.from && p.to && pc({
				from: p.from,
				to: p.to
			}, n, t) && (p.from = i, p.to = void 0), o || c(p), o?.(p, i, s, u), p;
		},
		isSelected: (e) => l && Xo(l, e, !1, t)
	};
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/selection/useSingle.js
function hc(e, t) {
	let { selected: n, required: r, onSelect: i } = e, [a, o] = tc(n, i ? n : void 0), s = i ? n : a, { isSameDay: c } = t;
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
function gc(e, t) {
	let n = hc(e, t), r = lc(e, t), i = mc(e, t);
	switch (e.mode) {
		case "single": return n;
		case "multiple": return r;
		case "range": return i;
		default: return;
	}
}
//#endregion
//#region ../../node_modules/react-day-picker/dist/esm/DayPicker.js
function _c(e) {
	let n = e;
	n.timeZone && (n = { ...e }, n.today &&= new Ei(n.today, n.timeZone), n.month &&= new Ei(n.month, n.timeZone), n.defaultMonth &&= new Ei(n.defaultMonth, n.timeZone), n.startMonth &&= new Ei(n.startMonth, n.timeZone), n.endMonth &&= new Ei(n.endMonth, n.timeZone), n.mode === "single" && n.selected ? n.selected = new Ei(n.selected, n.timeZone) : n.mode === "multiple" && n.selected ? n.selected = n.selected?.map((e) => new Ei(e, n.timeZone)) : n.mode === "range" && n.selected && (n.selected = {
		from: n.selected.from ? new Ei(n.selected.from, n.timeZone) : void 0,
		to: n.selected.to ? new Ei(n.selected.to, n.timeZone) : void 0
	}));
	let { components: r, formatters: i, labels: a, dateLib: o, locale: s, classNames: c } = _(() => {
		let e = {
			...xa,
			...n.locale
		};
		return {
			dateLib: new fo({
				locale: e,
				weekStartsOn: n.broadcastCalendar ? 1 : n.weekStartsOn,
				firstWeekContainsDate: n.firstWeekContainsDate,
				useAdditionalWeekYearTokens: n.useAdditionalWeekYearTokens,
				useAdditionalDayOfYearTokens: n.useAdditionalDayOfYearTokens,
				timeZone: n.timeZone,
				numerals: n.numerals
			}, n.dateLib),
			components: os(n.components),
			formatters: ys(n.formatters),
			labels: {
				...Ls,
				...n.labels
			},
			locale: e,
			classNames: {
				...cs(),
				...n.classNames
			}
		};
	}, [
		n.locale,
		n.broadcastCalendar,
		n.weekStartsOn,
		n.firstWeekContainsDate,
		n.useAdditionalWeekYearTokens,
		n.useAdditionalDayOfYearTokens,
		n.timeZone,
		n.numerals,
		n.dateLib,
		n.components,
		n.formatters,
		n.labels,
		n.classNames
	]), { captionLayout: l, mode: u, navLayout: f, numberOfMonths: p = 1, onDayBlur: m, onDayClick: h, onDayFocus: g, onDayKeyDown: v, onDayMouseEnter: b, onDayMouseLeave: x, onNextClick: S, onPrevClick: C, showWeekNumber: w, styles: T } = n, { formatCaption: E, formatDay: D, formatMonthDropdown: O, formatWeekNumber: k, formatWeekNumberHeader: A, formatWeekdayName: j, formatYearDropdown: M } = i, N = nc(n, o), { days: P, months: F, navStart: I, navEnd: ee, previousMonth: L, nextMonth: R, goToMonth: z } = N, B = is(P, n, I, ee, o), { isSelected: V, select: H, selected: U } = gc(n, o) ?? {}, { blur: W, focused: G, isFocusTarget: K, moveFocus: te, setFocused: ne } = cc(n, N, B, V ?? (() => !1), o), { labelDayButton: re, labelGridcell: q, labelGrid: ie, labelMonthDropdown: ae, labelNav: oe, labelPrevious: se, labelNext: ce, labelWeekday: le, labelWeekNumber: ue, labelWeekNumberHeader: de, labelYearDropdown: fe } = a, pe = _(() => Ss(o, n.ISOWeek), [o, n.ISOWeek]), me = u !== void 0 || h !== void 0, he = d(() => {
		L && (z(L), C?.(L));
	}, [
		L,
		z,
		C
	]), ge = d(() => {
		R && (z(R), S?.(R));
	}, [
		z,
		R,
		S
	]), _e = d((e, t) => (n) => {
		n.preventDefault(), n.stopPropagation(), ne(e), H?.(e.date, t, n), h?.(e.date, t, n);
	}, [
		H,
		h,
		ne
	]), ve = d((e, t) => (n) => {
		ne(e), g?.(e.date, t, n);
	}, [g, ne]), ye = d((e, t) => (n) => {
		W(), m?.(e.date, t, n);
	}, [W, m]), be = d((e, t) => (r) => {
		let i = {
			ArrowLeft: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "after" : "before"],
			ArrowRight: [r.shiftKey ? "month" : "day", n.dir === "rtl" ? "before" : "after"],
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
			te(e, t);
		}
		v?.(e.date, t, r);
	}, [
		te,
		v,
		n.dir
	]), xe = d((e, t) => (n) => {
		b?.(e.date, t, n);
	}, [b]), Se = d((e, t) => (n) => {
		x?.(e.date, t, n);
	}, [x]), Ce = d((e) => (t) => {
		let n = Number(t.target.value);
		z(o.setMonth(o.startOfMonth(e), n));
	}, [o, z]), we = d((e) => (t) => {
		let n = Number(t.target.value);
		z(o.setYear(o.startOfMonth(e), n));
	}, [o, z]), { className: J, style: Te } = _(() => ({
		className: [c[So.Root], n.className].filter(Boolean).join(" "),
		style: {
			...T?.[So.Root],
			...n.style
		}
	}), [
		c,
		n.className,
		n.style,
		T
	]), Ee = ss(n), De = y(null);
	Gs(De, !!n.animate, {
		classNames: c,
		months: F,
		focused: G,
		dateLib: o
	});
	let Oe = {
		dayPickerProps: n,
		selected: U,
		select: H,
		isSelected: V,
		months: F,
		nextMonth: R,
		previousMonth: L,
		goToMonth: z,
		getModifiers: B,
		components: r,
		classNames: c,
		styles: T,
		labels: a,
		formatters: i
	};
	return t.createElement(No.Provider, { value: Oe }, t.createElement(r.Root, {
		rootRef: n.animate ? De : void 0,
		className: J,
		style: Te,
		dir: n.dir,
		id: n.id,
		lang: n.lang,
		nonce: n.nonce,
		title: n.title,
		role: n.role,
		"aria-label": n["aria-label"],
		"aria-labelledby": n["aria-labelledby"],
		...Ee
	}, t.createElement(r.Months, {
		className: c[So.Months],
		style: T?.[So.Months]
	}, !n.hideNavigation && !f && t.createElement(r.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: c[So.Nav],
		style: T?.[So.Nav],
		"aria-label": oe(),
		onPreviousClick: he,
		onNextClick: ge,
		previousMonth: L,
		nextMonth: R
	}), F.map((e, a) => t.createElement(r.Month, {
		"data-animated-month": n.animate ? "true" : void 0,
		className: c[So.Month],
		style: T?.[So.Month],
		key: a,
		displayIndex: a,
		calendarMonth: e
	}, f === "around" && !n.hideNavigation && a === 0 && t.createElement(r.PreviousMonthButton, {
		type: "button",
		className: c[So.PreviousMonthButton],
		tabIndex: L ? void 0 : -1,
		"aria-disabled": L ? void 0 : !0,
		"aria-label": se(L),
		onClick: he,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(r.Chevron, {
		disabled: L ? void 0 : !0,
		className: c[So.Chevron],
		orientation: n.dir === "rtl" ? "right" : "left"
	})), t.createElement(r.MonthCaption, {
		"data-animated-caption": n.animate ? "true" : void 0,
		className: c[So.MonthCaption],
		style: T?.[So.MonthCaption],
		calendarMonth: e,
		displayIndex: a
	}, l?.startsWith("dropdown") ? t.createElement(r.DropdownNav, {
		className: c[So.Dropdowns],
		style: T?.[So.Dropdowns]
	}, (() => {
		let a = l === "dropdown" || l === "dropdown-months" ? t.createElement(r.MonthsDropdown, {
			key: "month",
			className: c[So.MonthsDropdown],
			"aria-label": ae(),
			classNames: c,
			components: r,
			disabled: !!n.disableNavigation,
			onChange: Ce(e.date),
			options: bs(e.date, I, ee, i, o),
			style: T?.[So.Dropdown],
			value: o.getMonth(e.date)
		}) : t.createElement("span", { key: "month" }, O(e.date, o)), s = l === "dropdown" || l === "dropdown-years" ? t.createElement(r.YearsDropdown, {
			key: "year",
			className: c[So.YearsDropdown],
			"aria-label": fe(o.options),
			classNames: c,
			components: r,
			disabled: !!n.disableNavigation,
			onChange: we(e.date),
			options: Cs(I, ee, i, o, !!n.reverseYears),
			style: T?.[So.Dropdown],
			value: o.getYear(e.date)
		}) : t.createElement("span", { key: "year" }, M(e.date, o));
		return o.getMonthYearOrder() === "year-first" ? [s, a] : [a, s];
	})(), t.createElement("span", {
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
	}, E(e.date, o.options, o))) : t.createElement(r.CaptionLabel, {
		className: c[So.CaptionLabel],
		role: "status",
		"aria-live": "polite"
	}, E(e.date, o.options, o))), f === "around" && !n.hideNavigation && a === p - 1 && t.createElement(r.NextMonthButton, {
		type: "button",
		className: c[So.NextMonthButton],
		tabIndex: R ? void 0 : -1,
		"aria-disabled": R ? void 0 : !0,
		"aria-label": ce(R),
		onClick: ge,
		"data-animated-button": n.animate ? "true" : void 0
	}, t.createElement(r.Chevron, {
		disabled: R ? void 0 : !0,
		className: c[So.Chevron],
		orientation: n.dir === "rtl" ? "left" : "right"
	})), a === p - 1 && f === "after" && !n.hideNavigation && t.createElement(r.Nav, {
		"data-animated-nav": n.animate ? "true" : void 0,
		className: c[So.Nav],
		style: T?.[So.Nav],
		"aria-label": oe(),
		onPreviousClick: he,
		onNextClick: ge,
		previousMonth: L,
		nextMonth: R
	}), t.createElement(r.MonthGrid, {
		role: "grid",
		"aria-multiselectable": u === "multiple" || u === "range",
		"aria-label": ie(e.date, o.options, o) || void 0,
		className: c[So.MonthGrid],
		style: T?.[So.MonthGrid]
	}, !n.hideWeekdays && t.createElement(r.Weekdays, {
		"data-animated-weekdays": n.animate ? "true" : void 0,
		className: c[So.Weekdays],
		style: T?.[So.Weekdays]
	}, w && t.createElement(r.WeekNumberHeader, {
		"aria-label": de(o.options),
		className: c[So.WeekNumberHeader],
		style: T?.[So.WeekNumberHeader],
		scope: "col"
	}, A()), pe.map((e) => t.createElement(r.Weekday, {
		"aria-label": le(e, o.options, o),
		className: c[So.Weekday],
		key: String(e),
		style: T?.[So.Weekday],
		scope: "col"
	}, j(e, o.options, o)))), t.createElement(r.Weeks, {
		"data-animated-weeks": n.animate ? "true" : void 0,
		className: c[So.Weeks],
		style: T?.[So.Weeks]
	}, e.weeks.map((e) => t.createElement(r.Week, {
		className: c[So.Week],
		key: e.weekNumber,
		style: T?.[So.Week],
		week: e
	}, w && t.createElement(r.WeekNumber, {
		week: e,
		style: T?.[So.WeekNumber],
		"aria-label": ue(e.weekNumber, { locale: s }),
		className: c[So.WeekNumber],
		scope: "row",
		role: "rowheader"
	}, k(e.weekNumber, o)), e.days.map((e) => {
		let { date: i } = e, a = B(e);
		if (a[Co.focused] = !a.hidden && !!G?.isEqualTo(e), a[wo.selected] = V?.(i) || a.selected, Qo(U)) {
			let { from: e, to: t } = U;
			a[wo.range_start] = !!(e && t && o.isSameDay(i, e)), a[wo.range_end] = !!(e && t && o.isSameDay(i, t)), a[wo.range_middle] = Xo(U, i, !0, o);
		}
		let s = xs(a, T, n.modifiersStyles), l = as(a, c, n.modifiersClassNames), u = !me && !a.hidden ? q(i, a, o.options, o) : void 0;
		return t.createElement(r.Day, {
			key: `${o.format(i, "yyyy-MM-dd")}_${o.format(e.displayMonth, "yyyy-MM")}`,
			day: e,
			modifiers: a,
			className: l.join(" "),
			style: s,
			role: "gridcell",
			"aria-selected": a.selected || void 0,
			"aria-label": u,
			"data-day": o.format(i, "yyyy-MM-dd"),
			"data-month": e.outside ? o.format(i, "yyyy-MM") : void 0,
			"data-selected": a.selected || void 0,
			"data-disabled": a.disabled || void 0,
			"data-hidden": a.hidden || void 0,
			"data-outside": e.outside || void 0,
			"data-focused": a.focused || void 0,
			"data-today": a.today || void 0
		}, !a.hidden && me ? t.createElement(r.DayButton, {
			className: c[So.DayButton],
			style: T?.[So.DayButton],
			type: "button",
			day: e,
			modifiers: a,
			disabled: a.disabled || void 0,
			tabIndex: K(e) ? 0 : -1,
			"aria-label": re(i, a, o.options, o),
			onClick: _e(e, a),
			onBlur: ye(e, a),
			onFocus: ve(e, a),
			onKeyDown: be(e, a),
			onMouseEnter: xe(e, a),
			onMouseLeave: Se(e, a)
		}, D(i, o.options, o)) : !a.hidden && D(e.date, o.options, o));
	})))))))), n.footer && t.createElement(r.Footer, {
		className: c[So.Footer],
		style: T?.[So.Footer],
		role: "status",
		"aria-live": "polite"
	}, n.footer)));
}
//#endregion
//#region ../format/src/money.ts
var vc = (e) => {
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
}, yc = (e, t) => {
	try {
		let n = new Intl.NumberFormat(t ?? void 0, {
			style: "currency",
			currency: e
		}).resolvedOptions().maximumFractionDigits;
		return typeof n == "number" ? n : 2;
	} catch {
		return 2;
	}
}, bc = ({ currency: e, locale: t, formatOptions: n, useCurrencyScale: r = !1, defaultMaxFractionDigits: i = 2 }) => {
	let a = {
		style: "currency",
		currencyDisplay: "code",
		...n,
		currency: e
	};
	if (r) {
		let n = yc(e, t);
		a.minimumFractionDigits === void 0 && (a.minimumFractionDigits = n), a.maximumFractionDigits === void 0 && (a.maximumFractionDigits = n);
	} else a.maximumFractionDigits === void 0 && (a.maximumFractionDigits = i);
	return new Intl.NumberFormat(t ?? void 0, a);
}, xc = (e, t) => {
	let n = vc(e.value);
	return n === null ? "" : bc({
		currency: e.currency,
		locale: t?.locale,
		useCurrencyScale: !0
	}).format(n);
}, Sc = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e, n = typeof t.currency == "string", r = vc(t.value) !== null;
	return n && r;
}, Cc = "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$";
new RegExp(Cc, "u");
var wc = "^(https?://.+|/.*)$", Tc = "^\\d+(\\.\\d{1,2})?$", Ec = "^[a-zA-Z]{2,3}(?:-[a-zA-Z0-9]{2,8})*$", Dc = /^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})/, Oc = "\\s+";
new RegExp(Oc, "g"), new RegExp(Oc);
var kc = /^#?([a-fA-F0-9]{6})$/, Ac = /^#?([a-fA-F0-9]{3})$/, jc = /^[0-9]$/, Mc = /^[0-9a-z]$/i, Nc = /^[a-z]$/i, Pc = /[?#]/u, Fc = /^https:\/\//iu, Ic = /^data:font\//iu, Lc = /^[-+]?\d*(?:\.(\d*))?(?:e[-+]?(\d+))?$/i, Rc = /\.?0+$/, zc = /\D/g, Bc = /(.{4})/g, Vc = /,/g, Hc = /[^\d.]/g;
new RegExp(wc, "u"), new RegExp(Cc, "u");
var Uc = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim();
	return t.length > 0 ? t : null;
}, Wc = 15, Gc = 34, Kc = /[^a-z0-9]/gi, qc = /^[A-Z]{2}[0-9]{2}[A-Z0-9]+$/, Jc = {
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
}, Yc = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim();
	return t.length === 0 ? "" : t.replace(Kc, "").toUpperCase();
}, Xc = (e) => {
	let t = Yc(e);
	return t.length === 0 ? "" : t.replace(Bc, "$1 ").trim();
}, Zc = {
	formatDisplayValue: (e) => Xc(e),
	parseUserInput: (e) => Yc(e)
}, Qc = (e) => {
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
}, $c = (e) => {
	let t = Yc(e);
	if (t.length === 0 || t.length < Wc || t.length > Gc || !qc.test(t)) return !1;
	let n = Jc[t.slice(0, 2)];
	return !n || t.length !== n ? !1 : Qc(t) === 1;
}, el = (e) => {
	if (typeof e != "string") return "";
	let t = e.trim().replace(Vc, ".");
	if (t.length === 0) return "";
	let n = t.replace(Hc, "");
	if (n.length === 0) return "";
	let [r = "", ...i] = n.split("."), a = i.pop() ?? "", o = `${r}${i.join("")}`;
	return t.endsWith(".") ? `${o}.` : a.length === 0 ? o : `${o}.${a}`;
}, tl = (e) => {
	let t = el(e);
	return t.length === 0 || t === "." ? "" : t.startsWith(".") ? `0${t}` : t.endsWith(".") ? t.slice(0, -1) : t;
}, nl = (e) => tl(e).length > 0, rl = (e) => {
	if (typeof e != "string" || e.trim().length === 0) return [];
	let t = /* @__PURE__ */ new Set(), n = [];
	return e.split(",").forEach((e) => {
		let r = tl(e);
		r.length !== 0 && (t.has(r) || (t.add(r), n.push(r)));
	}), n;
}, il = /^\d{4}-\d{2}-\d{2}$/, al = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}/, ol = (e) => il.test(e) || Dc.test(e) || al.test(e), sl = (e, t = {}) => {
	if (e == null) return null;
	if (e instanceof Date) return Number.isNaN(e.getTime()) ? null : e;
	if (typeof e == "number") {
		if (t.strict || !Number.isFinite(e)) return null;
		let n = new Date(e);
		return Number.isNaN(n.getTime()) ? null : n;
	}
	if (typeof e == "string") {
		let n = e.trim();
		if (!n || t.strict && !ol(n)) return null;
		let r = new Date(n);
		return Number.isNaN(r.getTime()) ? null : r;
	}
	return null;
}, cl = ({ locale: e, formatOptions: t }) => new Intl.DateTimeFormat(e ?? void 0, t), ll = (e, t, n) => {
	let r = sl(e);
	if (!r) return "—";
	try {
		return cl({
			locale: t,
			formatOptions: n
		}).format(r);
	} catch {
		return r.toISOString();
	}
}, ul = new RegExp(Ec, "u"), dl = new Intl.Locale("en-GB"), fl = (e, t = dl) => {
	if (e instanceof Intl.Locale) return e;
	if (typeof e == "string" && e.length > 0) {
		if (!ul.test(e)) return t;
		try {
			return new Intl.Locale(e);
		} catch {}
		try {
			let [t] = Intl.getCanonicalLocales(e);
			if (t) return new Intl.Locale(t);
		} catch {}
	}
	return t;
}, pl = (e) => e instanceof Intl.Locale ? e.toString() : fl(e).toString(), ml = "This field is required", hl = "Invalid value", gl = (e, t) => typeof e == "string" && e.trim().length > 0 ? e : t, _l = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let { pattern: e } = n;
		if (!(typeof e != "string" || e.length === 0)) try {
			t.push({
				pattern: e,
				regex: new RegExp(e),
				message: gl(n.invalidMessage, hl)
			});
		} catch (t) {
			if (process.env.NODE_ENV !== "production") {
				let n = t instanceof Error ? t.message : String(t);
				console.warn("[validation] Unable to compile RegExp for pattern \"%s\": %s", e, n);
			}
		}
	}
	return t;
}, vl = (e, { forceRequired: t = !1 } = {}) => {
	let n = t || !!e?.required?.value, r = _l(e?.rules), i = !!e?.iban?.value;
	if (!n && r.length === 0 && !i) return;
	let a = n ? {
		value: !0,
		invalidMessage: gl(e?.required?.invalidMessage, ml)
	} : void 0, o = i ? {
		value: !0,
		invalidMessage: gl(e?.iban?.invalidMessage, hl)
	} : void 0;
	return {
		...a ? { required: a } : {},
		...o ? { iban: o } : {},
		...r.length > 0 ? { rules: r } : {}
	};
}, yl = (e, t) => {
	let n = vl(e, t), r = !!n?.required, i = n?.required?.invalidMessage ?? ml, a = !!n?.iban?.value, o = n?.iban?.invalidMessage ?? hl;
	return {
		config: n,
		evaluate: (e, t) => {
			let s = !!t?.includeRequired;
			if (e == null) return s && r ? i : void 0;
			let c = null;
			if (typeof e == "string" ? c = e : (typeof e == "number" || typeof e == "boolean") && (c = String(e)), c === null) return s && r ? i : void 0;
			let l = c.trim();
			if (l.length === 0) return s && r ? i : void 0;
			let u = a ? Yc(l) : l;
			for (let { regex: e, message: t } of n?.rules ?? []) if (!e.test(u)) return t;
			if (a && !$c(l)) return o;
		}
	};
}, bl = (e, t) => {
	if (!(!e || typeof e != "object" || typeof t != "string")) return t.split(".").reduce((e, t) => {
		if (!(!e || typeof e != "object")) return e[t];
	}, e);
}, xl = (e, t) => {
	if (e) {
		if (typeof e == "function") {
			e(t);
			return;
		}
		try {
			e.current = t;
		} catch {}
	}
}, Sl = (e) => {
	if (e != null) {
		if (typeof e == "string") return e;
		if (e instanceof Error) return e.message;
		if (typeof e == "number" || typeof e == "boolean") return String(e);
	}
}, Cl = (e) => e == null ? !1 : typeof e == "string" ? e.length > 0 : typeof e == "number" ? !Number.isNaN(e) : typeof e == "boolean" ? !0 : Array.isArray(e) ? e.length > 0 : e instanceof Date ? !Number.isNaN(e.getTime()) : !1, wl = (e) => typeof e == "object" && !!e, Tl = (e, t) => {
	if (!(!t || !wl(e))) return bl(e, t);
}, El = (e) => e ? typeof e == "boolean" ? e : Array.isArray(e) ? e.some(El) : wl(e) ? Object.values(e).some(El) : !!e : !1, Dl = ({ forwardedRef: e, field: t, meta: n, form: r, innerRef: i, id: a, name: o, value: s, defaultValue: c, explicitError: l, helperText: u, onChange: f, onBlur: p }) => {
	let m = t?.name ?? o, h = a ?? m, { errors: g, touched: _, submitCount: v } = r ?? {}, y = wl(g) ? g : void 0, b = wl(_) ? _ : void 0, x = v ?? 0, S = l ?? n?.error ?? Tl(y, m), C = n?.touched ?? Tl(b, m), w = !!(t || r || n), T = S != null, E = w && El(b), D = T && (l !== void 0 || !w || C || E || x > 0) ? l ?? Sl(S) : void 0, O = D ? void 0 : u, k = d((t) => {
		xl(e, t), xl(i, t);
	}, [e, i]), A = d((e) => {
		t?.onChange(e), f?.(e);
	}, [t, f]), j = d((e) => {
		t?.onBlur(e), p?.(e);
	}, [t, p]), M = t?.value ?? s, N = Cl(M ?? c), P = {};
	return P.ref = k, P.onBlur = j, P.onChange = A, h !== void 0 && (P.id = h), m !== void 0 && (P.name = m), M === void 0 ? c !== void 0 && (P.defaultValue = c) : P.value = M, {
		inputId: h,
		resolvedName: m,
		mergedRef: k,
		handleChange: A,
		handleBlur: j,
		resolvedValue: M,
		hasValue: N,
		errorContent: D,
		helperContent: O,
		sharedProps: P
	};
}, Ol = ({ value: e, required: t = !1, validation: n, metaTouched: r = !1, submitCount: i = 0, resolvedName: a, setFieldError: o, handleChange: s, handleBlur: c, setManagedError: l, getValueFromChangeEvent: u, normalizeValue: f }) => {
	let { config: m, evaluate: h } = _(() => yl(n, { forceRequired: t }), [t, n]), g = !!m, v = d((e) => f ? f(e) : e, [f]), b = y({ display: !1 }), x = d((e, t) => {
		let n = typeof e == "string" ? e : void 0, r = b.current;
		r.message === n && r.display === t || (b.current = {
			message: n,
			display: t
		}, o && a && o(a, n), l(t ? n : void 0));
	}, [
		a,
		o,
		l
	]), S = d((e, t) => {
		if (g) return h(v(e), { includeRequired: t });
	}, [
		h,
		v,
		g
	]);
	p(() => {
		g && x(S(e, !0), r || i > 0);
	}, [
		x,
		r,
		S,
		g,
		i,
		e
	]);
	let C = d((e) => {
		s(e), g && x(S(u(e), !0), r || i > 0);
	}, [
		x,
		u,
		s,
		r,
		S,
		g,
		i
	]), w = d((t) => {
		c(t), g && x(S(e, !0), !0);
	}, [
		x,
		c,
		S,
		g,
		e
	]);
	return {
		onChange: g ? C : s,
		onBlur: g ? w : c,
		normalizedValidation: m,
		shouldValidate: g
	};
}, kl, Al = () => {
	if (kl !== void 0) return kl ?? void 0;
	let e = (typeof globalThis == "object" ? globalThis : void 0)?.Event;
	return kl = typeof e == "function" ? e : null, kl ?? void 0;
}, jl = (e) => {
	let t = Al();
	if (!t) return;
	let n = { bubbles: !0 }, r = new t("input", n);
	e.dispatchEvent?.(r);
	let i = new t("change", n);
	e.dispatchEvent?.(i);
}, Ml = "value", Nl = /* @__PURE__ */ new WeakMap(), Pl = (e) => {
	let t = Object.getPrototypeOf(e);
	if (!t) return;
	let n = Nl.get(t);
	if (n !== void 0) return n ?? void 0;
	let r = Object.getOwnPropertyDescriptor(t, Ml)?.set;
	if (!r || typeof r != "function") {
		Nl.set(t, null);
		return;
	}
	let i = (e, t) => {
		Reflect.apply(r, e, [t]);
	};
	return Nl.set(t, i), i;
}, Fl = (e, t) => {
	let n = Pl(e);
	if (n) {
		n(e, t);
		return;
	}
	Reflect.set(e, Ml, t);
}, Il = o({ hideLabel: !1 }), Ll = () => f(Il), Rl = "flex flex-col", zl = "mt-1 block text-sm max-w-full", Bl = {
	error: "text-[var(--pc-color-text)]",
	helper: "text-[var(--pc-color-text-muted)]",
	darkError: "text-[var(--pc-color-text)]",
	darkHelper: "text-[var(--pc-color-text-muted)]"
}, Vl = {
	error: `${zl} ${Bl.error}`,
	helper: `${zl} ${Bl.helper}`,
	darkError: `${zl} ${Bl.darkError}`,
	darkHelper: `${zl} ${Bl.darkHelper}`
}, Hl = "flex items-center", Ul = "text-[var(--pc-color-text-muted)]", Wl = ["rounded-[var(--pc-radius)] border disabled:opacity-25 focus-within:outline-2", [
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
].join(" ")].join(" "), Gl = "relative flex w-full items-center", Kl = "relative flex w-full", ql = "px-3", Jl = "px-2", Yl = "px-3", Xl = "px-2", Zl = {
	neutralLight: "outline-[var(--pc-color-border)]",
	neutralDark: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	errorLight: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	errorDark: "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]"
}, Ql = "text-base", $l = "pt-6 pb-1.5", eu = "pt-3.5 pb-3", tu = "pt-6 pb-1.5", nu = "pt-3.5 pb-3", ru = "pt-5.5 pb-1", iu = "pt-1.5 pb-2", au = `${$l} ${Ql}`, ou = `${eu} ${Ql}`, su = `${tu} ${Ql}`, cu = `${nu} ${Ql}`, lu = `${ru} ${Ql}`, uu = `${iu} ${Ql}`, du = {
	typography: Ql,
	padding: {
		default: $l,
		hiddenDefault: eu,
		select: tu,
		hiddenSelect: nu,
		compact: ru,
		hiddenCompact: iu
	},
	spacing: {
		default: au,
		hiddenDefault: ou,
		textarea: au,
		hiddenTextarea: ou,
		select: su,
		hiddenSelect: cu,
		compact: lu,
		selectCompact: lu,
		hiddenCompact: uu,
		hiddenSelectCompact: uu
	}
}, fu = [
	"absolute",
	"max-w-full overflow-hidden text-ellipsis whitespace-nowrap",
	"pointer-events-none",
	"leading-tight",
	"transition-all duration-200 ease-in-out"
].join(" "), pu = "gap-3", mu = "relative flex-1", hu = [
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
].join(" "), gu = [
	"appearance-none",
	"[&::-webkit-search-decoration]:hidden",
	"[&::-webkit-search-cancel-button]:hidden",
	"[&::-webkit-search-results-button]:hidden",
	"[&::-webkit-search-results-decoration]:hidden"
].join(" "), _u = [
	"appearance-none",
	"[font-variant-numeric:tabular-nums]",
	"[&::-webkit-calendar-picker-indicator]:hidden",
	"[&::-webkit-calendar-picker-indicator]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-clear-button]:hidden"
].join(" "), vu = [
	"appearance-none",
	"[&::-webkit-inner-spin-button]:appearance-none",
	"[&::-webkit-outer-spin-button]:appearance-none",
	"[&::-webkit-inner-spin-button]:hidden",
	"[&::-webkit-outer-spin-button]:hidden"
].join(" "), yu = ["peer w-full bg-transparent text-[var(--pc-color-text)] outline-0 px-0", hu].join(" "), bu = ["peer block w-full min-h-48 resize-y bg-transparent text-[var(--pc-color-text)] px-0 outline-0", hu].join(" "), xu = {
	container: Rl,
	label: { floating: fu },
	control: du,
	wrapper: {
		base: Wl,
		inline: Gl,
		block: Kl,
		spacing: ql,
		spacingCompact: Yl,
		spacingWithLabel: ql,
		spacingWithLabelCompact: Jl,
		spacingWithoutLabel: Yl,
		spacingWithoutLabelCompact: Xl,
		tone: Zl
	},
	adornment: {
		base: Hl,
		dark: Ul
	},
	gap: pu,
	inner: mu,
	input: {
		base: yu,
		textarea: bu
	},
	messages: {
		base: zl,
		tone: Bl,
		composed: Vl
	}
}, Su = {
	container: xu.container,
	message: {
		base: zl,
		errorTone: Bl.error,
		helperTone: Bl.helper,
		darkErrorTone: Bl.darkError,
		darkHelperTone: Bl.darkHelper
	},
	adornment: {
		base: Hl,
		darkTone: Ul
	}
}, Cu = xu.messages.composed, wu = xu.adornment, Tu = xu.inner, Eu = xu.gap, Du = xu.control, Ou = xu.wrapper.inline, ku = xu.wrapper.block, Au = xu.wrapper.base, ju = xu.wrapper.spacingWithLabel, Mu = xu.wrapper.spacingWithLabelCompact, Nu = xu.wrapper.spacingWithoutLabel, Pu = xu.wrapper.spacingWithoutLabelCompact, Fu = xu.label.floating, Iu = xu.input.base, Lu = xu.input.textarea, Ru = gu, zu = _u, Bu = vu;
//#endregion
//#region ../ui/src/lib/icons/AlertCircleIcon.tsx
function Vu({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ w("svg", {
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
		children: [/* @__PURE__ */ C("path", { d: "M18.22 21.25H5.78a3.78 3.78 0 0 1-3.31-5.33L8.69 5.11a3.87 3.87 0 0 1 6.62 0l6.22 10.81a3.78 3.78 0 0 1-3.31 5.33Z" }), /* @__PURE__ */ C("path", {
			fill: "currentColor",
			stroke: "none",
			d: "M10.88 17.15a1.13 1.13 0 1 1 2.26 0a1.13 1.13 0 0 1-2.26 0Zm.36-2.73L11.1 9.2a.9.9 0 0 1 1.79 0l-.13 5.22a.76.76 0 0 1-1.52 0Z"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/BadgeCheckIcon.tsx
function Hu({ className: e, strokeWidth: t = 1.5 }) {
	return /* @__PURE__ */ w("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		children: [/* @__PURE__ */ C("path", {
			d: "M14.262 3.6C13.196 2.532 12.662 2 12 2s-1.196.533-2.262 1.6c-.64.64-1.274.936-2.186.936c-.796 0-1.93-.154-2.552.473c-.618.623-.464 1.752-.464 2.543c0 .912-.297 1.546-.937 2.186C2.533 10.804 2 11.338 2 12s.533 1.196 1.6 2.262c.716.717.936 1.18.936 2.186c0 .796-.154 1.93.473 2.552c.623.617 1.752.464 2.543.464c.971 0 1.44.19 2.133.883c.59.59 1.381 1.653 2.315 1.653s1.725-1.063 2.315-1.653c.694-.693 1.162-.883 2.133-.883c.791 0 1.92.154 2.543-.464m1.41-9.262C21.467 10.804 22 11.338 22 12s-.533 1.196-1.6 2.262c-.716.717-.936 1.18-.936 2.186c0 .796.154 1.93-.473 2.552m0 0H19",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ C("path", {
			d: "M8.5 9.5L12 13l9-10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/CheckIcon.tsx
function Uu({ strokeWidth: e = 2.2 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ C("path", {
			d: "M3.25 10.5 7.75 15 17 5.75",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChoosePaymentTypeIcon.tsx
function Wu({ className: e }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 28 28",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ C("path", {
			fill: "currentColor",
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M26.9648 24.2849C26.9484 25.1008 26.4772 25.6733 25.7981 25.804C25.5313 25.9298 25.2338 26 24.92 26H3.08005C1.93127 26 1 25.0587 1 23.8975V9.18008C1 8.01891 1.93127 7.07759 3.08004 7.07759H4.79675C5.01766 7.07759 5.19675 6.8985 5.19675 6.67758L5.19665 3.59183C5.19662 2.46502 6.05341 1.78789 7.13478 2.0601L24.8817 6.52747C25.6294 6.71569 26.2936 7.30816 26.6607 8.02877C26.8752 8.3595 27 8.75506 27 9.18008V23.8975C27 24.0298 26.9879 24.1593 26.9648 24.2849ZM7.60619 7.07759C7.38528 7.07759 7.2062 6.89852 7.20619 6.67761L7.20613 4.68512C7.20612 4.42461 7.45115 4.23361 7.70377 4.2972L17.9665 6.88062C18.0808 6.90938 18.06 7.07759 17.9421 7.07759H7.60619ZM24.42 9.18008C24.6961 9.18008 24.92 9.40394 24.92 9.68008V13.5H21.4999C20.4786 13.5 19.6391 13.893 19.0651 14.5388C18.5074 15.1662 18.25 15.9744 18.25 16.75C18.25 17.5255 18.5074 18.3338 19.065 18.9612C19.6391 19.607 20.4785 20 21.4999 20H24.92V23.3975C24.92 23.6737 24.6961 23.8975 24.42 23.8975H3.58004C3.3039 23.8975 3.08004 23.6737 3.08004 23.3975V9.68008C3.08004 9.40394 3.3039 9.18008 3.58004 9.18008H24.42ZM24.92 18L24.92 15.5H21.4999C21.0213 15.5 20.7359 15.6695 20.5599 15.8675C20.3676 16.0838 20.25 16.4006 20.25 16.75C20.25 17.0995 20.3676 17.4162 20.5599 17.6325C20.7358 17.8305 21.0213 18 21.4999 18H24.92Z"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronLeftIcon.tsx
function Gu({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ C("path", {
			d: "M15 6l-6 6 6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ChevronRightIcon.tsx
function Ku({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ C("path", {
			d: "M9 6l6 6-6 6",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CloseIcon.tsx
function qu({ className: e, strokeWidth: t = 1.8 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: t,
		"aria-hidden": "true",
		className: e,
		width: "16",
		height: "16",
		children: /* @__PURE__ */ C("path", {
			d: "M6 6l12 12M18 6 6 18",
			strokeLinecap: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/CopyIcon.tsx
function Ju({ strokeWidth: e = 1.5 }) {
	return /* @__PURE__ */ w("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: [/* @__PURE__ */ C("rect", {
			x: "6",
			y: "6",
			width: "9",
			height: "12",
			rx: "2"
		}), /* @__PURE__ */ C("path", { d: "M13 4V3a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 0 2 3.5v9A2.5 2.5 0 0 0 4.5 15H6" })]
	});
}
//#endregion
//#region ../ui/src/lib/icons/DebugIcon.tsx
function Yu({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ w("svg", {
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
			/* @__PURE__ */ C("path", { d: "M7.2 9.6 4.8 12l2.4 2.4" }),
			/* @__PURE__ */ C("path", { d: "M16.8 14.4 19.2 12l-2.4-2.4" }),
			/* @__PURE__ */ C("path", { d: "M13.4 8.8 10.6 15.2" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/ExternalLinkIcon.tsx
function Xu({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ w("svg", {
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
			/* @__PURE__ */ C("path", { d: "M14 4h6v6" }),
			/* @__PURE__ */ C("path", { d: "M10 14 20 4" }),
			/* @__PURE__ */ C("path", { d: "M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptIcon.tsx
function Zu({ className: e }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ C("path", {
			strokeWidth: "2",
			d: "M10.101 4C11.3636 2.76281 13.0927 2 15 2C18.866 2 22 5.13401 22 9C22 10.9073 21.2372 12.6365 19.9999 13.899M16 15C16 18.866 12.866 22 9 22C5.13401 22 2 18.866 2 15C2 11.134 5.13401 8 9 8C12.866 8 16 11.134 16 15Z"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/InteractivePromptReadyIcon.tsx
function Qu({ className: e }) {
	return /* @__PURE__ */ w("svg", {
		viewBox: "0 0 512 512",
		fill: "currentColor",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [
			/* @__PURE__ */ C("path", { d: "M344.356,404.041c-6.431-6.43-230.164-230.163-236.398-236.396c-6.527-6.528-17.111-6.528-23.639,0c-6.528,6.528-6.528,17.111,0,23.639l16.193,16.193L0.981,489.696c-4.659,13.211,8.096,25.987,21.324,21.324l282.22-99.532l16.193,16.193c6.527,6.528,17.111,6.529,23.639,0C350.884,421.153,350.884,410.569,344.356,404.041zM44.126,467.874l20.959-59.429l38.469,38.469L44.126,467.874zM138.506,434.589l-61.095-61.095l18.491-52.429l95.033,95.033L138.506,434.589zM225.887,403.771L108.228,286.112l18.491-52.429l151.597,151.598L225.887,403.771z" }),
			/* @__PURE__ */ C("path", { d: "M384.71,127.29c-6.528-6.528-17.112-6.528-23.639,0L256.72,231.64c-6.528,6.528-6.528,17.111,0,23.639c6.527,6.528,17.111,6.529,23.639,0l104.35-104.35C391.238,144.401,391.238,133.818,384.71,127.29z" }),
			/* @__PURE__ */ C("path", { d: "M367.318,280.947h-58.422c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h58.422c9.232,0,16.716-7.484,16.716-16.716S376.549,280.947,367.318,280.947z" }),
			/* @__PURE__ */ C("path", { d: "M214.337,127.966c-9.232,0-16.716,7.483-16.716,16.716v58.422c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-58.422C231.053,135.451,223.569,127.966,214.337,127.966z" }),
			/* @__PURE__ */ C("path", { d: "M497.336,262.203c-19.6-19.6-51.318-19.601-70.919,0c-19.552,19.552-19.552,51.366,0,70.918c19.597,19.597,51.318,19.601,70.918,0C516.888,313.569,516.888,281.756,497.336,262.203zM473.697,309.482c-6.532,6.532-17.106,6.534-23.639,0c-6.517-6.518-6.517-17.122,0-23.639c6.535-6.534,17.106-6.534,23.639,0C480.23,292.377,480.229,302.948,473.697,309.482z" }),
			/* @__PURE__ */ C("path", { d: "M249.797,14.664c-19.552-19.552-51.366-19.553-70.918,0c-19.597,19.597-19.601,51.318,0,70.919c19.549,19.551,51.365,19.553,70.918-0.001C269.395,65.984,269.398,34.264,249.797,14.664zM226.156,61.943c-6.517,6.517-17.121,6.517-23.639,0c-6.531-6.533-6.532-17.105,0-23.639c6.535-6.534,17.106-6.534,23.639,0C232.69,44.837,232.69,55.408,226.156,61.943z" }),
			/* @__PURE__ */ C("circle", {
				cx: "427.097",
				cy: "203.107",
				r: "16.716"
			}),
			/* @__PURE__ */ C("circle", {
				cx: "308.894",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ C("circle", {
				cx: "427.097",
				cy: "392.217",
				r: "16.716"
			}),
			/* @__PURE__ */ C("circle", {
				cx: "119.773",
				cy: "84.905",
				r: "16.716"
			}),
			/* @__PURE__ */ C("path", { d: "M443.809,1.329c-9.232,0-16.716,7.484-16.716,16.716V34.76c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716V18.044C460.525,8.813,453.04,1.329,443.809,1.329z" }),
			/* @__PURE__ */ C("path", { d: "M443.809,84.907c-9.232,0-16.716,7.484-16.716,16.716v16.716c0,9.232,7.484,16.716,16.716,16.716s16.716-7.484,16.716-16.716v-16.716C460.525,92.391,453.04,84.907,443.809,84.907z" }),
			/* @__PURE__ */ C("path", { d: "M410.378,51.475h-16.716c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S419.609,51.475,410.378,51.475z" }),
			/* @__PURE__ */ C("path", { d: "M493.956,51.475H477.24c-9.232,0-16.716,7.484-16.716,16.716s7.484,16.716,16.716,16.716h16.716c9.232,0,16.716-7.484,16.716-16.716S503.187,51.475,493.956,51.475z" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/InfoIcon.tsx
function $u() {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "16",
		height: "16",
		children: /* @__PURE__ */ w("g", {
			transform: "matrix(1.457587 0 0 1.457587 -4.762248 -5.287919)",
			children: [
				/* @__PURE__ */ C("path", {
					d: "M12.1845 6.49999C12.1845 7.32842 11.513 7.99999 10.6845 7.99999C9.8561 7.99999 9.18452 7.32842 9.18452 6.49999C9.18452 5.67156 9.8561 4.99999 10.6845 4.99999C11.513 4.99999 12.1845 5.67156 12.1845 6.49999Z",
					fill: "currentColor"
				}),
				/* @__PURE__ */ C("path", {
					d: "M12 18.7213L12 10.7213L9 10.7213",
					stroke: "currentColor",
					strokeWidth: "1.8",
					strokeLinecap: "round",
					strokeLinejoin: "round",
					vectorEffect: "non-scaling-stroke"
				}),
				/* @__PURE__ */ C("path", {
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
function ed({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ C("path", {
			d: "M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/OverwriteIcon.tsx
function td({ strokeWidth: e = 1.8 }) {
	return /* @__PURE__ */ w("svg", {
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
			/* @__PURE__ */ C("path", { d: "M4.75 6h8.5A1.75 1.75 0 0 1 15 7.75v10.5A1.75 1.75 0 0 1 13.25 20h-8.5A1.75 1.75 0 0 1 3 18.25V7.75A1.75 1.75 0 0 1 4.75 6Z" }),
			/* @__PURE__ */ C("path", { d: "M9 4h8.5A1.75 1.75 0 0 1 19.25 5.75V15" }),
			/* @__PURE__ */ C("path", { d: "M7.75 10.25h5.5" }),
			/* @__PURE__ */ C("path", { d: "M7.75 13.25h5.5" }),
			/* @__PURE__ */ C("path", { d: "M7.75 16.25h5.5" }),
			/* @__PURE__ */ C("path", { d: "M21 12.25h-5" }),
			/* @__PURE__ */ C("path", { d: "m16.5 12.25 2.5-2.5" }),
			/* @__PURE__ */ C("path", { d: "m16.5 12.25 2.5 2.5" })
		]
	});
}
//#endregion
//#region ../ui/src/lib/icons/PaymentDetailsIcon.tsx
function nd({ className: e, strokeWidth: t = 2 }) {
	return /* @__PURE__ */ w("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: [/* @__PURE__ */ C("path", {
			d: "M16 5 18.2929 2.70711c.3905-.39053 1.0237-.39053 1.4142 0l1.5858 1.58578c.3905.39053.3905 1.02369 0 1.41422L19 8M16 5l-5.7071 5.7071A1.4141 1.4141 0 0 0 10 11.4142V13a1 1 0 0 0 1 1h1.5858a1.4143 1.4143 0 0 0 1.4142-.2929L19 8M16 5l3 3",
			stroke: "currentColor",
			strokeWidth: t,
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ C("path", {
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
function rd({ className: e }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 32 32",
		fill: "none",
		"aria-hidden": "true",
		width: "20",
		height: "20",
		className: e,
		children: /* @__PURE__ */ C("path", {
			d: "M32 10.015c0-1.104-.895-2-2-2h-3.414c.884-.872 1.449-2.014 1.449-3.421 0-1.732-.995-3.615-3.788-3.615-3.675 0-6.745 3.913-8.188 6.106-1.444-2.193-4.607-6.106-8.282-6.106-2.793 0-3.788 1.882-3.788 3.614 0 1.407.581 2.55 1.482 3.421h-3.472c-1.105 0-2 .896-2 2v5.986h2.018v13.017c0 1.105.895 2 2 2h23.99c1.105 0 2-.895 2-2v-13.018h1.992v-5.986ZM24.247 2.981c1.236 0 1.788.52 1.788 1.615 0 2.221-2.479 3.42-4.811 3.42h-3.386c1.421-2.111 3.922-5.035 6.409-5.035ZM7.778 2.981c2.487 0 5.083 2.924 6.504 5.034h-3.386c-2.332 0-4.905-1.229-4.905-3.451 0-1.095.551-1.583 1.788-1.583ZM30 14.002h-13v-3.986h13v3.986ZM2 10.015h13v3.986H2zM4.018 16.002h10.982v13.018H4.018V16.002ZM28.008 29.02H17V16.003h11.008V29.02Z",
			fill: "currentColor"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/PlusIcon.tsx
function id({ strokeWidth: e = 2 }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: /* @__PURE__ */ C("path", {
			d: "M10 4v12M4 10h12",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
}
//#endregion
//#region ../ui/src/lib/icons/ResetIcon.tsx
function ad({ strokeWidth: e = 2.1 }) {
	return /* @__PURE__ */ w("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: e,
		"aria-hidden": "true",
		width: "20",
		height: "20",
		children: [/* @__PURE__ */ C("path", {
			d: "M3 5v5h5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		}), /* @__PURE__ */ C("path", {
			d: "M5.85 18.15A9 9 0 1 0 5.18 6.4L3 10",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
//#endregion
//#region ../ui/src/lib/icons/SwitchArrowsIcon.tsx
function od() {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": "true",
		width: "21",
		height: "21",
		children: /* @__PURE__ */ C("path", {
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
var sd = [
	"pc-skeleton-shimmer",
	"block",
	"max-w-full",
	"rounded-[var(--pc-radius)]",
	"[background:var(--pc-color-depth-3)]"
].join(" "), cd = c(function({ as: e = "div", className: t, "aria-hidden": n = !0, "data-slot": r, ...i }, a) {
	return s(e, {
		...i,
		ref: a,
		"aria-hidden": n,
		"data-slot": r ?? "skeleton",
		className: Q(sd, t)
	});
});
cd.displayName = "Skeleton";
//#endregion
//#region ../ui/src/lib/NumberInput.tsx
var ld = (e) => {
	if (e == null || e === "" || Array.isArray(e)) return;
	let t = typeof e == "number" ? e : Number(e);
	return Number.isNaN(t) ? void 0 : t;
}, ud = 1, dd = (e) => {
	if (!(e == null || e === "" || e === "any")) {
		if (typeof e == "number") return Number.isFinite(e) ? e : void 0;
		if (typeof e == "string") {
			let t = Number(e);
			return Number.isFinite(t) ? t : void 0;
		}
	}
}, fd = (e) => {
	if (e == null) return 0;
	let t = "";
	if (typeof e == "number" ? t = e.toString() : typeof e == "string" && (t = e), !t) return 0;
	let n = t.trim().match(Lc);
	if (!n) return 0;
	let r = n[1], i = n[2];
	return (r ? r.length : 0) + (i ? Number(i) : 0);
}, pd = (e, t, n) => {
	let r = e;
	return t !== void 0 && r < t && (r = t), n !== void 0 && r > n && (r = n), r;
}, md = (e, t) => {
	if (!Number.isFinite(e) || t <= 0) return e;
	let n = 10 ** t;
	return Math.round(e * n) / n;
}, hd = (e, t) => Number.isFinite(e) ? t <= 0 ? e.toString() : md(e, t).toFixed(t).replace(Rc, "") : "", gd = ({ currentString: e, direction: t, minValue: n, maxValue: r, stepValue: i }) => {
	let a = ld(e), o = i ?? ud, s = Math.max(fd(e), fd(i), fd(n), fd(r)), c = hd(pd(a === void 0 ? t === 1 ? n === void 0 ? o : n : r === void 0 ? -o : r : a + t * o, n, r), s);
	return c === e ? void 0 : c;
}, _d = {
	stepperGroup: ["shrink-0 flex self-stretch flex-row items-center gap-1", "py-1"].join(" "),
	input: { base: Bu },
	mozAppearance: "textfield"
}, vd = c(function({ inputMode: e, innerRef: t, style: n, className: r, reserveMessageSpace: i, density: a = "default", skeleton: o = !1, ...s }, c) {
	let { label: l, hideLabel: u, helperText: f, error: p, variant: m, containerClassName: h, inputClassName: g, labelClassName: _, messageClassName: v, field: b, meta: x, form: T, onChange: E, onBlur: D, onFocus: O, id: k, name: A, value: j, defaultValue: M, formattingAdapter: N, validation: P, required: F, inputProps: I, ...ee } = s, L = {
		...I,
		...ee
	}, R = y(null), z = L.min, B = L.max, V = L.step, H = ld(z), U = ld(B), W = dd(V), G = d((e) => {
		R.current = e, xl(c, e), xl(t, e);
	}, [c, t]), K = ld(j ?? M), te = !!L.disabled, ne = !!L.readOnly, re = a === "compact", q = te || ne || H !== void 0 && K !== void 0 && K <= H, ie = te || ne || U !== void 0 && K !== void 0 && K >= U, ae = (e) => {
		let t = R.current;
		if (!t) return;
		let n = t;
		if (n.disabled || n.readOnly) return;
		let r = n.value, i = gd({
			currentString: r,
			direction: e,
			minValue: H,
			maxValue: U,
			stepValue: W
		});
		if (i !== void 0) {
			Fl(t, i), jl(t);
			try {
				n.focus?.({ preventScroll: !0 });
			} catch {
				n.focus?.();
			}
		}
	}, oe = (e) => {
		e.preventDefault();
	}, se = (e) => {
		e.preventDefault(), e.stopPropagation(), ae(-1);
	}, ce = (e) => {
		e.preventDefault(), e.stopPropagation(), ae(1);
	}, le = re ? "xs" : "sm", ue = _d.stepperGroup, de = Q(_d.input.base, g), fe = o ? /* @__PURE__ */ C(cd, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", re ? "h-6 w-6" : "h-8 w-8")
	}) : /* @__PURE__ */ C(un, {
		type: "button",
		variant: "neutral",
		size: le,
		iconOnly: !0,
		showTooltip: !1,
		label: "Decrease value",
		"aria-label": "Decrease value",
		leadingIcon: /* @__PURE__ */ C(ed, {}),
		onClick: se,
		onPointerDown: oe,
		disabled: q
	}), pe = o ? /* @__PURE__ */ C(cd, {
		"data-slot": "number-input-skeleton-stepper",
		className: Q("rounded-full", re ? "h-6 w-6" : "h-8 w-8")
	}) : /* @__PURE__ */ C(un, {
		type: "button",
		variant: "neutral",
		size: le,
		iconOnly: !0,
		showTooltip: !1,
		label: "Increase value",
		"aria-label": "Increase value",
		leadingIcon: /* @__PURE__ */ C(id, {}),
		onClick: ce,
		onPointerDown: oe,
		disabled: ie
	});
	return /* @__PURE__ */ C(xf, {
		ref: G,
		label: l,
		hideLabel: u,
		variant: m,
		helperText: f,
		error: p,
		containerClassName: h,
		labelClassName: _,
		messageClassName: v,
		field: b,
		meta: x,
		form: T,
		onChange: E,
		onBlur: D,
		onFocus: O,
		id: k,
		name: A,
		value: j,
		defaultValue: M,
		formattingAdapter: N,
		validation: P,
		required: F,
		inputProps: L,
		type: "text",
		inputMode: e ?? "decimal",
		trailingAdornment: /* @__PURE__ */ w(S, { children: [fe, pe] }),
		trailingAdornmentClassName: ue,
		inputClassName: de,
		className: Q("gap-1 pr-1 items-center", r),
		density: a,
		skeleton: o,
		style: {
			...n,
			MozAppearance: _d.mozAppearance
		},
		reserveMessageSpace: i
	});
});
vd.displayName = "NumberInput";
//#endregion
//#region ../ui/src/lib/utils/text.ts
function yd(e) {
	if (typeof e == "string" || typeof e == "number") return String(e);
}
//#endregion
//#region ../ui/src/lib/FieldLayout.tsx
function bd({ styles: e, tone: t = "light", messageClassName: n, error: r, helper: i, errorClassName: a, helperClassName: o, reserveSpace: s = !0 }) {
	let c = yd(r), l = yd(i), u = Q(e.error, t === "dark" ? e.darkErrorTone : void 0, n, a), d = Q(e.helper, t === "dark" ? e.darkHelperTone : void 0, n, o);
	return r ? /* @__PURE__ */ C("span", {
		"data-slot": "field-message",
		className: u,
		title: c,
		children: r
	}) : i ? /* @__PURE__ */ C("span", {
		"data-slot": "field-message",
		className: d,
		title: l,
		children: i
	}) : s ? /* @__PURE__ */ C("span", {
		"data-slot": "field-message",
		className: Q(d, "opacity-0 select-none pointer-events-none"),
		"aria-hidden": "true",
		children: "message placeholder"
	}) : null;
}
function xd({ baseClassName: e, containerClassName: t, belowFieldContent: n, belowFieldContentInheritsTheme: r = !0, children: i, style: a, dataTheme: o, ...s }) {
	let c = Q(e, t), { styles: l, tone: u, messageClassName: d, error: f, helper: p, errorClassName: m, helperClassName: h, reserveSpace: g } = s, _ = n == null ? null : /* @__PURE__ */ C("div", {
		"data-slot": "field-below-content",
		className: "mt-4",
		children: n
	}), v = g !== !1 || f || p ? /* @__PURE__ */ C(bd, {
		styles: l,
		tone: u,
		messageClassName: d,
		error: f,
		helper: p,
		errorClassName: m,
		helperClassName: h,
		reserveSpace: g
	}) : null;
	return r ? /* @__PURE__ */ w("div", {
		className: c,
		style: a,
		"data-theme": o,
		children: [
			i,
			_,
			v
		]
	}) : /* @__PURE__ */ w("div", {
		className: c,
		style: a,
		children: [
			/* @__PURE__ */ C("div", {
				"data-theme": o,
				children: i
			}),
			_,
			v && /* @__PURE__ */ C("div", {
				"data-theme": o,
				children: v
			})
		]
	});
}
//#endregion
//#region ../ui/src/lib/formSkeletons.tsx
function Sd({ showLabel: e, labelClassName: t, compact: n = !1, widthClassName: r }) {
	return e ? /* @__PURE__ */ C("span", {
		"aria-hidden": "true",
		className: t,
		"data-slot": "field-skeleton-label",
		children: /* @__PURE__ */ C(cd, {
			as: "span",
			className: Q("block rounded-full", n ? "h-2.5 w-16" : "h-3 w-20", r)
		})
	}) : null;
}
function Cd({ compact: e = !1, helper: t, error: n, reserveSpace: r = !0, widthClassName: i }) {
	if (!(!t && !n && !r)) return /* @__PURE__ */ C(cd, {
		as: "span",
		"data-slot": "field-skeleton-message",
		className: Q("block rounded-full", e ? "h-2.5 w-24" : "h-3 w-28", i)
	});
}
//#endregion
//#region ../ui/src/lib/formTheme.ts
var wd = ({ variant: e, hasError: t = !1 }) => {
	let n = t ? "danger" : e;
	return {
		variant: n,
		dataTheme: sn(n)
	};
}, Td = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => Td(e)).join(" ") : l(e) ? Td(e.props.children ?? "") : "", Ed = (e) => e.trim().toLowerCase(), Dd = (e, t) => e ? t.map((e) => Td(e)).filter(Boolean).join(" ").toLowerCase().includes(e) : !0, Od = (e, t, n) => t ? e.filter((e) => Dd(t, n(e))) : [...e], kd = (e, t, n, r) => e.findIndex((e) => r(e) && Dd(t, n(e))), Ad = (e, t) => typeof e == "string" && e.length > 0 ? `Search ${e}` : t, jd = 8, Md = {
	container: Su.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: ju,
		wrapperSpacingCompact: Mu,
		wrapperHiddenSpacing: Nu,
		wrapperHiddenSpacingCompact: Pu,
		selectSpacing: Du.spacing.select,
		hiddenSelectSpacing: Du.spacing.hiddenSelect,
		selectSpacingCompact: Du.spacing.selectCompact,
		hiddenSelectSpacingCompact: Du.spacing.hiddenSelectCompact
	},
	label: {
		base: `${Fu} select-none`,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]",
		tone: {
			active: "text-[var(--pc-color-text-muted)]",
			inactive: "text-[var(--pc-color-text-muted)]",
			error: "text-[var(--pc-color-text-muted)]",
			disabled: "text-[var(--pc-color-border)]"
		}
	},
	wrapper: {
		base: `${Ou} group cursor-pointer`,
		gap: Eu,
		frame: Au,
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
			Iu,
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
			Iu,
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
		base: wu.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	dropdown: {
		content: "flex flex-col",
		list: "overflow-y-auto py-1",
		empty: "px-3 py-3 text-sm text-[var(--pc-color-text-muted)]",
		optionSelectedIcon: "shrink-0 text-[var(--pc-color-text)]"
	},
	message: {
		error: Cu.error,
		helper: Cu.helper
	},
	inner: Tu
}, Nd = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" ? String(e) : null, Pd = (e) => {
	if (e == null) return [];
	if (Array.isArray(e)) return e.map(Nd).filter((e) => e !== null).filter((e) => e.length > 0);
	let t = Nd(e);
	return t === null || t.length === 0 ? [] : [t];
}, Fd = (e) => {
	if (e == null) return;
	if (Array.isArray(e)) {
		let [t] = e;
		if (t === void 0) return;
		let n = Nd(t);
		return n === null ? void 0 : n;
	}
	let t = Nd(e);
	return t === null ? void 0 : t;
}, Id = (e) => {
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
		if (!l(e)) {
			n = !1;
			return;
		}
		if (e.type === i) {
			let t = e.props;
			r(t.children);
			return;
		}
		if (e.type !== "option") {
			n = !1;
			return;
		}
		let a = e.props;
		t.push({
			value: Nd(a.value) ?? "",
			label: a.children ?? "",
			disabled: !!a.disabled
		});
	};
	return r(e), {
		options: t,
		supportsCustomSingle: n
	};
}, Ld = (e, t = e.value) => {
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
}, Rd = (e) => ({
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
}), zd = c(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, containerClassName: s, className: c, selectClassName: l, labelClassName: u, messageClassName: f, field: h, meta: g, form: v, innerRef: x, onChange: T, onBlur: E, validation: D, required: O, id: k, name: A, value: j, defaultValue: M, leadingAdornment: N, trailingAdornment: P, leadingAdornmentClassName: F, trailingAdornmentClassName: I, children: ee, density: L = "default", reserveMessageSpace: R, skeleton: z = !1, searchable: B = "auto", searchThreshold: V = jd, searchPlaceholder: H = "Search options", noMatchesMessage: U = "No options match your search.", optionLeadingIconByValue: W, ...G }, K) {
	let [te, ne] = b(), { inputId: re, resolvedName: q, handleChange: ie, handleBlur: ae, hasValue: oe, errorContent: se, helperContent: ce, sharedProps: le, mergedRef: ue, resolvedValue: de } = Dl({
		forwardedRef: K,
		field: h,
		meta: g,
		form: v,
		innerRef: x,
		id: k,
		name: A,
		value: j,
		defaultValue: M,
		explicitError: o ?? te,
		helperText: r,
		onChange: T,
		onBlur: E
	}), fe = !!G.multiple, { dataTheme: pe } = wd({
		variant: e,
		hasError: !z && !!se
	}), me = d((e) => {
		ne(e);
	}, []), he = Object.prototype.hasOwnProperty.call(le, "value"), ge = Object.prototype.hasOwnProperty.call(le, "defaultValue"), _e = he ? le.value : void 0, ve = ge ? le.defaultValue : M, { options: ye, supportsCustomSingle: be } = _(() => Id(ee), [ee]), xe = m(), Se = re ?? xe, Ce = `${Se}-label`, we = `${Se}-listbox`, J = `${Se}-native`, Te = _(() => Fd(_e), [_e]), Ee = _(() => Fd(ve), [ve]), De = _(() => Pd(ve), [ve]), Oe = _(() => Pd(_e), [_e]), ke = ye[0]?.value ?? "", Ae = he ? Te ?? ke : Ee ?? ke, [je, Me] = b(() => he ? Oe : De), [Ne, Pe] = b(() => Ae), [Fe, Ie] = b(!1), [Le, Y] = b(-1), [Re, ze] = b(""), Be = he ? Te ?? ke : Ne, Ve = Oe;
	he || (Ve = fe ? je : Pd(Be));
	let He = d((e) => e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : e.currentTarget.value, []), Ue = d((e) => fe && Array.isArray(e) ? e.join(",") : e, [fe]), We;
	We = fe ? he ? de : je : Be;
	let { onChange: Ge, onBlur: Ke, normalizedValidation: qe } = Ol({
		value: We,
		required: O,
		validation: D,
		metaTouched: g?.touched,
		submitCount: v?.submitCount,
		resolvedName: q,
		setFieldError: v?.setFieldError,
		handleChange: ie,
		handleBlur: ae,
		setManagedError: me,
		getValueFromChangeEvent: He,
		normalizeValue: Ue
	}), X = y(null), Je = y(null), Ye = y(null), Xe = y(null), Ze = d((e) => {
		X.current = e, ue(e);
	}, [ue]), Qe = d((e) => {
		Ye.current = e;
	}, []), $e = fe || typeof G.size == "number" && G.size > 1 || !be, et = Math.max(0, V), Z = !$e && (B === !0 || B !== !1 && ye.length >= et), tt = Z ? Ed(Re) : "", nt = _(() => ye.map((e, t) => ({
		option: e,
		index: t
	})), [ye]), rt = _(() => Od(nt, tt, ({ option: e }) => [e.value, e.label]), [nt, tt]), it = _(() => Z ? rt : nt, [
		rt,
		nt,
		Z
	]), at = d(() => {
		let e = X.current;
		if (!e) return;
		let t = e;
		if (t.focus?.(), !e.multiple) {
			try {
				t.showPicker?.();
				return;
			} catch {}
			t.click?.();
		}
	}, []), { hideLabel: ot } = Ll(), st = t ?? q ?? "", ct = yd(st), lt = n ?? ot ?? !1, ut = !lt && !(typeof t == "string" && t.length === 0), dt = L === "compact", ft = Rr({
		hideLabel: lt,
		isCompact: dt,
		withLabelDefaultClassName: Md.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: Md.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: Md.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: Md.layout.wrapperHiddenSpacingCompact
	}), pt = (() => {
		let e = G["aria-label"] ?? le["aria-label"];
		return typeof e == "string" ? e : void 0;
	})(), mt = (() => {
		let e = G["aria-labelledby"] ?? le["aria-labelledby"];
		return typeof e == "string" && e.trim().length > 0 ? e.trim() : void 0;
	})(), ht = lt && typeof st == "string" && st.length > 0 && mt === void 0 ? pt ?? st : pt, gt = ye.find((e) => e.value === Be) ?? (ye.length > 0 ? ye[0] : null), _t = gt === null ? "" : gt.label, vt = yd(_t), yt = _(() => ye.flatMap((e, t) => e.disabled ? [] : [t]), [ye]), bt = _(() => it.flatMap(({ option: e, index: t }) => e.disabled ? [] : [t]), [it]), xt = () => {
		let e = ye.findIndex((e) => e.value === Be && !e.disabled);
		return e >= 0 ? e : yt[0] ?? -1;
	}, St = (e) => {
		let t = Ed(e);
		return t ? kd(ye, t, (e) => [e.value, e.label], (e) => !e.disabled) : xt();
	}, Ct = (e) => {
		bt.length !== 0 && Y((t) => {
			let n = bt.indexOf(t);
			return n === -1 ? e === 1 ? bt[0] : bt[bt.length - 1] : bt[(n + e + bt.length) % bt.length];
		});
	};
	p(() => {
		if (!Fe || !Z) return;
		let e = window.requestAnimationFrame(() => {
			Xe.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [Fe, Z]);
	let wt = () => {
		Ie(!1), ze("");
	}, Tt = () => {
		$e || G.disabled || (ze(""), Y(xt()), Ie(!0));
	}, Et = (e) => {
		if (e.disabled) return;
		let t = X.current;
		t && (he || Pe(e.value), Fl(t, e.value), Ge(Ld(t, e.value)), Y(ye.findIndex((t) => t.value === e.value)), Ie(!1), window.requestAnimationFrame(() => {
			Ye.current?.focus();
		}));
	}, Dt = (e) => {
		if (G.disabled) return;
		if ($e) {
			let t = X.current;
			if (!t) return;
			let n = e.target;
			if (n && t.contains(n)) return;
			e.preventDefault(), at();
			return;
		}
		let t = Ye.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), Fe || Tt());
	}, Ot = d((e) => {
		let t = e.currentTarget.multiple ? Array.from(e.currentTarget.selectedOptions).map((e) => e.value) : [e.currentTarget.value];
		he || (Me(t), e.currentTarget.multiple || Pe(e.currentTarget.value)), Ge(e);
	}, [he, Ge]), kt = (e) => {
		switch (e.key) {
			case "ArrowDown":
				if (e.preventDefault(), !Fe) {
					Tt();
					return;
				}
				Ct(1);
				return;
			case "ArrowUp":
				if (e.preventDefault(), !Fe) {
					Tt();
					return;
				}
				Ct(-1);
				return;
			case "Home":
				if (!Fe || bt.length === 0) return;
				e.preventDefault(), Y(bt[0]);
				return;
			case "End":
				if (!Fe || bt.length === 0) return;
				e.preventDefault(), Y(bt[bt.length - 1]);
				return;
			case "Enter":
			case " ":
				if (e.preventDefault(), !Fe) {
					Tt();
					return;
				}
				Le >= 0 && Et(ye[Le]);
				return;
			case "Escape":
				if (!Fe) return;
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
				e.preventDefault(), bt.length > 0 && Et(ye[bt[0]]);
				return;
			case "Escape":
				e.preventDefault(), wt(), window.requestAnimationFrame(() => {
					Ye.current?.focus();
				});
				return;
			default: return;
		}
	}, jt = () => {
		window.requestAnimationFrame(() => {
			let e = Je.current?.ownerDocument ?? (typeof document == "object" ? document : null), t = e?.activeElement ?? null, n = e?.getElementById(we) ?? null;
			if (t instanceof Node && (Je.current?.contains(t) || n?.contains(t))) return;
			wt();
			let r = X.current;
			r && Ke(Rd(r));
		});
	}, Mt = d((e, t) => e.length === t.length ? e.every((e, n) => e === t[n]) : !1, [])(Ve, De), Nt = he || ge || Cl(_e) || Cl(ve), Pt = !fe && !he && !ge && ye.length > 0, Ft = (fe ? oe || Nt : oe || Nt || Cl(Be) || Pt) || fe, It = Ft && !Mt, Lt = Q(dt ? "text-xs" : void 0, f), Rt = !!G.disabled, zt = Rt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, Bt = N ? "left-0" : dt ? Md.layout.compactLabelOffset : Md.layout.labelOffset, Vt = se ? Md.wrapper.error : It ? Md.wrapper.raised : Md.wrapper.neutral, Ht = se ? void 0 : Md.label.focusToneRaised, Ut = Ir({
		hasError: !!se,
		isRaised: Ft,
		isActiveTone: !Mt && Ft,
		isDisabled: Rt,
		tones: Md.label.tone
	}), Wt = Lr({
		baseClassName: Md.label.base,
		horizontalClassName: Bt,
		labelClassName: u,
		isCompact: dt,
		isRaised: Ft,
		toneClassName: Ut,
		focusToneClassName: Ht
	}), Gt = Lr({
		baseClassName: Md.label.base,
		horizontalClassName: Bt,
		labelClassName: u,
		isCompact: dt,
		isRaised: !0,
		toneClassName: Ut,
		focusToneClassName: Ht
	}), Kt = Rr({
		hideLabel: lt,
		isCompact: dt,
		withLabelDefaultClassName: Md.layout.selectSpacing,
		hiddenLabelDefaultClassName: Md.layout.hiddenSelectSpacing,
		withLabelCompactClassName: Md.layout.selectSpacingCompact,
		hiddenLabelCompactClassName: Md.layout.hiddenSelectSpacingCompact
	}), qt = Q(Md.control.base, dt ? "min-h-[3rem]" : "min-h-[3.25rem]", Kt, Rt ? Md.control.disabled : void 0, l), Jt = Q(Md.nativeSelect.base, dt ? "min-h-[3rem]" : "min-h-[3.25rem]", Kt, fe && Md.nativeSelect.multiple, Md.nativeSelect.option, l), Yt = Q(Md.wrapper.base, N || P || !fe ? Md.wrapper.gap : void 0, Md.wrapper.frame, ft, Vt, zt, c), Xt = Q(Md.adornment.base, Rt ? Md.adornment.disabled : void 0, F), Zt = P ?? (fe ? null : /* @__PURE__ */ C("svg", {
		"aria-hidden": "true",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: Br({ isOpen: !$e && Fe }),
		children: /* @__PURE__ */ C("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	})), Qt = Q(Md.adornment.base, Ut, I), $t = ce !== void 0 || se !== void 0, en = $t ? !1 : R !== !1;
	if (z) {
		let e = $t ? /* @__PURE__ */ C(Cd, {
			compact: dt,
			helper: ce,
			error: se,
			reserveSpace: !1
		}) : void 0;
		return /* @__PURE__ */ C(xd, {
			baseClassName: Md.container,
			containerClassName: s,
			dataTheme: pe,
			styles: Md.message,
			messageClassName: Lt,
			helper: e,
			reserveSpace: en,
			children: /* @__PURE__ */ w("div", {
				className: Yt,
				"data-skeleton": "true",
				"data-slot": "select-skeleton-shell",
				children: [
					N && /* @__PURE__ */ C("div", {
						className: Xt,
						children: /* @__PURE__ */ C(cd, { className: "h-4 w-4 rounded-full" })
					}),
					/* @__PURE__ */ w("div", {
						className: Md.inner,
						children: [/* @__PURE__ */ C("div", {
							"aria-hidden": "true",
							className: Q(qt, "flex items-center text-transparent select-none"),
							children: /* @__PURE__ */ C(cd, { className: "h-3.5 w-3/5 rounded-full" })
						}), /* @__PURE__ */ C(Sd, {
							showLabel: ut,
							labelClassName: Gt,
							compact: dt
						})]
					}),
					Zt && /* @__PURE__ */ C("div", {
						className: Qt,
						children: /* @__PURE__ */ C(cd, { className: "h-4 w-4 rounded-full" })
					})
				]
			})
		});
	}
	let tn = qe?.required?.value ?? O, nn = {
		...G,
		...le,
		id: Se,
		ref: Ze,
		className: Jt
	};
	ht === void 0 ? mt === void 0 ? ut && (nn["aria-labelledby"] = Ce) : nn["aria-labelledby"] = mt : nn["aria-label"] = ht, nn.onChange = Ot, nn.onBlur = Ke, tn && (nn.required = !0, nn["aria-required"] = !0), fe ? he ? nn.value = Ve : nn.defaultValue = Ve : he ? nn.value = Be : nn.defaultValue = Be;
	let rn = {
		...G,
		id: J,
		name: q,
		className: Md.nativeSelect.hidden,
		tabIndex: -1,
		disabled: Rt,
		required: tn,
		value: Be,
		onChange: () => void 0
	};
	rn["aria-hidden"] = !0;
	let an = (() => {
		if (ht === void 0) return ut ? Ce : mt;
	})(), on = it.length > 0 ? it.map(({ option: e, index: t }) => {
		let n = e.value === Be;
		return /* @__PURE__ */ C(Gr, {
			role: "option",
			ariaSelected: n,
			selected: n,
			highlighted: t === Le,
			disabled: e.disabled,
			label: e.label,
			leading: W?.[e.value],
			trailing: n ? /* @__PURE__ */ C("span", {
				className: Md.dropdown.optionSelectedIcon,
				children: /* @__PURE__ */ C(Uu, {})
			}) : void 0,
			onMouseEnter: () => {
				Y(t);
			},
			onClick: () => {
				Et(e);
			}
		}, `${e.value}-${String(t)}`);
	}) : Z && tt ? /* @__PURE__ */ C("div", {
		className: Md.dropdown.empty,
		children: U
	}) : /* @__PURE__ */ C("div", {
		className: Md.dropdown.empty,
		children: "No options are available."
	});
	return /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C(xd, {
		baseClassName: Md.container,
		containerClassName: s,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: pe,
		styles: Md.message,
		messageClassName: Lt,
		error: se,
		helper: ce,
		reserveSpace: R !== !1,
		children: /* @__PURE__ */ w("div", {
			ref: Je,
			className: Yt,
			onMouseDown: Dt,
			"data-slot": "select-shell",
			children: [
				N && /* @__PURE__ */ C("div", {
					className: Xt,
					children: N
				}),
				/* @__PURE__ */ w("div", {
					className: Md.inner,
					children: [$e ? /* @__PURE__ */ C("select", {
						...nn,
						children: ee
					}) : /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("select", {
						ref: Ze,
						...rn,
						children: ee
					}), /* @__PURE__ */ C("button", {
						id: Se,
						ref: Qe,
						type: "button",
						role: "combobox",
						"aria-expanded": Fe,
						"aria-controls": we,
						"aria-haspopup": "listbox",
						"aria-invalid": se ? !0 : void 0,
						"aria-required": tn ? !0 : void 0,
						"aria-label": ht,
						"aria-labelledby": an,
						disabled: Rt,
						autoFocus: G.autoFocus,
						className: qt,
						onClick: () => {
							if (Fe) {
								wt();
								return;
							}
							Tt();
						},
						onKeyDown: kt,
						onBlur: jt,
						children: /* @__PURE__ */ C("span", {
							className: Md.control.display,
							title: vt,
							children: _t
						})
					})] }), ut && /* @__PURE__ */ C("span", {
						id: Ce,
						className: Wt,
						title: ct,
						children: st
					})]
				}),
				Zt && /* @__PURE__ */ C("div", {
					className: Qt,
					children: Zt
				})
			]
		})
	}), !$e && /* @__PURE__ */ C(di, {
		id: we,
		anchorRef: Je,
		isOpen: Fe,
		onRequestClose: wt,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: "listbox",
		labelledBy: ut ? Ce : void 0,
		renderContent: () => /* @__PURE__ */ w("div", {
			className: Md.dropdown.content,
			children: [Z && /* @__PURE__ */ C(mi, {
				ref: Xe,
				value: Re,
				onChange: (e) => {
					ze(e), Y(St(e));
				},
				onKeyDown: At,
				placeholder: H,
				ariaLabel: Ad(st, "Search options")
			}), /* @__PURE__ */ C("div", {
				className: Md.dropdown.list,
				children: on
			})]
		})
	})] });
});
zd.displayName = "Select";
//#endregion
//#region ../ui/src/lib/Input.tsx
var Bd = (e) => e == null ? "" : Array.isArray(e) ? e.join(",") : String(e), Vd = (e, t) => Number.isNaN(e) ? t : e <= 0 ? 0 : e >= t ? t : e, Hd = (e, t, n) => {
	if (!t) return 0;
	let r = Vd(n, t.length);
	return r <= 0 ? 0 : e.parseUserInput(t.slice(0, r)).length;
}, Ud = (e, t, n) => {
	if (n <= 0) return 0;
	if (n >= e.parseUserInput(t).length) return t.length;
	for (let r = 0; r <= t.length; r += 1) if (e.parseUserInput(t.slice(0, r)).length >= n) return r;
	return t.length;
}, Wd = new Set([
	"date",
	"datetime-local",
	"month",
	"time",
	"week"
]), Gd = (e) => typeof e == "string" ? Wd.has(e) : !1, Kd = "00:00", qd = (e) => {
	if (!e) return {
		date: "",
		time: Kd
	};
	let [t, n] = e.split("T");
	return {
		date: t,
		time: n ? n.slice(0, 5) : Kd
	};
}, Jd = (e, t) => e ? `${e}T${t || Kd}` : "", Yd = 1970, Xd = 2125, Zd = new Date(Yd, 0, 1), Qd = new Date(Xd, 11, 31), $d = Zd, ef = new Date(Xd, 11, 1), tf = new Intl.DateTimeFormat("en-GB", { month: "long" }), nf = Array.from({ length: 12 }, (e, t) => tf.format(new Date(2e3, t, 1))), rf = Array.from({ length: Xd - Yd + 1 }, (e, t) => Yd + t), af = {
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
}, of = (e) => new Date(e.getFullYear(), e.getMonth(), 1), sf = (e) => {
	let t = of(e);
	return t < $d ? of($d) : t > ef ? of(ef) : t;
}, cf = (e) => {
	if (!e) return;
	let [t, n, r] = e.split("-"), i = Number.parseInt(t, 10), a = Number.parseInt(n, 10), o = Number.parseInt(r, 10);
	if (!(Number.isNaN(i) || Number.isNaN(a) || Number.isNaN(o))) return new Date(i, a - 1, o, 12);
}, lf = (e) => sf(cf(e) || /* @__PURE__ */ new Date()), uf = (e) => `${e.getFullYear().toString().padStart(4, "0")}-${(e.getMonth() + 1).toString().padStart(2, "0")}-${e.getDate().toString().padStart(2, "0")}`, df = (e) => `${e.getHours().toString().padStart(2, "0")}:${e.getMinutes().toString().padStart(2, "0")}`, ff = (e, t) => {
	let n = Number.parseInt(e, 10);
	return Number.isNaN(n) ? "00" : Math.min(Math.max(n, 0), t).toString().padStart(2, "0");
}, pf = (e) => {
	let [t = "00", n = "00"] = (e || Kd).split(":");
	return {
		hours: ff(t, 23),
		minutes: ff(n, 59)
	};
}, mf = (e, t) => `${e}:${t}`, hf = ({ className: e, modifiers: t, disabled: n, ...r }) => {
	let { children: i, ...a } = r, o = t.selected, s = t.outside, c = t.today, l = !!(t.disabled || n);
	return /* @__PURE__ */ C("button", {
		...a,
		type: "button",
		disabled: l,
		"data-theme": sn(o ? "secondary" : "neutral"),
		"data-disabled": en(l),
		className: Q(Kt, Lt.md, Xt(o ? "solid" : "outline"), "h-8 w-8 rounded-[var(--pc-radius-full)] border-0 text-xs font-semibold transition-none", o ? "text-[var(--pc-color-text)]" : "text-[var(--pc-color-text-muted)] focus-visible:ring-[var(--pc-color-border)]", c && !o && "text-[var(--pc-color-text)]", s && "opacity-50", e),
		children: i
	});
}, gf = (e, t, n, r) => {
	let i = t.length, a = r.start ?? r.end ?? i, o = r.end ?? r.start ?? i, s = Math.min(a, o), c = Math.max(a, o), l = Hd(e, t, s), u = Hd(e, t, c);
	return {
		start: Ud(e, n, l),
		end: Ud(e, n, u)
	};
}, _f = (e) => !!e && typeof e == "object" && ("start" in e || "end" in e), vf = (e, t) => {
	if (_f(e)) return {
		start: Vd(e.start ?? t, t),
		end: Vd(e.end ?? t, t)
	};
	let n = Vd(typeof e == "number" ? e : t, t);
	return {
		start: n,
		end: n
	};
}, yf = (e, t) => {
	try {
		let n = t.start ?? t.end ?? null, r = t.end ?? t.start ?? null;
		e.setSelectionRange(n, r);
	} catch {}
}, bf = {
	container: Su.container,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		textareaLabelOffset: "left-0",
		wrapperSpacing: ju,
		wrapperSpacingCompact: Mu,
		wrapperHiddenSpacing: Nu,
		wrapperHiddenSpacingCompact: Pu,
		inputSpacing: Du.spacing.default,
		hiddenInputSpacing: Du.spacing.hiddenDefault,
		textareaSpacing: Du.spacing.textarea,
		hiddenTextareaSpacing: Du.spacing.hiddenTextarea,
		compactInputSpacing: Du.spacing.compact,
		hiddenCompactInputSpacing: Du.spacing.hiddenCompact,
		compactTextareaSpacing: Du.spacing.compact,
		hiddenCompactTextareaSpacing: Du.spacing.hiddenCompact
	},
	label: {
		base: Fu,
		focusToneRaised: "peer-focus:text-[var(--pc-color-text-muted)]"
	},
	labelState: { tone: {
		active: "text-[var(--pc-color-text-muted)]",
		inactive: "text-[var(--pc-color-text-muted)]",
		error: "text-[var(--pc-color-text-muted)]",
		disabled: "text-[var(--pc-color-border)]"
	} },
	input: { base: `${Iu} placeholder:text-[var(--pc-color-depth-5)] disabled:text-[var(--pc-color-border)] disabled:placeholder:text-[var(--pc-color-border)]` },
	textarea: {
		base: `${Lu} placeholder:text-[var(--pc-color-depth-5)] disabled:text-[var(--pc-color-border)] disabled:placeholder:text-[var(--pc-color-border)]`,
		disabled: "disabled:opacity-50 disabled:cursor-not-allowed"
	},
	wrapper: {
		base: Au,
		text: Ou,
		textarea: ku,
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
		base: wu.base,
		disabled: "text-[var(--pc-color-border-weaker)]"
	},
	message: {
		error: Cu.error,
		helper: Cu.helper,
		darkErrorTone: Su.message.darkErrorTone,
		darkHelperTone: Su.message.darkHelperTone
	},
	inner: Tu,
	gapWithAdornment: Eu
}, xf = c(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, containerClassName: s, className: c, inputClassName: l, labelClassName: u, messageClassName: f, field: m, meta: h, form: v, innerRef: x, as: S, type: E, onChange: D, onBlur: O, onFocus: k, id: A, name: j, value: M, defaultValue: N, leadingAdornment: P, trailingAdornment: F, leadingAdornmentClassName: I, trailingAdornmentClassName: ee, validation: L, required: R, density: z = "default", reserveMessageSpace: B, skeleton: V = !1, formattingAdapter: H, inputProps: U, ...W }, G) {
	let [K, te] = b(), { inputId: ne, resolvedName: re, handleChange: q, handleBlur: ie, hasValue: ae, errorContent: oe, helperContent: se, sharedProps: ce, resolvedValue: le } = Dl({
		forwardedRef: G,
		field: m,
		meta: h,
		form: v,
		innerRef: x,
		id: A,
		name: j,
		value: M,
		defaultValue: N,
		explicitError: o ?? K,
		helperText: r,
		onChange: D,
		onBlur: O
	}), ue = z === "compact", de = Q(ue ? "text-xs" : void 0, f), fe = S === "textarea" || E === "textarea", pe = typeof E == "string" ? E.toLowerCase() : E, { dataTheme: me } = wd({
		variant: e,
		hasError: !V && !!oe
	}), he = !fe && pe === "datetime-local", ge = !fe && pe === "search", _e = !fe, ve = v?.setFieldValue, ye = d((e) => _e && typeof e == "boolean" ? String(e) : e, [_e]), be = _(() => ({
		...U,
		...W
	}), [U, W]), xe = _(() => {
		if (!_e) return ce;
		let e = { ...ce };
		return "value" in e && (e.value = ye(e.value)), "defaultValue" in e && (e.defaultValue = ye(e.defaultValue)), e;
	}, [
		ye,
		ce,
		_e
	]), Se = y(null), Ce = y(null), we = y(null), { ref: J, ...Te } = xe, Ee = Object.prototype.hasOwnProperty.call(Te, "value"), De = Object.prototype.hasOwnProperty.call(Te, "defaultValue"), Oe = Ee ? Te.value : void 0, ke = De ? Te.defaultValue : void 0, Ae = Ee, je = _(() => qd(typeof Oe == "string" && Oe || typeof ke == "string" && ke || (typeof N == "string" ? N : void 0)), [
		N,
		ke,
		Oe
	]), [Me, Ne] = b(ae ? !0 : Ee ? Cl(Oe) : De ? Cl(ke) : N === void 0 ? !1 : Cl(N)), [Pe, Fe] = b(!1), [Ie, Le] = b(je.date), [Y, Re] = b(je.time), [ze, Be] = b(null), [Ve, He] = b(() => lf(je.date)), Ue = d((e) => {
		He((t) => sf(typeof e == "function" ? e(t) : e));
	}, []), We = Ae ? ae : Me, Ge = d((e) => {
		let t = e.currentTarget;
		if (t instanceof HTMLInputElement) return t.type === "checkbox" ? t.checked : t.value;
		if (t instanceof HTMLTextAreaElement) return t.value;
	}, []), Ke = d((e) => {
		te(e);
	}, [te]), { onChange: qe, onBlur: X, normalizedValidation: Je } = Ol({
		value: le,
		required: R,
		validation: L,
		metaTouched: h?.touched,
		submitCount: v?.submitCount,
		resolvedName: re,
		setFieldError: v?.setFieldError,
		handleChange: q,
		handleBlur: ie,
		setManagedError: Ke,
		getValueFromChangeEvent: Ge,
		normalizeValue: ye
	}), Ye = (e) => {
		if (!Ae) {
			let t = e.currentTarget;
			t instanceof HTMLInputElement ? t.type === "checkbox" ? Ne(t.checked) : Ne(t.value.length > 0) : t instanceof HTMLTextAreaElement && Ne(t.value.length > 0);
		}
		qe(e);
	};
	p(() => {
		!_e || !ve || !re || typeof le != "boolean" || ve(re, String(le), !1);
	}, [
		re,
		le,
		ve,
		_e
	]);
	let { hideLabel: Xe } = Ll(), Ze = t ?? re ?? "", Qe = yd(Ze), $e = n ?? Xe ?? !1, et = !$e && !(typeof t == "string" && t.length === 0), Z = Rr({
		hideLabel: $e,
		isCompact: ue,
		withLabelDefaultClassName: bf.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: bf.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: bf.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: bf.layout.wrapperHiddenSpacingCompact
	}), tt = !!P, nt = !!F, rt = fe ? ue ? bf.layout.compactLabelOffset : bf.layout.textareaLabelOffset : tt ? "left-0" : ue ? bf.layout.compactLabelOffset : bf.layout.labelOffset, it = be.placeholder, at = typeof it == "string" && it.length > 0, ot = !fe && Gd(pe), st = We || at || ot, ct = fe || st, lt = !!(be.disabled || be.readOnly), ut = lt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, dt = We, ft = Ir({
		hasError: !!oe,
		isRaised: st,
		isActiveTone: We,
		isDisabled: lt,
		tones: bf.labelState.tone
	}), pt = oe ? bf.wrapper.error : dt ? bf.wrapper.raised : bf.wrapper.neutral, mt = oe ? void 0 : bf.label.focusToneRaised, ht = Lr({
		baseClassName: bf.label.base,
		horizontalClassName: rt,
		labelClassName: u,
		isCompact: ue,
		isRaised: ct,
		toneClassName: ft,
		focusToneClassName: mt
	}), gt = Lr({
		baseClassName: bf.label.base,
		horizontalClassName: rt,
		labelClassName: u,
		isCompact: ue,
		isRaised: !0,
		toneClassName: ft,
		focusToneClassName: mt
	}), _t = d(() => {
		if (!he) return;
		let e = Se.current;
		if (!(e instanceof HTMLInputElement)) {
			let e = qd(void 0);
			Le(e.date), Re(e.time), Ue(lf(e.date));
			return;
		}
		let t = qd(e.value);
		Le(t.date), Re(t.time), Ue(lf(t.date));
	}, [
		he,
		Ue,
		Le,
		Re
	]), vt = d((e, t) => {
		if (!he) return;
		let n = e ?? "", r = t ?? Kd;
		if (!(Se.current instanceof HTMLInputElement)) {
			Le(n), Re(r);
			return;
		}
		let i = n ? Jd(n, r) : "";
		if (Fl(Se.current, i), Se.current.dispatchEvent(new Event("input", { bubbles: !0 })), n) {
			let e = cf(n);
			e && Ue(e);
		}
		Le(n), Re(r), Ne(i.length > 0);
	}, [
		he,
		Ue,
		Le,
		Ne,
		Re
	]), yt = _(() => cf(Ie), [Ie]), bt = _(() => pf(Y), [Y]), xt = d((e) => {
		vt(Ie, mf(ff(e.currentTarget.value, 23), bt.minutes));
	}, [
		vt,
		Ie,
		bt.minutes
	]), St = d((e) => {
		let t = ff(e.currentTarget.value, 59);
		vt(Ie, mf(bt.hours, t));
	}, [
		vt,
		Ie,
		bt.hours
	]), Ct = d((e) => {
		if (he) {
			if (!e) {
				vt("", Y);
				return;
			}
			vt(uf(e), Y), Ue(e);
		}
	}, [
		vt,
		he,
		Ue,
		Y
	]), wt = d((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || Ue((e) => new Date(e.getFullYear(), t, 1));
	}, [Ue]), Tt = d((e) => {
		let t = Number(e.currentTarget.value);
		Number.isNaN(t) || Ue((e) => new Date(t, e.getMonth(), 1));
	}, [Ue]), Et = d((e) => {
		Ue((t) => new Date(t.getFullYear(), t.getMonth() + (e === "next" ? 1 : -1), 1));
	}, [Ue]), Dt = d(() => {
		vt("", Kd), Ue(/* @__PURE__ */ new Date());
	}, [vt, Ue]), Ot = d(() => {
		let e = /* @__PURE__ */ new Date();
		vt(uf(e), df(e)), Ue(e);
	}, [vt, Ue]), kt = d(() => {
		he && (_t(), Fe(!0));
	}, [
		he,
		Fe,
		_t
	]), At = d(() => {
		Fe(!1), Be(null);
	}, [Be, Fe]), jt = d((e) => {
		if (!he || !Pe || typeof window > "u") return;
		let t = Ce.current;
		if (!t) return;
		let n = t.getBoundingClientRect(), r = window.innerWidth || 0, i = window.innerHeight || 0, a = n.width, o = Math.max(r - 32, a), s = we.current?.getBoundingClientRect().width, c = Math.min(Math.max(s ?? a, a), o), l = e ?? we.current?.getBoundingClientRect().height ?? 320, u = Math.max(i - 32, 320), d = Math.min(l, u), f = i - n.bottom - 8 - 16, p = n.top - 8 - 16, m = d > f && p > f, h = r - c - 16, g = Math.min(Math.max(n.left, 16), Math.max(h, 16)), _ = n.bottom + 8, v = n.top - 8 - d, y = Math.max(i - d - 16, 16), b = m ? Math.max(v, 16) : Math.min(Math.max(_, 16), y);
		Be((e) => e && e.top === b && e.left === g && e.width === c ? e : {
			top: b,
			left: g,
			width: c
		});
	}, [
		he,
		Pe,
		Be
	]);
	p(() => {
		if (!Pe || typeof document > "u") return;
		let e = (e) => {
			let t = Ce.current, n = we.current, r = e.target;
			t && r && t.contains(r) || n && r && n.contains(r) || At();
		}, t = (e) => {
			e.key === "Escape" && At();
		};
		return document.addEventListener("pointerdown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("pointerdown", e), document.removeEventListener("keydown", t);
		};
	}, [At, Pe]), g(() => {
		if (!Pe || !he || typeof window > "u") return;
		jt();
		let e = () => {
			jt();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [
		he,
		Pe,
		jt
	]), g(() => {
		if (!Pe || !he) return;
		let e = we.current;
		e && jt(e.getBoundingClientRect().height);
	}, [
		he,
		Pe,
		ze,
		jt
	]);
	let Mt = Rr({
		hideLabel: $e,
		isCompact: ue,
		withLabelDefaultClassName: bf.layout.inputSpacing,
		hiddenLabelDefaultClassName: bf.layout.hiddenInputSpacing,
		withLabelCompactClassName: bf.layout.compactInputSpacing,
		hiddenLabelCompactClassName: bf.layout.hiddenCompactInputSpacing
	}), Nt = Rr({
		hideLabel: $e,
		isCompact: ue,
		withLabelDefaultClassName: bf.layout.textareaSpacing,
		hiddenLabelDefaultClassName: bf.layout.hiddenTextareaSpacing,
		withLabelCompactClassName: bf.layout.compactTextareaSpacing,
		hiddenLabelCompactClassName: bf.layout.hiddenCompactTextareaSpacing
	}), Pt = Q(bf.input.base, Mt, void 0, void 0, he ? zu : void 0, ge ? Ru : void 0, l), Ft = Q(bf.wrapper.text, (tt || nt) && bf.gapWithAdornment, bf.wrapper.base, Z, pt, ut, c), It = Q(bf.wrapper.textarea, bf.wrapper.base, Z, pt, ut, c), Lt = Q(bf.textarea.base, Nt, void 0, void 0, ue && "text-sm", bf.textarea.disabled, l), Rt = Q(bf.adornment.base, lt ? bf.adornment.disabled : void 0, I), zt = Q(bf.adornment.base, lt ? bf.adornment.disabled : void 0, ee), Bt = se !== void 0 || oe !== void 0, Vt = Bt ? !1 : B !== !1;
	if (V) {
		let e = Bt ? /* @__PURE__ */ C(Cd, {
			compact: ue,
			helper: se,
			error: oe,
			reserveSpace: !1
		}) : void 0, t = fe ? /* @__PURE__ */ C("div", {
			className: It,
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: /* @__PURE__ */ w("div", {
				className: bf.inner,
				children: [/* @__PURE__ */ w("div", {
					"aria-hidden": "true",
					className: Q(Lt, "flex flex-col gap-2 text-transparent select-none"),
					children: [
						/* @__PURE__ */ C(cd, { className: "h-3.5 w-4/5 rounded-full" }),
						/* @__PURE__ */ C(cd, { className: "h-3.5 w-full rounded-full" }),
						/* @__PURE__ */ C(cd, { className: "h-3.5 w-3/5 rounded-full" })
					]
				}), /* @__PURE__ */ C(Sd, {
					showLabel: et,
					labelClassName: gt,
					compact: ue,
					widthClassName: "mt-1"
				})]
			})
		}) : /* @__PURE__ */ w("div", {
			className: Ft,
			"data-skeleton": "true",
			"data-slot": "input-skeleton-shell",
			children: [
				tt && /* @__PURE__ */ C("div", {
					className: Rt,
					children: P
				}),
				/* @__PURE__ */ w("div", {
					className: bf.inner,
					children: [/* @__PURE__ */ C("div", {
						"aria-hidden": "true",
						className: Q(Pt, "text-transparent select-none"),
						children: /* @__PURE__ */ C("div", {
							className: "flex h-6 w-full items-center",
							children: /* @__PURE__ */ C(cd, { className: Q("h-3.5 rounded-full translate-y-0.5", nt ? "w-2/3" : "w-4/5") })
						})
					}), /* @__PURE__ */ C(Sd, {
						showLabel: et,
						labelClassName: gt,
						compact: ue,
						widthClassName: "mt-1"
					})]
				}),
				nt && /* @__PURE__ */ C("div", {
					className: zt,
					children: F
				})
			]
		});
		return /* @__PURE__ */ C(xd, {
			baseClassName: bf.container,
			containerClassName: s,
			dataTheme: me,
			styles: bf.message,
			messageClassName: de,
			helper: e,
			reserveSpace: Vt,
			children: t
		});
	}
	let Ht = {
		...be,
		...Te
	};
	Ht.ref = (e) => {
		Se.current = e, J && xl(J, e);
	}, Ht.onChange = Ye, Ht.onBlur = X, $e && typeof Ze == "string" && Ze.length > 0 && Ht["aria-label"] === void 0 && Ht["aria-labelledby"] === void 0 && (Ht["aria-label"] = Ze), fe || (he ? (Ht.type = "text", Ht.inputMode ??= "numeric", Ht.autoComplete ??= "off", Ht.pattern ??= "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}", Ht["aria-label"] ??= typeof Ze == "string" ? Ze : "Date time input", Ht["data-datetime-input"] = "true", (Ht.placeholder === void 0 || Ht.placeholder === null || Ht.placeholder === "") && (Ht.placeholder = "YYYY-MM-DDTHH:MM")) : Ht.type = (E === "checkbox" ? "text" : E) ?? "text"), (Je?.required?.value ?? R) && (Ht.required = !0, Ht["aria-required"] = !0), H ? (Ee ? Ht.value = H.formatDisplayValue(Bd(Oe)) : De && (Ht.defaultValue = H.formatDisplayValue(Bd(ke))), Ht.onChange = (e) => {
		if (!H) {
			Ye(e);
			return;
		}
		let t = e.currentTarget, n = t.value, r = {
			start: t.selectionStart ?? n.length,
			end: t.selectionEnd ?? n.length
		}, i = Bd(H.parseUserInput(n)), a = H.formatDisplayValue(i);
		if (Fl(t, i), Ye(e), t.value !== a && Fl(t, a), t !== (typeof document < "u" ? document.activeElement : null) || typeof t.setSelectionRange != "function") {
			Ae || Ne(t.type === "checkbox" ? t.checked : t.value.length > 0);
			return;
		}
		yf(t, vf((H.restoreCaret ? H.restoreCaret(n, a, r) : void 0) ?? gf(H, n, a, r), a.length)), Ae || Ne(t.type === "checkbox" ? t.checked : t.value.length > 0);
	}) : Ht.onChange = Ye, Ht.onFocus = (e) => {
		k?.(e), !e.defaultPrevented && !fe && he && kt();
	};
	let Ut = (e) => {
		e.stopPropagation();
	}, Wt = (e) => {
		e.stopPropagation();
	}, Gt = () => {
		if (!he || !Pe || !ze || typeof document > "u") return null;
		let e = !!Ie, t = "w-32";
		return T(/* @__PURE__ */ w("div", {
			ref: (e) => {
				we.current = e;
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
				/* @__PURE__ */ C("div", {
					className: "flex flex-wrap items-center justify-between gap-2",
					children: /* @__PURE__ */ w("div", {
						className: "flex flex-nowrap items-center gap-2",
						children: [
							/* @__PURE__ */ C(un, {
								"aria-label": "Go to previous month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									Et("previous");
								},
								iconOnly: !0,
								label: "Go to previous month",
								leadingIcon: /* @__PURE__ */ C(Gu, {})
							}),
							/* @__PURE__ */ C("div", {
								className: "w-40",
								children: /* @__PURE__ */ C(zd, {
									label: "Select month",
									hideLabel: !0,
									value: Ve.getMonth().toString(),
									onChange: wt,
									density: "compact",
									reserveMessageSpace: !1,
									children: nf.map((e, t) => /* @__PURE__ */ C("option", {
										value: t,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ C("div", {
								className: "w-28",
								children: /* @__PURE__ */ C(zd, {
									label: "Select year",
									hideLabel: !0,
									value: Ve.getFullYear().toString(),
									onChange: Tt,
									density: "compact",
									reserveMessageSpace: !1,
									children: rf.map((e) => /* @__PURE__ */ C("option", {
										value: e,
										children: e
									}, e))
								})
							}),
							/* @__PURE__ */ C(un, {
								"aria-label": "Go to next month",
								size: "md",
								variant: "neutral",
								onClick: () => {
									Et("next");
								},
								iconOnly: !0,
								label: "Go to next month",
								leadingIcon: /* @__PURE__ */ C(Ku, {})
							})
						]
					})
				}),
				/* @__PURE__ */ C("div", {
					className: "mt-3 rounded-[var(--pc-radius-2xl)] bg-[color:var(--pc-color-surface)] p-2",
					children: /* @__PURE__ */ C(_c, {
						mode: "single",
						month: Ve,
						onMonthChange: Ue,
						selected: yt,
						onSelect: Ct,
						startMonth: $d,
						endMonth: ef,
						disabled: {
							before: Zd,
							after: Qd
						},
						showOutsideDays: !0,
						classNames: af,
						components: { DayButton: hf }
					})
				}),
				/* @__PURE__ */ w("div", {
					className: "mt-3",
					children: [/* @__PURE__ */ C("p", {
						className: "text-[10px] font-semibold uppercase tracking-wide text-[var(--pc-color-text-muted)]",
						children: "Time"
					}), /* @__PURE__ */ w("div", {
						className: "mt-2 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ C("div", {
							className: t,
							children: /* @__PURE__ */ C(vd, {
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
						}), /* @__PURE__ */ C("div", {
							className: t,
							children: /* @__PURE__ */ C(vd, {
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
				/* @__PURE__ */ w("div", {
					className: "mt-3 flex items-center justify-end gap-2",
					children: [
						/* @__PURE__ */ C(un, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: Dt,
							disabled: !e,
							label: "Clear"
						}),
						/* @__PURE__ */ C(un, {
							type: "button",
							variant: "neutral",
							size: "sm",
							onClick: Ot,
							label: "Use now"
						}),
						/* @__PURE__ */ C(un, {
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
	}, Kt = fe ? /* @__PURE__ */ C("label", {
		htmlFor: ne,
		className: It,
		children: /* @__PURE__ */ w("div", {
			className: bf.inner,
			children: [/* @__PURE__ */ C("textarea", {
				className: Lt,
				...Ht
			}), et && /* @__PURE__ */ C("span", {
				className: ht,
				title: Qe,
				children: Ze
			})]
		})
	}) : /* @__PURE__ */ w("label", {
		htmlFor: ne,
		className: Ft,
		ref: Ce,
		children: [
			tt && /* @__PURE__ */ C("div", {
				className: Rt,
				children: P
			}),
			/* @__PURE__ */ w("div", {
				className: bf.inner,
				children: [
					/* @__PURE__ */ C("input", {
						className: Pt,
						...Ht
					}),
					et && /* @__PURE__ */ C("span", {
						className: ht,
						title: Qe,
						children: Ze
					}),
					Gt()
				]
			}),
			nt && /* @__PURE__ */ C("div", {
				className: zt,
				children: F
			})
		]
	});
	return /* @__PURE__ */ C(xd, {
		baseClassName: bf.container,
		containerClassName: s,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: me,
		styles: bf.message,
		messageClassName: de,
		error: oe,
		helper: se,
		reserveSpace: B !== !1,
		children: Kt
	});
});
xf.displayName = "Input";
//#endregion
//#region ../../node_modules/next/node_modules/@swc/helpers/cjs/_interop_require_default.cjs
var Sf = /* @__PURE__ */ M(((e) => {
	function t(e) {
		return e && e.__esModule ? e : { default: e };
	}
	e._ = t;
})), Cf = /* @__PURE__ */ M(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "LoadableContext", {
		enumerable: !0,
		get: function() {
			return t;
		}
	});
	var t = (/* @__PURE__ */ Sf()._(I("react"))).default.createContext(null);
	process.env.NODE_ENV !== "production" && (t.displayName = "LoadableContext");
})), wf = /* @__PURE__ */ M(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), Object.defineProperty(e, "default", {
		enumerable: !0,
		get: function() {
			return f;
		}
	});
	var t = /* @__PURE__ */ Sf()._(I("react")), n = Cf();
	function r(e) {
		return e && e.default ? e.default : e;
	}
	var i = [], a = [], o = !1;
	function s(e) {
		let t = e(), n = {
			loading: !0,
			loaded: null,
			error: null
		};
		return n.promise = t.then((e) => (n.loading = !1, n.loaded = e, e)).catch((e) => {
			throw n.loading = !1, n.error = e, e;
		}), n;
	}
	function c(e, s) {
		let c = Object.assign({
			loader: null,
			loading: null,
			delay: 200,
			timeout: null,
			webpack: null,
			modules: null
		}, s), u = null;
		function d() {
			if (!u) {
				let t = new l(e, c);
				u = {
					getCurrentValue: t.getCurrentValue.bind(t),
					subscribe: t.subscribe.bind(t),
					retry: t.retry.bind(t),
					promise: t.promise.bind(t)
				};
			}
			return u.promise();
		}
		if (typeof window > "u" && i.push(d), !o && typeof window < "u") {
			let e = c.webpack && typeof I.resolveWeak == "function" ? c.webpack() : c.modules;
			e && a.push((t) => {
				for (let n of e) if (t.includes(n)) return d();
			});
		}
		function f() {
			d();
			let e = t.default.useContext(n.LoadableContext);
			e && Array.isArray(c.modules) && c.modules.forEach((t) => {
				e(t);
			});
		}
		function p(e, n) {
			f();
			let i = t.default.useSyncExternalStore(u.subscribe, u.getCurrentValue, u.getCurrentValue);
			return t.default.useImperativeHandle(n, () => ({ retry: u.retry }), []), t.default.useMemo(() => i.loading || i.error ? /* @__PURE__ */ t.default.createElement(c.loading, {
				isLoading: i.loading,
				pastDelay: i.pastDelay,
				timedOut: i.timedOut,
				error: i.error,
				retry: u.retry
			}) : i.loaded ? /* @__PURE__ */ t.default.createElement(r(i.loaded), e) : null, [e, i]);
		}
		return p.preload = () => d(), p.displayName = "LoadableComponent", /* @__PURE__ */ t.default.forwardRef(p);
	}
	var l = class {
		constructor(e, t) {
			this._loadFn = e, this._opts = t, this._callbacks = /* @__PURE__ */ new Set(), this._delay = null, this._timeout = null, this.retry();
		}
		promise() {
			return this._res.promise;
		}
		retry() {
			this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
				pastDelay: !1,
				timedOut: !1
			};
			let { _res: e, _opts: t } = this;
			e.loading && (typeof t.delay == "number" && (t.delay === 0 ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
				this._update({ pastDelay: !0 });
			}, t.delay)), typeof t.timeout == "number" && (this._timeout = setTimeout(() => {
				this._update({ timedOut: !0 });
			}, t.timeout))), this._res.promise.then(() => {
				this._update({}), this._clearTimeouts();
			}).catch((e) => {
				this._update({}), this._clearTimeouts();
			}), this._update({});
		}
		_update(e) {
			this._state = {
				...this._state,
				error: this._res.error,
				loaded: this._res.loaded,
				loading: this._res.loading,
				...e
			}, this._callbacks.forEach((e) => e());
		}
		_clearTimeouts() {
			clearTimeout(this._delay), clearTimeout(this._timeout);
		}
		getCurrentValue() {
			return this._state;
		}
		subscribe(e) {
			return this._callbacks.add(e), () => {
				this._callbacks.delete(e);
			};
		}
	};
	function u(e) {
		return c(s, e);
	}
	function d(e, t) {
		let n = [];
		for (; e.length;) {
			let r = e.pop();
			n.push(r(t));
		}
		return Promise.all(n).then(() => {
			if (e.length) return d(e, t);
		});
	}
	u.preloadAll = () => new Promise((e, t) => {
		d(i).then(e, t);
	}), u.preloadReady = (e = []) => new Promise((t) => {
		let n = () => (o = !0, t());
		d(a, e).then(n, n);
	}), typeof window < "u" && (window.__NEXT_PRELOADREADY = u.preloadReady);
	var f = u;
})), Tf = /* @__PURE__ */ M(((e, t) => {
	Object.defineProperty(e, "__esModule", { value: !0 });
	function n(e, t) {
		for (var n in t) Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		});
	}
	n(e, {
		default: function() {
			return l;
		},
		noSSR: function() {
			return c;
		}
	});
	var r = Sf(), i = I("react/jsx-runtime");
	I("react");
	var a = /* @__PURE__ */ r._(wf()), o = typeof window > "u";
	function s(e) {
		return { default: e?.default || e };
	}
	function c(e, t) {
		if (delete t.webpack, delete t.modules, !o) return e(t);
		let n = t.loading;
		return () => /* @__PURE__ */ (0, i.jsx)(n, {
			error: null,
			isLoading: !0,
			pastDelay: !1,
			timedOut: !1
		});
	}
	function l(e, t) {
		let n = a.default, r = { loading: ({ error: e, isLoading: t, pastDelay: n }) => {
			if (!n) return null;
			if (process.env.NODE_ENV !== "production") {
				if (t) return null;
				if (e) return /* @__PURE__ */ (0, i.jsxs)("p", { children: [
					e.message,
					/* @__PURE__ */ (0, i.jsx)("br", {}),
					e.stack
				] });
			}
			return null;
		} };
		e instanceof Promise ? r.loader = () => e : typeof e == "function" ? r.loader = e : typeof e == "object" && (r = {
			...r,
			...e
		}), r = {
			...r,
			...t
		};
		let o = r.loader, l = () => o == null ? Promise.resolve(s(() => null)) : o().then(s);
		return r.loadableGenerated && (r = {
			...r,
			...r.loadableGenerated
		}, delete r.loadableGenerated), typeof r.ssr == "boolean" && !r.ssr ? (delete r.webpack, delete r.modules, c(n, r)) : n({
			...r,
			loader: l
		});
	}
	(typeof e.default == "function" || typeof e.default == "object" && e.default !== null) && e.default.__esModule === void 0 && (Object.defineProperty(e.default, "__esModule", { value: !0 }), Object.assign(e.default, e), t.exports = e.default);
})), Ef = /* @__PURE__ */ F((/* @__PURE__ */ M(((e, t) => {
	t.exports = Tf();
})))(), 1);
[
	"var(--font-mono)",
	"ui-monospace",
	"SFMono-Regular",
	"Menlo",
	"Monaco",
	"Consolas",
	"\"Liberation Mono\"",
	"\"Courier New\"",
	"monospace"
].join(", "), ["min-h-0 h-full w-full overflow-hidden border border-[var(--pc-color-border-weaker)] rounded-[var(--pc-radius-lg)]", "focus-within:outline-2 focus-within:outline-[var(--pc-color-text)] focus-within:outline-offset-0"].join(" "), (0, Ef.default)(() => import("./dist-DJaIQZbK.js").then((e) => e.default), { ssr: !1 }), `${Su.container}`, [
	Au,
	"relative flex w-full min-w-0 overflow-hidden rounded-[var(--pc-radius)]",
	"border-[var(--pc-color-border)] outline-[var(--pc-color-border)]",
	"focus-within:border-[var(--pc-color-text)]",
	"focus-within:outline-[var(--pc-color-text)]",
	"bg-transparent"
].join(" "), Cu.error, Cu.helper, ["h-full w-full resize-none bg-transparent px-3 py-3", "font-mono text-sm leading-[20px] text-[var(--pc-color-text)] outline-0"].join(" ");
//#endregion
//#region ../ui/src/lib/Tag.tsx
function Df({ as: e, children: t, className: n, theme: r, size: i = "md", style: a, ...o }) {
	let c = e ?? "span", l = c === "button", u = c === "code", d = {
		...a,
		lineHeight: 1
	}, f = Of[i];
	return s(c, {
		...o,
		...r ? { "data-theme": r } : {},
		style: d,
		className: Q(u ? "inline-block align-middle" : "inline-flex items-center", "[background:var(--pc-color-surface)] text-[var(--pc-color-text)]", l && [
			"max-w-full cursor-pointer gap-1 transition-colors duration-200 ease-out",
			"hover:[background:var(--pc-color-surface-weaker)]",
			"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]",
			"disabled:cursor-not-allowed disabled:opacity-60"
		], n, f)
	}, t);
}
var Of = {
	xl: "rounded-[var(--pc-radius-sm)] px-3.5 py-1.5 font-mono font-medium text-base leading-none",
	lg: "rounded-[var(--pc-radius-sm)] px-1.5 py-1 font-mono font-medium text-sm leading-none",
	md: "rounded-[var(--pc-radius-sm)] px-2.5 py-0.5 font-mono font-medium text-sm leading-none",
	sm: "rounded-[var(--pc-radius-sm)] px-2 py-0.5 font-mono font-medium text-xs leading-none",
	xs: "rounded-[var(--pc-radius-sm)] px-1.5 py-0.5 font-mono font-medium text-[11px] leading-none"
}, kf = {
	container: `${Su.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-3",
		compactLabelOffset: "left-2",
		wrapperSpacing: ju,
		wrapperSpacingCompact: Mu,
		wrapperHiddenSpacing: Nu,
		wrapperHiddenSpacingCompact: Pu
	},
	wrapper: {
		base: `${Ou} ${Au} min-w-0 max-w-full`,
		gap: Eu,
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
		base: ["peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0", Du.typography].join(" "),
		spacing: Du.spacing.default,
		hiddenSpacing: Du.spacing.hiddenDefault,
		compactSpacing: Du.spacing.compact,
		compactHiddenSpacing: Du.spacing.hiddenCompact,
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
		base: wu.base,
		trailing: "text-[var(--pc-color-text)]",
		disabled: "text-[var(--pc-color-depth-5)]"
	},
	label: {
		base: `${Fu} select-none`,
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
		error: Cu.error,
		helper: Cu.helper
	}
}, Af = (e) => {
	if (!Array.isArray(e)) return [];
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		let e = "";
		typeof n == "string" ? e = n.trim() : (typeof n == "number" || typeof n == "boolean") && (e = String(n).trim()), e && t.add(e);
	}
	return [...t];
}, jf = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map((e) => jf(e)).join(" ") : l(e) ? jf(e.props.children) : "", Mf = (e, t) => {
	let n = new Set(e), r = [];
	for (let e of t) n.has(e.value) && (r.push(e.value), n.delete(e.value));
	for (let t of e) n.has(t) && (r.push(t), n.delete(t));
	return r;
}, Nf = (e) => ({
	target: { name: e },
	currentTarget: { name: e }
}), Pf = (e, t) => ({
	target: {
		name: e,
		value: t
	},
	currentTarget: {
		name: e,
		value: t
	}
}), Ff = (e) => "lg", If = (e, t = "first") => {
	if (e.length === 0) return -1;
	if (t === "last") {
		for (let t = e.length - 1; t >= 0; --t) if (!e[t]?.disabled) return t;
		return -1;
	}
	for (let t = 0; t < e.length; t += 1) if (!e[t]?.disabled) return t;
	return -1;
}, Lf = c(function({ options: e, variant: t, label: n, hideLabel: r, helperText: i, belowFieldContent: a, belowFieldContentInheritsTheme: o = !0, error: s, containerClassName: c, className: l, labelClassName: u, messageClassName: f, field: h, meta: g, form: v, innerRef: x, onChange: S, onBlur: T, validation: E, required: D, density: O = "default", reserveMessageSpace: k, id: A, name: j, value: M, defaultValue: N, placeholder: P = "Select one or more values", searchPlaceholder: F = "Search values", disabled: I = !1, emptyMessage: ee = "No values available.", noMatchesMessage: L = "No values match your search.", skeleton: R = !1 }, z) {
	let [B, V] = b(), H = s ?? B, [U, W] = b(() => Af(N)), [G, K] = b(!1), [te, ne] = b(""), [re, q] = b(-1), [ie, ae] = b("below"), [oe, se] = b(220), { inputId: ce, resolvedName: le, handleChange: ue, handleBlur: de, resolvedValue: fe, errorContent: pe, helperContent: me, mergedRef: he, hasValue: ge } = Dl({
		forwardedRef: z,
		field: h,
		meta: g,
		form: v,
		innerRef: x,
		id: A,
		name: j,
		value: M,
		defaultValue: N,
		explicitError: H,
		helperText: i,
		onChange: d((e) => {
			S?.(e.currentTarget.value);
		}, [S]),
		onBlur: d(() => {
			T?.();
		}, [T])
	}), _e = d((e) => {
		V(e);
	}, []), ve = d((e) => Array.isArray(e) ? e.join(",") : e, []), { onChange: ye, onBlur: be, normalizedValidation: xe } = Ol({
		value: fe,
		required: D,
		validation: E,
		metaTouched: g?.touched,
		submitCount: v?.submitCount,
		resolvedName: le,
		setFieldError: v?.setFieldError,
		handleChange: ue,
		handleBlur: de,
		setManagedError: _e,
		getValueFromChangeEvent: (e) => e.currentTarget.value,
		normalizeValue: ve
	}), Se = fe !== void 0, Ce = _(() => Se ? Af(fe) : U, [
		U,
		Se,
		fe
	]), we = _(() => Mf(Ce, e), [e, Ce]), J = _(() => new Set(we), [we]), Te = _(() => {
		let t = /* @__PURE__ */ new Map();
		return e.forEach((e) => {
			t.set(e.value, e);
		}), t;
	}, [e]), Ee = _(() => we.map((e) => {
		let t = Te.get(e);
		return {
			value: e,
			label: t?.label ?? e,
			disabled: t?.disabled === !0
		};
	}), [Te, we]), De = te.trim().toLowerCase(), Oe = _(() => De ? e.filter((e) => `${jf(e.label)} ${e.value}`.toLowerCase().includes(De)) : e, [De, e]), ke = _(() => Oe.filter((e) => e.disabled !== !0).map((e) => e.value), [Oe]), Ae = _(() => G ? re >= 0 && re < Oe.length && Oe[re]?.disabled !== !0 ? re : If(Oe, "first") : -1, [
		Oe,
		re,
		G
	]), je = y(null), Me = y(null), Ne = y(null), Pe = y(/* @__PURE__ */ new Map()), Fe = d((e) => {
		je.current = e, he(e);
	}, [he]), Ie = d((e) => {
		Me.current = e;
	}, []), Le = m(), Y = ce ?? `${Le}-multiselect`, Re = `${Y}-listbox`, ze = `${Y}-label`, Be = d(() => {
		K(!1), ne(""), q(-1);
	}, []), Ve = d(() => {
		let e = je.current;
		if (!e || typeof window > "u") return;
		let t = e.getBoundingClientRect(), n = Math.max(140, Math.floor(window.innerHeight - t.bottom - 12)), r = Math.max(140, Math.floor(t.top - 12)), i = n < 200 && r > n, a = i ? "above" : "below", o = i ? r : n;
		ae(a), se(Math.max(140, Math.min(o - 92, 320)));
	}, []), He = d((e = "search") => {
		I || (K(!0), q(If(Oe, "first")), Ve(), e === "search" && requestAnimationFrame(() => {
			Ne.current?.focus();
		}));
	}, [
		I,
		Oe,
		Ve
	]);
	p(() => {
		if (!G) return;
		let e = () => {
			Ve();
		};
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [G, Ve]), p(() => {
		if (!G) return;
		let e = (e) => {
			let t = e.target;
			t instanceof Node && (Me.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Y}"]`) || Be());
		};
		return document.addEventListener("mousedown", e), document.addEventListener("touchstart", e), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("touchstart", e);
		};
	}, [
		Be,
		G,
		Y
	]), p(() => {
		if (!G || Ae < 0 || Ae >= Oe.length) return;
		let e = Oe[Ae], t = Pe.current.get(e.value);
		t && typeof t.scrollIntoView == "function" && t.scrollIntoView({ block: "nearest" });
	}, [
		Ae,
		Oe,
		G
	]);
	let { dataTheme: Ue } = wd({
		variant: t,
		hasError: !R && !!pe
	}), We = d((t) => {
		let n = Mf(Af(t), e);
		Se || W(n), ye(Pf(le, n));
	}, [
		Se,
		e,
		le,
		ye
	]), Ge = d((e) => {
		if (e && !Te.get(e)?.disabled) {
			if (J.has(e)) {
				We(we.filter((t) => t !== e));
				return;
			}
			We([...we, e]);
		}
	}, [
		We,
		Te,
		J,
		we
	]), Ke = d((e) => {
		J.has(e) && We(we.filter((t) => t !== e));
	}, [
		We,
		J,
		we
	]), qe = d(() => {
		we.length !== 0 && We(we.slice(0, -1));
	}, [We, we]), X = d(() => {
		if (ke.length === 0) return;
		let e = new Set(we);
		ke.forEach((t) => {
			e.add(t);
		}), We([...e]);
	}, [
		We,
		ke,
		we
	]), Je = d(() => {
		We([]);
	}, [We]), Ye = d((e) => {
		if (Oe.length === 0) return;
		let t = Oe.map((e, t) => e.disabled ? -1 : t).filter((e) => e >= 0);
		if (t.length === 0) return;
		let n = t.indexOf(Ae), r = 0;
		r = n < 0 ? e === 1 ? 0 : t.length - 1 : (n + e + t.length) % t.length;
		let i = t[r];
		q(i);
	}, [Ae, Oe]), Xe = (e) => {
		if (!I) {
			if (e.key === "Enter" || e.key === " ") {
				e.preventDefault(), G || He();
				return;
			}
			if (e.key === "ArrowDown") {
				e.preventDefault(), G || He("none"), Ye(1);
				return;
			}
			if (e.key === "ArrowUp") {
				e.preventDefault(), G || He("none"), Ye(-1);
				return;
			}
			e.key === "Backspace" && !G && we.length > 0 && (e.preventDefault(), qe()), e.key === "Escape" && G && (e.preventDefault(), Be());
		}
	}, Ze = (e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault(), Ye(1);
			return;
		}
		if (e.key === "ArrowUp") {
			e.preventDefault(), Ye(-1);
			return;
		}
		if ((e.key === "Enter" || e.key === " ") && Ae >= 0) {
			e.preventDefault();
			let t = Oe[Ae];
			t.disabled || Ge(t.value);
			return;
		}
		if (e.key === "Backspace" && te.length === 0) {
			qe();
			return;
		}
		e.key === "Escape" && (e.preventDefault(), Be(), je.current?.focus());
	}, Qe = (e) => {
		let t = e.relatedTarget;
		t instanceof Node && Me.current?.contains(t) || t instanceof Element && t.closest(`[data-dropdown-menu-owner="${Y}"]`) || (Be(), be(Nf(le)));
	}, $e = n ?? le ?? "", et = yd($e), { hideLabel: Z } = Ll(), tt = r ?? Z ?? !1, nt = !tt && !(typeof n == "string" && n.length === 0), rt = O === "compact", it = Ff(O), at = Rr({
		hideLabel: tt,
		isCompact: rt,
		withLabelDefaultClassName: kf.layout.wrapperSpacing,
		hiddenLabelDefaultClassName: kf.layout.wrapperHiddenSpacing,
		withLabelCompactClassName: kf.layout.wrapperSpacingCompact,
		hiddenLabelCompactClassName: kf.layout.wrapperHiddenSpacingCompact
	}), ot = rt ? kf.layout.compactLabelOffset : kf.layout.labelOffset, st = typeof P == "string" && P.length > 0, ct = we.length > 0, lt = I, ut = G && !lt, dt = ge || ct || st, ft = pe ? kf.wrapper.error : !lt && (ct || ge) ? kf.wrapper.raised : kf.wrapper.neutral, pt = Ir({
		hasError: !!pe,
		isRaised: dt,
		isActiveTone: ct || ge || ut,
		isDisabled: lt,
		tones: kf.label.tone
	}), mt = Rr({
		hideLabel: tt,
		isCompact: rt,
		withLabelDefaultClassName: kf.control.spacing,
		hiddenLabelDefaultClassName: kf.control.hiddenSpacing,
		withLabelCompactClassName: kf.control.compactSpacing,
		hiddenLabelCompactClassName: kf.control.compactHiddenSpacing
	}), ht = Lr({
		baseClassName: kf.label.base,
		horizontalClassName: ot,
		labelClassName: u,
		isCompact: rt,
		isRaised: dt,
		toneClassName: pt,
		focusToneClassName: pe ? void 0 : kf.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), gt = Lr({
		baseClassName: kf.label.base,
		horizontalClassName: ot,
		labelClassName: u,
		isCompact: rt,
		isRaised: !0,
		toneClassName: pt,
		focusToneClassName: pe ? void 0 : kf.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), _t = Q(kf.wrapper.base, kf.wrapper.gap, at, ft, ut ? "border-[var(--pc-color-text)] outline-2 outline-[var(--pc-color-text)]" : void 0, lt ? "border-[var(--pc-color-border)] outline-[var(--pc-color-border)]" : void 0, l), vt = Q(kf.control.base, rt ? "min-h-[3rem]" : "min-h-[3.25rem]", mt, I ? kf.control.disabled : kf.control.interactive), yt, bt;
	Ee.length > 0 && (bt = "content-start items-start", yt = rt ? "pt-0" : "pt-1.5");
	let xt = Q(kf.chips.container, bt, yt), St = Q(rt ? "text-xs" : void 0, f), Ct = pt, wt = tt && typeof $e == "string" && $e.length > 0 ? $e : void 0, Tt = xe?.required?.value ?? D, Et = () => {
		if (!I) {
			if (G) {
				Be();
				return;
			}
			He();
		}
	}, Dt = (e) => {
		let t = e.target;
		t instanceof Node && Me.current?.contains(t) && Et();
	}, Ot = Q(kf.adornment.base, Ct), kt = me !== void 0 || pe !== void 0, At = kt ? !1 : k !== !1;
	if (R) {
		let e = kt ? /* @__PURE__ */ C(Cd, {
			compact: rt,
			helper: me,
			error: pe,
			reserveSpace: !1
		}) : void 0, t = rt ? "h-5" : "h-6";
		return /* @__PURE__ */ C(xd, {
			baseClassName: kf.container,
			containerClassName: c,
			dataTheme: Ue,
			styles: kf.message,
			messageClassName: St,
			helper: e,
			reserveSpace: At,
			children: /* @__PURE__ */ w("div", {
				className: _t,
				"data-skeleton": "true",
				"data-slot": "multiselect-skeleton-shell",
				children: [
					/* @__PURE__ */ C("div", {
						className: Q(kf.control.base, rt ? "min-h-[3rem]" : "min-h-[3.25rem]", rt ? "px-0" : void 0, mt),
						children: /* @__PURE__ */ w("div", {
							"data-theme": "neutral",
							className: xt,
							children: [/* @__PURE__ */ C(cd, { className: Q(t, "w-20 rounded-full") }), /* @__PURE__ */ C(cd, { className: Q(t, "w-16 rounded-full") })]
						})
					}),
					/* @__PURE__ */ C("div", {
						className: Ot,
						children: /* @__PURE__ */ C(cd, { className: "h-4 w-4 rounded-full" })
					}),
					/* @__PURE__ */ C(Sd, {
						showLabel: nt,
						labelClassName: gt,
						compact: rt
					})
				]
			})
		});
	}
	return /* @__PURE__ */ C(xd, {
		baseClassName: kf.container,
		containerClassName: c,
		belowFieldContent: a,
		belowFieldContentInheritsTheme: o,
		dataTheme: Ue,
		styles: kf.message,
		messageClassName: St,
		error: pe,
		helper: me,
		reserveSpace: k !== !1,
		children: /* @__PURE__ */ w("div", {
			ref: Ie,
			className: _t,
			onBlurCapture: Qe,
			onClick: Dt,
			children: [
				/* @__PURE__ */ C("div", {
					id: Y,
					ref: Fe,
					role: "combobox",
					tabIndex: I ? -1 : 0,
					"aria-controls": Re,
					"aria-expanded": ut,
					"aria-haspopup": "listbox",
					"aria-invalid": pe ? !0 : void 0,
					"aria-disabled": I ? !0 : void 0,
					"aria-label": wt,
					"aria-labelledby": nt ? ze : void 0,
					"aria-required": Tt ? !0 : void 0,
					className: vt,
					onKeyDown: Xe,
					"data-name": le,
					children: /* @__PURE__ */ C("div", {
						"data-theme": "neutral",
						className: xt,
						children: Ee.length > 0 ? Ee.map((e) => {
							let t = jf(e.label).trim() || e.value;
							return /* @__PURE__ */ w(Df, {
								as: "button",
								type: "button",
								"data-pc-multiselect-chip": "true",
								className: kf.chips.chip,
								theme: "neutral",
								size: it,
								style: { paddingInline: "0.625rem" },
								disabled: I || e.disabled,
								onClick: (t) => {
									t.preventDefault(), t.stopPropagation(), Ke(e.value);
								},
								"aria-label": `Remove ${t}`,
								children: [/* @__PURE__ */ C("span", {
									className: kf.chips.chipLabel,
									children: t
								}), /* @__PURE__ */ C("span", {
									className: kf.chips.buttonIcon,
									children: /* @__PURE__ */ C(qu, {})
								})]
							}, e.value);
						}) : /* @__PURE__ */ C("span", {
							className: kf.chips.placeholder,
							children: P
						})
					})
				}),
				/* @__PURE__ */ C("div", {
					className: Ot,
					children: /* @__PURE__ */ C("svg", {
						"aria-hidden": "true",
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: Br({ isOpen: ut }),
						children: /* @__PURE__ */ C("path", {
							d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
							stroke: "currentColor",
							strokeWidth: "1.5",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					})
				}),
				nt && /* @__PURE__ */ C("span", {
					id: ze,
					className: ht,
					title: et,
					children: $e
				}),
				/* @__PURE__ */ C(di, {
					options: [],
					isOpen: G && !I,
					align: "start",
					widthMode: "anchor",
					lockPlacementWhileOpen: !0,
					menuRole: "dialog",
					labelledBy: Y,
					anchorRef: Me,
					usePortal: !0,
					className: Q(kf.dropdown.menu, ie === "above" ? kf.dropdown.menuAbove : kf.dropdown.menuBelow),
					renderContent: () => /* @__PURE__ */ w("div", {
						className: kf.dropdown.content,
						children: [
							/* @__PURE__ */ C(mi, {
								ref: Ne,
								value: te,
								onChange: (e) => {
									ne(e), q(-1);
								},
								onKeyDown: Ze,
								placeholder: F,
								ariaLabel: "Search options"
							}),
							/* @__PURE__ */ C("div", {
								className: kf.dropdown.actions,
								onMouseDown: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								onTouchStart: (e) => {
									e.preventDefault(), e.stopPropagation();
								},
								children: /* @__PURE__ */ w("div", {
									className: "flex items-center gap-1",
									children: [/* @__PURE__ */ C(un, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: X,
										disabled: ke.length === 0,
										label: "Select all"
									}), /* @__PURE__ */ C(un, {
										type: "button",
										variant: "neutral",
										size: "sm",
										onClick: Je,
										disabled: we.length === 0,
										label: "Deselect all"
									})]
								})
							}),
							/* @__PURE__ */ C("ul", {
								id: Re,
								role: "listbox",
								"aria-multiselectable": "true",
								className: kf.dropdown.list,
								style: { maxHeight: `${String(oe)}px` },
								children: Oe.length === 0 ? /* @__PURE__ */ C("li", {
									className: kf.dropdown.empty,
									children: e.length === 0 ? ee : L
								}) : Oe.map((e, t) => {
									let n = J.has(e.value), r = Ae === t, i = e.disabled === !0;
									return /* @__PURE__ */ C(Gr, {
										ref: (t) => {
											if (t) {
												Pe.current.set(e.value, t);
												return;
											}
											Pe.current.delete(e.value);
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
										trailing: /* @__PURE__ */ C("span", {
											className: Q("shrink-0 text-[var(--pc-color-text)] transition-opacity", n ? "opacity-100" : "opacity-0"),
											children: /* @__PURE__ */ C(Uu, {})
										}),
										onMouseEnter: () => {
											q(t);
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
Lf.displayName = "MultiSelect";
//#endregion
//#region ../ui/src/lib/SearchSelect.tsx
var Rf = {
	container: `${Su.container} w-full min-w-0`,
	layout: {
		labelOffset: "left-0",
		compactLabelOffset: "left-0",
		wrapperSpacing: ju,
		wrapperSpacingCompact: Mu,
		wrapperHiddenSpacing: Nu,
		wrapperHiddenSpacingCompact: Pu
	},
	wrapper: {
		base: `${Ou} group min-w-0 max-w-full`,
		frame: Au,
		gap: Eu,
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
	inner: Tu,
	control: {
		base: [
			"peer flex w-full min-w-0 flex-1 items-center overflow-hidden bg-transparent px-0 outline-0",
			Du.typography,
			"cursor-pointer text-left"
		].join(" "),
		inputBase: Iu,
		spacing: Du.spacing.select,
		hiddenSpacing: Du.spacing.hiddenSelect,
		compactSpacing: Du.spacing.selectCompact,
		compactHiddenSpacing: Du.spacing.hiddenSelectCompact,
		disabled: "cursor-not-allowed pointer-events-none text-[var(--pc-color-depth-5)] opacity-70"
	},
	value: {
		base: "block min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap text-[var(--pc-color-text)]",
		placeholder: "text-[var(--pc-color-depth-5)]"
	},
	adornment: {
		base: wu.base,
		trailing: "text-[var(--pc-color-text-muted)]",
		disabled: "text-[var(--pc-color-depth-5)]"
	},
	label: {
		base: `${Fu} select-none`,
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
		error: Cu.error,
		helper: Cu.helper
	}
}, zf = (e) => e?.trim() ?? "", Bf = c(function({ options: e, value: t, onChange: n, variant: r, label: i, hideLabel: a = !1, helperText: o, error: s, containerClassName: c, className: l, labelClassName: u, messageClassName: f, required: h = !1, density: g = "default", reserveMessageSpace: v = !0, id: x, name: T, placeholder: E = "Select a value", searchPlaceholder: D = "Search values", disabled: O = !1, emptyMessage: k = "No values are available.", noMatchesMessage: A = "No values match your search.", allowCustomValue: j = !1 }, M) {
	let N = m(), P = x ?? N, F = `${P}-label`, I = `${P}-listbox`, ee = y(null), L = y(null), R = y(null), [z, B] = b(!1), [V, H] = b(""), [U, W] = b(!1), G = zf(t), K = _(() => e.find((e) => e.value === G) ?? null, [e, G]), te = Ed(U ? V : ""), ne = _(() => Od(e, te, (e) => [
		e.value,
		e.searchText,
		e.label,
		e.description
	]), [te, e]), re = _(() => e.some((e) => e.value.trim().toLowerCase() === te), [te, e]), q = j ? V.trim() : "", ie = j && q.length > 0 && !re, ae = !!s, { dataTheme: oe } = wd({
		variant: r,
		hasError: ae
	});
	p(() => {
		if (!z || j) return;
		let e = window.requestAnimationFrame(() => {
			ee.current?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(e);
		};
	}, [j, z]);
	let se = d((e) => {
		if (L.current = e, typeof M == "function") {
			M(e);
			return;
		}
		M && (M.current = e);
	}, [M]), ce = d((e) => {
		R.current = e;
	}, []), le = d(() => {
		B(!1), H(""), W(!1);
	}, []), ue = d((e) => {
		j && (H(e), W(!1)), n?.(e), le();
	}, [
		j,
		le,
		n
	]), de = d((e) => {
		(e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(), B(!0));
	}, []), fe = d((e) => {
		if (O) return;
		let t = L.current;
		if (!t) return;
		let n = e.target;
		n && t.contains(n) || (e.preventDefault(), t.focus(), z || B(!0));
	}, [O, z]), pe = d((e) => {
		if (e.key === "ArrowDown") {
			e.preventDefault(), B(!0);
			return;
		}
		e.key === "Enter" && (e.preventDefault(), ie && q && ue(q));
	}, [
		ie,
		ue,
		q
	]), me = d((e) => {
		if (e.key !== "Enter") return;
		if (e.preventDefault(), ie && q) {
			ue(q);
			return;
		}
		let t = ne.find((e) => !e.disabled);
		t && ue(t.value);
	}, [
		ie,
		ue,
		q,
		ne
	]), he = G.length > 0, ge = K !== null || he, _e = g === "compact", ve = ge || z, ye = a ? E : "", be = a ? E : void 0;
	K ? (ye = K.label, be = yd(K.label)) : he && (ye = G, be = G);
	let xe = Rf.wrapper.neutral;
	ae ? xe = Rf.wrapper.error : ve && !O && (xe = Rf.wrapper.raised);
	let Se = Rf.layout.wrapperSpacing;
	a ? Se = _e ? Rf.layout.wrapperHiddenSpacingCompact : Rf.layout.wrapperHiddenSpacing : _e && (Se = Rf.layout.wrapperSpacingCompact);
	let Ce = Rr({
		hideLabel: a,
		isCompact: _e,
		withLabelDefaultClassName: Rf.control.spacing,
		hiddenLabelDefaultClassName: Rf.control.hiddenSpacing,
		withLabelCompactClassName: Rf.control.compactSpacing,
		hiddenLabelCompactClassName: Rf.control.compactHiddenSpacing
	}), we = ge || z, J = Ir({
		hasError: ae,
		isRaised: we,
		isActiveTone: we,
		isDisabled: O,
		tones: Rf.label.tone
	}), Te = Lr({
		baseClassName: Rf.label.base,
		horizontalClassName: _e ? Rf.layout.compactLabelOffset : Rf.layout.labelOffset,
		labelClassName: u,
		isCompact: _e,
		isRaised: we,
		toneClassName: J,
		focusToneClassName: ae ? void 0 : Rf.label.focusToneRaised,
		defaultFocusRaiseClassName: "",
		compactFocusRaiseClassName: ""
	}), Ee = Ad(i, "Search values"), De = Q(Rf.value.base, !ge && a ? Rf.value.placeholder : void 0), Oe = Q(Rf.wrapper.base, Rf.wrapper.gap, Rf.wrapper.frame, Se, xe, l), ke = Q(Rf.control.base, _e ? "min-h-[3rem]" : "min-h-[3.25rem]", Ce, O ? Rf.control.disabled : void 0), Ae = Q(Rf.control.inputBase, _e ? "min-h-[3rem]" : "min-h-[3.25rem]", Ce, O ? Rf.control.disabled : void 0), je = Q(Rf.adornment.base, Rf.adornment.trailing, O ? Rf.adornment.disabled : void 0), Me = te ? A : k, Ne = !a && i ? /* @__PURE__ */ C("span", {
		id: F,
		className: Te,
		title: yd(i),
		children: i
	}) : null, Pe = /* @__PURE__ */ C("svg", {
		"aria-hidden": "true",
		width: "16",
		height: "16",
		viewBox: "0 0 16 16",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		className: Br({
			isOpen: z,
			spinOnGroupFocus: j
		}),
		children: /* @__PURE__ */ C("path", {
			d: "M12.6666 5.6665L7.99992 10.3332L3.33325 5.6665",
			stroke: "currentColor",
			strokeWidth: "1.5",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})
	});
	return /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ w(xd, {
		baseClassName: Rf.container,
		containerClassName: c,
		styles: Rf.message,
		error: s,
		helper: o,
		messageClassName: f,
		reserveSpace: v,
		dataTheme: oe,
		children: [a && i ? /* @__PURE__ */ C("span", {
			id: F,
			className: "sr-only",
			children: i
		}) : null, j ? /* @__PURE__ */ w("label", {
			htmlFor: P,
			className: Oe,
			ref: ce,
			children: [/* @__PURE__ */ w("div", {
				className: Rf.inner,
				children: [/* @__PURE__ */ C("input", {
					ref: (e) => {
						se(e);
					},
					id: P,
					name: T,
					type: "text",
					autoComplete: "off",
					role: "combobox",
					"aria-expanded": z,
					"aria-controls": I,
					"aria-haspopup": "listbox",
					"aria-labelledby": i ? F : void 0,
					"aria-required": h,
					className: Ae,
					disabled: O,
					value: z && U ? V : G,
					placeholder: a ? E : void 0,
					onFocus: () => {
						B(!0);
					},
					onChange: (e) => {
						let t = e.currentTarget.value;
						W(!0), H(t), n?.(t), z || B(!0);
					},
					onKeyDown: pe
				}), Ne]
			}), /* @__PURE__ */ C("span", {
				className: je,
				children: Pe
			})]
		}) : /* @__PURE__ */ w("div", {
			className: Q(Oe, "cursor-pointer"),
			onMouseDown: fe,
			ref: ce,
			children: [/* @__PURE__ */ w("div", {
				className: Rf.inner,
				children: [/* @__PURE__ */ C("button", {
					ref: (e) => {
						se(e);
					},
					id: P,
					name: T,
					type: "button",
					role: "combobox",
					"aria-expanded": z,
					"aria-controls": I,
					"aria-haspopup": "listbox",
					"aria-labelledby": i ? F : void 0,
					"aria-required": h,
					className: ke,
					disabled: O,
					onClick: () => {
						if (z) {
							le();
							return;
						}
						B(!0);
					},
					onKeyDown: de,
					children: /* @__PURE__ */ C("span", {
						className: De,
						title: be,
						children: ye
					})
				}), Ne]
			}), /* @__PURE__ */ C("span", {
				className: je,
				children: Pe
			})]
		})]
	}), /* @__PURE__ */ C(di, {
		anchorRef: R,
		isOpen: z,
		onRequestClose: le,
		usePortal: !0,
		widthMode: "anchor",
		menuRole: "listbox",
		labelledBy: i ? F : void 0,
		renderContent: () => /* @__PURE__ */ w("div", {
			className: Rf.dropdown.content,
			children: [!j && /* @__PURE__ */ C(mi, {
				ref: ee,
				value: V,
				onChange: (e) => {
					W(!0), H(e);
				},
				onKeyDown: me,
				placeholder: D,
				ariaLabel: Ee
			}), /* @__PURE__ */ w("div", {
				id: I,
				className: Rf.dropdown.list,
				children: [ne.length > 0 ? ne.map((e) => {
					let t = e.value === G, n = t ? /* @__PURE__ */ C("span", {
						className: Rf.dropdown.optionSelectedIcon,
						children: /* @__PURE__ */ C(Uu, {})
					}) : null;
					return /* @__PURE__ */ C(Gr, {
						role: "option",
						ariaSelected: t,
						label: e.label,
						description: e.description,
						selected: t,
						disabled: e.disabled,
						trailing: n,
						onClick: () => {
							ue(e.value);
						}
					}, e.value);
				}) : /* @__PURE__ */ C("div", {
					className: Rf.dropdown.empty,
					children: Me
				}), ie && q && /* @__PURE__ */ C(Gr, {
					role: "option",
					ariaSelected: G === q,
					label: /* @__PURE__ */ w(S, { children: [
						"Use \"",
						q,
						"\""
					] }),
					onClick: () => {
						ue(q);
					}
				})]
			})]
		})
	})] });
});
Bf.displayName = "SearchSelect";
//#endregion
//#region ../ui/src/lib/Toggle.tsx
var Vf = new Set([
	"true",
	"1",
	"yes",
	"y",
	"on"
]), Hf = new Set([
	"false",
	"0",
	"no",
	"n",
	"off",
	""
]), Uf = (e) => {
	if (typeof e == "boolean") return e;
	if (typeof e == "number") return Number.isNaN(e) ? void 0 : e !== 0;
	if (typeof e == "string") {
		let t = e.trim().toLowerCase();
		return Vf.has(t) ? !0 : Hf.has(t) ? !1 : void 0;
	}
}, Wf = {
	container: Su.container,
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
		error: Cu.error,
		helper: Cu.helper
	},
	srOnly: "sr-only"
}, Gf = c(function({ variant: e, label: t, hideLabel: n, helperText: r, belowFieldContent: i, belowFieldContentInheritsTheme: a = !0, error: o, density: s = "default", containerClassName: c, className: l, inputClassName: u, labelClassName: f, messageClassName: m, reserveMessageSpace: h, field: g, meta: v, form: x, innerRef: S, validation: T, onChange: E, onBlur: D, required: O, checkedIcon: k, skeleton: A = !1, id: j, name: M, value: N, defaultValue: P, checked: F, defaultChecked: I, disabled: ee, ...L }, R) {
	let [z, B] = b(), V = o ?? z, H = F ?? N, U = I ?? P, W = s === "compact", G = Q(W ? "text-xs" : void 0, m), { inputId: K, resolvedName: te, handleChange: ne, handleBlur: re, errorContent: q, helperContent: ie, mergedRef: ae, sharedProps: oe, resolvedValue: se } = Dl({
		forwardedRef: R,
		field: g,
		meta: v,
		form: x,
		innerRef: S,
		id: j,
		name: M,
		value: H,
		defaultValue: U,
		explicitError: V,
		helperText: r,
		onChange: E,
		onBlur: D
	}), { dataTheme: ce } = wd({
		variant: e,
		hasError: !A && !!q
	}), le = _(() => Uf(se ?? H), [se, H]), ue = _(() => Uf(U), [U]), de = le ?? ue ?? !1, fe = d((e) => !!e.currentTarget?.checked, []);
	p(() => {
		if (!x?.setFieldValue || !te) return;
		let e = Uf(se);
		typeof e == "boolean" && e !== se && x.setFieldValue(te, e, !1);
	}, [
		x,
		te,
		se
	]);
	let pe = d((e) => {
		B(e);
	}, [B]), { onChange: me, onBlur: he, normalizedValidation: ge } = Ol({
		value: de,
		required: O,
		validation: T,
		metaTouched: v?.touched,
		submitCount: x?.submitCount,
		resolvedName: te,
		setFieldError: x?.setFieldError,
		handleChange: ne,
		handleBlur: re,
		setManagedError: pe,
		getValueFromChangeEvent: fe
	}), _e = {
		...L,
		...oe
	};
	delete _e.value, delete _e.defaultValue;
	let ve = typeof N == "string" ? N : "true";
	_e.type = "checkbox", _e.value = ve, _e.disabled = ee, typeof le == "boolean" ? _e.checked = le : typeof ue == "boolean" && (_e.defaultChecked = ue), _e.onChange = me, _e.onBlur = he, (ge?.required?.value ?? O) && (_e.required = !0, _e["aria-required"] = !0);
	let { hideLabel: ye } = Ll(), be = t ?? te ?? "", xe = yd(be), Se = n ?? ye ?? !1;
	Se && typeof be == "string" && be.length > 0 && _e["aria-label"] === void 0 && _e["aria-labelledby"] === void 0 && (_e["aria-label"] = be);
	let Ce = Q(Wf.input, u), we = y(null), J = d((e) => {
		we.current = e, ae(e);
	}, [ae]);
	_e.className = Ce, _e.ref = J, _e.id = K;
	let Te = ee === !0, Ee = d((e) => {
		if (Te || e.button !== 0) return;
		e.preventDefault();
		let t = we.current;
		if (t) try {
			t.focus({ preventScroll: !0 });
		} catch {
			t.focus();
		}
	}, [Te]), De = !Se && !(typeof be == "string" && be.length === 0), Oe = q ? Wf.labelText.error : Te ? Wf.labelText.disabled : Wf.labelText.default, ke = Q(Wf.labelText.base, Oe, W ? "text-sm" : void 0, f), Ae = Te ? Wf.focusRing.disabled : q ? Wf.focusRing.error : Wf.focusRing.default, je = Te ? Wf.track.disabled : de ? Wf.track.checked : Wf.track.unchecked, Me = Q(Wf.track.base, Wf.focusRing.base, Ae, je, W ? Wf.track.compact : void 0, l), Ne = de ? W ? Wf.thumb.checkedCompact : Wf.thumb.checked : Wf.thumb.unchecked, Pe = Q(Wf.thumb.base, Ne, W ? Wf.thumb.compact : void 0, Te ? Wf.thumb.disabled : void 0), Fe = _(() => k === !0 ? /* @__PURE__ */ C(Uu, { strokeWidth: 2.2 }) : k, [k]), Ie = Fe !== void 0, Le = Q(Wf.checkedIcon.base, W ? Wf.checkedIcon.compact : void 0, Te ? Wf.checkedIcon.disabled : Wf.checkedIcon.enabled, de ? Wf.checkedIcon.visible : Wf.checkedIcon.hidden), Y = ie !== void 0 || q !== void 0, Re = Y ? !1 : h !== !1;
	if (A) {
		let e = Y ? /* @__PURE__ */ C(Cd, {
			compact: W,
			helper: ie,
			error: q,
			reserveSpace: !1
		}) : void 0, t = Q(Wf.track.base, Wf.track.unchecked, W ? Wf.track.compact : void 0, l), n = Q(Wf.thumb.base, Wf.thumb.unchecked, W ? Wf.thumb.compact : void 0);
		return /* @__PURE__ */ C(xd, {
			baseClassName: Wf.container,
			containerClassName: c,
			dataTheme: ce,
			styles: Wf.message,
			messageClassName: G,
			helper: e,
			reserveSpace: Re,
			children: /* @__PURE__ */ w("div", {
				className: Q(Wf.labelWrapper.base, W ? "gap-1" : void 0),
				"data-skeleton": "true",
				"data-slot": "toggle-skeleton-shell",
				children: [/* @__PURE__ */ C(Sd, {
					showLabel: De,
					labelClassName: ke,
					compact: W
				}), /* @__PURE__ */ C("span", {
					"aria-hidden": "true",
					className: t,
					children: /* @__PURE__ */ C("span", {
						"data-slot": "thumb",
						className: n,
						children: /* @__PURE__ */ C(cd, { className: "h-full w-full rounded-full [background:var(--pc-color-depth-4)]" })
					})
				})]
			})
		});
	}
	return /* @__PURE__ */ C(xd, {
		baseClassName: Wf.container,
		containerClassName: c,
		belowFieldContent: i,
		belowFieldContentInheritsTheme: a,
		dataTheme: ce,
		styles: Wf.message,
		messageClassName: G,
		error: q,
		helper: ie,
		reserveSpace: h !== !1,
		children: /* @__PURE__ */ w("label", {
			htmlFor: K,
			onMouseDown: Ee,
			className: Q(Wf.labelWrapper.base, W ? "gap-1" : void 0, Te ? Wf.labelWrapper.disabled : Wf.labelWrapper.enabled),
			children: [
				/* @__PURE__ */ C("input", { ..._e }),
				De ? /* @__PURE__ */ C("span", {
					className: ke,
					title: xe,
					children: be
				}) : typeof be == "string" && be.length > 0 && /* @__PURE__ */ C("span", {
					className: Q(Wf.srOnly, f),
					children: be
				}),
				/* @__PURE__ */ w("span", {
					"aria-hidden": "true",
					className: Me,
					children: [Ie ? /* @__PURE__ */ C("span", {
						"data-slot": "checked-icon",
						className: Le,
						children: Fe
					}) : null, /* @__PURE__ */ C("span", {
						"data-slot": "thumb",
						className: Pe
					})]
				})
			]
		})
	});
});
Gf.displayName = "Toggle";
//#endregion
//#region ../../node_modules/formik/node_modules/deepmerge/dist/es.js
var Kf = function(e) {
	return qf(e) && !Jf(e);
};
function qf(e) {
	return !!e && typeof e == "object";
}
function Jf(e) {
	var t = Object.prototype.toString.call(e);
	return t === "[object RegExp]" || t === "[object Date]" || Xf(e);
}
var Yf = typeof Symbol == "function" && Symbol.for ? Symbol.for("react.element") : 60103;
function Xf(e) {
	return e.$$typeof === Yf;
}
function Zf(e) {
	return Array.isArray(e) ? [] : {};
}
function Qf(e, t) {
	return t.clone !== !1 && t.isMergeableObject(e) ? tp(Zf(e), e, t) : e;
}
function $f(e, t, n) {
	return e.concat(t).map(function(e) {
		return Qf(e, n);
	});
}
function ep(e, t, n) {
	var r = {};
	return n.isMergeableObject(e) && Object.keys(e).forEach(function(t) {
		r[t] = Qf(e[t], n);
	}), Object.keys(t).forEach(function(i) {
		!n.isMergeableObject(t[i]) || !e[i] ? r[i] = Qf(t[i], n) : r[i] = tp(e[i], t[i], n);
	}), r;
}
function tp(e, t, n) {
	n ||= {}, n.arrayMerge = n.arrayMerge || $f, n.isMergeableObject = n.isMergeableObject || Kf;
	var r = Array.isArray(t);
	return r === Array.isArray(e) ? r ? n.arrayMerge(e, t, n) : ep(e, t, n) : Qf(t, n);
}
tp.all = function(e, t) {
	if (!Array.isArray(e)) throw Error("first argument should be an array");
	return e.reduce(function(e, n) {
		return tp(e, n, t);
	}, {});
};
var np = tp, rp = typeof global == "object" && global && global.Object === Object && global, ip = typeof self == "object" && self && self.Object === Object && self, ap = rp || ip || Function("return this")(), op = ap.Symbol, sp = Object.prototype, cp = sp.hasOwnProperty, lp = sp.toString, up = op ? op.toStringTag : void 0;
function dp(e) {
	var t = cp.call(e, up), n = e[up];
	try {
		e[up] = void 0;
		var r = !0;
	} catch {}
	var i = lp.call(e);
	return r && (t ? e[up] = n : delete e[up]), i;
}
//#endregion
//#region ../../node_modules/lodash-es/_objectToString.js
var fp = Object.prototype.toString;
function pp(e) {
	return fp.call(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetTag.js
var mp = "[object Null]", hp = "[object Undefined]", gp = op ? op.toStringTag : void 0;
function _p(e) {
	return e == null ? e === void 0 ? hp : mp : gp && gp in Object(e) ? dp(e) : pp(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_overArg.js
function vp(e, t) {
	return function(n) {
		return e(t(n));
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_getPrototype.js
var yp = vp(Object.getPrototypeOf, Object);
//#endregion
//#region ../../node_modules/lodash-es/isObjectLike.js
function bp(e) {
	return typeof e == "object" && !!e;
}
//#endregion
//#region ../../node_modules/lodash-es/isPlainObject.js
var xp = "[object Object]", Sp = Function.prototype, Cp = Object.prototype, wp = Sp.toString, Tp = Cp.hasOwnProperty, Ep = wp.call(Object);
function Dp(e) {
	if (!bp(e) || _p(e) != xp) return !1;
	var t = yp(e);
	if (t === null) return !0;
	var n = Tp.call(t, "constructor") && t.constructor;
	return typeof n == "function" && n instanceof n && wp.call(n) == Ep;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheClear.js
function Op() {
	this.__data__ = [], this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/eq.js
function kp(e, t) {
	return e === t || e !== e && t !== t;
}
//#endregion
//#region ../../node_modules/lodash-es/_assocIndexOf.js
function Ap(e, t) {
	for (var n = e.length; n--;) if (kp(e[n][0], t)) return n;
	return -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheDelete.js
var jp = Array.prototype.splice;
function Mp(e) {
	var t = this.__data__, n = Ap(t, e);
	return n < 0 ? !1 : (n == t.length - 1 ? t.pop() : jp.call(t, n, 1), --this.size, !0);
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheGet.js
function Np(e) {
	var t = this.__data__, n = Ap(t, e);
	return n < 0 ? void 0 : t[n][1];
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheHas.js
function Pp(e) {
	return Ap(this.__data__, e) > -1;
}
//#endregion
//#region ../../node_modules/lodash-es/_listCacheSet.js
function Fp(e, t) {
	var n = this.__data__, r = Ap(n, e);
	return r < 0 ? (++this.size, n.push([e, t])) : n[r][1] = t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_ListCache.js
function Ip(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Ip.prototype.clear = Op, Ip.prototype.delete = Mp, Ip.prototype.get = Np, Ip.prototype.has = Pp, Ip.prototype.set = Fp;
//#endregion
//#region ../../node_modules/lodash-es/_stackClear.js
function Lp() {
	this.__data__ = new Ip(), this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackDelete.js
function Rp(e) {
	var t = this.__data__, n = t.delete(e);
	return this.size = t.size, n;
}
//#endregion
//#region ../../node_modules/lodash-es/_stackGet.js
function zp(e) {
	return this.__data__.get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_stackHas.js
function Bp(e) {
	return this.__data__.has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/isObject.js
function Vp(e) {
	var t = typeof e;
	return e != null && (t == "object" || t == "function");
}
//#endregion
//#region ../../node_modules/lodash-es/isFunction.js
var Hp = "[object AsyncFunction]", Up = "[object Function]", Wp = "[object GeneratorFunction]", Gp = "[object Proxy]";
function Kp(e) {
	if (!Vp(e)) return !1;
	var t = _p(e);
	return t == Up || t == Wp || t == Hp || t == Gp;
}
//#endregion
//#region ../../node_modules/lodash-es/_coreJsData.js
var qp = ap["__core-js_shared__"], Jp = function() {
	var e = /[^.]+$/.exec(qp && qp.keys && qp.keys.IE_PROTO || "");
	return e ? "Symbol(src)_1." + e : "";
}();
function Yp(e) {
	return !!Jp && Jp in e;
}
//#endregion
//#region ../../node_modules/lodash-es/_toSource.js
var Xp = Function.prototype.toString;
function Zp(e) {
	if (e != null) {
		try {
			return Xp.call(e);
		} catch {}
		try {
			return e + "";
		} catch {}
	}
	return "";
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsNative.js
var Qp = /[\\^$.*+?()[\]{}|]/g, $p = /^\[object .+?Constructor\]$/, em = Function.prototype, tm = Object.prototype, nm = em.toString, rm = tm.hasOwnProperty, im = RegExp("^" + nm.call(rm).replace(Qp, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function am(e) {
	return !Vp(e) || Yp(e) ? !1 : (Kp(e) ? im : $p).test(Zp(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getValue.js
function om(e, t) {
	return e?.[t];
}
//#endregion
//#region ../../node_modules/lodash-es/_getNative.js
function sm(e, t) {
	var n = om(e, t);
	return am(n) ? n : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_Map.js
var cm = sm(ap, "Map"), lm = sm(Object, "create");
//#endregion
//#region ../../node_modules/lodash-es/_hashClear.js
function um() {
	this.__data__ = lm ? lm(null) : {}, this.size = 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashDelete.js
function dm(e) {
	var t = this.has(e) && delete this.__data__[e];
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashGet.js
var fm = "__lodash_hash_undefined__", pm = Object.prototype.hasOwnProperty;
function mm(e) {
	var t = this.__data__;
	if (lm) {
		var n = t[e];
		return n === fm ? void 0 : n;
	}
	return pm.call(t, e) ? t[e] : void 0;
}
//#endregion
//#region ../../node_modules/lodash-es/_hashHas.js
var hm = Object.prototype.hasOwnProperty;
function gm(e) {
	var t = this.__data__;
	return lm ? t[e] !== void 0 : hm.call(t, e);
}
//#endregion
//#region ../../node_modules/lodash-es/_hashSet.js
var _m = "__lodash_hash_undefined__";
function vm(e, t) {
	var n = this.__data__;
	return this.size += +!this.has(e), n[e] = lm && t === void 0 ? _m : t, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Hash.js
function ym(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
ym.prototype.clear = um, ym.prototype.delete = dm, ym.prototype.get = mm, ym.prototype.has = gm, ym.prototype.set = vm;
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheClear.js
function bm() {
	this.size = 0, this.__data__ = {
		hash: new ym(),
		map: new (cm || Ip)(),
		string: new ym()
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_isKeyable.js
function xm(e) {
	var t = typeof e;
	return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
//#endregion
//#region ../../node_modules/lodash-es/_getMapData.js
function Sm(e, t) {
	var n = e.__data__;
	return xm(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheDelete.js
function Cm(e) {
	var t = Sm(this, e).delete(e);
	return this.size -= +!!t, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheGet.js
function wm(e) {
	return Sm(this, e).get(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheHas.js
function Tm(e) {
	return Sm(this, e).has(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_mapCacheSet.js
function Em(e, t) {
	var n = Sm(this, e), r = n.size;
	return n.set(e, t), this.size += n.size == r ? 0 : 1, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_MapCache.js
function Dm(e) {
	var t = -1, n = e == null ? 0 : e.length;
	for (this.clear(); ++t < n;) {
		var r = e[t];
		this.set(r[0], r[1]);
	}
}
Dm.prototype.clear = bm, Dm.prototype.delete = Cm, Dm.prototype.get = wm, Dm.prototype.has = Tm, Dm.prototype.set = Em;
//#endregion
//#region ../../node_modules/lodash-es/_stackSet.js
var Om = 200;
function km(e, t) {
	var n = this.__data__;
	if (n instanceof Ip) {
		var r = n.__data__;
		if (!cm || r.length < Om - 1) return r.push([e, t]), this.size = ++n.size, this;
		n = this.__data__ = new Dm(r);
	}
	return n.set(e, t), this.size = n.size, this;
}
//#endregion
//#region ../../node_modules/lodash-es/_Stack.js
function Am(e) {
	var t = this.__data__ = new Ip(e);
	this.size = t.size;
}
Am.prototype.clear = Lp, Am.prototype.delete = Rp, Am.prototype.get = zp, Am.prototype.has = Bp, Am.prototype.set = km;
//#endregion
//#region ../../node_modules/lodash-es/_arrayEach.js
function jm(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length; ++n < r && t(e[n], n, e) !== !1;);
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_defineProperty.js
var Mm = function() {
	try {
		var e = sm(Object, "defineProperty");
		return e({}, "", {}), e;
	} catch {}
}();
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignValue.js
function Nm(e, t, n) {
	t == "__proto__" && Mm ? Mm(e, t, {
		configurable: !0,
		enumerable: !0,
		value: n,
		writable: !0
	}) : e[t] = n;
}
//#endregion
//#region ../../node_modules/lodash-es/_assignValue.js
var Pm = Object.prototype.hasOwnProperty;
function Fm(e, t, n) {
	var r = e[t];
	(!(Pm.call(e, t) && kp(r, n)) || n === void 0 && !(t in e)) && Nm(e, t, n);
}
//#endregion
//#region ../../node_modules/lodash-es/_copyObject.js
function Im(e, t, n, r) {
	var i = !n;
	n ||= {};
	for (var a = -1, o = t.length; ++a < o;) {
		var s = t[a], c = r ? r(n[s], e[s], s, n, e) : void 0;
		c === void 0 && (c = e[s]), i ? Nm(n, s, c) : Fm(n, s, c);
	}
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseTimes.js
function Lm(e, t) {
	for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
	return r;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsArguments.js
var Rm = "[object Arguments]";
function zm(e) {
	return bp(e) && _p(e) == Rm;
}
//#endregion
//#region ../../node_modules/lodash-es/isArguments.js
var Bm = Object.prototype, Vm = Bm.hasOwnProperty, Hm = Bm.propertyIsEnumerable, Um = zm(function() {
	return arguments;
}()) ? zm : function(e) {
	return bp(e) && Vm.call(e, "callee") && !Hm.call(e, "callee");
}, Wm = Array.isArray;
//#endregion
//#region ../../node_modules/lodash-es/stubFalse.js
function Gm() {
	return !1;
}
//#endregion
//#region ../../node_modules/lodash-es/isBuffer.js
var Km = typeof exports == "object" && exports && !exports.nodeType && exports, qm = Km && typeof module == "object" && module && !module.nodeType && module, Jm = qm && qm.exports === Km ? ap.Buffer : void 0, Ym = (Jm ? Jm.isBuffer : void 0) || Gm, Xm = 9007199254740991, Zm = /^(?:0|[1-9]\d*)$/;
function Qm(e, t) {
	var n = typeof e;
	return t ??= Xm, !!t && (n == "number" || n != "symbol" && Zm.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
//#endregion
//#region ../../node_modules/lodash-es/isLength.js
var $m = 9007199254740991;
function eh(e) {
	return typeof e == "number" && e > -1 && e % 1 == 0 && e <= $m;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsTypedArray.js
var th = "[object Arguments]", nh = "[object Array]", rh = "[object Boolean]", ih = "[object Date]", ah = "[object Error]", oh = "[object Function]", sh = "[object Map]", ch = "[object Number]", lh = "[object Object]", uh = "[object RegExp]", dh = "[object Set]", fh = "[object String]", ph = "[object WeakMap]", mh = "[object ArrayBuffer]", hh = "[object DataView]", gh = "[object Float32Array]", _h = "[object Float64Array]", vh = "[object Int8Array]", yh = "[object Int16Array]", bh = "[object Int32Array]", xh = "[object Uint8Array]", Sh = "[object Uint8ClampedArray]", Ch = "[object Uint16Array]", wh = "[object Uint32Array]", Th = {};
Th[gh] = Th[_h] = Th[vh] = Th[yh] = Th[bh] = Th[xh] = Th[Sh] = Th[Ch] = Th[wh] = !0, Th[th] = Th[nh] = Th[mh] = Th[rh] = Th[hh] = Th[ih] = Th[ah] = Th[oh] = Th[sh] = Th[ch] = Th[lh] = Th[uh] = Th[dh] = Th[fh] = Th[ph] = !1;
function Eh(e) {
	return bp(e) && eh(e.length) && !!Th[_p(e)];
}
//#endregion
//#region ../../node_modules/lodash-es/_baseUnary.js
function Dh(e) {
	return function(t) {
		return e(t);
	};
}
//#endregion
//#region ../../node_modules/lodash-es/_nodeUtil.js
var Oh = typeof exports == "object" && exports && !exports.nodeType && exports, kh = Oh && typeof module == "object" && module && !module.nodeType && module, Ah = kh && kh.exports === Oh && rp.process, jh = function() {
	try {
		return kh && kh.require && kh.require("util").types || Ah && Ah.binding && Ah.binding("util");
	} catch {}
}(), Mh = jh && jh.isTypedArray, Nh = Mh ? Dh(Mh) : Eh, Ph = Object.prototype.hasOwnProperty;
function Fh(e, t) {
	var n = Wm(e), r = !n && Um(e), i = !n && !r && Ym(e), a = !n && !r && !i && Nh(e), o = n || r || i || a, s = o ? Lm(e.length, String) : [], c = s.length;
	for (var l in e) (t || Ph.call(e, l)) && !(o && (l == "length" || i && (l == "offset" || l == "parent") || a && (l == "buffer" || l == "byteLength" || l == "byteOffset") || Qm(l, c))) && s.push(l);
	return s;
}
//#endregion
//#region ../../node_modules/lodash-es/_isPrototype.js
var Ih = Object.prototype;
function Lh(e) {
	var t = e && e.constructor;
	return e === (typeof t == "function" && t.prototype || Ih);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeys.js
var Rh = vp(Object.keys, Object), zh = Object.prototype.hasOwnProperty;
function Bh(e) {
	if (!Lh(e)) return Rh(e);
	var t = [];
	for (var n in Object(e)) zh.call(e, n) && n != "constructor" && t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/isArrayLike.js
function Vh(e) {
	return e != null && eh(e.length) && !Kp(e);
}
//#endregion
//#region ../../node_modules/lodash-es/keys.js
function Hh(e) {
	return Vh(e) ? Fh(e) : Bh(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssign.js
function Uh(e, t) {
	return e && Im(t, Hh(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_nativeKeysIn.js
function Wh(e) {
	var t = [];
	if (e != null) for (var n in Object(e)) t.push(n);
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseKeysIn.js
var Gh = Object.prototype.hasOwnProperty;
function Kh(e) {
	if (!Vp(e)) return Wh(e);
	var t = Lh(e), n = [];
	for (var r in e) r == "constructor" && (t || !Gh.call(e, r)) || n.push(r);
	return n;
}
//#endregion
//#region ../../node_modules/lodash-es/keysIn.js
function qh(e) {
	return Vh(e) ? Fh(e, !0) : Kh(e);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseAssignIn.js
function Jh(e, t) {
	return e && Im(t, qh(t), e);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneBuffer.js
var Yh = typeof exports == "object" && exports && !exports.nodeType && exports, Xh = Yh && typeof module == "object" && module && !module.nodeType && module, Zh = Xh && Xh.exports === Yh ? ap.Buffer : void 0, Qh = Zh ? Zh.allocUnsafe : void 0;
function $h(e, t) {
	if (t) return e.slice();
	var n = e.length, r = Qh ? Qh(n) : new e.constructor(n);
	return e.copy(r), r;
}
//#endregion
//#region ../../node_modules/lodash-es/_copyArray.js
function eg(e, t) {
	var n = -1, r = e.length;
	for (t ||= Array(r); ++n < r;) t[n] = e[n];
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayFilter.js
function tg(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = 0, a = []; ++n < r;) {
		var o = e[n];
		t(o, n, e) && (a[i++] = o);
	}
	return a;
}
//#endregion
//#region ../../node_modules/lodash-es/stubArray.js
function ng() {
	return [];
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbols.js
var rg = Object.prototype.propertyIsEnumerable, ig = Object.getOwnPropertySymbols, ag = ig ? function(e) {
	return e == null ? [] : (e = Object(e), tg(ig(e), function(t) {
		return rg.call(e, t);
	}));
} : ng;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbols.js
function og(e, t) {
	return Im(e, ag(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayPush.js
function sg(e, t) {
	for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
	return e;
}
//#endregion
//#region ../../node_modules/lodash-es/_getSymbolsIn.js
var cg = Object.getOwnPropertySymbols ? function(e) {
	for (var t = []; e;) sg(t, ag(e)), e = yp(e);
	return t;
} : ng;
//#endregion
//#region ../../node_modules/lodash-es/_copySymbolsIn.js
function lg(e, t) {
	return Im(e, cg(e), t);
}
//#endregion
//#region ../../node_modules/lodash-es/_baseGetAllKeys.js
function ug(e, t, n) {
	var r = t(e);
	return Wm(e) ? r : sg(r, n(e));
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeys.js
function dg(e) {
	return ug(e, Hh, ag);
}
//#endregion
//#region ../../node_modules/lodash-es/_getAllKeysIn.js
function fg(e) {
	return ug(e, qh, cg);
}
//#endregion
//#region ../../node_modules/lodash-es/_DataView.js
var pg = sm(ap, "DataView"), mg = sm(ap, "Promise"), hg = sm(ap, "Set"), gg = sm(ap, "WeakMap"), _g = "[object Map]", vg = "[object Object]", yg = "[object Promise]", bg = "[object Set]", xg = "[object WeakMap]", Sg = "[object DataView]", Cg = Zp(pg), wg = Zp(cm), Tg = Zp(mg), Eg = Zp(hg), Dg = Zp(gg), Og = _p;
(pg && Og(new pg(/* @__PURE__ */ new ArrayBuffer(1))) != Sg || cm && Og(new cm()) != _g || mg && Og(mg.resolve()) != yg || hg && Og(new hg()) != bg || gg && Og(new gg()) != xg) && (Og = function(e) {
	var t = _p(e), n = t == vg ? e.constructor : void 0, r = n ? Zp(n) : "";
	if (r) switch (r) {
		case Cg: return Sg;
		case wg: return _g;
		case Tg: return yg;
		case Eg: return bg;
		case Dg: return xg;
	}
	return t;
});
var kg = Og, Ag = Object.prototype.hasOwnProperty;
function jg(e) {
	var t = e.length, n = new e.constructor(t);
	return t && typeof e[0] == "string" && Ag.call(e, "index") && (n.index = e.index, n.input = e.input), n;
}
//#endregion
//#region ../../node_modules/lodash-es/_Uint8Array.js
var Mg = ap.Uint8Array;
//#endregion
//#region ../../node_modules/lodash-es/_cloneArrayBuffer.js
function Ng(e) {
	var t = new e.constructor(e.byteLength);
	return new Mg(t).set(new Mg(e)), t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneDataView.js
function Pg(e, t) {
	var n = t ? Ng(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.byteLength);
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneRegExp.js
var Fg = /\w*$/;
function Ig(e) {
	var t = new e.constructor(e.source, Fg.exec(e));
	return t.lastIndex = e.lastIndex, t;
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneSymbol.js
var Lg = op ? op.prototype : void 0, Rg = Lg ? Lg.valueOf : void 0;
function zg(e) {
	return Rg ? Object(Rg.call(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_cloneTypedArray.js
function Bg(e, t) {
	var n = t ? Ng(e.buffer) : e.buffer;
	return new e.constructor(n, e.byteOffset, e.length);
}
//#endregion
//#region ../../node_modules/lodash-es/_initCloneByTag.js
var Vg = "[object Boolean]", Hg = "[object Date]", Ug = "[object Map]", Wg = "[object Number]", Gg = "[object RegExp]", Kg = "[object Set]", qg = "[object String]", Jg = "[object Symbol]", Yg = "[object ArrayBuffer]", Xg = "[object DataView]", Zg = "[object Float32Array]", Qg = "[object Float64Array]", $g = "[object Int8Array]", e_ = "[object Int16Array]", t_ = "[object Int32Array]", n_ = "[object Uint8Array]", r_ = "[object Uint8ClampedArray]", i_ = "[object Uint16Array]", a_ = "[object Uint32Array]";
function o_(e, t, n) {
	var r = e.constructor;
	switch (t) {
		case Yg: return Ng(e);
		case Vg:
		case Hg: return new r(+e);
		case Xg: return Pg(e, n);
		case Zg:
		case Qg:
		case $g:
		case e_:
		case t_:
		case n_:
		case r_:
		case i_:
		case a_: return Bg(e, n);
		case Ug: return new r();
		case Wg:
		case qg: return new r(e);
		case Gg: return Ig(e);
		case Kg: return new r();
		case Jg: return zg(e);
	}
}
//#endregion
//#region ../../node_modules/lodash-es/_baseCreate.js
var s_ = Object.create, c_ = function() {
	function e() {}
	return function(t) {
		if (!Vp(t)) return {};
		if (s_) return s_(t);
		e.prototype = t;
		var n = new e();
		return e.prototype = void 0, n;
	};
}();
//#endregion
//#region ../../node_modules/lodash-es/_initCloneObject.js
function l_(e) {
	return typeof e.constructor == "function" && !Lh(e) ? c_(yp(e)) : {};
}
//#endregion
//#region ../../node_modules/lodash-es/_baseIsMap.js
var u_ = "[object Map]";
function d_(e) {
	return bp(e) && kg(e) == u_;
}
//#endregion
//#region ../../node_modules/lodash-es/isMap.js
var f_ = jh && jh.isMap, p_ = f_ ? Dh(f_) : d_, m_ = "[object Set]";
function h_(e) {
	return bp(e) && kg(e) == m_;
}
//#endregion
//#region ../../node_modules/lodash-es/isSet.js
var g_ = jh && jh.isSet, __ = g_ ? Dh(g_) : h_, v_ = 1, y_ = 2, b_ = 4, x_ = "[object Arguments]", S_ = "[object Array]", C_ = "[object Boolean]", w_ = "[object Date]", T_ = "[object Error]", E_ = "[object Function]", D_ = "[object GeneratorFunction]", O_ = "[object Map]", k_ = "[object Number]", A_ = "[object Object]", j_ = "[object RegExp]", M_ = "[object Set]", N_ = "[object String]", P_ = "[object Symbol]", F_ = "[object WeakMap]", I_ = "[object ArrayBuffer]", L_ = "[object DataView]", R_ = "[object Float32Array]", z_ = "[object Float64Array]", B_ = "[object Int8Array]", V_ = "[object Int16Array]", H_ = "[object Int32Array]", U_ = "[object Uint8Array]", W_ = "[object Uint8ClampedArray]", G_ = "[object Uint16Array]", K_ = "[object Uint32Array]", q_ = {};
q_[x_] = q_[S_] = q_[I_] = q_[L_] = q_[C_] = q_[w_] = q_[R_] = q_[z_] = q_[B_] = q_[V_] = q_[H_] = q_[O_] = q_[k_] = q_[A_] = q_[j_] = q_[M_] = q_[N_] = q_[P_] = q_[U_] = q_[W_] = q_[G_] = q_[K_] = !0, q_[T_] = q_[E_] = q_[F_] = !1;
function J_(e, t, n, r, i, a) {
	var o, s = t & v_, c = t & y_, l = t & b_;
	if (n && (o = i ? n(e, r, i, a) : n(e)), o !== void 0) return o;
	if (!Vp(e)) return e;
	var u = Wm(e);
	if (u) {
		if (o = jg(e), !s) return eg(e, o);
	} else {
		var d = kg(e), f = d == E_ || d == D_;
		if (Ym(e)) return $h(e, s);
		if (d == A_ || d == x_ || f && !i) {
			if (o = c || f ? {} : l_(e), !s) return c ? lg(e, Jh(o, e)) : og(e, Uh(o, e));
		} else {
			if (!q_[d]) return i ? e : {};
			o = o_(e, d, s);
		}
	}
	a ||= new Am();
	var p = a.get(e);
	if (p) return p;
	a.set(e, o), __(e) ? e.forEach(function(r) {
		o.add(J_(r, t, n, r, e, a));
	}) : p_(e) && e.forEach(function(r, i) {
		o.set(i, J_(r, t, n, i, e, a));
	});
	var m = u ? void 0 : (l ? c ? fg : dg : c ? qh : Hh)(e);
	return jm(m || e, function(r, i) {
		m && (i = r, r = e[i]), Fm(o, i, J_(r, t, n, i, e, a));
	}), o;
}
//#endregion
//#region ../../node_modules/lodash-es/cloneDeep.js
var Y_ = 1, X_ = 4;
function Z_(e) {
	return J_(e, Y_ | X_);
}
//#endregion
//#region ../../node_modules/tiny-warning/dist/tiny-warning.esm.js
var Q_ = /* @__PURE__ */ F((/* @__PURE__ */ M(((e, t) => {
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
})))()), $_ = process.env.NODE_ENV === "production";
function ev(e, t) {
	if (!$_) {
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
var tv = 4;
function nv(e) {
	return J_(e, tv);
}
//#endregion
//#region ../../node_modules/lodash-es/_arrayMap.js
function rv(e, t) {
	for (var n = -1, r = e == null ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
	return i;
}
//#endregion
//#region ../../node_modules/lodash-es/isSymbol.js
var iv = "[object Symbol]";
function av(e) {
	return typeof e == "symbol" || bp(e) && _p(e) == iv;
}
//#endregion
//#region ../../node_modules/lodash-es/memoize.js
var ov = "Expected a function";
function sv(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw TypeError(ov);
	var n = function() {
		var r = arguments, i = t ? t.apply(this, r) : r[0], a = n.cache;
		if (a.has(i)) return a.get(i);
		var o = e.apply(this, r);
		return n.cache = a.set(i, o) || a, o;
	};
	return n.cache = new (sv.Cache || Dm)(), n;
}
sv.Cache = Dm;
//#endregion
//#region ../../node_modules/lodash-es/_memoizeCapped.js
var cv = 500;
function lv(e) {
	var t = sv(e, function(e) {
		return n.size === cv && n.clear(), e;
	}), n = t.cache;
	return t;
}
//#endregion
//#region ../../node_modules/lodash-es/_stringToPath.js
var uv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dv = /\\(\\)?/g, fv = lv(function(e) {
	var t = [];
	return e.charCodeAt(0) === 46 && t.push(""), e.replace(uv, function(e, n, r, i) {
		t.push(r ? i.replace(dv, "$1") : n || e);
	}), t;
}), pv = Infinity;
function mv(e) {
	if (typeof e == "string" || av(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -pv ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/_baseToString.js
var hv = Infinity, gv = op ? op.prototype : void 0, _v = gv ? gv.toString : void 0;
function vv(e) {
	if (typeof e == "string") return e;
	if (Wm(e)) return rv(e, vv) + "";
	if (av(e)) return _v ? _v.call(e) : "";
	var t = e + "";
	return t == "0" && 1 / e == -hv ? "-0" : t;
}
//#endregion
//#region ../../node_modules/lodash-es/toString.js
function yv(e) {
	return e == null ? "" : vv(e);
}
//#endregion
//#region ../../node_modules/lodash-es/toPath.js
function bv(e) {
	return Wm(e) ? rv(e, mv) : av(e) ? [e] : eg(fv(yv(e)));
}
//#endregion
//#region ../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js
var xv = /* @__PURE__ */ M(((e) => {
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
})), Sv = /* @__PURE__ */ M(((e) => {
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
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), ee(e) || x(e) === l;
		}
		function ee(e) {
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
		function U(e) {
			return x(e) === m;
		}
		function W(e) {
			return x(e) === r;
		}
		function G(e) {
			return x(e) === o;
		}
		function K(e) {
			return x(e) === a;
		}
		function te(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = ee, e.isContextConsumer = L, e.isContextProvider = R, e.isElement = z, e.isForwardRef = B, e.isFragment = V, e.isLazy = H, e.isMemo = U, e.isPortal = W, e.isProfiler = G, e.isStrictMode = K, e.isSuspense = te, e.isValidElementType = b, e.typeOf = x;
	})();
})), Cv = /* @__PURE__ */ M(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = xv() : t.exports = Sv();
}));
(/* @__PURE__ */ M(((e, t) => {
	var n = Cv(), r = {
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
function wv() {
	return wv = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, wv.apply(this, arguments);
}
function Tv(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t;
}
function Ev(e, t) {
	if (e == null) return {};
	var n = {}, r = Object.keys(e), i, a;
	for (a = 0; a < r.length; a++) i = r[a], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
	return n;
}
function Dv(e) {
	if (e === void 0) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
	return e;
}
var Ov = /* @__PURE__ */ o(void 0);
Ov.displayName = "FormikContext";
var kv = Ov.Provider;
Ov.Consumer;
function Av() {
	var e = f(Ov);
	return !e && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "Formik context is undefined, please verify you are calling useFormikContext() as child of a <Formik> component.")), e;
}
var jv = function(e) {
	return Array.isArray(e) && e.length === 0;
}, Mv = function(e) {
	return typeof e == "function";
}, Nv = function(e) {
	return typeof e == "object" && !!e;
}, Pv = function(e) {
	return String(Math.floor(Number(e))) === e;
}, Fv = function(e) {
	return Object.prototype.toString.call(e) === "[object String]";
}, Iv = function(e) {
	return n.count(e) === 0;
}, Lv = function(e) {
	return Nv(e) && Mv(e.then);
};
function Rv(e) {
	if (e ||= typeof document < "u" ? document : void 0, e === void 0) return null;
	try {
		return e.activeElement || e.body;
	} catch {
		return e.body;
	}
}
function zv(e, t, n, r) {
	r === void 0 && (r = 0);
	for (var i = bv(t); e && r < i.length;) e = e[i[r++]];
	return r !== i.length && !e || e === void 0 ? n : e;
}
function Bv(e, t, n) {
	for (var r = nv(e), i = r, a = 0, o = bv(t); a < o.length - 1; a++) {
		var s = o[a], c = zv(e, o.slice(0, a + 1));
		if (c && (Nv(c) || Array.isArray(c))) i = i[s] = nv(c);
		else {
			var l = o[a + 1];
			i = i[s] = Pv(l) && Number(l) >= 0 ? [] : {};
		}
	}
	return (a === 0 ? e : i)[o[a]] === n ? e : (n === void 0 ? delete i[o[a]] : i[o[a]] = n, a === 0 && n === void 0 && delete r[o[a]], r);
}
function Vv(e, t, n, r) {
	n === void 0 && (n = /* @__PURE__ */ new WeakMap()), r === void 0 && (r = {});
	for (var i = 0, a = Object.keys(e); i < a.length; i++) {
		var o = a[i], s = e[o];
		Nv(s) ? n.get(s) || (n.set(s, !0), r[o] = Array.isArray(s) ? [] : {}, Vv(s, t, n, r[o])) : r[o] = t;
	}
	return r;
}
function Hv(e, t) {
	switch (t.type) {
		case "SET_VALUES": return wv({}, e, { values: t.payload });
		case "SET_TOUCHED": return wv({}, e, { touched: t.payload });
		case "SET_ERRORS": return (0, Q_.default)(e.errors, t.payload) ? e : wv({}, e, { errors: t.payload });
		case "SET_STATUS": return wv({}, e, { status: t.payload });
		case "SET_ISSUBMITTING": return wv({}, e, { isSubmitting: t.payload });
		case "SET_ISVALIDATING": return wv({}, e, { isValidating: t.payload });
		case "SET_FIELD_VALUE": return wv({}, e, { values: Bv(e.values, t.payload.field, t.payload.value) });
		case "SET_FIELD_TOUCHED": return wv({}, e, { touched: Bv(e.touched, t.payload.field, t.payload.value) });
		case "SET_FIELD_ERROR": return wv({}, e, { errors: Bv(e.errors, t.payload.field, t.payload.value) });
		case "RESET_FORM": return wv({}, e, t.payload);
		case "SET_FORMIK_STATE": return t.payload(e);
		case "SUBMIT_ATTEMPT": return wv({}, e, {
			touched: Vv(e.values, !0),
			isSubmitting: !0,
			submitCount: e.submitCount + 1
		});
		case "SUBMIT_FAILURE": return wv({}, e, { isSubmitting: !1 });
		case "SUBMIT_SUCCESS": return wv({}, e, { isSubmitting: !1 });
		default: return e;
	}
}
var Uv = {}, Wv = {};
function Gv(e) {
	var t = e.validateOnChange, n = t === void 0 ? !0 : t, r = e.validateOnBlur, i = r === void 0 ? !0 : r, a = e.validateOnMount, o = a === void 0 ? !1 : a, s = e.isInitialValid, c = e.enableReinitialize, l = c === void 0 ? !1 : c, u = e.onSubmit, f = Ev(e, [
		"validateOnChange",
		"validateOnBlur",
		"validateOnMount",
		"isInitialValid",
		"enableReinitialize",
		"onSubmit"
	]), m = wv({
		validateOnChange: n,
		validateOnBlur: i,
		validateOnMount: o,
		onSubmit: u
	}, f), h = y(m.initialValues), g = y(m.initialErrors || Uv), v = y(m.initialTouched || Wv), x = y(m.initialStatus), S = y(!1), C = y({});
	process.env.NODE_ENV !== "production" && p(function() {
		s !== void 0 && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "isInitialValid has been deprecated and will be removed in future versions of Formik. Please use initialErrors or validateOnMount instead."));
	}, []), p(function() {
		return S.current = !0, function() {
			S.current = !1;
		};
	}, []);
	var w = b(0)[1], T = y({
		values: Z_(m.initialValues),
		errors: Z_(m.initialErrors) || Uv,
		touched: Z_(m.initialTouched) || Wv,
		status: Z_(m.initialStatus),
		isSubmitting: !1,
		isValidating: !1,
		submitCount: 0
	}), E = T.current, D = d(function(e) {
		var t = T.current;
		T.current = Hv(t, e), t !== T.current && w(function(e) {
			return e + 1;
		});
	}, []), O = d(function(e, t) {
		return new Promise(function(n, r) {
			var i = m.validate(e, t);
			i == null ? n(Uv) : Lv(i) ? i.then(function(e) {
				n(e || Uv);
			}, function(e) {
				process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validate />", e), r(e);
			}) : n(i);
		});
	}, [m.validate]), k = d(function(e, t) {
		var n = m.validationSchema, r = Mv(n) ? n(t) : n, i = t && r.validateAt ? r.validateAt(t, e) : Yv(e, r);
		return new Promise(function(e, t) {
			i.then(function() {
				e(Uv);
			}, function(n) {
				n.name === "ValidationError" ? e(Jv(n)) : (process.env.NODE_ENV !== "production" && console.warn("Warning: An unhandled error was caught during validation in <Formik validationSchema />", n), t(n));
			});
		});
	}, [m.validationSchema]), A = d(function(e, t) {
		return new Promise(function(n) {
			return n(C.current[e].validate(t));
		});
	}, []), j = d(function(e) {
		var t = Object.keys(C.current).filter(function(e) {
			return Mv(C.current[e].validate);
		}), n = t.length > 0 ? t.map(function(t) {
			return A(t, zv(e, t));
		}) : [Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];
		return Promise.all(n).then(function(e) {
			return e.reduce(function(e, n, r) {
				return n === "DO_NOT_DELETE_YOU_WILL_BE_FIRED" || n && (e = Bv(e, t[r], n)), e;
			}, {});
		});
	}, [A]), M = d(function(e) {
		return Promise.all([
			j(e),
			m.validationSchema ? k(e) : {},
			m.validate ? O(e) : {}
		]).then(function(e) {
			var t = e[0], n = e[1], r = e[2];
			return np.all([
				t,
				n,
				r
			], { arrayMerge: Zv });
		});
	}, [
		m.validate,
		m.validationSchema,
		j,
		O,
		k
	]), N = ty(function(e) {
		return e === void 0 && (e = E.values), D({
			type: "SET_ISVALIDATING",
			payload: !0
		}), M(e).then(function(e) {
			return S.current && (D({
				type: "SET_ISVALIDATING",
				payload: !1
			}), D({
				type: "SET_ERRORS",
				payload: e
			})), e;
		});
	});
	p(function() {
		o && S.current === !0 && (0, Q_.default)(h.current, m.initialValues) && N(h.current);
	}, [o, N]);
	var P = d(function(e) {
		var t = e && e.values ? e.values : h.current, n = e && e.errors ? e.errors : g.current ? g.current : m.initialErrors || {}, r = e && e.touched ? e.touched : v.current ? v.current : m.initialTouched || {}, i = e && e.status ? e.status : x.current ? x.current : m.initialStatus;
		h.current = t, g.current = n, v.current = r, x.current = i;
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
		if (m.onReset) {
			var o = m.onReset(E.values, ae);
			Lv(o) ? o.then(a) : a();
		} else a();
	}, [
		m.initialErrors,
		m.initialStatus,
		m.initialTouched,
		m.onReset
	]);
	p(function() {
		S.current === !0 && !(0, Q_.default)(h.current, m.initialValues) && l && (h.current = m.initialValues, P(), o && N(h.current));
	}, [
		l,
		m.initialValues,
		P,
		o,
		N
	]), p(function() {
		l && S.current === !0 && !(0, Q_.default)(g.current, m.initialErrors) && (g.current = m.initialErrors || Uv, D({
			type: "SET_ERRORS",
			payload: m.initialErrors || Uv
		}));
	}, [l, m.initialErrors]), p(function() {
		l && S.current === !0 && !(0, Q_.default)(v.current, m.initialTouched) && (v.current = m.initialTouched || Wv, D({
			type: "SET_TOUCHED",
			payload: m.initialTouched || Wv
		}));
	}, [l, m.initialTouched]), p(function() {
		l && S.current === !0 && !(0, Q_.default)(x.current, m.initialStatus) && (x.current = m.initialStatus, D({
			type: "SET_STATUS",
			payload: m.initialStatus
		}));
	}, [
		l,
		m.initialStatus,
		m.initialTouched
	]);
	var F = ty(function(e) {
		if (C.current[e] && Mv(C.current[e].validate)) {
			var t = zv(E.values, e), n = C.current[e].validate(t);
			return Lv(n) ? (D({
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
		} else if (m.validationSchema) return D({
			type: "SET_ISVALIDATING",
			payload: !0
		}), k(E.values, e).then(function(e) {
			return e;
		}).then(function(t) {
			D({
				type: "SET_FIELD_ERROR",
				payload: {
					field: e,
					value: zv(t, e)
				}
			}), D({
				type: "SET_ISVALIDATING",
				payload: !1
			});
		});
		return Promise.resolve();
	}), I = d(function(e, t) {
		var n = t.validate;
		C.current[e] = { validate: n };
	}, []), ee = d(function(e) {
		delete C.current[e];
	}, []), L = ty(function(e, t) {
		return D({
			type: "SET_TOUCHED",
			payload: e
		}), (t === void 0 ? i : t) ? N(E.values) : Promise.resolve();
	}), R = d(function(e) {
		D({
			type: "SET_ERRORS",
			payload: e
		});
	}, []), z = ty(function(e, t) {
		var r = Mv(e) ? e(E.values) : e;
		return D({
			type: "SET_VALUES",
			payload: r
		}), (t === void 0 ? n : t) ? N(r) : Promise.resolve();
	}), B = d(function(e, t) {
		D({
			type: "SET_FIELD_ERROR",
			payload: {
				field: e,
				value: t
			}
		});
	}, []), V = ty(function(e, t, r) {
		return D({
			type: "SET_FIELD_VALUE",
			payload: {
				field: e,
				value: t
			}
		}), (r === void 0 ? n : r) ? N(Bv(E.values, e, t)) : Promise.resolve();
	}), H = d(function(e, t) {
		var n = t, r = e, i;
		if (!Fv(e)) {
			e.persist && e.persist();
			var a = e.target ? e.target : e.currentTarget, o = a.type, s = a.name, c = a.id, l = a.value, u = a.checked, d = a.outerHTML, f = a.options, p = a.multiple;
			n = t || s || c, !n && process.env.NODE_ENV !== "production" && qv({
				htmlContent: d,
				documentationAnchorLink: "handlechange-e-reactchangeeventany--void",
				handlerName: "handleChange"
			}), r = /number|range/.test(o) ? (i = parseFloat(l), isNaN(i) ? "" : i) : /checkbox/.test(o) ? $v(zv(E.values, n), u, l) : f && p ? Qv(f) : l;
		}
		n && V(n, r);
	}, [V, E.values]), U = ty(function(e) {
		if (Fv(e)) return function(t) {
			return H(t, e);
		};
		H(e);
	}), W = ty(function(e, t, n) {
		return t === void 0 && (t = !0), D({
			type: "SET_FIELD_TOUCHED",
			payload: {
				field: e,
				value: t
			}
		}), (n === void 0 ? i : n) ? N(E.values) : Promise.resolve();
	}), G = d(function(e, t) {
		e.persist && e.persist();
		var n = e.target, r = n.name, i = n.id, a = n.outerHTML, o = t || r || i;
		!o && process.env.NODE_ENV !== "production" && qv({
			htmlContent: a,
			documentationAnchorLink: "handleblur-e-any--void",
			handlerName: "handleBlur"
		}), W(o, !0);
	}, [W]), K = ty(function(e) {
		if (Fv(e)) return function(t) {
			return G(t, e);
		};
		G(e);
	}), te = d(function(e) {
		Mv(e) ? D({
			type: "SET_FORMIK_STATE",
			payload: e
		}) : D({
			type: "SET_FORMIK_STATE",
			payload: function() {
				return e;
			}
		});
	}, []), ne = d(function(e) {
		D({
			type: "SET_STATUS",
			payload: e
		});
	}, []), re = d(function(e) {
		D({
			type: "SET_ISSUBMITTING",
			payload: e
		});
	}, []), q = ty(function() {
		return D({ type: "SUBMIT_ATTEMPT" }), N().then(function(e) {
			var t = e instanceof Error;
			if (!t && Object.keys(e).length === 0) {
				var n;
				try {
					if (n = oe(), n === void 0) return;
				} catch (e) {
					throw e;
				}
				return Promise.resolve(n).then(function(e) {
					return S.current && D({ type: "SUBMIT_SUCCESS" }), e;
				}).catch(function(e) {
					if (S.current) throw D({ type: "SUBMIT_FAILURE" }), e;
				});
			} else if (S.current && (D({ type: "SUBMIT_FAILURE" }), t)) throw e;
		});
	}), ie = ty(function(e) {
		if (e && e.preventDefault && Mv(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Mv(e.stopPropagation) && e.stopPropagation(), process.env.NODE_ENV !== "production" && typeof document < "u") {
			var t = Rv();
			t !== null && t instanceof HTMLButtonElement && !(t.attributes && t.attributes.getNamedItem("type")) && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "You submitted a Formik form using a button with an unspecified `type` attribute.  Most browsers default button elements to `type=\"submit\"`. If this is not a submit button, please add `type=\"button\"`."));
		}
		q().catch(function(e) {
			console.warn("Warning: An unhandled error was caught from submitForm()", e);
		});
	}), ae = {
		resetForm: P,
		validateForm: N,
		validateField: F,
		setErrors: R,
		setFieldError: B,
		setFieldTouched: W,
		setFieldValue: V,
		setStatus: ne,
		setSubmitting: re,
		setTouched: L,
		setValues: z,
		setFormikState: te,
		submitForm: q
	}, oe = ty(function() {
		return u(E.values, ae);
	}), se = ty(function(e) {
		e && e.preventDefault && Mv(e.preventDefault) && e.preventDefault(), e && e.stopPropagation && Mv(e.stopPropagation) && e.stopPropagation(), P();
	}), ce = d(function(e) {
		return {
			value: zv(E.values, e),
			error: zv(E.errors, e),
			touched: !!zv(E.touched, e),
			initialValue: zv(h.current, e),
			initialTouched: !!zv(v.current, e),
			initialError: zv(g.current, e)
		};
	}, [
		E.errors,
		E.touched,
		E.values
	]), le = d(function(e) {
		return {
			setValue: function(t, n) {
				return V(e, t, n);
			},
			setTouched: function(t, n) {
				return W(e, t, n);
			},
			setError: function(t) {
				return B(e, t);
			}
		};
	}, [
		V,
		W,
		B
	]), ue = d(function(e) {
		var t = Nv(e), n = t ? e.name : e, r = zv(E.values, n), i = {
			name: n,
			value: r,
			onChange: U,
			onBlur: K
		};
		if (t) {
			var a = e.type, o = e.value, s = e.as, c = e.multiple;
			a === "checkbox" ? o === void 0 ? i.checked = !!r : (i.checked = !!(Array.isArray(r) && ~r.indexOf(o)), i.value = o) : a === "radio" ? (i.checked = r === o, i.value = o) : s === "select" && c && (i.value = i.value || [], i.multiple = !0);
		}
		return i;
	}, [
		K,
		U,
		E.values
	]), de = _(function() {
		return !(0, Q_.default)(h.current, E.values);
	}, [h.current, E.values]), fe = _(function() {
		return s === void 0 || de ? E.errors && Object.keys(E.errors).length === 0 : s !== !1 && Mv(s) ? s(m) : s;
	}, [
		s,
		de,
		E.errors,
		m
	]);
	return wv({}, E, {
		initialValues: h.current,
		initialErrors: g.current,
		initialTouched: v.current,
		initialStatus: x.current,
		handleBlur: K,
		handleChange: U,
		handleReset: se,
		handleSubmit: ie,
		resetForm: P,
		setErrors: R,
		setFormikState: te,
		setFieldTouched: W,
		setFieldValue: V,
		setFieldError: B,
		setStatus: ne,
		setSubmitting: re,
		setTouched: L,
		setValues: z,
		submitForm: q,
		validateForm: N,
		validateField: F,
		isValid: fe,
		dirty: de,
		unregisterField: ee,
		registerField: I,
		getFieldProps: ue,
		getFieldMeta: ce,
		getFieldHelpers: le,
		validateOnBlur: i,
		validateOnChange: n,
		validateOnMount: o
	});
}
function Kv(e) {
	var t = Gv(e), r = e.component, i = e.children, a = e.render, o = e.innerRef;
	return h(o, function() {
		return t;
	}), process.env.NODE_ENV !== "production" && p(function() {
		e.render && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "<Formik render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Formik render={(props) => ...} /> with <Formik>{(props) => ...}</Formik>"));
	}, []), s(kv, { value: t }, r ? s(r, t) : a ? a(t) : i ? Mv(i) ? i(t) : Iv(i) ? null : n.only(i) : null);
}
function qv(e) {
	var t = e.htmlContent, n = e.documentationAnchorLink, r = e.handlerName;
	console.warn("Warning: Formik called `" + r + "`, but you forgot to pass an `id` or `name` attribute to your input:\n    " + t + "\n    Formik cannot determine which value to update. For more info see https://formik.org/docs/api/formik#" + n + "\n  ");
}
function Jv(e) {
	var t = {};
	if (e.inner) {
		if (e.inner.length === 0) return Bv(t, e.path, e.message);
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
			zv(t, o.path) || (t = Bv(t, o.path, o.message));
		}
	}
	return t;
}
function Yv(e, t, n, r) {
	n === void 0 && (n = !1);
	var i = Xv(e);
	return t[n ? "validateSync" : "validate"](i, {
		abortEarly: !1,
		context: r || i
	});
}
function Xv(e) {
	var t = Array.isArray(e) ? [] : {};
	for (var n in e) if (Object.prototype.hasOwnProperty.call(e, n)) {
		var r = String(n);
		Array.isArray(e[r]) === !0 ? t[r] = e[r].map(function(e) {
			return Array.isArray(e) === !0 || Dp(e) ? Xv(e) : e === "" ? void 0 : e;
		}) : Dp(e[r]) ? t[r] = Xv(e[r]) : t[r] = e[r] === "" ? void 0 : e[r];
	}
	return t;
}
function Zv(e, t, n) {
	var r = e.slice();
	return t.forEach(function(t, i) {
		r[i] === void 0 ? r[i] = n.clone !== !1 && n.isMergeableObject(t) ? np(Array.isArray(t) ? [] : {}, t, n) : t : n.isMergeableObject(t) ? r[i] = np(e[i], t, n) : e.indexOf(t) === -1 && r.push(t);
	}), r;
}
function Qv(e) {
	return Array.from(e).filter(function(e) {
		return e.selected;
	}).map(function(e) {
		return e.value;
	});
}
function $v(e, t, n) {
	if (typeof e == "boolean") return !!t;
	var r = [], i = !1, a = -1;
	if (Array.isArray(e)) r = e, a = e.indexOf(n), i = a >= 0;
	else if (!n || n == "true" || n == "false") return !!t;
	return t && n && !i ? r.concat(n) : i ? r.slice(0, a).concat(r.slice(a + 1)) : r;
}
var ey = typeof window < "u" && window.document !== void 0 && window.document.createElement !== void 0 ? g : p;
function ty(e) {
	var t = y(e);
	return ey(function() {
		t.current = e;
	}), d(function() {
		var e = [...arguments];
		return t.current.apply(void 0, e);
	}, []);
}
function ny(e) {
	var t = e.validate, n = e.name, r = e.render, i = e.children, a = e.as, o = e.component, c = e.className, l = Ev(e, [
		"validate",
		"name",
		"render",
		"children",
		"as",
		"component",
		"className"
	]), u = Ev(Av(), ["validate", "validationSchema"]);
	process.env.NODE_ENV !== "production" && p(function() {
		r && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "<Field render> has been deprecated and will be removed in future versions of Formik. Please use a child callback function instead. To get rid of this warning, replace <Field name=\"" + n + "\" render={({field, form}) => ...} /> with <Field name=\"" + n + "\">{({field, form, meta}) => ...}</Field>")), a && i && Mv(i) && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "You should not use <Field as> and <Field children> as a function in the same <Field> component; <Field as> will be ignored.")), o && i && Mv(i) && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "You should not use <Field component> and <Field children> as a function in the same <Field> component; <Field component> will be ignored.")), r && i && !Iv(i) && (process.env.NODE_ENV === "production" ? ev(!1) : ev(!1, "You should not use <Field render> and <Field children> in the same <Field> component; <Field children> will be ignored"));
	}, []);
	var d = u.registerField, f = u.unregisterField;
	p(function() {
		return d(n, { validate: t }), function() {
			f(n);
		};
	}, [
		d,
		f,
		n,
		t
	]);
	var m = u.getFieldProps(wv({ name: n }, l)), h = u.getFieldMeta(n), g = {
		field: m,
		form: u
	};
	if (r) return r(wv({}, g, { meta: h }));
	if (Mv(i)) return i(wv({}, g, { meta: h }));
	if (o) {
		if (typeof o == "string") {
			var _ = l.innerRef, v = Ev(l, ["innerRef"]);
			return s(o, wv({ ref: _ }, m, v, { className: c }), i);
		}
		return s(o, wv({
			field: m,
			form: u
		}, l, { className: c }), i);
	}
	var y = a || "input";
	if (typeof y == "string") {
		var b = l.innerRef, x = Ev(l, ["innerRef"]);
		return s(y, wv({ ref: b }, m, x, { className: c }), i);
	}
	return s(y, wv({}, m, l, { className: c }), i);
}
var ry = /* @__PURE__ */ c(function(e, t) {
	var n = e.action, r = Ev(e, ["action"]), i = n ?? "#", a = Av(), o = a.handleReset, c = a.handleSubmit;
	return s("form", wv({
		onSubmit: c,
		ref: t,
		onReset: o,
		action: i
	}, r));
});
ry.displayName = "Form";
var iy = function(e, t, n) {
	var r = cy(e), i = r[t];
	return r.splice(t, 1), r.splice(n, 0, i), r;
}, ay = function(e, t, n) {
	var r = cy(e), i = r[t];
	return r[t] = r[n], r[n] = i, r;
}, oy = function(e, t, n) {
	var r = cy(e);
	return r.splice(t, 0, n), r;
}, sy = function(e, t, n) {
	var r = cy(e);
	return r[t] = n, r;
}, cy = function(e) {
	if (!e) return [];
	if (Array.isArray(e)) return [].concat(e);
	var t = Object.keys(e).map(function(e) {
		return parseInt(e);
	}).reduce(function(e, t) {
		return t > e ? t : e;
	}, 0);
	return Array.from(wv({}, e, { length: t + 1 }));
}, ly = function(e, t) {
	var n = typeof e == "function" ? e : t;
	return function(e) {
		return Array.isArray(e) || Nv(e) ? n(cy(e)) : e;
	};
}, uy = /* @__PURE__ */ function(e) {
	Tv(t, e);
	function t(t) {
		var n = e.call(this, t) || this;
		return n.updateArrayField = function(e, t, r) {
			var i = n.props, a = i.name, o = i.formik.setFormikState;
			o(function(n) {
				var i = ly(r, e), o = ly(t, e), s = Bv(n.values, a, e(zv(n.values, a))), c = r ? i(zv(n.errors, a)) : void 0, l = t ? o(zv(n.touched, a)) : void 0;
				return jv(c) && (c = void 0), jv(l) && (l = void 0), wv({}, n, {
					values: s,
					errors: r ? Bv(n.errors, a, c) : n.errors,
					touched: t ? Bv(n.touched, a, l) : n.touched
				});
			});
		}, n.push = function(e) {
			return n.updateArrayField(function(t) {
				return [].concat(cy(t), [Z_(e)]);
			}, !1, !1);
		}, n.handlePush = function(e) {
			return function() {
				return n.push(e);
			};
		}, n.swap = function(e, t) {
			return n.updateArrayField(function(n) {
				return ay(n, e, t);
			}, !0, !0);
		}, n.handleSwap = function(e, t) {
			return function() {
				return n.swap(e, t);
			};
		}, n.move = function(e, t) {
			return n.updateArrayField(function(n) {
				return iy(n, e, t);
			}, !0, !0);
		}, n.handleMove = function(e, t) {
			return function() {
				return n.move(e, t);
			};
		}, n.insert = function(e, t) {
			return n.updateArrayField(function(n) {
				return oy(n, e, t);
			}, function(t) {
				return oy(t, e, null);
			}, function(t) {
				return oy(t, e, null);
			});
		}, n.handleInsert = function(e, t) {
			return function() {
				return n.insert(e, t);
			};
		}, n.replace = function(e, t) {
			return n.updateArrayField(function(n) {
				return sy(n, e, t);
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
		}, n.remove = n.remove.bind(Dv(n)), n.pop = n.pop.bind(Dv(n)), n;
	}
	var r = t.prototype;
	return r.componentDidUpdate = function(e) {
		this.props.validateOnChange && this.props.formik.validateOnChange && !(0, Q_.default)(zv(e.formik.values, e.name), zv(this.props.formik.values, this.props.name)) && this.props.formik.validateForm(this.props.formik.values);
	}, r.remove = function(e) {
		var t;
		return this.updateArrayField(function(n) {
			var r = n ? cy(n) : [];
			return t ||= r[e], Mv(r.splice) && r.splice(e, 1), Mv(r.every) && r.every(function(e) {
				return e === void 0;
			}) ? [] : r;
		}, !0, !0), t;
	}, r.pop = function() {
		var e;
		return this.updateArrayField(function(t) {
			var n = t.slice();
			return e ||= n && n.pop && n.pop(), n;
		}, !0, !0), e;
	}, r.render = function() {
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
		}, t = this.props, r = t.component, i = t.render, a = t.children, o = t.name, c = t.formik, l = Ev(c, ["validate", "validationSchema"]), u = wv({}, e, {
			form: l,
			name: o
		});
		return r ? s(r, u) : i ? i(u) : a ? typeof a == "function" ? a(u) : Iv(a) ? null : n.only(a) : null;
	}, t;
}(r);
uy.defaultProps = { validateOnChange: !0 };
//#endregion
//#region ../../node_modules/comma-separated-tokens/index.js
function dy(e, t) {
	let n = t || {};
	return (e[e.length - 1] === "" ? [...e, ""] : e).join((n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")).trim();
}
//#endregion
//#region ../../node_modules/estree-util-is-identifier-name/lib/index.js
var fy = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, py = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, my = {};
function hy(e, t) {
	return ((t || my).jsx ? py : fy).test(e);
}
//#endregion
//#region ../../node_modules/hast-util-whitespace/lib/index.js
var gy = /[ \t\n\f\r]/g;
function _y(e) {
	return typeof e == "object" ? e.type === "text" ? vy(e.value) : !1 : vy(e);
}
function vy(e) {
	return e.replace(gy, "") === "";
}
//#endregion
//#region ../../node_modules/property-information/lib/util/schema.js
var yy = class {
	constructor(e, t, n) {
		this.normal = t, this.property = e, n && (this.space = n);
	}
};
yy.prototype.normal = {}, yy.prototype.property = {}, yy.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/merge.js
function by(e, t) {
	let n = {}, r = {};
	for (let t of e) Object.assign(n, t.property), Object.assign(r, t.normal);
	return new yy(n, r, t);
}
//#endregion
//#region ../../node_modules/property-information/lib/normalize.js
function xy(e) {
	return e.toLowerCase();
}
//#endregion
//#region ../../node_modules/property-information/lib/util/info.js
var Sy = class {
	constructor(e, t) {
		this.attribute = t, this.property = e;
	}
};
Sy.prototype.attribute = "", Sy.prototype.booleanish = !1, Sy.prototype.boolean = !1, Sy.prototype.commaOrSpaceSeparated = !1, Sy.prototype.commaSeparated = !1, Sy.prototype.defined = !1, Sy.prototype.mustUseProperty = !1, Sy.prototype.number = !1, Sy.prototype.overloadedBoolean = !1, Sy.prototype.property = "", Sy.prototype.spaceSeparated = !1, Sy.prototype.space = void 0;
//#endregion
//#region ../../node_modules/property-information/lib/util/types.js
var Cy = /* @__PURE__ */ N({
	boolean: () => Ty,
	booleanish: () => Ey,
	commaOrSpaceSeparated: () => Ay,
	commaSeparated: () => ky,
	number: () => $,
	overloadedBoolean: () => Dy,
	spaceSeparated: () => Oy
}), wy = 0, Ty = jy(), Ey = jy(), Dy = jy(), $ = jy(), Oy = jy(), ky = jy(), Ay = jy();
function jy() {
	return 2 ** ++wy;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/defined-info.js
var My = Object.keys(Cy), Ny = class extends Sy {
	constructor(e, t, n, r) {
		let i = -1;
		if (super(e, t), Py(this, "space", r), typeof n == "number") for (; ++i < My.length;) {
			let e = My[i];
			Py(this, My[i], (n & Cy[e]) === Cy[e]);
		}
	}
};
Ny.prototype.defined = !0;
function Py(e, t, n) {
	n && (e[t] = n);
}
//#endregion
//#region ../../node_modules/property-information/lib/util/create.js
function Fy(e) {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e.properties)) {
		let a = new Ny(r, e.transform(e.attributes || {}, r), i, e.space);
		e.mustUseProperty && e.mustUseProperty.includes(r) && (a.mustUseProperty = !0), t[r] = a, n[xy(r)] = r, n[xy(a.attribute)] = r;
	}
	return new yy(t, n, e.space);
}
//#endregion
//#region ../../node_modules/property-information/lib/aria.js
var Iy = Fy({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: Ey,
		ariaAutoComplete: null,
		ariaBusy: Ey,
		ariaChecked: Ey,
		ariaColCount: $,
		ariaColIndex: $,
		ariaColSpan: $,
		ariaControls: Oy,
		ariaCurrent: null,
		ariaDescribedBy: Oy,
		ariaDetails: null,
		ariaDisabled: Ey,
		ariaDropEffect: Oy,
		ariaErrorMessage: null,
		ariaExpanded: Ey,
		ariaFlowTo: Oy,
		ariaGrabbed: Ey,
		ariaHasPopup: null,
		ariaHidden: Ey,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: Oy,
		ariaLevel: $,
		ariaLive: null,
		ariaModal: Ey,
		ariaMultiLine: Ey,
		ariaMultiSelectable: Ey,
		ariaOrientation: null,
		ariaOwns: Oy,
		ariaPlaceholder: null,
		ariaPosInSet: $,
		ariaPressed: Ey,
		ariaReadOnly: Ey,
		ariaRelevant: null,
		ariaRequired: Ey,
		ariaRoleDescription: Oy,
		ariaRowCount: $,
		ariaRowIndex: $,
		ariaRowSpan: $,
		ariaSelected: Ey,
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
function Ly(e, t) {
	return t in e ? e[t] : t;
}
//#endregion
//#region ../../node_modules/property-information/lib/util/case-insensitive-transform.js
function Ry(e, t) {
	return Ly(e, t.toLowerCase());
}
//#endregion
//#region ../../node_modules/property-information/lib/html.js
var zy = Fy({
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
		accept: ky,
		acceptCharset: Oy,
		accessKey: Oy,
		action: null,
		allow: null,
		allowFullScreen: Ty,
		allowPaymentRequest: Ty,
		allowUserMedia: Ty,
		alt: null,
		as: null,
		async: Ty,
		autoCapitalize: null,
		autoComplete: Oy,
		autoFocus: Ty,
		autoPlay: Ty,
		blocking: Oy,
		capture: null,
		charSet: null,
		checked: Ty,
		cite: null,
		className: Oy,
		cols: $,
		colSpan: null,
		content: null,
		contentEditable: Ey,
		controls: Ty,
		controlsList: Oy,
		coords: $ | ky,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: Ty,
		defer: Ty,
		dir: null,
		dirName: null,
		disabled: Ty,
		download: Dy,
		draggable: Ey,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: Ty,
		formTarget: null,
		headers: Oy,
		height: $,
		hidden: Dy,
		high: $,
		href: null,
		hrefLang: null,
		htmlFor: Oy,
		httpEquiv: Oy,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: Ty,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: Ty,
		itemId: null,
		itemProp: Oy,
		itemRef: Oy,
		itemScope: Ty,
		itemType: Oy,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: Ty,
		low: $,
		manifest: null,
		max: null,
		maxLength: $,
		media: null,
		method: null,
		min: null,
		minLength: $,
		multiple: Ty,
		muted: Ty,
		name: null,
		nonce: null,
		noModule: Ty,
		noValidate: Ty,
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
		open: Ty,
		optimum: $,
		pattern: null,
		ping: Oy,
		placeholder: null,
		playsInline: Ty,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: Ty,
		referrerPolicy: null,
		rel: Oy,
		required: Ty,
		reversed: Ty,
		rows: $,
		rowSpan: $,
		sandbox: Oy,
		scope: null,
		scoped: Ty,
		seamless: Ty,
		selected: Ty,
		shadowRootClonable: Ty,
		shadowRootDelegatesFocus: Ty,
		shadowRootMode: null,
		shape: null,
		size: $,
		sizes: null,
		slot: null,
		span: $,
		spellCheck: Ey,
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
		typeMustMatch: Ty,
		useMap: null,
		value: Ey,
		width: $,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: Oy,
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
		compact: Ty,
		declare: Ty,
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
		noResize: Ty,
		noHref: Ty,
		noShade: Ty,
		noWrap: Ty,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: $,
		rules: null,
		scheme: null,
		scrolling: Ey,
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
		disablePictureInPicture: Ty,
		disableRemotePlayback: Ty,
		prefix: null,
		property: null,
		results: $,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: Ry
}), By = Fy({
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
		about: Ay,
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
		className: Oy,
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
		download: Ty,
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
		g1: ky,
		g2: ky,
		glyphName: ky,
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
		kernelMatrix: Ay,
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
		ping: Oy,
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
		property: Ay,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: Ay,
		rev: Ay,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: Ay,
		requiredFeatures: Ay,
		requiredFonts: Ay,
		requiredFormats: Ay,
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
		strokeDashArray: Ay,
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
		systemLanguage: Ay,
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
		typeOf: Ay,
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
	transform: Ly
}), Vy = Fy({
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
}), Hy = Fy({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: Ry
}), Uy = Fy({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(e, t) {
		return "xml:" + t.slice(3).toLowerCase();
	}
}), Wy = {
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
}, Gy = /[A-Z]/g, Ky = /-[a-z]/g, qy = /^data[-\w.:]+$/i;
function Jy(e, t) {
	let n = xy(t), r = t, i = Sy;
	if (n in e.normal) return e.property[e.normal[n]];
	if (n.length > 4 && n.slice(0, 4) === "data" && qy.test(t)) {
		if (t.charAt(4) === "-") {
			let e = t.slice(5).replace(Ky, Xy);
			r = "data" + e.charAt(0).toUpperCase() + e.slice(1);
		} else {
			let e = t.slice(4);
			if (!Ky.test(e)) {
				let n = e.replace(Gy, Yy);
				n.charAt(0) !== "-" && (n = "-" + n), t = "data" + n;
			}
		}
		i = Ny;
	}
	return new i(r, t);
}
function Yy(e) {
	return "-" + e.toLowerCase();
}
function Xy(e) {
	return e.charAt(1).toUpperCase();
}
//#endregion
//#region ../../node_modules/property-information/index.js
var Zy = by([
	Iy,
	zy,
	Vy,
	Hy,
	Uy
], "html"), Qy = by([
	Iy,
	By,
	Vy,
	Hy,
	Uy
], "svg");
//#endregion
//#region ../../node_modules/space-separated-tokens/index.js
function $y(e) {
	return e.join(" ").trim();
}
//#endregion
//#region ../../node_modules/inline-style-parser/cjs/index.js
var eb = /* @__PURE__ */ M(((e, t) => {
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
})), tb = /* @__PURE__ */ M(((e) => {
	var t = e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	};
	Object.defineProperty(e, "__esModule", { value: !0 }), e.default = r;
	var n = t(eb());
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
})), nb = /* @__PURE__ */ M(((e) => {
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
})), rb = /* @__PURE__ */ M(((e, t) => {
	var n = (e && e.__importDefault || function(e) {
		return e && e.__esModule ? e : { default: e };
	})(tb()), r = nb();
	function i(e, t) {
		var i = {};
		return !e || typeof e != "string" || (0, n.default)(e, function(e, n) {
			e && n && (i[(0, r.camelCase)(e, t)] = n);
		}), i;
	}
	i.default = i, t.exports = i;
})), ib = ob("end"), ab = ob("start");
function ob(e) {
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
function sb(e) {
	let t = ab(e), n = ib(e);
	if (t && n) return {
		start: t,
		end: n
	};
}
//#endregion
//#region ../../node_modules/unist-util-stringify-position/lib/index.js
function cb(e) {
	return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ub(e.position) : "start" in e || "end" in e ? ub(e) : "line" in e || "column" in e ? lb(e) : "";
}
function lb(e) {
	return db(e && e.line) + ":" + db(e && e.column);
}
function ub(e) {
	return lb(e && e.start) + "-" + lb(e && e.end);
}
function db(e) {
	return e && typeof e == "number" ? e : 1;
}
//#endregion
//#region ../../node_modules/vfile-message/lib/index.js
var fb = class extends Error {
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
		this.ancestors = i.ancestors || void 0, this.cause = i.cause || void 0, this.column = o ? o.column : void 0, this.fatal = void 0, this.file = "", this.message = r, this.line = o ? o.line : void 0, this.name = cb(i.place) || "1:1", this.place = i.place || void 0, this.reason = this.message, this.ruleId = i.ruleId || void 0, this.source = i.source || void 0, this.stack = a && i.cause && typeof i.cause.stack == "string" ? i.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
	}
};
fb.prototype.file = "", fb.prototype.name = "", fb.prototype.reason = "", fb.prototype.message = "", fb.prototype.stack = "", fb.prototype.column = void 0, fb.prototype.line = void 0, fb.prototype.ancestors = void 0, fb.prototype.cause = void 0, fb.prototype.fatal = void 0, fb.prototype.place = void 0, fb.prototype.ruleId = void 0, fb.prototype.source = void 0;
//#endregion
//#region ../../node_modules/hast-util-to-jsx-runtime/lib/index.js
var pb = /* @__PURE__ */ F(rb(), 1), mb = {}.hasOwnProperty, hb = /* @__PURE__ */ new Map(), gb = /[A-Z]/g, _b = new Set([
	"table",
	"tbody",
	"thead",
	"tfoot",
	"tr"
]), vb = new Set(["td", "th"]), yb = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function bb(e, t) {
	if (!t || t.Fragment === void 0) throw TypeError("Expected `Fragment` in options");
	let n = t.filePath || void 0, r;
	if (t.development) {
		if (typeof t.jsxDEV != "function") throw TypeError("Expected `jsxDEV` in options when `development: true`");
		r = jb(n, t.jsxDEV);
	} else {
		if (typeof t.jsx != "function") throw TypeError("Expected `jsx` in production options");
		if (typeof t.jsxs != "function") throw TypeError("Expected `jsxs` in production options");
		r = Ab(n, t.jsx, t.jsxs);
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
		schema: t.space === "svg" ? Qy : Zy,
		stylePropertyNameCase: t.stylePropertyNameCase || "dom",
		tableCellAlignToStyle: t.tableCellAlignToStyle !== !1
	}, a = xb(i, e, void 0);
	return a && typeof a != "string" ? a : i.create(e, i.Fragment, { children: a || void 0 }, void 0);
}
function xb(e, t, n) {
	if (t.type === "element") return Sb(e, t, n);
	if (t.type === "mdxFlowExpression" || t.type === "mdxTextExpression") return Cb(e, t);
	if (t.type === "mdxJsxFlowElement" || t.type === "mdxJsxTextElement") return Tb(e, t, n);
	if (t.type === "mdxjsEsm") return wb(e, t);
	if (t.type === "root") return Eb(e, t, n);
	if (t.type === "text") return Db(e, t);
}
function Sb(e, t, n) {
	let r = e.schema, i = r;
	t.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Qy, e.schema = i), e.ancestors.push(t);
	let a = Lb(e, t.tagName, !1), o = Mb(e, t), s = Pb(e, t);
	return _b.has(t.tagName) && (s = s.filter(function(e) {
		return typeof e == "string" ? !_y(e) : !0;
	})), Ob(e, o, a, t), kb(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Cb(e, t) {
	if (t.data && t.data.estree && e.evaluater) {
		let n = t.data.estree.body[0];
		return n.type, e.evaluater.evaluateExpression(n.expression);
	}
	Rb(e, t.position);
}
function wb(e, t) {
	if (t.data && t.data.estree && e.evaluater) return e.evaluater.evaluateProgram(t.data.estree);
	Rb(e, t.position);
}
function Tb(e, t, n) {
	let r = e.schema, i = r;
	t.name === "svg" && r.space === "html" && (i = Qy, e.schema = i), e.ancestors.push(t);
	let a = t.name === null ? e.Fragment : Lb(e, t.name, !0), o = Nb(e, t), s = Pb(e, t);
	return Ob(e, o, a, t), kb(o, s), e.ancestors.pop(), e.schema = r, e.create(t, a, o, n);
}
function Eb(e, t, n) {
	let r = {};
	return kb(r, Pb(e, t)), e.create(t, e.Fragment, r, n);
}
function Db(e, t) {
	return t.value;
}
function Ob(e, t, n, r) {
	typeof n != "string" && n !== e.Fragment && e.passNode && (t.node = r);
}
function kb(e, t) {
	if (t.length > 0) {
		let n = t.length > 1 ? t : t[0];
		n && (e.children = n);
	}
}
function Ab(e, t, n) {
	return r;
	function r(e, r, i, a) {
		let o = Array.isArray(i.children) ? n : t;
		return a ? o(r, i, a) : o(r, i);
	}
}
function jb(e, t) {
	return n;
	function n(n, r, i, a) {
		let o = Array.isArray(i.children), s = ab(n);
		return t(r, i, a, o, {
			columnNumber: s ? s.column - 1 : void 0,
			fileName: e,
			lineNumber: s ? s.line : void 0
		}, void 0);
	}
}
function Mb(e, t) {
	let n = {}, r, i;
	for (i in t.properties) if (i !== "children" && mb.call(t.properties, i)) {
		let a = Fb(e, i, t.properties[i]);
		if (a) {
			let [i, o] = a;
			e.tableCellAlignToStyle && i === "align" && typeof o == "string" && vb.has(t.tagName) ? r = o : n[i] = o;
		}
	}
	if (r) {
		let t = n.style ||= {};
		t[e.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
	}
	return n;
}
function Nb(e, t) {
	let n = {};
	for (let r of t.attributes) if (r.type === "mdxJsxExpressionAttribute") if (r.data && r.data.estree && e.evaluater) {
		let t = r.data.estree.body[0];
		t.type;
		let i = t.expression;
		i.type;
		let a = i.properties[0];
		a.type, Object.assign(n, e.evaluater.evaluateExpression(a.argument));
	} else Rb(e, t.position);
	else {
		let i = r.name, a;
		if (r.value && typeof r.value == "object") if (r.value.data && r.value.data.estree && e.evaluater) {
			let t = r.value.data.estree.body[0];
			t.type, a = e.evaluater.evaluateExpression(t.expression);
		} else Rb(e, t.position);
		else a = r.value === null ? !0 : r.value;
		n[i] = a;
	}
	return n;
}
function Pb(e, t) {
	let n = [], r = -1, i = e.passKeys ? /* @__PURE__ */ new Map() : hb;
	for (; ++r < t.children.length;) {
		let a = t.children[r], o;
		if (e.passKeys) {
			let e = a.type === "element" ? a.tagName : a.type === "mdxJsxFlowElement" || a.type === "mdxJsxTextElement" ? a.name : void 0;
			if (e) {
				let t = i.get(e) || 0;
				o = e + "-" + t, i.set(e, t + 1);
			}
		}
		let s = xb(e, a, o);
		s !== void 0 && n.push(s);
	}
	return n;
}
function Fb(e, t, n) {
	let r = Jy(e.schema, t);
	if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
		if (Array.isArray(n) && (n = r.commaSeparated ? dy(n) : $y(n)), r.property === "style") {
			let t = typeof n == "object" ? n : Ib(e, String(n));
			return e.stylePropertyNameCase === "css" && (t = zb(t)), ["style", t];
		}
		return [e.elementAttributeNameCase === "react" && r.space ? Wy[r.property] || r.property : r.attribute, n];
	}
}
function Ib(e, t) {
	try {
		return (0, pb.default)(t, { reactCompat: !0 });
	} catch (t) {
		if (e.ignoreInvalidStyle) return {};
		let n = t, r = new fb("Cannot parse `style` attribute", {
			ancestors: e.ancestors,
			cause: n,
			ruleId: "style",
			source: "hast-util-to-jsx-runtime"
		});
		throw r.file = e.filePath || void 0, r.url = yb + "#cannot-parse-style-attribute", r;
	}
}
function Lb(e, t, n) {
	let r;
	if (!n) r = {
		type: "Literal",
		value: t
	};
	else if (t.includes(".")) {
		let e = t.split("."), n = -1, i;
		for (; ++n < e.length;) {
			let t = hy(e[n]) ? {
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
	} else r = hy(t) && !/^[a-z]/.test(t) ? {
		type: "Identifier",
		name: t
	} : {
		type: "Literal",
		value: t
	};
	if (r.type === "Literal") {
		let t = r.value;
		return mb.call(e.components, t) ? e.components[t] : t;
	}
	if (e.evaluater) return e.evaluater.evaluateExpression(r);
	Rb(e);
}
function Rb(e, t) {
	let n = new fb("Cannot handle MDX estrees without `createEvaluater`", {
		ancestors: e.ancestors,
		place: t,
		ruleId: "mdx-estree",
		source: "hast-util-to-jsx-runtime"
	});
	throw n.file = e.filePath || void 0, n.url = yb + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function zb(e) {
	let t = {}, n;
	for (n in e) mb.call(e, n) && (t[Bb(n)] = e[n]);
	return t;
}
function Bb(e) {
	let t = e.replace(gb, Vb);
	return t.slice(0, 3) === "ms-" && (t = "-" + t), t;
}
function Vb(e) {
	return "-" + e.toLowerCase();
}
//#endregion
//#region ../../node_modules/html-url-attributes/lib/index.js
var Hb = {
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
}, Ub = {};
function Wb(e, t) {
	let n = t || Ub;
	return Gb(e, typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, typeof n.includeHtml == "boolean" ? n.includeHtml : !0);
}
function Gb(e, t, n) {
	if (qb(e)) {
		if ("value" in e) return e.type === "html" && !n ? "" : e.value;
		if (t && "alt" in e && e.alt) return e.alt;
		if ("children" in e) return Kb(e.children, t, n);
	}
	return Array.isArray(e) ? Kb(e, t, n) : "";
}
function Kb(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) r[i] = Gb(e[i], t, n);
	return r.join("");
}
function qb(e) {
	return !!(e && typeof e == "object");
}
//#endregion
//#region ../../node_modules/decode-named-character-reference/index.dom.js
var Jb = document.createElement("i");
function Yb(e) {
	let t = "&" + e + ";";
	Jb.innerHTML = t;
	let n = Jb.textContent;
	return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? !1 : n;
}
//#endregion
//#region ../../node_modules/micromark-util-chunked/index.js
function Xb(e, t, n, r) {
	let i = e.length, a = 0, o;
	if (t = t < 0 ? -t > i ? 0 : i + t : t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) o = Array.from(r), o.unshift(t, n), e.splice(...o);
	else for (n && e.splice(t, n); a < r.length;) o = r.slice(a, a + 1e4), o.unshift(t, 0), e.splice(...o), a += 1e4, t += 1e4;
}
function Zb(e, t) {
	return e.length > 0 ? (Xb(e, e.length, 0, t), e) : t;
}
//#endregion
//#region ../../node_modules/micromark-util-combine-extensions/index.js
var Qb = {}.hasOwnProperty;
function $b(e) {
	let t = {}, n = -1;
	for (; ++n < e.length;) ex(t, e[n]);
	return t;
}
function ex(e, t) {
	let n;
	for (n in t) {
		let r = (Qb.call(e, n) ? e[n] : void 0) || (e[n] = {}), i = t[n], a;
		if (i) for (a in i) {
			Qb.call(r, a) || (r[a] = []);
			let e = i[a];
			tx(r[a], Array.isArray(e) ? e : e ? [e] : []);
		}
	}
}
function tx(e, t) {
	let n = -1, r = [];
	for (; ++n < t.length;) (t[n].add === "after" ? e : r).push(t[n]);
	Xb(e, 0, 0, r);
}
//#endregion
//#region ../../node_modules/micromark-util-decode-numeric-character-reference/index.js
function nx(e, t) {
	let n = Number.parseInt(e, t);
	return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) == 65535 || (n & 65535) == 65534 || n > 1114111 ? "�" : String.fromCodePoint(n);
}
//#endregion
//#region ../../node_modules/micromark-util-normalize-identifier/index.js
function rx(e) {
	return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
//#endregion
//#region ../../node_modules/micromark-util-character/index.js
var ix = gx(/[A-Za-z]/), ax = gx(/[\dA-Za-z]/), ox = gx(/[#-'*+\--9=?A-Z^-~]/);
function sx(e) {
	return e !== null && (e < 32 || e === 127);
}
var cx = gx(/\d/), lx = gx(/[\dA-Fa-f]/), ux = gx(/[!-/:-@[-`{-~]/);
function dx(e) {
	return e !== null && e < -2;
}
function fx(e) {
	return e !== null && (e < 0 || e === 32);
}
function px(e) {
	return e === -2 || e === -1 || e === 32;
}
var mx = gx(/\p{P}|\p{S}/u), hx = gx(/\s/);
function gx(e) {
	return t;
	function t(t) {
		return t !== null && t > -1 && e.test(String.fromCharCode(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-sanitize-uri/index.js
function _x(e) {
	let t = [], n = -1, r = 0, i = 0;
	for (; ++n < e.length;) {
		let a = e.charCodeAt(n), o = "";
		if (a === 37 && ax(e.charCodeAt(n + 1)) && ax(e.charCodeAt(n + 2))) i = 2;
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
function vx(e, t, n, r) {
	let i = r ? r - 1 : Infinity, a = 0;
	return o;
	function o(r) {
		return px(r) ? (e.enter(n), s(r)) : t(r);
	}
	function s(r) {
		return px(r) && a++ < i ? (e.consume(r), s) : (e.exit(n), t(r));
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/content.js
var yx = { tokenize: bx };
function bx(e) {
	let t = e.attempt(this.parser.constructs.contentInitial, r, i), n;
	return t;
	function r(n) {
		if (n === null) {
			e.consume(n);
			return;
		}
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), vx(e, t, "linePrefix");
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
		return dx(t) ? (e.consume(t), e.exit("chunkText"), a) : (e.consume(t), o);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/document.js
var xx = { tokenize: Cx }, Sx = { tokenize: wx };
function Cx(e) {
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
			return Xb(t.events, a + 1, 0, t.events.slice(n)), t.events.length = s, l(e);
		}
		return s(e);
	}
	function l(a) {
		if (r === n.length) {
			if (!i) return f(a);
			if (i.currentConstruct && i.currentConstruct.concrete) return m(a);
			t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
		}
		return t.containerState = {}, e.check(Sx, u, d)(a);
	}
	function u(e) {
		return i && v(), _(r), f(e);
	}
	function d(e) {
		return t.parser.lazy[t.now().line] = r !== n.length, o = t.now().offset, m(e);
	}
	function f(n) {
		return t.containerState = {}, e.attempt(Sx, p, m)(n);
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
		return dx(n) ? (e.consume(n), g(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, s) : (e.consume(n), h);
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
			Xb(t.events, a + 1, 0, t.events.slice(n)), t.events.length = e;
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
function wx(e, t, n) {
	return vx(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
//#endregion
//#region ../../node_modules/micromark-util-classify-character/index.js
function Tx(e) {
	if (e === null || fx(e) || hx(e)) return 1;
	if (mx(e)) return 2;
}
//#endregion
//#region ../../node_modules/micromark-util-resolve-all/index.js
function Ex(e, t, n) {
	let r = [], i = -1;
	for (; ++i < e.length;) {
		let a = e[i].resolveAll;
		a && !r.includes(a) && (t = a(t, n), r.push(a));
	}
	return t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/attention.js
var Dx = {
	name: "attention",
	resolveAll: Ox,
	tokenize: kx
};
function Ox(e, t) {
	let n = -1, r, i, a, o, s, c, l, u;
	for (; ++n < e.length;) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
		for (r = n; r--;) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
			if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
			c = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
			let d = { ...e[r][1].end }, f = { ...e[n][1].start };
			Ax(d, -c), Ax(f, c), o = {
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
			}, e[r][1].end = { ...o.start }, e[n][1].start = { ...s.end }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = Zb(l, [[
				"enter",
				e[r][1],
				t
			], [
				"exit",
				e[r][1],
				t
			]])), l = Zb(l, [
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
			]), l = Zb(l, Ex(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = Zb(l, [
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
			]), e[n][1].end.offset - e[n][1].start.offset ? (u = 2, l = Zb(l, [[
				"enter",
				e[n][1],
				t
			], [
				"exit",
				e[n][1],
				t
			]])) : u = 0, Xb(e, r - 1, n - r + 3, l), n = r + l.length - u - 2;
			break;
		}
	}
	for (n = -1; ++n < e.length;) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
	return e;
}
function kx(e, t) {
	let n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Tx(r), a;
	return o;
	function o(t) {
		return a = t, e.enter("attentionSequence"), s(t);
	}
	function s(o) {
		if (o === a) return e.consume(o), s;
		let c = e.exit("attentionSequence"), l = Tx(o), u = !l || l === 2 && i || n.includes(o), d = !i || i === 2 && l || n.includes(r);
		return c._open = !!(a === 42 ? u : u && (i || !d)), c._close = !!(a === 42 ? d : d && (l || !u)), t(o);
	}
}
function Ax(e, t) {
	e.column += t, e.offset += t, e._bufferIndex += t;
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/autolink.js
var jx = {
	name: "autolink",
	tokenize: Mx
};
function Mx(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(t), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), a;
	}
	function a(t) {
		return ix(t) ? (e.consume(t), o) : t === 64 ? n(t) : l(t);
	}
	function o(e) {
		return e === 43 || e === 45 || e === 46 || ax(e) ? (r = 1, s(e)) : l(e);
	}
	function s(t) {
		return t === 58 ? (e.consume(t), r = 0, c) : (t === 43 || t === 45 || t === 46 || ax(t)) && r++ < 32 ? (e.consume(t), s) : (r = 0, l(t));
	}
	function c(r) {
		return r === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(r), e.exit("autolinkMarker"), e.exit("autolink"), t) : r === null || r === 32 || r === 60 || sx(r) ? n(r) : (e.consume(r), c);
	}
	function l(t) {
		return t === 64 ? (e.consume(t), u) : ox(t) ? (e.consume(t), l) : n(t);
	}
	function u(e) {
		return ax(e) ? d(e) : n(e);
	}
	function d(n) {
		return n === 46 ? (e.consume(n), r = 0, u) : n === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(n), e.exit("autolinkMarker"), e.exit("autolink"), t) : f(n);
	}
	function f(t) {
		if ((t === 45 || ax(t)) && r++ < 63) {
			let n = t === 45 ? f : d;
			return e.consume(t), n;
		}
		return n(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/blank-line.js
var Nx = {
	partial: !0,
	tokenize: Px
};
function Px(e, t, n) {
	return r;
	function r(t) {
		return px(t) ? vx(e, i, "linePrefix")(t) : i(t);
	}
	function i(e) {
		return e === null || dx(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/block-quote.js
var Fx = {
	continuation: { tokenize: Lx },
	exit: Rx,
	name: "blockQuote",
	tokenize: Ix
};
function Ix(e, t, n) {
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
		return px(n) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(n), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(n));
	}
}
function Lx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return px(t) ? vx(e, a, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : a(t);
	}
	function a(r) {
		return e.attempt(Fx, t, n)(r);
	}
}
function Rx(e) {
	e.exit("blockQuote");
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-escape.js
var zx = {
	name: "characterEscape",
	tokenize: Bx
};
function Bx(e, t, n) {
	return r;
	function r(t) {
		return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(t), e.exit("escapeMarker"), i;
	}
	function i(r) {
		return ux(r) ? (e.enter("characterEscapeValue"), e.consume(r), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/character-reference.js
var Vx = {
	name: "characterReference",
	tokenize: Hx
};
function Hx(e, t, n) {
	let r = this, i = 0, a, o;
	return s;
	function s(t) {
		return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(t), e.exit("characterReferenceMarker"), c;
	}
	function c(t) {
		return t === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(t), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), a = 31, o = ax, u(t));
	}
	function l(t) {
		return t === 88 || t === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(t), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), a = 6, o = lx, u) : (e.enter("characterReferenceValue"), a = 7, o = cx, u(t));
	}
	function u(s) {
		if (s === 59 && i) {
			let i = e.exit("characterReferenceValue");
			return o === ax && !Yb(r.sliceSerialize(i)) ? n(s) : (e.enter("characterReferenceMarker"), e.consume(s), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
		}
		return o(s) && i++ < a ? (e.consume(s), u) : n(s);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-fenced.js
var Ux = {
	partial: !0,
	tokenize: Kx
}, Wx = {
	concrete: !0,
	name: "codeFenced",
	tokenize: Gx
};
function Gx(e, t, n) {
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
		return t === s ? (o++, e.consume(t), u) : o < 3 ? n(t) : (e.exit("codeFencedFenceSequence"), px(t) ? vx(e, d, "whitespace")(t) : d(t));
	}
	function d(n) {
		return n === null || dx(n) ? (e.exit("codeFencedFence"), r.interrupt ? t(n) : e.check(Ux, h, b)(n)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", { contentType: "string" }), f(n));
	}
	function f(t) {
		return t === null || dx(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), d(t)) : px(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), vx(e, p, "whitespace")(t)) : t === 96 && t === s ? n(t) : (e.consume(t), f);
	}
	function p(t) {
		return t === null || dx(t) ? d(t) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", { contentType: "string" }), m(t));
	}
	function m(t) {
		return t === null || dx(t) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), d(t)) : t === 96 && t === s ? n(t) : (e.consume(t), m);
	}
	function h(t) {
		return e.attempt(i, b, g)(t);
	}
	function g(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), _;
	}
	function _(t) {
		return a > 0 && px(t) ? vx(e, v, "linePrefix", a + 1)(t) : v(t);
	}
	function v(t) {
		return t === null || dx(t) ? e.check(Ux, h, b)(t) : (e.enter("codeFlowValue"), y(t));
	}
	function y(t) {
		return t === null || dx(t) ? (e.exit("codeFlowValue"), v(t)) : (e.consume(t), y);
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
			return e.enter("codeFencedFence"), px(t) ? vx(e, l, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : l(t);
		}
		function l(t) {
			return t === s ? (e.enter("codeFencedFenceSequence"), u(t)) : n(t);
		}
		function u(t) {
			return t === s ? (i++, e.consume(t), u) : i >= o ? (e.exit("codeFencedFenceSequence"), px(t) ? vx(e, d, "whitespace")(t) : d(t)) : n(t);
		}
		function d(r) {
			return r === null || dx(r) ? (e.exit("codeFencedFence"), t(r)) : n(r);
		}
	}
}
function Kx(e, t, n) {
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
var qx = {
	name: "codeIndented",
	tokenize: Yx
}, Jx = {
	partial: !0,
	tokenize: Xx
};
function Yx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.enter("codeIndented"), vx(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let t = r.events[r.events.length - 1];
		return t && t[1].type === "linePrefix" && t[2].sliceSerialize(t[1], !0).length >= 4 ? o(e) : n(e);
	}
	function o(t) {
		return t === null ? c(t) : dx(t) ? e.attempt(Jx, o, c)(t) : (e.enter("codeFlowValue"), s(t));
	}
	function s(t) {
		return t === null || dx(t) ? (e.exit("codeFlowValue"), o(t)) : (e.consume(t), s);
	}
	function c(n) {
		return e.exit("codeIndented"), t(n);
	}
}
function Xx(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.parser.lazy[r.now().line] ? n(t) : dx(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), i) : vx(e, a, "linePrefix", 5)(t);
	}
	function a(e) {
		let a = r.events[r.events.length - 1];
		return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(e) : dx(e) ? i(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/code-text.js
var Zx = {
	name: "codeText",
	previous: $x,
	resolve: Qx,
	tokenize: eS
};
function Qx(e) {
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
function $x(e) {
	return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function eS(e, t, n) {
	let r = 0, i, a;
	return o;
	function o(t) {
		return e.enter("codeText"), e.enter("codeTextSequence"), s(t);
	}
	function s(t) {
		return t === 96 ? (e.consume(t), r++, s) : (e.exit("codeTextSequence"), c(t));
	}
	function c(t) {
		return t === null ? n(t) : t === 32 ? (e.enter("space"), e.consume(t), e.exit("space"), c) : t === 96 ? (a = e.enter("codeTextSequence"), i = 0, u(t)) : dx(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), c) : (e.enter("codeTextData"), l(t));
	}
	function l(t) {
		return t === null || t === 32 || t === 96 || dx(t) ? (e.exit("codeTextData"), c(t)) : (e.consume(t), l);
	}
	function u(n) {
		return n === 96 ? (e.consume(n), i++, u) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(n)) : (a.type = "codeTextData", l(n));
	}
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/lib/splice-buffer.js
var tS = class {
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
		return n && nS(this.left, n), i.reverse();
	}
	pop() {
		return this.setCursor(Infinity), this.left.pop();
	}
	push(e) {
		this.setCursor(Infinity), this.left.push(e);
	}
	pushMany(e) {
		this.setCursor(Infinity), nS(this.left, e);
	}
	unshift(e) {
		this.setCursor(0), this.right.push(e);
	}
	unshiftMany(e) {
		this.setCursor(0), nS(this.right, e.reverse());
	}
	setCursor(e) {
		if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0)) if (e < this.left.length) {
			let t = this.left.splice(e, Infinity);
			nS(this.right, t.reverse());
		} else {
			let t = this.right.splice(this.left.length + this.right.length - e, Infinity);
			nS(this.left, t.reverse());
		}
	}
};
function nS(e, t) {
	let n = 0;
	if (t.length < 1e4) e.push(...t);
	else for (; n < t.length;) e.push(...t.slice(n, n + 1e4)), n += 1e4;
}
//#endregion
//#region ../../node_modules/micromark-util-subtokenize/index.js
function rS(e) {
	let t = {}, n = -1, r, i, a, o, s, c, l, u = new tS(e);
	for (; ++n < u.length;) {
		for (; n in t;) n = t[n];
		if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (c = r[1]._tokenizer.events, a = 0, a < c.length && c[a][1].type === "lineEndingBlank" && (a += 2), a < c.length && c[a][1].type === "content")) for (; ++a < c.length && c[a][1].type !== "content";) c[a][1].type === "chunkText" && (c[a][1]._isInFirstContentOfListItem = !0, a++);
		if (r[0] === "enter") r[1].contentType && (Object.assign(t, iS(u, n)), n = t[n], l = !0);
		else if (r[1]._container) {
			for (a = n, i = void 0; a--;) if (o = u.get(a), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank") o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = a);
			else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
			i && (r[1].end = { ...u.get(i)[1].start }, s = u.slice(i, n), s.unshift(r), u.splice(i, n - i + 1, s));
		}
	}
	return Xb(e, 0, Infinity, u.slice(0)), !l;
}
function iS(e, t) {
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
var aS = {
	resolve: sS,
	tokenize: cS
}, oS = {
	partial: !0,
	tokenize: lS
};
function sS(e) {
	return rS(e), e;
}
function cS(e, t) {
	let n;
	return r;
	function r(t) {
		return e.enter("content"), n = e.enter("chunkContent", { contentType: "content" }), i(t);
	}
	function i(t) {
		return t === null ? a(t) : dx(t) ? e.check(oS, o, a)(t) : (e.consume(t), i);
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
function lS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), vx(e, a, "linePrefix");
	}
	function a(i) {
		if (i === null || dx(i)) return n(i);
		let a = r.events[r.events.length - 1];
		return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? t(i) : e.interrupt(r.parser.constructs.flow, n, t)(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-destination/index.js
function uS(e, t, n, r, i, a, o, s, c) {
	let l = c || Infinity, u = 0;
	return d;
	function d(t) {
		return t === 60 ? (e.enter(r), e.enter(i), e.enter(a), e.consume(t), e.exit(a), f) : t === null || t === 32 || t === 41 || sx(t) ? n(t) : (e.enter(r), e.enter(o), e.enter(s), e.enter("chunkString", { contentType: "string" }), h(t));
	}
	function f(n) {
		return n === 62 ? (e.enter(a), e.consume(n), e.exit(a), e.exit(i), e.exit(r), t) : (e.enter(s), e.enter("chunkString", { contentType: "string" }), p(n));
	}
	function p(t) {
		return t === 62 ? (e.exit("chunkString"), e.exit(s), f(t)) : t === null || t === 60 || dx(t) ? n(t) : (e.consume(t), t === 92 ? m : p);
	}
	function m(t) {
		return t === 60 || t === 62 || t === 92 ? (e.consume(t), p) : p(t);
	}
	function h(i) {
		return !u && (i === null || i === 41 || fx(i)) ? (e.exit("chunkString"), e.exit(s), e.exit(o), e.exit(r), t(i)) : u < l && i === 40 ? (e.consume(i), u++, h) : i === 41 ? (e.consume(i), u--, h) : i === null || i === 32 || i === 40 || sx(i) ? n(i) : (e.consume(i), i === 92 ? g : h);
	}
	function g(t) {
		return t === 40 || t === 41 || t === 92 ? (e.consume(t), h) : h(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-label/index.js
function dS(e, t, n, r, i, a) {
	let o = this, s = 0, c;
	return l;
	function l(t) {
		return e.enter(r), e.enter(i), e.consume(t), e.exit(i), e.enter(a), u;
	}
	function u(l) {
		return s > 999 || l === null || l === 91 || l === 93 && !c || l === 94 && !s && "_hiddenFootnoteSupport" in o.parser.constructs ? n(l) : l === 93 ? (e.exit(a), e.enter(i), e.consume(l), e.exit(i), e.exit(r), t) : dx(l) ? (e.enter("lineEnding"), e.consume(l), e.exit("lineEnding"), u) : (e.enter("chunkString", { contentType: "string" }), d(l));
	}
	function d(t) {
		return t === null || t === 91 || t === 93 || dx(t) || s++ > 999 ? (e.exit("chunkString"), u(t)) : (e.consume(t), c ||= !px(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), s++, d) : d(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-title/index.js
function fS(e, t, n, r, i, a) {
	let o;
	return s;
	function s(t) {
		return t === 34 || t === 39 || t === 40 ? (e.enter(r), e.enter(i), e.consume(t), e.exit(i), o = t === 40 ? 41 : t, c) : n(t);
	}
	function c(n) {
		return n === o ? (e.enter(i), e.consume(n), e.exit(i), e.exit(r), t) : (e.enter(a), l(n));
	}
	function l(t) {
		return t === o ? (e.exit(a), c(o)) : t === null ? n(t) : dx(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), vx(e, l, "linePrefix")) : (e.enter("chunkString", { contentType: "string" }), u(t));
	}
	function u(t) {
		return t === o || t === null || dx(t) ? (e.exit("chunkString"), l(t)) : (e.consume(t), t === 92 ? d : u);
	}
	function d(t) {
		return t === o || t === 92 ? (e.consume(t), u) : u(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-factory-whitespace/index.js
function pS(e, t) {
	let n;
	return r;
	function r(i) {
		return dx(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = !0, r) : px(i) ? vx(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/definition.js
var mS = {
	name: "definition",
	tokenize: gS
}, hS = {
	partial: !0,
	tokenize: _S
};
function gS(e, t, n) {
	let r = this, i;
	return a;
	function a(t) {
		return e.enter("definition"), o(t);
	}
	function o(t) {
		return dS.call(r, e, s, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(t);
	}
	function s(t) {
		return i = rx(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), c) : n(t);
	}
	function c(t) {
		return fx(t) ? pS(e, l)(t) : l(t);
	}
	function l(t) {
		return uS(e, u, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(t);
	}
	function u(t) {
		return e.attempt(hS, d, d)(t);
	}
	function d(t) {
		return px(t) ? vx(e, f, "whitespace")(t) : f(t);
	}
	function f(a) {
		return a === null || dx(a) ? (e.exit("definition"), r.parser.defined.push(i), t(a)) : n(a);
	}
}
function _S(e, t, n) {
	return r;
	function r(t) {
		return fx(t) ? pS(e, i)(t) : n(t);
	}
	function i(t) {
		return fS(e, a, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(t);
	}
	function a(t) {
		return px(t) ? vx(e, o, "whitespace")(t) : o(t);
	}
	function o(e) {
		return e === null || dx(e) ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/hard-break-escape.js
var vS = {
	name: "hardBreakEscape",
	tokenize: yS
};
function yS(e, t, n) {
	return r;
	function r(t) {
		return e.enter("hardBreakEscape"), e.consume(t), i;
	}
	function i(r) {
		return dx(r) ? (e.exit("hardBreakEscape"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/heading-atx.js
var bS = {
	name: "headingAtx",
	resolve: xS,
	tokenize: SS
};
function xS(e, t) {
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
	}, Xb(e, r, n - r + 1, [
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
function SS(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return e.enter("atxHeading"), a(t);
	}
	function a(t) {
		return e.enter("atxHeadingSequence"), o(t);
	}
	function o(t) {
		return t === 35 && r++ < 6 ? (e.consume(t), o) : t === null || fx(t) ? (e.exit("atxHeadingSequence"), s(t)) : n(t);
	}
	function s(n) {
		return n === 35 ? (e.enter("atxHeadingSequence"), c(n)) : n === null || dx(n) ? (e.exit("atxHeading"), t(n)) : px(n) ? vx(e, s, "whitespace")(n) : (e.enter("atxHeadingText"), l(n));
	}
	function c(t) {
		return t === 35 ? (e.consume(t), c) : (e.exit("atxHeadingSequence"), s(t));
	}
	function l(t) {
		return t === null || t === 35 || fx(t) ? (e.exit("atxHeadingText"), s(t)) : (e.consume(t), l);
	}
}
//#endregion
//#region ../../node_modules/micromark-util-html-tag-name/index.js
var CS = /* @__PURE__ */ "address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul".split("."), wS = [
	"pre",
	"script",
	"style",
	"textarea"
], TS = {
	concrete: !0,
	name: "htmlFlow",
	resolveTo: OS,
	tokenize: kS
}, ES = {
	partial: !0,
	tokenize: jS
}, DS = {
	partial: !0,
	tokenize: AS
};
function OS(e) {
	let t = e.length;
	for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"););
	return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
}
function kS(e, t, n) {
	let r = this, i, a, o, s, c;
	return l;
	function l(e) {
		return u(e);
	}
	function u(t) {
		return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(t), d;
	}
	function d(s) {
		return s === 33 ? (e.consume(s), f) : s === 47 ? (e.consume(s), a = !0, h) : s === 63 ? (e.consume(s), i = 3, r.interrupt ? t : I) : ix(s) ? (e.consume(s), o = String.fromCharCode(s), g) : n(s);
	}
	function f(a) {
		return a === 45 ? (e.consume(a), i = 2, p) : a === 91 ? (e.consume(a), i = 5, s = 0, m) : ix(a) ? (e.consume(a), i = 4, r.interrupt ? t : I) : n(a);
	}
	function p(i) {
		return i === 45 ? (e.consume(i), r.interrupt ? t : I) : n(i);
	}
	function m(i) {
		return i === "CDATA[".charCodeAt(s++) ? (e.consume(i), s === 6 ? r.interrupt ? t : O : m) : n(i);
	}
	function h(t) {
		return ix(t) ? (e.consume(t), o = String.fromCharCode(t), g) : n(t);
	}
	function g(s) {
		if (s === null || s === 47 || s === 62 || fx(s)) {
			let c = s === 47, l = o.toLowerCase();
			return !c && !a && wS.includes(l) ? (i = 1, r.interrupt ? t(s) : O(s)) : CS.includes(o.toLowerCase()) ? (i = 6, c ? (e.consume(s), _) : r.interrupt ? t(s) : O(s)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(s) : a ? v(s) : y(s));
		}
		return s === 45 || ax(s) ? (e.consume(s), o += String.fromCharCode(s), g) : n(s);
	}
	function _(i) {
		return i === 62 ? (e.consume(i), r.interrupt ? t : O) : n(i);
	}
	function v(t) {
		return px(t) ? (e.consume(t), v) : E(t);
	}
	function y(t) {
		return t === 47 ? (e.consume(t), E) : t === 58 || t === 95 || ix(t) ? (e.consume(t), b) : px(t) ? (e.consume(t), y) : E(t);
	}
	function b(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || ax(t) ? (e.consume(t), b) : x(t);
	}
	function x(t) {
		return t === 61 ? (e.consume(t), S) : px(t) ? (e.consume(t), x) : y(t);
	}
	function S(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), c = t, C) : px(t) ? (e.consume(t), S) : w(t);
	}
	function C(t) {
		return t === c ? (e.consume(t), c = null, T) : t === null || dx(t) ? n(t) : (e.consume(t), C);
	}
	function w(t) {
		return t === null || t === 34 || t === 39 || t === 47 || t === 60 || t === 61 || t === 62 || t === 96 || fx(t) ? x(t) : (e.consume(t), w);
	}
	function T(e) {
		return e === 47 || e === 62 || px(e) ? y(e) : n(e);
	}
	function E(t) {
		return t === 62 ? (e.consume(t), D) : n(t);
	}
	function D(t) {
		return t === null || dx(t) ? O(t) : px(t) ? (e.consume(t), D) : n(t);
	}
	function O(t) {
		return t === 45 && i === 2 ? (e.consume(t), M) : t === 60 && i === 1 ? (e.consume(t), N) : t === 62 && i === 4 ? (e.consume(t), ee) : t === 63 && i === 3 ? (e.consume(t), I) : t === 93 && i === 5 ? (e.consume(t), F) : dx(t) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(ES, L, k)(t)) : t === null || dx(t) ? (e.exit("htmlFlowData"), k(t)) : (e.consume(t), O);
	}
	function k(t) {
		return e.check(DS, A, L)(t);
	}
	function A(t) {
		return e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), j;
	}
	function j(t) {
		return t === null || dx(t) ? k(t) : (e.enter("htmlFlowData"), O(t));
	}
	function M(t) {
		return t === 45 ? (e.consume(t), I) : O(t);
	}
	function N(t) {
		return t === 47 ? (e.consume(t), o = "", P) : O(t);
	}
	function P(t) {
		if (t === 62) {
			let n = o.toLowerCase();
			return wS.includes(n) ? (e.consume(t), ee) : O(t);
		}
		return ix(t) && o.length < 8 ? (e.consume(t), o += String.fromCharCode(t), P) : O(t);
	}
	function F(t) {
		return t === 93 ? (e.consume(t), I) : O(t);
	}
	function I(t) {
		return t === 62 ? (e.consume(t), ee) : t === 45 && i === 2 ? (e.consume(t), I) : O(t);
	}
	function ee(t) {
		return t === null || dx(t) ? (e.exit("htmlFlowData"), L(t)) : (e.consume(t), ee);
	}
	function L(n) {
		return e.exit("htmlFlow"), t(n);
	}
}
function AS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return dx(t) ? (e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), a) : n(t);
	}
	function a(e) {
		return r.parser.lazy[r.now().line] ? n(e) : t(e);
	}
}
function jS(e, t, n) {
	return r;
	function r(r) {
		return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), e.attempt(Nx, t, n);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/html-text.js
var MS = {
	name: "htmlText",
	tokenize: NS
};
function NS(e, t, n) {
	let r = this, i, a, o;
	return s;
	function s(t) {
		return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(t), c;
	}
	function c(t) {
		return t === 33 ? (e.consume(t), l) : t === 47 ? (e.consume(t), x) : t === 63 ? (e.consume(t), y) : ix(t) ? (e.consume(t), w) : n(t);
	}
	function l(t) {
		return t === 45 ? (e.consume(t), u) : t === 91 ? (e.consume(t), a = 0, m) : ix(t) ? (e.consume(t), v) : n(t);
	}
	function u(t) {
		return t === 45 ? (e.consume(t), p) : n(t);
	}
	function d(t) {
		return t === null ? n(t) : t === 45 ? (e.consume(t), f) : dx(t) ? (o = d, N(t)) : (e.consume(t), d);
	}
	function f(t) {
		return t === 45 ? (e.consume(t), p) : d(t);
	}
	function p(e) {
		return e === 62 ? M(e) : e === 45 ? f(e) : d(e);
	}
	function m(t) {
		return t === "CDATA[".charCodeAt(a++) ? (e.consume(t), a === 6 ? h : m) : n(t);
	}
	function h(t) {
		return t === null ? n(t) : t === 93 ? (e.consume(t), g) : dx(t) ? (o = h, N(t)) : (e.consume(t), h);
	}
	function g(t) {
		return t === 93 ? (e.consume(t), _) : h(t);
	}
	function _(t) {
		return t === 62 ? M(t) : t === 93 ? (e.consume(t), _) : h(t);
	}
	function v(t) {
		return t === null || t === 62 ? M(t) : dx(t) ? (o = v, N(t)) : (e.consume(t), v);
	}
	function y(t) {
		return t === null ? n(t) : t === 63 ? (e.consume(t), b) : dx(t) ? (o = y, N(t)) : (e.consume(t), y);
	}
	function b(e) {
		return e === 62 ? M(e) : y(e);
	}
	function x(t) {
		return ix(t) ? (e.consume(t), S) : n(t);
	}
	function S(t) {
		return t === 45 || ax(t) ? (e.consume(t), S) : C(t);
	}
	function C(t) {
		return dx(t) ? (o = C, N(t)) : px(t) ? (e.consume(t), C) : M(t);
	}
	function w(t) {
		return t === 45 || ax(t) ? (e.consume(t), w) : t === 47 || t === 62 || fx(t) ? T(t) : n(t);
	}
	function T(t) {
		return t === 47 ? (e.consume(t), M) : t === 58 || t === 95 || ix(t) ? (e.consume(t), E) : dx(t) ? (o = T, N(t)) : px(t) ? (e.consume(t), T) : M(t);
	}
	function E(t) {
		return t === 45 || t === 46 || t === 58 || t === 95 || ax(t) ? (e.consume(t), E) : D(t);
	}
	function D(t) {
		return t === 61 ? (e.consume(t), O) : dx(t) ? (o = D, N(t)) : px(t) ? (e.consume(t), D) : T(t);
	}
	function O(t) {
		return t === null || t === 60 || t === 61 || t === 62 || t === 96 ? n(t) : t === 34 || t === 39 ? (e.consume(t), i = t, k) : dx(t) ? (o = O, N(t)) : px(t) ? (e.consume(t), O) : (e.consume(t), A);
	}
	function k(t) {
		return t === i ? (e.consume(t), i = void 0, j) : t === null ? n(t) : dx(t) ? (o = k, N(t)) : (e.consume(t), k);
	}
	function A(t) {
		return t === null || t === 34 || t === 39 || t === 60 || t === 61 || t === 96 ? n(t) : t === 47 || t === 62 || fx(t) ? T(t) : (e.consume(t), A);
	}
	function j(e) {
		return e === 47 || e === 62 || fx(e) ? T(e) : n(e);
	}
	function M(r) {
		return r === 62 ? (e.consume(r), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(r);
	}
	function N(t) {
		return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), P;
	}
	function P(t) {
		return px(t) ? vx(e, F, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : F(t);
	}
	function F(t) {
		return e.enter("htmlTextData"), o(t);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/label-end.js
var PS = {
	name: "labelEnd",
	resolveAll: RS,
	resolveTo: zS,
	tokenize: BS
}, FS = { tokenize: VS }, IS = { tokenize: HS }, LS = { tokenize: US };
function RS(e) {
	let t = -1, n = [];
	for (; ++t < e.length;) {
		let r = e[t][1];
		if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
			let e = r.type === "labelImage" ? 4 : 2;
			r.type = "data", t += e;
		}
	}
	return e.length !== n.length && Xb(e, 0, e.length, n), e;
}
function zS(e, t) {
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
	]], s = Zb(s, e.slice(a + 1, a + r + 3)), s = Zb(s, [[
		"enter",
		u,
		t
	]]), s = Zb(s, Ex(t.parser.constructs.insideSpan.null, e.slice(a + r + 4, o - 3), t)), s = Zb(s, [
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
	]), s = Zb(s, e.slice(o + 1)), s = Zb(s, [[
		"exit",
		c,
		t
	]]), Xb(e, a, e.length, s), e;
}
function BS(e, t, n) {
	let r = this, i = r.events.length, a, o;
	for (; i--;) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
		a = r.events[i][1];
		break;
	}
	return s;
	function s(t) {
		return a ? a._inactive ? d(t) : (o = r.parser.defined.includes(rx(r.sliceSerialize({
			start: a.end,
			end: r.now()
		}))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(t), e.exit("labelMarker"), e.exit("labelEnd"), c) : n(t);
	}
	function c(t) {
		return t === 40 ? e.attempt(FS, u, o ? u : d)(t) : t === 91 ? e.attempt(IS, u, o ? l : d)(t) : o ? u(t) : d(t);
	}
	function l(t) {
		return e.attempt(LS, u, d)(t);
	}
	function u(e) {
		return t(e);
	}
	function d(e) {
		return a._balanced = !0, n(e);
	}
}
function VS(e, t, n) {
	return r;
	function r(t) {
		return e.enter("resource"), e.enter("resourceMarker"), e.consume(t), e.exit("resourceMarker"), i;
	}
	function i(t) {
		return fx(t) ? pS(e, a)(t) : a(t);
	}
	function a(t) {
		return t === 41 ? u(t) : uS(e, o, s, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(t);
	}
	function o(t) {
		return fx(t) ? pS(e, c)(t) : u(t);
	}
	function s(e) {
		return n(e);
	}
	function c(t) {
		return t === 34 || t === 39 || t === 40 ? fS(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(t) : u(t);
	}
	function l(t) {
		return fx(t) ? pS(e, u)(t) : u(t);
	}
	function u(r) {
		return r === 41 ? (e.enter("resourceMarker"), e.consume(r), e.exit("resourceMarker"), e.exit("resource"), t) : n(r);
	}
}
function HS(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return dS.call(r, e, a, o, "reference", "referenceMarker", "referenceString")(t);
	}
	function a(e) {
		return r.parser.defined.includes(rx(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(e) : n(e);
	}
	function o(e) {
		return n(e);
	}
}
function US(e, t, n) {
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
var WS = {
	name: "labelStartImage",
	resolveAll: PS.resolveAll,
	tokenize: GS
};
function GS(e, t, n) {
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
var KS = {
	name: "labelStartLink",
	resolveAll: PS.resolveAll,
	tokenize: qS
};
function qS(e, t, n) {
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
var JS = {
	name: "lineEnding",
	tokenize: YS
};
function YS(e, t) {
	return n;
	function n(n) {
		return e.enter("lineEnding"), e.consume(n), e.exit("lineEnding"), vx(e, t, "linePrefix");
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/thematic-break.js
var XS = {
	name: "thematicBreak",
	tokenize: ZS
};
function ZS(e, t, n) {
	let r = 0, i;
	return a;
	function a(t) {
		return e.enter("thematicBreak"), o(t);
	}
	function o(e) {
		return i = e, s(e);
	}
	function s(a) {
		return a === i ? (e.enter("thematicBreakSequence"), c(a)) : r >= 3 && (a === null || dx(a)) ? (e.exit("thematicBreak"), t(a)) : n(a);
	}
	function c(t) {
		return t === i ? (e.consume(t), r++, c) : (e.exit("thematicBreakSequence"), px(t) ? vx(e, s, "whitespace")(t) : s(t));
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/list.js
var QS = {
	continuation: { tokenize: nC },
	exit: iC,
	name: "list",
	tokenize: tC
}, $S = {
	partial: !0,
	tokenize: aC
}, eC = {
	partial: !0,
	tokenize: rC
};
function tC(e, t, n) {
	let r = this, i = r.events[r.events.length - 1], a = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
	return s;
	function s(t) {
		let i = r.containerState.type || (t === 42 || t === 43 || t === 45 ? "listUnordered" : "listOrdered");
		if (i === "listUnordered" ? !r.containerState.marker || t === r.containerState.marker : cx(t)) {
			if (r.containerState.type || (r.containerState.type = i, e.enter(i, { _container: !0 })), i === "listUnordered") return e.enter("listItemPrefix"), t === 42 || t === 45 ? e.check(XS, n, l)(t) : l(t);
			if (!r.interrupt || t === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), c(t);
		}
		return n(t);
	}
	function c(t) {
		return cx(t) && ++o < 10 ? (e.consume(t), c) : (!r.interrupt || o < 2) && (r.containerState.marker ? t === r.containerState.marker : t === 41 || t === 46) ? (e.exit("listItemValue"), l(t)) : n(t);
	}
	function l(t) {
		return e.enter("listItemMarker"), e.consume(t), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || t, e.check(Nx, r.interrupt ? n : u, e.attempt($S, f, d));
	}
	function u(e) {
		return r.containerState.initialBlankLine = !0, a++, f(e);
	}
	function d(t) {
		return px(t) ? (e.enter("listItemPrefixWhitespace"), e.consume(t), e.exit("listItemPrefixWhitespace"), f) : n(t);
	}
	function f(n) {
		return r.containerState.size = a + r.sliceSerialize(e.exit("listItemPrefix"), !0).length, t(n);
	}
}
function nC(e, t, n) {
	let r = this;
	return r.containerState._closeFlow = void 0, e.check(Nx, i, a);
	function i(n) {
		return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, vx(e, t, "listItemIndent", r.containerState.size + 1)(n);
	}
	function a(n) {
		return r.containerState.furtherBlankLines || !px(n) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(n)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(eC, t, o)(n));
	}
	function o(i) {
		return r.containerState._closeFlow = !0, r.interrupt = void 0, vx(e, e.attempt(QS, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(i);
	}
}
function rC(e, t, n) {
	let r = this;
	return vx(e, i, "listItemIndent", r.containerState.size + 1);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "listItemIndent" && i[2].sliceSerialize(i[1], !0).length === r.containerState.size ? t(e) : n(e);
	}
}
function iC(e) {
	e.exit(this.containerState.type);
}
function aC(e, t, n) {
	let r = this;
	return vx(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return !px(e) && i && i[1].type === "listItemPrefixWhitespace" ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-core-commonmark/lib/setext-underline.js
var oC = {
	name: "setextUnderline",
	resolveTo: sC,
	tokenize: cC
};
function sC(e, t) {
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
function cC(e, t, n) {
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
		return t === i ? (e.consume(t), s) : (e.exit("setextHeadingLineSequence"), px(t) ? vx(e, c, "lineSuffix")(t) : c(t));
	}
	function c(r) {
		return r === null || dx(r) ? (e.exit("setextHeadingLine"), t(r)) : n(r);
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/initialize/flow.js
var lC = { tokenize: uC };
function uC(e) {
	let t = this, n = e.attempt(Nx, r, e.attempt(this.parser.constructs.flowInitial, i, vx(e, e.attempt(this.parser.constructs.flow, i, e.attempt(aS, i)), "linePrefix")));
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
var dC = { resolveAll: hC() }, fC = mC("string"), pC = mC("text");
function mC(e) {
	return {
		resolveAll: hC(e === "text" ? gC : void 0),
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
function hC(e) {
	return t;
	function t(t, n) {
		let r = -1, i;
		for (; ++r <= t.length;) i === void 0 ? t[r] && t[r][1].type === "data" && (i = r, r++) : (!t[r] || t[r][1].type !== "data") && (r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), r = i + 2), i = void 0);
		return e ? e(t, n) : t;
	}
}
function gC(e, t) {
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
var _C = /* @__PURE__ */ N({
	attentionMarkers: () => TC,
	contentInitial: () => yC,
	disable: () => EC,
	document: () => vC,
	flow: () => xC,
	flowInitial: () => bC,
	insideSpan: () => wC,
	string: () => SC,
	text: () => CC
}), vC = {
	42: QS,
	43: QS,
	45: QS,
	48: QS,
	49: QS,
	50: QS,
	51: QS,
	52: QS,
	53: QS,
	54: QS,
	55: QS,
	56: QS,
	57: QS,
	62: Fx
}, yC = { 91: mS }, bC = {
	[-2]: qx,
	[-1]: qx,
	32: qx
}, xC = {
	35: bS,
	42: XS,
	45: [oC, XS],
	60: TS,
	61: oC,
	95: XS,
	96: Wx,
	126: Wx
}, SC = {
	38: Vx,
	92: zx
}, CC = {
	[-5]: JS,
	[-4]: JS,
	[-3]: JS,
	33: WS,
	38: Vx,
	42: Dx,
	60: [jx, MS],
	91: KS,
	92: [vS, zx],
	93: PS,
	95: Dx,
	96: Zx
}, wC = { null: [Dx, dC] }, TC = { null: [42, 95] }, EC = { null: [] };
//#endregion
//#region ../../node_modules/micromark/lib/create-tokenizer.js
function DC(e, t, n) {
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
		return o = Zb(o, e), g(), o[o.length - 1] === null ? (w(t, 0), l.events = Ex(a, l.events, l), l.events) : [];
	}
	function f(e, t) {
		return kC(p(e), t);
	}
	function p(e) {
		return OC(o, e);
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
		dx(e) ? (r.line++, r.column = 1, r.offset += e === -3 ? 2 : 1, E()) : e !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === o[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = e;
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
		e.resolveAll && !a.includes(e) && a.push(e), e.resolve && Xb(l.events, t, l.events.length - t, e.resolve(l.events.slice(t), l)), e.resolveTo && (l.events = e.resolveTo(l.events, l));
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
function OC(e, t) {
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
function kC(e, t) {
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
function AC(e) {
	let t = {
		constructs: $b([_C, ...(e || {}).extensions || []]),
		content: n(yx),
		defined: [],
		document: n(xx),
		flow: n(lC),
		lazy: {},
		string: n(fC),
		text: n(pC)
	};
	return t;
	function n(e) {
		return n;
		function n(n) {
			return DC(t, e, n);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark/lib/postprocess.js
function jC(e) {
	for (; !rS(e););
	return e;
}
//#endregion
//#region ../../node_modules/micromark/lib/preprocess.js
var MC = /[\0\t\n\r]/g;
function NC() {
	let e = 1, t = "", n = !0, r;
	return i;
	function i(i, a, o) {
		let s = [], c, l, u, d, f;
		for (i = t + (typeof i == "string" ? i.toString() : new TextDecoder(a || void 0).decode(i)), u = 0, t = "", n &&= (i.charCodeAt(0) === 65279 && u++, void 0); u < i.length;) {
			if (MC.lastIndex = u, c = MC.exec(i), d = c && c.index !== void 0 ? c.index : i.length, f = i.charCodeAt(d), !c) {
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
var PC = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function FC(e) {
	return e.replace(PC, IC);
}
function IC(e, t, n) {
	if (t) return t;
	if (n.charCodeAt(0) === 35) {
		let e = n.charCodeAt(1), t = e === 120 || e === 88;
		return nx(n.slice(t ? 2 : 1), t ? 16 : 10);
	}
	return Yb(n) || e;
}
//#endregion
//#region ../../node_modules/mdast-util-from-markdown/lib/index.js
var LC = {}.hasOwnProperty;
function RC(e, t, n) {
	return typeof t != "string" && (n = t, t = void 0), zC(n)(jC(AC(n).document().write(NC()(e, t, !0))));
}
function zC(e) {
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
			autolink: a(se),
			autolinkProtocol: T,
			autolinkEmail: T,
			atxHeading: a(q),
			blockQuote: a(G),
			characterEscape: T,
			characterReference: T,
			codeFenced: a(K),
			codeFencedFenceInfo: o,
			codeFencedFenceMeta: o,
			codeIndented: a(K, o),
			codeText: a(te, o),
			codeTextData: T,
			data: T,
			codeFlowValue: T,
			definition: a(ne),
			definitionDestinationString: o,
			definitionLabelString: o,
			definitionTitleString: o,
			emphasis: a(re),
			hardBreakEscape: a(ie),
			hardBreakTrailing: a(ie),
			htmlFlow: a(ae, o),
			htmlFlowData: T,
			htmlText: a(ae, o),
			htmlTextData: T,
			image: a(oe),
			label: o,
			link: a(se),
			listItem: a(le),
			listItemValue: f,
			listOrdered: a(ce, d),
			listUnordered: a(ce),
			paragraph: a(ue),
			reference: R,
			referenceString: o,
			resourceDestinationString: o,
			resourceTitleString: o,
			setextHeading: a(q),
			strong: a(de),
			thematicBreak: a(pe)
		},
		exit: {
			atxHeading: c(),
			atxHeadingSequence: x,
			autolink: c(),
			autolinkEmail: W,
			autolinkProtocol: U,
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
			codeText: c(j),
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
			htmlText: c(A),
			htmlTextData: E,
			image: c(N),
			label: F,
			labelText: P,
			lineEnding: D,
			link: c(M),
			listItem: c(),
			listOrdered: c(),
			listUnordered: c(),
			paragraph: c(),
			referenceString: z,
			resourceDestinationString: I,
			resourceTitleString: ee,
			resource: L,
			setextHeading: c(w),
			setextHeadingLineSequence: C,
			setextHeadingText: S,
			strong: c(),
			thematicBreak: c()
		}
	};
	VC(t, (e || {}).mdastExtensions || []);
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
			LC.call(n, e[d][1].type) && n[e[d][1].type].call(Object.assign({ sliceSerialize: e[d][2].sliceSerialize }, a), e[d][1]);
		}
		if (a.tokenStack.length > 0) {
			let e = a.tokenStack[a.tokenStack.length - 1];
			(e[1] || UC).call(a, void 0, e[0]);
		}
		for (r.position = {
			start: BC(e.length > 0 ? e[0][1].start : {
				line: 1,
				column: 1,
				offset: 0
			}),
			end: BC(e.length > 0 ? e[e.length - 2][1].end : {
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
			start: BC(t.start),
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
		if (r) r[0].type !== e.type && (t ? t.call(this, e, r[0]) : (r[1] || UC).call(this, e, r[0]));
		else throw Error("Cannot close `" + e.type + "` (" + cb({
			start: e.start,
			end: e.end
		}) + "): it’s not open");
		n.position.end = BC(e.end);
	}
	function u() {
		return Wb(this.stack.pop());
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
		n.label = t, n.identifier = rx(this.sliceSerialize(e)).toLowerCase();
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
		(!n || n.type !== "text") && (n = fe(), n.position = {
			start: BC(e.start),
			end: void 0
		}, t.push(n)), this.stack.push(n);
	}
	function E(e) {
		let t = this.stack.pop();
		t.value += this.sliceSerialize(e), t.position.end = BC(e.end);
	}
	function D(e) {
		let n = this.stack[this.stack.length - 1];
		if (this.data.atHardBreak) {
			let t = n.children[n.children.length - 1];
			t.position.end = BC(e.end), this.data.atHardBreak = void 0;
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
	function A() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function j() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.value = e;
	}
	function M() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function N() {
		let e = this.stack[this.stack.length - 1];
		if (this.data.inReference) {
			let t = this.data.referenceType || "shortcut";
			e.type += "Reference", e.referenceType = t, delete e.url, delete e.title;
		} else delete e.identifier, delete e.label;
		this.data.referenceType = void 0;
	}
	function P(e) {
		let t = this.sliceSerialize(e), n = this.stack[this.stack.length - 2];
		n.label = FC(t), n.identifier = rx(t).toLowerCase();
	}
	function F() {
		let e = this.stack[this.stack.length - 1], t = this.resume(), n = this.stack[this.stack.length - 1];
		this.data.inReference = !0, n.type === "link" ? n.children = e.children : n.alt = t;
	}
	function I() {
		let e = this.resume(), t = this.stack[this.stack.length - 1];
		t.url = e;
	}
	function ee() {
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
		n.label = t, n.identifier = rx(this.sliceSerialize(e)).toLowerCase(), this.data.referenceType = "full";
	}
	function B(e) {
		this.data.characterReferenceType = e.type;
	}
	function V(e) {
		let t = this.sliceSerialize(e), n = this.data.characterReferenceType, r;
		n ? (r = nx(t, n === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : r = Yb(t);
		let i = this.stack[this.stack.length - 1];
		i.value += r;
	}
	function H(e) {
		let t = this.stack.pop();
		t.position.end = BC(e.end);
	}
	function U(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = this.sliceSerialize(e);
	}
	function W(e) {
		E.call(this, e);
		let t = this.stack[this.stack.length - 1];
		t.url = "mailto:" + this.sliceSerialize(e);
	}
	function G() {
		return {
			type: "blockquote",
			children: []
		};
	}
	function K() {
		return {
			type: "code",
			lang: null,
			meta: null,
			value: ""
		};
	}
	function te() {
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
	function q() {
		return {
			type: "heading",
			depth: 0,
			children: []
		};
	}
	function ie() {
		return { type: "break" };
	}
	function ae() {
		return {
			type: "html",
			value: ""
		};
	}
	function oe() {
		return {
			type: "image",
			title: null,
			url: "",
			alt: null
		};
	}
	function se() {
		return {
			type: "link",
			title: null,
			url: "",
			children: []
		};
	}
	function ce(e) {
		return {
			type: "list",
			ordered: e.type === "listOrdered",
			start: null,
			spread: e._spread,
			children: []
		};
	}
	function le(e) {
		return {
			type: "listItem",
			spread: e._spread,
			checked: null,
			children: []
		};
	}
	function ue() {
		return {
			type: "paragraph",
			children: []
		};
	}
	function de() {
		return {
			type: "strong",
			children: []
		};
	}
	function fe() {
		return {
			type: "text",
			value: ""
		};
	}
	function pe() {
		return { type: "thematicBreak" };
	}
}
function BC(e) {
	return {
		line: e.line,
		column: e.column,
		offset: e.offset
	};
}
function VC(e, t) {
	let n = -1;
	for (; ++n < t.length;) {
		let r = t[n];
		Array.isArray(r) ? VC(e, r) : HC(e, r);
	}
}
function HC(e, t) {
	let n;
	for (n in t) if (LC.call(t, n)) switch (n) {
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
function UC(e, t) {
	throw Error(e ? "Cannot close `" + e.type + "` (" + cb({
		start: e.start,
		end: e.end
	}) + "): a different token (`" + t.type + "`, " + cb({
		start: t.start,
		end: t.end
	}) + ") is open" : "Cannot close document, a token (`" + t.type + "`, " + cb({
		start: t.start,
		end: t.end
	}) + ") is still open");
}
//#endregion
//#region ../../node_modules/remark-parse/lib/index.js
function WC(e) {
	let t = this;
	t.parser = n;
	function n(n) {
		return RC(n, {
			...t.data("settings"),
			...e,
			extensions: t.data("micromarkExtensions") || [],
			mdastExtensions: t.data("fromMarkdownExtensions") || []
		});
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/blockquote.js
function GC(e, t) {
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
function KC(e, t) {
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
function qC(e, t) {
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
function JC(e, t) {
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
function YC(e, t) {
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
function XC(e, t) {
	let n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = _x(r.toLowerCase()), a = e.footnoteOrder.indexOf(r), o, s = e.footnoteCounts.get(r);
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
function ZC(e, t) {
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
function QC(e, t) {
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
function $C(e, t) {
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
function ew(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return $C(e, t);
	let i = {
		src: _x(r.url || ""),
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
function tw(e, t) {
	let n = { src: _x(t.url) };
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
function nw(e, t) {
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
function rw(e, t) {
	let n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
	if (!r) return $C(e, t);
	let i = { href: _x(r.url || "") };
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
function iw(e, t) {
	let n = { href: _x(t.url) };
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
function aw(e, t, n) {
	let r = e.all(t), i = n ? ow(n) : sw(t), a = {}, o = [];
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
function ow(e) {
	let t = !1;
	if (e.type === "list") {
		t = e.spread || !1;
		let n = e.children, r = -1;
		for (; !t && ++r < n.length;) t = sw(n[r]);
	}
	return t;
}
function sw(e) {
	return e.spread ?? e.children.length > 1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/list.js
function cw(e, t) {
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
function lw(e, t) {
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
function uw(e, t) {
	let n = {
		type: "root",
		children: e.wrap(e.all(t))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/strong.js
function dw(e, t) {
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
function fw(e, t) {
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
		}, a = ab(t.children[1]), o = ib(t.children[t.children.length - 1]);
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
function pw(e, t, n) {
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
function mw(e, t) {
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
var hw = 9, gw = 32;
function _w(e) {
	let t = String(e), n = /\r?\n|\r/g, r = n.exec(t), i = 0, a = [];
	for (; r;) a.push(vw(t.slice(i, r.index), i > 0, !0), r[0]), i = r.index + r[0].length, r = n.exec(t);
	return a.push(vw(t.slice(i), i > 0, !1)), a.join("");
}
function vw(e, t, n) {
	let r = 0, i = e.length;
	if (t) {
		let t = e.codePointAt(r);
		for (; t === hw || t === gw;) r++, t = e.codePointAt(r);
	}
	if (n) {
		let t = e.codePointAt(i - 1);
		for (; t === hw || t === gw;) i--, t = e.codePointAt(i - 1);
	}
	return i > r ? e.slice(r, i) : "";
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/text.js
function yw(e, t) {
	let n = {
		type: "text",
		value: _w(String(t.value))
	};
	return e.patch(t, n), e.applyData(t, n);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js
function bw(e, t) {
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
var xw = {
	blockquote: GC,
	break: KC,
	code: qC,
	delete: JC,
	emphasis: YC,
	footnoteReference: XC,
	heading: ZC,
	html: QC,
	imageReference: ew,
	image: tw,
	inlineCode: nw,
	linkReference: rw,
	link: iw,
	listItem: aw,
	list: cw,
	paragraph: lw,
	root: uw,
	strong: dw,
	table: fw,
	tableCell: mw,
	tableRow: pw,
	text: yw,
	thematicBreak: bw,
	toml: Sw,
	yaml: Sw,
	definition: Sw,
	footnoteDefinition: Sw
};
function Sw() {}
//#endregion
//#region ../../node_modules/@ungap/structured-clone/esm/deserialize.js
var Cw = typeof self == "object" ? self : globalThis, ww = (e, t) => {
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
				return n(new Cw[e](t), i);
			}
			case 8: return n(BigInt(o), i);
			case "BigInt": return n(Object(BigInt(o)), i);
			case "ArrayBuffer": return n(new Uint8Array(o).buffer, o);
			case "DataView": {
				let { buffer: e } = new Uint8Array(o);
				return n(new DataView(e), o);
			}
		}
		return n(new Cw[a](o), i);
	};
	return r;
}, Tw = (e) => ww(/* @__PURE__ */ new Map(), e)(0), Ew = "", { toString: Dw } = {}, { keys: Ow } = Object, kw = (e) => {
	let t = typeof e;
	if (t !== "object" || !e) return [0, t];
	let n = Dw.call(e).slice(8, -1);
	switch (n) {
		case "Array": return [1, Ew];
		case "Object": return [2, Ew];
		case "Date": return [3, Ew];
		case "RegExp": return [4, Ew];
		case "Map": return [5, Ew];
		case "Set": return [6, Ew];
		case "DataView": return [1, n];
	}
	return n.includes("Array") ? [1, n] : n.includes("Error") ? [7, n] : [2, n];
}, Aw = ([e, t]) => e === 0 && (t === "function" || t === "symbol"), jw = (e, t, n, r) => {
	let i = (e, t) => {
		let i = r.push(e) - 1;
		return n.set(t, i), i;
	}, a = (r) => {
		if (n.has(r)) return n.get(r);
		let [o, s] = kw(r);
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
				for (let t of Ow(r)) (e || !Aw(kw(r[t]))) && n.push([a(t), a(r[t])]);
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
				for (let [n, i] of r) (e || !(Aw(kw(n)) || Aw(kw(i)))) && t.push([a(n), a(i)]);
				return n;
			}
			case 6: {
				let t = [], n = i([o, t], r);
				for (let n of r) (e || !Aw(kw(n))) && t.push(a(n));
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
}, Mw = (e, { json: t, lossy: n } = {}) => {
	let r = [];
	return jw(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
}, Nw = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? Tw(Mw(e, t)) : structuredClone(e) : (e, t) => Tw(Mw(e, t));
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/footer.js
function Pw(e, t) {
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
function Fw(e, t) {
	return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
}
function Iw(e) {
	let t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || Pw, r = e.options.footnoteBackLabel || Fw, i = e.options.footnoteLabel || "Footnotes", a = e.options.footnoteLabelTagName || "h2", o = e.options.footnoteLabelProperties || { className: ["sr-only"] }, s = [], c = -1;
	for (; ++c < e.footnoteOrder.length;) {
		let i = e.footnoteById.get(e.footnoteOrder[c]);
		if (!i) continue;
		let a = e.all(i), o = String(i.identifier).toUpperCase(), l = _x(o.toLowerCase()), u = 0, d = [], f = e.footnoteCounts.get(o);
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
					...Nw(o),
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
var Lw = (function(e) {
	if (e == null) return Hw;
	if (typeof e == "function") return Vw(e);
	if (typeof e == "object") return Array.isArray(e) ? Rw(e) : zw(e);
	if (typeof e == "string") return Bw(e);
	throw Error("Expected function, string, or object as test");
});
function Rw(e) {
	let t = [], n = -1;
	for (; ++n < e.length;) t[n] = Lw(e[n]);
	return Vw(r);
	function r(...e) {
		let n = -1;
		for (; ++n < t.length;) if (t[n].apply(this, e)) return !0;
		return !1;
	}
}
function zw(e) {
	let t = e;
	return Vw(n);
	function n(n) {
		let r = n, i;
		for (i in e) if (r[i] !== t[i]) return !1;
		return !0;
	}
}
function Bw(e) {
	return Vw(t);
	function t(t) {
		return t && t.type === e;
	}
}
function Vw(e) {
	return t;
	function t(t, n, r) {
		return !!(Uw(t) && e.call(this, t, typeof n == "number" ? n : void 0, r || void 0));
	}
}
function Hw() {
	return !0;
}
function Uw(e) {
	return typeof e == "object" && !!e && "type" in e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/color.js
function Ww(e) {
	return e;
}
//#endregion
//#region ../../node_modules/unist-util-visit-parents/lib/index.js
var Gw = [];
function Kw(e, t, n, r) {
	let i;
	typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
	let a = Lw(i), o = r ? -1 : 1;
	s(e, void 0, [])();
	function s(e, i, c) {
		let l = e && typeof e == "object" ? e : {};
		if (typeof l.type == "string") {
			let t = typeof l.tagName == "string" ? l.tagName : typeof l.name == "string" ? l.name : void 0;
			Object.defineProperty(u, "name", { value: "node (" + Ww(e.type + (t ? "<" + t + ">" : "")) + ")" });
		}
		return u;
		function u() {
			let l = Gw, u, d, f;
			if ((!t || a(e, i, c[c.length - 1] || void 0)) && (l = qw(n(e, c)), l[0] === !1)) return l;
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
function qw(e) {
	return Array.isArray(e) ? e : typeof e == "number" ? [!0, e] : e == null ? Gw : [e];
}
//#endregion
//#region ../../node_modules/unist-util-visit/lib/index.js
function Jw(e, t, n, r) {
	let i, a, o;
	typeof t == "function" && typeof n != "function" ? (a = void 0, o = t, i = n) : (a = t, o = n, i = r), Kw(e, a, s, i);
	function s(e, t) {
		let n = t[t.length - 1], r = n ? n.children.indexOf(e) : void 0;
		return o(e, r, n);
	}
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/state.js
var Yw = {}.hasOwnProperty, Xw = {};
function Zw(e, t) {
	let n = t || Xw, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = {
		all: s,
		applyData: $w,
		definitionById: r,
		footnoteById: i,
		footnoteCounts: /* @__PURE__ */ new Map(),
		footnoteOrder: [],
		handlers: {
			...xw,
			...n.handlers
		},
		one: o,
		options: n,
		patch: Qw,
		wrap: tT
	};
	return Jw(e, function(e) {
		if (e.type === "definition" || e.type === "footnoteDefinition") {
			let t = e.type === "definition" ? r : i, n = String(e.identifier).toUpperCase();
			t.has(n) || t.set(n, e);
		}
	}), a;
	function o(e, t) {
		let n = e.type, r = a.handlers[n];
		if (Yw.call(a.handlers, n) && r) return r(a, e, t);
		if (a.options.passThrough && a.options.passThrough.includes(n)) {
			if ("children" in e) {
				let { children: t, ...n } = e, r = Nw(n);
				return r.children = a.all(e), r;
			}
			return Nw(e);
		}
		return (a.options.unknownHandler || eT)(a, e, t);
	}
	function s(e) {
		let t = [];
		if ("children" in e) {
			let n = e.children, r = -1;
			for (; ++r < n.length;) {
				let i = a.one(n[r], e);
				if (i) {
					if (r && n[r - 1].type === "break" && (!Array.isArray(i) && i.type === "text" && (i.value = nT(i.value)), !Array.isArray(i) && i.type === "element")) {
						let e = i.children[0];
						e && e.type === "text" && (e.value = nT(e.value));
					}
					Array.isArray(i) ? t.push(...i) : t.push(i);
				}
			}
		}
		return t;
	}
}
function Qw(e, t) {
	e.position && (t.position = sb(e));
}
function $w(e, t) {
	let n = t;
	if (e && e.data) {
		let t = e.data.hName, r = e.data.hChildren, i = e.data.hProperties;
		typeof t == "string" && (n.type === "element" ? n.tagName = t : n = {
			type: "element",
			tagName: t,
			properties: {},
			children: "children" in n ? n.children : [n]
		}), n.type === "element" && i && Object.assign(n.properties, Nw(i)), "children" in n && n.children && r != null && (n.children = r);
	}
	return n;
}
function eT(e, t) {
	let n = t.data || {}, r = "value" in t && !(Yw.call(n, "hProperties") || Yw.call(n, "hChildren")) ? {
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
function tT(e, t) {
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
function nT(e) {
	let t = 0, n = e.charCodeAt(t);
	for (; n === 9 || n === 32;) t++, n = e.charCodeAt(t);
	return e.slice(t);
}
//#endregion
//#region ../../node_modules/mdast-util-to-hast/lib/index.js
function rT(e, t) {
	let n = Zw(e, t), r = n.one(e, void 0), i = Iw(n), a = Array.isArray(r) ? {
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
function iT(e, t) {
	return e && "run" in e ? async function(n, r) {
		let i = rT(n, {
			file: r,
			...t
		});
		await e.run(i, r);
	} : function(n, r) {
		return rT(n, {
			file: r,
			...e || t
		});
	};
}
//#endregion
//#region ../../node_modules/bail/index.js
function aT(e) {
	if (e) throw e;
}
//#endregion
//#region ../../node_modules/unified/node_modules/is-plain-obj/index.js
var oT = /* @__PURE__ */ F((/* @__PURE__ */ M(((e, t) => {
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
function sT(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
//#endregion
//#region ../../node_modules/trough/lib/index.js
function cT() {
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
			t = o, s ? lT(s, i)(...o) : r(null, ...o);
		}
	}
	function r(n) {
		if (typeof n != "function") throw TypeError("Expected `middelware` to be a function, not " + n);
		return e.push(n), t;
	}
}
function lT(e, t) {
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
var uT = {
	basename: dT,
	dirname: fT,
	extname: pT,
	join: mT,
	sep: "/"
};
function dT(e, t) {
	if (t !== void 0 && typeof t != "string") throw TypeError("\"ext\" argument must be a string");
	_T(e);
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
function fT(e) {
	if (_T(e), e.length === 0) return ".";
	let t = -1, n = e.length, r;
	for (; --n;) if (e.codePointAt(n) === 47) {
		if (r) {
			t = n;
			break;
		}
	} else r ||= !0;
	return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
}
function pT(e) {
	_T(e);
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
function mT(...e) {
	let t = -1, n;
	for (; ++t < e.length;) _T(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
	return n === void 0 ? "." : hT(n);
}
function hT(e) {
	_T(e);
	let t = e.codePointAt(0) === 47, n = gT(e, !t);
	return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
}
function gT(e, t) {
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
function _T(e) {
	if (typeof e != "string") throw TypeError("Path must be a string. Received " + JSON.stringify(e));
}
//#endregion
//#region ../../node_modules/vfile/lib/minproc.browser.js
var vT = { cwd: yT };
function yT() {
	return "/";
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.shared.js
function bT(e) {
	return !!(typeof e == "object" && e && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
}
//#endregion
//#region ../../node_modules/vfile/lib/minurl.browser.js
function xT(e) {
	if (typeof e == "string") e = new URL(e);
	else if (!bT(e)) {
		let t = /* @__PURE__ */ TypeError("The \"path\" argument must be of type string or an instance of URL. Received `" + e + "`");
		throw t.code = "ERR_INVALID_ARG_TYPE", t;
	}
	if (e.protocol !== "file:") {
		let e = /* @__PURE__ */ TypeError("The URL must be of scheme file");
		throw e.code = "ERR_INVALID_URL_SCHEME", e;
	}
	return ST(e);
}
function ST(e) {
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
var CT = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
], wT = class {
	constructor(e) {
		let t;
		t = e ? bT(e) ? { path: e } : typeof e == "string" || OT(e) ? { value: e } : e : {}, this.cwd = "cwd" in t ? "" : vT.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
		let n = -1;
		for (; ++n < CT.length;) {
			let e = CT[n];
			e in t && t[e] !== void 0 && t[e] !== null && (this[e] = e === "history" ? [...t[e]] : t[e]);
		}
		let r;
		for (r in t) CT.includes(r) || (this[r] = t[r]);
	}
	get basename() {
		return typeof this.path == "string" ? uT.basename(this.path) : void 0;
	}
	set basename(e) {
		ET(e, "basename"), TT(e, "basename"), this.path = uT.join(this.dirname || "", e);
	}
	get dirname() {
		return typeof this.path == "string" ? uT.dirname(this.path) : void 0;
	}
	set dirname(e) {
		DT(this.basename, "dirname"), this.path = uT.join(e || "", this.basename);
	}
	get extname() {
		return typeof this.path == "string" ? uT.extname(this.path) : void 0;
	}
	set extname(e) {
		if (TT(e, "extname"), DT(this.dirname, "extname"), e) {
			if (e.codePointAt(0) !== 46) throw Error("`extname` must start with `.`");
			if (e.includes(".", 1)) throw Error("`extname` cannot contain multiple dots");
		}
		this.path = uT.join(this.dirname, this.stem + (e || ""));
	}
	get path() {
		return this.history[this.history.length - 1];
	}
	set path(e) {
		bT(e) && (e = xT(e)), ET(e, "path"), this.path !== e && this.history.push(e);
	}
	get stem() {
		return typeof this.path == "string" ? uT.basename(this.path, this.extname) : void 0;
	}
	set stem(e) {
		ET(e, "stem"), TT(e, "stem"), this.path = uT.join(this.dirname || "", e + (this.extname || ""));
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
		let r = new fb(e, t, n);
		return this.path && (r.name = this.path + ":" + r.name, r.file = this.path), r.fatal = !1, this.messages.push(r), r;
	}
	toString(e) {
		return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
	}
};
function TT(e, t) {
	if (e && e.includes(uT.sep)) throw Error("`" + t + "` cannot be a path: did not expect `" + uT.sep + "`");
}
function ET(e, t) {
	if (!e) throw Error("`" + t + "` cannot be empty");
}
function DT(e, t) {
	if (!e) throw Error("Setting `" + t + "` requires `path` to be set too");
}
function OT(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/unified/lib/callable-instance.js
var kT = (function(e) {
	let t = this.constructor.prototype, n = t[e], r = function() {
		return n.apply(r, arguments);
	};
	return Object.setPrototypeOf(r, t), r;
}), AT = {}.hasOwnProperty, jT = new class e extends kT {
	constructor() {
		super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = cT();
	}
	copy() {
		let t = new e(), n = -1;
		for (; ++n < this.attachers.length;) {
			let e = this.attachers[n];
			t.use(...e);
		}
		return t.data((0, oT.default)(!0, {}, this.namespace)), t;
	}
	data(e, t) {
		return typeof e == "string" ? arguments.length === 2 ? (PT("data", this.frozen), this.namespace[e] = t, this) : AT.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (PT("data", this.frozen), this.namespace = e, this) : this.namespace;
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
		let t = LT(e), n = this.parser || this.Parser;
		return MT("parse", n), n(String(t), t);
	}
	process(e, t) {
		let n = this;
		return this.freeze(), MT("process", this.parser || this.Parser), NT("process", this.compiler || this.Compiler), t ? r(void 0, t) : new Promise(r);
		function r(r, i) {
			let a = LT(e), o = n.parse(a);
			n.run(o, a, function(e, t, r) {
				if (e || !t || !r) return s(e);
				let i = t, a = n.stringify(i, r);
				zT(a) ? r.value = a : r.result = a, s(e, r);
			});
			function s(e, n) {
				e || !n ? i(e) : r ? r(n) : t(void 0, n);
			}
		}
	}
	processSync(e) {
		let t = !1, n;
		return this.freeze(), MT("processSync", this.parser || this.Parser), NT("processSync", this.compiler || this.Compiler), this.process(e, r), IT("processSync", "process", t), n;
		function r(e, r) {
			t = !0, aT(e), n = r;
		}
	}
	run(e, t, n) {
		FT(e), this.freeze();
		let r = this.transformers;
		return !n && typeof t == "function" && (n = t, t = void 0), n ? i(void 0, n) : new Promise(i);
		function i(i, a) {
			let o = LT(t);
			r.run(e, o, s);
			function s(t, r, o) {
				let s = r || e;
				t ? a(t) : i ? i(s) : n(void 0, s, o);
			}
		}
	}
	runSync(e, t) {
		let n = !1, r;
		return this.run(e, t, i), IT("runSync", "run", n), r;
		function i(e, t) {
			aT(e), r = t, n = !0;
		}
	}
	stringify(e, t) {
		this.freeze();
		let n = LT(t), r = this.compiler || this.Compiler;
		return NT("stringify", r), FT(e), r(e, n);
	}
	use(e, ...t) {
		let n = this.attachers, r = this.namespace;
		if (PT("use", this.frozen), e != null) if (typeof e == "function") s(e, t);
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
			o(e.plugins), e.settings && (r.settings = (0, oT.default)(!0, r.settings, e.settings));
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
				sT(o) && sT(r) && (r = (0, oT.default)(!0, o, r)), n[i] = [
					e,
					r,
					...a
				];
			}
		}
	}
}().freeze();
function MT(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `parser`");
}
function NT(e, t) {
	if (typeof t != "function") throw TypeError("Cannot `" + e + "` without `compiler`");
}
function PT(e, t) {
	if (t) throw Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
}
function FT(e) {
	if (!sT(e) || typeof e.type != "string") throw TypeError("Expected node, got `" + e + "`");
}
function IT(e, t, n) {
	if (!n) throw Error("`" + e + "` finished async. Use `" + t + "` instead");
}
function LT(e) {
	return RT(e) ? e : new wT(e);
}
function RT(e) {
	return !!(e && typeof e == "object" && "message" in e && "messages" in e);
}
function zT(e) {
	return typeof e == "string" || BT(e);
}
function BT(e) {
	return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
}
//#endregion
//#region ../../node_modules/react-markdown/lib/index.js
var VT = [], HT = { allowDangerousHtml: !0 }, UT = /^(https?|ircs?|mailto|xmpp)$/i, WT = [
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
function GT(e) {
	let t = KT(e), n = qT(e);
	return JT(t.runSync(t.parse(n), n), e);
}
function KT(e) {
	let t = e.rehypePlugins || VT, n = e.remarkPlugins || VT, r = e.remarkRehypeOptions ? {
		...e.remarkRehypeOptions,
		...HT
	} : HT;
	return jT().use(WC).use(n).use(iT, r).use(t);
}
function qT(e) {
	let t = e.children || "", n = new wT();
	return typeof t == "string" ? n.value = t : "" + t, n;
}
function JT(e, t) {
	let n = t.allowedElements, r = t.allowElement, i = t.components, a = t.disallowedElements, o = t.skipHtml, s = t.unwrapDisallowed, c = t.urlTransform || YT;
	for (let e of WT) Object.hasOwn(t, e.from) && "" + e.from + (e.to ? "use `" + e.to + "` instead" : "remove it") + e.id;
	return Jw(e, l), bb(e, {
		Fragment: S,
		components: i,
		ignoreInvalidStyle: !0,
		jsx: C,
		jsxs: w,
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
			for (t in Hb) if (Object.hasOwn(Hb, t) && Object.hasOwn(e.properties, t)) {
				let n = e.properties[t], r = Hb[t];
				(r === null || r.includes(e.tagName)) && (e.properties[t] = c(String(n || ""), t, e));
			}
		}
		if (e.type === "element") {
			let o = n ? !n.includes(e.tagName) : a ? a.includes(e.tagName) : !1;
			if (!o && r && typeof t == "number" && (o = !r(e, t, i)), o && i && typeof t == "number") return s && e.children ? i.children.splice(t, 1, ...e.children) : i.children.splice(t, 1), t;
		}
	}
}
function YT(e) {
	let t = e.indexOf(":"), n = e.indexOf("?"), r = e.indexOf("#"), i = e.indexOf("/");
	return t === -1 || i !== -1 && t > i || n !== -1 && t > n || r !== -1 && t > r || UT.test(e.slice(0, t)) ? e : "";
}
//#endregion
//#region ../../node_modules/ccount/index.js
function XT(e, t) {
	let n = String(e);
	if (typeof t != "string") throw TypeError("Expected character");
	let r = 0, i = n.indexOf(t);
	for (; i !== -1;) r++, i = n.indexOf(t, i + t.length);
	return r;
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js
function ZT(e) {
	if (typeof e != "string") throw TypeError("Expected a string");
	return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
//#endregion
//#region ../../node_modules/mdast-util-find-and-replace/lib/index.js
function QT(e, t, n) {
	let r = Lw((n || {}).ignore || []), i = $T(t), a = -1;
	for (; ++a < i.length;) Kw(e, "text", o);
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
function $T(e) {
	let t = [];
	if (!Array.isArray(e)) throw TypeError("Expected find and replace tuple or list of tuples");
	let n = !e[0] || Array.isArray(e[0]) ? e : [e], r = -1;
	for (; ++r < n.length;) {
		let e = n[r];
		t.push([eE(e[0]), tE(e[1])]);
	}
	return t;
}
function eE(e) {
	return typeof e == "string" ? new RegExp(ZT(e), "g") : e;
}
function tE(e) {
	return typeof e == "function" ? e : function() {
		return e;
	};
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-autolink-literal/lib/index.js
var nE = "phrasing", rE = [
	"autolink",
	"link",
	"image",
	"label"
];
function iE() {
	return {
		transforms: [fE],
		enter: {
			literalAutolink: oE,
			literalAutolinkEmail: sE,
			literalAutolinkHttp: sE,
			literalAutolinkWww: sE
		},
		exit: {
			literalAutolink: dE,
			literalAutolinkEmail: uE,
			literalAutolinkHttp: cE,
			literalAutolinkWww: lE
		}
	};
}
function aE() {
	return { unsafe: [
		{
			character: "@",
			before: "[+\\-.\\w]",
			after: "[\\-.\\w]",
			inConstruct: nE,
			notInConstruct: rE
		},
		{
			character: ".",
			before: "[Ww]",
			after: "[\\-.\\w]",
			inConstruct: nE,
			notInConstruct: rE
		},
		{
			character: ":",
			before: "[ps]",
			after: "\\/",
			inConstruct: nE,
			notInConstruct: rE
		}
	] };
}
function oE(e) {
	this.enter({
		type: "link",
		title: null,
		url: "",
		children: []
	}, e);
}
function sE(e) {
	this.config.enter.autolinkProtocol.call(this, e);
}
function cE(e) {
	this.config.exit.autolinkProtocol.call(this, e);
}
function lE(e) {
	this.config.exit.data.call(this, e);
	let t = this.stack[this.stack.length - 1];
	t.type, t.url = "http://" + this.sliceSerialize(e);
}
function uE(e) {
	this.config.exit.autolinkEmail.call(this, e);
}
function dE(e) {
	this.exit(e);
}
function fE(e) {
	QT(e, [[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, pE], [/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu, mE]], { ignore: ["link", "linkReference"] });
}
function pE(e, t, n, r, i) {
	let a = "";
	if (!_E(i) || (/^w/i.test(t) && (n = t + n, t = "", a = "http://"), !hE(n))) return !1;
	let o = gE(n + r);
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
function mE(e, t, n, r) {
	return !_E(r, !0) || /[-\d_]$/.test(n) ? !1 : {
		type: "link",
		title: null,
		url: "mailto:" + t + "@" + n,
		children: [{
			type: "text",
			value: t + "@" + n
		}]
	};
}
function hE(e) {
	let t = e.split(".");
	return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
}
function gE(e) {
	let t = /[!"&'),.:;<>?\]}]+$/.exec(e);
	if (!t) return [e, void 0];
	e = e.slice(0, t.index);
	let n = t[0], r = n.indexOf(")"), i = XT(e, "("), a = XT(e, ")");
	for (; r !== -1 && i > a;) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), a++;
	return [e, n];
}
function _E(e, t) {
	let n = e.input.charCodeAt(e.index - 1);
	return (e.index === 0 || hx(n) || mx(n)) && (!t || n !== 47);
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-footnote/lib/index.js
DE.peek = EE;
function vE() {
	this.buffer();
}
function yE(e) {
	this.enter({
		type: "footnoteReference",
		identifier: "",
		label: ""
	}, e);
}
function bE() {
	this.buffer();
}
function xE(e) {
	this.enter({
		type: "footnoteDefinition",
		identifier: "",
		label: "",
		children: []
	}, e);
}
function SE(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = rx(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function CE(e) {
	this.exit(e);
}
function wE(e) {
	let t = this.resume(), n = this.stack[this.stack.length - 1];
	n.type, n.identifier = rx(this.sliceSerialize(e)).toLowerCase(), n.label = t;
}
function TE(e) {
	this.exit(e);
}
function EE() {
	return "[";
}
function DE(e, t, n, r) {
	let i = n.createTracker(r), a = i.move("[^"), o = n.enter("footnoteReference"), s = n.enter("reference");
	return a += i.move(n.safe(n.associationId(e), {
		after: "]",
		before: a
	})), s(), o(), a += i.move("]"), a;
}
function OE() {
	return {
		enter: {
			gfmFootnoteCallString: vE,
			gfmFootnoteCall: yE,
			gfmFootnoteDefinitionLabelString: bE,
			gfmFootnoteDefinition: xE
		},
		exit: {
			gfmFootnoteCallString: SE,
			gfmFootnoteCall: CE,
			gfmFootnoteDefinitionLabelString: wE,
			gfmFootnoteDefinition: TE
		}
	};
}
function kE(e) {
	let t = !1;
	return e && e.firstLineBlank && (t = !0), {
		handlers: {
			footnoteDefinition: n,
			footnoteReference: DE
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
		})), c(), o += a.move("]:"), e.children && e.children.length > 0 && (a.shift(4), o += a.move((t ? "\n" : " ") + r.indentLines(r.containerFlow(e, a.current()), t ? jE : AE))), s(), o;
	}
}
function AE(e, t, n) {
	return t === 0 ? e : jE(e, t, n);
}
function jE(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-strikethrough/lib/index.js
var ME = [
	"autolink",
	"destinationLiteral",
	"destinationRaw",
	"reference",
	"titleQuote",
	"titleApostrophe"
];
LE.peek = RE;
function NE() {
	return {
		canContainEols: ["delete"],
		enter: { strikethrough: FE },
		exit: { strikethrough: IE }
	};
}
function PE() {
	return {
		unsafe: [{
			character: "~",
			inConstruct: "phrasing",
			notInConstruct: ME
		}],
		handlers: { delete: LE }
	};
}
function FE(e) {
	this.enter({
		type: "delete",
		children: []
	}, e);
}
function IE(e) {
	this.exit(e);
}
function LE(e, t, n, r) {
	let i = n.createTracker(r), a = n.enter("strikethrough"), o = i.move("~~");
	return o += n.containerPhrasing(e, {
		...i.current(),
		before: o,
		after: "~"
	}), o += i.move("~~"), a(), o;
}
function RE() {
	return "~";
}
//#endregion
//#region ../../node_modules/markdown-table/index.js
function zE(e) {
	return e.length;
}
function BE(e, t) {
	let n = t || {}, r = (n.align || []).concat(), i = n.stringLength || zE, a = [], o = [], s = [], c = [], l = 0, u = -1;
	for (; ++u < e.length;) {
		let t = [], r = [], a = -1;
		for (e[u].length > l && (l = e[u].length); ++a < e[u].length;) {
			let o = VE(e[u][a]);
			if (n.alignDelimiters !== !1) {
				let e = i(o);
				r[a] = e, (c[a] === void 0 || e > c[a]) && (c[a] = e);
			}
			t.push(o);
		}
		o[u] = t, s[u] = r;
	}
	let d = -1;
	if (typeof r == "object" && "length" in r) for (; ++d < l;) a[d] = HE(r[d]);
	else {
		let e = HE(r);
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
function VE(e) {
	return e == null ? "" : String(e);
}
function HE(e) {
	let t = typeof e == "string" ? e.codePointAt(0) : 0;
	return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/blockquote.js
function UE(e, t, n, r) {
	let i = n.enter("blockquote"), a = n.createTracker(r);
	a.move("> "), a.shift(2);
	let o = n.indentLines(n.containerFlow(e, a.current()), WE);
	return i(), o;
}
function WE(e, t, n) {
	return ">" + (n ? "" : " ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/pattern-in-scope.js
function GE(e, t) {
	return KE(e, t.inConstruct, !0) && !KE(e, t.notInConstruct, !1);
}
function KE(e, t, n) {
	if (typeof t == "string" && (t = [t]), !t || t.length === 0) return n;
	let r = -1;
	for (; ++r < t.length;) if (e.includes(t[r])) return !0;
	return !1;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/break.js
function qE(e, t, n, r) {
	let i = -1;
	for (; ++i < n.unsafe.length;) if (n.unsafe[i].character === "\n" && GE(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
	return "\\\n";
}
//#endregion
//#region ../../node_modules/longest-streak/index.js
function JE(e, t) {
	let n = String(e), r = n.indexOf(t), i = r, a = 0, o = 0;
	if (typeof t != "string") throw TypeError("Expected substring");
	for (; r !== -1;) r === i ? ++a > o && (o = a) : a = 1, i = r + t.length, r = n.indexOf(t, i);
	return o;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-code-as-indented.js
function YE(e, t) {
	return !!(t.options.fences === !1 && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-fence.js
function XE(e) {
	let t = e.options.fence || "`";
	if (t !== "`" && t !== "~") throw Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/code.js
function ZE(e, t, n, r) {
	let i = XE(n), a = e.value || "", o = i === "`" ? "GraveAccent" : "Tilde";
	if (YE(e, n)) {
		let e = n.enter("codeIndented"), t = n.indentLines(a, QE);
		return e(), t;
	}
	let s = n.createTracker(r), c = i.repeat(Math.max(JE(a, i) + 1, 3)), l = n.enter("codeFenced"), u = s.move(c);
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
function QE(e, t, n) {
	return (n ? "" : "    ") + e;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-quote.js
function $E(e) {
	let t = e.options.quote || "\"";
	if (t !== "\"" && t !== "'") throw Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/definition.js
function eD(e, t, n, r) {
	let i = $E(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("definition"), s = n.enter("label"), c = n.createTracker(r), l = c.move("[");
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
function tD(e) {
	let t = e.options.emphasis || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-character-reference.js
function nD(e) {
	return "&#x" + e.toString(16).toUpperCase() + ";";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/encode-info.js
function rD(e, t, n) {
	let r = Tx(e), i = Tx(t);
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
iD.peek = aD;
function iD(e, t, n, r) {
	let i = tD(n), a = n.enter("emphasis"), o = n.createTracker(r), s = o.move(i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = rD(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = nD(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = rD(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + nD(d));
	let p = o.move(i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function aD(e, t, n) {
	return n.options.emphasis || "*";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-heading-as-setext.js
function oD(e, t) {
	let n = !1;
	return Jw(e, function(e) {
		if ("value" in e && /\r?\n|\r/.test(e.value) || e.type === "break") return n = !0, !1;
	}), !!((!e.depth || e.depth < 3) && Wb(e) && (t.options.setext || n));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/heading.js
function sD(e, t, n, r) {
	let i = Math.max(Math.min(6, e.depth || 1), 1), a = n.createTracker(r);
	if (oD(e, n)) {
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
	return /^[\t ]/.test(l) && (l = nD(l.charCodeAt(0)) + l.slice(1)), l = l ? o + " " + l : o, n.options.closeAtx && (l += " " + o), c(), s(), l;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/html.js
cD.peek = lD;
function cD(e) {
	return e.value || "";
}
function lD() {
	return "<";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image.js
uD.peek = dD;
function uD(e, t, n, r) {
	let i = $E(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.enter("image"), s = n.enter("label"), c = n.createTracker(r), l = c.move("![");
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
function dD() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/image-reference.js
fD.peek = pD;
function fD(e, t, n, r) {
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
function pD() {
	return "!";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/inline-code.js
mD.peek = hD;
function mD(e, t, n) {
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
function hD() {
	return "`";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/format-link-as-autolink.js
function gD(e, t) {
	let n = Wb(e);
	return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link.js
_D.peek = vD;
function _D(e, t, n, r) {
	let i = $E(n), a = i === "\"" ? "Quote" : "Apostrophe", o = n.createTracker(r), s, c;
	if (gD(e, n)) {
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
function vD(e, t, n) {
	return gD(e, n) ? "<" : "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/link-reference.js
yD.peek = bD;
function yD(e, t, n, r) {
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
function bD() {
	return "[";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet.js
function xD(e) {
	let t = e.options.bullet || "*";
	if (t !== "*" && t !== "+" && t !== "-") throw Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-other.js
function SD(e) {
	let t = xD(e), n = e.options.bulletOther;
	if (!n) return t === "*" ? "-" : "*";
	if (n !== "*" && n !== "+" && n !== "-") throw Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
	if (n === t) throw Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
	return n;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-bullet-ordered.js
function CD(e) {
	let t = e.options.bulletOrdered || ".";
	if (t !== "." && t !== ")") throw Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule.js
function wD(e) {
	let t = e.options.rule || "*";
	if (t !== "*" && t !== "-" && t !== "_") throw Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list.js
function TD(e, t, n, r) {
	let i = n.enter("list"), a = n.bulletCurrent, o = e.ordered ? CD(n) : xD(n), s = e.ordered ? o === "." ? ")" : "." : SD(n), c = t && n.bulletLastUsed ? o === n.bulletLastUsed : !1;
	if (!e.ordered) {
		let t = e.children ? e.children[0] : void 0;
		if ((o === "*" || o === "-") && t && (!t.children || !t.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (c = !0), wD(n) === o && t) {
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
function ED(e) {
	let t = e.options.listItemIndent || "one";
	if (t !== "tab" && t !== "one" && t !== "mixed") throw Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/list-item.js
function DD(e, t, n, r) {
	let i = ED(n), a = n.bulletCurrent || xD(n);
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
function OD(e, t, n, r) {
	let i = n.enter("paragraph"), a = n.enter("phrasing"), o = n.containerPhrasing(e, r);
	return a(), i(), o;
}
//#endregion
//#region ../../node_modules/mdast-util-phrasing/lib/index.js
var kD = Lw([
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
function AD(e, t, n, r) {
	return (e.children.some(function(e) {
		return kD(e);
	}) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-strong.js
function jD(e) {
	let t = e.options.strong || "*";
	if (t !== "*" && t !== "_") throw Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/strong.js
MD.peek = ND;
function MD(e, t, n, r) {
	let i = jD(n), a = n.enter("strong"), o = n.createTracker(r), s = o.move(i + i), c = o.move(n.containerPhrasing(e, {
		after: i,
		before: s,
		...o.current()
	})), l = c.charCodeAt(0), u = rD(r.before.charCodeAt(r.before.length - 1), l, i);
	u.inside && (c = nD(l) + c.slice(1));
	let d = c.charCodeAt(c.length - 1), f = rD(r.after.charCodeAt(0), d, i);
	f.inside && (c = c.slice(0, -1) + nD(d));
	let p = o.move(i + i);
	return a(), n.attentionEncodeSurroundingInfo = {
		after: f.outside,
		before: u.outside
	}, s + c + p;
}
function ND(e, t, n) {
	return n.options.strong || "*";
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/text.js
function PD(e, t, n, r) {
	return n.safe(e.value, r);
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/util/check-rule-repetition.js
function FD(e) {
	let t = e.options.ruleRepetition || 3;
	if (t < 3) throw Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
	return t;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/thematic-break.js
function ID(e, t, n) {
	let r = (wD(n) + (n.options.ruleSpaces ? " " : "")).repeat(FD(n));
	return n.options.ruleSpaces ? r.slice(0, -1) : r;
}
//#endregion
//#region ../../node_modules/mdast-util-to-markdown/lib/handle/index.js
var LD = {
	blockquote: UE,
	break: qE,
	code: ZE,
	definition: eD,
	emphasis: iD,
	hardBreak: qE,
	heading: sD,
	html: cD,
	image: uD,
	imageReference: fD,
	inlineCode: mD,
	link: _D,
	linkReference: yD,
	list: TD,
	listItem: DD,
	paragraph: OD,
	root: AD,
	strong: MD,
	text: PD,
	thematicBreak: ID
};
//#endregion
//#region ../../node_modules/mdast-util-gfm-table/lib/index.js
function RD() {
	return {
		enter: {
			table: zD,
			tableData: UD,
			tableHeader: UD,
			tableRow: VD
		},
		exit: {
			codeText: WD,
			table: BD,
			tableData: HD,
			tableHeader: HD,
			tableRow: HD
		}
	};
}
function zD(e) {
	let t = e._align;
	this.enter({
		type: "table",
		align: t.map(function(e) {
			return e === "none" ? null : e;
		}),
		children: []
	}, e), this.data.inTable = !0;
}
function BD(e) {
	this.exit(e), this.data.inTable = void 0;
}
function VD(e) {
	this.enter({
		type: "tableRow",
		children: []
	}, e);
}
function HD(e) {
	this.exit(e);
}
function UD(e) {
	this.enter({
		type: "tableCell",
		children: []
	}, e);
}
function WD(e) {
	let t = this.resume();
	this.data.inTable && (t = t.replace(/\\([\\|])/g, GD));
	let n = this.stack[this.stack.length - 1];
	n.type, n.value = t, this.exit(e);
}
function GD(e, t) {
	return t === "|" ? t : e;
}
function KD(e) {
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
		return BE(e, {
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
		let r = LD.inlineCode(e, t, n);
		return n.stack.includes("tableCell") && (r = r.replace(/\|/g, "\\$&")), r;
	}
}
//#endregion
//#region ../../node_modules/mdast-util-gfm-task-list-item/lib/index.js
function qD() {
	return { exit: {
		taskListCheckValueChecked: YD,
		taskListCheckValueUnchecked: YD,
		paragraph: XD
	} };
}
function JD() {
	return {
		unsafe: [{
			atBreak: !0,
			character: "-",
			after: "[:|-]"
		}],
		handlers: { listItem: ZD }
	};
}
function YD(e) {
	let t = this.stack[this.stack.length - 2];
	t.type, t.checked = e.type === "taskListCheckValueChecked";
}
function XD(e) {
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
function ZD(e, t, n, r) {
	let i = e.children[0], a = typeof e.checked == "boolean" && i && i.type === "paragraph", o = "[" + (e.checked ? "x" : " ") + "] ", s = n.createTracker(r);
	a && s.move(o);
	let c = LD.listItem(e, t, n, {
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
function QD() {
	return [
		iE(),
		OE(),
		NE(),
		RD(),
		qD()
	];
}
function $D(e) {
	return { extensions: [
		aE(),
		kE(e),
		PE(),
		KD(e),
		JD()
	] };
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-autolink-literal/lib/syntax.js
var eO = {
	tokenize: mO,
	partial: !0
}, tO = {
	tokenize: hO,
	partial: !0
}, nO = {
	tokenize: gO,
	partial: !0
}, rO = {
	tokenize: _O,
	partial: !0
}, iO = {
	tokenize: vO,
	partial: !0
}, aO = {
	name: "wwwAutolink",
	tokenize: fO,
	previous: yO
}, oO = {
	name: "protocolAutolink",
	tokenize: pO,
	previous: bO
}, sO = {
	name: "emailAutolink",
	tokenize: dO,
	previous: xO
}, cO = {};
function lO() {
	return { text: cO };
}
for (var uO = 48; uO < 123;) cO[uO] = sO, uO++, uO === 58 ? uO = 65 : uO === 91 && (uO = 97);
cO[43] = sO, cO[45] = sO, cO[46] = sO, cO[95] = sO, cO[72] = [sO, oO], cO[104] = [sO, oO], cO[87] = [sO, aO], cO[119] = [sO, aO];
function dO(e, t, n) {
	let r = this, i, a;
	return o;
	function o(t) {
		return !SO(t) || !xO.call(r, r.previous) || CO(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), s(t));
	}
	function s(t) {
		return SO(t) ? (e.consume(t), s) : t === 64 ? (e.consume(t), c) : n(t);
	}
	function c(t) {
		return t === 46 ? e.check(iO, u, l)(t) : t === 45 || t === 95 || ax(t) ? (a = !0, e.consume(t), c) : u(t);
	}
	function l(t) {
		return e.consume(t), i = !0, c;
	}
	function u(o) {
		return a && i && ix(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(o)) : n(o);
	}
}
function fO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return t !== 87 && t !== 119 || !yO.call(r, r.previous) || CO(r.events) ? n(t) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(eO, e.attempt(tO, e.attempt(nO, a), n), n)(t));
	}
	function a(n) {
		return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(n);
	}
}
function pO(e, t, n) {
	let r = this, i = "", a = !1;
	return o;
	function o(t) {
		return (t === 72 || t === 104) && bO.call(r, r.previous) && !CO(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(t), e.consume(t), s) : n(t);
	}
	function s(t) {
		if (ix(t) && i.length < 5) return i += String.fromCodePoint(t), e.consume(t), s;
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
		return t === null || sx(t) || fx(t) || hx(t) || mx(t) ? n(t) : e.attempt(tO, e.attempt(nO, u), n)(t);
	}
	function u(n) {
		return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(n);
	}
}
function mO(e, t, n) {
	let r = 0;
	return i;
	function i(t) {
		return (t === 87 || t === 119) && r < 3 ? (r++, e.consume(t), i) : t === 46 && r === 3 ? (e.consume(t), a) : n(t);
	}
	function a(e) {
		return e === null ? n(e) : t(e);
	}
}
function hO(e, t, n) {
	let r, i, a;
	return o;
	function o(t) {
		return t === 46 || t === 95 ? e.check(rO, c, s)(t) : t === null || fx(t) || hx(t) || t !== 45 && mx(t) ? c(t) : (a = !0, e.consume(t), o);
	}
	function s(t) {
		return t === 95 ? r = !0 : (i = r, r = void 0), e.consume(t), o;
	}
	function c(e) {
		return i || r || !a ? n(e) : t(e);
	}
}
function gO(e, t) {
	let n = 0, r = 0;
	return i;
	function i(o) {
		return o === 40 ? (n++, e.consume(o), i) : o === 41 && r < n ? a(o) : o === 33 || o === 34 || o === 38 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 60 || o === 63 || o === 93 || o === 95 || o === 126 ? e.check(rO, t, a)(o) : o === null || fx(o) || hx(o) ? t(o) : (e.consume(o), i);
	}
	function a(t) {
		return t === 41 && r++, e.consume(t), i;
	}
}
function _O(e, t, n) {
	return r;
	function r(o) {
		return o === 33 || o === 34 || o === 39 || o === 41 || o === 42 || o === 44 || o === 46 || o === 58 || o === 59 || o === 63 || o === 95 || o === 126 ? (e.consume(o), r) : o === 38 ? (e.consume(o), a) : o === 93 ? (e.consume(o), i) : o === 60 || o === null || fx(o) || hx(o) ? t(o) : n(o);
	}
	function i(e) {
		return e === null || e === 40 || e === 91 || fx(e) || hx(e) ? t(e) : r(e);
	}
	function a(e) {
		return ix(e) ? o(e) : n(e);
	}
	function o(t) {
		return t === 59 ? (e.consume(t), r) : ix(t) ? (e.consume(t), o) : n(t);
	}
}
function vO(e, t, n) {
	return r;
	function r(t) {
		return e.consume(t), i;
	}
	function i(e) {
		return ax(e) ? n(e) : t(e);
	}
}
function yO(e) {
	return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || fx(e);
}
function bO(e) {
	return !ix(e);
}
function xO(e) {
	return !(e === 47 || SO(e));
}
function SO(e) {
	return e === 43 || e === 45 || e === 46 || e === 95 || ax(e);
}
function CO(e) {
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
var wO = {
	tokenize: MO,
	partial: !0
};
function TO() {
	return {
		document: { 91: {
			name: "gfmFootnoteDefinition",
			tokenize: kO,
			continuation: { tokenize: AO },
			exit: jO
		} },
		text: {
			91: {
				name: "gfmFootnoteCall",
				tokenize: OO
			},
			93: {
				name: "gfmPotentialFootnoteCall",
				add: "after",
				tokenize: EO,
				resolveTo: DO
			}
		}
	};
}
function EO(e, t, n) {
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
		let s = rx(r.sliceSerialize({
			start: o.end,
			end: r.now()
		}));
		return s.codePointAt(0) !== 94 || !a.includes(s.slice(1)) ? n(i) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(i), e.exit("gfmFootnoteCallLabelMarker"), t(i));
	}
}
function DO(e, t) {
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
function OO(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a = 0, o;
	return s;
	function s(t) {
		return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(t), e.exit("gfmFootnoteCallLabelMarker"), c;
	}
	function c(t) {
		return t === 94 ? (e.enter("gfmFootnoteCallMarker"), e.consume(t), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l) : n(t);
	}
	function l(s) {
		if (a > 999 || s === 93 && !o || s === null || s === 91 || fx(s)) return n(s);
		if (s === 93) {
			e.exit("chunkString");
			let a = e.exit("gfmFootnoteCallString");
			return i.includes(rx(r.sliceSerialize(a))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(s), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(s);
		}
		return fx(s) || (o = !0), a++, e.consume(s), s === 92 ? u : l;
	}
	function u(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), a++, l) : l(t);
	}
}
function kO(e, t, n) {
	let r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []), a, o = 0, s;
	return c;
	function c(t) {
		return e.enter("gfmFootnoteDefinition")._container = !0, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
	}
	function l(t) {
		return t === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", u) : n(t);
	}
	function u(t) {
		if (o > 999 || t === 93 && !s || t === null || t === 91 || fx(t)) return n(t);
		if (t === 93) {
			e.exit("chunkString");
			let n = e.exit("gfmFootnoteDefinitionLabelString");
			return a = rx(r.sliceSerialize(n)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(t), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), f;
		}
		return fx(t) || (s = !0), o++, e.consume(t), t === 92 ? d : u;
	}
	function d(t) {
		return t === 91 || t === 92 || t === 93 ? (e.consume(t), o++, u) : u(t);
	}
	function f(t) {
		return t === 58 ? (e.enter("definitionMarker"), e.consume(t), e.exit("definitionMarker"), i.includes(a) || i.push(a), vx(e, p, "gfmFootnoteDefinitionWhitespace")) : n(t);
	}
	function p(e) {
		return t(e);
	}
}
function AO(e, t, n) {
	return e.check(Nx, t, e.attempt(wO, t, n));
}
function jO(e) {
	e.exit("gfmFootnoteDefinition");
}
function MO(e, t, n) {
	let r = this;
	return vx(e, i, "gfmFootnoteDefinitionIndent", 5);
	function i(e) {
		let i = r.events[r.events.length - 1];
		return i && i[1].type === "gfmFootnoteDefinitionIndent" && i[2].sliceSerialize(i[1], !0).length === 4 ? t(e) : n(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-strikethrough/lib/syntax.js
function NO(e) {
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
				s && Xb(o, o.length, 0, Ex(s, e.slice(r + 1, n), t)), Xb(o, o.length, 0, [
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
				]), Xb(e, r - 1, n - r + 3, o), n = r + o.length - 2;
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
			let s = Tx(i);
			if (a === 126) return o > 1 ? r(a) : (e.consume(a), o++, c);
			if (o < 2 && !t) return r(a);
			let l = e.exit("strikethroughSequenceTemporary"), u = Tx(a);
			return l._open = !u || u === 2 && !!s, l._close = !s || s === 2 && !!u, n(a);
		}
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-table/lib/edit-map.js
var PO = class {
	constructor() {
		this.map = [];
	}
	add(e, t, n) {
		FO(this, e, t, n);
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
function FO(e, t, n, r) {
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
function IO(e, t) {
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
function LO() {
	return { flow: { null: {
		name: "table",
		tokenize: RO,
		resolveAll: zO
	} } };
}
function RO(e, t, n) {
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
		return t === null ? n(t) : dx(t) ? a > 1 ? (a = 0, r.interrupt = !0, e.exit("tableRow"), e.enter("lineEnding"), e.consume(t), e.exit("lineEnding"), p) : n(t) : px(t) ? vx(e, u, "whitespace")(t) : (a += 1, o && (o = !1, i += 1), t === 124 ? (e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), o = !0, u) : (e.enter("data"), d(t)));
	}
	function d(t) {
		return t === null || t === 124 || fx(t) ? (e.exit("data"), u(t)) : (e.consume(t), t === 92 ? f : d);
	}
	function f(t) {
		return t === 92 || t === 124 ? (e.consume(t), d) : d(t);
	}
	function p(t) {
		return r.interrupt = !1, r.parser.lazy[r.now().line] ? n(t) : (e.enter("tableDelimiterRow"), o = !1, px(t) ? vx(e, m, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(t) : m(t));
	}
	function m(t) {
		return t === 45 || t === 58 ? g(t) : t === 124 ? (o = !0, e.enter("tableCellDivider"), e.consume(t), e.exit("tableCellDivider"), h) : x(t);
	}
	function h(t) {
		return px(t) ? vx(e, g, "whitespace")(t) : g(t);
	}
	function g(t) {
		return t === 58 ? (a += 1, o = !0, e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), _) : t === 45 ? (a += 1, _(t)) : t === null || dx(t) ? b(t) : x(t);
	}
	function _(t) {
		return t === 45 ? (e.enter("tableDelimiterFiller"), v(t)) : x(t);
	}
	function v(t) {
		return t === 45 ? (e.consume(t), v) : t === 58 ? (o = !0, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(t), e.exit("tableDelimiterMarker"), y) : (e.exit("tableDelimiterFiller"), y(t));
	}
	function y(t) {
		return px(t) ? vx(e, b, "whitespace")(t) : b(t);
	}
	function b(n) {
		return n === 124 ? m(n) : n === null || dx(n) ? !o || i !== a ? x(n) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(n)) : x(n);
	}
	function x(e) {
		return n(e);
	}
	function S(t) {
		return e.enter("tableRow"), C(t);
	}
	function C(n) {
		return n === 124 ? (e.enter("tableCellDivider"), e.consume(n), e.exit("tableCellDivider"), C) : n === null || dx(n) ? (e.exit("tableRow"), t(n)) : px(n) ? vx(e, C, "whitespace")(n) : (e.enter("data"), w(n));
	}
	function w(t) {
		return t === null || t === 124 || fx(t) ? (e.exit("data"), C(t)) : (e.consume(t), t === 92 ? T : w);
	}
	function T(t) {
		return t === 92 || t === 124 ? (e.consume(t), w) : w(t);
	}
}
function zO(e, t) {
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
	], s = !1, c = 0, l, u, d, f = new PO();
	for (; ++n < e.length;) {
		let p = e[n], m = p[1];
		p[0] === "enter" ? m.type === "tableHead" ? (s = !1, c !== 0 && (VO(f, t, c, l, u), u = void 0, c = 0), l = {
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
		]])), i = m.type === "tableDelimiterRow" ? 2 : u ? 3 : 1) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") ? (r = !1, o[2] === 0 && (a[1] !== 0 && (o[0] = o[1], d = BO(f, t, a, i, void 0, d), a = [
			0,
			0,
			0,
			0
		]), o[2] = n)) : m.type === "tableCellDivider" && (r ? r = !1 : (a[1] !== 0 && (o[0] = o[1], d = BO(f, t, a, i, void 0, d)), a = o, o = [
			a[1],
			n,
			0,
			0
		])) : m.type === "tableHead" ? (s = !0, c = n) : m.type === "tableRow" || m.type === "tableDelimiterRow" ? (c = n, a[1] === 0 ? o[1] !== 0 && (d = BO(f, t, o, i, n, d)) : (o[0] = o[1], d = BO(f, t, a, i, n, d)), i = 0) : i && (m.type === "data" || m.type === "tableDelimiterMarker" || m.type === "tableDelimiterFiller") && (o[3] = n);
	}
	for (c !== 0 && VO(f, t, c, l, u), f.consume(t.events), n = -1; ++n < t.events.length;) {
		let e = t.events[n];
		e[0] === "enter" && e[1].type === "table" && (e[1]._align = IO(t.events, n));
	}
	return e;
}
function BO(e, t, n, r, i, a) {
	let o = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData";
	n[0] !== 0 && (a.end = Object.assign({}, HO(t.events, n[0])), e.add(n[0], 0, [[
		"exit",
		a,
		t
	]]));
	let s = HO(t.events, n[1]);
	if (a = {
		type: o,
		start: Object.assign({}, s),
		end: Object.assign({}, s)
	}, e.add(n[1], 0, [[
		"enter",
		a,
		t
	]]), n[2] !== 0) {
		let i = HO(t.events, n[2]), a = HO(t.events, n[3]), o = {
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
	return i !== void 0 && (a.end = Object.assign({}, HO(t.events, i)), e.add(i, 0, [[
		"exit",
		a,
		t
	]]), a = void 0), a;
}
function VO(e, t, n, r, i) {
	let a = [], o = HO(t.events, n);
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
function HO(e, t) {
	let n = e[t], r = n[0] === "enter" ? "start" : "end";
	return n[1][r];
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm-task-list-item/lib/syntax.js
var UO = {
	name: "tasklistCheck",
	tokenize: GO
};
function WO() {
	return { text: { 91: UO } };
}
function GO(e, t, n) {
	let r = this;
	return i;
	function i(t) {
		return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(t) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), a);
	}
	function a(t) {
		return fx(t) ? (e.enter("taskListCheckValueUnchecked"), e.consume(t), e.exit("taskListCheckValueUnchecked"), o) : t === 88 || t === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(t), e.exit("taskListCheckValueChecked"), o) : n(t);
	}
	function o(t) {
		return t === 93 ? (e.enter("taskListCheckMarker"), e.consume(t), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), s) : n(t);
	}
	function s(r) {
		return dx(r) ? t(r) : px(r) ? e.check({ tokenize: KO }, t, n)(r) : n(r);
	}
}
function KO(e, t, n) {
	return vx(e, r, "whitespace");
	function r(e) {
		return e === null ? n(e) : t(e);
	}
}
//#endregion
//#region ../../node_modules/micromark-extension-gfm/index.js
function qO(e) {
	return $b([
		lO(),
		TO(),
		NO(e),
		LO(),
		WO()
	]);
}
//#endregion
//#region ../../node_modules/remark-gfm/lib/index.js
var JO = {};
function YO(e) {
	let t = this, n = e || JO, r = t.data(), i = r.micromarkExtensions ||= [], a = r.fromMarkdownExtensions ||= [], o = r.toMarkdownExtensions ||= [];
	i.push(qO(n)), a.push(QD()), o.push($D(n));
}
//#endregion
//#region ../ui/src/lib/markdown/extractText.ts
var XO = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? e.map(XO).join("") : l(e) ? XO(e.props.children ?? "") : "", ZO = (e) => {
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
}, QO = ({ resetDelayMs: e = 1200 } = {}) => {
	let [t, n] = b("idle"), r = d((e) => {
		if (!e) return;
		let t = typeof navigator > "u" ? null : navigator.clipboard;
		if (!t || typeof t.writeText != "function") {
			n(ZO(e) ? "copied" : "error");
			return;
		}
		n("copied"), t.writeText(e).catch(() => {
			n(ZO(e) ? "copied" : "error");
		});
	}, []);
	return p(() => {
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
}, $O = ({ children: e, textToCopy: t, preProps: n }) => {
	let { status: r, copy: i } = QO(), a = /* @__PURE__ */ C(Ju, {});
	return r === "copied" ? a = /* @__PURE__ */ C(Uu, {}) : r === "error" && (a = /* @__PURE__ */ C(Vu, {})), /* @__PURE__ */ w(hn, {
		variant: "surface",
		size: "flush",
		"data-theme": "neutral",
		className: "relative max-w-full",
		children: [/* @__PURE__ */ C("span", {
			className: "absolute right-2 top-2",
			children: /* @__PURE__ */ C(un, {
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
		}), /* @__PURE__ */ C("pre", {
			className: "max-w-full overflow-x-auto whitespace-pre p-4 font-mono text-sm",
			...n,
			children: e
		})]
	});
}, ek = (e) => {
	if (!e) return null;
	let t = e.match(/language-([\w-]+)/);
	return t ? t[1] : null;
}, tk = (e) => (t) => {
	let { inline: n, children: r, className: i, node: a, ...o } = t, c = XO(r), l = ek(i), u = o, d = c.includes("\n");
	return n ?? (!l && !d) ? s(Df, {
		...o,
		as: "code",
		theme: "neutral"
	}, r) : e ? e({
		children: r,
		textToCopy: c,
		preProps: u,
		language: l
	}) : /* @__PURE__ */ C($O, {
		textToCopy: c,
		preProps: u,
		children: r
	});
}, nk = tk(), rk = (e, t) => ({ children: n, node: r, ...i }) => s(e, {
	...i,
	className: Q("font-semibold", t)
}, n), ik = {
	h1: rk("h2", "text-xl"),
	h2: rk("h3", "text-lg"),
	pre: ({ children: e }) => e,
	a: ({ children: e, node: t, ...n }) => /* @__PURE__ */ w("a", {
		className: "inline text-[var(--pc-color-text)] underline underline-offset-2",
		target: "_blank",
		rel: "noreferrer noopener",
		...n,
		children: [e, /* @__PURE__ */ C("span", {
			"aria-hidden": "true",
			className: "ml-1 inline-flex align-middle",
			children: /* @__PURE__ */ C(Xu, {})
		})]
	}),
	h3: rk("h4"),
	h4: rk("h5"),
	h5: rk("h6"),
	h6: rk("h6"),
	p: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ C("p", {
		...r,
		className: Q("text-sm @md:text-base text-[var(--pc-color-text-muted)]", n),
		children: e
	}),
	strong: ({ children: e, node: t, className: n, ...r }) => /* @__PURE__ */ C("strong", {
		...r,
		className: Q("font-medium text-[var(--pc-color-text)]", n),
		children: e
	}),
	ul: ({ children: e, node: t, ...n }) => /* @__PURE__ */ C("ul", {
		className: "list-disc pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		...n,
		children: e
	}),
	ol: ({ children: e, node: t, ...n }) => /* @__PURE__ */ C("ol", {
		className: "list-decimal pl-5 space-y-1 marker:text-[var(--pc-color-text-muted)]",
		style: { listStyleType: "decimal" },
		type: "1",
		...n,
		children: e
	}),
	li: ({ children: e, ...t }) => {
		let { className: r, ...i } = t, a = n.toArray(e).some((e) => l(e) && e.type === "a"), o = [
			"text-sm @md:text-base",
			"text-[var(--pc-color-text-muted)]",
			"[&>p:first-child]:inline",
			"[&>p+p]:mt-2",
			"[&>p+ul]:mt-2 [&>p+ol]:mt-2 [&>p+pre]:mt-2 [&>p+table]:mt-2",
			"[&>ul+p]:mt-2 [&>ol+p]:mt-2 [&>pre+p]:mt-2 [&>table+p]:mt-2",
			"[&>ul+pre]:mt-2 [&>ol+pre]:mt-2 [&>pre+ul]:mt-2 [&>pre+ol]:mt-2"
		], s = a ? "transition-colors" : void 0;
		return /* @__PURE__ */ C("li", {
			...i,
			className: Q(o, s, r),
			children: e
		});
	},
	code: nk
}, ak = (e, t) => ({
	...ik,
	code: t?.codeBlockRenderer ? tk(t.codeBlockRenderer) : ik.code,
	...e ?? {}
});
function ok({ content: e, components: t, className: n, codeBlockRenderer: r }) {
	return /* @__PURE__ */ C("div", {
		className: Q("w-full max-w-full min-w-0", "[&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words [&_h5]:break-words [&_h6]:break-words", "[&_p]:break-words [&_li]:break-words [&_a]:break-words [&_code]:break-words", "[&_h1]:mt-8 [&_h1:first-child]:mt-0", "[&_h2]:mt-7 [&_h2:first-child]:mt-0", "[&_h3]:mt-5 [&_h3:first-child]:mt-0", "[&_h4]:mt-5 [&_h4:first-child]:mt-0", "[&_h5]:mt-4 [&_h5:first-child]:mt-0", "[&_h6]:mt-4 [&_h6:first-child]:mt-0", "[&_h1+h1]:mt-3 [&_h1+h2]:mt-3", "[&_h2+h2]:mt-3 [&_h2+h3]:mt-3", "[&_h3+h3]:mt-2 [&_h3+h4]:mt-2", "[&_h4+h4]:mt-2 [&_h4+h5]:mt-2", "[&_h5+h5]:mt-2 [&_h5+h6]:mt-2", "[&_h6+h6]:mt-2", "[&_h1+*]:mt-2 [&_h2+*]:mt-2 [&_h3+*]:mt-2 [&_h4+*]:mt-2 [&_h5+*]:mt-2 [&_h6+*]:mt-2", "[&_h3+p]:mt-1.5", "[&_p+p]:mt-2 [&_p+ul]:mt-2 [&_p+ol]:mt-2 [&_p+pre]:mt-2 [&_p+table]:mt-2", "[&_ul+p]:mt-2 [&_ol+p]:mt-2 [&_pre+p]:mt-2 [&_table+p]:mt-2", "[&_ul+pre]:mt-2 [&_ol+pre]:mt-2 [&_pre+ul]:mt-2 [&_pre+ol]:mt-2", n),
		children: /* @__PURE__ */ C(GT, {
			remarkPlugins: [YO],
			components: ak(t, { codeBlockRenderer: r }),
			children: e
		})
	});
}
//#endregion
//#region ../ui/src/lib/cashierFormLayout.ts
var sk = [
	"grid",
	"grid-cols-1",
	"items-start",
	"gap-x-2",
	"gap-y-2"
].join(" "), ck = /* @__PURE__ */ M(((e, t) => {
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
})), lk = /* @__PURE__ */ M(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.clone = void 0;
	function t(e) {
		return e ? JSON.parse(JSON.stringify(e)) : null;
	}
	e.clone = t;
})), uk = /* @__PURE__ */ M(((e) => {
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
})), dk = /* @__PURE__ */ M(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.addMatchingCardsToResults = void 0;
	var t = lk(), n = uk();
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
})), fk = /* @__PURE__ */ M(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.isValidInputType = void 0;
	function t(e) {
		return typeof e == "string" || e instanceof String;
	}
	e.isValidInputType = t;
})), pk = /* @__PURE__ */ M(((e) => {
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
})), mk = /* @__PURE__ */ F((/* @__PURE__ */ M(((e, t) => {
	var n = e && e.__assign || function() {
		return n = Object.assign || function(e) {
			for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
			return e;
		}, n.apply(this, arguments);
	}, r = ck(), i = dk(), a = fk(), o = pk(), s = lk(), c = {}, l = {
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
})))(), 1), hk = new Set([
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
]), gk = (e) => {
	if (e) return hk.has(e) ? e : void 0;
}, _k = (e) => {
	let t = e?.trim();
	if (!t) return;
	let n = (0, mk.default)(t);
	if (n.length === 0) return;
	let r = n[0];
	if (!((r.matchStrength ?? 0) <= 0)) return gk(typeof r.type == "string" ? r.type : void 0);
};
["relative z-10 grid grid-cols-2 items-start gap-2 p-1"].join(" ");
//#endregion
//#region ../ui/src/lib/useSlidingIndicator.ts
function vk({ activeKey: e, dependencies: t = [] }) {
	let n = y(null), r = y(/* @__PURE__ */ new Map()), i = y(null), [a, o] = b({
		left: 0,
		top: 0,
		width: 0,
		height: 0,
		ready: !1
	}), s = d((e) => {
		n.current = e;
	}, []), c = d(() => {
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
	}, [e]), l = d((e) => (t) => {
		let n = r.current.get(e);
		i.current && n && n !== t && i.current.unobserve(n), r.current.set(e, t), i.current && t && i.current.observe(t);
	}, []);
	return g(() => {
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
function yk(e) {
	let [t, n] = b(!1);
	return p(() => {
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
var bk = 2, xk = 8, Sk = 120, Ck = "relative inline-block min-w-0 max-w-full align-top", wk = J("relative inline-flex max-w-full items-center rounded-[var(--pc-radius-full)]", "border border-[var(--pc-color-border-weaker)] bg-transparent p-1", "flex-nowrap"), Tk = wk, Ek = J("overflow-x-auto overflow-y-hidden", "[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]", "[&::-webkit-scrollbar]:h-[6px]", "[&::-webkit-scrollbar-track]:bg-transparent", "[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]", "[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"), Dk = J(wk, "overflow-hidden"), Ok = J(wk, "pointer-events-none fixed left-[-9999px] top-[-9999px] z-[-1] w-max max-w-none overflow-visible opacity-0"), kk = {
	default: "md",
	compact: "sm"
}, Ak = {
	xs: "gap-0.5",
	sm: "gap-1",
	md: "gap-1",
	lg: "gap-1",
	xl: "gap-1"
}, jk = {
	xs: J("h-5 w-5 p-0.5 text-xs", "[&_svg]:h-3 [&_svg]:w-3"),
	sm: J("h-6 w-6 p-0.5 text-sm", "[&_svg]:h-3.5 [&_svg]:w-3.5"),
	md: J("h-7 w-7 p-1 text-sm", "[&_svg]:h-4 [&_svg]:w-4"),
	lg: J("h-8 w-8 p-1 text-base", "[&_svg]:h-[18px] [&_svg]:w-[18px]"),
	xl: J("h-9 w-9 p-1.5 text-lg", "[&_svg]:h-5 [&_svg]:w-5")
}, Mk = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, Nk = {
	xs: "h-3 w-3",
	sm: "h-3.5 w-3.5",
	md: "h-4 w-4",
	lg: "h-[18px] w-[18px]",
	xl: "h-5 w-5"
}, Pk = {
	xs: "h-5 w-5 p-0 text-xs",
	sm: "h-7 w-7 p-0 text-sm",
	md: "h-8 w-8 p-0 text-base",
	lg: "h-9 w-9 p-0 text-base",
	xl: "h-10 w-10 p-0 text-lg"
}, Fk = "relative z-10 inline-flex items-center justify-center rounded-[var(--pc-radius-full)] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-border)] focus-visible:ring-offset-[var(--pc-color-surface)] whitespace-nowrap leading-none cursor-pointer disabled:cursor-not-allowed [font-variant-numeric:tabular-nums]", Ik = "relative z-10 inline-flex min-w-0 cursor-pointer items-center gap-0.5 rounded-[var(--pc-radius-full)] pr-1.5", Lk = "text-[var(--pc-color-text)]", Rk = "text-[var(--pc-color-text-muted)] hover:[background:var(--pc-color-border-weakest)]", zk = "[background:var(--pc-color-secondary)] data-[theme=secondary]:[background:var(--pc-color-surface)]", Bk = (e) => typeof e == "string" || typeof e == "number", Vk = (e) => Bk(e) ? String(e) : Array.isArray(e) ? e.map((e) => Vk(e)).join(" ") : "", Hk = (e) => e === "danger" ? J("text-[var(--pc-color-danger)]", "hover:[background:color-mix(in_srgb,var(--pc-color-danger)_12%,transparent)]") : J("text-[var(--pc-color-text-muted)]", "hover:[background:var(--pc-color-surface)]"), Uk = ({ hostNode: e, probeExpandedWidth: t }) => {
	let n = Math.ceil(e.clientWidth), r = Math.ceil(e.parentElement?.clientWidth ?? 0);
	return t ? Math.max(n, r) : n > 0 && r > 0 ? Math.min(n, r) : r > 0 ? r : n;
};
function Wk({ options: e, value: t, onChange: n, variant: r = "default", size: i, disabled: a = !1, allowReselect: o = !1, className: s, optionClassName: c, activeOptionClassName: l, inactiveOptionClassName: u, ariaLabel: f, navigation: h, overflowBehaviour: v = "dropdown", overflowMode: x = "auto", skeleton: T = !1 }) {
	let E = i ?? kk[r], D = sn("secondary"), [O, k] = b(!1), [A, j] = b(!1), [M, N] = b(() => v !== "dropdown" || x !== "auto"), [P, F] = b(!1), I = y(null), ee = y(null), L = y(null), R = y(null), z = y(null), B = y(null), V = y(!1), H = y(v !== "dropdown" || x !== "auto"), { setContainerNode: U, registerOption: W, indicator: G } = vk({
		activeKey: t,
		dependencies: [
			e,
			E,
			!!h
		]
	});
	p(() => {
		V.current = A;
	}, [A]), p(() => {
		H.current = M;
	}, [M]);
	let K = d(() => {
		z.current !== null && (window.clearTimeout(z.current), z.current = null);
	}, []), te = d((e, t = {}) => {
		let { immediate: n = !1 } = t, r = () => {
			B.current = null, j((t) => t === e ? t : (t && !e && F(!1), e)), N(!0);
		};
		if (n || !H.current) {
			K(), r();
			return;
		}
		if (e === V.current) {
			B.current = null, K();
			return;
		}
		B.current = e, K(), z.current = window.setTimeout(() => {
			z.current = null, B.current !== null && r();
		}, Sk);
	}, [K]);
	p(() => () => {
		K();
	}, [K]);
	let ne = d((e) => {
		I.current = e;
	}, []), re = d((e) => {
		ee.current = e, L.current = null, U(e);
	}, [U]), q = d((e) => {
		ee.current = e, L.current = e, U(null);
	}, [U]), ie = d(() => {
		if (v === "scroll") {
			K(), B.current = null, F(!1), j(!1), N(!0);
			return;
		}
		if (x === "full") {
			K(), B.current = null, F(!1), j(!1), N(!0);
			return;
		}
		if (x === "collapsed") {
			K(), B.current = null, j(!0), N(!0);
			return;
		}
		let e = I.current, t = R.current;
		if (!e || !t) return;
		let n = Math.ceil(t.scrollWidth), r = V.current, i = Uk({
			hostNode: e,
			probeExpandedWidth: r
		});
		i <= 0 || n <= 0 || te(r ? n > i - xk : n > i + bk);
	}, [
		te,
		K,
		v,
		x
	]), ae = A;
	x === "collapsed" ? ae = !0 : x === "full" && (ae = !1);
	let oe = v === "dropdown" && ae, se = v === "dropdown" && x === "auto" && !M;
	p(() => {
		if (!a) return;
		let e = requestAnimationFrame(() => {
			F(!1);
		});
		return () => {
			cancelAnimationFrame(e);
		};
	}, [a]), g(() => {
		if (v === "scroll") return;
		let e = null, t = () => {
			e !== null && cancelAnimationFrame(e), e = requestAnimationFrame(() => {
				e = null, a && F(!1), ie();
			});
		};
		t();
		let n = typeof ResizeObserver == "function" ? new ResizeObserver(() => {
			t();
		}) : null;
		if (n) {
			let e = /* @__PURE__ */ new Set(), t = (t) => {
				!t || e.has(t) || (e.add(t), n.observe(t));
			}, r = I.current;
			t(r), t(ee.current), t(R.current), t(r?.parentElement ?? null), t(r?.parentElement?.parentElement ?? null);
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
		h,
		c,
		l,
		u,
		e,
		t,
		s,
		v,
		x,
		E,
		a,
		ie
	]);
	let ce = oe && !a && P, le = Q(Lk, l), ue = Q(Rk, u), de = Q("pointer-events-none absolute rounded-[var(--pc-radius-full)]", zk, O ? "transition-[top,left,width,height] duration-200 ease-out" : "transition-none"), fe = h?.canGoPrevious ?? !0, pe = h?.canGoNext ?? !0, me = Q(Fk, $t(E, !0), "z-20 shrink-0 disabled:opacity-50", ue, h?.buttonClassName), he = _(() => e.find((e) => e.value === t) ?? null, [e, t]), ge = _(() => he ? Bk(he.label) ? he.label : he.ariaLabel ?? he.label : null, [he]), _e = J("inline-flex shrink-0 items-center justify-center text-current", Mk[E], "[&>svg]:h-full [&>svg]:w-full"), ve = (e, t) => t ? /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("span", {
		className: _e,
		children: t
	}), e] }) : e, ye = _(() => e.map((e) => {
		let r = e.value === t, i = e.disabled === !0, s = r && !o, c = e.trailingAction, l = Bk(e.label) ? e.label : e.ariaLabel ?? e.label;
		return {
			id: e.value,
			label: l,
			icon: e.leadingIcon,
			theme: r ? "neutral" : void 0,
			selected: r,
			disabled: i || s,
			suppressDisabledCursor: s && !i,
			onSelect: () => {
				a || i || s || (O || k(!0), n(e.value));
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
		O,
		n,
		e,
		t
	]), be = Q(Ck, !T && se && "invisible pointer-events-none", a ? "opacity-60 pointer-events-none" : "", s), xe = Q(Tk, v === "scroll" ? Ek : "overflow-hidden", Ak[E]), Se = Q(Dk, Ak[E]), Ce = Q(Ok, Ak[E]), we = Q(Fk, $t(E), c, le, zk, "z-20 min-w-0 flex-1 justify-start gap-2 px-3"), Te = Q(Fk, Pk[E], ue, "z-20 shrink-0"), Ee = m(), De = `${Ee}-menu`, Oe = () => {
		a || e.length === 0 || F(!0);
	}, ke = () => {
		a || e.length === 0 || F((e) => !e);
	}, Ae = /* @__PURE__ */ w("div", {
		"aria-hidden": !0,
		ref: R,
		className: Ce,
		"data-switcher-measurement": "true",
		children: [
			h && /* @__PURE__ */ C("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !fe,
				className: me,
				children: h.previousIcon ?? "<"
			}),
			e.map(({ value: e, label: n, leadingIcon: r, disabled: i, trailingAction: o }) => {
				let s = e === t, l = !!o, u = s ? le : ue, d = l ? u : void 0, f = l ? void 0 : u, p = Q(Fk, $t(E), c, r ? "gap-2" : void 0, l ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, f, i ? "opacity-50 cursor-not-allowed" : ""), m = Q(Ik, d, i ? "opacity-50" : void 0), h = Q(Fk, jk[E], "shrink-0 rounded-[inherit] bg-transparent", Hk(o?.theme), o?.disabled ? "opacity-50 cursor-not-allowed" : void 0);
				return o ? /* @__PURE__ */ w("div", {
					className: m,
					"data-theme": s ? D : void 0,
					children: [/* @__PURE__ */ C("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || i,
						className: p,
						children: ve(n, r)
					}), /* @__PURE__ */ C("button", {
						type: "button",
						tabIndex: -1,
						disabled: a || o.disabled,
						className: h,
						children: o.icon
					})]
				}, `measure-${e}`) : /* @__PURE__ */ C("button", {
					type: "button",
					tabIndex: -1,
					disabled: a || i,
					className: p,
					children: ve(n, r)
				}, `measure-${e}`);
			}),
			h && /* @__PURE__ */ C("button", {
				type: "button",
				tabIndex: -1,
				disabled: a || !pe,
				className: me,
				children: h.nextIcon ?? ">"
			})
		]
	});
	if (T) {
		let t = Q(Fk, $t(E), c, "cursor-default"), n = Q(Fk, $t(E, !0), h?.buttonClassName, "cursor-default");
		return /* @__PURE__ */ C("div", {
			className: be,
			"data-switcher-host": "true",
			"data-slot": "switcher-skeleton-shell",
			children: /* @__PURE__ */ w("div", {
				"aria-hidden": "true",
				className: xe,
				"data-switcher-mode": "skeleton",
				children: [
					h && /* @__PURE__ */ C("div", {
						className: n,
						children: /* @__PURE__ */ C(cd, { className: "h-4 w-4 rounded-full" })
					}),
					e.map(({ value: e, label: n }) => {
						let r = Vk(n).trim().length;
						return /* @__PURE__ */ C("div", {
							className: t,
							children: /* @__PURE__ */ C(cd, {
								className: "h-3 rounded-full",
								style: { width: `${String(Math.max(4, Math.min(r, 14)))}ch` }
							})
						}, e);
					}),
					h && /* @__PURE__ */ C("div", {
						className: n,
						children: /* @__PURE__ */ C(cd, { className: "h-4 w-4 rounded-full" })
					})
				]
			})
		});
	}
	return /* @__PURE__ */ w("div", {
		ref: ne,
		className: be,
		"data-switcher-host": "true",
		children: [oe ? /* @__PURE__ */ w("div", {
			role: "group",
			"aria-label": f,
			className: Se,
			ref: q,
			"data-switcher-mode": "collapsed",
			children: [
				h && /* @__PURE__ */ C("button", {
					type: "button",
					"aria-label": h.previousAriaLabel ?? "Previous",
					disabled: a || !fe,
					className: me,
					onClick: () => {
						a || !fe || (O || k(!0), h.onPrevious());
					},
					children: h.previousIcon ?? "<"
				}),
				/* @__PURE__ */ C("button", {
					id: Ee,
					type: "button",
					"aria-haspopup": "menu",
					"aria-expanded": ce,
					"aria-controls": De,
					"aria-label": f,
					disabled: a || e.length === 0,
					className: we,
					"data-theme": D,
					onClick: Oe,
					children: /* @__PURE__ */ w("span", {
						className: "flex min-w-0 flex-1 items-center gap-2 text-left",
						children: [he?.leadingIcon ? /* @__PURE__ */ C("span", {
							className: _e,
							children: he.leadingIcon
						}) : null, /* @__PURE__ */ C("span", {
							className: "min-w-0 truncate",
							children: ge
						})]
					})
				}),
				/* @__PURE__ */ C("button", {
					type: "button",
					"aria-label": "Toggle options",
					"aria-haspopup": "menu",
					"aria-expanded": ce,
					"aria-controls": De,
					disabled: a || e.length === 0,
					className: Te,
					onClick: ke,
					children: /* @__PURE__ */ C("span", {
						className: Q(Br({ isOpen: ce }), Nk[E], "inline-flex items-center justify-center [&>svg]:h-full [&>svg]:w-full"),
						children: /* @__PURE__ */ C(Vr, {})
					})
				}),
				h && /* @__PURE__ */ C("button", {
					type: "button",
					"aria-label": h.nextAriaLabel ?? "Next",
					disabled: a || !pe,
					className: me,
					onClick: () => {
						a || !pe || (O || k(!0), h.onNext());
					},
					children: h.nextIcon ?? ">"
				}),
				/* @__PURE__ */ C(di, {
					id: De,
					options: ye,
					isOpen: ce,
					align: "start",
					widthMode: "content",
					usePortal: !0,
					anchorRef: L,
					labelledBy: Ee,
					onRequestClose: () => {
						F(!1);
					}
				})
			]
		}) : /* @__PURE__ */ w("div", {
			role: "radiogroup",
			"aria-label": f,
			className: xe,
			ref: re,
			"data-switcher-mode": "full",
			children: [
				G.ready && /* @__PURE__ */ C("div", {
					"aria-hidden": !0,
					className: de,
					"data-theme": D,
					style: {
						top: G.top,
						left: G.left,
						width: G.width,
						height: G.height
					}
				}),
				h && /* @__PURE__ */ C("button", {
					type: "button",
					"aria-label": h.previousAriaLabel ?? "Previous",
					disabled: a || !fe,
					className: me,
					onClick: () => {
						a || !fe || (O || k(!0), h.onPrevious());
					},
					children: h.previousIcon ?? "<"
				}),
				e.map(({ value: e, label: r, leadingIcon: i, disabled: s, ariaLabel: l, trailingAction: u }) => {
					let d = e === t, f = d ? D : void 0, p = !!u, m = d ? le : ue, h = p ? m : void 0, g = p ? void 0 : m, _ = Q(Fk, $t(E), c, i ? "gap-2" : void 0, p ? "min-w-0 flex-auto bg-transparent pr-0.5" : void 0, g, s ? "opacity-50 cursor-not-allowed" : ""), v = Q(Ik, h, a || s ? "opacity-50 cursor-not-allowed" : void 0), y = Q(Fk, jk[E], "shrink-0 rounded-[inherit] bg-transparent", Hk(u?.theme), u?.disabled ? "opacity-50 cursor-not-allowed" : void 0), b = () => {
						d && !o || a || s || (O || k(!0), n(e));
					};
					return u ? /* @__PURE__ */ w("div", {
						ref: W(e),
						className: v,
						"data-theme": f,
						onClick: b,
						children: [/* @__PURE__ */ C("button", {
							type: "button",
							role: "radio",
							"aria-checked": d,
							"aria-label": l,
							disabled: a || s,
							className: _,
							children: ve(r, i)
						}), /* @__PURE__ */ C("button", {
							type: "button",
							"aria-label": u.ariaLabel,
							disabled: a || u.disabled,
							className: y,
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), !(a || u.disabled) && u.onSelect?.();
							},
							children: u.icon
						})]
					}, e) : /* @__PURE__ */ C("button", {
						type: "button",
						role: "radio",
						"aria-checked": d,
						"aria-label": l,
						disabled: a || s,
						className: _,
						"data-theme": f,
						ref: W(e),
						onClick: b,
						children: ve(r, i)
					}, e);
				}),
				h && /* @__PURE__ */ C("button", {
					type: "button",
					"aria-label": h.nextAriaLabel ?? "Next",
					disabled: a || !pe,
					className: me,
					onClick: () => {
						a || !pe || (O || k(!0), h.onNext());
					},
					children: h.nextIcon ?? ">"
				})
			]
		}), Ae]
	});
}
//#endregion
//#region ../ui/src/lib/NavigationList.tsx
var Gk = "relative flex w-full flex-row items-stretch", Kk = "relative flex w-full flex-col items-stretch gap-1", qk = "border-b border-[var(--pc-color-depth-2)]", Jk = "rounded-[var(--pc-radius-xl)] p-1", Yk = "relative min-w-0 flex-1 inline-flex items-center justify-center gap-2 p-3.5 text-lg font-medium leading-none whitespace-nowrap transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:text-[var(--pc-color-text-muted)]", Xk = "relative inline-flex w-full items-center justify-between gap-3 rounded-[var(--pc-radius-lg)] px-3 py-1.5 text-left text-sm font-medium leading-5 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--pc-color-depth-2)] focus-visible:ring-offset-[var(--pc-color-surface)] disabled:cursor-not-allowed disabled:opacity-60", Zk = "pr-1.5", Qk = "pr-1", $k = "relative flex min-w-0 max-w-full shrink-0 items-stretch gap-0.5", eA = "relative flex w-full min-w-0 items-stretch gap-1", tA = "mr-1 self-center rounded-[var(--pc-radius-full)]", nA = "mr-1 self-center rounded-[var(--pc-radius-full)]", rA = "inline-flex h-4 w-4 shrink-0 items-center justify-center text-current [&>svg]:h-full [&>svg]:w-full", iA = "text-[var(--pc-color-text)]", aA = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)]", oA = "text-[var(--pc-color-text)] bg-[var(--pc-color-depth-2)]", sA = "text-[var(--pc-color-text-muted)] hover:text-[var(--pc-color-text)] hover:bg-[var(--pc-color-depth-1)]", cA = "[background:var(--pc-color-secondary)] text-[var(--pc-color-text-inverted)] hover:[background:color-mix(in_srgb,var(--pc-color-secondary)_92%,var(--pc-color-secondary))]", lA = "text-[var(--pc-color-text)] [background:transparent] hover:[background:var(--pc-color-depth-2)] focus-visible:[background:var(--pc-color-depth-2)]", uA = (e) => e && e !== "default" ? e : "neutral", dA = ({ active: e, theme: t }) => t === "danger" ? void 0 : J(!e && "text-[var(--pc-color-text-muted)]", "hover:text-[var(--pc-color-text)]");
function fA({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", selectionSemantics: a = "tabs", itemStyle: o = "sliding", appearance: s = "default", showBorder: c = !0, disabled: l = !1, className: u, itemClassName: d, activeItemClassName: f, inactiveItemClassName: p, ariaLabel: m }) {
	let h = i === "vertical", g = a === "tabs", _ = o === "sliding", v = h ? Kk : Gk, y = "";
	c && (y = h ? Jk : qk);
	let b = Q(J(v, y, l ? "pointer-events-none opacity-60" : ""), u), x = s === "neutral" ? "neutral" : void 0, S = h ? _ ? oA : cA : iA, T = h ? _ ? sA : lA : aA, E = Q(S, f), D = Q(T, p), O = t.some((e) => e.value === n), k = t.find((e) => !e.disabled)?.value, { containerRef: A, registerOption: j, indicator: M } = vk({
		activeKey: n,
		dependencies: [
			t,
			i,
			o,
			a
		]
	}), N = yk(M.ready), P = _ && M.ready, F = h ? "left-0 w-0.5" : "bottom-0 h-0.5", I = "transition-none";
	N && (I = h ? "transition-[top,height] duration-200 ease-out" : "transition-[left,width] duration-200 ease-out");
	let ee = J("pointer-events-none absolute rounded-[var(--pc-radius-full)] [background:var(--pc-color-secondary)]", F, I), L = h ? {
		top: M.top,
		height: M.height
	} : {
		left: M.left,
		width: M.width
	};
	return /* @__PURE__ */ w("div", {
		id: e,
		role: g ? "tablist" : "listbox",
		"aria-label": m,
		"aria-orientation": h ? "vertical" : void 0,
		"data-theme": x,
		className: b,
		ref: A,
		children: [P && /* @__PURE__ */ C("div", {
			"aria-hidden": !0,
			className: ee,
			style: L
		}), t.map(({ value: e, label: t, leadingIcon: i, badge: a, disabled: o, trailingAction: s }) => {
			let c = e === n, u = (() => {
				if (g) return c || !O && e === k ? 0 : -1;
			})(), f = h && _ ? "pl-4" : "", p = !!s, m = Q(J(h ? Xk : Yk, f, p && (h ? Qk : Zk)), d, c ? E : D), v = J(h ? eA : $k), y = J(h ? nA : tA, dA({
				active: c,
				theme: s?.theme
			})), b = /* @__PURE__ */ w("button", {
				type: "button",
				role: g ? "tab" : "option",
				"aria-selected": c,
				tabIndex: u,
				disabled: l || o,
				className: m,
				ref: p ? void 0 : j(e),
				onClick: () => {
					c || l || o || r(e);
				},
				children: [
					i && /* @__PURE__ */ C("span", {
						className: rA,
						children: i
					}),
					/* @__PURE__ */ C("span", {
						className: "min-w-0 truncate",
						children: t
					}),
					a && /* @__PURE__ */ C("span", {
						className: J("shrink-0", h ? "" : "ml-1"),
						children: a
					})
				]
			}, e);
			if (!s) return b;
			let x = s;
			return /* @__PURE__ */ w("div", {
				ref: j(e),
				className: v,
				role: "presentation",
				children: [b, /* @__PURE__ */ C(un, {
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
					variant: uA(x.theme)
				})]
			}, e);
		})]
	});
}
//#endregion
//#region ../ui/src/lib/Tabs.tsx
function pA({ id: e, options: t, value: n, onChange: r, orientation: i = "horizontal", showBorder: a = !0, disabled: o = !1, className: s, tabClassName: c, activeTabClassName: l, inactiveTabClassName: u, ariaLabel: d }) {
	return /* @__PURE__ */ C(fA, {
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
var mA = "preload-first-open", hA = "preload-always", gA = "preload-first-open";
function _A({ isOpen: e, animationMode: t = mA }) {
	let [n, r] = b(e);
	return p(() => {
		e && r(!0);
	}, [e]), {
		shouldPreloadClosedState: !e && (t === "preload-always" || t === "preload-first-open" && !n),
		shouldRender: e
	};
}
//#endregion
//#region ../ui/src/lib/motionPrimitives.ts
var vA = "transition-transform duration-[440ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", yA = "transition-opacity duration-[320ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", bA = "inset-0 z-[1050] flex h-full w-full overflow-hidden", xA = 440, SA = vA, CA = vA, wA = "transition-opacity duration-[260ms] ease-out motion-reduce:transition-none", TA = "transition-opacity duration-[150ms] ease-[cubic-bezier(0.38,0.62,0.2,1)] motion-reduce:transition-none", EA = yA, DA = yA, OA = ["absolute inset-0 h-full w-full", "bg-[var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]"].join(" "), kA = [
	"relative pointer-events-auto flex min-h-0 min-w-0 max-w-full shrink-0 flex-col overflow-hidden",
	"bg-[var(--pc-color-surface)] text-[var(--pc-color-text)] shadow-2xl",
	"transform-gpu will-change-transform [backface-visibility:hidden] [contain:layout_paint_style]"
].join(" "), AA = ["px-4 py-3 @md:px-5 @md:py-4", "bg-inherit"].join(" "), jA = "border-b border-[var(--pc-color-border)]", MA = "text-lg font-medium text-[var(--pc-color-text)] leading-none", NA = "text-sm text-[var(--pc-color-text-secondary)] leading-none", PA = [
	"min-h-0 w-full min-w-0 flex-1 overflow-y-auto overflow-x-hidden",
	"[scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent]",
	"[&::-webkit-scrollbar]:w-[6px]",
	"[&::-webkit-scrollbar-track]:bg-transparent",
	"[&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)]",
	"[&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]"
].join(" "), FA = {
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
}, IA = {
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
}, LA = () => () => void 0, RA = () => typeof document > "u" ? null : document.body, zA = () => null;
function BA({ isOpen: e, onClose: t, side: n = "right", size: r, title: i, description: a, headerActions: o, variant: s, onBack: c, backButtonLabel: l = "Back", backButtonDisabled: u = !1, children: f, portalContainer: h, overlayClassName: v, contentClassName: S, bodyClassName: E, closeOnOverlayClick: D = !0, closeOnEscape: O = !0, ariaLabel: k, ariaLabelledby: A, ariaDescribedby: j, contentRef: M, fullSize: N = !1, rootClassName: P, showCloseButton: F = !0, closeButtonDisabled: I = !1, closeButtonClassName: ee, closeButtonLabel: L, footer: R, showHeaderDivider: z = !1, animationMode: B = hA }) {
	let { shouldPreloadClosedState: V, shouldRender: H } = _A({
		isOpen: e,
		animationMode: B
	}), U = y(e), W = y(null), G = y(null), K = y(null), [te, ne] = b(e), [re, q] = b(!1), [ie, ae] = b(!1), oe = N ? "full" : r ?? "md", se = _(() => ({
		...FA[n],
		size: IA[n][oe]
	}), [oe, n]), ce = Jr(), le = h ?? ce, ue = x(LA, RA, zA);
	p(() => {
		if (!e || !O || !t) return;
		let n = (e) => {
			e.key === "Escape" && (e.preventDefault(), t());
		};
		return window.addEventListener("keydown", n), () => {
			window.removeEventListener("keydown", n);
		};
	}, [
		O,
		e,
		t
	]), g(() => {
		G.current !== null && (window.cancelAnimationFrame(G.current), G.current = null), K.current !== null && (window.cancelAnimationFrame(K.current), K.current = null), W.current !== null && (window.clearTimeout(W.current), W.current = null);
		let t = U.current;
		if (U.current = e, ne(e), e) {
			if (ae(!1), B === "standard") {
				q(!1);
				return;
			}
			q(!0), G.current = window.requestAnimationFrame(() => {
				G.current = null, K.current = window.requestAnimationFrame(() => {
					q(!1), K.current = null;
				});
			});
			return;
		}
		if (q(!1), !t) {
			ae(!1);
			return;
		}
		if (B === "standard") {
			ae(!1);
			return;
		}
		return ae(!0), W.current = window.setTimeout(() => {
			ae(!1), W.current = null;
		}, xA), () => {
			W.current !== null && (window.clearTimeout(W.current), W.current = null), G.current !== null && (window.cancelAnimationFrame(G.current), G.current = null), K.current !== null && (window.cancelAnimationFrame(K.current), K.current = null);
		};
	}, [B, e]);
	let de = d(() => {
		!D || !t || t();
	}, [D, t]), fe = _(() => Q(le ? `absolute ${bA}` : `fixed ${bA}`, v), [v, le]), pe = ie || !e && te, me = se.closed;
	re ? me = se.closed : (V && !pe || e) && (me = se.open);
	let he;
	re ? he = "transition-none" : V && !pe && (he = "invisible opacity-0 transition-none");
	let ge = "opacity-0 transition-none";
	re || V && !pe ? ge = "opacity-0 transition-none" : e ? ge = "opacity-100 transition-none" : pe && (ge = `opacity-0 ${TA}`);
	let _e = _(() => Q(kA, e ? SA : CA, se.size, se.rounding, me, he, S), [
		me,
		he,
		S,
		e,
		se
	]), ve = _(() => L ?? k ?? "Close drawer", [k, L]), ye = sn(s), be = m(), xe = m(), Se = A || (i ? be : void 0), Ce = j || (a ? xe : void 0), we = Se ? void 0 : k, J = le ?? ue;
	if (!(H || pe) || !J) return null;
	let Te = !!c, Ee = !!(i || a || o || Te || F && t), De = kn("sm"), Oe = yd(i), ke = !!Oe, Ae = yd(a), je = e || pe, Me = "opacity-0 transition-none";
	re || V && !pe ? Me = "opacity-0 transition-none" : e ? Me = `opacity-100 ${EA}` : pe && (Me = `opacity-0 ${DA}`);
	let Ne = pe ? `opacity-0 ${wA}` : "opacity-100 transition-none";
	return T(/* @__PURE__ */ w("div", {
		className: Q(fe, P, je ? "pointer-events-auto" : "pointer-events-none"),
		role: "presentation",
		"aria-hidden": !e,
		children: [/* @__PURE__ */ C("button", {
			type: "button",
			className: Q(OA, Me),
			"aria-label": ve,
			onClick: de
		}), /* @__PURE__ */ C("div", {
			className: Q("pointer-events-none relative flex h-full w-full min-w-0 overflow-hidden", se.container, Ne),
			children: /* @__PURE__ */ C("div", {
				ref: M,
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": Se,
				"aria-describedby": Ce,
				"aria-label": we,
				tabIndex: -1,
				"data-theme": ye,
				className: Q("pointer-events-auto", _e),
				children: /* @__PURE__ */ w("div", {
					"data-drawer-internals": "",
					className: Q("flex min-h-0 min-w-0 flex-1 flex-col", ge),
					children: [
						Ee && /* @__PURE__ */ C("header", {
							className: Q(AA, z && jA),
							children: /* @__PURE__ */ C(Pn, {
								as: "div",
								flush: !0,
								size: "sm",
								headline: Oe,
								headlineId: ke ? Se : void 0,
								headlineClassName: MA,
								startActions: !ke && i ? /* @__PURE__ */ C("div", {
									id: Se,
									className: MA,
									children: i
								}) : void 0,
								subheader: Ae ?? (a ? /* @__PURE__ */ C("p", {
									id: Ce,
									className: NA,
									children: a
								}) : void 0),
								subheaderId: Ae ? Ce : void 0,
								subheaderClassName: Ae ? NA : void 0,
								actions: /* @__PURE__ */ w("div", {
									className: "flex items-center gap-2",
									children: [
										Te && c && /* @__PURE__ */ C(un, {
											variant: "neutral",
											size: De,
											"aria-label": l,
											onClick: c,
											disabled: u,
											iconOnly: !0,
											label: l,
											leadingIcon: /* @__PURE__ */ C(Gu, {})
										}),
										o,
										F && t && /* @__PURE__ */ C("span", {
											className: ee,
											children: /* @__PURE__ */ C(un, {
												variant: "neutral",
												size: De,
												showTooltip: !1,
												"aria-label": ve,
												onClick: t,
												disabled: I,
												iconOnly: !0,
												label: ve,
												leadingIcon: /* @__PURE__ */ C(qu, {})
											})
										})
									]
								})
							})
						}),
						/* @__PURE__ */ C("div", {
							className: Q(PA, E),
							children: f
						}),
						R ? /* @__PURE__ */ C("div", {
							className: "flex-shrink-0",
							children: R
						}) : null
					]
				})
			})
		})]
	}), J);
}
//#endregion
//#region ../ui/src/lib/Modal.tsx
var VA = [
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
].join(","), HA = (e) => {
	let t = Number.parseFloat(e);
	return Number.isFinite(t) ? t : 0;
}, UA = (e) => {
	if (typeof window > "u") return Math.ceil(e.scrollHeight);
	let t = window.getComputedStyle(e), n = HA(t.paddingTop) + HA(t.paddingBottom);
	return Math.max(0, Math.ceil(e.scrollHeight - n));
};
function WA(e) {
	if (!e) return [];
	let t = e.querySelectorAll(VA);
	return Array.from(t).filter((e) => {
		if (e.hasAttribute("disabled") || e.getAttribute("aria-hidden") === "true" || e.closest("[aria-hidden=\"true\"]") || e.tabIndex < 0) return !1;
		if (typeof window < "u") {
			let t = window.getComputedStyle(e);
			if (t.display === "none" || t.visibility === "hidden") return !1;
		}
		return !0;
	});
}
var GA = 0, KA = null, qA = [], JA = 0;
function YA(e) {
	qA.includes(e) || qA.push(e);
}
function XA(e) {
	let t = qA.lastIndexOf(e);
	t < 0 || qA.splice(t, 1);
}
function ZA(e) {
	return qA.length === 0 ? !1 : qA[qA.length - 1] === e;
}
function QA() {
	if (typeof document > "u") return () => void 0;
	let { body: e } = document;
	return GA === 0 && (KA = e.style.overflow || null, e.style.overflow = "hidden"), GA += 1, () => {
		GA !== 0 && (--GA, GA === 0 && typeof document < "u" && (KA === null ? document.body.style.removeProperty("overflow") : document.body.style.overflow = KA, KA = null));
	};
}
var $A = "relative inset-0 z-[2000] flex items-center justify-center p-4 md:p-8", ej = "pointer-events-none absolute inset-0 [background:var(--pc-color-backdrop)] will-change-opacity [backface-visibility:hidden]", tj = "transition-opacity duration-[140ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", nj = "transition-opacity duration-[180ms] ease-out", rj = "relative z-[2010] flex w-full max-h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-[var(--pc-radius-2xl)] [background:var(--pc-color-surface)] text-[var(--pc-color-text)] shadow-2xl outline-none transform-gpu [transform-origin:50%_92%] [backface-visibility:hidden] [contain:layout_paint_style]", ij = "transition-[opacity,transform] duration-[220ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-[opacity,transform]", aj = "transition-opacity duration-[180ms] ease-out will-change-opacity", oj = "opacity-100 translate-y-0 scale-100", sj = "opacity-0 translate-y-[min(22vh,9rem)] scale-[0.985]", cj = "opacity-0 translate-y-0 scale-100", lj = "relative flex min-h-0 min-w-0 flex-auto flex-col", uj = "opacity-100 transition-opacity delay-[35ms] duration-[100ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]", dj = "opacity-0 transition-opacity duration-[120ms] ease-out", fj = 180, pj = {
	sm: "max-w-md",
	md: "max-w-xl",
	lg: "max-w-2xl",
	xl: "max-w-4xl",
	full: "max-w-[min(96vw,80rem)] max-h-[calc(100vh-2rem)]"
}, mj = {
	sm: "h-[calc(100vh-4rem)]",
	md: "h-[calc(100vh-4rem)]",
	lg: "h-[calc(100vh-4rem)]",
	xl: "h-[calc(100vh-4rem)]",
	full: "h-[calc(100vh-2rem)]"
}, hj = "px-5 pt-5 pb-4", gj = "text-xl font-semibold leading-tight text-[var(--pc-color-text)]", _j = "text-sm leading-tight text-[var(--pc-color-text-secondary)]", vj = "flex-1 overflow-y-auto px-5 pt-2 [scrollbar-width:thin] [scrollbar-color:var(--pc-color-depth-3)_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--pc-color-depth-3)] [&::-webkit-scrollbar-thumb]:rounded-[var(--pc-radius-full)]", yj = "px-5 py-4 bg-[color:color-mix(in oklab,var(--pc-color-surface) 90%, rgba(0,0,0,0))]", bj = () => () => void 0, xj = () => typeof document > "u" ? null : document.body, Sj = () => null;
function Cj({ isOpen: e, onClose: t, title: n, description: r, notification: i, tabs: a, children: o, footer: s, size: c = "md", variant: l, forceMaxHeight: u = !1, overlayClassName: f, contentClassName: h, headerClassName: v, bodyClassName: S, footerClassName: E, titleClassName: D, descriptionClassName: O, closeButtonClassName: k, closeButtonLabel: A = "Close modal", showCloseButton: j = !0, closeOnOverlayClick: M = !0, closeOnEscape: N = !0, trapFocus: P = !0, restoreFocus: F = !0, initialFocusRef: I, portalContainer: ee, animationMode: L = gA }) {
	let R = y(null), z = y(null), B = y(null), V = y(null), H = y(null), U = y(null), W = y(null), G = y(e), [K, te] = b(!1), [ne, re] = b(e), [q, ie] = b(!1), [ae, oe] = b(null);
	V.current === null && (V.current = `pc-modal-${String(++JA)}`);
	let se = typeof t == "function" ? t : void 0, ce = P, le = m(), ue = m(), de = !!(n || r), fe = !!a, pe = !!s, me = !!i?.message, he = sn(l), ge = Jr(), _e = ee ?? ge, ve = x(bj, xj, Sj), { shouldPreloadClosedState: ye, shouldRender: be } = _A({
		isOpen: e,
		animationMode: L
	});
	g(() => {
		H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null), U.current !== null && (window.cancelAnimationFrame(U.current), U.current = null), W.current !== null && (window.clearTimeout(W.current), W.current = null);
		let t = G.current;
		if (G.current = e, re(e), e) {
			if (ie(!1), L === "standard") {
				te(!1);
				return;
			}
			te(!0), H.current = window.requestAnimationFrame(() => {
				H.current = null, U.current = window.requestAnimationFrame(() => {
					te(!1), U.current = null;
				});
			});
			return;
		}
		if (te(!1), !t) {
			ie(!1);
			return;
		}
		if (L === "standard") {
			ie(!1);
			return;
		}
		return ie(!0), W.current = window.setTimeout(() => {
			ie(!1), W.current = null;
		}, fj), () => {
			W.current !== null && (window.clearTimeout(W.current), W.current = null), H.current !== null && (window.cancelAnimationFrame(H.current), H.current = null), U.current !== null && (window.cancelAnimationFrame(U.current), U.current = null);
		};
	}, [L, e]), g(() => {
		if (!e || typeof document > "u") return;
		Tt();
		let t = R.current;
		B.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
		let n = window.requestAnimationFrame(() => {
			let e = I?.current;
			if (e) {
				e.focus({ preventScroll: !0 });
				return;
			}
			let n = WA(t);
			if (n.length > 0) {
				n[0].focus({ preventScroll: !0 });
				return;
			}
			t?.focus({ preventScroll: !0 });
		});
		return () => {
			window.cancelAnimationFrame(n), F && B.current && B.current.focus({ preventScroll: !0 }), B.current = null;
		};
	}, [
		I,
		e,
		F
	]), p(() => {
		if (!(!e || _e)) return QA();
	}, [e, _e]), p(() => {
		if (!e || !V.current) return;
		let t = V.current;
		return YA(t), () => {
			XA(t);
		};
	}, [e]);
	let xe = d((t) => {
		if (!e || !V.current || !ZA(V.current)) return;
		if (t.key === "Escape") {
			if (!N || !se) return;
			t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), se();
			return;
		}
		if (t.key !== "Tab" || !ce) return;
		let n = R.current;
		if (!n) return;
		let r = WA(n);
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
		N,
		se,
		e,
		ce
	]);
	p(() => {
		if (e) return document.addEventListener("keydown", xe), () => {
			document.removeEventListener("keydown", xe);
		};
	}, [xe, e]);
	let Se = a?.panels ? a.options.flatMap((e) => {
		let t = a.panels?.[e.value];
		return t === void 0 ? [] : [{
			value: e.value,
			panel: t
		}];
	}) : null, Ce = !!Se?.length;
	g(() => {
		if (!e || !fe || Ce) {
			oe(null);
			return;
		}
		let t = z.current;
		if (!t) return;
		let n = () => {
			let e = UA(t);
			e <= 0 || oe((t) => t === null || e > t ? e : t);
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
		fe,
		Ce,
		e,
		i?.message,
		a?.value
	]);
	let we = _(() => n ? le : void 0, [n, le]), J = _(() => r ? ue : void 0, [r, ue]), Te = _e ?? ve, Ee = d((e) => {
		!M || !se || !V.current || !ZA(V.current) || e.target === e.currentTarget && (e.preventDefault(), se());
	}, [M, se]), De = q || !e && ne;
	if (!(be || De) || !Te) return null;
	let Oe = oj;
	K ? Oe = sj : De ? Oe = cj : ye && (Oe = `${sj} invisible transition-none`);
	let ke = "opacity-0 transition-none";
	K ? ke = "opacity-0 transition-none" : De ? ke = `opacity-0 ${nj}` : ye ? ke = "opacity-0 transition-none" : e && (ke = `opacity-100 ${tj}`);
	let Ae = Q(rj, De ? aj : ij, pj[c], u ? mj[c] : "", Oe, K ? "transition-none" : "", h), je = uj;
	K ? je = "opacity-0 transition-none" : De ? je = dj : ye && (je = "opacity-0 transition-none");
	let Me = Q(lj, je), Ne = Q(hj, v), Pe = Q(gj, D), Fe = Q(_j, O), Ie = Q(vj, !de && !fe ? "pt-6" : "", fe ? "pt-4" : "", pe ? "pb-2" : "pb-8", me ? "flex flex-col gap-4" : "", S), Le = fe && ae !== null && !Ce ? { minHeight: `${String(ae)}px` } : void 0, Y = Q(yj, E), Re = Q(k), ze = Q("px-5", de ? "pb-1" : "pt-5 pb-1"), Be = yd(n), Ve = !ye || De, He = !!Be, Ue = yd(r), We = kn("sm"), Ge = j && t ? /* @__PURE__ */ C("span", {
		className: Re,
		children: /* @__PURE__ */ C(un, {
			variant: "neutral",
			size: We,
			showTooltip: !1,
			iconOnly: !0,
			label: A,
			"aria-label": A,
			onClick: t,
			leadingIcon: /* @__PURE__ */ C(qu, {})
		})
	}) : null;
	return T(/* @__PURE__ */ w("div", {
		className: Q($A, _e ? "absolute" : "fixed", e ? "pointer-events-auto" : "pointer-events-none", f),
		role: "presentation",
		"aria-hidden": !e,
		onPointerDown: Ee,
		children: [/* @__PURE__ */ C("div", { className: Q(ej, ke) }), /* @__PURE__ */ C("div", {
			ref: R,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": Ve ? void 0 : Be,
			"aria-labelledby": Ve ? we : void 0,
			"aria-describedby": Ve ? J : void 0,
			tabIndex: -1,
			"data-theme": he,
			className: Ae,
			children: Ve && /* @__PURE__ */ w("div", {
				"data-modal-internals": "",
				className: Me,
				children: [
					de && /* @__PURE__ */ C("div", {
						className: Ne,
						children: /* @__PURE__ */ C(Pn, {
							as: "div",
							flush: !0,
							size: "md",
							headline: Be,
							headlineId: He ? le : void 0,
							headlineClassName: Pe,
							startActions: !He && n ? /* @__PURE__ */ C("div", {
								id: le,
								className: Pe,
								children: n
							}) : void 0,
							subheader: Ue ?? (r ? /* @__PURE__ */ C("p", {
								id: ue,
								className: Fe,
								children: r
							}) : void 0),
							subheaderId: Ue ? ue : void 0,
							subheaderClassName: Ue ? Fe : void 0,
							actions: Ge ? /* @__PURE__ */ C("div", {
								className: "flex items-center gap-2",
								children: Ge
							}) : void 0
						})
					}),
					!de && Ge ? /* @__PURE__ */ C("div", {
						className: "absolute right-5 top-4 z-[1]",
						children: Ge
					}) : null,
					a && /* @__PURE__ */ C("div", {
						className: ze,
						children: /* @__PURE__ */ C(Wk, {
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
					/* @__PURE__ */ w("div", {
						ref: z,
						className: Ie,
						style: Le,
						children: [me && i ? /* @__PURE__ */ C(bn, {
							as: "div",
							size: "sm",
							variant: i.variant,
							children: typeof i.message == "string" ? /* @__PURE__ */ C("p", { children: i.message }) : i.message
						}) : null, Se ? /* @__PURE__ */ C("div", {
							"data-slot": "modal-tab-panels",
							className: "grid min-w-0 grid-cols-1 items-start",
							children: Se.map(({ value: e, panel: t }) => {
								let n = e === a?.value;
								return /* @__PURE__ */ C("div", {
									role: "tabpanel",
									"aria-hidden": n ? void 0 : !0,
									"data-active": n ? "true" : "false",
									className: Q("min-w-0 [grid-area:1/1]", !n && "invisible pointer-events-none select-none"),
									children: t
								}, e);
							})
						}) : o]
					}),
					pe && /* @__PURE__ */ C("div", {
						className: Y,
						children: s
					})
				]
			})
		})]
	}), Te);
}
//#endregion
//#region ../ui/src/lib/layout/splitViewResponsive.ts
var wj = {
	md: "(min-width: 768px)",
	lg: "(min-width: 1024px)"
}, Tj = {
	md: "md:hidden",
	lg: "lg:hidden"
}, Ej = (e) => Tj[e], Dj = (e) => typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia(wj[e]).matches;
//#endregion
//#region ../ui/src/lib/CountBadge.tsx
function Oj({ value: e, variant: t = "accent", className: n }) {
	let r = String(e);
	return /* @__PURE__ */ C("span", {
		className: Q("inline-flex h-4.5 items-center justify-center rounded-[var(--pc-radius-full)] align-middle", /^[0-9]$/.test(r.trim()) ? "w-4.5 px-0 py-0" : "min-w-4.5 px-1.5 py-0.5", "!text-xs !font-medium leading-none", t === "primary" ? "bg-[var(--pc-color-primary)] text-[var(--pc-color-primary-text)]" : "bg-[var(--pc-color-accent)] text-[var(--pc-color-text-inverted)]", n),
		children: e
	});
}
//#endregion
//#region ../ui/src/lib/layout/ResponsivePanelTriggerButton.tsx
var kj = Symbol("pc.responsive-panel-trigger");
function Aj({ label: e, icon: t, onNarrowOpen: n, inlineBreakpoint: r = "md", sidebarCollapse: i, badgeCount: a = 0, variant: o = "neutral", size: s = "md", disabled: c = !1 }) {
	let l = i?.collapsed ?? !1, u = i?.expandLabel?.trim() || e;
	return /* @__PURE__ */ w("span", {
		className: J("relative inline-flex overflow-visible", l ? void 0 : Ej(r)),
		children: [/* @__PURE__ */ C(un, {
			variant: o,
			size: s,
			disabled: c,
			"aria-label": u,
			onClick: () => {
				if (l && i && Dj(r)) {
					i.onCollapsedChange(!1);
					return;
				}
				n();
			},
			iconOnly: !0,
			label: u,
			leadingIcon: t
		}), a > 0 ? /* @__PURE__ */ C(Oj, {
			value: a,
			variant: "primary",
			className: "pointer-events-none absolute -right-1 top-0"
		}) : null]
	});
}
Aj.__pcMarker__ = kj;
//#endregion
//#region ../ui/src/lib/layout/sidebar/SidebarItemButton.tsx
var jj = J("flex w-full flex-col items-start gap-0 overflow-hidden rounded-[var(--pc-radius-lg)] px-3 py-1.5", "cursor-pointer text-left font-normal focus-visible:outline-none", "focus-visible:ring-2 focus-visible:ring-[var(--pc-color-border)]", "disabled:cursor-default disabled:opacity-60");
c(function({ selected: e = !1, variant: t, appearance: n, className: r, type: i = "button", ...a }, o) {
	let s = t ?? (e ? "secondary" : void 0), c = n ?? (e ? "solid" : "ghost");
	return /* @__PURE__ */ C("button", {
		ref: o,
		type: i,
		"data-theme": sn(s),
		className: Q(jj, Xt(c), e ? "transition-none" : "", r),
		"data-selected": e ? "true" : void 0,
		...a
	});
});
//#endregion
//#region ../ui/src/lib/layout/stickyBoundary.ts
var Mj = new Set([
	"auto",
	"overlay",
	"scroll"
]), Nj = (e) => Mj.has(e.overflowY) || Mj.has(e.overflow), Pj = (e) => {
	let t = e.parentElement;
	for (; t;) {
		if (Nj(window.getComputedStyle(t))) return t;
		t = t.parentElement;
	}
	return null;
};
J("rounded-[var(--pc-radius-lg)]", "border border-[var(--pc-color-depth-4)]", "p-3");
//#endregion
//#region ../ui/src/lib/InteractivePrompt.tsx
var Fj = {
	solid: "text-[var(--pc-color-surface)]",
	outline: "text-[var(--pc-color-surface)]",
	muted: "text-[var(--pc-color-surface-weakest)]",
	ghost: "text-transparent"
}, Ij = {
	xl: "-left-[1rem] top-1/2 h-[5rem] w-[1.7rem] -translate-y-1/2",
	lg: "-left-[0.75rem] top-1/2 h-[3.85rem] w-[1.28rem] -translate-y-1/2",
	md: "-left-[0.8rem] top-1/2 h-[4rem] w-[1.35rem] -translate-y-1/2",
	sm: "-left-[0.7rem] top-1/2 h-[3.65rem] w-[1.2rem] -translate-y-1/2",
	xs: "-left-[0.6rem] top-1/2 h-[3.25rem] w-[1.05rem] -translate-y-1/2"
}, Lj = {
	xl: "rounded-[calc(var(--pc-radius-xl)+0.65rem)]",
	lg: "rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	md: "rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	sm: "rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	xs: "rounded-[calc(var(--pc-radius-lg)+0.05rem)]"
}, Rj = [
	"M32 16",
	"C26 18.5 22 24.5 20 33",
	"C18 40.5 12.5 46.5 7 50",
	"C4 52 2 54 2 56",
	"C2 58 4 60 7 62",
	"C12.5 65.5 18 71.5 20 79",
	"C22 88.5 26 94.5 32 97",
	"V16Z"
].join(""), zj = {
	xl: "p-6",
	lg: "py-3.5 px-3",
	md: "p-4",
	sm: "py-3.5 px-3",
	xs: "p-3"
}, Bj = {
	xl: "@max-sm/interactive-prompt:p-5",
	lg: "",
	md: "@max-sm/interactive-prompt:p-3.5",
	sm: "@max-sm/interactive-prompt:p-3",
	xs: ""
}, Vj = {
	xl: "lg",
	lg: "md",
	md: "md",
	sm: "sm",
	xs: "xs"
}, Hj = {
	xl: "md",
	lg: "md",
	md: "sm",
	sm: "sm",
	xs: "xs"
}, Uj = {
	xl: "ml-[4.25rem]",
	lg: "ml-[3.75rem]",
	md: "ml-[3.75rem]",
	sm: "ml-[3.25rem]",
	xs: "ml-[3rem]"
}, Wj = {
	xl: "lg",
	lg: "md",
	md: "sm",
	sm: "xs",
	xs: "xs"
}, Gj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Kj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
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
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Xj = {
	md: "",
	sm: "",
	xs: "",
	lg: "",
	xl: ""
}, Zj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, Qj = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, $j = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, eM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, tM = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, nM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, rM = {
	xl: "@max-sm/interactive-prompt:!px-5 @max-sm/interactive-prompt:!py-2.5 @max-sm/interactive-prompt:!text-base",
	lg: "@max-sm/interactive-prompt:!px-3.5 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-base",
	md: "@max-sm/interactive-prompt:!px-3 @max-sm/interactive-prompt:!py-2 @max-sm/interactive-prompt:!text-sm",
	sm: "@max-sm/interactive-prompt:!px-2.5 @max-sm/interactive-prompt:!py-1 @max-sm/interactive-prompt:!text-xs",
	xs: ""
}, iM = {
	xl: "@max-sm/interactive-prompt:ml-[3.75rem]",
	lg: "@max-sm/interactive-prompt:ml-[3.25rem]",
	md: "@max-sm/interactive-prompt:ml-[3.25rem]",
	sm: "@max-sm/interactive-prompt:ml-[3rem]",
	xs: "@max-sm/interactive-prompt:ml-[3rem]"
}, aM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, oM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, sM = "mt-2 @max-sm/interactive-prompt:mt-2.5", cM = "gap-2 @max-sm/interactive-prompt:gap-1.5", lM = {
	xl: "leading-6",
	lg: "leading-6",
	md: "leading-5",
	sm: "leading-5",
	xs: "leading-4"
}, uM = {
	xl: "@max-sm/interactive-prompt:leading-6",
	lg: "@max-xs/interactive-prompt:leading-4",
	md: "@max-xs/interactive-prompt:leading-4",
	sm: "@max-sm/interactive-prompt:leading-4",
	xs: ""
}, dM = {
	lg: "",
	md: "",
	sm: "",
	xs: "",
	xl: ""
}, fM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, pM = {
	xl: "@max-sm/interactive-prompt:-left-[0.9rem] @max-sm/interactive-prompt:h-[4.45rem] @max-sm/interactive-prompt:w-[1.5rem]",
	lg: "@max-sm/interactive-prompt:-left-[0.65rem] @max-sm/interactive-prompt:h-[3.45rem] @max-sm/interactive-prompt:w-[1.12rem]",
	md: "@max-sm/interactive-prompt:-left-[0.7rem] @max-sm/interactive-prompt:h-[3.65rem] @max-sm/interactive-prompt:w-[1.2rem]",
	sm: "@max-sm/interactive-prompt:-left-[0.6rem] @max-sm/interactive-prompt:h-[3.25rem] @max-sm/interactive-prompt:w-[1.05rem]",
	xs: ""
}, mM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, hM = {
	xl: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.45rem)]",
	lg: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-xl)+0.2rem)]",
	md: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.2rem)]",
	sm: "@max-sm/interactive-prompt:rounded-[calc(var(--pc-radius-lg)+0.05rem)]",
	xs: ""
}, gM = {
	xl: "",
	lg: "",
	md: "",
	sm: "",
	xs: ""
}, _M = {
	xl: "@max-sm/interactive-prompt:gap-3",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-2",
	sm: "@max-sm/interactive-prompt:gap-1.5",
	xs: ""
}, vM = "@max-sm/interactive-prompt:gap-3", yM = {
	xl: "gap-0.5",
	lg: "gap-px",
	md: "gap-0",
	sm: "gap-0",
	xs: ""
}, bM = {
	xl: "@max-sm/interactive-prompt:gap-0.5",
	lg: "@max-sm/interactive-prompt:gap-px",
	md: "@max-sm/interactive-prompt:gap-0",
	sm: "@max-sm/interactive-prompt:gap-0",
	xs: ""
}, xM = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, SM = {
	xl: "@max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:gap-1",
	xs: ""
}, CM = {
	xl: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	lg: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-2",
	md: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1.5",
	sm: "@max-sm/interactive-prompt:ml-1 @max-sm/interactive-prompt:gap-1",
	xs: ""
}, wM = {
	xl: "@max-sm/interactive-prompt:!h-14 @max-sm/interactive-prompt:!w-14",
	lg: "@max-sm/interactive-prompt:!h-12 @max-sm/interactive-prompt:!w-12",
	md: "@max-sm/interactive-prompt:!h-10 @max-sm/interactive-prompt:!w-10",
	sm: "@max-sm/interactive-prompt:!h-9 @max-sm/interactive-prompt:!w-9",
	xs: ""
}, TM = (e, t) => t ? Wj[e] : e, EM = (e) => e === "outline" ? "solid" : e, DM = (e) => e === "danger" ? "danger" : "secondary-tinted", OM = (e) => e === "danger" ? "danger" : "default", kM = (e) => {
	switch (e) {
		case "xl": return "text-3xl @max-sm/interactive-prompt:text-2xl";
		case "lg": return "text-2xl @max-sm/interactive-prompt:text-xl";
		case "md": return "text-xl @max-lg/interactive-prompt:text-lg";
		case "sm": return "text-lg @max-sm/interactive-prompt:text-base";
		case "xs": return "text-base";
	}
}, AM = (e) => "", jM = (e) => {
	switch (e) {
		case "xl": return "text-base @max-sm/interactive-prompt:!text-sm";
		case "lg": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "md": return "text-sm @max-xs/interactive-prompt:!text-xs";
		case "sm": return "text-xs";
		case "xs": return "text-xs";
	}
};
function MM({ className: e, title: t, body: n, meta: r, icon: i, iconSlotClassName: a, trailingVisual: o, footer: s, actions: c = [], actionsOffsetClassName: l, compact: u = !1, tone: d = "neutral", appearance: f = "solid", size: p = "lg" }) {
	let m = TM(p, u), h = Vj[m], g = Hj[m], _ = c.length > 0, v = !!s, y = f !== "ghost", b = DM(d), x = OM(d), S = i ? J(Uj[m], l, iM[m]) : void 0;
	return /* @__PURE__ */ C("div", {
		"data-interactive-prompt": "true",
		"data-theme": b,
		"data-compact": u ? "true" : void 0,
		className: J("@container/interactive-prompt w-full max-w-full", "transition-[transform,opacity] duration-200 ease-out", e),
		children: /* @__PURE__ */ w("section", {
			"data-slot": "interactive-prompt-shell",
			className: J("relative overflow-visible"),
			children: [y && /* @__PURE__ */ C("svg", {
				"data-slot": "interactive-prompt-tail",
				"aria-hidden": "true",
				viewBox: "0 0 32 100",
				className: J("pointer-events-none absolute z-0 overflow-visible", Fj[f], Ij[m], pM[m], Gj[m], mM[m]),
				children: /* @__PURE__ */ C("path", {
					fill: "currentColor",
					d: Rj
				})
			}), /* @__PURE__ */ C(hn, {
				variant: "surface",
				appearance: EM(f),
				size: "flush",
				className: J("relative z-[1] w-full max-w-full text-left", Lj[m], hM[m], Kj[m], gM[m]),
				children: /* @__PURE__ */ w("div", {
					className: J("w-full max-w-full text-[var(--pc-color-text)]", zj[m], Bj[m], qj[m], Jj[m]),
					children: [/* @__PURE__ */ C(Pn, {
						as: "div",
						container: !1,
						flush: !0,
						size: h,
						variant: x,
						appearance: "ghost",
						className: J(_M[h], $j[h], eM[h]),
						leadingClassName: i ? vM : void 0,
						leadingVisual: i,
						leadingVisualClassName: J(a, wM[h], tM[h], nM[h]),
						leadingContentClassName: J(yM[h], bM[h], Zj[h], Qj[h]),
						headline: t,
						subheader: n,
						headlineRowClassName: xM[h],
						secondaryActions: r ? /* @__PURE__ */ C("div", {
							className: J("flex min-w-0 flex-wrap items-center gap-2", "[&_a]:underline [&_a]:underline-offset-2"),
							children: r
						}) : void 0,
						secondaryActionsClassName: SM[h],
						actions: o,
						actionsClassName: SM[h],
						inlineActionsClassName: CM[h],
						actionsAlign: "start",
						headlineClassName: J(kM(h), "text-balance leading-tight tracking-tight @max-sm/interactive-prompt:text-wrap @max-sm/interactive-prompt:tracking-normal", AM(h)),
						subheaderClassName: J("max-w-[60ch] text-[var(--pc-color-text-muted)]", jM(h), lM[h], uM[h], dM[h], fM[h])
					}), (_ || v) && /* @__PURE__ */ w("div", {
						"data-slot": "interactive-prompt-actions",
						className: J("min-w-0", sM, S, i ? aM[m] : void 0, i ? Yj[m] : void 0),
						children: [v && /* @__PURE__ */ C("div", {
							"data-slot": "interactive-prompt-footer",
							className: J(_ && "pb-2 @max-sm/interactive-prompt:pb-1.5"),
							children: s
						}), _ && /* @__PURE__ */ C("div", {
							className: J("flex min-w-0 flex-wrap items-center", cM),
							children: c.map((e) => /* @__PURE__ */ C(un, {
								label: e.label,
								onClick: e.onClick,
								disabled: e.disabled,
								variant: e.variant ?? "default",
								appearance: e.appearance,
								size: g,
								className: J(rM[g], Xj[g], oM[g]),
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
var NM = {
	sm: "text-sm",
	xs: "text-xs"
};
J(NM.sm, "font-medium text-[var(--pc-color-text)]"), J(NM.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), J("font-mono", NM.sm, "text-[var(--pc-color-text)]", "break-words [overflow-wrap:anywhere]"), J("block min-w-0 max-w-full overflow-hidden text-ellipsis whitespace-nowrap"), J("@container/preference-panel", "flex w-full flex-col");
var PM = J("relative grid w-full grid-cols-1", "@xl/preference-panel:gap-x-6", "@xl/preference-panel:grid-cols-[minmax(16rem,0.95fr)_minmax(16rem,1.05fr)]");
J(PM, "gap-y-3 px-3 py-3.5"), J(PM, "gap-y-2 px-0.5 py-0.5 -mx-0.5"), J("flex min-w-0 justify-between gap-3"), J("absolute right-3 top-3.5 flex shrink-0 items-center", "@xl/preference-panel:static"), o("outlined");
//#endregion
//#region ../ui/src/lib/LinearProgress.tsx
var FM = {
	xl: "h-4",
	lg: "h-3.5",
	md: "h-3",
	sm: "h-2",
	xs: "h-1.5"
}, IM = (e, t, n) => Math.min(Math.max(e, t), n), LM = (e) => Number.isFinite(e) ? Math.max(Math.trunc(e ?? 1), 1) : 1, RM = (e, t) => Number.isFinite(e) ? IM(Math.trunc(e ?? 0), 0, Math.max(t - 1, 0)) : 0, zM = ({ stepCount: e = 1, currentStepIndex: t = 0, showInitialFill: n = !1 }) => {
	let r = LM(e), i = RM(t, r);
	return r <= 1 ? 100 : IM(n ? (i + 1) / r * 100 : i / (r - 1) * 100, 0, 100);
};
function BM({ mode: e = "determinate", size: t = "md", variant: n = "default", inheritTheme: r = !1, stepCount: i = 1, currentStepIndex: a = 0, showInitialFill: o = !1, id: s, ariaLabel: c, ariaLabelledBy: l, ariaDescribedBy: u }) {
	let d = r ? void 0 : sn(n), f = e === "indeterminate", p = f ? void 0 : zM({
		stepCount: i,
		currentStepIndex: a,
		showInitialFill: o
	}), m = p === void 0 ? void 0 : `${p.toFixed(2)}%`, h = !f && p !== void 0 && p <= 0, g = p !== void 0 && p > 0 && p < 100;
	return /* @__PURE__ */ C("div", {
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
		children: /* @__PURE__ */ C("div", {
			"data-slot": "linear-progress-track",
			className: J("relative w-full overflow-hidden", h ? "[background:transparent]" : "[background:var(--pc-color-neutral)]", FM[t]),
			children: /* @__PURE__ */ C("span", {
				"aria-hidden": "true",
				"data-slot": "linear-progress-fill",
				"data-mode": e,
				className: Q(J("block h-full", "[background:var(--pc-color-surface)]", "will-change-[transform,width]", g && "rounded-r-[var(--pc-radius-full)]"), f ? J("absolute inset-y-0 left-0 w-[36%]", "rounded-[var(--pc-radius-full)]", "animate-[pc-linear-progress-indeterminate_1.4s_ease-in-out_infinite]") : "transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"),
				style: m ? { width: m } : void 0
			})
		})
	});
}
//#endregion
//#region ../ui/src/lib/CircularProgress.tsx
var VM = 44, HM = "0 0 44 44", UM = 4, WM = "var(--pc-color-depth-4)", GM = "var(--pc-color-success)", KM = (e, t, n) => Math.min(Math.max(e, t), n);
function qM({ value: e, max: t = 100, strokeWidth: n = UM, className: r, contentClassName: i, trackColor: a = WM, indicatorColor: o = GM, ariaLabel: s, children: c }) {
	let l = Number.isFinite(t) && t > 0 ? t : 100, u = Number.isFinite(e) ? KM(e, 0, l) : 0, d = KM(n, 1.5, 10), f = (VM - d) / 2, p = 2 * Math.PI * f, m = p * (1 - u / l);
	return /* @__PURE__ */ w("div", {
		"data-slot": "circular-progress",
		role: s ? "progressbar" : void 0,
		"aria-label": s,
		"aria-hidden": s ? void 0 : "true",
		"aria-valuemin": s ? 0 : void 0,
		"aria-valuemax": s ? l : void 0,
		"aria-valuenow": s ? Math.round(u) : void 0,
		className: J("relative block h-full w-full", r),
		children: [/* @__PURE__ */ w("svg", {
			viewBox: HM,
			className: "block h-full w-full -rotate-90 overflow-visible",
			children: [/* @__PURE__ */ C("circle", {
				cx: VM / 2,
				cy: VM / 2,
				r: f,
				fill: "none",
				stroke: a,
				strokeWidth: d
			}), /* @__PURE__ */ C("circle", {
				cx: VM / 2,
				cy: VM / 2,
				r: f,
				fill: "none",
				stroke: o,
				strokeWidth: d,
				strokeLinecap: "round",
				strokeDasharray: p,
				strokeDashoffset: m,
				className: J("transition-[stroke-dashoffset] duration-500", "ease-[cubic-bezier(0.22,1,0.36,1)]", "will-change-[stroke-dashoffset]")
			})]
		}), c && /* @__PURE__ */ C("div", {
			"data-slot": "circular-progress-content",
			className: J("absolute inset-[18%] flex items-center justify-center", i),
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
})), J("[background:var(--pc-color-outline-surface,transparent)]", "text-[var(--pc-color-text)]");
//#endregion
//#region ../ui/src/lib/useActionConfirmation.tsx
var JM = (e) => typeof e == "object" && !!e, YM = (e) => {
	for (let t of [
		"message",
		"error",
		"statusText",
		"title",
		"detail"
	]) {
		let n = e[t], r = Uc(n);
		if (r) return r;
	}
	let t = e.error;
	if (t && typeof t == "object" && typeof t.message == "string") {
		let e = Uc(t.message);
		if (e) return e;
	}
	if ("body" in e) {
		let t = e.body, n = Uc(t);
		if (n) return n;
		if (JM(t)) {
			let e = YM(t);
			if (e) return e;
		}
	}
	return null;
}, XM = (e) => {
	if (typeof e == "string") return Uc(e);
	if (e instanceof Error) return Uc(e.message);
	if (JM(e)) {
		let t = YM(e);
		if (t) return t;
	}
	return null;
}, ZM = 440;
function QM(e = {}) {
	let [t, n] = b(null), [r, i] = b(null), [a, o] = b(!1), [s, c] = b(!1), l = y(null), u = y(null), f = e.presentation ?? "modal", m = e.drawer, h = e.modal, g = e.renderActions, v = f === "drawer", x = v, S = d(() => {
		l.current !== null && (clearTimeout(l.current), l.current = null);
	}, []), T = d(() => {
		u.current !== null && (typeof window < "u" && window.cancelAnimationFrame(u.current), u.current = null);
	}, []);
	p(() => () => {
		S(), T();
	}, [S, T]);
	let E = d(() => {
		if (o(!1), i(null), !x) {
			n(null), c(!1);
			return;
		}
		c(!1), S(), l.current = setTimeout(() => {
			n(null), l.current = null;
		}, ZM);
	}, [S, x]), D = d(async () => {
		if (!(!t || a)) {
			o(!0), i(null);
			try {
				await t.onConfirm(), E();
			} catch (e) {
				i(t.errorMessage || XM(e) || "Unable to complete action."), o(!1);
			}
		}
	}, [
		E,
		a,
		t
	]);
	return {
		openActionConfirmation: d((e) => {
			if (S(), T(), n(e), i(null), o(!1), !x) {
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
			S,
			T,
			x
		]),
		actionConfirmationModal: _(() => {
			if (!t) return null;
			let e = Uc(t.confirmLabel) ?? "Confirm", n = t.confirmVariant ?? "neutral", i = /* @__PURE__ */ w("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ C("div", {
					className: "text-sm text-[var(--pc-color-text-muted)]",
					children: t.description
				}), r ? /* @__PURE__ */ C("p", {
					className: "text-sm text-[var(--pc-color-danger)]",
					children: r
				}) : null]
			}), o = g, c = o ? /* @__PURE__ */ C(o, {
				confirmLabel: e,
				confirmVariant: n,
				isSubmitting: a,
				onConfirm: () => {
					D();
				}
			}) : /* @__PURE__ */ C("div", {
				className: "flex justify-end gap-2",
				children: /* @__PURE__ */ C(un, {
					type: "button",
					variant: n,
					loading: a,
					onClick: () => {
						D();
					},
					label: e
				})
			}), l = v ? m?.actionsPlacement ?? "content" : "content", u = /* @__PURE__ */ w("div", {
				className: "flex flex-col gap-4",
				children: [i, !v || l === "content" ? c : null]
			});
			if (v) {
				let e;
				return l === "footer" && (e = m?.renderFooter ? m.renderFooter(c) : c), /* @__PURE__ */ C(BA, {
					isOpen: s,
					onClose: E,
					side: m?.side,
					variant: m?.variant,
					title: t.title,
					headerActions: m?.headerActions,
					onBack: m?.onBack,
					backButtonLabel: m?.backButtonLabel,
					backButtonDisabled: m?.backButtonDisabled,
					portalContainer: m?.portalContainer,
					closeButtonLabel: m?.closeButtonLabel,
					closeOnOverlayClick: m?.closeOnOverlayClick,
					closeOnEscape: m?.closeOnEscape,
					showHeaderDivider: m?.showHeaderDivider,
					size: m?.size,
					fullSize: m?.fullSize,
					ariaLabel: m?.ariaLabel,
					ariaLabelledby: m?.ariaLabelledby,
					ariaDescribedby: m?.ariaDescribedby,
					showCloseButton: m?.showCloseButton,
					footer: e,
					children: /* @__PURE__ */ C("div", {
						className: "px-5 pb-5 pt-2",
						children: u
					})
				});
			}
			return /* @__PURE__ */ C(Cj, {
				isOpen: s,
				onClose: E,
				title: t.title,
				notification: t.notification,
				size: h?.size,
				variant: h?.variant,
				portalContainer: h?.portalContainer,
				closeButtonLabel: h?.closeButtonLabel,
				showCloseButton: h?.showCloseButton,
				closeOnOverlayClick: h?.closeOnOverlayClick,
				closeOnEscape: h?.closeOnEscape,
				children: u
			});
		}, [
			r,
			E,
			D,
			a,
			t,
			g,
			s,
			m,
			v,
			h
		]),
		isActionConfirmationOpen: s,
		closeActionConfirmation: E
	};
}
//#endregion
//#region ../ui/src/lib/toast/ToastProvider.tsx
var $M = 6e3, eN = (e, t) => {
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
}, tN = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : Math.random().toString(36).slice(2), nN = o(null);
function rN({ children: e }) {
	let [t, n] = v(eN, []), r = y(/* @__PURE__ */ new Map()), i = d((e, t) => {
		n({
			type: "setPaused",
			id: e,
			isPaused: t
		});
	}, []), a = d((e) => {
		let t = r.current.get(e);
		t && (typeof window < "u" && t.timeoutId !== null && window.clearTimeout(t.timeoutId), r.current.delete(e));
	}, []), o = d((e) => {
		n({
			type: "remove",
			id: e
		});
	}, []), s = d((e, t) => {
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
	}, [a, o]), c = d((e) => {
		a(e), o(e);
	}, [a, o]), l = d((e) => {
		let t = Uc(e.id) ?? tN(), r = e.variant ?? "default", i = e.persistent ?? !1, o = $M;
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
	}, [a, s]), u = d((e) => {
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
	}, [i]), f = d((e) => {
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
	]), m = d(() => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear(), n({ type: "clear" });
	}, [a]), h = d((e) => {
		let n = r.current.get(e);
		if (!n) {
			let n = t.find((t) => t.id === e);
			return !n || n.category !== "transient" ? null : 0;
		}
		if (typeof window > "u" || n.timeoutId === null) return n.remaining;
		let i = Date.now() - n.startedAt;
		return Math.max(n.remaining - i, 0);
	}, [t]);
	p(() => () => {
		typeof window < "u" && r.current.forEach((e, t) => {
			a(t);
		}), r.current.clear();
	}, [a]);
	let g = _(() => ({
		toasts: t,
		publish: l,
		dismiss: c,
		pause: u,
		resume: f,
		clear: m,
		getRemainingMs: h
	}), [
		m,
		c,
		h,
		u,
		l,
		f,
		t
	]);
	return /* @__PURE__ */ C(nN.Provider, {
		value: g,
		children: e
	});
}
var iN = () => {
	let e = f(nN);
	if (!e) throw Error("useToastContext must be used within a ToastProvider");
	return e;
}, aN = (e) => e ? {
	id: e.id,
	variant: e.kind === "error" ? "danger" : e.kind,
	message: e.message,
	description: e.description
} : null;
//#endregion
//#region ../ui/src/lib/toast/ToastItem.tsx
function oN({ toast: e, getRemainingMs: t, animationTick: n }) {
	if (e.category !== "transient") return null;
	let r = Math.max(n - e.createdAt, 0), i = t(e.id) ?? Math.max(e.durationMs - r, 0);
	return /* @__PURE__ */ C("div", {
		"aria-hidden": "true",
		"data-progress-bar": "true",
		className: "pointer-events-none absolute bottom-0 left-0 right-0 h-1 rounded-b-[var(--pc-radius-lg)] bg-[var(--pc-color-depth-2)]",
		children: /* @__PURE__ */ C("div", {
			className: "h-full bg-[var(--pc-color-text)] w-[var(--pc-toast-progress)]",
			style: { "--pc-toast-progress": `${((e.durationMs > 0 ? Math.min(Math.max(i / e.durationMs, 0), 1) : 0) * 100).toFixed(2)}%` }
		})
	});
}
function sN({ toast: e, dismiss: t, pause: n, resume: r, getRemainingMs: i, animationTick: a }) {
	let o = e.category === "persistent", s = !!e.description, c = !!e.action, l = e.category === "transient", u = o ? "assertive" : "polite", d = o ? "alert" : "status", f = e.variant === "default" ? void 0 : e.variant, p = () => {
		n(e.id);
	}, m = () => {
		r(e.id);
	};
	return /* @__PURE__ */ C("div", {
		className: "pointer-events-auto w-full sm:w-auto sm:max-w-sm",
		children: /* @__PURE__ */ w("div", {
			role: d,
			"aria-live": u,
			"data-theme": f,
			className: J("pointer-events-auto relative flex min-w-[min(90vw,24rem)] max-w-full flex-col overflow-hidden rounded-[var(--pc-radius-lg)] bg-[var(--pc-color-surface)] px-4 text-[var(--pc-color-text)]", l ? "pt-3 pb-3.5" : "py-3", "transition duration-200 shadow-lg", e.isPaused ? "opacity-95" : "opacity-100"),
			onPointerEnter: p,
			onPointerLeave: m,
			onFocusCapture: p,
			onBlurCapture: m,
			children: [/* @__PURE__ */ w("div", {
				className: "relative pr-8",
				children: [/* @__PURE__ */ w("div", {
					className: "flex min-w-0 flex-col gap-2",
					children: [
						/* @__PURE__ */ C("p", {
							className: "text-lg leading-5 font-medium",
							children: e.message
						}),
						s ? /* @__PURE__ */ C("p", {
							className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
							children: e.description
						}) : null,
						c ? /* @__PURE__ */ C("div", {
							className: "flex items-center",
							children: /* @__PURE__ */ C(un, {
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
				}), /* @__PURE__ */ C("div", {
					className: "absolute inset-y-0 -right-0.5 flex items-center",
					children: /* @__PURE__ */ C(un, {
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
						leadingIcon: /* @__PURE__ */ C(qu, {})
					})
				})]
			}), /* @__PURE__ */ C(oN, {
				toast: e,
				getRemainingMs: i,
				animationTick: a
			})]
		})
	});
}
//#endregion
//#region ../ui/src/lib/toast/layout.ts
var cN = {
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
}, lN = (e) => cN[e];
//#endregion
//#region ../ui/src/lib/toast/ToastViewport.tsx
function uN(e) {
	let [t, n] = b(0);
	return p(() => {
		if (!e || typeof window > "u") return;
		let t = null, r = () => {
			n(Date.now()), t = window.requestAnimationFrame(r);
		};
		return t = window.requestAnimationFrame(r), () => {
			t !== null && window.cancelAnimationFrame(t);
		};
	}, [e]), t;
}
function dN({ orientation: e = "se", portalContainer: t }) {
	let { toasts: n, dismiss: r, pause: i, resume: a, getRemainingMs: o } = iN(), s = typeof document > "u" ? null : t ?? document.body, c = uN(n.some((e) => e.category === "transient" && !e.isPaused)), l = lN(e), u = J("pointer-events-none z-[2147483647] flex w-[calc(100vw-1.5rem)] max-w-[calc(100vw-1.5rem)] gap-3 sm:w-auto sm:max-w-none", t ? "absolute" : "fixed", l.anchorClassName, l.alignItemsClassName, l.stackDirectionClassName);
	return !s || n.length === 0 ? null : T(/* @__PURE__ */ C("div", {
		className: u,
		children: n.map((e) => /* @__PURE__ */ C(sN, {
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
var fN = {
	default: "default",
	neutral: "neutral",
	secondary: "secondary",
	primary: "primary",
	success: "success",
	error: "danger",
	warning: "warning",
	info: "info"
}, pN = (e, t, n) => ({
	id: n?.id,
	variant: e,
	message: t,
	description: n?.description,
	action: n?.action,
	persistent: n?.persistent ?? !1
}), mN = (e) => {
	let t = Object.keys(fN), n = {};
	return t.forEach((t) => {
		let r = fN[t];
		n[t] = (t, n) => e(pN(r, t, n));
	}), n;
}, hN = () => {
	let { publish: e, dismiss: t, pause: n, resume: r, clear: i, toasts: a } = iN();
	return {
		toast: _(() => ({
			push: (t) => e({
				...t,
				variant: t.variant ?? "default"
			}),
			...mN(e),
			fromStatus: (t, n) => {
				let r = aN(t);
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
}, gN = /* @__PURE__ */ function(e) {
	return e.PAYIN = "payin", e.PAYOUT = "payout", e;
}({}), _N = /* @__PURE__ */ function(e) {
	return e.ACCORDION = "accordion", e.GRID = "grid", e.LIST = "list", e;
}({}), vN = /* @__PURE__ */ function(e) {
	return e.ACCORDION = "accordion", e.GRID = "grid", e.LIST = "list", e.NONE = "none", e.PICKER = "picker", e;
}({}), yN = /* @__PURE__ */ function(e) {
	return e.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL = "onPaymentFailed:lastSuccessful", e;
}({}), bN = {
	merchantId: "000e8400-e29b-41d4-a716-446655440000",
	userId: "kalle_kula",
	sessionId: "session_example",
	method: gN.PAYIN,
	apiUrl: "/api",
	debug: !1,
	initialAmount: "9001",
	lockAmount: !1,
	currency: "EUR",
	uiListStyle: _N.GRID,
	locale: "en-GB",
	uiPaymentMethodSwitcher: !0,
	uiUserBalance: !1,
	uiProgressBar: !0,
	uiInteractivePrompts: !0,
	uiCancelPendingPayout: !0,
	uiComboView: !0,
	uiComboView__PaymentTypes: vN.PICKER,
	uiComboView__PaymentTypePicker: !0,
	uiComboView__PaymentForm: !0,
	uiAmountView: !0,
	uiAmountView__PaymentTypePicker: !0,
	uiAmountView__PaymentForm: !0,
	uiCardBrand: !0,
	uiListSelectable: !0,
	uiShowFees: !0,
	uiPreselectedPaymentType: null,
	uiAccountDelete: !0,
	uiBonuses: !0,
	uiBonusesAvailable: !0,
	uiSuggestAmounts: "",
	uiSuggestAction: [yN.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL],
	gotoPaymentType: null,
	extraAttributes: void 0,
	user: void 0,
	bonuses: void 0,
	currencyFormatOptions: { trailingZeroDisplay: "stripIfInteger" },
	dateTimeFormatOptions: {
		dateStyle: "medium",
		timeStyle: "short"
	},
	hostedFieldsUrl: "https://hf.pvault.net",
	hostedFieldsFonts: void 0,
	hostedFieldsAutoFocusNextField: !0,
	uiTheme: void 0,
	uiSelectorPrefix: void 0
}, xN = (e) => ({
	method: e.method,
	selectedPaymentType: e.gotoPaymentType,
	currency: e.currency,
	initialAmount: e.initialAmount,
	selectedBonusCode: null,
	paymentFormDraft: null,
	comboViewFormDraft: null,
	resetFlowOnBack: !1,
	hasAppliedGotoPaymentType: !1
}), SN = xN(bN), CN = () => {
	throw Error("setCashierState must be used within a Cashier provider");
}, wN = o({
	...bN,
	...SN,
	setCashierState: CN
}), TN = "pc-cashier", EN = (e) => e.replace(/^-+|-+$/g, ""), DN = (e, t = "item") => {
	let n = EN((typeof e == "string" ? e : "").toLowerCase().replace(/[^a-z0-9]+/g, "-"));
	return n.length > 0 ? n : t;
}, ON = () => {
	let e = /* @__PURE__ */ new Map();
	return (t, n = "item") => {
		let r = DN(t, n), i = (e.get(r) ?? 0) + 1;
		return e.set(r, i), i === 1 ? r : `${r}-${i.toString()}`;
	};
}, kN = (e) => {
	let t = (e, t = "item") => DN(e, t);
	return {
		prefix: e,
		baseClass: TN,
		id: (n, r) => {
			let i = t(n, "slot"), a = r?.slug ? t(r.slug, r.fallbackSlug ?? "item") : null;
			return a ? `${e}-${i}-${a}` : `${e}-${i}`;
		},
		className: (e, n) => {
			let r = `${TN}__${t(e, "slot")}`, i = n?.slug ? t(n.slug, n.fallbackSlug ?? "item") : null;
			return i ? `${r} ${r}--${i}` : r;
		},
		token: t
	};
}, AN = o(kN(TN)), jN = (e) => {
	if (!e) return null;
	let t = DN(e, "");
	return t.length > 0 ? t : null;
};
function MN({ prefix: e, children: t }) {
	let n = jN(e) ?? TN, r = _(() => kN(n), [n]);
	return /* @__PURE__ */ C(AN.Provider, {
		value: r,
		children: t
	});
}
var NN = () => f(AN), PN = "44px", FN = [
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
].join(" "), IN = {
	height: PN,
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
}, LN = {
	height: PN,
	backgroundImage: FN,
	backgroundRepeat: "no-repeat",
	backgroundSize: "100% 100%"
}, RN = "sticky left-0 right-0 top-0 z-20 flex-shrink-0 w-full", zN = "relative z-20 w-full", BN = "sticky bottom-0 z-40 h-0 overflow-visible", VN = "-translate-y-full transform-gpu will-change-transform", HN = (e) => e === "top" ? "grid gap-3 justify-center @lg:justify-start" : "grid gap-3", UN = (e) => e === "top" ? "" : "pb-4", WN = (e) => e === "top" ? "mx-auto w-full" : "mx-auto w-full px-3", GN = (e, t) => ({ gridTemplateColumns: "repeat(" + t.toString() + ", minmax(0, 1fr))" }), KN = (e) => e === "top" ? "flex justify-center" : "flex w-full justify-center";
function qN({ placement: e, items: t, showFade: n = !0 }) {
	let r = NN(), i = t.length, a = ON(), o = GN(e, i), s = KN(e), c = HN(e), l = e === "top" ? RN : zN, u = UN(e), d = WN(e);
	if (i === 0) return null;
	let f = /* @__PURE__ */ C("div", {
		id: r.id(`navigation-rail-grid-${e}`),
		className: J(r.className(`navigation-rail-grid-${e}`), c),
		style: o,
		children: t.map((t, n) => {
			let i = `navigation-shell-item-${e}-${n.toString()}`, o = a(i, "action");
			return /* @__PURE__ */ C("div", {
				id: r.id("navigation-item", { slug: o }),
				className: J(r.className("navigation-item", { slug: o }), s),
				children: t
			}, i);
		})
	});
	return e === "bottom" ? /* @__PURE__ */ w("div", {
		id: r.id(`navigation-rail-${e}`),
		className: J(r.className(`navigation-rail-${e}`), l),
		children: [/* @__PURE__ */ C("div", {
			"aria-hidden": "true",
			inert: !0,
			className: "invisible pointer-events-none w-full",
			children: /* @__PURE__ */ C("div", {
				className: J(r.className("navigation-rail-wrapper"), u),
				children: /* @__PURE__ */ C("div", {
					className: J(r.className("navigation-rail-inner"), d),
					children: f
				})
			})
		}), /* @__PURE__ */ C("div", {
			className: BN,
			children: /* @__PURE__ */ w("div", {
				"data-slot": "navigation-rail-bottom-surface",
				"data-pc-scroll-obstruction": "bottom",
				className: J("pointer-events-none relative w-full bg-[var(--pc-color-surface)]", VN),
				children: [n && /* @__PURE__ */ C("div", {
					"aria-hidden": "true",
					"data-slot": "navigation-rail-bottom-fade",
					"data-pc-scroll-obstruction": "bottom",
					style: IN,
					className: "pointer-events-none absolute inset-x-0 bottom-full"
				}), /* @__PURE__ */ C("div", {
					className: "pointer-events-auto",
					children: /* @__PURE__ */ C("div", {
						className: J(r.className("navigation-rail-wrapper"), u),
						children: /* @__PURE__ */ C("div", {
							className: J(r.className("navigation-rail-inner"), d),
							children: f
						})
					})
				})]
			})
		})]
	}) : /* @__PURE__ */ C("div", {
		id: r.id(`navigation-rail-${e}`),
		"data-pc-scroll-obstruction": "top",
		className: J(r.className(`navigation-rail-${e}`), l),
		children: /* @__PURE__ */ C("div", {
			className: J(r.className("navigation-rail-wrapper"), u),
			children: /* @__PURE__ */ C("div", {
				className: J(r.className("navigation-rail-inner"), d),
				children: f
			})
		})
	});
}
//#endregion
//#region src/context/navigationShell.tsx
var JN = () => ({
	top: [],
	bottom: []
}), YN = o(void 0);
function XN({ children: e, beforeTopRail: t, themeStyles: n }) {
	let [r, i] = b(() => JN()), [a, o] = b(null), [s, c] = b(null), [l, u] = b(0), [f, p] = b(!1), m = d((e) => {
		o(e);
	}, []), h = d((e) => {
		c(e), e || u(0);
	}, []), g = d((e, t) => {
		i((n) => n[e] === t ? n : {
			...n,
			[e]: t
		});
	}, []), v = d((e) => {
		if (!e) {
			i(JN()), o(null);
			return;
		}
		i((t) => t[e].length === 0 ? t : {
			...t,
			[e]: []
		});
	}, []), y = _(() => ({
		items: r,
		setItems: g,
		clearItems: v,
		registerOverlay: m,
		contentNode: s,
		contentInset: l,
		setContentInset: u,
		setBottomRailFadeSuppressed: p
	}), [
		r,
		v,
		s,
		l,
		m,
		g
	]);
	return /* @__PURE__ */ C(YN.Provider, {
		value: y,
		children: /* @__PURE__ */ C($N, {
			itemsByPlacement: r,
			overlay: a,
			onContentNodeChange: h,
			contentInset: l,
			bottomRailFadeSuppressed: f,
			beforeTopRail: t,
			themeStyles: n,
			children: e
		})
	});
}
function ZN() {
	let e = f(YN);
	if (!e) throw Error("useNavigationShell must be used within a NavigationShellProvider");
	return e;
}
function QN(e, t, n = !0) {
	let { setItems: r, clearItems: i } = ZN();
	p(() => {
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
	]), p(() => () => {
		i(e);
	}, [i, e]);
}
function $N({ itemsByPlacement: e, overlay: t, onContentNodeChange: n, contentInset: r, bottomRailFadeSuppressed: i, beforeTopRail: a, themeStyles: o, children: s }) {
	let c = NN(), l = 16 + Math.max(r, 0), u = r > 0 && !i ? { paddingBottom: r } : void 0;
	return /* @__PURE__ */ w("div", {
		id: c.id("navigation-shell"),
		className: J(c.className("navigation-shell"), "relative flex h-full min-h-0 w-full flex-col overflow-hidden"),
		style: o,
		children: [
			a,
			/* @__PURE__ */ C(qN, {
				placement: "top",
				items: e.top
			}),
			/* @__PURE__ */ w("div", {
				id: c.id("navigation-main"),
				className: J(c.className("navigation-main"), "relative flex min-h-0 flex-1 flex-col"),
				children: [/* @__PURE__ */ C("div", {
					ref: n,
					id: c.id("navigation-content"),
					className: J(c.className("navigation-content"), "relative flex min-h-0 flex-1 flex-col overflow-hidden"),
					style: u,
					children: s
				}), t && /* @__PURE__ */ C("div", {
					id: c.id("navigation-overlay"),
					className: J(c.className("navigation-overlay"), "pointer-events-none absolute inset-0 z-60"),
					children: /* @__PURE__ */ C("div", {
						className: J(c.className("navigation-overlay-content"), "pointer-events-auto absolute right-4"),
						style: { bottom: l },
						children: t
					})
				})]
			}),
			/* @__PURE__ */ C(qN, {
				placement: "bottom",
				items: e.bottom,
				showFade: !i
			})
		]
	});
}
var eP = {
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
}, tP = JSON.stringify({
	sessionId: "session_example",
	amount: "91038501",
	accountId: "",
	input: {
		holderName: "X'Æon-Júliën Þørnßon-Smith Jr.",
		expiryDate: "0825",
		transactionToken: "12a2ab5daf8ab37b0d6724b23ff8765f"
	},
	userId: "kalle_kula"
}), nP = o(void 0), rP = () => void 0, iP = {
	overridePayload: "",
	setOverridePayload: rP,
	resetOverridePayload: rP,
	isLocked: !1,
	setLocked: rP
}, aP = (() => {
	let e = !1;
	return () => {
		process.env.NODE_ENV !== "production" && (e ||= (console.warn("useOverridePayload was accessed outside an OverridePayloadProvider. Falling back to a no-op implementation."), !0));
	};
})();
function oP({ children: e }) {
	let [t, n] = b(""), [r, i] = b(!1), a = d(() => {
		n("");
	}, []), o = d((e) => {
		i(e);
	}, []), s = _(() => ({
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
	return /* @__PURE__ */ C(nP.Provider, {
		value: s,
		children: e
	});
}
function sP() {
	return f(nP) || (aP(), iP);
}
//#endregion
//#region src/context/paymentFormReset.tsx
var cP = o(void 0);
function lP({ children: e }) {
	let t = y(null), n = y(!1), [r, i] = b(!1), a = d((e) => {
		let r = !!e;
		t.current === e && n.current === r || (t.current = e, n.current !== r && (n.current = r, i(r)));
	}, []), o = d(() => {
		t.current?.();
	}, []), s = _(() => ({
		reset: o,
		registerReset: a,
		hasResetHandler: r
	}), [
		r,
		a,
		o
	]);
	return /* @__PURE__ */ C(cP.Provider, {
		value: s,
		children: e
	});
}
function uP() {
	let e = f(cP);
	if (!e) throw Error("usePaymentFormReset must be used within a PaymentFormResetProvider");
	return e;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/subscribable.js
var dP = class {
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
}, fP = new class extends dP {
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
}(), pP = {
	setTimeout: (e, t) => setTimeout(e, t),
	clearTimeout: (e) => clearTimeout(e),
	setInterval: (e, t) => setInterval(e, t),
	clearInterval: (e) => clearInterval(e)
}, mP = new class {
	#e = pP;
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
function hP(e) {
	setTimeout(e, 0);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/utils.js
var gP = typeof window > "u" || "Deno" in globalThis;
function _P() {}
function vP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function yP(e) {
	return typeof e == "number" && e >= 0 && e !== Infinity;
}
function bP(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0);
}
function xP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function SP(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function CP(e, t) {
	let { type: n = "all", exact: r, fetchStatus: i, predicate: a, queryKey: o, stale: s } = e;
	if (o) {
		if (r) {
			if (t.queryHash !== TP(o, t.options)) return !1;
		} else if (!DP(t.queryKey, o)) return !1;
	}
	if (n !== "all") {
		let e = t.isActive();
		if (n === "active" && !e || n === "inactive" && e) return !1;
	}
	return !(typeof s == "boolean" && t.isStale() !== s || i && i !== t.state.fetchStatus || a && !a(t));
}
function wP(e, t) {
	let { exact: n, status: r, predicate: i, mutationKey: a } = e;
	if (a) {
		if (!t.options.mutationKey) return !1;
		if (n) {
			if (EP(t.options.mutationKey) !== EP(a)) return !1;
		} else if (!DP(t.options.mutationKey, a)) return !1;
	}
	return !(r && t.state.status !== r || i && !i(t));
}
function TP(e, t) {
	return (t?.queryKeyHashFn || EP)(e);
}
function EP(e) {
	return JSON.stringify(e, (e, t) => MP(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t);
}
function DP(e, t) {
	return e === t ? !0 : typeof e == typeof t && e && t && typeof e == "object" && typeof t == "object" ? Object.keys(t).every((n) => DP(e[n], t[n])) : !1;
}
var OP = Object.prototype.hasOwnProperty;
function kP(e, t, n = 0) {
	if (e === t) return e;
	if (n > 500) return t;
	let r = jP(e) && jP(t);
	if (!r && !(MP(e) && MP(t))) return t;
	let i = (r ? e : Object.keys(e)).length, a = r ? t : Object.keys(t), o = a.length, s = r ? Array(o) : {}, c = 0;
	for (let l = 0; l < o; l++) {
		let o = r ? l : a[l], u = e[o], d = t[o];
		if (u === d) {
			s[o] = u, (r ? l < i : OP.call(e, o)) && c++;
			continue;
		}
		if (u === null || d === null || typeof u != "object" || typeof d != "object") {
			s[o] = d;
			continue;
		}
		let f = kP(u, d, n + 1);
		s[o] = f, f === u && c++;
	}
	return i === o && c === i ? e : s;
}
function AP(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
	for (let n in e) if (e[n] !== t[n]) return !1;
	return !0;
}
function jP(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function MP(e) {
	if (!NP(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!NP(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function NP(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function PP(e) {
	return new Promise((t) => {
		mP.setTimeout(t, e);
	});
}
function FP(e, t, n) {
	if (typeof n.structuralSharing == "function") return n.structuralSharing(e, t);
	if (n.structuralSharing !== !1) {
		if (process.env.NODE_ENV !== "production") try {
			return kP(e, t);
		} catch (e) {
			throw console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${n.queryHash}]: ${e}`), e;
		}
		return kP(e, t);
	}
	return t;
}
function IP(e, t, n = 0) {
	let r = [...e, t];
	return n && r.length > n ? r.slice(1) : r;
}
function LP(e, t, n = 0) {
	let r = [t, ...e];
	return n && r.length > n ? r.slice(0, -1) : r;
}
var RP = /* @__PURE__ */ Symbol();
function zP(e, t) {
	return process.env.NODE_ENV !== "production" && e.queryFn === RP && console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`), !e.queryFn && t?.initialPromise ? () => t.initialPromise : !e.queryFn || e.queryFn === RP ? () => Promise.reject(/* @__PURE__ */ Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
function BP(e, t) {
	return typeof e == "function" ? e(...t) : !!e;
}
function VP(e, t, n) {
	let r = !1, i;
	return Object.defineProperty(e, "signal", {
		enumerable: !0,
		get: () => (i ??= t(), r ? i : (r = !0, i.aborted ? n() : i.addEventListener("abort", n, { once: !0 }), i))
	}), e;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/environmentManager.js
var HP = /* @__PURE__ */ (() => {
	let e = () => gP;
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
function UP() {
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
var WP = hP;
function GP() {
	let e = [], t = 0, n = (e) => {
		e();
	}, r = (e) => {
		e();
	}, i = WP, a = (r) => {
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
var KP = GP(), qP = new class extends dP {
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
function JP(e) {
	return Math.min(1e3 * 2 ** e, 3e4);
}
function YP(e) {
	return (e ?? "online") === "online" ? qP.isOnline() : !0;
}
var XP = class extends Error {
	constructor(e) {
		super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent;
	}
};
function ZP(e) {
	let t = !1, n = 0, r, i = UP(), a = () => i.status !== "pending", o = (t) => {
		if (!a()) {
			let n = new XP(t);
			f(n), e.onCancel?.(n);
		}
	}, s = () => {
		t = !0;
	}, c = () => {
		t = !1;
	}, l = () => fP.isFocused() && (e.networkMode === "always" || qP.isOnline()) && e.canRun(), u = () => YP(e.networkMode) && e.canRun(), d = (e) => {
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
			let i = e.retry ?? (HP.isServer() ? 0 : 3), o = e.retryDelay ?? JP, s = typeof o == "function" ? o(n, r) : o, c = i === !0 || typeof i == "number" && n < i || typeof i == "function" && i(n, r);
			if (t || !c) {
				f(r);
				return;
			}
			n++, e.onFail?.(n, r), PP(s).then(() => l() ? void 0 : p()).then(() => {
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
var QP = class {
	#e;
	destroy() {
		this.clearGcTimeout();
	}
	scheduleGc() {
		this.clearGcTimeout(), yP(this.gcTime) && (this.#e = mP.setTimeout(() => {
			this.optionalRemove();
		}, this.gcTime));
	}
	updateGcTime(e) {
		this.gcTime = Math.max(this.gcTime || 0, e ?? (HP.isServer() ? Infinity : 300 * 1e3));
	}
	clearGcTimeout() {
		this.#e &&= (mP.clearTimeout(this.#e), void 0);
	}
}, $P = class extends QP {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	constructor(e) {
		super(), this.#o = !1, this.#a = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#r = e.client, this.#n = this.#r.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#e = nF(this.options), this.state = e.state ?? this.#e, this.scheduleGc();
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
			let e = nF(this.options);
			e.data !== void 0 && (this.setState(tF(e.data, e.dataUpdatedAt)), this.#e = e);
		}
	}
	optionalRemove() {
		!this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this);
	}
	setData(e, t) {
		let n = FP(this.state.data, e, this.options);
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
		return this.#i?.cancel(e), t ? t.then(_P).catch(_P) : Promise.resolve();
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
		return this.observers.some((e) => SP(e.options.enabled, this) !== !1);
	}
	isDisabled() {
		return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === RP || !this.isFetched();
	}
	isFetched() {
		return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
	}
	isStatic() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => xP(e.options.staleTime, this) === "static") : !1;
	}
	isStale() {
		return this.getObserversCount() > 0 ? this.observers.some((e) => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
	}
	isStaleByTime(e = 0) {
		return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !bP(this.state.dataUpdatedAt, e);
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
			let e = zP(this.options, t), n = (() => {
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
		}), this.#i = ZP({
			initialPromise: t?.initialPromise,
			fn: a.fetchFn,
			onCancel: (e) => {
				e instanceof XP && e.revert && this.setState({
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
			if (e instanceof XP) {
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
					...eF(t.data, this.options),
					fetchMeta: e.meta ?? null
				};
				case "success":
					let n = {
						...t,
						...tF(e.data, e.dataUpdatedAt),
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
		this.state = t(this.state), KP.batch(() => {
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
function eF(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: YP(t.networkMode) ? "fetching" : "paused",
		...e === void 0 && {
			error: null,
			status: "pending"
		}
	};
}
function tF(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: "success"
	};
}
function nF(e) {
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
var rF = class extends dP {
	constructor(e, t) {
		super(), this.options = t, this.#e = e, this.#s = null, this.#o = UP(), this.bindMethods(), this.setOptions(t);
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
		this.listeners.size === 1 && (this.#t.addObserver(this), aF(this.#t, this.options) ? this.#h() : this.updateResult(), this.#y());
	}
	onUnsubscribe() {
		this.hasListeners() || this.destroy();
	}
	shouldFetchOnReconnect() {
		return oF(this.#t, this.options, this.options.refetchOnReconnect);
	}
	shouldFetchOnWindowFocus() {
		return oF(this.#t, this.options, this.options.refetchOnWindowFocus);
	}
	destroy() {
		this.listeners = /* @__PURE__ */ new Set(), this.#b(), this.#x(), this.#t.removeObserver(this);
	}
	setOptions(e) {
		let t = this.options, n = this.#t;
		if (this.options = this.#e.defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof SP(this.options.enabled, this.#t) != "boolean") throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
		this.#S(), this.#t.setOptions(this.options), t._defaulted && !AP(this.options, t) && this.#e.getQueryCache().notify({
			type: "observerOptionsUpdated",
			query: this.#t,
			observer: this
		});
		let r = this.hasListeners();
		r && sF(this.#t, n, this.options, t) && this.#h(), this.updateResult(), r && (this.#t !== n || SP(this.options.enabled, this.#t) !== SP(t.enabled, this.#t) || xP(this.options.staleTime, this.#t) !== xP(t.staleTime, this.#t)) && this.#g();
		let i = this.#_();
		r && (this.#t !== n || SP(this.options.enabled, this.#t) !== SP(t.enabled, this.#t) || i !== this.#p) && this.#v(i);
	}
	getOptimisticResult(e) {
		let t = this.#e.getQueryCache().build(this.#e, e), n = this.createResult(t, e);
		return lF(this, n) && (this.#r = n, this.#a = this.options, this.#i = this.#t.state), n;
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
		return e?.throwOnError || (t = t.catch(_P)), t;
	}
	#g() {
		this.#b();
		let e = xP(this.options.staleTime, this.#t);
		if (HP.isServer() || this.#r.isStale || !yP(e)) return;
		let t = bP(this.#r.dataUpdatedAt, e) + 1;
		this.#d = mP.setTimeout(() => {
			this.#r.isStale || this.updateResult();
		}, t);
	}
	#_() {
		return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1;
	}
	#v(e) {
		this.#x(), this.#p = e, !(HP.isServer() || SP(this.options.enabled, this.#t) === !1 || !yP(this.#p) || this.#p === 0) && (this.#f = mP.setInterval(() => {
			(this.options.refetchIntervalInBackground || fP.isFocused()) && this.#h();
		}, this.#p));
	}
	#y() {
		this.#g(), this.#v(this.#_());
	}
	#b() {
		this.#d &&= (mP.clearTimeout(this.#d), void 0);
	}
	#x() {
		this.#f &&= (mP.clearInterval(this.#f), void 0);
	}
	createResult(e, t) {
		let n = this.#t, r = this.options, i = this.#r, a = this.#i, o = this.#a, s = e === n ? this.#n : e.state, { state: c } = e, l = { ...c }, u = !1, d;
		if (t._optimisticResults) {
			let i = this.hasListeners(), a = !i && aF(e, t), o = i && sF(e, n, t, r);
			(a || o) && (l = {
				...l,
				...eF(c.data, e.options)
			}), t._optimisticResults === "isRestoring" && (l.fetchStatus = "idle");
		}
		let { error: f, errorUpdatedAt: p, status: m } = l;
		d = l.data;
		let h = !1;
		if (t.placeholderData !== void 0 && d === void 0 && m === "pending") {
			let e;
			i?.isPlaceholderData && t.placeholderData === o?.placeholderData ? (e = i.data, h = !0) : e = typeof t.placeholderData == "function" ? t.placeholderData(this.#u?.state.data, this.#u) : t.placeholderData, e !== void 0 && (m = "success", d = FP(i?.data, e, t), u = !0);
		}
		if (t.select && d !== void 0 && !h) if (i && d === a?.data && t.select === this.#c) d = this.#l;
		else try {
			this.#c = t.select, d = t.select(d), d = FP(i?.data, d, t), this.#l = d, this.#s = null;
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
			isStale: cF(e, t),
			refetch: this.refetch,
			promise: this.#o,
			isEnabled: SP(t.enabled, e) !== !1
		};
		if (this.options.experimental_prefetchInRender) {
			let t = x.data !== void 0, r = x.status === "error" && !t, i = (e) => {
				r ? e.reject(x.error) : t && e.resolve(x.data);
			}, a = () => {
				i(this.#o = x.promise = UP());
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
		this.#i = this.#t.state, this.#a = this.options, this.#i.data !== void 0 && (this.#u = this.#t), !AP(t, e) && (this.#r = t, this.#C({ listeners: (() => {
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
		KP.batch(() => {
			e.listeners && this.listeners.forEach((e) => {
				e(this.#r);
			}), this.#e.getQueryCache().notify({
				query: this.#t,
				type: "observerResultsUpdated"
			});
		});
	}
};
function iF(e, t) {
	return SP(t.enabled, e) !== !1 && e.state.data === void 0 && !(e.state.status === "error" && t.retryOnMount === !1);
}
function aF(e, t) {
	return iF(e, t) || e.state.data !== void 0 && oF(e, t, t.refetchOnMount);
}
function oF(e, t, n) {
	if (SP(t.enabled, e) !== !1 && xP(t.staleTime, e) !== "static") {
		let r = typeof n == "function" ? n(e) : n;
		return r === "always" || r !== !1 && cF(e, t);
	}
	return !1;
}
function sF(e, t, n, r) {
	return (e !== t || SP(r.enabled, e) === !1) && (!n.suspense || e.state.status !== "error") && cF(e, n);
}
function cF(e, t) {
	return SP(t.enabled, e) !== !1 && e.isStaleByTime(xP(t.staleTime, e));
}
function lF(e, t) {
	return !AP(e.getCurrentResult(), t);
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/mutation.js
var uF = class extends QP {
	#e;
	#t;
	#n;
	#r;
	constructor(e) {
		super(), this.#e = e.client, this.mutationId = e.mutationId, this.#n = e.mutationCache, this.#t = [], this.state = e.state || dF(), this.setOptions(e.options), this.scheduleGc();
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
		this.#r = ZP({
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
		this.state = t(this.state), KP.batch(() => {
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
function dF() {
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
var fF = class extends dP {
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
		this.options = this.#e.defaultMutationOptions(e), AP(this.options, t) || this.#e.getMutationCache().notify({
			type: "observerOptionsUpdated",
			mutation: this.#n,
			observer: this
		}), t?.mutationKey && this.options.mutationKey && EP(t.mutationKey) !== EP(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options);
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
		let e = this.#n?.state ?? dF();
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
		KP.batch(() => {
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
}, pF = e.createContext(void 0), mF = (t) => {
	let n = e.useContext(pF);
	if (t) return t;
	if (!n) throw Error("No QueryClient set, use QueryClientProvider to set one");
	return n;
}, hF = ({ client: t, children: n }) => (e.useEffect(() => (t.mount(), () => {
	t.unmount();
}), [t]), /* @__PURE__ */ C(pF.Provider, {
	value: t,
	children: n
})), gF = e.createContext(!1), _F = () => e.useContext(gF);
gF.Provider;
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/QueryErrorResetBoundary.js
function vF() {
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
var yF = e.createContext(vF()), bF = () => e.useContext(yF), xF = (e, t, n) => {
	let r = n?.state.error && typeof e.throwOnError == "function" ? BP(e.throwOnError, [n.state.error, n]) : e.throwOnError;
	(e.suspense || e.experimental_prefetchInRender || r) && (t.isReset() || (e.retryOnMount = !1));
}, SF = (t) => {
	e.useEffect(() => {
		t.clearReset();
	}, [t]);
}, CF = ({ result: e, errorResetBoundary: t, throwOnError: n, query: r, suspense: i }) => e.isError && !t.isReset() && !e.isFetching && r && (i && e.data === void 0 || BP(n, [e.error, r])), wF = (e) => {
	if (e.suspense) {
		let t = 1e3, n = (e) => e === "static" ? e : Math.max(e ?? t, t), r = e.staleTime;
		e.staleTime = typeof r == "function" ? (...e) => n(r(...e)) : n(r), typeof e.gcTime == "number" && (e.gcTime = Math.max(e.gcTime, t));
	}
}, TF = (e, t) => e.isLoading && e.isFetching && !t, EF = (e, t) => e?.suspense && t.isPending, DF = (e, t, n) => t.fetchOptimistic(e).catch(() => {
	n.clearReset();
});
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useBaseQuery.js
function OF(t, n, r) {
	if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t))) throw Error("Bad argument type. Starting with v5, only the \"Object\" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object");
	let i = _F(), a = bF(), o = mF(r), s = o.defaultQueryOptions(t);
	o.getDefaultOptions().queries?._experimental_beforeQuery?.(s);
	let c = o.getQueryCache().get(s.queryHash);
	process.env.NODE_ENV !== "production" && (s.queryFn || console.error(`[${s.queryHash}]: No queryFn was passed as an option, and no default queryFn was found. The queryFn parameter is only optional when using a default queryFn. More info here: https://tanstack.com/query/latest/docs/framework/react/guides/default-query-function`)), s._optimisticResults = i ? "isRestoring" : "optimistic", wF(s), xF(s, a, c), SF(a);
	let l = !o.getQueryCache().get(s.queryHash), [u] = e.useState(() => new n(o, s)), d = u.getOptimisticResult(s), f = !i && t.subscribed !== !1;
	if (e.useSyncExternalStore(e.useCallback((e) => {
		let t = f ? u.subscribe(KP.batchCalls(e)) : _P;
		return u.updateResult(), t;
	}, [u, f]), () => u.getCurrentResult(), () => u.getCurrentResult()), e.useEffect(() => {
		u.setOptions(s);
	}, [s, u]), EF(s, d)) throw DF(s, u, a);
	if (CF({
		result: d,
		errorResetBoundary: a,
		throwOnError: s.throwOnError,
		query: c,
		suspense: s.suspense
	})) throw d.error;
	return o.getDefaultOptions().queries?._experimental_afterQuery?.(s, d), s.experimental_prefetchInRender && !HP.isServer() && TF(d, i) && (l ? DF(s, u, a) : c?.promise)?.catch(_P).finally(() => {
		u.updateResult();
	}), s.notifyOnChangeProps ? d : u.trackResult(d);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useQuery.js
function kF(e, t) {
	return OF(e, rF, t);
}
//#endregion
//#region ../../node_modules/@tanstack/react-query/build/modern/useMutation.js
function AF(t, n) {
	let r = mF(n), [i] = e.useState(() => new fF(r, t));
	e.useEffect(() => {
		i.setOptions(t);
	}, [i, t]);
	let a = e.useSyncExternalStore(e.useCallback((e) => i.subscribe(KP.batchCalls(e)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()), o = e.useCallback((e, t) => {
		i.mutate(e, t).catch(_P);
	}, [i]);
	if (a.error && BP(i.options.throwOnError, [a.error])) throw a.error;
	return {
		...a,
		mutate: o,
		mutateAsync: a.mutate
	};
}
//#endregion
//#region ../api/src/payments/core/bodySerializer.gen.ts
var jF = { bodySerializer: (e) => JSON.stringify(e, (e, t) => typeof t == "bigint" ? t.toString() : t) };
Object.entries({
	$body_: "body",
	$headers_: "headers",
	$path_: "path",
	$query_: "query"
});
//#endregion
//#region ../api/src/payments/core/serverSentEvents.gen.ts
var MF = ({ onRequest: e, onSseError: t, onSseEvent: n, responseTransformer: r, responseValidator: i, sseDefaultRetryDelay: a, sseMaxRetryAttempts: o, sseMaxRetryDelay: s, sseSleepFn: c, url: l, ...u }) => {
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
}, NF = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, PF = (e) => {
	switch (e) {
		case "form": return ",";
		case "pipeDelimited": return "|";
		case "spaceDelimited": return "%20";
		default: return ",";
	}
}, FF = (e) => {
	switch (e) {
		case "label": return ".";
		case "matrix": return ";";
		case "simple": return ",";
		default: return "&";
	}
}, IF = ({ allowReserved: e, explode: t, name: n, style: r, value: i }) => {
	if (!t) {
		let t = (e ? i : i.map((e) => encodeURIComponent(e))).join(PF(r));
		switch (r) {
			case "label": return `.${t}`;
			case "matrix": return `;${n}=${t}`;
			case "simple": return t;
			default: return `${n}=${t}`;
		}
	}
	let a = NF(r), o = i.map((t) => r === "label" || r === "simple" ? e ? t : encodeURIComponent(t) : LF({
		allowReserved: e,
		name: n,
		value: t
	})).join(a);
	return r === "label" || r === "matrix" ? a + o : o;
}, LF = ({ allowReserved: e, name: t, value: n }) => {
	if (n == null) return "";
	if (typeof n == "object") throw Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
	return `${t}=${e ? n : encodeURIComponent(n)}`;
}, RF = ({ allowReserved: e, explode: t, name: n, style: r, value: i, valueOnly: a }) => {
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
	let o = FF(r), s = Object.entries(i).map(([t, i]) => LF({
		allowReserved: e,
		name: r === "deepObject" ? `${n}[${t}]` : t,
		value: i
	})).join(o);
	return r === "label" || r === "matrix" ? o + s : s;
}, zF = /\{[^{}]+\}/g, BF = ({ path: e, url: t }) => {
	let n = t, r = t.match(zF);
	if (r) for (let t of r) {
		let r = !1, i = t.substring(1, t.length - 1), a = "simple";
		i.endsWith("*") && (r = !0, i = i.substring(0, i.length - 1)), i.startsWith(".") ? (i = i.substring(1), a = "label") : i.startsWith(";") && (i = i.substring(1), a = "matrix");
		let o = e[i];
		if (o == null) continue;
		if (Array.isArray(o)) {
			n = n.replace(t, IF({
				explode: r,
				name: i,
				style: a,
				value: o
			}));
			continue;
		}
		if (typeof o == "object") {
			n = n.replace(t, RF({
				explode: r,
				name: i,
				style: a,
				value: o,
				valueOnly: !0
			}));
			continue;
		}
		if (a === "matrix") {
			n = n.replace(t, `;${LF({
				name: i,
				value: o
			})}`);
			continue;
		}
		let s = encodeURIComponent(a === "label" ? `.${o}` : o);
		n = n.replace(t, s);
	}
	return n;
}, VF = ({ baseUrl: e, path: t, query: n, querySerializer: r, url: i }) => {
	let a = i.startsWith("/") ? i : `/${i}`, o = (e ?? "") + a;
	t && (o = BF({
		path: t,
		url: o
	}));
	let s = n ? r(n) : "";
	return s.startsWith("?") && (s = s.substring(1)), s && (o += `?${s}`), o;
};
function HF(e) {
	let t = e.body !== void 0;
	if (t && e.bodySerializer) return "serializedBody" in e ? e.serializedBody !== void 0 && e.serializedBody !== "" ? e.serializedBody : null : e.body === "" ? null : e.body;
	if (t) return e.body;
}
//#endregion
//#region ../api/src/payments/core/auth.gen.ts
var UF = async (e, t) => {
	let n = typeof t == "function" ? await t(e) : t;
	if (n) return e.scheme === "bearer" ? `Bearer ${n}` : e.scheme === "basic" ? `Basic ${btoa(n)}` : n;
}, WF = ({ allowReserved: e, array: t, object: n } = {}) => (r) => {
	let i = [];
	if (r && typeof r == "object") for (let a in r) {
		let o = r[a];
		if (o != null) if (Array.isArray(o)) {
			let n = IF({
				allowReserved: e,
				explode: !0,
				name: a,
				style: "form",
				value: o,
				...t
			});
			n && i.push(n);
		} else if (typeof o == "object") {
			let t = RF({
				allowReserved: e,
				explode: !0,
				name: a,
				style: "deepObject",
				value: o,
				...n
			});
			t && i.push(t);
		} else {
			let t = LF({
				allowReserved: e,
				name: a,
				value: o
			});
			t && i.push(t);
		}
	}
	return i.join("&");
}, GF = (e) => {
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
}, KF = (e, t) => t ? !!(e.headers.has(t) || e.query?.[t] || e.headers.get("Cookie")?.includes(`${t}=`)) : !1, qF = async ({ security: e, ...t }) => {
	for (let n of e) {
		if (KF(t, n.name)) continue;
		let e = await UF(n, t.auth);
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
}, JF = (e) => VF({
	baseUrl: e.baseUrl,
	path: e.path,
	query: e.query,
	querySerializer: typeof e.querySerializer == "function" ? e.querySerializer : WF(e.querySerializer),
	url: e.url
}), YF = (e, t) => {
	let n = {
		...e,
		...t
	};
	return n.baseUrl?.endsWith("/") && (n.baseUrl = n.baseUrl.substring(0, n.baseUrl.length - 1)), n.headers = ZF(e.headers, t.headers), n;
}, XF = (e) => {
	let t = [];
	return e.forEach((e, n) => {
		t.push([n, e]);
	}), t;
}, ZF = (...e) => {
	let t = new Headers();
	for (let n of e) {
		if (!n) continue;
		let e = n instanceof Headers ? XF(n) : Object.entries(n);
		for (let [n, r] of e) if (r === null) t.delete(n);
		else if (Array.isArray(r)) for (let e of r) t.append(n, e);
		else r !== void 0 && t.set(n, typeof r == "object" ? JSON.stringify(r) : r);
	}
	return t;
}, QF = class {
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
}, $F = () => ({
	error: new QF(),
	request: new QF(),
	response: new QF()
}), eI = WF({
	allowReserved: !1,
	array: {
		explode: !0,
		style: "form"
	},
	object: {
		explode: !0,
		style: "deepObject"
	}
}), tI = { "Content-Type": "application/json" }, nI = (e = {}) => ({
	...jF,
	headers: tI,
	parseAs: "auto",
	querySerializer: eI,
	...e
}), rI = ((e = {}) => {
	let t = YF(nI(), e), n = () => ({ ...t }), r = (e) => (t = YF(t, e), n()), i = $F(), a = async (e) => {
		let n = {
			...t,
			...e,
			fetch: e.fetch ?? t.fetch ?? globalThis.fetch,
			headers: ZF(t.headers, e.headers),
			serializedBody: void 0
		};
		return n.security && await qF({
			...n,
			security: n.security
		}), n.requestValidator && await n.requestValidator(n), n.body !== void 0 && n.bodySerializer && (n.serializedBody = n.bodySerializer(n.body)), (n.body === void 0 || n.serializedBody === "") && n.headers.delete("Content-Type"), {
			opts: n,
			url: JF(n)
		};
	}, o = async (e) => {
		let { opts: t, url: n } = await a(e), r = {
			redirect: "follow",
			...t,
			body: HF(t)
		}, o = new Request(n, r);
		for (let e of i.request.fns) e && (o = await e(o, t));
		let s = t.fetch, c = await s(o);
		for (let e of i.response.fns) e && (c = await e(c, o, t));
		let l = {
			request: o,
			response: c
		};
		if (c.ok) {
			let e = (t.parseAs === "auto" ? GF(c.headers.get("Content-Type")) : t.parseAs) ?? "json";
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
		return MF({
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
		buildUrl: JF,
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
})(nI({ baseUrl: "https://api.example.com" })), iI = async (e) => (e = aI(e), e), aI = (e) => (e.paymentTypes &&= e.paymentTypes.map((e) => oI(e)), e), oI = (e) => (e.lastSuccessful &&= new Date(e.lastSuccessful), e), sI = async (e) => (e = cI(e), e), cI = (e) => (e.payments = e.payments.map((e) => lI(e)), e), lI = (e) => (e.createdAt = new Date(e.createdAt), e), uI = (e) => (e.client ?? rI).get({
	responseTransformer: iI,
	url: "/payment-types",
	...e
}), dI = (e) => (e.client ?? rI).post({
	url: "/payment/{paymentType}/{method}",
	...e,
	headers: {
		"Content-Type": "application/json",
		...e.headers
	}
}), fI = (e) => (e.client ?? rI).get({
	url: "/payment/summary/{paymentId}",
	...e
}), pI = (e) => (e.client ?? rI).get({
	responseTransformer: sI,
	url: "/payment/history",
	...e
}), mI = (e) => (e.client ?? rI).post({
	url: "/payment/{paymentId}/cancel",
	...e
}), hI = (e) => (e.client ?? rI).get({
	url: "/i18n",
	...e
}), gI = (e) => (e.client ?? rI).post({
	url: "/account/delete",
	...e
}), _I = ({ merchantId: e, locale: t }) => [
	"cashier",
	"i18n",
	e,
	t
], vI = (e) => ({
	queryKey: _I(e),
	queryFn: () => yI(e),
	staleTime: 10 * 6e4,
	gcTime: 30 * 6e4
}), yI = async ({ merchantId: e, locale: t }) => {
	let { data: n, error: r } = await hI({
		query: {
			merchantId: e,
			locale: t
		},
		cache: "no-store"
	});
	return r ? {} : n?.texts ?? {};
}, bI = o({
	translations: {},
	translateKey: (e) => typeof e == "string" ? e : "",
	hasTranslation: () => !1,
	isTranslationVisible: !0
});
function xI({ children: e, translations: t, debug: n, isTranslationVisible: r }) {
	let i = d((e) => {
		if (typeof e != "string" || e.length === 0 || !r) return !1;
		let n = t[e];
		return typeof n == "string" && n.length > 0;
	}, [r, t]), a = d((e) => {
		if (typeof e != "string" || e.length === 0) return "";
		if (n) return e;
		if (!r) return "";
		let i = t[e];
		return typeof i == "string" && i.length > 0 ? i : e;
	}, [
		n,
		r,
		t
	]), o = _(() => ({
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
	return /* @__PURE__ */ C(bI.Provider, {
		value: o,
		children: e
	});
}
function SI({ children: e }) {
	let { merchantId: t, locale: n, debug: r } = f(wN), i = pl(n), a = !r && !!(t && i), { data: o, isFetched: s } = kF({
		...vI({
			merchantId: t,
			locale: i
		}),
		enabled: a && !!(t && i)
	});
	return /* @__PURE__ */ C(xI, {
		translations: o ?? {},
		debug: r,
		isTranslationVisible: r || !a || s,
		children: e
	});
}
var CI = () => f(bI), wI = () => {
	let { hasTranslation: e, isTranslationVisible: t } = f(bI);
	return {
		hasTranslation: e,
		isTranslationVisible: t
	};
}, TI = o({ portalContainer: null }), EI = TI.Provider, DI = () => f(TI), OI = (e) => e?.parentElement?.parentElement ?? e?.parentElement ?? e ?? void 0, kI = () => {
	let { portalContainer: e } = DI();
	return OI(e);
}, AI = "bottom", jI = "cta.close";
function MI({ isOpen: e, onClose: t, side: n = AI, title: r, children: i, portalContainer: a, closeButtonLabel: o, overlayClassName: s, contentClassName: c, variant: l, contentRef: u }) {
	let { translateKey: d } = CI(), f = kI(), p = a ?? f;
	return /* @__PURE__ */ C(BA, {
		isOpen: e,
		onClose: t,
		side: n,
		title: r,
		closeButtonLabel: o ?? d(jI),
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
var NI = (e, t, n) => {
	let r = `{${t}}`;
	return e.includes(r) ? e.replace(r, n) : `${e} ${n}`;
}, PI = {
	available: 0,
	close: 1
}, FI = (e) => e.map((e, t) => ({
	item: e,
	index: t
})).sort((e, t) => {
	let n = PI[e.item.status] - PI[t.item.status];
	return n === 0 ? e.index - t.index : n;
}).map(({ item: e }) => e), II = (e) => typeof e == "string" && e.trim().length > 0, LI = (e) => typeof e == "string" ? e.trim().toLowerCase() : void 0, RI = (e, t) => e == null ? !0 : t == null ? !1 : LI(e) === LI(t), zI = (e, t) => RI(t.method, e.method) && RI(t.type, e.type) && RI(t.service, e.service) && RI(t.accountId, e.accountId), BI = (e) => typeof e == "number" && Number.isFinite(e), VI = (e, t = 0) => BI(e) ? e : t, HI = (e) => BI(e) ? e : void 0, UI = (e) => {
	if (!BI(e)) return;
	let t = e;
	return t >= 0 ? t : void 0;
}, WI = (e) => {
	if (BI(e)) return e > 0 ? e : void 0;
}, GI = (e) => ({
	payinCount: VI(e?.payinCount),
	daysSinceRegistration: VI(e?.daysSinceRegistration),
	totalPayinAmount: VI(e?.totalPayinAmount)
}), KI = (e, t, n, r, i) => {
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
}, qI = (e, t, n) => {
	if (!zI(e, t)) return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let r = KI(n.amount, HI(t.minAmount), HI(t.maxAmount), UI(t.closeToAmount), "amount");
	if (r.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let i = KI(n.user.payinCount, HI(t.minPayinCount), HI(t.maxPayinCount), UI(t.closeToPayinCount), "payinCount");
	if (i.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let a = KI(n.user.totalPayinAmount, HI(t.minTotalPayinAmount), HI(t.maxTotalPayinAmount), UI(t.closeToTotalPayinAmount), "totalPayinAmount");
	if (a.status === "fail") return {
		status: "mismatch",
		closeReasons: [],
		score: 0
	};
	let o = KI(n.user.daysSinceRegistration, HI(t.minDaysSinceRegistration), HI(t.maxDaysSinceRegistration), UI(t.closeToDaysSinceRegistration), "daysSinceRegistration");
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
}, JI = (e) => Array.isArray(e) ? e.filter((e) => II(e.code) && II(e.title) && II(e.description)) : [], YI = (e) => Array.isArray(e) && e.length > 0, XI = (e, t, n) => {
	if (!t) return [];
	let r = {
		amount: VI(n?.amount),
		user: GI(n?.user)
	}, i = [];
	for (let n of e) {
		let e = n.conditions, a = e?.include ?? [], o = e?.exclude ?? [], s = a.length > 0 ? a.map((e) => qI(t, e, r)) : [{
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
		o.some((e) => qI(t, e, r).status === "eligible") || i.push({
			bonus: n,
			status: l,
			closeReasons: u
		});
	}
	return i;
}, ZI = (e, t) => {
	let n = WI(e.maxBonus);
	if (n === void 0) return null;
	let r = WI(e.maxBonusPercentage) ?? 100, i = n / (r / 100), a = WI(t), o = a === void 0 ? null : Math.min(n, r / 100 * a);
	return {
		maxBonus: n,
		maxBonusPercentage: r,
		estimatedBonus: o,
		fullClaimAmount: i,
		claimPercentage: o === null ? null : Math.min(100, o / n * 100)
	};
}, QI = (e, t, n) => e.type === "amount" ? NI(t("bonus.close_to_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "totalPayinAmount" ? NI(t("bonus.close_to_total_payin_amount"), "amount", n(e.delta) || String(e.delta)) : e.type === "payinCount" ? NI(t("bonus.close_to_payin_count"), "count", String(Math.round(Math.abs(e.delta)))) : NI(t("bonus.close_to_registration_days"), "days", String(Math.round(Math.abs(e.delta)))), $I = ({ uiComboView: e, lockAmount: t }) => e && !t, eL = ({ uiComboView: e, lockAmount: t, method: n }) => $I({
	uiComboView: e,
	lockAmount: t
}) ? "/quick-payment" : `/pts/${n}`, tL = (e) => $I(e) ? "/quick-payment" : e.gotoPaymentType ? e.uiBonuses && YI(e.bonuses) ? "/bonus" : `/pt/${encodeURIComponent(e.gotoPaymentType)}` : `/pts/${e.method}`, nL = (e) => e === "fixed" || e === "percentage", rL = (e) => e === "add" || e === "deduct", iL = (e) => e?.value === void 0 ? null : vc(e.value), aL = (e) => iL(e) !== null, oL = (e) => e === "add" ? "" : e === "deduct" ? "-" : "", sL = (e) => {
	if (!e) return null;
	try {
		let { locale: t, ...n } = e.resolvedOptions();
		return new Intl.NumberFormat(t, { ...n });
	} catch {
		return null;
	}
}, cL = (e, t) => {
	if (!e || !nL(e.feeType) || !rL(e.direction)) return null;
	let n = iL(e);
	if (n === null) return null;
	let r = Math.max(Number.isFinite(t) ? t : 0, 0), i = Math.abs(n), a = e.feeType === "percentage" ? i / 100 * r : i;
	return {
		amount: a,
		signedAmount: e.direction === "deduct" ? -a : a,
		direction: e.direction,
		feeType: e.feeType
	};
}, lL = (e, t, n) => {
	let r = cL(e, t);
	if (!r) return "";
	if (n.feeCurrencyFormatter) return n.feeCurrencyFormatter.format(r.signedAmount);
	let i = oL(r.direction), a = n.formatCurrencyValue(r.amount) || String(r.amount);
	return i ? `${i}${a}` : a;
}, uL = (e, t, n) => {
	let r = lL(e, t, n);
	return r ? {
		id: "fee",
		label: "field.fee.label",
		value: r
	} : null;
}, dL = (e, t, n) => pL(e, t, n, {
	id: "total-payout",
	label: "field.total_payout.label",
	includeAddedFee: !1,
	hideWhenUnchanged: !1
}), fL = (e, t, n) => pL(e, t, n, {
	id: "total",
	label: "field.total.label",
	includeAddedFee: !0,
	hideWhenUnchanged: !0,
	showWhenEmpty: !0
}), pL = (e, t, n, r) => {
	if (!e || !nL(e.feeType) || !rL(e.direction) || iL(e) === null) return null;
	let i = Math.max(Number.isFinite(t) ? t : 0, 0);
	if (r.showWhenEmpty && i === 0) return {
		id: r.id,
		label: r.label,
		value: {
			value: 0,
			currency: n
		}
	};
	let a = i > 0 ? cL(e, i) : null, o = Math.max(i + (r.includeAddedFee ? a?.signedAmount ?? 0 : Math.min(a?.signedAmount ?? 0, 0)), 0);
	return r.hideWhenUnchanged && o === i ? null : {
		id: r.id,
		label: r.label,
		value: {
			value: o,
			currency: n
		}
	};
}, mL = (e, t) => {
	let n = t.filter((e) => e !== null);
	if (n.length === 0) return e;
	let r = e.findIndex((e) => e.id === "remaining-balance");
	return r === -1 ? [...e, ...n] : [
		...e.slice(0, r),
		...n,
		...e.slice(r)
	];
}, hL = (e, t) => Math.max(e, 0), gL = (e, t) => Math.max(Number.isFinite(e) ? e : 0, 0), _L = (e) => typeof e == "number" && Number.isFinite(e) ? e : null, vL = (e, t) => {
	if (e !== gN.PAYOUT || !t) return null;
	let n = _L(t.withdrawableBalance);
	return n === null ? null : Math.max(n, 0);
}, yL = (e, t, n) => {
	let r = vL(e, t);
	return r === null ? null : hL(r, n);
}, bL = (e, t) => gL(e, t), xL = new RegExp(Tc), SL = (e, t) => {
	if (!t) return e;
	let n = Uc(e) ?? "";
	return xL.test(n) ? n : "0";
}, CL = (e, t, n) => yL(e, t, n), wL = (e) => {
	let t = tl(el(e));
	if (!t) return null;
	let n = Number(t);
	return Number.isFinite(n) ? n : null;
}, TL = (e) => e.length === 0 || e === "." || e.endsWith("."), EL = (e, t, n) => {
	let r = el(e), i = TL(r), a = i ? null : wL(r), o = t?.min ? wL(t.min) : null, s = t?.max ? wL(t.max) : null, c = (() => {
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
}, DL = (e, t, n) => {
	let r = EL(e, t, n);
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
}, OL = (e, t, n) => {
	if (e) return NI(t(e.key), "amount", n(e.boundaryValue) || String(e.boundaryValue));
};
//#endregion
//#region src/hooks/useCashierFormatters.ts
function kL(e, t, n, r) {
	return {
		currencyFormatter: _(() => {
			if (!e) return null;
			let r = {
				trailingZeroDisplay: "stripIfInteger",
				...n
			};
			try {
				return bc({
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
		dateTimeFormatter: _(() => {
			try {
				return cl({
					locale: t,
					formatOptions: r
				});
			} catch {
				return null;
			}
		}, [r, t])
	};
}
var AL = (e, t) => {
	if (!t) return "";
	let n = vc(e);
	return n === null ? "" : t.format(n);
}, jL = (e, t, n, r) => {
	if (!(e instanceof Date) && typeof e != "string") return "";
	let i = sl(e, { strict: !0 });
	if (!i) return "";
	if (t) try {
		return t.format(i);
	} catch {}
	return ll(i, n, r);
}, ML = (e, t, n, r, i) => {
	if (Sc(e)) return AL(e.value, t) || xc(e, { locale: r });
	if (e instanceof Date) return jL(e, n, r, i);
	if (typeof e == "string") return AL(e, t) || jL(e, n, r, i) || e;
	if (typeof e == "boolean") return e ? "true" : "false";
	if (typeof e == "number" || typeof e == "bigint") return e.toString();
	if (typeof e == "symbol") return e.description || "";
	if (typeof e == "function") return e.name;
	let a = AL(e, t);
	if (a) return a;
	if (e == null) return "";
	if (typeof e == "object") try {
		return JSON.stringify(e);
	} catch {
		return "";
	}
	return "";
}, NL = "card", PL = "••••", FL = (e) => {
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
}, IL = (e) => FL(e.logo), LL = (e) => {
	let t = e.replace(zc, "");
	if (!t) return null;
	let n = t.slice(-4);
	return n.length > 0 ? n : null;
}, RL = (e) => {
	if (Uc(e.type)?.toLowerCase() !== NL || !Uc(e.accountId)) return null;
	let t = Uc(e.name);
	if (!t) return null;
	let n = LL(t);
	return n ? `${PL}${n}` : null;
}, zL = (e) => e?.map((e) => ({
	...e,
	logo: IL(e)
})) ?? [], BL = async (e) => {
	let { data: t, error: n } = await uI({
		query: e,
		cache: "no-store"
	});
	if (n) throw Error();
	return {
		paymentTypes: zL(t?.paymentTypes),
		currency: t?.currency,
		pciTenantId: t?.pciTenantId
	};
}, VL = (e) => !e || typeof e != "string" ? null : Uc(e)?.toLowerCase() ?? null, HL = (e, t) => {
	let n = VL(t);
	if (!n) return null;
	let r = (t) => e.find((e) => {
		let r = e[t];
		return typeof r == "string" ? r.toLowerCase() === n : !1;
	}) ?? null;
	return r("accountId") ?? r("name") ?? r("service") ?? r("type");
}, UL = ({ merchantId: e, method: t, userId: n, sessionId: r, currency: i }) => [
	"payment-types",
	e,
	t,
	n,
	r,
	i
], WL = (e) => ({
	queryKey: UL(e),
	queryFn: () => BL(e),
	enabled: !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 5 * 6e4,
	gcTime: 30 * 6e4
}), GL = async (e, t) => await e.ensureQueryData(WL(t)), KL = [
	"pan",
	"expiryDate",
	"csc"
];
function qL() {
	let { merchantId: e, method: t, userId: n, sessionId: r, currency: i, gotoPaymentType: a, selectedPaymentType: o, hasAppliedGotoPaymentType: s, setCashierState: c } = f(wN), l = y(null), u = y(null), { data: m, isLoading: h, isError: g } = kF(WL({
		merchantId: e,
		method: t,
		userId: n,
		sessionId: r,
		currency: i
	})), v = _(() => m?.paymentTypes ?? [], [m?.paymentTypes]), b = _(() => new Map(v.map((e) => {
		let t = e.fields?.filter(({ id: e }) => e && !KL.includes(e)), n = e.fields?.filter(({ id: e }) => e && KL.includes(e));
		return [e, {
			...e,
			fields: t,
			hfFields: n
		}];
	})), [v]), x = m?.currency, S = m?.pciTenantId;
	return p(() => {
		x && c((e) => e.currency === x ? e : {
			...e,
			currency: x
		});
	}, [x, c]), p(() => {
		l.current !== t && (l.current = t, u.current = t);
	}, [t]), p(() => {
		if (!u.current || u.current !== t) return;
		if (o) {
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
		if (v.length === 0) return;
		let e = t;
		if (!v.every((t) => t.method === e)) return;
		let n = HL(v, a);
		if (!n) {
			u.current = null;
			return;
		}
		c((e) => e.selectedPaymentType === n.name ? e : {
			...e,
			selectedPaymentType: n.name
		}), u.current = null;
	}, [
		a,
		s,
		t,
		v,
		o,
		c
	]), {
		paymentTypesList: v,
		getPaymentType: d((e) => {
			let t = HL(v, e);
			return t ? b.get(t) ?? null : null;
		}, [b, v]),
		pciTenantId: S,
		isLoading: h,
		isError: g
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
	let i = rI.getConfig().baseUrl, a = rI.buildUrl({
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
}, qR = () => {}, JR = o({
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
	let { merchantId: t, userId: n, sessionId: r, debug: i, onPaymentCreated: a } = f(wN), [o, s] = b(), [c, l] = b(null), [u, m] = b(null), [h, g] = b(null), [v, x] = b(!1), S = y(null);
	p(() => {
		let e = OR(x);
		return () => {
			e(), kR("provider-unmount");
		};
	}, []);
	let w = d((e, t) => {
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
		}), g(null);
	}, []);
	p(() => {
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
			g("error.payment_status_unavailable");
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
	let T = (e) => {
		if (e && typeof e == "object" && "error" in e) {
			let t = e.error;
			if (typeof t == "string") return { error: t };
		}
		return e instanceof Error && e.message ? { error: e.message } : { error: "error.payment_processing_failed" };
	}, E = d((e) => {
		let t = e?.closeProviderWindow ?? !0, n = e?.resetCreateState ?? !0;
		kR("reset"), t && VR(), s(void 0), l(null), m(null), g(null), n && S.current?.();
	}, [
		s,
		m,
		l,
		g
	]), { mutate: D, isPending: O, isError: k, reset: A } = AF({
		mutationFn: async ({ body: e, path: t }) => {
			try {
				let n = await dI({
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
				let t = T(e);
				throw Error(t.error);
			}
		},
		onMutate: () => {
			E({ resetCreateState: !1 });
		},
		onSuccess: (e) => {
			let t = $L(e.paymentStatus) ?? "ongoing", n = {
				...e,
				status: t,
				paymentStatus: t
			};
			s(n), l(e.paymentId ?? null), m(null), g(null), a && a(e), e.paymentId && !lR(t) && w(e.paymentId, n);
		},
		onError: (e) => {
			let t = T(e);
			m(t.error), a && a(t);
		}
	});
	S.current = A;
	let j = o?.status ?? $L(o?.paymentStatus), M = j ? j.toLowerCase() : void 0, N = M === "done", P = k || !!u || !!h, F = !N && !P && (O || cR(M) || v), I = h ?? u ?? null, ee = _(() => ({
		payment: o,
		paymentId: c,
		status: j,
		redirect: o?.redirect,
		paymentStatusMessage: I,
		makePayment: D,
		clearPaymentState: E,
		setPaymentTracking: w,
		isPaymentPending: F,
		isPaymentFailed: P,
		isPaymentSuccessful: N
	}), [
		j,
		P,
		F,
		N,
		D,
		o,
		c,
		I,
		E,
		w
	]);
	return /* @__PURE__ */ C(JR.Provider, {
		value: ee,
		children: e
	});
}, XR = () => f(JR), ZR = null, QR = (e) => {
	ZR = e;
}, $R = () => ZR, ez = () => {
	ZR = null;
}, tz = null, nz = (e) => {
	tz = e;
}, rz = () => {
	tz = null;
}, iz = (e) => e !== null && tz?.paymentId === e && tz.reachedSummaryViaProvider, az = () => {
	let e = U(), t = mF(), { clearPaymentState: n, payment: r, status: i } = XR(), { merchantId: a, method: o, userId: s, sessionId: c, currency: l, setCashierState: u, onPaymentFinished: p } = f(wN);
	return d((d) => {
		let f = d?.paymentId ?? void 0, m = d?.merchantId ?? void 0, h = d?.replace ?? !1, g = d?.reachedSummaryViaProvider ?? !1, _ = !!(f && m && lR(i)), v = r;
		if (n(), a && s && c && t.invalidateQueries({ queryKey: UL({
			merchantId: a,
			method: o,
			userId: s,
			sessionId: c,
			currency: l
		}) }), !f || !m) {
			rz(), u((e) => !e.selectedBonusCode && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
				...e,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
			return;
		}
		QR({
			paymentId: f,
			merchantId: m
		}), nz({
			paymentId: f,
			reachedSummaryViaProvider: g
		}), u((e) => !e.resetFlowOnBack && !e.paymentFormDraft && !e.comboViewFormDraft ? e : {
			...e,
			resetFlowOnBack: !1,
			paymentFormDraft: null,
			comboViewFormDraft: null
		}), _ && p && p(v ?? {
			paymentId: f,
			paymentStatus: "done",
			status: "done"
		}), e({
			to: "/summary/$id",
			params: { id: f },
			search: { merchantId: m },
			...h ? { replace: h } : {}
		});
	}, [
		n,
		l,
		a,
		o,
		e,
		p,
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
		makePayment: d((t) => {
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
	let r = U(), i = az(), a = e?.paymentId, o = e?.status ?? e?.paymentStatus, s = e?.redirect, c = e?.form, l = s?.url ?? null, u = s?.method, d = s?.data, f = s?.type, m = s?.scriptId, h = !!c?.actionUrl, g = _(() => YL(d, n), [n, d]), v = !!(l || h);
	p(() => {
		!a || !o || v || lR(o) && i({
			paymentId: a,
			merchantId: t
		});
	}, [
		i,
		t,
		r,
		a,
		o,
		v
	]), p(() => {
		if (!l && !h) return;
		let e = {};
		a && (e.paymentId = a), l && (e.redirectUrl = l, u && (e.redirectMethod = u), f && (e.redirectType = ZL(f)), m && (e.redirectScriptId = m), g && (e.redirectData = g)), r({
			to: "/provider",
			search: e
		});
	}, [
		g,
		h,
		r,
		a,
		u,
		m,
		f,
		l
	]);
}, cz = o({
	currencyFormatter: null,
	formatCurrencyValue: () => "",
	formatDisplayValue: () => ""
});
function lz({ children: e }) {
	let { currency: t, locale: n, currencyFormatOptions: r, dateTimeFormatOptions: i } = f(wN), { currencyFormatter: a, dateTimeFormatter: o } = kL(t, n, r, i), s = _(() => ({
		currencyFormatter: a,
		formatCurrencyValue: (e) => AL(e, a),
		formatDisplayValue: (e) => ML(e, a, o, n, i)
	}), [
		a,
		i,
		o,
		n
	]);
	return /* @__PURE__ */ C(cz.Provider, {
		value: s,
		children: e
	});
}
var uz = () => f(cz), dz = "This field is required", fz = "Invalid value", pz = (e, t, n) => typeof e == "string" ? n(e.trim().length > 0 ? e : t) : t, mz = (e, t) => {
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
	let u = i ? Yc(l) : l;
	for (let e of s) if (!e.regex.test(u)) return e.message;
	if (i && !$c(l)) return o;
}, gz = (e) => e === void 0 ? "" : typeof e == "boolean" ? e ? "true" : "false" : e, _z = (e) => e === !0 || e === "true", vz = (e) => Object.entries(e).reduce((e, [t, n]) => (e[t] = gz(n), e), {}), yz = (e, t) => (e ?? []).reduce((e, n) => {
	let r = n.id;
	return r && (e[r] = t[r] ?? ""), e;
}, {}), bz = (e) => typeof e == "string" ? Uc(e) !== null : e === !0, xz = (e) => e ? typeof e == "string" ? Uc(e) !== null : Array.isArray(e) ? e.some(xz) : typeof e == "object" ? Object.values(e).some(xz) : !1 : !1, Sz = (e, t) => (e ?? []).some((e) => {
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
	return t.push(/* @__PURE__ */ C("option", {
		value: a,
		children: o || a
	}, s)), t;
}, []), Jz = ({ fields: e, translateKey: t, disabled: n = !1, amountError: r, amountFieldId: i = Gz, renderBelowFieldContent: a, belowFieldContentInheritsTheme: o = !0, renderBeforeField: s, renderAfterField: c, animateRows: l = !1, animationStartIndex: u = 0, animationTotalCount: d, animationDirection: f = "forward", reserveCheckboxMessageSpace: p = !0 }) => {
	let m = NN(), { setFieldValue: h } = Av(), g = ON();
	return /* @__PURE__ */ C(S, { children: e.map((e, _) => {
		let v = e.id;
		if (!v) return null;
		let y = g(v, "field"), b = m.id("payment-field", { slug: y }), x = t(e.label ?? v), S = wz(e.validation, t), T = e.type, E = T === "checkbox", D = T === "select", O = v === i, k = v === "iban" || !!S?.iban?.value, A = !E && k ? Zc : void 0, j = xf;
		E ? j = Gf : D && (j = zd);
		let M = (e) => {
			if (!O) return;
			let t = e.currentTarget.value;
			h(v, t, !1);
		}, N = D ? qz(v, e.options, t) : null, P = e.placeholder ? t(e.placeholder) : void 0, F = O ? r : void 0, I = O || E && p || Kz(e.validation), ee = s?.(v), L = a?.(v), R;
		return R = O ? /* @__PURE__ */ C(ny, {
			label: x,
			id: b,
			name: v,
			validation: S,
			error: F,
			disabled: n,
			component: j,
			onChange: M,
			belowFieldContent: L,
			belowFieldContentInheritsTheme: o,
			formattingAdapter: A,
			placeholder: P,
			reserveMessageSpace: I,
			type: E || D ? void 0 : "text",
			inputMode: "numeric",
			pattern: "[0-9]*",
			children: D ? N : void 0
		}) : E ? /* @__PURE__ */ C(ny, {
			label: x,
			id: b,
			name: v,
			validation: S,
			error: F,
			disabled: n,
			component: j,
			belowFieldContent: L,
			belowFieldContentInheritsTheme: o,
			placeholder: P,
			reserveMessageSpace: I,
			type: void 0
		}) : /* @__PURE__ */ C(ny, {
			label: x,
			id: b,
			name: v,
			validation: S,
			error: F,
			disabled: n,
			component: j,
			belowFieldContent: L,
			belowFieldContentInheritsTheme: o,
			formattingAdapter: A,
			placeholder: P,
			reserveMessageSpace: I,
			type: D ? void 0 : T ?? "text",
			children: D ? N : void 0
		}), /* @__PURE__ */ w("div", {
			"data-payment-field-row": v,
			id: m.id("payment-field-row", { slug: y }),
			className: [
				m.className("payment-field-row", { slug: y }),
				"flex flex-col w-full",
				l ? Ez : void 0
			].filter(Boolean).join(" "),
			style: l ? Hz({
				index: u + _,
				total: d,
				direction: f
			}) : void 0,
			children: [
				ee,
				R,
				c?.(v)
			]
		}, v);
	}) });
}, Yz = "pan", Xz = "expiryDate", Zz = "csc", Qz = (e) => e === Zz || e === Xz, $z = (e) => typeof e.id == "string" && e.id.trim().length > 0, eB = (e) => {
	let t = (e.type ?? "text").trim().toLowerCase(), n = (e.options ?? []).length > 0;
	return t === "switcher" ? "switcher" : t === "checkbox" ? "toggle" : t === "select" || n ? "select" : "input";
}, tB = (e, t, n) => e === Yz || !Qz(e) ? "col-span-2" : t === n ? "col-span-1" : "col-span-2", nB = (e, t, n) => e === Yz || !Qz(e) ? 2 : t === n ? 1 : 2, rB = (e) => {
	let t = (e ?? []).filter($z);
	if (t.length === 0) return 0;
	let n = t.some((e) => e.id === Zz), r = t.some((e) => e.id === Xz), i = 0, a = 0;
	for (let e of t) {
		let t = nB(e.id, n, r);
		a + t > 2 && (i += 1, a = 0), a += t, a === 2 && (i += 1, a = 0);
	}
	return a > 0 && (i += 1), i;
}, iB = ["relative z-10 grid grid-cols-2 items-start gap-2 p-1"].join(" "), aB = ["box-border flex h-full w-full flex-col"].join(" "), oB = () => void 0, sB = (e) => e.label?.trim() || e.id, cB = (e) => (e.options ?? []).map((t, n) => ({
	value: t.value || `${e.id}-${String(n)}`,
	label: t.label || t.value || `Option ${String(n + 1)}`
})), lB = (e, t) => {
	let n = eB(e);
	if (n === "select") return /* @__PURE__ */ C(zd, {
		skeleton: !0,
		label: t,
		children: cB(e).map((e) => /* @__PURE__ */ C("option", {
			value: e.value,
			children: e.label
		}, e.value))
	});
	if (n === "switcher") {
		let n = cB(e);
		return /* @__PURE__ */ C(Wk, {
			skeleton: !0,
			ariaLabel: t,
			value: n[0]?.value ?? e.id,
			onChange: oB,
			options: n.length > 0 ? n : [{
				value: e.id,
				label: t
			}]
		});
	}
	return n === "toggle" ? /* @__PURE__ */ C(Gf, {
		skeleton: !0,
		label: t
	}) : /* @__PURE__ */ C(xf, {
		skeleton: !0,
		label: t,
		as: e.type === "textarea" ? "textarea" : void 0
	});
};
function uB({ fields: e, className: t }) {
	let n = e.filter($z), r = n.some((e) => e.id === "csc"), i = n.some((e) => e.id === "expiryDate");
	return /* @__PURE__ */ C("div", {
		"aria-hidden": "true",
		"data-slot": "hosted-fields-layout-skeleton",
		className: J(aB, t),
		children: /* @__PURE__ */ C("div", {
			className: iB,
			children: n.map((e) => {
				let t = sB(e), n = tB(e.id, r, i);
				return /* @__PURE__ */ C("div", {
					"data-slot": "hosted-fields-layout-skeleton-item",
					"data-field-id": e.id,
					className: J("flex w-full flex-col whitespace-nowrap", n),
					children: lB(e, t)
				}, e.id);
			})
		})
	});
}
//#endregion
//#region src/components/SuggestedAmountButtons.tsx
function dB({ suggestions: e, activeSuggestion: t, onSelect: n, formatLabel: r, amountLimits: i, size: a = "lg", disabled: o = !1, className: s, style: c }) {
	let l = NN(), u = d((e) => {
		e.preventDefault();
	}, []), f = r ?? ((e) => e), p = ON();
	return e.length === 0 ? null : /* @__PURE__ */ C("div", {
		id: l.id("amount-suggestions"),
		style: c,
		className: J(l.className("amount-suggestions"), "grid grid-cols-3 gap-1 @sm:gap-2 @md:gap-3 text-center", s),
		children: e.map((e) => {
			let r = p(e), s = e === t, c = o || (i ? EL(e, i).isOutOfRange : !1);
			return /* @__PURE__ */ C(un, {
				id: l.id("amount-suggestion", { slug: r }),
				variant: s ? "secondary" : "neutral",
				size: a,
				disabled: c,
				onMouseDown: u,
				onClick: () => {
					n(e);
				},
				label: f(e)
			}, `cashier-amount-suggestion-${r}`);
		})
	});
}
//#endregion
//#region src/components/PaymentNotificationCard.tsx
var fB = (e) => ({
	info: "info",
	warning: "warning",
	positive: "success",
	negative: "danger"
})[e];
function pB({ notification: e, translateKey: t, tone: n = "status" }) {
	let r = Uc(t(e.key));
	return r ? /* @__PURE__ */ C(hn, {
		"data-theme": n === "status" ? fB(e.type) : void 0,
		variant: "surface",
		size: "default",
		className: "flex w-full text-[var(--pc-color-text)]",
		children: /* @__PURE__ */ C(ok, { content: r })
	}) : null;
}
//#endregion
//#region src/lib/hostedFields.ts
var mB = /* @__PURE__ */ function(e) {
	return e.INIT = "INIT", e.TOKENIZE = "TOKENIZE", e.LAYOUT = "HF_LAYOUT", e.FORM_DATA = "HF_FORM_DATA", e.FORM_STATE = "HF_FORM_STATE", e.CARD_BRAND = "HF_CARD_BRAND", e.READY = "HF_READY", e.ERROR = "HF_ERROR", e.RESET = "RESET", e;
}({}), hB = "hosted_fields.title", gB = Object.freeze(["allow-scripts", "allow-same-origin"]), _B = "error.hosted_fields_error_received", vB = 5e3, yB = Object.freeze({
	border: "0",
	width: "100%",
	height: "100%",
	display: "block",
	backgroundColor: "transparent"
}), bB = "hf-merchant-fonts", xB = "--hf-font-family", SB = [
	"-apple-system",
	"BlinkMacSystemFont",
	"'Segoe UI'",
	"Roboto",
	"Oxygen",
	"Ubuntu",
	"Cantarell",
	"'Helvetica Neue'",
	"sans-serif"
].join(", "), CB = (e) => {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return !(typeof t.type != "string" || !Object.values(mB).includes(t.type));
}, wB = (e) => {
	let t = e.document ?? (typeof document < "u" ? document : void 0);
	if (!t) throw Error("createHostedFieldsIframe requires a Document instance.");
	let n = t.createElement("iframe");
	n.title = Uc(e.title) ?? "hosted_fields.title", e.ariaLabel && n.setAttribute("aria-label", e.ariaLabel), n.name = e.name ?? "cashier-hosted-fields", e.className && (n.className = e.className);
	let r = gB.join(" ");
	r && n.setAttribute("sandbox", r);
	let i = Uc(e.allow);
	i && n.setAttribute("allow", i), e.referrerPolicy && (n.referrerPolicy = e.referrerPolicy), n.setAttribute("src", e.src);
	let a = {
		...yB,
		...e.styles ?? {}
	};
	if (Object.assign(n.style, a), n.setAttribute("frameborder", "0"), e.attributes) for (let [t, r] of Object.entries(e.attributes)) r != null && n.setAttribute(t, String(r));
	return n;
}, TB = (e, t, n) => {
	let r = Uc(n ?? e.getAttribute("src") ?? e.src) ?? "";
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
}, EB = (e) => {
	let { container: t, iframe: n } = e, r = n.document ?? t.ownerDocument, i = wB({
		...n,
		document: r
	});
	t.firstChild && t.replaceChildren(), t.appendChild(i);
	let a = r.defaultView ?? void 0, o = DB({
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
}, DB = (e) => {
	let { iframe: t } = e, n = e.win ?? (typeof window < "u" ? window : void 0);
	if (!n) throw Error("Hosted fields controller requires a Window instance.");
	let r = TB(t, n, e.targetOrigin), i = {}, a = !1, o = null, s = null, c = null, l = null, u = (e) => {
		l &&= (n.clearTimeout(l.timeoutId), e && l.reject(e), null);
	}, d = (e) => {
		let n = t.contentWindow;
		n && n.postMessage(e, r);
	}, f = () => {
		if (!a || !c) return;
		let { fields: e, debugMode: t, fonts: n, uiTheme: r, autoFocusNextField: i, pciTenantId: o } = c;
		d({
			type: mB.INIT,
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
		let t = Uc(e.message) ?? _B;
		u(Error(t));
	}, g = () => {
		try {
			return t.contentDocument ?? null;
		} catch {
			return null;
		}
	}, _ = (e) => {
		let t = g();
		t && RB(e.fonts, { document: t }), i.onInit?.(e.fonts, e);
	}, v = (e) => {
		if (e.source !== t.contentWindow || e.origin !== r || !CB(e.data)) return;
		let n = e.data;
		n.type === mB.INIT && _(n), n.type === mB.READY && p(), n.type === mB.LAYOUT && n.layout && (o = n.layout, i.onLayout?.(n.layout, n)), n.type === mB.FORM_DATA && m(n.formData), n.type === mB.FORM_STATE && (s = n.formState ?? null), n.type === mB.ERROR && h(n), i.onMessage?.(n);
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
			let r = e?.timeoutMs ?? vB;
			return new Promise((t, i) => {
				l = {
					resolve: t,
					reject: i,
					timeoutId: n.setTimeout(() => {
						l = null, i(/* @__PURE__ */ Error("No response from hosted fields iframe."));
					}, r)
				}, d({
					type: mB.TOKENIZE,
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
			s = null, d({ type: mB.RESET });
		}
	};
}, OB = new Set([
	"woff2",
	"woff",
	"truetype",
	"opentype"
]), kB = new Set([
	"auto",
	"block",
	"swap",
	"fallback",
	"optional"
]), AB = (e) => {
	let t = e.split(Pc)[0]?.toLowerCase() ?? "";
	if (t.endsWith(".woff2")) return "woff2";
	if (t.endsWith(".woff")) return "woff";
	if (t.endsWith(".ttf") || t.endsWith(".ttc")) return "truetype";
	if (t.endsWith(".otf")) return "opentype";
	if (t.startsWith("data:font/woff2")) return "woff2";
	if (t.startsWith("data:font/woff")) return "woff";
	if (t.startsWith("data:font/ttf") || t.startsWith("data:font/truetype")) return "truetype";
	if (t.startsWith("data:font/otf") || t.startsWith("data:font/opentype")) return "opentype";
}, jB = (e) => {
	if (!e) return null;
	let t = Uc(e);
	return t && (Fc.test(t) || Ic.test(t)) ? t : null;
}, MB = (e) => {
	if (e) return OB.has(e) ? e : void 0;
}, NB = (e) => e && kB.has(e) ? e : "swap", PB = (e) => {
	if (!e || e.length === 0) return [];
	let t = [];
	for (let n of e) {
		let e = Uc(n.family) ?? "";
		if (!e) continue;
		let r = [];
		for (let e of n.sources) {
			let t = jB(e.url);
			if (!t) continue;
			let n = MB(e.format) ?? AB(t);
			r.push({
				url: t,
				format: n,
				weight: e.weight,
				style: e.style === "italic" ? "italic" : "normal",
				display: NB(e.display)
			});
		}
		r.length !== 0 && t.push({
			family: e,
			sources: r
		});
	}
	return t;
}, FB = (e) => {
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
}, IB = (e) => {
	let t = e.getElementById(bB);
	t?.parentNode && t.parentNode.removeChild(t);
}, LB = (e, t) => {
	let n = e.documentElement;
	if (t.length === 0) {
		n.style.setProperty(xB, SB);
		return;
	}
	let r = [Array.from(new Set(t.map((e) => e.family))).map((e) => JSON.stringify(e)).join(", "), SB].join(", ");
	n.style.setProperty(xB, r);
}, RB = (e, t) => {
	let n = null;
	if (t?.document) n = t.document;
	else {
		let e = globalThis.document;
		e && (n = e);
	}
	if (!n) return;
	IB(n);
	let r = PB(e);
	if (LB(n, r), r.length === 0) return;
	let i = n.getElementsByTagName("head").item(0);
	if (!i) return;
	let a = FB(r);
	if (!a) return;
	let o = n.createElement("style");
	o.id = bB, o.append(n.createTextNode(a)), i.appendChild(o);
}, zB = (e) => {
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
}, BB = (e) => zB(e?.()), VB = new Set([
	"1",
	"4",
	"8",
	"15",
	"16",
	"24",
	"32",
	"48"
]), HB = [
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
], UB = (e) => {
	let t = e === void 0 ? void 0 : String(e);
	return t && VB.has(t) ? t : void 0;
}, WB = (e) => {
	if (!e) return [];
	let t = [], n = /* @__PURE__ */ new Set();
	for (let r of e) {
		let e = r.trim();
		!e || n.has(e) || (n.add(e), t.push(e));
	}
	return t;
}, GB = () => {
	if (typeof navigator > "u") return;
	let { language: e } = navigator;
	return e?.trim() || WB(Array.isArray(navigator.languages) ? navigator.languages : [])[0];
}, KB = () => {
	if (typeof navigator > "u") return;
	let e = WB(Array.isArray(navigator.languages) ? navigator.languages : []);
	if (e.length > 0) return e;
	let { language: t } = navigator, n = t?.trim();
	return n ? [n] : void 0;
}, qB = (e) => typeof e == "number" && Number.isFinite(e) ? String(Math.trunc(e)) : void 0, JB = (e, t) => HB.find(({ width: n, height: r }) => e >= n && t >= r)?.code ?? "05", YB = () => {
	if (typeof window > "u" || typeof navigator > "u") return;
	let { screen: e, innerWidth: t, innerHeight: n } = window, r = t || e.width || 0, i = n || e.height || 0, a = UB(e.colorDepth), o = qB(e.height), s = qB(e.width), c = KB(), l = GB(), u = String((/* @__PURE__ */ new Date()).getTimezoneOffset()), d = {
		browserJavascriptEnabled: !0,
		challengeWindowSize: JB(r, i)
	};
	a && (d.browserColorDepth = a), c?.length && (d.browserAcceptLanguage = c), d.browserJavaEnabled = !1, l && (d.browserLanguage = l), o && (d.browserScreenHeight = o), s && (d.browserScreenWidth = s), u && (d.browserTZ = u);
	let f = navigator.userAgent || void 0;
	return f && (d.browserUserAgent = f), d;
}, XB = "/logos/payment-types/", ZB = "/assets/payment-type-logos/", QB = (e) => e.replace(/\/+$/, ""), $B = (e, t, n) => {
	let r = t?.trim();
	if (r) try {
		let t = new URL(r);
		return !t.pathname.endsWith(ZB) && !t.pathname.endsWith(XB) ? void 0 : (t.pathname = `${XB}${n === "dark" ? `${e}-dark.svg` : `${e}.svg`}`, t.search = "", t.hash = "", t.toString());
	} catch {
		return;
	}
}, eV = (e, t) => {
	if (!e) return;
	let n = t?.trim(), r = n ? {
		default: $B(e, n, "default") ?? `${QB(n)}/${e}.svg`,
		dark: $B(e, n, "dark") ?? `${QB(n)}/${e}-dark.svg`
	} : void 0;
	return {
		brand: e,
		theme: gk(e),
		logo: r
	};
}, tV = ({ renderMode: e, hideAmountField: t = !1, lockAmount: n = !1, fields: r }) => e !== "form" || t || n ? !1 : (r ?? []).some((e) => e.id === "amount"), nV = (e) => e?.orientation === "top", rV = 120, iV = (e) => e ? !!(e.isComplete ?? (e.isValid && e.dirty)) : !1, aV = (e, t) => {
	if (!(e?.toLowerCase() !== "card" || t?.toLowerCase() !== "payin")) return YB();
}, oV = (e, t) => {
	if (e) try {
		return JSON.parse(e);
	} catch (e) {
		t && console.error("[Cashier] Failed to parse override payload", e);
		return;
	}
}, sV = (e) => {
	let t = e?.ownerDocument.defaultView;
	if (!e || !t) return;
	let n = t.getComputedStyle(e), r = {};
	for (let e = 0; e < n.length; e += 1) {
		let t = n.item(e);
		if (!t.startsWith("--pc-")) continue;
		let i = Uc(n.getPropertyValue(t));
		i && (r[t] = i);
	}
	return r;
}, cV = async (e) => e.current ? !xz(await e.current.validateForm()) : !0, lV = (e, t) => t.reduce((t, n) => {
	let r = n.id;
	return !r || !Object.prototype.hasOwnProperty.call(e, r) || (t[r] = e[r]), t;
}, {}), uV = async (e, t, n) => {
	if (!n) return e;
	let r = await t(_z(e.saveAccount));
	return {
		...e,
		...r
	};
}, dV = async (e, t, n) => {
	let { amount: r, merchantRequestId: i, ...a } = e, o = { ...await uV(a, t, n) };
	return Object.prototype.hasOwnProperty.call(e, "amount") && (o.amount = r), Object.prototype.hasOwnProperty.call(e, "merchantRequestId") && (o.merchantRequestId = i), o;
}, fV = (e) => {
	let { values: t, merchantId: n, userId: r, sessionId: i, accountId: a, currency: o, service: s, bonusCode: c, locales: l, extra: u, method: d, type: f, debug: p, overrideRaw: m } = e, { amount: h, merchantRequestId: g, ..._ } = t, v = {
		merchantId: n,
		userId: r,
		sessionId: i,
		amount: gz(h),
		accountId: a,
		currency: o,
		service: Uc(s) ?? void 0,
		input: vz(_)
	}, y = Uc(c);
	y && (v.bonusCode = y), l?.length && (v.locales = l), u && Object.keys(u).length > 0 && (v.extra = u);
	let b = Uc(g);
	b && (v.merchantRequestId = b);
	let x = aV(f, d);
	x && (v.threeds = x);
	let S = oV(m, p);
	return S && Object.assign(v, S), v;
}, pV = "pan", mV = "expiryDate", hV = "csc", gV = "amount", _V = "field.card.pan.luhn_invalid", vV = [
	"min-h-[11rem]",
	"@sm:min-h-[11.75rem]",
	"@lg:min-h-[12.25rem]"
].join(" "), yV = 4, bV = new Set([
	pV,
	mV,
	hV
]), xV = (e) => e?.luhn ? e : {
	...e ?? {},
	luhn: {
		value: !0,
		invalidMessage: _V
	}
}, SV = (e, t) => {
	let n = t(e.label), r = e.placeholder ? t(e.placeholder) : void 0, i = e.id === pV ? xV(e.validation) : e.validation;
	return {
		...e,
		label: n,
		...r ? { placeholder: r } : {},
		validation: wz(i, t)
	};
}, CV = "Secure card fields are temporarily unavailable", wV = "We couldn't verify your card details.", TV = new Set([
	"error.hosted_fields_not_ready",
	"Hosted fields iframe is not ready.",
	"Hosted fields iframe window unavailable.",
	"Hosted fields controller destroyed before response."
]), EV = new Set([
	"error.hosted_fields_error_received",
	"Hosted fields tokenization already pending.",
	"No response from hosted fields iframe.",
	"No form data received from hosted fields iframe."
]), DV = (e, t, n) => n(Uc(e) ?? Uc(t)), OV = (e) => {
	let t = Uc(e);
	return !t || TV.has(t) ? CV : t;
}, kV = (e) => {
	let t = Uc(e);
	return !t || EV.has(t) ? wV : TV.has(t) ? CV : t;
}, AV = (e) => {
	let t = eP.generate[e];
	return [{
		value: t ? t() : eP.valid[e],
		label: "Valid"
	}, {
		value: eP.invalid[e],
		label: "Invalid"
	}].filter(({ value: e }) => e === void 0 ? !1 : typeof e != "string" || e.length > 0).map(({ value: e, label: t }) => ({
		value: e,
		label: t
	}));
}, jV = (e) => AV(e).length > 0, MV = (e, t) => {
	let n = Uc(e);
	if (!n) return null;
	try {
		let e = t ? new URL(n, t) : new URL(n);
		if (e.protocol !== "http:" && e.protocol !== "https:" || e.origin === "null") return null;
		let r = e.pathname || "/", i = r.lastIndexOf("/");
		return e.pathname = i >= 0 ? r.slice(0, i + 1) : "/", e.search = "", e.hash = "", e.toString();
	} catch {
		return null;
	}
}, NV = (e) => {
	if (e.length === 0) return;
	let t = typeof window < "u" ? window.location.href : void 0;
	for (let n of e) {
		let e = n.logo;
		if (e) {
			if (typeof e == "string") {
				let n = MV(e, t);
				if (n) return n;
				continue;
			}
			if (!(typeof e != "object" || Array.isArray(e))) for (let n of Object.values(e)) {
				if (typeof n != "string") continue;
				let e = MV(n, t);
				if (e) return e;
			}
		}
	}
}, PV = {
	field: 76,
	gap: 8,
	min: 160
}, FV = 180, IV = "saveAccount", LV = "card", RV = new Set([
	"holderName",
	"accountHolder",
	"cardholderName"
]), zV = "brandless";
function BV({ id: e, onActionsChange: t, onPromptStateChange: n, onPreparedValues: r, onValuesChange: i, renderMode: a = "form", hideAmountField: o = !1, amountValueOverride: s, valueOverrides: c, requireDirtyBeforeSubmit: l = !0, comboViewLayout: m = !1, comboViewSurfaceChrome: h = "contained" }) {
	let g = NN(), { debug: v, initialAmount: x, lockAmount: T, currency: E, locale: D, merchantId: O, userId: k, user: A, hostedFieldsUrl: j, sessionId: M, hostedFieldsFonts: N, hostedFieldsAutoFocusNextField: P, uiTheme: F, uiCardBrand: I, uiSuggestAmounts: ee, uiComboView: L, uiBonuses: R, extraAttributes: z, selectedBonusCode: B, setCashierState: V } = f(wN), H = j || "https://hf.pvault.net", { translateKey: U } = CI(), { formatCurrencyValue: W, formatDisplayValue: G } = uz(), K = _(() => Uc(pl(D)), [D]), te = _(() => K ? [K] : void 0, [K]), ne = _(() => U(hB), [U]), { getPaymentType: re, paymentTypesList: q, pciTenantId: ie } = qL(), ae = _(() => NV(q), [q]), oe = F ? "neutral" : void 0, [se, ce] = b(null), le = sr(se) === "dark" ? "secondary" : "secondary-tinted", { fields: ue, hfFields: de, name: fe, type: pe, method: me, accountId: he, service: ge, limits: _e, fee: ve, logo: ye } = re(e) ?? {}, be = ue ?? [], xe = o || T ? be.filter((e) => e.id !== gV) : be, Se = tV({
		renderMode: a,
		hideAmountField: o,
		lockAmount: T,
		fields: xe
	}), Ce = _(() => rl(ee), [ee]), we = d((e) => G(e) || e, [G]), Te = new Map(be.flatMap((e) => e.id && e.notification ? [[e.id, e.notification]] : [])), Ee = de?.flatMap((e) => e.id && e.notification ? [{
		fieldId: e.id,
		notification: e.notification
	}] : []) ?? [], De = Ee.filter(({ notification: e }) => nV(e)), Oe = Ee.filter(({ notification: e }) => !nV(e)), ke = !!(de && de.length > 0), Ae = de?.some((e) => typeof e.id == "string" && bV.has(e.id)) ?? !1, je = ke && Ae && pe?.toLowerCase() === LV && I, { fieldsBeforeHosted: Me, cardLayoutDetailsField: Ne, fieldsAfterHosted: Pe } = _(() => {
		if (!ke) return {
			fieldsBeforeHosted: xe,
			cardLayoutDetailsField: null,
			fieldsAfterHosted: []
		};
		let e = [], t = null, n = [];
		for (let r of xe) {
			if (r.id === IV) {
				n.push(r);
				continue;
			}
			if (je && !t && typeof r.id == "string" && RV.has(r.id)) {
				t = r;
				continue;
			}
			e.push(r);
		}
		return {
			fieldsBeforeHosted: e,
			cardLayoutDetailsField: t,
			fieldsAfterHosted: n
		};
	}, [
		xe,
		je,
		ke
	]), Fe = _(() => {
		let e = rB(de);
		if (e === 0) return PV.min;
		let t = e * PV.field + Math.max(e - 1, 0) * PV.gap;
		return Math.max(t, PV.min);
	}, [de]), [Ie, Le] = b(null), [Y, Re] = b(null), [ze, Be] = b("pending"), [Ve, He] = b(null), [Ue, We] = b(null), [Ge, Ke] = b({
		formId: e,
		brand: void 0
	}), qe = y(null), X = Ge.formId === e ? Ge.brand : void 0, [Je, Ye] = b(!1), Xe = ke ? Ie ?? Y ?? Fe : null, Ze = ke && ze === "loading", Qe = ze === "ready", $e = ze, et = _(() => de ? JSON.stringify(de) : null, [de]), Z = _(() => {
		if (de) return de.map((e) => SV(e, U));
	}, [de, U]), tt = _(() => Z || de, [de, Z]), nt = y(null), rt = y(null), it = y(null), at = y(null), ot = y(ne), st = y(null), ct = y(null), lt = y(ze), ut = y(!1), dt = y(null), ft = y(null), pt = y(null), mt = d(() => sV(rt.current), []), ht = _(() => eV(X, ae), [X, ae]), gt = _(() => {
		if (!(pe?.toLowerCase() !== LV || !he)) return _k(fe);
	}, [
		he,
		fe,
		pe
	]), _t = _(() => eV(gt, ae), [ae, gt]), Q = X ? ht : _t, vt = (() => {
		if (X) return ht?.logo;
		if (gt) return ye ?? _t?.logo;
	})(), yt = je, bt = le, xt = yt ? Q?.theme ?? bt : bt, St = Q?.brand ?? zV, Ct = y(null), [wt, Tt] = b(!1), { paymentResponse: Et, makePayment: Dt, finishPayment: Ot, paymentStatusMessage: kt, isPaymentPending: At, isPaymentSuccessful: jt, isPaymentFailed: Mt } = oz({
		paymentType: pe ?? "",
		method: me ?? ""
	}), Nt = At || jt || wt && !Mt, { overridePayload: Pt, resetOverridePayload: Ft, setLocked: It } = sP(), { registerReset: Lt } = uP();
	sz({
		paymentResponse: Et,
		merchantId: O,
		debug: v
	}), p(() => {
		It(Nt);
	}, [Nt, It]), p(() => () => {
		Ft(), It(!1);
	}, [Ft, It]), p(() => {
		ot.current = ne;
		let e = at.current?.iframe;
		e && ne && (e.title = ne);
	}, [ne]);
	let Rt = d((e) => {
		let t = e?.preserveHeight ?? !1;
		Le((e) => t ? e : null), He(null);
	}, []), zt = d(() => {
		let e = ct.current;
		e && (clearTimeout(e), ct.current = null);
	}, []), Bt = d(() => {
		zt(), ct.current = setTimeout(() => {
			ct.current = null, Be((e) => e === "pending" ? "loading" : e);
		}, rV);
	}, [zt]), Vt = d(() => {
		zt(), ut.current = !1, dt.current = null, Be("pending");
	}, [zt]), Ht = d(() => {
		lt.current !== "ready" && (zt(), Be("ready"));
	}, [zt]), Ut = d(() => {
		let e = dt.current;
		!ut.current || !e || e.containerHeight <= 0 || Ht();
	}, [Ht]), Wt = d(() => {
		ut.current = !0, Ut();
	}, [Ut]), Gt = d(({ containerHeight: e }) => {
		let t = Math.ceil(e);
		t <= 0 || (dt.current = { containerHeight: t }, Le((e) => e === t ? e : t), Ut());
	}, [Ut]);
	p(() => {
		lt.current = ze;
	}, [ze]), p(() => zt, [zt]), p(() => {
		if (!ke) return;
		let e = it.current;
		if (!e) return;
		let t = () => {
			let t = Math.ceil(e.getBoundingClientRect().height);
			t <= 0 || Re((e) => e === t ? e : t);
		};
		if (t(), typeof ResizeObserver > "u") return;
		let n = new ResizeObserver(() => {
			t();
		});
		return n.observe(e), () => {
			n.disconnect();
		};
	}, [et, ke]);
	let Kt = d(() => {
		Rt({ preserveHeight: !0 });
	}, [Rt]), qt = d(() => {
		let e = qe.current;
		e !== null && (clearTimeout(e), qe.current = null);
	}, []), Jt = d((t, n) => {
		if (qt(), t || !n?.delayedClear) {
			Ke((n) => n.formId === e && n.brand === t ? n : {
				formId: e,
				brand: t
			});
			return;
		}
		qe.current = setTimeout(() => {
			qe.current = null, Ke((t) => t.formId === e && t.brand === void 0 ? t : {
				formId: e,
				brand: void 0
			});
		}, FV);
	}, [qt, e]);
	p(() => qt, [qt]);
	let Yt = d(() => {
		Rt({ preserveHeight: !0 }), We(null), Jt(void 0), st.current?.reset();
	}, [Rt, Jt]), Xt = d(() => {
		Nt || Je || (Tt(!1), Yt(), Ct.current?.resetForm(), Ot(), Ft());
	}, [
		Ot,
		Nt,
		Je,
		Yt,
		Ft
	]), Zt = y(null);
	p(() => {
		Zt.current = Xt;
	}, [Xt]);
	let Qt = d(() => {
		Zt.current?.();
	}, []), $t = y(!1);
	p(() => {
		if (!v) {
			$t.current &&= (Lt(null), !1);
			return;
		}
		if (!$t.current) return Lt(Qt), $t.current = !0, () => {
			$t.current &&= (Lt(null), !1);
		};
	}, [
		v,
		Lt,
		Qt
	]);
	let en = d((e) => {
		if (e.type === mB.CARD_BRAND) {
			Jt(e.cardBrand, { delayedClear: e.cardBrand === void 0 });
			return;
		}
		if (e.type === mB.FORM_STATE) {
			We(e.formState ?? null);
			return;
		}
		if (e.type === mB.ERROR) {
			let t = OV(e.message);
			zt(), Be((e) => e === "ready" ? e : "loading"), He(t), Ye(!1);
		}
	}, [zt, Jt]);
	p(() => {
		if (!ke) return;
		let e = rt.current;
		if (!e) return;
		let t = e.ownerDocument.defaultView ?? (typeof window < "u" ? window : void 0), n = ft.current, r = et ?? null;
		if (at.current && n !== null && n === r) return;
		u(() => {
			Vt(), Rt(), We(null), Jt(void 0);
		}), Bt(), at.current?.destroy(), at.current = null, st.current = null, ft.current = r, pt.current = null;
		let i = (() => {
			let e;
			if (t ? e = t.location.href : typeof window < "u" && (e = window.location.href), e) try {
				return new URL(H, e).origin;
			} catch {
				return;
			}
		})(), a = EB({
			container: e,
			iframe: {
				src: H,
				title: ot.current,
				attributes: { scrolling: "no" },
				styles: {
					minHeight: `${String(PV.min)}px`,
					overflow: "hidden"
				}
			},
			controller: i ? { targetOrigin: i } : void 0
		});
		return at.current = a, st.current = a.controller, typeof a.iframe.addEventListener == "function" && a.iframe.addEventListener("pointerdown", Kt), () => {
			typeof a.iframe.removeEventListener == "function" && a.iframe.removeEventListener("pointerdown", Kt), a.destroy(), at.current === a && (at.current = null, st.current = null), Vt(), Rt(), We(null), Jt(void 0), ft.current = null, pt.current = null;
		};
	}, [
		Kt,
		Rt,
		et,
		H,
		Vt,
		Bt,
		ke,
		Jt
	]), p(() => {
		if (!ke) return;
		let e = st.current;
		if (!e) return;
		e.setCallbacks({
			onReady: Wt,
			onLayout: Gt,
			onMessage: en
		});
		let t = e.getLastLayout();
		t && Gt(t);
		let n = e.getLastFormState();
		return n && We(n), e.isReady() && Wt(), () => {
			e.setCallbacks(null);
		};
	}, [
		Wt,
		Gt,
		en,
		et,
		H,
		ke
	]), p(() => {
		if (!ke) return;
		let e = st.current;
		if (!e) return;
		let t = BB(mt), n = Object.entries(t).sort(([e], [t]) => e.localeCompare(t)), r = n.length > 0 ? Object.fromEntries(n) : void 0, i = {
			debugMode: v,
			fields: tt ?? void 0,
			fonts: N,
			uiTheme: r,
			autoFocusNextField: P,
			pciTenantId: ie
		}, a = JSON.stringify({
			...i,
			fields: i.fields ?? null,
			fonts: i.fonts ?? null,
			uiTheme: i.uiTheme ?? null,
			pciTenantId: i.pciTenantId ?? null
		});
		pt.current !== a && (pt.current = a, e.configure(i));
	}, [
		xt,
		v,
		N,
		P,
		H,
		ie,
		tt,
		mt,
		ke,
		F
	]);
	let tn = _(() => {
		let e = yz(ue, { amount: x });
		return Object.entries(c ?? {}).forEach(([t, n]) => {
			n !== void 0 && (e[t] = n);
		}), e;
	}, [
		ue,
		x,
		c
	]), nn = d((e) => {
		let t = st.current;
		if (!t) return Promise.reject(/* @__PURE__ */ Error("error.hosted_fields_not_ready"));
		He(null), Ye(!0);
		try {
			let n = t.tokenize({ saveAccount: e });
			return Promise.resolve(n).catch((e) => {
				let t = e instanceof Error ? e : Error(String(e));
				throw He(kV(t.message)), t;
			}).finally(() => {
				Ye(!1);
			});
		} catch (e) {
			Ye(!1);
			let t = e instanceof Error ? e : Error(String(e));
			return He(kV(t.message)), Promise.reject(t);
		}
	}, []), rn = d(async (e, t) => {
		if (t.setSubmitting(!1), !await cV(Ct)) return;
		let n = v ? Pt : void 0;
		try {
			let t = await dV(e, nn, st.current);
			if (r) {
				r({
					values: t,
					hasHostedFields: ke
				});
				return;
			}
			let i = fV({
				values: t,
				merchantId: O,
				userId: k,
				sessionId: M,
				accountId: he,
				currency: E,
				service: ge,
				bonusCode: R ? B ?? void 0 : void 0,
				locales: te,
				extra: z,
				method: me,
				type: pe,
				debug: v,
				overrideRaw: n
			});
			Tt(!0), Dt(i);
		} catch (e) {
			Tt(!1), He(kV((e instanceof Error ? e : Error(String(e))).message));
		}
	}, [
		O,
		k,
		he,
		ge,
		B,
		R,
		v,
		Dt,
		E,
		M,
		z,
		nn,
		r,
		me,
		ke,
		pe,
		Pt,
		te
	]), an = d((e) => Cz(a === "confirm" ? [] : xe, e, U), [
		a,
		xe,
		U
	]), on = Mt ? DV(kt, "error.unknown", U) : null, sn = ke && Ve !== null ? DV(Ve, CV, U) : null, cn = on || sn;
	return !e || !ue ? null : /* @__PURE__ */ C(Kv, {
		initialValues: tn,
		onSubmit: rn,
		validate: an,
		innerRef: Ct,
		validateOnMount: !0,
		children: ({ values: r, errors: o, initialValues: c, submitForm: u, setFieldValue: d, setFieldTouched: f, isValid: p, dirty: _ }) => {
			let y = (e, t) => {
				if (f(e, !0, !1), d(e, t, !0), typeof window > "u" || typeof document > "u") return;
				let n = () => {
					let t = typeof CSS < "u" && typeof CSS.escape == "function" ? CSS.escape(e) : e.replace(/"/g, "\\\""), n = document.querySelector(`[name="${t}"]`);
					if (n) {
						n.focus();
						return;
					}
					document.getElementById(g.id("payment-field", { slug: e }))?.focus();
				}, r = typeof window.requestAnimationFrame == "function" ? window.requestAnimationFrame.bind(window) : null;
				if (r) {
					r(n);
					return;
				}
				setTimeout(n, 0);
			}, b = typeof r.amount == "string" ? r.amount : "", E = s ?? b, D = DL(E, _e, { maxBoundary: CL(me === "payout" ? gN.PAYOUT : gN.PAYIN, A, ve) }), O = OL(D, U, W), k = !!D, j = typeof o.amount == "string" && o.amount.length > 0 && o.amount ? void 0 : O, M = Object.values(c).some(bz), N = l && a !== "confirm" && !M, P = xz(o), F = Sz(a === "confirm" ? [] : xe, r), I = a === "confirm" || !ke || iV(Ue), ee = !p || P || k || F || !I || !_ && N, R = Nt || Je || ee, z = !ee, B = !Mt || p, H = !t, G = U("payment.submit"), K = U("cta.reset"), te = Nt || Je, ne = Nt || Je, re = a !== "confirm", q = re && ke, ie = q && De.length > 0, ae = q && Oe.length > 0, se = tl(E) || E || void 0, le = !T && !L && re && Ce.length > 0 && !!xe.find((e) => e.id === gV), ue = H && B ? 1 : 0, de = Me.length + +!!ie + +!!q + +!!ae + Pe.length + ue, fe = Me.length, pe = fe + +!!ie, he = pe + +!!q, ge = he + +!!ae, ye = ge + Pe.length, Ee = (e) => le && e === gV ? /* @__PURE__ */ C(dB, {
				suggestions: Ce,
				activeSuggestion: se,
				onSelect: (e) => {
					d(gV, el(e), !1);
				},
				formatLabel: we,
				amountLimits: _e,
				size: "sm"
			}) : null, Ae = (e) => {
				let t = Te.get(e);
				return nV(t) ? /* @__PURE__ */ C("div", {
					className: "mb-2 flex flex-col gap-2",
					children: /* @__PURE__ */ C(pB, {
						notification: t,
						translateKey: U
					})
				}) : null;
			}, Fe = (e) => {
				let t = Te.get(e), n = t && !nV(t) ? t : null, r = v && jV(e);
				return !n && !r ? null : /* @__PURE__ */ w("div", {
					className: n ? "mt-1 mb-4.5 flex flex-col gap-2" : "mt-2 flex flex-col gap-2",
					children: [n && /* @__PURE__ */ C(pB, {
						notification: n,
						translateKey: U
					}), r && /* @__PURE__ */ w("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ C("span", {
							className: "text-sm font-medium",
							children: "Debug"
						}), AV(e).map(({ value: t, label: n }) => /* @__PURE__ */ C(un, {
							variant: "neutral",
							size: "sm",
							disabled: At || jt,
							onClick: () => {
								y(e, t);
							},
							label: n
						}, `${e}_${n}`))]
					})]
				});
			}, Ie = q && je, Le = m && h === "plain", Y = m && Ie && !Le, Re = {
				margin: -yV,
				width: `calc(100% + ${String(yV * 2)}px)`
			}, ze = Re;
			Ie && (ze = Xe === null ? void 0 : { height: Xe }), !Ie && Xe !== null && (ze = {
				...Re,
				height: Xe + yV * 2
			});
			let Be = /* @__PURE__ */ w("div", {
				"data-theme": Ie ? void 0 : oe,
				className: J(g.className("hosted-fields-frame"), "relative", Ie ? "overflow-hidden rounded-[var(--pc-radius-lg)] bg-transparent" : "overflow-visible bg-transparent"),
				children: [/* @__PURE__ */ C("div", {
					ref: rt,
					"data-slot": "hosted-fields-target",
					"data-state": Qe ? "ready" : "loading",
					className: J(g.className("hosted-fields-target"), "w-full overflow-hidden transition-opacity duration-180 ease-out", Qe ? "opacity-100" : "opacity-0"),
					style: ze
				}), ke && /* @__PURE__ */ C("div", {
					"aria-hidden": "true",
					"data-testid": "cashier-hosted-fields-skeleton",
					"data-slot": "hosted-fields-skeleton-layer",
					"data-state": $e,
					className: J(g.className("hosted-fields-skeleton"), "pointer-events-none absolute inset-0 z-10 transition-opacity duration-180 ease-out", Ze ? "opacity-100" : "opacity-0"),
					style: Ie ? void 0 : { inset: -yV },
					children: /* @__PURE__ */ C(uB, {
						fields: tt ?? [],
						className: "h-full"
					})
				})]
			}), Ve = Ne ? /* @__PURE__ */ C(Jz, {
				fields: [Ne],
				translateKey: U,
				disabled: Nt,
				amountError: j,
				renderBelowFieldContent: Ee,
				belowFieldContentInheritsTheme: !1,
				renderBeforeField: Ae,
				renderAfterField: Fe,
				reserveCheckboxMessageSpace: !Le
			}) : void 0, He = yt ? /* @__PURE__ */ C(VV, {
				brand: Q?.brand,
				logo: vt
			}) : void 0, We = Me.length > 0 ? /* @__PURE__ */ C("div", {
				className: "contents",
				children: /* @__PURE__ */ C(Jz, {
					fields: Me,
					translateKey: U,
					disabled: Nt,
					amountError: j,
					renderBelowFieldContent: Ee,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: Ae,
					renderAfterField: Fe,
					animateRows: !0,
					animationStartIndex: 0,
					animationTotalCount: de,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !Le
				})
			}) : null, Ge = q ? /* @__PURE__ */ w("div", {
				id: g.id("hosted-fields-container"),
				ref: nt,
				className: J(g.className("hosted-fields-container"), Y ? "relative mb-2 @md:mb-3 w-full" : "relative mb-2 w-full", Ez),
				"data-testid": "cashier-hosted-fields-container",
				style: Hz({
					index: pe,
					total: de,
					direction: "reverse"
				}),
				children: [
					/* @__PURE__ */ C("span", {
						ref: ce,
						"aria-hidden": "true",
						"data-slot": "cashier-card-shell-theme-probe",
						hidden: !0
					}),
					Ie ? /* @__PURE__ */ C(vn, {
						dataTheme: xt,
						brandMotionKey: St,
						className: J(g.className("hosted-fields-card-shell"), vV),
						cardFields: Be,
						cardFieldsClassName: "flex-1 px-0",
						details: Ve,
						detailsClassName: "px-1",
						footer: He,
						reserveFooterSpace: yt
					}) : Be,
					/* @__PURE__ */ C("div", {
						"aria-hidden": "true",
						className: "pointer-events-none invisible absolute inset-x-0 top-0 -z-10",
						children: /* @__PURE__ */ C("div", {
							ref: it,
							children: /* @__PURE__ */ C(uB, { fields: tt ?? [] })
						})
					})
				]
			}) : null, Ke = (e, t) => e.length > 0 ? /* @__PURE__ */ C("div", {
				className: J(g.className("hosted-fields-notifications"), t.placement === "top" ? "mb-2 flex flex-col gap-2 @xl:col-span-2" : "mt-1 mb-4.5 flex flex-col gap-2 @xl:col-span-2", Ez),
				style: Hz({
					index: t.animationIndex,
					total: de,
					direction: "reverse"
				}),
				children: e.map(({ fieldId: e, notification: t }) => /* @__PURE__ */ C(pB, {
					notification: t,
					translateKey: U
				}, `${e}-${t.key}-${t.type}`))
			}) : null, qe = ie ? Ke(De, {
				placement: "top",
				animationIndex: fe
			}) : null, X = ae ? Ke(Oe, {
				placement: "bottom",
				animationIndex: he
			}) : null, Ye = Pe.length > 0 ? /* @__PURE__ */ C("div", {
				className: "contents",
				children: /* @__PURE__ */ C(Jz, {
					fields: Pe,
					translateKey: U,
					disabled: Nt,
					amountError: j,
					renderBelowFieldContent: Ee,
					belowFieldContentInheritsTheme: !1,
					renderBeforeField: Ae,
					renderAfterField: Fe,
					animateRows: !0,
					animationStartIndex: ge,
					animationTotalCount: de,
					animationDirection: "reverse",
					reserveCheckboxMessageSpace: !Le
				})
			}) : null, et = m && (!!We || !!Ye || !Y && (!!Ge || !!qe || !!X)), Z = /* @__PURE__ */ w(S, { children: [
				We,
				!Y && qe,
				!Y && Ge,
				!Y && X,
				Ye
			] }), at = Le || Y ? "pt-0" : Ie ? "pt-2" : "pt-2.5", ot = /* @__PURE__ */ w(S, { children: [
				Y && qe,
				Y && Ge,
				Y && X,
				et && /* @__PURE__ */ C("div", {
					"data-slot": "quick-payment-form-surface",
					"data-theme": "neutral",
					className: J("w-full text-[var(--pc-color-text)]", Le ? "overflow-visible" : [
						"flex flex-col rounded-[var(--pc-radius-lg)]",
						"[background:var(--pc-color-surface)]",
						"pc-enter-panel",
						"pt-3 @xl:pt-4 pr-3 @xl:pr-4 pb-3 @xl:pb-4 pl-3 @xl:pl-4"
					]),
					children: /* @__PURE__ */ C("div", {
						className: J(sk, Le && "overflow-visible", at),
						children: Z
					})
				})
			] }), st = /* @__PURE__ */ w(S, { children: [
				We,
				qe,
				Ge,
				X,
				Ye
			] }), ct = J(g.className("payment-form", { slug: e }), m ? "contents" : [
				sk,
				Tz,
				Ie ? "pt-1 @md:pt-2" : "pt-4.5"
			]), lt = m ? ot : st;
			return /* @__PURE__ */ w(S, { children: [
				/* @__PURE__ */ C(HV, {
					enabled: Se,
					amountValue: E,
					sharedAmount: x,
					setCashierState: V
				}),
				i && /* @__PURE__ */ C(UV, {
					onValuesChange: i,
					values: r,
					fields: be,
					hasHostedFields: ke
				}),
				n && /* @__PURE__ */ C(GV, {
					onPromptStateChange: n,
					isComplete: z,
					errorMessage: cn
				}),
				t && /* @__PURE__ */ C(WV, {
					onActionsChange: t,
					submitLabel: G,
					resetLabel: K,
					submitDisabled: R,
					submitVisible: B,
					submitLoading: ne,
					resetDisabled: te,
					resetVisible: v,
					submitForm: u,
					onReset: Xt
				}),
				re && /* @__PURE__ */ C(ry, {
					id: g.id("payment-form", { slug: e }),
					className: ct,
					noValidate: !0,
					children: lt
				}),
				H && B && /* @__PURE__ */ C("div", {
					className: "pc-enter-rise-item",
					style: Hz({
						index: ye,
						total: de,
						direction: "reverse"
					}),
					children: /* @__PURE__ */ C(un, {
						variant: "secondary",
						disabled: R,
						loading: ne,
						onClick: () => {
							u();
						},
						label: G
					})
				})
			] });
		}
	});
}
function VV({ brand: e, logo: t }) {
	let [n, r] = b(null), [i, a] = b({
		key: "",
		values: []
	}), o = sr(n, { tokenName: "--pc-color-secondary" }), s = [
		e ?? "",
		o,
		JSON.stringify(t ?? null)
	].join("|"), c = i.key === s ? i.values : [], l = Or(t, o, !1).find((e) => !c.includes(e));
	return /* @__PURE__ */ C("div", {
		ref: r,
		"data-slot": "cashier-card-brand-footer",
		className: "flex h-7 w-[4.125rem] shrink-0 items-center justify-end overflow-hidden",
		children: l && /* @__PURE__ */ C("img", {
			src: l,
			alt: "",
			"aria-hidden": "true",
			className: J("block h-6.5 w-[3.75rem] shrink-0 object-contain object-right md:h-7 md:w-[4.125rem]", "pc-card-brand-logo-enter"),
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
function HV({ enabled: e, amountValue: t, sharedAmount: n, setCashierState: r }) {
	let i = y(n);
	return p(() => {
		i.current = n;
	}, [n]), p(() => {
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
function UV({ onValuesChange: e, values: t, fields: n, hasHostedFields: r }) {
	return p(() => {
		e({
			values: lV(t, n),
			hasHostedFields: r
		});
	}, [
		n,
		r,
		e,
		t
	]), null;
}
function WV({ onActionsChange: e, submitLabel: t, resetLabel: n, submitDisabled: r, submitVisible: i, submitLoading: a, resetDisabled: o, resetVisible: s, submitForm: c, onReset: l }) {
	let u = y(c), f = y(l);
	p(() => {
		u.current = c;
	}, [c]), p(() => {
		f.current = l;
	}, [l]);
	let m = d(() => {
		u.current();
	}, []), h = d(() => {
		f.current();
	}, []), g = _(() => ({
		submit: {
			label: t,
			disabled: r,
			visible: i,
			loading: a,
			onClick: m
		},
		reset: {
			label: n,
			disabled: o,
			visible: s,
			onClick: h
		}
	}), [
		h,
		m,
		o,
		n,
		s,
		r,
		a,
		t,
		i
	]);
	return p(() => {
		e && e(g);
	}, [g, e]), null;
}
function GV({ onPromptStateChange: e, isComplete: t, errorMessage: n }) {
	return p(() => (e({
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
var KV = (e) => e !== vN.NONE, qV = (e) => e === vN.PICKER, JV = ({ mode: e, paymentFormEnabled: t }) => {
	switch (e) {
		case vN.ACCORDION: return t ? _N.ACCORDION : _N.LIST;
		case vN.GRID: return _N.GRID;
		case vN.LIST: return _N.LIST;
		case vN.NONE:
		case vN.PICKER:
		default: return null;
	}
}, YV = (e) => e === _N.ACCORDION ? _N.LIST : e, XV = (e) => (e.fields ?? []).some((e) => e.id === "amount"), ZV = (e) => {
	let t = e.hfFields;
	return (e.fields ?? []).some((e) => !!e.id && e.id !== "amount") || (t ?? []).length > 0;
}, QV = (e, t, n) => {
	if (!XV(e)) return "";
	let r = n?.amount;
	return tl(typeof r == "string" ? r : t);
}, $V = (e, t) => ZV(e) ? !0 : XV(e) && !nl(t);
//#endregion
//#region src/components/PaymentTypeInlineForm.tsx
function eH({ paymentType: e, amountValue: t, valueOverrides: n, hideAmountField: r = !1, surfaceChrome: i = "contained", onActionsChange: a, onPromptStateChange: o, onPreparedValues: s, onValuesChange: c }) {
	let l = e.name, u = XV(e), f = QV(e, t), p = u && r;
	return /* @__PURE__ */ C(BV, {
		id: l,
		onActionsChange: a,
		onPromptStateChange: d((e) => {
			o(l, e);
		}, [o, l]),
		onPreparedValues: d((t) => {
			s(e, t);
		}, [s, e]),
		onValuesChange: d((t) => {
			c(e, t);
		}, [c, e]),
		hideAmountField: p,
		amountValueOverride: p ? f : void 0,
		valueOverrides: n,
		requireDirtyBeforeSubmit: !1,
		comboViewLayout: !0,
		comboViewSurfaceChrome: i
	});
}
//#endregion
//#region src/components/PaymentTypeLogo.tsx
var tH = (e) => e === _N.GRID ? "grid" : "list";
function nH({ logo: e, alt: t, seed: n, className: r, tone: i, listStyle: a, compact: o = !1, balanceLogo: s = !0, stuck: c = !1, content: l }) {
	return /* @__PURE__ */ C(jr, {
		logo: e,
		alt: t,
		seed: n,
		className: r,
		tone: i,
		layout: tH(a),
		compact: o,
		balanceLogo: s,
		stuck: c,
		stablePresentation: !0,
		content: l
	});
}
//#endregion
//#region src/components/PaymentTypeLimitsFee.tsx
var rH = (e, t) => {
	if (!e) return {
		min: "",
		max: ""
	};
	let n = (e) => e === void 0 ? "" : t(e) || e;
	return {
		min: n(e.min),
		max: n(e.max)
	};
}, iH = (e, t, n) => {
	if (!e || !aL(e)) return "";
	let r = oL(e.direction), i = e.value || "", a = t(i) || i;
	if (e.feeType === "percentage") {
		let e = `${i}%`;
		return r ? `${r}${e}` : e;
	}
	let o = lL(e, 0, {
		feeCurrencyFormatter: n,
		formatCurrencyValue: t
	});
	return r && o ? o : r ? o || `${r}${a}` : a;
}, aH = ({ min: e, max: t }) => e && t ? `${e} - ${t}` : e || t || "";
function oH({ limits: e, fee: t, extraItems: n = [], rowGap: r = "tight", align: i = "center", truncate: a = !1, className: o }) {
	let { uiShowFees: s } = f(wN), { translateKey: c } = CI(), { currencyFormatter: l, formatCurrencyValue: u, formatDisplayValue: d } = uz(), p = d ?? (() => ""), m = u ?? d, h = a, g = sL(l ?? null), _ = rH(e, p), v = iH(t, m ?? p, g), y = aH(_), b = c("field.fee.label"), x = s && v ? `${v} ${b}` : "", T = [
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
	return T.length === 0 ? null : /* @__PURE__ */ C("div", {
		className: J(h ? "min-w-0 line-clamp-2 leading-tight @md:leading-snug" : "flex flex-wrap items-center leading-tight @md:leading-snug", !h && (r === "normal" ? "gap-y-1.5" : "gap-y-0.5"), i === "left" ? "justify-start text-left" : "justify-center text-center", o),
		children: T.map((e, t) => {
			let n = h && t > 0, r = !h && t < T.length - 1, i = /* @__PURE__ */ w(S, { children: [e.label && /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("span", {
				className: "font-medium",
				children: e.label
			}), ": "] }), /* @__PURE__ */ C("span", { children: e.value })] });
			return /* @__PURE__ */ w("span", {
				"data-payment-meta-item": e.id,
				"data-theme": e.id === "bonus" ? "success" : void 0,
				className: J("inline-flex items-center whitespace-nowrap", e.id === "bonus" && "text-[var(--pc-color-text)]"),
				children: [
					n ? /* @__PURE__ */ C("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null,
					i,
					r ? /* @__PURE__ */ C("span", {
						"aria-hidden": "true",
						className: "mx-1 text-[var(--pc-color-text-muted)]",
						children: "|"
					}) : null
				]
			}, e.id);
		})
	});
}
function sH({ limits: e, fee: t, extraItems: n, align: r = "left", rowGap: i, truncate: a, className: o }) {
	return /* @__PURE__ */ C(oH, {
		limits: e,
		fee: t,
		extraItems: n,
		align: r,
		rowGap: i,
		truncate: a,
		className: J(["text-xs @sm:text-sm text-[var(--pc-color-text-muted)]"].join(" "), o)
	});
}
//#endregion
//#region src/hooks/usePaymentSelection.ts
var cH = () => {
	let { selectedPaymentType: e, gotoPaymentType: t, hasAppliedGotoPaymentType: n, setCashierState: r } = f(wN), i = d((e) => {
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
		clearPaymentSelection: d(() => {
			r((e) => e.selectedPaymentType === null && !e.selectedBonusCode ? e : {
				...e,
				selectedPaymentType: null,
				selectedBonusCode: null,
				paymentFormDraft: null,
				comboViewFormDraft: null
			});
		}, [r]),
		ensureDefaultSelection: d((r) => {
			if (e) return;
			let a = (t && !n ? HL(r, t) : null)?.name ?? r[0]?.name;
			a && i(a);
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
function lH({ children: e, className: t }) {
	let { isTranslationVisible: n } = wI();
	return e == null ? null : /* @__PURE__ */ C("span", {
		className: J("transition-opacity duration-150", n ? "opacity-100" : "opacity-0", t),
		children: e
	});
}
//#endregion
//#region src/ui/PaymentTypeListItem.tsx
var uH = (e, t) => !t || e == null ? e : n.map(e, (e) => {
	if (!l(e)) return e;
	let n = e.props, r = n.children === void 0 ? n.children : uH(n.children, t);
	return e.type === un ? a(e, {
		appearance: "ghost",
		children: r
	}) : r === n.children ? e : a(e, { children: r });
});
function dH({ name: e, domSlug: t, logo: n, logoContent: r, limits: i, fee: a, onSelect: o, listStyle: s, compact: c, variant: l = "neutral", appearance: u = "solid", shape: p = "default", showMeta: m = !1, title: h, description: g, meta: _, isSelected: v = !1, showSelectedIndicator: y = !0, bonusLabel: x = null, badges: T, hasAvailableBonuses: E, interactive: D = !0, includeDataTheme: O = !0, hoverMode: k = "self", isDisabled: A = !1, balanceLogo: j = !0, embedded: M = !1, actions: N, actionStopsPropagation: P = !0, className: F, animationClassName: I, animationStyle: ee, infoDrawer: L }) {
	let R = NN(), z = U(), { translateKey: B } = CI(), { uiListStyle: V, bonuses: H, uiBonuses: W, uiBonusesAvailable: G, uiShowFees: K } = f(wN), { selectPaymentType: te } = cH(), [ne, re] = b(!1), q = D && !A, ie = h ?? e, ae = B(ie), oe = ie.trim().length > 0, se = g ? B(g) : null, ce = typeof g == "string" && g.trim().length > 0, le = B("aria.logo"), ue = s ?? V, de = ue === _N.GRID, fe = !!c, pe = p === "rounded", me = sn(l), he = O && !M, ge = R.token(t ?? e, "item"), _e = d(() => {
		if (q) {
			if (o) {
				o(e);
				return;
			}
			if (te(e), E ?? (W && YI(H))) {
				z({ to: "/bonus" });
				return;
			}
			z({
				to: "/pt/$id",
				params: { id: e }
			});
		}
	}, [
		H,
		E,
		q,
		e,
		z,
		o,
		te,
		W
	]), ve = (e) => {
		q && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), _e());
	}, ye = d((e) => {
		e.stopPropagation(), re(!0);
	}, []), be = d(() => {
		re(!1);
	}, []), xe = G ? x : null, Se = de ? [...T ?? [], ...xe ? [{
		id: "bonus",
		label: xe
	}] : []] : [], Ce = de ? "p-2 gap-0.5" : M && !fe && !pe ? "px-0 py-2.5 gap-2.5" : J(M ? "px-0 py-2.5" : fe ? "py-2 px-2 @md:px-3" : pe ? "py-2.5 px-3.5" : "p-3", fe ? "gap-2.5 @md:gap-3" : pe ? "gap-2 @lg:gap-2.5" : "gap-3"), we = de ? "aspect-square flex-col justify-around" : fe ? "items-center justify-between" : "justify-between @md:justify-around", Te = m || !!x, Ee = q || k === "group" ? "transition-[background-color] duration-[250ms] ease-out" : null, De = k === "group" ? ["group-hover:[background:var(--pc-color-surface-weaker)]", "group-active:[background:var(--pc-color-surface-weaker)]"].join(" ") : k === "self" && q ? ["hover:[background:var(--pc-color-surface-weaker)]", "active:[background:var(--pc-color-surface-weaker)]"].join(" ") : null, Oe = J("flex w-full min-w-0 overflow-hidden items-center", (() => {
		if (M) return "bg-transparent text-[var(--pc-color-text)]";
		switch (u) {
			case "ghost": return "bg-transparent text-[var(--pc-color-text)]";
			case "outline": return "border border-[var(--pc-color-border)] bg-[var(--pc-color-outline-surface,transparent)] text-[var(--pc-color-text)]";
			case "muted": return "[background:var(--pc-color-surface-weakest)] text-[var(--pc-color-text)]";
			default: return "[background:var(--pc-color-surface)] text-[var(--pc-color-text)]";
		}
	})(), !!(N || L) && "relative", !M && (pe ? "rounded-[var(--pc-radius-3xl)]" : "rounded-[var(--pc-radius-lg)]"), q && "group cursor-pointer", Ee, De, A && me !== "danger" && [
		"opacity-55",
		"[filter:saturate(0.72)_grayscale(0.18)]",
		"[--pc-enter-final-opacity:0.55]"
	].join(" "), Ce, we, I, F), ke = de ? "text-center" : "text-left", Ae = J("w-full text-base @sm:text-md @md:text-lg @3xl:text-xl font-medium leading-snug", A ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", de ? "break-words" : "truncate", ke), je = J("flex min-w-0 flex-col", de ? "items-center w-full" : "items-start flex-1"), Me = Te ? /* @__PURE__ */ C(sH, {
		limits: i,
		fee: a,
		align: de ? "center" : "left",
		rowGap: de ? void 0 : "normal",
		extraItems: xe && !de ? [{
			id: "bonus",
			value: xe
		}] : void 0
	}) : null, Ne = !!(m && (i?.min || i?.max || K && a?.value)), Pe = !!(ce || Ne || _), Fe = de && Se.length > 0 ? /* @__PURE__ */ C("div", {
		className: J("flex flex-wrap justify-center gap-1 text-center", Pe && "-mt-0.5"),
		children: Se.map((e) => /* @__PURE__ */ C("span", {
			"data-theme": sn(e.variant ?? "success"),
			className: J("inline-flex items-center rounded-[var(--pc-radius-full)] px-2.5 py-1 text-xs font-medium leading-tight", e.variant === "neutral" ? "text-[var(--pc-color-text-muted)]" : "text-[var(--pc-color-text)]", e.id !== "bonus" && "italic"),
			children: e.label
		}, e.id))
	}) : null, Ie = !!(ce || Me || _ || Fe), Le = null;
	Ie ? Le = /* @__PURE__ */ w("div", {
		className: je,
		children: [
			oe && /* @__PURE__ */ C("h3", {
				className: Ae,
				children: /* @__PURE__ */ C(lH, { children: ae })
			}),
			ce && /* @__PURE__ */ C("p", {
				className: J("text-xs @sm:text-sm text-[var(--pc-color-text-muted)] @md:leading-tight", ke),
				children: /* @__PURE__ */ C(lH, { children: se })
			}),
			Me,
			_,
			Fe
		]
	}) : oe && (Le = /* @__PURE__ */ C("h3", {
		className: Ae,
		children: /* @__PURE__ */ C(lH, { children: ae })
	}));
	let Y = L ? {
		label: B(L.ariaLabelKey ?? L.titleKey),
		title: /* @__PURE__ */ C(lH, { children: B(L.titleKey) }),
		icon: L.icon ?? /* @__PURE__ */ C($u, {})
	} : null, Re = Y ? /* @__PURE__ */ C(un, {
		size: "sm",
		variant: "neutral",
		appearance: fe ? "ghost" : void 0,
		"aria-label": Y.label,
		onClick: ye,
		onKeyDown: (e) => {
			e.stopPropagation();
		},
		iconOnly: !0,
		label: Y.label,
		leadingIcon: Y.icon
	}) : null, ze = uH(N, fe), Be = d((e) => {
		P && e.stopPropagation();
	}, [P]), Ve = d((e) => {
		P && e.stopPropagation();
	}, [P]), He = N || Re ? /* @__PURE__ */ w("div", {
		id: R.id("payment-list-item-actions", { slug: ge }),
		className: J(R.className("payment-list-item-actions", { slug: ge }), "flex items-center justify-end gap-2", de ? "absolute right-2 top-2" : "ml-auto self-center"),
		onClick: Be,
		onKeyDown: Ve,
		children: [Re, ze]
	}) : null, Ue = Y ? /* @__PURE__ */ C(MI, {
		isOpen: ne,
		onClose: be,
		title: Y.title,
		children: /* @__PURE__ */ C("div", {
			className: "px-5 pb-5 pt-2",
			children: L?.content
		})
	}) : null, We = de ? "grid" : "list", Ge = [ae, le].filter((e) => typeof e == "string" && e.length > 0).join(" "), Ke = r ? /* @__PURE__ */ C("div", {
		className: Ar({
			layout: We,
			compact: fe
		}),
		children: /* @__PURE__ */ C("span", {
			className: J("flex items-center justify-center", kr({
				layout: We,
				compact: fe
			})),
			children: r
		})
	}) : /* @__PURE__ */ C(nH, {
		logo: n,
		alt: Ge,
		seed: e,
		listStyle: ue,
		compact: c,
		balanceLogo: j
	});
	return /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ w("div", {
		id: R.id("payment-list-item", { slug: ge }),
		onClick: _e,
		onKeyDown: q ? ve : void 0,
		role: q ? "button" : void 0,
		tabIndex: q ? 0 : void 0,
		"aria-disabled": A || void 0,
		"data-theme": he ? me : void 0,
		style: ee,
		className: J(R.className("payment-list-item", { slug: ge }), Oe, de && "relative", v && y && [
			"[outline-style:solid]",
			"outline-3 outline-[var(--pc-color-secondary)]",
			"outline-offset-[2.5px]"
		].join(" ")),
		children: [
			Ke,
			Le,
			He
		]
	}), Ue] });
}
//#endregion
//#region src/ui/SelectableListLayout.tsx
function fH({ children: e, id: t, className: n, contentClassName: r, contentStyle: i, listStyle: a, compact: o, stacked: s = !1 }) {
	let { uiListStyle: c } = f(wN), l = (a ?? c) === _N.GRID;
	return /* @__PURE__ */ C("div", {
		id: t,
		className: n,
		children: /* @__PURE__ */ C("div", {
			className: J("gap-2", s || o || !l ? "grid grid-cols-1" : "grid grid-cols-2 @xl:grid-cols-3 @3xl:grid-cols-4", r),
			style: i,
			children: e
		})
	});
}
//#endregion
//#region src/hooks/useBonuses.ts
var pH = (e) => e ? [
	e.name,
	e.accountId,
	e.method,
	e.type,
	e.service ?? ""
].join("|") : "__none__", mH = (e) => [
	String(e.amount ?? ""),
	String(e.user?.payinCount ?? ""),
	String(e.user?.daysSinceRegistration ?? ""),
	String(e.user?.totalPayinAmount ?? "")
].join("|");
function hH() {
	let { bonuses: e, user: t, initialAmount: n, uiBonuses: r } = f(wN), i = _(() => JI(r ? e : void 0), [e, r]), a = _(() => wL(n), [n]), o = _(() => ({
		payinCount: t?.payinCount,
		daysSinceRegistration: t?.daysSinceRegistration,
		totalPayinAmount: t?.totalPayinAmount
	}), [
		t?.daysSinceRegistration,
		t?.payinCount,
		t?.totalPayinAmount
	]), s = d((e) => ({
		amount: e?.amount ?? a,
		user: e?.user ?? o
	}), [a, o]), c = y(/* @__PURE__ */ new Map());
	p(() => {
		c.current = /* @__PURE__ */ new Map();
	}, [i, s]);
	let l = d((e, t) => {
		let n = s(t), r = [pH(e), mH(n)].join("::"), a = c.current.get(r);
		if (a) return a;
		let o = XI(i, e, n), l = {
			availability: o,
			availableBonuses: o.filter((e) => e.status === "available").map((e) => e.bonus)
		};
		return c.current.set(r, l), l;
	}, [i, s]), u = d((e, t) => l(e, t).availability, [l]), m = d((e, t) => l(e, t).availableBonuses, [l]);
	return {
		bonuses: i,
		getBonusAvailabilityForPaymentType: u,
		getAvailableBonusesForPaymentType: m,
		getBonusCountForPaymentType: d((e, t) => m(e, t).length, [m])
	};
}
//#endregion
//#region src/components/icons/PresentIcon.tsx
var gH = {
	xxs: "h-2.5 w-2.5 shrink-0",
	xs: "h-3 w-3 shrink-0",
	sm: "h-3.5 w-3.5 shrink-0"
};
function _H({ size: e = "sm" }) {
	return /* @__PURE__ */ C("svg", {
		viewBox: "0 0 32 32",
		fill: "currentColor",
		className: gH[e],
		"aria-hidden": "true",
		children: /* @__PURE__ */ C("path", { d: "M32 10.015c0-1.104-0.895-2-2-2h-3.414c0.884-0.872 1.449-2.014 1.449-3.421 0-1.732-0.995-3.615-3.788-3.615-3.675 0-6.745 3.913-8.188 6.106-1.444-2.193-4.607-6.106-8.282-6.106-2.793 0-3.788 1.882-3.788 3.614 0 1.407 0.581 2.55 1.482 3.421h-3.472c-1.105 0-2 0.896-2 2v5.986h2.018v13.017c0 1.105 0.895 2 2 2h23.99c1.105 0 2-0.895 2-2v-13.018h1.992v-5.986zM24.247 2.981c1.236 0 1.788 0.52 1.788 1.615 0 2.221-2.479 3.42-4.811 3.42h-3.386c1.421-2.111 3.922-5.035 6.409-5.035zM7.778 2.981c2.487 0 5.083 2.924 6.504 5.034h-3.386c-2.332 0-4.905-1.229-4.905-3.451 0-1.095 0.551-1.583 1.788-1.583zM30 14.002h-13v-3.986h13v3.986zM2 10.015h13v3.986h-13zM4.018 16.002h10.982v13.018h-10.982zM28.008 29.020h-11.008v-13.017h11.008v13.017z" })
	});
}
//#endregion
//#region src/components/BonusCountBadge.tsx
var vH = (e) => typeof e == "number" && Number.isFinite(e);
function yH({ count: e, domSlug: t }) {
	let n = NN();
	if (!vH(e) || e <= 0) return null;
	let r = t ? n.id("bonus-count", { slug: t }) : void 0, i = t ? n.id("bonus-count-value", { slug: t }) : void 0;
	return /* @__PURE__ */ w("span", {
		id: r,
		className: [n.className("bonus-count", t ? { slug: t } : void 0), "inline-flex items-center gap-1 whitespace-nowrap"].join(" "),
		"data-testid": "cashier-bonus-count",
		children: [/* @__PURE__ */ C(_H, { size: "xs" }), /* @__PURE__ */ C("span", {
			id: i,
			className: n.className("bonus-count-value", t ? { slug: t } : void 0),
			"data-testid": "cashier-bonus-count-value",
			children: e
		})]
	});
}
//#endregion
//#region src/ui/PaymentTypesList.tsx
function bH({ paymentTypes: e, onSelect: t, listStyle: n, compact: r, stacked: i = !1, showMeta: a = !1, selectable: o = !1, selectedPaymentType: s, renderActions: c, isPaymentTypeDisabled: l, preserveDisabledSelection: u = !1, itemVariant: d = "neutral", itemAppearance: f = "solid", includeItemDataTheme: p = !0, domScope: m, animateItems: h = !1 }) {
	let g = NN(), { getBonusCountForPaymentType: v } = hH(), y = n, b = m ? g.token(m, "list") : null, x = b ? g.id("payment-types-list", { slug: b }) : void 0, S = g.className("payment-types-list", b ? { slug: b } : void 0), w = _(() => HL(e, s), [e, s]), T = { staggerMode: "compressed-tail" }, E = _(() => e.map((e) => {
		let t = e.accountId ? `${e.accountId}-${e.name}` : e.name, n = v(e);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: n,
			label: n > 0 ? /* @__PURE__ */ C(yH, {
				count: n,
				domSlug: t
			}) : null
		};
	}), [v, e]);
	return /* @__PURE__ */ C(fH, {
		id: x,
		className: J(S, "w-full"),
		contentClassName: h ? kz : void 0,
		contentStyle: h ? Wz(T) : void 0,
		listStyle: y,
		compact: r,
		stacked: i,
		children: E.map(({ paymentTypeKey: e, paymentType: n, count: i, label: s }, m) => {
			let { name: g, logo: _, accountId: v, limits: b, fee: x } = n, S = v ? `${v}-${g}` : g, D = !!l?.(n), O = o && !D, k = o && w === n && (!D || u), A = c?.(n);
			return /* @__PURE__ */ C(dH, {
				domSlug: S,
				name: g,
				logo: _,
				limits: b,
				fee: x,
				listStyle: y,
				compact: r,
				showMeta: a,
				title: RL(n) ?? void 0,
				bonusLabel: s,
				hasAvailableBonuses: i > 0,
				onSelect: t,
				isSelected: k,
				isDisabled: D,
				hoverMode: O ? "none" : void 0,
				includeDataTheme: p,
				actions: A,
				variant: d,
				appearance: f,
				animationClassName: h ? Az : void 0,
				animationStyle: h ? Uz(m, E.length, "forward", T) : void 0
			}, e);
		})
	});
}
//#endregion
//#region src/hooks/useHotkey.ts
var xH = new Set(["Backspace"]), SH = (e) => (t) => {
	let { key: n } = t;
	return xH.has(n) ? !0 : e === "numeric" ? jc.test(n) : e === "decimal" ? n === "." || n === "," ? !0 : jc.test(n) : e === "alphanumeric" ? Mc.test(n) : e === "alphabetic" ? Nc.test(n) : n.length === 1;
}, CH = (e, t) => e instanceof HTMLElement ? !!(t?.current && e === t.current || e.isContentEditable || e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement || e instanceof HTMLSelectElement) : !1, wH = ({ inputRef: e, onType: t, shouldHandleKey: n, isEventTargetInteractive: r, inputType: i = "text", onBack: a, backKey: o }) => {
	let s = e !== void 0 && t !== void 0, c = o ?? "Escape", l = _(() => {
		if (s) return n || SH(i);
	}, [
		s,
		i,
		n
	]);
	p(() => {
		if (!s && !a) return;
		let n = (n) => {
			let i = e?.current ?? null, o = r ? r(n.target) : CH(n.target, e);
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
}, TH = () => {
	let e = mF(), { translateKey: t } = CI(), { uiAccountDelete: n, merchantId: r, userId: i, sessionId: a, method: o, currency: s, onAccountDeleted: c } = f(wN), { selectedPaymentType: l, clearPaymentSelection: u } = cH(), p = kI(), { openActionConfirmation: m, actionConfirmationModal: h } = QM({
		presentation: "drawer",
		renderActions: ({ confirmLabel: e, confirmVariant: t, isSubmitting: n, onConfirm: r }) => /* @__PURE__ */ C(un, {
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
			portalContainer: p,
			actionsPlacement: "footer",
			renderFooter: (e) => /* @__PURE__ */ C(qN, {
				placement: "bottom",
				items: [e]
			})
		}
	});
	return {
		requestAccountDelete: d((d) => {
			if (!n) return;
			let f = d.accountId;
			if (!f) return;
			let p = t(d.name), h = t("account.delete.title"), g = t("account.delete.description"), _ = t("cta.delete"), v = t("account.delete.error");
			m({
				title: h,
				description: NI(g, "name", p),
				confirmLabel: _,
				confirmVariant: "danger",
				errorMessage: v,
				onConfirm: async () => {
					if (!r || !i || !a) throw Error("Missing required account context.");
					await gI({
						query: {
							merchantId: r,
							userId: i,
							sessionId: a,
							accountId: f
						},
						parseAs: "text"
					}), (l === d.name || l === f) && u(), c && c(d), await e.invalidateQueries({ queryKey: UL({
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
			m,
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
		actionConfirmationModal: h
	};
};
//#endregion
//#region src/utils/interactivePrompt.tsx
function EH(e, t, n) {
	if (!t) return;
	let r = e(t);
	if (!(!r || r === t)) return Object.entries(n ?? {}).reduce((e, [t, n]) => NI(e, t, n), r);
}
function DH(e, t, n, r) {
	return EH(e, t, r) ?? n;
}
function OH(e, t, n) {
	return EH(e, t, n);
}
var kH = (e) => /* @__PURE__ */ C(Wu, { className: e }), AH = ({ translateKey: e }) => ({
	legacyTitle: e("cta.choose_payment_type"),
	titleKey: "cta.interactive_prompt.choose_payment_type.title",
	bodyKey: "cta.interactive_prompt.choose_payment_type.desc",
	icon: kH()
}), jH = ({ translateKey: e }) => ({
	legacyTitle: e("payment.enter_details"),
	titleKey: "payment.interactive_prompt.enter_details",
	bodyKey: "interactive_prompt.payment_details.form.body",
	icon: /* @__PURE__ */ C(nd, {})
}), MH = (e) => e.toFixed(2).replace(/\.?0+$/, ""), NH = "[data-pc-scroll-obstruction=\"top\"]", PH = "[data-pc-scroll-obstruction=\"bottom\"]", FH = ["[data-pc-scroll-obstruction-extent=\"true\"]", "[data-slot=\"interactive-prompt-tail\"]"].join(","), IH = 4, LH = 8, RH = 64, zH = 150, BH = 2, VH = 320, HH = 520, UH = 1.2, WH = .5, GH = /* @__PURE__ */ new WeakMap(), KH = /* @__PURE__ */ new WeakSet(), qH = (e) => typeof window < "u" && e === window, JH = (e) => {
	if (qH(e)) return {
		top: 0,
		bottom: window.innerHeight
	};
	let t = e.getBoundingClientRect();
	return {
		top: t.top,
		bottom: t.bottom
	};
}, YH = (e) => qH(e) ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0 : e.scrollTop, XH = (e) => {
	if (qH(e)) {
		let e = document.documentElement, t = document.body;
		return Math.max(0, Math.max(e.scrollHeight, t.scrollHeight) - window.innerHeight);
	}
	return Math.max(0, e.scrollHeight - e.clientHeight);
}, ZH = (e) => qH(e) ? document.documentElement : e, QH = (e) => {
	let t = ZH(e), n = GH.get(t);
	n?.element && KH.delete(n.element), GH.delete(t);
}, $H = (e) => {
	let t = ZH(e), n = GH.get(t);
	n && (n.frameId !== void 0 && window.cancelAnimationFrame(n.frameId), QH(e));
}, eU = () => typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, tU = (e, t, n) => Math.min(n, Math.max(t, e)), nU = (e) => -(Math.cos(Math.PI * e) - 1) / 2, rU = (e) => tU(Math.abs(e) * UH, VH, HH), iU = (e) => {
	let t = window.getComputedStyle(e);
	return !(t.display === "none" || t.visibility === "hidden");
}, aU = (e) => {
	let t = e.getBoundingClientRect(), n = t.top, r = t.right, i = t.bottom, a = t.left, o = Array.from(e.querySelectorAll(FH));
	for (let e of o) {
		if (!iU(e)) continue;
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
}, oU = (e, t, n, r) => iU(e) ? t.height > 0 && t.width > 0 && t.bottom > n && t.top < r : !1, sU = (e) => {
	let t = JH(e), n = t.top, r = Array.from(document.querySelectorAll(NH)).map((e) => ({
		element: e,
		rect: aU(e)
	})).filter(({ element: e, rect: n }) => oU(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.max(n, e.bottom);
	return n + IH;
}, cU = (e) => {
	let t = JH(e), n = t.bottom, r = Array.from(document.querySelectorAll(PH)).map((e) => ({
		element: e,
		rect: aU(e)
	})).filter(({ element: e, rect: n }) => oU(e, n, t.top, t.bottom));
	for (let { rect: e } of r) n = Math.min(n, e.top);
	return n - IH;
}, lU = (e, t = "start") => {
	let n = Pj(e) ?? window, r = sU(n), i = cU(n), a = e.getBoundingClientRect(), o = YH(n), s = Math.max(a.height, e.scrollHeight), c = a.top + s, l = o + a.top - r, u = o + c - i, d = t === "start" ? l : t === "nearest-fit" ? s > i - r ? Math.abs(a.top - r) > LH ? l : null : a.top < r ? l : c > i ? u : null : Math.abs(a.top - r) > LH || c > i ? l : null;
	return d === null ? null : {
		container: n,
		top: Math.max(0, Math.round(d))
	};
}, uU = (e, t, n = "auto") => {
	let r = YH(e);
	if (!(Math.abs(t - r) <= WH)) {
		if (qH(e)) {
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
}, dU = (e, t) => qH(e) ? t : Math.min(t, XH(e)), fU = (e, t, n) => {
	if (typeof window.requestAnimationFrame != "function") {
		t(Date.now());
		return;
	}
	let r = ZH(e), i = {
		frameId: window.requestAnimationFrame(t),
		element: n
	};
	GH.set(r, i);
}, pU = (e) => {
	if (typeof window > "u") return;
	let t = Pj(e) ?? window, n = null, r = null, i = null, a = VH, o = 0;
	if ($H(t), typeof window.requestAnimationFrame != "function") {
		let t = lU(e, "nearest-fit");
		t && uU(t.container, t.top, eU() ? "auto" : "smooth");
		return;
	}
	let s = (c) => {
		if (!e.isConnected) {
			QH(t);
			return;
		}
		n ??= c, o += 1;
		let l = o >= BH, u = c - n >= zH;
		if (eU()) {
			if (l && u) {
				let n = lU(e, "nearest-fit");
				QH(t), n && uU(n.container, dU(n.container, n.top), "auto");
				return;
			}
			fU(t, s, e);
			return;
		}
		if (l) {
			let n = lU(e, "nearest-fit");
			if (n) {
				let e = dU(n.container, n.top);
				r ??= c, i ??= YH(n.container), a = rU(e - i);
				let o = tU((c - r) / a, 0, 1), s = Math.round(i + (e - i) * nU(o));
				if (uU(n.container, s, "auto"), u && o >= 1) {
					uU(n.container, e, "auto"), QH(t);
					return;
				}
			} else if (u) {
				QH(t);
				return;
			}
		}
		fU(t, s, e);
	};
	KH.add(e), fU(t, s, e);
};
function mU(e) {
	typeof window > "u" || pU(e);
}
function hU(e) {
	if (typeof window > "u" || !e.isConnected || KH.has(e)) return !1;
	let t = lU(e, "nearest-fit");
	return t ? Math.abs(t.top - YH(t.container)) > RH : !1;
}
//#endregion
//#region src/ui/PaymentTypesAccordion.tsx
function gU({ paymentTypes: e, selectedPaymentType: t, onSelect: n, renderPanel: r, hasPanel: i, showMeta: a = !1, compact: o = !1, renderActions: s, isPaymentTypeDisabled: c, preserveDisabledSelection: l = !1, itemVariant: u = "neutral", itemAppearance: d = "solid", includeItemDataTheme: f = !0, domScope: p, animateItems: m = !1 }) {
	let h = NN(), { getBonusCountForPaymentType: g } = hH(), v = p ? h.token(p, "accordion") : null, y = v ? h.id("payment-types-accordion", { slug: v }) : void 0, b = h.className("payment-types-accordion", v ? { slug: v } : void 0), x = _(() => HL(e, t ?? null), [e, t]), S = { staggerMode: "compressed-tail" }, T = _(() => e.map((e) => {
		let t = e.accountId ? `${e.accountId}-${e.name}` : e.name, n = g(e);
		return {
			paymentTypeKey: t,
			paymentType: e,
			count: n,
			label: n > 0 ? /* @__PURE__ */ C(yH, {
				count: n,
				domSlug: t
			}) : null
		};
	}), [g, e]);
	return /* @__PURE__ */ C("div", {
		id: y,
		className: J(b, "w-full"),
		children: /* @__PURE__ */ C("div", {
			className: J("grid grid-cols-1 gap-2", m && "pc-enter-sweep"),
			style: m ? Wz(S) : void 0,
			children: T.map(({ paymentTypeKey: e, paymentType: t, count: p, label: g }, _) => {
				let { name: v, logo: y, accountId: b, limits: E, fee: D } = t, O = b ? `${b}-${v}` : v, k = h.token(O, "accordion-item"), A = h.id("payment-types-accordion-header", { slug: k }), j = h.id("payment-types-accordion-panel", { slug: k }), M = !!c?.(t), N = x === t && (!M || l), P = i?.(t) ?? !0, F = N && !M && P, I = RL(t), ee = s?.(t), L = f ? sn(u) : void 0, R = m ? Uz(_, T.length, "forward", S) : void 0, z = (e) => e.parentElement, B = (e) => {
					let t = z(e);
					t && mU(t);
				}, V = (e) => {
					if (M) return;
					n?.(v);
					let t = z(e), r = !!(F && t && hU(t));
					(!F || r) && B(e);
				};
				return /* @__PURE__ */ w("div", {
					"data-theme": L,
					"data-selected": N ? "true" : void 0,
					style: R,
					className: J("rounded-[var(--pc-radius-xl)]", F || N ? "overflow-visible" : "overflow-hidden", "[background:var(--pc-color-surface)]", N && [
						"[outline-style:solid]",
						"outline-3 outline-[var(--pc-color-secondary)]",
						"outline-offset-[2.5px]"
					], m && "pc-enter-sweep-item"),
					children: [/* @__PURE__ */ C("div", {
						id: A,
						role: "button",
						tabIndex: M ? -1 : 0,
						"aria-disabled": M || void 0,
						"aria-expanded": P ? F : void 0,
						"aria-controls": P ? j : void 0,
						onClick: (e) => {
							V(e.currentTarget);
						},
						onKeyDown: (e) => {
							M || e.key !== "Enter" && e.key !== " " || (e.preventDefault(), V(e.currentTarget));
						},
						className: J("group focus-visible:outline-none", "focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-accent)]", "focus-visible:ring-offset-2", "focus-visible:ring-offset-transparent", !M && "cursor-pointer"),
						children: /* @__PURE__ */ C(dH, {
							domSlug: O,
							name: v,
							logo: y,
							limits: E,
							fee: D,
							listStyle: _N.LIST,
							compact: o,
							showMeta: a,
							title: I ?? void 0,
							bonusLabel: g,
							hasAvailableBonuses: p > 0,
							isSelected: N,
							showSelectedIndicator: !1,
							isDisabled: M,
							interactive: !1,
							hoverMode: "none",
							includeDataTheme: !1,
							actions: ee,
							variant: u,
							appearance: d
						})
					}), P && /* @__PURE__ */ C("div", {
						id: j,
						role: "region",
						"aria-labelledby": A,
						"aria-hidden": !F,
						className: J("grid", F ? "overflow-visible" : "overflow-hidden", "transition-[grid-template-rows,opacity] duration-150 ease-out", F ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"),
						children: /* @__PURE__ */ C("div", {
							className: "min-h-0 min-w-0",
							children: F ? /* @__PURE__ */ C("div", {
								className: "min-w-0 border-t border-[var(--pc-color-border-weakest)] px-2 py-3.5 @md:px-3.5 @md:py-4",
								children: r(t)
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
var _U = ["py-4 text-center leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:py-2"].join(" "), vU = "flex items-center gap-2", yU = ["text-2xl font-medium tracking-tight leading-none text-[var(--pc-color-text)]", "group-data-[stuck=true]:text-lg @md:group-data-[stuck=true]:text-xl"].join(" "), bU = ["text-sm @xs:text-base @sm:text-lg mb-4 leading-none text-[var(--pc-color-text-muted)]", "group-data-[stuck=true]:text-base"].join(" "), xU = "flex flex-col gap-1", SU = "flex items-center justify-center", CU = {
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
}, wU = {
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
}, TU = {
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
}, EU = (e) => typeof e == "string" || typeof e == "number";
function DU({ title: e, subtitle: t, leading: n, trailing: r, titleMeta: i, variant: a = "default", layout: o = "stacked", stuckLayout: s, className: c, layoutClassName: l, titleWrapperClassName: u, titleClassName: d, subtitleClassName: f, leadingClassName: p, trailingClassName: m, titleMetaClassName: h }) {
	let g = !!(e || t || i);
	if (!(n || r || g)) return null;
	let _ = CU[o], v = s ? TU[s] : null, y = wU[a], b = typeof t == "string" || typeof t == "number", x = EU(e) ? /* @__PURE__ */ C(lH, { children: e }) : e, S = b ? /* @__PURE__ */ C(lH, { children: t }) : t, T = Q(_U, _.container, y.container, v?.container, c), E = Q(vU, _.layout, y.layout, v?.layout, l), D = Q(xU, _.titleWrapper, y.titleWrapper, v?.titleWrapper, u), O = Q(yU, y.title, d), k = Q(SU, y.leading, p), A = Q("min-w-0", y.trailing, m), j = Q(bU, y.subtitle, f), M = Q(y.titleMeta, h);
	return /* @__PURE__ */ C("div", {
		className: T,
		children: /* @__PURE__ */ w("div", {
			className: E,
			children: [
				n && /* @__PURE__ */ C("div", {
					className: k,
					children: n
				}),
				g && /* @__PURE__ */ w("div", {
					className: D,
					children: [
						e && /* @__PURE__ */ C("h2", {
							className: O,
							children: x
						}),
						i ? M ? /* @__PURE__ */ C("div", {
							className: M,
							children: i
						}) : i : null,
						t ? C(b ? "p" : "div", {
							className: j,
							children: S
						}) : null
					]
				}),
				r && /* @__PURE__ */ C("div", {
					className: A,
					children: r
				})
			]
		})
	});
}
//#endregion
//#region src/components/InteractivePromptHeader.tsx
function OU({ content: e, forceVisible: t = !1, className: n }) {
	let { uiInteractivePrompts: r, uiPaymentMethodSwitcher: i, uiUserBalance: a, debug: o } = f(wN), { translateKey: s } = CI(), c = _(() => (e?.actions ?? []).flatMap((e) => {
		let t = o && e.labelKey ? e.labelKey : DH(s, e.labelKey, e.legacyLabel);
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
	let l = DH(s, e.titleKey, e.legacyTitle, e.titleValues) ?? e.legacyTitle;
	e.preferLegacyTitle && e.legacyTitle && (l = e.legacyTitle), o && e.titleKey && (l = e.titleKey);
	let u = o && e.bodyKey ? e.bodyKey : OH(s, e.bodyKey, e.bodyValues) ?? e.legacyBody;
	return e.preferLegacyBody && e.legacyBody && (u = e.legacyBody), /* @__PURE__ */ C(MM, {
		className: J(!i && !a && "pt-1.5 @sm:pt-2", n),
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
var kU = (e, t) => {
	let n = Object.keys(e), r = Object.keys(t);
	return n.length === r.length ? n.every((n) => e[n] === t[n]) : !1;
}, AU = (e, t) => !!e && e?.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount, jU = (e, t) => e === t ? !0 : !e || !t ? !1 : e.paymentTypeName === t.paymentTypeName && e.method === t.method && e.amount === t.amount && e.hasHostedFields === t.hasHostedFields && kU(e.values, t.values), MU = (e, t, n) => AU(e, t) ? {
	...e,
	amount: n,
	values: {
		...e.values,
		amount: n
	}
} : e, NU = ["flex flex-col w-full bg-[var(--pc-color-surface)]"].join(" "), PU = ["relative z-30"].join(" "), FU = "sticky top-0 z-40 h-0 overflow-visible", IU = ["transition-transform duration-200 ease-out", "transform-gpu will-change-transform"].join(" "), LU = "w-full", RU = (e) => {
	if (!e || typeof window > "u") return window;
	let t = e.parentElement;
	for (; t;) {
		let e = window.getComputedStyle(t), n = `${e.overflow}${e.overflowY}${e.overflowX}`;
		if (/(auto|scroll|overlay)/.test(n)) return t;
		t = t.parentElement;
	}
	return window;
}, zU = (e) => typeof window < "u" && e === window, BU = (e) => {
	let [t, n] = b(null), [r, i] = b(null), [a, o] = b(1), s = d((e) => {
		n(e);
	}, []), c = d((e) => {
		i(e);
	}, []);
	return p(() => {
		if (!e || !t || !r || typeof window > "u") return;
		let n = RU(t), i = 0, a = () => {
			let e = t.getBoundingClientRect(), i = r.getBoundingClientRect(), a = 0;
			if (!zU(n)) {
				let e = n.getBoundingClientRect(), t = window.getComputedStyle(n).paddingTop, r = Number.parseFloat(t), i = Number.isNaN(r) ? 0 : r;
				a = e.top + i;
			}
			let s = Math.min(24, Math.max(8, i.height * .2)), c = a + s, l = a, u = c - l || 1, d = Math.min(1, Math.max(0, (e.top - l) / u));
			o((e) => Math.abs(e - d) < .002 ? e : d);
		}, s = () => {
			i && cancelAnimationFrame(i), i = requestAnimationFrame(a);
		};
		a(), zU(n) ? window.addEventListener("scroll", s, { passive: !0 }) : n.addEventListener("scroll", s, { passive: !0 }), window.addEventListener("resize", s, { passive: !0 });
		let c = null;
		return typeof ResizeObserver < "u" && (c = new ResizeObserver(() => {
			s();
		}), c.observe(r), zU(n) || c.observe(n)), () => {
			i && cancelAnimationFrame(i), zU(n) ? window.removeEventListener("scroll", s) : n.removeEventListener("scroll", s), window.removeEventListener("resize", s), c?.disconnect();
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
function VU({ sticky: e = !1, className: t, children: n }) {
	let { progress: r, setAnchorRef: i, setHeaderRef: a } = BU(e), o = r < 1, s = { transform: `translateY(-${(r * 100).toFixed(2)}%)` };
	return n ? e ? /* @__PURE__ */ w(S, { children: [/* @__PURE__ */ C("div", {
		ref: a,
		"aria-hidden": o ? "true" : void 0,
		className: J(NU, "group", o ? "invisible" : "", t),
		children: n
	}), /* @__PURE__ */ C("div", {
		ref: i,
		className: FU,
		children: /* @__PURE__ */ C("div", {
			"data-stuck": o ? "true" : void 0,
			"data-pc-scroll-obstruction": o ? "top" : void 0,
			"aria-hidden": o ? void 0 : "true",
			style: s,
			className: J(NU, "group", IU, o ? PU : "", o ? "pointer-events-auto" : "pointer-events-none", o ? "overflow-visible" : "invisible", t),
			children: /* @__PURE__ */ w("div", {
				className: "relative bg-[var(--pc-color-surface)]",
				children: [/* @__PURE__ */ C("div", {
					className: LU,
					children: n
				}), /* @__PURE__ */ C("div", {
					"aria-hidden": "true",
					"data-slot": "sticky-header-stack-fade",
					"data-pc-scroll-obstruction": "top",
					style: LN,
					className: "pointer-events-none absolute inset-x-0 top-full"
				})]
			})
		})
	})] }) : /* @__PURE__ */ C("div", {
		className: J(NU, "group", t),
		children: n
	}) : null;
}
//#endregion
//#region src/ui/SubContainer.tsx
function HU({ id: e, className: t, contentId: n, contentClassName: r, title: i, subtitle: a, header: o, stickyHeader: s = !1, fitted: c, fullHeight: l, children: u }) {
	let { translateKey: d } = CI(), f = typeof i == "string" ? d(i) : i, p = typeof a == "string" ? d(a) : a, m = o ?? (i || a ? /* @__PURE__ */ C(DU, {
		title: f,
		subtitle: p
	}) : null);
	return /* @__PURE__ */ w("div", {
		id: e,
		className: J([
			"flex flex-col",
			l && "min-h-0 flex-1",
			t
		]),
		children: [m && (s ? /* @__PURE__ */ C(VU, {
			sticky: !0,
			children: m
		}) : m), /* @__PURE__ */ C("div", {
			id: n,
			className: J([
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
var UU = [
	"h-12 w-12 @md:h-16 @md:w-16",
	"group-data-[stuck=true]:h-6 group-data-[stuck=true]:w-6",
	"@md:group-data-[stuck=true]:h-8 @md:group-data-[stuck=true]:w-8",
	"inline-flex items-center justify-center"
].join(" "), WU = "h-full w-full text-inherit", GU = ["h-[70%] w-[70%]", "text-[var(--pc-color-surface)]"].join(" "), KU = [
	"group-data-[stuck=true]:flex-row",
	"group-data-[stuck=true]:items-center",
	"group-data-[stuck=true]:flex-wrap",
	"group-data-[stuck=true]:justify-between",
	"group-data-[stuck=true]:gap-3",
	"group-data-[stuck=true]:flex-1",
	"group-data-[stuck=true]:min-w-0"
].join(" "), qU = [
	"group-data-[stuck=true]:mt-0",
	"group-data-[stuck=true]:mb-0",
	"group-data-[stuck=true]:min-w-0"
].join(" ");
function JU() {
	return /* @__PURE__ */ C(Ft, { className: GU });
}
function YU({ title: e, subtitle: t, theme: n, leading: r }) {
	return /* @__PURE__ */ C(DU, {
		className: "px-1.5 @sm:px-3 group-data-[stuck=true]:pt-2",
		stuckLayout: "row",
		titleWrapperClassName: KU,
		leading: r ? /* @__PURE__ */ C("span", {
			"data-theme": n,
			className: "inline-flex items-center justify-center",
			children: /* @__PURE__ */ C("span", {
				className: UU,
				children: r
			})
		}) : void 0,
		title: e,
		titleClassName: "group-data-[stuck=true]:w-auto group-data-[stuck=true]:flex-none",
		subtitle: t,
		subtitleClassName: qU
	});
}
//#endregion
//#region src/ui/StatusText.tsx
function XU({ text: e, subtitle: t, theme: n, withLoader: r = !1 }) {
	let { translateKey: i } = CI(), a = r ? /* @__PURE__ */ C(JU, {}) : void 0;
	return !t && !n && !a ? /* @__PURE__ */ C(HU, { title: e }) : /* @__PURE__ */ C(HU, { header: /* @__PURE__ */ C(YU, {
		title: i(e),
		subtitle: t ? i(t) : void 0,
		theme: n,
		leading: a
	}) });
}
//#endregion
//#region src/hooks/useBackNavigation.ts
function ZU({ defaultRoute: e, backKey: t = "Backspace", enableHotkey: n = !0, useHistory: r = !0, requireCanGoBackForHotkey: i = !1, replace: a = !1, resetHistory: o = !1 }) {
	let s = U(), c = H().history, l = r && !!c?.canGoBack(), u = d(() => {
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
	return wH({
		onBack: n && (!i || l) ? u : void 0,
		backKey: t
	}), _(() => ({
		canGoBack: l,
		handleBack: u
	}), [l, u]);
}
//#endregion
export { bz as $, hN as $n, ZI as $t, $V as A, xP as An, un as Ar, HL as At, dB as B, QN as Bn, L as Br, yL as Bt, dH as C, vP as Cn, tl as Cr, YL as Ct, nH as D, CP as Dn, Ac as Dr, qL as Dt, sH as E, wP as En, kc as Er, JL as Et, JV as F, uP as Fn, H as Fr, EL as Ft, Oz as G, NN as Gn, dL as Gt, Ez as H, IN as Hn, M as Hr, sL as Ht, QV as I, oP as In, V as Ir, CL as It, Hz as J, bN as Jn, eL as Jt, Dz as K, wN as Kn, mL as Kt, BV as L, sP as Ln, ee as Lr, wL as Lt, KV as M, fP as Mn, Ft as Mr, kL as Mt, XV as N, dP as Nn, J as Nr, OL as Nt, eH as O, _P as On, Sc as Or, GL as Ot, YV as P, lP as Pn, U as Pr, DL as Pt, xz as Q, yN as Qn, JI as Qt, tV as R, tP as Rn, B as Rr, SL as Rt, fH as S, zP as Sn, nl as Sr, QL as St, cH as T, TP as Tn, el as Tr, ZL as Tt, Az as U, LN as Un, I as Ur, uL as Ut, Jz as V, ZN as Vn, R as Vr, vL as Vt, kz as W, MN as Wn, fL as Wt, Wz as X, _N as Xn, QI as Xt, Uz as Y, vN as Yn, tL as Yt, yz as Z, gN as Zn, YI as Zt, TH as _, qP as _n, Yu as _r, KR as _t, JU as a, wI as an, pA as ar, rz as at, yH as b, IP as bn, pl as br, zR as bt, AU as c, pI as cn, ok as cr, $R as ct, DU as d, AF as dn, od as dr, MR as dt, FI as en, dN as er, Sz as et, gU as f, kF as fn, ad as fr, jR as ft, MH as g, $P as gn, Zu as gr, BR as gt, jH as h, uF as hn, Qu as hr, VR as ht, YU as i, SI as in, MM as ir, az as it, qV as j, RP as jn, sn as jr, ML as jt, ZV as k, DP as kn, qr as kr, RL as kt, MU as l, fI as ln, Kv as lr, YR as lt, kH as m, mF as mn, td as mr, HR as mt, XU as n, MI as nn, qM as nr, lz as nt, HU as o, CI as on, Wk as or, iz as ot, AH as p, hF as pn, rd as pr, UR as pt, Tz as q, xN as qn, $I as qt, WU as r, EI as rn, BM as rr, uz as rt, jU as s, mI as sn, sk as sr, ez as st, ZU as t, NI as tn, rN as tr, Cz as tt, OU as u, rI as un, xf as ur, XR as ut, wH as v, KP as vn, qu as vr, RR as vt, lH as w, EP as wn, rl as wr, XL as wt, hH as x, LP as xn, fl as xr, lR as xt, bH as y, VP as yn, Hu as yr, FR as yt, pB as z, XN as zn, z as zr, bL as zt };
