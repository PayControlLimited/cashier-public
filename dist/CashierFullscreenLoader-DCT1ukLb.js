import { Fi as e, Ii as t, Pi as n, Zt as r, ln as i, ri as a } from "./inlinePaymentSubmit-CmI1mVTq.js";
import * as o from "react";
import s, { useCallback as c, useDebugValue as l, useEffect as u, useLayoutEffect as d, useMemo as f, useRef as p, useState as m, useSyncExternalStore as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region ../../node_modules/@tanstack/react-router/dist/esm/utils.js
var v = o.use, y = o.useLayoutEffect;
function ee(e, t, n) {
	o.useEffect(() => {
		if (!e.current || n || typeof IntersectionObserver != "function") return () => t();
		let r = new IntersectionObserver((e) => {
			t(e.pop());
		}, { rootMargin: "100px" });
		return r.observe(e.current), () => {
			r.disconnect(), t();
		};
	}, [
		t,
		n,
		e
	]);
}
function te(e) {
	let t = o.useRef(null);
	return o.useImperativeHandle(e, () => t.current, []), t;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function b(e) {
	return e[e.length - 1];
}
function ne(e, t) {
	return typeof e == "function" ? e(t) : e;
}
var x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable;
function C(e) {
	for (let t in e) if (x.call(e, t)) return !0;
	return !1;
}
var w = () => Object.create(null), T = (e, t) => E(e, t, w);
function E(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = ie(e) && ie(i);
	if (!a && !(O(e) && O(i))) return i;
	let o = a ? e : D(e);
	if (!o) return i;
	let s = a ? i : D(i);
	if (!s) return i;
	let c = o.length, l = s.length, u = a ? Array(l) : n(), d = 0;
	for (let t = 0; t < l; t++) {
		let o = a ? t : s[t], l = e[o], f = i[o];
		if (l === f) {
			u[o] = l, (a ? t < c : x.call(e, o)) && d++;
			continue;
		}
		if (l === null || f === null || typeof l != "object" || typeof f != "object") {
			u[o] = f;
			continue;
		}
		let p = E(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function D(e) {
	let t = Object.keys(e);
	if (t.length !== Object.getOwnPropertyNames(e).length) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	for (let r of n) {
		if (!S.call(e, r)) return !1;
		t.push(r);
	}
	return t;
}
function O(e) {
	if (!re(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!re(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function re(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function ie(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function k(e, t, n) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0, i = e.length; r < i; r++) if (!k(e[r], t[r], n)) return !1;
		return !0;
	}
	if (O(e) && O(t)) {
		let r = n?.ignoreUndefined ?? !0;
		if (n?.partial) {
			for (let i in t) if ((!r || t[i] !== void 0) && !k(e[i], t[i], n)) return !1;
			return !0;
		}
		let i = 0;
		if (!r) i = Object.keys(e).length;
		else for (let t in e) e[t] !== void 0 && i++;
		let a = 0;
		for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !k(e[o], t[o], n))) return !1;
		return i === a;
	}
	return !1;
}
function ae(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function oe(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var se = /[\x00-\x1f\x7f"<>`{}]/g;
function ce(e) {
	return e.replace(se, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
}
function le(e) {
	let t;
	try {
		t = decodeURI(e);
	} catch {
		t = e.replaceAll(/%[0-9A-F]{2}/gi, (e) => {
			try {
				return decodeURI(e);
			} catch {
				return e;
			}
		});
	}
	return ce(t);
}
var ue = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
function de(e, t) {
	if (!e) return !1;
	try {
		let n = new URL(e);
		return !t.has(n.protocol);
	} catch {
		return !1;
	}
}
function fe(e) {
	if (!e || !/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
		path: e,
		handledProtocolRelativeURL: !1
	};
	let t = /%25|%5C/gi, n = 0, r = "", i;
	for (; (i = t.exec(e)) !== null;) r += le(e.slice(n, i.index)) + i[0], n = t.lastIndex;
	r += le(n ? e.slice(n) : e);
	let a = !1;
	return r.startsWith("//") && (a = !0, r = "/" + r.replace(/^\/+/, "")), {
		path: r,
		handledProtocolRelativeURL: a
	};
}
function pe(e) {
	return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function me(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/invariant.js
function A() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function j(e) {
	let t = /* @__PURE__ */ new Map(), n, r, i = (e) => {
		e.next && (e.prev ? (e.prev.next = e.next, e.next.prev = e.prev, e.next = void 0, r && (r.next = e, e.prev = r)) : (e.next.prev = void 0, n = e.next, e.next = void 0, r && (e.prev = r, r.next = e)), r = e);
	};
	return {
		get(e) {
			let n = t.get(e);
			if (n) return i(n), n.value;
		},
		set(a, o) {
			if (t.size >= e && n) {
				let e = n;
				t.delete(e.key), e.next && (n = e.next, e.next.prev = void 0), e === r && (r = void 0);
			}
			let s = t.get(a);
			if (s) s.value = o, i(s);
			else {
				let e = {
					key: a,
					value: o,
					prev: r
				};
				r && (r.next = e), r = e, n ||= e, t.set(a, e);
			}
		},
		clear() {
			t.clear(), n = void 0, r = void 0;
		}
	};
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/new-process-route-tree.js
var M = 4, he = 5;
function ge(e, t, n = /* @__PURE__ */ new Uint16Array(6)) {
	let r = e.indexOf("/", t), i = r === -1 ? e.length : r, a = e.substring(t, i);
	if (!a || !a.includes("$")) return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
	if (a === "$") {
		let r = e.length;
		return n[0] = 2, n[1] = t, n[2] = t, n[3] = r, n[4] = r, n[5] = r, n;
	}
	if (a.charCodeAt(0) === 36) return n[0] = 1, n[1] = t, n[2] = t + 1, n[3] = i, n[4] = i, n[5] = i, n;
	let o = a.indexOf("{"), s;
	if (o !== -1 && o + 1 < a.length && (s = a.indexOf("}", o)) !== -1) {
		let r = a.charCodeAt(o + 1);
		if (r === 45) {
			if (o + 2 < a.length && a.charCodeAt(o + 2) === 36) {
				let e = o + 3, r = s;
				if (e < r) return n[0] = 3, n[1] = t + o, n[2] = t + e, n[3] = t + r, n[4] = t + s + 1, n[5] = i, n;
			}
		} else if (r === 36) {
			let r = o + 1, a = o + 2;
			return a === s ? (n[0] = 2, n[1] = t + o, n[2] = t + r, n[3] = t + a, n[4] = t + s + 1, n[5] = e.length, n) : (n[0] = 1, n[1] = t + o, n[2] = t + a, n[3] = t + s, n[4] = t + s + 1, n[5] = i, n);
		}
	}
	return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
}
function N(e, t, n, r, i, a, o, s) {
	s?.(n);
	let c = r;
	{
		let r = n.fullPath ?? n.from, s = n.options, l = r.length, u = s?.caseSensitive ?? e, d = s?.params?.parse ?? s?.parseParams;
		for (; c < l;) {
			let e = ge(r, c, t), n, s = c, l = e[5];
			c = l + 1, a++;
			let f = e[0];
			switch (f) {
				case 0: {
					let t = r.substring(e[2], e[3]), o = t, s;
					u ? s = i.static ??= /* @__PURE__ */ new Map() : (o = t.toLowerCase(), s = i.staticInsensitive ??= /* @__PURE__ */ new Map());
					let c = s.get(o);
					if (c) n = c;
					else {
						let e = F(r);
						e.parent = i, e.depth = a, n = e, s.set(o, e);
					}
					break;
				}
				case 1:
				case 3:
				case 2: {
					let t = r.substring(s, e[1]), c = r.substring(e[4], l), p = u && !!(t || c);
					u || (t = t.toLowerCase(), c = c.toLowerCase());
					let m = f === 1 ? i.dynamic : f === 3 ? i.optional : i.wildcard, h = f !== 2 && !d && m?.find((e) => !e.parse && e.caseSensitive === p && e.prefix === t && e.suffix === c);
					if (h) n = h;
					else {
						let e = I(f, r, p, t, c);
						n = e, e.parent = i, e.depth = a;
						let s;
						s = f === 1 ? i.dynamic ??= [] : f === 3 ? i.optional ??= [] : i.wildcard ??= [], s.push(e), s.length === 2 && o?.push(s);
					}
					break;
				}
			}
			i = n;
		}
		if (d && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf("/") + 1) === 95) {
			let e = F(r);
			e.kind = he, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let f = (n.path || !n.children) && !n.isRoot;
		if (f && r.endsWith("/")) {
			let e = F(r);
			e.kind = M, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = d ?? null, i.priority = s?.params?.priority ?? 0, f && !i.route && (i.route = n, i.fullPath = r);
	}
	if (n.children) for (let r of n.children) N(e, t, r, c, i, a, o, s);
}
function P(e, t) {
	if (e.parse && !t.parse) return -1;
	if (!e.parse && t.parse) return 1;
	if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
	if (e.prefix && t.prefix && e.prefix !== t.prefix) {
		if (e.prefix.startsWith(t.prefix)) return -1;
		if (t.prefix.startsWith(e.prefix)) return 1;
	}
	if (e.suffix && t.suffix && e.suffix !== t.suffix) {
		if (e.suffix.endsWith(t.suffix)) return -1;
		if (t.suffix.endsWith(e.suffix)) return 1;
	}
	return e.prefix && !t.prefix ? -1 : !e.prefix && t.prefix ? 1 : e.suffix && !t.suffix ? -1 : !e.suffix && t.suffix ? 1 : e.caseSensitive && !t.caseSensitive ? -1 : !e.caseSensitive && t.caseSensitive ? 1 : 0;
}
function F(e) {
	return {
		kind: 0,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath: e,
		parent: null,
		parse: null,
		priority: 0
	};
}
function I(e, t, n, r, i) {
	return {
		kind: e,
		depth: 0,
		pathless: null,
		index: null,
		static: null,
		staticInsensitive: null,
		dynamic: null,
		optional: null,
		wildcard: null,
		route: null,
		fullPath: t,
		parent: null,
		parse: null,
		priority: 0,
		caseSensitive: n,
		prefix: r,
		suffix: i
	};
}
function L(e, t) {
	let n = F("/"), r = /* @__PURE__ */ new Uint16Array(6), i = [];
	for (let t of e) N(!1, r, t, 1, n, 0, i);
	for (let e of i) e.sort(P);
	t.masksTree = n, t.flatCache = j(1e3);
}
function R(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n !== void 0) return n;
	let r = H(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function _e(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = F("/"), N(t, /* @__PURE__ */ new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), H(r, o, n);
}
function z(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = H(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = ye(a.route)), t.matchCache.set(r, a), a;
}
function B(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function V(e, t = !1, n) {
	let r = F(e.fullPath), i = /* @__PURE__ */ new Uint16Array(6), a = [], o = {}, s = {}, c = 0;
	N(t, i, e, 1, r, 0, a, (e) => {
		if (n?.(e, c), e.id in o) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			A();
		}
		if (o[e.id] = e, c !== 0 && e.path) {
			let t = B(e.fullPath);
			(!s[t] || e.fullPath.endsWith("/")) && (s[t] = e);
		}
		c++;
	});
	for (let e of a) e.sort(P);
	return {
		processedTree: {
			segmentTree: r,
			singleCache: j(1e3),
			matchCache: j(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: o,
		routesByPath: s
	};
}
function H(e, t, n = !1) {
	let r = e.split("/"), i = xe(e, r, t, n);
	if (!i) return null;
	let [a] = ve(e, r, i);
	return {
		route: i.node.route,
		rawParams: a
	};
}
function ve(e, t, n) {
	let r = be(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === M) break;
		if (u.kind === he) {
			l--, o--, c--;
			continue;
		}
		let d = t[o], f = c;
		if (d && (c += d.length), u.kind === 1) {
			i ??= n.node.fullPath.split("/");
			let e = i[l], t = u.prefix.length;
			if (e.charCodeAt(t) === 123) {
				let n = u.suffix.length, r = e.substring(t + 2, e.length - n - 1), i = d.substring(t, d.length - n);
				a[r] = decodeURIComponent(i);
			} else {
				let t = e.substring(1);
				a[t] = decodeURIComponent(d);
			}
		} else if (u.kind === 3) {
			if (n.skipped & 1 << s) {
				o--, c = f - 1;
				continue;
			}
			i ??= n.node.fullPath.split("/");
			let e = i[l], t = u.prefix.length, r = u.suffix.length, p = e.substring(t + 3, e.length - r - 1), m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
			m && (a[p] = decodeURIComponent(m));
		} else if (u.kind === 2) {
			let t = u, n = e.substring(f + t.prefix.length, e.length - t.suffix.length), r = decodeURIComponent(n);
			a["*"] = r, a._splat = r;
			break;
		}
	}
	return n.rawParams && Object.assign(a, n.rawParams), [a, {
		part: o,
		node: s,
		path: c,
		segment: l
	}];
}
function ye(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function be(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function xe(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !b(t), a = i && e !== "/", o = t.length - +!!i, s = [{
		node: n,
		index: 1,
		skipped: 0,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}], c = null, l = null;
	for (; s.length;) {
		let n = s.pop(), { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n, { extract: h, rawParams: g } = n;
		if (i.kind === 2 && i.route && !W(l, n)) continue;
		if (i.parse) {
			if (!Ce(e, t, n)) continue;
			g = n.rawParams, h = n.extract;
		}
		r && i.route && i.kind !== M && W(c, n) && (c = n);
		let _ = u === o;
		if (_ && (i.route && (!a || i.kind === M || i.kind === 2) && W(l, n) && (l = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
		let v = _ ? void 0 : t[u], y;
		if (_ && i.index) {
			let n = {
				node: i.index,
				index: u,
				skipped: d,
				statics: f,
				dynamics: p,
				optionals: m,
				extract: h,
				rawParams: g
			}, r = !0;
			if (i.index.parse && (Ce(e, t, n) || (r = !1)), r) {
				if (!p && !m && !d && Se(f, o)) return n;
				W(l, n) && (l = n);
			}
		}
		if (i.wildcard) for (let e = i.wildcard.length - 1; e >= 0; e--) {
			let n = i.wildcard[e], { prefix: r, suffix: a } = n;
			if (!(r && (_ || !(n.caseSensitive ? v : y ??= v.toLowerCase()).startsWith(r)))) {
				if (a) {
					if (_) continue;
					let e = t.slice(u).join("/"), i = e.slice(-a.length);
					if ((n.caseSensitive ? i : i.toLowerCase()) !== a || e.length - a.length < r.length) continue;
				}
				s.push({
					node: n,
					index: o,
					skipped: d,
					statics: f,
					dynamics: p,
					optionals: m,
					extract: h,
					rawParams: g
				});
			}
		}
		if (i.optional) {
			let e = d | 1 << i.depth + 1;
			for (let t = i.optional.length - 1; t >= 0; t--) {
				let n = i.optional[t];
				s.push({
					node: n,
					index: u,
					skipped: e,
					statics: f,
					dynamics: p,
					optionals: m,
					extract: h,
					rawParams: g
				});
			}
			if (!_) for (let e = i.optional.length - 1; e >= 0; e--) {
				let t = i.optional[e], { prefix: n, suffix: r } = t;
				if (n || r) {
					let e = t.caseSensitive ? v : y ??= v.toLowerCase();
					if (n && !e.startsWith(n) || r && e.indexOf(r, e.length - r.length) < n.length) continue;
				}
				s.push({
					node: t,
					index: u + 1,
					skipped: d,
					statics: f,
					dynamics: p,
					optionals: m + U(o, u),
					extract: h,
					rawParams: g
				});
			}
		}
		if (!_ && i.dynamic && v) for (let e = i.dynamic.length - 1; e >= 0; e--) {
			let t = i.dynamic[e], { prefix: n, suffix: r } = t;
			if (n || r) {
				let e = t.caseSensitive ? v : y ??= v.toLowerCase();
				if (n && !e.startsWith(n) || r && e.indexOf(r, e.length - r.length) < n.length) continue;
			}
			s.push({
				node: t,
				index: u + 1,
				skipped: d,
				statics: f,
				dynamics: p + U(o, u),
				optionals: m,
				extract: h,
				rawParams: g
			});
		}
		if (!_ && i.staticInsensitive) {
			let e = i.staticInsensitive.get(y ??= v.toLowerCase());
			e && s.push({
				node: e,
				index: u + 1,
				skipped: d,
				statics: f + U(o, u),
				dynamics: p,
				optionals: m,
				extract: h,
				rawParams: g
			});
		}
		if (!_ && i.static) {
			let e = i.static.get(v);
			e && s.push({
				node: e,
				index: u + 1,
				skipped: d,
				statics: f + U(o, u),
				dynamics: p,
				optionals: m,
				extract: h,
				rawParams: g
			});
		}
		if (i.pathless) for (let e = i.pathless.length - 1; e >= 0; e--) {
			let t = i.pathless[e];
			s.push({
				node: t,
				index: u,
				skipped: d,
				statics: f,
				dynamics: p,
				optionals: m,
				extract: h,
				rawParams: g
			});
		}
	}
	if (l) return l;
	if (r && c) {
		let n = c.index;
		for (let e = 0; e < c.index; e++) n += t[e].length;
		let r = n === e.length ? "/" : e.slice(n);
		return c.rawParams ??= Object.create(null), c.rawParams["**"] = decodeURIComponent(r), c;
	}
	return null;
}
function U(e, t) {
	return 2 ** (e - t - 1);
}
function Se(e, t) {
	return e === 2 ** (t - 1) - 1;
}
function Ce(e, t, n) {
	let r, i;
	try {
		[r, i] = ve(e, t, n);
	} catch {
		return null;
	}
	if (n.rawParams = r, n.extract = i, !n.node.parse) return !0;
	try {
		if (n.node.parse(r) === !1) return null;
	} catch {}
	return !0;
}
function W(e, t) {
	return !e || t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === M) > (e.node.kind === M) || t.node.kind === M == (e.node.kind === M) && t.node.depth > e.node.depth)));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function G(e) {
	return K(e.filter((e) => e !== void 0).join("/"));
}
function K(e) {
	return e.replace(/\/{2,}/g, "/");
}
function we(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function q(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function Te(e) {
	return q(we(e));
}
function J(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function Ee(e, t, n) {
	return J(e, n) === J(t, n);
}
function De({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
	if (t.includes("//") && (t = K(t)), t.startsWith("/")) return t.length === 1 || n === "preserve" ? t : n === "always" ? t.endsWith("/") ? t : `${t}/` : t.endsWith("/") ? t.slice(0, -1) : t;
	let i = t === ".", a;
	if (r) {
		a = i ? e : e + "\0" + t;
		let n = r.get(a);
		if (n) return n;
	}
	let o;
	if (i) o = e.split("/");
	else {
		for (e.includes("//") && (e = K(e)), o = e.split("/"); o.length > 1 && b(o) === "";) o.pop();
		let n = t.split("/");
		for (let e = 0, t = n.length; e < t; e++) {
			let r = n[e];
			r === "" ? e ? e === t - 1 && o.push(r) : o = [r] : r === ".." ? o.length > 1 ? o.pop() : o = [""] : r === "." || o.push(r);
		}
	}
	o.length > 1 && (b(o) === "" ? n === "never" && o.pop() : n === "always" && o.push(""));
	let s = o.join("/"), c = (i ? K(s) : s) || "/";
	return a && r && r.set(a, c), c;
}
function Oe(e) {
	let t = new Map(e.map((e) => [encodeURIComponent(e), e])), n = Array.from(t.keys()).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "g");
	return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function ke(e, t, n) {
	let r = t[e];
	return typeof r == "string" ? e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map((e) => je(e, n)).join("/") : je(r, n) : r;
}
function Ae({ path: e, params: t, decoder: n, ...r }) {
	let i = !1, a = Object.create(null);
	if (!e || e === "/") return {
		interpolatedPath: "/",
		usedParams: a,
		isMissingParams: i
	};
	if (!e.includes("$")) return {
		interpolatedPath: e,
		usedParams: a,
		isMissingParams: i
	};
	let o = e.length, s = 0, c, l = "";
	for (; s < o;) {
		let r = s;
		c = ge(e, r, c);
		let o = c[5];
		if (s = o + 1, r === o) continue;
		let u = c[0];
		if (u === 0) {
			l += "/" + e.substring(r, o);
			continue;
		}
		if (u === 2) {
			let s = t._splat;
			a._splat = s, a["*"] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o);
			if (!s) {
				i = !0, (u || d) && (l += "/" + u + d);
				continue;
			}
			let f = ke("_splat", t, n);
			l += "/" + u + f + d;
			continue;
		}
		if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = ke(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
			continue;
		}
		if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = ke(i, t, n) ?? "";
			l += "/" + u + f + d;
			continue;
		}
	}
	return e.endsWith("/") && (l += "/"), {
		usedParams: a,
		interpolatedPath: l || "/",
		isMissingParams: i
	};
}
function je(e, t) {
	let n = encodeURIComponent(e);
	return t?.(n) ?? n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var Y = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function Me(e) {
	if (e.statusCode = e.statusCode || e.code || 307, !e.reloadDocument && typeof e.href == "string") try {
		new URL(e.href), e.reloadDocument = !0;
	} catch {}
	let t = new Headers(e.headers);
	e.href && t.get("Location") === null && t.set("Location", e.href);
	let n = new Response(null, {
		status: e.statusCode,
		headers: t
	});
	if (n.options = e, e.throw) throw n;
	return n;
}
function Ne(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var Pe = "Error preloading route! ☝️", Fe = class {
	get to() {
		return this._to;
	}
	get id() {
		return this._id;
	}
	get path() {
		return this._path;
	}
	get fullPath() {
		return this._fullPath;
	}
	constructor(e) {
		if (this.init = (e) => {
			this.originalIndex = e.originalIndex;
			let t = this.options, n = !t?.path && !t?.id;
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = Y;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				A();
			}
			let r = n ? Y : t?.path;
			r && r !== "/" && (r = we(r));
			let i = t?.id || r, a = n ? Y : G([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = G(["/", a]));
			let o = a === "__root__" ? "/" : G([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = q(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => Me({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Ie = class extends Fe {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function Le({ children: e, fallback: t = null }) {
	return /* @__PURE__ */ g(s.Fragment, { children: Re() ? e : t });
}
function Re() {
	return s.useSyncExternalStore(ze, () => !0, () => !1);
}
function ze() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Be = o.createContext(void 0), Ve = o.createContext(void 0), He = Object.is;
function Ue(e, t, n, r, i) {
	let a = p(null);
	a.current === null && (a.current = {
		hasValue: !1,
		value: null
	});
	let o = a.current, [s, c] = f(() => {
		let e = !1, a, s, c = (t) => {
			if (!e) {
				e = !0, a = t;
				let n = r(t);
				if (i && o.hasValue) {
					let e = o.value;
					if (i(e, n)) return s = e, e;
				}
				return s = n, n;
			}
			if (He(a, t)) return s;
			let n = r(t);
			return i && i(s, n) ? (a = t, s) : (a = t, s = n, n);
		};
		return [() => c(t()), n ? () => c(n()) : void 0];
	}, [
		t,
		n,
		r,
		i,
		o
	]), d = h(e, s, c);
	return u(() => {
		o.hasValue = !0, o.value = d;
	}, [o, d]), l(d), d;
}
//#endregion
//#region ../../node_modules/@tanstack/react-store/dist/esm/useStore.js
function We(e, t) {
	return e === t;
}
function Ge(e, t, n = We) {
	let r = c((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = c(() => e?.get(), [e]);
	return Ue(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Ke = {};
function qe(e, t) {
	let n = o.useRef();
	return (r) => {
		let i = e?.select ? e.select(r) : r;
		return e?.structuralSharing ?? t.options.defaultStructuralSharing ? n.current = E(n.current, i) : i;
	};
}
function X(e) {
	let n = t(), r = o.useContext(e.from ? Ve : Be), i = e.from ?? r, a = n.stores.getMatchStore(i), s = qe(e, n), c = Ge(a, (e) => e ? s(e) : Ke);
	if (c !== Ke) return c;
	if (e.shouldThrow ?? !0) {
		if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
		A();
	}
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function Je(e) {
	return X({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function Ye(e) {
	let { select: t, ...n } = e;
	return X({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function Xe(e) {
	return X({
		from: e.from,
		shouldThrow: e.shouldThrow,
		structuralSharing: e.structuralSharing,
		strict: e.strict,
		select: (t) => {
			let n = e.strict === !1 ? t.params : t._strictParams;
			return e.select ? e.select(n) : n;
		}
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useSearch.js
function Ze(e) {
	return X({
		from: e.from,
		strict: e.strict,
		shouldThrow: e.shouldThrow,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.search) : t.search
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function Qe(e) {
	return X({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function $e(e) {
	let t = o.useRef(e);
	return k(t.current, e, { ignoreUndefined: !1 }) || (t.current = e), t.current;
}
function et(e, t) {
	return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}
function tt(e, t, n) {
	if (e?.external) {
		if (de(e.href, n)) {
			process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${e.href}`);
			return;
		}
		return e.href;
	}
	if (!ut(t) && typeof t == "string" && t.indexOf(":") !== -1) try {
		if (new URL(t), de(t, n)) {
			process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${t}`);
			return;
		}
		return t;
	} catch {}
}
function nt(e, t, n, r, i, a) {
	if (a) return !1;
	if (n?.exact) {
		if (!Ee(e.pathname, t.pathname, r)) return !1;
	} else {
		let n = J(e.pathname, r), i = J(t.pathname, r);
		if (!(n.startsWith(i) && (n.length === i.length || n[i.length] === "/"))) return !1;
	}
	return (n?.includeSearch ?? !0) && !k(e.search, t.search, {
		partial: !n?.exact,
		ignoreUndefined: !n?.explicitUndefined
	}) ? !1 : !n?.includeHash || i && e.hash === t.hash;
}
function rt(e, n) {
	let r = t(), i = te(n), { activeProps: a, inactiveProps: s, activeOptions: c, to: l, preload: u, preloadDelay: d, preloadIntentProximity: f, hashScrollIntoView: p, replace: m, startTransition: h, resetScroll: g, viewTransition: _, children: v, target: y, disabled: b, style: x, className: S, onClick: C, onBlur: w, onFocus: T, onMouseEnter: E, onMouseLeave: D, onTouchStart: O, ignoreBlocker: re, params: ie, search: k, hash: ae, state: oe, mask: se, reloadDocument: ce, unsafeRelative: le, from: ue, _fromLocation: de, ...fe } = e, pe = Re(), me = $e(e.search), A = $e(e.params), j = $e(c), M = o.useMemo(() => e, [
		r,
		e.from,
		e._fromLocation,
		e.hash,
		e.to,
		me,
		A,
		e.state,
		e.mask,
		e.unsafeRelative
	]), he = o.useCallback((e) => {
		let t = r.buildLocation({
			_fromLocation: e,
			...M
		}), n = lt(t.maskedLocation ? t.maskedLocation.publicHref : t.publicHref, t.maskedLocation ? t.maskedLocation.external : t.external, r.history, b), i = tt(n, l, r.protocolAllowlist);
		return [
			n?.href,
			i,
			nt(e, t, j, r.basepath, pe, i !== void 0)
		];
	}, [
		j,
		b,
		pe,
		M,
		r,
		l
	]), [ge, N, P] = Ge(r.stores.location, he, et), F = P ? ne(a, {}) ?? at : it, I = P ? it : ne(s, {}) ?? it, L = [
		S,
		F.className,
		I.className
	].filter(Boolean).join(" "), R = (x || F.style || I.style) && {
		...x,
		...F.style,
		...I.style
	}, _e = o.useRef(!1), z = e.reloadDocument || N || b ? !1 : u ?? r.options.defaultPreload, B = d ?? r.options.defaultPreloadDelay ?? 0, V = o.useCallback(() => {
		r.preloadRoute(M).catch((e) => {
			console.warn(e), console.warn(Pe);
		});
	}, [r, M]), H = o.useCallback((e) => {
		if (!e) {
			ct(i);
			return;
		}
		if (!(e.isIntersecting ?? z === "intent")) {
			e.isIntersecting === !1 && ct(i);
			return;
		}
		if (!B) {
			V();
			return;
		}
		Z.has(i) || Z.set(i, setTimeout(() => {
			Z.delete(i), V();
		}, B));
	}, [
		V,
		i,
		z,
		B
	]);
	ee(i, H, z !== "viewport"), o.useEffect(() => {
		_e.current || z === "render" && (V(), _e.current = !0);
	}, [V, z]);
	let ve = (e) => {
		let t = e.currentTarget.getAttribute("target"), n = y === void 0 ? t : y;
		!b && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (!n || n === "_self") && e.button === 0 && (e.preventDefault(), r.navigate({
			...M,
			replace: m,
			resetScroll: g,
			hashScrollIntoView: p,
			startTransition: h,
			viewTransition: _,
			ignoreBlocker: re
		}));
	};
	if (N) return {
		...fe,
		ref: i,
		href: N,
		...v && { children: v },
		...y && { target: y },
		...b && { disabled: b },
		...x && { style: x },
		...S && { className: S },
		...C && { onClick: C },
		...w && { onBlur: w },
		...T && { onFocus: T },
		...E && { onMouseEnter: E },
		...D && { onMouseLeave: D },
		...O && { onTouchStart: O }
	};
	let ye = () => {
		z === "intent" && V();
	}, be = () => {
		z === "intent" && ct(i);
	};
	return {
		...fe,
		...F,
		...I,
		href: ge,
		ref: i,
		onClick: Q([C, ve]),
		onBlur: Q([w, be]),
		onFocus: Q([T, H]),
		onMouseEnter: Q([E, H]),
		onMouseLeave: Q([D, be]),
		onTouchStart: Q([O, ye]),
		disabled: !!b,
		target: y,
		...R && { style: R },
		...L && { className: L },
		...b && ot,
		...P && st
	};
}
var it = {}, at = { className: "active" }, ot = {
	role: "link",
	"aria-disabled": !0
}, st = {
	"data-status": "active",
	"aria-current": "page"
}, Z = /* @__PURE__ */ new WeakMap(), ct = (e) => {
	clearTimeout(Z.get(e)), Z.delete(e);
}, Q = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function lt(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function ut(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var dt = o.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = rt(r, t), s = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return o.createElement("a", t, s);
	}
	return o.createElement(n, a, s);
}), ft = class extends Fe {
	constructor(t) {
		super(t), this.useMatch = (e) => X({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Qe({
			...e,
			from: this.id
		}), this.useSearch = (e) => Ze({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Xe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ye({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Je({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = s.forwardRef((e, t) => /* @__PURE__ */ g(dt, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function pt(e) {
	return new ft(e);
}
var mt = class extends Ie {
	constructor(t) {
		super(t), this.useMatch = (e) => X({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Qe({
			...e,
			from: this.id
		}), this.useSearch = (e) => Ze({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Xe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ye({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Je({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = s.forwardRef((e, t) => /* @__PURE__ */ g(dt, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ht(e) {
	return new mt(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function gt(e) {
	return (e) => {
		let t = pt(e);
		return t.isRoot = !1, t;
	};
}
var _t = "animate-[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both]", vt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, yt = () => {
	let [e, t] = m(vt);
	return u(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
			t(e.matches);
		};
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, []), e;
};
function bt({ label: e = "Loading payment methods", labelKey: t, message: n, messageKey: i, testId: o = "cashier-fullscreen-loading", loaderSlot: s = "cashier-fullscreen-logo-loader", delayMs: l = 180, onVisibleChange: u, presentationScreen: d = "loading" }) {
	let [f, p] = m(!1), h = c((e) => {
		p(e), u?.(e);
	}, [u]);
	return /* @__PURE__ */ g(r, {
		id: d,
		title: e,
		titleKey: t,
		message: n,
		messageKey: i,
		busy: !0,
		overrideEnabled: f,
		children: /* @__PURE__ */ g(a, {
			className: "pc-cashier__fullscreen-loader",
			label: e,
			message: n,
			testId: o,
			delayMs: l,
			indicatorSize: "xl",
			indicatorTone: "accent",
			iconSlot: s,
			onVisibleChange: h
		})
	});
}
function $({ label: e = "Loading payment methods", labelKey: t, message: n, messageKey: r, testId: o = "cashier-fullscreen-loading", loaderSlot: s = "cashier-fullscreen-logo-loader", delayMs: c = 180, onVisibleChange: l, presentationScreen: u = "loading" }) {
	return i(u) ? /* @__PURE__ */ g(bt, {
		label: e,
		labelKey: t,
		message: n,
		messageKey: r,
		testId: o,
		loaderSlot: s,
		delayMs: c,
		onVisibleChange: l,
		presentationScreen: u
	}) : /* @__PURE__ */ g(a, {
		className: "pc-cashier__fullscreen-loader",
		label: e,
		message: n,
		testId: o,
		delayMs: c,
		indicatorSize: "xl",
		indicatorTone: "accent",
		iconSlot: s,
		onVisibleChange: l
	});
}
function xt({ isLoading: e, children: t, loaderLabel: r, loaderLabelKey: i, loaderMessage: a, loaderMessageKey: o, loaderTestId: s, loaderSlot: l, loaderDelayMs: u }) {
	let [d, f] = m(0), p = yt(), h = c((e) => {
		e && f((e) => e + 1);
	}, []);
	return e ? /* @__PURE__ */ g($, {
		label: r,
		labelKey: i,
		message: a,
		messageKey: o,
		testId: s,
		loaderSlot: l,
		delayMs: u,
		onVisibleChange: h
	}) : /* @__PURE__ */ g("div", {
		"data-slot": "cashier-fullscreen-content-reveal",
		className: n("pc-cashier__fullscreen-content-reveal flex min-h-full w-full flex-1 self-stretch flex-col", d > 0 && !p && _t),
		children: t
	}, d);
}
function St({ isLoading: e, children: t, loaderLabel: r, loaderLabelKey: i, loaderTestId: a, loaderSlot: o }) {
	let s = p(null);
	return d(() => {
		let t = s.current;
		if (t) {
			if (e) {
				t.setAttribute("inert", "");
				return;
			}
			t.removeAttribute("inert");
		}
	}, [e]), /* @__PURE__ */ _("div", {
		"data-testid": "cashier-fullscreen-loading-overlay",
		"data-state": e ? "loading" : "ready",
		"aria-busy": e || void 0,
		className: e ? "relative flex h-full min-h-0 w-full flex-1" : "contents",
		children: [/* @__PURE__ */ g("div", {
			ref: s,
			"data-testid": "cashier-fullscreen-loading-overlay-content",
			"aria-hidden": e || void 0,
			className: e ? "invisible flex h-full min-h-0 w-full flex-1 flex-col" : "contents",
			children: t
		}), e && /* @__PURE__ */ g("div", {
			className: n("absolute inset-0 z-50 flex", "bg-[var(--pc-color-surface)]"),
			children: /* @__PURE__ */ g($, {
				label: r,
				labelKey: i,
				testId: a,
				loaderSlot: o,
				delayMs: 0
			})
		})]
	});
}
//#endregion
export { fe as A, E as B, z as C, j as D, V as E, C as F, y as H, de as I, ae as L, pe as M, oe as N, ue as O, ne as P, b as R, R as S, L as T, v as V, G as _, ht as a, q as b, qe as c, Le as d, Ne as f, Ae as g, Oe as h, gt as i, k as j, me as k, Ge as l, Y as m, xt as n, Ze as o, Me as p, St as r, Xe as s, $ as t, Be as u, De as v, _e as w, ye as x, Te as y, T as z };
