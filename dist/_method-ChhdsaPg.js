import { CashierMethods as e } from "./types/CashierConfig.js";
import { Gr as t, Jr as n, Kr as r, Tn as i, Ur as a, Wr as o, Xr as s, Yr as c, jt as l, kt as u } from "./useBackNavigation-Dx4MaGNK.js";
import * as d from "react";
import f, { useCallback as p, useDebugValue as m, useEffect as h, useMemo as g, useRef as _, useState as v, useSyncExternalStore as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
import { flushSync as ee } from "react-dom";
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function S(e) {
	return e[e.length - 1];
}
function C(e) {
	return typeof e == "function";
}
function te(e, t) {
	return C(e) ? e(t) : e;
}
var w = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
function E(e) {
	for (let t in e) if (w.call(e, t)) return !0;
	return !1;
}
var D = () => Object.create(null), O = (e, t) => k(e, t, D);
function k(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = re(e) && re(i);
	if (!a && !(j(e) && j(i))) return i;
	let o = a ? e : A(e);
	if (!o) return i;
	let s = a ? i : A(i);
	if (!s) return i;
	let c = o.length, l = s.length, u = a ? Array(l) : n(), d = 0;
	for (let t = 0; t < l; t++) {
		let o = a ? t : s[t], l = e[o], f = i[o];
		if (l === f) {
			u[o] = l, (a ? t < c : w.call(e, o)) && d++;
			continue;
		}
		if (l === null || f === null || typeof l != "object" || typeof f != "object") {
			u[o] = f;
			continue;
		}
		let p = k(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function A(e) {
	let t = Object.getOwnPropertyNames(e);
	for (let n of t) if (!T.call(e, n)) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	let r = t;
	for (let t of n) {
		if (!T.call(e, t)) return !1;
		r.push(t);
	}
	return r;
}
function j(e) {
	if (!ne(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!ne(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function ne(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function re(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function M(e, t, n) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0, i = e.length; r < i; r++) if (!M(e[r], t[r], n)) return !1;
		return !0;
	}
	if (j(e) && j(t)) {
		let r = n?.ignoreUndefined ?? !0;
		if (n?.partial) {
			for (let i in t) if ((!r || t[i] !== void 0) && !M(e[i], t[i], n)) return !1;
			return !0;
		}
		let i = 0;
		if (!r) i = Object.keys(e).length;
		else for (let t in e) e[t] !== void 0 && i++;
		let a = 0;
		for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !M(e[o], t[o], n))) return !1;
		return i === a;
	}
	return !1;
}
function ie(e) {
	let t, n, r = new Promise((e, r) => {
		t = e, n = r;
	});
	return r.status = "pending", r.resolve = (n) => {
		r.status = "resolved", r.value = n, t(n), e?.(n);
	}, r.reject = (e) => {
		r.status = "rejected", n(e);
	}, r;
}
function ae(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function oe(e) {
	return !!(e && typeof e == "object" && typeof e.then == "function");
}
function se(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
function ce(e) {
	return e.replace(/[\x00-\x1f\x7f]/g, "");
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
function N(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/invariant.js
function P() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function F(e) {
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
var I = 4, L = 5;
function R(e) {
	let t = e.indexOf("{");
	if (t === -1) return null;
	let n = e.indexOf("}", t);
	return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function z(e, t, n = new Uint16Array(6)) {
	let r = e.indexOf("/", t), i = r === -1 ? e.length : r, a = e.substring(t, i);
	if (!a || !a.includes("$")) return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
	if (a === "$") {
		let r = e.length;
		return n[0] = 2, n[1] = t, n[2] = t, n[3] = r, n[4] = r, n[5] = r, n;
	}
	if (a.charCodeAt(0) === 36) return n[0] = 1, n[1] = t, n[2] = t + 1, n[3] = i, n[4] = i, n[5] = i, n;
	let o = R(a);
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
function B(e, t, n, r, i, a, o) {
	o?.(n);
	let s = r;
	{
		let r = n.fullPath ?? n.from, o = r.length, c = n.options?.caseSensitive ?? e, l = n.options?.params?.parse ?? n.options?.parseParams;
		for (; s < o;) {
			let e = z(r, s, t), o, u = s, d = e[5];
			switch (s = d + 1, a++, e[0]) {
				case 0: {
					let t = r.substring(e[2], e[3]);
					if (c) {
						let e = i.static?.get(t);
						if (e) o = e;
						else {
							i.static ??= /* @__PURE__ */ new Map();
							let e = U(n.fullPath ?? n.from);
							e.parent = i, e.depth = a, o = e, i.static.set(t, e);
						}
					} else {
						let e = t.toLowerCase(), r = i.staticInsensitive?.get(e);
						if (r) o = r;
						else {
							i.staticInsensitive ??= /* @__PURE__ */ new Map();
							let t = U(n.fullPath ?? n.from);
							t.parent = i, t.depth = a, o = t, i.staticInsensitive.set(e, t);
						}
					}
					break;
				}
				case 1: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.dynamic?.find((e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = W(1, n.fullPath ?? n.from, f, p, m);
						o = e, e.depth = a, e.parent = i, i.dynamic ??= [], i.dynamic.push(e);
					}
					break;
				}
				case 3: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), f = c && !!(t || s), p = t ? f ? t : t.toLowerCase() : void 0, m = s ? f ? s : s.toLowerCase() : void 0, h = !l && i.optional?.find((e) => !e.parse && e.caseSensitive === f && e.prefix === p && e.suffix === m);
					if (h) o = h;
					else {
						let e = W(3, n.fullPath ?? n.from, f, p, m);
						o = e, e.parent = i, e.depth = a, i.optional ??= [], i.optional.push(e);
					}
					break;
				}
				case 2: {
					let t = r.substring(u, e[1]), s = r.substring(e[4], d), l = c && !!(t || s), f = t ? l ? t : t.toLowerCase() : void 0, p = s ? l ? s : s.toLowerCase() : void 0, m = W(2, n.fullPath ?? n.from, l, f, p);
					o = m, m.parent = i, m.depth = a, i.wildcard ??= [], i.wildcard.push(m);
				}
			}
			i = o;
		}
		if (l && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf("/") + 1) === 95) {
			let e = U(n.fullPath ?? n.from);
			e.kind = L, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let u = (n.path || !n.children) && !n.isRoot;
		if (u && r.endsWith("/")) {
			let e = U(n.fullPath ?? n.from);
			e.kind = I, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = l ?? null, u && !i.route && (i.route = n, i.fullPath = n.fullPath ?? n.from);
	}
	if (n.children) for (let r of n.children) B(e, t, r, s, i, a, o);
}
function V(e, t) {
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
function H(e) {
	if (e.pathless) for (let t of e.pathless) H(t);
	if (e.static) for (let t of e.static.values()) H(t);
	if (e.staticInsensitive) for (let t of e.staticInsensitive.values()) H(t);
	if (e.dynamic?.length) {
		e.dynamic.sort(V);
		for (let t of e.dynamic) H(t);
	}
	if (e.optional?.length) {
		e.optional.sort(V);
		for (let t of e.optional) H(t);
	}
	if (e.wildcard?.length) {
		e.wildcard.sort(V);
		for (let t of e.wildcard) H(t);
	}
}
function U(e) {
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
function W(e, t, n, r, i) {
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
function me(e, t) {
	let n = U("/"), r = new Uint16Array(6);
	for (let t of e) B(!1, r, t, 1, n, 0);
	H(n), t.masksTree = n, t.flatCache = F(1e3);
}
function he(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n) return n;
	let r = J(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function ge(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = U("/"), B(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), J(r, o, n);
}
function G(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = J(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = _e(a.route)), t.matchCache.set(r, a), a;
}
function K(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function q(e, t = !1, n) {
	let r = U(e.fullPath), i = new Uint16Array(6), a = {}, o = {}, s = 0;
	return B(t, i, e, 1, r, 0, (e) => {
		if (n?.(e, s), e.id in a) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			P();
		}
		if (a[e.id] = e, s !== 0 && e.path) {
			let t = K(e.fullPath);
			(!o[t] || e.fullPath.endsWith("/")) && (o[t] = e);
		}
		s++;
	}), H(r), {
		processedTree: {
			segmentTree: r,
			singleCache: F(1e3),
			matchCache: F(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: a,
		routesByPath: o
	};
}
function J(e, t, n = !1) {
	let r = e.split("/"), i = ye(e, r, t, n);
	if (!i) return null;
	let [a] = Y(e, r, i);
	return {
		route: i.node.route,
		rawParams: a
	};
}
function Y(e, t, n) {
	let r = ve(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === I) break;
		if (u.kind === L) {
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
function _e(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function ve(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function ye(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !S(t), a = i && e !== "/", o = t.length - +!!i, s = [{
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
		if (i.kind === 2 && i.route && !Se(l, n)) continue;
		if (i.parse) {
			if (!xe(e, t, n)) continue;
			_ = n.rawParams, g = n.extract;
		}
		r && i.route && i.kind !== I && Se(c, n) && (c = n);
		let v = u === o;
		if (v && (i.route && (!a || i.kind === I || i.kind === 2) && Se(l, n) && (l = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
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
			if (i.index.parse && (xe(e, t, n) || (r = !1)), r) {
				if (!m && !h && !d && be(p, o)) return n;
				Se(l, n) && (l = n);
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
					optionals: h + X(o, u),
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
				dynamics: m + X(o, u),
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
				statics: p + X(o, u),
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
				statics: p + X(o, u),
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
function X(e, t) {
	return 2 ** (e - t - 1);
}
function be(e, t) {
	return e === 2 ** (t - 1) - 1;
}
function xe(e, t, n) {
	let r, i;
	try {
		[r, i] = Y(e, t, n);
	} catch {
		return null;
	}
	if (n.rawParams = r, n.extract = i, !n.node.parse) return !0;
	try {
		if (n.node.parse(r) === !1) return null;
	} catch {}
	return !0;
}
function Se(e, t) {
	return e ? t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === I) > (e.node.kind === I) || t.node.kind === I == (e.node.kind === I) && t.depth > e.depth))) : !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function Ce(e) {
	return we(e.filter((e) => e !== void 0).join("/"));
}
function we(e) {
	return e.replace(/\/{2,}/g, "/");
}
function Te(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function Ee(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function De(e) {
	return Ee(Te(e));
}
function Oe(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function ke(e, t, n) {
	return Oe(e, n) === Oe(t, n);
}
function Ae({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
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
		for (s = e.split("/"); s.length > 1 && S(s) === "";) s.pop();
		let n = t.split("/");
		for (let e = 0, t = n.length; e < t; e++) {
			let r = n[e];
			r === "" ? e ? e === t - 1 && s.push(r) : s = [r] : r === ".." ? s.pop() : r === "." || s.push(r);
		}
	}
	s.length > 1 && (S(s) === "" ? n === "never" && s.pop() : n === "always" && s.push(""));
	let c = we(s.join("/")) || "/";
	return o && r && r.set(o, c), c;
}
function je(e) {
	let t = new Map(e.map((e) => [encodeURIComponent(e), e])), n = Array.from(t.keys()).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "g");
	return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function Me(e, t, n) {
	let r = t[e];
	return typeof r == "string" ? e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map((e) => Pe(e, n)).join("/") : Pe(r, n) : r;
}
function Ne({ path: e, params: t, decoder: n, ...r }) {
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
		c = z(e, r, c);
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
			let f = Me("_splat", t, n);
			l += "/" + u + f + d;
			continue;
		}
		if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = Me(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
			continue;
		}
		if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = Me(i, t, n) ?? "";
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
function Pe(e, t) {
	let n = encodeURIComponent(e);
	return t?.(n) ?? n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/not-found.js
function Fe(e) {
	return e?.isNotFound === !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var Ie = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function Le(e) {
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
function Re(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var ze = "Error preloading route! ☝️", Be = class {
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
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = Ie;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				P();
			}
			let r = n ? Ie : t?.path;
			r && r !== "/" && (r = Te(r));
			let i = t?.id || r, a = n ? Ie : Ce([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = Ce(["/", a]));
			let o = a === "__root__" ? "/" : Ce([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = Ee(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => Le({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Ve = class extends Be {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function He({ children: e, fallback: t = null }) {
	return Ue() ? /* @__PURE__ */ b(f.Fragment, { children: e }) : /* @__PURE__ */ b(f.Fragment, { children: t });
}
function Ue() {
	return f.useSyncExternalStore(We, () => !0, () => !1);
}
function We() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Ge = d.createContext(void 0), Ke = d.createContext(void 0), qe = Object.is;
function Je(e, t, n, r, i) {
	let a = _(null);
	a.current === null && (a.current = {
		hasValue: !1,
		value: null
	});
	let o = a.current, [s, c] = g(() => {
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
			if (qe(a, t)) return s;
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
	]), l = y(e, s, c);
	return h(() => {
		o.hasValue = !0, o.value = l;
	}, [o, l]), m(l), l;
}
//#endregion
//#region ../../node_modules/@tanstack/react-store/dist/esm/useStore.js
function Ye(e, t) {
	return e === t;
}
function Xe(e, t, n = Ye) {
	let r = p((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = p(() => e?.get(), [e]);
	return Je(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Ze = {
	get: () => void 0,
	subscribe: () => ({ unsubscribe: () => {} })
};
function Z(e) {
	let t = r(), n = d.useContext(e.from ? Ke : Ge), i = e.from ?? n, a = i ? e.from ? t.stores.getRouteMatchStore(i) : t.stores.matchStores.get(i) : void 0, o = d.useRef(void 0);
	return Xe(a ?? Ze, (n) => {
		if ((e.shouldThrow ?? !0) && !n) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
			P();
		}
		if (n === void 0) return;
		let r = e.select ? e.select(n) : n;
		if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
			let e = k(o.current, r);
			return o.current = e, e;
		}
		return r;
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function Qe(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function $e(e) {
	let { select: t, ...n } = e;
	return Z({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function et(e) {
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
function tt(e) {
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
function nt(e) {
	return Z({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function rt(e, t) {
	let n = r(), i = c(t), { activeProps: a, inactiveProps: o, activeOptions: l, to: u, preload: f, preloadDelay: p, preloadIntentProximity: m, hashScrollIntoView: h, replace: g, startTransition: _, resetScroll: v, viewTransition: y, children: b, target: x, disabled: S, style: C, className: w, onClick: T, onBlur: E, onFocus: D, onMouseEnter: O, onMouseLeave: k, onTouchStart: A, ignoreBlocker: j, params: ne, search: re, hash: ie, state: ae, mask: oe, reloadDocument: se, unsafeRelative: ce, from: le, _fromLocation: ue, ...fe } = e, pe = Ue(), N = d.useMemo(() => e, [
		n,
		e.from,
		e._fromLocation,
		e.hash,
		e.to,
		e.search,
		e.params,
		e.state,
		e.mask,
		e.unsafeRelative
	]), P = Xe(n.stores.location, (e) => e, (e, t) => e.href === t.href), F = d.useMemo(() => {
		let e = {
			_fromLocation: P,
			...N
		};
		return n.buildLocation(e);
	}, [
		n,
		P,
		N
	]), I = F.maskedLocation ? F.maskedLocation.publicHref : F.publicHref, L = F.maskedLocation ? F.maskedLocation.external : F.external, R = d.useMemo(() => ut(I, L, n.history, S), [
		S,
		L,
		I,
		n.history
	]), z = d.useMemo(() => {
		if (R?.external) {
			if (de(R.href, n.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${R.href}`);
				return;
			}
			return R.href;
		}
		if (!dt(u) && !(typeof u != "string" || u.indexOf(":") === -1)) try {
			if (new URL(u), de(u, n.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${u}`);
				return;
			}
			return u;
		} catch {}
	}, [
		u,
		R,
		n.protocolAllowlist
	]), B = d.useMemo(() => {
		if (z) return !1;
		if (l?.exact) {
			if (!ke(P.pathname, F.pathname, n.basepath)) return !1;
		} else {
			let e = Oe(P.pathname, n.basepath), t = Oe(F.pathname, n.basepath);
			if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === "/"))) return !1;
		}
		return (l?.includeSearch ?? !0) && !M(P.search, F.search, {
			partial: !l?.exact,
			ignoreUndefined: !l?.explicitUndefined
		}) ? !1 : l?.includeHash ? pe && P.hash === F.hash : !0;
	}, [
		l?.exact,
		l?.explicitUndefined,
		l?.includeHash,
		l?.includeSearch,
		P,
		z,
		pe,
		F.hash,
		F.pathname,
		F.search,
		n.basepath
	]), V = B ? te(a, {}) ?? at : it, H = B ? it : te(o, {}) ?? it, U = [
		w,
		V.className,
		H.className
	].filter(Boolean).join(" "), W = (C || V.style || H.style) && {
		...C,
		...V.style,
		...H.style
	}, [me, he] = d.useState(!1), ge = d.useRef(!1), G = e.reloadDocument || z ? !1 : f ?? n.options.defaultPreload, K = p ?? n.options.defaultPreloadDelay ?? 0, q = d.useCallback(() => {
		n.preloadRoute({
			...N,
			_builtLocation: F
		}).catch((e) => {
			console.warn(e), console.warn(ze);
		});
	}, [
		n,
		N,
		F
	]);
	s(i, d.useCallback((e) => {
		e?.isIntersecting && q();
	}, [q]), lt, { disabled: !!S || G !== "viewport" }), d.useEffect(() => {
		ge.current || !S && G === "render" && (q(), ge.current = !0);
	}, [
		S,
		q,
		G
	]);
	let J = (e) => {
		let t = e.currentTarget.getAttribute("target"), r = x === void 0 ? t : x;
		if (!S && !pt(e) && !e.defaultPrevented && (!r || r === "_self") && e.button === 0) {
			e.preventDefault(), ee(() => {
				he(!0);
			});
			let t = n.subscribe("onResolved", () => {
				t(), he(!1);
			});
			n.navigate({
				...N,
				replace: g,
				resetScroll: v,
				hashScrollIntoView: h,
				startTransition: _,
				viewTransition: y,
				ignoreBlocker: j
			});
		}
	};
	if (z) return {
		...fe,
		ref: i,
		href: z,
		...b && { children: b },
		...x && { target: x },
		...S && { disabled: S },
		...C && { style: C },
		...w && { className: w },
		...T && { onClick: T },
		...E && { onBlur: E },
		...D && { onFocus: D },
		...O && { onMouseEnter: O },
		...k && { onMouseLeave: k },
		...A && { onTouchStart: A }
	};
	let Y = (e) => {
		if (S || G !== "intent") return;
		if (!K) {
			q();
			return;
		}
		let t = e.currentTarget;
		if (Q.has(t)) return;
		let n = setTimeout(() => {
			Q.delete(t), q();
		}, K);
		Q.set(t, n);
	}, _e = (e) => {
		S || G !== "intent" || q();
	}, ve = (e) => {
		if (S || !G || !K) return;
		let t = e.currentTarget, n = Q.get(t);
		n && (clearTimeout(n), Q.delete(t));
	};
	return {
		...fe,
		...V,
		...H,
		href: R?.href,
		ref: i,
		onClick: $([T, J]),
		onBlur: $([E, ve]),
		onFocus: $([D, Y]),
		onMouseEnter: $([O, Y]),
		onMouseLeave: $([k, ve]),
		onTouchStart: $([A, _e]),
		disabled: !!S,
		target: x,
		...W && { style: W },
		...U && { className: U },
		...S && ot,
		...B && st,
		...pe && me && ct
	};
}
var it = {}, at = { className: "active" }, ot = {
	role: "link",
	"aria-disabled": !0
}, st = {
	"data-status": "active",
	"aria-current": "page"
}, ct = { "data-transitioning": "transitioning" }, Q = /* @__PURE__ */ new WeakMap(), lt = { rootMargin: "100px" }, $ = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function ut(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function dt(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var ft = d.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = rt(r, t), o = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return d.createElement("a", t, o);
	}
	return d.createElement(n, a, o);
});
function pt(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/route.js
var mt = class extends Be {
	constructor(e) {
		super(e), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => nt({
			...e,
			from: this.id
		}), this.useSearch = (e) => tt({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => et({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => $e({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Qe({
			...e,
			from: this.id
		}), this.useNavigate = () => t({ from: this.fullPath }), this.Link = f.forwardRef((e, t) => /* @__PURE__ */ b(ft, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ht(e) {
	return new mt(e);
}
var gt = class extends Ve {
	constructor(e) {
		super(e), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => nt({
			...e,
			from: this.id
		}), this.useSearch = (e) => tt({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => et({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => $e({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Qe({
			...e,
			from: this.id
		}), this.useNavigate = () => t({ from: this.fullPath }), this.Link = f.forwardRef((e, t) => /* @__PURE__ */ b(ft, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function _t(e) {
	return new gt(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function vt(e) {
	return new yt(e, { silent: !0 }).createRoute;
}
var yt = class {
	constructor(e, t) {
		this.path = e, this.createRoute = (e) => {
			process.env.NODE_ENV !== "production" && (this.silent || console.warn("Warning: FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."));
			let t = ht(e);
			return t.isRoot = !1, t;
		}, this.silent = t?.silent;
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function bt(e, t) {
	let r, i, a, o, s = () => (r ||= e().then((e) => {
		r = void 0, i = e[t ?? "default"];
	}).catch((e) => {
		if (a = e, ae(a) && a instanceof Error && typeof window < "u" && typeof sessionStorage < "u") {
			let e = `tanstack_router_reload:${a.message}`;
			sessionStorage.getItem(e) || (sessionStorage.setItem(e, "1"), o = !0);
		}
	}), r), c = function(e) {
		if (o) throw window.location.reload(), new Promise(() => {});
		if (a) throw a;
		if (!i) if (n) n(s());
		else throw s();
		return d.createElement(i, e);
	};
	return c.preload = s, c;
}
var xt = "animate-[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both]", St = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, Ct = () => {
	let [e, t] = v(St);
	return h(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
			t(e.matches);
		};
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, []), e;
};
function wt({ label: e = "Loading payment methods", message: t, testId: n = "cashier-fullscreen-loading", loaderSlot: r = "cashier-fullscreen-logo-loader", delayMs: i = 180, onVisibleChange: s }) {
	let c = i > 0, [l, u] = v(null), d = t ?? e;
	h(() => {
		if (!c) return;
		let e = window.setTimeout(() => {
			u(i);
		}, i);
		return () => {
			window.clearTimeout(e);
		};
	}, [i, c]);
	let f = !c || l === i;
	return h(() => {
		s?.(f);
	}, [f, s]), f ? /* @__PURE__ */ x("div", {
		className: o("pc-cashier__fullscreen-loader", "flex h-full min-h-full w-full flex-1 flex-col items-center justify-center gap-4 px-6 py-7 text-[var(--pc-color-text)]"),
		"data-testid": n,
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ b(a, {
			className: "h-16 w-16 text-[var(--pc-color-secondary)]",
			"data-slot": r
		}), t ? /* @__PURE__ */ b("span", {
			className: "text-center text-sm font-medium leading-5 text-[var(--pc-color-text-muted,var(--pc-color-text))]",
			children: t
		}) : /* @__PURE__ */ b("span", {
			className: "sr-only",
			children: d
		})]
	}) : null;
}
function Tt({ isLoading: e, children: t, loaderLabel: n, loaderMessage: r, loaderTestId: i, loaderSlot: a, loaderDelayMs: s }) {
	let [c, l] = v(0), u = Ct(), d = p((e) => {
		e && l((e) => e + 1);
	}, []);
	return e ? /* @__PURE__ */ b(wt, {
		label: n,
		message: r,
		testId: i,
		loaderSlot: a,
		delayMs: s,
		onVisibleChange: d
	}) : /* @__PURE__ */ b("div", {
		"data-slot": "cashier-fullscreen-content-reveal",
		className: o("pc-cashier__fullscreen-content-reveal flex min-h-0 h-full w-full flex-1 flex-col", c > 0 && !u && xt),
		children: t
	}, c);
}
//#endregion
//#region src/routes/pts/$method.tsx
var Et = () => import("./_method-snK9qFDB.js"), Dt = () => import("./_method-BYkcUGTZ.js"), Ot = async (t) => {
	let { merchantId: n, method: r, userId: i, sessionId: a, currency: o, fetchConfig: s, debug: c, queryClient: d } = t, f = {
		merchantId: n,
		method: r === e.PAYOUT ? e.PAYOUT : e.PAYIN,
		userId: i,
		sessionId: a,
		currency: o,
		fetchConfig: s,
		debug: c
	};
	if (d.getQueryState(u(f))?.status === "error") return { paymentTypes: [] };
	try {
		return { paymentTypes: (await l(d, f)).paymentTypes };
	} catch {
		return { paymentTypes: [] };
	}
};
function kt() {
	let { translateKey: e } = i();
	return /* @__PURE__ */ b(wt, {
		label: e("loading.payment_types"),
		testId: "cashier-payment-types-loading"
	});
}
var At = vt("/pts/$method")({
	loader: async ({ context: e }) => Ot(e),
	component: bt(Dt, "component"),
	pendingComponent: kt,
	errorComponent: bt(Et, "errorComponent")
});
//#endregion
export { ue as A, j as B, he as C, q as D, me as E, pe as F, S as H, se as I, te as L, ie as M, fe as N, F as O, M as P, E as R, _e as S, ge as T, O as U, oe as V, k as W, Ne as _, _t as a, De as b, Xe as c, Re as d, Le as f, je as g, we as h, vt as i, N as j, P as k, Ge as l, Fe as m, wt as n, tt as o, Ie as p, Tt as r, et as s, At as t, He as u, Ce as v, G as w, Ee as x, Ae as y, de as z };
