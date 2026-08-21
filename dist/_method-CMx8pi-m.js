import { CashierMethods as e } from "./types/CashierConfig.js";
import { Bn as t, Or as n, ai as r, ii as i, in as a, on as o, ri as s } from "./inlinePaymentSubmit-D-5pD47f.js";
import * as c from "react";
import l, { useCallback as u, useDebugValue as d, useEffect as f, useLayoutEffect as p, useMemo as m, useRef as h, useState as g, useSyncExternalStore as _ } from "react";
import { jsx as v, jsxs as y } from "react/jsx-runtime";
import { flushSync as ee } from "react-dom";
//#region ../../node_modules/@tanstack/react-router/dist/esm/utils.js
var b = c.use, x = c.useLayoutEffect;
function te(e, t, n = {}, r) {
	c.useEffect(() => {
		if (!e.current || r || typeof IntersectionObserver != "function") return;
		let i = new IntersectionObserver(([e]) => {
			t(e);
		}, n);
		return i.observe(e.current), () => {
			i.disconnect();
		};
	}, [
		t,
		r,
		n,
		e
	]);
}
function ne(e) {
	let t = c.useRef(null);
	return c.useImperativeHandle(e, () => t.current, []), t;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/utils.js
function S(e) {
	return e[e.length - 1];
}
function C(e) {
	return typeof e == "function";
}
function re(e, t) {
	return C(e) ? e(t) : e;
}
var w = Object.prototype.hasOwnProperty, T = Object.prototype.propertyIsEnumerable;
function E(e) {
	for (let t in e) if (w.call(e, t)) return !0;
	return !1;
}
var ie = () => Object.create(null), D = (e, t) => O(e, t, ie);
function O(e, t, n = () => ({}), r = 0) {
	if (e === t) return e;
	if (r > 500) return t;
	let i = t, a = ce(e) && ce(i);
	if (!a && !(oe(e) && oe(i))) return i;
	let o = a ? e : ae(e);
	if (!o) return i;
	let s = a ? i : ae(i);
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
		let p = O(l, f, n, r + 1);
		u[o] = p, p === l && d++;
	}
	return c === l && d === c ? e : u;
}
function ae(e) {
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
function oe(e) {
	if (!se(e)) return !1;
	let t = e.constructor;
	if (t === void 0) return !0;
	let n = t.prototype;
	return !(!se(n) || !n.hasOwnProperty("isPrototypeOf"));
}
function se(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function ce(e) {
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
	if (oe(e) && oe(t)) {
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
function le(e) {
	return typeof e?.message == "string" ? e.message.startsWith("Failed to fetch dynamically imported module") || e.message.startsWith("error loading dynamically imported module") || e.message.startsWith("Importing a module script failed") : !1;
}
function ue(e, t) {
	for (let n = e.length - 1; n >= 0; n--) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var de = /[\x00-\x1f\x7f"<>`{}]/g;
function fe(e) {
	return e.replace(de, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0"));
}
function pe(e) {
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
	return fe(t);
}
var me = [
	"http:",
	"https:",
	"mailto:",
	"tel:"
];
function he(e, t) {
	if (!e) return !1;
	try {
		let n = new URL(e);
		return !t.has(n.protocol);
	} catch {
		return !1;
	}
}
function A(e) {
	if (!e || !/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//")) return {
		path: e,
		handledProtocolRelativeURL: !1
	};
	let t = /%25|%5C/gi, n = 0, r = "", i;
	for (; (i = t.exec(e)) !== null;) r += pe(e.slice(n, i.index)) + i[0], n = t.lastIndex;
	r += pe(n ? e.slice(n) : e);
	let a = !1;
	return r.startsWith("//") && (a = !0, r = "/" + r.replace(/^\/+/, "")), {
		path: r,
		handledProtocolRelativeURL: a
	};
}
function j(e) {
	return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function M(e, t) {
	if (e === t) return !0;
	if (e.length !== t.length) return !1;
	for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/invariant.js
function N() {
	throw Error("Invariant failed");
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/lru-cache.js
function P(e) {
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
var F = 4, I = 5;
function L(e) {
	let t = e.indexOf("{");
	if (t === -1) return null;
	let n = e.indexOf("}", t);
	return n === -1 || t + 1 >= e.length ? null : [t, n];
}
function R(e, t, n = /* @__PURE__ */ new Uint16Array(6)) {
	let r = e.indexOf("/", t), i = r === -1 ? e.length : r, a = e.substring(t, i);
	if (!a || !a.includes("$")) return n[0] = 0, n[1] = t, n[2] = t, n[3] = i, n[4] = i, n[5] = i, n;
	if (a === "$") {
		let r = e.length;
		return n[0] = 2, n[1] = t, n[2] = t, n[3] = r, n[4] = r, n[5] = r, n;
	}
	if (a.charCodeAt(0) === 36) return n[0] = 1, n[1] = t, n[2] = t + 1, n[3] = i, n[4] = i, n[5] = i, n;
	let o = L(a);
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
function z(e, t, n, r, i, a, o, s) {
	s?.(n);
	let c = r;
	{
		let r = n.fullPath ?? n.from, s = n.options, l = r.length, u = s?.caseSensitive ?? e, d = s?.params?.parse ?? s?.parseParams;
		for (; c < l;) {
			let e = R(r, c, t), n, s = c, l = e[5];
			c = l + 1, a++;
			let f = e[0];
			switch (f) {
				case 0: {
					let t = r.substring(e[2], e[3]), o = t, s;
					u ? s = i.static ??= /* @__PURE__ */ new Map() : (o = t.toLowerCase(), s = i.staticInsensitive ??= /* @__PURE__ */ new Map());
					let c = s.get(o);
					if (c) n = c;
					else {
						let e = V(r);
						e.parent = i, e.depth = a, n = e, s.set(o, e);
					}
					break;
				}
				case 1:
				case 3:
				case 2: {
					let t = r.substring(s, e[1]), c = r.substring(e[4], l), p = u && !!(t || c), m = t ? p ? t : t.toLowerCase() : void 0, h = c ? p ? c : c.toLowerCase() : void 0, g = f === 1 ? i.dynamic : f === 3 ? i.optional : i.wildcard, _ = f !== 2 && !d && g?.find((e) => !e.parse && e.caseSensitive === p && e.prefix === m && e.suffix === h);
					if (_) n = _;
					else {
						let e = ge(f, r, p, m, h);
						n = e, e.parent = i, e.depth = a;
						let t;
						t = f === 1 ? i.dynamic ??= [] : f === 3 ? i.optional ??= [] : i.wildcard ??= [], t.push(e), t.length === 2 && o?.push(t);
					}
					break;
				}
			}
			i = n;
		}
		if (d && n.children && !n.isRoot && n.id && n.id.charCodeAt(n.id.lastIndexOf("/") + 1) === 95) {
			let e = V(r);
			e.kind = I, e.parent = i, a++, e.depth = a, i.pathless ??= [], i.pathless.push(e), i = e;
		}
		let f = (n.path || !n.children) && !n.isRoot;
		if (f && r.endsWith("/")) {
			let e = V(r);
			e.kind = F, e.parent = i, a++, e.depth = a, i.index = e, i = e;
		}
		i.parse = d ?? null, i.priority = s?.params?.priority ?? 0, f && !i.route && (i.route = n, i.fullPath = r);
	}
	if (n.children) for (let r of n.children) z(e, t, r, c, i, a, o, s);
}
function B(e, t) {
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
		parse: null,
		priority: 0
	};
}
function ge(e, t, n, r, i) {
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
function _e(e, t) {
	let n = V("/"), r = /* @__PURE__ */ new Uint16Array(6), i = [];
	for (let t of e) z(!1, r, t, 1, n, 0, i);
	for (let e of i) e.sort(B);
	t.masksTree = n, t.flatCache = P(1e3);
}
function ve(e, t) {
	e ||= "/";
	let n = t.flatCache.get(e);
	if (n) return n;
	let r = G(e, t.masksTree);
	return t.flatCache.set(e, r), r;
}
function ye(e, t, n, r, i) {
	e ||= "/", r ||= "/";
	let a = t ? `case\0${e}` : e, o = i.singleCache.get(a);
	return o || (o = V("/"), z(t, /* @__PURE__ */ new Uint16Array(6), { from: e }, 1, o, 0), i.singleCache.set(a, o)), G(r, o, n);
}
function H(e, t, n = !1) {
	let r = n ? e : `nofuzz\0${e}`, i = t.matchCache.get(r);
	if (i !== void 0) return i;
	e ||= "/";
	let a;
	try {
		a = G(e, t.segmentTree, n);
	} catch (e) {
		if (e instanceof URIError) a = null;
		else throw e;
	}
	return a && (a.branch = be(a.route)), t.matchCache.set(r, a), a;
}
function U(e) {
	return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function W(e, t = !1, n) {
	let r = V(e.fullPath), i = /* @__PURE__ */ new Uint16Array(6), a = [], o = {}, s = {}, c = 0;
	z(t, i, e, 1, r, 0, a, (e) => {
		if (n?.(e, c), e.id in o) {
			if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Duplicate routes found with id: ${String(e.id)}`);
			N();
		}
		if (o[e.id] = e, c !== 0 && e.path) {
			let t = U(e.fullPath);
			(!s[t] || e.fullPath.endsWith("/")) && (s[t] = e);
		}
		c++;
	});
	for (let e of a) e.sort(B);
	return {
		processedTree: {
			segmentTree: r,
			singleCache: P(1e3),
			matchCache: P(1e3),
			flatCache: null,
			masksTree: null
		},
		routesById: o,
		routesByPath: s
	};
}
function G(e, t, n = !1) {
	let r = e.split("/"), i = Se(e, r, t, n);
	if (!i) return null;
	let [a] = K(e, r, i);
	return {
		route: i.node.route,
		rawParams: a
	};
}
function K(e, t, n) {
	let r = xe(n.node), i = null, a = Object.create(null), o = n.extract?.part ?? 0, s = n.extract?.node ?? 0, c = n.extract?.path ?? 0, l = n.extract?.segment ?? 0;
	for (; s < r.length; o++, s++, c++, l++) {
		let u = r[s];
		if (u.kind === F) break;
		if (u.kind === I) {
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
function be(e) {
	let t = [e];
	for (; e.parentRoute;) e = e.parentRoute, t.push(e);
	return t.reverse(), t;
}
function xe(e) {
	let t = Array(e.depth + 1);
	do
		t[e.depth] = e, e = e.parent;
	while (e);
	return t;
}
function Se(e, t, n, r) {
	if (e === "/" && n.index) return {
		node: n.index,
		skipped: 0
	};
	let i = !S(t), a = i && e !== "/", o = t.length - +!!i, s = [{
		node: n,
		index: 1,
		skipped: 0,
		statics: 0,
		dynamics: 0,
		optionals: 0
	}], c = null, l = null;
	for (; s.length;) {
		let n = s.pop(), { node: i, index: u, skipped: d, statics: f, dynamics: p, optionals: m } = n, { extract: h, rawParams: g } = n;
		if (i.kind === 2 && i.route && !J(l, n)) continue;
		if (i.parse) {
			if (!we(e, t, n)) continue;
			g = n.rawParams, h = n.extract;
		}
		r && i.route && i.kind !== F && J(c, n) && (c = n);
		let _ = u === o;
		if (_ && (i.route && (!a || i.kind === F || i.kind === 2) && J(l, n) && (l = n), !i.optional && !i.wildcard && !i.index && !i.pathless)) continue;
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
			if (i.index.parse && (we(e, t, n) || (r = !1)), r) {
				if (!p && !m && !d && Ce(f, o)) return n;
				J(l, n) && (l = n);
			}
		}
		if (i.wildcard) for (let e = i.wildcard.length - 1; e >= 0; e--) {
			let n = i.wildcard[e], { prefix: r, suffix: a } = n;
			if (!(r && (_ || !(n.caseSensitive ? v : y ??= v.toLowerCase()).startsWith(r)))) {
				if (a) {
					if (_) continue;
					let e = t.slice(u).join("/").slice(-a.length);
					if ((n.caseSensitive ? e : e.toLowerCase()) !== a) continue;
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
					if (n && !e.startsWith(n) || r && !e.endsWith(r)) continue;
				}
				s.push({
					node: t,
					index: u + 1,
					skipped: d,
					statics: f,
					dynamics: p,
					optionals: m + q(o, u),
					extract: h,
					rawParams: g
				});
			}
		}
		if (!_ && i.dynamic && v) for (let e = i.dynamic.length - 1; e >= 0; e--) {
			let t = i.dynamic[e], { prefix: n, suffix: r } = t;
			if (n || r) {
				let e = t.caseSensitive ? v : y ??= v.toLowerCase();
				if (n && !e.startsWith(n) || r && !e.endsWith(r)) continue;
			}
			s.push({
				node: t,
				index: u + 1,
				skipped: d,
				statics: f,
				dynamics: p + q(o, u),
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
				statics: f + q(o, u),
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
				statics: f + q(o, u),
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
function q(e, t) {
	return 2 ** (e - t - 1);
}
function Ce(e, t) {
	return e === 2 ** (t - 1) - 1;
}
function we(e, t, n) {
	let r, i;
	try {
		[r, i] = K(e, t, n);
	} catch {
		return null;
	}
	if (n.rawParams = r, n.extract = i, !n.node.parse) return !0;
	try {
		if (n.node.parse(r) === !1) return null;
	} catch {}
	return !0;
}
function J(e, t) {
	return !e || t.statics > e.statics || t.statics === e.statics && (t.dynamics > e.dynamics || t.dynamics === e.dynamics && (t.optionals > e.optionals || t.optionals === e.optionals && ((t.node.kind === F) > (e.node.kind === F) || t.node.kind === F == (e.node.kind === F) && t.node.depth > e.node.depth)));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/path.js
function Y(e) {
	return Te(e.filter((e) => e !== void 0).join("/"));
}
function Te(e) {
	return e.replace(/\/{2,}/g, "/");
}
function Ee(e) {
	return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function De(e) {
	let t = e.length;
	return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function Oe(e) {
	return De(Ee(e));
}
function X(e, t) {
	return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function ke(e, t, n) {
	return X(e, n) === X(t, n);
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
	let c = Te(s.join("/")) || "/";
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
		c = R(e, r, c);
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
//#region ../../node_modules/@tanstack/router-core/dist/esm/root.js
var Fe = "__root__";
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/redirect.js
function Ie(e) {
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
function Le(e) {
	return e instanceof Response && !!e.options;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/link.js
var Re = "Error preloading route! ☝️", ze = class {
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
			if (this.parentRoute = this.options.getParentRoute?.(), n) this._path = Fe;
			else if (!this.parentRoute) {
				if (process.env.NODE_ENV !== "production") throw Error("Invariant failed: Child Route instances must pass a 'getParentRoute: () => ParentRoute' option that returns a Route instance.");
				N();
			}
			let r = n ? Fe : t?.path;
			r && r !== "/" && (r = Ee(r));
			let i = t?.id || r, a = n ? Fe : Y([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, i]);
			r === "__root__" && (r = "/"), a !== "__root__" && (a = Y(["/", a]));
			let o = a === "__root__" ? "/" : Y([this.parentRoute.fullPath, r]);
			this._path = r, this._id = a, this._fullPath = o, this._to = De(o);
		}, this.addChildren = (e) => this._addFileChildren(e), this._addFileChildren = (e) => (Array.isArray(e) && (this.children = e), typeof e == "object" && e && (this.children = Object.values(e)), this), this._addFileTypes = () => this, this.updateLoader = (e) => (Object.assign(this.options, e), this), this.update = (e) => (Object.assign(this.options, e), this), this.lazy = (e) => (this.lazyFn = e, this), this.redirect = (e) => Ie({
			from: this.fullPath,
			...e
		}), this.options = e || {}, this.isRoot = !e?.getParentRoute, e?.id && e?.path) throw Error("Route cannot have both an 'id' and a 'path' option.");
	}
}, Be = class extends ze {
	constructor(e) {
		super(e);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/ClientOnly.js
function Ve({ children: e, fallback: t = null }) {
	return /* @__PURE__ */ v(l.Fragment, { children: He() ? e : t });
}
function He() {
	return l.useSyncExternalStore(Ue, () => !0, () => !1);
}
function Ue() {
	return () => {};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/matchContext.js
var We = c.createContext(void 0), Ge = c.createContext(void 0), Ke = Object.is;
function qe(e, t, n, r, i) {
	let a = h(null);
	a.current === null && (a.current = {
		hasValue: !1,
		value: null
	});
	let o = a.current, [s, c] = m(() => {
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
			if (Ke(a, t)) return s;
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
	]), l = _(e, s, c);
	return f(() => {
		o.hasValue = !0, o.value = l;
	}, [o, l]), d(l), l;
}
//#endregion
//#region ../../node_modules/@tanstack/react-store/dist/esm/useStore.js
function Je(e, t) {
	return e === t;
}
function Ye(e, t, n = Je) {
	let r = u((t) => {
		if (!e) return () => {};
		let { unsubscribe: n } = e.subscribe(t);
		return n;
	}, [e]), i = u(() => e?.get(), [e]);
	return qe(r, i, i, t, n);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useMatch.js
var Xe = {};
function Ze(e, t) {
	let n = c.useRef();
	return (r) => {
		let i = e?.select ? e.select(r) : r;
		return e?.structuralSharing ?? t.options.defaultStructuralSharing ? n.current = O(n.current, i) : i;
	};
}
function Z(e) {
	let t = r(), n = c.useContext(e.from ? Ge : We), i = e.from ?? n, a = t.stores.getMatchStore(i), o = Ze(e, t), s = Ye(a, (e) => e ? o(e) : Xe);
	if (s !== Xe) return s;
	if (e.shouldThrow ?? !0) {
		if (process.env.NODE_ENV !== "production") throw Error(`Invariant failed: Could not find ${e.from ? `an active match from "${e.from}"` : "a nearest match!"}`);
		N();
	}
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
	let n = r(), i = ne(t), { activeProps: a, inactiveProps: o, activeOptions: s, to: l, preload: u, preloadDelay: d, preloadIntentProximity: f, hashScrollIntoView: p, replace: m, startTransition: h, resetScroll: g, viewTransition: _, children: v, target: y, disabled: b, style: x, className: S, onClick: C, onBlur: w, onFocus: T, onMouseEnter: E, onMouseLeave: ie, onTouchStart: D, ignoreBlocker: O, params: ae, search: oe, hash: se, state: ce, mask: le, reloadDocument: ue, unsafeRelative: de, from: fe, _fromLocation: pe, ...me } = e, A = He(), j = c.useMemo(() => e, [
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
	]), M = Ye(n.stores.location, (e) => e, (e, t) => e.href === t.href), N = c.useMemo(() => {
		let e = {
			_fromLocation: M,
			...j
		};
		return n.buildLocation(e);
	}, [
		n,
		M,
		j
	]), P = N.maskedLocation ? N.maskedLocation.publicHref : N.publicHref, F = N.maskedLocation ? N.maskedLocation.external : N.external, I = c.useMemo(() => ut(P, F, n.history, b), [
		b,
		F,
		P,
		n.history
	]), L = c.useMemo(() => {
		if (I?.external) {
			if (he(I.href, n.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${I.href}`);
				return;
			}
			return I.href;
		}
		if (!dt(l) && typeof l == "string" && l.indexOf(":") !== -1) try {
			if (new URL(l), he(l, n.protocolAllowlist)) {
				process.env.NODE_ENV !== "production" && console.warn(`Blocked Link with dangerous protocol: ${l}`);
				return;
			}
			return l;
		} catch {}
	}, [
		l,
		I,
		n.protocolAllowlist
	]), R = c.useMemo(() => {
		if (L) return !1;
		if (s?.exact) {
			if (!ke(M.pathname, N.pathname, n.basepath)) return !1;
		} else {
			let e = X(M.pathname, n.basepath), t = X(N.pathname, n.basepath);
			if (!(e.startsWith(t) && (e.length === t.length || e[t.length] === "/"))) return !1;
		}
		return (s?.includeSearch ?? !0) && !k(M.search, N.search, {
			partial: !s?.exact,
			ignoreUndefined: !s?.explicitUndefined
		}) ? !1 : !s?.includeHash || A && M.hash === N.hash;
	}, [
		s?.exact,
		s?.explicitUndefined,
		s?.includeHash,
		s?.includeSearch,
		M,
		L,
		A,
		N.hash,
		N.pathname,
		N.search,
		n.basepath
	]), z = R ? re(a, {}) ?? at : it, B = R ? it : re(o, {}) ?? it, V = [
		S,
		z.className,
		B.className
	].filter(Boolean).join(" "), ge = (x || z.style || B.style) && {
		...x,
		...z.style,
		...B.style
	}, [_e, ve] = c.useState(!1), ye = c.useRef(!1), H = e.reloadDocument || L ? !1 : u ?? n.options.defaultPreload, U = d ?? n.options.defaultPreloadDelay ?? 0, W = c.useCallback(() => {
		n.preloadRoute({
			...j,
			_builtLocation: N
		}).catch((e) => {
			console.warn(e), console.warn(Re);
		});
	}, [
		n,
		j,
		N
	]);
	te(i, c.useCallback((e) => {
		e?.isIntersecting && W();
	}, [W]), lt, !!b || H !== "viewport"), c.useEffect(() => {
		ye.current || !b && H === "render" && (W(), ye.current = !0);
	}, [
		b,
		W,
		H
	]);
	let G = (e) => {
		let t = e.currentTarget.getAttribute("target"), r = y === void 0 ? t : y;
		if (!b && !pt(e) && !e.defaultPrevented && (!r || r === "_self") && e.button === 0) {
			e.preventDefault(), ee(() => {
				ve(!0);
			});
			let t = n.subscribe("onResolved", () => {
				t(), ve(!1);
			});
			n.navigate({
				...j,
				replace: m,
				resetScroll: g,
				hashScrollIntoView: p,
				startTransition: h,
				viewTransition: _,
				ignoreBlocker: O
			});
		}
	};
	if (L) return {
		...me,
		ref: i,
		href: L,
		...v && { children: v },
		...y && { target: y },
		...b && { disabled: b },
		...x && { style: x },
		...S && { className: S },
		...C && { onClick: C },
		...w && { onBlur: w },
		...T && { onFocus: T },
		...E && { onMouseEnter: E },
		...ie && { onMouseLeave: ie },
		...D && { onTouchStart: D }
	};
	let K = (e) => {
		if (b || H !== "intent") return;
		if (!U) {
			W();
			return;
		}
		let t = e.currentTarget;
		if (Q.has(t)) return;
		let n = setTimeout(() => {
			Q.delete(t), W();
		}, U);
		Q.set(t, n);
	}, be = (e) => {
		b || H !== "intent" || W();
	}, xe = (e) => {
		if (b || !H || !U) return;
		let t = e.currentTarget, n = Q.get(t);
		n && (clearTimeout(n), Q.delete(t));
	};
	return {
		...me,
		...z,
		...B,
		href: I?.href,
		ref: i,
		onClick: $([C, G]),
		onBlur: $([w, xe]),
		onFocus: $([T, K]),
		onMouseEnter: $([E, K]),
		onMouseLeave: $([ie, xe]),
		onTouchStart: $([D, be]),
		disabled: !!b,
		target: y,
		...ge && { style: ge },
		...V && { className: V },
		...b && ot,
		...R && st,
		...A && _e && ct
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
var ft = c.forwardRef((e, t) => {
	let { _asChild: n, ...r } = e, { type: i, ...a } = rt(r, t), o = typeof r.children == "function" ? r.children({ isActive: a["data-status"] === "active" }) : r.children;
	if (!n) {
		let { disabled: e, ...t } = a;
		return c.createElement("a", t, o);
	}
	return c.createElement(n, a, o);
});
function pt(e) {
	return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/route.js
var mt = class extends ze {
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
		}), this.useNavigate = () => i({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ v(ft, {
			ref: t,
			from: this.fullPath,
			...e
		}));
	}
};
function ht(e) {
	return new mt(e);
}
var gt = class extends Be {
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
		}), this.useNavigate = () => i({ from: this.fullPath }), this.Link = l.forwardRef((e, t) => /* @__PURE__ */ v(ft, {
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
	return (e) => {
		let t = ht(e);
		return t.isRoot = !1, t;
	};
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/lazyRouteComponent.js
function yt(e, t) {
	let n, r, i, a = () => (n ||= (i = void 0, e().then((e) => {
		n = void 0, r = e[t ?? "default"];
	}).catch((e) => {
		n = void 0, i = e;
	})), n), o = function(e) {
		if (i) {
			if (le(i) && typeof sessionStorage < "u") {
				let e = `tanstack_router_reload:${i.message}`;
				if (!sessionStorage.getItem(e)) throw sessionStorage.setItem(e, "1"), window.location.reload(), new Promise(() => {});
			}
			throw i;
		}
		if (!r) {
			if (b) b(a());
			else throw a();
		}
		return c.createElement(r, e);
	};
	return o.preload = a, o;
}
var bt = "animate-[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both]", xt = () => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches, St = () => {
	let [e, t] = g(xt);
	return f(() => {
		if (typeof window > "u" || typeof window.matchMedia != "function") return;
		let e = window.matchMedia("(prefers-reduced-motion: reduce)"), n = () => {
			t(e.matches);
		};
		return e.addEventListener("change", n), () => {
			e.removeEventListener("change", n);
		};
	}, []), e;
};
function Ct({ label: e = "Loading payment methods", message: t, testId: r = "cashier-fullscreen-loading", loaderSlot: i = "cashier-fullscreen-logo-loader", delayMs: a = 180, onVisibleChange: o }) {
	return /* @__PURE__ */ v(n, {
		className: "pc-cashier__fullscreen-loader",
		label: e,
		message: t,
		testId: r,
		delayMs: a,
		indicatorSize: "xl",
		indicatorTone: "accent",
		iconSlot: i,
		onVisibleChange: o
	});
}
function wt({ isLoading: e, children: t, loaderLabel: n, loaderMessage: r, loaderTestId: i, loaderSlot: a, loaderDelayMs: o }) {
	let [c, l] = g(0), d = St(), f = u((e) => {
		e && l((e) => e + 1);
	}, []);
	return e ? /* @__PURE__ */ v(Ct, {
		label: n,
		message: r,
		testId: i,
		loaderSlot: a,
		delayMs: o,
		onVisibleChange: f
	}) : /* @__PURE__ */ v("div", {
		"data-slot": "cashier-fullscreen-content-reveal",
		className: s("pc-cashier__fullscreen-content-reveal flex min-h-0 h-full w-full flex-1 flex-col", c > 0 && !d && bt),
		children: t
	}, c);
}
function Tt({ isLoading: e, children: t, loaderLabel: n, loaderTestId: r, loaderSlot: i }) {
	let a = h(null);
	return p(() => {
		let t = a.current;
		if (t) {
			if (e) {
				t.setAttribute("inert", "");
				return;
			}
			t.removeAttribute("inert");
		}
	}, [e]), /* @__PURE__ */ y("div", {
		"data-testid": "cashier-fullscreen-loading-overlay",
		"data-state": e ? "loading" : "ready",
		"aria-busy": e || void 0,
		className: e ? "relative flex h-full min-h-0 w-full flex-1" : "contents",
		children: [/* @__PURE__ */ v("div", {
			ref: a,
			"data-testid": "cashier-fullscreen-loading-overlay-content",
			"aria-hidden": e || void 0,
			className: e ? "invisible flex h-full min-h-0 w-full flex-1 flex-col" : "contents",
			children: t
		}), e && /* @__PURE__ */ v("div", {
			className: s("absolute inset-0 z-50 flex", "bg-[var(--pc-color-surface)]"),
			children: /* @__PURE__ */ v(Ct, {
				label: n,
				testId: r,
				loaderSlot: i,
				delayMs: 0
			})
		})]
	});
}
//#endregion
//#region src/routes/pts/$method.tsx
var Et = () => import("./_method-C62FFp0e.js"), Dt = () => import("./_method-Tgo0jua8.js"), Ot = async (t) => {
	let { merchantId: n, method: r, userId: i, sessionId: s, currency: c, fetchConfig: l, debug: u, queryClient: d } = t, f = {
		merchantId: n,
		method: r === e.PAYOUT ? e.PAYOUT : e.PAYIN,
		userId: i,
		sessionId: s,
		currency: c,
		fetchConfig: l,
		debug: u
	};
	if (d.getQueryState(a(f))?.status === "error") return { paymentTypes: [] };
	try {
		return { paymentTypes: (await o(d, f)).paymentTypes };
	} catch {
		return { paymentTypes: [] };
	}
};
function kt() {
	let { translateKey: e } = t();
	return /* @__PURE__ */ v(Ct, {
		label: e("loading.payment_types"),
		testId: "cashier-payment-types-loading"
	});
}
var At = vt("/pts/$method")({
	loader: async ({ context: e }) => Ot(e),
	component: yt(Dt, "component"),
	pendingComponent: kt,
	errorComponent: yt(Et, "errorComponent")
});
//#endregion
export { me as A, D as B, be as C, _e as D, ye as E, ue as F, x as H, re as I, E as L, A as M, k as N, W as O, j as P, he as R, De as S, H as T, O as V, je as _, vt as a, Ae as b, et as c, We as d, Ve as f, Te as g, Fe as h, Tt as i, M as j, P as k, Ze as l, Ie as m, Ct as n, _t as o, Le as p, wt as r, tt as s, At as t, Ye as u, Ne as v, ve as w, Oe as x, Y as y, S as z };
