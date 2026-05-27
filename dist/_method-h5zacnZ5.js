import { Cr as e, Dr as t, Er as n, Or as r, kt as i, n as a, wr as o } from "./useBackNavigation-CruLKbMz.js";
import { CashierMethods as s } from "./types/CashierConfig.js";
import * as c from "react";
import l, { useCallback as u, useDebugValue as d, useEffect as f, useMemo as p, useRef as m, useSyncExternalStore as h } from "react";
import { jsx as g } from "react/jsx-runtime";
import { flushSync as _ } from "react-dom";
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function v(e) {
	return e[e.length - 1];
}
function y(e) {
	return typeof e == "function";
}
function b(e, t) {
	return y(e) ? e(t) : e;
}
var ee = Object.prototype.hasOwnProperty, x = Object.prototype.propertyIsEnumerable;
function S(e) {
	for (let t in e) if (ee.call(e, t)) return !0;
	return !1;
}
var C = () => Object.create(null), w = (e, t) => T(e, t, C);
function T(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = k(e) && k(i);
	if (!a && !(D(e) && D(i))) return i;
	let o = a ? e : E(e);
	if (!o) return i;
	let s = a ? i : E(i);
	if (!s) return i;
	let c = o.length, l = s.length, u = a ? Array(l) : n(), d = 0;
	for (let t = 0; t < l; t++) {
		let o = a ? t : s[t], l = e[o], f = i[o];
		if (l === f) {
			u[o] = l, (a ? t < c : ee.call(e, o)) && d++;
			continue;
		}
		if (l === null || f === null || typeof l != "object" || typeof f != "object") {
			u[o] = f;
			continue;
		}
		let p = T(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function E(e) {
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) if (!x.call(e, n)) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	let r = t;
	for (let t of n) {
		if (!x.call(e, t)) return !1;
		r.push(t);
	}
	return r;
}
function D(e) {
	if (!O(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!O(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function O(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function k(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function A(e, t, n) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0, i = e.length; r < i; r++) if (!A(e[r], t[r], n)) return !1;
		return !0;
	}
	if (D(e) && D(t)) {
		let r = n?.ignoreUndefined ?? !0;
		if (n?.partial) {
			for (let i in t) if ((!r || t[i] !== void 0) && !A(e[i], t[i], n)) return !1;
			return !0;
		}
		let i = 0;
		if (!r) i = Object.keys(e).length;
		else for (let t in e) e[t] !== void 0 && i++;
		let a = 0;
		for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !A(e[o], t[o], n))) return !1;
		return i === a;
	}
	return !1;
}
function j(e) {
	let t, n, r = new Promise((e, r) => {
		t = e, n = r;
	});
	return r.status = "pending", r.resolve = (n) => {
		r.status = "resolved", r.value = n, t(n), e?.(n);
	}, r.reject = (e) => {
		r.status = "rejected", n(e);
	}, r;
}
function te(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function ne(e) {
	return !!(e && typeof e == "object" && typeof e.then == "function");
}
function re(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
function ie(e) {
	return e.replace(/[\x00-\x1f\x7f]/g, "");
}
function ae(e) {
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
	return ie(t);
}
var oe = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
function se(e, t) {
	if (!e) return !1;
	try {
		let n = new URL(e);
		return !t.has(n.protocol);
	} catch {
		return !1;
	}
}
function ce(e) {
	if (!e || !/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
		path: e,
		handledProtocolRelativeURL: !1
	};
	let t = /%25|%5C/gi, n = 0, r = "", i;
	for (; (i = t.exec(e)) !== null;) r += ae(e.slice(n, i.index)) + i[0], n = t.lastIndex;
	r += ae(n ? e.slice(n) : e);
	let a = !1;
	return r.startsWith("//") && (a = !0, r = "/" + r.replace(/^\/+/, "")), {
		path: r,
		handledProtocolRelativeURL: a
	};
}
function le(e) {
	return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function ue(e, t) {
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
var P = 4, F = 5;
function I(e) {
	let t = e.indexOf("{");
	if (t === -1) return null;
	let n = e.indexOf("}", t);
	return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function L(e, t, n = new Uint16Array(6)) {
	let r = e.indexOf("/", t), i = r === -1 ? e.length : r, a = e.substring(t, i);
	if (!a || !a.includes("$")) return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
	if (a === "$") {
		let r = e.length;
		return n[0] = 2, n[1] = t, n[2] = t, n[3] = r, n[4] = r, n[5] = r, n;
	}
	if (a.charCodeAt(0) === 36) return n[0] = 1, n[1] = t, n[2] = t + 1, n[3] = i, n[4] = i, n[5] = i, n;
	let o = I(a);
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
function R(e, t, n, r, i, a, o) {
	o?.(n);
	let s = r;
	{
		let r = n.fullPath ?? n.from, o = r.length, c = n.options?.caseSensitive ?? e, l = n.options?.params?.parse ?? n.options?.parseParams;
		for (; s < o;) {
			let e = L(r, s, t), o, u = s, d = e[5];
			switch (s = d + 1, a++, e[0]) {
				case 0: {
					let t = r.substring(e[2], e[3]);
					if (c) {
						let e = i.static?.get(t);
						if (e) o = e;
						else {
							i.static ??= /* @__PURE__ */ new Map();
							let e = V(n.fullPath ?? n.from);
							e.parent = i, e.depth = a, o = e, i.static.set(t, e);
						}
					} else {
						let e = t.toLowerCase(), r = i.staticInsensitive?.get(e);
						if (r) o = r;
						else {
							i.staticInsensitive ??= /* @__PURE__ */ new Map();
							let t = V(n.fullPath ?? n.from);
							t.parent = i, t.depth = a, o = t, i.staticInsensitive.set(e, t);
						}
					}
					break;
				}
				case 1: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.dynamic?.find((e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = H(1, n.fullPath ?? n.from, f, p, m);
						o = e, e.depth = a, e.parent = i, i.dynamic ??= [], i.dynamic.push(e);
					}
					break;
				}
				case 3: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.optional?.find((e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = H(3, n.fullPath ?? n.from, f, p, m);
						o = e, e.parent = i, e.depth = a, i.optional ??= [], i.optional.push(e);
					}
					break;
				}
				case 2: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), l = c && !!(t || s), f = t ? l ? t : t.toLowerCase() : void 0, p = s ? l ? s : s.toLowerCase() : void 0, m = H(2, n.fullPath ?? n.from, l, f, p);
					o = m, m.parent = i, m.depth = a, i.wildcard ??= [], i.wildcard.push(m);
				}
			}
			i = o;
		}
		if (l && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf("/") + 1) === 95) {
			let e = V(n.fullPath ?? n.from);
			e.kind = F, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let u = (n.path || !n.children) && !n.isRoot;
		if (u && r.endsWith("/")) {
			let e = V(n.fullPath ?? n.from);
			e.kind = P, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = l ?? null, u && !i.route && (i.route = n, i.fullPath = n.fullPath ?? n.from);
	}
	if (n.children) for (let r of n.children) R(e, t, r, s, i, a, o);
}
function z(e, t) {
	if (e.parse && !t.parse) return -1;
	if (!e.parse && t.parse) return 1;
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
function B(e) {
	if (e.pathless) for (let t of e.pathless) B(t);
	if (e.static) for (let t of e.static.values()) B(t);
	if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) B(t);
	if (e.dynamic?.length) {
		e.dynamic.sort(z);
		for (let t of e.dynamic) B(t);
	}
	if (e.optional?.length) {
		e.optional.sort(z);
		for (let t of e.optional) B(t);
	}
	if (e.wildcard?.length) {
		e.wildcard.sort(z);
		for (let t of e.wildcard) B(t);
	}
}
function V(e) {
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
		parse: null
	};
}
function H(e, t, n, r, i) {
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
		caseSensitive: n,
		prefix: r,
		suffix: i
	};
}
function U(e, t) {
	let n = V("/"), r = new Uint16Array(6);
	for (let t of e) R(!1, r, t, 1, n, 0);
	B(n), t.masksTree = n, t.flatCache = N(1e3);
}
function W(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n) return n;
	let r = K(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function G(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = V("/"), R(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), K(r, o, n);
}
function de(e, t, n = !1) {
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
	return a && (a.branch = q(a.route)), t.matchCache.set(r, a), a;
}
function fe(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function pe(e, t = !1, n) {
	let r = V(e.fullPath), i = new Uint16Array(6), a = {}, o = {}, s = 0;
	return R(t, i, e, 1, r, 0, (e) => {
		if (n?.(e, s), e.id in a) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			M();
		}
		if (a[e.id] = e, s !== 0 && e.path) {
			let t = fe(e.fullPath);
			(!o[t] || e.fullPath.endsWith("/")) && (o[t] = e);
		}
		s++;
	}), B(r), {
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
	let r = e.split("/"), i = J(e, r, t, n);
	if (!i) return null;
	let [a] = me(e, r, i);
	return {
		route: i.node.route,
		rawParams: a
	};
}
function me(e, t, n) {
	let r = he(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === P) break;
		if (u.kind === F) {
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
function q(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function he(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function J(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !v(t), a = i && e !== "/", o = t.length - +!!i, s = [{
		node: n,
		index: 1,
		skipped: 0,
		depth: 1,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}], c = null, l = null;
	for (; s.length;) {
		let n = s.pop(), { node: i, index: u, skipped: d, depth: f, statics: p, dynamics: m, optionals: h } = n, { extract: g, rawParams: _ } = n;
		if (i.kind === 2 && i.route && !X(l, n)) continue;
		if (i.parse) {
			if (!_e(e, t, n)) continue;
			_ = n.rawParams, g = n.extract;
		}
		r && i.route && i.kind !== P && X(c, n) && (c = n);
		let v = u === o;
		if (v && (i.route && (!a || i.kind === P || i.kind === 2) && X(l, n) && (l = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
		let y = v ? void 0 : t[u], b;
		if (v && i.index) {
			let n = {
				node: i.index,
				index: u,
				skipped: d,
				depth: f + 1,
				statics: p,
				dynamics: m,
				optionals: h,
				extract: g,
				rawParams: _
			}, r = !0;
			if (i.index.parse && (_e(e, t, n) || (r = !1)), r) {
				if (!m && !h && !d && ge(p, o)) return n;
				X(l, n) && (l = n);
			}
		}
		if (i.wildcard) for (let e = i.wildcard.length - 1; e >= 0; e--) {
			let n = i.wildcard[e], { prefix: r, suffix: a } = n;
			if (!(r && (v || !(n.caseSensitive ? y : b ??= y.toLowerCase()).startsWith(r)))) {
				if (a) {
					if (v) continue;
					let e = t.slice(u).join("/").slice(-a.length);
					if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
				}
				s.push({
					node: n,
					index: o,
					skipped: d,
					depth: f + 1,
					statics: p,
					dynamics: m,
					optionals: h,
					extract: g,
					rawParams: _
				});
			}
		}
		if (i.optional) {
			let e = d | 1 << f, t = f + 1;
			for (let n = i.optional.length - 1; n >= 0; n--) {
				let r = i.optional[n];
				s.push({
					node: r,
					index: u,
					skipped: e,
					depth: t,
					statics: p,
					dynamics: m,
					optionals: h,
					extract: g,
					rawParams: _
				});
			}
			if (!v) for (let e = i.optional.length - 1; e >= 0; e--) {
				let n = i.optional[e], { prefix: r, suffix: a } = n;
				if (r || a) {
					let e = n.caseSensitive ? y : b ??= y.toLowerCase();
					if (r && !e.startsWith(r) || a && !e.endsWith(a)) continue;
				}
				s.push({
					node: n,
					index: u + 1,
					skipped: d,
					depth: t,
					statics: p,
					dynamics: m,
					optionals: h + Y(o, u),
					extract: g,
					rawParams: _
				});
			}
		}
		if (!v && i.dynamic && y) for (let e = i.dynamic.length - 1; e >= 0; e--) {
			let t = i.dynamic[e], { prefix: n, suffix: r } = t;
			if (n || r) {
				let e = t.caseSensitive ? y : b ??= y.toLowerCase();
				if (n && !e.startsWith(n) || r && !e.endsWith(r)) continue;
			}
			s.push({
				node: t,
				index: u + 1,
				skipped: d,
				depth: f + 1,
				statics: p,
				dynamics: m + Y(o, u),
				optionals: h,
				extract: g,
				rawParams: _
			});
		}
		if (!v && i.staticInsensitive) {
			let e = i.staticInsensitive.get(b ??= y.toLowerCase());
			e && s.push({
				node: e,
				index: u + 1,
				skipped: d,
				depth: f + 1,
				statics: p + Y(o, u),
				dynamics: m,
				optionals: h,
				extract: g,
				rawParams: _
			});
		}
		if (!v && i.static) {
			let e = i.static.get(y);
			e && s.push({
				node: e,
				index: u + 1,
				skipped: d,
				depth: f + 1,
				statics: p + Y(o, u),
				dynamics: m,
				optionals: h,
				extract: g,
				rawParams: _
			});
		}
		if (i.pathless) {
			let e = f + 1;
			for (let t = i.pathless.length - 1; t >= 0; t--) {
				let n = i.pathless[t];
				s.push({
					node: n,
					index: u,
					skipped: d,
					depth: e,
					statics: p,
					dynamics: m,
					optionals: h,
					extract: g,
					rawParams: _
				});
			}
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
function Y(e, t) {
	return 2 ** (e - t - 1);
}
function ge(e, t) {
	return e === 2 ** (t - 1) - 1;
}
function _e(e, t, n) {
	let r, i;
	try {
		[r, i] = me(e, t, n);
	} catch {
		return null;
	}
	if (n.rawParams = r, n.extract = i, !n.node.parse) return !0;
	try {
		if (n.node.parse(r) === !1) return null;
	} catch {}
	return !0;
}
function X(e, t) {
	return e ? t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === P) > (e.node.kind === P) || t.node.kind === P == (e.node.kind === P) && t.depth > e.depth))) : !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function ve(e) {
	return ye(e.filter((e) => e !== void 0).join("/"));
}
function ye(e) {
	return e.replace(/\/{2,}/g, "/");
}
function be(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function xe(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function Se(e) {
	return xe(be(e));
}
function Ce(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function we(e, t, n) {
	return Ce(e, n) === Ce(t, n);
}
function Te({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
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
		for (s = e.split("/"); s.length > 1 && v(s) === "";) s.pop();
		let n = t.split("/");
		for (let e = 0, t = n.length; e < t; e++) {
			let r = n[e];
			r === "" ? e ? e === t - 1 && s.push(r) : s = [r] : r === ".." ? s.pop() : r === "." || s.push(r);
		}
	}
	s.length > 1 && (v(s) === "" ? n === "never" && s.pop() : n === "always" && s.push(""));
	let c = ye(s.join("/")) || "/";
	return o && r && r.set(o, c), c;
}
function Ee(e) {
	let t = new Map(e.map((e) => [encodeURIComponent(e), e])), n = Array.from(t.keys()).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "g");
	return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function De(e, t, n) {
	let r = t[e];
	return typeof r == "string" ? e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map((e) => ke(e, n)).join("/") : ke(r, n) : r;
}
function Oe({ path: e, params: t, decoder: n, ...r }) {
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
		c = L(e, r, c);
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
			let f = De("_splat", t, n);
			l += "/" + u + f + d;
			continue;
		}
		if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = De(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
			continue;
		}
		if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = De(i, t, n) ?? "";
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
function ke(e, t) {
	let n = encodeURIComponent(e);
	return t?.(n) ?? n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/not-found.js
function Ae(e) {
	return e?.isNotFound === !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var je = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function Me(e) {
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
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = je;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				M();
			}
			let r = n ? je : t?.path;
			r && r !== "/" && (r = be(r));
			let i = t?.id || r, a = n ? je : ve([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = ve(["/", a]));
			let o = a === "__root__" ? "/" : ve([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = xe(o);
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
	return Re() ? /* @__PURE__ */ g(l.Fragment, { children: e }) : /* @__PURE__ */ g(l.Fragment, { children: t });
}
function Re() {
	return l.useSyncExternalStore(ze, () => !0, () => !1);
}
function ze() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Be = c.createContext(void 0), Ve = c.createContext(void 0), He = Object.is;
function Ue(e, t, n, r, i) {
	let a = m(null);
	a.current === null && (a.current = {
		hasValue: !1,
		value: null
	});
	let o = a.current, [s, c] = p(() => {
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
	]), l = h(e, s, c);
	return f(() => {
		o.hasValue = !0, o.value = l;
	}, [o, l]), d(l), l;
}
//#endregion
//#region ../../node_modules/@tanstack/react-store/dist/esm/useStore.js
function We(e, t) {
	return e === t;
}
function Ge(e, t, n = We) {
	let r = u((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = u(() => e?.get(), [e]);
	return Ue(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Ke = {
	get: () => void 0,
	subscribe: () => ({ unsubscribe: () => {} })
};
function Z(e) {
	let t = o(), n = c.useContext(e.from ? Ve : Be), r = e.from ?? n, i = r ? e.from ? t.stores.getRouteMatchStore(r) : t.stores.matchStores.get(r) : void 0, a = c.useRef(void 0);
	return Ge(i ?? Ke, (n) => {
		if ((e.shouldThrow ?? !0) && !n) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
			M();
		}
		if (n === void 0) return;
		let r = e.select ? e.select(n) : n;
		if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
			let e = T(a.current, r);
			return a.current = e, e;
		}
		return r;
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function qe(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function Je(e) {
	let { select: t, ...n } = e;
	return Z({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function Ye(e) {
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
function Xe(e) {
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
function Ze(e) {
	return Z({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function Qe(e, n) {
	let i = o(), a = t(n), { activeProps: s, inactiveProps: l, activeOptions: u, to: d, preload: f, preloadDelay: p, preloadIntentProximity: m, hashScrollIntoView: h, replace: g, startTransition: v, resetScroll: y, viewTransition: ee, children: x, target: S, disabled: C, style: w, className: T, onClick: E, onBlur: D, onFocus: O, onMouseEnter: k, onMouseLeave: j, onTouchStart: te, ignoreBlocker: ne, params: re, search: ie, hash: ae, state: oe, mask: ce, reloadDocument: le, unsafeRelative: ue, from: M, _fromLocation: N, ...P } = e, F = Re(), I = c.useMemo(() => e, [
		i,
		e.from,
		e._fromLocation,
		e.hash,
		e.to,
		e.search,
		e.params,
		e.state,
		e.mask,
		e.unsafeRelative
	]), L = Ge(i.stores.location, (e) => e, (e, t) => e.href === t.href), R = c.useMemo(() => {
		let e = {
			_fromLocation: L,
			...I
		};
		return i.buildLocation(e);
	}, [
		i,
		L,
		I
	]), z = R.maskedLocation ? R.maskedLocation.publicHref : R.publicHref, B = R.maskedLocation ? R.maskedLocation.external : R.external, V = c.useMemo(() => at(z, B, i.history, C), [
		C,
		B,
		z,
		i.history
	]), H = c.useMemo(() => {
		if (V?.external) {
			if (se(V.href, i.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${V.href}`);
				return;
			}
			return V.href;
		}
		if (!ot(d) && !(typeof d != "string" || d.indexOf(":") === -1)) try {
			if (new URL(d), se(d, i.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${d}`);
				return;
			}
			return d;
		} catch {}
	}, [
		d,
		V,
		i.protocolAllowlist
	]), U = c.useMemo(() => {
		if (H) return !1;
		if (u?.exact) {
			if (!we(L.pathname, R.pathname, i.basepath)) return !1;
		} else {
			let e = Ce(L.pathname, i.basepath), t = Ce(R.pathname, i.basepath);
			if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === "/"))) return !1;
		}
		return (u?.includeSearch ?? !0) && !A(L.search, R.search, {
			partial: !u?.exact,
			ignoreUndefined: !u?.explicitUndefined
		}) ? !1 : u?.includeHash ? F && L.hash === R.hash : !0;
	}, [
		u?.exact,
		u?.explicitUndefined,
		u?.includeHash,
		u?.includeSearch,
		L,
		H,
		F,
		R.hash,
		R.pathname,
		R.search,
		i.basepath
	]), W = U ? b(s, {}) ?? et : $e, G = U ? $e : b(l, {}) ?? $e, de = [
		T,
		W.className,
		G.className
	].filter(Boolean).join(" "), fe = (w || W.style || G.style) && {
		...w,
		...W.style,
		...G.style
	}, [pe, K] = c.useState(!1), me = c.useRef(!1), q = e.reloadDocument || H ? !1 : f ?? i.options.defaultPreload, he = p ?? i.options.defaultPreloadDelay ?? 0, J = c.useCallback(() => {
		i.preloadRoute({
			...I,
			_builtLocation: R
		}).catch((e) => {
			console.warn(e), console.warn(Pe);
		});
	}, [
		i,
		I,
		R
	]);
	r(a, c.useCallback((e) => {
		e?.isIntersecting && J();
	}, [J]), it, { disabled: !!C || q !== "viewport" }), c.useEffect(() => {
		me.current || !C && q === "render" && (J(), me.current = !0);
	}, [
		C,
		J,
		q
	]);
	let Y = (e) => {
		let t = e.currentTarget.getAttribute("target"), n = S === void 0 ? t : S;
		if (!C && !ct(e) && !e.defaultPrevented && (!n || n === "_self") && e.button === 0) {
			e.preventDefault(), _(() => {
				K(!0);
			});
			let t = i.subscribe("onResolved", () => {
				t(), K(!1);
			});
			i.navigate({
				...I,
				replace: g,
				resetScroll: y,
				hashScrollIntoView: h,
				startTransition: v,
				viewTransition: ee,
				ignoreBlocker: ne
			});
		}
	};
	if (H) return {
		...P,
		ref: a,
		href: H,
		...x && { children: x },
		...S && { target: S },
		...C && { disabled: C },
		...w && { style: w },
		...T && { className: T },
		...E && { onClick: E },
		...D && { onBlur: D },
		...O && { onFocus: O },
		...k && { onMouseEnter: k },
		...j && { onMouseLeave: j },
		...te && { onTouchStart: te }
	};
	let ge = (e) => {
		if (C || q !== "intent") return;
		if (!he) {
			J();
			return;
		}
		let t = e.currentTarget;
		if (Q.has(t)) return;
		let n = setTimeout(() => {
			Q.delete(t), J();
		}, he);
		Q.set(t, n);
	}, _e = (e) => {
		C || q !== "intent" || J();
	}, X = (e) => {
		if (C || !q || !he) return;
		let t = e.currentTarget, n = Q.get(t);
		n && (clearTimeout(n), Q.delete(t));
	};
	return {
		...P,
		...W,
		...G,
		href: V?.href,
		ref: a,
		onClick: $([E, Y]),
		onBlur: $([D, X]),
		onFocus: $([O, ge]),
		onMouseEnter: $([k, ge]),
		onMouseLeave: $([j, X]),
		onTouchStart: $([te, _e]),
		disabled: !!C,
		target: S,
		...fe && { style: fe },
		...de && { className: de },
		...C && tt,
		...U && nt,
		...F && pe && rt
	};
}
var $e = {}, et = { className: "active" }, tt = {
	role: "link",
	"aria-disabled": !0
}, nt = {
	"data-status": "active",
	"aria-current": "page"
}, rt = { "data-transitioning": "transitioning" }, Q = /* @__PURE__ */ new WeakMap(), it = { rootMargin: "100px" }, $ = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function at(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function ot(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var st = c.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = Qe(r, t), o = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return c.createElement("a", t, o);
	}
	return c.createElement(n, a, o);
});
function ct(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/route.js
var lt = class extends Fe {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Ze({
			...e,
			from: this.id
		}), this.useSearch = (e) => Xe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Ye({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Je({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => qe({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ g(st, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ut(e) {
	return new lt(e);
}
var dt = class extends Ie {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Ze({
			...e,
			from: this.id
		}), this.useSearch = (e) => Xe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Ye({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Je({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => qe({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ g(st, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ft(e) {
	return new dt(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function pt(e) {
	return new mt(e, { silent: !0 }).createRoute;
}
var mt = class {
	constructor(e, t) {
		this.path = e, this.createRoute = (e) => {
			process.env.NODE_ENV !== "production" && (this.silent || console.warn("Warning: FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."));
			let t = ut(e);
			return t.isRoot = !1, t;
		}, this.silent = t?.silent;
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function ht(e, t) {
	let r, i, a, o, s = () => (r ||= e().then((e) => {
		r = void 0, i = e[t ?? "default"];
	}).catch((e) => {
		if (a = e, te(a) && a instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
			let e = `tanstack_router_reload:${a.message}`;
			sessionStorage.getItem(e) || (sessionStorage.setItem(e, "1"), o = !0);
		}
	}), r), l = function(e) {
		if (o) throw window.location.reload(), new Promise(() => {});
		if (a) throw a;
		if (!i) if (n) n(s());
		else throw s();
		return c.createElement(i, e);
	};
	return l.preload = s, l;
}
var gt = pt("/pts/$method")({
	loader: async ({ context: e }) => {
		let { merchantId: t, method: n, userId: r, sessionId: a, currency: o, queryClient: c } = e;
		return { paymentTypes: (await i(c, {
			merchantId: t,
			method: n === s.PAYOUT ? s.PAYOUT : s.PAYIN,
			userId: r,
			sessionId: a,
			currency: o
		})).paymentTypes };
	},
	component: ht(() => import("./_method-x8ecSya9.js"), "component"),
	pendingComponent: () => /* @__PURE__ */ g(a, { text: "loading.payment_types" }),
	errorComponent: ht(() => import("./_method-DNP5pwFt.js"), "errorComponent")
});
//#endregion
export { j as A, v as B, G as C, M as D, N as E, b as F, T as H, S as I, se as L, A as M, le as N, oe as O, re as P, D as R, de as S, pe as T, w as V, Te as _, Ye as a, q as b, Le as c, je as d, Ae as f, ve as g, Oe as h, Xe as i, ce as j, ue as k, Ne as l, Ee as m, pt as n, Ge as o, ye as p, ft as r, Be as s, gt as t, Me as u, Se as v, U as w, W as x, xe as y, ne as z };
