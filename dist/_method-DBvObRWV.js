"use client";
import { Fr as e, Hr as t, Lr as n, Ot as r, Pr as i, Rr as a, Ur as o, Zn as s, n as c, zr as l } from "./useBackNavigation-X8aGg6sp.js";
import * as u from "react";
import d, { useCallback as f } from "react";
import { jsx as p } from "react/jsx-runtime";
import { flushSync as m } from "react-dom";
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function h(e) {
	return e[e.length - 1];
}
function g(e) {
	return typeof e == "function";
}
function _(e, t) {
	return g(e) ? e(t) : e;
}
var v = Object.prototype.hasOwnProperty, y = Object.prototype.propertyIsEnumerable, b = () => Object.create(null), x = (e, t) => S(e, t, b);
function S(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = E(e) && E(i);
	if (!a && !(w(e) && w(i))) return i;
	let o = a ? e : C(e);
	if (!o) return i;
	let s = a ? i : C(i);
	if (!s) return i;
	let c = o.length, l = s.length, u = a ? Array(l) : n(), d = 0;
	for (let t = 0; t < l; t++) {
		let o = a ? t : s[t], l = e[o], f = i[o];
		if (l === f) {
			u[o] = l, (a ? t < c : v.call(e, o)) && d++;
			continue;
		}
		if (l === null || f === null || typeof l != "object" || typeof f != "object") {
			u[o] = f;
			continue;
		}
		let p = S(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function C(e) {
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) if (!y.call(e, n)) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	let r = t;
	for (let t of n) {
		if (!y.call(e, t)) return !1;
		r.push(t);
	}
	return r;
}
function w(e) {
	if (!T(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!T(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function T(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function E(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function D(e, t, n) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0, i = e.length; r < i; r++) if (!D(e[r], t[r], n)) return !1;
		return !0;
	}
	if (w(e) && w(t)) {
		let r = n?.ignoreUndefined ?? !0;
		if (n?.partial) {
			for (let i in t) if ((!r || t[i] !== void 0) && !D(e[i], t[i], n)) return !1;
			return !0;
		}
		let i = 0;
		if (!r) i = Object.keys(e).length;
		else for (let t in e) e[t] !== void 0 && i++;
		let a = 0;
		for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !D(e[o], t[o], n))) return !1;
		return i === a;
	}
	return !1;
}
function O(e) {
	let t, n, r = new Promise((e, r) => {
		t = e, n = r;
	});
	return r.status = "pending", r.resolve = (n) => {
		r.status = "resolved", r.value = n, t(n), e?.(n);
	}, r.reject = (e) => {
		r.status = "rejected", n(e);
	}, r;
}
function k(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function ee(e) {
	return !!(e && typeof e == "object" && typeof e.then == "function");
}
function A(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
function j(e) {
	return e.replace(/[\x00-\x1f\x7f]/g, "");
}
function te(e) {
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
	return j(t);
}
var ne = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
function re(e, t) {
	if (!e) return !1;
	try {
		let n = new URL(e);
		return !t.has(n.protocol);
	} catch {
		return !1;
	}
}
function ie(e) {
	if (!e || !/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
		path: e,
		handledProtocolRelativeURL: !1
	};
	let t = /%25|%5C/gi, n = 0, r = "", i;
	for (; (i = t.exec(e)) !== null;) r += te(e.slice(n, i.index)) + i[0], n = t.lastIndex;
	r += te(n ? e.slice(n) : e);
	let a = !1;
	return r.startsWith("//") && (a = !0, r = "/" + r.replace(/^\/+/, "")), {
		path: r,
		handledProtocolRelativeURL: a
	};
}
function ae(e) {
	return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function oe(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/invariant.js
function M() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function N(e) {
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
var P = 4, se = 5;
function ce(e) {
	let t = e.indexOf("{");
	if (t === -1) return null;
	let n = e.indexOf("}", t);
	return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function F(e, t, n = new Uint16Array(6)) {
	let r = e.indexOf("/", t), i = r === -1 ? e.length : r, a = e.substring(t, i);
	if (!a || !a.includes("$")) return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
	if (a === "$") {
		let r = e.length;
		return n[0] = 2, n[1] = t, n[2] = t, n[3] = r, n[4] = r, n[5] = r, n;
	}
	if (a.charCodeAt(0) === 36) return n[0] = 1, n[1] = t, n[2] = t + 1, n[3] = i, n[4] = i, n[5] = i, n;
	let o = ce(a);
	if (o) {
		let [r, s] = o, c = a.charCodeAt(r + 1);
		if (c === 45) {
			if (r + 2 < a.length && a.charCodeAt(r + 2) === 36) {
				let e = r + 3, a = s;
				if (e < a) return n[0] = 3, n[1] = t + r, n[2] = t + e, n[3] = t + a, n[4] = t + s + 1, n[5] = i, n;
			}
		} else if (c === 36) {
			let a = r + 1, o = r + 2;
			return o === s ? (n[0] = 2, n[1] = t + r, n[2] = t + a, n[3] = t + o, n[4] = t + s + 1, n[5] = e.length, n) : (n[0] = 1, n[1] = t + r, n[2] = t + o, n[3] = t + s, n[4] = t + s + 1, n[5] = i, n);
		}
	}
	return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
}
function I(e, t, n, r, i, a, o) {
	o?.(n);
	let s = r;
	{
		let r = n.fullPath ?? n.from, o = r.length, c = n.options?.caseSensitive ?? e, l = !!(n.options?.params?.parse && n.options?.skipRouteOnParseError?.params);
		for (; s < o;) {
			let e = F(r, s, t), o, u = s, d = e[5];
			switch (s = d + 1, a++, e[0]) {
				case 0: {
					let t = r.substring(e[2], e[3]);
					if (c) {
						let e = i.static?.get(t);
						if (e) o = e;
						else {
							i.static ??= /* @__PURE__ */ new Map();
							let e = z(n.fullPath ?? n.from);
							e.parent = i, e.depth = a, o = e, i.static.set(t, e);
						}
					} else {
						let e = t.toLowerCase(), r = i.staticInsensitive?.get(e);
						if (r) o = r;
						else {
							i.staticInsensitive ??= /* @__PURE__ */ new Map();
							let t = z(n.fullPath ?? n.from);
							t.parent = i, t.depth = a, o = t, i.staticInsensitive.set(e, t);
						}
					}
					break;
				}
				case 1: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.dynamic?.find((e) => !e.skipOnParamError && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = B(1, n.fullPath ?? n.from, f, p, m);
						o = e, e.depth = a, e.parent = i, i.dynamic ??= [], i.dynamic.push(e);
					}
					break;
				}
				case 3: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.optional?.find((e) => !e.skipOnParamError && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = B(3, n.fullPath ?? n.from, f, p, m);
						o = e, e.parent = i, e.depth = a, i.optional ??= [], i.optional.push(e);
					}
					break;
				}
				case 2: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), l = c && !!(t || s), f = t ? l ? t : t.toLowerCase() : void 0, p = s ? l ? s : s.toLowerCase() : void 0, m = B(2, n.fullPath ?? n.from, l, f, p);
					o = m, m.parent = i, m.depth = a, i.wildcard ??= [], i.wildcard.push(m);
				}
			}
			i = o;
		}
		if (l && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf("/") + 1) === 95) {
			let e = z(n.fullPath ?? n.from);
			e.kind = se, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let u = (n.path || !n.children) && !n.isRoot;
		if (u && r.endsWith("/")) {
			let e = z(n.fullPath ?? n.from);
			e.kind = P, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = n.options?.params?.parse ?? null, i.skipOnParamError = l, i.parsingPriority = n.options?.skipRouteOnParseError?.priority ?? 0, u && !i.route && (i.route = n, i.fullPath = n.fullPath ?? n.from);
	}
	if (n.children) for (let r of n.children) I(e, t, r, s, i, a, o);
}
function L(e, t) {
	if (e.skipOnParamError && !t.skipOnParamError) return -1;
	if (!e.skipOnParamError && t.skipOnParamError) return 1;
	if (e.skipOnParamError && t.skipOnParamError && (e.parsingPriority || t.parsingPriority)) return t.parsingPriority - e.parsingPriority;
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
function R(e) {
	if (e.pathless) for (let t of e.pathless) R(t);
	if (e.static) for (let t of e.static.values()) R(t);
	if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) R(t);
	if (e.dynamic?.length) {
		e.dynamic.sort(L);
		for (let t of e.dynamic) R(t);
	}
	if (e.optional?.length) {
		e.optional.sort(L);
		for (let t of e.optional) R(t);
	}
	if (e.wildcard?.length) {
		e.wildcard.sort(L);
		for (let t of e.wildcard) R(t);
	}
}
function z(e) {
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
		skipOnParamError: !1,
		parsingPriority: 0
	};
}
function B(e, t, n, r, i) {
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
		skipOnParamError: !1,
		parsingPriority: 0,
		caseSensitive: n,
		prefix: r,
		suffix: i
	};
}
function le(e, t) {
	let n = z("/"), r = new Uint16Array(6);
	for (let t of e) I(!1, r, t, 1, n, 0);
	R(n), t.masksTree = n, t.flatCache = N(1e3);
}
function V(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n) return n;
	let r = K(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function H(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = z("/"), I(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), K(r, o, n);
}
function U(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = K(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = ue(a.route)), t.matchCache.set(r, a), a;
}
function W(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function G(e, t = !1, n) {
	let r = z(e.fullPath), i = new Uint16Array(6), a = {}, o = {}, s = 0;
	return I(t, i, e, 1, r, 0, (e) => {
		if (n?.(e, s), e.id in a) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			M();
		}
		if (a[e.id] = e, s !== 0 && e.path) {
			let t = W(e.fullPath);
			(!o[t] || e.fullPath.endsWith("/")) && (o[t] = e);
		}
		s++;
	}), R(r), {
		processedTree: {
			segmentTree: r,
			singleCache: N(1e3),
			matchCache: N(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: a,
		routesByPath: o
	};
}
function K(e, t, n = !1) {
	let r = e.split("/"), i = fe(e, r, t, n);
	if (!i) return null;
	let [a] = q(e, r, i);
	return {
		route: i.node.route,
		rawParams: a,
		parsedParams: i.parsedParams
	};
}
function q(e, t, n) {
	let r = de(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === P) break;
		if (u.kind === se) {
			l--, o--, c--;
			continue;
		}
		let d = t[o], f = c;
		if (d && (c += d.length), u.kind === 1) {
			i ??= n.node.fullPath.split("/");
			let e = i[l], t = u.prefix?.length ?? 0;
			if (e.charCodeAt(t) === 123) {
				let n = u.suffix?.length ?? 0, r = e.substring(t + 2, e.length - n - 1), i = d.substring(t, d.length - n);
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
			let e = i[l], t = u.prefix?.length ?? 0, r = u.suffix?.length ?? 0, p = e.substring(t + 3, e.length - r - 1), m = u.suffix || u.prefix ? d.substring(t, d.length - r) : d;
			m && (a[p] = decodeURIComponent(m));
		} else if (u.kind === 2) {
			let t = u, n = e.substring(f + (t.prefix?.length ?? 0), e.length - (t.suffix?.length ?? 0)), r = decodeURIComponent(n);
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
function ue(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function de(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function fe(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !h(t), a = i && e !== "/", o = t.length - +!!i, s = [{
		node: n,
		index: 1,
		skipped: 0,
		depth: 1,
		statics: 1,
		dynamics: 0,
		optionals: 0
	}], c = null, l = null, u = null;
	for (; s.length;) {
		let n = s.pop(), { node: i, index: d, skipped: f, depth: p, statics: m, dynamics: h, optionals: g } = n, { extract: _, rawParams: v, parsedParams: y } = n;
		if (i.skipOnParamError) {
			if (!J(e, t, n)) continue;
			v = n.rawParams, _ = n.extract, y = n.parsedParams;
		}
		r && i.route && i.kind !== P && Y(l, n) && (l = n);
		let b = d === o;
		if (b && (i.route && !a && Y(u, n) && (u = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
		let x = b ? void 0 : t[d], S;
		if (b && i.index) {
			let n = {
				node: i.index,
				index: d,
				skipped: f,
				depth: p + 1,
				statics: m,
				dynamics: h,
				optionals: g,
				extract: _,
				rawParams: v,
				parsedParams: y
			}, r = !0;
			if (i.index.skipOnParamError && (J(e, t, n) || (r = !1)), r) {
				if (m === o && !h && !g && !f) return n;
				Y(u, n) && (u = n);
			}
		}
		if (i.wildcard && Y(c, n)) for (let n of i.wildcard) {
			let { prefix: r, suffix: i } = n;
			if (r && (b || !(n.caseSensitive ? x : S ??= x.toLowerCase()).startsWith(r))) continue;
			if (i) {
				if (b) continue;
				let e = t.slice(d).join("/").slice(-i.length);
				if ((n.caseSensitive ? e : e.toLowerCase()) !== i) continue;
			}
			let a = {
				node: n,
				index: o,
				skipped: f,
				depth: p,
				statics: m,
				dynamics: h,
				optionals: g,
				extract: _,
				rawParams: v,
				parsedParams: y
			};
			if (!(n.skipOnParamError && !J(e, t, a))) {
				c = a;
				break;
			}
		}
		if (i.optional) {
			let e = f | 1 << p, t = p + 1;
			for (let n = i.optional.length - 1; n >= 0; n--) {
				let r = i.optional[n];
				s.push({
					node: r,
					index: d,
					skipped: e,
					depth: t,
					statics: m,
					dynamics: h,
					optionals: g,
					extract: _,
					rawParams: v,
					parsedParams: y
				});
			}
			if (!b) for (let e = i.optional.length - 1; e >= 0; e--) {
				let n = i.optional[e], { prefix: r, suffix: a } = n;
				if (r || a) {
					let e = n.caseSensitive ? x : S ??= x.toLowerCase();
					if (r && !e.startsWith(r) || a && !e.endsWith(a)) continue;
				}
				s.push({
					node: n,
					index: d + 1,
					skipped: f,
					depth: t,
					statics: m,
					dynamics: h,
					optionals: g + 1,
					extract: _,
					rawParams: v,
					parsedParams: y
				});
			}
		}
		if (!b && i.dynamic && x) for (let e = i.dynamic.length - 1; e >= 0; e--) {
			let t = i.dynamic[e], { prefix: n, suffix: r } = t;
			if (n || r) {
				let e = t.caseSensitive ? x : S ??= x.toLowerCase();
				if (n && !e.startsWith(n) || r && !e.endsWith(r)) continue;
			}
			s.push({
				node: t,
				index: d + 1,
				skipped: f,
				depth: p + 1,
				statics: m,
				dynamics: h + 1,
				optionals: g,
				extract: _,
				rawParams: v,
				parsedParams: y
			});
		}
		if (!b && i.staticInsensitive) {
			let e = i.staticInsensitive.get(S ??= x.toLowerCase());
			e && s.push({
				node: e,
				index: d + 1,
				skipped: f,
				depth: p + 1,
				statics: m + 1,
				dynamics: h,
				optionals: g,
				extract: _,
				rawParams: v,
				parsedParams: y
			});
		}
		if (!b && i.static) {
			let e = i.static.get(x);
			e && s.push({
				node: e,
				index: d + 1,
				skipped: f,
				depth: p + 1,
				statics: m + 1,
				dynamics: h,
				optionals: g,
				extract: _,
				rawParams: v,
				parsedParams: y
			});
		}
		if (i.pathless) {
			let e = p + 1;
			for (let t = i.pathless.length - 1; t >= 0; t--) {
				let n = i.pathless[t];
				s.push({
					node: n,
					index: d,
					skipped: f,
					depth: e,
					statics: m,
					dynamics: h,
					optionals: g,
					extract: _,
					rawParams: v,
					parsedParams: y
				});
			}
		}
	}
	if (u && c) return Y(c, u) ? u : c;
	if (u) return u;
	if (c) return c;
	if (r && l) {
		let n = l.index;
		for (let e = 0; e < l.index; e++) n += t[e].length;
		let r = n === e.length ? "/" : e.slice(n);
		return l.rawParams ??= Object.create(null), l.rawParams["**"] = decodeURIComponent(r), l;
	}
	return null;
}
function J(e, t, n) {
	try {
		let [r, i] = q(e, t, n);
		n.rawParams = r, n.extract = i;
		let a = n.node.parse(r);
		return n.parsedParams = Object.assign(Object.create(null), n.parsedParams, a), !0;
	} catch {
		return null;
	}
}
function Y(e, t) {
	return e ? t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === P) > (e.node.kind === P) || t.node.kind === P == (e.node.kind === P) && t.depth > e.depth))) : !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function X(e) {
	return pe(e.filter((e) => e !== void 0).join("/"));
}
function pe(e) {
	return e.replace(/\/{2,}/g, "/");
}
function me(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function he(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function ge(e) {
	return he(me(e));
}
function _e(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function ve(e, t, n) {
	return _e(e, n) === _e(t, n);
}
function ye({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
	let i = t.startsWith("/"), a = !i && t === ".", o;
	if (r) {
		o = i ? t : a ? e : e + "\0" + t;
		let n = r.get(o);
		if (n) return n;
	}
	let s;
	if (a) s = e.split("/");
	else if (i) s = t.split("/");
	else {
		for (s = e.split("/"); s.length > 1 && h(s) === "";) s.pop();
		let n = t.split("/");
		for (let e = 0, t = n.length; e < t; e++) {
			let r = n[e];
			r === "" ? e ? e === t - 1 && s.push(r) : s = [r] : r === ".." ? s.pop() : r === "." || s.push(r);
		}
	}
	s.length > 1 && (h(s) === "" ? n === "never" && s.pop() : n === "always" && s.push(""));
	let c, l = "";
	for (let e = 0; e < s.length; e++) {
		e > 0 && (l += "/");
		let t = s[e];
		if (!t) continue;
		c = F(t, 0, c);
		let n = c[0];
		if (n === 0) {
			l += t;
			continue;
		}
		let r = c[5], i = t.substring(0, c[1]), a = t.substring(c[4], r), o = t.substring(c[2], c[3]);
		n === 1 ? l += i || a ? `${i}{$${o}}${a}` : `$${o}` : n === 2 ? l += i || a ? `${i}{$}${a}` : "$" : l += `${i}{-$${o}}${a}`;
	}
	l = pe(l);
	let u = l || "/";
	return o && r && r.set(o, u), u;
}
function be(e) {
	let t = new Map(e.map((e) => [encodeURIComponent(e), e])), n = Array.from(t.keys()).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "g");
	return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function xe(e, t, n) {
	let r = t[e];
	return typeof r == "string" ? e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map((e) => Ce(e, n)).join("/") : Ce(r, n) : r;
}
function Se({ path: e, params: t, decoder: n, ...r }) {
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
		c = F(e, r, c);
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
			let f = xe("_splat", t, n);
			l += "/" + u + f + d;
			continue;
		}
		if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = xe(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
			continue;
		}
		if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = xe(i, t, n) ?? "";
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
function Ce(e, t) {
	let n = encodeURIComponent(e);
	return t?.(n) ?? n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/not-found.js
function we(e) {
	return !!e?.isNotFound;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var Te = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function Ee(e) {
	if (e.statusCode = e.statusCode || e.code || 307, !e._builtLocation && !e.reloadDocument && typeof e.href == "string") try {
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
function De(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var Oe = "Error preloading route! ☝️", ke = class {
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
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = Te;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				M();
			}
			let r = n ? Te : t?.path;
			r && r !== "/" && (r = me(r));
			let i = t?.id || r, a = n ? Te : X([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = X(["/", a]));
			let o = a === "__root__" ? "/" : X([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = he(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => Ee({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Ae = class extends ke {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function je({ children: e, fallback: t = null }) {
	return Me() ? /* @__PURE__ */ p(d.Fragment, { children: e }) : /* @__PURE__ */ p(d.Fragment, { children: t });
}
function Me() {
	return d.useSyncExternalStore(Ne, () => !0, () => !1);
}
function Ne() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Pe = u.createContext(void 0), Fe = u.createContext(void 0), Ie = /* @__PURE__ */ t(((e) => {
	var t = o("react");
	function n(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var r = typeof Object.is == "function" ? Object.is : n, i = t.useState, a = t.useEffect, s = t.useLayoutEffect, c = t.useDebugValue;
	function l(e, t) {
		var n = t(), r = i({ inst: {
			value: n,
			getSnapshot: t
		} }), o = r[0].inst, l = r[1];
		return s(function() {
			o.value = n, o.getSnapshot = t, u(o) && l({ inst: o });
		}, [
			e,
			n,
			t
		]), a(function() {
			return u(o) && l({ inst: o }), e(function() {
				u(o) && l({ inst: o });
			});
		}, [e]), c(n), n;
	}
	function u(e) {
		var t = e.getSnapshot;
		e = e.value;
		try {
			var n = t();
			return !r(e, n);
		} catch {
			return !0;
		}
	}
	function d(e, t) {
		return t();
	}
	var f = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? d : l;
	e.useSyncExternalStore = t.useSyncExternalStore === void 0 ? f : t.useSyncExternalStore;
})), Le = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		function n(e, t) {
			f || a.startTransition === void 0 || (f = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
			var n = t();
			if (!p) {
				var i = t();
				s(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), p = !0);
			}
			i = c({ inst: {
				value: n,
				getSnapshot: t
			} });
			var o = i[0].inst, m = i[1];
			return u(function() {
				o.value = n, o.getSnapshot = t, r(o) && m({ inst: o });
			}, [
				e,
				n,
				t
			]), l(function() {
				return r(o) && m({ inst: o }), e(function() {
					r(o) && m({ inst: o });
				});
			}, [e]), d(n), n;
		}
		function r(e) {
			var t = e.getSnapshot;
			e = e.value;
			try {
				var n = t();
				return !s(e, n);
			} catch {
				return !0;
			}
		}
		function i(e, t) {
			return t();
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var a = o("react"), s = typeof Object.is == "function" ? Object.is : t, c = a.useState, l = a.useEffect, u = a.useLayoutEffect, d = a.useDebugValue, f = !1, p = !1, m = typeof window > "u" || window.document === void 0 || window.document.createElement === void 0 ? i : n;
		e.useSyncExternalStore = a.useSyncExternalStore === void 0 ? m : a.useSyncExternalStore, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Re = /* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = Ie() : t.exports = Le();
})), ze = /* @__PURE__ */ t(((e) => {
	var t = o("react"), n = Re();
	function r(e, t) {
		return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
	}
	var i = typeof Object.is == "function" ? Object.is : r, a = n.useSyncExternalStore, s = t.useRef, c = t.useEffect, l = t.useMemo, u = t.useDebugValue;
	e.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
		var d = s(null);
		if (d.current === null) {
			var f = {
				hasValue: !1,
				value: null
			};
			d.current = f;
		} else f = d.current;
		d = l(function() {
			function e(e) {
				if (!a) {
					if (a = !0, s = e, e = r(e), o !== void 0 && f.hasValue) {
						var t = f.value;
						if (o(t, e)) return c = t;
					}
					return c = e;
				}
				if (t = c, i(s, e)) return t;
				var n = r(e);
				return o !== void 0 && o(t, n) ? (s = e, t) : (s = e, c = n);
			}
			var a = !1, s, c, l = n === void 0 ? null : n;
			return [function() {
				return e(t());
			}, l === null ? void 0 : function() {
				return e(l());
			}];
		}, [
			t,
			n,
			r,
			o
		]);
		var p = a(e, d[0], d[1]);
		return c(function() {
			f.hasValue = !0, f.value = p;
		}, [p]), u(p), p;
	};
})), Be = /* @__PURE__ */ t(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e, t) {
			return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
		}
		typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
		var n = o("react"), r = Re(), i = typeof Object.is == "function" ? Object.is : t, a = r.useSyncExternalStore, s = n.useRef, c = n.useEffect, l = n.useMemo, u = n.useDebugValue;
		e.useSyncExternalStoreWithSelector = function(e, t, n, r, o) {
			var d = s(null);
			if (d.current === null) {
				var f = {
					hasValue: !1,
					value: null
				};
				d.current = f;
			} else f = d.current;
			d = l(function() {
				function e(e) {
					if (!a) {
						if (a = !0, s = e, e = r(e), o !== void 0 && f.hasValue) {
							var t = f.value;
							if (o(t, e)) return c = t;
						}
						return c = e;
					}
					if (t = c, i(s, e)) return t;
					var n = r(e);
					return o !== void 0 && o(t, n) ? (s = e, t) : (s = e, c = n);
				}
				var a = !1, s, c, l = n === void 0 ? null : n;
				return [function() {
					return e(t());
				}, l === null ? void 0 : function() {
					return e(l());
				}];
			}, [
				t,
				n,
				r,
				o
			]);
			var p = a(e, d[0], d[1]);
			return c(function() {
				f.hasValue = !0, f.value = p;
			}, [p]), u(p), p;
		}, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	})();
})), Ve = (/* @__PURE__ */ t(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = ze() : t.exports = Be();
})))();
function He(e, t) {
	return e === t;
}
function Ue(e, t, n = He) {
	let r = f((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = f(() => e?.get(), [e]);
	return (0, Ve.useSyncExternalStoreWithSelector)(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var We = {
	state: void 0,
	get: () => void 0,
	subscribe: () => () => {}
};
function Z(t) {
	let n = e(), r = u.useContext(t.from ? Fe : Pe), i = t.from ?? r, a = i ? t.from ? n.stores.getMatchStoreByRouteId(i) : n.stores.activeMatchStoresById.get(i) : void 0, o = u.useRef(void 0);
	return Ue(a ?? We, (e) => {
		if ((t.shouldThrow ?? !0) && !e) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${t.from ? `an active match from "${t.from}"` : "a nearest match!"}`);
			M();
		}
		if (e === void 0) return;
		let r = t.select ? t.select(e) : e;
		if (t.structuralSharing ?? n.options.defaultStructuralSharing) {
			let e = S(o.current, r);
			return o.current = e, e;
		}
		return r;
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function Ge(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function Ke(e) {
	let { select: t, ...n } = e;
	return Z({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function qe(e) {
	return Z({
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
function Je(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		shouldThrow: e.shouldThrow,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.search) : t.search
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouteContext.js
function Ye(e) {
	return Z({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function Xe(t, n) {
	let r = e(), i = a(n), { activeProps: o, inactiveProps: s, activeOptions: c, to: d, preload: f, preloadDelay: p, hashScrollIntoView: h, replace: g, startTransition: v, resetScroll: y, viewTransition: b, children: x, target: S, disabled: C, style: w, className: T, onClick: E, onBlur: O, onFocus: k, onMouseEnter: ee, onMouseLeave: A, onTouchStart: j, ignoreBlocker: te, params: ne, search: ie, hash: ae, state: oe, mask: M, reloadDocument: N, unsafeRelative: P, from: se, _fromLocation: ce, ...F } = t, I = Me(), L = u.useMemo(() => t, [
		r,
		t.from,
		t._fromLocation,
		t.hash,
		t.to,
		t.search,
		t.params,
		t.state,
		t.mask,
		t.unsafeRelative
	]), R = Ue(r.stores.location, (e) => e, (e, t) => e.href === t.href), z = u.useMemo(() => {
		let e = {
			_fromLocation: R,
			...L
		};
		return r.buildLocation(e);
	}, [
		r,
		R,
		L
	]), B = z.maskedLocation ? z.maskedLocation.publicHref : z.publicHref, le = z.maskedLocation ? z.maskedLocation.external : z.external, V = u.useMemo(() => rt(B, le, r.history, C), [
		C,
		le,
		B,
		r.history
	]), H = u.useMemo(() => {
		if (V?.external) {
			if (re(V.href, r.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${V.href}`);
				return;
			}
			return V.href;
		}
		if (!it(d) && !(typeof d != "string" || d.indexOf(":") === -1)) try {
			if (new URL(d), re(d, r.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${d}`);
				return;
			}
			return d;
		} catch {}
	}, [
		d,
		V,
		r.protocolAllowlist
	]), U = u.useMemo(() => {
		if (H) return !1;
		if (c?.exact) {
			if (!ve(R.pathname, z.pathname, r.basepath)) return !1;
		} else {
			let e = _e(R.pathname, r.basepath), t = _e(z.pathname, r.basepath);
			if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === "/"))) return !1;
		}
		return (c?.includeSearch ?? !0) && !D(R.search, z.search, {
			partial: !c?.exact,
			ignoreUndefined: !c?.explicitUndefined
		}) ? !1 : c?.includeHash ? I && R.hash === z.hash : !0;
	}, [
		c?.exact,
		c?.explicitUndefined,
		c?.includeHash,
		c?.includeSearch,
		R,
		H,
		I,
		z.hash,
		z.pathname,
		z.search,
		r.basepath
	]), W = U ? _(o, {}) ?? Qe : Ze, G = U ? Ze : _(s, {}) ?? Ze, K = [
		T,
		W.className,
		G.className
	].filter(Boolean).join(" "), q = (w || W.style || G.style) && {
		...w,
		...W.style,
		...G.style
	}, [ue, de] = u.useState(!1), fe = u.useRef(!1), J = t.reloadDocument || H ? !1 : f ?? r.options.defaultPreload, Y = p ?? r.options.defaultPreloadDelay ?? 0, X = u.useCallback(() => {
		r.preloadRoute({
			...L,
			_builtLocation: z
		}).catch((e) => {
			console.warn(e), console.warn(Oe);
		});
	}, [
		r,
		L,
		z
	]);
	l(i, u.useCallback((e) => {
		e?.isIntersecting && X();
	}, [X]), nt, { disabled: !!C || J !== "viewport" }), u.useEffect(() => {
		fe.current || !C && J === "render" && (X(), fe.current = !0);
	}, [
		C,
		X,
		J
	]);
	let pe = (e) => {
		let t = e.currentTarget.getAttribute("target"), n = S === void 0 ? t : S;
		if (!C && !ot(e) && !e.defaultPrevented && (!n || n === "_self") && e.button === 0) {
			e.preventDefault(), m(() => {
				de(!0);
			});
			let t = r.subscribe("onResolved", () => {
				t(), de(!1);
			});
			r.navigate({
				...L,
				replace: g,
				resetScroll: y,
				hashScrollIntoView: h,
				startTransition: v,
				viewTransition: b,
				ignoreBlocker: te
			});
		}
	};
	if (H) return {
		...F,
		ref: i,
		href: H,
		...x && { children: x },
		...S && { target: S },
		...C && { disabled: C },
		...w && { style: w },
		...T && { className: T },
		...E && { onClick: E },
		...O && { onBlur: O },
		...k && { onFocus: k },
		...ee && { onMouseEnter: ee },
		...A && { onMouseLeave: A },
		...j && { onTouchStart: j }
	};
	let me = (e) => {
		if (C || J !== "intent") return;
		if (!Y) {
			X();
			return;
		}
		let t = e.currentTarget;
		if (Q.has(t)) return;
		let n = setTimeout(() => {
			Q.delete(t), X();
		}, Y);
		Q.set(t, n);
	}, he = (e) => {
		C || J !== "intent" || X();
	}, ge = (e) => {
		if (C || !J || !Y) return;
		let t = e.currentTarget, n = Q.get(t);
		n && (clearTimeout(n), Q.delete(t));
	};
	return {
		...F,
		...W,
		...G,
		href: V?.href,
		ref: i,
		onClick: $([E, pe]),
		onBlur: $([O, ge]),
		onFocus: $([k, me]),
		onMouseEnter: $([ee, me]),
		onMouseLeave: $([A, ge]),
		onTouchStart: $([j, he]),
		disabled: !!C,
		target: S,
		...q && { style: q },
		...K && { className: K },
		...C && $e,
		...U && et,
		...I && ue && tt
	};
}
var Ze = {}, Qe = { className: "active" }, $e = {
	role: "link",
	"aria-disabled": !0
}, et = {
	"data-status": "active",
	"aria-current": "page"
}, tt = { "data-transitioning": "transitioning" }, Q = /* @__PURE__ */ new WeakMap(), nt = { rootMargin: "100px" }, $ = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function rt(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function it(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var at = u.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = Xe(r, t), o = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return u.createElement("a", t, o);
	}
	return u.createElement(n, a, o);
});
function ot(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/route.js
var st = class extends ke {
	constructor(e) {
		super(e), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Ye({
			...e,
			from: this.id
		}), this.useSearch = (e) => Je({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => qe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ke({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Ge({
			...e,
			from: this.id
		}), this.useNavigate = () => i({ from: this.fullPath }), this.Link = d.forwardRef((e, t) => /* @__PURE__ */ p(at, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ct(e) {
	return new st(e);
}
var lt = class extends Ae {
	constructor(e) {
		super(e), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Ye({
			...e,
			from: this.id
		}), this.useSearch = (e) => Je({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => qe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ke({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Ge({
			...e,
			from: this.id
		}), this.useNavigate = () => i({ from: this.fullPath }), this.Link = d.forwardRef((e, t) => /* @__PURE__ */ p(at, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ut(e) {
	return new lt(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function dt(e) {
	return typeof e == "object" ? new ft(e, { silent: !0 }).createRoute(e) : new ft(e, { silent: !0 }).createRoute;
}
var ft = class {
	constructor(e, t) {
		this.path = e, this.createRoute = (e) => {
			process.env.NODE_ENV !== "production" && (this.silent || console.warn("Warning: FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."));
			let t = ct(e);
			return t.isRoot = !1, t;
		}, this.silent = t?.silent;
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function pt(e, t) {
	let r, i, a, o, s = () => (r ||= e().then((e) => {
		r = void 0, i = e[t ?? "default"];
	}).catch((e) => {
		if (a = e, k(a) && a instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
			let e = `tanstack_router_reload:${a.message}`;
			sessionStorage.getItem(e) || (sessionStorage.setItem(e, "1"), o = !0);
		}
	}), r), c = function(e) {
		if (o) throw window.location.reload(), new Promise(() => {});
		if (a) throw a;
		if (!i) if (n) n(s());
		else throw s();
		return u.createElement(i, e);
	};
	return c.preload = s, c;
}
var mt = dt("/pts/$method")({
	loader: async ({ context: e }) => {
		let { merchantId: t, method: n, userId: i, sessionId: a, currency: o, queryClient: c } = e;
		return { paymentTypes: (await r(c, {
			merchantId: t,
			method: n === s.PAYOUT ? s.PAYOUT : s.PAYIN,
			userId: i,
			sessionId: a,
			currency: o
		})).paymentTypes };
	},
	component: pt(() => import("./_method-GSGRxpv6.js"), "component"),
	pendingComponent: () => /* @__PURE__ */ p(c, { text: "loading.payment_types" }),
	errorComponent: pt(() => import("./_method-CHuyPmH2.js"), "errorComponent")
});
//#endregion
export { ie as A, S as B, le as C, ne as D, M as E, re as F, w as I, ee as L, ae as M, A as N, oe as O, _ as P, h as R, H as S, N as T, ye as _, qe as a, V as b, je as c, Te as d, we as f, X as g, Se as h, Je as i, D as j, O as k, De as l, be as m, dt as n, Ue as o, pe as p, ut as r, Pe as s, mt as t, Ee as u, ge as v, G as w, U as x, he as y, x as z };
