/* CASHIER_CORE_CRYPTO_SELECT=0 */
import { K as e, q as t } from "./usePaymentSelection-BT8H9hee.js";
import * as n from "react";
import r, { useCallback as i, useDebugValue as a, useEffect as o, useMemo as s, useRef as c, useSyncExternalStore as l } from "react";
import { jsx as u } from "react/jsx-runtime";
//#region ../../node_modules/@tanstack/react-router/dist/esm/utils.js
var d = n.use, f = n.useLayoutEffect;
function p(e, t, r) {
	n.useEffect(() => {
		if (!e.current || r || typeof IntersectionObserver != "function") return () => t();
		let n = new IntersectionObserver((e) => {
			t(e.pop());
		}, { rootMargin: "100px" });
		return n.observe(e.current), () => {
			n.disconnect(), t();
		};
	}, [
		t,
		r,
		e
	]);
}
function m(e) {
	let t = n.useRef(null);
	return n.useImperativeHandle(e, () => t.current, []), t;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function h(e) {
	return e[e.length - 1];
}
function g(e, t) {
	return typeof e == "function" ? e(t) : e;
}
var _ = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
function y(e) {
	for (let t in e) if (_.call(e, t)) return !0;
	return !1;
}
var ee = () => Object.create(null), te = (e, t) => b(e, t, ee);
function b(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = w(e) && w(i);
	if (!a && !(S(e) && S(i))) return i;
	let o = a ? e : x(e);
	if (!o) return i;
	let s = a ? i : x(i);
	if (!s) return i;
	let c = o.length, l = s.length, u = a ? Array(l) : n(), d = 0;
	for (let t = 0; t < l; t++) {
		let o = a ? t : s[t], l = e[o], f = i[o];
		if (l === f) {
			u[o] = l, (a ? t < c : _.call(e, o)) && d++;
			continue;
		}
		if (l === null || f === null || typeof l != "object" || typeof f != "object") {
			u[o] = f;
			continue;
		}
		let p = b(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function x(e) {
	let t = Object.keys(e);
	if (t.length !== Object.getOwnPropertyNames(e).length) return !1;
	let n = Object.getOwnPropertySymbols(e);
	if (n.length === 0) return t;
	for (let r of n) {
		if (!v.call(e, r)) return !1;
		t.push(r);
	}
	return t;
}
function S(e) {
	if (!C(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!C(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function C(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function w(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length;
}
function T(e, t, n) {
	if (e === t) return !0;
	if (typeof e != typeof t) return !1;
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1;
		for (let r = 0, i = e.length; r < i; r++) if (!T(e[r], t[r], n)) return !1;
		return !0;
	}
	if (S(e) && S(t)) {
		let r = n?.ignoreUndefined ?? !0;
		if (n?.partial) {
			for (let i in t) if ((!r || t[i] !== void 0) && !T(e[i], t[i], n)) return !1;
			return !0;
		}
		let i = 0;
		if (!r) i = Object.keys(e).length;
		else for (let t in e) e[t] !== void 0 && i++;
		let a = 0;
		for (let o in t) if ((!r || t[o] !== void 0) && (a++, a > i || !T(e[o], t[o], n))) return !1;
		return i === a;
	}
	return !1;
}
function E(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function D(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var O = /[\x00-\x1f\x7f"<>`{}]/g;
function k(e) {
	return e.replace(O, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
}
function ne(e) {
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
	return k(t);
}
var re = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
function ie(e, t) {
	if (!e) return !1;
	try {
		let n = new URL(e);
		return !t.has(n.protocol);
	} catch {
		return !1;
	}
}
function ae(e) {
	if (!e || !/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
		path: e,
		handledProtocolRelativeURL: !1
	};
	let t = /%25|%5C/gi, n = 0, r = "", i;
	for (; (i = t.exec(e)) !== null;) r += ne(e.slice(n, i.index)) + i[0], n = t.lastIndex;
	r += ne(n ? e.slice(n) : e);
	let a = !1;
	return r.startsWith("//") && (a = !0, r = "/" + r.replace(/^\/+/, "")), {
		path: r,
		handledProtocolRelativeURL: a
	};
}
function oe(e) {
	return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function se(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/invariant.js
function ce() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function A(e) {
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
var j = 4, le = 5;
function M(e, t, n = /* @__PURE__ */ new Uint16Array(6)) {
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
			let e = M(r, c, t), n, s = c, l = e[5];
			c = l + 1, a++;
			let f = e[0];
			switch (f) {
				case 0: {
					let t = r.substring(e[2], e[3]), o = t, s;
					u ? s = i.static ??= /* @__PURE__ */ new Map() : (o = t.toLowerCase(), s = i.staticInsensitive ??= /* @__PURE__ */ new Map());
					let c = s.get(o);
					if (c) n = c;
					else {
						let e = P(r);
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
						let e = de(f, r, p, t, c);
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
			let e = P(r);
			e.kind = le, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let f = (n.path || !n.children) && !n.isRoot;
		if (f && r.endsWith("/")) {
			let e = P(r);
			e.kind = j, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = d ?? null, i.priority = s?.params?.priority ?? 0, f && !i.route && (i.route = n, i.fullPath = r);
	}
	if (n.children) for (let r of n.children) N(e, t, r, c, i, a, o, s);
}
function ue(e, t) {
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
function P(e) {
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
function de(e, t, n, r, i) {
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
function F(e, t) {
	let n = P("/"), r = /* @__PURE__ */ new Uint16Array(6), i = [];
	for (let t of e) N(!1, r, t, 1, n, 0, i);
	for (let e of i) e.sort(ue);
	t.masksTree = n, t.flatCache = A(1e3);
}
function fe(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n !== void 0) return n;
	let r = z(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function pe(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = P("/"), N(t, /* @__PURE__ */ new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), z(r, o, n);
}
function I(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = z(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = V(a.route)), t.matchCache.set(r, a), a;
}
function L(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function R(e, t = !1, n) {
	let r = P(e.fullPath), i = /* @__PURE__ */ new Uint16Array(6), a = [], o = {}, s = {}, c = 0;
	N(t, i, e, 1, r, 0, a, (e) => {
		if (n?.(e, c), e.id in o) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			ce();
		}
		if (o[e.id] = e, c !== 0 && e.path) {
			let t = L(e.fullPath);
			(!s[t] || e.fullPath.endsWith("/")) && (s[t] = e);
		}
		c++;
	});
	for (let e of a) e.sort(ue);
	return {
		processedTree: {
			segmentTree: r,
			singleCache: A(1e3),
			matchCache: A(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: o,
		routesByPath: s
	};
}
function z(e, t, n = !1) {
	let r = e.split("/"), i = H(e, r, t, n);
	if (!i) return null;
	let [a] = B(e, r, i);
	return {
		route: i.node.route,
		rawParams: a
	};
}
function B(e, t, n) {
	let r = me(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === j) break;
		if (u.kind === le) {
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
function V(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function me(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function H(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !h(t), a = i && e !== "/", o = t.length - +!!i, s = [{
		node: n,
		index: 1,
		skipped: 0,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}], c = null, l = null;
	for (; s.length;) {
		let n = s.pop(), { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n, { extract: h, rawParams: g } = n;
		if (i.kind === 2 && i.route && !K(l, n)) continue;
		if (i.parse) {
			if (!G(e, t, n)) continue;
			g = n.rawParams, h = n.extract;
		}
		r && i.route && i.kind !== j && K(c, n) && (c = n);
		let _ = u === o;
		if (_ && (i.route && (!a || i.kind === j || i.kind === 2) && K(l, n) && (l = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
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
			if (i.index.parse && (G(e, t, n) || (r = !1)), r) {
				if (!p && !m && !d && W(f, o)) return n;
				K(l, n) && (l = n);
			}
		}
		if (i.wildcard) for (let e = i.wildcard.length - 1; e >= 0; e--) {
			let n = i.wildcard[e], { prefix: r, suffix: a } = n;
			if (!r || !_ && (n.caseSensitive ? v : y ??= v.toLowerCase()).startsWith(r)) {
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
function W(e, t) {
	return e === 2 ** (t - 1) - 1;
}
function G(e, t, n) {
	let r, i;
	try {
		[r, i] = B(e, t, n);
	} catch {
		return null;
	}
	if (n.rawParams = r, n.extract = i, !n.node.parse) return !0;
	try {
		if (n.node.parse(r) === !1) return null;
	} catch {}
	return !0;
}
function K(e, t) {
	return !e || t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === j) > (e.node.kind === j) || t.node.kind === j == (e.node.kind === j) && t.node.depth > e.node.depth)));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function q(e) {
	return J(e.filter((e) => e !== void 0).join("/"));
}
function J(e) {
	return e.replace(/\/{2,}/g, "/");
}
function he(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function ge(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function _e(e) {
	return ge(he(e));
}
function Y(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function ve(e, t, n) {
	return Y(e, n) === Y(t, n);
}
function ye({ base: e, to: t, trailingSlash: n = "never", cache: r }) {
	if (t.includes("//") && (t = J(t)), t.startsWith("/")) return t.length === 1 || n === "preserve" ? t : n === "always" ? t.endsWith("/") ? t : `${t}/` : t.endsWith("/") ? t.slice(0, -1) : t;
	let i = t === ".", a;
	if (r) {
		a = i ? e : e + "\0" + t;
		let n = r.get(a);
		if (n) return n;
	}
	let o;
	if (i) o = e.split("/");
	else {
		for (e.includes("//") && (e = J(e)), o = e.split("/"); o.length > 1 && h(o) === "";) o.pop();
		let n = t.split("/");
		for (let e = 0, t = n.length; e < t; e++) {
			let r = n[e];
			r === "" ? e ? e === t - 1 && o.push(r) : o = [r] : r === ".." ? o.length > 1 ? o.pop() : o = [""] : r === "." || o.push(r);
		}
	}
	o.length > 1 && (h(o) === "" ? n === "never" && o.pop() : n === "always" && o.push(""));
	let s = o.join("/"), c = (i ? J(s) : s) || "/";
	return a && r && r.set(a, c), c;
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
		c = M(e, r, c);
		let o = c[5];
		if (s = o + 1, r === o) continue;
		let u = c[0];
		if (u === 0) l += "/" + e.substring(r, o);
		else if (u === 2) {
			let s = t._splat;
			a._splat = s, a["*"] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o);
			if (!s) {
				i = !0, (u || d) && (l += "/" + u + d);
				continue;
			}
			let f = xe("_splat", t, n);
			l += "/" + u + f + d;
		} else if (u === 1) {
			let s = e.substring(c[2], c[3]);
			!i && !(s in t) && (i = !0), a[s] = t[s];
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = xe(s, t, n) ?? "undefined";
			l += "/" + u + f + d;
		} else if (u === 3) {
			let i = e.substring(c[2], c[3]), s = t[i];
			if (s == null) continue;
			a[i] = s;
			let u = e.substring(r, c[1]), d = e.substring(c[4], o), f = xe(i, t, n) ?? "";
			l += "/" + u + f + d;
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
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var X = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function we(e) {
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
function Te(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var Ee = "Error preloading route! ☝️", De = class {
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
				ce();
			}
			let r = n ? X : t?.path;
			r && r !== "/" && (r = he(r));
			let i = t?.id || r, a = n ? X : q([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = q(["/", a]));
			let o = a === "__root__" ? "/" : q([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = ge(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => we({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Oe = class extends De {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function ke({ children: e, fallback: t = null }) {
	return /* @__PURE__ */ u(r.Fragment, { children: Ae() ? e : t });
}
function Ae() {
	return r.useSyncExternalStore(je, () => !0, () => !1);
}
function je() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var Me = n.createContext(void 0), Ne = n.createContext(void 0), Pe = Object.is;
function Fe(e, t, n, r, i) {
	let u = c(null);
	u.current === null && (u.current = {
		hasValue: !1,
		value: null
	});
	let d = u.current, [f, p] = s(() => {
		let e = !1, a, o, s = (t) => {
			if (!e) {
				e = !0, a = t;
				let n = r(t);
				if (i && d.hasValue) {
					let e = d.value;
					if (i(e, n)) return o = e, e;
				}
				return o = n, n;
			}
			if (Pe(a, t)) return o;
			let n = r(t);
			return i && i(o, n) ? (a = t, o) : (a = t, o = n, n);
		};
		return [() => s(t()), n ? () => s(n()) : void 0];
	}, [
		t,
		n,
		r,
		i,
		d
	]), m = l(e, f, p);
	return o(() => {
		d.hasValue = !0, d.value = m;
	}, [d, m]), a(m), m;
}
//#endregion
//#region ../../node_modules/@tanstack/react-store/dist/esm/useStore.js
function Ie(e, t) {
	return e === t;
}
function Le(e, t, n = Ie) {
	let r = i((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), a = i(() => e?.get(), [e]);
	return Fe(r, a, a, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Re = {};
function ze(e, t) {
	let r = n.useRef();
	return (n) => {
		let i = e?.select ? e.select(n) : n;
		return e?.structuralSharing ?? t.options.defaultStructuralSharing ? r.current = b(r.current, i) : i;
	};
}
function Z(e) {
	let r = t(), i = n.useContext(e.from ? Ne : Me), a = e.from ?? i, o = r.stores.getMatchStore(a), s = ze(e, r), c = Le(o, (e) => e ? s(e) : Re);
	if (c !== Re) return c;
	if (e.shouldThrow ?? !0) {
		if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
		ce();
	}
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderData.js
function Be(e) {
	return Z({
		from: e.from,
		strict: e.strict,
		structuralSharing: e.structuralSharing,
		select: (t) => e.select ? e.select(t.loaderData) : t.loaderData
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLoaderDeps.js
function Ve(e) {
	let { select: t, ...n } = e;
	return Z({
		...n,
		select: (e) => t ? t(e.loaderDeps) : e.loaderDeps
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useParams.js
function He(e) {
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
function Ue(e) {
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
function We(e) {
	return Z({
		...e,
		select: (t) => e.select ? e.select(t.context) : t.context
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/link.js
function Ge(e) {
	let t = n.useRef(e);
	return T(t.current, e, { ignoreUndefined: !1 }) || (t.current = e), t.current;
}
function Ke(e, t) {
	return e[0] === t[0] && e[1] === t[1] && e[2] === t[2];
}
function qe(e, t, n) {
	if (e?.external) {
		if (ie(e.href, n)) {
			process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${e.href}`);
			return;
		}
		return e.href;
	}
	if (!nt(t) && typeof t == "string" && t.indexOf(":") !== -1) try {
		if (new URL(t), ie(t, n)) {
			process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${t}`);
			return;
		}
		return t;
	} catch {}
}
function Je(e, t, n, r, i, a) {
	if (a) return !1;
	if (n?.exact) {
		if (!ve(e.pathname, t.pathname, r)) return !1;
	} else {
		let n = Y(e.pathname, r), i = Y(t.pathname, r);
		if (!n.startsWith(i) || n.length !== i.length && n[i.length] !== "/") return !1;
	}
	return (n?.includeSearch ?? !0) && !T(e.search, t.search, {
		partial: !n?.exact,
		ignoreUndefined: !n?.explicitUndefined
	}) ? !1 : !n?.includeHash || i && e.hash === t.hash;
}
function Ye(e, r) {
	let i = t(), a = m(r), { activeProps: o, inactiveProps: s, activeOptions: c, to: l, preload: u, preloadDelay: d, preloadIntentProximity: f, hashScrollIntoView: h, replace: _, startTransition: v, resetScroll: y, viewTransition: ee, children: te, target: b, disabled: x, style: S, className: C, onClick: w, onBlur: T, onFocus: E, onMouseEnter: D, onMouseLeave: O, onTouchStart: k, ignoreBlocker: ne, params: re, search: ie, hash: ae, state: oe, mask: se, reloadDocument: ce, unsafeRelative: A, from: j, _fromLocation: le, ...M } = e, N = Ae(), ue = Ge(e.search), P = Ge(e.params), de = Ge(c), F = n.useMemo(() => e, [
		i,
		e.from,
		e._fromLocation,
		e.hash,
		e.to,
		ue,
		P,
		e.state,
		e.mask,
		e.unsafeRelative
	]), fe = n.useCallback((e) => {
		let t = i.buildLocation({
			_fromLocation: e,
			...F
		}), n = tt(t.maskedLocation ? t.maskedLocation.publicHref : t.publicHref, t.maskedLocation ? t.maskedLocation.external : t.external, i.history, x), r = qe(n, l, i.protocolAllowlist);
		return [
			n?.href,
			r,
			Je(e, t, de, i.basepath, N, r !== void 0)
		];
	}, [
		de,
		x,
		N,
		F,
		i,
		l
	]), [pe, I, L] = Le(i.stores.location, fe, Ke), R = L ? g(o, {}) ?? Ze : Xe, z = L ? Xe : g(s, {}) ?? Xe, B = [
		C,
		R.className,
		z.className
	].filter(Boolean).join(" "), V = (S || R.style || z.style) && {
		...S,
		...R.style,
		...z.style
	}, me = n.useRef(!1), H = e.reloadDocument || I || x ? !1 : u ?? i.options.defaultPreload, U = d ?? i.options.defaultPreloadDelay ?? 0, W = n.useCallback(() => {
		i.preloadRoute(F).catch((e) => {
			console.warn(e), console.warn(Ee);
		});
	}, [i, F]), G = n.useCallback((e) => {
		e ? e.isIntersecting ?? H === "intent" ? U ? Q.has(a) || Q.set(a, setTimeout(() => {
			Q.delete(a), W();
		}, U)) : W() : e.isIntersecting === !1 && et(a) : et(a);
	}, [
		W,
		a,
		H,
		U
	]);
	p(a, G, H !== "viewport"), n.useEffect(() => {
		me.current || H === "render" && (W(), me.current = !0);
	}, [W, H]);
	let K = (e) => {
		let t = e.currentTarget.getAttribute("target"), n = b === void 0 ? t : b;
		!x && !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (!n || n === "_self") && e.button === 0 && (e.preventDefault(), i.navigate({
			...F,
			replace: _,
			resetScroll: y,
			hashScrollIntoView: h,
			startTransition: v,
			viewTransition: ee,
			ignoreBlocker: ne
		}));
	};
	if (I) return {
		...M,
		ref: a,
		href: I,
		...te && { children: te },
		...b && { target: b },
		...x && { disabled: x },
		...S && { style: S },
		...C && { className: C },
		...w && { onClick: w },
		...T && { onBlur: T },
		...E && { onFocus: E },
		...D && { onMouseEnter: D },
		...O && { onMouseLeave: O },
		...k && { onTouchStart: k }
	};
	let q = () => {
		H === "intent" && W();
	}, J = () => {
		H === "intent" && et(a);
	};
	return {
		...M,
		...R,
		...z,
		href: pe,
		ref: a,
		onClick: $([w, K]),
		onBlur: $([T, J]),
		onFocus: $([E, G]),
		onMouseEnter: $([D, G]),
		onMouseLeave: $([O, J]),
		onTouchStart: $([k, q]),
		disabled: !!x,
		target: b,
		...V && { style: V },
		...B && { className: B },
		...x && Qe,
		...L && $e
	};
}
var Xe = {}, Ze = { className: "active" }, Qe = {
	role: "link",
	"aria-disabled": !0
}, $e = {
	"data-status": "active",
	"aria-current": "page"
}, Q = /* @__PURE__ */ new WeakMap(), et = (e) => {
	clearTimeout(Q.get(e)), Q.delete(e);
}, $ = (e) => (t) => {
	for (let n of e) if (n) {
		if (t.defaultPrevented) return;
		n(t);
	}
};
function tt(e, t, n, r) {
	if (!r) return t ? {
		href: e,
		external: !0
	} : {
		href: n.createHref(e) || "/",
		external: !1
	};
}
function nt(e) {
	if (typeof e != "string") return !1;
	let t = e.charCodeAt(0);
	return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var rt = n.forwardRef((e, t) => {
	let { _asChild: r, ...i } = e, { type: a, ...o } = Ye(i, t), s = typeof i.children == "function" ? i.children({ isActive: o["data-status"] === "active" }) : i.children;
	if (!r) {
		let { disabled: e, ...t } = o;
		return n.createElement("a", t, s);
	}
	return n.createElement(r, o, s);
}), it = class extends De {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => We({
			...e,
			from: this.id
		}), this.useSearch = (e) => Ue({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => He({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ve({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Be({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = r.forwardRef((e, t) => /* @__PURE__ */ u(rt, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function at(e) {
	return new it(e);
}
var ot = class extends Oe {
	constructor(t) {
		super(t), this.useMatch = (e) => Z({
			select: e?.select,
			from: this.id,
			structuralSharing: e?.structuralSharing
		}), this.useRouteContext = (e) => We({
			...e,
			from: this.id
		}), this.useSearch = (e) => Ue({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useParams = (e) => He({
			select: e?.select,
			structuralSharing: e?.structuralSharing,
			from: this.id
		}), this.useLoaderDeps = (e) => Ve({
			...e,
			from: this.id
		}), this.useLoaderData = (e) => Be({
			...e,
			from: this.id
		}), this.useNavigate = () => e({ from: this.fullPath }), this.Link = r.forwardRef((e, t) => /* @__PURE__ */ u(rt, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function st(e) {
	return new ot(e);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/fileRoute.js
function ct(e) {
	return (e) => {
		let t = at(e);
		return t.isRoot = !1, t;
	};
}
//#endregion
export { D as A, R as C, ae as D, se as E, h as F, te as I, b as L, y as M, ie as N, T as O, E as P, d as R, F as S, re as T, ge as _, ze as a, I as b, ke as c, X as d, be as f, _e as g, ye as h, He as i, g as j, oe as k, Te as l, q as m, st as n, Le as o, Se as p, Ue as r, Me as s, ct as t, we as u, V as v, A as w, pe as x, fe as y, f as z };
