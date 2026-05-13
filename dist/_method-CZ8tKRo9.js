import { Ar as e, Fr as t, Nr as n, Ot as r, Pr as i, jr as a, n as o } from "./useBackNavigation-uCdwRjil.js";
import { a as s } from "./defaults-Db9f81OM.js";
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
var x = Object.prototype.hasOwnProperty, S = Object.prototype.propertyIsEnumerable, C = () => Object.create(null), w = (e, t) => T(e, t, C);
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
			u[o] = l, (a ? t < c : x.call(e, o)) && d++;
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
	for (let n of t) if (!S.call(e, n)) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	let r = t;
	for (let t of n) {
		if (!S.call(e, t)) return !1;
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
function ee(e) {
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
function j() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function de(e) {
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
var M = 4, N = 5;
function P(e) {
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
	let o = P(a);
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
			e.kind = N, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let u = (n.path || !n.children) && !n.isRoot;
		if (u && r.endsWith("/")) {
			let e = z(n.fullPath ?? n.from);
			e.kind = M, e.parent = i, a++, e.depth = a, i.index = e, i = e;
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
function fe(e, t) {
	let n = z("/"), r = new Uint16Array(6);
	for (let t of e) I(!1, r, t, 1, n, 0);
	R(n), t.masksTree = n, t.flatCache = de(1e3);
}
function V(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n) return n;
	let r = U(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function H(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = z("/"), I(t, new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), U(r, o, n);
}
function pe(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = U(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = W(a.route)), t.matchCache.set(r, a), a;
}
function me(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function he(e, t = !1, n) {
	let r = z(e.fullPath), i = new Uint16Array(6), a = {}, o = {}, s = 0;
	return I(t, i, e, 1, r, 0, (e) => {
		if (n?.(e, s), e.id in a) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			j();
		}
		if (a[e.id] = e, s !== 0 && e.path) {
			let t = me(e.fullPath);
			(!o[t] || e.fullPath.endsWith("/")) && (o[t] = e);
		}
		s++;
	}), R(r), {
		processedTree: {
			segmentTree: r,
			singleCache: de(1e3),
			matchCache: de(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: a,
		routesByPath: o
	};
}
function U(e, t, n = !1) {
	let r = e.split("/"), i = G(e, r, t, n);
	if (!i) return null;
	let [a] = ge(e, r, i);
	return {
		route: i.node.route,
		rawParams: a,
		parsedParams: i.parsedParams
	};
}
function ge(e, t, n) {
	let r = _e(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === M) break;
		if (u.kind === N) {
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
function W(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function _e(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function G(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !v(t), a = i && e !== "/", o = t.length - +!!i, s = [{
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
			if (!K(e, t, n)) continue;
			v = n.rawParams, _ = n.extract, y = n.parsedParams;
		}
		r && i.route && i.kind !== M && q(l, n) && (l = n);
		let b = d === o;
		if (b && (i.route && !a && q(u, n) && (u = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
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
			if (i.index.skipOnParamError && (K(e, t, n) || (r = !1)), r) {
				if (m === o && !h && !g && !f) return n;
				q(u, n) && (u = n);
			}
		}
		if (i.wildcard && q(c, n)) for (let n of i.wildcard) {
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
			if (!(n.skipOnParamError && !K(e, t, a))) {
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
	if (u && c) return q(c, u) ? u : c;
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
function K(e, t, n) {
	try {
		let [r, i] = ge(e, t, n);
		n.rawParams = r, n.extract = i;
		let a = n.node.parse(r);
		return n.parsedParams = Object.assign(Object.create(null), n.parsedParams, a), !0;
	} catch {
		return null;
	}
}
function q(e, t) {
	return e ? t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === M) > (e.node.kind === M) || t.node.kind === M == (e.node.kind === M) && t.depth > e.depth))) : !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function J(e) {
	return Y(e.filter((e) => e !== void 0).join("/"));
}
function Y(e) {
	return e.replace(/\/{2,}/g, "/");
}
function ve(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function ye(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function be(e) {
	return ye(ve(e));
}
function xe(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function Se(e, t, n) {
	return xe(e, n) === xe(t, n);
}
function Ce({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
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
	l = Y(l);
	let u = l || "/";
	return o && r && r.set(o, u), u;
}
function we(e) {
	let t = new Map(e.map((e) => [encodeURIComponent(e), e])), n = Array.from(t.keys()).map((e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|"), r = new RegExp(n, "g");
	return (e) => e.replace(r, (e) => t.get(e) ?? e);
}
function Te(e, t, n) {
	let r = t[e];
	return typeof r == "string" ? e === "_splat" ? /^[a-zA-Z0-9\-._~!/]*$/.test(r) ? r : r.split("/").map((e) => De(e, n)).join("/") : De(r, n) : r;
}
function Ee({ path: e, params: t, decoder: n, ...r }) {
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
			let f = Te("_splat", t, n);
			l += "/" + u + f + d;
			continue;
		}
		if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = Te(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
			continue;
		}
		if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = Te(i, t, n) ?? "";
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
function De(e, t) {
	let n = encodeURIComponent(e);
	return t?.(n) ?? n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/not-found.js
function Oe(e) {
	return !!e?.isNotFound;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var X = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function ke(e) {
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
function Ae(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var je = "Error preloading route! ☝️", Me = class {
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
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = X;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				j();
			}
			let r = n ? X : t?.path;
			r && r !== "/" && (r = ve(r));
			let i = t?.id || r, a = n ? X : J([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = J(["/", a]));
			let o = a === "__root__" ? "/" : J([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = ye(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => ke({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Ne = class extends Me {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function Pe({ children: e, fallback: t = null }) {
	return Fe() ? /* @__PURE__ */ g(l.Fragment, { children: e }) : /* @__PURE__ */ g(l.Fragment, { children: t });
}
function Fe() {
	return l.useSyncExternalStore(Ie, () => !0, () => !1);
}
function Ie() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Le = c.createContext(void 0), Re = c.createContext(void 0), ze = Object.is;
function Be(e, t, n, r, i) {
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
			if (ze(a, t)) return s;
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
function Ve(e, t) {
	return e === t;
}
function He(e, t, n = Ve) {
	let r = u((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = u(() => e?.get(), [e]);
	return Be(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Ue = {
	state: void 0,
	get: () => void 0,
	subscribe: () => () => {}
};
function Z(e) {
	let t = a(), n = c.useContext(e.from ? Re : Le), r = e.from ?? n, i = r ? e.from ? t.stores.getMatchStoreByRouteId(r) : t.stores.activeMatchStoresById.get(r) : void 0, o = c.useRef(void 0);
	return He(i ?? Ue, (n) => {
		if ((e.shouldThrow ?? !0) && !n) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
			j();
		}
		if (n === void 0) return;
		let r = e.select ? e.select(n) : n;
		if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
			let e = T(o.current, r);
			return o.current = e, e;
		}
		return r;
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function We(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function Ge(e) {
	let { select: t, ...n } = e;
	return Z({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function Ke(e) {
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
function qe(e) {
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
function Je(e) {
	return Z({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function Ye(e, n) {
	let r = a(), o = i(n), { activeProps: s, inactiveProps: l, activeOptions: u, to: d, preload: f, preloadDelay: p, hashScrollIntoView: m, replace: h, startTransition: g, resetScroll: v, viewTransition: y, children: x, target: S, disabled: C, style: w, className: T, onClick: E, onBlur: D, onFocus: O, onMouseEnter: k, onMouseLeave: ee, onTouchStart: te, ignoreBlocker: ne, params: re, search: ie, hash: ae, state: oe, mask: ce, reloadDocument: le, unsafeRelative: ue, from: j, _fromLocation: de, ...M } = e, N = Fe(), P = c.useMemo(() => e, [
		r,
		e.from,
		e._fromLocation,
		e.hash,
		e.to,
		e.search,
		e.params,
		e.state,
		e.mask,
		e.unsafeRelative
	]), F = He(r.stores.location, (e) => e, (e, t) => e.href === t.href), I = c.useMemo(() => {
		let e = {
			_fromLocation: F,
			...P
		};
		return r.buildLocation(e);
	}, [
		r,
		F,
		P
	]), L = I.maskedLocation ? I.maskedLocation.publicHref : I.publicHref, R = I.maskedLocation ? I.maskedLocation.external : I.external, z = c.useMemo(() => nt(L, R, r.history, C), [
		C,
		R,
		L,
		r.history
	]), B = c.useMemo(() => {
		if (z?.external) {
			if (se(z.href, r.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${z.href}`);
				return;
			}
			return z.href;
		}
		if (!rt(d) && !(typeof d != "string" || d.indexOf(":") === -1)) try {
			if (new URL(d), se(d, r.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${d}`);
				return;
			}
			return d;
		} catch {}
	}, [
		d,
		z,
		r.protocolAllowlist
	]), fe = c.useMemo(() => {
		if (B) return !1;
		if (u?.exact) {
			if (!Se(F.pathname, I.pathname, r.basepath)) return !1;
		} else {
			let e = xe(F.pathname, r.basepath), t = xe(I.pathname, r.basepath);
			if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === "/"))) return !1;
		}
		return (u?.includeSearch ?? !0) && !A(F.search, I.search, {
			partial: !u?.exact,
			ignoreUndefined: !u?.explicitUndefined
		}) ? !1 : u?.includeHash ? N && F.hash === I.hash : !0;
	}, [
		u?.exact,
		u?.explicitUndefined,
		u?.includeHash,
		u?.includeSearch,
		F,
		B,
		N,
		I.hash,
		I.pathname,
		I.search,
		r.basepath
	]), V = fe ? b(s, {}) ?? Ze : Xe, H = fe ? Xe : b(l, {}) ?? Xe, pe = [
		T,
		V.className,
		H.className
	].filter(Boolean).join(" "), me = (w || V.style || H.style) && {
		...w,
		...V.style,
		...H.style
	}, [he, U] = c.useState(!1), ge = c.useRef(!1), W = e.reloadDocument || B ? !1 : f ?? r.options.defaultPreload, _e = p ?? r.options.defaultPreloadDelay ?? 0, G = c.useCallback(() => {
		r.preloadRoute({
			...P,
			_builtLocation: I
		}).catch((e) => {
			console.warn(e), console.warn(je);
		});
	}, [
		r,
		P,
		I
	]);
	t(o, c.useCallback((e) => {
		e?.isIntersecting && G();
	}, [G]), tt, { disabled: !!C || W !== "viewport" }), c.useEffect(() => {
		ge.current || !C && W === "render" && (G(), ge.current = !0);
	}, [
		C,
		G,
		W
	]);
	let K = (e) => {
		let t = e.currentTarget.getAttribute("target"), n = S === void 0 ? t : S;
		if (!C && !at(e) && !e.defaultPrevented && (!n || n === "_self") && e.button === 0) {
			e.preventDefault(), _(() => {
				U(!0);
			});
			let t = r.subscribe("onResolved", () => {
				t(), U(!1);
			});
			r.navigate({
				...P,
				replace: h,
				resetScroll: v,
				hashScrollIntoView: m,
				startTransition: g,
				viewTransition: y,
				ignoreBlocker: ne
			});
		}
	};
	if (B) return {
		...M,
		ref: o,
		href: B,
		...x && { children: x },
		...S && { target: S },
		...C && { disabled: C },
		...w && { style: w },
		...T && { className: T },
		...E && { onClick: E },
		...D && { onBlur: D },
		...O && { onFocus: O },
		...k && { onMouseEnter: k },
		...ee && { onMouseLeave: ee },
		...te && { onTouchStart: te }
	};
	let q = (e) => {
		if (C || W !== "intent") return;
		if (!_e) {
			G();
			return;
		}
		let t = e.currentTarget;
		if (Q.has(t)) return;
		let n = setTimeout(() => {
			Q.delete(t), G();
		}, _e);
		Q.set(t, n);
	}, J = (e) => {
		C || W !== "intent" || G();
	}, Y = (e) => {
		if (C || !W || !_e) return;
		let t = e.currentTarget, n = Q.get(t);
		n && (clearTimeout(n), Q.delete(t));
	};
	return {
		...M,
		...V,
		...H,
		href: z?.href,
		ref: o,
		onClick: $([E, K]),
		onBlur: $([D, Y]),
		onFocus: $([O, q]),
		onMouseEnter: $([k, q]),
		onMouseLeave: $([ee, Y]),
		onTouchStart: $([te, J]),
		disabled: !!C,
		target: S,
		...me && { style: me },
		...pe && { className: pe },
		...C && Qe,
		...fe && $e,
		...N && he && et
	};
}
var Xe = {}, Ze = { className: "active" }, Qe = {
	role: "link",
	"aria-disabled": !0
}, $e = {
	"data-status": "active",
	"aria-current": "page"
}, et = { "data-transitioning": "transitioning" }, Q = /* @__PURE__ */ new WeakMap(), tt = { rootMargin: "100px" }, $ = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function nt(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function rt(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var it = c.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = Ye(r, t), o = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return c.createElement("a", t, o);
	}
	return c.createElement(n, a, o);
});
function at(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/route.js
var ot = class extends Me {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Je({
			...e,
			from: this.id
		}), this.useSearch = (e) => qe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Ke({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ge({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => We({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ g(it, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function st(e) {
	return new ot(e);
}
var ct = class extends Ne {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => Je({
			...e,
			from: this.id
		}), this.useSearch = (e) => qe({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => Ke({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ge({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => We({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ g(it, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function lt(e) {
	return new ct(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function ut(e) {
	return typeof e == "object" ? new dt(e, { silent: !0 }).createRoute(e) : new dt(e, { silent: !0 }).createRoute;
}
var dt = class {
	constructor(e, t) {
		this.path = e, this.createRoute = (e) => {
			process.env.NODE_ENV !== "production" && (this.silent || console.warn("Warning: FileRoute is deprecated and will be removed in the next major version. Use the createFileRoute(path)(options) function instead."));
			let t = st(e);
			return t.isRoot = !1, t;
		}, this.silent = t?.silent;
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function ft(e, t) {
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
var pt = ut("/pts/$method")({
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
	component: ft(() => import("./_method-DcMgbkrF.js"), "component"),
	pendingComponent: () => /* @__PURE__ */ g(o, { text: "loading.payment_types" }),
	errorComponent: ft(() => import("./_method-t7EEERJV.js"), "errorComponent")
});
//#endregion
export { ce as A, T as B, fe as C, oe as D, j as E, se as F, D as I, ne as L, le as M, re as N, ue as O, b as P, v as R, H as S, de as T, Ce as _, Ke as a, V as b, Pe as c, X as d, Oe as f, J as g, Ee as h, qe as i, A as j, ee as k, Ae as l, we as m, ut as n, He as o, Y as p, lt as r, Le as s, pt as t, ke as u, be as v, he as w, pe as x, ye as y, w as z };
