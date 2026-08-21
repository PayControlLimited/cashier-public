"use client";
import { t as e } from "./Icon-Bfa6ClCU.js";
import { CashierBonusesStyle as t, CashierComboViewPaymentTypesMode as n, CashierLayoutListType as r, CashierMethods as i, CashierSuggestAction as a, CashierSummaryActionType as o } from "./types/CashierConfig.js";
import { n as s } from "./defaults-ldSVDOuy.js";
import { A as c, B as l, C as u, D as d, E as f, F as p, H as m, I as h, L as g, M as _, N as v, O as y, P as b, R as x, S, T as C, V as w, _ as T, a as E, b as D, c as O, d as k, f as A, g as j, h as M, i as ee, j as N, k as te, l as ne, m as re, n as ie, o as ae, p as P, r as oe, s as se, t as ce, u as F, v as I, w as le, x as ue, y as de, z as fe } from "./_method-CMx8pi-m.js";
import { $ as pe, $n as L, $r as me, $t as R, A as he, An as z, Ar as B, At as ge, B as _e, Bn as ve, Br as ye, Bt as be, C as xe, Cn as V, Cr as H, Ct as Se, D as Ce, Dn as we, Dr as Te, Dt as Ee, E as De, En as Oe, Er as ke, Et as Ae, F as je, Fn as U, Fr as Me, Ft as Ne, G as Pe, Gn as Fe, Gr as Ie, Gt as Le, H as Re, Hn as ze, Hr as Be, Ht as Ve, I as He, In as Ue, Ir as We, It as Ge, J as Ke, Jn as W, Jr as qe, Jt as Je, K as Ye, Kn as Xe, Kr as Ze, Kt as Qe, L as $e, Ln as et, Lr as tt, Lt as nt, M as rt, Mn as it, Mr as at, N as ot, Nn as st, Nr as ct, Nt as lt, O as ut, On as dt, Ot as ft, P as pt, Pn as mt, Pr as ht, Pt as gt, Q as _t, Qn as vt, Qr as yt, Qt as bt, R as xt, Rn as St, Rr as Ct, Rt as wt, S as Tt, Sn as Et, Sr as Dt, T as Ot, Tn as kt, Tr as At, Tt as jt, U as Mt, Un as Nt, Ur as Pt, Ut as Ft, V as It, Vn as Lt, Vr as Rt, Vt as zt, W as Bt, Wn as Vt, Wr as Ht, Wt as Ut, X as Wt, Xn as Gt, Xr as Kt, Xt as qt, Yn as Jt, Yr as Yt, Yt as Xt, Z as Zt, Zn as Qt, Zr as $t, Zt as en, _ as tn, _n as nn, _r as rn, _t as an, a as on, ai as sn, an as cn, ar as ln, at as un, b as dn, bn as fn, br as pn, bt as mn, c as hn, cn as gn, cr as _n, ct as vn, d as yn, dn as bn, dr as xn, dt as Sn, ei as Cn, en as wn, er as Tn, et as En, f as Dn, fn as On, fr as kn, ft as An, g as jn, gn as Mn, gr as Nn, gt as Pn, h as Fn, hn as In, hr as Ln, ht as Rn, i as zn, ii as Bn, ir as Vn, it as Hn, j as Un, jn as Wn, jr as Gn, jt as Kn, k as qn, kn as Jn, kr as Yn, kt as Xn, l as Zn, ln as Qn, lr as $n, lt as er, m as tr, mn as nr, mr as rr, mt as ir, n as ar, ni as or, nn as sr, nr as cr, nt as lr, o as ur, oi as dr, on as fr, or as pr, ot as mr, p as hr, pn as gr, pr as _r, pt as vr, q as yr, qn as br, qr as xr, qt as Sr, r as Cr, ri as G, rn as wr, rr as Tr, rt as Er, s as Dr, sn as Or, sr as kr, st as Ar, t as jr, ti as Mr, tn as Nr, tr as Pr, tt as Fr, u as Ir, un as Lr, ur as Rr, ut as zr, v as Br, vn as Vr, vr as Hr, vt as Ur, w as Wr, wn as Gr, wr as Kr, wt as qr, x as Jr, xn as Yr, xr as Xr, xt as Zr, y as Qr, yn as $r, yr as ei, yt as ti, z as ni, zn as ri, zr as ii, zt as ai } from "./inlinePaymentSubmit-D-5pD47f.js";
import * as K from "react";
import { createContext as oi, forwardRef as si, useCallback as q, useContext as ci, useEffect as J, useImperativeHandle as li, useLayoutEffect as ui, useMemo as Y, useReducer as di, useRef as X, useState as Z } from "react";
import { Fragment as fi, jsx as Q, jsxs as $ } from "react/jsx-runtime";
import { flushSync as pi } from "react-dom";
import { createRoot as mi } from "react-dom/client";
//#region ../../node_modules/@tanstack/router-core/dist/esm/not-found.js
function hi(e) {
	return e?.isNotFound === !0;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/scroll-restoration.js
function gi() {
	try {
		return sessionStorage;
	} catch {
		return;
	}
}
var _i = "tsr-scroll-restoration-v1_3", vi = gi();
function yi() {
	try {
		return JSON.parse(vi?.getItem("tsr-scroll-restoration-v1_3") || "{}");
	} catch {
		return {};
	}
}
function bi() {
	try {
		vi?.setItem(_i, JSON.stringify(xi));
	} catch {
		process.env.NODE_ENV !== "production" && console.warn("[ts-router] Could not persist scroll restoration state to sessionStorage.");
	}
}
var xi = /* @__PURE__ */ yi(), Si = "data-scroll-restoration-id", Ci = (e) => e.state.__TSR_key || e.href;
function wi(e) {
	let t = e.getAttribute(Si);
	if (t) return `[${Si}="${t}"]`;
	let n = "", r = e, i;
	for (; i = r.parentNode;) {
		let e = 1, t = r;
		for (; t = t.previousElementSibling;) e++;
		let a = `${r.localName}:nth-child(${e})`;
		n = n ? `${a} > ${n}` : a, r = i;
	}
	return n;
}
var Ti = !1, Ei = "window";
function Di(e) {
	try {
		return typeof e == "function" ? e() : document.querySelector(e);
	} catch {}
}
function Oi(e) {
	let t = /* @__PURE__ */ new Set();
	for (let n of e) {
		if (n === Ei) continue;
		let e = Di(n);
		e && t.add(e);
	}
	return t;
}
function ki(e, t) {
	let n = t ?? e.options.scrollRestoration, r = e._scroll;
	n && (r.restoring = !0);
	let i = e.options.getScrollRestorationKey || Ci, a = /* @__PURE__ */ new Set(), o = (e) => {
		let t = xi[e] ||= {};
		for (let e of a) e === document ? t[Ei] = {
			scrollX,
			scrollY
		} : e.isConnected && (t[wi(e)] = {
			scrollX: e.scrollLeft,
			scrollY: e.scrollTop
		});
	};
	n && !r.restoration && (r.restoration = !0, Ti = !1, history.scrollRestoration = "manual", document.addEventListener("scroll", (e) => {
		Ti || a.add(e.target);
	}, !0), e.subscribe("onBeforeLoad", (e) => {
		e.fromLocation && o(i(e.fromLocation)), a.clear();
	}), addEventListener("pagehide", () => {
		o(i(e.stores.resolvedLocation.get() ?? e.stores.location.get())), bi();
	})), !r.reset && (r.reset = !0, e.subscribe("onRendered", (t) => {
		let n = e.options.scrollRestorationBehavior, o = e.options.scrollToTopSelectors, s = r.next, c = r.hash, l;
		if (a.clear(), r.next = !0, r.hash = !1, typeof e.options.scrollRestoration == "function" && !e.options.scrollRestoration({ location: e.latestLocation })) return;
		let u = i(t.toLocation), d = t.fromLocation && i(t.fromLocation);
		if (r.restoring && d && d !== u) {
			let e = xi[d];
			if (e) {
				let t = xi[u];
				for (let n in e) {
					if (n === Ei) {
						if (s) continue;
					} else {
						let e = Di(n);
						if (!e || s && o && (l ??= Oi(o), l.has(e))) continue;
					}
					t ||= xi[u] = {}, t[n] ??= e[n];
				}
			}
		}
		Ti = !0;
		try {
			let e = t.toLocation.hash, i = t.toLocation.state.__hashScrollIntoViewOptions ?? !0, a = !1;
			if (s) {
				!e && o && (l ??= Oi(o));
				let t = e && i && c, s = r.restoring ? xi[u] : void 0;
				if (s) for (let e in s) {
					let { scrollX: r, scrollY: i } = s[e];
					if (e === Ei) {
						if (t) continue;
						scrollTo({
							top: i,
							left: r,
							behavior: n
						}), a = !0;
					} else {
						let t = Di(e);
						t && (t.scrollLeft = r, t.scrollTop = i, l?.delete(t));
					}
				}
				if (!e) {
					let e = {
						top: 0,
						left: 0,
						behavior: n
					};
					if (a || scrollTo(e), l) for (let t of l) t.scrollTo(e);
				}
			}
			!a && e && i && document.getElementById(e)?.scrollIntoView(i);
		} finally {
			Ti = !1;
		}
	}));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/qss.js
function Ai(e, t = String) {
	let n = new URLSearchParams();
	for (let r in e) {
		let i = e[r];
		i !== void 0 && n.set(r, t(i));
	}
	return n.toString();
}
function ji(e) {
	return e ? e === "false" ? !1 : e === "true" ? !0 : e * 0 == 0 && +e + "" === e ? +e : e : "";
}
function Mi(e) {
	let t = new URLSearchParams(e), n = Object.create(null);
	for (let [e, r] of t.entries()) {
		let t = n[e];
		t == null ? n[e] = ji(r) : Array.isArray(t) ? t.push(ji(r)) : n[e] = [t, ji(r)];
	}
	return n;
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/searchParams.js
var Ni = Fi(JSON.parse), Pi = Ii(JSON.stringify, JSON.parse);
function Fi(e) {
	return (t) => {
		t[0] === "?" && (t = t.substring(1));
		let n = Mi(t);
		for (let t in n) {
			let r = n[t];
			if (typeof r == "string") try {
				n[t] = e(r);
			} catch {}
		}
		return n;
	};
}
function Ii(e, t) {
	let n = typeof t == "function";
	function r(r) {
		if (typeof r == "object" && r) try {
			return e(r);
		} catch {}
		else if (n && typeof r == "string") try {
			return t(r), e(r);
		} catch {}
		return r;
	}
	return (e) => {
		let t = Ai(e, r);
		return t ? `?${t}` : "";
	};
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/rewrite.js
function Li(e) {
	return {
		input: ({ url: t }) => {
			for (let n of e) t = zi(n, t);
			return t;
		},
		output: ({ url: t }) => {
			for (let n = e.length - 1; n >= 0; n--) t = Bi(e[n], t);
			return t;
		}
	};
}
function Ri(e) {
	let t = ue(e.basepath), n = `/${t}`, r = e.caseSensitive ? n : n.toLowerCase(), i = `${r}/`;
	return {
		input: ({ url: t }) => {
			let a = e.caseSensitive ? t.pathname : t.pathname.toLowerCase();
			return a === r ? t.pathname = "/" : a.startsWith(i) && (t.pathname = t.pathname.slice(n.length)), t;
		},
		output: ({ url: e }) => (e.pathname = de([
			"/",
			t,
			e.pathname
		]), e)
	};
}
function zi(e, t) {
	let n = e?.input?.({ url: t });
	if (n) {
		if (typeof n == "string") return new URL(n);
		if (n instanceof URL) return n;
	}
	return t;
}
function Bi(e, t) {
	let n = e?.output?.({ url: t });
	if (n) {
		if (typeof n == "string") return new URL(n);
		if (n instanceof URL) return n;
	}
	return t;
}
function Vi(e, t) {
	let { createMutableStore: n, createReadonlyStore: r, batch: i } = t, a = /* @__PURE__ */ new Map(), o = n("idle"), s = n(e), c = n(void 0), l = n([]), u = r(() => l.get().map((e) => a.get(e).get())), d = r(() => ({
		status: o.get(),
		isLoading: o.get() === "pending",
		matches: u.get(),
		location: s.get(),
		resolvedLocation: c.get()
	}));
	function f(e) {
		let t = a.get(e);
		return t || (t = n(void 0), a.set(e, t)), t;
	}
	let p = {
		status: o,
		location: s,
		resolvedLocation: c,
		ids: l,
		matches: u,
		byRoute: a,
		__store: d,
		getMatchStore: f,
		setMatches: m
	};
	function m(e) {
		let t = l.get(), n = e.map((e) => e.routeId);
		i(() => {
			N(t, n) || l.set(n);
			for (let e of t) n.includes(e) || a.get(e).set(() => void 0);
			for (let t of e) {
				let e = f(t.routeId);
				e.get() !== t && e.set(t);
			}
		});
	}
	return p;
}
//#endregion
//#region ../../node_modules/@tanstack/history/dist/esm/index.js
var Hi = "__TSR_index", Ui = "popstate", Wi = "beforeunload";
function Gi(e) {
	let t = e.getLocation(), n = /* @__PURE__ */ new Set(), r = (r) => {
		t = e.getLocation(), n.forEach((e) => e({
			location: t,
			action: r
		}));
	}, i = (n) => {
		e.notifyOnIndexChange ?? !0 ? r(n) : t = e.getLocation();
	}, a = async ({ task: n, navigateOpts: r, ...i }) => {
		if (r?.ignoreBlocker ?? !1) {
			n();
			return;
		}
		let a = e.getBlockers?.() ?? [], o = i.type === "PUSH" || i.type === "REPLACE";
		if (typeof document < "u" && a.length && o) for (let n of a) {
			let r = Xi(i.path, i.state);
			if (await n.blockerFn({
				currentLocation: t,
				nextLocation: r,
				action: i.type
			})) {
				e.onBlocked?.();
				return;
			}
		}
		n();
	};
	return {
		get location() {
			return t;
		},
		get length() {
			return e.getLength();
		},
		subscribers: n,
		subscribe: (e) => (n.add(e), () => {
			n.delete(e);
		}),
		push: (n, i, o) => {
			let s = t.state[Hi];
			i = Ki(s + 1, i), a({
				task: () => {
					e.pushState(n, i), r({ type: "PUSH" });
				},
				navigateOpts: o,
				type: "PUSH",
				path: n,
				state: i
			});
		},
		replace: (n, i, o) => {
			let s = t.state[Hi];
			i = Ki(s, i), a({
				task: () => {
					e.replaceState(n, i), r({ type: "REPLACE" });
				},
				navigateOpts: o,
				type: "REPLACE",
				path: n,
				state: i
			});
		},
		go: (t, n) => {
			a({
				task: () => {
					e.go(t), i({
						type: "GO",
						index: t
					});
				},
				navigateOpts: n,
				type: "GO"
			});
		},
		back: (t) => {
			a({
				task: () => {
					e.back(t?.ignoreBlocker ?? !1), i({ type: "BACK" });
				},
				navigateOpts: t,
				type: "BACK"
			});
		},
		forward: (t) => {
			a({
				task: () => {
					e.forward(t?.ignoreBlocker ?? !1), i({ type: "FORWARD" });
				},
				navigateOpts: t,
				type: "FORWARD"
			});
		},
		canGoBack: () => t.state[Hi] !== 0,
		createHref: (t) => e.createHref(t),
		block: (t) => {
			if (!e.setBlockers) return () => {};
			let n = e.getBlockers?.() ?? [];
			return e.setBlockers([...n, t]), () => {
				let n = e.getBlockers?.() ?? [];
				e.setBlockers?.(n.filter((e) => e !== t));
			};
		},
		flush: () => e.flush?.(),
		destroy: () => e.destroy?.(),
		notify: r
	};
}
function Ki(e, t) {
	t ||= {};
	let n = Zi();
	return {
		...t,
		key: n,
		__TSR_key: n,
		[Hi]: e
	};
}
function qi(e) {
	let t = e?.window ?? (typeof document < "u" ? window : void 0), n = t.history.pushState, r = t.history.replaceState, i = [], a = () => i, o = (e) => i = e, s = e?.createHref ?? ((e) => e), c = e?.parseLocation ?? (() => Xi(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state));
	if (!t.history.state?.__TSR_key && !t.history.state?.key) {
		let e = Zi();
		t.history.replaceState({
			[Hi]: 0,
			key: e,
			__TSR_key: e
		}, "");
	}
	let l = c(), u, d = !1, f = !1, p = !1, m = !1, h = () => l, g, _ = () => {
		g && (S._ignoreSubscribers = !0, (g[2] ? t.history.pushState : t.history.replaceState)(g[1], "", g[0]), S._ignoreSubscribers = !1, g = void 0, u = void 0);
	}, v = (e, t, n) => {
		let r = s(t), i = !!g;
		i || (u = l), l = Xi(t, n), g = [
			r,
			n,
			g?.[2] || e
		], i || queueMicrotask(() => _());
	}, y = (e) => {
		l = c(), S.notify({ type: e });
	}, b = async () => {
		if (f) {
			f = !1;
			return;
		}
		let e = c(), n = e.state[Hi] - l.state[Hi], r = n === 1, i = n === -1, o = !r && !i || d;
		d = !1;
		let s = o ? "GO" : i ? "BACK" : "FORWARD", u = o ? {
			type: "GO",
			index: n
		} : { type: i ? "BACK" : "FORWARD" };
		if (p) p = !1;
		else {
			let n = a();
			if (typeof document < "u" && n.length) {
				for (let r of n) if (await r.blockerFn({
					currentLocation: l,
					nextLocation: e,
					action: s
				})) {
					f = !0, t.history.go(1), S.notify(u);
					return;
				}
			}
		}
		l = c(), S.notify(u);
	}, x = (e) => {
		if (m) {
			m = !1;
			return;
		}
		let t = !1, n = a();
		if (typeof document < "u" && n.length) for (let e of n) {
			let n = e.enableBeforeUnload ?? !0;
			if (n === !0) {
				t = !0;
				break;
			}
			if (typeof n == "function" && n() === !0) {
				t = !0;
				break;
			}
		}
		if (t) return e.preventDefault(), e.returnValue = "";
	}, S = Gi({
		getLocation: h,
		getLength: () => t.history.length,
		pushState: (e, t) => v(!0, e, t),
		replaceState: (e, t) => v(!1, e, t),
		back: (e) => (e && (p = !0), m = !0, t.history.back()),
		forward: (e) => {
			e && (p = !0), m = !0, t.history.forward();
		},
		go: (e) => {
			d = !0, t.history.go(e);
		},
		createHref: (e) => s(e),
		flush: _,
		destroy: () => {
			t.history.pushState = n, t.history.replaceState = r, t.removeEventListener(Wi, x, { capture: !0 }), t.removeEventListener(Ui, b);
		},
		onBlocked: () => {
			u && l !== u && (l = u);
		},
		getBlockers: a,
		setBlockers: o,
		notifyOnIndexChange: !1
	});
	return t.addEventListener(Wi, x, { capture: !0 }), t.addEventListener(Ui, b), t.history.pushState = function(...e) {
		let r = n.apply(t.history, e);
		return S._ignoreSubscribers || y("PUSH"), r;
	}, t.history.replaceState = function(...e) {
		let n = r.apply(t.history, e);
		return S._ignoreSubscribers || y("REPLACE"), n;
	}, S;
}
function Ji(e = { initialEntries: ["/"] }) {
	let t = e.initialEntries, n = e.initialIndex ? Math.min(Math.max(e.initialIndex, 0), t.length - 1) : t.length - 1, r = t.map((e, t) => Ki(t, void 0)), i = () => Xi(t[n], r[n]), a = [];
	return Gi({
		getLocation: i,
		getLength: () => t.length,
		pushState: (e, i) => {
			n < t.length - 1 && (t.splice(n + 1), r.splice(n + 1)), r.push(i), t.push(e), n = Math.max(t.length - 1, 0);
		},
		replaceState: (e, i) => {
			r[n] = i, t[n] = e;
		},
		back: () => {
			n = Math.max(n - 1, 0);
		},
		forward: () => {
			n = Math.min(n + 1, t.length - 1);
		},
		go: (e) => {
			n = Math.min(Math.max(n + e, 0), t.length - 1);
		},
		createHref: (e) => e,
		getBlockers: () => a,
		setBlockers: (e) => a = e
	});
}
function Yi(e) {
	let t = e.replace(/[\x00-\x1f\x7f]/g, "");
	return t.startsWith("//") && (t = "/" + t.replace(/^\/+/, "")), t;
}
function Xi(e, t) {
	let n = Yi(e), r = n.indexOf("#"), i = n.indexOf("?"), a = Zi();
	return {
		href: n,
		pathname: n.substring(0, r > 0 ? i > 0 ? Math.min(r, i) : r : i > 0 ? i : n.length),
		hash: r > -1 ? n.substring(r) : "",
		search: i > -1 ? n.slice(i, r === -1 ? void 0 : r) : "",
		state: t || {
			[Hi]: 0,
			key: a,
			__TSR_key: a
		}
	};
}
function Zi() {
	return (Math.random() + 1).toString(36).substring(7);
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/router.js
function Qi(e) {
	return e.options.loader || e.options.beforeLoad || e.lazyFn || e.options.component?.preload || e.options.pendingComponent?.preload;
}
function $i(e, t) {
	return {
		fromLocation: t,
		toLocation: e,
		pathChanged: t?.pathname !== e.pathname,
		hrefChanged: t?.href !== e.href,
		hashChanged: t?.hash !== e.hash
	};
}
function ea({ key: e, __TSR_key: t, __TSR_index: n, __hashScrollIntoViewOptions: r, ...i }) {
	return i;
}
function ta(e, t, n, r) {
	for (let i of t) {
		if (r?.() === !1) return;
		n.some((e) => e.routeId === i.routeId) || e.routesById[i.routeId].options.onLeave?.(i);
	}
	for (let i of n) {
		if (r?.() === !1) return;
		e.routesById[i.routeId].options[t.some((e) => e.routeId === i.routeId) ? "onStay" : "onEnter"]?.(i);
	}
}
var na = class {
	constructor(e, t) {
		this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`, this._scroll = { next: !0 }, this.subscribers = /* @__PURE__ */ new Set(), this._cache = /* @__PURE__ */ new Map(), this._committed = [], this.routeBranchCache = /* @__PURE__ */ new WeakMap(), this.lightweightCache = /* @__PURE__ */ new WeakMap(), this.startTransition = async (e) => (e(), !1), this.update = (e) => {
			process.env.NODE_ENV !== "production" && e.notFoundRoute && console.warn("The notFoundRoute API is deprecated and will be removed in the next major version. See https://tanstack.com/router/v1/docs/framework/react/guide/not-found-errors#migrating-from-notfoundroute for more info.");
			let t = this.options, n = this.basepath ?? t?.basepath ?? "/", r = this.basepath === void 0, i = t?.rewrite;
			if (this.options = {
				...t,
				...e
			}, this.isServer = this.options.isServer ?? !1 ?? typeof document > "u", this.protocolAllowlist = new Set(this.options.protocolAllowlist), this.options.pathParamsAllowedCharacters && (this.pathParamsDecoder = T(this.options.pathParamsAllowedCharacters)), (!this.history || this.options.history && this.options.history !== this.history) && (this.history = this.options.history ? this.options.history : qi()), this.origin = this.options.origin, this.origin ||= window?.origin && window.origin !== "null" ? window.origin : "http://localhost", this.history && this.updateLatestLocation(), this.options.routeTree !== this.routeTree) {
				this.routeTree = this.options.routeTree;
				let e;
				this.resolvePathCache = te(1e3), e = this.buildRouteTree(), this.setRoutes(e);
			}
			if (!this.stores && this.latestLocation) {
				let e = this.getStoreConfig(this);
				this.batch = e.batch, this.stores = Vi(this.latestLocation, e), ki(this);
			}
			let a = this.options.basepath ?? "/", o = this.options.rewrite;
			if (r || n !== a || i !== o) {
				this.basepath = a;
				let e = [], t = ue(a);
				t && t !== "/" && e.push(Ri({ basepath: a })), o && e.push(o), this.rewrite = e.length === 0 ? void 0 : e.length === 1 ? e[0] : Li(e), this.history && this.updateLatestLocation(), this.stores && this.stores.location.set(this.latestLocation);
			}
		}, this.updateLatestLocation = () => {
			this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
		}, this.buildRouteTree = () => {
			let e = y(this.routeTree, this.options.caseSensitive, (e, t) => {
				e.init({ originalIndex: t });
			});
			return this.options.routeMasks && d(this.options.routeMasks, e.processedTree), e;
		}, this.subscribe = (e, t) => {
			let n = {
				eventType: e,
				fn: t
			};
			return this.subscribers.add(n), () => {
				this.subscribers.delete(n);
			};
		}, this.emit = (e) => {
			for (let t of this.subscribers) if (t.eventType === e.type) try {
				t.fn(e);
			} catch (e) {
				console.error(e);
			}
		}, this.parseLocation = (e, t) => {
			let n = ({ pathname: e, search: n, hash: r, href: i, state: a }) => {
				if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(e)) {
					let i = this.options.parseSearch(n), o = this.options.stringifySearch(i);
					return {
						href: e + o + r,
						publicHref: e + o + r,
						pathname: _(e).path,
						external: !1,
						searchStr: o,
						search: l(t?.search, i),
						hash: _(r.slice(1)).path,
						state: w(t?.state, a)
					};
				}
				let o = new URL(i, this.origin), s = zi(this.rewrite, o), c = this.options.parseSearch(s.search), u = this.options.stringifySearch(c);
				return s.search = u, {
					href: s.href.replace(s.origin, ""),
					publicHref: i,
					pathname: _(s.pathname).path,
					external: !!this.rewrite && s.origin !== this.origin,
					searchStr: u,
					search: l(t?.search, c),
					hash: _(s.hash.slice(1)).path,
					state: w(t?.state, a)
				};
			}, r = n(e), { __tempLocation: i, __tempKey: a } = r.state;
			if (i && (!a || a === this.tempLocationKey)) {
				let e = n(i);
				return e.state.key = r.state.key, e.state.__TSR_key = r.state.__TSR_key, delete e.state.__tempLocation, {
					...e,
					maskedLocation: r
				};
			}
			return r;
		}, this.resolvePathWithBase = (e, t) => D({
			base: e,
			to: t.includes("//") ? j(t) : t,
			trailingSlash: this.options.trailingSlash,
			cache: this.resolvePathCache
		}), this.matchRoutes = (e, t, n) => typeof e == "string" ? this.matchRoutesInternal({
			pathname: e,
			search: t
		}, n) : this.matchRoutesInternal(e, t), this.getMatchedRoutes = (e) => {
			let t = Object.create(null), n = C(S(e), this.processedTree, !0);
			return n && Object.assign(t, n.rawParams), [
				n?.branch || [this.routesById.__root__],
				t,
				n?.route
			];
		}, this.buildLocation = (e) => {
			let t = (t = {}) => {
				let n = t._fromLocation || this._pendingLocation || this.latestLocation, r = this.matchRoutesLightweight(n);
				if (t.from && process.env.NODE_ENV !== "production" && t._isNavigate) {
					let [e] = this.getMatchedRoutes(t.from), n = p(r[0], (e) => oa(e.fullPath, t.from)), i = p(e, (e) => oa(e.fullPath, r[1]));
					!n && !i && console.warn(`Could not find match for from: ${t.from}`);
				}
				let i = t.unsafeRelative === "path" ? n.pathname : t.from ?? r[1], a = t.to ? `${t.to}` : void 0, o = r[2], s = Object.assign(Object.create(null), r[3]), c = a?.charCodeAt(0) === 47 ? "/" : this.resolvePathWithBase(i, "."), u = a ? this.resolvePathWithBase(c, a) : c, d = ua(t.params, s), f = this.routesByPath[S(u)], m;
				if (f) m = this.getRouteBranch(f);
				else if (u.includes("$")) m = [];
				else {
					let [e, t, n] = this.getMatchedRoutes(u);
					m = e, this.options.notFoundRoute && (!n || n.path !== "/" && t["**"]) && (m = [...m, this.options.notFoundRoute]);
				}
				if (m.length && g(d)) for (let e of m) {
					let t = e.options.params?.stringify ?? e.options.stringifyParams;
					if (t) try {
						Object.assign(d, t(d));
					} catch {}
				}
				let v = e.leaveParams ? u : _(I({
					path: u,
					params: d,
					decoder: this.pathParamsDecoder,
					server: this.isServer
				}).interpolatedPath).path;
				if (process.env.NODE_ENV !== "production" && f && !e.leaveParams) try {
					let e = this.getMatchedRoutes(v)[2];
					e?.id !== f.id && console.warn(`Generated path "${v}" for route "${f.id}" matched route "${e?.id}" instead. This can happen when multiple route templates resolve to the same URL. Use the route template that matches the intended route, or adjust params.stringify if it changed the target path.`);
				} catch {}
				let y = o;
				if (e._includeValidateSearch && this.options.search?.strict) {
					let e = {};
					m.forEach((t) => {
						if (t.options.validateSearch) try {
							Object.assign(e, sa(t.options.validateSearch, {
								...e,
								...y
							}));
						} catch {}
					}), y = e;
				}
				y = ca(y, t, m, e._includeValidateSearch), y = l(o, y);
				let x = this.options.stringifySearch(y), C = t.hash === !0 ? n.hash : t.hash ? h(t.hash, n.hash) : void 0, T = C ? `#${C}` : "", E = t.state === !0 ? n.state : t.state ? h(t.state, n.state) : {};
				E = w(n.state, E);
				let D = `${v}${x}${T}`, O, k, A = !1;
				if (this.rewrite) {
					let e = new URL(D, this.origin), t = Bi(this.rewrite, e);
					O = e.href.replace(e.origin, ""), t.origin === this.origin ? k = t.pathname + t.search + t.hash : (k = t.href, A = !0);
				} else O = b(D), k = O;
				return {
					publicHref: k,
					href: O,
					pathname: v,
					search: y,
					searchStr: x,
					state: E,
					hash: C ?? "",
					external: A,
					unmaskOnReload: t.unmaskOnReload
				};
			}, n = (n = {}, r) => {
				let i = t(n), a = r ? t(r) : void 0;
				if (!a) {
					let n = Object.create(null);
					if (this.options.routeMasks) {
						let o = le(i.pathname, this.processedTree);
						if (o) {
							Object.assign(n, o.rawParams);
							let { from: i, params: s, ...c } = o.route, l = ua(s, n);
							r = {
								from: e.from,
								...c,
								params: l
							}, a = t(r);
						}
					}
				}
				return a && (i.maskedLocation = a), i;
			};
			return e.mask ? n(e, {
				from: e.from,
				...e.mask
			}) : n(e);
		}, this.commitLocation = async ({ viewTransition: e, ignoreBlocker: t, ...n }) => {
			let r, i = S(this.latestLocation.href) === S(n.href) && v(ea(n.state), ea(this.latestLocation.state)), a = this._commitPromise, o, s = new Promise((e) => {
				o = e;
			});
			if (s.resolve = () => {
				o(), a?.resolve();
			}, this._commitPromise = s, i) this.load();
			else {
				let { maskedLocation: i, hashScrollIntoView: a, ...o } = n;
				i && (o = {
					...i,
					state: {
						...i.state,
						__tempKey: void 0,
						__tempLocation: {
							...o,
							search: o.searchStr,
							state: {
								...o.state,
								__tempKey: void 0,
								__tempLocation: void 0,
								__TSR_key: void 0,
								key: void 0
							}
						}
					}
				}, (o.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) && (o.state.__tempKey = this.tempLocationKey)), o.state.__hashScrollIntoViewOptions = a ?? this.options.defaultHashScrollIntoView ?? !0, this.shouldViewTransition = e, r = n.replace ? "REPLACE" : "PUSH", this.history[r === "REPLACE" ? "replace" : "push"](o.publicHref, o.state, { ignoreBlocker: t }), this.history.subscribers.size || this.load({ action: { type: r } });
			}
			return this._scroll.next = n.resetScroll ?? !0, this._commitPromise;
		}, this.buildAndCommitLocation = ({ replace: e, resetScroll: t, hashScrollIntoView: n, viewTransition: r, ignoreBlocker: i, _redirects: a, href: o, ...s } = {}) => {
			if (o) {
				let t = this.history.location.state.__TSR_index, n = Xi(o, { __TSR_index: e ? t : t + 1 }), r = new URL(n.pathname, this.origin);
				s.to = zi(this.rewrite, r).pathname, s.search = this.options.parseSearch(n.search), s.hash = n.hash.slice(1);
			}
			let c = this.buildLocation({
				...s,
				_includeValidateSearch: !0
			});
			a && (c._redirects = a), this._pendingLocation = c;
			let l = this.commitLocation({
				...c,
				viewTransition: r,
				replace: e,
				resetScroll: t,
				hashScrollIntoView: n,
				ignoreBlocker: i
			});
			return queueMicrotask(() => {
				this._pendingLocation === c && (this._pendingLocation = void 0);
			}), l;
		}, this.navigate = async ({ to: e, reloadDocument: t, href: n, publicHref: r, ...i }) => {
			let a = !1;
			if (n) try {
				new URL(`${n}`), a = !0;
			} catch {}
			if (a && !t && (t = !0), t) {
				if (e !== void 0 || !n) {
					let t = this.buildLocation({
						to: e,
						...i
					});
					n ??= t.publicHref, r ??= t.publicHref;
				}
				let t = !a && r ? r : n;
				if (x(t, this.protocolAllowlist)) {
					process.env.NODE_ENV !== "production" && console.warn(`Blocked navigation to dangerous protocol: ${t}`);
					return;
				}
				if (!i.ignoreBlocker) {
					let e = this.history.getBlockers?.() ?? [];
					for (let t of e) if (t?.blockerFn && await t.blockerFn({
						currentLocation: this.latestLocation,
						nextLocation: this.latestLocation,
						action: "PUSH"
					})) return;
				}
				i.replace ? window.location.replace(t) : window.location.href = t;
				return;
			}
			return this.buildAndCommitLocation({
				...i,
				href: n,
				to: e,
				_isNavigate: !0
			});
		}, this.load = async (e) => {
			this.updateLatestLocation(), e?.action && (this._scroll.hash = e.action.type === "PUSH" || e.action.type === "REPLACE"), await uo(this, e);
		}, this.startViewTransition = (e) => {
			let t = this.shouldViewTransition ?? this.options.defaultViewTransition;
			if (this.shouldViewTransition = void 0, t && typeof document.startViewTransition == "function") {
				let n;
				if (typeof t == "object" && window.CSS?.supports?.("selector(:active-view-transition-type(a))")) {
					let r = this.latestLocation, i = this.stores.resolvedLocation.get(), a = typeof t.types == "function" ? t.types($i(r, i)) : t.types;
					if (a === !1) return e();
					n = {
						update: e,
						types: a
					};
				} else n = e;
				return document.startViewTransition(n).updateCallbackDone;
			}
			return e();
		}, this.invalidate = (e) => {
			let t = this._committed, n = e?.filter, r = this._preloads, i = new Set([
				...t,
				...this._cache.values(),
				...[...r?.values() ?? []].flat(),
				...this._tx?.[3] ?? []
			].filter((e) => !n || n(e)).map((e) => e.id)), a = [];
			for (let [e, t] of r ?? []) t.some((e) => i.has(e.id)) && (r.delete(e), a.push(e));
			let o = (t) => {
				if (i.has(t.id)) {
					let n = this.routesById[t.routeId], r = {
						...t,
						invalid: !0,
						...(e?.forcePending || t.status === "error" || t.status === "notFound") && Qi(n) ? {
							status: "pending",
							error: void 0
						} : void 0
					};
					return t._flight = void 0, r;
				}
				return t;
			};
			this._committed = t.map(o);
			for (let [t, n] of this._cache) i.has(t) && (n.invalid = !0, e?.forcePending && (n.status = "pending"));
			for (let e of i) this._flights?.delete(e);
			for (let e of a) e.abort();
			return this.shouldViewTransition = !1, this.load({ sync: e?.sync });
		}, this.resolveRedirect = (e) => {
			let t = e.headers.get("Location");
			if (!e.options.href || e.options._builtLocation) {
				let t = (e.options._builtLocation ?? this.buildLocation(e.options)).publicHref || "/";
				e.options.href = t, e.headers.set("Location", t);
			} else if (t) try {
				let n = new URL(t);
				if (this.origin && n.origin === this.origin) {
					let t = n.pathname + n.search + n.hash;
					e.options.href = t, e.headers.set("Location", t);
				}
			} catch {}
			if (e.options.href && !e.options._builtLocation && x(e.options.href, this.protocolAllowlist)) throw Error(process.env.NODE_ENV === "production" ? "Redirect blocked: unsafe protocol" : `Redirect blocked: unsafe protocol in href "${e.options.href}". Allowed protocols: ${Array.from(this.protocolAllowlist).join(", ")}.`);
			return e.headers.get("Location") || e.headers.set("Location", e.options.href), e;
		}, this.clearCache = (e) => {
			let t = this._cache, n = this._preloads, r = e?.filter, i = [], a = [];
			for (let [e, n] of t) (!r || r(n)) && (a.push(e), i.push(n));
			let o = [];
			for (let [e, t] of n ?? []) (!r || t.some(r)) && (o.push(e), i.push(...t));
			for (let e of a) t.delete(e);
			for (let e of o) n.delete(e);
			for (let e of i) {
				let t = e._flight;
				e._flight = void 0, t && !--t[2] && (this._flights?.get(e.id) === t && this._flights.delete(e.id), o.push(t[1]));
			}
			for (let e of o) e.abort();
		}, this.loadRouteChunk = ha, this.preloadRoute = (e) => po(this, e), this.matchRoute = (e, t) => {
			let n = {
				...e,
				to: e.to ? this.resolvePathWithBase(e.from || "", e.to) : void 0,
				params: e.params || {},
				leaveParams: !0
			}, r = this.buildLocation(n), i = this.stores.status.get() === "pending";
			if (t?.pending && !i) return !1;
			let a = t?.pending ?? !i ? this.latestLocation : this.stores.resolvedLocation.get() || this.stores.location.get(), o = f(r.pathname, t?.caseSensitive ?? !1, t?.fuzzy ?? !1, a.pathname, this.processedTree);
			return !o || e.params && !v(o.rawParams, e.params, { partial: !0 }) ? !1 : t?.includeSearch ?? !0 ? v(a.search, r.search, { partial: !0 }) ? o.rawParams : !1 : o.rawParams;
		}, this.getStoreConfig = t, this.update({
			defaultPreloadDelay: 50,
			defaultPendingMs: 1e3,
			defaultPendingMinMs: 500,
			context: void 0,
			...e,
			caseSensitive: e.caseSensitive ?? !1,
			notFoundMode: e.notFoundMode ?? "fuzzy",
			stringifySearch: e.stringifySearch ?? Pi,
			parseSearch: e.parseSearch ?? Ni,
			protocolAllowlist: e.protocolAllowlist ?? c
		}), self.__TSR_ROUTER__ = this;
	}
	isShell() {
		return !!this.options.isShell;
	}
	get state() {
		return this.stores.__store.get();
	}
	setRoutes({ routesById: e, routesByPath: t, processedTree: n }) {
		this.routesById = e, this.routesByPath = t, this.processedTree = n;
		let r = this.options.notFoundRoute;
		r && (r.init({ originalIndex: 99999999999 }), this.routesById[r.id] = r);
	}
	getRouteBranch(e) {
		let t = this.routeBranchCache.get(e);
		return t || (t = u(e), this.routeBranchCache.set(e, t)), t;
	}
	matchRoutesInternal(e, t) {
		let [n, r, i] = this.getMatchedRoutes(e.pathname), a = n, o = !1;
		(i ? i.path !== "/" && r["**"] : S(e.pathname)) && (this.options.notFoundRoute ? a = [...a, this.options.notFoundRoute] : o = !0);
		let s = o ? la(this.options.notFoundMode, a) : void 0, c = Array(a.length), u = this._committed, d = (e, t) => {
			let n = u[t];
			return n?.routeId === e.id ? n : e === this.options.notFoundRoute ? u.find((t) => t.routeId === e.id) : void 0;
		}, f;
		for (let n = 0; n < a.length; n++) {
			let i = a[n], o = c[n - 1], u, p, m;
			{
				let n = o?.search ?? e.search, r = o?._strictSearch ?? void 0;
				try {
					let e = sa(i.options.validateSearch, { ...n }) ?? void 0;
					u = {
						...n,
						...e
					}, p = {
						...r,
						...e
					};
				} catch (e) {
					let r = e;
					if (e instanceof ra || (r = new ra(e.message, { cause: e })), t?.throwOnError) throw r;
					u = n, p = {}, m = r;
				}
			}
			let h = "", g = "";
			try {
				h = i.options.loaderDeps?.({ search: u }) ?? "", g = h && JSON.stringify(h) || "";
			} catch (e) {
				if (t?.throwOnError) throw e;
				m ??= e;
			}
			let { interpolatedPath: _, usedParams: v } = I({
				path: i.fullPath,
				params: r,
				decoder: this.pathParamsDecoder,
				server: this.isServer
			}), y = i.id + _ + g, b = d(i, n), x = process.env.NODE_ENV !== "production" && t?._rematerialize ? void 0 : this._cache.get(y) ?? (b?.id === y ? b : void 0);
			f = x?._strictParams ?? Object.assign(v, f);
			let S;
			if (!x) try {
				da(i, f);
			} catch (e) {
				if (S = hi(e) || P(e) ? e : new ia(e.message, { cause: e }), t?.throwOnError) throw S;
			}
			let C = b ? "stay" : "enter", T;
			if (x) T = {
				...x,
				cause: C,
				search: l(b ? b.search : x.search, u),
				_strictSearch: p,
				searchError: m
			};
			else {
				let e = Qi(i) ? "pending" : "success";
				T = {
					id: y,
					ssr: i.options.ssr,
					index: n,
					routeId: i.id,
					params: b?.params ?? f,
					_strictParams: f,
					pathname: _,
					updatedAt: Date.now(),
					search: b ? l(b.search, u) : u,
					_strictSearch: p,
					searchError: m,
					status: e,
					isFetching: !1,
					error: void 0,
					paramsError: S,
					context: {},
					abortController: t?._controller ?? new AbortController(),
					cause: C,
					loaderDeps: b ? w(b.loaderDeps, h) : h,
					invalid: !1,
					preload: !1,
					staticData: i.options.staticData || {},
					fullPath: i.fullPath
				};
			}
			let E = s === i.id;
			T._notFound && !E && (T.error = void 0), T._notFound = E, c[n] = T;
		}
		for (let e = 0; e < c.length; e++) {
			let n = c[e];
			n.params = n.cause === "stay" ? l(n.params, f) : f, t?._controller && (n.context = {});
		}
		return c;
	}
	matchRoutesLightweight(e) {
		let t = fe(this.stores.ids.get()), n = t ? this.stores.byRoute.get(t).get() : void 0, r = n?.id, i = this.lightweightCache.get(e);
		if (i && i[0] === r) return i[1];
		let [a, o] = this.getMatchedRoutes(e.pathname), s = fe(a), c = { ...e.search };
		for (let e of a) try {
			Object.assign(c, sa(e.options.validateSearch, c));
		} catch {}
		let l = n && n.routeId === s.id && n.pathname === e.pathname, u;
		if (l) u = n.params;
		else {
			let e = Object.assign(Object.create(null), o);
			for (let t of a) try {
				da(t, e);
			} catch {}
			u = e;
		}
		let d = [
			a,
			s.fullPath,
			c,
			u
		];
		return this.lightweightCache.set(e, [r, d]), d;
	}
};
process.env.NODE_ENV !== "production" && (na.prototype._replaceRouteChunk = fa, na.prototype._refreshRoute = async function() {
	this._serverResult = void 0, this.updateLatestLocation(), await fo(this);
});
var ra = class extends Error {}, ia = class extends Error {}, aa = (e) => e.endsWith("/") && e.length > 1 ? e.slice(0, -1) : e;
function oa(e, t) {
	return aa(e) === aa(t);
}
function sa(e, t) {
	if (e == null) return {};
	if ("~standard" in e) {
		let n = e["~standard"].validate(t);
		if (n instanceof Promise) throw new ra("Async validation not supported");
		if (n.issues) throw new ra(JSON.stringify(n.issues, void 0, 2), { cause: n });
		return n.value;
	}
	return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function ca(e, t, n, r) {
	let i = [];
	for (let e of n) {
		let t = e.options;
		"search" in t ? t.search?.middlewares && i.push(...t.search.middlewares) : (t.preSearchFilters || t.postSearchFilters) && i.push(({ search: e, next: n }) => {
			let r = n(t.preSearchFilters ? t.preSearchFilters.reduce((e, t) => t(e), e) : e);
			return t.postSearchFilters ? t.postSearchFilters.reduce((e, t) => t(e), r) : r;
		});
		let n = t.validateSearch;
		n && i.push(({ search: e, next: t, meta: i }) => {
			let a = t(e);
			if (r) try {
				let e = sa(n, a);
				if (i && e) for (let t in e) t in a || (i.defaulted ||= /* @__PURE__ */ new Map()).set(t, e[t]);
				return {
					...a,
					...e
				};
			} catch {}
			return a;
		});
	}
	let a = (e, n, r) => {
		if (e >= i.length) {
			if (!t.search) return {};
			if (t.search === !0) return n;
			let e = h(t.search, n);
			return r && (r.explicit = e), e;
		}
		return i[e]({
			search: n,
			next: (t, n) => {
				if (n) {
					let n = r || {};
					return {
						search: a(e + 1, t, n),
						meta: n
					};
				}
				return a(e + 1, t, r);
			},
			meta: r
		});
	};
	return a(0, e);
}
function la(e, t) {
	if (e !== "root") {
		let e;
		for (let n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.options.notFoundComponent) return r.id;
			e ||= r.children && r.id;
		}
		if (e) return e;
	}
	return M;
}
function ua(e, t) {
	return e === !1 || e === null ? Object.create(null) : (e ?? !0) === !0 ? t : Object.assign(t, h(e, t));
}
function da(e, t) {
	let n = e.options.params?.parse ?? e.options.parseParams;
	n && Object.assign(t, n(t));
}
//#endregion
//#region ../../node_modules/@tanstack/router-core/dist/esm/load-client.js
function fa(e, t) {
	e.lazyFn = t ?? e.lazyFn, e._lazy = void 0;
}
function pa(e, t) {
	return e.options[t]?.preload?.();
}
function ma(e, t) {
	let n = pa(e, "component"), r = pa(e, "pendingComponent"), i = t && r ? r.then(t) : r;
	return t && !r && t(), n && i ? Promise.all([n, i]).then(() => {}) : n ?? i;
}
function ha(e, t, n) {
	let r = () => t === !1 ? void 0 : t ? pa(e, t) : ma(e, n), i = e._lazy;
	if (i) return i === !0 ? r() : i.then(r);
	if (!e.lazyFn) return r();
	let a = e.lazyFn().then((t) => {
		if (process.env.NODE_ENV === "production" || e._lazy === a) {
			let { id: n, ...r } = t.options;
			Object.assign(e.options, r), e._lazy = !0;
		}
	}, (t) => {
		throw (process.env.NODE_ENV === "production" || e._lazy === a) && (e._lazy = void 0), t;
	});
	return e._lazy = a, a.then(r);
}
function ga(e) {
	let t = e.findIndex((e) => e.status !== "success" || e._notFound) + 1;
	return t && t < e.length ? e.slice(0, t) : e;
}
var _a = 0, va = 1, ya = 2, ba = 3, xa = 4;
function Sa(e) {
	return typeof e[0] == "number";
}
function Ca(e, t) {
	return t.aborted ? Promise.race([Promise.reject(t), e]) : new Promise((n, r) => {
		let i = () => r(t);
		t.addEventListener("abort", i, { once: !0 }), Promise.resolve(e).then(n, r).finally(() => t.removeEventListener("abort", i));
	});
}
function wa(e, t) {
	return e.routesById[t.routeId];
}
function Ta(e, t, n) {
	return P(e) ? [ba, e] : hi(e) ? (e.routeId ||= n, [ya, e]) : (t && typeof e?.then == "function" && (e = Error("A Promise was thrown", { cause: e })), t ? [va, e] : [_a, e]);
}
function Ea(e, t) {
	let n = Ta(t, !0, e.id);
	if (n[0] !== va) return n;
	try {
		e.options.onError?.(n[1]);
	} catch (t) {
		n = Ta(t, !0, e.id);
	}
	return n;
}
function Da(e, t, n) {
	return n[0].signal.aborted || !n[2]() ? (n[0].abort(), [xa]) : Ea(e, t);
}
function Oa(e, t) {
	return (n) => e.navigate({
		...n,
		_fromLocation: t
	});
}
async function ka(e, t, n, r, i) {
	let [a, o] = t, s = n[0].signal, c = !!n[4];
	for (let t = n[7] ?? 0; t < r; t++) {
		let r = o[t], i = wa(e, r);
		r.abortController = n[0];
		let l = o[t - 1]?.context ?? e.options.context ?? {}, u = {
			params: r.params,
			location: a,
			navigate: Oa(e, a),
			buildLocation: e.buildLocation,
			cause: c ? "preload" : r.cause,
			abortController: n[0],
			preload: c,
			matches: o,
			routeId: i.id
		}, d = l;
		try {
			let e = r._ctx;
			!e && i.options.context && (e = r._ctx = i.options.context({
				...u,
				deps: r.loaderDeps,
				context: l
			}) || {}), d = {
				...l,
				...e
			}, r.context = d;
		} catch (a) {
			return ja(e, r), [t, Da(i, a, n)];
		}
		if (s.aborted || !n[2]()) return n[0].abort(), [t, [xa]];
		let f = r.paramsError ?? r.searchError;
		if (f !== void 0) return ja(e, r), [t, Da(i, f, n)];
		let p = i.options.beforeLoad;
		if (!p) continue;
		let m = {
			...u,
			search: r.search,
			context: d,
			...e.options.additionalContext
		}, h = r.status;
		h === "success" && (r.status = "pending"), n[8]?.();
		try {
			Ia(e, r, "beforeLoad", n[0]);
			let a = await Ca(p(m), s);
			if (!n[2]()) return n[0].abort(), [t, [xa]];
			let o = Ta(a, !1, i.id);
			if (o[0] !== _a) return ja(e, r), [t, o];
			r.context = {
				...d,
				...a
			};
		} catch (a) {
			return ja(e, r), [t, Da(i, a, n)];
		} finally {
			h === "success" && r.status === "pending" && (r.status = "success"), Ia(e, r, !1, n[0]);
		}
	}
	i();
}
function Aa(e, t, n) {
	if (!(!n || --n[2])) {
		if (e._flights?.get(t.id) === n) {
			let n = e._tx;
			if (n && !n[0].signal.aborted && !(process.env.NODE_ENV !== "production" && n[6]) && !n[3].includes(t) && n[3].some((e) => e.id === t.id) && n[3].some((e) => e.isFetching === "beforeLoad")) return;
			e._flights.delete(t.id);
		}
		return n[1];
	}
}
function ja(e, t) {
	let n = t._flight;
	t._flight = void 0, Aa(e, t, n)?.abort();
}
function Ma(e, t, n) {
	let r = [];
	for (let i of t) if (!n?.includes(i)) {
		let t = i._flight;
		i._flight = void 0;
		let n = Aa(e, i, t);
		n && r.push(n);
	}
	for (let e of r) e.abort();
}
function Na(e, t, n) {
	let r = [];
	for (let i of t) if (!n.includes(i)) {
		let t = i._flight;
		if (i._flight = void 0, t?.[2] === 1 && e._flights?.get(i.id) === t && !(process.env.NODE_ENV !== "production" && e._tx?.[6]) && n.some((e) => e.id === i.id)) t[2] = 0;
		else {
			let n = Aa(e, i, t);
			n && r.push(n);
		}
	}
	for (let e of r) e.abort();
}
function Pa(e) {
	let t = [];
	for (let [n, r] of e._flights ?? []) r[2] || (e._flights.delete(n), t.push(r[1]));
	for (let e of t) e.abort();
}
function Fa(e) {
	for (let t of e) {
		let e = t._flight;
		e && e[2]++;
	}
}
function Ia(e, t, n, r) {
	if (t.isFetching = n, r && e._tx?.[0] !== r) return;
	let i = e.stores.byRoute.get(t.routeId), a = i?.get();
	a?.id === t.id && i.set({
		...a,
		isFetching: n
	});
}
function La(e, t, n, r, i, a, o) {
	let s = t[0];
	return {
		params: n.params,
		location: s,
		navigate: Oa(e, s),
		cause: o ? "preload" : n.cause,
		abortController: i,
		preload: o,
		deps: n.loaderDeps,
		parentMatchPromise: a,
		context: n.context,
		route: r,
		...e.options.additionalContext
	};
}
async function Ra(e, t, n, r, i, a, o, s) {
	let c = s.signal;
	if (c.aborted) return [xa];
	if (!i) return [_a, void 0];
	let l = n._flight;
	Ia(e, n, "loader", s);
	try {
		if (!l) {
			let s = new AbortController();
			l = [
				Promise.resolve().then(() => i(La(e, t, n, r, s, a, o))).then((e) => Ta(e, !1, r.id), (e) => Ta(e, !0, r.id)).then((t) => (t[0] !== _a && e._flights?.get(n.id) === l && (e._flights.delete(n.id), l[2] || s.abort()), t[0] === va && l[2] ? Ea(r, t[1]) : t)),
				s,
				1
			], (e._flights ??= /* @__PURE__ */ new Map()).set(n.id, l);
		}
		return n._flight = l, n.abortController = l[1], await Ca(l[0], c);
	} catch (t) {
		if (t !== c) throw t;
		return ja(e, n), [xa];
	} finally {
		Ia(e, n, !1, s);
	}
}
function za(e, t, n) {
	t[0] === _a ? (e.loaderData = t[1], e.error = void 0, e.status = "success", e.invalid = !1, e.updatedAt = Date.now(), e.preload = n) : t[0] !== ba && (e.status = "success", e.error = void 0, e.invalid = !0);
}
function Ba(e, t, n) {
	let r = e._cache.get(t.id);
	if (r !== n || e._committed.some((e) => e.id === t.id && e._flight === t._flight)) return;
	let i = {
		...t,
		_notFound: void 0,
		context: {}
	};
	i._flight && i._flight[2]++, e._cache.set(t.id, i), r && ja(e, r);
}
function Va(e, t) {
	return t[0] === va || t[0] === ya ? {
		...e,
		status: t[0] === va ? "error" : "notFound",
		error: t[1],
		_flight: void 0
	} : e;
}
function Ha(e, t, n, r, i, a) {
	let o = t[1][n], s = wa(e, o), c = !!a[4], l = c ? e._cache.get(o.id) : void 0, u, d = !1, f;
	try {
		if (o.status === "success" && (u = s.options.shouldReload, typeof u == "function" && (u = u(La(e, t, o, s, a[0], i, c))), a[2]() || (a[0].abort(), f = [xa])), !f) {
			if (o.status !== "success") d = !0;
			else {
				let t = a[4] || o.preload ? s.options.preloadStaleTime ?? e.options.defaultPreloadStaleTime ?? 3e4 : s.options.staleTime ?? e.options.defaultStaleTime ?? 0;
				d = !!(o.invalid || u || u === void 0 && Date.now() - o.updatedAt >= t && (a[6] || o.cause === "enter" || a[3].some((e) => e.routeId === o.routeId && e.id !== o.id)));
			}
		}
	} catch (t) {
		o.invalid = !0, ja(e, o), f = Da(s, t, a);
	}
	let p = s.options.loader, m = typeof p == "function" ? p : p?.handler, h = (!c || s.options.preload !== !1) && p && !(process.env.NODE_ENV !== "production" && e._tx?.[6]) ? e._flights?.get(o.id) : void 0;
	h === o._flight || f ? h = void 0 : h && !d && !c && u === void 0 ? d = !0 : d || (h = void 0);
	let g = !!(p && d && o.status === "success" && !c && !a[5] && ((typeof p == "function" ? void 0 : p?.staleReloadMode) ?? e.options.defaultStaleReloadMode) !== "blocking"), _ = d && (!c || s.options.preload !== !1), v = _ && !g && (o.status !== "success" || !!p), y = s.lazyFn && s._lazy !== !0 ? a[8] : void 0;
	if (_ && !p && (o.invalid = !1, o.updatedAt = Date.now()), h && h[2]++, v) {
		let t = o._flight;
		o._flight = h, Aa(e, o, t)?.abort(), o.status === "success" && (o.status = "pending"), a[8]?.();
	}
	_ || (o.isFetching = !1);
	let b = (f ? Promise.resolve(f) : v ? Ra(e, t, o, s, m, i, c, a[0]) : Promise.resolve([_a, o.loaderData])).then((t) => (v && (za(o, t, c), t[0] === _a && (c && p && !a[0].signal.aborted && Ba(e, o, l), o.status = "pending")), t)), x = Ca(Promise.resolve().then(() => ha(s, void 0, y)), a[0].signal).then(() => void 0, (e) => [n, Da(s, e, a)]).then((e) => b.then((t) => (v && !e && t[0] === _a && o.status === "pending" && a[2]() && (o.status = "success", a[8]?.()), e)));
	if (r.push([
		n,
		b,
		x
	]), !g) return b.then((e) => Va(o, e));
	let S = {
		...o,
		status: "pending",
		preload: !1,
		_flight: h
	};
	o.invalid = !1, o.isFetching = "loader";
	let C = Ra(e, t, S, s, m, i, !1, a[0]).then((e) => (o.isFetching = !1, za(S, e, !1), e));
	return (t[2] ??= []).push([
		n,
		C,
		x,
		S
	]), C.then((e) => Va(S, e));
}
async function Ua(e, t, n, r, i = 0) {
	let a = n?.[1][1], o = a?.routeId ? t.findIndex((e) => e.routeId === a.routeId) : n?.[0] ?? t.length - 1;
	o < 0 && (o = 0);
	for (let n = o; n >= 0; n--) {
		let i = wa(e, t[n]), a = ha(i, !1);
		if (a) try {
			await Ca(a, r);
		} catch (e) {
			if (e === r) throw e;
		}
		if (i.options.notFoundComponent) return n;
	}
	return a?.routeId ? o : i;
}
function Wa(e, t) {
	t[2] &&= (Ma(e, t[2].map((e) => e[3])), void 0);
}
async function Ga(e, t, n, r) {
	let i;
	try {
		await Promise.all(e.map((e) => e[1].then(async (t) => {
			let a = e[0];
			if (!(r && a >= await r)) {
				if (t[0] >= ba) throw [a, t];
				!i && t[0] !== _a && (i = [a, t], await Promise.all((n ?? []).map((e) => {
					if (!(e[0] <= a)) return e[1].then((t) => {
						if (t[0] === ba) throw [e[0], t];
					});
				})));
			}
		})));
	} catch (e) {
		return e;
	}
	return t ?? i;
}
async function Ka(e, t, n, r, i, a, o) {
	let s = t[1], c = await a, l = !1, u = s.findIndex((e) => e._notFound), d = (t) => t[1][0] === ya ? Ua(e, s, t, r.signal) : t[0], f = u < 0 ? s.length : u;
	if ((c?.[1][0] ?? 0) >= ba) f = 0;
	else if (c) {
		f = c[2] ??= await d(c);
		for (let e of n) {
			if (e[0] >= f) break;
			let t = await e[1];
			if (t[0] !== _a && t[0] < ba && !("loaderData" in s[e[0]])) {
				c = [e[0], t], f = c[2] = await d(c);
				break;
			}
		}
	}
	for (let e of n) {
		if (e[0] >= f) break;
		let t = await e[2];
		if (t) {
			c = t;
			break;
		}
	}
	if ((c?.[1][0] ?? 0) >= ba) {
		let n = c[1];
		if (n[0] !== ba || n[1].options.reloadDocument || i < 20) return Wa(e, t), n;
		l = !0, c = [0, [va, /* @__PURE__ */ Error("Too many redirects")]];
	}
	let p = c ? c[2] ?? await d(c) : u;
	if (p >= 0) {
		let i = c?.[1], a = i?.[0], u = s[p], d = i?.[1], f = () => {
			i && (u._notFound = void 0, a === va ? u.status = "error" : (d.routeId = u.routeId, u.routeId === e.routeTree.id ? (u.status = "success", u._notFound = !0) : u.status = "notFound"), u.error = d, u.isFetching = !1);
		};
		f();
		try {
			await Ca(i ? Promise.resolve().then(() => ha(wa(e, u), a === va ? "errorComponent" : "notFoundComponent")) : Promise.all([ha(wa(e, u)), ha(wa(e, u), "notFoundComponent")]), r.signal);
		} catch (n) {
			if (n === r.signal) return Wa(e, t), [xa];
		}
		i ? l && (r.abort(), await Promise.all([
			...n.map((e) => e[1]),
			...n.map((e) => e[2]),
			...(t[2] ?? []).map((e) => e[1])
		]), Wa(e, t), Ma(e, s), f()) : (u.status = "success", o?.());
	}
	return t;
}
async function qa(e, t, n, r = 0, i = t[1].length) {
	let a = t[1];
	for (let t = r; t < i; t++) {
		let r = a[t], i = wa(e, r).options;
		if (i.head || i.scripts) try {
			let t = {
				ssr: e.options.ssr,
				matches: a,
				match: r,
				params: r.params,
				loaderData: r.loaderData
			}, [o, s] = await Ca(Promise.all([i.head?.(t), i.scripts?.(t)]), n);
			r.meta = o?.meta, r.links = o?.links, r.headScripts = o?.scripts, r.styles = o?.styles, r.scripts = s;
		} catch (e) {
			if (e === n) break;
			console.error(e);
		}
		if (r.status !== "success" || r._notFound) break;
	}
	return t;
}
async function Ja(e, t, n, r) {
	let i = [t, n], a = n.findIndex((e) => e._notFound);
	if (e.options.notFoundMode !== "root" && a >= 0) {
		let t = await Ua(e, i[1], void 0, r[0].signal, a);
		t !== a && (n[a]._notFound = void 0, n[t]._notFound = !0), a = t;
	}
	let o = a < 0 ? n.length : a + 1, s = [], c = r[7] ?? 0, l = c ? Promise.resolve(i[1][c - 1]) : void 0, u = () => {
		for (let t = c; t < o && !r[0].signal.aborted; t++) l = Ha(e, i, t, s, l, r);
	}, d = await ka(e, i, r, o, u);
	d && (r[5] = !0, o = d[0], d[1][0] === ya ? (d[2] = await Ua(e, i[1], d, r[0].signal), o = Math.min(o, d[2] + 1)) : d[1][0] >= ba && (o = 0), u()), r[2]() && !r[4] && Pa(e);
	let f;
	try {
		let t = Ka(e, i, s, r[0], r[1], Ga(s, d, i[2]), r[8]);
		i[2]?.length && (i[3] = Ga(i[2], void 0, void 0, t.then((e) => Sa(e) ? 0 : ga(e[1]).length, () => 0))), f = await t;
	} catch (t) {
		throw Wa(e, i), t;
	}
	return Sa(f) ? f : qa(e, f, r[0].signal, r[7] === f[1].length ? r[7] : 0);
}
function Ya(e, t) {
	let n = e.stores.matches.get();
	for (let r = 0; r < t.length; r++) {
		let i = t[r], a = i.status === "success", o = a && n[r]?.id === i.id && n[r]?.status === "pending";
		if (a && !o) continue;
		let s = wa(e, i), c = o || i.invalid ? 0 : s.options.pendingMs ?? e.options.defaultPendingMs, l = s.options.pendingComponent ?? e.options.defaultPendingComponent;
		return l && typeof c == "number" && c !== Infinity ? [
			c,
			r,
			s.options.pendingMinMs ?? e.options.defaultPendingMinMs ?? 0,
			l
		] : void 0;
	}
}
function Xa(e, t) {
	if (e._tx !== t) return;
	let n = e._pending, r = !1, i = n?.[0][3][n[1]]?.id;
	n?.[0] !== t && (n && t[3][n[1]]?.id === i ? (n[0] = t, r = !0) : (clearTimeout(n?.[3]), e._pending = n = void 0));
	let a = Ya(e, t[3]);
	if (!a) return;
	let [o, s, c, l] = a, u = t[3][s].id;
	if (!n || n[1] !== s || i !== u) {
		clearTimeout(n?.[3]);
		let r = e.stores.matches.get()[s], i = r?.id === u && r.status === "pending";
		e._pending = n = [
			t,
			s,
			i ? Date.now() + c : t[4] + o,
			void 0,
			i ? Promise.resolve(!0) : void 0,
			l
		];
	}
	if (n[4] && !r && n[5] === l) return;
	if (n[5] = l, !n[4]) {
		clearTimeout(n[3]);
		let r = n[2] - Date.now();
		if (r > 0) {
			n[3] = setTimeout(() => {
				Xa(e, t);
			}, r);
			return;
		}
		n[2] = 0;
	}
	let d = t[3].map((e) => ({
		...e,
		_flight: void 0
	}));
	d[s].status = "pending";
	let f = e.startTransition(() => e.stores.setMatches(d), d).then((t) => (t && e._pending === n && n[4] === f && !n[2] && (n[2] = Date.now() + c), t));
	n[4] = f;
}
function Za(e, t) {
	let n = e._pending;
	n?.[0] === t && (clearTimeout(n[3]), e._pending = void 0);
}
function Qa(e, t) {
	e._committed = t, e.stores.setMatches(t);
}
function $a(e, t) {
	Ma(e, t[1]), Wa(e, t);
}
function eo(e, t, n, r) {
	let i = e._committed, a = e._cache;
	for (let e of n) e.preload = !1, r && (e._assetEnd = void 0);
	let o = ga(n).length, s = /* @__PURE__ */ new Map(), c = Date.now();
	for (let t of [...i, ...a.values()]) {
		if (t.status !== "success" || n.some((e, n) => e.id === t.id && (n < o || e.status === "success"))) continue;
		let r = wa(e, t);
		!r.options.loader || c - t.updatedAt >= (t.preload ? r.options.preloadGcTime ?? e.options.defaultPreloadGcTime ?? 3e5 : r.options.gcTime ?? e.options.defaultGcTime ?? 3e5) || s.set(t.id, a.get(t.id) === t ? t : {
			...t,
			_flight: void 0,
			isFetching: !1,
			context: {}
		});
	}
	t[3] = [], e._cache = s, Qa(e, n), Ma(e, [...a.values(), ...i], [...n, ...s.values()]), ta(e, i, n, () => e._tx === t);
}
function to(e, t, n, r) {
	let i = e._committed, a = e._cache;
	for (let e of n) e.preload = !1;
	let o = /* @__PURE__ */ new Map();
	t[3] = [], e._cache = o, r.previousMatches = i, r.previousCache = a, r.published = !0, Qa(e, n), !(!r.published || e._tx !== t) && ta(e, i, n, () => e._tx === t);
}
function no(e, t) {
	t.published && (t.published = !1, Ma(e, [...t.previousCache.values(), ...t.previousMatches], [...e._cache.values(), ...e._committed]));
}
function ro(e, t, n, r) {
	if (!r.published || e._tx !== t || e._committed !== n[1]) return no(e, r), !1;
	let i = [...e._cache.values(), ...e._committed], a = [...r.previousCache.values(), ...r.previousMatches];
	e._cache = r.previousCache, e._committed = r.previousMatches, r.published = !1;
	for (let t of i) !a.includes(t) && t._flight && e._flights?.get(t.id) === t._flight && e._flights.delete(t.id);
	return Za(e, t), e.batch(() => {
		e.stores.status.set("idle"), e.stores.setMatches(r.previousPresentation);
	}), t[0].abort(), Ma(e, i, a), Wa(e, n), e._tx === t && e._commitPromise === r.commitPromise && (e._commitPromise?.resolve(), e._commitPromise = void 0), !0;
}
async function io(e, t, n, r) {
	let i = t[6], a = {
		previousMatches: e._committed,
		previousPresentation: i[0],
		previousCache: e._cache,
		commitPromise: e._commitPromise,
		published: !1
	}, o = () => {
		Za(e, t), i[2] = s, to(e, t, n[1], a), !(!a.published || e._tx !== t) && (e.emit({
			type: "onLoad",
			...r
		}), e._tx === t && e.emit({
			type: "onBeforeRouteMount",
			...r
		}));
	}, s = () => {
		i[2] === s && (i[2] = void 0);
		let r = ro(e, t, n, a);
		return e._cancelTransition?.(), r;
	};
	try {
		let r = await e.startTransition(o, n[1]);
		if (i[2] === s && (i[2] = void 0), a.published) {
			let n = i[1];
			n && e._handoff === n && n[1](), e._tx === t && (t[6] = void 0);
		}
		return no(e, a), r;
	} catch (e) {
		if (s()) return;
		throw e;
	}
}
async function ao(e, t) {
	let n = e._tx;
	for (; n && n !== t;) {
		if (await n[5], e._tx === n) return;
		n = e._tx;
	}
}
async function oo(e, t, n) {
	await e.navigate({
		...n.options,
		replace: !0,
		ignoreBlocker: !0,
		_redirects: t[1] + 1
	});
}
function so(e, t) {
	Za(e, t), t[0].abort(), Ma(e, t[3]), t[3] = [], e._tx === t && (e.batch(() => {
		e.stores.status.set("idle"), e.stores.setMatches(e._committed);
	}), e._tx === t && (e._commitPromise?.resolve(), e._commitPromise = void 0));
}
async function co(e, t, n, r, i) {
	let a = n.map((e) => ({ ...e }));
	Fa(a);
	for (let t of r) ja(e, a[t[0]]), a[t[0]] = t[3];
	let o = [t[2], a], s;
	try {
		s = await Ka(e, o, r, t[0], t[1], i);
	} catch (t) {
		throw Ma(e, a), t;
	}
	if (Sa(s)) {
		Ma(e, a), s[0] === ba && e._tx === t && e._committed === n && await oo(e, t, s[1]);
		return;
	}
	let c = await qa(e, s, t[0].signal);
	if (e._tx !== t || e._committed !== n) {
		Ma(e, c[1]);
		return;
	}
	for (let t of c[1]) {
		let n = e._cache.get(t.id);
		n?._flight && n._flight === t._flight && (e._cache.delete(t.id), ja(e, n));
	}
	Qa(e, c[1]), Ma(e, n, c[1]);
}
async function lo(e, t, n, r, i, a) {
	let o = [
		t[0],
		t[1],
		() => e._tx === t && !!t[3].length,
		e._committed,
		void 0,
		i,
		n,
		a,
		r
	], s = await Ja(e, t[2], t[3], o);
	if (Sa(s)) {
		s[0] === ba && e._tx === t ? (Za(e, t), Ma(e, t[3]), t[3] = [], e._tx === t && (process.env.NODE_ENV !== "production" && t[6] && (e._refreshNextLoad = !0), await oo(e, t, s[1]))) : so(e, t);
		return;
	}
	let c = e._pending;
	if (c?.[0] === t && (clearTimeout(c[3]), c[4])) {
		let n = t[0].signal, r = !1;
		try {
			r = await Ca(c[4], n);
		} catch (e) {
			if (e !== n) throw e;
		}
		if (r && e._pending === c && c[0] === t) {
			let e = c[2] - Date.now();
			if (e > 0) {
				try {
					await Ca(new Promise((t) => {
						c[3] = setTimeout(t, e);
					}), n);
				} catch {}
				clearTimeout(c[3]);
			}
		}
	}
	if (e._tx !== t) {
		Za(e, t), $a(e, s);
		return;
	}
	let l = t[2], u = $i(l, e.stores.resolvedLocation.get()), d = s[2];
	await e.startViewTransition(async () => {
		if (e._tx !== t) {
			$a(e, s);
			return;
		}
		let n = process.env.NODE_ENV !== "production" && t[6] ? await io(e, t, s, u) : await e.startTransition(() => {
			Za(e, t), eo(e, t, s[1], a), e._tx === t && (e.emit({
				type: "onLoad",
				...u
			}), e._tx === t && e.emit({
				type: "onBeforeRouteMount",
				...u
			}));
		}, s[1]);
		if (!(process.env.NODE_ENV !== "production" && t[6] && n === void 0)) {
			if (e._tx !== t) {
				Wa(e, s);
				return;
			}
			d?.length && co(e, t, s[1], d, s[3]).catch(console.error), e.batch(() => {
				e.stores.resolvedLocation.set(l), e.stores.status.set("idle"), e._tx === t && e.emit({
					type: "onResolved",
					...u
				}), n && e._tx === t && e.emit({
					type: "onRendered",
					...u
				});
			}), e._tx === t && (e._commitPromise?.resolve(), e._commitPromise = void 0);
		}
	});
}
async function uo(e, t) {
	let n = !1;
	process.env.NODE_ENV !== "production" && (e._tx?.[6]?.[2]?.(), n = !!e._refreshNextLoad || !!e._tx?.[6]);
	let r = n ? e.stores.matches.get() : void 0, i = e._tx, a = e.stores.resolvedLocation.get(), o = a ?? e.stores.location.get(), s = e.latestLocation, c = e._pendingLocation, l = c?.href === s.href ? c._redirects ?? 0 : 0, u = e._handoff, d = n ? void 0 : u?.[0](), f = new AbortController(), p = e._preflight;
	if (e._preflight = f, !n && !d && u?.[1](), p?.abort(), f.signal.aborted) {
		await ao(e, i);
		return;
	}
	let m = $i(s, a);
	if (e.emit({
		type: "onBeforeNavigate",
		...m
	}), f.signal.aborted || e.emit({
		type: "onBeforeLoad",
		...m
	}), f.signal.aborted) {
		await ao(e, i);
		return;
	}
	let h = o.href === s.href, g, _ = f;
	try {
		g = process.env.NODE_ENV !== "production" && n ? e.matchRoutes(s, {
			_controller: f,
			_rematerialize: !0
		}) : e.matchRoutes(s, { _controller: f }), Fa(g);
	} catch (t) {
		if (f.abort(), !P(t)) {
			process.env.NODE_ENV !== "production" && n && (e._refreshNextLoad = void 0), await ao(e), e._commitPromise?.resolve(), e._commitPromise = void 0;
			return;
		}
		await e.navigate({
			...t.options,
			replace: !0,
			ignoreBlocker: !0
		}), await ao(e, i);
		return;
	}
	let v = d ? u[1](g) : void 0;
	if (v ? _ = d : d?.abort(), f.signal.aborted) {
		Ma(e, g), await ao(e, i);
		return;
	}
	e._preflight = void 0;
	let y = [
		_,
		l,
		s,
		g,
		Date.now(),
		Promise.resolve().then(() => lo(e, y, h, () => Xa(e, y), t?.sync, v)).catch(() => {
			e._tx === y && so(e, y);
		})
	];
	if (process.env.NODE_ENV !== "production" && n && (y[6] = [r, u], e._refreshNextLoad = void 0), e._tx = y, i) {
		for (let t of e.stores.matches.get()) {
			if (e._tx !== y) break;
			t.isFetching && Ia(e, t, !1);
		}
		i[0].abort(), Na(e, i[3], y[3]);
	}
	if (e._tx !== y) {
		Ma(e, y[3]), y[3] = [], await ao(e, y);
		return;
	}
	e.batch(() => {
		e.stores.status.set("pending"), e.stores.location.set(s);
	}), Xa(e, y);
	try {
		await y[5];
	} finally {
		await ao(e, y);
	}
}
async function fo(e) {
	e._tx?.[6]?.[2]?.();
	let t = e._tx;
	t && !t[6] && e.stores.status.get() === "pending" && (await t[5], e._tx !== t && await ao(e, t)), e._flights?.clear(), e.clearCache(), e._refreshNextLoad = !0, await uo(e, { sync: !0 });
}
async function po(e, t, n = 0) {
	if (n > 20 || process.env.NODE_ENV !== "production" && (e._refreshNextLoad || e._tx?.[6])) return;
	let r = t._builtLocation ?? e.buildLocation(t), i = e._committed, a = new AbortController(), o;
	try {
		o = e.matchRoutes(r, { _controller: a }), Fa(o);
	} catch (e) {
		a.abort(), hi(e) || console.error(e);
		return;
	}
	(e._preloads ??= /* @__PURE__ */ new Map()).set(a, o);
	let s;
	try {
		let t;
		try {
			t = await Ja(e, r, o, [
				a,
				n,
				() => !0,
				i,
				!0
			]);
		} finally {
			s = e._preloads.delete(a), Ma(e, o), a.abort();
		}
		if (!Sa(t)) return t[1];
		if (s && t[0] === ba && !t[1].options.reloadDocument) return po(e, {
			...t[1].options,
			_fromLocation: r
		}, n + 1);
	} catch (e) {
		hi(e) || console.error(e);
	}
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/CatchBoundary.js
function mo(e) {
	return /* @__PURE__ */ Q(ho, { ...e });
}
var ho = class extends K.Component {
	constructor(...e) {
		super(...e), this.state = { error: null }, this.reset = () => {
			this.setState({ error: null });
		};
	}
	static getDerivedStateFromProps(e, t) {
		let n = e.getResetKey();
		return t.error && t.resetKey !== n ? {
			resetKey: n,
			error: null
		} : { resetKey: n };
	}
	static getDerivedStateFromError(e) {
		return { error: e };
	}
	componentDidCatch(e, t) {
		this.props.onCatch?.(e, t);
	}
	render() {
		let e = this.state.error;
		return e ? K.createElement(this.props.errorComponent ?? go, {
			error: e,
			reset: this.reset
		}) : this.props.children;
	}
};
function go({ error: e }) {
	let [t, n] = K.useState(process.env.NODE_ENV !== "production");
	return /* @__PURE__ */ $("div", {
		style: {
			padding: ".5rem",
			maxWidth: "100%"
		},
		children: [
			/* @__PURE__ */ $("div", {
				style: {
					display: "flex",
					alignItems: "center",
					gap: ".5rem"
				},
				children: [/* @__PURE__ */ Q("strong", {
					style: { fontSize: "1rem" },
					children: "Something went wrong!"
				}), /* @__PURE__ */ Q("button", {
					style: {
						appearance: "none",
						fontSize: ".6em",
						border: "1px solid currentColor",
						padding: ".1rem .2rem",
						fontWeight: "bold",
						borderRadius: ".25rem"
					},
					onClick: () => n((e) => !e),
					children: t ? "Hide Error" : "Show Error"
				})]
			}),
			/* @__PURE__ */ Q("div", { style: { height: ".25rem" } }),
			t ? /* @__PURE__ */ Q("div", { children: /* @__PURE__ */ Q("pre", {
				style: {
					fontSize: ".7em",
					border: "1px solid red",
					borderRadius: ".25rem",
					padding: ".3rem",
					color: "red",
					overflow: "auto"
				},
				children: e.message ? /* @__PURE__ */ Q("code", { children: e.message }) : null
			}) }) : null
		]
	});
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/alien.js
var _o = /* @__PURE__ */ ((e) => (e[e.None = 0] = "None", e[e.Mutable = 1] = "Mutable", e[e.Watching = 2] = "Watching", e[e.RecursedCheck = 4] = "RecursedCheck", e[e.Recursed = 8] = "Recursed", e[e.Dirty = 16] = "Dirty", e[e.Pending = 32] = "Pending", e))(_o || {});
// @__NO_SIDE_EFFECTS__
function vo({ update: e, notify: t, unwatched: n }) {
	return {
		link: r,
		unlink: i,
		propagate: a,
		checkDirty: o,
		shallowPropagate: s
	};
	function r(e, t, n) {
		let r = t.depsTail;
		if (r !== void 0 && r.dep === e) return;
		let i = r === void 0 ? t.deps : r.nextDep;
		if (i !== void 0 && i.dep === e) {
			i.version = n, t.depsTail = i;
			return;
		}
		let a = e.subsTail;
		if (a !== void 0 && a.version === n && a.sub === t) return;
		let o = t.depsTail = e.subsTail = {
			version: n,
			dep: e,
			sub: t,
			prevDep: r,
			nextDep: i,
			prevSub: a,
			nextSub: void 0
		};
		i !== void 0 && (i.prevDep = o), r === void 0 ? t.deps = o : r.nextDep = o, a === void 0 ? e.subs = o : a.nextSub = o;
	}
	function i(e, t = e.sub) {
		let r = e.dep, i = e.prevDep, a = e.nextDep, o = e.nextSub, s = e.prevSub;
		return a === void 0 ? t.depsTail = i : a.prevDep = i, i === void 0 ? t.deps = a : i.nextDep = a, o === void 0 ? r.subsTail = s : o.prevSub = s, s === void 0 ? (r.subs = o) === void 0 && n(r) : s.nextSub = o, a;
	}
	function a(e) {
		let n = e.nextSub, r;
		top: do {
			let i = e.sub, a = i.flags;
			if (a & 60 ? a & 12 ? a & 4 ? !(a & 48) && c(e, i) ? (i.flags = a | 40, a &= 1) : a = 0 : i.flags = a & -9 | 32 : a = 0 : i.flags = a | 32, a & 2 && t(i), a & 1) {
				let t = i.subs;
				if (t !== void 0) {
					let i = (e = t).nextSub;
					i !== void 0 && (r = {
						value: n,
						prev: r
					}, n = i);
					continue;
				}
			}
			if ((e = n) !== void 0) {
				n = e.nextSub;
				continue;
			}
			for (; r !== void 0;) if (e = r.value, r = r.prev, e !== void 0) {
				n = e.nextSub;
				continue top;
			}
			break;
		} while (!0);
	}
	function o(t, n) {
		let r, i = 0, a = !1;
		top: do {
			let o = t.dep, c = o.flags;
			if (n.flags & 16) a = !0;
			else if ((c & 17) == 17) {
				if (e(o)) {
					let e = o.subs;
					e.nextSub !== void 0 && s(e), a = !0;
				}
			} else if ((c & 33) == 33) {
				(t.nextSub !== void 0 || t.prevSub !== void 0) && (r = {
					value: t,
					prev: r
				}), t = o.deps, n = o, ++i;
				continue;
			}
			if (!a) {
				let e = t.nextDep;
				if (e !== void 0) {
					t = e;
					continue;
				}
			}
			for (; i--;) {
				let i = n.subs, o = i.nextSub !== void 0;
				if (o ? (t = r.value, r = r.prev) : t = i, a) {
					if (e(n)) {
						o && s(i), n = t.sub;
						continue;
					}
					a = !1;
				} else n.flags &= -33;
				n = t.sub;
				let c = t.nextDep;
				if (c !== void 0) {
					t = c;
					continue top;
				}
			}
			return a;
		} while (!0);
	}
	function s(e) {
		do {
			let n = e.sub, r = n.flags;
			(r & 48) == 32 && (n.flags = r | 16, (r & 6) == 2 && t(n));
		} while ((e = e.nextSub) !== void 0);
	}
	function c(e, t) {
		let n = t.depsTail;
		for (; n !== void 0;) {
			if (n === e) return !0;
			n = n.prevDep;
		}
		return !1;
	}
}
//#endregion
//#region ../../node_modules/@tanstack/store/dist/esm/atom.js
function yo(e, t, n) {
	let r = typeof e == "object", i = r ? e : void 0;
	return {
		next: (r ? e.next : e)?.bind(i),
		error: (r ? e.error : t)?.bind(i),
		complete: (r ? e.complete : n)?.bind(i)
	};
}
var bo = [], xo = 0, { link: So, unlink: Co, propagate: wo, checkDirty: To, shallowPropagate: Eo } = /* @__PURE__ */ vo({
	update(e) {
		return e._update();
	},
	notify(e) {
		bo[Oo++] = e, e.flags &= ~_o.Watching;
	},
	unwatched(e) {
		e.depsTail !== void 0 && (e.depsTail = void 0, e.flags = _o.Mutable | _o.Dirty, Mo(e));
	}
}), Do = 0, Oo = 0, ko, Ao = 0;
function jo(e) {
	try {
		++Ao, e();
	} finally {
		--Ao || No();
	}
}
function Mo(e) {
	let t = e.depsTail, n = t === void 0 ? e.deps : t.nextDep;
	for (; n !== void 0;) n = Co(n, e);
}
function No() {
	if (!(Ao > 0)) {
		for (; Do < Oo;) {
			let e = bo[Do];
			bo[Do++] = void 0, e.notify();
		}
		Do = 0, Oo = 0;
	}
}
function Po(e, t) {
	let n = typeof e == "function", r = e, i = {
		_snapshot: n ? void 0 : e,
		subs: void 0,
		subsTail: void 0,
		deps: void 0,
		depsTail: void 0,
		flags: n ? _o.None : _o.Mutable,
		get() {
			return ko !== void 0 && So(i, ko, xo), i._snapshot;
		},
		subscribe(e) {
			let t = yo(e), n = { current: !1 }, r = Fo(() => {
				i.get(), n.current ? t.next?.(i._snapshot) : n.current = !0;
			});
			return { unsubscribe: () => {
				r.stop();
			} };
		},
		_update(e) {
			let a = ko, o = t?.compare ?? Object.is;
			if (n) ko = i, ++xo, i.depsTail = void 0;
			else if (e === void 0) return !1;
			n && (i.flags = _o.Mutable | _o.RecursedCheck);
			try {
				let t = i._snapshot, a = typeof e == "function" ? e(t) : e === void 0 && n ? r(t) : e;
				return t === void 0 || !o(t, a) ? (i._snapshot = a, !0) : !1;
			} finally {
				ko = a, n && (i.flags &= ~_o.RecursedCheck), Mo(i);
			}
		}
	};
	return n ? (i.flags = _o.Mutable | _o.Dirty, i.get = function() {
		let e = i.flags;
		if (e & _o.Dirty || e & _o.Pending && To(i.deps, i)) {
			if (i._update()) {
				let e = i.subs;
				e !== void 0 && Eo(e);
			}
		} else e & _o.Pending && (i.flags = e & ~_o.Pending);
		return ko !== void 0 && So(i, ko, xo), i._snapshot;
	}) : i.set = function(e) {
		if (i._update(e)) {
			let e = i.subs;
			e !== void 0 && (wo(e), Eo(e), No());
		}
	}, i;
}
function Fo(e) {
	let t = () => {
		let t = ko;
		ko = n, ++xo, n.depsTail = void 0, n.flags = _o.Watching | _o.RecursedCheck;
		try {
			return e();
		} finally {
			ko = t, n.flags &= ~_o.RecursedCheck, Mo(n);
		}
	}, n = {
		deps: void 0,
		depsTail: void 0,
		subs: void 0,
		subsTail: void 0,
		flags: _o.Watching | _o.RecursedCheck,
		notify() {
			let e = this.flags;
			e & _o.Dirty || e & _o.Pending && To(this.deps, this) ? t() : this.flags = _o.Watching;
		},
		stop() {
			this.flags = _o.None, this.depsTail = void 0, Mo(this);
		}
	};
	return t(), n;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/not-found.js
function Io(e) {
	let t = sn(), n = `not-found-${F(t.stores.location, (e) => e.pathname)}-${F(t.stores.status, (e) => e)}`;
	return /* @__PURE__ */ Q(mo, {
		getResetKey: () => n,
		onCatch: (t, n) => {
			if (hi(t)) e.onCatch?.(t, n);
			else throw t;
		},
		errorComponent: ({ error: t }) => {
			if (hi(t)) return e.fallback?.(t);
			throw t;
		},
		children: e.children
	});
}
function Lo() {
	return /* @__PURE__ */ Q("p", { children: "Not Found" });
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/SafeFragment.js
function Ro(e) {
	return /* @__PURE__ */ Q(fi, { children: e.children });
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/renderRouteNotFound.js
function zo(e, t, n) {
	return t.options.notFoundComponent ? /* @__PURE__ */ Q(t.options.notFoundComponent, { ...n }) : e.options.defaultNotFoundComponent ? /* @__PURE__ */ Q(e.options.defaultNotFoundComponent, { ...n }) : (process.env.NODE_ENV !== "production" && (t.options.notFoundComponent || console.warn(`Warning: A notFoundError was encountered on the route with ID "${t.id}", but a notFoundComponent option was not configured, nor was a router level defaultNotFoundComponent configured. Consider configuring at least one of these to avoid TanStack Router's overly generic defaultNotFoundComponent (<p>Not Found</p>)`)), /* @__PURE__ */ Q(Lo, {}));
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Match.js
function Bo(e, t) {
	let n = t?.options.pendingComponent ?? e.options.defaultPendingComponent;
	return n ? /* @__PURE__ */ Q(n, {}) : null;
}
var Vo = (e, t) => e[0] === t[0] && e[1] === t[1], Ho = K.memo(function({ routeId: e }) {
	let t = sn();
	return /* @__PURE__ */ Q(Uo, {
		router: t,
		match: F(t.stores.getMatchStore(e), (e) => e)
	});
});
function Uo({ router: e, match: t }) {
	let n = e.routesById[t.routeId], r = Bo(e, n), i = n.options.errorComponent ?? e.options.defaultErrorComponent, a = n.options.onCatch ?? e.options.defaultOnCatch, o = n.isRoot ? n.options.notFoundComponent ?? e.options.notFoundRoute?.options.component : n.options.notFoundComponent, s = t.ssr === !1 || t.ssr === "data-only", c = n.options.wrapInSuspense ?? r ?? (n.options.errorComponent?.preload || s) ? K.Suspense : Ro, l = i ? mo : Ro, u = o ? Io : Ro;
	return /* @__PURE__ */ $(n.isRoot ? n.options.shellComponent ?? Ro : Ro, { children: [/* @__PURE__ */ Q(k.Provider, {
		value: t.routeId,
		children: /* @__PURE__ */ Q(c, {
			fallback: r,
			children: /* @__PURE__ */ Q(l, {
				getResetKey: () => t,
				errorComponent: i,
				onCatch: (e, n) => {
					if (hi(e)) throw e.routeId ??= t.routeId, e;
					process.env.NODE_ENV !== "production" && console.warn(`Warning: Error in route match: ${t.id}`), a?.(e, n);
				},
				children: /* @__PURE__ */ Q(u, {
					fallback: (e) => {
						if (e.routeId ??= t.routeId, e.routeId !== t.routeId) throw e;
						return K.createElement(o, e);
					},
					children: s ? /* @__PURE__ */ Q(A, {
						fallback: r,
						children: /* @__PURE__ */ Q(Wo, { match: t })
					}) : /* @__PURE__ */ Q(Wo, { match: t })
				})
			})
		})
	}), null] });
}
var Wo = K.memo(function({ match: e }) {
	let t = sn(), n = e.routeId, r = t.routesById[n], i = K.useMemo(() => {
		let i = (r.options.remountDeps ?? t.options.defaultRemountDeps)?.({
			routeId: n,
			loaderDeps: e.loaderDeps,
			params: e._strictParams,
			search: e._strictSearch
		});
		return i ? JSON.stringify(i) : void 0;
	}, [
		n,
		e.loaderDeps,
		e._strictParams,
		e._strictSearch,
		r.options.remountDeps,
		t.options.defaultRemountDeps
	]), a = K.useMemo(() => {
		let e = r.options.component ?? t.options.defaultComponent;
		return e ? /* @__PURE__ */ Q(e, {}, i) : /* @__PURE__ */ Q(Go, {});
	}, [
		i,
		r.options.component,
		t.options.defaultComponent
	]);
	if (e.status === "pending") {
		if (t._tx) throw t._tx[5];
		return Bo(t, r);
	}
	if (e.status === "notFound") return zo(t, r, e.error);
	if (e.status === "error") throw e.error;
	return a;
}), Go = K.memo(function() {
	let e = sn(), t = K.useContext(k), n, r, i;
	{
		let a = e.stores.getMatchStore(t);
		[n, r] = F(a, (e) => [!!e._notFound, e.error], Vo), i = F(e.stores.ids, (e) => e[e.indexOf(t) + 1]);
	}
	if (n) return zo(e, e.routesById[t], r);
	if (!i) return null;
	let a = /* @__PURE__ */ Q(Ho, { routeId: i });
	return t === "__root__" ? /* @__PURE__ */ Q(K.Suspense, {
		fallback: Bo(e),
		children: a
	}) : a;
});
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Transitioner.js
function Ko(e, t) {
	let n = e[1];
	e.length = 0, n?.(t);
}
function qo({ t: e }) {
	let t = sn(), n = t._rendered ??= [], r = process.env.NODE_ENV === "production" ? void 0 : K.useRef(!1);
	return t.startTransition = (r, i) => new Promise((a, o) => {
		Ko(n, !1), n.push(i, a), e(t), K.startTransition(() => {
			try {
				r();
			} catch (e) {
				n[1] === a && (n.length = 0), o(e);
			}
		});
	}), process.env.NODE_ENV !== "production" && (t._cancelTransition = () => Ko(n, !1)), m(() => {
		let e = t.history.subscribe(t.load);
		if (r?.current) return e;
		r && (r.current = !0), t.updateLatestLocation();
		let i = t.latestLocation, a = t.buildLocation({
			to: i.pathname,
			search: !0,
			params: !0,
			hash: !0,
			state: !0,
			_includeValidateSearch: !0
		});
		if (S(i.publicHref) !== S(a.publicHref)) return t.commitLocation({
			...a,
			replace: !0,
			ignoreBlocker: !0
		}), e;
		let o = t.stores.resolvedLocation.get();
		return o?.href === i.href && o.state.__TSR_key === i.state.__TSR_key ? n.push(t.stores.matches.get(), (e) => {
			e && t.emit({
				type: "onRendered",
				...$i(o, o)
			});
		}) : t._tx || t.load().catch(console.error), e;
	}, [t, t.history]), null;
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/Matches.js
function Jo() {
	let e = sn(), t = e.routesById[M], n = Bo(e, t), r = e.ssr ? Ro : K.Suspense, i = /* @__PURE__ */ $(fi, { children: [/* @__PURE__ */ Q(qo, { t: K.useState()[1] }), /* @__PURE__ */ Q(r, {
		fallback: n,
		children: /* @__PURE__ */ Q(Yo, {})
	})] });
	return e.options.InnerWrap ? /* @__PURE__ */ Q(e.options.InnerWrap, { children: i }) : i;
}
function Yo() {
	let e = sn(), t = e._rendered, n = F(e.stores.matches, (e) => t[0] ?? e), r = n[0], i = r?.routeId;
	m(() => {
		t[0] === n && Ko(t, !0);
	}, [t, n]);
	let a = i ? /* @__PURE__ */ Q(Ho, { routeId: i }) : null;
	return /* @__PURE__ */ Q(k.Provider, {
		value: i,
		children: e.options.disableGlobalCatchBoundary ? a : /* @__PURE__ */ Q(mo, {
			getResetKey: () => r,
			onCatch: process.env.NODE_ENV === "production" ? void 0 : (e) => {
				console.warn("Warning: The following error wasn't caught by any route! At the very least, consider setting an 'errorComponent' in your RootRoute!"), console.warn(`Warning: ${e.message || e.toString()}`);
			},
			children: a
		})
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/routerStores.js
var Xo = (e) => ({
	createMutableStore: Po,
	createReadonlyStore: Po,
	batch: jo
}), Zo = (e) => new Qo(e), Qo = class extends na {
	constructor(e) {
		super(e, Xo);
	}
};
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/RouterProvider.js
function $o({ router: e, children: t, ...n }) {
	g(n) && e.update({
		...e.options,
		...n,
		context: {
			...e.options.context,
			...n.context
		}
	});
	let r = /* @__PURE__ */ Q(dr.Provider, {
		value: e,
		children: t
	});
	return e.options.Wrap ? /* @__PURE__ */ Q(e.options.Wrap, { children: r }) : r;
}
function es({ router: e, ...t }) {
	return /* @__PURE__ */ Q($o, {
		router: e,
		...t,
		children: /* @__PURE__ */ Q(Jo, {})
	});
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useRouterState.js
function ts(e) {
	let t = sn({ warn: e?.router === void 0 }), n = e?.router || t;
	return F(n.stores.__store, ne(e, n));
}
//#endregion
//#region ../../node_modules/@tanstack/react-router/dist/esm/useLocation.js
function ns(e) {
	let t = sn();
	return F(t.stores.location, ne(e, t));
}
//#endregion
//#region src/assets/icons.tsx
var rs = (e) => /* @__PURE__ */ Q("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.8",
	...e,
	children: /* @__PURE__ */ Q("path", {
		d: "m5 10 3 3 7-7",
		strokeLinecap: "round",
		strokeLinejoin: "round"
	})
}), is = (e) => /* @__PURE__ */ $("svg", {
	viewBox: "0 0 20 20",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.5",
	...e,
	children: [/* @__PURE__ */ Q("rect", {
		x: "6",
		y: "6",
		width: "9",
		height: "12",
		rx: "2"
	}), /* @__PURE__ */ Q("path", { d: ["M13 4V3a2 2 0 0 0-2-2H4.5A2.5 2.5 0 0 0 2 3.5", "v9A2.5 2.5 0 0 0 4.5 15H6"].join(" ") })]
}), as = class extends Rr {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Set(), this.#t = /* @__PURE__ */ new Map(), this.#n = 0;
	}
	#e;
	#t;
	#n;
	build(e, t, n) {
		let r = new Gt({
			client: e,
			mutationCache: this,
			mutationId: ++this.#n,
			options: e.defaultMutationOptions(t),
			state: n
		});
		return this.add(r), r;
	}
	add(e) {
		this.#e.add(e);
		let t = os(e);
		if (typeof t == "string") {
			let n = this.#t.get(t);
			n ? n.push(e) : this.#t.set(t, [e]);
		}
		this.notify({
			type: "added",
			mutation: e
		});
	}
	remove(e) {
		if (this.#e.delete(e)) {
			let t = os(e);
			if (typeof t == "string") {
				let n = this.#t.get(t);
				if (n) {
					if (n.length > 1) {
						let t = n.indexOf(e);
						t !== -1 && n.splice(t, 1);
					} else n[0] === e && this.#t.delete(t);
				}
			}
		}
		this.notify({
			type: "removed",
			mutation: e
		});
	}
	canRun(e) {
		let t = os(e);
		if (typeof t == "string") {
			let n = this.#t.get(t)?.find((e) => e.state.status === "pending");
			return !n || n === e;
		}
		return !0;
	}
	runNext(e) {
		let t = os(e);
		return typeof t == "string" ? (this.#t.get(t)?.find((t) => t !== e && t.state.isPaused))?.continue() ?? Promise.resolve() : Promise.resolve();
	}
	clear() {
		L.batch(() => {
			this.#e.forEach((e) => {
				this.notify({
					type: "removed",
					mutation: e
				});
			}), this.#e.clear(), this.#t.clear();
		});
	}
	getAll() {
		return Array.from(this.#e);
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => Tr(t, e));
	}
	findAll(e = {}) {
		return this.getAll().filter((t) => Tr(e, t));
	}
	notify(e) {
		L.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	resumePausedMutations() {
		let e = this.getAll().filter((e) => e.state.isPaused);
		return L.batch(() => Promise.all(e.map((e) => e.continue().catch(ln))));
	}
};
function os(e) {
	return e.options.scope?.id;
}
//#endregion
//#region ../../node_modules/@tanstack/query-core/build/modern/queryCache.js
var ss = class extends Rr {
	constructor(e = {}) {
		super(), this.config = e, this.#e = /* @__PURE__ */ new Map();
	}
	#e;
	build(e, t, n) {
		let r = t.queryKey, i = t.queryHash ?? cr(r, t), a = this.get(i);
		return a || (a = new Qt({
			client: e,
			queryKey: r,
			queryHash: i,
			options: e.defaultQueryOptions(t),
			state: n,
			defaultOptions: e.getQueryDefaults(r)
		}), this.add(a)), a;
	}
	add(e) {
		this.#e.has(e.queryHash) || (this.#e.set(e.queryHash, e), this.notify({
			type: "added",
			query: e
		}));
	}
	remove(e) {
		let t = this.#e.get(e.queryHash);
		t && (e.destroy(), t === e && this.#e.delete(e.queryHash), this.notify({
			type: "removed",
			query: e
		}));
	}
	clear() {
		L.batch(() => {
			this.getAll().forEach((e) => {
				this.remove(e);
			});
		});
	}
	get(e) {
		return this.#e.get(e);
	}
	getAll() {
		return [...this.#e.values()];
	}
	find(e) {
		let t = {
			exact: !0,
			...e
		};
		return this.getAll().find((e) => Vn(t, e));
	}
	findAll(e = {}) {
		let t = this.getAll();
		return Object.keys(e).length > 0 ? t.filter((t) => Vn(e, t)) : t;
	}
	notify(e) {
		L.batch(() => {
			this.listeners.forEach((t) => {
				t(e);
			});
		});
	}
	onFocus() {
		L.batch(() => {
			this.getAll().forEach((e) => {
				e.onFocus();
			});
		});
	}
	onOnline() {
		L.batch(() => {
			this.getAll().forEach((e) => {
				e.onOnline();
			});
		});
	}
}, cs = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a;
	#o;
	#s;
	constructor(e = {}) {
		this.#e = e.queryCache || new ss(), this.#t = e.mutationCache || new as(), this.#n = e.defaultOptions || {}, this.#r = /* @__PURE__ */ new Map(), this.#i = /* @__PURE__ */ new Map(), this.#a = 0;
	}
	mount() {
		this.#a++, this.#a === 1 && (this.#o = $n.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onFocus());
		}), this.#s = vt.subscribe(async (e) => {
			e && (await this.resumePausedMutations(), this.#e.onOnline());
		}));
	}
	unmount() {
		this.#a--, this.#a === 0 && (this.#o?.(), this.#o = void 0, this.#s?.(), this.#s = void 0);
	}
	isFetching(e) {
		return this.#e.findAll({
			...e,
			fetchStatus: "fetching"
		}).length;
	}
	isMutating(e) {
		return this.#t.findAll({
			...e,
			status: "pending"
		}).length;
	}
	getQueryData(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state.data;
	}
	ensureQueryData(e) {
		let t = this.defaultQueryOptions(e), n = this.#e.build(this, t), r = n.state.data;
		return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && n.isStaleByTime(kr(t.staleTime, n)) && this.prefetchQuery(t), Promise.resolve(r));
	}
	getQueriesData(e) {
		return this.#e.findAll(e).map(({ queryKey: e, state: t }) => [e, t.data]);
	}
	setQueryData(e, t, n) {
		let r = this.defaultQueryOptions({ queryKey: e }), i = this.#e.get(r.queryHash)?.state.data, a = Tn(t, i);
		if (a !== void 0) return this.#e.build(this, r).setData(a, {
			...n,
			manual: !0
		});
	}
	setQueriesData(e, t, n) {
		return L.batch(() => this.#e.findAll(e).map(({ queryKey: e }) => [e, this.setQueryData(e, t, n)]));
	}
	getQueryState(e) {
		let t = this.defaultQueryOptions({ queryKey: e });
		return this.#e.get(t.queryHash)?.state;
	}
	removeQueries(e) {
		let t = this.#e;
		L.batch(() => {
			t.findAll(e).forEach((e) => {
				t.remove(e);
			});
		});
	}
	resetQueries(e, t) {
		let n = this.#e;
		return L.batch(() => (n.findAll(e).forEach((e) => {
			e.reset();
		}), this.refetchQueries({
			type: "active",
			...e
		}, t)));
	}
	cancelQueries(e, t = {}) {
		let n = {
			revert: !0,
			...t
		}, r = L.batch(() => this.#e.findAll(e).map((e) => e.cancel(n)));
		return Promise.all(r).then(ln).catch(ln);
	}
	invalidateQueries(e, t = {}) {
		return L.batch(() => (this.#e.findAll(e).forEach((e) => {
			e.invalidate();
		}), e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
			...e,
			type: e?.refetchType ?? e?.type ?? "active"
		}, t)));
	}
	refetchQueries(e, t = {}) {
		let n = {
			...t,
			cancelRefetch: t.cancelRefetch ?? !0
		}, r = L.batch(() => this.#e.findAll(e).filter((e) => !e.isDisabled() && !e.isStatic()).map((e) => {
			let t = e.fetch(void 0, n);
			return n.throwOnError || (t = t.catch(ln)), e.state.fetchStatus === "paused" ? Promise.resolve() : t;
		}));
		return Promise.all(r).then(ln);
	}
	fetchQuery(e) {
		let t = this.defaultQueryOptions(e);
		t.retry === void 0 && (t.retry = !1);
		let n = this.#e.build(this, t);
		return n.isStaleByTime(kr(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
	}
	prefetchQuery(e) {
		return this.fetchQuery(e).then(ln).catch(ln);
	}
	fetchInfiniteQuery(e) {
		return e._type = "infinite", this.fetchQuery(e);
	}
	prefetchInfiniteQuery(e) {
		return this.fetchInfiniteQuery(e).then(ln).catch(ln);
	}
	ensureInfiniteQueryData(e) {
		return e._type = "infinite", this.ensureQueryData(e);
	}
	resumePausedMutations() {
		return vt.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
	}
	getQueryCache() {
		return this.#e;
	}
	getMutationCache() {
		return this.#t;
	}
	getDefaultOptions() {
		return this.#n;
	}
	setDefaultOptions(e) {
		this.#n = e;
	}
	setQueryDefaults(e, t) {
		this.#r.set(Pr(e), {
			queryKey: e,
			defaultOptions: t
		});
	}
	getQueryDefaults(e) {
		let t = [...this.#r.values()], n = {};
		return t.forEach((t) => {
			pr(e, t.queryKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	setMutationDefaults(e, t) {
		this.#i.set(Pr(e), {
			mutationKey: e,
			defaultOptions: t
		});
	}
	getMutationDefaults(e) {
		let t = [...this.#i.values()], n = {};
		return t.forEach((t) => {
			pr(e, t.mutationKey) && Object.assign(n, t.defaultOptions);
		}), n;
	}
	defaultQueryOptions(e) {
		if (e._defaulted) return e;
		let t = {
			...this.#n.queries,
			...this.getQueryDefaults(e.queryKey),
			...e,
			_defaulted: !0
		};
		return t.queryHash ||= cr(t.queryKey, t), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === _n && (t.enabled = !1), t;
	}
	defaultMutationOptions(e) {
		return e?._defaulted ? e : {
			...this.#n.mutations,
			...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
			...e,
			_defaulted: !0
		};
	}
	clear() {
		this.#e.clear(), this.#t.clear();
	}
}, ls = {
	openLabel: "Open debug information drawer",
	modalTitle: "Debug Information",
	copyLabel: "Copy",
	resetLabel: "Reset payment form",
	overrideOpenLabel: "Open override payload drawer",
	overrideTitle: "Override Payload",
	overrideDescription: "Provide JSON to merge into your next payment request.",
	overrideJsonLabel: "JSON",
	overrideJsonAria: "Override payload JSON",
	overrideInvalidJson: "Invalid JSON payload",
	overrideLocked: "Editing is disabled while a payment is processing.",
	saveLabel: "Save"
}, us = "error.override_payload_locked";
function ds() {
	let { debug: e } = ci(H), { registerOverlay: t } = Hr();
	return J(() => {
		e || t(null);
	}, [e, t]), e ? /* @__PURE__ */ Q(fs, {}) : null;
}
function fs() {
	let { merchantId: e, userId: t, apiUrl: n, method: r, currency: i } = ci(H), { pathname: a } = ns(), { registerOverlay: o } = Hr(), [s, c] = Z(!1), [l, u] = Z(null), d = X(null), f = Y(() => [
		{
			label: "Merchant ID",
			value: e
		},
		{
			label: "User ID",
			value: t
		},
		{
			label: "API URL",
			value: n
		},
		{
			label: "Internal Route",
			value: a
		},
		{
			label: "Method",
			value: r
		},
		{
			label: "Currency",
			value: i
		}
	], [
		n,
		i,
		e,
		r,
		a,
		t
	]), p = a.startsWith("/pt/"), m = ls.openLabel, h = ls.modalTitle, g = ls.copyLabel, _ = q((e) => {
		let t = e.value?.toString().trim();
		if (!t || typeof window > "u") return;
		let n = window.navigator.clipboard;
		n && n.writeText(t).then(() => {
			u(e.label), d.current && window.clearTimeout(d.current), d.current = window.setTimeout(() => {
				u(null);
			}, 1600);
		}).catch(() => {
			u(null);
		});
	}, []), v = q(() => {
		c(!0);
	}, []), y = q(() => {
		c(!1), u(null);
	}, []), b = Y(() => {
		let e = [];
		return e.push(/* @__PURE__ */ Q(ps, {}, "cashier-reset-form")), p && e.push(/* @__PURE__ */ Q(ms, {}, "cashier-override-payload")), e.push(/* @__PURE__ */ Q(or, {
			"aria-label": m,
			variant: "neutral",
			size: "lg",
			onClick: v,
			iconOnly: !0,
			label: m,
			leadingIcon: /* @__PURE__ */ Q(Ie, {})
		}, "cashier-debug-tools")), /* @__PURE__ */ Q("div", {
			className: "flex items-center gap-2",
			children: e
		});
	}, [
		v,
		p,
		m
	]);
	return J(() => (o(b), () => {
		o(null);
	}), [b, o]), J(() => () => {
		d.current && window.clearTimeout(d.current);
	}, []), /* @__PURE__ */ Q(Ue, {
		isOpen: s,
		onClose: y,
		title: h,
		children: /* @__PURE__ */ Q("div", {
			className: "px-5 pb-5 pt-2",
			children: f.map((e) => {
				let t = l === e.label;
				return /* @__PURE__ */ $("div", {
					className: "flex flex-wrap items-center gap-2 py-1",
					children: [
						/* @__PURE__ */ Q("span", {
							className: "font-medium text-[var(--pc-color-text)]",
							children: e.label
						}),
						/* @__PURE__ */ Q("span", {
							className: "break-all text-[var(--pc-color-text-muted)]",
							children: e.value ?? "—"
						}),
						/* @__PURE__ */ Q("button", {
							type: "button",
							className: [
								"inline-flex h-7 w-7 items-center justify-center rounded-[var(--pc-radius-md)] text-[var(--pc-color-text-muted)]",
								"transition hover:text-[var(--pc-color-text)] hover:[background:var(--pc-color-surface-weaker)]",
								"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-accent)]"
							].join(" "),
							onClick: () => {
								_(e);
							},
							"aria-label": `${g} ${e.label}`,
							children: Q(t ? rs : is, {})
						})
					]
				}, e.label);
			})
		})
	});
}
function ps() {
	let { reset: e, hasResetHandler: t } = kn();
	return t ? /* @__PURE__ */ Q(or, {
		"aria-label": ls.resetLabel,
		variant: "neutral",
		size: "lg",
		onClick: () => {
			e();
		},
		iconOnly: !0,
		label: ls.resetLabel,
		leadingIcon: /* @__PURE__ */ Q(ye, {})
	}) : null;
}
function ms() {
	let { overridePayload: e, setOverridePayload: t, isLocked: n } = rr(), { translateKey: r } = ve(), [i, a] = Z(!1), [o, s] = Z(e), [c, l] = Z(null), u = q((t) => {
		s(t ?? e), l(null);
	}, [e]), d = o.trim().length === 0 ? "" : o, f = d !== (e.trim().length === 0 ? "" : e), p = r(us), m = p === us ? ls.overrideLocked : p, h = q(() => {
		u(), a(!0);
	}, [u]), g = q(() => {
		a(!1), u();
	}, [u]);
	return /* @__PURE__ */ $(fi, { children: [/* @__PURE__ */ Q(or, {
		"aria-label": ls.overrideOpenLabel,
		variant: "neutral",
		size: "lg",
		disabled: n,
		onClick: h,
		iconOnly: !0,
		label: ls.overrideOpenLabel,
		leadingIcon: /* @__PURE__ */ Q(Be, {})
	}), /* @__PURE__ */ Q(Ue, {
		isOpen: i,
		onClose: g,
		title: ls.overrideTitle,
		children: /* @__PURE__ */ $("div", {
			className: "flex flex-col gap-3 px-5 pb-5 pt-2",
			children: [
				/* @__PURE__ */ Q("p", {
					className: "text-sm text-[var(--pc-color-text-muted)]",
					children: ls.overrideDescription
				}),
				/* @__PURE__ */ Q(Ct, {
					label: ls.overrideJsonLabel,
					"aria-label": ls.overrideJsonAria,
					placeholder: Ln,
					type: "textarea",
					value: o,
					onChange: (e) => {
						c && l(null), s(e.target.value);
					},
					spellCheck: !1,
					disabled: n,
					error: c ?? void 0
				}),
				n && /* @__PURE__ */ Q("p", {
					className: "text-xs text-[var(--pc-color-text-muted)]",
					children: m
				}),
				/* @__PURE__ */ Q("div", {
					className: "flex items-center justify-end",
					children: /* @__PURE__ */ Q(or, {
						type: "button",
						variant: "secondary",
						onClick: () => {
							if (!n) {
								if (d.length > 0) try {
									JSON.parse(d);
								} catch {
									l(ls.overrideInvalidJson);
									return;
								}
								l(null), t(d), a(!1), u(d);
							}
						},
						disabled: n || !f || !!c,
						label: ls.saveLabel
					})
				})
			]
		})
	})] });
}
//#endregion
//#region src/hooks/usePaymentNavigation.ts
var hs = ({ paymentResponse: e, merchantId: t, debug: n, enabled: r = !0 }) => {
	let i = Bn(), a = R(), o = X(null), s = e?.paymentId, c = e?.status ?? e?.paymentStatus, l = e?.redirect, u = e?.form, d = l?.url ?? null, f = l?.method, p = l?.data, m = l?.type, h = l?.scriptId, g = l?.userFlowDoneUrl, _ = !!u?.actionUrl, v = Y(() => Wn(p, n), [n, p]), y = !!(d || _);
	J(() => {
		r && (!s || !c || y || o.current !== s && Jn(c) && a({
			paymentId: s,
			merchantId: t
		}));
	}, [
		r,
		a,
		t,
		s,
		c,
		y
	]), J(() => {
		if (!r || !d && !_ || o.current === s) return;
		s && (o.current = s);
		let e = {};
		s && (e.paymentId = s), d && (e.redirectUrl = d, f && (e.redirectMethod = f), m && (e.redirectType = st(m)), h && (e.redirectScriptId = h), g && (e.redirectUserFlowDoneUrl = g), v && (e.redirectData = v)), i({
			to: "/provider",
			search: e
		});
	}, [
		v,
		r,
		_,
		i,
		s,
		f,
		h,
		m,
		d,
		g
	]);
}, gs = (e) => e.startsWith("/provider");
function _s() {
	let { merchantId: e, debug: t } = ci(H), { payment: n } = nn(), r = R(), i = X(null), a = ts({ select: (e) => e.location.pathname }), o = ts({ select: (e) => e.matches.find((e) => e.routeId === "/summary/$id" && e.status === "error")?.id ?? null });
	return hs({
		paymentResponse: n,
		merchantId: e,
		debug: t,
		enabled: !gs(a)
	}), J(() => {
		if (!o) {
			i.current = null;
			return;
		}
		i.current !== o && (i.current = o, sr(), r());
	}, [o, r]), null;
}
//#endregion
//#region src/routes/__root.tsx
var vs = ae({ component: ys });
function ys() {
	return /* @__PURE__ */ $(fi, { children: [
		/* @__PURE__ */ Q(_s, {}),
		/* @__PURE__ */ Q(Go, {}),
		/* @__PURE__ */ Q(ds, {})
	] });
}
//#endregion
//#region src/routes/index.tsx
var bs = E("/")({ beforeLoad: ({ context: e }) => {
	let t = Ur(e);
	throw re({
		to: t,
		replace: !0
	});
} }), xs = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Ss = "pt-2.5 @md:pt-3", Cs = "!overflow-visible", ws = E("/bonus/")({ component: Ts });
function Ts() {
	let e = Dt(), t = Bn(), { translateKey: n } = ve(), { selectedPaymentType: r, uiComboView: a, lockAmount: o, uiInteractivePrompts: s, uiBonusesStyle: c, uiFixedControls: l, method: u, locale: d, uiListSelectable: f, initialAmount: p, onBonusSelected: m, onBonusDeselected: h, onBonusToppedUp: g, resetFlowOnBack: _, setCashierState: v } = ci(H), { getPaymentType: y, paymentTypesList: b, isLoading: x, isError: S } = Fr(), { bonuses: C, getBonusAvailabilityForPaymentType: w, getAvailableBonusesForPaymentType: T } = En(), { selectedBonusCode: E, selectBonusCode: D, ensureDefaultSelection: O } = pe(), { formatCurrencyValue: k } = Sn(), [A, j] = Z(!1), [M] = Z(() => wt(p)), [ee, N] = Z(null), [te, ne] = Z({}), re = X({}), [ae, P] = Z([]), oe = an({
		uiComboView: a,
		lockAmount: o,
		method: u
	}), { canGoBack: se, handleBack: ce } = Ar({
		defaultRoute: oe,
		useHistory: !_,
		replace: _ || !a
	});
	J(() => {
		_ && v((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [_, v]);
	let F = r ? y(r) : null, I = F ? Qn(F) : r, le = Y(() => w(F), [w, F]), ue = Y(() => qt(le), [le]), de = Y(() => T(F), [T, F]), fe = Y(() => ue.some((e) => e.status === "available"), [ue]), L = Y(() => wt(p), [p]), me = F ? de.length > 0 : Le(C), R = b.length > 0, he = x && !S && !R, z = S || !x && !R, B = f, ge = Y(() => E ? de.find((e) => e.code === E) ?? null : null, [de, E]), ye = Y(() => ge ? Je(ge, L) : null, [L, ge]), be = Y(() => ge, [ge]), xe = ye, V = xe?.fullClaimAmount ?? null, Se = V === null ? null : ni(V), Ce = Se ? Ge(Se, F?.limits) : null, we = be && V !== null ? [
		I ?? "",
		be.code,
		String(V)
	].join(":") : null, Te = q((e) => {
		if (!e || L === null) return !1;
		let t = Je(e, L), n = t?.fullClaimAmount ?? null;
		if (n === null || n <= L || pt({
			amount: L,
			fullClaimAmount: n,
			claimPercentage: t?.claimPercentage
		})) return !1;
		let r = ni(n), i = Ge(r, F?.limits);
		return !(i.isOutOfRange || i.isIncomplete);
	}, [L, F?.limits]), Ee = !!(be && xe && V !== null && Ce && Te(be) && ee !== we), De = B || Ee ? E : null, Oe = Y(() => De ? de.find((e) => e.code === De) ?? null : null, [de, De]), ke = Y(() => Oe ? Je(Oe, L) : null, [L, Oe]), Ae = Y(() => De ? de.find((e) => e.code === De) ?? null : null, [de, De]), U = Y(() => Ae ? Je(Ae, L) : null, [L, Ae]), Me = Y(() => {
		if (!De) return null;
		let e = te[De];
		return !e || !Ae || Ee || L === null || L < e.targetAmount - .001 ? null : e;
	}, [
		L,
		Ae,
		De,
		Ee,
		te
	]);
	J(() => {
		if (!(he || z)) {
			if (!qr(c)) {
				t(I ? {
					to: "/pt/$id",
					params: { id: I },
					replace: !0
				} : {
					to: oe,
					replace: !0
				});
				return;
			}
			if (!r) {
				t({
					to: oe,
					replace: !0
				});
				return;
			}
			if (!me) {
				if (!I) return;
				t({
					to: "/pt/$id",
					params: { id: I },
					replace: !0
				});
			}
		}
	}, [
		oe,
		z,
		t,
		I,
		r,
		me,
		he,
		c
	]), J(() => {
		let e = !!(E && de.some((e) => e.code === E));
		if (!(E && e)) {
			if (E && !e) {
				O(de);
				return;
			}
			A || O(de);
		}
	}, [
		de,
		O,
		A,
		E
	]);
	let Ne = q((e) => {
		let n = de.find((t) => t.code === e);
		if (n) {
			if (!B) {
				if (N(null), j(!0), D(e), m && m(n), !I || Te(n)) return;
				t({
					to: "/pt/$id",
					params: { id: I }
				});
				return;
			}
			E !== e && (N(null), j(!0), D(e), m && m(n));
		}
	}, [
		de,
		B,
		t,
		m,
		D,
		E,
		I,
		Te
	]), Pe = q(() => {
		I && t({
			to: "/pt/$id",
			params: { id: I }
		});
	}, [t, I]), Fe = q(() => {
		B && E === null || (N(null), j(!0), ge && h && h(ge), D(null), !B && I && t({
			to: "/pt/$id",
			params: { id: I }
		}));
	}, [
		B,
		t,
		h,
		D,
		E,
		ge,
		I
	]), Ie = q(() => {
		if (!Se || !be || V === null || L === null) return;
		let e = F ? T(F, { amount: V }) : de, n = /* @__PURE__ */ new Map();
		for (let e of de) n.set(e.code, e);
		for (let t of e) n.set(t.code, t);
		let r = Array.from(n.values()).reduce((e, t) => {
			let n = Je(t, L), r = Je(t, V);
			return !r || !pt({
				amount: V,
				fullClaimAmount: r.fullClaimAmount,
				claimPercentage: r.claimPercentage
			}) || pt({
				amount: L,
				fullClaimAmount: n?.fullClaimAmount,
				claimPercentage: n?.claimPercentage
			}) || (e[t.code] = { targetAmount: V }), e;
		}, {});
		v((e) => {
			let t = I ? {
				paymentTypeName: I,
				method: u,
				amount: e.initialAmount
			} : null;
			return {
				...e,
				initialAmount: Se,
				paymentFormDraft: t ? rt(e.paymentFormDraft, t, Se) : e.paymentFormDraft,
				comboViewFormDraft: t ? rt(e.comboViewFormDraft, t, Se) : e.comboViewFormDraft
			};
		}), ne((e) => ({
			...e,
			...r
		})), g?.({
			bonus: be,
			previousAmount: L,
			nextAmount: V,
			addedAmount: V - L,
			fullClaimAmount: V
		}), !B && I && t({
			to: "/pt/$id",
			params: { id: I }
		});
	}, [
		L,
		de,
		be,
		T,
		B,
		t,
		g,
		F,
		I,
		v,
		u,
		V,
		Se
	]), Re = q(() => {
		we && (N(we), !B && I && t({
			to: "/pt/$id",
			params: { id: I }
		}));
	}, [
		B,
		t,
		I,
		we
	]), ze = n(De ? "cta.claim" : "cta.skip"), Be = !I, Ve = n("cta.back"), He = n(u === i.PAYOUT ? "cta.payout" : "cta.payin").toLocaleLowerCase(d), Ue = q((e) => en(en("You’re claiming the full offer with a {amount} {method}!", "amount", e), "method", He), [He]), We = q((e) => /* @__PURE__ */ Q(ht, {
		value: e,
		strokeWidth: 5.5,
		className: G("h-14 w-14", "@max-md/interactive-prompt:h-12 @max-md/interactive-prompt:w-12"),
		contentClassName: "inset-[20%]",
		ariaLabel: [
			"Bonus claim progress",
			String(Math.round(e)),
			"percent"
		].join(" "),
		children: /* @__PURE__ */ Q("div", {
			className: "flex h-[82%] w-[82%] items-center justify-center",
			children: /* @__PURE__ */ Q(Rt, {})
		})
	}), []), Ke = Y(() => new Set(ae), [ae]), W = q((e, t) => !e || typeof t != "number" || !Number.isFinite(t) ? !1 : !pt({ claimPercentage: t }) || Ke.has(e), [Ke]);
	J(() => {
		let e = [
			be ? {
				bonusCode: be.code,
				claimPercentage: xe?.claimPercentage
			} : null,
			Oe ? {
				bonusCode: Oe.code,
				claimPercentage: ke?.claimPercentage
			} : null,
			Ae ? {
				bonusCode: Ae.code,
				claimPercentage: U?.claimPercentage
			} : null
		].filter((e) => e !== null);
		P((t) => {
			let n = new Set(t), r = !1;
			for (let { bonusCode: t, claimPercentage: i } of e) {
				let e = pt({ claimPercentage: i }), a = re.current[t];
				e ? a === !1 && !n.has(t) && (n.add(t), r = !0) : n.delete(t) && (r = !0), re.current[t] = e;
			}
			return r ? [...n] : t;
		});
	}, [
		Ae,
		U,
		be,
		xe,
		Oe,
		ke
	]);
	let qe = Y(() => {
		let e = {
			legacyTitle: n("cta.choose_bonus"),
			titleKey: "cta.interactive_prompt.choose_bonus.title",
			bodyKey: "cta.interactive_prompt.choose_bonus.desc",
			icon: /* @__PURE__ */ Q(Rt, {})
		}, t = L === null ? void 0 : k(L);
		if (Ee && be && xe) {
			let t = xe.claimPercentage, n = W(be.code, t);
			return {
				...e,
				titleKey: "bonus.top_up.title",
				titleValues: { claimPercentage: ot(xe.claimPercentage) },
				bodyKey: "bonus.top_up.desc",
				bodyValues: {
					amount: V !== null && L !== null ? k(V - L) : "",
					targetAmount: k(xe.fullClaimAmount)
				},
				icon: !n || typeof t != "number" ? /* @__PURE__ */ Q(Rt, {}) : We(t),
				iconSlotClassName: n ? Cs : void 0,
				tone: "secondary",
				actions: [{
					id: "bonus-top-up-dismiss",
					labelKey: "cta.deny_topup",
					onClick: Re,
					variant: "neutral"
				}, {
					id: "bonus-top-up",
					labelKey: "cta.confirm_topup",
					onClick: Ie,
					variant: "secondary"
				}]
			};
		}
		if (Me && Ae) {
			let r = L === null || M === null ? null : L - M, i = U?.claimPercentage, a = W(Ae.code, i);
			return {
				...e,
				titleKey: "bonus.selected.title",
				legacyBody: t ? Ue(t) : void 0,
				bodyKey: t ? "bonus.selected.desc" : void 0,
				preferLegacyBody: !0,
				bodyValues: t ? {
					amount: t,
					method: He
				} : void 0,
				icon: !a || typeof i != "number" ? /* @__PURE__ */ Q(Rt, {}) : We(i),
				iconSlotClassName: a ? Cs : void 0,
				tone: "secondary",
				footer: /* @__PURE__ */ Q("p", {
					className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
					children: bt(n("bonus.top_up.success"), { amount: k(r ?? 0) })
				})
			};
		}
		if (Oe) {
			let n = !!(ke && L !== null), r = pt({
				amount: L,
				fullClaimAmount: ke?.fullClaimAmount,
				claimPercentage: ke?.claimPercentage
			}), i = n && !r, a = i ? "bonus.top_up.title" : "bonus.selected.title", o = i ? { claimPercentage: ot(ke?.claimPercentage) } : void 0, s, c;
			i && ke && L !== null ? (s = "bonus.top_up.desc", c = {
				amount: k(ke.fullClaimAmount - L),
				targetAmount: k(ke.fullClaimAmount)
			}) : t && (s = "bonus.selected.desc", c = {
				amount: t,
				method: He
			});
			let l = W(Oe.code, ke?.claimPercentage), u = ke?.claimPercentage;
			return {
				...e,
				titleKey: a,
				titleValues: o,
				legacyBody: s === "bonus.selected.desc" && t ? Ue(t) : void 0,
				bodyKey: s,
				preferLegacyBody: s === "bonus.selected.desc",
				bodyValues: c,
				icon: !l || typeof u != "number" ? /* @__PURE__ */ Q(Rt, {}) : We(u),
				iconSlotClassName: l ? Cs : void 0,
				tone: i ? "secondary" : void 0
			};
		}
		return e;
	}, [
		L,
		be,
		xe,
		M,
		k,
		Ue,
		Re,
		Ie,
		He,
		Oe,
		ke,
		Ee,
		Me,
		Ae,
		U,
		V,
		n,
		We,
		W
	]), Ye = Y(() => {
		let e = [];
		return (_ || se) && e.push(/* @__PURE__ */ Q(or, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			onClick: ce,
			label: Ve
		}, "cashier-bonus-back")), B && e.push(/* @__PURE__ */ Q(or, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			onClick: Pe,
			disabled: Be,
			label: ze
		}, "cashier-bonus-continue")), e;
	}, [
		Ve,
		se,
		ze,
		ce,
		Pe,
		Be,
		B,
		_
	]), Xe = !!((se || _ || B) && r && me && !he && !z);
	return he ? /* @__PURE__ */ Q(ie, {
		label: n("loading.payment_types"),
		testId: "cashier-payment-types-loading"
	}) : z ? /* @__PURE__ */ Q(_e, { text: "payment.no_pts_found" }) : !qr(c) || !r || !me ? null : /* @__PURE__ */ Q(Hn, {
		id: e.id("route-bonus"),
		className: e.className("route-bonus"),
		title: s ? void 0 : n("cta.choose_bonus"),
		header: s ? /* @__PURE__ */ Q(je, {
			content: qe,
			className: xs
		}) : void 0,
		fitted: !0,
		stickyHeader: !0,
		children: /* @__PURE__ */ $("div", {
			className: G(e.className("route-bonus-content"), "px-1.5 @sm:px-3", l ? "pb-3" : "pb-4", Ss),
			children: [/* @__PURE__ */ Q(Mt, {
				bonuses: ue,
				domScope: "route-bonus",
				animateItems: !0,
				selectedBonusCode: De,
				onSelect: Ne,
				onSkip: Fe,
				selectable: B,
				showSkipOption: fe,
				isSkipSelected: B && De === null
			}), /* @__PURE__ */ Q(lr, {
				domScope: "route-bonus-actions",
				items: Ye,
				fixed: l,
				enabled: Xe
			})]
		})
	});
}
//#endregion
//#region src/components/provider/ProviderStatusStream.tsx
var Es = ({ paymentId: e }) => {
	let { merchantId: t, debug: n } = ci(H), { payment: r, paymentId: i, status: a, redirect: o, setPaymentTracking: s } = nn(), c = se({ strict: !1 }), l = R(), u = Bn(), d = X(!1), f = X(a), p = X(l), m = o?.userFlowDoneUrl ?? (typeof c.redirectUserFlowDoneUrl == "string" ? c.redirectUserFlowDoneUrl : void 0), h = X(m);
	J(() => {
		f.current = a;
	}, [a]), J(() => {
		p.current = l;
	}, [l]), J(() => {
		h.current = m;
	}, [m]);
	let g = Y(() => {
		if (!i) return null;
		if (o) {
			let e = st(o.type);
			return e !== "window" && e !== "script" ? null : fn({
				paymentId: i,
				redirectType: e,
				redirectMethod: it(o.method),
				redirectUrl: o.url,
				redirectData: Wn(o.data, n),
				redirectScriptId: o.scriptId
			});
		}
		let e = st(mt(c.redirectType));
		return e !== "window" && e !== "script" ? null : fn({
			paymentId: i,
			redirectType: e,
			redirectMethod: it(c.redirectMethod === "POST" ? "POST" : "GET"),
			redirectUrl: c.redirectUrl,
			redirectData: c.redirectData,
			redirectScriptId: c.redirectScriptId
		});
	}, [
		n,
		o,
		c.redirectData,
		c.redirectMethod,
		c.redirectScriptId,
		c.redirectType,
		c.redirectUrl,
		i
	]) ?? (i ? `payment:${i}` : null);
	return J(() => {
		e && e !== i && s(e);
	}, [
		e,
		s,
		i
	]), J(() => {
		if (!i) return;
		if (o) {
			let e = {
				redirectUrl: o.url,
				paymentId: i,
				redirectMethod: o.method
			}, t = Wn(o.data, n);
			t && (e.redirectData = t), e.redirectType = st(o.type), o.scriptId && (e.redirectScriptId = o.scriptId), o.userFlowDoneUrl && (e.redirectUserFlowDoneUrl = o.userFlowDoneUrl), u({
				to: "/provider",
				search: e,
				replace: !0
			});
			return;
		}
		if (r?.form?.actionUrl && c.redirectUrl) {
			u({
				to: "/provider",
				search: { paymentId: i },
				replace: !0
			});
			return;
		}
		let e = a?.toLowerCase();
		e && e === "done" && l({
			paymentId: i,
			merchantId: t,
			reachedSummaryViaProvider: !0
		});
	}, [
		n,
		l,
		t,
		u,
		r?.form?.actionUrl,
		o,
		c.redirectUrl,
		a,
		i
	]), J(() => {
		d.current = !1;
	}, [g]), J(() => {
		if (typeof window > "u" || !i) return;
		let e = window.setInterval(() => {
			Gr(i) !== "owned" && g && (d.current || Jn(f.current) || V(i) && (d.current = !0, p.current({
				paymentId: i,
				merchantId: t,
				reachedSummaryViaProvider: !0,
				userFlowDoneUrl: h.current
			})));
		}, 500);
		return () => {
			window.clearInterval(e);
		};
	}, [
		t,
		g,
		i
	]), null;
}, Ds = {
	accelerometer: "*",
	autoplay: "*",
	camera: "*",
	"clipboard-read": "*",
	"clipboard-write": "*",
	fullscreen: "*",
	geolocation: "*",
	gyroscope: "*",
	magnetometer: "*",
	microphone: "*",
	"otp-credentials": "*",
	payment: "*",
	"picture-in-picture": "*"
}, Os = (e) => e ?? Object.entries(Ds).map(([e, t]) => `${e} ${t}`).join(";");
function ks({ src: e, title: t, allow: n, hiddenIframe: r = !1, tabIndex: i, ...a }) {
	let o = Os(n);
	return /* @__PURE__ */ Q("iframe", {
		className: r ? "absolute left-[-9999px] top-[-9999px] h-px w-px border-0 opacity-0 pointer-events-none" : "block h-full min-h-full w-full flex-1",
		allow: o,
		src: e ?? "about:blank",
		title: t,
		tabIndex: r ? -1 : i,
		"aria-hidden": r || void 0,
		...a
	});
}
//#endregion
//#region src/components/provider/ProviderWindowNotice.tsx
var As = ({ manualOpenRequired: e, title: t, manualDescription: n, autoDescription: r, buttonLabel: i, onManualOpen: a }) => /* @__PURE__ */ $("div", {
	className: "flex h-full flex-col items-center justify-center gap-4 text-center",
	children: [/* @__PURE__ */ $("div", {
		className: "space-y-1",
		children: [/* @__PURE__ */ Q("p", {
			className: "text-base font-medium text-[var(--pc-color-text)]",
			children: t
		}), /* @__PURE__ */ Q("p", {
			className: "text-sm text-[var(--pc-color-text-muted)]",
			children: e ? n : r
		})]
	}), e && /* @__PURE__ */ Q(or, {
		variant: "secondary",
		onClick: a,
		label: i
	})]
}), js = ({ providerStepKey: e, status: t, ownerKey: n, openWindow: r, onCleanup: i }) => {
	let a = X(r), o = X(i), s = X(n ?? null), c = X(null);
	J(() => {
		s.current = n ?? null;
	}, [n]), J(() => {
		a.current = r;
	}, [r]), J(() => {
		o.current = i;
	}, [i]), J(() => {
		if (typeof window > "u" || !e || Jn(t) || c.current === e) return;
		o.current?.();
		let n = window.setTimeout(() => {
			c.current !== e && (c.current = e, a.current("auto"));
		}, 0);
		return () => {
			window.clearTimeout(n);
		};
	}, [e, t]), J(() => {
		Jn(t) && (o.current?.(), Et(s.current));
	}, [t]), J(() => () => {
		o.current?.(), Et(s.current);
	}, []);
}, Ms = () => {
	let { translateKey: e } = ve();
	return Y(() => ({
		title: e("provider.window.title"),
		manualDescription: e("provider.window.instructions.manual"),
		autoDescription: e("provider.window.instructions.auto"),
		buttonLabel: e("provider.window.open"),
		popupBlockedMessage: e("error.payment_window_blocked")
	}), [e]);
}, Ns = ({ redirectUrl: e, redirectMethod: t, hiddenFields: n, providerStepKey: r }) => {
	let { debug: i } = ci(H), { status: a, paymentId: o } = nn(), { toast: s } = At(), c = X(null), [l, u] = Z(!1), d = t === "POST", f = Y(() => r ?? fn({
		redirectType: "window",
		redirectMethod: t,
		redirectUrl: e,
		redirectData: n.map(([e, t]) => `${e}=${t}`).join("&")
	}), [
		n,
		r,
		t,
		e
	]), { popupBlockedMessage: p, title: m, manualDescription: h, autoDescription: g, buttonLabel: _ } = Ms(), v = q((e) => {
		u(!0), e === "manual" && s.error(p, {
			id: Vr,
			persistent: !0
		});
	}, [p, s]), y = q(async (t) => await kt({
		source: t,
		onBlocked: v,
		canOpen: Yr,
		setHandle: (e) => {
			we(e, o);
		},
		allowManualDetachedOpen: !0,
		onDetachedOpened: () => {
			u(!1), d && c.current?.submit();
		},
		open: () => d ? window.open("", $r, "") : window.open(e, $r, ""),
		onReuse: (t) => {
			if (u(!1), d) {
				c.current?.submit();
				return;
			}
			try {
				t.location.href = e;
			} catch (e) {
				U.warn(i, "[Cashier] Unable to navigate provider window", e);
			}
		},
		onOpened: () => {
			u(!1), d && c.current?.submit();
		}
	}), [
		i,
		d,
		o,
		e,
		v
	]);
	js({
		providerStepKey: f,
		status: a,
		ownerKey: o,
		openWindow: y
	});
	let b = q(() => {
		y("manual");
	}, [y]), x = /* @__PURE__ */ Q(As, {
		manualOpenRequired: l,
		title: m,
		manualDescription: h,
		autoDescription: g,
		buttonLabel: _,
		onManualOpen: b
	});
	return d ? /* @__PURE__ */ $(fi, { children: [/* @__PURE__ */ Q("form", {
		ref: c,
		method: "POST",
		action: e,
		target: $r,
		hidden: !0,
		children: n.map(([e, t]) => /* @__PURE__ */ Q("input", {
			name: e,
			value: t,
			type: "hidden"
		}, e))
	}), x] }) : x;
}, Ps = /* @__PURE__ */ new WeakMap(), Fs = (e) => {
	let t = Ps.get(e);
	return Ps.delete(e), t;
}, Is = (({ createTargetContainer: e, containerClassName: t, configureScript: n, onLoad: r }) => (i, a) => {
	let o = i.createDocumentFragment(), s;
	e && (s = i.createElement("div"), s.id = a.targetId, s.className = t ?? "", o.appendChild(s));
	let c = i.createElement("script");
	return c.src = a.scriptUrl, n?.(c, a), r && Ps.set(c, () => {
		r({
			doc: i,
			context: a,
			container: s,
			script: c
		});
	}), o.appendChild(c), o;
})({
	createTargetContainer: !0,
	containerClassName: "h-full w-full [&>*]:!max-w-none [&>*]:!max-h-none [&>*]:h-full [&>*]:w-full [&_iframe]:h-full [&_iframe]:w-full"
}), Ls = (e) => typeof e.defaultView?.showPaymentIframe == "function", Rs = ({ doc: e, container: t, context: n }) => {
	let r = e.getElementById(n.targetId);
	if (!r || !t.contains(r)) throw Error("MiFinity target is unavailable for the active mount");
	let i = e.defaultView?.showPaymentIframe;
	if (typeof i != "function") throw Error("MiFinity widget API is unavailable");
	let a = Object.prototype.hasOwnProperty.call(n.data, "token") ? n.data.token : "initializationToken_example", o = n.returnUrl ?? (Object.prototype.hasOwnProperty.call(n.data, "returnUrl") ? n.data.returnUrl : void 0), s = null, c = { requested: !1 }, l = !1, u = !1, d = () => {
		u || !s || (u = !0, s.close());
	}, f = () => {
		l || n.signal.aborted || (l = !0, d(), o && n.navigate && n.navigate(o, { replace: !0 }));
	}, p = i(n.targetId, {
		token: a,
		complete: () => {
			c.requested = !0, s && f();
		}
	});
	if (!p || typeof p.close != "function") throw Error("MiFinity widget handle is unavailable");
	return s = p, c.requested && f(), d;
}, zs = /* @__PURE__ */ new Set(["https://demo.mifinity.com", "https://secure.mifinity.com"]), Bs = {
	id: "mifinity_payin",
	presentation: "inline",
	template: Is,
	isReady: Ls,
	isAllowedUrl: (e) => zs.has(e.origin) && e.pathname.endsWith("/widgets/sgpg.js"),
	setup: Rs
}, Vs = "trumo_payin", Hs = "trumo_new_window_request", Us = "bank_page", Ws = "popup", Gs = /* @__PURE__ */ new Set(["https://payer.trumo.io", "https://payer-stg.trumo.io"]), Ks = /* @__PURE__ */ new Set([
	"localhost",
	"127.0.0.1",
	"::1",
	"[::1]"
]), qs = (e) => !!e && typeof e == "object" && !Array.isArray(e), Js = (e) => typeof e == "string" && e.trim().length > 0 ? e : void 0, Ys = (e) => {
	try {
		return new URL(e).origin;
	} catch {
		return null;
	}
}, Xs = (e) => {
	try {
		let t = new URL(e);
		return Js(t.searchParams.get("order_id")) ?? Js(t.searchParams.get("order"));
	} catch {
		return;
	}
}, Zs = (e, t) => {
	let n = Js(t);
	n && !e.includes(n) && e.push(n);
}, Qs = (e) => {
	let t = [];
	return Zs(t, Xs(e.scriptUrl)), Zs(t, e.data.trumoOrderID), Zs(t, e.data.trumo_order_id), t;
}, $s = (e) => {
	let t;
	try {
		t = new URL(e);
	} catch {
		return null;
	}
	return t.protocol === "https:" || t.protocol === "http:" && Ks.has(t.hostname) ? t.toString() : null;
}, ec = (e) => Gs.has(e.origin) || e.protocol === "http:" && Ks.has(e.hostname) ? !0 : e.protocol === "https:" && Ks.has(e.hostname), tc = (e) => {
	if (!qs(e) || e.type !== Hs) return null;
	let t = Js(e.url);
	if (!t) return null;
	let n = Js(e.trumo_order_id);
	return {
		type: Hs,
		url: t,
		...n ? { trumo_order_id: n } : {}
	};
}, nc = (e, t) => Oe({
	ownerWindow: e,
	url: t,
	target: Us,
	features: Ws
}), rc = (e, { expectedOrigin: t, expectedOrderIDs: n, expectedSource: r, targetWindow: i, onPopupRequested: a, onPopupBlocked: o, onPopupOpened: s }) => {
	if (e.origin !== t || r && e.source !== r) return !1;
	let c = tc(e.data);
	if (!c || n.length > 0 && !n.includes(c.trumo_order_id ?? "")) return !1;
	let l = $s(c.url);
	if (!l) return !1;
	a?.(l);
	let u = nc(i, l);
	return u ? (s?.(u), !0) : (o?.(l), !0);
}, ic = {
	id: Vs,
	presentation: "inline",
	template: (e, t) => {
		let n = e.createDocumentFragment(), r = e.createElement("iframe");
		return r.src = t.scriptUrl, r.title = "Trumo", r.allow = Os(), r.className = "block h-full min-h-full w-full flex-1 border-0", r.style.display = "block", r.style.width = "100%", r.style.height = "100%", r.style.minHeight = "100%", r.style.border = "0", n.appendChild(r), n;
	},
	isAllowedUrl: ec,
	setup: ({ doc: e, container: t, context: n }) => {
		if (n.signal.aborted) return;
		let r = e.defaultView;
		if (!r) return;
		let i = Ys(n.scriptUrl);
		if (!i) return;
		let a = Qs(n), o = t.querySelector("iframe")?.contentWindow ?? void 0, s = t.style.position;
		s || (t.style.position = "relative");
		let c = null, l = null, u = e.createElement("div");
		u.hidden = !0, u.setAttribute("data-testid", "trumo-popup-fallback"), u.style.position = "absolute", u.style.inset = "0", u.style.zIndex = "2147483647", u.style.display = "none", u.style.alignItems = "center", u.style.justifyContent = "center", u.style.padding = "24px", u.style.background = "rgba(248, 250, 252, 0.94)";
		let d = e.createElement("div");
		d.style.boxSizing = "border-box", d.style.width = "min(100%, 420px)", d.style.border = "1px solid #d8dee8", d.style.borderRadius = "8px", d.style.background = "#fff", d.style.padding = "24px", d.style.boxShadow = "0 12px 32px rgba(15, 23, 42, 0.16)", d.style.color = "#172033", d.style.fontFamily = "Inter, ui-sans-serif, system-ui, sans-serif", d.style.textAlign = "center";
		let f = e.createElement("h2");
		f.textContent = "Open bank window", f.style.margin = "0", f.style.fontSize = "20px", f.style.lineHeight = "1.25", f.style.fontWeight = "600";
		let p = e.createElement("p");
		p.textContent = "If no bank window opened, open it manually and keep this window open.", p.style.margin = "12px 0 20px", p.style.fontSize = "15px", p.style.lineHeight = "1.5", p.style.color = "#46556f";
		let m = e.createElement("button");
		m.type = "button", m.textContent = "Open bank window", m.style.border = "0", m.style.borderRadius = "6px", m.style.background = "#172033", m.style.color = "#fff", m.style.cursor = "pointer", m.style.fontSize = "15px", m.style.fontWeight = "600", m.style.lineHeight = "1", m.style.minHeight = "44px", m.style.padding = "0 18px";
		let h = (e) => {
			n.signal.aborted || (c = e, u.hidden = !1, u.style.display = "flex");
		}, g = () => {
			c = null, u.hidden = !0, u.style.display = "none";
		}, _ = () => {
			l?.(), l = null;
		}, v = (e) => {
			if (n.signal.aborted) {
				e.close();
				return;
			}
			_(), l = dt({
				ownerWindow: r,
				popupWindow: e,
				onClosed: () => {
					l = null, g();
				}
			});
		}, y = () => {
			if (n.signal.aborted || !c) return;
			let e = nc(r, c);
			e && (v(e), g());
		};
		m.addEventListener("click", y), d.appendChild(f), d.appendChild(p), d.appendChild(m), u.appendChild(d), t.appendChild(u);
		let b = (e) => {
			n.signal.aborted || rc(e, {
				expectedOrigin: i,
				expectedOrderIDs: a,
				expectedSource: o,
				targetWindow: r,
				onPopupRequested: h,
				onPopupBlocked: h,
				onPopupOpened: v
			});
		};
		return r.addEventListener("message", b), () => {
			r.removeEventListener("message", b), _(), m.removeEventListener("click", y), u.remove(), t.style.position = s;
		};
	}
}, ac = {
	[Bs.id]: Bs,
	[ic.id]: ic
}, oc = 3e4, sc = 50, cc = "data-pc-provider-script-resource", lc = "data-pc-provider-script-resource-state", uc = /* @__PURE__ */ new WeakMap(), dc = /* @__PURE__ */ new WeakMap(), fc = /* @__PURE__ */ new WeakMap(), pc = class extends Error {
	constructor() {
		super("Provider script mount no longer owns its target"), this.name = "ProviderScriptMountCancelledError";
	}
}, mc = (e) => e instanceof pc, hc = (e, t) => e.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || t, gc = (e, t, n) => {
	let r = fc.get(e) ?? 0, i;
	do
		r += 1, i = [
			hc(t, "pc-cashier"),
			"provider-target",
			hc(n, "provider"),
			r.toString()
		].join("-");
	while (e.getElementById(i));
	return fc.set(e, r), i;
}, _c = ({ doc: e, container: t, definition: n, targetIdPrefix: r, onCleanupError: i }) => {
	let a = new AbortController(), o = [], s = e.createElement("div");
	s.style.display = "block", s.style.width = "100%", s.style.height = "100%", s.style.minHeight = "100%";
	let c = !1, l = () => !c && !a.signal.aborted && dc.get(t) === f, u = () => {
		if (!l()) throw new pc();
	}, d = (e) => {
		try {
			e();
		} catch (e) {
			i?.(e);
		}
	}, f = {
		signal: a.signal,
		targetId: gc(e, r, n.id),
		root: s,
		isCurrent: l,
		assertCurrent: u,
		addCleanup: (e) => {
			let t = !1, n = () => {
				t || (t = !0, e());
			};
			if (c) {
				d(n);
				return;
			}
			o.push(n);
		},
		cleanup: () => {
			if (!c) {
				c = !0, a.abort(), dc.get(t) === f && dc.delete(t);
				for (let e of o.reverse()) d(e);
				s.remove();
			}
		}
	}, p = dc.get(t);
	dc.set(t, f), p?.cleanup();
	try {
		f.assertCurrent(), t.appendChild(s);
	} catch (e) {
		throw f.cleanup(), e;
	}
	return f;
}, vc = (e) => e.nodeType === 1 && e.tagName.toLowerCase() === "script", yc = (e) => e.nodeType === 3 && (e.textContent ?? "").trim().length === 0, bc = (e) => Array.isArray(e) ? e : e.nodeType === 11 ? Array.from(e.childNodes) : [e], xc = (e) => {
	e.src && !e.hasAttribute("async") && !e.hasAttribute("defer") && (e.async = !1);
}, Sc = (e, t) => {
	if (!e.isReady) return !1;
	try {
		return e.isReady(t);
	} catch {
		return !1;
	}
}, Cc = (e, t) => Array.from(e.scripts).find((e) => e.src === t && e.getAttribute(lc) !== "failed"), wc = (e) => e.head, Tc = ({ definition: e, doc: t, script: n, cache: r }) => {
	let i = n.src, a = Cc(t, i), o = a ?? n, s = !a;
	s && (o.setAttribute(cc, ""), o.setAttribute(lc, "loading"));
	let c, l, u = { promise: new Promise((e, t) => {
		c = e, l = t;
	}) };
	r.set(i, u);
	let d = !1, f = () => {
		o.removeEventListener("load", h), o.removeEventListener("error", g), clearTimeout(_), v !== void 0 && clearInterval(v);
	}, p = () => {
		d || (d = !0, f(), o.setAttribute(lc, "loaded"), c?.());
	}, m = (t) => {
		d || (d = !0, f(), r.get(i) === u && r.delete(i), o.setAttribute(lc, "failed"), s && o.remove(), l?.(/* @__PURE__ */ Error(`Provider script ${e.id} ${t}`)));
	};
	function h() {
		p();
	}
	function g() {
		m("failed to load");
	}
	o.addEventListener("load", h), o.addEventListener("error", g);
	let _ = setTimeout(() => {
		m(`did not load within ${oc.toString()}ms`);
	}, oc), v = a && e.isReady ? setInterval(() => {
		Sc(e, t) && p();
	}, sc) : void 0;
	return o.getAttribute(lc) === "loaded" || a && Sc(e, t) ? p() : s && wc(t).appendChild(o), u;
}, Ec = (e, t, n) => {
	let r = n.src;
	if (!r) return Promise.resolve();
	let i = uc.get(t) ?? /* @__PURE__ */ new Map();
	uc.has(t) || uc.set(t, i);
	let a = i.get(r);
	return a ? a.promise : Tc({
		definition: e,
		doc: t,
		script: n,
		cache: i
	}).promise;
}, Dc = async (e, t) => {
	if (t.aborted) throw new pc();
	await new Promise((n, r) => {
		let i = () => {
			r(new pc());
		};
		t.addEventListener("abort", i, { once: !0 }), e.then(() => {
			t.removeEventListener("abort", i), n();
		}, (e) => {
			t.removeEventListener("abort", i), r(e instanceof Error ? e : /* @__PURE__ */ Error("Provider script resource failed"));
		});
	});
}, Oc = async ({ definition: e, doc: t, context: n, session: r }) => {
	r.assertCurrent();
	let i = e.template(t, n);
	r.assertCurrent();
	for (let n of bc(i)) if (r.assertCurrent(), !yc(n)) {
		if (vc(n)) {
			let i = Fs(n);
			if (n.src) {
				xc(n), await Dc(Ec(e, t, n), r.signal), r.assertCurrent(), i?.(), r.assertCurrent();
				continue;
			}
			r.root.appendChild(n), r.assertCurrent(), i?.(), r.assertCurrent();
			continue;
		}
		r.root.appendChild(n), r.assertCurrent();
	}
}, kc = async ({ definition: e, doc: t, context: n, session: r }) => {
	await Oc({
		definition: e,
		doc: t,
		context: n,
		session: r
	}), r.assertCurrent();
	let i = await e.setup?.({
		doc: t,
		container: r.root,
		context: n
	});
	i && r.addCleanup(i), r.assertCurrent();
}, Ac = ({ definition: e, doc: t, container: n, context: r, targetIdPrefix: i, onCleanupError: a }) => {
	let o = _c({
		definition: e,
		doc: t,
		container: n,
		targetIdPrefix: i,
		onCleanupError: a
	}), s = r.navigate ? (e, t) => {
		o.isCurrent() && r.navigate?.(e, t);
	} : void 0;
	return {
		session: o,
		completion: kc({
			definition: e,
			doc: t,
			context: {
				...r,
				signal: o.signal,
				targetId: o.targetId,
				...s ? { navigate: s } : {}
			},
			session: o
		}).catch((e) => {
			let t = mc(e) || !o.isCurrent();
			throw o.cleanup(), t ? new pc() : e;
		})
	};
}, jc = (e, { delayMs: t = 300, resetKey: n } = {}) => {
	let [r, i] = Z(null), a = e ? n ?? !0 : null;
	return J(() => {
		let e = window.setTimeout(() => {
			i(a);
		}, Math.max(0, t));
		return () => {
			window.clearTimeout(e);
		};
	}, [a, t]), a !== null && r === a;
}, Mc = (e, t, n) => ({
	providerId: e.id,
	phase: t,
	...n instanceof Error ? { errorName: n.name } : {}
}), Nc = (e) => Object.prototype.hasOwnProperty.call(e, "returnUrl") ? e.returnUrl : void 0, Pc = (e) => {
	if (!e) return null;
	try {
		let t = typeof window > "u" ? "http://localhost" : window.location.origin;
		return new URL(e, t);
	} catch {
		return null;
	}
}, Fc = (e, t, n = !0) => {
	let { setItems: r, clearItems: i } = Hr();
	J(() => {
		if (n) {
			if (!t) {
				i("bottom");
				return;
			}
			if (e.length === 0) {
				i("bottom");
				return;
			}
			return r("bottom", e), () => {
				i("bottom");
			};
		}
	}, [
		i,
		t,
		e,
		n,
		r
	]);
}, Ic = (e, t, n) => {
	if (!t) return null;
	let r;
	try {
		let e = typeof window > "u" ? "http://localhost" : window.location.origin;
		r = new URL(t, e);
	} catch (t) {
		return U.error(n, "[Cashier] Invalid provider script URL", Mc(e, "url-validation", t)), null;
	}
	return e.isAllowedUrl && !e.isAllowedUrl(r) ? (U.warn(n, "[Cashier] Provider script URL rejected", Mc(e, "url-validation")), null) : r.toString();
}, Lc = (e) => {
	let t = e.document;
	t.documentElement.style.height = "100%";
	let n = Rc(t);
	return n.style.margin = "0", n.style.height = "100%", t;
}, Rc = (e) => {
	let t = e.querySelector("body");
	if (t) return t;
	let n = e.createElement("body");
	return e.documentElement.appendChild(n), n;
}, zc = (e, t) => {
	let n = e.getElementById(t);
	if (n) return n;
	let r = e.createElement("div");
	return r.id = t, r.style.width = "100%", r.style.height = "100%", Rc(e).appendChild(r), r;
}, Bc = (e, t) => e === "window" ? "window" : e === "iframe" || e === "hidden_iframe" ? "inline" : t.presentation, Vc = ({ providerStepKey: e, definition: t, scriptContext: n, targetIdPrefix: r, debug: i }) => {
	let { status: a, paymentId: o } = nn(), { translateKey: s } = ve(), { merchantId: c } = ci(H), { toast: l } = At(), u = R(), [d, f] = Z(!1), p = X(null), m = Y(() => e ?? fn({
		paymentId: o,
		redirectType: "script",
		redirectMethod: "GET",
		redirectUrl: n.scriptUrl
	}), [
		o,
		e,
		n.scriptUrl
	]), h = m ?? "invalid-window-step", [g, _] = Z(() => ({
		stepKey: h,
		errorKey: null
	})), v = g.stepKey === h ? g.errorKey : null, { popupBlockedMessage: y, title: b, manualDescription: x, autoDescription: S, buttonLabel: C } = Ms(), w = q((e) => {
		f(!0), e === "manual" && l.error(y, {
			id: Vr,
			persistent: !0
		});
	}, [y, l]), T = q(() => {
		!o || !c || u({
			paymentId: o,
			merchantId: c,
			reachedSummaryViaProvider: !0
		});
	}, [
		u,
		c,
		o
	]), E = q((e) => {
		try {
			let a = Lc(e), o = Ac({
				definition: t,
				doc: a,
				container: zc(a, "provider-script-window"),
				context: n,
				targetIdPrefix: r,
				onCleanupError: (e) => {
					U.error(i, "[Cashier] Failed to clean up script widget", Mc(t, "cleanup", e));
				}
			});
			p.current = o.session, _({
				stepKey: h,
				errorKey: null
			}), o.session.addCleanup(dt({
				ownerWindow: window,
				popupWindow: e,
				onClosed: o.session.cleanup
			})), o.completion.then(() => {
				p.current !== o.session || !o.session.isCurrent() || _({
					stepKey: h,
					errorKey: null
				});
			}).catch((e) => {
				p.current !== o.session || mc(e) || (U.error(i, "[Cashier] Failed to mount script widget", Mc(t, "mount", e)), _({
					stepKey: h,
					errorKey: "error.payment_processing_failed"
				}));
			});
		} catch (e) {
			U.error(i, "[Cashier] Failed to mount script widget", Mc(t, "mount", e)), _({
				stepKey: h,
				errorKey: "error.payment_processing_failed"
			});
		}
	}, [
		i,
		t,
		n,
		r,
		h
	]), D = q((e) => {
		try {
			return e.document, !0;
		} catch (e) {
			return U.warn(i, "[Cashier] Unable to reuse provider window", Mc(t, "window-reuse", e)), !1;
		}
	}, [i, t]), O = q(async (e) => await kt({
		source: e,
		onBlocked: w,
		canReuse: D,
		canOpen: Yr,
		setHandle: (e) => {
			we(e, o);
		},
		open: () => window.open("", $r, ""),
		onReuse: (e) => {
			f(!1), E(e);
		},
		onOpened: (e) => {
			f(!1), E(e);
		}
	}), [
		D,
		E,
		o,
		w
	]);
	js({
		providerStepKey: m,
		status: a,
		ownerKey: o,
		openWindow: O,
		onCleanup: () => {
			let e = p.current;
			p.current = null, e?.cleanup();
		}
	});
	let k = /* @__PURE__ */ Q(As, {
		manualOpenRequired: d,
		title: b,
		manualDescription: x,
		autoDescription: S,
		buttonLabel: C,
		onManualOpen: () => {
			O("manual");
		}
	}), A = !!(o && c);
	return Fc(Y(() => !A || !v ? [] : [/* @__PURE__ */ Q(or, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: T,
		label: s("cta.view_summary")
	}, "provider-script-summary")], [
		A,
		v,
		T,
		s
	]), !!(v && A)), v ? /* @__PURE__ */ $("div", {
		className: "flex h-full flex-col gap-3",
		children: [k, /* @__PURE__ */ Q(_e, { text: v })]
	}) : k;
}, Hc = ({ providerStepKey: e, scriptId: t, redirectUrl: n, redirectData: r, redirectType: i }) => {
	let { debug: a, merchantId: o } = ci(H), { translateKey: s } = ve(), { paymentId: c, status: l } = nn(), u = Dt(), d = R(), f = Bn(), p = sn(), m = X(null), h = X(null), g = t ? ac[t] : void 0, _ = Y(() => z(r, a) ?? {}, [a, r]), v = Y(() => Nc(_), [_]), y = q((e, t) => {
		if (!e || typeof window > "u") return;
		let n = Pc(e);
		if (!n) return;
		let r = `${n.pathname}${n.search}${n.hash}`;
		if (p.matchRoute({ to: r }, { includeSearch: !1 }) !== !1) {
			f({
				to: r,
				replace: t?.replace
			});
			return;
		}
		f({
			to: "/provider",
			search: {
				redirectUrl: n.toString(),
				redirectMethod: "GET",
				redirectType: "hidden_iframe"
			},
			replace: t?.replace
		});
	}, [f, p]), b = Y(() => g ? Ic(g, n, a) : null, [
		g,
		n,
		a
	]), x = Y(() => b ? {
		scriptUrl: b,
		data: _,
		returnUrl: v,
		navigate: y
	} : null, [
		_,
		y,
		v,
		b
	]), S = g ? Bc(i, g) : "inline", C = Y(() => e ?? fn({
		paymentId: c,
		redirectType: i,
		redirectMethod: "GET",
		redirectUrl: n,
		redirectData: r,
		redirectScriptId: t
	}) ?? "invalid-provider-script-step", [
		c,
		e,
		r,
		i,
		n,
		t
	]), [w, T] = Z(() => ({
		stepKey: C,
		errorKey: null,
		isLoading: !0
	})), E = w.stepKey === C ? w.errorKey : null, D = w.stepKey !== C || w.isLoading, O = Jn(l), k = i === "hidden_iframe", A = jc(D && !k && !O, { resetKey: `${t ?? "missing"}:${n}:${i ?? "iframe"}` });
	J(() => {
		if (S !== "inline" || !g || !x || !m.current || O) return;
		let e = !0, t = m.current, n;
		try {
			n = Ac({
				definition: g,
				doc: t.ownerDocument,
				container: t,
				context: x,
				targetIdPrefix: u.prefix,
				onCleanupError: (e) => {
					U.error(a, "[Cashier] Failed to clean up script widget", Mc(g, "cleanup", e));
				}
			}), h.current = n.session, n.completion.then(() => {
				h.current !== n.session || !n.session.isCurrent() || T({
					stepKey: C,
					errorKey: null,
					isLoading: !1
				});
			}).catch((e) => {
				h.current !== n.session || mc(e) || (U.error(a, "[Cashier] Failed to mount script widget", Mc(g, "mount", e)), T({
					stepKey: C,
					errorKey: "error.payment_processing_failed",
					isLoading: !1
				}));
			});
		} catch (t) {
			return U.error(a, "[Cashier] Failed to mount script widget", Mc(g, "mount", t)), Promise.resolve().then(() => {
				e && T({
					stepKey: C,
					errorKey: "error.payment_processing_failed",
					isLoading: !1
				});
			}), () => {
				e = !1;
			};
		}
		return () => {
			e = !1, n.session.cleanup(), h.current === n.session && (h.current = null);
		};
	}, [
		a,
		g,
		u.prefix,
		C,
		S,
		x,
		O
	]), J(() => {
		S !== "window" && Et(c);
	}, [c, S]);
	let j = E ?? (!t || !g || !b || !x ? "error.payment_processing_failed" : null), M = !!(c && o), ee = q(() => {
		!c || !o || d({
			paymentId: c,
			merchantId: o,
			reachedSummaryViaProvider: !0
		});
	}, [
		d,
		o,
		c
	]);
	if (Fc(Y(() => !M || !j ? [] : [/* @__PURE__ */ Q(or, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		onClick: ee,
		label: s("cta.view_summary")
	}, "provider-script-summary")], [
		M,
		ee,
		j,
		s
	]), !!(j && M), S !== "window"), j) return /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-3",
		children: /* @__PURE__ */ Q(_e, { text: j })
	});
	if (S === "window" && g && x) return /* @__PURE__ */ Q(Vc, {
		providerStepKey: e,
		definition: g,
		scriptContext: x,
		targetIdPrefix: u.prefix,
		debug: a
	});
	let N = k ? "absolute left-[-9999px] top-[-9999px] h-px w-px border-0 opacity-0 pointer-events-none" : "block h-full min-h-full w-full flex-1", te = A ? /* @__PURE__ */ Q(ie, {
		delayMs: 0,
		message: s("payment.summary.processing"),
		testId: "cashier-provider-processing-loading"
	}) : null;
	return /* @__PURE__ */ $(fi, { children: [te, /* @__PURE__ */ Q("div", {
		ref: m,
		className: N,
		"aria-hidden": k || void 0,
		"data-testid": "provider-script-container"
	})] });
}, Uc = "cashier-provider-iframe", Wc = ({ paymentId: e, redirectUrl: t, redirectMethod: n, redirectData: r, redirectType: i = "iframe", redirectScriptId: a }) => {
	let { debug: o } = ci(H), { translateKey: s } = ve(), c = X(null), l = Y(() => z(r, o), [o, r]), u = Y(() => l ? Object.entries(l) : [], [l]), d = it(n), f = d === "POST", p = i === "window", m = i === "hidden_iframe", h = i === "script" || !!a, g = Y(() => fn({
		paymentId: e,
		redirectType: i,
		redirectMethod: d,
		redirectUrl: t,
		redirectData: r,
		redirectScriptId: a
	}), [
		d,
		e,
		r,
		a,
		i,
		t
	]), _ = jc(m, { resetKey: `${i}:${t}:${a ?? ""}` }), v = !h && f && !p, y = s("provider.iframe.title"), b = _ ? /* @__PURE__ */ Q(ie, {
		delayMs: 0,
		message: s("payment.summary.processing"),
		testId: "cashier-provider-processing-loading"
	}) : null;
	return J(() => {
		v && c.current?.submit();
	}, [t, v]), J(() => {
		p || h || Et(e ?? null);
	}, [
		h,
		p,
		e
	]), h ? /* @__PURE__ */ $(fi, { children: [b, /* @__PURE__ */ Q(Hc, {
		providerStepKey: g,
		scriptId: a,
		redirectUrl: t,
		redirectData: r,
		redirectType: i
	})] }) : p ? /* @__PURE__ */ Q(Ns, {
		providerStepKey: g,
		redirectUrl: t,
		redirectMethod: d,
		hiddenFields: u
	}) : f ? /* @__PURE__ */ $(fi, { children: [
		b,
		/* @__PURE__ */ Q("form", {
			ref: c,
			method: "POST",
			action: t,
			target: Uc,
			hidden: !0,
			children: u.map(([e, t]) => /* @__PURE__ */ Q("input", {
				name: e,
				value: t,
				type: "hidden"
			}, e))
		}),
		/* @__PURE__ */ Q(ks, {
			name: Uc,
			title: y,
			src: "about:blank",
			hiddenIframe: m
		})
	] }) : /* @__PURE__ */ $(fi, { children: [b, /* @__PURE__ */ Q(ks, {
		title: y,
		src: t,
		hiddenIframe: m
	})] });
}, Gc = "cashier-provider-form", Kc = "cashier-provider-form-error", qc = ({ submitLabel: e, submitDisabled: t, submitLoading: n, onSubmit: r }) => {
	let i = Y(() => [/* @__PURE__ */ Q(or, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: t,
		loading: n,
		onClick: r,
		label: e
	}, "cashier-provider-submit")], [
		r,
		t,
		e,
		n
	]);
	return rn("bottom", i), null;
}, Jc = (e) => {
	if (!e) return null;
	let t = typeof window > "u" ? "http://localhost" : window.location.origin;
	try {
		let n = new URL(e, t);
		return n.protocol !== "http:" && n.protocol !== "https:" ? null : n.toString();
	} catch {
		return null;
	}
}, Yc = async (e) => {
	if (!e.current) return !0;
	let t = await e.current.validateForm();
	return !De(t);
}, Xc = (e, t) => `provider-form:${JSON.stringify([t ?? null, e.actionUrl])}`, Zc = ({ form: e, observerPaymentType: t, observerSourceId: n = Xc(e) }) => {
	let { translateKey: r, translateKeys: i } = ve(), { paymentStatusMessage: a, isPaymentFailed: o } = nn(), { currency: s, initialAmount: c, method: l, selectedBonusCode: u } = ci(H), { cancelSubmission: d, isSubscribed: f, markSubmissionStarted: p } = Jr(), { toast: m, dismiss: h } = At(), g = X(null), _ = X(null), [v, y] = Z(null), b = Y(() => Jc(e.actionUrl), [e.actionUrl]), x = e.fields, S = Y(() => {
		try {
			return JSON.stringify({
				actionUrl: e.actionUrl,
				fields: x
			});
		} catch {
			return `${e.actionUrl}-${String(x.length)}`;
		}
	}, [x, e.actionUrl]), C = v === S && !o, w = Y(() => Ot(x, {}), [x]), T = q(async (e, t) => {
		t.setSubmitting(!1), !C && (!b || !g.current || await Yc(_) && (y(S), p(n), g.current.submit()));
	}, [
		S,
		C,
		p,
		n,
		b
	]);
	J(() => {
		o && d(n);
	}, [
		d,
		o,
		n
	]);
	let E = q((e) => qn(x, e, i), [x, i]), D = o ? r(a ?? "error.payment_processing_failed") : null;
	return J(() => {
		if (!D) {
			h(Kc);
			return;
		}
		m.error(D, {
			id: Kc,
			persistent: !0
		});
	}, [
		h,
		D,
		m
	]), J(() => () => {
		h(Kc);
	}, [h]), b ? /* @__PURE__ */ Q(tt, {
		initialValues: w,
		onSubmit: T,
		validate: E,
		innerRef: _,
		enableReinitialize: !0,
		validateOnMount: !0,
		children: ({ values: e, errors: a, initialValues: o, submitForm: d, isValid: p, dirty: m }) => {
			let h = !Object.values(o).some(Ce), _ = De(a), v = ut(x, e), y = C || !p || _ || v || !m && h, S = C, w = r("payment.submit"), T = p && !_ && !v, E = f && t ? xe({
				amount: c,
				bonusCode: u,
				canSubmit: !y,
				complete: T,
				currency: s,
				dirty: m,
				errors: a,
				fields: x,
				hostedFields: null,
				initialValues: o,
				method: l,
				paymentType: t,
				submitting: C,
				valid: T,
				values: e
			}) : null;
			return /* @__PURE__ */ $(fi, { children: [
				f && t && /* @__PURE__ */ Q(dn, {
					sourceId: n,
					state: E
				}),
				/* @__PURE__ */ Q("form", {
					ref: g,
					className: `${We} pt-2`,
					method: "POST",
					action: b,
					target: Gc,
					noValidate: !0,
					onSubmit: (e) => {
						e.preventDefault(), d();
					},
					children: /* @__PURE__ */ Q(Wr, {
						fields: x,
						translateKey: r,
						translateKeys: i,
						disabled: C
					})
				}),
				/* @__PURE__ */ Q(qc, {
					submitLabel: w,
					submitDisabled: y,
					submitLoading: S,
					onSubmit: () => {
						d();
					}
				}),
				/* @__PURE__ */ Q(ks, {
					name: Gc,
					title: r("provider.iframe.title"),
					hiddenIframe: !0
				})
			] });
		}
	}) : /* @__PURE__ */ Q("div", {
		"data-theme": "danger",
		className: "text-sm text-[var(--pc-color-text)]",
		children: r("error.payment_processing_failed")
	});
}, Qc = E("/provider/")({
	component: $c,
	validateSearch: (e) => {
		let t = typeof e.redirectUrl == "string" ? e.redirectUrl : void 0, n = typeof e.paymentId == "string" ? e.paymentId : void 0, r = typeof e.redirectData == "string" ? e.redirectData : void 0, i = mt(e.redirectType);
		return {
			redirectUrl: t,
			paymentId: n,
			redirectMethod: e.redirectMethod === "POST" ? "POST" : "GET",
			redirectData: r,
			redirectType: i,
			redirectScriptId: typeof e.redirectScriptId == "string" ? e.redirectScriptId : void 0,
			redirectUserFlowDoneUrl: typeof e.redirectUserFlowDoneUrl == "string" ? e.redirectUserFlowDoneUrl : void 0
		};
	}
});
function $c() {
	let e = Dt(), t = se({ strict: !1 }), { translateKey: n } = ve(), { payment: r, paymentStatusMessage: i, isPaymentFailed: a, isPaymentSuccessful: o, clearPaymentState: s } = nn(), { selectedPaymentType: c } = ci(H), { getPaymentType: l } = Fr(), { completePendingSubmission: u } = Jr(), d = r?.paymentId ?? t.paymentId, f = r?.redirect, p = r?.form ?? null, m = !!f?.url, h = !!p?.actionUrl && !m, g = Y(() => c ? l(c) ?? void 0 : void 0, [l, c]), _ = p ? Xc(p, d) : null, v = Wn(f?.data), y = !!(d && !m && !h && !(a && i)), b = jc(y, { resetKey: d }), x = n("payment.summary.processing");
	J(() => () => {
		s();
	}, [s]), J(() => {
		a || h && !o || u();
	}, [
		u,
		a,
		o,
		h
	]);
	let S;
	return S = y ? b ? /* @__PURE__ */ Q(ie, {
		delayMs: 0,
		message: x,
		testId: "cashier-provider-processing-loading"
	}) : null : m && f && !h ? /* @__PURE__ */ Q(Wc, {
		paymentId: d,
		redirectUrl: f.url,
		redirectMethod: f.method,
		redirectData: v,
		redirectType: f.type,
		redirectScriptId: f.scriptId
	}) : h && p ? /* @__PURE__ */ Q(Zc, {
		form: p,
		observerPaymentType: g,
		observerSourceId: _ ?? void 0
	}) : a && i ? /* @__PURE__ */ Q(_e, { text: i }) : /* @__PURE__ */ Q(el, { message: n("error.provider_missing_redirect_url") }), /* @__PURE__ */ $(Hn, {
		id: e.id("route-provider"),
		className: e.className("route-provider"),
		contentClassName: e.className("route-provider-content"),
		fitted: y || !h,
		fullHeight: !0,
		children: [/* @__PURE__ */ Q(Es, { paymentId: d }), S]
	});
}
function el({ message: e }) {
	return /* @__PURE__ */ Q("div", {
		"data-theme": "danger",
		className: "text-sm text-[var(--pc-color-text)]",
		children: e
	});
}
//#endregion
//#region src/components/PaymentSurfaceStack.tsx
function tl({ className: e, ...t }) {
	return /* @__PURE__ */ Q("div", {
		...t,
		className: G("flex flex-col gap-1.5 @md:gap-2", e)
	});
}
//#endregion
//#region src/context/interactivePrompt.tsx
var nl = oi({
	dismissPrompt: () => {},
	isPromptDismissed: () => !1
}), rl = () => ci(nl);
function il({ children: e }) {
	let [t, n] = Z(() => /* @__PURE__ */ new Set()), r = q((e) => {
		e && n((t) => {
			if (t.has(e)) return t;
			let n = new Set(t);
			return n.add(e), n;
		});
	}, []), i = q((e) => e ? t.has(e) : !1, [t]), a = Y(() => ({
		dismissPrompt: r,
		isPromptDismissed: i
	}), [r, i]);
	return /* @__PURE__ */ Q(nl.Provider, {
		value: a,
		children: e
	});
}
//#endregion
//#region src/components/PendingWithdrawalCancellationIcon.tsx
function al() {
	return /* @__PURE__ */ $("svg", {
		viewBox: "0 0 16 16",
		"aria-hidden": "true",
		className: "h-full w-full",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.35",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ Q("path", { d: "M2 8a6 6 0 1 0 1.84-4.318" }),
			/* @__PURE__ */ Q("path", { d: "M2 2v3.375h3.375" }),
			/* @__PURE__ */ Q("path", { d: "m5.15 8.2 1.8 1.8 3.9-4.25" })
		]
	});
}
//#endregion
//#region src/utils/pendingWithdrawalDisplay.ts
var ol = (e, t, n) => [n(gn(e.paymentType, e.method)), t(e.createdAt)].filter(Boolean).join(" · "), sl = "flex w-full min-w-0 items-start justify-between gap-4 rounded-[var(--pc-radius-xl)] bg-[var(--pc-color-surface)] px-4 py-3 text-left text-[var(--pc-color-text)] cursor-pointer transition-[background-color] duration-[250ms] ease-out hover:[background:var(--pc-color-surface-weaker)] active:[background:var(--pc-color-surface-weaker)] disabled:cursor-not-allowed disabled:opacity-55";
function cl({ pendingWithdrawals: e, formatPendingWithdrawalAmount: t, formatDisplayValue: n, onSelect: r, isDisabled: i = !1, focusPaymentId: a = null, isFocusRestoreActive: o = !1 }) {
	let { translateKeys: s } = ve(), c = X(null);
	return J(() => {
		if (!o || !a) return;
		let e = c.current;
		if (!e) return;
		let t = () => {
			e.isConnected && e.focus({ preventScroll: !0 });
		};
		if (typeof window > "u" || typeof window.requestAnimationFrame != "function") {
			t();
			return;
		}
		let n = null, r = window.requestAnimationFrame(() => {
			n = window.requestAnimationFrame(t);
		});
		return () => {
			window.cancelAnimationFrame(r), n !== null && window.cancelAnimationFrame(n);
		};
	}, [a, o]), /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-2 px-3 pt-0 pb-3",
		children: e.map((e) => {
			let o = t(e), l = ol(e, n, s), u = [o, l].filter(Boolean).join(", ");
			return /* @__PURE__ */ Q("button", {
				ref: e.paymentId === a ? c : void 0,
				type: "button",
				className: sl,
				"aria-label": u || void 0,
				onClick: () => {
					r(e);
				},
				disabled: i,
				children: /* @__PURE__ */ $("span", {
					className: "flex min-w-0 flex-1 flex-col gap-1",
					children: [/* @__PURE__ */ Q("span", {
						className: "text-sm font-medium leading-5 @sm:text-base",
						children: o
					}), l && /* @__PURE__ */ Q("span", {
						className: G("min-w-0 break-words text-xs leading-5 text-[var(--pc-color-text-muted)]", "@sm:text-sm"),
						children: l
					})]
				})
			}, e.paymentId);
		})
	});
}
//#endregion
//#region src/utils/pendingWithdrawals.ts
var ll = 1, ul = 100, dl = /* @__PURE__ */ new Set([
	"pending_approval",
	"pending_delayed_approval",
	"pending_dual_approval"
]), fl = (e) => {
	if (!e) return null;
	let t = Number(e.value);
	if (typeof e.currency != "string") return null;
	let n = e.currency.trim().toUpperCase();
	return !Number.isFinite(t) || !n ? null : {
		value: t,
		currency: n
	};
}, pl = (e) => {
	if (!dl.has(e.subStatus)) return null;
	let t = fl(e.amount);
	return t === null ? null : {
		...e,
		amountValue: t.value,
		amountCurrency: t.currency
	};
}, ml = (e) => (e ?? []).flatMap((e) => {
	let t = pl(e);
	return t ? [t] : [];
}), hl = async (e) => {
	let { data: t, error: n } = await Nt({
		query: {
			...e,
			method: "payout",
			page: ll,
			pageSize: ul
		},
		cache: "no-store"
	});
	if (n) throw Error("Failed to fetch pending withdrawal history.");
	return {
		payments: ml(t?.payments),
		totalItems: t?.totalItems ?? 0,
		totalPages: t?.totalPages ?? 0,
		currentPage: t?.currentPage ?? ll,
		pageSize: t?.pageSize ?? ul
	};
}, gl = async ({ merchantId: e, userId: t, sessionId: n, paymentId: r }) => {
	let { data: i, error: a } = await ze({
		path: { paymentId: r },
		query: {
			merchantId: e,
			userId: t,
			sessionId: n
		}
	});
	if (a) {
		let e = "Failed to cancel pending withdrawal.";
		throw a instanceof Error ? e = a.message : typeof a == "object" && "error" in a && typeof a.error == "string" && (e = a.error), Error(e);
	}
	return i;
}, _l = (e) => e.length === 0 ? null : ["pending-withdrawal-cancellation", ...e.map((e) => [
	e.paymentId,
	e.amountValue,
	e.amountCurrency,
	e.subStatus
].join(":"))].join("|"), vl = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.amountCurrency, (t.get(n.amountCurrency) ?? 0) + n.amountValue);
	return [...t].map(([e, t]) => ({
		currency: e,
		amount: t
	}));
}, yl = ({ merchantId: e, userId: t, sessionId: n }) => [
	"pending-withdrawal-history",
	e,
	t,
	n
], bl = (e, t = !0) => ({
	queryKey: yl(e),
	queryFn: () => hl(e),
	enabled: t && !!(e.merchantId && e.userId && e.sessionId),
	staleTime: 6e4,
	gcTime: 6e5
}), xl = oi({
	interactivePromptContent: null,
	pendingWithdrawalDrawer: null,
	attachSuccessFooter: (e) => e
}), Sl = "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]", Cl = {
	isDrawerOpen: !1,
	selectedPaymentId: null,
	cancellingPaymentId: null,
	cancellationState: null
}, wl = (e) => ({
	baselinePaymentIds: e.map((e) => e.paymentId),
	cancelledPayments: []
}), Tl = (e, t) => {
	let n = e.cancelledPayments.map((e) => e.paymentId), r = e.baselinePaymentIds.filter((e) => !n.includes(e));
	if (t.length === 0) return r.length === 0 && e.cancelledPayments.length > 0;
	let i = t.map((e) => e.paymentId), a = new Set(r);
	return i.length === a.size && i.every((e) => a.has(e));
}, El = (e, t) => {
	switch (t.type) {
		case "reset": return Cl;
		case "dismiss": return {
			...e,
			isDrawerOpen: !1,
			selectedPaymentId: null,
			cancellationState: null
		};
		case "open-drawer": return {
			...e,
			isDrawerOpen: !0,
			selectedPaymentId: null
		};
		case "close-drawer": return e.isDrawerOpen ? {
			...e,
			isDrawerOpen: !1,
			selectedPaymentId: null
		} : e;
		case "select-payment": return {
			...e,
			selectedPaymentId: t.paymentId
		};
		case "start-cancelling": return {
			...e,
			isDrawerOpen: !1,
			selectedPaymentId: null,
			cancellingPaymentId: t.paymentId
		};
		case "finish-cancelling": return e.cancellingPaymentId === null ? e : {
			...e,
			cancellingPaymentId: null
		};
		case "sync-pending-withdrawals": {
			if (!t.featureEnabled) return Cl;
			let n = e.cancellationState === null ? t.pendingWithdrawals.length > 0 ? wl(t.pendingWithdrawals) : null : Tl(e.cancellationState, t.pendingWithdrawals) ? e.cancellationState : t.pendingWithdrawals.length > 0 ? wl(t.pendingWithdrawals) : null, r = t.pendingWithdrawals.length > 1 && e.isDrawerOpen, i = e.selectedPaymentId && t.pendingWithdrawals.some((t) => t.paymentId === e.selectedPaymentId) ? e.selectedPaymentId : null;
			return r === e.isDrawerOpen && i === e.selectedPaymentId && n === e.cancellationState ? e : {
				...e,
				isDrawerOpen: r,
				selectedPaymentId: i,
				cancellationState: n
			};
		}
		case "record-success": {
			let n = e.cancellationState ?? wl(t.pendingWithdrawals);
			return {
				...e,
				cancellationState: {
					baselinePaymentIds: n.baselinePaymentIds,
					cancelledPayments: [...n.cancelledPayments, t.payment]
				}
			};
		}
		default: return e;
	}
}, Dl = ({ pendingWithdrawals: e, activePendingWithdrawal: t, isPaymentInteractionLocked: n, isCancelling: r, isDrawerOpen: i, onDismiss: a, onCancel: o, onView: s, formatPendingWithdrawalAmount: c, formatPendingWithdrawalTotals: l, successFooter: u }) => {
	if (!t) return null;
	let d = e.length, f = d === 1;
	return {
		legacyTitle: "Hold on a second",
		titleKey: "pending_withdrawal.cancel.title",
		bodyKey: f ? "pending_withdrawal.cancel.single.desc" : "pending_withdrawal.cancel.multi.desc",
		bodyValues: f ? { amount: c(t) } : {
			count: String(d),
			totalAmount: l(e)
		},
		icon: /* @__PURE__ */ Q(al, {}),
		tone: "secondary",
		footer: u,
		actions: [{
			id: "pending-withdrawal-dismiss",
			labelKey: "cta.deny_cancel_pending_withdrawal",
			legacyLabel: "No thanks",
			onClick: a,
			disabled: r || n,
			variant: "neutral"
		}, {
			id: f ? "pending-withdrawal-cancel" : "pending-withdrawal-view",
			labelKey: f ? "cta.cancel_pending_withdrawal" : "cta.view",
			legacyLabel: f ? "Yes, please!" : "View",
			onClick: f ? o : s,
			disabled: r || i || n,
			variant: "secondary"
		}]
	};
}, Ol = ({ successFooter: e }) => e ? {
	legacyTitle: "Nice!",
	titleKey: "pending_withdrawal.cancel.confirmed.title",
	legacyBody: "Your pending withdrawal has been cancelled.",
	bodyKey: "pending_withdrawal.cancel.confirmed.desc",
	icon: /* @__PURE__ */ Q(al, {}),
	tone: "secondary",
	footer: e
} : null, kl = ({ actionConfirmationModal: e, formatDisplayValue: t, formatPendingWithdrawalAmount: n, isActionConfirmationOpen: r, isDrawerOpen: i, isSelectionDisabled: a, selectedPaymentId: o, onClose: s, onSelect: c, pendingWithdrawals: l, title: u }) => /* @__PURE__ */ $(fi, { children: [l.length > 1 && /* @__PURE__ */ Q(Ue, {
	isOpen: i && !r,
	onClose: s,
	title: u,
	children: /* @__PURE__ */ Q(cl, {
		pendingWithdrawals: l,
		formatPendingWithdrawalAmount: n,
		formatDisplayValue: t,
		onSelect: c,
		isDisabled: a,
		focusPaymentId: o,
		isFocusRestoreActive: i && !r
	})
}), e] });
function Al({ children: e }) {
	let t = Mn(), n = ci(H), { merchantId: r, userId: o, sessionId: s, debug: c, locale: l, currencyFormatOptions: u, method: d, lockAmount: f, uiInteractivePrompts: p, uiSuggestAction: m, onPendingWithdrawalCancelled: h } = n, g = n.uiCancelPendingPayout === !0, { translateKey: _, translateKeys: v } = ve(), { formatDisplayValue: y } = Sn(), b = Y(() => {
		try {
			return new Intl.ListFormat(l, {
				style: "long",
				type: "conjunction"
			});
		} catch {
			return null;
		}
	}, [l]), { dismissPrompt: x, isPromptDismissed: S } = rl(), C = Jt(), [w, T] = di(El, Cl), { isDrawerOpen: E, selectedPaymentId: D, cancellingPaymentId: O, cancellationState: k } = w, A = d === i.PAYIN && !f && p && g && m.includes(a.ON_PENDING_PAYOUT_CANCEL) && !!(r && o && s), j = Y(() => ({
		merchantId: r,
		userId: o,
		sessionId: s
	}), [
		r,
		s,
		o
	]), M = Y(() => yl(j), [j]), { data: ee } = br(bl(j, A)), N = Y(() => ee?.payments ?? [], [ee?.payments]), te = Y(() => {
		let e = /* @__PURE__ */ new Map(), t = [...N, ...k?.cancelledPayments ?? []];
		for (let n of t) e.has(n.amountCurrency) || e.set(n.amountCurrency, An(n.amountCurrency, l, u));
		return e;
	}, [
		k?.cancelledPayments,
		u,
		l,
		N
	]), ne = q((e) => vr(e.amountValue, te.get(e.amountCurrency)), [te]), re = q((e) => {
		let t = e.map((e) => vr(e.amount, te.get(e.currency))).filter(Boolean);
		return t.length <= 1 ? t[0] ?? "" : b?.format(t) ?? t.join(", ");
	}, [b, te]), ie = q((e) => re(vl(e)), [re]), ae = Y(() => _l(N), [N]), P = S(ae), oe = N.length === 1 ? N[0] : N.at(0) ?? null, { openActionConfirmation: se, actionConfirmationModal: ce, isActionConfirmationOpen: F, closeActionConfirmation: I } = Zn({ isConfirmDisabled: t });
	J(() => {
		T({ type: "reset" }), I();
	}, [
		I,
		A,
		r,
		s,
		o
	]), J(() => {
		P && T({ type: "dismiss" });
	}, [P]), J(() => {
		T({
			type: "sync-pending-withdrawals",
			pendingWithdrawals: N,
			featureEnabled: A
		});
	}, [A, N]), J(() => {
		t && (T({ type: "close-drawer" }), I());
	}, [I, t]);
	let { mutateAsync: le, isPending: ue } = Xe({
		mutationFn: async (e) => await gl({
			merchantId: r,
			userId: o,
			sessionId: s,
			paymentId: e.paymentId
		}),
		onSuccess: async (e, t) => {
			let n = N.filter((e) => e.paymentId !== t.paymentId);
			await C.invalidateQueries({ queryKey: M });
			try {
				n = (await C.fetchQuery(bl(j, !0))).payments;
			} catch {}
			let r = n.length, i = vl(n), a = i.find((e) => e.currency === t.amountCurrency)?.amount ?? 0;
			T({
				type: "record-success",
				payment: t,
				pendingWithdrawals: N
			}), Tt({
				callback: h,
				callbackName: "onPendingWithdrawalCancelled",
				debug: c,
				payload: {
					paymentId: t.paymentId,
					amount: t.amountValue,
					currency: t.amountCurrency,
					createdAt: t.createdAt,
					remainingPendingCount: r,
					remainingPendingTotal: a,
					remainingPendingTotals: i
				}
			});
		},
		onSettled: () => {
			T({ type: "finish-cancelling" });
		}
	}), de = q(() => {
		t || !ae || x(ae);
	}, [
		ae,
		x,
		t
	]), fe = q((e) => {
		if (ue || t) return;
		let n = ne(e), r = ol(e, y, v);
		se({
			title: v(["pending_withdrawal.cancel.confirmation.title", "pending_withdrawal.cancel.title"]),
			description: /* @__PURE__ */ $("div", {
				className: "flex flex-col gap-2",
				children: [/* @__PURE__ */ Q("p", { children: bt(v(["pending_withdrawal.cancel.confirmation.desc", "pending_withdrawal.cancel.single.desc"]), { amount: n }) }), r && /* @__PURE__ */ Q("p", {
					className: "text-sm leading-5 text-[var(--pc-color-text-muted)]",
					children: r
				})]
			}),
			confirmLabel: v(["cta.confirm_cancel_pending_withdrawal", "cta.cancel_pending_withdrawal"]),
			confirmVariant: "danger",
			errorMessage: _("error.pending_withdrawal_cancel_failed"),
			onConfirm: async () => {
				T({
					type: "start-cancelling",
					paymentId: e.paymentId
				}), await le(e);
			}
		});
	}, [
		le,
		y,
		ne,
		ue,
		t,
		se,
		_,
		v
	]), pe = q(() => {
		oe !== null && fe(oe);
	}, [oe, fe]), L = q((e) => {
		T({
			type: "select-payment",
			paymentId: e.paymentId
		}), fe(e);
	}, [fe]), me = q(() => {
		ue || t || N.length <= 1 || T({ type: "open-drawer" });
	}, [
		ue,
		t,
		N.length
	]), R = q(() => {
		ue || T({ type: "close-drawer" });
	}, [ue]), he = Y(() => {
		if (!k || k.cancelledPayments.length === 0) return null;
		let e = vl(k.cancelledPayments);
		return /* @__PURE__ */ Q("p", {
			className: Sl,
			children: bt(_("pending_withdrawal.cancel.success"), { amount: re(e) })
		});
	}, [
		k,
		re,
		_
	]), z = Y(() => !A || P ? null : oe ? Dl({
		pendingWithdrawals: N,
		activePendingWithdrawal: oe,
		isPaymentInteractionLocked: t,
		isCancelling: ue,
		isDrawerOpen: E,
		onDismiss: de,
		onCancel: pe,
		onView: me,
		formatPendingWithdrawalAmount: ne,
		formatPendingWithdrawalTotals: ie,
		successFooter: he
	}) : Ol({ successFooter: he }), [
		oe,
		A,
		ne,
		ie,
		pe,
		de,
		me,
		ue,
		t,
		E,
		P,
		N,
		he
	]), B = Y(() => A ? /* @__PURE__ */ Q(kl, {
		actionConfirmationModal: ce,
		formatDisplayValue: y,
		formatPendingWithdrawalAmount: ne,
		isActionConfirmationOpen: F,
		isDrawerOpen: E,
		isSelectionDisabled: t || ue || O !== null,
		onClose: R,
		onSelect: L,
		pendingWithdrawals: N,
		selectedPaymentId: D,
		title: _("pending_withdrawal.cancel.drawer.title")
	}) : null, [
		ce,
		O,
		A,
		y,
		ne,
		R,
		L,
		ue,
		F,
		t,
		E,
		N,
		D,
		_
	]), ge = q((e) => e, []), _e = Y(() => ({
		interactivePromptContent: z,
		pendingWithdrawalDrawer: B,
		attachSuccessFooter: ge
	}), [
		ge,
		z,
		B
	]);
	return /* @__PURE__ */ Q(xl.Provider, {
		value: _e,
		children: e
	});
}
var jl = () => ci(xl), Ml = "pl-[0.9rem] pr-1.5 @sm:pl-[1.1rem] @sm:pr-3 @md:pl-[1.2rem] group-data-[stuck=true]:pb-0.5", Nl = "pt-3 @md:pt-4", Pl = (e) => e?.orientation === "top", Fl = E("/pt/$id")({ component: Il });
function Il() {
	let e = Dt(), { id: t } = O({ strict: !1 }), n = Bn(), { getPaymentType: a, isLoading: o, isError: s } = Fr(), { translateKey: c } = ve(), [l, u] = Z(null), [d, f] = Z({
		isComplete: !1,
		errorMessage: null
	}), { uiComboView: p, lockAmount: m, uiInteractivePrompts: h, uiPaymentConfirmView: g, uiBonusesStyle: _, uiFixedControls: v, method: y, currency: b, selectedBonusCode: x, resetFlowOnBack: S, initialAmount: C, user: w, uiShowFees: T, paymentFormDraft: E, comboViewFormDraft: D, gotoPaymentType: k, setCashierState: A } = ci(H), { currencyFormatter: j, formatCurrencyValue: M } = Sn(), { interactivePromptContent: ee, pendingWithdrawalDrawer: N, attachSuccessFooter: te } = jl(), ne = Y(() => be(j), [j]), re = !Pn({
		uiComboView: p,
		lockAmount: m
	}), ae = re ? ee : null, P = re ? N : null, { bonuses: oe, getBonusAvailabilityForPaymentType: se } = En(), ce = an({
		uiComboView: p,
		lockAmount: m,
		method: y
	}), { handleBack: F } = Ar({
		defaultRoute: ce,
		useHistory: !S,
		replace: S || !p
	});
	J(() => {
		S && A((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [S, A]);
	let [I, le] = Z(!1), ue = !!l?.submit.loading, [de, fe] = Z(!1), pe = Y(() => {
		let e = l?.submit, t = !!e?.loading, n = c("cta.back"), r = c(y === i.PAYOUT ? "cta.payout" : "cta.payin"), a = [/* @__PURE__ */ Q(or, {
			variant: "neutral",
			size: "xl",
			fullWidth: !0,
			disabled: t,
			onClick: F,
			label: n
		}, "cashier-nav-back")];
		return e?.visible && a.push(/* @__PURE__ */ Q(or, {
			variant: "secondary",
			size: "xl",
			fullWidth: !0,
			disabled: e.disabled || t,
			loading: e.loading,
			onClick: () => {
				e.onClick();
			},
			label: r
		}, "cashier-nav-submit")), a;
	}, [
		l,
		F,
		y,
		c
	]);
	J(() => () => {
		u(null);
	}, [u]);
	let L = x ? oe.find((e) => e.code === x) ?? null : null, me = t, R = me ? a(me) : null, z = R ? Qn(R) : me, B = !!(jt(_) && R && se(R).length > 0);
	J(() => {
		k && me === k && (R || o || s || n({
			to: ce,
			replace: !0
		}));
	}, [
		ce,
		k,
		s,
		o,
		n,
		R,
		me
	]);
	let { name: ge, nameKeys: _e, logo: ye, limits: xe, fee: V } = R ?? {}, Se = R?.fields ?? [], Ce = R?.hfFields ?? [], we = ge ?? z, Te = R ? Or(R) : null, Ee = R?.notifications ?? [], De = Ee.filter(Pl), Oe = Ee.filter((e) => !Pl(e)), ke = De.length > 0, Ae = Oe.length > 0, U = Se.some((e) => e.id === "amount"), Me = U ? C : "", Ne = !!(z && D && Un(D, {
		paymentTypeName: z,
		method: y,
		amount: Me
	})), Fe = !!(z && D && !Ne && D.paymentTypeName === z && D.method === y), Ie = !!(z && E && Un(E, {
		paymentTypeName: z,
		method: y,
		amount: Me
	})), Le = p || m || Ne, Re = nt(y, w, V), ze = Ge(C, xe, { maxBoundary: Re }), Be = Se.some((e) => e.id && e.id !== "amount"), He = Ce.length > 0 || Be, We = Le && R && (!U || Kt(C) && !ze.isOutOfRange && !ze.isIncomplete), W = !!(qr(_) && L), qe = !!(We && (g && (Ne || !He) || !He && !Fe || Ne && W || We && Ne && !g && !W)), Je = qe || ue && de, Ye = q((e) => {
		u(e), fe((t) => e.submit.loading && t || qe);
	}, [
		qe,
		u,
		fe
	]), Xe = (() => {
		if (!Le || !U || !Kt(C)) return [];
		let e = Se.find((e) => e.id === "amount"), t = e?.label ?? e?.id ?? "field.amount.label";
		return [{
			id: e?.id ?? "amount",
			label: t,
			value: C
		}];
	})(), Qe = Je ? "confirm" : "form", $e = Qe === "form" && !Ne && !Ie, et = (() => {
		if (Ne) return D?.values;
		if (Ie) return E?.values;
	})(), tt = Xe.length > 0, rt = tt && !Je, it = (e) => {
		if (!z) return;
		let t = {
			paymentTypeName: z,
			method: y,
			amount: Me,
			values: U ? {
				...e.values,
				amount: Me
			} : e.values,
			hasHostedFields: e.hasHostedFields
		};
		A((e) => he(e.paymentFormDraft, t) ? e : {
			...e,
			paymentFormDraft: t
		});
	}, at = jn({
		renderMode: Qe,
		hideAmountField: rt,
		lockAmount: m,
		fields: Se
	}), ot = hn(y, b, w, {
		amount: C,
		fee: V,
		includeBalanceRows: at,
		includeRemainingBalance: at || tt
	}), st = T ? zt(V, wt(C) ?? 0, {
		feeCurrencyFormatter: ne,
		formatCurrencyValue: M
	}) : null, ct = y === i.PAYOUT ? Ft(V, wt(C) ?? 0, b) : null, lt = y === i.PAYIN && T ? Ve(V, wt(C) ?? 0, b) : null, ut = y === i.PAYOUT ? Ut(ot, [st, ct]) : ot, dt = y === i.PAYIN ? [st, lt].filter((e) => e !== null) : [], ft = Re !== null && ze.value !== null && ze.value > Re ? { "withdrawable-balance": "danger" } : {}, pt = tt ? [
		...Xe,
		...dt,
		...ut
	] : [...ut, ...dt], mt = c(Je ? "cta.confirm_payment" : "payment.enter_details"), ht = qr(_) ? L : null, gt = ht?.termsAndConditions, _t = gt ? {
		titleKey: "bonus.terms.title",
		content: /* @__PURE__ */ Q(yr, { termsKey: gt })
	} : void 0, vt = (() => {
		let e = xt({ translateKey: c });
		return {
			legacyTitle: Je ? mt : e.legacyTitle,
			titleKey: Je ? "cta.interactive_prompt.confirm_payment.title" : e.titleKey,
			bodyKey: Je ? "cta.interactive_prompt.confirm_payment.desc" : e.bodyKey,
			icon: Je ? /* @__PURE__ */ Q(xr, {}) : e.icon
		};
	})(), yt = vt;
	d.errorMessage && (yt = {
		...vt,
		legacyTitle: d.errorMessage,
		titleKey: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ Q(Ze, {}),
		tone: "danger"
	}), !ae && re && !d.errorMessage && (yt = te(yt));
	let bt = ["border-b border-[var(--pc-color-depth-3)]", "last:border-b-0"].join(" "), St = /* @__PURE__ */ Q(tr, {
		summaryFields: pt,
		rowVariants: ft,
		animateEntrance: !1,
		children: /* @__PURE__ */ $("div", {
			className: "flex flex-col",
			children: [/* @__PURE__ */ Q("div", {
				className: bt,
				children: /* @__PURE__ */ Q(Ke, {
					selectionId: z,
					domSlug: z,
					name: we,
					nameKeys: _e,
					logo: ye,
					limits: xe,
					fee: V,
					listStyle: r.LIST,
					showMeta: !0,
					title: Te ?? void 0,
					interactive: !1,
					embedded: !0,
					embeddedSurfacePosition: ht || pt.length > 0 ? "first" : "only"
				})
			}), ht && /* @__PURE__ */ Q("div", {
				className: bt,
				children: /* @__PURE__ */ Q(Ke, {
					domSlug: ht.code,
					name: ht.code,
					title: ht.title,
					description: ht.description,
					logo: ht.logo,
					logoSurface: "bonusLogo",
					listStyle: r.LIST,
					interactive: !1,
					embedded: !0,
					embeddedSurfacePosition: pt.length > 0 ? "middle" : "last",
					infoDrawer: _t
				})
			})]
		})
	});
	return me ? !R && o && !s ? /* @__PURE__ */ Q(ie, {
		label: c("loading.payment_types"),
		testId: "cashier-payment-types-loading"
	}) : R ? /* @__PURE__ */ Q(Hn, {
		id: e.id("route-payment-type"),
		className: e.className("route-payment-type"),
		title: h ? void 0 : mt,
		header: h ? /* @__PURE__ */ $("div", {
			className: "flex flex-col gap-3",
			children: [ae && /* @__PURE__ */ Q(je, {
				content: ae,
				className: Ml
			}), /* @__PURE__ */ Q(je, {
				content: yt,
				className: Ml
			})]
		}) : void 0,
		stickyHeader: !0,
		children: /* @__PURE__ */ $("div", {
			className: G(e.className("route-payment-type-content"), "flex flex-col", Nl, Pe),
			children: [
				ke && /* @__PURE__ */ Q("div", {
					className: "mb-2 flex flex-col gap-2",
					children: De.map((e, t) => /* @__PURE__ */ Q(tn, {
						notification: e,
						translateKey: c
					}, `${e.key}-${e.type}-${String(t)}`))
				}),
				/* @__PURE__ */ $(tl, {
					"data-slot": "payment-type-detail-stack",
					children: [
						St,
						B && /* @__PURE__ */ Q(Ir, {
							paymentType: R,
							amount: C,
							surface: "embedded"
						}),
						/* @__PURE__ */ Q(Fn, {
							id: z,
							onActionsChange: Ye,
							onPromptStateChange: f,
							onValuesChange: Qe === "form" ? it : void 0,
							renderMode: Qe,
							hideAmountField: rt,
							valueOverrides: et,
							requireDirtyBeforeSubmit: $e,
							formSurfaceChrome: "contained",
							reserveTrailingActionSpace: !v
						}, z)
					]
				}),
				Ae && /* @__PURE__ */ Q("div", {
					className: "mt-1 mb-2 flex flex-col gap-2",
					children: Oe.map((e, t) => /* @__PURE__ */ Q(tn, {
						notification: e,
						translateKey: c
					}, `${e.key}-${e.type}-${String(t)}`))
				}),
				/* @__PURE__ */ Q(lr, {
					domScope: "route-payment-type-actions",
					items: pe,
					fixed: v
				}),
				gt && /* @__PURE__ */ Q(Ue, {
					isOpen: I,
					onClose: () => {
						le(!1);
					},
					title: c("bonus.terms.title"),
					children: /* @__PURE__ */ Q("div", {
						className: "px-5 pb-5 pt-2",
						children: /* @__PURE__ */ Q(yr, { termsKey: gt })
					})
				}),
				P
			]
		})
	}) : /* @__PURE__ */ Q("div", { children: c("error.invalid_payment_type") }) : /* @__PURE__ */ Q("div", { children: c("error.invalid_payment_type") });
}
//#endregion
//#region ../../node_modules/number-flow/dist/lite-BTIaQdTe.mjs
var Ll = (e, t, n) => {
	let r = document.createElement(e), [i, a] = Array.isArray(t) ? [void 0, t] : [t, n];
	return i && Object.assign(r, i), a?.forEach((e) => r.appendChild(e)), r;
}, Rl = (e, t) => t === "left" ? e.offsetLeft : ((e.offsetParent instanceof HTMLElement ? e.offsetParent : null)?.offsetWidth ?? 0) - e.offsetWidth - e.offsetLeft, zl = (e) => e.offsetWidth > 0 && e.offsetHeight > 0, Bl = (e, t) => {
	!customElements.get(e) && customElements.define(e, t);
};
function Vl(e, t, { reverse: n = !1 } = {}) {
	let r = e.length;
	for (let i = n ? r - 1 : 0; n ? i >= 0 : i < r; n ? i-- : i++) t(e[i], i);
}
function Hl(e, t, n, r) {
	let i = t.formatToParts(e);
	n && i.unshift({
		type: "prefix",
		value: n
	}), r && i.push({
		type: "suffix",
		value: r
	});
	let a = [], o = [], s = [], c = [], l = {}, u = (e) => `${e}:${l[e] = (l[e] ?? -1) + 1}`, d = "", f = !1, p = !1;
	for (let e of i) {
		d += e.value;
		let t = e.type === "minusSign" || e.type === "plusSign" ? "sign" : e.type;
		t === "integer" ? (f = !0, o.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e)
		})))) : t === "group" ? o.push({
			type: t,
			value: e.value
		}) : t === "decimal" ? (p = !0, s.push({
			type: t,
			value: e.value,
			key: u(t)
		})) : t === "fraction" ? s.push(...e.value.split("").map((e) => ({
			type: t,
			value: parseInt(e),
			key: u(t),
			pos: -1 - l[t]
		}))) : (f || p ? c : a).push({
			type: t,
			value: e.value,
			key: u(t)
		});
	}
	let m = [];
	for (let e = o.length - 1; e >= 0; e--) {
		let t = o[e];
		m.unshift(t.type === "integer" ? {
			...t,
			key: u(t.type),
			pos: l[t.type]
		} : {
			...t,
			key: u(t.type)
		});
	}
	return {
		pre: a,
		integer: m,
		fraction: s,
		post: c,
		valueAsString: d,
		value: typeof e == "string" ? parseFloat(e) : e
	};
}
String.raw;
var Ul = String.raw, Wl = (() => {
	try {
		document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
	} catch {
		return !1;
	}
	return !0;
})(), Gl = typeof CSS < "u" && CSS.supports && CSS.supports("line-height", "mod(1,1)"), Kl = typeof matchMedia < "u" ? matchMedia("(prefers-reduced-motion: reduce)") : null, ql = "--_number-flow-d-opacity", Jl = "--_number-flow-d-width", Yl = "--_number-flow-dx", Xl = "--_number-flow-d", Zl = (() => {
	try {
		return CSS.registerProperty({
			name: ql,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: Yl,
			syntax: "<length>",
			inherits: !0,
			initialValue: "0px"
		}), CSS.registerProperty({
			name: Jl,
			syntax: "<number>",
			inherits: !1,
			initialValue: "0"
		}), CSS.registerProperty({
			name: Xl,
			syntax: "<number>",
			inherits: !0,
			initialValue: "0"
		}), !0;
	} catch {
		return !1;
	}
})(), Ql = "var(--number-flow-char-height, 1em)", $l = "var(--number-flow-mask-height, 0.25em)", eu = `calc(${$l} / 2)`, tu = "var(--number-flow-mask-width, 0.5em)", nu = `calc(${tu} / var(--scale-x))`, ru = "#000 0, transparent 71%", iu = Ul`:host{display:inline-block;direction:ltr;white-space:nowrap;isolation:isolate;line-height:${Ql} !important}.number,.number__inner{display:inline-block;transform-origin:left top}:host([data-will-change]) :is(.number,.number__inner,.section,.digit,.digit__num,.symbol){will-change:transform}.number{--scale-x:calc(1 + var(${Jl}) / var(--width));transform:translateX(var(${Yl})) scaleX(var(--scale-x));margin:0 calc(-1 * ${tu});position:relative;-webkit-mask-image:linear-gradient(to right,transparent 0,#000 ${nu},#000 calc(100% - ${nu}),transparent ),linear-gradient(to bottom,transparent 0,#000 ${$l},#000 calc(100% - ${$l}),transparent 100% ),radial-gradient(at bottom right,${ru}),radial-gradient(at bottom left,${ru}),radial-gradient(at top left,${ru}),radial-gradient(at top right,${ru});-webkit-mask-size:100% calc(100% - ${$l} * 2),calc(100% - ${nu} * 2) 100%,${nu} ${$l},${nu} ${$l},${nu} ${$l},${nu} ${$l};-webkit-mask-position:center,center,top left,top right,bottom right,bottom left;-webkit-mask-repeat:no-repeat}.number__inner{padding:${eu} ${tu};transform:scaleX(calc(1 / var(--scale-x))) translateX(calc(-1 * var(${Yl})))}:host > :not(.number){z-index:5}.section,.symbol{display:inline-block;position:relative;isolation:isolate}.section::after{content:'\200b';display:inline-block}.section--justify-left{transform-origin:center left}.section--justify-right{transform-origin:center right}.section > [inert],.symbol > [inert]{margin:0 !important;position:absolute !important;z-index:-1}.digit{display:inline-block;position:relative;--c:var(--current) + var(${Xl})}.digit__num,.number .section::after{padding:${eu} 0}.digit__num{display:inline-block;--offset-raw:mod(var(--length) + var(--n) - mod(var(--c),var(--length)),var(--length));--offset:calc( var(--offset-raw) - var(--length) * round(down,var(--offset-raw) / (var(--length) / 2),1) );--y:clamp(-100%,var(--offset) * 100%,100%);transform:translateY(var(--y))}.digit__num[inert]{position:absolute;top:0;left:50%;transform:translateX(-50%) translateY(var(--y))}.digit:not(.is-spinning) .digit__num[inert]{display:none}.symbol__value{display:inline-block;mix-blend-mode:plus-lighter;white-space:pre}.section--justify-left .symbol > [inert]{left:0}.section--justify-right .symbol > [inert]{right:0}.animate-presence{opacity:calc(1 + var(${ql}))}`, au = HTMLElement;
Ul`:host{display:inline-block;direction:ltr;white-space:nowrap;line-height:${Ql} !important}span{display:inline-block}:host([data-will-change]) span{will-change:transform}.number,.digit{padding:${eu} 0}.symbol{white-space:pre}`;
var ou = Gl && Wl && Zl, su, cu = class extends au {
	constructor() {
		super(), this.created = !1, this.batched = !1;
		let { animated: e, ...t } = this.constructor.defaultProps;
		this._animated = this.computedAnimated = e, Object.assign(this, t);
	}
	get animated() {
		return this._animated;
	}
	set animated(e) {
		var t;
		this.animated !== e && (this._animated = e, (t = this.shadowRoot) == null || t.getAnimations().forEach((e) => e.finish()));
	}
	set data(e) {
		var t;
		if (e == null) return;
		let { pre: n, integer: r, fraction: i, post: a, value: o } = e;
		if (this.created) {
			let s = this._data;
			this._data = e, this.computedTrend = typeof this.trend == "function" ? this.trend(s.value, o) : this.trend, this.computedAnimated = ou && this._animated && (!this.respectMotionPreference || !(Kl != null && Kl.matches)) && zl(this), (t = this.plugins) == null || t.forEach((t) => t.onUpdate?.call(t, e, s, this)), this.batched || this.willUpdate(), this._pre.update(n), this._num.update({
				integer: r,
				fraction: i
			}), this._post.update(a), this.batched || this.didUpdate();
		} else {
			this._data = e, this.attachShadow({ mode: "open" });
			try {
				this._internals ??= this.attachInternals(), this._internals.role = "img";
			} catch {}
			if (typeof CSSStyleSheet < "u" && this.shadowRoot.adoptedStyleSheets) su || (su = new CSSStyleSheet(), su.replaceSync(iu)), this.shadowRoot.adoptedStyleSheets = [su];
			else {
				let e = document.createElement("style");
				e.textContent = iu, this.shadowRoot.appendChild(e);
			}
			this._pre = new fu(this, n, {
				justify: "right",
				part: "left"
			}), this.shadowRoot.appendChild(this._pre.el), this._num = new lu(this, r, i), this.shadowRoot.appendChild(this._num.el), this._post = new fu(this, a, {
				justify: "left",
				part: "right"
			}), this.shadowRoot.appendChild(this._post.el), this.created = !0;
		}
		try {
			this._internals.ariaLabel = e.valueAsString;
		} catch {}
	}
	willUpdate() {
		this._pre.willUpdate(), this._num.willUpdate(), this._post.willUpdate();
	}
	didUpdate() {
		if (!this.computedAnimated) return;
		this._abortAnimationsFinish ? this._abortAnimationsFinish.abort() : this.dispatchEvent(new Event("animationsstart")), this._pre.didUpdate(), this._num.didUpdate(), this._post.didUpdate();
		let e = new AbortController();
		Promise.all(this.shadowRoot.getAnimations().map((e) => e.finished)).then(() => {
			e.signal.aborted || (this.dispatchEvent(new Event("animationsfinish")), this._abortAnimationsFinish = void 0);
		}), this._abortAnimationsFinish = e;
	}
};
cu.defaultProps = {
	transformTiming: {
		duration: 900,
		easing: "linear(0,.005,.019,.039,.066,.096,.129,.165,.202,.24,.278,.316,.354,.39,.426,.461,.494,.526,.557,.586,.614,.64,.665,.689,.711,.731,.751,.769,.786,.802,.817,.831,.844,.856,.867,.877,.887,.896,.904,.912,.919,.925,.931,.937,.942,.947,.951,.955,.959,.962,.965,.968,.971,.973,.976,.978,.98,.981,.983,.984,.986,.987,.988,.989,.99,.991,.992,.992,.993,.994,.994,.995,.995,.996,.996,.9963,.9967,.9969,.9972,.9975,.9977,.9979,.9981,.9982,.9984,.9985,.9987,.9988,.9989,1)"
	},
	spinTiming: void 0,
	opacityTiming: {
		duration: 450,
		easing: "ease-out"
	},
	animated: !0,
	trend: (e, t) => Math.sign(t - e),
	respectMotionPreference: !0,
	plugins: void 0,
	digits: void 0
};
var lu = class {
	constructor(e, t, n, { className: r, ...i } = {}) {
		this.flow = e, this._integer = new du(e, t, {
			justify: "right",
			part: "integer"
		}), this._fraction = new du(e, n, {
			justify: "left",
			part: "fraction"
		}), this._inner = Ll("span", { className: "number__inner" }, [this._integer.el, this._fraction.el]), this.el = Ll("span", {
			...i,
			part: "number",
			className: `number ${r ?? ""}`
		}, [this._inner]);
	}
	willUpdate() {
		this._prevWidth = this.el.offsetWidth, this._prevLeft = this.el.getBoundingClientRect().left, this._integer.willUpdate(), this._fraction.willUpdate();
	}
	update({ integer: e, fraction: t }) {
		this._integer.update(e), this._fraction.update(t);
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this._integer.didUpdate(), this._fraction.didUpdate();
		let t = this._prevLeft - e.left, n = this.el.offsetWidth, r = this._prevWidth - n;
		this.el.style.setProperty("--width", String(n)), this.el.animate({
			[Yl]: [`${t}px`, "0px"],
			[Jl]: [r, 0]
		}, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, uu = class {
	constructor(e, t, { justify: n, className: r, ...i }, a) {
		this.flow = e, this.children = /* @__PURE__ */ new Map(), this.onCharRemove = (e) => () => {
			this.children.delete(e);
		}, this.justify = n;
		let o = t.map((e) => this.addChar(e).el);
		this.el = Ll("span", {
			...i,
			className: `section section--justify-${n} ${r ?? ""}`
		}, a ? a(o) : o);
	}
	addChar(e, { startDigitsAtZero: t = !1, ...n } = {}) {
		let r = e.type === "integer" || e.type === "fraction" ? new hu(this, e.type, t ? 0 : e.value, e.pos, {
			...n,
			onRemove: this.onCharRemove(e.key)
		}) : new gu(this, e.type, e.value, {
			...n,
			onRemove: this.onCharRemove(e.key)
		});
		return this.children.set(e.key, r), r;
	}
	unpop(e) {
		e.el.removeAttribute("inert"), e.el.style.top = "", e.el.style[this.justify] = "";
	}
	pop(e) {
		e.forEach((e) => {
			e.el.style.top = `${e.el.offsetTop}px`, e.el.style[this.justify] = `${Rl(e.el, this.justify)}px`;
		}), e.forEach((e) => {
			e.el.setAttribute("inert", ""), e.present = !1;
		});
	}
	addNewAndUpdateExisting(e) {
		let t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = this.justify === "left", i = r ? "prepend" : "append";
		if (Vl(e, (e) => {
			let r;
			this.children.has(e.key) ? (r = this.children.get(e.key), n.set(e, r), this.unpop(r), r.present = !0) : (r = this.addChar(e, {
				startDigitsAtZero: !0,
				animateIn: !0
			}), t.set(e, r)), this.el[i](r.el);
		}, { reverse: r }), this.flow.computedAnimated) {
			let e = this.el.getBoundingClientRect();
			t.forEach((t) => {
				t.willUpdate(e);
			});
		}
		t.forEach((e, t) => {
			e.update(t.value);
		}), n.forEach((e, t) => {
			e.update(t.value);
		});
	}
	willUpdate() {
		let e = this.el.getBoundingClientRect();
		this._prevOffset = e[this.justify], this.children.forEach((t) => t.willUpdate(e));
	}
	didUpdate() {
		let e = this.el.getBoundingClientRect();
		this.children.forEach((t) => t.didUpdate(e));
		let t = e[this.justify], n = this._prevOffset - t;
		n && this.children.size && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, du = class extends uu {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n), this.unpop(n);
		}), this.addNewAndUpdateExisting(e), t.forEach((e) => {
			e instanceof hu && e.update(0);
		}), this.pop(t);
	}
}, fu = class extends uu {
	update(e) {
		let t = /* @__PURE__ */ new Map();
		this.children.forEach((n, r) => {
			e.find((e) => e.key === r) || t.set(r, n);
		}), this.pop(t), this.addNewAndUpdateExisting(e);
	}
}, pu = class {
	constructor(e, t, { onRemove: n, animateIn: r = !1 } = {}) {
		this.flow = e, this.el = t, this._present = !0, this._remove = () => {
			var e;
			this.el.remove(), (e = this._onRemove) == null || e.call(this);
		}, this.el.classList.add("animate-presence"), this.flow.computedAnimated && r && this.el.animate({ [ql]: [-.9999, 0] }, {
			...this.flow.opacityTiming,
			composite: "accumulate"
		}), this._onRemove = n;
	}
	get present() {
		return this._present;
	}
	set present(e) {
		if (this._present !== e) {
			if (this._present = e, e ? this.el.removeAttribute("inert") : this.el.setAttribute("inert", ""), !this.flow.computedAnimated) {
				e || this._remove();
				return;
			}
			this.el.style.setProperty("--_number-flow-d-opacity", e ? "0" : "-.999"), this.el.animate({ [ql]: e ? [-.9999, 0] : [.999, 0] }, {
				...this.flow.opacityTiming,
				composite: "accumulate"
			}), e ? this.flow.removeEventListener("animationsfinish", this._remove) : this.flow.addEventListener("animationsfinish", this._remove, { once: !0 });
		}
	}
}, mu = class extends pu {
	constructor(e, t, n, r) {
		super(e.flow, n, r), this.section = e, this.value = t, this.el = n;
	}
}, hu = class extends mu {
	constructor(e, t, n, r, i) {
		let a = (e.flow.digits?.[r]?.max ?? 9) + 1, o = Array.from({ length: a }).map((e, t) => {
			let r = Ll("span", { className: "digit__num" }, [document.createTextNode(String(t))]);
			return t !== n && r.setAttribute("inert", ""), r.style.setProperty("--n", String(t)), r;
		}), s = Ll("span", {
			part: `digit ${t}-digit`,
			className: "digit"
		}, o);
		s.style.setProperty("--current", String(n)), s.style.setProperty("--length", String(a)), super(e, n, s, i), this.pos = r, this._onAnimationsFinish = () => {
			this.el.classList.remove("is-spinning");
		}, this._numbers = o, this.length = a;
	}
	willUpdate(e) {
		let t = this.el.getBoundingClientRect();
		this._prevValue = this.value;
		let n = t[this.section.justify] - e[this.section.justify], r = t.width / 2;
		this._prevCenter = this.section.justify === "left" ? n + r : n - r;
	}
	update(e) {
		this.el.style.setProperty("--current", String(e)), this._numbers.forEach((t, n) => n === e ? t.removeAttribute("inert") : t.setAttribute("inert", "")), this.value = e;
	}
	didUpdate(e) {
		let t = this.el.getBoundingClientRect(), n = t[this.section.justify] - e[this.section.justify], r = t.width / 2, i = this.section.justify === "left" ? n + r : n - r, a = this._prevCenter - i;
		a && this.el.animate({ transform: [`translateX(${a}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
		let o = this.getDelta();
		o && (this.el.classList.add("is-spinning"), this.el.animate({ [Xl]: [-o, 0] }, {
			...this.flow.spinTiming ?? this.flow.transformTiming,
			composite: "accumulate"
		}), this.flow.addEventListener("animationsfinish", this._onAnimationsFinish, { once: !0 }));
	}
	getDelta() {
		if (this.flow.plugins) for (let e of this.flow.plugins) {
			let t = e.getDelta?.call(e, this.value, this._prevValue, this);
			if (t != null) return t;
		}
		let e = this.value - this._prevValue, t = this.flow.computedTrend || Math.sign(e);
		return t < 0 && this.value > this._prevValue ? this.value - this.length - this._prevValue : t > 0 && this.value < this._prevValue ? this.length - this._prevValue + this.value : e;
	}
}, gu = class extends mu {
	constructor(e, t, n, r) {
		let i = Ll("span", {
			className: "symbol__value",
			textContent: n
		});
		super(e, n, Ll("span", {
			part: `symbol ${t}`,
			className: "symbol"
		}, [i]), r), this.type = t, this._children = /* @__PURE__ */ new Map(), this._onChildRemove = (e) => () => {
			this._children.delete(e);
		}, this._children.set(n, new pu(this.flow, i, { onRemove: this._onChildRemove(n) }));
	}
	willUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect();
		this._prevOffset = t[this.section.justify] - e[this.section.justify];
	}
	update(e) {
		if (this.value !== e) {
			let t = this._children.get(this.value);
			t && (t.present = !1);
			let n = this._children.get(e);
			if (n) n.present = !0;
			else {
				let t = Ll("span", {
					className: "symbol__value",
					textContent: e
				});
				this.el.appendChild(t), this._children.set(e, new pu(this.flow, t, {
					animateIn: !0,
					onRemove: this._onChildRemove(e)
				}));
			}
		}
		this.value = e;
	}
	didUpdate(e) {
		if (this.type === "decimal") return;
		let t = this.el.getBoundingClientRect()[this.section.justify] - e[this.section.justify], n = this._prevOffset - t;
		n && this.el.animate({ transform: [`translateX(${n}px)`, "none"] }, {
			...this.flow.transformTiming,
			composite: "accumulate"
		});
	}
}, _u = parseInt(K.version.match(/^(\d+)\./)?.[1]) >= 19, vu = ["data", "digits"], yu = class extends cu {
	attributeChangedCallback(e, t, n) {
		this[e] = JSON.parse(n);
	}
};
yu.observedAttributes = _u ? [] : vu, Bl("number-flow-react", yu);
var bu = {}, xu = _u ? (e) => e : JSON.stringify;
function Su(e) {
	let { transformTiming: t, spinTiming: n, opacityTiming: r, animated: i, respectMotionPreference: a, trend: o, plugins: s, ...c } = e;
	return [{
		transformTiming: t,
		spinTiming: n,
		opacityTiming: r,
		animated: i,
		respectMotionPreference: a,
		trend: o,
		plugins: s
	}, c];
}
var Cu = class extends K.Component {
	updateProperties(e) {
		if (!this.el) return;
		this.el.batched = !this.props.isolate;
		let [t] = Su(this.props);
		Object.entries(t).forEach(([e, t]) => {
			this.el[e] = t ?? yu.defaultProps[e];
		}), e?.onAnimationsStart && this.el.removeEventListener("animationsstart", e.onAnimationsStart), this.props.onAnimationsStart && this.el.addEventListener("animationsstart", this.props.onAnimationsStart), e?.onAnimationsFinish && this.el.removeEventListener("animationsfinish", e.onAnimationsFinish), this.props.onAnimationsFinish && this.el.addEventListener("animationsfinish", this.props.onAnimationsFinish);
	}
	componentDidMount() {
		this.updateProperties(), _u && this.el && (this.el.digits = this.props.digits, this.el.data = this.props.data);
	}
	getSnapshotBeforeUpdate(e) {
		if (this.updateProperties(e), e.data !== this.props.data) {
			if (this.props.group) return this.props.group.willUpdate(), () => this.props.group?.didUpdate();
			if (!this.props.isolate) return this.el?.willUpdate(), () => this.el?.didUpdate();
		}
		return null;
	}
	componentDidUpdate(e, t, n) {
		n?.();
	}
	handleRef(e) {
		this.props.innerRef && (this.props.innerRef.current = e), this.el = e;
	}
	render() {
		let [e, { innerRef: t, className: n, data: r, willChange: i, isolate: a, group: o, digits: s, onAnimationsStart: c, onAnimationsFinish: l, ...u }] = Su(this.props);
		return /*#__PURE__*/ K.createElement("number-flow-react", {
			ref: this.handleRef,
			"data-will-change": i ? "" : void 0,
			class: n,
			...u,
			dangerouslySetInnerHTML: { __html: "" },
			suppressHydrationWarning: !0,
			digits: xu(s),
			data: xu(r)
		});
	}
	constructor(e) {
		super(e), this.handleRef = this.handleRef.bind(this);
	}
}, wu = /*#__PURE__*/ K.forwardRef(function({ value: e, locales: t, format: n, prefix: r, suffix: i, ...a }, o) {
	K.useImperativeHandle(o, () => s.current, []);
	let s = K.useRef(), c = K.useContext(Tu);
	c?.useRegister(s);
	let l = K.useMemo(() => t ? JSON.stringify(t) : "", [t]), u = K.useMemo(() => n ? JSON.stringify(n) : "", [n]), d = K.useMemo(() => Hl(e, bu[`${l}:${u}`] ??= new Intl.NumberFormat(t, n), r, i), [
		e,
		l,
		u,
		r,
		i
	]);
	return /*#__PURE__*/ K.createElement(Cu, {
		...a,
		group: c,
		data: d,
		innerRef: s
	});
}), Tu = /*#__PURE__*/ K.createContext(void 0), Eu = (e) => e.length > 0 ? e : "";
function Du(e) {
	return typeof e == "object" && !!e;
}
var Ou = (e, t, n) => e && e !== t ? e : n, ku = .747, Au = (e) => Number((e * ku).toFixed(3)), ju = (e) => ({
	min: Au(e.min),
	max: Au(e.max)
}), Mu = Au(.8), Nu = {
	base: ju({
		min: 1.05,
		max: 3.25
	}),
	md: ju({
		min: 1.24,
		max: 3.8
	}),
	xl: ju({
		min: 1.42,
		max: 4.36
	})
}, Pu = {
	min: Nu.base.min,
	max: Nu.base.max
}, Fu = Nu.base.max, Iu = .75, Lu = {
	md: 448,
	xl: 560
}, Ru = "min(6ch, 100%)", zu = Au(60), Bu = 24, Vu = "cubic-bezier(0.2, 0.8, 0.2, 1)", Hu = .01, Uu = "0em", Wu = {
	transformTiming: {
		duration: 450,
		easing: Vu
	},
	spinTiming: {
		duration: 480,
		easing: Vu
	},
	opacityTiming: {
		duration: 300,
		easing: Vu
	}
}, Gu = (e) => ({
	renderedValue: e,
	pendingValue: null
}), Ku = (e, t) => e.renderedValue === t.renderedValue && e.pendingValue === t.pendingValue, qu = (e, t) => {
	let { numericValue: n, defer: r, preserveRendered: i } = t, a = e;
	return a = i ? {
		renderedValue: e.renderedValue,
		pendingValue: null
	} : n === null ? {
		renderedValue: null,
		pendingValue: null
	} : r ? {
		renderedValue: e.renderedValue,
		pendingValue: n
	} : {
		renderedValue: n,
		pendingValue: null
	}, Ku(e, a) ? e : a;
}, Ju = (e) => {
	let t = Math.max(0, e.min);
	return {
		min: t,
		max: Math.max(t, e.max)
	};
}, Yu = (e) => {
	let t = e;
	for (; t;) {
		let e = window.getComputedStyle(t).getPropertyValue("container-type").trim();
		if (e && e !== "normal") return t;
		t = t.parentElement;
	}
	return null;
}, Xu = (e) => {
	if (!e) return 0;
	let t = Yu(e);
	return t ? t.clientWidth : e.clientWidth;
}, Zu = (e) => {
	if (!e) return null;
	let t = Yu(e);
	return t && t !== e ? t : e.parentElement;
}, Qu = (e) => {
	if (!e) return {
		bounds: Pu,
		growthFactor: Mu
	};
	let t = Xu(e) || e.clientWidth, n = Nu.base;
	return t >= Lu.xl ? n = Nu.xl : t >= Lu.md && (n = Nu.md), {
		bounds: Ju(n),
		growthFactor: Math.max(0, Mu)
	};
}, $u = (e, t, n = Mu) => {
	let r = e.length || 1, i = t.min, a = t.max, o = Math.max(2.4, 3.15 - Math.max(0, r - 3) * .06), s = a / Fu, c = o * n * s, l = zu / Math.max(r, 1) * s;
	return Math.max(i, Math.min(c, l, a));
};
function ed({ value: e, onChange: t, helper: n, onSubmit: r, canSubmit: i = !1, inputRef: a, currency: o, locale: s, formatOptions: c, clearOnFocus: l = !1, errorMessage: u, invalid: d = !1, limits: f, reserveErrorSpace: p = !1, showMeta: m = !0, showDivider: h = !0, reserveEmptyLimitMetaSpace: g = !0, align: _ = "center", animateValueChange: v = !1, disabled: y = !1, onFocusChange: b }) {
	let x = Dt(), { translateKey: S } = ve(), [C, w] = Z(!1), T = X(null), E = X(null), D = X(null), O = X(!1), k = X(!1), A = X(e), j = Du(a) ? a : null, M = q((e) => {
		T.current = e, a && typeof a == "function" && a(e);
	}, [a]);
	li(j, () => T.current), J(() => {
		O.current && e.length !== 0 && (k.current = !0);
	}, [e]);
	let ee = q(() => {
		!l || e.length === 0 || O.current || (A.current = e, O.current = !0, k.current = !1, t(""));
	}, [
		l,
		t,
		e
	]), N = q(() => {
		y || (w(!0), b?.(!0), ee());
	}, [
		y,
		b,
		ee
	]), te = q(() => {
		if (w(!1), b?.(!1), !l || !O.current) return;
		let n = !k.current && e.length === 0;
		O.current = !1, k.current = !1, n && t(A.current);
	}, [
		l,
		t,
		b,
		e.length
	]), ne = q(() => {
		y || ee();
	}, [y, ee]), re = q((n) => {
		y || (O.current && (k.current = !0), t(lt(e, n.target.value)));
	}, [
		y,
		t,
		e
	]), ie = Y(() => Eu(e), [e]), ae = Y(() => {
		if (!ie) return null;
		let e = Number(ie);
		return Number.isFinite(e) ? e : null;
	}, [ie]), { currencyFormatter: P } = Rn(o, s, c), oe = Y(() => P ? ie ? ae === null ? ie : P.format(ae) : "" : ie, [
		P,
		ie,
		ae
	]), se = f?.min ?? "", ce = f?.max ?? "", F = se ? ir(se, P, void 0, s) || se : "", I = ce ? ir(ce, P, void 0, s) || ce : "", le = !!(F || I), ue = Y(() => {
		if (!P || typeof P.resolvedOptions != "function") return null;
		let { locale: e, notation: t, ...n } = P.resolvedOptions(), r = { ...n };
		return t !== "scientific" && t !== "engineering" && (r.notation = t), {
			locales: e,
			format: r,
			suffix: P.currencyCodeSuffix || void 0
		};
	}, [P]), de = typeof window < "u" && window.customElements !== void 0 && !!window.customElements.get("number-flow-react"), [fe, pe] = di(qu, ae, Gu);
	J(() => {
		pe({
			type: "sync",
			numericValue: ae,
			defer: v && C && ae !== null,
			preserveRendered: ae === null && O.current && !k.current
		});
	}, [
		v,
		C,
		ae
	]);
	let L = Y(() => {
		let e = [ie, oe].filter(Boolean);
		return e.length === 0 ? "" : e.reduce((e, t) => t.length > e.length ? t : e);
	}, [ie, oe]) || "0", [me, R] = Z(() => $u(L, Pu)), [he, z] = Z(Fu * Iu), B = X(me), ge = X(he);
	J(() => {
		B.current = me;
	}, [me]), J(() => {
		ge.current = he;
	}, [he]), ui(() => {
		let e = E.current, t = D.current;
		if (!e || !t) return;
		let n = Zu(e), r = () => {
			let { bounds: n, growthFactor: r } = Qu(e), i = n.max * Iu;
			Math.abs(ge.current - i) >= Hu && (ge.current = i, z(i));
			let a = Math.max(e.clientWidth - Bu, 0), o = t.getBoundingClientRect().width;
			if (!a || !o) return;
			let s = $u(L, n, r), c = a / o, l = Math.min(s, c, n.max), u = c < n.min ? l : Math.max(n.min, l);
			Math.abs(B.current - u) < Hu || (B.current = u, R(u));
		};
		r();
		let i = () => {
			r();
		};
		window.addEventListener("resize", i);
		let a;
		return typeof ResizeObserver < "u" && n && (a = new ResizeObserver(r), a.observe(n)), () => {
			window.removeEventListener("resize", i), a?.disconnect();
		};
	}, [L]);
	let _e = `${me.toFixed(2)}rem`, ye = Iu, be = `${he.toFixed(2)}rem`, xe = q((e) => {
		e.key === "Enter" && (e.preventDefault(), !y && i && r?.());
	}, [
		i,
		y,
		r
	]), V = !!ue && fe.renderedValue !== null && de, H = V ? fe.renderedValue : void 0, Se = !!oe || V, Ce = !!oe && !C, we = S("field.amount.label"), Te = Ou(S("field.limits.min.label"), "field.limits.min.label", "Min"), Ee = Ou(S("field.limits.max.label"), "field.limits.max.label", "Max"), De = x.id("amount-input"), Oe = !!u || p, ke = m && (!!n || Oe), Ae = d || !!u, je = Ge(e, f), U = Ae ? "danger" : "neutral", Me = je.isOutOfRange && Ae ? "danger" : void 0, Ne = h && le, Pe = "opacity-0";
	Ce && (Pe = y ? "opacity-100" : "opacity-100 group-hover:opacity-80");
	let Fe;
	y || (Fe = C ? "cursor-pointer opacity-85" : "cursor-pointer");
	let Ie = x.attrs("amount-section"), Le = x.attrs("amount-content"), Re = x.attrs("amount-input");
	return /* @__PURE__ */ Q("div", {
		id: x.id("amount-section"),
		...Ie,
		className: [Ie.className, "flex min-w-0 w-full flex-col items-center gap-6"].join(" "),
		children: /* @__PURE__ */ $("div", {
			...Le,
			className: [Le.className, "min-w-0 w-full"].join(" "),
			children: [
				/* @__PURE__ */ Q("label", {
					className: "sr-only",
					htmlFor: De,
					children: we
				}),
				/* @__PURE__ */ Q("div", {
					"data-theme": U,
					className: G(Ne && "border-b border-[var(--pc-color-depth-4)]", Ne && "pb-0.5", !y && "group"),
					children: /* @__PURE__ */ Q("div", {
						className: "flex min-w-0 w-full items-center justify-center",
						children: /* @__PURE__ */ Q("div", {
							className: "flex min-w-0 w-full items-center justify-center",
							children: /* @__PURE__ */ $("div", {
								className: G("relative flex min-w-0 w-full items-center justify-center overflow-hidden"),
								ref: E,
								style: {
									minHeight: be,
									height: be
								},
								children: [
									/* @__PURE__ */ Q("span", {
										"aria-hidden": !0,
										ref: D,
										className: "\n                  pointer-events-none\n                  absolute\n                  top-0\n                  left-0\n                  select-none\n                  whitespace-pre\n                  font-medium\n                  tracking-tight\n                ",
										style: {
											visibility: "hidden",
											fontSize: "1rem",
											lineHeight: ye
										},
										children: L
									}),
									/* @__PURE__ */ Q("input", {
										id: De,
										...Re,
										type: "text",
										autoComplete: "off",
										autoCorrect: "off",
										autoCapitalize: "off",
										spellCheck: !1,
										inputMode: "decimal",
										pattern: "[0-9]*[.]?[0-9]*",
										placeholder: "0",
										value: ie,
										disabled: y,
										"aria-invalid": Ae,
										ref: M,
										onChange: re,
										onKeyDown: xe,
										onFocus: N,
										onBlur: te,
										onClick: ne,
										className: G(Re.className, "[background:var(--pc-color-transparent)]", "[&:-webkit-autofill]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-webkit-autofill]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[caret-color:var(--pc-color-text)]", "[&:-webkit-autofill]:[background-color:var(--pc-color-transparent)]", "[&:-internal-autofill-selected]:[box-shadow:0_0_0_1000px_var(--pc-color-transparent)_inset]", "[&:-internal-autofill-selected]:[-webkit-text-fill-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[caret-color:var(--pc-color-text)]", "[&:-internal-autofill-selected]:[background-color:var(--pc-color-transparent)]", "h-full p-0", "font-medium tracking-tight", "text-[var(--pc-color-text)] caret-[var(--pc-color-text)] outline-none", "placeholder:text-[var(--pc-color-border)]", "transition-colors duration-150 ease-out", "disabled:cursor-default disabled:opacity-60", "text-center", Fe),
										style: {
											fontSize: _e,
											lineHeight: ye,
											width: "100%",
											maxWidth: "100%",
											minWidth: Ru,
											color: Ce ? "var(--pc-color-transparent)" : void 0,
											caretColor: "var(--pc-color-text)",
											transform: `translateY(${Uu})`
										}
									}),
									Se && /* @__PURE__ */ Q("div", {
										"aria-hidden": "true",
										className: [
											"pointer-events-none",
											"absolute inset-0",
											"flex items-center",
											"font-medium tracking-tight",
											"transition-opacity duration-150 ease-out",
											"text-[var(--pc-color-text)]",
											"whitespace-nowrap",
											Pe,
											"justify-center text-center"
										].join(" "),
										style: {
											fontSize: _e,
											lineHeight: ye,
											width: "100%",
											maxWidth: "100%",
											minWidth: Ru,
											transform: `translateY(${Uu})`
										},
										children: V ? /* @__PURE__ */ Q(wu, {
											value: H,
											locales: ue?.locales,
											format: ue?.format,
											suffix: ue?.suffix,
											animated: v,
											transformTiming: Wu.transformTiming,
											spinTiming: Wu.spinTiming,
											opacityTiming: Wu.opacityTiming,
											respectMotionPreference: !0
										}) : oe
									})
								]
							})
						})
					})
				}),
				le && /* @__PURE__ */ $("div", {
					"data-slot": "amount-limit-meta",
					"data-amount-focus-excluded": "true",
					className: [
						"min-w-0 w-full grid-cols-2 gap-4 pt-1.5 text-xs",
						"text-[var(--pc-color-text-muted)] @md:text-sm",
						"grid cursor-default"
					].join(" "),
					children: [/* @__PURE__ */ Q("div", {
						"data-theme": Me,
						className: G("min-w-0 text-left", Me && "text-[var(--pc-color-text)]"),
						children: F ? /* @__PURE__ */ $("span", {
							className: "inline-flex min-w-0 items-center gap-1 truncate",
							children: [/* @__PURE__ */ $("span", { children: [Te, ":"] }), /* @__PURE__ */ Q("span", {
								className: "truncate",
								children: F
							})]
						}) : null
					}), /* @__PURE__ */ Q("div", {
						"data-theme": Me,
						className: G("min-w-0 text-right", Me && "text-[var(--pc-color-text)]"),
						children: I ? /* @__PURE__ */ $("span", {
							className: "inline-flex min-w-0 items-center justify-end gap-1 truncate",
							children: [/* @__PURE__ */ $("span", { children: [Ee, ":"] }), /* @__PURE__ */ Q("span", {
								className: "truncate",
								children: I
							})]
						}) : null
					})]
				}),
				ke && /* @__PURE__ */ $("div", {
					className: "flex flex-col items-center gap-2 text-center text-sm",
					children: [n && /* @__PURE__ */ Q("div", {
						className: "text-[var(--pc-color-text-muted)]",
						children: n
					}), Oe && /* @__PURE__ */ Q("div", {
						"data-theme": "danger",
						className: "h-5 text-[var(--pc-color-text)] truncate",
						"aria-live": "polite",
						"aria-atomic": "true",
						children: u ?? ""
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/components/PaymentTypePicker.tsx
function td({ animationStyle: e, bonusEvaluationContext: t, floating: n = !0 }) {
	let i = Mn(), a = Dt(), { uiComboView: o, uiComboView__PaymentTypes: s, onPaymentTypeSelected: c, uiAccountDelete: l } = ci(H), { translateKey: u } = ve(), { paymentTypesList: d } = Fr(), { getBonusCountForPaymentType: f, getAvailableBonusesForPaymentType: p } = En(), { selectedPaymentType: m, selectPaymentType: h, ensureDefaultSelection: g } = Wt(), { requestAccountDelete: _, actionConfirmationModal: v } = zn();
	J(() => {
		!o || !ft(s) || g(d);
	}, [
		g,
		d,
		o,
		s
	]);
	let y = d.length > 0, b = d.length > 1, x = o && ft(s) && b && !i, S = Y(() => Lr(d, m), [d, m]), C = Y(() => S ? Or(S) : null, [S]), w = Y(() => {
		if (!S) return null;
		let e = f(S, t), n = Qn(S);
		return e > 0 ? /* @__PURE__ */ Q(Dr, {
			count: e,
			domSlug: n
		}) : null;
	}, [
		t,
		f,
		S
	]), T = u("cta.choose_payment_type"), E = u("cta.interactive_prompt.choose_payment_type.title"), D = u("account.delete.title"), O = S?.name ?? "cta.choose_payment_type", k = S ? Qn(S) : O, A = q((e, t) => {
		if (i) return;
		let n = Lr(d, e);
		n && (h(Qn(n), { availableBonuses: p(n) }), c && c(n)), t();
	}, [
		p,
		i,
		c,
		d,
		h
	]), j = q((e) => !l || !e.accountId ? null : /* @__PURE__ */ Q(or, {
		size: "sm",
		variant: "neutral",
		appearance: "ghost",
		"aria-label": D,
		disabled: i,
		onClick: () => {
			_(e);
		},
		iconOnly: !0,
		label: D,
		leadingIcon: /* @__PURE__ */ Q(Ze, {})
	}), [
		D,
		i,
		_,
		l
	]);
	return /* @__PURE__ */ Q(hr, {
		domScope: "payment-type-picker",
		title: /* @__PURE__ */ Q(mr, { children: T }),
		triggerLabel: T,
		canOpen: x,
		shouldRender: o && ft(s) && y,
		animationStyle: e,
		floating: n,
		actionContent: v,
		triggerContent: ({ toggle: e }) => /* @__PURE__ */ Q(Dn, {
			domSlug: k,
			name: O,
			nameKeys: S?.nameKeys,
			logo: S?.logo,
			logoContent: S ? void 0 : $e("h-full w-full"),
			limits: S?.limits,
			fee: S?.fee,
			showMeta: !0,
			compact: !0,
			bonusLabel: w,
			title: C ?? void 0,
			interactive: !1,
			isDisabled: i,
			hoverMode: "group",
			themeSlot: "payment-type-picker",
			actions: x ? /* @__PURE__ */ Q(yn, { children: /* @__PURE__ */ Q(or, {
				variant: "neutral",
				appearance: "ghost",
				size: "sm",
				iconOnly: !0,
				showTooltip: !1,
				"aria-label": E,
				disabled: i,
				onClick: e,
				leadingIcon: /* @__PURE__ */ Q(ii, {}),
				label: E
			}) }) : null,
			actionStopsPropagation: !0
		}),
		children: ({ close: e, panelId: t }) => {
			let n = a.attrs("payment-type-picker-list");
			return /* @__PURE__ */ Q("div", {
				id: t,
				...n,
				className: G(n.className, "max-h-full overflow-y-auto px-3 pt-0 pb-3 pc-scrollbar-hidden"),
				children: /* @__PURE__ */ Q(ur, {
					paymentTypes: d,
					domScope: "picker",
					listStyle: r.LIST,
					compact: !0,
					stacked: !0,
					showMeta: !0,
					onSelect: (t) => {
						A(t, e);
					},
					interactionLocked: i,
					renderActions: j,
					itemVariant: "neutral",
					itemAppearance: "ghost",
					themeSlot: "payment-type-picker"
				})
			});
		}
	});
}
//#endregion
//#region src/routes/quick-payment/-amountInput.ts
var nd = (e, t) => t === "Backspace" ? e.length === 0 ? e : me(e.slice(0, -1)) : me(`${e}${t}`), rd = (e) => ({
	value: me(e),
	changeOrigin: "programmatic",
	hasExplicitSelection: !1
}), id = (e, t) => {
	let n = me(t.value), r = t.type === "user" ? "user" : "programmatic", i = t.type !== "sync-external" && !!t.markExplicitSelection;
	return e.value === n && e.changeOrigin === r && e.hasExplicitSelection === i ? e : {
		value: n,
		changeOrigin: r,
		hasExplicitSelection: i
	};
}, ad = ({ paymentTypeSupportsAmount: e, visiblePaymentSummaryAmount: t }) => e ? t : "", od = "pc-enter-drift-item", sd = "pc-enter-lift-item", cd = ei, ld = "min-h-[27cqw] @md:min-h-[27cqw]", ud = "min-h-[33.5cqw] [@container_(min-width:520px)]:min-h-[31.5cqw]", dd = "justify-center [@container_(max-height:620px)]:justify-start [@container_(max-height:620px)]:pt-3 [@container_(max-height:520px)]:pt-2", fd = "flex w-full flex-col items-center gap-2 @md:gap-3", pd = "pb-3 @md:pb-4", md = [
	"a",
	"button",
	"input",
	"select",
	"textarea",
	"[role=\"button\"]",
	"[contenteditable=\"true\"]"
].join(","), hd = ["[data-amount-focus-excluded=\"true\"]"].join(","), gd = "[@container_(max-width:620px)]:pl-1.5", _d = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.7fr)_auto_auto_minmax(0,1fr)] text-center", vd = "mx-auto grid min-w-0 w-full flex-1 grid-rows-[minmax(0,0.45fr)_auto_auto_minmax(0,1fr)] text-center", yd = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-4 [@container_(min-width:520px)]:gap-[1.125rem] text-center", bd = "mx-auto flex min-w-0 w-full flex-1 flex-col justify-center gap-3 text-center", xd = "flex min-w-0 w-full flex-1 flex-col items-center justify-center gap-3 text-center [@container_(max-width:500px)]:[&&]:items-stretch", Sd = 650, Cd = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(md);
	return !!(n && t.contains(n));
}, wd = (e, t) => {
	if (!(e instanceof Element)) return !1;
	let n = e.closest(hd);
	return !!(n && t.contains(n));
}, Td = E("/quick-payment/")({
	beforeLoad: ({ context: e }) => {
		let t = Ur(e);
		if (t !== "/quick-payment") throw re({
			to: t,
			replace: !0
		});
	},
	component: Ed
});
function Ed() {
	let { initialAmount: e, lockAmount: t, uiComboView: n, method: r, gotoPaymentType: i, bonuses: a, uiBonuses: o, uiBonusesStyle: s } = ci(H), c = Bn(), l = Y(() => Ur({
		uiComboView: n,
		lockAmount: t,
		gotoPaymentType: i,
		bonuses: a,
		uiBonuses: o,
		uiBonusesStyle: s,
		method: r
	}), [
		a,
		i,
		t,
		r,
		o,
		s,
		n
	]);
	return J(() => {
		l !== "/quick-payment" && c({
			to: l,
			replace: !0
		});
	}, [c, l]), l === "/quick-payment" ? /* @__PURE__ */ Q(Dd, {
		initialAmount: e,
		lockAmount: t
	}) : null;
}
function Dd({ initialAmount: e, lockAmount: t }) {
	let n = Dt(), { contentInset: r } = Hr(), a = Mn(), { isSubscribed: o, publishInactive: s } = Jr(), { method: c, uiSuggestAmounts: l, selectedPaymentType: u, uiComboView: d, uiComboView__PaymentTypes: f, uiComboView__PaymentForm: p, gotoPaymentType: m, bonuses: h, uiPaymentConfirmView: g, uiBonusesStyle: _, uiInteractivePrompts: v, uiFixedControls: y, hasAppliedGotoPaymentType: b, setCashierState: x, onPaymentTypeSelected: S, onPaymentTypeDeselected: C, currency: w, locale: T, currencyFormatOptions: E, resetFlowOnBack: D, user: O, uiShowFees: k, paymentFormDraft: A, selectedBonusCode: j } = ci(H), { translateKey: M } = ve(), ee = Bn(), N = X(null), te = X(!1), ne = X(!1), re = X(!1), ie = X(null), ae = X(null), [P, se] = di(id, e, rd), [ce, F] = Z(!1), [I, le] = Z(!1), [ue, de] = Z(null), [fe, pe] = Z({
		isComplete: !1,
		errorMessage: null,
		paymentTypeName: null
	}), L = P.value, R = X(L), z = X({
		amount: L,
		amountIsOutOfRange: !1,
		gotoPaymentType: m,
		selectedPaymentType: u,
		selectedPaymentTypeId: u,
		shouldShowBonusStep: !1,
		shouldSkipPaymentTypeSelection: !1,
		isPaymentTypesUnavailable: !1,
		isPaymentTypeSelectionMissing: !1,
		paymentTypeSupportsAmount: !0,
		method: c
	}), { getPaymentType: B, paymentTypesList: _e, isLoading: ye, isError: V } = Fr(), { getBonusCountForPaymentType: Ce, getBonusAvailabilityForPaymentType: we, getAvailableBonusesForPaymentType: Te } = En(), { selectPaymentType: De, clearPaymentSelection: Oe } = Wt();
	J(() => {
		R.current = L;
	}, [L]), J(() => {
		ne.current = !1, re.current = !1, se({
			type: "sync-external",
			value: e
		});
	}, [e]), J(() => {
		D && x((e) => ({
			...e,
			resetFlowOnBack: !1
		}));
	}, [D, x]), J(() => {
		te.current && (te.current = !1, N.current?.blur());
	}, [L]);
	let ke = Y(() => yt(l), [l]), U = Y(() => u ? B(u) : null, [B, u]), Me = U ? Qn(U) : null, Pe = Me ? `quick-payment-form:${Me}` : null, Fe = Me ?? u, Ie = _e.length > 0, Re = d && Xn(f), ze = d && ft(f), Be = d ? Kn({
		mode: f,
		paymentFormEnabled: p
	}) : null, Ue = Se(Be), We = Ee(Be), Ke = !!(Be && Ie), W = d && Re && U && U ? ge(U) : !0, qe = !!(U && ti(U)), Je = !!(U && (qe || Zr(U))), Xe = !!(d && Re && p && U && Je && (!Be || Ue)), Qe = Ue && Xe, $e = W, et = W ? L : "", tt = u && Un(A, {
		paymentTypeName: Fe ?? u,
		method: c,
		amount: et
	}) ? A : null, rt = Y(() => ({
		...tt?.values ?? {},
		amount: et
	}), [tt?.values, et]), it = W && Kt(L) && !!u && !U && ye && !V, at = !!m && !b, ot = Re, st = ot && ye && !V && !Ie && !u, ct = ot && !U, lt = d && !!u && (Re || at), ut = !Ie || ye || V, dt = U?.limits, pt = nt(c, O, U?.fee), mt = Ge(et, dt, { maxBoundary: pt }), ht = q((e) => !ge(e) || !Kt(L) ? !1 : Ge(L, e.limits, { maxBoundary: nt(c, O, e.fee) }).isOutOfRange, [
		L,
		c,
		O
	]), _t = Ne(et, dt, { maxBoundary: pt }), vt = _t?.key, [St, Ct] = Z(() => ({
		value: L,
		key: vt
	})), [Tt, Et] = Z(L), Ot = W && ce && P.changeOrigin === "user" && !!vt && St.key === void 0, kt = W && ce && P.changeOrigin === "user", At = St.value === L && St.key === vt, Mt = kt && Tt !== L, Nt = W ? Mt ? Tt : L : "", Ft = ad({
		livePaymentAmount: et,
		paymentTypeSupportsAmount: W,
		visiblePaymentSummaryAmount: Nt
	}), It = Ot && !At, Lt = vt;
	It && (Lt = void 0);
	let Vt = Lt ? _t : void 0, { currencyFormatter: Gt, formatCurrencyValue: qt, formatDisplayValue: Jt } = Sn(), { interactivePromptContent: Yt, pendingWithdrawalDrawer: Xt, attachSuccessFooter: Zt } = jl(), Qt = Y(() => be(Gt), [Gt]), en = gt(Vt, M, qt), tn = q((e) => !It && ht(e), [It, ht]), nn = W ? Kt(L) : !!U, rn = a || W && !Kt(L) || W && mt.isOutOfRange || ut || ct, an = M("cta.continue"), sn = M(c === i.PAYOUT ? "cta.payout" : "cta.payin"), cn = sn.toLocaleLowerCase(T), ln = Y(() => W ? wt(L) : null, [L, W]), fn = Y(() => wt(e), [e]), [gn, _n] = Z(null), yn = q((e) => {
		se({
			type: "sync-external",
			value: ni(e.nextAmount)
		}), _n(e);
	}, []), bn = !!(gn && !qr(_) && j === gn.bonus.code && ln === gn.nextAmount), xn = W ? t ? Kt(L) : Kt(L) && (P.hasExplicitSelection || bn) : !!U, Cn = Y(() => W ? wt(Nt) : null, [W, Nt]), wn = Y(() => W ? wt(Ft) : null, [W, Ft]), Tn = Y(() => ({ amount: wn }), [wn]), Dn = U ? Ce(U, { amount: ln }) : 0, On = U ? we(U, { amount: wn }).length : 0, kn = qr(_) && (U ? Dn > 0 : Le(h)), An = ze && (jt(_) || Ae(_)) && !!U && On > 0, jn = Ke && Ae(_), Nn = U ? jr({
		uiPaymentConfirmView: g,
		hasPendingStep: kn,
		hasVisibleInlineContent: !1,
		hasConfirmOnlyContent: (U.notifications?.length ?? 0) > 0
	}) : null, Pn = d && Re && !!U && !qe && Nn?.action === "submit", Fn = Pn && nn && !mt.isOutOfRange, In = U ? jr({
		uiPaymentConfirmView: g,
		hasPendingStep: kn,
		hasVisibleInlineContent: qe,
		hasConfirmOnlyContent: Zr(U)
	}) : null, Ln = d && Xe && !!U && In?.action === "submit", Rn = Ln && nn && !mt.isOutOfRange, zn = Pn || Ln, Vn = Xe || Fn || Rn, Hn = Vn ? Fe : null;
	J(() => {
		let e = W ? $t(L) : "", t = u ? {
			paymentTypeName: Fe ?? u,
			method: c,
			amount: e
		} : null;
		x((e) => {
			let n = e.comboViewFormDraft, r = e.paymentFormDraft;
			return n && (!t || !Un(n, t)) && (n = null), r && (!t || r.paymentTypeName !== t.paymentTypeName || r.method !== t.method ? r = null : r.amount !== t.amount && (r = {
				...r,
				amount: t.amount,
				values: W ? {
					...r.values,
					amount: t.amount
				} : r.values
			})), e.comboViewFormDraft === n && e.paymentFormDraft === r ? e : {
				...e,
				comboViewFormDraft: n,
				paymentFormDraft: r
			};
		});
	}, [
		L,
		Fe,
		c,
		W,
		u,
		x
	]), J(() => {
		let e = () => {
			ie.current &&= (clearTimeout(ie.current), null);
		};
		if (e(), Ot) ie.current = setTimeout(() => {
			ie.current = null, Ct({
				value: L,
				key: vt
			});
		}, Sd);
		else return Ct((e) => e.value === L && e.key === vt ? e : {
			value: L,
			key: vt
		}), () => {
			e();
		};
		return e;
	}, [
		L,
		vt,
		Ot
	]), J(() => {
		let e = () => {
			ae.current &&= (clearTimeout(ae.current), null);
		};
		if (e(), kt) ae.current = setTimeout(() => {
			ae.current = null, Et(L);
		}, Sd);
		else return Et((e) => e === L ? e : L), () => {
			e();
		};
		return e;
	}, [L, kt]), J(() => {
		z.current = {
			amount: L,
			amountIsOutOfRange: mt.isOutOfRange,
			gotoPaymentType: m,
			selectedPaymentType: u,
			selectedPaymentTypeId: Fe,
			shouldShowBonusStep: kn,
			shouldSkipPaymentTypeSelection: lt,
			isPaymentTypesUnavailable: ut,
			isPaymentTypeSelectionMissing: ct,
			paymentTypeSupportsAmount: W,
			method: c
		};
	}, [
		Fe,
		L,
		mt.isOutOfRange,
		m,
		u,
		kn,
		lt,
		ut,
		ct,
		W,
		c
	]);
	let Wn = q(() => {
		let { amount: e, amountIsOutOfRange: t, gotoPaymentType: n, selectedPaymentTypeId: r, shouldShowBonusStep: i, shouldSkipPaymentTypeSelection: a, isPaymentTypesUnavailable: o, isPaymentTypeSelectionMissing: s, paymentTypeSupportsAmount: c, method: l } = z.current;
		if (o || s) return;
		let u = c ? $t(e) : "";
		if (!(c && u.length === 0) && !(c && t)) {
			if (x((e) => {
				let t = e.initialAmount !== u, r = !!n && !e.hasAppliedGotoPaymentType, i = !!(e.paymentFormDraft || e.comboViewFormDraft);
				return !t && !r && !i ? e : {
					...e,
					...t ? { initialAmount: u } : {},
					paymentFormDraft: null,
					comboViewFormDraft: null,
					...r ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), a && r) {
				ee(i ? { to: "/bonus" } : {
					to: "/pt/$id",
					params: { id: r }
				});
				return;
			}
			ee({ to: `/pts/${l}` });
		}
	}, [ee, x]), Gn = q((e, t) => {
		if (!Fe) return;
		let n = Qn(e);
		if (n !== Fe || ut || ct || W && mt.isOutOfRange) return;
		let r = W ? $t(R.current) : "";
		if (!(W && r.length === 0)) {
			if (x((e) => {
				let i = !!m && !e.hasAppliedGotoPaymentType, a = W ? {
					...t.values,
					amount: r
				} : t.values;
				return {
					...e,
					initialAmount: r,
					comboViewFormDraft: {
						paymentTypeName: n,
						method: c,
						amount: r,
						values: a,
						hasHostedFields: t.hasHostedFields
					},
					...i ? { hasAppliedGotoPaymentType: !0 } : {}
				};
			}), kn) {
				ee({ to: "/bonus" });
				return;
			}
			ee({
				to: "/pt/$id",
				params: { id: n }
			});
		}
	}, [
		Fe,
		mt.isOutOfRange,
		m,
		ct,
		ut,
		c,
		ee,
		W,
		x,
		kn
	]), qn = q((e, t) => {
		if (!Fe) return;
		let n = Qn(e);
		if (n !== Fe) return;
		let r = W ? $t(R.current) : "", i = {
			paymentTypeName: n,
			method: c,
			amount: r,
			values: W ? {
				...t.values,
				amount: r
			} : t.values,
			hasHostedFields: t.hasHostedFields
		};
		x((e) => he(e.paymentFormDraft, i) ? e : {
			...e,
			paymentFormDraft: i
		});
	}, [
		Fe,
		c,
		W,
		x
	]), Jn = q((e) => {
		if (!(t || a)) {
			if (re.current) {
				re.current = !1, ne.current = !1, se({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			if (ne.current && e.length === 0) {
				se({
					type: "user",
					value: e,
					markExplicitSelection: !1
				});
				return;
			}
			ne.current = !1, re.current = !1, se({
				type: "user",
				value: e,
				markExplicitSelection: e.length > 0
			});
		}
	}, [
		t,
		a,
		se
	]), Yn = q((e) => {
		if (t || a) return;
		let n = me(e);
		ne.current = !1, re.current = !1, te.current = !0, se({
			type: "programmatic",
			value: n,
			markExplicitSelection: n.length > 0
		});
	}, [
		t,
		a,
		se
	]), Zn = ue?.submit, $n = !Vn || fe.paymentTypeName === Hn, er = Vn ? !$n || !Zn || rn || !Zn.visible || Zn.disabled : rn, nr = Vn && $n && Zn ? Zn.loading : !1, rr = Vn && $n && Zn ? Zn.onClick : Wn, ir = zn || Xe && In?.buttonLabel === "pay" ? sn : an, sr = Y(() => [/* @__PURE__ */ Q(or, {
		variant: "secondary",
		size: "xl",
		fullWidth: !0,
		disabled: er,
		loading: nr,
		onClick: rr,
		label: ir
	}, "cashier-amount-continue")], [
		ir,
		er,
		nr,
		rr
	]), cr = q((e) => {
		if (t || a) return;
		let n = e.key === "," ? "." : e.key, r = nd(R.current, n);
		ne.current = !1, re.current = !1, se({
			type: "user",
			value: r,
			markExplicitSelection: r.length > 0
		});
	}, [
		t,
		a,
		se
	]), dr = q((e) => {
		if (F(e), t || a || !d) {
			ne.current = !1, re.current = !1;
			return;
		}
		if (e) {
			Kt(R.current) && (ne.current = !0, re.current = !1);
			return;
		}
		if (ne.current && !Kt(R.current)) {
			re.current = !0;
			return;
		}
		ne.current = !1, re.current = !1;
	}, [
		a,
		t,
		d
	]), fr = q((e) => {
		let n = N.current;
		if (!n || t || a || wd(e.target, e.currentTarget) || Cd(e.target, e.currentTarget)) return;
		let r = n.ownerDocument.activeElement === n, i = e.target instanceof Element ? e.target.closest("[data-slot=\"quick-payment-amount-input-row\"]") : null, o = e.currentTarget.getAttribute("data-slot") === "quick-payment-amount-surface";
		if (!(!r && o)) {
			if (r && !i) {
				e.preventDefault(), e.stopPropagation(), n.blur();
				return;
			}
			e.preventDefault(), e.stopPropagation(), !r && n.focus();
		}
	}, [a, t]), pr = q((e) => {
		let t = e.currentTarget.scrollTop > 1;
		le((e) => e === t ? e : t);
	}, []);
	vn({
		inputRef: N,
		inputType: "decimal",
		onType: t || a || !$e ? void 0 : cr
	});
	let mr = M($e ? t ? "field.amount.label" : "cta.enter_amount" : "payment.enter_details"), hr = q((e) => Jt(e) || e, [Jt]), gr = Y(() => ({
		legacyTitle: mr,
		titleKey: $e ? "interactive_prompt.quick_payment.enter_amount.title" : "payment.interactive_prompt.enter_details",
		titleValues: { method: cn },
		bodyKey: "interactive_prompt.quick_payment.default.body",
		icon: /* @__PURE__ */ Q(Ht, {})
	}), [
		cn,
		$e,
		mr
	]), _r = Y(() => en ? {
		...gr,
		legacyTitle: en,
		titleKey: "interactive_prompt.quick_payment.amount_limit.title",
		preferLegacyTitle: !0,
		titleValues: void 0,
		bodyKey: "interactive_prompt.quick_payment.amount_limit.body",
		icon: /* @__PURE__ */ Q(Ze, {}),
		tone: "danger"
	} : null, [en, gr]), vr = Y(() => {
		if (!gn || !qr(_) || ln !== gn.nextAmount && fn !== gn.nextAmount || P.changeOrigin === "user" && ln !== gn.nextAmount || j !== gn.bonus.code) return null;
		let e = qt(gn.nextAmount);
		return {
			...gr,
			titleKey: "bonus.selected.title",
			titleValues: void 0,
			bodyKey: "bonus.selected.desc",
			bodyValues: {
				amount: e,
				method: cn
			},
			icon: /* @__PURE__ */ Q(Rt, {}),
			tone: "secondary",
			footer: /* @__PURE__ */ Q("p", {
				className: "text-sm font-medium leading-5 text-[var(--pc-color-success-text)]",
				children: bt(M("bonus.top_up.success"), { amount: qt(gn.addedAmount) })
			})
		};
	}, [
		ln,
		P.changeOrigin,
		gr,
		gn,
		qt,
		fn,
		cn,
		j,
		M,
		_
	]), yr = Y(() => xt({ translateKey: M }), [M]), br = Y(() => ot && (V || !Ie) ? {
		...gr,
		legacyTitle: M("payment.no_pts_found"),
		titleKey: "payment.no_pts_found",
		titleValues: void 0,
		bodyKey: void 0,
		icon: /* @__PURE__ */ Q(Ze, {}),
		tone: "danger"
	} : null, [
		gr,
		Ie,
		V,
		ot,
		M
	]), xr = !Vn || fe.paymentTypeName === Hn, Sr = !Vn || fe.isComplete, wr = !!(o && Pn && U && Pe), Tr = (!W || Kt(et)) && !mt.isOutOfRange && !fe.errorMessage, Dr = wr && U ? xe({
		amount: et,
		bonusCode: j,
		canSubmit: !er,
		complete: Tr && Sr,
		currency: w,
		dirty: et !== me(e),
		errors: Tr ? {} : { amount: "invalid" },
		fields: (U.fields ?? []).filter((e) => e.id === "amount"),
		hostedFields: null,
		initialValues: { amount: me(e) },
		method: c,
		paymentType: U,
		submitting: nr,
		valid: Tr,
		values: { amount: et }
	}) : null, Or = q(() => {
		Pe && s(Pe);
	}, [s, Pe]), kr = !ye && !it && xr, Ar = Y(() => {
		let e = gr, n = {
			...e,
			titleKey: t ? void 0 : e.titleKey
		};
		return it ? n : _r || (Vn && fe.errorMessage ? {
			...e,
			legacyTitle: fe.errorMessage,
			titleKey: void 0,
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ Q(Ze, {}),
			tone: "danger"
		} : vr || (xn ? ct ? {
			...e,
			...He({ translateKey: M }),
			titleValues: void 0
		} : Sr ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ Q(Pt, {})
		} : yr : e));
	}, [
		_r,
		gr,
		vr,
		fe.errorMessage,
		M,
		xn,
		it,
		ct,
		Sr,
		t,
		yr,
		Vn
	]), [Mr, Nr] = Z(null), Pr = Mr?.methodPromptLabel === cn ? Mr.content : null, Lr = Pr?.titleKey === "interactive_prompt.quick_payment.amount_limit.title", Rr = Mt || It, zr = _r ?? (Rr && !_r && !Lr ? Pr ?? Ar : Ar), Vr = Y(() => Zt(zr), [Zt, zr]), Ur = Y(() => ({
		...gr,
		legacyTitle: " ",
		titleKey: void 0,
		titleValues: void 0,
		preferLegacyTitle: !0,
		legacyBody: gr.bodyKey || gr.legacyBody ? " " : void 0,
		bodyKey: void 0,
		bodyValues: void 0,
		preferLegacyBody: !0,
		meta: void 0,
		iconSlotClassName: G(gr.iconSlotClassName, "opacity-0"),
		trailingVisual: void 0,
		footer: void 0,
		actions: void 0,
		actionsOffsetClassName: void 0
	}), [gr]);
	J(() => {
		!kr || Rr || br || Yt || Nr((e) => e?.methodPromptLabel === cn && e.content === Ar ? e : {
			methodPromptLabel: cn,
			content: Ar
		});
	}, [
		Rr,
		kr,
		cn,
		Ar,
		br,
		Yt
	]);
	let Wr = br ?? Ur;
	!br && kr && (Wr = Yt ? zr : Vr);
	let Gr = br ?? _r, Kr = !!(j && !qr(_) && !br && !_r && Wr.titleKey === "interactive_prompt.quick_payment.enter_amount.title"), Yr = Y(() => {
		if (!Kr) return null;
		let e = gr;
		return ct ? {
			...e,
			...He({ translateKey: M }),
			titleValues: void 0
		} : Sr ? {
			...e,
			titleKey: "interactive_prompt.quick_payment.ready.title",
			titleValues: void 0,
			bodyKey: void 0,
			icon: /* @__PURE__ */ Q(Pt, {})
		} : yr;
	}, [
		gr,
		Sr,
		ct,
		yr,
		Kr,
		M
	]), Xr = Kr ? Yr : Wr, Qr = gd, $r = $e && !t && ke.length > 0, ei = !$r, ri = !!(dt?.min || dt?.max), ii = ri ? ud : ld, ai = "gap-2", K = G("p-3", !ri && "[@container_(min-width:520px)]:py-3.5"), oi = ei && !ri, si = hn(c, w, O, {
		amount: Nt,
		fee: U?.fee,
		includeRemainingBalance: !0
	}), li = k ? zt(U?.fee, Cn ?? 0, {
		feeCurrencyFormatter: Qt,
		formatCurrencyValue: qt
	}) : null, ui = c === i.PAYIN && k ? Ve(U?.fee, Cn ?? 0, w) : null, pi = W ? c === i.PAYOUT ? Ut(si, [li]) : li || ui ? [li, ui].filter((e) => e !== null) : si : [], mi = pi.length > 0, hi = Ue, gi = mi && hi && (!W || Cn !== null && Cn > 0), _i = mi && !hi, vi = Y(() => pt !== null && Cn !== null && Cn > pt ? { "withdrawable-balance": "danger" } : {}, [pt, Cn]), yi = d && t && !!e && !$r && !ri, bi = !yi, xi = $e || $r, Si = Xe && !Qe && !!u, Ci = Ke, wi = xi || Si || Ci || !!ue, Ti = ze && Ie, Ei = Ti && y, Di = Ti && !y, Oi = d && ze && y && r > 0 ? r : 0, ki = Oi > 0 ? { paddingBottom: Oi } : void 0, Ai = d && y, ji = 2 + +!!Di + +!!Si + +!!Ci + +!!Ei, Mi = 2 + +!!Di, Ni = Mi + +!!Si, Pi = Ni + +!!Ci, Fi = en ? "danger" : "neutral", Ii = G(od, !ei && !ri && "self-center", ei && "row-start-2 self-end", ei && (oi ? "pb-1.5 @md:pb-2" : "pb-2")), Li = t ? void 0 : "cursor-pointer", Ri = G("min-w-0 w-full row-start-3 self-start", sd), zi = oi ? vd : _d, Bi = yd;
	ei ? Bi = zi : ri && (Bi = bd);
	let Vi = ei ? zi : xd, Hi = /* @__PURE__ */ Q(un, {
		className: "py-0 group-data-[stuck=true]:py-0 @md:group-data-[stuck=true]:py-2",
		title: mr,
		titleClassName: "text-lg leading-tight",
		titleWrapperClassName: "relative items-center"
	}), Ui = xi && _i, Wi = Ui ? "rounded-t-[var(--pc-radius-panel,var(--pc-radius-xl))] rounded-b-none" : "rounded-[var(--pc-radius-panel,var(--pc-radius-xl))]", Gi = Ui ? "border-x border-t border-[var(--pc-color-panel-border,var(--pc-color-transparent))]" : "border border-[var(--pc-color-panel-border,var(--pc-color-transparent))]", Ki = "bg-[var(--pc-color-panel-background,var(--pc-color-surface))] text-[var(--pc-color-panel-text,var(--pc-color-text))]", qi = n.attrs("quick-payment-summary-surface"), Ji = n.attrs("quick-payment-amount-surface"), Yi = _i ? /* @__PURE__ */ Q("div", {
		"data-slot": "quick-payment-summary-surface",
		"data-pc-slot": qi["data-pc-slot"],
		className: G(qi.className, "w-full", Ui && "-mt-2 rounded-t-none @md:-mt-3"),
		children: /* @__PURE__ */ Q(tr, {
			summaryFields: pi,
			rowVariants: vi,
			animateEntrance: !1,
			panelBorderEdges: Ui ? "without-top" : "all",
			className: Ui ? G("rounded-t-none border-t border-t-[var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))]") : void 0
		})
	}) : null, Xi = q((e, t) => {
		pe((n) => n.paymentTypeName === e && n.isComplete === t.isComplete && n.errorMessage === t.errorMessage ? n : {
			...t,
			paymentTypeName: e
		});
	}, []), Zi = Si && U ? /* @__PURE__ */ Q("div", {
		"data-slot": "quick-payment-form-stack",
		className: "flex w-full flex-col",
		style: Ye({
			index: Mi,
			total: ji,
			direction: "reverse"
		}),
		children: /* @__PURE__ */ Q(Cr, {
			paymentType: U,
			selectionId: Me ?? void 0,
			amountValue: et,
			hideAmountField: !0,
			onActionsChange: de,
			onPromptStateChange: Xi,
			onPreparedValues: Gn,
			onValuesChange: qn,
			submitMode: In?.submitMode,
			valueOverrides: rt,
			animateEntrance: !1
		}, Me ?? U.name)
	}) : null, Qi = An && U ? /* @__PURE__ */ Q(Ir, {
		placement: Ae(_) ? "payment-list" : "payment-form",
		paymentType: U,
		amount: Ft,
		onTopUpAccepted: yn
	}) : null, $i = jn ? /* @__PURE__ */ Q(Ir, {
		placement: "payment-list",
		paymentType: U,
		paymentTypes: _e,
		amount: Ft,
		onTopUpAccepted: yn
	}) : null, ea = Di ? /* @__PURE__ */ Q("div", {
		"data-slot": "quick-payment-payment-type-picker",
		className: G("w-full", Bt),
		children: /* @__PURE__ */ Q(td, {
			bonusEvaluationContext: Tn,
			floating: sr.length > 0 ? !1 : "adaptive",
			animationStyle: Ye({
				index: 2,
				total: ji,
				direction: "forward",
				baseDelayMs: 70,
				staggerMs: 36
			})
		})
	}) : null, ta = y || !Ue ? /* @__PURE__ */ Q(lr, {
		domScope: "quick-payment-actions",
		items: sr,
		fixed: y,
		enabled: !st
	}) : null, na = Fn && U ? /* @__PURE__ */ Q("div", {
		hidden: !0,
		"aria-hidden": "true",
		children: /* @__PURE__ */ Q(Cr, {
			paymentType: U,
			selectionId: Me ?? void 0,
			amountValue: et,
			hideAmountField: !0,
			onActionsChange: de,
			onPromptStateChange: Xi,
			onPreparedValues: Gn,
			onValuesChange: qn,
			submitMode: "submit",
			valueOverrides: rt,
			surfaceChrome: "plain",
			observePublicState: !1,
			onPaymentSubmitted: Or
		}, Me ?? U.name)
	}) : null, ra = q((e) => {
		let t = Qn(e), n = jt(_) && we(e, { amount: wn }).length > 0, r = !y, i = n && r, a = !mn(e);
		return /* @__PURE__ */ $("div", {
			"data-slot": "quick-payment-accordion-panel-stack",
			className: G("flex min-w-0 flex-col", a && "px-0.5", i ? "gap-2.5" : "gap-2"),
			children: [
				n && /* @__PURE__ */ Q(Ir, {
					paymentType: e,
					amount: Ft,
					onTopUpAccepted: yn
				}),
				/* @__PURE__ */ Q(Cr, {
					paymentType: e,
					selectionId: t,
					amountValue: et,
					hideAmountField: !0,
					onActionsChange: de,
					onPromptStateChange: Xi,
					onPreparedValues: Gn,
					onValuesChange: qn,
					valueOverrides: rt,
					surfaceChrome: "plain",
					fieldPanelMode: "none",
					submitMode: In?.submitMode,
					reserveTrailingActionSpace: r && !i,
					animateEntrance: !1
				}, t),
				r && /* @__PURE__ */ Q(Er, {
					domScope: "quick-payment-accordion-actions",
					items: sr,
					adaptive: !1
				})
			]
		});
	}, [
		rt,
		Gn,
		qn,
		Xi,
		yn,
		we,
		et,
		sr,
		In?.submitMode,
		y,
		_,
		Ft,
		wn
	]), ia = q((e) => gi ? /* @__PURE__ */ Q(ar, {
		summaryFields: pi,
		rowVariants: vi
	}) : null, [
		pi,
		gi,
		vi
	]), aa = q((e) => ti(e) || Zr(e) || !y || gi || jt(_) && we(e, { amount: wn }).length > 0, [
		we,
		gi,
		y,
		_,
		wn
	]), oa = q((e) => {
		if (a) return;
		let t = B(e);
		if (!t || ht(t)) return;
		let n = Qn(t);
		if (We && Fe === n && aa(t)) {
			Oe(), C?.(t);
			return;
		}
		De(n, { availableBonuses: Te(t, { amount: ln }) }), S?.(t);
	}, [
		Fe,
		ln,
		Oe,
		Te,
		B,
		aa,
		We,
		a,
		ht,
		C,
		S,
		De
	]), sa = Ci && Be ? /* @__PURE__ */ Q("div", {
		"data-slot": "quick-payment-payment-types",
		className: G("w-full", Bt),
		style: Ye({
			index: Ni,
			total: ji,
			direction: "forward",
			baseDelayMs: 70,
			staggerMs: 36
		}),
		children: Ue ? /* @__PURE__ */ Q(on, {
			paymentTypes: _e,
			domScope: "quick-payment",
			selectedPaymentType: u,
			onSelect: oa,
			renderPanel: ra,
			renderFooter: ia,
			hasPanel: aa,
			collapsible: We,
			isPaymentTypeDisabled: tn,
			interactionLocked: a,
			preserveDisabledSelection: !0,
			hoverMode: "none",
			showMeta: !0,
			bonusEvaluationContext: Tn
		}) : /* @__PURE__ */ Q(ur, {
			paymentTypes: _e,
			domScope: "quick-payment",
			listStyle: Be,
			selectable: !0,
			selectedPaymentType: u,
			onSelect: oa,
			isPaymentTypeDisabled: tn,
			interactionLocked: a,
			preserveDisabledSelection: !0,
			showMeta: !0,
			bonusEvaluationContext: Tn
		})
	}) : null, ca = $i || sa ? /* @__PURE__ */ $("div", {
		"data-slot": "quick-payment-payment-list-stack",
		className: "flex w-full flex-col gap-1.5",
		children: [$i, sa]
	}) : null;
	return /* @__PURE__ */ $(fi, { children: [wr && Pe && /* @__PURE__ */ Q(dn, {
		sourceId: Pe,
		state: Dr
	}), /* @__PURE__ */ Q(oe, {
		isLoading: st,
		loaderLabel: M("loading.payment_types"),
		loaderTestId: "cashier-payment-types-loading",
		children: /* @__PURE__ */ $("div", {
			id: n.id("route-quick-payment"),
			onScroll: pr,
			style: ki,
			className: G(n.className("route-quick-payment"), "relative flex min-h-full flex-1 flex-col overflow-y-auto overscroll-y-contain pc-scrollbar-hidden", y ? "pb-3" : "pb-4", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
			children: [
				/* @__PURE__ */ $("div", {
					className: G("flex flex-1 flex-col items-center", v ? dd : "justify-center"),
					children: [v ? /* @__PURE__ */ $("div", {
						className: fd,
						children: [/* @__PURE__ */ $("div", {
							"data-slot": "quick-payment-prompt-sticky-anchor",
							"data-pc-scroll-obstruction": "top",
							className: "relative sticky top-0 z-30 w-full bg-[var(--pc-color-surface)]",
							children: [/* @__PURE__ */ Q("div", {
								className: G("pointer-events-auto", cd, od),
								style: Ye({
									index: 0,
									total: ji,
									direction: "reverse",
									baseDelayMs: 12,
									staggerMs: 24
								}),
								children: /* @__PURE__ */ $("div", {
									className: "flex flex-col gap-3",
									children: [Yt && /* @__PURE__ */ Q(je, {
										content: Yt,
										className: Qr
									}), /* @__PURE__ */ Q(je, {
										content: Xr,
										className: Qr
									})]
								})
							}), /* @__PURE__ */ Q("div", {
								"aria-hidden": "true",
								"data-slot": "quick-payment-prompt-sticky-fade",
								"data-pc-scroll-obstruction-extent": "true",
								style: pn,
								className: G("pointer-events-none absolute inset-x-0 top-full", I ? "opacity-100" : "opacity-0")
							})]
						}), wi && /* @__PURE__ */ Q("div", {
							className: G(cd, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ $(tl, {
								"data-slot": "quick-payment-surface-stack",
								className: Ai ? pd : void 0,
								children: [
									xi && /* @__PURE__ */ $("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ji["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: fr,
										className: G(Ji.className, "flex flex-col", Wi, Gi, ai, Ki, K, ii),
										children: [/* @__PURE__ */ $("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Bi,
											children: [
												/* @__PURE__ */ Q("div", {
													"data-slot": "quick-payment-amount-title-row",
													"data-theme": Fi,
													className: G(Ii, Li),
													onMouseDown: fr,
													style: Ye({
														index: 0,
														total: ji,
														direction: "reverse",
														baseDelayMs: 12,
														staggerMs: 24
													}),
													children: Hi
												}),
												/* @__PURE__ */ Q("div", {
													"data-slot": "quick-payment-amount-input-row",
													className: ei ? G(Ri, Li) : G("w-full", sd, Li),
													onMouseDown: fr,
													style: Ye({
														index: 0,
														total: ji,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ Q(ed, {
														inputRef: N,
														value: L,
														onChange: Jn,
														onSubmit: rr,
														onFocusChange: dr,
														canSubmit: !er,
														disabled: t || a,
														invalid: !!en,
														limits: dt,
														showMeta: !1,
														showDivider: bi,
														reserveEmptyLimitMetaSpace: !yi,
														align: "right",
														currency: w,
														locale: T,
														formatOptions: E,
														clearOnFocus: d && !t && !a,
														animateValueChange: P.changeOrigin === "programmatic"
													})
												}),
												$r && !ri && /* @__PURE__ */ Q(Br, {
													suggestions: ke,
													activeSuggestion: L,
													onSelect: Yn,
													disabled: a,
													formatLabel: hr,
													amountLimits: dt,
													size: "xs",
													className: G("order-3", "mt-1")
												})
											]
										}), $r && ri && /* @__PURE__ */ Q(Br, {
											suggestions: ke,
											activeSuggestion: L,
											onSelect: Yn,
											disabled: a,
											formatLabel: hr,
											amountLimits: dt,
											size: "xs",
											className: G("order-3", "[@container_(min-width:520px)]:-mt-0.5")
										})]
									}),
									Ui && Yi,
									!Ui && !y && Yi,
									ea,
									Qi,
									Zi,
									ca,
									!Ui && y && Yi,
									ta
								]
							})
						})]
					}) : /* @__PURE__ */ $("div", {
						className: "flex w-full flex-col items-center gap-4",
						children: [Gr && /* @__PURE__ */ Q("div", {
							className: G("pointer-events-auto", cd, od),
							style: Ye({
								index: 1,
								total: ji,
								direction: "reverse"
							}),
							children: /* @__PURE__ */ Q(je, {
								content: Gr,
								forceVisible: !0
							})
						}), wi && /* @__PURE__ */ Q("div", {
							className: G(cd, "[container-type:inline-size]", "pc-enter-rise"),
							children: /* @__PURE__ */ $(tl, {
								"data-slot": "quick-payment-surface-stack",
								className: Ai ? pd : void 0,
								children: [
									xi && /* @__PURE__ */ $("div", {
										"data-slot": "quick-payment-amount-surface",
										"data-pc-slot": Ji["data-pc-slot"],
										"data-theme": "neutral",
										onMouseDown: fr,
										className: G(Ji.className, "flex flex-col", Wi, Gi, ai, Ki, "p-4", ii, "@md:px-5 @md:py-4 @xl:py-5"),
										children: [/* @__PURE__ */ $("div", {
											"data-slot": "quick-payment-amount-layout",
											className: Vi,
											children: [/* @__PURE__ */ Q("div", {
												"data-slot": "quick-payment-amount-title-row",
												"data-theme": Fi,
												className: G(Ii, Li),
												onMouseDown: fr,
												style: Ye({
													index: 0,
													total: ji,
													direction: "reverse",
													baseDelayMs: 12,
													staggerMs: 24
												}),
												children: Hi
											}), /* @__PURE__ */ Q("div", {
												"data-slot": "quick-payment-amount-input-row",
												className: G(ei ? "min-w-0 w-full row-start-3 self-start" : "min-w-0 w-full flex-1", Li),
												onMouseDown: fr,
												children: /* @__PURE__ */ Q("div", {
													className: G("w-full", sd),
													style: Ye({
														index: 0,
														total: ji,
														direction: "reverse",
														baseDelayMs: 58,
														staggerMs: 38
													}),
													children: /* @__PURE__ */ Q(ed, {
														inputRef: N,
														value: L,
														onChange: Jn,
														onSubmit: rr,
														onFocusChange: dr,
														canSubmit: !er,
														disabled: t || a,
														invalid: !!en,
														limits: dt,
														showMeta: !1,
														showDivider: bi,
														reserveEmptyLimitMetaSpace: !yi,
														align: "right",
														currency: w,
														locale: T,
														formatOptions: E,
														clearOnFocus: d && !t && !a,
														animateValueChange: P.changeOrigin === "programmatic"
													})
												})
											})]
										}), $r && /* @__PURE__ */ Q(Br, {
											suggestions: ke,
											activeSuggestion: L,
											onSelect: Yn,
											disabled: a,
											formatLabel: hr,
											amountLimits: dt,
											size: "xs",
											className: G(!ri && "mt-3 @md:mt-0", "order-2")
										})]
									}),
									Ui && Yi,
									!Ui && !y && Yi,
									ea,
									Qi,
									Zi,
									ca,
									!Ui && y && Yi,
									ta
								]
							})
						})]
					}), Ei && /* @__PURE__ */ Q("div", {
						className: "flex w-full justify-center",
						children: /* @__PURE__ */ Q("div", {
							className: cd,
							children: /* @__PURE__ */ Q(td, {
								bonusEvaluationContext: Tn,
								animationStyle: Ye({
									index: Pi,
									total: ji,
									direction: "forward",
									baseDelayMs: 70,
									staggerMs: 36
								})
							})
						})
					})]
				}),
				na,
				Xt
			]
		})
	})] });
}
//#endregion
//#region src/components/SummaryActions.tsx
var Od = G("min-h-12 w-full whitespace-normal text-center leading-tight", "break-words [overflow-wrap:anywhere]"), kd = G("inline-flex min-h-10 w-full items-center justify-center px-2 text-center", "text-sm font-medium leading-snug text-[var(--pc-color-text-muted)]", "break-words [overflow-wrap:anywhere]"), Ad = G(kd, "underline decoration-[var(--pc-color-text-muted)] underline-offset-4", "transition-colors hover:text-[var(--pc-color-text)]", "focus-visible:outline-none focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-button-focus-ring,var(--pc-color-text))]"), jd = G("pc-ui__button", "relative inline-flex items-center justify-center whitespace-nowrap", "cursor-pointer transition-colors duration-200 ease-out", "focus-visible:outline-none focus-visible:ring-2", "focus-visible:ring-[var(--pc-color-button-focus-ring,var(--pc-color-text))]", "data-[focus-visible=true]:outline-none data-[focus-visible=true]:ring-2", "data-[focus-visible=true]:ring-[var(--pc-color-button-focus-ring,var(--pc-color-text))]", "[--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-surface))]", "[--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-text))]", "[--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))]", "[--pc-color-control-outline:var(--pc-color-button-outline,var(--pc-color-transparent))]", "[--pc-color-control-background-hover:var(--pc-color-button-background-hover,var(--pc-color-surface-weaker))]", "[--pc-color-control-background-active:var(--pc-color-button-background-active,var(--pc-color-surface-strongest))]", "bg-clip-padding border", "border-[var(--pc-color-control-border,var(--pc-color-control-background,var(--pc-color-transparent)))]", "outline outline-1 outline-[var(--pc-color-control-outline,var(--pc-color-transparent))]", "rounded-[var(--pc-radius-3xl)] font-medium", "bg-[var(--pc-color-control-background,var(--pc-color-surface))]", "text-[var(--pc-color-control-text,var(--pc-color-text))]", "hover:bg-[var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))]", "active:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "active:text-[var(--pc-color-control-text,var(--pc-color-text))]", "data-[active=true]:bg-[var(--pc-color-control-background-active,var(--pc-color-surface-strongest))]", "data-[active=true]:text-[var(--pc-color-control-text,var(--pc-color-text))]"), Md = G(jd, "px-6 py-3 text-lg", Od), Nd = "relative z-[1] inline-flex items-center justify-center gap-2 opacity-100", Pd = (e) => e.themeVariant, Fd = (e) => e.layout === "row" ? { gridTemplateColumns: `repeat(${e.items.length.toString()}, minmax(0, 1fr))` } : void 0, Id = ({ action: e, children: t, className: n, contentClassName: r, dataTheme: i }) => /* @__PURE__ */ Q("a", {
	href: e.href,
	target: e.target,
	rel: e.rel,
	referrerPolicy: e.referrerPolicy,
	download: e.download,
	className: n,
	"data-theme": i,
	"data-pc-appearance": i ? "solid" : void 0,
	children: r ? /* @__PURE__ */ Q("span", {
		className: r,
		children: t
	}) : t
});
function Ld({ action: e, onRestart: t }) {
	let { translateKey: n } = ve(), r = n(e.label);
	return e.type === o.TEXT ? e.action && e.action !== "restart" ? /* @__PURE__ */ Q(Id, {
		action: e.action,
		className: Ad,
		children: r
	}) : /* @__PURE__ */ Q("span", {
		className: kd,
		children: r
	}) : e.action && e.action !== "restart" ? /* @__PURE__ */ Q(Id, {
		action: e.action,
		className: Md,
		contentClassName: Nd,
		dataTheme: Pd(e),
		children: r
	}) : /* @__PURE__ */ Q(or, {
		variant: e.themeVariant,
		size: "xl",
		fullWidth: !0,
		className: Od,
		onClick: t,
		label: r
	});
}
function Rd({ actions: e, onRestart: t }) {
	let n = Dt();
	return !e || e.items.length === 0 ? null : /* @__PURE__ */ Q("div", {
		"data-testid": "cashier-summary-actions",
		"data-slot": "summary-actions",
		"data-layout": e.layout,
		className: G(n.className("summary-actions"), "grid w-full gap-3", e.layout === "stack" && "grid-cols-1"),
		style: Fd(e),
		children: e.items.map((e) => /* @__PURE__ */ Q("div", {
			"data-slot": "summary-action",
			"data-summary-action-id": e.id,
			className: G(n.className("summary-action", { slug: e.id }), "flex min-w-0 justify-center"),
			children: /* @__PURE__ */ Q(Ld, {
				action: e,
				onRestart: t
			})
		}, e.id))
	});
}
//#endregion
//#region src/utils/paymentSummaryTheme.ts
var zd = /* @__PURE__ */ new Set(["successful"]), Bd = /* @__PURE__ */ new Set([
	"failed",
	"cancelled",
	"error"
]), Vd = /* @__PURE__ */ new Set(["pending", "processing"]), Hd = /* @__PURE__ */ new Set(["inconsistent"]), Ud = (e) => e?.toLowerCase(), Wd = (e) => {
	let t = Ud(e);
	return t ? zd.has(t) ? "success" : Bd.has(t) ? "danger" : Vd.has(t) ? "info" : (Hd.has(t), "neutral") : "neutral";
}, Gd = {
	layout: "row",
	items: [{
		id: "restart",
		type: o.BUTTON,
		label: "cta.back",
		themeVariant: "neutral",
		action: "restart"
	}]
}, Kd = /* @__PURE__ */ new Set([
	"https:",
	"http:",
	"mailto:",
	"tel:"
]), qd = (e) => {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	return t.length > 0 ? t : null;
}, Jd = (e, t) => {
	U.warn(e, "Cashier summaryActions ignored:", t);
}, Yd = (e) => {
	let t = e.trim();
	if (!t) return !1;
	try {
		let e = new URL(t, "https://cashier.local");
		return Kd.has(e.protocol.toLowerCase());
	} catch {
		return !1;
	}
}, Xd = (e, t) => {
	let n = new Set(e?.split(/\s+/).map((e) => e.trim()).filter(Boolean) ?? []);
	return t === "_blank" && (n.add("noopener"), n.add("noreferrer")), n.size > 0 ? Array.from(n).join(" ") : void 0;
}, Zd = (e) => Yd(e.href) ? {
	href: e.href,
	...e.target === void 0 ? {} : { target: e.target },
	...Xd(e.rel, e.target) === void 0 ? {} : { rel: Xd(e.rel, e.target) },
	...e.referrerPolicy === void 0 ? {} : { referrerPolicy: e.referrerPolicy },
	...e.download === void 0 ? {} : { download: e.download }
} : null, Qd = (e) => !!e && typeof e == "object" && "href" in e, $d = (e, t) => {
	if (e.paymentStatuses === void 0) return !0;
	let n = qd(t);
	return n ? e.paymentStatuses.map((e) => qd(e)).includes(n) : !1;
}, ef = (e, t) => {
	let n = e.type === o.TEXT ? o.TEXT : o.BUTTON;
	if (e.paymentStatuses?.length === 0) return Jd(t.debug, `action "${e.id}" has empty paymentStatuses`), null;
	if (!$d(e, t.paymentStatus)) return null;
	if (n === o.BUTTON && e.action === void 0) return Jd(t.debug, `button action "${e.id}" is missing action`), null;
	let r;
	if (e.action === "restart") r = "restart";
	else if (Qd(e.action) && (r = Zd(e.action) ?? void 0, !r)) return Jd(t.debug, `action "${e.id}" has an unsafe URL`), null;
	return {
		id: e.id,
		type: n,
		label: e.label,
		themeVariant: e.themeVariant ?? "neutral",
		...r === void 0 ? {} : { action: r }
	};
}, tf = (e) => e.layout ? e.layout : e.items.some((e) => e.type === o.TEXT) || e.items.filter((e) => e.type !== o.TEXT).length > 2 ? "stack" : "row", nf = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = [];
	return e.items.forEach((e) => {
		if (n.has(e.id)) {
			Jd(t.debug, `duplicate action id "${e.id}"`);
			return;
		}
		n.add(e.id);
		let i = ef(e, t);
		i && r.push(i);
	}), r.length === 0 ? null : {
		layout: tf({
			...e,
			items: r
		}),
		items: r
	};
}, rf = (e, t = {}) => nf(e ?? Gd, t), af = /* @__PURE__ */ new Set(["successful"]), of = /* @__PURE__ */ new Set([
	"failed",
	"cancelled",
	"error"
]), sf = {
	baseDelayMs: 200,
	maxAdditionalDelayMs: 360,
	distribution: "linear"
}, cf = "[@container_(max-width:620px)]:pl-1.5", lf = (e) => e?.toLowerCase(), uf = (e, t) => e.find((e) => e.id === t)?.value, df = (e) => {
	if (Cn(e)) return $t(String(e.value)) || null;
	if (typeof e == "string") return $t(e) || null;
	if (e && typeof e == "object" && "value" in e) {
		let t = e.value;
		if (typeof t == "string" || typeof t == "number") return $t(String(t)) || null;
	}
	return null;
}, ff = (e, t) => {
	let n = null, r = -Infinity;
	for (let i of e) {
		if (t && i === t) continue;
		let e = i.lastSuccessful;
		if (!(e instanceof Date)) continue;
		let a = e.getTime();
		Number.isFinite(a) && a > r && (r = a, n = i);
	}
	return n;
}, pf = (e) => {
	let t = lf(e);
	return t ? af.has(t) ? "successful" : of.has(t) ? "failed" : "information" : "information";
}, mf = E("/summary/$id")({
	validateSearch: (e) => ({ merchantId: typeof e.merchantId == "string" ? e.merchantId : "" }),
	beforeLoad: ({ context: e, params: t, search: n }) => {
		let { uiComboView: r, lockAmount: i, method: a } = e, o = an({
			uiComboView: r,
			lockAmount: i,
			method: a
		}), s = typeof n.merchantId == "string" ? n.merchantId : "", c = wr();
		if (!(c && c.paymentId === t.id && c.merchantId === s)) throw re({
			to: o,
			replace: !0
		});
	},
	loaderDeps: ({ search: e }) => ({ merchantId: e.merchantId }),
	loader: async ({ params: e, deps: t }) => {
		let { id: n } = e, { merchantId: r } = t, { error: i, data: a } = await Vt({
			path: { paymentId: n },
			query: { merchantId: r }
		});
		if (i) throw Error();
		return a;
	},
	component: vf,
	pendingComponent: hf
});
function hf() {
	let { translateKey: e } = ve();
	return /* @__PURE__ */ Q(Hn, {
		title: e("payment.finalizing"),
		stickyHeader: !0
	});
}
function gf({ summaryFields: e }) {
	let t = Bn(), { translateKey: n, translateKeys: r } = ve(), i = Dt(), { setCashierState: a, selectedBonusCode: o, selectedPaymentType: s, uiBonusesAvailable: c, uiBonusesStyle: l } = ci(H), { paymentTypesList: u } = Fr(), { getAvailableBonusesForPaymentType: d, getBonusCountForPaymentType: f } = En(), p = X(o ?? null), m = Y(() => {
		let t = uf(e, "paymentType");
		return typeof t == "string" ? t : null;
	}, [e]), h = Y(() => Lr(u, s) ?? Lr(u, m), [
		m,
		u,
		s
	]), g = Y(() => df(uf(e, "amount")), [e]), _ = Y(() => g ? wt(g) : null, [g]), v = Y(() => _ === null ? void 0 : { amount: _ }, [_]), y = Y(() => ff(u, h), [h, u]), b = n("cta.try_another_payment_type"), x = Y(() => {
		if (!y || !c) return null;
		let e = f(y, v), t = Qn(y);
		return e > 0 ? /* @__PURE__ */ Q(Dr, {
			count: e,
			domSlug: t
		}) : null;
	}, [
		v,
		f,
		y,
		c
	]), S = q(() => {
		if (!y) return;
		let e = Qn(y), n = d(y, v), r = p.current, i = !!(r && n.find((e) => e.code === r)), o = qr(l) && n.length > 0 && (!i || n.length > 1);
		if (a((t) => {
			let n = {
				...t,
				selectedPaymentType: e,
				selectedBonusCode: i ? r : null,
				paymentFormDraft: null,
				comboViewFormDraft: null,
				resetFlowOnBack: !0
			};
			return g && (n.initialAmount = g), n;
		}), o) {
			t({
				to: "/bonus",
				replace: !0
			});
			return;
		}
		t({
			to: "/pt/$id",
			params: { id: e },
			replace: !0
		});
	}, [
		g,
		v,
		d,
		t,
		a,
		y,
		l
	]), C = q((e) => {
		(e.key === "Enter" || e.key === " ") && (e.preventDefault(), S());
	}, [S]);
	if (!y) return null;
	let w = Or(y), T = w ? n(w) : r(y.nameKeys ?? y.name), E = Qn(y), D = n("aria.logo");
	return /* @__PURE__ */ Q("div", {
		className: G("w-full", cf),
		children: /* @__PURE__ */ Q("div", {
			role: "button",
			tabIndex: 0,
			"data-testid": "suggested-payment-type",
			"data-name": y.name,
			onClick: S,
			onKeyDown: C,
			className: G("block w-full cursor-pointer rounded-[calc(var(--pc-radius-xl)+0.45rem)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pc-color-text)]"),
			children: /* @__PURE__ */ Q(ct, {
				className: G("[&_[data-pc-appearance=solid]]:transition-[background-color]", "[&_[data-pc-appearance=solid]]:duration-[250ms]", "[&_[data-pc-appearance=solid]]:ease-out", "[&_[data-slot=interactive-prompt-tail]]:transition-colors", "[&_[data-slot=interactive-prompt-tail]]:duration-[250ms]", "[&_[data-slot=interactive-prompt-tail]]:ease-out", "hover:[&_[data-pc-appearance=solid]]:[background:var(--pc-color-surface-weaker)]", "hover:[&_[data-slot=interactive-prompt-tail]]:text-[var(--pc-color-surface-weaker)]", "active:[&_[data-pc-appearance=solid]]:[background:var(--pc-color-surface-weaker)]", "active:[&_[data-slot=interactive-prompt-tail]]:text-[var(--pc-color-surface-weaker)]"),
				title: b,
				icon: /* @__PURE__ */ Q(_t, {
					id: i.id("payment-type-logo", { slug: E }),
					logo: y.logo,
					alt: `${T} ${D}`,
					seed: y.name,
					rootAttributes: i.attrs("payment-type-logo", { slug: E }),
					className: G(i.className("payment-type-logo", { slug: E }), "!h-full !w-full [&_img]:!h-full [&_img]:!w-full [&_svg]:!h-full [&_svg]:!w-full"),
					contentClassName: i.className("payment-type-logo-content", { slug: E })
				}),
				body: /* @__PURE__ */ $("div", {
					className: "flex min-w-0 flex-col gap-0.5",
					children: [/* @__PURE__ */ Q("h3", {
						className: "w-full truncate text-base font-medium leading-snug text-[var(--pc-color-text)] @sm:text-md @md:text-lg @2xl:text-xl",
						children: T
					}), /* @__PURE__ */ Q(Zt, {
						limits: y.limits,
						fee: y.fee,
						extraItems: x ? [{
							id: "bonus",
							value: x
						}] : void 0,
						align: "left",
						rowGap: "normal"
					})]
				})
			})
		})
	});
}
function _f({ summaryFields: e, paymentStatus: t }) {
	let n = Dt(), { bonuses: r, initialAmount: i, selectedBonusCode: a } = ci(H), { translateKey: o, hasTranslation: s } = ve(), { formatCurrencyValue: c } = Sn(), l = Y(() => df(uf(e, "amount")), [e]), u = Y(() => {
		if (l) return wt(l);
		let e = $t(i);
		return e ? wt(e) : null;
	}, [i, l]), d = Y(() => {
		let e = wr()?.selectedBonusCode, t = a ?? e ?? null;
		return t ? Sr(r).find((e) => e.code === t) ?? null : null;
	}, [r, a]), f = Y(() => d ? Xt(d, {
		amount: u,
		paymentStatus: t,
		translateKey: o,
		hasTranslation: s,
		formatAmount: c
	}) : [], [
		u,
		c,
		s,
		t,
		d,
		o
	]);
	if (f.length === 0) return null;
	let p = n.attrs("bonus-summary-awards");
	return /* @__PURE__ */ Q("section", {
		id: n.id("bonus-summary-awards"),
		"data-testid": "cashier-bonus-summary-awards",
		"data-pc-slot": p["data-pc-slot"],
		"data-theme": "secondary-tinted",
		className: G(p.className, "mx-auto flex w-[var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,fit-content))] max-w-[var(--pc-size-bonus-summary-max-width,var(--pc-bonus-summary-max-width,100%))] flex-col items-center gap-1", "rounded-[var(--pc-radius-bonus-summary,var(--pc-bonus-summary-radius,var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))))]", "border-[length:var(--pc-size-bonus-summary-border-width,var(--pc-bonus-summary-border-width,1px))] border-[var(--pc-color-bonus-summary-border,var(--pc-bonus-summary-border-colour,var(--pc-color-text)))]", "[background:var(--pc-color-bonus-summary-background,var(--pc-bonus-summary-surface-colour,var(--pc-color-surface)))]", "px-[var(--pc-space-bonus-summary-padding-x,var(--pc-bonus-summary-padding-x,1rem))] py-[var(--pc-space-bonus-summary-padding-y,var(--pc-bonus-summary-padding-y,0.625rem))]", "text-center text-[length:var(--pc-font-size-bonus-summary-mobile,var(--pc-bonus-summary-mobile-font-size,1rem))] @sm:text-[length:var(--pc-font-size-bonus-summary,var(--pc-bonus-summary-font-size,1.125rem))] text-[var(--pc-color-bonus-summary-text,var(--pc-bonus-summary-colour,var(--pc-color-text)))]"),
		children: f.map((e) => {
			let t = n.attrs("bonus-summary-award", { slug: e.id });
			return /* @__PURE__ */ Q("p", {
				"data-pc-slot": t["data-pc-slot"],
				"data-pc-slug": t["data-pc-slug"],
				className: G(t.className, "m-0 max-w-full break-words font-medium leading-snug"),
				children: e.text
			}, e.id);
		})
	});
}
function vf() {
	let t = Dt(), n = mf.useLoaderData(), { id: r } = mf.useParams(), { paymentStatus: i, messages: o, displayMessages: s, fields: c } = n, { merchantId: l, uiComboView: u, lockAmount: d, method: f, uiSuggestAction: p, uiFixedControls: m, summaryActions: h, debug: g, onPaymentSummary: _ } = ci(H), v = R(), { translateKey: y, translateKeys: b } = ve(), x = X(_), S = an({
		uiComboView: u,
		lockAmount: d,
		method: f
	}), C = y("cta.back"), w = pf(i), T = Wd(i), { handleBack: E } = Ar({
		defaultRoute: S,
		useHistory: !1,
		replace: !0,
		resetHistory: !0
	}), D = Y(() => [/* @__PURE__ */ Q(or, {
		variant: "neutral",
		size: "xl",
		fullWidth: !0,
		onClick: E,
		label: C
	}, "cashier-summary-back")], [C, E]), O = Y(() => h === void 0 ? null : rf(h, {
		debug: g,
		paymentStatus: i
	}), [
		g,
		i,
		h
	]), k = Y(() => O ? [/* @__PURE__ */ Q(Rd, {
		actions: O,
		onRestart: E
	}, "cashier-summary-actions")] : [], [O, E]), A = h === void 0 ? D : k;
	J(() => {
		v();
	}, [v]), J(() => {
		x.current = _;
	}, [_]), J(() => {
		x.current?.({
			merchantId: l,
			paymentId: r,
			summary: n
		});
	}, [
		l,
		r,
		n
	]), J(() => () => {
		sr(), wn();
	}, []);
	let j = y(i), M = (s ? s.map((e) => b(e.keys)) : o?.map((e) => y(e)))?.filter(Boolean), ee = i ? j : void 0, N = M?.length ? /* @__PURE__ */ Q("div", {
		className: "flex flex-col gap-1",
		children: M.map((e, t) => /* @__PURE__ */ Q("p", {
			className: "m-0",
			children: e
		}, `${e}-${String(t)}`))
	}) : void 0, te = c ?? [], ne = lf(i), re = !!(ne && of.has(ne) && p.includes(a.ON_PAYMENT_FAILURE_LAST_SUCCESSFUL));
	return /* @__PURE__ */ $(Hn, {
		id: t.id("route-summary"),
		className: t.className("route-summary"),
		contentClassName: G(t.className("route-summary-content"), Pe, "gap-[var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))]"),
		stickyHeader: !0,
		header: /* @__PURE__ */ Q(Re, {
			title: ee,
			subtitle: N,
			theme: T,
			className: "pb-[var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))]",
			subtitleClassName: "mb-0",
			leading: /* @__PURE__ */ Q(e, {
				className: It,
				name: w,
				backgroundColor: "var(--pc-color-surface)",
				foregroundColor: "var(--pc-color-text)"
			})
		}),
		children: [
			/* @__PURE__ */ Q(_f, {
				summaryFields: te,
				paymentStatus: i
			}),
			re && /* @__PURE__ */ Q(gf, { summaryFields: te }),
			/* @__PURE__ */ $("div", {
				"data-slot": "route-summary-action-stack",
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ Q(tr, {
					summaryFields: te,
					animateEntrance: !0,
					animationDirection: "forward",
					animationStyleOptions: sf
				}), /* @__PURE__ */ Q(lr, {
					domScope: "route-summary-actions",
					items: A,
					fixed: m
				})]
			})
		]
	});
}
//#endregion
//#region src/routeTree.gen.ts
var yf = bs.update({
	id: "/",
	path: "/",
	getParentRoute: () => vs
}), bf = ws.update({
	id: "/bonus/",
	path: "/bonus/",
	getParentRoute: () => vs
}), xf = Qc.update({
	id: "/provider/",
	path: "/provider/",
	getParentRoute: () => vs
}), Sf = Fl.update({
	id: "/pt/$id",
	path: "/pt/$id",
	getParentRoute: () => vs
}), Cf = ce.update({
	id: "/pts/$method",
	path: "/pts/$method",
	getParentRoute: () => vs
}), wf = Td.update({
	id: "/quick-payment/",
	path: "/quick-payment/",
	getParentRoute: () => vs
}), Tf = {
	IndexRoute: yf,
	PtIdRoute: Sf,
	PtsMethodRoute: Cf,
	SummaryIdRoute: mf.update({
		id: "/summary/$id",
		path: "/summary/$id",
		getParentRoute: () => vs
	}),
	BonusIndexRoute: bf,
	ProviderIndexRoute: xf,
	QuickPaymentIndexRoute: wf
}, Ef = vs._addFileChildren(Tf)._addFileTypes(), Df = (e) => typeof e == "number" && Number.isFinite(e), Of = (e, t) => {
	let n = t(e);
	return n.length > 0 ? n : e.toString();
}, kf = "h-3.5 w-3.5 shrink-0", Af = () => /* @__PURE__ */ $("svg", {
	viewBox: "0 0 20 20",
	width: "14",
	height: "14",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "1.4",
	className: kf,
	"aria-hidden": "true",
	children: [
		/* @__PURE__ */ Q("ellipse", {
			cx: "7.5",
			cy: "5.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ Q("path", { d: "M3 5.5v4.2c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2V5.5" }),
		/* @__PURE__ */ Q("ellipse", {
			cx: "12.5",
			cy: "11.5",
			rx: "4.5",
			ry: "2.2"
		}),
		/* @__PURE__ */ Q("path", { d: "M8 11.5v3.8c0 1.2 2 2.2 4.5 2.2s4.5-1 4.5-2.2v-3.8" })
	]
});
function jf({ balance: e, bonusBalance: t }) {
	let n = Dt(), { formatCurrencyValue: r } = Sn(), { translateKey: i } = ve(), a = Df(e), o = Df(t), s = Y(() => Df(e) ? Of(e, r) : "", [e, r]), c = Y(() => Df(t) ? Of(t, r) : "", [t, r]), l = i("aria.user_balance"), u = i("aria.user_bonus_balance");
	if (!a && !o) return null;
	let d = a && o ? `${l}: ${s}. ${u}: ${c}` : a ? `${l}: ${s}` : `${u}: ${c}`, f = n.attrs("user-balance"), p = n.attrs("user-balance-row"), m = n.attrs("user-balance-value"), h = n.attrs("user-bonus-balance-row"), g = n.attrs("user-bonus-balance-value");
	return /* @__PURE__ */ Q(Yn, {
		balance: a ? s : null,
		bonusBalance: o ? c : null,
		balanceIcon: /* @__PURE__ */ Q(Af, {}),
		bonusIcon: /* @__PURE__ */ Q(Rt, { className: kf }),
		ariaLabel: d,
		rootAttributes: {
			id: n.id("user-balance"),
			...f,
			"data-testid": "cashier-user-balance"
		},
		balanceRowAttributes: {
			id: n.id("user-balance-row"),
			...p
		},
		balanceValueAttributes: {
			id: n.id("user-balance-value"),
			...m,
			"data-testid": "cashier-user-balance-value"
		},
		bonusRowAttributes: {
			id: n.id("user-bonus-balance-row"),
			...h
		},
		bonusValueAttributes: {
			id: n.id("user-bonus-balance-value"),
			...g,
			"data-testid": "cashier-user-bonus-balance"
		}
	});
}
//#endregion
//#region src/components/MethodSwitcher.tsx
var Mf = G("[--pc-color-switcher-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-border-weaker))]", "[--pc-color-switcher-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))]"), Nf = G("[--pc-color-navigation-list-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-depth-2))]", "[--pc-color-navigation-list-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))]"), Pf = G("text-[var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text))]", "hover:text-[var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text)))]"), Ff = G("[background:var(--pc-color-payment-method-switcher-background,transparent)]", "text-[var(--pc-color-payment-method-switcher-text,var(--pc-color-text-muted))]", "hover:text-[var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-text))]"), If = G(Ff, "hover:[background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-border-weakest))]"), Lf = G(Ff, "hover:[background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-payment-method-switcher-background,transparent))]"), Rf = (e) => typeof e == "number" && Number.isFinite(e);
function zf({ method: e, onSelect: t, disabled: n = !1, interactivePrompts: r = !1, showSwitcher: a = !0, showUserBalance: o = !1, user: s }) {
	let c = Dt(), { translateKey: l } = ve(), u = l("cta.choose_payment_type"), d = l("cta.payin"), f = l("cta.payout"), p = s?.balance, m = s?.bonusBalance, h = Rf(p), g = Rf(m), _ = h ? p : void 0, v = g ? m : void 0, y = o && (h || g), b = Y(() => [{
		value: i.PAYIN,
		label: /* @__PURE__ */ Q(mr, { children: d })
	}, {
		value: i.PAYOUT,
		label: /* @__PURE__ */ Q(mr, { children: f })
	}], [d, f]), x = Y(() => {
		if (!a && !y) return [];
		if (a && y) {
			let r = c.attrs("method-switcher-top-menu"), i = c.attrs("method-switcher-control"), a = c.attrs("method-switcher-balance");
			return [/* @__PURE__ */ $("div", {
				id: c.id("method-switcher-top-menu"),
				...r,
				className: [r.className, "flex w-full items-center justify-between gap-3 py-2"].join(" "),
				children: [/* @__PURE__ */ Q("div", {
					id: c.id("method-switcher-control"),
					...i,
					className: [i.className, "min-w-0 flex-1"].join(" "),
					children: /* @__PURE__ */ Q(Gn, {
						options: b,
						value: e,
						onChange: t,
						ariaLabel: u || void 0,
						disabled: n,
						size: {
							base: "xs",
							"2xl": "sm"
						},
						className: Mf,
						activeOptionClassName: Pf,
						inactiveOptionClassName: If
					})
				}), /* @__PURE__ */ Q("div", {
					id: c.id("method-switcher-balance"),
					...a,
					className: [a.className, "flex shrink-0 items-center"].join(" "),
					children: /* @__PURE__ */ Q(jf, {
						balance: _,
						bonusBalance: v
					})
				})]
			}, "cashier-top-menu")];
		}
		if (a) return [/* @__PURE__ */ Q(B, {
			id: c.id("method-switcher-tabs"),
			className: G(c.className("method-switcher-tabs"), "-mx-3 w-[calc(100%+1.5rem)]", Nf, r && "mb-2 @md:mb-3"),
			options: b,
			value: e,
			onChange: t,
			ariaLabel: u || void 0,
			disabled: n,
			activeTabClassName: Pf,
			inactiveTabClassName: Lf
		}, "cashier-method-switcher")];
		if (!y) return [];
		let i = c.attrs("method-switcher-balance-only");
		return [/* @__PURE__ */ Q("div", {
			id: c.id("method-switcher-balance-only"),
			...i,
			className: [i.className, "flex min-h-[3.25rem] w-full items-center justify-end gap-3 py-1.5"].join(" "),
			children: /* @__PURE__ */ Q(jf, {
				balance: _,
				bonusBalance: v
			})
		}, "cashier-user-balance")];
	}, [
		n,
		c,
		r,
		e,
		t,
		_,
		v,
		y,
		a,
		b,
		u
	]);
	return rn("top", x, a || y), null;
}
//#endregion
//#region src/hooks/useCashierTheme.ts
var Bf = ".pc-cashier__root", Vf = (e) => e || void 0, Hf = ({ uiTheme: e, cssUrlText: t }) => {
	let n = Me(Vf(e), {
		scopeSelector: Bf,
		cssUrlText: t,
		includeHostedFieldsFontFamily: !0,
		neutralTextFallback: "reference"
	});
	return {
		themeStyles: n.variables,
		cssText: n.cssText
	};
};
function Uf(e) {
	let { uiTheme: t, cssUrlText: n } = e;
	return Y(() => Hf({
		uiTheme: t,
		cssUrlText: n
	}), [t, n]);
}
//#endregion
//#region src/utils/progress.ts
var Wf = [
	"amount",
	"paymentType",
	"bonus",
	"details",
	"provider",
	"summary"
], Gf = (e) => e.startsWith("/quick-payment") ? "amount" : e.startsWith("/pts/") ? "paymentType" : e.startsWith("/bonus") ? "bonus" : e.startsWith("/pt/") ? "details" : e.startsWith("/provider") ? "provider" : e.startsWith("/summary/") ? "summary" : null, Kf = (e, t) => {
	if (e.length === 0 || !t) return 0;
	let n = Wf.indexOf(t), r = e.findIndex((e) => Wf.indexOf(e) > n);
	return r >= 0 ? r : e.length - 1;
}, qf = ({ pathname: e, uiComboView: t, lockAmount: n, uiComboView__PaymentTypes: r, gotoPaymentType: i, hasResolvedPaymentType: a, hasAvailableBonuses: o, hasConfiguredBonuses: s, uiBonusesStyle: c, includeProviderStep: l }) => {
	let u = Gf(e), d = [], f = Pn({
		uiComboView: t,
		lockAmount: n
	});
	f && d.push("amount");
	let p = !!(i && a), m = Xn(r);
	(f ? !m && !p : !p) && d.push("paymentType"), qr(c) && (a ? o : s) && d.push("bonus"), d.push("details"), l && d.push("provider"), d.push("summary");
	let h = u ? d.indexOf(u) : -1, g = h >= 0 ? h : Kf(d, u);
	return {
		steps: d,
		currentStep: d[g] ?? null,
		currentStepIndex: g,
		stepCount: d.length
	};
}, Jf = (e) => e.startsWith("/summary/") && e.slice(9) || null, Yf = (e) => {
	let { uiComboView: t, lockAmount: n, uiComboView__PaymentTypes: r, uiBonusesStyle: i, gotoPaymentType: a, selectedPaymentType: o } = ci(H), { bonuses: s, getBonusCountForPaymentType: c } = En(), { getPaymentType: l } = Fr(), u = Y(() => Gf(e), [e]), d = Y(() => Jf(e), [e]), f = u === "provider" || u === "summary" && Nr(d), p = Y(() => o ? l(o) : null, [l, o]), m = !!p, h = Y(() => p ? c(p) > 0 : s.length > 0, [
		s.length,
		c,
		p
	]);
	return Y(() => qf({
		pathname: e,
		uiComboView: t,
		lockAmount: n,
		uiComboView__PaymentTypes: r,
		gotoPaymentType: a,
		hasResolvedPaymentType: m,
		hasAvailableBonuses: h,
		hasConfiguredBonuses: s.length > 0,
		uiBonusesStyle: i,
		includeProviderStep: f
	}), [
		s.length,
		a,
		h,
		m,
		f,
		e,
		t,
		n,
		i,
		r
	]);
};
//#endregion
//#region src/components/CashierProgressBar.tsx
function Xf({ pathname: e, theme: t = null }) {
	let n = Dt(), r = Yf(e), i = t !== null;
	if (r.stepCount <= 0) return null;
	let a = n.attrs("progress-bar");
	return /* @__PURE__ */ Q("div", {
		id: n.id("progress-bar"),
		...a,
		"data-theme": t ?? void 0,
		className: G(a.className, "w-full shrink-0"),
		children: /* @__PURE__ */ Q(at, {
			id: n.id("progress-bar-control"),
			ariaLabel: "Payment progress",
			variant: "success",
			inheritTheme: i,
			size: "xs",
			mode: "determinate",
			showInitialFill: !1,
			stepCount: r.stepCount,
			currentStepIndex: r.currentStepIndex
		})
	});
}
function Zf({ pathname: e, theme: t = null }) {
	let { uiProgressBar: n } = ci(H);
	return n ? /* @__PURE__ */ Q(Xf, {
		pathname: e,
		theme: t
	}) : null;
}
//#endregion
//#region src/utils/progressBarTheme.ts
var Qf = "/summary/$id", $f = (e) => typeof e == "object" && !!e && "paymentStatus" in e, ep = ({ pathname: e, matches: t }) => {
	if (!e.startsWith("/summary/")) return null;
	let n = t.find((e) => e.routeId === Qf);
	return !n || !$f(n.loaderData) ? null : Wd(n.loaderData.paymentStatus);
}, tp = oi({ setBlocked: () => void 0 });
function np({ children: e }) {
	let [t, n] = Z(() => /* @__PURE__ */ new Set()), r = X(null), i = t.size > 0, a = q((e, t) => {
		n((n) => {
			if (n.has(e) === t) return n;
			let r = new Set(n);
			return t ? r.add(e) : r.delete(e), r;
		});
	}, []);
	ui(() => {
		let e = r.current;
		if (e) {
			if (i) {
				e.setAttribute("inert", "");
				return;
			}
			e.removeAttribute("inert");
		}
	}, [i]);
	let o = Y(() => ({ setBlocked: a }), [a]);
	return /* @__PURE__ */ Q(tp.Provider, {
		value: o,
		children: /* @__PURE__ */ $("div", {
			className: i ? "relative flex h-full min-h-0 w-full flex-1" : "contents",
			children: [/* @__PURE__ */ Q("div", {
				ref: r,
				"data-testid": "cashier-hosted-fields-bootstrap-content",
				"data-state": i ? "loading" : "ready",
				"aria-hidden": i || void 0,
				className: i ? "invisible flex h-full min-h-0 w-full flex-1 flex-col" : "contents",
				children: e
			}), i && /* @__PURE__ */ Q("div", {
				"data-testid": "cashier-hosted-fields-bootstrap-gate",
				className: G("absolute inset-0 z-50 flex", "bg-[var(--pc-color-surface)]"),
				children: /* @__PURE__ */ Q(ie, {
					delayMs: 0,
					testId: "cashier-hosted-fields-bootstrap-loading"
				})
			})]
		})
	});
}
//#endregion
//#region src/lib/cashier.tsx
var rp = (e) => Zo({
	routeTree: Ef,
	history: Ji({ initialEntries: [e] }),
	defaultViewTransition: !1
});
function ip({ isLoading: e, children: t }) {
	let { translateKey: n } = ve();
	return /* @__PURE__ */ Q(ee, {
		isLoading: e,
		loaderLabel: n("loading.payment_types"),
		loaderTestId: "cashier-method-transition-loading",
		loaderSlot: "cashier-method-transition-logo-loader",
		children: t
	});
}
var ap = new cs(), op = {
	bonuses: void 0,
	user: void 0,
	userBalance: void 0,
	hasSelectedBonusOverride: !1,
	hasBonusesOverride: !1,
	hasUserOverride: !1,
	hasUserBalanceOverride: !1
}, sp = (e, t, n) => {
	if (!n) return e;
	let r = {
		...e ?? {},
		...t ?? {}
	};
	return Object.keys(r).length > 0 ? r : void 0;
}, cp = (e) => {
	let t = Object.fromEntries(Object.entries(e).filter(([e]) => !bn.includes(e)));
	return JSON.stringify({
		...t,
		locale: qe(t.locale)
	});
};
function lp({ children: e, portalContainer: t }) {
	let { contentNode: n } = Hr();
	return /* @__PURE__ */ $(et, {
		value: { portalContainer: n },
		children: [e, /* @__PURE__ */ Q(ke, {
			orientation: "ne",
			portalContainer: t
		})]
	});
}
function up({ children: e, themeStyles: t }) {
	let { isTranslationVisible: n } = ri();
	return /* @__PURE__ */ Q("div", {
		className: G("pc-cashier__theme-host", "relative flex min-h-0 flex-col text-[var(--pc-color-text)] w-full h-full overflow-hidden"),
		style: t,
		"data-testid": "cashier-theme-host",
		"data-i18n-ready": n ? "true" : "false",
		children: e
	});
}
function dp({ cssText: e }) {
	return e ? /* @__PURE__ */ Q("style", {
		className: "pc-cashier__theme-css",
		dangerouslySetInnerHTML: { __html: e }
	}) : null;
}
var fp = (e) => {
	let t = gr(e);
	return t.initialAmount = ai(t.initialAmount, t.lockAmount), t.locale = Yt(t.locale), t;
}, pp = (e) => {
	let t = {}, n = t;
	for (let t of On) n[t] = e[t];
	return t;
}, mp = (e, t, n) => t.fetchConfig ? fp({
	...n ?? {},
	...e,
	...pp(t)
}) : t;
function hp({ cashierConfig: e, children: t }) {
	let [n, r] = Z(null), i = X(null), a = Uf({
		uiTheme: e.uiTheme,
		cssUrlText: e.uiThemeCssText
	}), o = a.themeStyles, s = q((e) => {
		i.current = e, r((t) => t === e ? t : e);
	}, []);
	return /* @__PURE__ */ Q(Xr, {
		prefix: e.uiSelectorPrefix,
		children: /* @__PURE__ */ Q(er, {
			rootRef: i,
			children: /* @__PURE__ */ $("div", {
				ref: s,
				className: G("pc-cashier pc-cashier__root", "flex min-h-0 h-full w-full self-stretch overflow-hidden text-left [background:var(--pc-color-surface)] [container-type:size]"),
				style: o,
				"data-theme": "default",
				children: [/* @__PURE__ */ Q(dp, { cssText: a.cssText }), /* @__PURE__ */ Q(Mr, {
					portalContainer: n,
					children: t({
						portalContainer: n,
						themeStyles: o
					})
				})]
			})
		})
	});
}
var gp = si(function(e, t) {
	let n = "config" in e ? e.config : e, r = Y(() => fp(n), [n]), i = cp(r);
	return /* @__PURE__ */ Q(_p, {
		clientConfigOverrides: n,
		clientCashierConfig: r,
		ref: t
	}, i);
}), _p = si(function({ clientConfigOverrides: e, clientCashierConfig: t }, n) {
	return Fe.setConfig({
		baseUrl: t.apiUrl,
		throwOnError: !0,
		parseAs: "json"
	}), /* @__PURE__ */ Q(W, {
		client: ap,
		children: /* @__PURE__ */ Q(vp, {
			clientConfigOverrides: e,
			clientCashierConfig: t,
			ref: n
		})
	});
}), vp = si(function({ clientConfigOverrides: e, clientCashierConfig: t }, n) {
	let r = br(cn({
		merchantId: t.merchantId,
		method: t.method,
		userId: t.userId,
		sessionId: t.sessionId,
		currency: t.currency,
		fetchConfig: t.fetchConfig,
		debug: t.debug
	})), i = r.isLoading && r.fetchStatus !== "idle" && r.dataUpdatedAt === 0 && r.errorUpdatedAt === 0, a = Y(() => mp(e, t, r.data?.cashierConfig), [
		t,
		e,
		r.data?.cashierConfig
	]), o = qe(a.locale), s = !!((!t.fetchConfig || r.data?.cashierConfig) && !a.debug && a.merchantId && o), c = br({
		...Lt({
			merchantId: a.merchantId,
			locale: o
		}),
		enabled: s
	}), l = s && c.isLoading && c.fetchStatus !== "idle" && c.dataUpdatedAt === 0 && c.errorUpdatedAt === 0, u = cp(a), d = i || l;
	return J(() => {
		d || a.onInit && a.onInit(a);
	}, [a, d]), /* @__PURE__ */ Q(hp, {
		cashierConfig: a,
		children: ({ portalContainer: e, themeStyles: t }) => /* @__PURE__ */ Q(oe, {
			isLoading: d,
			loaderTestId: "cashier-bootstrap-loading",
			loaderSlot: "cashier-bootstrap-logo-loader",
			children: /* @__PURE__ */ Q(yp, {
				cashierConfig: a,
				portalContainer: e,
				themeStyles: t,
				ref: n
			}, u)
		})
	});
}), yp = si(function({ cashierConfig: e, portalContainer: t, themeStyles: n }, r) {
	let [a, o] = Z(() => Kr(e)), [s, c] = Z(op), [l, u] = Z(!1), d = X(0), f = X(!1), p;
	e.uiBonuses && (p = s.hasBonusesOverride ? s.bonuses : e.bonuses);
	let m = sp(s.hasUserOverride ? s.user : e.user, s.userBalance, s.hasUserBalanceOverride), h = Y(() => ({
		...e,
		bonuses: p,
		user: m
	}), [
		e,
		p,
		m
	]), g = X(s);
	J(() => {
		g.current = s;
	}, [s]);
	let _ = Ur(h), v = Y(() => rp(_), [_]), [y, b] = Z(() => v.state.location.pathname), [x, S] = Z(() => ep({
		pathname: v.state.location.pathname,
		matches: v.state.matches
	}));
	J(() => () => {
		d.current += 1;
	}, []);
	let C = q((e) => {
		if (a.method === e || f.current) return;
		let t = d.current + 1;
		d.current = t, f.current = !0, u(!0), (async () => {
			if (h.merchantId && h.userId && h.sessionId) try {
				await fr(ap, {
					merchantId: h.merchantId,
					method: e,
					userId: h.userId,
					sessionId: h.sessionId,
					currency: h.currency,
					fetchConfig: h.fetchConfig,
					debug: h.debug
				});
			} catch {}
			if (d.current !== t || ((e === i.PAYIN || e === i.PAYOUT) && Tt({
				callback: h.onPaymentMethodChanged,
				callbackName: "onPaymentMethodChanged",
				debug: h.debug,
				payload: { method: e }
			}), d.current !== t)) return;
			pi(() => {
				o((t) => ({
					...t,
					method: e,
					selectedPaymentType: h.gotoPaymentType ?? null,
					selectedBonusCode: null,
					paymentFormDraft: null,
					comboViewFormDraft: null,
					resetFlowOnBack: !0,
					hasAppliedGotoPaymentType: !1
				}));
			});
			let n = Ur({
				...h,
				method: e
			});
			try {
				await v.navigate({
					to: n,
					replace: !0
				});
			} finally {
				d.current === t && (f.current = !1, u(!1));
			}
		})();
	}, [
		a.method,
		h,
		v
	]), w = Y(() => ({
		...h,
		...a,
		setCashierState: o
	}), [
		a,
		h,
		o
	]), T = Y(() => ({
		...h,
		...a,
		queryClient: ap
	}), [a, h]), E = X(null), D = y.startsWith("/provider"), O = !!h.uiUserBalance, k = h.uiPaymentMethodSwitcher || O;
	J(() => {
		let e = v.subscribe("onResolved", () => {
			let e = v.state.location.pathname, t = ep({
				pathname: e,
				matches: v.state.matches
			});
			b((t) => t === e ? t : e), S((e) => e === t ? e : t);
		});
		return () => {
			e();
		};
	}, [v]);
	let A = q(() => {
		let e = {
			...g.current,
			hasSelectedBonusOverride: !1
		};
		g.current = e, c((t) => t.hasSelectedBonusOverride ? e : t), o((e) => e.selectedBonusCode === null ? e : {
			...e,
			selectedBonusCode: null
		});
	}, [o]);
	li(r, () => ({
		setBonuses: (e) => {
			let t = e !== void 0, n = {
				...g.current,
				bonuses: e,
				hasBonusesOverride: t
			};
			g.current = n, c((r) => r.hasBonusesOverride === t && r.bonuses === e ? r : n);
		},
		setUser: (e) => {
			let t = e !== void 0, n = {
				...g.current,
				user: e,
				hasUserOverride: t
			};
			g.current = n, c((r) => r.hasUserOverride === t && r.user === e ? r : n);
		},
		setUserBalance: (e) => {
			let t = e !== void 0, n = {
				...g.current,
				userBalance: e,
				hasUserBalanceOverride: t
			};
			g.current = n, c((r) => r.hasUserBalanceOverride === t && r.userBalance === e ? r : n);
		},
		setSelectedBonusCode: (t) => {
			if (t === null) {
				A();
				return;
			}
			if (!e.uiBonuses) {
				A();
				return;
			}
			let n = g.current.hasBonusesOverride ? g.current.bonuses : e.bonuses, r = Sr(n).some((e) => e.code === t) ? t : null, i = {
				...g.current,
				hasSelectedBonusOverride: !0
			};
			g.current = i, c((e) => e.hasSelectedBonusOverride ? e : i), o((e) => (e.selectedBonusCode ?? null) === r ? e : {
				...e,
				selectedBonusCode: r
			});
		},
		clearSelectedBonus: A
	}), [
		e.bonuses,
		e.uiBonuses,
		A,
		o
	]);
	let j = e.uiBonuses && (s.hasBonusesOverride || s.hasUserOverride || s.hasUserBalanceOverride || s.hasSelectedBonusOverride);
	return /* @__PURE__ */ Q(H.Provider, {
		value: w,
		children: /* @__PURE__ */ Q(np, { children: /* @__PURE__ */ Q(Qr, {
			debug: h.debug,
			onPaymentFormChanged: h.onPaymentFormChanged,
			children: /* @__PURE__ */ Q(St, { children: /* @__PURE__ */ Q(zr, { children: /* @__PURE__ */ Q(Te, { children: /* @__PURE__ */ Q(_r, { children: /* @__PURE__ */ Q(xn, { children: /* @__PURE__ */ Q(In, { children: /* @__PURE__ */ Q(nr, {
				locked: l,
				children: /* @__PURE__ */ Q(bp, { children: (e) => /* @__PURE__ */ Q(ip, {
					isLoading: l,
					children: /* @__PURE__ */ Q(Nn, {
						themeStyles: n,
						beforeTopRail: /* @__PURE__ */ Q(Zf, {
							pathname: y,
							theme: x
						}),
						children: /* @__PURE__ */ Q(lp, {
							portalContainer: t,
							children: /* @__PURE__ */ Q(up, {
								themeStyles: n,
								children: /* @__PURE__ */ Q("div", {
									className: G("pc-cashier__app-shell", "flex min-h-0 flex-1"),
									children: /* @__PURE__ */ $("div", {
										className: G("pc-cashier__app-content", "relative flex min-h-0 flex-1 flex-col"),
										children: [k && /* @__PURE__ */ Q(zf, {
											method: a.method,
											onSelect: C,
											disabled: D || e,
											interactivePrompts: h.uiInteractivePrompts,
											showSwitcher: h.uiPaymentMethodSwitcher,
											showUserBalance: O,
											user: m
										}), /* @__PURE__ */ $("div", {
											ref: E,
											className: G("pc-cashier__scroll-container", "flex min-h-0 flex-1 flex-col overflow-y-auto pc-scrollbar-hidden px-0", "[[data-pc-bottom-rail-fade=true]_&]:scroll-pb-[44px]"),
											children: [/* @__PURE__ */ Q(Sp, {
												router: v,
												scrollContainerRef: E
											}), /* @__PURE__ */ Q(il, { children: /* @__PURE__ */ $(Al, { children: [j && /* @__PURE__ */ Q(xp, {}), /* @__PURE__ */ Q(es, {
												router: v,
												context: T
											})] }) })]
										})]
									})
								})
							})
						})
					})
				}) })
			}) }) }) }) }) }) })
		}) })
	});
});
function bp({ children: e }) {
	return e(Mn());
}
function xp() {
	let { selectedPaymentType: e, selectedBonusCode: t } = ci(H), { bonuses: n, getBonusAvailabilityForPaymentType: r } = En(), { getPaymentType: i } = Fr(), { clearBonusSelection: a, ensureDefaultSelection: o } = pe(), s = Y(() => e ? r(i(e)).filter(Qe).map((e) => e.bonus) : [], [
		r,
		i,
		e
	]);
	return J(() => {
		if (t) {
			if (e) {
				if (s.some((e) => e.code === t)) return;
				o(s);
				return;
			}
			n.some((e) => e.code === t) || a();
		}
	}, [
		n,
		a,
		o,
		s,
		t,
		e
	]), null;
}
function Sp({ router: e, scrollContainerRef: t }) {
	let { contentNode: n } = Hr(), r = X(n), i = X(null);
	return J(() => {
		r.current = n, i.current = t?.current ?? n ?? null;
	}, [n, t]), J(() => e.subscribe("onResolved", (e) => {
		if (!e.hrefChanged || e.hashChanged && !e.pathChanged) return;
		let t = i.current;
		t && (typeof t.scrollTo == "function" ? t.scrollTo({
			top: 0,
			left: 0
		}) : (t.scrollTop = 0, t.scrollLeft = 0));
	}), [e, r]), null;
}
//#endregion
//#region ../ui/src/styles-inline.ts
var Cp = "/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-divide-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-400:oklch(76.5% .177 163.223);--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--color-slate-400:oklch(70.4% .04 256.788);--color-neutral-500:oklch(55.6% 0 0);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-xs:20rem;--container-sm:24rem;--container-md:28rem;--container-xl:36rem;--container-2xl:42rem;--container-3xl:48rem;--container-4xl:56rem;--container-5xl:64rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--text-3xl:1.875rem;--text-3xl--line-height:calc(2.25 / 1.875);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5 / 2.25);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--tracking-normal:0em;--tracking-wide:.025em;--leading-tight:1.25;--leading-snug:1.375;--leading-relaxed:1.625;--ease-out:cubic-bezier(0, 0, .2, 1);--ease-in-out:cubic-bezier(.4, 0, .2, 1);--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{:root,[data-theme=default]{--pc-font-size-adjust:.455;--pc-font-code-size:.875rem;--pc-font-size-input:16px;--pc-font-line-height-input:20px;--hf-font-family:system-ui, sans-serif;--font-mono:ui-monospace, monospace;font-size-adjust:var(--pc-font-size-adjust);font-optical-sizing:auto;--pc-color-surface:#f5f6f5;--pc-color-text:#021715;--pc-color-primary:#d5ffac;--pc-color-primary-text:var(--pc-color-text);--pc-color-secondary:#021715;--pc-color-secondary-text:var(--pc-color-text-inverted);--pc-color-secondary-lighter:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-secondary-lighter:color-mix(in srgb, var(--pc-color-secondary) 35%, white)}}:root,[data-theme=default]{--pc-color-secondary-lightest:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-secondary-lightest:color-mix(in srgb, var(--pc-color-secondary) 12%, white)}}:root,[data-theme=default]{--pc-color-neutral:white;--pc-color-neutral-text:var(--pc-color-text);--pc-color-success:#d5ffac;--pc-color-success-text:oklch(from var(--pc-color-success) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-danger:#fecaca;--pc-color-danger-text:#991b1b;--pc-color-warning:#fde68a;--pc-color-warning-text:#92400e;--pc-color-info:#bfdbfe;--pc-color-info-text:#1e3a8a;--pc-color-unknown:#ddd6fe;--pc-color-unknown-text:#5b21b6;--pc-color-category-0:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-0:color-mix(in oklch, var(--pc-color-unknown) 82%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-1:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-1:color-mix(in oklch, var(--pc-color-success) 90%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-2:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-2:color-mix(in oklch, var(--pc-color-info) 88%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-3:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-3:color-mix(in oklch, var(--pc-color-info) 80%, var(--pc-color-success))}}:root,[data-theme=default]{--pc-color-category-4:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-4:color-mix(in oklch, var(--pc-color-warning) 92%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-5:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-5:color-mix(in oklch, var(--pc-color-danger) 72%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-6:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-6:color-mix(in oklch, var(--pc-color-success) 72%, var(--pc-color-info))}}:root,[data-theme=default]{--pc-color-category-7:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-7:color-mix(in oklch, var(--pc-color-info) 76%, var(--pc-color-unknown))}}:root,[data-theme=default]{--pc-color-category-8:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-8:color-mix(in oklch, var(--pc-color-success) 76%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-9:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-9:color-mix(in oklch, var(--pc-color-unknown) 72%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-10:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-10:color-mix(in oklch, var(--pc-color-warning) 78%, var(--pc-color-success))}}:root,[data-theme=default]{--pc-color-category-11:var(--pc-color-danger);--pc-color-category-12:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-12:color-mix(in oklch, var(--pc-color-warning) 52%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-13:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-13:color-mix(in oklch, var(--pc-color-info) 68%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-14:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-14:color-mix(in oklch, var(--pc-color-info) 82%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-backdrop:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-backdrop:color-mix(in srgb, var(--pc-color-secondary) 25%, transparent)}}:root,[data-theme=default]{--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:root,[data-theme=default]{--pc-color-text-secondary:oklch(37.2% .044 257.287);--pc-color-text-inverted:white;--pc-text-inverted-95:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-95:color-mix(in srgb, var(--pc-color-text-inverted) 95%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-90:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-90:color-mix(in srgb, var(--pc-color-text-inverted) 90%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-80:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-80:color-mix(in srgb, var(--pc-color-text-inverted) 80%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-70:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-70:color-mix(in srgb, var(--pc-color-text-inverted) 70%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-50:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-50:color-mix(in srgb, var(--pc-color-text-inverted) 50%, transparent)}}:root,[data-theme=default]{--pc-radius-factor:1;--pc-color-transparent:transparent;--pc-color-accent:var(--pc-color-secondary);--pc-color-selection:var(--pc-color-depth-3);--pc-temp-rose-700:oklch(51.4% .222 16.935);--pc-temp-slate-400:oklch(70.4% .04 256.788);--pc-temp-slate-500:oklch(55.4% .046 257.417);--pc-temp-slate-900-60:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-temp-slate-900-60:color-mix(in srgb, var(--pc-color-secondary) 60%, transparent)}}:root,[data-theme=default]{--pc-temp-input-surface:#f1f4fa;--pc-avatar-gradient-1:radial-gradient(circle at bottom, var(--pc-color-primary), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-1:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-primary) 78%, var(--pc-color-info)), color-mix(in srgb, var(--pc-color-info) 74%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-2:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-2:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 68%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-3:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-success))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-3:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 76%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-success) 66%, var(--pc-color-info)))}}:root,[data-theme=default]{--pc-avatar-gradient-4:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-4:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 70%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-5:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-5:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 78%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 62%, var(--pc-color-danger)))}}:root,[data-theme=default]{--pc-avatar-gradient-6:radial-gradient(circle at bottom, var(--pc-color-info), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-6:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-info) 70%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 72%, var(--pc-color-success)))}}:root,[data-theme=default]{--pc-avatar-gradient-7:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-primary))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-7:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 68%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-primary) 58%, var(--pc-color-success)))}}:root,[data-theme=default]{--pc-avatar-gradient-8:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-unknown))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-8:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 50%, var(--pc-color-warning)), color-mix(in srgb, var(--pc-color-unknown) 72%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-temp-amber-800:oklch(47.3% .137 46.201);--pc-temp-input-surface-focus:#e8ecf4;--pc-temp-rose-50:oklch(96.9% .015 12.422);--pc-temp-rose-200:oklch(89.2% .058 10.001)}[data-theme=neutral]{--pc-color-surface:var(--pc-color-neutral);--pc-color-text:var(--pc-color-neutral-text)}[data-theme]:not([data-theme=default]) [data-theme=neutral]{--pc-color-surface:var(--pc-color-depth-2);--pc-color-text:inherit}[data-theme=primary-tinted]{--pc-color-surface:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){[data-theme=primary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-depth-1) 90%, var(--pc-color-primary))}}[data-theme=primary-tinted]{--pc-color-text:var(--pc-color-primary)}[data-theme=secondary-tinted]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary-tinted]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary] [data-theme=secondary]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}[data-theme=primary]{--pc-color-surface:var(--pc-color-primary);--pc-color-text:var(--pc-color-primary-text)}[data-theme=secondary]{--pc-color-surface:var(--pc-color-secondary);--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=secondary]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=success]{--pc-color-surface:var(--pc-color-success);--pc-color-text:var(--pc-color-success-text)}[data-theme=danger]{--pc-color-surface:var(--pc-color-danger);--pc-color-text:var(--pc-color-danger-text)}[data-theme=warning]{--pc-color-surface:var(--pc-color-warning);--pc-color-text:var(--pc-color-warning-text)}[data-theme=info]{--pc-color-surface:var(--pc-color-info);--pc-color-text:var(--pc-color-info-text)}[data-theme=unknown]{--pc-color-surface:var(--pc-color-unknown);--pc-color-text:var(--pc-color-unknown-text)}[data-theme=brandless-card]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, var(--pc-color-neutral))}}[data-theme=brandless-card]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=brandless-card]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #2e77bc)}}[data-theme=diners-club]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=diners-club]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0069aa)}}[data-theme=discover]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=discover]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ff6000)}}[data-theme=elo]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=elo]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #000)}}[data-theme=hiper]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hiper]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #f76e1e)}}[data-theme=hipercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hipercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #822124)}}[data-theme=jcb]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=jcb]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0b4ea2)}}[data-theme=maestro]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=maestro]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #009ddd)}}[data-theme=mastercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mastercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #eb001b)}}[data-theme=mir]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mir]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0a9f5d)}}[data-theme=unionpay]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=unionpay]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #007a9d)}}[data-theme=verve]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=verve]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ef4123)}}[data-theme=visa]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=visa]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #1a1f71)}}[data-theme][data-pc-appearance=outline]{--pc-color-text:var(--pc-color-surface)}:where(:root,[data-theme]){--pc-radius:calc(.25rem * var(--pc-radius-factor));--pc-radius-sm:var(--pc-radius);--pc-radius-md:calc(.375rem * var(--pc-radius-factor));--pc-radius-lg:calc(.5rem * var(--pc-radius-factor));--pc-radius-xl:calc(.75rem * var(--pc-radius-factor));--pc-radius-2xl:calc(1rem * var(--pc-radius-factor));--pc-radius-3xl:calc(1.5rem * var(--pc-radius-factor));--pc-radius-full:9999px;--pc-color-surface-strongest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-strongest:color-mix(in srgb, var(--pc-color-surface) 90%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-surface-weaker:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weaker:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-surface-weakest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weakest:color-mix(in srgb, var(--pc-color-surface) 85%, var(--pc-color-text) 15%)}}:where(:root,[data-theme]){--pc-color-backdrop:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-backdrop:color-mix(in srgb, color-mix(in srgb, var(--pc-color-surface) 65%, var(--pc-color-text) 35%) 70%, transparent)}}:where(:root,[data-theme]){--pc-color-depth-1:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-1:color-mix(in srgb, var(--pc-color-text) 1.38%, transparent 98.62%)}}:where(:root,[data-theme]){--pc-color-depth-2:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-2:color-mix(in srgb, var(--pc-color-depth-1) 96%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-3:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-3:color-mix(in srgb, var(--pc-color-depth-1) 93%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-4:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-4:color-mix(in srgb, var(--pc-color-depth-1) 88%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-5:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-5:color-mix(in srgb, var(--pc-color-depth-1) 50%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-dropdown-border:var(--pc-color-border-weaker);--pc-color-dropdown-item-background-hover:var(--pc-color-depth-2);--pc-color-dropdown-item-background-active:var(--pc-color-depth-2);--pc-color-dropdown-item-background-selected:var(--pc-color-dropdown-item-background-hover);--pc-color-dropdown-item-background-selected-hover:var(--pc-color-dropdown-item-background-selected);--pc-color-dropdown-item-background-selected-active:var(--pc-color-dropdown-item-background-active);--pc-color-dropdown-item-action-background-hover:var(--pc-color-dropdown-item-background-hover);--pc-color-dropdown-item-action-background-active:var(--pc-color-dropdown-item-background-active);--pc-color-text-muted:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-text-muted:color-mix(in srgb, var(--pc-color-text) 75%, transparent 25%)}}:where(:root,[data-theme]){--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weaker:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weaker:color-mix(in srgb, var(--pc-color-border) 50%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weakest:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weakest:color-mix(in srgb, var(--pc-color-border) 40%, transparent)}}:where(:root,[data-theme]){--pc-color-input-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-background:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-input-background-hover:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-background-hover:color-mix(in srgb, var(--pc-color-surface) 88%, var(--pc-color-text) 12%)}}:where(:root,[data-theme]){--pc-color-input-background-active:var(--pc-color-input-background-hover);--pc-color-input-text:var(--pc-color-text);--pc-color-input-placeholder:var(--pc-color-input-text,var(--pc-color-text))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-placeholder:color-mix(in srgb, var(--pc-color-input-text,var(--pc-color-text)) 55%, transparent 45%)}}:where(:root,[data-theme]){--pc-color-input-label-text:var(--pc-color-text-muted);--pc-color-input-helper-text:var(--pc-color-text-muted);--pc-color-input-error-text:var(--pc-color-input-danger-error-text,var(--pc-color-danger-text))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-error-text:var(--pc-color-input-danger-error-text,color-mix(in srgb, var(--pc-color-danger-text) 84%, var(--pc-color-text)))}}:where(:root,[data-theme]){--pc-color-input-invalid-placeholder:var(--pc-color-input-error-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-placeholder:color-mix(in srgb, var(--pc-color-input-error-text) 55%, transparent 45%)}}:where(:root,[data-theme]){--pc-color-input-border:transparent;--pc-color-input-editor-border:var(--pc-color-border-weakest);--pc-color-input-border-hover:var(--pc-color-input-border);--pc-color-input-checkbox-background:transparent;--pc-color-input-checkbox-background-checked:var(--pc-color-input-text);--pc-color-input-checkbox-border:var(--pc-color-input-focus-border);--pc-color-input-checkbox-border-hover:var(--pc-color-input-checkbox-border);--pc-color-input-checkbox-border-disabled:var(--pc-color-border);--pc-color-input-checkbox-icon:var(--pc-color-input-background);--pc-color-input-focus-border:var(--pc-color-input-text,var(--pc-color-text));--pc-color-input-focus-ring:var(--pc-color-input-focus-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-focus-ring:color-mix(in srgb, var(--pc-color-input-focus-border) var(--pc-opacity-input-focus-ring,26%), transparent)}}:where(:root,[data-theme]){--pc-color-input-invalid-focus-ring:var(--pc-color-input-danger-focus-ring,var(--pc-color-input-invalid-border))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-focus-ring:var(--pc-color-input-danger-focus-ring,color-mix(in srgb, var(--pc-color-input-invalid-border) var(--pc-opacity-input-focus-ring,26%), transparent))}}:where(:root,[data-theme]){--pc-size-input-focus-ring:3px;--pc-opacity-input-focus-ring:26%;--pc-opacity-input-invalid-background:32%;--pc-color-input-disabled-background:var(--pc-color-surface-weaker);--pc-color-input-disabled-text:var(--pc-color-text-muted);--pc-color-input-readonly-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-readonly-background:color-mix(in srgb, var(--pc-color-surface) 95%, var(--pc-color-text) 5%)}}:where(:root,[data-theme]){--pc-color-input-readonly-border:var(--pc-color-border-weaker);--pc-color-input-readonly-text:var(--pc-color-text-muted);--pc-color-input-readonly-focus-ring:var(--pc-color-input-readonly-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-readonly-focus-ring:color-mix(in srgb, var(--pc-color-input-readonly-border) 45%, transparent 55%)}}:where(:root,[data-theme]){--pc-color-input-invalid-border:var(--pc-color-input-danger-border,var(--pc-color-input-error-text));--pc-color-input-invalid-background:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-background:color-mix(in srgb, var(--pc-color-danger) var(--pc-opacity-input-invalid-background), var(--pc-color-input-background,var(--pc-color-surface)))}}:where(:root,[data-theme]){--pc-color-input-invalid-background-hover:var(--pc-color-input-invalid-background);--pc-color-input-warning-border:var(--pc-color-warning-text);--pc-color-input-warning-background:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-warning-background:color-mix(in srgb, var(--pc-color-warning) 22%, var(--pc-color-surface))}}:where(:root,[data-theme]){--pc-color-input-success-border:var(--pc-color-success-text);--pc-color-input-success-background:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-success-background:color-mix(in srgb, var(--pc-color-success) 22%, var(--pc-color-surface))}}:where(:root,[data-theme]){--pc-color-input-icon:var(--pc-color-text-muted);--pc-color-input-autofill-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-autofill-background:color-mix(in srgb, var(--pc-color-surface) 86%, #9ec5ff 14%)}}:where(:root,[data-theme]){--pc-color-input-autofill-text:var(--pc-color-input-text);--pc-color-input-autofill-border:var(--pc-color-input-border);--pc-color-payment-form-field-panel-background:var(--pc-color-surface);--pc-radius-input:var(--pc-radius-3xl);--pc-radius-input-multiline:var(--pc-radius-input);--pc-size-checkbox:1rem;--pc-size-input-height:2.25rem;--pc-size-input-height-compact:2rem;--pc-space-input-padding-x:.875rem;--pc-space-input-padding-y:.5rem;--pc-space-input-label-gap:.25rem;--pc-space-input-gap:.625rem}.pc-theme-dark{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pc-color-surface:#000;--pc-color-text:var(--color-slate-200);--pc-color-secondary:var(--color-slate-300);--pc-color-secondary-text:var(--pc-color-surface);--pc-color-accent:var(--color-slate-300);--pc-color-danger:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.pc-theme-dark{--pc-color-danger:color-mix(in srgb, var(--pc-color-text) 50%, red)}}.pc-theme-dark{--pc-color-danger-text:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.pc-theme-dark{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-text) 70%, red)}}.pc-theme-dark{--pc-color-warning:#a86e00}.pc-theme-dark [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\@container\\/interactive-prompt{container:interactive-prompt/inline-size}.\\@container\\/preference-panel{container:preference-panel/inline-size}.\\@container,.\\[container-type\\:inline-size\\]{container-type:inline-size}.\\[container-type\\:size\\]{container-type:size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.inset-\\[18\\%\\]{inset:18%}.inset-\\[20\\%\\]{inset:20%}.-inset-x-1{inset-inline:calc(var(--spacing) * -1)}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.inset-y-0{inset-block:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.-top-1{top:calc(var(--spacing) * -1)}.top-0{top:calc(var(--spacing) * 0)}.top-0\\.5{top:calc(var(--spacing) * .5)}.top-1{top:calc(var(--spacing) * 1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing) * 2)}.top-3{top:calc(var(--spacing) * 3)}.top-3\\.5{top:calc(var(--spacing) * 3.5)}.top-4{top:calc(var(--spacing) * 4)}.top-6{top:calc(var(--spacing) * 6)}.top-\\[-9999px\\]{top:-9999px}.top-full{top:100%}.-right-0\\.5{right:calc(var(--spacing) * -.5)}.-right-1{right:calc(var(--spacing) * -1)}.right-0{right:calc(var(--spacing) * 0)}.right-1\\.5{right:calc(var(--spacing) * 1.5)}.right-2{right:calc(var(--spacing) * 2)}.right-3{right:calc(var(--spacing) * 3)}.right-4{right:calc(var(--spacing) * 4)}.right-5{right:calc(var(--spacing) * 5)}.right-6{right:calc(var(--spacing) * 6)}.right-auto{right:auto}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-3{bottom:calc(var(--spacing) * 3)}.bottom-6{bottom:calc(var(--spacing) * 6)}.bottom-\\[calc\\(var\\(--pc-panel-edge-inset\\,0px\\)\\+var\\(--pc-panel-extra-inset\\,0px\\)\\)\\]{bottom:calc(var(--pc-panel-edge-inset,0px) + var(--pc-panel-extra-inset,0px))}.bottom-\\[var\\(--pc-panel-edge-inset\\,0px\\)\\]{bottom:var(--pc-panel-edge-inset,0px)}.bottom-full{bottom:100%}.-left-\\[0\\.7rem\\]{left:-.7rem}.-left-\\[0\\.9rem\\]{left:-.9rem}.-left-\\[0\\.75rem\\]{left:-.75rem}.-left-\\[0\\.85rem\\]{left:-.85rem}.-left-\\[1\\.1rem\\]{left:-1.1rem}.left-0{left:calc(var(--spacing) * 0)}.left-0\\.5{left:calc(var(--spacing) * .5)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing) * 2)}.left-3{left:calc(var(--spacing) * 3)}.left-\\[-9999px\\]{left:-9999px}.left-auto{left:auto}.isolate{isolation:isolate}.-z-10{z-index:calc(10 * -1)}.z-0{z-index:0}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-60{z-index:60}.z-\\[-1\\]{z-index:-1}.z-\\[1\\]{z-index:1}.z-\\[2\\]{z-index:2}.z-\\[1050\\]{z-index:1050}.z-\\[2000\\]{z-index:2000}.z-\\[2010\\]{z-index:2010}.z-\\[2200\\]{z-index:2200}.z-\\[2147483647\\]{z-index:2147483647}.z-\\[var\\(--pc-workspace-pane-surface-toolbar-z-index\\,10\\)\\]{z-index:var(--pc-workspace-pane-surface-toolbar-z-index,10)}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.row-0{grid-row:0}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.-m-1{margin:calc(var(--spacing) * -1)}.m-0{margin:calc(var(--spacing) * 0)}.m-1{margin:calc(var(--spacing) * 1)}.-mx-0\\.5{margin-inline:calc(var(--spacing) * -.5)}.-mx-2{margin-inline:calc(var(--spacing) * -2)}.-mx-3{margin-inline:calc(var(--spacing) * -3)}.-mx-\\[var\\(--pc-payment-list-item-inline-padding\\)\\]{margin-inline:calc(var(--pc-payment-list-item-inline-padding) * -1)}.mx-1{margin-inline:calc(var(--spacing) * 1)}.mx-\\[var\\(--pc-panel-edge-offset\\,0px\\)\\]{margin-inline:var(--pc-panel-edge-offset,0px)}.mx-\\[var\\(--pc-workspace-main-pane-padding-offset\\)\\]{margin-inline:var(--pc-workspace-main-pane-padding-offset)}.mx-auto{margin-inline:auto}.-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.-mt-1{margin-top:calc(var(--spacing) * -1)}.-mt-2{margin-top:calc(var(--spacing) * -2)}.-mt-3{margin-top:calc(var(--spacing) * -3)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mt-4{margin-top:calc(var(--spacing) * 4)}.mt-auto{margin-top:auto}.-mr-3{margin-right:calc(var(--spacing) * -3)}.mr-1{margin-right:calc(var(--spacing) * 1)}.-mb-3{margin-bottom:calc(var(--spacing) * -3)}.mb-0{margin-bottom:calc(var(--spacing) * 0)}.mb-1\\.5{margin-bottom:calc(var(--spacing) * 1.5)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-2\\.5{margin-bottom:calc(var(--spacing) * 2.5)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-4\\.5{margin-bottom:calc(var(--spacing) * 4.5)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-\\[var\\(--pc-panel-edge-offset\\,0px\\)\\]{margin-bottom:var(--pc-panel-edge-offset,0px)}.mb-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{margin-bottom:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}.mb-\\[var\\(--pc-space-input-label-gap\\,0\\.25rem\\)\\]{margin-bottom:var(--pc-space-input-label-gap,.25rem)}.mb-\\[var\\(--pc-workspace-main-pane-padding-offset\\)\\]{margin-bottom:var(--pc-workspace-main-pane-padding-offset)}.-ml-1\\.5{margin-left:calc(var(--spacing) * -1.5)}.-ml-3{margin-left:calc(var(--spacing) * -3)}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-1\\.5{margin-left:calc(var(--spacing) * 1.5)}.ml-2{margin-left:calc(var(--spacing) * 2)}.ml-\\[2\\.5rem\\]{margin-left:2.5rem}.ml-\\[3\\.25rem\\]{margin-left:3.25rem}.ml-\\[3rem\\]{margin-left:3rem}.ml-\\[var\\(--pc-payment-list-item-content-inset\\)\\]{margin-left:var(--pc-payment-list-item-content-inset)}.ml-\\[var\\(--pc-space-input-group-gap\\,0\\.5rem\\)\\]{margin-left:var(--pc-space-input-group-gap,.5rem)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.size-5{width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.size-8{width:calc(var(--spacing) * 8);height:calc(var(--spacing) * 8)}.\\!h-7{height:calc(var(--spacing) * 7)!important}.\\!h-9{height:calc(var(--spacing) * 9)!important}.\\!h-10{height:calc(var(--spacing) * 10)!important}.\\!h-full{height:100%!important}.h-0{height:calc(var(--spacing) * 0)}.h-0\\.5{height:calc(var(--spacing) * .5)}.h-1{height:calc(var(--spacing) * 1)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2{height:calc(var(--spacing) * 2)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-4{height:calc(var(--spacing) * 4)}.h-4\\.5{height:calc(var(--spacing) * 4.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-16{height:calc(var(--spacing) * 16)}.h-20{height:calc(var(--spacing) * 20)}.h-24{height:calc(var(--spacing) * 24)}.h-28{height:calc(var(--spacing) * 28)}.h-44{height:calc(var(--spacing) * 44)}.h-52{height:calc(var(--spacing) * 52)}.h-64{height:calc(var(--spacing) * 64)}.h-72{height:calc(var(--spacing) * 72)}.h-80{height:calc(var(--spacing) * 80)}.h-\\[1\\.3125rem\\]{height:1.3125rem}.h-\\[1\\.8125rem\\]{height:1.8125rem}.h-\\[2\\.25rem\\]{height:2.25rem}.h-\\[2\\.55rem\\]{height:2.55rem}.h-\\[2\\.85rem\\]{height:2.85rem}.h-\\[3\\.75rem\\]{height:3.75rem}.h-\\[3rem\\]{height:3rem}.h-\\[18px\\]{height:18px}.h-\\[22rem\\]{height:22rem}.h-\\[24rem\\]{height:24rem}.h-\\[26px\\]{height:26px}.h-\\[26rem\\]{height:26rem}.h-\\[28rem\\]{height:28rem}.h-\\[30rem\\]{height:30rem}.h-\\[32rem\\]{height:32rem}.h-\\[34rem\\]{height:34rem}.h-\\[36rem\\]{height:36rem}.h-\\[38rem\\]{height:38rem}.h-\\[40rem\\]{height:40rem}.h-\\[42rem\\]{height:42rem}.h-\\[44rem\\]{height:44rem}.h-\\[70\\%\\]{height:70%}.h-\\[82\\%\\]{height:82%}.h-\\[85\\%\\]{height:85%}.h-\\[260px\\]{height:260px}.h-\\[420px\\]{height:420px}.h-\\[calc\\(100vh-2rem\\)\\]{height:calc(100vh - 2rem)}.h-\\[calc\\(100vh-4rem\\)\\]{height:calc(100vh - 4rem)}.h-\\[min\\(80vh\\,42rem\\)\\]{height:min(80vh,42rem)}.h-\\[var\\(--pc-brand-display-mark-size\\,2rem\\)\\]{height:var(--pc-brand-display-mark-size,2rem)}.h-\\[var\\(--pc-font-line-height-input\\,20px\\)\\]{height:var(--pc-font-line-height-input,20px)}.h-\\[var\\(--pc-logo-height\\,2\\.25rem\\)\\]{height:var(--pc-logo-height,2.25rem)}.h-\\[var\\(--pc-logo-height\\,3\\.75rem\\)\\]{height:var(--pc-logo-height,3.75rem)}.h-\\[var\\(--pc-size-checkbox\\,1rem\\)\\]{height:var(--pc-size-checkbox,1rem)}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,1\\.25rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,1.25rem))}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,2\\.5rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2.5rem))}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2.25rem))}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,2rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2rem))}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,42\\%\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,42%))}.h-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{height:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))}.h-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,100\\%\\)\\)\\]{height:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,100%))}.h-\\[var\\(--pc-size-payment-list-item-logo-height\\,2\\.25rem\\)\\]{height:var(--pc-size-payment-list-item-logo-height,2.25rem)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-\\[calc\\(100vh-2rem\\)\\]{max-height:calc(100vh - 2rem)}.max-h-\\[calc\\(100vh-4rem\\)\\]{max-height:calc(100vh - 4rem)}.max-h-\\[inherit\\]{max-height:inherit}.max-h-\\[min\\(31rem\\,100\\%\\)\\]{max-height:min(31rem,100%)}.max-h-\\[min\\(56vh\\,24rem\\,100\\%\\)\\]{max-height:min(56vh,24rem,100%)}.max-h-\\[min\\(68vh\\,30rem\\,100\\%\\)\\]{max-height:min(68vh,30rem,100%)}.max-h-\\[min\\(80vh\\,36rem\\,100\\%\\)\\]{max-height:min(80vh,36rem,100%)}.max-h-\\[min\\(88vh\\,44rem\\,100\\%\\)\\]{max-height:min(88vh,44rem,100%)}.max-h-\\[min\\(92vh\\,52rem\\,100\\%\\)\\]{max-height:min(92vh,52rem,100%)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-5{min-height:calc(var(--spacing) * 5)}.min-h-7{min-height:calc(var(--spacing) * 7)}.min-h-8{min-height:calc(var(--spacing) * 8)}.min-h-9{min-height:calc(var(--spacing) * 9)}.min-h-10{min-height:calc(var(--spacing) * 10)}.min-h-11{min-height:calc(var(--spacing) * 11)}.min-h-12{min-height:calc(var(--spacing) * 12)}.min-h-32{min-height:calc(var(--spacing) * 32)}.min-h-36{min-height:calc(var(--spacing) * 36)}.min-h-40{min-height:calc(var(--spacing) * 40)}.min-h-48{min-height:calc(var(--spacing) * 48)}.min-h-64{min-height:calc(var(--spacing) * 64)}.min-h-\\[1\\.25rem\\]{min-height:1.25rem}.min-h-\\[3\\.25rem\\]{min-height:3.25rem}.min-h-\\[3rem\\]{min-height:3rem}.min-h-\\[7rem\\]{min-height:7rem}.min-h-\\[11rem\\]{min-height:11rem}.min-h-\\[14rem\\]{min-height:14rem}.min-h-\\[20rem\\]{min-height:20rem}.min-h-\\[27cqw\\]{min-height:27cqw}.min-h-\\[28rem\\]{min-height:28rem}.min-h-\\[30cqw\\]{min-height:30cqw}.min-h-\\[32cqw\\]{min-height:32cqw}.min-h-\\[33\\.5cqw\\]{min-height:33.5cqw}.min-h-\\[36rem\\]{min-height:36rem}.min-h-\\[38rem\\]{min-height:38rem}.min-h-\\[320px\\]{min-height:320px}.min-h-\\[460px\\]{min-height:460px}.min-h-\\[min\\(24vh\\,100\\%\\)\\]{min-height:min(24vh,100%)}.min-h-\\[min\\(28vh\\,100\\%\\)\\]{min-height:min(28vh,100%)}.min-h-\\[min\\(32vh\\,100\\%\\)\\]{min-height:min(32vh,100%)}.min-h-\\[min\\(36vh\\,100\\%\\)\\]{min-height:min(36vh,100%)}.min-h-\\[min\\(40vh\\,100\\%\\)\\]{min-height:min(40vh,100%)}.min-h-\\[var\\(--pc-size-input-height\\,2\\.25rem\\)\\]{min-height:var(--pc-size-input-height,2.25rem)}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.\\!w-7{width:calc(var(--spacing) * 7)!important}.\\!w-9{width:calc(var(--spacing) * 9)!important}.\\!w-10{width:calc(var(--spacing) * 10)!important}.\\!w-full{width:100%!important}.w-0{width:calc(var(--spacing) * 0)}.w-0\\.5{width:calc(var(--spacing) * .5)}.w-1\\.5{width:calc(var(--spacing) * 1.5)}.w-1\\/2{width:50%}.w-2{width:calc(var(--spacing) * 2)}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-2\\/3{width:66.6667%}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/4{width:75%}.w-3\\/5{width:60%}.w-4{width:calc(var(--spacing) * 4)}.w-4\\.5{width:calc(var(--spacing) * 4.5)}.w-4\\/5{width:80%}.w-5{width:calc(var(--spacing) * 5)}.w-6{width:calc(var(--spacing) * 6)}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-16{width:calc(var(--spacing) * 16)}.w-20{width:calc(var(--spacing) * 20)}.w-24{width:calc(var(--spacing) * 24)}.w-28{width:calc(var(--spacing) * 28)}.w-32{width:calc(var(--spacing) * 32)}.w-36{width:calc(var(--spacing) * 36)}.w-40{width:calc(var(--spacing) * 40)}.w-44{width:calc(var(--spacing) * 44)}.w-60{width:calc(var(--spacing) * 60)}.w-64{width:calc(var(--spacing) * 64)}.w-72{width:calc(var(--spacing) * 72)}.w-80{width:calc(var(--spacing) * 80)}.w-96{width:calc(var(--spacing) * 96)}.w-\\[0\\.7rem\\]{width:.7rem}.w-\\[0\\.9rem\\]{width:.9rem}.w-\\[0\\.75rem\\]{width:.75rem}.w-\\[0\\.85rem\\]{width:.85rem}.w-\\[1\\.1rem\\]{width:1.1rem}.w-\\[1\\.125rem\\]{width:1.125rem}.w-\\[1\\.3125rem\\]{width:1.3125rem}.w-\\[2\\.875rem\\]{width:2.875rem}.w-\\[4\\.125rem\\]{width:4.125rem}.w-\\[11rem\\]{width:11rem}.w-\\[16rem\\]{width:16rem}.w-\\[18px\\]{width:18px}.w-\\[18rem\\]{width:18rem}.w-\\[20rem\\]{width:20rem}.w-\\[22rem\\]{width:22rem}.w-\\[24rem\\]{width:24rem}.w-\\[26px\\]{width:26px}.w-\\[26rem\\]{width:26rem}.w-\\[28rem\\]{width:28rem}.w-\\[30rem\\]{width:30rem}.w-\\[34rem\\]{width:34rem}.w-\\[36\\%\\]{width:36%}.w-\\[36rem\\]{width:36rem}.w-\\[38rem\\]{width:38rem}.w-\\[40rem\\]{width:40rem}.w-\\[42rem\\]{width:42rem}.w-\\[44rem\\]{width:44rem}.w-\\[46rem\\]{width:46rem}.w-\\[60rem\\]{width:60rem}.w-\\[64rem\\]{width:64rem}.w-\\[68rem\\]{width:68rem}.w-\\[70\\%\\]{width:70%}.w-\\[70rem\\]{width:70rem}.w-\\[72rem\\]{width:72rem}.w-\\[76rem\\]{width:76rem}.w-\\[82\\%\\]{width:82%}.w-\\[85\\%\\]{width:85%}.w-\\[320px\\]{width:320px}.w-\\[360px\\]{width:360px}.w-\\[420px\\]{width:420px}.w-\\[520px\\]{width:520px}.w-\\[560px\\]{width:560px}.w-\\[620px\\]{width:620px}.w-\\[640px\\]{width:640px}.w-\\[680px\\]{width:680px}.w-\\[760px\\]{width:760px}.w-\\[860px\\]{width:860px}.w-\\[960px\\]{width:960px}.w-\\[calc\\(100\\%\\+1\\.5rem\\)\\]{width:calc(100% + 1.5rem)}.w-\\[calc\\(100\\%-var\\(--pc-payment-list-item-content-inset\\)\\)\\]{width:calc(100% - var(--pc-payment-list-item-content-inset))}.w-\\[calc\\(100vw-1\\.5rem\\)\\]{width:calc(100vw - 1.5rem)}.w-\\[min\\(28rem\\,calc\\(100vw-2rem\\)\\)\\]{width:min(28rem,100vw - 2rem)}.w-\\[min\\(30rem\\,calc\\(100vw-2rem\\)\\)\\]{width:min(30rem,100vw - 2rem)}.w-\\[min\\(34rem\\,calc\\(100vw-2rem\\)\\)\\]{width:min(34rem,100vw - 2rem)}.w-\\[min\\(90vw\\,20rem\\)\\]{width:min(90vw,20rem)}.w-\\[min\\(90vw\\,22rem\\)\\]{width:min(90vw,22rem)}.w-\\[min\\(90vw\\,24rem\\)\\]{width:min(90vw,24rem)}.w-\\[min\\(96vw\\,40rem\\)\\]{width:min(96vw,40rem)}.w-\\[min\\(98vw\\,48rem\\)\\]{width:min(98vw,48rem)}.w-\\[min\\(100\\%\\,32rem\\)\\]{width:min(100%,32rem)}.w-\\[min\\(100\\%\\,42rem\\)\\]{width:min(100%,42rem)}.w-\\[min\\(100\\%\\,48rem\\)\\]{width:min(100%,48rem)}.w-\\[min\\(100\\%\\,72rem\\)\\]{width:min(100%,72rem)}.w-\\[min\\(100\\%\\,96rem\\)\\]{width:min(100%,96rem)}.w-\\[min\\(100\\%\\,960px\\)\\]{width:min(100%,960px)}.w-\\[min\\(100vw-2rem\\,24rem\\)\\]{width:min(100vw - 2rem,24rem)}.w-\\[min\\(100vw-2rem\\,28rem\\)\\]{width:min(100vw - 2rem,28rem)}.w-\\[min\\(100vw-2rem\\,36rem\\)\\]{width:min(100vw - 2rem,36rem)}.w-\\[min\\(100vw-2rem\\,42rem\\)\\]{width:min(100vw - 2rem,42rem)}.w-\\[min\\(100vw-2rem\\,44rem\\)\\]{width:min(100vw - 2rem,44rem)}.w-\\[min\\(100vw-2rem\\,48rem\\)\\]{width:min(100vw - 2rem,48rem)}.w-\\[var\\(--pc-brand-display-mark-size\\,2rem\\)\\]{width:var(--pc-brand-display-mark-size,2rem)}.w-\\[var\\(--pc-logo-width\\,3rem\\)\\]{width:var(--pc-logo-width,3rem)}.w-\\[var\\(--pc-logo-width\\,5rem\\)\\]{width:var(--pc-logo-width,5rem)}.w-\\[var\\(--pc-size-bonus-summary-width\\,var\\(--pc-bonus-summary-width\\,fit-content\\)\\)\\]{width:var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,-moz-fit-content));width:var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,fit-content))}.w-\\[var\\(--pc-size-checkbox\\,1rem\\)\\]{width:var(--pc-size-checkbox,1rem)}.w-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{width:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))}.w-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,100\\%\\)\\)\\]{width:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,100%))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,1\\.25rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,1.25rem))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,2\\.5rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2.5rem))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2.25rem))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,2rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2rem))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,100\\%\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,100%))}.w-\\[var\\(--pc-size-payment-list-item-logo-width\\,3rem\\)\\]{width:var(--pc-size-payment-list-item-logo-width,3rem)}.w-\\[var\\(--pc-toast-progress\\)\\]{width:var(--pc-toast-progress)}.w-full{width:100%}.w-max{width:max-content}.w-px{width:1px}.max-w-2xl{max-width:var(--container-2xl)}.max-w-3xl{max-width:var(--container-3xl)}.max-w-4xl{max-width:var(--container-4xl)}.max-w-5xl{max-width:var(--container-5xl)}.max-w-52{max-width:calc(var(--spacing) * 52)}.max-w-\\[36rem\\]{max-width:36rem}.max-w-\\[60ch\\]{max-width:60ch}.max-w-\\[88rem\\]{max-width:88rem}.max-w-\\[96rem\\]{max-width:96rem}.max-w-\\[calc\\(100vw-1\\.5rem\\)\\]{max-width:calc(100vw - 1.5rem)}.max-w-\\[calc\\(100vw-2rem\\)\\]{max-width:calc(100vw - 2rem)}.max-w-\\[calc\\(100vw-16px\\)\\]{max-width:calc(100vw - 16px)}.max-w-\\[min\\(96vw\\,80rem\\)\\]{max-width:min(96vw,80rem)}.max-w-\\[var\\(--pc-size-bonus-summary-max-width\\,var\\(--pc-bonus-summary-max-width\\,100\\%\\)\\)\\]{max-width:var(--pc-size-bonus-summary-max-width,var(--pc-bonus-summary-max-width,100%))}.max-w-\\[var\\(--pc-size-cashier-max-width\\,36rem\\)\\]{max-width:var(--pc-size-cashier-max-width,36rem)}.max-w-\\[var\\(--pc-size-logo-mark-surface-max-width\\,var\\(--pc-size-logo-mark-max-width\\,55\\%\\)\\)\\]{max-width:var(--pc-size-logo-mark-surface-max-width,var(--pc-size-logo-mark-max-width,55%))}.max-w-full{max-width:100%}.max-w-md{max-width:var(--container-md)}.max-w-none{max-width:none}.max-w-sm{max-width:var(--container-sm)}.max-w-xl{max-width:var(--container-xl)}.max-w-xs{max-width:var(--container-xs)}.min-w-0{min-width:calc(var(--spacing) * 0)}.min-w-4\\.5{min-width:calc(var(--spacing) * 4.5)}.min-w-5{min-width:calc(var(--spacing) * 5)}.min-w-7{min-width:calc(var(--spacing) * 7)}.min-w-9{min-width:calc(var(--spacing) * 9)}.min-w-10{min-width:calc(var(--spacing) * 10)}.min-w-11{min-width:calc(var(--spacing) * 11)}.min-w-56{min-width:calc(var(--spacing) * 56)}.min-w-\\[3\\.25rem\\]{min-width:3.25rem}.min-w-\\[10ch\\]{min-width:10ch}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[14rem\\]{min-width:14rem}.min-w-\\[15rem\\]{min-width:15rem}.min-w-\\[16rem\\]{min-width:16rem}.min-w-\\[20rem\\]{min-width:20rem}.min-w-\\[22rem\\]{min-width:22rem}.min-w-\\[48rem\\]{min-width:48rem}.min-w-\\[56rem\\]{min-width:56rem}.min-w-\\[64rem\\]{min-width:64rem}.min-w-\\[72rem\\]{min-width:72rem}.min-w-\\[78rem\\]{min-width:78rem}.min-w-\\[84rem\\]{min-width:84rem}.min-w-\\[90rem\\]{min-width:90rem}.min-w-\\[92rem\\]{min-width:92rem}.min-w-\\[96rem\\]{min-width:96rem}.min-w-\\[104rem\\]{min-width:104rem}.min-w-\\[108rem\\]{min-width:108rem}.min-w-\\[min\\(90vw\\,24rem\\)\\]{min-width:min(90vw,24rem)}.flex-1{flex:1}.flex-auto{flex:auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-full{flex-basis:100%}.border-collapse{border-collapse:collapse}.\\[transform-origin\\:50\\%_92\\%\\]{transform-origin:50% 92%}.origin-center{transform-origin:50%}.-translate-x-0\\.5{--tw-translate-x:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-2{--tw-translate-x:calc(var(--spacing) * -2);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-full{--tw-translate-x:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0\\.5{--tw-translate-x:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-3{--tw-translate-x:calc(var(--spacing) * 3);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[18px\\]{--tw-translate-x:18px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-\\[19px\\]{--tw-translate-x:19px;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-full{--tw-translate-x:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\.5{--tw-translate-y:calc(var(--spacing) * -1.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1\\/2{--tw-translate-y:calc(calc(1 / 2 * 100%) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-3{--tw-translate-y:calc(var(--spacing) * -3);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-4{--tw-translate-y:calc(var(--spacing) * -4);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing) * 0);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-1{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[0\\.85rem\\]{--tw-translate-y:.85rem;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[min\\(22vh\\,9rem\\)\\]{--tw-translate-y:min(22vh, 9rem);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-full{--tw-translate-y:100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-px{--tw-translate-y:1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.scale-95{--tw-scale-x:95%;--tw-scale-y:95%;--tw-scale-z:95%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-100{--tw-scale-x:100%;--tw-scale-y:100%;--tw-scale-z:100%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-125{--tw-scale-x:125%;--tw-scale-y:125%;--tw-scale-z:125%;scale:var(--tw-scale-x) var(--tw-scale-y)}.scale-\\[0\\.985\\]{scale:.985}.-rotate-90{rotate:-90deg}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform-gpu{transform:translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both\\]{animation:.18s ease-out both pc-cashier-fullscreen-content-reveal}.animate-\\[pc-linear-progress-indeterminate_1\\.4s_ease-in-out_infinite\\]{animation:1.4s ease-in-out infinite pc-linear-progress-indeterminate}.animate-spin{animation:var(--animate-spin)}.cursor-default{cursor:default}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.resize{resize:both}.resize-none{resize:none}.resize-y{resize:vertical}.scroll-pb-\\[44px\\]{scroll-padding-bottom:44px}.list-inside{list-style-position:inside}.list-decimal{list-style-type:decimal}.list-disc{list-style-type:disc}.list-none{list-style-type:none}.appearance-auto{appearance:auto}.appearance-none{appearance:none}.\\[grid-template-columns\\:repeat\\(auto-fit\\,minmax\\(min\\(100\\%\\,12rem\\)\\,1fr\\)\\)\\]{grid-template-columns:repeat(auto-fit,minmax(min(100%,12rem),1fr))}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.grid-cols-\\[1fr_15rem\\]{grid-template-columns:1fr 15rem}.grid-cols-\\[1fr_16rem\\]{grid-template-columns:1fr 16rem}.grid-cols-\\[1fr_auto_1fr\\]{grid-template-columns:1fr auto 1fr}.grid-cols-\\[7rem_repeat\\(5\\,minmax\\(8rem\\,1fr\\)\\)\\]{grid-template-columns:7rem repeat(5,minmax(8rem,1fr))}.grid-cols-\\[8rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:8rem minmax(0,1fr)}.grid-cols-\\[8rem_repeat\\(4\\,minmax\\(8\\.5rem\\,1fr\\)\\)\\]{grid-template-columns:8rem repeat(4,minmax(8.5rem,1fr))}.grid-cols-\\[8rem_repeat\\(8\\,minmax\\(8\\.5rem\\,1fr\\)\\)\\]{grid-template-columns:8rem repeat(8,minmax(8.5rem,1fr))}.grid-cols-\\[9rem_repeat\\(4\\,minmax\\(12rem\\,1fr\\)\\)\\]{grid-template-columns:9rem repeat(4,minmax(12rem,1fr))}.grid-cols-\\[9rem_repeat\\(4\\,minmax\\(14rem\\,1fr\\)\\)\\]{grid-template-columns:9rem repeat(4,minmax(14rem,1fr))}.grid-cols-\\[9rem_repeat\\(6\\,minmax\\(13rem\\,1fr\\)\\)\\]{grid-template-columns:9rem repeat(6,minmax(13rem,1fr))}.grid-cols-\\[9rem_repeat\\(8\\,minmax\\(8\\.5rem\\,1fr\\)\\)\\]{grid-template-columns:9rem repeat(8,minmax(8.5rem,1fr))}.grid-cols-\\[9rem_repeat\\(8\\,minmax\\(8rem\\,1fr\\)\\)\\]{grid-template-columns:9rem repeat(8,minmax(8rem,1fr))}.grid-cols-\\[auto_minmax\\(0\\,1fr\\)\\]{grid-template-columns:auto minmax(0,1fr)}.grid-cols-\\[auto_minmax\\(0\\,1fr\\)_auto\\]{grid-template-columns:auto minmax(0,1fr) auto}.grid-cols-\\[minmax\\(0\\,1fr\\)_fit-content\\(100\\%\\)\\]{grid-template-columns:minmax(0,1fr) fit-content(100%)}.grid-cols-\\[repeat\\(8\\,minmax\\(5rem\\,1fr\\)\\)\\]{grid-template-columns:repeat(8,minmax(5rem,1fr))}.grid-cols-\\[repeat\\(8\\,minmax\\(8rem\\,1fr\\)\\)\\]{grid-template-columns:repeat(8,minmax(8rem,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[auto_1fr\\]{grid-template-rows:auto 1fr}.grid-rows-\\[minmax\\(0\\,0\\.7fr\\)_auto_auto_minmax\\(0\\,1fr\\)\\]{grid-template-rows:minmax(0,.7fr) auto auto minmax(0,1fr)}.grid-rows-\\[minmax\\(0\\,0\\.45fr\\)_auto_auto_minmax\\(0\\,1fr\\)\\]{grid-template-rows:minmax(0,.45fr) auto auto minmax(0,1fr)}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-nowrap{flex-wrap:nowrap}.flex-wrap{flex-wrap:wrap}.place-items-center{place-items:center}.content-start{align-content:flex-start}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-around{justify-content:space-around}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-5{gap:calc(var(--spacing) * 5)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[0\\.125rem\\]{gap:.125rem}.gap-\\[0\\.1875rem\\]{gap:.1875rem}.gap-\\[var\\(--pc-brand-display-gap\\,0\\.5rem\\)\\]{gap:var(--pc-brand-display-gap,.5rem)}.gap-\\[var\\(--pc-sidebar-menu-section-gap\\,8px\\)\\]{gap:var(--pc-sidebar-menu-section-gap,8px)}.gap-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{gap:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}.gap-\\[var\\(--pc-space-input-gap\\,0\\.75rem\\)\\]{gap:var(--pc-space-input-gap,.75rem)}.gap-\\[var\\(--pc-space-input-gap\\,0\\.625rem\\)\\]{gap:var(--pc-space-input-gap,.625rem)}.gap-\\[var\\(--pc-space-input-label-gap\\,0\\.25rem\\)\\]{gap:var(--pc-space-input-label-gap,.25rem)}.gap-\\[var\\(--pc-workspace-main-pane-gap\\,var\\(--pc-workspace-pane-gap\\,8px\\)\\)\\]{gap:var(--pc-workspace-main-pane-gap,var(--pc-workspace-pane-gap,8px))}.gap-\\[var\\(--pc-workspace-pane-gap\\,4px\\)\\]{gap:var(--pc-workspace-pane-gap,4px)}.gap-\\[var\\(--pc-workspace-pane-stack-gap-regular\\,8px\\)\\]{gap:var(--pc-workspace-pane-stack-gap-regular,8px)}.gap-\\[var\\(--pc-workspace-pane-stack-gap-relaxed\\,12px\\)\\]{gap:var(--pc-workspace-pane-stack-gap-relaxed,12px)}.gap-px{gap:1px}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-1\\.5>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1.5) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1.5) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-3>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 3) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 3) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-4>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-6>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-8>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)))}:where(.space-y-10>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 10) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 10) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-1{-moz-column-gap:calc(var(--spacing) * 1);column-gap:calc(var(--spacing) * 1)}.gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.gap-y-0{row-gap:calc(var(--spacing) * 0)}.gap-y-0\\.5{row-gap:calc(var(--spacing) * .5)}.gap-y-1{row-gap:calc(var(--spacing) * 1)}.gap-y-1\\.5{row-gap:calc(var(--spacing) * 1.5)}.gap-y-2{row-gap:calc(var(--spacing) * 2)}.gap-y-3{row-gap:calc(var(--spacing) * 3)}:where(.divide-y>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-top-style:var(--tw-border-style);border-top-width:calc(1px * var(--tw-divide-y-reverse));border-bottom-width:calc(1px * calc(1 - var(--tw-divide-y-reverse)))}:where(.divide-\\[var\\(--pc-color-depth-4\\)\\]>:not(:last-child)){border-color:var(--pc-color-depth-4)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.self-stretch{align-self:stretch}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.\\!overflow-visible{overflow:visible!important}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.\\[overflow-x\\:clip\\]{overflow-x:clip}.overflow-x-auto{overflow-x:auto}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-hidden{overflow-y:hidden}.overscroll-y-contain{overscroll-behavior-y:contain}.\\!rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-xl))!important}.rounded{border-radius:.25rem}.rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .2rem)}.rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.05rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .05rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .2rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.65rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .65rem)}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-\\[var\\(--pc-radius\\)\\]{border-radius:var(--pc-radius)}.rounded-\\[var\\(--pc-radius-2xl\\)\\]{border-radius:var(--pc-radius-2xl)}.rounded-\\[var\\(--pc-radius-3xl\\)\\]{border-radius:var(--pc-radius-3xl)}.rounded-\\[var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-payment-picker\\,var\\(--pc-radius-full\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-header,var(--pc-radius-payment-picker,var(--pc-radius-full)))}.rounded-\\[var\\(--pc-radius-accordion-item\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-item,var(--pc-radius-panel,var(--pc-radius-xl)))}.rounded-\\[var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-picker,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-bonus-summary\\,var\\(--pc-bonus-summary-radius\\,var\\(--pc-radius-payment-summary\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-summary,var(--pc-bonus-summary-radius,var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))))}.rounded-\\[var\\(--pc-radius-checkbox\\,var\\(--pc-radius-sm\\)\\)\\]{border-radius:var(--pc-radius-checkbox,var(--pc-radius-sm))}.rounded-\\[var\\(--pc-radius-credit-card-panel\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-credit-card-panel,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-full\\)\\]{border-radius:var(--pc-radius-full)}.rounded-\\[var\\(--pc-radius-input\\,var\\(--pc-radius-3xl\\)\\)\\]{border-radius:var(--pc-radius-input,var(--pc-radius-3xl))}.rounded-\\[var\\(--pc-radius-input-multiline\\,var\\(--pc-radius-input\\,var\\(--pc-radius-2xl\\)\\)\\)\\]{border-radius:var(--pc-radius-input-multiline,var(--pc-radius-input,var(--pc-radius-2xl)))}.rounded-\\[var\\(--pc-radius-lg\\)\\]{border-radius:var(--pc-radius-lg)}.rounded-\\[var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\]{border-radius:var(--pc-radius-list-item,var(--pc-radius-lg))}.rounded-\\[var\\(--pc-radius-logo-mark-surface\\,var\\(--pc-radius-logo-mark\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-logo-mark-surface,var(--pc-radius-logo-mark,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-md\\)\\]{border-radius:var(--pc-radius-md)}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-lg))}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-md\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-md))}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-sm\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-sm))}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-xl))}.rounded-\\[var\\(--pc-radius-payment-picker\\,var\\(--pc-radius-full\\)\\)\\]{border-radius:var(--pc-radius-payment-picker,var(--pc-radius-full))}.rounded-\\[var\\(--pc-radius-payment-summary\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-payment-type-picker,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-sm\\)\\]{border-radius:var(--pc-radius-sm)}.rounded-\\[var\\(--pc-radius-suggested-amount\\,var\\(--pc-radius-3xl\\)\\)\\]{border-radius:var(--pc-radius-suggested-amount,var(--pc-radius-3xl))}.rounded-\\[var\\(--pc-radius-workspace-main\\,var\\(--pc-radius-3xl\\)\\)\\]{border-radius:var(--pc-radius-workspace-main,var(--pc-radius-3xl))}.rounded-\\[var\\(--pc-radius-xl\\)\\]{border-radius:var(--pc-radius-xl)}.rounded-full{border-radius:2147483647px}.rounded-none{border-radius:0}.\\!rounded-t-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-top-left-radius:var(--pc-radius-panel,var(--pc-radius-xl))!important;border-top-right-radius:var(--pc-radius-panel,var(--pc-radius-xl))!important}.\\!rounded-t-none{border-top-left-radius:0!important;border-top-right-radius:0!important}.rounded-t-\\[var\\(--pc-radius-2xl\\)\\]{border-top-left-radius:var(--pc-radius-2xl);border-top-right-radius:var(--pc-radius-2xl)}.rounded-t-\\[var\\(--pc-radius-3xl\\)\\]{border-top-left-radius:var(--pc-radius-3xl);border-top-right-radius:var(--pc-radius-3xl)}.rounded-t-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-top-left-radius:var(--pc-radius-panel,var(--pc-radius-xl));border-top-right-radius:var(--pc-radius-panel,var(--pc-radius-xl))}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-l-\\[var\\(--pc-radius-3xl\\)\\]{border-top-left-radius:var(--pc-radius-3xl);border-bottom-left-radius:var(--pc-radius-3xl)}.rounded-l-\\[var\\(--pc-radius-full\\)\\]{border-top-left-radius:var(--pc-radius-full);border-bottom-left-radius:var(--pc-radius-full)}.rounded-r-\\[var\\(--pc-radius-3xl\\)\\]{border-top-right-radius:var(--pc-radius-3xl);border-bottom-right-radius:var(--pc-radius-3xl)}.rounded-r-\\[var\\(--pc-radius-full\\)\\]{border-top-right-radius:var(--pc-radius-full);border-bottom-right-radius:var(--pc-radius-full)}.\\!rounded-b-\\[var\\(--pc-radius-payment-summary\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-bottom-right-radius:var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))!important;border-bottom-left-radius:var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))!important}.\\!rounded-b-none{border-bottom-right-radius:0!important;border-bottom-left-radius:0!important}.rounded-b-\\[var\\(--pc-radius-3xl\\)\\]{border-bottom-right-radius:var(--pc-radius-3xl);border-bottom-left-radius:var(--pc-radius-3xl)}.rounded-b-\\[var\\(--pc-radius-lg\\)\\]{border-bottom-right-radius:var(--pc-radius-lg);border-bottom-left-radius:var(--pc-radius-lg)}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-\\[length\\:var\\(--pc-size-bonus-summary-border-width\\,var\\(--pc-bonus-summary-border-width\\,1px\\)\\)\\]{border-style:var(--tw-border-style);border-width:var(--pc-size-bonus-summary-border-width,var(--pc-bonus-summary-border-width,1px))}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-\\[color\\:var\\(--pc-color-toggle-border-checked\\,transparent\\)\\]{border-color:var(--pc-color-toggle-border-checked,transparent)}.border-\\[color\\:var\\(--pc-color-toggle-border-disabled\\,var\\(--pc-color-toggle-background-disabled\\,var\\(--pc-color-depth-4\\)\\)\\)\\]{border-color:var(--pc-color-toggle-border-disabled,var(--pc-color-toggle-background-disabled,var(--pc-color-depth-4)))}.border-\\[var\\(--pc-color-accordion-header-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-accordion-header-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-accordion-item-divider\\,var\\(--pc-color-border-weakest\\)\\)\\]{border-color:var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))}.border-\\[var\\(--pc-color-bonus-picker-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-bonus-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-bonus-picker-divider\\,var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\)\\]{border-color:var(--pc-color-bonus-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))}.border-\\[var\\(--pc-color-bonus-summary-border\\,var\\(--pc-bonus-summary-border-colour\\,var\\(--pc-color-text\\)\\)\\)\\]{border-color:var(--pc-color-bonus-summary-border,var(--pc-bonus-summary-border-colour,var(--pc-color-text)))}.border-\\[var\\(--pc-color-border\\)\\]{border-color:var(--pc-color-border)}.border-\\[var\\(--pc-color-border-weaker\\)\\]{border-color:var(--pc-color-border-weaker)}.border-\\[var\\(--pc-color-border-weakest\\)\\]{border-color:var(--pc-color-border-weakest)}.border-\\[var\\(--pc-color-card-border\\,var\\(--pc-color-depth-3\\)\\)\\]{border-color:var(--pc-color-card-border,var(--pc-color-depth-3))}.border-\\[var\\(--pc-color-control-border\\,var\\(--pc-color-control-background\\,var\\(--pc-color-transparent\\)\\)\\)\\]{border-color:var(--pc-color-control-border,var(--pc-color-control-background,var(--pc-color-transparent)))}.border-\\[var\\(--pc-color-credit-card-panel-border\\,var\\(--pc-color-panel-border\\,var\\(--pc-color-transparent\\)\\)\\)\\]{border-color:var(--pc-color-credit-card-panel-border,var(--pc-color-panel-border,var(--pc-color-transparent)))}.border-\\[var\\(--pc-color-depth-3\\)\\]{border-color:var(--pc-color-depth-3)}.border-\\[var\\(--pc-color-depth-4\\)\\]{border-color:var(--pc-color-depth-4)}.border-\\[var\\(--pc-color-dropdown-border\\,var\\(--pc-color-border-weaker\\)\\)\\]{border-color:var(--pc-color-dropdown-border,var(--pc-color-border-weaker))}.border-\\[var\\(--pc-color-input-border\\,var\\(--pc-color-border\\)\\)\\]{border-color:var(--pc-color-input-border,var(--pc-color-border))}.border-\\[var\\(--pc-color-input-checkbox-border\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-input-checkbox-border,var(--pc-color-input-focus-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-input-editor-border\\,var\\(--pc-color-input-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-input-editor-border,var(--pc-color-input-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-input-focus-border\\,var\\(--pc-color-input-focus-ring\\,var\\(--pc-color-text\\)\\)\\)\\]{border-color:var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))}.border-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]{border-color:var(--pc-color-input-invalid-border,var(--pc-color-input-border,var(--pc-color-danger-text)))}.border-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-checkbox-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]{border-color:var(--pc-color-input-invalid-border,var(--pc-color-input-checkbox-border,var(--pc-color-danger-text)))}.border-\\[var\\(--pc-color-interactive-prompt-border\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{border-color:var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))}.border-\\[var\\(--pc-color-interactive-prompt-border\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\]{border-color:var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest)))}.border-\\[var\\(--pc-color-interactive-prompt-border\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-transparent\\)\\)\\)\\]{border-color:var(--pc-color-interactive-prompt-border,var(--pc-color-interactive-prompt-background,var(--pc-color-transparent)))}.border-\\[var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\]{border-color:var(--pc-color-list-item-border,var(--pc-color-border))}.border-\\[var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-color:var(--pc-color-list-item-divider,var(--pc-color-depth-3))}.border-\\[var\\(--pc-color-navigation-list-border\\,var\\(--pc-color-depth-2\\)\\)\\]{border-color:var(--pc-color-navigation-list-border,var(--pc-color-depth-2))}.border-\\[var\\(--pc-color-panel-border\\,var\\(--pc-color-border\\)\\)\\]{border-color:var(--pc-color-panel-border,var(--pc-color-border))}.border-\\[var\\(--pc-color-panel-border\\,var\\(--pc-color-transparent\\)\\)\\]{border-color:var(--pc-color-panel-border,var(--pc-color-transparent))}.border-\\[var\\(--pc-color-payment-summary-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-color:var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))}.border-\\[var\\(--pc-color-payment-type-picker-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-payment-type-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-payment-type-picker-divider\\,var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\)\\]{border-color:var(--pc-color-payment-type-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))}.border-\\[var\\(--pc-color-surface\\)\\]{border-color:var(--pc-color-surface)}.border-\\[var\\(--pc-color-switcher-border\\,var\\(--pc-color-border-weaker\\)\\)\\]{border-color:var(--pc-color-switcher-border,var(--pc-color-border-weaker))}.border-\\[var\\(--pc-color-toolbar-border\\,var\\(--pc-color-border\\)\\)\\]{border-color:var(--pc-color-toolbar-border,var(--pc-color-border))}.border-\\[var\\(--pc-color-transparent\\)\\]{border-color:var(--pc-color-transparent)}.border-t-\\[var\\(--pc-color-payment-summary-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-top-color:var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))}.\\[background-color\\:var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-input-background,var(--pc-color-surface))}.\\[background-color\\:var\\(--pc-color-input-invalid-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background-color:var(--pc-color-input-invalid-background,var(--pc-color-input-background,var(--pc-color-surface)))}.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-depth-1\\)_55\\%\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-depth-1\\)_55\\%\\,var\\(--pc-color-surface\\)\\)\\]{background-color:color-mix(in srgb,var(--pc-color-depth-1) 55%,var(--pc-color-surface))}}.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_88\\%\\,var\\(--pc-color-depth-1\\)\\)\\]{background-color:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){.bg-\\[color\\:color-mix\\(in_srgb\\,var\\(--pc-color-surface\\)_88\\%\\,var\\(--pc-color-depth-1\\)\\)\\]{background-color:color-mix(in srgb,var(--pc-color-surface) 88%,var(--pc-color-depth-1))}}.bg-\\[color\\:var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-\\[var\\(--pc-color-accent\\)\\]{background-color:var(--pc-color-accent)}.bg-\\[var\\(--pc-color-backdrop\\)\\]{background-color:var(--pc-color-backdrop)}.bg-\\[var\\(--pc-color-background\\)\\]{background-color:var(--pc-color-background)}.bg-\\[var\\(--pc-color-control-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-control-background,var(--pc-color-surface))}.bg-\\[var\\(--pc-color-control-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background-color:var(--pc-color-control-background-muted,var(--pc-color-surface-weakest))}.bg-\\[var\\(--pc-color-credit-card-panel-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background-color:var(--pc-color-credit-card-panel-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.bg-\\[var\\(--pc-color-depth-1\\)\\]{background-color:var(--pc-color-depth-1)}.bg-\\[var\\(--pc-color-depth-2\\)\\]{background-color:var(--pc-color-depth-2)}.bg-\\[var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\]{background-color:var(--pc-color-input-text,var(--pc-color-text))}.bg-\\[var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\]{background-color:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent)))}.bg-\\[var\\(--pc-color-outline-surface\\,transparent\\)\\]{background-color:var(--pc-color-outline-surface,transparent)}.bg-\\[var\\(--pc-color-page-background\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background-color:var(--pc-color-page-background,var(--pc-color-surface-weakest))}.bg-\\[var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\]{background-color:var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))}.bg-\\[var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-panel-background,var(--pc-color-surface))}.bg-\\[var\\(--pc-color-primary\\)\\]{background-color:var(--pc-color-primary)}.bg-\\[var\\(--pc-color-secondary\\)\\]{background-color:var(--pc-color-secondary)}.bg-\\[var\\(--pc-color-success\\)\\]{background-color:var(--pc-color-success)}.bg-\\[var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-\\[var\\(--pc-color-surface-muted\\)\\]{background-color:var(--pc-color-surface-muted)}.bg-\\[var\\(--pc-color-surface-weaker\\)\\]{background-color:var(--pc-color-surface-weaker)}.bg-\\[var\\(--pc-color-surface-weakest\\)\\]{background-color:var(--pc-color-surface-weakest)}.bg-\\[var\\(--pc-color-text\\)\\]{background-color:var(--pc-color-text)}.bg-\\[var\\(--pc-color-toolbar-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\]{background-color:var(--pc-color-toolbar-background,var(--pc-color-outline-surface,transparent))}.bg-\\[var\\(--pc-color-toolbar-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-toolbar-background,var(--pc-color-surface))}.bg-\\[var\\(--pc-color-toolbar-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background-color:var(--pc-color-toolbar-background-muted,var(--pc-color-surface-weakest))}.bg-black{background-color:var(--color-black)}.bg-black\\/10{background-color:#0000001a}@supports (color:color-mix(in lab, red, red)){.bg-black\\/10{background-color:color-mix(in oklab, var(--color-black) 10%, transparent)}}.bg-emerald-400{background-color:var(--color-emerald-400)}.bg-inherit{background-color:inherit}.bg-transparent{background-color:#0000}.bg-white{background-color:var(--color-white)}.bg-clip-padding{background-clip:padding-box}.object-contain{-o-object-fit:contain;object-fit:contain}.object-right{-o-object-position:right;object-position:right}.p-0{padding:calc(var(--spacing) * 0)}.p-0\\.5{padding:calc(var(--spacing) * .5)}.p-1{padding:calc(var(--spacing) * 1)}.p-1\\.5{padding:calc(var(--spacing) * 1.5)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-3{padding:calc(var(--spacing) * 3)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-4{padding:calc(var(--spacing) * 4)}.p-5{padding:calc(var(--spacing) * 5)}.p-6{padding:calc(var(--spacing) * 6)}.p-8{padding:calc(var(--spacing) * 8)}.p-10{padding:calc(var(--spacing) * 10)}.p-\\[1\\.375rem\\]{padding:1.375rem}.p-\\[var\\(--pc-size-input-focus-ring\\,3px\\)\\]{padding:var(--pc-size-input-focus-ring,3px)}.p-\\[var\\(--pc-workspace-drawer-content-padding\\,8px\\)\\]{padding:var(--pc-workspace-drawer-content-padding,8px)}.p-\\[var\\(--pc-workspace-main-pane-padding-resolved\\)\\]{padding:var(--pc-workspace-main-pane-padding-resolved)}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-0\\.5{padding-inline:calc(var(--spacing) * .5)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-\\[3px\\]{padding-inline:3px}.px-\\[var\\(--pc-payment-list-item-inline-padding\\)\\]{padding-inline:var(--pc-payment-list-item-inline-padding)}.px-\\[var\\(--pc-size-input-focus-ring\\,3px\\)\\]{padding-inline:var(--pc-size-input-focus-ring,3px)}.px-\\[var\\(--pc-space-bonus-summary-padding-x\\,var\\(--pc-bonus-summary-padding-x\\,1rem\\)\\)\\]{padding-inline:var(--pc-space-bonus-summary-padding-x,var(--pc-bonus-summary-padding-x,1rem))}.px-\\[var\\(--pc-space-input-padding-x\\,0\\.875rem\\)\\]{padding-inline:var(--pc-space-input-padding-x,.875rem)}.px-\\[var\\(--pc-workspace-main-pane-padding-resolved\\)\\]{padding-inline:var(--pc-workspace-main-pane-padding-resolved)}.py-0{padding-block:calc(var(--spacing) * 0)}.py-0\\.5{padding-block:calc(var(--spacing) * .5)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-6{padding-block:calc(var(--spacing) * 6)}.py-7{padding-block:calc(var(--spacing) * 7)}.py-\\[calc\\(var\\(--pc-space-input-padding-y\\,0\\.5rem\\)\\*0\\.75\\)\\]{padding-block:calc(var(--pc-space-input-padding-y,.5rem) * .75)}.py-\\[var\\(--pc-space-bonus-summary-padding-y\\,var\\(--pc-bonus-summary-padding-y\\,0\\.625rem\\)\\)\\]{padding-block:var(--pc-space-bonus-summary-padding-y,var(--pc-bonus-summary-padding-y,.625rem))}.py-\\[var\\(--pc-space-input-padding-y\\,0\\.5rem\\)\\]{padding-block:var(--pc-space-input-padding-y,.5rem)}.py-px{padding-block:1px}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-0\\.5{padding-top:calc(var(--spacing) * .5)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-3\\.5{padding-top:calc(var(--spacing) * 3.5)}.pt-4{padding-top:calc(var(--spacing) * 4)}.pt-4\\.5{padding-top:calc(var(--spacing) * 4.5)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pt-6{padding-top:calc(var(--spacing) * 6)}.pt-\\[var\\(--pc-workspace-action-bar-clearance\\,12px\\)\\]{padding-top:var(--pc-workspace-action-bar-clearance,12px)}.pr-0{padding-right:calc(var(--spacing) * 0)}.pr-0\\.5{padding-right:calc(var(--spacing) * .5)}.pr-1{padding-right:calc(var(--spacing) * 1)}.pr-1\\.5{padding-right:calc(var(--spacing) * 1.5)}.pr-2{padding-right:calc(var(--spacing) * 2)}.pr-2\\.5{padding-right:calc(var(--spacing) * 2.5)}.pr-3{padding-right:calc(var(--spacing) * 3)}.pr-4{padding-right:calc(var(--spacing) * 4)}.pr-6{padding-right:calc(var(--spacing) * 6)}.pr-8{padding-right:calc(var(--spacing) * 8)}.pr-10{padding-right:calc(var(--spacing) * 10)}.pr-12{padding-right:calc(var(--spacing) * 12)}.pr-16{padding-right:calc(var(--spacing) * 16)}.pr-24{padding-right:calc(var(--spacing) * 24)}.pr-28{padding-right:calc(var(--spacing) * 28)}.pr-\\[var\\(--pc-payment-list-item-panel-action-inset\\)\\]{padding-right:var(--pc-payment-list-item-panel-action-inset)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-0\\.5{padding-bottom:calc(var(--spacing) * .5)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-3\\.5{padding-bottom:calc(var(--spacing) * 3.5)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-8{padding-bottom:calc(var(--spacing) * 8)}.pb-\\[var\\(--pc-panel-edge-inset\\,0px\\)\\]{padding-bottom:var(--pc-panel-edge-inset,0px)}.pb-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{padding-bottom:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}.pb-\\[var\\(--pc-workspace-main-pane-padding-resolved\\)\\]{padding-bottom:var(--pc-workspace-main-pane-padding-resolved)}.pl-0{padding-left:calc(var(--spacing) * 0)}.pl-1{padding-left:calc(var(--spacing) * 1)}.pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}.pl-2{padding-left:calc(var(--spacing) * 2)}.pl-2\\.5{padding-left:calc(var(--spacing) * 2.5)}.pl-3{padding-left:calc(var(--spacing) * 3)}.pl-4{padding-left:calc(var(--spacing) * 4)}.pl-5{padding-left:calc(var(--spacing) * 5)}.pl-6{padding-left:calc(var(--spacing) * 6)}.pl-14{padding-left:calc(var(--spacing) * 14)}.pl-\\[0\\.9rem\\]{padding-left:.9rem}.pl-\\[0\\.45rem\\]{padding-left:.45rem}.pl-\\[var\\(--pc-payment-list-item-panel-action-inset\\)\\]{padding-left:var(--pc-payment-list-item-panel-action-inset)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.align-middle{vertical-align:middle}.align-top{vertical-align:top}.font-mono{font-family:var(--font-mono)}.\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.6rem\\]{font-size:.6rem}.text-\\[0\\.625rem\\]{font-size:.625rem}.text-\\[0\\.5625rem\\]{font-size:.5625rem}.text-\\[0\\.6875rem\\]{font-size:.6875rem}.text-\\[1\\.05rem\\]{font-size:1.05rem}.text-\\[10px\\]{font-size:10px}.text-\\[11px\\]{font-size:11px}.text-\\[13px\\]{font-size:13px}.text-\\[length\\:var\\(--pc-brand-display-label-size\\,1\\.5rem\\)\\]{font-size:var(--pc-brand-display-label-size,1.5rem)}.text-\\[length\\:var\\(--pc-code-editor-font-size\\,var\\(--pc-font-code-size\\)\\)\\]{font-size:var(--pc-code-editor-font-size,var(--pc-font-code-size))}.text-\\[length\\:var\\(--pc-font-size-bonus-summary-mobile\\,var\\(--pc-bonus-summary-mobile-font-size\\,1rem\\)\\)\\]{font-size:var(--pc-font-size-bonus-summary-mobile,var(--pc-bonus-summary-mobile-font-size,1rem))}.text-\\[length\\:var\\(--pc-font-size-input\\,16px\\)\\]{font-size:var(--pc-font-size-input,16px)}.leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-6{--tw-leading:calc(var(--spacing) * 6);line-height:calc(var(--spacing) * 6)}.leading-\\[var\\(--pc-code-editor-line-height\\,20px\\)\\]{--tw-leading:var(--pc-code-editor-line-height,20px);line-height:var(--pc-code-editor-line-height,20px)}.leading-\\[var\\(--pc-font-line-height-input\\,20px\\)\\]{--tw-leading:var(--pc-font-line-height-input,20px);line-height:var(--pc-font-line-height-input,20px)}.leading-none{--tw-leading:1;line-height:1}.leading-relaxed{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.\\!font-medium{--tw-font-weight:var(--font-weight-medium)!important;font-weight:var(--font-weight-medium)!important}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-\\[0\\.2em\\]{--tw-tracking:.2em;letter-spacing:.2em}.tracking-\\[0\\.12em\\]{--tw-tracking:.12em;letter-spacing:.12em}.tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-balance{text-wrap:balance}.break-normal{overflow-wrap:normal;word-break:normal}.\\[overflow-wrap\\:anywhere\\]{overflow-wrap:anywhere}.\\[overflow-wrap\\:normal\\]{overflow-wrap:normal}.break-words{overflow-wrap:break-word}.wrap-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.text-ellipsis{text-overflow:ellipsis}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_68\\%\\,transparent\\)\\]{color:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_68\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--pc-color-text) 68%,transparent)}}.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_70\\%\\,transparent\\)\\]{color:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.text-\\[color-mix\\(in_srgb\\,var\\(--pc-color-text\\)_70\\%\\,transparent\\)\\]{color:color-mix(in srgb,var(--pc-color-text) 70%,transparent)}}.text-\\[color\\:inherit\\]{color:inherit}.text-\\[var\\(--pc-color-accordion-header-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-accordion-header-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-accordion-header-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-bonus-picker-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-bonus-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-summary-text\\,var\\(--pc-bonus-summary-colour\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-bonus-summary-text,var(--pc-bonus-summary-colour,var(--pc-color-text)))}.text-\\[var\\(--pc-color-border\\)\\]{color:var(--pc-color-border)}.text-\\[var\\(--pc-color-border-weaker\\)\\]{color:var(--pc-color-border-weaker)}.text-\\[var\\(--pc-color-card-text\\,var\\(--pc-color-primary\\)\\)\\]{color:var(--pc-color-card-text,var(--pc-color-primary))}.text-\\[var\\(--pc-color-card-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-card-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-card-text\\,var\\(--pc-color-text-inverted\\)\\)\\]{color:var(--pc-color-card-text,var(--pc-color-text-inverted))}.text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-control-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-credit-card-panel-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-credit-card-panel-text,var(--pc-color-panel-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-danger\\)\\]{color:var(--pc-color-danger)}.text-\\[var\\(--pc-color-danger-text\\)\\]{color:var(--pc-color-danger-text)}.text-\\[var\\(--pc-color-depth-5\\)\\]{color:var(--pc-color-depth-5)}.text-\\[var\\(--pc-color-input-checkbox-icon\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{color:var(--pc-color-input-checkbox-icon,var(--pc-color-input-background,var(--pc-color-surface)))}.text-\\[var\\(--pc-color-input-disabled-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-input-disabled-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-input-error-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-input-error-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-input-helper-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-input-helper-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-input-icon\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-input-icon,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-input-invalid-text\\,var\\(--pc-color-input-error-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-input-invalid-text,var(--pc-color-input-error-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-input-label-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-input-label-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-input-label-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-input-label-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-input-placeholder\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-input-placeholder,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-input-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface\\)\\)\\]{color:var(--pc-color-interactive-prompt-background,var(--pc-color-surface))}.text-\\[var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface-weakest\\)\\)\\]{color:var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest))}.text-\\[var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-transparent\\)\\)\\]{color:var(--pc-color-interactive-prompt-background,var(--pc-color-transparent))}.text-\\[var\\(--pc-color-interactive-prompt-muted-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-interactive-prompt-muted-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-interactive-prompt-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-interactive-prompt-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-list-item-description-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-logo-mark-surface-text\\,var\\(--pc-color-logo-mark-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-logo-mark-surface-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-panel-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-payment-method-switcher-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-payment-method-switcher-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-payment-method-switcher-text-active\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text))}.text-\\[var\\(--pc-color-payment-summary-label-text\\,var\\(--pc-color-payment-summary-row-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-payment-summary-label-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-payment-summary-row-text\\,var\\(--pc-color-payment-summary-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-payment-summary-row-text,var(--pc-color-payment-summary-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-payment-summary-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-payment-summary-text,var(--pc-color-panel-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-payment-summary-value-text\\,var\\(--pc-color-payment-summary-row-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-payment-summary-value-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-payment-summary-value-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-payment-summary-value-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-payment-type-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-payment-type-picker-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-payment-type-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-primary-text\\)\\]{color:var(--pc-color-primary-text)}.text-\\[var\\(--pc-color-progress-bar-text\\,var\\(--pc-linear-progress-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-progress-bar-text,var(--pc-linear-progress-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-secondary\\)\\]{color:var(--pc-color-secondary)}.text-\\[var\\(--pc-color-secondary\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-secondary,var(--pc-color-text))}.text-\\[var\\(--pc-color-success\\)\\]{color:var(--pc-color-success)}.text-\\[var\\(--pc-color-success-text\\)\\]{color:var(--pc-color-success-text)}.text-\\[var\\(--pc-color-success-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-success-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-surface\\)\\]{color:var(--pc-color-surface)}.text-\\[var\\(--pc-color-text\\)\\]{color:var(--pc-color-text)}.text-\\[var\\(--pc-color-text-inverted\\)\\]{color:var(--pc-color-text-inverted)}.text-\\[var\\(--pc-color-text-muted\\)\\]{color:var(--pc-color-text-muted)}.text-\\[var\\(--pc-color-text-muted\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-text-muted,var(--pc-color-text))}.text-\\[var\\(--pc-color-text-secondary\\)\\]{color:var(--pc-color-text-secondary)}.text-\\[var\\(--pc-color-toggle-icon-checked\\,var\\(--pc-color-toggle-thumb-checked\\,var\\(--pc-color-toggle-thumb-checked-surface\\,var\\(--pc-color-toggle-thumb\\,var\\(--pc-color-toggle-thumb-surface\\,var\\(--pc-color-credit-card-toggle-thumb-surface\\,var\\(--pc-color-neutral\\)\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-toggle-icon-checked,var(--pc-color-toggle-thumb-checked,var(--pc-color-toggle-thumb-checked-surface,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral)))))))}.text-\\[var\\(--pc-color-toolbar-muted-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-toolbar-muted-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-toolbar-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-toolbar-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-transparent\\)\\]{color:var(--pc-color-transparent)}.text-\\[var\\(--pc-text-inverted-80\\,var\\(--pc-color-surface\\)\\)\\]{color:var(--pc-text-inverted-80,var(--pc-color-surface))}.text-current{color:currentColor}.text-inherit{color:inherit}.text-neutral-500{color:var(--color-neutral-500)}.text-red-300{color:var(--color-red-300)}.text-red-600{color:var(--color-red-600)}.text-slate-400{color:var(--color-slate-400)}.text-transparent{color:#0000}.text-white{color:var(--color-white)}.uppercase{text-transform:uppercase}.italic{font-style:italic}.\\[font-variant-numeric\\:tabular-nums\\]{font-variant-numeric:tabular-nums}.underline{text-decoration-line:underline}.decoration-\\[var\\(--pc-color-text-muted\\)\\]{-webkit-text-decoration-color:var(--pc-color-text-muted);text-decoration-color:var(--pc-color-text-muted)}.underline-offset-2{text-underline-offset:2px}.underline-offset-4{text-underline-offset:4px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.caret-\\[var\\(--pc-color-input-invalid-text\\,var\\(--pc-color-input-error-text\\,var\\(--pc-color-text\\)\\)\\)\\]{caret-color:var(--pc-color-input-invalid-text,var(--pc-color-input-error-text,var(--pc-color-text)))}.caret-\\[var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\]{caret-color:var(--pc-color-input-text,var(--pc-color-text))}.caret-\\[var\\(--pc-color-text\\)\\]{caret-color:var(--pc-color-text)}.opacity-0{opacity:0}.opacity-50{opacity:.5}.opacity-55{opacity:.55}.opacity-60{opacity:.6}.opacity-70{opacity:.7}.opacity-80{opacity:.8}.opacity-85{opacity:.85}.opacity-95{opacity:.95}.opacity-100{opacity:1}.opacity-\\[var\\(--pc-opacity-logo-mark-surface-image\\,var\\(--pc-opacity-logo-mark-image\\,1\\)\\)\\]{opacity:var(--pc-opacity-logo-mark-surface-image,var(--pc-opacity-logo-mark-image,1))}.mix-blend-screen{mix-blend-mode:screen}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px var(--tw-shadow-color,#00000040);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[inset_0_0_0_0_var\\(--pc-color-transparent\\)\\]{--tw-shadow:inset 0 0 0 0 var(--tw-shadow-color,var(--pc-color-transparent));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[var\\(--pc-shadow-sm\\)\\]{--tw-shadow:var(--pc-shadow-sm);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-\\[var\\(--pc-shadow-xs\\)\\]{--tw-shadow:var(--pc-shadow-xs);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,#0000001a), 0 4px 6px -4px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.shadow-none{--tw-shadow:0 0 #0000;box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring-\\[length\\:var\\(--pc-size-logo-mark-surface-border-width\\,var\\(--pc-size-logo-mark-border-width\\,1px\\)\\)\\]{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(var(--pc-size-logo-mark-surface-border-width,var(--pc-size-logo-mark-border-width,1px)) + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-focus-ring,var(--pc-color-input-focus-border,var(--pc-color-text)))}@supports (color:color-mix(in lab, red, red)){.\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-focus-ring,color-mix(in srgb,var(--pc-color-input-focus-border,var(--pc-color-text)) 26%,transparent))}}.\\[--tw-shadow-color\\:var\\(--pc-color-backdrop\\)\\]{--tw-shadow-color:var(--pc-color-backdrop)}.ring-\\[var\\(--pc-color-logo-mark-surface-border\\,var\\(--pc-color-logo-mark-border\\,transparent\\)\\)\\]{--tw-ring-color:var(--pc-color-logo-mark-surface-border,var(--pc-color-logo-mark-border,transparent))}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.outline-0{outline-style:var(--tw-outline-style);outline-width:0}.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-2{outline-style:var(--tw-outline-style);outline-width:2px}.outline-3{outline-style:var(--tw-outline-style);outline-width:3px}.outline-offset-0{outline-offset:0px}.outline-offset-2{outline-offset:2px}.outline-offset-3{outline-offset:3px}.outline-offset-\\[2\\.5px\\]{outline-offset:2.5px}.outline-\\[var\\(--pc-color-accordion-header-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-accordion-header-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.outline-\\[var\\(--pc-color-accordion-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\]{outline-color:var(--pc-color-accordion-item-border-selected,var(--pc-color-secondary))}.outline-\\[var\\(--pc-color-bonus-picker-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-bonus-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.outline-\\[var\\(--pc-color-control-outline\\,var\\(--pc-color-transparent\\)\\)\\]{outline-color:var(--pc-color-control-outline,var(--pc-color-transparent))}.outline-\\[var\\(--pc-color-danger\\)\\]{outline-color:var(--pc-color-danger)}.outline-\\[var\\(--pc-color-input-focus-ring\\,var\\(--pc-color-text\\)\\)\\]{outline-color:var(--pc-color-input-focus-ring,var(--pc-color-text))}.outline-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]{outline-color:var(--pc-color-input-invalid-border,var(--pc-color-input-border,var(--pc-color-danger-text)))}.outline-\\[var\\(--pc-color-interactive-prompt-outline\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{outline-color:var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-surface)))}.outline-\\[var\\(--pc-color-interactive-prompt-outline\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\]{outline-color:var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest)))}.outline-\\[var\\(--pc-color-interactive-prompt-outline\\,var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-transparent\\)\\)\\)\\]{outline-color:var(--pc-color-interactive-prompt-outline,var(--pc-color-interactive-prompt-background,var(--pc-color-transparent)))}.outline-\\[var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\]{outline-color:var(--pc-color-list-item-border-selected,var(--pc-color-secondary))}.outline-\\[var\\(--pc-color-payment-type-picker-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-payment-type-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.outline-\\[var\\(--pc-color-secondary\\)\\]{outline-color:var(--pc-color-secondary)}.outline-\\[var\\(--pc-color-warning\\)\\]{outline-color:var(--pc-color-warning)}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.\\[filter\\:saturate\\(0\\.72\\)_grayscale\\(0\\.18\\)\\]{filter:saturate(.72)grayscale(.18)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px);-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\,border-color\\,box-shadow\\]{transition-property:background-color,border-color,box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\,color\\,transform\\]{transition-property:background-color,color,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[grid-template-rows\\,opacity\\]{transition-property:grid-template-rows,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[height\\,opacity\\]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[left\\,width\\]{transition-property:left,width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[left\\]{transition-property:left;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[opacity\\,color\\]{transition-property:opacity,color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[opacity\\,transform\\]{transition-property:opacity,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[stroke-dashoffset\\]{transition-property:stroke-dashoffset;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[top\\,height\\]{transition-property:top,height;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[top\\,left\\,width\\,height\\]{transition-property:top,left,width,height;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[transform\\,opacity\\]{transition-property:transform,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[translate\\,background-color\\]{transition-property:translate,background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\,transform\\]{transition-property:width,transform;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[width\\]{transition-property:width;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-all{transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-none{transition-property:none}.delay-\\[35ms\\]{transition-delay:35ms}.delay-\\[90ms\\]{transition-delay:90ms}.duration-60{--tw-duration:60ms;transition-duration:60ms}.duration-120{--tw-duration:.12s;transition-duration:.12s}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-180{--tw-duration:.18s;transition-duration:.18s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-500{--tw-duration:.5s;transition-duration:.5s}.duration-\\[100ms\\]{--tw-duration:.1s;transition-duration:.1s}.duration-\\[120ms\\]{--tw-duration:.12s;transition-duration:.12s}.duration-\\[140ms\\]{--tw-duration:.14s;transition-duration:.14s}.duration-\\[150ms\\]{--tw-duration:.15s;transition-duration:.15s}.duration-\\[180ms\\]{--tw-duration:.18s;transition-duration:.18s}.duration-\\[220ms\\]{--tw-duration:.22s;transition-duration:.22s}.duration-\\[240ms\\]{--tw-duration:.24s;transition-duration:.24s}.duration-\\[250ms\\]{--tw-duration:.25s;transition-duration:.25s}.duration-\\[260ms\\]{--tw-duration:.26s;transition-duration:.26s}.duration-\\[320ms\\]{--tw-duration:.32s;transition-duration:.32s}.duration-\\[360ms\\]{--tw-duration:.36s;transition-duration:.36s}.duration-\\[440ms\\]{--tw-duration:.44s;transition-duration:.44s}.duration-\\[520ms\\]{--tw-duration:.52s;transition-duration:.52s}.ease-\\[cubic-bezier\\(0\\.2\\,0\\.8\\,0\\.2\\,1\\)\\]{--tw-ease:cubic-bezier(.2,.8,.2,1);transition-timing-function:cubic-bezier(.2,.8,.2,1)}.ease-\\[cubic-bezier\\(0\\.22\\,1\\,0\\.36\\,1\\)\\]{--tw-ease:cubic-bezier(.22,1,.36,1);transition-timing-function:cubic-bezier(.22,1,.36,1)}.ease-\\[cubic-bezier\\(0\\.38\\,0\\.62\\,0\\.2\\,1\\)\\]{--tw-ease:cubic-bezier(.38,.62,.2,1);transition-timing-function:cubic-bezier(.38,.62,.2,1)}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.\\[will-change\\:translate\\,background-color\\]{will-change:translate,background-color}.will-change-\\[opacity\\,transform\\]{will-change:opacity,transform}.will-change-\\[stroke-dashoffset\\]{will-change:stroke-dashoffset}.will-change-\\[transform\\,width\\]{will-change:transform,width}.will-change-transform{will-change:transform}.\\[contain\\:layout_paint_style\\]{contain:layout paint style}.\\[contain\\:paint\\]{contain:paint}.outline-none{--tw-outline-style:none;outline-style:none}.select-all{-webkit-user-select:all;user-select:all}.select-none{-webkit-user-select:none;user-select:none}.\\[--pc-autofill-surface\\:var\\(--pc-color-input-autofill-background\\)\\]{--pc-autofill-surface:var(--pc-color-input-autofill-background)}.\\[--pc-code-editor-font-size\\:0\\.875rem\\]{--pc-code-editor-font-size:.875rem}.\\[--pc-code-editor-line-height\\:20px\\]{--pc-code-editor-line-height:20px}.\\[--pc-color-button-text\\:var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{--pc-color-button-text:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.\\[--pc-color-control-background-active\\:var\\(--pc-color-button-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]{--pc-color-control-background-active:var(--pc-color-button-background-active,var(--pc-color-surface-strongest))}.\\[--pc-color-control-background-active\\:var\\(--pc-color-suggested-amount-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]{--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))}.\\[--pc-color-control-background-disabled\\:var\\(--pc-color-button-background-disabled\\,var\\(--pc-color-surface-strongest\\)\\)\\]{--pc-color-control-background-disabled:var(--pc-color-button-background-disabled,var(--pc-color-surface-strongest))}.\\[--pc-color-control-background-hover\\:var\\(--pc-color-button-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background-hover:var(--pc-color-button-background-hover,var(--pc-color-surface-weaker))}.\\[--pc-color-control-background-hover\\:var\\(--pc-color-suggested-amount-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))}.\\[--pc-color-control-background\\:var\\(--pc-color-button-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-input-background,var(--pc-color-surface)))}.\\[--pc-color-control-background\\:var\\(--pc-color-button-background\\,var\\(--pc-color-surface\\)\\)\\]{--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-surface))}.\\[--pc-color-control-background\\:var\\(--pc-color-suggested-amount-background\\,var\\(--pc-color-surface\\)\\)\\]{--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))}.\\[--pc-color-control-background\\:var\\(--pc-color-suggested-amount-background-active\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))}.\\[--pc-color-control-border\\:var\\(--pc-color-button-border\\,var\\(--pc-color-border\\)\\)\\]{--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-border))}.\\[--pc-color-control-border\\:var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\]{--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))}.\\[--pc-color-control-outline\\:var\\(--pc-color-button-outline\\,var\\(--pc-color-transparent\\)\\)\\]{--pc-color-control-outline:var(--pc-color-button-outline,var(--pc-color-transparent))}.\\[--pc-color-control-text-disabled\\:var\\(--pc-color-button-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\]{--pc-color-control-text-disabled:var(--pc-color-button-text-disabled,var(--pc-color-text-muted))}.\\[--pc-color-control-text\\:var\\(--pc-color-button-text\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\]{--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-input-text,var(--pc-color-text)))}.\\[--pc-color-control-text\\:var\\(--pc-color-button-text\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-text))}.\\[--pc-color-control-text\\:var\\(--pc-color-suggested-amount-text\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))}.\\[--pc-color-control-text\\:var\\(--pc-color-suggested-amount-text-active\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))}.\\[--pc-color-credit-card-toggle-thumb-surface\\:color-mix\\(in_srgb\\,var\\(--pc-color-credit-card-panel-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)_30\\%\\,white_70\\%\\)\\]{--pc-color-credit-card-toggle-thumb-surface:var(--pc-color-credit-card-panel-background,var(--pc-color-panel-background,var(--pc-color-surface)))}@supports (color:color-mix(in lab, red, red)){.\\[--pc-color-credit-card-toggle-thumb-surface\\:color-mix\\(in_srgb\\,var\\(--pc-color-credit-card-panel-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)_30\\%\\,white_70\\%\\)\\]{--pc-color-credit-card-toggle-thumb-surface:color-mix(in srgb,var(--pc-color-credit-card-panel-background,var(--pc-color-panel-background,var(--pc-color-surface))) 30%,white 70%)}}.\\[--pc-color-input-background-hover\\:transparent\\]{--pc-color-input-background-hover:transparent}.\\[--pc-color-input-background\\:transparent\\]{--pc-color-input-background:transparent}.\\[--pc-color-logo-mark-surface-background\\:var\\(--pc-color-bonus-logo-background\\,var\\(--pc-color-logo-mark-background\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-background:var(--pc-color-bonus-logo-background,var(--pc-color-logo-mark-background,transparent))}.\\[--pc-color-logo-mark-surface-background\\:var\\(--pc-color-payment-type-logo-background\\,var\\(--pc-color-logo-mark-background\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-background:var(--pc-color-payment-type-logo-background,var(--pc-color-logo-mark-background,transparent))}.\\[--pc-color-logo-mark-surface-border\\:var\\(--pc-color-bonus-logo-border\\,var\\(--pc-color-logo-mark-border\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-border:var(--pc-color-bonus-logo-border,var(--pc-color-logo-mark-border,transparent))}.\\[--pc-color-logo-mark-surface-border\\:var\\(--pc-color-payment-type-logo-border\\,var\\(--pc-color-logo-mark-border\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-border:var(--pc-color-payment-type-logo-border,var(--pc-color-logo-mark-border,transparent))}.\\[--pc-color-logo-mark-surface-text\\:var\\(--pc-color-bonus-logo-text\\,var\\(--pc-color-logo-mark-text\\,var\\(--pc-color-text\\)\\)\\)\\]{--pc-color-logo-mark-surface-text:var(--pc-color-bonus-logo-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))}.\\[--pc-color-logo-mark-surface-text\\:var\\(--pc-color-payment-type-logo-text\\,var\\(--pc-color-logo-mark-text\\,var\\(--pc-color-text\\)\\)\\)\\]{--pc-color-logo-mark-surface-text:var(--pc-color-payment-type-logo-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))}.\\[--pc-color-navigation-list-border\\:var\\(--pc-color-payment-method-switcher-border\\,var\\(--pc-color-depth-2\\)\\)\\]{--pc-color-navigation-list-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-depth-2))}.\\[--pc-color-navigation-list-indicator\\:var\\(--pc-color-payment-method-switcher-indicator\\,var\\(--pc-color-payment-method-switcher-background-active\\,var\\(--pc-color-secondary\\)\\)\\)\\]{--pc-color-navigation-list-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))}.\\[--pc-color-switcher-border\\:var\\(--pc-color-payment-method-switcher-border\\,var\\(--pc-color-border-weaker\\)\\)\\]{--pc-color-switcher-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-border-weaker))}.\\[--pc-color-switcher-indicator\\:var\\(--pc-color-payment-method-switcher-indicator\\,var\\(--pc-color-payment-method-switcher-background-active\\,var\\(--pc-color-secondary\\)\\)\\)\\]{--pc-color-switcher-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))}.\\[--pc-color-toolbar-muted-text\\:var\\(--pc-color-interactive-prompt-muted-text\\,var\\(--pc-color-text-muted\\)\\)\\]{--pc-color-toolbar-muted-text:var(--pc-color-interactive-prompt-muted-text,var(--pc-color-text-muted))}.\\[--pc-color-toolbar-text\\:var\\(--pc-color-interactive-prompt-text\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-toolbar-text:var(--pc-color-interactive-prompt-text,var(--pc-color-text))}.\\[--pc-enter-final-opacity\\:0\\.55\\]{--pc-enter-final-opacity:.55}.\\[--pc-linear-progress-border\\:var\\(--pc-color-border\\)\\]{--pc-linear-progress-border:var(--pc-color-border)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-danger\\)\\]{--pc-linear-progress-surface:var(--pc-color-danger)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-info\\)\\]{--pc-linear-progress-surface:var(--pc-color-info)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-neutral\\)\\]{--pc-linear-progress-surface:var(--pc-color-neutral)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-primary\\)\\]{--pc-linear-progress-surface:var(--pc-color-primary)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-secondary\\)\\]{--pc-linear-progress-surface:var(--pc-color-secondary)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-success\\)\\]{--pc-linear-progress-surface:var(--pc-color-success)}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-warning\\)\\]{--pc-linear-progress-surface:var(--pc-color-warning)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-danger-text\\)\\]{--pc-linear-progress-text:var(--pc-color-danger-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-info-text\\)\\]{--pc-linear-progress-text:var(--pc-color-info-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-neutral-text\\)\\]{--pc-linear-progress-text:var(--pc-color-neutral-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-primary-text\\)\\]{--pc-linear-progress-text:var(--pc-color-primary-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-secondary-text\\)\\]{--pc-linear-progress-text:var(--pc-color-secondary-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-success-text\\)\\]{--pc-linear-progress-text:var(--pc-color-success-text)}.\\[--pc-linear-progress-text\\:var\\(--pc-color-warning-text\\)\\]{--pc-linear-progress-text:var(--pc-color-warning-text)}.\\[--pc-logo-height\\:var\\(--pc-size-payment-list-item-logo-height\\)\\]{--pc-logo-height:var(--pc-size-payment-list-item-logo-height)}.\\[--pc-logo-height\\:var\\(--pc-size-payment-types-accordion-header-logo-height\\,var\\(--pc-size-payment-list-item-logo-height\\)\\)\\]{--pc-logo-height:var(--pc-size-payment-types-accordion-header-logo-height,var(--pc-size-payment-list-item-logo-height))}.\\[--pc-logo-width\\:var\\(--pc-size-payment-list-item-logo-width\\)\\]{--pc-logo-width:var(--pc-size-payment-list-item-logo-width)}.\\[--pc-logo-width\\:var\\(--pc-size-payment-types-accordion-header-logo-width\\,var\\(--pc-size-payment-list-item-logo-width\\)\\)\\]{--pc-logo-width:var(--pc-size-payment-types-accordion-header-logo-width,var(--pc-size-payment-list-item-logo-width))}.\\[--pc-opacity-logo-mark-surface-image\\:var\\(--pc-opacity-bonus-logo-image\\,var\\(--pc-opacity-logo-mark-image\\,1\\)\\)\\]{--pc-opacity-logo-mark-surface-image:var(--pc-opacity-bonus-logo-image,var(--pc-opacity-logo-mark-image,1))}.\\[--pc-opacity-logo-mark-surface-image\\:var\\(--pc-opacity-payment-type-logo-image\\,var\\(--pc-opacity-logo-mark-image\\,1\\)\\)\\]{--pc-opacity-logo-mark-surface-image:var(--pc-opacity-payment-type-logo-image,var(--pc-opacity-logo-mark-image,1))}.\\[--pc-panel-edge-inset\\:0\\.5rem\\]{--pc-panel-edge-inset:.5rem}.\\[--pc-panel-edge-inset\\:0\\.25rem\\]{--pc-panel-edge-inset:.25rem}.\\[--pc-panel-edge-inset\\:0\\.75rem\\]{--pc-panel-edge-inset:.75rem}.\\[--pc-panel-edge-inset\\:0\\.375rem\\]{--pc-panel-edge-inset:.375rem}.\\[--pc-panel-edge-inset\\:0\\.625rem\\]{--pc-panel-edge-inset:.625rem}.\\[--pc-panel-edge-inset\\:0\\.875rem\\]{--pc-panel-edge-inset:.875rem}.\\[--pc-panel-edge-inset\\:0px\\]{--pc-panel-edge-inset:0px}.\\[--pc-panel-edge-inset\\:1rem\\]{--pc-panel-edge-inset:1rem}.\\[--pc-panel-edge-offset\\:-0\\.5rem\\]{--pc-panel-edge-offset:-.5rem}.\\[--pc-panel-edge-offset\\:-0\\.25rem\\]{--pc-panel-edge-offset:-.25rem}.\\[--pc-panel-edge-offset\\:-0\\.75rem\\]{--pc-panel-edge-offset:-.75rem}.\\[--pc-panel-edge-offset\\:-0\\.375rem\\]{--pc-panel-edge-offset:-.375rem}.\\[--pc-panel-edge-offset\\:-0\\.625rem\\]{--pc-panel-edge-offset:-.625rem}.\\[--pc-panel-edge-offset\\:-0\\.875rem\\]{--pc-panel-edge-offset:-.875rem}.\\[--pc-panel-edge-offset\\:-1rem\\]{--pc-panel-edge-offset:-1rem}.\\[--pc-panel-edge-offset\\:0px\\]{--pc-panel-edge-offset:0px}.\\[--pc-panel-extra-inset\\:0\\.75rem\\]{--pc-panel-extra-inset:.75rem}.\\[--pc-panel-extra-inset\\:0\\.375rem\\]{--pc-panel-extra-inset:.375rem}.\\[--pc-panel-extra-inset\\:0\\.625rem\\]{--pc-panel-extra-inset:.625rem}.\\[--pc-panel-extra-inset\\:0\\.875rem\\]{--pc-panel-extra-inset:.875rem}.\\[--pc-panel-extra-inset\\:1rem\\]{--pc-panel-extra-inset:1rem}.\\[--pc-payment-list-item-content-inset\\:2\\.75rem\\]{--pc-payment-list-item-content-inset:2.75rem}.\\[--pc-payment-list-item-content-inset\\:3\\.125rem\\]{--pc-payment-list-item-content-inset:3.125rem}.\\[--pc-payment-list-item-content-inset\\:3rem\\]{--pc-payment-list-item-content-inset:3rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.5rem\\]{--pc-payment-list-item-inline-padding:.5rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.75rem\\]{--pc-payment-list-item-inline-padding:.75rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.875rem\\]{--pc-payment-list-item-inline-padding:.875rem}.\\[--pc-payment-list-item-inline-padding\\:0rem\\]{--pc-payment-list-item-inline-padding:0rem}.\\[--pc-payment-list-item-panel-action-inset\\:1\\.25rem\\]{--pc-payment-list-item-panel-action-inset:1.25rem}.\\[--pc-radius-logo-mark-surface\\:var\\(--pc-radius-bonus-logo\\,var\\(--pc-radius-logo-mark\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-logo-mark-surface:var(--pc-radius-bonus-logo,var(--pc-radius-logo-mark,var(--pc-radius-lg)))}.\\[--pc-radius-logo-mark-surface\\:var\\(--pc-radius-payment-type-logo\\,var\\(--pc-radius-logo-mark\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-logo-mark-surface:var(--pc-radius-payment-type-logo,var(--pc-radius-logo-mark,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\]{--pc-radius-panel:var(--pc-radius-list-item,var(--pc-radius-lg))}.\\[--pc-radius-panel\\:var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-size-input-height\\:2\\.25rem\\]{--pc-size-input-height:2.25rem}.\\[--pc-size-input-height\\:2\\.625rem\\]{--pc-size-input-height:2.625rem}.\\[--pc-size-input-height\\:2rem\\]{--pc-size-input-height:2rem}.\\[--pc-size-input-height\\:3rem\\]{--pc-size-input-height:3rem}.\\[--pc-size-logo-mark-surface-border-width\\:var\\(--pc-size-bonus-logo-border-width\\,var\\(--pc-size-logo-mark-border-width\\,1px\\)\\)\\]{--pc-size-logo-mark-surface-border-width:var(--pc-size-bonus-logo-border-width,var(--pc-size-logo-mark-border-width,1px))}.\\[--pc-size-logo-mark-surface-border-width\\:var\\(--pc-size-payment-type-logo-border-width\\,var\\(--pc-size-logo-mark-border-width\\,1px\\)\\)\\]{--pc-size-logo-mark-surface-border-width:var(--pc-size-payment-type-logo-border-width,var(--pc-size-logo-mark-border-width,1px))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-bonus-logo-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-bonus-logo-height,var(--pc-size-logo-mark-height,2.25rem))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-payment-type-logo-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-payment-type-logo-height,var(--pc-size-logo-mark-height,2.25rem))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-payment-type-logo-height\\,var\\(--pc-size-logo-mark-height\\,42\\%\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-payment-type-logo-height,var(--pc-size-logo-mark-height,42%))}.\\[--pc-size-logo-mark-surface-image\\:var\\(--pc-size-bonus-logo-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{--pc-size-logo-mark-surface-image:var(--pc-size-bonus-logo-image,var(--pc-size-logo-mark-image,85%))}.\\[--pc-size-logo-mark-surface-image\\:var\\(--pc-size-payment-type-logo-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{--pc-size-logo-mark-surface-image:var(--pc-size-payment-type-logo-image,var(--pc-size-logo-mark-image,85%))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-bonus-logo-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-bonus-logo-width,var(--pc-size-logo-mark-width,2.25rem))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-payment-type-logo-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-payment-type-logo-width,var(--pc-size-logo-mark-width,2.25rem))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-payment-type-logo-width\\,var\\(--pc-size-logo-mark-width\\,100\\%\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-payment-type-logo-width,var(--pc-size-logo-mark-width,100%))}.\\[--pc-space-input-padding-x\\:0\\.75rem\\]{--pc-space-input-padding-x:.75rem}.\\[--pc-space-input-padding-x\\:0\\.875rem\\]{--pc-space-input-padding-x:.875rem}.\\[--pc-space-input-padding-x\\:1\\.25rem\\]{--pc-space-input-padding-x:1.25rem}.\\[--pc-space-input-padding-x\\:1rem\\]{--pc-space-input-padding-x:1rem}.\\[--pc-space-input-padding-y\\:0\\.5rem\\]{--pc-space-input-padding-y:.5rem}.\\[--pc-space-input-padding-y\\:0\\.375rem\\]{--pc-space-input-padding-y:.375rem}.\\[--pc-space-input-padding-y\\:0\\.625rem\\]{--pc-space-input-padding-y:.625rem}.\\[--pc-space-input-padding-y\\:0\\.5625rem\\]{--pc-space-input-padding-y:.5625rem}.\\[--pc-workspace-main-pane-padding-offset\\:calc\\(0px_-_var\\(--pc-workspace-main-pane-padding-resolved\\)\\)\\]{--pc-workspace-main-pane-padding-offset:calc(0px - var(--pc-workspace-main-pane-padding-resolved))}.\\[--pc-workspace-main-pane-padding-resolved\\:var\\(--pc-workspace-main-pane-padding\\,8px\\)\\]{--pc-workspace-main-pane-padding-resolved:var(--pc-workspace-main-pane-padding,8px)}.\\[--pc-workspace-main-pane-padding\\:0px\\]{--pc-workspace-main-pane-padding:0px}.\\[--spacing\\:4px\\]{--spacing:4px}.\\[backface-visibility\\:hidden\\]{backface-visibility:hidden}.\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)_32\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-input-text,var(--pc-color-text))}@supports (color:color-mix(in lab, red, red)){.\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)_32\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:color-mix(in srgb,var(--pc-color-input-text,var(--pc-color-text)) 32%,var(--pc-color-input-background,var(--pc-color-surface)))}}.\\[background\\:transparent\\]{background:0 0}.\\[background\\:var\\(--pc-color-accent\\)\\]{background:var(--pc-color-accent)}.\\[background\\:var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-accordion-header-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-accordion-header-background-selected\\,var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background-selected,var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-accordion-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-accordion-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-backdrop\\)\\]{background:var(--pc-color-backdrop)}.\\[background\\:var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-bonus-picker-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-bonus-picker-background-selected\\,var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background-selected,var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-bonus-summary-background\\,var\\(--pc-bonus-summary-surface-colour\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-bonus-summary-background,var(--pc-bonus-summary-surface-colour,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-depth-2\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-depth-2))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-depth-3\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-depth-3))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-neutral\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-neutral))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-outline-surface,transparent))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-primary\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-primary))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-secondary\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-secondary))}.\\[background\\:var\\(--pc-color-card-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-color-card-background,var(--pc-color-surface))}.\\[background\\:var\\(--pc-color-card-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background:var(--pc-color-card-background-muted,var(--pc-color-surface-weakest))}.\\[background\\:var\\(--pc-color-depth-2\\)\\]{background:var(--pc-color-depth-2)}.\\[background\\:var\\(--pc-color-depth-3\\)\\]{background:var(--pc-color-depth-3)}.\\[background\\:var\\(--pc-color-depth-4\\)\\]{background:var(--pc-color-depth-4)}.\\[background\\:var\\(--pc-color-dropdown-item-background-hover\\,var\\(--pc-color-depth-2\\)\\)\\]{background:var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2))}.\\[background\\:var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-color-input-background,var(--pc-color-surface))}.\\[background\\:var\\(--pc-color-input-checkbox-background\\,transparent\\)\\]{background:var(--pc-color-input-checkbox-background,transparent)}.\\[background\\:var\\(--pc-color-input-checkbox-icon\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-input-checkbox-icon,var(--pc-color-input-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-color-interactive-prompt-background,var(--pc-color-surface))}.\\[background\\:var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background:var(--pc-color-interactive-prompt-background,var(--pc-color-surface-weakest))}.\\[background\\:var\\(--pc-color-interactive-prompt-background\\,var\\(--pc-color-transparent\\)\\)\\]{background:var(--pc-color-interactive-prompt-background,var(--pc-color-transparent))}.\\[background\\:var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\]{background:var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest)))}.\\[background\\:var\\(--pc-color-list-item-background-selected\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-list-item-background-selected,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-logo-mark-surface-background\\,var\\(--pc-color-logo-mark-background\\,transparent\\)\\)\\]{background:var(--pc-color-logo-mark-surface-background,var(--pc-color-logo-mark-background,transparent))}.\\[background\\:var\\(--pc-color-navigation-list-indicator\\,var\\(--pc-color-secondary\\)\\)\\]{background:var(--pc-color-navigation-list-indicator,var(--pc-color-secondary))}.\\[background\\:var\\(--pc-color-outline-surface\\,transparent\\)\\]{background:var(--pc-color-outline-surface,transparent)}.\\[background\\:var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-color-panel-background,var(--pc-color-surface))}.\\[background\\:var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\]{background:var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))}.\\[background\\:var\\(--pc-color-payment-method-switcher-background\\,transparent\\)\\]{background:var(--pc-color-payment-method-switcher-background,transparent)}.\\[background\\:var\\(--pc-color-payment-summary-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-payment-summary-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background-selected\\,var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background-selected,var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-progress-bar-fill\\,var\\(--pc-linear-progress-surface\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-progress-bar-fill,var(--pc-linear-progress-surface,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-progress-bar-track\\,var\\(--pc-color-depth-4\\)\\)\\]{background:var(--pc-color-progress-bar-track,var(--pc-color-depth-4))}.\\[background\\:var\\(--pc-color-progress-bar-track\\,var\\(--pc-color-neutral\\)\\)\\]{background:var(--pc-color-progress-bar-track,var(--pc-color-neutral))}.\\[background\\:var\\(--pc-color-secondary\\)\\]{background:var(--pc-color-secondary)}.\\[background\\:var\\(--pc-color-surface\\)\\]{background:var(--pc-color-surface)}.\\[background\\:var\\(--pc-color-surface-weakest\\)\\]{background:var(--pc-color-surface-weakest)}.\\[background\\:var\\(--pc-color-switcher-indicator\\,var\\(--pc-color-secondary\\)\\)\\]{background:var(--pc-color-switcher-indicator,var(--pc-color-secondary))}.\\[background\\:var\\(--pc-color-toggle-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-toggle-background,var(--pc-color-input-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-toggle-background-checked\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_42\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-toggle-background-checked,var(--pc-color-input-focus-border,var(--pc-color-text)))}@supports (color:color-mix(in lab, red, red)){.\\[background\\:var\\(--pc-color-toggle-background-checked\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_42\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-toggle-background-checked,color-mix(in srgb,var(--pc-color-input-focus-border,var(--pc-color-text)) 42%,var(--pc-color-input-background,var(--pc-color-surface))))}}.\\[background\\:var\\(--pc-color-toggle-background-disabled\\,var\\(--pc-color-depth-4\\)\\)\\]{background:var(--pc-color-toggle-background-disabled,var(--pc-color-depth-4))}.\\[background\\:var\\(--pc-color-toggle-thumb\\,var\\(--pc-color-toggle-thumb-surface\\,var\\(--pc-color-credit-card-toggle-thumb-surface\\,var\\(--pc-color-neutral\\)\\)\\)\\)\\]{background:var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral))))}.\\[background\\:var\\(--pc-color-toggle-thumb-checked\\,var\\(--pc-color-toggle-thumb-checked-surface\\,var\\(--pc-color-toggle-thumb\\,var\\(--pc-color-toggle-thumb-surface\\,var\\(--pc-color-credit-card-toggle-thumb-surface\\,var\\(--pc-color-neutral\\)\\)\\)\\)\\)\\)\\]{background:var(--pc-color-toggle-thumb-checked,var(--pc-color-toggle-thumb-checked-surface,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral))))))}.\\[background\\:var\\(--pc-color-toggle-thumb-disabled\\,var\\(--pc-color-toggle-thumb\\,var\\(--pc-color-toggle-thumb-surface\\,var\\(--pc-color-credit-card-toggle-thumb-surface\\,var\\(--pc-color-neutral\\)\\)\\)\\)\\)\\]{background:var(--pc-color-toggle-thumb-disabled,var(--pc-color-toggle-thumb,var(--pc-color-toggle-thumb-surface,var(--pc-color-credit-card-toggle-thumb-surface,var(--pc-color-neutral)))))}.\\[background\\:var\\(--pc-color-transparent\\)\\]{background:var(--pc-color-transparent)}.\\[background\\:var\\(--pc-multiselect-chip-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-multiselect-chip-background,var(--pc-color-surface))}.\\[grid-area\\:1\\/1\\]{grid-area:1/1}.\\[outline-style\\:solid\\]{outline-style:solid}.\\[scrollbar-color\\:var\\(--pc-color-depth-3\\)_transparent\\]{scrollbar-color:var(--pc-color-depth-3) transparent}.\\[scrollbar-gutter\\:stable\\]{scrollbar-gutter:stable}.\\[scrollbar-width\\:thin\\]{scrollbar-width:thin}.ring-inset{--tw-ring-inset:inset}.group-focus-within\\:rotate-180:is(:where(.group):focus-within *){rotate:180deg}@media (hover:hover){.group-hover\\:pointer-events-auto:is(:where(.group):hover *){pointer-events:auto}.group-hover\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:is(:where(.group):hover *){background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.group-hover\\:opacity-80:is(:where(.group):hover *){opacity:.8}.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.group-hover\\:\\[background\\:var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-hover\\:\\[background\\:var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-hover\\:\\[background\\:var\\(--pc-color-card-background-hover\\,var\\(--pc-color-depth-4\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))}.group-hover\\:\\[background\\:var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))}.group-hover\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}}.group-focus-visible\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:is(:where(.group):focus-visible *){background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.group-focus-visible\\:\\[background\\:var\\(--pc-color-card-background-hover\\,var\\(--pc-color-depth-4\\)\\)\\]:is(:where(.group):focus-visible *){background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))}.group-active\\:\\[background\\:var\\(--pc-color-accordion-header-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-active\\:\\[background\\:var\\(--pc-color-bonus-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-active\\:\\[background\\:var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-active\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-data-\\[stuck\\=true\\]\\:mt-0:is(:where(.group)[data-stuck=true] *){margin-top:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:mb-0:is(:where(.group)[data-stuck=true] *){margin-bottom:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:h-6:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,1\\.25rem\\)\\)\\]:is(:where(.group)[data-stuck=true] *){height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,1.25rem))}.group-data-\\[stuck\\=true\\]\\:w-6:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,1\\.25rem\\)\\)\\]:is(:where(.group)[data-stuck=true] *){width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,1.25rem))}.group-data-\\[stuck\\=true\\]\\:w-auto:is(:where(.group)[data-stuck=true] *){width:auto}.group-data-\\[stuck\\=true\\]\\:max-w-full:is(:where(.group)[data-stuck=true] *){max-width:100%}.group-data-\\[stuck\\=true\\]\\:min-w-0:is(:where(.group)[data-stuck=true] *){min-width:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:min-w-\\[10ch\\]:is(:where(.group)[data-stuck=true] *){min-width:10ch}.group-data-\\[stuck\\=true\\]\\:flex-1:is(:where(.group)[data-stuck=true] *){flex:1}.group-data-\\[stuck\\=true\\]\\:flex-none:is(:where(.group)[data-stuck=true] *){flex:none}.group-data-\\[stuck\\=true\\]\\:shrink-0:is(:where(.group)[data-stuck=true] *){flex-shrink:0}.group-data-\\[stuck\\=true\\]\\:flex-col:is(:where(.group)[data-stuck=true] *){flex-direction:column}.group-data-\\[stuck\\=true\\]\\:flex-row:is(:where(.group)[data-stuck=true] *){flex-direction:row}.group-data-\\[stuck\\=true\\]\\:flex-wrap:is(:where(.group)[data-stuck=true] *){flex-wrap:wrap}.group-data-\\[stuck\\=true\\]\\:items-center:is(:where(.group)[data-stuck=true] *){align-items:center}.group-data-\\[stuck\\=true\\]\\:items-start:is(:where(.group)[data-stuck=true] *){align-items:flex-start}.group-data-\\[stuck\\=true\\]\\:justify-between:is(:where(.group)[data-stuck=true] *){justify-content:space-between}.group-data-\\[stuck\\=true\\]\\:gap-1:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:gap-3:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 3)}.group-data-\\[stuck\\=true\\]\\:py-0:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:py-1:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pt-2:is(:where(.group)[data-stuck=true] *){padding-top:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pb-0\\.5:is(:where(.group)[data-stuck=true] *){padding-bottom:calc(var(--spacing) * .5)}.group-data-\\[stuck\\=true\\]\\:text-center:is(:where(.group)[data-stuck=true] *){text-align:center}.group-data-\\[stuck\\=true\\]\\:text-left:is(:where(.group)[data-stuck=true] *){text-align:left}.group-data-\\[stuck\\=true\\]\\:text-base:is(:where(.group)[data-stuck=true] *){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.peer-checked\\:border-\\[var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\]:is(:where(.peer):checked~*){border-color:var(--pc-color-input-text,var(--pc-color-text))}.peer-checked\\:opacity-100:is(:where(.peer):checked~*){opacity:1}.peer-checked\\:\\[background\\:var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\]:is(:where(.peer):checked~*){background:var(--pc-color-input-background,var(--pc-color-surface))}.peer-checked\\:\\[background\\:var\\(--pc-color-input-checkbox-background-checked\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\]:is(:where(.peer):checked~*){background:var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text)))}.peer-indeterminate\\:border-\\[var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\]:is(:where(.peer):indeterminate~*){border-color:var(--pc-color-input-text,var(--pc-color-text))}.peer-indeterminate\\:\\[background\\:var\\(--pc-color-input-checkbox-background-checked\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\]:is(:where(.peer):indeterminate~*){background:var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text)))}@media (hover:hover){.peer-hover\\:border-\\[var\\(--pc-color-input-checkbox-border-hover\\,var\\(--pc-color-input-checkbox-border\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-border\\)\\)\\)\\)\\]:is(:where(.peer):hover~*){border-color:var(--pc-color-input-checkbox-border-hover,var(--pc-color-input-checkbox-border,var(--pc-color-input-focus-border,var(--pc-color-border))))}.peer-hover\\:border-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-checkbox-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]:is(:where(.peer):hover~*){border-color:var(--pc-color-input-invalid-border,var(--pc-color-input-checkbox-border,var(--pc-color-danger-text)))}}.peer-focus-visible\\:border-\\[var\\(--pc-color-input-focus-border\\,var\\(--pc-color-input-focus-ring\\,var\\(--pc-color-text\\)\\)\\)\\]:is(:where(.peer):focus-visible~*){border-color:var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))}.peer-focus-visible\\:border-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]:is(:where(.peer):focus-visible~*){border-color:var(--pc-color-input-invalid-border,var(--pc-color-input-focus-border,var(--pc-color-danger-text)))}.peer-focus-visible\\:ring-1:is(:where(.peer):focus-visible~*){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.peer-focus-visible\\:ring-2:is(:where(.peer):focus-visible~*){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.peer-focus-visible\\:ring-\\[length\\:var\\(--pc-size-input-focus-ring\\,3px\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(var(--pc-size-input-focus-ring,3px) + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.peer-focus-visible\\:ring-\\[color\\:var\\(--pc-color-input-disabled-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-depth-2\\)_16\\%\\,transparent\\)\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-input-disabled-focus-ring,var(--pc-color-depth-2))}@supports (color:color-mix(in lab, red, red)){.peer-focus-visible\\:ring-\\[color\\:var\\(--pc-color-input-disabled-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-depth-2\\)_16\\%\\,transparent\\)\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-input-disabled-focus-ring,color-mix(in srgb,var(--pc-color-depth-2) 16%,transparent))}}.peer-focus-visible\\:ring-\\[color\\:var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-input-focus-ring,var(--pc-color-input-focus-border,var(--pc-color-text)))}@supports (color:color-mix(in lab, red, red)){.peer-focus-visible\\:ring-\\[color\\:var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]:is(:where(.peer):focus-visible~*){--tw-ring-color:var(--pc-color-input-focus-ring,color-mix(in srgb,var(--pc-color-input-focus-border,var(--pc-color-text)) 26%,transparent))}}.peer-disabled\\:border-\\[var\\(--pc-color-input-checkbox-border-disabled\\,var\\(--pc-color-input-checkbox-border\\,var\\(--pc-color-border\\)\\)\\)\\]:is(:where(.peer):disabled~*){border-color:var(--pc-color-input-checkbox-border-disabled,var(--pc-color-input-checkbox-border,var(--pc-color-border)))}.peer-disabled\\:text-\\[var\\(--pc-color-input-disabled-text\\,var\\(--pc-color-text-muted\\)\\)\\]:is(:where(.peer):disabled~*){color:var(--pc-color-input-disabled-text,var(--pc-color-text-muted))}.peer-disabled\\:\\[background\\:var\\(--pc-color-input-disabled-background\\,var\\(--pc-color-surface-weakest\\)\\)\\]:is(:where(.peer):disabled~*){background:var(--pc-color-input-disabled-background,var(--pc-color-surface-weakest))}.peer-checked\\:peer-disabled\\:border-\\[var\\(--pc-color-input-checkbox-border-checked-disabled\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\]:is(:where(.peer):checked~*):is(:where(.peer):disabled~*){border-color:var(--pc-color-input-checkbox-border-checked-disabled,var(--pc-color-input-text,var(--pc-color-text)))}.peer-checked\\:peer-disabled\\:\\[background\\:var\\(--pc-color-input-checkbox-background-checked-disabled\\,var\\(--pc-color-input-checkbox-background-checked\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:is(:where(.peer):checked~*):is(:where(.peer):disabled~*){background:var(--pc-color-input-checkbox-background-checked-disabled,var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text))))}.peer-indeterminate\\:peer-disabled\\:border-\\[var\\(--pc-color-input-checkbox-border-checked-disabled\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\]:is(:where(.peer):indeterminate~*):is(:where(.peer):disabled~*){border-color:var(--pc-color-input-checkbox-border-checked-disabled,var(--pc-color-input-text,var(--pc-color-text)))}.peer-indeterminate\\:peer-disabled\\:\\[background\\:var\\(--pc-color-input-checkbox-background-checked-disabled\\,var\\(--pc-color-input-checkbox-background-checked\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:is(:where(.peer):indeterminate~*):is(:where(.peer):disabled~*){background:var(--pc-color-input-checkbox-background-checked-disabled,var(--pc-color-input-checkbox-background-checked,var(--pc-color-input-text,var(--pc-color-text))))}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\] ::marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\]::marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\] ::-webkit-details-marker{color:var(--pc-color-text-muted)}.marker\\:text-\\[var\\(--pc-color-text-muted\\)\\]::-webkit-details-marker{color:var(--pc-color-text-muted)}.placeholder\\:text-\\[var\\(--pc-color-border\\)\\]::placeholder{color:var(--pc-color-border)}.placeholder\\:text-\\[var\\(--pc-color-input-invalid-placeholder\\,var\\(--pc-color-input-error-text\\,var\\(--pc-color-text\\)\\)\\)\\]::placeholder{color:var(--pc-color-input-invalid-placeholder,var(--pc-color-input-error-text,var(--pc-color-text)))}.placeholder\\:text-\\[var\\(--pc-color-input-placeholder\\,var\\(--pc-color-text-muted\\)\\)\\]::placeholder{color:var(--pc-color-input-placeholder,var(--pc-color-text-muted))}.before\\:pointer-events-none:before{content:var(--tw-content);pointer-events:none}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:inset-0:before{content:var(--tw-content);inset:calc(var(--spacing) * 0)}.before\\:\\[border-radius\\:inherit\\]:before{content:var(--tw-content);border-radius:inherit}.before\\:border:before{content:var(--tw-content);border-style:var(--tw-border-style);border-width:1px}.before\\:border-\\[var\\(--pc-color-surface\\)\\]:before{content:var(--tw-content);border-color:var(--pc-color-surface)}.before\\:content-\\[\\\\\\'\\\\\\'\\]:before{--tw-content:\\'\\';content:var(--tw-content)}.after\\:pointer-events-none:after{content:var(--tw-content);pointer-events:none}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:inset-x-0:after{content:var(--tw-content);inset-inline:calc(var(--spacing) * 0)}.after\\:bottom-0:after{content:var(--tw-content);bottom:calc(var(--spacing) * 0)}.after\\:h-px:after{content:var(--tw-content);height:1px}.after\\:bg-\\[var\\(--pc-color-border-weakest\\)\\]:after{content:var(--tw-content);background-color:var(--pc-color-border-weakest)}.after\\:content-\\[\\\\\\'\\\\\\'\\]:after{--tw-content:\\'\\';content:var(--tw-content)}.first\\:pt-1:first-child{padding-top:calc(var(--spacing) * 1)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}.last\\:pb-1:last-child{padding-bottom:calc(var(--spacing) * 1)}.read-only\\:text-\\[var\\(--pc-color-input-readonly-text\\,var\\(--pc-color-text-muted\\)\\)\\]:read-only{color:var(--pc-color-input-readonly-text,var(--pc-color-text-muted))}.read-only\\:caret-transparent:read-only{caret-color:#0000}.focus-within\\:overflow-visible:focus-within{overflow:visible}.focus-within\\:border-\\[var\\(--pc-color-input-focus-border\\,var\\(--pc-color-input-focus-ring\\,var\\(--pc-color-text\\)\\)\\)\\]:focus-within{border-color:var(--pc-color-input-focus-border,var(--pc-color-input-focus-ring,var(--pc-color-text)))}.focus-within\\:border-\\[var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-danger-text\\)\\)\\)\\]:focus-within{border-color:var(--pc-color-input-invalid-border,var(--pc-color-input-focus-border,var(--pc-color-danger-text)))}.focus-within\\:\\[background-color\\:var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\]:focus-within{background-color:var(--pc-color-input-background,var(--pc-color-surface))}.focus-within\\:\\[background-color\\:var\\(--pc-color-input-invalid-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]:focus-within{background-color:var(--pc-color-input-invalid-background,var(--pc-color-input-background,var(--pc-color-surface)))}.focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-focus-ring,var(--pc-color-input-focus-border,var(--pc-color-text)))}@supports (color:color-mix(in lab, red, red)){.focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-focus-border\\,var\\(--pc-color-text\\)\\)_26\\%\\,transparent\\)\\)\\]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-focus-ring,color-mix(in srgb,var(--pc-color-input-focus-border,var(--pc-color-text)) 26%,transparent))}}.focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-invalid-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-danger-text\\)\\)_26\\%\\,transparent\\)\\)\\]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-invalid-focus-ring,var(--pc-color-input-invalid-border,var(--pc-color-danger-text)))}@supports (color:color-mix(in lab, red, red)){.focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-invalid-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-invalid-border\\,var\\(--pc-color-danger-text\\)\\)_26\\%\\,transparent\\)\\)\\]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-invalid-focus-ring,color-mix(in srgb,var(--pc-color-input-invalid-border,var(--pc-color-danger-text)) 26%,transparent))}}.focus-within\\:outline-1:focus-within{outline-style:var(--tw-outline-style);outline-width:1px}.focus-within\\:outline-2:focus-within{outline-style:var(--tw-outline-style);outline-width:2px}.focus-within\\:outline-\\[var\\(--pc-color-input-focus-ring\\,var\\(--pc-color-text\\)\\)\\]:focus-within{outline-color:var(--pc-color-input-focus-ring,var(--pc-color-text))}@media (hover:hover){.hover\\:z-10:hover{z-index:10}.hover\\:border-\\[var\\(--pc-color-surface\\)\\]:hover{border-color:var(--pc-color-surface)}.hover\\:\\[background-color\\:var\\(--pc-color-input-background-hover\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]:hover{background-color:var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))}.hover\\:\\[background-color\\:var\\(--pc-color-input-invalid-background-hover\\,var\\(--pc-color-input-invalid-background\\,var\\(--pc-color-input-background-hover\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]:hover{background-color:var(--pc-color-input-invalid-background-hover,var(--pc-color-input-invalid-background,var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))))}.hover\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:hover{background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.hover\\:bg-\\[var\\(--pc-color-depth-1\\)\\]:hover{background-color:var(--pc-color-depth-1)}.hover\\:bg-\\[var\\(--pc-color-depth-2\\)\\]:hover{background-color:var(--pc-color-depth-2)}.hover\\:text-\\[var\\(--pc-color-accordion-header-text-hover\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-bonus-picker-text-hover\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-list-item-text-hover\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\]:hover{color:var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))}.hover\\:text-\\[var\\(--pc-color-payment-method-switcher-text-hover\\,var\\(--pc-color-payment-method-switcher-text-active\\,var\\(--pc-color-text\\)\\)\\)\\]:hover{color:var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text)))}.hover\\:text-\\[var\\(--pc-color-payment-method-switcher-text-hover\\,var\\(--pc-color-text\\)\\)\\]:hover{color:var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-text))}.hover\\:text-\\[var\\(--pc-color-payment-type-picker-text-hover\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-text\\)\\]:hover{color:var(--pc-color-text)}.hover\\:shadow-\\[inset_0_0_0_2px_var\\(--pc-color-border\\)\\]:hover{--tw-shadow:inset 0 0 0 2px var(--tw-shadow-color,var(--pc-color-border));box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-danger\\)_12\\%\\,transparent\\)\\]:hover{background:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-danger\\)_12\\%\\,transparent\\)\\]:hover{background:color-mix(in srgb,var(--pc-color-danger) 12%,transparent)}}.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-secondary\\)_92\\%\\,var\\(--pc-color-secondary\\)\\)\\]:hover{background:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){.hover\\:\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-secondary\\)_92\\%\\,var\\(--pc-color-secondary\\)\\)\\]:hover{background:color-mix(in srgb,var(--pc-color-secondary) 92%,var(--pc-color-secondary))}}.hover\\:\\[background\\:transparent\\]:hover{background:0 0}.hover\\:\\[background\\:var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-border-weakest\\)\\]:hover{background:var(--pc-color-border-weakest)}.hover\\:\\[background\\:var\\(--pc-color-card-background-hover\\,var\\(--pc-color-depth-4\\)\\)\\]:hover{background:var(--pc-color-card-background-hover,var(--pc-color-depth-4))}.hover\\:\\[background\\:var\\(--pc-color-depth-1\\)\\]:hover{background:var(--pc-color-depth-1)}.hover\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:hover{background:var(--pc-color-depth-2)}.hover\\:\\[background\\:var\\(--pc-color-depth-4\\)\\]:hover{background:var(--pc-color-depth-4)}.hover\\:\\[background\\:var\\(--pc-color-dropdown-item-action-background-hover\\,var\\(--pc-color-dropdown-item-background-hover\\,var\\(--pc-color-depth-2\\)\\)\\)\\]:hover{background:var(--pc-color-dropdown-item-action-background-hover,var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2)))}.hover\\:\\[background\\:var\\(--pc-color-dropdown-item-background-hover\\,var\\(--pc-color-depth-2\\)\\)\\]:hover{background:var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2))}.hover\\:\\[background\\:var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:hover{background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))}.hover\\:\\[background\\:var\\(--pc-color-payment-method-switcher-background-hover\\,var\\(--pc-color-border-weakest\\)\\)\\]:hover{background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-border-weakest))}.hover\\:\\[background\\:var\\(--pc-color-payment-method-switcher-background-hover\\,var\\(--pc-color-payment-method-switcher-background\\,transparent\\)\\)\\]:hover{background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-payment-method-switcher-background,transparent))}.hover\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-surface\\)\\]:hover{background:var(--pc-color-surface)}.hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover{background:var(--pc-color-surface-weaker)}.hover\\:\\[background\\:var\\(--pc-color-toggle-background-hover\\,var\\(--pc-color-input-background-hover\\,var\\(--pc-color-toggle-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]:hover{background:var(--pc-color-toggle-background-hover,var(--pc-color-input-background-hover,var(--pc-color-toggle-background,var(--pc-color-input-background,var(--pc-color-surface)))))}.hover\\:\\[background\\:var\\(--pc-multiselect-chip-background\\,var\\(--pc-color-surface\\)\\)\\]:hover{background:var(--pc-multiselect-chip-background,var(--pc-color-surface))}.hover\\:before\\:border-\\[var\\(--pc-color-transparent\\)\\]:hover:before{content:var(--tw-content);border-color:var(--pc-color-transparent)}.hover\\:after\\:bg-\\[var\\(--pc-color-transparent\\)\\]:hover:after{content:var(--tw-content);background-color:var(--pc-color-transparent)}.focus-within\\:hover\\:\\[background-color\\:var\\(--pc-color-input-background-hover\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]:focus-within:hover{background-color:var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))}.focus-within\\:hover\\:\\[background-color\\:var\\(--pc-color-input-invalid-background-hover\\,var\\(--pc-color-input-invalid-background\\,var\\(--pc-color-input-background-hover\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]:focus-within:hover{background-color:var(--pc-color-input-invalid-background-hover,var(--pc-color-input-invalid-background,var(--pc-color-input-background-hover,var(--pc-color-input-background,var(--pc-color-surface)))))}}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-\\[var\\(--pc-color-accent\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-accent)}.focus-visible\\:ring-\\[var\\(--pc-color-border\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-border)}.focus-visible\\:ring-\\[var\\(--pc-color-button-focus-ring\\,var\\(--pc-color-text\\)\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-button-focus-ring,var(--pc-color-text))}.focus-visible\\:ring-\\[var\\(--pc-color-card-focus-ring\\,var\\(--pc-color-border\\)\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-card-focus-ring,var(--pc-color-border))}.focus-visible\\:ring-\\[var\\(--pc-color-depth-2\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-depth-2)}.focus-visible\\:ring-\\[var\\(--pc-color-text\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-text)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-\\[var\\(--pc-color-surface\\)\\]:focus-visible{--tw-ring-offset-color:var(--pc-color-surface)}.focus-visible\\:ring-offset-transparent:focus-visible{--tw-ring-offset-color:transparent}.focus-visible\\:outline:focus-visible{outline-style:var(--tw-outline-style);outline-width:1px}.focus-visible\\:outline-2:focus-visible{outline-style:var(--tw-outline-style);outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-\\[var\\(--pc-color-border\\)\\]:focus-visible{outline-color:var(--pc-color-border)}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.focus-visible\\:\\[background\\:transparent\\]:focus-visible{background:0 0}.focus-visible\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:focus-visible{background:var(--pc-color-depth-2)}.focus-visible\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:focus-visible{background:var(--pc-color-surface-weaker)}.active\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]:active{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.active\\:text-\\[var\\(--pc-color-accordion-header-text-active\\,var\\(--pc-color-accordion-header-text-hover\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-accordion-header-text-active,var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:text-\\[var\\(--pc-color-bonus-picker-text-active\\,var\\(--pc-color-bonus-picker-text-hover\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-bonus-picker-text-active,var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]:active{color:var(--pc-color-control-text,var(--pc-color-text))}.active\\:text-\\[var\\(--pc-color-list-item-text-active\\,var\\(--pc-color-list-item-text-hover\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:active{color:var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))}.active\\:text-\\[var\\(--pc-color-payment-type-picker-text-active\\,var\\(--pc-color-payment-type-picker-text-hover\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-payment-type-picker-text-active,var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:text-\\[var\\(--pc-color-text\\)\\]:active{color:var(--pc-color-text)}.active\\:\\[background\\:var\\(--pc-color-accordion-header-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-bonus-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-depth-1\\)\\]:active{background:var(--pc-color-depth-1)}.active\\:\\[background\\:var\\(--pc-color-dropdown-item-action-background-active\\,var\\(--pc-color-dropdown-item-background-active\\,var\\(--pc-color-depth-2\\)\\)\\)\\]:active{background:var(--pc-color-dropdown-item-action-background-active,var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2)))}.active\\:\\[background\\:var\\(--pc-color-dropdown-item-background-active\\,var\\(--pc-color-depth-2\\)\\)\\]:active{background:var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2))}.active\\:\\[background\\:var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:active{background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.active\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active{background:var(--pc-color-surface-weaker)}@media (hover:hover){.enabled\\:hover\\:border-\\[var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\]:enabled:hover{border-color:var(--pc-color-button-border,var(--pc-color-transparent))}.enabled\\:hover\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:enabled:hover{background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.enabled\\:hover\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]:enabled:hover{color:var(--pc-color-control-text,var(--pc-color-text))}.enabled\\:hover\\:text-\\[var\\(--pc-color-suggested-amount-text-hover\\,var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\)\\]:enabled:hover{color:var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))}.enabled\\:hover\\:\\[background\\:var\\(--pc-color-depth-2\\)\\]:enabled:hover{background:var(--pc-color-depth-2)}}.enabled\\:active\\:border-\\[var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\]:enabled:active{border-color:var(--pc-color-button-border,var(--pc-color-transparent))}.enabled\\:active\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]:enabled:active{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.enabled\\:active\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]:enabled:active{color:var(--pc-color-control-text,var(--pc-color-text))}.enabled\\:active\\:text-\\[var\\(--pc-color-suggested-amount-text-active\\,var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\)\\]:enabled:active{color:var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))}.enabled\\:active\\:\\[background\\:var\\(--pc-color-depth-3\\)\\]:enabled:active{background:var(--pc-color-depth-3)}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:border-\\[var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\]:disabled{border-color:var(--pc-color-button-border,var(--pc-color-transparent))}.disabled\\:bg-\\[var\\(--pc-color-control-background-disabled\\,var\\(--pc-color-surface-strongest\\)\\)\\]:disabled{background-color:var(--pc-color-control-background-disabled,var(--pc-color-surface-strongest))}.disabled\\:text-\\[var\\(--pc-color-control-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\]:disabled{color:var(--pc-color-control-text-disabled,var(--pc-color-text-muted))}.disabled\\:text-\\[var\\(--pc-color-input-disabled-text\\,var\\(--pc-color-text-muted\\)\\)\\]:disabled{color:var(--pc-color-input-disabled-text,var(--pc-color-text-muted))}.disabled\\:text-\\[var\\(--pc-color-text\\)\\]:disabled{color:var(--pc-color-text)}.disabled\\:text-\\[var\\(--pc-color-text-muted\\)\\]:disabled{color:var(--pc-color-text-muted)}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:opacity-55:disabled{opacity:.55}.disabled\\:opacity-60:disabled{opacity:.6}.disabled\\:\\[background\\:transparent\\]:disabled{background:0 0}.disabled\\:placeholder\\:text-\\[var\\(--pc-color-input-disabled-text\\,var\\(--pc-color-text-muted\\)\\)\\]:disabled::placeholder{color:var(--pc-color-input-disabled-text,var(--pc-color-text-muted))}.data-\\[active\\=true\\]\\:border-\\[var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\][data-active=true]{border-color:var(--pc-color-button-border,var(--pc-color-transparent))}.data-\\[active\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\][data-active=true]{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.data-\\[active\\=true\\]\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\][data-active=true]{color:var(--pc-color-control-text,var(--pc-color-text))}.data-\\[active\\=true\\]\\:\\[background\\:var\\(--pc-color-depth-3\\)\\][data-active=true]{background:var(--pc-color-depth-3)}.data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled=true]{pointer-events:none}.data-\\[disabled\\=true\\]\\:cursor-not-allowed[data-disabled=true]{cursor:not-allowed}.data-\\[disabled\\=true\\]\\:\\[background-color\\:var\\(--pc-color-input-disabled-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\][data-disabled=true]{background-color:var(--pc-color-input-disabled-background,var(--pc-color-input-background,var(--pc-color-surface)))}@media (hover:hover){.data-\\[disabled\\=true\\]\\:hover\\:\\[background-color\\:var\\(--pc-color-input-disabled-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\][data-disabled=true]:hover{background-color:var(--pc-color-input-disabled-background,var(--pc-color-input-background,var(--pc-color-surface)))}}.data-\\[focus-visible\\=true\\]\\:ring-2[data-focus-visible=true]{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.data-\\[focus-visible\\=true\\]\\:ring-\\[var\\(--pc-color-button-focus-ring\\,var\\(--pc-color-text\\)\\)\\][data-focus-visible=true]{--tw-ring-color:var(--pc-color-button-focus-ring,var(--pc-color-text))}.data-\\[focus-visible\\=true\\]\\:outline-none[data-focus-visible=true]{--tw-outline-style:none;outline-style:none}.data-\\[loading\\=true\\]\\:pointer-events-none[data-loading=true]{pointer-events:none}.data-\\[loading\\=true\\]\\:cursor-wait[data-loading=true]{cursor:wait}.data-\\[loading\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-disabled\\,var\\(--pc-color-surface-weakest\\)\\)\\][data-loading=true]{background-color:var(--pc-color-control-background-disabled,var(--pc-color-surface-weakest))}.data-\\[readonly\\=true\\]\\:border-\\[var\\(--pc-color-input-readonly-border\\,var\\(--pc-color-border-weaker\\,var\\(--pc-color-border\\)\\)\\)\\][data-readonly=true]{border-color:var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))}.data-\\[readonly\\=true\\]\\:\\[background-color\\:var\\(--pc-color-input-readonly-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\][data-readonly=true]{background-color:var(--pc-color-input-readonly-background,var(--pc-color-input-background,var(--pc-color-surface)))}.data-\\[readonly\\=true\\]\\:focus-within\\:border-\\[var\\(--pc-color-input-readonly-border\\,var\\(--pc-color-border-weaker\\,var\\(--pc-color-border\\)\\)\\)\\][data-readonly=true]:focus-within{border-color:var(--pc-color-input-readonly-border,var(--pc-color-border-weaker,var(--pc-color-border)))}.data-\\[readonly\\=true\\]\\:focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-readonly-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-readonly-border\\,var\\(--pc-color-border\\)\\)_45\\%\\,transparent\\)\\)\\][data-readonly=true]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-readonly-focus-ring,var(--pc-color-input-readonly-border,var(--pc-color-border)))}@supports (color:color-mix(in lab, red, red)){.data-\\[readonly\\=true\\]\\:focus-within\\:\\[box-shadow\\:0_0_0_var\\(--pc-size-input-focus-ring\\,3px\\)_var\\(--pc-color-input-readonly-focus-ring\\,color-mix\\(in_srgb\\,var\\(--pc-color-input-readonly-border\\,var\\(--pc-color-border\\)\\)_45\\%\\,transparent\\)\\)\\][data-readonly=true]:focus-within{box-shadow:0 0 0 var(--pc-size-input-focus-ring,3px) var(--pc-color-input-readonly-focus-ring,color-mix(in srgb,var(--pc-color-input-readonly-border,var(--pc-color-border)) 45%,transparent))}}@media (hover:hover){.data-\\[readonly\\=true\\]\\:hover\\:\\[background-color\\:var\\(--pc-color-input-readonly-background\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\][data-readonly=true]:hover{background-color:var(--pc-color-input-readonly-background,var(--pc-color-input-background,var(--pc-color-surface)))}}.data-\\[selected\\=true\\]\\:font-medium[data-selected=true]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.data-\\[selected\\=true\\]\\:text-\\[var\\(--pc-color-text\\)\\][data-selected=true]{color:var(--pc-color-text)}.data-\\[selected\\=true\\]\\:\\[background\\:var\\(--pc-color-dropdown-item-background-selected\\,var\\(--pc-color-dropdown-item-background-hover\\,var\\(--pc-color-depth-2\\)\\)\\)\\][data-selected=true]{background:var(--pc-color-dropdown-item-background-selected,var(--pc-color-dropdown-item-background-hover,var(--pc-color-depth-2)))}@media (hover:hover){.data-\\[selected\\=true\\]\\:hover\\:\\[background\\:var\\(--pc-color-dropdown-item-background-selected-hover\\,var\\(--pc-color-dropdown-item-background-selected\\,var\\(--pc-color-depth-2\\)\\)\\)\\][data-selected=true]:hover{background:var(--pc-color-dropdown-item-background-selected-hover,var(--pc-color-dropdown-item-background-selected,var(--pc-color-depth-2)))}}.data-\\[selected\\=true\\]\\:active\\:\\[background\\:var\\(--pc-color-dropdown-item-background-selected-active\\,var\\(--pc-color-dropdown-item-background-active\\,var\\(--pc-color-depth-2\\)\\)\\)\\][data-selected=true]:active{background:var(--pc-color-dropdown-item-background-selected-active,var(--pc-color-dropdown-item-background-active,var(--pc-color-depth-2)))}.data-\\[split-hover\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\][data-split-hover=true]{background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.data-\\[split-hover\\=true\\]\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\][data-split-hover=true]{color:var(--pc-color-control-text,var(--pc-color-text))}.data-\\[split-press\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\][data-split-press=true]{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.data-\\[split-press\\=true\\]\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\][data-split-press=true]{color:var(--pc-color-control-text,var(--pc-color-text))}.data-\\[theme\\=secondary\\]\\:\\[background\\:var\\(--pc-color-switcher-indicator\\,var\\(--pc-color-surface\\)\\)\\][data-theme=secondary]{background:var(--pc-color-switcher-indicator,var(--pc-color-surface))}.data-\\[touch-active\\=true\\]\\:border-\\[var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\][data-touch-active=true]{border-color:var(--pc-color-button-border,var(--pc-color-transparent))}.data-\\[touch-active\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\][data-touch-active=true]{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.data-\\[touch-active\\=true\\]\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\][data-touch-active=true]{color:var(--pc-color-control-text,var(--pc-color-text))}.data-\\[touch-active\\=true\\]\\:\\[background\\:var\\(--pc-color-depth-3\\)\\][data-touch-active=true]{background:var(--pc-color-depth-3)}@media (prefers-reduced-motion:no-preference){.motion-safe\\:animate-\\[pc-loading-indicator-fade-in_var\\(--pc-loading-indicator-fade-in-ms\\)_ease-out_both\\]{animation:pc-loading-indicator-fade-in var(--pc-loading-indicator-fade-in-ms) ease-out both}.motion-safe\\:animate-\\[pc-loading-surface-fade-in_220ms_ease-out_both\\]{animation:.22s ease-out both pc-loading-surface-fade-in}.motion-safe\\:will-change-\\[background-color\\,color\\,transform\\]{will-change:background-color,color,transform}}@media (prefers-reduced-motion:reduce){.motion-reduce\\:transform-none{transform:none}.motion-reduce\\:animate-none{animation:none}.motion-reduce\\:transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.motion-reduce\\:transition-none{transition-property:none}.motion-reduce\\:delay-0{transition-delay:0s}}@media (width>=40rem){.sm\\:right-6{right:calc(var(--spacing) * 6)}.sm\\:left-6{left:calc(var(--spacing) * 6)}.sm\\:col-auto{grid-column:auto}.sm\\:hidden{display:none}.sm\\:inline-flex{display:inline-flex}.sm\\:w-auto{width:auto}.sm\\:max-w-none{max-width:none}.sm\\:max-w-sm{max-width:var(--container-sm)}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.sm\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.sm\\:grid-cols-\\[2fr_1fr_1fr\\]{grid-template-columns:2fr 1fr 1fr}.sm\\:grid-cols-\\[8rem_1fr\\]{grid-template-columns:8rem 1fr}.sm\\:grid-cols-none{grid-template-columns:none}.sm\\:items-center{align-items:center}.sm\\:justify-center{justify-content:center}.sm\\:gap-2{gap:calc(var(--spacing) * 2)}.sm\\:justify-self-auto{justify-self:auto}.sm\\:p-8{padding:calc(var(--spacing) * 8)}}@media (width>=48rem){.md\\:order-1{order:1}.md\\:order-2{order:2}.md\\:col-span-2{grid-column:span 2/span 2}.md\\:flex{display:flex}.md\\:hidden{display:none}.md\\:h-8{height:calc(var(--spacing) * 8)}.md\\:min-h-8{min-height:calc(var(--spacing) * 8)}.md\\:w-0{width:calc(var(--spacing) * 0)}.md\\:w-14{width:calc(var(--spacing) * 14)}.md\\:w-20{width:calc(var(--spacing) * 20)}.md\\:w-40{width:calc(var(--spacing) * 40)}.md\\:w-52{width:calc(var(--spacing) * 52)}.md\\:w-60{width:calc(var(--spacing) * 60)}.md\\:w-72{width:calc(var(--spacing) * 72)}.md\\:w-\\[28rem\\]{width:28rem}.md\\:w-\\[calc\\(10rem\\+0\\.5rem\\)\\]{width:10.5rem}.md\\:w-\\[calc\\(13rem\\+0\\.5rem\\)\\]{width:13.5rem}.md\\:w-\\[calc\\(15rem\\+0\\.5rem\\)\\]{width:15.5rem}.md\\:w-\\[calc\\(18rem\\+0\\.5rem\\)\\]{width:18.5rem}.md\\:w-\\[calc\\(28rem\\+0\\.5rem\\)\\]{width:28.5rem}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:grid-cols-\\[1fr_auto\\]{grid-template-columns:1fr auto}.md\\:flex-row{flex-direction:row}.md\\:items-end{align-items:flex-end}.md\\:items-stretch{align-items:stretch}.md\\:gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.md\\:gap-y-0{row-gap:calc(var(--spacing) * 0)}.md\\:p-8{padding:calc(var(--spacing) * 8)}}@media (width>=64rem){.lg\\:sticky{position:sticky}.lg\\:top-0{top:calc(var(--spacing) * 0)}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:w-0{width:calc(var(--spacing) * 0)}.lg\\:w-14{width:calc(var(--spacing) * 14)}.lg\\:w-40{width:calc(var(--spacing) * 40)}.lg\\:w-52{width:calc(var(--spacing) * 52)}.lg\\:w-60{width:calc(var(--spacing) * 60)}.lg\\:w-72{width:calc(var(--spacing) * 72)}.lg\\:w-\\[22rem\\]{width:22rem}.lg\\:w-\\[28rem\\]{width:28rem}.lg\\:w-\\[calc\\(10rem\\+0\\.5rem\\)\\]{width:10.5rem}.lg\\:w-\\[calc\\(13rem\\+0\\.5rem\\)\\]{width:13.5rem}.lg\\:w-\\[calc\\(15rem\\+0\\.5rem\\)\\]{width:15.5rem}.lg\\:w-\\[calc\\(18rem\\+0\\.5rem\\)\\]{width:18.5rem}.lg\\:w-\\[calc\\(28rem\\+0\\.5rem\\)\\]{width:28.5rem}.lg\\:flex-1{flex:1}.lg\\:flex-shrink-0{flex-shrink:0}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.lg\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.lg\\:grid-cols-\\[1fr_18rem\\]{grid-template-columns:1fr 18rem}.lg\\:flex-row{flex-direction:row}.lg\\:items-start{align-items:flex-start}.lg\\:self-start{align-self:flex-start}.lg\\:p-10{padding:calc(var(--spacing) * 10)}}@media (width>=80rem){.xl\\:sticky{position:sticky}.xl\\:top-0{top:calc(var(--spacing) * 0)}.xl\\:block{display:block}.xl\\:grid{display:grid}.xl\\:hidden{display:none}.xl\\:w-\\[22rem\\]{width:22rem}.xl\\:w-\\[24rem\\]{width:24rem}.xl\\:w-\\[32rem\\]{width:32rem}.xl\\:w-\\[33vw\\]{width:33vw}.xl\\:min-w-0{min-width:calc(var(--spacing) * 0)}.xl\\:flex-1{flex:1}.xl\\:flex-shrink-0{flex-shrink:0}.xl\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.xl\\:grid-cols-\\[1\\.1fr_0\\.9fr\\]{grid-template-columns:1.1fr .9fr}.xl\\:grid-cols-\\[6rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:6rem minmax(0,1fr)}.xl\\:grid-cols-\\[7rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:7rem minmax(0,1fr)}.xl\\:grid-cols-\\[8rem_minmax\\(0\\,1fr\\)\\]{grid-template-columns:8rem minmax(0,1fr)}.xl\\:grid-cols-\\[12rem_repeat\\(3\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(3,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(4\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(4,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(7\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(7,minmax(0,1fr))}.xl\\:grid-cols-\\[12rem_repeat\\(8\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:12rem repeat(8,minmax(0,1fr))}.xl\\:grid-cols-\\[13rem_repeat\\(5\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:13rem repeat(5,minmax(0,1fr))}.xl\\:grid-cols-\\[13rem_repeat\\(6\\,minmax\\(0\\,1fr\\)\\)\\]{grid-template-columns:13rem repeat(6,minmax(0,1fr))}.xl\\:flex-row{flex-direction:row}.xl\\:items-start{align-items:flex-start}.xl\\:self-start{align-self:flex-start}.xl\\:pt-3{padding-top:calc(var(--spacing) * 3)}}@media (width>=96rem){.\\32 xl\\:sticky{position:sticky}.\\32 xl\\:top-0{top:calc(var(--spacing) * 0)}.\\32 xl\\:block{display:block}.\\32 xl\\:hidden{display:none}.\\32 xl\\:w-\\[24rem\\]{width:24rem}.\\32 xl\\:w-\\[32rem\\]{width:32rem}.\\32 xl\\:w-\\[33vw\\]{width:33vw}.\\32 xl\\:flex-shrink-0{flex-shrink:0}.\\32 xl\\:flex-row{flex-direction:row}.\\32 xl\\:items-start{align-items:flex-start}.\\32 xl\\:self-start{align-self:flex-start}}@media (width>=110rem){.min-\\[110rem\\]\\:sticky{position:sticky}.min-\\[110rem\\]\\:top-0{top:calc(var(--spacing) * 0)}.min-\\[110rem\\]\\:block{display:block}.min-\\[110rem\\]\\:hidden{display:none}.min-\\[110rem\\]\\:w-\\[24rem\\]{width:24rem}.min-\\[110rem\\]\\:w-\\[32rem\\]{width:32rem}.min-\\[110rem\\]\\:w-\\[33vw\\]{width:33vw}.min-\\[110rem\\]\\:flex-shrink-0{flex-shrink:0}.min-\\[110rem\\]\\:flex-row{flex-direction:row}.min-\\[110rem\\]\\:items-start{align-items:flex-start}.min-\\[110rem\\]\\:self-start{align-self:flex-start}}@container interactive-prompt not (width>=32rem){.\\@max-lg\\/interactive-prompt\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}}@container interactive-prompt not (width>=28rem){.\\@max-md\\/interactive-prompt\\:h-12{height:calc(var(--spacing) * 12)}.\\@max-md\\/interactive-prompt\\:w-12{width:calc(var(--spacing) * 12)}}@container interactive-prompt not (width>=24rem){.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.8rem\\]{left:-.8rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.68rem\\]{left:-.68rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[0\\.75rem\\]{left:-.75rem}.\\@max-sm\\/interactive-prompt\\:-left-\\[1rem\\]{left:-1rem}.\\@max-sm\\/interactive-prompt\\:mt-2\\.5{margin-top:calc(var(--spacing) * 2.5)}.\\@max-sm\\/interactive-prompt\\:ml-1{margin-left:calc(var(--spacing) * 1)}.\\@max-sm\\/interactive-prompt\\:ml-\\[2\\.5rem\\]{margin-left:2.5rem}.\\@max-sm\\/interactive-prompt\\:ml-\\[3\\.25rem\\]{margin-left:3.25rem}.\\@max-sm\\/interactive-prompt\\:ml-\\[3rem\\]{margin-left:3rem}.\\@max-sm\\/interactive-prompt\\:\\!h-9{height:calc(var(--spacing) * 9)!important}.\\@max-sm\\/interactive-prompt\\:\\!h-10{height:calc(var(--spacing) * 10)!important}.\\@max-sm\\/interactive-prompt\\:h-\\[2\\.7rem\\]{height:2.7rem}.\\@max-sm\\/interactive-prompt\\:h-\\[2\\.25rem\\]{height:2.25rem}.\\@max-sm\\/interactive-prompt\\:h-\\[2\\.55rem\\]{height:2.55rem}.\\@max-sm\\/interactive-prompt\\:h-\\[3\\.3rem\\]{height:3.3rem}.\\@max-sm\\/interactive-prompt\\:\\!w-9{width:calc(var(--spacing) * 9)!important}.\\@max-sm\\/interactive-prompt\\:\\!w-10{width:calc(var(--spacing) * 10)!important}.\\@max-sm\\/interactive-prompt\\:w-\\[0\\.8rem\\]{width:.8rem}.\\@max-sm\\/interactive-prompt\\:w-\\[0\\.68rem\\]{width:.68rem}.\\@max-sm\\/interactive-prompt\\:w-\\[0\\.75rem\\]{width:.75rem}.\\@max-sm\\/interactive-prompt\\:w-\\[1rem\\]{width:1rem}.\\@max-sm\\/interactive-prompt\\:gap-0{gap:calc(var(--spacing) * 0)}.\\@max-sm\\/interactive-prompt\\:gap-0\\.5{gap:calc(var(--spacing) * .5)}.\\@max-sm\\/interactive-prompt\\:gap-1{gap:calc(var(--spacing) * 1)}.\\@max-sm\\/interactive-prompt\\:gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.\\@max-sm\\/interactive-prompt\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@max-sm\\/interactive-prompt\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@max-sm\\/interactive-prompt\\:gap-px{gap:1px}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .2rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-lg\\)\\+0\\.05rem\\)\\]{border-radius:calc(var(--pc-radius-lg) + .05rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.2rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .2rem)}.\\@max-sm\\/interactive-prompt\\:rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.\\@max-sm\\/interactive-prompt\\:p-2\\.5{padding:calc(var(--spacing) * 2.5)}.\\@max-sm\\/interactive-prompt\\:p-3{padding:calc(var(--spacing) * 3)}.\\@max-sm\\/interactive-prompt\\:p-\\[1\\.125rem\\]{padding:1.125rem}.\\@max-sm\\/interactive-prompt\\:\\!px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@max-sm\\/interactive-prompt\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-1{padding-block:calc(var(--spacing) * 1)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@max-sm\\/interactive-prompt\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@max-sm\\/interactive-prompt\\:pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.\\@max-sm\\/interactive-prompt\\:\\!text-base{font-size:var(--text-base)!important;line-height:var(--tw-leading,var(--text-base--line-height))!important}.\\@max-sm\\/interactive-prompt\\:\\!text-sm{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\@max-sm\\/interactive-prompt\\:\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.\\@max-sm\\/interactive-prompt\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.\\@max-sm\\/interactive-prompt\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@max-sm\\/interactive-prompt\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.\\@max-sm\\/interactive-prompt\\:leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}.\\@max-sm\\/interactive-prompt\\:leading-6{--tw-leading:calc(var(--spacing) * 6);line-height:calc(var(--spacing) * 6)}.\\@max-sm\\/interactive-prompt\\:tracking-normal{--tw-tracking:var(--tracking-normal);letter-spacing:var(--tracking-normal)}.\\@max-sm\\/interactive-prompt\\:text-wrap{text-wrap:wrap}}@container interactive-prompt not (width>=20rem){.\\@max-xs\\/interactive-prompt\\:\\!text-xs{font-size:var(--text-xs)!important;line-height:var(--tw-leading,var(--text-xs--line-height))!important}.\\@max-xs\\/interactive-prompt\\:leading-4{--tw-leading:calc(var(--spacing) * 4);line-height:calc(var(--spacing) * 4)}}@container (width>=20rem){.\\@xs\\:min-h-9{min-height:calc(var(--spacing) * 9)}.\\@xs\\:min-w-9{min-width:calc(var(--spacing) * 9)}.\\@xs\\:gap-1{gap:calc(var(--spacing) * 1)}.\\@xs\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@xs\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@xs\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@xs\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@xs\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@xs\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@xs\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}}@container (width>=24rem){.\\@sm\\:h-12{height:calc(var(--spacing) * 12)}.\\@sm\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,3rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,3rem))}.\\@sm\\:min-h-\\[11\\.75rem\\]{min-height:11.75rem}.\\@sm\\:w-12{width:calc(var(--spacing) * 12)}.\\@sm\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,3rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,3rem))}.\\@sm\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@sm\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@sm\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@sm\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@sm\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@sm\\:pr-3{padding-right:calc(var(--spacing) * 3)}.\\@sm\\:pb-2{padding-bottom:calc(var(--spacing) * 2)}.\\@sm\\:pl-\\[1\\.1rem\\]{padding-left:1.1rem}.\\@sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@sm\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@sm\\:text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.\\@sm\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@sm\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}.\\@sm\\:text-\\[length\\:var\\(--pc-font-size-bonus-summary\\,var\\(--pc-bonus-summary-font-size\\,1\\.125rem\\)\\)\\]{font-size:var(--pc-font-size-bonus-summary,var(--pc-bonus-summary-font-size,1.125rem))}.\\@sm\\:\\[--pc-payment-list-item-content-inset\\:3\\.5rem\\]{--pc-payment-list-item-content-inset:3.5rem}.\\@sm\\:\\[--pc-payment-list-item-content-inset\\:3\\.75rem\\]{--pc-payment-list-item-content-inset:3.75rem}}@container (width>=28rem){.\\@md\\:-mt-3{margin-top:calc(var(--spacing) * -3)}.\\@md\\:mt-0{margin-top:calc(var(--spacing) * 0)}.\\@md\\:mb-3{margin-bottom:calc(var(--spacing) * 3)}.\\@md\\:mb-4{margin-bottom:calc(var(--spacing) * 4)}.\\@md\\:h-16{height:calc(var(--spacing) * 16)}.\\@md\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,45\\%\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,45%))}.\\@md\\:min-h-\\[10rem\\]{min-height:10rem}.\\@md\\:min-h-\\[27cqw\\]{min-height:27cqw}.\\@md\\:min-h-\\[30cqw\\]{min-height:30cqw}.\\@md\\:min-h-\\[31cqw\\]{min-height:31cqw}.\\@md\\:w-16{width:calc(var(--spacing) * 16)}.\\@md\\:-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:justify-around{justify-content:space-around}.\\@md\\:gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.\\@md\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@md\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@md\\:gap-4{gap:calc(var(--spacing) * 4)}.\\@md\\:gap-5{gap:calc(var(--spacing) * 5)}.\\@md\\:p-2\\.5{padding:calc(var(--spacing) * 2.5)}.\\@md\\:p-3\\.5{padding:calc(var(--spacing) * 3.5)}.\\@md\\:px-2{padding-inline:calc(var(--spacing) * 2)}.\\@md\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@md\\:px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.\\@md\\:px-5{padding-inline:calc(var(--spacing) * 5)}.\\@md\\:py-2{padding-block:calc(var(--spacing) * 2)}.\\@md\\:py-4{padding-block:calc(var(--spacing) * 4)}.\\@md\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@md\\:pt-3{padding-top:calc(var(--spacing) * 3)}.\\@md\\:pt-4{padding-top:calc(var(--spacing) * 4)}.\\@md\\:pb-2{padding-bottom:calc(var(--spacing) * 2)}.\\@md\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.\\@md\\:pb-7{padding-bottom:calc(var(--spacing) * 7)}.\\@md\\:pl-\\[1\\.2rem\\]{padding-left:1.2rem}.\\@md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.\\@md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\@md\\:leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.\\@md\\:\\[--pc-payment-list-item-content-inset\\:3\\.25rem\\]{--pc-payment-list-item-content-inset:3.25rem}.\\@md\\:\\[--pc-payment-list-item-inline-padding\\:0\\.75rem\\]{--pc-payment-list-item-inline-padding:.75rem}.\\@md\\:group-data-\\[stuck\\=true\\]\\:h-8:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,2rem\\)\\)\\]:is(:where(.group)[data-stuck=true] *){height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2rem))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:w-8:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,2rem\\)\\)\\]:is(:where(.group)[data-stuck=true] *){width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2rem))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-xl:is(:where(.group)[data-stuck=true] *){font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=32rem){.\\@lg\\:min-h-\\[12\\.25rem\\]{min-height:12.25rem}.\\@lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@lg\\:justify-start{justify-content:flex-start}.\\@lg\\:gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.\\@lg\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@lg\\:gap-5{gap:calc(var(--spacing) * 5)}.\\@lg\\:p-3\\.5{padding:calc(var(--spacing) * 3.5)}.\\@lg\\:p-6{padding:calc(var(--spacing) * 6)}.\\@lg\\:\\[--pc-payment-list-item-content-inset\\:3\\.625rem\\]{--pc-payment-list-item-content-inset:3.625rem}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.\\@xl\\/preference-panel\\:not-sr-only{clip-path:none;white-space:normal;width:auto;height:auto;margin:0;padding:0;position:static;overflow:visible}.\\@xl\\/preference-panel\\:static{position:static}}@container (width>=36rem){.\\@xl\\:col-span-1{grid-column:span 1/span 1}.\\@xl\\:col-span-2{grid-column:span 2/span 2}.\\@xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@xl\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,4rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,4rem))}.\\@xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@xl\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,4rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,4rem))}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:grid-cols-\\[minmax\\(16rem\\,0\\.95fr\\)_minmax\\(16rem\\,1\\.05fr\\)\\]{grid-template-columns:minmax(16rem,.95fr) minmax(16rem,1.05fr)}}@container (width>=36rem){.\\@xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:items-center{align-items:center}.\\@xl\\/preference-panel\\:items-start{align-items:flex-start}.\\@xl\\/preference-panel\\:gap-x-6{-moz-column-gap:calc(var(--spacing) * 6);column-gap:calc(var(--spacing) * 6)}}@container (width>=36rem){.\\@xl\\:gap-x-6{-moz-column-gap:calc(var(--spacing) * 6);column-gap:calc(var(--spacing) * 6)}.\\@xl\\:px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.\\@xl\\:py-5{padding-block:calc(var(--spacing) * 5)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:pt-5{padding-top:calc(var(--spacing) * 5)}}@container (width>=36rem){.\\@xl\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\@xl\\:pt-5{padding-top:calc(var(--spacing) * 5)}}@container preference-panel (width>=36rem){.\\@xl\\/preference-panel\\:pr-0{padding-right:calc(var(--spacing) * 0)}}@container (width>=36rem){.\\@xl\\:pb-0{padding-bottom:calc(var(--spacing) * 0)}.\\@xl\\:pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.\\@xl\\:\\[--pc-payment-list-item-content-inset\\:4\\.625rem\\]{--pc-payment-list-item-content-inset:4.625rem}}@container (width>=40rem){.\\@\\[40rem\\]\\:block{display:block}.\\@\\[40rem\\]\\:hidden{display:none}.\\@\\[40rem\\]\\:w-60{width:calc(var(--spacing) * 60)}.\\@\\[40rem\\]\\:flex-row{flex-direction:row}}@container (width>=42rem){.\\@2xl\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.\\@2xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=46rem){.\\@\\[46rem\\]\\:block{display:block}.\\@\\[46rem\\]\\:hidden{display:none}.\\@\\[46rem\\]\\:w-60{width:calc(var(--spacing) * 60)}.\\@\\[46rem\\]\\:flex-row{flex-direction:row}}@container (width>=48rem){.\\@3xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@3xl\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,4rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,4rem))}.\\@3xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@3xl\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,4rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,4rem))}.\\@3xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\@3xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=64rem){.\\@5xl\\:block{display:block}.\\@5xl\\:hidden{display:none}.\\@5xl\\:flex-row{flex-direction:row}}@container (width>=80rem){.\\@7xl\\:block{display:block}.\\@7xl\\:hidden{display:none}.\\@7xl\\:flex-row{flex-direction:row}}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:transition-\\[background-color\\] [data-pc-appearance=solid]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:duration-\\[250ms\\] [data-pc-appearance=solid]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:ease-out [data-pc-appearance=solid]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}.peer-checked\\:\\[\\&_\\[data-slot\\=checkbox-check\\]\\]\\:opacity-100:is(:where(.peer):checked~*) [data-slot=checkbox-check]{opacity:1}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:transition-colors [data-slot=interactive-prompt-tail]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:duration-\\[250ms\\] [data-slot=interactive-prompt-tail]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:ease-out [data-slot=interactive-prompt-tail]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:hover [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:active [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}.\\[\\&_\\[data-switcher-mode\\=full\\]\\]\\:w-full [data-switcher-mode=full]{width:100%}.\\[\\&_a\\]\\:break-words a{overflow-wrap:break-word}.\\[\\&_a\\]\\:underline a{text-decoration-line:underline}.\\[\\&_a\\]\\:underline-offset-2 a{text-underline-offset:2px}.\\[\\&_button\\:not\\(\\:disabled\\)\\]\\:cursor-pointer button:not(:disabled){cursor:pointer}.\\[\\&_code\\]\\:break-words code{overflow-wrap:break-word}.\\[\\&_h1\\]\\:mt-8 h1{margin-top:calc(var(--spacing) * 8)}.\\[\\&_h1\\]\\:break-words h1{overflow-wrap:break-word}.\\[\\&_h1\\+\\*\\]\\:mt-2 h1+*{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h1\\+h1\\]\\:mt-3 h1+h1,.\\[\\&_h1\\+h2\\]\\:mt-3 h1+h2{margin-top:calc(var(--spacing) * 3)}.\\[\\&_h1\\:first-child\\]\\:mt-0 h1:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h2\\]\\:mt-7 h2{margin-top:calc(var(--spacing) * 7)}.\\[\\&_h2\\]\\:break-words h2{overflow-wrap:break-word}.\\[\\&_h2\\+\\*\\]\\:mt-2 h2+*{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h2\\+h2\\]\\:mt-3 h2+h2,.\\[\\&_h2\\+h3\\]\\:mt-3 h2+h3{margin-top:calc(var(--spacing) * 3)}.\\[\\&_h2\\:first-child\\]\\:mt-0 h2:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h3\\]\\:mt-5 h3{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h3\\]\\:break-words h3{overflow-wrap:break-word}.\\[\\&_h3\\+\\*\\]\\:mt-2 h3+*,.\\[\\&_h3\\+h3\\]\\:mt-2 h3+h3,.\\[\\&_h3\\+h4\\]\\:mt-2 h3+h4{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h3\\+p\\]\\:mt-1\\.5 h3+p{margin-top:calc(var(--spacing) * 1.5)}.\\[\\&_h3\\:first-child\\]\\:mt-0 h3:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h4\\]\\:mt-5 h4{margin-top:calc(var(--spacing) * 5)}.\\[\\&_h4\\]\\:break-words h4{overflow-wrap:break-word}.\\[\\&_h4\\+\\*\\]\\:mt-2 h4+*,.\\[\\&_h4\\+h4\\]\\:mt-2 h4+h4,.\\[\\&_h4\\+h5\\]\\:mt-2 h4+h5{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h4\\:first-child\\]\\:mt-0 h4:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h5\\]\\:mt-4 h5{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h5\\]\\:break-words h5{overflow-wrap:break-word}.\\[\\&_h5\\+\\*\\]\\:mt-2 h5+*,.\\[\\&_h5\\+h5\\]\\:mt-2 h5+h5,.\\[\\&_h5\\+h6\\]\\:mt-2 h5+h6{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h5\\:first-child\\]\\:mt-0 h5:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_h6\\]\\:mt-4 h6{margin-top:calc(var(--spacing) * 4)}.\\[\\&_h6\\]\\:break-words h6{overflow-wrap:break-word}.\\[\\&_h6\\+\\*\\]\\:mt-2 h6+*,.\\[\\&_h6\\+h6\\]\\:mt-2 h6+h6{margin-top:calc(var(--spacing) * 2)}.\\[\\&_h6\\:first-child\\]\\:mt-0 h6:first-child{margin-top:calc(var(--spacing) * 0)}.\\[\\&_iframe\\]\\:h-full iframe{height:100%}.\\[\\&_iframe\\]\\:w-full iframe{width:100%}.\\[\\&_img\\]\\:\\!h-full img{height:100%!important}.\\[\\&_img\\]\\:h-full img{height:100%}.\\[\\&_img\\]\\:\\!w-full img{width:100%!important}.\\[\\&_img\\]\\:w-full img{width:100%}.\\[\\&_img\\]\\:object-contain img{-o-object-fit:contain;object-fit:contain}.\\[\\&_li\\]\\:\\!text-sm li{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\[\\&_li\\]\\:\\!leading-snug li{--tw-leading:var(--leading-snug)!important;line-height:var(--leading-snug)!important}.\\[\\&_li\\]\\:break-words li{overflow-wrap:break-word}.\\[\\&_ol\\+p\\]\\:mt-2 ol+p,.\\[\\&_ol\\+pre\\]\\:mt-2 ol+pre{margin-top:calc(var(--spacing) * 2)}.\\[\\&_p\\]\\:\\!text-sm p{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\[\\&_p\\]\\:\\!leading-snug p{--tw-leading:var(--leading-snug)!important;line-height:var(--leading-snug)!important}.\\[\\&_p\\]\\:break-words p{overflow-wrap:break-word}.\\[\\&_p\\+ol\\]\\:mt-2 p+ol,.\\[\\&_p\\+p\\]\\:mt-2 p+p,.\\[\\&_p\\+pre\\]\\:mt-2 p+pre,.\\[\\&_p\\+table\\]\\:mt-2 p+table,.\\[\\&_p\\+ul\\]\\:mt-2 p+ul,.\\[\\&_pre\\+ol\\]\\:mt-2 pre+ol,.\\[\\&_pre\\+p\\]\\:mt-2 pre+p,.\\[\\&_pre\\+ul\\]\\:mt-2 pre+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&_svg\\]\\:block svg{display:block}.\\[\\&_svg\\]\\:\\!h-full svg{height:100%!important}.\\[\\&_svg\\]\\:h-2\\.5 svg{height:calc(var(--spacing) * 2.5)}.\\[\\&_svg\\]\\:h-3 svg{height:calc(var(--spacing) * 3)}.\\[\\&_svg\\]\\:h-3\\.5 svg{height:calc(var(--spacing) * 3.5)}.\\[\\&_svg\\]\\:h-4 svg{height:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:h-5 svg{height:calc(var(--spacing) * 5)}.\\[\\&_svg\\]\\:h-\\[16px\\] svg{height:16px}.\\[\\&_svg\\]\\:h-\\[17px\\] svg{height:17px}.\\[\\&_svg\\]\\:h-\\[18px\\] svg{height:18px}.\\[\\&_svg\\]\\:h-full svg{height:100%}.\\[\\&_svg\\]\\:\\!w-full svg{width:100%!important}.\\[\\&_svg\\]\\:w-2\\.5 svg{width:calc(var(--spacing) * 2.5)}.\\[\\&_svg\\]\\:w-3 svg{width:calc(var(--spacing) * 3)}.\\[\\&_svg\\]\\:w-3\\.5 svg{width:calc(var(--spacing) * 3.5)}.\\[\\&_svg\\]\\:w-4 svg{width:calc(var(--spacing) * 4)}.\\[\\&_svg\\]\\:w-5 svg{width:calc(var(--spacing) * 5)}.\\[\\&_svg\\]\\:w-\\[16px\\] svg{width:16px}.\\[\\&_svg\\]\\:w-\\[17px\\] svg{width:17px}.\\[\\&_svg\\]\\:w-\\[18px\\] svg{width:18px}.\\[\\&_svg\\]\\:w-full svg{width:100%}.\\[\\&_table\\+p\\]\\:mt-2 table+p,.\\[\\&_ul\\+p\\]\\:mt-2 ul+p,.\\[\\&_ul\\+pre\\]\\:mt-2 ul+pre{margin-top:calc(var(--spacing) * 2)}@container (width>=28rem){.\\@md\\:\\[\\&\\&\\]\\:\\!px-1.\\@md\\:\\[\\&\\&\\]\\:\\!px-1{padding-inline:calc(var(--spacing) * 1)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-1\\.5.\\@md\\:\\[\\&\\&\\]\\:\\!px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-2.\\@md\\:\\[\\&\\&\\]\\:\\!px-2{padding-inline:calc(var(--spacing) * 2)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-3.\\@md\\:\\[\\&\\&\\]\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-3\\.5.\\@md\\:\\[\\&\\&\\]\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-5.\\@md\\:\\[\\&\\&\\]\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!px-6.\\@md\\:\\[\\&\\&\\]\\:\\!px-6{padding-inline:calc(var(--spacing) * 6)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!py-0\\.5.\\@md\\:\\[\\&\\&\\]\\:\\!py-0\\.5{padding-block:calc(var(--spacing) * .5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!py-1\\.5.\\@md\\:\\[\\&\\&\\]\\:\\!py-1\\.5{padding-block:calc(var(--spacing) * 1.5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!py-2.\\@md\\:\\[\\&\\&\\]\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!py-2\\.5.\\@md\\:\\[\\&\\&\\]\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@md\\:\\[\\&\\&\\]\\:\\!py-3.\\@md\\:\\[\\&\\&\\]\\:\\!py-3{padding-block:calc(var(--spacing) * 3)!important}.\\@md\\:\\[\\&\\&\\]\\:text-base.\\@md\\:\\[\\&\\&\\]\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:\\[\\&\\&\\]\\:text-lg.\\@md\\:\\[\\&\\&\\]\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:\\[\\&\\&\\]\\:text-sm.\\@md\\:\\[\\&\\&\\]\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\].\\@md\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@md\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\].\\@md\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}}@container (width>=32rem){.\\@lg\\:\\[\\&\\&\\]\\:\\!px-1.\\@lg\\:\\[\\&\\&\\]\\:\\!px-1{padding-inline:calc(var(--spacing) * 1)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-1\\.5.\\@lg\\:\\[\\&\\&\\]\\:\\!px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-2.\\@lg\\:\\[\\&\\&\\]\\:\\!px-2{padding-inline:calc(var(--spacing) * 2)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-3.\\@lg\\:\\[\\&\\&\\]\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-3\\.5.\\@lg\\:\\[\\&\\&\\]\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-5.\\@lg\\:\\[\\&\\&\\]\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!px-6.\\@lg\\:\\[\\&\\&\\]\\:\\!px-6{padding-inline:calc(var(--spacing) * 6)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!py-0\\.5.\\@lg\\:\\[\\&\\&\\]\\:\\!py-0\\.5{padding-block:calc(var(--spacing) * .5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!py-1\\.5.\\@lg\\:\\[\\&\\&\\]\\:\\!py-1\\.5{padding-block:calc(var(--spacing) * 1.5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!py-2.\\@lg\\:\\[\\&\\&\\]\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!py-2\\.5.\\@lg\\:\\[\\&\\&\\]\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@lg\\:\\[\\&\\&\\]\\:\\!py-3.\\@lg\\:\\[\\&\\&\\]\\:\\!py-3{padding-block:calc(var(--spacing) * 3)!important}.\\@lg\\:\\[\\&\\&\\]\\:text-base.\\@lg\\:\\[\\&\\&\\]\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@lg\\:\\[\\&\\&\\]\\:text-lg.\\@lg\\:\\[\\&\\&\\]\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@lg\\:\\[\\&\\&\\]\\:text-sm.\\@lg\\:\\[\\&\\&\\]\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@lg\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\].\\@lg\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@lg\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\].\\@lg\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}}@container (width>=36rem){.\\@xl\\:\\[\\&\\&\\]\\:\\!px-1.\\@xl\\:\\[\\&\\&\\]\\:\\!px-1{padding-inline:calc(var(--spacing) * 1)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-1\\.5.\\@xl\\:\\[\\&\\&\\]\\:\\!px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-2.\\@xl\\:\\[\\&\\&\\]\\:\\!px-2{padding-inline:calc(var(--spacing) * 2)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-3.\\@xl\\:\\[\\&\\&\\]\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-3\\.5.\\@xl\\:\\[\\&\\&\\]\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-5.\\@xl\\:\\[\\&\\&\\]\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!px-6.\\@xl\\:\\[\\&\\&\\]\\:\\!px-6{padding-inline:calc(var(--spacing) * 6)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!py-0\\.5.\\@xl\\:\\[\\&\\&\\]\\:\\!py-0\\.5{padding-block:calc(var(--spacing) * .5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!py-1\\.5.\\@xl\\:\\[\\&\\&\\]\\:\\!py-1\\.5{padding-block:calc(var(--spacing) * 1.5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!py-2.\\@xl\\:\\[\\&\\&\\]\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!py-2\\.5.\\@xl\\:\\[\\&\\&\\]\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@xl\\:\\[\\&\\&\\]\\:\\!py-3.\\@xl\\:\\[\\&\\&\\]\\:\\!py-3{padding-block:calc(var(--spacing) * 3)!important}.\\@xl\\:\\[\\&\\&\\]\\:text-base.\\@xl\\:\\[\\&\\&\\]\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@xl\\:\\[\\&\\&\\]\\:text-lg.\\@xl\\:\\[\\&\\&\\]\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@xl\\:\\[\\&\\&\\]\\:text-sm.\\@xl\\:\\[\\&\\&\\]\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@xl\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\].\\@xl\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@xl\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\].\\@xl\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}}@container (width>=42rem){.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-1.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-1{padding-inline:calc(var(--spacing) * 1)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-1\\.5.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-2.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-2{padding-inline:calc(var(--spacing) * 2)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-3.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-3{padding-inline:calc(var(--spacing) * 3)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-3\\.5.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-5.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-5{padding-inline:calc(var(--spacing) * 5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-6.\\@2xl\\:\\[\\&\\&\\]\\:\\!px-6{padding-inline:calc(var(--spacing) * 6)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-0\\.5.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-0\\.5{padding-block:calc(var(--spacing) * .5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-1\\.5.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-1\\.5{padding-block:calc(var(--spacing) * 1.5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-2.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-2{padding-block:calc(var(--spacing) * 2)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-2\\.5.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-2\\.5{padding-block:calc(var(--spacing) * 2.5)!important}.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-3.\\@2xl\\:\\[\\&\\&\\]\\:\\!py-3{padding-block:calc(var(--spacing) * 3)!important}.\\@2xl\\:\\[\\&\\&\\]\\:text-base.\\@2xl\\:\\[\\&\\&\\]\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@2xl\\:\\[\\&\\&\\]\\:text-lg.\\@2xl\\:\\[\\&\\&\\]\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@2xl\\:\\[\\&\\&\\]\\:text-sm.\\@2xl\\:\\[\\&\\&\\]\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@2xl\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\].\\@2xl\\:\\[\\&\\&\\]\\:text-\\[0\\.625rem\\]{font-size:.625rem}.\\@2xl\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\].\\@2xl\\:\\[\\&\\&\\]\\:text-\\[0\\.6875rem\\]{font-size:.6875rem}}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:-internal-autofill-previewed{background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[caret-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-internal-autofill-previewed{caret-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-input-autofill-background\\)_inset\\]:-internal-autofill-previewed{box-shadow:0 0 0 1000px var(--pc-color-input-autofill-background) inset}.\\[\\&\\:-internal-autofill-previewed\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-internal-autofill-previewed{-webkit-text-fill-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:-internal-autofill-selected{background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-internal-autofill-selected{background-color:var(--pc-color-transparent)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[caret-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-internal-autofill-selected{caret-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{caret-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-input-autofill-background\\)_inset\\]:-internal-autofill-selected{box-shadow:0 0 0 1000px var(--pc-color-input-autofill-background) inset}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-internal-autofill-selected{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-internal-autofill-selected{-webkit-text-fill-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:-webkit-autofill{background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:-webkit-autofill\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-webkit-autofill{background-color:var(--pc-color-transparent)}.\\[\\&\\:-webkit-autofill\\]\\:\\[caret-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-webkit-autofill{caret-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{caret-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-input-autofill-background\\)_inset\\]:-webkit-autofill{box-shadow:0 0 0 1000px var(--pc-color-input-autofill-background) inset}.\\[\\&\\:-webkit-autofill\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-webkit-autofill{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-webkit-autofill\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-input-autofill-text\\)\\]:-webkit-autofill{-webkit-text-fill-color:var(--pc-color-input-autofill-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:hidden::-webkit-calendar-picker-indicator{display:none}.\\[\\&\\:\\:-webkit-calendar-picker-indicator\\]\\:appearance-none::-webkit-calendar-picker-indicator{appearance:none}.\\[\\&\\:\\:-webkit-clear-button\\]\\:hidden::-webkit-clear-button{display:none}.\\[\\&\\:\\:-webkit-inner-spin-button\\]\\:hidden::-webkit-inner-spin-button{display:none}.\\[\\&\\:\\:-webkit-inner-spin-button\\]\\:appearance-none::-webkit-inner-spin-button{appearance:none}.\\[\\&\\:\\:-webkit-outer-spin-button\\]\\:hidden::-webkit-outer-spin-button{display:none}.\\[\\&\\:\\:-webkit-outer-spin-button\\]\\:appearance-none::-webkit-outer-spin-button{appearance:none}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:h-\\[6px\\]::-webkit-scrollbar{height:6px}.\\[\\&\\:\\:-webkit-scrollbar\\]\\:w-\\[6px\\]::-webkit-scrollbar{width:6px}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:rounded-\\[var\\(--pc-radius-full\\)\\]::-webkit-scrollbar-thumb{border-radius:var(--pc-radius-full)}.\\[\\&\\:\\:-webkit-scrollbar-thumb\\]\\:bg-\\[var\\(--pc-color-depth-3\\)\\]::-webkit-scrollbar-thumb{background-color:var(--pc-color-depth-3)}.\\[\\&\\:\\:-webkit-scrollbar-track\\]\\:bg-transparent::-webkit-scrollbar-track{background-color:#0000}.\\[\\&\\:\\:-webkit-search-cancel-button\\]\\:hidden::-webkit-search-cancel-button{display:none}.\\[\\&\\:\\:-webkit-search-decoration\\]\\:hidden::-webkit-search-decoration{display:none}.\\[\\&\\:\\:-webkit-search-results-button\\]\\:hidden::-webkit-search-results-button{display:none}.\\[\\&\\:\\:-webkit-search-results-decoration\\]\\:hidden::-webkit-search-results-decoration{display:none}.\\[\\&\\:first-child\\]\\:flex-\\[1\\.4_1_0\\]:first-child{flex:1.4 1 0}.\\[\\&\\:first-child\\]\\:flex-\\[1\\.7_1_10rem\\]:first-child{flex:1.7 10rem}.\\[\\&\\:has\\(input\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(input:-internal-autofill-previewed){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(input\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(input:-internal-autofill-selected){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(input\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(input:-webkit-autofill){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(select\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(select:-internal-autofill-previewed){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(select\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(select:-internal-autofill-selected){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(select\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(select:-webkit-autofill){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(textarea\\:-internal-autofill-previewed\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(textarea:-internal-autofill-previewed){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(textarea\\:-internal-autofill-selected\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(textarea:-internal-autofill-selected){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:has\\(textarea\\:-webkit-autofill\\)\\]\\:\\[background-color\\:var\\(--pc-color-input-autofill-background\\)\\]:has(textarea:-webkit-autofill){background-color:var(--pc-color-input-autofill-background)}.\\[\\&\\:not\\(\\:first-child\\)\\]\\:flex-\\[0\\.7_1_4\\.25rem\\]:not(:first-child){flex:.7 4.25rem}.\\[\\&\\>\\*\\]\\:h-full>*{height:100%}.\\[\\&\\>\\*\\]\\:\\!max-h-none>*{max-height:none!important}.\\[\\&\\>\\*\\]\\:w-full>*{width:100%}.\\[\\&\\>\\*\\]\\:\\!max-w-none>*{max-width:none!important}@media (width>=64rem){.\\[\\&\\>\\*\\]\\:lg\\:col-span-4>*{grid-column:span 4/span 4}}.\\[\\&\\>button\\+button\\]\\:ml-1>button+button{margin-left:calc(var(--spacing) * 1)}.\\[\\&\\>ol\\+p\\]\\:mt-2>ol+p,.\\[\\&\\>ol\\+pre\\]\\:mt-2>ol+pre{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>option\\]\\:bg-\\[var\\(--pc-color-surface\\)\\]>option{background-color:var(--pc-color-surface)}.\\[\\&\\>option\\]\\:text-\\[var\\(--pc-color-text\\)\\]>option{color:var(--pc-color-text)}.\\[\\&\\>p\\+ol\\]\\:mt-2>p+ol,.\\[\\&\\>p\\+p\\]\\:mt-2>p+p,.\\[\\&\\>p\\+pre\\]\\:mt-2>p+pre,.\\[\\&\\>p\\+table\\]\\:mt-2>p+table,.\\[\\&\\>p\\+ul\\]\\:mt-2>p+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>p\\:first-child\\]\\:inline>p:first-child{display:inline}.\\[\\&\\>pre\\+ol\\]\\:mt-2>pre+ol,.\\[\\&\\>pre\\+p\\]\\:mt-2>pre+p,.\\[\\&\\>pre\\+ul\\]\\:mt-2>pre+ul{margin-top:calc(var(--spacing) * 2)}.\\[\\&\\>svg\\]\\:size-4>svg{width:calc(var(--spacing) * 4);height:calc(var(--spacing) * 4)}.\\[\\&\\>svg\\]\\:size-5>svg{width:calc(var(--spacing) * 5);height:calc(var(--spacing) * 5)}.\\[\\&\\>svg\\]\\:h-full>svg{height:100%}.\\[\\&\\>svg\\]\\:max-h-full>svg{max-height:100%}.\\[\\&\\>svg\\]\\:w-full>svg{width:100%}.\\[\\&\\>svg\\]\\:max-w-full>svg{max-width:100%}.\\[\\&\\>svg\\]\\:shrink-0>svg{flex-shrink:0}.\\[\\&\\>table\\+p\\]\\:mt-2>table+p,.\\[\\&\\>ul\\+p\\]\\:mt-2>ul+p,.\\[\\&\\>ul\\+pre\\]\\:mt-2>ul+pre{margin-top:calc(var(--spacing) * 2)}.pc-accordion-item+.\\[\\.pc-accordion-item\\+\\&\\]\\:-mt-px{margin-top:-1px}@container (height<=520px){.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2\\.25{padding-top:calc(var(--spacing) * 2.25)}}@container (height<=620px){.\\[\\@container_\\(max-height\\:620px\\)\\]\\:justify-start{justify-content:flex-start}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-3{padding-top:calc(var(--spacing) * 3)}}@container (width<=500px){.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch{align-items:stretch}}@container (width<=520px){.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-2{--tw-translate-y:calc(var(--spacing) * -2);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-2\\.5{--tw-translate-y:calc(var(--spacing) * -2.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-3{--tw-translate-y:calc(var(--spacing) * -3);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:translate-y-1{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:gap-1{gap:calc(var(--spacing) * 1)}}@container (width<=620px){.\\[\\@container_\\(max-width\\:620px\\)\\]\\:pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}}@container (width>=520px){.\\[\\@container_\\(min-width\\:520px\\)\\]\\:-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:min-h-\\[31\\.5cqw\\]{min-height:31.5cqw}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:gap-\\[1\\.125rem\\]{gap:1.125rem}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}}[data-pc-bottom-rail-fade=true] .\\[\\[data-pc-bottom-rail-fade\\=true\\]_\\&\\]\\:scroll-pb-\\[44px\\]{scroll-padding-bottom:44px}}.pc-skeleton-shimmer{isolation:isolate;position:relative;overflow:hidden}.pc-skeleton-shimmer:after{content:\"\";background:linear-gradient(90deg,#0000 0%,#fff 50%,#0000 100%);width:45%;position:absolute;top:0;bottom:0;left:-55%;transform:skew(-18deg)}@supports (color:color-mix(in lab, red, red)){.pc-skeleton-shimmer:after{background:linear-gradient(90deg, transparent 0%, color-mix(in srgb, #fff 72%, var(--pc-color-surface) 28%) 50%, transparent 100%)}}.pc-skeleton-shimmer:after{opacity:.65;animation:1.2s linear infinite pc-skeleton-shimmer}@keyframes pc-skeleton-shimmer{to{left:130%}}@keyframes pc-card-brand-logo-enter{0%{opacity:0;filter:blur(4px);transform:translate(8px,2px)scale(.96)}58%{opacity:1;filter:blur();transform:translate(-1px)scale(1.01)}to{opacity:1;filter:blur();transform:translate(0)scale(1)}}@keyframes pc-card-brand-shell-shift{0%{transform:translate(0)}to{transform:translate(0)scale(1)}}@keyframes pc-card-brand-shell-shift-replay{0%{transform:translate(0)}to{transform:translate(0)scale(1)}}@keyframes pc-card-brand-sheen-enter{0%{opacity:0;transform:translate(-46%)skew(-14deg)}34%{opacity:.34}to{opacity:0;transform:translate(46%)skew(-14deg)}}@keyframes pc-card-brand-sheen-enter-replay{0%{opacity:0;transform:translate(-46%)skew(-14deg)}34%{opacity:.34}to{opacity:0;transform:translate(46%)skew(-14deg)}}.pc-card-brand-shell-shift,.pc-card-brand-shell-shift-a{transform-origin:50% 70%;animation:.76s cubic-bezier(.22,1,.36,1) both pc-card-brand-shell-shift}.pc-card-brand-shell-shift-b{transform-origin:50% 70%;animation:.76s cubic-bezier(.22,1,.36,1) both pc-card-brand-shell-shift-replay}.pc-card-brand-logo-enter{transform-origin:100%;animation:.46s cubic-bezier(.22,1,.36,1) both pc-card-brand-logo-enter}.pc-card-brand-sheen-enter,.pc-card-brand-sheen-enter-a{animation:.92s cubic-bezier(.22,1,.36,1) both pc-card-brand-sheen-enter}.pc-card-brand-sheen-enter-b{animation:.92s cubic-bezier(.22,1,.36,1) both pc-card-brand-sheen-enter-replay}@media (prefers-reduced-motion:reduce){.pc-card-brand-shell-shift,.pc-card-brand-shell-shift-a,.pc-card-brand-shell-shift-b,.pc-card-brand-logo-enter,.pc-card-brand-sheen-enter,.pc-card-brand-sheen-enter-a,.pc-card-brand-sheen-enter-b{animation:none}}@keyframes pc-linear-progress-indeterminate{0%{transform:translate(-130%)scaleX(.85)}55%{transform:translate(30%)scaleX(1)}to{transform:translate(290%)scaleX(.7)}}.pc-fullscreen-loader-enter{animation:pc-fullscreen-loader-enter var(--pc-fullscreen-loader-fade-in-ms) cubic-bezier(.22, 1, .36, 1) both;will-change:opacity}@media (prefers-reduced-motion:reduce){.pc-fullscreen-loader-enter{animation:none}}@keyframes pc-fullscreen-loader-enter{0%{opacity:0}36%{opacity:.58}68%{opacity:.9}to{opacity:1}}@keyframes pc-loading-indicator-fade-in{0%{opacity:0}to{opacity:1}}@keyframes pc-loading-surface-fade-in{0%{opacity:0}to{opacity:1}}@keyframes pc-split-view-sidebar-open{0%{opacity:0;transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}35%{opacity:1}to{opacity:1;transform:translate(0)}}@keyframes pc-split-view-sidebar-close{0%{opacity:1;transform:translate(0)}35%{opacity:1}to{opacity:0;transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}}@keyframes pc-split-view-content-open{0%{transform:translate3d(calc(var(--pc-split-view-sidebar-offset,15.5rem) * -1), 0, 0)}to{transform:translate(0)}}@keyframes pc-split-view-content-close{0%{transform:translate3d(var(--pc-split-view-sidebar-offset,15.5rem), 0, 0)}to{transform:translate(0)}}[data-split-view-root][data-sidebar-motion=opening] [data-split-view-sidebar-content]{backface-visibility:hidden;will-change:transform, opacity;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-sidebar-open}[data-split-view-root][data-sidebar-motion=closing] [data-split-view-sidebar-content]{backface-visibility:hidden;will-change:transform, opacity;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-sidebar-close}[data-split-view-content][data-sidebar-motion=opening]{backface-visibility:hidden;will-change:transform;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-content-open}[data-split-view-content][data-sidebar-motion=closing]{backface-visibility:hidden;will-change:transform;animation:.44s cubic-bezier(.38,.62,.2,1) both pc-split-view-content-close}@media (prefers-reduced-motion:reduce){[data-split-view-root][data-sidebar-motion] [data-split-view-sidebar-content],[data-split-view-content][data-sidebar-motion]{opacity:1;will-change:auto;animation:none;transform:none}}.pc-code-input .monaco-editor,.pc-code-input .monaco-editor-background,.pc-code-input .monaco-diff-editor,.pc-code-input .monaco-diff-editor .monaco-editor-background{background-color:#0000!important}.pc-code-input .monaco-editor .margin,.pc-code-input .monaco-diff-editor .margin,.pc-code-input .monaco-editor .margin-view-overlays .current-line-margin,.pc-code-input .monaco-editor .margin-view-overlays .current-line-margin-both,.pc-code-input .monaco-diff-editor .margin-view-overlays .current-line-margin,.pc-code-input .monaco-diff-editor .margin-view-overlays .current-line-margin-both{background-color:#0000!important;border:0!important}.pc-code-input .monaco-editor .line-numbers,.pc-code-input .monaco-editor .line-numbers.active-line-number,.pc-code-input .monaco-diff-editor .line-numbers,.pc-code-input .monaco-diff-editor .line-numbers.active-line-number{color:var(--pc-color-input-helper-text,var(--pc-color-text-muted))!important}.pc-timeline{--pc-timeline-line-width:2px;--pc-timeline-marker-size:.75rem;--pc-timeline-quiet-marker-header-centre:1.625rem;--pc-timeline-featured-marker-header-centre:2.5rem;--pc-timeline-marker-header-centre:var(--pc-timeline-quiet-marker-header-centre);--pc-timeline-next-marker-header-centre:var(--pc-timeline-quiet-marker-header-centre);--pc-timeline-next-marker-size:var(--pc-timeline-marker-size);--pc-timeline-rail-width:2.5rem;--pc-timeline-rail-centre:calc(var(--pc-timeline-rail-width) / 2);--pc-timeline-item-gap:.875rem;--pc-timeline-content-offset:.45rem;--pc-timeline-marker-colour:var(--pc-color-depth-4);--pc-timeline-next-marker-colour:var(--pc-timeline-marker-colour);gap:var(--pc-timeline-item-gap);isolation:isolate;margin:0;padding:0;list-style:none;display:grid}.pc-timeline--compact{--pc-timeline-item-gap:.625rem;--pc-timeline-content-offset:.35rem;--pc-timeline-featured-marker-header-centre:1.875rem}.pc-timeline-item{z-index:1;grid-template-columns:var(--pc-timeline-rail-width) minmax(0, 1fr);-moz-column-gap:var(--pc-timeline-content-offset);align-items:start;column-gap:var(--pc-timeline-content-offset);min-width:0;display:grid;position:relative}.pc-timeline-item:not(:last-child):before,.pc-timeline-item--continues-after:before,.pc-timeline-item--continues-before:after{z-index:0;left:var(--pc-timeline-rail-centre);width:var(--pc-timeline-line-width);content:\"\";border-radius:var(--pc-radius-full);opacity:.55;pointer-events:none;position:absolute;transform:translate(-50%)}.pc-timeline-item:not(:last-child):before{top:calc(var(--pc-timeline-marker-header-centre) + (var(--pc-timeline-marker-size) / 2) - 1px);bottom:calc(-1 * ( var(--pc-timeline-item-gap) + var(--pc-timeline-next-marker-header-centre) - (var(--pc-timeline-next-marker-size) / 2) + 1px ));background:linear-gradient(180deg, var(--pc-timeline-marker-colour) 0, var(--pc-timeline-marker-colour) 50%, var(--pc-timeline-next-marker-colour) 100%)}@supports (color:color-mix(in lab, red, red)){.pc-timeline-item:not(:last-child):before{background:linear-gradient(180deg, var(--pc-timeline-marker-colour) 0, color-mix(in srgb, var(--pc-timeline-marker-colour) 60%, var(--pc-timeline-next-marker-colour)) 50%, var(--pc-timeline-next-marker-colour) 100%)}}.pc-timeline-item--continues-after:before{top:calc(var(--pc-timeline-marker-header-centre) + (var(--pc-timeline-marker-size) / 2) - 1px);bottom:calc(-1 * var(--pc-timeline-item-gap));background:linear-gradient(180deg, var(--pc-timeline-marker-colour) 0, var(--pc-timeline-marker-colour) 45%, transparent 100%)}@supports (color:color-mix(in lab, red, red)){.pc-timeline-item--continues-after:before{background:linear-gradient(180deg, var(--pc-timeline-marker-colour) 0, color-mix(in srgb, var(--pc-timeline-marker-colour) 35%, transparent) 45%, transparent 100%)}}.pc-timeline-item--continues-before:after{top:calc(-1 * var(--pc-timeline-item-gap));height:calc(var(--pc-timeline-item-gap) + var(--pc-timeline-marker-header-centre) - (var(--pc-timeline-marker-size) / 2) + 1px);background:linear-gradient(180deg, transparent 0, var(--pc-timeline-marker-colour) 55%, var(--pc-timeline-marker-colour) 100%)}@supports (color:color-mix(in lab, red, red)){.pc-timeline-item--continues-before:after{background:linear-gradient(180deg, transparent 0, color-mix(in srgb, var(--pc-timeline-marker-colour) 35%, transparent) 55%, var(--pc-timeline-marker-colour) 100%)}}.pc-timeline-item--featured{--pc-timeline-marker-size:1.25rem;--pc-timeline-marker-header-centre:var(--pc-timeline-featured-marker-header-centre)}.pc-timeline-item:has(+.pc-timeline-item--featured){--pc-timeline-next-marker-header-centre:var(--pc-timeline-featured-marker-header-centre);--pc-timeline-next-marker-size:1.25rem}.pc-timeline-marker{z-index:2;width:var(--pc-timeline-rail-width);min-height:calc(var(--pc-timeline-marker-header-centre) + (var(--pc-timeline-marker-size) / 2));place-self:stretch center;height:100%;display:block;position:relative}.pc-timeline-marker-blob{z-index:2;top:calc(var(--pc-timeline-marker-header-centre) - (var(--pc-timeline-marker-size) / 2));width:var(--pc-timeline-marker-size);height:var(--pc-timeline-marker-size);border-radius:var(--pc-radius-full);background:var(--pc-timeline-marker-colour);isolation:isolate;pointer-events:none;display:block;position:absolute;inset-inline-start:50%;transform:translate(-50%)}.pc-timeline-item--marker-pulse .pc-timeline-marker-blob:before{z-index:-1;content:\"\";border-radius:inherit;background:var(--pc-timeline-marker-colour);position:absolute;inset:-.5rem}@supports (color:color-mix(in lab, red, red)){.pc-timeline-item--marker-pulse .pc-timeline-marker-blob:before{background:color-mix(in srgb, var(--pc-timeline-marker-colour) 30%, transparent)}}.pc-timeline-item--marker-pulse .pc-timeline-marker-blob:before{pointer-events:none;animation:1.8s ease-out infinite pc-timeline-marker-pulse}@keyframes pc-timeline-marker-pulse{0%{opacity:.7;transform:scale(.7)}70%{opacity:0;transform:scale(1.25)}to{opacity:0;transform:scale(1.25)}}.pc-timeline-card{z-index:1;width:100%;min-width:0;transition:background-color .16s,box-shadow .16s;position:relative;overflow:clip}.pc-timeline-item--highlighted .pc-timeline-card{border-radius:var(--pc-radius-lg);background:var(--pc-color-depth-3)}.pc-timeline-card--quiet,.pc-timeline-card--featured{background:0 0}@media (prefers-reduced-motion:reduce){.pc-timeline,.pc-timeline-item,.pc-timeline-item:before,.pc-timeline-marker,.pc-timeline-card{transition:none;animation:none;transform:none}.pc-timeline-item--marker-pulse .pc-timeline-marker-blob:before{opacity:.35;animation:none;transform:scale(1)}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";inherits:false;initial-value:\"\"}@keyframes spin{to{transform:rotate(360deg)}}", wp = "/*! tailwindcss v4.2.1 | MIT License | https://tailwindcss.com */\n@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--color-slate-200:oklch(92.9% .013 255.508);--color-slate-300:oklch(86.9% .022 252.894);--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height:calc(1.5 / 1);--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75 / 1.25);--text-2xl:1.5rem;--text-2xl--line-height:calc(2 / 1.5);--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--tracking-tight:-.025em;--leading-tight:1.25;--leading-snug:1.375;--ease-out:cubic-bezier(0, 0, .2, 1);--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4, 0, .2, 1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{:root,[data-theme=default]{--pc-font-size-adjust:.455;--pc-font-code-size:.875rem;--pc-font-size-input:16px;--pc-font-line-height-input:20px;--hf-font-family:system-ui, sans-serif;--font-mono:ui-monospace, monospace;font-size-adjust:var(--pc-font-size-adjust);font-optical-sizing:auto;--pc-color-surface:#f5f6f5;--pc-color-text:#021715;--pc-color-primary:#d5ffac;--pc-color-primary-text:var(--pc-color-text);--pc-color-secondary:#021715;--pc-color-secondary-text:var(--pc-color-text-inverted);--pc-color-secondary-lighter:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-secondary-lighter:color-mix(in srgb, var(--pc-color-secondary) 35%, white)}}:root,[data-theme=default]{--pc-color-secondary-lightest:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-secondary-lightest:color-mix(in srgb, var(--pc-color-secondary) 12%, white)}}:root,[data-theme=default]{--pc-color-neutral:white;--pc-color-neutral-text:var(--pc-color-text);--pc-color-success:#d5ffac;--pc-color-success-text:oklch(from var(--pc-color-success) clamp(0, calc(l - .5), 1) clamp(0, calc(c * 1.15), .25) h);--pc-color-danger:#fecaca;--pc-color-danger-text:#991b1b;--pc-color-warning:#fde68a;--pc-color-warning-text:#92400e;--pc-color-info:#bfdbfe;--pc-color-info-text:#1e3a8a;--pc-color-unknown:#ddd6fe;--pc-color-unknown-text:#5b21b6;--pc-color-category-0:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-0:color-mix(in oklch, var(--pc-color-unknown) 82%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-1:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-1:color-mix(in oklch, var(--pc-color-success) 90%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-2:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-2:color-mix(in oklch, var(--pc-color-info) 88%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-3:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-3:color-mix(in oklch, var(--pc-color-info) 80%, var(--pc-color-success))}}:root,[data-theme=default]{--pc-color-category-4:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-4:color-mix(in oklch, var(--pc-color-warning) 92%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-5:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-5:color-mix(in oklch, var(--pc-color-danger) 72%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-6:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-6:color-mix(in oklch, var(--pc-color-success) 72%, var(--pc-color-info))}}:root,[data-theme=default]{--pc-color-category-7:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-7:color-mix(in oklch, var(--pc-color-info) 76%, var(--pc-color-unknown))}}:root,[data-theme=default]{--pc-color-category-8:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-8:color-mix(in oklch, var(--pc-color-success) 76%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-9:var(--pc-color-unknown)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-9:color-mix(in oklch, var(--pc-color-unknown) 72%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-10:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-10:color-mix(in oklch, var(--pc-color-warning) 78%, var(--pc-color-success))}}:root,[data-theme=default]{--pc-color-category-11:var(--pc-color-danger);--pc-color-category-12:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-12:color-mix(in oklch, var(--pc-color-warning) 52%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-category-13:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-13:color-mix(in oklch, var(--pc-color-info) 68%, var(--pc-color-warning))}}:root,[data-theme=default]{--pc-color-category-14:var(--pc-color-info)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-category-14:color-mix(in oklch, var(--pc-color-info) 82%, var(--pc-color-neutral))}}:root,[data-theme=default]{--pc-color-backdrop:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-backdrop:color-mix(in srgb, var(--pc-color-secondary) 25%, transparent)}}:root,[data-theme=default]{--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:root,[data-theme=default]{--pc-color-text-secondary:oklch(37.2% .044 257.287);--pc-color-text-inverted:white;--pc-text-inverted-95:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-95:color-mix(in srgb, var(--pc-color-text-inverted) 95%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-90:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-90:color-mix(in srgb, var(--pc-color-text-inverted) 90%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-80:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-80:color-mix(in srgb, var(--pc-color-text-inverted) 80%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-70:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-70:color-mix(in srgb, var(--pc-color-text-inverted) 70%, transparent)}}:root,[data-theme=default]{--pc-text-inverted-50:var(--pc-color-text-inverted)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-text-inverted-50:color-mix(in srgb, var(--pc-color-text-inverted) 50%, transparent)}}:root,[data-theme=default]{--pc-radius-factor:1;--pc-color-transparent:transparent;--pc-color-accent:var(--pc-color-secondary);--pc-color-selection:var(--pc-color-depth-3);--pc-temp-rose-700:oklch(51.4% .222 16.935);--pc-temp-slate-400:oklch(70.4% .04 256.788);--pc-temp-slate-500:oklch(55.4% .046 257.417);--pc-temp-slate-900-60:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-temp-slate-900-60:color-mix(in srgb, var(--pc-color-secondary) 60%, transparent)}}:root,[data-theme=default]{--pc-temp-input-surface:#f1f4fa;--pc-avatar-gradient-1:radial-gradient(circle at bottom, var(--pc-color-primary), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-1:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-primary) 78%, var(--pc-color-info)), color-mix(in srgb, var(--pc-color-info) 74%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-2:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-2:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 68%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-3:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-success))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-3:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 76%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-success) 66%, var(--pc-color-info)))}}:root,[data-theme=default]{--pc-avatar-gradient-4:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-4:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 72%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 70%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-avatar-gradient-5:radial-gradient(circle at bottom, var(--pc-color-warning), var(--pc-color-warning))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-5:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-warning) 78%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-warning) 62%, var(--pc-color-danger)))}}:root,[data-theme=default]{--pc-avatar-gradient-6:radial-gradient(circle at bottom, var(--pc-color-info), var(--pc-color-info))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-6:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-info) 70%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-info) 72%, var(--pc-color-success)))}}:root,[data-theme=default]{--pc-avatar-gradient-7:radial-gradient(circle at bottom, var(--pc-color-success), var(--pc-color-primary))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-7:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-success) 68%, var(--pc-color-primary)), color-mix(in srgb, var(--pc-color-primary) 58%, var(--pc-color-success)))}}:root,[data-theme=default]{--pc-avatar-gradient-8:radial-gradient(circle at bottom, var(--pc-color-danger), var(--pc-color-unknown))}@supports (color:color-mix(in lab, red, red)){:root,[data-theme=default]{--pc-avatar-gradient-8:radial-gradient(circle at bottom, color-mix(in srgb, var(--pc-color-danger) 50%, var(--pc-color-warning)), color-mix(in srgb, var(--pc-color-unknown) 72%, var(--pc-color-primary)))}}:root,[data-theme=default]{--pc-temp-amber-800:oklch(47.3% .137 46.201);--pc-temp-input-surface-focus:#e8ecf4;--pc-temp-rose-50:oklch(96.9% .015 12.422);--pc-temp-rose-200:oklch(89.2% .058 10.001)}[data-theme=neutral]{--pc-color-surface:var(--pc-color-neutral);--pc-color-text:var(--pc-color-neutral-text)}[data-theme]:not([data-theme=default]) [data-theme=neutral]{--pc-color-surface:var(--pc-color-depth-2);--pc-color-text:inherit}[data-theme=primary-tinted]{--pc-color-surface:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){[data-theme=primary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-depth-1) 90%, var(--pc-color-primary))}}[data-theme=primary-tinted]{--pc-color-text:var(--pc-color-primary)}[data-theme=secondary-tinted]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary-tinted]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary-tinted]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:var(--pc-color-neutral)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary] [data-theme=secondary]{--pc-color-surface:color-mix(in srgb, var(--pc-color-neutral) 90%, var(--pc-color-secondary))}}[data-theme=secondary] [data-theme=secondary]{--pc-color-text:var(--pc-color-secondary)}[data-theme=secondary] [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}[data-theme=primary]{--pc-color-surface:var(--pc-color-primary);--pc-color-text:var(--pc-color-primary-text)}[data-theme=secondary]{--pc-color-surface:var(--pc-color-secondary);--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=secondary]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=secondary]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=success]{--pc-color-surface:var(--pc-color-success);--pc-color-text:var(--pc-color-success-text)}[data-theme=danger]{--pc-color-surface:var(--pc-color-danger);--pc-color-text:var(--pc-color-danger-text)}[data-theme=warning]{--pc-color-surface:var(--pc-color-warning);--pc-color-text:var(--pc-color-warning-text)}[data-theme=info]{--pc-color-surface:var(--pc-color-info);--pc-color-text:var(--pc-color-info-text)}[data-theme=unknown]{--pc-color-surface:var(--pc-color-unknown);--pc-color-text:var(--pc-color-unknown-text)}[data-theme=brandless-card]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, var(--pc-color-neutral))}}[data-theme=brandless-card]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=brandless-card]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=brandless-card]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-text:var(--pc-color-secondary-text);--pc-color-danger:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger:color-mix(in srgb, var(--pc-color-secondary-text) 50%, red)}}[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:var(--pc-color-secondary-text)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express],[data-theme=diners-club],[data-theme=discover],[data-theme=elo],[data-theme=hiper],[data-theme=hipercard],[data-theme=jcb],[data-theme=maestro],[data-theme=mastercard],[data-theme=mir],[data-theme=unionpay],[data-theme=verve],[data-theme=visa]{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-secondary-text) 70%, red)}}[data-theme=american-express]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=american-express]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #2e77bc)}}[data-theme=diners-club]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=diners-club]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0069aa)}}[data-theme=discover]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=discover]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ff6000)}}[data-theme=elo]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=elo]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #000)}}[data-theme=hiper]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hiper]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #f76e1e)}}[data-theme=hipercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=hipercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #822124)}}[data-theme=jcb]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=jcb]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0b4ea2)}}[data-theme=maestro]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=maestro]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #009ddd)}}[data-theme=mastercard]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mastercard]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #eb001b)}}[data-theme=mir]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=mir]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #0a9f5d)}}[data-theme=unionpay]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=unionpay]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #007a9d)}}[data-theme=verve]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=verve]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #ef4123)}}[data-theme=visa]{--pc-color-surface:var(--pc-color-secondary)}@supports (color:color-mix(in lab, red, red)){[data-theme=visa]{--pc-color-surface:color-mix(in srgb, var(--pc-color-secondary) 75%, #1a1f71)}}[data-theme][data-pc-appearance=outline]{--pc-color-text:var(--pc-color-surface)}:where(:root,[data-theme]){--pc-radius:calc(.25rem * var(--pc-radius-factor));--pc-radius-sm:var(--pc-radius);--pc-radius-md:calc(.375rem * var(--pc-radius-factor));--pc-radius-lg:calc(.5rem * var(--pc-radius-factor));--pc-radius-xl:calc(.75rem * var(--pc-radius-factor));--pc-radius-2xl:calc(1rem * var(--pc-radius-factor));--pc-radius-3xl:calc(1.5rem * var(--pc-radius-factor));--pc-radius-full:9999px;--pc-color-surface-strongest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-strongest:color-mix(in srgb, var(--pc-color-surface) 90%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-surface-weaker:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weaker:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-surface-weakest:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-surface-weakest:color-mix(in srgb, var(--pc-color-surface) 85%, var(--pc-color-text) 15%)}}:where(:root,[data-theme]){--pc-color-backdrop:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-backdrop:color-mix(in srgb, color-mix(in srgb, var(--pc-color-surface) 65%, var(--pc-color-text) 35%) 70%, transparent)}}:where(:root,[data-theme]){--pc-color-depth-1:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-1:color-mix(in srgb, var(--pc-color-text) 1.38%, transparent 98.62%)}}:where(:root,[data-theme]){--pc-color-depth-2:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-2:color-mix(in srgb, var(--pc-color-depth-1) 96%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-3:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-3:color-mix(in srgb, var(--pc-color-depth-1) 93%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-4:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-4:color-mix(in srgb, var(--pc-color-depth-1) 88%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-depth-5:var(--pc-color-depth-1)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-depth-5:color-mix(in srgb, var(--pc-color-depth-1) 50%, var(--pc-color-text))}}:where(:root,[data-theme]){--pc-color-dropdown-border:var(--pc-color-border-weaker);--pc-color-dropdown-item-background-hover:var(--pc-color-depth-2);--pc-color-dropdown-item-background-active:var(--pc-color-depth-2);--pc-color-dropdown-item-background-selected:var(--pc-color-dropdown-item-background-hover);--pc-color-dropdown-item-background-selected-hover:var(--pc-color-dropdown-item-background-selected);--pc-color-dropdown-item-background-selected-active:var(--pc-color-dropdown-item-background-active);--pc-color-dropdown-item-action-background-hover:var(--pc-color-dropdown-item-background-hover);--pc-color-dropdown-item-action-background-active:var(--pc-color-dropdown-item-background-active);--pc-color-text-muted:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-text-muted:color-mix(in srgb, var(--pc-color-text) 75%, transparent 25%)}}:where(:root,[data-theme]){--pc-color-border:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border:color-mix(in srgb, var(--pc-color-text) 30%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weaker:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weaker:color-mix(in srgb, var(--pc-color-border) 50%, transparent)}}:where(:root,[data-theme]){--pc-color-border-weakest:var(--pc-color-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-border-weakest:color-mix(in srgb, var(--pc-color-border) 40%, transparent)}}:where(:root,[data-theme]){--pc-color-input-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-background:color-mix(in srgb, var(--pc-color-surface) 91%, var(--pc-color-text) 9%)}}:where(:root,[data-theme]){--pc-color-input-background-hover:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-background-hover:color-mix(in srgb, var(--pc-color-surface) 88%, var(--pc-color-text) 12%)}}:where(:root,[data-theme]){--pc-color-input-background-active:var(--pc-color-input-background-hover);--pc-color-input-text:var(--pc-color-text);--pc-color-input-placeholder:var(--pc-color-input-text,var(--pc-color-text))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-placeholder:color-mix(in srgb, var(--pc-color-input-text,var(--pc-color-text)) 55%, transparent 45%)}}:where(:root,[data-theme]){--pc-color-input-label-text:var(--pc-color-text-muted);--pc-color-input-helper-text:var(--pc-color-text-muted);--pc-color-input-error-text:var(--pc-color-input-danger-error-text,var(--pc-color-danger-text))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-error-text:var(--pc-color-input-danger-error-text,color-mix(in srgb, var(--pc-color-danger-text) 84%, var(--pc-color-text)))}}:where(:root,[data-theme]){--pc-color-input-invalid-placeholder:var(--pc-color-input-error-text)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-placeholder:color-mix(in srgb, var(--pc-color-input-error-text) 55%, transparent 45%)}}:where(:root,[data-theme]){--pc-color-input-border:transparent;--pc-color-input-editor-border:var(--pc-color-border-weakest);--pc-color-input-border-hover:var(--pc-color-input-border);--pc-color-input-checkbox-background:transparent;--pc-color-input-checkbox-background-checked:var(--pc-color-input-text);--pc-color-input-checkbox-border:var(--pc-color-input-focus-border);--pc-color-input-checkbox-border-hover:var(--pc-color-input-checkbox-border);--pc-color-input-checkbox-border-disabled:var(--pc-color-border);--pc-color-input-checkbox-icon:var(--pc-color-input-background);--pc-color-input-focus-border:var(--pc-color-input-text,var(--pc-color-text));--pc-color-input-focus-ring:var(--pc-color-input-focus-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-focus-ring:color-mix(in srgb, var(--pc-color-input-focus-border) var(--pc-opacity-input-focus-ring,26%), transparent)}}:where(:root,[data-theme]){--pc-color-input-invalid-focus-ring:var(--pc-color-input-danger-focus-ring,var(--pc-color-input-invalid-border))}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-focus-ring:var(--pc-color-input-danger-focus-ring,color-mix(in srgb, var(--pc-color-input-invalid-border) var(--pc-opacity-input-focus-ring,26%), transparent))}}:where(:root,[data-theme]){--pc-size-input-focus-ring:3px;--pc-opacity-input-focus-ring:26%;--pc-opacity-input-invalid-background:32%;--pc-color-input-disabled-background:var(--pc-color-surface-weaker);--pc-color-input-disabled-text:var(--pc-color-text-muted);--pc-color-input-readonly-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-readonly-background:color-mix(in srgb, var(--pc-color-surface) 95%, var(--pc-color-text) 5%)}}:where(:root,[data-theme]){--pc-color-input-readonly-border:var(--pc-color-border-weaker);--pc-color-input-readonly-text:var(--pc-color-text-muted);--pc-color-input-readonly-focus-ring:var(--pc-color-input-readonly-border)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-readonly-focus-ring:color-mix(in srgb, var(--pc-color-input-readonly-border) 45%, transparent 55%)}}:where(:root,[data-theme]){--pc-color-input-invalid-border:var(--pc-color-input-danger-border,var(--pc-color-input-error-text));--pc-color-input-invalid-background:var(--pc-color-danger)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-invalid-background:color-mix(in srgb, var(--pc-color-danger) var(--pc-opacity-input-invalid-background), var(--pc-color-input-background,var(--pc-color-surface)))}}:where(:root,[data-theme]){--pc-color-input-invalid-background-hover:var(--pc-color-input-invalid-background);--pc-color-input-warning-border:var(--pc-color-warning-text);--pc-color-input-warning-background:var(--pc-color-warning)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-warning-background:color-mix(in srgb, var(--pc-color-warning) 22%, var(--pc-color-surface))}}:where(:root,[data-theme]){--pc-color-input-success-border:var(--pc-color-success-text);--pc-color-input-success-background:var(--pc-color-success)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-success-background:color-mix(in srgb, var(--pc-color-success) 22%, var(--pc-color-surface))}}:where(:root,[data-theme]){--pc-color-input-icon:var(--pc-color-text-muted);--pc-color-input-autofill-background:var(--pc-color-surface)}@supports (color:color-mix(in lab, red, red)){:where(:root,[data-theme]){--pc-color-input-autofill-background:color-mix(in srgb, var(--pc-color-surface) 86%, #9ec5ff 14%)}}:where(:root,[data-theme]){--pc-color-input-autofill-text:var(--pc-color-input-text);--pc-color-input-autofill-border:var(--pc-color-input-border);--pc-color-payment-form-field-panel-background:var(--pc-color-surface);--pc-radius-input:var(--pc-radius-3xl);--pc-radius-input-multiline:var(--pc-radius-input);--pc-size-checkbox:1rem;--pc-size-input-height:2.25rem;--pc-size-input-height-compact:2rem;--pc-space-input-padding-x:.875rem;--pc-space-input-padding-y:.5rem;--pc-space-input-label-gap:.25rem;--pc-space-input-gap:.625rem}.pc-theme-dark{--lightningcss-light: ;--lightningcss-dark:initial;color-scheme:dark;--pc-color-surface:#000;--pc-color-text:var(--color-slate-200);--pc-color-secondary:var(--color-slate-300);--pc-color-secondary-text:var(--pc-color-surface);--pc-color-accent:var(--color-slate-300);--pc-color-danger:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.pc-theme-dark{--pc-color-danger:color-mix(in srgb, var(--pc-color-text) 50%, red)}}.pc-theme-dark{--pc-color-danger-text:var(--pc-color-text)}@supports (color:color-mix(in lab, red, red)){.pc-theme-dark{--pc-color-danger-text:color-mix(in srgb, var(--pc-color-text) 70%, red)}}.pc-theme-dark{--pc-color-warning:#a86e00}.pc-theme-dark [data-theme=danger]{--pc-color-danger:oklch(44.4% .177 26.899);--pc-color-danger-text:oklch(80.8% .114 19.571)}*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab, red, red)){::placeholder{color:color-mix(in oklab, currentcolor 50%, transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.\\[container-type\\:inline-size\\]{container-type:inline-size}.\\[container-type\\:size\\]{container-type:size}.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip-path:inset(50%);white-space:nowrap;border-width:0;width:1px;height:1px;margin:-1px;padding:0;position:absolute;overflow:hidden}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing) * 0)}.inset-\\[20\\%\\]{inset:20%}.inset-x-0{inset-inline:calc(var(--spacing) * 0)}.start{inset-inline-start:var(--spacing)}.end{inset-inline-end:var(--spacing)}.top-0{top:calc(var(--spacing) * 0)}.top-2{top:calc(var(--spacing) * 2)}.top-\\[-9999px\\]{top:-9999px}.top-full{top:100%}.right-0{right:calc(var(--spacing) * 0)}.right-2{right:calc(var(--spacing) * 2)}.right-4{right:calc(var(--spacing) * 4)}.bottom-0{bottom:calc(var(--spacing) * 0)}.bottom-\\[calc\\(var\\(--pc-panel-edge-inset\\,0px\\)\\+var\\(--pc-panel-extra-inset\\,0px\\)\\)\\]{bottom:calc(var(--pc-panel-edge-inset,0px) + var(--pc-panel-extra-inset,0px))}.bottom-full{bottom:100%}.left-0{left:calc(var(--spacing) * 0)}.left-\\[-9999px\\]{left:-9999px}.-z-10{z-index:calc(10 * -1)}.z-10{z-index:10}.z-20{z-index:20}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-60{z-index:60}.z-\\[1\\]{z-index:1}.order-1{order:1}.order-2{order:2}.order-3{order:3}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.container{width:100%}@media (width>=40rem){.container{max-width:40rem}}@media (width>=48rem){.container{max-width:48rem}}@media (width>=64rem){.container{max-width:64rem}}@media (width>=80rem){.container{max-width:80rem}}@media (width>=96rem){.container{max-width:96rem}}.m-0{margin:calc(var(--spacing) * 0)}.m-1{margin:calc(var(--spacing) * 1)}.-mx-3{margin-inline:calc(var(--spacing) * -3)}.-mx-\\[var\\(--pc-payment-list-item-inline-padding\\)\\]{margin-inline:calc(var(--pc-payment-list-item-inline-padding) * -1)}.mx-1{margin-inline:calc(var(--spacing) * 1)}.mx-auto{margin-inline:auto}.-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.-mt-1{margin-top:calc(var(--spacing) * -1)}.-mt-2{margin-top:calc(var(--spacing) * -2)}.mt-0{margin-top:calc(var(--spacing) * 0)}.mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.mt-1{margin-top:calc(var(--spacing) * 1)}.mt-1\\.5{margin-top:calc(var(--spacing) * 1.5)}.mt-2{margin-top:calc(var(--spacing) * 2)}.mt-3{margin-top:calc(var(--spacing) * 3)}.mb-0{margin-bottom:calc(var(--spacing) * 0)}.mb-2{margin-bottom:calc(var(--spacing) * 2)}.mb-2\\.5{margin-bottom:calc(var(--spacing) * 2.5)}.mb-3{margin-bottom:calc(var(--spacing) * 3)}.mb-4{margin-bottom:calc(var(--spacing) * 4)}.mb-4\\.5{margin-bottom:calc(var(--spacing) * 4.5)}.mb-8{margin-bottom:calc(var(--spacing) * 8)}.mb-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{margin-bottom:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}.ml-1{margin-left:calc(var(--spacing) * 1)}.ml-1\\.5{margin-left:calc(var(--spacing) * 1.5)}.ml-\\[var\\(--pc-payment-list-item-content-inset\\)\\]{margin-left:var(--pc-payment-list-item-content-inset)}.ml-auto{margin-left:auto}.box-border{box-sizing:border-box}.line-clamp-2{-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.block{display:block}.contents{display:contents}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-flex{display:inline-flex}.list-item{display:list-item}.table{display:table}.aspect-square{aspect-ratio:1}.\\!h-full{height:100%!important}.h-0{height:calc(var(--spacing) * 0)}.h-1\\.5{height:calc(var(--spacing) * 1.5)}.h-2\\.5{height:calc(var(--spacing) * 2.5)}.h-3{height:calc(var(--spacing) * 3)}.h-3\\.5{height:calc(var(--spacing) * 3.5)}.h-5{height:calc(var(--spacing) * 5)}.h-6{height:calc(var(--spacing) * 6)}.h-7{height:calc(var(--spacing) * 7)}.h-8{height:calc(var(--spacing) * 8)}.h-9{height:calc(var(--spacing) * 9)}.h-10{height:calc(var(--spacing) * 10)}.h-12{height:calc(var(--spacing) * 12)}.h-14{height:calc(var(--spacing) * 14)}.h-24{height:calc(var(--spacing) * 24)}.h-\\[24rem\\]{height:24rem}.h-\\[70\\%\\]{height:70%}.h-\\[82\\%\\]{height:82%}.h-\\[85\\%\\]{height:85%}.h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,2.25rem))}.h-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{height:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))}.h-full{height:100%}.h-px{height:1px}.max-h-\\[min\\(31rem\\,100\\%\\)\\]{max-height:min(31rem,100%)}.max-h-full{max-height:100%}.min-h-0{min-height:calc(var(--spacing) * 0)}.min-h-10{min-height:calc(var(--spacing) * 10)}.min-h-12{min-height:calc(var(--spacing) * 12)}.min-h-\\[3\\.25rem\\]{min-height:3.25rem}.min-h-\\[7rem\\]{min-height:7rem}.min-h-\\[11rem\\]{min-height:11rem}.min-h-\\[27cqw\\]{min-height:27cqw}.min-h-\\[30cqw\\]{min-height:30cqw}.min-h-\\[32cqw\\]{min-height:32cqw}.min-h-\\[33\\.5cqw\\]{min-height:33.5cqw}.min-h-\\[var\\(--pc-size-input-height\\,2\\.25rem\\)\\]{min-height:var(--pc-size-input-height,2.25rem)}.min-h-full{min-height:100%}.\\!w-full{width:100%!important}.w-1\\/2{width:50%}.w-2\\.5{width:calc(var(--spacing) * 2.5)}.w-3{width:calc(var(--spacing) * 3)}.w-3\\.5{width:calc(var(--spacing) * 3.5)}.w-3\\/5{width:60%}.w-4\\/5{width:80%}.w-7{width:calc(var(--spacing) * 7)}.w-8{width:calc(var(--spacing) * 8)}.w-9{width:calc(var(--spacing) * 9)}.w-10{width:calc(var(--spacing) * 10)}.w-12{width:calc(var(--spacing) * 12)}.w-14{width:calc(var(--spacing) * 14)}.w-\\[70\\%\\]{width:70%}.w-\\[82\\%\\]{width:82%}.w-\\[85\\%\\]{width:85%}.w-\\[calc\\(100\\%\\+1\\.5rem\\)\\]{width:calc(100% + 1.5rem)}.w-\\[calc\\(100\\%-var\\(--pc-payment-list-item-content-inset\\)\\)\\]{width:calc(100% - var(--pc-payment-list-item-content-inset))}.w-\\[var\\(--pc-size-bonus-summary-width\\,var\\(--pc-bonus-summary-width\\,fit-content\\)\\)\\]{width:var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,-moz-fit-content));width:var(--pc-size-bonus-summary-width,var(--pc-bonus-summary-width,fit-content))}.w-\\[var\\(--pc-size-logo-mark-surface-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{width:var(--pc-size-logo-mark-surface-image,var(--pc-size-logo-mark-image,85%))}.w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,2.25rem))}.w-full{width:100%}.w-px{width:1px}.max-w-\\[var\\(--pc-size-bonus-summary-max-width\\,var\\(--pc-bonus-summary-max-width\\,100\\%\\)\\)\\]{max-width:var(--pc-size-bonus-summary-max-width,var(--pc-bonus-summary-max-width,100%))}.max-w-\\[var\\(--pc-size-cashier-max-width\\,36rem\\)\\]{max-width:var(--pc-size-cashier-max-width,36rem)}.max-w-\\[var\\(--pc-size-logo-mark-surface-max-width\\,var\\(--pc-size-logo-mark-max-width\\,55\\%\\)\\)\\]{max-width:var(--pc-size-logo-mark-surface-max-width,var(--pc-size-logo-mark-max-width,55%))}.max-w-full{max-width:100%}.max-w-md{max-width:var(--container-md)}.min-w-0{min-width:calc(var(--spacing) * 0)}.flex-1{flex:1}.flex-shrink-0,.shrink-0{flex-shrink:0}.basis-full{flex-basis:100%}.-translate-y-1\\.5{--tw-translate-y:calc(var(--spacing) * -1.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-4{--tw-translate-y:calc(var(--spacing) * -4);translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-full{--tw-translate-y:-100%;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-1{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[0\\.85rem\\]{--tw-translate-y:.85rem;translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-px{--tw-translate-y:1px;translate:var(--tw-translate-x) var(--tw-translate-y)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.transform-gpu{transform:translateZ(0) var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-\\[pc-cashier-fullscreen-content-reveal_180ms_ease-out_both\\]{animation:.18s ease-out both pc-cashier-fullscreen-content-reveal}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.cursor-text{cursor:text}.resize{resize:both}.scroll-pb-\\[44px\\]{scroll-padding-bottom:44px}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-rows-\\[0fr\\]{grid-template-rows:0fr}.grid-rows-\\[1fr\\]{grid-template-rows:1fr}.grid-rows-\\[minmax\\(0\\,0\\.7fr\\)_auto_auto_minmax\\(0\\,1fr\\)\\]{grid-template-rows:minmax(0,.7fr) auto auto minmax(0,1fr)}.grid-rows-\\[minmax\\(0\\,0\\.45fr\\)_auto_auto_minmax\\(0\\,1fr\\)\\]{grid-template-rows:minmax(0,.45fr) auto auto minmax(0,1fr)}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.content-start{align-content:flex-start}.items-baseline{align-items:baseline}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.justify-around{justify-content:space-around}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.justify-start{justify-content:flex-start}.gap-0{gap:calc(var(--spacing) * 0)}.gap-0\\.5{gap:calc(var(--spacing) * .5)}.gap-1{gap:calc(var(--spacing) * 1)}.gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.gap-2{gap:calc(var(--spacing) * 2)}.gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.gap-3{gap:calc(var(--spacing) * 3)}.gap-3\\.5{gap:calc(var(--spacing) * 3.5)}.gap-4{gap:calc(var(--spacing) * 4)}.gap-6{gap:calc(var(--spacing) * 6)}.gap-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{gap:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}:where(.space-y-1>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 1) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 1) * calc(1 - var(--tw-space-y-reverse)))}.gap-x-2{-moz-column-gap:calc(var(--spacing) * 2);column-gap:calc(var(--spacing) * 2)}.gap-y-0{row-gap:calc(var(--spacing) * 0)}.gap-y-0\\.5{row-gap:calc(var(--spacing) * .5)}.gap-y-1{row-gap:calc(var(--spacing) * 1)}.gap-y-1\\.5{row-gap:calc(var(--spacing) * 1.5)}.gap-y-3{row-gap:calc(var(--spacing) * 3)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.self-stretch{align-self:stretch}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.\\!overflow-visible{overflow:visible!important}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overscroll-y-contain{overscroll-behavior-y:contain}.rounded{border-radius:.25rem}.rounded-\\[calc\\(var\\(--pc-radius-xl\\)\\+0\\.45rem\\)\\]{border-radius:calc(var(--pc-radius-xl) + .45rem)}.rounded-\\[var\\(--pc-radius-3xl\\)\\]{border-radius:var(--pc-radius-3xl)}.rounded-\\[var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-payment-picker\\,var\\(--pc-radius-full\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-header,var(--pc-radius-payment-picker,var(--pc-radius-full)))}.rounded-\\[var\\(--pc-radius-accordion-item\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\)\\]{border-radius:var(--pc-radius-accordion-item,var(--pc-radius-panel,var(--pc-radius-xl)))}.rounded-\\[var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-picker,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-bonus-summary\\,var\\(--pc-bonus-summary-radius\\,var\\(--pc-radius-payment-summary\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\)\\)\\]{border-radius:var(--pc-radius-bonus-summary,var(--pc-bonus-summary-radius,var(--pc-radius-payment-summary,var(--pc-radius-panel,var(--pc-radius-lg)))))}.rounded-\\[var\\(--pc-radius-credit-card-panel\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-credit-card-panel,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-full\\)\\]{border-radius:var(--pc-radius-full)}.rounded-\\[var\\(--pc-radius-lg\\)\\]{border-radius:var(--pc-radius-lg)}.rounded-\\[var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\]{border-radius:var(--pc-radius-list-item,var(--pc-radius-lg))}.rounded-\\[var\\(--pc-radius-md\\)\\]{border-radius:var(--pc-radius-md)}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-md\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-md))}.rounded-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-radius:var(--pc-radius-panel,var(--pc-radius-xl))}.rounded-\\[var\\(--pc-radius-payment-picker\\,var\\(--pc-radius-full\\)\\)\\]{border-radius:var(--pc-radius-payment-picker,var(--pc-radius-full))}.rounded-\\[var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-panel\\,var\\(--pc-radius-lg\\)\\)\\)\\]{border-radius:var(--pc-radius-payment-type-picker,var(--pc-radius-panel,var(--pc-radius-lg)))}.rounded-\\[var\\(--pc-radius-suggested-amount\\,var\\(--pc-radius-3xl\\)\\)\\]{border-radius:var(--pc-radius-suggested-amount,var(--pc-radius-3xl))}.rounded-\\[var\\(--pc-radius-xl\\)\\]{border-radius:var(--pc-radius-xl)}.rounded-full{border-radius:2147483647px}.rounded-t-\\[var\\(--pc-radius-2xl\\)\\]{border-top-left-radius:var(--pc-radius-2xl);border-top-right-radius:var(--pc-radius-2xl)}.rounded-t-\\[var\\(--pc-radius-panel\\,var\\(--pc-radius-xl\\)\\)\\]{border-top-left-radius:var(--pc-radius-panel,var(--pc-radius-xl));border-top-right-radius:var(--pc-radius-panel,var(--pc-radius-xl))}.rounded-t-none{border-top-left-radius:0;border-top-right-radius:0}.rounded-b-none{border-bottom-right-radius:0;border-bottom-left-radius:0}.border{border-style:var(--tw-border-style);border-width:1px}.border-0{border-style:var(--tw-border-style);border-width:0}.border-\\[length\\:var\\(--pc-size-bonus-summary-border-width\\,var\\(--pc-bonus-summary-border-width\\,1px\\)\\)\\]{border-style:var(--tw-border-style);border-width:var(--pc-size-bonus-summary-border-width,var(--pc-bonus-summary-border-width,1px))}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-t-0{border-top-style:var(--tw-border-style);border-top-width:0}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-\\[var\\(--pc-color-accordion-header-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-accordion-header-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-accordion-item-divider\\,var\\(--pc-color-border-weakest\\)\\)\\]{border-color:var(--pc-color-accordion-item-divider,var(--pc-color-border-weakest))}.border-\\[var\\(--pc-color-bonus-picker-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-bonus-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-bonus-picker-divider\\,var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\)\\]{border-color:var(--pc-color-bonus-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))}.border-\\[var\\(--pc-color-bonus-summary-border\\,var\\(--pc-bonus-summary-border-colour\\,var\\(--pc-color-text\\)\\)\\)\\]{border-color:var(--pc-color-bonus-summary-border,var(--pc-bonus-summary-border-colour,var(--pc-color-text)))}.border-\\[var\\(--pc-color-control-border\\,var\\(--pc-color-control-background\\,var\\(--pc-color-transparent\\)\\)\\)\\]{border-color:var(--pc-color-control-border,var(--pc-color-control-background,var(--pc-color-transparent)))}.border-\\[var\\(--pc-color-depth-3\\)\\]{border-color:var(--pc-color-depth-3)}.border-\\[var\\(--pc-color-depth-4\\)\\]{border-color:var(--pc-color-depth-4)}.border-\\[var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\]{border-color:var(--pc-color-list-item-border,var(--pc-color-border))}.border-\\[var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-color:var(--pc-color-list-item-divider,var(--pc-color-depth-3))}.border-\\[var\\(--pc-color-panel-border\\,var\\(--pc-color-transparent\\)\\)\\]{border-color:var(--pc-color-panel-border,var(--pc-color-transparent))}.border-\\[var\\(--pc-color-payment-summary-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-color:var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))}.border-\\[var\\(--pc-color-payment-type-picker-border\\,var\\(--pc-color-list-item-border\\,var\\(--pc-color-border\\)\\)\\)\\]{border-color:var(--pc-color-payment-type-picker-border,var(--pc-color-list-item-border,var(--pc-color-border)))}.border-\\[var\\(--pc-color-payment-type-picker-divider\\,var\\(--pc-color-list-item-divider\\,var\\(--pc-color-depth-3\\)\\)\\)\\]{border-color:var(--pc-color-payment-type-picker-divider,var(--pc-color-list-item-divider,var(--pc-color-depth-3)))}.border-t-\\[var\\(--pc-color-payment-summary-divider\\,var\\(--pc-color-depth-3\\)\\)\\]{border-top-color:var(--pc-color-payment-summary-divider,var(--pc-color-depth-3))}.bg-\\[var\\(--pc-color-control-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-control-background,var(--pc-color-surface))}.bg-\\[var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\]{background-color:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent)))}.bg-\\[var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\]{background-color:var(--pc-color-panel-background,var(--pc-color-surface))}.bg-\\[var\\(--pc-color-surface\\)\\]{background-color:var(--pc-color-surface)}.bg-transparent{background-color:#0000}.bg-clip-padding{background-clip:padding-box}.object-contain{-o-object-fit:contain;object-fit:contain}.object-right{-o-object-position:right;object-position:right}.p-0{padding:calc(var(--spacing) * 0)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-2\\.5{padding:calc(var(--spacing) * 2.5)}.p-3{padding:calc(var(--spacing) * 3)}.p-3\\.5{padding:calc(var(--spacing) * 3.5)}.p-4{padding:calc(var(--spacing) * 4)}.p-\\[var\\(--pc-size-input-focus-ring\\,3px\\)\\]{padding:var(--pc-size-input-focus-ring,3px)}.px-0{padding-inline:calc(var(--spacing) * 0)}.px-0\\.5{padding-inline:calc(var(--spacing) * .5)}.px-1{padding-inline:calc(var(--spacing) * 1)}.px-1\\.5{padding-inline:calc(var(--spacing) * 1.5)}.px-2{padding-inline:calc(var(--spacing) * 2)}.px-2\\.5{padding-inline:calc(var(--spacing) * 2.5)}.px-3{padding-inline:calc(var(--spacing) * 3)}.px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.px-4{padding-inline:calc(var(--spacing) * 4)}.px-5{padding-inline:calc(var(--spacing) * 5)}.px-6{padding-inline:calc(var(--spacing) * 6)}.px-\\[var\\(--pc-payment-list-item-inline-padding\\)\\]{padding-inline:var(--pc-payment-list-item-inline-padding)}.px-\\[var\\(--pc-size-input-focus-ring\\,3px\\)\\]{padding-inline:var(--pc-size-input-focus-ring,3px)}.px-\\[var\\(--pc-space-bonus-summary-padding-x\\,var\\(--pc-bonus-summary-padding-x\\,1rem\\)\\)\\]{padding-inline:var(--pc-space-bonus-summary-padding-x,var(--pc-bonus-summary-padding-x,1rem))}.py-0{padding-block:calc(var(--spacing) * 0)}.py-1{padding-block:calc(var(--spacing) * 1)}.py-1\\.5{padding-block:calc(var(--spacing) * 1.5)}.py-2{padding-block:calc(var(--spacing) * 2)}.py-2\\.5{padding-block:calc(var(--spacing) * 2.5)}.py-3{padding-block:calc(var(--spacing) * 3)}.py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}.py-4{padding-block:calc(var(--spacing) * 4)}.py-\\[var\\(--pc-space-bonus-summary-padding-y\\,var\\(--pc-bonus-summary-padding-y\\,0\\.625rem\\)\\)\\]{padding-block:var(--pc-space-bonus-summary-padding-y,var(--pc-bonus-summary-padding-y,.625rem))}.pt-0{padding-top:calc(var(--spacing) * 0)}.pt-1{padding-top:calc(var(--spacing) * 1)}.pt-1\\.5{padding-top:calc(var(--spacing) * 1.5)}.pt-2{padding-top:calc(var(--spacing) * 2)}.pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.pt-3{padding-top:calc(var(--spacing) * 3)}.pt-4\\.5{padding-top:calc(var(--spacing) * 4.5)}.pt-5{padding-top:calc(var(--spacing) * 5)}.pr-0\\.5{padding-right:calc(var(--spacing) * .5)}.pr-1\\.5{padding-right:calc(var(--spacing) * 1.5)}.pr-16{padding-right:calc(var(--spacing) * 16)}.pr-\\[var\\(--pc-payment-list-item-panel-action-inset\\)\\]{padding-right:var(--pc-payment-list-item-panel-action-inset)}.pb-0{padding-bottom:calc(var(--spacing) * 0)}.pb-0\\.5{padding-bottom:calc(var(--spacing) * .5)}.pb-1{padding-bottom:calc(var(--spacing) * 1)}.pb-1\\.5{padding-bottom:calc(var(--spacing) * 1.5)}.pb-2{padding-bottom:calc(var(--spacing) * 2)}.pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.pb-3{padding-bottom:calc(var(--spacing) * 3)}.pb-4{padding-bottom:calc(var(--spacing) * 4)}.pb-5{padding-bottom:calc(var(--spacing) * 5)}.pb-6{padding-bottom:calc(var(--spacing) * 6)}.pb-\\[var\\(--pc-space-bonus-summary-block-gap\\,var\\(--pc-bonus-summary-block-gap\\,1\\.5rem\\)\\)\\]{padding-bottom:var(--pc-space-bonus-summary-block-gap,var(--pc-bonus-summary-block-gap,1.5rem))}.pl-14{padding-left:calc(var(--spacing) * 14)}.pl-\\[0\\.9rem\\]{padding-left:.9rem}.pl-\\[var\\(--pc-payment-list-item-panel-action-inset\\)\\]{padding-left:var(--pc-payment-list-item-panel-action-inset)}.text-center{text-align:center}.text-left{text-align:left}.text-right{text-align:right}.font-mono{font-family:var(--font-mono)}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[length\\:var\\(--pc-font-size-bonus-summary-mobile\\,var\\(--pc-bonus-summary-mobile-font-size\\,1rem\\)\\)\\]{font-size:var(--pc-font-size-bonus-summary-mobile,var(--pc-bonus-summary-mobile-font-size,1rem))}.text-\\[length\\:var\\(--pc-font-size-input\\,16px\\)\\]{font-size:var(--pc-font-size-input,16px)}.leading-5{--tw-leading:calc(var(--spacing) * 5);line-height:calc(var(--spacing) * 5)}.leading-\\[var\\(--pc-font-line-height-input\\,20px\\)\\]{--tw-leading:var(--pc-font-line-height-input,20px);line-height:var(--pc-font-line-height-input,20px)}.leading-none{--tw-leading:1;line-height:1}.leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.text-balance{text-wrap:balance}.\\[overflow-wrap\\:anywhere\\]{overflow-wrap:anywhere}.break-words{overflow-wrap:break-word}.wrap-anywhere{overflow-wrap:anywhere}.break-all{word-break:break-all}.whitespace-normal{white-space:normal}.whitespace-nowrap{white-space:nowrap}.whitespace-pre{white-space:pre}.text-\\[color\\:inherit\\]{color:inherit}.text-\\[var\\(--pc-color-accordion-header-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-accordion-header-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-accordion-header-text-selected\\,var\\(--pc-color-accordion-header-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-text-selected,var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-accordion-header-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-accordion-header-title-text,var(--pc-color-list-item-title-text,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-bonus-picker-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-picker-text-selected\\,var\\(--pc-color-bonus-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-text-selected,var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-bonus-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-bonus-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-bonus-summary-text\\,var\\(--pc-bonus-summary-colour\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-bonus-summary-text,var(--pc-bonus-summary-colour,var(--pc-color-text)))}.text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-control-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-list-item-description-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-list-item-text-selected\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-list-item-text-selected,var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-list-item-title-text,var(--pc-color-list-item-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-panel-text,var(--pc-color-text))}.text-\\[var\\(--pc-color-payment-method-switcher-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-payment-method-switcher-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-payment-method-switcher-text-active\\,var\\(--pc-color-text\\)\\)\\]{color:var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text))}.text-\\[var\\(--pc-color-payment-summary-label-text\\,var\\(--pc-color-payment-summary-row-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-payment-summary-label-text,var(--pc-color-payment-summary-row-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-payment-summary-row-text\\,var\\(--pc-color-payment-summary-text\\,var\\(--pc-color-text\\)\\)\\)\\]{color:var(--pc-color-payment-summary-row-text,var(--pc-color-payment-summary-text,var(--pc-color-text)))}.text-\\[var\\(--pc-color-payment-summary-value-text\\,var\\(--pc-color-text-muted\\)\\)\\]{color:var(--pc-color-payment-summary-value-text,var(--pc-color-text-muted))}.text-\\[var\\(--pc-color-payment-type-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.text-\\[var\\(--pc-color-payment-type-picker-text-disabled\\,var\\(--pc-color-list-item-text-disabled\\,var\\(--pc-color-text-muted\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-disabled,var(--pc-color-list-item-text-disabled,var(--pc-color-text-muted)))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-description-text\\,var\\(--pc-color-list-item-description-text\\,var\\(--pc-color-text-muted\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-description-text,var(--pc-color-list-item-description-text,var(--pc-color-text-muted))))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-payment-type-picker-text-selected\\,var\\(--pc-color-payment-type-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-text-selected,var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))))}.text-\\[var\\(--pc-color-payment-type-picker-title-text\\,var\\(--pc-color-list-item-title-text\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]{color:var(--pc-color-payment-type-picker-title-text,var(--pc-color-list-item-title-text,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.text-\\[var\\(--pc-color-success-text\\)\\]{color:var(--pc-color-success-text)}.text-\\[var\\(--pc-color-surface\\)\\]{color:var(--pc-color-surface)}.text-\\[var\\(--pc-color-text\\)\\]{color:var(--pc-color-text)}.text-\\[var\\(--pc-color-text-muted\\)\\]{color:var(--pc-color-text-muted)}.text-inherit{color:inherit}.italic{font-style:italic}.underline{text-decoration-line:underline}.decoration-\\[var\\(--pc-color-text-muted\\)\\]{-webkit-text-decoration-color:var(--pc-color-text-muted);text-decoration-color:var(--pc-color-text-muted)}.underline-offset-4{text-underline-offset:4px}.caret-\\[var\\(--pc-color-text\\)\\]{caret-color:var(--pc-color-text)}.opacity-0{opacity:0}.opacity-55{opacity:.55}.opacity-85{opacity:.85}.opacity-100{opacity:1}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.outline,.outline-1{outline-style:var(--tw-outline-style);outline-width:1px}.outline-3{outline-style:var(--tw-outline-style);outline-width:3px}.outline-offset-\\[2\\.5px\\]{outline-offset:2.5px}.outline-\\[var\\(--pc-color-accordion-header-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-accordion-header-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.outline-\\[var\\(--pc-color-accordion-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\]{outline-color:var(--pc-color-accordion-item-border-selected,var(--pc-color-secondary))}.outline-\\[var\\(--pc-color-bonus-picker-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-bonus-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.outline-\\[var\\(--pc-color-control-outline\\,var\\(--pc-color-transparent\\)\\)\\]{outline-color:var(--pc-color-control-outline,var(--pc-color-transparent))}.outline-\\[var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\]{outline-color:var(--pc-color-list-item-border-selected,var(--pc-color-secondary))}.outline-\\[var\\(--pc-color-payment-type-picker-border-selected\\,var\\(--pc-color-list-item-border-selected\\,var\\(--pc-color-secondary\\)\\)\\)\\]{outline-color:var(--pc-color-payment-type-picker-border-selected,var(--pc-color-list-item-border-selected,var(--pc-color-secondary)))}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.invert{--tw-invert:invert(100%);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.\\[filter\\:saturate\\(0\\.72\\)_grayscale\\(0\\.18\\)\\]{filter:saturate(.72)grayscale(.18)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[background-color\\]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-\\[height\\,opacity\\]{transition-property:height,opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-transform{transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.duration-150{--tw-duration:.15s;transition-duration:.15s}.duration-180{--tw-duration:.18s;transition-duration:.18s}.duration-200{--tw-duration:.2s;transition-duration:.2s}.duration-\\[250ms\\]{--tw-duration:.25s;transition-duration:.25s}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.will-change-transform{will-change:transform}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.\\[--pc-color-button-text\\:var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-panel-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]{--pc-color-button-text:var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-panel-text,var(--pc-color-text))))}.\\[--pc-color-control-background-active\\:var\\(--pc-color-button-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]{--pc-color-control-background-active:var(--pc-color-button-background-active,var(--pc-color-surface-strongest))}.\\[--pc-color-control-background-active\\:var\\(--pc-color-suggested-amount-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]{--pc-color-control-background-active:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-strongest))}.\\[--pc-color-control-background-hover\\:var\\(--pc-color-button-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background-hover:var(--pc-color-button-background-hover,var(--pc-color-surface-weaker))}.\\[--pc-color-control-background-hover\\:var\\(--pc-color-suggested-amount-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background-hover:var(--pc-color-suggested-amount-background-hover,var(--pc-color-surface-weaker))}.\\[--pc-color-control-background\\:var\\(--pc-color-button-background\\,var\\(--pc-color-surface\\)\\)\\]{--pc-color-control-background:var(--pc-color-button-background,var(--pc-color-surface))}.\\[--pc-color-control-background\\:var\\(--pc-color-suggested-amount-background\\,var\\(--pc-color-surface\\)\\)\\]{--pc-color-control-background:var(--pc-color-suggested-amount-background,var(--pc-color-surface))}.\\[--pc-color-control-background\\:var\\(--pc-color-suggested-amount-background-active\\,var\\(--pc-color-surface-weaker\\)\\)\\]{--pc-color-control-background:var(--pc-color-suggested-amount-background-active,var(--pc-color-surface-weaker))}.\\[--pc-color-control-border\\:var\\(--pc-color-button-border\\,var\\(--pc-color-transparent\\)\\)\\]{--pc-color-control-border:var(--pc-color-button-border,var(--pc-color-transparent))}.\\[--pc-color-control-outline\\:var\\(--pc-color-button-outline\\,var\\(--pc-color-transparent\\)\\)\\]{--pc-color-control-outline:var(--pc-color-button-outline,var(--pc-color-transparent))}.\\[--pc-color-control-text\\:var\\(--pc-color-button-text\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-button-text,var(--pc-color-text))}.\\[--pc-color-control-text\\:var\\(--pc-color-suggested-amount-text\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-suggested-amount-text,var(--pc-color-text))}.\\[--pc-color-control-text\\:var\\(--pc-color-suggested-amount-text-active\\,var\\(--pc-color-text\\)\\)\\]{--pc-color-control-text:var(--pc-color-suggested-amount-text-active,var(--pc-color-text))}.\\[--pc-color-logo-mark-surface-background\\:var\\(--pc-color-bonus-logo-background\\,var\\(--pc-color-logo-mark-background\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-background:var(--pc-color-bonus-logo-background,var(--pc-color-logo-mark-background,transparent))}.\\[--pc-color-logo-mark-surface-background\\:var\\(--pc-color-payment-type-logo-background\\,var\\(--pc-color-logo-mark-background\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-background:var(--pc-color-payment-type-logo-background,var(--pc-color-logo-mark-background,transparent))}.\\[--pc-color-logo-mark-surface-border\\:var\\(--pc-color-bonus-logo-border\\,var\\(--pc-color-logo-mark-border\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-border:var(--pc-color-bonus-logo-border,var(--pc-color-logo-mark-border,transparent))}.\\[--pc-color-logo-mark-surface-border\\:var\\(--pc-color-payment-type-logo-border\\,var\\(--pc-color-logo-mark-border\\,transparent\\)\\)\\]{--pc-color-logo-mark-surface-border:var(--pc-color-payment-type-logo-border,var(--pc-color-logo-mark-border,transparent))}.\\[--pc-color-logo-mark-surface-text\\:var\\(--pc-color-bonus-logo-text\\,var\\(--pc-color-logo-mark-text\\,var\\(--pc-color-text\\)\\)\\)\\]{--pc-color-logo-mark-surface-text:var(--pc-color-bonus-logo-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))}.\\[--pc-color-logo-mark-surface-text\\:var\\(--pc-color-payment-type-logo-text\\,var\\(--pc-color-logo-mark-text\\,var\\(--pc-color-text\\)\\)\\)\\]{--pc-color-logo-mark-surface-text:var(--pc-color-payment-type-logo-text,var(--pc-color-logo-mark-text,var(--pc-color-text)))}.\\[--pc-color-navigation-list-border\\:var\\(--pc-color-payment-method-switcher-border\\,var\\(--pc-color-depth-2\\)\\)\\]{--pc-color-navigation-list-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-depth-2))}.\\[--pc-color-navigation-list-indicator\\:var\\(--pc-color-payment-method-switcher-indicator\\,var\\(--pc-color-payment-method-switcher-background-active\\,var\\(--pc-color-secondary\\)\\)\\)\\]{--pc-color-navigation-list-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))}.\\[--pc-color-switcher-border\\:var\\(--pc-color-payment-method-switcher-border\\,var\\(--pc-color-border-weaker\\)\\)\\]{--pc-color-switcher-border:var(--pc-color-payment-method-switcher-border,var(--pc-color-border-weaker))}.\\[--pc-color-switcher-indicator\\:var\\(--pc-color-payment-method-switcher-indicator\\,var\\(--pc-color-payment-method-switcher-background-active\\,var\\(--pc-color-secondary\\)\\)\\)\\]{--pc-color-switcher-indicator:var(--pc-color-payment-method-switcher-indicator,var(--pc-color-payment-method-switcher-background-active,var(--pc-color-secondary)))}.\\[--pc-enter-final-opacity\\:0\\.55\\]{--pc-enter-final-opacity:.55}.\\[--pc-linear-progress-surface\\:var\\(--pc-color-success\\)\\]{--pc-linear-progress-surface:var(--pc-color-success)}.\\[--pc-opacity-logo-mark-surface-image\\:var\\(--pc-opacity-bonus-logo-image\\,var\\(--pc-opacity-logo-mark-image\\,1\\)\\)\\]{--pc-opacity-logo-mark-surface-image:var(--pc-opacity-bonus-logo-image,var(--pc-opacity-logo-mark-image,1))}.\\[--pc-opacity-logo-mark-surface-image\\:var\\(--pc-opacity-payment-type-logo-image\\,var\\(--pc-opacity-logo-mark-image\\,1\\)\\)\\]{--pc-opacity-logo-mark-surface-image:var(--pc-opacity-payment-type-logo-image,var(--pc-opacity-logo-mark-image,1))}.\\[--pc-panel-extra-inset\\:0\\.375rem\\]{--pc-panel-extra-inset:.375rem}.\\[--pc-payment-list-item-content-inset\\:2\\.75rem\\]{--pc-payment-list-item-content-inset:2.75rem}.\\[--pc-payment-list-item-content-inset\\:3\\.125rem\\]{--pc-payment-list-item-content-inset:3.125rem}.\\[--pc-payment-list-item-content-inset\\:3rem\\]{--pc-payment-list-item-content-inset:3rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.5rem\\]{--pc-payment-list-item-inline-padding:.5rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.75rem\\]{--pc-payment-list-item-inline-padding:.75rem}.\\[--pc-payment-list-item-inline-padding\\:0\\.875rem\\]{--pc-payment-list-item-inline-padding:.875rem}.\\[--pc-payment-list-item-inline-padding\\:0rem\\]{--pc-payment-list-item-inline-padding:0rem}.\\[--pc-payment-list-item-panel-action-inset\\:1\\.25rem\\]{--pc-payment-list-item-panel-action-inset:1.25rem}.\\[--pc-radius-logo-mark-surface\\:var\\(--pc-radius-bonus-logo\\,var\\(--pc-radius-logo-mark\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-logo-mark-surface:var(--pc-radius-bonus-logo,var(--pc-radius-logo-mark,var(--pc-radius-lg)))}.\\[--pc-radius-logo-mark-surface\\:var\\(--pc-radius-payment-type-logo\\,var\\(--pc-radius-logo-mark\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-logo-mark-surface:var(--pc-radius-payment-type-logo,var(--pc-radius-logo-mark,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-accordion-header\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-accordion-header,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-bonus-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-bonus-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-radius-panel\\:var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\]{--pc-radius-panel:var(--pc-radius-list-item,var(--pc-radius-lg))}.\\[--pc-radius-panel\\:var\\(--pc-radius-payment-type-picker\\,var\\(--pc-radius-list-item\\,var\\(--pc-radius-lg\\)\\)\\)\\]{--pc-radius-panel:var(--pc-radius-payment-type-picker,var(--pc-radius-list-item,var(--pc-radius-lg)))}.\\[--pc-size-logo-mark-surface-border-width\\:var\\(--pc-size-bonus-logo-border-width\\,var\\(--pc-size-logo-mark-border-width\\,1px\\)\\)\\]{--pc-size-logo-mark-surface-border-width:var(--pc-size-bonus-logo-border-width,var(--pc-size-logo-mark-border-width,1px))}.\\[--pc-size-logo-mark-surface-border-width\\:var\\(--pc-size-payment-type-logo-border-width\\,var\\(--pc-size-logo-mark-border-width\\,1px\\)\\)\\]{--pc-size-logo-mark-surface-border-width:var(--pc-size-payment-type-logo-border-width,var(--pc-size-logo-mark-border-width,1px))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-bonus-logo-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-bonus-logo-height,var(--pc-size-logo-mark-height,2.25rem))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-payment-type-logo-height\\,var\\(--pc-size-logo-mark-height\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-payment-type-logo-height,var(--pc-size-logo-mark-height,2.25rem))}.\\[--pc-size-logo-mark-surface-height\\:var\\(--pc-size-payment-type-logo-height\\,var\\(--pc-size-logo-mark-height\\,42\\%\\)\\)\\]{--pc-size-logo-mark-surface-height:var(--pc-size-payment-type-logo-height,var(--pc-size-logo-mark-height,42%))}.\\[--pc-size-logo-mark-surface-image\\:var\\(--pc-size-bonus-logo-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{--pc-size-logo-mark-surface-image:var(--pc-size-bonus-logo-image,var(--pc-size-logo-mark-image,85%))}.\\[--pc-size-logo-mark-surface-image\\:var\\(--pc-size-payment-type-logo-image\\,var\\(--pc-size-logo-mark-image\\,85\\%\\)\\)\\]{--pc-size-logo-mark-surface-image:var(--pc-size-payment-type-logo-image,var(--pc-size-logo-mark-image,85%))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-bonus-logo-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-bonus-logo-width,var(--pc-size-logo-mark-width,2.25rem))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-payment-type-logo-width\\,var\\(--pc-size-logo-mark-width\\,2\\.25rem\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-payment-type-logo-width,var(--pc-size-logo-mark-width,2.25rem))}.\\[--pc-size-logo-mark-surface-width\\:var\\(--pc-size-payment-type-logo-width\\,var\\(--pc-size-logo-mark-width\\,100\\%\\)\\)\\]{--pc-size-logo-mark-surface-width:var(--pc-size-payment-type-logo-width,var(--pc-size-logo-mark-width,100%))}.\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)_32\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-input-text,var(--pc-color-text))}@supports (color:color-mix(in lab, red, red)){.\\[background\\:color-mix\\(in_srgb\\,var\\(--pc-color-input-text\\,var\\(--pc-color-text\\)\\)_32\\%\\,var\\(--pc-color-input-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:color-mix(in srgb,var(--pc-color-input-text,var(--pc-color-text)) 32%,var(--pc-color-input-background,var(--pc-color-surface)))}}.\\[background\\:var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-accordion-header-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-accordion-header-background-selected\\,var\\(--pc-color-accordion-header-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-accordion-header-background-selected,var(--pc-color-accordion-header-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-accordion-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-accordion-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-bonus-picker-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-bonus-picker-background-selected\\,var\\(--pc-color-bonus-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-bonus-picker-background-selected,var(--pc-color-bonus-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-bonus-summary-background\\,var\\(--pc-bonus-summary-surface-colour\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-bonus-summary-background,var(--pc-bonus-summary-surface-colour,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\]{background:var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest)))}.\\[background\\:var\\(--pc-color-list-item-background-selected\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-list-item-background-selected,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\]{background:var(--pc-color-panel-background,var(--pc-color-surface))}.\\[background\\:var\\(--pc-color-payment-method-switcher-background\\,transparent\\)\\]{background:var(--pc-color-payment-method-switcher-background,transparent)}.\\[background\\:var\\(--pc-color-payment-summary-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\]{background:var(--pc-color-payment-summary-background,var(--pc-color-panel-background,var(--pc-color-surface)))}.\\[background\\:var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-outline-surface\\,transparent\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-outline-surface,transparent))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background-muted\\,var\\(--pc-color-list-item-background-muted\\,var\\(--pc-color-panel-background-muted\\,var\\(--pc-color-surface-weakest\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background-muted,var(--pc-color-list-item-background-muted,var(--pc-color-panel-background-muted,var(--pc-color-surface-weakest))))}.\\[background\\:var\\(--pc-color-payment-type-picker-background-selected\\,var\\(--pc-color-payment-type-picker-background\\,var\\(--pc-color-list-item-background\\,var\\(--pc-color-panel-background\\,var\\(--pc-color-surface\\)\\)\\)\\)\\)\\]{background:var(--pc-color-payment-type-picker-background-selected,var(--pc-color-payment-type-picker-background,var(--pc-color-list-item-background,var(--pc-color-panel-background,var(--pc-color-surface)))))}.\\[background\\:var\\(--pc-color-surface\\)\\]{background:var(--pc-color-surface)}.\\[background\\:var\\(--pc-color-transparent\\)\\]{background:var(--pc-color-transparent)}.\\[outline-style\\:solid\\]{outline-style:solid}@media (hover:hover){.group-hover\\:opacity-80:is(:where(.group):hover *){opacity:.8}.group-hover\\:\\[background\\:var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-hover\\:\\[background\\:var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-hover\\:\\[background\\:var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))}.group-hover\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):hover *){background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}}.group-active\\:\\[background\\:var\\(--pc-color-accordion-header-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-active\\:\\[background\\:var\\(--pc-color-bonus-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-active\\:\\[background\\:var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.group-active\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:is(:where(.group):active *){background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.group-data-\\[stuck\\=true\\]\\:mt-0:is(:where(.group)[data-stuck=true] *){margin-top:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:mb-0:is(:where(.group)[data-stuck=true] *){margin-bottom:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:h-6:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:w-6:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 6)}.group-data-\\[stuck\\=true\\]\\:w-auto:is(:where(.group)[data-stuck=true] *){width:auto}.group-data-\\[stuck\\=true\\]\\:max-w-full:is(:where(.group)[data-stuck=true] *){max-width:100%}.group-data-\\[stuck\\=true\\]\\:min-w-0:is(:where(.group)[data-stuck=true] *){min-width:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:min-w-\\[10ch\\]:is(:where(.group)[data-stuck=true] *){min-width:10ch}.group-data-\\[stuck\\=true\\]\\:flex-1:is(:where(.group)[data-stuck=true] *){flex:1}.group-data-\\[stuck\\=true\\]\\:flex-none:is(:where(.group)[data-stuck=true] *){flex:none}.group-data-\\[stuck\\=true\\]\\:shrink-0:is(:where(.group)[data-stuck=true] *){flex-shrink:0}.group-data-\\[stuck\\=true\\]\\:flex-col:is(:where(.group)[data-stuck=true] *){flex-direction:column}.group-data-\\[stuck\\=true\\]\\:flex-row:is(:where(.group)[data-stuck=true] *){flex-direction:row}.group-data-\\[stuck\\=true\\]\\:flex-wrap:is(:where(.group)[data-stuck=true] *){flex-wrap:wrap}.group-data-\\[stuck\\=true\\]\\:items-center:is(:where(.group)[data-stuck=true] *){align-items:center}.group-data-\\[stuck\\=true\\]\\:items-start:is(:where(.group)[data-stuck=true] *){align-items:flex-start}.group-data-\\[stuck\\=true\\]\\:justify-between:is(:where(.group)[data-stuck=true] *){justify-content:space-between}.group-data-\\[stuck\\=true\\]\\:gap-1:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:gap-3:is(:where(.group)[data-stuck=true] *){gap:calc(var(--spacing) * 3)}.group-data-\\[stuck\\=true\\]\\:py-0:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 0)}.group-data-\\[stuck\\=true\\]\\:py-1:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 1)}.group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pt-2:is(:where(.group)[data-stuck=true] *){padding-top:calc(var(--spacing) * 2)}.group-data-\\[stuck\\=true\\]\\:pb-0\\.5:is(:where(.group)[data-stuck=true] *){padding-bottom:calc(var(--spacing) * .5)}.group-data-\\[stuck\\=true\\]\\:text-center:is(:where(.group)[data-stuck=true] *){text-align:center}.group-data-\\[stuck\\=true\\]\\:text-left:is(:where(.group)[data-stuck=true] *){text-align:left}.group-data-\\[stuck\\=true\\]\\:text-base:is(:where(.group)[data-stuck=true] *){font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.placeholder\\:text-\\[var\\(--pc-color-border\\)\\]::placeholder{color:var(--pc-color-border)}.last\\:border-b-0:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}@media (hover:hover){.hover\\:bg-\\[var\\(--pc-color-control-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:hover{background-color:var(--pc-color-control-background-hover,var(--pc-color-surface-weaker))}.hover\\:text-\\[var\\(--pc-color-accordion-header-text-hover\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-bonus-picker-text-hover\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-list-item-text-hover\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\]:hover{color:var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text)))}.hover\\:text-\\[var\\(--pc-color-payment-method-switcher-text-hover\\,var\\(--pc-color-payment-method-switcher-text-active\\,var\\(--pc-color-text\\)\\)\\)\\]:hover{color:var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-payment-method-switcher-text-active,var(--pc-color-text)))}.hover\\:text-\\[var\\(--pc-color-payment-method-switcher-text-hover\\,var\\(--pc-color-text\\)\\)\\]:hover{color:var(--pc-color-payment-method-switcher-text-hover,var(--pc-color-text))}.hover\\:text-\\[var\\(--pc-color-payment-type-picker-text-hover\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:hover{color:var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text))))}.hover\\:text-\\[var\\(--pc-color-text\\)\\]:hover{color:var(--pc-color-text)}.hover\\:\\[background\\:var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\]:hover{background:var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker))}.hover\\:\\[background\\:var\\(--pc-color-payment-method-switcher-background-hover\\,var\\(--pc-color-border-weakest\\)\\)\\]:hover{background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-border-weakest))}.hover\\:\\[background\\:var\\(--pc-color-payment-method-switcher-background-hover\\,var\\(--pc-color-payment-method-switcher-background\\,transparent\\)\\)\\]:hover{background:var(--pc-color-payment-method-switcher-background-hover,var(--pc-color-payment-method-switcher-background,transparent))}.hover\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:hover{background:var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.hover\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover{background:var(--pc-color-surface-weaker)}}.focus-visible\\:ring-2:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.focus-visible\\:ring-\\[var\\(--pc-color-accent\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-accent)}.focus-visible\\:ring-\\[var\\(--pc-color-button-focus-ring\\,var\\(--pc-color-text\\)\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-button-focus-ring,var(--pc-color-text))}.focus-visible\\:ring-\\[var\\(--pc-color-text\\)\\]:focus-visible{--tw-ring-color:var(--pc-color-text)}.focus-visible\\:ring-offset-2:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}.focus-visible\\:ring-offset-transparent:focus-visible{--tw-ring-offset-color:transparent}.focus-visible\\:outline-none:focus-visible{--tw-outline-style:none;outline-style:none}.active\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\]:active{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.active\\:text-\\[var\\(--pc-color-accordion-header-text-active\\,var\\(--pc-color-accordion-header-text-hover\\,var\\(--pc-color-accordion-header-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-accordion-header-text-active,var(--pc-color-accordion-header-text-hover,var(--pc-color-accordion-header-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:text-\\[var\\(--pc-color-bonus-picker-text-active\\,var\\(--pc-color-bonus-picker-text-hover\\,var\\(--pc-color-bonus-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-bonus-picker-text-active,var(--pc-color-bonus-picker-text-hover,var(--pc-color-bonus-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\]:active{color:var(--pc-color-control-text,var(--pc-color-text))}.active\\:text-\\[var\\(--pc-color-list-item-text-active\\,var\\(--pc-color-list-item-text-hover\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\]:active{color:var(--pc-color-list-item-text-active,var(--pc-color-list-item-text-hover,var(--pc-color-list-item-text,var(--pc-color-text))))}.active\\:text-\\[var\\(--pc-color-payment-type-picker-text-active\\,var\\(--pc-color-payment-type-picker-text-hover\\,var\\(--pc-color-payment-type-picker-text\\,var\\(--pc-color-list-item-text\\,var\\(--pc-color-text\\)\\)\\)\\)\\)\\]:active{color:var(--pc-color-payment-type-picker-text-active,var(--pc-color-payment-type-picker-text-hover,var(--pc-color-payment-type-picker-text,var(--pc-color-list-item-text,var(--pc-color-text)))))}.active\\:\\[background\\:var\\(--pc-color-accordion-header-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-accordion-header-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-accordion-header-background-active,var(--pc-color-list-item-background-active,var(--pc-color-accordion-header-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-bonus-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-bonus-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-bonus-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-bonus-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\]:active{background:var(--pc-color-list-item-background-active,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))}.active\\:\\[background\\:var\\(--pc-color-payment-type-picker-background-active\\,var\\(--pc-color-list-item-background-active\\,var\\(--pc-color-payment-type-picker-background-hover\\,var\\(--pc-color-list-item-background-hover\\,var\\(--pc-color-surface-weaker\\)\\)\\)\\)\\)\\]:active{background:var(--pc-color-payment-type-picker-background-active,var(--pc-color-list-item-background-active,var(--pc-color-payment-type-picker-background-hover,var(--pc-color-list-item-background-hover,var(--pc-color-surface-weaker)))))}.active\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active{background:var(--pc-color-surface-weaker)}@media (hover:hover){.enabled\\:hover\\:text-\\[var\\(--pc-color-suggested-amount-text-hover\\,var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\)\\]:enabled:hover{color:var(--pc-color-suggested-amount-text-hover,var(--pc-color-control-text,var(--pc-color-text)))}}.enabled\\:active\\:text-\\[var\\(--pc-color-suggested-amount-text-active\\,var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\)\\]:enabled:active{color:var(--pc-color-suggested-amount-text-active,var(--pc-color-control-text,var(--pc-color-text)))}.disabled\\:cursor-default:disabled{cursor:default}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-55:disabled{opacity:.55}.disabled\\:opacity-60:disabled{opacity:.6}.data-\\[active\\=true\\]\\:bg-\\[var\\(--pc-color-control-background-active\\,var\\(--pc-color-surface-strongest\\)\\)\\][data-active=true]{background-color:var(--pc-color-control-background-active,var(--pc-color-surface-strongest))}.data-\\[active\\=true\\]\\:text-\\[var\\(--pc-color-control-text\\,var\\(--pc-color-text\\)\\)\\][data-active=true]{color:var(--pc-color-control-text,var(--pc-color-text))}.data-\\[focus-visible\\=true\\]\\:ring-2[data-focus-visible=true]{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow)}.data-\\[focus-visible\\=true\\]\\:ring-\\[var\\(--pc-color-button-focus-ring\\,var\\(--pc-color-text\\)\\)\\][data-focus-visible=true]{--tw-ring-color:var(--pc-color-button-focus-ring,var(--pc-color-text))}.data-\\[focus-visible\\=true\\]\\:outline-none[data-focus-visible=true]{--tw-outline-style:none;outline-style:none}@container interactive-prompt not (width>=28rem){.\\@max-md\\/interactive-prompt\\:h-12{height:calc(var(--spacing) * 12)}.\\@max-md\\/interactive-prompt\\:w-12{width:calc(var(--spacing) * 12)}}@container (width>=20rem){.\\@xs\\:gap-1{gap:calc(var(--spacing) * 1)}.\\@xs\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@xs\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}@container (width>=24rem){.\\@sm\\:h-12{height:calc(var(--spacing) * 12)}.\\@sm\\:h-\\[var\\(--pc-size-logo-mark-surface-height\\,var\\(--pc-size-logo-mark-height\\,3rem\\)\\)\\]{height:var(--pc-size-logo-mark-surface-height,var(--pc-size-logo-mark-height,3rem))}.\\@sm\\:min-h-\\[11\\.75rem\\]{min-height:11.75rem}.\\@sm\\:w-12{width:calc(var(--spacing) * 12)}.\\@sm\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,3rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,3rem))}.\\@sm\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@sm\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@sm\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@sm\\:pr-3{padding-right:calc(var(--spacing) * 3)}.\\@sm\\:pb-2{padding-bottom:calc(var(--spacing) * 2)}.\\@sm\\:pl-\\[1\\.1rem\\]{padding-left:1.1rem}.\\@sm\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@sm\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@sm\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@sm\\:text-\\[length\\:var\\(--pc-font-size-bonus-summary\\,var\\(--pc-bonus-summary-font-size\\,1\\.125rem\\)\\)\\]{font-size:var(--pc-font-size-bonus-summary,var(--pc-bonus-summary-font-size,1.125rem))}.\\@sm\\:\\[--pc-payment-list-item-content-inset\\:3\\.5rem\\]{--pc-payment-list-item-content-inset:3.5rem}.\\@sm\\:\\[--pc-payment-list-item-content-inset\\:3\\.75rem\\]{--pc-payment-list-item-content-inset:3.75rem}}@container (width>=28rem){.\\@md\\:-mt-3{margin-top:calc(var(--spacing) * -3)}.\\@md\\:mt-0{margin-top:calc(var(--spacing) * 0)}.\\@md\\:mb-3{margin-bottom:calc(var(--spacing) * 3)}.\\@md\\:mb-4{margin-bottom:calc(var(--spacing) * 4)}.\\@md\\:h-16{height:calc(var(--spacing) * 16)}.\\@md\\:min-h-\\[10rem\\]{min-height:10rem}.\\@md\\:min-h-\\[27cqw\\]{min-height:27cqw}.\\@md\\:min-h-\\[30cqw\\]{min-height:30cqw}.\\@md\\:min-h-\\[31cqw\\]{min-height:31cqw}.\\@md\\:w-16{width:calc(var(--spacing) * 16)}.\\@md\\:-translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * -.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:-translate-y-1{--tw-translate-y:calc(var(--spacing) * -1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:translate-y-0\\.5{--tw-translate-y:calc(var(--spacing) * .5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\@md\\:justify-around{justify-content:space-around}.\\@md\\:gap-1\\.5{gap:calc(var(--spacing) * 1.5)}.\\@md\\:gap-2{gap:calc(var(--spacing) * 2)}.\\@md\\:gap-3{gap:calc(var(--spacing) * 3)}.\\@md\\:gap-4{gap:calc(var(--spacing) * 4)}.\\@md\\:gap-5{gap:calc(var(--spacing) * 5)}.\\@md\\:px-2{padding-inline:calc(var(--spacing) * 2)}.\\@md\\:px-3{padding-inline:calc(var(--spacing) * 3)}.\\@md\\:px-3\\.5{padding-inline:calc(var(--spacing) * 3.5)}.\\@md\\:px-5{padding-inline:calc(var(--spacing) * 5)}.\\@md\\:py-2{padding-block:calc(var(--spacing) * 2)}.\\@md\\:py-4{padding-block:calc(var(--spacing) * 4)}.\\@md\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\@md\\:pt-3{padding-top:calc(var(--spacing) * 3)}.\\@md\\:pt-4{padding-top:calc(var(--spacing) * 4)}.\\@md\\:pb-2{padding-bottom:calc(var(--spacing) * 2)}.\\@md\\:pb-4{padding-bottom:calc(var(--spacing) * 4)}.\\@md\\:pb-7{padding-bottom:calc(var(--spacing) * 7)}.\\@md\\:pl-\\[1\\.2rem\\]{padding-left:1.2rem}.\\@md\\:text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.\\@md\\:text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.\\@md\\:text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.\\@md\\:leading-snug{--tw-leading:var(--leading-snug);line-height:var(--leading-snug)}.\\@md\\:leading-tight{--tw-leading:var(--leading-tight);line-height:var(--leading-tight)}.\\@md\\:\\[--pc-payment-list-item-content-inset\\:3\\.25rem\\]{--pc-payment-list-item-content-inset:3.25rem}.\\@md\\:\\[--pc-payment-list-item-inline-padding\\:0\\.75rem\\]{--pc-payment-list-item-inline-padding:.75rem}.\\@md\\:group-data-\\[stuck\\=true\\]\\:h-8:is(:where(.group)[data-stuck=true] *){height:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:w-8:is(:where(.group)[data-stuck=true] *){width:calc(var(--spacing) * 8)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:py-2:is(:where(.group)[data-stuck=true] *){padding-block:calc(var(--spacing) * 2)}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-lg:is(:where(.group)[data-stuck=true] *){font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.\\@md\\:group-data-\\[stuck\\=true\\]\\:text-xl:is(:where(.group)[data-stuck=true] *){font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=32rem){.\\@lg\\:min-h-\\[12\\.25rem\\]{min-height:12.25rem}.\\@lg\\:justify-start{justify-content:flex-start}.\\@lg\\:gap-2\\.5{gap:calc(var(--spacing) * 2.5)}.\\@lg\\:\\[--pc-payment-list-item-content-inset\\:3\\.625rem\\]{--pc-payment-list-item-content-inset:3.625rem}}@container (width>=36rem){.\\@xl\\:col-span-2{grid-column:span 2/span 2}.\\@xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@xl\\:w-\\[var\\(--pc-size-logo-mark-surface-width\\,var\\(--pc-size-logo-mark-width\\,4rem\\)\\)\\]{width:var(--pc-size-logo-mark-surface-width,var(--pc-size-logo-mark-width,4rem))}.\\@xl\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.\\@xl\\:py-5{padding-block:calc(var(--spacing) * 5)}.\\@xl\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\@xl\\:pt-5{padding-top:calc(var(--spacing) * 5)}.\\@xl\\:pb-0{padding-bottom:calc(var(--spacing) * 0)}.\\@xl\\:pb-2\\.5{padding-bottom:calc(var(--spacing) * 2.5)}.\\@xl\\:\\[--pc-payment-list-item-content-inset\\:4\\.625rem\\]{--pc-payment-list-item-content-inset:4.625rem}}@container (width>=42rem){.\\@2xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}@container (width>=48rem){.\\@3xl\\:h-16{height:calc(var(--spacing) * 16)}.\\@3xl\\:w-16{width:calc(var(--spacing) * 16)}.\\@3xl\\:grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.\\@3xl\\:text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:transition-\\[background-color\\] [data-pc-appearance=solid]{transition-property:background-color;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:duration-\\[250ms\\] [data-pc-appearance=solid]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:ease-out [data-pc-appearance=solid]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:hover [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-pc-appearance\\=solid\\]\\]\\:\\[background\\:var\\(--pc-color-surface-weaker\\)\\]:active [data-pc-appearance=solid]{background:var(--pc-color-surface-weaker)}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:transition-colors [data-slot=interactive-prompt-tail]{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:duration-\\[250ms\\] [data-slot=interactive-prompt-tail]{--tw-duration:.25s;transition-duration:.25s}.\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:ease-out [data-slot=interactive-prompt-tail]{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}@media (hover:hover){.hover\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:hover [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}}.active\\:\\[\\&_\\[data-slot\\=interactive-prompt-tail\\]\\]\\:text-\\[var\\(--pc-color-surface-weaker\\)\\]:active [data-slot=interactive-prompt-tail]{color:var(--pc-color-surface-weaker)}.\\[\\&_\\[data-switcher-mode\\=full\\]\\]\\:w-full [data-switcher-mode=full]{width:100%}.\\[\\&_iframe\\]\\:h-full iframe{height:100%}.\\[\\&_iframe\\]\\:w-full iframe{width:100%}.\\[\\&_img\\]\\:\\!h-full img{height:100%!important}.\\[\\&_img\\]\\:\\!w-full img{width:100%!important}.\\[\\&_li\\]\\:\\!text-sm li{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\[\\&_li\\]\\:\\!leading-snug li{--tw-leading:var(--leading-snug)!important;line-height:var(--leading-snug)!important}.\\[\\&_p\\]\\:\\!text-sm p{font-size:var(--text-sm)!important;line-height:var(--tw-leading,var(--text-sm--line-height))!important}.\\[\\&_p\\]\\:\\!leading-snug p{--tw-leading:var(--leading-snug)!important;line-height:var(--leading-snug)!important}.\\[\\&_svg\\]\\:\\!h-full svg{height:100%!important}.\\[\\&_svg\\]\\:\\!w-full svg{width:100%!important}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-internal-autofill-selected{background-color:var(--pc-color-transparent)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{caret-color:var(--pc-color-text)}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-internal-autofill-selected{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-internal-autofill-selected\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-internal-autofill-selected{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[background-color\\:var\\(--pc-color-transparent\\)\\]:-webkit-autofill{background-color:var(--pc-color-transparent)}.\\[\\&\\:-webkit-autofill\\]\\:\\[caret-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{caret-color:var(--pc-color-text)}.\\[\\&\\:-webkit-autofill\\]\\:\\[box-shadow\\:0_0_0_1000px_var\\(--pc-color-transparent\\)_inset\\]:-webkit-autofill{box-shadow:0 0 0 1000px var(--pc-color-transparent) inset}.\\[\\&\\:-webkit-autofill\\]\\:\\[-webkit-text-fill-color\\:var\\(--pc-color-text\\)\\]:-webkit-autofill{-webkit-text-fill-color:var(--pc-color-text)}.\\[\\&\\:first-child\\]\\:flex-\\[1\\.7_1_10rem\\]:first-child{flex:1.7 10rem}.\\[\\&\\:not\\(\\:first-child\\)\\]\\:flex-\\[0\\.7_1_4\\.25rem\\]:not(:first-child){flex:.7 4.25rem}.\\[\\&\\>\\*\\]\\:h-full>*{height:100%}.\\[\\&\\>\\*\\]\\:\\!max-h-none>*{max-height:none!important}.\\[\\&\\>\\*\\]\\:w-full>*{width:100%}.\\[\\&\\>\\*\\]\\:\\!max-w-none>*{max-width:none!important}.\\[\\&\\>button\\+button\\]\\:ml-1>button+button{margin-left:calc(var(--spacing) * 1)}@container (height<=520px){.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2{padding-top:calc(var(--spacing) * 2)}.\\[\\@container_\\(max-height\\:520px\\)\\]\\:pt-2\\.25{padding-top:calc(var(--spacing) * 2.25)}}@container (height<=620px){.\\[\\@container_\\(max-height\\:620px\\)\\]\\:justify-start{justify-content:flex-start}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-2\\.5{padding-top:calc(var(--spacing) * 2.5)}.\\[\\@container_\\(max-height\\:620px\\)\\]\\:pt-3{padding-top:calc(var(--spacing) * 3)}}@container (width<=500px){.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch.\\[\\@container_\\(max-width\\:500px\\)\\]\\:\\[\\&\\&\\]\\:items-stretch{align-items:stretch}}@container (width<=520px){.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-2{--tw-translate-y:calc(var(--spacing) * -2);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-2\\.5{--tw-translate-y:calc(var(--spacing) * -2.5);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:-translate-y-3{--tw-translate-y:calc(var(--spacing) * -3);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:translate-y-1{--tw-translate-y:calc(var(--spacing) * 1);translate:var(--tw-translate-x) var(--tw-translate-y)}.\\[\\@container_\\(max-width\\:520px\\)\\]\\:gap-1{gap:calc(var(--spacing) * 1)}}@container (width<=620px){.\\[\\@container_\\(max-width\\:620px\\)\\]\\:pl-1\\.5{padding-left:calc(var(--spacing) * 1.5)}}@container (width>=520px){.\\[\\@container_\\(min-width\\:520px\\)\\]\\:-mt-0\\.5{margin-top:calc(var(--spacing) * -.5)}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:mt-0\\.5{margin-top:calc(var(--spacing) * .5)}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:min-h-\\[31\\.5cqw\\]{min-height:31.5cqw}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:gap-\\[1\\.125rem\\]{gap:1.125rem}.\\[\\@container_\\(min-width\\:520px\\)\\]\\:py-3\\.5{padding-block:calc(var(--spacing) * 3.5)}}[data-pc-bottom-rail-fade=true] .\\[\\[data-pc-bottom-rail-fade\\=true\\]_\\&\\]\\:scroll-pb-\\[44px\\]{scroll-padding-bottom:44px}}.pc-cashier__root{min-height:inherit;font-family:inherit}.pc-cashier__root :where(button,input,select,textarea){font-family:inherit}.pc-cashier__hosted-fields-container[data-motion=static] .pc-skeleton-shimmer,.pc-cashier__hosted-fields-container[data-motion=static] .pc-skeleton-shimmer:after{animation:none}.pc-scrollbar-hidden{-ms-overflow-style:none;scrollbar-width:none}.pc-scrollbar-hidden::-webkit-scrollbar{display:none}@media (prefers-reduced-motion:no-preference){.pc-enter-rise{backface-visibility:hidden;animation:.32s cubic-bezier(.22,1,.36,1) both pc-enter-rise}.pc-enter-rise-item{backface-visibility:hidden;animation:.36s cubic-bezier(.16,1,.3,1) both pc-enter-rise-item}.pc-enter-drift-item{backface-visibility:hidden;animation:.32s cubic-bezier(.16,1,.3,1) both pc-enter-drift-item}.pc-enter-lift-item{backface-visibility:hidden;animation:.36s cubic-bezier(.18,1,.28,1) both pc-enter-lift-item}.pc-enter-tray-item{backface-visibility:hidden;animation:.44s cubic-bezier(.2,.88,.3,1) both pc-enter-tray-item}.pc-enter-panel{backface-visibility:hidden;animation:.38s cubic-bezier(.2,.88,.28,1) both pc-enter-panel}.pc-enter-panel-item{backface-visibility:hidden;animation:.62s cubic-bezier(.16,.92,.28,1) both pc-enter-panel-item}.pc-enter-sweep{backface-visibility:hidden;animation:.62s cubic-bezier(.2,.84,.26,1) both pc-enter-sweep}.pc-enter-sweep-item{transform-origin:top;backface-visibility:hidden;animation:1.32s cubic-bezier(.18,.8,.22,1) both pc-enter-sweep-item}}@keyframes pc-cashier-fullscreen-content-reveal{0%{opacity:0}to{opacity:1}}@media (prefers-reduced-motion:no-preference) and (pointer:coarse){.pc-enter-rise{animation-duration:.28s}.pc-enter-rise-item{animation-duration:.32s}.pc-enter-drift-item{animation-duration:.28s}.pc-enter-lift-item{animation-duration:.32s}.pc-enter-tray-item{animation-duration:.4s}.pc-enter-panel{animation-duration:.34s}.pc-enter-panel-item{animation-duration:.54s}.pc-enter-sweep{animation-duration:.56s}.pc-enter-sweep-item{animation-duration:1.16s}}@keyframes pc-enter-rise{0%{opacity:0;transform:translateY(.75rem)}to{opacity:1;transform:translate(0)}}@keyframes pc-enter-rise-item{0%{opacity:0;transform:translateY(.5rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-drift-item{0%{opacity:0;transform:translateY(.9rem)scale(.96)}68%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.04rem)scale(1.008)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)scale(1)}}@keyframes pc-enter-lift-item{0%{opacity:0;transform:translateY(.95rem)scale(.972)}76%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.03rem)scale(1.004)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)scale(1)}}@keyframes pc-enter-tray-item{0%{opacity:0;transform:translateY(1.75rem)}68%{opacity:var(--pc-enter-final-opacity,1)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-panel{0%{opacity:0;transform:translateY(.6rem)}to{opacity:1;transform:translate(0)}}@keyframes pc-enter-panel-item{0%{opacity:0;transform:translateY(.6rem)}72%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(.05rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@keyframes pc-enter-sweep{0%{opacity:0;transform:translateY(-.12rem)}68%{opacity:.97;transform:translateY(-.02rem)}to{opacity:1;transform:translate(0)}}@keyframes pc-enter-sweep-item{0%{opacity:0;transform:translateY(-.34rem)}82%{opacity:var(--pc-enter-final-opacity,1);transform:translateY(-.04rem)}to{opacity:var(--pc-enter-final-opacity,1);transform:translate(0)}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}", Tp = {
	bonuses: void 0,
	user: void 0,
	userBalance: void 0,
	selectedBonusCode: null,
	hasBonusesOverride: !1,
	hasUserOverride: !1,
	hasUserBalanceOverride: !1
};
function Ep({ config: e, onHandleChange: t }) {
	let n = q((e) => {
		t?.(e);
	}, [t]);
	return /* @__PURE__ */ Q(gp, {
		ref: n,
		config: e ?? {}
	});
}
var Dp = !1, Op = () => {
	if (Dp || typeof document > "u") return;
	let e = "cashier-styles";
	if (document.getElementById(e)) {
		Dp = !0;
		return;
	}
	let t = document.createElement("style");
	t.id = e, t.textContent = `${Cp}\n${wp}`, document.head.appendChild(t), Dp = !0;
}, kp = (() => {
	if (typeof window > "u" || typeof HTMLElement > "u") return;
	class e extends HTMLElement {
		root;
		configValue;
		cashierHandle = null;
		runtimeState = Tp;
		static get observedAttributes() {
			return ["config"];
		}
		get config() {
			return this.configValue;
		}
		set config(e) {
			this.configValue = e, this.resetRuntimeState(), this.renderComponent();
		}
		setBonuses(e) {
			this.runtimeState = {
				...this.runtimeState,
				bonuses: e,
				hasBonusesOverride: e !== void 0
			}, this.cashierHandle?.setBonuses(e);
		}
		setUser(e) {
			this.runtimeState = {
				...this.runtimeState,
				user: e,
				hasUserOverride: e !== void 0
			}, this.cashierHandle?.setUser(e);
		}
		setUserBalance(e) {
			this.runtimeState = {
				...this.runtimeState,
				userBalance: e,
				hasUserBalanceOverride: e !== void 0
			}, this.cashierHandle?.setUserBalance(e);
		}
		setSelectedBonusCode(e) {
			this.runtimeState = {
				...this.runtimeState,
				selectedBonusCode: e
			}, this.cashierHandle?.setSelectedBonusCode(e);
		}
		clearSelectedBonus() {
			this.runtimeState = {
				...this.runtimeState,
				selectedBonusCode: null
			}, this.cashierHandle?.clearSelectedBonus();
		}
		parseConfigAttr(e) {
			try {
				return JSON.parse(e);
			} catch {
				return;
			}
		}
		applyHostSizing() {
			this.style.display || (this.style.display = "block"), this.style.width || (this.style.width = "100%"), this.style.height || (this.style.height = "100%");
		}
		resetRuntimeState() {
			this.runtimeState = Tp, this.cashierHandle = null;
		}
		syncRuntimeState() {
			this.cashierHandle && (this.runtimeState.hasBonusesOverride && this.cashierHandle.setBonuses(this.runtimeState.bonuses), this.runtimeState.hasUserOverride && this.cashierHandle.setUser(this.runtimeState.user), this.runtimeState.hasUserBalanceOverride && this.cashierHandle.setUserBalance(this.runtimeState.userBalance), this.runtimeState.selectedBonusCode !== null && this.cashierHandle.setSelectedBonusCode(this.runtimeState.selectedBonusCode));
		}
		handleCashierHandleChange = (e) => {
			this.cashierHandle = e, e && this.syncRuntimeState();
		};
		connectedCallback() {
			this.applyHostSizing();
			let e = this.getAttribute("config");
			e && !this.configValue && (this.configValue = this.parseConfigAttr(e)), this.renderComponent();
		}
		attributeChangedCallback(e, t, n) {
			e === "config" && (this.configValue = n ? this.parseConfigAttr(n) : void 0, this.resetRuntimeState(), this.renderComponent());
		}
		disconnectedCallback() {
			this.root?.unmount(), this.root = void 0, this.cashierHandle = null;
		}
		renderComponent() {
			this.isConnected && (this.root ||= mi(this), this.root.render(/* @__PURE__ */ Q(Ep, {
				config: this.configValue,
				onHandleChange: this.handleCashierHandleChange
			})));
		}
	}
	return e;
})(), Ap = (e = "pc-cashier") => typeof customElements > "u" || !kp ? e : (Op(), customElements.get(e) || customElements.define(e, kp), e), jp = gp, Mp = s, Np = Ap;
//#endregion
export { jp as Cashier, jp as default, t as CashierBonusesStyle, n as CashierComboViewPaymentTypesMode, r as CashierLayoutListType, i as CashierMethods, a as CashierSuggestAction, o as CashierSummaryActionType, Mp as defaultCashierConfig, Np as defineCashier };
